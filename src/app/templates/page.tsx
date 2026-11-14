import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_URL } from "@/lib/site";

export const revalidate = 86400;

const PAGE_URL = `${SITE_URL}/templates`;
const TITLE = "Free Legal Letter & Notice Templates (India)";
const DESCRIPTION =
  "Free, ready-to-use letter, email and notice formats for salary, PF, deposits, loans, cheque bounce, MSME dues and bank refunds, with Word/PDF download.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: [`${SITE_URL}/blog_money_recovery.png`],
  },
  robots: { index: true, follow: true },
};

type Template = { slug: string; title: string; desc: string };

const GROUPS: { heading: string; items: Template[] }[] = [
  {
    heading: "Salary and employment",
    items: [
      { slug: "salary-delay-complaint-letter-to-hr", title: "Salary Delay Complaint Letter to HR", desc: "Complaint letter and email to HR or management for delayed salary, with legal references and a deadline." },
      { slug: "fnf-not-received-mail-to-hr", title: "FnF Not Received: Mail to HR", desc: "A firm email to HR for delayed full and final settlement, with a 7-day deadline and the Code on Wages reference." },
      { slug: "bonus-incentive-not-received-mail", title: "Bonus or Incentive Not Received: Mail to HR", desc: "Email templates for unpaid bonus, incentive or commission, including after resignation." },
      { slug: "pf-not-deposited-complaint-letter", title: "PF Not Deposited: Complaint Letter", desc: "Complaint letters to your employer and EPFO when PF is deducted but not deposited." },
      { slug: "relieving-experience-letter-request-email", title: "Relieving / Experience Letter Request Email", desc: "Polite, firm and final-reminder emails to request a relieving or experience letter." },
    ],
  },
  {
    heading: "Loans and cheques",
    items: [
      { slug: "promissory-note-format-india", title: "Promissory Note Format (India)", desc: "A valid promissory note for personal loans, with stamping guidance for a fast summary suit." },
      { slug: "cheque-bounce-notice-format-hindi", title: "Cheque Bounce Notice Format in Hindi (Section 138)", desc: "चेक बाउंस का कानूनी नोटिस हिंदी में: पूरा फॉर्मेट और समय सीमा।" },
    ],
  },
  {
    heading: "Property, rent and housing society",
    items: [
      { slug: "security-deposit-refund-letter-to-landlord", title: "Security Deposit Refund Letter to Landlord", desc: "A deposit-refund request with a deadline and a challenge to unfair deductions." },
      { slug: "flat-booking-cancellation-letter", title: "Flat Booking Cancellation Letter", desc: "Letters to cancel a flat or plot booking, request a refund and limit forfeiture." },
      { slug: "society-maintenance-recovery-notice", title: "Society Maintenance Recovery Notice", desc: "A notice societies can send to members for maintenance arrears, with interest." },
    ],
  },
  {
    heading: "Business and banking",
    items: [
      { slug: "bank-loan-recall-cum-guarantee-invocation-notice", title: "Bank Loan Recall cum Guarantee Invocation Notice", desc: "Advocate-vetted bank loan recall and Section 128 personal/corporate guarantee invocation draft with an RBI-compliant uncapitalized penal charges schedule." },
      { slug: "msme-delayed-payment-demand-notice", title: "MSME Delayed Payment Demand Notice", desc: "A demand notice for Udyam-registered suppliers citing Sections 15–16 and 43B(h), with an interest schedule." },
      { slug: "wrong-account-transfer-refund-application", title: "Wrong Account Transfer Refund Application", desc: "Application formats in English and Hindi to reverse money sent to a wrong account or UPI ID." },
    ],
  },
];

const ALL = GROUPS.flatMap((g) => g.items);

const ITEMLIST_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: TITLE,
  itemListElement: ALL.map((t, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: t.title,
    url: `${SITE_URL}/templates/${t.slug}`,
  })),
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Templates", item: PAGE_URL },
  ],
};

export default function TemplatesHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ITEMLIST_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <div className="w-full min-h-screen bg-slate-50 text-slate-900">
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800">
          <div className="max-w-5xl mx-auto w-full">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight leading-tight mb-4 sm:mb-6">
              Free Legal Letter and Notice Templates
            </h1>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl">
              {ALL.length} ready-to-use formats for the most common money disputes in India. Fill in your details, download as Word or PDF, and send. If the other side still doesn&apos;t pay, escalate with an{" "}
              <Link href="/online-legal-notice" className="text-red-400 underline font-semibold">advocate-drafted legal notice</Link>.
            </p>
          </div>
        </section>

        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16 space-y-10 sm:space-y-12">
          <Breadcrumbs items={[{ label: "Templates", href: "/templates" }]} />

          {GROUPS.map((g) => (
            <section key={g.heading} className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">{g.heading}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {g.items.map((t) => (
                  <Link
                    key={t.slug}
                    href={`/templates/${t.slug}`}
                    className="block bg-white rounded-xl border border-slate-200 p-4 sm:p-5 hover:border-[#DC2626] hover:shadow-md transition-all"
                  >
                    <h3 className="font-bold text-slate-900 mb-1.5">{t.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{t.desc}</p>
                  </Link>
                ))}
              </div>
            </section>
          ))}

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">Legal notice formats and samples</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-slate-700">
              <li><Link href="/legal-notice-format-india" className="text-red-600 underline">Legal notice format (India)</Link></li>
              <li><Link href="/legal-notice-for-recovery-of-money-sample" className="text-red-600 underline">Sample legal notice for recovery of money</Link></li>
              <li><Link href="/how-to-draft-a-legal-notice-for-recovery-of-money" className="text-red-600 underline">How to draft a legal notice for recovery of money</Link></li>
              <li><Link href="/legal-notice-charges" className="text-red-600 underline">Legal notice charges</Link></li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
