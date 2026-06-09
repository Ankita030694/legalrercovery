'use client';

import React from 'react';
import Link from 'next/link';
import FAQSection, { FAQItem } from '@/components/FAQSection';

const queryLinks: Record<string, string> = {
  "Recovery of unpaid salary": "/recovery/unpaid-salary",
  "Recovery of pending salary from employer": "/recovery/pending-salary-from-employer",
  "Recovery of FNF settlement": "/recovery/fnf-settlement",
  "Recovery of outstanding dues from employer": "/recovery/outstanding-dues-from-employer",
  "Recovery of security deposit": "/recovery/security-deposit",
  "Recovery of rental security deposit": "/recovery/rental-security-deposit",
  "Recovery of office security deposit": "/recovery/office-security-deposit",
  "Recovery of builder booking amount": "/recovery/builder-booking-amount",
  "Recovery of flat booking cancellation refund": "/recovery/flat-booking-cancellation-refund",
  "Recovery of gratuity amount": "/recovery/gratuity-amount",
  "Recovery of unpaid incentives": "/recovery/unpaid-incentives",
  "Recovery of unpaid bonus": "/recovery/unpaid-bonus",
  "Recovery of PF amount": "/recovery/pf-amount",
  "Recovery of employee reimbursement claims": "/recovery/employment-reimbursement-claims",
  "Recovery of travel reimbursement": "/recovery/travel-reimbursement",
  "Recovery of business dues": "/recovery/business-dues",
  "Recovery of unpaid invoices": "/recovery/unpaid-invoices",
  "Recovery of vendor payments": "/recovery/vendor-payments",
  "Recovery of freelancer payments": "/recovery/freelancer-payments",
  "Recovery of consultancy fees": "/recovery/consultancy-fees",
  "Recovery of unpaid commissions": "/recovery/unpaid-commissions",
  "Recovery of retained salary": "/recovery/retained-salary",
  "Recovery of delayed wages": "/recovery/delayed-wages",
  "Recovery of notice period salary": "/recovery/notice-period-salary",
  "Recovery of pending overtime payment": "/recovery/pending-overtime-payment",
  "Recovery of contractor payment": "/recovery/contractor-payment",
  "Recovery of pending project payment": "/recovery/pending-project-payment",
  "Recovery of international client payment": "/recovery/international-client-payment",
  "Recovery of export dues": "/recovery/export-dues",
  "Recovery of MSME dues": "/recovery/msme-dues",
  "Recovery under MSME Samadhan": "/recovery/msme-samadhan",
  "Recovery of delayed payment interest under MSME": "/recovery/delayed-payment-interest-under-msme",
  "Recovery of loan amount given to friend": "/legal-notice-to-recovery-my-loan-from-friend",
  "Recovery of money lent without agreement": "/recovery/money-lent-without-agreement",
  "Recovery of friendly loan amount": "/recovery/friendly-loan-amount",
  "Recovery of hand loan amount": "/recovery/hand-loan-amount",
  "Recovery of cheque bounce amount": "/recovery/cheque-bounce-amount",
  "Recovery under NI Act": "/recovery/under-ni-act",
  "Recovery of post-dated cheque amount": "/recovery/post-dated-cheque-amount",
  "Recovery of fraud transaction amount": "/recovery/fraud-transaction-amount",
  "Recovery of cyber fraud money": "/recovery/cyber-fraud-money",
  "Recovery of online scam payment": "/recovery/online-scam-payment",
  "Recovery of UPI fraud amount": "/recovery/upi-fraud-amount",
  "Recovery of bank transfer fraud amount": "/recovery/bank-transfer-fraud-amount",
  "Recovery of debit card fraud amount": "/recovery/debit-card-fraud-amount",
  "Recovery of credit card fraud amount": "/recovery/credit-card-fraud-amount",
  "Recovery of unauthorized bank deduction": "/recovery/unauthorized-bank-deduction",
  "Recovery of insurance claim amount": "/recovery/insurance-claim-amount",
  "Recovery of mediclaim reimbursement": "/recovery/mediclaim-reimbursement",
  "Recovery of accidental insurance claim": "/recovery/accidental-insurance-claim",
  "Recovery of health insurance rejection claim": "/recovery/health-insurance-rejection-claim",
  "Recovery of flight cancellation refund": "/recovery/flight-cancellation-refund",
  "Recovery of flight compensation claim": "/recovery/flight-compensation-claim",
  "Recovery of delayed flight compensation": "/recovery/delayed-flight-compensation",
  "Recovery of airline refund amount": "/recovery/airline-refund-amount",
  "Recovery of travel booking refund": "/recovery/travel-booking-refund",
  "Recovery of hotel booking refund": "/recovery/hotel-booking-refund",
  "Recovery of tour package refund": "/recovery/tour-package-refund",
  "Recovery of gym membership refund": "/recovery/gym-membership-refund",
  "Recovery of coaching institute fees": "/recovery/coaching-institute-fees",
  "Recovery of school fee refund": "/recovery/school-fee-refund",
  "Recovery of college fee refund": "/recovery/college-fee-refund",
  "Recovery of event cancellation refund": "/recovery/event-cancellation-refund",
  "Recovery through legal notice": "/send-legal-notice-online-india",
  "Freelancer payment recovery guide": "/freelancer-payment-recovery-guide",
  "How to recover unpaid salary legally": "/how-to-recover-unpaid-salary-legally",
};

