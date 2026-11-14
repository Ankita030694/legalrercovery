"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";

type DispatchMode = "advocate" | "authorized_officer";
type EscalationTrack = "drt_ibc" | "summary_suit" | "arbitration_lok_adalat";

interface NoticeDraftState {
  dispatchMode: DispatchMode;
  bankName: string;
  branchOffice: string;
  senderName: string;
  enrolmentOrEmpId: string;
  refNo: string;
  noticeDate: string;
  borrowerName: string;
  borrowerAddress: string;
  loanAccountNo: string;
  facilityType: string;
  sanctionDate: string;
  sanctionedLimit: number;
  personalGuarantorName: string;
  personalGuarantorAddress: string;
  personalGuaranteeDate: string;
  includeCorpGuarantor: boolean;
  corpGuarantorName: string;
  corpGuarantorCin: string;
  corpGuarantorAddress: string;
  corpGuaranteeDate: string;
  defaultDate: string;
  npaDate: string;
  ledgerAsOnDate: string;
  principalDue: number;
  normalInterestDue: number;
  penalChargesDue: number;
  includeGstOnPenal: boolean;
  contractualInterestRate: string;
  cureDays: "7" | "10" | "15";
  escalationTrack: EscalationTrack;
}

const PRESETS: { id: string; label: string; badge: string; patch: Partial<NoticeDraftState> }[] = [
  {
    id: "sme-cc-drt",
    label: "SME Cash Credit + Corporate Guarantee (>= ₹20L e-DRT)",
    badge: "Default Preset",
    patch: {
      dispatchMode: "advocate",
      facilityType: "Working Capital Cash Credit (CC) & Term Loan",
      loanAccountNo: "4098210004512 / TL-88412",
      sanctionedLimit: 4500000,
      includeCorpGuarantor: true,
      principalDue: 3650000,
      normalInterestDue: 464300,
      penalChargesDue: 115000,
      includeGstOnPenal: true,
      contractualInterestRate: "10.65% p.a. (EBLR + 1.50%)",
      cureDays: "15",
      escalationTrack: "drt_ibc",
    },
  },
  {
    id: "tl-personal-guarantor",
    label: "Commercial Term Loan + Co-Extensive Personal Guarantors",
    badge: "Section 128 Recall",
    patch: {
      dispatchMode: "advocate",
      facilityType: "Secured Commercial Machinery Term Loan",
      loanAccountNo: "TL-90124400871",
      sanctionedLimit: 8500000,
      includeCorpGuarantor: false,
      principalDue: 6820000,
      normalInterestDue: 745000,
      penalChargesDue: 160000,
      includeGstOnPenal: true,
      contractualInterestRate: "11.10% p.a. floating",
      cureDays: "15",
      escalationTrack: "drt_ibc",
    },
  },
  {
    id: "sub20l-msme-retail",
    label: "Sub-₹20L MSME / Unsecured Business Loan (O.37 / Lok Adalat)",
    badge: "Sub-DRT Threshold",
    patch: {
      dispatchMode: "authorized_officer",
      facilityType: "CGTMSE-Backed MSME Business Term Loan",
      loanAccountNo: "MSME-3109448120",
      sanctionedLimit: 1500000,
      includeCorpGuarantor: false,
      principalDue: 1185000,
      normalInterestDue: 142500,
      penalChargesDue: 38000,
      includeGstOnPenal: true,
      contractualInterestRate: "11.75% p.a.",
      cureDays: "10",
      escalationTrack: "summary_suit",
    },
  },
];

