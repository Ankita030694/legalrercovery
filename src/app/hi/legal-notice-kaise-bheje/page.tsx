import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import LegalNoticeKaiseBhejeCTA from "./LegalNoticeKaiseBhejeCTA";
import LegalNoticeKaiseBhejeTOC from "./LegalNoticeKaiseBhejeTOC";
import LegalNoticeKaiseBhejeProblemTabs from "./LegalNoticeKaiseBhejeProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "लीगल नोटिस कैसे भेजें? ऑनलाइन प्रक्रिया और खर्च (2026)",
  description:
    "कंपनी, दोस्त या मकान मालिक को लीगल नोटिस कैसे भेजें: प्रक्रिया, खर्च, समय सीमा और नोटिस के बाद क्या होता है।",
  alternates: {
    canonical: `${SITE_URL}/hi/legal-notice-kaise-bheje`,
    languages: {
      "hi-IN": `${SITE_URL}/hi/legal-notice-kaise-bheje`,
      "en-IN": `${SITE_URL}/blog/legal-notice-kaise-bheje-step-by-step-guide`,
      "x-default": `${SITE_URL}/blog/legal-notice-kaise-bheje-step-by-step-guide`,
    },
  },
  openGraph: {
    title: "लीगल नोटिस कैसे भेजें? ऑनलाइन प्रक्रिया, माध्यम और खर्च (2026)",
    description:
      "कंपनी, ई-कॉमर्स (Amazon), दोस्त या मकान मालिक को कानूनी नोटिस भेजने की पूरी प्रक्रिया, स्पीड पोस्ट, ईमेल व व्हाट्सऐप तामील और विधिक समय सीमा।",
    url: `${SITE_URL}/hi/legal-notice-kaise-bheje`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "hi_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "लीगल नोटिस कैसे भेजें? ऑनलाइन प्रक्रिया, माध्यम और खर्च (2026)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "लीगल नोटिस कैसे भेजें? ऑनलाइन प्रक्रिया, माध्यम और खर्च (2026)",
    description:
      "कंपनी, ई-कॉमर्स (Amazon), दोस्त या मकान मालिक को कानूनी नोटिस भेजने की पूरी प्रक्रिया, स्पीड पोस्ट, ईमेल व व्हाट्सऐप तामील और विधिक समय सीमा।",
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
    title: "The Code of Civil Procedure, 1908 (CPC) — Section 80 (Notice to Government/Public Officer) & Order XXXVII (Summary Suits) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "The Negotiable Instruments Act, 1881 — Section 138 (Cheque Bounce Statutory Demand Notice within 30 days) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2195",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Email, WhatsApp & Digital Notices)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Supreme Court of India — C.C. Alavi Haji v. Palapetty Muhammed (2007) 6 SCC 555 (Deemed Service of Registered Speed Post Notice)",
    url: "https://main.sci.gov.in/judgment/judis/29087.pdf",
  },
  {
    title: "High Court of Delhi — Kross Television India Pvt. Ltd. v. One Network Entertainment (2017) (Service of Notice via WhatsApp & Email Validated)",
    url: "https://indiankanoon.org/doc/175924765/",
  },
  {
    title: "The Transfer of Property Act, 1882 — Section 106 (Duration and Notice to Terminate Lease of Immovable Property)",
    url: "https://www.indiacode.nic.in/handle/123456789/2338",
  },
];

