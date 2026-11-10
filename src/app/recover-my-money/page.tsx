import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertCircle,
  Bell,
  CheckCircle2,
  ChevronDown,
  Copy,
  FileText,
  Handshake,
  IndianRupee,
  LayoutDashboard,
  Lock,
  Mail,
  MessageCircle,
  Scale,
  Send,
  type LucideIcon,
} from "lucide-react";
import { RecoveryForm } from "@/components/RecoveryForm";
import { RECOVERY_TYPES } from "@/lib/recoveryTypes";
import StickyStartButton from "./StickyStartButton";

// Paid-ad landing page. Kept out of search so it can't compete with the homepage and SEO pages.
export const metadata: Metadata = {
  title: "Send a Legal Notice for ₹999 | Legal Recovery",
  description:
    "Legal notices on advocate letterhead, sent by WhatsApp and email. Flat ₹999 per opposing party with no commission on what you recover.",
  robots: { index: false, follow: false },
};

const FORM_ID = "start-recovery";

const REASSURANCES = [
  "Flat ₹999 per opposing party",
  "0% commission on what you recover",
  "No court visits to get started",
];

interface InfoCard {
  icon: LucideIcon;
  title: string;
  detail: string;
}

const WHAT_YOU_GET: InfoCard[] = [
  {
    icon: FileText,
    title: "3 legal notices",
    detail: "Sent week by week on advocate letterhead, each one firmer than the last.",
  },
  {
    icon: Scale,
    title: "1 police complaint",
    detail: "Emailed to the police on Day 22 if the dues are still unpaid, unless you switch it off.",
  },
  {
    icon: Mail,
    title: "Sent by email and WhatsApp",
    detail: "Speed Post is optional and charged separately.",
  },
  {
    icon: IndianRupee,
    title: "No commission",
    detail: "You keep everything you recover.",
  },
];

const STEPS = [
  { title: "Fill in this form", detail: "Confirm your mobile and email with a one-time code." },
  { title: "Pay ₹999 securely", detail: "Then add who owes you, their contact details and how much." },
  { title: "Check the details and start", detail: "Your first notice goes out once you confirm everything is correct." },
];

const NOTICE_TIMELINE = [
  { day: "Day 1", title: "First legal notice", detail: "A formal demand to pay within 7 days." },
  { day: "Day 8", title: "Second notice", detail: "A firmer warning citing the civil and criminal laws that apply." },
  { day: "Day 15", title: "Final notice", detail: "The last warning, giving 48 hours to pay." },
  {
    day: "Day 22",
    title: "Police complaint",
    detail:
      "Emailed to the police and the other party, with a copy to you, if the dues are still unpaid. You can switch this off on your dashboard. What the police do next is up to them.",
  },
];

const DELIVERY: InfoCard[] = [
  {
    icon: Send,
    title: "To the other party",
    detail: "An email from the firm's notice address with the notice PDF, plus a WhatsApp message.",
  },
  {
    icon: Copy,
    title: "A copy to you",
    detail: "You are copied on every notice email, so you see exactly what was sent.",
  },
  {
    icon: Bell,
    title: "Confirmation each time",
    detail: "We confirm on email and WhatsApp whenever a notice goes out.",
  },
  {
    icon: LayoutDashboard,
    title: "Your dashboard",
    detail: "See the status of each notice, and pause or resume them at any time.",
  },
];

const IF_THEY_RESPOND: InfoCard[] = [
  {
    icon: Mail,
    title: "They reply by email",
    detail:
      "The reply reaches the firm's notice mailbox, is matched to your case and appears in Notifications on your dashboard. If it can't be matched with certainty, our team checks it first.",
  },
  {
    icon: MessageCircle,
    title: "They reply on WhatsApp",
    detail: "Their message appears in the same Notifications feed.",
  },
  {
    icon: AlertCircle,
    title: "An email bounces",
    detail: "You see a “could not be delivered” alert on your dashboard, so you know to check the address.",
  },
  {
    icon: Handshake,
    title: "They want to settle",
    detail: "You speak to them directly. Negotiation by an advocate is not included, but you can engage one separately.",
  },
];

