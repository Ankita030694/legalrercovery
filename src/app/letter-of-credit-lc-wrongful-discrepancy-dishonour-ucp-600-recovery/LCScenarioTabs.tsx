"use client";

import React, { useState } from "react";

interface FailureModeScenario {
  id: string;
  tabLabel: string;
  title: string;
  commercialContext: string;
  legalFailureMode: string;
  statutoryRule: string;
  actionProtocol: {
    step: string;
    action: string;
  }[];
  iccPrecedent: string;
}

const SCENARIOS: FailureModeScenario[] = [
  {
    id: "falling-market-typo",
    tabLabel: "Commodity Crash & Typo",
    title: "Market Price Collapses Post-Shipment: Issuing Bank Fabricates Punctuation Discrepancy",
    commercialContext:
      "An Indian exporter ships 5,000 MT of parboiled rice or cotton bales to Chittagong, Mersin, or Alexandria. Between the bill of lading date and document presentation, international commodity spot prices plunge by 22%. The applicant (buyer) instructs its local bank not to pay, and the issuing bank issues a SWIFT MT734 refusing payment citing 'Invoice lists exporter as ABC Global Ltd without period after Ltd' or 'BL mentions port code INNSA instead of Nhava Sheva'.",
    legalFailureMode:
      "Violation of UCP 600 Article 14(d) and Article 14(e). Data in a document need not be identical to, but must not conflict with, data in that document, any other stipulated document or the credit. ISBP 821 Paragraph A23 explicitly confirms that obvious typographical errors that do not affect the meaning of a word or sentence do not constitute a discrepancy.",
    statutoryRule: "UCP 600 Art. 14(d), 14(e) & ISBP 821 Para A23 (Non-Discrepant Typo Rule)",
    actionProtocol: [
      {
        step: "Immediate MT799 Rebuttal via Negotiating Bank",
        action:
          "Require your Indian negotiating/confirming bank to transmit an urgent SWIFT MT799 within 24 hours citing ISBP 821 Paragraph A23 and rejecting the discrepancy as null and void under international banking law.",
      },
      {
        step: "Serve Formal Legal Notice of Cross-Border Bad Faith",
        action:
          "Issue a formal fact-verified demand notice to the issuing bank's Chief Executive Officer and Head of Trade Operations, warning of an immediate ICC DOCDEX filing and listing on the international trade finance defaulter register.",
      },
      {
        step: "Escalate to Central Bank / Foreign Exchange Regulator",
        action:
          "File a formal complaint with the foreign central bank (e.g., Bangladesh Bank, Central Bank of Egypt, or Turkish BDDK) for bad-faith trade credit dishonour threatening foreign trade stability.",
      },
    ],
    iccPrecedent:
      "ICC Banking Commission Opinion TA.703rev / DOCDEX Decision No. 311: Punctuation, capitalization, and minor abbreviations that do not create legal ambiguity do not justify credit dishonour.",
  },
  {
    id: "missed-five-days",
    tabLabel: "Delayed SWIFT Refusal",
    title: "Issuing Bank Holds Documents for 7 Banking Days Before Transmitting Refusal MT734",
    commercialContext:
      "Documents arrive at the issuing bank's counter on Monday morning (Day 0). The issuing bank shares documents with the buyer for review, deliberates internally, and only transmits a SWIFT MT734 stating refusal on Tuesday of the following week (Day 6 or Day 7), citing an alleged late presentation of certificates of origin.",
    legalFailureMode:
      "Absolute statutory forfeiture under UCP 600 Article 14(b) and Article 16(f). The issuing bank has a maximum of five banking days following the day of presentation to examine and notify refusal. If it fails to act in accordance with the provisions of Article 16 within that strict 5-day window, it is precluded from claiming that the documents do not constitute a complying presentation!",
    statutoryRule: "UCP 600 Article 14(b) & Article 16(f) (Absolute Preclusion Rule)",
    actionProtocol: [
      {
        step: "Audit Courier Tracking & Inward Bank Timestamp",
        action:
          "Secure DHL/FedEx proof of delivery (POD) signed by the issuing bank's trade operations desk. Establish the exact Day 0 (day of physical delivery) and count banking days excluding local official holidays.",
      },
      {
        step: "Transmit Article 16(f) Estoppel Notice via MT799",
        action:
          "Draft an irrevocable estoppel demand stating: 'Pursuant to UCP 600 Article 16(f), your bank is irrevocably precluded from asserting any discrepancy. You are legally bound to pay USD [Amount] immediately plus SOFR/LIBOR + 300 bps overdue interest.'",
      },
      {
        step: "Demand Nostro Account Debit via Correspondent Bank",
        action:
          "Direct your nominated negotiating bank to notify the issuing bank's primary US Dollar clearing correspondent (e.g., in New York or London) of the matured irrevocable obligation.",
      },
    ],
    iccPrecedent:
      "English Court of Appeal in Fortis Bank SA/NV v. Indian Overseas Bank [2011] EWCA Civ 58: Strict adherence to Article 14(b) and 16(f) is absolute; a bank that fails to notify within five banking days must pay in full regardless of genuine document defects.",
  },
  {
    id: "defective-mt734-format",
    tabLabel: "Defective Refusal SWIFT",
    title: "Issuing Bank Sends Piecemeal Objections or Omits Document Disposal Status",
    commercialContext:
      "The issuing bank sends an informal email or incomplete SWIFT message stating 'Documents contain discrepancies, awaiting buyer acceptance.' Later, after the 5-day period, it sends a formal MT734 enumerating five separate discrepancies and states that it will return documents if not accepted.",
    legalFailureMode:
      "Breach of UCP 600 Article 16(c). A notice of refusal must: (i) state that the bank is refusing to honour or negotiate, (ii) state each discrepancy in respect of which the bank refuses, and (iii) state the disposition of the documents (holding documents at presenter's risk, holding until waiver received, returning, or acting per prior instructions). Sending piecemeal rejections or failing to specify document disposal invalidates the refusal entirely!",
    statutoryRule: "UCP 600 Article 16(c)(i)-(iii) & Article 16(f) (Refusal Formalities)",
    actionProtocol: [
      {
        step: "Analyze Field 77J & 77A of Refusal SWIFT",
        action:
          "Scrutinize the MT734 SWIFT message. If the issuing bank failed to select one of the four mandatory document disposition clauses under Article 16(c)(iii), the notice is statutorily defective on its face.",
      },
      {
        step: "Preclusion Invocation on Procedural Defect",
        action:
          "Invoke Article 16(f): because the notice of refusal was not given in accordance with Article 16, the issuing bank has lost the legal right to claim non-compliance, even if the underlying commercial documents had errors.",
      },
      {
        step: "Issue Fact-Verified Legal Notice for Wrongful Conversion",
        action:
          "If the issuing bank neither paid nor returned the original documents and allowed the buyer to take delivery of the cargo at port, issue an immediate notice for tortious conversion and commercial fraud.",
      },
    ],
    iccPrecedent:
      "Bayerische Vereinsbank AG v. National Bank of Pakistan [1997]: A notice of rejection that does not strictly comply with UCP refusal formalities is invalid, triggering total preclusion against the bank.",
  },
  {
    id: "bl-released-without-payment",
    tabLabel: "BL Released Without Pay",
    title: "Collecting or Issuing Bank Releases Original Bill of Lading Without Securing Payment",
    commercialContext:
      "Under a DP / CAD (Documents Against Payment) collection or an unaccepted LC, the foreign collecting bank or issuing bank hands over original negotiable Bills of Lading to the buyer 'on trust' or under an informal local guarantee. The buyer clears the containers from the port, sells the goods, and subsequently defaults.",
    legalFailureMode:
      "Tortious conversion, gross banking negligence, and violation of ICC URC 522 (Uniform Rules for Collections) Article 10 / UCP 600 Article 15. The bank is strictly liable as bailee of title documents and cannot surrender possession without collecting verified funds or securing irrevocable acceptance.",
    statutoryRule: "URC 522 Articles 9 & 10, UCP 600 Art. 15, and Common Law Bailment Liability",
    actionProtocol: [
      {
        step: "Demand Port Delivery & Custom Cargo Outturn Logs",
        action:
          "Contact the shipping line agent at the port of destination (e.g., Chattogram, Dubai, or Dar es Salaam) to obtain written confirmation of who surrendered the original BL to obtain the Delivery Order (DO).",
      },
      {
        step: "Serve Direct Tort & Breach of Bailment Demand",
        action:
          "Serve a stern legal notice holding the collecting/issuing bank directly liable as primary obligor for the full commercial invoice value, demurrage, port storage, and statutory interest.",
      },
      {
        step: "File Maritime Claim & Central Bank Sanction Petition",
        action:
          "Initiate legal proceedings in the jurisdiction where the bank maintains branch operations or attach foreign assets/nostro accounts via international commercial debt recovery proceedings.",
      },
    ],
    iccPrecedent:
      "Indian Supreme Court in Federal Bank Ltd. v. V.M. Jog Engineering Ltd. (2001) 1 SCC 663 & Privy Council in Barclays Bank v. Mercantile Bank: A bank that parts with title documents without payment commits conversion and must make good the entire loss.",
  },
];

