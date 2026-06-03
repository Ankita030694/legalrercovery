import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { getDbAndBucket } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { verifyPayUTxn } from "@/lib/payu";
import { processPaymentSuccessNotifications } from "@/lib/notifications";

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
    
    const { db } = await getDbAndBucket("fs");

    // Server-side database logging of the redirect hit
    try {
      await db.collection("payment_debug_logs").insertOne({
        step: "redirect_post_received",
        timestamp: new Date(),
        data: { status, txnid, amount, firstname, email, udf1, keyPresent: !!key }
      });
    } catch (logErr) {
      console.error("Failed to write redirect initial log to DB:", logErr);
    }
    
    // Instead of relying on the unreliable Reverse Hash from the Button Redirect, 
    // we make a 100% secure server-to-server API call to verify the transaction.
    let isVerified = false;
    
    if (txnid && key) {
       isVerified = await verifyPayUTxn(txnid, key);
    } else {
       console.error("Missing txnid or key in redirect payload");
    }

    try {
      await db.collection("payment_debug_logs").insertOne({
        step: "redirect_verification_status",
        timestamp: new Date(),
        data: { txnid, status, isVerified }
      });
    } catch (logErr) {
      console.error("Failed to write verification status log to DB:", logErr);
    }

    let targetPath = "/payment-failure";
    
    // Some payment gateways use specific status strings for cancellations
    if (status === "cancel" || status === "userCancelled") {
        targetPath = "/payment-cancelled";
    } else if (status === "success" && isVerified) {
        targetPath = "/payment-success";
        
        try {
          let pendingPaymentUser = null;
          
          // 1. Prioritize querying using the unique transaction ID (guarantees domain/cookie independence)
          if (txnid) {
            pendingPaymentUser = await db.collection("pending_payment").findOne({ txnid });
          }
          
          // 2. Fallback to udf1 / cookie ID
          if (!pendingPaymentUser) {
            const pendingUserId = udf1 || req.cookies.get("pending_checkout_id")?.value;
            if (pendingUserId && ObjectId.isValid(pendingUserId)) {
              pendingPaymentUser = await db.collection("pending_payment").findOne({ _id: new ObjectId(pendingUserId) });
            }
          }

          try {
            await db.collection("payment_debug_logs").insertOne({
              step: "redirect_pending_user_fetch",
              timestamp: new Date(),
              data: { found: !!pendingPaymentUser, userId: pendingPaymentUser?._id?.toString(), phone: pendingPaymentUser?.phone }
            });
          } catch (logErr) {}
          
          if (pendingPaymentUser) {
            const PRICE_PER_OPPOSITION = 999; // TO CHANGE TO PRODUCTION PRICE: Change 1 to 999
            const oppCount = pendingPaymentUser.oppositionCount || 1;
            const amtPaid = oppCount * PRICE_PER_OPPOSITION;

            // Upsert details into the main users collection
            await db.collection("users").updateOne(
              { phone: pendingPaymentUser.phone },
              {
                $set: {
                  name: pendingPaymentUser.name,
                  email: pendingPaymentUser.email,
                  phone: pendingPaymentUser.phone,
                  state: pendingPaymentUser.state,
                  oppositionCount: oppCount,
                  amountPaid: amtPaid,
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
            
            // Remove the record from pending_payment collection using its database _id
            await db.collection("pending_payment").deleteOne({ _id: pendingPaymentUser._id });
            console.log("Successfully verified payment, migrated user from 'pending_payment' to 'users', and cleaned up pending_payment. ID:", pendingPaymentUser._id.toString());

            // Retrieve the migrated user document to get their true database _id and record in the transactions collection
            const migratedUser = await db.collection("users").findOne({ phone: pendingPaymentUser.phone });
            if (migratedUser) {
              await db.collection("transactions").insertOne({
                userId: migratedUser._id,
                phone: migratedUser.phone,
                email: migratedUser.email,
                payuTxnId: txnid,
                amount: amtPaid,
                status: "success",
                oppositionCount: oppCount,
                paymentDate: new Date(),
                createdAt: new Date()
              });
            }

            try {
              await db.collection("payment_debug_logs").insertOne({
                step: "redirect_migration_success",
                timestamp: new Date(),
                data: { phone: pendingPaymentUser.phone, amtPaid, caseMigratedId: pendingPaymentUser._id.toString(), transactionLogged: !!migratedUser }
              });
            } catch (logErr) {}

            // Trigger payment success email and WATI WhatsApp notifications and await their completion to prevent serverless function termination
            try {
              await processPaymentSuccessNotifications(
                db,
                pendingPaymentUser.phone,
                pendingPaymentUser.email,
                pendingPaymentUser.name,
                amtPaid
              );
            } catch (notiErr) {
              console.error("Error triggering success notifications in redirect route:", notiErr);
            }
          } else {
            console.warn("No matching record in pending_payment for txnid:", txnid);
          }
        } catch (e) {
          console.error("Failed to migrate user on successful payment in redirect route:", e);
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
