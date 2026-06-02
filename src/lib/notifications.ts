import { Db } from "mongodb";
import { sendPaymentSuccessEmail } from "./email";
import { sendWatiPaymentSuccess } from "./wati";

/**
 * Co-ordinates deduplicated dispatches of payment success emails and WATI WhatsApp alerts.
 * Generates a unique Case ID, logs parameters, and sets the transaction flag in the database.
 */
export async function processPaymentSuccessNotifications(
  db: Db,
  phone: string,
  email: string,
  name: string,
  amountPaid: number
): Promise<void> {
  // Debug log entry
  try {
    await db.collection("payment_debug_logs").insertOne({
      step: "notification_triggered",
      timestamp: new Date(),
      data: { phone, email, name, amountPaid }
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
        data: { phone, userFound: !!user, currentConfirmationSent: user?.paymentConfirmationSent }
      });
    } catch {}

    if (!user) {
      console.warn(`[Notification] User with phone ${phone} not found in users collection.`);
      return;
    }

    // Deduplication check
    if (user.paymentConfirmationSent) {
      console.log(`[Notification] Payment confirmation already sent to phone ${phone}. Skipping to prevent duplicates.`);
      return;
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

    // 3. Persist the caseId, amountPaid, and dispatch lock flag in the database immediately
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

    console.log(`[Notification] Dispatched lock acquired. Starting dispatches for Case ${caseId} to phone ${phone}`);
    try {
      await db.collection("payment_debug_logs").insertOne({
        step: "notification_dispatch_start",
        timestamp: new Date(),
        data: { phone, email, name, amountPaid, caseId }
      });
    } catch {}

    // 4. Dispatch both notifications in parallel
    const [emailSent, whatsappSent] = await Promise.all([
      sendPaymentSuccessEmail(email, name, amountPaid, caseId, phone),
      sendWatiPaymentSuccess(phone, name, amountPaid, caseId)
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
