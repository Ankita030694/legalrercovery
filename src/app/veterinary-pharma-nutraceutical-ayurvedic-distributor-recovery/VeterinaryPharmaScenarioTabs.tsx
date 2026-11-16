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
    id: "seasonal-agro-vet-default",
    badge: "Scenario 1 • Seasonal Agro-Vet & Dairy Dealer Credit Freeze",
    title: "Rural Veterinary Dealer Sells Boluses & Feed Premixes, Collects Farmer Cash, but Claims Monsoon or Milk Crash to Block Dues",
    stumblingBlock:
      "Veterinary pharmaceutical and animal nutrition manufacturers supply anthelmintics, bovine fertility hormones, injectable antibiotics, calcium gels, and poultry nutritional premixes to rural agro-vet stockists, dairy federation contractors, and hatchery dealers on 30-to-60 day informal credit. After harvesting seasons or milk flush cycles, the stockist sells the inventory to dairy farmers and commercial poultry integrators, pockets the cash, but freezes remittances to the manufacturing brand—pleading regional drought, cooperative milk procurement rate cuts, or localized bird flu culling losses. The dealer stops post-dated security cheques or demands indefinite roll-overs while diverting liquidity into commercial real estate or other agro-chemical lines.",
    statutoryExposure:
      "Veterinary formulations and animal health products delivered against signed transport lorry receipts (LRs) and valid GST e-Way bills constitute unconditional commercial sales under Section 42 of the Sale of Goods Act, 1930. Farm-level climatic variations, dairy cooperative procurement rate revisions, or disease culls are external downstream risks strictly borne by the distributor, creating zero legal defense against the manufacturing creditor. Unilateral payment withholding triggers mandatory compound interest at 3 times the RBI Bank Rate with monthly rests under Section 16 of the MSMED Act, 2006. Furthermore, where post-dated cheques are dishonoured with memos such as 'Funds Insufficient' or 'Payment Stopped', the distributor's partners or directors incur immediate criminal exposure under Section 138 & Section 141 of the Negotiable Instruments Act, 1881, enforceable at the manufacturer's home bank branch under Section 142(2)(a).",
    recoverySOP: [
      "Compile Uncontested Delivery Dossier: Collate GST e-Way bills, motor transport lorry receipts (LRs), and godown delivery acknowledgments verifying physical receipt at rural depot.",
      "Issue 15-Day Advocate Statutory Demand Notice: Demanding full invoice clearance with MSMED Section 16 compound penal interest and warning of Section 43B(h) corporate tax disallowance.",
      "Deposit Security Cheques & Trigger NI Act Section 138: Upon cheque return, dispatch statutory 30-day demand notice and file criminal complaint under NI Act Section 142(2) at the manufacturer's home bank court.",
      "Simultaneous MSME Samadhaan Filing & Order XXXVII Plaint: Escalate to State MSEFC for statutory recovery while initiating an Order XXXVII CPC Summary Suit with Order XXXVIII Rule 5 pre-judgment bank account attachment.",
    ],
    keyAuthority:
      "MSMED Act 2006 ss. 15–18, NI Act 1881 ss. 138 & 142(2)(a), Sale of Goods Act 1930 s.42 & CPC Order XXXVII",
  },
  {
    id: "ayush-territory-squatting",
    badge: "Scenario 2 • AYUSH Super-Stockist Territory Squatting & Expiry Dumps",
    title: "Ayurvedic Patent Medicine Stockist Squats on District Monopoly, Freezes Primary Indents & Threatens Unilateral Expired Stock Dumps",
    stumblingBlock:
      "An Ayurvedic/ASU (Ayurveda, Siddha, Unani) proprietary medicine manufacturer appoints a regional super-stockist with exclusive marketing rights across 4–6 districts. The stockist pushes competing brands or local unbranded syrups, fails to achieve monthly primary sales targets, builds up an aging unpaid ledger of ₹20L–₹60L, and refuses to allow the company to appoint a replacement stockist. When the company demands payment, the stockist threatens to dump slow-moving seasonal stock (chyawanprash, pain liniments, herbal digestives) as 'expired goods' beyond contractual return caps (typically 1.5%–2%) and demands massive credit notes that would wipe out the entire receivable balance.",
    statutoryExposure:
      "Exclusive distribution agreements establish reciprocal contractual duties under Section 39 and Section 51 of the Indian Contract Act, 1872. A stockist in chronic credit default forfeits territory exclusivity, enabling the brand to immediately terminate the distributorship without legal liability. Regarding expired stock dumps, under Section 34 of the CGST Act, 2017, commercial credit notes for sales returns cannot be issued post-November 30 following the financial year. Furthermore, arbitrary deductions violating the manufacturer's standard credit-note SOP are invalid under CBIC Circular No. 72/46/2018-GST. Stockist resistance to new dealer appointments constitutes an anti-competitive market allocation agreement under Section 3(3)(b) of the Competition Act, 2002.",
    recoverySOP: [
      "Formally Terminate Distributorship & Revoke Monopoly: Issue an advocate-vetted termination notice under Contract Act s.39 revoking all exclusive marketing and territorial covenants.",
      "Reject Arbitrary Expired Goods Dumps: Enforce contractual 1.5% return caps and statutory CGST Section 34 cut-offs, issuing formal rejection memos for unauthorized return consignments.",
      "Serve Statutory Tri-Channel Demand Notice: Dispatched via Speed Post RPAD, email, and WhatsApp, claiming the full reconciled invoice balance plus MSMED compound interest.",
      "Appoint Alternate Stockists & Secure Injunction: Onboard replacement district stockists immediately; if the defaulting dealer attempts an illegal trade boycott, serve cease-and-desist notices under the Competition Act and initiate recovery through the Commercial Court.",
    ],
    keyAuthority:
      "Indian Contract Act 1872 ss. 39 & 73, CGST Act 2017 s.34, CBIC Circular 72/46/2018-GST & Competition Act 2002 s.3",
  },
  {
    id: "nutraceutical-cdmo-batch-refusal",
    badge: "Scenario 3 • Private-Label Nutraceutical CDMO Batch Refusal",
    title: "Brand Owner Orders Custom Formulation Whey, Gummies or Herbal Extracts, then Abandons Ready Batches Due to Slumping D2C Demand",
    stumblingBlock:
      "A third-party/loan-licensee FSSAI nutraceutical contract manufacturer formulates, manufactures, tests, and packs custom-branded dietary supplements (e.g. 5,000 units of custom flavor whey protein isolate, effervescent multivitamin tablets, or collagen gummies) against a confirmed Purchase Order and advance deposit of 20%–30%. When the finished batch is ready with the brand owner's proprietary labels and FSSAI license printing, consumer demand cools or the client runs out of working capital. The brand owner refuses to lift the batch, stops communicating, withholds the balance 70%–80% payment (₹25L–₹1 Cr), leaving the manufacturer stuck with customized goods that cannot legally be sold to any third party.",
    statutoryExposure:
      "Under Section 46 and Section 55 of the Sale of Goods Act, 1930, where the property in goods has passed or where the price is payable on a certain day irrespective of delivery, the unpaid seller may sue for the full contract price. For custom-manufactured goods printed with the buyer's trademark, the goods possess zero third-party marketability; therefore, the full contract sum represents liquidated damages under Section 73 & Section 74 of the Indian Contract Act, 1872. Furthermore, failure by a non-MSME brand owner to clear an MSME manufacturer's dues within 45 days triggers compulsory 3x RBI compound penal interest under Section 16 of the MSMED Act and corporate tax deduction disallowance under Section 43B(h).",
    recoverySOP: [
      "Dispatch Certificate of Analysis (CoA) & Notice of Completion: Provide written evidence of batch completion, quality compliance, and stability data under FSSAI regulations.",
      "Tender Formal Delivery & Issue 7-Day Batch Lifting Notice: Place buyer on formal notice that warehousing, storage demurrage, and shelf-life decay risks have shifted entirely to the buyer under Sale of Goods Act s.44.",
      "Serve Advocate Statutory Demand Notice: Demanding immediate clearance of the full contract balance plus storage demurrage and MSMED statutory compound interest.",
      "File MSME Facilitation Council Petition & Section 9 Commercial Injunction: Initiate expedited MSME recovery and, if the brand owner is a corporate entity with assets, file an Order XXXVII Summary Suit or IBC Section 8 Demand Notice.",
    ],
    keyAuthority:
      "Sale of Goods Act 1930 ss. 44, 46 & 55, Contract Act 1872 ss. 70 & 73, MSMED Act 2006 ss. 15–18 & Income Tax Act s.43B(h)",
  },
  {
    id: "modern-trade-wellness-deductions",
    badge: "Scenario 4 • Modern Trade & OTC Wellness Arbitrary Deductions",
    title: "National Retail Supermarkets & E-Com Aggregators Levy Unilateral Listing, Promotion & Markdown Debits to Withhold Settlement Ledgers",
    stumblingBlock:
      "An OTC wellness or nutraceutical brand supplies packaged herbal supplements, protein bars, or organic juices to large-format modern trade retail supermarket chains or dark-store quick-commerce aggregators. When payment reconciliations arrive after 90–120 days, the retailer's accounts department unilaterally deducts 30% to 50% of the invoice value under vague headers like 'New Store Opening (NSO) fees', 'Unilateral Festive Promotion Schemes', 'Markdown Margin Compensation', and 'Damaged Stock Write-offs' without prior written authorization, countersigned debit notes, or photographic evidence.",
    statutoryExposure:
      "Unilateral debit notes unsupported by bilateral written agreements or signed credit approvals are void under Section 73 of the Indian Contract Act, 1872. Under GST regulations, a buyer cannot adjust tax liability through unilateral debit notes without the supplier's acceptance. Furthermore, Section 15 of the MSMED Act supersedes any conflicting clauses in standard vendor agreements: the statutory 45-day payment window is absolute and cannot be contractually extended. Retail chains that withhold payments beyond 45 days violate Section 43B(h) of the Income Tax Act, rendering the entire purchase expense non-deductible for corporate tax computation.",
    recoverySOP: [
      "Audit Deduction Ledger: Dissect payment remittance advices, flagging all unauthorized debit notes, NSO charges, and unsubstantiated shelf-space fees.",
      "Issue Rebuttal Notice under Contract Act s.73: Formally rejecting unilateral debits and demanding credit reversal within 7 days.",
      "Serve Advocate Legal Demand Notice: Invoking Section 15 & 16 of the MSMED Act for full principal recovery plus compound interest at 3x the RBI Bank Rate.",
      "Escalate to MSME Samadhaan & Corporate Statutory Audit Alerts: Notify the retail entity's Chief Financial Officer and Statutory Auditors regarding Section 43B(h) non-compliance and MSEFC proceedings.",
    ],
    keyAuthority:
      "MSMED Act 2006 ss. 15, 16 & 24, Indian Contract Act 1872 s.73, Income Tax Act 1961 s.43B(h) & CGST Act 2017 s.34",
  },
];

