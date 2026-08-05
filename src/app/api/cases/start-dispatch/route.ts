import { NextRequest, NextResponse } from "next/server";
import { getDbAndBucket } from "@/lib/mongodb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { ObjectId } from "mongodb";
import fs from "fs";
import path from "path";
import { generateNoticePDFBuffer } from "@/lib/pdf-generator";
import { sendNoticeEmail } from "@/lib/email";
import { sendNoticeWati } from "@/lib/wati";
import { sendAndLogClientNotification } from "@/lib/notifications";

export const maxDuration = 60;
export const dynamic = 'force-dynamic';

function formatDateString(d: Date): string {
  return `${String(d.getDate()).padStart(2, '0')}-${String(d.getMonth() + 1).padStart(2, '0')}-${d.getFullYear()}`;
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || !(session.user as any).id) { 
    return NextResponse.json({ error: "Unauthorized. Please log in first." }, { status: 401 });
  }

  try {
    const userId = new ObjectId((session.user as any).id);
    const body = await req.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json({ error: "Case ID is required." }, { status: 400 });
    }

    const { db } = await getDbAndBucket("fs");

    // Fetch user/client document to get client details
    const clientUser = await db.collection("users").findOne({ _id: userId });
    if (!clientUser) {
      return NextResponse.json({ error: "Authenticated client profile not found." }, { status: 404 });
    }

    // Fetch the case document to verify ownership
    const caseDoc = await db.collection("cases").findOne({
      _id: new ObjectId(id),
      userId: userId
    });

    if (!caseDoc) {
      return NextResponse.json({ error: "Case not found or access denied." }, { status: 404 });
    }

    // Verify step 1 is pending
    if (!caseDoc.timeline || caseDoc.timeline[0].status !== "pending") {
      return NextResponse.json({ error: "First notice is already dispatched or currently active." }, { status: 400 });
    }

    console.log(`[Manual Start] Starting dispatch sequence for Case: ${caseDoc.caseId}, Defaulter: ${caseDoc.defaulterName}`);

    // Update step 1 status to processing immediately to act as a lock
    await db.collection("cases").updateOne(
      { _id: new ObjectId(id) },
      { $set: { "timeline.0.status": "processing", "timeline.0.lockedAt": new Date().toISOString() } }
    );

    // 1. Generate PDF buffer dynamically on the fly
    const clientDisplayName = caseDoc.clientName || clientUser.name || clientUser.companyName || "Tech AMA";
    const complainantEmail = caseDoc.clientEmail || clientUser.email || caseDoc.clientEmail;
    const complainantPhone = caseDoc.clientPhone || clientUser.phone || caseDoc.clientPhone;
    const complainantAddress = caseDoc.clientAddress || clientUser.address || caseDoc.clientAddress;

    const isSpecialUser = clientUser?.phone?.replace(/\D/g, '').endsWith('8700343611');

    // Sanitize helper: replace newlines with a comma-space so multiline addresses render cleanly
    const sanitizeField = (val: string | undefined | null): string =>
      (val || "").replace(/\r\n/g, ", ").replace(/\n/g, ", ").replace(/\r/g, ", ").trim();

    let pdfBuffer: Buffer;
    try {
      pdfBuffer = await generateNoticePDFBuffer({
        defaulterName: sanitizeField(caseDoc.defaulterName),
        phone: sanitizeField(caseDoc.phone),
        email: sanitizeField(caseDoc.email),
        address: sanitizeField(caseDoc.address),
        stuckAmount: caseDoc.stuckAmount,
        policeStationName: sanitizeField(caseDoc.policeStationName),
        policeStationAddress: sanitizeField(caseDoc.policeStationAddress),
        policeStationEmail: sanitizeField(caseDoc.policeStationEmail),
        createdAt: caseDoc.createdAt,
        step: 1,
        clientName: clientDisplayName,
        clientEmail: complainantEmail,
        clientPhone: complainantPhone,
        clientAddress: sanitizeField(complainantAddress),
        invoiceNo: sanitizeField(caseDoc.invoiceNo),
        invoiceDate: sanitizeField(caseDoc.invoiceDate),
        invoices: caseDoc.invoices,
        noticeRef: `${caseDoc.caseId}-N1`,
        isSpecialUser: isSpecialUser
      });
    } catch (pdfErr: any) {
      console.error("[Manual Start] PDF generation failed:", pdfErr);
      await db.collection("cases").updateOne(
        { _id: new ObjectId(id) },
        { $set: { "timeline.0.status": "pending", "timeline.0.error": "PDF Generation failed: " + pdfErr.message } }
      );
      return NextResponse.json({ error: "Failed to generate legal notice PDF: " + pdfErr.message }, { status: 500 });
    }

    // Prepare dispatch payloads
    const cleanDefaulterName = caseDoc.defaulterName.replace(/[^a-zA-Z0-9]/g, "_");
    const formattedDate = formatDateString(new Date());
    const pdfFilename = `${cleanDefaulterName}_Notice_${formattedDate}.pdf`;

    const emailSubject = `Legal Demand Notice – Immediate Attention Required (Ref: ${caseDoc.caseId})`;
    const emailBody = `<div style="font-family: Arial, sans-serif; font-size: 15px; color: #1f2937; line-height: 1.6; max-width: 650px;">
  <p>Dear ${caseDoc.defaulterName},</p>
  
  <p>Please find attached a Legal Demand Notice issued on behalf of our client, <strong>${clientDisplayName}</strong>, concerning the outstanding amount/claim of <strong>₹${caseDoc.stuckAmount.toLocaleString("en-IN")}</strong> pending against you.</p>
  
  <p>You are hereby called upon to review the attached notice and ensure that the outstanding amount is cleared within <strong>7 (Seven) days</strong> from the receipt of this communication.</p>
  
  <p>Please take notice that failure to clear the outstanding amount or provide a satisfactory response within the stipulated time shall leave our client with no alternative but to initiate appropriate legal proceedings against you without any further reference, notice, or communication. All costs, expenses, liabilities, and consequences arising therefrom shall be solely to your account.</p>
  
  <p>This communication is issued without prejudice to all rights, remedies, and claims available to our client under applicable law, all of which are expressly reserved.</p>
  
  <p>Kindly acknowledge receipt of this email and the attached notice.</p>
  
  <br />
  <div style="border-top: 1px solid #e5e7eb; padding-top: 15px; margin-top: 20px;">
    <img src="https://www.legalrecovery.in/notices/ama_logo.png" width="220" height="61" alt="AMA Legal Solutions" style="width: 220px; height: 61px; display: block; margin-bottom: 10px;" />
    <strong style="color: #111827; font-size: 16px; display: block; letter-spacing: 0.5px;">AMA LEGAL SOLUTIONS</strong>
    <span style="font-size: 14px; color: #4b5563; display: block; font-weight: 600;">Advocate & Solicitors</span>
    <span style="font-size: 13px; color: #6b7280; display: block;">HIGH COURT OF DELHI</span>
    <span style="font-size: 13px; color: #6b7280; display: block;">MEMBER - BAR COUNCIL OF DELHI</span>
    <span style="font-size: 13px; color: #6b7280; display: block;">MEMBER - MCIA (MUMBAI) ASSOCIATION</span>
    <span style="font-size: 13px; color: #6b7280; display: block;">MEMBER - IACC</span>
    <span style="font-size: 13px; color: #6b7280; display: block; margin-top: 5px;">Gurugram-Delhi-Noida-Bengaluru-Mumbai</span>
    <a href="https://www.amalegalsolutions.com" style="font-size: 13px; color: #0066cc; text-decoration: underline; display: block; margin-top: 2px;">www.amalegalsolutions.com</a>
  </div>
  
  <br />
  <div style="font-size: 11px; color: #9ca3af; line-height: 1.4; border-top: 1px dashed #e5e7eb; padding-top: 10px;">
    <strong>Confidentiality Notice:</strong> This e-mail and any attachments are intended solely for the use of the recipient and may contain privileged or confidential information. If you are not the intended recipient, please notify the sender and delete this message immediately.
  </div>
</div>`;

    // 2. Perform parallel dispatch: Zoho Email + WATI WhatsApp
    const toEmails = caseDoc.email2 ? `${caseDoc.email},${caseDoc.email2}` : caseDoc.email;
    const watiPromises = [
      sendNoticeWati(caseDoc.phone, caseDoc.defaulterName, caseDoc.stuckAmount, clientDisplayName)
    ];
    if (caseDoc.phone2) {
      watiPromises.push(
        sendNoticeWati(caseDoc.phone2, caseDoc.defaulterName, caseDoc.stuckAmount, clientDisplayName)
      );
    }

    const clientEmail = caseDoc.clientEmail || clientUser.email || caseDoc.clientEmail;
    let combinedCcEmails = clientEmail || "";
    if (caseDoc.ccEmails) {
      combinedCcEmails = combinedCcEmails ? `${combinedCcEmails},${caseDoc.ccEmails}` : caseDoc.ccEmails;
    }

    const [emailSent, watiResults] = await Promise.all([
      sendNoticeEmail(toEmails, emailSubject, emailBody, pdfBuffer, pdfFilename, combinedCcEmails),
      Promise.all(watiPromises)
    ]);

    const whatsappSent = watiResults.every(r => r === true);

    console.log(`[Manual Start] Dispatches complete. Zoho Email status: ${emailSent}, WhatsApp status: ${whatsappSent}`);

    // Update dispatch log ledger for audit proof
    const ledgerEntry = {
      caseId: caseDoc.caseId,
      dbId: caseDoc._id,
      step: 1,
      recipientEmail: toEmails,
      recipientPhone: caseDoc.phone2 ? `${caseDoc.phone}, ${caseDoc.phone2}` : caseDoc.phone,
      dispatchedAt: new Date().toISOString(),
      channels: {
        email: {
          status: emailSent ? "success" : "failed",
          error: emailSent ? null : "Nodemailer dispatch failed"
        },
        whatsapp: {
          status: whatsappSent ? "success" : "failed",
          error: whatsappSent ? null : "WATI broadcast API failed"
        }
      }
    };
    await db.collection("dispatch_logs").insertOne(ledgerEntry);

    // 3. Handle state transitions based on success/failure
    const today = new Date();
    // Schedule next notice (Step 2) in exactly 7 days (production interval)
    const oneWeekLater = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

    const formatTimelineDate = (d: Date) => {
      return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
    };

    if (emailSent && whatsappSent) {
      // SUCCESS STATE
      
      const updateDoc = {
        status: "active",
        currentStep: 2,
        updatedAt: today.toISOString(),
        "timeline.0.status": "completed",
        "timeline.0.completedAt": today.toISOString(),
        "timeline.0.date": formatTimelineDate(today),
        "timeline.0.description": "Dispatched via Email & WhatsApp",
        "timeline.1.status": "scheduled",
        "timeline.1.scheduledAt": oneWeekLater.toISOString(),
        "timeline.1.date": formatTimelineDate(oneWeekLater),
        "timeline.1.description": "Dispatched exactly 1 week after first notice",
        "timeline.1.timeRemaining": "7 days remaining"
      };

      // Dispatch client notification immediately inline
      try {
        const clientPhone = clientUser.phone || caseDoc.clientPhone || "";
        const suffix = "N1";
        const noticeRef = `${caseDoc.caseId}-${suffix}`;
        await sendAndLogClientNotification(
          db,
          caseDoc,
          1,
          clientDisplayName,
          clientEmail,
          clientPhone,
          noticeRef
        );
      } catch (notifErr) {
        console.error("[Manual Start] Non-blocking client notification error:", notifErr);
      }

      await db.collection("cases").updateOne(
        { _id: new ObjectId(id) },
        { $set: updateDoc }
      );

      return NextResponse.json({
        success: true,
        message: "Notice successfully dispatched via email & WhatsApp. Step 2 scheduled."
      });
    } else {
      // PARTIAL OR FULL FAILURE
      const isPartial = emailSent || whatsappSent;
      const finalStatus = isPartial ? "partially_delivered" : "failed";
      
      // If partial, schedule the retry in 15 minutes
      const retryTime = new Date(today.getTime() + 15 * 60 * 1000);
      
      await db.collection("cases").updateOne(
        { _id: new ObjectId(id) },
        {
          $set: {
            status: isPartial ? "active" : "active", // Keep case active for retries
            "timeline.0.status": finalStatus,
            "timeline.0.scheduledAt": isPartial ? retryTime.toISOString() : null,
            "timeline.0.error": `Email: ${emailSent ? 'Delivered' : 'Failed'}, WhatsApp: ${whatsappSent ? 'Delivered' : 'Failed'}`,
            updatedAt: today.toISOString()
          }
        }
      );

      if (isPartial) {
        return NextResponse.json({
          success: true,
          warning: `Notice partially delivered. Email: ${emailSent}, WhatsApp: ${whatsappSent}. System will automatically retry WhatsApp in 15 minutes.`,
          status: "partially_delivered"
        });
      } else {
        return NextResponse.json({
          success: false,
          error: "Notice dispatch completely failed. Both Email and WhatsApp channels rejected the request."
        }, { status: 500 });
      }
    }

  } catch (error: any) {
    console.error("[Manual Start] Error in POST API:", error);
    return NextResponse.json({ error: "Internal server error: " + error.message }, { status: 500 });
  }
}
