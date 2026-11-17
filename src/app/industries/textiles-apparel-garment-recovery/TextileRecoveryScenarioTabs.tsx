"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  badge: string;
  cluster: string;
  title: string;
  bottleneck: string;
  debtorTactic: string;
  statutoryRemedy: string;
  evidenceStack: string[];
  actionPath: {
    primaryForum: string;
    timeline: string;
    recoveryRate: string;
    ctaLabel: string;
    ctaHref: string;
  };
}

const SCENARIOS: Scenario[] = [
  {
    id: "broker-adatiya",
    badge: "AGENCY FRAUD",
    cluster: "Surat / Bhiwandi / Ahmedabad",
    title: "Broker (Adatiya / Dalal) Outstation Buyer Default & Absconding Fraud",
    bottleneck:
      "A local textile broker guarantees an outstation wholesale buyer across Delhi, Kanpur, or Kolkata, takes delivery of grey/printed fabric via transport bilty, collects payments in cash or secret accounts, and when default occurs, claims 'I am only a neutral middleman, file a police report against the buyer.'",
    debtorTactic:
      "Broker claims lack of privity of contract while buyer changes godown locations or shuts shop ('party uth gayi'). Both collude to let limitation period expire or shift blame to regional mandi transport agents.",
    statutoryRemedy:
      "Indian Contract Act 1872 s.182, s.211, s.218 & s.230 (Del Credere Agency joint liability), Bharatiya Nyaya Sanhita (BNS) 2023 s.318(4) & s.61(2) criminal conspiracy, and Commercial Summary Suit (Order 37 CPC) holding broker as co-defendant guarantor.",
    evidenceStack: [
      "Broker Sauda Chithi / Brokerage Slip (Dalali Memo) specifying rate, terms, and broker signature",
      "Lorry Receipt (LR) / Transport Bilty naming delivery point arranged by broker",
      "Broker WhatsApp audio recordings / chats acknowledging buyer credit guarantee and payment collection",
      "GST E-Way Bills cross-referenced to broker-designated destination godown",
      "Section 63 Bharatiya Sakshya Adhiniyam (BSA) 2023 electronic certificate for digital chats",
    ],
    actionPath: {
      primaryForum: "Commercial Court Summary Suit + Joint BNS 318 Criminal Complaint + Co-Noticee Legal Demand",
      timeline: "15-Day Statutory Notice -> 90–180 Days Pre-Trial Attachment",
      recoveryRate: "78% Settlement Pre-Trial upon Broker Co-Noticee Joinder",
      ctaLabel: "Draft Broker & Buyer Joint Notice",
      ctaHref: "/templates/textile-garment-buyer-and-broker-joint-demand-legal-notice",
    },
  },
  {
    id: "sor-rejection",
    badge: "RETAIL CONTRACT ABUSE",
    cluster: "Tirupur / Noida / Bengaluru / Ludhiana",
    title: "Large-Format Retailer & Fashion Brand Season-End SOR Return Blackmail",
    bottleneck:
      "Tier-1 fashion brand or e-commerce aggregator orders 25,000 units of seasonal garments under a unilateral purchase agreement, sells 65% during peak Diwali/Pooja festival, and dumps the remaining 35% unsold stock back on the manufacturer claiming 'Sale-or-Return (SOR)' or bogus post-delivery QC defect deductions.",
    debtorTactic:
      "Debit notes issued 90–120 days post-dispatch; unilateral withholding of 40% final bill; threatening vendor de-listing if returns are not accepted along with reverse freight charges.",
    statutoryRemedy:
      "Sale of Goods Act 1930 s.41 & s.42 (buyer deemed to have accepted goods if retained beyond reasonable inspection window without prompt rejection), MSMED Act s.15 (15-day deemed acceptance rule overrides contract SOR), and MSMED s.16 compound interest at 3x RBI Bank Rate.",
    evidenceStack: [
      "Factory Dispatch QC Pass Certificate signed by brand's nominated third-party inspector (SGS/Bureau Veritas)",
      "Proof of Delivery (POD) signed at central distribution warehouse without written objection within 15 days",
      "Point of Sale (POS) sell-through reports proving garments were put on live retail display/sold to consumers",
      "Email trail rejecting post-season debit notes within 48 hours of receipt",
      "GST GSTR-1 and GSTR-2B filing confirming invoice acceptance by retailer",
    ],
    actionPath: {
      primaryForum: "MSEFC Samadhaan / ODR Institutional Conciliation + Order 37 CPC Summary Suit",
      timeline: "45–90 Days Conciliation -> Recovery / 3x RBI Interest Award",
      recoveryRate: "84% Recovery with Full Disallowance of Bogus Debit Notes",
      ctaLabel: "Counter Retail Brand SOR Rejection",
      ctaHref: "/retail-fashion-brand-sor-sale-or-return-rejection-garment-recovery",
    },
  },
  {
    id: "job-work-lien",
    badge: "PROCESSOR LIEN",
    cluster: "Surat / Ahmedabad / Ichalkaranji / Bhilwara",
    title: "Unpaid Dyeing, Bleaching, Rotary-Printing & Embroidery Job-Work Invoices",
    bottleneck:
      "Dyeing and printing processing mills process thousands of meters of grey fabric into finished fabric. The fabric merchant lifts completed lots on 30-day credit, then halts payments for earlier processing charges while demanding release of ongoing job-work lots, alleging fictitious 'color shade variation' or 'GSM shrinkage.'",
    debtorTactic:
      "Merchant threatens police complaints for 'illegal detention of goods' while refusing to pay ₹15–50 Lakhs in accumulated job-work processing charges, hoping processor will succumb to space pressure.",
    statutoryRemedy:
      "Indian Contract Act 1872 s.170 (Bailee's Particular Possessory Lien on goods in possession until processing remuneration is paid), combined with MSMED Act s.18 reference for statutory 3x compound interest.",
    evidenceStack: [
      "Grey fabric incoming gate pass / Challan with mill lot number and meterage recorded",
      "Job-work delivery challans showing batch-wise delivery and acceptance of previous finished lots",
      "Lab shade test / spectrophotometer matching reports approved via WhatsApp/email prior to bulk run",
      "Formal Notice of Exercise of Possessory Lien under Section 170 Contract Act",
      "Detailed statement of accounts and ledger confirmation signed by fabric merchant",
    ],
    actionPath: {
      primaryForum: "Exercise Section 170 Possessory Lien + MSME Samadhaan Conciliation Desk",
      timeline: "Immediate Physical Retention -> 30-Day Commercial Settlement",
      recoveryRate: "92% Fast-Track Clearance (Possession Prevents Debtor Evasion)",
      ctaLabel: "Enforce Job-Work Fabric Lien",
      ctaHref: "/dyeing-printing-bleaching-embroidery-job-work-fabric-lien-recovery",
    },
  },
  {
    id: "spinning-cotton",
    badge: "COMMODITY PRICE FALL",
    cluster: "Coimbatore / Bhilwara / Ludhiana / Rajkot",
    title: "Cotton / Yarn Price Crash: Buyer Refusal to Lift Booked Yarn Lots",
    bottleneck:
      "Spinning mill books forward contracts for 100 metric tons of cotton yarn at ₹280/kg. Global MCX/NYBOT cotton futures slide 15%, spot price drops to ₹245/kg. The weaving unit or yarn trader stops giving dispatch instructions, delays lifting lots, and refuses to absorb the contract rate difference.",
    debtorTactic:
      "Buyer lets delivery window expire, claims 'market force majeure', or raises non-existent quality complaints regarding count strength or CSP value to walk away from contracted losses.",
    statutoryRemedy:
      "Sale of Goods Act 1930 s.44 & s.56 (damages for non-acceptance calculated as difference between contracted rate and prevailing market price on date of breach), Indian Contract Act s.73, and Section 9 Arbitration interim preservation.",
    evidenceStack: [
      "Counter-signed Yarn Sauda Contract / Purchase Confirmation note with fixed count and delivery schedule",
      "Notice of Readiness for Dispatch issued by mill via registered email & speed post",
      "Official Mill Association (SIMA / NITMA / SIMA Cotton Committee) daily market price benchmark bulletins",
      "Warehouse storage log and carrying cost debit memos",
      "Demand notice demanding differential damages or immediate lifting with advance RTGS",
    ],
    actionPath: {
      primaryForum: "Commercial Court Section 9/Order 38 Rule 5 Asset Freeze + Arbitration / MSME Samadhaan",
      timeline: "15-Day Readiness Notice -> Immediate Pre-Trial Security",
      recoveryRate: "74% Difference Recovery / Contract Re-negotiation at Protected Floor",
      ctaLabel: "Recover Yarn Contract Difference",
      ctaHref: "/spinning-mill-yarn-dealer-credit-default-cotton-contract-recovery",
    },
  },
];

