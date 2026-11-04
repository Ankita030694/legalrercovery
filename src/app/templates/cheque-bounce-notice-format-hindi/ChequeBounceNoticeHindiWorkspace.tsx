"use client";

import React, { useState, useId } from "react";

type TemplateType = "advocate" | "self" | "company";

interface ChequeNoticeFormData {
  place: string;
  noticeDate: string;
  advocateName: string;
  advocateEnrollment: string;
  advocateOffice: string;
  senderName: string;
  senderFatherName: string;
  senderAddress: string;
  senderContact: string;
  defaulterName: string;
  defaulterFatherName: string;
  defaulterAddress: string;
  defaulterContact: string;
  companyName: string;
  directorName: string;
  chequeNumber: string;
  chequeDate: string;
  chequeAmountFigures: string;
  chequeAmountWords: string;
  draweeBankName: string;
  draweeBranch: string;
  depositDate: string;
  memoDate: string;
  memoReason: string;
  debtReason: string;
  statutoryDays: string;
}

export default function ChequeBounceNoticeHindiWorkspace() {
  const componentId = useId();
  const [templateType, setTemplateType] = useState<TemplateType>("advocate");
  const [copied, setCopied] = useState(false);

  const [data, setData] = useState<ChequeNoticeFormData>({
    place: "नई दिल्ली (New Delhi)",
    noticeDate: "4 नवम्बर 2026",
    advocateName: "राजेश कुमार शर्मा (एडवोकेट)",
    advocateEnrollment: "D/1428/2014",
    advocateOffice: "चेम्बर नं. 412, लॉयर्स ब्लॉक, तीस हजारी कोर्ट परिसर, दिल्ली - 110054",
    senderName: "महेश चंद्र गुप्ता",
    senderFatherName: "स्व. श्री रामस्वरूप गुप्ता",
    senderAddress: "मकान नं. 54, विकास मार्ग, शकरपुर, दिल्ली - 110092",
    senderContact: "9876543210 / client@email.com",
    defaulterName: "सुरेश कुमार वर्मा",
    defaulterFatherName: "श्री बनवारी लाल वर्मा",
    defaulterAddress: "प्लॉट नं. 12, ब्लॉक-बी, सेक्टर 62, नोएडा, गौतम बुद्ध नगर, उत्तर प्रदेश - 201301",
    defaulterContact: "9123456789 / defaulter@email.com",
    companyName: "वर्मा इंफ्राटेक प्राइवेट लिमिटेड",
    directorName: "सुरेश कुमार वर्मा (प्रबंध निदेशक)",
    chequeNumber: "458921",
    chequeDate: "15 अक्टूबर 2026",
    chequeAmountFigures: "₹4,50,000",
    chequeAmountWords: "चार लाख पचास हजार रुपये मात्र",
    draweeBankName: "भारतीय स्टेट बैंक (State Bank of India)",
    draweeBranch: "सेक्टर 62 शाखा, नोएडा",
    depositDate: "20 अक्टूबर 2026",
    memoDate: "22 अक्टूबर 2026",
    memoReason: "Funds Insufficient / खाते में अपर्याप्त निधि",
    debtReason: "व्यावसायिक माल आपूर्ति व वैध वैधानिक देनदारी (Legally Enforceable Debt)",
    statutoryDays: "15",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const getNoticeBodyText = () => {
    if (templateType === "advocate") {
      return `पंजीकृत स्पीड पोस्ट (AD) एवं ईमेल द्वारा
वैधानिक कानूनी मांग नोटिस
(परक्राम्य लिखत अधिनियम, 1881 की धारा 138 के अंतर्गत / Section 138 NI Act)

कार्यालय: ${data.advocateName}
अधिवक्ता, बार काउंसिल नामांकन संख्या: ${data.advocateEnrollment}
कार्यालय पता: ${data.advocateOffice}
दिनांक: ${data.noticeDate}
स्थान: ${data.place}

सेवा में,
1. श्री ${data.defaulterName}
आत्मज: ${data.defaulterFatherName}
पता: ${data.defaulterAddress}
मोबाइल/संपर्क: ${data.defaulterContact}

महोदय,

मेरे मुवक्किल (Client) श्री ${data.senderName}, आत्मज ${data.senderFatherName}, निवासी: ${data.senderAddress} के स्पष्ट निर्देशों और प्राधिकार के अधीन, मैं आपको निम्नलिखित वैधानिक कानूनी नोटिस प्रेषित करता हूँ:

1. यह कि आप और मेरे मुवक्किल के मध्य पूर्व व्यावसायिक/व्यक्तिगत संबंध रहे हैं। आपने मेरे मुवक्किल से ${data.debtReason} के एवज में वित्तीय सहायता/उधार प्राप्त किया था, जिसके पूर्ण एवं अंतिम निपटान हेतु आप पर मेरे मुवक्किल का कुल वैध एवं विधिक ऋण बकाया था।

2. यह कि उपरोक्त वैध देनदारी एवं ऋण (Legally Enforceable Debt and Liability) के भुगतान के उद्देश्य से आपने मेरे मुवक्किल के पक्ष में निम्नलिखित चेक जारी किया था:
   - चेक संख्या: ${data.chequeNumber}
   - चेक दिनांक: ${data.chequeDate}
   - राशि: ${data.chequeAmountFigures} (अक्षरों में: ${data.chequeAmountWords})
   - देय बैंक एवं शाखा: ${data.draweeBankName}, ${data.draweeBranch}

3. यह कि आपके द्वारा दिए गए विश्वास एवं आश्वासन पर मेरे मुवक्किल ने उक्त चेक को अपने बैंक खाते में दिनांक ${data.depositDate} को निकासी (Clearance) हेतु प्रस्तुत किया।

4. यह कि मेरे मुवक्किल को उस समय गहरा मानसिक आघात लगा जब संबंधित बैंक द्वारा दिनांक ${data.memoDate} को एक बैंक वापसी ज्ञापन (Bank Return Memo) के साथ उक्त चेक अनादरित (Dishonoured) कर वापस लौटा दिया गया। बैंक वापसी मेमो में चेक बाउंस होने का अधिकृत कारण अंकित था: "${data.memoReason}"।

5. यह कि आपने दुर्भावनापूर्ण इरादे से, यह भली-भांति जानते हुए कि आपके खाते में पर्याप्त धनराशि नहीं है, मेरे मुवक्किल को गुमराह करने और धोखाधड़ी के उद्देश्य से यह चेक जारी किया था। आपका यह कृत्य परक्राम्य लिखत अधिनियम, 1881 की धारा 138 के तहत एक संज्ञेय एवं दंडनीय अपराध है।

6. अतः इस वैधानिक कानूनी नोटिस के माध्यम से आपको सूचित किया जाता है कि इस नोटिस की प्राप्ति के ठीक ${data.statutoryDays} (पंद्रह) दिनों के भीतर उक्त चेक राशि ${data.chequeAmountFigures} (${data.chequeAmountWords}) का भुगतान मेरे मुवक्किल को सीधे उनके बैंक खाते में आरटीजीएस/एनईएफटी या डिमांड ड्राफ्ट के माध्यम से सुनिश्चित करें।

7. चेतावनी: यदि आप उक्त वैधानिक अवधि (${data.statutoryDays} दिन) के भीतर संपूर्ण चेक राशि का भुगतान करने में विफल रहते हैं, तो मेरे मुवक्किल आपके विरुद्ध परक्राम्य लिखत अधिनियम, 1881 की धारा 138/142 के तहत सक्षम मजिस्ट्रेट न्यायालय में आपराधिक परिवाद (Criminal Complaint) दायर करने को बाध्य होंगे, जिसमें आपको 2 वर्ष तक का सश्रम कारावास तथा चेक राशि का दोगुना जुर्माना हो सकता है। साथ ही धारा 143A के तहत 20% तक अंतरिम मुआवजा (Interim Compensation) एवं दीवानी प्रक्रिया संहिता (CPC) के आदेश 37 के तहत वसूली वाद भी दायर किया जाएगा, जिसके समस्त हर्जाने-खर्चे व अदालती व्यय के उत्तरदायी आप स्वयं होंगे।

नोटिस की एक प्रति मेरे कार्यालय में भविष्य के अदालती उपयोग हेतु सुरक्षित रखी गई है।

भवदीय,

(${data.advocateName})
अधिवक्ता, बार काउंसिल: ${data.advocateEnrollment}
हस्ताक्षर मुवक्किल: _____________________
(${data.senderName})`;
    }

    if (templateType === "company") {
      return `पंजीकृत स्पीड पोस्ट / ईमेल द्वारा
वैधानिक कानूनी नोटिस (कंपनी एवं निदेशकों के विरुद्ध)
(धारा 138 सहपठित धारा 141, परक्राम्य लिखत अधिनियम, 1881)

प्रेषक:
${data.senderName}
आत्मज: ${data.senderFatherName}
निवासी: ${data.senderAddress}
संपर्क: ${data.senderContact}

दिनांक: ${data.noticeDate} | स्थान: ${data.place}

प्रति,
1. मैसर्स ${data.companyName} (कंपनी)
पंजीकृत कार्यालय: ${data.defaulterAddress}
2. श्री/श्रीमती ${data.directorName} (निदेशक / अधिकृत हस्ताक्षरकर्ता)
निवासी: ${data.defaulterAddress}

विषय: धारा 138 एवं 141 एनआई एक्ट 1881 के तहत चेक संख्या ${data.chequeNumber} राशि ${data.chequeAmountFigures} के अनादर बाबत वैधानिक मांग नोटिस।

महोदय/महोदया,

1. यह कि विपक्षी संख्या 1 एक निगमित कंपनी है और विपक्षी संख्या 2 कंपनी के दिन-प्रतिदिन के व्यवसाय, प्रबंधन एवं वित्तीय निर्णयों के लिए मुख्य रूप से उत्तरदायी एवं सक्रिय निदेशक/अधिकृत हस्ताक्षरकर्ता हैं।

2. यह कि कंपनी द्वारा की गई व्यावसायिक आपूर्ति एवं वैध विधिक देनदारी के एवज में विपक्षी संख्या 2 ने कंपनी की ओर से चेक सं. ${data.chequeNumber} दिनांक ${data.chequeDate} राशि ${data.chequeAmountFigures} (${data.chequeAmountWords}), देय बैंक: ${data.draweeBankName} जारी किया था।

3. यह कि प्रेषक द्वारा बैंक में चेक प्रस्तुत करने पर दिनांक ${data.memoDate} को बैंक मेमो कारण "${data.memoReason}" सहित अनादरित हो गया।

4. परक्राम्य लिखत अधिनियम की धारा 141 के अनुसार कंपनी के साथ-साथ चेक पर हस्ताक्षर करने वाले और तत्कालीन कार्यरत सभी निदेशक व्यक्तिगत रूप से आपराधिक दायित्व के भागीदार हैं (संयुक्त एवं पृथक दायित्व)।

5. अतः आपको एतद्द्वारा 15 दिनों का वैधानिक समय दिया जाता है कि आप उक्त राशि ${data.chequeAmountFigures} का भुगतान प्रेषक को करें, अन्यथा आपके एवं कंपनी के विरुद्ध धारा 138/141 एनआई एक्ट के अंतर्गत सक्षम न्यायालय में आपराधिक मुकदमा दायर किया जाएगा।

भवदीय,
हस्ताक्षर: _______________________
(${data.senderName})`;
    }

    // templateType === "self"
    return `पंजीकृत स्पीड पोस्ट द्वारा
वैधानिक मांग नोटिस (स्वयं प्रेषक द्वारा)
(परक्राम्य लिखत अधिनियम, 1881 की धारा 138 के अंतर्गत)

दिनांक: ${data.noticeDate}
स्थान: ${data.place}

प्रेषक:
${data.senderName}
आत्मज: ${data.senderFatherName}
निवासी: ${data.senderAddress}
संपर्क: ${data.senderContact}

सेवा में,
${data.defaulterName}
आत्मज: ${data.defaulterFatherName}
निवासी: ${data.defaulterAddress}
संपर्क: ${data.defaulterContact}

विषय: चेक बाउंस होने के संबंध में 15 दिवसीय कानूनी मांग नोटिस (धारा 138 एनआई एक्ट)।

महोदय,

1. यह कि आपने मुझसे ${data.debtReason} के तहत वित्तीय सहायता प्राप्त की थी और इसके भुगतान हेतु आपने मुझे चेक संख्या ${data.chequeNumber} दिनांक ${data.chequeDate} राशि ${data.chequeAmountFigures} (${data.chequeAmountWords}), बैंक: ${data.draweeBankName} जारी किया था।

2. यह कि मेरे द्वारा दिनांक ${data.depositDate} को बैंक में चेक जमा कराने पर बैंक ने दिनांक ${data.memoDate} को चेक वापसी मेमो के साथ कारण "${data.memoReason}" बताते हुए चेक अनादरित लौटा दिया।

3. अतः मैं आपको इस कानूनी नोटिस द्वारा मांग करता हूँ कि इस नोटिस की प्राप्ति के 15 दिनों के भीतर मुझे संपूर्ण राशि ${data.chequeAmountFigures} का भुगतान करें।

4. यदि आप 15 दिनों में भुगतान नहीं करते हैं, तो मैं आपके विरुद्ध धारा 138 के तहत मजिस्ट्रेट कोर्ट में आपराधिक मुकदमा दर्ज करवाऊंगा, जिसमें 2 साल की जेल और जुर्माने का प्रावधान है।

भवदीय,
हस्ताक्षर: ________________________
(${data.senderName})`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getNoticeBodyText());
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([getNoticeBodyText()], { type: "text/plain;charset=utf-8" });
    element.href = URL.createObjectURL(file);
    element.download = `Cheque_Bounce_Notice_${data.chequeNumber}_Hindi.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div id="heading-interactive-template" className="w-full my-8 scroll-mt-28">
      {/* Container Header */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-red-600/30 text-red-300 border border-red-500/40 mb-2">
                लाइव लीगल नोटिस जनरेटर • धारा 138 NI Act
              </span>
              <h3 className="text-xl sm:text-2xl font-bold">
                चेक बाउंस कानूनी नोटिस फॉर्मेट (हिंदी) — कस्टमाइज़ व डाउनलोड करें
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-2xl">
                अपनी जानकारी (नाम, चेक नंबर, राशि, बैंक मेमो दिनांक) भरें। नीचे नोटिस तुरंत लाइव अपडेट होगा। आप इसे कॉपी, प्रिंट अथवा टेक्स्ट/वर्ड फ़ाइल के रूप में सुरक्षित कर सकते हैं।
              </p>
            </div>

            {/* Template Selector Pills */}
            <div className="flex items-center gap-2 bg-slate-800/90 p-1.5 rounded-xl border border-slate-700">
              <button
                type="button"
                onClick={() => setTemplateType("advocate")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  templateType === "advocate"
                    ? "bg-red-600 text-white shadow-xs"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                अधिवक्ता प्रारूप (मानक)
              </button>
              <button
                type="button"
                onClick={() => setTemplateType("company")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  templateType === "company"
                    ? "bg-red-600 text-white shadow-xs"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                कंपनी व निदेशक (s.141)
              </button>
              <button
                type="button"
                onClick={() => setTemplateType("self")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  templateType === "self"
                    ? "bg-red-600 text-white shadow-xs"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                स्वयं प्रेषित नोटिस
              </button>
            </div>
          </div>
        </div>

        {/* Two Column Layout: Form Fields on Left, Live Preview Article on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
          {/* Form Controls Column (5 cols) */}
          <div className="lg:col-span-5 p-5 sm:p-6 bg-slate-50/60 max-h-[750px] overflow-y-auto space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 pb-2 border-b border-slate-200 flex items-center justify-between">
              <span>जानकारी प्रविष्ट करें (विवरण भरें)</span>
              <span className="text-[11px] font-normal text-slate-500">सभी फ़ील्ड्स लाइव अपडेट होते हैं</span>
            </h4>

            {/* Advocate Details (only if advocate format) */}
            {templateType === "advocate" && (
              <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-2.5">
                <span className="text-[11px] font-bold text-red-700 uppercase">1. अधिवक्ता का विवरण</span>
                <div>
                  <label htmlFor={`${componentId}-advocateName`} className="block text-xs font-medium text-slate-700 mb-1">
                    अधिवक्ता का नाम
                  </label>
                  <input
                    id={`${componentId}-advocateName`}
                    type="text"
                    name="advocateName"
                    value={data.advocateName}
                    onChange={handleChange}
                    className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:ring-1 focus:ring-red-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label htmlFor={`${componentId}-advocateEnrollment`} className="block text-xs font-medium text-slate-700 mb-1">
                      बार काउंसिल नामांकन
                    </label>
                    <input
                      id={`${componentId}-advocateEnrollment`}
                      type="text"
                      name="advocateEnrollment"
                      value={data.advocateEnrollment}
                      onChange={handleChange}
                      className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:ring-1 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label htmlFor={`${componentId}-place`} className="block text-xs font-medium text-slate-700 mb-1">
                      शहर / स्थान
                    </label>
                    <input
                      id={`${componentId}-place`}
                      type="text"
                      name="place"
                      value={data.place}
                      onChange={handleChange}
                      className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:ring-1 focus:ring-red-500"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor={`${componentId}-advocateOffice`} className="block text-xs font-medium text-slate-700 mb-1">
                    कार्यालय का पता
                  </label>
                  <input
                    id={`${componentId}-advocateOffice`}
                    type="text"
                    name="advocateOffice"
                    value={data.advocateOffice}
                    onChange={handleChange}
                    className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:ring-1 focus:ring-red-500"
                  />
                </div>
              </div>
            )}

            {/* Sender / Payee Details */}
            <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-2.5">
              <span className="text-[11px] font-bold text-slate-700 uppercase">2. चेक धारक / शिकायतकर्ता (Payee)</span>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label htmlFor={`${componentId}-senderName`} className="block text-xs font-medium text-slate-700 mb-1">
                    आपका पूरा नाम
                  </label>
                  <input
                    id={`${componentId}-senderName`}
                    type="text"
                    name="senderName"
                    value={data.senderName}
                    onChange={handleChange}
                    className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:ring-1 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label htmlFor={`${componentId}-senderFatherName`} className="block text-xs font-medium text-slate-700 mb-1">
                    पिता/पति का नाम
                  </label>
                  <input
                    id={`${componentId}-senderFatherName`}
                    type="text"
                    name="senderFatherName"
                    value={data.senderFatherName}
                    onChange={handleChange}
                    className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:ring-1 focus:ring-red-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor={`${componentId}-senderAddress`} className="block text-xs font-medium text-slate-700 mb-1">
                  पूरा आवासीय/व्यावसायिक पता
                </label>
                <input
                  id={`${componentId}-senderAddress`}
                  type="text"
                  name="senderAddress"
                  value={data.senderAddress}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:ring-1 focus:ring-red-500"
                />
              </div>
            </div>

            {/* Defaulter / Drawer Details */}
            <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-2.5">
              <span className="text-[11px] font-bold text-slate-700 uppercase">3. चेक जारीकर्ता / देनदार (Drawer)</span>
              {templateType === "company" && (
                <>
                  <div>
                    <label htmlFor={`${componentId}-companyName`} className="block text-xs font-medium text-slate-700 mb-1">
                      कंपनी/फर्म का नाम
                    </label>
                    <input
                      id={`${componentId}-companyName`}
                      type="text"
                      name="companyName"
                      value={data.companyName}
                      onChange={handleChange}
                      className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:ring-1 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label htmlFor={`${componentId}-directorName`} className="block text-xs font-medium text-slate-700 mb-1">
                      हस्ताक्षरकर्ता / निदेशक का नाम व पद
                    </label>
                    <input
                      id={`${componentId}-directorName`}
                      type="text"
                      name="directorName"
                      value={data.directorName}
                      onChange={handleChange}
                      className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:ring-1 focus:ring-red-500"
                    />
                  </div>
                </>
              )}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label htmlFor={`${componentId}-defaulterName`} className="block text-xs font-medium text-slate-700 mb-1">
                    देनदार का नाम
                  </label>
                  <input
                    id={`${componentId}-defaulterName`}
                    type="text"
                    name="defaulterName"
                    value={data.defaulterName}
                    onChange={handleChange}
                    className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:ring-1 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label htmlFor={`${componentId}-defaulterFatherName`} className="block text-xs font-medium text-slate-700 mb-1">
                    पिता का नाम
                  </label>
                  <input
                    id={`${componentId}-defaulterFatherName`}
                    type="text"
                    name="defaulterFatherName"
                    value={data.defaulterFatherName}
                    onChange={handleChange}
                    className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:ring-1 focus:ring-red-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor={`${componentId}-defaulterAddress`} className="block text-xs font-medium text-slate-700 mb-1">
                  देनदार का सही डाक पता (पिन कोड सहित)
                </label>
                <input
                  id={`${componentId}-defaulterAddress`}
                  type="text"
                  name="defaulterAddress"
                  value={data.defaulterAddress}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:ring-1 focus:ring-red-500"
                />
              </div>
            </div>

            {/* Cheque & Bank Memo Details */}
            <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-2.5">
              <span className="text-[11px] font-bold text-red-700 uppercase">4. चेक व बैंक मेमो विवरण (अनिवार्य)</span>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label htmlFor={`${componentId}-chequeNumber`} className="block text-xs font-medium text-slate-700 mb-1">
                    चेक संख्या (6 डिजिट)
                  </label>
                  <input
                    id={`${componentId}-chequeNumber`}
                    type="text"
                    name="chequeNumber"
                    value={data.chequeNumber}
                    onChange={handleChange}
                    className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:ring-1 focus:ring-red-500 font-mono"
                  />
                </div>
                <div>
                  <label htmlFor={`${componentId}-chequeDate`} className="block text-xs font-medium text-slate-700 mb-1">
                    चेक पर दर्ज दिनांक
                  </label>
                  <input
                    id={`${componentId}-chequeDate`}
                    type="text"
                    name="chequeDate"
                    value={data.chequeDate}
                    onChange={handleChange}
                    className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:ring-1 focus:ring-red-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label htmlFor={`${componentId}-chequeAmountFigures`} className="block text-xs font-medium text-slate-700 mb-1">
                    चेक राशि (अंकों में)
                  </label>
                  <input
                    id={`${componentId}-chequeAmountFigures`}
                    type="text"
                    name="chequeAmountFigures"
                    value={data.chequeAmountFigures}
                    onChange={handleChange}
                    className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:ring-1 focus:ring-red-500 font-semibold"
                  />
                </div>
                <div>
                  <label htmlFor={`${componentId}-chequeAmountWords`} className="block text-xs font-medium text-slate-700 mb-1">
                    चेक राशि (शब्दों में)
                  </label>
                  <input
                    id={`${componentId}-chequeAmountWords`}
                    type="text"
                    name="chequeAmountWords"
                    value={data.chequeAmountWords}
                    onChange={handleChange}
                    className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:ring-1 focus:ring-red-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label htmlFor={`${componentId}-draweeBankName`} className="block text-xs font-medium text-slate-700 mb-1">
                    देय बैंक का नाम
                  </label>
                  <input
                    id={`${componentId}-draweeBankName`}
                    type="text"
                    name="draweeBankName"
                    value={data.draweeBankName}
                    onChange={handleChange}
                    className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:ring-1 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label htmlFor={`${componentId}-memoDate`} className="block text-xs font-medium text-slate-700 mb-1">
                    बैंक वापसी मेमो दिनांक
                  </label>
                  <input
                    id={`${componentId}-memoDate`}
                    type="text"
                    name="memoDate"
                    value={data.memoDate}
                    onChange={handleChange}
                    className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:ring-1 focus:ring-red-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor={`${componentId}-memoReason`} className="block text-xs font-medium text-slate-700 mb-1">
                  बाउंस होने का कारण (मेमो अनुसार)
                </label>
                <select
                  id={`${componentId}-memoReason`}
                  name="memoReason"
                  value={data.memoReason}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:ring-1 focus:ring-red-500"
                >
                  <option value="Funds Insufficient / खाते में अपर्याप्त निधि">Funds Insufficient (अपर्याप्त राशि)</option>
                  <option value="Stop Payment by Drawer / भुगतान रोकने के निर्देश">Stop Payment by Drawer (भुगतान रोका गया)</option>
                  <option value="Account Closed / बैंक खाता बंद">Account Closed (खाता बंद)</option>
                  <option value="Signature Differs / हस्ताक्षर में भिन्नता">Signature Differs (हस्ताक्षर भिन्न)</option>
                  <option value="Exceeds Arrangement / ऋण सीमा से अधिक">Exceeds Arrangement (सीमा से अधिक)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Live Preview Column (7 cols) */}
          <div className="lg:col-span-7 p-5 sm:p-8 bg-white flex flex-col justify-between">
            <div>
              {/* Action Toolbar */}
              <div className="flex flex-wrap items-center justify-between pb-4 mb-4 border-b border-slate-200 gap-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    लाइव लीगल नोटिस प्रीव्यू
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
                  >
                    {copied ? (
                      <span className="text-emerald-700 font-bold">✓ कॉपी हो गया!</span>
                    ) : (
                      <>
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        <span>टेक्स्ट कॉपी करें</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleDownload}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
                    title="टेक्स्ट फ़ाइल डाउनलोड करें"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    <span>डाउनलोड</span>
                  </button>

                  <button
                    type="button"
                    onClick={handlePrint}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                    </svg>
                    <span>प्रिंट करें</span>
                  </button>
                </div>
              </div>

              {/* Rendered Letter Preview Article */}
              <article className="border border-slate-200 rounded-xl p-6 sm:p-8 bg-[#FFFEFA] shadow-xs text-slate-800 font-serif leading-relaxed text-xs sm:text-sm whitespace-pre-line max-h-[600px] overflow-y-auto selection:bg-amber-100">
                {getNoticeBodyText()}
              </article>
            </div>

            {/* Clause Warning Footer */}
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span>⚠️ यह प्रारूप एनआई एक्ट की धारा 138(b) के अनिवार्य 30 दिवसीय नोटिस नियम का पूर्ण अनुपालन करता है।</span>
              <span className="font-mono text-slate-400">Section 138 / 141 Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
