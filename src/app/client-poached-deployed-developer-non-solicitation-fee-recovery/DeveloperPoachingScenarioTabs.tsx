"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  tabLabel: string;
  title: string;
  badge: string;
  buyerProfile: string;
  pretext: string;
  legalReality: string;
  statutoryHook: string;
  actionProtocol: string[];
}

const SCENARIOS: Scenario[] = [
  {
    id: "linkedin-direct-applicant-defense",
    tabLabel: "1. The 'He Applied on LinkedIn' Pretext",
    title: "Client Directly Hires Deployed Lead Engineer & Claims: 'He Applied to Our Public Job Posting'",
    badge: "B2B Non-Hire vs Employee Non-Solicit",
    buyerProfile:
      "Enterprise client, funded SaaS company, or Global Capability Center (GCC) that enjoyed 12+ months of dedicated engineering from your senior full-stack developer.",
    pretext:
      "Upon discovering that your deployed Tech Lead has resigned and updated their LinkedIn profile as 'Full-Time Senior Engineer' at the client's entity, you demand the contractually stipulated 6-month billing conversion buyout fee (₹18 Lakh). The client's legal counsel replies: 'We did not solicit your employee. He applied independently to a public LinkedIn opening. Restraining him or demanding a fee violates Section 27 of the Indian Contract Act.'",
    legalReality:
      "This is the single most common legal bluff in IT staffing and outsourcing. Section 27 of the Indian Contract Act, 1872 invalidates post-employment non-compete agreements imposed on *employees* to restrict their livelihood. However, it does NOT invalidate a commercial B2B 'Non-Hire' or 'Placement/Conversion Buyout Fee' covenant executed between two corporate entities in a Master Services Agreement (MSA). As affirmed by Indian High Courts (including the Delhi High Court in Wipro Ltd. v. Beckman Coulter), an agreement between two businesses wherein one agrees not to hire the other's deployed staff without paying a liquidated transfer fee is commercially valid and enforceable under Section 74.",
    statutoryHook:
      "Indian Contract Act 1872 (ss. 73 & 74) + Commercial Courts Act 2015 s.2(1)(c)(xviii) + Delhi High Court Wipro v. Beckman Doctrine",
    actionProtocol: [
      "Extract the Master Services Agreement (MSA) or SOW 'Non-Solicitation and Resource Conversion / Buyout' clause specifying the exact fee formula (e.g., 6–12 months billing or 30% first-year CTC).",
      "Issue a formal advocate-drafted B2B Statutory Demand Notice to the client company—not threatening the developer, but demanding liquidated damages from the corporate counterparty.",
      "Rebut the Section 27 argument by establishing that the claim is purely a commercial debt enforcement between corporate peers under Section 74, with zero injunction sought against the individual's right to work.",
      "Initiate mandatory Section 12A Pre-Institution Commercial Mediation or invoke the MSA's dispute resolution/arbitration clause to enforce payment of the buyout invoice.",
    ],
  },
  {
    id: "shadow-agency-c2c-bypass",
    tabLabel: "2. Shadow Staffing & 1099 Pass-Through",
    title: "Client Routes Deployed Developer Through an Offshore Shell or Third-Party Payroll Vendor",
    badge: "Piercing the Corporate Bypass Veil",
    buyerProfile:
      "US/UK/EU enterprise buyer or domestic corporate attempting to bypass direct non-solicitation wording by routing payments through a freelance platform, intermediary recruiter, or local vendor.",
    pretext:
      "The client terminates your SOW citing 'project winding down' or 'budget cuts'. Within 30 days, your ex-developer is observed continuing active Git commits, attending the client's internal Slack/Teams channels, or invoicing the client through a third-party payroll agency (Employer of Record / C2C pass-through) to mask the direct hiring relationship.",
    legalReality:
      "Standard institutional MSAs include comprehensive anti-circumvention language prohibiting hiring 'directly or indirectly, through any affiliate, agent, contractor, or intermediary'. Even where language is basic, Indian courts apply the doctrine of piercing the corporate veil and enforce Section 73 expectation damages where bad-faith collusion to circumvent contractual obligations is demonstrated. The client remains liable for the full conversion buyout fee plus damages for breach of good faith.",
    statutoryHook:
      "Indian Contract Act 1872 ss.73 & 74 + Specific Relief Act 1963 s.10 + Information Technology Act 2000 s.65B / BSA 2023 s.63 Git Audit",
    actionProtocol: [
      "Collate cryptographic Git commit logs, PR approvals, Jira ticket assignments, and Slack directory exports proving the developer remained active on the client's codebase post-separation.",
      "Serve a formal Notice of Indirect Solicitation and Breach of MSA Covenants, identifying the pass-through vehicle as an alter-ego arrangement.",
      "Demand inspection of the client's vendor agreements or issue a Section 63 BSA certified evidentiary dossier demonstrating continuous technical engagement.",
      "Escalate to Commercial Summary Suit (Order XXXVII CPC) or international commercial arbitration based on the MSA dispute seat.",
    ],
  },
  {
    id: "post-termination-cooling-off",
    tabLabel: "3. Post-SOW Cooling-Off Breach",
    title: "Client Terminates SOW and Directly Onboards the Developer 60 Days Later During 12-Month Restraint",
    badge: "Survival Clause Enforcement",
    buyerProfile:
      "SaaS startup or mid-market corporate assuming that once the Statement of Work concludes, all restrictive covenants dissolve immediately.",
    pretext:
      "The SOW for a 9-month cloud migration concludes on December 31. On March 1, the client hires your DevOps engineer on full-time payroll. When billed the ₹15 Lakh conversion fee, the client argues: 'Our vendor relationship terminated in December. The SOW is expired, so non-solicitation obligations have lapsed.'",
    legalReality:
      "Commercial outsourcing agreements contain an explicit 'Survival of Covenants' clause dictating that Non-Solicitation, Confidentiality, and Resource Buyout provisions survive contract termination for a defined period (standardly 12 to 24 months). Because the client had privileged access to the engineer solely by virtue of the vendor's paid staffing deployment, the cooling-off window is legally binding. The vendor's right to liquidated conversion fees remains fully actionable within the statutory 3-year limitation window under Article 55 of the Limitation Act, 1963.",
    statutoryHook:
      "Limitation Act 1963 Art. 55 + Indian Contract Act 1872 s.74 + Survival Clause Interpretation in Commercial Contracts",
    actionProtocol: [
      "Audit the MSA 'Survival' clause to verify that restrictive covenants explicitly survive expiry or early termination of individual SOWs.",
      "Calculate the statutory 3-year limitation clock starting from the date of the engineer's unauthorized onboarding (or the date of discovery).",
      "Issue a formal commercial invoice for the conversion fee with 15-day statutory payment terms, coupled with a formal advocate legal notice.",
      "Reserve rights to claim additional consequential damages if the poached engineer possessed proprietary internal libraries, frameworks, or customer IP.",
    ],
  },
  {
    id: "penalty-vs-liquidated-damages",
    tabLabel: "4. The 'Unreasonable Penalty' Defense",
    title: "Client Acknowledges MSA Hiring Clause but Argues: '6 Months Billing is an Unenforceable Penalty'",
    badge: "Kailash Nath Section 74 Doctrine",
    buyerProfile:
      "Tier-1 Indian corporate or GCC vendor whose legal team attempts to knock down a ₹24 Lakh buyout fee by threatening prolonged litigation over 'actual loss proof'.",
    pretext:
      "The client admits hiring your data engineer but refuses to pay the contractually agreed 6-month billing buyout fee (₹24 Lakh). They claim: 'Under Indian law Section 74, you can only recover actual proven damages. Proving the loss of one engineer cannot exceed ₹1–2 Lakh in agency recruiter fees; your 6-month formula is a punitive penalty that courts will strike down.'",
    legalReality:
      "Under the Supreme Court's authoritative jurisprudence in Kailash Nath Associates v. DDA and ONGC v. Saw Pipes, where the exact measure of commercial damage is inherently difficult to prove (e.g., loss of specialized domain knowledge, client project continuity disruption, senior engineer replacement lead time of 90–120 days, and internal benchmarking costs), the agreed contractual figure is enforced as a 'genuine pre-estimate of loss'. An agreed fee of 6 to 12 months billing or 25%–35% of annual CTC is an established market standard and routinely sustained by arbitral tribunals and Commercial Courts as reasonable liquidated damages, not a penal forfeiture.",
    statutoryHook:
      "Supreme Court Kailash Nath Doctrine (2015) + ONGC v. Saw Pipes (2003) + Contract Act 1872 s.74 Genuine Pre-Estimate",
    actionProtocol: [
      "Present an itemized recruitment and institutional disruption ledger: sourcing fees, notice-pay buyouts, training and ramp-up hours, and gross margin loss during bench replacement.",
      "Demonstrate that the agreed conversion fee formula represented a negotiated commercial risk allocation agreed between experienced corporate entities with equal bargaining power.",
      "Issue an advocate notice warning that refusal to pay liquidated dues will escalate to Commercial Court litigation where court costs, interest at 18% p.a., and advocate fees will be claimed.",
      "Offer a structured 30-day pre-institution mediation window to capture a lump-sum conversion fee before instituting formal court recovery proceedings.",
    ],
  },
];

