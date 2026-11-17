import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import SecurityChequeNoticeCTA from "./SecurityChequeNoticeCTA";
import SecurityChequeNoticeTOC from "./SecurityChequeNoticeTOC";
import SecurityChequeNoticeWorkspace from "./SecurityChequeNoticeWorkspace";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Pre-Deposit Security Cheque Crystallization Notice (s.20)",
  description:
    "Serve this 7-day ledger crystallization notice before depositing a defaulting dealer's security cheque under NI Act s.20 to defeat cheque misuse defenses.",
  alternates: {
    canonical: `${SITE_URL}/templates/security-cheque-presentation-intimation-cum-ledger-notice`,
  },
  openGraph: {
    title: "Pre-Deposit Security Cheque Crystallization Notice (s.20)",
    description:
      "Serve this 7-day ledger crystallization notice before depositing a defaulting dealer's security cheque under NI Act s.20 to defeat cheque misuse defenses.",
    url: `${SITE_URL}/templates/security-cheque-presentation-intimation-cum-ledger-notice`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Pre-Deposit Security Cheque Crystallization Notice Format Section 20 NI Act",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pre-Deposit Security Cheque Crystallization Notice (s.20)",
    description:
      "Serve this 7-day ledger crystallization notice before depositing a defaulting dealer's security cheque under NI Act s.20 to defeat cheque misuse defenses.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: [`${SITE_URL}/blog_money_recovery.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const PRIMARY_SOURCES = [
  {
    title: "Negotiable Instruments Act, 1881 — Section 20 (Inchoate Stamped Instruments & Statutory Authority to Complete)",
    url: "https://www.indiacode.nic.in/handle/123456789/2290",
  },
  {
    title: "Negotiable Instruments Act, 1881 — Section 138 (Dishonour of Cheque for Insufficiency of Funds in Account)",
    url: "https://www.indiacode.nic.in/handle/123456789/2290",
  },
  {
    title: "Negotiable Instruments Act, 1881 — Section 141 (Offences by Companies & Vicarious Liability of Directors)",
    url: "https://www.indiacode.nic.in/handle/123456789/2290",
  },
  {
    title: "Negotiable Instruments Act, 1881 — Section 143A (Power to Direct Interim Compensation up to 20% of Cheque Amount)",
    url: "https://www.indiacode.nic.in/handle/123456789/2290",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 — Section 63 (Admissibility of Electronic Records: Email & WhatsApp Dispatch Proof)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "General Clauses Act, 1897 — Section 27 (Meaning of Service by Registered Post & Rebuttable Presumption)",
    url: "https://www.indiacode.nic.in/handle/123456789/2202",
  },
  {
    title: "Supreme Court of India — Bir Singh v. Mukesh Kumar (2019) 4 SCC 197 (Authority to Fill Blank Signed Cheque under Section 20)",
    url: "https://main.sci.gov.in/judgment/judis/46369.pdf",
  },
  {
    title: "Supreme Court of India — Sripati Singh v. State of Jharkhand (2021) SCC OnLine SC 1002 (Security Cheque Maturation into Debt)",
    url: "https://main.sci.gov.in/supremecourt/2020/24855/24855_2020_35_1502_30932_Judgement_28-Oct-2021.pdf",
  },
];

