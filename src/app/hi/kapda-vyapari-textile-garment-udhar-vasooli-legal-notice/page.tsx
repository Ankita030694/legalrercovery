import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import KapdaVyapariRecoveryCTA from "./KapdaVyapariRecoveryCTA";
import KapdaVyapariRecoveryTOC from "./KapdaVyapariRecoveryTOC";
import KapdaVyapariScenarioTabs from "./KapdaVyapariScenarioTabs";

export const revalidate = 86400;

const CANONICAL_URL = `${SITE_URL}/hi/kapda-vyapari-textile-garment-udhar-vasooli-legal-notice`;
const ENGLISH_EQUIVALENT_URL = `${SITE_URL}/industries/textiles-apparel-garment-recovery`;

const EXACT_H1 =
  "सूरत, भिवंडी, लुधियाना, भीलवाड़ा और तिरुपुर के कपड़ा व्यापारियों के लिए गाइड: दलाल/पार्टी से फंसा हुआ पेमेंट कानूनन कैसे वसूलें?";

const META_TITLE = "कपड़ा व्यापार व गारमेंट उधार कैसे वसूलें? (Legal Notice)";

const META_DESCRIPTION =
  "बीजक (GST बिल) पर कपड़ा या रेडीमेड माल गया और पार्टी या दलाल पेमेंट टाल रहा है? जानिए MSME 45-दिन नियम, सेक्शन 43B(h) और ₹999 वकील नोटिस से पक्की वसूली।";

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
        alt: formatAltText("कपड़ा व्यापार और गारमेंट उधार वसूली कानूनी गाइड"),
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
    title: "The Micro, Small and Medium Enterprises Development Act, 2006 (MSMED Act) — Sections 15–18 (Delayed Payments & 3x Compound Interest) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "Income Tax Act, 1961 — Section 43B(h) (Tax Disallowance on Overdue MSME Textile Supplier Invoices)",
    url: "https://incometaxindia.gov.in/pages/acts/income-tax-act.aspx",
  },
  {
    title: "Indian Contract Act, 1872 — Sections 170 (Bailee's Particular Lien) & 182–238 (Agency & Del Credere Broker Liability) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "The Sale of Goods Act, 1930 — Sections 41, 42 & 54 (Buyer's Inspection Expiry & Deemed Acceptance of Fabric/Garments) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2393",
  },
  {
    title: "The Negotiable Instruments Act, 1881 — Section 138 (Cheque / Hundi Bounce Criminal Prosecution) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2195",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Admissibility of WhatsApp Parchi, E-Way Bill & Digital Ledger)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Bharatiya Nyaya Sanhita, 2023 (BNS Section 318 Cheating & Section 61(2) Criminal Conspiracy) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/20062",
  },
  {
    title: "The Code of Civil Procedure, 1908 — Order XXXVII (Summary Suits on Written Contracts, Invoices & Hundis) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
];

const CASE_CITATIONS = [
  {
    title: "माल सप्लाई के समय उद्यम (Udyam) रजिस्ट्रेशन होने पर 3 गुना ब्याज व MSME समाधान अधिकार",
    court: "भारत का सर्वोच्च न्यायालय (Supreme Court of India)",
    parties: "सिल्पी इंडस्ट्रीज बनाम केरल राज्य सड़क परिवहन निगम",
    citation: "2021 SCC OnLine SC 439",
    date: "सुप्रीम कोर्ट नज़ीर",
    holding:
      "सर्वोच्च न्यायालय ने स्पष्ट किया कि MSMED एक्ट की धारा 17 और 18 के तहत 3x RBI बैंक ब्याज और त्वरित मध्यस्थता का लाभ लेने के लिए माल की सप्लाई या अनुबंध की तारीख पर सप्लायर का Udyam (MSME) पंजीकृत होना अनिवार्य है। बाद में लिया गया रजिस्ट्रेशन पुराने बिलों पर लागू नहीं होता।",
    takeaway:
      "सूरत, भिवंडी व लुधियाना के हर कपड़ा मिल, ग्रे वीवर और गारमेंट सप्लायर को अपने हर GST बीजक (Bijak) पर Udyam नंबर और 45-दिन की भुगतान शर्त अनिवार्य रूप से छपवानी चाहिए।",
  },
  {
    title: "प्राइवेट एग्रीमेंट या मंडी क्लॉज के बावजूद MSME कानून को सर्वोपरि प्राथमिकता",
    court: "भारत का सर्वोच्च न्यायालय (Supreme Court of India)",
    parties: "गुजरात स्टेट सिविल सप्लाइज कॉर्पोरेशन बनाम महाकाली फूड्स प्रा. लि.",
    citation: "(2023) 6 SCC 401",
    date: "सुप्रीम कोर्ट संविधान पीठ नज़ीर",
    holding:
      "सुप्रीम कोर्ट ने व्यवस्था दी कि MSMED एक्ट की धारा 24 अन्य सभी कानूनों और निजी अनुबंधों पर प्रभावी (Overriding Effect) है। यदि बड़े ब्रांड या होलसेलर के परचेज ऑर्डर में 90 दिन का उधार या उनके निजी आर्बिट्रेटर की शर्त लिखी हो, तब भी MSME सप्लायर सीधे MSME समाधान (MSEFC) में दावा कर सकता है।",
    takeaway:
      "बड़े गारमेंट शोरूम या मॉल की 90–120 दिन की एकतरफा शर्तें कानूनन MSME व्यापारी के 45-दिन अधिकार और सेक्शन 43B(h) के दबाव को नहीं रोक सकतीं।",
  },
  {
    title: "बिना अदालती फैसले के एकतरफा 'क्वालिटी डिफेक्ट' डेबिट नोट काटना गैर-कानूनी",
    court: "भारत का सर्वोच्च न्यायालय (Supreme Court of India)",
    parties: "यूनियन ऑफ इंडिया बनाम रमन आयरन फाउंड्री",
    citation: "(1974) 2 SCC 231",
    date: "सुप्रीम कोर्ट लैंडमार्क निर्णय",
    holding:
      "कोई भी खरीदार अपने ही मामले में स्वयं न्यायाधीश नहीं बन सकता। जब तक किसी सक्षम कोर्ट या स्वतंत्र मध्यस्थ द्वारा नुकसान तय न हो जाए, तब तक खरीदार सप्लायर के बकाया बिलों में से एकतरफा 'कलर ब्लीडिंग', 'श्रिंकेज' या 'रेट डिफ़रेंस' का डेबिट नोट काटकर पैसा नहीं रोक सकता।",
    takeaway:
      "यदि पार्टी ने 7–15 दिन में कोई लिखित क्वालिटी शिकायत नहीं की और 3 महीने बाद माल बेचकर बचा हुआ स्टॉक वापस कर रही है, तो उसका डेबिट नोट कानूनन शून्य (Void) है।",
  },
];