const INITIAL_STATE: NoticeDraftState = {
  dispatchMode: "advocate",
  bankName: "National Industrial & Commercial Bank Ltd.",
  branchOffice: "Stressed Assets Recovery Branch (SARB), Nariman Point, Mumbai - 400021",
  senderName: "Adv. R. V. Deshmukh, Empanelled Bank Counsel",
  enrolmentOrEmpId: "MAH/4182/2014 (Bar Council of Maharashtra & Goa)",
  refNo: "NICB/SARB/REC/2026-27/1842",
  noticeDate: "14 November 2026",
  borrowerName: "M/s Apex Precision Components Pvt. Ltd.",
  borrowerAddress: "Plot No. 42, MIDC Bhosari Industrial Area, Pune - 411026",
  loanAccountNo: "4098210004512 / TL-88412",
  facilityType: "Working Capital Cash Credit (CC) & Term Loan",
  sanctionDate: "18 March 2024",
  sanctionedLimit: 4500000,
  personalGuarantorName: "Shri Vikramaditya S. Kulkarni (Managing Director & Personal Guarantor)",
  personalGuarantorAddress: "B-1104, Sahyadri Residency, Baner Road, Pune - 411045",
  personalGuaranteeDate: "22 March 2024",
  includeCorpGuarantor: true,
  corpGuarantorName: "M/s Sahyadri Holdings & Infrastructure Pvt. Ltd.",
  corpGuarantorCin: "U70109MH2016PTC284910",
  corpGuarantorAddress: "702, Regent Chambers, Nariman Point, Mumbai - 400021",
  corpGuaranteeDate: "22 March 2024",
  defaultDate: "15 June 2026",
  npaDate: "13 September 2026",
  ledgerAsOnDate: "12 November 2026",
  principalDue: 3650000,
  normalInterestDue: 464300,
  penalChargesDue: 115000,
  includeGstOnPenal: true,
  contractualInterestRate: "10.65% p.a. (EBLR + 1.50%)",
  cureDays: "15",
  escalationTrack: "drt_ibc",
};

function formatINR(value: number): string {
  const safe = Number.isFinite(value) ? Math.max(0, Math.round(value)) : 0;
  return new Intl.NumberFormat("en-IN").format(safe);
}

