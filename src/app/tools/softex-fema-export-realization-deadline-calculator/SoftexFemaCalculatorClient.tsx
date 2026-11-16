"use client";

import React, { useState, useId, useMemo } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

type ExportCategory = "software_softex" | "goods_shipping_bill" | "services_non_softex";
type ExporterStatus = "normal_5pct" | "status_holder_10pct";
type ForeignCurrency = "USD" | "EUR" | "GBP" | "AED" | "SGD" | "CAD" | "AUD" | "INR";

interface FXRateMap {
  [key: string]: number;
}

const DEFAULT_FX_RATES: FXRateMap = {
  USD: 86.5,
  EUR: 92.5,
  GBP: 109.5,
  AED: 23.55,
  SGD: 64.2,
  CAD: 62.4,
  AUD: 56.1,
  INR: 1.0,
};

interface BatchExportRow {
  invoiceNumber: string;
  clientName: string;
  country: string;
  invoiceDate: string;
  currency: ForeignCurrency;
  invoiceAmount: number;
  realizedAmount: number;
  hasLegalNotice: boolean;
}

const SAMPLE_CSV = `InvoiceNumber,ClientName,Country,InvoiceDate,Currency,InvoiceAmount,RealizedAmount,HasLegalNotice
INV-2026-081,Acme Cloud Systems LLC,United States,2026-02-15,USD,45000,0,No
INV-2026-104,TechFlow Solutions Ltd,United Kingdom,2026-04-10,GBP,28000,8000,Yes
INV-2026-119,Al-Noor Digital FZ-LLC,UAE (Dubai),2026-06-20,AED,115000,0,No
INV-2026-142,SingaLogic Pte Ltd,Singapore,2026-08-05,SGD,36000,12000,No`;

function parseISODate(dateStr: string): Date {
  const parts = dateStr.trim().split("-").map(Number);
  if (parts.length !== 3 || !parts[0] || !parts[1] || !parts[2]) {
    return new Date(2026, 1, 15);
  }
  return new Date(parts[0], parts[1] - 1, parts[2]);
}

