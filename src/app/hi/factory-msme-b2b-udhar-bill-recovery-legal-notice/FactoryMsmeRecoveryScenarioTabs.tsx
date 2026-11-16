"use client";

import React, { useState } from "react";

interface ScenarioItem {
  id: string;
  tabLabel: string;
  title: string;
  situation: string;
  legalWeapon: string;
  actionSteps: {
    title: string;
    description: string;
  }[];
  statutoryHook: string;
}

const SCENARIOS: ScenarioItem[] = [
  {
    id: "goods-delivered-unpaid",
    tabLabel: "माल डिलीवरी के बाद पेमेंट टालना",
    title: "पार्टी ने माल ले लिया, बिल्टी व ई-वे बिल है, पर 'अगले हफ्ते' कहकर टाल रही है",
    situation:
      "औद्योगिक क्षेत्रों (जैसे बवाना, ओखला, फरीदाबाद, लुधियाना, सूरत, कानपुर) में सप्लायर ने टैक्स इनवॉइस, ई-वे बिल और ट्रांसपोर्ट बिल्टी पर माल डिलीवर कर दिया। खरीदार ने माल फैक्ट्री में उतार लिया, लेकिन 60-90 दिन बीतने पर भी पेमेंट नहीं दे रहा और फोन उठाना बंद कर दिया है।",
    legalWeapon:
      "सेल ऑफ गुड्स एक्ट (Sale of Goods Act, 1930) की धारा 42 और 43 के तहत, यदि खरीदार ने माल प्राप्त होने के बाद एक उचित समय (15 दिन) के भीतर कोई लिखित आपत्ति दर्ज नहीं कराई, तो कानूनन यह मान लिया जाता है कि उसने माल बिना शर्त स्वीकार कर लिया है। अब वह भुगतान रोकने का कोई अधिकार नहीं रखता।",
    actionSteps: [
      {
        title: "कदम 1: प्राथमिक खाता मिलान व 45-दिवसीय वैधानिक गणना",
        description:
          "इनवॉइस, E-Way Bill और ट्रांसपोर्ट रिसीविंग (POD/Bilty) को संकलित करें। MSMED एक्ट सेक्शन 15 के अनुसार डिफ़ॉल्ट की सटीक तारीख तय करें।",
      },
      {
        title: "कदम 2: 15-दिवसीय एडवोकेट लीगल नोटिस (Speed Post + WhatsApp + Email)",
        description:
          "वकील के माध्यम से आधिकारिक मांग पत्र भेजें जिसमें 3x बैंक ब्याज (धारा 16) और सेक्शन 43B(h) के तहत टैक्स डिसअलाउंस का नोटिस शामिल हो।",
      },
      {
        title: "कदम 3: MSME समाधान (MSEFC) अथवा ऑर्डर 37 सीपीसी समरी सूट",
        description:
          "यदि नोटिस का 15 दिन में सकारात्मक जवाब या भुगतान नहीं आता, तो तुरंत एमएसएमई समाधान पोर्टल पर केस फाइल करें या वाणिज्यिक अदालत में समरी सूट दायर करें।",
      },
    ],
    statutoryHook: "MSMED Act 2006 ss. 15-16, Sale of Goods Act s. 42 & Order XXXVII CPC",
  },
  {
    id: "section-43bh-corporate-trap",
    tabLabel: "कॉरपोरेट खरीदार व 43B(h)",
    title: "बड़ी कॉरपोरेट कंपनी या प्राइवेट लिमिटेड द्वारा 45 दिन का नियम नजरअंदाज करना",
    situation:
      "बड़ी कंपनियां और मध्यम उद्यम छोटे निर्माताओं का पेमेंट 90 से 180 दिन तक दबाकर अपनी वर्किंग कैपिटल चलाते हैं। वे यह मानकर चलते हैं कि छोटा व्यापारी उनके खिलाफ कोर्ट नहीं जाएगा।",
    legalWeapon:
      "फाइनेंस एक्ट 2023 के तहत लागू इनकम टैक्स एक्ट की धारा 43B(h) के अनुसार, यदि किसी माइक्रो या स्मॉल एंटरप्राइज (Udyam Registered) को एग्रीमेंट के अनुसार 45 दिन (या बिना एग्रीमेंट 15 दिन) में पेमेंट नहीं किया गया, तो खरीदार कंपनी उस खरीद पर कोई टैक्स छूट (Expense Deduction) नहीं ले सकती। इसके अलावा उन्हें अपनी कुल बकाए पर 30%+ टैक्स और पेनाल्टी भरनी पड़ती है।",
    actionSteps: [
      {
        title: "कदम 1: उद्यम रजिस्ट्रेशन नंबर के साथ टैक्स लायबिलिटी चेतावनी",
        description:
          "अपने इनवॉइस पर उद्यम नंबर का स्पष्ट उल्लेख करते हुए खरीदार के CFO और डायरेक्टर्स को इनकम टैक्स डिसअलाउंस की औपचारिक सूचना भेजें।",
      },
      {
        title: "कदम 2: ऑडिट रिपोर्ट में गैर-अनुपालन का वैधानिक रिस्क",
        description:
          "कानूनी नोटिस में यह दर्ज करें कि यदि 31 मार्च या तय तारीख से पहले भुगतान नहीं हुआ, तो उनके चार्टर्ड अकाउंटेंट (Tax Auditor) को टैक्स ऑडिट रिपोर्ट Form 3CD में यह डिफ़ॉल्ट अनिवार्य रूप से दर्ज करना होगा।",
      },
      {
        title: "कदम 3: त्वरित बैंक निपटान",
        description:
          "टैक्स पेनाल्टी और सीए ऑडिट के डर से 85% से अधिक कॉरपोरेट खरीदार लीगल नोटिस मिलते ही प्राथमिकता के आधार पर फंड रिलीज कर देते हैं।",
      },
    ],
    statutoryHook: "Income Tax Act, 1961 s. 43B(h) & MSMED Act s. 15",
  },
  {
    id: "sham-debit-note-rejection",
    tabLabel: "फर्जी डेबिट नोट / रिजेक्शन",
    title: "पेमेंट मांगने पर पार्टी ने 3 महीने बाद झूठा डेबिट नोट काट दिया या माल खराब बताया",
    situation:
      "जब सप्लायर ने पैसे का तकादा किया, तो खरीदार ने अचानक कहा कि 'माल की क्वालिटी ठीक नहीं थी', 'साइज में खराबी थी' या बिना किसी सूचना के लाखों रुपये का एकतरफा डेबिट नोट (Arbitrary Debit Note) काट कर भेज दिया।",
    legalWeapon:
      "MSMED एक्ट की धारा 2(b) और वाणिज्यिक न्यायालयों के निर्णयों के अनुसार, माल प्राप्ति के 15 दिनों के भीतर लिखित आपत्ति (Day of Acceptance) देना अनिवार्य है। यदि खरीदार ने 15 दिन में कोई लिखित शिकायत नहीं की और माल इस्तेमाल कर लिया या बेच दिया, तो बाद में काटा गया डेबिट नोट कानून की नजर में शून्य (Void ab initio) और दुर्भावनापूर्ण (Sham Defense) माना जाता है।",
    actionSteps: [
      {
        title: "कदम 1: डेबिट नोट का लिखित खंडन (Immediate Protest Notice)",
        description:
          "जैसे ही खरीदार डेबिट नोट भेजे, 48 घंटे के भीतर ईमेल और रजिस्टर्ड डाक से उसका तार्किक खंडन करें कि माल बिना आपत्ति प्राप्त और उपभोग किया गया था।",
      },
      {
        title: "कदम 2: जॉब वर्क चालान / इंस्पेक्शन रिपोर्ट को साक्ष्य बनाएं",
        description:
          "फैक्ट्री गेट पास, लोडिंग रिपोर्ट और डिलीवरी के समय हस्ताक्षरित रिसीविंग को सुरक्षित करें (भारतीय साक्ष्य अधिनियम, 2023 की धारा 63 के तहत इलेक्ट्रॉनिक रिकॉर्ड)।",
      },
      {
        title: "कदम 3: ब्याज सहित पूरे मूलधन का लीगल नोटिस",
        description:
          "अवैध डेबिट नोट को खारिज करते हुए एडवोकेट के जरिए पूरे इनवॉइस अमाउंट और चक्रवृद्धि ब्याज की वसूली का 15-दिवसीय विधिक नोटिस जारी करें।",
      },
    ],
    statutoryHook: "MSMED Act s. 2(b), Indian Contract Act s. 73 & Commercial Courts Act",
  },
  {
    id: "cheque-bounce-stop-payment",
    tabLabel: "चेक बाउंस व स्टॉप पेमेंट",
    title: "खरीदार ने बकाया पेमेंट के लिए चेक दिया जो बाउंस हो गया या स्टॉप पेमेंट करा दिया",
    situation:
      "खरीदार ने उधारी चुकाने के लिए चेक जारी किया। बैंक में लगाने पर चेक 'Insufficient Funds' या 'Payment Stopped by Drawer' की स्लिप के साथ वापस लौट आया।",
    legalWeapon:
      "नेगोशिएबल इंस्ट्रूमेंट्स एक्ट, 1881 की धारा 138 (Section 138 NI Act) के तहत चेक बाउंस होना एक गैर-जमानती आपराधिक अपराध है, जिसमें चेक की रकम का दोगुना जुर्माना और 2 साल तक की जेल का प्रावधान है। स्टॉप पेमेंट कराने पर भी सुप्रीम कोर्ट के अनुसार धारा 138 पूर्ण रूप से लागू होती है।",
    actionSteps: [
      {
        title: "कदम 1: बैंक मेमो मिलने के 30 दिन के भीतर वैधानिक नोटिस",
        description:
          "बैंक से रिटर्न मेमो मिलने की तारीख से ठीक 30 दिनों के अंदर धारा 138 का 15-दिवसीय डिमांड नोटिस भेजना कानूनी अनिवार्यता है।",
      },
      {
        title: "कदम 2: 15 दिन की ग्रेस अवधि का इंतजार",
        description:
          "नोटिस मिलने के बाद आरोपी पार्टी को भुगतान के लिए 15 दिन का समय मिलता है।",
      },
      {
        title: "कदम 3: मेट्रोपॉलिटन/ज्यूडिशियल मजिस्ट्रेट कोर्ट में आपराधिक परिवाद",
        description:
          "यदि 15 दिन में भुगतान नहीं आता, तो अगले 30 दिन के भीतर मजिस्ट्रेट कोर्ट में सेक्शन 138 का केस और साथ ही दीवानी वसूली का समरी सूट दायर किया जाता है।",
      },
    ],
    statutoryHook: "Negotiable Instruments Act, 1881 s. 138 & s. 143A (Interim Compensation)",
  },
];

