"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  tabLabel: string;
  title: string;
  badge: string;
  buyerProfile: string;
  pretext: string;
  legalReality: string;
  statutoryHook: string;
  actionProtocol: string[];
}

const SCENARIOS: Scenario[] = [
  {
    id: "genai-gpu-cluster-burn",
    tabLabel: "1. AI Startup GPU Spike",
    title: "Venture-Backed GenAI Startup Consumes ₹48 Lakh in On-Demand H100/A100 Clusters & Abandons Bill",
    badge: "Order XXXVII CPC & Director Personal Guarantee",
    buyerProfile:
      "Generative AI, LLM fine-tuning, or computer vision startup operating under an AWS Premier / Azure Direct CSP reseller arrangement with 30-day postpaid billing terms.",
    pretext:
      "The startup provisions uncapped multi-node GPU clusters (AWS p4de/p5 instances or Azure NDv4) over 24 consecutive days to train an experimental foundation model. The consumption charges skyrocket to ₹48,60,000 against a historical monthly run-rate of ₹3,50,000. When the reseller generates the monthly GST invoice, the startup's founder fails to secure their Series A extension, terminates communication, and states: 'The AWS Cost Anomaly alerts were late, and as a limited liability company with zero remaining treasury, we cannot pay. You can write it off against your cloud partner credit pool.'",
    legalReality:
      "Under Indian contract law and the Information Technology Act, 2000, cloud resource provisioning via authenticated IAM credentials constitutes an executed commercial contract for computational capacity. The reseller's upstream obligation to remit foreign currency to AWS Inc. or Microsoft Azure is absolute and unconditioned on end-user collection. Furthermore, where the reseller incorporated personal director guarantees into the credit onboarding agreement, corporate limited liability is pierced under Section 128 of the Indian Contract Act, 1872, rendering the founders individually and severally liable.",
    statutoryHook:
      "Order XXXVII CPC (Liquidated Telemetry Debt) + Indian Contract Act 1872 s.128 (Joint & Several Director Liability) + Commercial Courts Act 2015 s.2(1)(c)(xviii)",
    actionProtocol: [
      "Export immutable AWS CloudTrail and Cost and Usage Reports (CUR) with SHA-256 cryptographic hashes under Section 63 of Bharatiya Sakshya Adhiniyam, 2023.",
      "Execute contractual console suspension protocol: isolate VPCs, de-allocate running GPU instances, and place root credentials into administrative custody.",
      "Serve an immediate 7-day Advocate Statutory Demand Notice holding both the corporate entity and individual directors personally liable under their executed Personal Deed of Guarantee.",
      "File an urgent Commercial Summary Suit under Order XXXVII CPC accompanied by an Order XXXVIII Rule 5 application to freeze the startup's remaining bank accounts and director assets before equity dissipation.",
    ],
  },
  {
    id: "crypto-mining-iam-breach",
    tabLabel: "2. Compromised IAM & Crypto Mining",
    title: "Client's Leaked API Keys Trigger ₹35 Lakh Crypto-Mining Rogue Instances, and Client Disputes Reseller Bill",
    badge: "Contractual Shared Responsibility & IT Act s.43A",
    buyerProfile:
      "Mid-market software firm, fintech app, or digital agency whose developers inadvertently exposed root AWS/GCP API access keys in a public GitHub repository.",
    pretext:
      "Threat actors harvest leaked IAM credentials from a public repository and spin up 180 high-compute c5.24xlarge and g5.12xlarge instances across multiple AWS regions (us-east-1, eu-central-1, ap-southeast-1) for Monero mining over a 96-hour holiday weekend. The reseller's consolidated billing account is debited ₹34,80,000 by AWS. The client disowns the bill: 'This was an external cyber-attack and security breach. We never authorized this compute, so the reseller must waive the invoice or absorb it under your partner insurance.'",
    legalReality:
      "Under the universally established Cloud 'Shared Responsibility Model' incorporated into commercial Master Cloud Reseller Agreements, customer credential hygiene, secret key management, and IAM access controls remain the strict and sole liability of the customer. The reseller is a commercial billing intermediary, not an insurer of client developer negligence. Under Section 43A of the Information Technology Act, the client failed to maintain reasonable security practices. The reseller's invoice represents liquidated operational pass-through costs that the client is contractually bound to reimburse.",
    statutoryHook:
      "Information Technology Act 2000 s.43A (Failure to Protect Data/Keys) + Indian Contract Act 1872 s.73 (Breach of Security Covenants) + MSMED Act 2006 s.16",
    actionProtocol: [
      "Extract AWS GuardDuty, VPC Flow Logs, and IAM Access Analyzer event records demonstrating that API calls originated from the client's dedicated access key pair.",
      "Submit an emergency joint Partner Support concession request to AWS/Azure for infrastructure fee credits while explicitly preserving all legal recovery rights against the client.",
      "Issue a formal legal communication rejecting the client's breach disclaimer, citing express terms of the Cloud Resale Agreement assigning full liability for credential compromise to the end-user.",
      "Demand immediate payment of the non-waived hyperscaler balance within 10 days, initiating MSEFC arbitration or commercial court proceedings upon non-compliance.",
    ],
  },
  {
    id: "microsoft-nce-annual-lockin",
    tabLabel: "3. Microsoft NCE Annual Lock-In",
    title: "Client Downsizes Staff by 70% and Refuses to Pay Remaining 9 Months of Non-Cancellable Microsoft 365 Seats",
    badge: "Sale of Goods Act s.42 & Unavoidable Reseller Outlay",
    buyerProfile:
      "IT services vendor, BPO, or edtech corporation that signed an annual Microsoft New Commerce Experience (NCE) agreement for 400 Microsoft 365 E5 & Copilot seats.",
    pretext:
      "To obtain Microsoft's 20% annual pricing discount compared to monthly flex terms, the client committed to a 12-month NCE contract billed monthly (₹11,20,000/month). Four months into the term, the client undergoes a major restructuring, terminates 280 employees, and unilaterally cancels the standing credit card / NACH mandate: 'We have de-provisioned 280 users, so we will only pay for the 120 active seats moving forward. Microsoft licenses are elastic, and you cannot charge us for ghost users.'",
    legalReality:
      "Under Microsoft's global NCE commercial architecture, annual commitment licenses cannot be cancelled, reduced, or refunded after the statutory 168-hour (7-day) cancellation window following procurement. The Tier-1/Tier-2 CSP Partner remains contractually locked into paying Microsoft Ireland / Singapore for all 400 seats for the full 12-month term regardless of active user allocation. The client's unilateral mid-term cancellation constitutes anticipatory repudiation under Section 39 of the Indian Contract Act, 1872, entitling the reseller to recover the full unexpired balance (₹89,60,000) as crystallized damages.",
    statutoryHook:
      "Indian Contract Act 1872 ss. 39 & 73 (Anticipatory Breach & Direct Damages) + Commercial Courts Act 2015 s.2(1)(c)(xviii)",
    actionProtocol: [
      "Compile the signed Microsoft NCE Order Form, master terms acknowledging non-cancellable annual seat commitments, and Microsoft Partner Center tenant license logs.",
      "Serve a formal Legal Notice of Anticipatory Breach under Section 39 of the Contract Act, clarifying that Microsoft CSP policies legally mandate 100% partner settlement.",
      "Advise the client that upon non-payment, the entire tenant subscription will be suspended, terminating Exchange Online, SharePoint, and Teams access for even retained staff.",
      "File an Order XXXVII summary suit or initiate Section 18 MSMED Act statutory arbitration claiming the entire remaining contract value plus 3x RBI compound interest.",
    ],
  },
  {
    id: "software-var-margin-default",
    tabLabel: "4. SaaS / ISV License VAR Default",
    title: "Enterprise Client Procures ₹25 Lakh Salesforce / Adobe Enterprise Licenses Through VAR and Defaults on Margin",
    badge: "Sale of Goods Act s.55 & Indian Contract Act s.70",
    buyerProfile:
      "Mid-sized manufacturing conglomerate, NBFC, or retail chain purchasing enterprise software subscriptions (Salesforce, Adobe Creative Cloud, Datadog) via an authorized Value Added Reseller (VAR).",
    pretext:
      "The enterprise client orders 50 annual Salesforce Sales Cloud enterprise licenses and 30 Adobe Creative Cloud seats through an authorized Indian software reseller on back-to-back 45-day payment terms. The reseller pays the software OEM (Salesforce India / Adobe) upfront ₹23,50,000 to activate the tenant licenses, booking a standard 6% gross margin (total invoice ₹25,00,000). Upon receiving live admin credentials, the client uses the software for 60 days but delays payment indefinitely, claiming internal budget cuts and unfulfilled vendor training promises.",
    legalReality:
      "Under Section 55 of the Sale of Goods Act, 1930, where property in goods or digital licenses has passed to the buyer and the buyer wrongfully neglects or refuses to pay, the seller may sue for the price of the goods. Software licenses delivered electronically and activated on client tenants constitute executed deliveries. The reseller's out-of-pocket capital disbursed to the OEM cannot be retained gratuitously by the client under Section 70 of the Indian Contract Act (Quantum Meruit).",
    statutoryHook:
      "Sale of Goods Act 1930 s.55 (Suit for Price) + Indian Contract Act 1872 s.70 (Obligation of Person Enjoying Benefit) + Order XXXVII CPC",
    actionProtocol: [
      "Gather OEM license delivery emails, tenant provisioning confirmation timestamps, and proof of client users logging in and actively utilizing the software.",
      "Contact the software OEM to initiate license de-activation or suspension procedures under channel partner non-payment protocols.",
      "Serve an advocate statutory notice highlighting that continued usage of unpaid software licenses exposes the enterprise to Section 51 Copyright infringement claims.",
      "Initiate fast-track summary recovery under Order XXXVII CPC in the competent Commercial Court, attaching client receivables to satisfy the debt.",
    ],
  },
];

