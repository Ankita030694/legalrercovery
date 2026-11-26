import type { ChatEvent } from "@/lib/wati-bot-flow";

/**
 * Minimal client for the Legal Recovery WATI account (WATI_API_KEY + WATI_API_ENDPOINT): read
 * contacts and chat history, send a free-form reply inside the 24-hour customer service window.
 *
 * Every call counts towards WATI's monthly API quota (10,000 on the Growth plan), shared with OTPs,
 * reminders and notices, so callers keep the number of calls small.
 */

const TIMEOUT_MS = 10_000;

export class WatiApiError extends Error {
  constructor(message: string, readonly status: number) {
    super(message);
    this.name = "WatiApiError";
  }
}

function config() {
  const apiKey = process.env.WATI_API_KEY;
  const endpoint = process.env.WATI_API_ENDPOINT;
  if (!apiKey || !endpoint) {
    throw new WatiApiError("WATI_API_KEY or WATI_API_ENDPOINT is not configured", 0);
  }
  return {
    base: endpoint.replace(/\/$/, ""),
    auth: apiKey.startsWith("Bearer ") ? apiKey : `Bearer ${apiKey}`,
  };
}

async function watiFetch(path: string, init: RequestInit = {}): Promise<any> {
  const { base, auth } = config();
  const response = await fetch(`${base}${path}`, {
    ...init,
    headers: { Authorization: auth, ...(init.headers || {}) },
    signal: AbortSignal.timeout(TIMEOUT_MS),
    cache: "no-store",
  });
  const text = await response.text();
  if (!response.ok) {
    throw new WatiApiError(`WATI ${response.status}: ${text.slice(0, 200)}`, response.status);
  }
  try {
    return JSON.parse(text);
  } catch {
    throw new WatiApiError(`WATI returned non-JSON: ${text.slice(0, 120)}`, response.status);
  }
}

/** 12-digit WhatsApp id ("91" + mobile) from a 10-digit Indian mobile. */
export function toWaId(phone10: string): string {
  return `91${phone10}`;
}

export interface WatiContact {
  waId: string;
  name: string;
  lastUpdated: Date;
  isInFlow: boolean;
  lastFlowId: string | null;
  currentFlowNodeId: string | null;
}

/** One page of contacts, most recently updated first. */
export async function getRecentContacts(pageNumber: number, pageSize = 50): Promise<WatiContact[]> {
  const data = await watiFetch(
    `/api/v1/getContacts?pageSize=${pageSize}&pageNumber=${pageNumber}`
  );
  const list: any[] = Array.isArray(data?.contact_list) ? data.contact_list : [];
  return list
    .map((c) => ({
      waId: String(c.wAid || c.phone || "").replace(/\D/g, ""),
      name: String(c.fullName || c.firstName || "").slice(0, 80),
      lastUpdated: new Date(c.lastUpdated),
      isInFlow: c.isInFlow === true,
      lastFlowId: typeof c.lastFlowId === "string" ? c.lastFlowId : null,
      currentFlowNodeId: typeof c.currentFlowNodeId === "string" ? c.currentFlowNodeId : null,
    }))
    .filter((c) => c.waId && !Number.isNaN(c.lastUpdated.getTime()));
}

function messageText(item: any): string {
  const candidates = [
    item.text,
    item.finalText,
    typeof item.data === "string" && !/^https?:\/\//.test(item.data) ? item.data : null,
    item.interactiveData?.body?.text,
    item.interactiveData?.body,
    item.interactiveData?.text,
    item.replyButtonViewModel?.text,
  ];
  const found = candidates.find((value) => typeof value === "string" && value.trim());
  return found ? String(found) : "";
}

/** Recent text messages of one chat (newest page), as chat events. */
export async function getChatEvents(waId: string, pageSize = 100): Promise<ChatEvent[]> {
  if (!/^\d{12}$/.test(waId)) throw new WatiApiError("Invalid WhatsApp id", 0);
  const data = await watiFetch(`/api/v1/getMessages/${waId}?pageSize=${pageSize}&pageNumber=1`);
  const items: any[] = Array.isArray(data?.messages?.items) ? data.messages.items : [];
  return items
    .filter((item) => item?.eventType === "message")
    .map((item) => ({
      at: new Date(item.created || item.timestamp),
      fromBusiness: item.owner === true,
      text: messageText(item),
    }))
    .filter((event) => event.text && !Number.isNaN(event.at.getTime()));
}

/** Free-form text reply; only delivered within 24 hours of the person's last message. */
export async function sendSessionText(waId: string, text: string): Promise<void> {
  if (!/^\d{12}$/.test(waId)) throw new WatiApiError("Invalid WhatsApp id", 0);
  const data = await watiFetch(
    `/api/v1/sendSessionMessage/${waId}?messageText=${encodeURIComponent(text)}`,
    { method: "POST" }
  );
  if (data?.result === false || data?.ok === false) {
    throw new WatiApiError(`WATI refused the message: ${String(data?.info || "").slice(0, 160)}`, 200);
  }
}