const CASE_CITATIONS = [
  {
    title: "Bir Singh v. Mukesh Kumar: Signer of Blank Cheque Impliedly Authorizes Payee to Fill Blanks under Section 20",
    parties: "Bir Singh v. Mukesh Kumar",
    citation: "(2019) 4 SCC 197 (Supreme Court of India)",
    date: "Judgment Dated 06 February 2019",
    facts:
      "The drawer handed over a signed blank cheque as security towards commercial transactions. The payee filled up the date, payee name, and debt quantum, and presented the cheque for clearance. Upon dishonour, the drawer defended the Section 138 prosecution arguing that the cheque was never filled by him, was meant merely as security, and that filling blanks constituted fraudulent material alteration under Section 87.",
    holding:
      "A Division Bench of the Supreme Court held that if a person signs a cheque and makes it over to the payee, he remains liable for dishonour even if the details in the body of the cheque were filled by someone else. Under Section 20 of the NI Act, handing over an inchoate instrument confers statutory authority upon the holder to complete it. The only prerequisite is that the amount filled must represent an existing legally enforceable liability on the date of presentation.",
    amount: "Presumption under s.139 applies even if cheque was handed over blank and filled by payee",
    takeaway:
      "Signing a blank cheque constitutes statutory consent to fill it up to the crystallized balance. However, prior ledger notice provides contemporaneous proof that the filled amount accurately reflected the exact debt due.",
  },
  {
    title: "Sripati Singh v. State of Jharkhand: Security Cheque Matures into Live Enforceable Instrument on Repayment Default",
    parties: "Sripati Singh (D) Through His Lrs v. State of Jharkhand & Anr.",
    citation: "2021 SCC OnLine SC 1002 / 2021 (13) SCALE 287 (Supreme Court of India)",
    date: "Judgment Dated 28 October 2021",
    facts:
      "The borrower took business loans and handed over four cheques explicitly labeled as 'security cheques'. When the agreed repayment dates elapsed without payment, the creditor deposited the security cheques, which were dishonoured. The High Court quashed criminal proceedings holding that cheques given merely as security cannot attract penal liability under Section 138.",
    holding:
      "Reversing the High Court, the Supreme Court ruled that a cheque issued as security does not forever retain a non-enforceable character. When the borrower commits a default in repaying the loan or running trade credit, the condition on which security was pledged matures. The creditor is legally entitled to present the security cheque for encashment, and dishonour attracts full criminal liability under Section 138.",
    amount: "Security Cheques Mature into Legally Enforceable Debt upon Loan/Credit Default",
    takeaway:
      "Commercial entities can encash security cheques the moment dealer credit terms are breached, provided the debt had crystallized prior to presentation.",
  },
  {
    title: "Dashrathbhai Patel v. Hitesh Patel: Section 56 Part-Payment Endorsement Standard for Overdue Cheques",
    parties: "Dashrathbhai Trikambhai Patel v. Hitesh Mahendrabhai Patel & Anr.",
    citation: "(2022) 10 SCC 742 (Supreme Court of India)",
    date: "Judgment Dated 11 October 2022",
    facts:
      "The borrower issued a cheque for ₹20 Lakhs. Prior to presentation, the borrower remitted ₹4 Lakhs on account. The creditor nevertheless presented the cheque for the full face value of ₹20 Lakhs without endorsing the part-payment on the instrument or adjusting the notice demand under Section 56 of the NI Act.",
    holding:
      "The Supreme Court held that where part-payment is made after issuance but before presentation, the cheque cannot be presented for the original face value without recording an endorsement under Section 56. If presented for an unadjusted sum exceeding the actual existing debt, Section 138 does not apply. Creditors must audit running accounts and demand only the net reconciled balance.",
    amount: "Cheque Presented for Gross Unadjusted Amount Fails Section 138",
    takeaway:
      "Always serve a 7-day pre-presentation crystallization notice crediting every on-account payment and return debit note, proving the exact net debt presented matches the ledger.",
  },
  {
    title: "Sunil Todi v. State of Gujarat: Debt Need Not Exist at Issuance; It Must Exist on Date of Cheque Presentation",
    parties: "Sunil Todi & Ors. v. State of Gujarat & Anr.",
    citation: "2021 SCC OnLine SC 1174 (Supreme Court of India)",
    date: "Judgment Dated 03 December 2021",
    facts:
      "Corporate buyers provided post-dated cheques as advance security against future electricity supplies. The buyers argued that since electricity had not been supplied on the date the cheques were physically signed and handed over, there was no 'existing debt' when the cheques were drawn, exempting them from Section 138.",
    holding:
      "The Supreme Court held that the phrase 'debt or other liability' in Section 138 means a legally enforceable debt existing on the date of presentation and encashment. The fact that the cheque was delivered as an advance or security before supplies commenced is irrelevant if goods or services were subsequently delivered and remained unpaid on the date of presentation.",
    amount: "Liability Determined on Date of Presentation, Not Date of Physical Delivery",
    takeaway:
      "Dealers cannot argue that blank security cheques given during onboarding 3 years earlier are invalid. The only question is whether goods were supplied and the debit balance existed when presented.",
  },
];

