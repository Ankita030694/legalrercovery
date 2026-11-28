"use client";

import React, { useState } from "react";
import Link from "next/link";

interface AgriColdStorageScenario {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  ticketBand: string;
  statutoryTrigger: string;
  bottleneck: string;
  legalMechanism: string;
  operationalSteps: {
    step: string;
    detail: string;
  }[];
  recommendedLinks: {
    label: string;
    href: string;
  }[];
}

const AGRI_COLD_STORAGE_SCENARIOS: AgriColdStorageScenario[] = [
  {
    id: "agro-dealer-crop-excuse",
    tabLabel: "Agro-Dealer 'Crop Failure'",
    badge: "Ticket ₹2L – ₹45L | Seeds/Insecticides Act",
    title: "Kharif/Rabi Harvest Ended, Dealer Collected Cash—Now Claims 'Poor Germination / Low Efficacy' to Skip ₹18L",
    ticketBand: "₹2,00,000 – ₹45,00,000 (120-day seasonal credit + bounced PDCs)",
    statutoryTrigger: "Seeds Act 1966 / Insecticides Act 1968 Statutory Sampling + NI Act s.138/141",
    bottleneck:
      "After the harvest is sold, defaulting Krishi Seva Kendra dealers routinely fabricate oral 'farmer complaints' 4–5 months post-supply, demand arbitrary credit notes, or switch shops to a relative's new license while withholding seasonal ledger balances.",
    legalMechanism:
      "Under the **Seeds Act, 1966** and **Insecticides Act, 1968**, an allegation of substandard seed germination or pesticide non-efficacy has **zero legal value** without a contemporaneous **Department of Agriculture Seed/Insecticide Inspector panchnama** and **Government notified laboratory lot-failure report**. Combined with **NI Act s.138** on seasonal PDCs and **Order XXXVII CPC**, the dealer's post-harvest excuse collapses.",
    operationalSteps: [
      {
        step: "1. Lock Batch QC & Dispatch Signed Ledger Demand",
        detail:
          "Attach the batch-wise NABL/in-house Certificate of Analysis, signed delivery bilty/e-Way Bill, and seasonal balance confirmation in a 15-day advocate demand notice.",
      },
      {
        step: "2. Pre-Empt Oral 'Farmer Complaint' Defenses",
        detail:
          "Put the dealer on formal notice that zero statutory Agriculture Officer inspection or sealed-sample lab failure exists for the supplied batch.",
      },
      {
        step: "3. Prosecute Seasonal PDCs & Block Next-Season Credit",
        detail:
          "Present seasonal security cheques after prior intimation, serve mandatory 30-day NI s.138 notice within 30 days of return memo, and file Order XXXVII summary suit.",
      },
    ],
    recommendedLinks: [
      {
        label: "Agrochemical & Seed Dealer Recovery",
        href: "/agrochemical-pesticide-seed-dealer-seasonal-credit-default-recovery",
      },
      {
        label: "Distributor & Dealer Dues Desk",
        href: "/distributor-dealer-dues-recovery",
      },
      {
        label: "Cheque Bounce s.138 Timeline",
        href: "/cheque-bounce-notice-timeline-section-138",
      },
    ],
  },
  {
    id: "cold-storage-auction",
    tabLabel: "Cold Storage Lien & Auction",
    badge: "Ticket ₹4L – ₹1.5 Cr | Contract Act s.176",
    title: "Mandi Spot Prices Crashed & Traders Abandoned 50,000 Potato / Chilli Bags in Your Chambers",
    ticketBand: "₹4,00,000 – ₹1,50,00,000 (unpaid chamber rent + power/handling + auction deficit)",
    statutoryTrigger: "State Cold Storage Regulation Acts (UP/WB/Bihar/Gujarat) + Contract Act s.170/176",
    bottleneck:
      "When potato, red chilli, turmeric, or apple prices drop below accrued cold-storage rent, depositors vanish—yet if the cold-storage owner sells the stock informally to clear chambers before the new season, the trader sues in Consumer Court for unlawful disposal.",
    legalMechanism:
      "A cold storage holds a statutory **bailee's lien (Contract Act s.170)** and **pledgee power of sale (s.176)**, governed by **State Cold Storage Regulation Acts**. Serving a **15-day/7-day Registered Speed Post RPAD Pre-Auction Notice** specifying Lot No., Chamber No., Bag Count, and accrued rent—followed by local newspaper publication—immunizes the auction against Consumer Court claims and preserves the right to sue for any **post-auction deficit rent**.",
    operationalSteps: [
      {
        step: "1. Serve Lot-Wise Registered Pre-Auction Notice (RPAD)",
        detail:
          "Send a formal statutory notice citing Lot Receipt numbers, bag count, accrued rent, and a clear 15-day redemption deadline before auction.",
      },
      {
        step: "2. Publish Vernacular Auction Notice & Conduct Transparent Sale",
        detail:
          "Publish the auction date in a local daily, record competitive mandi bids, and adjust proceeds strictly against storage rent, loading, and electricity dues.",
      },
      {
        step: "3. Issue Post-Auction Deficit Recovery Notice",
        detail:
          "Where net auction proceeds fall short of the storage bill, serve a deficit demand notice and file summary recovery for the balance.",
      },
    ],
    recommendedLinks: [
      {
        label: "Cold Storage Lawful Auction Law",
        href: "/cold-storage-unpaid-rent-commodity-lien-lawful-auction-notice-india",
      },
      {
        label: "Hindi Cold Storage & Mandi Guide",
        href: "/hi/khad-beej-pesticide-cold-storage-mandi-udhar-recovery-notice",
      },
    ],
  },
  {
    id: "rice-dal-oil-mill",
    tabLabel: "Rice/Dal/Oil Mill & Mandi",
    badge: "Ticket ₹8L – ₹2.5 Cr | MSME s.15–18 & 43B(h)",
    title: "Outstation Grain/Oil Buyer or Mandi Broker Defaulted on ₹25 Lakh Truckloads on 1% Mill Margins",
    ticketBand: "₹8,00,000 – ₹2,50,00,000 (outstation wholesale grain, pulse, flour & edible-oil ledgers)",
    statutoryTrigger: "MSMED Act s.15–18 + Income Tax s.43B(h) + BNS s.318 + APMC Rules",
    bottleneck:
      "Basmati rice millers (Karnal/Taraori), dal/oil millers (Akola/Indore/Latur), and flour mills ship multiple truckloads via Naya Bazar, Vashi, or Lawrence Road brokers—only to face coordinated 'bust-out' insolvencies or bogus moisture/broken-grain deductions weeks after unloading.",
    legalMechanism:
      "Processing mills with Udyam registration qualify as **manufacturing MSMEs** under **MSMED Act s.15–18**, entitling them to **3x RBI Bank Rate compound interest** (~19.5% p.a.) and **Income Tax s.43B(h)** tax-disallowance leverage against corporate buyers. Pairing joint buyer-broker notices with **APMC Secretary CC** and **BNS s.318** where organized bust-out fraud appears forces rapid settlement.",
    operationalSteps: [
      {
        step: "1. Compile Bilty, Weighbridge & Lot-Sample Acceptance Trail",
        detail:
          "Assemble GST e-Invoices, e-Way Bills, weighbridge slips, and signed lorry receipts showing zero rejection at the time of unloading.",
      },
      {
        step: "2. Serve Joint Buyer + Broker Notice with 43B(h) & APMC Hook",
        detail:
          "Highlight statutory 45-day MSME payment limits, tax disallowance exposure for the buyer, and APMC trading-license complaint escalation.",
      },
      {
        step: "3. Escalate to MSEFC Samadhaan or Order XXXVII CPC",
        detail:
          "File online MSEFC reference for Udyam-covered mills or Order XXXVII summary suit / NI s.138 prosecution for non-MSME wholesale claims.",
      },
    ],
    recommendedLinks: [
      {
        label: "Rice, Dal & Oil Mill Recovery",
        href: "/rice-dal-flour-sugar-edible-oil-mill-wholesale-buyer-recovery",
      },
      {
        label: "MSME Interest & 43B(h) Calculator",
        href: "/tools/msme-delayed-payment-interest-calculator",
      },
      {
        label: "FPO & Dairy Plant Buyer Recovery",
        href: "/fpo-farmer-producer-company-cooperative-dairy-b2b-buyer-recovery",
      },
    ],
  },
  {
    id: "poultry-aqua-feed",
    tabLabel: "Poultry & Aqua-Feed",
    badge: "Ticket ₹5L – ₹80L | BNS s.316 & Lab QC",
    title: "Feed Dealer Blames 'Bird/Shrimp Mortality' or Contract Farmer Sells Integrator Birds at Night",
    ticketBand: "₹5,00,000 – ₹80,00,000 (60–120 day harvest-cycle feed credit & bird diversion)",
    statutoryTrigger: "Batch Retention Mycotoxin Lab Reports + BNS s.316 Bailee Bird-Lifting Action",
    bottleneck:
      "Aqua-feed (AP/Odisha) and poultry-feed (Namakkal/Haryana/Telangana) suppliers extend deep harvest credit. When viral pond/flock mortality hits—or when a contract farmer secretly sells live broilers to cash traders at night ('bird lifting')—dealers withhold ₹15L–₹50L feed ledgers.",
    legalMechanism:
      "Producing retained **batch-control mycotoxin/nutrition lab reports** defeats bogus feed-quality counterclaims in viral Ranikhet or WSSV outbreaks. For contract-farming integrators, chicks and feed remain the integrator's **bailed property**—night-time diversion triggers **BNS s.316** criminal breach of trust alongside **NI s.138** prosecution on dealer PDCs.",
    operationalSteps: [
      {
        step: "1. Lock Batch Control Sample & Farm Mortality Logs",
        detail:
          "Preserve retained factory batch samples and veterinary/pond water logs proving disease or management failure rather than feed toxicity.",
      },
      {
        step: "2. Issue BNS s.316 Notice for Unauthorized Bird/Stock Diversion",
        detail:
          "For contract farming, serve immediate notice on the farmer and local Police Station CC quantifying diverted bird weight and feed balance.",
      },
      {
        step: "3. Enforce Dealer PDCs & Collateral Security",
        detail:
          "Trigger NI s.138 statutory timelines on bounced dealer cheques and enforce registered security agreements or personal guarantees.",
      },
    ],
    recommendedLinks: [
      {
        label: "Poultry, Cattle & Aqua-Feed Guide",
        href: "/poultry-feed-cattle-feed-aqua-shrimp-feed-dealer-integrator-recovery",
      },
      {
        label: "HoReCa Food & Meat Vendor Recovery",
        href: "/horeca-food-service-meat-seafood-dairy-restaurant-chain-recovery",
      },
      {
        label: "Hindi Vyapari Notice Guide",
        href: "/hi/legal-notice-kaise-bheje",
      },
    ],
  },
];

