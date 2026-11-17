"use client";

import React, { useMemo, useState } from "react";

interface TextilePreset {
  id: string;
  label: string;
  badge: string;
  supplierName: string;
  supplierUdyam: string;
  supplierGSTIN: string;
  supplierAddress: string;
  supplierEmail: string;
  buyerName: string;
  buyerDirectors: string;
  buyerGSTIN: string;
  buyerAddress: string;
  buyerContact: string;
  brokerName: string;
  brokerFirm: string;
  brokerMarket: string;
  brokerAddress: string;
  brokerContact: string;
  associationName: string;
  includeAssociationCC: boolean;
  includeJobWorkLien: boolean;
  includeChequeClause: boolean;
  bijakSchedule: string;
  baleInspectionDays: number;
  principalAmount: number;
  creditDays: number;
  interestRate: number;
  noticeDays: number;
  advocateName: string;
  advocateEnrolment: string;
  advocateOffice: string;
  noticeRef: string;
  noticeDate: string;
}

const PRESETS: TextilePreset[] = [
  {
    id: "surat-bhiwandi-fabric-mill",
    label: "Surat / Bhiwandi Fabric Mill (Bijak + LR + Adatiya Co-Noticee)",
    badge: "Grey & Finished Fabric",
    supplierName: "Shree Mahavir Synthetics & Weaving Mills Pvt. Ltd.",
    supplierUdyam: "UDYAM-GJ-22-0048192",
    supplierGSTIN: "24AAACS7192K1Z4",
    supplierAddress: "Plot 118, Pandesara GIDC, Surat, Gujarat - 394221",
    supplierEmail: "accounts@mahavirsynthetics.in",
    buyerName: "M/s Vardhman Fashion Hub Pvt. Ltd.",
    buyerDirectors: "Mr. Rajesh Jain & Mr. Ankit Jain (Directors / Authorised Signatories)",
    buyerGSTIN: "07AABCV4421M1Z9",
    buyerAddress: "Shop 42, Katra Asharfi, Chandni Chowk, Delhi - 110006",
    buyerContact: "accounts@vardhmanfashion.in | +91-98110-XXXXX",
    brokerName: "Shri Rameshbhai Patel (Introducing Commission Agent / Adatiya)",
    brokerFirm: "Patel Textile Agency",
    brokerMarket: "Ring Road Textile Market, Surat",
    brokerAddress: "Office 309, Millennium Textile Market-2, Ring Road, Surat - 395002",
    brokerContact: "patelagency.surat@gmail.com | +91-98251-XXXXX",
    associationName: "Federation of Surat Textile Traders Association (FOSTTA) & Delhi Hindustani Mercantile Association",
    includeAssociationCC: true,
    includeJobWorkLien: false,
    includeChequeClause: true,
    bijakSchedule:
      "1) Bijak No. SM/26-27/412 dt. 10.07.2026 | 14 Bales Polyester Georgette | LR No. VRL-884192 dt. 10.07.2026 | E-Way Bill: 241988120941 | ₹4,85,000\n2) Bijak No. SM/26-27/449 dt. 22.07.2026 | 12 Bales Dyed Crepe | LR No. VRL-891044 dt. 22.07.2026 | E-Way Bill: 241994001822 | ₹3,95,000",
    baleInspectionDays: 7,
    principalAmount: 880000,
    creditDays: 45,
    interestRate: 21.75,
    noticeDays: 15,
    advocateName: "Anuj Anand Malik",
    advocateEnrolment: "D/2194/2014",
    advocateOffice: "AMA Legal Solutions, Sector 57, Gurugram / New Delhi Chambers",
    noticeRef: "LR/TEX/2026/167-A",
    noticeDate: "17 November 2026",
  },
  {
    id: "tirupur-garment-rejection",
    label: "Tirupur / Noida Garment Maker (Rejecting Late 90-Day Return Claim)",
    badge: "Garment Return Bar",
    supplierName: "Kaveri Knitwear & Apparel Exports",
    supplierUdyam: "UDYAM-TN-28-0019481",
    supplierGSTIN: "33AAFFK8821P1Z2",
    supplierAddress: "14, Avinashi Road, Angeripalayam, Tirupur, Tamil Nadu - 641603",
    supplierEmail: "finance@kaveriknitwear.com",
    buyerName: "UrbanThread Lifestyle Retail LLP",
    buyerDirectors: "Mr. Vikram Malhotra & Ms. Priya Kapoor (Designated Partners)",
    buyerGSTIN: "27AABCU9912N1Z7",
    buyerAddress: "Unit 8, Lower Parel Industrial Estate, Mumbai - 400013",
    buyerContact: "procurement@urbanthread.in | +91-98200-XXXXX",
    brokerName: "Mr. Suresh Bansal (Sourcing & Buying Commission Agent)",
    brokerFirm: "Bansal Apparel Sourcing Associates",
    brokerMarket: "Mumbai / Tirupur Domestic Garment Corridor",
    brokerAddress: "204, Trade Centre, Dadar West, Mumbai - 400028",
    brokerContact: "suresh@bansalsourcing.in | +91-98192-XXXXX",
    associationName: "Tirupur Exporters' Association (TEA) & Clothing Manufacturers Association of India (CMAI)",
    includeAssociationCC: true,
    includeJobWorkLien: false,
    includeChequeClause: false,
    bijakSchedule:
      "1) Tax Invoice KK/26-27/108 dt. 05.08.2026 | 4,200 Pcs Combed Cotton Polo Tees | LR No. TCI-440192 dt. 05.08.2026 | E-Way Bill: 331048291022 | ₹11,40,000",
    baleInspectionDays: 7,
    principalAmount: 1140000,
    creditDays: 30,
    interestRate: 21.75,
    noticeDays: 10,
    advocateName: "Anuj Anand Malik",
    advocateEnrolment: "D/2194/2014",
    advocateOffice: "AMA Legal Solutions, New Delhi Chambers",
    noticeRef: "LR/TEX/2026/167-B",
    noticeDate: "17 November 2026",
  },
  {
    id: "dyeing-process-house-lien",
    label: "Dyeing & Printing Process House (Job-Work Dues + Sec 170 Lien)",
    badge: "Job-Work Fabric Lien",
    supplierName: "Navrang Dyeing & Printing Process House",
    supplierUdyam: "UDYAM-GJ-22-0077231",
    supplierGSTIN: "24AABFN3319Q1Z8",
    supplierAddress: "Plot 64, Sachin GIDC, Surat, Gujarat - 394230",
    supplierEmail: "billing@navrangprocess.in",
    buyerName: "M/s Shakti Fabtex Traders",
    buyerDirectors: "Mr. Deepak Agrawal (Proprietor)",
    buyerGSTIN: "24AEFPA9918K1Z1",
    buyerAddress: "212, Jash Textile Market, Ring Road, Surat - 395002",
    buyerContact: "shaktifabtex@gmail.com | +91-98791-XXXXX",
    brokerName: "Shri Mahesh Sharma (Grey & Job-Work Broker)",
    brokerFirm: "Sharma Yarn & Process Consultancy",
    brokerMarket: "Surat Textile Process Cluster",
    brokerAddress: "105, Silk City Market, Ring Road, Surat - 395002",
    brokerContact: "mahesh.broker@gmail.com | +91-98254-XXXXX",
    associationName: "South Gujarat Textile Processors Association (SGTPA)",
    includeAssociationCC: true,
    includeJobWorkLien: true,
    includeChequeClause: true,
    bijakSchedule:
      "1) Job-Work Bill ND/26-27/892 dt. 18.08.2026 | Dyeing & Mercerizing of 38,000 Meters Grey Cotton | Delivery Challan No. DC-4419 | ₹5,70,000 (14,000 Meters currently held in Process House Godown under Sec. 170 Lien)",
    baleInspectionDays: 7,
    principalAmount: 570000,
    creditDays: 30,
    interestRate: 21.75,
    noticeDays: 7,
    advocateName: "Anuj Anand Malik",
    advocateEnrolment: "D/2194/2014",
    advocateOffice: "AMA Legal Solutions, New Delhi Chambers",
    noticeRef: "LR/TEX/2026/167-C",
    noticeDate: "17 November 2026",
  },
];

