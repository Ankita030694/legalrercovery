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
    id: "home-loan-rejected",
    tabLabel: "Home Loan Rejected",
    title: "Buyer's Home Loan Rejected or Bank Valuation Came Short After Paying Token / Bayana",
    cause:
      "In resale flat and house transactions, buyers routinely pay ₹50,000 to ₹5,00,000 as token or bayana before applying for a bank home loan. If the bank rejects the loan due to unapproved building floor extensions, missing Completion/Occupancy Certificate (CC/OC), or buyer eligibility gaps, the seller often claims the bayana time limit expired and forfeits the entire advance.",
    legalBasis:
      "Under Section 55(1)(a) of the Transfer of Property Act, 1882, a seller is statutorily bound to disclose material defects in the property or title. If the bank rejects the home loan due to property sanction violations or title defects, the seller is in breach and must refund 100% of the token with interest under Section 55(6)(b). Even if the loan failed due to the buyer's credit score, under Section 74 of the Indian Contract Act and Fateh Chand v. Balkishan Dass (AIR 1963 SC 1405), the seller cannot forfeit large part-payments without proving actual financial loss.",
    steps: [
      {
        step: "Obtain Official Bank Loan Rejection / Technical Valuation Report",
        description:
          "Collect a written letter or email from the bank's legal/technical team stating the exact reason for rejection (e.g., deviation from sanctioned plan, missing chain deed, or CIBIL shortfall).",
      },
      {
        step: "Serve Immediate Written Cancellation & Refund Application",
        description:
          "Send a dated cancellation notice before the Agreement to Sell (ATS) deadline expires, placing on record that performance became impossible or was frustrated by property defects.",
      },
      {
        step: "Dispatch 15-Day Statutory Advocate Demand Notice",
        description:
          "If the seller refuses to refund, serve an advocate notice invoking Section 74 Contract Act and Section 55(6)(b) Transfer of Property Act to create a statutory charge on the flat.",
      },
    ],
    statutoryRule: "Section 74 Contract Act & Section 55(1)(a) / 55(6)(b) Transfer of Property Act",
  },
  {
    id: "title-defect-encumbrance",
    tabLabel: "Title Defect / Lien",
    title: "Hidden Mortgage, Unpaid Society Dues, Legal Heir Dispute or Missing Chain Documents",
    cause:
      "After paying token money and signing a kachha bayana receipt, the buyer's lawyer discovers during title due diligence that the resale property has an undisclosed bank mortgage, pending litigation, missing mother deed, or ₹2,00,000+ in unpaid housing society maintenance arrears.",
    legalBasis:
      "Under Section 55(1)(a) and Section 55(1)(g) of the Transfer of Property Act, 1882, every seller is legally obligated to convey a clear, marketable, and encumbrance-free title and clear all public charges and society dues up to the date of sale. In Videocon Properties Ltd. v. Dr. Bhalchandra Laboratories (2004) 3 SCC 711, the Supreme Court held that when a buyer properly declines to proceed due to defective title, the buyer holds a statutory charge on the property under Section 55(6)(b) for 100% of the prepaid purchase money plus interest.",
    steps: [
      {
        step: "Document the Title Defect or Encumbrance in Writing",
        description:
          "Obtain the Sub-Registrar Encumbrance Certificate (EC), CERSAI mortgage search report, or RWA/Society letter confirming unpaid maintenance arrears.",
      },
      {
        step: "Put the Seller on Formal Notice of Default",
        description:
          "Do not walk away verbally—sellers manipulate silence to claim the buyer defaulted. Send an email and WhatsApp message listing the exact title documents missing.",
      },
      {
        step: "Enforce Refund + Statutory Charge via Legal Notice",
        description:
          "Demand 100% refund within 15 days along with 12%–18% interest, warning the seller that a civil recovery suit with lis pendens / Section 55(6)(b) charge will block any third-party sale.",
      },
    ],
    statutoryRule: "Section 55(1)(a) & Section 55(6)(b) Transfer of Property Act; Videocon Properties (2004) SC",
  },
  {
    id: "seller-backs-out",
    tabLabel: "Seller Backed Out",
    title: "Seller Cancels Deal After Receiving Higher Offer or Demands Extra Money Above Bayana",
    cause:
      "When local real estate prices rise during the 45–90 day bayana window, unscrupulous sellers stop answering calls, refuse to sign the sale deed, or return the principal token amount months later without compensation while selling the property to another buyer at a premium.",
    legalBasis:
      "When a seller breaches an Agreement to Sell or Bayana Agreement, the buyer has two powerful statutory remedies: (1) Sue for Specific Performance under Section 10 of the Specific Relief Act, 1963 (as amended in 2018, making specific performance a mandatory rule rather than discretionary) to compel registration; or (2) Claim immediate refund of 100% token money plus liquidated damages (including double bayana if stipulated, subject to Section 73/74 Contract Act) and interest.",
    steps: [
      {
        step: "Prove Your 'Readiness and Willingness' to Pay Balance Price",
        description:
          "Keep your bank statement, home loan sanction letter, or demand draft ready on the agreed registration date, and record your presence at the Sub-Registrar Office (SRO) if required.",
      },
      {
        step: "Serve Advocate Notice Freezing Third-Party Sale",
        description:
          "Issue an immediate legal notice demanding either execution of the Sale Deed or refund with contractual double-bayana damages within 15 days.",
      },
      {
        step: "File Order 37 Summary Suit or Specific Performance Suit",
        description:
          "If the seller attempts to sell to a third party, seek an interim injunction under Order 39 Rules 1 & 2 CPC alongside your money recovery claim.",
      },
    ],
    statutoryRule: "Section 10 & 21 Specific Relief Act (2018 Amendment); Section 73 Contract Act",
  },
  {
    id: "no-written-agreement",
    tabLabel: "No Agreement / Receipt Only",
    title: "Token Money Paid via UPI, IMPS or Cheque With Only a WhatsApp Chat or Kachha Receipt",
    cause:
      "Buyers or prospective tenants pay ₹25,000 to ₹2,00,000 as 'blocking token' via Google Pay, NEFT, or cheque based on oral assurances or a 1-page handwritten kachha parchi, without executing a formal Agreement to Sell. When the deal collapses within days, the seller claims the token is non-refundable.",
    legalBasis:
      "When no formal Agreement to Sell (ATS) containing an explicit forfeiture clause is signed, any payment made is merely a conditional 'token deposit' towards negotiation—not true 'earnest money' capable of forfeiture under Satish Batra v. Sudhir Rawal (2013) 1 SCC 345. Furthermore, under Section 65 and Section 70 of the Indian Contract Act, 1872 (restitution and unjust enrichment), no party can retain money received for a contract that never materialised.",
    steps: [
      {
        step: "Export Complete UPI/NEFT Bank Statement & WhatsApp Thread",
        description:
          "Download the 12-digit UTR bank statement and export the full WhatsApp chat showing the property address, token transfer screenshot, and deal terms under Section 63 BSA 2023.",
      },
      {
        step: "Cite Absence of Forfeiture Clause in Written Demand",
        description:
          "Point out that without a signed forfeiture covenant in a concluded contract, retaining a preliminary token constitutes illegal unjust enrichment under Section 70 Contract Act.",
      },
      {
        step: "Serve 15-Day Legal Notice for Unconditional Restitution",
        description:
          "A formal advocate notice dismantling the 'oral forfeiture' myth resolves most informal token disputes before the seller faces a civil suit.",
      },
    ],
    statutoryRule: "Section 65 & Section 70 Indian Contract Act, 1872; Satish Batra (2013) 1 SCC 345",
  },
  {
    id: "broker-rental-token",
    tabLabel: "Broker / Rental Token",
    title: "Property Dealer, Broker or Landlord Refusing to Return Rental / Resale Token Money",
    cause:
      "A tenant or buyer pays token money to a local real estate broker, property dealer, or housing portal (or directly to a landlord to hold a flat), but the landlord changes lease terms, refuses to sign the rent agreement, or the broker fails to close the deal and pockets the token.",
    legalBasis:
      "Unlike a private individual seller in a standalone resale deal, a real estate broker, property dealership, or proptech portal is a commercial 'service provider' under Section 2(42) of the Consumer Protection Act, 2019. Retaining token money or charging brokerage for an unexecuted deal constitutes 'Deficiency in Service' (Section 2(11)) and 'Unfair Trade Practice' (Section 2(47)). Moreover, under Section 230 of the Contract Act, an agent who collects money without authority or misappropriates token deposits is personally liable.",
    steps: [
      {
        step: "Identify Whether Money Reached the Owner or Stopped With the Broker",
        description:
          "Check the payee name on your UPI/bank transfer receipt. If paid to the broker's account, the broker is directly liable for restitution.",
      },
      {
        step: "Jointly Implead Both Property Owner & Broker in Notice",
        description:
          "Serve a joint legal notice naming both the landlord/seller and the broker so neither can shift blame onto the other.",
      },
      {
        step: "Escalate to Consumer Commission (e-Jagriti) or State RERA",
        description:
          "Against brokers and real estate portals, file an online complaint on e-Jagriti (or State RERA if RERA-registered agent under Section 9/10) for 100% refund plus harassment damages.",
      },
    ],
    statutoryRule: "Section 2(11) & 2(47) Consumer Protection Act 2019; Section 9 & 10 RERA Act 2016",
  },
];

