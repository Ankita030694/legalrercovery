"use client";

import React, { useState } from "react";

interface ScenarioTab {
  id: string;
  tabLabel: string;
  title: string;
  failureMode: string;
  statutoryCounter: string;
  actionSteps: {
    step: string;
    detail: string;
  }[];
  legalProvision: string;
}

const SCENARIOS: ScenarioTab[] = [
  {
    id: "oc-structural-stability",
    tabLabel: "OC & Stability Sign-Off Hold",
    title:
      "Developer Demands Final Structural Stability / Fire-NOC / MEP Commissioning Certificate While Owing 8 Months of Stage Fees",
    failureMode:
      "A real estate promoter or industrial plant owner pays initial concept and foundation bills, uses your structural RCC/steel calculations, HVAC/plumbing shop drawings, and fire-fighting layouts to erect the entire tower or factory, and then piles up 6 to 10 months of unpaid monthly/milestone invoices. Weeks before applying for Municipal Occupancy Certificate (OC) or Chief Fire Officer Final NOC, the developer pressures your firm to sign the Structural Stability Certificate or As-Built MEP Completion Certificate against a verbal promise of 'payment right after OC flat handovers.'",
    statutoryCounter:
      "Under Sections 51 and 52 of the Indian Contract Act, 1872 (reciprocal promises to be performed in contractual order), a consulting engineer is not legally bound to perform a subsequent non-emergency commercial deliverable—such as issuing fresh completion sign-offs, As-Built dossiers, or municipal OC forms—while the developer stands in material breach of prior certified payment milestones. Because no immediate danger to life or structural collapse exists, conditioning release of final commercial certificates on escrow clearance or full RTGS settlement of verified arrears is lawful contractual reciprocity, reinforced by MSMED Act ss.15–18 and Income Tax s.43B(h).",
    actionSteps: [
      {
        step: "Issue Formal s.51–52 Conditional Performance & Fee Settlement Notice",
        detail:
          "Serve an Advocate Notice placing on record that your firm remains ready and willing to inspect and issue the final Structural Stability / MEP As-Built certificate immediately upon settlement of all certified prior milestone invoices (or via bank escrow / RTGS clearing).",
      },
      {
        step: "Refuse Uncertified Post-Dated Cheques Without Personal Director Guarantee",
        detail:
          "Never surrender the signed OC/Stability certificate against an undated or unbacked cheque. If staggered payment is negotiated, require an irrevocable Escrow Instruction or a written Settlement Undertaking backed by PDCs attracting NI Act s.138 & s.143A.",
      },
      {
        step: "Record Supervision Scope Boundary With Municipal / RERA Authority if Terminated",
        detail:
          "If the developer threatens to appoint a replacement Licensed Structural Engineer (LSE) without clearing dues, issue a factual written intimation recording the exact casting stage up to which your inspection applied so your professional indemnity stays protected.",
      },
    ],
    legalProvision:
      "Indian Contract Act ss.51, 52 & 54 | MSMED Act ss.15–18 | Income Tax Act s.43B(h) | NI Act ss.138 & 143A",
  },
  {
    id: "pmc-stalled-manmonths",
    tabLabel: "PMC Stalled Man-Month Bills",
    title:
      "PMC Monthly Resident-Engineer & Man-Month Deployment Bills Frozen Because the Developer's Project Stalled",
    failureMode:
      "Your Project Management Consultancy (PMC) deployed a Resident Construction Manager, QA/QC Engineers, Billing Engineers, and Planning staff on site under a fixed monthly man-month rate card. After 7 months, the developer's bank funding slowed or RERA sales dipped, halting slab casting. The promoter kept your site team mobilized on standby while refusing to clear 8 months of verified monthly attendance and timesheet bills, arguing 'fees are linked to physical construction progress.'",
    statutoryCounter:
      "Monthly man-month PMC deployment contracts are time-and-resource commitments, not back-to-back contractor turnkeys. Under Indian Contract Act Sections 55, 70, and 73, once your resident engineers were deployed at site under signed deployment letters and monthly attendance/MPR logs, the client cannot unilaterally convert a fixed monthly man-month fee into a progress-linked percentage after enjoying the services. Furthermore, if the developer withheld payment beyond 45 days for an Udyam-registered Micro or Small PMC firm, statutory 3x RBI monthly compound interest (MSMED s.16) and March 31 tax disallowance under s.43B(h) apply automatically.",
    actionSteps: [
      {
        step: "Consolidate Biometric Logs, MPRs, Site MOMs & Certified Billing Sheets",
        detail:
          "Compile monthly manpower deployment charts, client-counter-signed Minutes of Meetings (MOMs), Monthly Progress Reports (MPRs), RFI registers, and GST e-invoices with a BSA 2023 s.63 electronic evidence certificate.",
      },
      {
        step: "Serve Formal Demobilization Warning + 15-Day Arrears Demand Notice",
        detail:
          "Issue an Advocate Notice under Contract Act ss.51–52 giving 15 days to clear accumulated man-month arrears failing which site manpower will be lawfully demobilized without waiver of idle-standby and demobilization costs under s.73.",
      },
      {
        step: "Escalate Simultaneously to MSEFC Samadhaan or Commercial Court Order XXXVII",
        detail:
          "Where total dues are backed by signed Work Orders, attendance logs, and Form 26AS s.194J TDS credits, file MSEFC reference (for Udyam Micro/Small PMCs) or an Order XXXVII CPC summary suit for liquidated monthly retainers.",
      },
    ],
    legalProvision:
      "Indian Contract Act ss.51, 55, 70 & 73 | Order XXXVII CPC | MSMED Act ss.15–18 | Limitation Act s.18 (Form 26AS 194J)",
  },
  {
    id: "eia-ec-fire-noc",
    tabLabel: "EIA / EC & Fire-NOC Milestones",
    title:
      "QCI-NABET Accredited EIA / Environmental Clearance or Fire-Safety Consultant Unpaid After TOR & Public Hearing",
    failureMode:
      "An industrial factory, mining lessee, or township promoter hires your QCI-NABET accredited Environmental Impact Assessment (EIA) agency or Fire-Safety consultancy to secure Terms of Reference (TOR), conduct 3-month baseline air/water/noise monitoring, draft the EIA/EMP report, and represent the project at the State Pollution Control Board (SPCB) Public Hearing. Before the final SEAC/EAC appraisal presentation for Environmental Clearance (EC) or Final Fire NOC, the promoter freezes milestone payments and demands you upload final EIA annexures onto the PARIVESH portal anyway.",
    statutoryCounter:
      "Baseline laboratory monitoring data, dispersion modeling, EMP engineering designs, and EIA reports represent substantial out-of-pocket NABL sampling costs plus copyrightable technical compilations (Copyright Act ss.13 & 17). Under Contract Act ss.51–52, you are not required to execute the final SEAC/EAC presentation, submit signed QCI-NABET functional-area coordinator declarations, or release final PARIVESH compliance upload bundles while prior TOR, baseline monitoring, and draft-EIA milestone invoices remain unpaid.",
    actionSteps: [
      {
        step: "Separate Paid TOR Deliverables From Unpaid Final Appraisal Deliverables",
        detail:
          "Document exact milestone completion dates (TOR grant letter, SPCB public hearing minutes, NABL monitoring lab receipts) and notify the client that final SEAC/EAC appraisal sign-off and EMP undertaking are suspended pending invoice settlement under s.51.",
      },
      {
        step: "Assert Copyright & QCI-NABET Declaration Ownership Over Unpaid EIA/EMP Sets",
        detail:
          "Place the promoter on formal Advocate Notice that unauthorized submission of your unpaid EIA/EMP tables or forged QCI-NABET accreditation credentials on PARIVESH constitutes copyright infringement (s.51) and actionable misrepresentation.",
      },
      {
        step: "Trigger Section 43B(h) Tax Notice & Commercial Recovery Before EC Grant",
        detail:
          "Serve a combined MSME 45-Day / s.43B(h) Intimation and Order XXXVII Demand Notice—project promoters raising bank project finance cannot afford statutory tax disallowance or disputed EC compliance disclosures during lender due diligence.",
      },
    ],
    legalProvision:
      "Indian Contract Act ss.51–52 & 70 | Copyright Act ss.13, 17 & 51 | MSMED Act ss.15–18 | Income Tax Act s.43B(h)",
  },
  {
    id: "geotech-soil-survey",
    tabLabel: "Geotech Soil & Survey Bills",
    title:
      "Geotechnical Soil-Investigation, Borehole Drilling & DGPS Topographical Survey Agency Unpaid After Fieldwork",
    failureMode:
      "Your geotechnical lab or topographical survey firm mobilizes rotary drilling rigs, SPT testing crews, or DGPS/LiDAR drone survey teams to an infrastructure highway, solar park, or high-rise site. You complete 18 boreholes, conduct triaxial/CBR/chemical soil testing in your NABL-accredited lab, and submit preliminary bearing-capacity logs so the structural engineer can begin piling design. The EPC contractor or developer then stalls your ₹6–₹28 lakh invoice citing 'client approval pending' or demands the stamped Final Soil Investigation Report (SBC recommendation) without paying mobilization and drilling bills.",
    statutoryCounter:
      "Geotechnical soil investigation and topographical surveys combine physical site mobilization costs with high-value engineering interpretation (Safe Bearing Capacity recommendations, liquefaction analysis, pile-load curves). Under Contract Act ss.51–52, releasing the final stamped Geotechnical Interpretative Report and editable CAD/contour/GIS survey files is a reciprocal obligation dependent on clearing verified fieldwork and lab-testing milestones. Even where preliminary borelogs were already handed over, the EPC contractor's 'pay-when-paid' excuse does not legally extinguish direct contractual privity unless an explicit back-to-back clause exists—and even then cannot override MSMED Act s.15 (45-day ceiling).",
    actionSteps: [
      {
        step: "Withhold Final Stamped SBC Interpretative Report & Editable CAD Contours",
        detail:
          "Hold release of the final signed Geotechnical Report and native .dwg/.dxf/KML survey deliverables under Contract Act s.51 until mobilization, borehole depth logs, and NABL lab invoices are cleared.",
      },
      {
        step: "Defeat EPC 'Back-to-Back Payment' Defenses Using MSMED s.15 & s.24",
        detail:
          "For Udyam Micro/Small geotechnical labs and survey agencies (NIC 7110/7120), Section 24 of the MSMED Act overrides contrary contractual 'pay-when-paid' clauses—locking payment strictly within 45 days of service acceptance.",
      },
      {
        step: "Attach Signed Borehole Depth Logs & Rig Mobilization Sheets for MSEFC / Order 37",
        detail:
          "Pair client-signed site rig deployment logs, borehole completion certificates, and GST invoices in an Advocate Notice followed by MSEFC Samadhaan or Commercial Court summary recovery.",
      },
    ],
    legalProvision:
      "MSMED Act ss.15, 16, 18 & 24 (Overriding Effect) | Indian Contract Act ss.51–52 & 70 | Order XXXVII CPC",
  },
];

export default function EngineeringRecoveryScenarioTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTabId) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Selector Strip */}
      <div
        role="tablist"
        aria-label="Engineering consultancy default scenarios"
        className="flex flex-wrap gap-2 mb-5 pb-3 border-b border-slate-200"
      >
        {SCENARIOS.map((tab) => {
          const isActive = tab.id === activeTabId;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTabId(tab.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Panel */}
      <div
        role="tabpanel"
        className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6 space-y-5"
      >
        <div>
          <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-slate-900 text-white mb-2">
            Commercial Default Mode
          </span>
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
            {current.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl border border-amber-200 p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-amber-700 mb-1.5">
              Developer / Client Tactic
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.failureMode}
            </p>
          </div>

          <div className="bg-white rounded-xl border border-emerald-200 p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 mb-1.5">
              Statutory &amp; Contractual Counter-Leverage
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.statutoryCounter}
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-3">
            Step-by-Step Creditor Execution Protocol
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {current.actionSteps.map((item, idx) => (
              <div
                key={item.step}
                className="bg-white rounded-xl border border-slate-200 p-4 flex flex-col"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <p className="text-xs font-bold text-slate-900 leading-snug">
                    {item.step}
                  </p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-3 border-t border-slate-200 flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
            Governing Provisions:
          </span>
          <span className="text-xs font-semibold text-slate-900 bg-white border border-slate-200 px-3 py-1 rounded-full">
            {current.legalProvision}
          </span>
        </div>
      </div>
    </div>
  );
}
