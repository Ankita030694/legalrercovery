'use client';

import React from 'react';
import Link from 'next/link';

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
};

export default function RecoveryClient() {
  const queries = [
    "Recovery of unpaid salary",
    "Recovery of pending salary from employer",
    "Recovery of FNF settlement",
    "Recovery of outstanding dues from employer",
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

      </div>

    </div>
  );
}
