import { NextRequest, NextResponse } from "next/server";
import { getDbAndBucket } from "@/lib/mongodb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { ObjectId } from "mongodb";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
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
    const searchParams = req.nextUrl.searchParams;
    const type = searchParams.get("type") || "list"; // list | metrics
    const search = searchParams.get("search") || "";
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "50");
    const skip = (page - 1) * limit;

    if (type === "metrics") {
      // 1. Total Successful Transactions
      const totalTxns = await db.collection("transactions").countDocuments({ status: "success" });

      // 2. Total Successful Revenue
      const revenueResult = await db.collection("transactions").aggregate([
        { $match: { status: "success" } },
        { $group: { _id: null, total: { $sum: "$amount" } } }
      ]).toArray();
      const totalRevenue = revenueResult.length > 0 ? revenueResult[0].total : 0;

      // 3. Transactions Today
      const startOfToday = new Date();
      startOfToday.setHours(0, 0, 0, 0);
      const txnsToday = await db.collection("transactions").countDocuments({
        createdAt: { $gte: startOfToday }
      });

      // 4. Failed Transactions count
      const totalFailed = await db.collection("transactions").countDocuments({
        status: { $ne: "success" }
      });

      return NextResponse.json({
        success: true,
        metrics: {
          totalTxns,
          totalRevenue,
          txnsToday,
          totalFailed
        }
      });
    }

    // Default: List transactions with lookup join to users
    const pipeline: any[] = [];

    // Join with users to fetch clientName if stored inside users collection
    pipeline.push(
      {
        $lookup: {
          from: "users",
          localField: "userId",
          foreignField: "_id",
          as: "userInfo"
        }
      },
      {
        $unwind: {
          path: "$userInfo",
          preserveNullAndEmptyArrays: true
        }
      }
    );

    // Apply search query
    if (search) {
      const escapeRegex = (str: string) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const cleanSearch = escapeRegex(search.trim());
      pipeline.push({
        $match: {
          $or: [
            { payuTxnId: { $regex: cleanSearch, $options: "i" } },
            { phone: { $regex: cleanSearch, $options: "i" } },
            { email: { $regex: cleanSearch, $options: "i" } },
            { "userInfo.name": { $regex: cleanSearch, $options: "i" } },
            { "userInfo.companyName": { $regex: cleanSearch, $options: "i" } }
          ]
        }
      });
    }

    // Sort by paymentDate / createdAt desc
    pipeline.push({ $sort: { createdAt: -1 } });

    // Count total matched records
    const totalCountResult = await db.collection("transactions").aggregate([...pipeline, { $count: "count" }]).toArray();
    const total = totalCountResult.length > 0 ? totalCountResult[0].count : 0;

    // Apply skip/limit
    pipeline.push({ $skip: skip }, { $limit: limit });

    const txns = await db.collection("transactions").aggregate(pipeline).toArray();

    return NextResponse.json({
      success: true,
      total,
      page,
      limit,
      data: txns.map(txn => ({
        _id: txn._id,
        userId: txn.userId,
        clientName: txn.userInfo?.name || txn.userInfo?.companyName || "Unknown Client",
        phone: txn.phone || txn.userInfo?.phone || "",
        email: txn.email || txn.userInfo?.email || "",
        payuTxnId: txn.payuTxnId,
        amount: txn.amount,
        status: txn.status || "success",
        oppositionCount: txn.oppositionCount || 1,
        createdAt: txn.createdAt || txn.paymentDate
      }))
    });

  } catch (error: any) {
    console.error("[Transactions Admin API] GET Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
