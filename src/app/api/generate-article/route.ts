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

    console.log(`[AI Generator Flow] Step 1: Generating SEO metadata (Title, Subtitle, Slug, Popular Searches) for: [${primaryKeyword}]...`);

    // STEP 1: Generate Title, Subtitle, Meta Title, Meta Description, Slug, Popular Searches
    const step1Completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `You are a professional legal SEO, AEO (AI Engine Optimization), and search strategist.
Generate an SEO-optimized H1 Title, engaging subtitle, meta title, meta description, URL slug, and an array of 10 to 15 Popular Search queries / long-tail keywords for a blog article on Legal Recovery.

Primary Keyword/Context: ${primaryKeyword}
Secondary Keywords: ${secondaryKeyword || ''}

CRITICAL NEGATIVE CONSTRAINT:
Under no circumstances should you include any em dashes (—) anywhere in your response. Always use normal hyphens (-), colons (:), commas, parentheses, or rewrite the sentence to avoid them.

Return ONLY a JSON object with this exact structure:
{
  "title": "H1 Title containing the primary keyword (max 70 chars)",
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
    "search query 12"
  ]
}`
        }
      ],
      response_format: { type: "json_object" },
      temperature: 0.7,
    });

    const step1ResultStr = sanitizeText(step1Completion.choices[0].message.content || "{}");
    const step1Result = JSON.parse(step1ResultStr);

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
      parsedPopularSearches = [
        `${primaryKeyword} recovery process`,
        `how to recover ${primaryKeyword}`,
        `legal notice format for ${primaryKeyword}`,
        `${primaryKeyword} dispute complaint online`,
        `${primaryKeyword} refund statutory rules`,
        `${primaryKeyword} legal advice India`,
        `send demand notice for ${primaryKeyword}`,
        `${primaryKeyword} consumer court procedure`,
        `advocate consultation for ${primaryKeyword}`,
        `limitation period for ${primaryKeyword}`
      ];
    }

    console.log(`[AI Generator Flow] Step 1 complete. Title: "${step1Result.title}", Popular Searches (${parsedPopularSearches.length}):`, parsedPopularSearches);
    console.log(`[AI Generator Flow] Step 2: Generating description content (3500+ words HTML with dynamic headings, 1 to 3 structured data tables and interlinking)...`);

    // STEP 2: Generate Description (Complete body in HTML with tables and internal links)
    const step2SystemPrompt = `
You are a professional legal content writer and SEO/AEO expert. Write a fully human-written, SEO-optimized, exhaustive legal article body for Legal Recovery (https://www.legalrecovery.in/).
Target Primary Keyword/Context: ${primaryKeyword}
Secondary Keywords: ${secondaryKeyword || ''}
Title: ${step1Result.title}
Subtitle: ${step1Result.subtitle}

**CRITICAL WORD COUNT REQUIREMENT**:
The content MUST be extremely detailed and exceed 3500 words. To achieve this, expand every section, subtopic, and legal concept with 4-6 detailed, comprehensive paragraphs.
Specify court procedures, draft step-by-step statutory guidance, list required evidentiary documentation, and outline practical dispute resolution strategies.

**CRITICAL DYNAMIC HEADING & STRUCTURE RULES (STRICT PROHIBITION ON BOILERPLATE 'UNDERSTANDING' HEADINGS)**:
- **NO CLICHÉ BOILERPLATE OPENINGS**:
  - Under NO circumstances should the opening <h2> heading (or any heading) use repetitive clichés like:
    * "Understanding [Keyword]"
    * "Understanding [Keyword] Full and Final Settlement (FNF)"
    * "What is [Keyword]?"
    * "An Introduction to [Keyword]"
    * "Overview of [Keyword]"
  - DO NOT mention "Full and Final Settlement (FNF)" unless the primary topic is explicitly about employment/salary resignation settlements.
- **DYNAMIC, TOPIC-SPECIFIC OPENING HEADING**:
  - The very first <h2> heading MUST be dynamic, authoritative, engaging, and directly tailored to the specific dispute scenario of "${primaryKeyword}".
  - Examples of dynamic opening headings based on dispute category:
    * *Flight & Travel*: <h2>DGCA Passenger Rights, Civil Aviation Requirements (CAR), and Statutory Airline Refund Timelines</h2>
    * *E-Commerce & Retail*: <h2>Consumer Protection Act 2019: Statutory Liability of E-Commerce Platforms for Wrong or Defective Products</h2>
    * *Tenant & Landlord*: <h2>Tenant Protections and Legal Limitations on Unreasonable Landlord Security Deposit Deductions</h2>
    * *Freelancer & Vendor*: <h2>Contractual Enforcement and MSME Samadhan Legal Remedies for Unpaid Client Invoices</h2>
    * *Friend & Relative Loan*: <h2>Evidentiary Essentials and Demand Notice Protocols for Recovering Personal Loans in India</h2>
    * *Builder & Real Estate*: <h2>RERA Statutory Protections and Legal Compensation for Delayed Property Possession</h2>
    * *Cheque Bounce*: <h2>Section 138 NI Act: Mandatory Statutory Demand Notice Protocol and Magistrate Filing Windows</h2>
    * *Cyber Fraud*: <h2>National Cybercrime Reporting Framework (Helpline 1930) and Bank Chargeback Reversals</h2>
- **USE RELEVANT STATUTES ONLY**:
  - Cite ONLY the specific Indian Acts, Regulations, and Forums that directly govern "${primaryKeyword}" (e.g. Consumer Protection Act 2019, DGCA CAR, NI Act 1881, Transfer of Property Act, RERA 2016, MSMED Act 2006, Indian Contract Act 1872, Bharatiya Nyaya Sanhita / IPC, Bharatiya Sakshya Adhiniyam / Evidence Act). Do NOT cite unrelated employment acts for consumer or property topics.

**CRITICAL STRUCTURE & TABLE LIMIT REQUIREMENT (BETWEEN 1 TO 3 TABLES ONLY)**:
- Structure content with HTML tags: <h2>, <h3>, <h4>, <p>, <ul>, <ol>, <li>, <table>, <thead>, <tbody>, <tr>, <th>, <td>. Include at least 8 main <h2> sections.
- **DATA TABLES LIMIT IS STRICTLY BETWEEN 1 TO 3 TABLES**:
  - You MUST include at least 1 and AT MOST 3 rich, well-structured HTML data tables (<table>, <thead>, <tbody>, <tr>, <th>, <td>).
  - CRITICAL CONSTRAINT: Under NO circumstances should you generate more than 3 tables. Generate between 1 and 3 tables total across the entire article.
  Examples of tables:
  1. *Statutory Timelines & Limitation Matrix*: Timeline limits under Indian Acts, notice deadlines, response times, and court filing windows.
  2. *Legal Provisions & Penalty Benchmarks*: Act name, specific sections, competent forum, penalty provisions, and statutory interest rates.
  3. *Evidence & Documentation Checklist Table*: Category of dispute, mandatory evidentiary documents, and admissibility.

**CRITICAL INTERNAL INTERLINKING REQUIREMENT (MANDATORY)**:
- You MUST naturally embed 5 to 10 contextual hyperlinks (<a href="...">natural anchor text</a>) into the HTML body paragraphs.
- Select the most relevant query-based legal guides, recovery services, and existing blog articles from this directory:
${interlinkingDirectory}
- **Rule 1**: Use natural, keyword-rich anchor text matching user search queries and topics (e.g., '<a href="https://www.legalrecovery.in/how-to-recover-unpaid-salary-legally">steps to recover unpaid salary from an employer</a>', '<a href="https://www.legalrecovery.in/legal-notice-for-recovery-of-money">sending a legal notice for recovery of money</a>', '<a href="https://www.legalrecovery.in/cheque-bounce-notice-timeline-section-138">Section 138 cheque bounce notice timeline</a>', '<a href="https://www.legalrecovery.in/how-to-file-consumer-complaint-india">filing a consumer court complaint online</a>').
- **Rule 2**: Interlink smoothly inside paragraph sentences where the concept or legal action is discussed. Do NOT dump links at the bottom or create bullet lists of links.
- **Rule 3**: Strictly use only URLs provided in the directory above.

**Formatting Rules**:
- **Tone**: Professional, authoritative, human. Use Indian context (Rupees ₹, RBI, High Courts, Supreme Court, NCLT, MSME Samadhan, etc.) naturally.
- **No Markdown**: Do NOT use markdown headers (like ## or ###) or markdown bold (like **text**). Use HTML tags instead (like <h2>, <h3>, <strong>, <table>).
- **Do NOT** include any title (H1) or subtitle, as they are already generated. Start directly with the introduction paragraphs.
- **Do NOT** include any FAQs or Reviews in this content.
- **Do NOT** wrap the response in markdown code blocks like \`\`\`html or \`\`\`. Output RAW HTML only. Start directly with the first HTML tag (e.g. <h2> or <p>).

**CRITICAL NEGATIVE CONSTRAINT**:
Under no circumstances should you include any em dashes (—) anywhere in your entire response. Always use normal hyphens (-), colons (:), commas, or parentheses if needed instead.
`;

    const step2UserMessage = body.context && body.context !== primaryKeyword
      ? `Write an exhaustive, extremely detailed 3500+ words HTML body with 1 to 3 data tables and internal links about: ${primaryKeyword}\nAdditional context & details: ${body.context}`
      : `Write an exhaustive, extremely detailed 3500+ words HTML body with 1 to 3 data tables and internal links about: ${primaryKeyword}`;

    const step2Completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: step2SystemPrompt },
        { role: "user", content: step2UserMessage },
      ],
      temperature: 0.8,
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

    // Safety check: Remove accidental boilerplate "Understanding [Topic] Full and Final Settlement (FNF)" for non-employment topics
    const isEmploymentTopic = /salary|employment|fnf|settlement|resignation|gratuity|wages|employer|notice period/i.test(primaryKeyword);
    if (!isEmploymentTopic) {
      cleanedDescription = cleanedDescription.replace(/<h2>Understanding\s+([^<]+?)\s+Full\s+and\s+Final\s+Settlement\s*\(FNF\)<\/h2>/gi, (_match, topic) => {
        return `<h2>Legal Framework and Statutory Enforcement for ${topic.trim()} in India</h2>`;
      });
    }

    // Safety check: Clean up generic <h2>Understanding [Keyword]</h2> opening headings to make them authoritative
    cleanedDescription = cleanedDescription.replace(/^(\s*<p>[\s\S]*?<\/p>\s*)?<h2>Understanding\s+([^<]+)<\/h2>/i, (_match, prefix, headingText) => {
      const cleanPrefix = prefix || '';
      return `${cleanPrefix}<h2>Statutory Framework and Legal Remedies for ${headingText.trim()}</h2>`;
    });

    console.log(`[AI Generator Flow] Step 2 complete. Description length: ${cleanedDescription.split(/\s+/).length} words.`);
    console.log(`[AI Generator Flow] Step 3: Generating FAQs, reviews, and image prompt in the context of the description...`);

    // STEP 3: Generate FAQs, Reviews, suggestedImagePrompt, and suggestedInfographicPrompt based on the Title, Subtitle, and Description
    let faqs = [];
    let reviews = [];
    let suggestedImagePrompt = "Professional legal recovery illustration";
    let suggestedInfographicPrompt = "Detailed legal process and recovery data infographic chart vector with stats, workflow steps, gold accents on clean white background";

    try {
      const step3SystemPrompt = `
You are a legal content strategist and SEO expert.
Analyze the following generated article Title, Subtitle, and HTML Description, and generate:
1. At least 8-10 highly relevant, detailed FAQs (frequently asked questions) that directly relate to the article content.
2. 5 realistic customer review snippets (with Indian names) expressing high satisfaction with the recovery service.
3. A suggested image prompt describing a clean, professional, modern corporate illustration suitable for the article's featured hero image.
4. A suggested infographic prompt describing a structured data infographic, statutory process flowchart, or visual metrics chart specifically tailored for the mid-article infographic.

Article Title: ${step1Result.title}
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
    { "name": "Reviewer Full Name", "rating": 5, "review": "Detailed review text..." }
  ],
  "suggestedImagePrompt": "Visual description for the article's featured hero image",
  "suggestedInfographicPrompt": "Visual description for a structured legal data infographic / chart / workflow diagram"
}`;

      const step3Completion = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          { role: "system", content: step3SystemPrompt }
        ],
        response_format: { type: "json_object" },
        temperature: 0.8,
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

