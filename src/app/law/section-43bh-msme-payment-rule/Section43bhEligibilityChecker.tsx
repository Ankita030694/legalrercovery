'use client';

import React, { useState } from 'react';

interface ScenarioTab {
  id: string;
  badge: string;
  title: string;
  situation: string;
  statutoryRule: string;
  taxImpact: string;
  supplierAction: string;
}

const SCENARIO_TABS: ScenarioTab[] = [
  {
    id: 'cross-fy-default',
    badge: 'Scenario 1: Cross-Year Default',
    title: 'Invoice Raised in Jan/Feb, Still Unpaid After March 31 (Past 45 Days)',
    situation:
      'A Micro or Small manufacturer delivers goods on 10 January 2026 under a 45-day PO. The 45-day Section 15 deadline expires on 24 February 2026. The buyer fails to pay by 31 March 2026, even if the buyer pays in May 2026 before filing their Income Tax Return.',
    statutoryRule:
      'Section 43B(h) of the Income-tax Act, 1961 read with the First Proviso exclusion and Section 15 of the MSMED Act, 2006.',
    taxImpact:
      '100% of the invoice principal (excluding GST if not routed through P&L) is disallowed in FY 2025–26 (AY 2026–27). The buyer must pay ~25.17% to 31.2% extra Income-tax + Section 234B/234C advance-tax interest now, and can claim the deduction only in FY 2026–27 when actually paid.',
    supplierAction:
      'Serve an urgent Section 43B(h) + Section 16 Legal Demand Notice highlighting Form 3CD Clause 22 mandatory reporting and demanding immediate principal + 3× RBI Bank Rate monthly compound interest.',
  },
  {
    id: 'march-invoice-grace',
    badge: 'Scenario 2: March Invoice Window',
    title: 'Invoice Raised in Late February or March (45-Day Window Spills Into April/May)',
    situation:
      'An MSE service provider raises a verified invoice on 15 March 2026 with a written 45-day credit clause. On 31 March 2026, the invoice is outstanding on the buyer’s balance sheet, and the 45-day statutory window ends on 29 April 2026.',
    statutoryRule:
      'Section 43B(h) triggers disallowance only when a sum is payable "beyond the time limit specified in section 15 of the MSMED Act".',
    taxImpact:
      'If the buyer clears the invoice on or before 29 April 2026 (within 45 days), the deduction IS allowed in FY 2025–26 on accrual basis. If the buyer misses 29 April 2026 by even 1 day (paying on 30 April 2026), the entire expense is disallowed for FY 2025–26!',
    supplierAction:
      'Send a formal Pre-Deadline Statutory Notice 10 days before the 15/45-day expiry date warning the buyer’s Finance Controller that missing the exact April/May cut-off will retroactively destroy their previous FY tax deduction.',
  },
  {
    id: 'no-written-po',
    badge: 'Scenario 3: No Written Agreement (15-Day Rule)',
    title: 'Goods Supplied on Verbal Order / WhatsApp / Standard Invoice Without Signed Credit Clause',
    situation:
      'A buyer claims "our company policy is 60 or 90 days credit" or relies on a unilateral one-line note, without any mutually agreed written agreement specifying payment terms.',
    statutoryRule:
      'Section 15 read with Section 2(b) ("appointed day") of the MSMED Act, 2006.',
    taxImpact:
      'In the absence of a written agreement between buyer and supplier, the statutory payment deadline automatically drops to 15 days from the date of acceptance/deemed acceptance. Any written agreement stipulating >45 days (e.g., 60 or 90 days) is statutorily capped at 45 days.',
    supplierAction:
      'Invoke the 15-day statutory cap in your advocate notice. Point out that unilateral 60/90-day payment terms violate Section 15 and accrue compound interest from Day 16.',
  },
  {
    id: 'trader-or-medium',
    badge: 'Scenario 4: Trader or Medium Enterprise',
    title: 'Supplier is Registered on Udyam as a Trader (Retail/Wholesale) or Medium Enterprise',
    situation:
      'A wholesale distributor or a Medium Enterprise has an unpaid B2B invoice past 45 days and wants to know if Section 43B(h) applies to the buyer.',
    statutoryRule:
      'Explanation 4(e) & (g) to Section 43B of the Income-tax Act + Ministry of MSME O.M. No. 5/2(2)/2021-E/P & G/Policy dated 02.07.2021.',
    taxImpact:
      'Section 43B(h) applies strictly to Micro and Small Enterprises engaged in Manufacturing or Services. Medium Enterprises and Wholesale/Retail Traders (NIC Codes 45, 46, 47) are excluded from Section 43B(h) disallowance.',
    supplierAction:
      'Do not rely on Section 43B(h). Instead, serve a Commercial Money Recovery Legal Notice under Order XXXVII CPC (Summary Suit), Section 73 of the Indian Contract Act (with 18% commercial interest), or Section 9 IBC (if threshold met).',
  },
];

