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
    id: "delhivery-lost",
    tabLabel: "Delhivery Lost / Fake Delivery",
    title: "Delhivery Parcel Lost in Transit or Marked 'Delivered' Without Recipient OTP",
    cause:
      "Delhivery's automated tracking portal frequently displays 'Out for Delivery', followed by an abrupt 'Delivered' status even though no courier executive arrived at the address and no delivery verification OTP was shared by the consignee. In other cases, parcels remain perpetually stuck at transit hubs (e.g., Bilaspur, Tauru, or Bhiwandi) for weeks before customer support quietly marks them 'Lost' and offers a negligible wallet refund.",
    legalBasis:
      "Under Section 2(11) of the Consumer Protection Act, 2019 (CPA), falsifying a delivery record or failing to safeguard goods in custody constitutes gross deficiency in service. Furthermore, under Section 10 and 12 of the Carriage by Road Act, 2007, the common carrier bears strict statutory liability for non-delivery and has the affirmative legal burden to prove that loss did not arise from negligence of its agents or employees.",
    steps: [
      {
        step: "Capture Tracking Log & Dispatch Section 63 BSA Dossier",
        description:
          "Export the complete timeline screenshot from Delhivery tracking, including AWB number, pickup date, hub scans, and the falsified delivery timestamp. Secure written confirmation from building security or CCTV logs proving no courier arrived.",
      },
      {
        step: "Escalate via Registered Grievance & NCH Portal",
        description:
          "Email Delhivery Grievance Officer and customer support (customer.support@delhivery.com) formally demanding the GPS geo-stamp of delivery and recipient signature/OTP. Simultaneously lodge a National Consumer Helpline (NCH) docket.",
      },
      {
        step: "Serve Advocate Legal Notice Demanding Invoice Value",
        description:
          "When Delhivery fails to deliver or offer full reimbursement within 7 days, serve a formal 15-day statutory legal notice demanding the full commercial invoice value of the contents plus 12% interest and compensation.",
      },
    ],
    statutoryRule: "Sections 10 & 12 Carriage by Road Act 2007 & Section 2(11) CPA 2019",
  },
  {
    id: "blue-dart-cap",
    tabLabel: "Blue Dart ₹100 Liability Cap",
    title: "Blue Dart Denying Full Claim Citing ₹100 Standard Consignment Liability Cap",
    cause:
      "When Blue Dart Express loses a consignment containing expensive goods, commercial contracts, or personal electronics, their claims desk routinely invokes standard clause printed in micro-font on the reverse of the shipper's copy stating 'Company liability is limited to ₹100 per domestic shipment'. They refuse to entertain full invoice claims unless the sender opted for extra transit risk surcharges.",
    legalBasis:
      "The Supreme Court of India and the National Consumer Disputes Redressal Commission (NCDRC) in Blue Dart Express Ltd. v. Stephen E. Fernandes and subsequent landmark rulings have unequivocally held that unilateral printed exclusion clauses are unenforceable and void as 'unfair contracts' under Section 2(46) of CPA 2019. Unless the shipper consciously consented to and signed a specific liability limitation with clear disclosure, the carrier remains liable for the actual proven market value.",
    steps: [
      {
        step: "Repudiate the ₹100 Settlement Offer in Writing",
        description:
          "Do not sign Blue Dart's standard release form or accept token cheques of ₹100. Send a written rejection stating that the clause constitutes an unconscionable and unfair trade practice under Section 2(46) and 2(47) CPA 2019.",
      },
      {
        step: "Submit Commercial Invoice & Consignment Waybill Copy",
        description:
          "Provide copy of the purchase invoice, payment receipt, GST invoice, or valuation proof showing the real monetary worth of the lost parcel at the time of booking.",
      },
      {
        step: "Issue Pre-Litigation Legal Demand Notice",
        description:
          "Serve an advocate statutory demand notice citing NCDRC precedent and Section 10 Carriage by Road Act. Demand payment of full item cost plus damages for harassment within 15 days.",
      },
    ],
    statutoryRule: "Section 2(46) CPA 2019 (Unfair Contract) & NCDRC Precedents",
  },
  {
    id: "dtdc-damaged",
    tabLabel: "DTDC Damaged / Pilfered",
    title: "DTDC Delivered Broken Goods, Tampered Outer Carton, or Empty Package",
    cause:
      "DTDC consignments containing glass, crockery, monitors, handicrafts, or sealed parcels frequently arrive crushed, punctured, or cut open with internal contents pilfered. Delivery executives often compel recipients to sign the POD (Proof of Delivery) device before allowing them to inspect the parcel box, and subsequent customer care claims are rejected on grounds of 'clear delivery receipt signed'.",
    legalBasis:
      "Under the Carriage by Road Act, 2007, common carriers owe an absolute duty of care to transport goods safely. Signing a electronic delivery scan does not extinguish consumer rights when latent transit damage or internal pilferage is discovered immediately upon unpacking. Under Section 2(11) of CPA 2019, delivery of damaged goods or pilfered boxes without carrier inspection is actionable negligence.",
    steps: [
      {
        step: "Record Unboxing Video & Weight Comparison",
        description:
          "Record continuous unboxing video showing the shipping label, AWB barcode, seal integrity, and damaged contents. Weigh the delivered parcel and compare it with the gross weight marked on the DTDC booking consignment slip.",
      },
      {
        step: "File Immediate Written Damage Complaint (< 24 Hours)",
        description:
          "Send an email to DTDC corporate customer support and the booking franchisee within 24 hours with photos of the damaged box, broken items, and weight discrepancy to establish transit causation.",
      },
      {
        step: "Statutory Notice for Replacement or Full Damage Value",
        description:
          "If DTDC hides behind franchise disclaimers or refuses repair/replacement reimbursement, issue an advocate legal notice holding both DTDC Corporate and the local booking franchise jointly and severally liable.",
      },
    ],
    statutoryRule: "Section 11 Carriage by Road Act 2007 & Section 2(11) CPA 2019",
  },
  {
    id: "india-post-speed",
    tabLabel: "India Post Speed Post Loss",
    title: "India Post Speed Post or Registered Parcel Lost / Undelivered",
    cause:
      "India Post parcels, Speed Post packets, and registered parcels frequently get lost in regional sorting hubs or returned without attempting delivery. Postal authorities routinely cite Section 6 of the Indian Post Office Act, 1898 (or Section 10 of Post Office Act, 2023) claiming sovereign immunity that exempts the government from liability for loss, misdelivery, or damage to postal articles.",
    legalBasis:
      "The Supreme Court and NCDRC have ruled that statutory immunity under postal laws does not protect postal officials in cases of fraudulent acts, gross negligence, or willful omission. Where postal tracking confirms entry of the article into the postal system but officials fail to show proper transit handover, consumer forums have consistently awarded compensation, refund of postal tariff, and substantial mental agony costs under consumer protection laws.",
    steps: [
      {
        step: "Lodge Formal Complaint on India Post CPGRAMS Portal",
        description:
          "Register a complaint on indiapost.gov.in and simultaneously on the Government of India CPGRAMS portal (pgportal.gov.in) with tracking number and dispatch receipt.",
      },
      {
        step: "File RTI Application for Article Transit Log",
        description:
          "File an online RTI with the concerned Postal Division CPIO seeking the daily bag log, inward mail list, and inquiry findings regarding the missing Speed Post article.",
      },
      {
        step: "Legal Notice to Superintendent of Post Offices & Consumer Forum",
        description:
          "Issue a statutory advocate demand notice to the Senior Superintendent of Post Offices (SSPO) challenging unreasonable immunity and claiming full compensation on e-Jagriti.",
      },
    ],
    statutoryRule: "Post Office Regulations & Consumer Forum Precedents Overcoming Section 6",
  },
  {
    id: "high-value-gadgets",
    tabLabel: "Uninsured High-Value Gadgets",
    title: "Expensive Laptops, Phones, or Valuables Lost Without Separate Transit Insurance",
    cause:
      "Customers booking valuable laptops, smartphones, camera gear, or commercial samples often skip optional declared-value insurance due to confusing carrier pricing or booking agent reassurances. When the item is stolen or lost during hub transit, the carrier claims that uninsured items are transported purely 'at owner's risk' and refuse to pay more than freight charges.",
    legalBasis:
      "Carriers cannot contract out of basic negligence. Under Section 10 and Section 12 of the Carriage by Road Act, 2007, the absence of an insurance policy does not absolve a common carrier of liability for the criminal act, negligence, or conversion of goods by its employees or hub staff. The consignor is entitled to compensation corresponding to the actual proven loss.",
    steps: [
      {
        step: "Collect Original Invoice & Serial / IMEI Number Proof",
        description:
          "Gather original tax purchase invoice, warranty cards, serial numbers, or IMEI records confirming purchase value and legitimate ownership.",
      },
      {
        step: "Lodge Police GD / Cyber Report for Lost Electronic Device",
        description:
          "File a police General Diary (GD) entry or CEIR portal complaint for lost mobile/laptop indicating the device was in the custody of the courier when disappeared.",
      },
      {
        step: "Statutory Demand for Full Replacement Cost & Compensation",
        description:
          "Serve advocate legal notice to courier directors demanding compensation for proven market replacement value and initiating consumer proceedings.",
      },
    ],
    statutoryRule: "Section 12 Carriage by Road Act 2007 (Burden of Proof on Carrier)",
  },
];

