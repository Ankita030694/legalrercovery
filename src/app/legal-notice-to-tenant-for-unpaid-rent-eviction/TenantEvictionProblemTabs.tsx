"use client";

import React, { useState } from "react";
import Link from "next/link";

interface ProblemTab {
  id: string;
  tabLabel: string;
  title: string;
  cause: string;
  legalBasis: string;
  steps: {
    step: string;
    description: string;
  }[];
  statutoryRule: string;
}

const PROBLEMS: ProblemTab[] = [
  {
    id: "unregistered-lease",
    tabLabel: "Unregistered 11-Month Lease",
    title: "Tenant Defaulting Under an Unregistered or Expired 11-Month Rent Agreement",
    cause:
      "A common hurdle landlords face is having only an unregistered 11-month agreement or a lapsed notarized contract. Many landlords mistakenly believe that because the agreement was never registered at the Sub-Registrar's office, they cannot legally evict the tenant or recover unpaid rent arrears through courts.",
    legalBasis:
      "Under Section 107 of the Transfer of Property Act, 1882 and Section 17(1)(d) of the Registration Act, 1908, leases under 11 months do not require mandatory registration. In Anthony v. K.C. Ittoop & Sons (2000) 6 SCC 394 and Sevoke Properties (2019) 11 SCC 561, the Supreme Court confirmed that even if an agreement is unregistered or expired, continuous occupation and rent payment create an oral month-to-month tenancy by implication. Such tenancies are legally terminable by serving a simple 15-day statutory notice under Section 106 of the TPA.",
    steps: [
      {
        step: "Collate Prior Rent Payment Proofs",
        description:
          "Gather bank statements, UPI transactions, or rent counterfoils establishing the agreed monthly rent and the tenant's continuous possession of the premises.",
      },
      {
        step: "Serve Statutory 15-Day Termination Notice Under Section 106",
        description:
          "Dispatch an advocate legal notice formally terminating the month-to-month tenancy, demanding complete arrears clearance within 15 days, and requiring handover of vacant possession.",
      },
      {
        step: "File Suit for Possession & Arrears Upon Expiry of 15 Days",
        description:
          "Once 15 days lapse post-receipt of notice, the tenant becomes a tenant-at-sufferance or trespasser. File an eviction suit alongside an Order 37 summary recovery suit for arrears and mesne profits.",
      },
    ],
    statutoryRule: "Section 106 TPA 1882 & Anthony v. K.C. Ittoop (2000) 6 SCC 394",
  },
  {
    id: "locked-and-absconded",
    tabLabel: "Locked & Absconding Tenant",
    title: "Tenant Has Put Their Own Lock, Stopped Paying Rent, and Vanished",
    cause:
      "Landlords frequently discover that the tenant has locked the flat or commercial shop, defaulted on rent for several months, and stopped answering calls or WhatsApp messages. Desperate landlords often contemplate breaking the lock or cutting power and water, which exposes them to criminal complaints for wrongful restraint or criminal trespass.",
    legalBasis:
      "Unilateral lock-breaking or utility disconnection violates Indian tenancy law and constitutes criminal trespass or wrongful confinement under the Bharatiya Nyaya Sanhita, 2023 (BNS Section 329/332). The lawful procedure requires serving a formal notice to the tenant's permanent address and registered email, obtaining a panchnama in the presence of local police or resident welfare association (RWA) office-bearers, or securing an ex-parte possession order from the competent Rent Authority or Civil Court.",
    steps: [
      {
        step: "Serve Demand Notice to All Known Addresses & Digital Channels",
        description:
          "Issue a legal notice via Registered Speed Post to the tenant's permanent home address (as per Aadhaar), workplace, email, and WhatsApp demanding payment and key handover within 15 days.",
      },
      {
        step: "Lodge a Written Police Intimation (GD Entry)",
        description:
          "Submit a formal written intimation to the local police station documenting the tenant's abandonment, utility arrears, and lock-out to preempt any false counter-allegations of theft.",
      },
      {
        step: "Approach Rent Authority or Court for Court-Supervised Bailiff Inventory",
        description:
          "File for an urgent eviction order or appointment of a Court Commissioner / Bailiff to break the lock lawfully, prepare an official inventory of inside goods, and restore vacant possession.",
      },
    ],
    statutoryRule: "Section 21/22 Model Tenancy Act & Section 111(g) TPA 1882",
  },
  {
    id: "holding-over",
    tabLabel: "Holding Over / Lease Expired",
    title: "Agreement Expired but Tenant Flatly Refuses to Vacate the Property",
    cause:
      "When the fixed tenure (e.g., 11 months or 3 years) expires, some tenants refuse to vacate, continuing to stay without landlord consent. If the landlord accepts any rent after lease expiration without a written renewal or reservation of rights, the tenant may claim 'holding over' under Section 116 of the TPA, restarting a month-to-month tenancy.",
    legalBasis:
      "Under Section 111(a) of the Transfer of Property Act, 1882, a lease determines automatically by efflux of time. Under Atma Ram Properties (P) Ltd. v. Federal Motors (P) Ltd. (2005) 1 SCC 705 and Indian Oil Corp. v. Sudera Realty (2022) SC, once the lease expires and notice is served, the tenant is liable to pay damages/mesne profits at current prevailing market rates—frequently double or triple the agreed rent—for every month of unauthorized occupation.",
    steps: [
      {
        step: "Never Accept Post-Expiry Rent Without Written Reservation",
        description:
          "Refrain from accepting rent payments directly into your account post-notice, or accept strictly 'without prejudice' to the pending eviction and termination claim.",
      },
      {
        step: "Issue Legal Notice Demanding Vacant Possession & Mesne Profits",
        description:
          "Explicitly inform the tenant that post-expiry stay constitutes unlawful encroachment and that damages/mesne profits of 2x to 3x market rent will accrue daily until possession is restored.",
      },
      {
        step: "File Eviction Petition with Urgent Application for Occupation Charges",
        description:
          "File an eviction petition before the Rent Controller / Civil Court and seek an interim order under Order 39A / Section 151 CPC directing the tenant to deposit monthly market compensation in court.",
      },
    ],
    statutoryRule: "Section 111(a), 116 TPA & Atma Ram Properties (2005) 1 SCC 705",
  },
  {
    id: "deposit-exhaustion",
    tabLabel: "Unlawful Deposit Offset",
    title: "Tenant Stopped Paying Rent Stating 'Adjust It from My Security Deposit'",
    cause:
      "Tenants approaching the end of their lease often unilaterally withhold rent for the final 2 to 3 months, instructing the landlord to 'deduct rent from the advance security deposit'. This deprives the landlord of financial security for structural damages, unpaid electricity/piped gas bills, society maintenance dues, and deep cleaning costs.",
    legalBasis:
      "Security deposits are statutorily intended as a collateral guarantee against property damage and unpaid utility charges upon handover, not as an advance substitute for monthly rent unless expressly permitted in writing by the lease agreement. Unilateral withholding constitutes a breach of contract under Section 73 of the Indian Contract Act, 1872, entitling the landlord to terminate the lease immediately and claim interest on delayed payments.",
    steps: [
      {
        step: "Issue Immediate Objection & Default Warning",
        description:
          "Send an immediate written reply rejecting the unilateral adjustment, referencing the lease clause that mandates independent monthly rent payment on or before the agreed due date.",
      },
      {
        step: "Compute Outstanding Utility, Maintenance & Potential Damage Liability",
        description:
          "Obtain society maintenance ledger balances, electricity meter bills, and inspection photographs to prove that the security deposit is insufficient to cover all liabilities.",
      },
      {
        step: "Serve Advocate Demand Notice for Arrears + Immediate Eviction",
        description:
          "Dispatch a statutory notice treating the unpaid rent as a non-curable breach, demanding clearance of arrears within 15 days failing which eviction and recovery suits will be initiated.",
      },
    ],
    statutoryRule: "Section 73 Indian Contract Act 1872 & Clause 11 Model Tenancy Act",
  },
];