interface DeveloperPoachingScenarioTabsProps {
  className?: string;
}

export default function DeveloperPoachingScenarioTabs({
  className = "",
}: DeveloperPoachingScenarioTabsProps) {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const activeScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className={`w-full ${className}`}>
      {/* Tab Navigation Buttons */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-200 pb-3">
        {SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Card */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] border border-red-200">
            {activeScenario.badge}
          </span>
          <span className="text-[11px] text-slate-500 font-semibold">
            Target Counterparty: {activeScenario.buyerProfile.split(",")[0]}
          </span>
        </div>

        <h3 className="text-base sm:text-lg font-black text-slate-900 mb-3 leading-snug">
          {activeScenario.title}
        </h3>

        {/* Debtor Pretext Box */}
        <div className="mb-4 p-3.5 bg-amber-50/80 border-l-4 border-amber-500 rounded-r-xl">
          <span className="block text-[10px] font-black uppercase tracking-wider text-amber-800 mb-1">
            Debtor Client Pretext / Defense
          </span>
          <p className="text-xs sm:text-sm text-amber-900 leading-relaxed italic">
            &ldquo;{activeScenario.pretext}&rdquo;
          </p>
        </div>

        {/* Legal Reality & Statutory Doctrine */}
        <div className="mb-4 p-4 bg-white border border-slate-200 rounded-xl">
          <span className="block text-[10px] font-black uppercase tracking-wider text-[#DC2626] mb-1.5">
            Legal Reality &amp; Court Precedent
          </span>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
            {activeScenario.legalReality}
          </p>
        </div>

        {/* Statutory Hook */}
        <div className="mb-5 flex items-center gap-2 text-[11px] font-bold text-slate-600 bg-slate-100 px-3 py-2 rounded-lg">
          <span className="text-slate-400 uppercase tracking-widest text-[10px]">Statutory Hook:</span>
          <span className="text-slate-900">{activeScenario.statutoryHook}</span>
        </div>

        {/* Operational Action Protocol */}
        <div>
          <span className="block text-xs font-black uppercase tracking-wider text-slate-900 mb-2.5">
            Recommended Operational Escalation Protocol
          </span>
          <ul className="space-y-2">
            {activeScenario.actionProtocol.map((step, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
