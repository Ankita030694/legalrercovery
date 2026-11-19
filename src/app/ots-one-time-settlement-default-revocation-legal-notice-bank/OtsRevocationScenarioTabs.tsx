"use client";

import React, { useState } from "react";

interface OtsFailureScenario {
  id: string;
  shortLabel: string;
  badge: string;
  title: string;
  borrowerTactic: string;
  statutoryVulnerability: string;
  bankActionSteps: string[];
  controllingAuthority: string;
  outcomeMetric: string;
}

const OTS_SCENARIOS: OtsFailureScenario[] = [
  {
    id: "auction-stall-token",
    shortLabel: "10% Auction-Stall Token",
    badge: "Most Frequent SARB Bottleneck",
    title: "Borrower Pays 10% OTS Upfront to Defer E-Auction, Defaults on 90-Day Balance",
    borrowerTactic:
      "Forty-eight hours before a scheduled SARFAESI Rule 8(6) e-auction, the NPA promoter deposits 10% into a No-Lien Account, secures an OTS sanction deferring the sale, and then defaults on the remaining 90% tranche while retaining possession of the mortgaged asset.",
    statutoryVulnerability:
      "If the OTS sanction letter lacks an automatic ipso facto lapse clause and explicit right to adjust the No-Lien deposit towards original contractual dues without waiving SARFAESI steps, borrowers argue the original Section 13(2)/(4) notices stood novated under Contract Act Section 62.",
    bankActionSteps: [
      "Trigger immediate OTS Cancellation & Full Liability Revival Notice on T+1 day post-expiry via Speed Post RPAD, registered email, and WhatsApp with BSA 2023 s.63 certification.",
      "Transfer the 10% No-Lien deposit into the NPA loan ledger against accrued interest/recovery expenses first (Contract Act s.59–61) while expressly negating any settlement waiver.",
      "Issue fresh 15-day subsequent sale notice under Rule 9(1) Proviso of Security Interest (Enforcement) Rules, 2002 without restarting Section 13(2) from scratch.",
      "File an advance Caveat under CPC s.148A in the jurisdictional High Court and DRT to block ex-parte auction stays.",
    ],
    controllingAuthority:
      "CELIR LLP v. Bafna Motors (Mumbai) Pvt. Ltd., (2024) 2 SCC 1 & Indian Contract Act, 1872 ss. 55, 62–63",
    outcomeMetric: "Restores full original claim + saves 60–90 days by avoiding fresh s.13(2) restart",
  },
  {
    id: "high-court-writ-extension",
    shortLabel: "Art. 226 Writ Extension",
    badge: "High Court Litigation Defense",
    title: "Borrower Files High Court Writ Petition Seeking 6 to 12 Months OTS Extension",
    borrowerTactic:
      "After defaulting on the sanctioned 30/60/90-day OTS schedule, the borrower files an Article 226 Writ Petition citing temporary liquidity distress and asks the High Court to direct the bank to accept the expired OTS amount with nominal simple interest.",
    statutoryVulnerability:
      "Unprepared panel advocates often concede to 'status quo' orders or agree to 'reconsider' the borrower's representation, inadvertently handing the promoter another 8–14 months of free occupancy and depreciating collateral value.",
    bankActionSteps: [
      "File a short threshold Preliminary Counter-Affidavit attaching the signed OTS Sanction Letter, the formal OTS Revocation Notice, and proof of delivery.",
      "Cite SBI v. Arvindra Electronics Pvt. Ltd. (2023) 1 SCC 540 verbatim: High Courts under Art. 226 cannot rewrite contractual OTS timelines or compel extension.",
      "Invoke Bijnor Urban Co-op Bank Ltd. v. Meenal Agarwal (2023) 2 SCC 805 demonstrating realizable collateral value exceeds OTS offer and OTS is not a vested legal right.",
      "Press Phoenix ARC v. Vishwa Bharati Vidya Mandir (2022) 5 SCC 345 to reject writ maintainability in favour of statutory DRT remedy under SARFAESI s.17.",
    ],
    controllingAuthority:
      "State Bank of India v. Arvindra Electronics Pvt. Ltd., (2023) 1 SCC 540 & Bijnor Urban Co-op Bank (2023) 2 SCC 805",
    outcomeMetric: "Dismisses Art. 226 extension writs at admission stage; preserves auction finality",
  },
  {
    id: "broken-consent-decree",
    shortLabel: "Broken DRT / Lok Adalat OTS",
    badge: "Execution & Recovery Certificate",
    title: "Default on Compromise Recorded Before DRT (s.19) or National Lok Adalat (s.21)",
    borrowerTactic:
      "Borrower executes a Joint Compromise Memo in a pending DRT Original Application or Lok Adalat settlement for a 40% haircut, pays the initial tranche to obtain an award, and stops paying subsequent quarterly installments.",
    statutoryVulnerability:
      "If the Compromise Memo omits a self-executing 'Default Revival Clause', the bank is trapped enforcing only the discounted compromise figure rather than the full Original Application claim with pendente lite contractual interest.",
    bankActionSteps: [
      "Draft every DRT Joint Compromise Petition and Lok Adalat Award with an express default trigger: failure to pay any single installment within the stipulated date automatically revives the full OA claim less amounts already paid.",
      "Serve a 7-day Default Intimation & Revocation Notice citing the specific Clause of the Consent Decree / Lok Adalat Award.",
      "File an immediate Application for issuance/amendment of Recovery Certificate (RC) for the revived gross contractual sum before the DRT Presiding Officer under RDB Act s.19(22).",
      "Move the Recovery Officer under RDB Act ss.25–28 for immediate attachment of bank accounts, immovable assets, and garnishee orders.",
    ],
    controllingAuthority:
      "Recovery of Debts and Bankruptcy Act, 1993 s.19(20)-(22) & Legal Services Authorities Act, 1987 s.21",
    outcomeMetric: "Zero fresh trial; direct Recovery Certificate execution for 100% revived claim",
  },
  {
    id: "belated-partial-tender",
    shortLabel: "Belated Partial Payment Trap",
    badge: "Waiver Prevention Protocol",
    title: "Borrower Deposits Unsolicited Partial Cash After OTS Expiry Claiming 'Waiver'",
    borrowerTactic:
      "Weeks after the OTS deadline expires, the borrower transfers a small NEFT/RTGS sum directly into the NPA loan account or sends a post-dated cheque, then argues before DRT that bank acceptance of the money impliedly extended the OTS.",
    statutoryVulnerability:
      "Silent retention of post-expiry transfers in the main loan ledger without an immediate written reservation of rights can be exploited by borrowers to plead estoppel or implied waiver of the 'time is of the essence' stipulation under Contract Act s.55.",
    bankActionSteps: [
      "Configure CBS flags on expired OTS accounts so any post-expiry credit triggers an automated Branch Legal Manager alert within 24 hours.",
      "Dispatch an immediate 'Appropriation Without Prejudice & Non-Waiver Notice' clarifying that the credit is strictly appropriated towards the revived original debt under Contract Act s.60 and does NOT revive the lapsed OTS.",
      "Record the unsolicited remittance as an acknowledged part-payment under Section 19 of the Limitation Act, 1963 to extend the bank's 3-year suit/DRT limitation clock.",
      "Return unencashed conditional cheques marked 'Full & Final OTS' via Speed Post RPAD with an Advocate cover letter rejecting the unilateral condition.",
    ],
    controllingAuthority:
      "Indian Contract Act, 1872 ss. 55, 60 & Limitation Act, 1963 ss. 18–19 (Dena Bank v. C. Shivakumar Reddy)",
    outcomeMetric: "Blocks estoppel/waiver defense while capturing fresh 3-year limitation extension",
  },
];

