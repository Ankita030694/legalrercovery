"use client";

import React, { useState } from "react";
import Link from "next/link";

interface DefenseTab {
  id: string;
  tabLabel: string;
  title: string;
  dealerExcuse: string;
  legalCounter: string;
  steps: {
    step: string;
    description: string;
  }[];
  statutoryRule: string;
}

const DEFENSES: DefenseTab[] = [
  {
    id: "security-cheque-defense",
    tabLabel: "“Blank Security Cheque” Excuse",
    title: "Dealer Claims the Bounced Cheque Was Given Only as a Blank 'Security Cheque' at Appointment",
    dealerExcuse:
      "When manufacturers or super-stockists present a blank or post-dated cheque collected during dealership onboarding, defaulting dealers routinely reply to the notice claiming: 'That cheque was handed over 2 years ago merely as security for the dealership agency, not towards any specific invoice, and you filled in the amount yourself.'",
    legalCounter:
      "In Sripati Singh v. State of Jharkhand (2021) and Bir Singh v. Mukesh Kumar (2019), the Supreme Court settled that a cheque issued as security pursuant to a commercial supply arrangement matures into a legally enforceable debt the moment the dealer fails to clear unpaid invoices by the due date. Under Section 20 (inchoate instruments) and Section 139 of the Negotiable Instruments Act, 1881, the supplier is legally authorised to fill in the crystallized ledger balance and present the cheque.",
    steps: [
      {
        step: "Freeze the Running Ledger on Presentation Date",
        description:
          "Ensure the exact principal amount filled on the security cheque does not exceed the net reconciled debit balance standing in your books on the date the cheque is presented to the bank.",
      },
      {
        step: "Send Intimation Before Presenting the Security Cheque",
        description:
          "Send a short email or WhatsApp message giving the dealer 3 days to pay via RTGS, explicitly stating that upon failure, Security Cheque No. [XXXXXX] will be deposited for ₹[Amount].",
      },
      {
        step: "Serve Mandatory Section 138 Notice Within 30 Days",
        description:
          "Once the bank returns the cheque dishonoured, serve a statutory Section 138 NI Act demand notice within 30 days of the return memo giving the mandatory 15-day cure window.",
      },
    ],
    statutoryRule: "Sections 20, 138 & 139 NI Act 1881 + Sripati Singh (SC 2021)",
  },
  {
    id: "damaged-unsold-stock",
    tabLabel: "“Unsold / Defective Stock” Excuse",
    title: "Dealer Refuses Payment Citing Slow-Moving Inventory, Expiry, or Late Quality Complaints",
    dealerExcuse:
      "After sitting on credit supplies for 60 to 180 days—and often after switching to a competitor's product line—the distributor suddenly claims that the goods were defective, damaged in transit, or unsold in the local market, demanding that your sales team lift the stock back before settling the account.",
    legalCounter:
      "Under Section 42 of the Sale of Goods Act, 1930, a buyer is deemed to have unconditionally accepted the goods when they retain them beyond a reasonable inspection time without intimating rejection, or when they resell part of the consignment and claim Input Tax Credit (ITC) in GSTR-2B. Furthermore, under Section 2(b) of the MSMED Act, 2006, if no written objection is raised by the buyer within 15 days of delivery, the day of delivery is statutorily locked as the 'day of acceptance'.",
    steps: [
      {
        step: "Download GSTR-2B / E-Way Bill Acceptance Proof",
        description:
          "Extract the e-Invoice IRN, E-Way Bill Part-B delivery logs, and proof that the dealer never rejected the e-Way bill within the 72-hour GST portal window and availed ITC on your tax invoice.",
      },
      {
        step: "Invoke the 7-Day Invoice Inspection Clause",
        description:
          "Point to the printed condition on your tax invoice ('Any shortage, transit damage, or quality claim must be notified in writing within 7 days of receipt') and Section 42 of the Sale of Goods Act.",
      },
      {
        step: "Reject Post-Default Return Demands in Legal Notice",
        description:
          "Put on record via an Advocate Legal Notice that outright sale (Principal-to-Principal) is not a 'sale or return' consignment, making the dealer liable for 100% invoice value plus interest.",
      },
    ],
    statutoryRule: "Section 42 Sale of Goods Act 1930 & Section 2(b) MSMED Act 2006",
  },
  {
    id: "oral-sales-rebate",
    tabLabel: "“ASM Promised Extra Rebate”",
    title: "Distributor Claims Your Ex-Sales Manager (ASM/RSM) Promised Special Discounts or Credit Notes",
    dealerExcuse:
      "Dealers frequently deduct arbitrary amounts (₹1 lakh to ₹10 lakhs) from the final ledger payment claiming that your Area Sales Manager (ASM), territory executive, or former sales head verbally promised a special festival scheme, display allowance, price-drop compensation, or salesman salary reimbursement.",
    legalCounter:
      "Under Sections 91 and 92 of the Bharatiya Sakshya Adhiniyam, 2023 (formerly Indian Evidence Act), oral assertions cannot contradict or vary the written terms of tax invoices, official scheme circulars, or signed balance confirmations. A field sales employee has no ostensible authority to waive company receivables unless backed by an official Credit Note (CN) issued by the company's finance department and reported in GSTR-1.",
    steps: [
      {
        step: "Audit Official Credit Notes Issued in GSTR-1",
        description:
          "Compile all official scheme circulars and GST credit notes actually issued to the dealer during the financial year to demonstrate that all legitimate target rebates were already credited.",
      },
      {
        step: "Demand Written Proof of Finance Approval",
        description:
          "Challenge the dealer to produce any official credit note or authorized signatory communication from your accounts team sanctioning the alleged deduction.",
      },
      {
        step: "Serve Statutory Demand for Unadjusted Principal",
        description:
          "Serve a formal legal demand notice rejecting unauthorized unilateral debit notes raised by the dealer and demanding full settlement within 15 days.",
      },
    ],
    statutoryRule: "Sections 91–92 Bharatiya Sakshya Adhiniyam 2023 (Exclusion of Oral Modification)",
  },
  {
    id: "no-signed-agreement",
    tabLabel: "No Dealership Contract",
    title: "Goods Supplied on Purchase Orders or WhatsApp Without a Formal Dealership Agreement",
    dealerExcuse:
      "Many Indian manufacturers and regional wholesalers appoint dealers informally—taking a GST number and visiting card, and dispatching goods against WhatsApp orders or phone calls without signing a formal stamped Dealership Agreement. When payment stops, the dealer thinks you cannot prove a contract.",
    legalCounter:
      "Indian High Courts (including Bharat Forge Ltd. v. Onil Gulati, Delhi HC) have repeatedly held that GST tax invoices containing price, description of goods, and payment terms—when accompanied by E-Way bills and transport bilty (Lorry Receipts) showing delivery—constitute a complete, binding written contract under Order XXXVII Rule 1(2) of the Code of Civil Procedure.",
    steps: [
      {
        step: "Pair Every Unpaid Invoice With Transport LR / E-Way Bill",
        description:
          "Create a tabular statement matching each Tax Invoice Number with its E-Way Bill number, vehicle registration, and signed Transport LR / Delivery Challan.",
      },
      {
        step: "Export WhatsApp Order & Payment Promise Chats",
        description:
          "Export the WhatsApp thread where the dealer placed orders, shared their ledger, or asked for extra time to pay, supported by a Section 63 BSA electronic evidence certificate.",
      },
      {
        step: "Lock Admission via Advocate Demand Notice",
        description:
          "Dispatch an advocate legal notice itemizing the running ledger; if the dealer fails to specifically deny receipt of goods within 15 days, it strengthens an Order 37 Summary Suit.",
      },
    ],
    statutoryRule: "Order XXXVII Rule 1(2) CPC & Bharat Forge v. Onil Gulati (Del HC)",
  },
  {
    id: "proprietor-partnership-shift",
    tabLabel: "Firm Closed / New GSTIN",
    title: "Dealer Shut Down Old Firm or Started Trading Under a Relative's New GSTIN",
    dealerExcuse:
      "A common B2B evasion tactic is for a defaulting distributor to abandon their old proprietorship or partnership GSTIN, stop operating the bank account linked to you, and continue selling from the exact same shop or godown under a spouse's or brother's newly registered firm.",
    legalCounter:
      "A proprietorship firm has zero separate legal existence from its proprietor; the individual owner's personal bank accounts, house, vehicle, and stocks in any new business remain 100% liable for the proprietorship's debt. In a partnership firm, under Section 25 of the Indian Partnership Act, 1932, every partner is jointly and severally liable in their personal capacity for all debts incurred while they were a partner.",
    steps: [
      {
        step: "Identify Entity Type From the 4th Character of PAN/GSTIN",
        description:
          "Check the 6th character of the dealer's 15-digit GSTIN (4th character of PAN): 'P' means Individual Proprietor (100% personal liability); 'F' means Partnership Firm (all partners personally liable); 'C' means Company.",
      },
      {
        step: "Address Notice to Proprietor / All Partners Personally",
        description:
          "Serve the legal notice not only at the shop/godown address on the GST portal, but also at the residential addresses of the proprietor or all partners.",
      },
      {
        step: "Seek Order 38 Rule 5 CPC Attachment Before Judgment",
        description:
          "If the dealer is actively disposing of godown stock or shifting assets to defraud creditors, instruct counsel to seek attachment of stock/bank accounts under Order 38 Rule 5 CPC.",
      },
    ],
    statutoryRule: "Section 25 Indian Partnership Act 1932 & Order 38 Rule 5 CPC",
  },
];