export default function VeterinaryPharmaScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);

  const activeScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-6">
        {SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`p-3.5 rounded-xl text-left transition-all border ${
                isActive
                  ? "bg-slate-900 text-white border-slate-900 shadow-md"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300"
              }`}
            >
              <span
                className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider mb-1.5 ${
                  isActive ? "bg-red-950/80 text-red-400 border border-red-800/60" : "bg-slate-200 text-slate-600"
                }`}
              >
                {scenario.badge.split("•")[0].trim()}
              </span>
              <p
                className={`text-xs font-bold line-clamp-2 leading-snug ${
                  isActive ? "text-white" : "text-slate-800"
                }`}
              >
                {scenario.badge.split("•")[1]?.trim() || scenario.badge}
              </p>
            </button>
          );
        })}
      </div>

      {/* Tab Content Panel */}
      <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] border border-red-200 mb-2">
            {activeScenario.badge}
          </span>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
            {activeScenario.title}
          </h3>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
          <div className="bg-white rounded-xl p-4 border border-slate-200">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
              Commercial Bottleneck / Defaulter Pretext:
            </span>
            <p>{activeScenario.stumblingBlock}</p>
          </div>

          <div className="bg-white rounded-xl p-4 border border-slate-200">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-[#DC2626] mb-1">
              Statutory Liability &amp; Creditor Advantage:
            </span>
            <p>{activeScenario.statutoryExposure}</p>
          </div>
        </div>

        {/* SOP Steps */}
        <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200 mb-5">
          <span className="block text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
            LegalRecovery Operational SOP Protocol:
          </span>
          <div className="space-y-2.5">
            {activeScenario.recoverySOP.map((step, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-snug">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between flex-wrap gap-2 text-[11px] font-semibold text-slate-500 pt-2 border-t border-slate-200">
          <span>
            Statutory Authority:{" "}
            <strong className="text-slate-700">{activeScenario.keyAuthority}</strong>
          </span>
        </div>
      </div>
    </div>
  );
}
