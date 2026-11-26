import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { getDbAndBucket } from "@/lib/mongodb";
import { createWhatsAppLead, maskPhone, toIndianMobile } from "@/lib/whatsapp-signup";

/**
 * Payment link for a WATI Flow Builder "Webhook" step.
 *
 * Not used by the current chatbot: the Webhook step needs WATI's Pro plan, so today's bot sends
 * people to /wa/link instead (see /api/wati/claim-link). Kept for when the plan is upgraded.
 *
 * Request:  POST, header `Authorization: Bearer <WATI_FLOW_SECRET>`, JSON body
 *   phone (the chat's own number, {{phone}} in WATI), name, email, state,
 *   oppositionCount (1-5), recoveryType, physicalDispatch (yes/no)
 *
 * Response: every outcome the bot should talk about is HTTP 200 with a `status` and a
 * ready-to-send `message`. Only a bad secret (401), a malformed body (400) or a server fault
 * (500/503) is non-200.
 */

/** null = the secret is not configured on the server. */
function isAuthorized(req: NextRequest): boolean | null {
  const secret = process.env.WATI_FLOW_SECRET;
  if (!secret) return null;

  const authHeader = req.headers.get("authorization") || "";
  const provided = authHeader.startsWith("Bearer ")
    ? authHeader.slice(7).trim()
    : (req.headers.get("x-wati-flow-secret") || "").trim();
  if (!provided) return false;

  // Hash both sides so the comparison is constant-time whatever their lengths
  const a = crypto.createHash("sha256").update(provided).digest();
  const b = crypto.createHash("sha256").update(secret).digest();
  return crypto.timingSafeEqual(a, b);
}

export async function POST(req: NextRequest) {
  const authorized = isAuthorized(req);
  if (authorized === null) {
    console.error("[WATI Payment Link] WATI_FLOW_SECRET is not configured.");
    return NextResponse.json({ error: "Endpoint is not configured" }, { status: 503 });
  }
  if (!authorized) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Request body must be JSON" }, { status: 400 });
  }
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json({ error: "Request body must be a JSON object" }, { status: 400 });
  }

  const maskedPhone = maskPhone(toIndianMobile(body.phone));
  try {
    const { db } = await getDbAndBucket("fs");
    const result = await createWhatsAppLead(db, {
      phone: body.phone,
      name: body.name,
      email: body.email,
      state: body.state,
      oppositionCount: body.oppositionCount,
      physicalDispatch: body.physicalDispatch,
      recoveryType: body.recoveryType,
    });
    if (result.status === "payment_link_ready") {
      console.log(`[WATI Payment Link] Lead saved for ${maskedPhone}`);
    }
    // leadId is internal and stays out of the response
    const { leadId: _leadId, ...publicResult } = result;
    return NextResponse.json({ success: result.status === "payment_link_ready", ...publicResult });
  } catch (error) {
    console.error(`[WATI Payment Link] Failed for ${maskedPhone}:`, error);
    return NextResponse.json({ error: "Could not create the payment link" }, { status: 500 });
  }
}