export default function AgriColdStorageHubScenarioTabs() {
  const [activeId, setActiveId] = useState<string>(AGRI_COLD_STORAGE_SCENARIOS[0].id);
  const current =
    AGRI_COLD_STORAGE_SCENARIOS.find((s) => s.id === activeId) || AGRI_COLD_STORAGE_SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div
        role="tablist"
        aria-label="Agri-inputs, cold storage and food mill recovery scenarios"
        className="flex flex-wrap gap-2 mb-6"
      >
        {AGRI_COLD_STORAGE_SCENARIOS.map((scenario) => {
          const isActive = scenario.id === current.id;
          return (
            <button
              key={scenario.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(scenario.id)}
              className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                isActive
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Panel */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 md:p-7">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200">
            {current.badge}
          </span>
          <span className="text-xs font-semibold text-slate-500">{current.statutoryTrigger}</span>
        </div>

        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-3">{current.title}</h3>

        <p className="text-xs font-semibold text-slate-600 mb-4">
          <span className="uppercase tracking-wider text-slate-400 mr-1.5">Typical Claim Band:</span>
          {current.ticketBand}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-amber-700 mb-1.5">
              Commercial &amp; Seasonal Bottleneck
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{current.bottleneck}</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 mb-1.5">
              Statutory Recovery Mechanism
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.legalMechanism.split("**").map((part, idx) =>
                idx % 2 === 1 ? (
                  <strong key={idx} className="text-slate-900">
                    {part}
                  </strong>
                ) : (
                  <React.Fragment key={idx}>{part}</React.Fragment>
                )
              )}
            </p>
          </div>
        </div>

        <div className="bg-slate-900 text-white rounded-xl p-4 sm:p-5 mb-5">
          <p className="text-[11px] font-bold uppercase tracking-wider text-red-400 mb-3">
            3-Step Creditor Execution Protocol
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {current.operationalSteps.map((st) => (
              <div key={st.step} className="bg-white/5 border border-white/10 rounded-lg p-3.5">
                <p className="text-xs font-bold text-white mb-1">{st.step}</p>
                <p className="text-xs text-slate-300 leading-relaxed">{st.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mr-1">
            Deep-Dive Routes:
          </span>
          {current.recommendedLinks.map((lnk) => (
            <Link
              key={lnk.href}
              href={lnk.href}
              className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-bold bg-white border border-slate-200 text-slate-800 hover:border-[#DC2626] hover:text-[#DC2626] transition-colors"
            >
              {lnk.label} &rarr;
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
