"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  tabLabel: string;
  badge: string;
  badgeColor: string;
  title: string;
  context: string;
  legalChallenge: string;
  statutorySolution: string;
  actionableSteps: string[];
  estimatedRecovery: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "upi-qr-diversion",
    tabLabel: "UPI QR Sales Diversion",
    badge: "F&B / Food Court Fraud",
    badgeColor: "bg-red-950/70 border-red-800 text-red-300",
    title: "Food Court QSR Displays Personal Phone QR Code to Evade 18% Revenue Share Rent",
    context:
      "A fast-casual QSR outlet in a prime regional shopping mall food court entered a lease specifying 'Higher of ₹1,75,000 MMG or 18% Net Sales Revenue'. Over 6 consecutive months, the tenant's POS reports showed flat net monthly revenue of ₹7,50,000 (yielding ~₹1,35,000, thereby paying only the ₹1,75,000 MMG floor). Mall leasing noticed customer lines extending 30 deep during lunch and dinner rushes. Mystery shopping and floor inspections revealed the counter cashier displaying a personal Google Pay / Paytm QR code linked to the proprietor's personal saving account, completely bypassing the mall-integrated POS network.",
    legalChallenge:
      "The tenant claims personal UPI payments are 'advance catering bookings' or 'tips' and argues the mall cannot inspect their personal bank statements. Tenant threatens to claim business disruption if the mall cuts billing network access.",
    statutorySolution:
      "Under the Mall Revenue Lease Audit Covenant read with Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63) and Section 52 of the Indian Easements Act, 1882 (food court kiosk status), displaying off-POS QR codes constitutes fraudulent breach of license covenants and criminal breach of trust (BNS Section 316 / IPC Section 405). Mall management can enforce mandatory third-party forensic POS audit, declare liquidated damages of 3x underreported turnover, and exercise immediate license revocation.",
    actionableSteps: [
      "Conduct 5 staged mystery audits across peak hours with timestamped video and UPI UTR transaction receipts matching the personal account.",
      "Issue 48-Hour Forensic POS & Bank Audit Demand Notice invoking lease inspection covenants and Section 63 BSA electronic evidence preservation.",
      "Direct the mall IT infrastructure team to disable tenant's independent Wi-Fi router and enforce exclusive mall billing gateway.",
      "Calculate liquidated damages under the lease covenant (assessed turnover based on average ticket size × footfall count) and issue Section 106 / Easements Act default notice.",
      "If un-remedied in 7 days, cut food-court kitchen utilities (gas/exhaust) and initiate Order XXXVII summary suit for back-rent with 18% interest.",
    ],
    estimatedRecovery: "₹14,80,000 Back Revenue-Share + Penal Audit Surcharge within 21 Days",
  },
  {
    id: "mmg-footfall-default",
    tabLabel: "Anchor MMG Default",
    badge: "Retail Lease Breach",
    badgeColor: "bg-amber-950/70 border-amber-800 text-amber-300",
    title: "National Fashion Retailer Withholds Minimum Monthly Guarantee (MMG) Alleging Footfall Shortfall",
    context:
      "A national apparel brand occupying 3,500 sq. ft. on the ground floor operates under a structured lease: 'Higher of ₹8,00,000 MMG or 12% Net Revenue'. Facing inventory stagnation, the retailer pays only ₹3,20,000 based on actual turnover for 4 months, withholding ₹4,80,000 monthly MMG shortfall (accumulating ₹19,20,000 in arrears). The tenant claims the mall promoter failed to maintain footfall promises or anchor occupancy in adjacent wings, alleging frustration of purpose under Section 56 of the Indian Contract Act, 1872.",
    legalChallenge:
      "Retailers use footfall disputes to drag mall landlords into protracted civil litigation while enjoying free physical occupancy and obstructing handover to replacement brands.",
    statutorySolution:
      "Under Supreme Court jurisprudence (Ramanand v. Dr. Girry Soni and Energy Watchdog v. CERC), commercial lease rentals are unconditional consideration for physical possession; temporary footfall variations or commercial unviability do not trigger Section 56 frustration or entitle tenants to unilaterally waive MMG covenants. The MMG clause is a liquidated debt actionable under Order XXXVII CPC and Commercial Courts Act, 2015 Section 2(1)(c)(vii).",
    actionableSteps: [
      "Issue formal 15-Day Cure Notice under Section 106 TPA demanding ₹19,20,000 MMG balance with 18% contractual interest.",
      "Place tenant on notice regarding loss of security deposit adjustment rights and forfeiture of fit-out reinstatement allowances.",
      "Invoke commercial dispute pre-institution mediation under Section 12A of the Commercial Courts Act, 2015, or Section 9 Arbitration Act for interim security deposit ring-fencing.",
      "File Commercial Summary Suit under Order XXXVII CPC; obtain conditional leave to defend requiring 100% pre-deposit of MMG arrears.",
    ],
    estimatedRecovery: "100% MMG Arrears (₹19.2 Lakhs) Recovered via Pre-Deposit Order in Commercial Court",
  },
  {
    id: "midnight-abandonment",
    tabLabel: "Midnight Kiosk Desertion",
    badge: "Easements Act Revocation",
    badgeColor: "bg-purple-950/70 border-purple-800 text-purple-300",
    title: "Pop-Up Kiosk Brand Quietly Vacates Concourse Overnight Without Clearing 4 Months MMG & Utility Bills",
    context:
      "An accessories kiosk brand occupying a 120 sq. ft. central atrium island on a 11-month Leave & License agreement defaults on 3 months MMG (₹90,000/month = ₹2,70,000) and ₹68,000 in chiller/power utilities. The security deposit was only 2 months (₹1,80,000). At 2:30 AM, tenant's staff attempts to load display counters, inventory, and point-of-sale hardware into a tempo through the basement service bay without obtaining the mandatory Mall Management Outward Gate Pass or No-Dues Clearance.",
    legalChallenge:
      "Kiosk operators are transient LLPs or proprietorships with no fixed physical assets. If inventory exits the mall premises, the landlord is left with an unsecured paper claim against an untraceable entity.",
    statutorySolution:
      "Food-court stalls, island kiosks, and concourse pop-ups operate under Section 52 of the Indian Easements Act, 1882 as bare licensees, not protected lessees. Under express contractual terms, the mall retains a contractual landlord's lien and distress pledge over all stock, display kiosks, and machinery on-site until all dues are liquidated. Furthermore, unauthorized exit violates mall perimeter security covenants.",
    actionableSteps: [
      "Mall security immediately halts unauthorized tempo exit at the boom barrier; impound all inventory and hardware under contractual possessory lien.",
      "Execute Section 60 Easements Act immediate license termination; reclaim concourse floor space within 24 hours for re-leasing.",
      "Issue 7-Day Statutory Auction Notice via registered email and WhatsApp notifying sale of seized inventory to recover ₹1,58,000 net deficit.",
      "Serve Section 138 NI Act notice if tenant provided security cheques that bounced upon deposit.",
      "Initiate e-filing for summary recovery under Order XXXVII CPC or MSME Samadhaan if the mall entity is registered under MSMED Act.",
    ],
    estimatedRecovery: "Immediate Possession Reclaimed + Full Deficit Secured via Lien on Inventory",
  },
  {
    id: "utility-hvac-dispute",
    tabLabel: "Chiller & Gas Default",
    badge: "Common Services Cutoff",
    badgeColor: "bg-blue-950/70 border-blue-800 text-blue-300",
    title: "Food Court Tenant Pays Base MMG but Withholds Commercial Gas, Chilled Water & Exhaust HVAC Bills",
    context:
      "A high-volume Chinese dining counter pays their ₹2,10,000 base MMG regularly but systematically defaults on common utilities: ₹48,000/month for central BTU chiller water, ₹35,000/month for metered piped PNG/LPG gas manifold supply, and ₹22,000/month for kitchen hood exhaust scrubbers. Arrears accumulate to ₹6,30,000 over 6 months. Tenant claims the mall charges inflated utility rates compared to residential tariffs and refuses to pay CAM reconciliations.",
    legalChallenge:
      "Tenants threaten to file police complaints or seek civil court temporary injunctions claiming food products will spoil if gas or electricity is cut off.",
    statutorySolution:
      "Under Indian lease law and commercial condominium precedents, specialized kitchen utilities (piped commercial PNG, dedicated kitchen exhaust blowers, and central chilled water) are contractual commercial amenities, not statutory residential basic necessities. Providing 72-hour formal cure notice with CA-certified utility reconciliation establishes legal right to suspend specialized amenities without violating Section 108(m) TPA or inviting injunctions.",
    actionableSteps: [
      "Present third-party energy auditor BTU meter logs, DISCOM tariff schedules, and PNG flowmeter logs certified under BSA Section 63.",
      "Serve 72-Hour Final Utility Disconnection Demand Notice citing specific lease clauses governing commercial utility supply.",
      "Upon non-payment at hour 73, execute lawful mechanical valve lock-out on piped PNG line and turn off chilled water secondary loop valve.",
      "When tenant offers partial payment, refuse waiver of penal interest (18% p.a.) and adjust existing security deposit towards oldest utility bills.",
      "Execute simultaneous legal notice for lease cancellation due to chronic breach of operational covenants.",
    ],
    estimatedRecovery: "₹6,30,000 Utility Arrears Recovered within 72 Hours of Lawful Supply Suspension",
  },
];

