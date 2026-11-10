import crypto from "crypto";
import { Db } from "mongodb";
import { sendLegalRecoveryEmail } from "@/lib/email";
import { noticeNumberToTimelineStep, timelineStepToNoticeNumber } from "@/lib/dispatch-eligibility";
import { getDispatcherEmail } from "@/lib/dispatch-settings";

const SPECIAL_PHONE_PATTERN = /(8700343611|8130104447)$/;
const DOWNLOAD_LINK_DAYS = 14;

export async function getDispatchPool(db: Db) {
  const admins = await db.collection("users").find({ phone: { $regex: SPECIAL_PHONE_PATTERN } }).toArray();
  const adminIds = admins.map(a => a._id);
  const adminIdStrings = admins.map(a => a._id.toString());
  return {
    adminIds,
    adminIdStrings,
    conditions: [
      { userId: { $in: adminIds } },
      { userId: { $in: adminIdStrings } },
      { clientPhone: { $regex: SPECIAL_PHONE_PATTERN } },
    ] as any[],
  };
}

function getPublicBaseUrl(): string {
  for (const url of [process.env.NEXT_PUBLIC_APP_URL, process.env.NEXTAUTH_URL]) {
    if (url && !url.includes("localhost") && !url.includes("127.0.0.1")) return url.replace(/\/$/, "");
  }
  return "https://www.legalrecovery.in";
}

function escapeHtml(value: any): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildDispatcherEmailHtml(c: any, noticeNumber: number, caseRef: string, downloadUrl: string): string {
  const row = (label: string, value: any) => `
    <tr>
      <td style="padding: 8px 12px; font-size: 13px; color: #64748b; width: 130px; vertical-align: top;">${label}</td>
      <td style="padding: 8px 12px; font-size: 13px; color: #0f172a; font-weight: 600;">${escapeHtml(value)}</td>
    </tr>`;

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
      <div style="padding: 24px; border-bottom: 2px solid #f1f5f9;">
        <h2 style="margin: 0; font-size: 20px; color: #0f172a;">Legal notice ready for Speed Post</h2>
        <p style="margin: 8px 0 0; font-size: 14px; color: #475569; line-height: 1.5;">
          This notice has been sent to the party by email. Please download the PDF, print it and send it by Speed Post to the address below.
        </p>
      </div>
      <table style="width: 100%; border-collapse: collapse; margin: 12px 0;">
        ${row("Notice", `Notice ${noticeNumber}`)}
        ${row("Case reference", caseRef)}
        ${row("Send to", c.defaulterName || "N/A")}
        ${row("Postal address", c.address || "Address not provided")}
        ${row("Phone", c.phone || "N/A")}
      </table>
      <div style="padding: 8px 24px 28px; text-align: center;">
        <a href="${downloadUrl}" style="display: inline-block; background-color: #dc2626; color: #ffffff; font-size: 15px; font-weight: 700; text-decoration: none; padding: 14px 32px; border-radius: 10px;">Download Notice PDF</a>
        <p style="margin: 12px 0 0; font-size: 12px; color: #64748b;">This link is valid for ${DOWNLOAD_LINK_DAYS} days.</p>
      </div>
      <div style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 14px 24px; text-align: center; font-size: 12px; color: #64748b;">
        Legal Recovery • Confidential legal communication
      </div>
    </div>
  `;
}

/**
 * Emails the dispatcher a download link for a notice that has just been sent to the accused.
 * Covers AMA cases and retail cases that paid for Speed Post. A failure here is recorded on the
 * batch for the consoles to show, and never interrupts delivery of the notice itself.
 */
export async function notifyDispatcherOfNotice(
  db: Db,
  caseDoc: any,
  timelineStep: number,
  ownerPhone?: string
): Promise<void> {
  try {
    const noticeNumber = timelineStepToNoticeNumber(timelineStep, caseDoc.category);
    if (noticeNumber === null) return;

    const isAmaCase =
      SPECIAL_PHONE_PATTERN.test((ownerPhone || "").replace(/\D/g, "")) ||
      SPECIAL_PHONE_PATTERN.test(caseDoc.clientPhone || "");
    if (!isAmaCase && caseDoc.physicalDispatch !== true) return;

    const caseId = caseDoc._id.toString();
    const autoDispatchKey = `${caseId}:${noticeNumber}`;
    if (await db.collection("dispatch_batches").findOne({ autoDispatchKey })) return;

    const caseRef = caseDoc.caseId || `LR-${caseId.slice(-4)}`;
    const dispatcherEmail = await getDispatcherEmail(db);
    const token = crypto.randomBytes(32).toString("hex");
    const now = new Date();

    const { insertedId } = await db.collection("dispatch_batches").insertOne({
      batchId: `AUTO-${caseRef}-N${noticeNumber}`,
      token,
      source: "auto",
      autoDispatchKey,
      caseIds: [caseDoc._id],
      caseDispatches: [
        {
          caseId,
          caseRef,
          defaulterName: caseDoc.defaulterName || "Unspecified Person",
          phone: caseDoc.phone || "",
          email: caseDoc.email || "",
          stuckAmount: Number(caseDoc.stuckAmount) || 0,
          category: caseDoc.category || "general-recovery",
          step: noticeNumber,
          noticeNumber,
          timelineStep: noticeNumberToTimelineStep(noticeNumber, caseDoc.category) ?? timelineStep,
          label: `Notice ${noticeNumber}`,
        },
      ],
      dispatcherEmail,
      notes: "",
      targetNotice: noticeNumber,
      targetStep: noticeNumber,
      createdByName: "Automatic",
      totalCases: 1,
      status: "active",
      emailSent: false,
      createdAt: now,
      expiresAt: new Date(now.getTime() + DOWNLOAD_LINK_DAYS * 24 * 60 * 60 * 1000),
      downloadCount: 0,
      downloadLogs: [],
    });

    const downloadUrl = `${getPublicBaseUrl()}/api/notice-dispatch/download-pdf?token=${token}`;
    const emailSent = await sendLegalRecoveryEmail(
      dispatcherEmail,
      `Speed Post: Notice ${noticeNumber} - ${caseRef} - ${caseDoc.defaulterName || "Notice"}`,
      buildDispatcherEmailHtml(caseDoc, noticeNumber, caseRef, downloadUrl)
    );

    await db.collection("dispatch_batches").updateOne(
      { _id: insertedId },
      { $set: { emailSent, dispatchedAt: new Date() } }
    );
    console.log(`[Dispatcher Notice] Case ${caseRef} Notice ${noticeNumber} to ${dispatcherEmail}: emailSent=${emailSent}`);
  } catch (err) {
    console.error(`[Dispatcher Notice] Failed for case ${caseDoc?.caseId}:`, err);
  }
}
