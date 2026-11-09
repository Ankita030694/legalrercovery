"use client";

import React, { useState } from "react";

interface ScenarioItem {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  cause: string;
  legalBasis: string;
  timelineEstimate: string;
  actionSteps: string[];
  warningNote: string;
}

const SCENARIOS: ScenarioItem[] = [
  {
    id: "written-promissory-cheque",
    tabLabel: "चेक या प्रॉमिसरी नोट है",
    badge: "Order 37 CPC / Sec 138 NI Act (सबसे तेज़)",
    title: "लिखित अनुबंध, चेक या प्रॉमिसरी नोट के आधार पर वसूली",
    cause:
      "देनदार के पास आपका लिखित चेक, प्रॉमिसरी नोट या स्पष्ट लिखित एग्रीमेंट है, लेकिन वह भुगतान की तारीख पर मुकर गया।",
    legalBasis:
      "सीपीसी के आदेश 37 (Order 37 CPC) और एनआई एक्ट की धारा 138 के तहत यह लिक्विडेटेड मनी क्लेम है। कोर्ट में आरोपी को सीधे बचाव का अधिकार नहीं होता, उसे 'Leave to Defend' लेना पड़ता है।",
    timelineEstimate: "औसत समय: 6 से 12 महीने (डिक्री और 20% अंतरिम राहत)",
    actionSteps: [
      "चेक बाउंस होने पर 30 दिन में धारा 138 नोटिस भेजें; अन्य लिखित अनुबंध पर 15 दिन का मनी रिकवरी नोटिस दें।",
      "भुगतान न होने पर सीधे Order XXXVII CPC समरी सूट या NI Act 138 परिवाद फाइल करें।",
      "धारा 143A के तहत कोर्ट से चेक राशि का 20% अंतरिम मुआवजा (Interim Compensation) 60 दिनों में दिलाने का आवेदन करें।",
    ],
    warningNote:
      "सावधानी: समरी सूट में समन तामील होने के 10 दिनों के भीतर देनदार को उपस्थिति (Appearance) दर्ज करानी होती है, अन्यथा कोर्ट सीधे आपके पक्ष में डिक्री पारित कर देता है।",
  },
  {
    id: "online-chat-bank-transfer",
    tabLabel: "केवल WhatsApp चैट व बैंक ट्रांसफर",
    badge: "Section 63 BSA 2023 (इलेक्ट्रॉनिक साक्ष्य)",
    title: "कोई लिखित स्टाम्प एग्रीमेंट नहीं, केवल ऑनलाइन चैट और UPI/NEFT ट्रांसफर",
    cause:
      "दोस्त, रिश्तेदार या कारोबारी को ऑनलाइन बैंक ट्रांसफर से पैसे दिए, और बातचीत WhatsApp या ईमेल पर हुई।",
    legalBasis:
      "भारतीय साक्ष्य अधिनियम, 2023 की धारा 63 (BSA Section 63) के तहत WhatsApp चैट, ईमेल और बैंक स्टेटमेंट पूर्णतः स्वीकार्य दस्तावेज़ी सबूत हैं। Limitation Act की धारा 18/19 के तहत चैट में देनदार की स्वीकृति समय सीमा को रीसेट करती है।",
    timelineEstimate: "औसत समय: नोटिस से 15 दिन, रेगुलर सिविल कोर्ट में 1.5 से 3 वर्ष",
    actionSteps: [
      "बैंक स्टेटमेंट में ट्रांजैक्शन यूटीआर (UTR) और WhatsApp चैट का पूरा बैकअप व सर्टिफिकेशन सुरक्षित करें।",
      "अधिवक्ता के माध्यम से मजबूत लीगल नोटिस भेजें जिसमें बैंक ट्रांसफर की तारीखें और चैट स्वीकृति संलग्न हो।",
      "80% मामलों में नोटिस मिलते ही देनदार मध्यस्थता या किश्तों में भुगतान को तैयार हो जाता है।",
    ],
    warningNote:
      "चैट कभी डिलीट न करें; कोर्ट में इलेक्ट्रॉनिक साक्ष्य पेश करने के लिए धारा 63 BSA का हलफनामा अनिवार्य होता है।",
  },
  {
    id: "commercial-b2b-invoice",
    tabLabel: "व्यापारिक बकाया (B2B इनवॉइस)",
    badge: "Commercial Courts Act 2015 / MSME Samadhaan",
    title: "सप्लाई किए गए माल या सेवाओं के अनपेड इनवॉइस की वसूली",
    cause:
      "व्यापारिक ग्राहक ने माल प्राप्त कर लिया लेकिन 45 दिनों के बाद भी टैक्स इनवॉइस का भुगतान अटका रखा है।",
    legalBasis:
      "कमर्शियल कोर्ट्स एक्ट, 2015 की धारा 12A के तहत अनिवार्य प्री-इंस्टीट्यूशन मेडिएशन (Pre-Institution Mediation) 3 से 5 महीने में विवाद सुलझाता है। MSME रजिस्टर्ड सप्लायर के लिए धारा 18 MSMED Act में 90 दिन में फैसला अनिवार्य है।",
    timelineEstimate: "औसत समय: MSME में 90-180 दिन; कमर्शियल कोर्ट में 1 वर्ष",
    actionSteps: [
      "इनवॉइस, डिलीवरी चालान, ई-वे बिल और लेजर कन्फर्मेशन एकत्र करें।",
      "MSME समाधान पोर्टल (samadhaan.msme.gov.in) पर केस दर्ज करें या धारा 12A मध्यस्थता का नोटिस भेजें।",
      "आरबीआई बैंक दर के तीन गुना चक्रवृद्धि ब्याज (Compound Interest) की मांग करें।",
    ],
    warningNote:
      "यदि आप MSME हैं, तो खरीदार को 45 दिनों के भीतर भुगतान करना अनिवार्य है, देरी पर भारी चक्रवृद्धि ब्याज लगता है।",
  },
  {
    id: "consumer-service-refund",
    tabLabel: "उपभोक्ता रिफंड व डिपाजिट",
    badge: "Consumer Protection Act 2019 (e-Jagriti)",
    title: "कंपनी, बिल्डर या सर्विस प्रोवाइडर द्वारा पैसा न लौटाना",
    cause:
      "बिल्डर, ई-कॉमर्स, एयरलाइन, कोचिंग या एजेंसी ने सेवा नहीं दी और एडवांस राशि या सिक्योरिटी डिपाजिट वापस नहीं किया।",
    legalBasis:
      "उपभोक्ता संरक्षण अधिनियम, 2019 की धारा 2(11) (सेवा में कमी) और धारा 2(47) (अनुचित व्यापार व्यवहार)। e-Jagriti पोर्टल पर ऑनलाइन केस दर्ज किया जा सकता है।",
    timelineEstimate: "औसत समय: 3 से 9 महीने (ऑनलाइन हियरिंग)",
    actionSteps: [
      "सर्विस बुकिंग रसीद, ईमेल शिकायतें और टिकट आईडी सुरक्षित रखें।",
      "15 दिन का लीगल नोटिस देकर मूल राशि, 12% ब्याज और मानसिक प्रताड़ना के हर्जाने की मांग करें।",
      "समाधान न होने पर e-Jagriti पोर्टल पर डिस्ट्रिक्ट कमीशन में शिकायत दाखिल करें।",
    ],
    warningNote:
      "उपभोक्ता फोरम में ₹5 लाख तक के दावों पर कोई कोर्ट फीस नहीं लगती और वकील के बिना भी पैरवी की जा सकती है।",
  },
];