export default function DistributorProblemTabs() {
  const [activeTab, setActiveTab] = useState<string>(DEFENSES[0].id);

  const selected = DEFENSES.find((d) => d.id === activeTab) || DEFENSES[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 md:p-8 space-y-6">
      <div>
        <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-800 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
          Dealer Excuse Counter-Matrix
        </span>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mt-2">
          Select the Excuse Your Distributor or Dealer Is Using to Delay Payment
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Click any common channel-partner defence below to view the statutory counter-argument and the immediate 3-step recovery action:
        </p>
      </div>

      {/* ARIA Tablist */}
      <div
        role="tablist"
        aria-label="Dealer Default Excuses and Legal Counter-Strategies"
        className="flex flex-wrap gap-2 border-b border-slate-200 pb-3"
      >
        {DEFENSES.map((item) => {
          const isSelected = activeTab === item.id;
          return (
            <button
              key={item.id}
              role="tab"
              id={`tab-${item.id}`}
              aria-selected={isSelected}
              aria-controls={`panel-${item.id}`}
              onClick={() => setActiveTab(item.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#404447] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {item.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <div
        role="tabpanel"
        id={`panel-${selected.id}`}
        aria-labelledby={`tab-${selected.id}`}
        className="space-y-5 focus:outline-none"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <h4 className="text-base sm:text-lg md:text-xl font-extrabold text-slate-900">
            {selected.title}
          </h4>
          <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 shrink-0">
            {selected.statutoryRule}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-red-600 block mb-1">
              What the Defaulting Dealer Claims
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {selected.dealerExcuse}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700 block mb-1">
              Why Indian Courts Reject This Defence
            </span>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {selected.legalCounter}
            </p>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <h5 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">
            3-Step Counter-Action For Manufacturers &amp; Suppliers
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {selected.steps.map((s, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="w-6 h-6 rounded-full bg-[#404447] text-white font-bold text-xs flex items-center justify-center mb-2">
                    {idx + 1}
                  </span>
                  <strong className="text-xs sm:text-sm text-slate-900 font-bold block mb-1">
                    {s.step}
                  </strong>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-amber-950">
          <span>
            <strong>Managing multiple defaulting dealers across states?</strong> Check our transparent B2B notice pricing or launch a multi-dealer recovery campaign.
          </span>
          <Link
            href="/legal-notice-charges"
            className="text-red-700 hover:text-red-900 font-bold underline shrink-0"
          >
            View Legal Notice Charges →
          </Link>
        </div>
      </div>
    </div>
  );
}
