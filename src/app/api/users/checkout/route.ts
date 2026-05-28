import { NextRequest, NextResponse } from "next/server";
import { getDbAndBucket } from "@/lib/mongodb";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, state } = await req.json();

    if (!name || !email || !phone || !state) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const { db } = await getDbAndBucket("fs");

    // Insert new user into "users" collection (or update if email/phone exists)
    // For a checkout flow, we can create a new record or find an existing one.
    // Let's create a new record for this checkout attempt or find by phone.
    
    // First check if user exists by phone
    let user = await db.collection("users").findOne({ phone });

    if (!user) {
      const newUser = {
        name,
        email,
        phone,
        state,
        isPaid: false,
        createdAt: new Date(),
      };
      
      const result = await db.collection("users").insertOne(newUser);
      user = { _id: result.insertedId, ...newUser };
    } else {
      // Update their latest info just in case
      await db.collection("users").updateOne(
        { _id: user._id },
        { $set: { name, email, state, updatedAt: new Date() } }
      );
    }

    // Return the _id to the client so it can be appended to the PayU link
    const response = NextResponse.json({ userId: user._id.toString() }, { status: 200 });
    
    // MAGIC TRICK: Set a browser cookie with the User ID. 
    // When PayU redirects them back, their browser will send this cookie back to us!
    response.cookies.set("pending_checkout_id", user._id.toString(), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60, // 1 hour
    });

    return response;

  } catch (error) {
    console.error("Checkout User Creation Error:", error);
    return NextResponse.json({ error: "Failed to process user data" }, { status: 500 });
  }
}
