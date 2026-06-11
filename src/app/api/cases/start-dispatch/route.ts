import { NextRequest, NextResponse } from "next/server";
import { getDbAndBucket } from "@/lib/mongodb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { ObjectId } from "mongodb";
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
        invoiceNo: caseDoc.invoiceNo,
        invoiceDate: caseDoc.invoiceDate
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

    const emailSubject = `Legal Demand Notice 1: Immediate Clearance of Outstanding Dues - Ref: ${caseDoc.caseId}`;
    const emailBody = `Dear ${caseDoc.defaulterName},

Please find attached the formal Advocate-backed Legal Demand Notice 1 issued under strict instructions from our client, ${clientDisplayName}, regarding your outstanding dues of ₹${caseDoc.stuckAmount.toLocaleString("en-IN")}.

Our client has made multiple attempts to settle this amicably. You are hereby requested to review the attached notice and immediately clear the outstanding amount within 7 days.

Failure to resolve this at this stage will result in progression to formal pre-litigation notices and associated legal costs.

Regards,
Legal Dispatch Desk
AMA Legal Solutions`;

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
    const [emailSent, watiResults] = await Promise.all([
      sendNoticeEmail(toEmails, emailSubject, emailBody, pdfBuffer, pdfFilename, clientEmail),
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
