"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  tabLabel: string;
  title: string;
  statutoryHook: string;
  challenge: string;
  remedy: string;
  actionItems: string[];
  precedentRef: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "nri-absconded-unsecured",
    tabLabel: "NRI Unsecured ≤₹7.5L",
    title: "Student Relocated Abroad, Disconnected Indian SIM & Unsecured Loan Covered Under CGFSEL",
    statutoryHook: "Contract Act s.43, CPC O.V R.25, BSA s.63 & CGFSEL Norms",
    challenge:
      "After graduation in the UK, Canada, Germany, or the US, the student stops EMI payments after moratorium expiry and abandons their registered Indian mobile number. Because loans up to ₹7.5 Lakh under the IBA Model Education Loan Scheme are collateral-free, branches hesitate to litigate abroad and risk missing CGFSEL guarantee claim initiation windows.",
    remedy:
      "Do not wait for overseas physical tracing. Under Section 43 of the Indian Contract Act, 1872, the Indian parent or earning guardian who executed the loan agreement as co-borrower / co-obligor carries joint and several primary liability. Simultaneously dispatch a BSA s.63-logged legal recall notice via Email + WhatsApp to the student's university/personal IDs and Speed Post RPAD to the parent co-applicant in India, followed by Pre-Litigation Lok Adalat or Order XXXVII CPC summary recovery to preserve CGFSEL 75% claim eligibility.",
    actionItems: [
      "Audit NCGTC / CGFSEL guarantee enrollment certificate and confirm the account has been classified NPA for the mandatory cooling period without waiving legal-action prerequisites.",
      "Serve simultaneous recall-cum-demand notices on the student (registered personal + alumni/employer email & international WhatsApp) and the Indian parent co-obligor (RPAD + Email + WhatsApp).",
      "Generate a consolidated BSA 2023 Section 63 electronic service certificate capturing SMTP message-IDs, WhatsApp delivery/read metadata, and India Post consignment tracking.",
      "List the sub-₹7.5 Lakh account in the next Pre-Litigation National Lok Adalat (zero court fee) or file an Order XXXVII CPC Summary Suit against the Indian co-obligor to secure an executable decree and lodge the CGFSEL claim.",
    ],
    precedentRef: "State Bank of India v. Indexport Registered (1992) 3 SCC 159 & SC Suo Motu WP(C) 3/2020 (Electronic Service)",
  },
  {
    id: "overseas-collateral-20l-plus",
    tabLabel: "Overseas Secured >₹20L",
    title: "High-Ticket ₹20L–₹1.5 Cr Foreign University Loan Backed by Parents' Indian Residential Mortgage",
    statutoryHook: "SARFAESI s.13(2)/s.14, RDB Act s.19 (DRT) & Contract Act s.43",
    challenge:
      "Families mortgage urban residential flats or ancestral plots in India to finance ₹25 Lakh–₹1.2 Crore Ivy League, MBA, or STEM Master's loans. When the graduate faces post-study visa delays or overseas job loss, the parent mortgagors file DRT Securitisation Applications (SA) alleging that SARFAESI Section 13(2) notices were never served on the student abroad.",
    remedy:
      "Eliminate Rule 3 Security Interest (Enforcement) Rules technical defects upfront. Serve the 60-day SARFAESI Section 13(2) notice simultaneously via Registered Post/Courier to the overseas student's last known foreign address (plus verified email/WhatsApp under Rule 3(1) electronic mode), and via Speed Post RPAD + hand delivery/affixation to the parent co-obligors/mortgagors in India. In parallel for accounts ≥ ₹20 Lakh, file an e-DRT Section 19 Original Application seeking immediate attachment before judgment over non-mortgaged Indian fixed deposits and rental income.",
    actionItems: [
      "Confirm CERSAI Asset ID registration (SARFAESI s.26D) and RBI-compliant separation of uncompounded penal charges from contractual interest before issuing the s.13(2) notice.",
      "Dispatch dual-jurisdiction Section 13(2) demand notices to both the overseas student (international courier + email/WhatsApp) and Indian mortgagor-parents; publish Rule 3(1) newspaper notices if postal service returns unclaimed.",
      "Dispose of any Section 13(3A) representation requesting moratorium extension with a reasoned speaking order within exactly 15 days.",
      "Proceed smoothly to Section 13(4) symbolic possession and Section 14 DM/CMM physical possession while running parallel e-DRT s.19 recovery for any post-auction shortfall.",
    ],
    precedentRef: "Industrial Investment Bank of India Ltd. v. Biswanath Jhunjhunwala (2009) 9 SCC 478 (Co-Extensive Liability)",
  },
  {
    id: "salaried-co-applicant-garnishee",
    tabLabel: "Salaried Parent / Alumni",
    title: "Earning Parent Co-Obligor or Returned Graduate Defaulting Despite Regular Salaried Income in India",
    statutoryHook: "PSS Act s.25, NI Act s.138 & CPC Order XXI Rule 48 / 46A",
    challenge:
      "In thousands of ₹4 Lakh–₹18 Lakh education NPAs (below the ₹20 Lakh DRT pecuniary floor), either the parent co-applicant is a PSU/corporate/government salaried employee or the graduate has returned to India and joined an MNC, yet they intentionally starve the linked debit account to evade EMIs.",
    remedy:
      "Leverage statutory criminal pressure alongside civil salary-attachment execution. Where an e-NACH mandate or post-dated cheque drawn on the co-obligor's or student's Indian bank account bounces, issue a strict 30-day statutory demand notice under Section 25 of the Payment and Settlement Systems Act, 2007 (or Section 138 NI Act). Simultaneously secure a Civil Court / Order XXXVII / Lok Adalat decree and move an execution petition under CPC Order XXI Rule 48 (attaching attachable salary directly from the employer's DDO/HR) and Rule 46A (garnishee freeze on Indian bank accounts).",
    actionItems: [
      "Pull the NPCI e-NACH return memo (Reason 01 Insufficient Funds / Payment Stopped) and dispatch a Section 25 PSS Act statutory notice within 30 days of dishonour.",
      "Enforce the strict Suman Sethi dual-demand structure: demand the exact bounced EMI within 15 days while reserving total loan recall in a separate paragraph.",
      "File an Order XXXVII CPC Summary Suit (for ₹3L–₹20L in Commercial/Civil Court as applicable) or execute a Pre-Litigation Lok Adalat Section 21 award.",
      "Move an Order XXI Rule 48 salary attachment warrant to the employer's payroll officer (subject to CPC s.60(1)(i) statutory exemption limits) and Order XXI Rule 46A bank garnishee notice.",
    ],
    precedentRef: "CPC Order XXI Rule 48 (Salary Attachment) & Payment and Settlement Systems Act, 2007 s.25",
  },
  {
    id: "moratorium-csis-dispute",
    tabLabel: "Moratorium & CSIS Claim",
    title: "Borrower Claims Uncredited CSIS Interest Subsidy or Demands Indefinite Moratorium Extension",
    statutoryHook: "IBA Model Scheme, CSIS / PM-Vidyalaxmi Norms & RBI Fair Practices",
    challenge:
      "Defaulting students and parents routinely reply to bank recall notices claiming they never received Central Sector Interest Subsidy (CSIS) credits during the moratorium, or citing unemployment to claim the bank cannot classify the account as NPA or pursue the co-obligor.",
    remedy:
      "Prevent Ombudsman escalations and Civil Court stays by auditing subsidy and moratorium logs before filing suit. Under RBI IRACP norms, once the contractual repayment holiday (course duration + 1 year, or 6 months post-employment) expires, unpaid EMIs trigger SMA-1/SMA-2 and Day-90 NPA automatically regardless of voluntary job-search delays. Reconcile Canara Bank nodal portal CSIS claims in the demand notice annexure so the borrower cannot fabricate an accounting-dispute defense to obtain unconditional leave to defend under Order XXXVII CPC.",
    actionItems: [
      "Audit the loan sanction letter to document exact course completion date, contractual moratorium end date, and EMI commencement date.",
      "Verify whether the borrower submitted annual EWS income certificates on time for CSIS eligibility; attach a transparent interest-reconciliation sheet to the legal notice.",
      "Separate simple moratorium interest, contractual post-moratorium interest, and uncompounded RBI-compliant penal charges to neutralize borrower accounting challenges.",
      "Offer a time-bound 15-day restructuring / OTS window inside the Advocate Legal Notice—creating an unimpeachable fair-conduct record before escalating to Civil Suit, DRT, or SARFAESI.",
    ],
    precedentRef: "RBI Master Circular on Prudential Norms (IRACP) & RBI Penal Charges Direction (Effective April 1, 2024)",
  },
];

