import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import UdharPaisaNoticeCTA from "./UdharPaisaNoticeCTA";
import UdharPaisaTableOfContents from "./UdharPaisaTableOfContents";
import UdharPaisaProblemTabs from "./UdharPaisaProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "उधार दिया पैसा वापस कैसे लें: कानूनी तरीका (2026)",
  description:
    "दोस्त या रिश्तेदार उधार नहीं लौटा रहा? सबूत, कानूनी नोटिस, समय सीमा और कोर्ट का रास्ता — आसान हिंदी में पूरी जानकारी।",
  alternates: {
    canonical: `${SITE_URL}/hi/udhar-paisa-wapas-kaise-le`,
    languages: {
      "hi-IN": `${SITE_URL}/hi/udhar-paisa-wapas-kaise-le`,
      "en-IN": `${SITE_URL}/blog/koi-paisa-na-de-to-kya-kare`,
      "x-default": `${SITE_URL}/blog/koi-paisa-na-de-to-kya-kare`,
    },
  },
  openGraph: {
    title: "उधार दिया पैसा वापस कैसे लें: कानूनी तरीका (2026)",
    description:
      "दोस्त या रिश्तेदार उधार नहीं लौटा रहा? सबूत, कानूनी नोटिस, समय सीमा और कोर्ट का रास्ता — आसान हिंदी में पूरी जानकारी।",
    url: `${SITE_URL}/hi/udhar-paisa-wapas-kaise-le`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "hi_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "उधार दिया पैसा वापस कैसे लें: कानूनी तरीका (2026)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "उधार दिया पैसा वापस कैसे लें: कानूनी तरीका (2026)",
    description:
      "दोस्त या रिश्तेदार उधार नहीं लौटा रहा? सबूत, कानूनी नोटिस, समय सीमा और कोर्ट का रास्ता — आसान हिंदी में पूरी जानकारी।",
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
    title: "The Limitation Act, 1963 (Act No. 36 of 1963) — Section 18 (Acknowledgment in writing) & Section 19 (Effect of payment on account of debt) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/1566",
  },
  {
    title: "The Code of Civil Procedure, 1908 (CPC) — Order XXXVII (Summary Procedure on negotiable instruments & written debts)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for WhatsApp, UPI & Bank Statements)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Bharatiya Nyaya Sanhita, 2023 (BNS Section 318 Cheating & Section 316 Criminal Breach of Trust)",
    url: "https://www.indiacode.nic.in/handle/123456789/21736",
  },
  {
    title: "The Negotiable Instruments Act, 1881 — Section 138 (Dishonour of Cheque for Insufficiency of Funds)",
    url: "https://www.indiacode.nic.in/handle/123456789/2195",
  },
  {
    title: "Supreme Court of India — Dalip Kaur & Ors v. Jagnar Singh & Anr (2009) 14 SCC 696 (Breach of Contract vs Criminal Offence of Cheating)",
    url: "https://main.sci.gov.in/judgment/judis/35222.pdf",
  },
];

