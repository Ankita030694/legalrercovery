/**
 * Meta Conversions API (server-side events).
 * Sends the same events as the browser pixel so Meta still receives them when the
 * pixel is blocked (ad blockers, iOS, in-app browsers). Meta deduplicates the pair
 * by event_name + event_id, so the browser and server copies count once.
 *
 * Requires META_CAPI_ACCESS_TOKEN (Events Manager → Settings → Conversions API).
 * Set META_CAPI_TEST_EVENT_CODE to route events to the Test Events tab instead.
 */
import crypto from "crypto";
import type { NextRequest } from "next/server";
import { META_PIXEL_ID } from "@/lib/metaPixel";
import type { LeadAttribution } from "@/lib/attribution";

const GRAPH_API_VERSION = "v24.0";

function sha256(value: string): string {
  return crypto.createHash("sha256").update(value).digest("hex");
}

/** Meta expects phone numbers as digits with the country code (India: 91). */
function normalizePhone(phone: string): string {
  let digits = phone.replace(/\D/g, "");
  if (digits.length === 11 && digits.startsWith("0")) digits = digits.slice(1);
  if (digits.length === 10) digits = `91${digits}`;
  return digits;
}

function readCookie(req: NextRequest, name: string): string | undefined {
  return req.cookies.get(name)?.value || undefined;
}

/** Everything the event needs from the incoming request, read before the response is sent. */
export interface MetaRequestContext {
  clientIp?: string;
  userAgent?: string;
  sourceUrl?: string;
  fbp?: string;
  fbc?: string;
}

export function getMetaRequestContext(req: NextRequest, attribution?: LeadAttribution | null): MetaRequestContext {
  // The pixel sets _fbc when the visitor lands with ?fbclid=; fall back to the stored click ID.
  let fbc = readCookie(req, "_fbc");
  if (!fbc && attribution?.fbclid) {
    const clickTime = Date.parse(attribution.firstSeenAt) || Date.now();
    fbc = `fb.1.${clickTime}.${attribution.fbclid}`;
  }

  return {
    clientIp: req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || undefined,
    userAgent: req.headers.get("user-agent") || undefined,
    sourceUrl: req.headers.get("referer") || undefined,
    fbp: readCookie(req, "_fbp"),
    fbc,
  };
}

export interface MetaServerEvent {
  eventName: string;
  eventId: string;
  context: MetaRequestContext;
  user: { email?: string; phone?: string; firstName?: string };
  customData?: Record<string, unknown>;
}

/** Sends one event to the Conversions API. Never throws; returns whether Meta accepted it. */
export async function sendMetaServerEvent(event: MetaServerEvent): Promise<boolean> {
  const accessToken = process.env.META_CAPI_ACCESS_TOKEN;
  if (!accessToken) {
    console.error(`[MetaCAPI] META_CAPI_ACCESS_TOKEN is not configured; ${event.eventName} was not sent server-side.`);
    return false;
  }

  const { context, user } = event;
  const userData: Record<string, unknown> = {
    country: [sha256("in")],
    ...(user.email ? { em: [sha256(user.email.trim().toLowerCase())] } : {}),
    ...(user.phone ? { ph: [sha256(normalizePhone(user.phone))] } : {}),
    ...(user.firstName ? { fn: [sha256(user.firstName.trim().split(/\s+/)[0].toLowerCase())] } : {}),
    ...(context.clientIp ? { client_ip_address: context.clientIp } : {}),
    ...(context.userAgent ? { client_user_agent: context.userAgent } : {}),
    ...(context.fbp ? { fbp: context.fbp } : {}),
    ...(context.fbc ? { fbc: context.fbc } : {}),
  };

  const payload = {
    data: [
      {
        event_name: event.eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: event.eventId,
        action_source: "website",
        ...(context.sourceUrl ? { event_source_url: context.sourceUrl } : {}),
        user_data: userData,
        ...(event.customData ? { custom_data: event.customData } : {}),
      },
    ],
    ...(process.env.META_CAPI_TEST_EVENT_CODE ? { test_event_code: process.env.META_CAPI_TEST_EVENT_CODE } : {}),
  };

  try {
    const res = await fetch(
      `https://graph.facebook.com/${GRAPH_API_VERSION}/${META_PIXEL_ID}/events?access_token=${encodeURIComponent(accessToken)}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );
    if (!res.ok) {
      console.error(`[MetaCAPI] ${event.eventName} rejected (${res.status}):`, await res.text().catch(() => ""));
      return false;
    }
    return true;
  } catch (err) {
    console.error(`[MetaCAPI] Failed to send ${event.eventName}:`, err);
    return false;
  }
}
