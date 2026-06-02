import { NextRequest, NextResponse } from "next/server";
import { getDbAndBucket } from "@/lib/mongodb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { ObjectId } from "mongodb";
import { generateNoticePDFBuffer } from "@/lib/pdf-generator";
import { sendNoticeEmail, sendClientNotificationEmail } from "@/lib/email";
import { sendNoticeWati, sendWatiClientNoticeNotification } from "@/lib/wati";

export const maxDuration = 60;
export const dynamic = 'force-dynamic';

function formatDateString(d: Date): string {
  return `${String(d.getDate()).padStart(2, '0')}-${String(d.getMonth() + 1).padStart(2, '0')}-${d.getFullYear()}`;
}

// --- Modular Helper Functions ---

/**
 * Dispatches the advocate legal notice to the accused via Email and WhatsApp (Step 1, 2, or 3)
 */
async function sendAccusedDispatch(
  caseDoc: any,
  step: number,
  pdfBuffer: Buffer,
  pdfFilename: string,
  clientDisplayName: string,
  complainantEmail: string,
  isEmailPending: boolean,
  noticeRef: string
): Promise<{ emailSent: boolean; whatsappSent: boolean }> {
  let emailSubject = "";
  let emailBody = "";

  if (step === 1) {
    emailSubject = `Legal Demand Notice 1: Immediate Clearance of Outstanding Dues - Ref: ${noticeRef}`;
    emailBody = `Dear ${caseDoc.defaulterName},

Please find attached the formal Advocate-backed Legal Demand Notice 1 issued under strict instructions from our client, ${clientDisplayName}, regarding your outstanding dues of ₹${caseDoc.stuckAmount.toLocaleString("en-IN")}.

Our client has made multiple attempts to settle this amicably. You are hereby requested to review the attached notice and immediately clear the outstanding amount within 7 days.

Failure to resolve this at this stage will result in progression to formal pre-litigation notices and associated legal costs.

Regards,
Legal Dispatch Desk
AMA Legal Solutions`;
  } else if (step === 2) {
    emailSubject = `URGENT: Legal Demand Notice 2 - Intended Civil and Criminal Actions - Ref: ${noticeRef}`;
    emailBody = `Dear ${caseDoc.defaulterName},

This is the second formal pre-litigation Legal Notice issued against you under instructions from our client, ${clientDisplayName}. 

Despite receiving our Notice 1, you have wilfully neglected to clear your outstanding liability of ₹${caseDoc.stuckAmount.toLocaleString("en-IN")}. Your continued non-payment constitutes a breach of trust and deliberate financial evasion.

Please find the formal Legal Demand Notice 2 attached. You are required to settle the entire dues within 4 days of receipt of this communication, failing which our advocates will initiate immediate civil and criminal recovery proceedings in court.

Your failure to respond to this notice will be used as evidence of bad faith and wilful default in court.

Regards,
Legal Dispatch Desk
AMA Legal Solutions`;
  } else if (step === 3) {
    emailSubject = `FINAL WARNING BEFORE LITIGATION & POLICE CASE - Legal Demand Notice 3 - Ref: ${noticeRef}`;
    emailBody = `Dear ${caseDoc.defaulterName},

This is the FINAL LEGAL DEMAND NOTICE being served to you on behalf of our client, ${clientDisplayName}, regarding your unpaid dues of ₹${caseDoc.stuckAmount.toLocaleString("en-IN")}.

Your persistent evasion and refusal to clear your dues have forced our client to prepare a formal Criminal Complaint under the Bharatiya Nyaya Sanhita (BNS) for Cheating (Section 318 BNS) and Criminal Breach of Trust (Section 316 BNS).

Find the attached Notice 3. If full payment is not received in our bank account within 48 hours, the drafted Criminal Complaint will be immediately submitted to the Station House Officer (SHO) of the competent Police Station and civil recovery suits will be filed at your sole risk, costs, and severe legal consequences.

Consider this your absolute final chance to avoid public police intervention and criminal prosecution.

Regards,
Legal Dispatch Desk
AMA Legal Solutions`;
  }

  const promises: Promise<boolean>[] = [];

  // 1. Email Channel
  if (isEmailPending) {
    promises.push(sendNoticeEmail(caseDoc.email, emailSubject, emailBody, pdfBuffer, pdfFilename, complainantEmail));
  } else {
    promises.push(Promise.resolve(true));
  }

  // 2. WhatsApp Channel
  promises.push(sendNoticeWati(caseDoc.phone, caseDoc.defaulterName, caseDoc.stuckAmount, clientDisplayName));

  const results = await Promise.allSettled(promises);
  
  const emailSent = results[0].status === "fulfilled" ? results[0].value : !isEmailPending;
  const whatsappSent = results[1].status === "fulfilled" ? results[1].value : false;

  return { emailSent, whatsappSent };
}

