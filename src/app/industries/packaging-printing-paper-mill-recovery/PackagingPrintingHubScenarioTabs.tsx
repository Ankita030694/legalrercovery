"use client";

import React, { useState } from "react";
import Link from "next/link";

interface PackagingScenario {
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

const PACKAGING_SCENARIOS: PackagingScenario[] = [
  {
    id: "unlifted-custom-pouches",
    tabLabel: "Unlifted Brand Pouches",
    badge: "Ticket ₹4L – ₹85L | Sale of Goods s.55 & s.44",
    title: "Printed 5 Tons of FSSAI Brand-Logo Laminates—Buyer Tweaked Artwork & Left 3.5 Tons Rotting in Your Godown",
    ticketBand: "₹4,00,000 – ₹85,00,000 (custom-printed laminate rolls, mono-cartons, gravure cylinders & storage)",
    statutoryTrigger: "Sale of Goods Act s.55 & s.44 + Contract Act s.73 (Zero-Salvage Measure of Damages)",
    bottleneck:
      "FMCG, spices, snack, and pharma brands negotiate low per-pouch rates on 5-ton MOQs, lift 1.5 tons, revise FSSAI declarations or discontinue the SKU, and abandon 3.5 tons of branded stock. Because trademark law bars you from reselling branded rolls to anyone else, buyers try forcing 25% distress haircuts.",
    legalMechanism:
      "Under **Sale of Goods Act s.55–56** and **Indian Contract Act s.73**, where custom-printed brand packaging has **zero lawful resale market** (only ~₹8/kg shredded scrap value), courts award **100% of the contract price plus Section 44 godown holding/storage rent** minus scrap realization. Pairing a **15-day Notice to Lift Stock** with **Income Tax s.43B(h)** breaks buyer stalling immediately.",
    operationalSteps: [
      {
        step: "1. Lock Artwork Sign-Off & Ready-for-Dispatch Mail",
        detail:
          "Compile the signed PO/MOQ confirmation, buyer-approved PDF/Pantone shade card, production log, and timestamped Ready-for-Dispatch intimation with godown photos (BSA s.63).",
      },
      {
        step: "2. Serve 15-Day Lift-Stock + s.44 Godown Rent Notice",
        detail:
          "Demand full invoice value for delivered lots, full contract price for unlifted branded WIP/FG, monthly godown rent under s.44, and unpaid cylinder engraving costs.",
      },
      {
        step: "3. Invoke MSEFC Samadhaan & Cylinder General Lien",
        detail:
          "Put the buyer on formal notice of MSMED s.16 compound interest (3x RBI Bank Rate), s.43B(h) tax disallowance, and contractual lien over their 8-colour copper cylinders.",
      },
    ],
    recommendedLinks: [
      {
        label: "Unlifted Custom-Printed Stock Playbook",
        href: "/custom-printed-flexible-packaging-pouches-cartons-unlifted-stock-recovery",
      },
      {
        label: "Unlifted Stock & Godown Rent Notice",
        href: "/templates/packaging-unlifted-custom-stock-and-invoice-legal-notice",
      },
      {
        label: "MSME Interest & 43B(h) Calculator",
        href: "/tools/msme-delayed-payment-interest-calculator",
      },
    ],
  },
  {
    id: "corrugated-bf-gsm-excuse",
    tabLabel: "Corrugated BF/GSM Deductions",
    badge: "Ticket ₹2L – ₹60L | Sale of Goods s.42 & 43B(h)",
    title: "Buyer Packed & Exported Goods in Your Cartons—Then Deducted 15% Claiming 'Low Bursting Factor / Moisture'",
    ticketBand: "₹2,00,000 – ₹60,00,000 (5-ply/7-ply shipper cartons & mono-carton ledgers at 60–120 DPD)",
    statutoryTrigger: "Sale of Goods Act s.42 (Deemed Acceptance by Consumption) + MSMED Act s.15–18 & s.43B(h)",
    bottleneck:
      "Automatic and semi-automatic corrugated box makers (FCBM clusters) routinely face arbitrary 10–15% debit notes raised 60 to 90 days after dispatch—alleging low Bursting Strength (BF), Edge Crush Test (ECT) drop, or monsoon humidity damage long after the buyer packed and sold finished goods inside those exact cartons.",
    legalMechanism:
      "Under **Sale of Goods Act Section 42**, a buyer who consumes cartons by packing, sealing, and dispatching outward merchandise has **irrevocably accepted the goods**. Unilateral post-use quality deductions without a **contemporaneous pre-use joint lab test** are void, and delaying an Udyam box maker's invoice past **45 days** triggers **3x RBI compound interest** and **Income Tax s.43B(h) corporate tax disallowance**.",
    operationalSteps: [
      {
        step: "1. Assemble Dispatch QC & GST e-Way Delivery Proof",
        detail:
          "Gather pre-dispatch BF/GSM/Cobb QC test slips, signed lorry receipts, GST e-Way Bills, and proof that zero written objection was raised within 48–72 hours of gate entry.",
      },
      {
        step: "2. Reject Unilateral Debit Note Under Section 42",
        detail:
          "Issue a fact-verified notice rejecting the belated debit note, enclosing your Udyam certificate and computing exact 43B(h) corporate tax add-back risk for the buyer's CFO.",
      },
      {
        step: "3. File MSEFC Samadhaan / Order XXXVII Summary Suit",
        detail:
          "Escalate unpaid Micro/Small enterprise carton ledgers to the jurisdictional Micro & Small Enterprises Facilitation Council (MSEFC) or file Order XXXVII CPC on admitted GST invoices.",
      },
    ],
    recommendedLinks: [
      {
        label: "Corrugated BF/GSM Dispute Playbook",
        href: "/corrugated-box-carton-manufacturer-bursting-strength-gsm-dispute-recovery",
      },
      {
        label: "Section 43B(h) 45-Day Law Guide",
        href: "/law/section-43bh-msme-payment-rule",
      },
      {
        label: "MSME Delayed Payment Notice Format",
        href: "/templates/msme-delayed-payment-demand-notice",
      },
    ],
  },
  {
    id: "cylinder-mould-lien",
    tabLabel: "Cylinder & Mould Handover",
    badge: "Ticket ₹5L – ₹1.2 Cr | Contract Act s.170/171",
    title: "Defaulting Brand Sent a Truck to Pick Up Its Gravure Cylinders or Blow-Mould While Owing ₹22 Lakh",
    ticketBand: "₹5,00,000 – ₹1,20,00,000 (copper rotogravure cylinders, PET/HDPE blow moulds & injection dies)",
    statutoryTrigger: "Indian Contract Act s.170 & Contractual General-Lien Clauses + MSMED s.15–18",
    bottleneck:
      "When an FMCG, edible-oil, beverage, or agrochemical brand plans to shift production to a cheaper converter while owing ₹15L–₹40L for supplied pouches or bottles, its first move is sending a demand email or truck to collect its custom-engraved copper cylinders or embossed blow-moulds—leaving the original converter stranded.",
    legalMechanism:
      "Where your quotation, PO acknowledgement, or invoice distinguishes a **'Cylinder/Mould Development Contribution'** from full title transfer—or contains an express **Contractual General Lien**—you can lawfully **retain custody of cylinders, flexo plates, cutting dies, and blow-moulds** until every overdue pouch, carton, or bottle ledger (plus accrued storage charges) is cleared in full.",
    operationalSteps: [
      {
        step: "1. Audit Cylinder / Mould Billing & PO Lien Language",
        detail:
          "Check whether the buyer paid a subsidized 'development/maintenance contribution' or full fabrication cost, and locate contractual lien terms on prior quotations and invoices.",
      },
      {
        step: "2. Serve Formal Lien Intimation & Idle-Asset Storage Notice",
        detail:
          "Before refusing truck pickup verbally, send a fact-verified Lien Intimation Notice confirming safe custody pending full ledger clearance—preventing false BNS s.316 police complaints.",
      },
      {
        step: "3. Link Release Strictly to RTGS Settlement & Full Reconciliation",
        detail:
          "Issue a conditional handover protocol: full cleared RTGS of principal + MSMED interest + unlifted branded inventory value, with a joint no-dues sign-off at gate release.",
      },
    ],
    recommendedLinks: [
      {
        label: "Cylinder, Plate & Die Lien Law (L1)",
        href: "/printing-cylinders-dies-plates-ownership-and-lien-law-packaging",
      },
      {
        label: "Rigid PET/HDPE & Mould Lien Guide",
        href: "/rigid-plastic-pet-preform-hdpe-drum-glass-bottle-mould-recovery",
      },
      {
        label: "Packaging Invoice & Lien Template",
        href: "/templates/packaging-unlifted-custom-stock-and-invoice-legal-notice",
      },
    ],
  },
  {
    id: "paper-mill-reel-default",
    tabLabel: "Paper Mill Reel Defaults",
    badge: "Ticket ₹10L – ₹2.5 Cr+ | NI s.138 & IBC s.8",
    title: "Corrugator or Chawri Bazar Paper Merchant Raised 'GSM / Cobb / Shade' Claim After Slitting Your Kraft Reels",
    ticketBand: "₹10,00,000 – ₹2,50,00,000+ (kraft paper, duplex board & writing-printing mill dealer ledgers)",
    statutoryTrigger: "Paper Trade Custom (No Claim Post-Slitting/Printing) + NI Act s.138 + IBC s.8 (≥ ₹1 Cr)",
    bottleneck:
      "Kraft and duplex board mills across Vapi, Morbi, Muzaffarnagar, Kashipur, Punjab, and Erode dispatch jumbo reels on 45–60 day credit to corrugators and wholesale merchants. When spot kraft rates dip ₹3–₹4/kg, defaulting buyers manufacture post-slitting GSM, moisture, or ply-bond complaints to dodge ₹20L–₹1.5 Cr bills.",
    legalMechanism:
      "Established **Indian paper-trade usage and standard mill invoice covenants** bar any quality claim once a jumbo reel is **cut, slit, sheeted, or mounted on a corrugation/offset press** without prior mill-technician inspection. Combining **NI Act s.138** on dealer cheques, **Order XXXVII CPC**, and **IBC Section 8 Form 3 Demand Notices** (for corporate defaults ≥ ₹1 Crore) compels swift settlement.",
    operationalSteps: [
      {
        step: "1. Lock Mill Lab Slip, Reel-Weight Chart & GST Trail",
        detail:
          "Compile reel-wise deckle/GSM/BF lab test reports, weighbridge dharam-kanta slips, e-Way Bills, and merchant ledger confirmations showing zero pre-conversion complaint.",
      },
      {
        step: "2. Trigger NI s.138 (30-Day Window) & Trade Notice",
        detail:
          "Present dealer security cheques with prior intimation, serve mandatory 30-day NI s.138 statutory demand notice on dishonour, and copy the broker/del-credere agent where liable.",
      },
      {
        step: "3. Escalate Corporate Defaulters ≥ ₹1 Cr Under IBC s.8",
        detail:
          "Where no pre-existing genuine dispute exists prior to demand, issue an IBC Form 3 statutory notice giving corporate buyers a strict 10-day window before NCLT Section 9 filing.",
      },
    ],
    recommendedLinks: [
      {
        label: "Kraft & Duplex Paper Mill Recovery",
        href: "/kraft-paper-duplex-board-mill-dealer-converter-credit-recovery",
      },
      {
        label: "PP Woven Sack & FIBC Bag Recovery",
        href: "/woven-sacks-pp-raffia-fibc-jumbo-bag-manufacturer-payment-recovery",
      },
      {
        label: "Bulk Mill & Association CSV Desk",
        href: "/bulk-recovery-cases-all-in-one-affordable-solutions",
      },
    ],
  },
];

export default function PackagingPrintingHubScenarioTabs() {
  const [activeId, setActiveId] = useState<string>(PACKAGING_SCENARIOS[0].id);
  const current =
    PACKAGING_SCENARIOS.find((s) => s.id === activeId) || PACKAGING_SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div
        role="tablist"
        aria-label="Packaging, printing and paper mill recovery scenarios"
        className="flex flex-wrap gap-2 mb-6"
      >
        {PACKAGING_SCENARIOS.map((scenario) => {
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
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-amber-700 mb-1.5">
              Converter &amp; Mill Bottleneck
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{current.bottleneck}</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 mb-1.5">
              Statutory Recovery Mechanism
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

        <div className="bg-slate-900 text-white rounded-xl p-4 sm:p-5 mb-5">
          <p className="text-[11px] font-bold uppercase tracking-wider text-red-400 mb-3">
            3-Step Creditor Execution Protocol
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {current.operationalSteps.map((st) => (
              <div key={st.step} className="bg-white/5 border border-white/10 rounded-lg p-3.5">
                <p className="text-xs font-bold text-white mb-1">{st.step}</p>
                <p className="text-xs text-slate-300 leading-relaxed">{st.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mr-1">
            Deep-Dive Routes:
          </span>
          {current.recommendedLinks.map((lnk) => (
            <Link
              key={lnk.href}
              href={lnk.href}
              className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-bold bg-white border border-slate-200 text-slate-800 hover:border-[#DC2626] hover:text-[#DC2626] transition-colors"
            >
              {lnk.label} &rarr;
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
