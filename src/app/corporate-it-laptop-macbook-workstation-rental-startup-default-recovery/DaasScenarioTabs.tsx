"use client";

import React, { useState } from "react";

interface ScenarioItem {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  triggerFact: string;
  statutoryWeapons: string[];
  actionSteps: string[];
  riskGuardrail: string;
}

const SCENARIOS: ScenarioItem[] = [
  {
    id: "wfh-employee-lien",
    tabLabel: "1. Laid-Off WFH Staff Holding Laptops",
    badge: "Employee Salary-Lien Trap",
    title: "Laid-Off Remote Employees Refuse Return Until Unpaid Salaries Are Cleared",
    triggerFact:
      "A funded SaaS or D2C startup lays off 150 remote engineers across Bengaluru, Pune, NCR, and Tier-2 towns without clearing F&F salaries. Ex-employees hold onto 80 leased MacBook Pros as 'security' for salary dues.",
    statutoryWeapons: [
      "Indian Contract Act s.148–161 (Bailment): Title never passes to the startup; an employee has zero legal lien (s.170/171) over a third-party lessor's MacBook for employer salary arrears.",
      "Specific Relief Act s.7 & s.8: Direct right of the true owner to compel immediate delivery of specific serial-numbered movable property from any third party in wrongful possession.",
      "BNS 2023 s.316(2) & s.303/314: Dishonest retention of entrusted hardware after explicit Asset-Owner Return Notice constitutes criminal misappropriation / breach of trust.",
    ],
    actionSteps: [
      "Issue a Dual-Track Notice: (a) Master Lease Termination + Arrears/Buyout Notice to the Startup & Directors, and (b) Individual Serial-Number Asset-Owner Return Notices to each WFH employee holding a device.",
      "Attach the OEM Purchase Invoice + Master Rental Agreement ownership clause + ABM/Autopilot serial mapping so the employee realizes the laptop does NOT belong to their ex-employer.",
      "Offer a frictionless 7-day reverse-pickup courier window (BlueDart/Delhivery insured pickup) before triggering MDM Activation Lock and jurisdictional Police Station intimation.",
    ],
    riskGuardrail:
      "Never threaten employees with false HR blacklisting; keep individual notices strictly factual—proving third-party ownership, providing prepaid pickup, and stating BNS s.316/s.314 consequences if unreturned.",
  },
  {
    id: "director-ghosting-shutdown",
    tabLabel: "2. Startup Shutdown & Director Ghosting",
    badge: "Cash Burn & Vacated Office",
    title: "Startup Closes Co-Working Office, Directors Stop Answering, 6 Months Rent Overdue",
    triggerFact:
      "The lessee startup vacates its WeWork/Awfis floor, stops paying monthly DaaS invoices, ignores WhatsApp reminders, and fails to provide an employee-wise asset allocation sheet.",
    statutoryWeapons: [
      "BNS 2023 s.316(2) (Criminal Breach of Trust by Bailee): Failure to return or account for entrusted movable assets upon termination of bailment.",
      "Director & Authorized Signatory Liability: Naming Managing Directors and CFO/IT-Head signatories who executed the Master Lease & Delivery Challans for active dishonest retention.",
      "CPC Order XXXVII Summary Suit / Commercial Court + Order XL Rule 1 Court Receiver for liquidated rental arrears and Residual Buyout Value.",
    ],
    actionSteps: [
      "Serve a formal Bailment Termination & Serial-Wise Asset Accounting Notice on the company's MCA registered office, all Directors' DIN-linked addresses, and personal emails/WhatsApp.",
      "CC the jurisdictional Police Station (SHO) email on the BNS s.316 notice where the hardware was originally delivered per the Delivery Challan and E-Way Bill.",
      "Trigger Residual Buyout Value conversion: convert unreturned devices into a liquidated Buyout + Overdue Hire Claim under the Master Rental Agreement.",
    ],
    riskGuardrail:
      "Under Indian corporate law, directors are not automatically liable for pure civil debt—your notice must plead specific entrustment, personal execution of challans, and dishonest diversion/concealment to sustain BNS s.316.",
  },
  {
    id: "grey-market-resale",
    tabLabel: "3. Wiped & Sold in Grey Market",
    badge: "ABM Lock & BNS s.317",
    title: "Unreturned MacBooks or ThinkPads Listed on OLX / Local Grey-Market Dealers",
    triggerFact:
      "MDM telemetry shows devices offline, wiped, or popping up in Nehru Place, Lamington Road, or SP Road grey markets, or a startup founder pledged leased workstations to a local financier.",
    statutoryWeapons: [
      "BNS 2023 s.316(2) against the defaulting lessee/employee AND BNS 2023 s.317 (Dishonestly Receiving Stolen Property) against any scrap/grey-market reseller.",
      "Apple Business Manager (ABM) / Windows Autopilot Hardware-Hash Enrollment: Enforces server-level Activation Lock even after DFU wipe or OS reinstall.",
      "Contract Act s.154 & s.161: Absolute liability of bailee for unauthorized alienation or conversion of hired goods.",
    ],
    actionSteps: [
      "Execute contractual MDM Remote Lock / Lost Mode displaying the lessor's legal ownership banner, toll-free return number, and 'Property of [DaaS Lessor] — Not for Resale' screen.",
      "File a consolidated serial-number & IMEI/MAC-address police complaint under BNS s.316 + s.317 with OEM tax invoices and ABM enrollment certificates.",
      "Issue a Residual Buyout + Replacement Value demand against the startup and directors simultaneously—never waive monetary buyout while police trace runs.",
    ],
    riskGuardrail:
      "Only activate MDM Lost Mode / Screen Lock if your Master Rental Agreement contains an explicit default-lock authorization clause and you have served prior written termination notice—avoiding IT Act s.43 allegations.",
  },
  {
    id: "nclt-cirp-moratorium",
    tabLabel: "4. NCLT / CIRP Insolvency Moratorium",
    badge: "IBC s.18(1)(f) Exclusion",
    title: "Defaulting Startup Admitted to NCLT CIRP Under IBC Section 7 or 9",
    triggerFact:
      "An operational or financial creditor pushes the startup into Corporate Insolvency Resolution Process (CIRP). The Interim Resolution Professional (IRP) freezes all payments under Section 14 moratorium and claims leased laptops as 'corporate debtor assets'.",
    statutoryWeapons: [
      "IBC 2016 Section 18(1)(f) Explanation (a): Expressly EXCLUDES 'assets owned by a third party in possession of the corporate debtor held under trust or under contractual arrangements including bailment' from the IRP's control/estate.",
      "IBC Section 14(1)(d) Proviso & Operational Creditor Form B: File Form B for pre-CIRP rental arrears while demanding physical handover of leased hardware outside the asset pool.",
      "MSMED Act s.15–18 / Contractual Buyout Valuation for any missing or untraceable serial numbers prior to CIRP commencement.",
    ],
    actionSteps: [
      "Within 7 days of public announcement, serve a formal Third-Party Asset Segregation & Return Demand on the IRP/RP citing IBC s.18(1)(f) Explanation (a), attaching Master Lease, OEM Invoices, and serial-tag schedules.",
      "File Form B (Operational Creditor Claim) for all unpaid monthly rental invoices up to the Insolvency Commencement Date (ICD).",
      "If the IRP refuses release of traceable third-party leased laptops, move an urgent IA before the NCLT Bench under Section 60(5) for asset exclusion and handover.",
    ],
    riskGuardrail:
      "Do NOT unilaterally seize hardware from the corporate debtor's premises after Section 14 moratorium begins without IRP consent or NCLT order; assert s.18(1)(f) exclusion formally in writing first.",
  },
];

