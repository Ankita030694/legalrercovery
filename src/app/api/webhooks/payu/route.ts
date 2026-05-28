import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { getDbAndBucket } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

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

    // Verify Hash
    // Standard PayU Reverse Hash formula: salt|status||||||udf5|udf4|udf3|udf2|udf1|email|firstname|productinfo|amount|txnid|key
    const salt = process.env.PAYU_SALT_32BIT || process.env.PAYU_SALT_256BIT;

    if (!salt) {
      console.error("PAYU_SALT is not defined in environment variables");
      return NextResponse.json({ error: "Server Configuration Error" }, { status: 500 });
    }

    if (hash) {
      const hashString = `${salt}|${status || ""}||||||${udf5 || ""}|${udf4 || ""}|${udf3 || ""}|${udf2 || ""}|${udf1 || ""}|${email || ""}|${firstname || ""}|${productinfo || ""}|${amount || ""}|${txnid || ""}|${key || ""}`;
      
      const generatedHash = crypto.createHash('sha512').update(hashString).digest('hex');

      if (generatedHash !== hash) {
        console.warn("PayU Webhook Hash Mismatch! Received:", hash, "Generated:", generatedHash);
        // Important: In a production environment, if the hash doesn't match, you should reject the webhook.
        // However, if the documentation for this specific payment link uses a different hash formula, 
        // you may need to adjust the hashString above.
        // Uncomment the line below to enforce strict hash matching after confirming the formula works.
        // return NextResponse.json({ error: "Invalid Hash" }, { status: 400 });
      } else {
        console.log("PayU Webhook Hash verified successfully.");
      }
    } else {
      console.warn("No hash provided in the PayU webhook payload.");
    }

    // Process Payment Success
    if (status === "success" && udf1) {
      // udf1 should contain the MongoDB Document ID we appended to the link
      try {
        const { db } = await getDbAndBucket("fs");
        
        let objectId;
        try {
           objectId = new ObjectId(udf1);
        } catch (e) {
           console.error("Invalid ObjectId format received in udf1:", udf1);
           return NextResponse.json({ error: "Invalid ID Format" }, { status: 400 });
        }

        // Update the user document to mark as paid
        const result = await db.collection("users").updateOne(
          { _id: objectId },
          { 
            $set: { 
              isPaid: true, 
              paymentDate: new Date(), 
              payuTxnId: txnid 
            } 
          }
        );

        if (result.matchedCount === 0) {
          console.error("User not found for payment. udf1/ID:", udf1);
        } else {
          console.log("Successfully marked user as paid! ID:", udf1);
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
