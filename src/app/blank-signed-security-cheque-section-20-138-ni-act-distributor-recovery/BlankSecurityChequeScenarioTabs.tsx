"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  riskDescription: string;
  statutoryTrap: string;
  legalStrategy: string;
  mandatoryClauses: string[];
  recommendedAction: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "old-onboarding-cheque",
    tabLabel: "Stale Onboarding Cheque",
    badge: "Sripati Singh & Bir Singh Shield",
    title: "Dealer Claims Security Cheque Given at Onboarding Years Ago Cannot Be Enforced",
    riskDescription:
      "A common tactic by defaulting distributors and super-stockists is to claim that the blank signed cheque was provided 3 to 5 years earlier solely as 'initial security' at the time of distributorship appointment, and therefore cannot be converted into an active payment instrument for ongoing ledger dues.",
    statutoryTrap:
      "Trial courts frequently entertain defense applications under Section 139 rebuttal if the complainant company fails to establish the exact nexus between the historical security instrument and the currently unpaid running ledger balance.",
    legalStrategy:
      "Under Sripati Singh (SC 2021) and Bir Singh v. Mukesh Kumar (SC 2019), a security cheque does not remain a dormant dead letter. Once a commercial debt crystallizes and remains unpaid on the due date, the security matures into a live enforceable liability. Under Section 20 NI Act, the holder has express statutory authority to complete the inchoate instrument with current date and amount.",
    mandatoryClauses: [
      "Recital of original distributorship agreement clause authorizing company to hold security cheques against credit facility",
      "Explicit reference to Section 20 NI Act statutory authority empowering the payee to complete the inchoate instrument",
      "Annexure of full audited running ledger showing all supplies, invoices, and zero disputed credit notes",
      "7-Day intimation clause warning that Cheque No. XXXXXX will be completed for the exact ledger debt of ₹X,XX,XXX",
    ],
    recommendedAction:
      "Serve a formal 7-Day Pre-Deposit Intimation Notice with certified ledger account before depositing the cheque. This permanently extinguishes the 'unauthorized misuse of old security' defense.",
  },
  {
    id: "part-payment-dashrathbhai",
    tabLabel: "Part-Payment Received",
    badge: "Dashrathbhai Patel Compliance",
    title: "Dealer Transfers Partial Amount: Avoiding Fatal Over-Presentation Dismissal",
    riskDescription:
      "A dealer owes ₹11,50,000. After aggressive credit follow-up, the dealer remits ₹2,50,000 via RTGS. The finance executive, eager to enforce the signed blank security cheque, fills the originally claimed ₹11,50,000 on the cheque and deposits it. The cheque bounces for 'Funds Insufficient'.",
    statutoryTrap:
      "Under the landmark Supreme Court ruling in Dashrathbhai Trikambhai Patel v. Hitesh Mahendrabhai Patel (2022 SCC OnLine SC 1376), if a cheque is presented for an amount larger than the actual legally enforceable debt on the date of presentation without endorsing part-payment under Section 56 NI Act, Section 138 prosecution is completely invalid!",
    legalStrategy:
      "A blank signed security cheque gives the company the legal flexibility to fill the EXACT reduced balance after adjusting all part-payments. If the cheque was already pre-filled for a higher round figure, the company must endorse the part-payment on the instrument under Section 56 or present a fresh cheque for the reduced balance.",
    mandatoryClauses: [
      "Itemized credit reconciliation noting date, UTR number, and amount of all interim part-payments received",
      "Clear declaration of Net Crystallized Enforceable Debt after adjusting all remittances and valid credit notes",
      "Explicit recital that the security cheque is being completed under Section 20 solely for the net unpaid balance",
      "Endorsement notice confirming compliance with Section 56 and Dashrathbhai Patel statutory mandates",
    ],
    recommendedAction:
      "Never fill a round figure or historical invoice total. Always calculate the exact net ledger balance on the day of filling and cite the adjusted figure in the 7-day pre-deposit intimation.",
  },
  {
    id: "stop-payment-account-closed",
    tabLabel: "Stop Payment / Closed Account",
    badge: "Modi Cements & Goaplast Rules",
    title: "Dealer Receives Ledger Notice and Instructs Bank to Stop Payment or Close Account",
    riskDescription:
      "Upon receiving the 7-day pre-deposit notice or realizing that overdue supplies will trigger cheque deposit, the distributor contacts their bank and issues a 'Stop Payment' instruction or initiates account closure to prevent clearing.",
    statutoryTrap:
      "Corporate credit teams often panic upon seeing bank return memos stating 'Stop Payment by Drawer' or 'Account Closed', mistakenly assuming that Section 138 applies exclusively to 'Funds Insufficient'.",
    legalStrategy:
      "The Supreme Court in Modi Cements Ltd. v. Kuchil Kumar Nandi (1998) and Goaplast (P) Ltd. v. Chico Ursula D'Souza (2003) conclusively established that 'Stop Payment' and 'Account Closed' return memos fall squarely within the penal ambit of Section 138 NI Act. In fact, issuing a stop payment after receipt of a ledger intimation notice provides decisive proof of mala fide mens rea and criminal evasion.",
    mandatoryClauses: [
      "Affirmation that goods were duly received under valid tax invoices, GST e-way bills, and signed proof of delivery (POD)",
      "Recital that drawer failed to dispute ledger statement during the 7-day intimation window prior to presentation",
      "Pleading that instructions to bank to stop payment constitute an intentional statutory default under Modi Cements",
      "Notice of additional criminal liability under Section 318(4) of Bharatiya Nyaya Sanhita, 2023 (BNS / Section 420 IPC) for dishonest inducement",
    ],
    recommendedAction:
      "Immediately issue the statutory Section 138 Demand Notice within 30 days of receiving the return memo, highlighting the bad-faith stop payment instruction following the 7-day intimation notice.",
  },
  {
    id: "entity-shift-directors",
    tabLabel: "Distributor Entity Restructuring",
    badge: "Section 141 NI Act & Piercing the Veil",
    title: "Security Cheque Issued by Proprietor, but Subsequent Invoices Billed to Pvt Ltd",
    riskDescription:
      "At onboarding, the business was run as a proprietorship firm and security cheques were signed by the individual owner. Years later, the dealer incorporated a Private Limited company or formed a Partnership firm, and subsequent invoices were raised in the new company's name.",
    statutoryTrap:
      "Under Section 138, the drawer of the cheque must be the party indebted. If the cheque is drawn on the old proprietorship bank account while invoices are billed to an entirely separate corporate entity without a tripartite novation agreement, the trial court may hold that the drawer is not legally liable for the third-party debt.",
    legalStrategy:
      "Corporate legal teams must review the dealer onboarding contract and personal guarantee covenants. If the proprietor signed a continuing personal guarantee or indemnity bond covering all affiliated entities, the individual cheque remains validly enforceable. Simultaneously, Section 141 proceedings must cite all executive directors and in-charge managers of the operating entity.",
    mandatoryClauses: [
      "Cross-linkage between onboarding personal guarantee, dealership agreement, and subsequent corporate supply orders",
      "Pleading of continuous economic entity doctrine and direct personal liability of the signatory drawer",
      "Dual demand formulation asserting Section 138 liability against drawer and Order 37 summary suit liability against corporate buyer",
      "Requisition of company records, GST registration history, and bank mandates establishing common beneficial ownership",
    ],
    recommendedAction:
      "Verify whether the cheque drawer and invoice buyer match. If different, audit the personal guarantee deed and invoke simultaneous Section 138 and civil summary recovery mechanisms.",
  },
];

