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
    const { context } = await req.json();
    if (!context) {
      return NextResponse.json({ error: "Missing article generation context string." }, { status: 400 });
    }

    console.log(`[AI Generator] Triggering 3500-word article generation with gpt-4o...`);

    // Call OpenAI Chat Completion API with JSON response format
    const openAiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o",
        response_format: { type: "json_object" },
        messages: [
          {
            role: "system",
            content: `Act as a professional SEO and AEO expert and legal content strategist. Create a fully human-written, SEO-optimized blog article for Legal Recovery (https://www.legalrecovery.in/) targeting [recover  FNF from previous employor] (or a different primary keyword/topic if specified in the user's context) with secondary keywords [recover  FNF from previous employor ] (or different secondary keywords if specified in the user's context). The article should be 3000+ words, structured, and ready to publish.

Requirements:
- Headings Structure:
  - H1: Blog title with the primary keyword.
  - H2: Main sections covering key legal aspects, practical tips, and solutions. Include primary keyword in H2.
  - H3/H4: Subtopics, examples, step-by-step guidance, and case studies. Include primary/secondary keywords naturally.
- Introduction: 2–3 paragraphs mentioning the primary keyword at least twice, hooking the reader, and explaining the topic.
- Content: Professional, authoritative, human tone. Include actionable legal advice, examples, case references, and statistics where relevant. Use bullet points, numbered lists, and tables for clarity. Include internal links to https://www.legalrecovery.in/ where relevant. Include external links to authoritative sources if needed (government/legal sites).
- Conclusion: 2–3 paragraphs summarizing key points and including a strong call-to-action to contact Legal Recovery.
- FAQs Section: Include at least 8–10 FAQs answering common questions related to the primary keyword. Use keywords naturally in the questions and answers.
- Meta Tags:
  - Meta Title (60–70 characters) with primary keyword.
  - Meta Description (150–160 characters) with primary keyword.
- AEO Optimization: Clear answers to user intent suitable for Google snippets. Structured content for featured answers and easy readability.
- Additional Elements: Suggest infographics, tables, or visual aids to enhance readability and engagement.

Write the article fully structured, professional, and humanized, following Google 2026 SEO and E-E-A-T guidelines, suitable for Legal Recovery’s website. Provide all headings, subheadings, content, FAQs, meta tags, and suggested visuals in the output and make the content naturally humanized to avoid AI detection.

Also make sure to naturally induce and distribute the following internal links throughout the blog for SEO and AEO purposes: https://www.legalrecovery.in/, https://www.legalrecovery.in/about, https://www.legalrecovery.in/services, https://www.legalrecovery.in/how-it-works, https://www.legalrecovery.in/blog, https://www.legalrecovery.in/services/recovery-of-salary-and-employment-dues, https://www.legalrecovery.in/services/refunds-and-consumer-complaints, https://www.legalrecovery.in/services/security-deposits-and-rental-recoveries, https://www.legalrecovery.in/services/recovery-of-freelancer-and-client-payments, https://www.legalrecovery.in/services/recovery-of-money-from-a-friend, https://www.legalrecovery.in/services/airline-and-travel-recoveries, https://www.legalrecovery.in/services/vendor-and-invoice-recoveries, https://www.legalrecovery.in/services/property-and-builder-disputes, and https://www.legalrecovery.in/contact throughout the article wherever contextually relevant.

Ensure the content is optimized for Google’s latest ranking guidelines, semantic SEO, topical authority, featured snippets, People Also Ask sections, voice search optimization, EEAT signals, and user intent while being written in a natural, trustworthy, and engaging human style designed to maximize ranking potential and help Legal Recovery rank #1 on Google for the target keyword.

You must respond with a single, valid JSON object containing exactly the following properties:
- "title": A strong, compelling H1 title containing the primary keyword.
- "subtitle": An optimized subtitle containing secondary keywords.
- "description": The exhaustive, deep-dive 3000+ words blog post body. You MUST format this content inside clean, standard HTML markup (using <h2>, <h3>, <p>, <strong>, <ul>, <li>, <table>, etc.) suitable for embedding directly in a webpage, with all requested sections, detailed paragraphs (3-4 long paragraphs per section to hit word count), and CTAs included.
- "metaTitle": An SEO-optimized Meta Title (incorporating keywords, under 60 characters).
- "metaDescription": An SEO-optimized Meta Description (compelling, under 160 characters).
- "slug": A URL-safe slug generated from the primary keyword (lowercase, using only alphanumeric characters and hyphens).
- "faqs": An array of exactly 10 to 15 SEO-optimized FAQs answering common user intent questions related to the primary keyword. Each FAQ object must contain:
  - "question": The FAQ question.
  - "answer": The detailed, AEO-optimized answer suitable for Google snippets and AI search engines like ChatGPT, Gemini, and Perplexity.
- "reviews": An array of exactly 2 to 3 mock customer review snippets validating our legal services. Each review object must contain:
  - "name": Customer's name (common Indian name like Amit, Priya, Rohan).
  - "rating": A number from 4 to 5.
  - "review": The review text.
- "suggestedImagePrompt": A highly detailed, professional DALL-E 3 image prompt that describes a modern, polished digital illustration representing the core topic of the article. Use sleek corporate colors, dynamic lighting, and do NOT include any text inside the image.

Never output markdown blocks (like \`\`\`json) outside the JSON structure. Respond only with the raw stringified JSON object.`,
          },
          {
            role: "user",
            content: `Context: ${context}`,
          },
        ],
        temperature: 0.7,
        max_tokens: 8000,
      }),
    });

    const data = await openAiResponse.json();

    if (!openAiResponse.ok) {
      throw new Error(data.error?.message || "Failed to generate blog article from OpenAI");
    }

    const messageContent = data.choices?.[0]?.message?.content;
    if (!messageContent) {
      throw new Error("OpenAI chat completion returned an empty message response.");
    }

    // Parse structured JSON
    const parsedArticle = JSON.parse(messageContent);

    return NextResponse.json(parsedArticle);
  } catch (error: any) {
    console.error("AI Article Generation Route Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
