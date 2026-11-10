import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";
import MoneyRecoveryTimeCTA from "./MoneyRecoveryTimeCTA";
import MoneyRecoveryTimeTOC from "./MoneyRecoveryTimeTOC";
import MoneyRecoveryTimeTabs from "./MoneyRecoveryTimeTabs";

export const revalidate = 86400;

const PAGE_URL = `${SITE_URL}/hi/money-recovery-case-kitna-time-lagta-hai`;
const EN_PAIR_URL = `${SITE_URL}/time-limit-to-file-money-recovery-case-india`;
const PUBLISHED_DATE = "2026-11-09T10:00:00+05:30";
const MODIFIED_DATE = "2026-11-09T10:00:00+05:30";

export const metadata: Metadata = {
  title: "पैसे की वसूली के केस में कितना समय लगता है? (2026)",
  description:
    "नोटिस, समरी सूट, चेक बाउंस और उपभोक्ता केस में कितना समय लगता है, और कोर्ट से पहले पैसा वापस पाने के तेज़ तरीके।",
  keywords: [
    "मनी रिकवरी केस में कितना समय लगता है",
    "money recovery keliye kitna time lagta hai court me",
    "recovery case kitne din me",
    "summary suit time",
    "cheque bounce case time",
    "civil recovery suit timeline in india",
    "order 37 cpc summary suit time limit",
    "section 138 ni act case duration",
    "limitation period money recovery india",
    "paisa vasooli me kitna samay lagta hai",
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
    title: "मनी रिकवरी केस कोर्ट में कितना समय लेता है — और जल्दी कैसे निपटाएं",
    description:
      "सिविल समरी सूट (Order 37), चेक बाउंस (Sec 138), उपभोक्ता फोरम और लीगल नोटिस से वसूली का वास्तविक अदालती समय, फीस और त्वरित समाधान।",
    url: PAGE_URL,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "hi_IN",
    alternateLocale: ["en_IN"],
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "मनी रिकवरी केस कोर्ट में कितना समय लेता है — और जल्दी कैसे निपटाएं",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "पैसे की वसूली के केस में कितना समय लगता है? (2026)",
    description:
      "नोटिस, समरी सूट, चेक बाउंस और उपभोक्ता केस में कितना समय लगता है, और कोर्ट से पहले पैसा वापस पाने के तेज़ तरीके।",
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
    title: "The Code of Civil Procedure, 1908 (Act No. 5 of 1908) — Order XXXVII (Summary Procedure) & Order XXI (Execution of Decrees)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "The Limitation Act, 1963 (Act No. 36 of 1963) — Articles 19, 20, 21, 55 (3-Year Period) & Sections 18, 19 (Acknowledgment & Payment)",
    url: "https://www.indiacode.nic.in/handle/123456789/1565",
  },
  {
    title: "The Negotiable Instruments Act, 1881 — Section 138 (Cheque Bounce), Section 143 (Summary Trial) & Section 143A (20% Interim Compensation)",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title: "The Commercial Courts Act, 2015 (Act No. 4 of 2016) — Section 12A (Mandatory Pre-Institution Mediation and Settlement)",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
  {
    title: "The Legal Services Authorities Act, 1987 — Section 19 & Section 21 (Finality & Enforceability of Lok Adalat Awards)",
    url: "https://www.indiacode.nic.in/handle/123456789/1898",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for WhatsApp, Email & Bank Records)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "e-Jagriti Online Consumer Disputes Redressal Portal — Ministry of Consumer Affairs, Government of India",
    url: "https://e-jagriti.gov.in/",
  },
];

const CASE_CITATIONS = [
  {
    title: "सुप्रीम कोर्ट का समरी सूट (Order 37 CPC) में त्वरित डिक्री पर ऐतिहासिक फैसला",
    parties: "IDBI Trusteeship Services Ltd. v. Hubtown Ltd.",
    citation: "Civil Appeal No. 10860 of 2016, (2017) 1 SCC 568",
    court: "Supreme Court of India",
    facts:
      "वादी ने लिखित अनुबंध और वित्तीय गारंटी के आधार पर बॉम्बे हाईकोर्ट में समरी सूट दायर किया। प्रतिवादी ने बिना ठोस दस्तावेज़ के आधारहीन बचाव (Sham/Illusory Defense) पेश करते हुए केस को कई वर्षों तक टालने का प्रयास किया।",
    holding:
      "सुप्रीम कोर्ट ने सीपीसी के आदेश 37 (Order 37 Rule 3 CPC) के तहत बचाव की अनुमति (Leave to Defend) देने के 5 स्पष्ट सिद्धांत तय किए। कोर्ट ने निर्देश दिया कि यदि प्रतिवादी का बचाव बनावटी या बेबुनियाद है, तो कोर्ट को बिना लंबा ट्रायल चलाए सीधे वादी के पक्ष में तत्काल डिक्री पारित करनी चाहिए या प्रतिवादी को पूरी विवादित राशि कोर्ट में जमा करने का आदेश देना चाहिए।",
    amount: "₹450 करोड़ से अधिक की गारंटी रिकवरी • बिना ट्रायल तत्काल डिक्री",
    takeaway:
      "यदि आपके पास चेक, प्रॉमिसरी नोट, इनवॉइस या लिखित पावती है, तो देनदार झूठे बहाने बनाकर केस को 3-4 साल तक नहीं खींच सकता। कोर्ट 6 से 12 महीने में त्वरित डिक्री जारी कर सकता है।",
  },
  {
    title: "चेक बाउंस (Section 138 NI Act) के मामलों में त्वरित सुनवाई और समयबद्ध निपटारा",
    parties: "In Re: Expeditious Trial of Cases Under Section 138 of N.I. Act 1881",
    citation: "Suo Motu Writ Petition (Crl.) No. 2 of 2020, (2021) SCC OnLine SC 325",
    court: "Supreme Court of India (5-Judge Constitution Bench)",
    facts:
      "देश भर की अदालतों में चेक बाउंस के 35 लाख से अधिक मामले लंबित होने पर सुप्रीम कोर्ट ने स्वतः संज्ञान लिया। आरोपी बार-बार समन टालकर और गैर-हाजिर रहकर केस में 3 से 5 साल की देरी करा रहे थे।",
    holding:
      "संविधान पीठ ने आदेश दिया कि एनआई एक्ट के तहत ट्रायल अनिवार्य रूप से समरी ट्रायल (Summary Trial) के रूप में चलेगा। मजिस्ट्रेट को समन तामील के लिए आधुनिक डिजिटल माध्यमों (WhatsApp, Email) का उपयोग करने और समन मिलने पर आरोपी को एक ही बार में सभी गवाहों की जिरह (Cross-examination) पूरी करने का निर्देश दिया गया। कोर्ट ने धारा 143(3) के 6-महीने के समय लक्ष्य को सख्ती से लागू करने का आदेश दिया।",
    amount: "लाखों लंबित चेक मामलों में 6-महीने का समयबद्ध ट्रायल ढांचा",
    takeaway:
      "चेक बाउंस केस में आरोपी अब वर्षों तक तारीखें नहीं ले सकता। धारा 143A के तहत शिकायतकर्ता को 60 दिनों में 20% अंतरिम मुआवजा मिलना भी तय हुआ है।",
  },
  {
    title: "लोक अदालत समझौते का सिविल कोर्ट डिक्री के समान प्रवर्तन",
    parties: "State of Punjab & Anr. v. Jalour Singh & Ors.",
    citation: "(2008) 2 SCC 660",
    court: "Supreme Court of India",
    facts:
      "दुर्घटना और वित्तीय क्षतिपूर्ति के मामले में पक्षों ने लोक अदालत के समक्ष आपसी सहमति से समझौता किया। बाद में एक पक्ष ने समझौते से मुकरते हुए हाईकोर्ट में रिट याचिका दायर कर दी।",
    holding:
      "सुप्रीम कोर्ट ने विधिक सेवा प्राधिकरण अधिनियम, 1987 की धारा 21 का हवाला देते हुए स्पष्ट किया कि लोक अदालत द्वारा पारित अवार्ड (Award of Lok Adalat) अंतिम होता है और इसके विरुद्ध कोई अपील नहीं होती। यह सिविल कोर्ट की अंतिम डिक्री (Civil Court Decree) के समान तुरंत निष्पादनीय (Executable) होता है।",
    amount: "बिना अपील अंतिम डिक्री • कोर्ट फीस का 100% रिफंड",
    takeaway:
      "यदि आप नेशनल लोक अदालत में देनदार के साथ समझौता करते हैं, तो फैसला उसी दिन अंतिम हो जाता है। कोर्ट फीस 100% वापस मिल जाती है और डिफ़ॉल्ट होने पर सीधे संपत्ति कुर्की हो सकती है।",
  },
  {
    title: "अनपेड कमर्शियल इनवॉइस पर त्वरित वसूली और ब्याज का अधिकार",
    parties: "M/s Consolidated Engineering Enterprises v. Principal Secretary, Irrigation Department",
    citation: "(2008) 7 SCC 169",
    court: "Supreme Court of India",
    facts:
      "ठेकेदार ने काम पूरा करने के बाद अपने अनपेड इनवॉइस और अंतिम बिल की वसूली के लिए कानूनी कदम उठाए। विपक्षी विभाग ने परिसीमा और प्रशासनिक प्रक्रियाओं का हवाला देकर भुगतान में वर्षों की देरी की।",
    holding:
      "सुप्रीम कोर्ट ने माना कि वाणिज्यिक लेन-देन में जब कार्य स्वीकार कर लिया गया हो और देनदार ने कोई आपत्ति दर्ज न की हो, तो विलंबित अवधि के लिए वाणिज्यिक ब्याज देय होता है और परिसीमा अधिनियम के तहत उचित समय में दायर दावा तुरंत डिक्री योग्य है।",
    amount: "पूर्ण संविदा बिल + 18% वार्षिक वाणिज्यिक ब्याज",
    takeaway:
      "व्यापारिक उधारी या इनवॉइस रिकवरी में देरी होने पर कोर्ट न केवल मूल राशि दिलाता है बल्कि बाजार दर से चक्रवृद्धि या साधारण वाणिज्यिक ब्याज भी दिलाता है।",
  },
];

