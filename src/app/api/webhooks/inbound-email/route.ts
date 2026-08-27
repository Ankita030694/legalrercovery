import { NextRequest, NextResponse } from "next/server";
import { getDbAndBucket } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export const dynamic = 'force-dynamic';

function cleanEmailBody(body: string): string {
  if (!body) return "";

  let cleaned = body;

  // 1. Strip script and style tags and their contents
  cleaned = cleaned.replace(/<style\b[^>]*>([\s\S]*?)<\/style>/gi, "");
  cleaned = cleaned.replace(/<script\b[^>]*>([\s\S]*?)<\/script>/gi, "");

  // 2. Strip leftover CSS selectors / rule blocks (such as div.zm_... { ... })
  cleaned = cleaned.replace(/div\.zm_[^{\n]+\{[^}]*\}/gi, "");

  // 3. Truncate at common HTML thread reply markers (such as gmail_quote, blockquote, outlook style)
  const htmlSplitters = [
    /<div[^>]*class="[^"]*gmail_quote[^"]*"[^>]*>/i,
    /<div[^>]*class="[^"]*x_[^"]*gmail_quote[^"]*"[^>]*>/i,
    /<blockquote[^>]*>/i,
    /<div[^>]*id="[^"]*divRplyFwdMsg[^"]*"[^>]*>/i,
    /<!--\s*content\s*-->/i
  ];

  for (const regex of htmlSplitters) {
    const parts = cleaned.split(regex);
    if (parts.length > 0) {
      cleaned = parts[0];
    }
  }

  // 4. Convert standard spacing and layout HTML tags to plain text equivalents
  cleaned = cleaned
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p\s*>/gi, "\n")
    .replace(/<\/div\s*>/gi, "\n")
    .replace(/<[^>]+>/g, ""); // Strip all remaining HTML tags

  // 5. Decode common HTML entities
  const entities: { [key: string]: string } = {
    "&nbsp;": " ",
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#39;": "'",
    "&apos;": "'"
  };
  cleaned = cleaned.replace(/&[a-z0-9#]+;/gi, (match) => entities[match.toLowerCase()] || match);

  // 6. Split on common plain-text threading reply headers
  const textSplitters = [
    /-----Original Message-----/i,
    /On\s+.*\s+wrote:/i,
    /From:\s+notice@/i,
    /Sent from my/i,
    /_____\s+From:/i
  ];

  for (const regex of textSplitters) {
    const parts = cleaned.split(regex);
    if (parts.length > 0) {
      cleaned = parts[0];
    }
  }

  // 7. Clean up leftover CSS definitions and duplicate newlines
  return cleaned
    .split("\n")
    .map(line => line.trim())
    .filter(line => !line.startsWith("div.zm_") && !line.includes("{ margin-top:"))
    .filter((line, index, arr) => line !== "" || (index > 0 && arr[index - 1] !== ""))
    .join("\n")
    .trim();
}

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

    // Step 1: Match via unique Case Reference Number in subject (E.g. Ref: LR-T001-020626 or Ref: LR-0001-1626 or LR-0098-24826)
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
        $or: [
          { email: senderEmail },
          { email2: senderEmail },
          { clientEmail: senderEmail }
        ]
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

    // Determine sender role (client / representee vs accused / borrower)
    const senderEmailLower = senderEmail.toLowerCase().trim();
    const accusedEmailLower = (matchedCase.email || "").toLowerCase().trim();
    const accusedEmail2Lower = (matchedCase.email2 || "").toLowerCase().trim();
    const clientEmailLower = (matchedCase.clientEmail || "").toLowerCase().trim();

    let clientShortName = matchedCase.clientName || "Client";
    if (clientShortName.includes(",")) {
      clientShortName = clientShortName.split(",")[0].trim();
    }

    let isClientReply = false;
    if (
      (clientEmailLower && senderEmailLower === clientEmailLower) ||
      senderEmailLower.includes("actoloan") ||
      senderEmailLower.includes("amalegalsolutions")
    ) {
      isClientReply = true;
    }

    const loanId = matchedCase.invoices?.[0]?.invoiceNo || matchedCase.invoiceNo || matchedCase.loanId || "";
    const notificationTitle = isClientReply 
      ? `Email reply from ${clientShortName} (Client)`
      : `Email reply from ${matchedCase.defaulterName}`;

    // Insert new Email reply notification in DB
    const notification = {
      userId: matchedCase.userId.toString(),
      caseId: matchedCase.caseId,
      caseName: matchedCase.defaulterName,
      type: "email_reply",
      title: notificationTitle,
      description: cleanBody || body || "Empty message body",
      status: "info",
      date: new Date().toISOString(),
      isRead: false,
      metadata: {
        messageId: messageId || `zoho-${Date.now()}`,
        senderEmail: senderEmail,
        senderRole: isClientReply ? "client" : "accused",
        senderDisplayName: isClientReply ? clientShortName : matchedCase.defaulterName,
        subject: subject,
        loanId: loanId,
        accusedName: matchedCase.defaulterName,
        accusedPhone: matchedCase.phone || "",
        accusedPhone2: matchedCase.phone2 || "",
        accusedEmail: matchedCase.email || "",
        accusedEmail2: matchedCase.email2 || "",
        clientName: clientShortName,
        clientEmail: matchedCase.clientEmail || ""
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
