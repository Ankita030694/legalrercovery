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

    // PayU webhooks usually send data as URL-encoded form data
    if (contentType.includes("application/x-www-form-urlencoded")) {
      const text = await req.text();
      const params = new URLSearchParams(text);
      for (const [key, value] of params.entries()) {
        body[key] = value;
      }
    } else if (contentType.includes("application/json")) {
      const jsonBody = await req.json();
      Object.assign(body, jsonBody);
    } else {
      // Fallback: try to parse as text if not explicitly form-data or JSON
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

    // Filter out transactions from other projects sharing this PayU account
    if (productinfo !== "Paid With ButtonId 111293057") {
       console.log(`Ignoring webhook for different project. ProductInfo: ${productinfo}`);
       return NextResponse.json({ success: true, message: "Ignored" }, { status: 200 });
    }

    // Verify using robust API call
    let isVerified = false;
    
    if (txnid && key) {
       isVerified = await verifyPayUTxn(txnid, key);
    } else {
       console.error("Missing txnid or key in webhook payload");
    }

    console.log("PAYU WEBHOOK RAW BODY:", JSON.stringify(body, null, 2));

    const { db } = await getDbAndBucket("fs");

    // Server-side database logging of the webhook hit
    try {
      await db.collection("payment_debug_logs").insertOne({
        step: "webhook_received",
        timestamp: new Date(),
        data: { status, txnid, amount, firstname, email, udf1, productinfo, isVerified }
      });
    } catch (logErr) {
      console.error("Failed to write webhook initial log to DB:", logErr);
    }

    // Process Payment Success (Strictly requiring server-to-server transaction verification)
    if (status === "success") {
      if (!isVerified) {
        console.error(`[PayU Webhook] Webhook status was success, but transaction verification failed for Txn ID: ${txnid}`);
        try {
          await db.collection("payment_debug_logs").insertOne({
            step: "webhook_verification_failed",
            timestamp: new Date(),
            data: { txnid, status }
          });
        } catch {}
        return NextResponse.json({ success: true, message: "Verification failed but acknowledged" }, { status: 200 });
      }

      const userIdentifier = udf1 || body.email || body.phone;
      
      if (!userIdentifier) {
        console.error("Payment successful but no identifying info (udf1, email, or phone) was found in the payload.");
        try {
          await db.collection("payment_debug_logs").insertOne({
            step: "webhook_missing_identifier",
            timestamp: new Date(),
            data: { txnid }
          });
        } catch {}
        return NextResponse.json({ success: true }, { status: 200 });
      }

      try {
        let pendingUser = null;
        let objectId: ObjectId | null = null;
        
        // 1. Prioritize querying 'pending_payment' using unique transaction ID
        if (txnid) {
          pendingUser = await db.collection("pending_payment").findOne({ txnid });
        }

        // 2. Fallback to udf1
        if (!pendingUser && udf1 && ObjectId.isValid(udf1 as string)) {
          objectId = new ObjectId(udf1 as string);
          pendingUser = await db.collection("pending_payment").findOne({ _id: objectId });
        }
        
        // Fallback checks for phone or email within pending_payment
        if (!pendingUser) {
          if (body.phone) {
            pendingUser = await db.collection("pending_payment").findOne({ phone: body.phone });
          } else if (body.email) {
            pendingUser = await db.collection("pending_payment").findOne({ email: body.email });
          }
        }

        try {
          await db.collection("payment_debug_logs").insertOne({
            step: "webhook_pending_user_fetch",
            timestamp: new Date(),
            data: { found: !!pendingUser, userId: pendingUser?._id?.toString(), phone: pendingUser?.phone }
          });
        } catch {}
        
        // 3. If the user is found in pending_payment, migrate them to the primary users collection
        if (pendingUser) {
          const userPendingId = pendingUser._id;
          const PRICE_PER_OPPOSITION = 999;
          const oppCount = pendingUser.oppositionCount || 1;
          const parsedGatewayAmount = amount ? Math.round(Number(amount)) : 0;
          const amtPaid =
            pendingUser.expectedAmount ||
            (parsedGatewayAmount > 0 ? parsedGatewayAmount : oppCount * PRICE_PER_OPPOSITION);
          const originalAmount = pendingUser.originalAmount || oppCount * PRICE_PER_OPPOSITION;
          const discountPercent = Number(pendingUser.discountPercent) || 0;
          const currentWave = Number(pendingUser.retargeting?.currentWave) || 0;
          const clickCount = Number(pendingUser.clickCount) || 0;
          const recoveredViaFunnel = currentWave > 0 || clickCount > 0 || discountPercent > 0;

          // Check if user already exists in the users collection (returning paid user or redirect already ran)
          const existingUser = await db.collection("users").findOne({ phone: pendingUser.phone });
          const existingTxnForThisId = txnid
            ? await db.collection("transactions").findOne({ payuTxnId: txnid })
            : null;
          const alreadyProcessedThisTxn =
            Boolean(existingTxnForThisId) ||
            Boolean(txnid && existingUser && existingUser.payuTxnId === txnid);

          if (existingUser) {
            if (!alreadyProcessedThisTxn) {
              // RETURNING USER: Safely accumulate amountPaid and oppositionCount (supporting legacy users without explicit oppositionCount)
              const priorAmountPaid = Number(existingUser.amountPaid) || 0;
              const priorSlots = Math.max(
                Math.floor(priorAmountPaid / PRICE_PER_OPPOSITION),
                Number(existingUser.oppositionCount) || 1
              );
              await db.collection("users").updateOne(
                { phone: pendingUser.phone },
                {
                  $set: {
                    amountPaid: priorAmountPaid + amtPaid,
                    oppositionCount: priorSlots + oppCount,
                    isPaid: true,
                    payuTxnId: txnid,
                    lastPaymentDate: new Date(),
                    updatedAt: new Date(),
                    ...(pendingUser.resumeToken ? { lastResumeToken: pendingUser.resumeToken } : {}),
                  },
                }
              );
              console.log(`Webhook: Returning user payment accumulated. Phone: ${pendingUser.phone}, Added: ₹${amtPaid}`);
            }
          } else {
            // NEW USER: Standard upsert with initial values and full funnel attribution
            await db.collection("users").updateOne(
              { phone: pendingUser.phone },
              {
                $set: {
                  name: pendingUser.name,
                  email: pendingUser.email,
                  phone: pendingUser.phone,
                  state: pendingUser.state,
                  oppositionCount: oppCount,
                  amountPaid: amtPaid,
                  originalAmount,
                  discountPercent,
                  recoveredViaFunnel,
                  recoveredAtWave: currentWave,
                  retargeting: pendingUser.retargeting || null,
                  clickCount,
                  linkClickedAt: pendingUser.linkClickedAt || null,
                  verifiedVia: pendingUser.verifiedVia || "otp",
                  funnelStartedAt: pendingUser.funnelStartedAt || pendingUser.createdAt || new Date(),
                  lastResumeToken: pendingUser.resumeToken || null,
                  isPaid: true,
                  payuTxnId: txnid,
                  paymentDate: new Date(),
                  updatedAt: new Date()
                },
                $setOnInsert: {
                  createdAt: pendingUser.createdAt ? new Date(pendingUser.createdAt) : new Date()
                }
              },
              { upsert: true }
            );
          }
          
          // Delete from pending_payment to clean up database
          await db.collection("pending_payment").deleteOne({ _id: userPendingId });
          // The phone is now in 'users': drop duplicate signup leads and any OTP records for it
          await db.collection("pending_payment").deleteMany({ phone: pendingUser.phone, isReturningUser: { $ne: true } });
          await db.collection("pending_verification").deleteMany({ phone: pendingUser.phone });
          console.log("Webhook successfully migrated user from pending_payment to users! ID:", userPendingId.toString());

          // Retrieve the migrated user document to get their true database _id and record in the transactions collection (deduplicated)
          const migratedUser = await db.collection("users").findOne({ phone: pendingUser.phone });
          if (migratedUser) {
            const existingTxn = await db.collection("transactions").findOne({ payuTxnId: txnid });
            if (!existingTxn) {
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
          }

          try {
            await db.collection("payment_debug_logs").insertOne({
              step: "webhook_migration_success",
              timestamp: new Date(),
              data: { phone: pendingUser.phone, amtPaid, discountPercent, recoveredViaFunnel, isReturningUser: !!existingUser, caseMigratedId: userPendingId.toString(), transactionLogged: !!migratedUser }
            });
          } catch {}

          // Trigger Zoho Email and WATI WhatsApp notifications
          await processPaymentSuccessNotifications(
            db,
            pendingUser.phone,
            pendingUser.email,
            pendingUser.name,
            amtPaid,
            txnid
          );
          
        } else {
          // 3. Fallback: If not in pending_payment, they may have already been migrated by the browser redirect.
          // Perform a safe status update in the users collection.
          let query: any = {};
          if (udf1 && ObjectId.isValid(udf1 as string)) {
            query = { _id: new ObjectId(udf1 as string) };
          } else if (body.phone) {
            query = { phone: body.phone };
          } else if (body.email) {
            query = { email: body.email };
          }
          
          const updateResult = await db.collection("users").updateOne(
            query,
            {
              $set: {
                isPaid: true,
                payuTxnId: txnid,
                paymentDate: new Date(),
                updatedAt: new Date()
              }
            }
          );
          
          if (updateResult.matchedCount > 0) {
            console.log("Webhook safely updated existing paid user in users collection. Matched via:", JSON.stringify(query));
            
            // Trigger notifications if not already sent (safely deduplicated inside processPaymentSuccessNotifications)
            const user = await db.collection("users").findOne(query);
            if (user?.phone) {
              // User is in 'users' (paid): remove any leftover signup lead / OTP record for this phone
              await db.collection("pending_payment").deleteMany({ phone: user.phone, isReturningUser: { $ne: true } });
              await db.collection("pending_verification").deleteMany({ phone: user.phone });
            }
            if (user) {
              const PRICE_PER_OPPOSITION = 999; // TO CHANGE TO PRODUCTION PRICE: Change 1 to 999
              const oppCount = user.oppositionCount || 1;
              const amtPaid = user.amountPaid || (oppCount * PRICE_PER_OPPOSITION);

              // Ensure transaction is logged in the transactions collection if not already there (deduplicated)
              const existingTxn = await db.collection("transactions").findOne({ payuTxnId: txnid });
              if (!existingTxn) {
                await db.collection("transactions").insertOne({
                  userId: user._id,
                  phone: user.phone,
                  email: user.email,
                  payuTxnId: txnid,
                  amount: amtPaid,
                  status: "success",
                  oppositionCount: oppCount,
                  paymentDate: new Date(),
                  createdAt: new Date()
                });
              }

              await processPaymentSuccessNotifications(
                db,
                user.phone,
                user.email,
                user.name,
                amtPaid,
                txnid
              );
            }
          } else {
            console.warn("Webhook: No record matched in pending_payment or users. Query:", JSON.stringify(query));
          }
        }
      } catch (error) {
        console.error("Database error during webhook processing:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
      }
    } else if (status !== "success") {
      console.log(`Payment failed or pending. Status: ${status}, txnid: ${txnid}`);
    }

    // Always return 200 OK to PayU to acknowledge receipt
    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("PayU Webhook Error:", error);
    return NextResponse.json({ error: "Webhook Processing Failed" }, { status: 500 });
  }
}
