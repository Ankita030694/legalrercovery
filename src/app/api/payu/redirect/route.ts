import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { getDbAndBucket } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { verifyPayUTxn } from "@/lib/payu";

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
    
    // Instead of relying on the unreliable Reverse Hash from the Button Redirect, 
    // we make a 100% secure server-to-server API call to verify the transaction.
    let isVerified = false;
    
    if (txnid && key) {
       isVerified = await verifyPayUTxn(txnid, key);
    } else {
       console.error("Missing txnid or key in redirect payload");
    }

    let targetPath = "/payment-failure";
    
    // Some payment gateways use specific status strings for cancellations
    if (status === "cancel" || status === "userCancelled") {
        targetPath = "/payment-cancelled";
    } else if (status === "success" && isVerified) {
        targetPath = "/payment-success";
        
        // Retrieve the pending payment checkout ID from PayU post body (udf1) or fallback to cookies
        const pendingUserId = udf1 || req.cookies.get("pending_checkout_id")?.value;
        if (pendingUserId) {
          try {
            const { db } = await getDbAndBucket("fs");
            const objectId = new ObjectId(pendingUserId);
            
            // Retrieve the verified record from pending_payment
            const pendingPaymentUser = await db.collection("pending_payment").findOne({ _id: objectId });
            
            if (pendingPaymentUser) {
              // Upsert details into the main users collection
              await db.collection("users").updateOne(
                { phone: pendingPaymentUser.phone },
                {
                  $set: {
                    name: pendingPaymentUser.name,
                    email: pendingPaymentUser.email,
                    phone: pendingPaymentUser.phone,
                    state: pendingPaymentUser.state,
                    isPaid: true,
                    payuTxnId: txnid,
                    paymentDate: new Date(),
                    updatedAt: new Date()
                  },
                  $setOnInsert: {
                    createdAt: new Date()
                  }
                },
                { upsert: true }
              );
              
              // Remove the record from pending_payment collection
              await db.collection("pending_payment").deleteOne({ _id: objectId });
              console.log("Successfully verified payment, migrated user from 'pending_payment' to 'users', and cleaned up pending_payment. ID:", pendingUserId);
            } else {
              console.warn("No matching record in pending_payment for ID:", pendingUserId);
            }
          } catch (e) {
            console.error("Failed to migrate user on successful payment in redirect route:", e);
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
