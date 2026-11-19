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
    id: "khad-beej-fasal-bahana",
    tabLabel: "1. खाद-बीज डीलर ('फसल खराब' बहाना)",
    title: "खरीफ या रबी की फसल कटने के बाद कृषि केंद्र डीलर 'बीज नहीं उगा / दवा बेअसर थी' कहकर पेमेंट रोक रहा है",
    statute: "Seeds Act ss.14–16, Insecticides Act ss.21–24 & Sale of Goods Act s.42",
    timeline: "15-दिवसीय नोटिस + PDC धारा 138 कार्रवाई",
    problem:
      "खाद, हाइब्रिड बीज, पेस्टीसाइड या माइक्रो-न्यूट्रिएंट डिस्ट्रीब्यूटर सीज़न शुरू होने पर कृषि केंद्र डीलर को 60–90 दिन के उधार पर माल देते हैं। फसल कटने के 4 महीने बाद जब तकादा होता है, तो डीलर मौखिक बहाना बनाता है कि 'किसानों की फसल खराब हो गई, दवा ने काम नहीं किया, पहले क्रेडिट नोट दो'!",
    strategy: [
      "Seeds Act 1966 (धारा 14–16) और Insecticides Act 1968 (धारा 21–24) के अनुसार किसी भी बीज या कीटनाशक को 'खराब या नकली' तभी माना जा सकता है जब सरकारी कृषि अधिकारी (Seed/Insecticide Inspector) ने सीलबंद बैच का नमूना लेकर राज्य सरकार की लैब से रिपोर्ट जारी की हो।",
      "यदि डीलर ने माल की डिलीवरी और छिड़काव के समय कोई लिखित शिकायत या सरकारी लैब टेस्ट नहीं कराया, तो Sale of Goods Act धारा 42 के तहत माल कानूनन 'स्वीकृत' (Deemed Accepted) माना जाता है।",
      "डीलर के मौखिक बहाने को खारिज करते हुए एडवोकेट लीगल नोटिस स्पीड पोस्ट RPAD से भेजें और सीज़न शुरू होते समय लिए गए Security/PDC चेक को बैंक में प्रस्तुत करें।",
    ],
    evidence: [
      "GST टैक्स इनवॉइस (बैच नंबर, एक्सपायरी डेट और प्रिंसिपल सर्टिफिकेट सहित)",
      "बकाया लेज़र स्टेटमेंट व डीलर के साइन किया हुआ डिलीवरी चालान / बिल्टी",
      "डीलर द्वारा दिया गया पोस्ट-डेटेड चेक (PDC) और डिस्ट्रीब्यूटरशिप फॉर्म",
    ],
    warning:
      "कभी भी बिना सरकारी लैब रिपोर्ट के डीलर के दबाव में 'क्रेडिट नोट' या 'रेट डिफरेंस' की छूट न दें — इससे आपका पूरा लेज़र बैलेंस कमजोर हो जाता है।",
  },
  {
    id: "cold-storage-rent-auction",
    tabLabel: "2. कोल्ड स्टोरेज किराया व नीलामी",
    title: "किसान या व्यापारी कोल्ड स्टोरेज में आलू, मिर्च, जीरा या प्याज छोड़कर न किराया दे रहा है, न माल उठा रहा है",
    statute: "Indian Contract Act ss.170 & 176 + State Cold Storage Acts",
    timeline: "15-दिवसीय रजिस्टर्ड प्री-ऑक्शन नोटिस + कानूनी नीलामी",
    problem:
      "बाज़ार में आलू, लाल मिर्च, अदरक या फल का भाव गिरते ही कई स्टॉकिस्ट और व्यापारी चेंबर का किराया (Storage Rent) और लोडिंग-अनलोडिंग चार्ज चुकाने के बजाय माल को कोल्ड स्टोरेज में ही सड़ने के लिए छोड़ देते हैं और फोन बंद कर लेते हैं।",
    strategy: [
      "Indian Contract Act 1872 की धारा 170 (Bailee's Particular Lien) और राज्य कोल्ड स्टोरेज अधिनियम (UP, बिहार, MP, पश्चिम बंगाल, गुजरात आदि) के तहत कोल्ड स्टोरेज मालिक को बकाया किराये के बदले रखे हुए माल पर कानूनी अधिकार (Lien) प्राप्त है।",
      "माल को बेचने या नीलाम करने से पहले धारा 176 के तहत लॉट नंबर, चेंबर नंबर, बोरी की संख्या, कुल बकाया किराया और 15 दिनों की अंतिम समय-सीमा (Redemption Window) लिखकर रजिस्टर्ड स्पीड पोस्ट RPAD से 'Pre-Auction Statutory Legal Notice' भेजना अनिवार्य है।",
      "यदि 15 दिन में किराया नहीं आता, तो स्थानीय अखबार में सूचना और पारदर्शी नीलामी (Auction) करके किराया काटें; और यदि नीलामी से भी किराया पूरा न निकले, तो शेष घाटे (Deficit) की वसूली के लिए सिविल सूट (Order XXXVII CPC) दायर करें।",
    ],
    evidence: [
      "कोल्ड स्टोरेज लॉट रसीद (Storage Receipt / Bond) जिसमें किराया दर व चेंबर नंबर दर्ज हो",
      "रजिस्टर्ड स्पीड पोस्ट RPAD से भेजा गया 15-दिवसीय प्री-ऑक्शन एडवोकेट नोटिस व ट्रैकिंग स्लिप",
      "स्टॉक की स्थिति की तारीख-युक्त फोटो/वीडियो और नीलामी पंचनामा व वज़न पर्ची",
    ],
    warning:
      "बिना लिखित 15-दिवसीय रजिस्टर्ड नोटिस के अगर आपने आलू या मिर्च की बोरियां बेच दीं, तो व्यापारी Consumer Court (उपभोक्ता फोरम) में आपके खिलाफ 'अवैध बिक्री' का हर्जाना केस ठोक सकता है।",
  },
  {
    id: "mandi-mill-arhatiya",
    tabLabel: "3. राइस/दाल/तेल मिल व मंडी आढ़तिया",
    title: "राइस मिल, दाल मिल, आटा या तेल मिल का माल खरीदने वाला थोक व्यापारी या पक्का आढ़तिया पेमेंट दबाए बैठा है",
    statute: "APMC Rules (24–72 Hr Mandate), MSMED Act ss.15–18 & s.43B(h)",
    timeline: "मंडी सचिव CC + 45-दिन MSME 3x ब्याज दबाव",
    problem:
      "करनाल, अकोला, गोंदिया, जलगांव, इंदौर, कोटा, लॉरेंस रोड या वाशी मंडी के बायर और कमीशन एजेंट (आढ़तिया) 15–30 दिन की उधारी पर धान, चावल, दाल, सरसों/सोया तेल या खल मंगा लेते हैं और बाद में 'नमी ज्यादा थी (Moisture Cut)' या 'क्वालिटी हल्की थी' कहकर लाखों रुपये काट लेते हैं।",
    strategy: [
      "यदि लेन-देन मंडी लाइसेंस के तहत हुआ है, तो एडवोकेट लीगल नोटिस की एक प्रति (CC) सीधे संबंधित 'APMC मंडी समिति सचिव (Secretary)' को भेजें — मंडी नियमों के तहत भुगतान न करने पर आढ़तिया का लाइसेंस निलंबित या रद्द हो सकता है।",
      "राइस, दाल, आटा और ऑयल मिल मालिक अगर Udyam (MSME) रजिस्टर्ड हैं, तो नोटिस में MSMED Act धारा 15–18 (3x RBI चक्रवृद्धि ब्याज) और Income Tax धारा 43B(h) (टैक्स डिसअलाउंस) की चेतावनी जोड़ें।",
      "अनलोडिंग के समय धर्मकांटा पर्ची (Weighbridge Slip), FSSAI लॉट सैंपल और GST ई-वे बिल से साबित करें कि माल सही वज़न और मानक के साथ स्वीकार हुआ था — बाद की मनमानी कटौती (Debit Note) कानूनन अवैध है।",
    ],
    evidence: [
      "मंडी गेट पास, 6R/9R मंडी रसीद, ट्रक बिल्टी (LR) और GST ई-वे बिल",
      "कंप्यूटराइज्ड धर्मकांटा पर्ची (Weighbridge Slip) और Udyam Registration प्रमाणपत्र",
      "बायर द्वारा क्लेम किए गए GST Input Tax Credit (GSTR-1/2B) और WhatsApp रेट कन्फर्मेशन",
    ],
    warning:
      "बायर ने अगर आपके बिल का GST ITC क्लेम कर लिया है और 180 दिन में पेमेंट नहीं किया, तो CGST Act धारा 16(2) के तहत उस पर सरकारी ब्याज सहित पूरा ITC रिवर्सल का कानूनी दबाव बनता है।",
  },
  {
    id: "cheque-bounce-pdc",
    tabLabel: "4. सिक्योरिटी चेक बाउंस व फरार पार्टी",
    title: "डीलर या मंडी व्यापारी ने दिया हुआ चेक बाउंस कर दिया या दुकान बंद करके भागने की तैयारी में है",
    statute: "NI Act ss.138/141/143A & CPC Order XXXVIII Rule 5",
    timeline: "30 दिन में नोटिस अनिवार्य + 20% अंतरिम मुआवजा",
    problem:
      "अक्सर खाद-बीज डीलर, पोल्ट्री/कैटल फीड एजेंट या मंडी व्यापारी तकादा बढ़ने पर एक तारीख वाला चेक (PDC) थमा देते हैं जो 'Funds Insufficient' या 'Stop Payment' से बाउंस हो जाता है, या वे फर्म का नाम बदलकर दूसरे के नाम से दुकान चलाने लगते हैं।",
    strategy: [
      "बैंक से Cheque Return Memo मिलने की तारीख से ठीक 30 दिनों के भीतर NI Act की धारा 138 का एडवोकेट लीगल नोटिस स्पीड पोस्ट RPAD से भेजना अनिवार्य है — 31वें दिन कानूनी अधिकार खत्म हो सकता है।",
      "सुप्रीम कोर्ट के फैसले (Sripati Singh बनाम झारखंड राज्य) के अनुसार, यदि माल सप्लाई के समय लिया गया 'Security Cheque' भी बकाया रहने पर बाउंस होता है, तो उस पर पूरा आपराधिक मुकदमा (2 साल जेल या दोगुना जुर्माना) चलता है।",
      "नोटिस के 15 दिन में पैसा न आने पर मजिस्ट्रेट कोर्ट में केस करें और धारा 143A के तहत कोर्ट से तुरंत 20% अंतरिम मुआवजा (Interim Compensation) मांगें; साथ ही पार्टी की संपत्ति बिकने से रोकने के लिए सिविल कोर्ट में Order XXXVIII Rule 5 (Attachment Before Judgment) लगाएं।",
    ],
    evidence: [
      "मूल बाउंस चेक और बैंक की मुहर लगा Return Memo",
      "डीलर/पार्टी का आधार, पैन, GST नंबर, दुकान का पता व फर्म के पार्टनर्स की सूची",
      "WhatsApp चैट या लेज़र कन्फर्मेशन जिसमें पार्टी ने बकाया राशि स्वीकार की हो",
    ],
    warning:
      "चेक बाउंस होने के बाद कभी भी केवल फोन पर समझौते के इंतज़ार में 30 दिन की समय-सीमा (Statutory Limitation) न गंवाएं — पहले नोटिस भेजें, समझौता नोटिस के बाद भी हो सकता है।",
  },
];

