"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";

type DispatchMode = "advocate" | "authorized_officer";
type MandateChannel = "e-NACH" | "Physical NACH" | "ECS" | "UPI AutoPay";

interface PssNoticeState {
  dispatchMode: DispatchMode;
  lenderName: string;
  lenderOffice: string;
  senderName: string;
  enrolmentOrEmpId: string;
  refNo: string;
  noticeDate: string;
  borrowerName: string;
  borrowerAddress: string;
  loanAccountNo: string;
  loanProduct: string;
  mandateChannel: MandateChannel;
  umrn: string;
  sponsorBankBranch: string;
  borrowerBankName: string;
  presentationDate: string;
  returnMemoDate: string;
  returnReasonCode: string;
  exactBouncedAmount: number;
  includeSeparateLoanRecall: boolean;
  totalLoanBalance: number;
  paymentPortalUrl: string;
}

const PRESETS: { id: string; label: string; badge: string; patch: Partial<PssNoticeState> }[] = [
  {
    id: "digital-pl-enach",
    label: "Digital Personal Loan / BNPL (e-NACH Bounce)",
    badge: "Default Preset",
    patch: {
      dispatchMode: "advocate",
      loanProduct: "Unsecured Digital Personal Loan",
      loanAccountNo: "DPL-2026-8841209",
      mandateChannel: "e-NACH",
      umrn: "HDFC7021000004918273",
      returnReasonCode: "01 - Funds Insufficient",
      exactBouncedAmount: 18450,
      includeSeparateLoanRecall: true,
      totalLoanBalance: 420000,
    },
  },
  {
    id: "sme-nach-dual",
    label: "SME Business Term Loan (NACH Dishonour + Recall)",
    badge: "Suman Sethi Dual-Demand",
    patch: {
      dispatchMode: "advocate",
      loanProduct: "Unsecured SME Working Capital Term Loan",
      loanAccountNo: "SME-BL-4490127",
      mandateChannel: "Physical NACH",
      umrn: "ICIC0000000881920451",
      returnReasonCode: "04 - Mandate Revoked / Payment Stopped by Drawer",
      exactBouncedAmount: 84200,
      includeSeparateLoanRecall: true,
      totalLoanBalance: 1485000,
    },
  },
  {
    id: "upi-autopay-single",
    label: "Small-Ticket UPI AutoPay Failure (Pure s.25 Demand)",
    badge: "UPI AutoPay",
    patch: {
      dispatchMode: "authorized_officer",
      loanProduct: "Consumer Durable / BNPL Credit Line",
      loanAccountNo: "BNPL-99201445",
      mandateChannel: "UPI AutoPay",
      umrn: "NPCIUPI2026091844210",
      returnReasonCode: "01 - Insufficient Funds in Linked Account",
      exactBouncedAmount: 6850,
      includeSeparateLoanRecall: false,
      totalLoanBalance: 41100,
    },
  },
];

const INITIAL_STATE: PssNoticeState = {
  dispatchMode: "advocate",
  lenderName: "Crestline FinServe NBFC Ltd.",
  lenderOffice: "4th Floor, Trade Tower B, Bandra-Kurla Complex, Mumbai - 400051",
  senderName: "Adv. R. V. Deshmukh, Empanelled NBFC Counsel",
  enrolmentOrEmpId: "MAH/4182/2014 (Bar Council of Maharashtra & Goa)",
  refNo: "CFS/PSS25/2026-27/9042",
  noticeDate: "14 November 2026",
  borrowerName: "Mr. Rohan S. Sharma",
  borrowerAddress: "Flat 304, Emerald Residency, Wakad, Pune - 411057",
  loanAccountNo: "DPL-2026-8841209",
  loanProduct: "Unsecured Digital Personal Loan",
  mandateChannel: "e-NACH",
  umrn: "HDFC7021000004918273",
  sponsorBankBranch: "HDFC Bank Ltd., Nariman Point Branch, Mumbai (Payee Collection Account)",
  borrowerBankName: "State Bank of India (Destination Account)",
  presentationDate: "05 November 2026",
  returnMemoDate: "06 November 2026",
  returnReasonCode: "01 - Funds Insufficient",
  exactBouncedAmount: 18450,
  includeSeparateLoanRecall: true,
  totalLoanBalance: 420000,
  paymentPortalUrl: "https://pay.crestlinefinserve.in/nach-cure",
};