const recoveryFaqs: FAQItem[] = [
  {
    question: "What is a legal notice for money recovery?",
    answer: "A legal notice for money recovery is a formal written communication sent by an advocate on behalf of a creditor to a debtor. It details the amount owed, the transaction history, the legal basis of the claim, and gives the debtor a strict deadline (typically 15 days) to settle the payment. Sending a legal notice is a mandatory first step before initiating most legal suits in India, as it serves as official evidence of the dispute and gives the debtor a final chance to resolve the matter out of court."
  },
  {
    question: "How long does a debtor have to reply to a legal recovery notice?",
    answer: "Usually, a legal notice for money recovery specifies a time limit of 15 days from the date of receipt for the debtor to reply or settle the outstanding amount. However, depending on the case and contract terms, this period can sometimes be extended to 21 or 30 days. If the debtor does not reply or pay within this period, the creditor is legally entitled to file a civil suit or pursue other legal actions."
  },
  {
    question: "What can I do if the debtor does not respond to the legal notice?",
    answer: "If the debtor fails to respond to the legal notice or refuses to pay within the stipulated time, you can initiate formal legal proceedings. Depending on the nature of the dispute, your options include filing a Summary Suit under Order 37 of the CPC, initiating insolvency proceedings under the IBC (if the debt is corporate and exceeds the threshold), filing a complaint under Section 138 of the NI Act (for cheque bounces), or filing a claim through the MSME Samadhan portal if you are a registered MSME."
  },
  {
    question: "Is a legal notice mandatory before filing a recovery suit in India?",
    answer: "While not strictly mandatory for every type of civil suit under the Code of Civil Procedure, sending a legal notice is highly recommended and practically essential. It establishes your clean intentions (bona fide attempt to settle out of court), documents the exact amount and interest claimed, and forces the debtor to state their defense. For specific actions like Cheque Bounce cases under Section 138 of the NI Act or filing under MSME Samadhan, serving a formal demand/legal notice is a strict statutory requirement before you can file a case."
  },
  {
    question: "How does MSME Samadhan help micro & small enterprises recover payments?",
    answer: "The MSME Samadhan portal is a dedicated platform set up under the MSMED Act, 2006. If a registered micro or small enterprise supplies goods or services to a buyer, the buyer must make payment within 45 days. If they fail to do so, the MSME can file a case online. The buyer is then liable to pay compound interest with monthly rests to the supplier on the delayed amount, calculated at three times the bank rate notified by the RBI. The MSME Facilitation Council conducts conciliation and arbitration to resolve the dispute."
  }
];

