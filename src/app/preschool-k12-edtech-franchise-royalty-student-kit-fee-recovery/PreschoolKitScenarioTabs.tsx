"use client";

import React, { useState } from "react";

interface ScenarioTab {
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

const SCENARIOS: ScenarioTab[] = [
  {
    id: "erp-headcount-suppression",
    tabLabel: "ERP Headcount Dodge",
    title: "Center Enrolls 90 Children on Campus, Declares Only 30 on Franchisor ERP",
    cause:
      "Franchisees collect full annual tuition and kit fees from 90 parents in cash or personal UPI, but enter only 30 admissions into the central school ERP to evade ₹4,500–₹8,500 per-child Welcome Kit billing and ongoing 12%–18% student-royalty shares.",
    legalBasis:
      "Under the Physical Headcount Audit Clause and Sections 73–74 of the Indian Contract Act, 1872, a franchisor's regional auditor may conduct unannounced classroom attendance counts, CCTV headcount verification, and biometric gate-log checks. Suppressed admissions also constitute dishonest misappropriation under Section 316 of the Bharatiya Nyaya Sanhita (BNS), 2023 when brand-collected kit fees are retained by the partner.",
    steps: [
      {
        step: "Unannounced Physical Classroom & Bus-Manifest Count",
        description:
          "Conduct a surprise academic-quality visit during morning assembly (9:30 AM–11:00 AM), recording timestamped classroom headcounts, school-bus pick-up rosters, and parent-WhatsApp group member counts.",
      },
      {
        step: "Reconcile ERP Admissions vs. Field Headcount",
        description:
          "Generate an Enrolment Variance Schedule comparing ERP-registered roll numbers (30) against verified physical attendance (90) to quantify the 60-child kit and royalty shortfall.",
      },
      {
        step: "Serve 15-Day Audit Cure & Kit-Fee Demand Notice",
        description:
          "Dispatch a Fact-Verified Legal Notice demanding immediate payment of imputed Welcome Kit fees, 18%–24% p.a. commercial interest, and liquidated audit costs under Contract Act s.74.",
      },
    ],
    statutoryRule: "Contract Act s.73 & s.74 | BNS s.316 | Physical Headcount Audit Clause",
  },
  {
    id: "photocopied-workbooks",
    tabLabel: "Workbook Piracy",
    title: "Franchisee Photocopies Branded Workbooks & Buys Local Unbranded Kits",
    cause:
      "To supply the 60 unreported students without ordering central kits, the franchisee scans and photocopies the franchisor's proprietary phonics workbooks, assessment sheets, and flashcards at a local print shop, or substitutes cheap unbranded bags and uniforms.",
    legalBasis:
      "Reproducing, scanning, or distributing proprietary curriculum workbooks, teacher manuals, and illustrated flashcards without a license is direct copyright infringement under Section 51 of the Copyright Act, 1957, attracting civil injunctions and statutory damages under Section 55 as well as cognizable criminal liability under Section 63 (imprisonment up to 3 years and fine).",
    steps: [
      {
        step: "Secure Trap-Purchase & Specimen Workbook",
        description:
          "Obtain a physical copy of the photocopied or spiral-bound workbook distributed to parents, photographing the missing holographic/ISBN batch stamp and local printer markings.",
      },
      {
        step: "Lock Digital Curriculum & Portal Credentials",
        description:
          "Suspend the center's LMS, teacher-training portal, and printable worksheet repository immediately, preserving access IP logs under BSA 2023 Section 63.",
      },
      {
        step: "Issue Copyright s.51/s.63 Cease-and-Desist + Damages Notice",
        description:
          "Serve a dual civil-and-criminal IP demand seeking delivery-up of all infringing prints, statutory royalty restitution per pirated set, and a 7-day compliance undertaking prior to Commercial Court filing.",
      },
    ],
    statutoryRule: "Copyright Act s.51, s.55 & s.63 | Trade Marks Act s.29 | BSA 2023 s.63",
  },
  {
    id: "rogue-rebranding",
    tabLabel: "Rogue Rebranding",
    title: "Center Defaults on Annual Renewal & Rebrands to Independent Play School",
    cause:
      "After accumulating ₹6–₹18 Lakh in unpaid kit invoices and royalty arrears, the franchisee refuses to renew, paints over the exterior board with a look-alike name, yet retains the brand's interior wall murals, curriculum, and existing parent base in violation of post-term covenants.",
    legalBasis:
      "Continuing to use deceptively similar trade dress, interior classroom graphics, and curriculum after termination triggers trademark infringement and passing-off remedies under Sections 29 and 135 of the Trade Marks Act, 1999, alongside Commercial Courts Act s.12A urgent interim relief (exempting pre-institution mediation under Patil Automation / Yamini Manohar principles where urgent IP injury exists).",
    steps: [
      {
        step: "Document Exterior Signboard & Parent Communication",
        description:
          "Capture geotagged photographs of the old/new signage, WhatsApp parent broadcasts claiming 'same management & curriculum', and Google Business Profile listing.",
      },
      {
        step: "Direct Parent & Platform De-Affiliation Notice",
        description:
          "Send formal brand disassociation notices to Google Maps / Justdial / aggregator directories and notify parents that the center is no longer an authorized academic partner.",
      },
      {
        step: "Seek Section 9 / Commercial Court Ad-Interim Injunction",
        description:
          "File for immediate restraint on curriculum use, de-branding of classroom assets, and recovery of liquidated royalty + kit arrears.",
      },
    ],
    statutoryRule: "Trade Marks Act s.29 & s.135 | Commercial Courts Act s.2(1)(c)(ix) & s.12A",
  },
  {
    id: "abacus-edtech-bulk",
    tabLabel: "Multi-Center Batch",
    title: "100–1,000 Center Skill / Abacus / Robotics Franchisor Facing Seasonal Arrears",
    cause:
      "Abacus, Vedic Maths, Robotics, and K-12 EdTech franchisors face simultaneous April/June admission-season defaults across 40–150 centers—small per-center arrears (₹45,000 to ₹3.5 Lakh each) that are uneconomical to litigate individually through traditional law firms.",
    legalBasis:
      "Under Section 138 of the NI Act (for dishonoured kit-dispatch PDCs), Section 25 of the PSS Act (for bounced e-NACH royalty mandates), and Contract Act s.73/74, institutional franchisors can aggregate 50–500+ defaulting centers into a single synchronized Representee batch dispatch—converting uncollected small-ticket arrears into high-velocity 15-day settlements.",
    steps: [
      {
        step: "Standardize Center Arrears into One CSV Ledger",
        description:
          "Export center code, proprietor PAN/GSTIN, ERP vs. audited kit gap, bounced PDC/e-NACH return memos, and territorial manager notes into a single bulk upload.",
      },
      {
        step: "Dispatch Synchronized Multi-Channel Demand Notices",
        description:
          "Trigger Fact-verified notices across Email, WhatsApp, and Speed Post RPAD simultaneously so non-paying centers cannot claim selective enforcement.",
      },
      {
        step: "Escalate Non-Responders to ODR / NI s.138 Track",
        description:
          "Route centers failing the 15-day cure window into Online Dispute Resolution (ODR) or statutory NI s.138 / PSS s.25 complaints within the mandatory 30-day limitation window.",
      },
    ],
    statutoryRule: "NI Act s.138 | PSS Act s.25 | ODR / Arbitration & Conciliation Act s.21",
  },
];

export default function PreschoolKitScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Selector Bar */}
      <div
        role="tablist"
        aria-label="Preschool and EdTech Franchise Evasion Scenarios"
        className="flex flex-wrap gap-2 mb-6"
      >
        {SCENARIOS.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Card */}
      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5"
      >
        <div>
          <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-slate-900 text-white mb-2">
            {current.statutoryRule}
          </span>
          <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
            {current.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-black uppercase tracking-wider text-[#DC2626] mb-1.5">
              Commercial Failure Mode
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{current.cause}</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-black uppercase tracking-wider text-emerald-700 mb-1.5">
              Creditor Statutory Leverage
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{current.legalBasis}</p>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-xs font-black uppercase tracking-wider text-slate-500">
            3-Step Franchisor Enforcement Protocol
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {current.steps.map((st, idx) => (
              <div
                key={st.step}
                className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900">{st.step}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{st.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