export default function BlankSecurityChequeScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);

  const scenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-slate-900 text-white rounded-2xl border border-slate-800 p-5 sm:p-7 shadow-xl">
      <div className="mb-6">
        <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-950/70 text-red-400 border border-red-800/60 mb-2">
          Interactive Strategy Explorer
        </span>
        <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
          Credit Controller Action Rails: 4 High-Risk Commercial Scenarios
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Select a commercial default pattern to review statutory risks, Supreme Court precedents, and exact drafting safeguards.
        </p>
      </div>

      {/* Tabs Bar */}
      <div className="flex flex-wrap gap-2 pb-4 border-b border-slate-800 mb-6">
        {SCENARIOS.map((item) => {
          const isActive = item.id === activeTab;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveTab(item.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/30 scale-[1.02]"
                  : "bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white"
              }`}
            >
              {item.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Card */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800">
          <h4 className="text-base sm:text-lg font-bold text-white leading-snug">
            {scenario.title}
          </h4>
          <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 shrink-0">
            {scenario.badge}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-800/70 rounded-xl p-4 border border-slate-700/60">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-1.5">
              Distributor Risk &amp; Evasion Tactic
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">
              {scenario.riskDescription}
            </p>
          </div>

          <div className="bg-slate-800/70 rounded-xl p-4 border border-slate-700/60">
            <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 block mb-1.5">
              The Fatal Statutory Trap
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">
              {scenario.statutoryTrap}
            </p>
          </div>
        </div>

        <div className="bg-slate-800/90 rounded-xl p-4 sm:p-5 border-l-4 border-[#DC2626] border-y border-r border-slate-700/60">
          <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 block mb-1.5">
            Supreme Court Legal Strategy &amp; Statutory Authority
          </span>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
            {scenario.legalStrategy}
          </p>
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-2.5">
            Mandatory Notice &amp; Pleadings Clauses:
          </span>
          <ul className="space-y-2">
            {scenario.mandatoryClauses.map((clause, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                <span className="w-4 h-4 rounded-full bg-red-950 border border-red-800/80 text-red-400 font-bold flex items-center justify-center shrink-0 text-[10px] mt-0.5">
                  &check;
                </span>
                <span className="leading-relaxed">{clause}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4 bg-emerald-950/40 border border-emerald-800/50 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="text-xs text-emerald-200 leading-relaxed">
            <strong className="text-emerald-400 block mb-0.5">Recommended Legal Action:</strong>
            {scenario.recommendedAction}
          </div>
        </div>
      </div>
    </div>
  );
}