export default function RecoveryClient() {
  const queries = [
    "Recovery of unpaid salary",
    "Recovery of pending salary from employer",
    "Recovery of FNF settlement",
    "Recovery of outstanding dues from employer",
    "How to recover unpaid salary legally",
    "Recovery of security deposit",
    "Recovery of rental security deposit",
    "Recovery of office security deposit",
    "Recovery of builder booking amount",
    "Recovery of flat booking cancellation refund",
    "Recovery of unpaid incentives",
    "Recovery of unpaid bonus",
    "Recovery of gratuity amount",
    "Recovery of PF amount",
    "Recovery of employee reimbursement claims",
    "Recovery of travel reimbursement",
    "Recovery of business dues",
    "Recovery of unpaid invoices",
    "Recovery of vendor payments",
    "Recovery of freelancer payments",
    "Freelancer payment recovery guide",
    "Recovery of consultancy fees",
    "Recovery of unpaid commissions",
    "Recovery of retained salary",
    "Recovery of delayed wages",
    "Recovery of notice period salary",
    "Recovery of pending overtime payment",
    "Recovery of contractor payment",
    "Recovery of pending project payment",
    "Recovery of international client payment",
    "Recovery of export dues",
    "Recovery of MSME dues",
    "Recovery under MSME Samadhan",
    "Recovery of delayed payment interest under MSME",
    "Recovery of loan amount given to friend",
    "Recovery of money lent without agreement",
    "Recovery of friendly loan amount",
    "Recovery of hand loan amount",
    "Recovery of cheque bounce amount",
    "Recovery under NI Act",
    "Recovery of post-dated cheque amount",
    "Recovery of fraud transaction amount",
    "Recovery of cyber fraud money",
    "Recovery of online scam payment",
    "Recovery of UPI fraud amount",
    "Recovery of bank transfer fraud amount",
    "Recovery of debit card fraud amount",
    "Recovery of credit card fraud amount",
    "Recovery of unauthorized bank deduction",
    "Recovery of insurance claim amount",
    "Recovery of mediclaim reimbursement",
    "Recovery of accidental insurance claim",
    "Recovery of health insurance rejection claim",
    "Recovery of flight cancellation refund",
    "Recovery of flight compensation claim",
    "Recovery of delayed flight compensation",
    "Recovery of airline refund amount",
    "Recovery of travel booking refund",
    "Recovery of hotel booking refund",
    "Recovery of tour package refund",
    "Recovery of gym membership refund",
    "Recovery of coaching institute fees",
    "Recovery of school fee refund",
    "Recovery of college fee refund",
    "Recovery of event cancellation refund",
    "Recovery of defective product refund",
    "Recovery of e-commerce refund",
    "Recovery of Amazon seller payment",
    "Recovery of Flipkart seller dues",
    "Recovery of marketplace seller payment",
    "Recovery of brokerage amount",
    "Recovery of unpaid rent",
    "Recovery of maintenance dues",
    "Recovery of society dues",
    "Recovery of property damages amount",
    "Recovery of commercial lease dues",
    "Recovery of tenant arrears",
    "Recovery of construction payment",
    "Recovery of architect fees",
    "Recovery of interior designer payment",
    "Recovery of digital marketing dues",
    "Recovery of software development payment",
    "Recovery of website development dues",
    "Recovery of startup investment amount",
    "Recovery of partnership dues",
    "Recovery of dissolved partnership amount",
    "Recovery of shareholder dues",
    "Recovery of import-export payment",
    "Recovery of transport freight charges",
    "Recovery of logistics payment",
    "Recovery of unpaid legal fees",
    "Recovery of advocate fees",
    "Recovery through legal notice",
    "Recovery through arbitration",
    "Recovery through summary suit",
    "Recovery through civil suit",
    "Recovery under consumer protection law",
    "Recovery from absconding debtor",
    "Recovery of matrimonial settlement amount",
    "Recovery of alimony dues",
    "Recovery of compensation amount",
    "Recovery of damages for breach of contract"
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FB] relative py-24 px-4 sm:px-6 lg:px-16 text-[#111827] font-sans antialiased overflow-hidden">
      
      {/* Background radial glow spots */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] red-radial-glow -z-10 pointer-events-none rounded-full blur-[120px] opacity-25" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] red-radial-glow -z-10 pointer-events-none rounded-full blur-[100px] opacity-15" />

      <div className="max-w-7xl mx-auto flex flex-col gap-10">

        {/* Header Title */}
        <div className="text-center md:text-left select-text">
          <h1 className="text-2xl sm:text-3xl font-black text-[#111827] tracking-tight">
            Money Recovery Directory
          </h1>
          <p className="text-xs text-slate-500 font-semibold mt-1.5">
            Select a recovery claim category below to initiate your online legalnotice campaign.
          </p>
        </div>

        {/* Directory Introduction */}
        <div className="bg-white border border-slate-200/60 rounded-3xl p-6 sm:p-8 shadow-sm">
          <p className="text-[13px] sm:text-[14px] text-slate-600 leading-[1.75]">
            Welcome to the LegalRecovery Money Claims Directory. Recovering outstanding dues, unpaid business invoices, or pending wages under Indian law often begins with dispatching a formal legal notice. A legal notice acts as a structured final warning to the debtor, establishing a clear timeline (typically 15 days) to resolve the dispute before initiating a court suit. Below, you will find 100+ specialized money recovery claim categories covering workplace disputes, consumer refunds, friendly loans, landlord-tenant arguments, B2B defaults, and digital fraud. Select a category below to instantly structure, validate, and launch a digital legal notice campaign tailored to your exact scenario.
          </p>
        </div>

        {/* 100-Query Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 select-none">
          {queries.map((query, index) => {
            const href = queryLinks[query] || `/contact?query=${encodeURIComponent(query)}`;
            return (
              <Link
                key={index}
                href={href}
                className="group block bg-white hover:bg-slate-50/50 border border-slate-200/60 hover:border-red-500/35 rounded-2xl p-5 shadow-sm hover:shadow-[0_8px_30px_rgba(220,38,38,0.04)] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer relative overflow-hidden"
              >
              {/* Subtle hover background highlight */}
              <div className="absolute top-0 left-0 w-1 h-full bg-[#DC2626] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="flex flex-col gap-2">
                <span className="text-[10px] text-slate-400 font-extrabold tracking-wider uppercase select-none">
                  #{String(index + 1).padStart(3, '0')}
                </span>
                <span className="text-[12.5px] font-extrabold text-slate-800 group-hover:text-red-650 transition-colors leading-snug tracking-tight">
                  {query}
                </span>
              </div>
            </Link>
            );
          })}
        </div>

        {/* Legal Frameworks Section */}
        <div className="mt-8 border-t border-slate-200/60 pt-16">
          <div className="text-center md:text-left mb-10">
            <h2 className="text-xl sm:text-2xl font-black text-[#111827] tracking-tight">
              Key Legal Frameworks for Money Recovery in India
            </h2>
            <p className="text-xs text-[#DC2626] font-extrabold tracking-wider uppercase mt-1">
              Statutory Mechanisms
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Order 37 CPC */}
            <div className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-sm hover:shadow-[0_8px_30px_rgba(220,38,38,0.04)] transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center mb-4 border border-red-100">
                <svg className="w-5 h-5 text-[#DC2626]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-[14px] font-extrabold text-slate-800 mb-2">Summary Suits (Order 37, CPC)</h3>
              <p className="text-[12px] text-slate-500 leading-relaxed">
                A fast-track legal recourse available under the Civil Procedure Code for quick debt recovery. It applies to written contracts, bills of exchange, and promissory notes. Unlike ordinary suits, the defendant must obtain the court's leave to defend, preventing baseless delays.
              </p>
            </div>

            {/* Card 2: Section 138 NI Act */}
            <div className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-sm hover:shadow-[0_8px_30px_rgba(220,38,38,0.04)] transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center mb-4 border border-red-100">
                <svg className="w-5 h-5 text-[#DC2626]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-[14px] font-extrabold text-slate-800 mb-2">Cheque Bounce (Sec 138, NI Act)</h3>
              <p className="text-[12px] text-slate-500 leading-relaxed">
                Bouncing a cheque due to insufficient funds is a criminal offense in India. A legal notice must be sent to the drawer within 30 days of receiving the memo. If payment is not made within 15 days of receiving the notice, criminal proceedings can be initiated.
              </p>
            </div>

            {/* Card 3: MSME Samadhan */}
            <div className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-sm hover:shadow-[0_8px_30px_rgba(220,38,38,0.04)] transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center mb-4 border border-red-100">
                <svg className="w-5 h-5 text-[#DC2626]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-[14px] font-extrabold text-slate-800 mb-2">MSME Samadhan Portal</h3>
              <p className="text-[12px] text-slate-500 leading-relaxed">
                Protects registered micro and small enterprises from delayed payments by buyers. Under the MSMED Act, buyers must pay within 45 days. Delayed payments attract compound interest at three times the bank rate, and cases can be referred to the MSME Council.
              </p>
            </div>

            {/* Card 4: Insolvency / IBC */}
            <div className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-sm hover:shadow-[0_8px_30px_rgba(220,38,38,0.04)] transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center mb-4 border border-red-100">
                <svg className="w-5 h-5 text-[#DC2626]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-[14px] font-extrabold text-slate-800 mb-2">Corporate Recovery (IBC)</h3>
              <p className="text-[12px] text-slate-500 leading-relaxed">
                For operational debts exceeding ₹1 Crore owed by a corporate debtor, creditors can trigger the Insolvency and Bankruptcy Code (IBC). Serving a Section 8 demand notice is the prerequisite, which often prompts immediate settlement to avoid corporate insolvency.
              </p>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mt-8 bg-white border border-slate-200/60 rounded-3xl p-8 sm:p-10 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] red-radial-glow -z-10 pointer-events-none rounded-full blur-[100px] opacity-10" />
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xl sm:text-2xl font-black text-[#111827] tracking-tight">
              How to Initiate Your Money Recovery Notice Campaign
            </h2>
            <p className="text-xs text-[#DC2626] font-extrabold tracking-wider uppercase mt-1">
              Frictionless Steps
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center px-2">
              <div className="w-12 h-12 rounded-full bg-red-50 text-[#DC2626] border border-red-100 flex items-center justify-center text-base font-black mb-4 shadow-sm">
                1
              </div>
              <h4 className="text-[13.5px] font-extrabold text-[#111827] mb-1.5">Select a Category</h4>
              <p className="text-[11.5px] text-slate-500 leading-relaxed">
                Choose from our directory of 100+ recovery query categories that matches your specific scenario (e.g., unpaid salary, cheque bounce, or invoice default).
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center px-2">
              <div className="w-12 h-12 rounded-full bg-red-50 text-[#DC2626] border border-red-100 flex items-center justify-center text-base font-black mb-4 shadow-sm">
                2
              </div>
              <h4 className="text-[13.5px] font-extrabold text-[#111827] mb-1.5">Draft the Notice</h4>
              <p className="text-[11.5px] text-slate-500 leading-relaxed">
                Provide the details of your claim, transaction dates, outstanding amount, and debtor information. Our platform structures the legal draft automatically.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center px-2">
              <div className="w-12 h-12 rounded-full bg-red-50 text-[#DC2626] border border-red-100 flex items-center justify-center text-base font-black mb-4 shadow-sm">
                3
              </div>
              <h4 className="text-[13.5px] font-extrabold text-[#111827] mb-1.5">Dispatch & Track</h4>
              <p className="text-[11.5px] text-slate-500 leading-relaxed">
                The notice is printed on official lawyer letterhead and sent via Speed Post or Registered Post. Digital tracking updates are shared with you in real-time.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center px-2">
              <div className="w-12 h-12 rounded-full bg-red-50 text-[#DC2626] border border-red-100 flex items-center justify-center text-base font-black mb-4 shadow-sm">
                4
              </div>
              <h4 className="text-[13.5px] font-extrabold text-[#111827] mb-1.5">Debtor Response</h4>
              <p className="text-[11.5px] text-slate-500 leading-relaxed">
                The debtor is given 15 days to settle the dues. Most cases resolve at this stage; if not, you have established a strong evidentiary basis to pursue further legal recourse.
              </p>
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        <FAQSection faqs={recoveryFaqs} heading="Money Recovery Claims — FAQs" subheading="Common legal questions regarding money recovery notices, suits, and frameworks in India." />

      </div>

    </div>
  );
}
