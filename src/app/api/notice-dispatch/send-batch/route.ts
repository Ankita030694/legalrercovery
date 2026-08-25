import { NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "@/lib/auth";
import { getDbAndBucket } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import crypto from "crypto";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
import { sendEmailViaZohoAPI } from "@/lib/zoho-mail";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

function isSpecialUserPhone(phone: string): boolean {
  const clean = phone.replace(/\D/g, "");
  return clean.endsWith("8700343611") || clean.endsWith("8130104447");
}

function formatCurrency(amount: any): string {
  const val = typeof amount === "string" ? parseFloat(amount.replace(/,/g, "")) : amount;
  if (isNaN(val) || val === null || val === undefined) return "₹0";
  return `₹${Math.round(val).toLocaleString("en-IN")}`;
}

export async function POST(request: NextRequest) {
  try {
    const auth = await verifyAuth(request);
    if (auth.error) return auth.error;
    const session = auth.session;

    const { db } = await getDbAndBucket("fs");
    const userIdStr = (session?.user as any)?.id;
    if (!userIdStr) {
      return NextResponse.json({ error: "Unauthorized session" }, { status: 401 });
    }

    let userObjId: ObjectId;
    try {
      userObjId = new ObjectId(userIdStr);
    } catch {
      return NextResponse.json({ error: "Invalid user session ID" }, { status: 400 });
    }

    const user = await db.collection("users").findOne({ _id: userObjId });
    if (!user || !isSpecialUserPhone(user.phone || "")) {
      return NextResponse.json(
        { error: "Forbidden: Notice Dispatch features are strictly restricted to Special Administrators." },
        { status: 403 }
      );
    }

    const body = await request.json();
    const { caseIds, dispatcherEmail, notes, targetStep } = body;

    if (!dispatcherEmail || typeof dispatcherEmail !== "string" || !dispatcherEmail.includes("@")) {
      return NextResponse.json(
        { error: "A valid dispatcher email address is required." },
        { status: 400 }
      );
    }

    // 1. Fetch matching cases
    let query: any = {};
    if (Array.isArray(caseIds) && caseIds.length > 0) {
      const objectIds = caseIds
        .map(id => {
          try {
            return new ObjectId(id);
          } catch {
            return null;
          }
        })
        .filter(Boolean) as ObjectId[];

      if (objectIds.length === 0) {
        return NextResponse.json({ error: "No valid case IDs provided." }, { status: 400 });
      }
      query._id = { $in: objectIds };
    }

    const cases = await db
      .collection("cases")
      .find(query)
      .sort({ createdAt: -1 })
      .toArray();

    if (cases.length === 0) {
      return NextResponse.json({ error: "No matching debtor cases found for dispatch." }, { status: 404 });
    }

    // 2. Generate secure token & batch record
    const token = crypto.randomBytes(32).toString("hex");
    const todayStr = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const batchId = `DISP-${todayStr}-${randomSuffix}`;
    const now = new Date();
    const expiresAt = new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000); // 14 days expiration

    const batchDoc = {
      batchId,
      token,
      caseIds: cases.map(c => c._id),
      dispatcherEmail: dispatcherEmail.trim().toLowerCase(),
      notes: notes || "",
      targetStep: typeof targetStep === "number" ? targetStep : undefined,
      createdById: userObjId,
      createdByName: user.name || "Special Admin",
      createdByPhone: user.phone || "",
      totalCases: cases.length,
      status: "active",
      createdAt: now,
      expiresAt,
      downloadCount: 0,
      downloadLogs: [] as any[],
    };

    await db.collection("dispatch_batches").insertOne(batchDoc);

    // 3. Determine Base URL for 1-Click ZIP Download link (favoring production HTTPS domain for email deliverability)
    const host = request.headers.get("x-forwarded-host") || request.headers.get("host") || "";
    const proto = request.headers.get("x-forwarded-proto") || (host.includes("localhost") ? "http" : "https");

    let baseUrl = "";
    if (host && !host.includes("localhost") && !host.includes("127.0.0.1")) {
      baseUrl = `${proto}://${host}`;
    } else if (process.env.NEXT_PUBLIC_APP_URL && !process.env.NEXT_PUBLIC_APP_URL.includes("localhost")) {
      baseUrl = process.env.NEXT_PUBLIC_APP_URL;
    } else if (process.env.NEXTAUTH_URL && !process.env.NEXTAUTH_URL.includes("localhost")) {
      baseUrl = process.env.NEXTAUTH_URL;
    } else {
      baseUrl = "https://www.legalrecovery.in";
    }

    const downloadUrl = `${baseUrl}/notice-dispatch/download?token=${token}`;

    // 4. Build Machine-Readable Hidden Metadata
    const hiddenMetadataObj = {
      batchId,
      token,
      totalCases: cases.length,
      createdAt: now.toISOString(),
      expiresAt: expiresAt.toISOString(),
      senderPhone: user.phone,
      dispatcherEmail: dispatcherEmail.trim().toLowerCase(),
      notes: notes || "",
      cases: cases.map(c => {
        const completedTimelineSteps = (c.timeline || [])
          .filter((t: any) => t.status === "completed")
          .map((t: any) => Number(t.step))
          .filter((n: number) => !isNaN(n) && n > 0);

        let effectiveStep = 1;
        if (typeof targetStep === "number") {
          effectiveStep = targetStep;
        } else if (completedTimelineSteps.length > 0) {
          effectiveStep = Math.max(...completedTimelineSteps);
        } else if (c.currentStep && typeof c.currentStep === "number" && c.currentStep > 0) {
          effectiveStep = c.currentStep;
        }

        return {
          id: c._id.toString(),
          caseId: c.caseId || "N/A",
          defaulterName: c.defaulterName || "",
          phone: c.phone || "",
          email: c.email || "",
          address: c.address || "",
          stuckAmount: c.stuckAmount || 0,
          category: c.category || "general-recovery",
          step: effectiveStep,
          policeStationName: c.policeStationName || "",
          policeStationAddress: c.policeStationAddress || "",
          policeStationEmail: c.policeStationEmail || "",
          clientName: c.clientName || "AMA Legal Solutions",
          clientPhone: c.clientPhone || "",
          clientEmail: c.clientEmail || "",
          invoiceNo: c.invoiceNo || (c.invoices && c.invoices[0]?.invoiceNo) || "",
          invoiceDate: c.invoiceDate || "",
          disbursementDate: c.disbursementDate || "",
        };
      }),
    };

    const hiddenMetadataComment = `<!-- DISPATCH_BATCH_METADATA_START\n${JSON.stringify(hiddenMetadataObj, null, 2)}\nDISPATCH_BATCH_METADATA_END -->`;

    // 5. Build Human-Friendly Email HTML Body
    const tableRowsHtml = cases
      .map((c, index) => {
        const completedTimelineSteps = (c.timeline || [])
          .filter((t: any) => t.status === "completed")
          .map((t: any) => Number(t.step))
          .filter((n: number) => !isNaN(n) && n > 0);

        let effectiveStep = 1;
        if (typeof targetStep === "number") {
          effectiveStep = targetStep;
        } else if (completedTimelineSteps.length > 0) {
          effectiveStep = Math.max(...completedTimelineSteps);
        } else if (c.currentStep && typeof c.currentStep === "number" && c.currentStep > 0) {
          effectiveStep = c.currentStep;
        }

        const isLoan = c.category === "loan-recovery";
        const stepLabel =
          isLoan
            ? effectiveStep === 2
              ? "Police Complaint"
              : `Notice ${effectiveStep}`
            : effectiveStep === 4
            ? "Police Complaint"
            : `Notice ${effectiveStep}`;

        const categoryBadge =
          c.category === "loan-recovery"
            ? `<span style="background-color:#FAF5FF;color:#7E22CE;border:1px solid #E9D5FF;padding:2px 6px;border-radius:4px;font-size:10px;font-weight:700;">LOAN</span>`
            : `<span style="background-color:#EFF6FF;color:#1D4ED8;border:1px solid #BFDBFE;padding:2px 6px;border-radius:4px;font-size:10px;font-weight:700;">COMMERCIAL</span>`;

        return `
          <tr style="border-bottom: 1px solid #F6E6BC; ${index % 2 === 0 ? "background-color: #FFFFFF;" : "background-color: #FFFDF7;"}">
            <td style="padding: 11px 12px; font-size: 11px; font-weight: 700; color: #8C6806; text-align: center;">${index + 1}</td>
            <td style="padding: 11px 12px; font-size: 13px; font-weight: 800; color: #2A2421;">${c.defaulterName || "N/A"}</td>
            <td style="padding: 11px 12px; font-size: 12px; font-family: monospace; font-weight: 700; color: #2A2421; white-space: nowrap;">
              <a href="tel:${c.phone}" style="color: #D29E0D; text-decoration: underline; font-weight: 800;">${c.phone || "N/A"}</a>
            </td>
            <td style="padding: 11px 12px; font-size: 12px; font-weight: 600; color: #2A2421;">
              <a href="mailto:${c.email}" style="color: #D29E0D; text-decoration: underline; font-weight: 800;">${c.email || "N/A"}</a>
            </td>
            <td style="padding: 11px 12px; font-size: 11px; font-weight: 500; color: #3E3835; line-height: 1.4;">
              ${c.address || "Address not provided"}
            </td>
          </tr>
        `;
      })
      .join("");

    const publicLogoUrl = "https://www.legalrecovery.in/notices/header%20logo%20AMA%20.png";

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Notice Dispatch Batch (${cases.length} Records)</title>
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #FFFDF7; margin: 0; padding: 24px; color: #2A2421;">
        <div style="max-width: 820px; margin: 0 auto; background-color: #FFFFFF; border: 2px solid #D29E0D; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(210, 158, 13, 0.12);">
          
          <!-- Header Banner -->
          <div style="background-color: #FFFFFF; padding: 32px 32px 24px 32px; border-bottom: 3px solid #D29E0D; text-align: left;">
            <img src="${publicLogoUrl}" alt="AMA Legal Solutions" width="280" style="width: 280px; max-width: 100%; height: auto; display: block; margin-bottom: 20px; border: 0;" />
            <h1 style="margin: 0; font-size: 22px; font-weight: 900; letter-spacing: -0.5px; color: #2A2421;">
              Notice Dispatch Batch (${cases.length} Records)
            </h1>
            <p style="margin: 6px 0 0 0; font-size: 13px; color: #8C6806; font-weight: 600;">
              Batch Reference: <strong style="color: #2A2421; font-family: monospace;">${batchId}</strong> • Created on ${now.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })}
            </p>
          </div>

          <!-- Instructions & Action Callout -->
          <div style="padding: 24px 32px; background-color: #FFFDF7; border-bottom: 1px solid #F3DB9A;">
            <p style="margin: 0 0 16px 0; font-size: 14px; line-height: 1.5; color: #2A2421; font-weight: 600;">
              Hello,<br />
              A new batch of <strong>${cases.length} legal notices</strong> has been approved for physical printing, envelope packing, and dispatch. Click below to download the complete package containing separate PDF notices for each record along with the postal address manifest:
            </p>
            
            <div style="text-align: center; margin: 20px 0 12px 0;">
              <a href="${downloadUrl}" style="display: inline-block; background-color: #D29E0D; color: #FFFFFF; font-size: 15px; font-weight: 900; text-decoration: none; padding: 15px 36px; border-radius: 12px; box-shadow: 0 4px 14px rgba(210, 158, 13, 0.35); text-transform: uppercase; letter-spacing: 0.5px; border: 1px solid #B58406;">
                📥 Download All ${cases.length} Notice PDFs (.ZIP)
              </a>
            </div>
            <p style="margin: 10px 0 0 0; text-align: center; font-size: 11.5px; color: #8C6806; font-weight: 700;">
              Zip archive includes individual PDF notices + 00_ENVELOPE_ADDRESS_MANIFEST.csv (Link valid for 14 days)
            </p>
          </div>

          ${notes ? `
          <div style="margin: 16px 32px; padding: 12px 16px; background-color: #FFFDF7; border-left: 4px solid #D29E0D; border-radius: 6px; font-size: 12px; color: #8C6806; font-weight: 600;">
            <strong>Special Note from Admin:</strong> ${notes}
          </div>
          ` : ""}

          <!-- Debtor Names & Contact Coordinates Table -->
          <div style="padding: 24px 32px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
              <h2 style="margin: 0; font-size: 15px; font-weight: 900; color: #2A2421; text-transform: uppercase; letter-spacing: 0.3px;">
                Dispatch Recipient Directory
              </h2>
              <span style="font-size: 12px; font-weight: 700; color: #8C6806;">
                Total: ${cases.length} Recipients
              </span>
            </div>

            <div style="border: 2px solid #D29E0D; border-radius: 12px; overflow: hidden;">
              <table style="width: 100%; border-collapse: collapse; text-align: left;">
                <thead>
                  <tr style="background-color: #D29E0D; border-bottom: 2px solid #B58406; font-size: 11px; font-weight: 900; color: #FFFFFF; text-transform: uppercase; letter-spacing: 0.5px;">
                    <th style="padding: 11px 12px; text-align: center; width: 35px;">#</th>
                    <th style="padding: 11px 12px; width: 150px;">Person Name</th>
                    <th style="padding: 11px 12px; width: 120px;">Phone Number</th>
                    <th style="padding: 11px 12px; width: 170px;">Email Address</th>
                    <th style="padding: 11px 12px;">Physical Address</th>
                  </tr>
                </thead>
                <tbody>
                  ${tableRowsHtml}
                </tbody>
              </table>
            </div>
          </div>

          <!-- Footer -->
          <div style="padding: 22px 32px; background-color: #FFFDF7; border-top: 2px solid #D29E0D; text-align: center; font-size: 12px; color: #8C6806; font-weight: 800;">
            AMA Legal Solutions • Dispatch Management Desk<br />
            <span style="color: #A67D0A; font-weight: 600; font-size: 11px;">Confidential &amp; Privileged Legal Communication</span>
          </div>
        </div>

        <!-- Hidden Machine-Readable Audit Metadata -->
        ${hiddenMetadataComment}
      </body>
      </html>
    `;

    // 6. Send email via Zoho Mail REST API or Nodemailer SMTP fallback
    const emailSubject = `Notice Dispatch Batch (${cases.length} Records)`;
    let emailSent = false;

    try {
      console.log(`[Send Batch] Dispatching email to ${dispatcherEmail} via Zoho Mail REST API...`);
      emailSent = await sendEmailViaZohoAPI(dispatcherEmail, emailSubject, emailHtml);
    } catch (apiErr) {
      console.warn("[Send Batch] Zoho REST API failed, falling back to SMTP:", apiErr);
    }

    if (!emailSent) {
      const noticeEmailUser = process.env.NOTICE_EMAIL || process.env.NOTIFY_EMAIL;
      const noticeEmailPassword = process.env.NOTICE_EMAIL_PASSWORD || process.env.NOTIFY_EMAIL_PASSWORD;

      if (noticeEmailUser && noticeEmailPassword) {
        const transporter = nodemailer.createTransport({
          host: "smtp.zoho.in",
          port: 465,
          secure: true,
          auth: {
            user: noticeEmailUser,
            pass: noticeEmailPassword,
          },
        });

        try {
          await transporter.sendMail({
            from: `"AMA Legal Solutions" <${noticeEmailUser}>`,
            to: dispatcherEmail,
            subject: emailSubject,
            html: emailHtml,
          });
          emailSent = true;
          console.log(`[Send Batch] Email delivered to ${dispatcherEmail} via SMTP fallback.`);
        } catch (smtpErr) {
          console.error("[Send Batch] SMTP send error:", smtpErr);
        }
      }
    }

    return NextResponse.json({
      success: true,
      batchId,
      token,
      downloadUrl,
      totalCases: cases.length,
      dispatcherEmail,
      emailSent,
      message: emailSent
        ? `Successfully created batch ${batchId} and sent dispatch package email to ${dispatcherEmail}.`
        : `Batch ${batchId} created, but email delivery encountered an issue. Dispatcher can use the direct download link.`,
    });
  } catch (error: any) {
    console.error("[Send Batch] Error creating dispatch batch:", error);
    return NextResponse.json(
      { error: error?.message || "Internal server error occurred while processing dispatch batch." },
      { status: 500 }
    );
  }
}
