import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Anuj Anand Malik - Founder, AMA Legal Solutions | Legal Recovery India',
  description: 'Anuj Anand Malik, Founder of AMA Legal Solutions, is a trusted advocate, loan settlement expert, legal advisor, and banking & consumer litigation lawyer in India.',
  alternates: {
    canonical: 'https://www.legalrecovery.in/authors/anuj-anand-malik',
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "mainEntity": {
    "@type": "Person",
    "@id": "https://www.legalrecovery.in/authors/anuj-anand-malik#person",
    "name": "Anuj Anand Malik",
    "jobTitle": "Founder, AMA Legal Solutions",
    "worksFor": {
      "@type": "Organization",
      "name": "AMA Legal Solutions",
      "url": "https://www.legalrecovery.in"
    },
    "description": "Anuj Anand Malik, Founder of AMA Legal Solutions, is a trusted advocate, loan settlement expert, legal advisor, and banking lawyer. With over a decade of experience in loan settlement, corporate law, financial disputes, and compliance, he leads a result-driven law firm based in India that helps individuals, startups, and businesses achieve legal and financial stability.",
    "url": "https://www.legalrecovery.in/authors/anuj-anand-malik",
    "sameAs": ["https://www.linkedin.com/in/iamanujmalik/"],
    "knowsAbout": [
      "Loan Settlement",
      "Money Recovery Law in India",
      "Consumer Protection Act, 2019",
      "Section 138 Negotiable Instruments Act",
      "Employment & Full and Final Settlement Recovery",
      "E-Commerce Dispute Resolution"
    ]
  }
};