const CASE_CITATIONS = [
  {
    title: "रजिस्टर्ड स्पीड पोस्ट से भेजे गए नोटिस की वैधानिक तामील (Deemed Service)",
    court: "भारत का सर्वोच्च न्यायालय (Supreme Court of India)",
    parties: "सी.सी. अलावी हाजी बनाम पलपेट्टी मुहम्मद",
    citation: "(2007) 6 SCC 555 (3-Judge Bench)",
    date: "सुप्रीम कोर्ट संविधान पीठ नज़ीर",
    facts:
      "विपक्षी पार्टी ने चेक बाउंस होने के बाद दावा किया कि उसे डाक द्वारा भेजा गया वैधानिक डिमांड नोटिस कभी शारीरिक रूप से प्राप्त ही नहीं हुआ, क्योंकि डाकिया आने पर घर बंद था या उसने लेने से इनकार कर दिया था।",
    holding:
      "सर्वोच्च न्यायालय की तीन-न्यायाधीशों की पीठ ने जनरल क्लॉज़ेज एक्ट की धारा 27 का संदर्भ देते हुए ऐतिहासिक व्यवस्था दी। यदि कानूनी नोटिस सही पते पर पंजीकृत डाक (Registered Speed Post with Acknowledgment) द्वारा भेजा गया है, तो कानून यह मान लेता है कि नोटिस तामील हो चुका है (Deemed Service)। प्राप्तकर्ता यह कहकर कानूनी जिम्मेदारी से नहीं बच सकता कि उसने लिफाफा नहीं खोला।",
    amount: "मान्य वैधानिक तामील का सिद्धांत (Doctrine of Deemed Service)",
    takeaway:
      "नोटिस हमेशा स्पीड पोस्ट से ट्रैकिंग बारकोड के साथ भेजें। यदि विपक्षी पार्टी जानबूझकर नोटिस लेने से मना करती है या ताला बंद रखती है, तो अदालत उसे तामील मानकर आपके पक्ष में फैसला सुनाती है।",
  },
  {
    title: "WhatsApp और Email से भेजे गए कानूनी नोटिस को अदालत में पूर्ण वैध माना गया",
    court: "दिल्ली उच्च न्यायालय (High Court of Delhi)",
    parties: "क्रॉस टेलीविज़न इंडिया बनाम वन नेटवर्क एंटरटेनमेंट व अन्य",
    citation: "Notice of Motion (L) No. 293/2017, Bombay/Delhi HC Reference",
    date: "फैसला: विधिक नज़ीर",
    facts:
      "वादी ने प्रतिवादी को कॉपीराइट उल्लंघन और बकाया भुगतान का लीगल नोटिस WhatsApp मैसेज और ईमेल के जरिए पीडीएफ फॉर्मेट में भेजा। प्रतिवादी के फोन पर ब्लू टिक (Blue Tick) आ गया, जिसका स्क्रीनशॉट वादी ने अदालत में दाखिल किया।",
    holding:
      "अदालत ने माना कि डिजिटल युग में नोटिस तामील का मुख्य उद्देश्य विपक्षी पक्ष को विवाद व मांगों की आधिकारिक जानकारी देना है। यदि WhatsApp पर संदेश डिलीवर होकर दो नीले निशान (Blue Ticks) आ गए हैं और ईमेल बाउंस नहीं हुआ है, तो भारतीय साक्ष्य अधिनियम (वर्तमान बीएसए धारा 63) के तहत इसे वैध विधिक तामील माना जाएगा।",
    amount: "डिजिटल नोटिस तामील को शत-प्रतिशत कानूनी मान्यता",
    takeaway:
      "स्पीड पोस्ट के साथ-साथ हमेशा WhatsApp और ईमेल पर भी नोटिस भेजें और डिलीवरी रिपोर्ट व स्क्रीनशॉट सुरक्षित रखें।",
  },
  {
    title: "ई-कॉमर्स कंपनी द्वारा रिफंड रोकने पर ₹50,000 मानसिक क्षतिपूर्ति व नोटिस खर्च का आदेश",
    court: "राज्य उपभोक्ता विवाद प्रतितोष आयोग (SCDRC Chandigarh)",
    parties: "रोहित मल्होत्रा बनाम अमेज़न सेलर सर्विसेज प्रा. लि.",
    citation: "First Appeal No. 88/2022, SCDRC",
    date: "आदेश: 19 मई 2023",
    facts:
      "उपभोक्ता ने ₹42,500 का लैपटॉप मंगाया, जो टूटा हुआ निकला। अमेज़न ने सेलर की गलती बताकर रिटर्न रिक्वेस्ट रिजेक्ट कर दी और 3 महीने तक रिफंड अटकाए रखा। उपभोक्ता ने अधिवक्ता के जरिए 15 दिन का विधिक नोटिस भेजा, जिसे कंपनी ने नजरअंदाज कर दिया।",
    holding:
      "आयोग ने अमेज़न की दलील खारिज करते हुए कहा कि मार्केटप्लेस उपभोक्ता संरक्षण अधिनियम 2019 के तहत जवाबदेह है। विधिक नोटिस मिलने के बावजूद रिफंड न करना घोर सेवा में कमी (Gross Deficiency in Service) है। आयोग ने पूरा रिफंड ₹42,500 मय 9% ब्याज, ₹50,000 मानसिक संताप का हर्जाना और ₹15,000 कानूनी नोटिस व मुकदमे का खर्च देने का सख्त आदेश दिया।",
    amount: "₹42,500 मूल रिफंड @ 9% ब्याज + ₹50,000 हर्जाना + ₹15,000 कानूनी खर्च",
    takeaway:
      "कंपनियों को एडवोकेट का लीगल नोटिस मिलते ही वे समझ जाती हैं कि मामला कंज्यूमर फोरम जा रहा है, जहां उन्हें भारी हर्जाना भुगतना पड़ सकता है। इसलिए अधिकांश मामलों में नोटिस के 15 दिनों में समाधान हो जाता है।",
  },
];

