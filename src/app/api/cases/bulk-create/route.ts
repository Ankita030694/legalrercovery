import { NextRequest, NextResponse } from "next/server";
import { getDbAndBucket } from "@/lib/mongodb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { ObjectId } from "mongodb";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  // 1. Authenticate user
  const session = await getServerSession(authOptions);
  if (!session || !(session.user as any).id) {
    return NextResponse.json({ error: "Unauthorized. Please log in first." }, { status: 401 });
  }

  try {
    const userId = new ObjectId((session.user as any).id);
    const { db } = await getDbAndBucket("fs");

    // 2. Verify user has advocate privileges (hasUnlimitedCases === true)
    const user = await db.collection("users").findOne({ _id: userId });
    if (!user || user.hasUnlimitedCases !== true) {
      return NextResponse.json({ error: "Access denied. Only advocate profiles can create bulk recoveries." }, { status: 403 });
    }

    const body = await req.json();
    const { cases, representeeId, category } = body;

    if (!cases || !Array.isArray(cases) || cases.length === 0) {
      return NextResponse.json({ error: "No cases provided for creation." }, { status: 400 });
    }

    // 3. Handle representation association if representeeId is provided
    let representee = null;
    if (representeeId && representeeId !== "self") {
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

    const today = new Date();
    const oneWeekLater = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    const twoWeeksLater = new Date(today.getTime() + 14 * 24 * 60 * 60 * 1000);
    const threeWeeksLater = new Date(today.getTime() + 21 * 24 * 60 * 60 * 1000);

    const formatDate = (d: Date) => {
      return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
    };

    // Retrieve the current count of cases to generate sequential, unique collision-free caseIds
    const initialCount = await db.collection("cases").countDocuments();
    const dayVal = today.getDate();
    const monthVal = today.getMonth() + 1;
    const yearSuffix = today.getFullYear().toString().slice(-2);

    const caseDocs = cases.map((c, index) => {
      const nextNum = String(initialCount + index + 1).padStart(4, '0');
      const caseId = `LR-${nextNum}-${dayVal}${monthVal}${yearSuffix}`;

      // Clean phone and email
      const cleanPhone = c.phone ? c.phone.trim().replace(/\D/g, "") : "";
      const cleanPhone2 = c.phone2 ? c.phone2.trim().replace(/\D/g, "") : "";
      const cleanEmail = c.email ? c.email.toLowerCase().trim() : "";
      const cleanEmail2 = c.email2 ? c.email2.toLowerCase().trim() : "";

      return {
        userId,
        caseId,
        defaulterName: c.defaulterName ? c.defaulterName.trim() : "Unknown Defaulter",
        entityType: c.entityType || "Company",
        phone: cleanPhone,
        phone2: cleanPhone2,
        email: cleanEmail,
        email2: cleanEmail2,
        ccEmails: c.ccEmails ? c.ccEmails.trim() : "",
        address: c.address ? c.address.trim() : "",
        stuckAmount: parseFloat(c.stuckAmount) || 0,
        dueDate: c.dueDate || today.toISOString().split("T")[0],
        policeStationName: c.policeStationName || "",
        policeStationEmail: c.policeStationEmail || "",
        policeStationAddress: c.policeStationAddress || "",
        clientName: representee ? representee.name : (user.name || user.companyName || "Tech AMA"),
        clientEmail: representee ? representee.email : (user.email || ""),
        clientPhone: representee ? representee.phone : (user.phone || ""),
        clientAddress: representee ? representee.address : (user.address || ""),
        clientAuthRepName: representee ? (representee.authRepName || "") : "",
        clientAuthRepPhone: representee ? (representee.authRepPhone || "") : "",
        ...(representee ? { representeeId: representee._id } : {}),
        invoiceNo: c.invoiceNo || "",
        invoiceDate: c.invoiceDate || "",
        asOnDate: c.asOnDate || "",
        disbursementDate: c.disbursementDate || "",
        disbursedAmount: parseFloat(c.disbursedAmount) || null,
        invoices: Array.isArray(c.invoices) ? c.invoices : [],
        status: "active",
        category: category || "general-recovery",
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
            label: "Police Complaint Draft", 
            description: "Drafted complaint copy shared with SHO", 
            date: formatDate(threeWeeksLater), 
            status: "locked" 
          }
        ]
      };
    });

    // Bulk insert into the collection
    const result = await db.collection("cases").insertMany(caseDocs);

    return NextResponse.json({
      success: true,
      message: `Successfully created ${result.insertedCount} cases in bulk.`,
      insertedCount: result.insertedCount
    });

  } catch (error: any) {
    console.error("Bulk Create Cases API Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
