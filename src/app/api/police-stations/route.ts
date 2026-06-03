import { NextRequest, NextResponse } from "next/server";
import { getDbAndBucket } from "@/lib/mongodb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export const dynamic = 'force-dynamic';

/**
 * GET /api/police-stations - Retrieves the database list of police headquarters.
 * Access is restricted to authenticated users.
 */
export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || !(session.user as any).id) {
    return NextResponse.json({ error: "Unauthorized. Please log in first." }, { status: 401 });
  }

  try {
    const { db } = await getDbAndBucket();
    const stations = await db
      .collection("police_stations")
      .find({})
      .toArray();

    return NextResponse.json({ success: true, count: stations.length, data: stations });
  } catch (error: any) {
    console.error("GET Police Stations API Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