export default function CloudResellerScenarioTabs() {
  const [activeTab, setActiveTab] = useState(SCENARIOS[0].id);
  const currentScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-200 pb-3">
        {SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-7 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] border border-red-200 mb-2">
              {currentScenario.badge}
            </span>
            <p className="text-base sm:text-lg font-black text-slate-900 leading-snug">
              {currentScenario.title}
            </p>
          </div>
        </div>

        {/* Buyer Profile */}
        <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs">
          <p className="text-[11px] uppercase tracking-wider text-slate-400 font-bold mb-1">
            Delinquent Buyer Profile
          </p>
          <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
            {currentScenario.buyerProfile}
          </p>
        </div>

        {/* Pretext vs Legal Reality Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-4 sm:p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0" />
              <p className="text-xs font-bold uppercase tracking-wider text-amber-900">
                Defaulting Pretext &amp; Commercial Friction
              </p>
            </div>
            <p className="text-xs sm:text-sm text-amber-900/90 leading-relaxed">
              {currentScenario.pretext}
            </p>
          </div>

          <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-4 sm:p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 shrink-0" />
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-900">
                Creditor Statutory Reality &amp; Enforceability
              </p>
            </div>
            <p className="text-xs sm:text-sm text-emerald-900/90 leading-relaxed">
              {currentScenario.legalReality}
            </p>
          </div>
        </div>

        {/* Statutory Hook */}
        <div className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="block text-[10px] uppercase tracking-widest text-red-400 font-bold mb-1">
              Core Statutory Weapon
            </span>
            <p className="text-xs sm:text-sm font-semibold font-mono text-slate-200">
              {currentScenario.statutoryHook}
            </p>
          </div>
          <span className="shrink-0 px-3 py-1 rounded-lg text-[10px] font-bold uppercase bg-slate-800 text-slate-300 border border-slate-700">
            CFO Enforcement Protocol
          </span>
        </div>

        {/* Action Protocol Checklist */}
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            Immediate 4-Step Legal &amp; Technical Execution Playbook
          </p>
          <div className="space-y-2.5">
            {currentScenario.actionProtocol.map((step, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                <span className="w-5 h-5 rounded-full bg-red-100 text-[#DC2626] font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
