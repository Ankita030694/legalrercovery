"use client";

import React, { useState } from "react";

interface ScenarioTab {
  id: string;
  tabLabel: string;
  title: string;
  commercialReality: string;
  legalDoctrine: string;
  actionProtocol: {
    phase: string;
    action: string;
  }[];
  statutoryRemedy: string;
}

const YARN_MILL_SCENARIOS: ScenarioTab[] = [
  {
    id: "forward-rate-crash",
    tabLabel: "Spot Price Dip & Ghosting",
    title: "Buyer Booked 50 Tons at ₹290/kg; Market Sinks to ₹255/kg and Buyer Refuses to Lift",
    commercialReality:
      "A powerloom unit or hosiery trader in Surat, Ludhiana, or Tirupur books forward contracts for 30s combed cotton yarn at ₹290/kg with an advance token of 5%. The spinning mill procures raw cotton bales upfront to back the order. Within 3 weeks, global cotton indices tumble and spot yarn falls 12% to ₹255/kg. The buyer stops issuing dispatch instructions, ignores emails, and leaves 50 metric tons lying unlifted in the mill godown.",
    legalDoctrine:
      "Sale of Goods Act, 1930 Section 56 (Damages for Non-Acceptance) gives the mill an absolute right to sue for market rate difference (Contract Price minus Market Price on the date of breach). Section 54 provides the right of resale after formal notice, charging both the price difference and warehouse holding costs to the defaulting buyer.",
    actionProtocol: [
      {
        phase: "Day 1–3 (Notice to Lift)",
        action:
          "Issue a 48-hour peremptory demand specifying that 50 metric tons are ready for delivery, demanding balance consideration and lifting schedule.",
      },
      {
        phase: "Day 4–7 (Resale Notice)",
        action:
          "Issue statutory Notice of Resale under Sale of Goods Act s.54. Obtain 3 certified quotes from registered textile brokers or trade bodies (SIMA/SIMA Cotton/CAI spot rates) establishing the prevailing market floor.",
      },
      {
        phase: "Day 8–15 (Action & Filing)",
        action:
          "Execute open-market resale. Quantify the net loss (₹35/kg difference + godown demurrage) and file an MSME Samadhaan petition or Order 37 summary commercial suit for the liquidated difference.",
      },
    ],
    statutoryRemedy:
      "Sale of Goods Act s.56 & s.54, Commercial Courts Act 2015 s.2(1)(c)(i), and MSMED Act 2006 s.15–18 compound interest.",
  },
  {
    id: "running-credit-ledger",
    tabLabel: "Powerloom Credit Ledger",
    title: "Weaver / Agency Ran Up ₹65 Lakh in Running Account Balances on 60-Day Terms",
    commercialReality:
      "A yarn wholesaler or weaving cluster enterprise in Bhiwandi, Bhilwara, or Ichalkaranji purchases regular 5-ton dispatches on 30–60 day credit terms. Over 9 months, partial payments are received on running account, but the ledger balance swells to ₹65 Lakh. Suddenly, the buyer demands further dispatches before settling previous invoices, falsely alleging past lot yarn count variance (e.g. 29.5s instead of 30s) or CSP (count-strength product) defects.",
    legalDoctrine:
      "Under Section 41 and 42 of the Sale of Goods Act, acceptance is deemed complete once goods are woven, spliced, or held without written complaint within a reasonable commercial window (customarily 72 hours). Belated quality disputes raised only when payment is demanded are routinely rejected by commercial courts as post-facto pretexts. Limitation is preserved by running ledger entries under Section 18/19 of Limitation Act, 1963.",
    actionProtocol: [
      {
        phase: "Immediate Ledger Audit",
        action:
          "Reconcile GST E-Way bills, Lorry Receipts (LRs), mill test certificates (USTER reports), and WhatsApp acknowledgment of receipts.",
      },
      {
        phase: "Pre-Litigation Demand",
        action:
          "Serve a comprehensive fact-verified legal demand notice under Section 43B(h) of the Income Tax Act and Section 15 of the MSMED Act, warning of IT expense disallowance.",
      },
      {
        phase: "Commercial Action",
        action:
          "File Section 18 MSME petition or pre-institution mediation under Section 12A of the Commercial Courts Act.",
      },
    ],
    statutoryRemedy:
      "MSMED Act s.16 (RBI Base Rate + 14% compounded monthly), IT Act s.43B(h) tax disallowance, and Order 37 CPC summary recovery.",
  },
  {
    id: "pdc-bounce-proprietor",
    tabLabel: "PDC Bounce & Personal Assets",
    title: "Yarn Agency Post-Dated Cheques Bounce for 'Funds Insufficient'; Proprietor Evades Service",
    commercialReality:
      "A yarn indenting agency or yarn trader issued 4 post-dated cheques totaling ₹48 Lakh against unlifted or delivered lots. When deposited upon maturity, cheques bounce with return memos stating 'Funds Insufficient' or 'Account Closed'. The proprietor operates out of a rented cabin in Surat or Ahmedabad and claims his proprietary firm has no assets.",
    legalDoctrine:
      "Under Section 138 of the Negotiable Instruments Act, 1881, the proprietor is personally and criminally liable with up to 2 years imprisonment. Furthermore, a sole proprietorship does not possess a separate corporate personality—the proprietor's personal bank accounts, residential properties, and ancestral shares are fully attachable under Order 38 Rule 5 and Order 21 CPC.",
    actionProtocol: [
      {
        phase: "Within 30 Days of Return Memo",
        action:
          "Serve mandatory statutory notice under Section 138(b) of the NI Act via Speed Post RPAD and email/WhatsApp with BSA s.63 electronic hash.",
      },
      {
        phase: "Day 16 Post-Receipt",
        action:
          "Cause of action arises. File Section 138 criminal complaint within 30 days before Judicial Magistrate / Metropolitan Magistrate court.",
      },
      {
        phase: "Simultaneous Attachment",
        action:
          "File an Order 38 Rule 5 application in Civil / Commercial Court seeking pre-judgment attachment of personal immovable assets and bank accounts.",
      },
    ],
    statutoryRemedy:
      "Negotiable Instruments Act s.138 & s.143A (20% interim compensation), CPC Order 38 Rule 5 attachment before judgment.",
  },
  {
    id: "broker-adatiya-collusion",
    tabLabel: "Adatiya / Broker Collusion",
    title: "Textile Commission Agent Pocketed Cash or Diverted Booked Lots to Black Markets",
    commercialReality:
      "The mill transacted through a local textile yarn broker (dalal/adatiya) on 1% commission. When the buyer defaulted on ₹80 Lakh, investigation reveals the broker collected secondary payments from weavers in cash or knowingly sold mill lots to fictitious entities while taking a cut. The broker claims he is merely a facilitator with zero liability.",
    legalDoctrine:
      "Indian Contract Act, 1872 Section 212 mandates that an agent must act with standard skill and diligence and indemnify the principal for direct neglect. If the broker received Del Credere brokerage (guaranteeing payment) or conspired with the fraudulent buyer, Bharatiya Nyaya Sanhita, 2023 Section 318(4) (Cheating) and Section 61(2) (Criminal Conspiracy) apply jointly.",
    actionProtocol: [
      {
        phase: "Broker Interrogation & Notice",
        action:
          "Issue a formal co-notice naming both broker and buyer. Demand production of the broker's Mandi Sauda Register and bank records.",
      },
      {
        phase: "Trade Association Blacklist",
        action:
          "Lodge formal complaint before Southern India Mills' Association (SIMA), Cotton Association of India (CAI), or Northern India Textile Mills' Association (NITMA) for trade blacklisting.",
      },
      {
        phase: "Joint Criminal & Civil Suit",
        action:
          "File multi-defendant recovery suit and EOW complaint alleging criminal conspiracy and breach of trust under BNS s.316 and s.318.",
      },
    ],
    statutoryRemedy:
      "Contract Act s.182/212, BNS s.318(4) & s.61(2), SIMA/CAI Trade Arbitration, Commercial Courts Act 2015.",
  },
];

