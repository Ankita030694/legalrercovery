"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";

type PracticeType = "ca_audit_tax" | "architect_gfc_ip" | "deal_advisor_tail";

interface PracticePreset {
  id: PracticeType;
  label: string;
  badge: string;
  firmName: string;
  professionalRegNo: string;
  senderAddress: string;
  clientName: string;
  clientPanCin: string;
  clientAddress: string;
  engagementDate: string;
  workDescription: string;
  udinOrProjectRef: string;
  principalDue: number;
  tdsDeductedUnpaid: number;
  interestRatePercent: number;
  interestMonths: number;
  cureDays: "7" | "10" | "15";
  statutorySpecificClause: string;
}

const PRESETS: Record<PracticeType, PracticePreset> = {
  ca_audit_tax: {
    id: "ca_audit_tax",
    label: "Chartered Accountant (Statutory / Tax Audit & Retainer)",
    badge: "ICAI & Form 26AS Compliant",
    firmName: "M/s R.K. Singhal & Associates, Chartered Accountants",
    professionalRegNo: "ICAI Firm Reg. No. 018442N / Member No. 512409",
    senderAddress: "Suite 402, Barakhamba Road, Connaught Place, New Delhi - 110001",
    clientName: "Zenith Agro-Tech Private Limited",
    clientPanCin: "CIN: U01403DL2018PTC339182 / PAN: AABCZ9182K",
    clientAddress: "Plot 88, Okhla Industrial Area Phase-III, New Delhi - 110020",
    engagementDate: "12 May 2023",
    workDescription: "Statutory Audit u/s 139 of Companies Act 2013 and Tax Audit u/s 44AB for FY 2023-24 & FY 2024-25",
    udinOrProjectRef: "UDIN: 24512409BKAOPR8812 & 24512409BKZTYU9941",
    principalDue: 650000,
    tdsDeductedUnpaid: 65000,
    interestRatePercent: 18,
    interestMonths: 9,
    cureDays: "15",
    statutorySpecificClause:
      "Take notice that the statutory audit reports for FY 2023-24 and FY 2024-25 were duly generated with verified UDINs and filed by your management with the Ministry of Corporate Affairs in Form AOC-4. Your audited Balance Sheet explicitly recognizes 'Audit Fees Payable' under Other Current Liabilities, and your Income Tax Form 26AS / AIS records TDS deduction of 10% u/s 194J. Per Section 18 of the Limitation Act, 1963, and the Supreme Court holding in Asset Reconstruction Company (India) Ltd. v. Bishal Homes, this constitutes an incontrovertible written acknowledgment of debt. In terms of Clause (8) of Part I of the First Schedule to the Chartered Accountants Act, 1949, and Chapter VII of the Council Guidelines, no incoming auditor may lawfully accept your statutory audit appointment without prior written communication and clearance of undisputed professional audit fees.",
  },
  architect_gfc_ip: {
    id: "architect_gfc_ip",
    label: "Architect & Structural Consultant (GFC Drawings & Copyright)",
    badge: "COA & Copyright Act s.51",
    firmName: "Studio Atelier & Associates, Architects & Structural Engineers",
    professionalRegNo: "Council of Architecture Reg. CA/2012/58941",
    senderAddress: "Level 3, Commercial Plaza, Indiranagar, Bengaluru - 560038",
    clientName: "Greencrest Infrastructure Developers LLP",
    clientPanCin: "LLPIN: AAY-4412 / PAN: AADFG1102P",
    clientAddress: "Tower B, Outer Ring Road, Bellandur, Bengaluru - 560103",
    engagementDate: "18 September 2023",
    workDescription: "Comprehensive Architectural Design, Municipal Sanction Blueprints & Good-For-Construction (GFC) Structural Drawings for Commercial Tower (Phase 1 & 2)",
    udinOrProjectRef: "Project Ref: GCR/BLR/COMM-2023/GFC-01 to GFC-44",
    principalDue: 1450000,
    tdsDeductedUnpaid: 145000,
    interestRatePercent: 18,
    interestMonths: 7,
    cureDays: "10",
    statutorySpecificClause:
      "Take notice that pursuant to the Council of Architecture (Conditions of Engagement and Scale of Charges) Regulations and Section 14 read with Section 51 of the Copyright Act, 1957, the copyright, intellectual property, and proprietary rights in all architectural master plans, facade details, 3D BIM models, and Good-For-Construction (GFC) structural drawings remain the exclusive property of my Client until full discharge of professional stage-fees. In consequence of your willful default, the limited license granted to your firm, your contractors, and any incoming consultant to use, execute, modify, or construct upon said drawings is hereby REVOKED WITH IMMEDIATE EFFECT. Any ongoing construction or handover of these blueprints constitutes wilful copyright infringement punishable under Sections 63 and 64 of the Copyright Act, 1957, exposing your partners to criminal seizure and civil injunctions.",
  },
  deal_advisor_tail: {
    id: "deal_advisor_tail",
    label: "Deal Advisor / Syndicator (Debt Mandate Tail Circumvention)",
    badge: "Contract Act s.70 & s.73",
    firmName: "Apex Capital Advisors Private Limited",
    professionalRegNo: "CIN: U67190MH2016PTC288410 / Merchant Banker Panel ID",
    senderAddress: "14th Floor, Maker Chambers V, Nariman Point, Mumbai - 400021",
    clientName: "Vanguard Logistics & Warehousing Limited",
    clientPanCin: "CIN: U63090MH2017PLC298112 / PAN: AABCV7712M",
    clientAddress: "Express Towers, Bandra Kurla Complex (BKC), Mumbai - 400051",
    engagementDate: "05 November 2023",
    workDescription: "Exclusive Debt Syndication Mandate for ₹120 Crore Term Loan & Working Capital Consortium Refinancing",
    udinOrProjectRef: "Mandate Agreement No: ACA/2023/MAND-091 / Term Sheet Introduced: HDFC/PFC/IREDA",
    principalDue: 2400000,
    tdsDeductedUnpaid: 0,
    interestRatePercent: 18,
    interestMonths: 6,
    cureDays: "15",
    statutorySpecificClause:
      "Take notice that under Clause 4.2 of the exclusive Engagement Mandate dated 05 November 2023, my Client introduced your management to the consortium lenders who subsequently sanctioned your ₹120 Crore credit facilities. Clause 7.1 establishes a strict 18-month Tail Period post-mandate expiry, covenanting that if your company achieves financial close or drawdown through any financial institution introduced by my Client, the agreed Success Fee of 2.0% plus applicable GST is unconditionally payable. Your circumvention of my Client and failure to remit the crystallized success fee constitutes malicious repudiatory breach under Section 73 of the Indian Contract Act, 1872, as well as an actionable claim under Section 70 for quantum meruit compensation.",
  },
};

