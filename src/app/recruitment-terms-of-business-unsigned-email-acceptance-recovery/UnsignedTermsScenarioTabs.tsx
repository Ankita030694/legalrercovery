"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  tabLabel: string;
  title: string;
  badge: string;
  clientTrap: string;
  statutoryHook: string;
  creditorPlaybook: string[];
  caseLawCitation: string;
  financialImpact: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "urgent-cv-trap",
    tabLabel: "1. 'Urgent CVs — MSA In Legal'",
    title: "The 'Share CVs Urgently While Legal Reviews the MSA' Bait-and-Switch",
    badge: "Section 8 Acceptance by Conduct",
    clientTrap:
      "Client Talent Acquisition or Business Head emails on Tuesday: 'Urgent closure needed for Senior DevOps Lead by Friday! Share profiles immediately with rates while our team reviews your Master Services Agreement (MSA).' You email terms specifying an 8.33% or 15% placement fee along with 4 shortlisted resumes. Client immediately schedules interviews, issues an offer letter, candidate joins, and CFO subsequently claims: 'We never signed your MSA; you provided profiles gratuitously without a contract.'",
    statutoryHook:
      "Section 8 of the Indian Contract Act, 1872 explicitly establishes that 'performance of the conditions of a proposal... is an acceptance of the proposal.' Under Section 10A of the Information Technology Act, 2000, contract formation via email exchange is statutorily complete and enforceable. By scheduling interviews and onboarding the candidate after receiving your emailed terms, the client performed positive acts of acceptance by conduct.",
    creditorPlaybook: [
      "Export complete RFC 822 email headers with SHA-256 hash verifying the delivery of fee terms prior to interview scheduling.",
      "Issue immediate Demand Notice citing Trimex International FZE v. Vedanta Aluminium Ltd. (Supreme Court) confirming email contract validity.",
      "Assert Section 70 Contract Act in the alternative: non-gratuitous recruitment service enjoyed by employer mandates payment of customary commercial fee.",
      "Trigger MSMED Act Section 15/16 interest clock at 3x RBI bank rate calculated from Day 45 of candidate onboarding.",
    ],
    caseLawCitation:
      "Trimex International FZE v. Vedanta Aluminium Ltd. (2010) 3 SCC 1 & Bharat Petroleum Corporation Ltd. v. Great Eastern Shipping Co. Ltd. (2008) 1 SCC 503",
    financialImpact: "Full 100% Placement Fee + 18% GST + Compound Interest at 3x RBI Bank Rate",
  },
  {
    id: "ultra-vires-hr",
    tabLabel: "2. 'HR Had No Authority'",
    title: "The Corporate Ultra Vires Defense: 'HR Manager Had No Board Authority to Sign'",
    badge: "Section 237 Ostensible Authority",
    clientTrap:
      "When your placement fee invoice falls overdue, Corporate Legal or the CFO responds: 'The Senior HR Manager / Talent Acquisition Head who emailed you had no Board Resolution, Power of Attorney, or financial authorization to contractually bind our corporate entity to recruitment commissions. Their email commitments are ultra vires, null and void.'",
    statutoryHook:
      "Under Section 237 of the Indian Contract Act, 1872, an employer is bound by the acts of its agent if the principal by conduct induced third parties to believe such acts were authorized (Doctrine of Holding Out / Ostensible Authority). Section 188 further dictates that an agent having authority to do an act has authority to do every lawful thing necessary. A company cannot enjoy the fruitful harvest of an introduced employee while repudiating the agent's accompanying commercial consideration.",
    creditorPlaybook: [
      "Collate interview calendar invites sent from official corporate domain email addresses (@clientcompany.com).",
      "Attach candidate offer letter signed by HR Director or CXO proving corporate ratification of the recruiter's introduction.",
      "Serve legal notice asserting Section 196 and Section 199 (Doctrine of Ratification): retaining the candidate constitutes ratification of the transaction in its entirety.",
      "Screen for Section 43B(h) Income Tax disallowance if agency is registered as an MSME micro/small enterprise.",
    ],
    caseLawCitation:
      "Ram Pertap v. Marshall (1899) ILR 26 Cal 701 (PC) & State of West Bengal v. B.K. Mondal & Sons, AIR 1962 SC 779",
    financialImpact: "Neutralizes 100% of internal delegation excuses; enforces corporate corporate liability",
  },
  {
    id: "overlapping-resume",
    tabLabel: "3. 'Candidate In Database'",
    title: "The Passive Database Bluff: 'We Already Had This Resume in Our ATS'",
    badge: "Effective Cause Doctrine",
    clientTrap:
      "Following candidate joining, client HR claims: 'This candidate applied through LinkedIn 11 months ago and was in our internal ATS database. Therefore, your agency was not the original source, and no fee is payable.' However, the candidate profile had remained dormant for nearly a year without interview or outreach until your agency re-engaged the candidate, pitched the opportunity, and submitted current CTC expectations.",
    statutoryHook:
      "Indian commercial jurisprudence and common law govern recruitment agency introductions via the 'Effective Cause of Engagement' doctrine. The mere passive possession of an outdated resume in an employer database does not defeat a recruiter's claim when the recruiter's active intervention, negotiation, and introduction was the direct, proximate, and effective cause of the actual hiring.",
    creditorPlaybook: [
      "Produce electronic proof under BSA 2023 Section 63 showing candidate consent, updated CV timestamp, and agency interview scheduling.",
      "Demonstrate that employer never initiated contact with the candidate during the preceding 6–12 months prior to agency submission.",
      "Show that agency negotiated candidate notice buyout, salary expectations, and scheduled the technical evaluation rounds.",
      "Deliver pre-institution mediation notice under Section 12A of the Commercial Courts Act, 2015 for summary money recovery.",
    ],
    caseLawCitation:
      "Tribe & Co. v. Taylor (1876) 1 CPD 505 & Green v. Bartlett (1863) 14 CB NS 728 (Cited with approval in Indian commercial law)",
    financialImpact: "Full placement fee recovery; completely defeats retroactive database claiming",
  },
  {
    id: "quantum-meruit-dispute",
    tabLabel: "4. 'No Fee Rate Concluded'",
    title: "The Vagueness Defense: 'No Formal Fee Percentage Was Concluded Between Us'",
    badge: "Section 70 Quantum Meruit",
    clientTrap:
      "Client admits interviewing and hiring the candidate via your introduction, but argues: 'Your email mentioned 8.33%, but we never replied confirming that rate. Under Section 29, the contract is void for uncertainty, and we are willing to offer only a token goodwill honorarium of ₹25,000 instead of your ₹3,50,000 invoice.'",
    statutoryHook:
      "Under Section 70 of the Indian Contract Act, 1872, where a person lawfully does anything for another person, not intending to do so gratuitously, and such other person enjoys the benefit thereof, the latter is bound to make compensation in respect of, or to restore, the thing so done. The Supreme Court in B.K. Mondal and FCI v. Vikas Majdoor established that Section 70 awards compensation on the principle of Quantum Meruit based on prevalent market rates (customarily 8.33% to 15% of annual CTC in India).",
    creditorPlaybook: [
      "Submit industry benchmark affidavits and standard recruitment terms showing 8.33% (1 month CTC) as the minimum statutory market floor.",
      "Produce agency engagement email explicitly stating 'Candidate submission subject to standard placement terms of 8.33% / 15%'.",
      "Demonstrate absence of any contemporaneous objection by the client prior to candidate joining.",
      "File summary suit under Order XXXVII CPC or MSME Samadhaan petition claiming full market value plus statutory penal interest.",
    ],
    caseLawCitation:
      "State of West Bengal v. B.K. Mondal & Sons (AIR 1962 SC 779) & Food Corporation of India v. Vikas Majdoor Kamdar (2007) 13 SCC 544",
    financialImpact: "Awards full customary market placement fee (8.33%–15%) without discount",
  },
];

