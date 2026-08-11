import { NextRequest, NextResponse } from "next/server";
import { getDbAndBucket } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { generateNoticePDFBuffer } from "@/lib/pdf-generator";
import { generateLoanNoticePDFBuffer } from "@/lib/loan-pdf-generator";
import { sendNoticeEmail } from "@/lib/email";
import fs from "fs";
import path from "path";
import { sendNoticeWati, sendPoliceComplaintWati } from "@/lib/wati";
import { sendAndLogClientNotification, logPoliceComplaintClientNotification } from "@/lib/notifications";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export const maxDuration = 300; // Vercel max timeout
export const dynamic = 'force-dynamic';

function formatDateString(d: Date): string {
  return `${String(d.getDate()).padStart(2, '0')}-${String(d.getMonth() + 1).padStart(2, '0')}-${d.getFullYear()}`;
}

const BATCH_SIZE = 25;

// --- Modular Helper Functions ---

/**
 * Dispatches the advocate legal notice to the accused via Email and WhatsApp (Step 1, 2, or 3) or SHO (Step 4)
 */
async function sendAccusedDispatch(
  caseDoc: any,
  step: number,
  pdfBuffer: Buffer,
  pdfFilename: string,
  clientDisplayName: string,
  complainantEmail: string,
  isEmailPending: boolean,
  noticeRef: string,
  ccEmails: string
): Promise<{ emailSent: boolean; whatsappSent: boolean }> {
  let emailSubject = "";
  let emailBody = "";

  if (step === 1) {
    emailSubject = `Legal Demand Notice – Immediate Attention Required (Ref: ${noticeRef})`;
    emailBody = `<div style="font-family: Arial, sans-serif; font-size: 15px; color: #1f2937; line-height: 1.6; max-width: 650px;">
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
  } else if (step === 2) {
    emailSubject = `Second & Final Legal Demand Notice (Ref: ${noticeRef})`;
    emailBody = `<div style="font-family: Arial, sans-serif; font-size: 15px; color: #1f2937; line-height: 1.6; max-width: 650px;">
  <p>Dear ${caseDoc.defaulterName},</p>
  
  <p>Please find attached the Second & Final Legal Demand Notice issued on behalf of our client, <strong>${clientDisplayName}</strong>, regarding the outstanding amount/claim of <strong>₹${caseDoc.stuckAmount.toLocaleString("en-IN")}</strong> pending against you.</p>
  
  <p>You are required to clear the outstanding amount or provide a satisfactory response within <strong>7 (Seven) days</strong> from receipt of this communication.</p>
  
  <p>Failing compliance within the stipulated period, our client shall initiate appropriate civil and/or criminal proceedings without any further notice. All costs and consequences arising therefrom shall be solely to your account.</p>
  
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
    <strong>Confidentiality Notice:</strong> This e-mail and any attachments are intended solely for the of the recipient and may contain privileged or confidential information. If you are not the intended recipient, please notify the sender and delete this message immediately.
  </div>
</div>`;
  } else if (step === 3) {
    emailSubject = `FINAL LEGAL NOTICE – 72 Hours to Comply Failing Which Civil, Criminal and Police Action Shall Be Initiated (Ref: ${noticeRef})`;
    emailBody = `<div style="font-family: Arial, sans-serif; font-size: 15px; color: #1f2937; line-height: 1.6; max-width: 650px;">
  <p>Dear ${caseDoc.defaulterName},</p>
  
  <p>Please find attached the Final Legal Notice issued on behalf of our client, <strong>${clientDisplayName}</strong>, regarding the outstanding amount pending against you.</p>
  
  <p>You are required to clear the outstanding amount of <strong>₹${caseDoc.stuckAmount.toLocaleString("en-IN")}</strong> within <strong>72 (Seventy-Two) Hours</strong> from receipt of this communication.</p>
  
  <p>Failing compliance, our client shall initiate appropriate civil and criminal proceedings, including filing a Police Complaint, without any further notice.</p>
  
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
  } else if (step === 4) {
    emailSubject = `Formal Criminal Police Complaint - Cheating, Criminal Breach of Trust & Dishonest Non-Payment - Ref: ${noticeRef}`;
    emailBody = `To,
The Station House Officer,
${caseDoc.policeStationName}
${caseDoc.policeStationAddress}

Respected Sir/Madam,

On behalf of our client (Complainant), namely ${clientDisplayName}, we are formally submitting the advocate-backed Criminal Police Complaint against the accused, ${caseDoc.defaulterName}, for offences of Cheating, Criminal Breach of Trust, and Dishonest Non-Payment under the Bharatiya Nyaya Sanhita (BNS).

Respective details of the Complainant & the Accused:
- Complainant (Client) Name: ${clientDisplayName}
- Complainant (Client) Email ID: ${complainantEmail}
- Accused (Defaulter) Name: ${caseDoc.defaulterName}
- Accused (Defaulter) Email ID: ${caseDoc.email}

Please find the completed and formal signed complaint PDF attached to this email for your immediate action, investigation, and summoning of the accused.

A copy of this communication is marked to both the Complainant and the Accused for their records.

Regards,
Legal Dispatch Desk
AMA Legal Solutions`;
  }

  const promises: Promise<boolean>[] = [];

  // 1. Email Channel
  if (isEmailPending) {
    if (step <= 3) {
      const toEmails = caseDoc.email2 ? `${caseDoc.email},${caseDoc.email2}` : caseDoc.email;
      promises.push(sendNoticeEmail(toEmails, emailSubject, emailBody, pdfBuffer, pdfFilename, ccEmails));
    } else {
      const toEmails = [];
      if (caseDoc.policeStationEmail) toEmails.push(caseDoc.policeStationEmail);
      if (caseDoc.email) toEmails.push(caseDoc.email);
      if (caseDoc.email2) toEmails.push(caseDoc.email2);
      if (toEmails.length === 0) toEmails.push(ccEmails);
      const recipientTo = toEmails.join(", ");
      promises.push(sendNoticeEmail(recipientTo, emailSubject, emailBody, pdfBuffer, pdfFilename, ccEmails));
    }
  } else {
    promises.push(Promise.resolve(true));
  }

  // 2. WhatsApp Channel (Steps 1-3 use sendNoticeWati, Step 4 uses sendPoliceComplaintWati to Accused)
  if (step <= 3) {
    const watiSends = [
      sendNoticeWati(caseDoc.phone, caseDoc.defaulterName, caseDoc.stuckAmount, clientDisplayName)
    ];
    if (caseDoc.phone2) {
      watiSends.push(
        sendNoticeWati(caseDoc.phone2, caseDoc.defaulterName, caseDoc.stuckAmount, clientDisplayName)
      );
    }
    promises.push(
      Promise.all(watiSends).then(results => results.every(res => res === true))
    );
  } else if (step === 4) {
    const watiSends = [
      sendPoliceComplaintWati(
        caseDoc.phone,
        caseDoc.defaulterName,
        caseDoc.policeStationName,
        caseDoc.stuckAmount,
        caseDoc.dueDate,
        clientDisplayName,
        caseDoc.email
      )
    ];
    if (caseDoc.phone2) {
      watiSends.push(
        sendPoliceComplaintWati(
          caseDoc.phone2,
          caseDoc.defaulterName,
          caseDoc.policeStationName,
          caseDoc.stuckAmount,
          caseDoc.dueDate,
          clientDisplayName,
          caseDoc.email
        )
      );
    }
    promises.push(
      Promise.all(watiSends).then(results => results.every(res => res === true))
    );
  } else {
    promises.push(Promise.resolve(true));
  }

  const results = await Promise.allSettled(promises);
  
  const emailSent = results[0].status === "fulfilled" ? results[0].value : !isEmailPending;
  const whatsappSent = results[1].status === "fulfilled" ? results[1].value : false;

  return { emailSent, whatsappSent };
}

