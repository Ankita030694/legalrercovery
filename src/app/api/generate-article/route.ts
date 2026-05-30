import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import OpenAI from 'openai';

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const maxDuration = 300; // Increase max duration for Vercel

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

  const openai = new OpenAI({
    apiKey: apiKey,
  });

  try {
    const { context, primaryKeyword, secondaryKeywords } = await req.json();
    if (!context) {
      return NextResponse.json({ error: "Missing article generation context string." }, { status: 400 });
    }

    const targetPrimary = primaryKeyword?.trim() || "recover FNF from previous employer";
    const targetSecondary = secondaryKeywords?.trim() || "recover FNF from previous employer";

    console.log(`[AI Generator] Triggering 3500+ word article generation (Streaming) with gpt-4o for keywords: Primary [${targetPrimary}], Secondary [${targetSecondary}]...`);

    const systemPrompt = `Act as a professional SEO and AEO expert and legal content strategist. Create a fully human-written, SEO-optimized blog article for Legal Recovery (https://www.legalrecovery.in/) targeting [${targetPrimary}] with secondary keywords [${targetSecondary}]. The article's main body (description field) MUST be an exhaustive 3500+ words deep-dive (excluding FAQs and reviews), structured, and ready to publish.

Requirements:
- Headings Structure:
  - H1: Blog title with the primary keyword.
  - H2: Main sections covering key legal aspects, practical tips, and solutions. Include primary keyword in H2.
  - H3/H4: Subtopics, examples, step-by-step guidance, and case studies. Include primary/secondary keywords naturally.
- Introduction: 2-3 paragraphs mentioning the primary keyword at least twice, hooking the reader, and explaining the topic.
- Content: Professional, authoritative, human tone. Include actionable legal advice, examples, case references, and statistics where relevant. Use bullet points, numbered lists, and tables for clarity. Include internal links to https://www.legalrecovery.in/ where relevant. Include external links to authoritative sources if needed (government/legal sites).
- Conclusion: 2-3 paragraphs summarizing key points and including a strong call-to-action to contact Legal Recovery.
- FAQs Section: Generate exactly 10 FAQs answering common questions related to the primary keyword. Use keywords naturally in the questions and answers. CRITICAL: Do NOT include this FAQs section or any FAQ text in the "description" field. You must ONLY place them in the separate "faqs" JSON array property below. The description field MUST NOT contain any FAQs or Questions and Answers sections.
- Meta Tags:
  - Meta Title (60-70 characters) with primary keyword.
  - Meta Description (150-160 characters) with primary keyword.
- AEO Optimization: Clear answers to user intent suitable for Google snippets. Structured content for featured answers and easy readability.
- Additional Elements: Suggest infographics, tables, or visual aids to enhance readability and engagement.

Write the article fully structured, professional, and humanized, following Google 2026 SEO and E-E-A-T guidelines, suitable for Legal Recovery's website. Provide all headings, subheadings, content, FAQs, meta tags, and suggested visuals in their respective JSON fields in the output, keeping the FAQs strictly separate from the main description field.

Also make sure to naturally induce and distribute the following internal links throughout the blog for SEO and AEO purposes: https://www.legalrecovery.in/, https://www.legalrecovery.in/about, https://www.legalrecovery.in/services, https://www.legalrecovery.in/how-it-works, https://www.legalrecovery.in/blog, https://www.legalrecovery.in/services/recovery-of-salary-and-employment-dues, https://www.legalrecovery.in/services/refunds-and-consumer-complaints, https://www.legalrecovery.in/services/security-deposits-and-rental-recoveries, https://www.legalrecovery.in/services/recovery-of-freelancer-and-client-payments, https://www.legalrecovery.in/services/recovery-of-money-from-a-friend, https://www.legalrecovery.in/services/airline-and-travel-recoveries, https://www.legalrecovery.in/services/vendor-and-invoice-recoveries, https://www.legalrecovery.in/services/property-and-builder-disputes, and https://www.legalrecovery.in/contact throughout the article wherever contextually relevant.

Ensure the content is optimized for Google's latest ranking guidelines, semantic SEO, topical authority, featured snippets, People Also Ask sections, voice search optimization, EEAT signals, and user intent.

You must respond with a single, valid JSON object containing exactly the following properties:
- "title": A strong, compelling H1 title containing the primary keyword.
- "subtitle": An optimized subtitle containing secondary keywords.
- "description": The exhaustive, deep-dive 3500+ words blog post body. CRITICAL INSTRUCTION: You MUST write at least 15 comprehensive sections. Every single section MUST have 4-5 long, detailed, and highly comprehensive paragraphs to easily cross the 3500-word mark. Do NOT write brief summaries, placeholders, or high-level overviews. Format this content inside clean, standard HTML markup (using <h2>, <h3>, <p>, <strong>, <ul>, <li>, <table>, etc.). CRITICAL: You MUST NOT include the FAQs section or any FAQ questions/answers inside this "description" field. The "description" field must end before the FAQs.
- "metaTitle": An SEO-optimized Meta Title (incorporating keywords, under 60 characters).
- "metaDescription": An SEO-optimized Meta Description (compelling, under 160 characters).
- "slug": A URL-safe slug generated from the primary keyword (lowercase, using only alphanumeric characters and hyphens).
- "faqs": An array of exactly 10 SEO-optimized FAQs answering common user intent questions related to the primary keyword. Each FAQ object must contain:
  - "question": The FAQ question.
  - "answer": The detailed, AEO-optimized answer suitable for Google snippets.
- "reviews": An array of exactly 2 to 3 mock customer review snippets validating our legal services. Each review object must contain:
  - "name": Customer's name (common Indian name like Amit, Priya, Rohan).
  - "rating": A number from 4 to 5.
  - "review": The review text.
- "suggestedImagePrompt": A highly detailed, professional DALL-E 3 image prompt that describes a modern, polished digital illustration representing the core topic of the article. Use sleek corporate colors, dynamic lighting, and do NOT include any text inside the image.

Never output markdown blocks (like \`\`\`json) outside the JSON structure. Respond only with the raw stringified JSON object.`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: `Context: ${context}\nTimestamp: ${Date.now()}` },
      ],
      response_format: { type: "json_object" },
      temperature: 0.9,
      max_tokens: 16000,
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
  } catch (error: any) {
    console.error("AI Article Generation Route Error:", error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
