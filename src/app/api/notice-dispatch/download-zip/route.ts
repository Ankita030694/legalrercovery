import { NextRequest, NextResponse } from "next/server";
import { getDbAndBucket } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import JSZip from "jszip";
import { launchLoanPdfBrowser } from "@/lib/loan-pdf-generator";
import { generateDispatchPdf, getDispatchNotice, getDispatchPdfFilename } from "@/lib/dispatch-pdf";

export const dynamic = "force-dynamic";
export const maxDuration = 300; // Allow up to 5 minutes for generating large PDF batches

// Stop starting new PDFs in time to still deliver the ZIP before the 5-minute limit
const PDF_GENERATION_TIME_LIMIT_MS = 270_000;

function escapeCsv(val: any): string {
  if (val === null || val === undefined) return '""';
  const str = String(val).replace(/"/g, '""');
  return `"${str}"`;
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

    // 4. Generate PDFs one at a time, sharing one browser across loan notices
    const startedAt = Date.now();
    const failedCases: any[] = [];
    let generatedCount = 0;
    let loanBrowser: any = null;

    const closeLoanBrowser = async () => {
      if (!loanBrowser) return;
      const browser = loanBrowser;
      loanBrowser = null;
      await browser.close().catch(() => {});
    };

    try {
      for (let i = 0; i < cases.length; i++) {
        const c = cases[i];
        const indexPadded = String(i + 1).padStart(2, "0");
        const { noticeNumber } = getDispatchNotice(c, batch);
        const isLoanRecovery = c.category === "loan-recovery";

        const recordFailure = (reason: string) =>
          failedCases.push({
            caseId: c._id.toString(),
            caseRef: c.caseId || "N/A",
            defaulterName: c.defaulterName || "",
            noticeNumber,
            reason,
          });

        if (Date.now() - startedAt > PDF_GENERATION_TIME_LIMIT_MS) {
          recordFailure("Ran out of time while building this package");
          continue;
        }

        let pdfBuffer: Buffer | null = null;
        let lastError = "";
        for (let attempt = 1; attempt <= 2 && !pdfBuffer; attempt++) {
          try {
            if (isLoanRecovery && !loanBrowser) loanBrowser = await launchLoanPdfBrowser();
            pdfBuffer = await generateDispatchPdf(c, batch, isLoanRecovery ? loanBrowser : undefined);
          } catch (genErr: any) {
            lastError = genErr?.message || "PDF generation failed";
            console.error(`[ZIP Dispatch Engine] Attempt ${attempt} failed for case ${c.caseId}:`, genErr);
            await closeLoanBrowser();
          }
        }

        if (!pdfBuffer) {
          recordFailure(lastError);
          continue;
        }

        zip.file(`${indexPadded}_${getDispatchPdfFilename(c, noticeNumber)}`, pdfBuffer);
        generatedCount++;

        // Add row to CSV Manifest
        csvRows.push(
          [
            i + 1,
            c.caseId || "N/A",
            `Notice ${noticeNumber}`,
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
      }
    } finally {
      await closeLoanBrowser();
    }

    if (generatedCount === 0) {
      await db.collection("dispatch_batches").updateOne({ _id: batch._id }, { $set: { failedCases } });
      return new NextResponse(
        `<!DOCTYPE html>
        <html>
        <head><title>Generation Error</title></head>
        <body style="font-family:sans-serif;padding:40px;text-align:center;background:#f8fafc;color:#1e293b;">
          <h2 style="color:#dc2626;">Failed to Generate Notice Package</h2>
          <p>None of the notices in this batch could be generated. Please try again or contact the administrator.</p>
        </body>
        </html>`,
        { status: 500, headers: { "Content-Type": "text/html; charset=utf-8" } }
      );
    }

    // 5. Add Address Manifest CSV to the Zip Root
    const manifestCsvContent = "﻿" + csvRows.join("\r\n"); // UTF-8 BOM for Excel compatibility
    zip.file("00_ENVELOPE_ADDRESS_MANIFEST.csv", manifestCsvContent);

    if (failedCases.length > 0) {
      zip.file(
        "00_MISSING_NOTICES_READ_FIRST.txt",
        [
          `${failedCases.length} notice(s) could not be generated and are NOT in this package.`,
          "Please tell the administrator so they can be sent again:",
          "",
          ...failedCases.map(f => `${f.caseRef} - ${f.defaulterName} - Notice ${f.noticeNumber}`),
        ].join("\r\n")
      );
    }

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
        $set: { lastDownloadedAt: now, failedCases },
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
        "X-Missing-Notices": String(failedCases.length),
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
