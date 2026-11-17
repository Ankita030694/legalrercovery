"use client";

import { useState } from "react";

interface Scenario {
  id: string;
  tabLabel: string;
  badge: string;
  badgeColor: string;
  heading: string;
  summary: string;
  statutoryBasis: string;
  immediateAction: string;
  evidenceRequired: string[];
  remedyRoute: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "watermark-airing",
    tabLabel: "Aired Without Final 20-25%",
    badge: "Copyright Infringement",
    badgeColor: "bg-red-50 text-[#DC2626] border-red-200",
    heading: "Agency/Brand Aired Low-Res Watermark Cut or Ripped Master Without Clearance",
    summary:
      "The agency or brand downloaded an offline review cut (or captured a preview link) and pushed it live on Star Sports, YouTube Ads, or Meta without paying the final 20% milestone and post-production balance.",
    statutoryBasis:
      "Sections 14(d), 17, and 51 of the Copyright Act, 1957. In the absence of full consideration, the copyright in the cinematograph film remains solely with the Producer. Public communication without assignment constitutes criminal and civil infringement.",
    immediateAction:
      "Dispatch urgent Cease-and-Desist Notice under Section 51 with an immediate 24-hour cure window. Simultaneously serve Broadcaster / Meta / Google ad-takedown notices citing proprietary ownership under Section 2(uu).",
    evidenceRequired: [
      "Original production contract specifying milestone-linked copyright assignment",
      "Preview distribution logs (Frame.io, Vimeo review timestamp & watermark record)",
      "Screen capture & broadcast log proofs of live ad on TV/OTT/digital handles",
      "Unpaid final tax invoice and bank payment gateway log showing shortfall",
    ],
    remedyRoute:
      "Commercial Division Injunction (Order 39 Rules 1 & 2 CPC) + Commercial Suit with damages for unauthorized commercial exploitation.",
  },
  {
    id: "packup-overruns",
    tabLabel: "Pack-Up & Weather Overruns",
    badge: "Contractual Cost-Plus Breach",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    heading: "Shoot Extended into Extra Shifts, Weather Stoppage, or Celebrity Delays",
    summary:
      "The brand demands 14-hour extended shifts, extra camera rigs, or weather rain-check shoots. Later, brand and agency pass the buck, claiming the shoot was capped on a fixed-bid budget despite real-time call sheets signed by agency EP.",
    statutoryBasis:
      "Section 70 of the Indian Contract Act, 1872 (obligation of person enjoying benefit of non-gratuitous act) read with approved Call Sheets, Variation Orders, and WhatsApp / Email approvals from the Agency Producer.",
    immediateAction:
      "Collate signed call sheets, union overtime slips (FWICE / Guild cards), studio generator logs, and equipment rental extensions. Serve a consolidated Non-Gratuitous Cost Demand under Section 70.",
    evidenceRequired: [
      "Signed daily call sheets and wrap reports showing wrap time exceeding 12 hours",
      "Rental house invoices (Arri Alexa, Master Grips, vanity vans, vanity generator)",
      "WhatsApp/Email chat strings with Agency Producer approving the overtime shift",
      "FWICE / Cine Artists crew shift overtime debit vouchers and bank transfer UTRs",
    ],
    remedyRoute:
      "MSEFC Samadhaan filing (under MSMED Act Section 18) for 3x compound bank rate interest, or Commercial Summary Suit under Order 37 CPC.",
  },
  {
    id: "raw-footage-hostage",
    tabLabel: "Holding Clean ProRes / Raw Files",
    badge: "Possessory Lien",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    heading: "Agency Demands High-Bitrate Apple ProRes Master & RAW Rushes Before Release",
    summary:
      "Brand demands immediate surrender of camera RAW files, grading LUTs, and uncompressed ProRes 4444 master files for regional language adaptations, while stalling payment of the post-production and edit milestones.",
    statutoryBasis:
      "Section 170 of the Indian Contract Act, 1872 (Bailee's Particular Lien) and Section 19 of the Copyright Act. A bailee / artisan who has rendered skill and labor has the statutory right to retain goods until remuneration is cleared.",
    immediateAction:
      "Formally assert Bailee's Particular Lien over all physical media, drives, RAW sensor files, and unrendered project files. Explicitly inform client that release occurs only upon clearing ledger balances via Escrow/RTGS.",
    evidenceRequired: [
      "Master service contract defining delivery package as final stereo master only",
      "Physical storage receipt of hard drives at editing suite / VFX lab",
      "Email trail refusing payment while demanding Raw RED/Arri footage transfers",
      "Detailed statement of accounts showing pending milestone balances",
    ],
    remedyRoute:
      "Legal response asserting Section 170 lien + Section 8 IBC Demand Notice (if corporate debtor agency owes > ₹1 Crore) or MSME Samadhaan petition.",
  },
  {
    id: "vfx-color-grading-studio",
    tabLabel: "VFX & DI Color Suite Defaults",
    badge: "Subcontractor Recovery",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    heading: "VFX, CGI, and Color Grading Suite Left Unpaid by Lead Producer or Agency",
    summary:
      "Boutique CGI, animation, and DaVinci Resolve color grading facilities deliver final passes under extreme broadcast deadlines, only to have the agency cut communication once delivery passes telecast QC.",
    statutoryBasis:
      "Sections 15 and 16 of the MSMED Act, 2006 (mandatory 45-day statutory payment window for micro/small enterprises) along with Indian Copyright Act moral rights under Section 57.",
    immediateAction:
      "Issue 15-day statutory demand under Section 15 of MSMED Act. Flag that metadata in QuickTime headers and color grading project files retains intellectual provenance and license is conditional on cleared consideration.",
    evidenceRequired: [
      "Work Order / Email PO detailing shot counts, VFX cleanups, and DI passes",
      "Time-stamped delivery notes sent to broadcast agency / QC department",
      "MSME Udyam Registration Certificate active prior to date of execution",
      "Communication of final QC approval from client agency / channel technical team",
    ],
    remedyRoute:
      "Statutory MSME Samadhaan claim with compounding monthly interest at 3x RBI Bank Rate + listing agency on Credit Bureau watchlists.",
  },
];

