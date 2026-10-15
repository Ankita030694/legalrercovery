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
    let tokenParam = "";

    // Look up pendingPaymentUser first (useful for both success migration and failure/cancel resume link)
    let pendingPaymentUser: any = null;
    try {
      if (txnid) {
        pendingPaymentUser = await db.collection("pending_payment").findOne({ txnid });
      }
      if (!pendingPaymentUser) {
        const pendingUserId = udf1 || req.cookies.get("pending_checkout_id")?.value;
        if (pendingUserId && ObjectId.isValid(pendingUserId)) {
          pendingPaymentUser = await db.collection("pending_payment").findOne({ _id: new ObjectId(pendingUserId) });
        }
      }
    } catch (lookupErr) {
      console.error("Failed to lookup pendingPaymentUser in redirect:", lookupErr);
    }

    const resumeTokenForCookie = pendingPaymentUser?.resumeToken || null;
    
    // Some payment gateways use specific status strings for cancellations
    if (status === "cancel" || status === "userCancelled") {
        targetPath = "/payment-cancelled";
    } else if (status === "success" && isVerified) {
        targetPath = "/payment-success";
        
        try {
          try {
            await db.collection("payment_debug_logs").insertOne({
              step: "redirect_pending_user_fetch",
              timestamp: new Date(),
              data: { found: !!pendingPaymentUser, userId: pendingPaymentUser?._id?.toString(), phone: pendingPaymentUser?.phone }
            });
          } catch (logErr) {}
          
          if (pendingPaymentUser) {
            const PRICE_PER_OPPOSITION = 999;
            const oppCount = pendingPaymentUser.oppositionCount || 1;
            const parsedGatewayAmount = amount ? Math.round(Number(amount)) : 0;
            const amtPaid =
              pendingPaymentUser.expectedAmount ||
              (parsedGatewayAmount > 0 ? parsedGatewayAmount : oppCount * PRICE_PER_OPPOSITION);
            const originalAmount = pendingPaymentUser.originalAmount || oppCount * PRICE_PER_OPPOSITION;
            const discountPercent = Number(pendingPaymentUser.discountPercent) || 0;
            const currentWave = Number(pendingPaymentUser.retargeting?.currentWave) || 0;
            const clickCount = Number(pendingPaymentUser.clickCount) || 0;
            const recoveredViaFunnel = currentWave > 0 || clickCount > 0 || discountPercent > 0;

            const autoLoginToken = crypto.randomBytes(32).toString('hex');
            tokenParam = `?token=${autoLoginToken}`;

            // Check if user already exists in the users collection (returning paid user or webhook already ran)
            const existingUser = await db.collection("users").findOne({ phone: pendingPaymentUser.phone });
            const existingTxnForThisId = txnid
              ? await db.collection("transactions").findOne({ payuTxnId: txnid })
              : null;
            const alreadyProcessedThisTxn =
              Boolean(existingTxnForThisId) ||
              Boolean(txnid && existingUser && existingUser.payuTxnId === txnid);

            if (existingUser) {
              if (alreadyProcessedThisTxn) {
                // Webhook already processed this exact txnid — only attach the browser autoLoginToken
                await db.collection("users").updateOne(
                  { phone: pendingPaymentUser.phone },
                  {
                    $set: {
                      autoLoginToken,
                      autoLoginTokenExpires: new Date(Date.now() + 15 * 60 * 1000),
                      ...(pendingPaymentUser.resumeToken ? { lastResumeToken: pendingPaymentUser.resumeToken } : {}),
                    },
                  }
                );
              } else {
                // RETURNING USER: Safely accumulate amountPaid and oppositionCount (supporting legacy users without explicit oppositionCount)
                const priorAmountPaid = Number(existingUser.amountPaid) || 0;
                const priorSlots = Math.max(
                  Math.floor(priorAmountPaid / PRICE_PER_OPPOSITION),
                  Number(existingUser.oppositionCount) || 1
                );
                await db.collection("users").updateOne(
                  { phone: pendingPaymentUser.phone },
                  {
                    $set: {
                      amountPaid: priorAmountPaid + amtPaid,
                      oppositionCount: priorSlots + oppCount,
                      isPaid: true,
                      payuTxnId: txnid,
                      lastPaymentDate: new Date(),
                      updatedAt: new Date(),
                      autoLoginToken,
                      autoLoginTokenExpires: new Date(Date.now() + 15 * 60 * 1000),
                      ...(pendingPaymentUser.resumeToken ? { lastResumeToken: pendingPaymentUser.resumeToken } : {}),
                    },
                  }
                );
                console.log(`Returning user payment accumulated. Phone: ${pendingPaymentUser.phone}, Added: ₹${amtPaid}`);
              }
            } else {
              // NEW USER: Standard upsert with initial values and full funnel attribution
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
                    originalAmount,
                    discountPercent,
                    recoveredViaFunnel,
                    recoveredAtWave: currentWave,
                    retargeting: pendingPaymentUser.retargeting || null,
                    clickCount,
                    linkClickedAt: pendingPaymentUser.linkClickedAt || null,
                    verifiedVia: pendingPaymentUser.verifiedVia || "otp",
                    funnelStartedAt: pendingPaymentUser.funnelStartedAt || pendingPaymentUser.createdAt || new Date(),
                    lastResumeToken: pendingPaymentUser.resumeToken || null,
                    isPaid: true,
                    payuTxnId: txnid,
                    paymentDate: new Date(),
                    updatedAt: new Date(),
                    autoLoginToken,
                    autoLoginTokenExpires: new Date(Date.now() + 15 * 60 * 1000)
                  },
                  $setOnInsert: {
                    createdAt: pendingPaymentUser.createdAt ? new Date(pendingPaymentUser.createdAt) : new Date()
                  }
                },
                { upsert: true }
              );
            }
            
            // Remove the record from pending_payment collection using its database _id
            await db.collection("pending_payment").deleteOne({ _id: pendingPaymentUser._id });
            // The phone is now in 'users': drop any duplicate signup leads (keep in-flight buy-more records)
            await db.collection("pending_payment").deleteMany({ phone: pendingPaymentUser.phone, isReturningUser: { $ne: true } });
            // Clean up verified pending_verification records for this phone number
            await db.collection("pending_verification").deleteMany({ phone: pendingPaymentUser.phone });
            console.log("Successfully verified payment, migrated user from 'pending_payment' to 'users', and cleaned up pending collections. ID:", pendingPaymentUser._id.toString());

            // Retrieve the migrated user document to get their true database _id and record in the transactions collection (deduplicated)
            const migratedUser = await db.collection("users").findOne({ phone: pendingPaymentUser.phone });
            if (migratedUser && !existingTxnForThisId) {
              await db.collection("transactions").insertOne({
                userId: migratedUser._id,
                phone: migratedUser.phone,
                email: migratedUser.email,
                payuTxnId: txnid,
                amount: amtPaid,
                originalAmount,
                discountPercent,
                recoveredViaFunnel,
                recoveredAtWave: currentWave,
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
                data: { phone: pendingPaymentUser.phone, amtPaid, discountPercent, recoveredViaFunnel, isReturningUser: !!existingUser, caseMigratedId: pendingPaymentUser._id.toString(), transactionLogged: !!migratedUser }
              });
            } catch (logErr) {}

            // Trigger payment success email and WATI WhatsApp notifications
            try {
              await processPaymentSuccessNotifications(
                db,
                pendingPaymentUser.phone,
                pendingPaymentUser.email,
                pendingPaymentUser.name,
                amtPaid,
                txnid
              );
            } catch (notiErr) {
              console.error("Error triggering success notifications in redirect route:", notiErr);
            }
          } else {
            // Webhook may have already migrated this user to `users` and deleted `pending_payment` before browser redirect arrived
            const migratedByWebhook = txnid
              ? await db.collection("users").findOne({ payuTxnId: txnid })
              : null;
            if (migratedByWebhook) {
              const autoLoginToken = crypto.randomBytes(32).toString("hex");
              tokenParam = `?token=${autoLoginToken}`;
              await db.collection("users").updateOne(
                { _id: migratedByWebhook._id },
                {
                  $set: {
                    autoLoginToken,
                    autoLoginTokenExpires: new Date(Date.now() + 15 * 60 * 1000),
                  },
                }
              );
              console.log("User was already migrated by webhook; attached autoLoginToken for txnid:", txnid);
            } else {
              console.warn("No matching record in pending_payment for txnid:", txnid);
            }
          }
        } catch (e) {
          console.error("Failed to migrate user on successful payment in redirect route:", e);
        }
    }

    // Create the redirect URL based on the incoming request origin
    const url = req.nextUrl.clone();
    url.pathname = targetPath;
    
    // Set any search params like the auto-login token
    url.search = tokenParam;

    const response = NextResponse.redirect(url, 302);

    // Set a secure, HttpOnly, short-lived cookie (valid for 5 minutes)
    // This proves the user came from a verified PayU redirect
    const cookieData = JSON.stringify({ 
      status: status, 
      txnid: txnid, 
      verified: isVerified,
      resumeToken: resumeTokenForCookie,
      time: Date.now() 
    });
    
    // Base64 encode the data to prevent weird characters in the cookie
    const encodedData = Buffer.from(cookieData).toString('base64');

    response.cookies.set("payu_auth_token", encodedData, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 30 * 60, // 30 minutes so user can easily click Retry Checkout
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
