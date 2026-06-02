import { NextRequest, NextResponse } from "next/server";
import { getDbAndBucket } from "@/lib/mongodb";

export const dynamic = 'force-dynamic';

function cleanEmailBody(body: string): string {
  if (!body) return "";

  // Split on common email threading reply boundaries to isolate the reply text
  const splitters = [
    /-----Original Message-----/i,
    /On\s+.*\s+wrote:/i,
    /From:\s+notice@/i,
    /Sent from my/i,
    /_____\s+From:/i
  ];

  let cleaned = body;
  for (const regex of splitters) {
    const parts = cleaned.split(regex);
    if (parts.length > 0) {
      cleaned = parts[0];
    }
  }

  return cleaned.trim();
}

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get("content-type") || "";
    let payload: any;

    if (contentType.includes("application/x-www-form-urlencoded")) {
      const text = await req.text();
      const params = new URLSearchParams(text);
      payload = {};
      params.forEach((value, key) => {
        payload[key] = value;
      });
      console.log("[Inbound Email Webhook] Parsed form-urlencoded payload:", JSON.stringify(payload));
    } else {
      try {
        payload = await req.json();
        console.log("[Inbound Email Webhook] Parsed JSON payload:", JSON.stringify(payload));
      } catch (jsonErr) {
        // Fallback: in case content-type header was missing/incorrect but data is form-urlencoded
        const text = await req.text();
        if (text.includes("=")) {
          const params = new URLSearchParams(text);
          payload = {};
          params.forEach((value, key) => {
            payload[key] = value;
          });
          console.log("[Inbound Email Webhook] Parsed fallback form-urlencoded payload:", JSON.stringify(payload));
        } else {
          throw jsonErr;
        }
      }
    }

    const { from, subject, body, timestamp, messageId } = payload;

    if (!from || !subject) {
      console.warn("[Inbound Email Webhook] Missing from address or subject.");
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const senderEmail = from.toLowerCase();
    const cleanBody = cleanEmailBody(body || "");
    const { db } = await getDbAndBucket("fs");

    let matchedCase = null;

    // Step 1: Match via unique Case Reference Number in subject (E.g. Ref: LR-T001-020626 or Ref: LR-0001-1626)
    const refMatch = subject.match(/LR-[A-Z0-9]{4}-\d{4,6}/i);
    if (refMatch) {
      const extractedCaseId = refMatch[0].toUpperCase();
      console.log(`[Inbound Email Webhook] Extracted Case ID: ${extractedCaseId} from subject: "${subject}"`);
      matchedCase = await db.collection("cases").findOne({ caseId: extractedCaseId });
    }

    // Step 2: Fallback to matching by sender email address if subject reference is missing
    if (!matchedCase) {
      console.log(`[Inbound Email Webhook] Reference ID not found/matched in subject. Falling back to email match: ${senderEmail}`);
      matchedCase = await db.collection("cases").findOne({
        email: senderEmail
      });
    }

    if (!matchedCase) {
      console.warn(`[Inbound Email Webhook] No active case matched for email: ${senderEmail}`);
      return NextResponse.json({ success: false, message: "No matching case found" });
    }

    console.log(`[Inbound Email Webhook] Matched Case: ${matchedCase.caseId} for client user: ${matchedCase.userId}`);

    // Check for duplicates
    if (messageId) {
      const existing = await db.collection("notifications").findOne({
        "metadata.messageId": messageId
      });
      if (existing) {
        console.log(`[Inbound Email Webhook] Duplicate webhook trigger ignored for messageId: ${messageId}`);
        return NextResponse.json({ success: true, message: "Duplicate event ignored" });
      }
    }

    // Insert new Email reply notification in DB
    const notification = {
      userId: matchedCase.userId.toString(),
      caseId: matchedCase.caseId,
      caseName: matchedCase.defaulterName,
      type: "email_reply",
      title: `Email reply from ${matchedCase.defaulterName}`,
      description: cleanBody || body || "Empty message body",
      status: "info",
      date: new Date().toISOString(),
      isRead: false,
      metadata: {
        messageId: messageId || `zoho-${Date.now()}`,
        senderEmail: senderEmail,
        subject: subject
      }
    };

    await db.collection("notifications").insertOne(notification);
    console.log(`[Inbound Email Webhook] Notification created for client dashboard. Case: ${matchedCase.caseId}`);

    return NextResponse.json({ success: true, message: "Notification successfully processed" });
  } catch (error: any) {
    console.error("[Inbound Email Webhook] Error processing incoming payload:", error);
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}