function toISODate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function formatDateIN(date: Date): string {
  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function addCalendarMonths(date: Date, months: number): Date {
  const result = new Date(date.getTime());
  const expectedMonth = (result.getMonth() + months) % 12;
  result.setMonth(result.getMonth() + months);
  if (result.getMonth() !== expectedMonth) {
    result.setDate(0);
  }
  return result;
}

function diffDays(later: Date, earlier: Date): number {
  const utc1 = Date.UTC(earlier.getFullYear(), earlier.getMonth(), earlier.getDate());
  const utc2 = Date.UTC(later.getFullYear(), later.getMonth(), later.getDate());
  return Math.round((utc2 - utc1) / (1000 * 60 * 60 * 24));
}

function formatINR(val: number): string {
  return "₹" + Math.round(val).toLocaleString("en-IN");
}

function formatForeign(val: number, currency: ForeignCurrency): string {
  const symMap: Record<ForeignCurrency, string> = {
    USD: "$",
    EUR: "€",
    GBP: "£",
    AED: "AED ",
    SGD: "S$",
    CAD: "C$",
    AUD: "A$",
    INR: "₹",
  };
  return (symMap[currency] || "") + Math.round(val).toLocaleString("en-IN");
}

export default function SoftexFemaCalculatorClient() {
  const [activeTab, setActiveTab] = useState<"single" | "batch">("single");

  // Single Invoice Inputs
  const [exportCategory, setExportCategory] = useState<ExportCategory>("software_softex");
  const [invoiceDateStr, setInvoiceDateStr] = useState<string>("2026-02-15");
  const [currency, setCurrency] = useState<ForeignCurrency>("USD");
  const [customFxRate, setCustomFxRate] = useState<number>(DEFAULT_FX_RATES["USD"]);
  const [invoiceAmount, setInvoiceAmount] = useState<number>(45000);
  const [realizedAmount, setRealizedAmount] = useState<number>(0);
  const [exporterStatus, setExporterStatus] = useState<ExporterStatus>("normal_5pct");
  const [annualRealizedProceedsINR, setAnnualRealizedProceedsINR] = useState<number>(35000000); // 3.5 Crore INR
  const [hasLegalNotice, setHasLegalNotice] = useState<boolean>(false);
  const [hasEcgcCover, setHasEcgcCover] = useState<boolean>(false);
  const [buyerCondition, setBuyerCondition] = useState<"commercial_dispute" | "insolvent" | "untraceable" | "delayed">("commercial_dispute");

  // Batch CSV Inputs
  const [csvText, setCsvText] = useState<string>(SAMPLE_CSV);
  const [batchAnnualProceedsINR, setBatchAnnualProceedsINR] = useState<number>(50000000); // 5 Crore
  const [batchExporterStatus, setBatchExporterStatus] = useState<ExporterStatus>("normal_5pct");

  // Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  // IDs
  const exportCatId = useId();
  const invDateId = useId();
  const currId = useId();
  const fxId = useId();
  const invAmtId = useId();
  const realAmtId = useId();
  const statusId = useId();
  const annualId = useId();
  const buyerCondId = useId();

  // FX sync
  const handleCurrencyChange = (c: ForeignCurrency) => {
    setCurrency(c);
    setCustomFxRate(DEFAULT_FX_RATES[c] || 1.0);
  };

  // Calculations for Single Mode
  const calculation = useMemo(() => {
    const invDate = parseISODate(invoiceDateStr);
    const deadline9M = addCalendarMonths(invDate, 9);
    const today = new Date(2026, 10, 16); // Local reference date Nov 16, 2026
    const daysRemaining = diffDays(deadline9M, today);
    const isOverdue = daysRemaining < 0;

    const outstandingForeign = Math.max(0, invoiceAmount - realizedAmount);
    const outstandingINR = outstandingForeign * customFxRate;

    const writeOffCapPct = exporterStatus === "status_holder_10pct" ? 10 : 5;
    const maxPermissibleWriteOffINR = annualRealizedProceedsINR * (writeOffCapPct / 100);
    const utilizationPct = annualRealizedProceedsINR > 0 ? (outstandingINR / annualRealizedProceedsINR) * 100 : 0;
    const withinWriteOffCap = outstandingINR <= maxPermissibleWriteOffINR;

    // EDPMS Alert Status
    let edpmsStatus: "HEALTHY" | "CRITICAL_WINDOW" | "OVERDUE_CAUTION";
    if (daysRemaining > 90) {
      edpmsStatus = "HEALTHY";
    } else if (daysRemaining >= 0) {
      edpmsStatus = "CRITICAL_WINDOW"; // within 90 days of 9-month expiry
    } else {
      edpmsStatus = "OVERDUE_CAUTION";
    }

    // Write-Off Eligibility Determination
    let writeOffVerdict: "ELIGIBLE_AD_BANK" | "LEGAL_NOTICE_DEFICIT" | "EXCEEDS_CAP_RBI_REQUIRED" | "NOT_APPLICABLE_HEALTHY";
    if (!isOverdue && daysRemaining > 30) {
      writeOffVerdict = "NOT_APPLICABLE_HEALTHY";
    } else if (!hasLegalNotice) {
      writeOffVerdict = "LEGAL_NOTICE_DEFICIT";
    } else if (withinWriteOffCap) {
      writeOffVerdict = "ELIGIBLE_AD_BANK";
    } else {
      writeOffVerdict = "EXCEEDS_CAP_RBI_REQUIRED";
    }

    // Extension Form ETX deadline (up to 6 months beyond 9-month deadline)
    const etxMaxExtensionDate = addCalendarMonths(deadline9M, 6);

    // ECGC Notification cut-off (typically 30 days from agreed due date or max 4 months)
    const ecgcNotificationCutOff = addCalendarMonths(invDate, 4);

    return {
      invDate,
      deadline9M,
      today,
      daysRemaining,
      isOverdue,
      outstandingForeign,
      outstandingINR,
      writeOffCapPct,
      maxPermissibleWriteOffINR,
      utilizationPct,
      withinWriteOffCap,
      edpmsStatus,
      writeOffVerdict,
      etxMaxExtensionDate,
      ecgcNotificationCutOff,
    };
  }, [
    invoiceDateStr,
    invoiceAmount,
    realizedAmount,
    currency,
    customFxRate,
    exporterStatus,
    annualRealizedProceedsINR,
    hasLegalNotice,
  ]);

  // Batch Calculation
  const batchCalculation = useMemo(() => {
    const lines = csvText.trim().split("\n");
    if (lines.length <= 1) return null;

    const rows: (BatchExportRow & {
      deadline9M: Date;
      daysRemaining: number;
      isOverdue: boolean;
      outstandingForeign: number;
      outstandingINR: number;
      edpmsStatus: "HEALTHY" | "CRITICAL_WINDOW" | "OVERDUE_CAUTION";
    })[] = [];

    const today = new Date(2026, 10, 16);

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i]?.trim();
      if (!line) continue;
      const parts = line.split(",").map((s) => s.trim());
      if (parts.length < 8) continue;

      const [invNum, client, ctry, invDateStr, curr, invAmtStr, realAmtStr, legalNoticeStr] = parts;
      const invDate = parseISODate(invDateStr || "2026-01-01");
      const deadline9M = addCalendarMonths(invDate, 9);
      const daysRemaining = diffDays(deadline9M, today);
      const isOverdue = daysRemaining < 0;

      const currTyped = (curr?.toUpperCase() || "USD") as ForeignCurrency;
      const rate = DEFAULT_FX_RATES[currTyped] || 86.5;
      const invAmt = parseFloat(invAmtStr || "0") || 0;
      const realAmt = parseFloat(realAmtStr || "0") || 0;
      const outstandingForeign = Math.max(0, invAmt - realAmt);
      const outstandingINR = outstandingForeign * rate;
      const hasLegal = legalNoticeStr?.toLowerCase() === "yes" || legalNoticeStr?.toLowerCase() === "true";

      let edpmsStatus: "HEALTHY" | "CRITICAL_WINDOW" | "OVERDUE_CAUTION" = "HEALTHY";
      if (daysRemaining < 0) {
        edpmsStatus = "OVERDUE_CAUTION";
      } else if (daysRemaining <= 90) {
        edpmsStatus = "CRITICAL_WINDOW";
      }

      rows.push({
        invoiceNumber: invNum || `INV-${i}`,
        clientName: client || "Client",
        country: ctry || "Foreign",
        invoiceDate: invDateStr || "2026-01-01",
        currency: currTyped,
        invoiceAmount: invAmt,
        realizedAmount: realAmt,
        hasLegalNotice: hasLegal,
        deadline9M,
        daysRemaining,
        isOverdue,
        outstandingForeign,
        outstandingINR,
        edpmsStatus,
      });
    }

    const totalOutstandingINR = rows.reduce((acc, r) => acc + r.outstandingINR, 0);
    const overdueCount = rows.filter((r) => r.isOverdue).length;
    const criticalCount = rows.filter((r) => r.edpmsStatus === "CRITICAL_WINDOW").length;
    const missingLegalNoticeCount = rows.filter((r) => !r.hasLegalNotice).length;

    const capPct = batchExporterStatus === "status_holder_10pct" ? 10 : 5;
    const maxCapINR = batchAnnualProceedsINR * (capPct / 100);
    const portfolioUtilizationPct = batchAnnualProceedsINR > 0 ? (totalOutstandingINR / batchAnnualProceedsINR) * 100 : 0;
    const withinCap = totalOutstandingINR <= maxCapINR;

    return {
      rows,
      totalOutstandingINR,
      overdueCount,
      criticalCount,
      missingLegalNoticeCount,
      capPct,
      maxCapINR,
      portfolioUtilizationPct,
      withinCap,
    };
  }, [csvText, batchAnnualProceedsINR, batchExporterStatus]);

  const copySummaryReport = () => {
    const reportText = `=== RBI FEMA 9-MONTH EXPORT / SOFTEX COMPLIANCE AUDIT ===
Generated: 16 Nov 2026 | LegalRecovery.in
Statutory Authority: RBI Master Direction on Export of Goods & Services (FED Master Direction No. 16/2015-16)

[INVOICE & EXPORT DETAILS]
- Export Type: ${exportCategory === "software_softex" ? "Software / SaaS (STPI/SEZ SOFTEX Form)" : exportCategory === "goods_shipping_bill" ? "Physical Goods (Customs Shipping Bill)" : "Services Export (Non-SOFTEX)"}
- Invoice / Bill Date: ${formatDateIN(calculation.invDate)}
- Total Invoice Value: ${formatForeign(invoiceAmount, currency)}
- Realized Proceeds: ${formatForeign(realizedAmount, currency)}
- Outstanding Balance: ${formatForeign(calculation.outstandingForeign, currency)} (${formatINR(calculation.outstandingINR)})

[STATUTORY 9-MONTH DEADLINE & EDPMS STATUS]
- RBI 9-Month Repatriation Due Date: ${formatDateIN(calculation.deadline9M)}
- Timeline Status: ${calculation.isOverdue ? `OVERDUE BY ${Math.abs(calculation.daysRemaining)} DAYS` : `${calculation.daysRemaining} DAYS REMAINING`}
- EDPMS Risk Rating: ${calculation.edpmsStatus}
- Form ETX Maximum 6-Month Extension Cut-Off: ${formatDateIN(calculation.etxMaxExtensionDate)}

[AD-BANK WRITE-OFF CAP ANALYSIS]
- Exporter Category: ${exporterStatus === "status_holder_10pct" ? "Status Holder (Star Export House - 10% Cap)" : "Normal Exporter (5% Cap)"}
- Preceding Calendar Year Realized Turnover: ${formatINR(annualRealizedProceedsINR)}
- Maximum Permissible Annual Write-off Quota: ${formatINR(calculation.maxPermissibleWriteOffINR)}
- Current Bill Share of Annual Turnover: ${calculation.utilizationPct.toFixed(2)}%
- Within AD-Bank Permissible Limit: ${calculation.withinWriteOffCap ? "YES (Within Delegated Powers)" : "NO (Exceeds 5%/10% Annual Limit)"}

[STATUTORY WRITE-OFF & EDPMS CLOSURE VERDICT]
- Verdict: ${calculation.writeOffVerdict === "ELIGIBLE_AD_BANK" ? "ELIGIBLE FOR AD-BANK SELF WRITE-OFF (Subject to CA Certificate & Incentive Surrender)" : calculation.writeOffVerdict === "LEGAL_NOTICE_DEFICIT" ? "WRITE-OFF BLOCKED: MANDATORY ADVOCATE LEGAL NOTICE DEFICIT" : calculation.writeOffVerdict === "EXCEEDS_CAP_RBI_REQUIRED" ? "EXCEEDS AD-BANK DELEGATION: SPECIAL RBI REGIONAL OFFICE DISPENSATION REQUIRED" : "ACTIVE 9-MONTH CYCLE (Pursue Immediate Legal Notice Before Expiry)"}
- Advocate Legal Notice Served: ${hasLegalNotice ? "YES (Recovery Effort Documented)" : "NO (MANDATORY REQUIREMENT MISSING)"}
- ECGC Default Intimation Cut-off: ${hasEcgcCover ? formatDateIN(calculation.ecgcNotificationCutOff) : "N/A (Uninsured)"}
======================================================`;

    navigator.clipboard.writeText(reportText).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2500);
    });
  };

  return (
    <div id="calculator-tool" className="scroll-mt-28 w-full bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Top Banner Header */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-5 sm:p-7 border-b border-slate-700">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-950/80 text-red-300 border border-red-800/80 mb-2">
              <span>RBI Master Direction No. 16/2015-16</span>
              <span className="text-red-500">&bull;</span>
              <span>Para C.20 &amp; C.22/C.23</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white">
              RBI FEMA 9-Month SOFTEX &amp; Export Realization Calculator
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl">
              Calculate exact 9-month EDPMS repatriation cut-offs, 5% Normal vs 10% Status Holder AD-Bank write-off eligibility, Form ETX extension deadlines, and legal notice compliance proof.
            </p>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center bg-slate-800/90 p-1 rounded-xl border border-slate-700 shrink-0 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setActiveTab("single")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === "single"
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Single Invoice / SOFTEX
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("batch")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === "batch"
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Batch CSV Portfolio
            </button>
          </div>
        </div>
      </div>

      {activeTab === "single" ? (
        <div className="p-5 sm:p-7 md:p-8 space-y-8">
          {/* Form Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Field 1: Export Category */}
            <div className="space-y-1.5">
              <label htmlFor={exportCatId} className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                1. Export / Transaction Type
              </label>
              <select
                id={exportCatId}
                value={exportCategory}
                onChange={(e) => setExportCategory(e.target.value as ExportCategory)}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 bg-white font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
              >
                <option value="software_softex">Software / SaaS (STPI / SEZ SOFTEX Form)</option>
                <option value="goods_shipping_bill">Physical Goods (Customs Shipping Bill / ICEGATE)</option>
                <option value="services_non_softex">Services Export (Direct Inward Remittance / Non-SOFTEX)</option>
              </select>
              <p className="text-[11px] text-slate-500">
                SOFTEX files flow to RBI EDPMS via STPI/SEZ; Shipping Bills flow via ICEGATE.
              </p>
            </div>

            {/* Field 2: Invoice / Shipping Bill Date */}
            <div className="space-y-1.5">
              <label htmlFor={invDateId} className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                2. Shipping Bill / SOFTEX / Invoice Date
              </label>
              <input
                id={invDateId}
                type="date"
                value={invoiceDateStr}
                onChange={(e) => setInvoiceDateStr(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 bg-white font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
              />
              <p className="text-[11px] text-slate-500">
                Statutory 9-month clock starts on export date / invoice date.
              </p>
            </div>

            {/* Field 3: Currency & FX Rate */}
            <div className="space-y-1.5">
              <label htmlFor={currId} className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                3. Invoice Currency &amp; Reference FX
              </label>
              <div className="grid grid-cols-2 gap-2">
                <select
                  id={currId}
                  value={currency}
                  onChange={(e) => handleCurrencyChange(e.target.value as ForeignCurrency)}
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 bg-white font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
                >
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="GBP">GBP (£)</option>
                  <option value="AED">AED (Dirham)</option>
                  <option value="SGD">SGD (S$)</option>
                  <option value="CAD">CAD (C$)</option>
                  <option value="AUD">AUD (A$)</option>
                  <option value="INR">INR (₹)</option>
                </select>
                <div className="relative">
                  <span className="absolute left-2.5 top-2.5 text-xs text-slate-400 font-bold">₹</span>
                  <input
                    id={fxId}
                    type="number"
                    step="0.05"
                    value={customFxRate}
                    onChange={(e) => setCustomFxRate(parseFloat(e.target.value) || 1)}
                    className="w-full pl-6 pr-2 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 bg-white font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
                    title="Exchange rate to INR"
                  />
                </div>
              </div>
              <p className="text-[11px] text-slate-500">
                1 {currency} = ₹{customFxRate}. Modify to match customs/EDPMS booking rate.
              </p>
            </div>

            {/* Field 4: Invoice Amount */}
            <div className="space-y-1.5">
              <label htmlFor={invAmtId} className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                4. Total Invoice Amount ({currency})
              </label>
              <input
                id={invAmtId}
                type="number"
                min="0"
                value={invoiceAmount}
                onChange={(e) => setInvoiceAmount(Math.max(0, parseFloat(e.target.value) || 0))}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 bg-white font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
              />
              <p className="text-[11px] text-slate-500">
                Gross value reflected on the SOFTEX / Shipping Bill.
              </p>
            </div>

            {/* Field 5: Realized Amount */}
            <div className="space-y-1.5">
              <label htmlFor={realAmtId} className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                5. Amount Realized Till Date ({currency})
              </label>
              <input
                id={realAmtId}
                type="number"
                min="0"
                value={realizedAmount}
                onChange={(e) => setRealizedAmount(Math.max(0, parseFloat(e.target.value) || 0))}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 bg-white font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
              />
              <p className="text-[11px] text-slate-500">
                Inward remittance received and knocked off via e-BRC / IRM.
              </p>
            </div>

            {/* Field 6: Exporter Status */}
            <div className="space-y-1.5">
              <label htmlFor={statusId} className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                6. Exporter Status (FTP 2023)
              </label>
              <select
                id={statusId}
                value={exporterStatus}
                onChange={(e) => setExporterStatus(e.target.value as ExporterStatus)}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 bg-white font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
              >
                <option value="normal_5pct">Normal Exporter (5% AD-Bank Write-Off Cap)</option>
                <option value="status_holder_10pct">Status Holder Exporter (10% Cap — 1 to 5 Star)</option>
              </select>
              <p className="text-[11px] text-slate-500">
                Para C.22 RBI Master Direction grants 10% limit to Star Export Houses.
              </p>
            </div>

            {/* Field 7: Preceding Calendar Year Proceeds */}
            <div className="space-y-1.5 md:col-span-2">
              <label htmlFor={annualId} className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                7. Total Export Proceeds Realized in Preceding Calendar Year (&rupee;)
              </label>
              <input
                id={annualId}
                type="number"
                min="0"
                step="500000"
                value={annualRealizedProceedsINR}
                onChange={(e) => setAnnualRealizedProceedsINR(Math.max(0, parseFloat(e.target.value) || 0))}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 bg-white font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
              />
              <p className="text-[11px] text-slate-500">
                AD Bank calculates the 5% or 10% write-off limit on the exporter&apos;s realized proceeds in the preceding calendar year (1 Jan – 31 Dec).
              </p>
            </div>

            {/* Field 8: Foreign Buyer Status */}
            <div className="space-y-1.5">
              <label htmlFor={buyerCondId} className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                8. Overseas Buyer Condition
              </label>
              <select
                id={buyerCondId}
                value={buyerCondition}
                onChange={(e) => setBuyerCondition(e.target.value as typeof buyerCondition)}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 bg-white font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
              >
                <option value="commercial_dispute">Commercial Default / Delayed / Disputed</option>
                <option value="insolvent">Buyer Bankrupt / Insolvent / Liquidated</option>
                <option value="untraceable">Buyer Untraceable / Mail Returned Undelivered</option>
                <option value="delayed">Ongoing Negotiations / Deferred Milestone</option>
              </select>
              <p className="text-[11px] text-slate-500">
                Ground cited in AD-Bank Annexure &amp; Auditor Certificate.
              </p>
            </div>
          </div>

          {/* Compliance Checkboxes Strip */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Statutory Prerequisites &amp; Recovery Triggers
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex items-start gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={hasLegalNotice}
                  onChange={(e) => setHasLegalNotice(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded text-[#DC2626] border-slate-300 focus:ring-[#DC2626]"
                />
                <div>
                  <span className="text-xs font-bold text-slate-900 block">
                    Formal Advocate Legal Demand Served on Foreign Client?
                  </span>
                  <span className="text-[11px] text-slate-600 block leading-relaxed">
                    Under Para C.22/C.23, AD Banks <strong>mandatorily require</strong> documentary proof that the exporter has taken formal legal action before accepting write-off or Form ETX extension requests.
                  </span>
                </div>
              </label>

              <label className="flex items-start gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={hasEcgcCover}
                  onChange={(e) => setHasEcgcCover(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded text-[#DC2626] border-slate-300 focus:ring-[#DC2626]"
                />
                <div>
                  <span className="text-xs font-bold text-slate-900 block">
                    Covered Under ECGC Export Credit Insurance Policy?
                  </span>
                  <span className="text-[11px] text-slate-600 block leading-relaxed">
                    Default must be notified to ECGC within 30 days of due date (or max 4 months). Unrecovered balance after claim settlement can be knocked off in EDPMS.
                  </span>
                </div>
              </label>
            </div>
          </div>

          {/* Real-time Calculation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1: 9-Month Statutory Deadline */}
            <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 block mb-1">
                  RBI 9-Month Due Date
                </span>
                <p className="text-xl sm:text-2xl font-black text-white">
                  {formatDateIN(calculation.deadline9M)}
                </p>
                <div className="mt-2">
                  {calculation.isOverdue ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold bg-red-950 text-red-300 border border-red-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-ping" />
                      Overdue by {Math.abs(calculation.daysRemaining)} Days
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold bg-emerald-950 text-emerald-300 border border-emerald-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      {calculation.daysRemaining} Days Remaining
                    </span>
                  )}
                </div>
              </div>
              <p className="text-[10px] text-slate-400 mt-4 border-t border-slate-800 pt-2">
                FEMA Reg. 9: 9-Month repatriation clock starts on date of export.
              </p>
            </div>

            {/* Card 2: Outstanding Balance */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  Unrealized Balance
                </span>
                <p className="text-xl sm:text-2xl font-black text-slate-900">
                  {formatForeign(calculation.outstandingForeign, currency)}
                </p>
                <p className="text-xs font-bold text-slate-600 mt-1">
                  &asymp; {formatINR(calculation.outstandingINR)}
                </p>
              </div>
              <div className="border-t border-slate-100 pt-2 mt-4 text-[10px] text-slate-500">
                Converted at reference rate of ₹{customFxRate} per {currency}.
              </div>
            </div>

            {/* Card 3: Write-Off Cap Utilization */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  Annual Write-Off Cap ({calculation.writeOffCapPct}%)
                </span>
                <p className="text-xl sm:text-2xl font-black text-slate-900">
                  {formatINR(calculation.maxPermissibleWriteOffINR)}
                </p>
                <div className="mt-2">
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${
                        calculation.withinWriteOffCap ? "bg-emerald-500" : "bg-[#DC2626]"
                      }`}
                      style={{ width: `${Math.min(100, calculation.utilizationPct)}%` }}
                    />
                  </div>
                  <span className="text-[10px] font-bold text-slate-600 block mt-1">
                    Bill takes {calculation.utilizationPct.toFixed(1)}% of annual turnover
                  </span>
                </div>
              </div>
              <div className="border-t border-slate-100 pt-2 mt-4 text-[10px] text-slate-500">
                {calculation.withinWriteOffCap ? "Within delegated AD Bank cap" : "Exceeds annual cap limit"}
              </div>
            </div>

            {/* Card 4: EDPMS Caution Risk */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  EDPMS Caution-Listing Risk
                </span>
                <div className="mt-1">
                  {calculation.edpmsStatus === "HEALTHY" && (
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      LOW RISK (Safe Zone)
                    </span>
                  )}
                  {calculation.edpmsStatus === "CRITICAL_WINDOW" && (
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-extrabold bg-amber-50 text-amber-700 border border-amber-200">
                      HIGH RISK (Critical Window)
                    </span>
                  )}
                  {calculation.edpmsStatus === "OVERDUE_CAUTION" && (
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-extrabold bg-red-50 text-red-700 border border-red-200">
                      OVERDUE (Caution Alert)
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-slate-600 mt-2 leading-relaxed">
                  {calculation.isOverdue
                    ? "Bill is open past 9 months. AD Bank will escalate in EDPMS unless Form ETX extension or write-off docket is filed."
                    : "Within 9-month realization cycle. Issue legal demand immediately if client is unresponsive."}
                </p>
              </div>
              <div className="border-t border-slate-100 pt-2 mt-4 text-[10px] text-slate-500">
                Form ETX Cut-off: {formatDateIN(calculation.etxMaxExtensionDate)}
              </div>
            </div>
          </div>

          {/* Statutory Verdict & Detailed Action Analysis Box */}
          <div
            className={`rounded-2xl p-6 sm:p-7 border ${
              calculation.writeOffVerdict === "ELIGIBLE_AD_BANK"
                ? "bg-emerald-50/70 border-emerald-200"
                : calculation.writeOffVerdict === "LEGAL_NOTICE_DEFICIT"
                ? "bg-red-50/80 border-red-300"
                : calculation.writeOffVerdict === "EXCEEDS_CAP_RBI_REQUIRED"
                ? "bg-amber-50/80 border-amber-300"
                : "bg-slate-50 border-slate-200"
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/80 border border-slate-200 text-slate-800 inline-block">
                  Statutory Write-off &amp; EDPMS Closure Assessment
                </span>
                <h3 className="text-lg sm:text-xl font-black text-slate-900">
                  {calculation.writeOffVerdict === "ELIGIBLE_AD_BANK" && (
                    <span className="text-emerald-800">
                      Eligible for AD-Bank Level Self Write-Off (Para C.22/C.23)
                    </span>
                  )}
                  {calculation.writeOffVerdict === "LEGAL_NOTICE_DEFICIT" && (
                    <span className="text-[#DC2626]">
                      Action Required: Missing Mandatory Advocate Legal Notice Proof
                    </span>
                  )}
                  {calculation.writeOffVerdict === "EXCEEDS_CAP_RBI_REQUIRED" && (
                    <span className="text-amber-800">
                      Exceeds {calculation.writeOffCapPct}% Annual Cap: Requires Special RBI Regional Office Approval
                    </span>
                  )}
                  {calculation.writeOffVerdict === "NOT_APPLICABLE_HEALTHY" && (
                    <span className="text-slate-800">
                      Normal 9-Month Repatriation Period Active
                    </span>
                  )}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-4xl">
                  {calculation.writeOffVerdict === "ELIGIBLE_AD_BANK" &&
                    "Your unrealized bill of " +
                      formatINR(calculation.outstandingINR) +
                      " is within your annual write-off cap of " +
                      formatINR(calculation.maxPermissibleWriteOffINR) +
                      " (" +
                      calculation.writeOffCapPct +
                      "%), and legal demand efforts are documented. Your AD Bank can close this bill on EDPMS upon submission of a Chartered Accountant certificate and surrender of export incentives."}
                  {calculation.writeOffVerdict === "LEGAL_NOTICE_DEFICIT" &&
                    "Under RBI Master Direction Para C.22(a)(ii) and C.23, Authorized Dealer Banks are legally prohibited from approving an export write-off or closing open SOFTEX/Shipping Bills without documentary proof that the exporter has taken formal legal action (or proving buyer insolvency/untraceability). Dispatching a formal advocate legal demand notice is mandatory."}
                  {calculation.writeOffVerdict === "EXCEEDS_CAP_RBI_REQUIRED" &&
                    "This invoice represents " +
                      calculation.utilizationPct.toFixed(1) +
                      "% of your preceding calendar year proceeds, exceeding the " +
                      calculation.writeOffCapPct +
                      "% statutory AD-Bank delegated limit. While your AD Bank cannot close the bill independently, they can forward a Form ETX extension or a special write-off petition to the Reserve Bank of India Regional Office."}
                  {calculation.writeOffVerdict === "NOT_APPLICABLE_HEALTHY" &&
                    "This bill has " +
                      calculation.daysRemaining +
                      " days before the statutory 9-month FEMA repatriation clock expires. If the client is disputing milestones or delaying payment, serve a formal cross-border legal notice now to resolve the dispute or secure the recovery audit trail before the 9-month deadline lapses."}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0">
                <button
                  type="button"
                  onClick={copySummaryReport}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-800 bg-white border border-slate-300 hover:bg-slate-100 transition-colors shadow-sm text-center"
                >
                  {copySuccess ? "✓ Copied to Clipboard" : "📋 Copy Audit Report"}
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors shadow-sm text-center"
                >
                  Serve Legal Notice (₹{basePrice}) &rarr;
                </button>
              </div>
            </div>

            {/* Statutory Compliance Checklist Roadmap */}
            <div className="mt-6 pt-6 border-t border-slate-200/80">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
                Mandatory Documentation Checklist for AD Bank EDPMS Closure
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={hasLegalNotice ? "text-emerald-600 font-bold" : "text-red-600 font-bold"}>
                      {hasLegalNotice ? "✓ Completed" : "✗ Required"}
                    </span>
                    <span className="font-bold text-slate-800">1. Advocate Demand Notice</span>
                  </div>
                  <p className="text-[11px] text-slate-600">
                    Proof of service (email logs + international courier POD) establishing bona fide recovery effort.
                  </p>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-amber-600 font-bold">! Required</span>
                    <span className="font-bold text-slate-800">2. CA Compliance Certificate</span>
                  </div>
                  <p className="text-[11px] text-slate-600">
                    Statutory auditor certificate confirming write-off does not exceed 5%/10% of prior year proceeds.
                  </p>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-slate-600 font-bold">&bull; Conditional</span>
                    <span className="font-bold text-slate-800">3. Export Benefit Surrender</span>
                  </div>
                  <p className="text-[11px] text-slate-600">
                    Proportional surrender of Duty Drawback, RoDTEP, or Advance Authorization benefits if written off.
                  </p>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={hasEcgcCover ? "text-emerald-600 font-bold" : "text-slate-400 font-bold"}>
                      {hasEcgcCover ? "! 30-Day Alert" : "&bull; N/A"}
                    </span>
                    <span className="font-bold text-slate-800">4. ECGC Claim Intimation</span>
                  </div>
                  <p className="text-[11px] text-slate-600">
                    {hasEcgcCover
                      ? `Must notify default before ${formatDateIN(calculation.ecgcNotificationCutOff)}.`
                      : "Not applicable if no ECGC comprehensive export credit policy was held."}
                  </p>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-slate-600 font-bold">&bull; Mandatory</span>
                    <span className="font-bold text-slate-800">5. Clean Investigation Record</span>
                  </div>
                  <p className="text-[11px] text-slate-600">
                    Self-declaration confirming no pending investigations by Enforcement Directorate (ED), CBI, or DRI.
                  </p>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-slate-600 font-bold">&bull; Form ETX</span>
                    <span className="font-bold text-slate-800">6. Bank Extension Option</span>
                  </div>
                  <p className="text-[11px] text-slate-600">
                    If litigation or arbitration is pending, AD Bank can grant up to 6 months extension via Form ETX.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Batch CSV Simulation Tab */
        <div className="p-5 sm:p-7 md:p-8 space-y-6">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
              Batch EDPMS Portfolio Ingestion (CSV Format)
            </h3>
            <p className="text-xs text-slate-600 mb-4 leading-relaxed">
              Paste your accounts receivable export ledger below to evaluate aggregate EDPMS aging, identify invoices requiring immediate advocate legal demand, and verify total write-off exposure against your 5% or 10% statutory cap.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Batch Exporter Status
                </label>
                <select
                  value={batchExporterStatus}
                  onChange={(e) => setBatchExporterStatus(e.target.value as ExporterStatus)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white font-medium"
                >
                  <option value="normal_5pct">Normal Exporter (5% Cap)</option>
                  <option value="status_holder_10pct">Status Holder Exporter (10% Cap)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Preceding Year Realized Proceeds (&rupee;)
                </label>
                <input
                  type="number"
                  value={batchAnnualProceedsINR}
                  onChange={(e) => setBatchAnnualProceedsINR(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white font-medium"
                />
              </div>
            </div>

            <textarea
              rows={6}
              value={csvText}
              onChange={(e) => setCsvText(e.target.value)}
              className="w-full font-mono text-xs p-3.5 rounded-xl border border-slate-300 bg-white text-slate-800 focus:ring-2 focus:ring-[#DC2626] focus:outline-none"
              placeholder="InvoiceNumber,ClientName,Country,InvoiceDate,Currency,InvoiceAmount,RealizedAmount,HasLegalNotice"
            />
            <div className="flex items-center justify-between mt-2">
              <span className="text-[11px] text-slate-500">
                Format: InvoiceNumber, ClientName, Country, YYYY-MM-DD, Currency, InvoiceAmt, RealizedAmt, HasLegalNotice(Yes/No)
              </span>
              <button
                type="button"
                onClick={() => setCsvText(SAMPLE_CSV)}
                className="text-[11px] font-bold text-[#DC2626] hover:underline"
              >
                Reset to Sample CSV
              </button>
            </div>
          </div>

          {/* Batch Summary Strip */}
          {batchCalculation && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-slate-900 text-white p-4 rounded-xl">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Total Ingested Bills
                  </span>
                  <p className="text-xl sm:text-2xl font-black">{batchCalculation.rows.length}</p>
                  <span className="text-[10px] text-red-400 font-bold block mt-1">
                    {batchCalculation.overdueCount} Overdue (&gt;9 Mos)
                  </span>
                </div>

                <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                    Total Unrealized Dues
                  </span>
                  <p className="text-xl sm:text-2xl font-black text-slate-900">
                    {formatINR(batchCalculation.totalOutstandingINR)}
                  </p>
                  <span className="text-[10px] text-slate-600 block mt-1">
                    Across {batchCalculation.rows.length} foreign accounts
                  </span>
                </div>

                <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                    Annual Cap ({batchCalculation.capPct}%)
                  </span>
                  <p className="text-xl sm:text-2xl font-black text-slate-900">
                    {formatINR(batchCalculation.maxCapINR)}
                  </p>
                  <span className="text-[10px] text-slate-600 block mt-1">
                    {batchCalculation.withinCap ? "Portfolio within cap" : "Exceeds annual quota"}
                  </span>
                </div>

                <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                    Legal Notice Deficit
                  </span>
                  <p className="text-xl sm:text-2xl font-black text-[#DC2626]">
                    {batchCalculation.missingLegalNoticeCount} Bills
                  </p>
                  <span className="text-[10px] text-slate-600 block mt-1">
                    Missing mandatory recovery proof
                  </span>
                </div>
              </div>

              {/* Batch Table */}
              <div className="overflow-x-auto border border-slate-200 rounded-xl">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-900 text-white text-[11px] uppercase tracking-wider">
                    <tr>
                      <th className="p-3">Invoice</th>
                      <th className="p-3">Foreign Client</th>
                      <th className="p-3">Country</th>
                      <th className="p-3">9-Month Deadline</th>
                      <th className="p-3">Outstanding</th>
                      <th className="p-3">EDPMS Status</th>
                      <th className="p-3">Legal Demand</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 font-medium">
                    {batchCalculation.rows.map((row, idx) => (
                      <tr key={idx} className={row.isOverdue ? "bg-red-50/50" : "bg-white"}>
                        <td className="p-3 font-mono font-bold text-slate-800">{row.invoiceNumber}</td>
                        <td className="p-3 text-slate-800">{row.clientName}</td>
                        <td className="p-3 text-slate-600">{row.country}</td>
                        <td className="p-3 text-slate-800 font-mono">{formatDateIN(row.deadline9M)}</td>
                        <td className="p-3 text-slate-900 font-bold">
                          {formatForeign(row.outstandingForeign, row.currency)}
                          <span className="block text-[10px] font-normal text-slate-500">
                            {formatINR(row.outstandingINR)}
                          </span>
                        </td>
                        <td className="p-3">
                          {row.edpmsStatus === "OVERDUE_CAUTION" ? (
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-700">
                              Overdue ({Math.abs(row.daysRemaining)}d)
                            </span>
                          ) : row.edpmsStatus === "CRITICAL_WINDOW" ? (
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-700">
                              Critical ({row.daysRemaining}d)
                            </span>
                          ) : (
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-700">
                              Safe ({row.daysRemaining}d)
                            </span>
                          )}
                        </td>
                        <td className="p-3">
                          {row.hasLegalNotice ? (
                            <span className="text-emerald-700 font-bold">✓ Served</span>
                          ) : (
                            <span className="text-[#DC2626] font-bold">✗ Action Needed</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Batch Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-slate-900 text-white rounded-xl">
                <div>
                  <p className="text-xs font-bold">
                    Need batch cross-border legal demand notices dispatched for your open export ledger?
                  </p>
                  <p className="text-[11px] text-slate-300">
                    Our institutional export recovery desk serves 10 to 10,000+ overseas clients with BSA Section 63 delivery certificates.
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <Link
                    href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                    className="px-4 py-2.5 rounded-lg text-xs font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors"
                  >
                    Upload CSV to Institutional Desk &rarr;
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Calculator Footer Disclaimers */}
      <div className="bg-slate-50 border-t border-slate-200 px-5 sm:px-8 py-4 text-[11px] text-slate-500 leading-relaxed">
        <p>
          <strong>Statutory Disclaimer:</strong> This calculator applies the statutory principles of Regulation 9 of Foreign Exchange Management (Export of Goods and Services) Regulations, 2016 and RBI Master Direction No. 16/2015-16 (FED Master Direction on Export of Goods and Services). Calculation of the 5% Normal vs 10% Status Holder self write-off limit is indicative based on user-supplied preceding calendar year turnover figures. Authorized Dealer Banks exercise discretionary diligence regarding genuineness of default, surrender of export benefits (Duty Drawback / RoDTEP), and non-investigation certification before approving EDPMS knock-offs.
        </p>
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