export default function RetailMallScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Tab Navigation Header */}
      <div className="border-b border-slate-200 bg-slate-50/80 p-2 sm:p-3 overflow-x-auto">
        <div className="flex gap-2 min-w-max">
          {SCENARIOS.map((scenario) => {
            const isActive = scenario.id === activeTab;
            return (
              <button
                key={scenario.id}
                type="button"
                onClick={() => setActiveTab(scenario.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-150 flex items-center gap-2 ${
                  isActive
                    ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                    : "bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80"
                }`}
              >
                <span>{scenario.tabLabel}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content Panel */}
      <div className="p-5 sm:p-7 md:p-8 space-y-6">
        {/* Title and Badge */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-extrabold uppercase tracking-wider border mb-1">
            <span className={`px-2 py-0.5 rounded-full ${current.badgeColor}`}>
              {current.badge}
            </span>
            <span className="text-slate-500 font-semibold">Live Operational Case</span>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 leading-snug">
            {current.title}
          </h3>
        </div>

        {/* 2-Column Details: Context & Statutory Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          <div className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200 space-y-2">
            <h4 className="text-xs uppercase tracking-wider font-extrabold text-slate-700 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              Factual Commercial Context
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {current.context}
            </p>
            <div className="pt-2 border-t border-slate-200/80 mt-2">
              <p className="text-[11px] font-bold text-red-700">
                Debtor Defense: <span className="font-normal text-slate-600">{current.legalChallenge}</span>
              </p>
            </div>
          </div>

          <div className="bg-red-50/60 p-4 sm:p-5 rounded-xl border border-red-200/80 space-y-2">
            <h4 className="text-xs uppercase tracking-wider font-extrabold text-[#DC2626] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
              Landlord Statutory Remedy &amp; Doctrine
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              {current.statutorySolution}
            </p>
            <div className="pt-2 border-t border-red-200/80 mt-2">
              <p className="text-[11px] font-extrabold text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded-lg inline-block">
                Expected Enforcement: {current.estimatedRecovery}
              </p>
            </div>
          </div>
        </div>

        {/* Actionable SOP Steps */}
        <div className="space-y-3">
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
            Creditor Action Plan (Step-by-Step Recovery Playbook)
          </h4>
          <ol className="space-y-2">
            {current.actionableSteps.map((step, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 p-3 bg-white rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700"
              >
                <span className="w-6 h-6 rounded-full bg-[#111827] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
