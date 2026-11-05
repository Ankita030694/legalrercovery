import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";
import ChargesCTA from "./ChargesCTA";

export const revalidate = 86400;

const PRICE = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;
const fmt = (n: number) => `₹${n.toLocaleString("en-IN")}`;
const PAGE_URL = `${SITE_URL}/legal-notice-charges`;

const TITLE = "Legal Notice Charges in India (2026): Lawyer Fees vs Online Cost";
const DESCRIPTION = `What a legal notice costs in India: typical lawyer fees, what drives the price, and LegalRecovery's flat ${fmt(PRICE)} per party with advocate drafting and Speed Post.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
  },
  robots: { index: true, follow: true },
};

const PARTY_ROWS = [1, 2, 3, 5].map((n) => ({ parties: n, total: n * PRICE }));

const FAQS = [
  {
    question: "How much does a lawyer charge for a legal notice in India?",
    answer:
      "A local advocate or law chamber typically charges between ₹3,000 and ₹10,000 for drafting and sending a legal notice, sometimes more in metro cities or for complex commercial matters. The fee usually depends on the advocate's experience, the complexity of the dispute and whether consultation and postage are billed separately.",
  },
  {
    question: "What are LegalRecovery's legal notice charges?",
    answer: `A flat ${fmt(PRICE)} per opposite party. That covers advocate drafting and review, dispatch by Registered Speed Post, email and WhatsApp, and delivery tracking. If you send the notice to more than one party (for example a company and its director), each party is charged ${fmt(PRICE)}.`,
  },
  {
    question: "Does the fee depend on the amount I want to recover?",
    answer: `No. The ${fmt(PRICE)} fee is the same whether you are recovering ₹20,000 or ₹20 lakh. Court fees, by contrast, are usually calculated on the claim amount and vary by state, which is one reason a notice is the cheapest first step.`,
  },
  {
    question: "Are there any extra charges for Speed Post or typing?",
    answer: "No. Drafting, Speed Post dispatch and digital delivery are included in the per-party fee. You see the full amount before you pay.",
  },
  {
    question: "Is a legal notice mandatory before going to court?",
    answer:
      "It is mandatory in some cases, such as cheque bounce under Section 138 of the Negotiable Instruments Act (notice within 30 days of the return memo) and suits against the government under Section 80 CPC. For most money recovery disputes it is not compulsory, but it is strongly advisable: it creates a written record of your demand and often leads to payment without litigation.",
  },
  {
    question: "Can the cost of the legal notice be recovered from the other side?",
    answer:
      "You can include the notice cost in your demand, and if the matter goes to court, judges commonly award litigation costs to the successful party. Recovery of the notice fee itself is not guaranteed, so treat it as a cost of pursuing your claim.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  datePublished: "2026-11-05T12:00:00+05:30",
  dateModified: "2026-11-05T12:00:00+05:30",
  mainEntityOfPage: PAGE_URL,
  author: { "@type": "Person", name: "Anuj Anand Malik", url: `${SITE_URL}/authors/anuj-anand-malik` },
  publisher: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: `${SITE_URL}/#organization`,
    logo: { "@type": "ImageObject", url: `${SITE_URL}/lrlogo.png` },
  },
};

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Advocate-drafted legal notice with Speed Post dispatch",
  provider: { "@type": "Organization", name: "LegalRecovery.in", url: SITE_URL },
  areaServed: { "@type": "Country", name: "India" },
  offers: {
    "@type": "Offer",
    price: PRICE,
    priceCurrency: "INR",
    description: "Flat fee per opposite party, including advocate drafting, Speed Post and digital delivery.",
    url: PAGE_URL,
  },
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Legal Notice Charges", item: PAGE_URL },
  ],
};

