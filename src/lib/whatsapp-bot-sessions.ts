import { Db } from "mongodb";
import type { BotProgress, SignupAnswers } from "@/lib/wati-bot-flow";
import { cleanText } from "@/lib/whatsapp-signup";

/**
 * One record per WhatsApp number that has used the chatbot, holding where they are in it.
 * Filled by the periodic sync (lib/whatsapp-bot-sync.ts) and by /api/wati/claim-link.
 * Admin-only: it holds the answers people typed in the chat.
 */

export const BOT_SESSIONS = "whatsapp_bot_sessions";
const RETENTION_DAYS = 180;

export type BotOutcome =
  | "in_bot"
  | "link_sent"
  | "lead_created"
  | "already_registered"
  | "details_rejected";

export interface BotSessionDoc {
  phone: string; // 10-digit mobile
  waId: string;
  contactName: string;
  currentStepKey: string | null;
  currentStepAt: Date | null;
  stepsSeen: { key: string; at: Date }[];
  answers: SignupAnswers;
  visitStartedAt: Date | null;
  lastActivityAt: Date | null;
  confirmedAt: Date | null;
  linkMessageAt: Date | null;
  linkClaimedAt: Date | null;
  paymentLinkSentAt: Date | null;
  leadId: string | null;
  outcome: BotOutcome;
  lastSyncedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
  expiresAt: Date;
}

let indexesReady: Promise<unknown> | null = null;

export function ensureBotSessionIndexes(db: Db) {
  if (!indexesReady) {
    const collection = db.collection(BOT_SESSIONS);
    indexesReady = Promise.all([
      collection.createIndex({ phone: 1 }, { unique: true }),
      collection.createIndex({ lastActivityAt: -1 }),
      collection.createIndex({ expiresAt: 1 }, { expireAfterSeconds: 0 }),
    ]).catch((error) => {
      indexesReady = null;
      console.warn("[BotSessions] Could not create indexes:", error);
    });
  }
  return indexesReady;
}

function cleanAnswers(answers: SignupAnswers): SignupAnswers {
  return {
    name: cleanText(answers.name, 60) || undefined,
    email: cleanText(answers.email, 254).toLowerCase() || undefined,
    state: cleanText(answers.state, 40) || undefined,
    parties: cleanText(answers.parties, 20) || undefined,
    speedPost: cleanText(answers.speedPost, 30) || undefined,
  };
}

function expiry(from: Date | null) {
  return new Date((from || new Date()).getTime() + RETENTION_DAYS * 24 * 60 * 60 * 1000);
}

/** Saves what the chat history shows. Never moves a session backwards past a claimed link. */
export async function saveBotProgress(
  db: Db,
  phone: string,
  waId: string,
  contactName: string,
  progress: BotProgress,
  currentStepKeyOverride?: string | null
) {
  await ensureBotSessionIndexes(db);
  const now = new Date();
  const existing = await db.collection<BotSessionDoc>(BOT_SESSIONS).findOne({ phone });

  const claimedAfterLatestVisit =
    existing?.linkClaimedAt &&
    (!progress.visitStartedAt || existing.linkClaimedAt >= progress.visitStartedAt);

  const outcome: BotOutcome = claimedAfterLatestVisit
    ? existing!.outcome
    : progress.linkMessageAt
      ? "link_sent"
      : "in_bot";

  await db.collection<BotSessionDoc>(BOT_SESSIONS).updateOne(
    { phone },
    {
      $set: {
        waId,
        contactName: cleanText(contactName, 80),
        currentStepKey: currentStepKeyOverride ?? progress.currentStep?.key ?? null,
        currentStepAt: progress.currentStepAt,
        stepsSeen: progress.stepsSeen,
        answers: cleanAnswers(progress.answers),
        visitStartedAt: progress.visitStartedAt,
        lastActivityAt: progress.lastActivityAt,
        confirmedAt: progress.lastConfirmation?.at ?? null,
        linkMessageAt: progress.linkMessageAt,
        outcome,
        lastSyncedAt: now,
        updatedAt: now,
        expiresAt: expiry(progress.lastActivityAt),
      },
      $setOnInsert: {
        phone,
        linkClaimedAt: null,
        paymentLinkSentAt: null,
        leadId: null,
        createdAt: now,
      },
    },
    { upsert: true }
  );
}

export async function getBotSession(db: Db, phone: string) {
  return db.collection<BotSessionDoc>(BOT_SESSIONS).findOne({ phone });
}

/** Records that the person tapped the /wa/link link and what the site did about it. */
export async function markLinkClaimed(
  db: Db,
  phone: string,
  update: { outcome: BotOutcome; leadId?: string | null; paymentLinkSent: boolean }
) {
  await ensureBotSessionIndexes(db);
  const now = new Date();
  await db.collection<BotSessionDoc>(BOT_SESSIONS).updateOne(
    { phone },
    {
      $set: {
        linkClaimedAt: now,
        outcome: update.outcome,
        ...(update.leadId ? { leadId: update.leadId } : {}),
        ...(update.paymentLinkSent ? { paymentLinkSentAt: now } : {}),
        updatedAt: now,
        expiresAt: expiry(now),
      },
    }
  );
}