export default function Section43bhEligibilityChecker() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIO_TABS[0].id);
  const [enterpriseType, setEnterpriseType] = useState<'micro-small' | 'medium' | 'unregistered'>('micro-small');
  const [activityType, setActivityType] = useState<'mfg-service' | 'trader'>('mfg-service');
  const [hasWrittenAgreement, setHasWrittenAgreement] = useState<'yes' | 'no'>('yes');
  const [daysUnpaid, setDaysUnpaid] = useState<number>(60);

  const statutoryLimit = hasWrittenAgreement === 'yes' ? 45 : 15;
  const isEligibleEnterprise = enterpriseType === 'micro-small' && activityType === 'mfg-service';
  const isOverdue = daysUnpaid > statutoryLimit;
  const qualifiesFor43Bh = isEligibleEnterprise && isOverdue;

  const currentScenario = SCENARIO_TABS.find((t) => t.id === activeTab) || SCENARIO_TABS[0];

  return (
    <div className="space-y-6">
      {/* Interactive Eligibility Checker Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#C92A2A]">
              Interactive Rulebook Diagnostic
            </span>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
              Quick Check: Does Section 43B(h) Apply to Your Unpaid Invoice?
            </h3>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
            AY 2024–25 to AY 2027–28
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Question 1 */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <label className="block text-xs font-bold text-slate-800">
              1. Supplier&apos;s Udyam Classification on Invoice Date:
            </label>
            <div className="flex flex-wrap gap-1.5">
              {[
                { val: 'micro-small', label: 'Micro or Small (MSE)' },
                { val: 'medium', label: 'Medium Enterprise' },
                { val: 'unregistered', label: 'No Udyam Certificate' },
              ].map((opt) => (
                <button
                  key={opt.val}
                  type="button"
                  onClick={() => setEnterpriseType(opt.val as typeof enterpriseType)}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                    enterpriseType === opt.val
                      ? 'bg-slate-900 text-white'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Question 2 */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <label className="block text-xs font-bold text-slate-800">
              2. Core Business Activity on Udyam Certificate:
            </label>
            <div className="flex flex-wrap gap-1.5">
              {[
                { val: 'mfg-service', label: 'Manufacturing or Services' },
                { val: 'trader', label: 'Retail / Wholesale Trader (NIC 45–47)' },
              ].map((opt) => (
                <button
                  key={opt.val}
                  type="button"
                  onClick={() => setActivityType(opt.val as typeof activityType)}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                    activityType === opt.val
                      ? 'bg-slate-900 text-white'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Question 3 */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <label className="block text-xs font-bold text-slate-800">
              3. Is There a Written PO / Agreement Specifying Credit Days?
            </label>
            <div className="flex flex-wrap gap-1.5">
              {[
                { val: 'yes', label: 'Yes — Written Agreement (Capped at 45 Days)' },
                { val: 'no', label: 'No Written Agreement (15-Day Statutory Limit)' },
              ].map((opt) => (
                <button
                  key={opt.val}
                  type="button"
                  onClick={() => setHasWrittenAgreement(opt.val as typeof hasWrittenAgreement)}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                    hasWrittenAgreement === opt.val
                      ? 'bg-slate-900 text-white'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Question 4 */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <label htmlFor="days-unpaid-range" className="block text-xs font-bold text-slate-800">
              4. Days Elapsed Since Delivery / Acceptance: <span className="text-[#C92A2A]">{daysUnpaid} Days</span>
            </label>
            <input
              id="days-unpaid-range"
              type="range"
              min={5}
              max={180}
              step={5}
              value={daysUnpaid}
              onChange={(e) => setDaysUnpaid(Number(e.target.value))}
              className="w-full accent-[#C92A2A] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-semibold text-slate-500">
              <span>5 Days</span>
              <span>15-Day No-PO Cap</span>
              <span>45-Day Max Cap</span>
              <span>180 Days</span>
            </div>
          </div>
        </div>

        {/* Diagnostic Output Banner */}
        <div
          className={`p-4 rounded-xl border ${
            qualifiesFor43Bh
              ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
              : 'bg-amber-50 border-amber-300 text-amber-950'
          }`}
        >
          <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
            <span className="text-xs font-extrabold uppercase tracking-wider">
              {qualifiesFor43Bh
                ? '✓ Section 43B(h) Tax Disallowance + Section 16 Compound Interest Triggered'
                : '⚠ Section 43B(h) Status & Alternative Recovery Rail'}
            </span>
            <span className="text-xs font-bold">
              Statutory Limit: {statutoryLimit} Days | Elapsed: {daysUnpaid} Days
            </span>
          </div>
          <p className="text-xs sm:text-sm leading-relaxed">
            {qualifiesFor43Bh ? (
              <>
                Your invoice exceeds the <strong>{statutoryLimit}-day statutory ceiling under Section 15 of the MSMED Act</strong> by{' '}
                <strong>{daysUnpaid - statutoryLimit} days</strong>. If unpaid across March 31, the buyer loses 100% of the expense deduction for that financial year under <strong>Section 43B(h)</strong>, must disclose the default in <strong>Form 3CD Clause 22</strong>, and owes non-deductible monthly compound interest at <strong>3× RBI Bank Rate under Sections 16 &amp; 23</strong>.
              </>
            ) : !isEligibleEnterprise ? (
              <>
                Because the supplier is classified as a <strong>{enterpriseType === 'medium' ? 'Medium Enterprise' : enterpriseType === 'unregistered' ? 'Non-Udyam Vendor' : 'Retail/Wholesale Trader'}</strong>, Section 43B(h) tax disallowance does not apply. However, you can immediately serve a <strong>Commercial Money Recovery Legal Notice</strong> under the Indian Contract Act, 1872 and Order XXXVII CPC (Summary Suit) claiming 18% p.a. commercial interest.
              </>
            ) : (
              <>
                Your invoice is currently at <strong>{daysUnpaid} days</strong>, within the <strong>{statutoryLimit}-day Section 15 limit</strong>. Send a formal payment reminder citing your Udyam Registration Number now so the buyer prioritizes release before Day {statutoryLimit + 1}.
              </>
            )}
          </p>
        </div>
      </div>

      {/* Scenario Tabs (strictly styled like IrctcProblemTabs) */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="bg-slate-900 p-3 sm:p-4 border-b border-slate-800">
          <div className="text-[11px] font-extrabold uppercase tracking-wider text-amber-400 mb-2">
            Select Real-World Accounting &amp; Recovery Scenario
          </div>
          <div className="flex flex-wrap gap-2">
            {SCENARIO_TABS.map((tab) => {
              const isSelected = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#C92A2A] text-white shadow-sm'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {tab.badge}
                </button>
              );
            })}
          </div>
        </div>

        <div className="p-5 sm:p-6 space-y-4">
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
            {currentScenario.title}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <strong className="block text-xs uppercase tracking-wider text-slate-500 font-extrabold">
                Fact Pattern
              </strong>
              <p className="text-slate-700 leading-relaxed">{currentScenario.situation}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <strong className="block text-xs uppercase tracking-wider text-slate-500 font-extrabold">
                Governing Statutory Provision
              </strong>
              <p className="text-slate-800 font-semibold leading-relaxed">{currentScenario.statutoryRule}</p>
            </div>

            <div className="p-4 rounded-xl bg-red-50/70 border border-red-200 space-y-1.5">
              <strong className="block text-xs uppercase tracking-wider text-[#C92A2A] font-extrabold">
                Tax &amp; Audit Consequence for Buyer
              </strong>
              <p className="text-slate-800 leading-relaxed">{currentScenario.taxImpact}</p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-1.5">
              <strong className="block text-xs uppercase tracking-wider text-emerald-800 font-extrabold">
                Recommended Supplier Leverage Action
              </strong>
              <p className="text-slate-800 leading-relaxed">{currentScenario.supplierAction}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
