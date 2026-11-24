"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  tabLabel: string;
  title: string;
  badge: string;
  subcontractorProfile: string;
  pretext: string;
  legalReality: string;
  statutoryHook: string;
  actionProtocol: string[];
}

const SCENARIOS: Scenario[] = [
  {
    id: "us-agency-collects-and-ghosts",
    tabLabel: "1. Prime Collects & Ghosts",
    title: "US/Metro Prime Agency Collects 100% SOW Milestone from Enterprise Client and Cuts Off Indian Dev Shop",
    badge: "Copyright Act s.19 & Criminal Breach of Trust BNS s.316",
    subcontractorProfile:
      "Tier-2 Indian software agency (Pune, Ahmedabad, Indore, Kochi, or Jaipur) delivering full-stack web, AI workflow, or Flutter/React Native application under a white-label subcontract.",
    pretext:
      "The prime agency based in Delaware, New York, or Bengaluru wins an enterprise client contract for $120,000 (~₹1.0 Crore) and subcontracts the core engineering to an Indian dev shop for ₹35 Lakh under a strict White-Label Master Services Agreement (MSA) with reciprocal NDAs. The dev shop ships Release Candidate 1.0, assists with AWS cloud deployment, and hands over documentation. The prime agency bills the end-client and collects the final $45,000 disbursement. Immediately after receiving funds, the prime agency's directors cease answering Slack, archive Jira boards, disconnect phone lines, and withhold the final ₹14.5 Lakh milestone owed to the Indian dev shop.",
    legalReality:
      "Under Section 19 of the Copyright Act, 1957, an assignment of copyright in software code is legally conditional on payment of the agreed consideration. When the prime agency defaults on payment, copyright title never vests in the prime agency—meaning the prime agency has fraudulently warranted to the end-client that it has conveyed clean, unencumbered intellectual property. Furthermore, collecting funds specifically ear-marked for subcontractor deliverables and siphoning them constitutes Criminal Breach of Trust under Section 316 of Bharatiya Nyaya Sanhita, 2023 (BNS) / Section 405 IPC, alongside civil debt liabilities.",
    statutoryHook:
      "Copyright Act 1957 ss. 17 & 19 + Bharatiya Nyaya Sanhita 2023 s.316 (Criminal Breach of Trust) + Commercial Courts Act 2015 s.2(1)(c)(xviii)",
    actionProtocol: [
      "Compile repository telemetry: Git commit logs with developer PGP signatures, pull request approvals, Jira task exports, and staging server deploy logs under BSA 2023 Section 63.",
      "Issue a formal Fact-Verified Demand Notice to the prime agency demanding ₹14.5 Lakh plus 18% interest within 10 days, explicitly stating that copyright has not transferred under Section 19.",
      "Put the prime agency on formal notice that continued unencumbered commercial use by their end-client triggers contributory copyright infringement under Section 51 of the Copyright Act.",
      "Reserve the statutory right to serve an IP Encumbrance Disclosure on the end-client and file an emergency Section 9 / Order 38 interim injunction to freeze delinquent agency receivables.",
    ],
  },
  {
    id: "back-to-back-paid-when-paid-trap",
    tabLabel: "2. The 'Paid-When-Paid' Trap",
    title: "Prime Agency Cites 'Back-to-Back Payment Terms' Claiming End-Client Has Not Disbursed Milestones",
    badge: "Contract Act s.32 & MSMED Act s.15 Statutory Override",
    subcontractorProfile:
      "B2B software consulting house, cloud devops boutique, or QA automation team working on 30-day or 45-day payment cycles.",
    pretext:
      "The prime agency signs an MSA containing a boilerplate clause: 'Subcontractor invoices shall be cleared within 7 days of Prime receiving corresponding milestone funds from End-Client.' Three months after deliverable acceptance, the prime agency refuses to pay ₹18.2 Lakh of overdue invoices, claiming: 'The US client is facing restructuring and has delayed our payout; since our agreement is back-to-back, our obligation to pay you has not matured.' However, the prime agency refuses to provide client correspondence, bank statements, or proof of an actual dispute.",
    legalReality:
      "Under Indian contract jurisprudence, 'paid-when-paid' clauses are construed as timing mechanisms (fixing a reasonable window for payment), not absolute conditions precedent ('paid-if-paid') that forfeit subcontractor fees. If the prime agency failed to enforce against the client or acted negligently, they cannot transfer operational insolvency risk onto the dev shop under Section 32 and Section 73 of the Indian Contract Act, 1872. Furthermore, if the dev shop is an MSME registered under the MSMED Act, 2006, Section 15 and Section 24 create an overriding statutory mandate: payment CANNOT exceed 45 days regardless of contrary private contract terms.",
    statutoryHook:
      "MSMED Act 2006 ss. 15, 16 & 24 (Statutory Override of Inconsistent Clauses) + Indian Contract Act 1872 ss. 32 & 73",
    actionProtocol: [
      "Demand immediate disclosure of the prime agency's master contract with the end-client, invoice submission dates, and written proof of any formal dispute raised by the client.",
      "Issue a formal statutory notice establishing that the 'paid-when-paid' clause cannot extinguish liability beyond a reasonable 45-day commercial window under Contract Act Section 46.",
      "If MSME-registered, invoke Section 24 of the MSMED Act to override the back-to-back clause and demand compounding monthly interest at 3x RBI Bank Rate from Day 46.",
      "Initiate MSEFC conciliation proceedings or file an Order XXXVII Summary Suit in the Commercial Court to compel immediate admission of the debt.",
    ],
  },
  {
    id: "nda-gag-order-extortion",
    tabLabel: "3. NDA Gag & Lawsuit Threats",
    title: "Prime Agency Threatens Dev Shop with Multi-Million Rupee NDA & Non-Solicitation Lawsuits if They Demand Dues",
    badge: "Specific Relief Act s.41(h) & Contract Act s.27 / s.28",
    subcontractorProfile:
      "Mobile app or custom SaaS dev shop seeking to verify whether the enterprise client actually approved deliverables and paid the prime agency.",
    pretext:
      "When the dev shop threatens legal action or hints at contacting the end-client to verify deployment status, the prime agency's legal counsel sends an aggressive cease-and-desist letter: 'Your white-label NDA and non-solicitation agreement strictly prohibit disclosing your involvement or contacting our client for any purpose. Any contact will trigger an immediate ₹5 Crore damages claim and emergency high court injunction for breach of trade secrets.' Intimidated by the threat, the dev shop founders hesitate to pursue their ₹22 Lakh legitimate debt.",
    legalReality:
      "An NDA or non-compete clause cannot be weaponized as an instrument of fraud to shelter an intentional commercial default. Under Section 28 of the Indian Contract Act, agreements restraining a party from enforcing their legal rights in courts are void to that extent. While a dev shop cannot solicit the client's business or misappropriate trade secrets, asserting copyright ownership in unpaid code or naming the end-client as a co-defendant / necessary party in an infringement suit is a constitutionally protected legal remedy under Section 41(h) of the Specific Relief Act, 1963.",
    statutoryHook:
      "Indian Contract Act 1872 s.28 (Agreements Restraining Legal Proceedings Void) + Copyright Act 1957 s.51 + Specific Relief Act 1963 s.41(h)",
    actionProtocol: [
      "Refrain from sending uncoordinated, informal emails or LinkedIn messages directly to the end-client that could be mischaracterized as tortious interference with contract.",
      "Serve a Fact-Verified Notice on the prime agency pointing out that an unperformed contract forfeits the right of equitable relief under the doctrine of 'Clean Hands'.",
      "Draft a formal 'Notice of Third-Party IP Impairment' to be served jointly on the prime agency and the end-client in the capacity of copyright holder, not as a competing agency.",
      "File a pre-institution mediation petition under Section 12A of the Commercial Courts Act, 2015, putting the entire dispute onto formal judicial record without violating confidentiality.",
    ],
  },
  {
    id: "scope-squeeze-and-margin-erosion",
    tabLabel: "4. Scope Squeeze & Defect Fabrications",
    title: "Prime Agency Squeezes Subcontractor Margin by Passing On Unbilled Client Revisions as 'Subcontractor Bugs'",
    badge: "Contract Act s.70 (Quantum Meruit) & Sale of Goods Act s.42",
    subcontractorProfile:
      "Dedicated developer team or agile dev shop contracted on a fixed-bid or capped-hours milestone arrangement.",
    pretext:
      "The prime agency underquoted the enterprise client to win a competitive RFP. When the client demands extensive architecture redesigns and new third-party integrations during beta testing, the prime agency conceals its own poor scoping. Instead of issuing a billable Change Order to the client, the prime agency falsely re-labels every client feature request as a 'critical subcontractor defect' and refuses to disburse the milestone payment of ₹11.8 Lakh until the dev shop completes 250+ unbudgeted engineering hours for free.",
    legalReality:
      "Under Section 70 of the Indian Contract Act (Quantum Meruit), whenever a party performs non-gratuitous services outside the agreed scope, the recipient must pay reasonable compensation. A subcontracted dev shop is strictly bound only to the technical specifications set forth in its own Statement of Work (SOW), not to whatever informal verbal promises the prime agency's account executive made to the end-client. Conflating out-of-scope client feature requests with contractual code defects constitutes a bad-faith breach of contract.",
    statutoryHook:
      "Indian Contract Act 1872 ss. 70 & 73 (Quantum Meruit & Damages) + Commercial Courts Act 2015 s.2(1)(c)(xviii)",
    actionProtocol: [
      "Conduct an exhaustive Line-Item SOW Reconciliation: Map every Jira ticket against the baseline Functional Specification Document (FSD) and signed SOW milestones.",
      "Categorize all disputed items into 'Scope Defect' vs 'Out-of-Scope Change Request' backed by Git commit hashes and client requirement sign-offs.",
      "Issue a formal Notice of Scope Segregation demanding payment of the delivered baseline milestone within 10 days.",
      "Stipulate that any further engineering hours on unbudgeted change requests will require an executed, prepaid Change Order at standard commercial man-hour rates.",
    ],
  },
];

