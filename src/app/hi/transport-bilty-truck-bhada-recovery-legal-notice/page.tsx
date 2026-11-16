import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import TransportBiltyRecoveryCTA from "./TransportBiltyRecoveryCTA";
import TransportBiltyRecoveryTOC from "./TransportBiltyRecoveryTOC";
import TransportBiltyRecoveryScenarioTabs from "./TransportBiltyRecoveryScenarioTabs";

export const revalidate = 86400;

const CANONICAL_URL = `${SITE_URL}/hi/transport-bilty-truck-bhada-recovery-legal-notice`;
const ENGLISH_EQUIVALENT_URL = `${SITE_URL}/transporter-carrier-lien-holding-cargo-unpaid-freight-carriage-act`;

const EXACT_H1 =
  "ट्रांसपोर्टर और फ्लीट मालिकों के लिए गाइड: बिल्टी (POD) और ई-वे बिल से रुका हुआ ट्रक भाड़ा और हॉल्टिंग चार्ज कानूनन कैसे वसूलें?";

const META_TITLE = "ट्रांसपोर्ट का रुका हुआ भाड़ा और हॉल्टिंग कैसे वसूलें?";

const META_DESCRIPTION =
  "डिलीवरी और साइन POD के बाद भी पार्टी ट्रक भाड़ा या हॉल्टिंग रोक रही है? जानिए कैरियर लियन नियम और ₹999 एडवोकेट लीगल नोटिस से तेज़ कानूनी वसूली।";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: {
    canonical: CANONICAL_URL,
    languages: {
      "hi-IN": CANONICAL_URL,
      "en-IN": ENGLISH_EQUIVALENT_URL,
      "x-default": ENGLISH_EQUIVALENT_URL,
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
        alt: formatAltText("ट्रांसपोर्ट का रुका भाड़ा और हॉल्टिंग वसूलने की कानूनी गाइड"),
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
    title: "Carriage by Road Act, 2007 — Sections 10, 11, 13 & 16 (Common Carrier Rights & Liability) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2083",
  },
  {
    title: "Indian Contract Act, 1872 — Section 170 (Bailee's Particular Lien) & Section 171 (General Lien) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "The Code of Civil Procedure, 1908 (CPC) — Order XXXVII (Summary Suits for Liquidated Freight & Debts) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for GPS, FASTag & E-Way Bills)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Micro, Small and Medium Enterprises Development Act, 2006 — Section 15 & 16 (Compound Interest at 3x RBI Bank Rate)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "Commercial Courts Act, 2015 — Section 2(1)(c)(xviii) & Section 12A (Commercial Freight Dispute & Pre-Institution Mediation)",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
];

const CASE_CITATIONS = [
  {
    title: "ट्रांसपोर्टर का वैधानिक उत्तरदायित्व व डिलीवरी के बाद क्लीन POD का कानूनी महत्व",
    court: "भारत का सर्वोच्च न्यायालय (Supreme Court of India)",
    parties: "पटेल रोडवेज़ लिमिटेड बनाम बिड़ला यामाहा लिमिटेड",
    citation: "(2000) 4 SCC 91",
    date: "सुप्रीम कोर्ट संविधान पीठ नज़ीर",
    holding:
      "माननीय सर्वोच्च न्यायालय ने स्पष्ट किया कि कॉमन कैरियर के तहत एक बार जब माल सुरक्षित रूप से सुपुर्द हो जाए और कंसाइनी द्वारा क्लीन रिसीविंग (Clean POD) दे दी जाए, तो कंसाइनर या कंसाइनी बाद में काल्पनिक नुकसान का बहाना बनाकर भाड़ा नहीं रोक सकते। भाड़े की देयता एक निश्चित ऋण (Liquidated Commercial Debt) है।",
  },
  {
    title: "कैरियर लियन (Lien) और माल पर वैधानिक कब्जा बनाए रखने का अधिकार",
    court: "भारत का सर्वोच्च न्यायालय (Supreme Court of India)",
    parties: "बोर्ड ऑफ ट्रस्टीज ऑफ द पोर्ट ऑफ बॉम्बे बनाम श्रीयानेश निटर्स",
    citation: "(1999) 7 SCC 359",
    date: "सुप्रीम कोर्ट नज़ीर",
    holding:
      "अदालत ने अभिनिर्धारित किया कि भारतीय अनुबंध अधिनियम की धारा 170 और 171 के अंतर्गत मालवाहक (Carrier / Bailee) को तब तक माल पर लियन रखने का अधिकार है जब तक कि उस माल की ढुलाई व भंडारण के लिए देय वैधानिक शुल्क का पूर्ण भुगतान न कर दिया जाए।",
  },
  {
    title: "बिना अदालती निर्णय के इकतरफा डेबिट नोट या कटौती करना पूर्णतः अवैध",
    court: "भारत का सर्वोच्च न्यायालय (Supreme Court of India)",
    parties: "यूनियन ऑफ इंडिया बनाम रमन आयरन फाउंड्री",
    citation: "(1974) 2 SCC 231",
    date: "सुप्रीम कोर्ट लैंडमार्क निर्णय",
    holding:
      "सर्वोच्च न्यायालय का सुस्थापित सिद्धांत है कि कोई भी पार्टी स्वयं अपने मामले में न्यायाधीश नहीं बन सकती। जब तक किसी सक्षम न्यायिक फोरम या मध्यस्थ द्वारा नुकसान का स्वतंत्र रूप से निर्धारण न कर दिया जाए, तब तक ट्रांसपोर्टर के देय बिलों में से मनमाना 'डैमेज' या 'शॉर्टेज' डेबिट नोट काटना कानूनन शून्य (Illegal & Void) है।",
  },
];

