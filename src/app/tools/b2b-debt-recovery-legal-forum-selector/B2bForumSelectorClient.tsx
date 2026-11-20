"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";

type CreditorType =
  | "b2b_supplier"
  | "bank_nbfc_secured"
  | "bank_nbfc_unsecured"
  | "epc_works_contractor"
  | "saas_logistics_exporter";

type UdyamTier =
  | "micro_prior"
  | "small_prior"
  | "medium"
  | "none_or_post";

type DebtorEntity =
  | "company_llp"
  | "partnership_prop"
  | "govt_psu"
  | "individual_guarantor";

type DisputeStatus =
  | "undisputed_fresh"
  | "pre_existing_dispute"
  | "near_limitation";

interface ProofState {
  writtenPoInvoice: boolean;
  dishonouredCheque: boolean;
  enachBounce: boolean;
  securedCollateral: boolean;
  arbitrationClause: boolean;
}

interface FatalTrap {
  code: string;
  title: string;
  detail: string;
  remedy: string;
}

interface RankedForum {
  id: string;
  name: string;
  statute: string;
  score: number;
  badge: "Best Primary Track" | "Strong Parallel Track" | "Viable Alternative";
  timeline: string;
  pecuniaryFloor: string;
  costEstimate: string;
  reason: string;
  noticeWindow: string;
}

