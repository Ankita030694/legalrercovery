// Secure API route to request portal login OTP
import { NextRequest, NextResponse } from "next/server";
import { getDbAndBucket } from "@/lib/mongodb";
import { sendLoginOtpEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const { phone } = await req.json();

    if (!phone) {
      return NextResponse.json({ error: "Phone number is required." }, { status: 400 });
    }

    const sanitizedPhone = phone.trim().replace(/\D/g, "");
    if (sanitizedPhone.length !== 10) {
      return NextResponse.json({ error: "Please enter a valid 10-digit phone number." }, { status: 400 });
    }

    const { db } = await getDbAndBucket("fs");

    // Check if user exists in primary 'users' collection (only successfully paid users are migrated here)
    const user = await db.collection("users").findOne({ phone: sanitizedPhone });
    if (!user) {
      return NextResponse.json(
        { error: "No registered case was found with this phone number. Please sign up first." },
        { status: 404 }
      );
    }

    // Generate a secure 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes validation window

    // Save the OTP and expiry in the user's document
    await db.collection("users").updateOne(
      { _id: user._id },
      {
        $set: {
          loginOtp: otp,
          loginOtpExpires: expiry,
          updatedAt: new Date()
        }
      }
    );

    // Send the OTP via Zoho Mail
    const emailSent = await sendLoginOtpEmail(user.email, otp, user.name || "User");
    if (!emailSent) {
      return NextResponse.json(
        { error: "Failed to dispatch verification email. Please try again." },
        { status: 500 }
      );
    }

    // Mask the email address to preserve privacy in response (e.g. t***a@gmail.com)
    const [namePart, domainPart] = user.email.split("@");
    const maskedEmail = namePart.length > 2
      ? `${namePart[0]}${"*".repeat(namePart.length - 2)}${namePart[namePart.length - 1]}@${domainPart}`
      : `${namePart[0]}*@${domainPart}`;

    return NextResponse.json({ success: true, maskedEmail }, { status: 200 });

  } catch (error) {
    console.error("Send Login OTP Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
