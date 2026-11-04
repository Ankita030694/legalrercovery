"use client";

import React, { useState } from "react";
import Link from "next/link";

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
    id: "upfront-disbursal",
    tabLabel: "Upfront Bank Disbursal",
    title: "Bank Disbursed 75%–90% of Home Loan Upfront While Construction Barely Started",
    cause:
      "Under 80:20 or 75:25 subvention schemes, the bank or Housing Finance Company (HFC) released almost the entire sanctioned loan directly to the builder within weeks of signing the Tripartite Agreement, even though only excavation or plinth work existed on site. Once the builder siphoned the funds and halted construction, the bank demanded full EMIs from the homebuyer.",
    legalBasis:
      "RBI Circular DBOD.BP.BC.No.51/08.12.015/2013-14 (dated 03.09.2013) and NHB Policy Circular No. 88 (dated 19.07.2019) strictly mandate that housing loan disbursements must be linked to verified stages of construction. In Bikram Chatterji v. Union of India (2019) 19 SCC 161 and Himanshu Singh v. Union of India (SLP (C) No. 7649/2023), the Supreme Court held that banks releasing lump-sum funds upfront violate statutory RBI norms and cannot shift the penalty of their collusion onto innocent homebuyers.",
    steps: [
      {
        step: "Demand the Loan Disbursal Ledger & Architect Stage Certificates",
        description:
          "Serve a written disclosure demand on the bank branch and Nodal Officer asking for the exact dates of tranche releases and copies of the bank's independent site engineer progress reports.",
      },
      {
        step: "Serve a Dual Legal Notice Citing RBI Circular dated 03.09.2013",
        description:
          "Put both the builder and the bank on formal notice: hold the builder liable for unpaid Pre-EMIs under the Tripartite Agreement and hold the bank accountable for unauthorized upfront disbursement.",
      },
      {
        step: "Lodge an RBI CMS Ombudsman Complaint & RERA Petition",
        description:
          "File a complaint on cms.rbi.org.in for violation of RBI Housing Finance Master Directions alongside a Section 18/31 RERA complaint seeking builder liability for the entire bank loan.",
      },
    ],
    statutoryRule: "RBI Circular DBOD.BP.BC.No.51/2013-14 & SC Order in Himanshu Singh (2024–2025)",
  },
  {
    id: "cibil-ecs-bounce",
    tabLabel: "CIBIL Drop & ECS Threats",
    title: "Bank Triggering NACH Auto-Debits, Section 138 / Section 25 Notices & Ruining CIBIL Score",
    cause:
      "After the builder stops servicing Pre-EMIs, the bank's automated system hits the homebuyer's salary account via NACH/ECS mandates. When the buyer stops or lacks balance for ₹40,000–₹80,000 monthly debits on an unbuilt flat, the bank levies bounce charges, reports '90+ DPD / Written-Off / SMA-2' to TransUnion CIBIL, and threatens criminal prosecution under Section 138 NI Act or Section 25 of the Payment and Settlement Systems Act, 2007.",
    legalBasis:
      "In the batch petitions led by Himanshu Singh v. Union of India and related Delhi High Court / Supreme Court interim directions, courts have repeatedly restrained banks and HFCs from taking coercive recovery action—including Section 138 NI Act / Section 25 PSS Act complaints, SARFAESI notices, and negative CIBIL reporting—where the builder defaulted on subvented Pre-EMIs after upfront loan disbursal.",
    steps: [
      {
        step: "Serve Formal Representation to Bank & Credit Information Companies (CICs)",
        description:
          "Notify the bank's Principal Nodal Officer and TransUnion CIBIL in writing under the Credit Information Companies (Regulation) Act, 2005 that the loan account is under a subvention builder-default dispute.",
      },
      {
        step: "Reply to Any Section 138 or Section 25 Notice Within 15 Days",
        description:
          "Never ignore a cheque or NACH bounce notice. Have an advocate serve a statutory reply placing the Tripartite Agreement, builder Pre-EMI indemnity clause, and RBI circular breach on record.",
      },
      {
        step: "Seek Interim Restraint Before State RERA or Consumer Commission",
        description:
          "Under Section 36 of RERA 2016 or Section 38(8) of the Consumer Protection Act, 2019, apply for an interim order directing the builder to pay ongoing Pre-EMIs and restraining coercive recovery.",
      },
    ],
    statutoryRule: "Section 36 RERA 2016, CICRA 2005 & Supreme Court Anti-Coercion Mandates",
  },
  {
    id: "rera-refund-interest",
    tabLabel: "Exit & 100% RERA Refund",
    title: "Homebuyer Wants to Cancel the Flat Booking and Exit the Subvention Trap Completely",
    cause:
      "The possession deadline in the Builder-Buyer Agreement (BBA) has expired by 2 to 6 years. The project is a concrete shell, the builder has stopped paying Pre-EMIs, and the homebuyer no longer wants the flat—they want their 10%–20% down payment back, reimbursement of every EMI forced on them, and complete closure of the bank loan.",
    legalBasis:
      "Under Section 18(1) of RERA 2016 and the Supreme Court 3-Judge Bench judgment in Newtech Promoters and Developers Pvt. Ltd. v. State of UP (2021) 18 SCC 1, an allottee's right to cancel and demand a full refund with statutory interest (SBI MCLR + 2%) is unconditional once possession is delayed. State RERA authorities (UP RERA, MahaRERA, HRERA) routinely direct the builder to refund the buyer's own contribution with interest AND liquidate the bank's principal + Pre-EMI dues directly.",
    steps: [
      {
        step: "Serve a Statutory Cancellation & Refund Notice Under Section 18 RERA",
        description:
          "Formally terminate the allotment for breach of the possession timeline and subvention obligation, revoking any builder right to deduct forfeiture charges.",
      },
      {
        step: "File Section 31 Complaint Before State RERA or e-Jagriti",
        description:
          "Array both the Promoter (Builder) and the Lending Bank/HFC as respondents so the final decree directs the builder to close the bank's loan account and issue a No-Dues Certificate (NDC).",
      },
      {
        step: "Enforce Unpaid Orders via Section 40 Recovery Certificate (RC)",
        description:
          "If the builder fails to pay within 45 days of the RERA decree, apply under Section 40(1) RERA for a Recovery Certificate so the District Collector attaches the builder's bank accounts and land as arrears of land revenue.",
      },
    ],
    statutoryRule: "Section 18 & Section 40 RERA 2016; Newtech Promoters (2021) 18 SCC 1",
  },
  {
    id: "builder-in-nclt",
    tabLabel: "Builder in NCLT / Stalled",
    title: "Builder Enters Insolvency (NCLT / CIRP) Under Section 7 IBC While Bank Chases Buyer",
    cause:
      "The developer company is admitted into Corporate Insolvency Resolution Process (CIRP) before the National Company Law Tribunal (NCLT), and a Section 14 moratorium is declared. While RERA execution against the builder pauses during moratorium, the bank continues calling the homebuyer for monthly EMIs because the Section 14 moratorium applies to the corporate debtor (builder), not the individual borrower.",
    legalBasis:
      "Under Section 5(8)(f) of the Insolvency and Bankruptcy Code, 2016 (as upheld in Pioneer Urban Land & Infrastructure Ltd. v. Union of India, (2019) 8 SCC 416), homebuyers are recognized as Financial Creditors. Simultaneously, where the bank violated RBI's stage-linked disbursal circular in a tripartite subvention scheme, buyers can challenge the bank's recovery before Consumer Commissions / High Courts and file Form CA with the Interim Resolution Professional (IRP) covering both down payment and subvented loan liability.",
    steps: [
      {
        step: "File Claim in Form CA Before the NCLT Resolution Professional (IRP/RP)",
        description:
          "Submit your financial creditor claim in Form CA attaching the Builder-Buyer Agreement, Tripartite Agreement, payment receipts, and bank loan statement with 8% statutory IBC interest calculation.",
      },
      {
        step: "Serve Regulatory Notice on the Bank Contesting Unlinked Disbursal",
        description:
          "Put the bank on formal notice that since it disbursed funds to an insolvent builder without verifying construction stages under the Tripartite Agreement, it must recover the subvented defaults under its builder mortgage/indemnity.",
      },
      {
        step: "Pursue Non-Moratorium Remedies Against Promoters & Bank Deficiency",
        description:
          "While Section 14 IBC shields the corporate builder during CIRP, consumer deficiency claims against the bank for illegal upfront disbursal remain maintainable.",
      },
    ],
    statutoryRule: "Section 5(8)(f) & Section 14 IBC 2016; Pioneer Urban Land (2019) 8 SCC 416",
  },
];

