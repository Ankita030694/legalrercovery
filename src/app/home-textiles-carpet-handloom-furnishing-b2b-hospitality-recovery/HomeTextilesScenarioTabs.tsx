"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  tabLabel: string;
  title: string;
  trigger: string;
  buyerDefense: string;
  statutoryCounter: string;
  remedyAction: string;
  evidenceDocs: string[];
}

const SCENARIOS: Scenario[] = [
  {
    id: "hotel-pre-opening",
    tabLabel: "Hotel Pre-Opening FF&E",
    title: "Hotel Promoter Exhausts CapEx Loan Before Paying Soft-FF&E Carpet & Curtain Bills",
    trigger:
      "A 120-key resort or business hotel places custom orders for wall-to-wall AxMinster banquet carpets from Bhadohi and FR-grade blackout curtains from Panipat. Goods are delivered and installed before the soft launch, but the promoter freezes the final 40%–60% balance citing 'bank tranche release delays' or 'post-opening cashflow'.",
    buyerDefense:
      "'Project term-loan disbursement from the bank is pending final completion certificate, and minor snags remain in lobby carpet seam alignment.'",
    statutoryCounter:
      "Under MSMED Act Section 15, payment cannot be deferred beyond 45 days from deemed acceptance—irrespective of the buyer's internal bank funding or project cashflow. Under Sale of Goods Act Section 42, once the hotel takes possession, installs the furnishings, and commences commercial guest operations, the goods are deemed unconditionally accepted. Any belated snag excuse raised after 15 days is legally barred.",
    remedyAction:
      "Serve a joint Advocate Demand Notice on the Hotel SPV and its Directors invoking Section 43B(h) Income Tax disallowance (threatening loss of tax deduction on the entire CapEx/OpEx invoice) and MSMED Act s.16 3x RBI compound interest, followed by MSEFC Samadhaan or Order XXXVII CPC Summary Suit.",
    evidenceDocs: [
      "Approved Strike-Off / Swatch sign-off and GST Tax Invoices with E-Way Bills",
      "Site Gate-Entry Register and signed Room-by-Room Handover / Installation Checklist",
      "Hotel launch photographs / OTA listing screenshots showing carpets & curtains in live commercial use",
      "Udyam Registration Certificate (Micro/Small) dated prior to the Purchase Order",
    ],
  },
  {
    id: "turnkey-contractor",
    tabLabel: "Turnkey Interior Contractor",
    title: "Turnkey Interior Firm Blames Hotel Owner ('Back-to-Back Pay-When-Paid' Trap)",
    trigger:
      "A Panipat upholstery/mattress unit or Solapur terry-towel manufacturer supplies ₹28 Lakh of custom hospitality goods to a turnkey interior contractor working for a 5-star hotel chain. The contractor refuses to pay, claiming 'our back-to-back PO states we will pay you only after the hotel developer clears our RA bill.'",
    buyerDefense:
      "'Clause 9 of our subcontract makes payment strictly contingent on back-to-back certification and release of funds by the principal hotel owner.'",
    statutoryCounter:
      "Under MSMED Act Section 15 read with Section 24 (overriding effect), any contractual 'pay-when-paid' or back-to-back clause that extends credit beyond 45 days from delivery/acceptance is void ab initio for Micro and Small enterprises. Furthermore, under Section 70 of the Indian Contract Act (non-gratuitous benefit enjoyed), if the hotel promoter has accepted and is using custom-monogrammed goods, a joint notice creates acute reputational and audit pressure on both the contractor and the brand operator.",
    remedyAction:
      "Issue a dual-addressee Legal Notice to the Turnkey Interior Contractor (primary debtor) with a formal copy marked to the Hotel Owner/Operator's General Counsel and CFO. Invoke Section 43B(h) against the contractor's audited books and file a Section 18 MSEFC reference.",
    evidenceDocs: [
      "Purchase Order issued by the Turnkey Interior Contractor and material dispatch LR/Bilty",
      "Email/WhatsApp approvals from the hotel's PMC (Project Management Consultant) or Interior Designer",
      "Ledger reconciliation or TDS Form 26AS entries confirming invoice booking by the contractor",
      "Proof of delivery at the hotel project site (unloading receipts & gate passes)",
    ],
  },
  {
    id: "export-home-textile",
    tabLabel: "Export Home-Textile Default",
    title: "Overseas Importer or Buying House Rejects Karur/Panipat Container After Dispatch",
    trigger:
      "A Karur table-linen exporter or Panipat bathmat/rug manufacturer ships a 40-ft FCL consignment on D/A (Documents Against Acceptance) or open-account terms. After the container reaches the destination port, the foreign buyer or Indian buying house demands a 25%–35% 'quality discount' citing minor GSM or shade variation.",
    buyerDefense:
      "'Destination warehouse inspection revealed thread-count variance and packaging moisture; buyer will abandon cargo unless 30% credit note is issued.'",
    statutoryCounter:
      "Under Section 230(1) of the Indian Contract Act, 1872, an Indian liaison buying house acting for a foreign merchant is presumed personally liable on the contract unless explicitly excluded in writing. Where an independent pre-shipment inspection (PSI) / AQL certificate was passed at the factory, post-landing subjective rejections violate Sections 41–42 of the Sale of Goods Act, 1930.",
    remedyAction:
      "Serve an urgent Section 230(1) Demand Notice on the Indian buying office and foreign importer. Simultaneously document the dispute for your AD-Bank under RBI EDPMS norms to protect your export realization track record and prevent FEMA caution-listing.",
    evidenceDocs: [
      "Passed Pre-Shipment Inspection (PSI) / AQL 2.5 report and lab test certificates",
      "Shipping Bill, Bill of Lading, and Factory Stuffing Container Seal photographs",
      "Buying House PO / Proforma Invoice and WhatsApp/email approvals of bulk lot samples",
      "AD-Bank EDPMS correspondence evidencing bonafide recovery steps",
    ],
  },
  {
    id: "dealer-catalogue",
    tabLabel: "Dealer Catalogue Credit",
    title: "Domestic Furnishing Dealer Defaults on 90-Day Catalogue & Upholstery Running Ledger",
    trigger:
      "A Panipat or Surat-backed furnishing wholesaler supplies sample swatch books and cut-length curtain/sofa fabric on 45–60 day credit to retail showroom dealers across Tier-1/2 cities. The dealer stops paying after ₹8–18 Lakh accumulates, switches to a rival mill, and ignores WhatsApp reminders.",
    buyerDefense:
      "'We have unsold dead-stock rolls lying in our showroom and oral commitments from your regional sales agent for 120-day credit and seasonal returns.'",
    statutoryCounter:
      "Under Section 20 and Section 138 of the Negotiable Instruments Act, 1881 (Bir Singh & Sripati Singh Supreme Court doctrine), a signed blank security cheque given at dealership onboarding can be lawfully crystallized for the admitted ledger balance after serving a 7-day ledger intimation notice. Running account GST invoices with signed transport bilties qualify directly for Order XXXVII CPC Summary Suits and MSMED s.16 compound interest.",
    remedyAction:
      "Issue a 7-Day Ledger Crystallization & Security-Cheque Presentation Intimation Notice via Speed Post RPAD + WhatsApp + Email. Upon dishonour, file Section 138 NI Act proceedings in your home-bank jurisdiction (Section 142(2)) and seek 20% interim compensation under Section 143A.",
    evidenceDocs: [
      "Dealership Onboarding Form / Signed Security Cheque & covering letter",
      "Chronological GST Tax Invoices, E-Way Bills, and Transport LRs (Bilties) with dealer stamp",
      "GSTR-1 / GSTR-2B matching showing the dealer already claimed Input Tax Credit (ITC) on your bills",
      "Signed balance confirmation or WhatsApp ledger acknowledgment",
    ],
  },
];

