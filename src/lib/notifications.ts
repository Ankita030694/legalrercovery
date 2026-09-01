import { Db, ObjectId } from "mongodb";
import { sendPaymentSuccessEmail, sendClientNotificationEmail } from "./email";
import { sendWatiPaymentSuccess, sendWatiClientNoticeNotification } from "./wati";

/**
 * Co-ordinates deduplicated dispatches of payment success emails and WATI WhatsApp alerts.
 * Generates a unique Case ID, logs parameters, and sets the transaction flag in the database.
 * Deduplication is per-transaction (via txnid) instead of per-user to ensure every new payment gets its own confirmation.
 */
export async function processPaymentSuccessNotifications(
  db: Db,
  phone: string,
  email: string,
  name: string,
  amountPaid: number,
  txnid?: string
): Promise<void> {
  // Debug log entry
  try {
    await db.collection("payment_debug_logs").insertOne({
      step: "notification_triggered",
      timestamp: new Date(),
      data: { phone, email, name, amountPaid, txnid }
    });
  } catch (err) {
    console.error("Failed to write initial notification log to DB:", err);
  }

  try {
    // 1. Fetch user to verify status
    const user = await db.collection("users").findOne({ phone });
    
    try {
      await db.collection("payment_debug_logs").insertOne({
        step: "notification_user_query",
        timestamp: new Date(),
        data: { phone, userFound: !!user, txnid }
      });
    } catch {}

    if (!user) {
      console.warn(`[Notification] User with phone ${phone} not found in users collection.`);
      return;
    }

    // Per-transaction deduplication: check if notification was already sent for this specific transaction
    if (txnid) {
      const existingNotification = await db.collection("transactions").findOne({
        payuTxnId: txnid,
        notificationSent: true
      });
      if (existingNotification) {
        console.log(`[Notification] Payment confirmation already sent for txnid ${txnid}. Skipping to prevent duplicates.`);
        return;
      }
    } else {
      // Fallback for calls without txnid (legacy): use the old global boolean
      if (user.paymentConfirmationSent) {
        console.log(`[Notification] Payment confirmation already sent to phone ${phone} (legacy check). Skipping to prevent duplicates.`);
        return;
      }
    }

    // 2. Generate caseId if not already present
    let caseId = user.caseId;
    if (!caseId) {
      const count = await db.collection("cases").countDocuments();
      const nextNum = String(count + 1).padStart(4, '0');
      const d = new Date();
      const day = d.getDate();
      const month = d.getMonth() + 1;
      const yearSuffix = d.getFullYear().toString().slice(-2);
      caseId = `LR-${nextNum}-${day}${month}${yearSuffix}`;
    }

    // 3. Persist the caseId and amountPaid in the database immediately
    await db.collection("users").updateOne(
      { _id: user._id },
      {
        $set: {
          caseId: caseId,
          amountPaid: amountPaid,
          paymentConfirmationSent: true,
          updatedAt: new Date()
        }
      }
    );

    // Mark this specific transaction's notification as sent (per-transaction deduplication)
    if (txnid) {
      await db.collection("transactions").updateOne(
        { payuTxnId: txnid },
        { $set: { notificationSent: true, notificationSentAt: new Date() } }
      );
    }

    console.log(`[Notification] Dispatched lock acquired. Starting dispatches for Case ${caseId} to phone ${phone} (txnid: ${txnid || "N/A"})`);
    try {
      await db.collection("payment_debug_logs").insertOne({
        step: "notification_dispatch_start",
        timestamp: new Date(),
        data: { phone, email, name, amountPaid, caseId, txnid }
      });
    } catch {}

    // Check custom notification preferences (defaults to true if not explicitly set to false)
    const emailEnabled = user.emailNotificationsEnabled !== false;
    const whatsappEnabled = user.whatsappNotificationsEnabled !== false;

    // 4. Dispatch both notifications in parallel
    const [emailSent, whatsappSent] = await Promise.all([
      emailEnabled
        ? sendPaymentSuccessEmail(email, name, amountPaid, caseId, phone)
        : Promise.resolve(false),
      whatsappEnabled
        ? sendWatiPaymentSuccess(phone, name, amountPaid, caseId)
        : Promise.resolve(false)
    ]);

    console.log(`[Notification] Dispatches completed. Email status: ${emailSent}, WhatsApp status: ${whatsappSent}`);
    
    try {
      await db.collection("payment_debug_logs").insertOne({
        step: "notification_dispatch_end",
        timestamp: new Date(),
        data: { phone, email, caseId, emailSent, whatsappSent }
      });
    } catch {}

  } catch (error) {
    console.error("[Notification] Error coordinating payment success notifications:", error);
    try {
      await db.collection("payment_debug_logs").insertOne({
        step: "notification_error",
        timestamp: new Date(),
        data: { error: error instanceof Error ? error.message : String(error) }
      });
    } catch {}
  }
}

