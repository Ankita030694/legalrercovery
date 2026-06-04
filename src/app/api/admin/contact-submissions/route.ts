import { NextRequest, NextResponse } from "next/server";
import { getDbAndBucket } from "@/lib/mongodb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export const dynamic = "force-dynamic";

function escapeRegex(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export async function GET(req: NextRequest) {
  // Validate NextAuth session
  const session = await getServerSession(authOptions);
  if (
    !session ||
    !(session.user as any).id ||
    (session.user as any).role !== "admin"
  ) {
    return NextResponse.json(
      { error: "Unauthorized. Admin access required." },
      { status: 401 }
    );
  }

  try {
    const { db } = await getDbAndBucket("fs");

    // Parse query params
    const url = new URL(req.url);
    const page = Math.max(1, parseInt(url.searchParams.get("page") || "1"));
    const limit = Math.min(
      500,
      Math.max(1, parseInt(url.searchParams.get("limit") || "50"))
    );
    const search = (url.searchParams.get("search") || "").trim();
    const category = (url.searchParams.get("category") || "all").trim();

    const skip = (page - 1) * limit;

    // Build filter query
    const filters: any[] = [];

    // Filter by category
    if (category && category !== "all") {
      filters.push({ serviceCategory: category });
    }

    // Fuzzy search across fields (escaped to prevent ReDoS)
    if (search) {
      const cleanSearch = escapeRegex(search);
      filters.push({
        $or: [
          { name: { $regex: cleanSearch, $options: "i" } },
          { email: { $regex: cleanSearch, $options: "i" } },
          { phone: { $regex: cleanSearch, $options: "i" } },
          { state: { $regex: cleanSearch, $options: "i" } },
          { message: { $regex: cleanSearch, $options: "i" } },
          { serviceCategory: { $regex: cleanSearch, $options: "i" } }
        ]
      });
    }

    const query = filters.length > 0 ? { $and: filters } : {};

    // 1. Get metrics for the summary tiles
    const [totalSubmissions, categoryBreakdown] = await Promise.all([
      db.collection("contact_submissions").countDocuments({}),
      db.collection("contact_submissions").aggregate([
        { $group: { _id: "$serviceCategory", count: { $sum: 1 } } }
      ]).toArray()
    ]);

    // 2. Fetch paginated records matching the filters
    const [totalFiltered, docs] = await Promise.all([
      db.collection("contact_submissions").countDocuments(query),
      db
        .collection("contact_submissions")
        .find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .toArray()
    ]);

    // Format category stats
    const categoriesStats: Record<string, number> = {};
    categoryBreakdown.forEach((item) => {
      if (item._id) {
        categoriesStats[item._id] = item.count;
      }
    });

    const items = docs.map((doc: any) => ({
      id: doc._id.toString(),
      name: doc.name || "Anonymous",
      email: doc.email || "",
      phone: doc.phone || "",
      serviceCategory: doc.serviceCategory || "Not Specified",
      state: doc.state || "Not Specified",
      message: doc.message || "",
      source: doc.source || "contact-form",
      userAgent: doc.userAgent || "",
      ip: doc.ip || "",
      createdAt: doc.createdAt || new Date().toISOString()
    }));

    return NextResponse.json({
      success: true,
      summary: {
        totalSubmissions,
        categoriesStats
      },
      items,
      totalFiltered,
      hasMore: skip + items.length < totalFiltered,
      page,
      limit
    });

  } catch (error: any) {
    console.error("[Contact Submissions API] Error fetching records:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
