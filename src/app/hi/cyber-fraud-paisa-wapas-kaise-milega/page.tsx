import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";
import CyberFraudHindiNoticeCTA from "./CyberFraudHindiNoticeCTA";
import CyberFraudHindiTOC from "./CyberFraudHindiTOC";
import CyberFraudHindiTabs from "./CyberFraudHindiTabs";

export const revalidate = 86400;

const PAGE_URL = `${SITE_URL}/hi/cyber-fraud-paisa-wapas-kaise-milega`;
const EN_PAIR_URL = `${SITE_URL}/recovery/fraud-transaction-amount`;
const PUBLISHED_DATE = "2026-11-04";
const MODIFIED_DATE = "2026-11-04";

export const metadata: Metadata = {
  title: "साइबर फ्रॉड का पैसा वापस कैसे मिलेगा? बैंक की जिम्मेदारी",
  description:
    "UPI या कार्ड फ्रॉड के बाद 1930, बैंक शिकायत और RBI के जीरो लायबिलिटी नियम — पैसा वापस पाने की पूरी प्रक्रिया हिंदी में।",
  keywords: [
    "साइबर फ्रॉड पैसा वापस कैसे मिलेगा",
    "upi fraud paisa wapas kaise milega",
    "online fraud paisa wapas",
    "fraud ka paisa wapas kaise milega",
    "cyber fraud complaint hindi",
    "rbi zero liability guidelines in hindi",
    "1930 cyber crime complaint refund",
    "bank se cyber fraud ka paisa wapas kaise le",
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
    title: "साइबर फ्रॉड का पैसा वापस कैसे मिलेगा? बैंक की जिम्मेदारी",
    description:
      "UPI या कार्ड फ्रॉड के बाद 1930, बैंक शिकायत और RBI के जीरो लायबिलिटी नियम — पैसा वापस पाने की पूरी प्रक्रिया हिंदी में।",
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
        alt: "साइबर फ्रॉड का पैसा वापस कैसे मिलेगा? बैंक की जिम्मेदारी",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "साइबर फ्रॉड का पैसा वापस कैसे मिलेगा? बैंक की जिम्मेदारी",
    description:
      "UPI या कार्ड फ्रॉड के बाद 1930, बैंक शिकायत और RBI के जीरो लायबिलिटी नियम — पैसा वापस पाने की पूरी प्रक्रिया हिंदी में।",
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
    title:
      "Reserve Bank of India (RBI) Circular — Customer Protection: Limiting Liability of Customers in Unauthorised Electronic Banking Transactions (DBR.No.Leg.BC.78/09.07.005/2017-18)",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11040",
  },
  {
    title:
      "National Cyber Crime Reporting Portal & 1930 Helpline Framework (Citizen Financial Cyber Fraud Reporting & Management System - CFCFRMS) — Ministry of Home Affairs, Government of India",
    url: "https://cybercrime.gov.in/",
  },
  {
    title:
      "Reserve Bank - Integrated Ombudsman Scheme, 2021 (RB-IOS 2021) — Redressal of Deficiencies in Banking Services",
    url: "https://cms.rbi.org.in/",
  },
  {
    title:
      "Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS Section 457 — Application for Disposal & Release of Seized Property/Frozen Bank Funds)",
    url: "https://www.indiacode.nic.in/handle/123456789/21733",
  },
  {
    title:
      "Information Technology Act, 2000 (Section 43A — Compensation for Failure to Protect Data & Section 66D Cheating by Personation Using Computer Resource)",
    url: "https://www.indiacode.nic.in/handle/123456789/1999",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Admissibility of Bank Statements, Transaction SMS & Digital Logs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const CASE_CITATIONS = [
  {
    title: "लापरवाही साबित करने का भार बैंक पर, ग्राहक पर नहीं (Burden of Proof on Bank)",
    parties: "State Bank of India v. P.V. George & Ors.",
    citation: "WP(C) No. 34120 of 2019, High Court of Kerala",
    date: "आदेश दिनांक 12 जनवरी 2021",
    facts:
      "याचिकाकर्ता के बचत बैंक खाते से बिना उसकी जानकारी के कई अनधिकृत इलेक्ट्रॉनिक लेनदेन के जरिए ₹2.4 लाख की निकासी हो गई। बैंक ने दावा किया कि लेनदेन ग्राहक के पंजीकृत मोबाइल पर भेजे गए ओटीपी के माध्यम से हुए थे, इसलिए ग्राहक ने लापरवाही से पासवर्ड साझा किया होगा। बैंक ने रिफंड देने से मना कर दिया।",
    holding:
      "केरल उच्च न्यायालय ने बैंक की दलील खारिज करते हुए फैसला दिया कि भारतीय रिज़र्व बैंक के 6 जुलाई 2017 के सर्कुलर के तहत यह साबित करने की पूरी कानूनी जिम्मेदारी बैंक की है कि ग्राहक ने क्रेडेंशियल्स साझा किए थे। मात्र यह कह देना कि ओटीपी भेजा गया था, बैंक को उसकी सुरक्षा जिम्मेदारी से मुक्त नहीं करता। अदालत ने बैंक को ब्याज सहित पूरी रकम लौटाने का आदेश दिया।",
    amount: "₹2,40,000 पूर्ण मूलधन वापसी + 9% वार्षिक ब्याज + ₹15,000 विधिक व्यय",
    takeaway:
      "यदि बैंक कहता है कि 'ओटीपी गया था, हम जिम्मेदार नहीं हैं', तो बैंक को अदालत या लोकपाल में आईपी लॉग्स और फॉरेंसिक सबूत पेश करने होंगे। बिना ठोस फॉरेंसिक साक्ष्य के बैंक ग्राहक पर आरोप लगाकर पल्ला नहीं झाड़ सकता।",
  },
  {
    title: "सिम-स्वैप और तकनीकी विफलता पर बैंक की सेवा में कमी (SIM Swap Bank Liability)",
    parties: "ICICI Bank Ltd. v. Dr. Sanjeev Aggarwal",
    citation: "First Appeal No. 498 of 2018, State Consumer Disputes Redressal Commission, New Delhi",
    date: "आदेश दिनांक 19 अगस्त 2020",
    facts:
      "धोखेबाजों ने सिम-स्वैप फ्रॉड के जरिए शिकायतकर्ता का मोबाइल नंबर ब्लॉक कराया और उसी रात इंटरनेट बैंकिंग के जरिए ₹4.85 लाख ट्रांसफर कर लिए। पीड़ित ने अगली सुबह सिम और बैंक दोनों को सूचना दी। बैंक ने सुरक्षा खामी मानने से इनकार कर दिया।",
    holding:
      "राज्य उपभोक्ता आयोग ने बैंक को 'सेवा में घोर कमी' (Gross Deficiency in Service) का दोषी ठहराया। आयोग ने माना कि जब बैंक के सिस्टम में आधी रात को एक नए आईपी एड्रेस और नए अनरजिस्टर्ड ब्राउजर से असाधारण बड़ी रकम कई नए खातों में ट्रांसफर हो रही थी, तो बैंक के फ्रॉड मॉनिटरिंग सिस्टम को इसे तुरंत ब्लॉक करना चाहिए था। आयोग ने बैंक को पूरी राशि वापस करने और भारी मुआवजा देने का निर्देश दिया।",
    amount: "₹4,85,000 की 100% वापसी + ₹75,000 मानसिक प्रताड़ना मुआवजा + ₹25,000 कानूनी खर्च",
    takeaway:
      "बैंकों के पास असामान्य लेन-देन रोकने के लिए अत्याधुनिक फ्रॉड डिटेक्शन सिस्टम होना अनिवार्य है। असामान्य समय या नए डिवाइस से हुए ट्रांजैक्शन पर बैंक अपनी निगरानी विफलता से बच नहीं सकता।",
  },
  {
    title: "10 दिनों के भीतर शैडो क्रेडिट न देने पर आरबीआई लोकपाल का हर्जाना आदेश",
    parties: "श्री राजेश कुमार बनाम पंजाब नेशनल बैंक",
    citation: "Complaint No. 202223014008912, RBI Integrated Ombudsman (New Delhi)",
    date: "अवार्ड दिनांक 05 अक्टूबर 2023",
    facts:
      "शिकायतकर्ता के खाते से फर्जी यूपीआई कलेक्ट रिक्वेस्ट के जरिए ₹1,15,000 डेबिट हो गए। शिकायतकर्ता ने घटना के 6 घंटे के भीतर बैंक शाखा और 1930 हेल्पलाइन पर शिकायत दर्ज कराई। बैंक ने 45 दिनों तक न तो जांच पूरी की और न ही 10 कार्य दिवसों के भीतर अस्थायी 'शैडो क्रेडिट' (Shadow Credit) दिया।",
    holding:
      "आरबीआई लोकपाल ने बैंक को फटकार लगाते हुए कहा कि सर्कुलर के पैरा 9 का उल्लंघन करते हुए बैंक ने निर्धारित 10 दिनों में पीड़ित को शैडो क्रेडिट नहीं दिया। लोकपाल ने बैंक को निर्देश दिया कि वह शिकायतकर्ता के खाते में ₹1,15,000 तुरंत क्रेडिट करे तथा ग्राहक को मानसिक परेशानी के लिए ₹20,000 का अतिरिक्त मुआवजा प्रदान करे।",
    amount: "₹1,15,000 का पूर्ण रिफंड + ₹20,000 का दंडात्मक मुआवजा",
    takeaway:
      "यदि आप 3 दिनों में बैंक को रिपोर्ट करते हैं, तो बैंक कानूनी रूप से 10 कार्य दिवसों में शैडो क्रेडिट देने के लिए बाध्य है। ऐसा न करने पर आरबीआई लोकपाल बैंक पर अतिरिक्त हर्जाना लगाता है।",
  },
  {
    title: "साइबर सेल द्वारा फ्रीज फंड्स को रिलीज करने का मजिस्ट्रेट कोर्ट आदेश",
    parties: "अमित सक्सेना बनाम राज्य (NCT दिल्ली) एवं अन्य",
    citation: "Criminal Misc. Application No. 892/2024, CMM Court, Patiala House, New Delhi",
    date: "आदेश दिनांक 14 मार्च 2024",
    facts:
      "शिकायतकर्ता से निवेश के नाम पर ₹3.5 लाख की ठगी हुई थी। 1930 पर कॉल करने के कारण साइबर पुलिस ने संदिग्ध लाभार्थी के यस बैंक खाते में ₹2.8 लाख फ्रीज करा दिए थे। आरोपी फरार था और बैंक बिना कोर्ट आदेश के पैसा पीड़ित के खाते में भेजने को तैयार नहीं था।",
    holding:
      "मुख्य मेट्रोपॉलिटन मजिस्ट्रेट (CMM) ने धारा 457 CrPC (अब Section 457 BNSS) के तहत आवेदन स्वीकार किया। अदालत ने जांच अधिकारी की रिपोर्ट और बैंक रिकॉर्ड्स का सत्यापन करने के बाद आदेश दिया कि फ्रीज की गई ₹2.8 लाख की राशि वास्तविक स्वामी (शिकायतकर्ता) को एक क्षतिपूर्ति बंधपत्र (Indemnity Bond) लेकर सीधे बैंक ट्रांसफर के जरिए वापस सौंपी जाए।",
    amount: "₹2,80,000 की न्यायिक सुपुर्दगी आदेश (Direct Court Release)",
    takeaway:
      "जब 1930 पर शिकायत के बाद ठग के खाते में रकम फ्रीज हो जाती है, तो उसे अपने खाते में वापस लाने का विधिक रास्ता मजिस्ट्रेट अदालत में धारा 457 BNSS के तहत अर्जी लगाना है।",
  },
];

const MYTH_FACT_PAIRS = [
  {
    myth: "यदि मेरे खाते से ओटीपी या यूपीआई पिन से पैसा कटा है, तो बैंक कभी एक रुपया भी वापस नहीं करेगा।",
    fact: "गलत। आरबीआई के 6 जुलाई 2017 के सर्कुलर और अदालती नजीरों के अनुसार, यदि फ्रॉड किसी थर्ड-पार्टी ब्रीच, मैलवेयर, स्क्रीन-शेयरिंग या फिशिंग के कारण हुआ है और बैंक यह सिद्ध नहीं कर पाता कि ग्राहक ने जानबूझकर धोखाधड़ी की, तो 3 दिनों में सूचना देने पर ग्राहक की देनदारी शून्य होती है। बैंक पर सबूत का भार (Burden of Proof) होता है।",
  },
  {
    myth: "1930 पर शिकायत दर्ज करा देने के बाद मेरा काम खत्म हो गया, पुलिस खुद पैसा वापस दिला देगी।",
    fact: "गलत। 1930 हेल्पलाइन केवल संदिग्ध खातों में फंड्स को आपातकालीन फ्रीज (Lien Mark) करवाती है। पुलिस पैसा आपके खाते में ट्रांसफर नहीं कर सकती। पैसा वापस पाने के लिए आपको अपने बैंक में लिखित Zero Liability क्लेम देना होता है और फ्रीज फंड्स के लिए कोर्ट में Section 457 BNSS अर्जी लगानी होती है।",
  },
  {
    myth: "बैंक ने मेरी शिकायत बंद (Close) कर दी है, अब पैसे वापस पाने का कोई रास्ता नहीं बचा है।",
    fact: "गलत। बैंक शाखा या कस्टमर केयर द्वारा शिकायत खारिज करना अंतिम निर्णय नहीं है। बैंक के इनकार के बाद आप बैंक के प्रिंसिपल नोडल ऑफिसर को लीगल नोटिस भेज सकते हैं और भारतीय रिज़र्व बैंक के इंटीग्रेटेड ओम्बड्समैन (CMS Portal) में शिकायत कर सकते हैं, जहां बैंक के फैसलों को अक्सर पलट दिया जाता है।",
  },
  {
    myth: "साइबर फ्रॉड में डूबा पैसा वापस पाने के लिए सालों तक लंबा पुलिस केस लड़ना पड़ता है।",
    fact: "गलत। आरबीआई बैंकिंग रेगुलेशन के तहत बैंक की देनदारी का निर्धारण एक त्वरित प्रशासनिक प्रक्रिया है। यदि बैंक 30 दिनों में शिकायत का निपटारा नहीं करता, तो आरबीआई लोकपाल 30 से 60 दिनों के भीतर मामले का निपटारा कर बैंक को रिफंड का आदेश दे देता है।",
  },
  {
    myth: "गलत खाते या अनजाने क्यूआर कोड पर हुआ यूपीआई ट्रांसफर गैर-कानूनी नहीं माना जाता।",
    fact: "गलत। भारतीय अनुबंध अधिनियम की धारा 72 (Section 72 Contract Act) और भारतीय न्याय संहिता 2023 की धारा 318 (धोखाधड़ी) के तहत बिना वैध प्रतिफल के किसी अन्य का धन अपने पास रखना गैर-कानूनी है। प्राप्तकर्ता और बैंक दोनों इस धन को रोकने और लौटाने के कानूनी दायरे में आते हैं।",
  },
];

const FAQ_ITEMS = [
  {
    question: "साइबर फ्रॉड होने पर पैसा वापस पाने के लिए सबसे पहला कदम क्या उठाना चाहिए?",
    answer:
      "फ्रॉड होने के पहले 1–2 घंटे (Golden Hour) के भीतर राष्ट्रीय साइबर क्राइम हेल्पलाइन नंबर 1930 पर तुरंत कॉल करें या cybercrime.gov.in पर रिपोर्ट दर्ज करें। 1930 पर विवरण दर्ज होते ही 'सिटिजन फाइनेंशियल साइबर फ्रॉड रिपोर्टिंग एंड मैनेजमेंट सिस्टम' (CFCFRMS) के जरिए धोखेबाज के बैंक खाते में रकम तुरंत फ्रीज कर दी जाती है। इसके तुरंत बाद अपने बैंक को लिखित ईमेल और कस्टमर केयर पर अनधिकृत डेबिट की सूचना देकर औपचारिक कंप्लेंट टोकन नंबर प्राप्त करें।",
  },
  {
    question: "आरबीआई के 'जीरो लायबिलिटी' (Zero Liability) नियम के तहत बैंक से पूरा रिफंड कब मिलता है?",
    answer:
      "आरबीआई सर्कुलर (DBR.No.Leg.BC.78/09.07.005/2017-18) के अनुसार, यदि धोखाधड़ी बैंक की सुरक्षा खामी के कारण हुई है, तो ग्राहक की देनदारी शून्य होती है। वहीं यदि धोखाधड़ी तीसरे पक्ष (थर्ड-पार्टी ब्रीच/सिम-स्वैप/मैलवेयर) के कारण हुई है और ग्राहक अनधिकृत लेनदेन का एसएमएस/ईमेल मिलने के 3 कार्य दिवसों (3 Working Days) के भीतर बैंक को सूचित कर देता है, तो ग्राहक की देयता पूर्णतः 'शून्य' होती है और बैंक को 100% राशि वापस करनी होती है।",
  },
  {
    question: "अगर फ्रॉड की सूचना बैंक को 3 दिन के बाद दी जाए तो क्या पैसा वापस मिलेगा?",
    answer:
      "यदि आप 4 से 7 कार्य दिवसों के भीतर बैंक को सूचित करते हैं, तो आपकी देनदारी सीमित (Limited Liability) होती है—बेसिक बचत खातों के लिए अधिकतम ₹5,000, अन्य बचत/चालू खातों के लिए ₹10,000, और प्लेटिनम क्रेडिट कार्ड/उच्च मूल्य खातों के लिए अधिकतम ₹25,000 तक का ही नुकसान ग्राहक पर आ सकता है, बाकी की पूरी अतिरिक्त राशि बैंक को वहन करनी होती है। यदि सूचना 7 दिनों के बाद दी जाती है, तो बैंक की बोर्ड-अनुमोदित नीति के आधार पर दावा तय होता है।",
  },
  {
    question: "बैंक को फ्रॉड की सूचना देने के कितने दिनों में पैसा वापस (Shadow Credit) मिलता है?",
    answer:
      "आरबीआई सर्कुलर के पैरा 9 के तहत, ग्राहक द्वारा अनधिकृत इलेक्ट्रॉनिक लेनदेन की सूचना देने की तारीख से ठीक 10 कार्य दिवसों (10 Working Days) के भीतर बैंक को पीड़ित के खाते में उतनी राशि का अस्थायी क्रेडिट (Shadow/Provisional Credit) प्रदान करना अनिवार्य है। इसके अलावा पूरी जांच अधिकतम 90 दिनों में पूरी होनी चाहिए।",
  },
  {
    question: "यदि बैंक शिकायत खारिज कर दे और कहे कि 'आपने ओटीपी शेयर किया था' तो क्या करें?",
    answer:
      "आरबीआई नियमों के पैरा 12 के तहत ग्राहक की लापरवाही सिद्ध करने का भार (Burden of Proof) बैंक पर होता है। बैंक केवल जुबानी आरोप लगाकर पल्ला नहीं झाड़ सकता; उसे फॉरेंसिक साक्ष्य, आईपी एड्रेस और डिवाइस फिंगरप्रिंट साबित करने होते हैं। बैंक द्वारा दावा खारिज किए जाने पर तुरंत बैंक के प्रिंसिपल नोडल ऑफिसर को एडवोकेट लीगल नोटिस भेजें और आरबीआई लोकपाल पोर्टल (cms.rbi.org.in) पर 30 दिन के भीतर शिकायत दर्ज करें।",
  },
  {
    question: "1930 पर शिकायत के बाद पुलिस ने आरोपी का बैंक खाता फ्रीज कर दिया, अब पैसा मेरे खाते में कैसे आएगा?",
    answer:
      "जब साइबर पुलिस धोखेबाज के खाते में रकम फ्रीज (Lien Mark) करवा देती है, तो बैंक उस राशि को सीधे आपके खाते में ट्रांसफर नहीं कर सकता। इसके लिए आपको भारतीय नागरिक सुरक्षा संहिता, 2023 की धारा 457 (Section 457 of BNSS / 457 CrPC) के तहत संबंधित मजिस्ट्रेट कोर्ट में 'प्रॉपर्टी रिलीज' (Return of Seized Funds) की अर्जी लगानी होती है। कोर्ट द्वारा पुलिस जांच रिपोर्ट सत्यापित करने के बाद बैंक को रकम आपके खाते में ट्रांसफर करने का न्यायिक आदेश दिया जाता है।",
  },
  {
    question: "UPI फ्रॉड में Google Pay, PhonePe या Paytm से पैसे कटने पर रिफंड कैसे पाएं?",
    answer:
      "UPI ऐप में जाकर संबंधित ट्रांजैक्शन खोलें और 'Raise Dispute / Report Fraud' पर क्लिक करें। इसके साथ ही अपने उस बैंक को रिपोर्ट करें जिससे बैंक खाता लिंक था, क्योंकि यूपीआई केवल एक पेमेंट सर्विस प्रोवाइडर (PSP) है, जबकि मुख्य देयता आपके मूल बैंक (Issuing Bank) की होती है। बैंक और NPCI दोनों के पास 3 दिनों में शिकायत दर्ज कराने पर आरबीआई सर्कुलर के तहत सुरक्षा प्राप्त होती है।",
  },
  {
    question: "क्या साइबर फ्रॉड के मामलों में बैंक के खिलाफ उपभोक्ता अदालत (Consumer Court) जाया जा सकता है?",
    answer:
      "हां। उपभोक्ता संरक्षण अधिनियम, 2019 (CPA 2019) की धारा 35 के तहत आप ई-दाखिल / ई-जाग्रति (e-Jagriti) पोर्टल पर अपने जिले के उपभोक्ता आयोग में बैंक के खिलाफ 'सेवा में कमी' (Deficiency in Service) का केस दर्ज कर सकते हैं। उपभोक्ता अदालतें न केवल पूरी फ्रॉड राशि ब्याज सहित वापस दिलाती हैं, बल्कि मानसिक उत्पीड़न के लिए ₹25,000 से लेकर ₹1,00,000 तक का मुआवजा भी बैंक पर लगाती हैं।",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ऑनलाइन फ्रॉड हुआ? पैसा वापस पाने के लिए बैंक और RBI नियम",
  description:
    "UPI या कार्ड फ्रॉड के बाद 1930, बैंक शिकायत और RBI के जीरो लायबिलिटी नियम — पैसा वापस पाने की पूरी प्रक्रिया हिंदी में।",
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
      url: `${SITE_URL}/logo.png`,
    },
  },
  datePublished: PUBLISHED_DATE,
  dateModified: MODIFIED_DATE,
  citation: PRIMARY_SOURCES.map((s) => s.url),
  about: [
    {
      "@type": "Thing",
      name: "Cyber Fraud Money Refund",
      description: "Recovery of unauthorized digital banking, UPI and card transactions under RBI regulations.",
    },
    {
      "@type": "Thing",
      name: "RBI Zero Liability Policy",
      description: "Customer protection in unauthorized electronic banking transactions.",
    },
    {
      "@type": "Thing",
      name: "National Cyber Crime Reporting Helpline 1930",
      description: "Indian government citizen financial cyber fraud reporting system.",
    },
  ],
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
      name: "Banking & Payment Recovery",
      item: `${SITE_URL}/recovery/fraud-transaction-amount`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "साइबर फ्रॉड पैसा वापस कैसे मिलेगा",
      item: PAGE_URL,
    },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function CyberFraudHindiPage() {
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
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

      <main className="min-h-screen bg-slate-50 text-slate-900" lang="hi">
        {/* Dark Hero Section matching /cheque-bounce-case-against-company-directors and /legal-notice-to/irctc */}
        <section className="bg-gradient-to-br from-[#111827] via-[#1E293B] to-[#0F172A] text-white pt-10 pb-14 sm:pb-20 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-950/80 text-red-400 border border-red-800/80">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                आरबीआई जीरो लायबिलिटी नियम • धारा 457 BNSS विधिक गाइड
              </span>
              <span className="text-xs text-slate-400">
                अपडेटेड: 4 नवंबर 2026 • लीगल ड्राफ्टिंग डेस्क
              </span>
              <Link
                href="/recovery/fraud-transaction-amount"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-600 text-xs font-medium transition-colors"
                hrefLang="en-IN"
              >
                <span>Read in English: Fraud Recovery Guide →</span>
              </Link>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white max-w-4xl mb-6">
              ऑनलाइन फ्रॉड हुआ? पैसा वापस पाने के लिए बैंक और RBI नियम
            </h1>

            {/* Answer Box (सीधा जवाब — 40–60 words passage-first statutory answer) */}
            <div
              id="heading-overview"
              className="bg-slate-900/90 border-l-4 border-[#DC2626] rounded-r-2xl p-4 sm:p-6 max-w-4xl shadow-xl mb-8 scroll-mt-28"
            >
              <div className="flex items-center gap-2 text-red-400 text-xs font-bold uppercase tracking-wider mb-2">
                <span>⚡ सीधा जवाब (Statutory Quick Answer — RBI Zero Liability &amp; 1930 Framework)</span>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-slate-100 leading-relaxed font-medium">
                <strong>ऑनलाइन फ्रॉड होने पर सबसे पहले 1930 हेल्पलाइन पर कॉल कर संदिग्ध खाते में रकम फ्रीज कराएं और 3 कार्य दिवसों के भीतर अपने बैंक को लिखित शिकायत दें।</strong> भारतीय रिज़र्व बैंक के 2017 सर्कुलर के तहत 3 दिनों में सूचना देने पर ग्राहक की देनदारी <strong>शून्य (Zero Liability)</strong> होती है और बैंक को <strong>10 कार्य दिवसों में अस्थायी शैडो क्रेडिट</strong> देना अनिवार्य है। यदि बैंक टालमटोल करे तो वकील के माध्यम से लीगल नोटिस भेजकर <strong>आरबीआई लोकपाल</strong> व अदालत से पूरी रकम ब्याज सहित वसूली जा सकती है।
              </p>
            </div>

            {/* Key Statutory Metric Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mb-8">
              <div className="bg-slate-800/70 border border-slate-700/80 rounded-xl p-3.5 sm:p-4">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                  गोल्डन ऑवर (Golden Hour)
                </span>
                <p className="text-lg sm:text-xl font-extrabold text-white mt-1">
                  1–2 घंटे में 1930
                </p>
                <span className="text-[11px] text-slate-300">
                  CFCFRMS द्वारा ठग का खाता फ्रीज
                </span>
              </div>

              <div className="bg-slate-800/70 border border-red-500/40 rounded-xl p-3.5 sm:p-4">
                <span className="text-[11px] uppercase tracking-wider text-red-300 font-semibold block">
                  जीरो लायबिलिटी समय सीमा
                </span>
                <p className="text-lg sm:text-xl font-extrabold text-red-400 mt-1">
                  3 कार्य दिवस
                </p>
                <span className="text-[11px] text-slate-300">
                  बैंक को लिखित सूचना देने पर 100% रिफंड
                </span>
              </div>

              <div className="bg-slate-800/70 border border-slate-700/80 rounded-xl p-3.5 sm:p-4">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                  बैंक शैडो क्रेडिट
                </span>
                <p className="text-lg sm:text-xl font-extrabold text-amber-400 mt-1">
                  10 कार्य दिवस
                </p>
                <span className="text-[11px] text-slate-300">
                  जांच के दौरान खाते में अस्थायी रिफंड
                </span>
              </div>

              <div className="bg-slate-800/70 border border-slate-700/80 rounded-xl p-3.5 sm:p-4">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                  आरबीआई लोकपाल शिकायत
                </span>
                <p className="text-lg sm:text-xl font-extrabold text-emerald-400 mt-1">
                  30 दिन बाद
                </p>
                <span className="text-[11px] text-slate-300">
                  बैंक के इनकार पर ₹20 लाख तक निपटारा
                </span>
              </div>
            </div>

            {/* Hero CTA Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <CyberFraudHindiNoticeCTA
                variant="secondary"
                buttonText="बैंक को 15-दिवसीय लीगल नोटिस भेजें"
              />
              <Link
                href="/recovery/fraud-transaction-amount"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-slate-200 bg-slate-800/90 hover:bg-slate-700 border border-slate-700 transition-colors text-center"
              >
                विस्तृत अंग्रेजी गाइड देखें (English Recovery Framework) →
              </Link>
            </div>
          </div>
        </section>

        {/* Main Content Layout with Breadcrumbs & Sticky Left TOC */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Banking Recovery", href: "/recovery/fraud-transaction-amount" },
                {
                  label: "साइबर फ्रॉड पैसा वापस कैसे मिलेगा",
                  href: "/hi/cyber-fraud-paisa-wapas-kaise-milega",
                },
              ]}
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Left Sidebar Sticky TOC */}
            <CyberFraudHindiTOC />

            {/* Right Main Column */}
            <div className="flex-1 min-w-0 space-y-12 w-full">
              {/* SECTION 1: Master Statutory Table (Archetype H2) */}
              <section
                id="heading-liability-matrix"
                className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-8 shadow-xs scroll-mt-28"
              >
                <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-[#DC2626] border border-red-200 mb-3">
                  आरबीआई वैधानिक देयता मैट्रिक्स • RBI Circular 2017 &amp; TAT Rules
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                  साइबर फ्रॉड में बैंक व ग्राहक देनदारी तालिका (RBI Matrix)
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  <strong>भारतीय रिज़र्व बैंक (Reserve Bank of India) के सर्कुलर DBR.No.Leg.BC.78/09.07.005/2017-18 के तहत अनधिकृत इलेक्ट्रॉनिक बैंकिंग धोखाधड़ी में ग्राहक की देनदारी केवल इस बात पर तय होती है कि उसने बैंक को कितने दिनों के भीतर सूचित किया है।</strong> नीचे दी गई तालिका में रिपोर्टिंग समय, ग्राहक की अधिकतम देयता, बैंक का रिफंड दायित्व और वैधानिक नियम स्पष्ट दिए गए हैं:
                </p>

                <div className="overflow-x-auto -mx-5 sm:mx-0 px-5 sm:px-0">
                  <table className="w-full text-left border-collapse border border-slate-200 rounded-xl overflow-hidden text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3 sm:p-3.5 font-bold border-b border-slate-700">
                          सूचना देने का समय (Reporting Window)
                        </th>
                        <th className="p-3 sm:p-3.5 font-bold border-b border-slate-700">
                          ग्राहक की अधिकतम देनदारी (Customer Liability)
                        </th>
                        <th className="p-3 sm:p-3.5 font-bold border-b border-slate-700">
                          बैंक का रिफंड दायित्व (Bank Liability)
                        </th>
                        <th className="p-3 sm:p-3.5 font-bold border-b border-slate-700">
                          शैडो क्रेडिट की समय सीमा (Shadow Reversal)
                        </th>
                        <th className="p-3 sm:p-3.5 font-bold border-b border-slate-700">
                          सबूत का भार (Burden of Proof)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr className="hover:bg-slate-50 transition-colors bg-emerald-50/40">
                        <td className="p-3 sm:p-3.5 font-semibold text-slate-900">
                          3 कार्य दिवसों के भीतर (Within 3 Working Days)
                        </td>
                        <td className="p-3 sm:p-3.5 font-bold text-emerald-700">
                          शून्य देयता (Zero Liability — ₹0)
                        </td>
                        <td className="p-3 sm:p-3.5">
                          100% पूर्ण मूलधन रिफंड (Full Principal Refund)
                        </td>
                        <td className="p-3 sm:p-3.5 font-semibold text-slate-900">
                          10 कार्य दिवसों में अस्थायी क्रेडिट
                        </td>
                        <td className="p-3 sm:p-3.5 text-xs text-slate-600">
                          पूर्णतः बैंक पर (पैरा 12)
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3 sm:p-3.5 font-semibold text-slate-900">
                          4 से 7 कार्य दिवस (4 to 7 Working Days)
                        </td>
                        <td className="p-3 sm:p-3.5 font-semibold text-amber-700">
                          सीमित देयता (अधिकतम ₹5,000 / ₹10,000 / ₹25,000)
                        </td>
                        <td className="p-3 sm:p-3.5">
                          सीमित सीमा से ऊपर की पूरी अतिरिक्त राशि बैंक देगा
                        </td>
                        <td className="p-3 sm:p-3.5 font-semibold text-slate-900">
                          जांच उपरांत खाता क्रेडिट
                        </td>
                        <td className="p-3 sm:p-3.5 text-xs text-slate-600">
                          बैंक पर
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3 sm:p-3.5 font-semibold text-slate-900">
                          7 कार्य दिवसों के बाद (Beyond 7 Working Days)
                        </td>
                        <td className="p-3 sm:p-3.5 text-slate-700">
                          बैंक की बोर्ड-अनुमोदित पॉलिसी के अनुसार
                        </td>
                        <td className="p-3 sm:p-3.5">
                          बोर्ड नीति व लोकपाल विवेकाधिकार
                        </td>
                        <td className="p-3 sm:p-3.5">
                          निपटारे के समय
                        </td>
                        <td className="p-3 sm:p-3.5 text-xs text-slate-600">
                          साझा साक्ष्य
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors bg-blue-50/40">
                        <td className="p-3 sm:p-3.5 font-semibold text-slate-900">
                          बैंक की अपनी सुरक्षा विफलता या सिस्टम ग्लिच
                        </td>
                        <td className="p-3 sm:p-3.5 font-bold text-emerald-700">
                          शून्य देयता (Zero Liability) चाहे जब रिपोर्ट करें
                        </td>
                        <td className="p-3 sm:p-3.5 font-semibold text-slate-900">
                          100% रिफंड मय कानूनी ब्याज
                        </td>
                        <td className="p-3 sm:p-3.5 font-semibold text-slate-900">
                          तत्काल स्वतः रिवर्सल
                        </td>
                        <td className="p-3 sm:p-3.5 text-xs text-slate-600">
                          पूर्णतः बैंक पर (पैरा 5)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <span>
                    💡 <strong>महत्वपूर्ण तथ्य:</strong> बेसिक सेविंग्स बैंक डिपॉजिट (BSBD) खातों के लिए 4–7 दिन में अधिकतम देनदारी केवल ₹5,000 है। अन्य बचत खातों के लिए यह ₹10,000 तय है।
                  </span>
                  <Link
                    href="/templates/wrong-account-transfer-refund-application"
                    className="text-red-600 font-bold hover:underline whitespace-nowrap"
                  >
                    गलत खाते में ट्रांसफर का आवेदन प्रारूप देखें →
                  </Link>
                </div>
              </section>

              {/* SECTION 2: आम गलतफहमियां बनाम कानूनी सच (Myth vs Fact) */}
              <section
                id="heading-myth-vs-fact"
                className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-8 shadow-xs scroll-mt-28"
              >
                <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200 mb-3">
                  सच्चाई बनाम भ्रम • कानूनी अधिकार जानें
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                  साइबर फ्रॉड व बैंक रिफंड: 5 भ्रांतियां बनाम सच (Myth vs Fact)
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  अक्सर बैंक कर्मचारी या सोशल मीडिया की आधी-अधूरी जानकारी के कारण लोग अपना डूबा पैसा वापस पाने की उम्मीद छोड़ देते हैं। कानून इस बारे में क्या कहता है, यह समझना बेहद जरूरी है:
                </p>

                <div className="space-y-4">
                  {MYTH_FACT_PAIRS.map((item, idx) => (
                    <div
                      key={idx}
                      className="border border-slate-200 rounded-xl p-4 sm:p-5 hover:border-slate-300 transition-colors"
                    >
                      <div className="flex items-start gap-3 mb-2">
                        <span className="flex-shrink-0 px-2 py-0.5 rounded text-xs font-extrabold bg-red-100 text-red-700 uppercase">
                          भ्रम #{idx + 1}
                        </span>
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                          {item.myth}
                        </h3>
                      </div>
                      <div className="flex items-start gap-3 mt-3 pt-3 border-t border-slate-100">
                        <span className="flex-shrink-0 px-2 py-0.5 rounded text-xs font-extrabold bg-emerald-100 text-emerald-800 uppercase">
                          कानूनी सच
                        </span>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          {item.fact}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION 3: Landmark Judicial & Ombudsman Precedents */}
              <section
                id="heading-case-digest"
                className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-8 shadow-xs scroll-mt-28"
              >
                <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-[#DC2626] border border-red-200 mb-3">
                  न्यायिक नजीरें • High Court, NCDRC &amp; Banking Ombudsman Awards
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                  कोर्ट व बैंकिंग लोकपाल के फैसले: पीड़ितों को कैसे मिला पैसा?
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  भारतीय अदालतों और बैंकिंग लोकपाल ने बार-बार स्पष्ट किया है कि बैंक आधुनिक डिजिटल भुगतान प्रणालियों के संरक्षक (Trustee of Public Funds) हैं। यदि सुरक्षा में चूक होती है या बैंक बिना फॉरेंसिक जांच के दावा खारिज करता है, तो बैंकों को शत-प्रतिशत हर्जाना भुगतना पड़ेगा:
                </p>

                <div className="space-y-6">
                  {CASE_CITATIONS.map((c, idx) => (
                    <article
                      key={idx}
                      className="bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-slate-300 transition-colors"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900">
                          {c.title}
                        </h3>
                        <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                          {c.amount}
                        </span>
                      </div>
                      <div className="text-xs text-slate-500 mb-3 flex flex-wrap gap-2">
                        <span className="font-semibold text-slate-700">{c.parties}</span>
                        <span>•</span>
                        <span>{c.citation}</span>
                        <span>•</span>
                        <span>{c.date}</span>
                      </div>

                      <div className="text-xs sm:text-sm text-slate-700 space-y-2 mb-3 leading-relaxed">
                        <p>
                          <strong>केस के तथ्य (Facts):</strong> {c.facts}
                        </p>
                        <p>
                          <strong>कोर्ट/लोकपाल का फैसला (Holding):</strong> {c.holding}
                        </p>
                      </div>

                      <div className="bg-white border-l-4 border-red-500 p-3 rounded-r-lg text-xs text-slate-800">
                        <strong>पीड़ितों के लिए मुख्य सबक (Legal Takeaway):</strong> {c.takeaway}
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* SECTION 4: Interactive Tabs Component */}
              <section id="heading-problem-picker" className="scroll-mt-28">
                <CyberFraudHindiTabs />
              </section>

              {/* SECTION 5: SVG Flowchart Recovery Rail */}
              <section
                id="heading-process-rail"
                className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-8 shadow-xs scroll-mt-28"
              >
                <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 mb-3">
                  विजुअल फ्लोचार्ट • 5-Step Process Rail
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                  साइबर फ्रॉड रिकवरी का 5-चरणीय कानूनी रोडमैप (Process Flowchart)
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  नीचे दिया गया फ्लोचार्ट दर्शाता है कि घटना के पहले घंटे से लेकर अदालत से अंतिम भुगतान प्राप्त करने तक की कानूनी प्रक्रिया किस तरह आगे बढ़ती है:
                </p>

                {/* Handcrafted Inline SVG Diagram */}
                <div className="bg-slate-900 rounded-xl p-4 sm:p-6 overflow-x-auto">
                  <svg
                    viewBox="0 0 920 280"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full min-w-[760px] h-auto"
                    aria-label="साइबर फ्रॉड रिकवरी प्रक्रिया फ्लोचार्ट"
                  >
                    {/* Step 1 */}
                    <g transform="translate(10, 40)">
                      <rect width="160" height="180" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                      <circle cx="80" cy="35" r="20" fill="#DC2626" />
                      <text x="80" y="41" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">1</text>
                      <text x="80" y="80" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">गोल्डन ऑवर</text>
                      <text x="80" y="100" fill="#94A3B8" fontSize="11" textAnchor="middle">1930 हेल्पलाइन</text>
                      <text x="80" y="125" fill="#E2E8F0" fontSize="10" textAnchor="middle">cybercrime.gov.in</text>
                      <text x="80" y="145" fill="#38BDF8" fontSize="10" textAnchor="middle">ठग का खाता फ्रीज</text>
                      <rect x="20" y="160" width="120" height="1" fill="#334155" />
                    </g>

                    {/* Arrow 1 */}
                    <path d="M 175 130 L 195 130" stroke="#EF4444" strokeWidth="3" markerEnd="url(#arrow)" />

                    {/* Step 2 */}
                    <g transform="translate(200, 40)">
                      <rect width="160" height="180" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="2" />
                      <circle cx="80" cy="35" r="20" fill="#3B82F6" />
                      <text x="80" y="41" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">2</text>
                      <text x="80" y="80" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">बैंक में सूचना</text>
                      <text x="80" y="100" fill="#94A3B8" fontSize="11" textAnchor="middle">3 कार्य दिवस में</text>
                      <text x="80" y="125" fill="#E2E8F0" fontSize="10" textAnchor="middle">लिखित ईमेल + टोकन</text>
                      <text x="80" y="145" fill="#10B981" fontSize="10" fontWeight="bold" textAnchor="middle">Zero Liability क्लेम</text>
                      <rect x="20" y="160" width="120" height="1" fill="#334155" />
                    </g>

                    {/* Arrow 2 */}
                    <path d="M 365 130 L 385 130" stroke="#3B82F6" strokeWidth="3" />

                    {/* Step 3 */}
                    <g transform="translate(390, 40)">
                      <rect width="160" height="180" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="2" />
                      <circle cx="80" cy="35" r="20" fill="#F59E0B" />
                      <text x="80" y="41" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">3</text>
                      <text x="80" y="80" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">शैडो क्रेडिट</text>
                      <text x="80" y="100" fill="#94A3B8" fontSize="11" textAnchor="middle">10 कार्य दिवस</text>
                      <text x="80" y="125" fill="#E2E8F0" fontSize="10" textAnchor="middle">खाते में अस्थायी रिफंड</text>
                      <text x="80" y="145" fill="#FBBF24" fontSize="10" textAnchor="middle">आरबीआई पैरा 9 नियम</text>
                      <rect x="20" y="160" width="120" height="1" fill="#334155" />
                    </g>

                    {/* Arrow 3 */}
                    <path d="M 555 130 L 575 130" stroke="#F59E0B" strokeWidth="3" />

                    {/* Step 4 */}
                    <g transform="translate(580, 40)">
                      <rect width="160" height="180" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="2" />
                      <circle cx="80" cy="35" r="20" fill="#8B5CF6" />
                      <text x="80" y="41" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">4</text>
                      <text x="80" y="80" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">लीगल नोटिस</text>
                      <text x="80" y="100" fill="#94A3B8" fontSize="11" textAnchor="middle">बैंक की टालमटोल पर</text>
                      <text x="80" y="125" fill="#E2E8F0" fontSize="10" textAnchor="middle">नोडल अधिकारी को नोटिस</text>
                      <text x="80" y="145" fill="#C084FC" fontSize="10" textAnchor="middle">आरबीआई लोकपाल केस</text>
                      <rect x="20" y="160" width="120" height="1" fill="#334155" />
                    </g>

                    {/* Arrow 4 */}
                    <path d="M 745 130 L 765 130" stroke="#8B5CF6" strokeWidth="3" />

                    {/* Step 5 */}
                    <g transform="translate(770, 40)">
                      <rect width="140" height="180" rx="12" fill="#1E293B" stroke="#10B981" strokeWidth="2" />
                      <circle cx="70" cy="35" r="20" fill="#10B981" />
                      <text x="70" y="41" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">5</text>
                      <text x="70" y="80" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">फंड रिलीज</text>
                      <text x="70" y="100" fill="#94A3B8" fontSize="11" textAnchor="middle">Sec 457 BNSS</text>
                      <text x="70" y="125" fill="#E2E8F0" fontSize="10" textAnchor="middle">मजिस्ट्रेट कोर्ट ऑर्डर</text>
                      <text x="70" y="145" fill="#34D399" fontSize="10" fontWeight="bold" textAnchor="middle">रुपये खाते में वापस</text>
                      <rect x="15" y="160" width="110" height="1" fill="#334155" />
                    </g>
                  </svg>
                </div>
              </section>

              {/* SECTION 6: चरणबद्ध कानूनी कदम (5-Step Playbook) */}
              <section
                id="heading-playbook"
                className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-8 shadow-xs scroll-mt-28"
              >
                <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-[#DC2626] border border-red-200 mb-3">
                  विस्तृत कार्ययोजना • Step-by-Step Recovery Playbook
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                  फ्रॉड के बाद पैसा वापसी की 5-चरणीय कानूनी प्रक्रिया
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  यदि आपके खाते से पैसे कट गए हैं, तो घबराने की बजाय तुरंत इन 5 कानूनी कदमों का क्रमबद्ध पालन करें:
                </p>

                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#DC2626] text-white font-extrabold text-sm flex items-center justify-center mt-1">
                      1
                    </span>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                        पहला कदम: 1930 पर कॉल करें और CFCFRMS टिकट संख्या प्राप्त करें
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        गृह मंत्रालय के 1930 हेल्पलाइन पर कॉल करके अपने बैंक का नाम, डेबिट हुआ खाता नंबर, ट्रांजैक्शन आईडी (UTR Number), समय और संदिग्ध का विवरण दर्ज कराएं। 1930 का सिस्टम तत्काल उस बैंक को डिजिटल अलर्ट भेजता है जहां पैसा गया है, जिससे धोखेबाज के खाते में वह रकम फ्रीज हो जाती है। इसके साथ ही <Link href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="text-red-600 font-medium hover:underline">cybercrime.gov.in</Link> पर औपचारिक ऑनलाइन शिकायत दर्ज कर पावती पर्ची डाउनलोड करें।
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#DC2626] text-white font-extrabold text-sm flex items-center justify-center mt-1">
                      2
                    </span>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                        दूसरा कदम: 3 कार्य दिवसों के भीतर अपने बैंक को लिखित Zero Liability क्लेम दें
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        अपने बैंक की निकटतम शाखा में जाएं और साथ ही बैंक के आधिकारिक फ्रॉड रिपोर्टिंग ईमेल पर शिकायत भेजें। पत्र में स्पष्ट रूप से लिखें कि यह एक &lsquo;अनधिकृत इलेक्ट्रॉनिक लेनदेन&rsquo; (Unauthorised Electronic Transaction) है और आप भारतीय रिज़र्व बैंक के 6 जुलाई 2017 के सर्कुलर के तहत 3 दिनों के भीतर रिपोर्ट कर रहे हैं, अतः आपकी देनदारी शून्य है। बैंक से रिसीविंग कॉपी या कंप्लेंट टोकन नंबर लेना न भूलें।
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#DC2626] text-white font-extrabold text-sm flex items-center justify-center mt-1">
                      3
                    </span>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                        तीसरा कदम: 10 कार्य दिवसों के भीतर शैडो क्रेडिट (Shadow Credit) की मांग करें
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        आरबीआई के नियमों के अनुसार बैंक को शिकायत प्राप्ति के 10 कार्य दिवसों के भीतर आपके खाते में विवादित राशि का अस्थायी क्रेडिट (Shadow Credit) प्रदान करना अनिवार्य है। यदि 10 दिन बीतने पर भी बैंक पैसा क्रेडिट नहीं करता, तो शाखा प्रबंधक को स्मरण पत्र (Reminder Letter) दें कि वे आरबीआई सर्कुलर के पैरा 9 का सीधा उल्लंघन कर रहे हैं।
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#DC2626] text-white font-extrabold text-sm flex items-center justify-center mt-1">
                      4
                    </span>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                        चौथा कदम: बैंक के इनकार या 30 दिन की देरी पर एडवोकेट लीगल नोटिस व आरबीआई लोकपाल
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        यदि बैंक 30 दिनों में कोई समाधान नहीं देता या झूठा आरोप लगाकर दावा खारिज कर देता है, तो हमारे विशेषज्ञ वकील के माध्यम से बैंक के प्रिंसिपल नोडल ऑफिसर को रजिस्टर्ड स्पीड पोस्ट द्वारा 15-दिवसीय लीगल नोटिस भेजें। इसके समानांतर आरबीआई के <Link href="/law/rbi-ombudsman-complaint-guide" className="text-red-600 font-medium hover:underline">इंटीग्रेटेड लोकपाल पोर्टल (cms.rbi.org.in)</Link> पर शिकायत दर्ज कराएं। लोकपाल के समक्ष बैंक को यह सिद्ध करना होता है कि ग्राहक की लापरवाही थी; ऐसा न कर पाने पर लोकपाल बैंक को पूरा पैसा लौटाने का आदेश देता है।
                      </p>
                    </div>
                  </div>

                  {/* Step 5 */}
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#DC2626] text-white font-extrabold text-sm flex items-center justify-center mt-1">
                      5
                    </span>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                        पांचवां कदम: फ्रीज की गई राशि को खाते में मंगाने हेतु धारा 457 BNSS अर्जी लगाएं
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        यदि 1930 पर शिकायत के कारण आरोपी के खाते में आपका पैसा पुलिस द्वारा फ्रीज कर दिया गया है, तो वह पैसा सीधे आपको नहीं मिलता। इसके लिए सक्षम मजिस्ट्रेट कोर्ट में भारतीय नागरिक सुरक्षा संहिता, 2023 की धारा 457 (Section 457 of BNSS 2023 / Section 457 CrPC) के तहत अर्जी लगानी होती है। अदालत पुलिस सत्यापन के बाद बैंक को आदेश देती है कि फ्रीज फंड्स सीधे आपके खाते में रिलीज कर दिए जाएं।
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 7: आरबीआई जीरो लायबिलिटी नियम व 2027 रिफॉर्म्स */}
              <section
                id="heading-rbi-rules"
                className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-8 shadow-xs scroll-mt-28"
              >
                <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-[#DC2626] border border-red-200 mb-3">
                  नियामक विश्लेषण • Reserve Bank of India Norms &amp; 2027 Reform
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                  आरबीआई के जीरो लायबिलिटी नियम और 1 जनवरी 2027 का क्रांतिकारी सुधार
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                  भारतीय रिज़र्व बैंक के मास्टर सर्कुलर के तहत देश के सभी अनुसूचित वाणिज्यिक बैंक (SBI, HDFC, ICICI, PNB आदि) और पेमेंट बैंक बाध्य हैं। इन नियमों के तीन सबसे महत्वपूर्ण स्तंभ हैं:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                    <span className="text-xs font-bold text-red-600 block mb-1">नियम 1 (पैरा 6)</span>
                    <h3 className="text-sm font-bold text-slate-900 mb-2">शून्य ग्राहक देयता (Zero Liability)</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      तीसरे पक्ष के फ्रॉड में जब न बैंक की गलती है और न ग्राहक की, 3 कार्य दिवसों के भीतर सूचित करने पर ग्राहक की देयता ₹0 होती है।
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                    <span className="text-xs font-bold text-red-600 block mb-1">नियम 2 (पैरा 9)</span>
                    <h3 className="text-sm font-bold text-slate-900 mb-2">10-दिन में शैडो क्रेडिट (Shadow Credit)</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      बैंक जांच के नाम पर महीनों तक ग्राहक का पैसा नहीं रोक सकता। 10 कार्य दिवसों में अस्थायी रिफंड क्रेडिट करना अनिवार्य है।
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                    <span className="text-xs font-bold text-red-600 block mb-1">नियम 3 (पैरा 12)</span>
                    <h3 className="text-sm font-bold text-slate-900 mb-2">सबूत का भार बैंक पर (Burden of Proof)</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      ग्राहक को यह सिद्ध नहीं करना कि वह निर्दोष है; बैंक को फॉरेंसिक रिकॉर्ड से साबित करना होगा कि ग्राहक ने लापरवाही बरती।
                    </p>
                  </div>
                </div>

                <div className="bg-red-50/70 border border-red-200 rounded-xl p-4 sm:p-5">
                  <h3 className="text-sm sm:text-base font-bold text-red-900 mb-2">
                    ⚡ 1 जनवरी 2027 से लागू होने वाला आरबीआई का संशोधित फ्रॉड फ्रेमवर्क
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                    भारतीय रिज़र्व बैंक के प्रस्तावित और अंतिम चरण में चल रहे संशोधित इलेक्ट्रॉनिक फ्रॉड फ्रेमवर्क (लागू 1 जनवरी 2027) के तहत डिजिटल भुगतान सुरक्षा को और अधिक कड़ा किया गया है। इसके अंतर्गत ₹50,000 तक के नुकसान वाले अनधिकृत लेन-देन में बैंक को बिना किसी जटिल जांच के 85% तक (अधिकतम ₹25,000) का एकमुश्त अनिवार्य हर्जाना तुरंत देना होगा। साथ ही बैंकों पर विफल ऑटो-पे और गलत डेबिट पर ₹100 प्रतिदिन का अनिवार्य जुर्माना लागू रहेगा।
                  </p>
                  <Link
                    href="/upi-autopay-subscription-refund"
                    className="text-xs font-bold text-red-700 hover:underline"
                  >
                    UPI ऑटो-पे और अवांछित सब्सक्रिप्शन रिफंड के नियम पढ़ें →
                  </Link>
                </div>
              </section>

              {/* SECTION 8: कानूनी उदाहरण (Worked Example) */}
              <section
                id="heading-worked-example"
                className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-8 shadow-xs scroll-mt-28"
              >
                <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 mb-3">
                  वास्तविक केस स्टडी • Illustrative Worked Case Study
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                  केस स्टडी: फर्जी UPI ट्रांसफर से कटा ₹85,000 कैसे वापस मिला?
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  नीचे दी गई वास्तविक समय सारिणी दर्शाती है कि सही समय पर सटीक कानूनी प्रक्रिया अपनाने से कैसे डूबा हुआ पैसा वापस आता है:
                </p>

                <div className="border border-slate-200 rounded-xl overflow-hidden text-xs sm:text-sm">
                  <div className="bg-slate-900 text-white p-3.5 sm:p-4 font-bold flex justify-between items-center">
                    <span>घटनाक्रम: लखनऊ निवासी राहुल शर्मा • ₹85,000 यूपीआई फ्रॉड</span>
                    <span className="text-emerald-400">स्थिति: पूर्ण सफल रिकवरी</span>
                  </div>
                  <div className="p-4 sm:p-6 space-y-4 bg-slate-50 text-slate-700">
                    <div className="flex items-start gap-3">
                      <span className="font-bold text-slate-900 w-28 flex-shrink-0">दिन 1 (दोपहर 2:15):</span>
                      <div>
                        राहुल को बिजली बिल अपडेट करने का फर्जी एसएमएस आया। एक फर्जी एपीके ऐप डाउनलोड करते ही उनके खाते से ₹85,000 कट गए।
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="font-bold text-slate-900 w-28 flex-shrink-0">दिन 1 (दोपहर 3:00):</span>
                      <div>
                        राहुल ने घटना के 45 मिनट के भीतर 1930 पर कॉल की। साइबर सेल ने रिसीवर के बैंक (इंडसइंड बैंक) में ₹85,000 फ्रीज करा दिए।
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="font-bold text-slate-900 w-28 flex-shrink-0">दिन 2 (सुबह 10:30):</span>
                      <div>
                        राहुल ने अपने बैंक (केनरा बैंक) की शाखा में जाकर आरबीआई सर्कुलर के तहत 3-दिन की Zero Liability लिखित अर्जी दी और पावती ली।
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="font-bold text-slate-900 w-28 flex-shrink-0">दिन 15:</span>
                      <div>
                        केनरा बैंक ने 10 दिन बीतने पर भी शैडो क्रेडिट नहीं दिया और कहा कि पुलिस जांच का इंतजार करें।
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="font-bold text-slate-900 w-28 flex-shrink-0">दिन 18:</span>
                      <div>
                        LegalRecovery.in के माध्यम से बैंक के नोडल अधिकारी को आरबीआई सर्कुलर पैरा 9 उल्लंघन का 15-दिवसीय लीगल नोटिस भेजा गया।
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="font-bold text-emerald-800 w-28 flex-shrink-0">दिन 26:</span>
                      <div>
                        नोटिस मिलते ही बैंक ने तुरंत राहुल के खाते में ₹85,000 का शैडो क्रेडिट प्रदान किया और बाद में मजिस्ट्रेट कोर्ट के 457 BNSS आदेश से स्थायी निपटारा हुआ।
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 9: अनिवार्य साक्ष्य चेकलिस्ट (Evidence Checklist) */}
              <section
                id="heading-evidence-checklist"
                className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-8 shadow-xs scroll-mt-28"
              >
                <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-800 border border-slate-300 mb-3">
                  दस्तावेज चेकलिस्ट • Evidentiary Checklist
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                  साइबर फ्रॉड क्लेम के लिए जरूरी दस्तावेज व साक्ष्य Checklist
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  भारतीय साक्ष्य अधिनियम, 2023 की धारा 63 (Section 63 BSA 2023) के तहत डिजिटल साक्ष्यों को अदालत में मान्यता प्राप्त है। बैंक या लोकपाल में शिकायत करते समय इन 6 दस्तावेजों को तैयार रखें:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                    <span className="text-emerald-600 font-bold text-lg">✓</span>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 mb-1">
                        बैंक खाता स्टेटमेंट (Certified Bank Statement)
                      </h3>
                      <p className="text-xs text-slate-600">
                        विवादित लेनदेन की तारीख, समय, 12-अंकों का यूपीआई रेफरेंस (UTR No.) या आईएमपीएस नंबर हाइलाइट किया हुआ।
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                    <span className="text-emerald-600 font-bold text-lg">✓</span>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 mb-1">
                        1930 व cybercrime.gov.in की पावती पर्ची
                      </h3>
                      <p className="text-xs text-slate-600">
                        ऑनलाइन पोर्टल पर दर्ज शिकायत का एक्नॉलेजमेंट नंबर और समय मुहर (Timestamp)।
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                    <span className="text-emerald-600 font-bold text-lg">✓</span>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 mb-1">
                        धोखेबाज के संदेश व कॉल रिकॉर्ड्स (Screenshots)
                      </h3>
                      <p className="text-xs text-slate-600">
                        WhatsApp चैट, फर्जी एसएमएस, क्यूआर कोड की फोटो और कॉलिंग नंबर का स्क्रीनशॉट।
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                    <span className="text-emerald-600 font-bold text-lg">✓</span>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 mb-1">
                        बैंक को दी गई लिखित सूचना व टोकन नंबर
                      </h3>
                      <p className="text-xs text-slate-600">
                        बैंक शाखा की मोहर वाली रिसीव्ड कॉपी अथवा बैंक कस्टमर केयर से आया ईमेल कन्फर्मेशन।
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                    <span className="text-emerald-600 font-bold text-lg">✓</span>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 mb-1">
                        सिम-स्वैप के मामले में टेलीकॉम स्टोर पावती
                      </h3>
                      <p className="text-xs text-slate-600">
                        सिम ब्लॉक कराने और नया सिम लेते समय नेटवर्क बंद होने की तारीख व समय का आधिकारिक प्रमाण।
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                    <span className="text-emerald-600 font-bold text-lg">✓</span>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 mb-1">
                        बैंक द्वारा भेजा गया अस्वीकृति पत्र (यदि हो)
                      </h3>
                      <p className="text-xs text-slate-600">
                        बैंक का वह ईमेल या पत्र जिसमें उन्होंने रिफंड देने से मना किया है, ताकि लोकपाल में इसे चुनौती दी जा सके।
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 10: हमारी विधिक सीमाएं (Honest Scope) */}
              <section
                id="heading-scope"
                className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-8 shadow-xs scroll-mt-28"
              >
                <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-800 border border-slate-300 mb-3">
                  पारदर्शी कार्यक्षेत्र • Scope of Legal Assistance
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                  LegalRecovery आपके लिए क्या कर सकता है और क्या नहीं? (Honest Scope)
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  हम कानूनी पारदर्शिता में विश्वास रखते हैं। किसी भी दावे को आगे बढ़ाने से पहले यह जानना जरूरी है कि हमारे अधिवक्ता किस स्तर पर सहायता कर सकते हैं:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-emerald-200 bg-emerald-50/50 rounded-xl p-4 sm:p-5">
                    <h3 className="text-sm sm:text-base font-bold text-emerald-900 mb-2 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">✓</span>
                      हम क्या करते हैं (In-Scope Legal Remedies)
                    </h3>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-2 list-disc list-inside">
                      <li>बैंक को आरबीआई जीरो लायबिलिटी नियमों के तहत वैधानिक लीगल नोटिस भेजना।</li>
                      <li>आरबीआई के बैंकिंग लोकपाल (CMS Portal) में मजबूत कानूनी याचिका दाखिल करना।</li>
                      <li>10-दिवसीय शैडो क्रेडिट के उल्लंघन पर बैंक के नोडल अधिकारियों पर दबाव बनाना।</li>
                      <li>मजिस्ट्रेट अदालत में फ्रीज फंड्स रिलीज के लिए धारा 457 BNSS ड्राफ्टिंग में मार्गदर्शन।</li>
                      <li>उपभोक्ता फोरम (e-Jagriti) में सेवा में कमी के लिए हर्जाना क्लेम तैयार करना।</li>
                    </ul>
                  </div>

                  <div className="border border-red-200 bg-red-50/50 rounded-xl p-4 sm:p-5">
                    <h3 className="text-sm sm:text-base font-bold text-red-900 mb-2 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center text-xs">✕</span>
                      हम क्या नहीं करते (Out-of-Scope Activities)
                    </h3>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-2 list-disc list-inside">
                      <li>हम कोई पुलिस या हैकिंग एजेंसी नहीं हैं; हम अज्ञात धोखेबाजों को फिजिकली ट्रेस नहीं करते।</li>
                      <li>यदि पीड़ित का अपना खाता संदिग्ध लेन-देन के कारण पुलिस द्वारा फ्रीज हुआ है, तो हम अन-फ्रीजिंग नहीं करते।</li>
                      <li>हम किसी भी अनधिकृत तीसरे पक्ष के साथ कोई गुप्त या गैर-कानूनी बातचीत नहीं करते।</li>
                      <li>हम 100% रिकवरी की कोई झूठी गारंटी नहीं देते; हम बैंक के वैधानिक दायित्वों को कानूनी रूप से लागू कराते हैं।</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* SECTION 11: अक्सर पूछे जाने वाले सवाल (FAQs) */}
              <section
                id="heading-faqs"
                className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-8 shadow-xs scroll-mt-28"
              >
                <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-[#DC2626] border border-red-200 mb-3">
                  अक्सर पूछे जाने वाले सवाल • Frequently Asked Questions
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                  साइबर फ्रॉड पैसा वापसी से जुड़े मुख्य सवाल व जवाब (FAQs)
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  भारतीय ग्राहकों द्वारा यूपीआई, क्रेडिट कार्ड और ऑनलाइन बैंकिंग फ्रॉड के संदर्भ में पूछे जाने वाले प्रमुख विधिक प्रश्नों के सीधे उत्तर:
                </p>

                <div className="space-y-4">
                  {FAQ_ITEMS.map((faq, idx) => (
                    <div
                      key={idx}
                      className="border border-slate-200 rounded-xl p-4 sm:p-5 hover:border-slate-300 transition-colors"
                    >
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                        <span className="text-[#DC2626] font-bold">Q{idx + 1}:</span>
                        <span>{faq.question}</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-6">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION 12: प्राथमिक कानूनी स्रोत (Primary Legal Sources) */}
              <section
                id="heading-sources"
                className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-8 shadow-xs scroll-mt-28"
              >
                <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-800 border border-slate-300 mb-3">
                  विधिक प्रामाणिकता • Primary Legal Sources &amp; Citations
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4">
                  प्राथमिक कानूनी स्रोत व आधिकारिक संदर्भ (Sources &amp; References)
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-4">
                  इस पृष्ठ पर दी गई सभी कानूनी जानकारियां, समय सीमाएं और अधिकार भारत सरकार, भारतीय रिज़र्व बैंक और उच्च न्यायालयों के आधिकारिक राजपत्रों पर आधारित हैं:
                </p>

                <ul className="space-y-2 text-xs sm:text-sm">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-800 hover:text-red-600 hover:underline leading-relaxed"
                      >
                        {source.title} ↗
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Embedded Bottom CTA Card */}
              <div id="heading-cta" className="scroll-mt-28">
                <CyberFraudHindiNoticeCTA
                  variant="primary"
                  buttonText="बैंक को 15-दिवसीय लीगल नोटिस भेजें"
                />
              </div>

              {/* Related Recovery Guides */}
              <RelatedRecoveryGuides />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