function formatINR(amount: number): string {
  if (!Number.isFinite(amount) || amount <= 0) return "₹0";
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function B2bForumSelectorClient() {
  const [creditorType, setCreditorType] = useState<CreditorType>("b2b_supplier");
  const [udyamTier, setUdyamTier] = useState<UdyamTier>("small_prior");
  const [claimAmount, setClaimAmount] = useState<number>(2500000);
  const [debtorEntity, setDebtorEntity] = useState<DebtorEntity>("company_llp");
  const [disputeStatus, setDisputeStatus] = useState<DisputeStatus>("undisputed_fresh");
  const [proofs, setProofs] = useState<ProofState>({
    writtenPoInvoice: true,
    dishonouredCheque: false,
    enachBounce: false,
    securedCollateral: false,
    arbitrationClause: false,
  });
  const [copied, setCopied] = useState(false);

  const toggleProof = (key: keyof ProofState) => {
    setProofs((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const evaluation = useMemo(() => {
    const traps: FatalTrap[] = [];
    const forums: RankedForum[] = [];

    const isMicroOrSmallPrior = udyamTier === "micro_prior" || udyamTier === "small_prior";
    const isBankOrNbfc =
      creditorType === "bank_nbfc_secured" || creditorType === "bank_nbfc_unsecured";
    const isWorksContractor = creditorType === "epc_works_contractor";
    const isCompanyOrLlp = debtorEntity === "company_llp";

    // 1. Screen Fatal Jurisdiction Traps
    if (udyamTier === "medium") {
      traps.push({
        code: "TRAP-MSME-MEDIUM",
        title: "Medium Enterprise Barred from MSME Samadhaan / MSEFC",
        detail:
          "Section 2(n) of the MSMED Act, 2006 restricts Chapter V (3× RBI compound interest & MSEFC reference) strictly to Micro and Small enterprises. Medium Udyam filings are summarily rejected.",
        remedy:
          "Route via Order XXXVII CPC Summary Suit, Commercial Court (₹3L+), or IBC Section 8 (if ≥ ₹1 Cr).",
      });
    }

    if (udyamTier === "none_or_post" && !isBankOrNbfc) {
      traps.push({
        code: "TRAP-SILPI-POST-UDYAM",
        title: "Post-Contract / Unregistered Udyam Fails Silpi Industries Test",
        detail:
          "Per Supreme Court in Silpi Industries v. KSRTC (2021) 18 SCC 790, Udyam Registration obtained after the supply contract/PO date does not confer MSEFC jurisdiction.",
        remedy:
          "Use Order XXXVII CPC (written invoice/PO) or Commercial Court with Section 12A mediation.",
      });
    }

    if (isWorksContractor && isMicroOrSmallPrior) {
      traps.push({
        code: "TRAP-WORKS-CONTRACT",
        title: "Indivisible EPC / Works Contracts Excluded from MSEFC",
        detail:
          "High Courts consistently hold that composite EPC, civil construction, and works contracts (supply + erection/labour) are not pure 'goods or services' contracts under MSMED Act s.18.",
        remedy:
          "Invoke contractual Arbitration (s.21 + s.9 interim relief) or Commercial Court (₹3L+).",
      });
    }

    if (isBankOrNbfc && claimAmount < 2000000) {
      traps.push({
        code: "TRAP-DRT-20L",
        title: "Claim Below ₹20 Lakh Cannot Enter DRT or NBFC SARFAESI",
        detail:
          "Under Section 1(4) of the RDB Act, 1993 and RBI/MCA notifications for NBFCs, Debt Recovery Tribunal (DRT) and NBFC SARFAESI enforcement require a minimum ₹20,00,000 default.",
        remedy:
          "Escalate via PSS Act s.25 (e-NACH bounce), NI Act s.138, or Order XXXVII CPC Summary Suit.",
      });
    }

    if (claimAmount < 10000000 && isCompanyOrLlp && !isBankOrNbfc) {
      traps.push({
        code: "TRAP-IBC-1CR",
        title: "Default Below ₹1 Crore Barred from NCLT / IBC Section 8",
        detail:
          "Post-2020 MCA notification under Section 4 of IBC, 2016, an Operational Creditor cannot file a Section 9 CIRP petition unless principal + contractual interest equals or exceeds ₹1,00,00,000.",
        remedy:
          "Do not waste time issuing Form 3/4 below ₹1 Cr; file MSME ODR (if Micro/Small) or Order XXXVII CPC.",
      });
    }

    if (disputeStatus === "pre_existing_dispute" && claimAmount >= 10000000 && isCompanyOrLlp) {
      traps.push({
        code: "TRAP-MOBILOX-DISPUTE",
        title: "Pre-Existing Dispute Defeats IBC Section 9 (Mobilox Test)",
        detail:
          "Under Mobilox Innovations v. Kirusa Software (2018) 1 SCC 353, even a plausible pre-existing quality/rate email before the Section 8 Demand Notice compels NCLT to reject the CIRP petition.",
        remedy:
          "Bypass NCLT and file Commercial Court (with s.12A mediation) or Arbitration where evidence is adjudicated.",
      });
    }

    if (claimAmount >= 300000 && !proofs.arbitrationClause && !isMicroOrSmallPrior && !isBankOrNbfc) {
      traps.push({
        code: "TRAP-SEC-12A",
        title: "Commercial Suit (₹3L+) Requires Mandatory Section 12A Mediation",
        detail:
          "Under Patil Automation (2022) 10 SCC 1, filing a Commercial Suit of Specified Value (≥ ₹3 Lakh) without a DLSA Form-3 Non-Starter Report leads to suo motu rejection under Order VII Rule 11—unless urgent interim relief (e.g., Order 38 Rule 5 attachment) is pleaded per Yamini Manohar.",
        remedy:
          "Serve Legal Notice first, then file Form-1 DLSA Mediation (₹1,000 fee) or plead urgent asset dissipation.",
      });
    }

    // 2. Score & Rank Eligible Forums
    // A. SARFAESI Act, 2002
    if (
      isBankOrNbfc &&
      proofs.securedCollateral &&
      ((creditorType === "bank_nbfc_secured" && claimAmount >= 100000) ||
        claimAmount >= 2000000)
    ) {
      forums.push({
        id: "sarfaesi",
        name: "SARFAESI Act, 2002 (s.13(2) & s.13(4) Possession)",
        statute: "SARFAESI Act s.13(2) / s.14 DM-CMM Assistance",
        score: 96,
        badge: "Best Primary Track",
        timeline: "60-day statutory notice + DM/CMM possession (4–8 months)",
        pecuniaryFloor: "₹1 Lakh (Banks) / ₹20 Lakh (Notified NBFCs)",
        costEstimate: "Zero ad-valorem court fee (Valuation + DM/CMM application cost)",
        reason:
          "Enforces security interest without civil court trial; overrides ordinary civil suits once NPA is classified.",
        noticeWindow: "60-Day Section 13(2) Statutory Demand Notice",
      });
    }

    // B. MSME Samadhaan / MSEFC (Section 18 MSMED Act)
    if (isMicroOrSmallPrior && !isWorksContractor && !isBankOrNbfc) {
      const score = disputeStatus === "pre_existing_dispute" ? 86 : 95;
      forums.push({
        id: "msme_msefc",
        name: "MSME Samadhaan / MSEFC (s.15–18 + s.43B(h) Tax Leverage)",
        statute: "MSMED Act, 2006 s.15, s.16 (3× RBI Compound), s.18 & IT Act s.43B(h)",
        score,
        badge: "Best Primary Track",
        timeline: "90-day statutory conciliation + arbitration target (6–12 months typical)",
        pecuniaryFloor: "No minimum floor (₹10,000 to ₹50 Cr+)",
        costEstimate: "Minimal MSEFC filing fee; buyer must pre-deposit 75% to appeal (s.19)",
        reason:
          "Unlocks 20.25% p.a. monthly-compounded interest (3× RBI Bank Rate) + buyer Income-tax s.43B(h) disallowance.",
        noticeWindow: "15-Day MSME Section 16 & Section 43B(h) Pre-MSEFC Notice",
      });
    }

    // C. IBC Section 8 & 9 (Operational / Financial Creditor)
    if (
      claimAmount >= 10000000 &&
      isCompanyOrLlp &&
      disputeStatus !== "pre_existing_dispute"
    ) {
      forums.push({
        id: "ibc_nclt",
        name: "NCLT Insolvency (IBC Section 8 Demand Notice / s.7)",
        statute: "Insolvency & Bankruptcy Code, 2016 s.4, s.8 (Form 3/4) & s.9",
        score: isBankOrNbfc ? 90 : 92,
        badge: forums.length === 0 ? "Best Primary Track" : "Strong Parallel Track",
        timeline: "10-day s.8 cure window + 14-day admission target (3–9 months)",
        pecuniaryFloor: "₹1,00,00,000 (₹1 Crore)",
        costEstimate: "₹2,000 (Operational Creditor s.9) / ₹25,000 (Financial Creditor s.7)",
        reason:
          "Maximum settlement leverage on solvent Companies/LLPs because admission suspends the Board of Directors.",
        noticeWindow: "10-Day IBC Section 8 Form 3 / Form 4 Demand Notice",
      });
    }

    // D. DRT (RDB Act, 1993)
    if (isBankOrNbfc && claimAmount >= 2000000) {
      forums.push({
        id: "drt",
        name: "Debt Recovery Tribunal (DRT Original Application)",
        statute: "RDB Act, 1993 s.19 & Rule 7 Fee Rules",
        score: proofs.securedCollateral ? 84 : 93,
        badge: proofs.securedCollateral ? "Strong Parallel Track" : "Best Primary Track",
        timeline: "180-day statutory target (12–24 months with Recovery Certificate)",
        pecuniaryFloor: "₹20,00,000 (₹20 Lakh)",
        costEstimate: "₹12,000 + ₹1,000 per ₹1L above ₹10L (capped at ₹1,50,000)",
        reason:
          "Dedicated banking tribunal for unsecured or shortfall recovery ≥ ₹20L with Recovery Officer attachment powers.",
        noticeWindow: "15-Day Loan Recall & Guarantor Invocation Notice",
      });
    }

    // E. NI Act Section 138 (Cheque Bounce)
    if (proofs.dishonouredCheque) {
      forums.push({
        id: "ni_138",
        name: "Criminal Complaint u/s 138 NI Act + s.143A Interim Relief",
        statute: "Negotiable Instruments Act, 1881 s.138, s.141 (Directors) & s.143A",
        score: 91,
        badge: forums.some((f) => f.badge === "Best Primary Track")
          ? "Strong Parallel Track"
          : "Best Primary Track",
        timeline: "30-day notice + 15-day cure + Magistrate summons (up to 20% interim u/s 143A)",
        pecuniaryFloor: "No minimum floor",
        costEstimate: "Nominal criminal court stamp/process fee",
        reason:
          "Creates personal criminal liability for signatory & managing directors; legally stackable alongside civil recovery.",
        noticeWindow: "30-Day Statutory Demand Notice (15-Day Cure Period)",
      });
    }

    // F. PSS Act Section 25 (e-NACH / AutoPay Bounce)
    if (proofs.enachBounce) {
      forums.push({
        id: "pss_25",
        name: "e-NACH / AutoPay Criminal Prosecution (PSS Act s.25)",
        statute: "Payment & Settlement Systems Act, 2007 s.25(1) & (5)",
        score: 89,
        badge: forums.some((f) => f.badge === "Best Primary Track")
          ? "Strong Parallel Track"
          : "Best Primary Track",
        timeline: "30-day notice + 15-day cure + summary Magistrate trial",
        pecuniaryFloor: "No minimum floor",
        costEstimate: "Nominal Magistrate filing fee (batch-friendly for NBFCs/SaaS)",
        reason:
          "Mirrors Section 138 criminal deterrence for electronic mandate dishonours without needing physical PDCs.",
        noticeWindow: "30-Day PSS Act s.25 Electronic Bounce Notice (15-Day Cure)",
      });
    }

    // G. Order XXXVII CPC Summary Suit (Written Contract / Invoice)
    if (proofs.writtenPoInvoice && !proofs.arbitrationClause && disputeStatus !== "pre_existing_dispute") {
      forums.push({
        id: "order_37",
        name:
          claimAmount >= 300000
            ? "Order XXXVII CPC Summary Suit (Commercial Court Division)"
            : "Order XXXVII CPC Summary Suit (Civil Judge)",
        statute:
          claimAmount >= 300000
            ? "CPC Order XXXVII + Commercial Courts Act, 2015 s.12A"
            : "CPC 1908 Order XXXVII Rules 1–3",
        score: 85,
        badge: forums.some((f) => f.badge === "Best Primary Track")
          ? "Strong Parallel Track"
          : "Best Primary Track",
        timeline: "10-day appearance + Leave to Defend screening (6–14 months)",
        pecuniaryFloor: "No floor (≥ ₹3 Lakh enters Commercial Court)",
        costEstimate: "State ad-valorem court fee (refundable in full if settled in s.12A mediation)",
        reason:
          "Debtor cannot defend as a matter of right; must show a triable defence within 10 days or suffer immediate decree.",
        noticeWindow: "15-Day Order 37 Demand Notice (+ s.12A Mediation if ≥ ₹3L)",
      });
    }

    // H. Arbitration (s.21 + s.9 Interim Freeze)
    if (proofs.arbitrationClause) {
      forums.push({
        id: "arbitration",
        name: "Contractual Arbitration (s.21 Invocation + s.9 Asset Freeze)",
        statute: "Arbitration & Conciliation Act, 1996 s.9, s.11 & s.29A (12-month award)",
        score: 83,
        badge: forums.some((f) => f.badge === "Best Primary Track")
          ? "Strong Parallel Track"
          : "Best Primary Track",
        timeline: "12 months from completion of pleadings (s.29A); s.9 interim relief in 2–4 weeks",
        pecuniaryFloor: "No minimum floor",
        costEstimate: "Fourth Schedule arbitrator fee + s.11 HC petition if opposite party stalls",
        reason:
          "Mandatory where contract has an arbitration clause; bypasses s.12A mediation and supports urgent s.9 attachment.",
        noticeWindow: "Section 21 Notice Invoking Arbitration (30-Day Appointment Window)",
      });
    }

    // I. Fallback Commercial / Civil Suit
    if (
      !proofs.arbitrationClause &&
      (disputeStatus === "pre_existing_dispute" || !proofs.writtenPoInvoice)
    ) {
      forums.push({
        id: "commercial_suit",
        name:
          claimAmount >= 300000
            ? "Commercial Suit + Section 12A Mediation (or Order 38 Rule 5)"
            : "Regular Civil Money Recovery Suit",
        statute:
          claimAmount >= 300000
            ? "Commercial Courts Act, 2015 s.12A + CPC Order 38 Rule 5"
            : "CPC 1908 Section 9 / Order VII",
        score: 76,
        badge: forums.some((f) => f.badge === "Best Primary Track")
          ? "Viable Alternative"
          : "Best Primary Track",
        timeline: "3–5 months s.12A mediation + 12–24 months commercial trial",
        pecuniaryFloor: "₹3,00,000 for Commercial Court",
        costEstimate: "State ad-valorem court fee + ₹1,000 DLSA mediation fee",
        reason:
          "Handles contested quality/rate disputes and oral/ledger claims backed by BSA 2023 s.63 electronic evidence.",
        noticeWindow: "15-Day Commercial Demand Notice + Section 12A Form-1 Filing",
      });
    }

    // Sort by score descending
    forums.sort((a, b) => b.score - a.score);

    const primary = forums[0];
    const parallel = forums.find(
      (f) => f.id !== primary?.id && (f.id === "ni_138" || f.id === "pss_25" || f.badge === "Strong Parallel Track")
    );

    const cutoffTier =
      claimAmount >= 10000000
        ? "≥ ₹1 Crore (IBC / Commercial / DRT Tier)"
        : claimAmount >= 2000000
        ? "₹20L – ₹99.9L (DRT / NBFC SARFAESI / Commercial Tier)"
        : claimAmount >= 300000
        ? "₹3L – ₹19.9L (Commercial Court / MSME / Order 37 Tier)"
        : claimAmount >= 100000
        ? "₹1L – ₹2.99L (Bank SARFAESI / MSME / Order 37 Tier)"
        : "< ₹1 Lakh (MSME ODR / s.138 / PSS s.25 / Civil Tier)";

    return { traps, forums, primary, parallel, cutoffTier };
  }, [creditorType, udyamTier, claimAmount, debtorEntity, disputeStatus, proofs]);

  const handleCopySummary = async () => {
    const lines = [
      `B2B RECOVERY FORUM DECISION SUMMARY (${formatINR(claimAmount)})`,
      `Cutoff Tier: ${evaluation.cutoffTier}`,
      `Primary Track: ${evaluation.primary ? evaluation.primary.name : "N/A"}`,
      `Recommended Notice: ${evaluation.primary ? evaluation.primary.noticeWindow : "N/A"}`,
      evaluation.parallel ? `Parallel Stack: ${evaluation.parallel.name}` : "",
      evaluation.traps.length > 0
        ? `Fatal Traps Flagged (${evaluation.traps.length}): ${evaluation.traps
            .map((t) => t.title)
            .join(" | ")}`
        : "Fatal Traps Flagged: None",
      `Generated via LegalRecovery.in Forum Decision Engine`,
    ]
      .filter(Boolean)
      .join("\n");

    try {
      await navigator.clipboard.writeText(lines);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback ignored
    }
  };

  return (
    <section
      id="forum-decision-engine"
      className="scroll-mt-28 bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#DC2626] mb-1">
            6-Input Statutory Decision Engine
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Configure Your Claim Profile &amp; Screen Fatal Forum Traps
          </h2>
        </div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold self-start sm:self-auto">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Live Pecuniary &amp; Statute Check
        </span>
      </div>

      {/* 6 Inputs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Input 1: Creditor Type */}
        <div>
          <label
            htmlFor="creditor-type"
            className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
          >
            1. Creditor Type
          </label>
          <select
            id="creditor-type"
            value={creditorType}
            onChange={(e) => setCreditorType(e.target.value as CreditorType)}
            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-sm font-medium text-slate-900 focus:border-[#DC2626] focus:bg-white focus:outline-none"
          >
            <option value="b2b_supplier">Unsecured B2B Goods / Service Supplier</option>
            <option value="bank_nbfc_secured">Bank / HFC / NBFC (Secured Loan)</option>
            <option value="bank_nbfc_unsecured">Bank / NBFC / Fintech (Unsecured Loan)</option>
            <option value="epc_works_contractor">EPC / Works / Infrastructure Contractor</option>
            <option value="saas_logistics_exporter">SaaS / Logistics / Exporter / Agency</option>
          </select>
        </div>

        {/* Input 2: MSME Udyam Tier */}
        <div>
          <label
            htmlFor="udyam-tier"
            className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
          >
            2. MSME Udyam Tier
          </label>
          <select
            id="udyam-tier"
            value={udyamTier}
            onChange={(e) => setUdyamTier(e.target.value as UdyamTier)}
            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-sm font-medium text-slate-900 focus:border-[#DC2626] focus:bg-white focus:outline-none"
          >
            <option value="micro_prior">Micro Enterprise (Udyam prior to contract)</option>
            <option value="small_prior">Small Enterprise (Udyam prior to contract)</option>
            <option value="medium">Medium Enterprise (Udyam Medium)</option>
            <option value="none_or_post">Not Udyam Registered / Post-Contract Udyam</option>
          </select>
        </div>

        {/* Input 3: Claim Amount */}
        <div>
          <label
            htmlFor="claim-amount"
            className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
          >
            3. Claim Amount (Principal + Contractual Interest in ₹)
          </label>
          <input
            id="claim-amount"
            type="number"
            min={1000}
            step={10000}
            value={claimAmount}
            onChange={(e) => setClaimAmount(Math.max(0, Number(e.target.value) || 0))}
            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-sm font-bold text-slate-900 focus:border-[#DC2626] focus:bg-white focus:outline-none"
          />
          <div className="flex flex-wrap gap-1.5 mt-2">
            {[
              { label: "₹1.5L", val: 150000 },
              { label: "₹4.5L", val: 450000 },
              { label: "₹25L", val: 2500000 },
              { label: "₹1.25 Cr", val: 12500000 },
            ].map((preset) => (
              <button
                key={preset.label}
                type="button"
                onClick={() => setClaimAmount(preset.val)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-bold border transition-colors cursor-pointer ${
                  claimAmount === preset.val
                    ? "bg-[#DC2626] text-white border-[#DC2626]"
                    : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
                }`}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>

        {/* Input 4: Debtor Entity */}
        <div>
          <label
            htmlFor="debtor-entity"
            className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
          >
            4. Debtor Entity Type
          </label>
          <select
            id="debtor-entity"
            value={debtorEntity}
            onChange={(e) => setDebtorEntity(e.target.value as DebtorEntity)}
            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-sm font-medium text-slate-900 focus:border-[#DC2626] focus:bg-white focus:outline-none"
          >
            <option value="company_llp">Private / Public Limited Company or LLP</option>
            <option value="partnership_prop">Partnership Firm / Proprietorship</option>
            <option value="govt_psu">Government / PSU / Municipal Authority</option>
            <option value="individual_guarantor">Individual Borrower / Personal Guarantor</option>
          </select>
        </div>

        {/* Input 5: Contract / Cheque / e-NACH Proof */}
        <div className="md:col-span-2">
          <span className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            5. Contract, Cheque, e-NACH &amp; Collateral Proof (Select All Available)
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {[
              {
                key: "writtenPoInvoice" as const,
                label: "Written Contract / Signed PO / Tax Invoice",
              },
              {
                key: "dishonouredCheque" as const,
                label: "Dishonoured Cheque (NI Act s.138)",
              },
              {
                key: "enachBounce" as const,
                label: "e-NACH / AutoPay Bounce (PSS Act s.25)",
              },
              {
                key: "securedCollateral" as const,
                label: "Registered Mortgage / Hypothecation",
              },
              {
                key: "arbitrationClause" as const,
                label: "Signed Arbitration Clause in Contract",
              },
            ].map((item) => (
              <label
                key={item.key}
                className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs font-semibold cursor-pointer transition-colors ${
                  proofs[item.key]
                    ? "bg-red-50/70 border-[#DC2626] text-slate-900"
                    : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                }`}
              >
                <input
                  type="checkbox"
                  checked={proofs[item.key]}
                  onChange={() => toggleProof(item.key)}
                  className="accent-[#DC2626] w-4 h-4 shrink-0"
                />
                <span>{item.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Input 6: Dispute & Limitation Status */}
        <div className="md:col-span-2">
          <label
            htmlFor="dispute-status"
            className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
          >
            6. Dispute &amp; Limitation Status
          </label>
          <select
            id="dispute-status"
            value={disputeStatus}
            onChange={(e) => setDisputeStatus(e.target.value as DisputeStatus)}
            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-sm font-medium text-slate-900 focus:border-[#DC2626] focus:bg-white focus:outline-none"
          >
            <option value="undisputed_fresh">
              Undisputed Debt (&lt; 3 Years from Invoice / Default)
            </option>
            <option value="pre_existing_dispute">
              Buyer Raised Pre-Existing Quality / Quantity / Rate Dispute
            </option>
            <option value="near_limitation">
              Near or Beyond 3-Year Limitation (Needs s.18 Acknowledgement / Balance Confirmation)
            </option>
          </select>
        </div>
      </div>

      {/* Pecuniary Cutoff Indicator */}
      <div className="bg-slate-900 text-white rounded-xl p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block">
            Active Pecuniary Classification
          </span>
          <span className="text-sm sm:text-base font-bold text-emerald-400">
            {formatINR(claimAmount)} • {evaluation.cutoffTier}
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={handleCopySummary}
            className="px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white border border-white/15 cursor-pointer transition-colors"
          >
            {copied ? "✓ Copied Summary" : "Copy Decision Summary"}
          </button>
          <button
            type="button"
            onClick={() => window.print()}
            className="px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white border border-white/15 cursor-pointer transition-colors"
          >
            Print Matrix
          </button>
        </div>
      </div>

      {/* Fatal Traps Alert Box */}
      {evaluation.traps.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-2xl p-5 space-y-3">
          <div className="flex items-center gap-2 text-[#DC2626] font-extrabold text-sm">
            <span>⚠ {evaluation.traps.length} Fatal Jurisdiction Trap(s) Caught</span>
          </div>
          <div className="space-y-2.5">
            {evaluation.traps.map((trap) => (
              <div
                key={trap.code}
                className="bg-white border border-red-200 rounded-xl p-3.5 text-xs space-y-1"
              >
                <p className="font-bold text-slate-900">{trap.title}</p>
                <p className="text-slate-600 leading-relaxed">{trap.detail}</p>
                <p className="text-emerald-700 font-semibold">
                  ✓ Safe Bypass: {trap.remedy}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recommended Notice + Primary Forum Combo */}
      {evaluation.primary && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
              Recommended Legal Notice + Forum Combo
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-600 text-white text-[11px] font-bold">
              Score {evaluation.primary.score}/100
            </span>
          </div>
          <p className="text-base sm:text-lg font-extrabold text-slate-900">
            Step 1: {evaluation.primary.noticeWindow} → Step 2: {evaluation.primary.name}
          </p>
          {evaluation.parallel && (
            <p className="text-xs sm:text-sm text-slate-700 font-medium">
              <strong>Parallel Leverage:</strong> Run{" "}
              <span className="text-[#DC2626] font-bold">{evaluation.parallel.name}</span>{" "}
              simultaneously to multiply director/promoter pressure.
            </p>
          )}
          <div className="flex flex-wrap gap-3 pt-1">
            <Link
              href="/user/new-recovery"
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold transition-colors"
            >
              Launch Single Case Notice (₹999) →
            </Link>
            <Link
              href="/bulk-recovery-cases-all-in-one-affordable-solutions"
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors"
            >
              Upload Batch CSV (10–10,000+ Cases) →
            </Link>
          </div>
        </div>
      )}

      {/* Ranked Eligible Forums */}
      <div className="space-y-3">
        <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-800">
          Ranked Statutory Forums ({evaluation.forums.length} Eligible)
        </h3>
        <div className="space-y-3">
          {evaluation.forums.map((forum, idx) => (
            <div
              key={forum.id}
              className="border border-slate-200 rounded-xl p-4 sm:p-5 bg-slate-50/70 space-y-2.5"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900">
                    {forum.name}
                  </h4>
                </div>
                <span
                  className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                    forum.badge === "Best Primary Track"
                      ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
                      : forum.badge === "Strong Parallel Track"
                      ? "bg-amber-100 text-amber-800 border border-amber-200"
                      : "bg-slate-200 text-slate-700"
                  }`}
                >
                  {forum.badge} ({forum.score}/100)
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{forum.reason}</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-[11px]">
                <div className="bg-white border border-slate-200 rounded-lg p-2.5">
                  <span className="text-slate-400 font-semibold block">Statutory Timeline</span>
                  <span className="text-slate-900 font-bold">{forum.timeline}</span>
                </div>
                <div className="bg-white border border-slate-200 rounded-lg p-2.5">
                  <span className="text-slate-400 font-semibold block">Pecuniary Floor</span>
                  <span className="text-slate-900 font-bold">{forum.pecuniaryFloor}</span>
                </div>
                <div className="bg-white border border-slate-200 rounded-lg p-2.5">
                  <span className="text-slate-400 font-semibold block">Fee / Pre-Deposit</span>
                  <span className="text-slate-900 font-bold">{forum.costEstimate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