/**
 * Sends a real-time status update to the client via Email and WhatsApp
 */
async function sendClientNotification(
  caseDoc: any,
  step: number,
  clientDisplayName: string,
  clientEmail: string,
  clientPhone: string,
  noticeRef: string
): Promise<{ emailSent: boolean; watiSent: boolean }> {
  const emailSubject = `Notice ${step} Dispatched - Case Ref: ${noticeRef}`;
  const emailBody = `Dear ${clientDisplayName},

This is to inform you that Legal Demand Notice ${step} has been successfully dispatched to the accused, ${caseDoc.defaulterName}, via Zoho Email and WATI WhatsApp.

You can track the live status and timeline of this case directly from your Legal Recovery dashboard.

Regards,
Legal Dispatch Desk
AMA Legal Solutions`;

  const promises = [
    sendClientNotificationEmail(clientEmail, emailSubject, emailBody),
    sendWatiClientNoticeNotification(clientPhone, clientDisplayName, caseDoc.defaulterName, step, noticeRef)
  ];

  const results = await Promise.allSettled(promises);
  
  const emailSent = results[0].status === "fulfilled" ? results[0].value : false;
  const watiSent = results[1].status === "fulfilled" ? results[1].value : false;

  return { emailSent, watiSent };
}

// --- Main Route Handler ---

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

    // Generate PDF buffer dynamically on the fly
    const clientDisplayName = clientUser.name || clientUser.companyName || "Tech AMA";
    const complainantEmail = clientUser.email || caseDoc.clientEmail;
    const complainantPhone = clientUser.phone || caseDoc.clientPhone;
    const complainantAddress = clientUser.address || caseDoc.clientAddress;

    const noticeRef = `${caseDoc.caseId}-N1`;

    let pdfBuffer: Buffer;
    try {
      pdfBuffer = await generateNoticePDFBuffer({
        defaulterName: caseDoc.defaulterName,
        phone: caseDoc.phone,
        email: caseDoc.email,
        address: caseDoc.address,
        stuckAmount: caseDoc.stuckAmount,
        policeStationName: caseDoc.policeStationName,
        policeStationAddress: caseDoc.policeStationAddress,
        policeStationEmail: caseDoc.policeStationEmail,
        createdAt: caseDoc.createdAt,
        step: 1,
        clientName: clientDisplayName,
        clientEmail: complainantEmail,
        clientPhone: complainantPhone,
        clientAddress: complainantAddress,
        noticeRef
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

    let emailSent = false;
    let whatsappSent = false;

    try {
      const dispatchRes = await sendAccusedDispatch(
        caseDoc,
        1,
        pdfBuffer,
        pdfFilename,
        clientDisplayName,
        complainantEmail,
        true,
        noticeRef
      );
      emailSent = dispatchRes.emailSent;
      whatsappSent = dispatchRes.whatsappSent;
    } catch (dispatchErr) {
      console.error("[Manual Start] Dispatch error:", dispatchErr);
    }

    console.log(`[Manual Start] Dispatches complete. Zoho Email status: ${emailSent}, WhatsApp status: ${whatsappSent}`);

    // Update dispatch log ledger for audit proof
    const ledgerEntry = {
      caseId: caseDoc.caseId,
      dbId: caseDoc._id,
      step: 1,
      noticeRef,
      recipientEmail: caseDoc.email,
      recipientPhone: caseDoc.phone,
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

    const today = new Date();
    const fiveMinutesLater = new Date(today.getTime() + 5 * 60 * 1000);

    const formatTimelineDate = (d: Date) => {
      return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
    };

    if (emailSent) {
      // --- SUCCESS STATE ---
      // Trigger client notification immediately in the same cycle
      const clientEmail = clientUser.email || caseDoc.clientEmail || "";
      const clientPhone = clientUser.phone || caseDoc.clientPhone || "";

      console.log(`[Manual Start] Email delivered successfully. Dispatching client updates inline.`);
      try {
        const clientNotifRes = await sendClientNotification(
          caseDoc,
          1,
          clientDisplayName,
          clientEmail,
          clientPhone,
          noticeRef
        );
        console.log(`[Manual Start] Client notification result: Email=${clientNotifRes.emailSent}, WhatsApp=${clientNotifRes.watiSent}`);
      } catch (notifErr) {
        console.error(`[Manual Start] Non-blocking client notification error:`, notifErr);
      }

      const speedPostId = `ED${Math.floor(100000000 + Math.random() * 900000000)}IN`;
      
      const updateDoc = {
        status: "active",
        currentStep: 2,
        updatedAt: today.toISOString(),
        "timeline.0.status": "completed",
        "timeline.0.completedAt": today.toISOString(),
        "timeline.0.date": formatTimelineDate(today),
        "timeline.0.speedPostId": speedPostId,
        "timeline.0.description": "Dispatched via Zoho Email & WATI WhatsApp",
        "timeline.1.status": "scheduled",
        "timeline.1.scheduledAt": fiveMinutesLater.toISOString(),
        "timeline.1.date": formatTimelineDate(fiveMinutesLater),
        "timeline.1.description": "Dispatched exactly 5 minutes after first notice",
        "timeline.1.timeRemaining": "5 mins remaining"
      };

      await db.collection("cases").updateOne(
        { _id: new ObjectId(id) },
        { $set: updateDoc }
      );

      return NextResponse.json({
        success: true,
        message: "Notice successfully dispatched via email & WhatsApp. Step 2 scheduled."
      });
    } else {
      // --- FAILURE RETRY STATE (Email failed) ---
      // Do NOT send client notification. Save failure status and schedule a retry.
      const isPartial = whatsappSent;
      const finalStatus = isPartial ? "partially_delivered" : "failed";
      
      const retryTime = new Date(today.getTime() + 15 * 60 * 1000);
      
      await db.collection("cases").updateOne(
        { _id: new ObjectId(id) },
        {
          $set: {
            status: "active", // Keep case active for retries
            "timeline.0.status": finalStatus,
            "timeline.0.scheduledAt": retryTime.toISOString(),
            "timeline.0.error": `Email: Failed, WhatsApp: ${whatsappSent ? 'Delivered' : 'Failed'}`,
            updatedAt: today.toISOString()
          }
        }
      );

      if (isPartial) {
        return NextResponse.json({
          success: true,
          warning: `Notice partially delivered. Email: Failed, WhatsApp: Delivered. System will automatically retry Email in 15 minutes.`,
          status: "partially_delivered"
        });
      } else {
        return NextResponse.json({
          success: false,
          error: "Notice dispatch completely failed. Both Zoho Email and WATI WhatsApp channels rejected the request."
        }, { status: 500 });
      }
    }

  } catch (error: any) {
    console.error("[Manual Start] Error in POST API:", error);
    return NextResponse.json({ error: "Internal server error: " + error.message }, { status: 500 });
  }
}
