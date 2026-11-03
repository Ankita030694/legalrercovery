"use client";

import React, { useState, useId } from "react";

type NoteType = "demand" | "term" | "hindi";

interface NoteFormData {
  place: string;
  executionDate: string;
  principalAmountFigures: string;
  principalAmountWords: string;
  lenderName: string;
  lenderFatherName: string;
  lenderAddress: string;
  borrowerName: string;
  borrowerFatherName: string;
  borrowerAddress: string;
  borrowerPan: string;
  interestRate: string;
  disbursementMode: string;
  disbursementRef: string;
  dueDate: string;
  witness1Name: string;
  witness1Address: string;
  witness2Name: string;
  witness2Address: string;
}

export default function PromissoryNoteWorkspace() {
  const componentId = useId();
  const [noteType, setNoteType] = useState<NoteType>("demand");
  const [copied, setCopied] = useState(false);

  const [data, setData] = useState<NoteFormData>({
    place: "New Delhi",
    executionDate: "3rd November 2026",
    principalAmountFigures: "₹5,00,000",
    principalAmountWords: "Rupees Five Lakh Only",
    lenderName: "Rajesh Kumar Sharma",
    lenderFatherName: "Late Shri Ramesh Chand Sharma",
    lenderAddress: "Flat No. 402, Block C, Green View Apartments, Sector 62, Noida, UP 201309",
    borrowerName: "Vikramaditya Singh",
    borrowerFatherName: "Shri Mahendra Pratap Singh",
    borrowerAddress: "House No. 18, Street 4, Greater Kailash-I, New Delhi 110048",
    borrowerPan: "ABCDE1234F",
    interestRate: "12% per annum",
    disbursementMode: "NEFT / Bank Transfer via HDFC Bank",
    disbursementRef: "UTR No. HDFCN26308910452 dated 03-11-2026",
    dueDate: "2nd November 2027",
    witness1Name: "Amitabh Verma",
    witness1Address: "B-12, Mayur Vihar Phase-1, Delhi",
    witness2Name: "Deepak Chopra",
    witness2Address: "C-44, Sector 15, Noida, UP",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const getGeneratedText = () => {
    if (noteType === "hindi") {
      return `प्रतिज्ञा पत्र (PROMISSORY NOTE / वचन पत्र)
(परक्राम्य लिखत अधिनियम, 1881 की धारा 4 के अंतर्गत)

स्थान: ${data.place}
दिनांक: ${data.executionDate}
मूल राशि: ${data.principalAmountFigures} (${data.principalAmountWords})

मैं, ${data.borrowerName}, आत्मज श्री ${data.borrowerFatherName}, निवासी: ${data.borrowerAddress} (पैन: ${data.borrowerPan}), एतद्द्वारा सत्यनिष्ठा से प्रतिज्ञा करता हूँ और वचन देता हूँ कि मैं मांग किए जाने पर (ON DEMAND):

श्री/श्रीमती ${data.lenderName}, आत्मज श्री ${data.lenderFatherName}, निवासी: ${data.lenderAddress}, अथवा उनके आदेशानुसार,

उपरोक्त प्राप्त ऋण राशि ${data.principalAmountFigures} (${data.principalAmountWords}) ब्याज दर ${data.interestRate} सहित, जो कि मैंने आज दिनांक ${data.executionDate} को अपने व्यक्तिगत/पारिवारिक व्यय हेतु ${data.disbursementMode} (संदर्भ: ${data.disbursementRef}) के माध्यम से पूर्णतः सधन्यवाद प्राप्त की है, का बिना किसी शर्त भुगतान करने का पक्का वचन देता हूँ।

यदि मैं उपरोक्त राशि का भुगतान मांग पर करने में विफल रहता हूँ, तो धारक (ऋणदाता) को सक्षम न्यायालय में दीवानी प्रक्रिया संहिता (CPC) के आदेश 37 के तहत संक्षेप वाद (Summary Suit) अथवा विधिक वसूली प्रक्रिया प्रारंभ करने का पूर्ण वैधानिक अधिकार होगा, जिसके समस्त विधिक व्यय का उत्तरदायित्व मेरा होगा।

[यहाँ ₹1 का राजस्व टिकट (Revenue Stamp) चिपकाएं और उसके ऊपर आर-पार हस्ताक्षर करें]

ऋणी / वचनदाता के हस्ताक्षर: __________________________
नाम: ${data.borrowerName}
मोबाइल नं: _____________________
पैन / आधार: ${data.borrowerPan}

गवाह संख्या 1:
हस्ताक्षर: _______________________
नाम: ${data.witness1Name}
पता: ${data.witness1Address}

गवाह संख्या 2:
हस्ताक्षर: _______________________
नाम: ${data.witness2Name}
पता: ${data.witness2Address}`;
    }

    if (noteType === "term") {
      return `PROMISSORY NOTE (TERM LOAN / USANCE NOTE)
(Under Section 4 of the Negotiable Instruments Act, 1881)
[To be executed on requisite Non-Judicial Stamp Paper per State Stamp Act]

Place of Execution: ${data.place}
Date of Execution: ${data.executionDate}
Principal Loan Sum: ${data.principalAmountFigures} (${data.principalAmountWords})
Maturity Due Date: ${data.dueDate}

I, ${data.borrowerName}, son of ${data.borrowerFatherName}, residing at ${data.borrowerAddress} (holding PAN: ${data.borrowerPan}), unconditionally promise and undertake to pay on or before ${data.dueDate} to:

${data.lenderName}, son of ${data.lenderFatherName}, residing at ${data.lenderAddress}, or to his/her order,

the principal sum of ${data.principalAmountFigures} (${data.principalAmountWords}) together with agreed interest at the rate of ${data.interestRate}, for value received in full on ${data.executionDate} by way of ${data.disbursementMode} (${data.disbursementRef}).

Terms & Enforcement:
1. In the event of default on or after ${data.dueDate}, the entire outstanding amount along with penal interest shall become immediately payable.
2. The Holder/Payee shall be entitled to initiate summary proceedings under Order XXXVII of the Code of Civil Procedure, 1908, without prejudice to any other remedies under law.
3. This instrument is binding upon my legal heirs, executors, and administrators.

IN WITNESS WHEREOF, I have subscribed my hand and signature on this ${data.executionDate} at ${data.place}.

MAKER / BORROWER:
Signature: ____________________________________
Name: ${data.borrowerName}
PAN: ${data.borrowerPan}

WITNESS 1:
Signature: __________________________
Name: ${data.witness1Name}
Address: ${data.witness1Address}

WITNESS 2:
Signature: __________________________
Name: ${data.witness2Name}
Address: ${data.witness2Address}`;
    }

    // Default: On Demand Promissory Note
    return `DEMAND PROMISSORY NOTE
(Under Section 4 of the Negotiable Instruments Act, 1881)

Place of Execution: ${data.place}
Date of Execution: ${data.executionDate}
Principal Amount: ${data.principalAmountFigures} (${data.principalAmountWords})

ON DEMAND, I, ${data.borrowerName}, son of ${data.borrowerFatherName}, residing at ${data.borrowerAddress} (PAN: ${data.borrowerPan}), promise to pay to:

${data.lenderName}, son of ${data.lenderFatherName}, residing at ${data.lenderAddress}, or to his/her order,

the sum of ${data.principalAmountFigures} (${data.principalAmountWords}) together with interest thereon at the rate of ${data.interestRate} from the date hereof until realization, for value received in full by me on this day through ${data.disbursementMode} (${data.disbursementRef}).

Terms of Liability:
1. The undertaking to pay is absolute, unconditional, and payable upon demand by the Payee or Holder in due course.
2. In the event of non-payment upon formal demand, the Payee shall be entitled to institute summary proceedings under Order XXXVII of the Code of Civil Procedure, 1908.
3. This promissory note shall be enforceable against me, my estate, assets, executors, and legal heirs.

[AFFIX REQUISITE REVENUE STAMP HERE (MINIMUM ₹1 STAMP) AND SIGN ACROSS THE STAMP]

MAKER / BORROWER:
Signature: ____________________________________
(To sign across the cancelled Revenue Stamp)
Name: ${data.borrowerName}
PAN: ${data.borrowerPan}

WITNESS 1:
Signature: ____________________________________
Name: ${data.witness1Name}
Address: ${data.witness1Address}

WITNESS 2:
Signature: ____________________________________
Name: ${data.witness2Name}
Address: ${data.witness2Address}`;
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getGeneratedText());
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  const handleDownloadDoc = () => {
    const text = getGeneratedText();
    const blob = new Blob([text], { type: "application/msword" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Promissory-Note-${noteType}-${data.borrowerName.replace(/\s+/g, "_")}.doc`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden">
      {/* Workspace Header with Format Selector */}
      <div className="bg-slate-900 text-white p-5 sm:p-6 border-b border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-red-400 bg-red-950/70 border border-red-800/80 mb-2">
              <span>Section 4 NI Act Compliant</span>
              <span>•</span>
              <span>Free Word / Print Export</span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-white">
              Promissory Note Live Generator &amp; Word Formatter
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Select your required format, customize loan terms, and download an enforceable template ready for stamp duty execution.
            </p>
          </div>

          {/* Type Toggle Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-800/80 rounded-xl border border-slate-700/80 shrink-0">
            <button
              type="button"
              onClick={() => setNoteType("demand")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                noteType === "demand"
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "text-slate-300 hover:text-white hover:bg-slate-700"
              }`}
            >
              On Demand (Revenue Stamp)
            </button>
            <button
              type="button"
              onClick={() => setNoteType("term")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                noteType === "term"
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "text-slate-300 hover:text-white hover:bg-slate-700"
              }`}
            >
              Term / Due Date (Stamp Paper)
            </button>
            <button
              type="button"
              onClick={() => setNoteType("hindi")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                noteType === "hindi"
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "text-slate-300 hover:text-white hover:bg-slate-700"
              }`}
            >
              हिंदी प्रतिज्ञा पत्र (Bilingual)
            </button>
          </div>
        </div>
      </div>

      {/* Main Workspace: 2 Columns on XL screens, Stacked on smaller */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
        {/* Left Column: Form Controls (5 Cols) */}
        <div className="lg:col-span-5 p-5 sm:p-6 bg-slate-50/70 space-y-4 max-h-[850px] overflow-y-auto">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-slate-700">
              Loan &amp; Party Parameters
            </h4>
            <span className="text-[11px] text-slate-500">Live preview updates instant</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor={`${componentId}-place`} className="block text-[11px] font-bold text-slate-700 mb-1">
                Execution City / Place
              </label>
              <input
                id={`${componentId}-place`}
                type="text"
                name="place"
                value={data.place}
                onChange={handleChange}
                className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label htmlFor={`${componentId}-date`} className="block text-[11px] font-bold text-slate-700 mb-1">
                Execution Date
              </label>
              <input
                id={`${componentId}-date`}
                type="text"
                name="executionDate"
                value={data.executionDate}
                onChange={handleChange}
                className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor={`${componentId}-figures`} className="block text-[11px] font-bold text-slate-700 mb-1">
                Loan Amount (₹ Figures)
              </label>
              <input
                id={`${componentId}-figures`}
                type="text"
                name="principalAmountFigures"
                value={data.principalAmountFigures}
                onChange={handleChange}
                className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label htmlFor={`${componentId}-interest`} className="block text-[11px] font-bold text-slate-700 mb-1">
                Agreed Interest Rate
              </label>
              <input
                id={`${componentId}-interest`}
                type="text"
                name="interestRate"
                value={data.interestRate}
                onChange={handleChange}
                className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor={`${componentId}-words`} className="block text-[11px] font-bold text-slate-700 mb-1">
              Loan Amount in Words
            </label>
            <input
              id={`${componentId}-words`}
              type="text"
              name="principalAmountWords"
              value={data.principalAmountWords}
              onChange={handleChange}
              className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {noteType === "term" && (
            <div>
              <label htmlFor={`${componentId}-due`} className="block text-[11px] font-bold text-slate-700 mb-1">
                Repayment Maturity Date
              </label>
              <input
                id={`${componentId}-due`}
                type="text"
                name="dueDate"
                value={data.dueDate}
                onChange={handleChange}
                className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          )}

          <div className="pt-2 border-t border-slate-200">
            <span className="text-[11px] uppercase tracking-wider font-extrabold text-slate-600 block mb-2">
              Borrower (Maker) Details
            </span>
            <div className="space-y-2">
              <input
                type="text"
                name="borrowerName"
                placeholder="Borrower Full Name"
                value={data.borrowerName}
                onChange={handleChange}
                className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="text"
                name="borrowerFatherName"
                placeholder="Borrower Father's Name"
                value={data.borrowerFatherName}
                onChange={handleChange}
                className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="text"
                name="borrowerAddress"
                placeholder="Borrower Full Residential Address"
                value={data.borrowerAddress}
                onChange={handleChange}
                className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="text"
                name="borrowerPan"
                placeholder="Borrower PAN or Aadhaar No."
                value={data.borrowerPan}
                onChange={handleChange}
                className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>

          <div className="pt-2 border-t border-slate-200">
            <span className="text-[11px] uppercase tracking-wider font-extrabold text-slate-600 block mb-2">
              Lender (Payee) Details
            </span>
            <div className="space-y-2">
              <input
                type="text"
                name="lenderName"
                placeholder="Lender Full Name"
                value={data.lenderName}
                onChange={handleChange}
                className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="text"
                name="lenderAddress"
                placeholder="Lender Full Address"
                value={data.lenderAddress}
                onChange={handleChange}
                className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>

          <div className="pt-2 border-t border-slate-200">
            <span className="text-[11px] uppercase tracking-wider font-extrabold text-slate-600 block mb-2">
              Disbursement &amp; Evidence Audit
            </span>
            <div className="space-y-2">
              <input
                type="text"
                name="disbursementMode"
                placeholder="Disbursement Mode (e.g. NEFT, UPI, Cheque)"
                value={data.disbursementMode}
                onChange={handleChange}
                className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="text"
                name="disbursementRef"
                placeholder="Transaction UTR / Bank Reference No."
                value={data.disbursementRef}
                onChange={handleChange}
                className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
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
                  Enforceable Draft Preview
                </span>
              </div>
              <div className="flex items-center gap-2">
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                      </svg>
                      <span>Copy Text</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={handleDownloadDoc}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-red-600 hover:bg-red-700 text-white transition-colors cursor-pointer shadow-sm"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>Download Word (.doc)</span>
                </button>
              </div>
            </div>

            {/* Document Render Area */}
            <div className="bg-amber-50/40 p-5 sm:p-6 rounded-xl border border-amber-200/80 font-mono text-xs text-slate-800 leading-relaxed whitespace-pre-wrap max-h-[600px] overflow-y-auto shadow-inner">
              {getGeneratedText()}
            </div>
          </div>

          {/* Stamping Instruction Footer */}
          <div className="mt-4 p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 flex items-start gap-2.5">
            <span className="text-amber-500 font-bold shrink-0 text-base">⚠️</span>
            <p>
              <strong className="text-slate-800">Critical Execution Rule:</strong> For an on-demand promissory note, affix a minimum ₹1 revenue stamp and have the borrower sign across the stamp face such that part of the signature is on the stamp and part on the paper. Under Section 35 of the Indian Stamp Act, 1899, an unstamped pronote can <em>never</em> be admitted in evidence, even by paying penalty!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