export default function AnujAnandMalikPage() {
  return (
    <div className="bg-[#F8F9FB] min-h-screen font-sans text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      
      <div className="bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#020617] text-white pt-32 pb-20 border-b border-slate-900">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="w-32 h-32 md:w-48 md:h-48 bg-slate-800 rounded-full shrink-0 flex items-center justify-center overflow-hidden border-4 border-slate-700 shadow-xl">
              <img src="/anujbhiya.png" alt="Anuj Anand Malik" className="w-full h-full object-cover" />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-black mb-3">Anuj Anand Malik</h1>
              <p className="text-[#DC2626] font-bold text-sm md:text-base tracking-widest uppercase mb-4 bg-red-950/30 inline-block px-4 py-1.5 rounded-full border border-[#DC2626]/20">Founder, AMA Legal Solutions</p>
              <p className="text-slate-300 max-w-2xl text-lg leading-relaxed mb-4">
                Anuj Anand Malik, Founder of AMA Legal Solutions, is a trusted advocate, loan settlement expert, legal advisor, and banking lawyer. With over a decade of experience in loan settlement, corporate law, financial disputes, and compliance, he leads a result-driven law firm based in India that helps individuals, startups, and businesses achieve legal and financial stability.
              </p>
              <a
                href="https://www.linkedin.com/in/iamanujmalik/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#0077b5] text-white font-bold py-2.5 px-6 rounded-xl hover:opacity-90 transition-opacity text-sm"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-8 py-16 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
        <div className="space-y-12">
          <section className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-black text-slate-900 mb-6 border-b-2 border-[#DC2626] pb-2 inline-block">Professional Biography</h2>
            <div className="prose prose-slate max-w-none text-slate-650 leading-relaxed space-y-4">
              <p>
                Anuj Anand Malik, Founder of AMA Legal Solutions, is a trusted advocate, loan settlement expert, legal advisor, and banking lawyer. With over a decade of experience in loan settlement, corporate law, financial disputes, and compliance, he leads a result-driven law firm based in India that helps individuals, startups, and businesses achieve legal and financial stability.
              </p>
              <p>
                At Legal Recovery India, Anuj Anand Malik architects complex legal strategies to hold giant e-commerce platforms, builders, employers, insurance companies, and service providers accountable. His approach blends aggressive pre-litigation notice drafting with formidable courtroom advocacy. By meticulously documenting digital evidence—such as unboxing videos, WhatsApp acknowledgments under Section 63 BSA, email trails, and banking ledgers—he frequently forces corporate legal departments into out-of-court settlements within 7 to 15 days.
              </p>
              <p>
                He regularly publishes detailed legal recovery guides and procedural manuals aimed at demystifying Indian civil, labour, and consumer law for citizens, freelancers, and MSMEs.
              </p>
            </div>
          </section>

          <section className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-black text-slate-900 mb-6 border-b-2 border-[#DC2626] pb-2 inline-block">Key Practice Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                <h3 className="font-extrabold text-slate-900 mb-2">E-Commerce & Consumer Refunds</h3>
                <p className="text-sm text-slate-650">Holding marketplace platforms and sellers liable for wrong product deliveries, return rejections, and refund delays under the Consumer Protection (E-Commerce) Rules, 2020.</p>
              </div>
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                <h3 className="font-extrabold text-slate-900 mb-2">Salary & F&F Settlement Recovery</h3>
                <p className="text-sm text-slate-650">Enforcing timely payment of wages, withheld notice-period salary, relieving letters, and Full & Final settlements via Labour Commissioner & Samadhan escalation.</p>
              </div>
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                <h3 className="font-extrabold text-slate-900 mb-2">Banking, ECS & Cyber Fraud Disputes</h3>
                <p className="text-sm text-slate-650">Securing reversals for unauthorized ECS/NACH auto-debits, fraudulent UPI/card transactions under RBI Zero-Liability circulars, and wrongful lien freezes.</p>
              </div>
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                <h3 className="font-extrabold text-slate-900 mb-2">Pre-Litigation Legal Notices</h3>
                <p className="text-sm text-slate-650">Drafting statutory legal notices under Order 37 CPC, Section 138 NI Act, and the Limitation Act to resolve money recovery claims without prolonged court trials.</p>
              </div>
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="font-black text-slate-900 mb-4">Credentials & Practice</h3>
            <ul className="space-y-3 text-sm text-slate-650">
              <li className="flex items-start">
                <span className="text-[#DC2626] mr-2">▪</span>
                <span><strong>Role:</strong> Founder, AMA Legal Solutions</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#DC2626] mr-2">▪</span>
                <span><strong>Experience:</strong> 10+ Years in Banking, Debt & Consumer Litigation</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#DC2626] mr-2">▪</span>
                <span><strong>Jurisdiction:</strong> Pan-India Courts, NCDRC, DRT & Labour Forums</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="font-black text-slate-900 mb-4">Featured Legal Guides</h3>
            <ul className="space-y-2.5 text-xs font-semibold text-slate-700">
              <li>
                <Link href="/time-limit-to-file-money-recovery-case-india" className="text-[#DC2626] hover:underline">Time Limit to File Money Recovery Case in India (3-Year Rule)</Link>
              </li>
              <li>
                <Link href="/how-to-recover-full-and-final-settlement-from-employer" className="text-[#DC2626] hover:underline">How to Recover Full & Final Settlement from Employer</Link>
              </li>
              <li>
                <Link href="/legal-notice-for-full-and-final-settlement-delay" className="text-[#DC2626] hover:underline">Legal Notice for F&F Settlement Delay</Link>
              </li>
              <li>
                <Link href="/flipkart-return-refund-complaint" className="text-[#DC2626] hover:underline">Flipkart Return Rejected or Refund Delayed Complaint Guide</Link>
              </li>
              <li>
                <Link href="/legal-notice-to-vendor-for-refund-of-advance-payment" className="text-[#DC2626] hover:underline">Legal Notice to Vendor for Refund of Advance Payment</Link>
              </li>
              <li>
                <Link href="/legal-notice-to-retailer-wrong-damaged-product-delivery" className="text-[#DC2626] hover:underline">Legal Notice for Wrong or Damaged Product Delivery</Link>
              </li>
              <li>
                <Link href="/legal-notice-to-pg-owner-for-security-deposit-refund" className="text-[#DC2626] hover:underline">Legal Notice to PG Owner / Landlord for Security Deposit Refund</Link>
              </li>
              <li>
                <Link href="/builder-booking-cancellation-refund-legal-notice" className="text-[#DC2626] hover:underline">Builder Booking Cancellation Refund Legal Notice</Link>
              </li>
              <li>
                <Link href="/legal-notice-to-car-dealer-delayed-delivery-defective-vehicle" className="text-[#DC2626] hover:underline">Legal Notice to Car Dealer for Delayed Delivery / Defective Car</Link>
              </li>
              <li>
                <Link href="/legal-notice-to-bank-unauthorized-ecs-nach-debit-reversal" className="text-[#DC2626] hover:underline">Legal Notice to Bank for Unauthorized ECS/NACH Debit Reversal</Link>
              </li>
              <li>
                <Link href="/what-to-do-if-legal-notice-is-ignored-india" className="text-[#DC2626] hover:underline">What Happens If a Legal Notice Is Ignored in India?</Link>
              </li>
              <li>
                <Link href="/cheque-bounce-notice-timeline-section-138" className="text-[#DC2626] hover:underline">Cheque Bounce Notice Timeline under Section 138 NI Act</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
