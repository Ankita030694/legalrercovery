"use client";

import React, { useState } from "react";
import Link from "next/link";

interface PracticeScenario {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  ticketBand: string;
  statutoryTrigger: string;
  bottleneck: string;
  legalMechanism: string;
  operationalSteps: {
    step: string;
    detail: string;
  }[];
  recommendedLinks: {
    label: string;
    href: string;
  }[];
}

const PRACTICE_SCENARIOS: PracticeScenario[] = [
  {
    id: "ca-icai-clause-8",
    tabLabel: "CA Audit & ICAI NOC",
    badge: "Ticket ₹1.5L – ₹45L | ICAI Clause (8) & Chapter VII",
    title: "Client Got UDIN Audit Reports Signed on Sept 30—Bounced Your Cheque & Appointed a New CA Next Year",
    ticketBand: "₹1,50,000 – ₹45,00,000 (Statutory/Tax Audit, GST Litigation, Virtual-CFO & ITR Retainers)",
    statutoryTrigger: "CA Act First Schedule Clause (8) + ICAI Chapter VII + Form 26AS 194J & Order XXXVII CPC",
    bottleneck:
      "Practicing CAs routinely sign Tax Audits and Statutory Audits under September 30 / October 31 deadline pressure on director assurances, only for the client to stall payment, switch to a cheaper auditor next FY, and threaten an ICAI disciplinary complaint if the outgoing firm withholds Tally backups or client records.",
    legalMechanism:
      "While ICAI ethics bar holding client books hostage, **ICAI Council General Guidelines Chapter VII** strictly prohibit an incoming auditor from accepting an audit appointment where **undisputed audit fees** (particularly those provisioned as 'Audit Fees Payable' in the client's signed Balance Sheet) remain unpaid. Combined with **Form 26AS Section 194J TDS credits** (written acknowledgment u/s 18 Limitation Act) and an **external advocate Order XXXVII CPC notice**, clients clear dues swiftly without risking your COP.",
    operationalSteps: [
      {
        step: "1. Compile UDIN Logs, Balance-Sheet Provision & 26AS 194J",
        detail:
          "Extract ICAI UDIN certificates, engagement letters, GST invoices, audited Balance Sheet note showing 'Audit Fees Payable', and Form 26AS reflecting 10% 194J TDS deducted by the client.",
      },
      {
        step: "2. Reply Formally to Incoming Auditor Under Clause (8)",
        detail:
          "Hand over client-owned records cleanly while placing exact unpaid undisputed audit fees formally on record in your written Clause (8) communication under ICAI Chapter VII.",
      },
      {
        step: "3. Serve External Advocate Notice + NI s.138 / Order 37",
        detail:
          "Let independent litigation counsel issue a dignified 15-day statutory demand notice citing admitted ledger balances, bounced-cheque criminal liability (s.138), and Order XXXVII summary suit.",
      },
    ],
    recommendedLinks: [
      {
        label: "CA Unpaid Audit Fee & ICAI NOC Guide",
        href: "/chartered-accountant-ca-unpaid-audit-tax-retainer-recovery-icai-noc",
      },
      {
        label: "CA & Incoming Auditor Notice Pack",
        href: "/templates/ca-architect-advisor-professional-fee-recovery-legal-notice",
      },
      {
        label: "Order 37 Summary Suit Law Guide",
        href: "/law/order-37-summary-suit-money-recovery",
      },
    ],
  },
  {
    id: "architect-gfc-copyright",
    tabLabel: "Architect GFC & COA IP",
    badge: "Ticket ₹4L – ₹1.2 Cr | COA Reg. 2(1)(xii) & Copyright s.51",
    title: "Developer Obtained Municipal Sanction & GFC Drawings—Then Replaced Your Studio Before Final Stage Payment",
    ticketBand: "₹4,00,000 – ₹1,20,00,000 (Concept, Sanction, Working GFC CAD/BIM & Luxury Interior Stage Fees)",
    statutoryTrigger: "Architects (Professional Conduct) Reg. 2(1)(xii) + Copyright Act ss.13(1)(a), 17 & 51",
    bottleneck:
      "Real-estate developers and HNI villa/bungalow owners extract 85–90% of an architectural studio's intellectual value—Concept Design, Municipal/RERA Sanction, and Good-for-Construction (GFC) CAD/BIM drawings—then manufacture minor elevation complaints, terminate the mandate before supervision stages, and hand your drawings to a low-cost draftsman to execute on site.",
    legalMechanism:
      "Under **Copyright Act Sections 13(1)(a), 17 & 51**, copyright in architectural drawings, BIM models, and artistic elevation designs remains vested in the Architect unless assigned in writing, and license to construct is strictly conditional upon fee payment. Simultaneously, **COA Regulation 2(1)(xii)** restricts a successor architect from stepping into an unpaid commission without prior communication—enabling urgent **Commercial Court s.2(1)(c)(xvii)** copyright injunction + full stage-fee recovery.",
    operationalSteps: [
      {
        step: "1. Lock CAD/BIM Metadata, Revision Logs & Municipal Stamping",
        detail:
          "Preserve original DWG/RVT file timestamps, email/WhatsApp transmittals of GFC sets, municipal/RERA sanction drawings bearing your COA registration seal, and site progress photos (BSA s.63).",
      },
      {
        step: "2. Issue Dual Copyright Cease-and-Desist + COA Intimation",
        detail:
          "Serve an advocate notice revoking conditional construction license over unpaid GFC drawings, putting the developer and successor architect on notice under COA Reg. 2(1)(xii) and Copyright Act s.51.",
      },
      {
        step: "3. File Commercial Suit / MSEFC Samadhaan & Interim Injunction",
        detail:
          "For Udyam-registered design studios, invoke MSMED s.15–18 (3x RBI interest + s.43B(h)) alongside urgent Commercial Court restraint against unauthorized execution from copyrighted drawings.",
      },
    ],
    recommendedLinks: [
      {
        label: "Architect GFC Copyright & COA Playbook",
        href: "/architect-interior-consultant-stage-fee-gfc-drawing-copyright-recovery",
      },
      {
        label: "Copyright Not Transferred Until Paid",
        href: "/copyright-not-transferred-until-paid-freelancer",
      },
      {
        label: "Architect IP + Fee Legal Notice Pack",
        href: "/templates/ca-architect-advisor-professional-fee-recovery-legal-notice",
      },
    ],
  },
  {
    id: "mandate-tail-circumvention",
    tabLabel: "M&A / Debt Tail Bypass",
    badge: "Ticket ₹15L – ₹3 Cr+ | Contract Act s.73/205 & Tail Clause",
    title: "Prepared the CMA/IM, Secured Bank Term Sheet or PE Intro—Promoter Closed Directly to Dodge Your 2% Success Fee",
    ticketBand: "₹15,00,000 – ₹3,00,00,000+ (Debt Syndication, M&A Advisory, VC Fundraising & State PLI Subsidy Mandates)",
    statutoryTrigger: "Contract Act ss.73 & 205 Tail-Period Survival + 'Effective Cause' Law + s.9 / Order XXXVIII r.5",
    bottleneck:
      "Boutique investment bankers, corporate debt-syndication DSAs, commercial real-estate IPCs, and state PLI/capital-subsidy consultants work 6–12 months building CMA data, Information Memorandums, and lender/investor introductions. Once sanction or term-sheet alignment nears, promoters claim 'talks collapsed', let the mandate expire, and close directly 45 days later to evade a ₹50L–₹2.5 Cr success fee.",
    legalMechanism:
      "Indian courts strictly enforce signed **Exclusivity and 12-to-24 Month Tail-Period Survival Clauses** under **Contract Act Sections 73 & 205** alongside the **'Effective Cause' agency commission doctrine**. Where MCA Form CHG-1 (Charge Registration), RoC PAS-3 allotment filings, or public SPCB/State Subsidy Sanction Orders prove closing with your introduced counterparty, you can seek **Arbitration Act s.9 / Order XXXVIII Rule 5 CPC** interim security over disbursement proceeds.",
    operationalSteps: [
      {
        step: "1. Pull Public Closing Proof (MCA CHG-1 / PAS-3 / Subsidy Order)",
        detail:
          "Match your timestamped email intro, NDA/IM sharing trail, and lender/investor meeting minutes against public MCA charge filings (CHG-1), share-allotment returns (PAS-3), or government subsidy sanction letters.",
      },
      {
        step: "2. Serve Tail-Period Breach & Anti-Circumvention Notice",
        detail:
          "Issue an urgent advocate notice invoking Mandate Survival/Tail Clauses, quantifying exact % success fee on sanctioned facility/deal value, and warning of Section 9 / Order XXXVIII asset-security proceedings.",
      },
      {
        step: "3. Move Commercial Court / Section 9 Before Proceeds Dissipate",
        detail:
          "File for urgent pre-arbitral interim protection or Order XXXVII / Commercial Court summary enforcement using the signed Mandate Letter and public statutory closing filings.",
      },
    ],
    recommendedLinks: [
      {
        label: "Debt Syndication & M&A Tail-Fee Playbook",
        href: "/investment-banker-debt-syndication-dsa-mandate-success-fee-circumvention",
      },
      {
        label: "ESG, Cyber Audit & State Subsidy Recovery",
        href: "/management-consulting-esg-iso-cyber-audit-advisory-milestone-recovery",
      },
      {
        label: "Mandate Tail-Breach Notice Template",
        href: "/templates/ca-architect-advisor-professional-fee-recovery-legal-notice",
      },
    ],
  },
  {
    id: "pmc-oc-signoff-engineering",
    tabLabel: "PMC / Structural & Lab Sign-Off",
    badge: "Ticket ₹3L – ₹90L | Contract Act s.51–52 & GLP Neutrality",
    title: "Developer Demands Final Structural Stability / OC Certificate or CRO Study Report While Owing 8 Months of Bills",
    ticketBand: "₹3,00,000 – ₹90,00,000 (Structural, MEP, PMC, EIA, Geotechnical, PCS Filings & CRO/NABL Lab Bills)",
    statutoryTrigger: "Contract Act ss.51–52 Reciprocal Promises + NABL/GLP Anti-Contingency Mandate + MSMED s.15–18",
    bottleneck:
      "Structural engineers, PMC teams, MEP/Fire-NOC consultants, and EIA agencies carry maximum contractual leverage right before Occupancy Certificate (OC) or Environmental Clearance sign-offs—yet routinely release certificates on oral promises and chase dues for years. Similarly, pharma sponsors and factories abandon failed BA/BE clinical trials or BIS lab batches and refuse to clear the CRO/NABL lab's final 40% invoice.",
    legalMechanism:
      "Under **Contract Act Sections 51–52 (Reciprocal Promises)**, an engineering consultant or analytical laboratory is NOT legally bound to issue final commercial completion sign-offs, OC stability certificates, or Final Clinical Study Reports (CSR) when prior certified milestone bills remain in material breach. For CROs and NABL labs, **Good Laboratory Practice (GLP) / ISO 17025 neutrality rules** legally prohibit making testing fees contingent on a 'Pass' outcome.",
    operationalSteps: [
      {
        step: "1. Freeze Non-Emergency Final Sign-Off via Written s.51–52 Notice",
        detail:
          "Never withhold orally—serve a crisp written contractual suspension notice citing Sections 51–52, listing unpaid monthly man-month/milestone bills, and confirming prompt release upon RTGS clearance.",
      },
      {
        step: "2. Enforce GLP Anti-Contingency & Approved Protocol Evidence",
        detail:
          "For CROs and NABL labs, attach signed study protocols, sample-receipt logs, raw analytical printouts, and ISO 17025 / GLP neutrality clauses proving scientific testing—not a guaranteed 'Pass'—is the billable deliverable.",
      },
      {
        step: "3. Invoke Udyam MSMED s.15–18 (45-Day Cap) & s.43B(h)",
        detail:
          "For Micro/Small engineering consultancies, PMC firms, and testing labs, couple contractual holdback with 3x RBI compound interest and March 31 Income Tax s.43B(h) CFO escalation.",
      },
    ],
    recommendedLinks: [
      {
        label: "Structural, PMC & MEP Fee Playbook",
        href: "/structural-mep-pmc-geotechnical-engineering-consultant-bill-recovery",
      },
      {
        label: "CRO Clinical Trial & NABL Lab Recovery",
        href: "/clinical-research-cro-testing-laboratory-nabl-unpaid-invoice-recovery",
      },
      {
        label: "MSME Interest & 43B(h) Calculator",
        href: "/tools/msme-delayed-payment-interest-calculator",
      },
    ],
  },
];

