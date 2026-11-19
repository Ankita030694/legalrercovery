"use client";

import React, { useState } from "react";
import Link from "next/link";

interface FranchisorScenario {
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

const FRANCHISOR_SCENARIOS: FranchisorScenario[] = [
  {
    id: "pos-cash-skimming",
    tabLabel: "POS Cash Skimming & Ghost QR",
    badge: "Ticket ₹3.5L – ₹42L | Commercial Courts Act s.2(1)(c)(ix)",
    title: "Franchisee Placed Personal UPI QR at Billing Counter, Hiding 45% of Turnover to Slash Monthly Royalties",
    ticketBand: "₹3,50,000 – ₹42,00,000 (accumulated royalty under-reporting + audit penalties)",
    statutoryTrigger: "Commercial Courts Act s.2(1)(c)(ix) [Franchise Disputes] + Contract Act s.73/74 + BSA 2023 s.63",
    bottleneck:
      "QSR, cafe, and salon franchisees routinely accept counter cash or display private Google Pay/PhonePe QR codes unlinked to the franchisor-mandated POS ERP software. Monthly declared gross sales plunge, evading the 6%–8% net revenue royalty and advertising fund levy while brand customer traffic remains peak.",
    legalMechanism:
      "Franchise agreements are explicitly defined as statutory commercial disputes under **Section 2(1)(c)(ix) of the Commercial Courts Act, 2015**. Serving a forensic audit notice backed by **BSA 2023 Section 63** electronic evidence (CCTV counter-grab analysis, mystery-shopper UPI transaction trails, and packaging consumption ratios) enables the franchisor to assess true turnover, invoke audit penalties, and move the Commercial Court for summary judgment under **Order XIII-A CPC**.",
    operationalSteps: [
      {
        step: "1. Dispatch Mystery Shopper & Lock Digital Transaction Trail",
        detail:
          "Conduct unannounced mystery audits capturing video evidence of counter staff requesting payment via personal UPI or cash without generating a system POS bill, authenticated under BSA Section 63.",
      },
      {
        step: "2. Reconstruct Revenue via Central Supply & Packaging Multipliers",
        detail:
          "Cross-reference central commissary dispatches (e.g., branded cups, burger boxes, dough balls) against declared POS sales to mathematically expose the inventory-to-revenue deficit.",
      },
      {
        step: "3. Issue 15-Day Cure-or-Audit Statutory Demand Notice",
        detail:
          "Serve formal demand claiming full recalculated royalty arrears, compounding interest at 18% p.a., independent audit costs, and warning of immediate master POS access termination.",
      },
    ],
    recommendedLinks: [
      {
        label: "Franchisee POS Cash-Skimming Audit Playbook",
        href: "/franchisee-pos-cash-skimming-sales-underreporting-royalty-audit-recovery",
      },
      {
        label: "Central Kitchen Commissary Supply Recovery",
        href: "/central-kitchen-commissary-franchise-supply-invoice-default-recovery",
      },
    ],
  },
  {
    id: "rogue-signboard-holdover",
    tabLabel: "Rogue Holdover Signboard Misuse",
    badge: "Ticket ₹10L – ₹1.5 Cr+ | TM Act s.29/135 & Arb s.9",
    title: "Franchise Terminated for Non-Payment, Yet Rogue Ex-Franchisee Continues Operating Under Brand Signboard",
    ticketBand: "₹10,00,000 – ₹1,50,00,000 (brand infringement damages, unpaid royalties & aggregator revenue)",
    statutoryTrigger: "Trade Marks Act 1999 s.29/135 + Arbitration Act s.9 + IT Rules 2021 Intermediary Takedown",
    bottleneck:
      "Following formal contract termination for chronic default, the ex-franchisee refuses to take down the exterior ACP glow-sign board, retains brand menus and employee uniforms, or launches a lookalike brand ('Chai Stop' replacing 'Chai Spot') while retaining the franchisor's customer base and Swiggy/Zomato reviews.",
    legalMechanism:
      "Post-termination trademark use is pure infringement under **Section 29 and Section 135 of the Trade Marks Act, 1999**. Franchisors can bypass pre-institution mediation under Section 12A(1) proviso of the Commercial Courts Act by filing an urgent **Section 9 Petition under the Arbitration and Conciliation Act, 1996**, securing an immediate ex-parte ad-interim injunction and court-appointed **Local Commissioner** to seize infringing signboards and seal branded assets.",
    operationalSteps: [
      {
        step: "1. Serve Immediate Cease-and-Desist & Aggregator Takedowns",
        detail:
          "Serve a 48-hour de-branding notice. File statutory copyright/trademark infringement notices under IT Rules 2021 with Swiggy, Zomato, Google Maps, and Magicpin to delist the rogue outlet.",
      },
      {
        step: "2. Petition Commercial Court for Section 9 Interim Restraint",
        detail:
          "Seek urgent ex-parte orders restraining trademark use, appointing a Local Commissioner to enter premises, dismantle exterior/interior signage, and impound branded collateral.",
      },
      {
        step: "3. Attach Debtor Accounts & Enforce Commercial Pre-Deposit",
        detail:
          "Obtain conditional attachment of the ex-franchisee's bank accounts to secure outstanding royalty arrears and commissary bills pending final arbitration.",
      },
    ],
    recommendedLinks: [
      {
        label: "Rogue Ex-Franchisee Signboard Injunction Playbook",
        href: "/terminated-rogue-franchisee-using-brand-signboard-royalty-recovery",
      },
      {
        label: "2-Stage Termination & De-Branding Notice Pack",
        href: "/templates/franchisor-royalty-default-termination-signboard-takedown-notice",
      },
    ],
  },
  {
    id: "foco-fico-lockout",
    tabLabel: "FOCO/FICO Store Lockout & Capex",
    badge: "Ticket ₹25L – ₹2 Cr+ | Arbitration s.9 & BNS s.316",
    title: "Property-Investor Locked Company-Operated Store, Trapping ₹35 Lakh of Kitchen Machinery & Chilling Assets",
    ticketBand: "₹25,00,000 – ₹2,00,000+ (fit-out capex, ovens, espresso machines, inventory & business interruption)",
    statutoryTrigger: "Arbitration Act s.9 (Mandatory Receiver) + Specific Relief Act s.6 + BNS s.316 (Breach of Trust)",
    bottleneck:
      "In FOCO (Franchise-Owned, Company-Operated) models, a disgruntled property investor disputes operating cost deductions or minimum guarantee shortfalls during low footfall periods, physically locks the store entrance, and bars company managers from entering, holding expensive commercial equipment hostage.",
    legalMechanism:
      "A franchise investor has zero statutory lien over company-owned machinery, POS servers, cold storage fixtures, and proprietary ingredients. Unlawful lockout constitutes civil conversion and **Criminal Breach of Trust under BNS Section 316**. Moving the High Court or Commercial Court under **Arbitration Act Section 9** secures a mandatory interim direction directing police assistance and appointing an advocate receiver to unlock the store and restore company possession.",
    operationalSteps: [
      {
        step: "1. Document Asset Ownership via Capital Asset Register",
        detail:
          "Collate purchase invoices, e-Way bills, serial numbers, and depreciation schedules demonstrating absolute franchisor ownership of ovens, coffee machines, POS terminals, and chillers.",
      },
      {
        step: "2. Serve Police Intimation & Section 9 Pre-Litigation Notice",
        detail:
          "Lodge a formal written complaint with the jurisdictional police station regarding wrongful restraint and illegal confinement of corporate property, followed by an urgent legal notice.",
      },
      {
        step: "3. Secure Court Receiver for Handover with Police Escort",
        detail:
          "Obtain an ad-interim Section 9 order directing a Court Receiver to cut padlocks, inventory all equipment, and hand over custody to the franchisor's expansion team.",
      },
    ],
    recommendedLinks: [
      {
        label: "FOCO/FICO Investor Dispute & Capex Rescue Playbook",
        href: "/fico-foco-franchise-investor-minimum-guarantee-capex-dispute-recovery",
      },
      {
        label: "Bulk Dispute Resolution & Institutional Desk",
        href: "/bulk-recovery-cases-all-in-one-affordable-solutions",
      },
    ],
  },
  {
    id: "ev-auto-dealership-credit",
    tabLabel: "EV & Auto Dealership Default",
    badge: "Ticket ₹20L – ₹3 Cr+ | Vahan Portal, NI s.138 & s.2(1)(c)",
    title: "EV Two-Wheeler / Three-Wheeler Dealer Collected Cash for 40 Vehicles, Diverted Funds & Defaulted on OEM Invoice",
    ticketBand: "₹20,00,000 – ₹3,00,00,000+ (vehicle consignments, battery inventory & spare parts)",
    statutoryTrigger: "Vahan OEM Portal Dealer Block + NI Act s.138/141 + PSS Act s.25 NACH + Commercial Court Attachment",
    bottleneck:
      "EV 2W/3W and automobile dealers receive vehicle stocks on credit or post-dated cheques, sell units directly to retail customers collecting cash or direct transfers, but divert the cash to other real estate/personal debts instead of settling the OEM's inventory financing ledger.",
    legalMechanism:
      "Automobile dealership contracts are governed by **Commercial Courts Act Section 2(1)(c)(i) & (ix)**. OEMs possess direct regulatory leverage: freezing dealer credentials on the **Vahan 4.0 portal** stops retail registration, preventing further unauthorized vehicle deliveries. Concurrently, presenting trade cheques and NACH mandates activates **NI Act s.138** and **PSS Act s.25**, while seeking **Order XXXVIII Rule 5 CPC** pre-judgment attachment over dealer showroom stock.",
    operationalSteps: [
      {
        step: "1. Instant Freeze on Vahan Portal & Spare-Part Dispatches",
        detail:
          "Immediately revoke dealer login access for Homologation and Vahan chassis registration to stop the dealer from registering unpaid inventory to end-buyers.",
      },
      {
        step: "2. Present Security PDCs & Issue Statutory 30-Day Notice",
        detail:
          "Deposit security cheques for the overdue ledger balance. Upon bank return, serve mandatory NI s.138 statutory demand fastening personal liability on dealer proprietors and directors.",
      },
      {
        step: "3. Apply for Pre-Judgment Attachment of Vehicles & Spares",
        detail:
          "File Section 9 Arbitration or Commercial Court suit praying for seizure of unsold showroom inventory, lithium battery packs, and proprietary diagnostic scanners.",
      },
    ],
    recommendedLinks: [
      {
        label: "EV & Auto Dealership Credit Recovery Playbook",
        href: "/ev-two-wheeler-three-wheeler-automobile-oem-dealer-credit-recovery",
      },
      {
        label: "Distributor & Dealer Dues Recovery Desk",
        href: "/distributor-dealer-dues-recovery",
      },
    ],
  },
];

export default function FranchisorHubScenarioTabs() {
  const [activeScenarioId, setActiveScenarioId] = useState(FRANCHISOR_SCENARIOS[0].id);
  const scenario = FRANCHISOR_SCENARIOS.find((s) => s.id === activeScenarioId) || FRANCHISOR_SCENARIOS[0];

  return (
    <div className="w-full bg-slate-900 text-white rounded-2xl p-5 sm:p-7 border border-slate-800 shadow-xl">
      {/* Tab Selectors */}
      <div className="flex flex-wrap gap-2 pb-5 border-b border-slate-800">
        {FRANCHISOR_SCENARIOS.map((item) => {
          const isActive = item.id === activeScenarioId;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveScenarioId(item.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/40"
                  : "bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              {item.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Content */}
      <div className="pt-6">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-red-950/80 text-red-300 border border-red-800/60">
            {scenario.badge}
          </span>
          <span className="text-xs text-slate-400 font-mono">
            {scenario.ticketBand}
          </span>
        </div>

        <h3 className="text-base sm:text-lg md:text-xl font-extrabold text-white mb-4 leading-snug">
          {scenario.title}
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6">
          <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
              Commercial Bottleneck
            </span>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {scenario.bottleneck}
            </p>
          </div>

          <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
              Statutory Remedy &amp; Precedent Hook
            </span>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {scenario.legalMechanism}
            </p>
          </div>
        </div>

        {/* Operational Steps */}
        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-3">
            Standard 3-Stage Advocate Enforcement Protocol
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {scenario.operationalSteps.map((st, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-3.5">
                <span className="text-xs font-bold text-red-400 block mb-1">
                  {st.step}
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {st.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Spoke Deep Dives */}
        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-slate-400">
            Detailed Statutory Playbook for this dispute:
          </span>
          <div className="flex flex-wrap gap-2">
            {scenario.recommendedLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-200 bg-white/10 hover:bg-[#DC2626] hover:text-white transition-colors"
              >
                <span>{link.label}</span>
                <span>&rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