export default function FactoryMsmeRecoveryScenarioTabs() {
  const [activeTab, setActiveTab] = useState(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Navigation Pill Bar */}
      <div className="flex flex-wrap gap-2 pb-4 mb-6 border-b border-slate-200">
        {SCENARIOS.map((sc) => {
          const isActive = activeTab === sc.id;
          return (
            <button
              key={sc.id}
              type="button"
              onClick={() => setActiveTab(sc.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer text-left ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {sc.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Content Card */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-7 transition-all">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <span className="inline-block px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] border border-red-200">
            विधिक स्थिति व रणनीतिक हल
          </span>
          <span className="text-[11px] font-mono font-semibold text-slate-500 bg-white px-2.5 py-1 rounded-md border border-slate-200">
            कानूनी आधार: {current.statutoryHook}
          </span>
        </div>

        <h3 className="text-base sm:text-lg md:text-xl font-black text-slate-900 mb-3 leading-snug">
          {current.title}
        </h3>

        {/* Situation Description */}
        <div className="mb-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
            व्यापारिक जमीनी समस्या:
          </span>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {current.situation}
          </p>
        </div>

        {/* Statutory Shield / Weapon */}
        <div className="mb-5 bg-emerald-50/80 border-l-4 border-emerald-500 p-4 rounded-r-xl">
          <span className="block text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-1">
            आपकी कानूनी ढाल और अधिकार (Statutory Weapon):
          </span>
          <p className="text-xs sm:text-sm text-emerald-950 font-medium leading-relaxed">
            {current.legalWeapon}
          </p>
        </div>

        {/* 3 Step Action Playbook */}
        <div>
          <span className="block text-xs font-black uppercase tracking-wider text-slate-900 mb-3">
            रिकवरी के लिए तीन अनिवार्य कदम (Action Plan):
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {current.actionSteps.map((st, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-xl p-3.5 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white text-[10px] font-black flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <h4 className="text-xs font-bold text-slate-900 leading-tight">
                      {st.title}
                    </h4>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed mt-2">
                    {st.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
