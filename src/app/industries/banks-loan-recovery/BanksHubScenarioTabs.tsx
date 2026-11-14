"use client";

import React, { useState } from "react";
import Link from "next/link";

interface BankScenario {
  id: string;
  tabLabel: string;
  title: string;
  statutoryTrigger: string;
  bottleneck: string;
  legalMechanism: string;
  operationalSteps: {
    step: string;
    detail: string;
  }[];
  primaryRoute: {
    label: string;
    href: string;
  };
}

const BANK_SCENARIOS: BankScenario[] = [
  {
    id: "sarfaesi-drt",
    tabLabel: "SARFAESI & DRT (>= ₹20L)",
    title: "Secured Mortgages, Commercial Properties & High-Ticket NPAs",
    statutoryTrigger: "SARFAESI Act s.13(2)/13(3A)/14 & RDB Act s.19",
    bottleneck:
      "DRT Securitisation Applications (SAs) routinely stay bank enforcement when Authorized Officers omit itemized principal-versus-interest schedules in Section 13(2) notices, miss the mandatory 15-day reasoned reply under Section 13(3A), or file incomplete 9-point affidavits before the DM/CMM under Section 14.",
    legalMechanism:
      "Combining a defect-proof Section 13(2) demand notice with simultaneous CERSAI security-interest verification, timely Section 13(3A) objection disposal, and parallel e-DRT Original Application filing (where collateral valuation trails outstanding dues) seals borrower delay tactics and preserves personal-asset attachment rights under Section 19(12)–(15) of the RDB Act.",
    operationalSteps: [
      {
        step: "1. Authorized Officer Audit & Rule 3 Service",
        detail:
          "Issue itemized 60-day Section 13(2) notice stating NPA classification date, secured asset description, and separate RBI-compliant penal charges via Speed Post RPAD, email, and WhatsApp.",
      },
      {
        step: "2. 15-Day Section 13(3A) Disposal & OTS Safeguards",
        detail:
          "Log every borrower representation and dispatch a reasoned Authorized Officer reply within 15 days. Where OTS fails, issue formal revocation citing SBI v. Arvindra Electronics before proceeding.",
      },
      {
        step: "3. Section 14 DM/CMM 9-Point Affidavit & e-DRT OA",
        detail:
          "File 9-point statutory affidavit with CERSAI registration for 30–60 day physical possession orders, and lodge e-DRT OA with Bankers' Books Evidence Act + BSA s.63 CBS certificates for ≥ ₹20 Lakh claims.",
      },
    ],
    primaryRoute: {
      label: "Read SARFAESI s.13(2) Bank Compliance Guide",
      href: "/law/sarfaesi-section-13-2-demand-notice-bank-guide",
    },
  },
  {
    id: "sub-20l-unsecured",
    tabLabel: "Sub-₹20L & Credit Cards",
    title: "Retail Personal Loans, Mudra, Education & Credit Card Books Outside DRT",
    statutoryTrigger: "PSS Act s.25, NI Act s.138, Order 37 CPC & Neutral ODR",
    bottleneck:
      "Because the DRT pecuniary floor sits at ₹20 Lakh under RDB Act s.1(4), millions of retail, personal, Mudra/CGTMSE, and credit-card NPAs fall outside DRT jurisdiction. Meanwhile, unilateral bank panel arbitrator appointments face automatic annulment under Perkins Eastman and the 5-Judge CORE Constitution Bench ruling.",
    legalMechanism:
      "Banks bridge the sub-₹20 Lakh gap by pairing multi-wave advocate recall notices with Section 25 PSS Act e-NACH/UPI AutoPay notices (30-day return-memo window), Commercial Court Section 12A mediation for ≥ ₹3 Lakh business loans, Order XXXVII summary suits on liquid ledgers, and neutral institutional ODR arbitration compliant with Section 12(5).",
    operationalSteps: [
      {
        step: "1. Day-62 SMA-2 Advocate Cure Intervention",
        detail:
          "Deploy advocate-signed cure notices before Day 90 daily day-end NPA stamping, preventing provisioning lock-in where partial payments can no longer upgrade an account.",
      },
      {
        step: "2. Section 25 PSS Act & Section 138 Cheque Triage",
        detail:
          "Automate 30-day statutory demand notices on bounced e-NACH mandates and security cheques, opening criminal magistrate leverage alongside civil recovery.",
      },
      {
        step: "3. Neutral ODR Arbitration & Pre-Litigation Lok Adalat",
        detail:
          "Route click-wrap and credit-card agreements to independent ODR panels (avoiding unilateral appointment defects) or bulk Pre-Litigation Lok Adalat dockets under LSA Act s.20(2).",
      },
    ],
    primaryRoute: {
      label: "Compare 5 Recovery Routes Below ₹20 Lakh",
      href: "/bank-loan-recovery-below-20-lakhs-drt-threshold-options",
    },
  },
  {
    id: "psu-lok-adalat-agri",
    tabLabel: "Lok Adalat, Mudra & KCC",
    title: "PSU, Regional Rural & Gramin Bank Bulk NPA & Agri/MSME Portfolios",
    statutoryTrigger: "LSA Act s.19–21, CGTMSE Guidelines & SARFAESI s.31(i)",
    bottleneck:
      "Banks refer tens of thousands of retail, Mudra, and KCC accounts to quarterly National Lok Adalats yet often record low borrower attendance because paper notices arrive late without pre-calculated OTS slabs. Simultaneously, wealthy borrowers claim SARFAESI s.31(i) agricultural immunity on commercial farmhouses and poultry/cold-storage units.",
    legalMechanism:
      "Pre-priming Lok Adalat dockets 21 days in advance via tri-channel Email + WhatsApp + Speed Post RPAD notices carrying tiered OTS slabs converts non-responsive files into binding Section 21 Civil Court decrees at zero court fee. For Mudra/CGTMSE portfolios, documented advocate recall notices satisfy NCGTC legal-action prerequisites while filtering genuine vs commercial agricultural use under ITC v. Blue Coast Hotels.",
    operationalSteps: [
      {
        step: "1. Bulk Lok Adalat Priming & OTS Pre-Alignment",
        detail:
          "Dispatch bilingual DLSA-synced Pre-Litigation Lok Adalat invitations via WhatsApp and RPAD so borrowers arrive with pre-approved settlement offers ready for Section 21 awards.",
      },
      {
        step: "2. CGTMSE / NCGTC Guarantee Claim Hygiene",
        detail:
          "Attach timestamped advocate recall notices and BSA s.63 dispatch logs to demonstrate documented recovery initiation required before CGTMSE guarantee invocation.",
      },
      {
        step: "3. KCC State RRC vs Blue Coast Hotels Segregation",
        detail:
          "Segregate genuine agricultural KCC holdings (routed to State Revenue Recovery Certificates and Lok Adalat) from commercial agro-ventures eligible for SARFAESI enforcement.",
      },
    ],
    primaryRoute: {
      label: "Explore Bulk Pre-Litigation Lok Adalat Playbook",
      href: "/bank-pre-litigation-lok-adalat-bulk-npa-settlement-guide",
    },
  },
  {
    id: "coop-sme-guarantors",
    tabLabel: "Co-op Banks, CC/OD & Guarantors",
    title: "Urban Cooperative Banks, SME Cash Credit Diversion & Personal Guarantees",
    statutoryTrigger: "MSCS Act s.84, RBI IRACP CC/OD Norms & Contract Act s.128 / IBC s.95",
    bottleneck:
      "Urban and District Cooperative Banks frequently underuse their Supreme Court-confirmed SARFAESI powers or stall in Registrar arbitration due to defective borrower-plus-surety notices. In SME Cash Credit/Overdraft accounts, borrowers stop submitting stock statements, siphon hypothecated inventory, or exploit recall letters that 'CC' guarantors without explicitly invoking the guarantee.",
    legalMechanism:
      "Armed with the 5-Judge Constitution Bench ruling in Pandurang Ganpati Chaugule, cooperative banks can run SARFAESI alongside Section 84 MSCS / State Co-op Registrar arbitration. For CC/OD facilities, banks trigger RBI 'Out-of-Order' recall notices with stock-audit and book-debt garnishee demands, while serving explicit guarantee-invocation demands (per Syndicate Bank v. Channaveerappa Beleri) and IBC Section 95 Form B notices on promoters.",
    operationalSteps: [
      {
        step: "1. Cooperative Bank Dual-Track: SARFAESI + Section 84",
        detail:
          "Serve borrower and two sureties simultaneously before Registrar/MSCS s.84 arbitration for sub-threshold or unsecured credit society advances while invoking SARFAESI on secured mortgages.",
      },
      {
        step: "2. CC/OD Drawing-Power & Stock Diversion Freeze",
        detail:
          "Issue immediate facility recall upon 90-day out-of-order status or 180-day overdue stock statements, putting third-party debtors on notice of the bank's hypothecation charge.",
      },
      {
        step: "3. Explicit Guarantee Invocation & IBC Part III Form B",
        detail:
          "Serve distinct demand-invocation notices (never mere 'CC' copies) to start limitation cleanly under Section 128 Contract Act and preserve 14-day IBC s.95 Rule 7(1) Form B eligibility.",
      },
    ],
    primaryRoute: {
      label: "Read Co-op Bank s.84 & SARFAESI Playbook",
      href: "/cooperative-bank-credit-society-arbitration-recovery-section-84",
    },
  },
];

