import { generateLoanNoticePDFBuffer } from "@/lib/loan-pdf-generator";
import { generateNoticePDFBuffer } from "@/lib/pdf-generator";
import { noticeNumberToTimelineStep, resolveBatchNoticeNumber } from "@/lib/dispatch-eligibility";

function sanitizeField(val: any): string {
  if (val === null || val === undefined) return "";
  return String(val).trim();
}

export function getDispatchNotice(c: any, batch: any): { noticeNumber: number; timelineStep: number } {
  const noticeNumber = resolveBatchNoticeNumber(c, batch);
  const recorded = Array.isArray(batch?.caseDispatches)
    ? batch.caseDispatches.find((cd: any) => String(cd.caseId) === c._id.toString())
    : null;
  const timelineStep =
    (recorded && typeof recorded.timelineStep === "number"
      ? recorded.timelineStep
      : noticeNumberToTimelineStep(noticeNumber, c.category)) ?? 1;
  return { noticeNumber, timelineStep };
}

export function getDispatchPdfFilename(c: any, noticeNumber: number): string {
  const cleanDefaulterName = (c.defaulterName || "Debtor").replace(/[^a-zA-Z0-9]/g, "_").slice(0, 30);
  const caseRefSanitized = (c.caseId || "CASE").replace(/[^a-zA-Z0-9_-]/g, "_");
  return `${caseRefSanitized}_${cleanDefaulterName}_Notice_${noticeNumber}.pdf`;
}

/** Builds the printed copy of the notice a batch dispatched, dated the day it was originally emailed. */
export async function generateDispatchPdf(c: any, batch: any, loanBrowser?: any): Promise<Buffer> {
  const { noticeNumber, timelineStep } = getDispatchNotice(c, batch);
  const isRetailSpeedPost = c.physicalDispatch === true;
  const timelineEntry = Array.isArray(c.timeline)
    ? c.timeline.find((t: any) => Number(t?.step) === timelineStep) || c.timeline[timelineStep - 1]
    : null;

  const pdfParams: any = {
    defaulterName: sanitizeField(c.defaulterName),
    phone: sanitizeField(c.phone),
    email: sanitizeField(c.email),
    address: sanitizeField(c.address),
    stuckAmount: c.stuckAmount || 0,
    policeStationName: sanitizeField(c.policeStationName),
    policeStationAddress: sanitizeField(c.policeStationAddress),
    policeStationEmail: sanitizeField(c.policeStationEmail),
    createdAt: c.createdAt || new Date().toISOString(),
    step: timelineStep,
    category: c.category || "general-recovery",
    clientName: sanitizeField(c.clientName || "AMA Legal Solutions"),
    clientEmail: sanitizeField(c.clientEmail),
    clientPhone: sanitizeField(c.clientPhone),
    clientAddress: sanitizeField(c.clientAddress),
    clientAuthRepName: sanitizeField(c.clientAuthRepName),
    clientAuthRepPhone: sanitizeField(c.clientAuthRepPhone),
    invoiceNo: sanitizeField(c.invoiceNo || (c.invoices && c.invoices[0]?.invoiceNo)),
    invoiceDate: sanitizeField(c.invoiceDate),
    asOnDate: sanitizeField(c.asOnDate),
    disbursementDate: sanitizeField(c.disbursementDate),
    disbursedAmount: c.disbursedAmount,
    invoices: c.invoices,
    noticeRef: `${c.caseId || "LR"}-N${noticeNumber}`,
    noticeDateIso: timelineEntry?.completedAt,
    isSpecialUser: !isRetailSpeedPost,
    ...(isRetailSpeedPost ? { dispatchModeLabel: "THROUGH SPEED POST" } : {}),
  };

  return c.category === "loan-recovery"
    ? generateLoanNoticePDFBuffer(pdfParams, loanBrowser)
    : generateNoticePDFBuffer(pdfParams);
}
