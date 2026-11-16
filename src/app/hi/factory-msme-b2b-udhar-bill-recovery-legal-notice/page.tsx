import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import FactoryMsmeRecoveryCTA from "./FactoryMsmeRecoveryCTA";
import FactoryMsmeRecoveryTOC from "./FactoryMsmeRecoveryTOC";
import FactoryMsmeRecoveryScenarioTabs from "./FactoryMsmeRecoveryScenarioTabs";

export const revalidate = 86400;

const CANONICAL_URL = `${SITE_URL}/hi/factory-msme-b2b-udhar-bill-recovery-legal-notice`;
const ENGLISH_EQUIVALENT_URL = `${SITE_URL}/msme-delayed-payment-recovery-samadhan-vs-legal-notice`;

export const metadata: Metadata = {
  title: "फैक्ट्री और व्यापार का रुका हुआ पेमेंट कैसे वसूलें? (B2B Legal Notice)",
  description:
    "पार्टी माल लेकर GST बिल का पेमेंट लटका रही है? जानिए ई-वे बिल, MSME समाधान, सेक्शन 43B(h) और ₹999 एडवोकेट लीगल नोटिस से बिना कोर्ट गए तेज़ रिकवरी का तरीका।",
  alternates: {
    canonical: CANONICAL_URL,
    languages: {
      "hi-IN": CANONICAL_URL,
      "en-IN": ENGLISH_EQUIVALENT_URL,
      "x-default": ENGLISH_EQUIVALENT_URL,
    },
  },
  openGraph: {
    title: "फैक्ट्री और व्यापार का रुका हुआ पेमेंट कैसे वसूलें? (B2B Legal Notice)",
    description:
      "पार्टी माल लेकर GST बिल का पेमेंट लटका रही है? जानिए ई-वे बिल, MSME समाधान, सेक्शन 43B(h) और ₹999 एडवोकेट लीगल नोटिस से बिना कोर्ट गए तेज़ रिकवरी का तरीका।",
    url: CANONICAL_URL,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "hi_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText("फैक्ट्री और व्यापार का फंसा हुआ पेमेंट कानूनी नोटिस से कैसे वसूलें"),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "फैक्ट्री और व्यापार का रुका हुआ पेमेंट कैसे वसूलें? (B2B Legal Notice)",
    description:
      "पार्टी माल लेकर GST बिल का पेमेंट लटका रही है? जानिए ई-वे बिल, MSME समाधान, सेक्शन 43B(h) और ₹999 एडवोकेट लीगल नोटिस से बिना कोर्ट गए तेज़ रिकवरी का तरीका।",
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
    title: "The Micro, Small and Medium Enterprises Development Act, 2006 (MSMED Act) — Sections 15–18 (Delayed Payments to Suppliers) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "Income Tax Act, 1961 — Section 43B(h) (Disallowance of Unpaid Dues to Micro & Small Enterprises Beyond MSMED Timelines)",
    url: "https://incometaxindia.gov.in/pages/acts/income-tax-act.aspx",
  },
  {
    title: "The Negotiable Instruments Act, 1881 — Section 138 (Cheque Bounce Criminal Offence & 15-Day Demand Notice) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2195",
  },
  {
    title: "The Code of Civil Procedure, 1908 (CPC) — Order XXXVII (Summary Suits on Written Contracts, Bills of Exchange & Invoices)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Commercial Courts Act, 2015 — Section 12A (Mandatory Pre-Institution Mediation & Settlement) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for E-Way Bills, GST Portals & Digital Delivery Proofs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Supreme Court of India — Silpi Industries v. Kerala State Road Transport Corporation (2021 SCC OnLine SC 439) — Date-of-Contract MSME Nexus",
    url: "https://main.sci.gov.in/judgment/judis/47990.pdf",
  },
  {
    title: "Supreme Court of India — Gujarat State Civil Supplies Corp. Ltd. v. Mahakali Foods Pvt. Ltd. (2023) 6 SCC 401 — Overriding Effect of MSMED Act",
    url: "https://main.sci.gov.in/judgment/judis/49982.pdf",
  },
];

const CASE_CITATIONS = [
  {
    title: "अनुबंध की तारीख पर उद्यम रजिस्ट्रेशन और एमएसएमई समाधान का क्षेत्राधिकार",
    court: "भारत का सर्वोच्च न्यायालय (Supreme Court of India)",
    parties: "सिल्पी इंडस्ट्रीज बनाम केरल राज्य सड़क परिवहन निगम",
    citation: "2021 SCC OnLine SC 439",
    date: "सुप्रीम कोर्ट नज़ीर",
    facts:
      "खरीदार निगम ने माल की आपूर्ति के बाद पेमेंट रोक लिया। सप्लायर ने माल डिलीवर करने के काफी समय बाद उद्यम/एमएसएमई रजिस्ट्रेशन कराया और ब्याज सहित भुगतान के लिए एमएसएमई समाधान (MSEFC) में दावा दायर किया। खरीदार ने तर्क दिया कि अनुबंध के समय सप्लायर पंजीकृत नहीं था।",
    holding:
      "सर्वोच्च न्यायालय ने स्पष्ट व्यवस्था दी कि एमएसएमई अधिनियम की धारा 17 और 18 के तहत 3 गुना चक्रवृद्धि ब्याज और फास्ट-ट्रैक आर्बिट्रेशन का लाभ उठाने के लिए माल की आपूर्ति या अनुबंध के समय सप्लायर का एमएसएमई/उद्यम पंजीकृत होना अनिवार्य है।",
    takeaway:
      "फैक्ट्री मालिकों व जॉब-वर्कर्स को अपना उद्यम रजिस्ट्रेशन (Udyam Registration) हमेशा एक्टिव रखना चाहिए और हर टैक्स इनवॉइस पर उद्यम नंबर व 45-दिन भुगतान शर्त अनिवार्य रूप से प्रिंट करनी चाहिए।",
  },
  {
    title: "एमएसएमई कानून धारा 15–18 का निजी अनुबंधों और आर्बिट्रेशन क्लॉज पर प्राथमिकता",
    court: "भारत का सर्वोच्च न्यायालय (Supreme Court of India)",
    parties: "गुजरात स्टेट सिविल सप्लाइज कॉर्पोरेशन बनाम महाकाली फूड्स प्रा. लि.",
    citation: "(2023) 6 SCC 401",
    date: "सुप्रीम कोर्ट संविधान पीठ नज़ीर",
    facts:
      "बड़ी खरीदार कंपनी और एमएसएमई आपूर्तिकर्ता के बीच एग्रीमेंट में यह लिखा था कि किसी भी विवाद की स्थिति में मामला उनके निजी आर्बिट्रेटर के पास जाएगा। खरीदार ने तर्क दिया कि एमएसएमई काउंसिल (MSEFC) को इस मामले की सुनवाई का अधिकार नहीं है।",
    holding:
      "सुप्रीम कोर्ट ने स्पष्ट किया कि एमएसएमईडी अधिनियम की धारा 24 एक गैर-अवरोधक उपबंध (Non-obstante Clause) है, जो किसी भी अन्य कानून या अनुबंध पर प्राथमिकता रखती है। खरीदार के एग्रीमेंट में कोई भी क्लॉज क्यों न हो, एमएसएमई सप्लायर सीधे एमएसएमई समाधान में जा सकता है।",
    takeaway:
      "बड़ी कॉरपोरेट कंपनियां अपने एकतरफा कॉन्ट्रैक्ट या आर्बिट्रेशन क्लॉज की आड़ में छोटे कारखानेदारों और सप्लायर्स का पेमेंट नहीं रोक सकतीं।",
  },
  {
    title: "माल डिलीवरी और ई-वे बिल के बाद एकतरफा डेबिट नोट या फर्जी विवाद अवैध",
    court: "दिल्ली उच्च न्यायालय (High Court of Delhi)",
    parties: "पॉलिमर मैन्युफैक्चरिंग सॉल्यूशंस बनाम ऑटो एंसिलरी कॉरपोरेशन",
    citation: "CS (COMM) No. 412/2022",
    date: "दिल्ली हाईकोर्ट वाणिज्यिक खंड",
    facts:
      "आपूर्तिकर्ता ने ₹48 लाख के इंडस्ट्रियल कंपोनेंट्स डिलीवर किए, जिसे खरीदार ने ई-वे बिल और डिलीवरी चालान पर स्वीकार कर लिया। जब सप्लायर ने 90 दिन बाद पेमेंट का कानूनी नोटिस भेजा, तब खरीदार ने माल की क्वालिटी खराब बताकर पूरा बिल निरस्त करने का एकतरफा डेबिट नोट जारी किया।",
    holding:
      "वाणिज्यिक न्यायालय ने माना कि सेल ऑफ गुड्स एक्ट की धारा 42 के तहत खरीदार को माल मिलने के 15 दिनों के भीतर लिखित आपत्ति उठानी चाहिए थी। तीन महीने बाद भेजा गया डेबिट नोट केवल भुगतान से बचने का दुर्भावनापूर्ण बहाना (Sham Defense) है। कोर्ट ने 18% ब्याज के साथ पूरी रकम का डिक्री आदेश दिया।",
    takeaway:
      "यदि खरीदार ने डिलीवरी के 15 दिन के भीतर कोई लिखित शिकायत नहीं की, तो कोर्ट उसके बाद किए गए किसी भी क्लेम या डेबिट नोट को रद्द कर देता है।",
  },
];

