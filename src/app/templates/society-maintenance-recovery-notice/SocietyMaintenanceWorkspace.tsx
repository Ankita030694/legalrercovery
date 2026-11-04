"use client";

import React, { useState, useId } from "react";

type NoticeVariant = "first_demand" | "final_sec101" | "hindi";

interface SocietyNoticeFormData {
  societyName: string;
  registrationNo: string;
  societyAddress: string;
  noticeRefNo: string;
  noticeDate: string;
  memberName: string;
  flatNo: string;
  wingOrTower: string;
  shareCertNo: string;
  defaultPeriodFrom: string;
  defaultPeriodTo: string;
  principalArrears: string;
  sinkingAndRepairFund: string;
  interestRatePercent: string;
  interestAmount: string;
  totalPayable: string;
  totalPayableWords: string;
  resolutionNo: string;
  resolutionDate: string;
  cureDays: string;
  stateActSection: string;
  bankAccountDetails: string;
  secretaryName: string;
  chairmanName: string;
}

export default function SocietyMaintenanceWorkspace() {
  const componentId = useId();
  const [variant, setVariant] = useState<NoticeVariant>("first_demand");
  const [copied, setCopied] = useState(false);

  const [data, setData] = useState<SocietyNoticeFormData>({
    societyName: "Green Valley Co-operative Housing Society Ltd.",
    registrationNo: "BOM/WR/HSG/TC/11482/2014-15",
    societyAddress: "Plot No. 44, Sector 14, Vashi, Navi Mumbai, Maharashtra 400703",
    noticeRefNo: "GVCHS/MAINT/2026-27/108",
    noticeDate: "4th November 2026",
    memberName: "Shri Siddharth Malhotra",
    flatNo: "Flat No. B-704",
    wingOrTower: "Wing B (7th Floor)",
    shareCertNo: "Share Certificate No. 74 (Distinctive Nos. 366 to 370)",
    defaultPeriodFrom: "1st April 2025",
    defaultPeriodTo: "31st October 2026 (19 Months)",
    principalArrears: "₹85,500",
    sinkingAndRepairFund: "₹19,000",
    interestRatePercent: "21% per annum (Simple Interest per Bye-Law No. 71)",
    interestAmount: "₹14,820",
    totalPayable: "₹1,19,320",
    totalPayableWords: "Rupees One Lakh Nineteen Thousand Three Hundred Twenty Only",
    resolutionNo: "MC/RES/2026/19",
    resolutionDate: "25th October 2026",
    cureDays: "15",
    stateActSection: "Section 101 of the Maharashtra Co-operative Societies Act, 1960",
    bankAccountDetails: "A/c Name: Green Valley CHS Ltd. | A/c No: 50200048192811 | IFSC: HDFC0000240",
    secretaryName: "Prakash Kulkarni (Hon. Secretary)",
    chairmanName: "Rameshwar Patil (Hon. Chairman)",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const getGeneratedText = () => {
    if (variant === "hindi") {
      return `[सोसायटी / आरडब्ल्यूए लेटरहेड पर]
पंजीकृत सोसायटी नाम: ${data.societyName}
पंजीकरण संख्या: ${data.registrationNo}
पंजीकृत कार्यालय: ${data.societyAddress}

पत्र संदर्भ संख्या: ${data.noticeRefNo}
दिनांक: ${data.noticeDate}

सेवा में,
${data.memberName}
आवंटी एवं पंजीकृत सदस्य: ${data.flatNo}, ${data.wingOrTower}
शेयर प्रमाणपत्र विवरण: ${data.shareCertNo}
पता: ${data.societyName}, ${data.societyAddress}

विषय: सोसायटी मेंटेनेंस बकाया (Maintenance Arrears) की अदायगी हेतु अंतिम वैधानिक मांग सूचना पत्र — कुल देय राशि ${data.totalPayable} (${data.totalPayableWords})।

महोदय/महोदया,

प्रबंध कार्यकारिणी समिति (Managing Committee) के प्रस्ताव संख्या ${data.resolutionNo} दिनांक ${data.resolutionDate} के अनुपालन में आपको यह अंतिम लिखित मांग सूचना पत्र (Maintenance Arrears Recovery Notice) प्रेषित किया जा रहा है:

1. सदस्यता एवं रखरखाव दायित्व: आप हमारी सोसायटी में ${data.flatNo} (${data.wingOrTower}) के पंजीकृत सदस्य हैं। सोसायटी के स्वीकृत उपनियमों (Approved Model Bye-Laws) तथा सामान्य सभा (AGM) द्वारा पारित दरों के अनुसार प्रत्येक सदस्य के लिए मासिक रखरखाव शुल्क, मरम्मत कोष (Repair Fund), सिंकिंग फंड एवं साझा उपयोगिताओं का समय पर भुगतान करना अनिवार्य वैधानिक दायित्व है।

2. बकाया अवधि एवं लेखा विवरण: सोसायटी के लेखा रजिस्टर के अनुसार आपने दिनांक ${data.defaultPeriodFrom} से ${data.defaultPeriodTo} तक की अवधि के मासिक मेंटेनेंस बिलों का भुगतान नहीं किया है। आपके फ्लैट खाते पर बकाया राशि का मद-वार विवरण निम्नवत् है:
   (क) मूल मासिक रखरखाव एवं सेवा शुल्क बकाया: ${data.principalArrears}
   (ख) सिंकिंग फंड एवं मेजर रिपेयर फंड अंशदान: ${data.sinkingAndRepairFund}
   (ग) उपनियमों के अंतर्गत साधारण ब्याज (${data.interestRatePercent}): ${data.interestAmount}
   -------------------------------------------------------------------------
   कुल देय बकाया राशि (Total Outstanding Dues): ${data.totalPayable} (${data.totalPayableWords})
   -------------------------------------------------------------------------

3. अंतिम भुगतान समय-सीमा: आपसे अनुरोध एवं अपेक्षा की जाती है कि इस नोटिस की प्राप्ति के ${data.cureDays} दिनों के भीतर उपरोक्त कुल बकाया राशि ${data.totalPayable} सोसायटी के अधिकृत बैंक खाते (${data.bankAccountDetails}) में NEFT/RTGS/UPI अथवा क्रॉस्ड चेक द्वारा जमा कर रसीद प्राप्त करें।

4. वैधानिक वसूली चेतावनी (${data.stateActSection}): यदि निर्धारित ${data.cureDays} दिनों की अवधि में पूर्ण भुगतान नहीं किया जाता है, तो सोसायटी बिना किसी अतिरिक्त सूचना के सक्षम उप-निबंधक (Deputy Registrar of Co-operative Societies) / सक्षम न्यायालय के समक्ष ${data.stateActSection} के अंतर्गत वसूली प्रमाण-पत्र (Recovery Certificate) एवं आपके फ्लैट पर वैधानिक प्रभार (Statutory First Charge) दर्ज करने तथा कुर्की की कार्यवाही प्रारंभ करने के लिए बाध्य होगी, जिसके समस्त विधिक व्यय की जिम्मेदारी आपकी होगी।

भवदीय,
कृते ${data.societyName}

हस्ताक्षर: ___________________________          हस्ताक्षर: ___________________________
${data.secretaryName}                          ${data.chairmanName}
(सोसायटी की मुहर / Seal)

संलग्नक: दिनांक ${data.defaultPeriodFrom} से ${data.defaultPeriodTo} तक का प्रमाणित खाता विवरण (Certified Ledger Statement)।`;
    }

    if (variant === "final_sec101") {
      return `[ON THE OFFICIAL LETTERHEAD OF THE REGISTERED HOUSING SOCIETY / AOA]
${data.societyName.toUpperCase()}
Registration No.: ${data.registrationNo}
Registered Office: ${data.societyAddress}

Ref. No.: ${data.noticeRefNo}                                   Date: ${data.noticeDate}

BY REGISTERED POST A.D. / SPEED POST / EMAIL & HAND DELIVERY

To,
${data.memberName}
Registered Owner / Member: ${data.flatNo}, ${data.wingOrTower}
Holding ${data.shareCertNo}
${data.societyName}, ${data.societyAddress}

SUBJECT: FINAL STATUTORY SHOW-CAUSE & DEMAND NOTICE PRIOR TO RECOVERY CERTIFICATE PROCEEDINGS UNDER ${data.stateActSection.toUpperCase()} FOR MAINTENANCE ARREARS OF ${data.totalPayable}.

Dear Sir / Madam,

Pursuant to Managing Committee Resolution No. ${data.resolutionNo} dated ${data.resolutionDate}, the undersigned office bearers of ${data.societyName} hereby serve upon you this Final Statutory Demand Notice before initiating coercive recovery proceedings:

1. CONTINUING DEFAULT DESPITE MONTHLY BILLS & REMINDERS:
   You are the registered member and owner of ${data.flatNo} (${data.wingOrTower}) holding ${data.shareCertNo}. Despite regular service of monthly maintenance bills and earlier written reminders, you have persistently defaulted in paying your share of municipal taxes, common utility charges, security, lift maintenance, and statutory funds from ${data.defaultPeriodFrom} to ${data.defaultPeriodTo}.

2. ITEMIZED STATEMENT OF ARREARS & STATUTORY INTEREST:
   In accordance with the Society's Approved Bye-Laws and General Body resolutions, your account stands in arrears as detailed below (Certified Ledger Extract annexed hereto as Annexure-A):
   (a) Principal Maintenance & Service Charges (${data.defaultPeriodFrom} to ${data.defaultPeriodTo}): ${data.principalArrears}
   (b) Statutory Sinking Fund & Major Repair Fund Contribution: ${data.sinkingAndRepairFund}
   (c) Simple Interest on Overdue Bills @ ${data.interestRatePercent}: ${data.interestAmount}
   ========================================================================
   TOTAL RECOVERABLE ARREARS AS ON ${data.noticeDate}: ${data.totalPayable}
   (${data.totalPayableWords})
   ========================================================================

3. STATUTORY FIRST CHARGE & RESTRICTION ON TRANSFER / NOC:
   Take notice that under the governing Cooperative Societies / Apartment Ownership Act, the Society holds a statutory first charge and lien upon your interest in ${data.flatNo} and ${data.shareCertNo} for all unpaid dues. Your name is being recorded in the Defaulting Members Register, disqualifying you from contesting or voting in Managing Committee elections as per the Bye-Laws.

4. FINAL ${data.cureDays}-DAY STATUTORY CURE PERIOD:
   You are hereby called upon to clear the entire sum of ${data.totalPayable} within ${data.cureDays} (Fifteen) days from the receipt of this notice via NEFT/RTGS/IMPS to the Society Bank Account (${data.bankAccountDetails}), or submit written proof if any payment listed in Annexure-A has already been remitted.

5. NOTICE OF FILING UNDER ${data.stateActSection.toUpperCase()}:
   Should you fail to liquidate the arrears within ${data.cureDays} days, the Managing Committee shall immediately file a formal application before the Deputy / Assistant Registrar of Co-operative Societies under ${data.stateActSection} for issuance of a Summary Recovery Certificate and execution by attachment of movable/immovable property or rent garnishment, entirely at your cost, risk, and consequence.

For and on behalf of ${data.societyName},

_______________________________                _______________________________
${data.secretaryName}                          ${data.chairmanName}
[Affix Official Society Rubber Stamp]

Encl: Certified Bill-by-Bill Ledger Statement from ${data.defaultPeriodFrom} to ${data.defaultPeriodTo}.`;
    }

    // Default: First Formal Demand Notice (Standard Society Maintenance Recovery Letter)
    return `[ON THE OFFICIAL LETTERHEAD OF THE HOUSING SOCIETY / RWA / AOA]
${data.societyName.toUpperCase()}
Registration No.: ${data.registrationNo}
Office Address: ${data.societyAddress}

Ref. No.: ${data.noticeRefNo}                                   Date: ${data.noticeDate}

Mode of Service: Registered Post AD / Official Email / Hand Delivery with Acknowledgement

To,
${data.memberName}
Owner / Member of ${data.flatNo}, ${data.wingOrTower}
(${data.shareCertNo})
${data.societyName}, ${data.societyAddress}

SUBJECT: FORMAL DEMAND NOTICE FOR PAYMENT OF OVERDUE SOCIETY MAINTENANCE ARREARS AMOUNTING TO ${data.totalPayable} (${data.defaultPeriodFrom} TO ${data.defaultPeriodTo}).

Dear Member,

We write to you on behalf of the Managing Committee of ${data.societyName}, pursuant to Resolution No. ${data.resolutionNo} passed in the Managing Committee meeting held on ${data.resolutionDate}.

1. MEMBERSHIP & OBLIGATION TO CONTRIBUTE TO COMMON OUTGOINGS:
   As the registered owner and member of ${data.flatNo} (${data.wingOrTower}), you are statutorily and contractually bound under the registered Bye-Laws of the Society to pay monthly maintenance and service charges on or before the due date specified in each bill. Timely collection of maintenance charges is vital to meet non-negotiable common expenses including municipal water charges, common area electricity, lift AMC, 24x7 security, housekeeping, and statutory insurance.

2. BREAKDOWN OF OVERDUE MAINTENANCE ARREARS:
   A scrutiny of the Society's accounts reveals that maintenance bills raised against ${data.flatNo} for the period from ${data.defaultPeriodFrom} to ${data.defaultPeriodTo} remain unpaid. The itemized statement of your outstanding dues is set out below:
   • Principal Monthly Maintenance & Common Utility Charges : ${data.principalArrears}
   • Sinking Fund & Major Structural Repair Fund Dues       : ${data.sinkingAndRepairFund}
   • Simple Interest on Delayed Payments (${data.interestRatePercent}) : ${data.interestAmount}
   ------------------------------------------------------------------------
   TOTAL AMOUNT PAYABLE AS ON ${data.noticeDate}            : ${data.totalPayable}
   (In Words: ${data.totalPayableWords})
   ------------------------------------------------------------------------

3. OPPORTUNITY FOR RECONCILIATION & ${data.cureDays}-DAY PAYMENT WINDOW:
   We request you to remit the total outstanding sum of ${data.totalPayable} within ${data.cureDays} days of receiving this notice into the Society's designated bank account:
   ${data.bankAccountDetails}
   Please share the UTR / transaction reference number with the Society Office so that an official receipt can be issued. If you believe any payment made by you has not been credited in the attached ledger statement, please produce the payment proof at the Society Office within 7 days for immediate reconciliation.

4. CONSEQUENCE OF NON-COMPLIANCE:
   Please note that if the arrears of ${data.totalPayable} are not cleared within ${data.cureDays} days, the Managing Committee will be constrained to escalate the matter by issuing a final statutory notice through the Society's Legal Counsel and initiating recovery proceedings under ${data.stateActSection}, at your sole cost as to legal fees and recovery surcharge.

Yours faithfully,
For ${data.societyName}

_______________________________                _______________________________
${data.secretaryName}                          ${data.chairmanName}
(Authorized Signatories with Society Seal)

Encl: Itemized Bill-Wise Arrears Ledger (${data.defaultPeriodFrom} – ${data.defaultPeriodTo}).`;
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getGeneratedText());
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(false);
    }
  };

  const handleDownloadDoc = () => {
    const text = getGeneratedText();
    const htmlContent = `<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head><meta charset='utf-8'><title>Society Maintenance Recovery Notice</title></head>
      <body style="font-family: 'Times New Roman', serif; font-size: 12pt; line-height: 1.5; white-space: pre-wrap;">${text.replace(/\n/g, "<br/>")}</body>
    </html>`;
    const blob = new Blob([htmlContent], { type: "application/msword" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Society-Maintenance-Notice-${variant}-${data.flatNo.replace(/\s+/g, "_")}.doc`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    const printWindow = window.open("", "_blank", "width=850,height=900");
    if (!printWindow) return;
    printWindow.document.write(`
      <html>
        <head>
          <title>Society Maintenance Arrears Notice - ${data.flatNo}</title>
          <style>
            body { font-family: 'Times New Roman', serif; padding: 40px; font-size: 12pt; line-height: 1.55; color: #111; white-space: pre-wrap; }
          </style>
        </head>
        <body>${getGeneratedText()}</body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden">
      {/* Workspace Header with Format Selector */}
      <div className="bg-slate-900 text-white p-5 sm:p-6 border-b border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-red-400 bg-red-950/70 border border-red-800/80 mb-2">
              <span>State Co-op Act &amp; Model Bye-Laws Compliant</span>
              <span>•</span>
              <span>Word (.doc) / Print Export</span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-white">
              Housing Society Maintenance Arrears Notice Generator
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Switch between a polite 1st Committee Demand, a Final Section 101 Pre-Recovery Show-Cause Notice, or the Hindi format. Edit any field to update the draft live.
            </p>
          </div>

          {/* Type Toggle Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-800/80 rounded-xl border border-slate-700/80 shrink-0">
            <button
              type="button"
              onClick={() => setVariant("first_demand")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                variant === "first_demand"
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "text-slate-300 hover:text-white hover:bg-slate-700"
              }`}
            >
              1st Demand Letter
            </button>
            <button
              type="button"
              onClick={() => setVariant("final_sec101")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                variant === "final_sec101"
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "text-slate-300 hover:text-white hover:bg-slate-700"
              }`}
            >
              Final Sec 101 / Registrar Notice
            </button>
            <button
              type="button"
              onClick={() => setVariant("hindi")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                variant === "hindi"
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "text-slate-300 hover:text-white hover:bg-slate-700"
              }`}
            >
              हिंदी नोटिस (Hindi Format)
            </button>
          </div>
        </div>
      </div>

      {/* Main Workspace: 2 Columns on LG screens */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
        {/* Left Column: Form Controls (5 Cols) */}
        <div className="lg:col-span-5 p-5 sm:p-6 bg-slate-50/70 space-y-4 max-h-[850px] overflow-y-auto">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-slate-700">
              Society &amp; Arrears Parameters
            </h4>
            <span className="text-[11px] text-slate-500">Live bracket replacement</span>
          </div>

          <div className="space-y-2.5">
            <div>
              <label htmlFor={`${componentId}-societyName`} className="block text-[11px] font-bold text-slate-700 mb-1">
                Registered Society / RWA / AOA Name
              </label>
              <input
                id={`${componentId}-societyName`}
                type="text"
                name="societyName"
                value={data.societyName}
                onChange={handleChange}
                className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div>
                <label htmlFor={`${componentId}-regNo`} className="block text-[11px] font-bold text-slate-700 mb-1">
                  Registration No.
                </label>
                <input
                  id={`${componentId}-regNo`}
                  type="text"
                  name="registrationNo"
                  value={data.registrationNo}
                  onChange={handleChange}
                  className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label htmlFor={`${componentId}-noticeDate`} className="block text-[11px] font-bold text-slate-700 mb-1">
                  Notice Date
                </label>
                <input
                  id={`${componentId}-noticeDate`}
                  type="text"
                  name="noticeDate"
                  value={data.noticeDate}
                  onChange={handleChange}
                  className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div>
                <label htmlFor={`${componentId}-memberName`} className="block text-[11px] font-bold text-slate-700 mb-1">
                  Defaulting Member Name
                </label>
                <input
                  id={`${componentId}-memberName`}
                  type="text"
                  name="memberName"
                  value={data.memberName}
                  onChange={handleChange}
                  className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label htmlFor={`${componentId}-flatNo`} className="block text-[11px] font-bold text-slate-700 mb-1">
                  Flat / Unit Number
                </label>
                <input
                  id={`${componentId}-flatNo`}
                  type="text"
                  name="flatNo"
                  value={data.flatNo}
                  onChange={handleChange}
                  className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div>
                <label htmlFor={`${componentId}-periodFrom`} className="block text-[11px] font-bold text-slate-700 mb-1">
                  Arrears From Date
                </label>
                <input
                  id={`${componentId}-periodFrom`}
                  type="text"
                  name="defaultPeriodFrom"
                  value={data.defaultPeriodFrom}
                  onChange={handleChange}
                  className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label htmlFor={`${componentId}-periodTo`} className="block text-[11px] font-bold text-slate-700 mb-1">
                  Arrears To Date
                </label>
                <input
                  id={`${componentId}-periodTo`}
                  type="text"
                  name="defaultPeriodTo"
                  value={data.defaultPeriodTo}
                  onChange={handleChange}
                  className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div>
                <label htmlFor={`${componentId}-principal`} className="block text-[11px] font-bold text-slate-700 mb-1">
                  Principal Dues
                </label>
                <input
                  id={`${componentId}-principal`}
                  type="text"
                  name="principalArrears"
                  value={data.principalArrears}
                  onChange={handleChange}
                  className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label htmlFor={`${componentId}-sinking`} className="block text-[11px] font-bold text-slate-700 mb-1">
                  Repair/Sinking
                </label>
                <input
                  id={`${componentId}-sinking`}
                  type="text"
                  name="sinkingAndRepairFund"
                  value={data.sinkingAndRepairFund}
                  onChange={handleChange}
                  className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label htmlFor={`${componentId}-interestAmt`} className="block text-[11px] font-bold text-slate-700 mb-1">
                  Interest Amt
                </label>
                <input
                  id={`${componentId}-interestAmt`}
                  type="text"
                  name="interestAmount"
                  value={data.interestAmount}
                  onChange={handleChange}
                  className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div>
                <label htmlFor={`${componentId}-totalPayable`} className="block text-[11px] font-bold text-slate-700 mb-1">
                  Total Payable (₹)
                </label>
                <input
                  id={`${componentId}-totalPayable`}
                  type="text"
                  name="totalPayable"
                  value={data.totalPayable}
                  onChange={handleChange}
                  className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white text-slate-900 font-bold focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label htmlFor={`${componentId}-interestRate`} className="block text-[11px] font-bold text-slate-700 mb-1">
                  Bye-Law Interest Rate
                </label>
                <input
                  id={`${componentId}-interestRate`}
                  type="text"
                  name="interestRatePercent"
                  value={data.interestRatePercent}
                  onChange={handleChange}
                  className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor={`${componentId}-stateAct`} className="block text-[11px] font-bold text-slate-700 mb-1">
                Applicable State Recovery Provision
              </label>
              <select
                id={`${componentId}-stateAct`}
                name="stateActSection"
                value={data.stateActSection}
                onChange={handleChange}
                className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="Section 101 of the Maharashtra Co-operative Societies Act, 1960">
                  Maharashtra — Sec 101 MCS Act, 1960 (Recovery Certificate)
                </option>
                <option value="Section 70 & Section 101 of the Karnataka Co-operative Societies Act, 1959">
                  Karnataka — Sec 70 KCS Act, 1959 / KAOA 1972 Charge
                </option>
                <option value="Section 70 & Section 83 of the Delhi Co-operative Societies Act, 2003">
                  Delhi NCR — Sec 70/83 DCS Act, 2003 (Registrar Arbitration)
                </option>
                <option value="Section 22 of the Uttar Pradesh Apartment (Promotion of Construction, Ownership and Maintenance) Act, 2010">
                  Uttar Pradesh (Noida/Ghaziabad) — Sec 22 UP Apartment Act, 2010
                </option>
                <option value="Section 19 of the Haryana Registration and Regulation of Societies Act, 2012 & Haryana Apartment Ownership Act, 1983">
                  Haryana (Gurugram/Faridabad) — Haryana Apartment Ownership Act, 1983
                </option>
                <option value="Section 90 of the Tamil Nadu Co-operative Societies Act, 1983 / TN Apartment Ownership Act, 2022">
                  Tamil Nadu — TN Apartment Ownership Act, 2022 / Sec 90 TNCS Act
                </option>
                <option value="Order XXXVII / Order VII of the Code of Civil Procedure, 1908">
                  All India RWA / Trust — Civil Recovery Suit under CPC, 1908
                </option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div>
                <label htmlFor={`${componentId}-resNo`} className="block text-[11px] font-bold text-slate-700 mb-1">
                  MC Resolution No. &amp; Date
                </label>
                <input
                  id={`${componentId}-resNo`}
                  type="text"
                  name="resolutionNo"
                  value={data.resolutionNo}
                  onChange={handleChange}
                  className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label htmlFor={`${componentId}-cureDays`} className="block text-[11px] font-bold text-slate-700 mb-1">
                  Cure Period (Days)
                </label>
                <input
                  id={`${componentId}-cureDays`}
                  type="text"
                  name="cureDays"
                  value={data.cureDays}
                  onChange={handleChange}
                  className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Live Formatted Document Preview (7 Cols) */}
        <div className="lg:col-span-7 p-5 sm:p-6 flex flex-col justify-between bg-white">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-4 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                  Ready-to-Dispatch Society Notice Preview
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <span className="text-emerald-600">✓</span>
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                        />
                      </svg>
                      <span>Copy Notice</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={handleDownloadDoc}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#DC2626] hover:bg-[#B91C1C] text-white transition-colors cursor-pointer shadow-sm"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  <span>Download (.doc)</span>
                </button>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-900 text-white transition-colors cursor-pointer"
                >
                  <span>Print / PDF</span>
                </button>
              </div>
            </div>

            {/* Document Render Area */}
            <div className="bg-amber-50/40 p-5 sm:p-6 rounded-xl border border-amber-200/80 font-mono text-xs text-slate-800 leading-relaxed whitespace-pre-wrap max-h-[560px] overflow-y-auto shadow-inner">
              {getGeneratedText()}
            </div>
          </div>

          {/* Mandatory Legal Validity & Dispatch Mode Note */}
          <div className="mt-4 p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 flex items-start gap-2.5">
            <span className="text-amber-600 font-bold shrink-0 text-base">⚖️</span>
            <p>
              <strong className="text-slate-800">Legal Validity &amp; Service Note:</strong> Print this self-help committee demand on the Society&apos;s official letterhead, affix the Society rubber stamp with the Hon. Secretary/Chairman&apos;s signatures, and serve it via <strong>Registered Post AD (RPAD)</strong>, official email/WhatsApp (preserved under Section 63 BSA, 2023), and signed hand-delivery acknowledgement. Never insert an advocate&apos;s name or Bar Council enrolment number on a self-sent committee letter; if the member defaults past the 15-day cure window, engage a licensed advocate to dispatch a formal pre-litigation notice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
