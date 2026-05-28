import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { getDbAndBucket } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get("content-type") || "";
    const body: Record<string, string> = {};

    if (contentType.includes("application/x-www-form-urlencoded")) {
      const text = await req.text();
      const params = new URLSearchParams(text);
      for (const [key, value] of params.entries()) {
        body[key] = value;
      }
    } else {
      // Fallback
      const text = await req.text();
      try {
        Object.assign(body, JSON.parse(text));
      } catch {
        const params = new URLSearchParams(text);
        for (const [key, value] of params.entries()) {
          body[key] = value;
        }
      }
    }

    const { status, txnid, amount, productinfo, firstname, email, udf1, udf2, udf3, udf4, udf5, hash, key } = body;
    const salt = process.env.PAYU_SALT_32BIT || process.env.PAYU_SALT_256BIT;

    let isVerified = false;

    if (salt && hash) {
      // Standard PayU Reverse Hash formula
      const hashString = `${salt}|${status || ""}||||||${udf5 || ""}|${udf4 || ""}|${udf3 || ""}|${udf2 || ""}|${udf1 || ""}|${email || ""}|${firstname || ""}|${productinfo || ""}|${amount || ""}|${txnid || ""}|${key || ""}`;
      const generatedHash = crypto.createHash('sha512').update(hashString).digest('hex');
      
      if (generatedHash === hash) {
        isVerified = true;
      } else {
        console.warn("PayU Redirect Hash Mismatch! Possible tampering.");
      }
    } else {
      console.error("Missing Salt or Hash for redirect verification.");
    }

    let targetPath = "/payment-failure";
    
    // Some payment gateways use specific status strings for cancellations
    if (status === "cancel" || status === "userCancelled") {
        targetPath = "/payment-cancelled";
    } else if (status === "success" && isVerified) {
        targetPath = "/payment-success";
        
        // MAGIC TRICK REVEALED:
        // We set this cookie right before they left for PayU. Now that they are back 
        // via their browser's redirect, we can read it and know exactly who they are!
        const pendingUserId = req.cookies.get("pending_checkout_id")?.value;
        if (pendingUserId) {
          try {
            const { db } = await getDbAndBucket("fs");
            await db.collection("users").updateOne(
              { _id: new ObjectId(pendingUserId) },
              { $set: { isPaid: true, payuTxnId: txnid, paymentDate: new Date() } }
            );
            console.log("Successfully marked user as paid via Browser Redirect Cookie! ID:", pendingUserId);
          } catch (e) {
            console.error("Failed to update DB in redirect route:", e);
          }
        }
    }

    // Create the redirect URL based on the incoming request origin
    const url = req.nextUrl.clone();
    url.pathname = targetPath;
    
    // Clear any search params to keep the URL clean
    url.search = "";

    const response = NextResponse.redirect(url, 302);

    // Set a secure, HttpOnly, short-lived cookie (valid for 5 minutes)
    // This proves the user came from a verified PayU redirect
    const cookieData = JSON.stringify({ 
      status: status, 
      txnid: txnid, 
      verified: isVerified,
      time: Date.now() 
    });
    
    // Base64 encode the data to prevent weird characters in the cookie
    const encodedData = Buffer.from(cookieData).toString('base64');

    response.cookies.set("payu_auth_token", encodedData, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 5 * 60, // 5 minutes
    });

    return response;

  } catch (error) {
    console.error("Redirect processing error:", error);
    // If it completely fails, redirect to failure
    const url = req.nextUrl.clone();
    url.pathname = "/payment-failure";
    return NextResponse.redirect(url, 302);
  }
}

// Ensure Next.js doesn't complain about GET requests missing, though it shouldn't be hit
export async function GET(req: NextRequest) {
  const url = req.nextUrl.clone();
  url.pathname = "/";
  return NextResponse.redirect(url, 302);
}
