"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

type ClaimCategory = "delayed_cashless" | "arbitrary_deduction" | "hospital_reimbursement";

interface BatchClaimRow {
  claimId: string;
  patientName: string;
  insurerTpa: string;
  billedAmount: number;
  settledAmount: number;
  withheldAmount: number;
  submissionDate: string;
  delayDays: number;
  statutoryDueDate: string;
  penalInterest: number;
  totalPayable: number;
  status: "TAT_RUNNING" | "PENAL_ACTIVE" | "CHRONIC_DEFAULT" | "CRITICAL_LIMITATION";
  statusLabel: string;
}

const SAMPLE_CSV = `ClaimID,PatientName,InsurerOrTPA,BilledAmount,SettledAmount,SubmissionDate
IPD-2026-8812,Ramesh Verma,Star Health & Allied Insurance,285000,195000,2026-07-15
IPD-2026-8845,Sunita Agarwal,Care Health Insurance,450000,310000,2026-06-10
IPD-2026-8902,Mohd. Farooq,Medi Assist TPA (HDFC ERGO),185000,0,2026-08-01
IPD-2026-8966,Kavita Nair,Vidal Health TPA (New India),340000,240000,2026-05-20
IPD-2026-9014,Rajesh Gupta,ICICI Lombard Health,520000,380000,2026-04-12
IPD-2026-9150,Anand Joshi,Paramount TPA (National Ins),165000,110000,2026-08-25`;

const TOP_INSURERS_TPAS = [
  "Star Health and Allied Insurance",
  "Care Health Insurance",
  "HDFC ERGO General Insurance",
  "ICICI Lombard General Insurance",
  "Niva Bupa Health Insurance",
  "Medi Assist Insurance TPA Pvt Ltd",
  "Vidal Health Insurance TPA Pvt Ltd",
  "Paramount Health Services & Insurance TPA",
  "MDIndia Health Insurance TPA",
  "Heritage Health Insurance TPA",
  "Family Health Plan Insurance TPA (FHPL)",
  "Raksha Health Insurance TPA",
  "Genins India Insurance TPA",
  "Other Health Insurer / TPA",
];

function parseISODate(dateStr: string): Date {
  const parts = dateStr.trim().split("-").map(Number);
  if (parts.length !== 3 || !parts[0] || !parts[1] || !parts[2]) {
    return new Date(2026, 10, 14);
  }
  return new Date(parts[0], parts[1] - 1, parts[2]);
}

function isValidISODate(dateStr: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr.trim())) return false;
  const d = parseISODate(dateStr);
  return !Number.isNaN(d.getTime());
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

function addDays(date: Date, days: number): Date {
  const next = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  next.setDate(next.getDate() + days);
  return next;
}

function diffDays(later: Date, earlier: Date): number {
  const utc1 = Date.UTC(earlier.getFullYear(), earlier.getMonth(), earlier.getDate());
  const utc2 = Date.UTC(later.getFullYear(), later.getMonth(), later.getDate());
  return Math.round((utc2 - utc1) / (1000 * 60 * 60 * 24));
}

function formatINR(val: number): string {
  return "₹" + Math.round(val).toLocaleString("en-IN");
}