export default function EduLoanScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);

  const activeScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 text-white shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4 mb-6">
        <div>
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-red-400 block mb-1">
            Interactive Education Loan Recovery Playbook
          </span>
          <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
            Select Your Overseas or Domestic Education NPA Bottleneck
          </h3>
        </div>
        <span className="text-[11px] text-slate-400 font-medium">
          4 Retail &amp; Overseas Desk Tracks:
        </span>
      </div>

      {/* Tab Buttons */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-6">
        {SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3 py-2.5 rounded-xl text-xs font-bold transition-all text-center cursor-pointer border ${
                isActive
                  ? "bg-[#DC2626] text-white border-red-500 shadow-md shadow-red-900/40"
                  : "bg-slate-800/80 text-slate-300 border-slate-700/60 hover:bg-slate-800 hover:text-white"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Card */}
      <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-4 sm:p-6 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
          <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
            {activeScenario.title}
          </h4>
          <span className="text-[11px] font-mono text-amber-400 bg-amber-950/40 border border-amber-900/40 px-2.5 py-1 rounded-md self-start sm:self-auto shrink-0">
            {activeScenario.statutoryHook}
          </span>
        </div>

        {/* Challenge vs Remedy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-4">
            <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 block mb-1.5">
              Institutional Bottleneck
            </span>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {activeScenario.challenge}
            </p>
          </div>
          <div className="bg-emerald-950/20 border border-emerald-900/30 rounded-xl p-4">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-1.5">
              Creditor-Side Statutory Remedy
            </span>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {activeScenario.remedy}
            </p>
          </div>
        </div>

        {/* Action Checklist */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
            Step-by-Step Recovery Desk Execution Protocol
          </span>
          <ul className="space-y-2">
            {activeScenario.actionItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Precedent Footer */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-800/80 text-[11px] text-slate-400">
          <span>
            <strong className="text-slate-200">Verified Authority:</strong> {activeScenario.precedentRef}
          </span>
          <span className="text-emerald-400 font-semibold">
            &bull; Ready for Tri-Channel Dispatch
          </span>
        </div>
      </div>
    </div>
  );
}
