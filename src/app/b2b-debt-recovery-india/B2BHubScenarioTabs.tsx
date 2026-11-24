"use client";

import React, { useState } from "react";
import Link from "next/link";

interface EnterpriseScenario {
  id: string;
  tabLabel: string;
  buyerPersona: string;
  title: string;
  statutoryTrack: string;
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

const ENTERPRISE_SCENARIOS: EnterpriseScenario[] = [
  {
    id: "banks-nbfcs-fintech",
    tabLabel: "Banks & NBFCs",
    buyerPersona: "CRO / Head of Collections / Legal & NPA Desk",
    title: "High-Volume SMA-1 to NPA Portfolios: Replacing Telecalling Risk with Compliant Advocate Escalation",
    statutoryTrack: "SARFAESI s.13(2) · PSS Act s.25 · NI Act s.138 · Neutral ODR Arbitration",
    bottleneck:
      "Banks, NBFCs, HFCs, and digital lenders face strict RBI Fair Practices Code scrutiny on telecalling hours (8 AM–7 PM), recovery-agent conduct, and CIC pre-reporting alerts. Meanwhile, unstructured WhatsApp reminders fail to create admissible proof or stop limitation.",
    legalMechanism:
      "LegalRecovery routes SMA-1/SMA-2 and NPA accounts by ticket size and security cover: PSS Act s.25 criminal notices for e-NACH bounces within 30 days of NPCI return memo, RBI Penal-Charge compliant SARFAESI s.13(2) recall notices for secured loans, and neutral institutional ODR arbitration (post-CORE 5-Judge Bench) for unsecured portfolios.",
    operationalSteps: [
      {
        step: "1. Segregate Portfolios via Representees & CSV Upload",
        detail:
          "Configure separate bank/NBFC or co-lending SPV sender identities in Representees and upload DPD-bucketed CSV ledgers with UMRN, sanction dates, and guarantor details.",
      },
      {
        step: "2. Trigger Tri-Channel Fact-Verified Notices (Email + WhatsApp + RPAD)",
        detail:
          "Dispatch bilingual notices with uncompounded RBI penal-charge schedules, capturing BSA 2023 s.63 delivery logs and Speed Post RPAD tracking IDs.",
      },
      {
        step: "3. Convert Non-Responders to Lok Adalat, s.25 Magistrate or ODR",
        detail:
          "Route willing borrowers to National Lok Adalat Section 21 deemed decrees and escalate wilful defaulters to Section 25/138 complaints or Section 29B fast-track arbitration.",
      },
    ],
    primaryRoute: {
      label: "Explore Banking & NBFC Recovery Hubs",
      href: "/industries/banks-loan-recovery",
    },
  },
  {
    id: "msme-manufacturing",
    tabLabel: "MSME & Manufacturing",
    buyerPersona: "Promoter / Finance Controller / Udyam Supplier",
    title: "Overcoming 120-Day Corporate Credit Delays Using Income Tax s.43B(h) & MSMED 3x RBI Interest",
    statutoryTrack: "Income Tax Act s.43B(h) · MSMED Act ss.15–18 · Sale of Goods Act s.42",
    bottleneck:
      "Micro and Small manufacturers, packaging converters, auto-ancillary units, and chemical suppliers routinely suffer 90–180 day credit stretching by large corporate buyers, accompanied by belated quality debit notes issued months after material consumption.",
    legalMechanism:
      "Combining Section 43B(h) of the Income Tax Act (which disallows the buyer's tax deduction on unpaid Micro/Small supplier invoices beyond 45 days) with MSMED Act Section 16 (3x RBI Bank Rate compounded monthly) shifts the economic cost of delay directly onto the corporate buyer's P&L and Form 3CD tax audit.",
    operationalSteps: [
      {
        step: "1. Attach Udyam Certificate, E-Way Bill & GSTR-2B Proof",
        detail:
          "Compile the tax invoice, signed LR/GRN, E-Way Bill Part-B, and buyer ITC availment record to establish Sale of Goods Act s.42 deemed acceptance.",
      },
      {
        step: "2. Serve Stage-1 s.43B(h) Tax-Disallowance Advisory + Stage-2 Notice",
        detail:
          "Deliver a formal Advocate Demand Notice citing Form 3CD Clause 22 audit exposure and 3x RBI monthly compound interest before March 31 fiscal cut-offs.",
      },
      {
        step: "3. Escalate to MSEFC Samadhaan or Order XXXVII Summary Suit",
        detail:
          "Escalate unresolved claims to MSME Samadhaan conciliation/arbitration or file Order XXXVII CPC summary suits where Udyam registration post-dates supply.",
      },
    ],
    primaryRoute: {
      label: "Compute 3x RBI MSME Interest",
      href: "/tools/msme-delayed-payment-interest-calculator",
    },
  },
  {
    id: "enterprise-o2c-services",
    tabLabel: "Enterprise O2C & IT/SaaS",
    buyerPersona: "CFO / General Counsel / Head of Order-to-Cash",
    title: "Enforcing Commercial Invoices, SaaS Subscriptions & MSA Milestones Without Multi-Year Civil Suits",
    statutoryTrack: "Commercial Courts Act s.12A · Order XXXVII CPC · Mediation Act 2023",
    bottleneck:
      "IT services firms, B2B SaaS vendors, staffing agencies, logistics operators, and B2B distributors face stalled UAT sign-offs, unauthorized backdoor hiring, or unilateral SLA deductions while avoiding 5-year ordinary civil suits.",
    legalMechanism:
      "Structured pre-litigation notices lock electronic evidence under BSA 2023 s.63 (Tally/SAP ledgers, Jira logs, email acceptance, WhatsApp chats) and initiate mandatory Commercial Courts Act s.12A Pre-Institution Mediation for ₹3 Lakh+ claims—or seek urgent Order XXXVIII Rule 5 asset attachment where the debtor is dissipating assets (Yamini Manohar).",
    operationalSteps: [
      {
        step: "1. Certify Digital Ledger & Performance Logs Under BSA s.63",
        detail:
          "Bundle ERP aging statements, delivery confirmations, and Form 26AS/GSTR-2B acknowledgments with a Section 63 BSA hash-verified electronic record.",
      },
      {
        step: "2. Issue 15-Day Commercial Demand & Mediation Pre-Filing Notice",
        detail:
          "Put the debtor's CFO and General Counsel on formal notice of Commercial Court s.12A filing, 18%–24% commercial interest, and cost liability.",
      },
      {
        step: "3. Execute Mediated Settlement (s.27) or Order 37 Summary Decree",
        detail:
          "Convert negotiated payment plans into directly executable decrees under the Mediation Act, 2023 or obtain leave-to-defend-barred summary judgments.",
      },
    ],
    primaryRoute: {
      label: "Explore Order 37 Summary Suit Guide",
      href: "/law/order-37-summary-suit-money-recovery",
    },
  },
  {
    id: "high-value-ibc-epc",
    tabLabel: "₹1 Cr+ IBC & Arbitration",
    buyerPersona: "General Counsel / Infrastructure & Commodity CFO",
    title: "Crossing the ₹1 Crore IBC Operational Creditor Threshold & Executing Section 36 Arbitral Awards",
    statutoryTrack: "IBC ss.4, 8, 9 (Form 3/4) · Arbitration Act ss.21, 29A, 36",
    bottleneck:
      "High-ticket commodity traders, EPC contractors, builders, and capital-goods OEMs lose leverage when debtors manufacture last-minute quality or LD counterclaims to block NCLT petitions under the Mobilox 'pre-existing dispute' test.",
    legalMechanism:
      "Pre-empting sham disputes requires immediate written rebuttal of unilateral debit notes, strict Section 21 arbitration invocation within 3 years, and clean Form 3/Form 4 IBC Section 8 Demand Notices backed by unchallenged GSTR-2B filings and balance confirmations (s.18 Limitation Act).",
    operationalSteps: [
      {
        step: "1. Neutralize Sham Counterclaims Before Serving Form 3/4",
        detail:
          "Audit all prior emails/WhatsApp threads to verify zero pre-existing dispute exists and crystallize principal + contractual interest above ₹1 Crore.",
      },
      {
        step: "2. Serve Rule 5 Compliant IBC Section 8 Demand Notice",
        detail:
          "Deliver statutory Form 3/Form 4 via Speed Post RPAD and registered corporate email, triggering the strict 10-day statutory cure-or-dispute window.",
      },
      {
        step: "3. File Section 9 NCLT Petition or Enforce Section 36 Award",
        detail:
          "Escalate unpaid undisputed operational debt to NCLT or compel 100% court deposit / Order XXI attachment against Section 34 challenges.",
      },
    ],
    primaryRoute: {
      label: "Explore Bulk Commodity & EPC Hubs",
      href: "/industries/construction-epc-contractor-recovery",
    },
  },
];

export default function B2BHubScenarioTabs() {
  const [activeId, setActiveId] = useState<string>(ENTERPRISE_SCENARIOS[0].id);
  const current =
    ENTERPRISE_SCENARIOS.find((item) => item.id === activeId) || ENTERPRISE_SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Selector Bar */}
      <div
        role="tablist"
        aria-label="B2B Enterprise Recovery Playbooks"
        className="flex flex-wrap gap-2 mb-5"
      >
        {ENTERPRISE_SCENARIOS.map((scenario) => {
          const isActive = scenario.id === current.id;
          return (
            <button
              key={scenario.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(scenario.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Card */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 md:p-7">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-900 text-white">
            {current.buyerPersona}
          </span>
          <span className="text-[11px] font-bold text-[#DC2626]">
            {current.statutoryTrack}
          </span>
        </div>

        <h3 className="text-base sm:text-lg md:text-xl font-black text-slate-900 mb-3 leading-snug">
          {current.title}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-[11px] font-black uppercase tracking-wider text-amber-800 mb-1">
              Institutional Bottleneck
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.bottleneck}
            </p>
          </div>
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
            <p className="text-[11px] font-black uppercase tracking-wider text-emerald-800 mb-1">
              Statutory &amp; Procedural Remedy
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.legalMechanism}
            </p>
          </div>
        </div>

        <div className="space-y-2.5 mb-5">
          {current.operationalSteps.map((s) => (
            <div
              key={s.step}
              className="bg-white border border-slate-200 rounded-xl p-3.5 sm:p-4"
            >
              <p className="text-xs sm:text-sm font-extrabold text-slate-900 mb-1">
                {s.step}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">{s.detail}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-200">
          <span className="text-xs text-slate-500 font-medium">
            Available for single ₹999 test notices &amp; bulk CSV portfolio uploads.
          </span>
          <Link
            href={current.primaryRoute.href}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-[#DC2626] text-white text-xs font-bold transition-colors"
          >
            {current.primaryRoute.label} &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
