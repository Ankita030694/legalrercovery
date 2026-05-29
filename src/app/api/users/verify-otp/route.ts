import { NextRequest, NextResponse } from "next/server";
import { getDbAndBucket } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

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

    // Verify OTP code match
    if (record.otp !== otp.trim()) {
      return NextResponse.json({ error: "Invalid OTP code. Please try again." }, { status: 400 });
    }

    // OTP is verified. Move data to 'pending_payment' collection
    const pendingPaymentUser = {
      name: record.name,
      email: record.email,
      phone: record.phone,
      state: record.state,
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
