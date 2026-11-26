import { NextRequest, NextResponse } from "next/server";
import { getDbAndBucket } from "@/lib/mongodb";
import { analyseChat, hasAllAnswers } from "@/lib/wati-bot-flow";
import { getChatEvents, sendSessionText, toWaId } from "@/lib/wati-chat";
import { createWhatsAppLead, maskPhone, toIndianMobile } from "@/lib/whatsapp-signup";
import { getBotSession, markLinkClaimed, saveBotProgress } from "@/lib/whatsapp-bot-sessions";
import { clientIp, consumeRateLimit, hashedClientKey } from "@/lib/rate-limit";

export const dynamic = "force-dynamic";

/**
 * Called by the /wa/link page when someone taps the link at the end of the WhatsApp chatbot.
 *
 * The link only carries the chat's phone number, which anyone could type, so nothing is trusted
 * from the request except "please check this number":
 *  - the answers are read back from WATI's own chat history for that number,
 *  - only a "Yes, send my link" tap from the last hour counts,
 *  - the payment link is sent to that WhatsApp number, never returned to the browser.
 * The response is the same whether or not the number had used the bot, so it reveals nothing.
 *
 * Abuse limits protect WATI's monthly API quota, which OTPs and notices also depend on.
 */

const CONFIRMATION_MAX_AGE_MS = 60 * 60 * 1000;
const RESEND_COOLDOWN_MS = 2 * 60 * 1000;
const ALLOWED_HOSTS = new Set(["legalrecovery.in", "www.legalrecovery.in"]);

const sameResponse = () =>
  NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });

function isSameOrigin(req: NextRequest): boolean {
  const origin = req.headers.get("origin");
  if (!origin) return false;
  try {
    const host = new URL(origin).host;
    return host === req.nextUrl.host || ALLOWED_HOSTS.has(host);
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  if (!isSameOrigin(req)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  let body: { n?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }

  const phone = toIndianMobile(body?.n);
  if (!phone) return sameResponse();
  const masked = maskPhone(phone);

  try {
    const { db } = await getDbAndBucket("fs");
    const ipKey = hashedClientKey(clientIp(req.headers));

    // IP limit is the only one that answers differently, and it says nothing about the number
    if (!(await consumeRateLimit(db, `claim-ip:${ipKey}`, 20, 60 * 60))) {
      return NextResponse.json(
        { error: "Too many attempts. Please try again later." },
        { status: 429, headers: { "Cache-Control": "no-store" } }
      );
    }
    const allowed =
      (await consumeRateLimit(db, `claim-phone:${phone}`, 4, 10 * 60)) &&
      (await consumeRateLimit(db, `claim-phone-day:${phone}`, 12, 24 * 60 * 60)) &&
      (await consumeRateLimit(db, "claim-global", 500, 24 * 60 * 60));
    if (!allowed) return sameResponse();

    // A second tap right after the first one does not cost more API calls
    const session = await getBotSession(db, phone);
    if (
      session?.paymentLinkSentAt &&
      Date.now() - session.paymentLinkSentAt.getTime() < RESEND_COOLDOWN_MS
    ) {
      return sameResponse();
    }

    const waId = toWaId(phone);
    const progress = analyseChat(await getChatEvents(waId));
    const confirmation = progress.lastConfirmation;

    if (
      !confirmation ||
      Date.now() - confirmation.at.getTime() > CONFIRMATION_MAX_AGE_MS ||
      !hasAllAnswers(confirmation.answers)
    ) {
      if (progress.currentStep) {
        await saveBotProgress(db, phone, waId, session?.contactName || "", progress);
      }
      return sameResponse();
    }

    await saveBotProgress(db, phone, waId, session?.contactName || "", progress);

    const result = await createWhatsAppLead(db, {
      phone,
      name: confirmation.answers.name,
      email: confirmation.answers.email,
      state: confirmation.answers.state,
      oppositionCount: confirmation.answers.parties,
      physicalDispatch: confirmation.answers.speedPost,
      requireAllAnswers: true,
    });

    await sendSessionText(waId, result.message);
    await markLinkClaimed(db, phone, {
      outcome:
        result.status === "payment_link_ready"
          ? "lead_created"
          : result.status === "already_registered"
            ? "already_registered"
            : "details_rejected",
      leadId: result.leadId || null,
      paymentLinkSent: true,
    });

    console.log(`[Claim Link] ${result.status} for ${masked}`);
    return sameResponse();
  } catch (error) {
    console.error(`[Claim Link] Failed for ${masked}:`, error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again in a minute." },
      { status: 503, headers: { "Cache-Control": "no-store" } }
    );
  }
}
