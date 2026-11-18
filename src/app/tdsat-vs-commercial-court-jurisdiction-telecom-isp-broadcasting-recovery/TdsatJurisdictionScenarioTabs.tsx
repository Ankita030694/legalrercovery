"use client";

import React, { useState } from "react";

interface ScenarioTab {
  id: string;
  tabLabel: string;
  title: string;
  forumVerdict: string;
  cause: string;
  legalBasis: string;
  steps: {
    step: string;
    description: string;
  }[];
  statutoryRule: string;
}

const SCENARIOS: ScenarioTab[] = [
  {
    id: "mso-vs-lco",
    tabLabel: "MSO vs LCO Arrears",
    title: "Cable MSO Recovering Subscription Arrears & Unreturned Set-Top Boxes from a Defaulting LCO",
    forumVerdict: "Exclusive Forum: TDSAT (New Delhi) — Civil Court Barred by s.15",
    cause:
      "A Multi-System Operator (MSO) supplies encrypted digital signals and 1,500+ Set-Top Boxes (STBs) under an Interconnect Agreement to a Local Cable Operator (LCO). The LCO collects monthly subscriber cash, defaults on ₹18L–₹65L in MSO feed fees, and refuses to return STBs while threatening to swap to a rival MSO.",
    legalBasis:
      "Both the MSO and the LCO are registered 'service providers' under Section 2(1)(j) of the TRAI Act, 1997 read with the Telecommunication (Broadcasting and Cable) Services Interconnection Regulations. Under Section 14(a)(ii), TDSAT exercises exclusive original jurisdiction over disputes between two or more service providers. Filing an ordinary recovery suit in a District Civil Court or Commercial Court is fatal—Section 15 strips civil courts of jurisdiction, resulting in Order VII Rule 11 plaint rejection.",
    steps: [
      {
        step: "Serve 21-Day TRAI Statutory Disconnection & Ledger Notice",
        description:
          "Issue a formal Demand-cum-Disconnection Notice under the TRAI Interconnection Regulations via Email, WhatsApp, and Speed Post RPAD detailing monthly invoice arrears and STB serial-number inventory.",
      },
      {
        step: "File Recovery Petition & Interim STB Restraint in TDSAT",
        description:
          "Institute a Section 14(a)(ii) Petition before TDSAT seeking decree for subscription dues, 18% contractual interest, and an interim injunction restraining the LCO from swapping signals or alienating MSO-owned STBs.",
      },
      {
        step: "Execute TDSAT Decree via Civil Court Under Section 19",
        description:
          "Once TDSAT passes a final money decree, execute it directly as a Civil Court decree under Section 19 of the TRAI Act against the LCO's bank accounts and business assets.",
      },
    ],
    statutoryRule: "TRAI Act 1997 s.14(a)(ii), s.15 (Civil Court Bar) & s.19 Execution",
  },
  {
    id: "isp-vs-enterprise",
    tabLabel: "ISP vs Enterprise Client",
    title: "Class-A/B ISP Recovering ILL / MPLS Lock-In & Postpaid MRC from a Corporate Customer",
    forumVerdict: "Exclusive Forum: Commercial Court (Order XXXVII) or Arbitration — NOT TDSAT",
    cause:
      "A B2B corporate customer (IT/ITES firm, hospital, or logistics hub) signs a 24-month Customer Application Form (CAF) for a 1 Gbps Dedicated Internet Leased Line (ILL) or MPLS WAN, defaults on ₹14L in monthly recurring charges (MRC) and early-termination lock-in CapEx, and the ISP's external counsel mistakenly files a petition in TDSAT.",
    legalBasis:
      "An enterprise end-user consuming bandwidth for its own business operations is a 'consumer / subscriber'—not a DoT-licensed 'service provider' under Section 2(1)(j) of the TRAI Act. Under Section 14(a)(ii) and its proviso, TDSAT has zero jurisdiction over a service provider's money-recovery claim against its own retail or enterprise subscriber. Such claims belong exclusively in the Commercial Court (where specified value exceeds ₹3 Lakh under Section 2(1)(c)(i) Commercial Courts Act, 2015), Civil Court (Order XXXVII CPC), or Institutional Arbitration if the MSA contains a valid Section 7 arbitration clause.",
    steps: [
      {
        step: "Dispatch Advocate Cure & CPE Hardware Return Notice",
        description:
          "Serve a 15-day Demand Notice separating consumed MRC invoices from unamortized last-mile fiber OTCs under Contract Act s.74, plus BNS s.316 warning for unreturned MUX/router CPE.",
      },
      {
        step: "Clear Section 12A Commercial Courts Mediation (or Arbitration s.21)",
        description:
          "For non-arbitral CAFs above ₹3 Lakh, initiate mandatory pre-institution mediation under Section 12A of the Commercial Courts Act (Patil Automation) unless urgent interim asset attachment is required.",
      },
      {
        step: "File Order XXXVII Summary Suit on Signed CAF & MRTG Logs",
        description:
          "Attach the signed CAF, Tax Invoices, and BSA 2023 s.63 certified NOC bandwidth telemetry to secure a fast-track summary decree without full trial.",
      },
    ],
    statutoryRule: "Commercial Courts Act 2015 s.2(1)(c) & s.12A + Order XXXVII CPC (Not TDSAT)",
  },
  {
    id: "broadcaster-carriage",
    tabLabel: "Broadcaster Carriage Fee",
    title: "TV Broadcaster & DTH / HITS Operator Dispute Over Placement, LCN & Carriage Fees",
    forumVerdict: "Exclusive Forum: TDSAT — Inter-Operator Broadcasting Jurisdiction",
    cause:
      "A satellite television broadcaster enters into a Channel Placement / Carriage Agreement with a DTH operator or regional MSO for guaranteed Logical Channel Number (LCN) positioning. Either the broadcaster defaults on agreed carriage/marketing fees or the DTH platform withholds subscription share and arbitrarily shifts the channel to a dead band.",
    legalBasis:
      "Following the 2004 Central Government notification bringing 'broadcasting services and cable services' within the definition of 'telecommunication service' under Section 2(1)(k) of the TRAI Act, 1997, all commercial disputes between broadcasters, DTH operators, HITS platforms, and MSOs fall squarely within TDSAT's exclusive Section 14(a)(ii) jurisdiction. High Courts consistently refuse writ petitions and Civil Courts reject plaints under Section 15.",
    steps: [
      {
        step: "Audit LCN Placement Logs & TRAI RIO Compliance",
        description:
          "Compile automated headend monitoring screenshots, Reference Interconnect Offer (RIO) schedules, and monthly subscription reports (MSR).",
      },
      {
        step: "Issue Contractual Cure & Regulatory Breach Notice",
        description:
          "Serve formal demand citing the Placement Agreement and TRAI Interconnection Regulations 2017 timelines before initiating tribunal action.",
      },
      {
        step: "File TDSAT Recovery Petition & Accounts Reconciliation",
        description:
          "Seek recovery of unpaid carriage/subscription dues along with pendente lite interest and direction for true-up audit under TDSAT's specialized technical bench.",
      },
    ],
    statutoryRule: "TRAI Act 1997 s.2(1)(k) & s.14(a)(ii) Broadcasting Jurisdiction",
  },
  {
    id: "telco-interconnect-ip1",
    tabLabel: "Telco IUC & Passive IP-1",
    title: "Telco Interconnect / Roaming Dues vs Unregistered Passive Fiber & Tower Contractor Claims",
    forumVerdict: "Split Forum: Licensed Telcos -> TDSAT | Unlicensed Civil Contractors -> Commercial Court",
    cause:
      "A Class-A Telco or Unified License holder has ₹2.4 Cr in unpaid Interconnect Usage Charges (IUC), SMS termination, or bandwidth-sharing bills against another licensed telco/ISP, while simultaneously facing payment disputes with an unlicensed civil OFC trenching contractor.",
    legalBasis:
      "Jurisdiction turns strictly on DoT licensing/registration status. Disputes between two Unified Licensees, NLD/ILD operators, or IP-1 registered infrastructure providers regarding interconnect, spectrum sharing, or licensed dark-fiber IRU agreements fall under TDSAT (Section 14(a)(ii)). Conversely, pure civil works contracts—such as municipal road-cutting, trenching, DG maintenance, or non-licensed IT vendor invoices—are ordinary commercial contracts outside Section 14, triable in Commercial Courts, Arbitration, or MSME MSEFC.",
    steps: [
      {
        step: "Verify DoT Unified License / IP-1 Registration Status",
        description:
          "Before drafting pleadings, verify whether both claimant and respondent hold active DoT Unified Licenses, ISP Licenses, or IP-1 registrations governing the disputed agreement.",
      },
      {
        step: "Route Licensed Interconnect & IRU Arrears to TDSAT",
        description:
          "File CDR-backed IUC, SMS termination, or licensed dark-fiber IRU recovery petitions before TDSAT with Section 63 BSA 2023 switch-level billing certificates.",
      },
      {
        step: "Route Civil Trenching & Vendor Invoices to Commercial Court / MSEFC",
        description:
          "Send civil OFC/tower construction and non-licensed vendor claims through Section 12A Commercial Court mediation or MSME Samadhaan (s.18 MSMED Act) to avoid TDSAT dismissal.",
      },
    ],
    statutoryRule: "TRAI Act s.14(a)(ii) (Licensee Status Test) vs Commercial Courts Act s.2(1)(c)",
  },
];

export default function TdsatJurisdictionScenarioTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(SCENARIOS[0].id);
  const activeScenario = SCENARIOS.find((s) => s.id === activeTabId) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div
        role="tablist"
        aria-label="Telecom and ISP jurisdiction scenarios"
        className="flex flex-wrap gap-2 mb-6"
      >
        {SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTabId;
          return (
            <button
              key={scenario.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTabId(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                isActive
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-sm"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <div
        role="tabpanel"
        className="bg-slate-50 rounded-2xl border border-slate-200 p-5 sm:p-6 space-y-5"
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-900 text-white">
            {activeScenario.forumVerdict}
          </span>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2">
            {activeScenario.title}
          </h3>
          <p className="text-sm text-slate-700 leading-relaxed">{activeScenario.cause}</p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <p className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] mb-1.5">
            Statutory &amp; Jurisdictional Analysis
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">{activeScenario.legalBasis}</p>
        </div>

        <div className="space-y-3">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
            Step-by-Step Creditor Escalation Protocol
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {activeScenario.steps.map((item, idx) => (
              <div
                key={item.step}
                className="bg-white rounded-xl border border-slate-200 p-4 flex flex-col justify-between"
              >
                <div>
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-black mb-2">
                    {idx + 1}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 mb-1.5">{item.step}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 pt-2 border-t border-slate-200 text-xs font-semibold text-slate-700">
          <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold">
            Governing Rule
          </span>
          <span>{activeScenario.statutoryRule}</span>
        </div>
      </div>
    </div>
  );
}