export default function WhiteLabelScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const currentScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
      {/* Tab Navigation */}
      <div className="bg-slate-900 p-2 sm:p-3 overflow-x-auto flex gap-1.5 sm:gap-2 border-b border-slate-800 scrollbar-thin">
        {SCENARIOS.map((sc) => {
          const isActive = sc.id === activeTab;
          return (
            <button
              key={sc.id}
              type="button"
              onClick={() => setActiveTab(sc.id)}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-950/40"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              {sc.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Content */}
      <div className="p-5 sm:p-7 md:p-8 space-y-6">
        <div>
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] border border-red-200 mb-3">
            {currentScenario.badge}
          </span>
          <p className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
            {currentScenario.title}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
              Subcontractor Profile
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentScenario.subcontractorProfile}
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
              Statutory Enforcement Ground
            </p>
            <p className="text-xs sm:text-sm text-[#DC2626] font-semibold leading-relaxed">
              {currentScenario.statutoryHook}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-amber-50/70 border-l-4 border-amber-500 p-4 rounded-r-xl">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-1">
              The Delinquent Pretext &amp; Commercial Bottleneck
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentScenario.pretext}
            </p>
          </div>

          <div className="bg-blue-50/70 border-l-4 border-blue-600 p-4 rounded-r-xl">
            <p className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-1">
              Judicial Reality &amp; Subcontractor Rights
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentScenario.legalReality}
            </p>
          </div>
        </div>

        {/* Action Protocol Checklist */}
        <div className="bg-slate-900 text-white rounded-xl p-5 border border-slate-800">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-red-400 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            Immediate 4-Step Operational Escalation Protocol
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentScenario.actionProtocol.map((step, idx) => (
              <div key={idx} className="flex items-start gap-2.5 bg-slate-800/80 p-3 rounded-lg border border-slate-700/60">
                <span className="shrink-0 w-5 h-5 rounded-full bg-[#DC2626] text-white text-[10px] font-bold flex items-center justify-center mt-0.5">
                  {idx + 1}
                </span>
                <p className="text-xs text-slate-200 leading-relaxed">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