const FAQS = [
  {
    question: "Why should a creditor serve a 7-day intimation notice before depositing a dealer security cheque?",
    answer:
      "Serving this 7-day pre-deposit notice destroys the debtor's primary defense in Section 138 trials—namely, that the creditor 'misused an old blank security cheque without authorization or accounting'. By delivering an itemized invoice schedule and certified running ledger 7 days in advance via Registered Speed Post, Email, and WhatsApp, you place the debt crystallization on record. If the dealer remains silent or fails to dispute the ledger, statutory adverse inference under Section 119 and 121 of the Bharatiya Sakshya Adhiniyam, 2023 applies, making Section 138 convictions and Section 143A 20% interim payouts virtually guaranteed.",
  },
  {
    question: "Does filling up a blank signed security cheque constitute forgery or material alteration?",
    answer:
      "No. Under Section 20 of the Negotiable Instruments Act, 1881 and the landmark Supreme Court decision in Bir Singh v. Mukesh Kumar (2019) 4 SCC 197, delivering a signed blank negotiable instrument confers statutory authority upon the holder to complete the instrument. Filling the date, payee name, and debt quantum is not material alteration under Section 87, provided the amount filled corresponds to a genuine, legally enforceable debt existing on the date of presentation.",
  },
  {
    question: "What happens if a dealer makes a partial payment before the security cheque is presented?",
    answer:
      "Under the Supreme Court ruling in Dashrathbhai Trikambhai Patel v. Hitesh Patel (2022) 10 SCC 742, presenting a cheque for a gross sum that exceeds the actual balance after part-payments invalidates the Section 138 prosecution. Creditors must either fill the cheque only for the net crystallized balance under Section 20, or if the cheque had a pre-printed face value, record a part-payment endorsement on the reverse under Section 56 of the NI Act and demand only the net deficit.",
  },
  {
    question: "Can commercial interest on delayed payments be included in the security cheque amount?",
    answer:
      "Yes, provided the underlying dealership agreement, sales invoices, or credit application form expressly stipulates interest on delayed payments (e.g., 18% or 24% per annum), or if the creditor is a registered MSME entitled to compound interest under Section 16 of the MSMED Act, 2006. However, to avoid technical disputes regarding penalty interest, many credit controllers fill the security cheque for the exact principal ledger amount while reserving the contractual interest claim in the 7-day intimation notice and subsequent civil summary suits.",
  },
  {
    question: "What should the creditor do if the dealer issues a 'Stop Payment' instruction after receiving this notice?",
    answer:
      "A 'Stop Payment' instruction issued to evade payment of an admitted commercial debt is fully covered under Section 138 of the NI Act (Modi Cements Ltd. v. Kuchil Kumar Nandi, 1998). In fact, if the dealer issues a stop payment after receiving your 7-day crystallization notice without raising any bona fide dispute regarding goods, it demonstrates willful evasion and dishonesty, which strengthens your criminal complaint and supports simultaneous charges of Cheating under Section 318 of the Bharatiya Nyaya Sanhita, 2023.",
  },
  {
    question: "How does this 7-day notice help secure 20% interim compensation under Section 143A NI Act?",
    answer:
      "Section 143A empowers the Magistrate to order the accused drawer to deposit up to 20% of the cheque amount as interim compensation within 60 days of framing charges. While Magistrates have discretion under Rakesh Ranjan Shrivastava v. State of Jharkhand (2024), demonstrating that the drawer received an advance 7-day ledger reconciliation notice and failed to dispute the liability establishes a strong prima facie case of indisputable debt, prompting the court to exercise its discretion in the creditor's favor.",
  },
  {
    question: "Are company directors or partners personally liable when a dealership security cheque bounces?",
    answer:
      "Yes. Under Section 141 of the Negotiable Instruments Act, 1881, every person who was in charge of and responsible to the company or partnership firm for the conduct of its business at the time the offence was committed is vicariously liable. By addressing this 7-day pre-deposit notice to the Managing Director, Partners, and Proprietor personally, you establish their active knowledge of the impending cheque presentation and debt crystallization.",
  },
  {
    question: "Can this 7-day pre-deposit notice be served via WhatsApp and Email instead of physical Speed Post?",
    answer:
      "The safest legal protocol is multi-channel service: dispatching the notice via Registered Speed Post with Acknowledgement Due (RPAD) while simultaneously transmitting it via corporate Email and WhatsApp. Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), WhatsApp blue-ticks and email server dispatch logs accompanied by an electronic certificate constitute primary admissible evidence of service, defeating postal avoidance tactics.",
  },
];

export default function SecurityChequePresentationNoticePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${SITE_URL}/templates/security-cheque-presentation-intimation-cum-ledger-notice#article`,
        isPartOf: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/templates/security-cheque-presentation-intimation-cum-ledger-notice`,
        },
        headline:
          "7-Day Ledger Crystallization & Security-Cheque Presentation Intimation Notice Format (Section 20 NI Act Bulletproof Protocol)",
        description:
          "Serve this 7-day ledger crystallization notice before depositing a defaulting dealer's security cheque under NI Act s.20 to defeat cheque misuse defenses.",
        url: `${SITE_URL}/templates/security-cheque-presentation-intimation-cum-ledger-notice`,
        inLanguage: "en-IN",
        datePublished: "2026-11-17T11:00:00+05:30",
        dateModified: "2026-11-17T11:00:00+05:30",
        author: {
          "@type": "Person",
          name: "Anuj Anand Malik",
          jobTitle: "Advocate & Founder",
          worksFor: {
            "@type": "Organization",
            name: "AMA Legal Solutions",
          },
        },
        publisher: {
          "@type": "Organization",
          name: "LegalRecovery.in",
          url: SITE_URL,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/logo.png`,
          },
        },
        mainEntityOfPage: `${SITE_URL}/templates/security-cheque-presentation-intimation-cum-ledger-notice`,
      },
      {
        "@type": "CreativeWork",
        "@id": `${SITE_URL}/templates/security-cheque-presentation-intimation-cum-ledger-notice#creativework`,
        name: "Security Cheque Presentation Intimation & Ledger Crystallization Notice Format",
        headline:
          "7-Day Ledger Crystallization & Security-Cheque Presentation Intimation Notice Format (Section 20 NI Act Bulletproof Protocol)",
        author: {
          "@type": "Person",
          name: "Anuj Anand Malik",
        },
        publisher: {
          "@type": "Organization",
          name: "LegalRecovery.in",
        },
        inLanguage: "en-IN",
        genre: "Commercial Notice & Legal Template",
        about: [
          "Negotiable Instruments Act 1881 Section 20",
          "Section 138 Cheque Bounce Recovery",
          "Bir Singh v Mukesh Kumar Compliance",
          "Dealer Security Cheque Crystallization",
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/templates/security-cheque-presentation-intimation-cum-ledger-notice#faq`,
        mainEntity: FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/templates/security-cheque-presentation-intimation-cum-ledger-notice#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Templates",
            item: `${SITE_URL}/templates`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Security Cheque Presentation Intimation Notice",
            item: `${SITE_URL}/templates/security-cheque-presentation-intimation-cum-ledger-notice`,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
            <span>Advocate-Vetted Commercial Notice Workspace &bull; Section 20 NI Act Protocol</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            7-Day Ledger Crystallization &amp; Security-Cheque Presentation Intimation Notice Format (Section 20 NI Act Bulletproof Protocol)
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Statutory Answer for Credit Controllers
            </span>
            Before depositing a defaulting dealer&apos;s blank signed security cheque, credit controllers in FMCG, Pharma, Consumer Durables, and Building Materials must serve this 7-day Ledger Crystallization Notice. Governed by Section 20 of the Negotiable Instruments Act, 1881 and the Supreme Court mandates in <em>Bir Singh</em> and <em>Sripati Singh</em>, serving this notice fixes the exact legally enforceable debt on the date of presentation, completely dismantling the debtor&apos;s &quot;misuse of security cheque&quot; defense and guaranteeing immediate 20% interim compensation under Section 143A.
            Explore our specialized vertical hub at{" "}
            <Link
              href="/industries/fmcg-distributors-super-stockist-recovery"
              className="text-red-400 underline font-bold hover:text-red-300"
            >
              FMCG &amp; Super-Stockist Channel Recovery
            </Link>{" "}
            for full channel credit governance.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs text-slate-400 block font-semibold uppercase tracking-wider">
                Statutory Authority
              </span>
              <p className="text-sm sm:text-base md:text-lg font-bold text-slate-100">
                NI Act Section 20
              </p>
              <span className="text-[11px] text-slate-400 block">
                Inchoate instrument mandate
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs text-slate-400 block font-semibold uppercase tracking-wider">
                Cure Window
              </span>
              <p className="text-sm sm:text-base md:text-lg font-bold text-emerald-400">
                7 Days Reconciled
              </p>
              <span className="text-[11px] text-slate-400 block">
                Pre-empts surprise defenses
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs text-slate-400 block font-semibold uppercase tracking-wider">
                Interim Compensation
              </span>
              <p className="text-sm sm:text-base md:text-lg font-bold text-amber-400">
                20% Section 143A
              </p>
              <span className="text-[11px] text-slate-400 block">
                Fast-track court payout
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs text-slate-400 block font-semibold uppercase tracking-wider">
                Electronic Evidence
              </span>
              <p className="text-sm sm:text-base md:text-lg font-bold text-red-400">
                BSA 2023 Section 63
              </p>
              <span className="text-[11px] text-slate-400 block">
                Speed Post + Email + WhatsApp
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <Breadcrumbs
          items={[
            { label: "Templates", href: "/templates" },
            {
              label: "Security Cheque Presentation Intimation Notice",
              href: "/templates/security-cheque-presentation-intimation-cum-ledger-notice",
            },
          ]}
        />

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0 mt-6 sm:mt-8">
          {/* Sticky Left Navigation Sidebar */}
          <SecurityChequeNoticeTOC />

          {/* Main Content Editorial Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Pre-Deposit Imperative */}
            <section
              id="heading-pre-deposit-imperative"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200">
                Strategic Legal White Space
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                The Pre-Deposit Imperative: Defeating Cheque Misuse Defenses
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                In Indian commercial distribution across FMCG, Consumer Durables, Pharmaceuticals, Agro-Chemicals, and Building Materials, over 85% of manufacturers and super-stockists collect undated, blank signed cheques from distributors at the inception of business. When the dealer runs into aging arrears, credit controllers routinely fill up the cheque and present it for clearing without advance warning.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                When that cheque inevitably bounces, the creditor serves a standard post-dishonour Section 138 notice. But in trial, the defaulting dealer raises the classic defense: <em>&quot;The cheque was handed over 3 years ago merely as security; the manufacturer fraudulently filled in an arbitrary, inflated figure without my knowledge, and my running account was never reconciled!&quot;</em> Under intense cross-examination, complaints collapse if the creditor cannot prove that the debt was specifically quantified, communicated, and undisputed on the exact date of presentation.
              </p>
              <div className="bg-slate-50 border-l-4 border-slate-900 p-4 rounded-r-xl text-xs sm:text-sm text-slate-800 space-y-2">
                <p className="font-bold text-slate-900">
                  The Solution: The 7-Day Pre-Deposit Ledger Crystallization Protocol
                </p>
                <p>
                  Serving this formal 7-day notice <strong>before depositing the security cheque</strong> bridges the fatal evidentiary gap. It provides an itemized statement of accounts, adjusts all credit notes and returns, intimates the exact date and amount of proposed cheque presentation, and affords the debtor 7 days to reconcile or clear the dues. If the debtor remains silent, Section 119 and Section 121 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA) draw an irrebuttable adverse inference against them in court.
                </p>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                Cross-reference our practical playbooks on{" "}
                <Link
                  href="/distributor-dealer-dues-recovery"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  Distributor &amp; Dealer Dues Recovery
                </Link>{" "}
                and the statutory analysis in{" "}
                <Link
                  href="/blank-signed-security-cheque-section-20-138-ni-act-distributor-recovery"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  Blank Signed Security Cheque Section 20 Enforcement
                </Link>.
              </p>
            </section>

            {/* Section 2: Statutory Mechanics */}
            <section
              id="heading-statutory-mechanics"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200">
                Statutory Architecture
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                Section 20 &amp; 138 NI Act: Supreme Court Crystallization Rules
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                The legality of completing and encashing a security cheque rests upon a trifecta of settled Supreme Court precedents that every corporate legal counsel must master before instructing their finance operations desk:
              </p>

              {/* Statutory Comparison Matrix Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead className="bg-slate-900 text-white font-bold uppercase tracking-wider text-[11px]">
                    <tr>
                      <th className="py-3 px-4">Statutory Provision</th>
                      <th className="py-3 px-4">Governing Precedent</th>
                      <th className="py-3 px-4">Legal Standard Established</th>
                      <th className="py-3 px-4">Creditor Action Required</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        Section 20 NI Act
                        <span className="block text-[10px] text-slate-500 font-normal">
                          Inchoate Instruments
                        </span>
                      </td>
                      <td className="py-3 px-4 font-semibold text-[#DC2626]">
                        Bir Singh v. Mukesh Kumar (2019) 4 SCC 197
                      </td>
                      <td className="py-3 px-4">
                        Delivering a signed blank cheque creates an implied statutory authority for the payee to fill up blanks up to the existing debt. Not a material alteration.
                      </td>
                      <td className="py-3 px-4 font-medium text-slate-900">
                        Prove underlying debt existed on presentation date via ERP ledger.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        Section 138 NI Act
                        <span className="block text-[10px] text-slate-500 font-normal">
                          Security Cheque Maturity
                        </span>
                      </td>
                      <td className="py-3 px-4 font-semibold text-[#DC2626]">
                        Sripati Singh v. State of Jharkhand (2021)
                      </td>
                      <td className="py-3 px-4">
                        A cheque issued as &quot;security&quot; matures into an active, enforceable debt the moment default occurs in repayment of commercial credit.
                      </td>
                      <td className="py-3 px-4 font-medium text-slate-900">
                        Issue written default notice declaring credit line breached and recalling dues.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        Section 56 NI Act
                        <span className="block text-[10px] text-slate-500 font-normal">
                          Part-Payment Endorsement
                        </span>
                      </td>
                      <td className="py-3 px-4 font-semibold text-[#DC2626]">
                        Dashrathbhai Patel v. Hitesh Patel (2022)
                      </td>
                      <td className="py-3 px-4">
                        Presenting a cheque for a gross sum after accepting part-payments or credit notes without statutory endorsement vitiates Section 138 prosecution.
                      </td>
                      <td className="py-3 px-4 font-medium text-slate-900">
                        Audit running accounts and fill the cheque only for the net reconciled balance.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        Section 143A NI Act
                        <span className="block text-[10px] text-slate-500 font-normal">
                          Interim Payout (20%)
                        </span>
                      </td>
                      <td className="py-3 px-4 font-semibold text-[#DC2626]">
                        Rakesh Ranjan v. State of Jharkhand (2024)
                      </td>
                      <td className="py-3 px-4">
                        Courts exercise discretion to grant 20% interim compensation when prima facie proof of undisputed crystallized debt is demonstrated on affidavit.
                      </td>
                      <td className="py-3 px-4 font-medium text-slate-900">
                        Produce the 7-day pre-deposit notice as Exhibit P-1 to prove absence of bona fide dispute.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3: Notice Workspace Island */}
            <section
              id="heading-notice-workspace"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-red-100 text-[#DC2626]">
                    Interactive Notice Generator
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-snug mt-2">
                    Interactive 7-Day Notice Generator &amp; Clause Workspace
                  </h2>
                </div>
                <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg">
                  Advocate-Vetted Drafts
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Customize your pre-presentation notice below. Choose between standard FMCG dealership, super-stockist credit recall, or raw material industrial supply variants. All inputs update the live preview in real time with statutory annotations under Section 20 NI Act, Section 56 part-adjustments, and BSA Section 63 delivery certificates.
              </p>

              {/* Render Client Workspace */}
              <SecurityChequeNoticeWorkspace />
            </section>

            {/* Section 4: 5-Point Ledger Audit */}
            <section
              id="heading-crystallization-audit"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200">
                Pre-Presentation Verification SOP
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                The 5-Point Dealer Ledger Audit Before Filling Security Cheques
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                Never hand a security cheque to your banking operations desk until the Credit Controller completes this mandatory 5-point audit checklist. Neglecting even one item can give the defaulting dealer a triable defense under <em>Dashrathbhai Patel</em>:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs">
                      1
                    </span>
                    <span>GST GSTR-2B Inward Match Audit</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Verify that every unpaid tax invoice was uploaded in your GSTR-1 and accurately reflects in the dealer&apos;s GSTR-2B. Under Section 16(2) of the CGST Act, if the dealer claimed Input Tax Credit (ITC), they have made a statutory admission of goods receipt that cannot be denied in criminal proceedings. Check our{" "}
                    <Link
                      href="/tools/blocked-gst-itc-vendor-default-interest-calculator"
                      className="text-[#DC2626] font-semibold underline"
                    >
                      Blocked GST ITC Calculator
                    </Link>{" "}
                    for tax non-filing contingencies.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs">
                      2
                    </span>
                    <span>Scheme &amp; Secondary Turnover Discount Audit</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Audit all pending trade schemes, target bonuses, display rentals, and secondary sales discounts. Credit all approved discounts through formal credit notes before calculating the cheque amount to defeat claims of arbitrary ledger padding.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs">
                      3
                    </span>
                    <span>Return-to-Vendor (RTV) &amp; Breakage Reversal</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Ensure that all stock returned by the dealer due to expiry, transit leakage, or carton damage has been physically received at the plant/warehouse and fully credited against the outstanding ledger.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs">
                      4
                    </span>
                    <span>Principal vs Interest Bifurcation</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Explicitly bifurcate the crystallized principal debt from contractual delayed interest. While contractual interest is enforceable, fill the security cheque for the exact principal ledger debt if interest calculations are disputed, reserving interest for summary suits.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 space-y-2 md:col-span-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs">
                      5
                    </span>
                    <span>Section 56 Part-Endorsement Protocol</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If the security cheque had a pre-printed amount that exceeds the reconciled ledger balance, you cannot present it for the full face sum without making an endorsement under Section 56 of the NI Act. Under Section 20, if the cheque is blank, fill strictly the exact net balance due as certified in the annexures.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5: Delivery Protocol & BSA 2023 */}
            <section
              id="heading-delivery-protocol"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200">
                Evidentiary Service Protocol
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                Multi-Channel Service Protocol &amp; BSA 2023 s.63 Evidence Trail
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                Dealers in default routinely evade registered post notices by instructing staff to return letters as &quot;refused&quot;, &quot;door locked&quot;, or &quot;not known&quot;. To render evasion impossible, this 7-day pre-deposit notice must be served via a synchronized quad-channel protocol compliant with the Bharatiya Sakshya Adhiniyam, 2023:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead className="bg-slate-900 text-white font-bold uppercase tracking-wider text-[11px]">
                    <tr>
                      <th className="py-3 px-4">Dispatch Channel</th>
                      <th className="py-3 px-4">Statutory Evidence Basis</th>
                      <th className="py-3 px-4">Delivery Proof Extracted</th>
                      <th className="py-3 px-4">Debtor Counter-Move Blocked</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        Registered Speed Post RPAD
                      </td>
                      <td className="py-3 px-4 font-semibold text-slate-900">
                        Section 27 General Clauses Act
                      </td>
                      <td className="py-3 px-4">
                        India Post consignment tracking report + postal stamp acknowledgement receipt card.
                      </td>
                      <td className="py-3 px-4">
                        Postal endorsement of &quot;Refused&quot; or &quot;Door Locked&quot; is deemed valid service by law.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        Official Registered Email
                      </td>
                      <td className="py-3 px-4 font-semibold text-slate-900">
                        Section 63 BSA 2023 &amp; IT Act s.65B
                      </td>
                      <td className="py-3 px-4">
                        Server dispatch logs, SMTP message ID, delivery status notification (DSN) receipts.
                      </td>
                      <td className="py-3 px-4">
                        Blocks claims of delayed postal transit or misplaced physical letters.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        WhatsApp Business Transmission
                      </td>
                      <td className="py-3 px-4 font-semibold text-slate-900">
                        Section 63 BSA 2023 (Hash Certified)
                      </td>
                      <td className="py-3 px-4">
                        Timestamped screenshot displaying dual blue ticks with Section 63 system hash certificate.
                      </td>
                      <td className="py-3 px-4">
                        Supreme Court recognizes WhatsApp delivery as valid service upon appearance of blue ticks.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        Physical Delivery by Sales Officer
                      </td>
                      <td className="py-3 px-4 font-semibold text-slate-900">
                        Order V Rule 15 CPC (Local Agent)
                      </td>
                      <td className="py-3 px-4">
                        Photocopy of notice countersigned with shop stamp and signature of dealer manager.
                      </td>
                      <td className="py-3 px-4">
                        Eliminates any denial of physical presence or operational management.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 6: Trial Impact & Section 143A */}
            <section
              id="heading-trial-impact"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200">
                Judicial Outcome Comparison
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                Trial Impact: Securing 20% Interim Compensation Under s.143A
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                When a cheque bounces, criminal trial proceedings take 12 to 24 months. However, under Section 143A of the Negotiable Instruments Act, 1881, the Magistrate has the power to order the drawer to deposit up to <strong>20% of the cheque amount as interim compensation</strong> within 60 days of framing charges. The presence or absence of this 7-day pre-deposit notice determines whether the court grants or denies this relief:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Without Notice */}
                <div className="bg-red-50/70 border border-red-200 rounded-xl p-5 space-y-3">
                  <div className="flex items-center gap-2 text-[#DC2626] font-bold text-sm">
                    <span>❌ Without 7-Day Pre-Deposit Notice</span>
                  </div>
                  <ul className="space-y-2 text-xs text-red-900">
                    <li className="flex items-start gap-1.5">
                      <span className="font-bold">•</span>
                      <span>Debtor argues cheque was blank security handed over years ago; no prior intimation given.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="font-bold">•</span>
                      <span>Debtor claims pending debit notes and unadjusted stock returns; ledger disputed as unverified.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="font-bold">•</span>
                      <span>Magistrate declines Section 143A 20% interim payout citing genuine triable dispute.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="font-bold">•</span>
                      <span>Trial drags through full defense evidence stage, delaying creditor recovery by years.</span>
                    </li>
                  </ul>
                </div>

                {/* With Notice */}
                <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-5 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                    <span>✅ With 7-Day Pre-Deposit Notice</span>
                  </div>
                  <ul className="space-y-2 text-xs text-emerald-900">
                    <li className="flex items-start gap-1.5">
                      <span className="font-bold">•</span>
                      <span>Itemized ledger and cheque presentation date served 7 days prior; debtor remained silent.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="font-bold">•</span>
                      <span>Section 119 BSA 2023 adverse inference invoked: failure to dispute implies admission of debt.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="font-bold">•</span>
                      <span>Magistrate immediately grants Section 143A 20% deposit; warrant issued if not paid in 60 days.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="font-bold">•</span>
                      <span>Directors face immediate financial pressure, resulting in swift out-of-court full settlement.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600">
                Learn more about criminal director liability in{" "}
                <Link
                  href="/cheque-bounce-case-against-company-directors"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  Cheque Bounce Cases Against Company Directors
                </Link>{" "}
                and dealing with stop payments in{" "}
                <Link
                  href="/stop-payment-cheque-bounce-case"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  Stop Payment Cheque Bounce Case SOP
                </Link>.
              </p>
            </section>

            {/* Section 7: Precedents Digest */}
            <section
              id="heading-precedents-digest"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200">
                Judicial Precedent Digest
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                Landmark Precedent Digest: Inchoate Instruments &amp; Security PDC
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                When drafting responses or framing criminal complaints, cite these four verified holdings of the Supreme Court of India. Each precedent reinforces the validity of completing blank security instruments:
              </p>

              <div className="space-y-4">
                {CASE_CITATIONS.map((cit, idx) => (
                  <div
                    key={idx}
                    className="border-l-4 border-[#DC2626] bg-slate-50 p-4 sm:p-5 rounded-r-xl space-y-2 shadow-sm"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-bold text-slate-900">{cit.title}</span>
                      <span className="text-[10px] font-semibold bg-red-100 text-[#DC2626] px-2 py-0.5 rounded">
                        {cit.citation}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      <strong>Facts &amp; Dispute:</strong> {cit.facts}
                    </p>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      <strong>Supreme Court Holding:</strong> {cit.holding}
                    </p>
                    <div className="pt-1 text-[11px] font-semibold text-red-900 flex items-center gap-1.5">
                      <span>Takeaway for Credit Desks:</span>
                      <span className="font-normal text-slate-700">{cit.takeaway}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200">
                Frequently Asked Questions
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions for Credit Controllers &amp; Legal Desks
              </h2>
              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group border border-slate-200 rounded-xl p-4 transition-colors hover:border-slate-300 open:bg-slate-50"
                  >
                    <summary className="font-bold text-xs sm:text-sm text-slate-900 cursor-pointer flex items-center justify-between gap-2 list-none">
                      <span>{faq.question}</span>
                      <span className="text-slate-400 group-open:rotate-180 transition-transform text-xs shrink-0">
                        ▼
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-200">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 9: Sources & Legal Attribution */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200">
                Authoritative Legal Authorities
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                Statutory References, Bare Act Provisions &amp; Internal Resources
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                All templates and statutory arguments presented in this guide are authored and reviewed by Advocate Anuj Anand Malik, Founder of AMA Legal Solutions (Bar Council of Delhi). Direct legislative portals and bare acts are linked below:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PRIMARY_SOURCES.map((source, idx) => (
                  <a
                    key={idx}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="block p-3 rounded-xl border border-slate-200 hover:border-red-300 hover:bg-red-50/40 transition-colors group"
                  >
                    <span className="text-xs font-bold text-slate-800 group-hover:text-[#DC2626] transition-colors block">
                      {source.title}
                    </span>
                    <span className="text-[10px] text-slate-500 block truncate mt-1">
                      {source.url} &rarr;
                    </span>
                  </a>
                ))}
              </div>

              {/* Related Internal Hub & Spoke Links */}
              <div className="pt-4 border-t border-slate-100">
                <span className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  Related B2B Distribution &amp; Cheque Recovery Resources:
                </span>
                <div className="flex flex-wrap gap-2 text-xs">
                  <Link
                    href="/industries/fmcg-distributors-super-stockist-recovery"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold"
                  >
                    FMCG &amp; Super-Stockist Recovery Hub
                  </Link>
                  <Link
                    href="/distributor-dealer-dues-recovery"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold"
                  >
                    Distributor Dues SOP
                  </Link>
                  <Link
                    href="/blank-signed-security-cheque-section-20-138-ni-act-distributor-recovery"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold"
                  >
                    Blank Security Cheque Law
                  </Link>
                  <Link
                    href="/stop-payment-cheque-bounce-case"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold"
                  >
                    Stop Payment Recovery
                  </Link>
                  <Link
                    href="/cheque-bounce-case-against-company-directors"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold"
                  >
                    Director Vicarious Liability
                  </Link>
                  <Link
                    href="/tools/blocked-gst-itc-vendor-default-interest-calculator"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold"
                  >
                    Blocked GST ITC Calculator
                  </Link>
                </div>
              </div>
            </section>

            {/* Dual B2B Conversion Funnel Card */}
            <div className="pt-4">
              <SecurityChequeNoticeCTA />
            </div>
          </div>
        </div>
      </main>

      {/* Footer Related Guides */}
      <RelatedRecoveryGuides />
    </div>
  );
}
// TODO(reviewer): src/data/reviewers.ts is absent in this repository
