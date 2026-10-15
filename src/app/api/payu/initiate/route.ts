import { NextRequest, NextResponse } from "next/server";
import { getDbAndBucket } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import crypto from "crypto";
import { createPayUPaymentSession } from "@/lib/payu";
import {
  getFunnelSettings,
  normalizePhoneTenDigits,
  resolveEffectiveDiscount,
} from "@/lib/funnel-config";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, state, paymentPendingId, oppositionCount } = await req.json();

    if (!name || !email || !phone || !state || !paymentPendingId) {
      return NextResponse.json({ error: "All registration fields are required" }, { status: 400 });
    }

    const { db } = await getDbAndBucket("fs");

    let objectId: ObjectId;
    try {
      objectId = new ObjectId(paymentPendingId);
    } catch {
      return NextResponse.json({ error: "Invalid registration session ID" }, { status: 400 });
    }

    // Retrieve the secure pending_payment record from the database to calculate amount securely on the server-side
    const pendingPaymentRecord = await db.collection("pending_payment").findOne({ _id: objectId });
    if (!pendingPaymentRecord) {
      // Check if user already completed payment on another device
      const cleanPhone = normalizePhoneTenDigits(phone);
      const existingPaidUser = await db.collection("users").findOne({
        $or: [{ phone }, { phone: cleanPhone }],
        isPaid: true,
      });
      if (existingPaidUser) {
        const autoLoginToken = crypto.randomBytes(32).toString("hex");
        await db.collection("users").updateOne(
          { _id: existingPaidUser._id },
          {
            $set: {
              autoLoginToken,
              autoLoginTokenExpires: new Date(Date.now() + 15 * 60 * 1000),
              updatedAt: new Date(),
            },
          }
        );
        return NextResponse.json(
          {
            alreadyPaid: true,
            autoLoginToken,
            error: "Payment has already been completed for this account.",
          },
          { status: 409 }
        );
      }

      console.error("[PayU Initiate Debug] Pending payment record not found for ID:", paymentPendingId);
      return NextResponse.json({ error: "Matching registration session not found" }, { status: 404 });
    }

    const resolvedOppositionCount = Number(oppositionCount) || pendingPaymentRecord.oppositionCount || 1;
    const funnelSettings = await getFunnelSettings(db);
    const { effectiveDiscountPercent } = resolveEffectiveDiscount(pendingPaymentRecord, funnelSettings);

    let origin = req.nextUrl.origin.replace("http://", "https://");
    if (origin.includes("localhost") || origin.includes("127.0.0.1")) {
      origin = "https://legalrecovery.in";
    }

    const session = createPayUPaymentSession({
      name,
      email,
      phone,
      paymentPendingId,
      oppositionCount: resolvedOppositionCount,
      discountPercent: effectiveDiscountPercent,
      basePricePerOpposition: funnelSettings.basePricePerOpposition,
      origin,
    });

    // Update pending record with the generated transaction ID and expected discounted amount
    await db.collection("pending_payment").updateOne(
      { _id: objectId },
      {
        $set: {
          name,
          email,
          state,
          oppositionCount: resolvedOppositionCount,
          txnid: session.txnid,
          expectedAmount: session.totalAmount,
          originalAmount: session.originalAmount,
          discountPercent: session.discountPercent,
          updatedAt: new Date(),
        },
      }
    );

    console.log(
      `[PayU Initiate Debug] Calculated amount for oppositionCount ${resolvedOppositionCount} (discount ${session.discountPercent}%): ₹${session.amount}`
    );

    return NextResponse.json({
      success: true,
      action: session.action,
      fields: session.fields,
      amount: session.totalAmount,
      originalAmount: session.originalAmount,
      discountPercent: session.discountPercent,
    }, { status: 200 });

  } catch (error: any) {
    console.error("PayU Initiation Error:", error);
    return NextResponse.json({ error: error?.message || "Internal server error during payment setup" }, { status: 500 });
  }
}
