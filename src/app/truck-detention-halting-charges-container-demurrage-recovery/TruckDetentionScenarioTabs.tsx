"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  bottleneck: string;
  statutoryBasis: string;
  legalStrategy: string;
  expectedRecovery: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "unstamped-pod",
    badge: "Scenario 1: Gate Evasion",
    title: "Storekeeper Refuses to Stamp POD Reporting Timestamp",
    subtitle: "Consignee factory gates stall truck unloading for 6–10 days and storekeepers withhold date stamps to help corporate finance deny halting claims.",
    bottleneck: "Lorry driver handed physical Bilty / Consignment Note at security gate, but security and storekeeper deliberately withhold 'In-Time' and 'Reporting' stamps, writing only 'Unloaded' 8 days later so billing accounts reject detention charges.",
    statutoryBasis: "Section 63, Bharatiya Sakshya Adhiniyam, 2023 (electronic evidence of telematics) read with Indian Contract Act, 1872 Section 73 (compensation for loss or damage caused by breach of contract).",
    legalStrategy: "Produce AIS-140 certified GPS telematics geofence entry logs, nearest NHAI FASTag toll plaza plaza entry timestamps, and WhatsApp driver-gate dispatch photos. Corroborate with transporter's formal Notice of Arrival emailed to consignee logistics head at Hour 0 to establish reporting without relying on a physical gatekeeper stamp.",
    expectedRecovery: "100% of contractually agreed per-diem halting charges (typically ₹2,500 to ₹6,000/day per multi-axle vehicle) plus commercial interest at 18% p.a.",
  },
  {
    id: "container-demurrage",
    badge: "Scenario 2: Maritime ISO Containers",
    title: "Shipping Line Container Detention Billed While Transporter Waits",
    subtitle: "Consignee factory holds loaded 20ft/40ft shipping line containers past free detention days, triggering massive carrier demurrage debited to the transporter.",
    bottleneck: "Transporter picked up export/import container from Port/ICD under 5–7 free days. Consignee factory fails to de-stuff cargo for 18 days due to warehouse congestion or customs clearance issues. Shipping line bills container detention of $50–$150/day directly to transport contractor.",
    statutoryBasis: "Indian Contract Act, 1872 Section 70 (obligation of person enjoying benefit of non-gratuitous act), Section 73, and Major Port Authorities Act, 2021 principles on bailment and demurrage passing.",
    legalStrategy: "Issue urgent 48-hour formal Demurrage Notice to consignee and freight forwarder passing through shipping line detention invoices with container interchange receipts (EIR). Establish contract indemnification making cargo owner directly responsible for ICD/port holding charges and container hire defaults.",
    expectedRecovery: "Full pass-through reimbursement of shipping line container detention penalties plus trailer chassis detention fee (₹3,500–₹5,000/day) for immobilized tractor units.",
  },
  {
    id: "weighbridge-queue",
    badge: "Scenario 3: Industrial Bulk & Tankers",
    title: "Weighbridge Queue Slump & Tanker Contamination Deadlocks",
    subtitle: "Chemical tankers, steel flatbeds, or bulk cement trailers held in 4-kilometer highway queues outside manufacturing plants without halting acknowledgement.",
    bottleneck: "Plant security instructs 40-tonne trailers to queue on the highway outside the factory perimeter, arguing the vehicle has not 'entered plant premises' and therefore halting hours cannot commence.",
    statutoryBasis: "Carriage by Road Act, 2007 Section 10 & 11 (common carrier duties) and Section 73 of Indian Contract Act. Supreme Court precedent on constructive delivery and unreasonable detention of commercial chattels.",
    legalStrategy: "Establish 'constructive arrival' by logging GPS perimeter coordinates within 2 km radius, electronic weighbridge queuing token slips, and time-stamped geo-tagged driver video reporting at main inbound gate. Serve immediate email notifying plant operations of halting commencement under contractual 24-hour free time clause.",
    expectedRecovery: "Full per-diem detention rates for specialized bulk carriers (₹5,000–₹12,000/day for specialized stainless steel ISO tanks or 4923 prime movers).",
  },
  {
    id: "eway-bill-expiry",
    badge: "Scenario 4: E-Way Bill Stoppage",
    title: "E-Way Bill Expires During Detention Leading to GST Penalties",
    subtitle: "Consignee detains truck beyond GST E-Way Bill validity; state GST authorities threaten Section 129 seizure while consignee shifts liability to transporter.",
    bottleneck: "Factory holds vehicle for 5 days. E-Way Bill reaches its distance-based expiry date. Consignee asks transporter to park outside municipal limits or refuses to update Part-B validity extension, creating massive tax seizure risk.",
    statutoryBasis: "CGST Rules 2017 Rule 138(10) (E-Way Bill validity extension within 8 hours of expiry) read with Section 63 BSA 2023. Consignee breach of duty to inspect and offload under Sale of Goods Act, 1930 Section 41.",
    legalStrategy: "Transporter logs official E-Way Bill portal extension under reason code 'Transshipment / Detention by Consignee'. This official GST portal timestamp creates an irrevocable statutory record of consignee detention that completely destroys the corporate debtor's defense in court.",
    expectedRecovery: "Recovery of all accumulated truck halting charges, portal extension administrative costs, and complete legal indemnity against any GST s.129/130 tax penalty notices.",
  },
];

export default function TruckDetentionScenarioTabs() {
  const [activeTab, setActiveTab] = useState(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-7 md:p-8 text-white shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-6 border-b border-slate-800">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-red-400 bg-red-950/60 px-2.5 py-1 rounded border border-red-800/60 inline-block mb-1.5">
            Operational Breakdown
          </span>
          <p className="text-lg sm:text-xl font-black text-white">
            Common Factory &amp; Port Detention Failure Modes
          </p>
        </div>
        <p className="text-xs text-slate-400">
          Select a commercial dispute scenario to view legal action
        </p>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
        {SCENARIOS.map((sc) => {
          const isActive = sc.id === activeTab;
          return (
            <button
              key={sc.id}
              type="button"
              onClick={() => setActiveTab(sc.id)}
              className={`text-left p-3 rounded-xl border text-xs font-semibold transition-all ${
                isActive
                  ? "bg-[#DC2626] border-[#DC2626] text-white shadow-md shadow-red-900/30"
                  : "bg-slate-800/70 border-slate-700/70 text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <span className="block text-[10px] uppercase tracking-wider opacity-75 mb-0.5">
                {sc.badge.split(":")[0]}
              </span>
              <span className="line-clamp-2">{sc.title}</span>
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <div className="bg-slate-800/60 border border-slate-700/70 rounded-xl p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
            {current.badge}
          </span>
          <span className="text-xs px-2.5 py-1 rounded bg-slate-700/80 text-emerald-400 font-semibold border border-slate-600">
            {current.expectedRecovery}
          </span>
        </div>

        <div>
          <p className="text-base sm:text-lg font-bold text-white mb-1">
            {current.title}
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {current.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3 border-t border-slate-700/60">
          <div className="space-y-1.5">
            <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">
              Consignee Bottleneck / Defense
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">
              {current.bottleneck}
            </p>
          </div>

          <div className="space-y-1.5">
            <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wider block">
              Statutory Hook &amp; Evidence
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">
              {current.statutoryBasis}
            </p>
          </div>

          <div className="space-y-1.5">
            <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block">
              Advocate Recovery Action
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">
              {current.legalStrategy}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