const FAQS = [
  {
    question: "सूरत या भिवंडी में दलाल (Adatiya) के जरिए बाहर माल भेजा और अब 'पार्टी उठ गई' — किस पर केस करें?",
    answer:
      "ऐसी स्थिति में आपको गायब हुई पार्टी (Proforma Buyer/Directors) और माल दिलवाने वाले दलाल (Introducing Broker/Adatiya) दोनों को संयुक्त रूप से (Joint Co-Noticee) एडवोकेट लीगल नोटिस भेजना चाहिए। भारतीय अनुबंध अधिनियम की धारा 182, 211 व 212 के तहत यदि दलाल ने कमीशन लेकर पार्टी की क्रेडिट गारंटी (Del Credere) दी थी या जानबूझकर दिवालिया पार्टी को माल दिलवाया, तो BNS धारा 318(4) (धोखाधड़ी) और धारा 61(2) (आपराधिक साजिश) के तहत उस पर भी कानूनी व सामाजिक दबाव बनता है।",
  },
  {
    question: "कपड़ा व्यापार में MSME 45-दिन नियम और आयकर सेक्शन 43B(h) कैसे काम करते हैं?",
    answer:
      "MSMED एक्ट की धारा 15 के अनुसार यदि आप सूक्ष्म या लघु उद्यम (Micro/Small Udyam) हैं, तो खरीदार को अधिकतम 45 दिनों (और लिखित एग्रीमेंट न होने पर 15 दिनों) में पेमेंट करना जरूरी है। इनकम टैक्स की धारा 43B(h) के तहत यदि खरीदार 45 दिन के भीतर भुगतान नहीं करता, तो वह उस कपड़ा खरीद को अपने टैक्स खर्च में नहीं दिखा सकता — जिससे उसे बकाया रकम पर ~30% अतिरिक्त आयकर और पेनाल्टी भरनी पड़ती है। लीगल नोटिस में 43B(h) का उल्लेख करते ही पार्टियां टैक्स ऑडिट के डर से तुरंत भुगतान करती हैं।",
  },
  {
    question: "पार्टी 90 दिन बाद 'कलर ब्लीडिंग' या 'श्रिंकेज' बताकर माल वापस (SOR) कर रही है — क्या यह वैध है?",
    answer:
      "नहीं। माल विक्रय अधिनियम (Sale of Goods Act) की धारा 41 और 42 के तहत खरीदार को डिलीवरी के उचित समय (आमतौर पर 7 से 15 दिन) में ही माल की जांच कर लिखित आपत्ति देनी होती है। यदि पार्टी ने गांठ (Bale) खोलकर कपड़ा काट लिया या पूरा सीज़न शोरूम में माल बेचा, तो कानूनन इसे माल की पूर्ण स्वीकृति (Deemed Acceptance) माना जाता है। सीज़न खत्म होने पर भेजा गया रिटर्न या डेबिट नोट गैर-कानूनी है।",
  },
  {
    question: "क्या बिना लिखित एग्रीमेंट के सिर्फ बीजक (Bijak), चालान और बिल्टी (LR) पर वसूली हो सकती है?",
    answer:
      "हाँ, बिल्कुल। आपका GST टैक्स इनवॉइस (बीजक), ई-वे बिल (E-Way Bill), ट्रांसपोर्ट बिल्टी (LR/GR) और व्हाट्सऐप ऑर्डर/परची कन्फर्मेशन मिलकर भारतीय अनुबंध अधिनियम और भारतीय साक्ष्य अधिनियम (BSA 2023) की धारा 63 के तहत एक पूर्ण वैध वाणिज्यिक अनुबंध (Written Contract) साबित करते हैं। इनके आधार पर Order 37 CPC के तहत सिविल कोर्ट में फास्ट-ट्रैक समरी सूट और MSME समाधान में केस चल सकता है।",
  },
  {
    question: "डाइंग, ब्लीचिंग या प्रिंटिंग जॉब-वर्क का पैसा अटका है — क्या मैं पार्टी का कपड़ा रोक (Lien) सकता हूँ?",
    answer:
      "भारतीय अनुबंध अधिनियम की धारा 170 (Bailee's Particular Lien) के तहत डाइंग व प्रोसेस हाउस को कानूनी अधिकार है कि जब तक उस विशेष लॉट की प्रोसेसिंग/जॉब-वर्क मजदूरी न मिल जाए, तब तक आप उस तैयार कपड़े को अपने पास रोककर रख सकते हैं। हालांकि, पुराने बिलों के लिए नए लॉट को रोकने (General Lien) हेतु चालान पर स्पष्ट शर्त होना जरूरी है, इसलिए हमेशा एडवोकेट नोटिस देकर ही लियन लागू करें।",
  },
  {
    question: "कपड़ा मंडी के महाजन/पंचाट (Textile Mahajan Arbitration) का फैसला क्या कोर्ट में लागू होता है?",
    answer:
      "यदि आपके बीजक पर छपे 'Subject to Textile Association Arbitration' क्लॉज पर दोनों पक्षों के हस्ताक्षर या स्पष्ट सहमति (Arbitration Act धारा 7) रही है, तो महाजन पंचाट का अवार्ड सिविल कोर्ट में डिक्री की तरह लागू (Execute) हो सकता है। लेकिन यदि खरीदार ने केवल एकतरफा छपे बिल पर साइन नहीं किए, तो कोर्ट में ऑर्डर 37 CPC या MSME समाधान (MSEFC) 5 गुना ज्यादा तेज और प्रभावी साबित होता है।",
  },
  {
    question: "LegalRecovery.in से ₹999 में कपड़ा वसूली का लीगल नोटिस कैसे जाता है और कितना असर होता है?",
    answer:
      "₹999 में हमारे अनुभवी कॉर्पोरेट अधिवक्ता आपके बीजक, बिल्टी, ई-वे बिल और दलाल विवरण के आधार पर कस्टमाइज्ड लीगल नोटिस तैयार करते हैं। इसमें MSMED Act, सेक्शन 43B(h), BNS 318 और धारा 138 की कानूनी चेतावनी शामिल होती है। यह नोटिस स्पीड पोस्ट RPAD, ईमेल और व्हाट्सऐप पर पार्टी व दलाल को एक साथ भेजा जाता है, जिससे 75%+ मामलों में बिना कोर्ट जाए 15 दिनों के भीतर पेमेंट या सेटलमेंट हो जाता है।",
  },
];

