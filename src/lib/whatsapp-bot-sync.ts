import { Db } from "mongodb";
import { analyseChat, getBotStepByNodeId, matchBotStep } from "@/lib/wati-bot-flow";
import { getChatEvents, getRecentContacts, type WatiContact } from "@/lib/wati-chat";
import { saveBotProgress } from "@/lib/whatsapp-bot-sessions";

/**
 * Pulls chatbot progress from WATI into whatsapp_bot_sessions.
 *
 * Without a WATI webhook (not on the Growth plan) the site cannot be told when someone talks to
 * the bot, so it asks: contacts come back most recently updated first, and only contacts changed
 * since the last run whose position is in this chatbot get their chat history read.
 *
 * API calls are capped per run and counted per month, because the Growth plan's 10,000 calls are
 * shared with OTPs, reminders and notices.
 */

const STATE = "whatsapp_bot_sync_state";
const STATE_ID = "legalrecovery";
const PAGE_SIZE = 50;
const FIRST_RUN_LOOKBACK_MS = 48 * 60 * 60 * 1000;

interface SyncState {
  _id: string;
  cursor: Date | null;
  flowIds: string[];
  notOurFlowIds: string[];
  lastRunAt: Date | null;
  lastRunSummary: Record<string, unknown> | null;
  apiCalls: Record<string, number>; // "YYYY-MM" -> calls made by this sync
}

export interface SyncOptions {
  maxContactPages?: number;
  maxChats?: number;
}

export interface SyncSummary {
  contactsChanged: number;
  chatsRead: number;
  sessionsSaved: number;
  apiCalls: number;
  stoppedEarly: boolean;
  error?: string;
}

const monthKey = (date = new Date()) => date.toISOString().slice(0, 7);

export async function getSyncState(db: Db) {
  return db.collection<SyncState>(STATE).findOne({ _id: STATE_ID });
}

export async function syncWhatsAppBotSessions(db: Db, options: SyncOptions = {}): Promise<SyncSummary> {
  const maxContactPages = options.maxContactPages ?? 3;
  const maxChats = options.maxChats ?? 25;
  const state = await getSyncState(db);
  const cursor = state?.cursor ?? new Date(Date.now() - FIRST_RUN_LOOKBACK_MS);
  const flowIds = new Set(state?.flowIds || []);
  const notOurFlowIds = new Set(state?.notOurFlowIds || []);
  const summary: SyncSummary = {
    contactsChanged: 0,
    chatsRead: 0,
    sessionsSaved: 0,
    apiCalls: 0,
    stoppedEarly: false,
  };

  // 1. Contacts changed since the last run (newest first)
  const changed: WatiContact[] = [];
  try {
    for (let page = 1; page <= maxContactPages; page++) {
      summary.apiCalls++;
      const contacts = await getRecentContacts(page, PAGE_SIZE);
      const fresh = contacts.filter((c) => c.lastUpdated > cursor);
      changed.push(...fresh);
      if (contacts.length < PAGE_SIZE || fresh.length < contacts.length) break;
      if (page === maxContactPages) summary.stoppedEarly = true;
    }
  } catch (error) {
    summary.error = error instanceof Error ? error.message : String(error);
    await saveState(db, cursor, flowIds, notOurFlowIds, summary);
    return summary;
  }
  summary.contactsChanged = changed.length;

  // 2. Which of them are, or were last, in this chatbot
  const candidates = changed.filter((contact) => {
    if (getBotStepByNodeId(contact.currentFlowNodeId)) {
      if (contact.lastFlowId) flowIds.add(contact.lastFlowId);
      return true;
    }
    if (!contact.lastFlowId) return false;
    if (flowIds.has(contact.lastFlowId)) return true;
    // An unknown flow: read one chat to find out whether it is ours
    return !notOurFlowIds.has(contact.lastFlowId);
  });

  // Oldest first, so the cursor can stop at the last contact handled if the cap is reached
  candidates.sort((a, b) => a.lastUpdated.getTime() - b.lastUpdated.getTime());
  let newCursor = changed.length
    ? new Date(Math.max(...changed.map((c) => c.lastUpdated.getTime())))
    : cursor;

  for (let i = 0; i < candidates.length; i++) {
    const contact = candidates[i];
    if (summary.chatsRead >= maxChats) {
      summary.stoppedEarly = true;
      newCursor = new Date(candidates[i - 1].lastUpdated.getTime());
      break;
    }
    try {
      summary.apiCalls++;
      summary.chatsRead++;
      const events = await getChatEvents(contact.waId);
      const progress = analyseChat(events);
      const ours = progress.stepsSeen.length > 0 || events.some((e) => e.fromBusiness && matchBotStep(e.text));

      if (contact.lastFlowId) {
        if (ours) flowIds.add(contact.lastFlowId);
        else if (!flowIds.has(contact.lastFlowId)) notOurFlowIds.add(contact.lastFlowId);
      }
      if (!ours) continue;

      const phone = contact.waId.startsWith("91") && contact.waId.length === 12 ? contact.waId.slice(2) : "";
      if (!phone) continue; // the sign-up is for Indian numbers only

      // The step comes from the chat history: in testing, WATI's currentFlowNodeId stayed on the
      // welcome step after the person had moved on, so it is only used to spot bot users above
      await saveBotProgress(db, phone, contact.waId, contact.name, progress);
      summary.sessionsSaved++;
    } catch (error) {
      summary.error = error instanceof Error ? error.message : String(error);
      summary.stoppedEarly = true;
      // Retry this contact next run
      newCursor = i > 0 ? new Date(candidates[i - 1].lastUpdated.getTime()) : cursor;
      // Stop at the first failure: a quota or auth error would only repeat for every contact
      break;
    }
  }

  await saveState(db, newCursor, flowIds, notOurFlowIds, summary);
  return summary;
}

async function saveState(
  db: Db,
  cursor: Date,
  flowIds: Set<string>,
  notOurFlowIds: Set<string>,
  summary: SyncSummary
) {
  const month = monthKey();
  await db.collection<SyncState>(STATE).updateOne(
    { _id: STATE_ID },
    {
      $set: {
        cursor,
        flowIds: [...flowIds],
        notOurFlowIds: [...notOurFlowIds].slice(-50),
        lastRunAt: new Date(),
        lastRunSummary: { ...summary },
      },
      $inc: { [`apiCalls.${month}`]: summary.apiCalls },
    },
    { upsert: true }
  );
}
