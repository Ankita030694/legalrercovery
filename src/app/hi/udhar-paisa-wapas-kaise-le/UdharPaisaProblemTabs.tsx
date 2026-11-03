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
}

const SCENARIOS: ScenarioItem[] = [
  {
    id: "no-agreement-upi",
    tabLabel: "बिना लिखा-पढ़ी (UPI/Bank)",
    badge: "साक्ष्य अधिनियम धारा 63",
    title: "बिना किसी लिखित अनुबंध (Loan Agreement) के सिर्फ UPI या बैंक से उधार दिया",
    cause:
      "अक्सर दोस्त या करीबी रिश्तेदार विश्वास में पैसे ले लेते हैं और कोई कागजी अनुबंध नहीं बनता। देनदार बाद में दावा करता है कि यह कर्ज नहीं बल्कि 'उपहार' (Gift) या किसी पुरानी उधारी का भुगतान था।",
    legalBasis:
      "भारतीय साक्ष्य अधिनियम, 2023 की धारा 63 (BSA Section 63) और सुप्रीम कोर्ट के फैसलों के अनुसार बैंक स्टेटमेंट और 12-अंकों का UPI UTR पूर्ण रूप से स्वीकार्य डिजिटल साक्ष्य है। भारतीय संविदा अधिनियम (Contract Act) में मौखिक समझौता (Oral Agreement) भी कानूनी रूप से बाध्यकारी है।",
    actionSteps: [
      "बैंक से सर्टिफाइड खाता विवरण (Bank Statement with Bank Seal/Certification) निकालें जिसमें देनदार के खाते का ट्रांसफर UTR साफ दिखे।",
      "WhatsApp या SMS पर बातचीत करें ताकि देनदार यह मान ले कि यह रकम उसने उधार ली थी और लौटाने का वादा किया था।",
      "एडवोकेट द्वारा 15 दिन का वैधानिक लीगल नोटिस (Demand Notice) भिजवाएं जिसमें बैंक लेनदेन के विवरण का हवाला हो।",
    ],
    warningNote:
      "यदि देनदार नोटिस का जवाब नहीं देता, तो सीपीसी के तहत मनी रिकवरी सूट (Civil Money Suit) दायर किया जा सकता है।",
  },
  {
    id: "cheque-bounce",
    tabLabel: "चेक बाउंस (Cheque Bounce)",
    badge: "एनआई एक्ट धारा 138",
    title: "उधार चुकाने के लिए दिया गया चेक बैंक में बाउंस (अनादृत) हो गया",
    cause:
      "उधारकर्ता ने तारीख डालकर चेक दिया लेकिन खाते में अपर्याप्त राशि (Insufficient Funds) या 'स्टॉप पेमेंट' के कारण चेक बाउंस हो गया।",
    legalBasis:
      "परक्राम्य लिखत अधिनियम, 1881 की धारा 138 (Negotiable Instruments Act Section 138) के तहत चेक बाउंस होना एक गैर-जमानती दंडात्मक अपराध है, जिसमें 2 वर्ष तक की जेल और चेक राशि का दोगुना जुर्माना हो सकता है।",
    actionSteps: [
      "बैंक से चेक वापसी मेमो (Cheque Return Memo) प्राप्त होने की तारीख से ठीक 30 दिनों के भीतर कानूनी नोटिस भेजना अनिवार्य है।",
      "नोटिस मिलने के 15 दिनों के भीतर यदि आरोपी भुगतान नहीं करता, तो अगले 30 दिनों के भीतर मजिस्ट्रेट कोर्ट में धारा 138 की आपराधिक शिकायत दर्ज करें।",
      "साथ ही समरी सूट (Order 37 CPC) भी समानांतर रूप से दायर कर सकते हैं।",
    ],
    warningNote:
      "30 दिन की नोटिस समय सीमा चूकने पर धारा 138 का अधिकार समाप्त हो सकता है, इसलिए तुरंत वकील से नोटिस भिजवाएं।",
  },
  {
    id: "whatsapp-acknowledgment",
    tabLabel: "WhatsApp पर स्वीकृति",
    badge: "Limitation Act धारा 18",
    title: "देनदार WhatsApp, चैट या ईमेल पर उधारी मान रहा है लेकिन तारीखें टाल रहा है",
    cause:
      "3 साल का समय बीतने के करीब है और देनदार लगातार 'अगले महीने दे दूंगा' या 'काम होते ही लौटा दूंगा' कहकर टालमटोल कर रहा है।",
    legalBasis:
      "परिसीमा अधिनियम, 1963 की धारा 18 (Section 18 Limitation Act) के तहत 3 वर्ष की अवधि समाप्त होने से पहले देनदार द्वारा लिखित में कर्ज स्वीकार करने पर 3 साल की समय सीमा नए सिरे से शुरू हो जाती है। BSA धारा 63 के तहत इलेक्ट्रॉनिक संदेश लिखित स्वीकृति के समकक्ष हैं।",
    actionSteps: [
      "चैट का स्क्रीनशॉट लेने के साथ-साथ पूरी चैट हिस्ट्री को ईमेल पर बैकअप (.txt / PDF फॉर्मेट) में सुरक्षित एक्सपोर्ट करें।",
      "मोबाइल का आईएमईआई (IMEI) और मोबाइल नंबर का स्वामित्व प्रमाण सुरक्षित रखें।",
      "एडवोकेट नोटिस में धारा 18 के तहत स्वीकृति का उल्लेख करते हुए तुरंत पूर्ण भुगतान की वैधानिक मांग करें।",
    ],
    warningNote:
      "ध्यान रहे कि स्वीकृति 3 वर्ष की मूल अवधि खत्म होने से पहले की होनी चाहिए। अवधि बीतने के बाद संविदा अधिनियम धारा 25(3) की आवश्यकता होती है।",
  },
  {
    id: "absconding-moved",
    tabLabel: "पैसे लेकर फरार या विदेश",
    badge: "Order 37 CPC / Extradition",
    title: "उधार लेने के बाद देनदार ने नंबर ब्लॉक कर दिया, शहर छोड़ दिया या विदेश चला गया",
    cause:
      "उधारकर्ता पैसे हड़पने की नीयत से संपर्क तोड़ लेता है या नौकरी/वीजा लेकर दूसरे देश या राज्य में शिफ्ट हो जाता है।",
    legalBasis:
      "यदि पैसे लेते समय ही इरादा ठगी का था, तो भारतीय न्याय संहिता, 2023 की धारा 318 (BNS Section 318 Cheating) के तहत धोखाधड़ी की एफआईआर दर्ज हो सकती है। विदेश स्थित देनदार पर भारतीय अदालतों द्वारा सम्मन और डिक्री तामील की जा सकती है।",
    actionSteps: [
      "देनदार के आधार कार्ड, पासपोर्ट कॉपी या सोशल मीडिया/लिंक्डइन प्रोफाइल से उसके नए कार्यस्थल या पते का पता लगाएं।",
      "देनदार के आधिकारिक ईमेल, लिंक्डइन और रजिस्टर्ड पते पर भारतीय साक्ष्य अधिनियम के तहत ई-नोटिस जारी करवाएं।",
      "देनदार के भारत स्थित बैंक खातों और संपत्ति के खिलाफ अटैचमेंट बिफोर जजमेंट (Order 38 Rule 5 CPC) की अर्जी लगाएं।",
    ],
    warningNote:
      "विदेश में रहने वाले दोस्तों से वसूली के लिए विस्तृत प्रक्रिया हमारी विशेष गाइड में पढ़ें।",
  },
];

