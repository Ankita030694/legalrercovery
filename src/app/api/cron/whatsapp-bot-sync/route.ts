import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { getDbAndBucket } from "@/lib/mongodb";
import { syncWhatsAppBotSessions } from "@/lib/whatsapp-bot-sync";

export const dynamic = "force-dynamic";
export const maxDuration = 120;

/** Vercel cron (see vercel.json) or a signed-in admin. */
async function isAuthorized(req: NextRequest): Promise<boolean> {
  const cronSecret = process.env.CRON_SECRET;
  const header = req.headers.get("authorization") || "";
  if (cronSecret && header.startsWith("Bearer ")) {
    const a = crypto.createHash("sha256").update(header.slice(7)).digest();
    const b = crypto.createHash("sha256").update(cronSecret).digest();
    if (crypto.timingSafeEqual(a, b)) return true;
  }
  const session = await getServerSession(authOptions);
  return (session?.user as any)?.role === "admin";
}

export async function GET(req: NextRequest) {
  if (!(await isAuthorized(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const { db } = await getDbAndBucket("fs");
    const summary = await syncWhatsAppBotSessions(db);
    return NextResponse.json({ success: !summary.error, summary });
  } catch (error) {
    console.error("[WhatsApp Bot Sync] Failed:", error);
    return NextResponse.json({ error: "Sync failed" }, { status: 500 });
  }
}