export default function TextileRecoveryScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);

  const scenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
        {SCENARIOS.map((s) => {
          const isActive = s.id === activeTab;
          return (
            <button
              key={s.id}
              onClick={() => setActiveTab(s.id)}
              className={`p-3 rounded-xl border text-left transition-all relative ${
                isActive
                  ? "bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-[#DC2626]"
                  : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              <span
                className={`text-[9px] font-extrabold uppercase tracking-wider block mb-1 ${
                  isActive ? "text-red-400" : "text-[#DC2626]"
                }`}
              >
                {s.badge}
              </span>
              <p className="text-xs font-bold leading-tight line-clamp-2">
                {s.cluster}
              </p>
            </button>
          );
        })}
      </div>

      {/* Scenario Detail Card */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-200">
          <div>
            <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] border border-red-200 mb-1.5">
              {scenario.cluster}
            </span>
            <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
              {scenario.title}
            </h3>
          </div>
          <span className="text-xs font-bold px-3 py-1 bg-emerald-100 text-emerald-800 rounded-lg border border-emerald-200">
            {scenario.actionPath.recoveryRate}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              Commercial Bottleneck & Debtor Evasion
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed mb-3">
              {scenario.bottleneck}
            </p>
            <p className="text-xs text-slate-500 italic bg-slate-50 p-2 rounded-lg border border-slate-100">
              <strong className="text-slate-700 not-italic">Debtor Tactic:</strong> {scenario.debtorTactic}
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Statutory Hook & Legal Architecture
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed mb-3">
              {scenario.statutoryRemedy}
            </p>
            <div className="bg-emerald-50/60 p-2.5 rounded-lg border border-emerald-200 text-xs text-emerald-900 font-medium">
              <strong>Recommended Track:</strong> {scenario.actionPath.primaryForum}
            </div>
          </div>
        </div>

        {/* Evidence Stack */}
        <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 mb-6">
          <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3 flex items-center gap-2">
            <svg className="w-4 h-4 text-[#DC2626]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Evidence Stack Required for Instant Legal Action
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
            {scenario.evidenceStack.map((ev, idx) => (
              <li key={idx} className="flex items-start gap-2 bg-slate-50 p-2 rounded-lg border border-slate-100">
                <span className="w-4 h-4 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  ✓
                </span>
                <span>{ev}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Timeline & Action CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900 text-white p-4 sm:p-5 rounded-xl">
          <div className="text-left">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-0.5">
              Enforcement Timeline Window
            </span>
            <p className="text-xs sm:text-sm font-semibold text-white">
              {scenario.actionPath.timeline}
            </p>
          </div>
          <a
            href={scenario.actionPath.ctaHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold rounded-xl transition-all shadow-md text-center"
          >
            <span>{scenario.actionPath.ctaLabel}</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