export default function ProfessionalFeeNoticeWorkspace() {
  const [selectedPractice, setSelectedPractice] = useState<PracticeType>("ca_audit_tax");
  const [formData, setFormData] = useState<PracticePreset>(PRESETS.ca_audit_tax);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [lawyerMode, setLawyerMode] = useState<boolean>(true);

  const handleSelectPractice = (type: PracticeType) => {
    setSelectedPractice(type);
    setFormData(PRESETS[type]);
    setIsCopied(false);
  };

  const handleFieldChange = (field: keyof PracticePreset, value: string | number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    setIsCopied(false);
  };

  // Calculations
  const calculatedInterest = useMemo(() => {
    const p = Number(formData.principalDue) || 0;
    const r = Number(formData.interestRatePercent) || 0;
    const m = Number(formData.interestMonths) || 0;
    return Math.round((p * (r / 100) * m) / 12);
  }, [formData.principalDue, formData.interestRatePercent, formData.interestMonths]);

  const totalActionableClaim = useMemo(() => {
    const p = Number(formData.principalDue) || 0;
    return p + calculatedInterest;
  }, [formData.principalDue, calculatedInterest]);

  // Formatted Notice Text
  const noticeText = useMemo(() => {
    const today = new Date().toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

    const advocateHeader = lawyerMode
      ? `LEGAL DEMAND NOTICE
(ISSUED UNDER BAR COUNCIL OF INDIA RULES / ADVOCATES ACT, 1961)
DISPATCHED VIA REGISTERED SPEED POST WITH A.D., SECURE EMAIL & BUSINESS WHATSAPP
PURSUANT TO SECTION 63 OF THE BHARATIYA SAKSHYA ADHINIYAM (BSA), 2023

From:
AMITABH SHARMA, B.Sc., LL.B.
Advocate, High Court of Judicature
Office: Chamber 312, Lawyers' Chambers Block, High Court Complex
Ph: +91 98XXX XXXXX | Email: counsel.notice@legalrecovery.in

To:
1. The Board of Directors / Designated Partners
   ${formData.clientName}
   ${formData.clientPanCin}
   Registered Office: ${formData.clientAddress}

2. The Managing Director / Key Managerial Personnel
   ${formData.clientName}
   ${formData.clientAddress}

Date of Notice: ${today}
Ref: LR/PROF-REC/${formData.id.toUpperCase()}/${new Date().getFullYear()}/089`
      : `FORMAL PRE-LITIGATION DEMAND & ETHICS INTIMATION LETTER
(ISSUED UNDER RELEVANT PROFESSIONAL COUNCIL CODE & CONTRACT ACT)
DISPATCHED VIA REGISTERED SPEED POST WITH A.D. & REGISTERED EMAIL

From:
${formData.firmName}
${formData.professionalRegNo}
Address: ${formData.senderAddress}

To:
The Board of Directors / Management
${formData.clientName}
${formData.clientPanCin}
Address: ${formData.clientAddress}

Date: ${today}
Ref: ${formData.firmName.substring(0, 3).toUpperCase()}/FEE-REC/${new Date().getFullYear()}/04`;

    const bodySubject = `SUBJECT: FINAL STATUTORY DEMAND FOR IMMEDIATE DISCHARGE OF OUTSTANDING PROFESSIONAL FEES OF ₹${formData.principalDue.toLocaleString(
      "en-IN"
    )}/- ALONG WITH CONTRACTUAL / STATUTORY INTEREST OF ₹${calculatedInterest.toLocaleString(
      "en-IN"
    )}/- (TOTALING ₹${totalActionableClaim.toLocaleString(
      "en-IN"
    )}/-) PLUS APPLICABLE TDS / GST ADMISSIONS, COUPLED WITH LEGAL NOTICE OF STATUTORY DISCLOSURE & INCOMING PROFESSIONAL INJUNCTION.`;

    const noticeBody = `${advocateHeader}

${bodySubject}

SIRS / MADAM,

Under instructions from and on behalf of my Client, ${formData.firmName} (${formData.professionalRegNo}), having principal office at ${formData.senderAddress} (hereinafter referred to as "my Client"), I hereby serve upon you this Formal Legal Notice of Demand:

1. APPOINTMENT & PERFORMANCE OF PROFESSIONAL SERVICES:
That my Client was formally engaged by your company pursuant to formal appointment letter / engagement agreement dated ${formData.engagementDate} to render high-level professional services, specifically: "${formData.workDescription}".
Reference Identifier: ${formData.udinOrProjectRef}.
My Client duly executed, finalized, and delivered the said professional deliverables within agreed timelines, which were acknowledged, acted upon, and adopted by your board and executive management without any protest, demur, or dispute as to quality or scope.

2. INVOICE PARTICULARS & FORM 26AS / BALANCE SHEET ADMISSION:
That my Client raised valid professional tax invoices for the agreed milestones amounting to ₹${formData.principalDue.toLocaleString(
      "en-IN"
    )}/- (Rupees ${formData.principalDue} Only). 
${
  formData.tdsDeductedUnpaid > 0
    ? `Crucially, your accounts department has already deducted TDS of ₹${formData.tdsDeductedUnpaid.toLocaleString(
        "en-IN"
      )}/- under Section 194J of the Income-tax Act, 1961, as reflected in my Client's Form 26AS / AIS / TIS portal. In terms of Section 18 of the Limitation Act, 1963, such tax credit attribution combined with your audited Balance Sheet provisions qualifies as an unreserved, legally binding written acknowledgment of debt.`
    : `The debt is supported by your written sign-offs, email transmissions, and operational approvals, forming an undisputed liquidated debt.`
}

3. STATUTORY BREACH & PROFESSIONAL COUNCIL PROTECTIONS:
${formData.statutorySpecificClause}

4. DELAYED PAYMENT INTEREST CHARGES:
Pursuant to the express terms of engagement, the provisions of the Interest Act, 1978, and commercial trade usage, you are liable to pay interest @ ${
      formData.interestRatePercent
    }% p.a. for the delayed period of ${formData.interestMonths} months, amounting to ₹${calculatedInterest.toLocaleString(
      "en-IN"
    )}/-.

5. SCHEDULE OF ACTIONABLE DEMAND:
--------------------------------------------------------------------------------------
a) Principal Professional Fee Outstanding     : ₹${formData.principalDue.toLocaleString("en-IN")}/-
b) Contractual / Statutory Interest Due       : ₹${calculatedInterest.toLocaleString("en-IN")}/-
c) Total Actionable Demand Payable            : ₹${totalActionableClaim.toLocaleString("en-IN")}/-
--------------------------------------------------------------------------------------

