import { NextResponse } from "next/server";
import { getSearchPerformance, inspectUrl, listAccessibleSites } from "@/lib/gsc";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const key = searchParams.get("key") || request.headers.get("x-api-key");

    // Optional admin key verification
    if (process.env.ADMIN_API_KEY && key !== process.env.ADMIN_API_KEY) {
      return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
    }

    const mode = searchParams.get("mode") || "performance";

    if (mode === "sites") {
      const sites = await listAccessibleSites();
      return NextResponse.json({ success: true, sites });
    }

    if (mode === "inspect") {
      const targetUrl = searchParams.get("url");
      if (!targetUrl) {
        return NextResponse.json(
          { error: "Query parameter 'url' is required for inspection mode." },
          { status: 400 }
        );
      }
      const inspectionResult = await inspectUrl(targetUrl);
      return NextResponse.json({ success: true, result: inspectionResult });
    }

    // Default: fetch search analytics performance
    const limit = parseInt(searchParams.get("limit") || "25", 10);
    const startDate = searchParams.get("startDate") || undefined;
    const endDate = searchParams.get("endDate") || undefined;

    const rows = await getSearchPerformance({
      dimensions: ["query", "page"],
      rowLimit: limit,
      startDate,
      endDate,
    });

    return NextResponse.json({
      success: true,
      siteUrl: process.env.GSC_SITE_URL,
      count: rows.length,
      data: rows,
    });
  } catch (error: any) {
    console.error("GSC API Route Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "An error occurred while communicating with Google Search Console API.",
      },
      { status: 500 }
    );
  }
}