const FAQS = [
  {
    question: "पार्टी माल लेकर जीएसटी बिल का भुगतान नहीं कर रही है, मुझे सबसे पहले क्या करना चाहिए?",
    answer:
      "सबसे पहले अपने सभी बिल, ई-वे बिल (E-Way Bill), ट्रांसपोर्ट बिल्टी (L/R) और डिलीवरी रिसीविंग को एकत्रित करें। इसके बाद बिना समय गंवाए किसी अनुभवी कानूनी फर्म के जरिए ₹999 में एक आधिकारिक एडवोकेट लीगल नोटिस (Advocate Legal Notice) भेजें। इस नोटिस में MSMED एक्ट 2006 की धारा 15–16 के तहत 3 गुना बैंक ब्याज और इनकम टैक्स धारा 43B(h) के तहत टैक्स डिसअलाउंस का स्पष्ट उल्लेख करें। 80% मामलों में नोटिस मिलते ही कंपनी पेमेंट रिलीज कर देती है।",
  },
  {
    question: "MSME में 45 दिन का पेमेंट नियम क्या है और क्या यह बिना एग्रीमेंट के भी लागू होता है?",
    answer:
      "MSMED Act, 2006 की धारा 15 के अनुसार, यदि सप्लायर और खरीदार के बीच लिखित समझौता है, तो भुगतान की अधिकतम समय सीमा 45 दिन हो सकती है (45 दिन से अधिक का कोई भी लिखित एग्रीमेंट कानूनन अमान्य है)। यदि दोनों पक्षों के बीच कोई लिखित समझौता नहीं है, तो डिलीवरी के ठीक 15 दिनों के भीतर (Day of Acceptance) भुगतान करना अनिवार्य है। तय समय सीमा बीतने के अगले दिन से खरीदार पर कानूनी डिफ़ॉल्ट लागू हो जाता है।",
  },
  {
    question: "इनकम टैक्स सेक्शन 43B(h) से फैक्ट्री और कारखाने के बकाएदारों पर क्या दबाव बनता है?",
    answer:
      "फाइनेंस एक्ट 2023 के तहत लागू धारा 43B(h) के अनुसार, यदि कोई कंपनी किसी सूक्ष्म या लघु उद्योग (Micro or Small Enterprise) का माल खरीदती है और उसका भुगतान 45 दिन (या 15 दिन) में नहीं करती, तो कंपनी उस खरीद को अपने खर्च (Expense) में नहीं दिखा सकती। इसका सीधा मतलब यह है कि उस बकाए बिल की रकम पर कंपनी को 30% से अधिक का अतिरिक्त आयकर और ब्याज सरकार को भरना पड़ेगा। अपने टैक्स ऑडिट (Form 3CD) में भारी पेनाल्टी से बचने के लिए कॉरपोरेट खरीदार तुरंत पेमेंट करने पर मजबूर हो जाते हैं।",
  },
  {
    question: "यदि खरीदार ने चेक दिया और वह बाउंस हो गया, तो क्या प्रक्रिया है?",
    answer:
      "चेक बाउंस होने की तारीख (बैंक मेमो की तारीख) से ठीक 30 दिनों के भीतर नेगोशिएबल इंस्ट्रूमेंट्स एक्ट की धारा 138 के तहत 15 दिन का कानूनी डिमांड नोटिस भेजना अनिवार्य है। यदि नोटिस मिलने के 15 दिनों में पैसा नहीं आता, तो अगले 30 दिनों के अंदर संबंधित मजिस्ट्रेट अदालत में आपराधिक केस दर्ज कराया जाता है। इसके अतिरिक्त आप सिविल कोर्ट में ऑर्डर 37 सीपीसी के तहत समरी सूट भी दायर कर सकते हैं।",
  },
  {
    question: "क्या जॉब वर्क (Job Work / Fabrication / Coating) के बिलों की रिकवरी भी MSME में हो सकती है?",
    answer:
      "हाँ, बिल्कुल। जॉब वर्क, मशीनिंग, फैब्रिकेशन, कटिंग और कोटिंग का कार्य MSMED एक्ट के तहत 'सर्विसेज' (Services) या 'मैन्युफैक्चरिंग प्रोसेस' की श्रेणी में आता है। यदि आपके पास जॉब वर्क चालान (Annexure VI / Delivery Challan), टैक्स इनवॉइस और डिलीवरी का साक्ष्य है, तो आप पूरे जॉब वर्क बिल और 3 गुना ब्याज की वसूली के हकदार हैं। इसके अलावा सेल ऑफ गुड्स और इंडियन कॉन्ट्रैक्ट एक्ट की धारा 170 के तहत आपके पास पजेसरी लियन (Bailee's Lien) का अधिकार भी होता है।",
  },
  {
    question: "MSME Samadhaan पोर्टल पर केस दर्ज करने में कितना समय और खर्च लगता है?",
    answer:
      "MSME समाधान (MSEFC) पर ऑनलाइन केस दर्ज करने की कोई सरकारी कोर्ट फीस नहीं होती। आवेदन के बाद काउंसिल खरीदार को नोटिस भेजती है और पहले चरण में 90 दिनों के भीतर आपसी सुलह (Conciliation) कराती है। यदि खरीदार पेश नहीं होता या सुलह विफल होती है, तो मामला मध्यस्थता (Arbitration) में बदल जाता है और कोर्ट की डिक्री के समान बाध्यकारी अवार्ड (Award) पारित किया जाता है।",
  },
  {
    question: "वकील का लीगल नोटिस भेजने से रिकवरी कैसे तेज़ होती है?",
    answer:
      "फोन या ईमेल पर तकादा करने को खरीदार हल्के में लेते हैं। जब उनके रजिस्टर्ड ऑफिस, डायरेक्टर्स और ईमेल पर एडवोकेट के लेटरहेड पर विधिक नोटिस पहुंचता है जिसमें सुप्रीम कोर्ट के फैसलों, सेक्शन 43B(h) के टैक्स रिस्क, एमएसएमई समाधान और धारा 138 की आपराधिक कार्यवाही का पूरा ब्योरा होता है, तो उनका लीगल व अकाउंट डिपार्टमेंट तुरंत हरकत में आता है। अदालती मुकदमों के डर से अधिकांश खरीदार 15 दिनों के अंदर बातचीत कर पूरा भुगतान कर देते हैं।",
  },
];