function formatINR(value: number): string {
  const safe = Number.isFinite(value) ? Math.max(0, Math.round(value)) : 0;
  return new Intl.NumberFormat("en-IN").format(safe);
}

export default function PssActNoticeWorkspace() {
  const [form, setForm] = useState<PssNoticeState>(INITIAL_STATE);
  const [activePreset, setActivePreset] = useState<string>("digital-pl-enach");
  const [copied, setCopied] = useState(false);

  const updateField = <K extends keyof PssNoticeState>(key: K, value: PssNoticeState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const applyPreset = (presetId: string) => {
    const found = PRESETS.find((p) => p.id === presetId);
    if (found) {
      setActivePreset(presetId);
      setForm((prev) => ({ ...prev, ...found.patch }));
    }
  };

  const plainNoticeText = useMemo(() => {
    const issuerBlock =
      form.dispatchMode === "advocate"
        ? `UNDER INSTRUCTIONS FROM AND ON BEHALF OF OUR CLIENT:\n${form.lenderName}\n${form.lenderOffice}\n\nISSUED BY:\n${form.senderName}\nEnrolment / ID: ${form.enrolmentOrEmpId}`
        : `ISSUED BY THE CREDITOR / SYSTEM PARTICIPANT:\n${form.lenderName}\n${form.lenderOffice}\nAuthorized Signatory: ${form.senderName} (${form.enrolmentOrEmpId})`;

    const partTwoRecallBlock = form.includeSeparateLoanRecall
      ? `\n   PART II — SEPARATE INFORMATIONAL STATEMENT OF ACCELERATED LOAN BALANCE\n   (STRICTLY SEVERABLE FROM THE STATUTORY SECTION 25(1)(c) DEMAND ABOVE):\n   Without prejudice to and strictly separate from the unequivocal statutory demand of Rs. ${formatINR(form.exactBouncedAmount)}/- in Part I above, you are notified that due to your payment default under the Loan Agreement, the total outstanding recalled/foreclosure balance under Loan A/c No. ${form.loanAccountNo} stands at Rs. ${formatINR(form.totalLoanBalance)}/-. Payment of Rs. ${formatINR(form.exactBouncedAmount)}/- within 15 days shall satisfy the statutory criminal liability under Section 25 PSS Act for the above dishonoured mandate, while Our Client reserves civil/arbitral remedies for any remaining contractual balance.`
      : "";

    return `====================================================================
STATUTORY DEMAND NOTICE UNDER SECTION 25(1) OF THE PAYMENT AND
SETTLEMENT SYSTEMS ACT, 2007 (READ WITH SECTION 138 NI ACT, 1881)
VIA SPEED POST RPAD / VERIFIED EMAIL / BUSINESS WHATSAPP
====================================================================

Ref. No.: ${form.refNo}
Date    : ${form.noticeDate}

TO:
${form.borrowerName}
${form.borrowerAddress}

${issuerBlock}

--------------------------------------------------------------------
SUBJECT: STATUTORY DEMAND NOTICE UNDER SECTION 25(1)(b) OF THE
PAYMENT AND SETTLEMENT SYSTEMS ACT, 2007 FOR DISHONOUR OF ${form.mandateChannel.toUpperCase()}
ELECTRONIC FUNDS TRANSFER (UMRN: ${form.umrn}) OF RS. ${formatINR(form.exactBouncedAmount)}/-
(LOAN A/C NO.: ${form.loanAccountNo})
--------------------------------------------------------------------

Sir / Madam,

Under instructions from and on behalf of ${form.lenderName} (hereinafter referred to as "Our Client"), we hereby serve upon you the following Statutory Demand Notice under Section 25 of the Payment and Settlement Systems Act, 2007 ("PSS Act"):

1. LOAN FACILITY & ELECTRONIC FUNDS TRANSFER MANDATE:
   That you approached Our Client and availed a ${form.loanProduct} under Loan Account No. ${form.loanAccountNo}. In discharge of your legally enforceable debt and scheduled installment liability, you voluntarily executed and registered an Electronic Funds Transfer mandate via ${form.mandateChannel} bearing Unique Mandate Registration Number (UMRN) ${form.umrn}, drawn on ${form.borrowerBankName}, authorizing periodic debit in favour of Our Client's collection account maintained with ${form.sponsorBankBranch}.

2. PRESENTATION & DISHONOUR OF ELECTRONIC FUNDS TRANSFER:
   That in accordance with the agreed repayment schedule, Our Client initiated electronic funds transfer under UMRN ${form.umrn} on ${form.presentationDate} for the exact installment sum of Rs. ${formatINR(form.exactBouncedAmount)}/-. However, the said electronic funds transfer was returned unpaid/dishonoured by your banker via NPCI / Sponsor Bank Return Memo dated ${form.returnMemoDate} with the remark "${form.returnReasonCode}".

3. TIMELY STATUTORY NOTICE UNDER SECTION 25(1)(b) PSS ACT:
   That Our Client received intimation of the aforesaid dishonour on ${form.returnMemoDate} and is issuing this statutory written demand well within the prescribed 30-day statutory period under Section 25(1)(b) of the Payment and Settlement Systems Act, 2007.

4. BIFURCATED DEMAND SCHEDULE (SUMAN SETHI COMPLIANCE SAFEGUARD):

   PART I — EXACT STATUTORY DEMAND UNDER SECTION 25(1)(c) PSS ACT:
   • Mandate Channel & UMRN ......... ${form.mandateChannel} / ${form.umrn}
   • Presentation & Return Date ..... ${form.presentationDate} / ${form.returnMemoDate}
   • NPCI Dishonour Reason Code ..... ${form.returnReasonCode}
   • EXACT BOUNCED MANDATE AMOUNT ... Rs. ${formatINR(form.exactBouncedAmount)}/-
   (Payable within 15 days of receipt to cure Section 25 offence)
${partTwoRecallBlock}

5. STATUTORY 15-DAY DEMAND FOR PAYMENT (SECTION 25(1)(c)):
   You are hereby called upon to make payment of the EXACT DISHONOURED ELECTRONIC FUNDS TRANSFER AMOUNT OF RS. ${formatINR(form.exactBouncedAmount)}/- (Rupees ${formatINR(form.exactBouncedAmount)} Only) to Our Client within fifteen (15) days from the date of receipt of this Notice via RTGS/NEFT/UPI/authorized payment link (${form.paymentPortalUrl}).

6. CRIMINAL & CIVIL CONSEQUENCES OF NON-COMPLIANCE:
   Take notice that if you fail to pay the aforesaid exact sum of Rs. ${formatINR(form.exactBouncedAmount)}/- within 15 days of receipt hereof, Our Client shall be constrained to file a criminal complaint against you under Section 25(1) read with Section 25(5) of the Payment and Settlement Systems Act, 2007 (carrying imprisonment up to two years, or fine up to twice the amount of the electronic funds transfer, or both) before the jurisdictional Judicial Magistrate First Class / Metropolitan Magistrate where ${form.sponsorBankBranch} is situated (Section 142(2) NI Act principle), entirely at your risk, cost, and consequences.

7. ELECTRONIC EVIDENCE & PRESERVATION:
   Electronic records of NPCI return logs, UMRN registration, and Email/WhatsApp/Speed Post RPAD dispatch metadata are preserved with Section 63 Bharatiya Sakshya Adhiniyam (BSA), 2023 certification for judicial production.

Yours faithfully,

${form.senderName}
${form.enrolmentOrEmpId}
For and on behalf of ${form.lenderName}`;
  }, [form]);

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
<title>Section 25 PSS Act Notice - ${form.loanAccountNo}</title>
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
<h1>STATUTORY DEMAND NOTICE UNDER SECTION 25 PSS ACT, 2007</h1>
<p><strong>Ref. No.:</strong> ${form.refNo} &nbsp;|&nbsp; <strong>Date:</strong> ${form.noticeDate}</p>
<table>
  <thead>
    <tr>
      <th>Demand Part</th>
      <th>Particulars (UMRN: ${form.umrn})</th>
      <th class="right">Amount (INR)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Part I (Statutory s.25(1)(c) Demand)</strong></td>
      <td>Exact Dishonoured ${form.mandateChannel} Installment (${form.returnReasonCode})</td>
      <td class="right"><strong>Rs. ${formatINR(form.exactBouncedAmount)}/-</strong></td>
    </tr>
    ${
      form.includeSeparateLoanRecall
        ? `<tr>
      <td>Part II (Separate Informational Recall)</td>
      <td>Total Accelerated Loan Balance (Severable from Part I)</td>
      <td class="right">Rs. ${formatINR(form.totalLoanBalance)}/-</td>
    </tr>`
        : ""
    }
  </tbody>
</table>
<pre>${plainNoticeText.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</pre>
</body>
</html>`;

    const blob = new Blob(["\ufeff", htmlContent], { type: "application/msword" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Section-25-PSS-Act-Notice-${form.loanAccountNo.replace(/[^a-zA-Z0-9_-]/g, "-")}.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    const win = window.open("", "_blank", "width=850,height=900");
    if (!win) return;
    win.document.write(
      `<!DOCTYPE html><html><head><title>Section 25 PSS Act Notice - ${form.loanAccountNo}</title><style>body{font-family:"Times New Roman",serif;padding:36px;line-height:1.55;font-size:12pt;color:#0f172a;}pre{white-space:pre-wrap;font-family:"Times New Roman",serif;}</style></head><body><pre>${plainNoticeText
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")}</pre></body></html>`
    );
    win.document.close();
    win.focus();
    win.print();
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
      {/* Preset Bar */}
      <div className="bg-slate-900 text-white px-4 sm:px-6 py-4 border-b border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-red-400 block">
              Interactive Section 25 PSS Act Notice Builder (Word / PDF / Copy)
            </span>
            <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
              Select a lending preset, enter UMRN &amp; NPCI return memo fields, and keep Part I (exact bounced EMI) strictly separated from Part II (total loan recall).
            </p>
          </div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-950/80 text-emerald-300 border border-emerald-700/60 shrink-0">
            Suman Sethi Dual-Demand Safe
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {PRESETS.map((preset) => {
            const isActive = activePreset === preset.id;
            return (
              <button
                key={preset.id}
                type="button"
                onClick={() => applyPreset(preset.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer border ${
                  isActive
                    ? "bg-[#DC2626] border-[#DC2626] text-white"
                    : "bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700"
                }`}
              >
                {preset.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Split: Left Inputs | Right Live Draft */}
      <div className="grid grid-cols-1 xl:grid-cols-12 divide-y xl:divide-y-0 xl:divide-x divide-slate-200">
        {/* Left Form Controls */}
        <div className="xl:col-span-5 p-4 sm:p-6 space-y-5 bg-slate-50/60">
          {/* Dispatch Mode */}
          <div>
            <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-700 mb-2">
              1. Notice Signatory Mode
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => updateField("dispatchMode", "advocate")}
                className={`px-3 py-2 rounded-lg text-xs font-bold border transition-colors cursor-pointer ${
                  form.dispatchMode === "advocate"
                    ? "bg-slate-900 text-white border-slate-900"
                    : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100"
                }`}
              >
                Empanelled Advocate
              </button>
              <button
                type="button"
                onClick={() => updateField("dispatchMode", "authorized_officer")}
                className={`px-3 py-2 rounded-lg text-xs font-bold border transition-colors cursor-pointer ${
                  form.dispatchMode === "authorized_officer"
                    ? "bg-slate-900 text-white border-slate-900"
                    : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100"
                }`}
              >
                NBFC Authorized Officer
              </button>
            </div>
          </div>

          {/* Lender & Borrower */}
          <div className="space-y-3">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-700">
              2. NBFC / Bank &amp; Borrower Particulars
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">NBFC / Bank Name</label>
                <input
                  type="text"
                  value={form.lenderName}
                  onChange={(e) => updateField("lenderName", e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs text-slate-900 focus:border-[#DC2626] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">Loan Account No.</label>
                <input
                  type="text"
                  value={form.loanAccountNo}
                  onChange={(e) => updateField("loanAccountNo", e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs text-slate-900 focus:border-[#DC2626] focus:outline-none"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">Borrower Name</label>
                <input
                  type="text"
                  value={form.borrowerName}
                  onChange={(e) => updateField("borrowerName", e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs text-slate-900 focus:border-[#DC2626] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">Loan Product</label>
                <input
                  type="text"
                  value={form.loanProduct}
                  onChange={(e) => updateField("loanProduct", e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs text-slate-900 focus:border-[#DC2626] focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">Borrower Address (RPAD)</label>
              <input
                type="text"
                value={form.borrowerAddress}
                onChange={(e) => updateField("borrowerAddress", e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs text-slate-900 focus:border-[#DC2626] focus:outline-none"
              />
            </div>
          </div>

          {/* Mandate & NPCI Return Particulars */}
          <div className="space-y-3 pt-2 border-t border-slate-200">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626]">
              3. Mandate (UMRN) &amp; NPCI Return Memo Details
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">Mandate Channel</label>
                <select
                  value={form.mandateChannel}
                  onChange={(e) => updateField("mandateChannel", e.target.value as MandateChannel)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-900 focus:border-[#DC2626] focus:outline-none"
                >
                  <option value="e-NACH">e-NACH</option>
                  <option value="Physical NACH">Physical NACH</option>
                  <option value="ECS">ECS</option>
                  <option value="UPI AutoPay">UPI AutoPay</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">UMRN (20-Char Mandate ID)</label>
                <input
                  type="text"
                  value={form.umrn}
                  onChange={(e) => updateField("umrn", e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs font-mono text-slate-900 focus:border-[#DC2626] focus:outline-none"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">Presentation Date</label>
                <input
                  type="text"
                  value={form.presentationDate}
                  onChange={(e) => updateField("presentationDate", e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs text-slate-900 focus:border-[#DC2626] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">NPCI Return Memo Date</label>
                <input
                  type="text"
                  value={form.returnMemoDate}
                  onChange={(e) => updateField("returnMemoDate", e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs text-slate-900 focus:border-[#DC2626] focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">NPCI Return Reason Code</label>
              <input
                type="text"
                value={form.returnReasonCode}
                onChange={(e) => updateField("returnReasonCode", e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs text-slate-900 focus:border-[#DC2626] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">
                Sponsor / Payee Bank Branch (JMFC Jurisdiction)
              </label>
              <input
                type="text"
                value={form.sponsorBankBranch}
                onChange={(e) => updateField("sponsorBankBranch", e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs text-slate-900 focus:border-[#DC2626] focus:outline-none"
              />
            </div>
          </div>

          {/* Dual-Demand Suman Sethi Safeguard */}
          <div className="space-y-3 pt-2 border-t border-slate-200">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-900">
              4. Bifurcated Demand (Suman Sethi Rule)
            </p>
            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">
                Part I: Exact Bounced EMI / Mandate Amount (&#8377;)
              </label>
              <input
                type="number"
                min={0}
                value={form.exactBouncedAmount}
                onChange={(e) => updateField("exactBouncedAmount", Number(e.target.value) || 0)}
                className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs font-bold text-[#DC2626] focus:border-[#DC2626] focus:outline-none"
              />
            </div>

            <label className="flex items-center gap-2 text-xs font-semibold text-slate-800 cursor-pointer">
              <input
                type="checkbox"
                checked={form.includeSeparateLoanRecall}
                onChange={(e) => updateField("includeSeparateLoanRecall", e.target.checked)}
                className="rounded border-slate-300 text-[#DC2626] focus:ring-[#DC2626]"
              />
              Include Separate Part II Informational Loan Balance
            </label>

            {form.includeSeparateLoanRecall && (
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                  Part II: Total Recalled Loan Balance (&#8377;) — Severable
                </label>
                <input
                  type="number"
                  min={0}
                  value={form.totalLoanBalance}
                  onChange={(e) => updateField("totalLoanBalance", Number(e.target.value) || 0)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-900 focus:border-[#DC2626] focus:outline-none"
                />
              </div>
            )}

            <div className="rounded-lg bg-amber-50 border border-amber-200 p-2.5 text-[11px] text-amber-900 leading-snug">
              <strong>Magistrate Quash Guard:</strong> Part I demands strictly{" "}
              <strong>&#8377;{formatINR(form.exactBouncedAmount)}/-</strong> within 15 days under s.25(1)(c).
              Part II never merges into the statutory 15-day criminal demand.
            </div>
          </div>
        </div>

        {/* Right Live Formatted Draft + Exports */}
        <div className="xl:col-span-7 p-4 sm:p-6 flex flex-col justify-between bg-white space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-200">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                Live Advocate-Vetted Section 25 Notice Preview
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

          <pre className="w-full max-h-[560px] overflow-y-auto rounded-xl bg-slate-50 border border-slate-200 p-4 sm:p-5 text-[11px] sm:text-xs font-mono text-slate-800 leading-relaxed whitespace-pre-wrap select-all">
            {plainNoticeText}
          </pre>

          <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="text-xs text-slate-800">
              <strong className="text-slate-900 block">Need Panel Advocate Letterhead + Tri-Channel RPAD Proof?</strong>
              <span className="text-slate-600">
                Test 1 live e-NACH Section 25 notice or upload a monthly NPCI bounce CSV batch.
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
                Bulk Bounce CSV &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
