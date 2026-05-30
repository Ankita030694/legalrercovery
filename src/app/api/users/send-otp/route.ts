import { NextRequest, NextResponse } from "next/server";
import { getDbAndBucket } from "@/lib/mongodb";
import { sendOtpEmail } from "@/lib/email";
import { sendWatiOtp } from "@/lib/wati";

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

    // Validate phone number format (10 digits)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json({ error: "Phone number must be exactly 10 digits" }, { status: 400 });
    }

    // Generate a secure 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    const { db } = await getDbAndBucket("fs");

    // Save details and OTP in the 'pending_verification' collection
    const pendingUser = {
      name,
      email,
      phone,
      state,
      otp,
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
