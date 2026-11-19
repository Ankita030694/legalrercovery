import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import KhadBeejRecoveryCTA from "./KhadBeejRecoveryCTA";
import KhadBeejRecoveryTOC from "./KhadBeejRecoveryTOC";
import KhadBeejRecoveryScenarioTabs from "./KhadBeejRecoveryScenarioTabs";

export const revalidate = 86400;

const CANONICAL_URL = `${SITE_URL}/hi/khad-beej-pesticide-cold-storage-mandi-udhar-recovery-notice`;

const EXACT_H1 =
  "खाद-बीज-पेस्टीसाइड डीलर, राइस/दाल मिल और कोल्ड स्टोरेज मालिकों के लिए गाइड: फंसा हुआ सीज़नल उधार और किराया कानूनन कैसे वसूलें?";

const META_TITLE = "खाद-बीज डीलर, कोल्ड स्टोरेज व मंडी उधार की कानूनी वसूली";

const META_DESCRIPTION =
  "फसल कटने के बाद भी डीलर या मंडी पार्टी पेमेंट नहीं दे रही, या कोल्ड स्टोरेज में माल छोड़कर किराया नहीं चुका रही? ₹999 वकील नोटिस से पक्की कानूनी कार्रवाई।";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: {
    canonical: CANONICAL_URL,
    languages: {
      "hi-IN": CANONICAL_URL,
      "en-IN": `${SITE_URL}/industries/agri-inputs-cold-storage-food-processing-recovery`,
      "x-default": CANONICAL_URL,
    },
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: CANONICAL_URL,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "hi_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText("खाद-बीज डीलर, कोल्ड स्टोरेज किराया और मंडी उधार वसूली गाइड"),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
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
    title: "Negotiable Instruments Act, 1881 — Sections 138, 139, 141 & 143A (Cheque Bounce & 20% Interim Compensation) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title: "Indian Contract Act, 1872 — Sections 170 & 176 (Bailee's Lien & Pre-Auction Statutory Notice for Cold Storages) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "The Seeds Act, 1966 (Sections 14–16) & The Insecticides Act, 1968 (Sections 21–24) — Official Sampling & Lab Testing — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/1480",
  },
  {
    title: "The Code of Civil Procedure, 1908 — Order XXXVII (Summary Suit) & Order XXXVIII Rule 5 (Attachment Before Judgment) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "MSMED Act, 2006 — Sections 15, 16, 17 & 18 (45-Day Payment Limit & 3x RBI Compound Interest) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 — Section 63 (Electronic Records: E-Way Bill, Mandi Slip & WhatsApp Proof) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "MSME Samadhaan Portal (Ministry of MSME — Delayed Payment Monitoring System)",
    url: "https://samadhaan.msme.gov.in/",
  },
];

const CASE_CITATIONS = [
  {
    title: "खाद-बीज डीलर द्वारा दिया गया 'सिक्योरिटी चेक' (PDC) बाउंस होने पर भी धारा 138 का पूरा केस चलेगा",
    court: "भारत का सर्वोच्च न्यायालय (Supreme Court of India)",
    parties: "श्रीपति सिंह बनाम झारखंड राज्य (Sripati Singh v. State of Jharkhand)",
    citation: "2021 SCC OnLine SC 1002",
    date: "सुप्रीम कोर्ट लैंडमार्क निर्णय",
    holding:
      "माननीय सर्वोच्च न्यायालय ने साफ कर दिया कि यदि डीलरशिप या सीज़नल उधार के समय सुरक्षा के तौर पर कोई पोस्ट-डेटेड चेक (Security Cheque) लिया गया था और फसल कटने के बाद बिल का भुगतान नहीं हुआ, तो वह चेक बाउंस होने पर NI Act की धारा 138 के तहत दंडनीय अपराध बनता है।",
  },
  {
    title: "मंडी व्यापारी या मिल खरीदार बिना कोर्ट के आदेश के बिल में मनमानी कटौती (Moisture/Quality Cut) नहीं कर सकता",
    court: "भारत का सर्वोच्च न्यायालय (Supreme Court of India)",
    parties: "यूनियन ऑफ इंडिया बनाम रमन आयरन फाउंड्री (Raman Iron Foundry)",
    citation: "(1974) 2 SCC 231",
    date: "सुप्रीम कोर्ट नज़ीर",
    holding:
      "सुप्रीम कोर्ट का स्थापित कानून है कि कोई भी खरीदार खुद जज बनकर सप्लायर के पक्के बिल से 'फसल खराब थी', 'दाल में नमी थी' या 'कमीशन कटौती' के नाम पर इकतरफा पैसे नहीं रोक सकता। जब तक सक्षम अदालत नुकसान तय न करे, पूरा इनवॉइस बकाया रहता है।",
  },
  {
    title: "₹3 लाख से अधिक के वाणिज्यिक विवाद में धारा 12A मध्यस्थता और तत्काल संपत्ति अटैचमेंट (Urgent Interim Relief) का नियम",
    court: "भारत का सर्वोच्च न्यायालय (Supreme Court of India)",
    parties: "पाटिल ऑटोमेशन प्रा. लि. बनाम रखेजा इंजीनियर्स (Patil Automation)",
    citation: "(2022) 10 SCC 1",
    date: "सुप्रीम कोर्ट निर्णय",
    holding:
      "कमर्शियल कोर्ट में ₹3 लाख से बड़े बकाया के लिए पहले प्री-इंस्टीट्यूशन मेडिएशन (Section 12A) जरूरी है, लेकिन यदि डिफॉल्टर व्यापारी गोदाम खाली करके भाग रहा हो या संपत्ति बेच रहा हो, तो तत्काल अंतरिम रोक (Order XXXVIII Rule 5) की अर्जी पर अदालत सीधे सुनवाई कर सकती है।",
  },
];

