"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

type NoticeType = "voluntary" | "sec73" | "sec74a" | "sec74";
type InterestRateOption = "18" | "24";

interface InvoiceItem {
  id: string;
  invoiceNo: string;
  invoiceDate: string;
  taxableValue: number;
  gstRate: number; // e.g. 18
}

const SAMPLE_INVOICES: InvoiceItem[] = [
  {
    id: "inv-1",
    invoiceNo: "INV-2024-0891",
    invoiceDate: "2024-05-15",
    taxableValue: 1500000,
    gstRate: 18,
  },
  {
    id: "inv-2",
    invoiceNo: "INV-2024-0982",
    invoiceDate: "2024-07-20",
    taxableValue: 1250000,
    gstRate: 18,
  },
  {
    id: "inv-3",
    invoiceNo: "INV-2024-1140",
    invoiceDate: "2024-09-10",
    taxableValue: 2250000,
    gstRate: 18,
  },
];

function formatINR(val: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(val);
}

function formatDateIN(date: Date): string {
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function parseISODate(dateStr: string): Date {
  const parts = dateStr.trim().split("-").map(Number);
  if (parts.length !== 3 || !parts[0] || !parts[1] || !parts[2]) {
    return new Date();
  }
  return new Date(parts[0], parts[1] - 1, parts[2]);
}

function daysDiff(d1: Date, d2: Date): number {
  const t1 = Date.UTC(d1.getFullYear(), d1.getMonth(), d1.getDate());
  const t2 = Date.UTC(d2.getFullYear(), d2.getMonth(), d2.getDate());
  const diff = Math.floor((t2 - t1) / (1000 * 60 * 60 * 24));
  return diff > 0 ? diff : 0;
}

export default function BlockedGstItcCalculatorClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  // Mode: "single" or "multi"
  const [calcMode, setCalcMode] = useState<"single" | "multi">("single");

  // Single Invoice Inputs
  const [singleBaseValue, setSingleBaseValue] = useState<number>(2500000);
  const [singleGstRate, setSingleGstRate] = useState<number>(18);
  const [vendorName, setVendorName] = useState<string>("Apex Logistics & Trade Pvt Ltd");
  const [vendorGstin, setVendorGstin] = useState<string>("07AAACA1234D1Z2");

  // Multi-invoice items
  const [invoices, setInvoices] = useState<InvoiceItem[]>(SAMPLE_INVOICES);

  // Key Dates
  const [utilizationDateStr, setUtilizationDateStr] = useState<string>("2024-06-20");
  const [reversalDateStr, setReversalDateStr] = useState<string>("2026-11-15");

  // Statutory Parameters
  const [noticeType, setNoticeType] = useState<NoticeType>("sec73");
  const [interestRateOption, setInterestRateOption] = useState<InterestRateOption>("18");
  const [legalCost, setLegalCost] = useState<number>(25000);
  const [vendorHoldback, setVendorHoldback] = useState<number>(300000);

  // UI state
  const [copied, setCopied] = useState(false);

  // Computed Values
  const totalTaxable = useMemo(() => {
    if (calcMode === "single") {
      return singleBaseValue;
    }
    return invoices.reduce((sum, item) => sum + item.taxableValue, 0);
  }, [calcMode, singleBaseValue, invoices]);

  const totalBlockedItc = useMemo(() => {
    if (calcMode === "single") {
      return (singleBaseValue * singleGstRate) / 100;
    }
    return invoices.reduce((sum, item) => sum + (item.taxableValue * item.gstRate) / 100, 0);
  }, [calcMode, singleBaseValue, singleGstRate, invoices]);

  const elapsedDays = useMemo(() => {
    const dUtil = parseISODate(utilizationDateStr);
    const dRev = parseISODate(reversalDateStr);
    return daysDiff(dUtil, dRev);
  }, [utilizationDateStr, reversalDateStr]);

  const interestRate = Number(interestRateOption);

  const accruedInterest = useMemo(() => {
    if (totalBlockedItc <= 0 || elapsedDays <= 0) return 0;
    // Section 50(3) simple interest per day
    return Math.round((totalBlockedItc * (interestRate / 100) * elapsedDays) / 365);
  }, [totalBlockedItc, interestRate, elapsedDays]);

  const penaltyAmount = useMemo(() => {
    if (totalBlockedItc <= 0) return 0;
    switch (noticeType) {
      case "voluntary":
        return 0;
      case "sec73":
        // 10% of tax or ₹10,000, whichever is higher
        return Math.max(Math.round(totalBlockedItc * 0.1), 10000);
      case "sec74a":
        // 10% of tax for non-fraud cases under Finance Act 2024
        return Math.max(Math.round(totalBlockedItc * 0.1), 10000);
      case "sec74":
        // 100% penalty in willful misstatement / fraud allegations
        return Math.round(totalBlockedItc * 1.0);
      default:
        return 0;
    }
  }, [totalBlockedItc, noticeType]);

  const grossIndemnityClaim = useMemo(() => {
    return totalBlockedItc + accruedInterest + penaltyAmount + legalCost;
  }, [totalBlockedItc, accruedInterest, penaltyAmount, legalCost]);

  const holdbackCovered = useMemo(() => {
    return Math.min(vendorHoldback, grossIndemnityClaim);
  }, [vendorHoldback, grossIndemnityClaim]);

  const netPayableByVendor = useMemo(() => {
    return Math.max(0, grossIndemnityClaim - vendorHoldback);
  }, [grossIndemnityClaim, vendorHoldback]);

  const holdbackCoveragePercent = useMemo(() => {
    if (grossIndemnityClaim <= 0) return 0;
    return Math.min(100, Math.round((vendorHoldback / grossIndemnityClaim) * 100));
  }, [vendorHoldback, grossIndemnityClaim]);

  // Handlers for Multi-Invoice
  const addInvoiceRow = () => {
    const nextNum = invoices.length + 1;
    const newInv: InvoiceItem = {
      id: `inv-${Date.now()}`,
      invoiceNo: `INV-2025-0${nextNum}`,
      invoiceDate: "2025-01-15",
      taxableValue: 1000000,
      gstRate: 18,
    };
    setInvoices([...invoices, newInv]);
  };

  const removeInvoiceRow = (id: string) => {
    if (invoices.length <= 1) return;
    setInvoices(invoices.filter((x) => x.id !== id));
  };

  const updateInvoiceField = (
    id: string,
    field: keyof InvoiceItem,
    val: string | number
  ) => {
    setInvoices(
      invoices.map((inv) => {
        if (inv.id === id) {
          return { ...inv, [field]: val };
        }
        return inv;
      })
    );
  };

  // Copy Summary
  const copySummaryText = () => {
    const text = `
=====================================================
STATUTORY VENDOR INDEMNITY DEMAND STATEMENT
(Under CGST Act ss. 16(2)(c), 50(3) & Contract Act ss. 73, 124)
=====================================================
Defaulting Vendor: ${vendorName}
Vendor GSTIN: ${vendorGstin}
Mode: ${calcMode === "single" ? "Single Batch" : "Multi-Invoice Reconciliation"}
Total Taxable Base Amount: ${formatINR(totalTaxable)}
Blocked ITC Principal: ${formatINR(totalBlockedItc)}
Utilization Date: ${utilizationDateStr}
Reversal / Scrutiny Date: ${reversalDateStr}
Overdue Duration: ${elapsedDays} Days

STATUTORY LOSS BREAKDOWN:
1. Blocked GST ITC Principal: ${formatINR(totalBlockedItc)}
2. Section 50(3) Interest (${interestRate}% p.a.): ${formatINR(accruedInterest)}
3. Department Penalty (${noticeType.toUpperCase()}): ${formatINR(penaltyAmount)}
4. Legal & Representation Expenses: ${formatINR(legalCost)}
-----------------------------------------------------
TOTAL GROSS INDEMNITY CLAIM: ${formatINR(grossIndemnityClaim)}
Less: Running Holdback Adjusted: -${formatINR(holdbackCovered)}
-----------------------------------------------------
NET CASH RECOVERY DEMAND: ${formatINR(netPayableByVendor)}
=====================================================
Notice Protocol: 7-Day Statutory Cure Notice via Advocate
Platform: LegalRecovery.in
=====================================================
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  // Download CSV
  const downloadCSV = () => {
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Item,Description,Amount (INR)\n";
    csvContent += `Defaulting Vendor,"${vendorName}",\n`;
    csvContent += `Vendor GSTIN,"${vendorGstin}",\n`;
    csvContent += `Taxable Base Value,"${calcMode === "single" ? "Single Assessment" : "Itemized Invoices"}",${totalTaxable}\n`;
    csvContent += `Blocked ITC Principal,"CGST Act s.16(2)(c)",${totalBlockedItc}\n`;
    csvContent += `Accrued Interest,"Section 50(3) at ${interestRate}% p.a. for ${elapsedDays} days",${accruedInterest}\n`;
    csvContent += `Department Penalty,"DRC-01 Notice Tier: ${noticeType}",${penaltyAmount}\n`;
    csvContent += `Legal Notice Expenses,"Advocate & Representation Fees",${legalCost}\n`;
    csvContent += `Total Gross Indemnity Claim,"Contract Act s.73/124",${grossIndemnityClaim}\n`;
    csvContent += `Vendor Holdback Set-Off,"Unpaid Invoices / Retention Retained",${holdbackCovered}\n`;
    csvContent += `Net Cash Recovery Demand,"Recoverable via Legal Notice / Court",${netPayableByVendor}\n`;

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `GST_Blocked_ITC_Indemnity_Claim_${vendorGstin || "Vendor"}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="calculator-tool" className="scroll-mt-28 w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-6 md:p-8">
      {/* Tool Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
            Live Corporate Calculator &bull; CGST s.16(2)(c) &amp; s.50(3)
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Calculate Blocked ITC, 18% Interest &amp; DRC-01 Penalty Claim
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Compute the exact financial loss when a vendor collects GST but fails to file GSTR-3B, triggering Department DRC-01 scrutiny or ASMT-10 reversals.
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setCalcMode("single")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
              calcMode === "single"
                ? "bg-slate-900 text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            Single Batch
          </button>
          <button
            type="button"
            onClick={() => setCalcMode("multi")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
              calcMode === "multi"
                ? "bg-slate-900 text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            Multi-Invoice Table
          </button>
        </div>
      </div>

      {/* Main Form Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6">
        {/* Left Column: Form Controls (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Vendor Details */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Defaulting Supplier / Vendor Name
                </label>
                <input
                  type="text"
                  value={vendorName}
                  onChange={(e) => setVendorName(e.target.value)}
                  placeholder="e.g. Acme Corp Supplies Pvt Ltd"
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Vendor GSTIN (15 Digits)
                </label>
                <input
                  type="text"
                  value={vendorGstin}
                  onChange={(e) => setVendorGstin(e.target.value.toUpperCase())}
                  placeholder="e.g. 07AAACA1234D1Z2"
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 bg-white font-mono font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                />
              </div>
            </div>
          </div>

          {/* Mode 1: Single Batch Assessment */}
          {calcMode === "single" ? (
            <div className="p-4 rounded-xl border border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-bold text-slate-800">
                  Total Taxable Base Amount (&rupee;)
                </label>
                <span className="text-xs font-bold text-[#DC2626]">
                  {formatINR(singleBaseValue)}
                </span>
              </div>
              <input
                type="number"
                min="0"
                step="50000"
                value={singleBaseValue}
                onChange={(e) => setSingleBaseValue(Math.max(0, Number(e.target.value) || 0))}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-white font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
              />
              {/* Presets */}
              <div className="flex flex-wrap gap-2">
                {[500000, 1500000, 2500000, 5000000, 10000000].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setSingleBaseValue(val)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-colors cursor-pointer ${
                      singleBaseValue === val
                        ? "bg-[#DC2626] text-white"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {val >= 10000000 ? `₹${val / 10000000} Cr` : `₹${val / 100000}L`}
                  </button>
                ))}
              </div>

              {/* GST Slab Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-2">
                  Applicable GST Slab
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[5, 12, 18, 28].map((rate) => (
                    <button
                      key={rate}
                      type="button"
                      onClick={() => setSingleGstRate(rate)}
                      className={`py-2 px-3 rounded-xl text-xs font-bold text-center border transition-all cursor-pointer ${
                        singleGstRate === rate
                          ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                          : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      {rate}% GST
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Mode 2: Multi-Invoice Table */
            <div className="p-4 rounded-xl border border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-bold text-slate-800">
                  Itemized Default Invoices ({invoices.length})
                </label>
                <button
                  type="button"
                  onClick={addInvoiceRow}
                  className="px-2.5 py-1 rounded-lg text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  + Add Invoice
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500 font-semibold">
                      <th className="pb-2 pr-2">Invoice No</th>
                      <th className="pb-2 pr-2">Date</th>
                      <th className="pb-2 pr-2">Taxable Base (₹)</th>
                      <th className="pb-2 pr-2">GST %</th>
                      <th className="pb-2 text-right">Tax (₹)</th>
                      <th className="pb-2 pl-2"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {invoices.map((inv) => {
                      const taxAmt = (inv.taxableValue * inv.gstRate) / 100;
                      return (
                        <tr key={inv.id}>
                          <td className="py-2 pr-2">
                            <input
                              type="text"
                              value={inv.invoiceNo}
                              onChange={(e) => updateInvoiceField(inv.id, "invoiceNo", e.target.value)}
                              className="w-24 sm:w-28 px-2 py-1 text-xs border border-slate-200 rounded font-mono"
                            />
                          </td>
                          <td className="py-2 pr-2">
                            <input
                              type="date"
                              value={inv.invoiceDate}
                              onChange={(e) => updateInvoiceField(inv.id, "invoiceDate", e.target.value)}
                              className="px-2 py-1 text-xs border border-slate-200 rounded"
                            />
                          </td>
                          <td className="py-2 pr-2">
                            <input
                              type="number"
                              value={inv.taxableValue}
                              onChange={(e) => updateInvoiceField(inv.id, "taxableValue", Number(e.target.value) || 0)}
                              className="w-24 sm:w-28 px-2 py-1 text-xs border border-slate-200 rounded font-semibold"
                            />
                          </td>
                          <td className="py-2 pr-2">
                            <select
                              value={inv.gstRate}
                              onChange={(e) => updateInvoiceField(inv.id, "gstRate", Number(e.target.value))}
                              className="px-2 py-1 text-xs border border-slate-200 rounded bg-white"
                            >
                              <option value={5}>5%</option>
                              <option value={12}>12%</option>
                              <option value={18}>18%</option>
                              <option value={28}>28%</option>
                            </select>
                          </td>
                          <td className="py-2 text-right font-bold text-slate-800">
                            {formatINR(taxAmt)}
                          </td>
                          <td className="py-2 pl-2 text-right">
                            {invoices.length > 1 && (
                              <button
                                type="button"
                                onClick={() => removeInvoiceRow(inv.id)}
                                className="text-red-500 hover:text-red-700 font-bold px-1"
                                title="Remove row"
                              >
                                &times;
                              </button>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Timeline & Date Range */}
          <div className="p-4 rounded-xl border border-slate-200 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Statutory Utilization &amp; Reversal Timeline
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                  ITC Utilization Date (GSTR-3B)
                </label>
                <input
                  type="date"
                  value={utilizationDateStr}
                  onChange={(e) => setUtilizationDateStr(e.target.value)}
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 bg-white font-medium text-slate-800"
                />
                <p className="text-[10px] text-slate-400 mt-1">
                  Date when Electronic Credit Ledger was debited for tax liability.
                </p>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                  ITC Reversal / Demand Date
                </label>
                <input
                  type="date"
                  value={reversalDateStr}
                  onChange={(e) => setReversalDateStr(e.target.value)}
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 bg-white font-medium text-slate-800"
                />
                <p className="text-[10px] text-slate-400 mt-1">
                  Date of Form DRC-03 reversal or Department demand date ({elapsedDays} days total).
                </p>
              </div>
            </div>
          </div>

          {/* Department Notice Type & Penalties */}
          <div className="p-4 rounded-xl border border-slate-200 space-y-3">
            <label className="block text-xs font-bold text-slate-800">
              Department Scrutiny &amp; Notice Regime
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setNoticeType("sec73")}
                className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                  noticeType === "sec73"
                    ? "bg-red-50/70 border-red-500 ring-1 ring-red-500"
                    : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-xs text-slate-900">Section 73 (Bona Fide)</span>
                  <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-amber-100 text-amber-800">
                    10% Penalty
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 leading-snug">
                  Form DRC-01 for GSTR-2B non-reflection without fraud. 10% of tax (min &rupee;10,000).
                </p>
              </button>

              <button
                type="button"
                onClick={() => setNoticeType("sec74a")}
                className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                  noticeType === "sec74a"
                    ? "bg-red-50/70 border-red-500 ring-1 ring-red-500"
                    : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-xs text-slate-900">Section 74A (FY 2024-25+)</span>
                  <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-blue-100 text-blue-800">
                    Unified Regime
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 leading-snug">
                  Finance Act 2024 unified limitation regime. Standard 10% penalty for non-fraud cases.
                </p>
              </button>

              <button
                type="button"
                onClick={() => setNoticeType("sec74")}
                className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                  noticeType === "sec74"
                    ? "bg-red-50/70 border-red-500 ring-1 ring-red-500"
                    : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-xs text-slate-900">Section 74 (Willful / Fake)</span>
                  <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-red-100 text-red-800">
                    100% Penalty
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 leading-snug">
                  Allegations of circular trading or non-existent vendor. Full 100% tax penalty imposed.
                </p>
              </button>

              <button
                type="button"
                onClick={() => setNoticeType("voluntary")}
                className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                  noticeType === "voluntary"
                    ? "bg-red-50/70 border-red-500 ring-1 ring-red-500"
                    : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-xs text-slate-900">Voluntary Reversal</span>
                  <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800">
                    0% Penalty
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 leading-snug">
                  Pre-notice self-reversal under s.73(5) / s.74A(8). Only Tax + 18% Interest recoverable.
                </p>
              </button>
            </div>
          </div>

          {/* Section 50 Rate & Holdback Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-slate-200">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                Section 50(3) Interest Rate
              </label>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setInterestRateOption("18")}
                  className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-bold border transition-colors cursor-pointer ${
                    interestRateOption === "18"
                      ? "bg-slate-900 text-white border-slate-900"
                      : "bg-white text-slate-700 border-slate-200"
                  }`}
                >
                  18% p.a. (Rule 88B)
                </button>
                <button
                  type="button"
                  onClick={() => setInterestRateOption("24")}
                  className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-bold border transition-colors cursor-pointer ${
                    interestRateOption === "24"
                      ? "bg-slate-900 text-white border-slate-900"
                      : "bg-white text-slate-700 border-slate-200"
                  }`}
                >
                  24% p.a. (Historical)
                </button>
              </div>
              <p className="text-[10px] text-slate-400 mt-1.5">
                Finance Act 2022 amended Section 50(3) retrospectively to 18% for utilized wrongly-availed ITC.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                Available Vendor Holdback (&rupee;)
              </label>
              <input
                type="number"
                min="0"
                step="10000"
                value={vendorHoldback}
                onChange={(e) => setVendorHoldback(Math.max(0, Number(e.target.value) || 0))}
                className="w-full px-3 py-1.5 text-xs sm:text-sm rounded-lg border border-slate-300 bg-white font-bold text-slate-800"
                placeholder="Unpaid bills or retention"
              />
              <p className="text-[10px] text-slate-400 mt-1">
                Unpaid running invoices or security deposit available to freeze &amp; set off.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Live Output & Legal Claim Sheet (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
          {/* Statutory Indemnity Summary Card */}
          <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-[11px] font-bold uppercase tracking-widest text-red-400">
                Statutory Indemnity Assessment
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">
                {elapsedDays} Days Overdue
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">Blocked ITC Principal (CGST/SGST):</span>
                <span className="font-bold text-slate-100">{formatINR(totalBlockedItc)}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">Accrued Interest (s.50(3) @ {interestRate}%):</span>
                <span className="font-bold text-amber-400">{formatINR(accruedInterest)}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">Department DRC-01 Penalty:</span>
                <span className="font-bold text-red-400">{formatINR(penaltyAmount)}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">Notice &amp; Professional Representation:</span>
                <span className="font-bold text-slate-300">{formatINR(legalCost)}</span>
              </div>
              <div className="pt-2 border-t border-slate-800 flex justify-between items-baseline">
                <span className="text-xs uppercase tracking-wider font-extrabold text-slate-300">
                  Gross Indemnity Loss:
                </span>
                <span className="text-lg font-black text-white">{formatINR(grossIndemnityClaim)}</span>
              </div>
            </div>

            {/* Holdback Set-off Section */}
            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-300 font-medium">Running Holdback Set-Off:</span>
                <span className="font-bold text-emerald-400">-{formatINR(holdbackCovered)}</span>
              </div>
              <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-emerald-500 h-full transition-all duration-300"
                  style={{ width: `${holdbackCoveragePercent}%` }}
                />
              </div>
              <p className="text-[10px] text-slate-400">
                Holdback covers {holdbackCoveragePercent}% of exposure.
              </p>
            </div>

            {/* Net Rupee Recovery Demand */}
            <div className="p-4 rounded-xl bg-gradient-to-br from-red-950/60 to-red-900/40 border border-red-800/80">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-red-300 mb-1">
                Net Recoverable Balance from Vendor
              </span>
              <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {formatINR(netPayableByVendor)}
              </p>
              <p className="text-[11px] text-red-200 mt-1 leading-snug">
                {netPayableByVendor > 0
                  ? "Unsecured corporate financial loss recoverable via 7-day Advocate Demand Notice & Summary Suit."
                  : "Fully covered by running invoice holdbacks. Issue statutory notice to confirm legal set-off."}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-2">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="w-full py-3 px-4 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold text-xs sm:text-sm text-center transition-all cursor-pointer shadow-lg shadow-red-900/40 flex items-center justify-center gap-2"
              >
                <span>Draft 7-Day Vendor Demand Notice</span>
                <span>&mdash; &rupee;{basePrice} &rarr;</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={copySummaryText}
                  className="py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs border border-slate-700 transition-colors text-center cursor-pointer"
                >
                  {copied ? "✓ Copied Statement" : "📋 Copy Summary"}
                </button>
                <button
                  type="button"
                  onClick={downloadCSV}
                  className="py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs border border-slate-700 transition-colors text-center cursor-pointer"
                >
                  📥 Download CSV
                </button>
              </div>
            </div>
          </div>

          {/* Statutory Holdback Advice Box */}
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs space-y-1.5">
            <div className="flex items-center gap-1.5 font-black text-amber-950 uppercase tracking-wider text-[11px]">
              <span>⚠️ CFO &amp; AP Statutory Freeze Directive</span>
            </div>
            <p className="text-amber-800 leading-relaxed text-[11px]">
              Under Indian Contract Act Section 124 (Contract of Indemnity), Accounts Payable must immediately freeze at least{" "}
              <strong>{formatINR(grossIndemnityClaim)}</strong> from {vendorName}&apos;s pending bills, retention, or bank guarantees. Do not release running payments until the vendor furnishes Form GSTR-3B tax paid challans and DRC-03 clearance.
            </p>
          </div>
        </div>
      </div>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        basePrice={basePrice}
      />
    </div>
  );
}
