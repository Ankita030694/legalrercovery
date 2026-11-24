"use client";

import React, { useState } from "react";

interface ScenarioTab {
  id: string;
  tabLabel: string;
  title: string;
  modusOperandi: string;
  brokerLiabilityTheory: string;
  actionProtocol: {
    phase: string;
    action: string;
  }[];
  statutorySections: string;
}

const TEXTILE_SCENARIOS: ScenarioTab[] = [
  {
    id: "classic-bust-out",
    tabLabel: "Mandi Bust-Out Scam",
    title: "Outstation Buyer Wins Credit on 2 Bills, Lifts ₹40L–₹2Cr Fabric, Shuts Shop Overnight",
    modusOperandi:
      "A front syndicate rents a lavish showroom in Burrabazar Kolkata or Chandni Chowk Delhi. They approach Surat/Bhiwandi weavers through an influential local broker. Months 1 and 2: small test orders of grey cloth or printed sarees paid punctually within 30 days. Month 4: massive festive dispatch orders of ₹40 Lakh to ₹1.5 Crore. Fabric is received via transport, quietly diverted to secondary godowns, cash sold at 35% discount, and showroom shutters locked with phones switched off.",
    brokerLiabilityTheory:
      "Del Credere Guarantee under Contract Act s.182/211 if 2%+ del credere commission is charged or guaranteed verbally on Gaddi. If broker introduced the party without basic GST/KYC verification or actively concealed past defaults with other weavers, BNS s.318(4) (Cheating) and BNS s.61(2) (Criminal Conspiracy) apply jointly.",
    actionProtocol: [
      {
        phase: "Immediate (Day 1-3)",
        action:
          "Preserve all WhatsApp voice notes, broker brokerage ledgers, transport LR copies, and E-Way bills. Issue a 72-hour Statutory Co-Notice to both Buyer and Broker.",
      },
      {
        phase: "Police Action (Day 4-7)",
        action:
          "File joint criminal complaint before Surat/Ahmedabad Crime Branch EOW naming broker as conspirator under BNS s.318(4) & 61(2) to freeze broker local bank accounts.",
      },
      {
        phase: "Commercial Action (Day 8-15)",
        action:
          "File Order 37 summary recovery suit or MSME Samadhaan petition arraying broker as Del Credere guarantor jointly and severally liable.",
      },
    ],
    statutorySections: "Indian Contract Act s.182, 211, 212 | BNS s.318(4), 61(2) | Order XXXVII CPC",
  },
  {
    id: "broker-kickback-collusion",
    tabLabel: "Broker Kickback Collusion",
    title: "Broker Received Secret Commission / 15% Cut From Defaulting Outstation Syndicate",
    modusOperandi:
      "The local broker acts as an active conspirator rather than a neutral intermediary. In exchange for introducing an unvetted or financially insolvent buyer, the buyer pays the broker an illicit 10%–15% cash cut from liquidated fabric proceeds, while the manufacturer is left holding unpaid 90-day post-dated cheques or disputed invoices.",
    brokerLiabilityTheory:
      "Direct violation of Indian Contract Act Section 216 (Principal's right to benefit gained by agent dealing on his own account) + Section 218 (Agent's duty to pay sums received for principal) + Bharatiya Nyaya Sanhita Section 316 (Criminal Breach of Trust by Agent) & Section 318(4) (Fraudulent Inducement).",
    actionProtocol: [
      {
        phase: "Audit Discovery",
        action:
          "Trace WhatsApp chats and phone records where broker insisted 'Party bohot solid hai, payment ki meri zimmedari'. Subpoena broker bank statements through police complaint.",
      },
      {
        phase: "Statutory Invocation",
        action:
          "Issue notice under Indian Contract Act s.216 demanding complete disgorgement of illicit profits plus immediate indemnification of the full outstanding principal.",
      },
      {
        phase: "Criminal Rigor",
        action:
          "Lodge FIR with District Economic Offences Wing for criminal breach of trust by commercial agent under BNS Section 316.",
      },
    ],
    statutorySections: "Indian Contract Act s.215, 216, 218 | BNS s.316 (CBT by Agent), s.318(4)",
  },
  {
    id: "gaddi-mahajan-arbitration",
    tabLabel: "Panch Mahajan Defiance",
    title: "Broker Ignores Textile Market Association (Panch / FOSTTA) Settlement Rulings",
    modusOperandi:
      "Surat/Bhiwandi textile manufacturers traditionally summon defaulting brokers before market associations (e.g., Federation of Surat Textile Traders Association - FOSTTA, Maskati Mahajan). The broker promises payment in 6 installments, signs an amicable settlement before elders, pays one installment of ₹50,000, and stops, knowing association blacklisting carries no judicial contempt power.",
    brokerLiabilityTheory:
      "The signed Mahajan resolution constitutes a valid novation and written admission of debt under Indian Contract Act Section 62 and Section 25(3) (Promise to pay barred debt). If executed with an arbitration clause, it enables fast-track sole arbitration or instant summary decree under Order 37 CPC.",
    actionProtocol: [
      {
        phase: "Converting Panch Rulings",
        action:
          "Formalize the Mahajan written minutes into an unequivocal acknowledgment of debt under Section 18 of the Limitation Act, 1963.",
      },
      {
        phase: "Legal Notice Dispatch",
        action:
          "Issue high-voltage fact-verified legal notice treating the breached Panch agreement as an enforceable commercial settlement agreement.",
      },
      {
        phase: "Judicial Enforcement",
        action:
          "Bypass protracted association meetings; immediately approach Commercial Court under Order 37 CPC or Section 9 for interim asset attachment of broker properties.",
      },
    ],
    statutorySections: "Limitation Act s.18 | Contract Act s.62, 25(3) | Commercial Courts Act 2015",
  },
  {
    id: "msme-odr-broker-buyer",
    tabLabel: "MSME Samadhaan Multi-Track",
    title: "Manufacturer Is Udyam-Registered: Direct Buyer MSEFC Filing + Broker Civil Suit",
    modusOperandi:
      "Weaving or dyeing unit holds Udyam registration, but broker argues 'MSEFC does not cover commission agents—only buyers'. The buyer is out of state, creating jurisdictional reluctance.",
    brokerLiabilityTheory:
      "Under MSMED Act Section 15–18, statutory claims with mandatory compound interest at 3x RBI bank rate lie directly against the buyer entity. The broker remains independently liable as a surety/guarantor under Contract Act Section 126/128 before Civil/Commercial Court or in criminal proceedings.",
    actionProtocol: [
      {
        phase: "Dual Track Action",
        action:
          "File MSME Samadhaan petition against the outstation buyer claiming statutory interest under Section 16 MSMED Act.",
      },
      {
        phase: "Simultaneous Broker Press",
        action:
          "File Civil Summary Suit under Order 37 CPC against the local broker in Surat/Bhiwandi based on written brokerage vouchers, del credere guarantee notes, or WhatsApp undertaking.",
      },
      {
        phase: "43B(h) Leverage",
        action:
          "Serve Section 43B(h) Income Tax disallowance notification on the buyer's corporate auditors and bankers.",
      },
    ],
    statutorySections: "MSMED Act 2006 s.15-18 | Income Tax Act s.43B(h) | Order XXXVII CPC",
  },
];

