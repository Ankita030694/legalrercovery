"use client";

import React, { useState } from "react";

interface ScenarioItem {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  clientExcuse: string;
  statutoryCounter: string;
  evidenceRequired: string[];
  actionStep: string;
  timeline: string;
}

const SCENARIOS: ScenarioItem[] = [
  {
    id: "min-hours",
    tabLabel: "Min 200 Hrs vs Standby",
    badge: "Billing & Logbook Dispute",
    title: "Lessee Claims Grid Cuts Were Low & Refuses Fixed Monthly Minimum Hire",
    clientExcuse:
      "\"Your 1010 kVA DG set or temporary chiller ran only 64 hours this month, so we will pay pro-rata hourly charges instead of the agreed 200-hour minimum monthly rental.\"",
    statutoryCounter:
      "Under Section 37 and Section 73 of the Indian Contract Act, 1872, a fixed minimum monthly hire (standby readiness consideration) compensates the lessor for dedicated capital lock-up, CPCB IV+ compliance depreciation, and site deployment—not mere fuel burn. Once the Purchase Order (PO) or Hire Agreement fixes a minimum monthly commitment, actual lower utilization is irrelevant. Counter-signed Daily Operator Logbooks plus AMF/telematics hour-meter logs create contractual estoppel under Section 121 of the Bharatiya Sakshya Adhiniyam (BSA), 2023.",
    evidenceRequired: [
      "Executed Rental Agreement / PO specifying fixed monthly minimum (e.g., 200 hrs/month or 24-hr standby)",
      "Daily Operator Logbooks counter-signed by the client's site engineer or facility manager",
      "Telematics / AMF panel digital hour-meter exports certified under BSA 2023 Section 63",
      "GST tax invoices and e-Way bills proving uninterrupted site deployment during the billing cycle",
    ],
    actionStep:
      "Serve a Fact-Verified Demand Notice invoking Contract Act s.73 + MSMED Act s.15 (if Udyam-registered) demanding full minimum hire plus 3x RBI compound interest, precluding belated hourly re-pricing.",
    timeline: "15-Day Cure Notice -> Order 37 Summary Suit / MSEFC Reference",
  },
  {
    id: "fuel-damage",
    tabLabel: "Adulterated Diesel Damage",
    badge: "Bailment s.151–152 Claim",
    title: "Client-Supplied Contaminated Fuel Seizes Engine & Lessee Blames Your Machine",
    clientExcuse:
      "\"Your generator/compressor broke down mid-shift due to poor maintenance; we are deducting downtime penalties and refusing to pay the ₹15L engine overhaul bill.\"",
    statutoryCounter:
      "Under Sections 151 and 152 of the Indian Contract Act, 1872 (Bailment Duty of Reasonable Care), a hirer/bailee who supplies diesel, coolant, or load-bank power must exercise ordinary prudence. Feeding water-contaminated, high-sulphur, or adulterated diesel into a CPCB IV+ common-rail or SCR exhaust system breaches s.151 and makes the lessee strictly liable for the full OEM overhaul, injector/turbocharger replacement, and loss of hire during repairs under s.73.",
    evidenceRequired: [
      "Joint Fuel Sample Panchnama / Site Inspection Report drawn at breakdown with time-stamped photos",
      "NABL-accredited lab fuel-testing report (water content, sulphur, density) & OEM service failure analysis",
      "Pre-dispatch Commissioning & Load-Test Checklist proving healthy oil pressure & alternator insulation at handover",
      "Client's diesel purchase/issue slip or logbook entry confirming 'Fuel in Client Scope'",
    ],
    actionStep:
      "Issue a dual-head Legal Notice separating (a) undisputed monthly hire arrears and (b) quantified OEM overhaul damages under Contract Act ss.151–152, rejecting any unilateral downtime set-off.",
    timeline: "Immediate Joint Inspection -> 15-Day Damage & Hire Demand",
  },
  {
    id: "gate-pass",
    tabLabel: "Blocked Demobilization",
    badge: "BNS s.316 & Running Meter",
    title: "Site Security Blocks Gate Pass to Coerce Haircuts on Unpaid Hire Bills",
    clientExcuse:
      "\"Our finance team is reconciling your old bills—until you sign a full-and-final 40% discount settlement, our gate security will not release your DG set, chiller, or load bank.\"",
    statutoryCounter:
      "A lessee has zero statutory lien over rented plant and machinery after contract termination or payment default. Retaining a ₹25L–₹80L DG set or chiller at site after formal Termination & Demobilization Notice constitutes dishonest misappropriation and Criminal Breach of Trust under Section 316 of the Bharatiya Nyaya Sanhita (BNS), 2023. Simultaneously, the running daily hire meter continues to accrue as mesne/detention damages until physical gate-out.",
    evidenceRequired: [
      "Written Termination & Demobilization Notice fixing a specific crane/trailer pickup date and time",
      "Gate-entry rejection proof: WhatsApp/email refusal from site admin, security register entry, or video timestamp",
      "Tax invoice, chassis/engine serial number plate photos, and e-Way bill proving lessor ownership",
      "GPS / Telematics location ping confirming asset immobilization inside the lessee's premises",
    ],
    actionStep:
      "Dispatch a Fact-Verified Notice via Email, WhatsApp & Speed Post RPAD with Police Station Email CC citing BNS s.316 and continuing per-day detention hire, plus Section 9 Arbitration interim receiver application if arbitrable.",
    timeline: "48-Hour Gate-Pass Ultimatum -> BNS s.316 Complaint / Sec. 9 Receiver",
  },
  {
    id: "site-shift",
    tabLabel: "Unauthorized Site Shift",
    badge: "BNS s.316/318 & GRAP Risk",
    title: "Lessee Shifts DG Set Without NOC or Violates CPCB IV+ / GRAP Norms",
    clientExcuse:
      "\"We moved your 250 kVA DG set to our sister contractor's project 60 km away to finish urgent work; we will return it once that site wraps up.\"",
    statutoryCounter:
      "Shifting hypothecated or bailed machinery outside the permitted geofence without written lessor NOC violates bailment terms (Contract Act s.153–154) and triggers immediate termination plus BNS s.316/318 criminal liability if concealed or sub-leased. Additionally, in Delhi-NCR under CAQM/GRAP restrictions, unauthorized operation of non-compliant sets exposes the registered owner to environmental sealing—making immediate injunctive repossession critical.",
    evidenceRequired: [
      "Hire Agreement Geofence & Non-Assignment Clause prohibiting site transfer or third-party sub-hire",
      "GPS / Telematics geofence breach alert showing movement coordinates outside the contracted project pin",
      "E-Way bill and original site handover challan pinning delivery to the authorized project address",
      "CPCB IV+ / CAQM compliance undertaking signed by the lessee at mobilization",
    ],
    actionStep:
      "Serve an immediate Termination of Bailment & Asset Recall Notice under Contract Act s.153 + BNS s.316, attaching GPS coordinates and alerting the jurisdictional SHO and principal employer.",
    timeline: "24-Hour Recall Notice -> Police Intimation & Injunctive Recovery",
  },
];

