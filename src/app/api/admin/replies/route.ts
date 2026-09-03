import { NextRequest, NextResponse } from "next/server";
import { getDbAndBucket } from "@/lib/mongodb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export const dynamic = "force-dynamic";

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

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
    const channel = searchParams.get("channel") || "all"; // all | email | whatsapp
    const senderRole = searchParams.get("senderRole") || "all"; // all | accused | client
    const search = searchParams.get("search") || "";
    const cleanSearch = escapeRegex(search.trim());
    const page = Math.max(1, parseInt(searchParams.get("page") || "1"));
    const limit = Math.min(100, Math.max(1, parseInt(searchParams.get("limit") || "20")));
    const skip = (page - 1) * limit;

    // ── 1. Metrics Mode ──
    if (type === "metrics") {
      const startOfToday = new Date();
      startOfToday.setHours(0, 0, 0, 0);

      const [
        totalReplies,
        emailReplies,
        whatsappReplies,
        repliesToday,
        accusedReplies,
        clientReplies,
        dispatcherReplies
      ] = await Promise.all([
        // Total Inbound Replies
        db.collection("notifications").countDocuments({
          type: { $in: ["email_reply", "whatsapp_reply"] }
        }),

        // Email Inbound
        db.collection("notifications").countDocuments({
          type: "email_reply"
        }),

        // WhatsApp Inbound
        db.collection("notifications").countDocuments({
          type: "whatsapp_reply"
        }),

        // Replies received today
        db.collection("notifications").countDocuments({
          type: { $in: ["email_reply", "whatsapp_reply"] },
          date: { $gte: startOfToday.toISOString() }
        }),

        // Accused Sender Replies
        db.collection("notifications").countDocuments({
          type: { $in: ["email_reply", "whatsapp_reply"] },
          "metadata.senderRole": { $nin: ["client", "dispatcher"] }
        }),

        // Client Sender Replies
        db.collection("notifications").countDocuments({
          type: { $in: ["email_reply", "whatsapp_reply"] },
          "metadata.senderRole": "client"
        }),

        // Dispatcher Sender Replies
        db.collection("notifications").countDocuments({
          type: { $in: ["email_reply", "whatsapp_reply"] },
          "metadata.senderRole": "dispatcher"
        })
      ]);

      return NextResponse.json({
        success: true,
        metrics: {
          totalReplies,
          emailReplies,
          whatsappReplies,
          repliesToday,
          accusedReplies,
          clientReplies,
          dispatcherReplies
        }
      });
    }

    // ── 2. List & Query Mode with MongoDB Aggregation ──
    const matchConditions: any = {
      type: { $in: ["email_reply", "whatsapp_reply"] }
    };

    if (channel === "email") {
      matchConditions.type = "email_reply";
    } else if (channel === "whatsapp") {
      matchConditions.type = "whatsapp_reply";
    }

    if (senderRole === "client") {
      matchConditions["metadata.senderRole"] = "client";
    } else if (senderRole === "dispatcher") {
      matchConditions["metadata.senderRole"] = "dispatcher";
    } else if (senderRole === "accused") {
      matchConditions["metadata.senderRole"] = { $nin: ["client", "dispatcher"] };
    }

    const pipeline: any[] = [{ $match: matchConditions }];

    // Lookup join with cases collection for complete debtor and victim context
    pipeline.push(
      {
        $lookup: {
          from: "cases",
          localField: "caseId",
          foreignField: "caseId",
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

    // Apply Search Filter across multiple fields
    if (cleanSearch) {
      pipeline.push({
        $match: {
          $or: [
            { caseId: { $regex: cleanSearch, $options: "i" } },
            { caseName: { $regex: cleanSearch, $options: "i" } },
            { title: { $regex: cleanSearch, $options: "i" } },
            { description: { $regex: cleanSearch, $options: "i" } },
            { "metadata.senderEmail": { $regex: cleanSearch, $options: "i" } },
            { "metadata.senderPhone": { $regex: cleanSearch, $options: "i" } },
            { "metadata.senderDisplayName": { $regex: cleanSearch, $options: "i" } },
            { "metadata.batchId": { $regex: cleanSearch, $options: "i" } },
            { "metadata.accusedName": { $regex: cleanSearch, $options: "i" } },
            { "metadata.accusedPhone": { $regex: cleanSearch, $options: "i" } },
            { "metadata.accusedEmail": { $regex: cleanSearch, $options: "i" } },
            { "metadata.loanId": { $regex: cleanSearch, $options: "i" } },
            { "metadata.subject": { $regex: cleanSearch, $options: "i" } },
            { "metadata.clientName": { $regex: cleanSearch, $options: "i" } },
            { "metadata.clientEmail": { $regex: cleanSearch, $options: "i" } },
            { "caseInfo.clientName": { $regex: cleanSearch, $options: "i" } },
            { "caseInfo.defaulterName": { $regex: cleanSearch, $options: "i" } },
            { "caseInfo.phone": { $regex: cleanSearch, $options: "i" } },
            { "caseInfo.email": { $regex: cleanSearch, $options: "i" } },
            { "caseInfo.invoiceNo": { $regex: cleanSearch, $options: "i" } },
            { "caseInfo.loanId": { $regex: cleanSearch, $options: "i" } }
          ]
        }
      });
    }

    // Sort by newest date first
    pipeline.push({ $sort: { date: -1, _id: -1 } });

    // Count total matching items
    const countPipeline = [...pipeline, { $count: "total" }];
    const countResult = await db.collection("notifications").aggregate(countPipeline).toArray();
    const total = countResult.length > 0 ? countResult[0].total : 0;

    // Apply pagination
    pipeline.push({ $skip: skip }, { $limit: limit });

    const rawReplies = await db.collection("notifications").aggregate(pipeline).toArray();

    // Map and sanitize response items
    const data = rawReplies.map((n: any) => {
      const c = n.caseInfo;
      const loanId = n.metadata?.loanId || c?.invoices?.[0]?.invoiceNo || c?.invoiceNo || c?.loanId || "";
      const accusedName = n.metadata?.accusedName || c?.defaulterName || n.caseName || "Borrower";
      const accusedPhone = n.metadata?.accusedPhone || c?.phone || "";
      const accusedPhone2 = n.metadata?.accusedPhone2 || c?.phone2 || "";
      const accusedEmail = n.metadata?.accusedEmail || c?.email || "";
      const accusedEmail2 = n.metadata?.accusedEmail2 || c?.email2 || "";
      let clientName = n.metadata?.clientName || (c?.clientName ? c.clientName.split(",")[0].trim() : "Client");
      const clientEmail = n.metadata?.clientEmail || c?.clientEmail || "";
      const clientPhone = c?.clientPhone || "";

      let senderRole = n.metadata?.senderRole;
      if (!senderRole && n.type === "email_reply") {
        const sender = (n.metadata?.senderEmail || "").toLowerCase().trim();
        const clientEmailLower = (clientEmail || "").toLowerCase().trim();
        if (
          (clientEmailLower && sender === clientEmailLower) ||
          sender.includes("actoloan") ||
          sender.includes("amalegalsolutions")
        ) {
          senderRole = "client";
        } else {
          senderRole = "accused";
        }
      }

      // Clean CSS rules if any leaked from email formatting
      let description = n.description || "";
      if (description.includes("div.zm_") || description.includes("<style")) {
        description = description
          .replace(/<style\b[^>]*>([\s\S]*?)<\/style>/gi, "")
          .replace(/div\.zm_[^{\n]+\{[^}]*\}/gi, "")
          .trim();
      }

      return {
        _id: n._id.toString(),
        userId: n.userId?.toString() || "",
        caseId: n.caseId || (c ? c.caseId : ""),
        caseName: n.caseName || accusedName,
        type: n.type as "email_reply" | "whatsapp_reply",
        title: n.title || "",
        description: description,
        date: n.date || new Date().toISOString(),
        isRead: !!n.isRead,
        metadata: {
          messageId: n.metadata?.messageId || "",
          senderEmail: n.metadata?.senderEmail || (n.type === "email_reply" ? accusedEmail : ""),
          senderPhone: n.metadata?.senderPhone || (n.type === "whatsapp_reply" ? accusedPhone : ""),
          senderRole: senderRole || "accused",
          senderDisplayName: senderRole === "dispatcher" ? (n.metadata?.senderDisplayName || "Dispatcher") : senderRole === "client" ? clientName : accusedName,
          batchId: n.metadata?.batchId || "",
          subject: n.metadata?.subject || "",
          loanId: loanId,
          accusedName: accusedName,
          accusedPhone: accusedPhone,
          accusedPhone2: accusedPhone2,
          accusedEmail: accusedEmail,
          accusedEmail2: accusedEmail2,
          clientName: clientName,
          clientEmail: clientEmail,
          clientPhone: clientPhone,
          claimAmount: c?.stuckAmount || 0,
          caseStatus: c?.status || "active"
        }
      };
    });

    return NextResponse.json({
      success: true,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit) || 1,
      data
    });

  } catch (error: any) {
    console.error("[Admin Replies API] Error:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
