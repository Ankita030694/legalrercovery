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
    id: "gfc-sanction-bypass",
    tabLabel: "Post-GFC Developer Bypass",
    title: "Builder Obtained Municipal Sanction & GFC Set—Then Terminated Your Firm Before Final Stage Payment",
    failureMode:
      "A real estate developer pays 20%–35% during Concept and Preliminary Design, presses your studio to push through Municipal Corporation / RERA Sanction drawings and issue full Good For Construction (GFC) architectural packages, then abruptly halts payments and appoints a low-cost site draftsman or junior architect to execute the towers from your CAD/PDF drawings.",
    statutoryCounter:
      "Under Sections 13(1)(a), 14(c), and 17 of the Copyright Act, 1957, copyright in architectural plans, elevations, sections, and BIM models vests exclusively in the independent architect—never transferring automatically to the developer without a written assignment under Section 19. Executing construction from unpaid GFC drawings is actionable copyright infringement under Section 51, while COA Professional Conduct Regulation 2(1)(xii) bars any registered architect from stepping into your mandate without prior written communication and formal fee settlement.",
    actionSteps: [
      {
        step: "Serve Formal License Revocation & COA Reg. 2(1)(xii) Intimation",
        detail:
          "Issue a Fact-Verified Notice revoking any implied construction license over unpaid GFC/Sanction drawings, copying the incoming architect (if identified) on professional misconduct exposure under Architects Act, 1972 and Regulation 2(1)(xii).",
      },
      {
        step: "Withdraw Statutory Supervision & Notify Municipal / RERA Authority",
        detail:
          "File formal written intimation with the Municipal Town Planning Officer and State RERA authority recording termination of your design-supervision responsibility so the developer cannot obtain plinth/CC clearances or RERA Form-1 certificates without settling dues.",
      },
      {
        step: "File Urgent Commercial IPR Suit Before Plinth / Superstructure Starts",
        detail:
          "Because Copyright Act s.59 restricts demolition once a building has commenced, file promptly in the Commercial Court under s.2(1)(c)(xvii) seeking an urgent ex-parte Order XXXIX injunction (exempt from s.12A mediation under Yamini Manohar) plus full unpaid stage fees and damages.",
      },
    ],
    legalProvision: "Copyright Act ss.13, 17, 19, 51, 55 & 59 | COA Reg. 2(1)(xii) | Commercial Courts s.2(1)(c)(xvii)",
  },
  {
    id: "hni-bungalow-interior",
    tabLabel: "HNI Bungalow & Luxury Interiors",
    title: "HNI Villa Owner Took 3D Renders, BOQs & Working Drawings—Then Handed Execution to a Turnkey Contractor",
    failureMode:
      "A luxury residential client or boutique hotelier engages your interior design or architecture studio, receives complete 3D renders, lighting layouts, joinery details, vendor BOQs, and custom millwork drawings, refuses to pay the Design Development & Working Drawing stage bills (claiming 'budget revisions' or 'site delays'), and hands your entire drawing binder to a local carpentry contractor.",
    statutoryCounter:
      "Even when a residential interior client argues the project is non-commercial or tries to sidestep COA rules by hiring an unregistered local contractor, your drawings, 3D visualisations, joinery blueprints, and bespoke BOQs remain protected 'artistic' and 'literary' works under Sections 2(c) and 13(1)(a) of the Copyright Act, 1957. Combined with Indian Contract Act Section 70 (quantum meruit for non-gratuitous services enjoyed) and Order XXXVII CPC summary recovery on signed fee proposals and stage invoices, you can demand 100% of completed stage fees plus infringement damages.",
    actionSteps: [
      {
        step: "Lock Native CAD/BIM Source Files & Audit Site Reproduction",
        detail:
          "Freeze release of editable .dwg/.rvt/.skp files and compile dated email transmittals, WhatsApp drawing sign-offs, and site photographs showing the contractor executing your exact millwork, ceiling, and facade layouts.",
      },
      {
        step: "Dispatch Fact-Verified Demand Notice to Both Client & Executing Contractor",
        detail:
          "Serve a joint Copyright Infringement & Stage-Fee Demand Notice on both the HNI homeowner and the turnkey contractor under Section 51 & Section 55—putting the contractor on personal liability notice for unauthorized commercial reproduction.",
      },
      {
        step: "Enforce Order XXXVII Summary Suit or MSME Samadhaan",
        detail:
          "Where your studio holds Udyam registration (NIC 7110/7410) and serves a corporate/LLP hospitality client, escalate to MSEFC for 3x RBI interest; for individual HNI clients, pursue Order XXXVII CPC or Section 138 cheque proceedings.",
      },
    ],
    legalProvision: "Copyright Act ss.13, 51, 55 & 57 (Moral Rights) | Indian Contract Act ss.70 & 73 | Order XXXVII CPC",
  },
  {
    id: "municipal-change-architect",
    tabLabel: "NOC Forgery / Incoming Architect",
    title: "Developer Appointed a Second COA Architect Without Your Written NOC or Unpaid Fee Clearance",
    failureMode:
      "Midway through municipal approval or RERA registration, the promoter quietly submits a fresh Appointment Letter of a second registered architect to the Municipal Corporation (BMC/DDA/BBMP/PMC/HMDA) or RERA portal—either bypassing your NOC completely or claiming your mandate lapsed while leaving ₹15–₹60 lakh in certified stage bills unpaid.",
    statutoryCounter:
      "Regulation 2(1)(xii) of the Architects (Professional Conduct) Regulations, 1989 explicitly mandates that an architect shall not supplant or attempt to supplant another architect, nor accept a commission for a project previously entrusted to another architect without informing the previous architect in writing and verifying that the prior engagement has been properly terminated. Violating this regulation exposes the incoming architect to disciplinary proceedings under Section 30 of the Architects Act, 1972—including reprimand or removal from the Register of Architects.",
    actionSteps: [
      {
        step: "Send Formal Written Notice Under COA Reg. 2(1)(xii) to Incoming Architect",
        detail:
          "Write formally (with copy via Advocate RPAD/Email) to the newly appointed architect detailing your subsisting unpaid fee ledger, copyright ownership over all sanctioned plans, and non-issuance of NOC.",
      },
      {
        step: "Lodge Formal Misconduct Representation Before the Council of Architecture",
        detail:
          "If the incoming architect proceeds without clearance or uses your sanctioned sheets under a new title block, file a verified disciplinary complaint before the Council of Architecture (COA) under Section 30 of the Architects Act, 1972.",
      },
      {
        step: "File Municipal Portal Objection & Revoke Sanctioned Drawing Usage",
        detail:
          "Notify the Municipal Commissioner / Chief Town Planner in writing that your sanctioned drawings carry no copyright assignment and cannot be carried forward under a substituted architect without your written release.",
      },
    ],
    legalProvision: "Architects Act, 1972 s.30 | Architects (Professional Conduct) Regulations 1989 Reg. 2(1)(xii) | Copyright Act s.57",
  },
  {
    id: "stage-percentage-redesign",
    tabLabel: "Endless Redesign & Scope Creep",
    title: "Developer Demanded 4 FSI/Layout Revisions—Then Refused Redesign Fees & Froze Stage-Wise Bills",
    failureMode:
      "After approving Concept Design and Municipal Sanction drawings, the promoter changes the unit mix (e.g., 3BHK to 2BHK), purchases an adjoining plot, or revises TDR/FSI utilization multiple times. Your firm executes months of re-drafting and BIM coordination on email assurances ('we will settle at tender stage'), only for the builder to refuse revision fees and cap payment at the original outdated percentage.",
    statutoryCounter:
      "Under the COA Comprehensive Architectural Services Scale of Charges (and standard architectural fee agreements), major client-driven revisions after stage approval constitute reimbursable Extra Services payable on man-hour or percentage-of-revised-cost basis. Under Indian Contract Act Section 70 and MSMED Act Sections 15–18 (where the architectural LLP/proprietorship is Udyam-registered as a Micro/Small service enterprise), a corporate developer cannot retain revised GSTR-2B ITC invoices and stall payment past 45 days without triggering 3x RBI compound interest and Income Tax Section 43B(h) expense disallowance.",
    actionSteps: [
      {
        step: "Segregate Undisputed Base Stage Bills From Revision Fee Claims",
        detail:
          "Quantify completed COA stages (Concept 10%, Preliminary 15%, Sanction 15%, Working/GFC 35%) separately from documented post-approval redesign hours so the developer cannot freeze 100% of your ledger over a 15% revision dispute.",
      },
      {
        step: "Trigger Corporate CFO & Auditor Alert Under Section 43B(h)",
        detail:
          "For Udyam-registered architecture and interior design studios billing corporate developers, serve an Advocate Notice highlighting mandatory Income Tax s.43B(h) disallowance on unpaid MSME consultancy bills past 45 days and CGST s.16(2) 180-day ITC reversal.",
      },
      {
        step: "Escalate to MSEFC Samadhaan or Commercial Arbitration",
        detail:
          "File an online MSME Samadhaan claim for principal + monthly-compounded 3x RBI interest (or invoke contractual arbitration / Commercial Court Order XXXVII if non-MSME or above pecuniary threshold).",
      },
    ],
    legalProvision: "COA Scale of Charges | Indian Contract Act s.70 | MSMED Act ss.15–18 & 24 | Income Tax Act s.43B(h)",
  },
];

