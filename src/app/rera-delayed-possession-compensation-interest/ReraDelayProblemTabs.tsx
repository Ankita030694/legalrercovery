"use client";

import React, { useState } from "react";
import Link from "next/link";

interface ProblemTab {
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

const PROBLEMS: ProblemTab[] = [
  {
    id: "nominal-contract-penalty",
    tabLabel: "₹5/sq.ft Penalty Clause",
    title: "Builder Refuses Statutory Interest, Citing One-Sided ₹5/sq.ft Agreement Clause",
    cause:
      "Promoters frequently draft one-sided Builder-Buyer Agreements (BBA) imposing 18% penal interest on buyer payment delays, while capping builder delay liability at a nominal ₹5 or ₹10 per sq. ft. per month (an effective interest rate of barely 1% to 1.5% per annum). When possession is delayed, the builder mechanically tenders this token amount and refuses to pay RERA prescribed interest.",
    legalBasis:
      "In Pioneer Urban Land & Infrastructure Ltd. v. Govindan Raghavan (2019) 5 SCC 725 and Ireo Grace Realtech (2021), the Supreme Court held that one-sided agreements drafted by developers constitute unfair trade practices and are not binding on flat allottees. Furthermore, Section 89 of RERA, 2016 explicitly establishes that the provisions of RERA have overriding effect over any inconsistent agreement or contract. Statutory SBI MCLR + 2% per annum completely supersedes any lower contractual penalty.",
    steps: [
      {
        step: "Extract the Inconsistent Clause from Your BBA",
        description:
          "Highlight the possession date clause, the delayed compensation clause (e.g., ₹5/sq.ft), and the asymmetric buyer default interest rate (e.g., 18% or 24%).",
      },
      {
        step: "Issue Formal Statutory Section 18 Demand Notice",
        description:
          "Serve a formal advocate legal notice invoking Section 18(1) proviso, Section 89 of RERA, and Pioneer Urban, demanding recalibration of delay compensation to the statutory SBI MCLR + 2% benchmark.",
      },
      {
        step: "File Section 31 Complaint with State RERA Authority",
        description:
          "If the developer does not pay accrued delay interest within 15 days, file an online Form M complaint seeking direct adjudication and interest direction from the RERA bench.",
      },
    ],
    statutoryRule: "Section 18(1) & Section 89 RERA 2016; Pioneer Urban (2019) 5 SCC 725",
  },
  {
    id: "paper-possession-no-oc",
    tabLabel: "Possession Without OC",
    title: "Builder Issues Fit-Out or Paper Possession Notice Without Occupancy Certificate (OC)",
    cause:
      "To artificially halt the delay interest meter, developers often issue a premature 'Notice of Offer of Possession' or 'Fit-Out Possession Letter' demanding final milestone payments while the municipal Occupancy Certificate (OC) or Completion Certificate (CC) has not been granted by the local development authority.",
    legalBasis:
      "Under Section 11(4)(b) and Section 19(10) of RERA 2016, handing over physical possession is legally impermissible without a valid Occupancy Certificate issued by the competent planning authority. In Samruddhi Co-operative Housing Society v. Mumbai Mahalaxmi Construction (2022) SCC OnLine SC 35, the Supreme Court confirmed that failure to obtain an OC is a continuous wrong and deficiency of service. Delay interest continues to run until a lawful OC is secured and formal physical possession is tendered.",
    steps: [
      {
        step: "Demand Verified Certified Copy of Occupancy Certificate",
        description:
          "Respond in writing refusing to take premature possession or pay final balance dues until the builder furnishes the sanctioned OC reference number and authority stamp.",
      },
      {
        step: "Document Site Incompletion & Civic Infrastructure Deficits",
        description:
          "Photograph pending lifts, fire safety installations, electricity transformers, and sewage connections to establish that the building is legally and physically uninhabitable.",
      },
      {
        step: "File RERA Injunction & Enforcement of Delay Interest",
        description:
          "Petition the RERA Authority to penalise the builder for illegal pre-OC possession offers and direct ongoing delay interest until lawful OC handover.",
      },
    ],
    statutoryRule: "Section 11(4)(b) & Section 19(10) RERA 2016; Samruddhi CHS (2022) SC",
  },
  {
    id: "false-force-majeure",
    tabLabel: "False Force Majeure",
    title: "Builder Claims Approval Delays, NGT Bans or Pandemic as Blanket Force Majeure",
    cause:
      "Promoters routinely deploy boiler-plate defense letters attributing project paralysis to NGT construction bans during winter pollution, contractor labor shortages, water supply connection delays, or ongoing litigation with third-party vendors, claiming these constitute 'Force Majeure' exempting them from Section 18 liability.",
    legalBasis:
      "Section 6 of RERA strictly defines Force Majeure as war, flood, drought, fire, cyclone, earthquake, or any other calamity caused by nature affecting normal development. Commercial delays, standard regulatory approval processing times, contractor disputes, and local zoning hurdles are internal promoter management risks and cannot be foisted onto allottees. The National RERA Appellate Tribunals have consistently ruled that routine administrative delays do not qualify as Force Majeure.",
    steps: [
      {
        step: "Scrutinize RERA Project Extension Filings",
        description:
          "Search your state RERA portal (e.g., MahaRERA, UP RERA, HRERA) to check whether the builder applied for and received any statutory Section 6 extension orders.",
      },
      {
        step: "Challenge Unilateral Force Majeure Declarations",
        description:
          "Point out in your statutory legal notice that routine civic clearances and supplier defaults are promoter commercial obligations, not natural calamities under Section 6.",
      },
      {
        step: "Secure Unconditional Delay Compensation",
        description:
          "Cite Supreme Court ruling in Newtech Promoters (2021) confirming that the allottee's statutory right to delay interest under Section 18 is unconditional.",
      },
    ],
    statutoryRule: "Section 6 & Section 18 RERA 2016; Newtech Promoters (2021) SC",
  },
  {
    id: "subvention-emi-default",
    tabLabel: "Subvention EMI Default",
    title: "Builder Defaulted on Pre-EMIs in a Tripartite Subvention Scheme During Project Delay",
    cause:
      "In 10:80:10 or 20:80 subvention schemes, the developer promises to service the buyer's home loan interest (Pre-EMIs) until actual possession. When the project gets delayed, the builder abruptly stops paying the bank, resulting in automatic EMI debits from the buyer's personal account, bank recovery harassment, and catastrophic CIBIL score destruction.",
    legalBasis:
      "In landmark orders by the Delhi High Court and state RERA authorities, banks and developers have been held jointly accountable when funds were disbursed upfront without construction linkage in violation of RBI Master Circulars. Furthermore, the builder's default in paying promised Pre-EMIs triggers actionable breach under Section 18, entitling the buyer to immediate reimbursement and RERA stay against coercive bank recovery.",
    steps: [
      {
        step: "Issue Coordinated Notice to Builder & Lending Bank",
        description:
          "Serve a joint statutory notice demanding the builder immediately clear overdue Pre-EMIs and restraining the bank from reporting negative remarks to credit bureaus (CIBIL/Experian).",
      },
      {
        step: "Seek Interim Protective Injunction Before RERA",
        description:
          "File an urgent interim application under Section 36 of RERA to restrain the lending institution from enforcing coercive EMIs against the buyer during promoter default.",
      },
      {
        step: "Review Our In-Depth Subvention Recovery Guide",
        description:
          "Follow our step-by-step framework on handling bank subvention defaults, RBI disbursal circulars, and RERA Section 18 claims.",
      },
    ],
    statutoryRule: "Section 18 & Section 36 RERA 2016; RBI Circular DBOD.BP.BC.No. 51/2013-14",
  },
  {
    id: "adjustment-vs-monthly-payout",
    tabLabel: "Adjustment vs Cash Payout",
    title: "Builder Insists on 'Adjusting' Delay Compensation Only at Final Conveyance",
    cause:
      "Developers frequently acknowledge delay liability in principle but insist that interest will only be adjusted as an offset against final balance dues (IFMS, club charges, stamp duty, meter charges) when the flat is finally ready, depriving the homebuyer of liquidity while they continue paying both rent and home loan EMIs.",
    legalBasis:
      "Section 18(1) proviso explicitly prescribes that the promoter 'shall be paid, by the promoter, interest for every month of delay, till the handing over of the possession'. The statutory mandate is for periodic, monthly interest compensation. While mutual adjustment against verified final demands is permissible at the time of final settlement, the promoter cannot unilaterally withhold accrued compensation for years while the buyer bleeds financially.",
    steps: [
      {
        step: "Quantify Accrued Delay Interest to Date",
        description:
          "Calculate the exact interest accrued from the promised possession date up to the current month using the SBI MCLR + 2% formula on total paid principal.",
      },
      {
        step: "Demand Immediate Bank Transfer or Structured Adjustment",
        description:
          "Submit a formal demand requesting immediate electronic transfer of accrued arrears or a formal legally binding credit note signed by the developer.",
      },
      {
        step: "File Execution Application for Monthly Disbursement",
        description:
          "Request the RERA bench to direct the builder to disburse monthly delay interest directly into your bank account on or before the 10th of every calendar month until OC.",
      },
    ],
    statutoryRule: "Section 18(1) Proviso RERA 2016; UP RERA & MahaRERA Benchmark Rulings",
  },
];

export default function ReraDelayProblemTabs() {
  const [activeTab, setActiveTab] = useState(PROBLEMS[0].id);
  const currentProblem = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 md:p-8">
      <div className="mb-6">
        <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
          Interactive Scenario Navigator
        </span>
        <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
          5 Common Builder Delay Tactics &amp; How RERA Overrides Them
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Click any scenario below to uncover the statutory loophole builders exploit, the overriding Supreme Court case law, and your concrete 3-step counter-strategy.
        </p>
      </div>

      {/* Tab Navigation Pill Bar */}
      <div className="flex flex-wrap gap-2 pb-4 border-b border-slate-200">
        {PROBLEMS.map((problem) => {
          const isActive = problem.id === activeTab;
          return (
            <button
              key={problem.id}
              type="button"
              onClick={() => setActiveTab(problem.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-150 cursor-pointer ${
                isActive
                  ? "bg-amber-600 text-white shadow-md shadow-amber-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {problem.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Content Display Area */}
      <div className="mt-6 space-y-6">
        <div>
          <span className="inline-block text-[11px] font-extrabold uppercase tracking-wide text-amber-800 bg-amber-100/70 px-2.5 py-0.5 rounded-md mb-2">
            Statutory Rule: {currentProblem.statutoryRule}
          </span>
          <h4 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
            {currentProblem.title}
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <h5 className="text-xs font-bold uppercase tracking-wider text-red-700 mb-2 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
              The Builder&apos;s Tactic / Excuses
            </h5>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentProblem.cause}
            </p>
          </div>

          <div className="bg-amber-50/60 border border-amber-200/80 rounded-xl p-4">
            <h5 className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-2 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
              The Supreme Court &amp; RERA Counter-Law
            </h5>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {currentProblem.legalBasis}
            </p>
          </div>
        </div>

        <div>
          <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
            Actionable 3-Step Counter-Strategy:
          </h5>
          <div className="space-y-3">
            {currentProblem.steps.map((s, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm"
              >
                <div className="w-6 h-6 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">
                  {idx + 1}
                </div>
                <div>
                  <p className="font-bold text-slate-900">{s.step}</p>
                  <p className="text-slate-600 mt-0.5 leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {currentProblem.id === "subvention-emi-default" && (
          <div className="pt-2">
            <Link
              href="/subvention-scheme-pre-emi-builder-default"
              className="inline-flex items-center text-xs font-bold text-amber-700 hover:text-amber-900 underline underline-offset-2"
            >
              Read full legal guide on Subvention Scheme Pre-EMI Builder Defaults →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
