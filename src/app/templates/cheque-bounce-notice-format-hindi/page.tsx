import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import ChequeBounceHindiNoticeCTA from "./ChequeBounceHindiNoticeCTA";
import ChequeBounceHindiTOC from "./ChequeBounceHindiTOC";
import ChequeBounceNoticeHindiWorkspace from "./ChequeBounceNoticeHindiWorkspace";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "चेक बाउंस नोटिस फॉर्मेट हिंदी में (Section 138)",
  description:
    "धारा 138 के तहत चेक बाउंस का कानूनी नोटिस हिंदी में: पूरा फॉर्मेट, समय सीमा और भेजने का सही तरीका।",
  alternates: {
    canonical: `${SITE_URL}/templates/cheque-bounce-notice-format-hindi`,
  },
  openGraph: {
    title: "चेक बाउंस नोटिस फॉर्मेट हिंदी में — धारा 138 के अनुसार (Section 138 NI Act)",
    description:
      "धारा 138 परक्राम्य लिखत अधिनियम के तहत चेक बाउंस कानूनी नोटिस का प्रमाणित हिंदी प्रारूप। 30 दिन का नोटिस नियम, 15 दिन भुगतान मांग, और स्पीड पोस्ट डिस्पैच गाइड।",
    url: `${SITE_URL}/templates/cheque-bounce-notice-format-hindi`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "hi_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "चेक बाउंस नोटिस फॉर्मेट हिंदी में — धारा 138 के अनुसार (Section 138 NI Act)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "चेक बाउंस नोटिस फॉर्मेट हिंदी में — धारा 138 के अनुसार (Section 138 NI Act)",
    description:
      "धारा 138 परक्राम्य लिखत अधिनियम के तहत चेक बाउंस कानूनी नोटिस का प्रमाणित हिंदी प्रारूप। 30 दिन का नोटिस नियम, 15 दिन भुगतान मांग, और स्पीड पोस्ट डिस्पैच गाइड।",
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
    title: "Negotiable Instruments Act, 1881 (Act No. 26 of 1881) — Section 138 (Dishonour of Cheque), Section 141 (Offences by Companies) & Section 142 (Cognizance of Offences)",
    url: "https://www.indiacode.nic.in/handle/123456789/2281",
  },
  {
    title: "Negotiable Instruments (Amendment) Act, 2018 — Section 143A (Power to Direct Interim Compensation up to 20%) & Section 148",
    url: "https://www.indiacode.nic.in/handle/123456789/2281",
  },
  {
    title: "The General Clauses Act, 1897 (Act No. 10 of 1897) — Section 27 (Meaning of Service by Post & Statutory Presumption of Delivery)",
    url: "https://www.indiacode.nic.in/handle/123456789/2246",
  },
  {
    title: "Supreme Court of India — C.C. Alavi Haji v. Palapetty Muhammed & Anr. (2007) 6 SCC 555 (Three-Judge Bench on Deemed Service of Section 138 Notice)",
    url: "https://main.sci.gov.in/judgment/judgments.php",
  },
  {
    title: "Supreme Court of India — Central Bank of India & Anr. v. Saxons Farms & Ors. (1999) 8 SCC 221 (Requisites of Valid Statutory Demand Notice under Section 138 Proviso b)",
    url: "https://main.sci.gov.in/judgment/judgments.php",
  },
  {
    title: "Supreme Court of India — Sanjabij Tari v. Kishore S. Borcar (SLP Crl. No. 7130/2024, Decided Sept 2025 — Mandatory Strict Compliance of Notice Timelines)",
    url: "https://main.sci.gov.in/judgment/judgments.php",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Email, WhatsApp Notices & Postal Tracking Reports)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const CASE_CITATIONS = [
  {
    title: "सुप्रीम कोर्ट (3-जज बेंच) — स्पीड पोस्ट से भेजे गए नोटिस पर तामील (Service) की वैधानिक उपधारणा",
    parties: "C.C. Alavi Haji v. Palapetty Muhammed & Anr.",
    citation: "(2007) 6 SCC 555 / 2007 AIR SCW 3214",
    date: "निर्णय दिनांक 18 मई 2007",
    facts:
      "देनदार को चेक बाउंस होने के बाद सही पते पर पंजीकृत स्पीड पोस्ट द्वारा धारा 138 का नोटिस भेजा गया था। डाक लिफाफा 'Unclaimed' (अस्वीकृत / दावा न किया गया) टीप के साथ वापस आ गया। देनदार ने मजिस्ट्रेट अदालत में तर्क दिया कि नोटिस वास्तव में प्राप्त नहीं हुआ था, इसलिए धारा 138 के तहत अपराध नहीं बनता।",
    holding:
      "सुप्रीम कोर्ट की तीन सदस्यीय संविधान पीठ ने ऐतिहासिक निर्णय देते हुए स्पष्ट किया कि जनरल क्लॉजेज एक्ट की धारा 27 और भारतीय साक्ष्य अधिनियम (वर्तमान बीएसए धारा 24/63) के तहत यदि सही पते पर प्री-पेड पंजीकृत डाक से नोटिस भेजा गया है, तो उसे विधिक रूप से 'तामील' (Deemed Service) माना जाएगा। कोई भी चालाक देनदार डाक लेने से मना करके या जानबूझकर घर बंद रखकर धारा 138 की आपराधिक प्रक्रिया से बच नहीं सकता।",
    amount: "₹1,50,000 चेक अनादर • 3-जज बेंच द्वारा धारा 138 परिवाद बहाल",
    takeaway:
      "चेक बाउंस नोटिस हमेशा सही पते पर रजिस्टर्ड स्पीड पोस्ट द्वारा भेजें और इंडिया पोस्ट की डिलीवरी/ट्रैकिंग रसीद सुरक्षित रखें। यदि देनदार लिफाफा लेने से इनकार करता है, तब भी कानूनन नोटिस तामील माना जाता है।",
  },
  {
    title: "सुप्रीम कोर्ट — धारा 138(b) के तहत केवल विशिष्ट चेक राशि की ही स्पष्ट मांग की जानी चाहिए",
    parties: "Central Bank of India & Anr. v. Saxons Farms & Ors.",
    citation: "(1999) 8 SCC 221 / AIR 1999 SC 3607",
    date: "निर्णय दिनांक 01 अक्टूबर 1999",
    facts:
      "देनदार द्वारा जारी किए गए चेक बाउंस होने पर बैंक ने नोटिस भेजा जिसमें चेक राशि के अलावा अन्य ब्याज, वकील शुल्क और दंडात्मक नुकसान की राशि का अस्पष्ट ब्योरा जोड़कर एकमुश्त बड़ी राशि की मांग की गई थी। अभियुक्त ने तर्क दिया कि नोटिस में चेक की विशिष्ट राशि की मांग अलग से नहीं की गई थी, अतः नोटिस अमान्य है।",
    holding:
      "सर्वोच्च न्यायालय ने माना कि धारा 138 के परंतुक (b) का मूल उद्देश्य देनदार को चेक की सही और निश्चित राशि चुकाने के लिए 15 दिन का अवसर देना है। यद्यपि नोटिस में वकील शुल्क या ब्याज का उल्लेख किया जा सकता है, किंतु चेक की मूल राशि की मांग स्पष्ट और पृथक रूप से होनी चाहिए ताकि देनदार 15 दिन में केवल चेक राशि देकर आपराधिक दायित्व से मुक्त हो सके।",
    amount: "₹9,50,000 चेक बाउंस • नोटिस की वैधानिकता पर सुप्रीम कोर्ट की पुष्टि",
    takeaway:
      "नोटिस के ड्राफ्ट में चेक की सही राशि, चेक नंबर और बैंक मेमो का विवरण स्पष्ट लिखें। अतिरिक्त ब्याज या लीगल फीस का उल्लेख करते हुए भी मूल चेक राशि को स्पष्ट रखें।",
  },
  {
    title: "सुप्रीम कोर्ट — चेक बाउंस केस और दीवानी वसूली सूट दोनों एक साथ चलाए जा सकते हैं",
    parties: "Sri Krishna Agencies v. State of Andhra Pradesh & Anr.",
    citation: "(2009) 1 SCC 69 / AIR 2009 SC 1011",
    date: "निर्णय दिनांक 07 नवम्बर 2008",
    facts:
      "क्रेडिटर ने ₹11 लाख के अनादरित चेक के लिए धारा 138 का क्रिमिनल नोटिस भेजकर कोर्ट में केस दायर किया। साथ ही पैसे की वसूली हेतु सिविल कोर्ट में रिकवरी सूट भी दाखिल किया। आंध्र प्रदेश उच्च न्यायालय ने सिविल सूट लंबित होने के आधार पर आपराधिक कार्यवाही निरस्त कर दी थी।",
    holding:
      "सुप्रीम कोर्ट ने हाईकोर्ट का आदेश रद्द करते हुए स्पष्ट किया कि धारा 138 की आपराधिक कार्यवाही और सिविल वसूली का दावा (दीवानी प्रक्रिया संहिता का आदेश 37) दोनों अलग-अलग क्षेत्रों में कार्य करते हैं। दीवानी सूट का लंबित होना धारा 138 के आपराधिक परिवाद को नहीं रोकता। दोनों प्रक्रियाएं समानांतर चल सकती हैं।",
    amount: "₹11,00,000+ बकाया राशि • आपराधिक परिवाद और सिविल वाद दोनों बहाल",
    takeaway:
      "15 दिन का नोटिस बीतने पर आप मजिस्ट्रेट कोर्ट में 138 का आपराधिक केस दर्ज करने के साथ-साथ सिविल कोर्ट में समरी सूट भी दाखिल कर सकते हैं।",
  },
  {
    title: "कंपनी द्वारा चेक बाउंस होने पर निदेशक का दायित्व एवं धारा 141 का अनिवार्य नोटिस",
    parties: "SMS Pharmaceuticals Ltd. v. Neeta Bhalla & Anr.",
    citation: "(2005) 8 SCC 89 / AIR 2005 SC 4366",
    date: "निर्णय दिनांक 20 सितम्बर 2005",
    facts:
      "एक प्राइवेट लिमिटेड कंपनी द्वारा जारी चेक बाउंस हो गया था। शिकायतकर्ता ने कंपनी के सभी निदेशकों को बिना उनकी विशिष्ट भूमिका का उल्लेख किए नोटिस भेजा और आरोपी बना दिया।",
    holding:
      "सुप्रीम कोर्ट ने स्पष्ट किया कि धारा 141 के तहत आपराधिक दायित्व के लिए नोटिस और शिकायत में यह विशिष्ट कथन होना अनिवार्य है कि संबंधित निदेशक अपराध के समय कंपनी के कार्य संचालन एवं व्यवसाय के लिए सीधे तौर पर उत्तरदायी और प्रभारी (In-charge and Responsible) था। हस्ताक्षरकर्ता प्रबंध निदेशक (MD) पर दायित्व स्वतः सिद्ध होता है।",
    amount: "₹14,50,000 चेक अनादर • निदेशकों के दायित्व पर कानूनी मानक निर्धारित",
    takeaway:
      "यदि चेक किसी कंपनी या पार्टनरशिप फर्म का है, तो नोटिस कंपनी के पंजीकृत पते पर तथा चेक पर हस्ताक्षर करने वाले सक्रिय निदेशक को उनके नाम व पद सहित प्रेषित करें।",
  },
];