export default function ArchitectRecoveryScenarioTabs() {
  const [activeId, setActiveId] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeId) || SCENARIOS[0];

  return (
    <div className="space-y-5">
      {/* Interactive Scenario Selector Pills */}
      <div
        role="tablist"
        aria-label="Architectural and interior design fee dispute scenarios"
        className="flex flex-wrap gap-2"
      >
        {SCENARIOS.map((item) => {
          const isActive = item.id === activeId;
          return (
            <button
              key={item.id}
              role="tab"
              type="button"
              aria-selected={isActive}
              onClick={() => setActiveId(item.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
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
        className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6 space-y-5"
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 border-b border-slate-200 pb-4">
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
            {current.title}
          </h3>
          <span className="inline-block text-[10px] sm:text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-slate-900 text-white shrink-0">
            COA &amp; IPR Track
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-red-50/70 border border-red-200 rounded-xl p-4">
            <span className="block text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] mb-1.5">
              Developer / Client Default Tactic
            </span>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {current.failureMode}
            </p>
          </div>

          <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4">
            <span className="block text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 mb-1.5">
              Statutory Creditor Counter-Strike
            </span>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {current.statutoryCounter}
            </p>
          </div>
        </div>

        <div>
          <span className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-3">
            3-Step Studio Execution Protocol
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {current.actionSteps.map((st, idx) => (
              <div
                key={st.step}
                className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-[11px] font-black flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <strong className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                    {st.step}
                  </strong>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{st.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200 text-xs">
          <span className="font-bold uppercase tracking-wider text-slate-500">
            Governing Statutes:
          </span>
          <span className="font-mono font-semibold text-slate-800 bg-white px-2.5 py-1 rounded-md border border-slate-200">
            {current.legalProvision}
          </span>
        </div>
      </div>
    </div>
  );
}