export default function FilmProducerScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>("watermark-airing");
  const activeScenario =
    SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 md:p-8">
      {/* Tab Pills */}
      <div className="flex flex-wrap gap-2 pb-4 border-b border-slate-200 mb-6">
        {SCENARIOS.map((scenario) => {
          const isSelected = activeTab === scenario.id;
          return (
            <button
              key={scenario.id}
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all text-left ${
                isSelected
                  ? "bg-slate-900 text-white shadow-md"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Scenario Detail Card */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span
            className={`text-[11px] font-extrabold px-3 py-1 rounded-full border ${activeScenario.badgeColor}`}
          >
            {activeScenario.badge}
          </span>
          <span className="text-[11px] font-semibold text-slate-500">
            Enforcement Track: Commercial & Copyright
          </span>
        </div>

        <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
          {activeScenario.heading}
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          {activeScenario.summary}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-slate-100">
          <div className="space-y-2 bg-slate-50 p-3.5 rounded-lg border border-slate-200/70">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
              Statutory Leverage
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              {activeScenario.statutoryBasis}
            </p>
          </div>

          <div className="space-y-2 bg-red-50/60 p-3.5 rounded-lg border border-red-200/70">
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626]">
              Immediate Escalation SOP
            </p>
            <p className="text-xs text-slate-700 leading-relaxed">
              {activeScenario.immediateAction}
            </p>
          </div>
        </div>

        <div className="pt-2">
          <p className="text-xs font-bold text-slate-900 mb-2">
            Mandatory Evidentiary Artifacts (BSA 2023 Compliant):
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
            {activeScenario.evidenceRequired.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#DC2626] font-bold">&#x2713;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 bg-slate-900 text-white p-3.5 rounded-xl">
          <div>
            <p className="text-[10px] uppercase font-bold tracking-widest text-red-400">
              Optimal Recovery Forum
            </p>
            <p className="text-xs font-semibold text-slate-200">
              {activeScenario.remedyRoute}
            </p>
          </div>
          <a
            href="/send-a-legal-notice/for-business-to-recover-their-unpaid-dues"
            className="px-3.5 py-1.5 rounded-lg bg-[#DC2626] text-white font-bold text-xs hover:bg-[#B91C1C] transition-colors"
          >
            Draft Statutory Notice &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
