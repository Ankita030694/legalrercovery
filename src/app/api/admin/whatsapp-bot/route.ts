import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { getDbAndBucket } from "@/lib/mongodb";
import { BOT_STEPS, getBotStep } from "@/lib/wati-bot-flow";
import { BOT_SESSIONS, type BotSessionDoc } from "@/lib/whatsapp-bot-sessions";
import { getSyncState, syncWhatsAppBotSessions } from "@/lib/whatsapp-bot-sync";
import { consumeRateLimit } from "@/lib/rate-limit";

export const dynamic = "force-dynamic";

/** WhatsApp chatbot progress for the conversion funnel admin page. Admin only. */

async function isAdmin() {
  const session = await getServerSession(authOptions);
  return Boolean((session?.user as any)?.id) && (session?.user as any)?.role === "admin";
}

const STALE_AFTER_MS = 24 * 60 * 60 * 1000;

type LeadStatus = "paid" | "payment_pending" | null;

function funnelBars(sessions: (BotSessionDoc & { leadStatus: LeadStatus })[]) {
  const seen = (s: BotSessionDoc, key: string) => s.stepsSeen?.some((step) => step.key === key);
  const anyAnswer = (s: BotSessionDoc) => s.stepsSeen?.some((step) => /^A\d$/.test(step.key));
  const rows: { key: string; label: string; test: (s: BotSessionDoc & { leadStatus: LeadStatus }) => boolean }[] = [
    { key: "started", label: "Started the chat", test: () => true },
    { key: "read", label: "Read an answer", test: (s) => Boolean(anyAnswer(s)) },
    { key: "S1", label: "Started sign-up", test: (s) => seen(s, "S1") },
    { key: "S2", label: "Gave name", test: (s) => seen(s, "S2") },
    { key: "S3", label: "Gave email", test: (s) => seen(s, "S3") },
    { key: "S4", label: "Gave state", test: (s) => seen(s, "S4") },
    { key: "S5", label: "Chose parties", test: (s) => seen(s, "S5") },
    { key: "S6", label: "Chose Speed Post", test: (s) => seen(s, "S6") },
    { key: "confirmed", label: "Confirmed details", test: (s) => Boolean(s.confirmedAt) },
    { key: "LINK", label: "Got link in chat", test: (s) => seen(s, "LINK") || Boolean(s.linkMessageAt) },
    { key: "claimed", label: "Tapped link", test: (s) => Boolean(s.linkClaimedAt) },
    { key: "paid", label: "Paid", test: (s) => s.leadStatus === "paid" },
  ];
  const total = sessions.length;
  return rows.map((row) => {
    const count = sessions.filter(row.test).length;
    return { key: row.key, label: row.label, count, percent: total ? Math.round((count / total) * 1000) / 10 : 0 };
  });
}

export async function GET(req: NextRequest) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const { db } = await getDbAndBucket("fs");
    const days = Math.min(365, Math.max(1, Number(req.nextUrl.searchParams.get("days")) || 30));
    const since = new Date(Date.now() - days * 24 * 60 * 60 * 1000);

    const sessions = await db
      .collection<BotSessionDoc>(BOT_SESSIONS)
      .find({ lastActivityAt: { $gte: since } })
      .sort({ lastActivityAt: -1 })
      .limit(1000)
      .toArray();

    const phones = sessions.map((s) => s.phone);
    const variants = phones.flatMap((p) => [p, `0${p}`]);
    const [paidUsers, pendingLeads, syncState] = await Promise.all([
      db
        .collection("users")
        .find({ phone: { $in: variants }, isPaid: true }, { projection: { phone: 1 } })
        .toArray(),
      db
        .collection("pending_payment")
        .find({ phone: { $in: variants } }, { projection: { phone: 1 } })
        .toArray(),
      getSyncState(db),
    ]);
    const tail = (p: unknown) => String(p || "").replace(/\D/g, "").slice(-10);
    const paid = new Set(paidUsers.map((u) => tail(u.phone)));
    const pending = new Set(pendingLeads.map((l) => tail(l.phone)));

    const withStatus = sessions.map((s) => ({
      ...s,
      leadStatus: (paid.has(s.phone) ? "paid" : pending.has(s.phone) ? "payment_pending" : null) as LeadStatus,
    }));

    const now = Date.now();
    const items = withStatus.slice(0, 300).map((s) => {
      const step = s.currentStepKey ? getBotStep(s.currentStepKey) : undefined;
      const lastActivity = s.lastActivityAt ? new Date(s.lastActivityAt).getTime() : 0;
      return {
        phone: s.phone,
        contactName: s.contactName || "",
        currentStepKey: s.currentStepKey,
        currentStepLabel: step?.label || "Unknown",
        currentStepStage: step?.stage || null,
        stepNumber: step ? step.order + 1 : null,
        stepsSeen: (s.stepsSeen || []).map((seen) => ({
          key: seen.key,
          label: getBotStep(seen.key)?.label || seen.key,
          at: seen.at,
        })),
        answers: s.answers || {},
        outcome: s.outcome,
        leadStatus: s.leadStatus,
        isStale: !s.leadStatus && lastActivity > 0 && now - lastActivity > STALE_AFTER_MS,
        visitStartedAt: s.visitStartedAt,
        lastActivityAt: s.lastActivityAt,
        confirmedAt: s.confirmedAt,
        linkClaimedAt: s.linkClaimedAt,
      };
    });

    const month = new Date().toISOString().slice(0, 7);
    return NextResponse.json({
      success: true,
      days,
      totalSteps: BOT_STEPS.length,
      funnel: funnelBars(withStatus),
      items,
      total: sessions.length,
      sync: {
        lastRunAt: syncState?.lastRunAt || null,
        lastRunSummary: syncState?.lastRunSummary || null,
        apiCallsThisMonth: syncState?.apiCalls?.[month] || 0,
        botDetected: (syncState?.flowIds || []).length > 0,
      },
    });
  } catch (error) {
    console.error("[Admin WhatsApp Bot] GET failed:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  let body: { action?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
  if (body?.action !== "sync") {
    return NextResponse.json({ error: "Unknown action" }, { status: 400 });
  }
  try {
    const { db } = await getDbAndBucket("fs");
    // Each sync spends WATI API calls, so manual syncs are limited to one a minute
    if (!(await consumeRateLimit(db, "whatsapp-bot-manual-sync", 1, 60))) {
      return NextResponse.json({ error: "A sync ran less than a minute ago. Try again shortly." }, { status: 429 });
    }
    const summary = await syncWhatsAppBotSessions(db);
    return NextResponse.json({ success: !summary.error, summary });
  } catch (error) {
    console.error("[Admin WhatsApp Bot] Sync failed:", error);
    return NextResponse.json({ error: "Sync failed" }, { status: 500 });
  }
}
