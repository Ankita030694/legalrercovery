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
      // Since static links strip udf1, we will fallback to email or phone
      const userIdentifier = udf1 || body.email || body.phone;
      
      if (!userIdentifier) {
        console.error("Payment successful but no identifying info (udf1, email, or phone) was found in the payload.");
        return NextResponse.json({ success: true }, { status: 200 });
      }

      try {
        const { db } = await getDbAndBucket("fs");
        
        let query: any = {};
        
        // Check if userIdentifier is a valid MongoDB ObjectId (if udf1 miraculously worked)
        if (udf1 && ObjectId.isValid(udf1 as string)) {
          query = { _id: new ObjectId(udf1 as string) };
        } else if (body.email) {
          query = { email: body.email };
        } else if (body.phone) {
          query = { phone: body.phone };
        }

        // Update the user document to mark as paid
        const result = await db.collection("users").updateOne(
          query,
          { 
            $set: { 
              isPaid: true, 
              paymentDate: new Date(), 
              payuTxnId: txnid 
            } 
          }
        );

        if (result.matchedCount === 0) {
          console.error("User not found in DB for payment. Query used:", JSON.stringify(query));
        } else {
          console.log("Successfully marked user as paid! Matched via:", JSON.stringify(query));
        }
      } catch (error) {
        console.error("Database error during webhook processing:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
      }
    } else if (status !== "success") {
      console.log(`Payment failed or pending. Status: ${status}, txnid: ${txnid}`);
    } else if (!udf1) {
      console.error("Payment successful but no udf1 (User ID) was attached to the payload.");
    }

    // Always return 200 OK to PayU to acknowledge receipt
    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("PayU Webhook Error:", error);
    return NextResponse.json({ error: "Webhook Processing Failed" }, { status: 500 });
  }
}
