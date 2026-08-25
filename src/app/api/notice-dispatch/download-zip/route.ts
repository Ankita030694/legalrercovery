import { NextRequest, NextResponse } from "next/server";
import { getDbAndBucket } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import JSZip from "jszip";
import { generateLoanNoticePDFBuffer } from "@/lib/loan-pdf-generator";
import { generateNoticePDFBuffer } from "@/lib/pdf-generator";

export const dynamic = "force-dynamic";
export const maxDuration = 300; // Allow up to 5 minutes for generating large PDF batches

function sanitizeField(val: any): string {
  if (val === null || val === undefined) return "";
  return String(val).trim();
}

function escapeCsv(val: any): string {
  if (val === null || val === undefined) return '""';
  const str = String(val).replace(/"/g, '""');
  return `"${str}"`;
}

function formatDateString(dateVal: any): string {
  if (!dateVal) return "";
  const d = new Date(dateVal);
  if (isNaN(d.getTime())) return String(dateVal);
  return `${String(d.getDate()).padStart(2, "0")}-${String(d.getMonth() + 1).padStart(2, "0")}-${d.getFullYear()}`;
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get("token");

    if (!token || typeof token !== "string" || token.length < 16) {
      return new NextResponse(
        `<!DOCTYPE html>
        <html>
        <head><title>Invalid Dispatch Link</title></head>
        <body style="font-family:sans-serif;padding:40px;text-align:center;background:#f8fafc;color:#1e293b;">
          <h2 style="color:#dc2626;">Invalid or Missing Dispatch Token</h2>
          <p>The download token provided is invalid or has been corrupted. Please check your email link or contact the administrator.</p>
        </body>
        </html>`,
        { status: 400, headers: { "Content-Type": "text/html; charset=utf-8" } }
      );
    }

    const { db } = await getDbAndBucket("fs");

    // 1. Locate batch record
    const batch = await db.collection("dispatch_batches").findOne({ token });
    if (!batch) {
      return new NextResponse(
        `<!DOCTYPE html>
        <html>
        <head><title>Batch Not Found</title></head>
        <body style="font-family:sans-serif;padding:40px;text-align:center;background:#f8fafc;color:#1e293b;">
          <h2 style="color:#dc2626;">Dispatch Batch Not Found</h2>
          <p>This physical notice dispatch batch could not be found or may have been removed.</p>
        </body>
        </html>`,
        { status: 404, headers: { "Content-Type": "text/html; charset=utf-8" } }
      );
    }

    // 2. Check expiration
    if (batch.expiresAt && new Date() > new Date(batch.expiresAt)) {
      return new NextResponse(
        `<!DOCTYPE html>
        <html>
        <head><title>Download Link Expired</title></head>
        <body style="font-family:sans-serif;padding:40px;text-align:center;background:#f8fafc;color:#1e293b;">
          <h2 style="color:#dc2626;">Download Link Expired</h2>
          <p>This batch download link expired on ${new Date(batch.expiresAt).toLocaleDateString("en-IN")}. Please ask the administrator to regenerate the dispatch batch.</p>
        </body>
        </html>`,
        { status: 410, headers: { "Content-Type": "text/html; charset=utf-8" } }
      );
    }

    // 3. Fetch cases in batch
    const caseObjectIds = (batch.caseIds || [])
      .map((id: any) => {
        try {
          return new ObjectId(id);
        } catch {
          return null;
        }
      })
      .filter(Boolean);

    const cases = await db
      .collection("cases")
      .find({ _id: { $in: caseObjectIds } })
      .sort({ createdAt: -1 })
      .toArray();

    if (cases.length === 0) {
      return new NextResponse(
        `<!DOCTYPE html>
        <html>
        <head><title>No Cases Found</title></head>
        <body style="font-family:sans-serif;padding:40px;text-align:center;background:#f8fafc;color:#1e293b;">
          <h2 style="color:#dc2626;">No Debtor Records Found</h2>
          <p>No valid debtor records were found associated with this dispatch batch.</p>
        </body>
        </html>`,
        { status: 404, headers: { "Content-Type": "text/html; charset=utf-8" } }
      );
    }

    console.log(`[ZIP Dispatch Engine] Generating ZIP archive for Batch ${batch.batchId} (${cases.length} cases)...`);

    const zip = new JSZip();

    // Prepare CSV Manifest Rows
    const csvRows: string[] = [
      [
        "Index",
        "Case ID",
        "Notice Step",
        "Category",
        "Borrower / Defaulter Name",
        "Complete Postal Address",
        "Phone Number",
        "Email Address",
        "Police Station / SHO Jurisdiction",
        "Client / Represented Entity",
        "Claim Amount (INR)",
        "Speed Post / Courier Consignment No (To Fill)"
      ].map(escapeCsv).join(",")
    ];

    // 4. Generate identical PDFs for each case
    let generatedCount = 0;
    for (let i = 0; i < cases.length; i++) {
      const c = cases[i];
      const stepIndex = i + 1;
      const indexPadded = String(stepIndex).padStart(2, "0");

      // Intelligent step resolution:
      // 1. If batch explicitly specified a targetStep, use it.
      // 2. Otherwise find the latest completed notice step that was sent to the accused.
      // 3. Fallback to 1.
      const completedTimelineSteps = (c.timeline || [])
        .filter((t: any) => t.status === "completed")
        .map((t: any) => Number(t.step))
        .filter((n: number) => !isNaN(n) && n > 0);

      let effectiveStep = 1;
      if (batch.targetStep && typeof batch.targetStep === "number") {
        effectiveStep = batch.targetStep;
      } else if (completedTimelineSteps.length > 0) {
        effectiveStep = Math.max(...completedTimelineSteps);
      } else if (c.currentStep && typeof c.currentStep === "number" && c.currentStep > 0) {
        effectiveStep = c.currentStep;
      } else {
        effectiveStep = 1;
      }

      const isLoanRecovery = c.category === "loan-recovery";
      const isLoanComplaint = isLoanRecovery && effectiveStep === 2;
      const isGeneralComplaint = !isLoanRecovery && effectiveStep === 4;
      const suffix = isLoanComplaint ? "C2" : isGeneralComplaint ? "C4" : `N${effectiveStep}`;
      const noticeRef = `${c.caseId || "LR"}-${suffix}`;

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
        step: effectiveStep,
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
        noticeRef,
        isSpecialUser: true,
      };

      try {
        let pdfBuffer: Buffer;
        if (isLoanRecovery) {
          pdfBuffer = await generateLoanNoticePDFBuffer(pdfParams);
        } else {
          pdfBuffer = await generateNoticePDFBuffer(pdfParams);
        }

        const cleanDefaulterName = (c.defaulterName || "Debtor").replace(/[^a-zA-Z0-9]/g, "_").slice(0, 30);
        const caseRefSanitized = (c.caseId || "CASE").replace(/[^a-zA-Z0-9_-]/g, "_");
        const filenameStepSuffix = isLoanComplaint || isGeneralComplaint ? "Police_Complaint" : `Notice_${effectiveStep}`;
        const filename = `${indexPadded}_${caseRefSanitized}_${cleanDefaulterName}_${filenameStepSuffix}.pdf`;

        zip.file(filename, pdfBuffer);
        generatedCount++;

        // Add row to CSV Manifest
        const stepLabel = isLoanComplaint
          ? "Police Complaint"
          : isGeneralComplaint
          ? "Police Complaint"
          : `Notice ${effectiveStep}`;

        csvRows.push(
          [
            stepIndex,
            c.caseId || "N/A",
            stepLabel,
            isLoanRecovery ? "Loan Recovery" : "Commercial",
            c.defaulterName || "",
            c.address || "Address not provided",
            c.phone || "",
            c.email || "",
            c.policeStationName || "",
            c.clientName || "AMA Legal Solutions",
            c.stuckAmount || 0,
            "" // Placeholder for physical barcode / Speed post tracking number
          ].map(escapeCsv).join(",")
        );
      } catch (genErr) {
        console.error(`[ZIP Dispatch Engine] Error generating PDF for case ${c.caseId}:`, genErr);
      }
    }

    // 5. Add Address Manifest CSV to the Zip Root
    const manifestCsvContent = "\uFEFF" + csvRows.join("\r\n"); // UTF-8 BOM for Excel compatibility
    zip.file("00_ENVELOPE_ADDRESS_MANIFEST.csv", manifestCsvContent);

    // 6. Generate in-memory ZIP buffer
    const zipBuffer = await zip.generateAsync({
      type: "nodebuffer",
      compression: "DEFLATE",
      compressionOptions: { level: 6 },
    });

    console.log(`[ZIP Dispatch Engine] Successfully built ZIP package: ${zipBuffer.length} bytes for ${generatedCount} PDFs.`);

    // 7. Update batch statistics in DB
    const now = new Date();
    await db.collection("dispatch_batches").updateOne(
      { _id: batch._id },
      {
        $inc: { downloadCount: 1 },
        $set: { lastDownloadedAt: now },
        $push: {
          downloadLogs: {
            downloadedAt: now,
            ip: request.headers.get("x-forwarded-for") || "unknown",
            userAgent: request.headers.get("user-agent") || "unknown",
          },
        } as any,
      }
    );

    const safeBatchId = (batch.batchId || "BATCH").replace(/[^a-zA-Z0-9_-]/g, "_");
    const downloadFilename = `Notice_Dispatch_Batch_${safeBatchId}.zip`;

    return new NextResponse(zipBuffer as any, {
      status: 200,
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": `attachment; filename="${downloadFilename}"`,
        "Content-Length": zipBuffer.length.toString(),
        "Cache-Control": "no-store, no-cache, must-revalidate",
      },
    });
  } catch (error: any) {
    console.error("[ZIP Dispatch Engine] Fatal Error generating zip download:", error);
    return new NextResponse(
      `<!DOCTYPE html>
      <html>
      <head><title>Generation Error</title></head>
      <body style="font-family:sans-serif;padding:40px;text-align:center;background:#f8fafc;color:#1e293b;">
        <h2 style="color:#dc2626;">Failed to Generate Notice Package</h2>
        <p>${error?.message || "An unexpected error occurred while generating the physical notice PDF package."}</p>
      </body>
      </html>`,
      { status: 500, headers: { "Content-Type": "text/html; charset=utf-8" } }
    );
  }
}