const COVERED = RECOVERY_TYPES.filter((type) => type.value !== "other").map((type) => type.label);

const FAQS = [
  {
    question: "Is recovery guaranteed?",
    answer:
      "No. A legal notice is a formal demand, and delivery confirmation proves it was sent, not that the other side will pay or reply. We do not guarantee recovery, settlements or court outcomes.",
  },
  {
    question: "What exactly do I pay?",
    answer:
      "₹999 per opposing party. That covers 3 legal notices and 1 police complaint, sent by email and WhatsApp. Speed Post is optional and costs extra. There is no commission.",
  },
  {
    question: "What details do I need?",
    answer:
      "Only your name, mobile, email and state to begin. After payment you add the other party's name, mobile, email, address, the amount owed and when it was due.",
  },
  {
    question: "Will you go to court for me?",
    answer:
      "No. This service covers legal notices for straightforward civil money disputes. Court appearances and litigation are not included, but you can engage an advocate separately.",
  },
  {
    question: "Can I get a refund?",
    answer:
      "Refunds are not available once advocate review begins or after a notice is issued, so please check your details before paying. Our terms have the full policy.",
  },
];

function InfoCards({ items }: { items: InfoCard[] }) {
  return (
    <div className="grid sm:grid-cols-2 gap-3">
      {items.map(({ icon: Icon, title, detail }) => (
        <div key={title} className="bg-white rounded-xl border border-slate-200 p-4 flex gap-3">
          <div className="w-9 h-9 rounded-lg bg-red-50 text-[#DC2626] flex items-center justify-center shrink-0">
            <Icon className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-black text-[#111827]">{title}</h3>
            <p className="text-[13px] font-medium text-slate-600 mt-0.5 leading-snug">{detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function RecoverMyMoneyPage() {
  return (
    <div className="pb-24 lg:pb-0">
      <header className="bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between gap-3">
          <img src="/lrlogo.svg" alt="LegalRecovery" width={3236} height={601} className="h-7 w-auto object-contain" />
          <span className="text-[10px] font-bold text-slate-500 text-right leading-tight">
            Powered by AMA Legal Solutions
          </span>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 pt-5 lg:pt-12 lg:grid lg:grid-cols-[1fr_440px] lg:gap-12 lg:items-start">
        <div>
          <h1 className="text-[28px] sm:text-4xl lg:text-5xl font-black tracking-tight text-[#111827] leading-[1.1]">
            Money Stuck? <span className="text-[#DC2626]">Send a Legal Notice for ₹999.</span>
          </h1>
          <p className="text-sm sm:text-base font-semibold text-slate-600 mt-2.5 lg:mt-4">
            Notices on advocate letterhead, sent by WhatsApp and email.
          </p>

          <ul className="hidden lg:flex flex-col gap-3 mt-8">
            {REASSURANCES.map((text) => (
              <li key={text} className="flex items-center gap-2.5 text-sm font-bold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                {text}
              </li>
            ))}
          </ul>
        </div>

        <div
          id={FORM_ID}
          className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 mt-4 lg:mt-0 scroll-mt-4"
        >
          <RecoveryForm variant="quick" />
        </div>

        <ul className="lg:hidden flex flex-col gap-2 mt-4">
          {REASSURANCES.map((text) => (
            <li key={text} className="flex items-center gap-2 text-[13px] font-bold text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              {text}
            </li>
          ))}
        </ul>
      </div>

      <div className="max-w-3xl mx-auto px-4 mt-10 lg:mt-16 flex flex-col gap-10">
        <section>
          <h2 className="text-xl sm:text-2xl font-black text-[#111827] tracking-tight mb-4">
            What we can help you recover
          </h2>
          <ul className="flex flex-wrap gap-2">
            {COVERED.map((item) => (
              <li
                key={item}
                className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-700"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="text-[13px] font-medium text-slate-600 mt-3">
            Something else? Choose &ldquo;Other&rdquo; in the form.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-black text-[#111827] tracking-tight mb-4">What you get for ₹999</h2>
          <InfoCards items={WHAT_YOU_GET} />
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-black text-[#111827] tracking-tight mb-4">How to get started</h2>
          <ol className="flex flex-col gap-4">
            {STEPS.map(({ title, detail }, index) => (
              <li key={title} className="flex gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-sm font-black text-[#111827]">{title}</h3>
                  <p className="text-[13px] font-medium text-slate-600 mt-0.5">{detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-black text-[#111827] tracking-tight mb-1">
            When your notices go out
          </h2>
          <p className="text-[13px] font-medium text-slate-600 mb-4">
            Each step goes out automatically until you mark the case recovered. Timing can differ for loan recovery
            cases.
          </p>
          <ol className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100">
            {NOTICE_TIMELINE.map(({ day, title, detail }) => (
              <li key={day} className="p-4 flex gap-3">
                <span className="w-14 shrink-0 text-xs font-black text-[#DC2626] pt-0.5">{day}</span>
                <div>
                  <h3 className="text-sm font-black text-[#111827]">{title}</h3>
                  <p className="text-[13px] font-medium text-slate-600 mt-0.5 leading-snug">{detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-black text-[#111827] tracking-tight mb-4">
            How notices are sent and how you stay updated
          </h2>
          <InfoCards items={DELIVERY} />
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-black text-[#111827] tracking-tight mb-4">
            If the other party responds
          </h2>
          <InfoCards items={IF_THEY_RESPOND} />
        </section>

        <section className="bg-emerald-50 rounded-xl border border-emerald-200 p-4 sm:p-5">
          <h2 className="text-base font-black text-[#111827] mb-1.5">When they pay</h2>
          <p className="text-[13px] font-medium text-slate-700 leading-relaxed">
            The money comes straight to you by UPI, bank transfer or cash. We never collect it and take no commission.
            Mark the case as recovered on your dashboard and any remaining notices stop.
          </p>
        </section>

        <section className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5">
          <h2 className="text-base font-black text-[#111827] mb-1.5">Who is behind this</h2>
          <p className="text-[13px] font-medium text-slate-600 leading-relaxed">
            Legal Recovery is powered by AMA Legal Solutions, a firm of advocates and solicitors founded by Advocate
            Anuj Anand Malik. Your notices are issued on the firm&apos;s letterhead.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-black text-[#111827] tracking-tight mb-4">Common questions</h2>
          <div className="flex flex-col gap-2">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="group bg-white rounded-xl border border-slate-200 p-4">
                <summary className="flex items-center justify-between gap-3 text-sm font-black text-[#111827] cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  {question}
                  <ChevronDown className="w-4 h-4 text-slate-400 shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <p className="text-[13px] font-medium text-slate-600 mt-2 leading-relaxed">{answer}</p>
              </details>
            ))}
          </div>
        </section>
      </div>

      <footer className="max-w-3xl mx-auto px-4 py-8 mt-4 text-center">
        <p className="flex items-center justify-center gap-1.5 text-[11px] font-bold text-slate-500">
          <Lock className="w-3 h-3" /> Payments are securely processed by PayU.
        </p>
        <p className="text-[11px] font-medium text-slate-500 mt-2 leading-relaxed">
          Legal Recovery and its advocates do not guarantee money recovery, settlements or court outcomes.
        </p>
        <p className="text-[11px] font-bold mt-2 flex items-center justify-center gap-4">
          <Link href="/privacy-policy" className="text-slate-500 hover:text-[#DC2626]">
            Privacy Policy
          </Link>
          <Link href="/terms-and-conditions" className="text-slate-500 hover:text-[#DC2626]">
            Terms &amp; Conditions
          </Link>
        </p>
      </footer>

      <StickyStartButton targetId={FORM_ID} />
    </div>
  );
}