6. FINAL REQUISITION (CURE WINDOW: ${formData.cureDays} DAYS):
You are hereby called upon to pay the entire outstanding sum of ₹${totalActionableClaim.toLocaleString(
      "en-IN"
    )}/- directly into my Client's designated bank account within ${
      formData.cureDays
    } (${formData.cureDays === "15" ? "Fifteen" : formData.cureDays === "10" ? "Ten" : "Seven"}) days from the receipt of this notice, failing which my Client has issued peremptory instructions to initiate the following simultaneous legal actions without further reference:
a) Instituting a Commercial Summary Suit under Order XXXVII of the Code of Civil Procedure, 1908, in the competent Commercial Court for immediate decree and pre-judgment attachment of corporate bank accounts under Order XXXVIII Rule 5.
b) Filing Section 8 & 9 Demand Notice and Corporate Insolvency Resolution Application under the Insolvency and Bankruptcy Code, 2016 (IBC) before the Hon'ble NCLT, or triggering MSME Samadhaan arbitration if registered.
c) Lodging formal ethical intimation letters with the Institute of Chartered Accountants of India (ICAI) / Council of Architecture (COA) / Registrar of Companies (ROC) to bar the appointment of incoming auditors, structural engineers, or consultants until full settlement of undisputed fee arrears.
d) Moving for urgent ex-parte intellectual property injunctions under Section 51 read with Section 55 of the Copyright Act, 1957, to halt construction and prevent third-party usage of unauthorized blueprints and models.

