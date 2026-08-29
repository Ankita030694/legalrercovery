import { NextRequest, NextResponse } from "next/server";
import { getDbAndBucket } from "@/lib/mongodb";
import { sendOtpEmail } from "@/lib/email";
import { sendWatiOtp } from "@/lib/wati";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, state, oppositionCount } = await req.json();

    if (!name || !email || !phone || !state) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    // Validate phone number format (11 digits if starting with 0, otherwise 10 digits)
    const phoneRegex = /^(0\d{10}|[1-9]\d{9})$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json({ error: "Phone number must be 10 digits (or 11 digits if starting with 0)" }, { status: 400 });
    }

    const { db } = await getDbAndBucket("fs");

    // Rate-limiting check: block requests if last OTP was sent less than 60 seconds ago
    const existingRecord = await db.collection("pending_verification").findOne({ phone });
    if (existingRecord && existingRecord.createdAt) {
      const timeElapsed = Date.now() - new Date(existingRecord.createdAt).getTime();
      const COOLDOWN_MS = 60 * 1000; // 60 seconds cooldown
      
      if (timeElapsed < COOLDOWN_MS) {
        const secondsRemaining = Math.ceil((COOLDOWN_MS - timeElapsed) / 1000);
        return NextResponse.json(
          { error: `Please wait ${secondsRemaining} seconds before requesting another verification code.` },
          { status: 429 }
        );
      }
    }

    // Generate a secure 6-digit OTP
    const otp = crypto.randomInt(100000, 1000000).toString();

    // Save details and OTP in the 'pending_verification' collection (with 10-minute expiry)
    const pendingUser = {
      name,
      email,
      phone,
      state,
      otp,
      otpExpires: new Date(Date.now() + 10 * 60 * 1000), // 10 minutes validation window
      oppositionCount: oppositionCount ? Number(oppositionCount) : 1,
      verified: false,
      createdAt: new Date(),
    };

    // Upsert by phone number so that if they submit multiple times or request a resend, we update the existing record
    await db.collection("pending_verification").updateOne(
      { phone },
      { $set: pendingUser },
      { upsert: true }
    );

    // Retrieve the document to get the pendingId (_id)
    const record = await db.collection("pending_verification").findOne({ phone });
    if (!record) {
      return NextResponse.json({ error: "Failed to initialize verification" }, { status: 500 });
    }

    const pendingId = record._id.toString();

    // Send the OTP via Zoho Mail and WATI WhatsApp in parallel
    const [emailSent, watiSent] = await Promise.all([
      sendOtpEmail(email, otp, name, oppositionCount ? Number(oppositionCount) : 1),
      sendWatiOtp(phone, otp)
    ]);

    if (!emailSent && !watiSent) {
      return NextResponse.json(
        { error: "Failed to send verification OTP. Please check your credentials and try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ pendingId, message: "OTP sent successfully" }, { status: 200 });

  } catch (error) {
    console.error("Send OTP Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