const FAQS = [
  {
    question: "मनी रिकवरी केस में कोर्ट में कितना समय लगता है (Money recovery keliye kitna time lagta hai court me)?",
    answer:
      "मनी रिकवरी केस में लगने वाला समय चुने गए कानूनी रास्ते पर निर्भर करता है। यदि आप सीपीसी के आदेश 37 (Order 37 CPC) के तहत समरी सूट फाइल करते हैं, तो आम तौर पर 6 से 12 महीने में डिक्री आ जाती है। चेक बाउंस (Section 138 NI Act) केस में 8 से 16 महीने लगते हैं। वहीं बिना लिखित अनुबंध वाले सामान्य दीवानी मुकदमे (Regular Civil Suit) में 2 से 4 साल लग सकते हैं। हालांकि, 80% मामलों में कोर्ट जाने से पहले 15 दिन का वैधानिक लीगल नोटिस भेजने पर ही समझौता हो जाता है।",
  },
  {
    question: "समरी सूट (Order 37 CPC) कितने दिन में निपटता है (Summary suit time)?",
    answer:
      "Order XXXVII CPC के तहत दायर समरी सूट भारत में सिविल वसूली का सबसे तेज़ रास्ता है। इसमें कोर्ट समन जारी होने के 10 दिन के भीतर प्रतिवादी को हाज़िर होना होता है। यदि प्रतिवादी के पास कोई वास्तविक कानूनी बचाव नहीं है, तो कोर्ट बिना किसी गवाही या लंबे ट्रायल के 6 से 12 महीनों के भीतर अंतिम डिक्री (Money Decree) पारित कर देता है।",
  },
  {
    question: "चेक बाउंस केस का निपटारा कितने समय में होता है (Cheque bounce case time)?",
    answer:
      "एनआई एक्ट की धारा 143(3) के अनुसार चेक बाउंस केस का विचारण 6 महीने के भीतर पूरा करने का वैधानिक प्रावधान है। व्यवहार में न्यायिक कार्यभार के कारण इसमें 8 से 16 महीने का समय लगता है। हालांकि, धारा 143A के अंतर्गत कोर्ट आरोपी को आदेश के 60 दिनों के भीतर चेक राशि का 20% हिस्सा अंतरिम मुआवजे (Interim Compensation) के रूप में जमा करने का आदेश दे सकती है, जिससे शिकायतकर्ता को तुरंत आर्थिक राहत मिलती है।",
  },
  {
    question: "उधार दिए पैसे की वसूली के लिए कोर्ट में केस करने की अधिकतम समय सीमा क्या है?",
    answer:
      "परिसीमा अधिनियम, 1963 (Limitation Act) की अनुसूची के आर्टिकल 19 से 21 के अनुसार, उधारी चुकाने की तय तारीख या डिफॉल्ट के दिन से ठीक 3 साल के भीतर मनी रिकवरी केस दाखिल करना अनिवार्य है। यदि 3 साल बीत गए और देनदार ने कोई लिखित स्वीकृति नहीं दी, तो दावा कालबाधित (Time-Barred) हो जाता है। हालांकि, धारा 18 और 19 के तहत यदि देनदार ने WhatsApp/ईमेल पर उधारी स्वीकारी है या आंशिक भुगतान किया है, तो 3 साल की समय सीमा उस दिन से दोबारा शुरू हो जाती है।",
  },
  {
    question: "कोर्ट में केस लंबा क्यों खिंचता है और प्रक्रिया को तेज़ कैसे करें?",
    answer:
      "अदालत में देरी के तीन मुख्य कारण होते हैं: प्रतिवादी द्वारा समन लेने से बचना, बार-बार अगली तारीख (Adjournment) मांगना, और केस जीतने के बाद डिक्री निष्पादन (Execution Petition under Order 21) में समय लगना। इसे तेज़ करने के लिए: समन स्पीड पोस्ट के साथ WhatsApp/ईमेल पर तामील कराएं (BSA धारा 63), समरी सूट (Order 37) चुनें, और पहली ही सुनवाई पर देनदार के बैंक खाते या संपत्ति को अटैच (Attachment Before Judgment under Order 38 Rule 5) कराने का आवेदन करें।",
  },
  {
    question: "कोर्ट जाए बिना पैसा जल्दी वापस पाने का सबसे तेज़ कानूनी तरीका क्या है?",
    answer:
      "कोर्ट की लंबी प्रक्रिया से बचने के 3 सबसे प्रभावी रास्ते हैं: (1) एडवोकेट के जरिए 15 दिन का वैधानिक लीगल नोटिस भेजना (जिसमें देनदार पर कानूनी कार्रवाई और सिविल व आपराधिक हर्जाने की चेतावनी हो), (2) नेशनल लोक अदालत (National Lok Adalat) में आपसी समझौता कराना, जिसका फैसला उसी दिन अंतिम डिक्री बन जाता है और 100% कोर्ट फीस वापस होती है, और (3) कमर्शियल मामलों में धारा 12A के तहत प्री-इंस्टीट्यूशन मेडिएशन (Pre-Institution Mediation), जो 3 से 5 महीने में निपट जाता है।",
  },
  {
    question: "उपभोक्ता फोरम (e-Jagriti) में रिफंड केस में कितना समय लगता है?",
    answer:
      "उपभोक्ता संरक्षण अधिनियम, 2019 की धारा 38(7) के अनुसार उपभोक्ता आयोग को बिना लैब टेस्ट वाले मामलों का फैसला 3 महीने में और परीक्षण वाले मामलों का 5 महीने में करना चाहिए। ऑनलाइन e-Jagriti पोर्टल शुरू होने के बाद औसत निपटारा 6 से 10 महीनों में हो रहा है। ₹5 लाख तक के दावों पर कोई कोर्ट फीस नहीं लगती और वकील के बिना भी खुद पैरवी की जा सकती है।",
  },
  {
    question: "मनी रिकवरी केस जीतने के बाद बैंक खाते में पैसा आने में कितना समय लगता है?",
    answer:
      "कोर्ट से डिक्री मिलने के बाद यदि देनदार स्वेच्छा से भुगतान नहीं करता, तो सीपीसी के आदेश 21 (Order 21 CPC) के तहत निष्पादन याचिका (Execution Petition) दायर करनी होती है। इसमें अदालत देनदार के बैंक खाते को फ्रीज (Garnishee Order), वेतन अटैच, या चल-अचल संपत्ति नीलाम करने का आदेश देती है। इस निष्पादन प्रक्रिया में आमतौर पर 3 से 6 महीने का अतिरिक्त समय लगता है।",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "पैसे की वसूली के केस में कितना समय लगता है? (2026)",
  description:
    "नोटिस, समरी सूट, चेक बाउंस और उपभोक्ता केस में कितना समय लगता है, और कोर्ट से पहले पैसा वापस पाने के तेज़ तरीके।",
  datePublished: PUBLISHED_DATE,
  dateModified: MODIFIED_DATE,
  mainEntityOfPage: PAGE_URL,
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    url: `${SITE_URL}/authors/anuj-anand-malik`,
  },
  publisher: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: `${SITE_URL}/#organization`,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
    },
  },
  inLanguage: "hi-IN",
  citation: PRIMARY_SOURCES.map((s) => s.url),
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
      name: "वसूली गाइड (Recovery)",
      item: `${SITE_URL}/recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "मनी रिकवरी केस समय सीमा",
      item: PAGE_URL,
    },
  ],
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

// TODO(reviewer): Advocate verification metadata pending src/data/reviewers.ts creation per Section 7 guidelines.

export default function MoneyRecoveryTimePage() {
  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "मनी रिकवरी केस समय सीमा (Hindi)", href: "/hi/money-recovery-case-kitna-time-lagta-hai" },
  ];

  return (
    <div lang="hi">
      {/* Server-Side Rendered JSON-LD Schemas */}
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

      <div className="w-full min-h-screen bg-slate-50 text-slate-900">
        {/* Hero Section matching theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>सीपीसी 1908 • एनआई एक्ट 1881 • परिसीमा अधिनियम 1963</span>
              <span className="text-red-500">•</span>
              <span>कानूनी समय सीमा व त्वरित निपटारा</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              मनी रिकवरी केस कोर्ट में कितना समय लेता है — और जल्दी कैसे निपटाएं
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              id="heading-direct-answer"
              aria-label="सीधा जवाब (Quick Answer)"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                सीधा कानूनी जवाब (Quick Statutory Answer)
              </p>
              <p>
                मनी रिकवरी केस में कोर्ट का समय कानूनी फोरम पर निर्भर करता है: समरी सूट (Order 37 CPC) में 6 से 12 महीने, चेक बाउंस (Section 138 NI Act) में 8 से 16 महीने, और सामान्य दीवानी मुकदमे (Regular Civil Suit) में 2 से 4 साल लगते हैं। हालांकि, 80% मामलों में कोर्ट जाने से पहले एडवोकेट द्वारा 15 दिन का वैधानिक लीगल नोटिस भेजने पर ही देनदार समझौता कर लेता है।
              </p>
            </div>

            {/* 4 Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">15 दिन</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">लीगल नोटिस भुगतान मियाद</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">6–12 माह</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Order 37 CPC त्वरित डिक्री</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">3 वर्ष</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">केस फाइलिंग परिसीमा सीमा</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">20% राशि</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">चेक केस में अंतरिम राहत (143A)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Layout with Table of Contents Sidebar */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          {/* Breadcrumb Navigation Above Content Grid */}
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Table of Contents Sticky Sidebar */}
            <MoneyRecoveryTimeTOC />

            {/* Main Content Body */}
            <main className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - समय सीमा तुलना तालिका */}
              <section id="heading-timeline-table" aria-labelledby="heading-timeline-table-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-timeline-table-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    समय सीमा तुलना तालिका: नोटिस, समरी सूट, चेक बाउंस और रेगुलर सिविल सूट
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    कानूनी तुलनात्मक सारणी
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  भारत में पैसे की वसूली के लिए कई अलग-अलग कानूनी रास्ते उपलब्ध हैं। लेन-देन के प्रकार (चेक, अनुबंध, उधारी या उपभोक्ता विवाद) के अनुसार कोर्ट का समय, खर्च और प्रक्रिया काफी भिन्न होती है। नीचे दी गई सारणी में सभी प्रमुख कानूनी विकल्पों की समय सीमा का तुलनात्मक विवरण दिया गया है:
                </p>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead className="bg-slate-900 text-white text-[11px] sm:text-xs uppercase tracking-wider">
                      <tr>
                        <th className="p-3 sm:p-4 font-bold border-b border-slate-800">कानूनी रास्ता (Legal Route)</th>
                        <th className="p-3 sm:p-4 font-bold border-b border-slate-800">लागू कानून व धारा</th>
                        <th className="p-3 sm:p-4 font-bold border-b border-slate-800">केस करने की सीमा (Limitation)</th>
                        <th className="p-3 sm:p-4 font-bold border-b border-slate-800">औसत कोर्ट अवधि (Timeline)</th>
                        <th className="p-3 sm:p-4 font-bold border-b border-slate-800">अनुमानित खर्च / कोर्ट फीस</th>
                        <th className="p-3 sm:p-4 font-bold border-b border-slate-800">तेज़ निपटारे का उपाय</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          वैधानिक लीगल नोटिस (Advocate Notice)
                        </td>
                        <td className="p-3 sm:p-4">धारा 80 CPC / अनुबंध नियम</td>
                        <td className="p-3 sm:p-4">डिफ़ॉल्ट से 3 वर्ष के भीतर</td>
                        <td className="p-3 sm:p-4 font-bold text-emerald-700">15 से 30 दिन (कोर्ट से पहले)</td>
                        <td className="p-3 sm:p-4">₹{DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition} (फिक्स ड्राफ्टिंग व पोस्ट)</td>
                        <td className="p-3 sm:p-4">स्पीड पोस्ट + WhatsApp डिजिटल तामील</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors bg-red-50/30">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          समरी सूट (Order 37 CPC Summary Suit)
                        </td>
                        <td className="p-3 sm:p-4">Order XXXVII CPC (लिक्विडेटेड मनी)</td>
                        <td className="p-3 sm:p-4">3 वर्ष (Article 19-21)</td>
                        <td className="p-3 sm:p-4 font-bold text-slate-900">6 से 12 महीने</td>
                        <td className="p-3 sm:p-4">राज्य अनुसार 4% से 7% कोर्ट फीस</td>
                        <td className="p-3 sm:p-4">बिना ट्रायल तत्काल डिक्री (No unconditional leave)</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          चेक बाउंस केस (Cheque Bounce)
                        </td>
                        <td className="p-3 sm:p-4">धारा 138 NI Act (आपराधिक)</td>
                        <td className="p-3 sm:p-4">नोटिस के 15 दिन बाद से 1 महीना</td>
                        <td className="p-3 sm:p-4 font-bold text-slate-900">8 से 16 महीने</td>
                        <td className="p-3 sm:p-4">नाममात्र कोर्ट फीस (राज्य अनुसार)</td>
                        <td className="p-3 sm:p-4">धारा 143A के तहत 20% अंतरिम मुआवजा आवेदन</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          कमर्शियल कोर्ट (Commercial Suit)
                        </td>
                        <td className="p-3 sm:p-4">Commercial Courts Act 2015</td>
                        <td className="p-3 sm:p-4">3 वर्ष (इनवॉइस/डिफ़ॉल्ट)</td>
                        <td className="p-3 sm:p-4 font-bold text-slate-900">1 से 1.5 वर्ष (मेडिएशन 3-5 माह)</td>
                        <td className="p-3 sm:p-4">कमर्शियल कोर्ट फीस तालिका अनुसार</td>
                        <td className="p-3 sm:p-4">Section 12A प्री-इंस्टीट्यूशन मेडिएशन</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          उपभोक्ता आयोग (e-Jagriti Refund)
                        </td>
                        <td className="p-3 sm:p-4">Consumer Protection Act 2019</td>
                        <td className="p-3 sm:p-4">कारण उत्पन्न होने से 2 वर्ष</td>
                        <td className="p-3 sm:p-4 font-bold text-emerald-700">6 से 10 महीने</td>
                        <td className="p-3 sm:p-4">₹5 लाख तक शून्य कोर्ट फीस</td>
                        <td className="p-3 sm:p-4">ऑनलाइन फाइलिंग + 15 दिन का लीगल नोटिस</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          रेगुलर सिविल सूट (Ordinary Money Suit)
                        </td>
                        <td className="p-3 sm:p-4">Section 9 CPC (मौखिक/अनौपचारिक)</td>
                        <td className="p-3 sm:p-4">3 वर्ष (Limitation Act)</td>
                        <td className="p-3 sm:p-4 font-bold text-red-600">2 से 4 वर्ष</td>
                        <td className="p-3 sm:p-4">दावा राशि पर पूरी कोर्ट फीस</td>
                        <td className="p-3 sm:p-4">Order 38 Rule 5 संपत्ति कुर्की आवेदन</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors bg-emerald-50/40">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          नेशनल लोक अदालत (National Lok Adalat)
                        </td>
                        <td className="p-3 sm:p-4">विधिक सेवा प्राधिकरण अधिनियम 1987</td>
                        <td className="p-3 sm:p-4">लंबित या प्री-लिटिगेशन स्टेज</td>
                        <td className="p-3 sm:p-4 font-bold text-emerald-700">1 दिन (उसी दिन अंतिम डिक्री)</td>
                        <td className="p-3 sm:p-4">शून्य (जमा कोर्ट फीस 100% वापस)</td>
                        <td className="p-3 sm:p-4">कोई अपील नहीं, अंतिम फैसला</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 2: H2 - मनी रिकवरी केस कोर्ट में कितना समय लेता है: चरणबद्ध विवरण */}
              <section id="heading-stage-breakdown" aria-labelledby="heading-stage-breakdown-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-stage-breakdown-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  कोर्ट में मनी रिकवरी केस: नोटिस से डिक्री तक कितना समय
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  जब कोई व्यक्ति किसी दीवानी अदालत (Civil Court) में पैसे की वसूली का मुकदमा दायर करता है, तो कानूनी प्रक्रिया विभिन्न चरणों से गुजरती है। अक्सर लोग सोचते हैं कि केस फाइल करते ही अगले महीने फैसला आ जाएगा, लेकिन सिविल प्रक्रिया संहिता (CPC, 1908) के तहत हर चरण की एक निर्धारित समय सीमा होती है। आइए जानें कि कोर्ट में प्रत्येक चरण कितना समय लेता है:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 sm:p-5 bg-white rounded-xl border border-slate-200 shadow-sm space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold px-2.5 py-1 bg-red-100 text-red-700 rounded-md">
                        चरण 1: 15–30 दिन
                      </span>
                      <span className="text-[11px] text-slate-500 font-semibold">पूर्व-अदालती चरण</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      वैधानिक लीगल नोटिस और मांग अवधि (Legal Demand Notice)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      कोर्ट जाने से पहले एडवोकेट द्वारा 15 दिन का लीगल नोटिस भेजा जाता है। यह देनदार को चेतावनी देता है कि यदि वह 15 दिनों में भुगतान नहीं करता, तो उस पर कानूनी मुकदमा, ब्याज और अदालती खर्च का दावा ठोका जाएगा।
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 bg-white rounded-xl border border-slate-200 shadow-sm space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold px-2.5 py-1 bg-slate-100 text-slate-800 rounded-md">
                        चरण 2: 30–60 दिन
                      </span>
                      <span className="text-[11px] text-slate-500 font-semibold">फाइलिंग व स्क्रूटनी</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      वाद पत्र (Plaint) फाइलिंग और कोर्ट समन जारी होना
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      नोटिस की मियाद बीतने के बाद उचित अधिकार क्षेत्र वाले कोर्ट में वाद पत्र (Plaint) दाखिल होता है। कोर्ट रजिस्ट्री दस्तावेज़ों और कोर्ट फीस की जांच (Scrutiny) करती है, जिसके बाद जज प्रतिवादी को अदालत में पेश होने का समन जारी करते हैं।
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 bg-white rounded-xl border border-slate-200 shadow-sm space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold px-2.5 py-1 bg-slate-100 text-slate-800 rounded-md">
                        चरण 3: 30–120 दिन
                      </span>
                      <span className="text-[11px] text-slate-500 font-semibold">लिखित बयान (WS)</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      प्रतिवादी का लिखित जवाब (Written Statement under Order 8)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      सीपीसी के आदेश 8 नियम 1 के तहत समन तामील होने के 30 दिनों (अधिकतम 120 दिन विशेष कारणों से) के भीतर देनदार को अपना जवाब दाखिल करना होता है। यदि वह जवाब नहीं देता, तो कोर्ट एकतरफा फैसला (Ex-parte Decree) दे सकती है।
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 bg-white rounded-xl border border-slate-200 shadow-sm space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold px-2.5 py-1 bg-slate-100 text-slate-800 rounded-md">
                        चरण 4: 6–18 माह
                      </span>
                      <span className="text-[11px] text-slate-500 font-semibold">सबूत व जिरह</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      विवाद के मुद्दे तय होना और गवाही (Framing of Issues & Evidence)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      कोर्ट दोनों पक्षों के तर्कों से मुख्य प्रश्न तय करती है। इसके बाद वादी और प्रतिवादी अपने-अपने साक्ष्य (Bank Statement, WhatsApp Chat under BSA Sec 63) पेश करते हैं और वकीलों द्वारा गवाहों की जिरह (Cross-examination) होती है।
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 bg-white rounded-xl border border-slate-200 shadow-sm space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold px-2.5 py-1 bg-slate-100 text-slate-800 rounded-md">
                        चरण 5: 30–90 दिन
                      </span>
                      <span className="text-[11px] text-slate-500 font-semibold">अंतिम फैसला</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      अंतिम बहस और मनी डिक्री पारित होना (Final Arguments & Judgment)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      दोनों पक्षों की अंतिम कानूनी दलीलों के बाद जज फैसला सुनाते हैं। इसमें मूल राशि के साथ-साथ ब्याज (Interest under Section 34 CPC) और मुकदमे का खर्च (Costs) जोड़ने का आदेश दिया जाता है।
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 bg-white rounded-xl border border-slate-200 shadow-sm space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-md">
                        चरण 6: 3–6 माह
                      </span>
                      <span className="text-[11px] text-slate-500 font-semibold">वसूली निष्पादन</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      डिक्री निष्पादन और बैंक जब्ती (Execution under Order 21 CPC)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      यदि देनदार डिक्री के बाद भी पैसा नहीं देता, तो कोर्ट के माध्यम से उसके बैंक खाते फ्रीज किए जाते हैं (Garnishee Order) या उसकी संपत्ति कुर्क करके पैसा वादी के खाते में भेजा जाता है।
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-slate-100 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <strong className="text-slate-900">समय का कुल योग:</strong> यदि मामला सामान्य सिविल सूट में चले तो कुल मिलाकर <strong>2 से 4 साल</strong> का समय लग सकता है। इसलिए भारतीय कानून में त्वरित वसूली के लिए <strong>समरी सूट (Order 37)</strong> और <strong>चेक बाउंस (Section 138)</strong> जैसे विशेष प्रावधान बनाए गए हैं।
                </div>
              </section>

              {/* Section 3: H2 - समरी सूट (Order 37 CPC) में कितना समय लगता है */}
              <section id="heading-summary-suit" aria-labelledby="heading-summary-suit-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-summary-suit-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  समरी सूट (Order 37 CPC): 6 से 12 महीने में त्वरित डिक्री
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  यदि आपके पास देनदार का चेक, प्रॉमिसरी नोट, हुंडी, टैक्स इनवॉइस, या कोई लिखित अनुबंध है जिसमें एक निश्चित राशि (Liquidated Demand in Money) का उल्लेख है, तो आप सामान्य दीवानी मुकदमे की जगह <strong>सीपीसी के आदेश 37 (Order XXXVII CPC)</strong> के तहत समरी सूट फाइल कर सकते हैं। यह सिविल कानून में पैसे वसूलने का सबसे तेज़ और अचूक हथियार है।
                </p>

                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-4">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    समरी सूट सामान्य केस से 4 गुना तेज़ क्यों होता है?
                  </h3>
                  <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2.5">
                      <span className="shrink-0 w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                        ✓
                      </span>
                      <span>
                        <strong>10 दिनों में उपस्थिति अनिवार्य:</strong> समन मिलने के ठीक 10 दिनों के भीतर देनदार को कोर्ट में उपस्थिति (Appearance) दर्ज करानी होती है। यदि वह 10 दिन में हाज़िर नहीं होता, तो कोर्ट बिना कोई बहस सुने उसी दिन वादी के पक्ष में 100% राशि की अंतिम डिक्री पास कर देता है।
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="shrink-0 w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                        ✓
                      </span>
                      <span>
                        <strong>आरोपी को सीधे बचाव का अधिकार नहीं:</strong> सामान्य केस में विपक्षी कोई भी झूठी कहानी बनाकर केस टाल सकता है। लेकिन समरी सूट में उसे कोर्ट से &apos;बचाव की अनुमति&apos; (Leave to Defend) मांगनी पड़ती है। सुप्रीम कोर्ट के <em>IDBI Trusteeship Services (2017)</em> फैसले के तहत यदि उसका बचाव ठोस नहीं है, तो कोर्ट सीधे डिक्री पारित कर देता है या उसे पूरी रकम कोर्ट में जमा करने का आदेश देता है।
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="shrink-0 w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                        ✓
                      </span>
                      <span>
                        <strong>लंबी गवाहियों की ज़रूरत नहीं:</strong> जब तक कोर्ट बिना शर्त बचाव की अनुमति न दे, कोई औपचारिक गवाही या लंबा ट्रायल नहीं चलता। इसलिए यह मुकदमा आमतौर पर <strong>6 से 12 महीनों</strong> के भीतर समाप्त हो जाता है।
                      </span>
                    </li>
                  </ul>

                  <div className="p-3.5 bg-red-50 rounded-xl border border-red-200 text-xs text-red-900 leading-relaxed">
                    <strong>परिसीमा अवधि (Limitation Period):</strong> समरी सूट फाइल करने के लिए डिफ़ॉल्ट की तारीख से पूरे <strong>3 वर्ष</strong> का समय मिलता है (Limitation Act Article 19–21)।
                  </div>
                </div>
              </section>

              {/* Section 4: H2 - चेक बाउंस (Section 138 NI Act) केस कितने दिन में निपटता है */}
              <section id="heading-cheque-bounce" aria-labelledby="heading-cheque-bounce-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-cheque-bounce-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  चेक बाउंस (Section 138): 143A व स्पीडी ट्रायल की समय सीमा
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  यदि देनदार ने आपको चेक दिया था और वह खाते में अपर्याप्त राशि (Funds Insufficient) या किसी अन्य कारण से बाउंस हो गया, तो आप परक्राम्य लिखत अधिनियम, 1881 की धारा 138 के तहत आपराधिक मुकदमा चला सकते हैं।
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 sm:p-5 bg-white rounded-xl border border-slate-200 shadow-sm space-y-2">
                    <h3 className="text-base font-bold text-slate-900">
                      धारा 143(3) का वैधानिक 6 महीने का नियम
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      एनआई एक्ट की धारा 143(3) स्पष्ट कहती है कि मजिस्ट्रेट को चेक बाउंस केस की सुनवाई परिवाद दर्ज होने के 6 महीने के भीतर पूरी करने का हर संभव प्रयास करना चाहिए। सुप्रीम कोर्ट ने 2021 के ऐतिहासिक संविधान पीठ फैसले में इस समरी ट्रायल समय सीमा को कड़ाई से लागू करने का निर्देश दिया है।
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 bg-white rounded-xl border border-slate-200 shadow-sm space-y-2">
                    <h3 className="text-base font-bold text-slate-900">
                      धारा 143A: 60 दिनों में 20% अंतरिम मुआवजा
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      धारा 143A के तहत जैसे ही आरोपी कोर्ट में अपना गुनाह नहीं कबूलता, मजिस्ट्रेट उसे चेक राशि का 20% हिस्सा शिकायतकर्ता को तत्काल देने का आदेश दे सकते हैं। यह रकम आरोपी को 60 दिनों के भीतर जमा करनी होती है, जिससे केस खत्म होने से पहले ही पीड़ित को वित्तीय राहत मिल जाती है।
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-3">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
                    चेक बाउंस की अनिवार्य वैधानिक समय सीमाएं (Strictest Deadlines):
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                      <span className="font-extrabold text-[#DC2626] block mb-1">30 दिन</span>
                      <p className="text-slate-600">बैंक रिटर्न मेमो मिलने के 30 दिन में 138 डिमांड नोटिस भेजना अनिवार्य है।</p>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                      <span className="font-extrabold text-emerald-700 block mb-1">15 दिन</span>
                      <p className="text-slate-600">नोटिस तामील होने के बाद देनदार को भुगतान के लिए 15 दिन का समय मिलता है।</p>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                      <span className="font-extrabold text-slate-900 block mb-1">1 महीना (30 दिन)</span>
                      <p className="text-slate-600">15 दिन बीतने पर 16वें दिन से अगले 1 महीने के भीतर कोर्ट में केस फाइल करना होता है।</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    व्यवहार में, समन और ज़मानत की प्रक्रिया मिलाकर चेक बाउंस केस <strong>8 से 16 महीनों</strong> में अंतिम फैसले तक पहुँचता है, जिसमें आरोपी को 2 साल तक की कैद या चेक राशि का दोगुना जुर्माना भुगतना पड़ सकता है। अधिक जानकारी के लिए हमारी विस्तृत गाइड देखें:{" "}
                    <Link
                      href="/hi/cheque-bounce-notice-kitne-din-mein"
                      className="font-bold text-red-600 hover:underline"
                    >
                      चेक बाउंस होने के कितने दिन बाद नोटिस दें?
                    </Link>
                  </p>
                </div>
              </section>

              {/* Section 5: H2 - उपभोक्ता फोरम (e-Jagriti) में रिकवरी केस */}
              <section id="heading-consumer-forum" aria-labelledby="heading-consumer-forum-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-consumer-forum-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  उपभोक्ता फोरम (e-Jagriti) में रिकवरी केस में कितना समय लगता है
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  यदि आपका पैसा किसी कंपनी, ई-कॉमर्स पोर्टल, ट्रेवल एजेंसी, एयरलाइन, कोचिंग संस्थान या रियल एस्टेट बिल्डर के पास अटका है, जिन्होंने पैसे लेकर सेवा नहीं दी या रिफंड रोक लिया, तो आप उपभोक्ता आयोग (Consumer Commission) में जा सकते हैं।
                </p>

                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                      <strong className="text-slate-900 block mb-1">धारा 38(7) की वैधानिक अवधि:</strong>
                      <p className="text-slate-600 leading-relaxed">
                        उपभोक्ता संरक्षण अधिनियम, 2019 के अनुसार जिन मामलों में किसी उत्पाद की प्रयोगशाला जांच की आवश्यकता नहीं होती, उन्हें आयोग को <strong>3 महीने (90 दिन)</strong> के भीतर निपटाना अनिवार्य है।
                      </p>
                    </div>
                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                      <strong className="text-slate-900 block mb-1">वास्तविक अदालती अवधि:</strong>
                      <p className="text-slate-600 leading-relaxed">
                        सरकारी पोर्टल <strong>e-Jagriti</strong> के माध्यम से ऑनलाइन नोटिस और डिजिटल सुनवाई के चलते वर्तमान में उपभोक्ता मामलों का औसत निपटारा <strong>6 से 10 महीनों</strong> में हो रहा है।
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <h3 className="font-bold text-slate-900">उपभोक्ता फोरम के 3 सबसे बड़े फायदे:</h3>
                    <ol className="list-decimal pl-5 space-y-1.5">
                      <li>
                        <strong>शून्य कोर्ट फीस:</strong> ₹5 लाख तक के दावों पर उपभोक्ता को कोई कोर्ट फीस नहीं देनी होती।
                      </li>
                      <li>
                        <strong>हर्जाना और ब्याज:</strong> उपभोक्ता फोरम न केवल फंसा हुआ पैसा वापस दिलाता है बल्कि 9% से 12% वार्षिक ब्याज और मानसिक प्रताड़ना का हर्जाना भी लगाता है।
                      </li>
                      <li>
                        <strong>सख्त गिरफ्तारी प्रावधान:</strong> यदि विपक्षी आयोग के आदेश का पालन 30 दिन में नहीं करता, तो धारा 72 के तहत 3 साल तक की जेल और संपत्ति कुर्की का वारंट जारी होता है।
                      </li>
                    </ol>
                  </div>
                </div>
              </section>

              {/* Section 6: H2 - कोर्ट में केस लंबा क्यों खिंचता है — और देरी से बचने के 5 कानूनी उपाय */}
              <section id="heading-court-delays" aria-labelledby="heading-court-delays-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-court-delays-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  कोर्ट में केस लंबा क्यों खिंचता है — और देरी से बचने के 5 कानूनी उपाय
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  अक्सर लोग शिकायत करते हैं कि सिविल कोर्ट में "तारीख पर तारीख" मिलती है। वास्तव में, अधिकांश मामलों में देरी कानूनी प्रक्रिया की वजह से नहीं बल्कि विपक्षी की चालाकियों और वादी द्वारा सही कानूनी कदम न उठाने के कारण होती है। यहाँ जानिए वे 5 सटीक उपाय जिनसे आप कोर्ट का समय आधा कर सकते हैं:
                </p>

                <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="shrink-0 w-7 h-7 rounded-full bg-red-100 text-red-700 font-extrabold text-sm flex items-center justify-center mt-0.5">
                      1
                    </span>
                    <div>
                      <strong className="text-slate-900 text-sm sm:text-base font-bold block mb-1">
                        समन तामील में देरी रोकें — WhatsApp और ईमेल से डिजिटल तामील कराएं:
                      </strong>
                      <p className="text-slate-600 leading-relaxed">
                        देनदार अक्सर कोर्ट के प्रोसेस सर्वर (डाकिए) से बचने के लिए दरवाजा बंद कर लेते हैं। भारतीय साक्ष्य अधिनियम, 2023 की धारा 63 और सुप्रीम कोर्ट के सितंबर 2025 के फैसले (Sanjabij Tari v. Kishore S. Borcar) के तहत कोर्ट से स्पीड पोस्ट के साथ-साथ WhatsApp और ईमेल से समन तामील कराने की अनुमति लें। जैसे ही दो ब्लू टिक या ईमेल डिलीवरी रिपोर्ट मिलती है, कोर्ट उसे वैध तामील मान लेती है।
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="shrink-0 w-7 h-7 rounded-full bg-red-100 text-red-700 font-extrabold text-sm flex items-center justify-center mt-0.5">
                      2
                    </span>
                    <div>
                      <strong className="text-slate-900 text-sm sm:text-base font-bold block mb-1">
                        रेगुलर सूट की जगह समरी सूट (Order 37) फाइल करें:
                      </strong>
                      <p className="text-slate-600 leading-relaxed">
                        यदि आपके पास चेक, प्रॉमिसरी नोट, इनवॉइस या लिखित पावती है, तो कभी भी सामान्य मुकदमा दायर न करें। सीधे Order 37 CPC का समरी सूट दाखिल करें जिससे विपक्षी बिना कोर्ट की अनुमति के केस को लंबा न खींच सके।
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="shrink-0 w-7 h-7 rounded-full bg-red-100 text-red-700 font-extrabold text-sm flex items-center justify-center mt-0.5">
                      3
                    </span>
                    <div>
                      <strong className="text-slate-900 text-sm sm:text-base font-bold block mb-1">
                        फैसले से पहले संपत्ति कुर्की का आवेदन दें (Order 38 Rule 5 CPC):
                      </strong>
                      <p className="text-slate-600 leading-relaxed">
                        केस फाइल करते ही सीपीसी के आदेश 38 नियम 5 के तहत आवेदन दें कि देनदार अपनी संपत्ति बेचकर भाग सकता है। कोर्ट देनदार को सुरक्षा राशि (Security) जमा करने का आदेश देती है या उसकी संपत्ति को अटैच कर लेती है। संपत्ति अटैच होते ही देनदार तुरंत समझौते की मेज पर आ जाता है।
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="shrink-0 w-7 h-7 rounded-full bg-red-100 text-red-700 font-extrabold text-sm flex items-center justify-center mt-0.5">
                      4
                    </span>
                    <div>
                      <strong className="text-slate-900 text-sm sm:text-base font-bold block mb-1">
                        120 दिन की समय सीमा खत्म होते ही एकतरफा आदेश (Ex-Parte) मांगें:
                      </strong>
                      <p className="text-slate-600 leading-relaxed">
                        सीपीसी के आदेश 8 नियम 1 के अनुसार समन मिलने के अधिकतम 120 दिनों के बाद प्रतिवादी को जवाब दाखिल करने की अनुमति नहीं दी जा सकती। कोर्ट में तुरंत आदेश 8 नियम 10 के तहत वादी के पक्ष में तत्काल फैसला सुनाने की प्रार्थना करें।
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="shrink-0 w-7 h-7 rounded-full bg-red-100 text-red-700 font-extrabold text-sm flex items-center justify-center mt-0.5">
                      5
                    </span>
                    <div>
                      <strong className="text-slate-900 text-sm sm:text-base font-bold block mb-1">
                        कोर्ट शुरू होने पर ही गार्निशी आदेश (Garnishee Order) की तैयारी रखें:
                      </strong>
                      <p className="text-slate-600 leading-relaxed">
                        देनदार के बैंक खाते, UPI आईडी, पैन कार्ड और जीएसटी नंबर पहले से जुटाकर रखें। जैसे ही कोर्ट डिक्री या अंतरिम आदेश दे, तुरंत आदेश 21 नियम 46 के तहत बैंक को सीधे पैसा आपके खाते में ट्रांसफर करने का गार्निशी आदेश जारी कराएं।
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 7: H2 - कोर्ट जाए बिना पैसा जल्दी वापस पाने के 4 कानूनी विकल्प */}
              <section id="heading-pre-litigation" aria-labelledby="heading-pre-litigation-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-pre-litigation-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  बिना कोर्ट जाए पैसा पाने के 4 विकल्प: लोक अदालत व मध्यस्थता
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  यदि आप कोर्ट के चक्करों और वकीलों की लंबी फीस से बचना चाहते हैं, तो भारतीय कानून में कई ऐसे प्रभावी वैधानिक तंत्र हैं जो अदालत में मुकदमा लड़े बिना आपका पैसा कुछ ही हफ्तों में वापस दिला सकते हैं:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 sm:p-5 bg-white rounded-xl border border-slate-200 shadow-sm space-y-2">
                    <span className="text-xs font-bold px-2.5 py-0.5 bg-red-50 text-red-700 rounded-md">
                      विकल्प 1 • 15 दिन की अवधि
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      एडवोकेट का वैधानिक लीगल डिमांड नोटिस (Legal Demand Notice)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      यह वसूली का सबसे पहला और असरदार कदम है। जब किसी प्रतिष्ठित एडवोकेट के लेटरहेड पर भारतीय न्याय संहिता (BNS) और सीपीसी के तहत देनदार को स्पीड पोस्ट व डिजिटल तामील से नोटिस मिलता है, तो उसे कोर्ट के खर्च, संपत्ति कुर्की और कानूनी परिणामों का आभास हो जाता है। 80% मामलों में देनदार नोटिस मिलते ही 15 दिनों में संपर्क करके पैसा लौटा देता है।
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 bg-white rounded-xl border border-slate-200 shadow-sm space-y-2">
                    <span className="text-xs font-bold px-2.5 py-0.5 bg-emerald-50 text-emerald-800 rounded-md">
                      विकल्प 2 • 1 दिन में अंतिम फैसला
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      नेशनल लोक अदालत में प्री-लिटिगेशन समझौता (National Lok Adalat)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      जिला विधिक सेवा प्राधिकरण (DLSA) हर 3 महीने में नेशनल लोक अदालत आयोजित करता है। आप कोर्ट फीस दिए बिना प्री-लिटिगेशन स्तर पर लोक अदालत में अर्जी लगा सकते हैं। यदि देनदार समझौते पर हस्ताक्षर करता है, तो वह अवार्ड सुप्रीम कोर्ट के फैसले <em>Jalour Singh (2008)</em> के अनुसार सिविल कोर्ट की अंतिम डिक्री बन जाता है, जिसके खिलाफ कोई अपील नहीं हो सकती।
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 bg-white rounded-xl border border-slate-200 shadow-sm space-y-2">
                    <span className="text-xs font-bold px-2.5 py-0.5 bg-slate-100 text-slate-800 rounded-md">
                      विकल्प 3 • 3 से 5 माह
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      कमर्शियल मध्यस्थता (Pre-Institution Mediation under Sec 12A)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      यदि आपका मामला व्यापारिक लेन-देन या इनवॉइस का है, तो कमर्शियल कोर्ट्स एक्ट 2015 की धारा 12A के तहत कोर्ट जाने से पहले अनिवार्य मध्यस्थता होती है। यह प्रक्रिया लीगल सर्विसेज अथॉरिटी द्वारा संचालित की जाती है और 3 से 5 महीने में समझौते के साथ समाप्त हो जाती है।
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 bg-white rounded-xl border border-slate-200 shadow-sm space-y-2">
                    <span className="text-xs font-bold px-2.5 py-0.5 bg-amber-50 text-amber-800 rounded-md">
                      विकल्प 4 • 90 दिन
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      MSME समाधान पोर्टल (Delayed Payment Redressal)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      यदि आप उद्योग आधार / उद्यम रजिस्टर्ड एमएसएमई हैं और किसी ग्राहक ने 45 दिनों में माल का भुगतान नहीं किया, तो <strong>samadhaan.msme.gov.in</strong> पर ऑनलाइन शिकायत दर्ज करें। एमएसएमई एक्ट की धारा 18 के तहत 90 दिनों में फैसला होना अनिवार्य है और देनदार पर आरबीआई बैंक दर के तीन गुना चक्रवृद्धि ब्याज का प्रावधान है।
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 8: H2 - रिकवरी प्रक्रिया प्रवाह और समय चक्र (SVG Diagram) */}
              <section id="heading-process-diagram" aria-labelledby="heading-process-diagram-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-process-diagram-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    रिकवरी प्रक्रिया प्रवाह और समय चक्र (Hand-Authored Process Flowchart)
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    निर्णय वृक्ष व समय रेखा
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  नीचे दिए गए फ्लोचार्ट में डिफॉल्ट से लेकर बैंक खाते में रकम आने तक के सभी रास्तों और उनके समय चक्र को स्पष्ट किया गया है:
                </p>

                {/* Hand-authored SVG Diagram */}
                <div className="w-full bg-slate-900 p-4 sm:p-6 rounded-2xl border border-slate-800 shadow-xl overflow-x-auto">
                  <svg
                    viewBox="0 0 900 480"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full min-w-[700px] h-auto font-sans text-xs"
                    role="img"
                    aria-label="मनी रिकवरी समय चक्र और प्रक्रिया प्रवाह चार्ट"
                  >
                    {/* Defaut Node */}
                    <rect x="20" y="200" width="160" height="80" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                    <text x="100" y="235" fill="#F87171" fontWeight="bold" textAnchor="middle" fontSize="13">पैसे का डिफ़ॉल्ट</text>
                    <text x="100" y="255" fill="#CBD5E1" textAnchor="middle" fontSize="10">उधारी / चेक / इनवॉइस</text>
                    <text x="100" y="270" fill="#94A3B8" textAnchor="middle" fontSize="9">दिन 0 (वाद कारण शुरू)</text>

                    {/* Arrow 1 */}
                    <path d="M180 240 L230 240" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrow)" />

                    {/* Step 1 Node: Legal Notice */}
                    <rect x="230" y="190" width="180" height="100" rx="12" fill="#1E293B" stroke="#3B82F6" strokeWidth="2" />
                    <text x="320" y="220" fill="#60A5FA" fontWeight="bold" textAnchor="middle" fontSize="13">चरण 1: लीगल नोटिस</text>
                    <text x="320" y="240" fill="#E2E8F0" textAnchor="middle" fontSize="10">15 दिन की वैधानिक मियाद</text>
                    <text x="320" y="258" fill="#94A3B8" textAnchor="middle" fontSize="9">स्पीड पोस्ट + WhatsApp</text>
                    <text x="320" y="275" fill="#34D399" fontWeight="bold" textAnchor="middle" fontSize="10">80% मामले यहीं सुलझते हैं</text>

                    {/* Branching from Notice */}
                    {/* Upper branch: Pre-litigation / Lok Adalat */}
                    <path d="M410 215 L470 120 L510 120" stroke="#10B981" strokeWidth="2" strokeDasharray="4 4" />
                    <rect x="510" y="80" width="200" height="80" rx="12" fill="#064E3B" stroke="#10B981" strokeWidth="1.5" />
                    <text x="610" y="110" fill="#A7F3D0" fontWeight="bold" textAnchor="middle" fontSize="12">लोक अदालत / मध्यस्थता</text>
                    <text x="610" y="130" fill="#ECFDF5" textAnchor="middle" fontSize="10">अवधि: 1 दिन से 3 माह</text>
                    <text x="610" y="148" fill="#6EE7B7" textAnchor="middle" fontSize="9">100% कोर्ट फीस रिफंड • अंतिम फैसला</text>

                    {/* Middle branch: Order 37 Summary Suit / Sec 138 */}
                    <path d="M410 240 L510 240" stroke="#F59E0B" strokeWidth="2" />
                    <rect x="510" y="200" width="200" height="80" rx="12" fill="#78350F" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="610" y="230" fill="#FDE68A" fontWeight="bold" textAnchor="middle" fontSize="12">समरी सूट / चेक बाउंस</text>
                    <text x="610" y="250" fill="#FFFBEB" textAnchor="middle" fontSize="10">अवधि: 6 से 12 महीने</text>
                    <text x="610" y="268" fill="#FCD34D" textAnchor="middle" fontSize="9">20% अंतरिम राहत • त्वरित डिक्री</text>

                    {/* Lower branch: Regular Civil Suit */}
                    <path d="M410 265 L470 360 L510 360" stroke="#EF4444" strokeWidth="2" />
                    <rect x="510" y="320" width="200" height="80" rx="12" fill="#450A0A" stroke="#EF4444" strokeWidth="1.5" />
                    <text x="610" y="350" fill="#FECACA" fontWeight="bold" textAnchor="middle" fontSize="12">रेगुलर सिविल मुकदमा</text>
                    <text x="610" y="370" fill="#FEF2F2" textAnchor="middle" fontSize="10">अवधि: 2 से 4 साल</text>
                    <text x="610" y="388" fill="#FCA5A5" textAnchor="middle" fontSize="9">मौखिक लेन-देन • लंबी गवाही व बहस</text>

                    {/* Convergence to Execution */}
                    <path d="M710 120 L760 215" stroke="#10B981" strokeWidth="2" />
                    <path d="M710 240 L760 240" stroke="#F59E0B" strokeWidth="2" />
                    <path d="M710 360 L760 265" stroke="#EF4444" strokeWidth="2" />

                    {/* Final Node: Bank Recovery */}
                    <rect x="760" y="200" width="120" height="80" rx="12" fill="#1E293B" stroke="#10B981" strokeWidth="2.5" />
                    <text x="820" y="235" fill="#34D399" fontWeight="bold" textAnchor="middle" fontSize="13">बैंक खाते में</text>
                    <text x="820" y="255" fill="#FFFFFF" fontWeight="bold" textAnchor="middle" fontSize="12">रकम वापसी</text>
                    <text x="820" y="270" fill="#94A3B8" textAnchor="middle" fontSize="9">मूल + ब्याज + खर्च</text>

                    {/* Marker definition */}
                    <defs>
                      <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#DC2626" />
                      </marker>
                    </defs>
                  </svg>
                </div>
              </section>

              {/* Section 9: H2 - अदालत के 4 ऐतिहासिक फैसले */}
              <section id="heading-case-citations" aria-labelledby="heading-case-citations-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-case-citations-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    अदालती फैसले: मनी रिकवरी व समरी प्रक्रिया की समय सीमा
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    सुप्रीम कोर्ट के सत्यापित निर्णय
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:gap-6">
                  {CASE_CITATIONS.map((c, idx) => (
                    <article
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden w-full"
                    >
                      <div className="absolute top-0 left-0 w-2 h-full bg-[#DC2626]" />
                      <div className="pl-2 space-y-4">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-[11px] sm:text-xs font-extrabold px-3 py-1 bg-red-50 text-[#DC2626] rounded-full uppercase tracking-wider">
                            फैसला #{idx + 1} • {c.citation}
                          </span>
                          <span className="text-xs text-slate-500 font-semibold">{c.court}</span>
                        </div>

                        <div>
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-1">
                            {c.title}
                          </h3>
                          <p className="text-xs font-semibold text-slate-600">
                            पक्षकार: <span className="text-slate-800">{c.parties}</span>
                          </p>
                        </div>

                        <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">विवाद के तथ्य (Facts):</strong>
                            <p className="leading-relaxed">{c.facts}</p>
                          </div>

                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">कोर्ट का न्यायिक निर्णय (Holding):</strong>
                            <p className="leading-relaxed">{c.holding}</p>
                          </div>
                        </div>

                        <div className="p-3 sm:p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              न्यायिक राहत व डिक्री प्रभाव
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              कानूनी प्रभाव
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              पूरे भारत के न्यायालयों पर बाध्यकारी
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>आपके लिए क्या सीख है:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 10: H2 - वास्तविक समय गणना उदाहरण */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-worked-example-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    उदाहरण: ₹6,50,000 की रिकवरी में नोटिस से खाते तक का समय
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    तारीख-दर-तारीख केस स्टडी
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  आइए एक व्यावहारिक उदाहरण (Illustrative Case Study) से समझें कि जब कोई देनदार पैसे देने से मुकर जाता है, तो कानूनी नोटिस और समरी सूट के माध्यम से वास्तव में कितने महीनों में रकम की वसूली होती है:
                </p>

                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm space-y-5">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm space-y-1">
                    <p><strong>मामला:</strong> कारोबारी आपूर्ति के ₹6,50,000 का अनपेड चेक व टैक्स इनवॉइस डिफ़ॉल्ट</p>
                    <p><strong>वादी:</strong> मेसर्स शर्मा ट्रेडिंग कंपनी (सप्लायर)</p>
                    <p><strong>देनदार:</strong> मेसर्स वर्मा लॉजिस्टिक्स (खरीदार)</p>
                    <p><strong>विवादित राशि:</strong> ₹6,50,000 (मूल) + 18% वार्षिक वाणिज्यिक ब्याज</p>
                  </div>

                  <div className="relative border-l-2 border-red-500 ml-3 sm:ml-4 pl-4 sm:pl-6 space-y-6 text-xs sm:text-sm">
                    <div className="relative">
                      <span className="absolute -left-[25px] sm:-left-[33px] top-0 w-4 h-4 rounded-full bg-red-600 ring-4 ring-red-100" />
                      <span className="text-xs font-extrabold text-red-600">10 जनवरी 2026</span>
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-0.5">बैंक से चेक रिटर्न मेमो प्राप्त हुआ</h4>
                      <p className="text-slate-600 mt-1">₹6,50,000 का चेक "Funds Insufficient" के साथ बाउंस हुआ।</p>
                    </div>

                    <div className="relative">
                      <span className="absolute -left-[25px] sm:-left-[33px] top-0 w-4 h-4 rounded-full bg-slate-400 ring-4 ring-slate-100" />
                      <span className="text-xs font-extrabold text-slate-700">18 जनवरी 2026 (दिन 8)</span>
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-0.5">15-दिन का वैधानिक लीगल नोटिस प्रेषित</h4>
                      <p className="text-slate-600 mt-1">एडवोकेट द्वारा स्पीड पोस्ट और WhatsApp से नोटिस तामील कराया गया (Section 138 Proviso b)।</p>
                    </div>

                    <div className="relative">
                      <span className="absolute -left-[25px] sm:-left-[33px] top-0 w-4 h-4 rounded-full bg-slate-400 ring-4 ring-slate-100" />
                      <span className="text-xs font-extrabold text-slate-700">07 फरवरी 2026 (दिन 28)</span>
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-0.5">15-दिन की भुगतान अवधि समाप्त, कोई जवाब नहीं</h4>
                      <p className="text-slate-600 mt-1">देनदार ने नोटिस के बाद भी भुगतान नहीं किया; वाद कारण (Cause of Action) उत्पन्न हुआ।</p>
                    </div>

                    <div className="relative">
                      <span className="absolute -left-[25px] sm:-left-[33px] top-0 w-4 h-4 rounded-full bg-slate-400 ring-4 ring-slate-100" />
                      <span className="text-xs font-extrabold text-slate-700">22 फरवरी 2026 (दिन 43)</span>
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-0.5">Order 37 CPC समरी सूट व धारा 138 परिवाद दायर</h4>
                      <p className="text-slate-600 mt-1">दीवानी अदालत में समरी सूट और मजिस्ट्रेट कोर्ट में चेक बाउंस का आपराधिक मुकदमा एक साथ फाइल किया गया।</p>
                    </div>

                    <div className="relative">
                      <span className="absolute -left-[25px] sm:-left-[33px] top-0 w-4 h-4 rounded-full bg-slate-400 ring-4 ring-slate-100" />
                      <span className="text-xs font-extrabold text-slate-700">15 अप्रैल 2026 (दिन 95)</span>
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-0.5">समन तामील व धारा 143A अंतरिम मुआवजा आदेश</h4>
                      <p className="text-slate-600 mt-1">मजिस्ट्रेट ने आरोपी को 60 दिनों में ₹1,30,000 (20% राशि) वादी के खाते में जमा करने का आदेश दिया।</p>
                    </div>

                    <div className="relative">
                      <span className="absolute -left-[25px] sm:-left-[33px] top-0 w-4 h-4 rounded-full bg-emerald-600 ring-4 ring-emerald-100" />
                      <span className="text-xs font-extrabold text-emerald-700">12 अगस्त 2026 (दिन 214 — 7 महीने)</span>
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-0.5">लोक अदालत में ₹6,50,000 + ₹65,000 ब्याज का पूर्ण भुगतान</h4>
                      <p className="text-slate-600 mt-1">समरी सूट में संपत्ति कुर्की के डर और 138 के वारंट के दबाव में देनदार ने नेशनल लोक अदालत में एकमुश्त समझौता कर पूरी राशि का डिमांड ड्राफ्ट सौंप दिया।</p>
                    </div>
                  </div>

                  <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-xs sm:text-sm text-emerald-950 font-medium">
                    <strong>निष्कर्ष:</strong> सुनियोजित कानूनी नोटिस और समरी सूट के दबाव से ₹6.5 लाख की फंसी रकम मात्र <strong>7 महीने</strong> में ब्याज सहित खाते में आ गई, जबकि बिना नोटिस सीधे सामान्य मुकदमा लड़ने पर इसमें 3 साल लग सकते थे।
                  </div>
                </div>
              </section>

              {/* Section 11: H2 - विशेष परिस्थितियां व समाधान */}
              <section id="heading-scenario-tabs" aria-labelledby="heading-scenario-tabs-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-scenario-tabs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    विशेष परिस्थितियां व समाधान: अपनी स्थिति के अनुसार चुनें
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    इंटरैक्टिव मार्गदर्शिका
                  </span>
                </div>
                <MoneyRecoveryTimeTabs />
              </section>

              {/* Section 12: H2 - सबूतों और दस्तावेज़ों की चेकलिस्ट */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-evidence-checklist-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    मनी रिकवरी केस को तेज करने के लिए अनिवार्य दस्तावेज़ चेकलिस्ट
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    6 ज़रूरी दस्तावेज़
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  अदालत में केस तभी जल्दी निपटता है जब आपके साक्ष्य पहले दिन से पक्के हों। लीगल नोटिस भेजने और कोर्ट केस फाइल करने से पहले निम्नलिखित 6 दस्तावेज़ तैयार रखें:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center">
                        ✓
                      </span>
                      <strong className="text-xs sm:text-sm text-slate-900">1. बैंक ट्रांसफर रिकॉर्ड (Bank Statement):</strong>
                    </div>
                    <p className="text-xs text-slate-600 pl-7">
                      बैंक की मुहर वाला स्टेटमेंट जिसमें NEFT, RTGS, IMPS या UPI का 12-अंकों का UTR नंबर और ट्रांसफर की तारीख स्पष्ट दिखे।
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center">
                        ✓
                      </span>
                      <strong className="text-xs sm:text-sm text-slate-900">2. मूल चेक और बैंक रिटर्न मेमो (यदि चेक है):</strong>
                    </div>
                    <p className="text-xs text-slate-600 pl-7">
                      मूल बाउंस चेक और बैंक से प्राप्त आधिकारिक 'Cheque Return Memo' जिस पर बाउंस का कारण और तारीख दर्ज हो।
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center">
                        ✓
                      </span>
                      <strong className="text-xs sm:text-sm text-slate-900">3. WhatsApp चैट व ईमेल (इलेक्ट्रॉनिक साक्ष्य):</strong>
                    </div>
                    <p className="text-xs text-slate-600 pl-7">
                      देनदार द्वारा पैसे मांगने, उधारी स्वीकार करने या तारीख मांगने की चैट, भारतीय साक्ष्य अधिनियम 2023 की धारा 63 के सर्टिफिकेट सहित।
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center">
                        ✓
                      </span>
                      <strong className="text-xs sm:text-sm text-slate-900">4. इनवॉइस, डिलीवरी चालान या एग्रीमेंट:</strong>
                    </div>
                    <p className="text-xs text-slate-600 pl-7">
                      व्यापारिक मामलों में हस्ताक्षरित टैक्स इनवॉइस, माल प्राप्ति की पावती (Receiving / E-Way Bill) और खाता मिलान (Ledger Confirmation)।
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center">
                        ✓
                      </span>
                      <strong className="text-xs sm:text-sm text-slate-900">5. पूर्व में भेजे गए नोटिस और डाक रसीद:</strong>
                    </div>
                    <p className="text-xs text-slate-600 pl-7">
                      रजिस्टर्ड स्पीड पोस्ट की मूल रसीद और इंडिया पोस्ट की आधिकारिक डिलीवरी ट्रैकिंग रिपोर्ट जिसमें तामील साबित हो।
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center">
                        ✓
                      </span>
                      <strong className="text-xs sm:text-sm text-slate-900">6. देनदार का पहचान व संपत्ति विवरण:</strong>
                    </div>
                    <p className="text-xs text-slate-600 pl-7">
                      देनदार का आधार/पैन/जीएसटी नंबर, आवासीय व कार्यालय पता, और ज्ञात बैंक खाता विवरण (जिससे कुर्की तुरंत हो सके)।
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 13: CTA Component */}
              <section id="heading-cta-block" aria-label="लीगल नोटिस सीटीए" className="scroll-mt-28">
                <MoneyRecoveryTimeCTA />
              </section>

              {/* Section 14: H2 - FAQs */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    अक्सर पूछे जाने वाले सवाल: मनी रिकवरी केस में कितना समय लगता है (FAQs)
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    कानूनी समाधान प्रश्नोत्तरी
                  </span>
                </div>

                <div className="space-y-3">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-white rounded-xl border border-slate-200 p-4 sm:p-5 [&_summary::-webkit-details-marker]:none transition-all shadow-sm"
                    >
                      <summary className="flex items-center justify-between cursor-pointer text-slate-900 font-bold text-sm sm:text-base gap-3">
                        <span className="leading-snug">{faq.question}</span>
                        <span className="shrink-0 ml-1.5 p-1 rounded-full bg-slate-100 text-slate-600 group-open:rotate-180 transition-transform duration-200">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </summary>
                      <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 15: H2 - Primary Legal Sources */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-sources-title"
                    className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                  >
                    प्राथमिक कानूनी स्रोत और संदर्भ (Primary Legal Sources)
                  </h2>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    सत्यापित विधिक संदर्भ
                  </span>
                </div>

                <ul className="space-y-2 text-xs text-slate-600">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-red-700 hover:underline leading-relaxed"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="p-4 bg-slate-100 rounded-xl text-[11px] text-slate-600 leading-relaxed border border-slate-200">
                  <strong className="text-slate-900 block mb-0.5">विधिक अस्वीकरण (Legal Disclaimer):</strong>
                  इस पृष्ठ पर दी गई जानकारी सामान्य कानूनी जागरूकता और भारतीय न्यायालयों की स्थापित प्रक्रिया पर आधारित है। इसे किसी व्यक्तिगत मामले में विशिष्ट कानूनी राय (Legal Advice) नहीं माना जाना चाहिए। किसी भी कानूनी कार्रवाई से पूर्व योग्य अधिवक्ता से परामर्श अवश्य लें।
                </div>
              </section>

              {/* Related Recovery Guides */}
              <div className="pt-6 border-t border-slate-200">
                <RelatedRecoveryGuides
                  currentPath="/hi/money-recovery-case-kitna-time-lagta-hai"
                  heading="संबंधित मनी रिकवरी व कानूनी गाइड"
                />
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
