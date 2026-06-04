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
    const caseIdParam = searchParams.get("caseId"); // specific Case ID (string, e.g. LR-0001-040626)
    const search = searchParams.get("search") || "";

    // Mode 1: Fetch details of a single case by caseId (case number, e.g., LR-0001-040626)
    if (caseIdParam) {
      const caseDoc = await db.collection("cases").findOne({
        caseId: caseIdParam
      });

      if (!caseDoc) {
        return NextResponse.json(
          { error: "Case not found." },
          { status: 404 }
        );
      }

      // Fetch user account details
      let userAccount = null;
      if (caseDoc.userId) {
        try {
          userAccount = await db.collection("users").findOne({
            _id: new ObjectId(caseDoc.userId)
          }, {
            projection: { password: 0, otp: 0, otpExpires: 0 } // exclude secrets
          });
        } catch (e) {
          console.error("Error fetching user account details:", e);
        }
      }

      // Fetch all dispatch logs for this case
      const dispatchLogs = await db
        .collection("dispatch_logs")
        .find({
          $or: [
            { dbId: caseDoc._id },
            { caseId: caseDoc.caseId },
            { caseNumber: caseDoc.caseId }
          ]
        })
        .sort({ dispatchedAt: -1 })
        .toArray();

      // Fetch all client notifications for this case
      const clientNotifications = await db
        .collection("notifications")
        .find({
          caseId: caseDoc.caseId
        })
        .sort({ date: -1 })
        .toArray();

      return NextResponse.json({
        success: true,
        caseDetails: caseDoc,
        userAccount,
        dispatchLogs,
        clientNotifications
      });
    }

    // Mode 2: Search cases by search query (supporting caseId, clientName, defaulterName, phone, email)
    const pipeline: any[] = [];
    
    if (search) {
      const escapeRegex = (str: string) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const cleanSearch = escapeRegex(search.trim());
      pipeline.push({
        $match: {
          $or: [
            { caseId: { $regex: cleanSearch, $options: "i" } },
            { clientName: { $regex: cleanSearch, $options: "i" } },
            { clientEmail: { $regex: cleanSearch, $options: "i" } },
            { clientPhone: { $regex: cleanSearch, $options: "i" } },
            { defaulterName: { $regex: cleanSearch, $options: "i" } },
            { phone: { $regex: cleanSearch, $options: "i" } },
            { email: { $regex: cleanSearch, $options: "i" } }
          ]
        }
      });
    }

    // Sort by createdAt desc
    pipeline.push({ $sort: { createdAt: -1 } });
    
    // Limit search results for performance
    pipeline.push({ $limit: 100 });

    const cases = await db.collection("cases").aggregate(pipeline).toArray();

    return NextResponse.json({
      success: true,
      cases
    });

  } catch (error: any) {
    console.error("[Admin Cases Inspection API] Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
