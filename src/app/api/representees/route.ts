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

  const sessionUserId = (session.user as any).id;
  const userRole = (session.user as any).role;
  const userEmail = (session.user as any).email;
  const isAdmin = sessionUserId === "admin-env-root" || userRole === "admin" || userEmail === "admin@legalrecovery.in";

  const { db } = await getDbAndBucket("fs");

  if (isAdmin) {
    const primaryAdmin = await db.collection("users").findOne({ phone: "8700343611" });
    const userId = primaryAdmin ? primaryAdmin._id : new ObjectId();
    return { db, userId, isAdmin: true };
  }

  let userObjId: ObjectId;
  try {
    userObjId = new ObjectId(sessionUserId);
  } catch (e) {
    return { errorResponse: NextResponse.json({ error: "Invalid user session" }, { status: 400 }) };
  }

  // Retrieve user document to verify hasUnlimitedCases
  const user = await db.collection("users").findOne({ _id: userObjId });
  if (!user || user.hasUnlimitedCases !== true) {
    return { errorResponse: NextResponse.json({ error: "Access denied. Advocate profile required." }, { status: 403 }) };
  }

  return { db, userId: userObjId, isAdmin: false };
}

/**
 * GET /api/representees - List all represented organizations for the advocate
 */
export async function GET(req: NextRequest) {
  try {
    const auth = await authorizeAdvocate(req);
    if (auth.errorResponse) return auth.errorResponse;

    const { db, userId, isAdmin } = auth;
    let queryUserId: any = userId;

    const admins = await db.collection("users").find({
      phone: { $regex: /(8700343611|8130104447)$/ }
    }).toArray();
    const adminIds = admins.map(a => a._id);
    const adminIdStrings = admins.map(a => a._id.toString());

    if (isAdmin) {
      queryUserId = { $in: [...adminIds, ...adminIdStrings] };
    } else {
      const sessionUser = await db.collection("users").findOne({ _id: userId });
      if (sessionUser && (sessionUser.phone?.replace(/\D/g, '').endsWith('8700343611') || sessionUser.phone?.replace(/\D/g, '').endsWith('8130104447'))) {
        if (adminIds.length > 0) {
          queryUserId = { $in: [...adminIds, ...adminIdStrings] };
        }
      }
    }

    const representees = await db
      .collection("representees")
      .find({ userId: queryUserId })
      .sort({ createdAt: -1 })
      .toArray();

    // Fetch owner users to determine default sendPoliceComplaints preference
    const repUserIds = representees
      .map(r => (typeof r.userId === "string" ? new ObjectId(r.userId) : r.userId))
      .filter(Boolean);
    const users = repUserIds.length > 0
      ? await db.collection("users").find({ _id: { $in: repUserIds } }).toArray()
      : [];
    const userMap = new Map(users.map(u => [u._id.toString(), u]));

    // Map _id to string for frontend usability and populate sendPoliceComplaints
    const formatted = representees.map(r => {
      const ownerUser = r.userId ? userMap.get(r.userId.toString()) : null;
      const sendPoliceComplaints = r.sendPoliceComplaints !== undefined
        ? r.sendPoliceComplaints
        : (ownerUser?.sendPoliceComplaints !== undefined ? ownerUser.sendPoliceComplaints : true);

      return {
        ...r,
        id: r._id.toString(),
        _id: r._id.toString(),
        sendPoliceComplaints
      };
    });

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
    const { name, email, phone, address, state, authRepName, authRepPhone } = body;

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
      authRepName: authRepName ? authRepName.trim() : "",
      authRepPhone: authRepPhone ? authRepPhone.trim().replace(/\D/g, "") : "",
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
    const { id, name, email, phone, address, state, authRepName, authRepPhone } = body;

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

    let queryUserId: any = userId;
    if (auth.isAdmin) {
      const admins = await db.collection("users").find({
        phone: { $regex: /(8700343611|8130104447)$/ }
      }).toArray();
      const adminIds = admins.map(a => a._id);
      queryUserId = { $in: [...adminIds, ...adminIds.map(a => a.toString())] };
    } else {
      const sessionUser = await db.collection("users").findOne({ _id: userId });
      if (sessionUser && (sessionUser.phone?.replace(/\D/g, '').endsWith('8700343611') || sessionUser.phone?.replace(/\D/g, '').endsWith('8130104447'))) {
        const admins = await db.collection("users").find({
          phone: { $regex: /(8700343611|8130104447)$/ }
        }).toArray();
        const adminIds = admins.map(a => a._id);
        if (adminIds.length > 0) {
          queryUserId = { $in: adminIds };
        }
      }
    }

    const userIdFilter = Array.isArray(queryUserId?.$in)
      ? { $in: [...queryUserId.$in, ...queryUserId.$in.map((id: any) => id.toString())] }
      : { $in: [userId, userId.toString()] };

    const updateFilter = auth.isAdmin
      ? { _id: new ObjectId(id) }
      : { _id: new ObjectId(id), userId: userIdFilter };

    const updateResult = await db.collection("representees").updateOne(
      updateFilter,
      {
        $set: {
          name: name.trim(),
          email: email.trim().toLowerCase(),
          phone: phone.trim().replace(/\D/g, ""),
          address: address.trim(),
          state: state.trim(),
          authRepName: authRepName ? authRepName.trim() : "",
          authRepPhone: authRepPhone ? authRepPhone.trim().replace(/\D/g, "") : "",
          ...(typeof body.sendPoliceComplaints === "boolean" ? { sendPoliceComplaints: body.sendPoliceComplaints } : {}),
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

    const { db, userId, isAdmin } = auth;
    const url = new URL(req.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Representation ID is required." }, { status: 400 });
    }

    let queryUserId: any = userId;
    if (isAdmin) {
      const admins = await db.collection("users").find({
        phone: { $regex: /(8700343611|8130104447)$/ }
      }).toArray();
      const adminIds = admins.map(a => a._id);
      queryUserId = { $in: [...adminIds, ...adminIds.map(a => a.toString())] };
    } else {
      const sessionUser = await db.collection("users").findOne({ _id: userId });
      if (sessionUser && (sessionUser.phone?.replace(/\D/g, '').endsWith('8700343611') || sessionUser.phone?.replace(/\D/g, '').endsWith('8130104447'))) {
        const admins = await db.collection("users").find({
          phone: { $regex: /(8700343611|8130104447)$/ }
        }).toArray();
        const adminIds = admins.map(a => a._id);
        if (adminIds.length > 0) {
          queryUserId = { $in: adminIds };
        }
      }
    }

    const userIdFilter = Array.isArray(queryUserId?.$in)
      ? { $in: [...queryUserId.$in, ...queryUserId.$in.map((id: any) => id.toString())] }
      : { $in: [userId, userId.toString()] };

    const deleteFilter = isAdmin
      ? { _id: new ObjectId(id) }
      : { _id: new ObjectId(id), userId: userIdFilter };

    const deleteResult = await db.collection("representees").deleteOne(deleteFilter);

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
