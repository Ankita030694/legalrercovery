import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import OpenAI from 'openai';

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const maxDuration = 300; // Custom maximum duration for long-running Vercel operations

function escapeJsonString(str: string): string {
  return str
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\t/g, '\\t')
    .replace(/\f/g, '\\f')
    .replace(/\b/g, '\\b');
}

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

    console.log(`[AI Generator Flow] Step 1: Generating SEO metadata (Title, Subtitle, Slug) for: [${primaryKeyword}]...`);

    // STEP 1: Generate Title, Subtitle, Meta Title, Meta Description, Slug
    const step1Completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `You are a professional legal SEO and AEO strategist.
Generate an SEO-optimized H1 Title, engaging subtitle, meta title, meta description, and URL slug for a blog article on Legal Recovery.
Primary Keyword: ${primaryKeyword}
Secondary Keywords: ${secondaryKeyword || ''}

Return ONLY a JSON object with this exact structure:
{
  "title": "H1 Title containing the primary keyword (max 70 chars)",
  "subtitle": "Engaging subtitle (max 120 chars)",
  "metaTitle": "SEO meta title (60-70 chars)",
  "metaDescription": "SEO meta description (150-160 chars)",
  "slug": "url-friendly-slug"
}`
        }
      ],
      response_format: { type: "json_object" },
      temperature: 0.7,
    });

    const step1ResultStr = step1Completion.choices[0].message.content || "{}";
    const step1Result = JSON.parse(step1ResultStr);

    console.log(`[AI Generator Flow] Step 1 complete. Title: "${step1Result.title}"`);
    console.log(`[AI Generator Flow] Step 2: Starting streaming description generation (3500+ words HTML)...`);

    // STEP 2: Generate Description (Streaming)
    const step2SystemPrompt = `
You are a professional legal content writer and SEO expert. Write a fully human-written, SEO-optimized, exhaustive legal article body for Legal Recovery (https://www.legalrecovery.in/).
Target Primary Keyword: ${primaryKeyword}
Secondary Keywords: ${secondaryKeyword || ''}
Title: ${step1Result.title}
Subtitle: ${step1Result.subtitle}

**CRITICAL WORD COUNT REQUIREMENT**:
The content MUST be extremely detailed and exceed 3500 words. To achieve this, expand every section, subtopic, and legal concept with 4-6 detailed, comprehensive paragraphs.
Discuss relevant Indian acts (Payment of Wages, Shops & Establishments, Gratuity Act, BNS/IPC, NI Act), specify court procedures, draft step-by-step guidance, list required evidence, and outline detailed case studies.

**Requirements**:
- **Structure**: Use HTML tags: <h2>, <h3>, <h4>, <p>, <ul>, <li>, <table>. Include at least 8 main H2 sections.
- **Tone**: Professional, authoritative, human. Use Indian context (Rupees ₹, RBI, etc.) naturally.
- **Internal Linking**: You MUST naturally integrate links to the following Legal Recovery pages:
  - https://www.legalrecovery.in/
  - https://www.legalrecovery.in/about
  - https://www.legalrecovery.in/services
  - https://www.legalrecovery.in/how-it-works
  - https://www.legalrecovery.in/blog
  - https://www.legalrecovery.in/services/recovery-of-salary-and-employment-dues
  - https://www.legalrecovery.in/services/refunds-and-consumer-complaints
  - https://www.legalrecovery.in/services/security-deposits-and-rental-recoveries
  - https://www.legalrecovery.in/services/recovery-of-freelancer-and-client-payments
  - https://www.legalrecovery.in/services/recovery-of-money-from-a-friend
  - https://www.legalrecovery.in/services/airline-and-travel-recoveries
  - https://www.legalrecovery.in/services/vendor-and-invoice-recoveries
  - https://www.legalrecovery.in/services/property-and-builder-disputes
  - https://www.legalrecovery.in/contact
- **Do NOT** include any title (H1) or subtitle, as they are already generated. Start directly with the introduction paragraphs.
- **Do NOT** include any FAQs or Reviews in this content.
- **Do NOT** wrap the response in markdown code blocks like \`\`\`html or \`\`\`. Output RAW HTML only. Start directly with the first HTML tag (e.g. <h2> or <p>).
`;

    const step2UserMessage = body.context && body.context !== primaryKeyword
      ? `Write an exhaustive, extremely detailed 3500+ words HTML body about: ${primaryKeyword}\nAdditional context & details: ${body.context}`
      : `Write an exhaustive, extremely detailed 3500+ words HTML body about: ${primaryKeyword}`;

    const step2Stream = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: step2SystemPrompt },
        { role: "user", content: step2UserMessage },
      ],
      temperature: 0.8,
      stream: true,
    });

    const stream = new ReadableStream({
      async start(controller) {
        // Enqueue initial JSON keys
        const initialJson = {
          title: step1Result.title,
          subtitle: step1Result.subtitle,
          metaTitle: step1Result.metaTitle,
          metaDescription: step1Result.metaDescription,
          slug: step1Result.slug,
        };
        const initialJsonStr = JSON.stringify(initialJson);
        // Remove closing bracket, add "description": "
        const headerChunk = initialJsonStr.slice(0, -1) + ',"description":"';
        controller.enqueue(new TextEncoder().encode(headerChunk));

        let accumulatedDescription = "";
        let startedHTML = false;

        for await (const chunk of step2Stream) {
          const chunkText = chunk.choices[0]?.delta?.content || "";
          accumulatedDescription += chunkText;

          let textToSend = chunkText;
          if (!startedHTML) {
            const cleaned = accumulatedDescription.trimStart();
            if (cleaned.startsWith("```html")) {
              if (cleaned.length > 7) {
                textToSend = cleaned.slice(7);
                startedHTML = true;
              } else {
                textToSend = "";
              }
            } else if (cleaned.startsWith("```")) {
              if (cleaned.length > 3) {
                textToSend = cleaned.slice(3);
                startedHTML = true;
              } else {
                textToSend = "";
              }
            } else {
              startedHTML = true;
            }
          }

          if (startedHTML && textToSend) {
            const escaped = escapeJsonString(textToSend);
            controller.enqueue(new TextEncoder().encode(escaped));
          }
        }

        // Clean up markdown fences at the end of accumulatedDescription for Step 3
        let cleanedDescription = accumulatedDescription.trim();
        if (cleanedDescription.startsWith("```html")) {
          cleanedDescription = cleanedDescription.slice(7).trim();
        } else if (cleanedDescription.startsWith("```")) {
          cleanedDescription = cleanedDescription.slice(3).trim();
        }
        if (cleanedDescription.endsWith("```")) {
          cleanedDescription = cleanedDescription.slice(0, -3).trim();
        }

        console.log(`[AI Generator Flow] Step 2 complete. Description length: ${cleanedDescription.split(/\s+/).length} words.`);
        console.log(`[AI Generator Flow] Step 3: Generating FAQs, reviews, and image prompt in the context of the description...`);

        // Close the description string in JSON and prepare for Step 3 fields
        controller.enqueue(new TextEncoder().encode('",'));

        // STEP 3: Generate FAQs, Reviews, suggestedImagePrompt based on the Title, Subtitle, and Description
        try {
          const step3SystemPrompt = `
You are a legal content strategist and SEO expert.
Analyze the following generated article Title, Subtitle, and HTML Description, and generate:
1. At least 8-10 highly relevant, detailed FAQs (frequently asked questions) that directly relate to the article content.
2. 5 realistic customer review snippets (with Indian names) expressing high satisfaction with the recovery service.
3. A suggested image prompt describing a clean, professional, modern corporate infographic/illustration suitable for this article.

Article Title: ${step1Result.title}
Article Subtitle: ${step1Result.subtitle}

Article Description:
${cleanedDescription}

Return ONLY a JSON object with this exact structure:
{
  "faqs": [
    { "question": "Detailed question?", "answer": "Detailed helpful answer." }
  ],
  "reviews": [
    { "name": "Reviewer Full Name", "rating": 5, "review": "Detailed review text..." }
  ],
  "suggestedImagePrompt": "Visual description for the article's featured image"
}`;

          const step3Completion = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
              { role: "system", content: step3SystemPrompt }
            ],
            response_format: { type: "json_object" },
            temperature: 0.8,
          });

          const step3ResultStr = step3Completion.choices[0].message.content || "{}";
          const step3Result = JSON.parse(step3ResultStr);

          const faqs = step3Result.faqs || [];
          const reviews = step3Result.reviews || [];
          const suggestedImagePrompt = step3Result.suggestedImagePrompt || "Professional legal recovery illustration";

          console.log(`[AI Generator Flow] Step 3 complete. FAQs: ${faqs.length}, Reviews: ${reviews.length}`);

          const remainingJson = `"faqs":${JSON.stringify(faqs)},"reviews":${JSON.stringify(reviews)},"suggestedImagePrompt":${JSON.stringify(suggestedImagePrompt)}}`;
          controller.enqueue(new TextEncoder().encode(remainingJson));
        } catch (step3Error) {
          console.error('[AI Generator Flow] Error in Step 3:', step3Error);
          // Fallback to empty values so the JSON is still valid and doesn't break the client
          const fallbackJson = `"faqs":[],"reviews":[],"suggestedImagePrompt":"Professional legal recovery illustration"}`;
          controller.enqueue(new TextEncoder().encode(fallbackJson));
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
