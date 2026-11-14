"use client";

import React, { useState } from "react";
import Link from "next/link";

interface VerticalTrack {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  ticketBand: string;
  primaryStatutes: string;
  headlineSummary: string;
  workflowSteps: { step: string; detail: string }[];
  complianceGuardrail: string;
  recommendedLinks: { label: string; href: string }[];
}

const VERTICAL_TRACKS: VerticalTrack[] = [
  {
    id: "digital-bnpl",
    tabLabel: "Digital & e-NACH",
    badge: "Ticket ₹2.5K – ₹2L | SMA-1/2",
    title: "Digital Personal Loans, BNPL & UPI AutoPay e-NACH Dishonours",
    ticketBand: "₹2,500 – ₹2,00,000 unsecured digital loan books",
    primaryStatutes:
      "PSS Act 2007 s.25, NI Act s.142(2) parity, RBI Digital Lending Guidelines, IT Act s.10A",
    headlineSummary:
      "Replace third-party call harassment exposure with rapid multi-wave advocate notices referencing UMRN mandate numbers, NPCI return reason codes, and strict Section 25 15-day statutory cure windows.",
    workflowSteps: [
      {
        step: "1. T+1 e-NACH Dishonour Capture",
        detail:
          "Ingest NPCI sponsor-bank return memo (Code 55 Insufficient Funds / 61 Exceeds Limit / Mandate Cancelled) and lock BSA 2023 s.63 server hash logs.",
      },
      {
        step: "2. Pre-CIC Regulatory Alert + Wave-1 Notice",
        detail:
          "Dispatch prior SMS/email CIC alert alongside a crimson advocate demand separating the exact dishonoured EMI from accelerated principal per Suman Sethi.",
      },
      {
        step: "3. 30-Day Statutory Service & Lok Adalat / ODR",
        detail:
          "Trigger Section 25(1)(c) demand within 30 days of bounce memo receipt; escalate persistent non-payers to neutral institutional ODR or Pre-Litigation Lok Adalat.",
      },
    ],
    complianceGuardrail:
      "Never delegate legal notice issuance to an unregulated LSP collection app without an enrolled advocate's signature or verified RE KFS/Nodal Officer disclosures.",
    recommendedLinks: [
      {
        label: "PSS Act s.25 30+15+30 Calculator",
        href: "/tools/section-25-nach-bounce-limitation-calculator",
      },
      {
        label: "Section 25 Notice Format Template",
        href: "/templates/section-25-pss-act-nach-bounce-legal-notice-format",
      },
      {
        label: "BNPL & Small-Ticket Unit Economics",
        href: "/small-ticket-digital-personal-loan-bnpl-recovery-economics",
      },
    ],
  },
  {
    id: "gold-cv-lap",
    tabLabel: "Gold, CV & Non-SARFAESI LAP",
    badge: "Asset-Backed & Non-Notified NBFC",
    title: "Gold Auctions, CV/CE Fleet Repossession & Sub-₹20L NBFC LAP",
    ticketBand: "₹50,000 Gold / ₹5L–₹45L CV Fleet / <₹20L LAP",
    primaryStatutes:
      "Contract Act s.176, Arbitration Act s.9/17, MV Act s.51(5) Form 36, MoF SARFAESI ₹100Cr/₹20L Notification, CPC O.34/O.37",
    headlineSummary:
      "Tailor statutory workflows to asset law: mandatory prior notice before gold auction, Section 9 Court Receivers before seizing commercial fleets, and CPC mortgage/summary remedies where NBFCs fall below SARFAESI thresholds.",
    workflowSteps: [
      {
        step: "1. Gold LTV Margin Call & s.176 Sale Notice",
        detail:
          "When bullet/interest arrears push LTV past RBI 75% limits, dispatch registered s.176 notice before vernacular newspaper + taluka auction, preserving post-sale deficit claims.",
      },
      {
        step: "2. CV/CE Peaceful Receiver & Vahan Form 36",
        detail:
          "Apply for Section 9/17 interim receiver custody (avoiding Prakash Kaur criminal complaints), endorse hypothecation transfer via RTO Form 36, and sue guarantors for Loss-on-Sale.",
      },
      {
        step: "3. Non-SARFAESI NBFC Mortgage Routing",
        detail:
          "Where AUM is under ₹100 Crore or loan debt is under ₹20 Lakh, bypass invalid s.13(2) notices in favour of CPC Order XXXIV foreclosure, Order XXXVII summary suits, or neutral ODR.",
      },
    ],
    complianceGuardrail:
      "Issuing SARFAESI s.13(2) on an ineligible NBFC account (under ₹100 Cr asset size or ₹20L debt) risks instant High Court quashing and borrower counterclaim costs.",
    recommendedLinks: [
      {
        label: "Gold Loan s.176 Auction Compliance",
        href: "/gold-loan-default-auction-statutory-notice-rbi-compliance-nbfc",
      },
      {
        label: "CV & CE Fleet Recovery & Form 36",
        href: "/commercial-vehicle-construction-equipment-finance-recovery-nbfc",
      },
      {
        label: "NBFC SARFAESI ₹100Cr / ₹20L Rule",
        href: "/nbfc-sarfaesi-eligibility-100-crore-asset-20-lakh-loan-rule",
      },
    ],
  },
  {
    id: "colending-scf-sme",
    tabLabel: "Co-Lending, FLDG & SME",
    badge: "Structured, SCF & MCA/EDI Books",
    title: "80:20 Co-Lending, 5% DLG/FLDG Invocation, SCF & SME QR Divert",
    ticketBand: "₹5L – ₹5Cr institutional B2B & merchant credit",
    primaryStatutes:
      "RBI DLG 2023 Directions, Factoring Act 2011 s.8/19, CERSAI, CPC Order XXXVIII Rule 5, BNS s.318",
    headlineSummary:
      "Protect the 120-day FLDG/DLG invocation clock in LSP/Co-Lending waterfalls, enforce CERSAI-registered receivables in Supply Chain Finance, and freeze diverted merchant POS/QR flows.",
    workflowSteps: [
      {
        step: "1. Co-Lending Locus Standi & 120-Day DLG Gate",
        detail:
          "Audit Master Service Agreement & servicing POA so legal notices validly cover both the 80% partner bank tranche and 20% NBFC originator before 120-day DLG crystallization.",
      },
      {
        step: "2. SCF Assignment & Double-Pledge Action",
        detail:
          "Serve debtor notice under Factoring Regulation Act s.8, confirm CERSAI Form assignment, notify corporate anchors, and invoke BNS s.318 against fabricated invoices.",
      },
      {
        step: "3. SME EDI / MCA Diverted QR Garnishee",
        detail:
          "Counteract borrower QR-code switching with PSS s.25 notice on backup mandates plus CPC Order XXXVIII Rule 5 attachment against gateway receivables.",
      },
    ],
    complianceGuardrail:
      "Under RBI Default Loss Guarantee rules, DLG invocation cannot exceed 5% of total loan portfolio disbursed and must finalize within 120 days unless underlying assets are recovered.",
    recommendedLinks: [
      {
        label: "Co-Lending & 5% FLDG/DLG Workflow",
        href: "/co-lending-fldg-dlg-default-recovery-workflow-bank-nbfc",
      },
      {
        label: "SCF & Channel Invoice Factoring",
        href: "/supply-chain-finance-channel-invoice-discounting-default-recovery",
      },
      {
        label: "SME Working Capital & EDI Recovery",
        href: "/unsecured-business-loan-sme-working-capital-default-nbfc",
      },
    ],
  },
  {
    id: "hfc-mfi",
    tabLabel: "HFC ₹1L & MFI Books",
    badge: "Housing Finance & JLG Microfinance",
    title: "HFC ₹1 Lakh SARFAESI Advantage & Compliant MFI Group Recovery",
    ticketBand: "₹75K–₹3L Graduated MFI / ₹3L–₹35L Affordable Home Loans",
    primaryStatutes:
      "SARFAESI s.2(1)(m)(iv) & NHB/RBI ₹1L HFC threshold, RBI Microfinance Directions, Legal Services Authorities Act",
    headlineSummary:
      "Leverage Housing Finance Companies' special ₹1 Lakh SARFAESI threshold on affordable housing NPAs while shielding MFIs from coercive-recovery SRO penalties through vernacular RPAD and Lok Adalat camps.",
    workflowSteps: [
      {
        step: "1. HFC Dual-Notice (s.13(2) + Tripartite Check)",
        detail:
          "For affordable housing NPAs >= ₹1 Lakh, validate CERSAI perfection and send borrower + developer tripartite recall notices to protect subvention security.",
      },
      {
        step: "2. MFI Ring-Leader Isolation & Conduct Shield",
        detail:
          "Keep RBI 8 AM–7 PM center-meeting rules intact; issue polite vernacular Speed Post notices only to wilful ring-leader defaulters or graduated MSME accounts.",
      },
      {
        step: "3. District Lok Adalat Batch Execution",
        detail:
          "Bundle undisputed MFI/HFC pre-litigation files into monthly Taluka & District Legal Services Authority sittings for non-appealable Section 21 compromise awards.",
      },
    ],
    complianceGuardrail:
      "Never invoke SARFAESI by mixing NBFC unsecured loans with HFC entities unless the lending subsidiary holds valid RBI HFC registration and a duly perfected equitable/registered mortgage.",
    recommendedLinks: [
      {
        label: "HFC Affordable Home Loan Recovery",
        href: "/housing-finance-company-hfc-affordable-home-loan-npa-recovery",
      },
      {
        label: "MFI & JLG Compliant Recovery",
        href: "/microfinance-mfi-jlg-group-loan-default-compliant-recovery",
      },
      {
        label: "RBI Conduct & Legal Escalation SOP",
        href: "/rbi-recovery-agent-guidelines-compliant-legal-escalation-nbfc",
      },
    ],
  },
];

