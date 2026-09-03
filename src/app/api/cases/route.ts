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
    let queryUserId: any = userId;

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

    // Fetch representees to map their names to cases in memory
    const representees = await db.collection("representees").find({ userId: queryUserId }).toArray();
    const representeeMap = new Map(representees.map(r => [r._id.toString(), r]));

    // Retrieve cases securely filtered by userId
    const cases = await db
      .collection("cases")
      .find({ userId: queryUserId })
      .sort({ createdAt: -1 })
      .toArray();

    const mappedCases = cases.map(c => {
      if (c.representeeId) {
        const rep = representeeMap.get(c.representeeId.toString());
        return {
          ...c,
          representeeName: rep ? rep.name : null
        };
      }
      return c;
    });

    return NextResponse.json({ success: true, count: mappedCases.length, data: mappedCases });
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
      policeStationAddress,
      representeeId,
      category,
      asOnDate,
      disbursementDate,
      disbursedAmount
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

    // Handle representation association if representeeId is provided
    let representee = null;
    if (representeeId) {
      if (user.hasUnlimitedCases !== true) {
        return NextResponse.json({ error: "Access denied. Only advocate profiles can represent multiple organizations." }, { status: 403 });
      }

      let queryUserId: any = userId;
      const userPhoneClean = user?.phone?.replace(/\D/g, '') || '';
      if (userPhoneClean.endsWith('8700343611') || userPhoneClean.endsWith('8130104447')) {
        const admins = await db.collection("users").find({
          phone: { $regex: /(8700343611|8130104447)$/ }
        }).toArray();
        const adminIds = admins.map(a => a._id);
        if (adminIds.length > 0) {
          queryUserId = { $in: adminIds };
        }
      }

      const userIdFilter = Array.isArray(queryUserId?.$in)
        ? { $in: [...queryUserId.$in, ...queryUserId.$in.map((id: any) => id.toString())] }
        : { $in: [userId, userId.toString()] };

      try {
        representee = await db.collection("representees").findOne({
          _id: new ObjectId(representeeId),
          userId: userIdFilter
        });
      } catch (err) {
        return NextResponse.json({ error: "Invalid representation ID format." }, { status: 400 });
      }
      if (!representee) {
        return NextResponse.json({ error: "Represented organization not found or access denied." }, { status: 404 });
      }
    }

    // Enforce case creation credits/limits based on the amount the user has paid.
    // Production amount is ₹999 per opposition. Testing is ₹1 per opposition.
    const PRICE_PER_OPPOSITION = 999; // TO CHANGE TO PRODUCTION PRICE: Change 1 to 999
    const amountPaid = user.amountPaid || 0;
    const limitFromAmountPaid = Math.floor(amountPaid / PRICE_PER_OPPOSITION);

    // Determine the allowed limit, using direct oppositionCount as a fallback
    const allowedLimit = Math.max(limitFromAmountPaid, user.oppositionCount || 1);

    const activeCasesCount = await db.collection("cases").countDocuments({ userId });
    const historicalCasesCount = user.totalCasesCreated || 0;
    const currentCreatedCount = Math.max(activeCasesCount, historicalCasesCount);

    const hasUnlimitedCases = user.hasUnlimitedCases === true;

    if (!hasUnlimitedCases && currentCreatedCount >= allowedLimit) {
      return NextResponse.json(
        { error: `Case registration limit reached. Your active plan allows up to ${allowedLimit} opposing parties (calculated at ₹${PRICE_PER_OPPOSITION} per opposition based on ₹${amountPaid} paid). Please contact support or purchase additional slots.` },
        { status: 403 }
      );
    }

    // Generate timeline dates based on category-specific intervals
    const today = new Date();
    const isLoanRecovery = (category || "general-recovery") === "loan-recovery";

    // loan-recovery: Day 0, Day 3, Day 7, Day 14
    // general-recovery: Day 0, Day 7, Day 14, Day 21
    const step2Date = new Date(today.getTime() + (isLoanRecovery ? 3 : 7) * 24 * 60 * 60 * 1000);
    const step3Date = new Date(today.getTime() + (isLoanRecovery ? 7 : 14) * 24 * 60 * 60 * 1000);
    const step4Date = new Date(today.getTime() + (isLoanRecovery ? 14 : 21) * 24 * 60 * 60 * 1000);

    const formatDate = (d: Date) => {
      return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
    };

    const count = await db.collection("cases").countDocuments();
    const nextNum = String(count + 1).padStart(4, '0');
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const yearSuffix = today.getFullYear().toString().slice(-2);
    const caseId = `LR-${nextNum}-${day}${month}${yearSuffix}`;

    // Build category-specific timeline labels and descriptions
    const timelineSteps = isLoanRecovery
      ? [
        {
          step: 1,
          label: "First Notice",
          description: "Notice drafted. Ready to dispatch.",
          date: "Awaiting dispatch",
          status: "pending"
        },
        {
          step: 2,
          label: "Police Complaint",
          description: `Complaint dispatched to SHO of ${policeStationName} — 3 days after first notice`,
          date: formatDate(step2Date),
          status: "locked"
        },
        {
          step: 3,
          label: "Second Notice",
          description: "Second demand notice dispatched 7 days after first notice",
          date: formatDate(step3Date),
          status: "locked"
        },
        {
          step: 4,
          label: "Third Notice",
          description: "Final demand notice dispatched 7 days after second notice",
          date: formatDate(step4Date),
          status: "locked"
        }
      ]
      : [
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
          date: formatDate(step2Date),
          status: "locked"
        },
        {
          step: 3,
          label: "Third Notice",
          description: "Final demand notice prior to filing",
          date: formatDate(step3Date),
          status: "locked"
        },
        {
          step: 4,
          label: "SHO Criminal Complaint",
          description: `Drafted complaint copy shared for ${policeStationName}`,
          date: formatDate(step4Date),
          status: "locked"
        }
      ];

    const caseDoc = {
      userId, // Strictly link case to the authenticated client ObjectId
      caseId,
      category: category || "general-recovery",
      defaulterName,
      entityType,
      phone,
      phone2: phone2 || "",
      email,
      email2: email2 || "",
      address,
      stuckAmount: parseFloat(stuckAmount),
      dueDate,
      asOnDate: asOnDate || "",
      disbursementDate: disbursementDate || "",
      disbursedAmount: disbursedAmount ? parseFloat(disbursedAmount) : null,
      policeStationName,
      policeStationEmail,
      policeStationAddress,
      clientName: representee ? representee.name : (user.name || user.companyName || "Tech AMA"),
      clientEmail: representee ? representee.email : (user.email || ""),
      clientPhone: representee ? representee.phone : (user.phone || ""),
      clientAddress: representee ? representee.address : (user.address || (user.state ? `${user.state}, India` : "")),
      clientAuthRepName: representee ? (representee.authRepName || "") : "",
      clientAuthRepPhone: representee ? (representee.authRepPhone || "") : "",
      ...(representee ? { representeeId: representee._id } : {}),
      status: "active",
      currentStep: 1,
      createdAt: today.toISOString(),
      updatedAt: today.toISOString(),
      timeline: timelineSteps
    };

    const result = await db.collection("cases").insertOne(caseDoc);

    // Track total cases created persistently on user profile to prevent deletion exploits
    await db.collection("users").updateOne(
      { _id: userId },
      { $inc: { totalCasesCreated: 1 } }
    );

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
 * PATCH /api/cases - Updates a case status (e.g. to mark as recovered/stopped/paused/resumed).
 * Restricts updates strictly to the owning user or special admin accounts.
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

    let queryUserId: any = userId;
    const sessionUser = await db.collection("users").findOne({ _id: userId });
    const isSpecialAdmin = sessionUser && (
      sessionUser.phone?.replace(/\D/g, '').endsWith('8700343611') ||
      sessionUser.phone?.replace(/\D/g, '').endsWith('8130104447')
    );

    if (isSpecialAdmin) {
      const admins = await db.collection("users").find({
        phone: { $regex: /(8700343611|8130104447)$/ }
      }).toArray();
      const adminIds = admins.map(a => a._id);
      if (adminIds.length > 0) {
        queryUserId = { $in: adminIds };
      }
    }

    // Fetch the case to make sure it belongs to the user or pooled admin
    const existingCase = await db.collection("cases").findOne({
      _id: new ObjectId(id),
      userId: queryUserId
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
    } else if (status === "paused" || (status === "active" && existingCase.status === "paused")) {
      if (!isSpecialAdmin) {
        return NextResponse.json({ error: "Access denied. Feature restricted." }, { status: 403 });
      }

      if (status === "active" && existingCase.status === "paused") {
        // Resuming case: recalculate scheduledAt for future notices
        const formatDate = (d: Date) => d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
        const isLoanRecovery = existingCase.category === 'loan-recovery';
        if (existingCase.timeline) {
          let nextDate = new Date();
          updateDoc.timeline = existingCase.timeline.map((t: any) => {
            if (t.status === "scheduled") {
              const newScheduledAt = new Date(nextDate);
              const tCopy = {
                ...t,
                scheduledAt: newScheduledAt.toISOString(),
                date: formatDate(newScheduledAt)
              };
              const intervalDays = (isLoanRecovery && t.step === 2) ? 3 : (isLoanRecovery && t.step === 3) ? 4 : 7;
              nextDate.setDate(nextDate.getDate() + intervalDays);
              return tCopy;
            }
            return t;
          });
        }
      }
    }

    await db.collection("cases").updateOne(
      { _id: new ObjectId(id), userId: queryUserId },
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


/**
 * DELETE /api/cases - Deletes a case from the database.
 * Strictly restricted to administrators and authorized special staff (phones 8700343611 and 8130104447).
 * Normal users cannot delete cases once created to preserve legal audit logs and quota integrity.
 */
export async function DELETE(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || !(session.user as any).id) {
    return NextResponse.json({ error: "Unauthorized. Please log in first." }, { status: 401 });
  }

  try {
    const userId = new ObjectId((session.user as any).id);
    const body = await req.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json({ error: "Case ID is required." }, { status: 400 });
    }

    const { db } = await getDbAndBucket("fs");

    // Retrieve user record to verify authorization
    const user = await db.collection("users").findOne({ _id: userId });
    const userRole = (session.user as any).role;
    const userPhoneClean = user?.phone?.replace(/\D/g, "") || "";
    const isSpecialUser = userPhoneClean.endsWith("8700343611") || userPhoneClean.endsWith("8130104447") || userRole === "admin";

    if (!isSpecialUser) {
      return NextResponse.json(
        { 
          error: "Cases cannot be deleted once registered to preserve legal audit history and quota integrity. You may stop active notices using the Stop Notices option." 
        }, 
        { status: 403 }
      );
    }

    // Determine query filter for special users / admins
    let queryUserId: any = userId;
    if (userPhoneClean.endsWith("8700343611") || userPhoneClean.endsWith("8130104447")) {
      const admins = await db.collection("users").find({
        phone: { $regex: /(8700343611|8130104447)$/ }
      }).toArray();
      const adminIds = admins.map(a => a._id);
      if (adminIds.length > 0) {
        queryUserId = { $in: [...adminIds, ...adminIds.map(a => a.toString())] };
      }
    }

    const existingCase = await db.collection("cases").findOne({
      _id: new ObjectId(id),
      ...(userRole === "admin" ? {} : { userId: queryUserId })
    });

    if (!existingCase) {
      return NextResponse.json({ error: "Case not found or access denied." }, { status: 404 });
    }

    await db.collection("cases").deleteOne({
      _id: new ObjectId(id)
    });

    return NextResponse.json({
      success: true,
      message: "Case successfully deleted."
    });

  } catch (error: any) {
    console.error("DELETE Case API Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