export default function LoanRecallNoticeWorkspace() {
  const [form, setForm] = useState<NoticeDraftState>(INITIAL_STATE);
  const [activePreset, setActivePreset] = useState<string>("sme-cc-drt");
  const [copied, setCopied] = useState(false);

  const updateField = <K extends keyof NoticeDraftState>(key: K, value: NoticeDraftState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const applyPreset = (presetId: string) => {
    const found = PRESETS.find((p) => p.id === presetId);
    if (found) {
      setActivePreset(presetId);
      setForm((prev) => ({ ...prev, ...found.patch }));
    }
  };

  const gstOnPenal = form.includeGstOnPenal ? Math.round(Math.max(0, form.penalChargesDue) * 0.18) : 0;
  const totalClaim =
    Math.max(0, form.principalDue) +
    Math.max(0, form.normalInterestDue) +
    Math.max(0, form.penalChargesDue) +
    gstOnPenal;

  const forumClauseText = useMemo(() => {
    if (form.escalationTrack === "drt_ibc") {
      return `a) Institute an Original Application (OA) under Section 19 of the Recovery of Debts and Bankruptcy (RDB) Act, 1993 before the jurisdictional Debts Recovery Tribunal (DRT) against the Borrower and all Guarantors jointly and severally, along with applications under Section 19(12)-(13) for attachment before judgment and disclosure of assets;\nb) Initiate statutory personal insolvency proceedings against the Personal Guarantor under Section 95 read with Rule 7(1) Form B of the Insolvency and Bankruptcy Code, 2016 (IBC) before the National Company Law Tribunal (NCLT), and Section 7 IBC action against the Corporate Borrower/Guarantor; and\nc) Enforce secured assets without prejudice under Section 13(2) & Section 13(4) of the SARFAESI Act, 2002 (subject to statutory exclusion of agricultural land under Section 31(i)), alongside Section 138 NI Act / Section 25 Payment and Settlement Systems Act, 2007 remedies for dishonoured cheques/NACH mandates.`;
    }
    if (form.escalationTrack === "summary_suit") {
      return `a) Institute a Commercial Summary Suit under Order XXXVII of the Code of Civil Procedure, 1908 read with the Commercial Courts Act, 2015 (post mandatory Section 12A pre-institution mediation where urgent interim relief is not sought), seeking attachment before judgment under Order XXXVIII Rule 5 CPC;\nb) Refer the crystallized ledger to Pre-Litigation Lok Adalat under Section 19/20(2) of the Legal Services Authorities Act, 1987 for an executable award deemed to be a Civil Court decree under Section 21; and\nc) Initiate criminal prosecution under Section 138 of the Negotiable Instruments Act, 1881 or Section 25 of the Payment and Settlement Systems Act, 2007 for any dishonoured ECS/NACH mandate or repayment instrument.`;
    }
    return `a) Refer the recalled debt dispute to an independent, neutral institutional arbitral tribunal under the Arbitration and Conciliation Act, 1996 (strictly ensuring neutral appointment compliance per Supreme Court mandate in Perkins Eastman / CORE, with zero unilateral bank-nominated arbitrator defect) read with Section 9 interim asset-freeze applications;\nb) Place the matter before the jurisdictional Pre-Litigation Lok Adalat under Sections 19 and 21 of the Legal Services Authorities Act, 1987; and\nc) Prosecute dishonoured repayment instruments under Section 138 NI Act / Section 25 PSS Act without prejudice.`;
  }, [form.escalationTrack]);

  const plainNoticeText = useMemo(() => {
    const addresseeLines = [
      `1. PRINCIPAL BORROWER:\n   ${form.borrowerName}\n   ${form.borrowerAddress}`,
      `2. PERSONAL GUARANTOR (Co-Extensive Liability u/s 128 Indian Contract Act, 1872):\n   ${form.personalGuarantorName}\n   ${form.personalGuarantorAddress}`,
    ];
    if (form.includeCorpGuarantor) {
      addresseeLines.push(
        `3. CORPORATE GUARANTOR (CIN: ${form.corpGuarantorCin}):\n   ${form.corpGuarantorName}\n   ${form.corpGuarantorAddress}`
      );
    }

    const issuerBlock =
      form.dispatchMode === "advocate"
        ? `UNDER INSTRUCTIONS FROM AND ON BEHALF OF OUR CLIENT:\n${form.bankName}\n${form.branchOffice}\n\nISSUED BY:\n${form.senderName}\nEnrolment / ID: ${form.enrolmentOrEmpId}`
        : `ISSUED BY THE CREDITOR BANK / AUTHORIZED OFFICER:\n${form.bankName}\n${form.branchOffice}\nSignatory: ${form.senderName} (${form.enrolmentOrEmpId})`;

    const guarantorRecital = form.includeCorpGuarantor
      ? `Addressee No. 2 executed a Deed of Personal Continuing Guarantee dated ${form.personalGuaranteeDate}, and Addressee No. 3 executed a Deed of Corporate Continuing Guarantee dated ${form.corpGuaranteeDate} backed by valid Board Resolution, both guaranteeing due repayment of all present and future outstandings under Sections 126, 127, 128, and 129 of the Indian Contract Act, 1872.`
      : `Addressee No. 2 executed an unconditional, irrevocable Deed of Personal Continuing Guarantee dated ${form.personalGuaranteeDate}, guaranteeing due repayment of all present and future outstandings under Sections 126, 127, 128, and 129 of the Indian Contract Act, 1872.`;

    const subjectAddressees = form.includeCorpGuarantor
      ? "PRINCIPAL BORROWER AND THE PERSONAL & CORPORATE GUARANTORS"
      : "PRINCIPAL BORROWER AND PERSONAL GUARANTOR";

    return `====================================================================
STATUTORY LOAN RECALL CUM GUARANTEE INVOCATION NOTICE
(RBI Fair Lending Practice on Penal Charges Compliant Format)
VIA SPEED POST RPAD / VERIFIED EMAIL / BUSINESS WHATSAPP
====================================================================

Ref. No.: ${form.refNo}
Date    : ${form.noticeDate}

TO (JOINTLY AND SEVERALLY AS PRIMARY & CO-EXTENSIVE NOTICEES — NOT MERELY "CC"):

${addresseeLines.join("\n\n")}

${issuerBlock}

--------------------------------------------------------------------
SUBJECT: NOTICE OF RECALL & ACCELERATION OF ${form.facilityType.toUpperCase()}
(A/C NO. ${form.loanAccountNo}) AND FORMAL STATUTORY INVOCATION OF
GUARANTEE UNDER SECTIONS 126 & 128 OF THE INDIAN CONTRACT ACT, 1872
UPON THE ${subjectAddressees}.
--------------------------------------------------------------------

Sir / Madam,

We act on instructions from and on behalf of ${form.bankName}, ${form.branchOffice} (hereinafter referred to as "Our Client" / "the Bank") to serve upon Addressee No. 1 ("Principal Borrower") and Addressee Nos. 2${form.includeCorpGuarantor ? " & 3" : ""} ("the Guarantor(s)") the present formal Statutory Recall and Guarantee Invocation Notice as follows:

1. SANCTION & SECURITY DOCUMENTATION:
   Pursuant to Addressee No. 1's request, the Bank sanctioned ${form.facilityType} vide Sanction Letter dated ${form.sanctionDate} for a sanctioned limit of Rs. ${formatINR(form.sanctionedLimit)}/- under Loan Account No. ${form.loanAccountNo}, carrying contractual interest at ${form.contractualInterestRate}. Addressee No. 1 executed the Loan/Facility Agreement, Demand Promissory Note, and security documents securing repayment. ${guarantorRecital}

2. CONTINUOUS DEFAULT & RBI IRACP NPA CLASSIFICATION:
   Addressee No. 1 failed to maintain financial discipline, committed continuous payment defaults commencing from ${form.defaultDate}, and failed to regularize overdue principal and contractual interest despite repeated reminders. Consequently, in strict adherence to the Reserve Bank of India (RBI) Master Circular on Prudential Norms on Income Recognition, Asset Classification and Provisioning (IRACP), Loan Account No. ${form.loanAccountNo} was classified as a Non-Performing Asset (NPA) on ${form.npaDate}.

3. IMMEDIATE RECALL & ACCELERATION OF CREDIT FACILITY:
   Upon occurrence of the aforesaid Events of Default and NPA classification, the Bank hereby exercises its contractual right to RECALL, CANCEL, AND ACCELERATE the entire credit facility forthwith. The entire principal, normal accrued contractual interest, and separately accounted uncapitalized penal charges have become immediately due and payable in lump sum.

4. EXPLICIT STATUTORY INVOCATION OF PERSONAL${form.includeCorpGuarantor ? " & CORPORATE" : ""} GUARANTEE (NO "CC" DEFECT):
   TAKE EXPRESS NOTICE that this communication constitutes a formal, unequivocal WRITTEN DEMAND AND INVOCATION OF THE CONTINUING GUARANTEE under Sections 126, 128, and 129 of the Indian Contract Act, 1872 against Addressee No. 2${form.includeCorpGuarantor ? " and Addressee No. 3" : ""} jointly and severally. Under Section 128 of the Contract Act (and settled Supreme Court law in Industrial Investment Bank of India Ltd. v. Biswanath Jhunjhunwala, (2009) 9 SCC 478), your liability as Guarantor(s) is co-extensive with that of the Principal Borrower, and the Bank is under no legal obligation to exhaust remedies against the Borrower or secured assets before enforcing recovery against you. Per Syndicate Bank v. Channaveerappa Beleri, (2006) 11 SCC 509, this written demand expressly crystallizes the cause of action and limitation against each Guarantor.

5. SCHEDULE A — ITEMIZED CLAIM BREAKUP (AS ON ${form.ledgerAsOnDate})
   [Compliant with RBI Circular RBI/2023-24/53 DoR.MCS.REC.28/01.01.001/2023-24]

   (A) Outstanding Principal Balance .................... Rs. ${formatINR(form.principalDue)}/-
   (B) Normal Contractual Interest Accrued ................ Rs. ${formatINR(form.normalInterestDue)}/-
   (C) Uncapitalized Penal Charges (Non-Compounded) ....... Rs. ${formatINR(form.penalChargesDue)}/-
   (D) GST on Penal Charges (@18%, if applicable) ......... Rs. ${formatINR(gstOnPenal)}/-
   --------------------------------------------------------------------
   TOTAL CRYSTALLIZED DEMAND DUE (A + B + C + D) .......... Rs. ${formatINR(totalClaim)}/-
   ====================================================================

   STATUTORY RBI PENAL-CHARGES DECLARATION: In strict compliance with the Reserve Bank of India Fair Lending Practice Directions on Penal Charges in Loan Accounts (Circular dated 18 August 2023), the amounts under Head (C) represent fixed/transparent Penal Charges treated strictly separately from interest rate structures. NO further interest has been levied, capitalized, or compounded upon Penal Charges under Head (C). Further normal contractual interest at ${form.contractualInterestRate} continues to accrue solely on the Outstanding Principal under Head (A) until actual realization.

6. STATUTORY PAYMENT DEMAND WITHIN ${form.cureDays} DAYS:
   All Addressees (Borrower and Guarantor(s)) are hereby called upon, jointly and severally, to remit the total crystallized sum of Rs. ${formatINR(totalClaim)}/- together with pendente lite normal contractual interest on Principal until payment, within ${form.cureDays} (${form.cureDays}) days from receipt of this Notice.

7. LEGAL CONSEQUENCES OF NON-COMPLIANCE & RESERVATION OF RIGHTS:
   Should all or any of you fail to liquidate the recalled dues within ${form.cureDays} days, Our Client shall be constrained to initiate, at your entire risk as to costs and consequences:
${forumClauseText}

8. NEGATIVE LIEN, CREDIT BUREAU & ELECTRONIC EVIDENCE NOTICE:
   Take further notice against alienating, encumbering, or creating third-party rights over hypothecated, mortgaged, or personal/corporate assets (which shall attract interim attachment injunctions and criminal breach of trust consequences). Upon default, this NPA recall and guarantee invocation status shall stand reported to CICs (TransUnion CIBIL, Experian, Equifax, CRIF High Mark) and NeSL Information Utility under the IBC framework. Certified Core Banking extracts under Section 2A and Section 4 of the Bankers' Books Evidence Act, 1891, alongside Section 63 Bharatiya Sakshya Adhiniyam (BSA), 2023 electronic service metadata, shall be tendered in evidence.

   This Notice is issued strictly without prejudice to all other contractual, statutory, SARFAESI, civil, and criminal remedies available to Our Client under Indian law. A signed copy is retained in office records.

Yours faithfully,

${form.senderName}
${form.enrolmentOrEmpId}
For and on behalf of ${form.bankName}`;
  }, [form, gstOnPenal, totalClaim, forumClauseText]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(plainNoticeText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const handleDownloadWord = () => {
    const htmlContent = `<!DOCTYPE html>
<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
<head>
<meta charset="utf-8" />
<title>Loan Recall cum Guarantee Invocation Notice - ${form.loanAccountNo}</title>
<style>
  body { font-family: "Times New Roman", Times, serif; font-size: 11pt; line-height: 1.5; color: #111827; margin: 40px; }
  h1 { font-size: 13pt; text-align: center; text-decoration: underline; margin-bottom: 16px; }
  table { width: 100%; border-collapse: collapse; margin: 14px 0; }
  th, td { border: 1px solid #334155; padding: 6px 10px; font-size: 10.5pt; text-align: left; }
  th { background-color: #f1f5f9; font-weight: bold; }
  .right { text-align: right; }
  pre { font-family: "Times New Roman", Times, serif; white-space: pre-wrap; font-size: 11pt; }
</style>
</head>
<body>
<h1>STATUTORY LOAN RECALL CUM GUARANTEE INVOCATION NOTICE</h1>
<p><strong>Ref. No.:</strong> ${form.refNo} &nbsp;|&nbsp; <strong>Date:</strong> ${form.noticeDate}</p>
<p><strong>Schedule A Ledger Summary (As On ${form.ledgerAsOnDate} &mdash; RBI Penal-Charge Compliant, Zero Compounding):</strong></p>
<table>
  <thead>
    <tr>
      <th>Ledger Head</th>
      <th>Statutory / Regulatory Basis</th>
      <th class="right">Amount (INR)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>(A) Outstanding Principal Balance</td>
      <td>Sanction Letter dated ${form.sanctionDate}</td>
      <td class="right">Rs. ${formatINR(form.principalDue)}/-</td>
    </tr>
    <tr>
      <td>(B) Normal Contractual Interest Accrued</td>
      <td>Contractual Rate: ${form.contractualInterestRate}</td>
      <td class="right">Rs. ${formatINR(form.normalInterestDue)}/-</td>
    </tr>
    <tr>
      <td>(C) Uncapitalized Penal Charges (Non-Compounded)</td>
      <td>RBI Circular RBI/2023-24/53 DoR.MCS.REC.28/01.01.001/2023-24</td>
      <td class="right">Rs. ${formatINR(form.penalChargesDue)}/-</td>
    </tr>
    <tr>
      <td>(D) GST on Penal Charges (@18%)</td>
      <td>Applicable Indirect Tax on Penal Charges</td>
      <td class="right">Rs. ${formatINR(gstOnPenal)}/-</td>
    </tr>
    <tr>
      <th>Total Crystallized Recall &amp; Guarantee Demand (A+B+C+D)</th>
      <th>Joint &amp; Several Liability (s.128 Indian Contract Act, 1872)</th>
      <th class="right">Rs. ${formatINR(totalClaim)}/-</th>
    </tr>
  </tbody>
</table>
<pre>${plainNoticeText.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</pre>
</body>
</html>`;

    const blob = new Blob(["\ufeff", htmlContent], { type: "application/msword" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Loan-Recall-Guarantee-Invocation-${form.loanAccountNo.replace(/[^a-zA-Z0-9_-]/g, "_")}.doc`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Top Preset & Mode Strip */}
      <div className="bg-slate-900 text-white p-4 sm:p-5 border-b border-slate-800 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-widest text-red-400">
              Bank Panel Advocate &amp; Branch Draft Generator
            </p>
            <p className="text-sm font-bold text-white">
              Select Portfolio Scenario &amp; Populate Uncapitalized Schedule A Figures
            </p>
          </div>
          <div className="inline-flex rounded-xl bg-slate-800 p-1 border border-slate-700 self-start">
            <button
              type="button"
              onClick={() => updateField("dispatchMode", "advocate")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                form.dispatchMode === "advocate"
                  ? "bg-[#DC2626] text-white"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              Panel Advocate Notice
            </button>
            <button
              type="button"
              onClick={() => updateField("dispatchMode", "authorized_officer")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                form.dispatchMode === "authorized_officer"
                  ? "bg-[#DC2626] text-white"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              Bank Officer Recall
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {PRESETS.map((preset) => (
            <button
              key={preset.id}
              type="button"
              onClick={() => applyPreset(preset.id)}
              className={`px-3 py-2 rounded-xl text-left border transition-all cursor-pointer ${
                activePreset === preset.id
                  ? "bg-white text-slate-900 border-white shadow-sm"
                  : "bg-slate-800/80 text-slate-200 border-slate-700 hover:border-slate-500"
              }`}
            >
              <span className="block text-[10px] font-extrabold uppercase tracking-wider text-[#DC2626]">
                {preset.badge}
              </span>
              <span className="block text-xs font-bold leading-snug">{preset.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Split Editor + Live Preview */}
      <div className="grid grid-cols-1 xl:grid-cols-12">
        {/* Left Inputs */}
        <div className="xl:col-span-5 p-4 sm:p-6 bg-slate-50 border-b xl:border-b-0 xl:border-r border-slate-200 space-y-5">
          {/* Group 1: Bank & Borrower */}
          <div className="space-y-3">
            <p className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1.5">
              A. Bank, Facility &amp; Principal Borrower
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">Bank / Lender Name</label>
                <input
                  type="text"
                  value={form.bankName}
                  onChange={(e) => updateField("bankName", e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 focus:border-[#DC2626] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">Loan Account No.</label>
                <input
                  type="text"
                  value={form.loanAccountNo}
                  onChange={(e) => updateField("loanAccountNo", e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 focus:border-[#DC2626] focus:outline-none"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-[11px] font-bold text-slate-700 mb-1">Branch / SARB Office</label>
                <input
                  type="text"
                  value={form.branchOffice}
                  onChange={(e) => updateField("branchOffice", e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 focus:border-[#DC2626] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">Principal Borrower</label>
                <input
                  type="text"
                  value={form.borrowerName}
                  onChange={(e) => updateField("borrowerName", e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 focus:border-[#DC2626] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">NPA Date (RBI IRACP)</label>
                <input
                  type="text"
                  value={form.npaDate}
                  onChange={(e) => updateField("npaDate", e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 focus:border-[#DC2626] focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Group 2: Explicit Guarantors (s.128) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-200 pb-1.5">
              <p className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                B. Explicit Guarantors (Contract Act s.126/128)
              </p>
              <label className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.includeCorpGuarantor}
                  onChange={(e) => updateField("includeCorpGuarantor", e.target.checked)}
                  className="rounded border-slate-300 text-[#DC2626] focus:ring-[#DC2626]"
                />
                Include Corporate Guarantor
              </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">Personal Guarantor</label>
                <input
                  type="text"
                  value={form.personalGuarantorName}
                  onChange={(e) => updateField("personalGuarantorName", e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 focus:border-[#DC2626] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">Guarantee Deed Date</label>
                <input
                  type="text"
                  value={form.personalGuaranteeDate}
                  onChange={(e) => updateField("personalGuaranteeDate", e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 focus:border-[#DC2626] focus:outline-none"
                />
              </div>
              {form.includeCorpGuarantor && (
                <>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">Corporate Guarantor</label>
                    <input
                      type="text"
                      value={form.corpGuarantorName}
                      onChange={(e) => updateField("corpGuarantorName", e.target.value)}
                      className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 focus:border-[#DC2626] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">Corporate CIN</label>
                    <input
                      type="text"
                      value={form.corpGuarantorCin}
                      onChange={(e) => updateField("corpGuarantorCin", e.target.value)}
                      className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 focus:border-[#DC2626] focus:outline-none"
                    />
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Group 3: Schedule A Uncapitalized Calculator */}
          <div className="space-y-3 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between gap-2">
              <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                C. Schedule A (Zero Penal Compounding)
              </p>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                RBI Circular Compliant
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">(A) Principal (₹)</label>
                <input
                  type="number"
                  min={0}
                  value={form.principalDue}
                  onChange={(e) => updateField("principalDue", Number(e.target.value))}
                  className="w-full rounded-lg border border-slate-300 px-2.5 py-2 text-xs font-semibold text-slate-900 focus:border-[#DC2626] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">(B) Normal Interest (₹)</label>
                <input
                  type="number"
                  min={0}
                  value={form.normalInterestDue}
                  onChange={(e) => updateField("normalInterestDue", Number(e.target.value))}
                  className="w-full rounded-lg border border-slate-300 px-2.5 py-2 text-xs font-semibold text-slate-900 focus:border-[#DC2626] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">(C) Penal Charges (₹)</label>
                <input
                  type="number"
                  min={0}
                  value={form.penalChargesDue}
                  onChange={(e) => updateField("penalChargesDue", Number(e.target.value))}
                  className="w-full rounded-lg border border-slate-300 px-2.5 py-2 text-xs font-semibold text-slate-900 focus:border-[#DC2626] focus:outline-none"
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 text-xs">
              <label className="inline-flex items-center gap-1.5 font-semibold text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.includeGstOnPenal}
                  onChange={(e) => updateField("includeGstOnPenal", e.target.checked)}
                  className="rounded border-slate-300 text-[#DC2626] focus:ring-[#DC2626]"
                />
                Add 18% GST on Penal Charges (₹{formatINR(gstOnPenal)})
              </label>
              <div className="font-black text-slate-900">
                Total Due: <span className="text-[#DC2626]">₹{formatINR(totalClaim)}/-</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">Cure Window</label>
                <select
                  value={form.cureDays}
                  onChange={(e) => updateField("cureDays", e.target.value as "7" | "10" | "15")}
                  className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-2 text-xs font-semibold text-slate-900 focus:border-[#DC2626] focus:outline-none"
                >
                  <option value="15">15 Days (Standard DRT / Commercial)</option>
                  <option value="10">10 Days (Accelerated Business Recall)</option>
                  <option value="7">7 Days (Urgent Asset-Alienation Risk)</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">Post-Cure Escalation Forum</label>
                <select
                  value={form.escalationTrack}
                  onChange={(e) => updateField("escalationTrack", e.target.value as EscalationTrack)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-2 text-xs font-semibold text-slate-900 focus:border-[#DC2626] focus:outline-none"
                >
                  <option value="drt_ibc">e-DRT s.19 OA + IBC s.95/s.7 (&gt;= ₹20L)</option>
                  <option value="summary_suit">Order 37 Summary Suit + Lok Adalat (&lt; ₹20L)</option>
                  <option value="arbitration_lok_adalat">Neutral Arbitration + Lok Adalat</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Right Live Formatted Draft + Exports */}
        <div className="xl:col-span-7 p-4 sm:p-6 flex flex-col justify-between bg-white space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-200">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                Live Advocate-Vetted Notice Preview
              </p>
              <p className="text-[11px] text-slate-500">
                Ready for Word (.doc) export, clipboard copy, or Bar Council advocate dispatch
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={handleCopy}
                className="px-3.5 py-2 rounded-lg text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-300 transition-colors cursor-pointer"
              >
                {copied ? "Copied Draft!" : "Copy Full Draft"}
              </button>
              <button
                type="button"
                onClick={handleDownloadWord}
                className="px-3.5 py-2 rounded-lg text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white transition-colors cursor-pointer"
              >
                Download Word (.doc)
              </button>
              <button
                type="button"
                onClick={handlePrint}
                className="px-3.5 py-2 rounded-lg text-xs font-bold bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 transition-colors cursor-pointer"
              >
                Print / PDF
              </button>
            </div>
          </div>

          <pre className="w-full max-h-[540px] overflow-y-auto rounded-xl bg-slate-50 border border-slate-200 p-4 sm:p-5 text-[11px] sm:text-xs font-mono text-slate-800 leading-relaxed whitespace-pre-wrap select-all">
            {plainNoticeText}
          </pre>

          <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="text-xs text-slate-800">
              <strong className="text-slate-900 block">Need Panel Advocate Letterhead + Tri-Channel RPAD Proof?</strong>
              <span className="text-slate-600">
                Test 1 live borrower/guarantor recall notice or upload a bulk CSV for branch/SARB dispatch.
              </span>
            </div>
            <div className="flex flex-wrap gap-2 shrink-0">
              <Link
                href="/user/new-recovery"
                className="px-4 py-2 rounded-lg bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold transition-colors text-center"
              >
                Send 1 Notice (&rupee;999) &rarr;
              </Link>
              <Link
                href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors text-center"
              >
                Bulk NPA CSV &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