export default function OtsRevocationScenarioTabs() {
  const [activeId, setActiveId] = useState<string>(OTS_SCENARIOS[0].id);
  const current = OTS_SCENARIOS.find((s) => s.id === activeId) || OTS_SCENARIOS[0];

  return (
    <div className="space-y-5">
      {/* Tab Selector Strip */}
      <div
        role="tablist"
        aria-label="Broken OTS failure modes"
        className="flex flex-wrap gap-2 border-b border-slate-200 pb-4"
      >
        {OTS_SCENARIOS.map((scenario, index) => {
          const isActive = scenario.id === activeId;
          return (
            <button
              key={scenario.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <span
                className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                  isActive ? "bg-white/20 text-white" : "bg-white text-slate-600"
                }`}
              >
                0{index + 1}
              </span>
              <span>{scenario.shortLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Active Scenario Panel */}
      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-4">
          <div className="space-y-1">
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#DC2626] bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full">
              {current.badge}
            </span>
            <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
              {current.title}
            </h3>
          </div>
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-3 py-1.5 rounded-lg text-xs font-bold">
            {current.outcomeMetric}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 block">
              Borrower Delay Tactic
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.borrowerTactic}
            </p>
          </div>

          <div className="bg-red-50/60 border border-red-200 rounded-xl p-4 space-y-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626] block">
              Bank Drafting Vulnerability
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.statutoryVulnerability}
            </p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 space-y-3">
          <span className="text-xs font-black uppercase tracking-wider text-slate-900 block">
            Mandatory Bank Legal &amp; SARB Counter-Protocol
          </span>
          <ol className="space-y-2.5">
            {current.bankActionSteps.map((step, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="bg-slate-900 text-slate-100 rounded-xl px-4 py-3 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span className="text-slate-400 font-semibold uppercase tracking-wider text-[10px]">
            Controlling Authority
          </span>
          <span className="font-bold text-amber-300">{current.controllingAuthority}</span>
        </div>
      </div>
    </div>
  );
}
