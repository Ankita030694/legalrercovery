// Secure API route to request portal login OTP
import { NextRequest, NextResponse } from "next/server";
import { getDbAndBucket } from "@/lib/mongodb";
import { sendLoginOtpEmail } from "@/lib/email";
import { sendWatiOtp } from "@/lib/wati";
import crypto from "crypto";

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

    // Rate-limiting check: block requests if last login OTP was sent less than 60 seconds ago
    if (user.loginOtpCreatedAt) {
      const timeElapsed = Date.now() - new Date(user.loginOtpCreatedAt).getTime();
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
    const expiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes validation window

    // Save the OTP, expiry, and creation timestamp in the user's document
    await db.collection("users").updateOne(
      { _id: user._id },
      {
        $set: {
          loginOtp: otp,
          loginOtpExpires: expiry,
          loginOtpCreatedAt: new Date(),
          updatedAt: new Date()
        }
      }
    );

    // Send the OTP via Zoho Mail and WATI WhatsApp in parallel
    const [emailSent, watiSent] = await Promise.all([
      sendLoginOtpEmail(user.email, otp, user.name || "User"),
      sendWatiOtp(sanitizedPhone, otp)
    ]);

    if (!emailSent && !watiSent) {
      return NextResponse.json(
        { error: "Failed to dispatch verification OTP. Please try again." },
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
