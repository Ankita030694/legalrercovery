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
    id: "entity-defect",
    tabLabel: "1. Entity Misjoinder",
    title: "Notice or Plaint Addressed Only to 'XYZ Public School' (Non-Juristic Name)",
    cause:
      "Most K-12 smart-class, robotics lab, and school ERP agreements are signed on the school letterhead by a Principal or Administrator. When the vendor sends a legal notice or files an Order XXXVII CPC suit solely against 'XYZ Public School', defense counsel moves for rejection of plaint under Order VII Rule 11 CPC because a school brand name is neither a natural person nor a juristic entity.",
    legalBasis:
      "Under Section 6 of the Societies Registration Act, 1860, every registered society must sue or be sued in the name of its President, Chairman, or Principal Secretary, or trustees as determined by the society's rules. For Public Charitable Trusts, all trustees must be impleaded or the Managing Trustee authorized under the Trust Deed (or Section 50/51 of State Public Trusts Acts like the Maharashtra Public Trusts Act, 1950). If the school is operated by a Section 8 Company, the company itself is a juristic person under Section 9 of the Companies Act, 2013.",
    steps: [
      {
        step: "Extract Underlying Juristic Entity Before Dispatch",
        description:
          "Cross-check the school's affiliation disclosure (CBSE/ICSE Mandatory Public Disclosure), GSTIN, or TDS Form 26AS/16A to identify the exact Registered Society, Public Trust, or Section 8 Company holding the PAN.",
      },
      {
        step: "Implead Office-Bearers Through Statutory Capacity",
        description:
          "Array Defendant No. 1 as the Registered Society/Trust/Section 8 Company, Defendant No. 2 as the President/Secretary/Managing Trustee in official capacity, and Defendant No. 3 as the School Principal (as signatory/custodian).",
      },
      {
        step: "Cure Existing Defective Notices Immediately",
        description:
          "If an earlier reminder was sent only to the school brand name, issue a fresh Advocate Demand Notice cured for Section 6 Societies Act / Trust Deed array before initiating MSME Samadhaan or Commercial Court mediation.",
      },
    ],
    statutoryRule: "Section 6 Societies Registration Act, 1860 | Order XXXI CPC (Trusts) | Section 9 Companies Act, 2013",
  },
  {
    id: "boot-hardware-lockin",
    tabLabel: "2. 5-Year BOOT Default",
    title: "School Trust Defaults Mid-Term on a 3-to-5 Year BOOT Smart-Class / IFP Contract",
    cause:
      "Under Build-Own-Operate-Transfer (BOOT) or SaaS-plus-hardware models, EdTech vendors install ₹10–₹40 Lakh worth of Interactive Flat Panels (IFPs), servers, and STEM/robotics kits upfront, recovering capex over 36–60 monthly or quarterly instalments. Around Month 14, the school trust stops paying while continuing to use the hardware and curriculum daily.",
    legalBasis:
      "Unless the agreement expressly restricts remedies to repossession, the vendor can invoke the contractual Acceleration Clause to demand the entire unpaid lock-in balance, or claim damages under Sections 73 and 74 of the Indian Contract Act, 1872. Crucially, self-help forcible entry into a school campus to seize panels invites criminal trespass allegations; repossession must either be peaceful with written Principal/Trust acknowledgment or executed through an Order XXXIX / Section 9 Arbitration interim receiver order.",
    steps: [
      {
        step: "Remote SaaS & License Key Suspension (If Contractually Permitted)",
        description:
          "After a 7-day written cure notice, disable cloud LMS, ERP modules, and annual curriculum license renewals remotely while preserving audit logs of prior active usage.",
      },
      {
        step: "Trigger Lock-In Acceleration + MSMED Compound Interest",
        description:
          "Demand both accrued overdue instalments and accelerated lock-in capex recovery, adding 3x RBI bank rate compound interest under Sections 15–16 of the MSMED Act, 2006 if registered on Udyam.",
      },
      {
        step: "Seek Section 9 Arbitration / Order XXXVIII Attachment Before Judgment",
        description:
          "Where the school trust threatens to alienate or re-brand the hardware, seek an urgent interim injunction restraining third-party transfer and appointing a Court Commissioner for inventory inspection.",
      },
    ],
    statutoryRule: "Sections 73 & 74 Indian Contract Act, 1872 | Section 9 Arbitration Act | MSMED Act s.15–16",
  },
  {
    id: "trustee-change",
    tabLabel: "3. Trustee / Principal Change",
    title: "'Old Committee Signed the Contract' — Management Handover & Internal Trust Feud",
    cause:
      "In Tier-2 and Tier-3 private schools, factional disputes inside the managing committee or a change of School Principal frequently trigger payment freezes. New office-bearers claim they never approved the STEM lab or ERP subscription signed by the outgoing Secretary.",
    legalBasis:
      "Under Section 6 of the Societies Registration Act and settled corporate/trust law, a change in office-bearers or Principal does not extinguish the liability of the juristic Society, Trust, or Section 8 Company. Once the hardware is installed and Installation & Commissioning (I&C) Certificates are signed on campus, or GST Input Tax Credit / part-payments are reflected in the Trust's books, the new management is estopped from repudiating the contract under Section 115 of the Indian Evidence Act / Section 121 BSA, 2023.",
    steps: [
      {
        step: "Serve Joint Notice on Outgoing & Incoming Office-Bearers",
        description:
          "Address the demand notice to the Registered Society/Trust through its current President/Secretary while marking the signatory Principal/erstwhile Secretary so neither faction can feign ignorance.",
      },
      {
        step: "Deploy Section 18 Limitation & Balance Confirmation Proof",
        description:
          "Compile part-payment NEFT/RTGS receipts, TDS Form 26AS deductions, and WhatsApp/email acknowledgment from the school accounts desk to establish binding institutional ratification and reset the 3-year limitation clock.",
      },
      {
        step: "Pre-Empt Internal Dispute Defenses Under Order XXXVII CPC",
        description:
          "Internal trustee infighting is not a 'triable issue' against an innocent third-party B2B vendor who delivered goods and services on campus; file for summary judgment or MSEFC conciliation.",
      },
    ],
    statutoryRule: "Section 6 Societies Act | Section 18 Limitation Act, 1963 | Section 121 BSA, 2023 (Estoppel)",
  },
  {
    id: "bulk-200-schools",
    tabLabel: "4. 200+ School Batch",
    title: "Pan-India Delinquency Across 100–500+ Partner Schools & Bounced Security PDCs",
    cause:
      "Mid-to-large B2B EdTech companies often carry ₹3–₹25 Crore in fragmented ₹1.5–₹8 Lakh receivables spread across 200 to 500+ Tier-2/3 schools. Sending bespoke court notices one by one costs ₹15,000+ per school in legal overhead, while security cheques or NACH mandates bounce with 'Funds Insufficient' or 'Signature Differs'.",
    legalBasis:
      "High-volume school receivables require a structured two-tier escalation: (1) Automated, fact-verified CSV batch demand notices curing the Society/Trust entity name across all 200+ accounts simultaneously; and (2) Strict 30-day statutory tracking on dishonoured PDCs under Section 138 of the Negotiable Instruments Act, 1881 and NACH bounces under Section 25 of the Payment and Settlement Systems Act, 2007—naming both the Trust/Society and the authorized signatory trustees.",
    steps: [
      {
        step: "Segment Portfolio by DPD Bucket & Cheque/NACH Availability",
        description:
          "Tag every school ledger by Society/Trust name, GSTIN, principal overdue, Udyam eligibility, and whether a live PDC/NACH mandate is available for criminal-quasi-criminal Section 138/25 leverage.",
      },
      {
        step: "Dispatch Batch Fact-Verified Notices via Email + WhatsApp + Speed Post RPAD",
        description:
          "Upload the 200+ school CSV to LegalRecovery's Representee portal so every notice carries exact Society/Trust party array, invoice table, and Section 63 BSA-compliant digital delivery logs.",
      },
      {
        step: "Escalate Non-Responders to MSEFC / Section 138 / Order XXXVII",
        description:
          "Typically 35–50% of delinquent schools settle or restructure upon receiving a properly addressed Society/Trust Advocate Notice; escalate remaining hard defaulters to MSEFC Samadhaan or Section 138.",
      },
    ],
    statutoryRule: "Section 138 NI Act, 1881 | Section 25 PSS Act, 2007 | MSMED Act s.18 | Order XXXVII CPC",
  },
];

export default function EdtechVendorScenarioTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(SCENARIOS[0].id);
  const activeScenario = SCENARIOS.find((s) => s.id === activeTabId) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Selector */}
      <div className="flex flex-wrap gap-2 mb-6" role="tablist" aria-label="B2B EdTech default scenarios">
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
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md shadow-red-900/20"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Content */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 md:p-7">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-200">
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
            {activeScenario.title}
          </h3>
          <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-bold bg-slate-900 text-white">
            {activeScenario.statutoryRule}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] mb-1.5">
              Commercial Failure Mode
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.cause}
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 mb-1.5">
              Statutory &amp; Precedent Position
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.legalBasis}
            </p>
          </div>
        </div>

        <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-3">
          3-Step Creditor Execution Protocol
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {activeScenario.steps.map((item, idx) => (
            <div key={item.step} className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                  {item.step}
                </p>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
