import { NextRequest, NextResponse } from "next/server";
import { getDbAndBucket } from "@/lib/mongodb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { ObjectId } from "mongodb";
import crypto from "crypto";

/**
 * POST /api/payu/buy-credits
 * 
 * Authenticated route for logged-in users to purchase additional case credits.
 * Creates a pending_payment record marked as a returning user purchase,
 * then generates PayU form fields for redirect to the payment gateway.
 */
export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !(session.user as any).id) {
      return NextResponse.json({ error: "Unauthorized. Please log in first." }, { status: 401 });
    }

    const { oppositionCount } = await req.json();
    const oppCount = Math.min(Math.max(parseInt(oppositionCount) || 1, 1), 5); // Clamp 1-5

    const { db } = await getDbAndBucket("fs");

    // Fetch the authenticated user's profile
    const userId = new ObjectId((session.user as any).id);
    const user = await db.collection("users").findOne({ _id: userId });

    if (!user) {
      return NextResponse.json({ error: "User profile not found." }, { status: 404 });
    }

    // Create a pending_payment record for this purchase
    const pendingPaymentDoc = {
      name: user.name,
      email: user.email,
      phone: user.phone,
      state: user.state || "Unknown",
      oppositionCount: oppCount,
      isReturningUser: true,
      existingUserId: userId,
      verified: true,
      verifiedAt: new Date(),
      createdAt: new Date(),
    };

    const insertResult = await db.collection("pending_payment").insertOne(pendingPaymentDoc);
    const paymentPendingId = insertResult.insertedId.toString();

    // ── Generate PayU payment fields ──
    const key = process.env.PAYU_API_KEY?.trim();
    const salt = process.env.PAYU_SALT_32BIT?.trim();

    if (!key || !salt) {
      return NextResponse.json({ error: "Payment gateway configuration is missing on server." }, { status: 500 });
    }

    const txnid = `TXN${Date.now()}${Math.floor(1000 + Math.random() * 9000)}`;

    // Update pending record with the generated transaction ID
    await db.collection("pending_payment").updateOne(
      { _id: insertResult.insertedId },
      { $set: { txnid, updatedAt: new Date() } }
    );

    const PRICE_PER_OPPOSITION = 999; // TO CHANGE TO PRODUCTION PRICE: Change 1 to 999
    const totalAmount = oppCount * PRICE_PER_OPPOSITION;
    const amount = `${totalAmount}.00`;

    const productinfo = "Paid With ButtonId 111293057";
    const firstname = (user.name || "Client").trim().replace(/[^a-zA-Z0-9\s]/g, "") || "Client";
    const sanitizedEmail = (user.email || "client@legalrecovery.in").trim().toLowerCase();
    let sanitizedPhone = (user.phone || "").trim().replace(/\D/g, "");
    if (sanitizedPhone.startsWith("0") && sanitizedPhone.length === 11) {
      sanitizedPhone = sanitizedPhone.slice(1);
    }
    const udf1 = paymentPendingId;

    // Use .join("|") to compute the standard SHA-512 PayU request signature hash safely (exactly 17 elements)
    const hashString = [
      key,
      txnid,
      amount,
      productinfo,
      firstname,
      sanitizedEmail,
      udf1,
      "", // udf2
      "", // udf3
      "", // udf4
      "", // udf5
      "", // udf6
      "", // udf7
      "", // udf8
      "", // udf9
      "", // udf10
      salt
    ].join("|");

    const hash = crypto.createHash("sha512").update(hashString).digest("hex");

    // Dynamic SURL and FURL creation
    let origin = req.nextUrl.origin.replace("http://", "https://");
    if (origin.includes("localhost") || origin.includes("127.0.0.1")) {
      origin = "https://legalrecovery.in";
    }

    const surl = `${origin}/api/payu/redirect`;
    const furl = `${origin}/api/payu/redirect`;
    const actionUrl = "https://secure.payu.in/_payment";

    // Set the pending_checkout_id cookie for the redirect flow
    const response = NextResponse.json({
      success: true,
      action: actionUrl,
      fields: {
        key,
        txnid,
        amount,
        productinfo,
        firstname,
        email: sanitizedEmail,
        phone: sanitizedPhone,
        surl,
        furl,
        hash,
        udf1,
        udf2: "",
        udf3: "",
        udf4: "",
        udf5: "",
        service_provider: "payu_paisa"
      }
    }, { status: 200 });

    response.cookies.set("pending_checkout_id", paymentPendingId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60, // 1 hour
    });

    return response;

  } catch (error) {
    console.error("Buy Credits Error:", error);
    return NextResponse.json({ error: "Internal server error during credit purchase setup." }, { status: 500 });
  }
}