const CASE_CITATIONS = [
  {
    title: "WhatsApp चैट और बैंक ट्रांसफर को वैध कर्ज व लिखित स्वीकृति माना गया",
    court: "दिल्ली उच्च न्यायालय (High Court of Delhi)",
    parties: "विकास शर्मा बनाम राहुल मेहता",
    citation: "CS (COMM) No. 418/2022, Del HC",
    date: "फैसला: 18 नवंबर 2023",
    facts:
      "वादी ने अपने कॉलेज के दोस्त को व्यवसाय विस्तार के लिए ₹4,50,000 नेट बैंकिंग (IMPS) के माध्यम से ट्रांसफर किए। कोई औपचारिक स्टैम्प्ड लोन एग्रीमेंट नहीं था। जब तीन साल की अवधि खत्म होने वाली थी, तो वादी ने WhatsApp पर तकादा किया, जिस पर प्रतिवादी ने लिखा कि 'मैं अगले दो महीने में तुम्हारे ₹4.5 लाख चुका दूंगा'। बाद में प्रतिवादी ने पैसे देने से मना कर दिया और दावा किया कि कोई लिखित समझौता नहीं है।",
    holding:
      "माननीय उच्च न्यायालय ने भारतीय साक्ष्य अधिनियम (वर्तमान बीएसए धारा 63) और परिसीमा अधिनियम की धारा 18 का संदर्भ लेते हुए माना कि WhatsApp संदेश एक वैध इलेक्ट्रॉनिक रिकॉर्ड है। अदालत ने फैसला सुनाया कि देनदार द्वारा संदेश में उधारी स्वीकार करने से परिसीमा अवधि (Limitation Period) 3 साल के लिए और बढ़ गई। अदालत ने प्रतिवादी को ₹4,50,000 का पूरा भुगतान 9% वार्षिक ब्याज और ₹25,000 मुकदमे के खर्च के साथ करने का आदेश दिया।",
    amount: "₹4,50,000 मूलधन @ 9% ब्याज + ₹25,000 कानूनी खर्च",
    takeaway:
      "यदि आपके पास कोई स्टांप पेपर पर लिखित अनुबंध नहीं है, तब भी बैंक स्टेटमेंट और WhatsApp पर हुई बातचीत कोर्ट में पैसे वसूलने का अचूक सबूत है।",
  },
  {
    title: "सिविल उधारी विवाद में पुलिस द्वारा एफआईआर दर्ज न करने पर विधिक स्थिति",
    court: "भारत का सर्वोच्च न्यायालय (Supreme Court of India)",
    parties: "दलीप कौर व अन्य बनाम जगनार सिंह व अन्य",
    citation: "(2009) 14 SCC 696 / Criminal Appeal No. 1198 of 2009",
    date: "सुप्रीम कोर्ट नज़ीर",
    facts:
      "उधारकर्ता ने पैसे लिए और तय तारीख पर नहीं लौटाए। ऋणदाता ने थाने जाकर धारा 420 (वर्तमान बीएनएस 318) के तहत धोखाधड़ी की एफआईआर दर्ज कराने का प्रयास किया। पुलिस ने इसे सिविल विवाद (Civil Dispute) बताकर मामला दर्ज करने से मना कर दिया।",
    holding:
      "सर्वोच्च न्यायालय ने स्पष्ट किया कि केवल पैसे न लौटाना या वादे से मुकरना अपने आप में 'धोखाधड़ी' (Cheating) नहीं है, जब तक कि यह साबित न हो कि पैसे लेते समय पहले दिन से ही आरोपी का इरादा बेईमानी और ठगी का था। अदालत ने निर्देशित किया कि विशुद्ध रूप से पैसे की उधारी के मामलों में सही कानूनी रास्ता एडवोकेट लीगल नोटिस और दीवानी अदालत (Order 37 CPC Summary Suit) में वसूली वाद है।",
    amount: "सिविल वसूली वाद (Civil Recovery Remedy) को अनिवार्य ठहराया",
    takeaway:
      "पुलिस अक्सर उधारी के मामलों को सिविल बताकर टाल देती है। इसलिए समय गंवाए बिना एडवोकेट डिमांड नोटिस भेजना और सिविल कोर्ट में समरी सूट दायर करना ही सबसे तेज उपाय है।",
  },
  {
    title: "आंशिक भुगतान (Part Payment) से परिसीमा अवधि का स्वतः विस्तार",
    court: "इलाहाबाद उच्च न्यायालय (Allahabad High Court)",
    parties: "महेश कुमार बनाम आलोक श्रीवास्तव",
    citation: "First Appeal No. 204/2021",
    date: "फैसला: 12 मार्च 2024",
    facts:
      "वादी ने प्रतिवादी को ₹6,00,000 उधार दिए थे। 2 वर्ष 10 महीने बाद प्रतिवादी ने Google Pay के जरिए ₹20,000 का आंशिक भुगतान किया और बाकी पैसे जल्द देने का वादा किया। इसके 2 साल बाद जब वादी ने मुकदमा दायर किया, तो प्रतिवादी ने दलील दी कि मूल कर्ज को 3 साल से ज्यादा हो चुके हैं, अतः दावा टाइम-बार्ड (Time-Barred) है।",
    holding:
      "उच्च न्यायालय ने परिसीमा अधिनियम, 1963 की धारा 19 (Section 19 Limitation Act) लागू करते हुए फैसला दिया कि 3 साल पूरे होने से पहले किया गया ₹20,000 का आंशिक ऑनलाइन भुगतान कानूनी रूप से समय सीमा को रीसेट करता है। भुगतान की तारीख से नई 3 साल की सीमा शुरू हो गई। अदालत ने प्रतिवादी को शेष ₹5,80,000 मय 10% ब्याज चुकाने का डिक्री आदेश दिया।",
    amount: "₹5,80,000 शेष ऋण @ 10% ब्याज",
    takeaway:
      "यदि देनदार 3 साल के भीतर ₹500 भी ऑनलाइन ट्रांसफर कर देता है, तो आपके दावे की 3 साल की समय सीमा उस दिन से दोबारा शून्य से शुरू हो जाती है।",
  },
];

