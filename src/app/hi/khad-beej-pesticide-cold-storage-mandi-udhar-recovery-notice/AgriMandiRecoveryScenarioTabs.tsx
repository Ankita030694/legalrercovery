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
    id: "agro-dealer-fasal-bahana",
    tabLabel: "1. खाद-बीज डीलर (फसल खराब बहाना)",
    title: "खरीफ-रबी फसल कट गई, कृषि केंद्र डीलर ने किसानों से नकद वसूल लिया — अब 'बीज नहीं उगा / दवा असर नहीं की' का बहाना!",
    statute: "Seeds Act 1966, Insecticides Act 1968 & Order XXXVII CPC",
    timeline: "15-दिवसीय एडवोकेट नोटिस + 60–90 दिन समरी सूट",
    problem:
      "हर खरीफ और रबी सीज़न के बाद ग्रामीण व कस्बाई खाद-बीज-पेस्टीसाइड डीलर (Krishi Kendra) किसानों से उधारी वसूल कर दूसरी कंपनी में लगा देते हैं और सप्लायर/डिस्ट्रीब्यूटर के ₹5 लाख से ₹35 लाख के बिल पर बिना किसी सरकारी रिपोर्ट के 'बीज जर्मिनेशन फेल' या 'दवा नकली थी' का झूठा बहाना बनाते हैं।",
    strategy: [
      "Seeds Act 1966 और Insecticides Act 1968 के तहत किसी भी बैच को खराब तभी माना जा सकता है जब कृषि विभाग (Seed Inspector / Insecticide Inspector) ने सील-बंद सैंपल लेकर सरकारी नोटिफाइड लैब से फेल रिपोर्ट जारी की हो। मौखिक शिकायत की कोर्ट में शून्य कीमत है।",
      "अपनी कंपनी की Batch Quality Control (QC) / Lab Test Report और उसी बैच के अन्य संतुष्ट डीलरों के रिकॉर्ड को लीगल नोटिस के साथ जोड़ें और Sale of Goods Act 1930 की धारा 42 (Deemed Acceptance) लागू करें।",
      "डीलर के लेज़र बैलेंस कन्फर्मेशन, GST टैक्स इनवॉइस और ई-वे बिल के आधार पर CPC ऑर्डर 37 समरी सूट का एडवोकेट नोटिस Speed Post RPAD व WhatsApp पर भेजें।",
    ],
    evidence: [
      "GST टैक्स इनवॉइस, Batch No. उल्लेख और E-Way Bill",
      "सरकारी या NABL प्रमाणित बैच क्वालिटी / जर्मिनेशन टेस्ट रिपोर्ट",
      "डीलर का हस्ताक्षरित लेज़र कन्फर्मेशन, एग्रीमेंट और WhatsApp ऑर्डर चैट",
    ],
    warning:
      "यदि डीलर ने बिना किसी लैब रिपोर्ट के 30–60 दिन बाद 'फसल खराब' कहा है, तो वह अदालत में अपने बिल से एकतरफा कटौती (Debit Note) नहीं कर सकता (Raman Iron Foundry सिद्धांत)।",
  },
  {
    id: "cold-storage-kiraya-nilami",
    tabLabel: "2. कोल्ड स्टोरेज किराया व आलू-मिर्ची नीलामी",
    title: "मंडी भाव गिरने पर व्यापारी कोल्ड स्टोरेज में 50,000 बोरी आलू/मिर्ची छोड़कर गायब — किराया कैसे वसूलें और कानूनन नीलामी कैसे करें?",
    statute: "State Cold Storage Acts & Contract Act s.170–176",
    timeline: "15–30 दिन रजिस्टर्ड प्री-ऑक्शन नोटिस + वैधानिक नीलामी",
    problem:
      "जब मंडी में आलू, सूखी लाल मिर्च, धनिया, दाल या ड्राई फ्रूट्स का भाव गिरता है, तो कई व्यापारी और किसान-ट्रेडर्स सीज़न खत्म होने पर माल उठाने नहीं आते और न ही कोल्ड स्टोरेज का किराया व बिजली खर्च चुकाते हैं। बिना कानूनी प्रक्रिया माल बेचने पर स्टोरेज मालिक पर ही उल्टा क्रिमिनल केस (BNS s.316) हो सकता है।",
    strategy: [
      "Indian Contract Act की धारा 170–176 (Bailee/Pledgee Lien) और संबंधित राज्य के Cold Storage Regulation Act (जैसे UP, Bihar, MP, WB Cold Storage Acts) के तहत स्टोरेज मालिक को बकाया किराये के लिए माल रोकने और वैधानिक नोटिस के बाद नीलाम करने का अधिकार है।",
      "माल नीलाम करने से पहले पार्टी के पंजीकृत पते पर वकील के माध्यम से Registered Post (RPAD) और WhatsApp पर 'Statutory Pre-Auction-Cum-Rent Demand Notice' भेजें, जिसमें लॉट नंबर, बोरी संख्या, बकाया किराया और नीलामी की स्पष्ट तारीख-समय दर्ज हो।",
      "स्थानीय समाचार पत्र में सार्वजनिक नीलामी सूचना प्रकाशित कर पारदर्शी नीलामी करें; यदि नीलामी से प्राप्त राशि बकाया किराये से कम पड़े, तो शेष घाटे (Deficit Rent) की वसूली के लिए Order XXXVII CPC में समरी सूट दायर करें।",
    ],
    evidence: [
      "कोल्ड स्टोरेज रसीद (Lot Slip / Storage Receipt) जिस पर किराया दर और सीज़न समाप्ति तिथि हो",
      "स्टॉक एंट्री रजिस्टर (Rakba/Chamber Ledger) और वजन पर्ची",
      "रजिस्टर्ड प्री-ऑक्शन वकील नोटिस, RPAD रसीद और अखबार विज्ञापन की प्रति",
    ],
    warning:
      "कभी भी बिना लिखित एडवोकेट प्री-ऑक्शन नोटिस और रजिस्टर्ड डाक प्रमाण के चैंबर से माल न बेचें — वरना डिफॉल्टर पार्टी आप पर 'अवैध बिक्री' और मुआवजे का दावा ठोक सकती है।",
  },
  {
    id: "mandi-arhatiya-mill-udhar",
    tabLabel: "3. मंडी आढ़तिया, राइस व दाल मिल उधारी",
    title: "राइस मिल, दाल मिल या ऑयल मिल से बाहरगाँव (Outstation) मंडी पार्टी/आढ़तिया को माल भेजा — अब पेमेंट अटका है",
    statute: "APMC Act Rules, Order XXXVII CPC & MSME s.15–18",
    timeline: "15-दिवसीय नोटिस + APMC मंडी शिकायत / समरी सूट",
    problem:
      "करनाल, गोंदिया, अकोला, जलगांव, इंदौर, कोटा, लॉरेंस रोड (दिल्ली) और वाशी मंडी के बायर या दलाल (Broker) चावल, दाल, आटा, चीनी या खाद्य तेल की गाड़ियां मंगाकर 15–30 दिन की उधारी लेते हैं, और फिर 'क्वालिटी हल्की थी' या 'पार्टी से पैसा नहीं आया' कहकर महीनों टालते रहते हैं।",
    strategy: [
      "APMC मंडी समिति में शिकायत करने से पहले यह जांचें कि विवाद केवल मंडी लाइसेंसधारियों के बीच है या बाहरगाँव के थोक खरीदार से। यदि पार्टी दूसरे राज्य में है, तो मंडी पंचायत में समय बर्बाद न करें — सीधे CPC Order XXXVII Summary Suit या Commercial Court के लिए वकील नोटिस भेजें।",
      "मिल के पास Udyam (MSME) सर्टिफिकेट होने पर MSMED Act धारा 15–18 के तहत 45 दिन की अनिवार्य पेमेंट सीमा और RBI बैंक रेट के 3 गुना चक्रवृद्धि ब्याज (लगभग 18%–19.5%) की मांग नोटिस में शामिल करें।",
      "यदि माल दलाल (Commission Agent / Pakka Arhatiya) की गारंटी पर गया था, तो बायर और गारंटर दलाल दोनों को संयुक्त रूप से (Joint & Several Liability) लीगल नोटिस में पार्टी बनाएं।",
    ],
    evidence: [
      "GST टैक्स इनवॉइस, E-Way Bill और मंडी गेट पास / मंडी शुल्क रसीद",
      "ट्रांसपोर्ट बिल्टी (LR/Bilty), धर्मकांटा कांटा पर्ची और ट्रक ड्राइवर डिलीवरी रिसीविंग",
      "दलाल (Broker) की सौदा चिट्ठी (Sauda Chitthi) और बायर का GSTR-2B मिलान",
    ],
    warning:
      "अगर मंडी बायर ने आपके बिल पर GST Input Tax Credit (ITC) ले लिया है और 180 दिन में भुगतान नहीं किया, तो CGST Act धारा 16(2) के तहत उसे ब्याज सहित ITC वापस करना पड़ेगा — नोटिस में इसका जिक्र तुरंत असर करता है।",
  },
  {
    id: "security-cheque-bounce-138",
    tabLabel: "4. सिक्योरिटी चेक बाउंस व MSME 43B(h)",
    title: "एग्रो डीलर या मंडी व्यापारी ने दिया हुआ सिक्योरिटी चेक (PDC) बाउंस कर दिया या 'Stop Payment' लगा दिया",
    statute: "NI Act s.138, s.141, s.143A & Income Tax s.43B(h)",
    timeline: "30 दिन में अनिवार्य नोटिस + 20% अंतरिम मुआवजा",
    problem:
      "खाद-बीज डिस्ट्रीब्यूटरशिप या मिल सप्लाई शुरू करते समय लिए गए सिक्योरिटी चेक को जब बकाया वसूली के लिए बैंक में लगाया जाता है, तो चेक 'Funds Insufficient' या 'Payment Stopped by Drawer' से बाउंस हो जाता है, और डीलर कहता है कि यह केवल 'Security Cheque' था।",
    strategy: [
      "बैंक से Cheque Return Memo मिलने की तारीख से ठीक 30 दिनों के भीतर NI Act की धारा 138 के तहत एडवोकेट लीगल नोटिस Speed Post RPAD से भेजें — 30 दिन की समय-सीमा चूकने पर आपराधिक मुकदमा खत्म हो सकता है।",
      "नोटिस मिलने के 15 दिन के भीतर भुगतान न होने पर मजिस्ट्रेट कोर्ट में धारा 138/141 का केस दायर करें और धारा 143A के तहत कोर्ट से तुरंत चेक राशि का 20% अंतरिम मुआवजा (Interim Compensation) मांगें।",
      "यदि आपकी फर्म MSME (Micro/Small) है, तो नोटिस में Income Tax Act की धारा 43B(h) की चेतावनी जोड़ें — 45 दिन में भुगतान न करने पर डिफॉल्टर पार्टी को उस खरीद पर लगभग 30% अतिरिक्त इनकम टैक्स भरना पड़ेगा।",
    ],
    evidence: [
      "मूल बाउंस चेक और बैंक की मुहर लगा Return Memo",
      "डीलरशिप एग्रीमेंट / खाता बही (Ledger Statement) जो चेक की तारीख पर बकाया साबित करे",
      "कंपनी/फर्म का GSTIN, पैन और पार्टनर/डायरेक्टर का पता (धारा 141 के लिए)",
    ],
    warning:
      "सुप्रीम कोर्ट के लैंडमार्क फैसले (Sripati Singh v. State of Jharkhand) के अनुसार, यदि बकाया देय हो चुका है तो 'Security Cheque' बाउंस होने पर भी धारा 138 के तहत पूरी जेल व दोगुने जुर्माने की कार्रवाई चलती है।",
  },
];

export default function AgriMandiRecoveryScenarioTabs() {
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
            क्या आपका डीलर, मंडी बायर या कोल्ड स्टोरेज क्लाइंट इनमें से किसी स्थिति में पैसा रोके बैठा है?
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
