import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import BuildingMaterialRecoveryCTA from "./BuildingMaterialRecoveryCTA";
import BuildingMaterialRecoveryTOC from "./BuildingMaterialRecoveryTOC";
import BuildingMaterialRecoveryScenarioTabs from "./BuildingMaterialRecoveryScenarioTabs";

export const revalidate = 86400;

const CANONICAL_URL = `${SITE_URL}/hi/building-material-sariya-cement-rmc-udhar-recovery-notice`;

const EXACT_H1 =
  "बिल्डर या ठेकेदार सरिया, सीमेंट, RMC, टाइल्स या हार्डवेयर का लाखों दबाकर बैठा है? धर्मकांटा पर्ची और ई-वे बिल से कानूनी वसूली गाइड";

const META_TITLE = "बिल्डर/ठेकेदार से सरिया, सीमेंट व मटेरियल का पैसा वसूलें";

const META_DESCRIPTION =
  "साइट पर माल उतरने के बाद बिल्डर या ठेकेदार चेक बाउंस कर रहा है या पेमेंट लटका रहा है? जानिए ₹999 वकील नोटिस, धारा 138 और समरी सूट से तेज़ रिकवरी।";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: {
    canonical: CANONICAL_URL,
    languages: {
      "hi-IN": CANONICAL_URL,
      "en-IN": `${SITE_URL}/industries/chemicals-steel-rmc-building-materials-recovery`,
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
        alt: formatAltText("सरिया, सीमेंट और बिल्डिंग मटेरियल उधार वसूली की कानूनी गाइड"),
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
    title: "The Code of Civil Procedure, 1908 — Order XXXVII (Summary Suit) & Order XXXVIII Rule 5 — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Negotiable Instruments Act, 1881 — Sections 138, 139, 141 & 143A (Cheque Bounce & 20% Interim Compensation) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title: "MSMED Act, 2006 — Sections 15, 16, 17, 18 & 24 (45-Day Payment Limit & 3x RBI Compound Interest) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "Sale of Goods Act, 1930 — Sections 41 & 42 (Buyer's Deemed Acceptance After Site Consumption) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2390",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 — Section 63 (Electronic Records: E-Way Bill, Weighbridge & WhatsApp) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "MSME Samadhaan Portal (Delayed Payment Monitoring System — Ministry of MSME)",
    url: "https://samadhaan.msme.gov.in/",
  },
];

const CASE_CITATIONS = [
  {
    title: "सिक्योरिटी चेक (PDC) बाउंस होने पर भी धारा 138 NI Act का पूरा मुकदमा चलेगा",
    court: "भारत का सर्वोच्च न्यायालय (Supreme Court of India)",
    parties: "श्रीपति सिंह बनाम झारखंड राज्य (Sripati Singh v. State of Jharkhand)",
    citation: "2021 SCC OnLine SC 1002",
    date: "सुप्रीम कोर्ट लैंडमार्क निर्णय",
    holding:
      "माननीय सर्वोच्च न्यायालय ने स्पष्ट किया कि यदि व्यापार में उधारी या सप्लाई के समय सुरक्षा (Security) के तौर पर कोई चेक दिया गया था और बाद में बिल का भुगतान नहीं हुआ, तो उस चेक को बैंक में लगाने और बाउंस होने पर धारा 138 के तहत दंडनीय अपराध बनता है। बिल्डर 'सिक्योरिटी चेक' कहकर बच नहीं सकता।",
  },
  {
    title: "बिना कोर्ट के फैसले के सप्लायर के बिल से इकतरफा कटौती (Debit Note) पूरी तरह अवैध",
    court: "भारत का सर्वोच्च न्यायालय (Supreme Court of India)",
    parties: "यूनियन ऑफ इंडिया बनाम रमन आयरन फाउंड्री (Raman Iron Foundry)",
    citation: "(1974) 2 SCC 231",
    date: "सुप्रीम कोर्ट नज़ीर",
    holding:
      "सुप्रीम कोर्ट का सुस्थापित सिद्धांत है कि कोई भी खरीदार या बिल्डर खुद जज बनकर सप्लायर के पक्के बिल में से 'शॉर्टेज', 'मटेरियल खराब था' या 'पेनल्टी' के नाम पर मनमानी कटौती नहीं कर सकता। जब तक सक्षम अदालत या आर्बिट्रेशन नुकसान तय न करे, पूरा बिल देय रहता है।",
  },
  {
    title: "कॉमर्शियल कोर्ट में बिना पूर्व-मध्यस्थता (Section 12A) के सीधे मुकदमे पर रोक — अंतरिम राहत अपवाद",
    court: "भारत का सर्वोच्च न्यायालय (Supreme Court of India)",
    parties: "पाटिल ऑटोमेशन प्रा. लि. बनाम रखेजा इंजीनियर्स (Patil Automation)",
    citation: "(2022) 10 SCC 1",
    date: "सुप्रीम कोर्ट निर्णय",
    holding:
      "₹3 लाख से अधिक के वाणिज्यिक विवादों में कमर्शियल कोर्ट जाने से पहले धारा 12A के तहत प्री-इंस्टीट्यूशन मेडिएशन जरूरी है, लेकिन यदि ठेकेदार साइट छोड़कर भाग रहा हो या संपत्ति बेच रहा हो (Urgent Interim Relief जैसे Order XXXVIII Rule 5), तो कोर्ट तुरंत अटैचमेंट की अर्जी सुन सकता है।",
  },
];

