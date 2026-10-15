import { NextRequest, NextResponse } from "next/server";
import { getDbAndBucket } from "@/lib/mongodb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { createPayUPaymentSession } from "@/lib/payu";
import {
  calculateFunnelPricing,
  getFunnelSettings,
  normalizePhoneTenDigits,
  resolveEffectiveDiscount,
} from "@/lib/funnel-config";
import crypto from "crypto";

export const dynamic = "force-dynamic";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ token: string }> }
) {
  try {
    const { token } = await context.params;
    const cleanToken = (token || "").trim();

    if (!cleanToken) {
      return NextResponse.json({ error: "Invalid resume link" }, { status: 400 });
    }

    const { db } = await getDbAndBucket("fs");
    const funnelSettings = await getFunnelSettings(db);
    const now = new Date();

    // Check current browser NextAuth session to detect cross-device / different-account login
    const session = await getServerSession(authOptions);
    const sessionUser = session?.user as any;

    // 1. Search across pending_payment, pending_verification, and users
    let paymentDoc = await db.collection("pending_payment").findOne({ resumeToken: cleanToken });
    const verificationDoc = !paymentDoc
      ? await db.collection("pending_verification").findOne({ resumeToken: cleanToken })
      : null;

    // 2. If found in pending_verification (OTP drop-off), auto-verify and migrate to pending_payment!
    if (!paymentDoc && verificationDoc) {
      const existingPaymentByPhone = await db
        .collection("pending_payment")
        .findOne({ phone: verificationDoc.phone });

      const mergedDiscountPercent = Math.max(
        Number(verificationDoc.discountPercent) || 0,
        Number(existingPaymentByPhone?.discountPercent) || 0
      );
      const discountUnlockedAt =
        verificationDoc.discountUnlockedAt || existingPaymentByPhone?.discountUnlockedAt || null;
      const discountExpiresAt =
        verificationDoc.discountExpiresAt || existingPaymentByPhone?.discountExpiresAt || null;
      const retargeting = verificationDoc.retargeting ||
        existingPaymentByPhone?.retargeting || { currentWave: 0, waves: {} };
      const clickCount =
        Math.max(Number(verificationDoc.clickCount) || 0, Number(existingPaymentByPhone?.clickCount) || 0) + 1;

      const migratedPayload = {
        name: verificationDoc.name,
        email: verificationDoc.email,
        phone: verificationDoc.phone,
        state: verificationDoc.state,
        oppositionCount: Number(verificationDoc.oppositionCount) || 1,
        verified: true,
        verifiedVia: "magic_link",
        verifiedAt: now,
        resumeToken: cleanToken,
        funnelStartedAt:
          verificationDoc.funnelStartedAt ||
          existingPaymentByPhone?.funnelStartedAt ||
          verificationDoc.createdAt ||
          now,
        discountPercent: mergedDiscountPercent,
        discountUnlockedAt,
        discountExpiresAt,
        retargeting,
        clickCount,
        linkClickedAt: now,
        createdAt: existingPaymentByPhone?.createdAt || verificationDoc.createdAt || now,
        updatedAt: now,
      };

      await db.collection("pending_payment").updateOne(
        { phone: verificationDoc.phone },
        { $set: migratedPayload },
        { upsert: true }
      );

      await db.collection("pending_verification").deleteMany({ phone: verificationDoc.phone });
      paymentDoc = await db.collection("pending_payment").findOne({ phone: verificationDoc.phone });
    } else if (paymentDoc) {
      // Increment click count and update linkClickedAt on pending_payment
      const nextClicks = (Number(paymentDoc.clickCount) || 0) + 1;
      await db.collection("pending_payment").updateOne(
        { _id: paymentDoc._id },
        {
          $set: {
            clickCount: nextClicks,
            linkClickedAt: now,
            updatedAt: now,
          },
        }
      );
      paymentDoc.clickCount = nextClicks;
      paymentDoc.linkClickedAt = now;
    }

    // 3. Check if the user has ALREADY paid (either paymentDoc is gone and token is in users.lastResumeToken,
    //    or phone is already in users and this isn't an explicit buy-more-slots record)
    const candidatePhone = paymentDoc?.phone
      ? normalizePhoneTenDigits(paymentDoc.phone)
      : null;

    const paidUser = await db.collection("users").findOne(
      candidatePhone
        ? {
            $or: [
              { lastResumeToken: cleanToken },
              { phone: paymentDoc?.phone, isPaid: true },
              { phone: candidatePhone, isPaid: true },
            ],
          }
        : { lastResumeToken: cleanToken, isPaid: true }
    );

    if (paidUser && (!paymentDoc || paymentDoc.isReturningUser !== true)) {
      // Clean up any leftover non-returning pending docs if user already paid
      if (paymentDoc && paymentDoc.isReturningUser !== true) {
        await db.collection("pending_payment").deleteOne({ _id: paymentDoc._id });
      }

      // Issue a fresh 15-minute auto-login token so Device B can sign in with 1 tap
      const autoLoginToken = crypto.randomBytes(32).toString("hex");
      const nextClicks = (Number(paidUser.clickCount) || 0) + 1;
      await db.collection("users").updateOne(
        { _id: paidUser._id },
        {
          $set: {
            autoLoginToken,
            autoLoginTokenExpires: new Date(Date.now() + 15 * 60 * 1000),
            clickCount: nextClicks,
            linkClickedAt: now,
            updatedAt: now,
          },
        }
      );

      const PRICE_PER_OPPOSITION = 999;
      const amountPaid = paidUser.amountPaid || 0;
      const limitFromAmountPaid = Math.floor(amountPaid / PRICE_PER_OPPOSITION);
      const totalSlots = Math.max(limitFromAmountPaid, paidUser.oppositionCount || 1);
      const usedSlots = await db.collection("cases").countDocuments({ userId: paidUser._id });
      const remainingSlots = paidUser.hasUnlimitedCases
        ? "unlimited"
        : Math.max(0, totalSlots - usedSlots);

      const { effectiveDiscountPercent, discountExpiresAt } = resolveEffectiveDiscount(
        paidUser,
        funnelSettings
      );
      const pricing = calculateFunnelPricing(
        1,
        effectiveDiscountPercent,
        funnelSettings.basePricePerOpposition
      );

      return NextResponse.json({
        success: true,
        status: "already_paid",
        autoLoginToken,
        user: {
          name: paidUser.name || "Client",
          email: paidUser.email || "",
          phone: paidUser.phone || "",
          state: paidUser.state || "",
          amountPaid: paidUser.amountPaid || 0,
          oppositionCount: paidUser.oppositionCount || 1,
          usedSlots,
          totalSlots,
          remainingSlots,
        },
        pricing,
        discountExpiresAt,
      });
    }

    if (!paymentDoc) {
      return NextResponse.json(
        { error: "This recovery setup link has expired or could not be found." },
        { status: 404 }
      );
    }

    // 4. Active pending_payment record — compute live pricing & discount countdown
    const {
      effectiveDiscountPercent,
      rawDiscountPercent,
      isExpired,
      graceApplied,
      discountExpiresAt,
    } = resolveEffectiveDiscount(paymentDoc, funnelSettings);

    const pricing = calculateFunnelPricing(
      paymentDoc.oppositionCount || 1,
      effectiveDiscountPercent,
      funnelSettings.basePricePerOpposition
    );

    // Check if another user is currently logged into this browser
    let sessionConflict: { loggedInName: string; loggedInEmail: string } | null = null;
    if (
      sessionUser &&
      sessionUser.role !== "admin" &&
      sessionUser.email &&
      paymentDoc.email &&
      sessionUser.email.toLowerCase() !== paymentDoc.email.toLowerCase()
    ) {
      sessionConflict = {
        loggedInName: sessionUser.name || "Another User",
        loggedInEmail: sessionUser.email,
      };
    }

    const response = NextResponse.json({
      success: true,
      status: "ready_for_payment",
      paymentPendingId: paymentDoc._id.toString(),
      lead: {
        name: paymentDoc.name || "",
        email: paymentDoc.email || "",
        phone: paymentDoc.phone || "",
        state: paymentDoc.state || "",
        oppositionCount: Number(paymentDoc.oppositionCount) || 1,
        verifiedVia: paymentDoc.verifiedVia || "otp",
      },
      pricing,
      discount: {
        effectiveDiscountPercent,
        rawDiscountPercent,
        isExpired,
        graceApplied,
        discountExpiresAt,
      },
      sessionConflict,
    });

    // Set pending_checkout_id cookie on this device so PayU redirect works seamlessly cross-device
    response.cookies.set("pending_checkout_id", paymentDoc._id.toString(), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60, // 1 hour
    });

    return response;
  } catch (error: any) {
    console.error("[Funnel Resume GET Error]:", error);
    return NextResponse.json(
      { error: "Failed to load your saved setup details." },
      { status: 500 }
    );
  }
}

