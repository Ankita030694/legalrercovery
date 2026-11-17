"use client";

import React, { useState } from "react";
import Link from "next/link";

interface Scenario {
  id: string;
  tabLabel: string;
  title: string;
  statute: string;
  timeline: string;
  problem: string;
  strategy: string[];
  evidence: string[];
  warning: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "dharamkanta-eway",
    tabLabel: "1. धर्मकांटा पर्ची व ई-वे बिल",
    title: "माल साइट पर उतर गया, अब बिल्डर 'वजन कम था' या 'रिसीविंग नहीं मिली' कह रहा है",
    statute: "Sale of Goods Act s.42 & Order XXXVII CPC",
    timeline: "15-दिवसीय नोटिस + 60–90 दिन समरी सूट",
    problem:
      "सरिया (TMT), सीमेंट, रेत, गिट्टी (Crusher) या RMC साइट पर अनलोड होने के 20–45 दिन बाद बिल्डर या ठेकेदार बिल पास करने से मुकर जाते हैं और कहते हैं कि वजन कम था या उनके इंजीनियर ने चालान पर साइन नहीं किया।",
    strategy: [
      "GST ई-वे बिल (E-Way Bill) पोर्टल का डेटा, टोल/फास्टैग क्रॉसिंग और धर्मकांटा (Weighbridge) की कंप्यूटराइज्ड पर्ची एक साथ जोड़कर 'डिजिटल डिलीवरी प्रमाण' बनाएं।",
      "Sale of Goods Act 1930 की धारा 42 के तहत यदि क्रेता ने डिलीवरी के उचित समय (Reasonable Time) के भीतर माल रिजेक्ट नहीं किया और उस सरिये/सीमेंट को लेंटर या कॉलम में इस्तेमाल कर लिया, तो वह माल 'कानूनी रूप से स्वीकृत' माना जाता है।",
      "BSA 2023 की धारा 63 का सर्टिफिकेट लगाकर CPC ऑर्डर 37 समरी सूट का एडवोकेट नोटिस भेजें — इसमें बिल्डर को बिना कोर्ट की अनुमति के बचाव (Leave to Defend) का हक नहीं मिलता।",
    ],
    evidence: [
      "GST ई-वे बिल (Part-A & Part-B) और टैक्स इनवॉइस",
      "कंप्यूटराइज्ड धर्मकांटा पर्ची (तारीख, गाड़ी नंबर और नेट वजन)",
      "साइट अनलोडिंग की WhatsApp फोटो, गेट एंट्री टोकन या लेज़र कन्फर्मेशन",
    ],
    warning:
      "बिना लिखित आपत्ति के 30 दिन से ज्यादा बीत जाने पर बिल्डर बाद में 'क्वालिटी खराब थी' या 'वजन कम था' का बहाना अदालत में नहीं चला सकता।",
  },
  {
    id: "cheque-bounce-abscond",
    tabLabel: "2. चेक बाउंस / ठेकेदार फरार",
    title: "ठेकेदार ने चेक बाउंस कर दिया या काम अधूरा छोड़कर साइट से भाग गया",
    statute: "NI Act s.138/143A & CPC Order XXXVIII Rule 5",
    timeline: "30 दिन में नोटिस + 20% अंतरिम मुआवजा",
    problem:
      "बिल्डर या सिविल ठेकेदार ने उधारी चुकाने के लिए पोस्ट-डेटेड चेक (PDC) दिया जो बाउंस (Funds Insufficient / Stop Payment) हो गया, या ठेकेदार दूसरी साइट पर मशीनरी/माल शिफ्ट करके गायब हो गया।",
    strategy: [
      "चेक बाउंस होने की तारीख (Bank Return Memo) से ठीक 30 दिनों के भीतर NI Act की धारा 138 के तहत एडवोकेट लीगल नोटिस स्पीड पोस्ट RPAD से भेजें — 1 दिन की देरी भी केस को कमजोर कर सकती है।",
      "नोटिस मिलने के 15 दिन में भुगतान न हो, तो मजिस्ट्रेट कोर्ट में आपराधिक शिकायत दर्ज करें और धारा 143A के तहत कोर्ट से तुरंत 20% अंतरिम मुआवजा (Interim Compensation) मांगें।",
      "यदि ठेकेदार साइट छोड़कर भाग रहा है, तो सिविल कोर्ट में CPC Order XXXVIII Rule 5 (Attachment Before Judgment) के तहत मुख्य प्रिंसिपल डेवलपर के पास फंसे उसके रनिंग बिल (RA Bill) या बैंक खाते को फ्रीज करने की अर्जी लगाएं।",
    ],
    evidence: [
      "मूल बाउंस चेक और बैंक की सील लगा Return Memo",
      "कंपनी/ठेकेदार का GST नंबर, पैन कार्ड और डायरेक्टर/प्रोप्राइटर की KYC",
      "WhatsApp चैट जिसमें ठेकेदार ने पेमेंट की तारीख का वादा किया हो",
    ],
    warning:
      "चेक पर 'Security Cheque' लिखा होने से बिल्डर बच नहीं सकता — सुप्रीम कोर्ट (Sripati Singh केस) के अनुसार माल सप्लाई के बाद बकाया होने पर सिक्योरिटी चेक पर भी धारा 138 लागू होती है।",
  },
  {
    id: "barter-flat-trap",
    tabLabel: "3. कैश की जगह फ्लैट ऑफर",
    title: "बिल्डर पैसे देने के बजाय 'फ्लैट, प्लॉट या दुकान ले लो' (Barter) कह रहा है",
    statute: "RERA Act, CERSAI Audit & Contract Act s.62",
    timeline: "तुरंत CERSAI जांच + कैश रिकवरी नोटिस",
    problem:
      "अक्सर रियल एस्टेट बिल्डर सरिया, सीमेंट, टाइल्स, प्लाईवुड या लिफ्ट सप्लायर्स को लाखों का बकाया कैश में देने की बजाय निर्माणाधीन प्रोजेक्ट में एक फ्लैट या दुकान (Barter Allotment) लेने का दबाव डालते हैं।",
    strategy: [
      "बिना जांच किए कभी भी Barter फ्लैट या कच्ची Allotment Slip स्वीकार न करें, क्योंकि 70% मामलों में वह फ्लैट पहले ही किसी बैंक या NBFC के पास गिरवी (Mortgaged) होता है।",
      "सबसे पहले CERSAI पोर्टल और राज्य RERA पोर्टल पर जांचें कि प्रोजेक्ट की जमीन या अनसोल्ड इन्वेंटरी पर किस बैंक का चार्ज (Charge) दर्ज है।",
      "भारतीय अनुबंध अधिनियम की धारा 62 के अनुसार, जब तक आप लिखित रूप से नया समझौता (Novation) स्वीकार न करें, बिल्डर आपको कैश के बदले फ्लैट लेने के लिए मजबूर नहीं कर सकता। मूल कैश बिल पर ब्याज सहित एडवोकेट नोटिस जारी करें।",
    ],
    evidence: [
      "मूल टैक्स इनवॉइस (जिन पर Cash/RTGS पेमेंट शर्तें लिखी हों)",
      "RERA प्रोजेक्ट रजिस्ट्रेशन नंबर और CERSAI चार्ज सर्च रिपोर्ट",
      "बिल्डर द्वारा भेजी गई Barter/Allotment की WhatsApp या ईमेल पेशकश",
    ],
    warning:
      "यदि फ्लैट पर बैंक का पहले से लोन (Charge) है, तो दिवालिया होने की स्थिति में बैंक उस फ्लैट को नीलाम कर देगा और सप्लायर को न कैश मिलेगा न फ्लैट।",
  },
  {
    id: "hardware-msme-43bh",
    tabLabel: "4. हार्डवेयर/टाइल्स व MSME 3x ब्याज",
    title: "हार्डवेयर, प्लाईवुड, टाइल्स या क्रशर दुकान की उधारी और MSME 43B(h) का दबाव",
    statute: "MSMED Act s.15–18 & Income Tax s.43B(h)",
    timeline: "45 दिन पेमेंट सीमा + 3x RBI बैंक ब्याज",
    problem:
      "हार्डवेयर, सैनेटरीवेयर, प्लाईवुड, ग्लास, टाइल्स या स्टोन क्रशर डीलर्स का पैसा छोटे बिल्डर्स, इंटीरियर कॉन्ट्रैक्टर्स और सब-कॉन्ट्रैक्टर्स महीनों तक 'फाइनल बिल पास नहीं हुआ' कहकर रोक लेते हैं।",
    strategy: [
      "यदि आपकी फर्म के पास Udyam Registration (Micro/Small Enterprise) है, तो MSMED Act की धारा 15 के तहत बायर को अधिकतम 45 दिनों में भुगतान करना कानूनी रूप से अनिवार्य है।",
      "45 दिन बाद देरी पर धारा 16 के तहत RBI बैंक रेट के 3 गुना चक्रवृद्धि ब्याज (लगभग 18%–19.5% सालाना मासिक चक्रवृद्धि) लगता है, जिसे बायर इनकम टैक्स की धारा 43B(h) के तहत खर्च में नहीं दिखा सकता — यानी उस पर 30% टैक्स पेनल्टी अलग से लगेगी!",
      "अपने एडवोकेट लीगल नोटिस में सीधे 'Income Tax Act Section 43B(h) Disallowance' और 'MSME Samadhaan (MSEFC)' केस की चेतावनी जोड़ें — 80% प्राइवेट लिमिटेड बिल्डर्स टैक्स नुकसान से बचने के लिए तुरंत पेमेंट कर देते हैं।",
    ],
    evidence: [
      "उद्यम रजिस्ट्रेशन सर्टिफिकेट (Udyam Certificate — सप्लाई से पहले का)",
      "GST B2B इनवॉइस, इनवॉइस पर 45-दिन पेमेंट टर्म व ब्याज क्लॉज",
      "GSTR-1 और GSTR-2B मिलान (जिससे साबित हो कि बिल्डर ने आपके बिल पर GST Input Tax Credit क्लेम कर लिया है!)",
    ],
    warning:
      "अगर बिल्डर ने आपके बिल का GST Input Tax Credit (ITC) ले लिया है और 180 दिन में पेमेंट नहीं किया, तो CGST Act धारा 16(2) के तहत उसे ब्याज सहित पूरा ITC वापस करना पड़ेगा।",
  },
];

export default function BuildingMaterialRecoveryScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Tab Buttons */}
      <div className="flex flex-wrap border-b border-slate-200 bg-slate-50/80 p-2 gap-1.5">
        {SCENARIOS.map((item) => {
          const isActive = item.id === activeTab;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveTab(item.id)}
              className={`px-3 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              {item.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Content */}
      <div className="p-5 sm:p-6 md:p-7 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold bg-slate-900 text-white">
            लागू कानून: {current.statute}
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
            समय-सीमा: {current.timeline}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
          {current.title}
        </h3>

        <div className="bg-slate-50 border-l-4 border-slate-700 p-4 rounded-r-xl">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
            व्यापारी की वास्तविक समस्या (Dispute Trigger)
          </p>
          <p className="text-sm text-slate-800 leading-relaxed">{current.problem}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-emerald-50/60 border border-emerald-200 rounded-xl p-4">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 mb-2.5">
              तुरंत कानूनी एक्शन प्लान (Step-by-Step)
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-800 leading-relaxed">
              {current.strategy.map((step, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-700 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-wider text-slate-800 mb-2.5">
                आवश्यक दस्तावेज (BSA 2023 s.63)
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                {current.evidence.map((doc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold shrink-0">&check;</span>
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-900">
              <strong className="font-bold">सावधानी:</strong> {current.warning}
            </div>
          </div>
        </div>

        <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100">
          <span className="text-xs text-slate-500">
            क्या आपका बिल्डर या ठेकेदार इनमें से किसी एक स्थिति में पैसा रोके बैठा है?
          </span>
          <Link
            href="/user/new-recovery"
            className="inline-flex items-center px-4 py-2 rounded-lg bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold transition-colors"
          >
            ₹999 में एडवोकेट लीगल नोटिस शुरू करें &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