// --- Main Request Handlers ---

export async function POST(req: NextRequest) {
  return handleDispatch(req);
}

export async function GET(req: NextRequest) {
  return handleDispatch(req);
}

async function handleDispatch(req: NextRequest) {
  const session = await getServerSession(authOptions);
  let userIdFilter: string | null = null;
  let isAuthorized = false;

  const { db } = await getDbAndBucket("fs");

  if (session && (session.user as any)?.id) {
    const sessionUserId = (session.user as any).id;
    const userDoc = await db.collection("users").findOne({ _id: new ObjectId(sessionUserId) });
    if (userDoc && (userDoc.phone?.replace(/\D/g, '').endsWith('8700343611') || userDoc.phone?.replace(/\D/g, '').endsWith('8130104447'))) {
      userIdFilter = sessionUserId;
      isAuthorized = true;
    }
  }

  // Authorization validation for production environments
  if (!isAuthorized && process.env.NODE_ENV === "production") {
    const authHeader = req.headers.get("Authorization");
    const cronSecret = process.env.CRON_SECRET;
    if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json({ error: "Unauthorized cron request." }, { status: 401 });
    }
  }
  const now = new Date();

  try {
    // 1. Fetch cases that have a timeline step due or needing retry
    const query: any = {
      status: "active",
    };
    if (userIdFilter) {
      // Forceful dispatch for special user: ignore scheduledAt date check
      query.userId = new ObjectId(userIdFilter);
      query.timeline = {
        $elemMatch: {
          status: { $in: ["scheduled", "partially_delivered", "failed"] }
        }
      };
    } else {
      // Standard cron queue: enforce scheduledAt date check
      query.timeline = {
        $elemMatch: {
          status: { $in: ["scheduled", "partially_delivered", "failed"] },
          scheduledAt: { $lte: now.toISOString() }
        }
      };
    }

    const limit = userIdFilter ? 100 : BATCH_SIZE;
    const casesToProcess = await db.collection("cases").find(query).limit(limit).toArray();

    console.log(`[Queue Processor] Found ${casesToProcess.length} cases due for dispatch.`);

    let processedCount = 0;

    for (const caseDoc of casesToProcess) {
      const stepIndex = (caseDoc.currentStep || 1) - 1;
      if (stepIndex < 0 || stepIndex > 3 || !caseDoc.timeline) {
        console.warn(`[Queue Processor] Case ${caseDoc.caseId} has an invalid step configuration.`);
        continue;
      }

      const activeStep = caseDoc.timeline[stepIndex];

      // Verify the step is actually due and not locked
      const isDue = activeStep.status === "scheduled" || 
                    activeStep.status === "partially_delivered" || 
                    activeStep.status === "failed";

      const isTimePassed = userIdFilter ? true : (new Date(activeStep.scheduledAt) <= now);

      if (!isDue || !isTimePassed) {
        continue;
      }

      // 2. Concurrency Control: Acquire an atomic lock on the step
      const lockResult = await db.collection("cases").updateOne(
        {
          _id: caseDoc._id,
          status: "active",
          currentStep: caseDoc.currentStep,
          [`timeline.${stepIndex}.status`]: activeStep.status
        },
        {
          $set: {
            [`timeline.${stepIndex}.status`]: "processing",
            [`timeline.${stepIndex}.lockedAt`]: now.toISOString()
          }
        }
      );

      if (lockResult.modifiedCount === 0) {
        console.log(`[Queue Processor] Lock skipped/already acquired for Case ${caseDoc.caseId}`);
        continue;
      }

      processedCount++;

      // Fetch client profile securely
      let userQueryId: any = caseDoc.userId;
      if (typeof caseDoc.userId === 'string' && ObjectId.isValid(caseDoc.userId)) {
        try {
          userQueryId = new ObjectId(caseDoc.userId);
        } catch (e) {}
      }
      const clientUser = await db.collection("users").findOne({ _id: userQueryId });
      const clientDisplayName = caseDoc.clientName || clientUser?.name || clientUser?.companyName || "Tech AMA";

      console.log(`[Queue Processor] Processing Case: ${caseDoc.caseId}, Step: ${caseDoc.currentStep}`);

      const suffix = caseDoc.currentStep === 4 ? "C4" : `N${caseDoc.currentStep}`;
      const noticeRef = `${caseDoc.caseId}-${suffix}`;

      // Handle Step 1, 2, or 3 (Accused Notices)
      if (caseDoc.currentStep <= 3) {
        const complainantEmail = caseDoc.clientEmail || clientUser?.email || caseDoc.clientEmail;
        const complainantPhone = caseDoc.clientPhone || clientUser?.phone || caseDoc.clientPhone;
        const complainantAddress = caseDoc.clientAddress || clientUser?.address || caseDoc.clientAddress;

        // Generate PDF Buffer
        let pdfBuffer: Buffer;
        try {
          const pdfParams = {
            defaulterName: sanitizeField(caseDoc.defaulterName),
            phone: sanitizeField(caseDoc.phone),
            email: sanitizeField(caseDoc.email),
            address: sanitizeField(caseDoc.address),
            stuckAmount: caseDoc.stuckAmount,
            policeStationName: sanitizeField(caseDoc.policeStationName),
            policeStationAddress: sanitizeField(caseDoc.policeStationAddress),
            policeStationEmail: sanitizeField(caseDoc.policeStationEmail),
            createdAt: caseDoc.createdAt,
            step: pendingStep,
            clientName: clientDisplayName,
            clientEmail: complainantEmail,
            clientPhone: complainantPhone,
            clientAddress: sanitizeField(complainantAddress),
            invoiceNo: sanitizeField(caseDoc.invoiceNo),
            invoiceDate: sanitizeField(caseDoc.invoiceDate),
            invoices: caseDoc.invoices,
            noticeRef,
            isSpecialUser: isSpecialUser,
            category: caseDoc.category || 'general-recovery',
          };
          
          if (caseDoc.category === 'loan-recovery') {
            pdfBuffer = await generateLoanNoticePDFBuffer(pdfParams);
          } else {
            pdfBuffer = await generateNoticePDFBuffer(pdfParams);
          }
        } catch (pdfErr: any) {
          console.error(`[Queue Processor] PDF Generation error for Case ${caseDoc.caseId}:`, pdfErr);
          
          // Revert step status back to allow future retries
          await db.collection("cases").updateOne(
            { _id: caseDoc._id },
            { $set: { [`timeline.${stepIndex}.status`]: "failed", [`timeline.${stepIndex}.error`]: pdfErr.message } }
          );
          continue;
        }

        const cleanDefaulterName = caseDoc.defaulterName.replace(/[^a-zA-Z0-9]/g, "_");
        const pdfFilename = `${cleanDefaulterName}_Notice_${formatDateString(now)}.pdf`;

        // Determine if we need to dispatch to both or just retry failed channels
        const isEmailPending = activeStep.status !== "partially_delivered" || (caseDoc.lastLedger && caseDoc.lastLedger.channels.email.status !== "success");

        let emailSent = !isEmailPending;
        let whatsappSent = false;

        let combinedCcEmails = complainantEmail || "";
        if (caseDoc.ccEmails) {
          combinedCcEmails = combinedCcEmails ? `${combinedCcEmails},${caseDoc.ccEmails}` : caseDoc.ccEmails;
        }

        try {
          const dispatchRes = await sendAccusedDispatch(
            caseDoc,
            caseDoc.currentStep,
            pdfBuffer,
            pdfFilename,
            clientDisplayName,
            complainantEmail,
            isEmailPending,
            noticeRef,
            combinedCcEmails
          );
          emailSent = dispatchRes.emailSent;
          whatsappSent = dispatchRes.whatsappSent;
        } catch (dispatchErr) {
          console.error(`[Queue Processor] Dispatch error for Case ${caseDoc.caseId}:`, dispatchErr);
        }

        // Auditing Ledger
        const ledgerEntry = {
          caseId: caseDoc.caseId,
          dbId: caseDoc._id,
          step: caseDoc.currentStep,
          noticeRef,
          recipientEmail: caseDoc.email2 ? `${caseDoc.email}, ${caseDoc.email2}` : caseDoc.email,
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

        // Timeline Scheduling formatting
        const formatTimelineDate = (d: Date) => {
          return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
        };

        if (emailSent) {
          // --- PRIMARY EMAIL DELIVERED SUCCESSFULLY ---
          // Immediately trigger the client notification in parallel
          const clientEmail = caseDoc.clientEmail || clientUser?.email || caseDoc.clientEmail || "";
          const clientPhone = caseDoc.clientPhone || clientUser?.phone || caseDoc.clientPhone || "";

          // Only notify if we actually dispatched (or completed) the email in THIS execution run, avoiding double notifications
          if (isEmailPending) {
            console.log(`[Queue Processor] Email delivered successfully. Dispatching client updates inline.`);
            try {
              const clientNotifRes = await sendAndLogClientNotification(
                db,
                caseDoc,
                caseDoc.currentStep,
                clientDisplayName,
                clientEmail,
                clientPhone,
                noticeRef
              );
              console.log(`[Queue Processor] Client notifications result: Email=${clientNotifRes.emailSent}, WhatsApp=${clientNotifRes.watiSent}`);
            } catch (notifErr) {
              console.error(`[Queue Processor] Non-blocking client notification error:`, notifErr);
            }
          }

          const nextStep = caseDoc.currentStep + 1;
          const nextScheduledTime = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 days production interval

          const updateDoc: any = {
            currentStep: nextStep,
            updatedAt: now.toISOString(),
            [`timeline.${stepIndex}.status`]: "completed",
            [`timeline.${stepIndex}.completedAt`]: now.toISOString(),
            [`timeline.${stepIndex}.date`]: formatTimelineDate(now),
            [`timeline.${stepIndex}.description`]: "Dispatched via Email & WhatsApp",
          };

          // If there is a next step, unlock and schedule it
          if (nextStep <= 4) {
            updateDoc[`timeline.${stepIndex + 1}.status`] = "scheduled";
            updateDoc[`timeline.${stepIndex + 1}.scheduledAt`] = nextScheduledTime.toISOString();
            updateDoc[`timeline.${stepIndex + 1}.date`] = formatTimelineDate(nextScheduledTime);
            updateDoc[`timeline.${stepIndex + 1}.timeRemaining`] = "7 days remaining";
            
            if (nextStep === 4) {
              updateDoc[`timeline.${stepIndex + 1}.description`] = `Draft complaint copy shared for client`;
            } else {
              updateDoc[`timeline.${stepIndex + 1}.description`] = `Dispatched exactly 1 week after Notice ${nextStep - 1}`;
            }
          }

          await db.collection("cases").updateOne({ _id: caseDoc._id }, { $set: updateDoc });
          console.log(`[Queue Processor] Case ${caseDoc.caseId} Notice ${caseDoc.currentStep} successfully completed. Next scheduled: ${nextScheduledTime}`);
        } else {
          // --- PRIMARY EMAIL FAILED ---
          // Skip client notifications, update step retry counters, schedule retry
          const attemptCount = (activeStep.retryCount || 0) + 1;
          const isPermanentFailure = attemptCount >= 3;
          
          const finalStatus = isPermanentFailure 
            ? "failed_permanent" 
            : (whatsappSent ? "partially_delivered" : "failed");

          const retryTime = new Date(now.getTime() + 15 * 60 * 1000); // retry in 15 minutes

          await db.collection("cases").updateOne(
            { _id: caseDoc._id },
            {
              $set: {
                [`timeline.${stepIndex}.status`]: finalStatus,
                [`timeline.${stepIndex}.retryCount`]: attemptCount,
                [`timeline.${stepIndex}.scheduledAt`]: isPermanentFailure ? null : retryTime.toISOString(),
                [`timeline.${stepIndex}.error`]: `Primary Email Failed. WhatsApp Sent: ${whatsappSent}. Attempt: ${attemptCount}`,
                updatedAt: now.toISOString()
              }
            }
          );

          console.warn(`[Queue Processor] Primary email failed for Case ${caseDoc.caseId}. Skipped client notifications. Retry scheduled for: ${retryTime}`);
        }

      } else if (caseDoc.currentStep === 4) {
        const clientEmail = caseDoc.clientEmail || clientUser?.email || caseDoc.clientEmail;
        
        // Check if the advocate has disabled police complaints
        const isSpecialUser = clientUser?.phone?.replace(/\D/g, '').endsWith('8700343611') || clientUser?.phone?.replace(/\D/g, '').endsWith('8130104447');
        const sendComplaints = clientUser?.sendPoliceComplaints !== false;

        if (isSpecialUser && !sendComplaints) {
          console.log(`[Queue Processor] Police complaint toggle is OFF for special user case ${caseDoc.caseId}. Skipping dispatch.`);
          
          await db.collection("cases").updateOne(
            { _id: caseDoc._id },
            {
              $set: {
                status: "completed",
                updatedAt: now.toISOString(),
                "timeline.3.status": "completed",
                "timeline.3.completedAt": now.toISOString(),
                "timeline.3.date": formatDateString(now),
                "timeline.3.description": "Police Complaint skipped as per advocate preference (Police complaints toggle off)."
              }
            }
          );
          
          // Create a mock dispatch log entry so it's documented
          const ledgerEntry = {
            caseId: caseDoc.caseId,
            dbId: caseDoc._id,
            step: 4,
            noticeRef,
            recipientTo: "None (Skipped)",
            clientCc: clientEmail || "None",
            dispatchedAt: new Date().toISOString(),
            channels: {
              email: {
                status: "success",
                error: "Skipped (Police complaints toggle off)"
              },
              whatsapp: {
                status: "success",
                error: "Skipped (Police complaints toggle off)"
              }
            }
          };
          await db.collection("dispatch_logs").insertOne(ledgerEntry);
          
          continue;
        }

        // Step 4: SHO Criminal Police Complaint (Direct Email to SHO & Accused, CC Client)
        if (!clientEmail) {
          console.error(`[Queue Processor] Client email missing for Case ${caseDoc.caseId}`);
          await db.collection("cases").updateOne(
            { _id: caseDoc._id },
            { $set: { "timeline.3.status": "failed", "timeline.3.error": "Client email not found" } }
          );
          continue;
        }

        const complainantEmail = caseDoc.clientEmail || clientUser?.email || caseDoc.clientEmail;
        const complainantPhone = caseDoc.clientPhone || clientUser?.phone || caseDoc.clientPhone;
        const complainantAddress = caseDoc.clientAddress || clientUser?.address || caseDoc.clientAddress;

        let pdfBuffer: Buffer;
        try {
          const pdfParams = {
            defaulterName: sanitizeField(caseDoc.defaulterName),
            phone: sanitizeField(caseDoc.phone),
            email: sanitizeField(caseDoc.email),
            address: sanitizeField(caseDoc.address),
            stuckAmount: caseDoc.stuckAmount,
            policeStationName: sanitizeField(caseDoc.policeStationName),
            policeStationAddress: sanitizeField(caseDoc.policeStationAddress),
            policeStationEmail: sanitizeField(caseDoc.policeStationEmail),
            createdAt: caseDoc.createdAt,
            step: 4,
            clientName: clientDisplayName,
            clientEmail: complainantEmail,
            clientPhone: complainantPhone,
            clientAddress: sanitizeField(complainantAddress),
            invoiceNo: sanitizeField(caseDoc.invoiceNo),
            invoiceDate: sanitizeField(caseDoc.invoiceDate),
            invoices: caseDoc.invoices,
            noticeRef,
            isSpecialUser: isSpecialUser,
            category: caseDoc.category || 'general-recovery',
          };
          
          if (caseDoc.category === 'loan-recovery') {
            pdfBuffer = await generateLoanNoticePDFBuffer(pdfParams);
          } else {
            pdfBuffer = await generateNoticePDFBuffer(pdfParams);
          }
        } catch (pdfErr: any) {
          console.error(`[Queue Processor] Step 4 PDF Generation failed for Case ${caseDoc.caseId}:`, pdfErr);
          await db.collection("cases").updateOne(
            { _id: caseDoc._id },
            { $set: { "timeline.3.status": "failed", "timeline.3.error": pdfErr.message } }
          );
          continue;
        }

        const cleanDefaulterName = caseDoc.defaulterName.replace(/[^a-zA-Z0-9]/g, "_");
        const pdfFilename = `${cleanDefaulterName}_Police_Complaint_${formatDateString(now)}.pdf`;

        let combinedCcEmails = clientEmail || "";
        if (caseDoc.ccEmails) {
          combinedCcEmails = combinedCcEmails ? `${combinedCcEmails},${caseDoc.ccEmails}` : caseDoc.ccEmails;
        }

        let emailSent = false;
        let whatsappSent = false;
        try {
          const dispatchRes = await sendAccusedDispatch(
            caseDoc,
            4,
            pdfBuffer,
            pdfFilename,
            clientDisplayName,
            clientEmail,
            true,
            noticeRef,
            combinedCcEmails
          );
          emailSent = dispatchRes.emailSent;
          whatsappSent = dispatchRes.whatsappSent;
        } catch (dispatchErr) {
          console.error(`[Queue Processor] Step 4 Dispatch error for Case ${caseDoc.caseId}:`, dispatchErr);
        }

        const toEmails = [];
        if (caseDoc.policeStationEmail) toEmails.push(caseDoc.policeStationEmail);
        if (caseDoc.email) toEmails.push(caseDoc.email);
        if (toEmails.length === 0) toEmails.push(clientEmail);
        const recipientTo = toEmails.join(", ");

        const ledgerEntry = {
          caseId: caseDoc.caseId,
          dbId: caseDoc._id,
          step: 4,
          noticeRef,
          recipientTo: recipientTo,
          clientCc: clientEmail,
          dispatchedAt: new Date().toISOString(),
          channels: {
            email: {
              status: emailSent ? "success" : "failed",
              error: emailSent ? null : `Direct SHO/Accused send failed`
            },
            whatsapp: {
              status: whatsappSent ? "success" : "failed",
              error: whatsappSent ? null : "WATI complaint broadcast failed"
            }
          }
        };
        await db.collection("dispatch_logs").insertOne(ledgerEntry);

        if (emailSent && whatsappSent) {
          try {
            await logPoliceComplaintClientNotification(
              db,
              caseDoc,
              clientDisplayName,
              clientEmail,
              noticeRef
            );
          } catch (notifErr) {
            console.error(`[Queue Processor] Step 4 client notification logging error:`, notifErr);
          }

          await db.collection("cases").updateOne(
            { _id: caseDoc._id },
            {
              $set: {
                status: "completed",
                updatedAt: now.toISOString(),
                "timeline.3.status": "completed",
                "timeline.3.completedAt": now.toISOString(),
                "timeline.3.date": formatDateString(now),
                "timeline.3.description": `Complaint sent directly to SHO (${caseDoc.policeStationEmail || 'No Email'}) & accused (${caseDoc.email}${caseDoc.email2 ? `, ${caseDoc.email2}` : ''}) with client in CC. WhatsApp notice sent to accused.`
              }
            }
          );
          console.log(`[Queue Processor] Step 4 Completed. Case ${caseDoc.caseId} fully completed!`);
        } else {
          const attemptCount = (activeStep.retryCount || 0) + 1;
          const isPermanentFailure = attemptCount >= 3;
          const retryTime = new Date(now.getTime() + 15 * 60 * 1000);

          await db.collection("cases").updateOne(
            { _id: caseDoc._id },
            {
              $set: {
                "timeline.3.status": isPermanentFailure ? "failed_permanent" : (whatsappSent ? "partially_delivered" : "failed"),
                "timeline.3.retryCount": attemptCount,
                "timeline.3.scheduledAt": isPermanentFailure ? null : retryTime.toISOString(),
                "timeline.3.error": `SHO/Accused dispatch failed. Email Sent: ${emailSent}, WhatsApp Sent: ${whatsappSent}. Attempt: ${attemptCount}`,
                updatedAt: now.toISOString()
              }
            }
          );
          console.warn(`[Queue Processor] Step 4 dispatch failed for Case ${caseDoc.caseId}`);
        }
      }
    }

    // 2. Check for dynamic chaining (self-continuation batching)
    if (processedCount === limit) {
      const remainingQuery: any = {
        status: "active",
      };
      if (userIdFilter) {
        remainingQuery.userId = new ObjectId(userIdFilter);
        remainingQuery.timeline = {
          $elemMatch: {
            status: { $in: ["scheduled", "partially_delivered", "failed"] }
          }
        };
      } else {
        remainingQuery.timeline = {
          $elemMatch: {
            status: { $in: ["scheduled", "partially_delivered", "failed"] },
            scheduledAt: { $lte: now.toISOString() }
          }
        };
      }
      const remainingCount = await db.collection("cases").countDocuments(remainingQuery);

      if (remainingCount > 0) {
        const selfUrl = req.url;
        console.log(`[Queue Processor] Dynamic batch limit reached. Chaining next batch asynchronously. Remaining due: ${remainingCount}`);
        
        const nextAuthHeader = req.headers.get("Authorization") || "";
        
        fetch(selfUrl, {
          method: "POST",
          headers: { "Authorization": nextAuthHeader }
        }).catch(chainErr => console.error("[Queue Processor] Failed to chain next async batch:", chainErr));
      }
    }

    return NextResponse.json({
      success: true,
      processed: processedCount,
      message: `Successfully processed ${processedCount} notices.`
    });

  } catch (error: any) {
    console.error("[Queue Processor] Global error in queue:", error);
    return NextResponse.json({ error: "Internal queue runner error: " + error.message }, { status: 500 });
  }
}