export default function UdharPaisaProblemTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);

  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs w-full">
      {/* Tabs navigation */}
      <div className="flex flex-wrap gap-2 pb-4 border-b border-slate-200">
        {SCENARIOS.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#111827] text-white shadow-md shadow-slate-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Content Display */}
      <div className="pt-5 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-[11px] sm:text-xs font-black px-3 py-1 bg-red-50 text-[#DC2626] rounded-full uppercase tracking-wider border border-red-200">
            {current.badge}
          </span>
          <span className="text-xs text-slate-500 font-semibold">
            विवाद परिदृश्य विश्लेषण
          </span>
        </div>

        <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 leading-snug">
          {current.title}
        </h3>

        <div className="space-y-3 text-xs sm:text-sm text-slate-700">
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/70">
            <strong className="text-slate-900 font-bold block mb-1">
              समस्या का मूल कारण (Root Cause):
            </strong>
            <p className="leading-relaxed">{current.cause}</p>
          </div>

          <div className="p-3.5 bg-emerald-50/70 rounded-xl border border-emerald-200/70 text-emerald-950">
            <strong className="text-emerald-900 font-bold block mb-1">
              लागू कानूनी प्रावधान (Statutory Section):
            </strong>
            <p className="leading-relaxed text-emerald-900">{current.legalBasis}</p>
          </div>

          <div>
            <strong className="text-slate-900 font-bold block mb-2">
              तुरंत उठाए जाने वाले 3 वैधानिक कदम:
            </strong>
            <ul className="space-y-2 list-none">
              {current.actionSteps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="shrink-0 w-5 h-5 rounded-full bg-slate-800 text-white text-[11px] font-bold flex items-center justify-center mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 text-xs font-medium">
            <strong>महत्वपूर्ण चेतावनी:</strong> {current.warningNote}
          </div>
        </div>
      </div>
    </div>
  );
}
