"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  badge: string;
  title: string;
  stumblingBlock: string;
  statutoryExposure: string;
  recoverySOP: string[];
  keyAuthority: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "unbilled-ot-consumption",
    badge: "Scenario 1 • Emergency OT Consumption Without PO",
    title: "Hospital Implants Stents or Knee Joints on Weekend/Emergency Basis, Bills the Patient, but Purchase Holds PO for 6+ Months",
    stumblingBlock:
      "A cardiac distributor deposits Drug-Eluting Stents (DES), PTCA balloon catheters, or orthopedic knee/hip kits in the hospital's Cath-Lab or Operation Theatre (OT) on a Delivery Challan. On a Sunday night or during emergency trauma, the surgical team implants 2 stents or an uncemented hip stem into a patient. The hospital bills the patient or the corporate cashless desk immediately, collects ₹2.5L to ₹4.5L at discharge, yet the hospital procurement department refuses to generate a formal Purchase Order (PO) or Goods Receipt Note (GRN), claiming internal requisition backlogs or inventory reconciliation delays.",
    statutoryExposure:
      "Under Section 24(a) of the Sale of Goods Act, 1930 ('Sale on Approval or Return / Consignment'), property in the goods passes irrevocably to the buyer the exact moment the buyer does any act adopting the transaction—such as surgically implanting the medical device into a human body. Consumption in OT extinguishes the distributor's title and converts the transaction into an absolute sale at the challan rate. The hospital cannot delay price liability by withholding an administrative PO. Furthermore, under Section 15 of the MSMED Act, 2006, the deemed day of acceptance commences upon physical consumption, triggering mandatory payment within 45 days and Section 16 penal compound interest at three times the RBI Bank Rate.",
    recoverySOP: [
      "Retrieve the OT consumption sticker log: Secure photograph/carbon copy of the outer implant carton barcode sticker pasted into the Patient OT Scrub Register or Cath-Lab Procedure Log.",
      "Issue a Formal Sale-Adoption Demand citing Sale of Goods Act s.24(a), notifying the Medical Superintendent and CFO that property passed on the surgical date.",
      "Dispatch a 15-Day Statutory Advocate Demand Notice demanding immediate tax invoice acceptance, e-Way bill ledger reconciliation, and payment at agreed consignment rates.",
      "Simultaneously initiate MSME Samadhaan petition or Commercial Summary Plaint under Order XXXVII CPC if the hospital fails to tender payment within 15 days.",
    ],
    keyAuthority: "Sale of Goods Act 1930 s.24(a), MSMED Act 2006 ss.15-16 & Commercial Courts Act 2015 s.2(1)(c)(xviii)",
  },
  {
    id: "unreturned-loaner-sets",
    badge: "Scenario 2 • Unreturned Loaner Instrumentation & Trays",
    title: "Hospital Detains Multi-Lakh Spine Screw Sets, Trauma Jigs & Drill Instrumentation, Refusing Return or Demurrage Settlement",
    stumblingBlock:
      "For complex spine fusions or poly-trauma reconstructive surgeries, implant distributors supply proprietary surgical instrumentation loaner sets (cannulated screw sets, pedicle rod benders, reamers, trial heads, and power tools worth ₹8L to ₹25L) alongside consumed implants. Following surgery, the hospital OT nursing superintendent or CSSD central sterilization unit detains the instrumentation trays, misplaces components, or refuses to release the sets back to the distributor's field logistics representative without unapproved deductions.",
    statutoryExposure:
      "Loaner surgical instruments are supplied under bailment (Section 148 of the Indian Contract Act, 1872). Wrongful retention, detention, or conversion of bailed medical devices constitutes Criminal Breach of Trust under Section 316 of the Bharatiya Nyaya Sanhita, 2023 (BNS, corresponding to legacy IPC Section 405/406), punishable with up to 5 years imprisonment, as well as Cheating under Section 318 BNS. In civil law, the hospital is liable for running commercial equipment demurrage (₹3,000–₹10,000/day) under Section 73 of the Contract Act and mandatory appointment of a Court Receiver under Order XL Rule 1 CPC.",
    recoverySOP: [
      "Compile the Bailment Delivery Dossier: Signed loaner delivery challan detailing individual tray serial numbers, CSSD sterilizer logs, and distributor field technician sign-off.",
      "Issue an immediate 48-Hour Surgical Asset Repossession Notice stating the daily commercial demurrage charge running against the hospital administration.",
      "Serve an Advocate Legal Notice citing Section 316 BNS Criminal Breach of Trust and demanding unconditional return of unconsumed implants and intact instrument trays.",
      "Move an urgent pre-institution interim application before the Commercial Court under Section 9 of the Arbitration Act or Order XL Rule 1 CPC for an ex-parte Court Commissioner to seize and inventory the detained trays.",
    ],
    keyAuthority: "Bharatiya Nyaya Sanhita 2023 s.316 & s.318, Contract Act 1872 s.148 & CPC Order XL Rule 1",
  },
  {
    id: "nppa-margin-dispute",
    badge: "Scenario 3 • NPPA Price-Cap Margin Disputes & Retroactive Deductions",
    title: "Hospital CFO Deducts Arbitrary 25%–40% Margins Citing NPPA Ceiling Revisions, Withholding Historic Consignment Payments",
    stumblingBlock:
      "Following National Pharmaceutical Pricing Authority (NPPA) ceiling notifications under Paragraph 19 of the Drugs (Prices Control) Order, 2013 (DPCO) for Drug-Eluting Stents (₹34,128 ceiling + GST) or Knee Replacement Implants (₹54,000–₹1,13,950 ceilings), hospital managements unilaterally attempt to squeeze distributor margins. The hospital CFO deducts retroactive 'trade margin discounts' from historic pending ledgers, claiming that NPPA ceiling caps require distributors to supply at 30% below ceiling while the hospital bills the maximum statutory ceiling to the end patient.",
    statutoryExposure:
      "Under DPCO 2013 and NPPA enforcement guidelines, price ceilings govern the maximum retail price chargeable to the patient; they do not authorize private hospitals to unilaterally rewrite signed distributor supply agreements or slash agreed invoice rates. Unilateral debit notes issued without distributor consent violate Section 73 of the Indian Contract Act, 1872. Furthermore, where hospitals bill patients the full NPPA ceiling while illegally underpaying the distributor, the hospital exposes its administration to prosecution under Section 10 of the Essential Commodities Act, 1955 for overcharging and profiteering.",
    recoverySOP: [
      "Audit the commercial ledger: Segregate agreed consignment base rates, delivery challan prices, and unauthorized debit notes issued unilaterally by the hospital accounts desk.",
      "Collect billing evidence: Secure patient discharge invoices showing the hospital billed the full NPPA ceiling price while seeking to underpay the distributor.",
      "Serve a Statutory Legal Notice rejecting unilateral debit notes, invoking Contract Act s.73 and notifying the hospital of potential reporting to the NPPA Monitoring & Enforcement Division.",
      "File an MSME Samadhaan reference for the full contractually agreed principal invoice amount plus statutory compound interest under Section 16 of the MSMED Act.",
    ],
    keyAuthority: "DPCO 2013 Para 19, Essential Commodities Act 1955 s.10 & Contract Act 1872 s.73",
  },
  {
    id: "tpa-claim-delay-excuse",
    badge: "Scenario 4 • TPA / Cashless Claim Delay Excuse",
    title: "Hospital Delays Implant Payment by 9 to 18 Months Citing: 'We Will Pay You Only When TPA / Ayushman Bharat Clears Our Claim'",
    stumblingBlock:
      "Hospital billing departments routinely defer implant and stent clearance by asserting that payment to the distributor is contingent upon insurance TPAs (Third-Party Administrators), corporate credit tie-ups, or government schemes (Ayushman Bharat PM-JAY, CGHS, ECHS) reimbursing the hospital's overall package claim. The distributor is forced to act as an involuntary working capital lender, waiting 9 to 18 months for implant payouts while facing 60-day credit limits with multinational device manufacturers (Medtronic, Abbott, Boston Scientific, Stryker, DePuy Synthes).",
    statutoryExposure:
      "Unless the signed consignment agreement contains an express, legally valid 'Pay-When-Paid' clause (which is strictly disfavored in Indian commercial law and completely void against MSME suppliers under Sections 15 & 24 of the MSMED Act), hospital liability to pay for consumed implants is independent of third-party insurance settlements. Under Section 24 of the Sale of Goods Act, price becomes due upon surgical consumption. The hospital's dispute with an insurer or scheme portal provides zero legal defense against the vendor's liquidated claim.",
    recoverySOP: [
      "Examine the purchase documentation: Prove the absence of any valid 'Pay-When-Paid' condition in the Delivery Challan or Master Consignment Agreement.",
      "Issue an Executive Notice clarifying that insurance risk lies exclusively with the treating institution, not the implant manufacturer or authorized distributor.",
      "Serve a 15-Day Advocate Legal Notice citing MSMED Act s.15 (non-waivable 45-day payment limit) and Commercial Courts Act Section 2(1)(c)(xviii).",
      "Attach the hospital's corporate bank accounts and receivables through an Order XXXVIII Rule 5 CPC interim application if formal litigation is initiated.",
    ],
    keyAuthority: "MSMED Act 2006 ss. 15, 16 & 24, Sale of Goods Act 1930 s.24 & CPC Order XXXVIII Rule 5",
  },
];

