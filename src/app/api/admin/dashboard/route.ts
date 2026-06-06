import { NextResponse } from "next/server";
import { getDbAndBucket } from "@/lib/mongodb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET() {
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

    // ── Parallel queries ──
    const [
      totalUsers,
      pendingVerificationCount,
      pendingPaymentCount,
      revenueResult,
      claimedResult,
      recoveredResult,
    ] = await Promise.all([
      // Total paid/active users (excluding admin/unlimited accounts)
      db.collection("users").countDocuments({ isPaid: true, hasUnlimitedCases: { $ne: true } }),

      // Leads stuck at OTP
      db.collection("pending_verification").countDocuments({}),

      // Leads stuck at payment
      db.collection("pending_payment").countDocuments({}),

      // Sum of all amountPaid across paid users (excluding admin/unlimited accounts)
      db
        .collection("users")
        .aggregate([
          { $match: { isPaid: true, hasUnlimitedCases: { $ne: true } } },
          { $group: { _id: null, total: { $sum: "$amountPaid" } } },
        ])
        .toArray(),

      // Sum of all stuckAmount across all cases (Total Claimed)
      db
        .collection("cases")
        .aggregate([
          { $group: { _id: null, totalClaimed: { $sum: "$stuckAmount" } } },
        ])
        .toArray(),

      // Sum of all recoveredAmount (or stuckAmount fallback) where status is "recovered"
      db
        .collection("cases")
        .aggregate([
          { $match: { status: "recovered" } },
          {
            $group: {
              _id: null,
              totalRecovered: {
                $sum: { $ifNull: ["$recoveredAmount", "$stuckAmount"] }
              }
            }
          }
        ])
        .toArray(),
    ]);

    const totalRevenue =
      revenueResult.length > 0 ? revenueResult[0].total : 0;
    const totalClaimed =
      claimedResult.length > 0 ? claimedResult[0].totalClaimed : 0;
    const totalRecovered =
      recoveredResult.length > 0 ? recoveredResult[0].totalRecovered : 0;
    const totalLeads = totalUsers + pendingVerificationCount + pendingPaymentCount;

    return NextResponse.json({
      success: true,
      stats: {
        totalRevenue,
        totalUsers,
        totalLeads,
        pendingVerificationCount,
        pendingPaymentCount,
        totalClaimed,
        totalRecovered,
        conversionRate:
          totalLeads > 0
            ? parseFloat(((totalUsers / totalLeads) * 100).toFixed(2))
            : 0,
      },
    });
  } catch (error: any) {
    console.error("[Dashboard API] Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
