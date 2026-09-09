import { NextRequest, NextResponse } from "next/server";
import { getDbAndBucket } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { createPayUPaymentSession } from "@/lib/payu";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, state, paymentPendingId, oppositionCount } = await req.json();

    if (!name || !email || !phone || !state || !paymentPendingId) {
      return NextResponse.json({ error: "All registration fields are required" }, { status: 400 });
    }

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

    const resolvedOppositionCount = pendingPaymentRecord.oppositionCount || oppositionCount || 1;

    let origin = req.nextUrl.origin.replace("http://", "https://");
    if (origin.includes("localhost") || origin.includes("127.0.0.1")) {
      origin = "https://legalrecovery.in";
    }

    const session = createPayUPaymentSession({
      name,
      email,
      phone,
      paymentPendingId,
      oppositionCount: resolvedOppositionCount,
      origin,
    });

    // Update pending record with the generated transaction ID
    await db.collection("pending_payment").updateOne(
      { _id: objectId },
      { $set: { txnid: session.txnid, updatedAt: new Date() } }
    );

    console.log(`[PayU Initiate Debug] Calculated amount for oppositionCount ${resolvedOppositionCount}: ₹${session.amount}`);

    return NextResponse.json({
      success: true,
      action: session.action,
      fields: session.fields,
    }, { status: 200 });

  } catch (error: any) {
    console.error("PayU Initiation Error:", error);
    return NextResponse.json({ error: error?.message || "Internal server error during payment setup" }, { status: 500 });
  }
}
