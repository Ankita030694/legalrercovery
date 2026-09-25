import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { getDbAndBucket } from "@/lib/mongodb";
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

  const sanitizeText = (txt: string) => txt.replace(/—/g, "-").replace(/\u2014/g, "-");

  try {
    const body = await request.json();
    const primaryKeyword = body.primaryKeyword || body.context || body.writeup;
    const secondaryKeyword = body.secondaryKeyword || body.secondaryKeywords;

    if (!primaryKeyword) {
      return NextResponse.json({ error: 'Primary Keyword or Context is required' }, { status: 400 });
    }

    // Out-of-scope keyword guard: Block topics unrelated to LegalRecovery's services.
    // LegalRecovery is a legal-notice and money recovery platform — NOT a bank, NBFC, or debt settlement agency.
    const OUT_OF_SCOPE_PATTERNS = [
      /\b(bank\s+loan\s+settlement|loan\s+settlement|npa\s+settlement|one\s+time\s+settlement|ots\s+settlement|emi\s+waiver|emi\s+settlement|debt\s+restructuring|debt\s+settlement|loan\s+waiver|loan\s+write\s*off|npa\s+recovery|sarfaesi|credit\s+card\s+settlement|home\s+loan\s+settlement|personal\s+loan\s+settlement|bank\s+npa|chit\s+fund\s+recovery|nbfc\s+settlement|bank\s+settlement|mortgage\s+settlement|foreclosure\s+settlement|drt\s+recovery|wilful\s+defaulter)\b/i
    ];
    const combinedInput = `${primaryKeyword} ${secondaryKeyword || ''}`;
    const isOutOfScope = OUT_OF_SCOPE_PATTERNS.some(pattern => pattern.test(combinedInput));
    if (isOutOfScope) {
      return NextResponse.json({
        error: "This topic is outside LegalRecovery's service scope. LegalRecovery handles legal notices and recovery for: unpaid salary and employment dues, consumer refunds and complaints, security deposits and rental disputes, freelancer and client payment recovery, personal money recovery from friends or relatives, airline and travel refunds, vendor and invoice recovery, and property or builder disputes. Bank loan settlement, NPA, OTS, EMI waivers, SARFAESI, debt restructuring, and financial product disputes are NOT services offered by LegalRecovery."
      }, { status: 400 });
    }

    // Fetch existing blogs dynamically from MongoDB for cross-article interlinking
    let existingBlogLinks: { title: string; url: string }[] = [];
    try {
      const { db } = await getDbAndBucket("fs");
      const blogs = await db.collection("blogs")
        .find({}, { projection: { title: 1, slug: 1 } })
        .sort({ createdAt: -1 })
        .limit(30)
        .toArray();

      existingBlogLinks = blogs
        .filter((b: any) => b.slug && b.title)
        .map((b: any) => ({
          title: b.title,
          url: `https://www.legalrecovery.in/blog/${b.slug}`
        }));
    } catch (dbErr) {
      console.warn("[AI Generator Flow] Could not fetch existing blogs from DB for interlinking:", dbErr);
    }    // 1. Core Service & Authority Hub Pages
    const coreServicePages = [
      { title: "Legal Recovery Home", url: "https://www.legalrecovery.in/" },
      { title: "About LegalRecovery", url: "https://www.legalrecovery.in/about" },
      { title: "All Legal Recovery Services", url: "https://www.legalrecovery.in/services" },
      { title: "How LegalRecovery Works", url: "https://www.legalrecovery.in/how-it-works" },
      { title: "LegalRecovery Blog Directory", url: "https://www.legalrecovery.in/blog" },
      { title: "Recovery of Salary and Employment Dues", url: "https://www.legalrecovery.in/services/recovery-of-salary-and-employment-dues" },
      { title: "Refunds and Consumer Complaints", url: "https://www.legalrecovery.in/services/refunds-and-consumer-complaints" },
      { title: "Security Deposits and Rental Recoveries", url: "https://www.legalrecovery.in/services/security-deposits-and-rental-recoveries" },
      { title: "Recovery of Freelancer and Client Payments", url: "https://www.legalrecovery.in/services/recovery-of-freelancer-and-client-payments" },
      { title: "Recovery of Money from a Friend", url: "https://www.legalrecovery.in/services/recovery-of-money-from-a-friend" },
      { title: "Airline and Travel Recoveries", url: "https://www.legalrecovery.in/services/airline-and-travel-recoveries" },
      { title: "Vendor and Invoice Recoveries", url: "https://www.legalrecovery.in/services/vendor-and-invoice-recoveries" },
      { title: "Property and Builder Disputes", url: "https://www.legalrecovery.in/services/property-and-builder-disputes" },
      { title: "Airline Refund Amount Recovery Guide", url: "https://www.legalrecovery.in/recovery/airline-refund-amount" },
      { title: "Delayed Flight Compensation Claims", url: "https://www.legalrecovery.in/recovery/delayed-flight-compensation" },
      { title: "Send a Legal Notice Online", url: "https://www.legalrecovery.in/send-legal-notice" },
      { title: "Contact LegalRecovery", url: "https://www.legalrecovery.in/contact" },
    ];

    // 2. High-Intent Query-Based Pages from Footer
    const footerQueryPages = [
      // Salary & Employment Disputes
      { title: "Salary Delay Recovery", url: "https://www.legalrecovery.in/services/recovery-of-salary-and-employment-dues" },
      { title: "How to Recover Unpaid Salary from Employer Legally", url: "https://www.legalrecovery.in/how-to-recover-unpaid-salary-legally" },
      { title: "What are the Legal Steps to Recover Unpaid Salary?", url: "https://www.legalrecovery.in/what-are-the-legal-steps-to-recover-unpaid-salary-from-an-employer-in-india" },
      { title: "Can I Send a Legal Notice to My Employer for Salary?", url: "https://www.legalrecovery.in/can-i-send-a-legal-notice-to-my-employer-for-not-paying-my-salary-and-how-does-it-work" },
      { title: "How to Recover Full and Final Settlement from Employer", url: "https://www.legalrecovery.in/how-to-recover-full-and-final-settlement-from-employer" },
      { title: "Legal Notice for Withheld Full & Final Settlement", url: "https://www.legalrecovery.in/legal-notice-for-full-and-final-settlement-delay" },
      { title: "Legal Notice for Notice Period Salary Withheld", url: "https://www.legalrecovery.in/legal-notice-for-salary-withheld-during-notice-period" },
      { title: "Wrongful Termination & Unpaid Notice Salary Recovery", url: "https://www.legalrecovery.in/legal-notice-wrongful-termination-unpaid-notice-period-salary" },
      { title: "Employer Withholding Relieving Letter: Legal Action", url: "https://www.legalrecovery.in/employer-withholding-relieving-letter-legal-action" },

      // Freelancer, Client & Vendor Payments
      { title: "Freelancer Dues & Payment Recovery", url: "https://www.legalrecovery.in/services/recovery-of-freelancer-and-client-payments" },
      { title: "Freelancer Payment Recovery Options & Legal Actions", url: "https://www.legalrecovery.in/freelancer-payment-recovery-guide" },
      { title: "What Legal Options Does a Freelancer Have to Recover Dues?", url: "https://www.legalrecovery.in/freelancer-payment-recovery-legal-options-india" },
      { title: "How Can a Freelancer Send a Legal Notice to a Client?", url: "https://www.legalrecovery.in/how-freelancer-can-send-legal-notice-to-client-india" },
      { title: "Can a Freelancer File a Case in a Consumer Forum?", url: "https://www.legalrecovery.in/freelancer-consumer-forum-or-civil-court-case-india" },
      { title: "What Evidence Should a Freelancer Collect for Recovery?", url: "https://www.legalrecovery.in/freelancer-evidence-checklist-payment-recovery-india" },
      { title: "How Does the MSME Act Help Freelancers Recover Payments?", url: "https://www.legalrecovery.in/msme-act-freelancer-payment-recovery" },
      { title: "MSME Samadhan Portal vs. Legal Notice", url: "https://www.legalrecovery.in/msme-delayed-payment-recovery-samadhan-vs-legal-notice" },
      { title: "Vendor & Invoice Recovery", url: "https://www.legalrecovery.in/services/vendor-and-invoice-recoveries" },
      { title: "Legal Notice to Vendor for Refund of Advance", url: "https://www.legalrecovery.in/legal-notice-to-vendor-for-refund-of-advance-payment" },
      { title: "Legal Notice to International Client for Unpaid Invoice", url: "https://www.legalrecovery.in/legal-notice-to-international-client-unpaid-invoice-recovery" },
      { title: "Legal Notice for Recovery of Dues from Partner", url: "https://www.legalrecovery.in/legal-notice-to-partner-for-recovery-of-dues" },
      { title: "Legal Notice to E-Commerce Marketplace for Frozen Payouts", url: "https://www.legalrecovery.in/legal-notice-to-ecommerce-marketplace-seller-payment-recovery" },

      // Rental, Landlord & Property Disputes
      { title: "Rental Deposit Recovery", url: "https://www.legalrecovery.in/services/security-deposits-and-rental-recoveries" },
      { title: "Steps to Recover Security Deposit from Refusing Landlord", url: "https://www.legalrecovery.in/recover-security-deposit-from-landlord-india" },
      { title: "Can I Send a Legal Notice to Landlord for Deposit?", url: "https://www.legalrecovery.in/legal-notice-to-landlord-for-security-deposit-refund-india" },
      { title: "Notice for Unreasonable Landlord Deductions", url: "https://www.legalrecovery.in/legal-notice-landlord-unreasonable-security-deposit-deductions" },
      { title: "PG & Hostel Security Deposit Refund Legal Notice", url: "https://www.legalrecovery.in/legal-notice-to-pg-owner-for-security-deposit-refund" },
      { title: "Is a Notarized Rent Agreement Valid? Rules & Disputes", url: "https://www.legalrecovery.in/should-rental-agreements-be-notarized-in-india" },
      { title: "Property & Builder Disputes", url: "https://www.legalrecovery.in/services/property-and-builder-disputes" },
      { title: "Legal Notice to Builder for Delayed Flat Possession", url: "https://www.legalrecovery.in/legal-notice-to-builder-for-delayed-possession-refund" },
      { title: "Builder Booking Cancellation Token Money Refund Rules", url: "https://www.legalrecovery.in/builder-booking-cancellation-refund-legal-notice" },
      { title: "Notice to Housing Society for Maintenance Disputes", url: "https://www.legalrecovery.in/legal-notice-to-cooperative-housing-society-maintenance-disputes" },
      { title: "Legal Notice to Interior Designer for Incomplete Work", url: "https://www.legalrecovery.in/legal-notice-to-interior-designer-contractor-refund" },

      // Friend, Personal Loans & Cheque Bounce
      { title: "Friend & Personal Money Recovery", url: "https://www.legalrecovery.in/services/recovery-of-money-from-a-friend" },
      { title: "Legal Notice to Recover Loan Amount Given to Friend", url: "https://www.legalrecovery.in/legal-notice-to-recovery-my-loan-from-friend" },
      { title: "How to Send a Legal Notice to Friend for Personal Loan", url: "https://www.legalrecovery.in/how-do-i-send-a-legal-notice-to-a-friend-who-is-not-repaying-my-personal-loan-in-india" },
      { title: "Recover Personal Loan from Relative", url: "https://www.legalrecovery.in/how-to-recover-personal-loan-given-to-relative-without-agreement" },
      { title: "How to Recover Money Without Written Agreement", url: "https://www.legalrecovery.in/how-to-recover-money-without-written-agreement" },
      { title: "Can WhatsApp Chat be Used as Evidence in Money Recovery Case?", url: "https://www.legalrecovery.in/can-whatsapp-chat-be-used-as-evidence-in-money-recovery-case" },
      { title: "Consolidate Multiple Cheque Bounce Cases from Same Transaction", url: "https://www.legalrecovery.in/multiple-cheque-bounce-cases-same-transaction" },
      { title: "Cheque Bounce Notice Timeline & Section 138 Deadlines", url: "https://www.legalrecovery.in/cheque-bounce-notice-timeline-section-138" },

      // Consumer Grievances, Airline, Fraud & Commercial Disputes
      { title: "Refunds and Consumer Grievances", url: "https://www.legalrecovery.in/services/refunds-and-consumer-complaints" },
      { title: "How to File a Consumer Complaint in India: Online & Offline Guide", url: "https://www.legalrecovery.in/how-to-file-consumer-complaint-india" },
      { title: "Flipkart Return & Refund Dispute Consumer Complaint", url: "https://www.legalrecovery.in/flipkart-return-refund-complaint" },
      { title: "Legal Notice for Wrong or Damaged Product Delivery", url: "https://www.legalrecovery.in/legal-notice-to-retailer-wrong-damaged-product-delivery" },
      { title: "Airline and Travel Recoveries", url: "https://www.legalrecovery.in/services/airline-and-travel-recoveries" },
      { title: "Airline Refund Amount Recovery Guide", url: "https://www.legalrecovery.in/recovery/airline-refund-amount" },
      { title: "Delayed Flight Compensation Claims", url: "https://www.legalrecovery.in/recovery/delayed-flight-compensation" },
      { title: "Flight Ticket Refund Legal Notice to Airline", url: "https://www.legalrecovery.in/legal-notice-to-airline-travel-agent-refund" },
      { title: "Recover Money Stuck in Cyber Fraud", url: "https://www.legalrecovery.in/how-to-recover-money-stuck-in-online-cyber-fraud" },
      { title: "Legal Notice for Unauthorized ECS & NACH Auto-Debits", url: "https://www.legalrecovery.in/legal-notice-to-bank-unauthorized-ecs-nach-debit-reversal" },
      { title: "Legal Notice to Insurance Company for Claim Rejection & Recovery", url: "https://www.legalrecovery.in/legal-notice-to-insurance-company-claim-rejection-recovery" },
      { title: "Refund of Gym Membership & Subscriptions", url: "https://www.legalrecovery.in/legal-notice-to-gym-subscription-fee-refund" },
      { title: "Legal Notice to Car Dealer for Defective Vehicle", url: "https://www.legalrecovery.in/legal-notice-to-car-dealer-delayed-delivery-defective-vehicle" },
      { title: "Fee Refund Legal Notice to Coaching Institute & Private College", url: "https://www.legalrecovery.in/legal-notice-to-coaching-institute-college-fee-refund" },
      { title: "Legal Notice to Event Planner & Wedding Venue for Refund", url: "https://www.legalrecovery.in/legal-notice-to-event-planner-wedding-venue-refund" },

      // Statutory Notices & Legal Procedures
      { title: "Legal Notice for Recovery of Money in India", url: "https://www.legalrecovery.in/legal-notice-for-recovery-of-money" },
      { title: "Legal Notice for Recovery of Money Sample & Draft", url: "https://www.legalrecovery.in/legal-notice-for-recovery-of-money-sample" },
      { title: "How to Send a Legal Notice for Money Recovery in India", url: "https://www.legalrecovery.in/how-to-send-a-legal-notice-for-recovery-of-money-in-india" },
      { title: "How to Draft a Legal Notice for Money Recovery", url: "https://www.legalrecovery.in/how-to-draft-a-legal-notice-for-recovery-of-money" },
      { title: "What is a Legal Notice in India: Validity, Rules & Recovery", url: "https://www.legalrecovery.in/what-is-a-legal-notice-in-india" },
      { title: "Legal Notice Format in India: PDF Download & Drafting Checklist", url: "https://www.legalrecovery.in/legal-notice-format-india" },
      { title: "Online Legal Notice Services & Legality", url: "https://www.legalrecovery.in/online-legal-notice" },
      { title: "Legal Notice Online Portal & Legality", url: "https://www.legalrecovery.in/legal-notice-online" },
      { title: "How to Send a Legal Notice in India", url: "https://www.legalrecovery.in/send-a-legal-notice" },
      { title: "Send Legal Notice Online", url: "https://www.legalrecovery.in/send-legal-notice" },
      { title: "Vakil Online Portal & Consultations", url: "https://www.legalrecovery.in/vakil-online" },
      { title: "Online Lawyer to Send Legal Notice", url: "https://www.legalrecovery.in/online-lawyer-to-send-legal-notice" },
      { title: "How to Send a Legal Notice Online in India", url: "https://www.legalrecovery.in/send-legal-notice-online-india" },
      { title: "How to Send a Legal Notice Without Hiring a Lawyer", url: "https://www.legalrecovery.in/how-can-i-send-a-legal-notice-online-to-someone-in-india-without-hiring-a-lawyer" },
      { title: "Valid Ways to Deliver a Legal Notice Online in India", url: "https://www.legalrecovery.in/what-are-the-legally-valid-ways-to-deliver-a-legal-notice-online-in-india" },
      { title: "Is WhatsApp or Email a Valid Legal Notice in Court?", url: "https://www.legalrecovery.in/is-an-email-or-whatsapp-message-considered-a-valid-legal-notice-in-indian-courts" },
      { title: "What Should a Legal Notice Include to Be Enforceable?", url: "https://www.legalrecovery.in/what-should-a-legal-notice-include-to-be-enforceable-under-indian-law" },
      { title: "Which Online Platforms Allow You to Send a Legal Notice?", url: "https://www.legalrecovery.in/which-online-platforms-or-services-allow-you-to-draft-and-send-a-legal-notice-in-india" },
      { title: "Online Dispute Resolution in India: Legal Recovery", url: "https://www.legalrecovery.in/online-dispute-resolution-india" },
      { title: "Time Limit to File Money Recovery Case in India", url: "https://www.legalrecovery.in/time-limit-to-file-money-recovery-case-india" },
      { title: "What to do if Legal Notice is Ignored in India", url: "https://www.legalrecovery.in/what-to-do-if-legal-notice-is-ignored-india" },
      { title: "Civil Suit for Recovery of Money in India", url: "https://www.legalrecovery.in/civil-suit-for-recovery-of-money-india" },
      { title: "How to Recover Money Without Going to Court in India", url: "https://www.legalrecovery.in/how-to-recover-money-without-going-to-court-india" }
    ];

    const interlinkingDirectory = [
      ...coreServicePages,
      ...footerQueryPages,
      ...existingBlogLinks
    ].map(item => `- ${item.title}: ${item.url}`).join("\n");

    // STEP 0: Web Research — use gpt-4o with built-in web search to gather grounding facts
    let researchContext = "";
    console.log(`[AI Generator Flow] Step 0: Web research for: [${primaryKeyword}]...`);
    try {
      const step0Query = `Find comprehensive, accurate, and up-to-date information about the following topic specifically for India: "${primaryKeyword}${secondaryKeyword ? ` (related: ${secondaryKeyword})` : ''}"

Provide a concise research digest covering:
1. Who typically faces this problem in India and what goes wrong in real life (concrete scenarios, typical ₹ amounts)
2. The exact relevant Indian laws, acts, and specific section numbers that apply to this situation
3. Government portals, consumer forums, or regulatory bodies where affected people can file complaints (with URLs where possible)
4. Typical timeline: how long does sending a legal notice take to work, when does escalation happen, how long does resolution usually take
5. Key documents and evidence a person needs to prove their case
6. Any recent 2024-2025 court rulings, regulatory changes, or news about this topic in India
7. Practical steps and strategies that have actually worked for people to recover their money

Keep the digest factual, concise (under 900 words), and specific to India. Focus on practical, real-world information that a normal person can act on.`;

      // Use the OpenAI Responses API with web_search_preview tool
      const step0Response = await (openai as any).responses.create({
        model: "gpt-6-sol",
        tools: [{ type: "web_search_preview" }],
        input: step0Query,
      });

      researchContext = step0Response?.output_text || "";

      // Trim if too long to avoid token explosion in downstream prompts (max ~900 words)
      const rcWords = researchContext.split(/\s+/);
      if (rcWords.length > 900) {
        researchContext = rcWords.slice(0, 900).join(" ") + " [summary trimmed]";
      }

      console.log(`[AI Generator Flow] Step 0 complete. Research context: ${researchContext.split(/\s+/).length} words.`);
    } catch (step0Error) {
      console.warn("[AI Generator Flow] Step 0 web research failed — continuing without research context:", step0Error);
      researchContext = "";
    }

    console.log(`[AI Generator Flow] Step 1: Generating SEO metadata (Title, Subtitle, Slug, Popular Searches) for: [${primaryKeyword}]...`);

    // STEP 1: Generate Title, Subtitle, Meta Title, Meta Description, Slug, Popular Searches
    const step1Completion = await openai.chat.completions.create({
      model: "gpt-6-luna",
      messages: [
        {
          role: "system",
          content: `You are a professional legal SEO, AEO (AI Engine Optimization), and search strategist for LegalRecovery (https://www.legalrecovery.in/).

**ABOUT LEGALRECOVERY (READ CAREFULLY BEFORE GENERATING):**
LegalRecovery is India's premier legal-tech platform that helps individuals and businesses recover unpaid money through professionally drafted legal notices, multi-stage escalation, and litigation guidance. The platform covers ONLY these 8 service categories:
1. Unpaid Salary and Employment Dues (full & final settlement from employers, notice period salary, wrongful termination)
2. Consumer Refunds and Complaints (defective products, e-commerce disputes, gym/subscription refunds)
3. Security Deposits and Rental Recoveries (landlord disputes, PG deposits, unreasonable deductions)
4. Freelancer and Client Payment Recovery (unpaid invoices, client defaults, MSME Samadhan)
5. Personal Money Recovery from Friends or Relatives (loans given to individuals without formal agreements)
6. Airline and Travel Recoveries (flight refunds, DGCA complaints, hotel booking disputes)
7. Vendor and Invoice Recovery (B2B outstanding payments, advance refunds, partner dues)
8. Property and Builder Disputes (RERA complaints, delayed possession, builder refunds)

**STRICTLY OUT OF SCOPE — NEVER MENTION OR REFERENCE:**
Bank loan settlement, NPA settlement, OTS (One Time Settlement), EMI waivers, debt restructuring, SARFAESI Act bank recovery, mortgage settlement, credit card settlement, NBFC disputes, chit fund recovery, or any financial product or banking loan service. LegalRecovery is NOT a bank, NBFC, or debt collection agency.

${researchContext ? `**RESEARCH CONTEXT — use this to generate more accurate, grounded popular search queries:**\n${researchContext}\n` : ''}Generate an SEO-optimized H1 Title, engaging subtitle, meta title, meta description, URL slug, and an array of 12 to 15 Popular Search queries / long-tail keywords for a blog article strictly within LegalRecovery's service scope.

Primary Keyword/Context: ${primaryKeyword}
Secondary Keywords: ${secondaryKeyword || ''}

CRITICAL NEGATIVE CONSTRAINT:
Under no circumstances should you include any em dashes (—) anywhere in your response. Always use normal hyphens (-), colons (:), commas, parentheses, or rewrite the sentence to avoid them.

**TITLE QUALITY RULES — READ CAREFULLY:**
- The title MUST sound like it was written by a helpful, informed person — NOT by an SEO template bot.
- The title must directly match what the reader searched for. If they searched "how can I recover my money", the title should reflect that naturally.
- NEVER append generic professional-sounding suffixes to the title. The following phrases are STRICTLY BANNED from the title:
  * "Legal Solutions", "Legal Remedies", "Legal Options"
  * "A Complete Guide", "Complete Guide to", "Comprehensive Guide"
  * "Everything You Need to Know", "All You Need to Know"
  * "Ultimate Guide", "The Ultimate"
  * "Overview", "Introduction to"
  * Any phrase that sounds like a marketing tagline or SEO heading template
- GOOD title examples: "How to Recover Unpaid Salary from Your Employer in India", "My Landlord is Refusing to Return My Deposit — What Do I Do?", "How Can I Recover My Money in India: A Practical Breakdown"
- BAD title examples: "Legal Solutions for Money Recovery in India", "A Complete Guide to Legal Recovery", "Comprehensive Overview of Statutory Remedies"

Return ONLY a JSON object with this exact structure:
{
  "title": "H1 Title that sounds natural and matches what the user searched for (max 70 chars, no banned suffixes)",
  "subtitle": "Engaging subtitle (max 120 chars)",
  "metaTitle": "SEO meta title (60-70 chars)",
  "metaDescription": "SEO meta description (150-160 chars)",
  "slug": "url-friendly-slug",
  "popularSearches": [
    "search query 1",
    "search query 2",
    "search query 3",
    "search query 4",
    "search query 5",
    "search query 6",
    "search query 7",
    "search query 8",
    "search query 9",
    "search query 10",
    "search query 11",
    "search query 12",
    "search query 13",
    "search query 14",
    "search query 15"
  ]
}`
        }
      ],
      response_format: { type: "json_object" },
    });

    const step1ResultStr = sanitizeText(step1Completion.choices[0].message.content || "{}");
    const step1Result = JSON.parse(step1ResultStr);

    // Title sanitizer: strip robotic template suffixes if any slipped through
    if (step1Result.title && typeof step1Result.title === "string") {
      step1Result.title = step1Result.title
        .replace(/:\s*(A\s+)?(Complete|Comprehensive|Ultimate)?\s*(Guide|Overview|Legal Solutions|Legal Remedies|Legal Options|Everything You Need to Know).*$/i, '')
        .replace(/\|\s*Legal\s*Recovery.*$/i, '')
        .trim();
    }

    let parsedPopularSearches: string[] = [];
    if (Array.isArray(step1Result.popularSearches) && step1Result.popularSearches.length > 0) {
      parsedPopularSearches = step1Result.popularSearches.map((s: any) => String(s).trim()).filter(Boolean);
    } else if (typeof step1Result.popularSearches === "string" && step1Result.popularSearches.trim()) {
      parsedPopularSearches = step1Result.popularSearches.split(",").map((s: string) => s.trim()).filter(Boolean);
    } else if (Array.isArray(step1Result.popular_searches) && step1Result.popular_searches.length > 0) {
      parsedPopularSearches = step1Result.popular_searches.map((s: any) => String(s).trim()).filter(Boolean);
    } else if (Array.isArray(step1Result.keywords) && step1Result.keywords.length > 0) {
      parsedPopularSearches = step1Result.keywords.map((s: any) => String(s).trim()).filter(Boolean);
    }

    if (parsedPopularSearches.length === 0 && primaryKeyword) {
      // Fallback popular searches — scoped strictly to LegalRecovery's legal notice and money recovery services
      parsedPopularSearches = [
        `how to send legal notice for ${primaryKeyword} in India`,
        `legal notice format for ${primaryKeyword} recovery`,
        `how to recover ${primaryKeyword} without going to court`,
        `${primaryKeyword} money recovery legal notice India`,
        `${primaryKeyword} dispute legal steps India`,
        `send demand notice online for ${primaryKeyword}`,
        `${primaryKeyword} legal notice advocate India`,
        `recover ${primaryKeyword} through legal notice`,
        `${primaryKeyword} recovery legal options India`,
        `limitation period for ${primaryKeyword} recovery case`,
        `${primaryKeyword} legal notice registered post India`,
        `legal action for ${primaryKeyword} non-payment India`
      ];
    }

    console.log(`[AI Generator Flow] Step 1 complete. Title: "${step1Result.title}", Popular Searches (${parsedPopularSearches.length}):`, parsedPopularSearches);
    console.log(`[AI Generator Flow] Step 2: Generating description content (2000-2300 words HTML with 6-8 sections, 1 to 2 structured data tables and interlinking)...`);

    // STEP 2: Generate Description (Complete body in HTML with tables and internal links)
    const step2SystemPrompt = `
You are an empathetic, adaptive content writer with deep knowledge of Indian law and consumer rights. You shift your voice naturally based on what each section needs. When a section is about someone's frustrating situation, you write with warmth and clarity. When a section covers legal rights or procedures, you write with confidence and precision. You never sound like a textbook, a legal journal, or a courtroom document. You write for real people.

**READER PERSONA — KEEP THIS IN MIND FOR EVERY SINGLE SENTENCE:**
The person reading this is an Indian aged 18 to 50. They have never dealt with a legal dispute before. Right now they are stressed and confused — their money is stuck and they genuinely do not know what to do or where to even start. They searched online hoping someone would clearly explain their options. Write so that this person feels understood, supported, and clear on what to do next. Make getting their money back feel achievable, not overwhelming.

**TARGET TOPIC:**
Primary: ${primaryKeyword}
Secondary: ${secondaryKeyword || 'none'}
Article Title: ${step1Result.title}
Article Subtitle: ${step1Result.subtitle}

${researchContext ? `**RESEARCHED FACTS — USE THESE AS YOUR FACTUAL FOUNDATION (do not hallucinate laws or amounts):**
${researchContext}
` : ''}
**ABOUT LEGALRECOVERY — WEAVE NATURALLY INTO THE ARTICLE:**
LegalRecovery (https://www.legalrecovery.in/) is India's legal-tech platform that helps people recover unpaid money through professionally drafted legal notices, multi-stage escalation, and 100% online case management. No court visits required. Pricing starts at ₹1,499 flat fee. Their 5-step process: (1) Submit case online, (2) Legal experts review and analyze, (3) Professional notice drafted and dispatched via registered post, (4) Multi-channel follow-up and escalation, (5) Resolution and money recovery. Reference LegalRecovery's process naturally and helpfully where the topic allows — never force it.

The platform covers ONLY these 8 service categories — contextualize the topic within the right one:
1. Unpaid Salary and Employment Dues (withheld full & final settlement, notice period salary, wrongful termination, relieving letter disputes)
2. Consumer Refunds and Complaints (defective products, e-commerce platform disputes, gym/subscription refunds, coaching fee refunds)
3. Security Deposits and Rental Recoveries (landlord refusal, PG/hostel deposits, unreasonable deductions, housing society disputes)
4. Freelancer and Client Payment Recovery (unpaid invoices, client defaults, MSME Samadhan portal, contract enforcement)
5. Personal Money Recovery from Friends or Relatives (money lent informally, loans without written agreements, WhatsApp evidence)
6. Airline and Travel Recoveries (flight refunds, DGCA complaints, hotel booking disputes, travel agent fraud)
7. Vendor and Invoice Recovery (B2B outstanding payments, advance payment refunds, partner dues, e-commerce marketplace frozen payouts)
8. Property and Builder Disputes (RERA complaints, delayed flat possession, builder booking cancellation refunds, interior designer disputes)

**STRICTLY OUT OF SCOPE — NEVER WRITE ABOUT:**
Bank loan settlement, NPA settlement, OTS (One Time Settlement) with banks/NBFCs, EMI waivers, debt restructuring, SARFAESI Act bank recovery, mortgage settlement, credit card settlement, NBFC disputes, chit fund recovery, wilful defaulter proceedings, DRT for bank loans, or any banking/financial product. LegalRecovery is NOT a bank, NBFC, or debt collection agency.

**SCOPE INTELLIGENCE — VERY IMPORTANT:**
Look at the topic you are writing about. Before writing:
- If the topic is a BROAD/GENERIC question (e.g. "how to recover money", "how to get my money back", "legal ways to recover money"): Do NOT try to cover all 8 service categories. Focus the article on the PROCESS of money recovery — how a legal notice works, the escalation journey, what to do first. Use salary, consumer refund, or security deposit as relatable running examples. Keep it grounded in 2-3 common situations.
- If the topic is SPECIFIC (e.g. "recover unpaid salary", "flight refund complaint", "security deposit from landlord"): Focus entirely on that specific category. Cover it deeply.
- RERA (Real Estate Regulation and Development Act) MUST NEVER appear unless the primaryKeyword explicitly mentions: property, builder, flat, apartment, possession, real estate, housing project, RERA.
- MSME Samadhan MUST NEVER appear unless the primaryKeyword explicitly mentions: freelancer, invoice, vendor, B2B, supplier, client payment, MSME.
- DGCA/airline law MUST NEVER appear unless the primaryKeyword explicitly mentions: flight, airline, travel, DGCA, ticket.
- Citing the wrong law for a topic is worse than citing no law at all. Only use laws that directly apply to the primaryKeyword.

**OPENING — THIS IS MANDATORY:**
The very first paragraph of the article (before any <h2> tag) MUST speak directly to the reader's real situation in plain, warm language. Acknowledge what they are going through. Tell them clearly what this article will help them understand and do. Do NOT open with any law citation, act name, or section number. Think of how a knowledgeable friend would open this conversation.

**HEADINGS — GENERATE FREELY, NO TEMPLATES:**
Do NOT use any fixed heading formats or statute-title patterns. Every <h2>, <h3>, and <h4> heading must be written naturally for what that section actually covers:
- Some headings should sound like questions the reader is already thinking: "What can you actually do if they refuse to pay?", "Is a WhatsApp message enough proof?", "How long does this realistically take?"
- Some should be direct, action-oriented statements: "The documents you need before you do anything", "Step by step: what to do this week"
- Some covering legal rights or procedures can be precise: "Your rights under the Consumer Protection Act 2019" — but only when the section genuinely needs that precision
- NEVER start any section's heading with an act name followed by a colon (like "Section 138 NI Act: ...") — that sounds like a legal textbook
- NEVER open the body text of any section directly with an act citation. Always open with the human situation or problem first, then bring in the legal context

**TONE PER SECTION — ADAPT, DO NOT USE A FIXED REGISTER:**
- Sections about the reader's situation or what's happening to them: warm, conversational, validating — "If you have been waiting weeks for a response and getting only silence, you are not alone..."
- Sections about the reader's legal rights: confident, clear, factual — cite the relevant law accurately in plain language, explain what it means for the reader
- Sections about what to do step by step: direct, concrete, numbered or bulleted, no filler
- Sections about escalation or what happens if ignored: matter-of-fact, reassuring, practical
- Tables and checklists: clean, scannable, genuinely useful — not just padding
- NEVER pad with law text just to hit word count. Every paragraph must earn its place.

**WORD COUNT: STRICT LIMIT (2,000 TO 2,300 WORDS FOR DESCRIPTION BODY):**
Write 6 to 8 main <h2> sections, each with focused <h3> and <h4> sub-sections as needed. Total description body must be between 2,000 and 2,300 words so the entire final article (including FAQs and reviews) stays strictly under 3,000 words. Keep every paragraph punchy, insightful, and practical without fluff.

**DATA TABLES (1 TO 2 ONLY):**
- Include 1 or 2 rich HTML tables.
- Make each table genuinely useful: timelines, evidence checklists, legal provisions with plain-language explanations, comparison of options, or step-by-step process overview.
- Do NOT include more than 2 tables.

**INTERNAL LINKS (6 TO 10 — MANDATORY):**
Naturally embed 6 to 10 contextual hyperlinks (<a href="...">anchor text</a>) inside paragraph sentences. Use only URLs from this directory:
${interlinkingDirectory}
Use natural anchor text. Interlink where the concept is discussed. Never dump links at the bottom.

**FORMATTING:**
- Use HTML tags only: <h2>, <h3>, <h4>, <p>, <ul>, <ol>, <li>, <table>, <thead>, <tbody>, <tr>, <th>, <td>, <strong>, <em>, <a>.
- No markdown at all. No ** bold. No ## headings. No \`\`\` code blocks. Output RAW HTML only.
- Do NOT include the H1 title or subtitle (already generated). Start directly with the opening paragraph.
- Do NOT include FAQs or Reviews sections.
- No em dashes (—) anywhere. Use hyphens (-), colons (:), or commas instead.
`;

    const step2UserMessage = body.context && body.context !== primaryKeyword
      ? `Write a comprehensive, human-friendly HTML blog post (strictly 2,000 to 2,300 words) with 1 to 2 data tables, 6 to 8 h2 sections, and internal links about: ${primaryKeyword}\nAdditional context & details: ${body.context}`
      : `Write a comprehensive, human-friendly HTML blog post (strictly 2,000 to 2,300 words) with 1 to 2 data tables, 6 to 8 h2 sections, and internal links about: ${primaryKeyword}`;

    const step2Completion = await openai.chat.completions.create({
      model: "gpt-6-sol",
      messages: [
        { role: "system", content: step2SystemPrompt },
        { role: "user", content: step2UserMessage },
      ],
      max_completion_tokens: 5000,
    });

    let rawDescription = sanitizeText(step2Completion.choices[0].message.content || "");

    // Clean up markdown fences at the root level
    let cleanedDescription = rawDescription.trim();
    if (cleanedDescription.startsWith("```html")) {
      cleanedDescription = cleanedDescription.slice(7).trim();
    } else if (cleanedDescription.startsWith("```")) {
      cleanedDescription = cleanedDescription.slice(3).trim();
    }
    if (cleanedDescription.endsWith("```")) {
      cleanedDescription = cleanedDescription.slice(0, -3).trim();
    }

    // Post-process: Convert any markdown syntax GPT snuck in despite HTML-only instructions
    // 1. Convert markdown numbered list items with bold: "1. **Item**: text" -> "<ol><li><strong>Item:</strong> text</li></ol>"
    cleanedDescription = cleanedDescription.replace(/^(\d+\.\s+)\*\*([^*\n]+)\*\*:?\s*/gm, (_m, num, text) => `${num}<strong>${text}:</strong> `);
    // 2. Convert bulleted list items with bold: "- **Item**: text" -> "- <strong>Item:</strong> text"
    cleanedDescription = cleanedDescription.replace(/^([*-]\s+)\*\*([^*\n]+)\*\*:?\s*/gm, (_m, bullet, text) => `${bullet}<strong>${text}:</strong> `);
    // 3. Convert inline **bold** -> <strong>bold</strong>
    cleanedDescription = cleanedDescription.replace(/\*\*([^*\n<>]+)\*\*/g, '<strong>$1</strong>');
    // 4. Convert inline __bold__ -> <strong>bold</strong>
    cleanedDescription = cleanedDescription.replace(/__([_\n<>]+)__/g, '<strong>$1</strong>');
    // 5. Convert inline *italic* -> <em>italic</em> (only single asterisks not surrounded by other asterisks)
    cleanedDescription = cleanedDescription.replace(/(?<![*])\*(?![*])([^*\n<>]+)(?<![*])\*(?![*])/g, '<em>$1</em>');
    // 6. Convert inline _italic_ -> <em>italic</em>
    cleanedDescription = cleanedDescription.replace(/(?<![_])_(?![_])([^\n<>_]+)(?<![_])_(?![_])/g, '<em>$1</em>');
    // 7. Convert bare markdown headings #### -> h4, ### -> h3, ## -> h2 if GPT slipped them in
    cleanedDescription = cleanedDescription.replace(/^#{4}\s+(.+)$/gm, '<h4>$1</h4>');
    cleanedDescription = cleanedDescription.replace(/^#{3}\s+(.+)$/gm, '<h3>$1</h3>');
    cleanedDescription = cleanedDescription.replace(/^#{2}\s+(.+)$/gm, '<h2>$1</h2>');

    // Safety check 1: Remove accidental FNF/Settlement boilerplate for non-employment topics
    const isEmploymentTopic = /salary|employment|fnf|full.and.final|resignation|gratuity|wages|employer|notice.period/i.test(primaryKeyword);
    if (!isEmploymentTopic) {
      cleanedDescription = cleanedDescription.replace(/<h2>Understanding\s+([^<]+?)\s+Full\s+and\s+Final\s+Settlement\s*\(FNF\)<\/h2>/gi, (_match, topic) => {
        return `<h2>Legal Framework and Statutory Enforcement for ${topic.trim()} in India</h2>`;
      });
    }

    // Safety check 2: Clean up generic <h2>Understanding [Keyword]</h2> opening headings
    cleanedDescription = cleanedDescription.replace(/^(\s*<p>[\s\S]*?<\/p>\s*)?<h2>Understanding\s+([^<]+)<\/h2>/i, (_match, prefix, headingText) => {
      const cleanPrefix = prefix || '';
      return `${cleanPrefix}<h2>Statutory Framework and Legal Remedies for ${headingText.trim()}</h2>`;
    });

    // Safety check 3: Remove any off-brand bank/financial loan settlement references
    const offBrandPatterns: [RegExp, string][] = [
      [/\b(bank\s+loan\s+settlement|loan\s+settlement|npa\s+settlement|one\s+time\s+settlement\s+with\s+(bank|lender|nbfc)|ots\s+settlement|emi\s+waiver|debt\s+restructuring|debt\s+settlement|loan\s+waiver|sarfaesi|credit\s+card\s+settlement|nbfc\s+settlement|wilful\s+defaulter|drt\s+proceedings)\b/gi, 'legal notice for money recovery'],
      [/<h[2-4][^>]*>\s*[^<]*(loan\s+settlement|npa\s+settlement|ots\s+with|debt\s+restructuring)[^<]*<\/h[2-4]>/gi, '<h2>Legal Recovery and Notice Escalation Process in India</h2>'],
    ];
    for (const [pattern, replacement] of offBrandPatterns) {
      cleanedDescription = cleanedDescription.replace(pattern, replacement);
    }

    // Safety check 4: Strip RERA/MSME/DGCA content when topic is not property/freelancer/airline
    const isPropertyTopic = /\b(rera|builder|property|flat|apartment|possession|real\s*estate|housing\s*project|homebuyer|landlord|tenant|lease)\b/i.test(primaryKeyword);
    const isFreelancerTopic = /\b(freelancer|invoice|vendor|msme|supplier|client\s*payment|b2b|samadhan|contractor)\b/i.test(primaryKeyword);
    const isAirlineTopic = /\b(flight|airline|travel|dgca|ticket|airport)\b/i.test(primaryKeyword);

    if (!isPropertyTopic) {
      // Remove entire RERA-specific h2/h3 sections and replace inline RERA mentions
      cleanedDescription = cleanedDescription.replace(/<h[2-4][^>]*>[^<]*\bRERA\b[^<]*<\/h[2-4]>([\s\S]*?)(?=<h[2-4]|$)/gi, '');
      cleanedDescription = cleanedDescription.replace(/\bRERA\b/g, 'the applicable legal framework');
      cleanedDescription = cleanedDescription.replace(/Real\s+Estate\s+\(Regulation\s+and\s+Development\)\s+Act[^.;,]*/gi, 'applicable statutory regulations');
    }
    if (!isFreelancerTopic) {
      cleanedDescription = cleanedDescription.replace(/<h[2-4][^>]*>[^<]*\bMSME\s+Samadhan\b[^<]*<\/h[2-4]>([\s\S]*?)(?=<h[2-4]|$)/gi, '');
    }
    if (!isAirlineTopic) {
      cleanedDescription = cleanedDescription.replace(/<h[2-4][^>]*>[^<]*\bDGCA\b[^<]*<\/h[2-4]>([\s\S]*?)(?=<h[2-4]|$)/gi, '');
    }

    console.log(`[AI Generator Flow] Step 2 complete. Description length: ${cleanedDescription.split(/\s+/).length} words.`);
    console.log(`[AI Generator Flow] Step 3: Generating FAQs, reviews, and image prompt in the context of the description...`);

    // STEP 3: Generate FAQs, Reviews, suggestedImagePrompt, and suggestedInfographicPrompt based on the Title, Subtitle, and Description
    let faqs = [];
    let reviews = [];
    let suggestedImagePrompt = "Professional legal recovery illustration";
    let suggestedInfographicPrompt = "Detailed legal process and recovery data infographic chart vector with stats, workflow steps, gold accents on clean white background";

    try {
      const step3SystemPrompt = `
You are a legal content strategist and SEO expert for LegalRecovery (https://www.legalrecovery.in/).
Analyze the following generated article Title, Subtitle, and HTML Description, and generate:
1. 6 to 8 concise, highly relevant FAQs (frequently asked questions) that directly answer specific practical questions from the article.
2. 4 realistic customer review snippets (with Indian names) expressing satisfaction with LegalRecovery's legal notice and money recovery service.
3. A suggested image prompt describing a clean, professional, modern corporate illustration suitable for the article's featured hero image.
4. A suggested infographic prompt describing a structured legal data infographic, statutory process flowchart, or visual metrics chart specifically tailored for the mid-article infographic.

**ABOUT LEGALRECOVERY — REVIEWS MUST REFLECT THESE SERVICES ONLY:**
LegalRecovery helps people recover unpaid money through legal notices and escalation. Reviews MUST be based on one of these 8 real service categories only:
- Unpaid salary, withheld full & final settlement, or notice period dues from an employer
- Consumer refund disputes (e-commerce, products, subscriptions, gyms, coaching institutes)
- Security deposit or rental recovery from a landlord or PG owner
- Freelancer or client payment recovery for unpaid invoices
- Personal money recovery from a friend or relative (informal loans)
- Airline, hotel, or travel agent refund recovery
- Vendor, supplier, or business partner invoice recovery
- Property or builder dispute (delayed possession, booking cancellation refund)

**STRICTLY PROHIBITED IN REVIEWS AND FAQS:**
Do NOT write reviews or FAQs about: bank loan settlement, NPA settlement, OTS, EMI waivers, debt restructuring, SARFAESI, mortgage settlement, credit card dues, chit fund recovery, or any banking/financial product. These are NOT services LegalRecovery offers.

${researchContext ? `**ADDITIONAL RESEARCH CONTEXT (use this to generate accurate, real-world FAQs that people actually search for):**\n${researchContext}\n` : ''}Article Title: ${step1Result.title}
Article Subtitle: ${step1Result.subtitle}

Article Description:
${cleanedDescription}

CRITICAL NEGATIVE CONSTRAINT:
Under no circumstances should you include any em dashes (—) anywhere in your response. Always use normal hyphens (-), colons (:), commas, parentheses, or rewrite the sentence to avoid them.

Return ONLY a JSON object with this exact structure:
{
  "faqs": [
    { "question": "Detailed question?", "answer": "Detailed helpful answer." }
  ],
  "reviews": [
    { "name": "Reviewer Full Name", "rating": 5, "review": "Detailed review text reflecting a real LegalRecovery service outcome..." }
  ],
  "suggestedImagePrompt": "Visual description for the article's featured hero image",
  "suggestedInfographicPrompt": "Visual description for a structured legal data infographic / chart / workflow diagram"
}`;

      const step3Completion = await openai.chat.completions.create({
        model: "gpt-6-luna",
        messages: [
          { role: "system", content: step3SystemPrompt }
        ],
        response_format: { type: "json_object" },
        max_completion_tokens: 2500,
      });

      const step3ResultStr = sanitizeText(step3Completion.choices[0].message.content || "{}");
      const step3Result = JSON.parse(step3ResultStr);

      faqs = step3Result.faqs || [];
      reviews = step3Result.reviews || [];
      suggestedImagePrompt = step3Result.suggestedImagePrompt || "Professional legal recovery illustration";
      suggestedInfographicPrompt = step3Result.suggestedInfographicPrompt || `Legal recovery workflow and data infographic for ${step1Result.title}`;

      console.log(`[AI Generator Flow] Step 3 complete. FAQs: ${faqs.length}, Reviews: ${reviews.length}`);
    } catch (step3Error) {
      console.error('[AI Generator Flow] Error in Step 3:', step3Error);
    }

    // Build the final unified JSON object
    const finalResult = {
      title: step1Result.title,
      subtitle: step1Result.subtitle,
      metaTitle: step1Result.metaTitle,
      metaDescription: step1Result.metaDescription,
      slug: step1Result.slug,
      popularSearches: parsedPopularSearches,
      description: cleanedDescription,
      faqs: faqs,
      reviews: reviews,
      suggestedImagePrompt: suggestedImagePrompt,
      suggestedInfographicPrompt: suggestedInfographicPrompt
    };

    const finalJsonStr = JSON.stringify(finalResult);

    // Stream the final JSON to the client to keep compatibility with the dashboard streaming reader
    const stream = new ReadableStream({
      async start(controller) {
        controller.enqueue(new TextEncoder().encode(finalJsonStr));
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

