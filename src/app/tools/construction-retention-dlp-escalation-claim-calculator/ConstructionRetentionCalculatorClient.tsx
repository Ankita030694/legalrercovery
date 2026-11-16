"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

type EmployerCategory = "private_developer" | "state_pwd" | "central_psu_nhai" | "epc_main_contractor";
type TrancheStructure = "split_50_50" | "post_dlp_100" | "split_30_70";

interface RABillRow {
  id: string;
  billNumber: string;
  billDate: string;
  grossAmount: number;
  retentionPercent: number;
  retentionDeducted: number;
  netPayable: number;
  amountReceived: number;
  balanceDue: number;
}

const SAMPLE_RA_BILLS: RABillRow[] = [
  {
    id: "ra-1",
    billNumber: "RA Bill 01 (Substructure)",
    billDate: "2024-03-15",
    grossAmount: 12000000,
    retentionPercent: 5,
    retentionDeducted: 600000,
    netPayable: 11400000,
    amountReceived: 11400000,
    balanceDue: 0,
  },
  {
    id: "ra-2",
    billNumber: "RA Bill 02 (Superstructure Fl 1-5)",
    billDate: "2024-08-20",
    grossAmount: 18500000,
    retentionPercent: 5,
    retentionDeducted: 925000,
    netPayable: 17575000,
    amountReceived: 17575000,
    balanceDue: 0,
  },
  {
    id: "ra-3",
    billNumber: "RA Bill 03 (Facade & Finishing)",
    billDate: "2025-01-10",
    grossAmount: 16000000,
    retentionPercent: 5,
    retentionDeducted: 800000,
    netPayable: 15200000,
    amountReceived: 13200000,
    balanceDue: 2000000,
  },
  {
    id: "ra-4",
    billNumber: "Final Bill (Handover & Reconciliation)",
    billDate: "2025-06-30",
    grossAmount: 14500000,
    retentionPercent: 5,
    retentionDeducted: 725000,
    netPayable: 13775000,
    amountReceived: 6275000,
    balanceDue: 7500000,
  },
];

function parseISODate(dateStr: string): Date {
  const parts = dateStr.trim().split("-").map(Number);
  if (parts.length !== 3 || !parts[0] || !parts[1] || !parts[2]) {
    return new Date(2025, 5, 30);
  }
  return new Date(parts[0], parts[1] - 1, parts[2]);
}

function addMonths(date: Date, months: number): Date {
  const d = new Date(date);
  d.setMonth(d.getMonth() + months);
  return d;
}