export default function KapdaVyapariRecoveryHindiPage() {
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
        datePublished: "2026-11-17T10:00:00+05:30",
        dateModified: "2026-11-17T15:30:00+05:30",
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
            name: "टेक्सटाइल व गारमेंट रिकवरी हब",
            item: ENGLISH_EQUIVALENT_URL,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "कपड़ा व्यापारी उधार वसूली गाइड",
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

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>§6.13 IND-13 &bull; कपड़ा मंडी, यार्न व गारमेंट व्यापार वसूली गाइड</span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="text-slate-300">MSMED Act, 43B(h) &amp; Del Credere Broker Law</span>
          </div>

          {/* Exact H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box (with Parent Hub link inside first 250 words) */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              सांविधिक सारांश एवं कपड़ा व्यापारी अधिकार (Executive Statutory Summary)
            </span>
            <p>
              सूरत, भिवंडी, भीलवाड़ा, लुधियाना और तिरुपुर की कपड़ा मंडियों में अधिकांश व्यापार बीजक (Bijak), चालान और दलाल/आढ़तिया के भरोसे 60–90 दिन के उधार पर चलता है। हमारे{" "}
              <Link
                href="/industries/textiles-apparel-garment-recovery"
                className="text-red-400 underline hover:text-red-300 font-bold"
              >
                टेक्सटाइल एवं गारमेंट रिकवरी इंडस्ट्री हब
              </Link>{" "}
              के तहत, यदि पार्टी ने पेमेंट रोका है या दलाल के जरिए भेजी पार्टी गायब हो गई (<em>party uth gayi</em>), तो आप MSMED एक्ट धारा 15–18 (3x RBI ब्याज), आयकर सेक्शन 43B(h), अनुबंध अधिनियम धारा 182 व BNS धारा 318 के तहत पार्टी और दलाल दोनों को ₹999 में संयुक्त एडवोकेट लीगल नोटिस भेजकर पक्की वसूली कर सकते हैं।
            </p>
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="border-r border-white/10 pr-2">
              <span className="block text-[10px] sm:text-xs text-slate-400 font-medium">
                MSME 45-दिन वैधानिक नियम
              </span>
              <span className="text-base sm:text-lg md:text-xl font-black text-emerald-400">
                3x RBI ब्याज
              </span>
              <span className="block text-[10px] text-slate-400 mt-0.5">MSMED धारा 15–18 चक्रवृद्धि ब्याज</span>
            </div>
            <div className="border-r border-white/10 pr-2">
              <span className="block text-[10px] sm:text-xs text-slate-400 font-medium">
                खरीदार पर टैक्स दबाव
              </span>
              <span className="text-base sm:text-lg md:text-xl font-black text-red-400">
                सेक्शन 43B(h)
              </span>
              <span className="block text-[10px] text-slate-400 mt-0.5">बकाया बिल पर ~30% टैक्स डिसअलाउंस</span>
            </div>
            <div className="border-r border-white/10 pr-2">
              <span className="block text-[10px] sm:text-xs text-slate-400 font-medium">
                दलाल / आढ़तिया जवाबदेही
              </span>
              <span className="text-base sm:text-lg md:text-xl font-black text-amber-400">
                Del Credere
              </span>
              <span className="block text-[10px] text-slate-400 mt-0.5">BNS धारा 318 व संयुक्त नोटिस</span>
            </div>
            <div>
              <span className="block text-[10px] sm:text-xs text-slate-400 font-medium">
                प्रोसेस हाउस / डाइंग सुरक्षा
              </span>
              <span className="text-base sm:text-lg md:text-xl font-black text-slate-100">
                धारा 170 लियन
              </span>
              <span className="block text-[10px] text-slate-400 mt-0.5">जॉब-वर्क बिल तक कपड़ा रोकने का हक</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <Breadcrumbs
          items={[
            { label: "हिंदी कानूनी गाइड", href: "/hi/legal-notice-kaise-bheje" },
            { label: "कपड़ा व्यापारी उधार वसूली गाइड", href: "/hi/kapda-vyapari-textile-garment-udhar-vasooli-legal-notice" },
          ]}
        />

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0 mt-4">
          {/* Left Sticky Sidebar TOC */}
          <KapdaVyapariRecoveryTOC />

          {/* Main Article Content Column */}
          <article lang="hi-IN" className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Textile Crisis */}
            <section
              id="heading-textile-crisis"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900">
                  कपड़ा मंडी का उधार संकट: सूरत, भिवंडी, भीलवाड़ा व तिरुपुर की हकीकत
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  भारत का ₹12 लाख करोड़ से अधिक का कपड़ा और गारमेंट कारोबार मुख्य रूप से भरोसे, <em>परची</em> (parchi), चालान और 60 से 120 दिन के व्यापारिक उधार (<em>kapda udhar</em>) पर चलता है। सूरत के रिंग रोड टेक्सटाइल मार्केट, भिवंडी के पावरलूम क्लस्टर, भीलवाड़ा के सूटिंग-शर्टिंग मंडी, लुधियाना के होजरी बाजार, पानीपत के हैंडलूम और तिरुपुर के निटवेयर हब से हर रोज़ करोड़ों रुपये का ग्रे (Grey), फिनिश्ड फैब्रिक और रेडीमेड गारमेंट बाहर की मंडियों — जैसे दिल्ली गांधी नगर, कानपुर, इंदौर और कोलकाता — में भेजा जाता है।
                </p>
                <p>
                  लेकिन जब पेमेंट की तारीख आती है, तो कपड़ा व्यापारियों को चार बड़े संकटों का सामना करना पड़ता है: (1) दलाल या आढ़तिया के कहने पर भेजी गई बाहर की पार्टी शटर बंद करके गायब हो जाती है (<strong>&ldquo;party uth gayi&rdquo;</strong>); (2) खरीदार 45 दिन की जगह 6–8 महीने तक <em>RTGS</em> टालता रहता है; (3) सीज़न खत्म होने पर बड़ा ब्रांड या होलसेलर झूठा <em>कलर ब्लीडिंग</em> या <em>श्रिंकेज</em> बताकर माल वापस (SOR) भेज देता है; या (4) डाइंग/प्रिंटिंग मिल का जॉब-वर्क बिल रोक लिया जाता है।
                </p>
                <p>
                  अक्सर व्यापारी सोचते हैं कि उनके पास कोई बड़ा स्टाम्प पेपर एग्रीमेंट नहीं है, सिर्फ <strong>बीजक (GST Bill)</strong>, <strong>ई-वे बिल</strong> और <strong>ट्रांसपोर्ट बिल्टी (LR)</strong> है, तो कोर्ट में केस कमजोर होगा। यह सबसे बड़ी गलतफहमी है। भारतीय कानून में आपका बीजक, बिल्टी और व्हाट्सऐप ऑर्डर कन्फर्मेशन मिलकर एक पक्का कानूनी सबूत बनाते हैं।
                </p>
              </div>
            </section>

            {/* Section 2: 4 Statutory Weapons */}
            <section
              id="heading-statutory-weapons"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900">
                  कपड़ा व्यापारियों के 4 बड़े कानूनी हथियार: MSME, 43B(h) और दलाल नियम
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4 sm:p-5">
                  <h3 className="text-sm sm:text-base font-black text-emerald-900 mb-2">
                    1. MSMED Act धारा 15–18 (45-दिन नियम व 3x ब्याज)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    यदि आपकी मिल, वीविंग यूनिट या गारमेंट फैक्ट्री <strong>Udyam (Micro/Small)</strong> में पंजीकृत है, तो खरीदार को अधिकतम 45 दिनों (बिना एग्रीमेंट 15 दिन) में पेमेंट करना अनिवार्य है। देरी होने पर आपको RBI बैंक रेट के 3 गुना मासिक चक्रवृद्धि ब्याज के साथ{" "}
                    <Link href="/msme-odr-portal-delayed-payment-guide" className="text-emerald-800 underline font-semibold">
                      MSME समाधान (MSEFC)
                    </Link>{" "}
                    में बिना भारी कोर्ट फीस के केस करने का अधिकार है।
                  </p>
                </div>

                <div className="bg-red-50/70 border border-red-200 rounded-xl p-4 sm:p-5">
                  <h3 className="text-sm sm:text-base font-black text-[#DC2626] mb-2">
                    2. आयकर सेक्शन 43B(h) (खरीदार पर 30% टैक्स झटका)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <Link href="/law/section-43bh-msme-payment-rule" className="text-[#DC2626] underline font-semibold">
                      इनकम टैक्स सेक्शन 43B(h)
                    </Link>{" "}
                    के अनुसार यदि खरीदार 45 दिन (और 31 मार्च तक) में MSME कपड़ा व्यापारी का बिल नहीं चुकाता, तो वह उस खरीद को अपने खर्चे में नहीं घटा सकता। उसे उस बकाया राशि पर ~30% आयकर और पेनाल्टी सरकार को देनी पड़ती है — इसी डर से 80% पार्टियां नोटिस मिलते ही पेमेंट जारी करती हैं।
                  </p>
                </div>

                <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4 sm:p-5">
                  <h3 className="text-sm sm:text-base font-black text-amber-900 mb-2">
                    3. दलाल / आढ़तिया जवाबदेही (Del Credere &amp; BNS 318)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <Link href="/textile-commission-agent-broker-adatiya-buyer-default-liability" className="text-amber-900 underline font-semibold">
                      टेक्सटाइल ब्रोकर और आढ़तिया कानून
                    </Link>{" "}
                    (Contract Act s.182–212) के तहत यदि दलाल ने कमीशन लेकर उधार की गारंटी दी थी या फर्जी पार्टी से मिलीभगत की, तो पार्टी के साथ दलाल को भी <strong>Co-Noticee</strong> बनाकर BNS धारा 318(4) (धोखाधड़ी) का नोटिस भेजा जाता है।
                  </p>
                </div>

                <div className="bg-slate-100 border border-slate-300 rounded-xl p-4 sm:p-5">
                  <h3 className="text-sm sm:text-base font-black text-slate-900 mb-2">
                    4. चेक बाउंस (NI Act s.138) व डाइंग लियन (s.170)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    यदि खरीदार का PDC चेक या हुंडी बाउंस हुई है, तो बैंक मेमो के 30 दिन में{" "}
                    <Link href="/tools/cheque-bounce-deadline-calculator" className="text-[#DC2626] underline font-semibold">
                      धारा 138 नोटिस
                    </Link>{" "}
                    भेजें (2 साल तक जेल व 2x जुर्माना)। वहीं{" "}
                    <Link href="/dyeing-printing-bleaching-embroidery-job-work-fabric-lien-recovery" className="text-slate-900 underline font-semibold">
                      डाइंग व प्रिंटिंग जॉब-वर्क
                    </Link>{" "}
                    में धारा 170 के तहत माल पर लियन रखकर वसूली की जा सकती है।
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: 5-Step Recovery Workflow SVG + Mobile Cards */}
            <section
              id="heading-recovery-workflow"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900">
                  5-चरणीय कपड़ा उधार वसूली प्रक्रिया (Step-by-Step Escalation)
                </h2>
              </div>
              <p className="text-sm text-slate-600 mb-6">
                फंसे हुए कपड़ा पेमेंट को बिना समय गंवाए वसूलने के लिए नीचे दिया गया 5-चरणीय कानूनी फ्लो अपनाएं:
              </p>

              {/* Desktop Hand-Authored SVG Workflow */}
              <div className="hidden md:block bg-slate-900 rounded-2xl p-6 border border-slate-800 overflow-x-auto">
                <svg
                  viewBox="0 0 920 210"
                  width="920"
                  height="210"
                  className="w-full h-auto"
                  role="img"
                  aria-label="कपड़ा व्यापार उधार वसूली के 5 कानूनी चरणों का फ्लोचार्ट"
                >
                  <defs>
                    <marker id="arrowKapda" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                      <path d="M0,0 L8,4 L0,8 Z" fill="#DC2626" />
                    </marker>
                  </defs>
                  {/* Step 1 */}
                  <rect x="10" y="30" width="160" height="145" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <circle cx="35" cy="55" r="13" fill="#DC2626" />
                  <text x="35" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">1</text>
                  <text x="56" y="59" fill="#F8FAFC" fontSize="13" fontWeight="bold">सबूत संग्रह</text>
                  <text x="22" y="88" fill="#CBD5E1" fontSize="11">बीजक (GST बिल),</text>
                  <text x="22" y="105" fill="#CBD5E1" fontSize="11">ई-वे बिल, LR बिल्टी,</text>
                  <text x="22" y="122" fill="#CBD5E1" fontSize="11">WhatsApp चैट और</text>
                  <text x="22" y="139" fill="#34D399" fontSize="11" fontWeight="bold">Udyam सर्टिफिकेट</text>

                  <line x1="172" y1="102" x2="195" y2="102" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrowKapda)" />

                  {/* Step 2 */}
                  <rect x="198" y="30" width="160" height="145" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <circle cx="223" cy="55" r="13" fill="#DC2626" />
                  <text x="223" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">2</text>
                  <text x="244" y="59" fill="#F8FAFC" fontSize="13" fontWeight="bold">₹999 नोटिस</text>
                  <text x="210" y="88" fill="#CBD5E1" fontSize="11">पार्टी + दलाल को</text>
                  <text x="210" y="105" fill="#CBD5E1" fontSize="11">संयुक्त एडवोकेट</text>
                  <text x="210" y="122" fill="#CBD5E1" fontSize="11">नोटिस (43B(h) +</text>
                  <text x="210" y="139" fill="#F87171" fontSize="11" fontWeight="bold">15-दिन अल्टीमेटम)</text>

                  <line x1="360" y1="102" x2="383" y2="102" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrowKapda)" />

                  {/* Step 3 */}
                  <rect x="386" y="30" width="160" height="145" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <circle cx="411" cy="55" r="13" fill="#DC2626" />
                  <text x="411" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">3</text>
                  <text x="432" y="59" fill="#F8FAFC" fontSize="13" fontWeight="bold">डिजिटल तामील</text>
                  <text x="398" y="88" fill="#CBD5E1" fontSize="11">Speed Post RPAD,</text>
                  <text x="398" y="105" fill="#CBD5E1" fontSize="11">ईमेल व WhatsApp पर</text>
                  <text x="398" y="122" fill="#CBD5E1" fontSize="11">BSA s.63 मान्य डिलीवरी</text>
                  <text x="398" y="139" fill="#FBBF24" fontSize="11" fontWeight="bold">(75% यहीं सेटलमेंट)</text>

                  <line x1="548" y1="102" x2="571" y2="102" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrowKapda)" />

                  {/* Step 4 */}
                  <rect x="574" y="30" width="160" height="145" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <circle cx="599" cy="55" r="13" fill="#DC2626" />
                  <text x="599" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">4</text>
                  <text x="620" y="59" fill="#F8FAFC" fontSize="13" fontWeight="bold">फोरम / केस</text>
                  <text x="586" y="88" fill="#CBD5E1" fontSize="11">MSME समाधान,</text>
                  <text x="586" y="105" fill="#CBD5E1" fontSize="11">Order 37 समरी सूट,</text>
                  <text x="586" y="122" fill="#CBD5E1" fontSize="11">138 चेक बाउंस या</text>
                  <text x="586" y="139" fill="#34D399" fontSize="11" fontWeight="bold">BNS 318 शिकायत</text>

                  <line x1="736" y1="102" x2="759" y2="102" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrowKapda)" />

                  {/* Step 5 */}
                  <rect x="762" y="30" width="148" height="145" rx="12" fill="#064E3B" stroke="#10B981" strokeWidth="2" />
                  <circle cx="787" cy="55" r="13" fill="#10B981" />
                  <text x="787" y="60" textAnchor="middle" fill="#064E3B" fontSize="12" fontWeight="bold">5</text>
                  <text x="808" y="59" fill="#FFFFFF" fontSize="13" fontWeight="bold">पक्की वसूली</text>
                  <text x="774" y="88" fill="#D1FAE5" fontSize="11">मूलधन + 3x ब्याज</text>
                  <text x="774" y="105" fill="#D1FAE5" fontSize="11">या कोर्ट डिक्री से</text>
                  <text x="774" y="122" fill="#D1FAE5" fontSize="11">पार्टी का बैंक खाता</text>
                  <text x="774" y="139" fill="#6EE7B7" fontSize="11" fontWeight="bold">अटैच व वसूली</text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:hidden">
                {[
                  { n: "1", t: "सबूत संग्रह", d: "GST बीजक, ई-वे बिल, बिल्टी (LR), WhatsApp परची और Udyam सर्टिफिकेट इकट्ठा करें।" },
                  { n: "2", t: "₹999 एडवोकेट नोटिस", d: "पार्टी व दलाल दोनों को 43B(h) टैक्स चेतावनी और 15-दिन अल्टीमेटम के साथ संयुक्त नोटिस भेजें।" },
                  { n: "3", t: "बहु-माध्यम तामील", d: "Speed Post RPAD, ईमेल व WhatsApp पर BSA s.63 मान्य डिलीवरी — अधिकांश मामले यहीं हल होते हैं।" },
                  { n: "4", t: "MSME / कोर्ट कार्रवाई", d: "भुगतान न मिलने पर MSME समाधान (3x ब्याज), Order 37 समरी सूट या धारा 138 केस दर्ज करें।" },
                  { n: "5", t: "डिक्री व वसूली", d: "मूलधन + ब्याज की वसूली अथवा कोर्ट आदेश से डिफ़ॉल्टर के बैंक खाते व संपत्ति की कुर्की।" },
                ].map((s) => (
                  <div key={s.n} className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-6 h-6 rounded-full bg-[#DC2626] text-xs font-bold flex items-center justify-center">
                        {s.n}
                      </span>
                      <p className="text-sm font-bold">{s.t}</p>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">{s.d}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Interactive Scenario Tabs */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900">
                  4 कपड़ा मंडी परिदृश्य: दलाल, 43B(h), SOR वापसी व जॉब-वर्क समाधान
                </h2>
              </div>
              <p className="text-sm text-slate-600 mb-5">
                अपनी वास्तविक व्यापारिक समस्या के अनुसार नीचे दिए गए टैब पर क्लिक करें और सटीक कानूनी रणनीति देखें:
              </p>
              <KapdaVyapariScenarioTabs />
            </section>

            {/* Mid-Article CTA */}
            <KapdaVyapariRecoveryCTA />

            {/* Section 5: Remedy Comparison Matrix */}
            <section
              id="heading-remedy-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900">
                  कपड़ा व्यापार वसूली मैट्रिक्स: MSME समाधान बनाम कोर्ट व महाजन पंचाट
                </h2>
              </div>
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3 sm:p-4 font-bold">कानूनी फोरम / माध्यम</th>
                      <th className="p-3 sm:p-4 font-bold">कब चुनें?</th>
                      <th className="p-3 sm:p-4 font-bold">ब्याज / दंड शक्ति</th>
                      <th className="p-3 sm:p-4 font-bold">अनुमानित समय व खर्च</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">₹999 एडवोकेट लीगल नोटिस (पार्टी + दलाल)</td>
                      <td className="p-3 sm:p-4 text-slate-700">हर बकाया बीजक/उधार का पहला अनिवार्य कदम</td>
                      <td className="p-3 sm:p-4 text-emerald-700 font-semibold">43B(h) टैक्स + 3x MSME ब्याज चेतावनी</td>
                      <td className="p-3 sm:p-4 text-slate-700">24 घंटे में डिस्पैच; 15 दिन में 75%+ सेटलमेंट</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">MSME समाधान (MSEFC पोर्टल)</td>
                      <td className="p-3 sm:p-4 text-slate-700">सप्लाई के समय Micro/Small Udyam रजिस्ट्रेशन हो</td>
                      <td className="p-3 sm:p-4 text-emerald-700 font-semibold">3 गुना RBI बैंक दर (चक्रवृद्धि मासिक)</td>
                      <td className="p-3 sm:p-4 text-slate-700">शून्य/न्यूनतम फीस; 90 दिन सुलह + अवार्ड</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">Order 37 CPC समरी सूट (सिविल कोर्ट)</td>
                      <td className="p-3 sm:p-4 text-slate-700">गैर-MSME व्यापारी या ₹3L+ वाणिज्यिक बिल (Commercial Court)</td>
                      <td className="p-3 sm:p-4 text-amber-700 font-semibold">12%–18% वार्षिक ब्याज + बैंक खाता अटैचमेंट</td>
                      <td className="p-3 sm:p-4 text-slate-700">डिफ़ॉल्टर को 10 दिन में Leave to Defend जरूरी</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">NI Act धारा 138 (चेक बाउंस केस)</td>
                      <td className="p-3 sm:p-4 text-slate-700">पार्टी का PDC चेक या हुंडी बाउंस होने पर</td>
                      <td className="p-3 sm:p-4 text-[#DC2626] font-semibold">2 साल तक जेल + चेक राशि का दोगुना जुर्माना</td>
                      <td className="p-3 sm:p-4 text-slate-700">बाउंस के 30 दिन में नोटिस अनिवार्य</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">टेक्सटाइल महाजन / मंडी पंचाट</td>
                      <td className="p-3 sm:p-4 text-slate-700">जब दोनों पक्षों ने मंडी पंचाट क्लॉज पर साइन किया हो</td>
                      <td className="p-3 sm:p-4 text-slate-700">मंडी नियमावली अनुसार व्यापार बहिष्कार व अवार्ड</td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        <Link href="/textile-trade-association-mahajan-panch-award-enforcement-court" className="text-[#DC2626] underline font-semibold">
                          लागू करने की सीमाएं जानें &rarr;
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 6: Worked Financial & Tax Ledger */}
            <section
              id="heading-financial-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900">
                  वित्तीय उदाहरण: ₹18,50,000 के कपड़ा बीजक पर 3x ब्याज व 43B(h) टैक्स असर
                </h2>
              </div>
              <p className="text-sm text-slate-700 mb-5 leading-relaxed">
                मान लीजिए सूरत के एक सूक्ष्म (Micro Udyam) कपड़ा व्यापारी ने दिल्ली के एक होलसेलर को <strong>₹18,50,000</strong> का माल GST बीजक पर बेचा और 180 दिनों से पेमेंट अटका है (माना RBI बैंक रेट 6.50% है, तो 3x = 19.50% मासिक चक्रवृद्धि)। आप अपना सटीक ब्याज{" "}
                <Link href="/tools/msme-delayed-payment-interest-calculator" className="text-[#DC2626] underline font-bold">
                  MSME ब्याज कैलकुलेटर
                </Link>{" "}
                से भी जोड़ सकते हैं:
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-b border-slate-800 pb-4">
                  <div>
                    <span className="block text-xs text-slate-400">मूल बीजक राशि (Principal)</span>
                    <span className="text-xl font-black text-white">₹18,50,000</span>
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400">वैधानिक MSME ब्याज (135 दिन देरी @ 19.5%)</span>
                    <span className="text-xl font-black text-emerald-400">+ ₹1,37,390*</span>
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400">कुल वैधानिक दावा (Total Claim)</span>
                    <span className="text-xl font-black text-amber-400">₹19,87,390</span>
                  </div>
                </div>
                <div className="bg-red-950/50 border border-red-800/60 rounded-xl p-4 text-xs sm:text-sm text-slate-200 leading-relaxed">
                  <strong className="text-red-400">खरीदार को सेक्शन 43B(h) से नुकसान:</strong> यदि खरीदार 31 मार्च तक ₹18,50,000 का भुगतान नहीं करता, तो उसकी आय में ₹18.50 लाख जुड़ जाएंगे और उसे ~30% स्लैब पर लगभग <strong>₹5,55,000 अतिरिक्त इनकम टैक्स</strong> (ब्याज सहित) भरना पड़ेगा — यानी उधार रोकने से खरीदार का खुद का नुकसान वसूली रकम से कहीं बड़ा हो जाता है।
                </div>
                <p className="text-[11px] text-slate-400">
                  *नोट: मासिक चक्रवृद्धि ब्याज (Monthly Compounding) की सटीक गणना वास्तविक देरी के दिनों और संबंधित माह के RBI अधिसूचित बैंक रेट पर निर्भर करती है।
                </p>
              </div>
            </section>

            {/* Section 7: Evidence Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900">
                  बीजक, बिल्टी व BSA 2023 s.63 साक्ष्य चेकलिस्ट (8 जरूरी दस्तावेज)
                </h2>
              </div>
              <p className="text-sm text-slate-600 mb-4">
                वकील के माध्यम से नोटिस या केस भेजने से पहले ये 8 दस्तावेज तैयार रखें (यदि बिना लिखित एग्रीमेंट के माल गया है, तो{" "}
                <Link href="/how-to-recover-money-without-written-agreement" className="text-[#DC2626] underline font-semibold">
                  बिना एग्रीमेंट वसूली गाइड
                </Link>{" "}
                भी देखें):
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "GST टैक्स इनवॉइस (बीजक) — जिस पर Udyam नंबर और 45-दिन की शर्त दर्ज हो",
                  "ई-वे बिल (E-Way Bill) और GSTR-1 / GSTR-2B का मिलान",
                  "ट्रांसपोर्ट बिल्टी (LR / GR) और डिलीवरी रिसीविंग (POD)",
                  "दलाल (Adatiya) की परची, ब्रोकरेज बिल या WhatsApp ऑर्डर कन्फर्मेशन",
                  "बकाया पेमेंट मांगने वाली WhatsApp चैट व ईमेल रिमाइंडर (BSA s.63 सर्टिफिकेट हेतु)",
                  "खरीदार का लेज़र अकाउंट स्टेटमेंट (Confirmed Ledger / Part-Payment UTR)",
                  "यदि चेक बाउंस हुआ हो तो बैंक का मूल Return Memo व बाउंस चेक",
                  "SOR/रिटर्न विवाद में 7-दिन के भीतर किसी क्वालिटी शिकायत का न होना व AQL रिपोर्ट",
                ].map((item, idx) => (
                  <div
                    key={item}
                    className="flex items-start gap-2.5 bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-xs sm:text-sm text-slate-800"
                  >
                    <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8: Judicial Precedents */}
            <section
              id="heading-judicial-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900">
                  कपड़ा व व्यापारिक उधार वसूली पर सुप्रीम कोर्ट के प्रमुख फैसले
                </h2>
              </div>
              <div className="space-y-4">
                {CASE_CITATIONS.map((c) => (
                  <div
                    key={c.citation}
                    className="border-l-4 border-[#DC2626] bg-slate-50 rounded-r-xl p-4 sm:p-5 border-t border-r border-b border-slate-200"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="text-sm sm:text-base font-black text-slate-900">{c.title}</h3>
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded bg-slate-900 text-white">
                        {c.citation}
                      </span>
                    </div>
                    <p className="text-xs font-bold text-[#DC2626] mb-2">
                      {c.parties} &bull; {c.court}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">{c.holding}</p>
                    <p className="text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-lg p-2.5 font-medium">
                      <strong>व्यापारी के लिए निष्कर्ष:</strong> {c.takeaway}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-5 p-4 bg-slate-100 rounded-xl border border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
                <span className="text-slate-700 font-medium">
                  अधिक टेक्सटाइल संसाधन:
                </span>
                <div className="flex flex-wrap gap-3 font-bold">
                  <Link href="/retail-fashion-brand-sor-sale-or-return-rejection-garment-recovery" className="text-[#DC2626] hover:underline">
                    SOR / माल वापसी विवाद गाइड &rarr;
                  </Link>
                  <Link href="/templates/security-cheque-presentation-intimation-cum-ledger-notice" className="text-slate-900 hover:underline">
                    सिक्योरिटी चेक नोटिस फॉर्मेट &rarr;
                  </Link>
                  <Link href="/send-legal-notice-online-india" className="text-slate-900 hover:underline">
                    ऑनलाइन लीगल नोटिस सेवा &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 9: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900">
                  अक्सर पूछे जाने वाले सवाल (कपड़ा व्यापारी FAQ)
                </h2>
              </div>
              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.question}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4 open:bg-white open:shadow-sm transition-all"
                  >
                    <summary className="font-bold text-xs sm:text-sm md:text-base text-slate-900 cursor-pointer list-none flex items-center justify-between gap-3">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] font-black text-lg group-open:rotate-45 transition-transform shrink-0">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Bottom Dual-Track CTA */}
            <KapdaVyapariRecoveryCTA />

            {/* Section 10: Statutory Sources */}
            <section
              id="heading-statutory-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#404447] text-white text-xs font-black flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900">
                  आधिकारिक कानून व विधिक स्रोत (Statutory Authorities)
                </h2>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                {PRIMARY_SOURCES.map((src) => (
                  <li key={src.url} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold mt-0.5">&bull;</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-800 hover:text-[#DC2626] underline break-words"
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

      {/* Footer Cross-Links */}
      <RelatedRecoveryGuides />
    </div>
  );
}
