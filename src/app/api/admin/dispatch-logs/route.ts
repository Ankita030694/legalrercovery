import { NextRequest, NextResponse } from "next/server";
import { getDbAndBucket } from "@/lib/mongodb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

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
    const type = searchParams.get("type") || "history"; // history | scheduled | metrics
    const search = searchParams.get("search") || "";
    const escapeRegex = (str: string) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const cleanSearch = escapeRegex(search.trim());
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "50");
    const skip = (page - 1) * limit;

    if (type === "metrics") {
      // 1. Total Dispatched (logs count)
      const totalDispatched = await db.collection("dispatch_logs").countDocuments({});
      
      // 2. Failed Dispatches (at least one channel failed)
      const totalFailed = await db.collection("dispatch_logs").countDocuments({
        $or: [
          { "channels.email.status": "failed" },
          { "channels.whatsapp.status": "failed" }
        ]
      });

      // 3. Total Scheduled (count cases with timeline status = scheduled)
      const scheduledCountResult = await db.collection("cases").aggregate([
        { $match: { status: "active", "timeline.status": "scheduled" } },
        { $unwind: "$timeline" },
        { $match: { "timeline.status": "scheduled" } },
        { $count: "count" }
      ]).toArray();
      const totalScheduled = scheduledCountResult.length > 0 ? scheduledCountResult[0].count : 0;

      // 4. Scheduled in next 24 hours
      const now = new Date();
      const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);
      const scheduledSoonResult = await db.collection("cases").aggregate([
        { $match: { status: "active", "timeline.status": "scheduled" } },
        { $unwind: "$timeline" },
        { 
          $match: { 
            "timeline.status": "scheduled",
            "timeline.scheduledAt": { 
              $gte: now.toISOString(),
              $lte: tomorrow.toISOString()
            }
          } 
        },
        { $count: "count" }
      ]).toArray();
      const scheduledSoon = scheduledSoonResult.length > 0 ? scheduledSoonResult[0].count : 0;

      return NextResponse.json({
        success: true,
        metrics: {
          totalDispatched,
          totalFailed,
          totalScheduled,
          scheduledSoon
        }
      });
    }

    if (type === "scheduled") {
      // Aggregate scheduled timeline items from active cases
      const pipeline: any[] = [
        {
          $match: {
            status: "active",
            "timeline.status": "scheduled"
          }
        }
      ];

      if (cleanSearch) {
        pipeline.push({
          $match: {
            $or: [
              { clientName: { $regex: cleanSearch, $options: "i" } },
              { clientEmail: { $regex: cleanSearch, $options: "i" } },
              { clientPhone: { $regex: cleanSearch, $options: "i" } },
              { defaulterName: { $regex: cleanSearch, $options: "i" } },
              { caseId: { $regex: cleanSearch, $options: "i" } }
            ]
          }
        });
      }

      pipeline.push(
        { $unwind: "$timeline" },
        { $match: { "timeline.status": "scheduled" } },
        {
          $project: {
            _id: 1,
            caseId: 1,
            clientName: 1,
            clientEmail: 1,
            clientPhone: 1,
            defaulterName: 1,
            stuckAmount: 1,
            step: "$timeline.step",
            label: "$timeline.label",
            scheduledAt: "$timeline.scheduledAt",
            dateText: "$timeline.date",
            description: "$timeline.description"
          }
        },
        { $sort: { scheduledAt: 1 } }
      );

      // Execute counts on the match before skip/limit for pagination
      const allScheduled = await db.collection("cases").aggregate(pipeline).toArray();
      const total = allScheduled.length;
      
      // Slice manually
      const paginatedData = allScheduled.slice(skip, skip + limit);

      return NextResponse.json({
        success: true,
        total,
        page,
        limit,
        data: paginatedData
      });
    }

    // Default: history (dispatch_logs)
    const pipeline: any[] = [];

    // Join with cases to fetch matching info
    pipeline.push(
      {
        $lookup: {
          from: "cases",
          let: { dbIdVal: "$dbId", caseIdVal: "$caseId" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $or: [
                    { $eq: ["$_id", "$$dbIdVal"] },
                    { $eq: ["$_id", "$$caseIdVal"] },
                    { $eq: ["$caseId", "$$caseIdVal"] }
                  ]
                }
              }
            }
          ],
          as: "caseInfo"
        }
      },
      {
        $unwind: {
          path: "$caseInfo",
          preserveNullAndEmptyArrays: true
        }
      }
    );

    if (cleanSearch) {
      pipeline.push({
        $match: {
          $or: [
            { "caseInfo.clientName": { $regex: cleanSearch, $options: "i" } },
            { "caseInfo.clientEmail": { $regex: cleanSearch, $options: "i" } },
            { "caseInfo.clientPhone": { $regex: cleanSearch, $options: "i" } },
            { "caseInfo.defaulterName": { $regex: cleanSearch, $options: "i" } },
            { "caseInfo.caseId": { $regex: cleanSearch, $options: "i" } },
            { caseNumber: { $regex: cleanSearch, $options: "i" } },
            { clientName: { $regex: cleanSearch, $options: "i" } },
            { defaulterName: { $regex: cleanSearch, $options: "i" } }
          ]
        }
      });
    }

    // Sort by dispatchedAt desc
    pipeline.push({ $sort: { dispatchedAt: -1 } });

    // Count before skip/limit
    const totalCountResult = await db.collection("dispatch_logs").aggregate([...pipeline, { $count: "count" }]).toArray();
    const total = totalCountResult.length > 0 ? totalCountResult[0].count : 0;

    // Add skip/limit
    pipeline.push({ $skip: skip }, { $limit: limit });

    const logs = await db.collection("dispatch_logs").aggregate(pipeline).toArray();

    return NextResponse.json({
      success: true,
      total,
      page,
      limit,
      data: logs.map(log => ({
        _id: log._id,
        caseNumber: log.caseNumber || log.caseId || (log.caseInfo ? log.caseInfo.caseId : ""),
        step: log.step,
        dispatchedAt: log.dispatchedAt,
        recipientEmail: log.recipientEmail,
        recipientPhone: log.recipientPhone,
        channels: log.channels,
        noticeRef: log.noticeRef,
        clientName: log.clientName || (log.caseInfo ? log.caseInfo.clientName : ""),
        clientPhone: log.clientPhone || (log.caseInfo ? log.caseInfo.clientPhone : ""),
        clientEmail: log.clientEmail || (log.caseInfo ? log.caseInfo.clientEmail : ""),
        defaulterName: log.defaulterName || (log.caseInfo ? log.caseInfo.defaulterName : "")
      }))
    });

  } catch (error: any) {
    console.error("[Dispatch Logs API] Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
