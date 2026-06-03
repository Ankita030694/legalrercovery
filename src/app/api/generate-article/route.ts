import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import OpenAI from 'openai';

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const maxDuration = 300; // Custom maximum duration for long-running Vercel operations

export async function POST(request: NextRequest) {
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

  const openai = new OpenAI({
    apiKey: apiKey,
  });

  try {
    const body = await request.json();
    const primaryKeyword = body.primaryKeyword || body.context;
    const secondaryKeyword = body.secondaryKeyword || body.secondaryKeywords;

    if (!primaryKeyword) {
      return NextResponse.json({ error: 'Primary Keyword or Context is required' }, { status: 400 });
    }

    console.log(`[AI Generator] Triggering comprehensive 3000+ words article generation (Streaming) with gpt-4o for: Primary [${primaryKeyword}], Secondary [${secondaryKeyword || ''}]...`);

    const systemPrompt = `
      Act as a professional SEO and AEO expert and legal content strategist. Create a fully human-written, SEO-optimized blog article for AMA Legal Solutions (www.amalegalsolutions.com) targeting [${primaryKeyword}] with secondary keywords [${secondaryKeyword || ''}]. The article should be 3000+ words, structured, and ready to publish.

      **Requirements**:
      - **Headings Structure**: 
        - H1: Blog title with the primary keyword.
        - H2: Main sections covering key legal aspects, practical tips, and solutions. Include primary keyword in H2.
        - H3/H4: Subtopics, examples, step-by-step guidance, and case studies. Include primary/secondary keywords naturally.
      - **Introduction**: 2–3 paragraphs mentioning the primary keyword at least twice, hooking the reader, and explaining the topic.
      - **Content**: Professional, authoritative, human tone. Include actionable legal advice, examples, case references, and statistics where relevant. Use bullet points, numbered lists, and tables for clarity.
      - **Internal Linking**: You MUST naturally integrate mentions and links to the following AMA Legal Solutions services within the description (main body) where relevant:
        - https://www.amalegalsolutions.com/services/banking-and-finance
        - https://www.amalegalsolutions.com/services/loan-settlement
        - https://www.amalegalsolutions.com/services/intellectual-property-rights
        - https://www.amalegalsolutions.com/services/entertainment
        - https://www.amalegalsolutions.com/services/real-estate
        - https://www.amalegalsolutions.com/services/criminal-law
        - https://www.amalegalsolutions.com/services/corporate
        - https://www.amalegalsolutions.com/services/arbitration
        - https://www.amalegalsolutions.com/services/cyber
        - https://www.amalegalsolutions.com/services/civil
        - https://www.amalegalsolutions.com/services/drafting
        - https://www.amalegalsolutions.com/services/litigation
      - **External Linking**: Include links to authoritative sources (government/legal sites) if needed.
      - **Conclusion**: 2–3 paragraphs summarizing key points and including a strong call-to-action to contact AMA Legal Solutions.
      - **FAQs Section**: Include at least 8–10 FAQs answering common questions related to the primary keyword. Use keywords naturally.
      - **Meta Tags**: 
        - Meta Title (60–70 characters) with primary keyword.
        - Meta Description (150–160 characters) with primary keyword.
      - **AEO Optimization**: Clear answers to user intent suitable for Google snippets. Structured content for featured answers and easy readability.
      - **Additional Elements**: Suggest infographics, tables, or visual aids to enhance readability and engagement.
      - **Humanization & E-E-A-T**: Write in a professional, authoritative, and humanized tone, following Google 2026 SEO and E-E-A-T guidelines. Use Indian context (Rupees ₹, RBI, DRT, etc.) naturally. Do things to ensure it is detected by search engines as high-quality human content.

      **Return ONLY a valid JSON object with this exact structure**:
      {
        "title": "H1 Title (max 70 chars)",
        "subtitle": "Engaging subtitle (max 120 chars)",
        "description": "FULL HTML CONTENT (3000+ words). Use <h2>, <h3>, <h4>, <p>, <ul>, <li>, <table>. Include the internal links naturally. DO NOT include FAQs or Reviews in this field.",
        "metaTitle": "SEO meta title (60-70 chars)",
        "metaDescription": "SEO meta description (150-160 chars)",
        "faqs": [
          { "question": "Q1...", "answer": "A1..." },
          ... (8-10 items)
        ],
        "reviews": [
          { "name": "Indian Name", "rating": 5, "review": "Detailed review..." },
          ... (5 items)
        ],
        "slug": "url-friendly-slug",
        "suggestedImagePrompt": "Visual description for an infographic/image"
      }
    `;

    const userMessageContent = body.context && body.context !== primaryKeyword
      ? `Write a highly comprehensive 3000+ words article about: ${primaryKeyword}\nAdditional context & details: ${body.context}`
      : `Write a highly comprehensive 3000+ words article about: ${primaryKeyword}`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userMessageContent },
      ],
      response_format: { type: "json_object" },
      temperature: 0.85,
      stream: true,
    });

    const stream = new ReadableStream({
      async start(controller) {
        for await (const chunk of completion) {
          const content = chunk.choices[0]?.delta?.content || "";
          if (content) {
            controller.enqueue(new TextEncoder().encode(content));
          }
        }
        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  } catch (error) {
    console.error('Error generating article:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