export default function TextileBrokerScenarioTabs() {
  const [activeTab, setActiveTab] = useState(TEXTILE_SCENARIOS[0].id);
  const current = TEXTILE_SCENARIOS.find((t) => t.id === activeTab) || TEXTILE_SCENARIOS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
      {/* Tab Navigation */}
      <div className="flex border-b border-slate-200 bg-slate-50 overflow-x-auto scrollbar-thin">
        {TEXTILE_SCENARIOS.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 sm:px-6 py-3.5 text-xs sm:text-sm font-bold whitespace-nowrap transition-colors border-b-2 cursor-pointer ${
                isActive
                  ? "border-[#DC2626] text-[#DC2626] bg-white shadow-sm"
                  : "border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="p-5 sm:p-7 md:p-8 space-y-6">
        <div>
          <span className="inline-block px-2.5 py-1 rounded bg-red-100 text-[#DC2626] text-[11px] font-bold uppercase tracking-wider mb-2">
            Commercial Dispute Failure Mode
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">{current.title}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200">
            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-700 mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              Modus Operandi & Market Reality
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{current.modusOperandi}</p>
          </div>

          <div className="bg-red-50/60 p-4 sm:p-5 rounded-xl border border-red-200">
            <h4 className="text-xs uppercase tracking-wider font-bold text-red-900 mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#DC2626]"></span>
              Statutory Basis for Broker Liability
            </h4>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
              {current.brokerLiabilityTheory}
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-wider font-bold text-slate-800 mb-3">
            Creditor Tactical Action Protocol
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {current.actionProtocol.map((item, idx) => (
              <div key={idx} className="bg-slate-900 text-white p-4 rounded-xl flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-red-400 block mb-1">
                    {item.phase}
                  </span>
                  <p className="text-xs text-slate-200 leading-relaxed">{item.action}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-3 border-t border-slate-100 flex items-center justify-between flex-wrap gap-2 text-xs">
          <span className="text-slate-500 font-semibold">Statutory Provisions Invoked:</span>
          <span className="font-mono text-slate-700 bg-slate-100 px-2.5 py-1 rounded border border-slate-200">
            {current.statutorySections}
          </span>
        </div>
      </div>
    </div>
  );
}
