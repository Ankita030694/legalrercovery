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
    id: "dalal-party-uth-gayi",
    tabLabel: "1. दलाल के जरिए उधार / पार्टी उठ गई",
    title: "बाहर की पार्टी को दलाल (Adatiya) के भरोसे माल भेजा — अब पार्टी 'उठ गई' और दलाल हाथ खड़े कर रहा है",
    situation:
      "सूरत रिंग रोड, भिवंडी या भीलवाड़ा मंडी से किसी टेक्सटाइल ब्रोकर/आढ़तिया की गारंटी पर बाहर के शहर (जैसे दिल्ली गांधी नगर, कानपुर या कोलकाता) की पार्टी को ₹25 लाख का ग्रे या फिनिश्ड कपड़ा भेजा गया। 60 दिन बाद जब उधारी का समय आया, तो पता चला पार्टी दुकान बंद कर गायब हो गई ('party uth gayi') और दलाल कह रहा है कि 'मेरा काम सिर्फ पार्टी मिलवाना था, पेमेंट की मेरी कोई जिम्मेदारी नहीं'।",
    legalWeapon:
      "भारतीय अनुबंध अधिनियम 1872 की धारा 182, 211 व 212 (Agency & Del Credere Liability) तथा भारतीय न्याय संहिता (BNS) 2023 की धारा 318(4) (धोखाधड़ी) व धारा 61(2) (आपराधिक साजिश) के तहत यदि दलाल ने कमीशन लेकर पार्टी की साख की गारंटी दी थी या फर्जी/दिवालिया पार्टी को माल दिलवाकर मिलीभगत की, तो खरीदार और दलाल दोनों को संयुक्त रूप से (Joint Co-Noticee) उत्तरदायी बनाया जा सकता है।",
    actionSteps: [
      {
        title: "कदम 1: दलाल की WhatsApp चैट व परची रिकॉर्ड लॉक करें",
        description:
          "जिस चैट या ऑडियो में दलाल ने 'माल भेज दो, पेमेंट की गारंटी मेरी है' कहा हो, साथ ही ब्रोकरेज बिल, बीजक और ट्रांसपोर्ट बिल्टी (LR) को BSA s.63 सर्टिफिकेट के साथ सुरक्षित करें।",
      },
      {
        title: "कदम 2: पार्टी + डायरेक्टर्स + दलाल को संयुक्त लीगल नोटिस",
        description:
          "सिर्फ गायब पार्टी को नहीं, बल्कि दलाल और ट्रांसपोर्ट गंतव्य पते पर संयुक्त एडवोकेट लीगल नोटिस (Joint Co-Notice) भेजें ताकि दलाल पर सामाजिक व कानूनी दबाव बने।",
      },
      {
        title: "कदम 3: BNS धारा 318 व मंडी महाजन / कोर्ट कार्रवाई",
        description:
          "यदि शटर बंद करके माल खुर्द-बुर्द किया गया है, तो EOW/पुलिस में आपराधिक साजिश की शिकायत और सिविल कोर्ट में ऑर्डर 38 रूल 5 के तहत संपत्ति अटैचमेंट की अर्जी लगाएं।",
      },
    ],
    statutoryHook: "Contract Act s.182/211/212 (Del Credere), BNS s.318(4) & s.61(2)",
  },
  {
    id: "msme-43bh-45-day-default",
    tabLabel: "2. 45-दिन MSME उधार व 43B(h)",
    title: "GST बीजक और ई-वे बिल से माल डिलीवर हुआ, पर खरीदार 90–120 दिन से पेमेंट टाल रहा है",
    situation:
      "तिरूपुर, लुधियाना होजरी या इचलकरंजी की मिल से रेडीमेड गारमेंट या यार्न का माल पक्के GST बीजक और ई-वे बिल पर गया। खरीदार ने पूरा माल बेचकर नकद पैसा उठा लिया, लेकिन आपकी पेमेंट 'मार्केट मंदा है' या 'अगले हफ्ते RTGS करेंगे' कहकर 4 महीने से लटका रखी है।",
    legalWeapon:
      "MSMED Act, 2006 की धारा 15–18 और आयकर अधिनियम की धारा 43B(h) कपड़ा व्यापारियों का सबसे बड़ा ब्रह्मास्त्र हैं। यदि आप सूक्ष्म या लघु उद्यम (Micro/Small Udyam) हैं, तो खरीदार को 45 दिनों (लिखित अनुबंध न होने पर 15 दिनों) में भुगतान करना कानूनन अनिवार्य है। देरी होने पर खरीदार की पूरी बकाया खरीद उसके आयकर (Income Tax) में खर्चे के रूप में अमान्य (Disallow) हो जाती है और उसे ~30% टैक्स + पेनाल्टी भरनी पड़ती है, साथ ही आपको RBI बैंक रेट के 3 गुना चक्रवृद्धि ब्याज का अधिकार मिलता है।",
    actionSteps: [
      {
        title: "कदम 1: Udyam Certificate और बीजक तिथि का मिलान",
        description:
          "सुनिश्चित करें कि आपका उद्यम रजिस्ट्रेशन माल सप्लाई की तारीख से पहले का है और बीजक पर 45-दिन की शर्त व Udyam नंबर स्पष्ट दर्ज है।",
      },
      {
        title: "कदम 2: सेक्शन 43B(h) टैक्स चेतावनी सहित ₹999 लीगल नोटिस",
        description:
          "पार्टी के डायरेक्टर्स और CA/अकाउंट्स टीम को नोटिस भेजकर स्पष्ट करें कि 31 मार्च से पहले भुगतान न करने पर उनकी बैलेंस शीट में 43B(h) टैक्स डिसअलाउंस लागू होगा।",
      },
      {
        title: "कदम 3: MSME Samadhaan (MSEFC) पोर्टल पर ऑनलाइन दावा",
        description:
          "15 दिनों में भुगतान न होने पर बिना किसी भारी कोर्ट फीस के MSME समाधान पर केस दर्ज करें और 3x मासिक चक्रवृद्धि ब्याज के साथ वसूली पाएं।",
      },
    ],
    statutoryHook: "MSMED Act 2006 s.15–18 & Income Tax Act s.43B(h)",
  },
  {
    id: "sor-rejection-colour-bleeding",
    tabLabel: "3. झूठा डिफेक्ट / माल वापसी (SOR)",
    title: "सीज़न खत्म होने पर शोरूम या खरीदार 'कलर-ब्लीडिंग / श्रिंकेज' का बहाना बनाकर माल वापस भेज रहा है",
    situation:
      "दीपावली या विंटर सीज़न के लिए दिल्ली, मुंबई या बेंगलुरु के गारमेंट ब्रांड/होलसेलर ने माल लिया और AQL क्वालिटी जांच भी पास हुई। 4 महीने बाद जब सीज़न निकल गया और बचा हुआ माल नहीं बिका, तो खरीदार ने एकतरफा डेबिट नोट काट दिया या बिना सहमति ट्रांसपोर्ट से कटा-फटा/पुराना स्टॉक वापस भेजकर पेमेंट रोक दी।",
    legalWeapon:
      "माल विक्रय अधिनियम, 1930 (Sale of Goods Act) की धारा 41 व 42 के अनुसार खरीदार को माल मिलने के उचित समय (सामान्यतः 7 से 15 दिन) के भीतर ही क्वालिटी आपत्ति दर्ज करानी होती है। एक बार कपड़े की गांठ (Bale) खुलने, काटने या 90 दिन तक शोरूम में बेचने के बाद माल को 'स्वीकृत' (Deemed Acceptance) माना जाता है। सुप्रीम कोर्ट के *Raman Iron Foundry* सिद्धांत के तहत खरीदार खुद जज बनकर मनमाना डेबिट नोट नहीं काट सकता।",
    actionSteps: [
      {
        title: "कदम 1: 7-दिवसीय निरीक्षण समाप्ति (Deemed Acceptance) रिकॉर्ड",
        description:
          "डिलीवरी तारीख, ई-वे बिल क्लोजिंग और पिछली चैट दिखाएं कि डिलीवरी के 7–15 दिनों के अंदर खरीदार ने कोई लिखित शिकायत या लैब रिपोर्ट नहीं दी थी।",
      },
      {
        title: "कदम 2: अवैध डेबिट नोट अस्वीकृति व पूर्ण बिल का लीगल नोटिस",
        description:
          "अधिवक्ता नोटिस के जरिए अनचाही माल वापसी को स्वीकार करने से साफ इनकार करें और ऑर्डर 37 CPC समरी सूट के तहत पूरे मूलधन व ब्याज की मांग करें।",
      },
      {
        title: "कदम 3: वाणिज्यिक न्यायालय में समरी सूट / मध्यस्थता",
        description:
          "यदि विवाद ₹3 लाख से अधिक है, तो Commercial Courts Act की धारा 12A के तहत प्री-लिटिगेशन मीडिएशन या ऑर्डर 37 समरी सूट दायर करें।",
      },
    ],
    statutoryHook: "Sale of Goods Act s.41–42, Raman Iron Foundry Rule & Order 37 CPC",
  },
  {
    id: "dyeing-jobwork-lien-cheque",
    tabLabel: "4. डाइंग जॉब-वर्क लियन व चेक बाउंस",
    title: "प्रोसेस हाउस / डाइंग मिल का जॉब-वर्क बिल अटका है या पार्टी का दिया PDC चेक बाउंस हो गया",
    situation:
      "सूरत, जेतपुर या पाली के डाइंग, ब्लीचिंग, प्रिंटिंग या एम्ब्रॉयडरी यूनिट ने कोयला, डाई और बिजली खर्च करके मर्चेंट का कपड़ा प्रोसेस किया। अब मर्चेंट पुराने प्रोसेसिंग बिलों का भुगतान नहीं कर रहा और नया लॉट बिना पैसे दिए उठाना चाहता है — या पेमेंट के लिए दिया गया पोस्ट-डेटेड चेक (PDC) 'Insufficient Funds' से बाउंस हो गया।",
    legalWeapon:
      "भारतीय अनुबंध अधिनियम की धारा 170 (Bailee's Particular Lien) के तहत डाइंग/प्रिंटिंग हाउस को अधिकार है कि जब तक उस विशेष लॉट के प्रोसेसिंग/जॉब-वर्क का पैसा न मिले, तब तक वह उस तैयार कपड़े को अपने गोदाम में रोक (Hold) सकता है। वहीं चेक बाउंस होने पर NI Act धारा 138 के तहत 30 दिनों के भीतर कानूनी नोटिस भेजने पर पार्टी को 2 साल तक की जेल और दोगुने जुर्माने का डर रहता है।",
    actionSteps: [
      {
        title: "कदम 1: धारा 170 लियन नोटिस व लैब-डिप अनुमोदन",
        description:
          "जिस लॉट का पैसा बाकी है, उसे गोदाम में सुरक्षित रखते हुए तुरंत वकील के जरिए धारा 170 'Particular Lien' का लिखित नोटिस भेजें (ध्यान रहे: बिना अनुबंध पुराने बिल के लिए नया लॉट न रोकें)।",
      },
      {
        title: "कदम 2: चेक बाउंस मेमो की तारीख से 30 दिन में 138 नोटिस",
        description:
          "बैंक रिटर्न मेमो मिलने के 30 दिनों के भीतर अनिवार्य 15-दिवसीय डिमांड नोटिस स्पीड पोस्ट RPAD से भेजें।",
      },
      {
        title: "कदम 3: मजिस्ट्रेट कोर्ट में 138 केस व MSME दावा",
        description:
          "15 दिन में भुगतान न आने पर अगले 30 दिन में धारा 138 की आपराधिक शिकायत दर्ज करें और साथ ही MSME समाधान पर 3x ब्याज क्लेम चलाएं।",
      },
    ],
    statutoryHook: "Indian Contract Act s.170 (Processor Lien) & NI Act s.138",
  },
];

