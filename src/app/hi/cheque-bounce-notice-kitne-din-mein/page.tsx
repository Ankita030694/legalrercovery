import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";
import ChequeBounceHindiNoticeCTA from "./ChequeBounceHindiNoticeCTA";
import ChequeBounceHindiTOC from "./ChequeBounceHindiTOC";
import ChequeBounceHindiTabs from "./ChequeBounceHindiTabs";

// TODO(reviewer): Advocate verification metadata pending src/data/reviewers.ts creation

const PAGE_URL = `${SITE_URL}/hi/cheque-bounce-notice-kitne-din-mein`;
const EN_PAIR_URL = `${SITE_URL}/cheque-bounce-notice-timeline-section-138`;
const PUBLISHED_DATE = "2026-11-04";
const MODIFIED_DATE = "2026-11-04";

export const metadata: Metadata = {
  title: "चेक बाउंस होने के कितने दिन बाद नोटिस दें? पूरी समय सीमा",
  description:
    "चेक बाउंस के बाद 30 दिन में नोटिस, 15 दिन भुगतान और 1 महीने में केस — धारा 138 की पूरी प्रक्रिया आसान हिंदी में।",
  keywords: [
    "चेक बाउंस नोटिस कितने दिन में",
    "cheque bounce hone ke kitne din baad notice dena chahiye",
    "cheque bounce case in hindi",
    "cheque bounce case process in hindi",
    "cheque bounce notice kitne din",
    "section 138 ni act time limit in hindi",
    "चेक बाउंस केस की समय सीमा",
    "धारा 138 नोटिस कितने दिन में भेजें",
  ],
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "hi-IN": PAGE_URL,
      "en-IN": EN_PAIR_URL,
      "x-default": EN_PAIR_URL,
    },
  },
  openGraph: {
    title: "चेक बाउंस होने के कितने दिन बाद नोटिस दें? पूरी समय सीमा",
    description:
      "चेक बाउंस के बाद 30 दिन में नोटिस, 15 दिन भुगतान और 1 महीने में केस — धारा 138 की पूरी प्रक्रिया आसान हिंदी में।",
    url: PAGE_URL,
    type: "article",
    locale: "hi_IN",
    alternateLocale: ["en_IN"],
    siteName: "LegalRecovery.in",
    publishedTime: PUBLISHED_DATE,
    modifiedTime: MODIFIED_DATE,
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "चेक बाउंस होने के कितने दिन बाद नोटिस दें? पूरी समय सीमा",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "चेक बाउंस होने के कितने दिन बाद नोटिस दें? पूरी समय सीमा",
    description:
      "चेक बाउंस के बाद 30 दिन में नोटिस, 15 दिन भुगतान और 1 महीने में केस — धारा 138 की पूरी प्रक्रिया आसान हिंदी में।",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: [`${SITE_URL}/blog_money_recovery.png`],
  },
};

