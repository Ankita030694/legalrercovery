"use client";

import React, { useState } from "react";
import Link from "next/link";

interface ProblemTab {
  id: string;
  tabLabel: string;
  title: string;
  cause: string;
  legalBasis: string;
  steps: {
    step: string;
    description: string;
  }[];
  statutoryRule: string;
}

const PROBLEMS: ProblemTab[] = [
  {
    id: "upi-fraud",
    tabLabel: "UPI व QR कोड फ्रॉड",
    title: "फर्जी QR कोड स्कैन करने या रीफंड के नाम पर UPI से कटा पैसा",
    cause:
      "धोखेबाज OLX, Facebook Marketplace या फर्जी कस्टमर केयर बनकर पीड़ित से कहते हैं कि 'पैसे प्राप्त करने के लिए QR कोड स्कैन करें' या Google Pay / PhonePe पर 'Collect Request' भेजते हैं। पीड़ित जैसे ही UPI पिन डालता है, खाते से रकम कट जाती है।",
    legalBasis:
      "NPCI के दिशा-निर्देशों और RBI सर्कुलर (DBR.No.Leg.BC.78/09.07.005/2017-18) के तहत यदि ट्रांजैक्शन की सूचना बैंक को तुरंत दी जाए, तो बैंक पर लाभार्थी बैंक (Beneficiary Bank) से संपर्क कर फंड्स को फ्रीज कराने का वैधानिक दायित्व होता है।",
    steps: [
      {
        step: "तुरंत 1930 पर कॉल करें व UPI ऐप पर विवाद दर्ज करें",
        description:
          "फ्रॉड के पहले 1–2 घंटे (Golden Hour) में 1930 डायल करके CFCFRMS सिस्टम पर शिकायत दर्ज कराएं ताकि धोखेबाज के बैंक खाते में पैसा फ्रीज हो सके। UPI ऐप में 'Report Fraud' विकल्प चुनें।",
      },
      {
        step: "अपने बैंक को 3 दिनों में लिखित ईमेल व शाखा में आवेदन दें",
        description:
          "बैंक कस्टमर केयर और नोडल अधिकारी को तत्काल लिखित ईमेल भेजकर ट्रांजैक्शन आईडी (UTR No.) के साथ अनधिकृत निकासी की सूचना दें और औपचारिक कंप्लेंट रेफरेंस नंबर (Token) प्राप्त करें।",
      },
      {
        step: "10 दिनों के भीतर शैडो क्रेडिट (Shadow Credit) की मांग करें",
        description:
          "आरबीआई के निर्देशानुसार शिकायत दर्ज कराने के 10 कार्य दिवसों के भीतर बैंक को अस्थायी क्रेडिट (Reversal) प्रदान करना अनिवार्य है।",
      },
    ],
    statutoryRule: "RBI Customer Liability Circular 2017 & NPCI Dispute Framework",
  },
  {
    id: "card-otp-fraud",
    tabLabel: "कार्ड क्लोनिंग व अनधिकृत OTP",
    title: "डेबिट/क्रेडिट कार्ड से अचानक अनधिकृत निकासी या अंतरराष्ट्रीय ट्रांजैक्शन",
    cause:
      "कार्ड क्लोनिंग, स्किमिंग, या बिना ओटीपी वाले अंतरराष्ट्रीय पेमेंट गेटवे (जहां 2-फैक्टर ऑथेंटिकेशन लागू नहीं होता) के जरिए खाते या क्रेडिट कार्ड से बड़ी रकम गायब हो जाना। कई मामलों में फोन पर आए किसी फर्जी एपीके ऐप (APK malware) के जरिए ओटीपी चुपके से इंटरसेप्ट कर लिया जाता है।",
    legalBasis:
      "आरबीआई के 6 जुलाई 2017 के सर्कुलर के पैरा 6 के तहत, तीसरे पक्ष की धोखाधड़ी (Third-Party Breach) में जहां खामी न तो बैंक की है और न ही ग्राहक की, बल्कि सिस्टम की कमजोरी से फ्रॉड हुआ है, 3 कार्य दिवसों के भीतर रिपोर्ट करने पर ग्राहक की देयता 'शून्य' (Zero Liability) होती है। बैंक ग्राहक पर लापरवाही का मनमाना आरोप नहीं लगा सकता।",
    steps: [
      {
        step: "कार्ड को तत्काल ब्लॉक कराएं और अंतरराष्ट्रीय उपयोग बंद करें",
        description:
          "मोबाइल बैंकिंग ऐप या हेल्पलाइन से तुरंत कार्ड को स्थायी रूप से ब्लॉक करें ताकि आगे की निकासी रोकी जा सके।",
      },
      {
        step: "चार्जबैक (Chargeback Dispute) फॉर्म भरकर बैंक में जमा करें",
        description:
          "बैंक की शाखा में जाकर अनधिकृत लेनदेन का लिखित डिस्काउंट/चार्जबैक फॉर्म जमा करें और स्पष्ट रूप से Zero Liability क्लॉज का उल्लेख करें।",
      },
      {
        step: "साइबर क्राइम पोर्टल (cybercrime.gov.in) पर पावती लें",
        description:
          "राष्ट्रीय साइबर क्राइम पोर्टल पर शिकायत दर्ज कर 'Acknowledgement Number' प्राप्त करें और इसकी प्रति बैंक को सौंपें।",
      },
    ],
    statutoryRule: "RBI Circular DBR.No.Leg.BC.78/09.07.005/2017-18 Para 6",
  },
  {
    id: "sim-swap",
    tabLabel: "सिम-स्वैप व फिशिंग",
    title: "सिम कार्ड का नेटवर्क गायब होना और बैंक खाते से सारी जमा पूंजी उड़ जाना",
    cause:
      "धोखेबाज फर्जी आधार/दस्तावेज देकर टेलीकॉम ऑपरेटर से पीड़ित के नंबर का दूसरा सिम जारी करा लेते हैं (SIM Swap)। जैसे ही पीड़ित के मोबाइल का सिग्नल बंद होता है, अपराधी नेटबैंकिंग पासवर्ड रीसेट करके ओटीपी अपने पास मंगाते हैं और पूरा बैंक खाता खाली कर देते हैं।",
    legalBasis:
      "दिल्ली राज्य उपभोक्ता आयोग व राष्ट्रीय उपभोक्ता आयोग (NCDRC) ने कई ऐतिहासिक फैसलों (जैसे ICICI Bank v. Sanjeev Aggarwal) में माना है कि यदि बैंक असामान्य और बड़े पैमाने पर लेनदेन के दौरान असामान्य आईपी एड्रेस और नए डिवाइस लॉगिन पर जोखिम नियंत्रण (Risk-Based Fraud Monitoring) में विफल रहता है, तो बैंक सेवा में कमी (Deficiency in Service) का दोषी है और पूरा रिफंड देने के लिए बाध्य है।",
    steps: [
      {
        step: "टेलीकॉम ऑपरेटर के आउटलेट पर जाकर सिम ब्लॉक कराएं",
        description:
          "यदि अचानक नेटवर्क 'No Service' दिखाए, तो बिना देर किए टेलीकॉम ऑपरेटर से संपर्क करें और फर्जी डुप्लीकेट सिम को तुरंत डिएक्टिवेट कराएं।",
      },
      {
        step: "बैंक की निकटतम शाखा में व्यक्तिगत रूप से जाकर खाता होल्ड कराएं",
        description:
          "लिखित आवेदन देकर नेटबैंकिंग फ्रीज कराएं और तुरंत अनधिकृत डेबिट की प्राथमिक सूचना (First Incident Report) दर्ज कराएं।",
      },
      {
        step: "दूरसंचार विभाग (DoT) व पुलिस साइबर सेल में एफआईआर दर्ज कराएं",
        description:
          "टेलीकॉम कंपनी द्वारा बिना पर्याप्त सत्यापन सिम जारी करने और बैंक की सुरक्षा विफलता दोनों के खिलाफ संयुक्त शिकायत दर्ज करें।",
      },
    ],
    statutoryRule: "Consumer Protection Act 2019 (Deficiency in Service) & IT Act Sec 43A",
  },
  {
    id: "bank-refusal",
    tabLabel: "बैंक की टालमटोल व इनकार",
    title: "बैंक का कहना कि 'आपने ओटीपी शेयर किया होगा' और रिफंड देने से मना करना",
    cause:
      "जब ग्राहक 3 दिनों के भीतर शिकायत करता है, तो कई बैंक बिना किसी फॉरेंसिक जांच के एक सामान्य ईमेल भेजकर पल्ला झाड़ लेते हैं कि 'लेनदेन वैध क्रेडेंशियल्स के साथ हुआ था, अतः बैंक जिम्मेदार नहीं है'।",
    legalBasis:
      "आरबीआई सर्कुलर के पैरा 12 के अनुसार, ग्राहक की लापरवाही सिद्ध करने का भार (Burden of Proof) पूरी तरह से बैंक पर है, न कि ग्राहक पर। जब तक बैंक ठोस तकनीकी साक्ष्य (जैसे ग्राहक के रजिस्टर्ड डिवाइस का मैक एड्रेस और जियो-लोकेशन) से साबित न कर दे, बैंक दावे को अस्वीकार नहीं कर सकता। 1 जनवरी 2027 से लागू होने वाले नए आरबीआई ढांचे में तो ₹50,000 तक के नुकसान पर बैंक को बिना सवाल तुरंत भरपाई करनी होगी।",
    steps: [
      {
        step: "बैंक के प्रिंसिपल नोडल ऑफिसर (PNO) को औपचारिक आपत्ति भेजें",
        description:
          "बैंक के क्षेत्रीय नोडल अधिकारी को ईमेल भेजें कि उन्होंने आरबीआई के 6 जुलाई 2017 के सर्कुलर का उल्लंघन किया है और फॉरेंसिक लॉग्स उपलब्ध कराने की मांग करें।",
      },
      {
        step: "वकील के माध्यम से बैंक को 15-दिवसीय वैधानिक लीगल नोटिस भेजें",
        description:
          "बैंक प्रबंधन को रजिस्टर्ड स्पीड पोस्ट द्वारा लीगल नोटिस भेजकर 15 दिनों में रकम वापस करने और मानसिक उत्पीड़न के मुआवजे की वैधानिक चेतावनी दें।",
      },
      {
        step: "आरबीआई लोकपाल (CMS Portal) में शिकायत दर्ज कराएं",
        description:
          "यदि 30 दिनों में बैंक समाधान न दे, तो Reserve Bank - Integrated Ombudsman Scheme 2021 के तहत ऑनलाइन शिकायत दर्ज कर शत-प्रतिशत रिफंड प्राप्त करें।",
      },
    ],
    statutoryRule: "RBI Circular Para 12 (Burden of Proof on Bank) & RB-IOS 2021",
  },
  {
    id: "court-release",
    tabLabel: "1930 फ्रीज व कोर्ट से रिलीज",
    title: "साइबर सेल ने आरोपी का खाता फ्रीज कर दिया, लेकिन पैसा मुझे कैसे मिलेगा?",
    cause:
      "1930 पर त्वरित शिकायत के बाद साइबर पुलिस धोखेबाज के खाते में आपकी चोरी हुई रकम को फ्रीज (Lien Freeze) करवा देती है। लेकिन बैंक कहता है कि जब तक कोर्ट का आदेश नहीं आता, वह आपके खाते में पैसा वापस ट्रांसफर नहीं कर सकता।",
    legalBasis:
      "भारतीय नागरिक सुरक्षा संहिता, 2023 की धारा 457 (Section 457 of BNSS 2023 / Section 457 CrPC) के तहत जिस व्यक्ति का धन साइबर अपराध में जब्त या फ्रीज किया गया है, वह संबंधित न्यायिक मजिस्ट्रेट (JMFC/CMM) की अदालत में संपत्ति की सुपुर्दगी (Release of Seized Money) के लिए आवेदन लगा सकता है।",
    steps: [
      {
        step: "साइबर सेल से फ्रीज की गई राशि और बैंक खाते का विवरण लें",
        description:
          "जांच अधिकारी (IO) से पता करें कि अपराध संख्या (Crime No./FIR) के तहत किस बैंक खाते में कितनी राशि फ्रीज की गई है।",
      },
      {
        step: "मजिस्ट्रेट कोर्ट में Section 457 BNSS के तहत अर्जी लगाएं",
        description:
          "अधिवक्ता के माध्यम से सक्षम अदालत में आवेदन दायर करें जिसमें बैंक स्टेटमेंट, साइबर शिकायत और फ्रीज ऑर्डर संलग्न करें।",
      },
      {
        step: "अदालत के निर्देश पर बैंक द्वारा मूल खाते में रकम की वापसी",
        description:
          "मजिस्ट्रेट द्वारा सुपुर्दगी आदेश (Release Order) जारी होने पर बैंक औपचारिक रूप से फ्रीज की गई रकम सीधे आपके खाते में ट्रांसफर कर देता है।",
      },
    ],
    statutoryRule: "Section 457 of Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS)",
  },
];

