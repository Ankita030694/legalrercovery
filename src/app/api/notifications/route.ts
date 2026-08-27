import { NextRequest, NextResponse } from "next/server";
import { getDbAndBucket } from "@/lib/mongodb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { ObjectId } from "mongodb";

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user || !(session.user as any).id) {
      return NextResponse.json({ error: "Unauthorized access. Please login." }, { status: 401 });
    }

    const userId = (session.user as any).id;
    const { db } = await getDbAndBucket("fs");

    let queryUserId: any = userId;
    const sessionUser = await db.collection("users").findOne({ _id: new ObjectId(userId) });
    if (sessionUser && (sessionUser.phone?.replace(/\D/g, '').endsWith('8700343611') || sessionUser.phone?.replace(/\D/g, '').endsWith('8130104447'))) {
      const admins = await db.collection("users").find({
        phone: { $regex: /(8700343611|8130104447)$/ }
      }).toArray();
      const adminIds = admins.map(a => a._id.toString());
      if (adminIds.length > 0) {
        queryUserId = { $in: adminIds };
      }
    }

    const isSpecialUser = !!(sessionUser && (sessionUser.phone?.replace(/\D/g, '').endsWith('8700343611') || sessionUser.phone?.replace(/\D/g, '').endsWith('8130104447')));

    // Fetch notifications matching this user, sorted by date in descending order
    const notifications = await db.collection("notifications")
      .find({ userId: queryUserId })
      .sort({ date: -1 })
      .toArray();

    // Fetch linked cases to enrich metadata (e.g. Loan ID, Accused phone, email, client name)
    const caseIds = [...new Set(notifications.map(n => n.caseId).filter(Boolean))];
    const caseDocs = caseIds.length > 0
      ? await db.collection("cases").find({ caseId: { $in: caseIds } }).toArray()
      : [];
    const caseMap = new Map(caseDocs.map(c => [c.caseId, c]));

    const enrichedNotifications = notifications.map(n => {
      const c = caseMap.get(n.caseId);
      if (!c) return n;

      const loanId = c.invoices?.[0]?.invoiceNo || c.invoiceNo || c.loanId || "";
      const accusedName = c.defaulterName || n.caseName || "";
      const accusedPhone = c.phone || "";
      const accusedPhone2 = c.phone2 || "";
      const accusedEmail = c.email || "";
      const accusedEmail2 = c.email2 || "";
      let clientName = c.clientName ? c.clientName.split(",")[0].trim() : "Client";
      const clientEmail = c.clientEmail || "";

      let senderRole = n.metadata?.senderRole;
      let senderDisplayName = n.metadata?.senderDisplayName;

      if (!senderRole && n.type === "email_reply") {
        const sender = (n.metadata?.senderEmail || "").toLowerCase().trim();
        const clientEmailLower = (clientEmail || "").toLowerCase().trim();
        if (
          (clientEmailLower && sender === clientEmailLower) ||
          sender.includes("actoloan") ||
          sender.includes("amalegalsolutions")
        ) {
          senderRole = "client";
          senderDisplayName = clientName;
        } else {
          senderRole = "accused";
          senderDisplayName = accusedName;
        }
      }

      let title = n.title;
      if (n.type === "email_reply" && senderRole === "client") {
        if (!title.includes("(Client)") && !title.toLowerCase().includes("actoloan")) {
          title = `Email reply from ${clientName} (Client)`;
        }
      }

      // Clean up description if it contains leaked Zoho CSS rule
      let description = n.description || "";
      if (description.includes("div.zm_") || description.includes("<style")) {
        description = description
          .replace(/<style\b[^>]*>([\s\S]*?)<\/style>/gi, "")
          .replace(/div\.zm_[^{\n]+\{[^}]*\}/gi, "")
          .trim();
      }

      return {
        ...n,
        title,
        description,
        metadata: {
          ...n.metadata,
          loanId: n.metadata?.loanId || loanId,
          accusedName: n.metadata?.accusedName || accusedName,
          accusedPhone: n.metadata?.accusedPhone || accusedPhone,
          accusedPhone2: n.metadata?.accusedPhone2 || accusedPhone2,
          accusedEmail: n.metadata?.accusedEmail || accusedEmail,
          accusedEmail2: n.metadata?.accusedEmail2 || accusedEmail2,
          clientName: n.metadata?.clientName || clientName,
          clientEmail: n.metadata?.clientEmail || clientEmail,
          senderRole: senderRole || "accused",
          senderDisplayName: senderDisplayName || (senderRole === "client" ? clientName : accusedName)
        }
      };
    });

    return NextResponse.json({ success: true, isSpecialUser, notifications: enrichedNotifications });
  } catch (error: any) {
    console.error("[Notifications API] GET Error:", error);
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user || !(session.user as any).id) {
      return NextResponse.json({ error: "Unauthorized access. Please login." }, { status: 401 });
    }

    const userId = (session.user as any).id;
    const payload = await req.json();
    const { notificationId, markAll } = payload;
    
    const { db } = await getDbAndBucket("fs");

    let queryUserId: any = userId;
    const sessionUser = await db.collection("users").findOne({ _id: new ObjectId(userId) });
    if (sessionUser && (sessionUser.phone?.replace(/\D/g, '').endsWith('8700343611') || sessionUser.phone?.replace(/\D/g, '').endsWith('8130104447'))) {
      const admins = await db.collection("users").find({
        phone: { $regex: /(8700343611|8130104447)$/ }
      }).toArray();
      const adminIds = admins.map(a => a._id.toString());
      if (adminIds.length > 0) {
        queryUserId = { $in: adminIds };
      }
    }

    if (markAll) {
      // Mark all unread notifications for this user as read
      const result = await db.collection("notifications").updateMany(
        { userId: queryUserId, isRead: false },
        { $set: { isRead: true } }
      );
      console.log(`[Notifications API] Marked all notifications as read. Affected: ${result.modifiedCount}`);
      return NextResponse.json({ success: true, modifiedCount: result.modifiedCount });
    }

    if (!notificationId) {
      return NextResponse.json({ error: "Missing notificationId" }, { status: 400 });
    }

    // Mark single notification as read
    const result = await db.collection("notifications").updateOne(
      { _id: new ObjectId(notificationId), userId: queryUserId },
      { $set: { isRead: true } }
    );

    console.log(`[Notifications API] Marked single notification read: ${notificationId}`);
    return NextResponse.json({ success: true, modifiedCount: result.modifiedCount });
  } catch (error: any) {
    console.error("[Notifications API] PUT Error:", error);
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user || !(session.user as any).id) {
      return NextResponse.json({ error: "Unauthorized access. Please login." }, { status: 401 });
    }

    const userId = (session.user as any).id;
    const url = new URL(req.url);
    const notificationId = url.searchParams.get("id");
    const clearAll = url.searchParams.get("clearAll");

    const { db } = await getDbAndBucket("fs");

    let queryUserId: any = userId;
    const sessionUser = await db.collection("users").findOne({ _id: new ObjectId(userId) });
    if (sessionUser && (sessionUser.phone?.replace(/\D/g, '').endsWith('8700343611') || sessionUser.phone?.replace(/\D/g, '').endsWith('8130104447'))) {
      const admins = await db.collection("users").find({
        phone: { $regex: /(8700343611|8130104447)$/ }
      }).toArray();
      const adminIds = admins.map(a => a._id.toString());
      if (adminIds.length > 0) {
        queryUserId = { $in: adminIds };
      }
    }

    if (clearAll === "true") {
      // Delete all notifications for this user
      const result = await db.collection("notifications").deleteMany({ userId: queryUserId });
      console.log(`[Notifications API] Cleared all notifications. Deleted: ${result.deletedCount}`);
      return NextResponse.json({ success: true, deletedCount: result.deletedCount });
    }

    if (!notificationId) {
      return NextResponse.json({ error: "Missing notificationId parameter" }, { status: 400 });
    }

    // Delete single notification
    const result = await db.collection("notifications").deleteOne({
      _id: new ObjectId(notificationId),
      userId: queryUserId
    });

    console.log(`[Notifications API] Deleted notification: ${notificationId}`);
    return NextResponse.json({ success: true, deletedCount: result.deletedCount });
  } catch (error: any) {
    console.error("[Notifications API] DELETE Error:", error);
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}
