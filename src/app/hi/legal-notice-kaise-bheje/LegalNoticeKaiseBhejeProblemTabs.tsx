"use client";

import React, { useState } from "react";
import Link from "next/link";

interface ScenarioItem {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  cause: string;
  legalBasis: string;
  actionSteps: string[];
  warningNote: string;
  linkHref?: string;
  linkLabel?: string;
}

const SCENARIOS: ScenarioItem[] = [
  {
    id: "ecommerce-company",
    tabLabel: "कंपनी या ई-कॉमर्स",
    badge: "उपभोक्ता संरक्षण अधिनियम 2019",
    title: "Amazon, Meesho, फ्लिपकार्ट या अन्य कंपनियों को रिफंड व सेवा में कमी का नोटिस",
    cause:
      "सामान डिफेक्टिव या गलत निकलना, रिटर्न पिकअप के बाद भी रिफंड न मिलना, वारंटी रिपेयर से मना करना या कस्टमर केयर द्वारा टिकट बंद कर देना।",
    legalBasis:
      "उपभोक्ता संरक्षण अधिनियम, 2019 की धारा 2(11) (सेवा में कमी - Deficiency in Service) और धारा 2(47) (अनुचित व्यापार व्यवहार - Unfair Trade Practice)। ई-कॉमर्स रूल्स 2020 के तहत प्लेटफॉर्म 48 घंटे में शिकायत पावती और 1 महीने में निवारण के लिए बाध्य हैं।",
    actionSteps: [
      "ऑर्डर इनवॉइस, रिटर्न ट्रैकिंग स्लिप और कस्टमर सपोर्ट चैट/ईमेल की पीडीएफ प्रति सुरक्षित करें।",
      "कंपनी के अधिकृत नोडल/ग्रीवांस ऑफिसर (Grievance Officer) और रजिस्टर्ड ऑफिस के पते पर स्पीड पोस्ट व ईमेल से एडवोकेट नोटिस भेजें।",
      "15 दिन की मोहलत में रिफंड न मिलने पर ई-दाखिल / ई-जागृति (e-Jagriti) पोर्टल पर बिना वकील के उपभोक्ता फोरम में केस दर्ज करें।",
    ],
    warningNote:
      "केवल कस्टमर केयर चैटबॉट पर बात करते रहने से समय बर्बाद होता है। औपचारिक लीगल नोटिस जाते ही कंपनी की लीगल टीम तुरंत हरकत में आती है।",
    linkHref: "/tools/consumer-commission-fee-jurisdiction-calculator",
    linkLabel: "कंज्यूमर कोर्ट फीस व क्षेत्राधिकार कैलकुलेटर देखें →",
  },
  {
    id: "personal-debt",
    tabLabel: "दोस्त से उधारी वसूली",
    badge: "परिसीमा अधिनियम धारा 18 व सीपीसी",
    title: "दोस्त, रिश्तेदार या व्यापारिक परिचित को दिए गए पैसे वापस न मिलने पर नोटिस",
    cause:
      "आपसी भरोसे पर UPI, बैंक ट्रांसफर या नकद में पैसे दिए थे। अब फोन न उठाना, बहाने बनाना या साफ मुकर जाना।",
    legalBasis:
      "भारतीय संविदा अधिनियम (Indian Contract Act 1872) में मौखिक समझौता भी पूर्णतः वैध है। भारतीय साक्ष्य अधिनियम 2023 की धारा 63 (BSA Section 63) के तहत WhatsApp चैट व UPI UTR बैंक स्टेटमेंट कोर्ट में मान्य दस्तावेज हैं।",
    actionSteps: [
      "बैंक से सर्टिफाइड स्टेटमेंट निकालें जिसमें पैसे ट्रांसफर की तारीख और UTR नंबर साफ दर्ज हो।",
      "WhatsApp पर बातचीत का स्क्रीनशॉट लें जहां देनदार ने उधारी की बात मानी हो।",
      "एडवोकेट द्वारा 15 दिन का विधिक डिमांड नोटिस (Statutory Demand Notice) स्पीड पोस्ट व डिजिटल माध्यम से भिजवाएं।",
    ],
    warningNote:
      "कर्ज वसूली के लिए परिसीमा अधिनियम, 1963 (The Limitation Act) के तहत 3 साल का समय होता है। समय रहते नोटिस भेजें ताकि दावा टाइम-बार्ड न हो।",
    linkHref: "/send-legal-notice-online-india",
    linkLabel: "ऑनलाइन लीगल नोटिस प्रक्रिया जानें →",
  },
  {
    id: "landlord-tenant",
    tabLabel: "मकान मालिक / डिपॉजिट",
    badge: "संपत्ति अंतरण अधिनियम धारा 106",
    title: "मकान मालिक द्वारा सिक्योरिटी डिपॉजिट वापस न करना या अवैध कटौती",
    cause:
      "कमरा खाली करने के महीनों बाद भी पूरा डिपॉजिट न लौटाना, पेंटिंग या सामान्य टूट-फूट के नाम पर मनमाना पैसा काट लेना।",
    legalBasis:
      "मॉडल टेनेंसी एक्ट (Model Tenancy Act) और रेंट एग्रीमेंट की शर्तें। सामान्य टूट-फूट (Ordinary Wear and Tear) की भरपाई किरायेदार के डिपॉजिट से नहीं की जा सकती। धारा 106 संपत्ति अंतरण अधिनियम के तहत नोटिस तामील की जाती है।",
    actionSteps: [
      "फ्लैट खाली करते समय की तस्वीरें/वीडियो और चाबी सौंपने की लिखित या WhatsApp पुष्टि संभाल कर रखें।",
      "रेंट एग्रीमेंट और बैंक से दिए गए सिक्योरिटी डिपॉजिट ट्रांसफर का सबूत संलग्न करें।",
      "मकान मालिक को 15 दिन के भीतर ब्याज सहित डिपॉजिट रिलीज करने का कानूनी नोटिस भेजें।",
    ],
    warningNote:
      "यदि मकान मालिक नोटिस के बाद भी रकम नहीं लौटाता, तो सिविल कोर्ट में समरी सूट या रेंट ट्रिब्यूनल में ब्याज व मानसिक प्रताड़ना का हर्जाना मांगा जा सकता है।",
    linkHref: "/blog/legal-notice-kaise-bheje-step-by-step-guide",
    linkLabel: "लीगल नोटिस स्टेप-बाय-स्टेप गाइड पढ़ें →",
  },
  {
    id: "cheque-bounce",
    tabLabel: "चेक बाउंस (Sec 138)",
    badge: "एनआई एक्ट धारा 138",
    title: "देनदार द्वारा दिया गया बैंक चेक बाउंस (अनादृत) होने पर अनिवार्य नोटिस",
    cause:
      "खाते में पैसे न होना (Insufficient Funds) या 'भुगतान रोकें' (Stop Payment) के कारण बैंक द्वारा चेक लौटा दिया जाना।",
    legalBasis:
      "परक्राम्य लिखत अधिनियम, 1881 की धारा 138 (Section 138 Negotiable Instruments Act)। यह एक दांडिक अपराध है जिसमें 2 साल की कैद और चेक रकम का दोगुना जुर्माना हो सकता है।",
    actionSteps: [
      "बैंक से 'चेक रिटर्न मेमो' (Cheque Return Memo) मिलने की तारीख से ठीक 30 दिनों के भीतर नोटिस जाना अनिवार्य है।",
      "नोटिस में 15 दिनों के भीतर चेक राशि चुकाने की वैधानिक मांग करें।",
      "15 दिन बीतने के बाद भी भुगतान न होने पर अगले 30 दिनों के भीतर संबंधित मजिस्ट्रेट कोर्ट में क्रिमिनल कंप्लेंट फाइल करें।",
    ],
    warningNote:
      "धारा 138 में 30 दिन की वैधानिक नोटिस मियाद सख्त होती है। यदि 30 दिन का समय निकल गया, तो फौजदारी केस का अधिकार छिन सकता है।",
    linkHref: "/cheque-bounce-case-against-company-directors",
    linkLabel: "कंपनी डायरेक्टर्स के खिलाफ चेक बाउंस केस नियम →",
  },
];

export default function LegalNoticeKaiseBhejeProblemTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);

  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
      {/* Tab Switcher Headers */}
      <div className="border-b border-slate-200 bg-slate-50/70 p-2 sm:p-3 overflow-x-auto scrollbar-none">
        <div className="flex items-center gap-1.5 sm:gap-2 min-w-max">
          {SCENARIOS.map((item) => {
            const isActive = item.id === activeTab;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(item.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? "bg-[#0F172A] text-white shadow-sm"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80"
                }`}
              >
                {item.tabLabel}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content Body */}
      <div className="p-5 sm:p-7 md:p-8 space-y-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded-full">
            {current.badge}
          </span>
          <span className="text-xs text-slate-500">विवाद समाधान विधिक ढांचा</span>
        </div>

        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight leading-snug">
          {current.title}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 space-y-1.5">
            <span className="font-bold text-slate-900 block text-xs uppercase tracking-wide">
              विवाद का मुख्य कारण:
            </span>
            <p className="text-slate-600 leading-relaxed">{current.cause}</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 space-y-1.5">
            <span className="font-bold text-slate-900 block text-xs uppercase tracking-wide">
              कानूनी आधार व धाराएं:
            </span>
            <p className="text-slate-600 leading-relaxed">{current.legalBasis}</p>
          </div>
        </div>

        <div className="space-y-2.5 pt-2">
          <h4 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wide">
            नोटिस भेजने से पहले और बाद के 3 अनिवार्य कदम:
          </h4>
          <ol className="space-y-2">
            {current.actionSteps.map((step, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
              >
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-red-100 text-red-700 font-bold text-[11px] shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/80 text-amber-900 text-xs sm:text-sm leading-relaxed">
          <span className="font-bold">सावधानी एवं विधिक सलाह: </span>
          {current.warningNote}
        </div>

        {current.linkHref && current.linkLabel && (
          <div className="pt-2">
            <Link
              href={current.linkHref}
              className="text-xs sm:text-sm font-bold text-red-600 hover:text-red-700 hover:underline inline-flex items-center gap-1.5"
            >
              {current.linkLabel}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
