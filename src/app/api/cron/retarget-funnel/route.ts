import { NextRequest, NextResponse } from "next/server";
import { getDbAndBucket } from "@/lib/mongodb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import {
  runAutomatedFunnelQueue,
  startWave1ForAllUnpaidLeads,
} from "@/lib/funnel-dispatcher";

export const maxDuration = 300;
export const dynamic = "force-dynamic";

async function handleCron(req: NextRequest) {
  const session = await getServerSession(authOptions);
  const isAdminSession =
    Boolean(session) &&
    ((session?.user as any)?.role === "admin" ||
      (session?.user as any)?.id === "admin-env-root" ||
      (session?.user as any)?.email === "admin@legalrecovery.in");

  if (!isAdminSession && process.env.NODE_ENV === "production") {
    const authHeader = req.headers.get("Authorization");
    const cronSecret = process.env.CRON_SECRET;
    if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json({ error: "Unauthorized cron request." }, { status: 401 });
    }
  }

  try {
    const { db } = await getDbAndBucket("fs");
    const url = new URL(req.url);
    const mode = url.searchParams.get("mode");
    const force = url.searchParams.get("force") === "true" || isAdminSession;

    if (mode === "start_wave_1") {
      const batchSummary = await startWave1ForAllUnpaidLeads(db, {
        batchLimit: 500,
      });
      return NextResponse.json({
        success: true,
        mode: "start_wave_1",
        timestamp: new Date().toISOString(),
        ...batchSummary,
      });
    }

    const summary = await runAutomatedFunnelQueue(db, {
      forceRunWhenPaused: force,
      batchLimit: 50,
    });

    return NextResponse.json({
      success: true,
      timestamp: new Date().toISOString(),
      ...summary,
    });
  } catch (error: any) {
    console.error("[Retarget Funnel Cron Error]:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to execute retargeting funnel queue" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  return handleCron(req);
}

export async function POST(req: NextRequest) {
  return handleCron(req);
}
