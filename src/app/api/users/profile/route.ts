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
        state: "Delhi"
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
        state: user.state || "Haryana"
      }
    });

  } catch (error: any) {
    console.error("[Profile API] Error fetching user profile:", error);
    return NextResponse.json({ error: "Internal server error: " + error.message }, { status: 500 });
  }
}
