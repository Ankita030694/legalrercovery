import Link from "next/link";
import SectionHub, { hubMetadata, type HubGroup } from "@/components/SectionHub";

export const revalidate = 86400;

const TITLE = "Indian Money Recovery Laws Explained: Acts, Rules and Rulings";
const DESCRIPTION =
  "Plain-English guides to the laws behind money recovery in India: Code on Wages, RBI rules, consumer and e-commerce rules, cheque bounce, MSME and IBC.";

export const metadata = hubMetadata({ path: "/law", title: TITLE, description: DESCRIPTION });

const GROUPS: HubGroup[] = [
  {
    heading: "Salary and employment",
    items: [
      { slug: "code-on-wages-salary-payment-deadline", title: "Salary Payment Deadline Under the Code on Wages", desc: "The monthly salary deadline, what counts as delay, and the remedies for late salary." },
      { slug: "code-on-wages-fnf-two-working-days", title: "Full and Final Settlement in 2 Working Days: Section 17(2)", desc: "What the two-working-day rule for exit dues covers, what it does not, and how employees enforce it." },
      { slug: "epf-scheme-2026-claim-rejection-remedies", title: "EPF Claim Rejected or Delayed (EPF Scheme 2026)", desc: "Why EPF claims get rejected, settlement timelines, and how to escalate through EPFiGMS, CPGRAMS and notices." },
    ],
  },
  {
    heading: "Banking and payments",
    items: [
      { slug: "rbi-zero-liability-unauthorised-transaction", title: "RBI Zero and Limited Liability Rules", desc: "Report an unauthorised transaction within 3 working days for zero liability. Covers shadow-reversal timelines and how to claim." },
      { slug: "rbi-failed-transaction-tat-compensation", title: "RBI Deadlines for Failed Transactions", desc: "Turnaround times for failed UPI, card, ATM and IMPS transactions, and the ₹100-per-day compensation for delay." },
      { slug: "rbi-fraudulent-transaction-framework-2027", title: "RBI Framework for Fraudulent Transactions (2027)", desc: "The revised framework shifts the burden of proof to banks and adds compensation, from 1 January 2027." },
      { slug: "rbi-ombudsman-complaint-guide", title: "RBI Ombudsman Complaint Guide", desc: "Eligibility, the 30-day rule, the filing process and possible outcomes under the Integrated Scheme." },
      { slug: "section-25-payment-and-settlement-systems-act-nach-bounce", title: "Section 25, PSS Act: e-NACH and AutoPay Bounce", desc: "Timelines, NPCI return codes and jurisdiction for lenders acting on a dishonoured e-NACH, ECS or UPI AutoPay mandate." },
    ],
  },
  {
    heading: "Consumer, travel and education refunds",
    items: [
      { slug: "ecommerce-rules-grievance-officer-48-hours", title: "E-Commerce Rules: 48-Hour Grievance Duty", desc: "Platforms must acknowledge complaints in 48 hours and resolve them in a month. Includes what the 2026 amendment adds." },
      { slug: "dark-patterns-guidelines-consumer-rights", title: "Dark Patterns Guidelines", desc: "Which of the 13 banned dark patterns apply to you, and how to claim a refund." },
      { slug: "dgca-air-ticket-refund-rules-2026", title: "DGCA Air Ticket Refund Rules 2026", desc: "Free changes within 48 hours, refund deadlines by payment mode, and why airlines answer for travel agents." },
      { slug: "coaching-centre-refund-guidelines-2024", title: "Coaching Centre Refund Guidelines 2024", desc: "The pro-rata refund within 10 days for students who leave a course midway: who is covered and how to claim." },
      { slug: "ugc-fee-refund-policy", title: "UGC Fee Refund Policy", desc: "Refund rules for admission withdrawal, the deductions allowed, deadlines, and what to do if a college refuses." },
      { slug: "insurance-ombudsman-bima-bharosa-guide", title: "Insurance Ombudsman and Bima Bharosa", desc: "When to use each, claim limits, timelines, the 7-day response rule and how to file." },
      { slug: "model-tenancy-act-security-deposit-rules", title: "Model Tenancy Act: Security Deposit Rules", desc: "The two-month cap on residential deposits, which states adopted it, and what applies elsewhere." },
    ],
  },
  {
    heading: "Cheque bounce and civil recovery",
    items: [
      { slug: "cheque-bounce-supreme-court-guidelines-2025", title: "Cheque Bounce: Supreme Court Guidelines 2025", desc: "How the Sanjabij Tari ruling changed summons, settlement and compounding in cheque bounce cases." },
      { slug: "order-37-summary-suit-money-recovery", title: "Order 37 Summary Suit", desc: "How a summary suit works, which documents qualify, court fees, timelines and when to choose it over a regular suit." },
      { slug: "lok-adalat-pre-litigation-money-recovery", title: "Pre-Litigation Lok Adalat for Money Disputes", desc: "Free filing and a binding award: which cases qualify and how to apply." },
      { slug: "bns-318-cheating-vs-civil-dispute", title: "BNS 318 Cheating vs a Civil Dispute", desc: "Section 318 (old IPC 420) needs dishonest intent from the start. When a police complaint works for money not returned." },
      { slug: "section-80-cpc-notice-to-government", title: "Section 80 CPC Notice to the Government", desc: "The mandatory notice before suing a government department or PSU: contents, the 2-month wait and exceptions." },
    ],
  },
  {
    heading: "Business recovery",
    items: [
      { slug: "msmed-amendment-act-2026", title: "MSMED Amendment Act 2026", desc: "The 45-day rule stays, and mediation, arbitration and enforcement are tightened. What suppliers should do now." },
      { slug: "section-43bh-msme-payment-rule", title: "Section 43B(h): The MSME Payment Rule", desc: "Buyers lose the tax deduction if dues to micro and small enterprises stay unpaid past 45 days. How suppliers use it as leverage." },
      { slug: "ibc-section-8-demand-notice-form-3-form-4-operational-creditor", title: "IBC Section 8 Demand Notice (Form 3 and Form 4)", desc: "The operational creditor's demand notice: the ₹1 crore threshold, interest, and the pre-existing dispute test from Mobilox." },
      { slug: "sarfaesi-section-13-2-demand-notice-bank-guide", title: "SARFAESI Section 13(2) Demand Notice", desc: "A bank's checklist for the itemised breakup, NPA date, service under Rule 3 and replies under Section 13(3A) within 15 days." },
      { slug: "section-12a-commercial-courts-act-pre-institution-mediation-guide", title: "Section 12A Pre-Institution Mediation", desc: "Mandatory mediation before a commercial suit of ₹3 lakh or more: Form-1 filing, the fee and non-starter reports." },
      { slug: "mediation-act-2023-online-commercial-settlement-enforcement-india", title: "Mediation Act 2023: Enforceable Settlements", desc: "Recording a payment plan as a mediated settlement agreement that can be executed like a decree." },
      { slug: "bsa-section-63-electronic-evidence-certificate-tally-erp-whatsapp-b2b", title: "BSA Section 63: Electronic Evidence Certificate", desc: "How creditors certify Tally or SAP ledgers, e-way bills, emails and WhatsApp chats under the Bharatiya Sakshya Adhiniyam, 2023." },
    ],
  },
];

export default function LawHubPage() {
  return (
    <SectionHub
      path="/law"
      crumb="Law"
      schemaName={TITLE}
      heading="Money Recovery Law, Explained"
      intro={(count) => (
        <>
          {count} plain-English guides to the Acts, rules and court rulings that decide whether and when you get paid. Each one says what the law requires, the deadlines it sets and how to use it. To act on one, you can{" "}
          <Link href="/send-legal-notice-online-india" className="text-red-400 underline font-semibold">send a legal notice online</Link>.
        </>
      )}
      groups={GROUPS}
      moreHeading="More law guides"
      relatedHeading="Put the law to work"
      related={[
        { href: "/tools", label: "Free calculators for deadlines, interest and fees" },
        { href: "/templates", label: "Free letter and notice templates" },
        { href: "/legal-notice-to", label: "Refund guides for specific companies" },
        { href: "/recovery", label: "Recovery directory by type of claim" },
      ]}
    />
  );
}
