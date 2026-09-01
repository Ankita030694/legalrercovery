import { NextRequest, NextResponse } from "next/server";
import { getDbAndBucket } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  try {
    const { pendingId, otp } = await req.json();

    if (!pendingId || !otp) {
      return NextResponse.json({ error: "Missing required verification details" }, { status: 400 });
    }

    let objectId: ObjectId;
    try {
      objectId = new ObjectId(pendingId);
    } catch {
      return NextResponse.json({ error: "Invalid session identifier" }, { status: 400 });
    }

    const { db } = await getDbAndBucket("fs");

    // Retrieve document from 'pending_verification'
    const record = await db.collection("pending_verification").findOne({ _id: objectId });
    if (!record) {
      return NextResponse.json({ error: "Verification session not found" }, { status: 404 });
    }

    // Check if signup OTP has expired
    if (record.otpExpires && new Date() > new Date(record.otpExpires)) {
      // Delete expired session immediately
      await db.collection("pending_verification").deleteOne({ _id: objectId });
      return NextResponse.json({ error: "OTP has expired. Please request a new OTP." }, { status: 400 });
    }

    // Verify OTP code match (with max 5 failed attempts limit to prevent brute force) using timing-safe comparison
    const inputOtpClean = otp.trim();
    const isOtpValid = record.otp && inputOtpClean.length === 6 && record.otp.length === 6 && crypto.timingSafeEqual(
      Buffer.from(record.otp),
      Buffer.from(inputOtpClean)
    );

    if (!isOtpValid) {
      const attempts = (record.failedAttempts || 0) + 1;
      
      if (attempts >= 5) {
        // Exceeded maximum attempts: delete session immediately
        await db.collection("pending_verification").deleteOne({ _id: objectId });
        return NextResponse.json({ error: "Too many failed verification attempts. Please request a new OTP." }, { status: 400 });
      }

      // Increment failed attempts count
      await db.collection("pending_verification").updateOne(
        { _id: objectId },
        { $set: { failedAttempts: attempts } }
      );

      return NextResponse.json({ 
        error: `Invalid OTP code. Please try again. (${5 - attempts} attempts remaining)` 
      }, { status: 400 });
    }

    // ─── OTP VERIFIED ───────────────────────────────────────────────────────
    // Check if this phone number belongs to an existing paid user
    const sanitizedPhone = record.phone.trim().replace(/\D/g, "");
    const existingUser = await db.collection("users").findOne({ phone: sanitizedPhone, isPaid: true });

    if (existingUser) {
      // ── EXISTING PAID USER DETECTED ──
      // Calculate their remaining case quota
      const PRICE_PER_OPPOSITION = 999;
      const amountPaid = existingUser.amountPaid || 0;
      const limitFromAmountPaid = Math.floor(amountPaid / PRICE_PER_OPPOSITION);
      const allowedLimit = Math.max(limitFromAmountPaid, existingUser.oppositionCount || 1);
      const hasUnlimitedCases = existingUser.hasUnlimitedCases === true;

      const currentCreatedCount = await db.collection("cases").countDocuments({ userId: existingUser._id });
      const hasRemainingQuota = hasUnlimitedCases || currentCreatedCount < allowedLimit;

      // Generate an auto-login token so the frontend can sign them in
      const autoLoginToken = crypto.randomBytes(32).toString("hex");
      await db.collection("users").updateOne(
        { _id: existingUser._id },
        {
          $set: {
            autoLoginToken,
            autoLoginTokenExpires: new Date(Date.now() + 15 * 60 * 1000), // 15 mins
            updatedAt: new Date()
          }
        }
      );

      // Clean up the pending_verification record
      await db.collection("pending_verification").deleteOne({ _id: objectId });

      if (hasRemainingQuota) {
        // User has unused case slots — no payment needed, just auto-login
        return NextResponse.json({
          success: true,
          isExistingUser: true,
          hasRemainingQuota: true,
          autoLoginToken,
          remainingSlots: hasUnlimitedCases ? "unlimited" : (allowedLimit - currentCreatedCount),
          userName: existingUser.name || "User"
        }, { status: 200 });
      } else {
        // User has used all slots — offer choice: dashboard or pay for more
        // Also create a pending_payment record in case they want to pay
        const pendingPaymentUser = {
          name: record.name,
          email: record.email,
          phone: record.phone,
          state: record.state,
          oppositionCount: record.oppositionCount || 1,
          isReturningUser: true,
          verified: true,
          verifiedAt: new Date(),
          createdAt: new Date(),
        };

        await db.collection("pending_payment").updateOne(
          { phone: record.phone },
          { $set: pendingPaymentUser },
          { upsert: true }
        );

        const paymentRecord = await db.collection("pending_payment").findOne({ phone: record.phone });
        const paymentPendingId = paymentRecord?._id.toString() || "";

        const response = NextResponse.json({
          success: true,
          isExistingUser: true,
          hasRemainingQuota: false,
          autoLoginToken,
          paymentPendingId,
          userName: existingUser.name || "User",
          usedSlots: currentCreatedCount,
          totalSlots: allowedLimit
        }, { status: 200 });

        // Set browser cookie for pending payment flow
        if (paymentPendingId) {
          response.cookies.set("pending_checkout_id", paymentPendingId, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 60 * 60, // 1 hour
          });
        }

        return response;
      }
    }

    // ── BRAND NEW USER — proceed with existing payment flow ──
    const pendingPaymentUser = {
      name: record.name,
      email: record.email,
      phone: record.phone,
      state: record.state,
      oppositionCount: record.oppositionCount || 1,
      verified: true,
      verifiedAt: new Date(),
      createdAt: new Date(),
    };

    // Upsert into the 'pending_payment' collection by phone number
    await db.collection("pending_payment").updateOne(
      { phone: record.phone },
      { $set: pendingPaymentUser },
      { upsert: true }
    );

    // Retrieve the newly created/updated record to get its _id
    const paymentRecord = await db.collection("pending_payment").findOne({ phone: record.phone });
    if (!paymentRecord) {
      return NextResponse.json({ error: "Failed to initialize payment record" }, { status: 500 });
    }

    const paymentPendingId = paymentRecord._id.toString();

    // Delete the record from 'pending_verification' collection
    await db.collection("pending_verification").deleteOne({ _id: objectId });

    const response = NextResponse.json({ success: true, paymentPendingId }, { status: 200 });

    // Set browser cookie pointing to the new pending_payment collection ID
    response.cookies.set("pending_checkout_id", paymentPendingId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60, // 1 hour
    });

    return response;

  } catch (error) {
    console.error("Verify OTP Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