export default function TenantEvictionProblemTabs() {
  const [activeTab, setActiveTab] = useState<string>(PROBLEMS[0].id);
  const currentProblem = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 md:p-8 w-full">
      {/* Tab Navigation Pill Bar */}
      <div className="flex flex-wrap gap-2 pb-4 border-b border-slate-200">
        {PROBLEMS.map((problem) => (
          <button
            key={problem.id}
            type="button"
            onClick={() => setActiveTab(problem.id)}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === problem.id
                ? "bg-slate-900 text-white shadow-sm"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {problem.tabLabel}
          </button>
        ))}
      </div>

      {/* Active Tab Content */}
      <div className="pt-6 space-y-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
            <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-red-600">
              {currentProblem.statutoryRule}
            </span>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight">
            {currentProblem.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-red-50/70 border border-red-200/70">
            <h4 className="text-xs font-black uppercase tracking-wider text-red-800 mb-1.5">
              The Problem &amp; Core Challenge
            </h4>
            <p className="text-xs sm:text-sm text-red-950 leading-relaxed font-medium">
              {currentProblem.cause}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-700 mb-1.5">
              Statutory Position &amp; Supreme Court Precedent
            </h4>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
              {currentProblem.legalBasis}
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-900 mb-3">
            Recommended Action Steps for the Landlord:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {currentProblem.steps.map((s, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 font-black text-xs flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-xs font-bold text-slate-900 leading-snug">
                    {s.step}
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed pl-7">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
          <span className="text-xs sm:text-sm text-slate-700 font-medium">
            Facing this exact issue with your tenant? Take immediate legal action before arrears pile up.
          </span>
          <Link
            href="/send-legal-notice-online-india"
            className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold transition-colors shrink-0 text-center"
          >
            Draft Eviction Notice Online
          </Link>
        </div>
      </div>
    </div>
  );
}