const FAQS = [
  {
    question: "कृषि केंद्र डीलर कह रहा है कि 'किसानों की फसल खराब हो गई, बीज नहीं उगा' — क्या मैं पूरा उधार वसूल सकता हूँ?",
    answer:
      "हाँ, बिल्कुल। Seeds Act 1966 (धारा 14–16) और Insecticides Act 1968 (धारा 21–24) के अनुसार किसी भी बीज या पेस्टीसाइड को खराब तभी माना जा सकता है जब सरकारी कृषि निरीक्षक (Inspector) ने सीलबंद नमूना लेकर राज्य प्रयोगशाला से रिपोर्ट दी हो। बिना सरकारी लैब रिपोर्ट के 3–4 महीने बाद दिया गया मौखिक बहाना अदालत में खारिज हो जाता है और आप पूरा बिल ब्याज सहित वसूल सकते हैं।",
  },
  {
    question: "कोल्ड स्टोरेज में आलू या लाल मिर्च की बोरियां छोड़कर पार्टी किराया नहीं दे रही — क्या मैं सीधे माल नीलाम कर सकता हूँ?",
    answer:
      "सीधे नीलाम करने की गलती न करें! Indian Contract Act 1872 की धारा 170 और 176 तथा राज्य कोल्ड स्टोरेज कानूनों के तहत आपको पहले लॉट नंबर, चेंबर नंबर, बोरी की संख्या और बकाया किराया लिखकर रजिस्टर्ड स्पीड पोस्ट RPAD से 15 दिनों का 'Statutory Pre-Auction Notice' भेजना अनिवार्य है। 15 दिन में किराया न मिलने पर पारदर्शी नीलामी करें — इससे आप Consumer Court के किसी भी झूठे हर्जाने के केस से 100% सुरक्षित रहेंगे।",
  },
  {
    question: "अगर नीलामी के बाद भी कोल्ड स्टोरेज का पूरा किराया और लोडिंग चार्ज न निकले तो बाकी पैसा कैसे वसूलें?",
    answer:
      "यदि बाज़ार भाव गिरने के कारण नीलामी से प्राप्त राशि आपके कुल बकाया किराये, बिजली-भंडारण शुल्क और नीलामी खर्च से कम है, तो आप शेष अंतर (Deficit Amount) की वसूली के लिए स्टॉकिस्ट या व्यापारी पर 'Deficit Recovery Notice' भेजकर CPC Order XXXVII (समरी सूट) दायर कर सकते हैं।",
  },
  {
    question: "मंडी आढ़तिया या थोक व्यापारी ने राइस मिल / दाल मिल का माल उठाकर पेमेंट रोक रखा है — क्या APMC मंडी सचिव से मदद मिलती है?",
    answer:
      "हाँ। अधिकांश राज्यों के APMC (कृषि उपज मंडी समिति) नियमों के तहत लाइसेंसधारी व्यापारी और पक्के आढ़तिया को निर्धारित अवधि (24 से 72 घंटे या तय मंडी नियम) में भुगतान करना होता है। जब हमारे वकील आपके लीगल नोटिस की एक कॉपी (CC) सीधे संबंधित APMC मंडी सचिव को भेजते हैं, तो लाइसेंस रद्द होने के डर से 70% से अधिक मंडी पार्टियां तुरंत समझौता करके भुगतान कर देती हैं।",
  },
  {
    question: "डीलर ने सीज़न की शुरुआत में जो सिक्योरिटी चेक (PDC) दिया था वह बाउंस हो गया — कितने दिन में नोटिस भेजना है?",
    answer:
      "बैंक से Cheque Return Memo मिलने की तारीख से ठीक 30 दिनों के भीतर NI Act की धारा 138 के तहत एडवोकेट लीगल नोटिस स्पीड पोस्ट RPAD से भेजना अनिवार्य है। सुप्रीम कोर्ट (Sripati Singh केस) के अनुसार उधारी के बदले दिया गया सिक्योरिटी चेक बाउंस होने पर भी पूरा आपराधिक मुकदमा और धारा 143A के तहत 20% अंतरिम मुआवजा मिलता है।",
  },
  {
    question: "क्या कच्चे बही-खाते, WhatsApp चैट, बिल्टी और धर्मकांटा पर्ची के आधार पर भी कोर्ट में केस जीत सकते हैं?",
    answer:
      "हाँ। यदि आपके पास GST इनवॉइस के साथ ट्रक बिल्टी (LR), ई-वे बिल, धर्मकांटा पर्ची, कोल्ड स्टोरेज लॉट रसीद या WhatsApp पर बकाया स्वीकार करने के मैसेज हैं, तो भारतीय साक्ष्य अधिनियम (BSA) 2023 की धारा 63 के सर्टिफिकेट के साथ इन्हें अदालत में पक्के सबूत के रूप में पेश किया जा सकता है।",
  },
  {
    question: "क्या 50 या 200 डिफॉल्टर खाद-बीज डीलर्स या कोल्ड स्टोरेज स्टॉकिस्ट को एक साथ नोटिस भेजा जा सकता है?",
    answer:
      "हाँ। LegalRecovery.in पर खाद-बीज कंपनियों, पेस्टीसाइड डिस्ट्रीब्यूटर्स, राइस/दाल मिलों और जिला कोल्ड स्टोरेज एसोसिएशंस के लिए बल्क CSV अपलोड की सुविधा है। आप एक एक्सेल/CSV शीट अपलोड करके 10 से 10,000+ बकाएदारों को एक साथ वकील द्वारा सत्यापित स्पीड पोस्ट RPAD + WhatsApp + ईमेल नोटिस भिजवा सकते हैं।",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  inLanguage: "hi-IN",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": CANONICAL_URL,
  },
  image: [`${SITE_URL}/blog_money_recovery.png`],
  datePublished: "2026-11-19",
  dateModified: "2026-11-19",
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    jobTitle: "Advocate & Founder, AMA Legal Solutions",
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
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
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
      name: "Agri-Inputs, Cold Storage & Food Mill Recovery",
      item: `${SITE_URL}/industries/agri-inputs-cold-storage-food-processing-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "खाद-बीज डीलर, कोल्ड स्टोरेज व मंडी उधार वसूली गाइड",
      item: CANONICAL_URL,
    },
  ],
};

// TODO(reviewer): src/data/reviewers.ts is absent in this repository — Advocate attribution is rendered inline below.

export default function KhadBeejColdStorageMandiRecoveryHindiPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />

      {/* Dark Gradient Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-21 कृषि व मंडी B2B गाइड (H1)</span>
            <span aria-hidden="true">&bull;</span>
            <span>NI Act s.138 &bull; Contract Act s.176 &bull; APMC &bull; Order 37 CPC</span>
          </div>

          {/* Single Page H1 (Verbatim match with ARTICLE_SCHEMA.headline) */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40-60 Word Executive Statutory Summary Box with Parent Hub Link */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              तत्काल विधिक सारांश (Executive Creditor Answer)
            </span>
            <p>
              यदि खाद-बीज डीलर फसल कटने के बाद उधार रोक रहा है, मंडी आढ़तिया मिल का पैसा दबाए बैठा है या कोल्ड स्टोरेज पार्टी किराया नहीं चुका रही, तो{" "}
              <Link
                href="/industries/agri-inputs-cold-storage-food-processing-recovery"
                className="text-red-300 underline decoration-red-400/70 underline-offset-2 hover:text-white font-bold"
              >
                Agri-Inputs, Cold Storage &amp; Food Mill Recovery Hub
              </Link>{" "}
              के अनुसार <strong>NI Act धारा 138</strong> (30 दिन में नोटिस),{" "}
              <strong>Contract Act धारा 170/176</strong> (15-दिवसीय प्री-ऑक्शन नोटिस),{" "}
              <strong>APMC सचिव CC</strong> और <strong>Order XXXVII CPC</strong> से तेज़ वसूली करें।
            </p>
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">30 दिन</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                चेक बाउंस (NI s.138) नोटिस की सख्त समय-सीमा
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">15 दिन</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                कोल्ड स्टोरेज नीलामी से पहले रजिस्टर्ड नोटिस विंडो
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">3x RBI ब्याज</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                उद्यम (MSME) मिल व सप्लायर्स के लिए 45 दिन बाद
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">₹999</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                एडवोकेट लीगल नोटिस (Speed Post RPAD + WhatsApp)
              </p>
            </div>
          </div>

          {/* Advocate Attribution Strip */}
          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] sm:text-xs text-slate-400">
            <span>
              विधिक समीक्षा: <strong className="text-slate-200">Anuj Anand Malik</strong> (Advocate &amp; Founder, AMA Legal Solutions)
            </span>
            <span aria-hidden="true">&bull;</span>
            <span>अपडेट: 19 नवंबर 2026</span>
            <span aria-hidden="true">&bull;</span>
            <span>उत्तर प्रदेश, मध्य प्रदेश, राजस्थान, बिहार, हरियाणा, पंजाब, छत्तीसगढ़ व गुजरात</span>
          </div>
        </div>
      </section>

      {/* Main Content Wrapper */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-4 sm:mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Agri-Inputs & Cold Storage Recovery Hub",
                href: "/industries/agri-inputs-cold-storage-food-processing-recovery",
              },
              {
                label: "खाद-बीज डीलर, कोल्ड स्टोरेज व मंडी उधार वसूली",
                href: "/hi/khad-beej-pesticide-cold-storage-mandi-udhar-recovery-notice",
              },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <KhadBeejRecoveryTOC />

          {/* Main Editorial Column */}
          <article lang="hi" className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1 */}
            <section
              id="heading-agri-credit-crisis"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-lg sm:text-2xl font-black text-slate-900 leading-snug">
                  खाद-बीज, मंडी व कोल्ड स्टोरेज व्यापार में उधार क्यों फंसता है?
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  भारत की कृषि-आधारित अर्थव्यवस्था — विशेषकर उत्तर प्रदेश (आगरा, फर्रुखाबाद, कानपुर, मेरठ), मध्य प्रदेश (इंदौर, उज्जैन, सीहोर), राजस्थान (कोटा, श्रीगंगानगर), बिहार, हरियाणा (करनाल), पंजाब, छत्तीसगढ़ और गुजरात — में <strong>खाद, हाइब्रिड बीज, पेस्टीसाइड (Agrochemicals), राइस/दाल/आटा/तेल मिल और कोल्ड स्टोरेज</strong> का पूरा व्यापार सीज़नल उधारी (Seasonal Credit) और आपसी भरोसे (Bahi-Khata &amp; Bilty) पर चलता है।
                </p>
                <p>
                  समस्या तब शुरू होती है जब खरीफ या रबी की फसल कट जाती है, किसान मंडी में उपज बेच देता है, लेकिन बीच का <strong>कृषि केंद्र डीलर, पक्का आढ़तिया (Mandi Commission Agent) या थोक बायर</strong> आपकी पेमेंट दूसरे व्यापार में घुमा देता है। जब आप तकादा करते हैं तो तीन आम बहाने बनाए जाते हैं:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  <li className="bg-red-50/70 border border-red-200 rounded-xl p-3.5 text-xs sm:text-sm">
                    <strong className="block text-[#DC2626] mb-1">1. &ldquo;फसल खराब हो गई&rdquo; बहाना</strong>
                    खाद-बीज डीलर 4 महीने बाद बिना किसी सरकारी लैब रिपोर्ट के कहता है कि बीज नहीं उगा या कीटनाशक बेअसर था।
                  </li>
                  <li className="bg-amber-50/70 border border-amber-200 rounded-xl p-3.5 text-xs sm:text-sm">
                    <strong className="block text-amber-800 mb-1">2. कोल्ड स्टोरेज माल छोड़कर गायब</strong>
                    आलू, लाल मिर्च या प्याज का भाव गिरते ही स्टॉकिस्ट किराया नहीं देता और बोरियां चेंबर में ही सड़ने छोड़ देता है।
                  </li>
                  <li className="bg-slate-100 border border-slate-200 rounded-xl p-3.5 text-xs sm:text-sm">
                    <strong className="block text-slate-900 mb-1">3. मंडी में नमी/क्वालिटी कटौती</strong>
                    राइस/दाल/तेल मिल का माल उतरने के बाद थोक व्यापारी मनमाना Debit Note काटकर 15–20% पैसा दबा लेता है।
                  </li>
                </ul>
                <p>
                  केवल फोन करने या दुकान पर चक्कर लगाने से डिफॉल्टर पार्टी को लगता है कि आप कोर्ट-कचहरी से डरते हैं। इसके विपरीत, समय पर भेजा गया{" "}
                  <strong>वकील द्वारा हस्ताक्षरित वैधानिक लीगल नोटिस (Speed Post RPAD + WhatsApp + Email)</strong>{" "}
                  पार्टी को स्पष्ट कानूनी चेतावनी देता है कि अगली कार्रवाई सीधे चेक बाउंस वारंट, APMC लाइसेंस निलंबन या कोल्ड स्टोरेज माल की कानूनी नीलामी होगी।
                </p>
              </div>
            </section>

            {/* Top Dual-Track CTA */}
            <div id="heading-agri-cta-top" className="scroll-mt-28">
              <KhadBeejRecoveryCTA />
            </div>

            {/* Section 2: 5-Step Workflow SVG + Mobile Cards */}
            <section
              id="heading-recovery-workflow-svg"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-lg sm:text-2xl font-black text-slate-900 leading-snug">
                  कृषि व मंडी उधार वसूली की 5-चरणीय कानूनी प्रक्रिया
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                सीज़न खत्म होते ही बिना 6 महीने बर्बाद किए इस व्यवस्थित कानूनी क्रम को अपनाने से 65%–75% मामले अदालत की पहली तारीख से पहले ही समझौते (Settlement) पर आ जाते हैं।
              </p>

              {/* Desktop SVG Decision Flow */}
              <div className="hidden md:block overflow-x-auto bg-slate-900 rounded-2xl p-5 border border-slate-800">
                <svg
                  viewBox="0 0 920 210"
                  width={920}
                  height={210}
                  className="w-full h-auto"
                  role="img"
                  aria-label="खाद-बीज, कोल्ड स्टोरेज और मंडी उधार वसूली की 5-चरणीय कानूनी प्रक्रिया"
                >
                  <defs>
                    <marker
                      id="agriArrow"
                      viewBox="0 0 10 10"
                      refX="8"
                      refY="5"
                      markerWidth="6"
                      markerHeight="6"
                      orient="auto-start-reverse"
                    >
                      <path d="M 0 0 L 10 5 L 0 10 z" fill="#EF4444" />
                    </marker>
                  </defs>

                  {/* Step 1 */}
                  <rect x="10" y="30" width="160" height="145" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <circle cx="34" cy="54" r="13" fill="#DC2626" />
                  <text x="34" y="58" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">1</text>
                  <text x="55" y="58" fill="#F87171" fontSize="11" fontWeight="bold">सबूत संकलन</text>
                  <text x="22" y="88" fill="#F8FAFC" fontSize="11" fontWeight="bold">बिल, बिल्टी व लॉट रसीद</text>
                  <text x="22" y="108" fill="#CBD5E1" fontSize="10">GST इनवॉइस, ई-वे बिल,</text>
                  <text x="22" y="124" fill="#CBD5E1" fontSize="10">धर्मकांटा पर्ची, PDC चेक</text>
                  <text x="22" y="140" fill="#CBD5E1" fontSize="10">और WhatsApp लेज़र।</text>

                  <line x1="170" y1="102" x2="192" y2="102" stroke="#EF4444" strokeWidth="2" markerEnd="url(#agriArrow)" />

                  {/* Step 2 */}
                  <rect x="195" y="30" width="160" height="145" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <circle cx="219" cy="54" r="13" fill="#DC2626" />
                  <text x="219" y="58" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">2</text>
                  <text x="240" y="58" fill="#F87171" fontSize="11" fontWeight="bold">₹999 नोटिस</text>
                  <text x="207" y="88" fill="#F8FAFC" fontSize="11" fontWeight="bold">एडवोकेट लीगल नोटिस</text>
                  <text x="207" y="108" fill="#CBD5E1" fontSize="10">Speed Post RPAD +</text>
                  <text x="207" y="124" fill="#CBD5E1" fontSize="10">WhatsApp + Email +</text>
                  <text x="207" y="140" fill="#CBD5E1" fontSize="10">APMC सचिव को CC।</text>

                  <line x1="355" y1="102" x2="377" y2="102" stroke="#EF4444" strokeWidth="2" markerEnd="url(#agriArrow)" />

                  {/* Step 3 */}
                  <rect x="380" y="30" width="160" height="145" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <circle cx="404" cy="54" r="13" fill="#F59E0B" />
                  <text x="404" y="58" textAnchor="middle" fill="#111827" fontSize="12" fontWeight="bold">3</text>
                  <text x="425" y="58" fill="#FBBF24" fontSize="11" fontWeight="bold">15 दिन विंडो</text>
                  <text x="392" y="88" fill="#F8FAFC" fontSize="11" fontWeight="bold">भुगतान या समझौता</text>
                  <text x="392" y="108" fill="#CBD5E1" fontSize="10">सख्त कानूनी समय-सीमा</text>
                  <text x="392" y="124" fill="#CBD5E1" fontSize="10">(NI 138 / Pre-Auction)</text>
                  <text x="392" y="140" fill="#CBD5E1" fontSize="10">में 65%+ केस सेटल।</text>

                  <line x1="540" y1="102" x2="562" y2="102" stroke="#EF4444" strokeWidth="2" markerEnd="url(#agriArrow)" />

                  {/* Step 4 */}
                  <rect x="565" y="30" width="160" height="145" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <circle cx="589" cy="54" r="13" fill="#10B981" />
                  <text x="589" y="58" textAnchor="middle" fill="#111827" fontSize="12" fontWeight="bold">4</text>
                  <text x="610" y="58" fill="#34D399" fontSize="11" fontWeight="bold">फोरम एक्शन</text>
                  <text x="577" y="88" fill="#F8FAFC" fontSize="11" fontWeight="bold">कोर्ट / नीलामी / MSME</text>
                  <text x="577" y="108" fill="#CBD5E1" fontSize="10">NI 138 केस, MSEFC</text>
                  <text x="577" y="124" fill="#CBD5E1" fontSize="10">समन, Order 37 सूट या</text>
                  <text x="577" y="140" fill="#CBD5E1" fontSize="10">धारा 176 कानूनी नीलामी।</text>

                  <line x1="725" y1="102" x2="747" y2="102" stroke="#EF4444" strokeWidth="2" markerEnd="url(#agriArrow)" />

                  {/* Step 5 */}
                  <rect x="750" y="30" width="160" height="145" rx="12" fill="#064E3B" stroke="#10B981" strokeWidth="2" />
                  <circle cx="774" cy="54" r="13" fill="#10B981" />
                  <text x="774" y="58" textAnchor="middle" fill="#111827" fontSize="12" fontWeight="bold">5</text>
                  <text x="795" y="58" fill="#A7F3D0" fontSize="11" fontWeight="bold">पूर्ण वसूली</text>
                  <text x="762" y="88" fill="#FFFFFF" fontSize="11" fontWeight="bold">ब्याज सहित रिकवरी</text>
                  <text x="762" y="108" fill="#D1FAE5" fontSize="10">20% अंतरिम मुआवजा,</text>
                  <text x="762" y="124" fill="#D1FAE5" fontSize="10">3x RBI चक्रवृद्धि ब्याज</text>
                  <text x="762" y="140" fill="#D1FAE5" fontSize="10">या बैंक खाता अटैचमेंट।</text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="grid grid-cols-1 gap-3 md:hidden">
                {[
                  { n: "1", t: "सबूत संकलन", d: "GST इनवॉइस, बिल्टी, लॉट रसीद, धर्मकांटा पर्ची, PDC चेक और WhatsApp लेज़र एक जगह तैयार करें।" },
                  { n: "2", t: "₹999 एडवोकेट लीगल नोटिस", d: "Speed Post RPAD + WhatsApp + Email पर नोटिस भेजें; मंडी केस में APMC सचिव को CC करें।" },
                  { n: "3", t: "15-दिवसीय वैधानिक विंडो", d: "सख्त समय-सीमा के दबाव में अधिकांश डीलर व व्यापारी कोर्ट जाने से पहले ही RTGS/NEFT कर देते हैं।" },
                  { n: "4", t: "कोर्ट / MSME / कानूनी नीलामी", d: "भुगतान न होने पर NI s.138 केस, MSME Samadhaan, Order XXXVII समरी सूट या धारा 176 नीलामी शुरू करें।" },
                  { n: "5", t: "ब्याज व हर्जाने सहित वसूली", d: "धारा 143A के तहत 20% अंतरिम मुआवजा, 3x RBI चक्रवृद्धि ब्याज या संपत्ति कुर्की से पूरा पैसा वसूलें।" },
                ].map((s) => (
                  <div key={s.n} className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                      {s.n}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-white">{s.t}</p>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Statutory Matrix Table */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-lg sm:text-2xl font-black text-slate-900 leading-snug">
                  कृषि व मंडी बकाया के लिए वैधानिक रिकवरी मैट्रिक्स
                </h2>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">व्यापार का प्रकार</th>
                      <th className="p-3.5 font-bold">प्रमुख कानूनी हथियार</th>
                      <th className="p-3.5 font-bold">समय-सीमा / नोटिस अवधि</th>
                      <th className="p-3.5 font-bold">व्यापारी पर असर</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">खाद, बीज व पेस्टीसाइड डिस्ट्रीब्यूटर</td>
                      <td className="p-3.5 text-slate-700">NI Act s.138/143A + Seeds Act ss.14–16 + Insecticides Act ss.21–24</td>
                      <td className="p-3.5 text-[#DC2626] font-bold">चेक बाउंस से 30 दिन में नोटिस</td>
                      <td className="p-3.5 text-slate-700">&ldquo;फसल खराब&rdquo; बहाना खारिज; 20% अंतरिम मुआवजा व वारंट का दबाव</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">कोल्ड स्टोरेज मालिक (आलू, मिर्च, प्याज)</td>
                      <td className="p-3.5 text-slate-700">Indian Contract Act ss.170 &amp; 176 + State Cold Storage Acts</td>
                      <td className="p-3.5 text-emerald-700 font-bold">15-दिवसीय रजिस्टर्ड प्री-ऑक्शन नोटिस</td>
                      <td className="p-3.5 text-slate-700">उपभोक्ता कोर्ट से 100% बचाव + माल की कानूनी नीलामी व घाटे की वसूली</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">राइस, दाल, आटा, चीनी व तेल मिल</td>
                      <td className="p-3.5 text-slate-700">MSMED Act ss.15–18 + Income Tax s.43B(h) + APMC Rules</td>
                      <td className="p-3.5 text-amber-700 font-bold">45 दिन पेमेंट सीमा (APMC: 24–72 घंटे)</td>
                      <td className="p-3.5 text-slate-700">3x RBI चक्रवृद्धि ब्याज + 30% टैक्स पेनल्टी + मंडी लाइसेंस निलंबन खतरा</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">बिना चेक वाला पक्का बिल उधार</td>
                      <td className="p-3.5 text-slate-700">Order XXXVII CPC (Summary Suit) + BSA 2023 s.63</td>
                      <td className="p-3.5 text-slate-900 font-bold">3 वर्ष के भीतर (Limitation)</td>
                      <td className="p-3.5 text-slate-700">बायर को बिना कोर्ट अनुमति बचाव का हक नहीं; तेज़ डिक्री व कुर्की</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Interactive Scenario Tabs */}
            <section
              id="heading-interactive-scenarios"
              className="scroll-mt-28 space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-lg sm:text-2xl font-black text-slate-900 leading-snug">
                  4 प्रमुख कृषि व मंडी विवाद: तुरंत कानूनी समाधान चुनें
                </h2>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                नीचे दिए गए 4 टैब में से अपनी परिस्थिति चुनें और जानें कि कौन-सी कानूनी धारा, सबूत और नोटिस रणनीति सबसे तेज़ काम करेगी:
              </p>
              <KhadBeejRecoveryScenarioTabs />
            </section>

            {/* Section 5: Cold Storage Auction Law Deep-Dive */}
            <section
              id="heading-cold-storage-auction-law"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-lg sm:text-2xl font-black text-slate-900 leading-snug">
                  कोल्ड स्टोरेज किराया वसूली: बिना नोटिस नीलामी क्यों पड़ती है भारी?
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  उत्तर प्रदेश (आगरा, हाथरस, फर्रुखाबाद, कन्नौज), पश्चिम बंगाल, बिहार, मध्य प्रदेश और गुजरात के सैकड़ों कोल्ड स्टोरेज मालिक हर साल एक ही गलती करते हैं: जब नवंबर-दिसंबर तक आलू या मिर्च का स्टॉकिस्ट किराया नहीं देता, तो वे फोन पर चेतावनी देकर या कच्चा पर्चा चिपकाकर माल बेच देते हैं। इसके बाद वही स्टॉकिस्ट <strong>District Consumer Disputes Redressal Commission (उपभोक्ता फोरम)</strong> में &ldquo;Deficiency in Service&rdquo; का केस कर देता है और कोल्ड स्टोरेज मालिक को किराये के बजाय उल्टा लाखों का हर्जाना भरना पड़ता है।
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                    <h3 className="text-sm font-extrabold text-emerald-900 mb-2">
                      सही कानूनी तरीका (Consumer-Court Proof)
                    </h3>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-800">
                      <li>&bull; <strong>लॉट विवरण दर्ज करें:</strong> नोटिस में Lot No., Chamber No., बोरी की कुल संख्या, भंडारण तारीख और प्रति बोरी किराया साफ लिखें।</li>
                      <li>&bull; <strong>15 दिन का Redemption Window:</strong> Indian Contract Act धारा 176 के तहत 15 दिनों के भीतर किराया जमा कर माल छुड़ाने का अंतिम अवसर दें।</li>
                      <li>&bull; <strong>Speed Post RPAD + WhatsApp:</strong> केवल साधारण डाक नहीं, बल्कि India Post Speed Post RPAD से नोटिस भेजकर डिलीवरी रसीद संभालें।</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <h3 className="text-sm font-extrabold text-[#DC2626] mb-2">
                      इन 3 गलतियों से हमेशा बचें
                    </h3>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-800">
                      <li>&bull; <strong>बिना नोटिस बिक्री:</strong> मौखिक फोन कॉल अदालत में मान्य नहीं होता; नीलामी से पहले लिखित रजिस्टर्ड नोटिस अनिवार्य है।</li>
                      <li>&bull; <strong>अधूरा नीलामी रिकॉर्ड:</strong> नीलामी के दिन मंडी भाव, खरीदार का बिल, वज़न पर्ची और 2 गवाहों का पंचनामा न रखना।</li>
                      <li>&bull; <strong>घाटे का हिसाब छोड़ देना:</strong> यदि नीलामी में किराया पूरा न निकले, तो शेष घाटे (Deficit) के लिए तुरंत दूसरा डिमांड नोटिस न भेजना।</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6: Worked Financial Ledger */}
            <section
              id="heading-financial-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-lg sm:text-2xl font-black text-slate-900 leading-snug">
                  ₹12 लाख बकाया उदाहरण: साधारण तकादा बनाम MSME 3x ब्याज व s.43B(h)
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                मान लीजिए एक राइस/दाल मिल या खाद-बीज डिस्ट्रीब्यूटर (जो Udyam Micro/Small में पंजीकृत है) का एक थोक खरीदार पर <strong>₹12,00,000</strong> का पक्का बिल 180 दिनों (6 महीने) से अटका हुआ है। देखिए कानूनी नोटिस में सही धाराएं जोड़ने से बायर पर कितना आर्थिक दबाव बनता है:
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700">
                    <p className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">मूल बकाया राशि (Principal)</p>
                    <p className="text-xl sm:text-2xl font-black text-white mt-1">₹12,00,000</p>
                    <p className="text-xs text-slate-400 mt-1">इनवॉइस + ई-वे बिल + बिल्टी प्रमाणित</p>
                  </div>
                  <div className="bg-emerald-950/60 rounded-xl p-4 border border-emerald-800/60">
                    <p className="text-[11px] uppercase tracking-wider text-emerald-300 font-bold">MSMED धारा 16 (3x RBI ब्याज)</p>
                    <p className="text-xl sm:text-2xl font-black text-emerald-400 mt-1">~₹1,21,000+</p>
                    <p className="text-xs text-emerald-200/80 mt-1">45 दिन बाद 135 दिनों का मासिक चक्रवृद्धि ब्याज (~19.5% p.a.)</p>
                  </div>
                  <div className="bg-red-950/60 rounded-xl p-4 border border-red-800/60">
                    <p className="text-[11px] uppercase tracking-wider text-red-300 font-bold">बायर पर s.43B(h) टैक्स झटका</p>
                    <p className="text-xl sm:text-2xl font-black text-red-400 mt-1">~₹3,60,000</p>
                    <p className="text-xs text-red-200/80 mt-1">30% कॉर्पोरेट/स्लैब टैक्स में ₹12L खर्च अमान्य (Disallowed)</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2 border-t border-slate-800">
                  <strong className="text-amber-400">निष्कर्ष:</strong> ₹12 लाख का बिल रोकने पर बायर को कुल मिलाकर <strong>₹4.80 लाख से अधिक का अतिरिक्त ब्याज और इनकम टैक्स नुकसान</strong> झेलना पड़ता है। अपने बिल का सटीक चक्रवृद्धि ब्याज निकालने के लिए हमारा{" "}
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="text-emerald-400 underline hover:text-emerald-300 font-bold"
                  >
                    MSME Delayed Payment Interest Calculator
                  </Link>{" "}
                  इस्तेमाल करें।
                </p>
              </div>
            </section>

            {/* Section 7: Evidence & BSA s.63 Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-lg sm:text-2xl font-black text-slate-900 leading-snug">
                  अदालत में पक्का सबूत: बिल्टी, लॉट रसीद व BSA 2023 धारा 63 चेकलिस्ट
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2.5">
                  <h3 className="font-extrabold text-slate-900 text-sm">
                    खाद-बीज व मंडी/मिल के लिए अनिवार्य कागजात
                  </h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>&check; GST टैक्स इनवॉइस (बैच नंबर, HSN कोड और पेमेंट टर्म सहित)</li>
                    <li>&check; ट्रक बिल्टी (Lorry Receipt / LR), GST ई-वे बिल व मंडी 6R/9R गेट पास</li>
                    <li>&check; कंप्यूटराइज्ड धर्मकांटा पर्ची (Weighbridge Slip) और माल रिसीविंग साइन</li>
                    <li>&check; बकाया लेज़र स्टेटमेंट (Tally/Busy) व Udyam Registration प्रमाणपत्र</li>
                  </ul>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2.5">
                  <h3 className="font-extrabold text-slate-900 text-sm">
                    कोल्ड स्टोरेज व डिजिटल साक्ष्य (BSA 2023 s.63)
                  </h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>&check; कोल्ड स्टोरेज बॉन्ड / लॉट रसीद (चेंबर नंबर, बोरी संख्या व किराया दर)</li>
                    <li>&check; मूल बाउंस चेक और बैंक की मुहर लगा Cheque Return Memo</li>
                    <li>&check; WhatsApp चैट, ऑर्डर मैसेज और वॉयस नोट्स का समय-तिथि सहित स्क्रीनशॉट</li>
                    <li>&check; <strong>BSA 2023 धारा 63 सर्टिफिकेट:</strong> डिजिटल बिल, ई-वे बिल व WhatsApp को कोर्ट में मान्य कराने के लिए अनिवार्य।</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 8: Supreme Court Precedents */}
            <section
              id="heading-judicial-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-lg sm:text-2xl font-black text-slate-900 leading-snug">
                  सुप्रीम कोर्ट के 3 प्रमुख फैसले जो कृषि सप्लायर को जिताते हैं
                </h2>
              </div>

              <div className="space-y-4">
                {CASE_CITATIONS.map((c, idx) => (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-xl p-4 sm:p-5 bg-slate-50/60 relative overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626]" />
                    <div className="pl-3 space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold">
                        <span className="text-[#DC2626] uppercase tracking-wider">{c.date}</span>
                        <span className="text-slate-400">&bull;</span>
                        <span className="text-slate-600">{c.citation}</span>
                      </div>
                      <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                        {c.title}
                      </h3>
                      <p className="text-xs font-semibold text-slate-500">
                        {c.parties} &mdash; {c.court}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pt-1">
                        {c.holding}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Compact Mid-Bottom CTA */}
            <KhadBeejRecoveryCTA variant="compact" />

            {/* Section 9: Related Hub, Calculator, Template & Sibling Spokes */}
            <section
              id="heading-related-tools"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-lg sm:text-2xl font-black text-slate-900 leading-snug">
                  संबंधित कृषि रिकवरी हब, कैलकुलेटर और लीगल नोटिस गाइड्स
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  {
                    tag: "Parent Industry Hub",
                    title: "Agri-Inputs, Cold Storage & Food Mill Recovery Hub (English)",
                    href: "/industries/agri-inputs-cold-storage-food-processing-recovery",
                    desc: "खाद-बीज, कोल्ड स्टोरेज, राइस/दाल मिल और फूड प्रोसेसिंग का पूरा मास्टर हब।",
                  },
                  {
                    tag: "Interactive Calculator",
                    title: "MSME Delayed Payment 3x RBI Interest Calculator",
                    href: "/tools/msme-delayed-payment-interest-calculator",
                    desc: "अपने अटके हुए मिल या सप्लाई बिल पर 45 दिन के बाद का चक्रवृद्धि ब्याज तुरंत निकालें।",
                  },
                  {
                    tag: "Notice Workspace",
                    title: "Commercial Legal Notice & Reply Template Workspace",
                    href: "/templates/legal-notice-reply-format",
                    desc: "वकील द्वारा सत्यापित कमर्शियल लीगल नोटिस व रिप्लाई फॉर्मेट और धाराएं देखें।",
                  },
                  {
                    tag: "Agri-Inputs Spoke",
                    title: "Agrochemical & Seed Dealer Seasonal Credit Recovery",
                    href: "/agrochemical-pesticide-seed-dealer-seasonal-credit-default-recovery",
                    desc: "Seeds Act व Insecticides Act से डीलर के 'फसल खराब' बहाने को कैसे काटें।",
                  },
                  {
                    tag: "Mill & Mandi Spoke",
                    title: "Rice, Dal, Flour & Edible Oil Mill Wholesale Recovery",
                    href: "/rice-dal-flour-sugar-edible-oil-mill-wholesale-buyer-recovery",
                    desc: "आउटस्टेशन बायर और पक्का आढ़तिया से मिल का बकाया वसूलने की पूरी गाइड।",
                  },
                  {
                    tag: "FPO & Dairy Spoke",
                    title: "FPO & Cooperative Dairy B2B Buyer Recovery Guide",
                    href: "/fpo-farmer-producer-company-cooperative-dairy-b2b-buyer-recovery",
                    desc: "FPO और डेयरी प्लांट के लिए APMC 24–72 घंटे भुगतान व Order 37 वसूली।",
                  },
                  {
                    tag: "Dealer Recovery Seed",
                    title: "Distributor & Dealer Dues Recovery in India",
                    href: "/distributor-dealer-dues-recovery",
                    desc: "डिस्ट्रीब्यूटर और डीलर के पास फंसी उधारी वसूली की संपूर्ण कानूनी प्रक्रिया।",
                  },
                  {
                    tag: "Hindi & NI 138 Guides",
                    title: "लीगल नोटिस कैसे भेजें (हिंदी गाइड) व Cheque Bounce Timeline",
                    href: "/hi/legal-notice-kaise-bheje",
                    desc: "ऑनलाइन एडवोकेट नोटिस भेजने के स्टेप्स और Speed Post RPAD ट्रैकिंग।",
                  },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-all"
                  >
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#DC2626] mb-1">
                      {item.tag}
                    </span>
                    <p className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                      {item.title} &rarr;
                    </p>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                  </Link>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-600">
                <span>अतिरिक्त उपयोगी लिंक:</span>
                <Link
                  href="/cheque-bounce-notice-timeline-section-138"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  Section 138 Cheque Bounce Timeline
                </Link>
                <span>&bull;</span>
                <Link
                  href="/drip-irrigation-tractor-implement-greenhouse-dealer-subsidy-recovery"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  Drip Irrigation &amp; Agri-Machinery Dealer Recovery
                </Link>
                <span>&bull;</span>
                <Link
                  href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  Bulk CSV Legal Notice Desk (10–10,000+ Cases)
                </Link>
              </div>
            </section>

            {/* Section 10: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-lg sm:text-2xl font-black text-slate-900 leading-snug">
                  अक्सर पूछे जाने वाले सवाल (FAQ)
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group border border-slate-200 rounded-xl bg-slate-50/50 open:bg-white open:border-red-200 transition-colors"
                  >
                    <summary className="cursor-pointer list-none p-4 sm:p-5 font-bold text-sm sm:text-base text-slate-900 flex items-center justify-between gap-3">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] font-black text-lg shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 11: Statutory Sources */}
            <section
              id="heading-statutory-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#404447] text-white text-xs font-black flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-lg sm:text-2xl font-black text-slate-900 leading-snug">
                  विधिक अधिनियम और आधिकारिक सरकारी पोर्टल
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((src, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold shrink-0">&rarr;</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline decoration-slate-300 underline-offset-2 transition-colors"
                    >
                      {src.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </article>
        </div>
      </main>

      {/* Footer Cluster Cross-Links */}
      <RelatedRecoveryGuides />
    </div>
  );
}