You shall also be held liable for all litigation expenses, advocate fees of ₹15,000/- for this notice, and incidental costs incurred at your sole peril.

A copy of this notice is preserved in our digital case docket with electronic hash pursuant to Section 63 of Bharatiya Sakshya Adhiniyam, 2023.

Yours faithfully,

${lawyerMode ? "Amitabh Sharma, Advocate\nCounsel for the Claimant" : formData.firmName}`;
  }, [formData, lawyerMode, calculatedInterest, totalActionableClaim]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(noticeText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  };

  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;
    printWindow.document.write(`
      <html>
        <head>
          <title>Legal Notice - ${formData.clientName}</title>
          <style>
            body { font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.6; margin: 40px; color: #111; }
            h1, h2, h3 { text-align: center; }
            pre { white-space: pre-wrap; font-family: inherit; }
          </style>
        </head>
        <body>
          <pre>${noticeText}</pre>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Workspace Header */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-5 sm:p-6 text-white border-b border-slate-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-950/80 text-red-300 border border-red-800/60 mb-2">
              <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></span>
              P1 Archetype &bull; Interactive Commercial Notice Workspace
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Professional Practice Fee Recovery Notice Generator
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Select your practice archetype below to populate advocate-vetted statutory clauses, Form 26AS 194J debt admissions, and Council ethics intimations.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setLawyerMode(!lawyerMode)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                lawyerMode
                  ? "bg-red-600 border-red-500 text-white shadow-sm"
                  : "bg-slate-800 border-slate-700 text-slate-300 hover:text-white"
              }`}
            >
              {lawyerMode ? "Advocate Notice Format" : "Firm Direct Demand"}
            </button>
          </div>
        </div>

        {/* Practice Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 mt-5">
          {(Object.keys(PRESETS) as PracticeType[]).map((type) => {
            const p = PRESETS[type];
            const isSelected = selectedPractice === type;
            return (
              <button
                key={type}
                type="button"
                onClick={() => handleSelectPractice(type)}
                className={`p-3 rounded-xl text-left border transition-all ${
                  isSelected
                    ? "bg-[#DC2626] border-red-500 text-white shadow-md shadow-red-950/50"
                    : "bg-slate-800/70 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <div className="text-[10px] font-bold uppercase tracking-wider opacity-80 mb-1">
                  {p.badge}
                </div>
                <div className="text-xs sm:text-sm font-bold line-clamp-1">{p.label}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Workspace Body: Left Inputs, Right Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
        {/* Left Input Pane (5 cols) */}
        <div className="lg:col-span-5 p-5 sm:p-6 space-y-4 max-h-[850px] overflow-y-auto no-scrollbar">
          <div className="border-b border-slate-200 pb-3">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
              1. Engagement &amp; Debtor Variables
            </h3>
            <p className="text-[11px] text-slate-500">
              Customize values to auto-recalculate interest and update real-time draft clauses.
            </p>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Your Firm / Practice Name</label>
              <input
                type="text"
                value={formData.firmName}
                onChange={(e) => handleFieldChange("firmName", e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#DC2626] text-slate-900 text-xs"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Professional Reg. / Council No.</label>
              <input
                type="text"
                value={formData.professionalRegNo}
                onChange={(e) => handleFieldChange("professionalRegNo", e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#DC2626] text-slate-900 text-xs"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Defaulting Client / Corporate Name</label>
              <input
                type="text"
                value={formData.clientName}
                onChange={(e) => handleFieldChange("clientName", e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#DC2626] text-slate-900 text-xs"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Client PAN / CIN</label>
                <input
                  type="text"
                  value={formData.clientPanCin}
                  onChange={(e) => handleFieldChange("clientPanCin", e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#DC2626] text-slate-900 text-xs"
                />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Engagement Date</label>
                <input
                  type="text"
                  value={formData.engagementDate}
                  onChange={(e) => handleFieldChange("engagementDate", e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#DC2626] text-slate-900 text-xs"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">UDIN / Project Drawing Ref.</label>
              <input
                type="text"
                value={formData.udinOrProjectRef}
                onChange={(e) => handleFieldChange("udinOrProjectRef", e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#DC2626] text-slate-900 text-xs"
              />
            </div>

            {/* Financial Ledger Section */}
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2.5">
              <span className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-700">
                Fee &amp; Interest Reconciliation
              </span>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-medium text-slate-600 mb-0.5">Principal Due (₹)</label>
                  <input
                    type="number"
                    value={formData.principalDue}
                    onChange={(e) => handleFieldChange("principalDue", Number(e.target.value))}
                    className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 font-bold text-slate-900 text-xs"
                  />
                </div>
                <div>
                  <label className="block font-medium text-slate-600 mb-0.5">194J TDS Claimed (₹)</label>
                  <input
                    type="number"
                    value={formData.tdsDeductedUnpaid}
                    onChange={(e) => handleFieldChange("tdsDeductedUnpaid", Number(e.target.value))}
                    className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 text-slate-900 text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="block font-medium text-slate-600 mb-0.5">Interest (% p.a.)</label>
                  <input
                    type="number"
                    value={formData.interestRatePercent}
                    onChange={(e) => handleFieldChange("interestRatePercent", Number(e.target.value))}
                    className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 text-slate-900 text-xs"
                  />
                </div>
                <div>
                  <label className="block font-medium text-slate-600 mb-0.5">Delay (Months)</label>
                  <input
                    type="number"
                    value={formData.interestMonths}
                    onChange={(e) => handleFieldChange("interestMonths", Number(e.target.value))}
                    className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 text-slate-900 text-xs"
                  />
                </div>
                <div>
                  <label className="block font-medium text-slate-600 mb-0.5">Cure Window</label>
                  <select
                    value={formData.cureDays}
                    onChange={(e) => handleFieldChange("cureDays", e.target.value as "7" | "10" | "15")}
                    className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 text-slate-900 text-xs bg-white"
                  >
                    <option value="7">7 Days</option>
                    <option value="10">10 Days</option>
                    <option value="15">15 Days</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Calculated summary card */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-xs text-emerald-900">
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium text-emerald-800">Calculated Interest ({formData.interestMonths} mo @ {formData.interestRatePercent}%):</span>
                <span className="font-bold">₹{calculatedInterest.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between items-center border-t border-emerald-200/80 pt-1 text-sm font-black text-emerald-950">
                <span>Total Actionable Demand:</span>
                <span>₹{totalActionableClaim.toLocaleString("en-IN")}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Preview Pane (7 cols) */}
        <div className="lg:col-span-7 p-5 sm:p-6 bg-slate-50/50 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                  Live Statutory Notice Preview
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={copyToClipboard}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 transition-colors shadow-sm cursor-pointer"
                >
                  {isCopied ? (
                    <>
                      <span className="text-emerald-600 font-extrabold">&check;</span> Copied!
                    </>
                  ) : (
                    <>
                      <span>&copy;</span> Copy Text
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors shadow-sm cursor-pointer"
                >
                  <span>&darr;</span> Print / PDF
                </button>
              </div>
            </div>

            {/* Scrollable preview paper */}
            <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-inner max-h-[560px] overflow-y-auto text-[11px] sm:text-xs font-mono text-slate-800 whitespace-pre-wrap leading-relaxed select-text">
              {noticeText}
            </div>
          </div>

          {/* Bottom fast-action bar */}
          <div className="mt-4 pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span>Complies with Limitation Act s.18 &amp; Section 63 BSA 2023</span>
            </div>
            <Link
              href="/user/new-recovery"
              className="text-[#DC2626] font-bold hover:underline inline-flex items-center gap-1"
            >
              Dispatch on Advocate Letterhead (₹999) &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