export default function LegalNoticeChargesPage() {
  return (
    <>
      {[ARTICLE_SCHEMA, SERVICE_SCHEMA, FAQ_SCHEMA, BREADCRUMB_SCHEMA].map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <div className="w-full min-h-screen bg-slate-50 text-slate-900">
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800">
          <div className="max-w-5xl mx-auto w-full">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight leading-tight mb-4 sm:mb-6">
              Legal Notice Charges in India: What You Will Actually Pay
            </h1>
            <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">Quick answer</p>
              <p>
                A traditional advocate usually charges ₹3,000 to ₹10,000 to draft and send a legal notice in India. On LegalRecovery the charge is a flat {fmt(PRICE)} per opposite party, covering advocate drafting, Registered Speed Post, email and WhatsApp delivery, and tracking. The fee does not change with the amount you are recovering.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">{fmt(PRICE)}</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-1">Per opposite party, flat</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">₹3k–10k</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-1">Typical law-chamber fee</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">₹0</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-1">Extra for Speed Post or typing</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">3 modes</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-1">Speed Post, email, WhatsApp</p>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16 space-y-10 sm:space-y-14">
          <Breadcrumbs items={[{ label: "Legal Notice Charges", href: "/legal-notice-charges" }]} />

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight">Lawyer fees vs online legal notice: cost comparison</h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-900 text-white uppercase text-[11px] tracking-wider">
                  <tr>
                    <th className="p-3 sm:p-4">Cost item</th>
                    <th className="p-3 sm:p-4">Typical law chamber</th>
                    <th className="p-3 sm:p-4">LegalRecovery</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold">Drafting by an advocate</td>
                    <td className="p-3 sm:p-4 text-slate-700">₹3,000 to ₹10,000+, varies by city and seniority</td>
                    <td className="p-3 sm:p-4 text-emerald-700 font-semibold">Included in {fmt(PRICE)}</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold">Consultation</td>
                    <td className="p-3 sm:p-4 text-slate-700">Often billed separately</td>
                    <td className="p-3 sm:p-4 text-emerald-700 font-semibold">No separate charge</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold">Registered Speed Post</td>
                    <td className="p-3 sm:p-4 text-slate-700">Usually added to the bill</td>
                    <td className="p-3 sm:p-4 text-emerald-700 font-semibold">Included</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold">Email and WhatsApp service</td>
                    <td className="p-3 sm:p-4 text-slate-700">Not always offered</td>
                    <td className="p-3 sm:p-4 text-emerald-700 font-semibold">Included</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold">Delivery tracking</td>
                    <td className="p-3 sm:p-4 text-slate-700">You chase the post office</td>
                    <td className="p-3 sm:p-4 text-emerald-700 font-semibold">Dashboard updates</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold">Visits to the office</td>
                    <td className="p-3 sm:p-4 text-slate-700">Usually one or two</td>
                    <td className="p-3 sm:p-4 text-emerald-700 font-semibold">None, fully online</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight">How the price works with more than one party</h2>
            <p className="text-sm md:text-base leading-relaxed text-slate-700">
              The fee is charged per opposite party, because each one gets a separately addressed notice and its own dispatch. For example, when a company owes you money you may want to serve both the company and its director. You can add up to 10 parties to one notice.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm max-w-md">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-900 text-white uppercase text-[11px] tracking-wider">
                  <tr>
                    <th className="p-3 sm:p-4">Opposite parties</th>
                    <th className="p-3 sm:p-4">Total charge</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {PARTY_ROWS.map((r) => (
                    <tr key={r.parties}>
                      <td className="p-3 sm:p-4 font-semibold">{r.parties}</td>
                      <td className="p-3 sm:p-4 text-slate-700">{fmt(r.total)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight">What drives legal notice fees elsewhere</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base leading-relaxed text-slate-700">
              <li><strong>Advocate seniority and city.</strong> Senior counsel and metro chambers charge more.</li>
              <li><strong>Complexity.</strong> A simple salary or deposit demand costs less to draft than a commercial dispute with many documents.</li>
              <li><strong>Add-ons.</strong> Consultation, follow-up letters and replies to the other side&apos;s response are often billed separately.</li>
              <li><strong>Dispatch.</strong> Speed Post, courier and photocopies are frequently added at the end.</li>
            </ul>
            <p className="text-sm md:text-base leading-relaxed text-slate-700">
              Compare that with going straight to court, where court fees are usually a percentage of the claim and vary by state, on top of advocate fees for every hearing. See{" "}
              <Link href="/civil-suit-for-recovery-of-money-india" className="text-red-600 underline font-semibold">civil suit for recovery of money</Link>{" "}
              and{" "}
              <Link href="/how-to-recover-money-without-going-to-court-india" className="text-red-600 underline font-semibold">recovering money without going to court</Link>.
            </p>
          </section>

          <ChargesCTA />

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight">Before you pay: useful guides</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-slate-700">
              <li><Link href="/what-is-a-legal-notice-in-india" className="text-red-600 underline">What is a legal notice in India</Link></li>
              <li><Link href="/legal-notice-format-india" className="text-red-600 underline">Legal notice format</Link> and <Link href="/legal-notice-for-recovery-of-money-sample" className="text-red-600 underline">money recovery sample</Link></li>
              <li><Link href="/templates" className="text-red-600 underline">Free letter and notice templates</Link></li>
              <li><Link href="/what-to-do-if-legal-notice-is-ignored-india" className="text-red-600 underline">What to do if a legal notice is ignored</Link></li>
              <li><Link href="/cheque-bounce-notice-timeline-section-138" className="text-red-600 underline">Cheque bounce notice timeline (Section 138)</Link></li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight">Frequently asked questions</h2>
            <div className="space-y-3">
              {FAQS.map((f) => (
                <details key={f.question} className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5">
                  <summary className="font-semibold cursor-pointer text-sm sm:text-base">{f.question}</summary>
                  <p className="mt-3 text-sm md:text-base leading-relaxed text-slate-700">{f.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <RelatedRecoveryGuides />
        </div>
      </div>
    </>
  );
}