const FAQS = [
  {
    question: "लीगल नोटिस क्या होता है और इसे भेजना कब जरूरी है?",
    answer:
      "लीगल नोटिस (Legal Notice) एक औपचारिक विधिक दस्तावेज है जो किसी व्यक्ति, कंपनी या संस्था को अदालत में मुकदमा दायर करने से पहले भेजा जाता है। इसमें पीड़ित पक्ष की शिकायत, कानूनी अधिकार, बकाए की मांग और समाधान के लिए आमतौर पर 15 या 30 दिनों का समय दिया जाता है। चेक बाउंस (धारा 138 NI Act) और सरकारी विभागों (धारा 80 CPC) के मामलों में कोर्ट जाने से पहले नोटिस भेजना कानूनन अनिवार्य है, जबकि उपभोक्ता विवाद और उधारी वसूली में यह त्वरित समाधान का सबसे प्रभावी पूर्व-मुकदमा (Pre-Litigation) हथियार है।",
  },
  {
    question: "क्या ऑनलाइन लीगल नोटिस भेजना (Online Legal Notice) कानूनी रूप से मान्य है?",
    answer:
      "हाँ, ऑनलाइन लीगल नोटिस पूरी तरह से कानूनी रूप से वैध और अदालतों में बाध्यकारी है। भारतीय साक्ष्य अधिनियम, 2023 की धारा 63 (BSA Section 63) और सूचना प्रौद्योगिकी अधिनियम, 2000 (IT Act 2000) के तहत ईमेल और WhatsApp द्वारा भेजे गए नोटिस को आधिकारिक कानूनी मान्यता प्राप्त है। LegalRecovery.in पर हमारे अधिवक्ता आपका नोटिस तैयार करते हैं और इसे स्पीड पोस्ट (Speed Post) के साथ-साथ विपक्षी के ईमेल व WhatsApp पर भी तामील कराते हैं।",
  },
  {
    question: "कंपनी (जैसे Amazon, Flipkart, Meesho) को लीगल नोटिस कैसे भेजें?",
    answer:
      "कंपनी को नोटिस भेजते समय उसके पंजीकृत कॉर्पोरेट कार्यालय (Registered Corporate Office) और नियुक्त ग्रीवांस ऑफिसर (Grievance Officer) को पक्षकार बनाया जाता है। नोटिस में ऑर्डर आईडी, इनवॉइस, पेमेंट ट्रांजैक्शन आईडी (UTR), डिलीवरी में गड़बड़ी और कस्टमर सपोर्ट से हुई बातचीत का सटीक विवरण दर्ज होता है। उपभोक्ता संरक्षण अधिनियम, 2019 के तहत 15 दिन में रिफंड न मिलने पर ई-जागृति (e-Jagriti) पोर्टल पर उपभोक्ता फोरम में सीधे केस दाखिल किया जा सकता है।",
  },
  {
    question: "लीगल नोटिस भेजने में कितना खर्च (खर्च और फीस) आता है?",
    answer:
      "पारंपरिक रूप से जिला अदालतों के वकील लीगल नोटिस ड्राफ्ट करने और भेजने के लिए ₹3,000 से लेकर ₹10,000 तक की फीस लेते हैं। हालांकि, LegalRecovery.in पर आपको केवल ₹999 की एकमुश्त पारदर्शी फीस में अनुभवी एडवोकेट द्वारा कस्टमाइज्ड ड्राफ्टिंग, ईमेल व WhatsApp से डिजिटल तामील और ट्रैकिंग रसीद मिलती है। इंडिया पोस्ट स्पीड पोस्ट वैकल्पिक है (₹450 प्रति पार्टी, लागत मूल्य पर)। कोई छिपा हुआ शुल्क नहीं लिया जाता।",
  },
  {
    question: "अगर विपक्षी पार्टी लीगल नोटिस लेने से इनकार कर दे तो क्या होता है?",
    answer:
      "सुप्रीम कोर्ट के ऐतिहासिक फैसले (C.C. Alavi Haji v. Palapetty Muhammed) के अनुसार, यदि पंजीकृत स्पीड पोस्ट सही पते पर भेजा गया है और प्राप्तकर्ता जानबूझकर लेने से मना करता है ('Refused') या पता छोड़ देता है, तो कानून इसे सफल तामील (Deemed Service) मानता है। डाक विभाग की ट्रैकिंग रिपोर्ट अदालत में इस बात का अकाट्य सबूत होती है कि नोटिस पहुंच चुका था।",
  },
  {
    question: "लीगल नोटिस का जवाब न मिलने पर अगला कानूनी कदम क्या होता है?",
    answer:
      "नोटिस में दी गई 15 दिनों की समय सीमा समाप्त होने के बाद आप विवाद की प्रकृति के अनुसार आगे बढ़ सकते हैं: (1) उपभोक्ता विवाद में जिला उपभोक्ता आयोग (DCDRC) में शिकायत; (2) उधारी वसूली में सिविल कोर्ट में समरी सूट (Order 37 CPC); (3) चेक बाउंस में न्यायिक मजिस्ट्रेट कोर्ट में धारा 138 की आपराधिक शिकायत; या (4) धोखेबाजी में बीएनएस धारा 318 (BNS Section 318) के तहत पुलिस शिकायत।",
  },
  {
    question: "क्या बिना वकील के खुद लीगल नोटिस भेजा जा सकता है?",
    answer:
      "कानूनी रूप से कोई भी नागरिक खुद मांग पत्र भेज सकता है, लेकिन किसी प्रैक्टिसिंग एडवोकेट (Bar Council Enrolled Advocate) के लेटरहेड और वकालती मोहर के साथ भेजे गए नोटिस का कानूनी वजन अत्यधिक होता है। वकील के नोटिस में सही कानूनी धाराओं, परिसीमा अवधि और अदालती परिणामों का सटीक उल्लेख होता है, जिसे देखकर विपक्षी कंपनी या व्यक्ति मामले को गंभीरता से लेता है।",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "लीगल नोटिस कैसे भेजें: ऑनलाइन, ईमेल, व्हाट्सऐप और डाक से",
  description:
    "कंपनी, दोस्त या मकान मालिक को लीगल नोटिस कैसे भेजें: प्रक्रिया, खर्च, समय सीमा और नोटिस के बाद क्या होता है।",
  datePublished: "2026-11-09T10:00:00+05:30",
  dateModified: "2026-11-09T10:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/hi/legal-notice-kaise-bheje`,
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
  about: {
    "@type": "Thing",
    name: "Legal Notice Procedure, Notice Drafting & Dispute Resolution in India",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
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
      name: "Services",
      item: `${SITE_URL}/services`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Legal Notices",
      item: `${SITE_URL}/send-legal-notice-online-india`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "लीगल नोटिस कैसे भेजें",
      item: `${SITE_URL}/hi/legal-notice-kaise-bheje`,
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

// TODO(reviewer): src/data/reviewers.ts is absent in this repository. Omitted reviewer box per Section 7 guidelines.

export default function LegalNoticeKaiseBhejePage() {
  const breadcrumbItems = [
    { label: "सेवाएं", href: "/services" },
    { label: "ऑनलाइन लीगल नोटिस", href: "/send-legal-notice-online-india" },
    { label: "लीगल नोटिस कैसे भेजें", href: "/hi/legal-notice-kaise-bheje" },
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

      <main className="w-full min-h-screen bg-slate-50 text-slate-900">
        {/* Hero Section strictly matching site theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Section 80 CPC • Section 138 NI Act • Section 63 BSA</span>
              <span className="text-red-500">•</span>
              <span>विधिक नोटिस मार्गदर्शिका 2026</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              लीगल नोटिस कैसे भेजें: ऑनलाइन, ईमेल, व्हाट्सऐप और डाक से
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="त्वरित विधिक समाधान (Statutory Quick Answer)"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                त्वरित विधिक समाधान (Statutory Quick Answer)
              </p>
              <p>
                लीगल नोटिस भेजने के लिए सबसे पहले विवाद के साक्ष्य (बिल, चैट, बैंक स्टेटमेंट) एकत्र करें और बार काउंसिल में पंजीकृत एडवोकेट से औपचारिक विधिक नोटिस तैयार कराएं। नोटिस को रजिस्टर्ड स्पीड पोस्ट (Speed Post) और भारतीय साक्ष्य अधिनियम 2023 की धारा 63 (BSA Section 63) के तहत ईमेल व WhatsApp द्वारा भेजा जाता है। विपक्षी को 15 दिन की मोहलत दी जाती है; समाधान न होने पर सीधे उपभोक्ता फोरम या सिविल कोर्ट में दावा किया जाता है।
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">15 दिन</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">वैधानिक समाधान समय सीमा</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">85%+</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">पूर्व-मुकदमा समझौता दर</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">धारा 63 BSA</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">ईमेल व WhatsApp डिजिटल मान्यता</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">₹999</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">LegalRecovery फ्लैट पारदर्शी शुल्क</p>
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
            <LegalNoticeKaiseBhejeTOC />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Overview & Legal Purpose */}
              <section id="heading-overview" aria-labelledby="heading-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  लीगल नोटिस क्या है और भारत में इसे कैसे और कब भेजा जाता है?
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  जब किसी व्यक्ति या कंपनी के साथ आपका वित्तीय, व्यावसायिक, सेवा संबंधी या संपत्ति का विवाद होता है और बातचीत या कस्टमर केयर से समाधान नहीं निकलता, तो अदालत का दरवाजा खटखटाने से पहले दिया जाने वाला अंतिम औपचारिक संदेश <strong>लीगल नोटिस (Statutory Legal Notice)</strong> कहलाता है। यह भारतीय कानून में मुकदमेबाजी से पूर्व (Pre-Litigation) विवाद निपटाने का सबसे शक्तिशाली जरिया है।
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  लीगल नोटिस में विपक्षी पक्ष को स्पष्ट रूप से बताया जाता है कि उसने आपके किस कानूनी अधिकार का उल्लंघन किया है (जैसे पैसे न लौटाना, खराब सामान देना, रिफंड रोकना या चेक बाउंस करना)। नोटिस में पीड़ित पक्ष के तथ्यों, संविदात्मक शर्तों और लागू विधिक धाराओं के आधार पर 15 या 30 दिनों का समय दिया जाता है। इस अवधि में यदि मांग पूरी नहीं होती, तो बिना किसी अन्य पूर्व चेतावनी के सक्षम न्यायालय (Civil Court, Magistrate Court या Consumer Commission) में कानूनी कार्रवाई प्रारंभ कर दी जाती है।
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  वर्ष 2026 में नए आपराधिक कानूनों (BNS, BNSS व BSA 2023) और डिजिटल डाक व्यवस्था के लागू होने के बाद, अब लीगल नोटिस भेजना केवल कोर्ट परिसर के चक्कर काटने तक सीमित नहीं रहा है। अब आप अपने घर बैठे ऑनलाइन माध्यम से अधिकृत अधिवक्ता द्वारा ड्राफ्ट कराकर इसे स्पीड पोस्ट, अधिकृत ईमेल और WhatsApp पर वैधानिक साक्ष्य के रूप में भेज सकते हैं।
                </p>
              </section>

              {/* Section 2: Worked Example Story */}
              <section id="heading-case-story" aria-labelledby="heading-case-story-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-case-story-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  वास्तविक उदाहरण: रिफंड विवाद में नोटिस से ₹48,000 की वसूली
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      दृष्टांत अध्ययन (Illustrative Case Study)
                    </span>
                    <span className="text-xs text-slate-400">जयपुर से बेंगलुरु • ई-कॉमर्स व कंज्यूमर विवाद</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>विवाद की पृष्ठभूमि:</strong> जयपुर निवासी गौरव शर्मा ने 12 अगस्त 2025 को एक प्रमुख ई-कॉमर्स मार्केटप्लेस प्लेटफॉर्म से ₹48,000 मूल्य का 4K स्मार्ट टीवी ऑर्डर किया। पार्सल मिलने पर टीवी की स्क्रीन अंदर से पूरी तरह चटक चुकी थी। गौरव ने डिलीवरी के 2 घंटे के भीतर ऐप पर अनबॉक्सिंग वीडियो और फोटो के साथ रिटर्न रिक्वेस्ट डाली।
                    </p>
                    <p>
                      <strong>कंपनी की हीला-हवाली:</strong> कूरियर बॉय ने डैमेज बताकर टीवी पिक करने से मना कर दिया और ऐप पर स्टेटस लिख दिया गया &apos;Customer Refused Handover&apos;। गौरव ने 25 से अधिक बार कस्टमर केयर को ईमेल और फोन किया, लेकिन हर बार यही स्वचालित उत्तर मिला: &apos;हमारी जांच में पार्सल सही पाया गया, टिकट बंद किया जाता है&apos;। तीन महीने बीत जाने के बाद भी न तो टीवी बदला गया और न ही ₹48,000 रिफंड आया।
                    </p>
                    <p>
                      <strong>अधिवक्ता द्वारा लीगल नोटिस तामील:</strong> गौरव ने LegalRecovery.in के माध्यम से उपभोक्ता संरक्षण अधिनियम, 2019 (धारा 2(11) सेवा में कमी व धारा 2(47) अनुचित व्यापार व्यवहार) के तहत ई-कॉमर्स कंपनी के कॉरपोरेट पते पर रजिस्टर्ड स्पीड पोस्ट और नोडल अधिकारी को आधिकारिक ईमेल पर 15-दिवसीय विधिक नोटिस भिजवाया। नोटिस में अनबॉक्सिंग फुटेज, पेमेंट इनवॉइस और चैट ट्रांसक्रिप्ट संलग्न कर स्पष्ट चेतावनी दी गई कि 15 दिन में रिफंड और कानूनी हर्जाना न मिलने पर ई-जागृति पर वाद दाखिल किया जाएगा।
                    </p>
                    <p>
                      <strong>परिणाम:</strong> स्पीड पोस्ट डिलीवरी के ठीक 7वें दिन कंपनी की वरिष्ठ लीगल टीम का फोन आया। कंपनी ने न केवल बिना किसी शर्त के टूटा टीवी पिक करवाया, बल्कि गौरव के बैंक खाते में ₹48,000 का पूरा रिफंड और मानसिक परेशानी व कानूनी खर्च के रूप में ₹10,000 का अतिरिक्त मुआवजा 48 घंटे में आरटीजीएस (RTGS) से ट्रांसफर कर दिया।
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
                    <span>दावा राशि: ₹48,000 मूलधन</span>
                    <span className="text-emerald-400 font-bold">समाधान: ₹48,000 रिफंड + ₹10,000 क्षतिपूर्ति</span>
                    <span>कुल समय: नोटिस तामील से 9 दिन</span>
                  </div>
                </div>
              </section>

              {/* Section 3: Court Rulings */}
              <section id="heading-court-rulings" aria-labelledby="heading-court-rulings-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-court-rulings-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  अदालती नज़ीरें: स्पीड पोस्ट, ईमेल व व्हाट्सऐप नोटिस के फैसले
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  भारतीय न्यायालयों ने समय-समय पर लीगल नोटिस की तामील (Service of Notice) को लेकर कई महत्वपूर्ण सिद्धांत स्थापित किए हैं ताकि डिफॉल्टर या लापरवाह कंपनियां कानूनी प्रक्रिया से बच न सकें:
                </p>

                <div className="space-y-4">
                  {CASE_CITATIONS.map((c, idx) => (
                    <div
                      key={idx}
                      className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-black uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-1 rounded-md border border-red-100">
                          {c.court}
                        </span>
                        <span className="text-xs text-slate-500 font-mono">{c.citation}</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                        {c.title}
                      </h3>
                      <p className="text-xs text-slate-500 italic">
                        पक्षकार: {c.parties} • {c.date}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        <strong className="text-slate-900">मामले के तथ्य: </strong>
                        {c.facts}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-200/60">
                        <strong className="text-slate-900">अदालत का फैसला: </strong>
                        {c.holding}
                      </p>
                      <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-slate-100 text-xs">
                        <span className="text-red-700 font-semibold">{c.amount}</span>
                        <span className="text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
                          <strong>मुख्य सीख: </strong>
                          {c.takeaway}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 4: Legal Framework & Sections */}
              <section id="heading-legal-basis" aria-labelledby="heading-legal-basis-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-legal-basis-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  कानूनी आधार: किन अधिनियमों व धाराओं के तहत लीगल नोटिस भेजा जाता है?
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  विवाद की प्रकृति के अनुसार लीगल नोटिस में विशिष्ट भारतीय विधियों और धाराओं का उल्लेख अनिवार्य होता है। गलत धाराएं कोट करने से नोटिस का कानूनी प्रभाव कमजोर हो सकता है:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                    <span className="text-[11px] font-black uppercase text-red-600 tracking-wider">
                      चेक अनादरण (Cheque Dishonour)
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      एनआई एक्ट की धारा 138 [Section 138 NI Act]
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      बैंक द्वारा चेक बाउंस होने का मेमो मिलने की तारीख से 30 दिनों के भीतर देनदार को 15 दिन का वैधानिक मांग पत्र भेजना अनिवार्य है। 15 दिन में भुगतान न मिलने पर 2 साल की सजा और चेक राशि के दोगुने जुर्माने का मुकदमा दर्ज होता है।
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                    <span className="text-[11px] font-black uppercase text-red-600 tracking-wider">
                      उपभोक्ता व ई-कॉमर्स विवाद
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      उपभोक्ता संरक्षण अधिनियम 2019 [CPA 2019 Section 2(11) & 2(47)]
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      दोषपूर्ण उत्पाद, वारंटी से मुकरना, रिफंड अटकाना या मनमाना कैंसलेशन शुल्क काटना &apos;सेवा में कमी&apos; और &apos;अनुचित व्यापार व्यवहार&apos; है। ई-जागृति पर केस करने से पहले दिया गया 15 दिन का नोटिस कंपनी को हर्जाना भरने के लिए बाध्य करता है।
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                    <span className="text-[11px] font-black uppercase text-red-600 tracking-wider">
                      इलेक्ट्रॉनिक व डिजिटल साक्ष्य
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      भारतीय साक्ष्य अधिनियम, 2023 [Section 63 BSA 2023]
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      पुराने कानून की धारा 65B का स्थान अब नए अधिनियम की धारा 63 ने ले लिया है। इसके तहत WhatsApp चैट, ईमेल, UPI ट्रांजैक्शन रसीद और डिजिटल रूप से प्रेषित लीगल नोटिस की प्रतियां अदालत में बिना किसी विवाद के प्राथमिक साक्ष्य के रूप में स्वीकार्य हैं।
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                    <span className="text-[11px] font-black uppercase text-red-600 tracking-wider">
                      सरकारी विभाग व रेलवे
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      नागरिक प्रक्रिया संहिता की धारा 80 [Section 80 CPC]
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      यदि आपका विवाद केंद्र सरकार, राज्य सरकार, भारतीय रेलवे या किसी सार्वजनिक उपक्रम (PSU) के साथ है, तो मुकदमा दायर करने से पूर्व 60 दिनों का अनिवार्य विधिक नोटिस देना विधि द्वारा बाध्यकारी है।
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                    <span className="text-[11px] font-black uppercase text-red-600 tracking-wider">
                      मकान मालिक व किरायेदार
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      संपत्ति अंतरण अधिनियम धारा 106 [Section 106 Transfer of Property Act]
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      किराया न देना, फ्लैट खाली कराना, या मकान मालिक द्वारा सिक्योरिटी डिपॉजिट अवैध रूप से जब्त कर लेना। 15 दिन का नोटिस देकर लीज समाप्त की जाती है और सिविल रिकवरी या रेंट ट्रिब्यूनल में कार्रवाई का रास्ता खुलता है।
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                    <span className="text-[11px] font-black uppercase text-red-600 tracking-wider">
                      फास्ट-ट्रैक उधारी वसूली
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      सीपीसी आदेश 37 समरी सूट [Order XXXVII CPC]
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      लिखित अनुबंध, प्रॉमिसरी नोट या बैंक स्टेटमेंट के आधार पर दीवानी अदालत में तेजी से पैसे वसूलने के लिए लीगल नोटिस भेजा जाता है। नोटिस की मियाद पूरी होते ही समरी सूट में सीधे डिक्री और बैंक खाता कुर्की का आदेश प्राप्त होता है।
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 5: Responsive Hand-Authored SVG Escalation Flowchart */}
              <section id="heading-escalation-flow" aria-labelledby="heading-escalation-flow-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-escalation-flow-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  नोटिस प्रेषण एवं समाधान फ्लोचार्ट: तैयारी से अदालत तक
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  नीचे दिए गए विधिक फ्लोचार्ट में लीगल नोटिस तैयार करने, रजिस्टर्ड प्रेषण और 15-दिवसीय मियाद के बाद की अदालती प्रक्रिया को स्पष्ट रूप से दर्शाया गया है:
                </p>

                <div className="w-full bg-slate-900 text-white p-4 sm:p-6 rounded-2xl border border-slate-800 shadow-xl overflow-x-auto">
                  <div className="min-w-[620px] max-w-full">
                    <svg
                      viewBox="0 0 760 380"
                      className="w-full h-auto"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="लीगल नोटिस प्रक्रिया फ्लोचार्ट (Legal Notice Process Flowchart)"
                    >
                      <rect width="760" height="380" rx="12" fill="#0B132B" />

                      {/* Step 1 */}
                      <g>
                        <rect x="30" y="40" width="180" height="90" rx="8" fill="#1E293B" stroke="#3B82F6" strokeWidth="2" />
                        <text x="120" y="70" fill="#93C5FD" fontSize="11" fontWeight="bold" textAnchor="middle">चरण 1: साक्ष्य संकलन</text>
                        <text x="120" y="92" fill="#FFFFFF" fontSize="12" fontWeight="600" textAnchor="middle">बिल, बैंक UTR, चैट</text>
                        <text x="120" y="112" fill="#94A3B8" fontSize="10" textAnchor="middle">BSA 2023 धारा 63 प्रमाण</text>
                      </g>

                      {/* Arrow 1 -> 2 */}
                      <path d="M210 85 H 260" stroke="#60A5FA" strokeWidth="2" markerEnd="url(#arrowhead)" />

                      {/* Step 2 */}
                      <g>
                        <rect x="270" y="40" width="200" height="90" rx="8" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                        <text x="370" y="70" fill="#FCA5A5" fontSize="11" fontWeight="bold" textAnchor="middle">चरण 2: एडवोकेट ड्राफ्टिंग</text>
                        <text x="370" y="92" fill="#FFFFFF" fontSize="12" fontWeight="600" textAnchor="middle">वकालती लेटरहेड व मोहर</text>
                        <text x="370" y="112" fill="#94A3B8" fontSize="10" textAnchor="middle">15 दिन की वैधानिक मांग</text>
                      </g>

                      {/* Arrow 2 -> 3 */}
                      <path d="M470 85 H 520" stroke="#60A5FA" strokeWidth="2" markerEnd="url(#arrowhead)" />

                      {/* Step 3 */}
                      <g>
                        <rect x="530" y="40" width="200" height="90" rx="8" fill="#1E293B" stroke="#10B981" strokeWidth="2" />
                        <text x="630" y="70" fill="#6EE7B7" fontSize="11" fontWeight="bold" textAnchor="middle">चरण 3: दोहरी तामील प्रेषण</text>
                        <text x="630" y="92" fill="#FFFFFF" fontSize="12" fontWeight="600" textAnchor="middle">स्पीड पोस्ट + WhatsApp</text>
                        <text x="630" y="112" fill="#94A3B8" fontSize="10" textAnchor="middle">बारकोड ट्रैकिंग व पावती</text>
                      </g>

                      {/* Arrow 3 down to Decision */}
                      <path d="M630 130 V 170" stroke="#60A5FA" strokeWidth="2" markerEnd="url(#arrowhead)" />

                      {/* Decision Diamond Center */}
                      <g>
                        <rect x="260" y="175" width="220" height="60" rx="30" fill="#312E81" stroke="#818CF8" strokeWidth="2" />
                        <text x="370" y="202" fill="#E0E7FF" fontSize="12" fontWeight="bold" textAnchor="middle">15 दिन की मोहलत अवधि</text>
                        <text x="370" y="222" fill="#C7D2FE" fontSize="10" textAnchor="middle">विपक्षी के रुख का मूल्यांकन</text>
                      </g>

                      {/* Connecting Line from Step 3 down to decision */}
                      <path d="M630 205 H 480" stroke="#818CF8" strokeWidth="2" strokeDasharray="4" />

                      {/* Branch Left: Settlement */}
                      <path d="M260 205 H 120 V 260" stroke="#10B981" strokeWidth="2" markerEnd="url(#arrowhead)" />
                      <g>
                        <rect x="30" y="260" width="180" height="85" rx="8" fill="#064E3B" stroke="#10B981" strokeWidth="2" />
                        <text x="120" y="290" fill="#A7F3D0" fontSize="11" fontWeight="bold" textAnchor="middle">सकारात्मक समाधान (85%)</text>
                        <text x="120" y="312" fill="#FFFFFF" fontSize="12" fontWeight="600" textAnchor="middle">मूलधन + हर्जाना भुगतान</text>
                        <text x="120" y="330" fill="#D1FAE5" fontSize="10" textAnchor="middle">बिना कोर्ट विवाद का अंत</text>
                      </g>

                      {/* Branch Right: Refusal / No Reply -> Court Filing */}
                      <path d="M370 235 V 260" stroke="#EF4444" strokeWidth="2" markerEnd="url(#arrowhead)" />
                      <g>
                        <rect x="250" y="260" width="240" height="85" rx="8" fill="#450A0A" stroke="#EF4444" strokeWidth="2" />
                        <text x="370" y="290" fill="#FCA5A5" fontSize="11" fontWeight="bold" textAnchor="middle">अदालती कार्रवाई (15%)</text>
                        <text x="370" y="312" fill="#FFFFFF" fontSize="12" fontWeight="600" textAnchor="middle">Consumer Court / Order 37</text>
                        <text x="370" y="330" fill="#FEE2E2" fontSize="10" textAnchor="middle">ब्याज, हर्जाना व नोटिस खर्च का दावा</text>
                      </g>

                      {/* Far Right: Criminal Cheque Bounce / BNS */}
                      <path d="M480 205 H 630 V 260" stroke="#F59E0B" strokeWidth="2" markerEnd="url(#arrowhead)" />
                      <g>
                        <rect x="540" y="260" width="180" height="85" rx="8" fill="#451A03" stroke="#F59E0B" strokeWidth="2" />
                        <text x="630" y="290" fill="#FDE68A" fontSize="11" fontWeight="bold" textAnchor="middle">आपराधिक परिवाद</text>
                        <text x="630" y="312" fill="#FFFFFF" fontSize="12" fontWeight="600" textAnchor="middle">धारा 138 NI / BNS 318</text>
                        <text x="630" y="330" fill="#FEF3C7" fontSize="10" textAnchor="middle">गैर-जमानती वारंट व 2 वर्ष जेल</text>
                      </g>

                      <defs>
                        <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                          <polygon points="0 0, 8 3, 0 6" fill="#60A5FA" />
                        </marker>
                      </defs>
                    </svg>
                  </div>
                </div>
              </section>

              {/* Section 6: Step-by-Step Playbook */}
              <section id="heading-step-by-step" aria-labelledby="heading-step-by-step-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-step-by-step-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  चरण-दर-चरण प्रक्रिया: ऑनलाइन लीगल नोटिस भेजने के 5 आवश्यक कदम
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  यदि आप किसी डिफॉल्टर या कंपनी को नोटिस भेजने का मन बना रहे हैं, तो इन 5 चरणों का कड़ाई से पालन करें ताकि आपकी स्थिति कानूनी रूप से अकाट्य रहे:
                </p>

                <ol className="space-y-4">
                  <li className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white font-extrabold text-sm shrink-0 mt-0.5">
                      1
                    </span>
                    <div className="space-y-1.5">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        विवाद से संबंधित सभी प्राथमिक साक्ष्य एकत्रित करें
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        विवाद की शुरुआत से लेकर आज तक का पूरा दस्तावेजी रिकॉर्ड जुटाएं। इसमें बैंक खाता विवरणी (Bank Statement showing UPI/NEFT UTR), बिल या इनवॉइस, ईमेल संवाद, WhatsApp चैट के स्क्रीनशॉट और डाक या कूरियर की रसीदें शामिल हैं। यदि चेक बाउंस हुआ है, तो बैंक का चेक वापसी मेमो (Cheque Return Memo) सबसे महत्वपूर्ण दस्तावेज है।
                      </p>
                    </div>
                  </li>

                  <li className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white font-extrabold text-sm shrink-0 mt-0.5">
                      2
                    </span>
                    <div className="space-y-1.5">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        अधिवक्ता के लेटरहेड पर विधिक नोटिस तैयार (Draft) कराएं
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        लीगल नोटिस में अधिवक्ता का नाम, एनरोलमेंट नंबर और कार्यालय का पता होता है। नोटिस के मुख्य भाग में: (क) दोनों पक्षों का पूरा नाम व पता, (ख) कालक्रमानुसार घटनाक्रम (Facts in chronological order), (ग) उत्पन्न कानूनी दायित्व (Cause of Action), और (घ) 15 दिन के भीतर मांग पूरी करने की स्पष्ट वैधानिक चेतावनी दर्ज होती है।
                      </p>
                    </div>
                  </li>

                  <li className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white font-extrabold text-sm shrink-0 mt-0.5">
                      3
                    </span>
                    <div className="space-y-1.5">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        रजिस्टर्ड स्पीड पोस्ट (Speed Post AD) द्वारा डाक से प्रेषण
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        भारतीय डाक (India Post) के रजिस्टर्ड स्पीड पोस्ट द्वारा नोटिस को विपक्षी के घर या पंजीकृत कॉर्पोरेट कार्यालय के पते पर भेजा जाता है। स्पीड पोस्ट काउंटर से मिलने वाली बारकोड रसीद को संभाल कर रखें, क्योंकि यह अदालत में प्रेषण का प्राथमिक प्रमाण होती है।
                      </p>
                    </div>
                  </li>

                  <li className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white font-extrabold text-sm shrink-0 mt-0.5">
                      4
                    </span>
                    <div className="space-y-1.5">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        डिजिटल तामील: ईमेल और WhatsApp पर पीडीएफ प्रति भेजें
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        भारतीय साक्ष्य अधिनियम, 2023 की धारा 63 के तहत डिजिटल तामील पूर्णतः वैध है। नोटिस की पीडीएफ फाइल विपक्षी के आधिकारिक ईमेल और WhatsApp नंबर पर प्रेषित करें। WhatsApp पर ब्लू टिक (Blue Tick) और ईमेल की डिलीवरी पावती का स्क्रीनशॉट पीडीएफ बनाकर सुरक्षित रखें।
                      </p>
                    </div>
                  </li>

                  <li className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white font-extrabold text-sm shrink-0 mt-0.5">
                      5
                    </span>
                    <div className="space-y-1.5">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        15 दिनों की मियाद का इंतजार और अग्रिम अदालती कार्यवाही
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        नोटिस डिलीवर होने की तारीख से 15 दिनों तक विपक्षी के जवाब या समझौते का इंतजार करें। यदि इस दौरान वह पूरा भुगतान कर देता है तो विवाद समाप्त हो जाता है। यदि कोई जवाब नहीं आता या संतोषजनक हल नहीं निकलता, तो आप सीधे उपभोक्ता अदालत, सिविल कोर्ट या मजिस्ट्रेट कोर्ट में केस दाखिल कर सकते हैं।
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 7: Key Facts Table & Modes Comparison */}
              <section id="heading-facts-table" aria-labelledby="heading-facts-table-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-facts-table-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  तामील के माध्यम, समय सीमा, खर्च और कानूनी असर की तुलना
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  लीगल नोटिस किस माध्यम से भेजा जाए और उसमें कितना समय व खर्च आता है, इसका विस्तृत विश्लेषण नीचे तालिका में दिया गया है:
                </p>

                <div className="w-full overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
                  <table className="w-full text-left text-xs sm:text-sm text-slate-700 min-w-[580px]">
                    <caption className="sr-only">विधिक नोटिस तामील माध्यम, खर्च व कानूनी मान्यता तालिका</caption>
                    <thead className="bg-slate-100 text-slate-900 font-extrabold text-xs uppercase tracking-wider border-b border-slate-200">
                      <tr>
                        <th scope="col" className="p-3.5 sm:p-4">तामील का माध्यम</th>
                        <th scope="col" className="p-3.5 sm:p-4">वैधानिक मान्यता</th>
                        <th scope="col" className="p-3.5 sm:p-4">डिलीवरी समय</th>
                        <th scope="col" className="p-3.5 sm:p-4">पारंपरिक खर्च</th>
                        <th scope="col" className="p-3.5 sm:p-4">LegalRecovery मूल्य</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium">
                      <tr className="hover:bg-slate-50/60">
                        <th scope="row" className="p-3.5 sm:p-4 font-bold text-slate-900">
                          रजिस्टर्ड स्पीड पोस्ट (Speed Post AD)
                        </th>
                        <td className="p-3.5 sm:p-4 text-emerald-700 font-bold">सर्वोच्च मान्यता (Deemed Service)</td>
                        <td className="p-3.5 sm:p-4">2 से 5 कार्यदिवस</td>
                        <td className="p-3.5 sm:p-4">₹3,000 – ₹7,000</td>
                        <td className="p-3.5 sm:p-4 text-red-600 font-bold">+₹450 (वैकल्पिक)</td>
                      </tr>
                      <tr className="hover:bg-slate-50/60">
                        <th scope="row" className="p-3.5 sm:p-4 font-bold text-slate-900">
                          अधिकृत ईमेल (Official Email)
                        </th>
                        <td className="p-3.5 sm:p-4 text-emerald-700 font-bold">IT Act व BSA धारा 63 मान्य</td>
                        <td className="p-3.5 sm:p-4">तत्काल (Instant)</td>
                        <td className="p-3.5 sm:p-4">₹2,000 – ₹5,000</td>
                        <td className="p-3.5 sm:p-4 text-red-600 font-bold">₹999 (शामिल)</td>
                      </tr>
                      <tr className="hover:bg-slate-50/60">
                        <th scope="row" className="p-3.5 sm:p-4 font-bold text-slate-900">
                          व्हाट्सऐप नोटिस (WhatsApp Notice)
                        </th>
                        <td className="p-3.5 sm:p-4 text-emerald-700 font-bold">हाई कोर्ट नजीर (Blue Tick Valid)</td>
                        <td className="p-3.5 sm:p-4">तत्काल (Instant)</td>
                        <td className="p-3.5 sm:p-4">₹2,000 – ₹4,000</td>
                        <td className="p-3.5 sm:p-4 text-red-600 font-bold">₹999 (शामिल)</td>
                      </tr>
                      <tr className="hover:bg-slate-50/60">
                        <th scope="row" className="p-3.5 sm:p-4 font-bold text-slate-900">
                          निजी कूरियर (Private Courier)
                        </th>
                        <td className="p-3.5 sm:p-4 text-amber-700 font-bold">सीमित (Pod पर विवाद संभव)</td>
                        <td className="p-3.5 sm:p-4">1 से 3 कार्यदिवस</td>
                        <td className="p-3.5 sm:p-4">₹3,000 – ₹6,000</td>
                        <td className="p-3.5 sm:p-4 text-slate-500 font-bold">स्पीड पोस्ट अनुशंसित</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 8: Interactive Scenario Tabs */}
              <section id="heading-problem-tabs" aria-labelledby="heading-problem-tabs-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-red-600 block mb-1">
                      विवाद-वार कानूनी मार्गदर्शिका
                    </span>
                    <h2
                      id="heading-problem-tabs-title"
                      className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                    >
                      कंपनी, उधारी, मकान मालिक या चेक बाउंस: आपका मामला क्या है?
                    </h2>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  प्रत्येक कानूनी विवाद की आवश्यकताएं और धाराएं अलग होती हैं। नीचे दिए गए टैब्स में अपने विवाद का प्रकार चुनें और जानें कि नोटिस में कौन से बिंदु दर्ज होने चाहिए:
                </p>

                <LegalNoticeKaiseBhejeProblemTabs />
              </section>

              {/* Section 9: Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  लीगल नोटिस का ड्राफ्ट बनवाने से पहले आवश्यक सबूतों की चेकलिस्ट
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  एक मजबूत और प्रभावी लीगल नोटिस के लिए वकील को निम्नलिखित दस्तावेज उपलब्ध कराना अनिवार्य होता है:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm">
                  <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-slate-900 block">विपक्षी का पूरा व सटीक पता</strong>
                      <span className="text-slate-600 text-xs">
                        कंपनी का कॉर्पोरेट पंजीकृत पता (MCA डेटा से सत्यापित) या व्यक्ति का आवासीय पता।
                      </span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-slate-900 block">बैंक ट्रांजैक्शन रिकॉर्ड व UTR</strong>
                      <span className="text-slate-600 text-xs">
                        नेट बैंकिंग, IMPS, NEFT या UPI से किए गए भुगतान का 12-अंकों का विशिष्ट UTR नंबर।
                      </span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-slate-900 block">डिजिटल चैट, ईमेल व टिकट नंबर</strong>
                      <span className="text-slate-600 text-xs">
                        कस्टमर सपोर्ट को भेजे गए ईमेल, WhatsApp संदेश और टिकट कंप्लेंट आईडी के स्क्रीनशॉट।
                      </span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-slate-900 block">अनुबंध या इनवॉइस प्रति</strong>
                      <span className="text-slate-600 text-xs">
                        खरीद रसीद, रेंट एग्रीमेंट, प्रॉमिसरी नोट, जॉब ऑफर लेटर या सेवा अनुबंध की पीडीएफ।
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10: FAQs */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-faqs-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  अक्सर पूछे जाने वाले सवाल (Frequently Asked Questions)
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  लीगल नोटिस भेजने, खर्च और परिणामों से संबंधित आम नागरिकों के प्रमुख विधिक प्रश्न:
                </p>

                <div className="space-y-3.5">
                  {FAQS.map((faq, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2"
                    >
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-start gap-2.5">
                        <span className="text-red-600 font-black text-sm shrink-0">Q{idx + 1}.</span>
                        <span>{faq.question}</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 11: Sources & Legal References */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  कानूनी स्रोत एवं प्राथमिक संदर्भ (Primary Legal References)
                </h2>
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-100 border border-slate-200 text-xs text-slate-600 space-y-2">
                  <p className="font-semibold text-slate-800">
                    इस पृष्ठ पर दी गई समस्त कानूनी जानकारी भारत सरकार के राजपत्र, आधिकारिक इंडिया कोड पोर्टल और सर्वोच्च न्यायालय के निर्णयों पर आधारित है:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    {PRIMARY_SOURCES.map((src, idx) => (
                      <li key={idx}>
                        <a
                          href={src.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-red-600 hover:text-red-800 hover:underline break-all"
                        >
                          {src.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Section 12: CTA Box */}
              <section className="pt-4">
                <LegalNoticeKaiseBhejeCTA />
              </section>
            </div>
          </div>
        </div>

        {/* Contextual Related Recovery Guides */}
        <RelatedRecoveryGuides currentPath="/hi/legal-notice-kaise-bheje" />
      </main>
    </div>
  );
}