export default function CourierParcelProblemTabs() {
  const [activeTab, setActiveTab] = useState<string>(PROBLEMS[0].id);
  const currentProblem = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm">
      <div className="border-b border-slate-200 pb-4 mb-6">
        <span className="text-xs font-bold text-[#DC2626] uppercase tracking-wider block mb-1">
          Interactive Scenario Navigator
        </span>
        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
          Choose Your Courier Dispute: Statutory Rights &amp; Immediate Remedy
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Select your logistics provider or lost parcel scenario to view the legal grounds, court rulings, and exact recovery steps.
        </p>
      </div>

      {/* Tabs list */}
      <div className="flex flex-wrap gap-2 mb-6" role="tablist" aria-label="Courier Dispute Types">
        {PROBLEMS.map((problem) => {
          const isActive = activeTab === problem.id;
          return (
            <button
              key={problem.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${problem.id}`}
              id={`tab-${problem.id}`}
              type="button"
              onClick={() => setActiveTab(problem.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                isActive
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {problem.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab panel content */}
      <div
        id={`panel-${currentProblem.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${currentProblem.id}`}
        className="space-y-5"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <h4 className="text-base sm:text-lg font-bold text-slate-900">{currentProblem.title}</h4>
          <span className="inline-block px-2.5 py-1 bg-red-50 text-[#DC2626] rounded-md text-[11px] font-bold border border-red-100">
            {currentProblem.statutoryRule}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              Root Cause &amp; Carrier Defense
            </h5>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{currentProblem.cause}</p>
          </div>

          <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Statutory Law &amp; Court Doctrine
            </h5>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{currentProblem.legalBasis}</p>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900">
            Recommended Statutory Action Sequence:
          </h5>
          <div className="space-y-2.5">
            {currentProblem.steps.map((s, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 bg-white rounded-xl border border-slate-200/80 shadow-xs"
              >
                <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <div>
                  <h6 className="text-xs sm:text-sm font-bold text-slate-900">{s.step}</h6>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            Carrier refusing to pay more than ₹100 or ₹2,000? Serve a statutory advocate legal notice before initiating consumer court proceedings.
          </div>
          <Link
            href="/legal-notice-charges"
            className="text-xs font-bold text-[#DC2626] hover:text-[#B91C1C] flex items-center gap-1 shrink-0"
          >
            Check Legal Notice Charges &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