export default function KapdaVyapariScenarioTabs() {
  const [activeId, setActiveId] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeId) || SCENARIOS[0];

  return (
    <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4 sm:p-6">
      {/* Tab Buttons */}
      <div className="flex flex-wrap gap-2 mb-6" role="tablist" aria-label="कपड़ा व्यापार वसूली परिदृश्य">
        {SCENARIOS.map((item) => {
          const isSelected = item.id === activeId;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActiveId(item.id)}
              className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer text-left ${
                isSelected
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              {item.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Card */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
          <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
            {current.title}
          </h3>
          <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold bg-red-50 text-[#DC2626] border border-red-200">
            {current.statutoryHook}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4">
            <p className="text-xs font-black uppercase tracking-wider text-amber-800 mb-1.5">
              मंडी की वास्तविक समस्या (Trade Trap)
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{current.situation}</p>
          </div>

          <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4">
            <p className="text-xs font-black uppercase tracking-wider text-emerald-800 mb-1.5">
              आपका कानूनी हथियार (Legal Remedy)
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{current.legalWeapon}</p>
          </div>
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-wider text-slate-500 mb-3">
            तुरंत उठाने वाले 3 व्यावहारिक कदम (Action Plan)
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {current.actionSteps.map((step, i) => (
              <div
                key={step.title}
                className="bg-slate-50 border border-slate-200 rounded-xl p-3.5"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <p className="text-xs font-bold text-slate-900">{step.title}</p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
