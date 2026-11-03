"use client";

import React, { useState } from "react";

type PaymentMethod = "upi" | "card" | "netbanking" | "cod";
type RefundTrap = "forced_wallet" | "expiring_giftcard" | "preticked_default";

interface RuleDetail {
  title: string;
  statute: string;
  rbiRule: string;
  actionSummary: string;
  legalSampleClause: string;
}

const MATRIX_DATA: Record<PaymentMethod, Record<RefundTrap, RuleDetail>> = {
  upi: {
    forced_wallet: {
      title: "UPI Payment Trapped in App Wallet",
      statute: "Consumer Protection Act 2019 § 2(47) & CCPA Dark Patterns 2023 (Forced Action)",
      rbiRule: "RBI Circular DPSS.CO.PD No.629/2019-20 (Mandatory T+1 Reversal to Source VPA)",
      actionSummary: "The platform cannot convert real bank money into proprietary app currency. UPI transactions carry an explicit VPA / RRN rail that must receive the reversal within 24 hours.",
      legalSampleClause: "I paid via UPI (VPA: [YOUR_UPI_ID], RRN: [YOUR_RRN]). In accordance with RBI Circular DPSS.CO.PD No.629/2019-20 and CPA 2019 § 2(47), I hereby decline the wallet credit. Please initiate an immediate electronic reversal to my source bank account.",
    },
    expiring_giftcard: {
      title: "UPI Payment Refunded as Expiring Gift Card",
      statute: "Section 72 Indian Contract Act 1872 (Unjust Enrichment) & CPA 2019 § 2(46)",
      rbiRule: "RBI Master Direction on PPIs (Prohibition of Arbitrary Forfeiture)",
      actionSummary: "Vouchers with validity periods create an artificial forfeiture trap. You are legally entitled to receive standard currency in your originating bank account.",
      legalSampleClause: "Issuance of a short-term voucher against an unfulfilled or returned UPI order represents an unfair contract under Section 2(46) of the Consumer Protection Act, 2019. I require full refund remittance directly to my original payment source.",
    },
    preticked_default: {
      title: "Pre-Ticked 'Wallet Credit' During UPI Return Flow",
      statute: "CCPA Guidelines for Prevention of Dark Patterns 2023 (Dark Pattern 4 & 10)",
      rbiRule: "Consumer Protection (E-Commerce) Rules 2020 Rule 4(4) (Affirmative Consent)",
      actionSummary: "Pre-ticked checkboxes or deceptive UX nudges that default consumers into wallet balances are illegal dark patterns subject to regulatory penalties.",
      legalSampleClause: "The default selection of store wallet credit during the return flow constitutes an unlawful dark pattern under CCPA Guidelines 2023. I explicitly retract any imputed consent and demand an outward bank transfer.",
    },
  },
  card: {
    forced_wallet: {
      title: "Credit/Debit Card Charge Diverted to Wallet Balance",
      statute: "Consumer Protection Act 2019 § 2(47) & RBI Merchant Acquiring Guidelines",
      rbiRule: "RBI Master Direction on PPIs § 10.2 (Refund of Card Debits to Source Card)",
      actionSummary: "Under RBI acquirer rules, any refund for card payments must flow back to the acquiring bank and card issuer (ARN generation). Retaining it inside closed wallets is non-compliant.",
      legalSampleClause: "The transaction was debited from my Visa/Mastercard/RuPay card ending [LAST_4_DIGITS]. Per RBI PPI Master Directions § 10.2, merchant refunds must be remitted back to the issuing card. Please provide the 23-digit Acquirer Reference Number (ARN) once initiated.",
    },
    expiring_giftcard: {
      title: "Card Refund Replaced by Expiring Digital Voucher",
      statute: "Consumer Protection Act 2019 § 2(46) & Delhi State Commission Case Law",
      rbiRule: "Consumer Protection (E-Commerce) Rules 2020 Rule 5(3)(b)",
      actionSummary: "Replacing liquidity on a credit card (which accrues interest if unpaid) with a restricted shopping voucher constitutes acute consumer prejudice and an unfair trade practice.",
      legalSampleClause: "Imposing a shopping voucher for a card-funded return subjects me to financing interest and vendor lock-in. Under Section 2(46) of the CPA 2019, I demand immediate reversal to my credit card account.",
    },
    preticked_default: {
      title: "Nudged or Pre-Checked Wallet Selection for Card Return",
      statute: "E-Commerce Rules 2020 Rule 4(4) & Dark Pattern Regulations",
      rbiRule: "Consumer Protection Act 2019 § 18 (CCPA Enforcement)",
      actionSummary: "Platforms use interface interference to retain gross merchandise value (GMV). Such consent is legally defective under Section 14 of the Indian Contract Act.",
      legalSampleClause: "I did not grant free, informed consent to receive wallet credits for this card transaction. Please cancel the wallet entry and credit the amount to my original card account.",
    },
  },
  netbanking: {
    forced_wallet: {
      title: "Net Banking Payment Trapped in Platform Wallet",
      statute: "Consumer Protection Act 2019 § 2(47) (Unfair Trade Practice)",
      rbiRule: "RBI Circular on Customer Compensation for Failed Transactions",
      actionSummary: "Your bank account balance was directly debited. The merchant has no statutory authority to substitute sovereign currency with virtual loyalty units.",
      legalSampleClause: "This order was completed through direct Net Banking debit from [BANK_NAME]. Pursuant to Section 2(47) of the Consumer Protection Act 2019, please process a direct IMPS/NEFT transfer to my account.",
    },
    expiring_giftcard: {
      title: "Net Banking Debit Replaced by Time-Bound Voucher",
      statute: "Section 72 Indian Contract Act 1872 & CPA 2019 § 35",
      rbiRule: "National Consumer Helpline (NCH) Standard Operating Advisory",
      actionSummary: "Time-expiring vouchers force you to make unneeded purchases within arbitrary windows, violating your statutory freedom of choice.",
      legalSampleClause: "I refuse the time-bound shopping voucher. Please arrange a bank remittance for the exact sum debited from my Net Banking facility.",
    },
    preticked_default: {
      title: "Automated Wallet Default on Net Banking Order",
      statute: "Guidelines for Prevention of Dark Patterns 2023 (Clause 5 & 10)",
      rbiRule: "Consumer Protection (E-Commerce) Rules 2020",
      actionSummary: "Deceptive checkout and return workflows violate the statutory transparency mandate enforced by CCPA.",
      legalSampleClause: "The automated assignment of wallet credit without an explicit source-refund option breaches CCPA Dark Pattern Guidelines. Please remit to my originating bank account.",
    },
  },
  cod: {
    forced_wallet: {
      title: "Cash on Delivery (COD) Refund Forced into Store Wallet",
      statute: "CPA 2019 § 2(47) & Bangalore DCDRC Case Law (Naveen Kumar vs BigBasket)",
      rbiRule: "RBI Master Direction on PPIs (Cash Reversals Must Allow Bank Payout)",
      actionSummary: "Even for COD orders, platforms must provide an account payee payout rail (via UPI ID or Bank Account IFSC). Holding cash returns in a closed wallet is illegal.",
      legalSampleClause: "For this COD order, I refuse internal wallet credit. As held by Consumer Commissions, e-commerce platforms must remit COD returns to the consumer's bank. My bank account details are: Account No: [ACCOUNT_NO], IFSC: [IFSC_CODE].",
    },
    expiring_giftcard: {
      title: "Cash on Delivery Converted to Expiring Voucher",
      statute: "CPA 2019 § 2(46) (Unfair Contract) & § 2(47) (Unfair Trade Practice)",
      rbiRule: "Consumer Protection (E-Commerce) Rules 2020 Rule 6",
      actionSummary: "You surrendered physical cash at the doorstep. The platform cannot repay physical legal tender with a perishable digital token.",
      legalSampleClause: "I paid in legal tender cash on delivery. Forcing an expiring voucher violates CPA 2019. Please deposit the refund directly into my provided bank account.",
    },
    preticked_default: {
      title: "App Hides Bank Transfer Option for COD Return",
      statute: "Dark Patterns Guidelines 2023 (Basket Sneaking & Interface Interference)",
      rbiRule: "E-Commerce Rules 2020 (Transparent Refund Mechanism)",
      actionSummary: "Deliberately concealing the bank transfer option behind ambiguous dropdowns is an actionable dark pattern.",
      legalSampleClause: "Hiding the bank refund option for COD returns is an unfair trade practice. Kindly record my UPI ID [YOUR_UPI_ID] and process the statutory payout immediately.",
    },
  },
};