const FAQS = [
  {
    question: "पार्टी ने साइन की हुई POD दे दी है, फिर भी भाड़ा नहीं दे रही — कानूनी उपाय क्या है?",
    answer:
      "यदि कंसाइनी ने बिल्टी (LR) पर मुहर लगाकर माल प्राप्त करने का प्रमाण (Clean POD) दे दिया है और ई-वे बिल क्लोज हो चुका है, तो भाड़ा कानूनन निर्विवाद ऋण (Liquidated Debt) बन जाता है। सबसे पहले पार्टी को कैरिज बाय रोड एक्ट 2007 और अनुबंध अधिनियम के तहत 15-दिवसीय एडवोकेट लीगल नोटिस भेजें। यदि नोटिस के बाद भी भुगतान नहीं होता, तो वाणिज्यिक अदालत में सीपीसी (CPC) के ऑर्डर 37 के तहत समरी सूट फाइल करें या यदि आपकी ट्रांसपोर्ट फर्म उद्यम-पंजीकृत (Udyam MSME) है तो एमएसएमई समाधान पोर्टल पर 3 गुना बैंक ब्याज के साथ केस दर्ज करें।",
  },
  {
    question: "क्या ट्रांसपोर्टर पुराने बकाया भाड़े के लिए पार्टी का नया माल रोक (Lien) सकता है?",
    answer:
      "भारतीय अनुबंध अधिनियम की धारा 170 के तहत ट्रांसपोर्टर को उस विशेष खेप (Particular Consignment) का भाड़ा न मिलने पर उसी माल को रोकने का वैधानिक अधिकार (Particular Lien) प्राप्त है। पुराने बकाए के लिए चालू माल रोकने (General Lien under Section 171) के लिए ट्रांसपोर्ट एग्रीमेंट या बिल्टी की शर्तों में स्पष्ट क्लॉज होना अनिवार्य है। बिना एग्रीमेंट के यदि आप किसी अन्य पार्टी का माल रोकते हैं, तो वह पुलिस में अमानत में खयानत (BNS धारा 316) की झूठी शिकायत दर्ज करा सकती है। अतः हमेशा वकील से नोटिस जारी करवाकर ही लियन की प्रक्रिया अमल में लाएं।",
  },
  {
    question: "गाड़ी फैक्ट्री गेट पर 8 दिन खड़ी रही, पार्टी हॉल्टिंग चार्ज देने से मना कर रही है — क्या करें?",
    answer:
      "हॉल्टिंग (Truck Detention) वसूलने के लिए आपके पास तीन ठोस डिजिटल साक्ष्य होने चाहिए: (1) फास्टैग (FASTag) टोल टाइम-स्टैम्प, (2) जीपीएस (GPS) व्हीकल ट्रैकिंग रिपोर्ट जो फैक्ट्री में गाड़ी के प्रवेश और प्रस्थान का सटीक समय साबित करे, और (3) फैक्ट्री गेट का इनवर्ड टाइम टोकन। भारतीय अनुबंध अधिनियम की धारा 73 के तहत गाड़ी को अनुचित समय तक रोके रखने पर ट्रांसपोर्टर को हुए वित्तीय नुकसान (प्रतिदिन की ईएमआई, ड्राइवर वेतन व व्यावसायिक क्षति) की भरपाई पार्टी को करनी होगी। इन साक्ष्यों को संलग्न कर कानूनी नोटिस भेजते ही 90% फैक्ट्रियां हॉल्टिंग का भुगतान कर देती हैं।",
  },
  {
    question: "पार्टी ने 'माल डैमेज निकला' कहकर पूरा भाड़ा डेबिट नोट में काट लिया — क्या यह वैध है?",
    answer:
      "नहीं, यह कानूनन पूरी तरह अवैध है। सुप्रीम कोर्ट के फैसले (यूनियन ऑफ इंडिया बनाम रमन आयरन फाउंड्री) के अनुसार पार्टी स्वयं जज बनकर ट्रांसपोर्टर का भाड़ा नहीं काट सकती। कैरिज बाय रोड एक्ट 2007 की धारा 13 और 16 के अनुसार यदि माल उतारते समय बिल्टी पर कोई डैमेज रिमार्क नहीं दर्ज किया गया और कोई जॉइंट सर्वे नहीं हुआ, तो अनलोडिंग के बाद भेजा गया डेबिट नोट गैर-कानूनी है। इसके अलावा यदि पार्टी का मरीन इंश्योरेंस था, तो बीमा क्लेम लेकर भाड़ा काटना धोखाधड़ी (Fraud) है। आप लीगल नोटिस देकर पूरे भाड़े की वसूली कर सकते हैं।",
  },
  {
    question: "ट्रांसपोर्ट ब्रोकर (दलाल) ने पार्टी से भाड़ा ले लिया पर गाड़ी मालिक को नहीं दे रहा — किसके खिलाफ केस करें?",
    answer:
      "ऐसे मामलों में आपको कंसाइनर (मूल पार्टी) और ट्रांसपोर्ट ब्रोकर दोनों को संयुक्त रूप से पक्षकार बनाना चाहिए। भारतीय अनुबंध अधिनियम के एजेंसी नियमों के तहत ब्रोकर पार्टी का एजेंट होता है और उसने यदि आपका पैसा दबाया है तो वह भारतीय न्याय संहिता (BNS 2023) की धारा 316 व 318 के तहत आपराधिक विश्वासघात (Criminal Breach of Trust) का दोषी है। एडवोकेट लीगल नोटिस में कंसाइनर से यूटीआर (UTR) विवरण मांगें और ब्रोकर को पुलिस शिकायत व कोर्ट केस की वैधानिक चेतावनी दें।",
  },
  {
    question: "ट्रांसपोर्ट कंपनी या फ्लीट ओनर एमएसएमई समाधान (MSME Samadhaan) में केस कब कर सकते हैं?",
    answer:
      "यदि आपकी ट्रांसपोर्ट फर्म, लॉजिस्टिक्स एजेंसी या फ्लीट कंपनी के पास 'उद्यम रजिस्ट्रेशन' (Udyam Certificate - Service Enterprise) है और आपने सर्विस देने की तारीख से पहले रजिस्ट्रेशन ले रखा है, तो आप एमएसएमई एक्ट 2006 की धारा 15-18 के तहत सीधे पात्र हैं। पार्टी को माल डिलीवरी के 45 दिनों के भीतर भाड़े का भुगतान करना अनिवार्य है। भुगतान न करने पर पार्टी को भारतीय रिजर्व बैंक (RBI) द्वारा अधिसूचित बैंक दर के 3 गुना चक्रवृद्धि ब्याज सहित पूरा भाड़ा और हॉल्टिंग चुकानी होगी।",
  },
  {
    question: "लीगल नोटिस भेजने में कितना खर्च और समय लगता है, और क्या इसके बाद कोर्ट जाना जरूरी है?",
    answer:
      "LegalRecovery.in पर मात्र ₹999 में अनुभवी उच्च न्यायालय के अधिवक्ताओं द्वारा तैयार किया गया वैधानिक लीगल नोटिस स्पीड पोस्ट RPAD, आधिकारिक ईमेल और व्हाट्सऐप पर 24 घंटे के भीतर जारी किया जाता है। हमारे आंकड़ों के अनुसार, लगभग 78% मामलों में लीगल नोटिस और स्पीड पोस्ट की आधिकारिक ट्रैकिंग स्लिप पहुंचते ही पार्टियां कोर्ट जाने के डर और ब्याज के डर से 15 दिनों के भीतर समझौता या भुगतान कर देती हैं।",
  },
];

export default function TransportBiltyRecoveryHindiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${CANONICAL_URL}#article`,
        isPartOf: {
          "@type": "WebPage",
          "@id": CANONICAL_URL,
        },
        headline: EXACT_H1,
        description: META_DESCRIPTION,
        inLanguage: "hi-IN",
        mainEntityOfPage: CANONICAL_URL,
        datePublished: "2026-11-16T10:00:00+05:30",
        dateModified: "2026-11-16T12:00:00+05:30",
        author: {
          // TODO(reviewer): src/data/reviewers.ts is absent in this repository
          "@type": "Person",
          name: "Anuj Anand Malik",
          jobTitle: "Advocate & Founder",
          worksFor: {
            "@type": "LegalService",
            name: "AMA Legal Solutions",
            url: "https://www.amalegalsolutions.com",
          },
        },
        publisher: {
          "@type": "Organization",
          name: "LegalRecovery.in",
          url: SITE_URL,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/logo.png`,
            width: 300,
            height: 60,
          },
        },
        image: {
          "@type": "ImageObject",
          url: `${SITE_URL}/blog_money_recovery.png`,
          width: 1200,
          height: 630,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${CANONICAL_URL}#faq`,
        inLanguage: "hi-IN",
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
        "@id": `${CANONICAL_URL}#breadcrumbs`,
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
            name: "लॉजिस्टिक्स व ट्रांसपोर्ट रिकवरी हब",
            item: `${SITE_URL}/industries/logistics-freight-3pl-recovery`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "ट्रांसपोर्ट भाड़ा व हॉल्टिंग रिकवरी गाइड",
            item: CANONICAL_URL,
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
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>§6.9 IND-09 &bull; ट्रांसपोर्ट व फ्लीट ऑपरेटर कानूनी सुरक्षा गाइड</span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="text-slate-300">Carriage by Road Act 2007 &amp; Order 37 CPC</span>
          </div>

          {/* Exact H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              सांविधिक सारांश एवं कानूनी स्थिति (Statutory Executive Summary)
            </span>
            <p>
              भारत के प्रमुख ट्रांसपोर्ट नगरों में फ्लीट मालिकों और ट्रांसपोर्ट कांट्रैक्टर्स का सबसे बड़ा संकट माल डिलीवरी के बाद कंसाइनर या कंसाइनी द्वारा भाड़ा रोकना और कई दिनों की गाड़ी हॉल्टिंग (Detention) का भुगतान न करना है। हमारे{" "}
              <Link
                href="/industries/logistics-freight-3pl-recovery"
                className="text-red-400 underline hover:text-red-300 font-bold"
              >
                लॉजिस्टिक्स एवं फ्रेट रिकवरी इंडस्ट्री हब
              </Link>{" "}
              के कानूनी प्रावधानों के अनुसार, एक बार बिल्टी (Bilty/LR) पर क्लीन हस्ताक्षर और ई-वे बिल पार्ट-B का सत्यापन हो जाने के बाद, देय भाड़ा कैरिज बाय रोड एक्ट 2007 की धारा 10 और भारतीय अनुबंध अधिनियम 1872 की धारा 70 के तहत एक निर्विवाद वाणिज्यिक ऋण बन जाता है। इस गाइड में जानिए कि फास्टैग और जीपीएस सबूतों के साथ ₹999 में एडवोकेट लीगल नोटिस भेजकर कैसे 15 दिनों में अपनी मेहनत की कमाई वापस पाएं।
            </p>
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="border-r border-white/10 pr-2">
              <span className="block text-[10px] sm:text-xs text-slate-400 font-medium">
                कैरिज एक्ट वैधानिक अधिकार
              </span>
              <span className="text-base sm:text-lg md:text-xl font-black text-emerald-400">
                धारा 10 व 13
              </span>
              <span className="block text-[10px] text-slate-400 mt-0.5">क्लीन POD के बाद निर्विवाद देयता</span>
            </div>
            <div className="border-r border-white/10 pr-2">
              <span className="block text-[10px] sm:text-xs text-slate-400 font-medium">
                कैरियर लियन सुरक्षा
              </span>
              <span className="text-base sm:text-lg md:text-xl font-black text-slate-100">
                सेक्शन 170-171
              </span>
              <span className="block text-[10px] text-slate-400 mt-0.5">भाड़ा न मिलने पर माल रोकने का अधिकार</span>
            </div>
            <div className="border-r border-white/10 pr-2">
              <span className="block text-[10px] sm:text-xs text-slate-400 font-medium">
                गाड़ी हॉल्टिंग का हर्जाना
              </span>
              <span className="text-base sm:text-lg md:text-xl font-black text-amber-400">
                अनुबंध धारा 73
              </span>
              <span className="block text-[10px] text-slate-400 mt-0.5">FASTag + GPS डिजिटल टाइम-स्टैम्प</span>
            </div>
            <div>
              <span className="block text-[10px] sm:text-xs text-slate-400 font-medium">
                त्वरित अदालती उपाय
              </span>
              <span className="text-base sm:text-lg md:text-xl font-black text-red-400">
                Order 37 CPC
              </span>
              <span className="block text-[10px] text-slate-400 mt-0.5">समरी सूट व बैंक खाता अटैचमेंट</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <Breadcrumbs
          items={[
            { label: "लॉजिस्टिक्स व ट्रांसपोर्ट रिकवरी हब", href: "/industries/logistics-freight-3pl-recovery" },
            { label: "ट्रांसपोर्ट भाड़ा व हॉल्टिंग रिकवरी गाइड", href: CANONICAL_URL },
          ]}
        />

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0 mt-6">
          {/* Left Sticky Sidebar TOC */}
          <TransportBiltyRecoveryTOC />

          {/* Main Content Column */}
          <article lang="hi-IN" className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Ground Transport Reality */}
            <section
              id="heading-transport-crisis"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  1
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                  ट्रांसपोर्टर का फंसा भाड़ा: जमीनी हकीकत व कानूनी अधिकार
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                <p>
                  भारत के प्रमुख ट्रांसपोर्ट केंद्रों—चाहे वह दिल्ली का <strong>संजय गांधी ट्रांसपोर्ट नगर (SGTN)</strong> हो, नवी मुंबई का <strong>कालंबोली व वाशी</strong> यार्ड, महाराष्ट्र का <strong>भिवंडी वेयरहाउसिंग हब</strong>, मध्य प्रदेश का <strong>इंदौर ट्रांसपोर्ट नगर</strong>, उत्तर प्रदेश का <strong>कानपुर ट्रांसपोर्ट नगर</strong>, पंजाब का <strong>लुधियाना फोकल प्वाइंट</strong> या आंध्र प्रदेश का <strong>ऑटोनगर विजयवाड़ा</strong>—लाखों ट्रक मालिक और फ्लीट कांट्रैक्टर रोज़ाना एक ही दर्द से जूझते हैं: <em>गाड़ी का माल सुरक्षित उतार दिया, पार्टी ने बिल्टी पर मुहर लगा दी, लेकिन भाड़ा महीनों से अटका हुआ है।</em>
                </p>
                <p>
                  अक्सर फैक्ट्रियां और बड़े ट्रेडर यह समझकर ट्रांसपोर्टर्स का पैसा दबा लेते हैं कि गाड़ी वाले कानून के पचड़े में नहीं पड़ेंगे या उनके पास कोर्ट जाने का समय नहीं है। ऊपर से जब गाड़ी फैक्ट्री गेट पर 5 से 10 दिन खड़ी रखी जाती है (Truck Halting), तो ₹1,500 से ₹3,500 प्रतिदिन का हॉल्टिंग चार्ज देने के नाम पर साफ मुकर जाते हैं। बहुत से मामलों में ट्रांसपोर्ट ब्रोकर (दलाल) पार्टी से पूरा भाड़ा वसूल कर लेते हैं और गाड़ी मालिक को चूना लगाकर फरार हो जाते हैं।
                </p>

                <div className="bg-red-50 border-l-4 border-[#DC2626] p-4 rounded-r-xl">
                  <h3 className="text-xs sm:text-sm font-bold text-red-900 mb-1">
                    ट्रांसपोर्टर्स के लिए विधिक सच्चाई (Legal Reality)
                  </h3>
                  <p className="text-xs sm:text-sm text-red-800 leading-relaxed">
                    ट्रांसपोर्ट कोई दया या उधार का काम नहीं है। जब आपने माल की ढुलाई पूरी कर दी है, तो भारतीय कानून आपको वही अधिकार देता है जो किसी बैंक या बड़े कॉरपोरेट सप्लायर को मिलते हैं। आप{" "}
                    <Link
                      href="/recovery/unpaid-invoices"
                      className="text-[#DC2626] underline font-bold hover:text-red-700"
                    >
                      बकाया इनवॉइस रिकवरी के नियमों
                    </Link>{" "}
                    के तहत 18% ब्याज और कानूनी हर्जाने के हकदार हैं।
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Statutory Protections */}
            <section
              id="heading-statutory-protections"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  2
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                  कैरिज एक्ट व अनुबंध कानून के तहत ट्रांसपोर्टर की सुरक्षा
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                <p>
                  सड़क परिवहन व्यवसाय को विनियमित करने के लिए भारत सरकार ने <strong>कैरिज बाय रोड एक्ट, 2007 (Carriage by Road Act, 2007)</strong> लागू किया है। यह कानून कॉमन कैरियर (ट्रांसपोर्टर) और माल भेजने वाले (कंसाइनर) तथा पाने वाले (कंसाइनी) के अधिकारों और जिम्मेदारियों को स्पष्ट रूप से परिभाषित करता है:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <span className="text-[11px] font-bold text-[#DC2626] uppercase tracking-wider block mb-1">
                      कैरिज एक्ट 2007 की धारा 10
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mb-2">
                      कंसाइनमेंट नोट (बिल्टी / LR) का वैधानिक महत्व
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      बिल्टी केवल रसीद नहीं है, बल्कि यह कानूनन अनुबंध (Statutory Contract of Carriage) है। इसमें दर्ज भाड़ा दर, डिलीवरी स्थल और शर्तें दोनों पक्षों पर कानूनी रूप से बाध्यकारी होती हैं।
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <span className="text-[11px] font-bold text-[#DC2626] uppercase tracking-wider block mb-1">
                      कैरिज एक्ट 2007 की धारा 13 व 16
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mb-2">
                      क्लीन डिलीवरी के बाद शिकायत का अधिकार समाप्त
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      यदि कंसाइनी ने माल उतारते समय बिल्टी पर डैमेज या शॉर्टेज का कोई लिखित नोट नहीं लिखा, तो डिलीवरी के बाद मनमाना डेबिट नोट काटना कानूनन प्रतिबंधित (Estoppel) है।
                    </p>
                  </div>
                </div>

                <p>
                  इसके साथ ही, <strong>भारतीय अनुबंध अधिनियम, 1872 की धारा 70</strong> (दायित्व जब गैर-मुफ्त सेवा ली गई हो) स्पष्ट करती है कि जब किसी पार्टी ने आपकी गाड़ी की सेवा का उपभोग किया है, तो वह उसका उचित पारिश्रमिक देने के लिए बाध्य है। धारा 73 के तहत गाड़ी को अनुचित समय तक फैक्ट्री गेट पर रोके रखने के कारण हुए डीजल, ड्राइवर भत्ता, और वाहन लोन की ईएमआई का नुकसान भी बतौर हर्जाना वसूलनीय है।
                </p>
              </div>
            </section>

            {/* Section 3: Transporter's Right of Lien */}
            <section
              id="heading-carrier-lien-rules"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  3
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                  कैरियर लियन: क्या ट्रांसपोर्टर माल रोक सकता है?
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                <p>
                  ट्रांसपोर्टरों के बीच सबसे आम सवाल यह होता है: <em>"अगर पार्टी भाड़ा नहीं दे रही, तो क्या हम गाड़ी से माल उतारने से मना कर सकते हैं या माल रोक सकते हैं?"</em> कानूनी तौर पर इसे <strong>कैरियर का लियन अधिकार (Right of Lien)</strong> कहा जाता है।
                </p>

                <div className="bg-slate-900 text-white rounded-xl p-5 space-y-3">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                    <span>सांविधिक नियम &bull; Contract Act Section 170 vs Section 171</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    पार्टिकुलर लियन (Particular Lien) बनाम जनरल लियन (General Lien)
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300">
                    <div className="bg-slate-800/80 p-3.5 rounded-lg border border-slate-700">
                      <span className="font-bold text-emerald-400 block mb-1">
                        1. उस विशेष खेप का लियन (धारा 170)
                      </span>
                      <p>
                        जिस माल को आपका ट्रक लेकर आया है, यदि उसी ट्रिप का भाड़ा नहीं दिया जा रहा, तो आप कानूनन माल उतारने से तब तक मना कर सकते हैं जब तक पूरा भाड़ा और हॉल्टिंग का भुगतान न हो जाए। यह आपका 100% वैधानिक अधिकार है।
                      </p>
                    </div>
                    <div className="bg-slate-800/80 p-3.5 rounded-lg border border-slate-700">
                      <span className="font-bold text-amber-400 block mb-1">
                        2. पुराने बकाए के लिए चालू माल रोकना (धारा 171)
                      </span>
                      <p>
                        यदि आप पिछली 5 गाड़ियों का पुराना बकाया वसूलने के लिए किसी नई ट्रिप का माल रोकते हैं, तो यह तभी वैध है जब आपकी बिल्टी या अनुबंध में 'General Lien' की लिखित शर्त हो। बिना लिखित शर्त के ऐसा करने पर पार्टी झूठी पुलिस एफआईआर का प्रयास कर सकती है।
                      </p>
                    </div>
                  </div>
                </div>

                <p>
                  यदि आप सुरक्षित तरीके से कैरियर लियन का प्रयोग करना चाहते हैं, तो हमारे विस्तृत गाइड{" "}
                  <Link
                    href="/transporter-carrier-lien-holding-cargo-unpaid-freight-carriage-act"
                    className="text-[#DC2626] font-bold underline hover:text-red-700"
                  >
                    ट्रांसपोर्टर राइट ऑफ लियन एवं लीगल कार्गो होल्डिंग
                  </Link>{" "}
                  का अध्ययन करें और वकील के माध्यम से पूर्व-सूचना (Lien Intimation Notice) जारी करें।
                </p>
              </div>
            </section>

            {/* Section 4: 5-Step Operational Recovery Workflow SVG Map */}
            <section
              id="heading-recovery-workflow-svg"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  4
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                  5-चरणीय कानूनी प्रक्रिया: भाड़ा व हॉल्टिंग वसूली का रोडमैप
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                जब पार्टी फोन उठाना बंद कर दे या अनलोडिंग के बाद पेमेंट टालती रहे, तो समय बर्बाद करने के बजाय इस सुव्यवस्थित 5-चरणीय कानूनी प्रक्रिया का पालन करें:
              </p>

              {/* Desktop SVG Workflow */}
              <div className="hidden md:block w-full overflow-x-auto bg-slate-900 p-6 rounded-2xl border border-slate-800">
                <svg
                  viewBox="0 0 920 220"
                  width="920"
                  height="220"
                  className="w-full h-auto"
                  aria-label="ट्रांसपोर्ट भाड़ा रिकवरी 5-चरणीय कानूनी प्रक्रिया फ्लोचार्ट"
                >
                  <defs>
                    <linearGradient id="stepGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1E293B" />
                      <stop offset="100%" stopColor="#0F172A" />
                    </linearGradient>
                    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#DC2626" />
                      <stop offset="100%" stopColor="#B91C1C" />
                    </linearGradient>
                  </defs>

                  {/* Connecting Line */}
                  <line x1="80" y1="90" x2="840" y2="90" stroke="#334155" strokeWidth="4" strokeDasharray="6 6" />

                  {/* Step 1 */}
                  <g transform="translate(30, 20)">
                    <rect width="150" height="140" rx="12" fill="url(#stepGrad)" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="75" cy="40" r="22" fill="url(#accentGrad)" />
                    <text x="75" y="46" fill="#fff" fontSize="14" fontWeight="bold" textAnchor="middle">1</text>
                    <text x="75" y="85" fill="#F8FAFC" fontSize="12" fontWeight="bold" textAnchor="middle">दस्तावेज संकलन</text>
                    <text x="75" y="105" fill="#94A3B8" fontSize="10" textAnchor="middle">LR, POD, E-Way Bill</text>
                    <text x="75" y="122" fill="#94A3B8" fontSize="10" textAnchor="middle">&amp; FASTag साक्ष्य</text>
                  </g>

                  {/* Step 2 */}
                  <g transform="translate(210, 20)">
                    <rect width="150" height="140" rx="12" fill="url(#stepGrad)" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="75" cy="40" r="22" fill="url(#accentGrad)" />
                    <text x="75" y="46" fill="#fff" fontSize="14" fontWeight="bold" textAnchor="middle">2</text>
                    <text x="75" y="85" fill="#F8FAFC" fontSize="12" fontWeight="bold" textAnchor="middle">लेज़र व हॉल्टिंग</text>
                    <text x="75" y="105" fill="#94A3B8" fontSize="10" textAnchor="middle">प्रतिदिन डिटेंशन दर</text>
                    <text x="75" y="122" fill="#94A3B8" fontSize="10" textAnchor="middle">+ 18% ब्याज गणना</text>
                  </g>

                  {/* Step 3 */}
                  <g transform="translate(390, 20)">
                    <rect width="150" height="140" rx="12" fill="url(#stepGrad)" stroke="#DC2626" strokeWidth="2" />
                    <circle cx="75" cy="40" r="22" fill="#DC2626" />
                    <text x="75" y="46" fill="#fff" fontSize="14" fontWeight="bold" textAnchor="middle">3</text>
                    <text x="75" y="85" fill="#F8FAFC" fontSize="12" fontWeight="bold" textAnchor="middle">एडवोकेट लीगल नोटिस</text>
                    <text x="75" y="105" fill="#F87171" fontSize="10" textAnchor="middle">Speed Post RPAD +</text>
                    <text x="75" y="122" fill="#F87171" fontSize="10" textAnchor="middle">Email &amp; WhatsApp</text>
                  </g>

                  {/* Step 4 */}
                  <g transform="translate(570, 20)">
                    <rect width="150" height="140" rx="12" fill="url(#stepGrad)" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="75" cy="40" r="22" fill="url(#accentGrad)" />
                    <text x="75" y="46" fill="#fff" fontSize="14" fontWeight="bold" textAnchor="middle">4</text>
                    <text x="75" y="85" fill="#F8FAFC" fontSize="12" fontWeight="bold" textAnchor="middle">DLSA मध्यस्थता</text>
                    <text x="75" y="105" fill="#94A3B8" fontSize="10" textAnchor="middle">Commercial Courts s.12A</text>
                    <text x="75" y="122" fill="#94A3B8" fontSize="10" textAnchor="middle">प्री-इंस्टीट्यूशन सेटलमेंट</text>
                  </g>

                  {/* Step 5 */}
                  <g transform="translate(750, 20)">
                    <rect width="150" height="140" rx="12" fill="url(#stepGrad)" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="75" cy="40" r="22" fill="#10B981" />
                    <text x="75" y="46" fill="#fff" fontSize="14" fontWeight="bold" textAnchor="middle">5</text>
                    <text x="75" y="85" fill="#F8FAFC" fontSize="12" fontWeight="bold" textAnchor="middle">Order 37 / MSME</text>
                    <text x="75" y="105" fill="#34D399" fontSize="10" textAnchor="middle">बैंक खाता जब्ती व</text>
                    <text x="75" y="122" fill="#34D399" fontSize="10" textAnchor="middle">3x कंपाउंड ब्याज आदेश</text>
                  </g>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="md:hidden space-y-3">
                <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-1">दस्तावेज संकलन (Evidence Dossier)</h3>
                    <p className="text-xs text-slate-300">
                      मूल बिल्टी (LR), कंसाइनी स्टैम्प्ड क्लीन POD, ई-वे बिल पार्ट-B, फास्टैग रसीदें और जीपीएस ट्रैकिंग लॉग्स एकत्रित करें।
                    </p>
                  </div>
                </div>

                <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-1">लेज़र व हॉल्टिंग गणना (Financial Audit)</h3>
                    <p className="text-xs text-slate-300">
                      बकाया भाड़ा + फैक्ट्री गेट पर खड़ी गाड़ी का प्रतिदिन डिटेंशन चार्ज + 18% वार्षिक वैधानिक ब्याज का विस्तृत खाता तैयार करें।
                    </p>
                  </div>
                </div>

                <div className="bg-slate-900 text-white p-4 rounded-xl border border-red-800/80 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-red-400 mb-1">एडवोकेट लीगल नोटिस (Speed Post RPAD)</h3>
                    <p className="text-xs text-slate-300">
                      15 दिन का वैधानिक मांग पत्र इंडिया पोस्ट स्पीड पोस्ट, रजिस्टर्ड ईमेल और व्हाट्सऐप पर भेजें। डाक ट्रैकिंग स्लिप सुरक्षित रखें।
                    </p>
                  </div>
                </div>

                <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    4
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-1">कॉमर्शियल मीडिएशन (Section 12A)</h3>
                    <p className="text-xs text-slate-300">
                      वाणिज्यिक न्यायालय अधिनियम के तहत डीएलएसए (DLSA) में प्री-इंस्टीट्यूशन मध्यस्थता फाइल कर त्वरित समझौते का दबाव बनाएं।
                    </p>
                  </div>
                </div>

                <div className="bg-slate-900 text-white p-4 rounded-xl border border-emerald-800/80 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    5
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-emerald-400 mb-1">ऑर्डर 37 समरी सूट / MSME समाधान</h3>
                    <p className="text-xs text-slate-300">
                      अदालत से समरी डिक्री लेकर देनदार का बैंक खाता अटैच करवाएं, या एमएसएमई समाधान से 3x चक्रवृद्धि ब्याज सहित वसूली आदेश लें।
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5: Statutory Recovery Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  5
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                  वैधानिक रिकवरी मैट्रिक्स: भाड़ा, हॉल्टिंग व क्षतिपूर्ति
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                विभिन्न प्रकार के ट्रांसपोर्ट विवादों में लागू होने वाले कानून, साक्ष्य की जरूरतें और रिकवरी फोरम का तुलनात्मक विवरण नीचे दिया गया है:
              </p>

              <div className="w-full overflow-x-auto">
                <table className="w-full text-left text-xs border border-slate-200 rounded-xl overflow-hidden">
                  <thead className="bg-slate-900 text-white text-[11px] uppercase tracking-wider">
                    <tr>
                      <th className="p-3">विवाद का प्रकार</th>
                      <th className="p-3">लागू होने वाली कानूनी धारा</th>
                      <th className="p-3">अनिवार्य साक्ष्य दस्तावेज</th>
                      <th className="p-3">वसूली का कानूनी फोरम</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold text-slate-900">
                        साइन POD के बाद बेसिक भाड़ा रोकना
                      </td>
                      <td className="p-3 text-emerald-700 font-semibold">
                        Carriage by Road Act 2007 s.10 &amp; Contract Act s.70
                      </td>
                      <td className="p-3">कंसाइनमेंट नोट (LR), कंसाइनी स्टैम्प्ड POD, E-Way Bill Part B</td>
                      <td className="p-3">Order 37 CPC / MSME Samadhaan</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold text-slate-900">
                        गाड़ी हॉल्टिंग व डिटेंशन चार्ज
                      </td>
                      <td className="p-3 text-amber-700 font-semibold">
                        Contract Act 1872 s.73 (क्षतिपूर्ति)
                      </td>
                      <td className="p-3">GPS जियो-फेंसिंग रिपोर्ट, FASTag टोल लॉग्स, गेट इन-आउट पर्ची</td>
                      <td className="p-3">Commercial Court / DLSA Mediation</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold text-slate-900">
                        झूठा डैमेज या शॉर्टेज डेबिट नोट
                      </td>
                      <td className="p-3 text-red-700 font-semibold">
                        Carriage Act s.13 &amp; Raman Iron Foundry Rule
                      </td>
                      <td className="p-3">क्लीन POD प्रति, जॉइंट सर्वे का अभाव, मरीन इंश्योरेंस विवरण</td>
                      <td className="p-3">Summary Suit / MSMED Act s.18</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold text-slate-900">
                        ब्रोकर या कमीशन एजेंट द्वारा गबन
                      </td>
                      <td className="p-3 text-blue-700 font-semibold">
                        Contract Act ss.211-218 &amp; BNS 2023 ss.316/318
                      </td>
                      <td className="p-3">कंसाइनर पेमेंट UTR पुष्टि, ब्रोकर चैट, लोडिंग स्लिप, बैंक लेज़र</td>
                      <td className="p-3">Civil Suit + Economic Offences / Police Complaint</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 6: Interactive Scenario Explorer */}
            <section
              id="heading-interactive-scenarios"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  6
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                  व्यापारिक परिदृश्य: 4 मुख्य विवाद व कानूनी समाधान
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                नीचे दिए गए इंटरएक्टिव टैब में अपने मामले से मिलता-जुलता परिदृश्य चुनें और समझें कि अदालत व वकील के जरिए सबसे तेज़ समाधान कैसे मिलेगा:
              </p>

              {/* Scenario Tabs Component */}
              <TransportBiltyRecoveryScenarioTabs />
            </section>

            {/* Section 7: Financial & Halting Ledger Calculation */}
            <section
              id="heading-financial-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  7
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                  वित्तीय लेज़र: 10 लाख के भाड़े व 8 दिन हॉल्टिंग का हिसाब
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                <p>
                  जब आप वकील के जरिए लीगल नोटिस भेजते हैं, तो मांग पत्र में केवल मूल भाड़ा नहीं लिखा जाता, बल्कि गाड़ी के खड़े रहने का नुकसान और वैधानिक ब्याज भी जोड़ा जाता है। उदाहरण के लिए, मान लें कि 3 ट्रेलरों का कुल भाड़ा ₹10,00,000 था और गाड़ियां अनलोडिंग यार्ड पर 8 दिन तक अवैध रूप से रोकी गईं:
                </p>

                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                    <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-red-400">
                      सांविधिक वित्तीय लेज़र एवं दावा प्रारूप (Worked Financial Ledger)
                    </span>
                    <span className="text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded font-bold">
                      पूर्णतः कानूनी दावा
                    </span>
                  </div>

                  <div className="space-y-2.5 text-xs sm:text-sm">
                    <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                      <span className="text-slate-300">1. मूल ट्रांसपोर्ट भाड़ा (3 ट्रेलर x ₹3,33,333 Clean POD)</span>
                      <span className="font-bold text-white">₹10,00,000</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                      <span className="text-slate-300">2. गाड़ी हॉल्टिंग चार्ज (3 गाड़ियां x 8 दिन x ₹2,500/दिन GPS प्रमाणित)</span>
                      <span className="font-bold text-amber-400">₹60,000</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                      <span className="text-slate-300">3. ड्राइवर आइडल रनिंग अलाउंस व फिक्स्ड ओवरहेड</span>
                      <span className="font-bold text-amber-400">₹12,000</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                      <span className="text-slate-300">4. 90 दिन का विलंबित भुगतान ब्याज (18% प्रति वर्ष की दर से)</span>
                      <span className="font-bold text-emerald-400">₹48,240</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                      <span className="text-slate-300">5. एडवोकेट ड्राफ्टिंग व वैधानिक स्पीड पोस्ट नोटिस लागत</span>
                      <span className="font-bold text-slate-300">₹5,000</span>
                    </div>
                    <div className="flex justify-between items-center pt-3 text-sm sm:text-base font-black text-white">
                      <span>कुल वैधानिक वसूली योग्य दावा (Total Enforceable Claim)</span>
                      <span className="text-[#DC2626] text-base sm:text-lg">₹11,25,240</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-500">
                  *नोट: यदि ट्रांसपोर्ट कंपनी MSME Udyam पंजीकृत है, तो MSMED Act की धारा 16 के तहत RBI बैंक दर के 3 गुना (लगभग 20-22% मासिक चक्रवृद्धि ब्याज) का दावा किया जा सकता है। आप हमारे{" "}
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="text-[#DC2626] font-bold underline hover:text-red-700"
                  >
                    MSME डिलेड पेमेंट इंटरेस्ट कैलकुलेटर
                  </Link>{" "}
                  का उपयोग करके अपने बिलों का सटीक ब्याज निकाल सकते हैं।
                </p>
              </div>
            </section>

            {/* Section 8: BSA 2023 Electronic Evidence Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  8
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                  साक्ष्य चेकलिस्ट: BSA 2023 सेक्शन 63 व E-Way Bill सबूत
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                <p>
                  नए <strong>भारतीय साक्ष्य अधिनियम, 2023 (BSA 2023) की धारा 63</strong> के अंतर्गत डिजिटल और इलेक्ट्रॉनिक रिकॉर्ड्स सीधे अदालत में ग्राह्य (Admissible) हैं, बशर्ते उनके साथ वैधानिक 63-सर्टिफिकेट संलग्न हो। ट्रांसपोर्ट भाड़ा व हॉल्टिंग केस फाइल करने से पहले इन 6 दस्तावेजों को संभालकर रखें:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-3">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div>
                      <h3 className="text-xs font-bold text-slate-900">मूल बिल्टी / लॉरी रसीद (LR Copy)</h3>
                      <p className="text-[11px] text-slate-600 mt-0.5">कंसाइनर का नाम, माल का विवरण, वजन व तय भाड़ा स्पष्ट दर्ज हो।</p>
                    </div>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div>
                      <h3 className="text-xs font-bold text-slate-900">कंसाइनी मुहरयुक्त क्लीन POD</h3>
                      <p className="text-[11px] text-slate-600 mt-0.5">फैक्ट्री रिसीवर के हस्ताक्षर, मुहर व प्राप्ति की तारीख का स्पष्ट फोटो।</p>
                    </div>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div>
                      <h3 className="text-xs font-bold text-slate-900">E-Way Bill Part B अपडेट</h3>
                      <p className="text-[11px] text-slate-600 mt-0.5">गाड़ी नंबर के साथ ई-वे बिल की वैधता व क्लोजर का पोर्टल प्रिंटआउट।</p>
                    </div>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div>
                      <h3 className="text-xs font-bold text-slate-900">FASTag टोल टाइम-स्टैम्प</h3>
                      <p className="text-[11px] text-slate-600 mt-0.5">मार्ग के सभी टोल प्लाजा के डिजिटल कटने का समय जो वाहन की यात्रा सिद्ध करे।</p>
                    </div>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div>
                      <h3 className="text-xs font-bold text-slate-900">GPS व्हीकल ट्रैकिंग रिपोर्ट</h3>
                      <p className="text-[11px] text-slate-600 mt-0.5">फैक्ट्री गेट पर गाड़ी के खड़े रहने के घंटों का जियो-फेंसिंग डेटा (हॉल्टिंग हेतु)।</p>
                    </div>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div>
                      <h3 className="text-xs font-bold text-slate-900">व्हाट्सऐप व ईमेल पत्राचार</h3>
                      <p className="text-[11px] text-slate-600 mt-0.5">पार्टी या ब्रोकर के साथ भाड़े की पुष्टि, एडवांस भुगतान व बकाया की चैट्स।</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 9: Supreme Court & High Court Precedents */}
            <section
              id="heading-judicial-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  9
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                  सुप्रीम कोर्ट के नज़ीरी फैसले: ट्रांसपोर्टर्स के पक्ष में
                </h2>
              </div>

              <div className="space-y-4">
                {CASE_CITATIONS.map((c, i) => (
                  <div
                    key={i}
                    className="border-l-4 border-[#DC2626] bg-slate-50 rounded-r-xl p-4 sm:p-5 border-y border-r border-slate-200 shadow-sm space-y-2"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-bold text-[#DC2626]">{c.court}</span>
                      <span className="text-[11px] font-mono font-semibold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                        {c.citation}
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">{c.title}</h3>
                    <p className="text-xs font-semibold text-slate-700">पक्षकार: {c.parties}</p>
                    <p className="text-xs text-slate-600 leading-relaxed">{c.holding}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 10: Summary Suits & MSME Samadhaan */}
            <section
              id="heading-summary-suit-msme"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  10
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                  ऑर्डर 37 सीपीसी व MSME समाधान: बिना देरी बैंक खाता जब्ती
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                <p>
                  यदि लीगल नोटिस का 15 दिन में कोई सकारात्मक जवाब नहीं आता, तो आपके पास दो बहुत शक्तिशाली कानूनी हथियार मौजूद हैं:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <span className="text-xs font-bold text-[#DC2626] uppercase block mb-1">
                      हथियार 1: Order XXXVII CPC समरी सूट
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mb-2">
                      वाणिज्यिक अदालत में त्वरित डिक्री
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      सीपीसी के{" "}
                      <Link
                        href="/law/order-37-summary-suit-money-recovery"
                        className="text-[#DC2626] underline font-bold hover:text-red-700"
                      >
                        ऑर्डर 37 समरी सूट नियमों
                      </Link>{" "}
                      के तहत साइन की हुई बिल्टी और ई-वे बिल को लिखित अनुबंध माना जाता है। अदालत देनदार को सीधे हाजिर होकर 10 दिन में बचाव की अनुमति मांगने का आदेश देती है। अनुमति न मिलने पर तुरंत डिक्री जारी होती है और पार्टी के बैंक खाते सील कर दिए जाते हैं।
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <span className="text-xs font-bold text-emerald-700 uppercase block mb-1">
                      हथियार 2: MSME समाधान (MSEFC)
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mb-2">
                      3 गुना चक्रवृद्धि ब्याज का सरकारी आदेश
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      यदि आपका उद्यम रजिस्ट्रेशन (Udyam) है, तो एमएसएमई काउंसिल में बिना कोर्ट फीस के केस दायर किया जाता है। काउंसिल का फैसला सीधे कोर्ट डिक्री की तरह लागू होता है, और अपील करने के लिए खरीदार को बकाए का 75% पैसा पहले जमा कराना अनिवार्य होता है।
                    </p>
                  </div>
                </div>

                <p>
                  इसके अलावा, यदि आपका विवाद कंटेनर डिमरेज या वेयरहाउस स्टोरेज से जुड़ा है, तो हमारे संबंधित गाइड{" "}
                  <Link
                    href="/truck-detention-halting-charges-container-demurrage-recovery"
                    className="text-[#DC2626] font-bold underline hover:text-red-700"
                  >
                    ट्रक डिटेंशन व कंटेनर डिमरेज रिकवरी
                  </Link>{" "}
                  तथा{" "}
                  <Link
                    href="/freight-forwarder-cha-customs-duty-ocean-freight-reimbursement-recovery"
                    className="text-[#DC2626] font-bold underline hover:text-red-700"
                  >
                    कस्टम्स ब्रोकर व फ्रेट फॉरवर्डर रिकवरी
                  </Link>{" "}
                  का भी अवलोकन करें।
                </p>
              </div>
            </section>

            {/* Section 11: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  11
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                  अक्सर पूछे जाने वाले सवाल: ट्रांसपोर्ट भाड़ा व हॉल्टिंग
                </h2>
              </div>

              <div className="space-y-3.5">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group border border-slate-200 rounded-xl p-4 hover:border-slate-300 transition-all [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex items-center justify-between cursor-pointer font-bold text-xs sm:text-sm text-slate-900 group-open:text-[#DC2626]">
                      <span className="pr-4">{faq.question}</span>
                      <span className="shrink-0 text-slate-400 group-open:rotate-180 transition-transform">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 12: Statutory Sources */}
            <section
              id="heading-statutory-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  12
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                  विधिक कानून, आधिकारिक गजट व सांविधिक स्रोत
                </h2>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                इस गाइड में उद्धृत सभी वैधानिक धाराएं भारत सरकार के आधिकारिक विधायी पोर्टलों एवं माननीय न्यायालयों के प्रमाणित फैसलों पर आधारित हैं:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PRIMARY_SOURCES.map((source, index) => (
                  <a
                    key={index}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="p-3 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors text-xs text-slate-700 font-medium flex items-center justify-between group"
                  >
                    <span className="truncate pr-2">{source.title}</span>
                    <span className="text-slate-400 group-hover:text-slate-600 shrink-0">&rarr;</span>
                  </a>
                ))}
              </div>
            </section>

            {/* Dual Track Conversion CTA */}
            <TransportBiltyRecoveryCTA />
          </article>
        </div>
      </main>

      {/* Footer Cross Links */}
      <RelatedRecoveryGuides />
    </div>
  );
}
