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
    id: "booking-refund-forfeiture",
    tabLabel: "Deposit Forfeited",
    title: "Dealer Threatens to Forfeit Booking Amount After PDI Rejection",
    cause:
      "When a buyer identifies manufacturing flaws, scratches, or interior tears during Pre-Delivery Inspection (PDI) and refuses that specific vehicle, the dealership salesperson often insists: 'The vehicle has been invoiced from the factory. If you cancel, your ₹25,000–₹1,00,000 booking deposit is strictly non-refundable per booking docket terms.'",
    legalBasis:
      "Under Section 41 of the Sale of Goods Act, 1930, a buyer is not deemed to have accepted goods until given a full, reasonable opportunity to inspect them to verify conformity with the contract. Under Section 43, once a buyer legitimately rejects non-conforming goods, they are not obliged to accept or return them. Furthermore, Section 2(46) and 2(47) of the Consumer Protection Act, 2019 declare unilateral 'non-refundable deposit' clauses in standard adhesion contracts as unfair contract terms and void in law. If the dealer cannot deliver an unblemished, defect-free vehicle, withholding the deposit constitutes an illegal trade practice.",
    steps: [
      {
        step: "Capture Timestamped Photographic & Video Evidence",
        description:
          "Photograph all blemishes, body panel gaps, paint swirls, underbody scrapes, or interior flaws in daylight with high-resolution geotagged imagery.",
      },
      {
        step: "Deliver Written Rejection Memo to General Manager & OEM",
        description:
          "Email a formal 'Notice of Rejection under Section 41 Sale of Goods Act' to the Dealership Principal and OEM nodal consumer care, citing the exact Vehicle Identification Number (VIN) and listing each inspected flaw.",
      },
      {
        step: "Serve Advocate Legal Notice for 100% Refund with Interest",
        description:
          "If the dealer fails to re-allocate a fresh factory VIN within 7 days or refuses full deposit return, serve an advocate legal notice claiming the principal amount plus 18% p.a. penal interest and litigation costs.",
      },
    ],
    statutoryRule: "Sale of Goods Act §41 & §43; Consumer Protection Act 2019 §2(46) & §2(47)",
  },
  {
    id: "unauthorized-registration",
    tabLabel: "RTO Registered Early",
    title: "Dealer Rushed RTO Registration Without Buyer's PDI Inspection Sign-off",
    cause:
      "To lock in end-of-month sales targets or prevent cancellation, rogue dealers frequently submit Form 20 and Vahan portal registration documents to the Regional Transport Office (RTO) without granting the buyer their pre-agreed stockyard PDI. Once the permanent registration number or HSRP is generated, the dealer claims: 'The car is now registered in your name under the Motor Vehicles Act; you cannot refuse delivery.'",
    legalBasis:
      "RTO registration before the buyer's written PDI sign-off represents a severe deficiency in service under Section 2(11) of the Consumer Protection Act, 2019 and a breach of express booking conditions. The dealer cannot unilaterally complete title transfer without the buyer's inspection and consent. In multiple consumer commission rulings, State Commissions have held dealerships strictly liable for unauthorized registration of defective stock and ordered them to either buy back the car at invoice price or bear all de-registration and re-registration costs for a replacement vehicle.",
    steps: [
      {
        step: "Instruct Financing Bank to Freeze Loan Disbursement",
        description:
          "Immediately issue a written notice to your auto loan financier or bank instructing them to withhold or recall final payout disbursement citing fraudulent dealer processing without physical delivery sign-off.",
      },
      {
        step: "Do Not Sign Delivery Challan, Satisfaction Note or Gate Pass",
        description:
          "Refuse to execute the dealer's delivery acceptance sheet. Taking physical possession or driving off the showroom forecourt triggers presumption of acceptance under Section 42 of the Sale of Goods Act.",
      },
      {
        step: "File Joint Escalation with Transport Commissioner & Consumer Court",
        description:
          "Lodge a formal complaint with the State Transport Department for fraudulent Vahan registration and initiate an e-Jagriti consumer complaint for vehicle replacement or 100% financial restitution.",
      },
    ],
    statutoryRule: "CPA 2019 §2(11) & §2(47); Central Motor Vehicles Rules 1989 Rule 47",
  },
  {
    id: "repainted-transit-damage",
    tabLabel: "Repainted / Transit Flaws",
    title: "Dealer Concealed Transit Accident Damage & Performed Secret Local Repainting",
    cause:
      "Vehicles frequently suffer denting, scratching, or undercarriage damage while being loaded or transported on interstate multi-car carrier trailers. Dealerships routinely touch up panels, repaint bumpers or quarter panels at their private body shops, and attempt to hand over the repaired vehicle to an unsuspecting retail buyer as factory-fresh.",
    legalBasis:
      "In the landmark precedent Tata Motors Ltd. v. Rajesh Tyagi (NCDRC RP No. 2632 of 2012), the National Commission held that delivering a vehicle that has suffered transit damage and local repainting, while falsely representing it as brand new from the assembly line, constitutes an egregious unfair trade practice and product misrepresentation. Under Section 84 of the Consumer Protection Act, 2019, the manufacturer and the dealer are jointly liable for product non-conformity.",
    steps: [
      {
        step: "Use a Digital Paint Thickness Gauge (Elcometer)",
        description:
          "Inspect factory paint thickness (typical factory spec is 85–125 microns). Readings exceeding 180–300+ microns on a single door or fender confirm local filler work and aftermarket repaint.",
      },
      {
        step: "Demand Factory Dispatch Challan & In-Transit Damage Log",
        description:
          "Request the manufacturer's gate pass, carrier insurance transit survey note, and Form 22 roadworthiness compliance to verify delivery integrity from the factory gate.",
      },
      {
        step: "Serve Formal Demand for New Replacement Chassis Allocation",
        description:
          "Formally record the repainting on the PDI defect sheet. Require the dealer to assign a fresh factory-dispatched chassis number within 14 days or process a full monetary refund.",
      },
    ],
    statutoryRule: "Tata Motors v. Rajesh Tyagi (NCDRC 2012); CPA 2019 §84 & §86",
  },
  {
    id: "odometer-tampering-testdrive",
    tabLabel: "High Odometer / Demo Car",
    title: "Excessive Odometer Reading (150+ km) or Disguised Showroom Demo Vehicle",
    cause:
      "A brand new car delivered from an urban stockyard should normally have 15–50 km on the odometer (accumulated during factory testing, carrier transit, and RTO inspection). If the odometer reads 120–500+ km, or shows evidence of cluster disconnection, the vehicle was almost certainly driven cross-country over public roads by dealership drivers, utilized as a customer test-drive car, or loaned as a temporary demo unit.",
    legalBasis:
      "Passing off an abused demo or test-drive vehicle as an untouched brand-new car constitutes criminal misrepresentation, cheating under Section 318 of the Bharatiya Nyaya Sanhita, 2023 (formerly Section 420 IPC), and a direct violation of Section 2(47) of the Consumer Protection Act, 2019. Consumer commissions have repeatedly awarded substantial punitive damages against dealerships that delivered vehicles with altered odometers or undisclosed pre-delivery usage.",
    steps: [
      {
        step: "Verify ECU Engine Run Hours via OBD-II Port",
        description:
          "If the instrument cluster shows 35 km but brake rotors exhibit deep grooves and tires show shoulder wear, request an authorized diagnostic scan of ECU engine running hours and tire manufacturing date codes (DOT codes).",
      },
      {
        step: "Cross-Reference Stock Inward Date and PDI System Logs",
        description:
          "Demand the dealer's SAP/DMS system log showing when the chassis arrived at the yard. Extended yard stays exceeding 90–180 days frequently correlate with demo usage.",
      },
      {
        step: "Demand Immediate Vehicle Swapping with Proof of Clean VIN",
        description:
          "Refuse delivery explicitly in writing. Demand assignment of a freshly minted VIN directly from the OEM plant, backed by a statutory notice if the dealer refuses.",
      },
    ],
    statutoryRule: "BNS 2023 §318; CPA 2019 §2(47); M/s Rameshwar Prasad v. M&M",
  },
];