export default function NbfcHubScenarioTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(VERTICAL_TRACKS[0].id);
  const current =
    VERTICAL_TRACKS.find((t) => t.id === activeTabId) ?? VERTICAL_TRACKS[0];

  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-6">
      <div
        role="tablist"
        aria-label="NBFC and Fintech lending verticals"
        className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6"
      >
        {VERTICAL_TRACKS.map((track) => {
          const isActive = track.id === activeTabId;
          return (
            <button
              key={track.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTabId(track.id)}
              className={`px-3 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all text-left border ${
                isActive
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md"
                  : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100"
              }`}
            >
              <span className="block leading-tight">{track.tabLabel}</span>
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-5"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
          <span className="px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#DC2626] text-xs font-bold">
            {current.badge}
          </span>
          <span className="text-xs font-semibold text-slate-500">
            {current.ticketBand}
          </span>
        </div>

        <div>
          <p className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">
            {current.title}
          </p>
          <p className="text-sm text-slate-700 leading-relaxed mb-3">
            {current.headlineSummary}
          </p>
          <p className="text-xs font-semibold text-slate-600 bg-slate-100 rounded-lg px-3 py-2">
            <span className="text-slate-900 font-bold">Governing Law: </span>
            {current.primaryStatutes}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {current.workflowSteps.map((ws) => (
            <div
              key={ws.step}
              className="rounded-xl border border-slate-200 bg-slate-50 p-4"
            >
              <p className="text-xs font-extrabold text-[#DC2626] mb-1.5">
                {ws.step}
              </p>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {ws.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
          <p className="text-xs font-extrabold uppercase tracking-wider text-amber-800 mb-1">
            Statutory & RBI Risk Guardrail
          </p>
          <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
            {current.complianceGuardrail}
          </p>
        </div>

        <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-slate-600 mr-1">
            Deep-Dive Spokes:
          </span>
          {current.recommendedLinks.map((lnk) => (
            <Link
              key={lnk.href}
              href={lnk.href}
              className="inline-flex items-center px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-[#DC2626] text-white text-xs font-semibold transition-colors"
            >
              {lnk.label} →
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
