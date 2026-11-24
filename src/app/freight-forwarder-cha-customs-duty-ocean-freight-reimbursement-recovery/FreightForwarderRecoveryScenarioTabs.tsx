"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  tabLabel: string;
  badge: string;
  badgeColor: string;
  title: string;
  context: string;
  legalChallenge: string;
  statutorySolution: string;
  actionableSteps: string[];
  estimatedRecovery: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "icegate-duty-advance-default",
    tabLabel: "Customs Duty & CFS Advance Default",
    badge: "Contract Act s.222 Agent Indemnity",
    badgeColor: "bg-red-950/70 border-red-800 text-red-300",
    title: "Importer Defaults After CHA Pays ₹18.5L Upfront Customs Duty & CFS Clearance on ICEGATE",
    context:
      "A licensed Customs Broker (Customs House Agent - CHA) cleared four 40-foot containers of industrial chemicals at Nhava Sheva (JNPT). To expedite clearance and avoid heavy CFS ground rent, the CHA advanced ₹14.2 Lakhs in Basic Customs Duty (BCD) and IGST directly via the ICEGATE corporate payment gateway, plus ₹4.3 Lakhs in Container Freight Station (CFS) handling, de-stuffing, and shipping line THC charges. The importer took possession of the Out-of-Charge (OOC) goods into their factory but subsequently stopped answering phone calls, withholding reimbursement for over 90 days despite verified bank UTRs and duty payment receipts.",
    legalChallenge:
      "Defaulting importers treat the CHA as an interest-free NBFC lender. Once the goods leave the CFS gate under the Customs Out-of-Charge order, the CHA loses physical possession of the cargo, while debtors raise bad-faith disputes alleging customs clearance delays or disputing statutory assessment classifications.",
    statutorySolution:
      "Under Section 222 of the Indian Contract Act, 1872, the employer of an agent is statutorily bound to indemnify him against the consequences of all lawful acts done by such agent in exercise of the authority conferred upon him. Custom Brokers act as statutory agents under Section 146 of the Customs Act, 1962 and the Customs Brokers Licensing Regulations (CBLR 2018). Upfront ICEGATE duty payments backed by the importer's signed authorization, KYC, and Bill of Entry constitute liquidated debts recoverable under Order XXXVII of the CPC and Section 2(1)(c)(iv)/(v) of the Commercial Courts Act, 2015, carrying contractual or statutory interest at 18% per annum under Section 73.",
    actionableSteps: [
      "Issue an immediate 7-day statutory demand notice under Indian Contract Act Section 222 citing ICEGATE duty challans, bank UTRs, and CBLR Form-CA authority.",
      "Lodge a formal caveat / intimation with the jurisdictional Customs Commissionerate placing on record the importer's willful financial fraud and default.",
      "File a Summary Suit under Order XXXVII CPC or Commercial Suit with an application under Order XXXVIII Rule 5 for pre-judgment attachment of the importer's bank accounts.",
      "If the importer is a corporate entity with unpaid operational advances exceeding ₹1 Crore, serve a Demand Notice in Form 3/4 under Section 8 of the Insolvency and Bankruptcy Code (IBC 2016).",
    ],
    estimatedRecovery: "100% of advanced customs duty and CFS expenses + 18% commercial interest within 30–60 days of pre-judgment freezing order.",
  },
  {
    id: "abandoned-cargo-shipping-line-demurrage",
    tabLabel: "Abandoned Cargo Demurrage Defense",
    badge: "Consignee/Notify Party Protection",
    badgeColor: "bg-amber-950/70 border-amber-800 text-amber-300",
    title: "Importer Abandons Container at CFS; Shipping Line Sues Forwarder/CHA for ₹45L Demurrage",
    context:
      "A freight forwarder issued a House Bill of Lading (HBL) for two containers of scrap metal imported from Europe. Due to a steep market crash in scrap prices, the Indian importer refused to retire the original Bill of Lading from the bank or file a Bill of Entry on ICEGATE. The containers sat at Chennai CFS for 140 days. The shipping line (Maersk/MSC) slapped a ₹45 Lakh container demurrage and detention demand on the forwarder, asserting they are liable as the 'Notify Party / Agent' named on the Master Bill of Lading (MBL), while threatening to block the forwarder's national booking code.",
    legalChallenge:
      "Shipping lines routinely use coercive tactics, blocking forwarders from booking export/import slots nationwide until astronomical container detention dues are settled, even though the importer who owns the cargo has abandoned it.",
    statutorySolution:
      "Under Section 48 of the Customs Act, 1962, if imported goods are not cleared within 30 days of unloading, the custodian (CFS/Port Authority) is legally mandated to issue notice and auction the cargo. The Supreme Court in Forbes Forbes Campbell & Co. v. Board of Trustees of the Port of Bombay established that an agent is not the owner of goods and cannot be saddled with indefinite demurrage once the principal abandons cargo. Forwarders can invoke Section 222 & 223 of the Contract Act for complete indemnity against the importer, while serving Section 48 statutory de-stuffing notices on the shipping line to compel container release and cargo auction.",
    actionableSteps: [
      "Serve a formal statutory notice on the shipping line and CFS under Customs Act Section 48 demanding immediate de-stuffing of cargo into customs bonded storage to freeze container demurrage.",
      "Issue a 7-day registered notice of cargo abandonment and full indemnification demand under Contract Act Section 222 to the importer and overseas shipper.",
      "Petition the High Court under Article 226 or Commercial Court for an interim mandatory injunction restraining the shipping line from coercive carrier-code blacklisting.",
      "File a multi-party recovery suit in the Commercial Court seeking a declaration of non-liability and a money decree against the defaulting importer for all container detention claims.",
    ],
    estimatedRecovery: "Immediate freezing of daily shipping line demurrage + full indemnification and discharge of forwarder liability via Section 48 auction.",
  },
  {
    id: "withholding-do-bl-general-lien",
    tabLabel: "Withholding Delivery Order (DO) Lien",
    badge: "Maritime & Bailee Lien s.170-171",
    badgeColor: "bg-blue-950/70 border-blue-800 text-blue-300",
    title: "Withholding Delivery Order (DO) & Bill of Lading for Unpaid Freight Ledgers Without Criminal FIR",
    context:
      "An engineering exporter owes an international freight forwarder ₹28.5 Lakhs across 12 past air and ocean shipments. The forwarder receives a new incoming import consignment for the same client, holding the Original Master Bill of Lading and Delivery Order. When the forwarder exercises a possessory lien and refuses to issue the DO until all historical freight arrears are cleared, the client files a criminal police complaint alleging Criminal Breach of Trust under Section 316 of Bharatiya Nyaya Sanhita (BNS 2023) and extortion.",
    legalChallenge:
      "Importers use the threat of local police complaints or customs complaints to coerce forwarders into handing over Delivery Orders without clearing past running ledger arrears.",
    statutorySolution:
      "Under Section 171 of the Indian Contract Act, 1872, general liens are statutory rights of specific commercial entities including wharfingers, bankers, and factors. While freight forwarders must operate under contractual general lien clauses printed on their Standard Trading Conditions (STC / FIATA terms), the forwarder holds a clear statutory Particular Lien under Section 170 for all services rendered on the current shipment. Furthermore, a Delivery Order is a document of title; retaining it for unpaid freight constitutes a purely civil contractual dispute, completely precluding criminal charges as ruled in landmark SC judgments (*Dalip Kaur v. Jagnar Singh*).",
    actionableSteps: [
      "Ensure standard credit applications and House Bills of Lading incorporate explicit Federation of Freight Forwarders' Associations in India (FFFAI) General Lien clauses.",
      "Issue an immediate formal Notice of Exercise of Carrier & Bailee Lien under Contract Act Section 170 & 171 via registered email and Speed Post.",
      "Submit a written response to the jurisdictional police station attaching the running account ledger, signed rate agreements, and SC precedents proving purely commercial jurisdiction.",
      "Offer the debtor an escrow settlement mechanism: release of DO strictly upon deposit of undisputed freight dues or bank guarantee in an escrow account.",
    ],
    estimatedRecovery: "85%–100% recovery of pending freight arrears within 7–14 days as the importer is forced to clear dues to avoid port demurrage on held cargo.",
  },
  {
    id: "air-freight-iata-cass-default",
    tabLabel: "IATA CASS Air Cargo Default",
    badge: "Carriage by Air Act & IATA Rules",
    badgeColor: "bg-purple-950/70 border-purple-800 text-purple-300",
    title: "Air Cargo Agent Hit by Client Default on IATA CASS Bi-Monthly Settlement Cycle",
    context:
      "An IATA accredited cargo agent booked high-value pharmaceutical air freight consignments from Delhi (DEL) to Frankfurt (FRA) for an exporter. Under IATA Cargo Accounts Settlement System (CASS) rules, the airline automatically debits the agent's bank account every 15 days under strict bank guarantee default triggers. The exporter received the airway bill (AWB) and goods were delivered in Germany, but the exporter defaulted on paying the ₹22 Lakh air freight invoice, leaving the agent facing bank guarantee invocation and IATA accreditation cancellation.",
    legalChallenge:
      "IATA CASS gives freight forwarders zero leeway: non-payment by the forwarder triggers immediate 'Default Action' and revocation of airline booking codes across all international carriers within 48 hours.",
    statutorySolution:
      "Air Waybills (AWB) issued under the Carriage by Air Act, 1972 constitute conclusive contracts of carriage. The exporter's written booking confirmation and signed Shipper's Letter of Instruction (SLI) establish an unequivocal unconditional obligation to reimburse freight. Forwarders can initiate emergent legal proceedings under the Commercial Courts Act, 2015, seeking an ex-parte ad-interim freezing of the exporter's export bank accounts and GST refunds under CPC Order XXXVIII Rule 5, alongside Section 138 NI Act action if advance security cheques were dishonored.",
    actionableSteps: [
      "Issue a 48-hour emergency pre-litigation fact-verified notice via email and WhatsApp citing IATA CASS statutory timelines and impending civil fraud liability.",
      "File an urgent Commercial Suit under Section 9 of the Commercial Courts Act with an application for attachment before judgment of the debtor's pending duty drawback and RoDTEP export incentives.",
      "Present any undated security cheques or NACH mandates collected during client onboarding; initiate Section 138 NI Act or Section 25 PSS Act proceedings upon dishonor.",
      "Notify the Export Promotion Council (EEPC/Pharmexcil) and Director General of Foreign Trade (DGFT) of the exporter's cross-border payment default.",
    ],
    estimatedRecovery: "Expedited settlement within 15–25 days via export incentive freezing and director liability pre-litigation notices.",
  },
];

export default function FreightForwarderRecoveryScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);

  const activeScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-7 shadow-xl text-white">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 border-b border-slate-800 pb-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-red-400 block mb-1">
            Interactive Operational Matrix
          </span>
          <p className="text-lg sm:text-xl font-bold text-white">
            4 CHA &amp; Freight Forwarder Failure Modes &amp; Statutory Playbooks
          </p>
        </div>
        <span className="text-xs text-slate-400">
          Contract Act ss. 170, 222 &bull; Customs Act s. 48 &bull; Commercial Courts s. 2(1)(c)
        </span>
      </div>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap gap-2 mb-6">
        {SCENARIOS.map((scenario) => {
          const isActive = activeTab === scenario.id;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-lg shadow-red-900/40"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Card */}
      <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-5 sm:p-6 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700 pb-3">
          <span
            className={`inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide border ${activeScenario.badgeColor}`}
          >
            {activeScenario.badge}
          </span>
          <span className="text-xs font-semibold text-emerald-400">
            Recovery Potential: {activeScenario.estimatedRecovery}
          </span>
        </div>

        <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
          {activeScenario.title}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
          <div className="bg-slate-900/60 p-4 rounded-lg border border-slate-800 space-y-2">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-400 block">
              Commercial &amp; Fact Scenario
            </span>
            <p className="leading-relaxed">{activeScenario.context}</p>
          </div>

          <div className="bg-slate-900/60 p-4 rounded-lg border border-slate-800 space-y-2">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-400 block">
              Debtor Pretext &amp; Legal Barrier
            </span>
            <p className="leading-relaxed">{activeScenario.legalChallenge}</p>
          </div>
        </div>

        <div className="bg-slate-900/90 p-4 sm:p-5 rounded-xl border border-slate-700 space-y-2">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-400 block">
            Statutory Legal Remedy &amp; Judicial Basis
          </span>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            {activeScenario.statutorySolution}
          </p>
        </div>

        <div>
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block mb-2">
            Actionable Advocate Step-by-Step SOP
          </span>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300">
            {activeScenario.actionableSteps.map((step, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 bg-slate-900/40 p-2.5 rounded-lg border border-slate-800"
              >
                <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