export default function YarnMillScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>("forward-rate-crash");

  const currentScenario =
    YARN_MILL_SCENARIOS.find((s) => s.id === activeTab) || YARN_MILL_SCENARIOS[0];

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
        {YARN_MILL_SCENARIOS.map((scenario) => {
          const isActive = activeTab === scenario.id;
          return (
            <button
              key={scenario.id}
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/70"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Content Box */}
      <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-7 border border-slate-800 space-y-6">
        <div>
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/80 px-2.5 py-1 rounded-md border border-red-800/60 inline-block mb-2">
            Commercial Dispute Pattern
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-white">{currentScenario.title}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80 space-y-1.5">
            <h4 className="text-slate-300 font-bold uppercase text-[11px] tracking-wider text-red-400">
              The Mandi Ground Reality
            </h4>
            <p className="text-slate-300 leading-relaxed">{currentScenario.commercialReality}</p>
          </div>

          <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80 space-y-1.5">
            <h4 className="text-slate-300 font-bold uppercase text-[11px] tracking-wider text-emerald-400">
              Statutory Doctrine &amp; Judicial Remedy
            </h4>
            <p className="text-slate-300 leading-relaxed">{currentScenario.legalDoctrine}</p>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400">
            Recommended Spinning Mill Recovery Protocol
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {currentScenario.actionProtocol.map((step, idx) => (
              <div
                key={idx}
                className="bg-slate-800/50 border border-slate-700 p-3.5 rounded-xl space-y-1"
              >
                <span className="text-[11px] font-bold text-red-400 block">{step.phase}</span>
                <p className="text-xs text-slate-200 leading-snug">{step.action}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-400">
          <div>
            <span className="text-slate-300 font-medium">Statutory Bastion: </span>
            <span className="text-slate-200 font-mono text-[11px]">{currentScenario.statutoryRemedy}</span>
          </div>
          <span className="text-amber-400 font-semibold text-[11px]">
            ⚡ Standard 15-Day Advocate Notice Window
          </span>
        </div>
      </div>
    </div>
  );
}
