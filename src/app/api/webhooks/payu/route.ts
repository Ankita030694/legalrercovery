import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { getDbAndBucket } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { verifyPayUTxn } from "@/lib/payu";

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

    // Process Payment Success
    if (status === "success") {
      const userIdentifier = udf1 || body.email || body.phone;
      
      if (!userIdentifier) {
        console.error("Payment successful but no identifying info (udf1, email, or phone) was found in the payload.");
        return NextResponse.json({ success: true }, { status: 200 });
      }

      try {
        const { db } = await getDbAndBucket("fs");
        
        let pendingUser = null;
        let objectId: ObjectId | null = null;
        
        // 1. Prioritize querying 'pending_payment' using udf1
        if (udf1 && ObjectId.isValid(udf1 as string)) {
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

        // 2. If the user is found in pending_payment, migrate them to the primary users collection
        if (pendingUser) {
          const userPendingId = pendingUser._id;
          
          await db.collection("users").updateOne(
            { phone: pendingUser.phone },
            {
              $set: {
                name: pendingUser.name,
                email: pendingUser.email,
                phone: pendingUser.phone,
                state: pendingUser.state,
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
          
          // Delete from pending_payment to clean up database
          await db.collection("pending_payment").deleteOne({ _id: userPendingId });
          console.log("Webhook successfully migrated user from pending_payment to users! ID:", userPendingId.toString());
          
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
