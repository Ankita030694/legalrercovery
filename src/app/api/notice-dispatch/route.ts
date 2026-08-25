import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { getDbAndBucket } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export const dynamic = 'force-dynamic';

/**
 * Checks if the session user is one of the designated special administrators:
 * '8700343611' or '8130104447'
 */
async function authorizeSpecialUser(session: any, db: any) {
  if (!session || !session.user || !(session.user as any).id) {
    return { authorized: false, errorResponse: NextResponse.json({ error: "Unauthorized access. Please log in." }, { status: 401 }) };
  }

  const userId = (session.user as any).id;
  let user: any;

  if (userId === "admin-env-root") {
    user = {
      phone: "8700343611",
      name: "Super Administrator",
      email: "admin@legalrecovery.in"
    };
  } else {
    try {
      user = await db.collection("users").findOne({ _id: new ObjectId(userId) });
    } catch (e) {
      user = await db.collection("users").findOne({ _id: userId });
    }
  }

  if (!user) {
    return { authorized: false, errorResponse: NextResponse.json({ error: "User profile not found." }, { status: 404 }) };
  }

  const cleanPhone = (user.phone || "").replace(/\D/g, "");
  const isSpecial = cleanPhone.endsWith("8700343611") || cleanPhone.endsWith("8130104447");

  if (!isSpecial) {
    return { 
      authorized: false, 
      errorResponse: NextResponse.json({ 
        error: "Access Denied. The Notice Dispatch console is restricted exclusively to authorized administrator accounts." 
      }, { status: 403 }) 
    };
  }

  return { authorized: true, user, cleanPhone };
}

/**
 * GET /api/notice-dispatch
 * Returns all cases managed under the special admin pool with:
 * - Person / Defaulter Name
 * - Address
 * - Phone
 * - Email
 * - Recovered Amount
 * - Total Stuck/Claim Amount
 * - Notice status and dispatch timelines
 */
export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    const { db } = await getDbAndBucket("fs");

    const authCheck = await authorizeSpecialUser(session, db);
    if (!authCheck.authorized) {
      return authCheck.errorResponse;
    }

    // Find all admin accounts matching the special phone numbers
    const admins = await db.collection("users").find({
      phone: { $regex: /(8700343611|8130104447)$/ }
    }).toArray();
    const adminIds = admins.map(a => a._id);
    const adminIdStrings = admins.map(a => a._id.toString());

    // Fetch all representees to map client/organization names
    const representees = await db.collection("representees").find({
      $or: [
        { userId: { $in: adminIds } },
        { userId: { $in: adminIdStrings } }
      ]
    }).toArray();
    const representeeMap = new Map(representees.map(r => [r._id.toString(), r]));

    // Query all cases belonging to these admin IDs or client phones
    const cases = await db.collection("cases").find({
      $or: [
        { userId: { $in: adminIds } },
        { userId: { $in: adminIdStrings } },
        { clientPhone: { $regex: /(8700343611|8130104447)$/ } }
      ]
    }).sort({ createdAt: -1 }).toArray();

    let totalRecovered = 0;
    let totalDebt = 0;
    let activeCount = 0;
    let recoveredCount = 0;
    let completedCount = 0;
    let pausedCount = 0;

    const formattedCases = cases.map((c: any) => {
      const debt = Number(c.stuckAmount || c.debtAmount || 0);
      const recovered = Number(c.recoveredAmount || (c.status === "recovered" ? debt : 0));

      totalDebt += debt;
      totalRecovered += recovered;

      if (c.status === "active") activeCount++;
      else if (c.status === "recovered") recoveredCount++;
      else if (c.status === "completed") completedCount++;
      else if (c.status === "paused") pausedCount++;

      let repName = "";
      if (c.representeeId) {
        const rep = representeeMap.get(c.representeeId.toString());
        if (rep) repName = rep.name;
      }
      if (!repName && c.clientName) {
        repName = c.clientName;
      }

      return {
        id: c._id.toString(),
        _id: c._id.toString(),
        caseId: c.caseId || `LR-${c._id.toString().slice(-4)}`,
        defaulterName: c.defaulterName || c.opponentName || "Unspecified Person",
        address: c.address || c.opponentAddress || "Address not provided",
        phone: c.phone || c.opponentPhone || "",
        phone2: c.phone2 || "",
        email: c.email || c.opponentEmail || "",
        email2: c.email2 || "",
        recoveredAmount: recovered,
        stuckAmount: debt,
        status: c.status || "active",
        category: c.category || "general-recovery",
        currentStep: c.currentStep || 1,
        clientName: repName || "Direct Advocate Case",
        representeeId: c.representeeId ? c.representeeId.toString() : null,
        policeStationName: c.policeStationName || "",
        policeStationEmail: c.policeStationEmail || "",
        policeStationAddress: c.policeStationAddress || "",
        timeline: c.timeline || [],
        createdAt: c.createdAt || new Date().toISOString(),
        updatedAt: c.updatedAt || new Date().toISOString(),
        dueDate: c.dueDate || c.invoiceDate || "",
        invoices: c.invoices || []
      };
    });

    return NextResponse.json({
      success: true,
      count: formattedCases.length,
      cases: formattedCases,
      stats: {
        totalCases: formattedCases.length,
        totalDebt,
        totalRecovered,
        activeCount,
        recoveredCount,
        completedCount,
        pausedCount
      }
    });

  } catch (error: any) {
    console.error("[Notice Dispatch API] GET Error:", error);
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
  }
}

/**
 * PUT /api/notice-dispatch
 * Updates the recovered amount and/or status for a case
 */
export async function PUT(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    const { db } = await getDbAndBucket("fs");

    const authCheck = await authorizeSpecialUser(session, db);
    if (!authCheck.authorized) {
      return authCheck.errorResponse;
    }

    const body = await req.json();
    const { id, recoveredAmount, status } = body;

    if (!id) {
      return NextResponse.json({ error: "Case ID is required." }, { status: 400 });
    }

    // Find the case
    let targetCase: any;
    try {
      targetCase = await db.collection("cases").findOne({ _id: new ObjectId(id) });
    } catch (e) {
      targetCase = await db.collection("cases").findOne({ _id: id });
    }

    if (!targetCase) {
      return NextResponse.json({ error: "Case not found." }, { status: 404 });
    }

    const updateDoc: any = {
      updatedAt: new Date().toISOString()
    };

    if (recoveredAmount !== undefined) {
      const parsedAmt = parseFloat(recoveredAmount);
      if (isNaN(parsedAmt) || parsedAmt < 0) {
        return NextResponse.json({ error: "Invalid recovered amount." }, { status: 400 });
      }
      updateDoc.recoveredAmount = parsedAmt;
      // If recovered amount equals or exceeds stuck amount, auto-set status to recovered if not provided
      if (!status && parsedAmt >= (targetCase.stuckAmount || 0) && (targetCase.stuckAmount || 0) > 0) {
        updateDoc.status = "recovered";
      }
    }

    if (status) {
      updateDoc.status = status;
      if (status === "recovered" && recoveredAmount === undefined && !targetCase.recoveredAmount) {
        updateDoc.recoveredAmount = targetCase.stuckAmount || 0;
      }
    }

    await db.collection("cases").updateOne(
      { _id: targetCase._id },
      { $set: updateDoc }
    );

    return NextResponse.json({
      success: true,
      message: "Case recovery details updated successfully.",
      data: {
        id: targetCase._id.toString(),
        ...updateDoc
      }
    });

  } catch (error: any) {
    console.error("[Notice Dispatch API] PUT Error:", error);
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
  }
}