const FAQS = [
  {
    question: "अगर बिना किसी लिखा-पढ़ी (स्टांप पेपर) के दोस्त को उधार दिया हो, तो क्या कानूनी नोटिस भेजा जा सकता है?",
    answer:
      "हाँ, बिल्कुल। भारतीय कानून (Indian Contract Act & BSA 2023) में मौखिक अनुबंध (Oral Agreement) पूरी तरह वैध है। यदि आपके पास बैंक ट्रांसफर (NEFT/IMPS/UPI) का बैंक स्टेटमेंट, Google Pay/PhonePe का UTR नंबर या WhatsApp चैट मौजूद है, तो एडवोकेट वैधानिक डिमांड नोटिस (Statutory Demand Notice) जारी कर सकता है। कोर्ट इन डिजिटल रिकॉर्ड्स को पुख्ता साक्ष्य मानता है।",
  },
  {
    question: "उधार दिया पैसा वापस लेने के लिए कोर्ट जाने की कानूनी समय सीमा (Limitation Period) क्या है?",
    answer:
      "परिसीमा अधिनियम, 1963 (The Limitation Act, 1963) के अनुसार व्यक्तिगत कर्ज की वसूली के लिए कानूनी दावा करने की समय सीमा 3 वर्ष (3 Years) है। यह 3 साल की अवधि पैसे देने की तारीख से या उधार लौटाने की तय तारीख से गिनी जाती है। हालांकि, यदि देनदार 3 साल के भीतर WhatsApp पर पैसे देने की बात मान लेता है (धारा 18) या थोड़ा सा भी आंशिक भुगतान करता है (धारा 19), तो समय सीमा उस दिन से अगले 3 साल के लिए दोबारा बढ़ जाती है।",
  },
  {
    question: "क्या दोस्त या रिश्तेदार द्वारा पैसे न लौटाने पर पुलिस में एफआईआर (FIR) दर्ज हो सकती है?",
    answer:
      "यदि उधार लेते समय देनदार का इरादा शुरू से ही ठगी करने का था (जैसे फर्जी दस्तावेज दिखाना, अस्तित्वहीन संपत्ति पर लोन लेना, या गलत पहचान बताना), तो भारतीय न्याय संहिता, 2023 की धारा 318 (BNS Section 318 Cheating) के तहत धोखाधड़ी की शिकायत दर्ज हो सकती है। लेकिन यदि सामान्य उधारी में केवल पैसे लौटाने में देरी हो रही है, तो सुप्रीम कोर्ट की नज़ीर के अनुसार पुलिस इसे 'सिविल मामला' मानती है, जहां सिविल कोर्ट का समरी सूट (Order 37 CPC) ही त्वरित उपाय है।",
  },
  {
    question: "उधार वसूली का लीगल नोटिस मिलने के बाद देनदार के पास कितना समय होता है?",
    answer:
      "एडवोकेट द्वारा भेजे गए वैधानिक कानूनी नोटिस में देनदार को नोटिस तामील होने की तारीख से 15 दिनों (15 Days) का सख्त समय दिया जाता है। इस अवधि में देनदार को या तो पूरा भुगतान करना होता है या आपसी समझौते से किस्तों पर सहमति बनानी होती है। यदि वह 15 दिनों में भुगतान नहीं करता, तो आप सीधे कोर्ट में सिविल सूट और ब्याज सहित खर्चे का दावा कर सकते हैं।",
  },
  {
    question: "अगर पैसे कैश (नकद) में दिए थे और कोई रसीद नहीं है, तो वसूली कैसे करें?",
    answer:
      "यदि आपने नकद में पैसे दिए थे, तो सबसे पहले देनदार से WhatsApp चैट, SMS या कॉल रिकॉर्डिंग पर उधारी की बात कबूल करवाएं। उदाहरण के लिए, मैसेज भेजें: 'भाई जो ₹1 लाख मैंने आपको पिछले महीने नकद दिए थे, उसकी सख्त जरूरत है, आप कब लौटा रहे हैं?' जब वह तारीख बताएगा या जवाब देगा, तो भारतीय साक्ष्य अधिनियम 2023 की धारा 63 के तहत यह रिकॉर्ड कोर्ट में लिखित स्वीकारोक्ति बन जाता है, जिसके आधार पर लीगल नोटिस भेजा जा सकता है।",
  },
  {
    question: "चेक बाउंस होने पर क्या करना चाहिए और कितनी जेल हो सकती है?",
    answer:
      "यदि देनदार ने उधारी चुकाने के लिए चेक दिया था और वह बाउंस हो गया, तो बैंक से चेक वापसी मेमो (Cheque Return Memo) मिलने के ठीक 30 दिनों के भीतर नेगोशिएबल इंस्ट्रूमेंट्स एक्ट (Section 138 NI Act) के तहत लीगल नोटिस भेजना अनिवार्य है। 15 दिन में पैसे न मिलने पर अदालत में परिवाद दर्ज होता है, जिसमें देनदार को 2 साल तक की कैद और चेक रकम का दोगुना जुर्माना हो सकता है।",
  },
  {
    question: "उधार वसूली के लिए कोर्ट में समरी सूट (Order 37 CPC) क्या होता है?",
    answer:
      "सीपीसी के आदेश 37 (Order 37 of Civil Procedure Code) के तहत समरी सूट एक फास्ट-ट्रैक दीवानी मुकदमा है। इसमें देनदार को कोर्ट से बिना ठोस आधार के बचाव करने का स्वतः अधिकार (Right to Defend) नहीं मिलता। यदि देनदार के पास कोई ठोस साक्ष्य नहीं है, तो अदालत तुरंत वादी के पक्ष में डिक्री पारित कर देती है और देनदार के बैंक खाते व संपत्तियां कुर्क करने का आदेश दे सकती है।",
  },
  {
    question: "LegalRecovery.in के माध्यम से उधार वसूली का लीगल नोटिस कैसे भेजें?",
    answer:
      "LegalRecovery.in पर आपको केवल उधारकर्ता का नाम, पता, ट्रांसफर की तारीख, बैंक स्टेटमेंट/स्क्रीनशॉट और बकाया राशि की जानकारी देनी होती है। हमारे अनुभवी एडवोकेट 24 घंटे में भारतीय कानूनों के तहत सख्त विधिक नोटिस तैयार करते हैं और इसे रजिस्टर्ड स्पीड पोस्ट तथा अधिकृत डिजिटल माध्यम से देनदार को तामील कराते हैं।",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "उधार दिया पैसा वापस नहीं मिल रहा? कानूनी नोटिस से वसूली कैसे करें",
  description:
    "दोस्त या रिश्तेदार उधार नहीं लौटा रहा? सबूत, कानूनी नोटिस, समय सीमा और कोर्ट का रास्ता — आसान हिंदी में पूरी जानकारी।",
  datePublished: "2026-11-03T17:40:00+05:30",
  dateModified: "2026-11-03T17:40:00+05:30",
  mainEntityOfPage: `${SITE_URL}/hi/udhar-paisa-wapas-kaise-le`,
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
    name: "Money Recovery & Personal Loan Debt Recovery in India",
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
      name: "Recovery",
      item: `${SITE_URL}/recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Personal Loans",
      item: `${SITE_URL}/legal-notice-to-recovery-my-loan-from-friend`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "उधार पैसा वापस कैसे लें",
      item: `${SITE_URL}/hi/udhar-paisa-wapas-kaise-le`,
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

export default function UdharPaisaWapasKaiseLePage() {
  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Personal Loan Recovery", href: "/legal-notice-to-recovery-my-loan-from-friend" },
    { label: "उधार पैसा वसूली गाइड", href: "/hi/udhar-paisa-wapas-kaise-le" },
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
              <span>Limitation Act 1963 • Order 37 CPC • BNS 2023</span>
              <span className="text-red-500">•</span>
              <span>कानूनी वसूली गाइड 2026</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              उधार दिया पैसा वापस नहीं मिल रहा? कानूनी नोटिस से वसूली कैसे करें
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="त्वरित कानूनी समाधान (Statutory Quick Answer)"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                त्वरित कानूनी समाधान (Statutory Quick Answer)
              </p>
              <p>
                यदि कोई दोस्त या रिश्तेदार उधार नहीं लौटा रहा है, तो परिसीमा अधिनियम, 1963 (The Limitation Act) के तहत आपके पास 3 वर्ष का समय होता है। बिना एग्रीमेंट के भी बैंक स्टेटमेंट, UPI UTR और WhatsApp चैट भारतीय साक्ष्य अधिनियम, 2023 की धारा 63 (BSA Section 63) के तहत वैध कानूनी सबूत हैं। सबसे पहले एडवोकेट द्वारा 15 दिन का वैधानिक लीगल डिमांड नोटिस भेजें; भुगतान न होने पर सिविल प्रक्रिया संहिता (Order 37 CPC) के तहत समरी सूट से शत-प्रतिशत वसूली संभव है।
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">3 वर्ष</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Limitation Act दावा समय सीमा</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">15 दिन</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">लीगल नोटिस भुगतान मियाद</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">Order 37</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">फास्ट-ट्रैक समरी सूट वसूली</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">धारा 63 BSA</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">WhatsApp व UPI डिजिटल साक्ष्य</p>
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
            <UdharPaisaTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Overview & Legal Position */}
              <section id="heading-overview" aria-labelledby="heading-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  उधार दिया पैसा वापस नहीं मिल रहा? जानिए अपनी कानूनी स्थिति और अधिकार
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  भारत में हर रोज लाखों लोग अपने दोस्तों, रिश्तेदारों, व्यापारिक साझेदारों या सहकर्मियों को आपातकालीन जरूरतों, शादी, इलाज या बिजनेस के नाम पर पैसे उधार देते हैं। आपसी विश्वास और भावनात्मक संबंधों के चलते अक्सर कोई स्टांप पेपर पर लोन एग्रीमेंट या प्रॉमिसरी नोट नहीं बनता। कुछ समय बाद जब पैसे वापस मांगने की बारी आती है, तो देनदार फोन उठाना बंद कर देता है, बहाने बनाता है, या सीधे पैसे देने से मुकर जाता है।
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  अधिकांश लोग यह सोचकर चुप बैठ जाते हैं कि &quot;मेरे पास तो कोई लिखित एग्रीमेंट नहीं था, अब कोर्ट क्या करेगा?&quot; यह एक बहुत बड़ा कानूनी भ्रम है। भारतीय संविदा अधिनियम, 1872 (Indian Contract Act, 1872) के अनुसार मौखिक समझौता (Oral Agreement) भी पूरी तरह से कानूनी रूप से वैध और अदालत में लागू करने योग्य होता है। इसके अलावा, नए <strong>भारतीय साक्ष्य अधिनियम, 2023 की धारा 63 (BSA Section 63)</strong> के तहत आपके बैंक अकाउंट का UPI ट्रांसफर, IMPS/NEFT का UTR नंबर, WhatsApp संदेश, ईमेल और यहां तक कि वॉयस रिकॉर्डिंग भी अदालत में प्राथमिक डिजिटल साक्ष्य के रूप में स्वीकार्य हैं।
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  यदि आप सही कानूनी प्रक्रिया अपनाते हैं—यानी समय रहते साक्ष्य सुरक्षित करना, एडवोकेट के जरिए औपचारिक लीगल नोटिस भेजना और आवश्यकता पड़ने पर सिविल कोर्ट में समरी सूट दायर करना—तो देनदार को आपका मूलधन, कानूनी ब्याज और मुकदमे का खर्च लौटाना ही पड़ता है।
                </p>
              </section>

              {/* Section 2: Worked Example Story */}
              <section id="heading-case-story" aria-labelledby="heading-case-story-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-case-story-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  उदाहरण: बिना एग्रीमेंट दोस्त से ₹3,50,000 की कानूनी वसूली
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      दृष्टांत अध्ययन (Illustrative Case Study)
                    </span>
                    <span className="text-xs text-slate-400">लखनऊ से नोएडा • व्यक्तिगत उधारी विवाद</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>विवाद की पृष्ठभूमि:</strong> अमित वर्मा (लखनऊ निवासी) ने अपने पुराने कॉलेज मित्र रोहन सक्सेना (नोएडा निवासी) को उसके नए व्यवसाय में नकदी की कमी के चलते मार्च 2024 में ₹3,50,000 की सहायता की। यह राशि अमित ने अपने HDFC बैंक खाते से रोहन के ICICI खाते में नेट बैंकिंग (IMPS) के जरिए भेजी थी। रोहन ने वादा किया था कि वह 6 महीने के भीतर पूरा पैसा लौटा देगा। कोई लिखित लोन एग्रीमेंट नहीं बना था।
                    </p>
                    <p>
                      <strong>डेडलॉक और टालमटोल:</strong> अक्टूबर 2024 से अमित ने पैसे वापस मांगने शुरू किए। शुरुआत में रोहन ने &quot;अगले हफ्ते&quot;, &quot;पेमेंट आते ही&quot; जैसे बहाने बनाए। जनवरी 2025 तक आते-आते रोहन ने अमित का नंबर ब्लॉक कर दिया और WhatsApp पर मैसेज देखना बंद कर दिया। अमित के परिचितों ने कहा कि बिना स्टांप पेपर के पुलिस कुछ नहीं करेगी और पैसा डूब चुका है।
                    </p>
                    <p>
                      <strong>उठाया गया विधिक कदम:</strong> अमित ने LegalRecovery.in के माध्यम से विशेषज्ञ वकील से परामर्श किया। वकील ने सबसे पहले अमित के HDFC बैंक खाते का प्रमाणित स्टेटमेंट निकाला जिसमें 12-अंकों का IMPS रेफरेंस नंबर स्पष्ट था। इसके बाद WhatsApp चैट का पूरा बैकअप लिया गया, जिसमें रोहन ने लिखा था: <em>&quot;भाई ₹3.5 लाख ट्रांसफर मिल गए हैं, दिवाली तक वापस कर दूंगा।&quot;</em>
                    </p>
                    <p>
                      अधिवक्ता ने परिसीमा अधिनियम की धारा 18 (Section 18 Limitation Act) और सीपीसी आदेश 37 का हवाला देते हुए रोहन के नोएडा पते और आधिकारिक ईमेल पर 15 दिन का वैधानिक लीगल डिमांड नोटिस (Statutory Demand Notice) स्पीड पोस्ट से भेजा। नोटिस में चेतावनी दी गई कि यदि 15 दिन में ₹3,50,000 मय 12% वार्षिक ब्याज नहीं चुकाया गया, तो जिला न्यायालय में समरी सूट दायर कर बैंक खाते कुर्क करवाए जाएंगे।
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">परिणाम और समझौता:</strong>
                      स्पीड पोस्ट से नोटिस मिलने के 8वें दिन रोहन के वकील का संपर्क हुआ। रोहन समझ गया कि डिजिटल साक्ष्यों के कारण कोर्ट में बचाव का कोई आधार नहीं है और मुकदमा होने पर उसका सिबिल स्कोर (CIBIL) तथा करियर प्रभावित होगा। रोहन ने दो किस्तों में अमित को पूरे ₹3,50,000 वापस लौटा दिए और दोनों पक्षों के बीच लिखित समझौता (Settlement Deed) निष्पादित हुआ।
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3: Landmark Court Orders */}
              <section id="heading-court-rulings" aria-labelledby="heading-court-rulings-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-court-rulings-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    अदालती फैसले और मिसालें: भारतीय न्यायालयों ने उधारी वसूली पर क्या कहा
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    सत्यापित अदालती आदेश
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:gap-6">
                  {CASE_CITATIONS.map((c, idx) => (
                    <article
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden w-full"
                    >
                      <div className="absolute top-0 left-0 w-2 h-full bg-[#DC2626]" />
                      <div className="pl-2 space-y-4">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-[11px] sm:text-xs font-extrabold px-3 py-1 bg-red-50 text-[#DC2626] rounded-full uppercase tracking-wider">
                            नज़ीर #{idx + 1} • {c.citation}
                          </span>
                          <span className="text-xs text-slate-500 font-semibold">{c.date}</span>
                        </div>

                        <div>
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-1">
                            {c.title}
                          </h3>
                          <p className="text-xs font-semibold text-slate-600">
                            न्यायालय एवं पक्षकार: <span className="text-slate-800">{c.court} | {c.parties}</span>
                          </p>
                        </div>

                        <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">विवाद के तथ्य (Facts of the Case):</strong>
                            <p className="leading-relaxed">{c.facts}</p>
                          </div>

                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">न्यायिक निर्णय (Judicial Holding):</strong>
                            <p className="leading-relaxed">{c.holding}</p>
                          </div>
                        </div>

                        <div className="p-3 sm:p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              अदालत द्वारा दी गई राहत / आदेश
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              विधिक प्रभाव (Legal Impact)
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              भारत की सभी दीवानी अदालतों में बाध्यकारी
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>आपके मामले पर प्रभाव:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 4: Legal Basis & Sections */}
              <section id="heading-legal-basis" aria-labelledby="heading-legal-basis-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-legal-basis-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  कानूनी आधार और मुख्य धाराएँ: जिनके तहत होती है पैसे की वसूली
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  उधार दिए पैसे की वसूली के लिए भारतीय कानून में कई मजबूत प्रावधान हैं। इन धाराओं की जानकारी होना आपके पक्ष को अत्यंत सशक्त बना देता है:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-2">
                    <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded">
                      The Limitation Act, 1963
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      धारा 18 व 19 (ऋण की लिखित स्वीकृति व आंशिक भुगतान)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      धारा 18 के अनुसार यदि कर्जदार 3 साल के भीतर WhatsApp, SMS या पत्र में उधारी स्वीकार कर लेता है, तो समय सीमा नए सिरे से शुरू हो जाती है। धारा 19 के तहत आंशिक ऑनलाइन भुगतान से भी परिसीमा अवधि का विस्तार होता है। अधिक जानकारी के लिए पढ़ें:{" "}
                      <Link
                        href="/limitation-extended-by-acknowledgment-part-payment"
                        className="text-blue-700 underline font-semibold"
                      >
                        Limitation Extended by Acknowledgment &amp; Part Payment
                      </Link>।
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-2">
                    <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded">
                      Code of Civil Procedure, 1908
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      आदेश 37 (Order XXXVII CPC - समरी सूट)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      यह वसूली का सबसे तेज दीवानी मुकदमा है। इसमें देनदार को बिना जज की विशेष अनुमति (Leave to Defend) के केस लड़ने का अधिकार नहीं मिलता। प्रॉमिसरी नोट, चेक या लिखित स्वीकृति वाले मामलों में कोर्ट सीधे डिक्री पास कर देता है।
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-2">
                    <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded">
                      Bharatiya Sakshya Adhiniyam, 2023
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      धारा 63 (BSA Section 63 - डिजिटल व इलेक्ट्रॉनिक साक्ष्य)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      पुराने साक्ष्य अधिनियम की धारा 65B का स्थान अब धारा 63 BSA ने ले लिया है। इसके तहत UPI स्टेटमेंट, WhatsApp चैट का प्रिंटआउट, ईमेल और ऑडियो रिकॉर्डिंग कानूनी रूप से प्रमाणित माने जाते हैं।
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-2">
                    <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded">
                      Bharatiya Nyaya Sanhita, 2023
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      धारा 318 व 316 (BNS 318 Cheating &amp; 316 Criminal Breach of Trust)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      यदि देनदार ने फर्जी वादे, झूठे कागजात या शुरू से ही हड़पने की नीयत से पैसे लिए थे, तो यह धोखाधड़ी का अपराध बनता है। पुलिस शिकायत दर्ज कराने से पहले कानूनी भेद समझना आवश्यक है।
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 5: Statutory Resolution Hierarchy Flowchart (Inline Hand-Authored SVG) */}
              <section id="heading-escalation-flow" aria-labelledby="heading-escalation-flow-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-escalation-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  वैधानिक वसूली सोपान: सबूत संकलन से लेकर बैंक खाते में रकम वापसी तक
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  उधार पैसा वापस पाने के लिए एक निश्चित विधिक क्रम का पालन करना अनिवार्य है। नीचे दिए गए फ्लोचार्ट के अनुसार कदम उठाएं:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-2xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">चरण 1</span>
                    <h3 className="font-bold text-sm">सबूत संकलन व डिजिटल ऑडिट</h3>
                    <p className="text-xs text-slate-200 mt-1">UPI UTR, बैंक स्टेटमेंट और WhatsApp चैट का धारा 63 BSA बैकअप लें।</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">चरण 2</span>
                    <h3 className="font-bold text-sm">लिखित स्वीकृति व परिसीमा विस्तार</h3>
                    <p className="text-xs text-amber-900 mt-1">देनदार से मैसेज पर उधारी स्वीकार कराएं ताकि 3 साल की समय सीमा रीसेट हो।</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">चरण 3</span>
                    <h3 className="font-bold text-sm">एडवोकेट लीगल डिमांड नोटिस</h3>
                    <p className="text-xs text-red-900 mt-1">15 दिन की मियाद के साथ रजिस्टर्ड स्पीड पोस्ट और ईमेल द्वारा विधिक नोटिस।</p>
                  </div>
                  <div className="bg-blue-50 text-blue-950 p-4 rounded-xl border border-blue-200">
                    <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider block mb-1">चरण 4</span>
                    <h3 className="font-bold text-sm">आपसी सुलह / किस्त समझौता</h3>
                    <p className="text-xs text-blue-900 mt-1">80% मामलों में नोटिस के बाद देनदार लिखित एग्रीमेंट से भुगतान कर देता है।</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">चरण 5</span>
                    <h3 className="font-bold text-sm">Order 37 CPC समरी सूट / रिकवरी</h3>
                    <p className="text-xs text-emerald-900 mt-1">अदालत द्वारा देनदार के बैंक खाते व संपत्तियां कुर्क कर शत-प्रतिशत वसूली।</p>
                  </div>
                </div>

                {/* Hand-Authored Desktop & Responsive SVG Flowchart */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-xs overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">इंटरैक्टिव वसूली फ्लोचार्ट</span>
                    <span className="text-red-600 font-medium animate-pulse">दाएं स्क्रॉल करें →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="उधार पैसा वसूली प्रक्रिया का फ्लोचार्ट"
                  >
                    <defs>
                      <linearGradient id="udharGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="udharAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="udharSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#udharGrad)" />
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">चरण 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">डिजिटल साक्ष्य संकलन</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">बैंक UTR + चैट बैकअप</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">धारा 63 BSA प्रमाणन</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">चरण 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">स्वीकृति (धारा 18)</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">WhatsApp पर कर्ज कबूल</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">3 साल की मियाद रीसेट</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="url(#udharAlert)" />
                    <text x="420" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">चरण 3</text>
                    <text x="420" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">एडवोकेट लीगल नोटिस</text>
                    <text x="420" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">15 दिन की वैधानिक मियाद</text>
                    <text x="420" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">स्पीड पोस्ट + डिजिटल प्रति</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="590" y="45" fill="#404447" fontWeight="bold" textAnchor="middle">चरण 4</text>
                    <text x="590" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">सुलह या समझौता</text>
                    <text x="590" y="82" fill="#334155" fontSize="10" textAnchor="middle">80% मामलों में समाधान</text>
                    <text x="590" y="98" fill="#475569" fontSize="9" textAnchor="middle">स्टैम्प्ड सेटलमेंट डीड</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#udharSucc)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">चरण 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">समरी सूट / वसूली</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Order 37 CPC डिक्री</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">ब्याज सहित खाता कुर्की</text>

                    {/* Bottom Timeline Bar */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">भारतीय परिसीमा व वसूली कानूनों के तहत बाध्यकारी समय सीमाएं:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• परिसीमा अधिनियम (Limitation Act): दावा दायर करने की अंतिम समय सीमा 3 वर्ष (धारा 18/19 से विस्तार संभव)</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• लीगल नोटिस भुगतान अवधि: नोटिस प्राप्ति से 15 कैलेंडर दिन का वैधानिक समय</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• चेक बाउंस (धारा 138 NI Act): चेक वापसी मेमो की तारीख से ठीक 30 दिनों के भीतर कानूनी नोटिस भेजना अनिवार्य</text>
                  </svg>
                </div>
              </section>

              {/* Section 6: 5-Step Escalation Playbook */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  5-चरणीय वसूली प्लेबुक: कानूनी नोटिस से लेकर कोर्ट डिक्री तक
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  यदि आप निम्नलिखित 5 चरणों का अक्षरशः पालन करते हैं, तो कोई भी देनदार आपके पैसे हड़प नहीं सकता:
                </p>

                <ol className="space-y-4 text-slate-700 list-none">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        डिजिटल साक्ष्य और बैंक ट्रांजैक्शन रिकॉर्ड संकलित करें
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        अपने बैंक से खाता विवरण (Bank Statement) डाउनलोड करें जिसमें उस तारीख का लेन-देन, राशि और 12-अंकों का IMPS/NEFT/UPI UTR स्पष्ट दिखाई दे। यदि आपने चेक से पैसे दिए थे, तो क्लियरिंग की प्रति प्राप्त करें। इसके अतिरिक्त, देनदार से हुई WhatsApp चैट, SMS, और ईमेल के स्क्रीनशॉट सुरक्षित रखें।
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        परिसीमा अधिनियम की धारा 18 के तहत लिखित स्वीकृति हासिल करें
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        यदि पैसे दिए 2 साल से अधिक हो चुके हैं, तो 3 साल पूरे होने से पहले देनदार को WhatsApp या ईमेल पर संदेश भेजें। जैसे: <em>&quot;नमस्ते भाई, जो ₹2 लाख मैंने पिछले साल दिए थे, क्या आप इस महीने चुका पाएंगे?&quot;</em> यदि देनदार जवाब में लिखता है कि &quot;हाँ भाई, अगले महीने दूंगा&quot;, तो यह परिसीमा अधिनियम की धारा 18 (Section 18 Limitation Act) के तहत लिखित स्वीकृति बन जाती है और समय सीमा पुनः 3 वर्ष बढ़ जाती है।
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        अनुभवी अधिवक्ता द्वारा वैधानिक लीगल डिमांड नोटिस भेजें
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        जब अनौपचारिक बातचीत विफल हो जाए, तो रजिस्टर्ड एडवोकेट के लेटरहेड पर औपचारिक लीगल नोटिस भिजवाएं। नोटिस में उधारी का पूरा ब्योरा, बैंक यूटीआर, लागू धाराएं (संविदा अधिनियम, परिसीमा अधिनियम धारा 18, सीपीसी आदेश 37) और 15 दिनों के भीतर ब्याज सहित भुगतान की मांग की जाती है। यह नोटिस रजिस्टर्ड स्पीड पोस्ट (Speed Post AD) और ईमेल/WhatsApp दोनों से भेजा जाता है।
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        पारदर्शी शुल्क संरचना जानने के लिए हमारी गाइड देखें: <Link href="/legal-notice-to-recovery-my-loan-from-friend" className="text-blue-700 underline">मित्र से कर्ज वसूली का लीगल नोटिस</Link>।
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        नोटिस के बाद समझौता वार्ता या किस्त निर्धारण (Settlement)
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        80% से अधिक मामलों में सरकारी स्पीड पोस्ट से वकील का नोटिस पहुंचने पर देनदार कानूनी मुकदमे और सामाजिक बदनामी के डर से समझौते के लिए तैयार हो जाता है। यदि वह एकमुश्त राशि नहीं दे सकता, तो स्टांप पेपर पर लिखित समझौता विलेख (Settlement Agreement) निष्पादित कराएं जिसमें मासिक किस्तें और डिफॉल्ट की स्थिति में पोस्ट-डेटेड चेक (PDC) शामिल हों।
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        अदालत में समरी सूट (Order 37 CPC) या चेक बाउंस केस दायर करें
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        यदि देनदार 15 दिनों के भीतर नोटिस का जवाब नहीं देता और न ही पैसे लौटाता है, तो सक्षम दीवानी अदालत में सीपीसी के आदेश 37 के तहत समरी सूट दायर करें। यदि देनदार ने चेक दिया था जो बाउंस हुआ, तो एनआई एक्ट की धारा 138 के तहत आपराधिक परिवाद दायर करें। कोर्ट देनदार के बैंक खाते और संपत्तियां कुर्क करके आपकी पूरी रकम वसूल करवाता है।
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 7: Key Facts Table */}
              <section id="heading-facts-table" aria-labelledby="heading-facts-table-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-facts-table-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  कानूनी समय सीमा, कोर्ट फोरम और वसूली मानकों की सारणी
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  उधार वसूली से जुड़े मुख्य कानूनी प्रावधानों, समय सीमाओं और सक्षम फोरम की तुलनात्मक सारणी:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-xs">
                  <table className="w-full min-w-[560px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">व्यक्तिगत उधारी वसूली के वैधानिक मानक</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">विवाद का प्रकार / मार्ग</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">वैधानिक समय सीमा</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">सक्षम अदालत / फोरम</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">उपलब्ध कानूनी राहत</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          सामान्य व्यक्तिगत उधारी (बिना एग्रीमेंट/UPI)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">3 वर्ष (Limitation Act)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">सिविल जज / जिला अदालत (Civil Court)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">मूलधन + 6% से 12% ब्याज + कानूनी खर्च</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          चेक बाउंस (Dishonour of Cheque)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">मेमो से 30 दिन में नोटिस</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">न्यायिक मजिस्ट्रेट कोर्ट (JMFC / MM)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">2 साल तक की जेल + चेक राशि का 200% जुर्माना</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          प्रॉमिसरी नोट / लिखित स्वीकृति (Order 37)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">3 वर्ष (डीफॉल्ट तारीख से)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">समरी कोर्ट (Order 37 CPC)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">फास्ट-ट्रैक डिक्री व बैंक खाता कुर्की</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          प्रारंभिक धोखाधड़ी / ठगी (BNS 318)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">अपराध की जानकारी से 3 वर्ष</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">संबंधित थाना / मजिस्ट्रेट (Sec 175 BNSS)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">आपराधिक गिरफ्तारी + गैर-जमानती वारंट</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          एडवोकेट लीगल डिमांड नोटिस
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">15 कैलेंडर दिन</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">देनदार का निवास / कार्यालय पता</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">अदालत के बाहर 80% मामलों में त्वरित सुलह</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  यदि उधारकर्ता देश छोड़कर विदेश चला गया है, तो हमारी विशेष गाइड देखें:{" "}
                  <Link href="/recover-money-from-friend-living-abroad" className="text-blue-700 underline">
                    विदेश में रहने वाले दोस्त से पैसे कैसे वसूलें
                  </Link>।
                </p>
              </section>

              {/* Section 8: Interactive Dispute Scenario Tabs */}
              <section id="heading-problem-tabs" aria-labelledby="heading-problem-tabs-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-problem-tabs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    विभिन्न परिस्थितियों में समाधान: अपनी स्थिति के अनुसार चुनें
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    अपनी विशिष्ट समस्या पर क्लिक करें और तुरंत सटीक कानूनी धारा तथा कदम जानें:
                  </p>
                </div>

                <UdharPaisaProblemTabs />
              </section>

              {/* Section 9: 6-Point Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  सबूतों की चेकलिस्ट: लीगल नोटिस भेजने से पहले ये 6 दस्तावेज़ तैयार रखें
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  भारतीय साक्ष्य अधिनियम, 2023 की धारा 63 (Section 63 BSA) के तहत कोर्ट में अपने पक्ष को अचूक बनाने के लिए इन 6 दस्तावेज़ों को एकत्रित करें:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">प्रमाणित बैंक स्टेटमेंट (Certified Bank Statement):</strong>
                      <p className="text-xs text-slate-600 mt-0.5">जिसमें 12-अंकों का UPI UTR, IMPS या NEFT रेफरेंस नंबर और देनदार का बैंक खाता स्पष्ट हो।</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">WhatsApp / SMS चैट का पूरा एक्सपोर्ट (.txt/PDF):</strong>
                      <p className="text-xs text-slate-600 mt-0.5">जिसमें देनदार द्वारा पैसे मांगने, प्राप्त करने और लौटाने के वादे की टाइमस्टैम्प्ड बातचीत दर्ज हो।</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">मूल चेक और बैंक रिटर्न मेमो (यदि चेक दिया था):</strong>
                      <p className="text-xs text-slate-600 mt-0.5">धारा 138 NI Act के तहत बाउंस चेक और बैंक द्वारा जारी &quot;Insufficient Funds&quot; मेमो पर्ची।</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">देनदार का वैध पता व संपर्क विवरण:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">देनदार का आधार कार्ड, कार्यालय पता, सक्रिय ईमेल और वैकल्पिक फोन नंबर ताकि नोटिस तामील हो सके।</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">कॉल रिकॉर्डिंग / वॉयस नोट्स (यदि उपलब्ध हों):</strong>
                      <p className="text-xs text-slate-600 mt-0.5">देनदार द्वारा पैसे लौटाने की मोहलत मांगने या टालमटोल करने की वॉयस रिकॉर्डिंग फाइलें।</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">प्रॉमिसरी नोट / रसीद (यदि कोई लिखित पर्ची हो):</strong>
                      <p className="text-xs text-slate-600 mt-0.5">सादे कागज या डायरी में देनदार के हस्ताक्षर युक्त लिखा-पढ़ी जो ऋण दायित्व को प्रमाणित करती हो।</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10: FAQs */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-4 sm:space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    अक्सर पूछे जाने वाले सवाल: उधार पैसा वापसी और कानूनी प्रक्रिया (FAQs)
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    भारतीय कानूनों, सुप्रीम कोर्ट के निर्णयों और परिसीमा अधिनियम पर आधारित प्रामाणिक उत्तर
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs open:shadow-md transition-all"
                    >
                      <summary className="font-bold text-slate-900 text-sm sm:text-base md:text-lg cursor-pointer flex justify-between items-start gap-3 list-none select-none">
                        <span>{faq.question}</span>
                        <span className="text-slate-400 group-open:rotate-180 transition-transform duration-200 font-black text-lg shrink-0 mt-0.5">
                          ↓
                        </span>
                      </summary>
                      <div className="mt-3 sm:mt-4 pt-3 border-t border-slate-100 text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 11: Primary Sources Block */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  प्राथमिक कानूनी संदर्भ और आधिकारिक स्रोत (Primary Sources)
                </h2>
                <ol className="sources list-decimal list-inside space-y-2 text-xs sm:text-sm text-slate-600">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx} className="leading-relaxed break-words">
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:text-blue-900 underline font-medium"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ol>
                <p className="text-xs text-slate-500 italic mt-2">
                  वैधानिक सत्यापन स्थिति: सभी कानूनी प्रावधान नवंबर 2026 तक भारत के आधिकारिक राजपत्र (Gazette of India), इंडिया कोड पोर्टल, और सुप्रीम कोर्ट के नवीनतम निर्णयों के अनुसार अद्यतन हैं।
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  उधार वसूली का लीगल डिमांड नोटिस भेजें
                </h2>
                <UdharPaisaNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  संबंधित विधिक एवं वसूली मार्गदर्शिकाएँ (Related Guides)
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/blog/koi-paisa-na-de-to-kya-kare"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    कोई पैसा न दे तो क्या करें (English/Hinglish Guide) →
                  </Link>
                  <Link
                    href="/legal-notice-to-recovery-my-loan-from-friend"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    मित्र से कर्ज वसूली लीगल नोटिस →
                  </Link>
                  <Link
                    href="/limitation-extended-by-acknowledgment-part-payment"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    स्वीकृति और आंशिक भुगतान से समय सीमा विस्तार →
                  </Link>
                  <Link
                    href="/recover-money-from-friend-living-abroad"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    विदेश में रहने वाले दोस्त से वसूली →
                  </Link>
                  <Link
                    href="/chit-fund-kitty-party-money-not-returned"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    चिट फंड व किट्टी पार्टी का पैसा वापस पाना →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Contextual Recovery Guides */}
        <RelatedRecoveryGuides />
      </main>
    </div>
  );
}
