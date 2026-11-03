"use client";

import React, { useState } from "react";

interface TabScenario {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  legalStatus: string;
  statutoryBasis: string;
  coreRule: string;
  actionSteps: string[];
  drawerTrap: string;
}

const TAB_DATA: TabScenario[] = [
  {
    id: "security-cheque",
    tabLabel: "Security Cheque",
    badge: "Most Common Default",
    title: "Drawer Stopped Payment Claiming It Was a 'Security Cheque'",
    legalStatus: "Section 138 is FULLY ATTRACTED",
    statutoryBasis: "Section 138 & 139 NI Act + Sripati Singh v. State of Jharkhand (2021)",
    coreRule:
      "A cheque issued as security matures into a legally enforceable debt once default or unpaid liability arises on the due date. The Supreme Court in Sripati Singh ruled that stop payment on a security cheque does not shield the drawer from criminal prosecution under Section 138 once the debt has crystallized.",
    actionSteps: [
      "Obtain the original bank dishonour memo showing 'Payment stopped by drawer'.",
      "Collate proof of underlying consideration: loan agreement, purchase order, work completion sign-off, or outstanding invoices.",
      "Dispatch a formal 15-day statutory demand notice within 30 days of receiving the bank memo.",
      "Do not accept verbal assurances; the 30-day statutory limitation period does not stop for negotiations.",
    ],
    drawerTrap:
      "Drawers frequently believe that writing 'SECURITY' on the counterfoil or stating that the cheque was for security automatically grants immunity. Courts presume legal debt under Section 139 until the drawer disproves it through rigorous defence evidence at trial.",
  },
  {
    id: "commercial-dispute",
    tabLabel: "Goods / Service Dispute",
    badge: "Contractual Friction",
    title: "Drawer Issued Stop Payment Alleging Defective Goods or Breach of Contract",
    legalStatus: "Section 138 PROCEEDING IS MAINTAINABLE",
    statutoryBasis: "Goaplast (P) Ltd. v. Chico Ursula D'Souza (2003) 3 SCC 232",
    coreRule:
      "A unilateral allegation of deficient service or defective goods does not wipe out statutory liability under Section 138. The Supreme Court established in Goaplast that stop payment instructions do not bar Section 138 prosecution; the drawer must prove in full-fledged trial that there was no enforceable liability on the date the cheque was presented.",
    actionSteps: [
      "Gather delivery challans, bilty/lorry receipts, e-way bills, and tax invoices establishing supply.",
      "Check whether drawer issued a written rejection within the statutory inspection window under Sales of Goods Act.",
      "Serve the Section 138 demand notice highlighting delivery and acceptance of goods/services.",
      "If drawer fails to pay within 15 days, file the Section 138 criminal complaint alongside an Order 37 summary recovery suit.",
    ],
    drawerTrap:
      "Stopping payment without formally returning the goods or proving total failure of consideration exposes the drawer to criminal conviction and mandatory interim compensation of up to 20% under Section 143A.",
  },
  {
    id: "presented-again",
    tabLabel: "Presented Again",
    badge: "Presentation Timing",
    title: "Can a Stop Payment Cheque Be Presented Again to the Bank?",
    legalStatus: "PERMITTED WITHIN 3 MONTHS (WITH STATUTORY CAVEATS)",
    statutoryBasis: "MSR Leathers v. S. Palaniappan (2013) 1 SCC 86",
    coreRule:
      "A cheque may be presented any number of times during its 3-month validity period, provided no statutory notice was issued following the previous dishonour. However, once you issue a formal 15-day Section 138 notice, the cause of action crystallizes. You cannot re-present the cheque to restart the 30-day limitation clock once a notice has been dispatched.",
    actionSteps: [
      "Verify the 3-month validity date from the face of the cheque.",
      "If no legal notice was sent upon the first dishonour memo, you may re-present the cheque to the bank.",
      "Upon the second return memo, immediately send the statutory demand notice within 30 days.",
      "Never present a cheque after issuing a Section 138 notice in an attempt to extend an expired filing deadline.",
    ],
    drawerTrap:
      "Drawers often request payees to 'present the cheque next week', causing payees to miss their 30-day statutory notice limitation. Always maintain the calendar from the date of the return memo.",
  },
  {
    id: "lost-stolen-fir",
    tabLabel: "Lost / Stolen / Extorted",
    badge: "Narrow Drawer Defence",
    title: "Drawer Claims Cheque Was Stolen, Misplaced, or Obtained Under Duress",
    legalStatus: "BURDEN OF PROOF STRICTLY ON DRAWER",
    statutoryBasis: "Sections 118, 138 & 139 NI Act + BSA Section 63",
    coreRule:
      "For a lost or stolen cheque defence to hold ground, the drawer must prove an immediate contemporary police complaint or FIR lodged BEFORE the cheque was presented, and immediate written communication to the bank. A belated police complaint filed after receiving the payee's demand notice is routinely dismissed by trial courts as an afterthought.",
    actionSteps: [
      "Demand the exact date and diary entry number of any police intimation cited by the drawer.",
      "Verify if the drawer's stop payment letter to the bank predates or postdates the transaction.",
      "Produce bank statements or counterparty ledger showing regular business transactions with the drawer.",
      "Highlight the date discrepancy in your Section 138 complaint to establish mala fide defence.",
    ],
    drawerTrap:
      "Filing a false police complaint claiming a cheque was stolen after a business dispute has arisen constitutes an offence under Section 217 of BNS (old IPC 182/211) for misleading public authorities.",
  },
  {
    id: "account-closed",
    tabLabel: "Account Closed + Stop Payment",
    badge: "Aggravated Default",
    title: "Bank Memo Cites 'Account Closed' or 'Payment Stopped by Drawer'",
    legalStatus: "CRIMINAL LIABILITY EQUALLY RIGOROUS",
    statutoryBasis: "NEPC Micon Ltd. v. Magma Leasing Ltd. (1999) 4 SCC 253 & Laxmi Dyechem (2012)",
    coreRule:
      "Closing an account or issuing stop payment instructions after executing a negotiable instrument is legally equivalent to dishonour for 'funds insufficient'. The Supreme Court held in NEPC Micon and Laxmi Dyechem that any instruction or act by the drawer rendering the cheque unpayable falls squarely within Section 138.",
    actionSteps: [
      "Ensure the bank return memo is retained in original with the clearing branch seal.",
      "Issue the Section 138 notice within 30 days citing NEPC Micon and Laxmi Dyechem precedents.",
      "Inquire into whether the closure was intentional to defeat creditors, supporting an additional charge under Section 318 BNS (cheating).",
      "File within 1 month from expiry of the 15-day notice period.",
    ],
    drawerTrap:
      "Drawers attempting to evade Section 138 by closing the bank account only compound their exposure, enabling the complainant to pursue both Section 138 NI Act and BNS Section 318(4) for criminal cheating.",
  },
];

