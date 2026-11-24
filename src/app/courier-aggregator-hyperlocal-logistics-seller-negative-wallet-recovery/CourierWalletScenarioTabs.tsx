"use client";

import React, { useState } from "react";

interface ScenarioItem {
  id: string;
  tabLabel: string;
  title: string;
  triggerPattern: string;
  legalBasis: string;
  actionSteps: {
    step: string;
    detail: string;
  }[];
  statutoryAnchor: string;
}

const SCENARIOS: ScenarioItem[] = [
  {
    id: "rto-early-cod",
    tabLabel: "RTO Surge Deficit",
    title: "Early COD Remitted Before High-RTO Reverse Billing Hits Wallet",
    triggerPattern:
      "Aggregator remits T+1 or T+2 Cash-on-Delivery proceeds to build D2C merchant retention. Two weeks later, 25%–40% of shipments fail delivery (RTO), generating forward + reverse freight debits that push the seller wallet to -₹25,000 to -₹3,50,000. The merchant simply opens a new account on a rival aggregator.",
    legalBasis:
      "Under Section 10A of the Information Technology Act, 2000 and Section 73 of the Indian Contract Act, 1872, clickwrap Merchant Shipping Terms authorizing COD-to-freight set-off and post-remittance wallet clawback are binding commercial covenants. Once reconciled against AWB delivery/RTO scans, the negative ledger becomes a liquidated debt recoverable under Order XXXVII CPC or institutional arbitration.",
    actionSteps: [
      {
        step: "Freeze Active Remittances & Lock Sub-Accounts",
        detail:
          "Immediately suspend pending COD payouts across linked GSTIN/PAN/bank-account merchant IDs under contractual cross-account set-off clauses.",
      },
      {
        step: "Generate Hash-Stamped AWB & UTR Reconciliation Pack",
        detail:
          "Export shipment-level AWB tracking, RTO reason codes, and COD UTR remittance proofs with a Section 63 BSA 2023 electronic record certificate.",
      },
      {
        step: "Trigger Synchronized 15-Day Batch Legal Notice",
        detail:
          "Dispatch fact-verified demand notices via registered Email, WhatsApp, and Speed Post RPAD demanding wallet regularization within 15 days.",
      },
    ],
    statutoryAnchor: "IT Act s.10A • Contract Act s.73 • BSA 2023 s.63 • Order XXXVII CPC",
  },
  {
    id: "volumetric-weight",
    tabLabel: "Weight Audit Arrears",
    title: "Volumetric Weight Discrepancy Disputes & Sorter Re-Weigh Debits",
    triggerPattern:
      "D2C sellers under-declare parcel dead weight (e.g., declaring 500g for bulky apparel or footwear boxes with 2.5 kg volumetric weight under L×B×H / 5000). When automated hub dimensioners flag the variance and debit the wallet, sellers raise blanket disputes and abandon negative balances.",
    legalBasis:
      "Standard courier aggregator rate cards incorporate volumetric-vs-dead-weight (whichever is higher) billing as an express price term under the Sale of Goods / Contract framework. Where the merchant fails to contest the automated weight-discrepancy ticket with unboxing/dimension proof within the contractual 7-day dispute window, the billed surcharge attains finality as an admitted account stated.",
    actionSteps: [
      {
        step: "Attach Automated Sorter Dimensioner Images",
        detail:
          "Bundle timestamped hub laser-dimensioner photos, AWB barcode scans, and carrier weight-discrepancy invoice debit notes for every contested shipment.",
      },
      {
        step: "Invoke Contractual 7-Day Dispute Estoppel",
        detail:
          "Cite the merchant's failure to submit counter-packaging measurements within the SLA window, barring belated oral objections.",
      },
      {
        step: "Serve Consolidated Ledger Notice with Interest",
        detail:
          "Demand principal weight arrears plus contractual late-payment interest (18%–24% p.a.) across all uncontested billing cycles.",
      },
    ],
    statutoryAnchor: "Contract Act ss.37 & 73 • IT Act s.10A • Account Stated Estoppel",
  },
  {
    id: "fake-cod-fraud",
    tabLabel: "Fake COD Fraud",
    title: "Collusive Fake COD Orders, Empty-Box Returns & Wallet Drain",
    triggerPattern:
      "Fraudulent sellers ship low-value or empty parcels on COD to collusive consignees, collect early COD payouts, or trigger systematic fake-RTO / damaged-return claims to extract platform credits while leaving the shipping wallet deeply negative.",
    legalBasis:
      "Deliberate misrepresentation of parcel contents, staged COD cycles, and siphoning of early-remitted COD funds cross the threshold from civil default into dishonest misappropriation and cheating under Sections 316 and 318 of the Bharatiya Nyaya Sanhita (BNS), 2023, alongside civil recovery of the full defrauded wallet balance.",
    actionSteps: [
      {
        step: "Quarantine Device Fingerprints, IP Logs & Bank Trails",
        detail:
          "Preserve merchant onboarding KYC, GSTIN/PAN, IP login logs, consignee phone clustering, and courier hub weight-mismatch scans under BSA s.63.",
      },
      {
        step: "Issue Dual Civil-Cum-Criminal Statutory Notice",
        detail:
          "Serve a strict 7-day demand notice putting directors/proprietors on notice of BNS s.316/s.318 criminal complaint and cyber-cell reporting.",
      },
      {
        step: "File Police / EOW Complaint & Summary Recovery",
        detail:
          "Escalate unrecovered fraud clusters (>₹2 Lakh) to local Economic Offences Wing alongside parallel civil recovery proceedings.",
      },
    ],
    statutoryAnchor: "BNS 2023 ss.316 & 318 • IT Act s.66D • BSA 2023 s.63",
  },
  {
    id: "postpaid-enterprise",
    tabLabel: "Postpaid Enterprise",
    title: "Postpaid Enterprise Courier & Hyperlocal Fleet SLA Billing Defaults",
    triggerPattern:
      "Mid-market e-commerce brands and quick-commerce aggregators onboarded on 30-day postpaid credit lines or dedicated hyperlocal rider-slot guarantees default on ₹5 Lakh–₹40 Lakh monthly GST freight invoices while disputing minor delivery SLA breaches.",
    legalBasis:
      "Postpaid Master Services Agreements (MSAs) backed by GST e-Invoices, signed digital manifests, and E-Way Bills constitute written liquidated contracts enforceable via Order XXXVII CPC summary suits or Section 12A Commercial Courts pre-institution mediation. If the courier aggregator holds MSME status, Section 16 MSMED Act mandates 3x RBI Bank Rate compound interest.",
    actionSteps: [
      {
        step: "Reconcile GST e-Invoice & GSTR-1 / 2B Acceptance",
        detail:
          "Prove that the enterprise client claimed Input Tax Credit (ITC) on your freight GST invoices, creating a binding statutory admission of liability.",
      },
      {
        step: "De-Link Unproven SLA Deductions",
        detail:
          "Reject arbitrary blanket SLA penalty set-offs that lack shipment-level breach notices required under the MSA.",
      },
      {
        step: "Escalate via Section 12A Mediation / Arbitration / Order 37",
        detail:
          "Initiate 15-day Advocate Demand Notice followed by Commercial Court pre-institution mediation or Institutional Arbitration.",
      },
    ],
    statutoryAnchor: "Commercial Courts Act s.12A • Order XXXVII CPC • MSMED Act s.16",
  },
];

export default function CourierWalletScenarioTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTabId) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div
        role="tablist"
        aria-label="Courier Aggregator Negative Wallet Scenarios"
        className="flex flex-wrap gap-2 mb-6"
      >
        {SCENARIOS.map((item) => {
          const isActive = item.id === activeTabId;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTabId(item.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                isActive
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md shadow-red-900/15"
                  : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
              }`}
            >
              {item.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Card */}
      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-7 space-y-5"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-4">
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
            {current.title}
          </h3>
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold bg-slate-900 text-white shrink-0">
            {current.statutoryAnchor}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] mb-1.5">
              Operational Failure Mode
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.triggerPattern}
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 mb-1.5">
              Creditor Statutory Leverage
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.legalBasis}
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-3">
            3-Step Aggregator Recovery Execution
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {current.actionSteps.map((stepObj, idx) => (
              <div
                key={stepObj.step}
                className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col gap-2"
              >
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-black">
                  {idx + 1}
                </span>
                <p className="text-xs sm:text-sm font-bold text-slate-900">
                  {stepObj.step}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {stepObj.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
