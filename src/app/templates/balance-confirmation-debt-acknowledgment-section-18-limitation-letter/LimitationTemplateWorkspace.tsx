"use client";

import React, { useMemo, useState } from "react";

type TemplateTab = "s18_letter" | "s18_email_wa" | "s19_part_pay" | "s25_3_revival";

interface LimitationPreset {
  id: string;
  label: string;
  badge: string;
  creditorName: string;
  creditorGstin: string;
  creditorAddress: string;
  creditorOfficer: string;
  debtorName: string;
  debtorGstin: string;
  debtorAddress: string;
  debtorSignatory: string;
  principalDue: number;
  interestDue: number;
  invoiceSummary: string;
  originalDueDate: string;
  partPaymentAmount: number;
  partPaymentRef: string;
  installmentPlan: string;
  confirmationDate: string;
  auditCutoffDate: string;
}

const PRESETS: LimitationPreset[] = [
  {
    id: "march-31-ar-audit",
    label: "Year-End March 31 AR Audit Confirmation (31 Months Overdue)",
    badge: "Section 18 Reset",
    creditorName: "Kaveri Industrial Fasteners Private Limited",
    creditorGstin: "27AAACK8421M1Z4",
    creditorAddress: "Plot B-19, Pimpri Industrial Area, Pune, Maharashtra - 411018",
    creditorOfficer: "Siddharth Deshmukh, Senior Accounts Receivable Manager",
    debtorName: "Bharati Heavy Engineering & Fabrication Pvt. Ltd.",
    debtorGstin: "27AAACB9104E1Z8",
    debtorAddress: "Survey 44, MIDC Waluj, Chhatrapati Sambhajinagar, Maharashtra - 431136",
    debtorSignatory: "Vikramaditya Joshi (Director / Authorised Signatory)",
    principalDue: 1845000,
    interestDue: 412000,
    invoiceSummary: "KIF/23-24/0812 dated 12.04.2024 (₹9,20,000) & KIF/23-24/0891 dated 28.04.2024 (₹9,25,000)",
    originalDueDate: "12 May 2024",
    partPaymentAmount: 250000,
    partPaymentRef: "NEFT UTR HDFC2611200048192 dated 18.11.2026",
    installmentPlan: "₹4,50,000 on 15.12.2026; ₹4,50,000 on 15.01.2027; ₹4,50,000 on 15.02.2027; balance ₹9,07,000 on 15.03.2027",
    confirmationDate: "20 November 2026",
    auditCutoffDate: "31 October 2026",
  },
  {
    id: "time-barred-39-months",
    label: "39-Month Old Time-Barred Supply Debt Revival (s.25(3) Promise)",
    badge: "Section 25(3) Revival",
    creditorName: "Narmada Polymer & Packaging Industries LLP",
    creditorGstin: "24AABFN3920K1Z2",
    creditorAddress: "GIDC Phase III, Vatva, Ahmedabad, Gujarat - 382445",
    creditorOfficer: "Pranav Mehta, Credit Controller",
    debtorName: "Apex Consumer Foods & Beverages Limited",
    debtorGstin: "24AAACA4412R1Z9",
    debtorAddress: "804, Corporate Square, SG Highway, Ahmedabad, Gujarat - 380054",
    debtorSignatory: "Rohan Shah (Chief Financial Officer)",
    principalDue: 1120000,
    interestDue: 280000,
    invoiceSummary: "NPP/23-24/0145 dated 04.08.2023 (₹6,10,000) & NPP/23-24/0198 dated 19.08.2023 (₹5,10,000)",
    originalDueDate: "18 August 2023",
    partPaymentAmount: 150000,
    partPaymentRef: "RTGS UTR ICIC2611190023114 dated 19.11.2026",
    installmentPlan: "4 equal monthly installments of ₹3,50,000 payable on the 10th of each month from December 2026 to March 2027",
    confirmationDate: "20 November 2026",
    auditCutoffDate: "31 October 2026",
  },
  {
    id: "saas-distributor-partpay",
    label: "Distributor Part-Payment Endorsement & Ledger Lock (s.19)",
    badge: "Section 19 Receipt",
    creditorName: "Shakti Agrochemicals & Crop Science Ltd.",
    creditorGstin: "07AAACS5521Q1Z7",
    creditorAddress: "Plot 14, Okhla Industrial Estate Phase I, New Delhi - 110020",
    creditorOfficer: "Ananya Verma, Legal & Credit Operations Head",
    debtorName: "GreenHarvest Agri-Distributors Pvt. Ltd.",
    debtorGstin: "09AAACG7710L1Z1",
    debtorAddress: "12, Mandi Road, Meerut, Uttar Pradesh - 250001",
    debtorSignatory: "Mahesh Agarwal (Managing Director)",
    principalDue: 860000,
    interestDue: 154800,
    invoiceSummary: "SAC/24-25/0310 dated 10.05.2024 (₹4,60,000) & SAC/24-25/0355 dated 24.05.2024 (₹4,00,000)",
    originalDueDate: "09 June 2024",
    partPaymentAmount: 100000,
    partPaymentRef: "Cheque No. 448102 / NEFT UTR SBIN261115009182 dated 15.11.2026",
    installmentPlan: "₹3,00,000 on 05.12.2026; ₹3,00,000 on 05.01.2027; ₹3,14,800 on 05.02.2027",
    confirmationDate: "20 November 2026",
    auditCutoffDate: "31 October 2026",
  },
];

