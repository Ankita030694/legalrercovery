"use client";

import React, { useState } from "react";

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
    id: "missed-30-days-redeposit",
    tabLabel: "30 दिन निकल गए (वैधता शेष)",
    badge: "MSR Leathers (2013) 1 SCC 177",
    title: "रिटर्न मेमो मिले 30 दिन से ज्यादा हो गए, लेकिन चेक की 3 महीने की वैधता अभी बाकी है",
    cause:
      "कई बार देनदार 'एक हफ्ते में पैसे दे दूंगा' कहकर टालता रहता है और इस भरोसे में पीड़ित व्यक्ति बैंक रिटर्न मेमो मिलने के 30 दिनों के भीतर कानूनी नोटिस नहीं भेज पाता।",
    legalBasis:
      "सुप्रीम कोर्ट की संवैधानिक पीठ के फैसले MSR Leathers v. S. Palaniappan (2013) 1 SCC 177 के अनुसार, जब तक चेक अपनी 3 महीने की वैधता (Section 138 Proviso (a)) के भीतर है, उसे बैंक में जितनी बार चाहें प्रस्तुत किया जा सकता है। हर नई प्रस्तुति और नए रिटर्न मेमो से 30 दिन की नई नोटिस अवधि शुरू होती है।",
    actionSteps: [
      "चेक पर लिखी तारीख जांचें — यदि आज की तारीख से 3 महीने पूरे नहीं हुए हैं, तो चेक को तुरंत अपने बैंक में दोबारा जमा (Re-present) करें।",
      "बैंक से नया 'चेक रिटर्न मेमो' (Fresh Return Memo) प्राप्त करें और उस पर बैंक की मुहर व तारीख सुनिश्चित करें।",
      "नए रिटर्न मेमो की तारीख से अगले 30 दिनों के भीतर बिना देरी किए वकील के माध्यम से धारा 138 का डिमांड नोटिस भिजवाएं।",
    ],
    warningNote:
      "सावधानी: यदि आपने पहले बाउंस पर कानूनी नोटिस भेज दिया था और 1 महीने की कोर्ट फाइलिंग अवधि चूक गए, तो कुछ परिस्थितियों में सावधानी आवश्यक है; लेकिन यदि पहले नोटिस नहीं भेजा था तो नया मेमो पूरी तरह से नया अधिकार देता है।",
  },
  {
    id: "stale-cheque-civil-suit",
    tabLabel: "3 महीने और 30 दिन दोनों खत्म",
    badge: "Order 37 CPC (3 वर्ष की सीमा)",
    title: "चेक की 3 महीने की वैधता भी समाप्त हो गई और 30 दिन में नोटिस भी नहीं भेजा जा सका",
    cause:
      "चेक की तारीख से 3 महीने बीत जाने के कारण अब चेक बैंक में दोबारा नहीं लगाया जा सकता, और पुराने रिटर्न मेमो पर 30 दिन की समय सीमा निकल चुकी है।",
    legalBasis:
      "धारा 138 की आपराधिक शिकायत (Criminal Complaint) में नोटिस की 30-दिन की समय सीमा बढ़ने (Condonation of Delay) का प्रावधान नहीं है (केवल कोर्ट केस फाइल करने के 1 महीने में Section 142(1)(b) के तहत छूट मिल सकती है)। परंतु परिसीमा अधिनियम, 1963 (Limitation Act) के तहत आपके पास 3 साल तक दीवानी वसूली (Order XXXVII CPC Summary Suit) का पूर्ण अधिकार सुरक्षित रहता है।",
    actionSteps: [
      "बाउंस हुए मूल चेक और बैंक रिटर्न मेमो को लिखित ऋण के पक्के सबूत (Written Acknowledgment of Debt) के रूप में सुरक्षित रखें।",
      "एडवोकेट के माध्यम से सिविल रिकवरी डिमांड नोटिस भेजें जिसमें मूल राशि के साथ 18% वार्षिक ब्याज की मांग की जाए।",
      "भुगतान न होने पर सिविल कोर्ट में Order 37 CPC के तहत समरी सूट (Summary Suit) या यदि शुरुआत से धोखाधड़ी की नीयत थी तो BNS धारा 318 (पुरानी IPC 420) में शिकायत दर्ज कराएं।",
    ],
    warningNote:
      "Order 37 समरी सूट में आरोपी को आपके खिलाफ बचाव (Leave to Defend) करने के लिए भी कोर्ट की अनुमति और सुरक्षा राशि जमा करनी पड़ती है।",
  },
  {
    id: "notice-refused-unclaimed",
    tabLabel: "देनदार ने नोटिस लेने से मना किया",
    badge: "Section 27 General Clauses Act",
    title: "आरोपी जानबूझकर स्पीड पोस्ट नोटिस लेने से मना कर रहा है ('Refused' या 'Door Locked')",
    cause:
      "देनदार सोचता है कि यदि वह डाकिए से लिफाफा नहीं लेगा तो 15 दिन की भुगतान अवधि शुरू नहीं होगी और उस पर कोर्ट केस नहीं चल पाएगा।",
    legalBasis:
      "साधारण खंड अधिनियम की धारा 27 (Section 27 of the General Clauses Act, 1897) और सुप्रीम कोर्ट के फैसले C.C. Alavi Haji v. Palapetty Muhammed (2007) 6 SCC 555 के अनुसार, सही पते पर भेजे गए रजिस्टर्ड/स्पीड पोस्ट नोटिस को लेने से मना करना ('Refused' या 'Unclaimed') कानूनन वैध तामील (Deemed Service) माना जाता है।",
    actionSteps: [
      "इंडिया पोस्ट की ट्रैकिंग रिपोर्ट (Tracking Status) और वापस आए बंद लिफाफे (Returned Envelope) को कभी न खोलें — इसे कोर्ट में सबूत के रूप में वैसे ही पेश करना होता है।",
      "जिस दिन डाकिए ने 'Refused' या 'Intimation Delivered' दर्ज किया, उस तारीख से ठीक 15 दिन गिनें।",
      "साथ ही 2025 के सुप्रीम कोर्ट दिशानिर्देश (Sanjabij Tari v. Kishore S. Borcar) और BSA धारा 63 के तहत नोटिस की पीडीएफ WhatsApp और ईमेल पर भी भेजें।",
    ],
    warningNote:
      "वापस आए लिफाफे की सील खोलने की गलती न करें; मजिस्ट्रेट के सामने बंद लिफाफे पर डाक विभाग की टिप्पणी ही तामील का सबसे बड़ा प्रमाण है।",
  },
  {
    id: "stop-payment-account-closed",
    tabLabel: "स्टॉप पेमेंट या खाता बंद",
    badge: "Laxmi Dyechem & NEPC Micon SC",
    title: "चेक 'Account Closed', 'Stop Payment' या 'Signature Mismatch' के कारण बाउंस हुआ",
    cause:
      "देनदार ने चेक देने के बाद बैंक को भुगतान रोकने (Stop Payment) का निर्देश दे दिया, खाता बंद करवा दिया, या जानबूझकर गलत हस्ताक्षर किए।",
    legalBasis:
      "सुप्रीम कोर्ट ने NEPC Micon Ltd. (Account Closed), Goaplast Pvt. Ltd. (Stop Payment) और Laxmi Dyechem v. State of Gujarat (2012) 13 SCC 375 (Signature Differs) में स्पष्ट किया है कि ये सभी कारण धारा 138 के दायरे में आते हैं। इन सभी मामलों में भी 30 दिन में नोटिस, 15 दिन भुगतान और 1 महीने में केस की वही समय सीमा लागू होती है।",
    actionSteps: [
      "रिटर्न मेमो में लिखे कारण ('Payment Stopped by Drawer' / 'Account Closed' / 'Drawers Signature Differs') का स्पष्ट उल्लेख करते हुए 30 दिन में धारा 138 नोटिस भेजें।",
      "नोटिस में यह भी दर्ज करें कि चेक जारी करने के बाद भुगतान रोकना या खाता बंद करना दुर्भावना (Malafide Intention) दर्शाता है।",
      "15 दिन में भुगतान न मिलने पर धारा 138 के साथ-साथ BNS धारा 318 (धोखाधड़ी) का भी उल्लेख करें।",
    ],
    warningNote:
      "सिग्नेचर मिसमैच या स्टॉप पेमेंट होने पर देनदार को स्वतः छूट नहीं मिलती — कोर्ट में धारा 139 की कानूनी उपधारणा (Presumption) आपके पक्ष में रहती है।",
  },
];

export default function ChequeBounceHindiTabs() {
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
            विशेष परिस्थिति समाधान
          </span>
        </div>

        <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 leading-snug">
          {current.title}
        </h3>

        <div className="space-y-3 text-xs sm:text-sm text-slate-700">
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/70">
            <strong className="text-slate-900 font-bold block mb-1">
              समस्या का कारण (Situation):
            </strong>
            <p className="leading-relaxed">{current.cause}</p>
          </div>

          <div className="p-3.5 bg-emerald-50/70 rounded-xl border border-emerald-200/70 text-emerald-950">
            <strong className="text-emerald-900 font-bold block mb-1">
              कानूनी नियम व सुप्रीम कोर्ट निर्णय (Legal Position):
            </strong>
            <p className="leading-relaxed text-emerald-900">{current.legalBasis}</p>
          </div>

          <div>
            <strong className="text-slate-900 font-bold block mb-2">
              आपको तुरंत क्या करना चाहिए (Action Plan):
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
            <strong>जरूरी कानूनी सलाह:</strong> {current.warningNote}
          </div>
        </div>
      </div>
    </div>
  );
}
