import { NextRequest, NextResponse } from "next/server";
import { getDbAndBucket } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { generateNoticePDFBuffer } from "@/lib/pdf-generator";
import { sendNoticeEmail } from "@/lib/email";
import { sendNoticeWati } from "@/lib/wati";
import { sendAndLogClientNotification, logPoliceComplaintClientNotification } from "@/lib/notifications";

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

Note: If you have already made any full or partial payment towards the outstanding liability prior to the receipt of this notice or during its transit, kindly treat this demand as adjusted to the extent of such payment, and email the transaction receipt to notice@amalegalsolutions.com for immediate reconciliation.

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

Note: If you have already made any full or partial payment towards the outstanding liability prior to the receipt of this notice or during its transit, kindly treat this demand as adjusted to the extent of such payment, and email the transaction receipt to notice@amalegalsolutions.com for immediate reconciliation.

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

Note: If you have already made any full or partial payment towards the outstanding liability prior to the receipt of this notice or during its transit, kindly treat this demand as adjusted to the extent of such payment, and email the transaction receipt to notice@amalegalsolutions.com for immediate reconciliation.

Regards,
Legal Dispatch Desk
AMA Legal Solutions`;
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
      promises.push(sendNoticeEmail(toEmails, emailSubject, emailBody, pdfBuffer, pdfFilename, complainantEmail));
    } else {
      const toEmails = [];
      if (caseDoc.policeStationEmail) toEmails.push(caseDoc.policeStationEmail);
      if (caseDoc.email) toEmails.push(caseDoc.email);
      if (caseDoc.email2) toEmails.push(caseDoc.email2);
      if (toEmails.length === 0) toEmails.push(complainantEmail);
      const recipientTo = toEmails.join(", ");
      promises.push(sendNoticeEmail(recipientTo, emailSubject, emailBody, pdfBuffer, pdfFilename, complainantEmail));
    }
  } else {
    promises.push(Promise.resolve(true));
  }

  // 2. WhatsApp Channel (Steps 1-3 only)
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
  // Authorization validation for production environments
  if (process.env.NODE_ENV === "production") {
    const authHeader = req.headers.get("Authorization");
    const cronSecret = process.env.CRON_SECRET;
    if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json({ error: "Unauthorized cron request." }, { status: 401 });
    }
  }

  const { db } = await getDbAndBucket("fs");
  const now = new Date();

  try {
    // 1. Fetch cases that have a timeline step due or needing retry
    const casesToProcess = await db.collection("cases").find({
      status: "active",
      "timeline": {
        $elemMatch: {
          status: { $in: ["scheduled", "partially_delivered", "failed"] },
          scheduledAt: { $lte: now.toISOString() }
        }
      }
    }).limit(BATCH_SIZE).toArray();

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

      const isTimePassed = new Date(activeStep.scheduledAt) <= now;

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
      const clientUser = await db.collection("users").findOne({ _id: caseDoc.userId });
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
            step: caseDoc.currentStep,
            clientName: clientDisplayName,
            clientEmail: complainantEmail,
            clientPhone: complainantPhone,
            clientAddress: complainantAddress,
            noticeRef
          });
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

        try {
          const dispatchRes = await sendAccusedDispatch(
            caseDoc,
            caseDoc.currentStep,
            pdfBuffer,
            pdfFilename,
            clientDisplayName,
            complainantEmail,
            isEmailPending,
            noticeRef
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
          const nextScheduledTime = new Date(now.getTime() + 5 * 60 * 1000); // 5 minutes testing interval

          const updateDoc: any = {
            currentStep: nextStep,
            updatedAt: now.toISOString(),
            [`timeline.${stepIndex}.status`]: "completed",
            [`timeline.${stepIndex}.completedAt`]: now.toISOString(),
            [`timeline.${stepIndex}.date`]: formatTimelineDate(now),
            [`timeline.${stepIndex}.description`]: "Dispatched via Zoho Email & WATI WhatsApp",
          };

          // If there is a next step, unlock and schedule it
          if (nextStep <= 4) {
            updateDoc[`timeline.${stepIndex + 1}.status`] = "scheduled";
            updateDoc[`timeline.${stepIndex + 1}.scheduledAt`] = nextScheduledTime.toISOString();
            updateDoc[`timeline.${stepIndex + 1}.date`] = formatTimelineDate(nextScheduledTime);
            updateDoc[`timeline.${stepIndex + 1}.timeRemaining`] = "5 mins remaining";
            
            if (nextStep === 4) {
              updateDoc[`timeline.${stepIndex + 1}.description`] = `Draft complaint copy shared for client`;
            } else {
              updateDoc[`timeline.${stepIndex + 1}.description`] = `Dispatched exactly 5 minutes after Notice ${nextStep - 1}`;
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
        // Step 4: SHO Criminal Police Complaint (Direct Email to SHO & Accused, CC Client)
        const clientEmail = caseDoc.clientEmail || clientUser?.email || caseDoc.clientEmail;
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
            step: 4,
            clientName: clientDisplayName,
            clientEmail: complainantEmail,
            clientPhone: complainantPhone,
            clientAddress: complainantAddress,
            noticeRef
          });
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

        let emailSent = false;
        try {
          const dispatchRes = await sendAccusedDispatch(
            caseDoc,
            4,
            pdfBuffer,
            pdfFilename,
            clientDisplayName,
            clientEmail,
            true,
            noticeRef
          );
          emailSent = dispatchRes.emailSent;
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
            }
          }
        };
        await db.collection("dispatch_logs").insertOne(ledgerEntry);

        if (emailSent) {
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
                "timeline.3.description": `Complaint sent directly to SHO (${caseDoc.policeStationEmail || 'No Email'}) & accused (${caseDoc.email}${caseDoc.email2 ? `, ${caseDoc.email2}` : ''}) with client in CC.`
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
                "timeline.3.status": isPermanentFailure ? "failed_permanent" : "failed",
                "timeline.3.retryCount": attemptCount,
                "timeline.3.scheduledAt": isPermanentFailure ? null : retryTime.toISOString(),
                "timeline.3.error": `SHO/Accused dispatch failed. Attempt: ${attemptCount}`,
                updatedAt: now.toISOString()
              }
            }
          );
          console.warn(`[Queue Processor] Step 4 dispatch failed for Case ${caseDoc.caseId}`);
        }
      }
    }

    // 2. Check for dynamic chaining (self-continuation batching)
    if (processedCount === BATCH_SIZE) {
      const remainingCount = await db.collection("cases").countDocuments({
        status: "active",
        "timeline": {
          $elemMatch: {
            status: { $in: ["scheduled", "partially_delivered", "failed"] },
            scheduledAt: { $lte: now.toISOString() }
          }
        }
      });

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