export default function CyberFraudHindiTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(PROBLEMS[0].id);
  const currentProblem = PROBLEMS.find((p) => p.id === activeTabId) || PROBLEMS[0];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-8 shadow-xs">
      <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-[#DC2626] border border-red-200 mb-3">
        समस्या समाधान गाइड • विभिन्न साइबर अपराध और त्वरित कानूनी कदम
      </div>
      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4">
        आपके साथ किस तरह का फ्रॉड हुआ है? श्रेणी चुनें और सटीक प्रक्रिया जानें
      </h3>
      <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
        हर तरह के डिजिटल अपराध के लिए कानूनी समाधान और बैंक की जवाबदेही अलग होती है। नीचे दिए गए टैब पर क्लिक करके अपनी स्थिति के अनुसार तुरंत उठाए जाने वाले कदम देखें:
      </p>

      {/* Tabs Bar */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3 mb-6">
        {PROBLEMS.map((prob) => {
          const isActive = prob.id === activeTabId;
          return (
            <button
              key={prob.id}
              type="button"
              onClick={() => setActiveTabId(prob.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {prob.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Content Panel */}
      <div className="space-y-6">
        <div>
          <span className="text-xs uppercase tracking-wider font-bold text-red-600 block mb-1">
            परिदृश्य विश्लेषण ({currentProblem.statutoryRule})
          </span>
          <h4 className="text-lg sm:text-xl font-bold text-slate-900">
            {currentProblem.title}
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              धोखाधड़ी का तरीका (Mode of Cyber Fraud)
            </h5>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentProblem.cause}
            </p>
          </div>

          <div className="bg-red-50/50 border border-red-200 rounded-xl p-4">
            <h5 className="text-xs font-bold uppercase tracking-wider text-red-700 mb-2">
              कानूनी आधार व बैंक का दायित्व (Legal Ground)
            </h5>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentProblem.legalBasis}
            </p>
          </div>
        </div>

        <div>
          <h5 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
            तुरंत उठाने योग्य 3 कानूनी कदम (Immediate Action Protocol)
          </h5>
          <div className="space-y-3">
            {currentProblem.steps.map((st, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-white border border-slate-200 rounded-xl p-3.5 sm:p-4 hover:border-slate-300 transition-colors"
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center mt-0.5">
                  {idx + 1}
                </span>
                <div>
                  <h6 className="text-sm font-bold text-slate-900 mb-1">
                    {st.step}
                  </h6>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {st.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
          <span className="text-xs text-slate-500">
            विधिक सहायता: हमारे विशेषज्ञ अधिवक्ता बैंक और साइबर सेल से त्वरित समन्वय करते हैं।
          </span>
          <Link
            href="/recovery/fraud-transaction-amount"
            className="text-xs font-semibold text-red-600 hover:text-red-700 hover:underline flex items-center gap-1"
          >
            अंग्रेजी में विस्तृत गाइड देखें (English Guide) →
          </Link>
        </div>
      </div>
    </div>
  );
}
