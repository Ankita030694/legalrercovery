import { NextRequest, NextResponse } from "next/server";
import { getDbAndBucket } from "@/lib/mongodb";
import { generateDispatchPdf, getDispatchNotice, getDispatchPdfFilename } from "@/lib/dispatch-pdf";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

function errorPage(title: string, message: string, status: number) {
  return new NextResponse(
    `<!DOCTYPE html>
    <html>
    <head><title>${title}</title></head>
    <body style="font-family:sans-serif;padding:40px;text-align:center;background:#f8fafc;color:#1e293b;">
      <h2 style="color:#dc2626;">${title}</h2>
      <p>${message}</p>
    </body>
    </html>`,
    { status, headers: { "Content-Type": "text/html; charset=utf-8" } }
  );
}

/** GET /api/notice-dispatch/download-pdf?token= - The single notice PDF linked from the dispatcher's email */
export async function GET(request: NextRequest) {
  try {
    const token = request.nextUrl.searchParams.get("token");
    if (!token || token.length < 16) {
      return errorPage("Invalid Download Link", "Please check the link in your email or contact the administrator.", 400);
    }

    const { db } = await getDbAndBucket("fs");

    const batch = await db.collection("dispatch_batches").findOne({ token });
    if (!batch) {
      return errorPage("Notice Not Found", "This notice could not be found or may have been removed.", 404);
    }

    if (batch.expiresAt && new Date() > new Date(batch.expiresAt)) {
      return errorPage("Download Link Expired", "Please ask the administrator to send this notice again.", 410);
    }

    const caseDoc = await db.collection("cases").findOne({ _id: batch.caseIds?.[0] });
    if (!caseDoc) {
      return errorPage("Notice Not Found", "The case for this notice could not be found.", 404);
    }

    const { noticeNumber } = getDispatchNotice(caseDoc, batch);

    let pdfBuffer: Buffer;
    try {
      pdfBuffer = await generateDispatchPdf(caseDoc, batch);
    } catch (genErr: any) {
      console.error(`[Dispatch PDF] Failed for case ${caseDoc.caseId}:`, genErr);
      await db.collection("dispatch_batches").updateOne(
        { _id: batch._id },
        {
          $set: {
            failedCases: [
              {
                caseId: caseDoc._id.toString(),
                caseRef: caseDoc.caseId || "N/A",
                defaulterName: caseDoc.defaulterName || "",
                noticeNumber,
                reason: genErr?.message || "PDF generation failed",
              },
            ],
          },
        }
      );
      return errorPage("Could Not Generate Notice", "Please try the link again in a few minutes or contact the administrator.", 500);
    }

    const now = new Date();
    await db.collection("dispatch_batches").updateOne(
      { _id: batch._id },
      {
        $inc: { downloadCount: 1 },
        $set: { lastDownloadedAt: now, failedCases: [] },
        $push: {
          downloadLogs: {
            downloadedAt: now,
            ip: request.headers.get("x-forwarded-for") || "unknown",
            userAgent: request.headers.get("user-agent") || "unknown",
          },
        } as any,
      }
    );

    return new NextResponse(pdfBuffer as any, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${getDispatchPdfFilename(caseDoc, noticeNumber)}"`,
        "Content-Length": pdfBuffer.length.toString(),
        "Cache-Control": "no-store, no-cache, must-revalidate",
      },
    });
  } catch (error) {
    console.error("[Dispatch PDF] Fatal error:", error);
    return errorPage("Could Not Generate Notice", "Please try the link again in a few minutes or contact the administrator.", 500);
  }
}
