"use client";

import React, { useState } from "react";

interface AgriScenarioItem {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  ticketBand: string;
  failureMode: string;
  statutoryPosition: string;
  actionSteps: {
    step: string;
    detail: string;
  }[];
  complianceImpact: string;
  recommendedTrack: string;
}

const AGRI_KCC_SCENARIOS: AgriScenarioItem[] = [
  {
    id: "commercial-farmhouse-poultry",
    tabLabel: "Commercial Poultry / Cold Storage",
    badge: "Blue Coast SARFAESI Track",
    title:
      "Commercial Poultry Farm, Cold Storage, or Agro-Processing Plot Claiming Section 31(i) Immunity",
    ticketBand:
      "₹25 Lakh – ₹15 Cr (Allied Agri Term Loan / Agro-Infrastructure Facility)",
    failureMode:
      "A wealthy borrower mortgages a 4-acre plot housing an automated poultry shed, cold-storage chamber, rice mill, or weekend commercial farmhouse. When the bank issues a SARFAESI Section 13(2) demand notice, the borrower files a Section 17 Securitisation Application before DRT producing a 7/12 extract or Khasra entry labelled 'Krishi Bhumi' (agricultural land) to stall possession indefinitely.",
    statutoryPosition:
      "Under ITC Ltd. v. Blue Coast Hotels Ltd. (2018) 15 SCC 99, Indian Bank v. K. Pappireddiyar (2018) 18 SCC 252, and K. Sreedhar v. Raus Constructions Pvt. Ltd. (2023) 11 SCC 169, revenue record classification is NOT decisive. The Supreme Court mandates an 'actual use and intention' test: where the land was mortgaged for a commercial allied-agri enterprise, had non-agricultural structures, commercial power tariffs, or zero actual crop cultivation at mortgage creation, Section 31(i) immunity does not apply—and the burden of proving agricultural use rests strictly on the borrower.",
    actionSteps: [
      {
        step: "Pre-13(2) Geo-Tagged Commercial-Use Audit Dossier",
        detail:
          "Compile geo-tagged photographs of concrete poultry sheds/cold rooms, commercial electricity bills, FSSAI/GST/Factory registrations, CERSAI filings, and the original loan appraisal memo showing non-crop commercial purpose.",
      },
      {
        step: "Blue-Coast Fortified Section 13(2) & Reasoned 13(3A) Reply",
        detail:
          "Explicitly record the commercial land-use facts inside the Section 13(2) notice. If the borrower raises a Section 31(i) objection under Section 13(3A), reject it within 15 days citing K. Sreedhar and enclosing appraisal evidence.",
      },
      {
        step: "Parallel e-DRT Section 19 OA + Section 14 DM/CMM Possession",
        detail:
          "For exposures ≥ ₹20 Lakh, file an e-DRT Original Application alongside SARFAESI Section 14 physical possession so even a temporary DRT stay on one security parcel cannot freeze recovery against unmortgaged urban assets or guarantors.",
      },
    ],
    complianceImpact:
      "Neutralizes frivolous DRT Section 17 injunctions at the threshold and prevents 18–36 month litigation paralysis on high-value allied-agri NPAs.",
    recommendedTrack:
      "Blue Coast Evidence Audit -> SARFAESI s.13(2)/13(3A)/14 + Parallel e-DRT OA (≥ ₹20L)",
  },
  {
    id: "genuine-kcc-waiver-rumour",
    tabLabel: "KCC Crop Loan (Waiver Rumours)",
    badge: "State RRC + Lok Adalat",
    title:
      "Genuine Kisan Credit Card (KCC) Crop Loan NPA Stalled by Pre-Election Waiver Rumours",
    ticketBand:
      "₹1.60 Lakh – ₹15 Lakh (Collateral-Free & Land-Mortgaged KCC Working Capital)",
    failureMode:
      "Hundreds of solvent cultivators across an RRB or commercial bank rural cluster stop renewing KCC limits after two consecutive Kharif/Rabi seasons because local rumour networks promise an upcoming state farm-loan waiver. Because the underlying mortgaged land is genuinely cultivated farmland, SARFAESI Section 31(i) bars bank-led possession, while civil recovery suits consume years and destroy branch unit economics.",
    statutoryPosition:
      "Once a short-duration crop KCC remains overdue beyond 2 crop seasons (or 1 crop season for long-duration crops) under RBI IRACP norms, the borrower loses Interest Subvention and Prompt Repayment Incentive (PRI), causing effective interest to jump to full contractual rates. Where farmland is genuinely exempt under SARFAESI s.31(i), banks hold two high-velocity statutory tracks: (1) District Collector Revenue Recovery Certificate (RRC) under State Agricultural Credit Operations / Public Moneys Recovery Acts, and (2) 0%-court-fee Pre-Litigation National & Taluka Lok Adalats under Section 20 of the Legal Services Authorities Act, 1987.",
    actionSteps: [
      {
        step: "Bilingual Advocate Pre-Litigation Recall & Subvention-Loss Notice",
        detail:
          "Serve a fact-verified Hindi/regional + English notice via Speed Post RPAD and WhatsApp explaining withdrawal of 3% Prompt Repayment Incentive, CIC/CIBIL freeze on future agricultural credit, and absence of any notified statutory waiver.",
      },
      {
        step: "Harvest-Aligned Taluka / National Lok Adalat Bulk Docket",
        detail:
          "Batch 200–2,000 district KCC accounts into a Pre-Litigation Lok Adalat schedule timed immediately after Kharif/Rabi mandi realizations, offering structured RBI-compliant OTS waivers of penal charges to obtain binding Section 21 consent decrees.",
      },
      {
        step: "Escalation of Wilful Non-Attendees to State RRC Authority",
        detail:
          "For solvent high-acreage KCC defaulters (> ₹3 Lakh) who ignore Lok Adalat summons, transmit certified NPA ledgers and RPAD delivery proofs to the SDO / Prescribed Authority for RRC attachment of land revenue arrears.",
      },
    ],
    complianceImpact:
      "Prevents political backlash by prioritizing humane Lok Adalat settlement for genuine non-wilful farmers while isolating affluent strategic defaulters for RRC execution.",
    recommendedTrack:
      "Bilingual Advocate Recall -> Harvest Lok Adalat Batching (0% Fee) -> State RRC for Holdouts",
  },
  {
    id: "tractor-farm-machinery-npa",
    tabLabel: "Tractor & Equipment Hypothecation",
    badge: "Movable Security Track",
    title:
      "Tractor, Combine Harvester & Farm Equipment NPA Where Borrower Hides Vehicle in Village",
    ticketBand:
      "₹4 Lakh – ₹28 Lakh (Hypothecated Agricultural Machinery + Collateral Guarantee)",
    failureMode:
      "A borrower finances a ₹9.5 Lakh tractor or ₹22 Lakh combine harvester under an agricultural term loan, defaults after 4 quarterly installments, and rents the machinery commercially across neighbouring tehsils while claiming 'agricultural immunity'. Unregulated local seizure triggers police FIRs for trespass or theft against bank recovery staff.",
    statutoryPosition:
      "SARFAESI Section 31(i) shields only agricultural LAND—never movable hypothecated vehicles or farm machinery. Under the Deed of Hypothecation, Indian Contract Act, 1872, and Motor Vehicles Act Form 34 hypothecation endorsement, the lender holds a contractual and statutory right to recall the facility, repossess the hypothecated machinery lawfully in compliance with RBI Fair Practices guidelines, and claim any post-auction shortfall from the borrower and guarantors (or invoke Section 25 PSS Act / Section 138 NI Act on bounced post-dated cheques/e-NACH mandates).",
    actionSteps: [
      {
        step: "Strict 15-Day Advocate Loan Recall & Surrender Notice",
        detail:
          "Dispatch a fact-verified recall notice demanding overdue installments or voluntary surrender of the hypothecated tractor/harvester, embedding a Section 25 PSS Act or Section 138 NI Act statutory notice if mandates/cheques dishonoured within 30 days.",
      },
      {
        step: "RBI-Compliant Repossession, Police Intimation & Panchnama",
        detail:
          "Before taking possession through empanelled agents, file written pre-intimation at the local police station, prepare a signed asset inventory panchnama with photographs, and file post-possession intimation to eliminate false criminal counter-cases.",
      },
      {
        step: "Pre-Sale Notice, Fair Valuation & Shortfall Recovery",
        detail:
          "Issue a 7–15 day pre-sale notice with independent valuation allowing the borrower a last redemption window; upon auction, pursue any residual deficit via Lok Adalat, Section 29B Institutional Arbitration, or State RRC.",
      },
    ],
    complianceImpact:
      "Insulates branch managers and RRBs from RBI Ombudsman penalties and criminal complaints while converting depreciating machinery into rapid cash recovery.",
    recommendedTrack:
      "Advocate Recall + PSS s.25/NI s.138 Notice -> RBI-Compliant Repossession -> Shortfall Lok Adalat/RRC",
  },
  {
    id: "high-value-wilful-agri-diversion",
    tabLabel: "High-Value Diversions (> ₹20L)",
    badge: "e-DRT + Parallel Guarantor",
    title:
      "Multi-Facility High-Value Agri-Enterprise (> ₹20L) With Mixed Farmland & Urban Collateral",
    ticketBand:
      "₹20 Lakh – ₹5 Cr+ (Composite KCC + Warehouse / Dairy / Drip-Irrigation Term Loans)",
    failureMode:
      "An affluent agri-promoter avails a ₹35 Lakh composite credit package secured by 6 acres of actual farmland (exempt under s.31(i)) plus a residential town house or commercial godown, backed by personal guarantees of family members with salaried/urban income. Branch staff wrongly freeze the entire account assuming Section 31(i) bars all recovery.",
    statutoryPosition:
      "Section 31(i) bars ONLY SARFAESI enforcement against the specific parcel of genuine agricultural land—it does NOT bar (a) SARFAESI enforcement against separate non-agricultural/urban residential or commercial collateral in the same loan account, (b) filing a Section 19 Original Application before DRT under the RDB Act, 1993 (since RDB Act contains NO agricultural land exemption comparable to SARFAESI s.31(i)), or (c) enforcing personal guarantees under Section 128 of the Indian Contract Act.",
    actionSteps: [
      {
        step: "Collateral Ring-Fencing & Composite Loan Recall Notice",
        detail:
          "Segregate security parcels cleanly: mark urban/commercial plots for SARFAESI s.13(2) enforcement and issue an explicit Loan Recall cum Personal Guarantee Invocation Notice (RBI Penal-Charge compliant) to all borrowers and guarantors.",
      },
      {
        step: "e-DRT Section 19 OA Covering Full Composite Exposure",
        detail:
          "File an Original Application before DRT for the entire ₹20L+ claim, seeking Section 19(12)–(15) interim attachment of unmortgaged urban properties, bank accounts, and third-party receivables.",
      },
      {
        step: "Concurrent SARFAESI on Non-Agri Security & RO Attachment",
        detail:
          "Proceed with SARFAESI Section 13(4)/14 against the non-agricultural godown or urban house while executing the DRT Recovery Certificate through the Recovery Officer (subject to local state tenancy/transfer restrictions on farmland).",
      },
    ],
    complianceImpact:
      "Breaks the 's.31(i) blanket shield' illusion and unlocks full DRT + SARFAESI leverage across composite agricultural portfolios.",
    recommendedTrack:
      "Collateral Split -> SARFAESI on Urban Parcel + e-DRT Section 19 OA + Guarantor Invocation",
  },
];