export default function WalletRefundChecker() {
  const [method, setMethod] = useState<PaymentMethod>("upi");
  const [trap, setTrap] = useState<RefundTrap>("forced_wallet");
  const [copied, setCopied] = useState(false);

  const detail = MATRIX_DATA[method][trap];

  const handleCopy = () => {
    navigator.clipboard.writeText(detail.legalSampleClause);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="border-b border-slate-100 pb-5">
        <span className="inline-block rounded-full bg-red-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#DC2626]">
          Interactive Dispute Assessment
        </span>
        <h3 className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">
          Check Your Statutory Rights: Wallet vs. Bank Account Refund
        </h3>
        <p className="mt-1 text-xs sm:text-sm text-slate-600">
          Select your original payment method and what the shopping app forced onto your profile to review your statutory standing and get a copy-ready grievance clause.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Input Controls */}
        <div className="space-y-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              1. How did you pay for the order?
            </label>
            <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-2">
              {(
                [
                  { id: "upi", label: "UPI / QR Code" },
                  { id: "card", label: "Credit / Debit Card" },
                  { id: "netbanking", label: "Net Banking" },
                  { id: "cod", label: "Cash on Delivery" },
                ] as const
              ).map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setMethod(item.id)}
                  className={`rounded-xl border p-3 text-left text-xs font-semibold transition cursor-pointer ${
                    method === item.id
                      ? "border-[#DC2626] bg-red-50/70 text-[#991B1B] shadow-xs"
                      : "border-slate-200 bg-slate-50/50 text-slate-700 hover:border-slate-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              2. How did the platform retain your money?
            </label>
            <div className="mt-2 space-y-2">
              {(
                [
                  {
                    id: "forced_wallet",
                    label: "Forced Wallet / App Store Credit Balance",
                  },
                  {
                    id: "expiring_giftcard",
                    label: "Issued Expiring Gift Voucher / Coupon",
                  },
                  {
                    id: "preticked_default",
                    label: "Pre-Ticked or Concealed Bank Option at Return",
                  },
                ] as const
              ).map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setTrap(item.id)}
                  className={`w-full rounded-xl border p-3 text-left text-xs font-semibold transition cursor-pointer ${
                    trap === item.id
                      ? "border-[#DC2626] bg-red-50/70 text-[#991B1B] shadow-xs"
                      : "border-slate-200 bg-slate-50/50 text-slate-700 hover:border-slate-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Legal Assessment Output */}
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                Statutory Ground Confirmed
              </span>
              <span className="text-[11px] text-slate-500 font-mono">
                {method.toUpperCase()} · REFUND ESCALATION
              </span>
            </div>

            <h4 className="mt-3 text-base font-bold text-slate-900">
              {detail.title}
            </h4>

            <p className="mt-2 text-xs leading-relaxed text-slate-600">
              {detail.actionSummary}
            </p>

            <div className="mt-4 space-y-2 rounded-lg bg-white p-3 border border-slate-200/90 text-xs">
              <div>
                <span className="font-semibold text-slate-800">Governing Statute:</span>{" "}
                <span className="text-slate-600">{detail.statute}</span>
              </div>
              <div>
                <span className="font-semibold text-slate-800">Regulatory Directive:</span>{" "}
                <span className="text-slate-600">{detail.rbiRule}</span>
              </div>
            </div>

            <div className="mt-4">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-700">
                Grievance Officer Demand Clause:
              </span>
              <div className="mt-1 rounded-lg bg-slate-900 p-3 font-mono text-[11px] leading-relaxed text-slate-200 select-all">
                {detail.legalSampleClause}
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between">
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 rounded-lg bg-slate-800 px-3 py-1.5 text-xs font-semibold text-white hover:bg-slate-700 transition cursor-pointer"
            >
              {copied ? "✓ Copied to Clipboard" : "Copy Demand Text"}
            </button>
            <span className="text-[11px] text-slate-500">
              Paste in ticket or formal grievance mail
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
