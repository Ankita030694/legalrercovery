"use client";

import React, { useState } from "react";
import Link from "next/link";

interface ProblemTab {
  id: string;
  tabLabel: string;
  title: string;
  cause: string;
  legalBasis: string;
  steps: {
    step: string;
    description: string;
  }[];
  statutoryRule: string;
}

const PROBLEMS: ProblemTab[] = [
  {
    id: "waiting-period-exceeded",
    tabLabel: "Indefinite Delay",
    title: "Dealership Postpones Bike Delivery Indefinitely & Refuses Full Advance Refund",
    cause:
      "A classic automotive sales tactic where dealerships promise delivery of high-demand bikes (such as Royal Enfield Hunter, Himalayan 450, Yamaha MT-15, or KTM Duke) within 2 to 4 weeks to capture advance token booking amounts ranging from ₹2,000 to ₹25,000. Once the money is paid, the waiting period is pushed repeatedly to 3 to 6 months without formal notice. When the buyer seeks cancellation, the dealer claims the booking amount is strictly non-refundable or that funds cannot be returned until another customer takes the allocation.",
    legalBasis:
      "Under Sections 31 and 32 of the Sale of Goods Act, 1930, delivery of goods and payment of price are concurrent obligations. Failure of the seller to deliver the vehicle within the agreed timeline or within a reasonable time constitutes a fundamental breach of contract, entitling the buyer to repudiate the agreement and claim an immediate full refund. Furthermore, under Section 2(11) of the Consumer Protection Act, 2019, unilateral postponement of delivery without consent constitutes deficiency in service.",
    steps: [
      {
        step: "Collate Written Commitment Documents",
        description:
          "Collect the preliminary booking docket, customer order form, payment receipts, and WhatsApp or email commitments mentioning the promised delivery date or tentative delivery week.",
      },
      {
        step: "Send Statutory Cancellation & Repudiation Demand",
        description:
          "Issue a formal cancellation notice to the dealer principal and brand zonal manager stating that due to material delivery default, the contract stands repudiated under Section 31 Sale of Goods Act and demanding 100% refund within 7 days.",
      },
      {
        step: "Serve Advocate Legal Notice for Restitution & Interest",
        description:
          "If the dealer fails to remit the booking amount within 7 days, dispatch an advocate demand notice demanding full refund with 12% annual commercial interest and compensation for mental harassment.",
      },
    ],
    statutoryRule: "Sale of Goods Act, 1930 (ss. 31, 32) & CPA 2019 (s. 2(11))",
  },
  {
    id: "ev-app-refund-stuck",
    tabLabel: "EV App Ghosting",
    title: "Direct-to-Consumer EV App (Ola / Ather / TVS) Shows 'Refund Initiated' but No Bank Credit",
    cause:
      "Direct-to-consumer (D2C) electric two-wheeler platforms accept digital booking deposits online (₹499 to ₹20,000). When buyers cancel their reservation due to subsidy uncertainties, range anxieties, or delayed manufacturing batches, the mobile application marks the status as 'Cancellation Accepted' or 'Refund Initiated'. However, weeks or months elapse with zero inward bank settlement. In-app chatbots loop generic responses and customer care tickets are closed mechanically without resolving the nodal account batch failure.",
    legalBasis:
      "Under Reserve Bank of India (RBI) circulars on digital payment turnaround times and merchant reconciliations, payment aggregators and merchants must reverse failed or cancelled transactions within prescribed settlement windows. Under Section 2(47) of the Consumer Protection Act, 2019, misleading consumers with simulated app confirmations while withholding actual funds constitutes an unfair trade practice and unjust enrichment.",
    steps: [
      {
        step: "Extract Bank Statements & App Transaction Logs",
        description:
          "Download your full PDF bank statement from the date of initial debit to the present date, proving that no credit matching the refund transaction reference ever reached your account.",
      },
      {
        step: "Demand 12-Digit ARN / Bank UTR Number",
        description:
          "Send an email to the EV manufacturer's nodal officer demanding the Acquirer Reference Number (ARN) or Unique Transaction Reference (UTR) for the refund batch. A system screenshot is not legal proof of remittance.",
      },
      {
        step: "Initiate Advocate Notice to EV OEM Corporate HQ",
        description:
          "Serve a formal statutory legal notice to the corporate registered office of the EV manufacturer demanding immediate release of funds with statutory penal interest and compensation for digital harassment.",
      },
    ],
    statutoryRule: "RBI Payment Aggregator TAT Rules & CPA 2019 (s. 2(47))",
  },
  {
    id: "arbitrary-cancellation-fee",
    tabLabel: "Illegal Fee Forfeiture",
    title: "Dealer Illegally Deducts ₹1,000 to ₹5,000 as 'Administrative / Cancellation Charges'",
    cause:
      "When a consumer cancels a bike booking before vehicle chassis allocation or invoice generation, the dealer arbitrarily deducts ₹1,000, ₹2,500, or up to ₹5,000, calling it 'administrative fees', 'handling deduction', or 'clerical overheads'. Dealers point to microscopic boilerplates on the reverse of booking receipts stating that booking advances are subject to cancellation deductions.",
    legalBasis:
      "Under Section 2(46) of the Consumer Protection Act, 2019, any standard-form contractual term that imposes unreasonable detriment or unilateral penalties on a consumer constitutes an 'unfair contract' and is void ab initio. The National Consumer Disputes Redressal Commission (NCDRC) and State Commissions have repeatedly held that where a dealer has not incurred verified custom fabrication expenses and the vehicle was never registered or invoiced in the consumer's name, the dealer has no legal authority to forfeit advance booking funds.",
    steps: [
      {
        step: "Challenge the Basis of Administrative Expense",
        description:
          "Demand in writing an itemized breakdown and GST invoice for the alleged 'handling' or 'administrative' expenses. Dealers cannot legally invoice overheads without statutory authorization.",
      },
      {
        step: "Cite Anti-Unfair Contract Jurisprudence",
        description:
          "Inform the dealer principal that unilateral penalty clauses are unenforceable under Section 2(46) CPA 2019, as confirmed by landmark rulings of the Supreme Court of India in Pioneer Urban and Central Inland Water Transport cases.",
      },
      {
        step: "Demand 100% Restitution via Advocate Demand Notice",
        description:
          "Issue a formal legal notice demanding the immediate refund of the deducted sum, highlighting that withholding consumer advance without service rendered attracts Section 2(47) unfair trade practice penalties.",
      },
    ],
    statutoryRule: "Section 2(46) & Section 2(47), Consumer Protection Act, 2019",
  },
  {
    id: "pdi-defect-rejection",
    tabLabel: "PDI Defect Rejection",
    title: "Buyer Refuses Vehicle at Pre-Delivery Inspection (PDI) Due to Defects; Dealer Refuses Refund",
    cause:
      "During the mandatory Pre-Delivery Inspection (PDI) before permanent registration on the VAHAN portal, the buyer notices manufacturing paint blemishes, body panel misalignments, rust on the chassis, an unusually high odometer reading (indicating test-drive abuse), or battery health degradation in an EV scooter. The buyer rightfully refuses delivery and asks for either a fresh vehicle allocation or an immediate refund. The dealer refuses, claiming the vehicle was already invoiced.",
    legalBasis:
      "Under Chapter VI of the Consumer Protection Act, 2019 (Product Liability) and Section 16 of the Sale of Goods Act, 1930, goods supplied must correspond with description and be merchantable and fit for purpose. A consumer is legally entitled to inspect goods before taking delivery. If the buyer rejects the vehicle before RTO registration, the contract of sale remains incomplete. The dealer cannot coerce a consumer into accepting a sub-standard, refurbished, or damaged vehicle.",
    steps: [
      {
        step: "Document Every Physical & Electronic Defect",
        description:
          "Take clear high-resolution photographs and videos of the vehicle chassis number, odometer reading, battery diagnostic screen, and all physical defects at the dealership yard.",
      },
      {
        step: "Refuse RTO Registration & OTP Signing",
        description:
          "Never provide Aadhaar OTP or sign Form 20/21 for RTO registration if you have rejected the vehicle during PDI. Once the vehicle is registered in your name on VAHAN, legal unwinding becomes significantly more complex.",
      },
      {
        step: "Serve Formal Notice of Rejection & Demand for Full Return",
        description:
          "Serve an advocate notice documenting the inspection rejection, asserting product non-conformity under CPA 2019, and demanding 100% reimbursement of all advance, insurance, and accessory charges.",
      },
    ],
    statutoryRule: "CPA 2019 (Chapter VI Product Liability) & Sale of Goods Act (s. 16)",
  },
  {
    id: "forced-insurance-accessories",
    tabLabel: "Forced Add-Ons",
    title: "Dealer Deliberately Delays Booking Delivery Because Buyer Refused Inflated Dealer Insurance",
    cause:
      "Dealerships regularly inflate motor insurance premiums by 200% to 300% and mandate expensive accessory kits (seat covers, chrome guards, teflon coatings) as a precondition for delivery. When a consumer exercises their legal right to arrange independent IRDAI-approved insurance or declines non-essential accessories, the dealer deprioritizes the booking allocation, claims the bike is 'out of stock', and stalls delivery for months while refusing to return the booking advance.",
    legalBasis:
      "The Competition Commission of India (CCI) and the Ministry of Road Transport and Highways (MoRTH) have declared tied-in selling of dealership insurance and mandatory accessory bundles illegal and anti-competitive. The Insurance Regulatory and Development Authority of India (IRDAI) mandates that vehicle owners have absolute autonomy to buy insurance from any registered insurer. Refusing vehicle delivery or withholding booking refunds because a buyer exercised statutory insurance choice constitutes gross unfair trade practice under Section 2(47) CPA 2019.",
    steps: [
      {
        step: "Gather Dealer Quotations & Independent Policy Quotes",
        description:
          "Maintain written proof of the dealer's quoted insurance and accessory package contrasted against your own valid IRDAI policy quote for the identical vehicle model.",
      },
      {
        step: "Record Unlawful Condition Precedents",
        description:
          "Preserve emails, text chats, or call records where dealership representatives state that vehicle delivery is conditional upon purchasing in-house insurance or accessories.",
      },
      {
        step: "Serve Dual Regulatory & Consumer Legal Notice",
        description:
          "Dispatch an advocate legal notice citing CCI antitrust directives and CPA 2019 Section 2(47), putting the dealership on notice for tied selling and demanding immediate allocation or unconditional 100% advance refund.",
      },
    ],
    statutoryRule: "Competition Act, 2002 (s. 3(4)) & CPA 2019 (s. 2(47))",
  },
];