export default function DaasScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div
        role="tablist"
        aria-label="Startup IT Hardware Default Scenarios"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 mb-6"
      >
        {SCENARIOS.map((item) => {
          const isSelected = item.id === activeTab;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActiveTab(item.id)}
              className={`text-left px-3.5 py-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md shadow-red-900/15"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              <span
                className={`block text-[10px] uppercase tracking-wider mb-0.5 ${
                  isSelected ? "text-red-100" : "text-slate-400"
                }`}
              >
                {item.badge}
              </span>
              <span className="block leading-snug">{item.tabLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Active Panel */}
      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5"
      >
        <div>
          <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] mb-2">
            {current.badge}
          </span>
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
            {current.title}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <strong className="text-slate-800">Commercial Trigger: </strong>
            {current.triggerFact}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-2.5">
              Applicable Statutory Weapons
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              {current.statutoryWeapons.map((w, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#DC2626] shrink-0" />
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2.5">
              Creditor Execution Sequence
            </p>
            <ol className="space-y-2 text-xs sm:text-sm text-slate-700">
              {current.actionSteps.map((step, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs sm:text-sm text-amber-900">
          <strong className="font-bold uppercase tracking-wider text-[11px] text-amber-800 block mb-1">
            Compliance Guardrail
          </strong>
          {current.riskGuardrail}
        </div>
      </div>
    </div>
  );
}
