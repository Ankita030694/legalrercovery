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
    const { prompt } = await req.json();
    if (!prompt) {
      return NextResponse.json({ error: "Missing image prompt string parameter." }, { status: 400 });
    }

    // Call OpenAI gpt-image-2 REST Endpoint directly
    console.log("[AI Image Generator] Attempting generation with premium gpt-image-2...");
    let openAiResponse = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-image-2",
        prompt: prompt,
        n: 1,
        size: "1792x1024",
      }),
    });

    let data = await openAiResponse.json();

    const imageUrl = data.data?.[0]?.url;

    if (!openAiResponse.ok || !imageUrl) {
      console.warn(`[AI Image Generator] OpenAI DALL-E/gpt-image-2 generation failed: ${data.error?.message || "empty response"}. Falling back to dynamic prompt-based Pollinations AI generation...`);
      
      try {
        // Dynamic prompt-based generation using state-of-the-art open-source diffusion models via Pollinations AI
        const encodedPrompt = encodeURIComponent(prompt);
        // Include seed to force unique generation, with explicit width/height matching 1920x1080 and no-logo parameter
        const dynamicFallbackUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1920&height=1080&nologo=true&seed=${Math.floor(Math.random() * 1000000)}`;
        
        return NextResponse.json({ 
          success: true, 
          imageUrl: dynamicFallbackUrl, 
          isFallback: true, 
          warning: `DALL-E restricted. Dynamically generated 1920x1080 image based strictly on prompt using Pollinations AI.`
        });
      } catch (fallbackErr: any) {
        console.error("[AI Image Generator] Pollinations fallback failed, reverting to stock...", fallbackErr);
        
        const placeholders = [
          "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1920&h=1080&q=80", // Elegant gavel and law books
          "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&h=1080&q=80", // Modern justice balance scale
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&h=1080&q=80", // Legal desk with documents and laptop
          "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1920&h=1080&q=80"  // Reassuring handshake / settlement contract
        ];
        
        const index = Math.abs(prompt.split("").reduce((acc: number, char: string) => acc + char.charCodeAt(0), 0)) % placeholders.length;
        const stockUrl = placeholders[index];
        
        return NextResponse.json({ 
          success: true, 
          imageUrl: stockUrl, 
          isFallback: true, 
          warning: `All AI generators failed. Using high-quality stock placeholder.`
        });
      }
    }

    return NextResponse.json({ success: true, imageUrl });
  } catch (error: any) {
    console.error("Critical Image API Route Error:", error);
    // Dynamic prompt-based generation as absolute robust fallback
    try {
      const encodedPrompt = encodeURIComponent(prompt);
      const dynamicFallbackUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1920&height=1080&nologo=true&seed=${Math.floor(Math.random() * 1000000)}`;
      return NextResponse.json({ 
        success: true, 
        imageUrl: dynamicFallbackUrl, 
        isFallback: true, 
        warning: `Critical crash: ${error.message}. Successfully resolved via dynamic Pollinations AI fallback.` 
      });
    } catch {
      const defaultFallbackUrl = "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&h=1080&q=80";
      return NextResponse.json({ 
        success: true, 
        imageUrl: defaultFallbackUrl, 
        isFallback: true, 
        warning: `All attempts crashed. Loaded default legal balance vector.` 
      });
    }
  }
}
