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
    id: "clean-pod-freight-default",
    tabLabel: "1. साइन POD के बाद भाड़ा डिफ़ॉल्ट",
    title: "कंसाइनी ने माल उतारकर क्लीन POD दे दी, लेकिन कंसाइनर या पार्टी पेमेंट रोककर बैठी है",
    situation:
      "दिल्ली (SGTN), भिवंडी, कालंबोली, इंदौर या कानपुर ट्रांसपोर्ट नगर से ट्रक लोड होकर गंतव्य फैक्ट्री पर पहुंचा। अनलोडिंग के बाद पार्टी के स्टोरकीपर ने बिल्टी (LR) पर मुहर लगाकर 'Goods Received in Sound Condition' साइन कर दिया। इसके बावजूद 30 से 90 दिन बीत जाने पर भी बिल का भुगतान नहीं किया जा रहा और एकाउंट्स विभाग फोन नहीं उठा रहा।",
    legalWeapon:
      "कैरिज बाय रोड एक्ट 2007 (Carriage by Road Act 2007) की धारा 10 और भारतीय अनुबंध अधिनियम 1872 की धारा 70 के तहत, जब माल बिना किसी लिखित आपत्ति के सुपुर्द हो चुका हो, तो फ्रेट शुल्क 'असंविदित ऋण' (Liquidated Debt) बन जाता है। इस पर सीपीसी (CPC) के ऑर्डर 37 के तहत वाणिज्यिक न्यायालय में समरी सूट दायर किया जा सकता है, जिसमें देनदार को बिना कोर्ट की अनुमति के बचाव का अधिकार नहीं होता।",
    actionSteps: [
      {
        title: "कदम 1: ऑरिजिनल कंसाइनमेंट नोट (LR) व POD मिलान",
        description:
          "ड्राइवर द्वारा लाई गई साइन की हुई बिल्टी, रिसीविंग स्टैम्प, ई-वे बिल पार्ट-B क्लोजर और जीएसटी इनवॉइस की प्रमाणित डिजिटल कॉपी तैयार करें।",
      },
      {
        title: "कदम 2: 15-दिवसीय एडवोकेट लीगल नोटिस (Demand Notice)",
        description:
          "अधिवक्ता के माध्यम से कंसाइनर व कंसाइनी दोनों को स्पीड पोस्ट RPAD और अधिकृत ईमेल पर नोटिस भेजें जिसमें 18% वार्षिक ब्याज और लीगल हर्जाने की मांग शामिल हो।",
      },
      {
        title: "कदम 3: वाणिज्यिक अदालत में समरी सूट अथवा MSME समाधान",
        description:
          "यदि ट्रांसपोर्ट फर्म उद्यम-पंजीकृत (Udyam MSME) है, तो एमएसएमई समाधान पर 3x बैंक ब्याज का दावा ठोकें, या कॉमर्शियल कोर्ट में ऑर्डर 37 के तहत बैंक खाते अटैच करवाएं।",
      },
    ],
    statutoryHook: "Carriage by Road Act 2007 s.10, Contract Act s.70 & Order XXXVII CPC",
  },
  {
    id: "unpaid-halting-detention",
    tabLabel: "2. गाड़ी हॉल्टिंग व डिटेंशन चार्ज",
    title: "फैक्ट्री गेट पर गाड़ी 5 से 10 दिन खड़ी रखी, फिर अनलोडिंग कराकर हॉल्टिंग देने से मुकर गए",
    situation:
      "कंसाइनी के गोदाम या यार्ड में जगह न होने अथवा लेबर न होने के कारण ट्रेलर/ट्रक को 48 घंटे के फ्री अनलोडिंग समय के बाद भी 6 से 12 दिन तक खड़ा रखा गया। प्रति दिन ₹1,500 से ₹3,500 की तय हॉल्टिंग का बिल भेजा गया, तो पार्टी ने 'हमारा कोई एग्रीमेंट नहीं था' कहकर हॉल्टिंग देने से साफ इनकार कर दिया और सिर्फ बेसिक भाड़ा थमा दिया।",
    legalWeapon:
      "भारतीय अनुबंध अधिनियम, 1872 की धारा 73 (क्षतिपूर्ति) और कमर्शियल कस्टम्स के तहत गाड़ी को अनुचित समय तक रोके रखना 'ट्रक डिटेंशन' माना जाता है। वाहन के फास्टैग (FASTag) टोल टाइम-स्टैम्प्स, जीपीएस (GPS) जियो-फेंसिंग लॉग्स और फैक्ट्री इन-आउट गेट पास यह साबित करते हैं कि ट्रक अनलोडिंग के लिए उपलब्ध था। इसके आधार पर प्रतिदिन का डिटेंशन चार्ज कानूनी रूप से वसूलनीय है।",
    actionSteps: [
      {
        title: "कदम 1: जीपीएस व फास्टैग डिजिटल टाइम-स्टैम्प लॉक करें",
        description:
          "ट्रक के जीपीएस ट्रैकिंग का पीडीएफ रिपोर्ट निकालें जिसमें फैक्ट्री की बाउंड्री में वाहन के प्रवेश और निकास की सटीक तारीख व समय दर्ज हो। गेट पर दी गई इनवर्ड पर्ची सुरक्षित रखें।",
      },
      {
        title: "कदम 2: हॉल्टिंग इनवॉइस मय जीपीएस साक्ष्य का लीगल नोटिस",
        description:
          "वकील के जरिए आधिकारिक लीगल नोटिस में दैनिक हॉल्टिंग दर, ड्राइवर के आइडल भत्ते और गाड़ी के वित्तीय नुकसान (EMI व फिक्स्ड रनिंग कॉस्ट) का विस्तृत दावा प्रस्तुत करें।",
      },
      {
        title: "कदम 3: धारा 12A कॉमर्शियल प्री-इंस्टीट्यूशन मीडिएशन",
        description:
          "जिला विधिक सेवा प्राधिकरण (DLSA) में वाणिज्यिक विवाद के तहत मध्यस्थता फाइल करें, जहां पार्टी को जीपीएस साक्ष्यों के सामने हॉल्टिंग का सेटलमेंट करना पड़ता है।",
      },
    ],
    statutoryHook: "Indian Contract Act 1872 s.73, Motor Vehicles Act & Commercial Courts Act s.12A",
  },
  {
    id: "fake-damage-shortage-debit",
    tabLabel: "3. झूठा डैमेज/शॉर्टेज डेबिट नोट",
    title: "माल उतारने के बाद पार्टी ने मनमाना 'शॉर्टेज' या 'ट्रांजिट डैमेज' दिखाकर पूरा भाड़ा काट लिया",
    situation:
      "लोडिंग के समय सीलबंद तिरपाल या कंटेनर में माल लोड हुआ था। अनलोडिंग के 15 दिन बाद कंसाइनर ने अचानक ईमेल भेजा कि 'कार्टन भीगे मिले या 20 बोरी गायब हैं', इसलिए ₹1.20 लाख का डेबिट नोट काटकर शेष सारा भाड़ा ज़ीरो कर दिया। न तो कोई जॉइंट सर्वे हुआ और न ही अनलोडिंग के समय बिल्टी पर कोई रिमार्क लिखा गया था।",
    legalWeapon:
      "कैरिज बाय रोड एक्ट 2007 की धारा 13 और 16 के तहत यदि डिलीवरी के समय माल प्राप्तकर्ता ने बिना शर्त बिल्टी पर हस्ताक्षर कर दिए, तो बाद में इकतरफा डेबिट नोट काटना कानूनन शून्य (Void) है। सुप्रीम कोर्ट के प्रतिष्ठित निर्णय (Union of India v. Raman Iron Foundry) के अनुसार, जब तक किसी सक्षम अदालत या मध्यस्थ द्वारा नुकसान का निर्धारण न हो जाए, कोई भी पक्ष स्वयं जज बनकर भाड़े से कटौती नहीं कर सकता।",
    actionSteps: [
      {
        title: "कदम 1: 'क्लीन POD' और जॉइंट इंस्पेक्शन अनुपस्थिति का नोटिस",
        description:
          "पार्टी को तुरंत लिखित विरोध भेजें कि अनलोडिंग के समय कोई डैमेज मेमो या स्वतंत्र सर्वेक्षक रिपोर्ट नहीं बनी थी, इसलिए बाद का डेबिट नोट अवैध है।",
      },
      {
        title: "कदम 2: मरीन इंश्योरेंस क्लेम का सत्यापन व नोटिस",
        description:
          "अधिवक्ता के नोटिस में स्पष्ट करें कि यदि माल का मरीन इंश्योरेंस था और पार्टी ने बीमा कंपनी से क्लेम लिया है, तो ट्रांसपोर्टर से भाड़ा काटना दोहरा फायदा (Double Enrichment) व धोखाधड़ी है।",
      },
      {
        title: "कदम 3: गैर-कानूनी कटौती की पूर्ण वापसी व ब्याज का दावा",
        description:
          "काटे गए अवैध डेबिट नोट को रद्द घोषित कराते हुए पूरे भाड़े की वसूली हेतु सिविल समरी सूट या एमएसएमई समाधान फोरम में केस दर्ज करें।",
      },
    ],
    statutoryHook: "Carriage by Road Act 2007 s.13 & 16, Raman Iron Foundry Rule (SC)",
  },
  {
    id: "broker-agent-freight-default",
    tabLabel: "4. ब्रोकर या कमीशन एजेंट डिफ़ॉल्ट",
    title: "ट्रांसपोर्ट ब्रोकर ने पार्टी से पूरा भाड़ा ले लिया, लेकिन गाड़ी मालिक का बकाया हड़प लिया",
    situation:
      "ट्रांसपोर्ट मंडी (जैसे आजादपुर, कालंबोली, संजय गांधी ट्रांसपोर्ट नगर) के किसी दलाल/कमीशन एजेंट के जरिए गाड़ी लगाई गई थी। पार्टी (कंसाइनर) ने ब्रोकर के बैंक खाते में पूरा भाड़ा ट्रांसफर कर दिया। लेकिन ब्रोकर ने फ्लीट ओनर को मात्र एडवांस देकर बाकी 70% भाड़ा 'पार्टी से पेमेंट नहीं आया' का झूठा बहाना बनाकर हजम कर लिया।",
    legalWeapon:
      "भारतीय अनुबंध अधिनियम की धारा 211-218 (एजेंसी नियम) और भारतीय न्याय संहिता 2023 (BNS) की धारा 316 व 318 (आपराधिक विश्वासघात व धोखाधड़ी) के तहत एजेंट का यह वैधानिक कर्तव्य है कि वह प्रिंसिपल के नाम पर प्राप्त धन बिना विलंब सौंपे। इसके अतिरिक्त यदि ब्रोकर ने कोई चेक या ऑनलाइन कमिटमेंट दिया है, तो एनआई एक्ट की धारा 138 या पेमेंट सिस्टम्स एक्ट धारा 25 के तहत कार्रवाई की जा सकती है।",
    actionSteps: [
      {
        title: "कदम 1: कंसाइनर/फैक्ट्री से पेमेंट कन्फर्मेशन मांगना",
        description:
          "मूल कंसाइनर को ई-वे बिल और बिल्टी की प्रति संलग्न कर ईमेल भेजें और पुष्टि प्राप्त करें कि उन्होंने ब्रोकर को भाड़े का भुगतान किस यूटीआर (UTR) नंबर से किया है।",
      },
      {
        title: "कदम 2: संयुक्त लीगल नोटिस (ब्रोकर व कंसाइनर दोनों को)",
        description:
          "एडवोकेट के माध्यम से ब्रोकर और कंसाइनर को संयुक्त नोटिस भेजें। ब्रोकर को आपराधिक विश्वासघात और कंसाइनर को मूल देनदार (Principal Debtor) के रूप में पक्षकार बनाएं।",
      },
      {
        title: "कदम 3: पुलिस शिकायत (धारा 316 BNS) व समरी रिकवरी वाद",
        description:
          "यदि ब्रोकर धोखाधड़ी करके फरार होने या रकम दबाने की नीयत रखता है, तो संबंधित थाने या आर्थिक अपराध शाखा (EOW) में शिकायत दर्ज कराएं और अदालत में समरी सूट दायर करें।",
      },
    ],
    statutoryHook: "Contract Act ss.211-218, BNS 2023 ss.316/318 & Order XXXVII CPC",
  },
];

export default function TransportBiltyRecoveryScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const currentScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 md:p-8">
      {/* Tabs Navigation */}
      <div className="flex flex-wrap gap-2 pb-4 border-b border-slate-200 mb-6">
        {SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Scenario Content Card */}
      <div className="space-y-6">
        <div>
          <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] mb-2">
            कानूनी सुरक्षा कवच &bull; {currentScenario.statutoryHook}
          </span>
          <h3 className="text-base sm:text-lg md:text-xl font-black text-slate-900 leading-snug">
            {currentScenario.title}
          </h3>
        </div>

        {/* Situation Block */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5">
          <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
            व्यापारिक जमीनी समस्या (Ground Transport Reality)
          </span>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {currentScenario.situation}
          </p>
        </div>

        {/* Legal Weapon Block */}
        <div className="bg-red-50/60 border border-red-200 rounded-xl p-4 sm:p-5">
          <span className="block text-[11px] font-bold uppercase tracking-wider text-[#DC2626] mb-1">
            कानूनी अधिकार व वैधानिक प्रावधान (Statutory Remedy)
          </span>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
            {currentScenario.legalWeapon}
          </p>
        </div>

        {/* Action Steps */}
        <div>
          <span className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
            रिकवरी के लिए 3 अनिवार्य कदम (Step-by-Step Action Plan)
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {currentScenario.actionSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold mb-2">
                    {idx + 1}
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-1.5 leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                    {step.description}
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