export default function StopPaymentProblemTabs() {
  const [activeTab, setActiveTab] = useState(TAB_DATA[0].id);
  const currentScenario = TAB_DATA.find((t) => t.id === activeTab) || TAB_DATA[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 md:p-8 space-y-6">
      {/* Horizontal Tab Buttons */}
      <div className="flex overflow-x-auto gap-2 pb-2 border-b border-slate-200 no-scrollbar">
        {TAB_DATA.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Content Card */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-red-100 text-red-800">
            {currentScenario.badge}
          </span>
          <span className="text-xs font-semibold text-slate-500">
            {currentScenario.statutoryBasis}
          </span>
        </div>

        <div>
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-1">
            {currentScenario.title}
          </h3>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-lg text-xs font-bold text-emerald-800">
            <span>Verdict:</span>
            <span>{currentScenario.legalStatus}</span>
          </div>
        </div>

        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <strong className="text-slate-900 font-bold block mb-1">Statutory Rule:</strong>
          {currentScenario.coreRule}
        </div>

        <div className="space-y-2">
          <h4 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider">
            Mandatory Action Steps for Payee / Creditor:
          </h4>
          <ul className="space-y-2">
            {currentScenario.actionSteps.map((step, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  ✓
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-xs sm:text-sm text-amber-950 leading-relaxed">
          <strong className="font-bold text-amber-900 block mb-0.5">Common Drawer Trap:</strong>
          {currentScenario.drawerTrap}
        </div>
      </div>
    </div>
  );
}