export async function POST(
  req: NextRequest,
  context: { params: Promise<{ token: string }> }
) {
  try {
    const { token } = await context.params;
    const cleanToken = (token || "").trim();
    const body = await req.json();
    const { oppositionCount, name, state, action } = body;

    const { db } = await getDbAndBucket("fs");
    const funnelSettings = await getFunnelSettings(db);

    let origin = req.nextUrl.origin.replace("http://", "https://");
    if (origin.includes("localhost") || origin.includes("127.0.0.1")) {
      origin = "https://legalrecovery.in";
    }

    // Handle "Buy Additional Case Slots" from an already-paid user on Device B (Decision #8)
    if (action === "buy_more_slots") {
      const paidUser = await db.collection("users").findOne({ lastResumeToken: cleanToken, isPaid: true });
      if (!paidUser) {
        return NextResponse.json({ error: "Account not found" }, { status: 404 });
      }

      const oppCount = Math.max(1, Math.min(5, Number(oppositionCount) || 1));
      const { effectiveDiscountPercent } = resolveEffectiveDiscount(paidUser, funnelSettings);

      const now = new Date();
      await db.collection("pending_payment").updateOne(
        { phone: paidUser.phone },
        {
          $set: {
            name: paidUser.name,
            email: paidUser.email,
            phone: paidUser.phone,
            state: paidUser.state || "Delhi",
            oppositionCount: oppCount,
            isReturningUser: true,
            verified: true,
            verifiedVia: "magic_link",
            verifiedAt: now,
            resumeToken: cleanToken,
            discountPercent: effectiveDiscountPercent,
            updatedAt: now,
          },
          $setOnInsert: { createdAt: now },
        },
        { upsert: true }
      );

      const newPending = await db.collection("pending_payment").findOne({ phone: paidUser.phone });
      if (!newPending) {
        return NextResponse.json({ error: "Failed to initialize checkout" }, { status: 500 });
      }

      const session = createPayUPaymentSession({
        name: paidUser.name,
        email: paidUser.email,
        phone: paidUser.phone,
        paymentPendingId: newPending._id.toString(),
        oppositionCount: oppCount,
        discountPercent: effectiveDiscountPercent,
        basePricePerOpposition: funnelSettings.basePricePerOpposition,
        origin,
      });

      await db.collection("pending_payment").updateOne(
        { _id: newPending._id },
        {
          $set: {
            txnid: session.txnid,
            expectedAmount: session.totalAmount,
            originalAmount: session.originalAmount,
            discountPercent: session.discountPercent,
            updatedAt: now,
          },
        }
      );

      const response = NextResponse.json({
        success: true,
        action: session.action,
        fields: session.fields,
        pricing: calculateFunnelPricing(
          oppCount,
          effectiveDiscountPercent,
          funnelSettings.basePricePerOpposition
        ),
      });

      response.cookies.set("pending_checkout_id", newPending._id.toString(), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60,
      });

      return response;
    }

    // Standard Express Checkout Initiation for pending_payment lead
    const paymentDoc = await db.collection("pending_payment").findOne({ resumeToken: cleanToken });
    if (!paymentDoc) {
      // Check if they already paid on another device while viewing this page
      const paidUser = await db.collection("users").findOne({ lastResumeToken: cleanToken, isPaid: true });
      if (paidUser) {
        const autoLoginToken = crypto.randomBytes(32).toString("hex");
        await db.collection("users").updateOne(
          { _id: paidUser._id },
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
      return NextResponse.json({ error: "Checkout session not found" }, { status: 404 });
    }

    const updatedOppCount = Math.max(
      1,
      Math.min(5, Number(oppositionCount) || Number(paymentDoc.oppositionCount) || 1)
    );
    const updatedName = (name || paymentDoc.name || "Client").trim();
    const updatedState = (state || paymentDoc.state || "Delhi").trim();

    const { effectiveDiscountPercent } = resolveEffectiveDiscount(paymentDoc, funnelSettings);
    const pricing = calculateFunnelPricing(
      updatedOppCount,
      effectiveDiscountPercent,
      funnelSettings.basePricePerOpposition
    );

    const session = createPayUPaymentSession({
      name: updatedName,
      email: paymentDoc.email,
      phone: paymentDoc.phone,
      paymentPendingId: paymentDoc._id.toString(),
      oppositionCount: updatedOppCount,
      discountPercent: effectiveDiscountPercent,
      basePricePerOpposition: funnelSettings.basePricePerOpposition,
      origin,
    });

    await db.collection("pending_payment").updateOne(
      { _id: paymentDoc._id },
      {
        $set: {
          name: updatedName,
          state: updatedState,
          oppositionCount: updatedOppCount,
          txnid: session.txnid,
          expectedAmount: session.totalAmount,
          originalAmount: session.originalAmount,
          discountPercent: session.discountPercent,
          updatedAt: new Date(),
        },
      }
    );

    const response = NextResponse.json({
      success: true,
      action: session.action,
      fields: session.fields,
      pricing,
    });

    response.cookies.set("pending_checkout_id", paymentDoc._id.toString(), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60,
    });

    return response;
  } catch (error: any) {
    console.error("[Funnel Resume POST Error]:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to initiate checkout" },
      { status: 500 }
    );
  }
}