function addDays(date: Date, days: number): Date {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

function addYears(date: Date, years: number): Date {
  const d = new Date(date);
  d.setFullYear(d.getFullYear() + years);
  return d;
}

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

function daysDiff(d1: Date, d2: Date): number {
  const t1 = Date.UTC(d1.getFullYear(), d1.getMonth(), d1.getDate());
  const t2 = Date.UTC(d2.getFullYear(), d2.getMonth(), d2.getDate());
  return Math.floor((t2 - t1) / (1000 * 60 * 60 * 24));
}

export default function ConstructionRetentionCalculatorClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  // Project core inputs
  const [projectName, setProjectName] = useState("Commercial Tower Package A (Civil & MEP)");
  const [employerName, setEmployerName] = useState("Apex Infra Projects Ltd");
  const [employerCategory, setEmployerCategory] = useState<EmployerCategory>("private_developer");
  const [workOrderRef, setWorkOrderRef] = useState("WO/2023/EPC/089");
  
  // Key Milestone Dates
  const [virtualCompletionDate, setVirtualCompletionDate] = useState("2025-06-30");
  const [dlpMonths, setDlpMonths] = useState<number>(12);
  const [gracePeriodDays, setGracePeriodDays] = useState<number>(30);
  const [finalBillDate, setFinalBillDate] = useState("2025-06-30");
  const [calcDate, setCalcDate] = useState("2026-11-16");

  // Retention structure & amounts
  const [trancheStructure, setTrancheStructure] = useState<TrancheStructure>("split_50_50");
  const [retentionRate, setRetentionRate] = useState<number>(5.0);
  const [interestRate, setInterestRate] = useState<number>(18.0);
  
  // Claim items
  const [totalContractValue, setTotalContractValue] = useState<number>(61000000);
  const [unpaidFinalBillBalance, setUnpaidFinalBillBalance] = useState<number>(9500000);
  const [totalRetentionDeducted, setTotalRetentionDeducted] = useState<number>(3050000);
  const [retentionReleasedSoFar, setRetentionReleasedSoFar] = useState<number>(1525000); // e.g. 50% paid
  const [escalationVariationClaim, setEscalationVariationClaim] = useState<number>(1800000); // 10CC or extra item
  const [pbgValueHeld, setPbgValueHeld] = useState<number>(3050000); // 5% PBG

  // Copy notification state
  const [copied, setCopied] = useState(false);

  // Milestone Date Computations
  const vcDateObj = useMemo(() => parseISODate(virtualCompletionDate), [virtualCompletionDate]);
  const finalBillDateObj = useMemo(() => parseISODate(finalBillDate), [finalBillDate]);
  const calcDateObj = useMemo(() => parseISODate(calcDate), [calcDate]);

  // DLP Expiry Date
  const dlpExpiryDateObj = useMemo(() => addMonths(vcDateObj, dlpMonths), [vcDateObj, dlpMonths]);

  // Retention Tranche 1 Due Date (e.g. VC + 30 days)
  const tranche1DueDateObj = useMemo(() => addDays(vcDateObj, gracePeriodDays), [vcDateObj, gracePeriodDays]);

  // Retention Tranche 2 Due Date (DLP Expiry + Grace period)
  const tranche2DueDateObj = useMemo(() => addDays(dlpExpiryDateObj, gracePeriodDays), [dlpExpiryDateObj, gracePeriodDays]);

  // Split Limitation Calculations (Limitation Act 1963)
  // Clock 1: Final Bill (Article 18 / 55 - 3 years from final bill / completion)
  const finalBillLimitationDeadlineObj = useMemo(() => addYears(finalBillDateObj, 3), [finalBillDateObj]);
  const finalBillDaysRemaining = useMemo(() => daysDiff(calcDateObj, finalBillLimitationDeadlineObj), [calcDateObj, finalBillLimitationDeadlineObj]);

  // Clock 2: Retention Money Post-DLP Tranche (Article 113 - 3 years from DLP expiry + grace period)
  const retentionLimitationDeadlineObj = useMemo(() => addYears(tranche2DueDateObj, 3), [tranche2DueDateObj]);
  const retentionDaysRemaining = useMemo(() => daysDiff(calcDateObj, retentionLimitationDeadlineObj), [calcDateObj, retentionLimitationDeadlineObj]);

  // Net Retention Withheld Balance
  const netRetentionWithheld = Math.max(0, totalRetentionDeducted - retentionReleasedSoFar);

  // Overdue interest computations
  // 1. Final Bill Interest (from Final Bill submission + 30 days credit period to calcDate)
  const finalBillDueDate = useMemo(() => addDays(finalBillDateObj, 30), [finalBillDateObj]);
  const finalBillDaysOverdue = Math.max(0, daysDiff(finalBillDueDate, calcDateObj));
  const finalBillInterest = useMemo(() => {
    return (unpaidFinalBillBalance * (interestRate / 100) * finalBillDaysOverdue) / 365;
  }, [unpaidFinalBillBalance, interestRate, finalBillDaysOverdue]);

  // 2. Retention Tranche Interest (from Tranche 2 due date to calcDate)
  const retentionDaysOverdue = Math.max(0, daysDiff(tranche2DueDateObj, calcDateObj));
  const retentionInterest = useMemo(() => {
    return (netRetentionWithheld * (interestRate / 100) * retentionDaysOverdue) / 365;
  }, [netRetentionWithheld, interestRate, retentionDaysOverdue]);

  // 3. Escalation / Extra Item Interest (from final bill submission to calcDate)
  const escalationDaysOverdue = Math.max(0, daysDiff(finalBillDateObj, calcDateObj));
  const escalationInterest = useMemo(() => {
    return (escalationVariationClaim * (interestRate / 100) * escalationDaysOverdue) / 365;
  }, [escalationVariationClaim, interestRate, escalationDaysOverdue]);

  // Total Interest and Claim Principal
  const totalClaimPrincipal = unpaidFinalBillBalance + netRetentionWithheld + escalationVariationClaim;
  const totalAccruedInterest = finalBillInterest + retentionInterest + escalationInterest;
  const totalSpecifiedValue = totalClaimPrincipal + totalAccruedInterest;

  // Commercial Court Jurisdiction Analysis (Section 12 Commercial Courts Act 2015)
  const jurisdictionAnalysis = useMemo(() => {
    if (totalSpecifiedValue < 300000) {
      return {
        level: "Civil Court / Sub-Court (Below ₹3 Lakhs)",
        color: "bg-slate-100 text-slate-800 border-slate-300",
        advice: "Claim is below the ₹3 Lakh Specified Value threshold. Recover via Civil Suit Order 37 or MSME Samadhaan (if supply component is separable).",
      };
    }
    if (totalSpecifiedValue < 10000000) {
      return {
        level: "Commercial Court (District Judge Level: ₹3L to ₹1 Cr)",
        color: "bg-blue-50 text-blue-800 border-blue-200",
        advice: "Falls strictly within Commercial Courts Act s.2(1)(c)(vi). Mandatory Section 12A Pre-Institution Mediation required unless seeking urgent interim stay under Section 9.",
      };
    }
    if (totalSpecifiedValue < 50000000) {
      return {
        level: "Senior Commercial Court / Fast-Track Division (₹1 Cr to ₹5 Cr)",
        color: "bg-emerald-50 text-emerald-800 border-emerald-200",
        advice: "High-ticket commercial dispute. Eligible for Section 21 Arbitration invocation, Section 9 Court Injunction against PBG encashment, and Summary Judgment under CPC Order XIII-A.",
      };
    }
    return {
      level: "High Court Commercial Division (₹5 Cr+ Major Infrastructure)",
      color: "bg-red-50 text-red-800 border-red-200",
      advice: "Major infrastructure dispute. High Court has original commercial jurisdiction in metro seats. Sole Arbitrator appointment via Section 11(6) High Court or institutional DIAC/MCIA.",
    };
  }, [totalSpecifiedValue]);

  // Limitation Status Badges
  const getLimitationStatus = (daysLeft: number) => {
    if (daysLeft < 0) {
      return {
        text: `TIME-BARRED (${Math.abs(daysLeft)} days past 3-yr cutoff)`,
        badge: "bg-red-100 text-red-800 border-red-300",
        severity: "critical",
      };
    }
    if (daysLeft <= 90) {
      return {
        text: `CRITICAL EXPIRY (${daysLeft} days remaining)`,
        badge: "bg-red-500 text-white font-bold animate-pulse",
        severity: "high",
      };
    }
    if (daysLeft <= 180) {
      return {
        text: `ACTION REQUIRED (${daysLeft} days remaining)`,
        badge: "bg-amber-100 text-amber-800 border-amber-300",
        severity: "warning",
      };
    }
    return {
      text: `ACTIVE & SAFE (${daysLeft} days remaining)`,
      badge: "bg-emerald-100 text-emerald-800 border-emerald-300",
      severity: "safe",
    };
  };

  const finalBillStatus = getLimitationStatus(finalBillDaysRemaining);
  const retentionStatus = getLimitationStatus(retentionDaysRemaining);

  // Copy Summary Dossier
  const handleCopySummary = () => {
    const summaryText = `LEGALRECOVERY.IN — CONTRACTOR CLAIM & RETENTION LIMITATION SUMMARY
========================================================================
Project Name          : ${projectName}
Work Order Ref        : ${workOrderRef}
Employer / Client     : ${employerName} (${employerCategory.replace("_", " ").toUpperCase()})
Virtual Completion    : ${formatDateIN(vcDateObj)}
DLP Duration          : ${dlpMonths} Months (Expires: ${formatDateIN(dlpExpiryDateObj)})
Post-DLP Grace Period : ${gracePeriodDays} Days (Due Date: ${formatDateIN(tranche2DueDateObj)})
------------------------------------------------------------------------
FINANCIAL CLAIM SCHEDULE:
1. Unpaid RA / Final Bill Balance : ${formatINR(unpaidFinalBillBalance)}
2. Retention Money Withheld       : ${formatINR(netRetentionWithheld)} (Total Deducted: ${formatINR(totalRetentionDeducted)})
3. Price Escalation / Extra Items : ${formatINR(escalationVariationClaim)}
4. Performance Bank Guarantee Held: ${formatINR(pbgValueHeld)}
------------------------------------------------------------------------
CLAIM PRINCIPAL TOTAL             : ${formatINR(totalClaimPrincipal)}
ACCRUED 18% COMMERCIAL INTEREST   : ${formatINR(totalAccruedInterest)}
  - Final Bill Interest (${finalBillDaysOverdue} days) : ${formatINR(finalBillInterest)}
  - Retention Interest (${retentionDaysOverdue} days)  : ${formatINR(retentionInterest)}
  - Escalation Interest (${escalationDaysOverdue} days): ${formatINR(escalationInterest)}
TOTAL SPECIFIED VALUE (Sec 12)    : ${formatINR(totalSpecifiedValue)}
------------------------------------------------------------------------
STATUTORY LIMITATION STATUS (LIMITATION ACT, 1963):
- Final Bill (Article 18/55)     : Deadline ${formatDateIN(finalBillLimitationDeadlineObj)} [${finalBillStatus.text}]
- Retention Money (Article 113)  : Deadline ${formatDateIN(retentionLimitationDeadlineObj)} [${retentionStatus.text}]
JURISDICTION                      : ${jurisdictionAnalysis.level}
========================================================================
Generated via LegalRecovery.in Construction Claims Intelligence Engine`;

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const loadSampleLedger = () => {
    setProjectName("IT Park Commercial Tower (Civil, Structural & MEP Package)");
    setEmployerName("Vanguard Urban Developers Pvt Ltd");
    setEmployerCategory("private_developer");
    setWorkOrderRef("VUD/DELHI/PKG-3/2023-24");
    setVirtualCompletionDate("2025-03-31");
    setDlpMonths(12);
    setGracePeriodDays(30);
    setFinalBillDate("2025-04-15");
    setTotalContractValue(78500000);
    setTotalRetentionDeducted(3925000);
    setRetentionReleasedSoFar(1962500);
    setUnpaidFinalBillBalance(8450000);
    setEscalationVariationClaim(2450000);
    setPbgValueHeld(3925000);
    setInterestRate(18.0);
  };

  return (
    <div className="w-full bg-slate-900/50 rounded-3xl border border-slate-700/60 p-4 sm:p-6 md:p-8 backdrop-blur-xl shadow-2xl">
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-800 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626] animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-red-400">
              Interactive B2B Statutory Tool &bull; IND-07 Infrastructure &amp; EPC Desk
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Construction Retention, DLP Expiry &amp; Limitation Calculator
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Computes split 3-year limitation clocks under Articles 18 &amp; 113 of the Limitation Act, 1963, 18% statutory interest, and Commercial Courts Act Specified Value.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={loadSampleLedger}
            className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
          >
            Load EPC Sample Ledger
          </button>
          <button
            type="button"
            onClick={handleCopySummary}
            className="px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors shadow-md shadow-red-900/40"
          >
            {copied ? "✓ Copied Dossier!" : "Copy Claim Dossier"}
          </button>
        </div>
      </div>

      {/* Main Grid: Inputs vs Results */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
        {/* Left Column: Form Inputs (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Card 1: Project & Employer Credentials */}
          <div className="bg-slate-800/80 rounded-2xl p-5 border border-slate-700">
            <h3 className="text-sm font-bold uppercase tracking-wider text-red-400 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
              1. Project Contract &amp; Employer Classification
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Project Title / Package Name
                </label>
                <input
                  type="text"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#DC2626]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Work Order / Agreement Ref No.
                </label>
                <input
                  type="text"
                  value={workOrderRef}
                  onChange={(e) => setWorkOrderRef(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#DC2626]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Employer / Principal Name
                </label>
                <input
                  type="text"
                  value={employerName}
                  onChange={(e) => setEmployerName(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#DC2626]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Employer Statutory Profile
                </label>
                <select
                  value={employerCategory}
                  onChange={(e) => setEmployerCategory(e.target.value as EmployerCategory)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#DC2626]"
                >
                  <option value="private_developer">Private Developer / Builder</option>
                  <option value="central_psu_nhai">Central PSU / NHAI / Railways / CPWD (Sec 80 CPC)</option>
                  <option value="state_pwd">State PWD / Urban Local Body</option>
                  <option value="epc_main_contractor">Main EPC Contractor (Subcontractor Track)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Card 2: Handover Milestones & DLP Duration */}
          <div className="bg-slate-800/80 rounded-2xl p-5 border border-slate-700">
            <h3 className="text-sm font-bold uppercase tracking-wider text-red-400 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
              2. Handover Milestones &amp; Defect Liability Period (DLP)
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Virtual Completion (TOC) Date
                </label>
                <input
                  type="date"
                  value={virtualCompletionDate}
                  onChange={(e) => setVirtualCompletionDate(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#DC2626]"
                />
                <span className="text-[10px] text-slate-400 mt-1 block">
                  Taking Over Certificate issued
                </span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  DLP Duration (Months)
                </label>
                <select
                  value={dlpMonths}
                  onChange={(e) => setDlpMonths(Number(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#DC2626]"
                >
                  <option value={6}>6 Months (Finishing / Fit-out)</option>
                  <option value={12}>12 Months (Standard Civil / MEP)</option>
                  <option value={24}>24 Months (Highway / Heavy EPC)</option>
                  <option value={36}>36 Months (Major Infrastructure)</option>
                </select>
                <span className="text-[10px] text-slate-400 mt-1 block">
                  Contractual rectification period
                </span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Contract Release Grace Period
                </label>
                <select
                  value={gracePeriodDays}
                  onChange={(e) => setGracePeriodDays(Number(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#DC2626]"
                >
                  <option value={15}>15 Days post-DLP</option>
                  <option value={30}>30 Days (Standard CPWD)</option>
                  <option value={60}>60 Days (Standard FIDIC)</option>
                  <option value={90}>90 Days (Tender Specification)</option>
                </select>
                <span className="text-[10px] text-slate-400 mt-1 block">
                  Mandatory retention release grace
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 pt-4 border-t border-slate-700/60">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Final Bill Submission Date
                </label>
                <input
                  type="date"
                  value={finalBillDate}
                  onChange={(e) => setFinalBillDate(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#DC2626]"
                />
                <span className="text-[10px] text-slate-400 mt-1 block">
                  Starts Article 18 limitation clock
                </span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Audit / Calculation As Of Date
                </label>
                <input
                  type="date"
                  value={calcDate}
                  onChange={(e) => setCalcDate(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#DC2626]"
                />
                <span className="text-[10px] text-slate-400 mt-1 block">
                  Today or pre-notice cutoff
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: Financial Claim Ledger */}
          <div className="bg-slate-800/80 rounded-2xl p-5 border border-slate-700">
            <h3 className="text-sm font-bold uppercase tracking-wider text-red-400 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
              3. Contract Financial Ledger &amp; Retention Holdbacks
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Total Contract / Executed Value (₹)
                </label>
                <input
                  type="number"
                  value={totalContractValue}
                  onChange={(e) => setTotalContractValue(Number(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#DC2626]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Retention Tranche Policy
                </label>
                <select
                  value={trancheStructure}
                  onChange={(e) => setTrancheStructure(e.target.value as TrancheStructure)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#DC2626]"
                >
                  <option value="split_50_50">50% at TOC Handover + 50% Post-DLP Expiry</option>
                  <option value="post_dlp_100">100% Retained Until Final DLP Clearance</option>
                  <option value="split_30_70">30% at Completion + 70% Post-DLP</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Total Retention Deducted from RA Bills (₹)
                </label>
                <input
                  type="number"
                  value={totalRetentionDeducted}
                  onChange={(e) => setTotalRetentionDeducted(Number(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#DC2626]"
                />
                <span className="text-[10px] text-slate-400 mt-1 block">
                  Typically 5%–10% of gross certified bills
                </span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Retention Released / Paid So Far (₹)
                </label>
                <input
                  type="number"
                  value={retentionReleasedSoFar}
                  onChange={(e) => setRetentionReleasedSoFar(Number(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#DC2626]"
                />
                <span className="text-[10px] text-slate-400 mt-1 block">
                  Withheld balance: {formatINR(netRetentionWithheld)}
                </span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Pending Final / RA Bill Principal Balance (₹)
                </label>
                <input
                  type="number"
                  value={unpaidFinalBillBalance}
                  onChange={(e) => setUnpaidFinalBillBalance(Number(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#DC2626]"
                />
                <span className="text-[10px] text-slate-400 mt-1 block">
                  Gross uncertified work or withheld certification
                </span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Price Escalation &amp; Extra-Item Claims (₹)
                </label>
                <input
                  type="number"
                  value={escalationVariationClaim}
                  onChange={(e) => setEscalationVariationClaim(Number(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#DC2626]"
                />
                <span className="text-[10px] text-slate-400 mt-1 block">
                  CPWD 10CC formula, steel/cement, prolongation
                </span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Performance Bank Guarantee (PBG) Held (₹)
                </label>
                <input
                  type="number"
                  value={pbgValueHeld}
                  onChange={(e) => setPbgValueHeld(Number(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#DC2626]"
                />
                <span className="text-[10px] text-slate-400 mt-1 block">
                  Target for Section 9 High Court Injunction
                </span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Statutory Claim Interest Rate (% p.a.)
                </label>
                <input
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#DC2626]"
                />
                <span className="text-[10px] text-slate-400 mt-1 block">
                  Standard Commercial / Arbitration Rate: 18% p.a.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Live Statutory Results & Split Limitation Clocks (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Main Specified Value Card */}
          <div className="bg-gradient-to-br from-[#111827] via-[#1E293B] to-[#0F172A] rounded-2xl p-6 border-2 border-red-900/60 shadow-xl text-white">
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-950/80 text-red-400 border border-red-800/80 mb-3">
              Section 12 Commercial Courts Act &bull; Total Claimable Value
            </span>
            <div className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-1">
              {formatINR(totalSpecifiedValue)}
            </div>
            <p className="text-xs text-slate-400 mb-5">
              Includes Principal Claim {formatINR(totalClaimPrincipal)} + Accrued 18% Commercial Interest {formatINR(totalAccruedInterest)}.
            </p>

            {/* Breakdown Mini-Ledger */}
            <div className="space-y-2.5 pt-4 border-t border-slate-800 text-xs">
              <div className="flex justify-between items-center text-slate-300">
                <span>Withheld Retention Balance:</span>
                <span className="font-bold text-white">{formatINR(netRetentionWithheld)}</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span>Unpaid RA / Final Bill Principal:</span>
                <span className="font-bold text-white">{formatINR(unpaidFinalBillBalance)}</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span>Escalation / Variation Claims:</span>
                <span className="font-bold text-white">{formatINR(escalationVariationClaim)}</span>
              </div>
              <div className="flex justify-between items-center text-emerald-400 font-semibold pt-2 border-t border-slate-800/80">
                <span>Total 18% Statutory Interest:</span>
                <span>+{formatINR(totalAccruedInterest)}</span>
              </div>
            </div>

            {/* Jurisdiction Pill */}
            <div className={`mt-5 p-3 rounded-xl border text-xs font-medium ${jurisdictionAnalysis.color}`}>
              <div className="font-bold mb-1 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                Jurisdiction: {jurisdictionAnalysis.level}
              </div>
              <p className="text-[11px] leading-relaxed">{jurisdictionAnalysis.advice}</p>
            </div>
          </div>

          {/* Split Limitation Clocks Card */}
          <div className="bg-slate-800/90 rounded-2xl p-5 border border-slate-700 text-white space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-red-400 flex items-center justify-between">
              <span>Split 3-Year Limitation Clocks</span>
              <span className="text-[10px] text-slate-400 lowercase font-normal">Limitation Act, 1963</span>
            </h3>

            {/* Clock 1: Final Bill (Article 18 / 55) */}
            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-700">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold text-slate-200">
                  Clock 1: Unpaid Final Bill (Article 18 / 55)
                </span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${finalBillStatus.badge}`}>
                  {finalBillStatus.text}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Runs 3 years from final bill submission ({formatDateIN(finalBillDateObj)}). 
                Statutory limitation deadline: <strong className="text-slate-200">{formatDateIN(finalBillLimitationDeadlineObj)}</strong>.
              </p>
            </div>

            {/* Clock 2: Retention Money Post-DLP (Article 113) */}
            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-700">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold text-slate-200">
                  Clock 2: Post-DLP Retention (Article 113)
                </span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${retentionStatus.badge}`}>
                  {retentionStatus.text}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Runs 3 years from DLP expiry + grace period ({formatDateIN(tranche2DueDateObj)}). 
                Statutory limitation deadline: <strong className="text-slate-200">{formatDateIN(retentionLimitationDeadlineObj)}</strong>.
              </p>
              <div className="mt-2 text-[10px] text-emerald-400 font-medium bg-emerald-950/40 p-2 rounded-lg border border-emerald-900/60">
                ✓ Crucial Advantage: Even if Final Bill is aged, retention money has its own fresh 3-year clock starting only upon DLP completion!
              </div>
            </div>

            {/* Handover & DLP Milestones Bar */}
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-700/60 text-xs space-y-2">
              <div className="flex justify-between text-slate-400">
                <span>DLP Expiry Date ({dlpMonths} Mo):</span>
                <span className="font-semibold text-slate-200">{formatDateIN(dlpExpiryDateObj)}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Contract Retention Release Date:</span>
                <span className="font-semibold text-white">{formatDateIN(tranche2DueDateObj)}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Days Retention Overdue:</span>
                <span className={`font-semibold ${retentionDaysOverdue > 0 ? "text-red-400" : "text-emerald-400"}`}>
                  {retentionDaysOverdue > 0 ? `${retentionDaysOverdue} Days Overdue` : "Not Yet Due"}
                </span>
              </div>
            </div>
          </div>

          {/* Action Trigger Card */}
          <div className="bg-slate-800 rounded-2xl p-5 border border-slate-700 text-center">
            <p className="text-xs font-bold text-white mb-2">
              Serve a Formal Pre-Arbitration / CPC Section 80 Notice
            </p>
            <p className="text-[11px] text-slate-400 mb-4 leading-relaxed">
              Arrest the 3-year limitation clock, claim 18% statutory interest, and demand immediate release of your retention money and Performance Bank Guarantee.
            </p>
            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors shadow-lg shadow-red-900/40"
              >
                Draft Advocate Notice &mdash; ₹{basePrice} &rarr;
              </button>
              <Link
                href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                className="w-full py-2.5 rounded-xl font-semibold text-xs text-slate-300 bg-slate-900 hover:bg-slate-950 border border-slate-700 transition-colors"
              >
                Upload Multi-Site Contractor CSV
              </Link>
            </div>
          </div>
        </div>
      </div>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