export default function LCScenarioTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(SCENARIOS[0].id);

  const activeScenario =
    SCENARIOS.find((s) => s.id === activeTabId) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 pb-4 border-b border-slate-200">
        {SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTabId;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTabId(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Content Panel */}
      <div className="mt-6 bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] border border-red-200">
            {activeScenario.statutoryRule}
          </span>
          <span className="text-xs text-slate-500 font-mono">
            Scenario {SCENARIOS.findIndex((s) => s.id === activeTabId) + 1} of {SCENARIOS.length}
          </span>
        </div>

        <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-3 leading-snug">
          {activeScenario.title}
        </h3>

        <div className="space-y-4 mb-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
            <span className="block text-[11px] font-bold uppercase text-slate-500 mb-1">
              Commercial Context &amp; Discrepancy Abuse
            </span>
            <p>{activeScenario.commercialContext}</p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
            <span className="block text-[11px] font-bold uppercase text-red-600 mb-1">
              UCP 600 Violation &amp; Statutory Failure Mode
            </span>
            <p>{activeScenario.legalFailureMode}</p>
          </div>
        </div>

        {/* Step-by-Step Action Protocol */}
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
            Creditor-Side Escalation Protocol:
          </p>
          <div className="space-y-2.5">
            {activeScenario.actionProtocol.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200"
              >
                <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  {index + 1}
                </span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    {item.step}
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    {item.action}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Precedent / Opinion Box */}
        <div className="bg-slate-900 text-slate-200 p-4 rounded-xl text-xs sm:text-sm">
          <span className="block text-[10px] font-bold uppercase text-amber-400 tracking-wider mb-1">
            Authoritative ICC Precedent / Case Holding
          </span>
          <p className="leading-relaxed font-mono text-xs">{activeScenario.iccPrecedent}</p>
        </div>
      </div>
    </div>
  );
}