export default function MoneyRecoveryTimeTabs() {
  const [activeTab, setActiveTab] = useState(SCENARIOS[0].id);

  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 sm:p-6 md:p-8 space-y-6">
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-3 py-1 rounded-full">
          अपनी स्थिति के अनुसार चुनें
        </span>
        <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 mt-2">
          केस की प्रकृति के आधार पर समय सीमा और त्वरित उपाय
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          पैसे के लेन-देन के प्रकार से तय होता है कि कोर्ट में कितना समय लगेगा और कौन सा कानूनी रास्ता सबसे तेज़ परिणाम देगा:
        </p>
      </div>

      {/* Tabs Header */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3">
        {SCENARIOS.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer text-left ${
                isActive
                  ? "bg-slate-900 text-white shadow-md"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Content Panel */}
      <div className="space-y-4 pt-1 animate-fadeIn">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-[11px] sm:text-xs font-extrabold px-3 py-1 bg-red-100/70 text-red-800 rounded-full">
            {current.badge}
          </span>
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            {current.timelineEstimate}
          </span>
        </div>

        <h4 className="text-base sm:text-lg font-bold text-slate-900">
          {current.title}
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/70">
            <strong className="text-slate-900 block mb-1">विवाद का कारण:</strong>
            <p className="text-slate-700 leading-relaxed">{current.cause}</p>
          </div>
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/70">
            <strong className="text-slate-900 block mb-1">लागू कानून और कोर्ट की शक्ति:</strong>
            <p className="text-slate-700 leading-relaxed">{current.legalBasis}</p>
          </div>
        </div>

        <div>
          <strong className="text-xs sm:text-sm font-bold text-slate-900 block mb-2">
            समय बचाने और तुरंत वसूली के कदम:
          </strong>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
            {current.actionSteps.map((step, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="shrink-0 w-5 h-5 rounded-full bg-red-100 text-red-700 font-bold text-[11px] flex items-center justify-center mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 leading-relaxed">
          <strong>विशेष सुझाव:</strong> {current.warningNote}
        </div>
      </div>
    </div>
  );
}