const FAQS = [
  {
    question: "बिल्डर या ठेकेदार सरिया, सीमेंट व RMC का पैसा रोके तो सबसे पहला कानूनी कदम क्या उठाएं?",
    answer:
      "सबसे पहले अपने सभी दस्तावेज — टैक्स इनवॉइस, GST ई-वे बिल (Part-A व Part-B), धर्मकांटा पर्ची (Weighbridge Slip) और लेज़र स्टेटमेंट — इकट्ठा करें। इसके बाद किसी अनुभवी एडवोकेट से 15-दिवसीय वैधानिक लीगल नोटिस (Order 37 CPC, MSMED Act और यदि चेक है तो NI Act धारा 138 के तहत) स्पीड पोस्ट RPAD, ईमेल और व्हाट्सऐप पर भेजें। LegalRecovery.in पर मात्र ₹999 में यह एडवोकेट-ड्राफ्टेड नोटिस 24 घंटे में तैयार होकर डिस्पैच हो जाता है।",
  },
  {
    question: "ठेकेदार ने चालान पर साइन नहीं किया — क्या धर्मकांटा पर्ची और ई-वे बिल से कोर्ट में केस जीत सकते हैं?",
    answer:
      "जी हां। भारतीय साक्ष्य अधिनियम (BSA 2023) की धारा 63 के तहत इलेक्ट्रॉनिक रिकॉर्ड जैसे GST ई-वे बिल, टोल/फास्टैग क्रॉसिंग डेटा, कंप्यूटराइज्ड धर्मकांटा पर्ची, गाड़ी ड्राइवर की जीपीएस लोकेशन और साइट की व्हाट्सऐप फोटो कानूनी रूप से मान्य साक्ष्य हैं। साथ ही Sale of Goods Act की धारा 42 के अनुसार यदि बिल्डर ने माल को साइट पर इस्तेमाल कर लिया है, तो चालान पर साइन न होने के बावजूद वह भुगतान के लिए बाध्य है।",
  },
  {
    question: "बिल्डर कैश देने के बजाय 'प्रोजेक्ट में फ्लैट या दुकान ले लो' कह रहा है — क्या यह सुरक्षित है?",
    answer:
      "बिना CERSAI और RERA की जांच किए कभी भी कैश के बदले फ्लैट (Barter Flat) स्वीकार न करें। कई मामलों में बिल्डर जो फ्लैट ऑफर करते हैं, वह पहले से ही किसी बैंक या फाइनेंस कंपनी के पास गिरवी (Mortgaged) होता है। अनुबंध अधिनियम की धारा 62 के तहत आप अपनी मर्जी के बिना फ्लैट लेने को बाध्य नहीं हैं — आप मूल कैश बिल पर ब्याज सहित पूरी वसूली का नोटिस भेज सकते हैं।",
  },
  {
    question: "ठेकेदार ने जो चेक दिया था वह बाउंस हो गया — कितने दिनों में केस करना होता है?",
    answer:
      "चेक बाउंस (Return Memo) की तारीख से ठीक 30 दिनों के भीतर आपको बिल्डर/ठेकेदार को NI Act की धारा 138 का लिखित लीगल नोटिस भेजना अनिवार्य है। नोटिस मिलने के 15 दिनों तक अगर भुगतान न हो, तो अगले 30 दिनों के भीतर मजिस्ट्रेट कोर्ट में आपराधिक शिकायत दर्ज करनी होती है। कोर्ट में आप धारा 143A के तहत तुरंत 20% अंतरिम मुआवजा भी मांग सकते हैं।",
  },
  {
    question: "हार्डवेयर, प्लाईवुड, टाइल्स या स्टोन क्रशर दुकान की उधारी पर MSME 3x ब्याज कैसे मिलता है?",
    answer:
      "यदि आपकी दुकान या डिपो का 'उद्यम रजिस्ट्रेशन' (Udyam MSME Registration) सप्लाई की तारीख से पहले का है, तो MSMED Act की धारा 15 के तहत बायर को 45 दिनों में पेमेंट करना जरूरी है। देरी होने पर धारा 16 के तहत RBI बैंक रेट के 3 गुना चक्रवृद्धि ब्याज (लगभग 18%–19.5% सालाना) मिलता है और इनकम टैक्स की धारा 43B(h) के तहत बायर को उस बिल पर टैक्स छूट भी नहीं मिलती।",
  },
  {
    question: "अगर ठेकेदार साइट छोड़कर भाग गया है और काम बंद कर दिया है, तो पैसा कैसे निकलेगा?",
    answer:
      "यदि सब-कॉन्ट्रैक्टर साइट छोड़कर भाग गया है, तो तुरंत CPC Order XXXVIII Rule 5 (Attachment Before Judgment) के तहत सिविल कोर्ट में अर्जी लगाकर उसके बैंक खाते, मशीनरी या मुख्य डेवलपर/कंपनी के पास फंसे उसके रनिंग बिल (RA Bill) पर रोक (Garnishee Order) लगवाई जा सकती है। साथ ही BNS 2023 की धारा 316/318 के तहत धोखाधड़ी की शिकायत का विकल्प भी खुलता है।",
  },
  {
    question: "क्या छोटे डीलर के लिए ₹999 वाला एडवोकेट नोटिस वाकई असरदार होता है?",
    answer:
      "जी हां। जब बिल्डर या ठेकेदार के पास स्पीड पोस्ट RPAD से एडवोकेट के लेटरहेड पर सीपीसी ऑर्डर 37, धारा 138 और इनकम टैक्स 43B(h) की चेतावनी वाला नोटिस पहुंचता है, तो उसे पता चल जाता है कि मामला अब कोर्ट और टैक्स पेनल्टी तक जा रहा है। हमारे अधिकांश मामलों में नोटिस की ट्रैकिंग स्लिप और ईमेल पहुंचते ही पार्टी 15 दिनों के भीतर समझौते या किश्तों में पेमेंट के लिए आगे आ जाती है।",
  },
];

