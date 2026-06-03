import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export async function GET(req: NextRequest) {
  // 1. Validate NextAuth session (only authorized admin personnel can proxy images)
  const session = await getServerSession(authOptions);
  if (!session || (session.user as any).role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const imageUrl = searchParams.get("url");

  if (!imageUrl) {
    return NextResponse.json({ error: "Missing image url parameter" }, { status: 400 });
  }

  try {
    // Robustly handle base64 data URLs directly
    if (imageUrl.startsWith("data:")) {
      const matches = imageUrl.match(/^data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+);base64,(.*)$/);
      if (!matches) {
        throw new Error("Invalid base64 data URL format");
      }
      const contentType = matches[1];
      if (!contentType.startsWith("image/")) {
        return NextResponse.json({ error: "Only image files can be proxied." }, { status: 400 });
      }
      const base64Data = matches[2];
      const buffer = Buffer.from(base64Data, "base64");

      return new Response(buffer, {
        headers: {
          "Content-Type": contentType,
          "Cache-Control": "no-store, max-age=0",
        },
      });
    }

    // SSRF Check: Restrict to http and https URL schemes only
    if (!imageUrl.startsWith("http://") && !imageUrl.startsWith("https://")) {
      return NextResponse.json({ error: "Invalid URL scheme" }, { status: 400 });
    }

    const imageResponse = await fetch(imageUrl);
    if (!imageResponse.ok) {
      throw new Error(`External source image retrieval failed: ${imageResponse.status}`);
    }

    const contentType = imageResponse.headers.get("content-type") || "image/png";
    
    // Content-Type validation to prevent stored XSS and SSRF of internal JSON/HTML
    if (!contentType.startsWith("image/")) {
      return NextResponse.json({ error: "Only image files can be proxied." }, { status: 400 });
    }

    const arrayBuffer = await imageResponse.arrayBuffer();

    return new Response(arrayBuffer, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "no-store, max-age=0",
      },
    });
  } catch (error: any) {
    console.error("Proxy Image Route Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

