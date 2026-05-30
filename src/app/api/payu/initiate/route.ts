import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { getDbAndBucket } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, state, paymentPendingId } = await req.json();

    if (!name || !email || !phone || !state || !paymentPendingId) {
      return NextResponse.json({ error: "All registration fields are required" }, { status: 400 });
    }

    // Strictly trim environment variables to prevent hidden carriage returns (\r) or spaces
    const key = process.env.PAYU_API_KEY?.trim();
    const salt = process.env.PAYU_SALT_32BIT?.trim();

    if (!key || !salt) {
      return NextResponse.json({ error: "PayU configuration is missing on server" }, { status: 500 });
    }

    // Generate a unique transaction ID - strictly alphanumeric (no underscores or hyphens permitted by PayU entry rules)
    const txnid = `TXN${Date.now()}${Math.floor(1000 + Math.random() * 9000)}`;

    const { db } = await getDbAndBucket("fs");

    let objectId: ObjectId;
    try {
      objectId = new ObjectId(paymentPendingId);
    } catch {
      return NextResponse.json({ error: "Invalid registration session ID" }, { status: 400 });
    }

    // Retrieve the secure pending_payment record from the database to calculate amount securely on the server-side
    const pendingPaymentRecord = await db.collection("pending_payment").findOne({ _id: objectId });
    if (!pendingPaymentRecord) {
      console.error("[PayU Initiate Debug] Pending payment record not found for ID:", paymentPendingId);
      return NextResponse.json({ error: "Matching registration session not found" }, { status: 404 });
    }

    // Securely calculate the amount on server side to prevent any manipulation
    const PRICE_PER_OPPOSITION = 1; // TO CHANGE TO PRODUCTION PRICE: Change 1 to 999
    const oppositionCount = pendingPaymentRecord.oppositionCount || 1;
    const totalAmount = oppositionCount * PRICE_PER_OPPOSITION;
    const amount = `${totalAmount}.00`;

    console.log(`[PayU Initiate Debug] Calculated amount for oppositionCount ${oppositionCount}: ₹${amount} (₹${PRICE_PER_OPPOSITION} per party)`);


    // Update pending record with the generated transaction ID
    await db.collection("pending_payment").updateOne(
      { _id: objectId },
      { $set: { txnid, updatedAt: new Date() } }
    );
    const productinfo = "Paid With ButtonId 111293057";
    const firstname = name.trim().replace(/[^a-zA-Z0-9\s]/g, ""); // Alpha-numeric + spaces only
    const sanitizedEmail = email.trim().toLowerCase();
    const sanitizedPhone = phone.trim().replace(/\D/g, "");
    const udf1 = paymentPendingId; // Securely pass the database _id

    // Use .join("|") to compute the standard SHA-512 PayU request signature hash safely
    const hashString = [
      key,
      txnid,
      amount,
      productinfo,
      firstname,
      sanitizedEmail,
      udf1,
      "", // udf2
      "", // udf3
      "", // udf4
      "", // udf5
      "", // empty blocks as specified by PayU hosted hash structure
      "",
      "",
      "",
      "",
      salt
    ].join("|");

    const hash = crypto.createHash("sha512").update(hashString).digest("hex");

    // Dynamic SURL and FURL creation
    let origin = req.nextUrl.origin.replace("http://", "https://");
    
    // Swap localhost with the live production domain to bypass PayU's localhost domain block
    if (origin.includes("localhost") || origin.includes("127.0.0.1")) {
      origin = "https://legalrecovery.in";
    }
    
    const surl = `${origin}/api/payu/redirect`;
    const furl = `${origin}/api/payu/redirect`;

    // Strictly route to the Production Gateway as the credentials provided in .env.local are Live Production Keys
    const actionUrl = "https://secure.payu.in/_payment";

    return NextResponse.json({
      success: true,
      action: actionUrl,
      fields: {
        key,
        txnid,
        amount,
        productinfo,
        firstname,
        email: sanitizedEmail,
        phone: sanitizedPhone,
        surl,
        furl,
        hash,
        udf1,
        udf2: "", // Explicit empty UDFs in form payload
        udf3: "",
        udf4: "",
        udf5: "",
        service_provider: "payu_paisa"
      }
    }, { status: 200 });

  } catch (error) {
    console.error("PayU Initiation Error:", error);
    return NextResponse.json({ error: "Internal server error during payment setup" }, { status: 500 });
  }
}