export default function BanksHubScenarioTabs() {
  const [activeId, setActiveId] = useState<string>(BANK_SCENARIOS[0].id);
  const current = BANK_SCENARIOS.find((s) => s.id === activeId) || BANK_SCENARIOS[0];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm">
      <div className="border-b border-slate-200 pb-4 mb-5">
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] block mb-1">
          Interactive Track Explorer
        </span>
        <p className="text-base sm:text-xl font-bold text-slate-900 tracking-tight">
          Select Your Bank Portfolio Segment to View the Statutory Escalation Path
        </p>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Switch across Secured SARFAESI/DRT, Sub-₹20L Retail &amp; Credit Cards, PSU Lok Adalat/Agri, and Cooperative/SME Guarantor tracks.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-100 pb-3" role="tablist" aria-label="Bank portfolio tracks">
        {BANK_SCENARIOS.map((tab) => {
          const isActive = tab.id === activeId;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(tab.id)}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Panel */}
      <div className="space-y-5" role="tabpanel">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
          <h3 className="text-base sm:text-lg font-bold text-slate-900">{current.title}</h3>
          <span className="inline-block px-2.5 py-1 bg-red-50 text-[#DC2626] rounded-md text-[11px] font-bold border border-red-200 self-start sm:self-auto">
            {current.statutoryTrigger}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-amber-800 mb-1.5">
              Institutional Bottleneck &amp; Litigation Trap
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{current.bottleneck}</p>
          </div>
          <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-800 mb-1.5">
              Creditor-Grade Statutory Remedy
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{current.legalMechanism}</p>
          </div>
        </div>

        <div>
          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2.5">
            3-Step Branch &amp; Zonal Execution Sequence
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {current.operationalSteps.map((item) => (
              <div
                key={item.step}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5"
              >
                <p className="text-xs sm:text-sm font-bold text-slate-900">{item.step}</p>
                <p className="text-xs text-slate-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100">
          <Link
            href={current.primaryRoute.href}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#DC2626] hover:text-[#B91C1C] hover:underline"
          >
            <span>{current.primaryRoute.label}</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>
          <Link
            href="/tools/sarfaesi-drt-bank-recovery-forum-calculator"
            className="text-xs font-semibold text-slate-600 hover:text-slate-900 underline"
          >
            Open SARFAESI / DRT Forum Calculator &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