export async function sendAndLogClientNotification(
  db: Db,
  caseDoc: any,
  step: number,
  clientDisplayName: string,
  clientEmail: string,
  clientPhone: string,
  noticeRef: string
): Promise<{ emailSent: boolean; watiSent: boolean }> {
  // Check notification preferences for the client
  let emailEnabled = true;
  let whatsappEnabled = true;
  try {
    const user = await db.collection("users").findOne({ _id: new ObjectId(caseDoc.userId) });
    if (user) {
      if (user.emailNotificationsEnabled === false) emailEnabled = false;
      if (user.whatsappNotificationsEnabled === false) whatsappEnabled = false;
    }
  } catch (err) {
    console.error("[Notification System] Error fetching user preferences:", err);
  }

  const emailSubject = `Notice ${step} Dispatched - Case Ref: ${noticeRef}`;
  const emailBody = `Dear ${clientDisplayName},

This is to inform you that Legal Demand Notice ${step} has been successfully dispatched to the accused, ${caseDoc.defaulterName}, via Email and WhatsApp.

You can track the live status and timeline of this case directly from your Legal Recovery dashboard.

Regards,
Legal Dispatch Desk
AMA Legal Solutions`;

  const promises = [
    emailEnabled
      ? sendClientNotificationEmail(clientEmail, emailSubject, emailBody)
      : Promise.resolve(false),
    whatsappEnabled
      ? sendWatiClientNoticeNotification(clientPhone, clientDisplayName, caseDoc.defaulterName, step, noticeRef)
      : Promise.resolve(false)
  ];

  const results = await Promise.allSettled(promises);
  
  const emailSent = results[0].status === "fulfilled" ? results[0].value : false;
  const watiSent = results[1].status === "fulfilled" ? results[1].value : false;

  const nowStr = new Date().toISOString();

  if (emailSent) {
    try {
      await db.collection("notifications").insertOne({
        userId: caseDoc.userId.toString(),
        caseId: caseDoc.caseId,
        caseName: caseDoc.defaulterName,
        type: "email_status",
        title: `Notice ${step} Dispatch Confirmation Email`,
        description: `Subject: ${emailSubject}\n\n${emailBody}`,
        status: "success",
        date: nowStr,
        isRead: false
      });
      console.log(`[Notification System] Logged email_status notification for Case: ${caseDoc.caseId}`);
    } catch (logErr) {
      console.error("[Notification System] Error logging email_status notification:", logErr);
    }
  }

  if (watiSent) {
    try {
      const whatsappText = `Dear ${clientDisplayName},\n\nNotice ${step} has been successfully dispatched to the accused ${caseDoc.defaulterName}.\n\nCase Ref: ${noticeRef}`;
      await db.collection("notifications").insertOne({
        userId: caseDoc.userId.toString(),
        caseId: caseDoc.caseId,
        caseName: caseDoc.defaulterName,
        type: "whatsapp_status",
        title: `Notice ${step} Dispatch Confirmation WhatsApp`,
        description: whatsappText,
        status: "success",
        date: nowStr,
        isRead: false
      });
      console.log(`[Notification System] Logged whatsapp_status notification for Case: ${caseDoc.caseId}`);
    } catch (logErr) {
      console.error("[Notification System] Error logging whatsapp_status notification:", logErr);
    }
  }

  return { emailSent, watiSent };
}

/**
 * Logs a client notification entry when a police complaint is sent to the SHO and CC'd to the client.
 */
export async function logPoliceComplaintClientNotification(
  db: Db,
  caseDoc: any,
  clientDisplayName: string,
  clientEmail: string,
  noticeRef: string
): Promise<void> {
  const emailSubject = `Formal Criminal Police Complaint - Cheating, Criminal Breach of Trust & Dishonest Non-Payment - Ref: ${noticeRef}`;
  const nowStr = new Date().toISOString();
  
  const description = `Subject: ${emailSubject}\n\nTo: The Station House Officer, ${caseDoc.policeStationName}\n\nYour Police Complaint draft has been successfully dispatched to the SHO and the accused (${caseDoc.defaulterName}) via Email. A copy has been CC'd to your email: ${clientEmail}.`;

  try {
    await db.collection("notifications").insertOne({
      userId: caseDoc.userId.toString(),
      caseId: caseDoc.caseId,
      caseName: caseDoc.defaulterName,
      type: "email_status",
      title: `Police Complaint Dispatched (CC'd to You)`,
      description,
      status: "success",
      date: nowStr,
      isRead: false
    });
    console.log(`[Notification System] Logged police complaint email notification for Case: ${caseDoc.caseId}`);
  } catch (logErr) {
    console.error("[Notification System] Error logging police complaint notification:", logErr);
  }

  try {
    const watiDescription = `Dear ${clientDisplayName},\n\nA formal WhatsApp notification has been successfully dispatched to the accused, ${caseDoc.defaulterName}, regarding the filed police complaint.\n\nCase Ref: ${noticeRef}`;
    await db.collection("notifications").insertOne({
      userId: caseDoc.userId.toString(),
      caseId: caseDoc.caseId,
      caseName: caseDoc.defaulterName,
      type: "whatsapp_status",
      title: `Police Complaint Notification WhatsApp`,
      description: watiDescription,
      status: "success",
      date: nowStr,
      isRead: false
    });
    console.log(`[Notification System] Logged police complaint whatsapp notification for Case: ${caseDoc.caseId}`);
  } catch (logErr) {
    console.error("[Notification System] Error logging police complaint whatsapp notification:", logErr);
  }
}

