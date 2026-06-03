import { NextRequest, NextResponse } from "next/server";
import { getDbAndBucket } from "@/lib/mongodb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { ObjectId } from "mongodb";

export const dynamic = 'force-dynamic';

/**
 * GET /api/cases - Retrieves claims registered strictly for the authenticated user.
 * Prevents cross-user data leakage by enforcing user ID matching.
 */
export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || !(session.user as any).id) {
    return NextResponse.json({ error: "Unauthorized. Please log in first." }, { status: 401 });
  }

  try {
    const { db } = await getDbAndBucket("fs");

    // Check if client is requesting the next generated Case ID placeholder
    const nextIdParam = req.nextUrl.searchParams.get("nextId");
    if (nextIdParam === "true") {
      const count = await db.collection("cases").countDocuments();
      const nextNum = String(count + 1).padStart(4, '0');
      const today = new Date();
      const day = today.getDate();
      const month = today.getMonth() + 1;
      const yearSuffix = today.getFullYear().toString().slice(-2);
      const caseId = `LR-${nextNum}-${day}${month}${yearSuffix}`;
      return NextResponse.json({ success: true, caseId });
    }

    const userId = new ObjectId((session.user as any).id);

    // Retrieve cases securely filtered by userId
    const cases = await db
      .collection("cases")
      .find({ userId })
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json({ success: true, count: cases.length, data: cases });
  } catch (error: any) {
    console.error("GET Cases API Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

/**
 * POST /api/cases - Registers a new legal notice case for the authenticated client.
 * Enforces pricing limits (oppositionCount limit) and creates initial dispatch timelines.
 */
export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || !(session.user as any).id) {
    return NextResponse.json({ error: "Unauthorized. Please log in first." }, { status: 401 });
  }

  try {
    const userId = new ObjectId((session.user as any).id);
    const body = await req.json();

    const {
      defaulterName,
      entityType,
      phone,
      phone2,
      email,
      email2,
      address,
      stuckAmount,
      dueDate,
      policeStationName,
      policeStationEmail,
      policeStationAddress
    } = body;

    // Validate fields
    if (
      !defaulterName ||
      !entityType ||
      !phone ||
      !email ||
      !address ||
      !stuckAmount ||
      !dueDate ||
      !policeStationName ||
      !policeStationEmail ||
      !policeStationAddress
    ) {
      return NextResponse.json({ error: "All wizard registration fields are required." }, { status: 400 });
    }

    // Validate secondary phone number uniqueness and length if provided
    if (phone2) {
      const cleanPhone2 = phone2.trim().replace(/\D/g, "");
      if (cleanPhone2.length !== 10) {
        return NextResponse.json({ error: "Secondary phone must be a 10-digit number." }, { status: 400 });
      }
      if (cleanPhone2 === phone.trim().replace(/\D/g, "")) {
        return NextResponse.json({ error: "Secondary phone number must be unique from primary phone number." }, { status: 400 });
      }
    }

    // Validate secondary email uniqueness and format if provided
    if (email2) {
      const cleanEmail = email.toLowerCase().trim();
      const cleanEmail2 = email2.toLowerCase().trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(cleanEmail2)) {
        return NextResponse.json({ error: "Secondary email address is invalid." }, { status: 400 });
      }
      if (cleanEmail2 === cleanEmail) {
        return NextResponse.json({ error: "Secondary email address must be unique from primary email address." }, { status: 400 });
      }
    }

    const { db } = await getDbAndBucket("fs");

    // Fetch user document to check payment status and opposition limits
    const user = await db.collection("users").findOne({ _id: userId });
    if (!user) {
      return NextResponse.json({ error: "Authenticated client profile not found." }, { status: 404 });
    }

    if (!user.isPaid) {
      return NextResponse.json({ error: "Access denied. Active payment session not found. Please subscribe." }, { status: 403 });
    }

    // Enforce case creation credits/limits based on the amount the user has paid.
    // Production amount is ₹999 per opposition. Testing is ₹1 per opposition.
    const PRICE_PER_OPPOSITION = 1; // TO CHANGE TO PRODUCTION PRICE: Change 1 to 999
    const amountPaid = user.amountPaid || 0;
    const limitFromAmountPaid = Math.floor(amountPaid / PRICE_PER_OPPOSITION);

    // Determine the allowed limit, using direct oppositionCount as a fallback
    const allowedLimit = Math.max(limitFromAmountPaid, user.oppositionCount || 1);

    const currentCreatedCount = await db.collection("cases").countDocuments({ userId });

    if (currentCreatedCount >= allowedLimit) {
      return NextResponse.json(
        { error: `Case registration limit reached. Your active plan allows up to ${allowedLimit} opposing parties (calculated at ₹${PRICE_PER_OPPOSITION} per opposition based on ₹${amountPaid} paid). Please contact support or purchase additional slots.` },
        { status: 403 }
      );
    }

    // Generate standard horizontal timeline dates matching the wizard presentation
    const today = new Date();
    const oneWeekLater = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    const twoWeeksLater = new Date(today.getTime() + 14 * 24 * 60 * 60 * 1000);
    const threeWeeksLater = new Date(today.getTime() + 21 * 24 * 60 * 60 * 1000);

    const formatDate = (d: Date) => {
      return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
    };

    const count = await db.collection("cases").countDocuments();
    const nextNum = String(count + 1).padStart(4, '0');
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const yearSuffix = today.getFullYear().toString().slice(-2);
    const caseId = `LR-${nextNum}-${day}${month}${yearSuffix}`;

    const caseDoc = {
      userId, // Strictly link case to the authenticated client ObjectId
      caseId,
      defaulterName,
      entityType,
      phone,
      phone2: phone2 || "",
      email,
      email2: email2 || "",
      address,
      stuckAmount: parseFloat(stuckAmount),
      dueDate,
      policeStationName,
      policeStationEmail,
      policeStationAddress,
      clientName: user.name || user.companyName || "Tech AMA",
      clientEmail: user.email || "",
      clientPhone: user.phone || "",
      clientAddress: user.address || "",
      status: "active",
      currentStep: 1,
      createdAt: today.toISOString(),
      updatedAt: today.toISOString(),
      timeline: [
        { 
          step: 1, 
          label: "First Notice", 
          description: "Notice drafted. Ready to dispatch.", 
          date: "Awaiting dispatch", 
          status: "pending" 
        },
        { 
          step: 2, 
          label: "Second Notice", 
          description: "Dispatched exactly 1 week after", 
          date: formatDate(oneWeekLater), 
          status: "locked" 
        },
        { 
          step: 3, 
          label: "Third Notice", 
          description: "Final demand notice prior to filing", 
          date: formatDate(twoWeeksLater), 
          status: "locked" 
        },
        { 
          step: 4, 
          label: "SHO Criminal Complaint", 
          description: `Drafted complaint copy shared for ${policeStationName}`, 
          date: formatDate(threeWeeksLater), 
          status: "locked" 
        }
      ]
    };

    const result = await db.collection("cases").insertOne(caseDoc);

    return NextResponse.json({
      success: true,
      message: "Legal recovery case successfully registered in database.",
      caseId: caseDoc.caseId,
      dbId: result.insertedId.toString()
    });

  } catch (error: any) {
    console.error("POST Create Case API Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

/**
 * PATCH /api/cases - Updates a case status (e.g. to mark as recovered/stopped).
 * Restricts updates strictly to the owning user.
 */
export async function PATCH(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || !(session.user as any).id) {
    return NextResponse.json({ error: "Unauthorized. Please log in first." }, { status: 401 });
  }

  try {
    const userId = new ObjectId((session.user as any).id);
    const body = await req.json();
    const { id, status, recoveredAmount } = body;

    if (!id || !status) {
      return NextResponse.json({ error: "Case ID and status are required." }, { status: 400 });
    }

    const { db } = await getDbAndBucket("fs");

    // Fetch the case to make sure it belongs to the user
    const existingCase = await db.collection("cases").findOne({
      _id: new ObjectId(id),
      userId: userId
    });

    if (!existingCase) {
      return NextResponse.json({ error: "Case not found or access denied." }, { status: 404 });
    }

    // Update case in DB
    const updateDoc: any = {
      status,
      updatedAt: new Date().toISOString()
    };

    if (status === "recovered") {
      const amt = recoveredAmount !== undefined ? parseFloat(recoveredAmount) : existingCase.stuckAmount;
      if (isNaN(amt) || amt < 0) {
        return NextResponse.json({ error: "Invalid recovered amount." }, { status: 400 });
      }
      if (amt > existingCase.stuckAmount) {
        return NextResponse.json({
          error: `Recovered amount (₹${amt.toLocaleString("en-IN")}) cannot exceed the outstanding dues of ₹${existingCase.stuckAmount.toLocaleString("en-IN")}.`
        }, { status: 400 });
      }
      updateDoc.recoveredAmount = amt;

      if (existingCase.timeline) {
        updateDoc.timeline = existingCase.timeline.map((t: any) => {
          if (t.status === "scheduled" || t.status === "active" || t.status === "locked") {
            return { ...t, status: "cancelled", description: `Notice stopped (Dues recovered: ₹${amt.toLocaleString("en-IN")})` };
          }
          return t;
        });
      }
    }

    await db.collection("cases").updateOne(
      { _id: new ObjectId(id), userId: userId },
      { $set: updateDoc }
    );

    return NextResponse.json({
      success: true,
      message: "Case status successfully updated in database."
    });

  } catch (error: any) {
    console.error("PATCH Case API Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