export default function CardiacStentScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const activeScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-200">
        <div>
          <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-red-100 text-[#DC2626] mb-1.5">
            Operational Failure Modes &amp; Remedies
          </span>
          <p className="text-base sm:text-lg font-black text-slate-900">
            Hospital Consignment Default Resolution Matrix
          </p>
        </div>
        <span className="text-xs text-slate-500 font-medium">
          Select scenario to inspect statutory triggers &amp; recovery SOP
        </span>
      </div>

      {/* Tabs Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
        {SCENARIOS.map((sc) => (
          <button
            key={sc.id}
            type="button"
            onClick={() => setActiveTab(sc.id)}
            className={`px-3.5 py-2.5 rounded-xl text-xs font-bold text-left transition-all cursor-pointer ${
              activeTab === sc.id
                ? "bg-[#DC2626] text-white shadow-xs"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            <span className="block text-[10px] uppercase opacity-75 mb-0.5">
              {sc.id === "unbilled-ot-consumption" && "Mode 1"}
              {sc.id === "unreturned-loaner-sets" && "Mode 2"}
              {sc.id === "nppa-margin-dispute" && "Mode 3"}
              {sc.id === "tpa-claim-delay-excuse" && "Mode 4"}
            </span>
            <span className="line-clamp-1">{sc.badge.split("•")[1]?.trim() || sc.badge}</span>
          </button>
        ))}
      </div>

      {/* Active Tab Content Card */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            {activeScenario.badge}
          </span>
        </div>

        <p className="text-base sm:text-lg font-bold text-slate-900 mb-4 leading-snug">
          {activeScenario.title}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <div className="bg-red-50/60 border border-red-200/80 rounded-xl p-4">
            <span className="block text-[11px] font-black uppercase tracking-wider text-[#DC2626] mb-1.5">
              The Hospital Bottleneck &amp; Dispute
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.stumblingBlock}
            </p>
          </div>

          <div className="bg-slate-900 text-white rounded-xl p-4">
            <span className="block text-[11px] font-black uppercase tracking-wider text-red-400 mb-1.5">
              Statutory Exposure &amp; Creditor Rights
            </span>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {activeScenario.statutoryExposure}
            </p>
          </div>
        </div>

        <div className="mb-4">
          <span className="block text-[11px] font-black uppercase tracking-wider text-slate-900 mb-2.5">
            Operational Recovery SOP &bull; 4 Step Action Rail
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {activeScenario.recoverySOP.map((step, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80"
              >
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#DC2626] text-white text-[10px] font-black shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-3 border-t border-slate-100 flex items-center justify-between flex-wrap gap-2 text-xs">
          <span className="text-slate-500 font-medium">
            Governing Legal Authority:
          </span>
          <span className="font-bold text-slate-800 bg-slate-100 px-2.5 py-1 rounded-md">
            {activeScenario.keyAuthority}
          </span>
        </div>
      </div>
    </div>
  );
}
