"use client";

import React, { useState } from "react";

interface ScenarioItem {
  id: string;
  tabLabel: string;
  title: string;
  trigger: string;
  immediateAction: string;
  statutoryRemedy: string;
  evidenceRequired: string;
}

const SCENARIOS: ScenarioItem[] = [
  {
    id: "pdc-bounce-surya-ghar",
    tabLabel: "1. PM Surya Ghar PDC Bounce",
    title: "Local Installer Collects Rooftop Subsidy Cash & Bounces 30-Day PDC",
    trigger:
      "A Tier-2/3 PM Surya Ghar empaneled installer lifts 350 kW of ALMM DCR Bifacial TOPCon modules and string inverters on 30-day credit against post-dated cheques, collects 100% milestone payments from residential/C&I customers, and bounces the PDCs.",
    immediateAction:
      "Immediately place all dispatched module and inverter serial numbers on Conditional OEM Warranty Hold inside the manufacturer portal. Issue a mandatory 30-day NI Act s.138(b) statutory demand notice within 30 days of the bank return memo via Email, WhatsApp, and Speed Post RPAD.",
    statutoryRemedy:
      "File a Criminal Complaint under Section 138 read with Section 141 of the Negotiable Instruments Act, 1881 and seek 20% interim compensation under Section 143A upon plea recording. Simultaneously file an MSEFC reference under MSMED Act s.18 (if registered) or Order XXXVII CPC summary suit for the balance ledger.",
    evidenceRequired:
      "Original dishonoured cheque + bank return memo, GST e-Invoice & e-Way Bill, signed LR/POD, Serial-Number Flash Test / IV-Curve mapping sheet, and BSA 2023 s.63 certificate.",
  },
  {
    id: "watt-peak-crash",
    tabLabel: "2. Watt-Peak Price Crash",
    title: "Installer Refuses Booked Container After ₹/Wp Market Rate Drops",
    trigger:
      "An EPC trader locks a forward booking for 1 MW (2 containers) of Mono-PERC / TOPCon modules at ₹16.80/Wp with a 10% token advance. When module prices fall to ₹14.90/Wp before port clearance or ex-works dispatch, the buyer cancels lifting and demands refund of the advance.",
    immediateAction:
      "Serve a formal Notice of Readiness & Mitigation Sale under Section 54(2) and Section 56 of the Sale of Goods Act, 1930, granting 7 days to lift stock against RTGS before reselling at prevailing spot market rates.",
    statutoryRemedy:
      "Recover the exact price-differential loss (₹1.90/Wp = ₹19.00 Lakh on 1 MW) plus container demurrage, port detention, and bonded warehousing charges as damages for non-acceptance under Section 56 of the Sale of Goods Act, 1930, adjusting the forfeited token advance.",
    evidenceRequired:
      "Signed Proforma Invoice / Forward Allocation Agreement, irrevocable LC/PO terms, custom-clearance/ex-works readiness email, third-party spot resale invoices showing mitigation price, and warehousing bills.",
  },
  {
    id: "warranty-lock-leverage",
    tabLabel: "3. Serial-Number Warranty Hold",
    title: "Withholding OEM Flash-Test & Warranty Certificate Until Ledger Cleared",
    trigger:
      "A regional EPC contractor installs 500 kW of modules and 5x 100 kW string inverters on a commercial factory roof but defaults on the final 40% credit tranche while demanding OEM Serial-Number Warranty Certificates and ALMM/DCR declarations for CEIG & DISCOM net-metering.",
    immediateAction:
      "Exercise contractual Conditional Warranty Issuance rights: notify the installer (and copy the end-client EPC project manager only on factual payment-linked issuance status without defamatory language) that 25-year linear performance warranty certificates activate strictly upon 100% invoice realization.",
    statutoryRemedy:
      "Enforce the explicit Conditional Warranty & Title Retention clause in the Distributorship Agreement alongside Contract Act s.73/74 interest and Section 43B(h) Income Tax disallowance warning (for Udyam-registered distributors/OEMs) to compel immediate RTGS clearance.",
    evidenceRequired:
      "Distributorship/Credit Terms containing Conditional Warranty Issuance clause, factory EL/Flash-Test serial mapping spreadsheet, Udyam Registration Certificate, and reconciled GST ledger.",
  },
  {
    id: "inverter-bos-diversion",
    tabLabel: "4. Inverter & BOS Diversion",
    title: "Sub-Dealer Diverts Consigned Inverters & DC Cables Without Remitting",
    trigger:
      "A BOS wholesaler or regional super-stockist supplies 40 string inverters, DCDBs, and 15 km of 4 sq.mm solar DC cables on consignment/credit. The sub-dealer sells the stock to third-party projects for cash, shuts its showroom, and ignores ledger reconciliation.",
    immediateAction:
      "Lock inverter Wi-Fi/GPRS cloud commissioning activation (where OEM remote-provisioning lock applies contractually) and serve a composite BNS s.316 (Criminal Breach of Trust) + Civil Repossession / Order XXXVIII Rule 5 Attachment Notice.",
    statutoryRemedy:
      "Initiate civil recovery under Order XXXVII CPC (based on acknowledged GST invoices and balance confirmations) paired with an urgent Order XXXVIII Rule 5 application for attachment of the sub-dealer's bank accounts and unsold warehouse inventory, plus NI Act s.138 on security cheques.",
    evidenceRequired:
      "Consignment/Bailment agreement, GST e-Way Bills & delivery challans with inverter serial numbers, cloud-portal activation logs, and BSA 2023 s.63 electronic ledger trail.",
  },
];

export default function SolarDistributorScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      <div
        role="tablist"
        aria-label="Solar Module & Inverter Distributor Credit Default Scenarios"
        className="flex flex-wrap gap-2 mb-5"
      >
        {SCENARIOS.map((item) => {
          const isActive = item.id === activeTab;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(item.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                isActive
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md shadow-red-900/20"
                  : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {item.tabLabel}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
            {current.title}
          </h3>
          <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200">
            Distributor Playbook
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              Default Trigger
            </p>
            <p className="text-slate-700 leading-relaxed">{current.trigger}</p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] mb-1.5">
              Immediate 48-Hour Action
            </p>
            <p className="text-slate-700 leading-relaxed">
              {current.immediateAction}
            </p>
          </div>

          <div className="bg-emerald-50/70 p-4 rounded-xl border border-emerald-200">
            <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-1.5">
              Statutory Remedy &amp; Forum
            </p>
            <p className="text-slate-800 leading-relaxed">
              {current.statutoryRemedy}
            </p>
          </div>

          <div className="bg-slate-900 text-slate-100 p-4 rounded-xl border border-slate-800">
            <p className="text-[11px] font-bold uppercase tracking-wider text-amber-400 mb-1.5">
              Mandatory Evidentiary File
            </p>
            <p className="text-slate-200 leading-relaxed">
              {current.evidenceRequired}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