export default function AgriKccScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(AGRI_KCC_SCENARIOS[0].id);

  const current =
    AGRI_KCC_SCENARIOS.find((s) => s.id === activeTab) || AGRI_KCC_SCENARIOS[0];

  return (
    <div className="space-y-5">
      {/* Tab Selector Pills */}
      <div
        role="tablist"
        aria-label="Agriculture and KCC NPA recovery scenarios"
        className="flex flex-wrap gap-2"
      >
        {AGRI_KCC_SCENARIOS.map((item) => {
          const isSelected = item.id === activeTab;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActiveTab(item.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                isSelected
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md shadow-red-900/20"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {item.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Card */}
      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-4">
          <div className="space-y-1">
            <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200">
              {current.badge}
            </span>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
              {current.title}
            </h3>
          </div>
          <span className="text-xs font-semibold text-slate-600 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
            {current.ticketBand}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-amber-800 mb-1.5">
              Institutional Bottleneck / Failure Mode
            </p>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {current.failureMode}
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
              Creditor-Side Statutory Position
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.statutoryPosition}
            </p>
          </div>
        </div>

        <div className="space-y-2.5">
          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
            Recommended 3-Step Recovery SOP
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {current.actionSteps.map((stepObj, i) => (
              <div
                key={stepObj.step}
                className="bg-white border border-slate-200 rounded-xl p-4 space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                    {stepObj.step}
                  </p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {stepObj.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 border-t border-slate-200">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3.5">
            <p className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 mb-1">
              Audit &amp; Recovery Yield Impact
            </p>
            <p className="text-xs text-emerald-950 font-medium leading-relaxed">
              {current.complianceImpact}
            </p>
          </div>
          <div className="bg-slate-900 text-white rounded-xl p-3.5">
            <p className="text-[10px] font-extrabold uppercase tracking-wider text-red-400 mb-1">
              Primary Legal Track
            </p>
            <p className="text-xs text-slate-100 font-semibold leading-relaxed">
              {current.recommendedTrack}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
