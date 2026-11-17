"use client";

import React, { useState } from "react";
import Link from "next/link";

interface CrossBorderScenario {
  id: string;
  tabLabel: string;
  title: string;
  statutoryTrigger: string;
  bottleneck: string;
  legalMechanism: string;
  operationalSteps: {
    step: string;
    detail: string;
  }[];
  primaryRoute: {
    label: string;
    href: string;
  };
}

const CROSS_BORDER_SCENARIOS: CrossBorderScenario[] = [
  {
    id: "edpms-da-default",
    tabLabel: "DA / Open Account & EDPMS",
    title: "Overseas Buyer Defaults on 60–90 Day DA / Open-Account Export Bills & AD Bank Threatens EDPMS Caution-Listing",
    statutoryTrigger: "FEMA 1999 Export Master Direction (9-Month Rule, Para C.20/C.23 & Clause C.24)",
    bottleneck:
      "Indian engineering, spice, basmati rice, garment, and pharma exporters routinely ship on Documents Against Acceptance (DA) or Open Account terms to US, EU, UK, UAE, and African buyers. When the foreign buyer stops responding past 270 days, the exporter's AD Category-I Bank flags the Shipping Bill in RBI EDPMS, threatening IEC Caution-Listing, freezing RoDTEP/Duty Drawback scripts, and blocking future export packing credit.",
    legalMechanism:
      "Under RBI Master Direction on Export of Goods and Services, an AD Bank can approve EDPMS write-off (up to 5%/10% self-write-off or higher AD-Bank write-off) or grant extension only when the exporter produces documentary proof of 'bonafide legal recovery efforts' or an advocate's legal opinion showing foreign litigation is disproportionate to the claim. Separately, if ECGC settles the claim, Clause C.24 permits unconditional EDPMS write-off without the 10% cap.",
    operationalSteps: [
      {
        step: "1. Serve Dual-Purpose FEMA & ECGC Legal Demand Notice",
        detail:
          "Issue an Advocate-signed demand notice via registered email, business messaging, and international courier annexing Commercial Invoice, Packing List, Bill of Lading/AWB, and Shipping Bill under BSA 2023 s.63.",
      },
      {
        step: "2. File ECGC Default Intimation Within Policy Window",
        detail:
          "Submit Form 205 / online default declaration to ECGC within the prescribed overdue window (typically 30 days from due date) along with the served legal demand notice and courier tracking.",
      },
      {
        step: "3. Regularize AD-Bank EDPMS & Customs Drawback",
        detail:
          "Submit the Advocate Notice, buyer default dossier, and disproportionate-cost legal opinion (where applicable) to your AD Category-I Bank for extension or Para C.20/Clause C.24 write-off, shielding Drawback under Customs Rule 18(2).",
      },
    ],
    primaryRoute: {
      label: "Read Export Dues Recovery Guide",
      href: "/recovery/export-dues",
    },
  },
  {
    id: "cad-port-abandonment",
    tabLabel: "CAD / DP Port Abandonment",
    title: "Container Landed at Jebel Ali / Rotterdam / Mombasa & Buyer Refuses to Retire CAD/DP Documents",
    statutoryTrigger: "ICC URC 522, RBI Price-Reduction / Re-Import Rules & Maritime Lien Mitigation",
    bottleneck:
      "Exporters ship perishable agro, textiles, or ceramic containers on Cash Against Documents (CAD) or Documents Against Payment (DP). Once the vessel berths at a foreign port, the buyer refuses to pay the presenting bank to retire the original Bill of Lading—letting container demurrage and port detention accrue daily to extort a 35%–50% distress discount.",
    legalMechanism:
      "Because the exporter still holds title through the unendorsed original Bill of Lading held by the collecting bank under ICC URC 522, the buyer cannot legally clear customs without payment. Rapidly serving a 48-hour 'Notice of Alternate Sale & Loss Mitigation' freezes the buyer's extortion leverage while creating the AD-Bank audit trail required to resell to an alternate buyer, reduce invoice value within RBI limits, or re-import the cargo.",
    operationalSteps: [
      {
        step: "1. Instruct Presenting Bank to Hold Original B/L & Log Dishonour",
        detail:
          "Obtain formal non-payment / non-acceptance advice from the foreign collecting bank under URC 522 Article 26 to lock the exact date of buyer breach.",
      },
      {
        step: "2. Serve 48-Hour Mitigation & Alternate-Buyer Notice",
        detail:
          "Place the defaulting consignee on formal notice that demurrage, port storage, and resale price shortfall will be recovered under the governing contract and UN CISG / Indian Contract Act s.73.",
      },
      {
        step: "3. Execute AD-Bank Approved Resale or Re-Import",
        detail:
          "Use the notice + collecting bank dishonour memo to secure urgent AD Category-I Bank permission for switching the Bill of Lading to a standby buyer or re-importing without FEMA penalty.",
      },
    ],
    primaryRoute: {
      label: "Send International Client Legal Notice",
      href: "/legal-notice-to-international-client-unpaid-invoice-recovery",
    },
  },
  {
    id: "lc-ucp-600-dishonour",
    tabLabel: "LC Discrepancy & UCP 600",
    title: "Foreign Issuing Bank Manufactures Bogus LC Discrepancies After Goods Shipped to Delay or Dishonour Payment",
    statutoryTrigger: "ICC UCP 600 Article 14, Article 16(c) & Article 16(f) (5-Banking-Day Preclusion)",
    bottleneck:
      "Exporters rely on Irrevocable Letters of Credit (LCs) from Middle Eastern, African, or Asian issuing banks, only to receive a vague SWIFT MT734 refusal citing trivial typos (e.g., comma variance in consignee address or minor HS code formatting) after the buyer's market price drops—or worse, after the issuing bank fails to respond within 5 banking days.",
    legalMechanism:
      "Under ICC UCP 600 Article 14(a)/(d), banks examine documents solely on their face for compliance and need not mirror-image non-material data. Crucially, under Article 16(c) and Article 16(f), if an issuing bank fails to send a single, complete, compliant refusal notice listing every discrepancy and document disposal status within 5 banking days following presentation, it is strictly precluded from claiming the documents do not comply and MUST honour the LC.",
    operationalSteps: [
      {
        step: "1. Audit Presentation Timestamp vs. SWIFT MT734 Refusal",
        detail:
          "Calculate exact banking days in the issuing bank's jurisdiction from the courier delivery receipt at the bank's trade finance counter to the SWIFT MT734 timestamp.",
      },
      {
        step: "2. Issue UCP 600 Article 16(f) Preclusion Demand",
        detail:
          "Serve a formal Advocate & Trade-Finance Demand Notice on both the Issuing Bank and Negotiating Bank invoking strict preclusion if the 5-day or single-notice rule was breached.",
      },
      {
        step: "3. Enforce Against Applicant & Confirming Bank",
        detail:
          "If discrepancies were waived by the applicant or immaterial under ISBP 821, escalate simultaneously against the confirming bank (if any) and underlying buyer.",
      },
    ],
    primaryRoute: {
      label: "Read International Payment Recovery Guide",
      href: "/recovery/international-client-payment",
    },
  },
  {
    id: "importer-fraud-bec",
    tabLabel: "Importer Fraud & BEC Hijack",
    title: "Indian Importer TT Advance Lost to Non-Shipment / Scrap Fraud or Exporter Hit by BEC 'Updated IBAN' Wire Hijack",
    statutoryTrigger: "RBI Import Master Direction (IDPMS >6 Months), SWIFT Recall & Common-Law BEC Liability",
    bottleneck:
      "Two parallel cross-border crises hit Indian trade desks: (A) Indian importers wire 30%–100% TT advance to Chinese, Turkish, or European machinery/scrap suppliers who vanish or ship stones in containers—triggering RBI IDPMS scrutiny for unclosed outward remittances past 6 months; and (B) foreign buyers wire USD 100K+ to a hacker's spoofed IBAN after a Business Email Compromise (BEC) attack and refuse to pay the Indian exporter again.",
    legalMechanism:
      "For importers, RBI Master Direction on Import of Goods and Services mandates closing IDPMS entries within 6 months; failing to show bona fide legal recovery action risks Enforcement Directorate (ED) reference. For BEC wire hijack, settled commercial law holds that payment to an impostor does NOT discharge the buyer's debt unless the seller's own email server negligence proximately caused the spoof.",
    operationalSteps: [
      {
        step: "1. Trigger Urgent SWIFT Recall / Beneficiary Bank Freeze (Within 72 Hrs)",
        detail:
          "Instruct your AD Bank to transmit an immediate SWIFT MT199 / fraud-freeze recall and file a cyber-crime / Interpol-linked complaint to trap funds before layering.",
      },
      {
        step: "2. Preserve Email Headers & Server SPF/DKIM Logs (BSA s.63)",
        detail:
          "In BEC disputes, export raw MIME headers to prove the spoofed domain originated on the buyer's compromised mailbox, defeating the buyer's 'we already paid' defense.",
      },
      {
        step: "3. File IDPMS Legal Recovery Dossier with AD Bank",
        detail:
          "For unfulfilled import advances, serve a cross-border legal notice and criminal/arbitral claim dossier so your AD Bank logs bonafide recovery steps in RBI IDPMS.",
      },
    ],
    primaryRoute: {
      label: "Start ₹999 Cross-Border Notice Now",
      href: "/user/new-recovery",
    },
  },
];