export default function SubventionScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const activeScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm">
      {/* Tab Buttons */}
      <div className="flex flex-wrap gap-2 pb-4 border-b border-slate-100" role="tablist" aria-label="Subvention Dispute Scenarios">
        {SCENARIOS.map((scenario) => (
          <button
            key={scenario.id}
            type="button"
            role="tab"
            aria-selected={activeTab === scenario.id}
            onClick={() => setActiveTab(scenario.id)}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === scenario.id
                ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {scenario.tabLabel}
          </button>
        ))}
      </div>

      {/* Tab Content Panel */}
      <div className="pt-5 space-y-4" role="tabpanel">
        <div>
          <span className="inline-block px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-black uppercase tracking-wider bg-red-50 text-red-700 border border-red-200 mb-2">
            Statutory Mandate: {activeScenario.statutoryRule}
          </span>
          <h3 className="text-base sm:text-lg md:text-xl font-extrabold text-slate-900">
            {activeScenario.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1.5">
            <strong className="text-slate-900 font-bold block text-xs uppercase tracking-wider">
              How the Subvention Trap Unfolds
            </strong>
            <p className="leading-relaxed">{activeScenario.cause}</p>
          </div>

          <div className="p-4 bg-amber-50/70 rounded-xl border border-amber-200/80 space-y-1.5 text-amber-950">
            <strong className="text-amber-900 font-bold block text-xs uppercase tracking-wider">
              Governing Law &amp; Supreme Court Shield
            </strong>
            <p className="leading-relaxed">{activeScenario.legalBasis}</p>
          </div>
        </div>

        {/* Action Steps */}
        <div className="space-y-2.5 pt-2">
          <strong className="text-xs uppercase tracking-wider font-extrabold text-slate-900 block">
            3-Step Legal Remedy for This Scenario:
          </strong>
          <div className="grid grid-cols-1 gap-2.5">
            {activeScenario.steps.map((st, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3 bg-white rounded-xl border border-slate-200/90 shadow-2xs"
              >
                <span className="shrink-0 w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">{st.step}</h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{st.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 text-xs text-slate-500">
          Want to cancel your delayed flat booking and claim 100% refund with interest? Read our{" "}
          <Link href="/builder-booking-cancellation-refund-legal-notice" className="text-blue-700 underline font-semibold">
            builder booking cancellation refund legal notice guide
          </Link>{" "}
          or stop illegal auto-debits using our{" "}
          <Link href="/legal-notice-to-bank-unauthorized-ecs-nach-debit-reversal" className="text-blue-700 underline font-semibold">
            unauthorized ECS / NACH debit reversal guide
          </Link>
          .
        </div>
      </div>
    </div>
  );
}
