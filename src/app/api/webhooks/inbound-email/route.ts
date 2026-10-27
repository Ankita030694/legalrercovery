import { NextRequest, NextResponse } from "next/server";
import { getDbAndBucket } from "@/lib/mongodb";
import { processInboundEmail, ensureInboundIndexes } from "@/lib/inbound-email-router";

export const dynamic = 'force-dynamic';
export const maxDuration = 60;

let indexesEnsured = false;

async function parsePayload(req: NextRequest): Promise<any> {
  const contentType = req.headers.get("content-type") || "";
  const text = await req.text();

  const parseForm = (t: string) => {
    const params = new URLSearchParams(t);
    const out: any = {};
    params.forEach((value, key) => {
      out[key] = value;
    });
    return out;
  };

  if (contentType.includes("application/x-www-form-urlencoded")) {
    return parseForm(text);
  }
  try {
    return JSON.parse(text);
  } catch (jsonErr) {
    // Fallback: content-type header missing/incorrect but body is form-urlencoded
    if (text.includes("=")) return parseForm(text);
    throw jsonErr;
  }
}

/**
 * Zoho Mail inbound webhook.
 * All routing logic lives in `@/lib/inbound-email-router`:
 *  - every email is persisted in `inbound_emails`
 *  - replies are delivered to a client only on a deterministic case match
 *  - ambiguous/unmatched emails go to the admin triage queue (/authority/inbound-triage)
 *  - bounces / auto-replies are classified separately
 */
export async function POST(req: NextRequest) {
  try {
    // Validate authorization token to prevent spoofed email notifications
    const token = req.nextUrl.searchParams.get("token");
    const authHeader = req.headers.get("Authorization");
    const secureToken = process.env.ADMIN_API_KEY || "legalrecovery_admin_secure_secret_token_123";

    const isTokenValid = token === secureToken || (authHeader && authHeader === `Bearer ${secureToken}`);

    if (!isTokenValid) {
      console.warn("[Inbound Email Webhook] Unauthorized access attempt.");
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const payload = await parsePayload(req);
    console.log("[Inbound Email Webhook] Payload received:", JSON.stringify({
      messageId: payload?.messageId,
      from: payload?.from || payload?.fromAddress,
      subject: payload?.subject,
      keys: Object.keys(payload || {}),
    }));

    if (!payload || (!payload.messageId && !(payload.from || payload.fromAddress))) {
      console.warn("[Inbound Email Webhook] Missing messageId and from address.");
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { db } = await getDbAndBucket("fs");
    if (!indexesEnsured) {
      try {
        await ensureInboundIndexes(db);
        indexesEnsured = true;
      } catch (idxErr) {
        console.error("[Inbound Email Webhook] Could not ensure indexes:", idxErr);
      }
    }

    const result = await processInboundEmail(db, payload, { source: "webhook" });

    if (result.duplicate) {
      console.log(`[Inbound Email Webhook] Duplicate ignored for messageId: ${result.envelope?.zohoMessageId}`);
      return NextResponse.json({ success: true, message: "Duplicate event ignored" });
    }

    const d = result.decision!;
    console.log(
      `[Inbound Email Webhook] ${result.envelope?.zohoMessageId} from ${result.envelope?.fromEmail} → ` +
      `classification=${d.classification} status=${d.status} case=${d.caseId || "-"} method=${d.method || "-"} ` +
      `candidates=${d.candidates.map((c) => `${c.caseId}:${c.score}`).join(",") || "-"} reason="${d.reason}"`
    );

    return NextResponse.json({
      success: true,
      inboundId: result.inboundId,
      classification: d.classification,
      status: d.status,
      caseId: d.caseId,
      method: d.method,
      notificationId: result.notificationId,
    });
  } catch (error: any) {
    console.error("[Inbound Email Webhook] Error processing incoming payload:", error);
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}