const FAQ_ITEMS = [
  {
    question: "चेक बाउंस होने के कितने दिन बाद नोटिस देना चाहिए (Cheque bounce hone ke kitne din baad notice dena chahiye)?",
    answer:
      "परक्राम्य लिखत अधिनियम, 1881 की धारा 138 के परंतु (b) (Section 138 Proviso (b) NI Act) के अनुसार, बैंक से 'चेक रिटर्न मेमो' (Cheque Return Memo) प्राप्त होने की तारीख से ठीक 30 दिनों के भीतर देनदार को लिखित वैधानिक डिमांड नोटिस भेजना अनिवार्य है। सुप्रीम कोर्ट के Saketh India Ltd. v. India Securities Ltd. (1999) 3 SCC 1 फैसले के अनुसार, 30 दिनों की गिनती करते समय जिस दिन बैंक से रिटर्न मेमो मिला है, उस पहले दिन को छोड़ दिया जाता है और अगले दिन से 30 दिन गिने जाते हैं।",
  },
  {
    question: "चेक बाउंस नोटिस मिलने के बाद देनदार को भुगतान के लिए कितने दिन का समय मिलता है?",
    answer:
      "धारा 138 के परंतु (c) (Section 138 Proviso (c) NI Act) के तहत, देनदार (चेक जारी करने वाले व्यक्ति) को डिमांड नोटिस तामील (Deliver/Receive) होने की तारीख से पूरे 15 दिन का समय भुगतान करने के लिए मिलता है। यदि देनदार इन 15 दिनों के भीतर चेक की पूरी राशि अदा कर देता है, तो उसके विरुद्ध धारा 138 का कोई आपराधिक मुकदमा नहीं बनता।",
  },
  {
    question: "15 दिन में पैसा न मिलने पर कोर्ट में चेक बाउंस केस कितने दिन में फाइल करना होता है?",
    answer:
      "यदि नोटिस मिलने के 15 दिनों के भीतर देनदार भुगतान नहीं करता है, तो 16वें दिन से 'वाद कारण' (Cause of Action) उत्पन्न हो जाता है। धारा 142(1)(b) (Section 142(1)(b) NI Act) के अनुसार, इस 16वें दिन से ठीक 1 महीने (30 दिन) के भीतर न्यायिक मजिस्ट्रेट प्रथम श्रेणी (JMFC) या मेट्रोपॉलिटन मजिस्ट्रेट की अदालत में धारा 138 का परिवाद (Criminal Complaint) दायर करना अनिवार्य है।",
  },
  {
    question: "क्या 15 दिन पूरे होने से पहले कोर्ट में चेक बाउंस केस फाइल किया जा सकता है?",
    answer:
      "नहीं। सुप्रीम कोर्ट की तीन जजों की पीठ ने Yogendra Pratap Singh v. Savitri Pandey (2014) 10 SCC 713 में स्पष्ट किया है कि नोटिस तामील होने के बाद 15 दिन की भुगतान अवधि पूरी होने से पहले दायर किया गया केस 'समय-पूर्व' (Premature Complaint) माना जाएगा और कोर्ट उस पर संज्ञान (Cognizance) नहीं ले सकता। केस हमेशा 15 दिन बीतने के बाद ही दायर करें।",
  },
  {
    question: "अगर 30 दिन के अंदर चेक बाउंस नोटिस नहीं भेज पाए तो क्या करें?",
    answer:
      "यदि रिटर्न मेमो मिलने के 30 दिन बीत गए हैं, तो सबसे पहले चेक पर लिखी तारीख देखें। यदि चेक की तारीख से 3 महीने की वैधता (3-Month Validity) अभी बाकी है, तो आप चेक को दोबारा बैंक में जमा (Re-present) करके नया रिटर्न मेमो ले सकते हैं और नए मेमो से 30 दिन का नया समय पा सकते हैं (MSR Leathers v. S. Palaniappan, 2013)। यदि 3 महीने भी बीत चुके हैं, तो आप 3 साल के भीतर Order 37 CPC के तहत सिविल समरी सूट दायर करके ब्याज सहित रकम वसूल सकते हैं।",
  },
  {
    question: "एक चेक को 3 महीने की वैधता में कितनी बार बैंक में बाउंस कराया जा सकता है?",
    answer:
      "भारतीय रिज़र्व बैंक (RBI) और धारा 138(a) के नियमों के अनुसार चेक अपनी जारी तिथि से 3 महीने तक वैध रहता है। सुप्रीम कोर्ट के MSR Leathers (2013) 1 SCC 177 निर्णय के अनुसार, इन 3 महीनों के दौरान चेक को बैंक में जितनी बार चाहें जमा किया जा सकता है। अंतिम बार बाउंस होने के रिटर्न मेमो से 30 दिन के अंदर नोटिस भेजकर धारा 138 का केस चलाया जा सकता है।",
  },
  {
    question: "क्या WhatsApp और ईमेल से भेजा गया चेक बाउंस नोटिस कोर्ट में मान्य है?",
    answer:
      "हां, रजिस्टर्ड स्पीड पोस्ट (Registered Speed Post) के साथ-साथ WhatsApp और ईमेल से नोटिस भेजना पूर्णतः मान्य और अत्यंत प्रभावी है। भारतीय साक्ष्य अधिनियम, 2023 की धारा 63 (Section 63 of Bharatiya Sakshya Adhiniyam, 2023) और सुप्रीम कोर्ट के सितंबर 2025 के ऐतिहासिक फैसले Sanjabij Tari v. Kishore S. Borcar (2025 INSC 1158) के तहत इलेक्ट्रॉनिक नोटिस और ई-सम्मन को कानूनी मान्यता दी गई है।",
  },
  {
    question: "चेक बाउंस केस में अंतरिम मुआवजा (20% Interim Compensation) कब और कैसे मिलता है?",
    answer:
      "परक्राम्य लिखत अधिनियम की धारा 143A (Section 143A NI Act) के अंतर्गत, जब आरोपी कोर्ट में अपना अपराध स्वीकार नहीं करता (Pleads Not Guilty), तो मजिस्ट्रेट शिकायतकर्ता को चेक राशि का अधिकतम 20% हिस्सा 'अंतरिम मुआवजे' के रूप में दिलाने का आदेश दे सकते हैं। आरोपी को यह 20% राशि आदेश की तारीख से 60 दिनों (अधिकतम 30 दिन अतिरिक्त) के भीतर जमा करनी होती है।",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "चेक बाउंस: नोटिस, भुगतान और केस — हर समय सीमा एक जगह",
  description:
    "चेक बाउंस के बाद 30 दिन में नोटिस, 15 दिन भुगतान और 1 महीने में केस — धारा 138 की पूरी प्रक्रिया आसान हिंदी में।",
  inLanguage: "hi-IN",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": PAGE_URL,
  },
  author: {
    "@type": "Organization",
    name: "LegalRecovery.in Editorial Law Desk",
    url: SITE_URL,
  },
  publisher: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.webp`,
    },
  },
  datePublished: PUBLISHED_DATE,
  dateModified: MODIFIED_DATE,
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "होम (Home)",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "हिंदी कानूनी गाइड (Hindi Guides)",
      item: `${SITE_URL}/hi/udhar-paisa-wapas-kaise-le`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "चेक बाउंस नोटिस कितने दिन में",
      item: PAGE_URL,
    },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "hi-IN",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function ChequeBounceNoticeKitneDinMeinPage() {
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <div lang="hi">
      <main className="w-full min-h-screen bg-slate-50 text-slate-900">
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
        />

        {/* Hero Section — Strictly matching IRCTC & Hindi Hub Theme */}
        <section className="w-full bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#0F172A] text-white pt-24 pb-12 sm:pt-28 sm:pb-16 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/90 border border-slate-700 text-red-400 text-xs font-semibold tracking-wide uppercase">
                <span>धारा 138 एनआई एक्ट (Section 138 NI Act, 1881)</span>
                <span>•</span>
                <span>सुप्रीम कोर्ट 2025 नए नियम</span>
              </div>
              <Link
                href="/cheque-bounce-notice-timeline-section-138"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-600 text-xs font-medium transition-colors"
                hrefLang="en-IN"
              >
                <span>Read in English: Section 138 Timeline Guide →</span>
              </Link>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white max-w-4xl mb-6">
              चेक बाउंस: नोटिस, भुगतान और केस — हर समय सीमा एक जगह
            </h1>

            {/* Answer Box (सीधा जवाब — 40–60 words passage-first statutory answer) */}
            <div
              id="heading-direct-answer"
              className="bg-slate-900/90 border-l-4 border-[#DC2626] rounded-r-2xl p-4 sm:p-6 max-w-4xl shadow-xl mb-8 scroll-mt-28"
            >
              <div className="flex items-center gap-2 text-red-400 text-xs font-bold uppercase tracking-wider mb-2">
                <span>⚡ सीधा जवाब (Statutory Quick Answer — Section 138 &amp; 142 NI Act)</span>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-slate-100 leading-relaxed font-medium">
                <strong>चेक बाउंस होने के बाद बैंक से &lsquo;रिटर्न मेमो&rsquo; (Return Memo) मिलने की तारीख से ठीक 30 दिनों के भीतर देनदार को वकील के माध्यम से डिमांड नोटिस भेजना अनिवार्य है (Section 138(b) NI Act)।</strong> नोटिस मिलने के बाद देनदार को भुगतान के लिए <strong>15 दिन</strong> का समय मिलता है (Section 138(c))। यदि 15 दिन में पैसा न मिले, तो 16वें दिन से <strong>1 महीने (30 दिन)</strong> के भीतर मजिस्ट्रेट कोर्ट में केस दायर करना होता है (Section 142(1)(b))।
              </p>
            </div>

            {/* Key Statutory Metric Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mb-8">
              <div className="bg-slate-800/70 border border-slate-700/80 rounded-xl p-3.5 sm:p-4">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                  चेक की वैधता (Validity)
                </span>
                <p className="text-lg sm:text-xl font-extrabold text-white mt-1">
                  3 महीने (90 दिन)
                </p>
                <span className="text-[11px] text-slate-300">
                  Section 138 Proviso (a) व RBI नियम
                </span>
              </div>

              <div className="bg-slate-800/70 border border-red-500/40 rounded-xl p-3.5 sm:p-4">
                <span className="text-[11px] uppercase tracking-wider text-red-300 font-semibold block">
                  लीगल नोटिस समय सीमा
                </span>
                <p className="text-lg sm:text-xl font-extrabold text-red-400 mt-1">
                  30 दिन के भीतर
                </p>
                <span className="text-[11px] text-slate-300">
                  बैंक रिटर्न मेमो मिलने से (Sec 138(b))
                </span>
              </div>

              <div className="bg-slate-800/70 border border-slate-700/80 rounded-xl p-3.5 sm:p-4">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                  भुगतान की मोहलत
                </span>
                <p className="text-lg sm:text-xl font-extrabold text-amber-400 mt-1">
                  15 दिन का समय
                </p>
                <span className="text-[11px] text-slate-300">
                  नोटिस डिलीवर होने के बाद (Sec 138(c))
                </span>
              </div>

              <div className="bg-slate-800/70 border border-slate-700/80 rounded-xl p-3.5 sm:p-4">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                  कोर्ट में केस दायर करना
                </span>
                <p className="text-lg sm:text-xl font-extrabold text-emerald-400 mt-1">
                  1 महीना (30 दिन)
                </p>
                <span className="text-[11px] text-slate-300">
                  15 दिन समाप्त होने के बाद (Sec 142)
                </span>
              </div>
            </div>

            {/* Hero CTA Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <ChequeBounceHindiNoticeCTA
                variant="secondary"
                buttonText="30 दिन पूरे होने से पहले धारा 138 नोटिस भेजें"
              />
              <Link
                href="/tools/cheque-bounce-deadline-calculator"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-slate-200 bg-slate-800/90 hover:bg-slate-700 border border-slate-700 transition-colors text-center"
              >
                🧮 अपनी अंतिम तारीख की गणना करें (Deadline Calculator) →
              </Link>
            </div>
          </div>
        </section>

        {/* Main Content Layout with Breadcrumbs & Sticky TOC */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "हिंदी कानूनी गाइड", href: "/hi/udhar-paisa-wapas-kaise-le" },
                {
                  label: "चेक बाउंस नोटिस कितने दिन में",
                  href: "/hi/cheque-bounce-notice-kitne-din-mein",
                },
              ]}
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Left Sidebar Sticky TOC */}
            <ChequeBounceHindiTOC />

            {/* Right Main Column */}
            <div className="flex-1 min-w-0 space-y-12 w-full">
              {/* SECTION 1: समय सीमा तालिका (Master Statutory Timeline Table - Archetype H2) */}
              <section
                id="heading-timeline-table"
                className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-8 shadow-xs scroll-mt-28"
              >
                <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-[#DC2626] border border-red-200 mb-3">
                  वैधानिक समय सारिणी • Section 138 &amp; Section 142 NI Act
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                  चेक बाउंस समय सीमा तालिका: चेक जमा से कोर्ट केस तक
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  <strong>परक्राम्य लिखत अधिनियम, 1881 की धारा 138 और धारा 142 (Sections 138 &amp; 142 of the Negotiable Instruments Act, 1881) में चेक बाउंस का मुकदमा चलाने के लिए 4 क्रमिक समय सीमाएं निर्धारित हैं।</strong> यदि इनमें से किसी भी एक चरण में देरी होती है, तो आपकी आपराधिक शिकायत खारिज हो सकती है। नीचे दी गई तालिका में हर चरण की सटीक समय सीमा, उसकी गणना का नियम और लागू कानूनी धारा स्पष्ट रूप से दी गई है:
                </p>

                <div className="overflow-x-auto -mx-5 sm:mx-0 px-5 sm:px-0">
                  <table className="w-full text-left border-collapse border border-slate-200 rounded-xl overflow-hidden text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3 sm:p-3.5 font-bold border-b border-slate-700">
                          चरण (Stage)
                        </th>
                        <th className="p-3 sm:p-3.5 font-bold border-b border-slate-700">
                          कानूनी समय सीमा (Time Limit)
                        </th>
                        <th className="p-3 sm:p-3.5 font-bold border-b border-slate-700">
                          गिनती कब से शुरू होती है?
                        </th>
                        <th className="p-3 sm:p-3.5 font-bold border-b border-slate-700">
                          लागू धारा (Statutory Section)
                        </th>
                        <th className="p-3 sm:p-3.5 font-bold border-b border-slate-700">
                          समय चूकने पर क्या होगा?
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr className="bg-white hover:bg-slate-50">
                        <td className="p-3 sm:p-3.5 font-bold text-slate-900">
                          1. बैंक में चेक जमा करना (Cheque Presentation)
                        </td>
                        <td className="p-3 sm:p-3.5 font-extrabold text-slate-900">
                          3 महीने (90 दिन)
                        </td>
                        <td className="p-3 sm:p-3.5">
                          चेक के ऊपर लिखी तारीख (Date on Cheque) से
                        </td>
                        <td className="p-3 sm:p-3.5 font-medium text-slate-800">
                          Section 138 Proviso (a) NI Act एवं RBI सर्कुलर
                        </td>
                        <td className="p-3 sm:p-3.5 text-red-700 font-medium">
                          चेक &lsquo;Stale&rsquo; (कालातीत) हो जाएगा; धारा 138 लागू नहीं होगी।
                        </td>
                      </tr>
                      <tr className="bg-red-50/40 hover:bg-red-50/70">
                        <td className="p-3 sm:p-3.5 font-bold text-slate-900">
                          2. लीगल डिमांड नोटिस भेजना (Legal Demand Notice)
                        </td>
                        <td className="p-3 sm:p-3.5 font-extrabold text-[#DC2626]">
                          30 दिन के भीतर
                        </td>
                        <td className="p-3 sm:p-3.5">
                          बैंक से रिटर्न मेमो मिलने वाले दिन को छोड़कर अगले दिन से
                        </td>
                        <td className="p-3 sm:p-3.5 font-medium text-slate-800">
                          Section 138 Proviso (b) NI Act
                        </td>
                        <td className="p-3 sm:p-3.5 text-red-700 font-medium">
                          उस मेमो पर धारा 138 का अधिकार खत्म (यदि 3 माह शेष हैं तो चेक दोबारा लगाएं)।
                        </td>
                      </tr>
                      <tr className="bg-white hover:bg-slate-50">
                        <td className="p-3 sm:p-3.5 font-bold text-slate-900">
                          3. देनदार द्वारा भुगतान का समय (Cure / Payment Window)
                        </td>
                        <td className="p-3 sm:p-3.5 font-extrabold text-amber-700">
                          15 दिन का समय
                        </td>
                        <td className="p-3 sm:p-3.5">
                          देनदार को नोटिस मिलने (Delivery / Refusal) के अगले दिन से
                        </td>
                        <td className="p-3 sm:p-3.5 font-medium text-slate-800">
                          Section 138 Proviso (c) NI Act
                        </td>
                        <td className="p-3 sm:p-3.5 text-slate-700">
                          15 दिन में भुगतान होने पर केस बंद; न होने पर 16वें दिन अपराध गठित।
                        </td>
                      </tr>
                      <tr className="bg-emerald-50/40 hover:bg-emerald-50/70">
                        <td className="p-3 sm:p-3.5 font-bold text-slate-900">
                          4. मजिस्ट्रेट कोर्ट में केस दायर करना (Filing Complaint)
                        </td>
                        <td className="p-3 sm:p-3.5 font-extrabold text-emerald-800">
                          1 महीना (30 दिन)
                        </td>
                        <td className="p-3 sm:p-3.5">
                          15 दिन की भुगतान अवधि समाप्त होने के ठीक अगले दिन (16वें दिन) से
                        </td>
                        <td className="p-3 sm:p-3.5 font-medium text-slate-800">
                          Section 142(1)(b) NI Act
                        </td>
                        <td className="p-3 sm:p-3.5 text-slate-700">
                          देरी होने पर Section 142(1)(b) Proviso के तहत माफी की अर्जी लगानी होगी।
                        </td>
                      </tr>
                      <tr className="bg-white hover:bg-slate-50">
                        <td className="p-3 sm:p-3.5 font-bold text-slate-900">
                          5. अंतरिम मुआवजा भुगतान (20% Interim Compensation)
                        </td>
                        <td className="p-3 sm:p-3.5 font-bold text-slate-900">
                          60 दिन (+30 दिन छूट)
                        </td>
                        <td className="p-3 sm:p-3.5">
                          मजिस्ट्रेट द्वारा धारा 143A का आदेश पारित होने की तारीख से
                        </td>
                        <td className="p-3 sm:p-3.5 font-medium text-slate-800">
                          Section 143A NI Act
                        </td>
                        <td className="p-3 sm:p-3.5 text-slate-700">
                          जमा न करने पर भू-राजस्व (Section 421 CrPC / Sec 461 BNSS) की तरह कुर्की।
                        </td>
                      </tr>
                      <tr className="bg-slate-50 hover:bg-slate-100">
                        <td className="p-3 sm:p-3.5 font-bold text-slate-900">
                          6. समानांतर सिविल वसूली दावा (Civil Summary Suit)
                        </td>
                        <td className="p-3 sm:p-3.5 font-bold text-slate-900">
                          3 वर्ष (3 Years)
                        </td>
                        <td className="p-3 sm:p-3.5">
                          चेक की तारीख या बाउंस मेमो की तारीख से
                        </td>
                        <td className="p-3 sm:p-3.5 font-medium text-slate-800">
                          Order XXXVII CPC &amp; Limitation Act, 1963
                        </td>
                        <td className="p-3 sm:p-3.5 text-slate-700">
                          यदि धारा 138 की समय सीमा निकल गई हो, तब भी 3 साल तक वसूली संभव।
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-5 p-4 bg-slate-100 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <p className="text-xs sm:text-sm text-slate-700">
                    <strong>अंग्रेजी में विस्तृत समय-सारिणी पढ़ें:</strong> यदि आप या आपके अधिवक्ता अंग्रेजी में धारा 138 के नियमों का अध्ययन करना चाहते हैं, तो हमारी{" "}
                    <Link
                      href="/cheque-bounce-notice-timeline-section-138"
                      className="text-[#DC2626] font-bold underline hover:text-red-800"
                    >
                      Section 138 Cheque Bounce Notice Timeline Guide
                    </Link>{" "}
                    देखें या सीधे{" "}
                    <Link
                      href="/tools/cheque-bounce-deadline-calculator"
                      className="text-[#DC2626] font-bold underline hover:text-red-800"
                    >
                      Cheque Bounce Deadline Calculator
                    </Link>{" "}
                    का उपयोग करें।
                  </p>
                </div>
              </section>

              {/* SECTION 2: सवाल-जवाब (Archetype H2 Q&A Deep-Dive Sections — 8 Real User Questions) */}
              <section
                id="heading-qa-guide"
                className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-8 shadow-xs scroll-mt-28 space-y-8"
              >
                <div>
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-[#DC2626] border border-red-200 mb-3">
                    सवाल-जवाब गाइड • धारा 138 के हर नियम का स्पष्ट उत्तर
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900">
                    चेक बाउंस नोटिस और केस से जुड़े 8 मुख्य सवाल व जवाब
                  </h2>
                </div>

                {/* Q1 */}
                <div className="p-4 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900">
                    प्रश्न 1: चेक बाउंस होने के कितने दिन बाद नोटिस देना चाहिए और 30 दिन की गिनती कैसे होती है?
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-slate-800 font-semibold leading-relaxed bg-white p-3.5 rounded-xl border-l-4 border-[#DC2626]">
                    <strong>सीधा उत्तर:</strong> परक्राम्य लिखत अधिनियम, 1881 की धारा 138 के परंतु (b) (Section 138 Proviso (b) NI Act) के तहत, बैंक से चेक बाउंस होने की आधिकारिक सूचना यानी &lsquo;चेक रिटर्न मेमो&rsquo; (Cheque Return Memo) मिलने के ठीक 30 दिनों के भीतर देनदार को लिखित डिमांड नोटिस भेजना अनिवार्य है।
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <strong>गिनती का महत्वपूर्ण नियम (Exclusion of First Day):</strong> अक्सर लोग यह गलती करते हैं कि जिस दिन चेक बैंक में जमा किया या जिस दिन SMS आया, उस दिन से गिनती शुरू कर देते हैं। सुप्रीम कोर्ट ने <em>Saketh India Ltd. v. India Securities Ltd. (1999) 3 SCC 1</em> और संवैधानिक पीठ ने <em>Econ Antri Ltd. v. Rom Industries Ltd. (2014) 11 SCC 769</em> में स्पष्ट किया है कि साधारण खंड अधिनियम की धारा 9 (Section 9 General Clauses Act, 1897) के अनुसार <strong>जिस दिन बैंक से रिटर्न मेमो प्राप्त होता है, उस पहले दिन को गिनती से बाहर रखा जाता है</strong> और अगले दिन से 30 कैलेंडर दिन गिने जाते हैं। उदाहरण के लिए, यदि आपको 5 अक्टूबर को बैंक से रिटर्न मेमो मिला, तो आपकी 30 दिन की अवधि 6 अक्टूबर से शुरू होकर 4 नवंबर की मध्यरात्रि तक रहेगी।
                  </p>
                </div>

                {/* Q2 */}
                <div className="p-4 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900">
                    प्रश्न 2: नोटिस भेजने के बाद देनदार को पैसे चुकाने के लिए कितने दिन का समय देना पड़ता है?
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-slate-800 font-semibold leading-relaxed bg-white p-3.5 rounded-xl border-l-4 border-[#DC2626]">
                    <strong>सीधा उत्तर:</strong> धारा 138 के परंतु (c) (Section 138 Proviso (c) NI Act) के अनुसार, जब देनदार को आपका कानूनी डिमांड नोटिस प्राप्त (Deliver) हो जाता है, तो उस तारीख के अगले दिन से उसे भुगतान करने के लिए पूरे <strong>15 दिन</strong> का वैधानिक समय (Cure Period) देना अनिवार्य है।
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    ध्यान रखें कि यह 15 दिन का समय <strong>नोटिस भेजने (Dispatch) की तारीख से नहीं, बल्कि देनदार को नोटिस मिलने (Service/Receipt) की तारीख से</strong> गिना जाता है। यदि आप स्वयं हिंदी में नोटिस का प्रारूप देखना चाहते हैं, तो हमारा{" "}
                    <Link
                      href="/templates/cheque-bounce-notice-format-hindi"
                      className="text-[#DC2626] font-bold underline hover:text-red-800"
                    >
                      चेक बाउंस नोटिस फॉर्मेट हिंदी में (Section 138 Notice Format)
                    </Link>{" "}
                    जरूर देखें, जिसमें 15-दिन की वैधानिक चेतावनी की सटीक शब्दावली दी गई है।
                  </p>
                </div>

                {/* Q3 */}
                <div className="p-4 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900">
                    प्रश्न 3: यदि 15 दिन पूरे होने से पहले ही कोर्ट में केस डाल दिया जाए तो क्या होगा?
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-slate-800 font-semibold leading-relaxed bg-white p-3.5 rounded-xl border-l-4 border-[#DC2626]">
                    <strong>सीधा उत्तर:</strong> सुप्रीम कोर्ट की 3-जजों की पीठ के ऐतिहासिक फैसले <em>Yogendra Pratap Singh v. Savitri Pandey (2014) 10 SCC 713</em> के अनुसार, 15 दिन की भुगतान अवधि समाप्त होने से पहले दायर किया गया कोई भी चेक बाउंस केस &lsquo;समय-पूर्व&rsquo; (Premature Complaint) माना जाता है और कानून की नजर में अमान्य है।
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    सुप्रीम कोर्ट ने स्पष्ट किया कि जब तक नोटिस प्राप्ति के पूरे 15 दिन समाप्त नहीं हो जाते, तब तक धारा 138 के तहत अपराध का जन्म (Cause of Action) ही नहीं होता। यदि किसी ने जल्दबाजी में 12वें या 14वें दिन केस फाइल कर दिया है, तो मजिस्ट्रेट उस शिकायत पर संज्ञान नहीं ले सकते और शिकायतकर्ता को 15 दिन बीतने के बाद नई शिकायत (यदि आवश्यक हो तो देरी माफी के साथ) दायर करनी होगी।
                  </p>
                </div>

                {/* Q4 */}
                <div className="p-4 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900">
                    प्रश्न 4: 15 दिन बीतने के बाद कोर्ट में केस कितने दिन में दर्ज करना होता है और क्या देरी माफ हो सकती है?
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-slate-800 font-semibold leading-relaxed bg-white p-3.5 rounded-xl border-l-4 border-[#DC2626]">
                    <strong>सीधा उत्तर:</strong> परक्राम्य लिखत अधिनियम की धारा 142(1)(b) (Section 142(1)(b) NI Act) के तहत, 15 दिन की मोहलत समाप्त होने के ठीक अगले दिन (16वें दिन) से <strong>1 महीने (30 दिन)</strong> के भीतर मजिस्ट्रेट कोर्ट में आपराधिक शिकायत दर्ज करना अनिवार्य है।
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <strong>देरी की माफी (Condonation of Delay) का महत्वपूर्ण अंतर:</strong> कानून में 30-दिन के भीतर डिमांड नोटिस भेजने की समय सीमा में देरी माफ करने का कोई प्रावधान नहीं है। लेकिन कोर्ट में केस फाइल करने की 1-महीने की समय सीमा में यदि गंभीर बीमारी या किसी ठोस कारण से देरी हो जाती है, तो <strong>Section 142(1)(b) के परंतु (Proviso)</strong> के तहत मजिस्ट्रेट पर्याप्त कारण (Sufficient Cause) दिखाने पर देरी को माफ करके केस स्वीकार कर सकते हैं।
                  </p>
                </div>

                {/* Q5 */}
                <div className="p-4 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900">
                    प्रश्न 5: क्या 3 महीने की वैधता के दौरान बाउंस हुए चेक को दोबारा बैंक में लगाया जा सकता है?
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-slate-800 font-semibold leading-relaxed bg-white p-3.5 rounded-xl border-l-4 border-[#DC2626]">
                    <strong>सीधा उत्तर:</strong> हां, बिल्कुल। सुप्रीम कोर्ट ने <em>MSR Leathers v. S. Palaniappan (2013) 1 SCC 177</em> में निर्णय दिया है कि चेक पर अंकित तारीख से 3 महीने की वैधता अवधि के भीतर चेक को बैंक में कितनी भी बार प्रस्तुत किया जा सकता है।
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    यदि देनदार आपसे कहता है कि &ldquo;चेक 10 दिन बाद दोबारा लगा लो, पैसे आ जाएंगे&rdquo; और आपने पहली बार नोटिस नहीं भेजा या नोटिस भेजने के 30 दिन निकल गए, तो आप चेक की 3 महीने की वैधता खत्म होने से पहले उसे दोबारा बैंक में जमा कर सकते हैं। जब बैंक नया रिटर्न मेमो देगा, तो उस नई तारीख से आपको नोटिस भेजने के लिए पूरे <strong>30 दिन का नया समय</strong> मिल जाएगा।
                  </p>
                </div>

                {/* Q6 */}
                <div className="p-4 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900">
                    प्रश्न 6: क्या चेक बाउंस के क्रिमिनल केस (धारा 138) के साथ सिविल वसूली केस (Order 37 CPC) भी चल सकता है?
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-slate-800 font-semibold leading-relaxed bg-white p-3.5 rounded-xl border-l-4 border-[#DC2626]">
                    <strong>सीधा उत्तर:</strong> हां, भारतीय कानून के तहत एक ही बाउंस चेक पर आप धारा 138 का क्रिमिनल केस (2 साल जेल या दोगुना जुर्माना) और सिविल प्रक्रिया संहिता के Order 37 के तहत समरी सूट (ब्याज सहित कुर्की व वसूली) दोनों एक साथ चला सकते हैं।
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    सुप्रीम कोर्ट ने <em>D. Purushotama Reddy v. K. Sateesh (2008) 8 SCC 505</em> में स्पष्ट किया है कि दीवानी और फौजदारी दोनों कार्यवाही एक साथ चलने में &lsquo;दोहरे दंड&rsquo; (Double Jeopardy) की कोई बाधा नहीं है, बस एक कोर्ट में मिली राशि दूसरे कोर्ट के आदेश में समायोजित हो जाती है। इस विषय पर पूरी रणनीति पढ़ने के लिए हमारी विस्तृत गाइड{" "}
                    <Link
                      href="/cheque-bounce-and-civil-suit-together"
                      className="text-[#DC2626] font-bold underline hover:text-red-800"
                    >
                      Cheque Bounce Case and Civil Suit Together
                    </Link>{" "}
                    पढ़ें।
                  </p>
                </div>

                {/* Q7 */}
                <div className="p-4 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900">
                    प्रश्न 7: सुप्रीम कोर्ट के 2025 के नए चेक बाउंस नियमों (Sanjabij Tari 2025 Guidelines) में क्या बदला है?
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-slate-800 font-semibold leading-relaxed bg-white p-3.5 rounded-xl border-l-4 border-[#DC2626]">
                    <strong>सीधा उत्तर:</strong> 25 सितंबर 2025 को सुप्रीम कोर्ट ने <em>Sanjabij Tari v. Kishore S. Borcar (2025 INSC 1158)</em> में देश भर की अदालतों के लिए नए बाध्यकारी नियम लागू किए हैं (1 नवंबर 2025 से प्रभावी), जिनसे चेक बाउंस मामलों का निपटारा तेज हो गया है।
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
                    <li>
                      <strong>WhatsApp और ईमेल से ई-सम्मन अनिवार्य:</strong> शिकायत दर्ज करते समय ही शिकायतकर्ता को आरोपी का मोबाइल नंबर और ईमेल देना होगा ताकि कोर्ट पहले दिन ही डिजिटल सम्मन भेज सके।
                    </li>
                    <li>
                      <strong>ऑनलाइन भुगतान लिंक (QR/Bank Link):</strong> सम्मन के साथ ही आरोपी को ऑनलाइन भुगतान का विकल्प दिया जाएगा ताकि यदि वह तुरंत चेक राशि जमा कर दे तो केस पहली ही तारीख पर समाप्त हो सके।
                    </li>
                    <li>
                      <strong>समझौता शुल्क (Compounding Cost) में राहत:</strong> यदि आरोपी शुरुआती चरण (बचाव दर्ज करने से पहले) में समझौता करता है तो जुर्माना केवल 5%, गवाही से पहले 7.5%, और फैसले से पहले 10% रखा गया है। पूरी जानकारी के लिए{" "}
                      <Link
                        href="/law/cheque-bounce-supreme-court-guidelines-2025"
                        className="text-[#DC2626] font-bold underline hover:text-red-800"
                      >
                        Supreme Court 2025 Cheque Bounce Guidelines
                      </Link>{" "}
                      देखें।
                    </li>
                  </ul>
                </div>

                {/* Q8 */}
                <div className="p-4 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900">
                    प्रश्न 8: यदि चेक किसी कंपनी या फर्म का है, तो नोटिस किसे और कितने दिन में भेजना होगा?
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-slate-800 font-semibold leading-relaxed bg-white p-3.5 rounded-xl border-l-4 border-[#DC2626]">
                    <strong>सीधा उत्तर:</strong> परक्राम्य लिखत अधिनियम की धारा 141 (Section 141 NI Act) के तहत, यदि चेक किसी प्राइवेट लिमिटेड कंपनी या पार्टनरशिप फर्म ने जारी किया है, तो 30 दिन के भीतर <strong>कंपनी के साथ-साथ उसके सभी सक्रिय निदेशकों (Directors) व हस्ताक्षरकर्ता</strong> को भी नोटिस भेजना अनिवार्य है।
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    सुप्रीम कोर्ट के <em>Aneeta Hada v. Godfather Travels &amp; Tours (2012) 5 SCC 661</em> फैसले के अनुसार, कंपनी को मुख्य आरोपी बनाए बिना केवल डायरेक्टर पर धारा 138 का मुकदमा नहीं चल सकता। इसलिए 30 दिन की समय सीमा के भीतर कंपनी के रजिस्टर्ड ऑफिस और डायरेक्टर्स के पते पर संयुक्त डिमांड नोटिस भिजवाएं (विस्तार से पढ़ें:{" "}
                    <Link
                      href="/cheque-bounce-case-against-company-directors"
                      className="text-[#DC2626] font-bold underline hover:text-red-800"
                    >
                      Company Cheque Bounce &amp; Directors Liability under Section 141
                    </Link>
                    )।
                  </p>
                </div>
              </section>

              {/* SECTION 3: नोटिस भेजने और केस की प्रक्रिया (SVG Flowchart + 5 Steps) */}
              <section
                id="heading-process-flowchart"
                className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-8 shadow-xs scroll-mt-28"
              >
                <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-[#DC2626] border border-red-200 mb-3">
                  नोटिस व मुकदमे का रोडमैप • Section 138 Escalation Rail
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                  चेक बाउंस नोटिस भेजने व कोर्ट केस की पूरी प्रक्रिया
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  <strong>चेक बाउंस मामले में आपकी सफलता इस बात पर निर्भर करती है कि आपने समय सीमा के हर कदम पर सही दस्तावेज़ी सबूत तैयार किए हैं या नहीं।</strong> नीचे दिए गए फ्लोचार्ट में चेक जमा करने से लेकर धारा 143A के तहत 20% अंतरिम मुआवजे और अंतिम वसूली तक का पूरा कानूनी क्रम दर्शाया गया है:
                </p>

                {/* Desktop Hand-Authored SVG Flowchart */}
                <div className="hidden md:block bg-slate-900 rounded-2xl p-6 border border-slate-800 mb-6 overflow-x-auto">
                  <svg
                    viewBox="0 0 920 220"
                    className="w-full h-auto"
                    role="img"
                    aria-label="चेक बाउंस धारा 138 समय सीमा और प्रक्रिया का फ्लोचार्ट: 3 महीने में चेक जमा, 30 दिन में नोटिस, 15 दिन भुगतान, 1 महीने में कोर्ट केस"
                  >
                    <title>चेक बाउंस धारा 138 समय सीमा फ्लोचार्ट (Section 138 NI Act Timeline Flowchart in Hindi)</title>
                    <defs>
                      <marker
                        id="arrow-hi"
                        viewBox="0 0 10 10"
                        refX="6"
                        refY="5"
                        markerWidth="6"
                        markerHeight="6"
                        orient="auto-start-reverse"
                      >
                        <path d="M 0 1 L 10 5 L 0 9 z" fill="#EF4444" />
                      </marker>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="30" width="160" height="150" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="2" />
                    <text x="90" y="58" textAnchor="middle" fill="#94A3B8" fontSize="11" fontWeight="bold">चरण 1 • Section 138(a)</text>
                    <text x="90" y="84" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">चेक बाउंस व</text>
                    <text x="90" y="104" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">रिटर्न मेमो</text>
                    <rect x="28" y="122" width="124" height="38" rx="8" fill="#0F172A" stroke="#334155" />
                    <text x="90" y="145" textAnchor="middle" fill="#38BDF8" fontSize="12" fontWeight="bold">3 महीने की वैधता</text>

                    <line x1="170" y1="105" x2="195" y2="105" stroke="#EF4444" strokeWidth="2.5" markerEnd="url(#arrow-hi)" />

                    {/* Step 2 */}
                    <rect x="200" y="30" width="165" height="150" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2.5" />
                    <text x="282" y="58" textAnchor="middle" fill="#FCA5A5" fontSize="11" fontWeight="bold">चरण 2 • Section 138(b)</text>
                    <text x="282" y="84" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">वकील द्वारा</text>
                    <text x="282" y="104" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">डिमांड नोटिस</text>
                    <rect x="218" y="122" width="128" height="38" rx="8" fill="#450A0A" stroke="#DC2626" />
                    <text x="282" y="145" textAnchor="middle" fill="#F87171" fontSize="12" fontWeight="bold">मेमो से 30 दिन में</text>

                    <line x1="365" y1="105" x2="390" y2="105" stroke="#EF4444" strokeWidth="2.5" markerEnd="url(#arrow-hi)" />

                    {/* Step 3 */}
                    <rect x="395" y="30" width="160" height="150" rx="12" fill="#1E293B" stroke="#F59E0B" strokeWidth="2" />
                    <text x="475" y="58" textAnchor="middle" fill="#FCD34D" fontSize="11" fontWeight="bold">चरण 3 • Section 138(c)</text>
                    <text x="475" y="84" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">देनदार को भुगतान</text>
                    <text x="475" y="104" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">का अवसर</text>
                    <rect x="413" y="122" width="124" height="38" rx="8" fill="#451A03" stroke="#D97706" />
                    <text x="475" y="145" textAnchor="middle" fill="#FBBF24" fontSize="12" fontWeight="bold">तामील से 15 दिन</text>

                    <line x1="555" y1="105" x2="580" y2="105" stroke="#EF4444" strokeWidth="2.5" markerEnd="url(#arrow-hi)" />

                    {/* Step 4 */}
                    <rect x="585" y="30" width="160" height="150" rx="12" fill="#1E293B" stroke="#10B981" strokeWidth="2" />
                    <text x="665" y="58" textAnchor="middle" fill="#6EE7B7" fontSize="11" fontWeight="bold">चरण 4 • Section 142(1)(b)</text>
                    <text x="665" y="84" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">मजिस्ट्रेट कोर्ट में</text>
                    <text x="665" y="104" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">शिकायत दर्ज</text>
                    <rect x="603" y="122" width="124" height="38" rx="8" fill="#064E3B" stroke="#059669" />
                    <text x="665" y="145" textAnchor="middle" fill="#34D399" fontSize="12" fontWeight="bold">16वें दिन से 1 महीना</text>

                    <line x1="745" y1="105" x2="770" y2="105" stroke="#EF4444" strokeWidth="2.5" markerEnd="url(#arrow-hi)" />

                    {/* Step 5 */}
                    <rect x="775" y="30" width="135" height="150" rx="12" fill="#1E293B" stroke="#6366F1" strokeWidth="2" />
                    <text x="842" y="58" textAnchor="middle" fill="#A5B4FC" fontSize="11" fontWeight="bold">चरण 5 • Sec 143A</text>
                    <text x="842" y="84" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">20% अंतरिम राहत</text>
                    <text x="842" y="104" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">व 2x जुर्माना/जेल</text>
                    <rect x="787" y="122" width="110" height="38" rx="8" fill="#1E1B4B" stroke="#4F46E5" />
                    <text x="842" y="145" textAnchor="middle" fill="#818CF8" fontSize="11" fontWeight="bold">60 दिन में 20%</text>
                  </svg>
                </div>

                {/* Mobile Step Cards + Detailed 5-Step Actionable Guide */}
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center">
                        1
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        चरण 1: बैंक से आधिकारिक &lsquo;चेक रिटर्न मेमो&rsquo; (Cheque Return Memo) प्राप्त करें
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-8">
                      जैसे ही बैंक से चेक बाउंस का SMS आए, अपनी बैंक शाखा से मूल चेक और बैंक की मुहर व तारीख वाला <strong>Cheque Return Memo</strong> प्राप्त करें। मेमो में बाउंस का कारण (जैसे <em>Funds Insufficient</em>,{" "}
                      <Link href="/stop-payment-cheque-bounce-case" className="text-[#DC2626] font-semibold underline">
                        Payment Stopped by Drawer
                      </Link>
                      , या{" "}
                      <Link href="/cheque-bounce-account-closed-signature-mismatch" className="text-[#DC2626] font-semibold underline">
                        Account Closed / Signature Differs
                      </Link>
                      ) स्पष्ट लिखा होना चाहिए।
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-red-50/50 border border-red-200">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center">
                        2
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        चरण 2: 30 दिनों के भीतर वकील द्वारा धारा 138 डिमांड नोटिस भिजवाएं
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-8">
                      रिटर्न मेमो मिलने के 30 दिन के अंदर अनुभवी अधिवक्ता के माध्यम से देनदार को वैधानिक नोटिस भेजें। नोटिस में चेक नंबर, तारीख, राशि, बाउंस का कारण और <strong>15 दिन में भुगतान की स्पष्ट मांग</strong> होनी चाहिए। इसे रजिस्टर्ड स्पीड पोस्ट (पावती सहित) और साथ में WhatsApp व ईमेल से भेजें। आप हमारे{" "}
                      <Link href="/legal-notice-charges" className="text-[#DC2626] font-semibold underline">
                        लीगल नोटिस शुल्क (Legal Notice Charges)
                      </Link>{" "}
                      पृष्ठ पर पारदर्शी फीस देख सकते हैं।
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center">
                        3
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        चरण 3: स्पीड पोस्ट डिलीवरी ट्रैक करें और पूरे 15 दिन प्रतीक्षा करें
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-8">
                      इंडिया पोस्ट की वेबसाइट से ट्रैकिंग रिपोर्ट डाउनलोड करें। जिस दिन नोटिस डिलीवर हुआ (या देनदार ने लेने से मना किया), उसके अगले दिन से पूरे 15 दिन गिनें। इस दौरान यदि देनदार पूरा पैसा दे देता है तो मामला वहीं समाप्त हो जाता है।
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center">
                        4
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        चरण 4: 16वें दिन से 1 महीने के भीतर मजिस्ट्रेट कोर्ट में केस दायर करें
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-8">
                      15 दिन में भुगतान न मिलने पर उस कोर्ट में शिकायत दर्ज करें जहां आपका (शिकायतकर्ता का) बैंक खाता स्थित है (धारा 142(2) NI Act संशोधन, 2015)। शिकायत के साथ मूल चेक, मूल रिटर्न मेमो, नोटिस की प्रति, पोस्टल रसीद, ट्रैकिंग रिपोर्ट और शपथ पत्र (Pre-summoning Evidence Affidavit) संलग्न होता है।
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center">
                        5
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        चरण 5: ई-सम्मन और धारा 143A के तहत 20% अंतरिम मुआवजे की मांग
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-8">
                      कोर्ट आरोपी को सम्मन जारी करता है (2025 के सुप्रीम कोर्ट नियमों के तहत WhatsApp/Email से भी)। आरोपी के कोर्ट में पेश होने पर धारा 143A का आवेदन लगाकर तुरंत <strong>20% अंतरिम मुआवजा</strong> प्राप्त करें। दोषसिद्ध होने पर आरोपी को अधिकतम 2 वर्ष का कारावास या चेक राशि के दोगुने तक जुर्माने की सजा होती है।
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 4: सुप्रीम कोर्ट के प्रमुख फैसले (Landmark Court Rulings Digest) */}
              <section
                id="heading-court-rulings"
                className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-8 shadow-xs scroll-mt-28"
              >
                <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-[#DC2626] border border-red-200 mb-3">
                  न्यायिक नजीर • Landmark Supreme Court Judgments
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                  चेक बाउंस की समय सीमा पर सुप्रीम कोर्ट के 4 ऐतिहासिक फैसले
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  <strong>भारत के सर्वोच्च न्यायालय ने धारा 138 और 142 की समय सीमा की गणना को लेकर सभी भ्रम दूर कर दिए हैं।</strong> नीचे दिए गए चारों फैसलों का उल्लेख हमारे एडवोकेट आपके डिमांड नोटिस में भी करते हैं ताकि देनदार किसी तकनीकी बहाने का सहारा न ले सके:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <article className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-md bg-slate-900 text-white text-[11px] font-bold mb-2">
                        Saketh India Ltd. v. India Securities Ltd., (1999) 3 SCC 1
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                        30 दिन और 1 महीने की गिनती में पहला दिन छोड़ने का नियम
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        सुप्रीम कोर्ट ने निर्धारित किया कि जिस दिन बैंक से रिटर्न मेमो मिलता है या जिस दिन 15-दिन की नोटिस अवधि समाप्त होती है, उस पहले दिन को गिनती करते समय छोड़ (Exclude) दिया जाएगा। इस सिद्धांत को बाद में 5-जजों की संवैधानिक पीठ ने <em>Econ Antri Ltd. v. Rom Industries Ltd. (2014) 11 SCC 769</em> में भी पुष्ट किया।
                      </p>
                    </div>
                    <p className="text-[11px] font-bold text-[#DC2626] mt-3 pt-2 border-t border-slate-200">
                      लाभ: आपको नोटिस और केस के लिए पूरा 30वां दिन मिलता है।
                    </p>
                  </article>

                  <article className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-md bg-slate-900 text-white text-[11px] font-bold mb-2">
                        Yogendra Pratap Singh v. Savitri Pandey, (2014) 10 SCC 713
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                        15 दिन पूरे होने से पहले केस दायर करना अमान्य (Premature Complaint)
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        सुप्रीम कोर्ट की तीन-न्यायाधीशों की पीठ ने फैसला सुनाया कि जब तक देनदार को नोटिस तामील होने के बाद पूरे 15 दिन का समय नहीं बीत जाता, तब तक कोई अपराध गठित नहीं होता। 15 दिन से पहले दायर शिकायत पर कोर्ट संज्ञान नहीं ले सकता।
                      </p>
                    </div>
                    <p className="text-[11px] font-bold text-[#DC2626] mt-3 pt-2 border-t border-slate-200">
                      नियम: हमेशा 16वें दिन या उसके बाद ही कोर्ट में परिवाद दायर करें।
                    </p>
                  </article>

                  <article className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-md bg-slate-900 text-white text-[11px] font-bold mb-2">
                        MSR Leathers v. S. Palaniappan, (2013) 1 SCC 177
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                        3 महीने में चेक को एक से अधिक बार जमा करने पर नया 30-दिन का अधिकार
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        तीन जजों की पीठ ने पुराने फैसले (Sadanandan Bhadran) को पलटते हुए कहा कि चेक की 3 महीने की वैधता के भीतर उसे कई बार बैंक में जमा किया जा सकता है और अंतिम बाउंस के रिटर्न मेमो से 30 दिन में नोटिस भेजकर केस चलाया जा सकता है।
                      </p>
                    </div>
                    <p className="text-[11px] font-bold text-[#DC2626] mt-3 pt-2 border-t border-slate-200">
                      राहत: पहली बार 30 दिन चूकने पर दोबारा चेक लगाकर समय बचाएं।
                    </p>
                  </article>

                  <article className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-md bg-red-700 text-white text-[11px] font-bold mb-2">
                        Sanjabij Tari v. Kishore S. Borcar, 2025 INSC 1158
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                        सितंबर 2025 के नए दिशा-निर्देश: WhatsApp/Email ई-सम्मन व त्वरित निपटारा
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        सुप्रीम कोर्ट ने 1 नवंबर 2025 से लागू दिशानिर्देशों में आदेश दिया कि धारा 138 मामलों में सम्मन डाक के साथ-साथ WhatsApp, SMS और ईमेल से तुरंत भेजे जाएं, और शुरुआती चरण में समझौता करने पर कम समझौता शुल्क (5% से 10%) लगाया जाए।
                      </p>
                    </div>
                    <p className="text-[11px] font-bold text-[#DC2626] mt-3 pt-2 border-t border-slate-200">
                      प्रभाव: नोटिस व केस में आरोपी का सही WhatsApp नंबर व ईमेल अवश्य दें।
                    </p>
                  </article>
                </div>
              </section>

              {/* SECTION 5: वास्तविक उदाहरण (Worked Example with Date-by-Date Calculation) */}
              <section
                id="heading-worked-example"
                className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-8 shadow-xs scroll-mt-28"
              >
                <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 mb-3">
                  व्यावहारिक उदाहरण • Date-by-Date Statutory Calculation
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                  तारीख-दर-तारीख उदाहरण: ₹5.4 लाख चेक बाउंस की सटीक गणना
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  <strong>आइए एक वास्तविक व्यापारिक उदाहरण से समझें कि तारीखों की गिनती कैसे काम करती है:</strong> मान लीजिए जयपुर के कपड़ा व्यापारी <strong>राजेश वर्मा</strong> को उनके खरीदार ने ₹5,40,000 का चेक दिया जिसकी तारीख <strong>1 अगस्त 2026</strong> है। नीचे देखें कि हर कानूनी समय सीमा किस तारीख को शुरू और समाप्त होती है:
                </p>

                <div className="overflow-x-auto -mx-5 sm:mx-0 px-5 sm:px-0 mb-5">
                  <table className="w-full text-left border-collapse border border-slate-200 rounded-xl overflow-hidden text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-800 text-white">
                        <th className="p-3 font-bold">घटना (Event)</th>
                        <th className="p-3 font-bold">उदाहरण तारीख (Date)</th>
                        <th className="p-3 font-bold">कानूनी नियम के अनुसार अंतिम तिथि (Deadline)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr className="bg-white">
                        <td className="p-3 font-semibold text-slate-900">1. चेक पर लिखी तारीख (Cheque Date)</td>
                        <td className="p-3">1 अगस्त 2026</td>
                        <td className="p-3">
                          बैंक में जमा करने की अंतिम तिथि: <strong>31 अक्टूबर 2026</strong> (3 महीने की वैधता)
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="p-3 font-semibold text-slate-900">2. बैंक से रिटर्न मेमो मिला (Return Memo Received)</td>
                        <td className="p-3">10 सितंबर 2026</td>
                        <td className="p-3">
                          10 सितंबर का दिन छोड़ दिया जाएगा; गिनती <strong>11 सितंबर 2026</strong> से शुरू होगी।
                        </td>
                      </tr>
                      <tr className="bg-red-50/50">
                        <td className="p-3 font-bold text-[#DC2626]">3. धारा 138 डिमांड नोटिस भेजने की अंतिम तिथि</td>
                        <td className="p-3 font-bold text-[#DC2626]">10 अक्टूबर 2026 तक</td>
                        <td className="p-3">
                          राजेश ने समय रहते <strong>22 सितंबर 2026</strong> को वकील से स्पीड पोस्ट व WhatsApp नोटिस भिजवा दिया।
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-3 font-semibold text-slate-900">4. देनदार को नोटिस प्राप्त हुआ (Notice Delivered)</td>
                        <td className="p-3">25 सितंबर 2026</td>
                        <td className="p-3">
                          25 सितंबर को छोड़कर 26 सितंबर से 15 दिन गिने गए — भुगतान की अंतिम तिथि: <strong>10 अक्टूबर 2026</strong>।
                        </td>
                      </tr>
                      <tr className="bg-emerald-50/50">
                        <td className="p-3 font-bold text-emerald-900">5. वाद कारण (Cause of Action) व कोर्ट केस समय</td>
                        <td className="p-3 font-bold text-emerald-900">11 अक्टूबर 2026 से शुरू</td>
                        <td className="p-3">
                          मजिस्ट्रेट कोर्ट में केस दायर करने की अंतिम तिथि: <strong>10 नवंबर 2026</strong> (1 महीना — Section 142(1)(b))।
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950">
                  <strong>परिणाम:</strong> चूंकि राजेश वर्मा ने 22 सितंबर को वैधानिक नोटिस भेज दिया था जिसमें धारा 138(b) और 2025 के नए सुप्रीम कोर्ट दिशा-निर्देशों के तहत गिरफ्तारी वारंट व दोगुने जुर्माने (₹10,80,000) की चेतावनी थी, देनदार ने 15-दिन की अवधि खत्म होने से पहले <strong>7 अक्टूबर 2026</strong> को RTGS द्वारा पूरे ₹5,40,000 का भुगतान कर दिया।
                </div>
              </section>

              {/* SECTION 6: Interactive Scenario Tabs */}
              <section
                id="heading-scenario-tabs"
                className="scroll-mt-28 space-y-4"
              >
                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-8 shadow-xs">
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-[#DC2626] border border-red-200 mb-3">
                    विशेष परिस्थितियां • Interactive Scenario Solver
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
                    यदि 30 दिन निकल जाएं या स्टॉप पेमेंट हो तो क्या करें?
                  </h2>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                    <strong>अपनी वर्तमान स्थिति के अनुसार नीचे दिए गए टैब पर क्लिक करें और जानें कि आपके पास कौन सा कानूनी विकल्प उपलब्ध है:</strong>
                  </p>

                  <ChequeBounceHindiTabs />
                </div>
              </section>

              {/* SECTION 7: दस्तावेज़ और सबूत चेकलिस्ट (6-Point BSA Section 63 Evidence Checklist) */}
              <section
                id="heading-evidence-checklist"
                className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-8 shadow-xs scroll-mt-28"
              >
                <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-[#DC2626] border border-red-200 mb-3">
                  दस्तावेज़ सूची • Pre-Notice &amp; Court Filing Checklist
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                  चेक बाउंस नोटिस भेजने और केस जीतने के लिए 6 अनिवार्य दस्तावेज़
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  <strong>धारा 138 का नोटिस भेजने और बाद में कोर्ट में मुकदमा दर्ज करने के लिए नीचे दिए गए 6 दस्तावेज़ अभी से एक फाइल में सुरक्षित कर लें:</strong>
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-xs font-extrabold text-[#DC2626] uppercase">दस्तावेज़ 1</span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mt-1">
                      मूल बाउंस चेक (Original Dishonoured Cheque)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                      मूल चेक अपने पास सुरक्षित रखें और उसकी आगे-पीछे दोनों तरफ की साफ रंगीन स्कैन कॉपी/फोटो अपने फोन व ईमेल में सेव कर लें।
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-xs font-extrabold text-[#DC2626] uppercase">दस्तावेज़ 2</span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mt-1">
                      बैंक रिटर्न मेमो (Original Cheque Return Memo)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                      बैंक द्वारा जारी रिटर्न मेमो जिस पर चेक बाउंस होने की तारीख, कारण और बैंक शाखा की आधिकारिक मुहर (धारा 146 NI Act के तहत प्राथमिक साक्ष्य) हो।
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-xs font-extrabold text-[#DC2626] uppercase">दस्तावेज़ 3</span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mt-1">
                      कानूनी डिमांड नोटिस की कार्यालय प्रति (Copy of Legal Notice)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                      अधिवक्ता के लेटरहेड पर हस्ताक्षरित धारा 138(b) नोटिस जिसमें 15 दिनों के भीतर चेक राशि चुकाने की स्पष्ट मांग की गई हो।
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-xs font-extrabold text-[#DC2626] uppercase">दस्तावेज़ 4</span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mt-1">
                      स्पीड पोस्ट रसीद व डिलीवरी ट्रैकिंग (Postal Receipt &amp; Tracking)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                      मूल डाक रसीद, इंडिया पोस्ट ट्रैकिंग रिपोर्ट (जिसमें डिलीवरी की तारीख दिखे), या &lsquo;Refused&rsquo; लिखकर वापस आया बंद लिफाफा।
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-xs font-extrabold text-[#DC2626] uppercase">दस्तावेज़ 5</span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mt-1">
                      लेनदेन या उधारी का प्रमाण (Proof of Legally Enforceable Debt)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                      इनवॉइस, बिल, लोन एग्रीमेंट, बैंक स्टेटमेंट या UPI ट्रांसफर विवरण। यदि आपने दोस्त को उधार दिया था, तो{" "}
                      <Link href="/hi/udhar-paisa-wapas-kaise-le" className="text-[#DC2626] font-semibold underline">
                        उधार पैसा वापस कैसे लें गाइड
                      </Link>{" "}
                      भी पढ़ें।
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-xs font-extrabold text-[#DC2626] uppercase">दस्तावेज़ 6 • BSA Section 63</span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mt-1">
                      WhatsApp/Email तामील व धारा 63 प्रमाणपत्र (Digital Certificate)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                      भारतीय साक्ष्य अधिनियम, 2023 की धारा 63 (Section 63 BSA, 2023 — पूर्व धारा 65B) के तहत WhatsApp चैट, ईमेल नोटिस और ई-ट्रैकिंग का प्रमाणपत्र।
                    </p>
                  </div>
                </div>

                {/* Honest Scope Block */}
                <div className="p-4 sm:p-5 rounded-xl bg-amber-50/80 border border-amber-200 text-xs sm:text-sm text-amber-950 space-y-1.5">
                  <strong className="font-extrabold text-amber-900 block">
                    ⚖️ हमारी सेवा का स्पष्ट दायरा (Honest Scope of Service):
                  </strong>
                  <p className="leading-relaxed">
                    <strong>LegalRecovery.in क्या करता है:</strong> हमारे पंजीकृत एडवोकेट आपके दस्तावेज़ों की जांच करके धारा 138(b) के तहत वैधानिक चेक बाउंस डिमांड नोटिस (₹{basePrice} शुल्क में) तैयार करते हैं और उसे देनदार को रजिस्टर्ड स्पीड पोस्ट तथा इलेक्ट्रॉनिक माध्यम (WhatsApp/Email) से तामील कराते हैं, जिससे 15 दिन की भुगतान प्रक्रिया शुरू होती है।{" "}
                    <strong>क्या शामिल नहीं है:</strong> यदि 15 दिन बाद भी देनदार भुगतान नहीं करता और आपको स्थानीय मजिस्ट्रेट कोर्ट में व्यक्तिगत रूप से धारा 142 का मुकदमा दायर करना पड़ता है, तो कोर्ट फीस और स्थानीय कोर्ट में पैरवी का खर्च इस नोटिस शुल्क में शामिल नहीं है।
                  </p>
                </div>
              </section>

              {/* SECTION 8: अक्सर पूछे जाने वाले प्रश्न (FAQs — Matching FAQ_SCHEMA) */}
              <section
                id="heading-faqs"
                className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-8 shadow-xs scroll-mt-28"
              >
                <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-[#DC2626] border border-red-200 mb-3">
                  अक्सर पूछे जाने वाले सवाल • Section 138 FAQs in Hindi
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mb-6">
                  चेक बाउंस नोटिस समय सीमा: अक्सर पूछे जाने वाले प्रश्न
                </h2>

                <div className="space-y-3">
                  {FAQ_ITEMS.map((faq, index) => (
                    <details
                      key={index}
                      className="group rounded-xl border border-slate-200 bg-slate-50/70 open:bg-white open:shadow-xs transition-all"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 sm:p-5 font-bold text-slate-900 text-sm sm:text-base select-none">
                        <span>{faq.question}</span>
                        <span className="shrink-0 w-6 h-6 rounded-full bg-slate-200 group-open:bg-red-100 group-open:text-[#DC2626] flex items-center justify-center text-xs transition-transform group-open:rotate-180">
                          ▼
                        </span>
                      </summary>
                      <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* SECTION 9: कानूनी स्रोत (Primary Sources) */}
              <section
                id="heading-sources"
                className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-8 shadow-xs scroll-mt-28"
              >
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-4">
                  प्रमुख कानूनी स्रोत, अधिनियम व सुप्रीम कोर्ट संदर्भ
                </h2>
                <ol className="sources list-decimal pl-5 space-y-2 text-xs sm:text-sm text-slate-600">
                  <li>
                    <a
                      href="https://www.indiacode.nic.in/handle/123456789/2189"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-800 font-semibold underline hover:text-[#DC2626]"
                    >
                      परक्राम्य लिखत अधिनियम, 1881 (Negotiable Instruments Act, 1881 — Sections 138, 139, 141, 142 &amp; 143A)
                    </a>{" "}
                    — भारत सरकार (India Code विधायी विभाग)।
                  </li>
                  <li>
                    <span className="text-slate-800 font-semibold">
                      सर्वोच्च न्यायालय निर्णय: Sanjabij Tari v. Kishore S. Borcar (2025 INSC 1158, 25 सितंबर 2025)
                    </span>{" "}
                    — धारा 138 मामलों में ई-सम्मन, समयबद्ध ट्रायल और संशोधित समझौता शुल्क दिशा-निर्देश।
                  </li>
                  <li>
                    <span className="text-slate-800 font-semibold">
                      सर्वोच्च न्यायालय निर्णय: Saketh India Ltd. v. India Securities Ltd., (1999) 3 SCC 1 एवं Econ Antri Ltd., (2014) 11 SCC 769
                    </span>{" "}
                    — 30 दिन की नोटिस समय सीमा और 1 महीने की परिवाद अवधि में पहले दिन को छोड़ने का सिद्धांत।
                  </li>
                  <li>
                    <span className="text-slate-800 font-semibold">
                      सर्वोच्च न्यायालय निर्णय: Yogendra Pratap Singh v. Savitri Pandey, (2014) 10 SCC 713 एवं MSR Leathers v. S. Palaniappan, (2013) 1 SCC 177
                    </span>{" "}
                    — 15-दिन की भुगतान अवधि से पूर्व शिकायत की अमान्यता और 3 माह में पुनः प्रस्तुति का अधिकार।
                  </li>
                  <li>
                    <a
                      href="https://www.rbi.org.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-800 font-semibold underline hover:text-[#DC2626]"
                    >
                      भारतीय रिज़र्व बैंक (RBI) अधिसूचना DBOD.AML.BC.No.47/14.01.001/2011-12
                    </a>{" "}
                    — चेक और ड्राफ्ट की वैधता अवधि को 6 महीने से घटाकर 3 महीने करने का नियम।
                  </li>
                  <li>
                    <a
                      href="https://www.indiacode.nic.in/handle/123456789/20063"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-800 font-semibold underline hover:text-[#DC2626]"
                    >
                      भारतीय साक्ष्य अधिनियम, 2023 की धारा 63 (Section 63 of the Bharatiya Sakshya Adhiniyam, 2023)
                    </a>{" "}
                    — इलेक्ट्रॉनिक रिकॉर्ड (WhatsApp, ईमेल नोटिस व डिजिटल ट्रैकिंग) की स्वीकार्यता।
                  </li>
                </ol>
              </section>

              {/* Primary Bottom CTA */}
              <ChequeBounceHindiNoticeCTA />

              {/* Contextual Internal Links Grid */}
              <section className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-8 shadow-xs">
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-4">
                  चेक बाउंस और वसूली से जुड़ी अन्य महत्वपूर्ण गाइड व टूल्स
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <Link
                    href="/cheque-bounce-notice-timeline-section-138"
                    className="p-3.5 rounded-xl border border-slate-200 hover:border-red-300 hover:bg-red-50/30 transition-colors flex items-center justify-between font-semibold text-slate-800"
                  >
                    <span>🇬🇧 Section 138 Cheque Bounce Timeline Guide (English)</span>
                    <span className="text-[#DC2626]">→</span>
                  </Link>
                  <Link
                    href="/tools/cheque-bounce-deadline-calculator"
                    className="p-3.5 rounded-xl border border-slate-200 hover:border-red-300 hover:bg-red-50/30 transition-colors flex items-center justify-between font-semibold text-slate-800"
                  >
                    <span>🧮 चेक बाउंस अंतिम तिथि कैलकुलेटर (Deadline Calculator)</span>
                    <span className="text-[#DC2626]">→</span>
                  </Link>
                  <Link
                    href="/templates/cheque-bounce-notice-format-hindi"
                    className="p-3.5 rounded-xl border border-slate-200 hover:border-red-300 hover:bg-red-50/30 transition-colors flex items-center justify-between font-semibold text-slate-800"
                  >
                    <span>📄 चेक बाउंस नोटिस फॉर्मेट हिंदी में (Word/PDF प्रारूप)</span>
                    <span className="text-[#DC2626]">→</span>
                  </Link>
                  <Link
                    href="/cheque-bounce-and-civil-suit-together"
                    className="p-3.5 rounded-xl border border-slate-200 hover:border-red-300 hover:bg-red-50/30 transition-colors flex items-center justify-between font-semibold text-slate-800"
                  >
                    <span>⚖️ धारा 138 के साथ सिविल सूट (Order 37 CPC) कैसे चलाएं</span>
                    <span className="text-[#DC2626]">→</span>
                  </Link>
                  <Link
                    href="/law/cheque-bounce-supreme-court-guidelines-2025"
                    className="p-3.5 rounded-xl border border-slate-200 hover:border-red-300 hover:bg-red-50/30 transition-colors flex items-center justify-between font-semibold text-slate-800"
                  >
                    <span>🏛️ सुप्रीम कोर्ट 2025 चेक बाउंस नए नियम (Sanjabij Tari)</span>
                    <span className="text-[#DC2626]">→</span>
                  </Link>
                  <Link
                    href="/hi/udhar-paisa-wapas-kaise-le"
                    className="p-3.5 rounded-xl border border-slate-200 hover:border-red-300 hover:bg-red-50/30 transition-colors flex items-center justify-between font-semibold text-slate-800"
                  >
                    <span>🇮🇳 उधार दिया पैसा वापस कैसे लें: कानूनी तरीका (2026)</span>
                    <span className="text-[#DC2626]">→</span>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* Cluster Related Recovery Guides */}
        <RelatedRecoveryGuides
          cluster="banking"
          currentPath="/hi/cheque-bounce-notice-kitne-din-mein"
        />
      </main>
    </div>
  );
}
