import { NextRequest, NextResponse } from "next/server";
import { getDbAndBucket } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import crypto from "crypto";
import { createPayUPaymentSession } from "@/lib/payu";
import {
  generateResumeToken,
  getFunnelSettings,
  resolveEffectiveDiscount,
} from "@/lib/funnel-config";

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
      // ── IDEMPOTENT RETRY SUPPORT ──
      // After a successful verification the pending_verification record is deleted and the lead
      // lives only in 'pending_payment' (which implies the OTP was verified). On a double-click or
      // retry, answer from that record instead of failing with 404.
      const movedRecord = await db.collection("pending_payment").findOne({ verificationId: objectId });
      if (movedRecord) {
        const paymentPendingId = movedRecord._id.toString();
        const retryResponse = NextResponse.json({
          success: true,
          paymentPendingId,
          paymentSession: movedRecord.paymentSession || null,
          ...(movedRecord.verifyResult || {}),
          alreadyVerified: true,
        }, { status: 200 });

        retryResponse.cookies.set("pending_checkout_id", paymentPendingId, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "lax",
          path: "/",
          maxAge: 60 * 60, // 1 hour
        });

        return retryResponse;
      }
      return NextResponse.json({ error: "Verification session not found" }, { status: 404 });
    }

    // ── IDEMPOTENT RETRY SUPPORT ──
    // If session was already verified (prevents "Verification session not found" on double-clicks or retries)
    if (record.verified && record.paymentPendingId) {
      const response = NextResponse.json({
        success: true,
        paymentPendingId: record.paymentPendingId,
        paymentSession: record.paymentSession || null,
        alreadyVerified: true,
      }, { status: 200 });

      response.cookies.set("pending_checkout_id", record.paymentPendingId, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60, // 1 hour
      });

      return response;
    }

    // Check if signup OTP has expired (preserve record in pending_verification so retargeting funnel can recover them)
    if (record.otpExpires && new Date() > new Date(record.otpExpires)) {
      await db.collection("pending_verification").updateOne(
        { _id: objectId },
        { $set: { otpExpired: true, updatedAt: new Date() } }
      );
      return NextResponse.json({ error: "OTP has expired. Please request a new OTP." }, { status: 400 });
    }

    if (record.otpLocked) {
      return NextResponse.json({ error: "Too many failed verification attempts. Please request a new OTP." }, { status: 400 });
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
        // Mark locked instead of deleting so retargeting funnel can still recover this lead via magic link
        await db.collection("pending_verification").updateOne(
          { _id: objectId },
          { $set: { failedAttempts: attempts, otpLocked: true, updatedAt: new Date() } }
        );
        return NextResponse.json({ error: "Too many failed verification attempts. Please request a new OTP." }, { status: 400 });
      }

      // Increment failed attempts count
      await db.collection("pending_verification").updateOne(
        { _id: objectId },
        { $set: { failedAttempts: attempts, updatedAt: new Date() } }
      );

      return NextResponse.json({ 
        error: `Invalid OTP code. Please try again. (${5 - attempts} attempts remaining)` 
      }, { status: 400 });
    }

    // ─── OTP VERIFIED ───────────────────────────────────────────────────────
    // Check if this phone number belongs to an existing paid user
    const sanitizedPhone = record.phone.trim().replace(/\D/g, "");
    const existingUser = await db.collection("users").findOne({ phone: sanitizedPhone, isPaid: true });

    let baseOrigin = req.nextUrl.origin.replace("http://", "https://");
    if (baseOrigin.includes("localhost") || baseOrigin.includes("127.0.0.1")) {
      baseOrigin = "https://legalrecovery.in";
    }

    const funnelSettings = await getFunnelSettings(db);
    const existingPaymentDoc = await db.collection("pending_payment").findOne({ phone: record.phone });

    // Merge funnel state from pending_verification and any prior pending_payment record
    const resumeToken = record.resumeToken || existingPaymentDoc?.resumeToken || generateResumeToken();
    const funnelStartedAt =
      record.funnelStartedAt ||
      existingPaymentDoc?.funnelStartedAt ||
      record.createdAt ||
      new Date();
    const mergedDiscountPercent = Math.max(
      Number(record.discountPercent) || 0,
      Number(existingPaymentDoc?.discountPercent) || 0
    );
    const discountUnlockedAt = record.discountUnlockedAt || existingPaymentDoc?.discountUnlockedAt || null;
    const discountExpiresAt = record.discountExpiresAt || existingPaymentDoc?.discountExpiresAt || null;
    const retargeting = record.retargeting || existingPaymentDoc?.retargeting || {
      currentWave: 0,
      waves: {},
    };
    const clickCount = Math.max(
      Number(record.clickCount) || 0,
      Number(existingPaymentDoc?.clickCount) || 0
    );
    const linkClickedAt = record.linkClickedAt || existingPaymentDoc?.linkClickedAt || null;

    const { effectiveDiscountPercent } = resolveEffectiveDiscount(
      { discountPercent: mergedDiscountPercent, discountExpiresAt },
      funnelSettings
    );

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

      if (hasRemainingQuota) {
        // User has unused case slots — clean up pending_verification and auto-login
        await db.collection("pending_verification").deleteMany({ phone: record.phone });
        // A user in 'users' has already paid, so any stale signup lead in 'pending_payment' is removed.
        // In-flight 'buy more credits' records (isReturningUser) are kept so their payment can still be credited.
        await db.collection("pending_payment").deleteMany({ phone: record.phone, isReturningUser: { $ne: true } });

        return NextResponse.json({
          success: true,
          isExistingUser: true,
          hasRemainingQuota: true,
          autoLoginToken,
          remainingSlots: hasUnlimitedCases ? "unlimited" : (allowedLimit - currentCreatedCount),
          userName: existingUser.name || "User"
        }, { status: 200 });
      } else {
        // User has used all slots via public homepage form — offer choice: dashboard or pay for more
        // Note: reSubmittedFromPublicForm: true allows retargeting if they abandon here (per Decision #9)
        const pendingPaymentUser = {
          name: record.name,
          email: record.email,
          phone: record.phone,
          state: record.state,
          oppositionCount: record.oppositionCount || 1,
          isReturningUser: true,
          reSubmittedFromPublicForm: true,
          verified: true,
          verifiedVia: "otp",
          verifiedAt: new Date(),
          resumeToken,
          funnelStartedAt,
          discountPercent: mergedDiscountPercent,
          discountUnlockedAt,
          discountExpiresAt,
          retargeting,
          clickCount,
          linkClickedAt,
          createdAt: existingPaymentDoc?.createdAt || record.createdAt || new Date(),
          updatedAt: new Date(),
        };

        await db.collection("pending_payment").updateOne(
          { phone: record.phone },
          { $set: pendingPaymentUser },
          { upsert: true }
        );

        const paymentRecord = await db.collection("pending_payment").findOne({ phone: record.phone });
        const paymentPendingId = paymentRecord?._id.toString() || "";

        // Pre-generate PayU payment session directly on server
        let paymentSession = null;
        if (paymentPendingId && paymentRecord) {
          try {
            paymentSession = createPayUPaymentSession({
              name: record.name,
              email: record.email,
              phone: record.phone,
              paymentPendingId,
              oppositionCount: record.oppositionCount || 1,
              discountPercent: effectiveDiscountPercent,
              basePricePerOpposition: funnelSettings.basePricePerOpposition,
              origin: baseOrigin,
            });

            await db.collection("pending_payment").updateOne(
              { _id: paymentRecord._id },
              {
                $set: {
                  txnid: paymentSession.txnid,
                  expectedAmount: paymentSession.totalAmount,
                  originalAmount: paymentSession.originalAmount,
                  updatedAt: new Date(),
                },
              }
            );
          } catch (sessionErr) {
            console.error("Failed to generate PayU session for returning user:", sessionErr);
          }
        }

        const responseBody = {
          success: true,
          isExistingUser: true,
          hasRemainingQuota: false,
          autoLoginToken,
          paymentPendingId,
          paymentSession,
          userName: existingUser.name || "User",
          usedSlots: currentCreatedCount,
          totalSlots: allowedLimit
        };

        // Move the lead: keep the retry info on pending_payment and delete the OTP record
        if (paymentRecord) {
          await db.collection("pending_payment").updateOne(
            { _id: paymentRecord._id },
            { $set: { verificationId: objectId, paymentSession, verifyResult: responseBody, updatedAt: new Date() } }
          );
        }
        await db.collection("pending_verification").deleteMany({ phone: record.phone });

        const response = NextResponse.json(responseBody, { status: 200 });

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
      verifiedVia: "otp",
      verifiedAt: new Date(),
      resumeToken,
      funnelStartedAt,
      discountPercent: mergedDiscountPercent,
      discountUnlockedAt,
      discountExpiresAt,
      retargeting,
      clickCount,
      linkClickedAt,
      createdAt: existingPaymentDoc?.createdAt || record.createdAt || new Date(),
      updatedAt: new Date(),
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

    // Directly generate PayU payment session on server (eliminates 2nd roundtrip from client)
    let paymentSession = null;
    try {
      paymentSession = createPayUPaymentSession({
        name: record.name,
        email: record.email,
        phone: record.phone,
        paymentPendingId,
        oppositionCount: record.oppositionCount || 1,
        discountPercent: effectiveDiscountPercent,
        basePricePerOpposition: funnelSettings.basePricePerOpposition,
        origin: baseOrigin,
      });

      // Update pending record with the generated transaction ID and expected discounted amount
      await db.collection("pending_payment").updateOne(
        { _id: paymentRecord._id },
        {
          $set: {
            txnid: paymentSession.txnid,
            expectedAmount: paymentSession.totalAmount,
            originalAmount: paymentSession.originalAmount,
            updatedAt: new Date(),
          },
        }
      );
    } catch (sessionErr) {
      console.error("Failed to generate PayU session in verify-otp:", sessionErr);
    }

    // Move the lead: keep the retry info on pending_payment and delete the OTP record.
    // From now on, presence in 'pending_payment' means the OTP is already verified.
    await db.collection("pending_payment").updateOne(
      { _id: paymentRecord._id },
      { $set: { verificationId: objectId, paymentSession, updatedAt: new Date() } }
    );
    await db.collection("pending_verification").deleteMany({ phone: record.phone });

    const response = NextResponse.json({ 
      success: true, 
      paymentPendingId,
      paymentSession,
    }, { status: 200 });

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