export default function BuildingMaterialRecoveryHindiPage() {
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
        dateModified: "2026-11-17T16:45:00+05:30",
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
            name: "स्टील, सीमेंट, RMC व बिल्डिंग मटेरियल रिकवरी हब",
            item: `${SITE_URL}/industries/chemicals-steel-rmc-building-materials-recovery`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "सरिया, सीमेंट व बिल्डिंग मटेरियल उधार वसूली गाइड",
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
          {/* Hero Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>§6.14 IND-14 &bull; सरिया, सीमेंट, RMC व हार्डवेयर व्यापारी गाइड</span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="text-slate-300">Order 37 CPC &bull; NI Act s.138 &bull; MSMED Act</span>
          </div>

          {/* Exact H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box (with parent Hub link in first 250 words) */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              सांविधिक सारांश एवं कानूनी स्थिति (Executive Creditor Summary)
            </span>
            <p>
              यदि किसी बिल्डर, डेवलपर या सिविल ठेकेदार ने साइट पर सरिया (TMT), सीमेंट, RMC, गिट्टी-रेत, टाइल्स, प्लाईवुड या हार्डवेयर का माल उतरवाने के बाद लाखों रुपये का भुगतान रोक लिया है, तो हमारे{" "}
              <Link
                href="/industries/chemicals-steel-rmc-building-materials-recovery"
                className="text-red-400 underline hover:text-red-300 font-bold"
              >
                स्टील, सीमेंट, RMC और बिल्डिंग मटेरियल रिकवरी इंडस्ट्री हब
              </Link>{" "}
              के कानूनी ढांचे के तहत आप धर्मकांटा पर्ची, GST ई-वे बिल और लेज़र खातों के दम पर तेज़ कानूनी वसूली कर सकते हैं। Sale of Goods Act धारा 42 के अनुसार साइट पर माल खप जाने के बाद बिल्डर बाद में फर्जी कमी नहीं निकाल सकता, और Order XXXVII CPC व NI Act धारा 138/143A के तहत तुरंत रिकवरी संभव है।
            </p>
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="border-r border-white/10 pr-2">
              <span className="block text-[10px] sm:text-xs text-slate-400 font-medium">
                फास्ट-ट्रैक सिविल वसूली
              </span>
              <span className="text-base sm:text-lg md:text-xl font-black text-emerald-400">
                Order 37 CPC
              </span>
              <span className="block text-[10px] text-slate-400 mt-0.5">पक्के बिल व ई-वे बिल पर समरी सूट</span>
            </div>
            <div className="border-r border-white/10 pr-2">
              <span className="block text-[10px] sm:text-xs text-slate-400 font-medium">
                चेक बाउंस सुरक्षा
              </span>
              <span className="text-base sm:text-lg md:text-xl font-black text-red-400">
                धारा 138 / 143A
              </span>
              <span className="block text-[10px] text-slate-400 mt-0.5">30 दिन में नोटिस + 20% अंतरिम राशि</span>
            </div>
            <div className="border-r border-white/10 pr-2">
              <span className="block text-[10px] sm:text-xs text-slate-400 font-medium">
                MSME व टैक्स दबाव
              </span>
              <span className="text-base sm:text-lg md:text-xl font-black text-amber-400">
                3x ब्याज + 43B(h)
              </span>
              <span className="block text-[10px] text-slate-400 mt-0.5">45 दिन बाद बिल्डर पर टैक्स पेनल्टी</span>
            </div>
            <div>
              <span className="block text-[10px] sm:text-xs text-slate-400 font-medium">
                एडवोकेट लीगल नोटिस
              </span>
              <span className="text-base sm:text-lg md:text-xl font-black text-slate-100">
                मात्र ₹999
              </span>
              <span className="block text-[10px] text-slate-400 mt-0.5">Speed Post RPAD + WhatsApp + Email</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <Breadcrumbs
          items={[
            {
              label: "बिल्डिंग मटेरियल रिकवरी हब",
              href: "/industries/chemicals-steel-rmc-building-materials-recovery",
            },
            {
              label: "सरिया, सीमेंट व हार्डवेयर उधार वसूली गाइड",
              href: "/hi/building-material-sariya-cement-rmc-udhar-recovery-notice",
            },
          ]}
        />

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0 mt-4">
          {/* Left Sticky Sidebar TOC */}
          <BuildingMaterialRecoveryTOC />

          {/* Main Article Column */}
          <article lang="hi-IN" className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1 */}
            <section
              id="heading-building-crisis"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  सरिया, सीमेंट, RMC व हार्डवेयर व्यापारियों का उधारी संकट
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                भारत के टियर-1, टियर-2 और टियर-3 शहरों में हजारों{" "}
                <strong>सरिया (TMT Steel), सीमेंट, RMC (Ready-Mix Concrete), स्टोन क्रशर, रेत-गिट्टी, प्लाईवुड, टाइल्स, सैनेटरी और हार्डवेयर डीलर</strong>{" "}
                हर महीने करोड़ों रुपये का माल विश्वास और 15 से 30 दिन की उधारी (Credit) पर बिल्डरों और ठेकेदारों को भेजते हैं। शुरुआत में 2–4 गाड़ियों का पेमेंट समय पर आता है, लेकिन जैसे ही बकाया ₹5 लाख से ₹50 लाख के पार पहुंचता है, बिल्डर या ठेकेदार टालमटोल शुरू कर देते हैं।
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                व्यापारी अक्सर गूगल पर सर्च करते हैं —{" "}
                <em>&ldquo;builder thekedar se sariya cement building material ka paisa kaise nikale&rdquo;</em>,{" "}
                <em>&ldquo;dharamkanta parchi eway bill se court case kaise kare&rdquo;</em> या{" "}
                <em>&ldquo;thekedar site chhod kar bhag gaya paisa vasooli&rdquo;</em>। सच यह है कि बिना सही कानूनी रणनीति के बार-बार फोन करने या साइट के चक्कर लगाने से पैसा नहीं निकलता; इसके लिए पक्के डिजिटल सबूत और <strong>एडवोकेट लीगल नोटिस</strong> का वैधानिक दबाव जरूरी होता है।
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="text-xs font-bold text-[#DC2626] mb-1">1. कच्ची पर्ची बनाम पक्का बिल</p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    पक्का GST इनवॉइस, ई-वे बिल और धर्मकांटा पर्ची होने पर Order 37 समरी सूट में बिल्डर को बचाव की अनुमति भी मुश्किल से मिलती है।
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="text-xs font-bold text-[#DC2626] mb-1">2. माल खपने के बाद बहाने</p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    लेंटर पड़ने के महीनों बाद &lsquo;सरिया हल्का था&rsquo; या &lsquo;सीमेंट जम गया&rsquo; जैसे बहाने Sale of Goods Act धारा 42 के तहत अवैध हैं।
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="text-xs font-bold text-[#DC2626] mb-1">3. फ्लैट ऑफर का लालच</p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    &lsquo;कैश नहीं है, फ्लैट ले लो&rsquo; (Barter Trap) से सावधान रहें — कई बार वह फ्लैट बैंक के पास पहले से गिरवी होता है।
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: 5-Stage Recovery Workflow (SVG + Mobile Cards) */}
            <section
              id="heading-recovery-workflow-svg"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  5-चरणीय कानूनी वसूली प्रक्रिया (Step-by-Step)
                </h2>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                बिल्डिंग मटेरियल की उधारी निकालने के लिए कोर्ट-कचहरी के लंबे चक्कर लगाने से पहले नीचे दिए गए 5 क्रमबद्ध कानूनी चरण अपनाएं। 75% से अधिक मामलों में चरण 2 (एडवोकेट लीगल नोटिस) पर ही पेमेंट या सेटलमेंट हो जाता है:
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block overflow-x-auto bg-slate-900 rounded-xl p-5 border border-slate-800">
                <svg
                  width="820"
                  height="220"
                  viewBox="0 0 820 220"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto"
                  role="img"
                  aria-label="5-Stage Building Material Legal Recovery Workflow"
                >
                  <rect width="820" height="220" rx="12" fill="#0F172A" />
                  {/* Step 1 */}
                  <rect x="18" y="36" width="140" height="148" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <circle cx="42" cy="60" r="13" fill="#DC2626" />
                  <text x="42" y="64" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">1</text>
                  <text x="88" y="95" fill="#F8FAFC" fontSize="12" fontWeight="bold" textAnchor="middle">साक्ष्य संकलन</text>
                  <text x="88" y="116" fill="#94A3B8" fontSize="10" textAnchor="middle">धर्मकांटा पर्ची,</text>
                  <text x="88" y="132" fill="#94A3B8" fontSize="10" textAnchor="middle">GST ई-वे बिल,</text>
                  <text x="88" y="148" fill="#94A3B8" fontSize="10" textAnchor="middle">लेज़र व BSA 63</text>

                  <path d="M162 110 L182 110" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" />

                  {/* Step 2 */}
                  <rect x="184" y="36" width="140" height="148" rx="10" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <circle cx="208" cy="60" r="13" fill="#DC2626" />
                  <text x="208" y="64" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">2</text>
                  <text x="254" y="95" fill="#F8FAFC" fontSize="12" fontWeight="bold" textAnchor="middle">₹999 वकील नोटिस</text>
                  <text x="254" y="116" fill="#CBD5E1" fontSize="10" textAnchor="middle">Speed Post RPAD,</text>
                  <text x="254" y="132" fill="#CBD5E1" fontSize="10" textAnchor="middle">WhatsApp व ईमेल</text>
                  <text x="254" y="148" fill="#FCA5A5" fontSize="10" fontWeight="bold" textAnchor="middle">15 दिन अल्टीमेटम</text>

                  <path d="M328 110 L348 110" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" />

                  {/* Step 3 */}
                  <rect x="350" y="36" width="140" height="148" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <circle cx="374" cy="60" r="13" fill="#F59E0B" />
                  <text x="374" y="64" fill="#111827" fontSize="12" fontWeight="bold" textAnchor="middle">3</text>
                  <text x="420" y="95" fill="#F8FAFC" fontSize="12" fontWeight="bold" textAnchor="middle">MSME व टैक्स दबाव</text>
                  <text x="420" y="116" fill="#94A3B8" fontSize="10" textAnchor="middle">MSME Samadhaan,</text>
                  <text x="420" y="132" fill="#94A3B8" fontSize="10" textAnchor="middle">3x RBI ब्याज व</text>
                  <text x="420" y="148" fill="#FDE68A" fontSize="10" textAnchor="middle">43B(h) टैक्स हानि</text>

                  <path d="M494 110 L514 110" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" />

                  {/* Step 4 */}
                  <rect x="516" y="36" width="140" height="148" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <circle cx="540" cy="60" r="13" fill="#DC2626" />
                  <text x="540" y="64" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">4</text>
                  <text x="586" y="95" fill="#F8FAFC" fontSize="12" fontWeight="bold" textAnchor="middle">चेक बाउंस / समरी सूट</text>
                  <text x="586" y="116" fill="#94A3B8" fontSize="10" textAnchor="middle">NI Act s.138/143A</text>
                  <text x="586" y="132" fill="#94A3B8" fontSize="10" textAnchor="middle">या Order 37 CPC</text>
                  <text x="586" y="148" fill="#94A3B8" fontSize="10" textAnchor="middle">फास्ट-ट्रैक डिक्री</text>

                  <path d="M660 110 L680 110" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />

                  {/* Step 5 */}
                  <rect x="682" y="36" width="120" height="148" rx="10" fill="#064E3B" stroke="#10B981" strokeWidth="1.5" />
                  <circle cx="704" cy="60" r="13" fill="#10B981" />
                  <text x="704" y="64" fill="#064E3B" fontSize="12" fontWeight="bold" textAnchor="middle">5</text>
                  <text x="742" y="95" fill="#ECFDF5" fontSize="12" fontWeight="bold" textAnchor="middle">अटैचमेंट व वसूली</text>
                  <text x="742" y="116" fill="#A7F3D0" fontSize="10" textAnchor="middle">Order 38 Rule 5</text>
                  <text x="742" y="132" fill="#A7F3D0" fontSize="10" textAnchor="middle">बैंक खाता / RA बिल</text>
                  <text x="742" y="148" fill="#FFFFFF" fontSize="10" fontWeight="bold" textAnchor="middle">ब्याज सहित पेमेंट</text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="grid grid-cols-1 gap-3 md:hidden">
                {[
                  { n: "1", t: "साक्ष्य संकलन", d: "धर्मकांटा पर्ची, GST ई-वे बिल, पक्का बिल व BSA 2023 s.63 सर्टिफिकेट तैयार करें।" },
                  { n: "2", t: "₹999 एडवोकेट लीगल नोटिस", d: "Speed Post RPAD, WhatsApp और ईमेल से 15-दिवसीय वैधानिक चेतावनी भेजें।" },
                  { n: "3", t: "MSME Samadhaan व 43B(h)", d: "45 दिन बाद 3x RBI चक्रवृद्धि ब्याज व बिल्डर पर इनकम टैक्स डिडक्शन रोक की चेतावनी।" },
                  { n: "4", t: "NI Act s.138 या Order 37 CPC", d: "चेक बाउंस में 20% अंतरिम मुआवजा या सिविल समरी सूट से तेज़ डिक्री।" },
                  { n: "5", t: "Order 38 Rule 5 वसूली", d: "ठेकेदार के फरार होने पर बैंक खाता, मशीनरी या RA बिल पर कोर्ट अटैचमेंट।" },
                ].map((step) => (
                  <div key={step.n} className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                      {step.n}
                    </span>
                    <div>
                      <p className="text-xs font-bold text-white">{step.t}</p>
                      <p className="text-xs text-slate-300 mt-0.5">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Statutory Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  वैधानिक रिकवरी मैट्रिक्स (कानूनी धाराएं व समय-सीमा)
                </h2>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3 sm:p-4 font-bold">स्थिति / विवाद का प्रकार</th>
                      <th className="p-3 sm:p-4 font-bold">लागू कानून व धारा</th>
                      <th className="p-3 sm:p-4 font-bold">समय-सीमा</th>
                      <th className="p-3 sm:p-4 font-bold">व्यापारी को सीधा लाभ</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3 sm:p-4 font-semibold text-slate-900">पक्के बिल व ई-वे बिल पर भुगतान अटका</td>
                      <td className="p-3 sm:p-4 text-slate-700">CPC Order XXXVII (समरी सूट)</td>
                      <td className="p-3 sm:p-4 text-slate-700">3 वर्ष के भीतर</td>
                      <td className="p-3 sm:p-4 text-emerald-700 font-medium">बिल्डर को बिना कोर्ट अनुमति बचाव का हक नहीं</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3 sm:p-4 font-semibold text-slate-900">बिल्डर या ठेकेदार का चेक बाउंस</td>
                      <td className="p-3 sm:p-4 text-slate-700">NI Act s.138, 141 &amp; 143A</td>
                      <td className="p-3 sm:p-4 text-red-700 font-bold">30 दिन में नोटिस अनिवार्य</td>
                      <td className="p-3 sm:p-4 text-emerald-700 font-medium">2 साल तक सजा व 20% अंतरिम मुआवजा</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 font-semibold text-slate-900">उद्यम-पंजीकृत डीलर का बकाया (45+ दिन)</td>
                      <td className="p-3 sm:p-4 text-slate-700">MSMED Act s.15–18 व IT s.43B(h)</td>
                      <td className="p-3 sm:p-4 text-slate-700">45 दिन के बाद</td>
                      <td className="p-3 sm:p-4 text-emerald-700 font-medium">3x RBI चक्रवृद्धि ब्याज + बायर पर टैक्स पेनल्टी</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3 sm:p-4 font-semibold text-slate-900">माल साइट पर इस्तेमाल कर लेने के बाद बहाना</td>
                      <td className="p-3 sm:p-4 text-slate-700">Sale of Goods Act s.41 &amp; s.42</td>
                      <td className="p-3 sm:p-4 text-slate-700">अनलोडिंग के तुरंत बाद</td>
                      <td className="p-3 sm:p-4 text-emerald-700 font-medium">लेंटर/निर्माण में खपने पर माल स्वतः स्वीकृत</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 font-semibold text-slate-900">ठेकेदार साइट छोड़कर भागने की फिराक में</td>
                      <td className="p-3 sm:p-4 text-slate-700">CPC Order XXXVIII Rule 5</td>
                      <td className="p-3 sm:p-4 text-red-700 font-bold">तुरंत (Urgent)</td>
                      <td className="p-3 sm:p-4 text-emerald-700 font-medium">फैसले से पहले बैंक खाता व RA बिल फ्रीज</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Interactive Scenario Tabs */}
            <section id="heading-interactive-scenarios" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  4 व्यापारिक परिदृश्य व कानूनी समाधान (अपना केस चुनें)
                </h2>
              </div>
              <BuildingMaterialRecoveryScenarioTabs />
            </section>

            {/* Section 5: Barter Flat Trap */}
            <section
              id="heading-barter-flat-trap"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  &ldquo;कैश नहीं है, फ्लैट या दुकान ले लो&rdquo; — Barter ऑफर का खतरा
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                सरिया, सीमेंट, टाइल्स, लिफ्ट या प्लाईवुड सप्लायर्स के साथ सबसे बड़ा धोखा तब होता है जब बिल्डर बकाया ₹25–50 लाख नकद देने के बजाय अपने निर्माणाधीन प्रोजेक्ट में एक फ्लैट या दुकान (Barter Allotment) देने की बात करता है। व्यापारियों की सबसे आम क्वेरी होती है:{" "}
                <em>&ldquo;builder flat dene ki baat kar raha cash nahi de raha kya kare&rdquo;</em>।
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl text-xs sm:text-sm text-amber-950 space-y-2">
                <p className="font-bold">Barter फ्लैट स्वीकार करने से पहले 3 जरूरी जांच:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>CERSAI चार्ज सर्च:</strong> जांचें कि प्रोजेक्ट की जमीन और अनसोल्ड फ्लैट्स पर किसी बैंक या NBFC का मोर्टगेज (Loan Charge) तो नहीं है। गिरवी फ्लैट की अलॉटमेंट स्लिप का कोई कानूनी मोल नहीं होता।
                  </li>
                  <li>
                    <strong>RERA रजिस्ट्रेशन व कम्प्लीशन स्टेटस:</strong> राज्य RERA पोर्टल पर देखें कि प्रोजेक्ट का नाम डिफॉल्टर लिस्ट में तो नहीं है।
                  </li>
                  <li>
                    <strong>रजिस्टर्ड सेल एग्रीमेंट बनाम कच्ची पर्ची:</strong> भारतीय अनुबंध अधिनियम की धारा 62 के तहत आप बिना लिखित सहमति के कैश की जगह फ्लैट लेने को बाध्य नहीं हैं। यदि बिल्डर दबाव डाले, तो तुरंत कैश बिल पर ब्याज सहित लीगल नोटिस भेजें।
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 6: Worked Financial Ledger */}
            <section
              id="heading-financial-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  ₹18 लाख सरिया-सीमेंट बकाया व MSME 3x ब्याज का वित्तीय चार्ट
                </h2>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                मान लीजिए एक TMT सरिया व सीमेंट डीलर (Udyam Registered) ने एक बिल्डर को ₹18,00,000 का माल सप्लाई किया और पेमेंट 180 दिनों तक अटका रहा। देखिए केवल मूलधन नहीं, बल्कि कानूनन कितना कुल क्लेम बनता है:
              </p>

              <div className="bg-slate-900 text-white rounded-xl p-5 sm:p-6 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-700 pb-2 text-xs sm:text-sm">
                  <span className="text-slate-300">मूल बकाया राशि (TMT Steel + Cement Invoices)</span>
                  <span className="font-mono font-bold text-white">₹18,00,000</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-700 pb-2 text-xs sm:text-sm">
                  <span className="text-slate-300">MSMED Act s.16 ब्याज (45 दिन बाद 135 दिन @ 19.5% मासिक चक्रवृद्धि)</span>
                  <span className="font-mono font-bold text-emerald-400">+ ₹1,34,200 (लगभग)</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-700 pb-2 text-xs sm:text-sm">
                  <span className="text-slate-300">बिल्डर पर Income Tax s.43B(h) व GST ITC 180-दिन रिवर्सल दबाव</span>
                  <span className="font-mono font-bold text-amber-400">~₹5.40 लाख टैक्स नुकसान</span>
                </div>
                <div className="flex items-center justify-between pt-1 text-sm sm:text-base">
                  <span className="font-black text-white">लीगल नोटिस कुल क्लेम राशि (Principal + Interest)</span>
                  <span className="font-mono font-black text-emerald-400">₹19,34,200+</span>
                </div>
              </div>
            </section>

            {/* Section 7: Evidence Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  धर्मकांटा पर्ची, ई-वे बिल व BSA 2023 धारा 63 साक्ष्य चेकलिस्ट
                </h2>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                कोर्ट में <strong>Order 37 समरी सूट</strong> या <strong>MSME केस</strong> जीतने के लिए आपके पास निम्नलिखित 6 दस्तावेज व्यवस्थित होने चाहिए:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { t: "1. पक्का GST टैक्स इनवॉइस", d: "बिल पर खरीदार का सही GSTIN, डिलीवरी साइट का पता और 45-दिन क्रेडिट शर्त लिखी हो।" },
                  { t: "2. GST ई-वे बिल (Part-A & B)", d: "सरकारी पोर्टल से डाउनलोड किया गया ई-वे बिल जिसमें ट्रक नंबर और दूरी दर्ज हो।" },
                  { t: "3. कंप्यूटराइज्ड धर्मकांटा पर्ची", d: "सरिया, गिट्टी, रेत या स्क्रैप के ग्रॉस और नेट वजन की समय-स्टैम्प वाली पर्ची।" },
                  { t: "4. साइट डिलीवरी व ट्रांसपोर्ट बिल्टी", d: "ड्राइवर चालान, साइट गेट एंट्री टोकन या अनलोडिंग के समय ली गई जियो-टैग फोटो।" },
                  { t: "5. बैंक रिटर्न मेमो व बाउंस चेक", d: "यदि चेक बाउंस हुआ है, तो बैंक की मुहर लगा मूल Return Memo और चेक संभालकर रखें।" },
                  { t: "6. BSA 2023 धारा 63 सर्टिफिकेट", d: "WhatsApp चैट, ईमेल, Tally लेज़र और ई-वे बिल को अदालत में मान्य बनाने का डिजिटल प्रमाणपत्र।" },
                ].map((item) => (
                  <div key={item.t} className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <p className="text-xs font-extrabold text-slate-900 mb-1">{item.t}</p>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.d}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8: Supreme Court Precedents */}
            <section
              id="heading-judicial-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  सुप्रीम कोर्ट के प्रमुख फैसले (जो व्यापारियों की रक्षा करते हैं)
                </h2>
              </div>

              <div className="space-y-4">
                {CASE_CITATIONS.map((c) => (
                  <div
                    key={c.citation}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 relative overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626]" />
                    <div className="pl-2 space-y-1.5">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626]">
                          {c.court} &bull; {c.citation}
                        </span>
                        <span className="text-[10px] font-semibold bg-slate-200 text-slate-700 px-2 py-0.5 rounded">
                          {c.date}
                        </span>
                      </div>
                      <h3 className="text-sm sm:text-base font-black text-slate-900">{c.title}</h3>
                      <p className="text-xs font-semibold text-slate-600">{c.parties}</p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pt-1">{c.holding}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 9: Related Guides, Calculators & Templates */}
            <section
              id="heading-related-tools"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  संबंधित रिकवरी गाइड्स, MSME कैलकुलेटर व नोटिस टेम्पलेट्स
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/50 hover:bg-emerald-50 transition-colors"
                >
                  <span className="text-[10px] font-bold uppercase text-emerald-700">Interactive Calculator</span>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    MSME 3x ब्याज कैलकुलेटर (अपना बकाया ब्याज तुरंत जोड़ें) &rarr;
                  </p>
                </Link>
                <Link
                  href="/templates/legal-notice-reply-format"
                  className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <span className="text-[10px] font-bold uppercase text-[#DC2626]">Notice Template</span>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    कॉमर्शियल लीगल नोटिस फॉर्मेट व क्लॉज वर्कस्पेस &rarr;
                  </p>
                </Link>
                <Link
                  href="/tmt-steel-structural-iron-trader-credit-default-recovery-india"
                  className="p-4 rounded-xl border border-slate-200 bg-white hover:border-red-300 transition-colors"
                >
                  <p className="text-xs font-bold text-slate-900">
                    TMT Steel &amp; Structural Iron Trader Credit Recovery (English) &rarr;
                  </p>
                </Link>
                <Link
                  href="/ready-mix-concrete-rmc-supplier-builder-payment-cube-test-dispute"
                  className="p-4 rounded-xl border border-slate-200 bg-white hover:border-red-300 transition-colors"
                >
                  <p className="text-xs font-bold text-slate-900">
                    RMC Concrete Supplier Cube-Test Dispute Recovery (English) &rarr;
                  </p>
                </Link>
                <Link
                  href="/industrial-chemicals-solvents-dyes-pigments-invoice-recovery"
                  className="p-4 rounded-xl border border-slate-200 bg-white hover:border-red-300 transition-colors"
                >
                  <p className="text-xs font-bold text-slate-900">
                    Industrial Chemicals, Solvents &amp; Dyes Invoice Recovery &rarr;
                  </p>
                </Link>
                <Link
                  href="/law/order-37-summary-suit-money-recovery"
                  className="p-4 rounded-xl border border-slate-200 bg-white hover:border-red-300 transition-colors"
                >
                  <p className="text-xs font-bold text-slate-900">
                    Order 37 CPC Summary Suit Money Recovery Guide &rarr;
                  </p>
                </Link>
                <Link
                  href="/cheque-bounce-and-civil-suit-together"
                  className="p-4 rounded-xl border border-slate-200 bg-white hover:border-red-300 transition-colors"
                >
                  <p className="text-xs font-bold text-slate-900">
                    चेक बाउंस (s.138) और सिविल रिकवरी सूट एक साथ कैसे चलाएं? &rarr;
                  </p>
                </Link>
                <Link
                  href="/recovery/vendor-payments"
                  className="p-4 rounded-xl border border-slate-200 bg-white hover:border-red-300 transition-colors"
                >
                  <p className="text-xs font-bold text-slate-900">
                    B2B Vendor &amp; Supplier Pending Payment Recovery Portal &rarr;
                  </p>
                </Link>
              </div>
            </section>

            {/* Section 10: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  अक्सर पूछे जाने वाले सवाल (FAQ)
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group border border-slate-200 rounded-xl bg-slate-50/70 open:bg-white open:shadow-sm transition-all"
                  >
                    <summary className="cursor-pointer list-none p-4 font-bold text-xs sm:text-sm text-slate-900 flex items-center justify-between gap-3">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] font-mono text-base shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 11: Statutory Sources */}
            <section
              id="heading-statutory-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#404447] text-white text-xs font-black flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  विधिक कानून व आधिकारिक सरकारी पोर्टल
                </h2>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((src) => (
                  <li key={src.url} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold">&bull;</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline underline-offset-2"
                    >
                      {src.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            {/* Dual-Track B2B Conversion CTA */}
            <BuildingMaterialRecoveryCTA />
          </article>
        </div>
      </main>

      {/* Footer Cross-Links */}
      <RelatedRecoveryGuides />
    </div>
  );
}