const FAQS = [
  {
    question: "चेक बाउंस होने के कितने दिनों के भीतर कानूनी नोटिस भेजना अनिवार्य है?",
    answer:
      "परक्राम्य लिखत अधिनियम (Negotiable Instruments Act, 1881) की धारा 138 के परंतुक (b) के अनुसार, जिस दिन आपको अपने बैंक से चेक बाउंस होने का अधिकृत ज्ञापन (Bank Return Memo) प्राप्त होता है, उस दिनांक से ठीक 30 दिनों के भीतर देनदार को लिखित कानूनी नोटिस भेजना अनिवार्य है। यदि 30 दिन का समय बीत जाता है, तो धारा 138 के तहत आपराधिक मुकदमा दर्ज कराने का वैधानिक अधिकार समाप्त हो जाता है (केवल धारा 142 के तहत देरी माफी के विशेष आवेदन पर अदालत के विवेक पर निर्भर रहना पड़ता है)।",
  },
  {
    question: "चेक बाउंस नोटिस में देनदार को भुगतान के लिए कितने दिनों का समय दिया जाता है?",
    answer:
      "धारा 138(c) के तहत देनदार को कानूनी नोटिस की प्राप्ति (Receipt) की तिथि से अनिवार्य रूप से 15 दिनों का भुगतान समय (Cure Period) दिया जाना चाहिए। नोटिस मिलने के 15 दिन पूरे होने से पहले कोर्ट में केस दाखिल नहीं किया जा सकता। यदि देनदार इन 15 दिनों में चेक की राशि चुका देता है, तो कोई आपराधिक अपराध नहीं बनता। यदि 15 दिन बीतने के बाद भी भुगतान नहीं होता, तो 16वें दिन से अपराध घटित हो जाता है।",
  },
  {
    question: "चेक बाउंस का कानूनी नोटिस वकील के माध्यम से भेजना जरूरी है या स्वयं भी भेज सकते हैं?",
    answer:
      "कानूनन आप स्वयं अपने हस्ताक्षर से भी 15 दिवसीय मांग नोटिस (Statutory Demand Notice) भेज सकते हैं। हालांकि, व्यावहारिक रूप से किसी अनुभवी अधिवक्ता (Advocate) के लेटरहेड और वकालतनामा/अधिसूचना के माध्यम से नोटिस भेजना अत्यधिक प्रभावी होता है। वकील द्वारा ड्राफ्ट किए गए नोटिस में धारा 138, धारा 141 (कंपनियों के मामले में), सुप्रीम कोर्ट के नजीरें तथा धारा 143A के तहत 20% अंतरिम मुआवजे की वैधानिक चेतावनी का सटीक उल्लेख होता है, जिससे 70% से अधिक मामलों में देनदार मुकदमे के डर से बिना कोर्ट जाए तुरंत भुगतान कर देता है।",
  },
  {
    question: "चेक बाउंस कानूनी नोटिस भेजने का सही तरीका क्या है (स्पीड पोस्ट या ईमेल)?",
    answer:
      "चेक बाउंस का कानूनी नोटिस हमेशा पंजीकृत स्पीड पोस्ट (Registered Speed Post with Acknowledgment Due - AD) द्वारा देनदार के सही आवासीय या आधिकारिक पते पर भेजा जाना चाहिए। इसके साथ ही भारतीय साक्ष्य अधिनियम (Bharatiya Sakshya Adhiniyam, 2023) की धारा 63 के तहत इलेक्ट्रॉनिक साक्ष्य तैयार करने के लिए नोटिस की पीडीएफ प्रति देनदार के आधिकारिक ईमेल और व्हाट्सएप पर भी भेजी जानी चाहिए। इंडिया पोस्ट की बुकिंग रसीद और ऑनलाइन ट्रैकिंग रिपोर्ट (Delivery Confirmation) को सुरक्षित रखना अनिवार्य है।",
  },
  {
    question: "यदि देनदार चेक बाउंस का नोटिस लेने से जानबूझकर इनकार कर दे तो क्या होगा?",
    answer:
      "सुप्रीम कोर्ट की तीन सदस्यीय संविधान पीठ ने सी.सी. अलवी हाजी बनाम पालापेटी मुहम्मद (2007) 6 SCC 555 में फैसला दिया है कि यदि नोटिस सही पते पर स्पीड पोस्ट से भेजा गया है और देनदार उसे लेने से मना करता है ('Refused' या 'Unclaimed' या 'Door Locked'), तो जनरल क्लॉजेज एक्ट की धारा 27 के तहत इसे वैधानिक रूप से 'तामील' (Deemed Service) माना जाएगा। डाक विभाग की वापसी रिपोर्ट के साथ आप सीधे मजिस्ट्रेट कोर्ट में केस दर्ज कर सकते हैं।",
  },
  {
    question: "15 दिन का नोटिस बीत जाने के बाद कोर्ट में केस करने की क्या समय सीमा है?",
    answer:
      "15 दिन की वैधानिक भुगतान अवधि समाप्त होने के ठीक अगले दिन से 'कार्रवाई का कारण' (Cause of Action) उत्पन्न होता है। एनआई एक्ट की धारा 142 के तहत, 15 दिन समाप्त होने के बाद अगले 30 दिनों के भीतर न्यायिक मजिस्ट्रेट प्रथम श्रेणी (JMFC) या मेट्रोपॉलिटन मजिस्ट्रेट (MM) की अदालत में लिखित आपराधिक परिवाद (Complaint) दायर करना अनिवार्य होता है।",
  },
  {
    question: "चेक बाउंस नोटिस तैयार करवाने और भेजने का क्या खर्च (Charges) आता है?",
    answer:
      "सामान्यतः स्थानीय वकील चेक बाउंस नोटिस ड्राफ्ट करने के लिए ₹2,500 से ₹10,000 तक शुल्क लेते हैं। LegalRecovery.in पर विशेषज्ञ अधिवक्ताओं द्वारा वैधानिक धारा 138 नोटिस की ड्राफ्टिंग, ईमेल व WhatsApp डिस्पैच और ट्रैकिंग मात्र ₹999 (फ्लैट सरकारी दर) में 24 घंटे के भीतर पूरी की जाती है, जिसमें कोई छिपा हुआ शुल्क नहीं होता। स्पीड पोस्ट वैकल्पिक है (₹450 प्रति पार्टी)।",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "चेक बाउंस नोटिस फॉर्मेट हिंदी में — धारा 138 के अनुसार (Section 138 NI Act)",
  description:
    "धारा 138 के तहत चेक बाउंस का कानूनी नोटिस हिंदी में: पूरा फॉर्मेट, समय सीमा और भेजने का सही तरीका।",
  datePublished: "2026-11-04T10:00:00+05:30",
  dateModified: "2026-11-04T10:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/templates/cheque-bounce-notice-format-hindi`,
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
    name: "Cheque Bounce Notice Format in Hindi Section 138",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const DIGITAL_DOCUMENT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "DigitalDocument",
  name: "चेक बाउंस कानूनी मांग नोटिस प्रारूप (Section 138 NI Act Hindi Notice Template)",
  description:
    "परक्राम्य लिखत अधिनियम 1881 की धारा 138 के अंतर्गत चेक बाउंस का वैधानिक 15-दिवसीय मांग नोटिस प्रारूप (हिंदी एवं द्विभाषी रूपरेखा)।",
  encodingFormat: ["text/plain", "application/msword", "text/html"],
  hasDigitalDocumentPermission: {
    "@type": "DigitalDocumentPermission",
    permissionType: "https://schema.org/ReadPermission",
    grantee: {
      "@type": "Audience",
      audienceType: "Public",
    },
  },
  url: `${SITE_URL}/templates/cheque-bounce-notice-format-hindi`,
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "मुख्य पृष्ठ (Home)",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "विधिक प्रारूप (Templates)",
      item: `${SITE_URL}/templates`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "चेक बाउंस नोटिस फॉर्मेट हिंदी",
      item: `${SITE_URL}/templates/cheque-bounce-notice-format-hindi`,
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

export default function ChequeBounceNoticeFormatHindiPage() {
  const breadcrumbItems = [
    { label: "Templates", href: "/templates" },
    { label: "चेक बाउंस नोटिस फॉर्मेट हिंदी में", href: "/templates/cheque-bounce-notice-format-hindi" },
  ];

  return (
    <div lang="hi" className="min-h-screen bg-[#FDFBF7] text-[#1E293B]">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(DIGITAL_DOCUMENT_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      {/* Top Header / Breadcrumbs */}
      <div className="border-b border-slate-200/80 bg-white/70 backdrop-blur-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Hero Section with Verified Badges */}
        <div className="max-w-4xl mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800 border border-red-200 mb-4">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            परक्राम्य लिखत अधिनियम 1881 • धारा 138 वैधानिक नोटिस प्रारूप (2026 अपडेटेड)
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4">
            चेक बाउंस नोटिस फॉर्मेट हिंदी में — धारा 138 के अनुसार
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 font-medium">
            धारा 138 के तहत चेक बाउंस का कानूनी नोटिस हिंदी में: पूरा फॉर्मेट, समय सीमा और भेजने का सही तरीका।
          </p>

          {/* Answer Box Under H1 (40-60 words answering core query directly) */}
          <div className="bg-amber-50/90 border-l-4 border-amber-500 rounded-r-xl p-4 sm:p-5 mb-8 shadow-xs">
            <div className="flex items-start gap-3">
              <span className="text-xl">⚖️</span>
              <div className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                <strong className="font-bold text-slate-900">त्वरित कानूनी उत्तर: </strong>
                बैंक मेमो (Bank Return Memo) मिलने के ठीक <strong>30 दिनों के भीतर</strong> धारा 138(b) के तहत देनदार को 15-दिवसीय कानूनी मांग नोटिस भेजना वैधानिक रूप से अनिवार्य है। नोटिस रजिस्टर्ड स्पीड पोस्ट द्वारा सही पते पर भेजा जाना चाहिए। यदि देनदार 15 दिन में चेक राशि नहीं चुकाता, तो अगले 30 दिन में सक्षम मजिस्ट्रेट न्यायालय में आपराधिक परिवाद दायर कर 2 वर्ष तक का कारावास व चेक राशि का दोगुना जुर्माना कराया जा सकता है।
              </div>
            </div>
          </div>
        </div>

        {/* Key Facts Summary Table */}
        <div id="heading-key-facts" className="mb-12 scroll-mt-28">
          <div className="bg-white border border-slate-200 rounded-2xl shadow-xs overflow-hidden">
            <div className="bg-slate-900 text-white px-5 py-3 sm:px-6 sm:py-4 flex items-center justify-between">
              <h2 className="text-sm sm:text-base font-bold flex items-center gap-2">
                <span>📋</span> चेक बाउंस कानूनी नोटिस: मुख्य वैधानिक मानक (Key Statutory Facts)
              </h2>
              <span className="text-xs text-slate-300 font-mono">NI Act, 1881</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm text-left border-collapse">
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50">
                    <td className="px-5 py-3 font-semibold text-slate-700 w-1/3 bg-slate-50/50">लागू कानून व धाराएं</td>
                    <td className="px-5 py-3 text-slate-900">
                      परक्राम्य लिखत अधिनियम, 1881 की धारा 138, 141 (कंपनी व निदेशक), 142 एवं 143A (20% अंतरिम मुआवजा)
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-5 py-3 font-semibold text-slate-700 bg-slate-50/50">नोटिस भेजने की समय सीमा</td>
                    <td className="px-5 py-3 text-slate-900 font-medium">
                      बैंक वापसी मेमो (Bank Memo) प्राप्त होने की तिथि से ठीक <strong>30 दिन</strong> (अनिवार्य समय सीमा)
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-5 py-3 font-semibold text-slate-700 bg-slate-50/50">देनदार को भुगतान की मोहलत</td>
                    <td className="px-5 py-3 text-slate-900">
                      नोटिस प्राप्ति (Delivery) की तिथि से <strong>15 दिन</strong> (Cure Period — धारा 138(c))
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-5 py-3 font-semibold text-slate-700 bg-slate-50/50">भेजने का मान्य माध्यम</td>
                    <td className="px-5 py-3 text-slate-900">
                      रजिस्टर्ड स्पीड पोस्ट (Speed Post AD) + ईमेल / व्हाट्सएप (धारा 63 बीएसए 2023 इलेक्ट्रॉनिक साक्ष्य)
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-5 py-3 font-semibold text-slate-700 bg-slate-50/50">अदालती फोरम (केस दायर करने की जगह)</td>
                    <td className="px-5 py-3 text-slate-900">
                      धारा 142(2) के अनुसार शिकायतकर्ता (Payee) का बैंक खाता जिस न्यायालय के क्षेत्राधिकार में आता है (JMFC / MM कोर्ट)
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-5 py-3 font-semibold text-slate-700 bg-slate-50/50">सजा व जुर्माने का प्रावधान</td>
                    <td className="px-5 py-3 text-slate-900">
                      2 वर्ष तक का कारावास अथवा चेक राशि का दोगुना (2x) तक आर्थिक जुर्माना अथवा दोनों
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-5 py-3 font-semibold text-slate-700 bg-slate-50/50">LegalRecovery सेवा शुल्क</td>
                    <td className="px-5 py-3 text-slate-900 font-bold text-red-600">
                      फ्लैट ₹999 (वकील ड्राफ्टिंग + ईमेल/WhatsApp डिस्पैच; स्पीड पोस्ट वैकल्पिक ₹450)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Main Content Layout with Sticky TOC Sidebar */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sidebar Table of Contents */}
          <ChequeBounceHindiTOC />

          {/* Right Main Column */}
          <div className="flex-1 w-full min-w-0 space-y-12">
            {/* Section 1: Overview and Statutory Conditions */}
            <section id="heading-overview" className="scroll-mt-28">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                  चेक बाउंस नोटिस क्या है और इसे भेजना क्यों अनिवार्य है?
                </h2>
                <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    भारतीय वाणिज्यिक कानून में किसी भी व्यक्ति या फर्म द्वारा दिया गया चेक जब बैंक द्वारा अपर्याप्त बैलेंस (Funds Insufficient), खाता बंद (Account Closed), या भुगतान रोकने (Stop Payment) जैसे कारणों से अनादरित (Dishonour) कर दिया जाता है, तो यह केवल एक दीवानी मामला नहीं रहता, बल्कि परक्राम्य लिखत अधिनियम की <strong>धारा 138 के तहत एक संज्ञेय अपराध</strong> बन जाता है।
                  </p>
                  <p>
                    किंतु बैंक से चेक बाउंस होने मात्र से आप सीधे कोर्ट में केस दर्ज नहीं कर सकते। भारतीय संसद ने कानून में चेक जारीकर्ता (Drawer) को एक अंतिम वैधानिक अवसर प्रदान किया है। कानून के अनुसार शिकायतकर्ता को बैंक मेमो प्राप्त होने के <strong>30 दिनों के भीतर</strong> देनदार को एक औपचारिक 15-दिवसीय विधिक मांग नोटिस (Demand Notice) भेजना अनिवार्य है।
                  </p>
                  <div className="p-4 bg-red-50/80 border border-red-200 rounded-xl">
                    <h3 className="text-sm font-bold text-red-900 mb-1">
                      ⚠️ ध्यान दें: यदि 30 दिन में नोटिस नहीं भेजा तो क्या होगा?
                    </h3>
                    <p className="text-xs sm:text-sm text-red-800 leading-relaxed">
                      यदि आप बैंक वापसी मेमो की तारीख से 30 दिन के भीतर विधिक नोटिस भेजने से चूक जाते हैं, तो आप धारा 138 का विशेष आपराधिक केस दायर करने का मूल अधिकार खो देंगे। इसके बाद आपके पास केवल 3 वर्ष की मियाद में सिविल कोर्ट में रिकवरी सूट (<Link href="/cheque-bounce-and-civil-suit-together" className="text-red-700 underline font-semibold hover:text-red-900">दीवानी वसूली वाद</Link> या <Link href="/law/order-37-summary-suit-money-recovery" className="text-red-700 underline font-semibold hover:text-red-900">Order 37 Summary Suit</Link>) दाखिल करने का विकल्प रह जाएगा, जिसमें अदालती समय अधिक लगता है।
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Statutory Rules for Section 138 Notice */}
            <section id="heading-statutory-rules" className="scroll-mt-28">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                  धारा 138 एनआई एक्ट: नोटिस की 4 अनिवार्य कानूनी शर्तें
                </h2>
                <p className="text-sm text-slate-600 mb-6">
                  अदालत में केस टिकने के लिए कानूनी नोटिस में निम्नलिखित चार तत्वों का होना अनिवार्य है। यदि इनमें से एक भी तत्व छूट जाता है, तो अभियुक्त नोटिस को तकनीकी आधार पर निरस्त करवा सकता है:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-xs font-bold text-red-600 uppercase tracking-wide">नियम 1</span>
                    <h3 className="text-base font-bold text-slate-900 mt-1 mb-2">
                      वैध ऋण या देनदारी (Legally Enforceable Debt)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      चेक किसी उपहार, दान या गैर-कानूनी कार्य (जैसे सट्टा) के लिए नहीं, बल्कि किसी वैध व्यापार, उधारी या अनुबंध के प्रतिफल स्वरूप जारी किया गया होना चाहिए।
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-xs font-bold text-red-600 uppercase tracking-wide">नियम 2</span>
                    <h3 className="text-base font-bold text-slate-900 mt-1 mb-2">
                      वैधता अवधि में बैंक में प्रस्तुति (Presentation within 3 Months)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      चेक को उसकी जारी तिथि से 3 महीने की आधिकारिक वैधता अवधि के भीतर निकासी हेतु बैंक में प्रस्तुत किया गया होना चाहिए।
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-xs font-bold text-red-600 uppercase tracking-wide">नियम 3</span>
                    <h3 className="text-base font-bold text-slate-900 mt-1 mb-2">
                      30 दिन का नोटिस नियम (Section 138 Proviso b)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      बैंक मेमो की प्राप्ति तिथि से ठीक 30 दिनों के भीतर लिखित नोटिस भेजा जाना चाहिए। <Link href="/cheque-bounce-notice-timeline-section-138" className="text-red-600 font-semibold underline hover:text-red-800">विस्तृत 30-दिवसीय समय सीमा गाइड यहाँ देखें</Link>।
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-xs font-bold text-red-600 uppercase tracking-wide">नियम 4</span>
                    <h3 className="text-base font-bold text-slate-900 mt-1 mb-2">
                      15 दिन की भुगतान मोहलत (15 Days Cure Window)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      नोटिस में देनदार को नोटिस मिलने से स्पष्ट 15 दिनों के भीतर पूरी चेक राशि चुकाने की मांग की जानी चाहिए। 15 दिन पूरे होने से पूर्व कोर्ट में परिवाद दाखिल नहीं हो सकता।
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Interactive Workspace Component (P1 Archetype) */}
            <ChequeBounceNoticeHindiWorkspace />

            {/* Section 4: Clause Breakdown */}
            <section id="heading-clause-breakdown" className="scroll-mt-28">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                  चेक बाउंस नोटिस के प्रत्येक पैराग्राफ (क्लॉज) का कानूनी महत्व
                </h2>
                <p className="text-sm text-slate-600 mb-6">
                  अदालत में जब आपका वकील केस पेश करता है, तो मजिस्ट्रेट सबसे पहले नोटिस के पैराग्राफ्स का परीक्षण करते हैं। जानिए नोटिस में प्रत्येक बात क्यों लिखी जाती है:
                </p>

                <div className="space-y-4">
                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
                    <h3 className="text-sm font-bold text-slate-900 mb-1">
                      1. व्यावसायिक संबंध एवं वैध दायित्व का उल्लेख (Legally Enforceable Debt)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      परक्राम्य लिखत अधिनियम की धारा 139 के तहत चेक धारक के पक्ष में यह कानूनी उपधारणा होती है कि चेक किसी वैध ऋण के लिए दिया गया था। नोटिस में लेनदेन का संक्षिप्त संदर्भ देना आवश्यक है ताकि देनदार बाद में अदालत में यह झूठा बहाना न बना सके कि चेक खो गया था या सुरक्षा हेतु कोरा (Blank Security Cheque) दिया गया था।
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
                    <h3 className="text-sm font-bold text-slate-900 mb-1">
                      2. चेक नंबर, दिनांक, बैंक शाखा एवं सटीक राशि का विवरण
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      सुप्रीम कोर्ट के <em>सेंट्रल बैंक ऑफ इंडिया बनाम सैक्सन फार्म्स (1999)</em> फैसले के अनुसार, नोटिस में चेक की मूल राशि का स्पष्ट और असंदिग्ध उल्लेख होना चाहिए। यदि चेक ₹4,50,000 का है तो नोटिस में यह राशि अंकों व शब्दों में दर्ज होनी चाहिए।
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
                    <h3 className="text-sm font-bold text-slate-900 mb-1">
                      3. बैंक वापसी ज्ञापन (Bank Return Memo) की तारीख व कारण
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      चेक कब बैंक में लगाया गया और किस तारीख को किस कारण (जैसे 'Funds Insufficient', 'Stop Payment', या 'Signature Mismatch') से बाउंस हुआ, यह लिखना अनिवार्य है। 30 दिन की गणना इसी बैंक मेमो की तारीख से शुरू होती है।
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
                    <h3 className="text-sm font-bold text-slate-900 mb-1">
                      4. धारा 141 का उल्लेख (कंपनी एवं निदेशकों के मामले में)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      यदि चेक किसी कंपनी, एलएलपी या पार्टनरशिप फर्म का है, तो नोटिस में स्पष्ट लिखा होना चाहिए कि उक्त निदेशक या पार्टनर उस समय कंपनी के कार्य संचालन के लिए सीधे जिम्मेदार थे। <Link href="/cheque-bounce-case-against-company-directors" className="text-red-600 font-semibold underline hover:text-red-800">कंपनी निदेशकों पर धारा 141 दायित्व का पूरा कानून यहाँ पढ़ें</Link>।
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
                    <h3 className="text-sm font-bold text-slate-900 mb-1">
                      5. धारा 143A के तहत 20% अंतरिम मुआवजा की चेतावनी
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      2018 के संशोधन द्वारा जोड़ी गई धारा 143A मजिस्ट्रेट को यह शक्ति देती है कि समन जारी होने और आरोप तय होने पर वह आरोपी देनदार को चेक राशि का <strong>20% तक अंतरिम मुआवजा</strong> तुरंत शिकायतकर्ता को जमा कराने का आदेश दे सकती है। नोटिस में इस प्रावधान का उल्लेख करने से देनदार पर तत्काल मनोवैज्ञानिक दबाव बनता है।
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5: Hand-crafted SVG Timeline Diagram */}
            <section id="heading-timeline-diagram" className="scroll-mt-28">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                  चेक बाउंस वैधानिक समय सीमा चार्ट (Section 138 Statutory Timeline)
                </h2>
                <p className="text-sm text-slate-600 mb-6">
                  चेक बाउंस की प्रक्रिया पूरी तरह समय-बद्ध (Time-Bound) है। एक दिन की भी देरी से आपका केस खारिज हो सकता है:
                </p>

                {/* Hand-authored SVG Diagram */}
                <div className="p-4 sm:p-6 bg-slate-50 rounded-xl border border-slate-200 overflow-x-auto">
                  <svg
                    viewBox="0 0 800 240"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full min-w-[700px] h-auto font-sans"
                  >
                    {/* Background Tracks */}
                    <rect x="20" y="30" width="760" height="180" rx="16" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
                    
                    {/* Connecting Timeline Arrow */}
                    <line x1="80" y1="100" x2="720" y2="100" stroke="#CBD5E1" strokeWidth="4" strokeDasharray="6 6" />

                    {/* Step 1: Cheque Bounce Memo */}
                    <circle cx="100" cy="100" r="28" fill="#FEF2F2" stroke="#DC2626" strokeWidth="2.5" />
                    <text x="100" y="105" textAnchor="middle" fill="#DC2626" fontSize="13" fontWeight="bold">01</text>
                    <text x="100" y="145" textAnchor="middle" fill="#0F172A" fontSize="13" fontWeight="bold">चेक बाउंस मेमो</text>
                    <text x="100" y="165" textAnchor="middle" fill="#64748B" fontSize="11">बैंक द्वारा चेक अनादर</text>
                    <text x="100" y="180" textAnchor="middle" fill="#DC2626" fontSize="10" fontWeight="semibold">दिन 0 (Day 0)</text>

                    {/* Arrow 1 to 2 */}
                    <path d="M 190 95 L 210 100 L 190 105 Z" fill="#DC2626" />

                    {/* Step 2: Notice Dispatch (30 Days) */}
                    <circle cx="280" cy="100" r="28" fill="#FFFBEB" stroke="#D97706" strokeWidth="2.5" />
                    <text x="280" y="105" textAnchor="middle" fill="#D97706" fontSize="13" fontWeight="bold">02</text>
                    <text x="280" y="145" textAnchor="middle" fill="#0F172A" fontSize="13" fontWeight="bold">लीगल नोटिस प्रेषण</text>
                    <text x="280" y="165" textAnchor="middle" fill="#64748B" fontSize="11">स्पीड पोस्ट + ईमेल द्वारा</text>
                    <text x="280" y="180" textAnchor="middle" fill="#D97706" fontSize="10" fontWeight="bold">30 दिनों के भीतर</text>

                    {/* Arrow 2 to 3 */}
                    <path d="M 370 95 L 390 100 L 370 105 Z" fill="#D97706" />

                    {/* Step 3: 15-Day Cure Window */}
                    <circle cx="460" cy="100" r="28" fill="#F0FDF4" stroke="#16A34A" strokeWidth="2.5" />
                    <text x="460" y="105" textAnchor="middle" fill="#16A34A" fontSize="13" fontWeight="bold">03</text>
                    <text x="460" y="145" textAnchor="middle" fill="#0F172A" fontSize="13" fontWeight="bold">15 दिन भुगतान मोहलत</text>
                    <text x="460" y="165" textAnchor="middle" fill="#64748B" fontSize="11">नोटिस प्राप्ति से गणना</text>
                    <text x="460" y="180" textAnchor="middle" fill="#16A34A" fontSize="10" fontWeight="bold">15 दिन का समय</text>

                    {/* Arrow 3 to 4 */}
                    <path d="M 550 95 L 570 100 L 550 105 Z" fill="#2563EB" />

                    {/* Step 4: Court Complaint Filing (30 Days) */}
                    <circle cx="640" cy="100" r="28" fill="#EFF6FF" stroke="#2563EB" strokeWidth="2.5" />
                    <text x="640" y="105" textAnchor="middle" fill="#2563EB" fontSize="13" fontWeight="bold">04</text>
                    <text x="640" y="145" textAnchor="middle" fill="#0F172A" fontSize="13" fontWeight="bold">मजिस्ट्रेट कोर्ट परिवाद</text>
                    <text x="640" y="165" textAnchor="middle" fill="#64748B" fontSize="11">धारा 142 के तहत केस</text>
                    <text x="640" y="180" textAnchor="middle" fill="#2563EB" fontSize="10" fontWeight="bold">अगले 30 दिनों में</text>
                  </svg>
                </div>

                <div className="mt-4 text-xs text-slate-500 flex flex-wrap items-center justify-between gap-2">
                  <span>💡 तारीखों की सही गणना के लिए हमारे <Link href="/tools/cheque-bounce-deadline-calculator" className="text-red-600 underline font-semibold">चेक बाउंस डेडलाइन कैलकुलेटर टूल</Link> का उपयोग करें।</span>
                  <span className="font-semibold text-slate-700">सुप्रीम कोर्ट दिशानिर्देश 2026</span>
                </div>
              </div>
            </section>

            {/* Section 6: Step-by-Step Dispatch Guide */}
            <section id="heading-sending-guide" className="scroll-mt-28">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                  चेक बाउंस का कानूनी नोटिस भेजने का सही तरीका (Step-by-Step)
                </h2>
                <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
                  <p>
                    नोटिस ड्राफ्ट करना आधा काम है; उसे कानूनन सही तरीके से प्रेषित और रिकॉर्ड करना सबसे महत्वपूर्ण है। अदालत में केस साबित करने के लिए नीचे दिए गए 4 चरणों का पालन करें:
                  </p>

                  <ol className="list-decimal pl-5 space-y-3">
                    <li>
                      <strong>पंजीकृत स्पीड पोस्ट (Registered Speed Post with AD):</strong> नोटिस की हस्ताक्षरित मूल प्रति डाकघर जाकर केवल स्पीड पोस्ट से ही भेजें। साधारण डाक (Ordinary Post) कभी न भेजें क्योंकि साधारण डाक की कोई ट्रैकिंग या डिलीवरी रसीद नहीं होती।
                    </li>
                    <li>
                      <strong>डाक रसीद (Postal Receipt) संभाल कर रखें:</strong> स्पीड पोस्ट काउंटर से मिलने वाली बारकोड रसीद को सुरक्षित चिपका कर रखें। यह रसीद कोर्ट में दाखिल होने वाले शपथ-पत्र का अनिवार्य हिस्सा होती है।
                    </li>
                    <li>
                      <strong>इंडिया पोस्ट वेबसाइट से ट्रैकिंग रिपोर्ट डाउनलोड करें:</strong> नोटिस पोस्ट करने के 4–5 दिन बाद indiapost.gov.in पर जाकर कंसाइनमेंट नंबर डालकर डिलीवरी स्टेटस (Delivered, Refused, या Unclaimed) का प्रिंटआउट निकाल लें।
                    </li>
                    <li>
                      <strong>ईमेल और व्हाट्सएप पर इलेक्ट्रॉनिक तामील (BSA धारा 63):</strong> नोटिस की पीडीएफ प्रति देनदार की ईमेल आईडी और व्हाट्सएप पर भेजें तथा डिलीवरी टिक का स्क्रीनशॉट लें। भारतीय साक्ष्य अधिनियम 2023 की धारा 63 के तहत इलेक्ट्रॉनिक नोटिस को कोर्ट में त्वरित मान्यता प्राप्त है।
                    </li>
                  </ol>
                </div>
              </div>
            </section>

            {/* Section 7: Worked Example */}
            <section id="heading-worked-example" className="scroll-mt-28">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                  केस स्टडी / व्यावहारिक उदाहरण (Worked Example)
                </h2>
                <p className="text-sm text-slate-600 mb-4">
                  समझिए कि वास्तविक जीवन में तारीखों और नोटिस की गणना कैसे की जाती है (उदाहरणात्मक केस):
                </p>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-600">पक्षकार:</span>
                    <span className="font-semibold text-slate-900">रमेश (लेनदार) बनाम संजय (देनदार)</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-600">चेक विवरण:</span>
                    <span className="font-semibold text-slate-900">चेक सं. 304812, राशि ₹3,50,000, दिनांक 10 अक्टूबर 2026</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-600">बैंक में प्रस्तुति:</span>
                    <span className="font-semibold text-slate-900">14 अक्टूबर 2026 (एसबीआई शाखा)</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-600">बैंक वापसी मेमो प्राप्त:</span>
                    <span className="font-semibold text-red-600">16 अक्टूबर 2026 (कारण: खाते में अपर्याप्त निधि)</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-600">नोटिस भेजने की अंतिम तारीख (30 दिन):</span>
                    <span className="font-semibold text-amber-700">15 नवम्बर 2026 (रमेश ने 20 अक्टूबर को नोटिस भेज दिया)</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-600">देनदार को नोटिस डिलीवरी:</span>
                    <span className="font-semibold text-slate-900">23 अक्टूबर 2026 (स्पीड पोस्ट ट्रैकिंग अनुसार)</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-600">15-दिवसीय भुगतान अवधि (Cure Period):</span>
                    <span className="font-semibold text-slate-900">24 अक्टूबर 2026 से 07 नवम्बर 2026 तक</span>
                  </div>
                  <div className="flex justify-between pt-1 font-bold text-slate-900">
                    <span>कोर्ट में केस दाखिल करने की विंडो:</span>
                    <span className="text-emerald-700">08 नवम्बर 2026 से 07 दिसम्बर 2026 (30 दिन)</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8: Court Precedents */}
            <section id="heading-court-orders" className="scroll-mt-28">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                  सुप्रीम कोर्ट के महत्वपूर्ण कानूनी फैसले (Landmark Precedents)
                </h2>
                <p className="text-sm text-slate-600 mb-6">
                  भारतीय अदालतों में चेक बाउंस नोटिस की वैधता पर स्थापित 4 प्रमुख न्यायिक नजीरें:
                </p>

                <div className="space-y-6">
                  {CASE_CITATIONS.map((c, i) => (
                    <div key={i} className="border border-slate-200 rounded-xl p-5 bg-[#FFFEFC] hover:shadow-xs transition-shadow">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-bold text-red-600 bg-red-50 px-2.5 py-1 rounded-md border border-red-100">
                          {c.citation}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">{c.date}</span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mb-1">{c.title}</h3>
                      <p className="text-xs font-semibold text-slate-700 mb-3">{c.parties}</p>
                      
                      <div className="text-xs sm:text-sm text-slate-600 space-y-2 mb-4">
                        <p><strong>मामले के तथ्य: </strong>{c.facts}</p>
                        <p><strong>न्यायालय का आदेश: </strong>{c.holding}</p>
                      </div>

                      <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-lg p-3 text-xs text-emerald-900 font-medium">
                        <strong>मुख्य कानूनी सबक: </strong>{c.takeaway}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 9: Evidence Checklist */}
            <section id="heading-evidence-checklist" className="scroll-mt-28">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                  चेक बाउंस नोटिस व केस के लिए आवश्यक सबूतों की चेकलिस्ट
                </h2>
                <p className="text-sm text-slate-600 mb-5">
                  नोटिस भेजने से पहले यह सुनिश्चित करें कि आपके पास निम्नलिखित 6 प्राथमिक दस्तावेज़ सुरक्षित हैं:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="flex items-start gap-2.5 p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    <span><strong>मूल चेक (Original Dishonoured Cheque):</strong> दोनों तरफ की साफ फोटोकॉपी भी रख लें।</span>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    <span><strong>बैंक रिटर्न मेमो (Bank Memo):</strong> बैंक की सील और चेक बाउंस का आधिकारिक कारण अंकित होना चाहिए।</span>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    <span><strong>ऋण/लेनदेन का सबूत:</strong> बैंक स्टेटमेंट (Bank UTR), इनवॉइस, या <Link href="/templates/promissory-note-format-india" className="text-red-600 underline font-semibold">प्रोमिसरी नोट (Promissory Note)</Link>।</span>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    <span><strong>डाक रसीद (Speed Post Receipt):</strong> डाकघर से प्राप्त मूल रसीद कंसाइनमेंट नंबर सहित।</span>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    <span><strong>ऑनलाइन ट्रैकिंग रिपोर्ट:</strong> इंडिया पोस्ट से डाउनलोड की गई डिलीवरी या अस्वीकृति की प्रमाणित रिपोर्ट।</span>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    <span><strong>धारा 63 BSA इलेक्ट्रॉनिक प्रमाणपत्र:</strong> ईमेल या व्हाट्सएप डिलीवरी हेतु वैधानिक शपथ-पत्र।</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 10: Next Steps If They Don't Pay */}
            <section id="heading-next-steps" className="scroll-mt-28">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                  यदि देनदार 15 दिनों में पैसा न दे तो आगे क्या कानूनी कदम उठाएं?
                </h2>
                <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
                  <p>
                    यदि 15 दिन बीत जाने के बाद भी चेक जारीकर्ता भुगतान नहीं करता है, तो आप तुरंत निम्नलिखित कानूनी कदम उठा सकते हैं:
                  </p>

                  <div className="space-y-3">
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <h3 className="font-bold text-slate-900 mb-1">
                        1. मजिस्ट्रेट कोर्ट में धारा 138 का आपराधिक परिवाद (Criminal Complaint)
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        15 दिन पूरे होने के अगले 30 दिनों के भीतर न्यायिक मजिस्ट्रेट प्रथम श्रेणी (JMFC) या सीएमएम कोर्ट में आपराधिक केस दायर करें। कोर्ट आरोपी को समन जारी करेगी। पेश न होने पर जमानती और गैर-जमानती वारंट जारी किए जाते हैं।
                      </p>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <h3 className="font-bold text-slate-900 mb-1">
                        2. धारा 143A के तहत 20% अंतरिम मुआवजा आवेदन
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        केस की पहली पेशी या आरोप तय होते ही आपके वकील धारा 143A के तहत आवेदन लगाते हैं, जिससे अदालत देनदार को 60 दिनों में चेक राशि का 20% आपको सीधे अदा करने का आदेश देती है।
                      </p>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <h3 className="font-bold text-slate-900 mb-1">
                        3. सिविल कोर्ट में समरी सूट (Order 37 CPC Money Recovery)
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        आप आपराधिक केस के साथ-साथ दीवानी अदालत में <Link href="/cheque-bounce-and-civil-suit-together" className="text-red-600 font-semibold underline hover:text-red-800">समानांतर सिविल वसूली वाद</Link> भी दायर कर सकते हैं। ऑर्डर 37 के तहत देनदार की संपत्तियों की कुर्की (Attachment Before Judgment) कराई जा सकती है।
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* LegalRecovery CTA Box */}
            <ChequeBounceHindiNoticeCTA />

            {/* Section 11: FAQs */}
            <section id="heading-faqs" className="scroll-mt-28">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
                  अक्सर पूछे जाने वाले सवाल (Frequently Asked Questions)
                </h2>
                <div className="divide-y divide-slate-200">
                  {FAQS.map((faq, idx) => (
                    <div key={idx} className="py-4 first:pt-0 last:pb-0">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 12: Primary Sources & Legal References */}
            <section id="heading-sources" className="scroll-mt-28">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                  प्राथमिक कानूनी संदर्भ और आधिकारिक स्रोत (Primary Statutory Sources)
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mb-4">
                  यह प्रारूप एवं कानूनी मार्गदर्शन भारत के केंद्रीय अधिनियमों और सर्वोच्च न्यायालय के प्रकाशित निर्णयों पर आधारित है:
                </p>
                <ul className="space-y-2 text-xs">
                  {PRIMARY_SOURCES.map((source, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-red-600 font-bold shrink-0">•</span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-700 hover:text-red-700 underline underline-offset-2 transition-colors"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-400">
                  अंतिम वैधानिक अद्यतन: 4 नवम्बर 2026 • LegalRecovery.in विधिक अनुसंधान प्रभाग
                </div>
              </div>
            </section>

            {/* Related Recovery Guides & Internal Links */}
            <div className="pt-4">
              <h3 className="text-base font-bold text-slate-900 mb-4">
                संबंधित कानूनी मार्गदर्शिकाएं एवं उपयोगी लिंक्स
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm mb-6">
                <Link
                  href="/cheque-bounce-notice-timeline-section-138"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-red-400 hover:text-red-700 transition-colors block shadow-2xs"
                >
                  <span className="font-semibold block text-slate-900">चेक बाउंस नोटिस टाइमलाइन गाइड</span>
                  <span className="text-slate-500 text-xs">30 दिन और 15 दिन के नियमों की विस्तृत समय सारणी</span>
                </Link>
                <Link
                  href="/cheque-bounce-case-against-company-directors"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-red-400 hover:text-red-700 transition-colors block shadow-2xs"
                >
                  <span className="font-semibold block text-slate-900">कंपनी और निदेशकों के खिलाफ चेक बाउंस (s.141)</span>
                  <span className="text-slate-500 text-xs">डायरेक्टरों के व्यक्तिगत आपराधिक दायित्व का कानूनी विश्लेषण</span>
                </Link>
                <Link
                  href="/cheque-bounce-and-civil-suit-together"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-red-400 hover:text-red-700 transition-colors block shadow-2xs"
                >
                  <span className="font-semibold block text-slate-900">चेक बाउंस केस और सिविल सूट एक साथ</span>
                  <span className="text-slate-500 text-xs">आपराधिक परिवाद और ऑर्डर 37 दीवानी वसूली वाद का समानांतर संचालन</span>
                </Link>
                <Link
                  href="/hi/cheque-bounce-notice-kitne-din-mein"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-red-400 hover:text-red-700 transition-colors block shadow-2xs"
                >
                  <span className="font-semibold block text-slate-900">चेक बाउंस नोटिस कितने दिन में भेजें?</span>
                  <span className="text-slate-500 text-xs">हिंदी में समय सीमा और कानूनी प्रक्रिया की संपूर्ण जानकारी</span>
                </Link>
                <Link
                  href="/legal-notice-charges"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-red-400 hover:text-red-700 transition-colors block shadow-2xs"
                >
                  <span className="font-semibold block text-slate-900">लीगल नोटिस भेजने का खर्च व फीस</span>
                  <span className="text-slate-500 text-xs">अधिवक्ता शुल्क, स्पीड पोस्ट दरें और पारदर्शी मूल्य निर्धारण</span>
                </Link>
                <Link
                  href="/tools/cheque-bounce-deadline-calculator"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-red-400 hover:text-red-700 transition-colors block shadow-2xs"
                >
                  <span className="font-semibold block text-slate-900">चेक बाउंस डेडलाइन कैलकुलेटर टूल</span>
                  <span className="text-slate-500 text-xs">बैंक मेमो दिनांक से नोटिस और केस दाखिल करने की सटीक गणना</span>
                </Link>
              </div>

              <RelatedRecoveryGuides />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