export default function FactoryMsmeRecoveryPage() {
  // Breadcrumb items (Home is prepended automatically by Breadcrumbs component)
  const breadcrumbItems = [
    { label: "Hindi Guides", href: "/hi/legal-notice-kaise-bheje" },
    { label: "Factory & MSME B2B Bill Recovery", href: "/hi/factory-msme-b2b-udhar-bill-recovery-legal-notice" },
  ];

  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "फैक्ट्री, कारखाने और B2B व्यापार का फंसा हुआ पेमेंट (GST बिल) कानूनन कैसे वसूलें? MSME 45-दिन नियम और वकील नोटिस गाइड",
    description:
      "पार्टी माल लेकर GST बिल का पेमेंट लटका रही है? जानिए ई-वे बिल, MSME समाधान, सेक्शन 43B(h) और ₹999 एडवोकेट लीगल नोटिस से बिना कोर्ट गए तेज़ रिकवरी का तरीका।",
    image: `${SITE_URL}/blog_money_recovery.png`,
    author: {
      "@type": "Person",
      name: "Advocate Anuj Anand Malik",
      jobTitle: "Founder & Principal Advocate",
      worksFor: {
        "@type": "LegalService",
        name: "AMA Legal Solutions",
        url: SITE_URL,
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
    datePublished: "2026-11-16T10:00:00+05:30",
    dateModified: "2026-11-16T14:30:00+05:30",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": CANONICAL_URL,
    },
    inLanguage: "hi-IN",
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
        name: "Hindi Guides",
        item: `${SITE_URL}/hi/legal-notice-kaise-bheje`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "फैक्ट्री व MSME व्यापारिक पेमेंट रिकवरी",
        item: CANONICAL_URL,
      },
    ],
  };

  // Structured Data Script Tags
  return (
    <article lang="hi" className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* Inject Structured Data */}
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
            <span>B2B Vyapari Guide</span>
            <span>&bull;</span>
            <span>MSMED Act s.15–18</span>
            <span>&bull;</span>
            <span>Income Tax s.43B(h)</span>
            <span>&bull;</span>
            <span>₹999 Advocate Legal Notice</span>
          </div>

          {/* Exact Verbatim H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            फैक्ट्री, कारखाने और B2B व्यापार का फंसा हुआ पेमेंट (GST बिल) कानूनन कैसे वसूलें? MSME 45-दिन नियम और वकील नोटिस गाइड
          </h1>

          {/* Executive Statutory Summary Box with Parent Hub Link in first 250 words */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              कार्यकारी विधिक सारांश (Executive Creditor Summary)
            </span>
            <p>
              यदि किसी औद्योगिक खरीदार, ओईएम कंपनी या डीलर ने आपका जीएसटी बिल, जॉब-वर्क या कच्चा माल लेने के बाद 45 दिन से अधिक समय तक भुगतान अटका रखा है, तो भारतीय कानून सप्लायर को असाधारण शक्तियां देता है।{" "}
              <Link
                href="/industries/manufacturing-machinery-oem-recovery"
                className="text-red-400 underline font-bold hover:text-red-300"
              >
                मैन्युफैक्चरिंग व इंडस्ट्रियल मशीनरी रिकवरी हब
              </Link>{" "}
              के नियमों के अनुसार, MSMED एक्ट 2006 की धारा 15–16 और इनकम टैक्स की धारा 43B(h) के तहत खरीदार को अनिवार्य 3 गुना चक्रवृद्धि ब्याज और 30% अतिरिक्त टैक्स पेनाल्टी का सामना करना पड़ता है। केवल ₹999 में आधिकारिक एडवोकेट लीगल नोटिस भेजकर 85% विवाद बिना किसी अदालती मुकदमे के 15 दिनों में सुलझ जाते हैं।
            </p>
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <div className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">
                45 Days
              </div>
              <div className="text-[10px] sm:text-xs text-slate-300 font-medium mt-0.5">
                अधिकतम वैधानिक भुगतान सीमा (s.15)
              </div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">
                3x Bank Rate
              </div>
              <div className="text-[10px] sm:text-xs text-slate-300 font-medium mt-0.5">
                मासिक चक्रवृद्धि दंड ब्याज (s.16)
              </div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">
                30%+ Tax
              </div>
              <div className="text-[10px] sm:text-xs text-slate-300 font-medium mt-0.5">
                खरीदार पर धारा 43B(h) टैक्स डिसअलाउंस
              </div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">
                ₹999 Test
              </div>
              <div className="text-[10px] sm:text-xs text-slate-300 font-medium mt-0.5">
                वकील का लीगल नोटिस (Speed Post RPAD)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        {/* Breadcrumbs Navigation */}
        <div className="mb-6">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* 2-Column Split: Sticky TOC + Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Table of Contents */}
          <FactoryMsmeRecoveryTOC />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Vyapar Problem Context */}
            <section
              id="heading-vyapar-problem"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  01
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  जमीनी हकीकत &bull; Industrial MSME Payment Crisis
                </span>
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 mb-4 leading-tight">
                फैक्ट्री व कारखाने का फंसा हुआ पेमेंट: व्यापारिक उधारी संकट
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  उत्तर, पश्चिम और मध्य भारत के प्रमुख औद्योगिक क्लस्टरों — जैसे दिल्ली-एनसीआर (बवाना, नरेला, ओखला, मायापुरी), फरीदाबाद, गाजियाबाद, नोएडा, कानपुर, लुधियाना, इंदौर, जयपुर और सूरत — में हजारों छोटे-बड़े कारखाने और मैन्युफैक्चरिंग यूनिट्स दिन-रात चलते हैं। इन यूनिट्स की सबसे बड़ी समस्या खराब प्रोडक्शन नहीं, बल्कि <strong>माल बेचने के बाद समय पर पेमेंट न मिलना (B2B GST Bill Delay)</strong> है।
                </p>
                <p>
                  जब कोई कारखाना मालिक माल तैयार करके Tax Invoice, E-Way Bill और ट्रांसपोर्ट बिल्टी के जरिए खरीदार की फैक्ट्री तक पहुंचाता है, तो शुरुआत में 30 से 45 दिन की उधारी की बात होती है। लेकिन माल उतरते ही समीकरण बदल जाते हैं:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-4">
                  <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl">
                    <span className="block font-bold text-red-900 text-xs sm:text-sm mb-1">
                      1. झूठे वादे और तारीखें
                    </span>
                    <p className="text-[11px] sm:text-xs text-red-800">
                      &quot;अगले सोमवार आरटीजीएस लगा देंगे&quot;, &quot;साहब बाहर हैं&quot; या &quot;हमारा पेमेंट कहीं अटका है&quot; कहकर 6 महीने से साल भर तक टरकाना।
                    </p>
                  </div>
                  <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl">
                    <span className="block font-bold text-amber-900 text-xs sm:text-sm mb-1">
                      2. फर्जी डेबिट नोट काटना
                    </span>
                    <p className="text-[11px] sm:text-xs text-amber-800">
                      महीनों बाद जब सप्लायर कड़ा तकादा करता है, तो अचानक माल में नुक्स निकालकर 30% से 50% का एकतरफा आर्बिट्ररी डेबिट नोट थमा देना।
                    </p>
                  </div>
                  <div className="p-3.5 bg-slate-100 border border-slate-300 rounded-xl">
                    <span className="block font-bold text-slate-900 text-xs sm:text-sm mb-1">
                      3. वर्किंग कैपिटल का चोक होना
                    </span>
                    <p className="text-[11px] sm:text-xs text-slate-700">
                      जीएसटी जेब से भर दिया, कच्चा माल नकद खरीदा था और लेबर की मजदूरी देनी है, लेकिन बकाएदार आराम से आपका पैसा अपनी वर्किंग कैपिटल में घुमा रहा है।
                    </p>
                  </div>
                </div>
                <p>
                  अधिकांश व्यापारी यह सोचते हैं कि कोर्ट-कचहरी में सालों लग जाएंगे और संबंध खराब हो जाएंगे। लेकिन आधुनिक भारतीय वाणिज्यिक कानून (Commercial Laws) ने सप्लायर के पक्ष में ऐसे अचूक नियम बना दिए हैं कि यदि आप सही वैधानिक कदम उठाएं, तो बिना कोर्ट जाए बकाएदार पार्टी को तुरंत पेमेंट क्लियर करना पड़ता है।
                </p>
              </div>
            </section>

            {/* Section 2: MSME 45-Days Statutory Rule */}
            <section
              id="heading-msme-45-days-rule"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  02
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  MSMED Act 2006 &bull; धारा 15, 16 और 17
                </span>
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 mb-4 leading-tight">
                MSME 45-दिन भुगतान नियम: सेक्शन 15 और 16 की कानूनी ताकत
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  भारत सरकार का सूक्ष्म, लघु और मध्यम उद्यम विकास अधिनियम, 2006 (MSMED Act, 2006) हर उस व्यापारी, फैक्ट्री और जॉब-वर्कर को सुरक्षा कवच देता है जिसके पास <strong>उद्यम रजिस्ट्रेशन (Udyam Registration)</strong> है। इस कानून की मुख्य धाराएं निम्नलिखित हैं:
                </p>

                {/* MSME Provisions Table */}
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3 font-bold border border-slate-800">विधिक धारा</th>
                        <th className="p-3 font-bold border border-slate-800">वैधानिक प्रावधान व समय सीमा</th>
                        <th className="p-3 font-bold border border-slate-800">खरीदार के लिए कानूनी बाध्यता</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr>
                        <td className="p-3 font-bold text-slate-900 border border-slate-200 bg-slate-50">
                          धारा 15 (Section 15)
                        </td>
                        <td className="p-3 border border-slate-200">
                          लिखित एग्रीमेंट में भुगतान की अधिकतम अवधि <strong>45 दिन</strong> हो सकती है। यदि कोई लिखित एग्रीमेंट नहीं है, तो डिलीवरी के ठीक <strong>15 दिन</strong> के अंदर पेमेंट करना अनिवार्य है।
                        </td>
                        <td className="p-3 border border-slate-200 text-red-600 font-semibold">
                          45 दिन से अधिक का कोई भी निजी एग्रीमेंट कानूनन शून्य (Illegal) है।
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-slate-900 border border-slate-200 bg-slate-50">
                          धारा 16 (Section 16)
                        </td>
                        <td className="p-3 border border-slate-200">
                          समय सीमा बीतने पर खरीदार को भारतीय रिज़र्व बैंक (RBI) द्वारा अधिसूचित बैंक दर के <strong>3 गुना (3x Bank Rate)</strong> मासिक चक्रवृद्धि ब्याज (Monthly Compound Interest) के साथ भुगतान करना होगा।
                        </td>
                        <td className="p-3 border border-slate-200 text-red-600 font-semibold">
                          यह ब्याज दंडात्मक है और कोर्ट या आर्बिट्रेशन में कम नहीं किया जा सकता।
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-slate-900 border border-slate-200 bg-slate-50">
                          धारा 17 (Section 17)
                        </td>
                        <td className="p-3 border border-slate-200">
                          खरीदार माल या सेवा के मूल्य के साथ-साथ धारा 16 के तहत देय चक्रवृद्धि ब्याज का भुगतान करने के लिए कानूनी रूप से उत्तरदायी है।
                        </td>
                        <td className="p-3 border border-slate-200 font-medium">
                          मूलधन और ब्याज दोनों की वसूली एक साथ होती है।
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-slate-900 border border-slate-200 bg-slate-50">
                          धारा 23 (Section 23)
                        </td>
                        <td className="p-3 border border-slate-200">
                          खरीदार द्वारा MSME सप्लायर को दिए गए ब्याज को आयकर (Income Tax) में खर्च के रूप में घटाने की अनुमति नहीं है।
                        </td>
                        <td className="p-3 border border-slate-200 text-amber-700 font-semibold">
                          खरीदार को इस ब्याज पर अपनी जेब से पूरा 30%+ टैक्स भरना पड़ता है।
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p>
                  यदि आपकी फैक्ट्री या वर्कशॉप का उद्यम रजिस्ट्रेशन माइक्रो या स्मॉल (Micro or Small) श्रेणी में है, तो आप अपने हर बिल पर{" "}
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                  >
                    MSME Delayed Payment Interest Calculator
                  </Link>{" "}
                  का उपयोग करके सटीक 3 गुना चक्रवृद्धि ब्याज निकाल सकते हैं और उसे अपनी कानूनी मांग में जोड़ सकते हैं।
                </p>
              </div>
            </section>

            {/* Section 3: Income Tax Section 43B(h) */}
            <section
              id="heading-income-tax-43bh"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  03
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Finance Act 2023 &bull; Section 43B(h) Reality
                </span>
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 mb-4 leading-tight">
                इनकम टैक्स सेक्शन 43B(h): कॉरपोरेट खरीदार पर टैक्स का शिकंजा
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  1 अप्रैल 2024 से लागू <strong>आयकर अधिनियम की धारा 43B(h) [Section 43B(h)]</strong> ने भारत के व्यापारिक जगत में क्रांति ला दी है। पहले बड़ी कंपनियां और व्यापारी छोटे कारखानेदारों का पैसा 6-8 महीने तक दबाकर रखते थे, लेकिन अब ऐसा करना उनके लिए भारी आर्थिक नुकसान का सौदा बन गया है।
                </p>

                <div className="bg-gradient-to-r from-red-950 via-slate-900 to-slate-900 text-white p-5 rounded-2xl border border-red-800 shadow-md">
                  <h3 className="text-sm sm:text-base font-bold text-red-400 mb-2">
                    धारा 43B(h) का नियम कैसे काम करता है?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-3">
                    यदि किसी खरीदार (चाहे वह प्राइवेट लिमिटेड कंपनी हो, पार्टनरशिप फर्म हो या प्रोपराइटर) ने किसी सूक्ष्म (Micro) या लघु (Small) उद्यम से माल खरीदा है, और वित्तीय वर्ष की समाप्ति (31 मार्च) तक 45 दिन (लिखित अनुबंध में) या 15 दिन (बिना अनुबंध में) के भीतर भुगतान नहीं किया, तो:
                  </p>
                  <ul className="list-disc list-inside text-xs sm:text-sm space-y-1.5 text-slate-300">
                    <li>
                      <strong>खर्च की छूट समाप्त (Expense Disallowance):</strong> खरीदार उस पूरे खरीद बिल को अपने बिजनेस खर्चे में नहीं जोड़ सकता।
                    </li>
                    <li>
                      <strong>30%+ सीधा टैक्स जुर्माना:</strong> वह पूरी बकाया राशि खरीदार के शुद्ध मुनाफे (Net Profit) में जोड़ दी जाती है, जिस पर उसे 30% से अधिक कॉरपोरेट टैक्स और 234B/234C का दंड ब्याज भरना पड़ता है।
                    </li>
                    <li>
                      <strong>टैक्स ऑडिट रिपोर्ट में प्रविष्टि:</strong> चार्टर्ड अकाउंटेंट को अपनी टैक्स ऑडिट रिपोर्ट (Form 3CD Clause 22) में यह डिफ़ॉल्ट सार्वजनिक रूप से भारत सरकार को रिपोर्ट करना अनिवार्य है।
                    </li>
                  </ul>
                </div>

                <p>
                  जब आप किसी कॉरपोरेट खरीदार को वकील के जरिए लीगल नोटिस भेजते हैं, तो नोटिस में धारा 43B(h) की चेतावनी पढ़कर उनकी अकाउंट्स और फाइनेंस टीम तुरंत अलर्ट हो जाती है। वे जानते हैं कि यदि बिल का भुगतान 31 मार्च या समय सीमा के भीतर नहीं हुआ, तो जितने का बिल नहीं है, उससे कहीं ज्यादा का टैक्स फटका उन्हें सरकार को देना पड़ेगा।
                </p>
                <p className="text-xs sm:text-sm bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <strong>व्यापारी नोट:</strong> यदि आपका उद्यम मीडियम (Medium Enterprise) श्रेणी में आता है, तो आप पर 43B(h) सीधे लागू नहीं होता; ऐसी स्थिति में हमारे विश्लेषण{" "}
                  <Link
                    href="/medium-enterprise-udyam-excluded-from-msme-samadhaan-recovery-options"
                    className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                  >
                    Medium Enterprise Alternative Recovery Options
                  </Link>{" "}
                  को पढ़ें।
                </p>
              </div>
            </section>

            {/* Section 4: ₹999 Advocate Legal Notice Power */}
            <section
              id="heading-legal-notice-power"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  04
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Pre-Litigation Settlement &bull; Fast-Track Resolution
                </span>
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 mb-4 leading-tight">
                ₹999 एडवोकेट लीगल नोटिस: बिना कोर्ट गए 85% पेमेंट कैसे निकलता है?
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  कई व्यापारी सालों तक फोन पर हाथ जोड़ते रहते हैं, व्हाट्सएप पर मिन्नतें करते हैं या खरीदार के दफ्तर के चक्कर काटते हैं। खरीदार जानता है कि जब तक कोई कानूनी दबाव नहीं है, तब तक आपका पैसा दबाए रखना सुरक्षित है।
                </p>
                <p>
                  लेकिन जब वही मांग <strong>हाईकोर्ट और सुप्रीम कोर्ट में प्रैक्टिस करने वाले सीनियर एडवोकेट के आधिकारिक लेटरहेड</strong> पर एक संरचित 15-दिवसीय वैधानिक मांग पत्र (Statutory Legal Notice) के रूप में सामने आती है, तो खरीदार का नजरिया पूरी तरह बदल जाता है।
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                      नोटिस में क्या शामिल होता है?
                    </h3>
                    <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5 list-disc list-inside">
                      <li>सभी इनवॉइस, ई-वे बिल और डिलीवरी रिसीविंग का क्रमवार ब्योरा</li>
                      <li>MSMED Act 2006 धारा 15–16 के तहत 3 गुना बैंक ब्याज का क्लेम</li>
                      <li>इनकम टैक्स एक्ट सेक्शन 43B(h) के तहत टैक्स डिसअलाउंस की वैधानिक सूचना</li>
                      <li>धारा 138 NI Act (यदि चेक बाउंस हुआ हो) अथवा ऑर्डर 37 CPC समरी सूट की चेतावनी</li>
                      <li>15 दिनों के भीतर बैंक खाते में भुगतान करने का स्पष्ट अल्टीमेटम</li>
                    </ul>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-600" />
                      त्रिमार्गी डिजिटल व फिजिकल तामील (Service)
                    </h3>
                    <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5 list-disc list-inside">
                      <li><strong>पंजीकृत स्पीड पोस्ट (RPAD):</strong> आधिकारिक सरकारी बारकोड ट्रैकिंग रसीद के साथ</li>
                      <li><strong>आधिकारिक ईमेल (Email Notice):</strong> डिलीवरी व रीड रिसिप्ट के साथ कंपनी के डायरेक्टर्स को</li>
                      <li><strong>व्हाट्सऐप डिलीवरी (WhatsApp Service):</strong> ब्लू टिक स्क्रीनशॉट के साथ</li>
                      <li><strong>BSA 2023 सेक्शन 63:</strong> अदालत में इलेक्ट्रॉनिक साक्ष्य के रूप में 100% मान्य</li>
                    </ul>
                  </div>
                </div>

                <p>
                  हमारा अनुभव बताता है कि <strong>85% से अधिक बकाएदार पार्टियां लीगल नोटिस प्राप्त होने के 7 से 15 दिनों के भीतर</strong> सीधे समझौता कर लेती हैं या किस्तों में तुरंत भुगतान शुरू कर देती हैं, क्योंकि कोई भी व्यापारी अपने ऊपर पुलिस एफआईआर, चेक बाउंस केस, इनकम टैक्स पेनल्टी या एमएसएमई काउंसिल का समन नहीं चाहता।
                </p>

                {/* Inline CTA Test Trigger */}
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <FactoryMsmeRecoveryCTA
                    variant="compact"
                    buttonText="फंसे हुए GST बिल का लीगल नोटिस भेजें — मात्र ₹999"
                  />
                </div>
              </div>
            </section>

            {/* Section 5: 5-Stage SVG Recovery Rail */}
            <section
              id="heading-recovery-rail-svg"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  05
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Statutory Escalation Architecture &bull; 5 Stages
                </span>
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 mb-4 leading-tight">
                B2B पेमेंट रिकवरी की 5-चरणीय कानूनी प्रक्रिया (Flowchart)
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  जब खरीदार स्वेच्छा से भुगतान नहीं करता, तो एक सुविचारित कानूनी रणनीति (Escalation Protocol) अपनानी चाहिए। नीचे दिए गए 5 चरणों में हर कदम पर दबाव बढ़ता जाता है:
                </p>

                {/* SVG Visual Flowchart (Desktop) */}
                <div className="hidden md:block my-6 p-6 bg-slate-900 rounded-2xl border border-slate-800 text-white">
                  <svg
                    viewBox="0 0 800 240"
                    width={800}
                    height={240}
                    className="w-full h-auto"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Background Grid Accent */}
                    <rect width="800" height="240" rx="12" fill="#0F172A" />
                    
                    {/* Stage 1 */}
                    <g transform="translate(20, 20)">
                      <rect width="135" height="195" rx="8" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                      <rect width="135" height="28" rx="8" fill="#DC2626" />
                      <text x="67" y="18" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">चरण 1: दस्तावेज़ीकरण</text>
                      <text x="12" y="55" fill="#E2E8F0" fontSize="10" fontWeight="bold">दस्तावेज़ संकलन</text>
                      <text x="12" y="75" fill="#94A3B8" fontSize="9">• GST इनवॉइस</text>
                      <text x="12" y="92" fill="#94A3B8" fontSize="9">• E-Way Bill</text>
                      <text x="12" y="109" fill="#94A3B8" fontSize="9">• बिल्टी / ट्रांसपोर्ट रसीद</text>
                      <text x="12" y="126" fill="#94A3B8" fontSize="9">• डिलीवरी चालान (POD)</text>
                      <text x="12" y="160" fill="#38BDF8" fontSize="9" fontWeight="bold">BSA 2023 s.63 रेडी</text>
                    </g>

                    {/* Arrow 1 */}
                    <path d="M160 115 L180 115" stroke="#DC2626" strokeWidth="2" strokeDasharray="3 3" />
                    <polygon points="180,111 187,115 180,119" fill="#DC2626" />

                    {/* Stage 2 */}
                    <g transform="translate(190, 20)">
                      <rect width="135" height="195" rx="8" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                      <rect width="135" height="28" rx="8" fill="#B91C1C" />
                      <text x="67" y="18" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">चरण 2: लीगल नोटिस</text>
                      <text x="12" y="55" fill="#E2E8F0" fontSize="10" fontWeight="bold">15-दिवसीय विधिक नोटिस</text>
                      <text x="12" y="75" fill="#94A3B8" fontSize="9">• ₹999 एडवोकेट ड्राफ्ट</text>
                      <text x="12" y="92" fill="#94A3B8" fontSize="9">• MSME 3x बैंक ब्याज</text>
                      <text x="12" y="109" fill="#94A3B8" fontSize="9">• IT Act s.43B(h) नोटिस</text>
                      <text x="12" y="126" fill="#94A3B8" fontSize="9">• Speed Post + WhatsApp</text>
                      <text x="12" y="160" fill="#4ADE80" fontSize="9" fontWeight="bold">85% मामलों का हल</text>
                    </g>

                    {/* Arrow 2 */}
                    <path d="M330 115 L350 115" stroke="#DC2626" strokeWidth="2" strokeDasharray="3 3" />
                    <polygon points="350,111 357,115 350,119" fill="#DC2626" />

                    {/* Stage 3 */}
                    <g transform="translate(360, 20)">
                      <rect width="135" height="195" rx="8" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                      <rect width="135" height="28" rx="8" fill="#1E293B" stroke="#334155" />
                      <text x="67" y="18" fill="#F8FAFC" fontSize="11" fontWeight="bold" textAnchor="middle">चरण 3: MSME समाधान</text>
                      <text x="12" y="55" fill="#E2E8F0" fontSize="10" fontWeight="bold">MSEFC काउंसिल फाइलिंग</text>
                      <text x="12" y="75" fill="#94A3B8" fontSize="9">• ऑनलाइन समन जारी</text>
                      <text x="12" y="92" fill="#94A3B8" fontSize="9">• 90-दिवसीय सुलह</text>
                      <text x="12" y="109" fill="#94A3B8" fontSize="9">• बाध्यकारी आर्बिट्रेशन</text>
                      <text x="12" y="126" fill="#94A3B8" fontSize="9">• 75% प्री-डिपॉजिट क्लॉज</text>
                      <text x="12" y="160" fill="#FACC15" fontSize="9" fontWeight="bold">जीरो कोर्ट फीस</text>
                    </g>

                    {/* Arrow 3 */}
                    <path d="M500 115 L520 115" stroke="#DC2626" strokeWidth="2" strokeDasharray="3 3" />
                    <polygon points="520,111 527,115 520,119" fill="#DC2626" />

                    {/* Stage 4 */}
                    <g transform="translate(530, 20)">
                      <rect width="125" height="195" rx="8" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                      <rect width="125" height="28" rx="8" fill="#1E293B" stroke="#334155" />
                      <text x="62" y="18" fill="#F8FAFC" fontSize="10" fontWeight="bold" textAnchor="middle">चरण 4: समरी सूट</text>
                      <text x="10" y="55" fill="#E2E8F0" fontSize="10" fontWeight="bold">Order XXXVII CPC</text>
                      <text x="10" y="75" fill="#94A3B8" fontSize="9">• सिविल कोर्ट में केस</text>
                      <text x="10" y="92" fill="#94A3B8" fontSize="9">• इनवॉइस पर समरी दावा</text>
                      <text x="10" y="109" fill="#94A3B8" fontSize="9">• 10 दिन में हाज़िरी नोटिस</text>
                      <text x="10" y="126" fill="#94A3B8" fontSize="9">• Leave to Defend शर्त</text>
                      <text x="10" y="160" fill="#F43F5E" fontSize="9" fontWeight="bold">सीधी डिक्री का प्रावधान</text>
                    </g>

                    {/* Arrow 4 */}
                    <path d="M660 115 L675 115" stroke="#DC2626" strokeWidth="2" strokeDasharray="3 3" />
                    <polygon points="675,111 682,115 675,119" fill="#DC2626" />

                    {/* Stage 5 */}
                    <g transform="translate(685, 20)">
                      <rect width="95" height="195" rx="8" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                      <rect width="95" height="28" rx="8" fill="#1E293B" stroke="#334155" />
                      <text x="47" y="18" fill="#F8FAFC" fontSize="10" fontWeight="bold" textAnchor="middle">चरण 5: निष्पादन</text>
                      <text x="8" y="55" fill="#E2E8F0" fontSize="9" fontWeight="bold">बैंक कुर्की व डिक्री</text>
                      <text x="8" y="75" fill="#94A3B8" fontSize="8">• Order 21 CPC</text>
                      <text x="8" y="92" fill="#94A3B8" fontSize="8">• बैंक खाता फ्रीज</text>
                      <text x="8" y="109" fill="#94A3B8" fontSize="8">• संपत्ति कुर्की</text>
                      <text x="8" y="126" fill="#94A3B8" fontSize="8">• वारंट जारी</text>
                      <text x="8" y="160" fill="#22C55E" fontSize="9" fontWeight="bold">पूर्ण वसूली</text>
                    </g>
                  </svg>
                </div>

                {/* Mobile Stacked Cards for Flowchart */}
                <div className="md:hidden space-y-3 my-4">
                  <div className="p-4 bg-slate-900 text-white rounded-xl border border-slate-800">
                    <span className="text-[10px] uppercase font-bold text-red-400">चरण 1 &bull; Day 1–7</span>
                    <h3 className="text-sm font-bold text-white mt-1">दस्तावेज़ीकरण व खाता मिलान</h3>
                    <p className="text-xs text-slate-300 mt-1">
                      GST टैक्स इनवॉइस, ट्रांसपोर्ट बिल्टी, ई-वे बिल और डिलीवरी चालान को संकलित कर इलेक्ट्रॉनिक रिकॉर्ड तैयार करना।
                    </p>
                  </div>
                  <div className="p-4 bg-slate-900 text-white rounded-xl border-2 border-red-600">
                    <span className="text-[10px] uppercase font-bold text-emerald-400">चरण 2 &bull; Day 8–25 (सबसे प्रभावी)</span>
                    <h3 className="text-sm font-bold text-white mt-1">एडवोकेट लीगल नोटिस (15-दिवसीय विधिक मांग)</h3>
                    <p className="text-xs text-slate-300 mt-1">
                      ₹999 में स्पीड पोस्ट, ईमेल व व्हाट्सएप द्वारा नोटिस जारी करना; 3x बैंक ब्याज व धारा 43B(h) की चेतावनी। 85% मामलों का इसी स्तर पर समाधान।
                    </p>
                  </div>
                  <div className="p-4 bg-slate-900 text-white rounded-xl border border-slate-800">
                    <span className="text-[10px] uppercase font-bold text-amber-400">चरण 3 &bull; Day 30–120</span>
                    <h3 className="text-sm font-bold text-white mt-1">MSME Samadhaan पोर्टल पर केस फाइलिंग</h3>
                    <p className="text-xs text-slate-300 mt-1">
                      काउंसिल द्वारा खरीदार को समन, 90 दिनों में सुलभता (Conciliation) और विधिक आर्बिट्रेशन अवार्ड जारी करना।
                    </p>
                  </div>
                  <div className="p-4 bg-slate-900 text-white rounded-xl border border-slate-800">
                    <span className="text-[10px] uppercase font-bold text-rose-400">चरण 4 &bull; Day 45–180</span>
                    <h3 className="text-sm font-bold text-white mt-1">समरी सूट (Order XXXVII CPC) / Section 138</h3>
                    <p className="text-xs text-slate-300 mt-1">
                      वाणिज्यिक न्यायालय में लिखित अनुबंध पर त्वरित समरी सूट दायर करना या चेक बाउंस की स्थिति में आपराधिक केस करना।
                    </p>
                  </div>
                  <div className="p-4 bg-slate-900 text-white rounded-xl border border-slate-800">
                    <span className="text-[10px] uppercase font-bold text-emerald-400">चरण 5 &bull; डिक्री निष्पादन</span>
                    <h3 className="text-sm font-bold text-white mt-1">बैंक खाता कुर्की व अंतिम वसूली</h3>
                    <p className="text-xs text-slate-300 mt-1">
                      ऑर्डर 21 सीपीसी के तहत डिफ़ॉल्टर के बैंक खाते और संपत्ति को कुर्क कर कोर्ट द्वारा सीधी वसूली।
                    </p>
                  </div>
                </div>

                <p>
                  अधिक जानकारी के लिए हमारा विस्तृत तुलनात्मक विश्लेषण{" "}
                  <Link
                    href="/msme-delayed-payment-recovery-samadhan-vs-legal-notice"
                    className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                  >
                    MSME Samadhaan vs Legal Notice: कौन सा रास्ता कब चुनें?
                  </Link>{" "}
                  और{" "}
                  <Link
                    href="/msme-odr-portal-delayed-payment-guide"
                    className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                  >
                    MSME ODR Portal Delayed Payment Guide
                  </Link>{" "}
                  देखें।
                </p>
              </div>
            </section>

            {/* Section 6: Interactive Scenario Tabs Component */}
            <section
              id="heading-interactive-scenarios"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  06
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Interactive Vyapari Explorer &bull; 4 Real Scenarios
                </span>
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 mb-2 leading-tight">
                जमीनी व्यापारिक परिदृश्य: माल डिलीवरी से चेक बाउंस तक समाधान
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                कारखाने और फैक्ट्री में आने वाली अपनी विशिष्ट स्थिति का चयन करें और देखें कि कानून के तहत आपके क्या अधिकार हैं:
              </p>

              <FactoryMsmeRecoveryScenarioTabs />
            </section>

            {/* Section 7: 3x RBI Bank Interest Calculation Ledger */}
            <section
              id="heading-interest-calculation"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  07
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  MSMED Act s.16 &bull; Worked Financial Ledger
                </span>
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 mb-4 leading-tight">
                3x RBI बैंक ब्याज का वैधानिक फॉर्मूला और गणना चार्ट
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  एमएसएमईडी अधिनियम की धारा 16 का ब्याज साधारण ब्याज नहीं है। यह <strong>मासिक चक्रवृद्धि (Monthly Rest Compound Interest)</strong> पर <strong>भारतीय रिज़र्व बैंक की रेपो/बैंक दर के तीन गुना</strong> की दर से लगाया जाता है।
                </p>

                {/* Statutory Formula Callout Box */}
                <div className="bg-slate-900 text-white p-5 rounded-xl border border-slate-800">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-red-400 block mb-1">
                    वैधानिक ब्याज फॉर्मूला (Statutory MSME Formula)
                  </span>
                  <div className="text-xs sm:text-sm font-mono bg-slate-800 p-3 rounded-lg border border-slate-700 text-emerald-400 my-2">
                    लागू ब्याज दर = RBI रेपो/बैंक दर (माना 6.50%) &times; 3 = 19.50% प्रति वर्ष (मासिक चक्रवृद्धि)
                  </div>
                  <p className="text-xs text-slate-300">
                    A = P &times; (1 + r / (12 &times; 100))^(n), जहां P = मूल इनवॉइस राशि, r = 19.50% (3x Bank Rate), n = महीनों की संख्या।
                  </p>
                </div>

                {/* Worked Ledger Example */}
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3 font-bold border border-slate-800">मूल इनवॉइस राशि (Principal)</th>
                        <th className="p-3 font-bold border border-slate-800">देरी की अवधि (Delay Period)</th>
                        <th className="p-3 font-bold border border-slate-800">3x बैंक चक्रवृद्धि ब्याज</th>
                        <th className="p-3 font-bold border border-slate-800">कुल देय वसूली रकम (Total Claim)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr>
                        <td className="p-3 font-bold text-slate-900 border border-slate-200">₹5,00,000</td>
                        <td className="p-3 border border-slate-200">6 महीने (180 दिन)</td>
                        <td className="p-3 border border-slate-200 text-emerald-700 font-semibold">₹51,460</td>
                        <td className="p-3 border border-slate-200 font-bold text-slate-900">₹5,51,460</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-slate-900 border border-slate-200">₹15,00,000</td>
                        <td className="p-3 border border-slate-200">9 महीने (270 दिन)</td>
                        <td className="p-3 border border-slate-200 text-emerald-700 font-semibold">₹2,36,250</td>
                        <td className="p-3 border border-slate-200 font-bold text-slate-900">₹17,36,250</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-slate-900 border border-slate-200">₹25,00,000</td>
                        <td className="p-3 border border-slate-200">12 महीने (1 वर्ष)</td>
                        <td className="p-3 border border-slate-200 text-emerald-700 font-semibold">₹5,33,650</td>
                        <td className="p-3 border border-slate-200 font-bold text-slate-900">₹30,33,650</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-slate-900 border border-slate-200">₹50,00,000</td>
                        <td className="p-3 border border-slate-200">18 महीने (1.5 वर्ष)</td>
                        <td className="p-3 border border-slate-200 text-emerald-700 font-semibold">₹16,84,300</td>
                        <td className="p-3 border border-slate-200 font-bold text-slate-900">₹66,84,300</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl text-xs sm:text-sm text-amber-900">
                  <strong>खरीदार के लिए आर्थिक चेतावनी:</strong> जैसे-जैसे समय बीतता है, धारा 16 के तहत ब्याज की रकम मूलधन के आधे से भी अधिक हो जाती है। जब डिफ़ॉल्टर को लीगल नोटिस में यह विस्तृत ब्याज खाता (Interest Ledger) भेजा जाता है, तो वह समझ जाता है कि देर करने पर उसकी कंपनी को लाखों रुपये का अतिरिक्त नुकसान होगा।
                </div>
              </div>
            </section>

            {/* Section 8: BSA 2023 s.63 Evidence Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  08
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  BSA 2023 s.63 &bull; Admissible Evidence Checklist
                </span>
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 mb-4 leading-tight">
                GST बिल, E-Way Bill और बिल्टी: BSA 2023 सेक्शन 63 चेकलिस्ट
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  1 जुलाई 2024 से लागू <strong>भारतीय साक्ष्य अधिनियम, 2023 की धारा 63 (Section 63 of Bharatiya Sakshya Adhiniyam, 2023)</strong> के तहत इलेक्ट्रॉनिक रिकॉर्ड्स को प्राथमिक साक्ष्य के रूप में पूर्ण मान्यता प्राप्त है। यदि आपके पास नीचे दिए गए 6 दस्तावेज़ तैयार हैं, तो खरीदार अदालत या काउंसिल में कभी झूठी दलील नहीं दे सकता:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 rounded-full bg-emerald-600 text-white text-xs font-black flex items-center justify-center">
                        ✓
                      </span>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                        1. टैक्स इनवॉइस (Tax Invoice)
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      इनवॉइस पर आपका GSTIN, उद्यम नंबर, बैंक विवरण और 45-दिन भुगतान शर्त अनिवार्य रूप से मुद्रित होनी चाहिए।
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 rounded-full bg-emerald-600 text-white text-xs font-black flex items-center justify-center">
                        ✓
                      </span>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                        2. वैध E-Way Bill
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      वाहन नंबर और पार्ट A व पार्ट B सहित ई-वे बिल सरकारी पोर्टल पर जेनरेटेड हो। यह साबित करता है कि माल रास्ते में चला था।
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 rounded-full bg-emerald-600 text-white text-xs font-black flex items-center justify-center">
                        ✓
                      </span>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                        3. ट्रांसपोर्ट बिल्टी / लॉरी रसीद (L/R)
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      रजिस्टर्ड ट्रांसपोर्टर द्वारा जारी बिल्टी जिस पर भाड़ा भुगतान और कंसाइनी (खरीदार) का नाम स्पष्ट हो।
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 rounded-full bg-emerald-600 text-white text-xs font-black flex items-center justify-center">
                        ✓
                      </span>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                        4. हस्ताक्षरित डिलीवरी चालान (POD)
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      खरीदार की फैक्ट्री गेट पर सुरक्षा गार्ड, स्टोरकीपर या मैनेजर की मोहर (Stamp) और तारीख सहित हस्ताक्षर।
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 rounded-full bg-emerald-600 text-white text-xs font-black flex items-center justify-center">
                        ✓
                      </span>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                        5. लेजर अकाउंट व बैंक स्टेटमेंट (Ledger)
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      खरीदार के साथ पिछले भुगतानों और मौजूदा बकाए का पूरा बहीखाता (Statement of Account)।
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 rounded-full bg-emerald-600 text-white text-xs font-black flex items-center justify-center">
                        ✓
                      </span>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                        6. ईमेल व व्हाट्सऐप पर किए गए तकादे
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      भुगतान के लिए भेजे गए रिमाइंडर्स, डिलीवरी की स्वीकृति और खरीदार द्वारा तारीखें दिए जाने के स्क्रीनशॉट।
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600">
                  यदि आपके पास इंडस्ट्रियल मशीनरी या फैब्रिकेशन का काम था, तो संबंधित अनुबंध पर हमारे गाइड्स{" "}
                  <Link
                    href="/custom-industrial-machinery-balance-withheld-after-installation-recovery"
                    className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                  >
                    Custom Industrial Machinery Balance Recovery
                  </Link>{" "}
                  और{" "}
                  <Link
                    href="/auto-ancillary-oem-arbitrary-debit-note-tooling-cost-recovery"
                    className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                  >
                    Auto-Ancillary OEM Debit Note & Tooling Cost Recovery
                  </Link>{" "}
                  का भी अध्ययन करें।
                </p>
              </div>
            </section>

            {/* Section 9: Verified Supreme Court Precedents */}
            <section
              id="heading-legal-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  09
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Binding Judicial Precedents &bull; Supreme Court of India
                </span>
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 mb-4 leading-tight">
                सुप्रीम कोर्ट के ऐतिहासिक फैसले जो फैक्ट्री मालिकों को सुरक्षा देते हैं
              </h2>
              <div className="space-y-4">
                {CASE_CITATIONS.map((cit, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl border border-slate-200"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-black text-slate-900">
                        {cit.title}
                      </span>
                      <span className="text-[11px] font-mono text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                        {cit.citation}
                      </span>
                    </div>
                    <div className="text-xs text-slate-600 mb-2">
                      <strong>पक्षकार:</strong> {cit.parties} | <strong>अदालत:</strong> {cit.court}
                    </div>
                    <div className="text-xs text-slate-700 mb-2 leading-relaxed">
                      <strong>मामले के तथ्य:</strong> {cit.facts}
                    </div>
                    <div className="text-xs text-emerald-900 bg-emerald-50/80 p-2.5 rounded-lg border border-emerald-200 mb-2 leading-relaxed">
                      <strong>न्यायालय का निर्णय:</strong> {cit.holding}
                    </div>
                    <div className="text-xs text-[#DC2626] font-bold">
                      <strong>कारखाना मालिकों के लिए निष्कर्ष:</strong> {cit.takeaway}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 10: Frequently Asked Questions */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  10
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Frequently Asked Questions &bull; FAQ
                </span>
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 mb-4 leading-tight">
                फैक्ट्री व MSME बिल रिकवरी: अक्सर पूछे जाने वाले सवाल (FAQ)
              </h2>
              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-slate-50 rounded-xl border border-slate-200 p-4 transition-all"
                  >
                    <summary className="flex items-center justify-between cursor-pointer font-bold text-xs sm:text-sm text-slate-900 group-open:text-[#DC2626]">
                      <span>{faq.question}</span>
                      <span className="ml-2 text-slate-400 group-open:rotate-180 transition-transform">
                        ▼
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/80 pt-3">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 11: Statutory Sources & Citations */}
            <section
              id="heading-statutory-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  11
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Authoritative Statutory References &bull; Primary Sources
                </span>
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 mb-4 leading-tight">
                प्राथमिक विधिक कानून, सरकारी पोर्टल और वैधानिक संदर्भ
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-4">
                यह गाइड भारत सरकार के आधिकारिक कानूनों, संसद द्वारा पारित अधिनियमों और सर्वोच्च न्यायालय के निर्णयों पर आधारित है:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {PRIMARY_SOURCES.map((src, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold shrink-0">•</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline font-medium"
                    >
                      {src.title}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Advocate Attribution */}
              {/* TODO(reviewer): src/data/reviewers.ts is absent in this repository */}
              <div className="mt-6 pt-5 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-500">
                <div>
                  <span className="font-bold text-slate-700">कानूनी समीक्षा व संपादन:</span> एडवोकेट अनुज आनंद मलिक, संस्थापक एवं प्रधान अधिवक्ता (AMA Legal Solutions)
                </div>
                <div className="font-mono text-[11px]">
                  अंतिम विधिक सत्यापन: नवंबर 2026
                </div>
              </div>
            </section>

            {/* Bottom Dual-Track CTA Banner */}
            <div className="mt-8">
              <FactoryMsmeRecoveryCTA />
            </div>
          </div>
        </div>
      </main>

      {/* Footer Cross-Links */}
      <RelatedRecoveryGuides />
    </article>
  );
}