function formatInr(val: number): string {
  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(Math.max(0, Math.round(val)));
}

export default function LimitationTemplateWorkspace() {
  const [activeTab, setActiveTab] = useState<TemplateTab>("s18_letter");
  const [selectedPresetId, setSelectedPresetId] = useState<string>(PRESETS[0].id);
  const [form, setForm] = useState<LimitationPreset>(PRESETS[0]);
  const [copied, setCopied] = useState(false);

  const totalBalance = form.principalDue + form.interestDue;

  const applyPreset = (preset: LimitationPreset) => {
    setSelectedPresetId(preset.id);
    setForm(preset);
    if (preset.id === "time-barred-39-months") {
      setActiveTab("s25_3_revival");
    } else if (preset.id === "saas-distributor-partpay") {
      setActiveTab("s19_part_pay");
    } else {
      setActiveTab("s18_letter");
    }
  };

  const updateField = <K extends keyof LimitationPreset>(key: K, value: LimitationPreset[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const generatedText = useMemo(() => {
    if (activeTab === "s18_letter") {
      return `ON THE LETTERHEAD OF DEBTOR / STATUTORY BALANCE CONFIRMATION CUM SECTION 18 ACKNOWLEDGMENT

Date: ${form.confirmationDate}
Audit / Ledger Cut-off Date: ${form.auditCutoffDate}

To,
${form.creditorName}
(${form.creditorOfficer})
${form.creditorAddress}
GSTIN: ${form.creditorGstin}

Subject: Unconditional Confirmation of Closing Ledger Balance & Acknowledgment of Subsisting Debt Liability under Section 18 of the Limitation Act, 1963

Dear Sir/Madam,

1. With reference to our ongoing commercial account and your statement of account as of ${form.auditCutoffDate}, we, ${form.debtorName} (GSTIN: ${form.debtorGstin}), having our registered/business address at ${form.debtorAddress}, hereby unconditionally verify, reconcile, and confirm that an aggregate sum of ₹${formatInr(totalBalance)}/- (comprising Principal of ₹${formatInr(form.principalDue)}/- and accrued contractual interest/charges of ₹${formatInr(form.interestDue)}/-) is due, payable, and outstanding from us to ${form.creditorName}.

2. The aforesaid confirmed balance arises out of undisputed Tax Invoices / Purchase Orders, specifically: ${form.invoiceSummary} (Original Due Date: ${form.originalDueDate}), against which goods/services were duly received without any defect or pre-existing dispute.

3. EXPRESS SECTION 18 ACKNOWLEDGMENT OF SUBSISTING LIABILITY:
This confirmation is executed deliberately and unconditionally as an acknowledgment in writing of our subsisting jural relationship as debtor and liability to pay the aforesaid sum of ₹${formatInr(totalBalance)}/- within the meaning of Section 18 of the Limitation Act, 1963, prior to the expiry of the prescribed limitation period, thereby giving rise to a fresh period of limitation from the date of signing/transmission hereof.

4. We further undertake to liquidate the confirmed outstanding dues without demur or set-off as per the mutually agreed schedule.

For and on behalf of ${form.debtorName}

_________________________________________
Name: ${form.debtorSignatory}
Designation & Company Rubber Stamp: _______________________
Date & Place of Signing: ${form.confirmationDate}
Official Email ID: _______________________________________`;
    }

    if (activeTab === "s18_email_wa") {
      return `====================================================================
PART A: CORPORATE AR RECONCILIATION EMAIL (DESIGNED FOR SECTION 18 REPLY)
====================================================================
Subject: Statutory Audit Balance Confirmation (Cut-off ${form.auditCutoffDate}) — ${form.debtorName} | Outstanding ₹${formatInr(totalBalance)}/-

Dear ${form.debtorSignatory},

As part of our statutory accounts reconciliation as of ${form.auditCutoffDate}, our books reflect an undisputed closing debit balance of ₹${formatInr(totalBalance)}/- (Principal: ₹${formatInr(form.principalDue)}/- + Interest: ₹${formatInr(form.interestDue)}/-) payable by ${form.debtorName} against Invoices: ${form.invoiceSummary} (Due since ${form.originalDueDate}).

Kindly reply to this email on or before ${form.confirmationDate} confirming:
1. "We confirm the outstanding payable balance of ₹${formatInr(totalBalance)}/- to ${form.creditorName} as correct and subsisting"; AND
2. Your tentative payment release date for the above invoices.

Please note that your email confirmation from an authorised corporate domain constitutes a valid electronic record under Section 4 of the Information Technology Act, 2000 read with Section 18 of the Limitation Act, 1963 and Section 63 of the Bharatiya Sakshya Adhiniyam, 2023.

Regards,
${form.creditorOfficer}
${form.creditorName} | GSTIN: ${form.creditorGstin}

====================================================================
PART B: WHATSAPP BUSINESS REMINDER (TO CAPTURE WRITTEN REPLY)
====================================================================
"Namaste ${form.debtorSignatory}, this is ${form.creditorOfficer} from ${form.creditorName}. For our ${form.auditCutoffDate} audit closure, please reply 'CONFIRMED' to acknowledge the pending ledger balance of ₹${formatInr(totalBalance)}/- against ${form.invoiceSummary} and share your NEFT/RTGS release date. Thank you."`;
    }

    if (activeTab === "s19_part_pay") {
      return `RECEIPT & WRITTEN ACKNOWLEDGMENT OF PART-PAYMENT UNDER SECTION 19 OF THE LIMITATION ACT, 1963

Date: ${form.confirmationDate}
Receipt Reference: S19-ACK-${form.confirmationDate.replace(/\s+/g, "-").toUpperCase()}

1. CREDITOR: ${form.creditorName} (${form.creditorAddress})
2. DEBTOR: ${form.debtorName} (${form.debtorAddress})
3. UNDERLYING INVOICES: ${form.invoiceSummary} (Original Due Date: ${form.originalDueDate})
4. GROSS OUTSTANDING BEFORE PART-PAYMENT: ₹${formatInr(totalBalance)}/- (Principal ₹${formatInr(form.principalDue)}/- + Interest ₹${formatInr(form.interestDue)}/-)

5. PART-PAYMENT RECORDED PRIOR TO EXPIRY OF LIMITATION:
Received a part-payment on account of the above subsisting debt of ₹${formatInr(form.partPaymentAmount)}/- vide ${form.partPaymentRef} from ${form.debtorName}.

6. NET REMAINING BALANCE AFTER PART-PAYMENT:
₹${formatInr(Math.max(0, totalBalance - form.partPaymentAmount))}/-

7. STATUTORY SECTION 19 ACKNOWLEDGMENT OF PAYMENT:
The undersigned Debtor / Authorised Agent expressly confirms that the aforesaid part-payment of ₹${formatInr(form.partPaymentAmount)}/- has been tendered towards partial discharge of the consolidated invoice balance above, prior to expiry of the prescribed period of limitation, and that the remaining balance of ₹${formatInr(Math.max(0, totalBalance - form.partPaymentAmount))}/- remains due and payable. Under Section 19 of the Limitation Act, 1963, this signed/electronic acknowledgment of part-payment computes a fresh 3-year limitation period from the date of payment.

ACKNOWLEDGED BY PAYER / DEBTOR:
Signature: _______________________
Name: ${form.debtorSignatory}
For ${form.debtorName} (With Stamp)

ISSUED BY CREDITOR:
${form.creditorOfficer}, ${form.creditorName}`;
    }

    return `EXPRESS WRITTEN PROMISE TO PAY TIME-BARRED DEBT
(UNDER SECTION 25(3) OF THE INDIAN CONTRACT ACT, 1872)

THIS DEED / WRITTEN PROMISE TO PAY is executed on this ${form.confirmationDate} at India

BY:
${form.debtorName} (GSTIN: ${form.debtorGstin}), having its office at ${form.debtorAddress}, acting through its duly authorised signatory ${form.debtorSignatory} (hereinafter referred to as the "PROMISOR / DEBTOR");

IN FAVOUR OF:
${form.creditorName} (GSTIN: ${form.creditorGstin}), having its office at ${form.creditorAddress}, represented by ${form.creditorOfficer} (hereinafter referred to as the "PROMISEE / CREDITOR").

RECITALS:
A. Whereas the Creditor supplied goods/services to the Debtor under Invoices ${form.invoiceSummary} (Original Due Date: ${form.originalDueDate}), leaving an unpaid balance of ₹${formatInr(totalBalance)}/- (Principal ₹${formatInr(form.principalDue)}/- + Accrued Interest ₹${formatInr(form.interestDue)}/-).
B. Whereas the original three-year period of limitation for filing a recovery suit has elapsed (or is alleged to have elapsed), rendering the said debt time-barred under the Limitation Act, 1963, though the underlying moral and commercial obligation remains unpaid.
C. Whereas the Debtor desires to settle and discharge the said past debt and hereby makes an express, unconditional written promise to pay the same under Section 25(3) of the Indian Contract Act, 1872, which constitutes a valid, binding, and freshly enforceable contract without the requirement of fresh consideration.

NOW THIS WRITING WITNESSETH AS FOLLOWS:
1. EXPRESS & UNCONDITIONAL PROMISE TO PAY (SECTION 25(3) CONTRACT ACT):
In consideration of the past supply and the Creditor's forbearance from immediate credit-bureau/trade-association reporting, the Debtor hereby expressly, unequivocally, and unconditionally promises in writing to pay the Creditor the ascertained sum of ₹${formatInr(totalBalance)}/- in full and final satisfaction of the above invoices.

2. BINDING INSTALLMENT SCHEDULE:
The Debtor promises to remit the said sum strictly as follows:
${form.installmentPlan}.

3. ACCELERATION & ENFORCEABILITY UPON DEFAULT:
If the Debtor defaults in payment of any single installment by more than seven (7) days, the entire unpaid balance shall immediately become due and payable with 18% p.a. interest, and this signed Section 25(3) Agreement shall be enforceable as a fresh cause of action under Order XXXVII CPC / Commercial Courts Act, 2015 / Section 12A Mediation.

4. INDEPENDENT EXECUTION:
Signed voluntarily without coercion, fraud, or misrepresentation.

FOR PROMISOR / DEBTOR (${form.debtorName}):
Signature: _______________________________
Name & Designation: ${form.debtorSignatory}
Company Seal & Date: ${form.confirmationDate}

WITNESS 1: _______________________   WITNESS 2: _______________________`;
  }, [activeTab, form, totalBalance]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback ignored
    }
  };

  const handleDownloadDoc = () => {
    const html = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>Limitation Section 18 and Section 25(3) Template</title></head>
<body style="font-family: Calibri, Arial, sans-serif; font-size: 11pt; line-height: 1.5; white-space: pre-wrap;">
${generatedText.replace(/</g, "&lt;").replace(/>/g, "&gt;")}
</body>
</html>`;
    const blob = new Blob([html], { type: "application/msword" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${activeTab}-${form.id}.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const tabs: { id: TemplateTab; title: string; sub: string }[] = [
    { id: "s18_letter", title: "1. s.18 Balance Confirmation", sub: "Before 3-Year Expiry" },
    { id: "s18_email_wa", title: "2. Email & WhatsApp Prompt", sub: "BSA s.63 Electronic Ack" },
    { id: "s19_part_pay", title: "3. s.19 Part-Payment Receipt", sub: "Payer Signed Endorsement" },
    { id: "s25_3_revival", title: "4. s.25(3) Debt Revival", sub: "After 3-Year Time-Bar" },
  ];

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 space-y-6">
      {/* Preset Selector */}
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
          Load Commercial Scenario Preset:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
          {PRESETS.map((preset) => {
            const isSelected = selectedPresetId === preset.id;
            return (
              <button
                key={preset.id}
                type="button"
                onClick={() => applyPreset(preset)}
                className={`text-left p-3 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? "bg-slate-900 text-white border-slate-900 shadow-md"
                    : "bg-white text-slate-800 border-slate-200 hover:border-slate-300"
                }`}
              >
                <span
                  className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mb-1.5 ${
                    isSelected
                      ? "bg-[#DC2626] text-white"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {preset.badge}
                </span>
                <p className="text-xs font-bold leading-snug">{preset.label}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* 4-Tab Template Switcher */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-sm"
                  : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
              }`}
            >
              <span className="block text-xs font-extrabold">{tab.title}</span>
              <span
                className={`block text-[11px] mt-0.5 ${
                  isActive ? "text-red-100" : "text-slate-500"
                }`}
              >
                {tab.sub}
              </span>
            </button>
          );
        })}
      </div>

      {/* Editable Form Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 bg-white p-4 rounded-xl border border-slate-200">
        <div>
          <label className="block text-[11px] font-bold text-slate-600 mb-1">
            Creditor Company Name
          </label>
          <input
            type="text"
            value={form.creditorName}
            onChange={(e) => updateField("creditorName", e.target.value)}
            className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
          />
        </div>
        <div>
          <label className="block text-[11px] font-bold text-slate-600 mb-1">
            Debtor Company Name
          </label>
          <input
            type="text"
            value={form.debtorName}
            onChange={(e) => updateField("debtorName", e.target.value)}
            className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
          />
        </div>
        <div>
          <label className="block text-[11px] font-bold text-slate-600 mb-1">
            Debtor Signatory &amp; Title
          </label>
          <input
            type="text"
            value={form.debtorSignatory}
            onChange={(e) => updateField("debtorSignatory", e.target.value)}
            className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
          />
        </div>
        <div>
          <label className="block text-[11px] font-bold text-slate-600 mb-1">
            Principal Unpaid (₹)
          </label>
          <input
            type="number"
            value={form.principalDue}
            onChange={(e) => updateField("principalDue", Number(e.target.value) || 0)}
            className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
          />
        </div>
        <div>
          <label className="block text-[11px] font-bold text-slate-600 mb-1">
            Accrued Interest (₹)
          </label>
          <input
            type="number"
            value={form.interestDue}
            onChange={(e) => updateField("interestDue", Number(e.target.value) || 0)}
            className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
          />
        </div>
        <div>
          <label className="block text-[11px] font-bold text-slate-600 mb-1">
            Original Invoice Due Date
          </label>
          <input
            type="text"
            value={form.originalDueDate}
            onChange={(e) => updateField("originalDueDate", e.target.value)}
            className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-[11px] font-bold text-slate-600 mb-1">
            Invoice Numbers &amp; Dates
          </label>
          <input
            type="text"
            value={form.invoiceSummary}
            onChange={(e) => updateField("invoiceSummary", e.target.value)}
            className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
          />
        </div>
        <div>
          <label className="block text-[11px] font-bold text-slate-600 mb-1">
            {activeTab === "s19_part_pay"
              ? "Part-Payment Amount (₹)"
              : activeTab === "s25_3_revival"
                ? "Installment Schedule"
                : "Audit Cut-off Date"}
          </label>
          {activeTab === "s19_part_pay" ? (
            <input
              type="number"
              value={form.partPaymentAmount}
              onChange={(e) => updateField("partPaymentAmount", Number(e.target.value) || 0)}
              className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
            />
          ) : activeTab === "s25_3_revival" ? (
            <input
              type="text"
              value={form.installmentPlan}
              onChange={(e) => updateField("installmentPlan", e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
            />
          ) : (
            <input
              type="text"
              value={form.auditCutoffDate}
              onChange={(e) => updateField("auditCutoffDate", e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
            />
          )}
        </div>
      </div>

      {/* Live Preview Header & Actions */}
      <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 shadow-lg">
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span className="text-xs font-bold text-slate-200">
              Live Editable Draft &bull; Total Confirmed: ₹{formatInr(totalBalance)}/-
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors cursor-pointer"
            >
              {copied ? "✓ Copied to Clipboard" : "Copy Draft Text"}
            </button>
            <button
              type="button"
              onClick={handleDownloadDoc}
              className="px-3 py-1.5 rounded-lg bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold transition-colors cursor-pointer"
            >
              Download Word (.doc)
            </button>
          </div>
        </div>
        <pre className="p-4 sm:p-6 text-xs sm:text-[13px] text-slate-100 font-mono whitespace-pre-wrap leading-relaxed max-h-[460px] overflow-y-auto">
          {generatedText}
        </pre>
      </div>
    </div>
  );
}