export default function HospitalTpaCalculatorClient() {
  const [activeTab, setActiveTab] = useState<"single" | "batch">("single");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  // Single Claim State
  const [claimId, setClaimId] = useState("IPD-2026-9481");
  const [patientName, setPatientName] = useState("Ramesh Chandra Sharma");
  const [insurerTpa, setInsurerTpa] = useState("Star Health and Allied Insurance");
  const [claimCategory, setClaimCategory] = useState<ClaimCategory>("arbitrary_deduction");
  const [billedAmount, setBilledAmount] = useState(385000);
  const [settledAmount, setSettledAmount] = useState(260000);
  const [submissionDate, setSubmissionDate] = useState("2026-07-15");
  const [statutoryTatDays, setStatutoryTatDays] = useState(30);
  const [assessmentDate, setAssessmentDate] = useState("2026-11-14");
  const [rbiBankRate, setRbiBankRate] = useState(6.75); // RBI Bank Rate
  const [copyFeedback, setCopyFeedback] = useState<string | null>(null);

  // Batch State
  const [batchRawInput, setBatchRawInput] = useState(SAMPLE_CSV);
  const [batchTatDays, setBatchTatDays] = useState(30);

  // Single Calculation Logic
  const singleCalc = useMemo(() => {
    const subDate = parseISODate(submissionDate);
    const assessDate = parseISODate(assessmentDate);
    const statutoryDueDate = addDays(subDate, statutoryTatDays);

    const withheld = Math.max(0, billedAmount - settledAmount);
    const totalPenalRate = rbiBankRate + 2.0; // Bank Rate + 2% per annum under IRDAI Master Circular

    const delayDays = Math.max(0, diffDays(assessDate, statutoryDueDate));

    // Penal interest: P * (Rate / 100) * (Days / 365)
    const penalInterest = delayDays > 0 ? (withheld * (totalPenalRate / 100) * delayDays) / 365 : 0;
    const totalClaimDemand = withheld + penalInterest;

    // Commercial Court Specified Value Threshold (Section 12 Commercial Courts Act: min Rs 3 Lakhs)
    const isCommercialCourtEligible = totalClaimDemand >= 300000;

    // Limitation status (3 years from partial settlement or 30-day TAT expiry)
    const limitationExpiryDate = addDays(statutoryDueDate, 365 * 3);
    const daysUntilLimitation = diffDays(limitationExpiryDate, assessDate);

    let statusKey: "TAT_RUNNING" | "PENAL_ACTIVE" | "CHRONIC_DEFAULT" | "CRITICAL_LIMITATION" = "TAT_RUNNING";
    let statusLabel = "Within 30-Day Statutory TAT";

    if (daysUntilLimitation < 90) {
      statusKey = "CRITICAL_LIMITATION";
      statusLabel = "CRITICAL: 3-Year Limitation Expiring Soon!";
    } else if (delayDays > 90) {
      statusKey = "CHRONIC_DEFAULT";
      statusLabel = "CHRONIC DEFAULT (>90 Days Delay)";
    } else if (delayDays > 0) {
      statusKey = "PENAL_ACTIVE";
      statusLabel = "STATUTORY DEFAULT: Penal Interest Active";
    }

    return {
      withheld,
      totalPenalRate,
      statutoryDueDate,
      delayDays,
      penalInterest,
      totalClaimDemand,
      isCommercialCourtEligible,
      limitationExpiryDate,
      daysUntilLimitation,
      statusKey,
      statusLabel,
    };
  }, [
    billedAmount,
    settledAmount,
    submissionDate,
    statutoryTatDays,
    assessmentDate,
    rbiBankRate,
  ]);

  // Batch Calculation Logic
  const batchCalc = useMemo(() => {
    const lines = batchRawInput.trim().split("\n");
    if (lines.length < 2) return { rows: [], totalWithheld: 0, totalPenal: 0, grandTotal: 0, commercialCourtCount: 0 };

    const rows: BatchClaimRow[] = [];
    let totalWithheld = 0;
    let totalPenal = 0;
    let grandTotal = 0;
    let commercialCourtCount = 0;
    const refDate = parseISODate(assessmentDate);
    const totalPenalRate = rbiBankRate + 2.0;

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      const cols = line.split(",").map((c) => c.trim().replace(/^["']|["']$/g, ""));
      if (cols.length < 5) continue;

      const cId = cols[0] || `CLM-${i}`;
      const pName = cols[1] || `Patient-${i}`;
      const insurer = cols[2] || "Health Insurer/TPA";
      const billed = parseFloat(cols[3]) || 0;
      const settled = parseFloat(cols[4]) || 0;
      const subDateStr = cols[5] && isValidISODate(cols[5]) ? cols[5] : "2026-07-01";

      const withheld = Math.max(0, billed - settled);
      const subDate = parseISODate(subDateStr);
      const dueDate = addDays(subDate, batchTatDays);
      const delayDays = Math.max(0, diffDays(refDate, dueDate));
      const penal = delayDays > 0 ? (withheld * (totalPenalRate / 100) * delayDays) / 365 : 0;
      const payable = withheld + penal;

      let status: BatchClaimRow["status"] = "TAT_RUNNING";
      let statusLabel = "TAT Running";
      if (delayDays > 90) {
        status = "CHRONIC_DEFAULT";
        statusLabel = ">90d Chronic Default";
      } else if (delayDays > 0) {
        status = "PENAL_ACTIVE";
        statusLabel = "Penal Interest Active";
      }

      if (payable >= 300000) {
        commercialCourtCount++;
      }

      totalWithheld += withheld;
      totalPenal += penal;
      grandTotal += payable;

      rows.push({
        claimId: cId,
        patientName: pName,
        insurerTpa: insurer,
        billedAmount: billed,
        settledAmount: settled,
        withheldAmount: withheld,
        submissionDate: subDateStr,
        statutoryDueDate: toISODate(dueDate),
        delayDays,
        penalInterest: penal,
        totalPayable: payable,
        status,
        statusLabel,
      });
    }

    return {
      rows,
      totalWithheld,
      totalPenal,
      grandTotal,
      commercialCourtCount,
    };
  }, [batchRawInput, batchTatDays, assessmentDate, rbiBankRate]);

  const handleCopySingleSummary = () => {
    const text = `IRDAI STATUTORY PENAL INTEREST DEMAND LEDGER (HOSPITAL RCM)
Claim Reference / IPD No: ${claimId}
Patient Name: ${patientName}
TPA / Health Insurer: ${insurerTpa}
Claim Category: ${claimCategory}
Total Billed / Sanctioned: ${formatINR(billedAmount)}
Admitted / Paid Settlement: ${formatINR(settledAmount)}
Disallowed / Withheld Principal: ${formatINR(singleCalc.withheld)}
Final Document Submission Date: ${formatDateIN(parseISODate(submissionDate))}
Statutory Settlement Due Date (30-Day TAT): ${formatDateIN(singleCalc.statutoryDueDate)}
Assessment Date: ${formatDateIN(parseISODate(assessmentDate))}
Statutory Delay: ${singleCalc.delayDays} calendar days
Applicable IRDAI Penal Rate: ${singleCalc.totalPenalRate.toFixed(2)}% p.a. (RBI Bank Rate ${rbiBankRate}% + 2.0%)
Accrued Statutory Penal Interest: ${formatINR(singleCalc.penalInterest)}
TOTAL ENFORCEABLE STATUTORY DEMAND: ${formatINR(singleCalc.totalClaimDemand)}
Statutory Basis: IRDAI Master Circular on Health Insurance & Protection of Policyholders' Interests Regulations
Commercial Courts Act s.2(1)(c)(xx) Jurisdiction: ${singleCalc.isCommercialCourtEligible ? "ELIGIBLE (Specified Value >= Rs 3,00,000)" : "Below Rs 3 Lakhs threshold (Combine with batch)"}`;

    navigator.clipboard.writeText(text);
    setCopyFeedback("Claim ledger copied to clipboard!");
    setTimeout(() => setCopyFeedback(null), 3500);
  };

  const handleDownloadBatchCSV = () => {
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "ClaimID,PatientName,InsurerOrTPA,BilledAmount,SettledAmount,WithheldAmount,SubmissionDate,StatutoryDueDate,DelayDays,PenalInterestAccrued,TotalEnforceableDemand,Status\n";

    batchCalc.rows.forEach((r) => {
      csvContent += `"${r.claimId}","${r.patientName}","${r.insurerTpa}",${r.billedAmount},${r.settledAmount},${r.withheldAmount},"${r.submissionDate}","${r.statutoryDueDate}",${r.delayDays},${Math.round(r.penalInterest)},${Math.round(r.totalPayable)},"${r.statusLabel}"\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `IRDAI_TPA_Penal_Interest_Audit_${toISODate(new Date())}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="calculator-tool"
      aria-labelledby="calculator-tool-title"
      className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden"
    >
      {/* Header bar */}
      <div className="bg-slate-900 text-white p-5 sm:p-6 border-b border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-950/80 text-red-300 border border-red-800/80 mb-2">
              IRDAI Master Circular Compliance Tool
            </span>
            <h2 id="calculator-tool-title" className="text-xl sm:text-2xl font-black tracking-tight text-white">
              Hospital TPA Delayed Claim Penal Interest Engine
            </h2>
            <p className="text-xs text-slate-300 mt-1">
              Computes statutory penal interest at RBI Bank Rate + 2% per annum beyond 30-day cashless settlement TAT.
            </p>
          </div>

          {/* Mode Switcher */}
          <div className="flex bg-slate-800 p-1 rounded-xl border border-slate-700 self-start sm:self-auto shrink-0">
            <button
              type="button"
              onClick={() => setActiveTab("single")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === "single"
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              Single Claim Audit
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("batch")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === "batch"
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              Batch CSV Ingestion
            </button>
          </div>
        </div>
      </div>

      <div className="p-5 sm:p-6 md:p-8 space-y-6">
        {activeTab === "single" ? (
          /* SINGLE CLAIM MODE */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Input Column (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="border-b border-slate-100 pb-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800">
                  Step 1: Hospital Claim &amp; Insurer/TPA Particulars
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Enter billing ledger particulars from your hospital HIS or TPA portal docket.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="tpa-claim-id" className="block text-xs font-bold text-slate-700 mb-1">
                    Claim Ref / IPD Bill No.
                  </label>
                  <input
                    id="tpa-claim-id"
                    type="text"
                    value={claimId}
                    onChange={(e) => setClaimId(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                    placeholder="e.g. IPD-2026-9481"
                  />
                </div>

                <div>
                  <label htmlFor="tpa-patient-name" className="block text-xs font-bold text-slate-700 mb-1">
                    Patient Name (Confidential/Optional)
                  </label>
                  <input
                    id="tpa-patient-name"
                    type="text"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                    placeholder="e.g. Ramesh Sharma"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="tpa-insurer-select" className="block text-xs font-bold text-slate-700 mb-1">
                    Health Insurer / TPA Name
                  </label>
                  <select
                    id="tpa-insurer-select"
                    value={insurerTpa}
                    onChange={(e) => setInsurerTpa(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg bg-white focus:ring-2 focus:ring-red-500 focus:outline-none"
                  >
                    {TOP_INSURERS_TPAS.map((ins) => (
                      <option key={ins} value={ins}>
                        {ins}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="tpa-claim-cat" className="block text-xs font-bold text-slate-700 mb-1">
                    Dispute / Claim Classification
                  </label>
                  <select
                    id="tpa-claim-cat"
                    value={claimCategory}
                    onChange={(e) => setClaimCategory(e.target.value as ClaimCategory)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg bg-white focus:ring-2 focus:ring-red-500 focus:outline-none"
                  >
                    <option value="arbitrary_deduction">Arbitrary Disallowance / Short-Settlement</option>
                    <option value="delayed_cashless">Unsettled Cashless Discharge Bill</option>
                    <option value="hospital_reimbursement">Direct Hospital Tariff Disallowance</option>
                  </select>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-3">
                  Step 2: Financials &amp; Withheld Principal
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="tpa-billed-amt" className="block text-xs font-bold text-slate-700 mb-1">
                      Total Billed (₹)
                    </label>
                    <input
                      id="tpa-billed-amt"
                      type="number"
                      min={0}
                      step={1000}
                      value={billedAmount}
                      onChange={(e) => setBilledAmount(Math.max(0, Number(e.target.value)))}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg font-mono focus:ring-2 focus:ring-red-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="tpa-settled-amt" className="block text-xs font-bold text-slate-700 mb-1">
                      Paid / Admitted (₹)
                    </label>
                    <input
                      id="tpa-settled-amt"
                      type="number"
                      min={0}
                      step={1000}
                      value={settledAmount}
                      onChange={(e) => setSettledAmount(Math.max(0, Number(e.target.value)))}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg font-mono focus:ring-2 focus:ring-red-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-red-700 mb-1">
                      Withheld Principal (₹)
                    </label>
                    <div className="w-full px-3 py-2 text-xs font-bold font-mono bg-red-50 border border-red-200 text-red-700 rounded-lg">
                      {formatINR(singleCalc.withheld)}
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-3">
                  Step 3: Statutory Timeline &amp; IRDAI Rate
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="tpa-submission-date" className="block text-xs font-bold text-slate-700 mb-1">
                      Discharge &amp; Final Document Date
                    </label>
                    <input
                      id="tpa-submission-date"
                      type="date"
                      value={submissionDate}
                      onChange={(e) => setSubmissionDate(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                    />
                    <p className="text-[10px] text-slate-500 mt-1">
                      When hospital uploaded final claim docket &amp; discharge bill.
                    </p>
                  </div>

                  <div>
                    <label htmlFor="tpa-tat-days" className="block text-xs font-bold text-slate-700 mb-1">
                      Statutory Settlement TAT
                    </label>
                    <select
                      id="tpa-tat-days"
                      value={statutoryTatDays}
                      onChange={(e) => setStatutoryTatDays(Number(e.target.value))}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg bg-white focus:ring-2 focus:ring-red-500 focus:outline-none"
                    >
                      <option value={30}>30 Days (Standard IRDAI Master Circular TAT)</option>
                      <option value={15}>15 Days (Expedited Network MOU Clause)</option>
                      <option value={45}>45 Days (Extended Query / Investigation Ceiling)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label htmlFor="tpa-assess-date" className="block text-xs font-bold text-slate-700 mb-1">
                      Calculation / Demand Cut-off Date
                    </label>
                    <input
                      id="tpa-assess-date"
                      type="date"
                      value={assessmentDate}
                      onChange={(e) => setAssessmentDate(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="tpa-rbi-rate" className="block text-xs font-bold text-slate-700 mb-1">
                      RBI Bank Rate + IRDAI Spread (2%)
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        id="tpa-rbi-rate"
                        type="number"
                        step={0.25}
                        value={rbiBankRate}
                        onChange={(e) => setRbiBankRate(Number(e.target.value))}
                        className="w-24 px-3 py-2 text-xs border border-slate-300 rounded-lg font-mono focus:ring-2 focus:ring-red-500 focus:outline-none"
                      />
                      <span className="text-xs text-slate-600 font-bold">
                        + 2.0% ={" "}
                        <span className="text-[#DC2626] font-black">
                          {singleCalc.totalPenalRate.toFixed(2)}% p.a.
                        </span>
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-500 mt-1">
                      Current RBI Bank Rate = 6.75% (effective penal rate 8.75% p.a.)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Output Column (5 cols) */}
            <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-xl space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                  Statutory Output
                </span>
                <span
                  className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                    singleCalc.statusKey === "CRITICAL_LIMITATION"
                      ? "bg-red-500 text-white animate-pulse"
                      : singleCalc.statusKey === "CHRONIC_DEFAULT"
                      ? "bg-amber-400 text-slate-950 font-black"
                      : singleCalc.statusKey === "PENAL_ACTIVE"
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                      : "bg-slate-700 text-slate-200"
                  }`}
                >
                  {singleCalc.statusLabel}
                </span>
              </div>

              {/* Main Demand Number */}
              <div>
                <p className="text-xs text-slate-400">Total Statutory Enforceable Demand</p>
                <p className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1">
                  {formatINR(singleCalc.totalClaimDemand)}
                </p>
                <p className="text-[11px] text-slate-400 mt-1">
                  Withheld Principal {formatINR(singleCalc.withheld)} + Statutory Penal Interest{" "}
                  <span className="text-emerald-400 font-bold">
                    {formatINR(singleCalc.penalInterest)}
                  </span>
                </p>
              </div>

              {/* Breakdown Grid */}
              <div className="grid grid-cols-2 gap-3 py-3 border-y border-slate-800 text-xs">
                <div>
                  <p className="text-slate-400 text-[10px] uppercase">Statutory Due Date</p>
                  <p className="font-bold text-slate-200 mt-0.5">
                    {formatDateIN(singleCalc.statutoryDueDate)}
                  </p>
                  <p className="text-[10px] text-slate-500">Day 30 under IRDAI</p>
                </div>
                <div>
                  <p className="text-slate-400 text-[10px] uppercase">Delay Beyond TAT</p>
                  <p className="font-black text-amber-400 mt-0.5">
                    {singleCalc.delayDays} Calendar Days
                  </p>
                  <p className="text-[10px] text-slate-500">Penal clock running</p>
                </div>
                <div>
                  <p className="text-slate-400 text-[10px] uppercase">IRDAI Penal Rate</p>
                  <p className="font-bold text-red-400 mt-0.5">
                    {singleCalc.totalPenalRate.toFixed(2)}% p.a.
                  </p>
                  <p className="text-[10px] text-slate-500">Bank Rate + 2%</p>
                </div>
                <div>
                  <p className="text-slate-400 text-[10px] uppercase">Commercial Court S.12</p>
                  <p
                    className={`font-bold mt-0.5 ${
                      singleCalc.isCommercialCourtEligible ? "text-emerald-400" : "text-slate-400"
                    }`}
                  >
                    {singleCalc.isCommercialCourtEligible ? ">= ₹3 Lakhs (Yes)" : "< ₹3L (Batch Up)"}
                  </p>
                  <p className="text-[10px] text-slate-500">Specified Value check</p>
                </div>
              </div>

              {/* Statutory Note */}
              <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700/60 text-xs text-slate-300 leading-relaxed">
                <span className="text-[#DC2626] font-bold block mb-1">
                  IRDAI Master Circular Clause 19:
                </span>
                Where settlement is delayed beyond 30 days from final document submission, the health insurer/TPA is liable to pay interest to the hospital at a rate which is 2% above the bank rate prevalent at the beginning of the financial year.
              </div>

              {/* Copy & Action Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  type="button"
                  onClick={handleCopySingleSummary}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                  Copy IRDAI Demand Ledger Table
                </button>

                {copyFeedback && (
                  <p className="text-center text-xs text-emerald-400 font-semibold animate-fade-in">
                    {copyFeedback}
                  </p>
                )}

                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors shadow-lg shadow-red-900/40 text-center"
                >
                  Draft Statutory Demand Notice for 1 Claim (₹{basePrice}) &rarr;
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* BATCH CSV INGESTION MODE */
          <div className="space-y-6">
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Hospital RCM Aging CSV Ingestion Desk
                  </h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Paste your Excel / HIS aged TPA claims ledger below or edit the sample columns to audit entire portfolios.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <label htmlFor="batch-tat-select" className="text-xs font-bold text-slate-700">
                    MOU TAT:
                  </label>
                  <select
                    id="batch-tat-select"
                    value={batchTatDays}
                    onChange={(e) => setBatchTatDays(Number(e.target.value))}
                    className="px-2.5 py-1 text-xs border border-slate-300 rounded-lg bg-white"
                  >
                    <option value={30}>30 Days (Statutory)</option>
                    <option value={15}>15 Days (Expedited)</option>
                  </select>
                </div>
              </div>

              <div className="mt-3">
                <textarea
                  value={batchRawInput}
                  onChange={(e) => setBatchRawInput(e.target.value)}
                  rows={6}
                  className="w-full p-3 font-mono text-[11px] leading-relaxed border border-slate-300 rounded-xl bg-white focus:ring-2 focus:ring-red-500 focus:outline-none"
                  placeholder="ClaimID,PatientName,InsurerOrTPA,BilledAmount,SettledAmount,SubmissionDate"
                />
              </div>

              <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className="text-slate-500">
                  Detected: <strong>{batchCalc.rows.length}</strong> claims across multiple TPAs
                </span>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setBatchRawInput(SAMPLE_CSV)}
                    className="px-3 py-1.5 rounded-lg border border-slate-300 text-slate-700 bg-white hover:bg-slate-100 font-semibold"
                  >
                    Reset Sample
                  </button>
                  <button
                    type="button"
                    onClick={handleDownloadBatchCSV}
                    className="px-3.5 py-1.5 rounded-lg font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors flex items-center gap-1.5"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download Penal Demand CSV
                  </button>
                </div>
              </div>
            </div>

            {/* Batch Aggregation KPI Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                <p className="text-[10px] font-bold uppercase text-slate-500">Total Withheld Principal</p>
                <p className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                  {formatINR(batchCalc.totalWithheld)}
                </p>
                <p className="text-[10px] text-slate-500 mt-0.5">Across {batchCalc.rows.length} claims</p>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                <p className="text-[10px] font-bold uppercase text-emerald-800">IRDAI Penal Interest</p>
                <p className="text-xl sm:text-2xl font-black text-emerald-700 mt-1">
                  {formatINR(batchCalc.totalPenal)}
                </p>
                <p className="text-[10px] text-emerald-600 mt-0.5">Accrued at 8.75% p.a.</p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <p className="text-[10px] font-bold uppercase text-red-800">Combined Recovery Demand</p>
                <p className="text-xl sm:text-2xl font-black text-[#DC2626] mt-1">
                  {formatINR(batchCalc.grandTotal)}
                </p>
                <p className="text-[10px] text-red-600 mt-0.5">Principal + Penal Interest</p>
              </div>

              <div className="bg-slate-900 text-white rounded-xl p-4">
                <p className="text-[10px] font-bold uppercase text-slate-400">Commercial Court Ready</p>
                <p className="text-xl sm:text-2xl font-black text-amber-400 mt-1">
                  {batchCalc.commercialCourtCount} Claims
                </p>
                <p className="text-[10px] text-slate-400 mt-0.5">Specified Value &gt;= ₹3 Lakhs</p>
              </div>
            </div>

            {/* Batch Table */}
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-left border-collapse text-xs">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="p-3 font-bold">Claim ID</th>
                    <th className="p-3 font-bold">Insurer / TPA</th>
                    <th className="p-3 font-bold">Billed</th>
                    <th className="p-3 font-bold">Settled</th>
                    <th className="p-3 font-bold">Withheld</th>
                    <th className="p-3 font-bold">Delay</th>
                    <th className="p-3 font-bold">Penal Interest</th>
                    <th className="p-3 font-bold">Total Demand</th>
                    <th className="p-3 font-bold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {batchCalc.rows.map((row) => (
                    <tr key={row.claimId} className="hover:bg-slate-50 transition-colors">
                      <td className="p-3 font-mono font-bold text-slate-900">{row.claimId}</td>
                      <td className="p-3 text-slate-700">{row.insurerTpa}</td>
                      <td className="p-3 font-mono text-slate-600">{formatINR(row.billedAmount)}</td>
                      <td className="p-3 font-mono text-slate-600">{formatINR(row.settledAmount)}</td>
                      <td className="p-3 font-mono font-bold text-red-600">{formatINR(row.withheldAmount)}</td>
                      <td className="p-3 font-bold text-amber-700">{row.delayDays}d</td>
                      <td className="p-3 font-mono font-bold text-emerald-600">{formatINR(row.penalInterest)}</td>
                      <td className="p-3 font-mono font-black text-slate-900">{formatINR(row.totalPayable)}</td>
                      <td className="p-3">
                        <span
                          className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${
                            row.status === "CHRONIC_DEFAULT"
                              ? "bg-amber-100 text-amber-900"
                              : "bg-emerald-100 text-emerald-900"
                          }`}
                        >
                          {row.statusLabel}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Batch Desk Handoff Banner */}
            <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-extrabold text-white">
                  Ready to Issue Bulk IRDAI Penal Interest Demands?
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  Our institutional healthcare RCM desk reconciles, certifies, and dispatches statutory legal notices to Insurers and TPAs nationwide.
                </p>
              </div>
              <div className="flex gap-3 shrink-0">
                <Link
                  href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors"
                >
                  Bulk Institutional Desk &rarr;
                </Link>
                <Link
                  href="/user/representees"
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-white/10 hover:bg-white/15 border border-white/20 transition-colors"
                >
                  Upload Hospital MIS
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
