import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export async function POST(req: NextRequest) {
  // Validate NextAuth session
  const session = await getServerSession(authOptions);
  if (!session || (session.user as any).role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const apiKey = process.env.HELLO_DROP_CHOO;
  if (!apiKey) {
    return NextResponse.json(
      { error: "OpenAI API configuration secret (HELLO_DROP_CHOO) is not set." },
      { status: 500 }
    );
  }

  try {
    const body = await req.json();
    const prompt = typeof body.prompt === "string" ? body.prompt : undefined;
    if (!prompt) {
      return NextResponse.json({ error: "Missing image prompt string parameter." }, { status: 400 });
    }

    console.log("[AI Image Generator] Attempting generation with gpt-image-2 model...");
    const openAiResponse = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-image-2",
        prompt: prompt,
        n: 1,
        size: "1024x1024",
      }),
    });

    const data = await openAiResponse.json();

    if (!openAiResponse.ok) {
      console.error("[AI Image Generator] OpenAI API error response:", data);
      throw new Error(data.error?.message || `OpenAI returned status ${openAiResponse.status}`);
    }

    const firstItem = data.data?.[0];
    if (!firstItem) {
      throw new Error("No data returned from OpenAI");
    }

    const imageUrl = firstItem.b64_json 
      ? `data:image/png;base64,${firstItem.b64_json}` 
      : firstItem.url;

    if (!imageUrl) {
      throw new Error("No image URL or base64 data returned from OpenAI");
    }

    return NextResponse.json({ success: true, imageUrl });
  } catch (error: any) {
    console.error("Critical Image API Route Error:", error);
    return NextResponse.json(
      { 
        error: "Image generation failed", 
        details: error instanceof Error ? error.message : String(error) 
      },
      { status: 500 }
    );
  }
}

