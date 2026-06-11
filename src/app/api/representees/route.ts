import { NextRequest, NextResponse } from "next/server";
import { getDbAndBucket } from "@/lib/mongodb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { ObjectId } from "mongodb";

export const dynamic = 'force-dynamic';

/**
 * Helper to authenticate and authorize advocate users.
 * Returns { db, userId } on success, or NextResponse on failure.
 */
async function authorizeAdvocate(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || !(session.user as any).id) {
    return { errorResponse: NextResponse.json({ error: "Unauthorized. Please sign in first." }, { status: 401 }) };
  }

  const userId = (session.user as any).id;
  const { db } = await getDbAndBucket("fs");

  // Retrieve user document to verify hasUnlimitedCases
  const user = await db.collection("users").findOne({ _id: new ObjectId(userId) });
  if (!user || user.hasUnlimitedCases !== true) {
    return { errorResponse: NextResponse.json({ error: "Access denied. Advocate profile required." }, { status: 403 }) };
  }

  return { db, userId: new ObjectId(userId) };
}

/**
 * GET /api/representees - List all represented organizations for the advocate
 */
export async function GET(req: NextRequest) {
  try {
    const auth = await authorizeAdvocate(req);
    if (auth.errorResponse) return auth.errorResponse;

    const { db, userId } = auth;

    const representees = await db
      .collection("representees")
      .find({ userId })
      .sort({ createdAt: -1 })
      .toArray();

    // Map _id to string for frontend usability
    const formatted = representees.map(r => ({
      ...r,
      id: r._id.toString(),
      _id: r._id.toString()
    }));

    return NextResponse.json({ success: true, count: formatted.length, data: formatted });
  } catch (error: any) {
    console.error("[Representees GET API] Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

/**
 * POST /api/representees - Add a new represented organization
 */
export async function POST(req: NextRequest) {
  try {
    const auth = await authorizeAdvocate(req);
    if (auth.errorResponse) return auth.errorResponse;

    const { db, userId } = auth;
    const body = await req.json();
    const { name, email, phone, address, state } = body;

    // Validation
    if (!name || !name.trim()) {
      return NextResponse.json({ error: "Organization name is required." }, { status: 400 });
    }
    if (!email || !email.trim()) {
      return NextResponse.json({ error: "Contact email is required." }, { status: 400 });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }
    if (!phone || !phone.trim() || phone.trim().replace(/\D/g, "").length !== 10) {
      return NextResponse.json({ error: "Please enter a valid 10-digit phone number." }, { status: 400 });
    }
    if (!address || !address.trim()) {
      return NextResponse.json({ error: "Physical address is required." }, { status: 400 });
    }
    if (!state || !state.trim()) {
      return NextResponse.json({ error: "State/UT is required." }, { status: 400 });
    }

    const representeeDoc = {
      userId,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim().replace(/\D/g, ""),
      address: address.trim(),
      state: state.trim(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    const result = await db.collection("representees").insertOne(representeeDoc);

    return NextResponse.json({
      success: true,
      message: "Represented organization successfully added.",
      id: result.insertedId.toString(),
      data: {
        ...representeeDoc,
        id: result.insertedId.toString()
      }
    });

  } catch (error: any) {
    console.error("[Representees POST API] Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

/**
 * PUT /api/representees - Edit an existing represented organization
 */
export async function PUT(req: NextRequest) {
  try {
    const auth = await authorizeAdvocate(req);
    if (auth.errorResponse) return auth.errorResponse;

    const { db, userId } = auth;
    const body = await req.json();
    const { id, name, email, phone, address, state } = body;

    if (!id) {
      return NextResponse.json({ error: "Representation ID is required." }, { status: 400 });
    }

    // Validation
    if (!name || !name.trim()) {
      return NextResponse.json({ error: "Organization name is required." }, { status: 400 });
    }
    if (!email || !email.trim()) {
      return NextResponse.json({ error: "Contact email is required." }, { status: 400 });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }
    if (!phone || !phone.trim() || phone.trim().replace(/\D/g, "").length !== 10) {
      return NextResponse.json({ error: "Please enter a valid 10-digit phone number." }, { status: 400 });
    }
    if (!address || !address.trim()) {
      return NextResponse.json({ error: "Physical address is required." }, { status: 400 });
    }
    if (!state || !state.trim()) {
      return NextResponse.json({ error: "State/UT is required." }, { status: 400 });
    }

    const updateResult = await db.collection("representees").updateOne(
      { _id: new ObjectId(id), userId },
      {
        $set: {
          name: name.trim(),
          email: email.trim().toLowerCase(),
          phone: phone.trim().replace(/\D/g, ""),
          address: address.trim(),
          state: state.trim(),
          updatedAt: new Date().toISOString()
        }
      }
    );

    if (updateResult.matchedCount === 0) {
      return NextResponse.json({ error: "Representation not found or access denied." }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: "Represented organization updated successfully."
    });

  } catch (error: any) {
    console.error("[Representees PUT API] Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

/**
 * DELETE /api/representees - Delete a represented organization
 */
export async function DELETE(req: NextRequest) {
  try {
    const auth = await authorizeAdvocate(req);
    if (auth.errorResponse) return auth.errorResponse;

    const { db, userId } = auth;
    const url = new URL(req.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Representation ID is required." }, { status: 400 });
    }

    const deleteResult = await db.collection("representees").deleteOne({
      _id: new ObjectId(id),
      userId
    });

    if (deleteResult.deletedCount === 0) {
      return NextResponse.json({ error: "Representation not found or access denied." }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: "Represented organization successfully deleted."
    });

  } catch (error: any) {
    console.error("[Representees DELETE API] Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