function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount || 0);
}

export default function TextileNoticeWorkspace() {
  const [selectedPresetId, setSelectedPresetId] = useState<string>(PRESETS[0].id);
  const [form, setForm] = useState<TextilePreset>(PRESETS[0]);
  const [copied, setCopied] = useState(false);

  const handlePresetChange = (preset: TextilePreset) => {
    setSelectedPresetId(preset.id);
    setForm(preset);
    setCopied(false);
  };

  const updateField = <K extends keyof TextilePreset>(key: K, value: TextilePreset[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const estimated90DayInterest = useMemo(() => {
    return Math.round((form.principalAmount * (form.interestRate / 100) * 90) / 365);
  }, [form.principalAmount, form.interestRate]);

  const totalClaim = form.principalAmount + estimated90DayInterest;

  const noticeText = useMemo(() => {
    const lienClause = form.includeJobWorkLien
      ? `\n6. EXERCISE OF BAILEE'S PARTICULAR LIEN (SECTION 170, INDIAN CONTRACT ACT, 1872): Take further notice that our Client has lawfully exercised its statutory Bailee's Particular Lien under Section 170 of the Indian Contract Act, 1872 over the processed fabric/stock currently lying in our Client's godown against unpaid job-work charges. Unless the entire outstanding principal and statutory interest are cleared within ${form.noticeDays} days, our Client shall be constrained to exercise its statutory right of sale after due notice and adjust the proceeds toward your overdue ledger.\n`
      : "";

    const chequeClause = form.includeChequeClause
      ? `\n7. DISHONOUR / PRESENTATION OF SECURITY CHEQUES & HUNDIS (SECTION 138 NI ACT, 1881): Any Post-Dated Cheques (PDCs), security cheques, or trade Hundis issued against the aforesaid Bijaks/Invoices shall be presented for encashment toward the admitted crystallized liability, and any dishonour shall entail criminal prosecution under Section 138 read with Section 141 of the Negotiable Instruments Act, 1881.\n`
      : "";

    const associationCopy = form.includeAssociationCC
      ? `\nCOPY FOR INFORMATION & TRADE RECORD TO:\nThe President / Dispute Resolution Committee (Panch / Mahajan),\n${form.associationName}\n(For trade-circle record regarding non-payment of verified Bijak/LR dues brokered through Noticee No. 2.)\n`
      : "";

    return `REGD. A.D. / SPEED POST / EMAIL / WHATSAPP (UNDER BSA 2023 SECTION 63)
WITHOUT PREJUDICE

Ref. No.: ${form.noticeRef}
Date: ${form.noticeDate}

TO,
NOTICEE NO. 1 (PRINCIPAL BUYER):
${form.buyerName}
Through: ${form.buyerDirectors}
GSTIN: ${form.buyerGSTIN}
Address: ${form.buyerAddress}
Email / WhatsApp: ${form.buyerContact}

AND TO,
NOTICEE NO. 2 / PROFORMA PARTY (INTRODUCING TEXTILE BROKER / ADATIYA):
${form.brokerName}
C/o ${form.brokerFirm} (${form.brokerMarket})
Address: ${form.brokerAddress}
Email / WhatsApp: ${form.brokerContact}

SUBJECT: JOINT STATUTORY LEGAL DEMAND NOTICE FOR RECOVERY OF UNPAID TEXTILE / GARMENT DUES OF ${formatINR(form.principalAmount)} PLUS STATUTORY INTEREST UNDER MSMED ACT s.16, SALE OF GOODS ACT s.42 (BALE INSPECTION EXPIRY BAR), SECTION 43B(h) INCOME TAX INTIMATION & BROKER ACCOUNTABILITY.

Sir / Madam,

Under instructions from and on behalf of our Client, ${form.supplierName} (GSTIN: ${form.supplierGSTIN}, MSME Udyam Reg. No.: ${form.supplierUdyam}), having its registered unit at ${form.supplierAddress} (Email: ${form.supplierEmail}), we hereby serve upon you the following Joint Legal Demand Notice:

1. FACTUAL BACKGROUND & SCHEDULE OF BIJAK / INVOICE / TRANSPORT LR / E-WAY BILL:
That Noticee No. 1 approached our Client through the active mediation, introduction, and trade assurance of Noticee No. 2 (${form.brokerName} of ${form.brokerFirm}) for the supply/processing of textile goods. Pursuant to confirmed orders, our Client supplied and dispatched goods against the following undisputed Bijaks, Tax Invoices, Lorry Receipts (LR), and GST E-Way Bills:

${form.bijakSchedule}

Total Principal Outstanding: ${formatINR(form.principalAmount)} (Agreed Credit Period: ${form.creditDays} Days).

2. ACCEPTANCE OF GOODS & STATUTORY ${form.baleInspectionDays}-DAY BALE INSPECTION EXPIRY BAR (SECTION 42, SALE OF GOODS ACT, 1930):
That the goods were duly delivered via common carrier and acknowledged by Noticee No. 1 without any demur or protest. As per settled Indian textile trade usage and the express printed terms on our Client's Bijak/Invoice, any shortage, shade variation, or quality objection had to be notified in writing within ${form.baleInspectionDays} days of physical receipt prior to cutting, dyeing, or resale. Having retained, cut, or commercially deployed the goods well beyond ${form.baleInspectionDays} days without contemporaneous written rejection, Noticee No. 1 is legally deemed to have accepted the goods under Section 42 of the Sale of Goods Act, 1930, and is strictly estopped from raising belated, afterthought "colour-bleeding", "shrinkage", or "unsold stock return" excuses.

3. ACCOUNTABILITY OF NOTICEE NO. 2 (INTRODUCING BROKER / ADATIYA — CONTRACT ACT ss. 182–238):
That Noticee No. 2 is joined herein as a formal Co-Noticee / Proforma Party because the entire credit supply was extended on the specific introduction, trade verification, and brokerage commitment of Noticee No. 2, who earned/claimed dalali (commission) on the transaction. Under Sections 182–238 of the Indian Contract Act, 1872 and established Mahajan/Mandi trade custom, Noticee No. 2 is duty-bound to verify the buyer's creditworthiness, facilitate immediate ledger reconciliation, and ensure settlement without aiding any evasion or "party uth gayi" default.

4. STATUTORY INTEREST UNDER SECTION 16 MSMED ACT & INCOME TAX SECTION 43B(h) DISALLOWANCE WARNING:
That our Client is a registered Micro/Small Enterprise under the MSMED Act, 2006 (Udyam No.: ${form.supplierUdyam}). Under Section 15 of the MSMED Act, no credit period can exceed 45 days. Delay attracts mandatory compound interest with monthly rests at 3 times the RBI Bank Rate (currently ${form.interestRate}% p.a., amounting to approx. ${formatINR(estimated90DayInterest)} over 90 days, bringing total dues to ${formatINR(totalClaim)}).
FURTHER TAKE NOTICE under Section 43B(h) of the Income Tax Act, 1961 that any sum payable to our Client beyond the 45-day statutory limit is strictly DISALLOWED as a business expense in Noticee No. 1's Income Tax Return and will be added back to your taxable income, attracting ~30% tax plus interest and audit reporting in Form 3CD Clause 22.

5. FINAL DEMAND (${form.noticeDays}-DAY COMPLIANCE WINDOW):
Noticee No. 1 is hereby called upon to remit ${formatINR(form.principalAmount)} along with accrued MSMED s.16 compound interest within ${form.noticeDays} days of receipt of this notice via RTGS/NEFT, failing which our Client shall initiate: (a) MSME Samadhaan / MSEFC reference under Section 18 MSMED Act; (b) Summary Suit under Order XXXVII CPC / Commercial Suit; and (c) Reference to the concerned Textile Trade Association / Mahajan Panch. Noticee No. 2 is called upon to coordinate immediate settlement and confirm ledger verification within 72 hours.
${lienClause}${chequeClause}${associationCopy}
Issued under instructions,

${form.advocateName}
Advocate (Enrolment No.: ${form.advocateEnrolment})
${form.advocateOffice}`;
  }, [form, estimated90DayInterest, totalClaim]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(noticeText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback ignored if clipboard blocked
    }
  };

  const handleDownloadDoc = () => {
    const htmlContent = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Textile Joint Demand Notice</title></head><body style="font-family: 'Times New Roman', serif; font-size: 12pt; line-height: 1.5; white-space: pre-wrap;">${noticeText
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")}</body></html>`;
    const blob = new Blob([htmlContent], { type: "application/msword" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `textile-buyer-broker-joint-notice-${form.id}.doc`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Preset Selector */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Select Textile Trade Scenario Preset
          </span>
          <span className="text-[11px] font-semibold text-[#DC2626]">
            Auto-populates Bijak, LR, s.42 &amp; Broker Clauses
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {PRESETS.map((preset) => {
            const active = selectedPresetId === preset.id;
            return (
              <button
                key={preset.id}
                type="button"
                onClick={() => handlePresetChange(preset)}
                className={`text-left p-3.5 rounded-xl border transition-all ${
                  active
                    ? "bg-slate-900 text-white border-slate-900 shadow-md"
                    : "bg-white text-slate-800 border-slate-200 hover:border-[#DC2626]"
                }`}
              >
                <span
                  className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded mb-1.5 ${
                    active ? "bg-[#DC2626] text-white" : "bg-red-50 text-[#DC2626]"
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

      {/* Editor + Live Preview Split */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
        {/* Form Inputs */}
        <div className="xl:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 space-y-4">
          <div className="border-b border-slate-200 pb-2.5">
            <p className="text-sm font-extrabold text-slate-900">
              Customize Party, Broker &amp; Bijak Details
            </p>
            <p className="text-[11px] text-slate-500">
              All edits update the statutory notice draft in real time.
            </p>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1">
                Supplier / Mill / Dyeing Unit Name
              </label>
              <input
                type="text"
                value={form.supplierName}
                onChange={(e) => updateField("supplierName", e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:border-[#DC2626]"
              />
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  MSME Udyam No.
                </label>
                <input
                  type="text"
                  value={form.supplierUdyam}
                  onChange={(e) => updateField("supplierUdyam", e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:border-[#DC2626]"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Supplier GSTIN
                </label>
                <input
                  type="text"
                  value={form.supplierGSTIN}
                  onChange={(e) => updateField("supplierGSTIN", e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:border-[#DC2626]"
                />
              </div>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">
                Noticee #1: Defaulting Buyer Firm
              </label>
              <input
                type="text"
                value={form.buyerName}
                onChange={(e) => updateField("buyerName", e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:border-[#DC2626]"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">
                Noticee #2: Introducing Broker / Adatiya
              </label>
              <input
                type="text"
                value={form.brokerName}
                onChange={(e) => updateField("brokerName", e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:border-[#DC2626]"
              />
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Broker Firm / Agency
                </label>
                <input
                  type="text"
                  value={form.brokerFirm}
                  onChange={(e) => updateField("brokerFirm", e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:border-[#DC2626]"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Principal Due (INR)
                </label>
                <input
                  type="number"
                  value={form.principalAmount}
                  onChange={(e) => updateField("principalAmount", Number(e.target.value) || 0)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:border-[#DC2626]"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Inspection (Days)
                </label>
                <input
                  type="number"
                  value={form.baleInspectionDays}
                  onChange={(e) => updateField("baleInspectionDays", Number(e.target.value) || 7)}
                  className="w-full px-2.5 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:border-[#DC2626]"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Credit (Days)
                </label>
                <input
                  type="number"
                  value={form.creditDays}
                  onChange={(e) => updateField("creditDays", Number(e.target.value) || 45)}
                  className="w-full px-2.5 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:border-[#DC2626]"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Notice (Days)
                </label>
                <input
                  type="number"
                  value={form.noticeDays}
                  onChange={(e) => updateField("noticeDays", Number(e.target.value) || 15)}
                  className="w-full px-2.5 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:border-[#DC2626]"
                />
              </div>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">
                Bijak / Invoice / LR / E-Way Bill Schedule
              </label>
              <textarea
                rows={3}
                value={form.bijakSchedule}
                onChange={(e) => updateField("bijakSchedule", e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:border-[#DC2626] font-mono text-[11px]"
              />
            </div>

            {/* Optional Statutory Clause Toggles */}
            <div className="space-y-2 pt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.includeAssociationCC}
                  onChange={(e) => updateField("includeAssociationCC", e.target.checked)}
                  className="rounded border-slate-300 text-[#DC2626] focus:ring-[#DC2626]"
                />
                <span className="font-semibold text-slate-700">
                  Include CC to Textile Market Association (Mahajan / Panch)
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.includeJobWorkLien}
                  onChange={(e) => updateField("includeJobWorkLien", e.target.checked)}
                  className="rounded border-slate-300 text-[#DC2626] focus:ring-[#DC2626]"
                />
                <span className="font-semibold text-slate-700">
                  Include Contract Act s.170 Bailee&apos;s Lien (Dyeing / Job-Work)
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.includeChequeClause}
                  onChange={(e) => updateField("includeChequeClause", e.target.checked)}
                  className="rounded border-slate-300 text-[#DC2626] focus:ring-[#DC2626]"
                />
                <span className="font-semibold text-slate-700">
                  Include s.138 NI Act Security Cheque / Hundi Warning
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* Live Preview */}
        <div className="xl:col-span-7 bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="bg-slate-900 text-white px-4 sm:px-5 py-3.5 flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-red-400 font-bold block">
                Live Advocate-Vetted Draft
              </span>
              <p className="text-xs sm:text-sm font-bold text-white">
                Joint Demand: {formatINR(form.principalAmount)} + ~{formatINR(estimated90DayInterest)} MSMED Interest
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopy}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white border border-slate-700 transition-colors"
              >
                {copied ? "Copied!" : "Copy Draft"}
              </button>
              <button
                type="button"
                onClick={handleDownloadDoc}
                className="px-3 py-1.5 rounded-lg bg-[#DC2626] hover:bg-[#B91C1C] text-xs font-bold text-white transition-colors"
              >
                Download .doc
              </button>
            </div>
          </div>

          <div className="p-4 sm:p-6 bg-slate-50/70 max-h-[620px] overflow-y-auto">
            <pre className="whitespace-pre-wrap font-serif text-xs sm:text-[13px] leading-relaxed text-slate-800 bg-white border border-slate-200 rounded-xl p-4 sm:p-6 shadow-inner">
              {noticeText}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
