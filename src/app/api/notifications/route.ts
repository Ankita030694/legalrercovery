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

    // Fetch notifications matching this user, sorted by date in descending order
    const notifications = await db.collection("notifications")
      .find({ userId: queryUserId })
      .sort({ date: -1 })
      .toArray();

    return NextResponse.json({ success: true, notifications });
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
