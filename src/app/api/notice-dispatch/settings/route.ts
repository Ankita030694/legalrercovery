import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { getDbAndBucket } from "@/lib/mongodb";
import { authorizeSpecialUser } from "@/lib/dispatch-auth";
import { getDispatcherEmail, isValidDispatcherEmail, saveDispatcherEmail } from "@/lib/dispatch-settings";

export const dynamic = "force-dynamic";

/** GET /api/notice-dispatch/settings - The saved dispatcher email */
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    const { db } = await getDbAndBucket("fs");

    const authCheck = await authorizeSpecialUser(session, db);
    if (!authCheck.authorized) {
      return authCheck.errorResponse;
    }

    return NextResponse.json({ success: true, dispatcherEmail: await getDispatcherEmail(db) });
  } catch (error: any) {
    console.error("[Dispatch Settings] GET Error:", error);
    return NextResponse.json({ error: error?.message || "Internal server error" }, { status: 500 });
  }
}

/** PUT /api/notice-dispatch/settings - Changes the dispatcher email used for every future notice */
export async function PUT(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    const { db } = await getDbAndBucket("fs");

    const authCheck = await authorizeSpecialUser(session, db);
    if (!authCheck.authorized) {
      return authCheck.errorResponse;
    }

    const { dispatcherEmail } = await req.json();
    if (!isValidDispatcherEmail(dispatcherEmail)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const saved = await saveDispatcherEmail(db, dispatcherEmail, (authCheck.user as any)?.name || "Administrator");
    return NextResponse.json({ success: true, dispatcherEmail: saved });
  } catch (error: any) {
    console.error("[Dispatch Settings] PUT Error:", error);
    return NextResponse.json({ error: error?.message || "Internal server error" }, { status: 500 });
  }
}