export default function ExportersHubScenarioTabs() {
  const [activeId, setActiveId] = useState<string>(CROSS_BORDER_SCENARIOS[0].id);
  const activeScenario =
    CROSS_BORDER_SCENARIOS.find((s) => s.id === activeId) || CROSS_BORDER_SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Switcher */}
      <div
        role="tablist"
        aria-label="Cross-border trade recovery scenarios"
        className="flex flex-wrap gap-2 mb-6"
      >
        {CROSS_BORDER_SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeId;
          return (
            <button
              key={scenario.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(scenario.id)}
              className={`px-3.5 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                isActive
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md shadow-red-900/15"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Panel */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200">
            {activeScenario.statutoryTrigger}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug mb-4">
          {activeScenario.title}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-amber-700 mb-1.5">
              Commercial &amp; FEMA Bottleneck
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.bottleneck}
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 mb-1.5">
              Statutory &amp; Contractual Counter-Move
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.legalMechanism}
            </p>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
            3-Step Operational Execution Protocol
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {activeScenario.operationalSteps.map((item) => (
              <div
                key={item.step}
                className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col justify-between"
              >
                <div>
                  <p className="text-xs font-extrabold text-slate-900 mb-1.5">{item.step}</p>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-200">
          <p className="text-xs text-slate-500 font-medium">
            Ready to generate an AD-Bank &amp; ECGC audit-ready demand notice?
          </p>
          <Link
            href={activeScenario.primaryRoute.href}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-[#DC2626] text-white text-xs font-bold transition-colors"
          >
            <span>{activeScenario.primaryRoute.label}</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