export default function TokenMoneyProblemTabs() {
  const [activeTab, setActiveTab] = useState<string>(PROBLEMS[0].id);
  const activeProblem = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm">
      {/* Tab Buttons */}
      <div className="flex flex-wrap gap-2 pb-4 border-b border-slate-100" role="tablist" aria-label="Token Money Dispute Scenarios">
        {PROBLEMS.map((problem) => (
          <button
            key={problem.id}
            type="button"
            role="tab"
            aria-selected={activeTab === problem.id}
            onClick={() => setActiveTab(problem.id)}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === problem.id
                ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {problem.tabLabel}
          </button>
        ))}
      </div>

      {/* Tab Content Panel */}
      <div className="pt-5 space-y-4" role="tabpanel">
        <div>
          <span className="inline-block px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-black uppercase tracking-wider bg-red-50 text-red-700 border border-red-200 mb-2">
            Statutory Rule: {activeProblem.statutoryRule}
          </span>
          <h3 className="text-base sm:text-lg md:text-xl font-extrabold text-slate-900">
            {activeProblem.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1.5">
            <strong className="text-slate-900 font-bold block text-xs uppercase tracking-wider">
              Why the Dispute Happens
            </strong>
            <p className="leading-relaxed">{activeProblem.cause}</p>
          </div>

          <div className="p-4 bg-amber-50/70 rounded-xl border border-amber-200/80 space-y-1.5 text-amber-950">
            <strong className="text-amber-900 font-bold block text-xs uppercase tracking-wider">
              Statutory Law &amp; Supreme Court Mandate
            </strong>
            <p className="leading-relaxed">{activeProblem.legalBasis}</p>
          </div>
        </div>

        {/* Action Steps */}
        <div className="space-y-2.5 pt-2">
          <strong className="text-xs uppercase tracking-wider font-extrabold text-slate-900 block">
            3-Step Tactical Recovery Plan:
          </strong>
          <div className="grid grid-cols-1 gap-2.5">
            {activeProblem.steps.map((st, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3 bg-white rounded-xl border border-slate-200/90 shadow-2xs"
              >
                <span className="shrink-0 w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">{st.step}</h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{st.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 text-xs text-slate-500">
          Dealing with a landlord holding your rental security deposit or a builder refusing a flat booking refund? See our{" "}
          <Link href="/recover-security-deposit-from-landlord-india" className="text-blue-700 underline font-semibold">
            security deposit recovery guide
          </Link>{" "}
          or our{" "}
          <Link href="/builder-booking-cancellation-refund-legal-notice" className="text-blue-700 underline font-semibold">
            builder booking cancellation refund guide
          </Link>
          .
        </div>
      </div>
    </div>
  );
}