export default function UnsignedTermsScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const activeScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-slate-900 rounded-2xl p-5 sm:p-7 md:p-8 text-white border border-slate-800 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-5 border-b border-slate-800">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-red-400 block mb-1">
            Interactive Commercial Failure-Mode Explorer
          </span>
          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white">
            Unsigned Recruitment Agreement: 4 Real-World Recovery Scenarios
          </h3>
        </div>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-red-950/80 text-red-300 border border-red-800/80 self-start sm:self-auto">
          Creditor Tactical SOP
        </span>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 pt-5 pb-6">
        {SCENARIOS.map((scenario) => {
          const isActive = activeTab === scenario.id;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-lg shadow-red-900/40"
                  : "bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/60"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <div className="bg-slate-800/70 rounded-xl p-5 sm:p-6 border border-slate-700/80 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-700/60">
          <h4 className="text-base sm:text-lg font-bold text-white">
            {activeScenario.title}
          </h4>
          <span className="px-2.5 py-1 rounded-md text-[11px] font-extrabold uppercase bg-red-900/40 text-red-300 border border-red-700/50">
            {activeScenario.badge}
          </span>
        </div>

        {/* Client Defense Trap */}
        <div className="space-y-1.5">
          <p className="text-xs font-extrabold uppercase tracking-wider text-amber-400">
            The Debtor's Bad-Faith Defense:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-900/60 p-3.5 rounded-lg border border-slate-800">
            {activeScenario.clientTrap}
          </p>
        </div>

        {/* Statutory Hook */}
        <div className="space-y-1.5">
          <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-400">
            Statutory Counter-Offensive:
          </p>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed bg-slate-900/60 p-3.5 rounded-lg border border-slate-800">
            {activeScenario.statutoryHook}
          </p>
        </div>

        {/* Creditor Actionable Checklist */}
        <div className="space-y-2">
          <p className="text-xs font-extrabold uppercase tracking-wider text-red-400">
            Mandatory Creditor Recovery Steps:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {activeScenario.creditorPlaybook.map((step, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 bg-slate-900/40 p-3 rounded-lg border border-slate-800/80"
              >
                <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Precedent & Impact Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-slate-700/60 text-xs">
          <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800">
            <span className="text-slate-400 block text-[10px] uppercase font-bold">
              Binding Judicial Precedent:
            </span>
            <span className="text-slate-200 font-semibold mt-0.5 block">
              {activeScenario.caseLawCitation}
            </span>
          </div>
          <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800">
            <span className="text-slate-400 block text-[10px] uppercase font-bold">
              Recoverable Financial Relief:
            </span>
            <span className="text-emerald-400 font-semibold mt-0.5 block">
              {activeScenario.financialImpact}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