export default function HomeTextilesScenarioTabs() {
  const [activeTab, setActiveTab] = useState(SCENARIOS[0].id);
  const activeScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
      {/* Tab Navigation Header */}
      <div className="flex border-b border-slate-200 bg-slate-50 overflow-x-auto scrollbar-thin">
        {SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`px-4 sm:px-6 py-3.5 text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors border-b-2 cursor-pointer ${
                isActive
                  ? "border-[#DC2626] text-[#DC2626] bg-white font-bold"
                  : "border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Content Panel */}
      <div className="p-5 sm:p-6 md:p-8 space-y-6">
        <div>
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#DC2626] bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full mb-2">
            Commercial Failure Mode
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
            {activeScenario.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              Operational Trigger
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.trigger}
            </p>
          </div>
          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-1.5">
              Typical Buyer / Contractor Excuse
            </p>
            <p className="text-xs sm:text-sm text-amber-950 italic leading-relaxed">
              {activeScenario.buyerDefense}
            </p>
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-900 text-slate-100 border-l-4 border-[#DC2626]">
          <p className="text-xs font-bold uppercase tracking-wider text-red-400 mb-1.5">
            Statutory Counter-Strike
          </p>
          <p className="text-xs sm:text-sm leading-relaxed text-slate-200">
            {activeScenario.statutoryCounter}
          </p>
        </div>

        <div className="p-4 sm:p-5 rounded-xl bg-emerald-50 border border-emerald-200">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1.5">
            Immediate Creditor Action Plan
          </p>
          <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
            {activeScenario.remedyAction}
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
            Mandatory Evidentiary Packet for This Track
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {activeScenario.evidenceDocs.map((doc, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 bg-slate-50 border border-slate-200 rounded-lg p-3"
              >
                <span className="text-emerald-600 font-bold shrink-0">&#10003;</span>
                <span>{doc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