export default function KhadBeejRecoveryScenarioTabs() {
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

      {/* Active Tab Content */}
      <div className="p-5 sm:p-6 md:p-7 space-y-5">
        <div className="flex flex-wrap items-start justify-between gap-3 pb-4 border-b border-slate-100">
          <div className="space-y-1.5 flex-1 min-w-[240px]">
            <span className="inline-block px-2.5 py-1 rounded-md bg-red-50 text-[#DC2626] border border-red-200 text-[11px] font-bold">
              लागू कानून: {current.statute}
            </span>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
              {current.title}
            </h3>
          </div>
          <div className="bg-slate-900 text-white px-3.5 py-2 rounded-xl text-xs font-bold shrink-0">
            अनुमानित समय: <span className="text-emerald-400">{current.timeline}</span>
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-1">
            असली व्यापारिक समस्या
          </p>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">{current.problem}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4 space-y-2.5">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
              कानूनी वसूली रणनीति (Action Plan)
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-800">
              {current.strategy.map((step, i) => (
                <li key={i} className="flex items-start gap-2 leading-relaxed">
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col justify-between space-y-4">
            <div className="space-y-2.5">
              <p className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                जरूरी कागजात व डिजिटल सबूत
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {current.evidence.map((ev, i) => (
                  <li key={i} className="flex items-start gap-2 leading-relaxed">
                    <span className="text-[#DC2626] font-bold shrink-0">&check;</span>
                    <span>{ev}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <p className="text-[11px] font-bold text-amber-900 leading-relaxed">
                <span className="uppercase tracking-wider text-amber-700 mr-1">सावधानी:</span>
                {current.warning}
              </p>
            </div>
          </div>
        </div>

        <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100">
          <p className="text-xs text-slate-600">
            क्या आपकी भी यही समस्या है? हमारे वकील 24 घंटे में पक्का लीगल नोटिस तैयार कर देंगे।
          </p>
          <Link
            href="/user/new-recovery"
            className="inline-flex items-center px-4 py-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold rounded-lg transition-colors"
          >
            ₹999 में केस शुरू करें &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
