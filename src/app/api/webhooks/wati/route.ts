import { NextRequest, NextResponse } from "next/server";
import { getDbAndBucket } from "@/lib/mongodb";

export const dynamic = 'force-dynamic';

function normalizePhoneNumber(phone: string): string {
  // Strip all non-numeric characters
  const cleaned = phone.replace(/\D/g, "");
  // If it starts with 91 (India country code) and has 12 digits, extract last 10 digits
  if (cleaned.startsWith("91") && cleaned.length === 12) {
    return cleaned.slice(2);
  }
  // If it has standard 10 digits, return it
  if (cleaned.length === 10) {
    return cleaned;
  }
  return cleaned;
}

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();
    console.log("[WATI Webhook] Received payload:", JSON.stringify(payload));

    const { eventType, senderPhone, senderName, text, whatsappMessageId } = payload;

    // Check if the event is an incoming message received
    if (eventType !== "messageReceived") {
      console.log(`[WATI Webhook] Ignored event type: ${eventType}`);
      return NextResponse.json({ success: true, message: "Event ignored" });
    }

    if (!senderPhone || !text) {
      console.warn("[WATI Webhook] Missing senderPhone or text in payload.");
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const normalizedPhone = normalizePhoneNumber(senderPhone);
    console.log(`[WATI Webhook] Sender Phone: ${senderPhone} | Normalized: ${normalizedPhone}`);

    const { db } = await getDbAndBucket("fs");

    // Match the phone number against an active case
    const matchedCase = await db.collection("cases").findOne({
      phone: { $regex: new RegExp(normalizedPhone + "$") } // Matches the 10-digit suffix
    });

    if (!matchedCase) {
      console.warn(`[WATI Webhook] No active case matched for phone suffix: ${normalizedPhone}`);
      // Return 200 to WATI so it doesn't retry, but log it
      return NextResponse.json({ success: false, message: "No matching case found" });
    }

    console.log(`[WATI Webhook] Matched Case: ${matchedCase.caseId} for client user: ${matchedCase.userId}`);

    // Check for duplicate messages using idempotency key (whatsappMessageId)
    if (whatsappMessageId) {
      const existing = await db.collection("notifications").findOne({
        "metadata.messageId": whatsappMessageId
      });
      if (existing) {
        console.log(`[WATI Webhook] Duplicate webhook trigger ignored for messageId: ${whatsappMessageId}`);
        return NextResponse.json({ success: true, message: "Duplicate event ignored" });
      }
    }

    // Insert new WhatsApp reply notification card in DB
    const notification = {
      userId: matchedCase.userId.toString(),
      caseId: matchedCase.caseId,
      caseName: matchedCase.defaulterName,
      type: "whatsapp_reply",
      title: `WhatsApp reply from ${matchedCase.defaulterName}`,
      description: text,
      status: "success",
      date: new Date().toISOString(),
      isRead: false,
      metadata: {
        messageId: whatsappMessageId || `wati-${Date.now()}`,
        senderPhone: senderPhone,
        senderName: senderName || matchedCase.defaulterName
      }
    };

    await db.collection("notifications").insertOne(notification);
    console.log(`[WATI Webhook] Notification created for client dashboard. Case: ${matchedCase.caseId}`);

    return NextResponse.json({ success: true, message: "Notification successfully processed" });
  } catch (error: any) {
    console.error("[WATI Webhook] Error processing incoming payload:", error);
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}