export default function DgRentalScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div
        className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 mb-6"
        role="tablist"
        aria-label="DG set and chiller rental failure scenarios"
      >
        {SCENARIOS.map((item) => {
          const isActive = item.id === activeTab;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(item.id)}
              className={`px-3.5 py-3 rounded-xl text-left transition-all cursor-pointer border ${
                isActive
                  ? "bg-slate-900 text-white border-slate-900 shadow-md"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300"
              }`}
            >
              <span
                className={`block text-[10px] font-bold uppercase tracking-wider mb-0.5 ${
                  isActive ? "text-red-400" : "text-slate-400"
                }`}
              >
                {item.badge}
              </span>
              <span className="block text-xs sm:text-sm font-bold leading-snug">
                {item.tabLabel}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Scenario Panel */}
      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 md:p-7 space-y-5"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-200">
          <div>
            <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200 mb-2">
              {current.badge}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">{current.title}</h3>
          </div>
          <span className="text-[11px] font-mono font-semibold px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700">
            {current.timeline}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-amber-800 mb-1.5">
              Common Lessee Pretext
            </p>
            <p className="text-xs sm:text-sm text-amber-950 leading-relaxed italic">
              {current.clientExcuse}
            </p>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-1.5">
              Creditor Statutory Counter-Move
            </p>
            <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
              {current.statutoryCounter}
            </p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
            Mandatory Proof Packet to Attach With Notice
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {current.evidenceRequired.map((ev, i) => (
              <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span>{ev}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-slate-900 text-white rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-wider text-red-400 mb-0.5">
              Immediate Execution Step
            </span>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">{current.actionStep}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
