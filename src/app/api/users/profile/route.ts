import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { getDbAndBucket } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || !(session.user as any).id) {
    return NextResponse.json({ error: "Unauthorized. Please sign in first." }, { status: 401 });
  }

  const userId = (session.user as any).id;

  try {
    const { db } = await getDbAndBucket("fs");
    
    let user;
    if (userId === "admin-env-root") {
      // Mock/Admin fallback
      user = {
        name: "Super Administrator",
        email: (session.user as any)?.email || "admin@legalrecovery.in",
        phone: "+91 87003 43611",
        state: "Delhi",
        address: "2493AP, Ground floor, Sector 57, Gurugram-122003 (Haryana)"
      };
    } else {
      user = await db.collection("users").findOne({ _id: new ObjectId(userId) });
    }

    if (!user) {
      return NextResponse.json({ error: "User profile not found." }, { status: 404 });
    }

    // Return profile details safely
    return NextResponse.json({
      success: true,
      profile: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        state: user.state || "Haryana",
        address: user.address || ""
      }
    });

  } catch (error: any) {
    console.error("[Profile API] Error fetching user profile:", error);
    return NextResponse.json({ error: "Internal server error: " + error.message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || !(session.user as any).id) {
    return NextResponse.json({ error: "Unauthorized. Please sign in first." }, { status: 401 });
  }

  const userId = (session.user as any).id;

  try {
    const body = await req.json();
    const { name, email, address, state } = body;

    if (!name || !name.trim()) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }

    if (!email || !email.trim()) {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    if (!address || !address.trim()) {
      return NextResponse.json({ error: "Physical address is required." }, { status: 400 });
    }

    if (!state || !state.trim()) {
      return NextResponse.json({ error: "Region/State is required." }, { status: 400 });
    }

    if (userId !== "admin-env-root") {
      const { db } = await getDbAndBucket("fs");
      const updateResult = await db.collection("users").updateOne(
        { _id: new ObjectId(userId) },
        {
          $set: {
            name: name.trim(),
            email: email.trim().toLowerCase(),
            address: address.trim(),
            state: state.trim(),
            updatedAt: new Date()
          }
        }
      );

      if (updateResult.matchedCount === 0) {
        return NextResponse.json({ error: "User profile not found." }, { status: 404 });
      }
    }

    return NextResponse.json({
      success: true,
      message: "Profile updated successfully.",
      profile: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        address: address.trim(),
        state: state.trim()
      }
    });

  } catch (error: any) {
    console.error("[Profile API] Error updating user profile:", error);
    return NextResponse.json({ error: "Internal server error: " + error.message }, { status: 500 });
  }
}
