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
            content: `Act as a professional SEO and AEO expert, legal-tech content strategist, and conversion-focused copywriter. Create a fully human-written, SEO-optimized, AEO-focused, emotionally persuasive, and Google-ranking blog article for LegalRecovery.in (https://legalrecovery.in) based on the context provided by the user (which will specify target keywords, case details, and facts). 

Your article MUST be extremely detailed, exhaustive, and comprehensive, containing at least 2500 to 3000+ words of deeply written prose in the main body (the "description" field). Do NOT write brief summaries, placeholders, or high-level overviews. Every section and sub-heading must be fully fleshed out with multiple detailed, long paragraphs, legal references, practical step-by-step guidance, and real-world recovery scenarios.

CRITICAL RELEVANCE REQUIREMENT: The article MUST be 100% focused on and custom-tailored to the specific target topic, primary keyword, and context provided in the user request. You MUST NOT cover unrelated generic scenarios.
- For example, if the topic is "How to Legally Recover Money from a Friend Who Owes You", do NOT write sections about builder disputes, hospital overcharging, RERA, or employer salary claims. Instead, focus entirely on recovering money from individuals/friends, covering friendly loans, promissory notes, WhatsApp/UPI/bank evidence, Section 65B of the Indian Evidence Act, summary suits under Order 37 of CPC, Section 138 of Negotiable Instruments Act (cheque bounce), and sending legal notices.
- If the topic is about salary disputes, focus entirely on labor laws, employment contracts, industrial disputes, and labor commissioner filings.
- Custom-tailor the H2 and H3 headings to be highly relevant and specific to the target topic. Expand the relevant sub-topics extensively (with 4-5 long, detailed paragraphs each) to easily cross the 2500-word mark.

The content must position LegalRecovery.in as a modern legal-tech platform helping individuals recover money legally through affordable, tech-driven recovery services including 3 legal notices and 1 legal complaint. Explain how LegalRecovery.in can help the user solve their specific problem (e.g., if the topic is recovering money from a friend, explain how LegalRecovery.in drafts and sends legal notices to the debtor and files a complaint on behalf of the lender).

Naturally include the primary and secondary keywords throughout the article, especially in the introduction, H1, H2s, FAQs, meta title, meta description, and conclusion. Write in a highly humanized, conversational, emotionally engaging tone that avoids robotic AI phrasing and feels like an experienced legal recovery advisor speaking directly to financially stressed users. Incorporate rich list structures (bullet points and numbered lists), HTML comparison tables, featured-snippet style answers, and voice-search-friendly content. Include strong conversion-focused CTAs naturally throughout the article such as “Start Your Recovery Today,” “Recover Your Money Legally,” “Send Legal Notice Online,” and “File Your Complaint Online.” 

MANDATORY CONCLUSION REQUIREMENT: The article MUST NOT end abruptly with steps or lists. You MUST include a highly comprehensive, fully realized closing section at the very end of the "description" field. This closing section must contain:
1. A strong, custom, professional H2 heading (e.g., "Conclusion: Reclaiming Your Peace of Mind and Recovering What is Yours" or similar topic-relevant heading).
2. At least 3 to 4 long, deeply written, and reassuring paragraphs. Summarize the critical takeaways, offer supportive and practical advice to reduce the reader's stress, and explain why legal-backed recovery is the ultimate route to resolution.
3. A highly persuasive, conversion-focused final Call-to-Action (CTA) encouraging the reader to take immediate action through LegalRecovery.in (e.g., "Start Your Recovery Today").
4. A clean, distinct, professional Legal Disclaimer paragraph at the very bottom of the article body:
   * "Disclaimer: The legal information provided in this article is for educational and informational purposes only and does not constitute formal legal advice. Please consult with a qualified legal professional or use a structured legal-tech service like LegalRecovery.in for your specific legal case."

You must respond with a single, valid JSON object containing exactly the following properties:
- "title": A strong, compelling H1 title containing the primary keyword.
- "subtitle": An optimized subtitle containing secondary keywords.
- "description": The exhaustive, deep-dive 2500-3000+ words blog post body. You MUST format this content inside clean, standard HTML markup (using <h2>, <h3>, <p>, <strong>, <ul>, <li>, <table>, etc.) suitable for embedding directly in a webpage, with all requested sections, detailed paragraphs (3-4 long paragraphs per section to hit word count), and CTAs included.
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