export default function ProfessionalServicesHubScenarioTabs() {
  const [activeId, setActiveId] = useState<string>(PRACTICE_SCENARIOS[0].id);
  const current =
    PRACTICE_SCENARIOS.find((s) => s.id === activeId) || PRACTICE_SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div
        role="tablist"
        aria-label="Chartered Accountant, Architect, Engineering Consultant and Deal Advisor recovery scenarios"
        className="flex flex-wrap gap-2 mb-6"
      >
        {PRACTICE_SCENARIOS.map((scenario) => {
          const isActive = scenario.id === current.id;
          return (
            <button
              key={scenario.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(scenario.id)}
              className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                isActive
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Panel */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 md:p-7">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200">
            {current.badge}
          </span>
          <span className="text-xs font-semibold text-slate-500">{current.statutoryTrigger}</span>
        </div>

        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-3">{current.title}</h3>

        <p className="text-xs font-semibold text-slate-600 mb-4">
          <span className="uppercase tracking-wider text-slate-400 mr-1.5">Typical Claim Band:</span>
          {current.ticketBand}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <div className="bg-white rounded-xl p-4 border border-slate-200">
            <p className="text-[11px] font-bold uppercase tracking-wider text-amber-700 mb-1.5">
              Practice Bottleneck &amp; Ethical Risk
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{current.bottleneck}</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-emerald-200">
            <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 mb-1.5">
              Council-Safe Statutory Remedy
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.legalMechanism.split("**").map((part, idx) =>
                idx % 2 === 1 ? (
                  <strong key={idx} className="text-slate-900">
                    {part}
                  </strong>
                ) : (
                  <React.Fragment key={idx}>{part}</React.Fragment>
                )
              )}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
          {current.operationalSteps.map((s) => (
            <div key={s.step} className="bg-white rounded-xl p-4 border border-slate-200">
              <p className="text-xs font-extrabold text-slate-900 mb-1.5">{s.step}</p>
              <p className="text-xs text-slate-600 leading-relaxed">{s.detail}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-slate-200">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mr-1">
            Deep-Dive Routes:
          </span>
          {current.recommendedLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#DC2626] text-xs font-bold text-slate-800 hover:text-[#DC2626] transition-colors"
            >
              <span>{link.label}</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