export default function BikeScooterProblemTabs() {
  const [activeTab, setActiveTab] = useState<string>(PROBLEMS[0].id);
  const currentProblem = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden p-4 sm:p-6 md:p-8">
      <div className="mb-6">
        <span className="text-[11px] font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-3 py-1 rounded-full">
          Dispute Category Explorer
        </span>
        <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
          Select Your Specific Booking Cancellation Dilemma
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Explore legal grounds, statutory sections, and precise evidentiary steps tailored to your automotive dispute.
        </p>
      </div>

      {/* Tab Navigation Pill Bar */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-none border-b border-slate-100">
        {PROBLEMS.map((problem) => {
          const isActive = problem.id === activeTab;
          return (
            <button
              key={problem.id}
              type="button"
              onClick={() => setActiveTab(problem.id)}
              className={`shrink-0 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-150 cursor-pointer ${
                isActive
                  ? "bg-red-600 text-white shadow-md shadow-red-600/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {problem.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <div className="space-y-6">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block mb-1">
            Core Grievance
          </span>
          <h4 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 leading-snug">
            {currentProblem.title}
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-1 flex items-center gap-1.5">
              <span className="text-amber-500">⚠</span> The Commercial Reality
            </h5>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentProblem.cause}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-red-50/50 border border-red-200">
            <h5 className="text-xs font-bold uppercase tracking-wider text-red-900 mb-1 flex items-center gap-1.5">
              <span className="text-red-600">⚖</span> Statutory Ground &amp; Court Doctrine
            </h5>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {currentProblem.legalBasis}
            </p>
            <div className="mt-2.5 pt-2 border-t border-red-200/60 text-[11px] font-bold text-red-700">
              Governing Law: {currentProblem.statutoryRule}
            </div>
          </div>
        </div>

        <div>
          <h5 className="text-xs font-black uppercase tracking-wider text-slate-900 mb-3">
            Immediate Evidentiary &amp; Recovery Action Steps
          </h5>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {currentProblem.steps.map((s, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-6 h-6 rounded-full bg-slate-900 text-white text-[11px] font-bold flex items-center justify-center mb-2">
                    {idx + 1}
                  </div>
                  <h6 className="text-xs font-bold text-slate-900 mb-1 leading-snug">
                    {s.step}
                  </h6>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100">
          <p className="text-xs text-slate-500">
            Facing this exact issue? We assist consumers in issuing statutory advocate notices across India.
          </p>
          <Link
            href="/services/refunds-and-consumer-complaints"
            className="text-xs font-bold text-red-600 hover:text-red-800 hover:underline flex items-center gap-1 shrink-0"
          >
            Explore consumer refund services <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