export default function PdiDefectsProblemTabs() {
  const [activeTab, setActiveTab] = useState<string>(PROBLEMS[0].id);
  const activeProblem = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-5 border-b border-slate-100">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-1 rounded-md border border-red-100">
            Interactive Resolution Picker
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-2">
            Select Your Specific PDI Delivery Dispute
          </h3>
        </div>
        <p className="text-xs text-slate-500 sm:text-right max-w-xs">
          Click a scenario below to reveal its statutory legal basis, governing sections, and exact 3-step action plan.
        </p>
      </div>

      {/* Tabs navigation */}
      <div className="flex flex-wrap gap-2 pt-4 pb-5 border-b border-slate-100">
        {PROBLEMS.map((problem) => (
          <button
            key={problem.id}
            type="button"
            onClick={() => setActiveTab(problem.id)}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer ${
              activeTab === problem.id
                ? "bg-red-600 text-white shadow-md shadow-red-600/20"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
            }`}
          >
            {problem.tabLabel}
          </button>
        ))}
      </div>

      {/* Active Tab Content */}
      <div className="pt-6 space-y-6">
        <div>
          <span className="text-xs font-bold text-red-600 tracking-wide uppercase">
            Governing Statute: {activeProblem.statutoryRule}
          </span>
          <h4 className="text-base sm:text-lg md:text-xl font-extrabold text-slate-900 mt-1">
            {activeProblem.title}
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4">
            <h5 className="text-xs font-black uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              The Dealership Conflict
            </h5>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {activeProblem.cause}
            </p>
          </div>

          <div className="bg-amber-50/60 border border-amber-200/80 rounded-xl p-4">
            <h5 className="text-xs font-black uppercase tracking-wider text-amber-900 mb-2 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
              Statutory Consumer Right
            </h5>
            <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
              {activeProblem.legalBasis}
            </p>
          </div>
        </div>

        {/* Action Steps */}
        <div>
          <h5 className="text-xs font-black uppercase tracking-wider text-slate-800 mb-3">
            Recommended Action Rail
          </h5>
          <div className="space-y-3">
            {activeProblem.steps.map((s, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/70"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-600 text-white text-xs font-black flex items-center justify-center mt-0.5">
                  {idx + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs sm:text-sm font-bold text-slate-900">
                    {s.step}
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    {s.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Link */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100">
          <p className="text-xs text-slate-500">
            Need legal intervention? Our advocates draft statutory notices against dealers within 24 hours.
          </p>
          <Link
            href="/legal-notice-to-car-dealer-delayed-delivery-defective-vehicle"
            className="text-xs font-bold text-red-600 hover:text-red-700 hover:underline inline-flex items-center gap-1"
          >
            <span>Explore Car Dealer Legal Notice Hub</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
