import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Advocate Aman Chawla - Senior Consumer Law Expert | Legal Recovery',
  description: 'Advocate Aman Chawla is a senior consumer protection lawyer specializing in e-commerce disputes, product liability, and consumer rights litigation across India.',
  alternates: {
    canonical: 'https://legalrecovery.in/authors/advocate-aman-chawla',
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "mainEntity": {
    "@type": "Person",
    "name": "Advocate Aman Chawla",
    "jobTitle": "Senior Consumer Law Expert",
    "worksFor": {
      "@type": "Organization",
      "name": "Legal Recovery India"
    },
    "alumniOf": "Faculty of Law, Delhi University",
    "description": "Advocate Aman Chawla is a seasoned litigation expert practicing at the National Consumer Disputes Redressal Commission (NCDRC) and District Commissions.",
    "url": "https://legalrecovery.in/authors/advocate-aman-chawla",
    "knowsAbout": ["Consumer Protection Law", "E-Commerce Dispute Resolution", "Product Liability", "Unfair Trade Practices"]
  }
};

export default function AdvocateAmanChawlaPage() {
  return (
    <div className="bg-[#F8F9FB] min-h-screen font-sans text-slate-800">
      <Script
        id="aman-chawla-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      
      <div className="bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#020617] text-white pt-32 pb-20 border-b border-slate-900">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="w-32 h-32 md:w-48 md:h-48 bg-slate-800 rounded-full shrink-0 flex items-center justify-center overflow-hidden border-4 border-slate-700 shadow-xl">
              <span className="text-4xl md:text-6xl font-black text-slate-500">AC</span>
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-black mb-3">Advocate Aman Chawla</h1>
              <p className="text-[#DC2626] font-bold text-sm md:text-base tracking-widest uppercase mb-4 bg-red-950/30 inline-block px-4 py-1.5 rounded-full border border-[#DC2626]/20">Senior Consumer Law Expert</p>
              <p className="text-slate-300 max-w-2xl text-lg leading-relaxed">
                Leading the Consumer Protection litigation desk at Legal Recovery. Over 12 years of specialized experience fighting e-commerce fraud, real estate delays, and corporate service deficiencies.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-8 py-16 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
        <div className="space-y-12">
          <section className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-black text-slate-900 mb-6 border-b-2 border-[#DC2626] pb-2 inline-block">Professional Biography</h2>
            <div className="prose prose-slate max-w-none text-slate-650 leading-relaxed space-y-4">
              <p>
                Advocate Aman Chawla is a highly respected litigation expert practicing primarily before the National Consumer Disputes Redressal Commission (NCDRC), State Consumer Disputes Redressal Commissions, and various District Commissions across the country. He has dedicated his career to ensuring that the statutory rights granted under the Consumer Protection Act, 2019, are aggressively upheld against negligent corporations.
              </p>
              <p>
                At Legal Recovery India, Advocate Chawla architects complex legal strategies to hold giant e-commerce platforms, builders, insurance companies, and service providers accountable. His approach blends aggressive pre-litigation notice drafting with formidable courtroom advocacy. By meticulously documenting evidence—such as unboxing videos, email trails, and digital receipts—he frequently forces corporate legal departments into out-of-court settlements, saving consumers years of litigation stress.
              </p>
              <p>
                He frequently publishes detailed legal guides and procedural manuals aimed at demystifying Indian law for the common citizen. His commentaries on the liability of marketplace intermediaries and Section 138 of the Negotiable Instruments Act are widely cited by legal tech platforms.
              </p>
            </div>
          </section>

          <section className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-black text-slate-900 mb-6 border-b-2 border-[#DC2626] pb-2 inline-block">Key Practice Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                <h3 className="font-extrabold text-slate-900 mb-2">E-Commerce Dispute Resolution</h3>
                <p className="text-sm text-slate-650">Specializing in holding third-party sellers and marketplace platforms jointly liable for wrong product deliveries, counterfeit goods, and refund refusals under the E-Commerce Rules, 2020.</p>
              </div>
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                <h3 className="font-extrabold text-slate-900 mb-2">Real Estate & RERA</h3>
                <p className="text-sm text-slate-650">Filing complaints against builders for delayed possession, unauthorized layout changes, and hidden charges, seeking refunds with cumulative interest.</p>
              </div>
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                <h3 className="font-extrabold text-slate-900 mb-2">Insurance Claim Rejections</h3>
                <p className="text-sm text-slate-650">Challenging arbitrary repudiation of mediclaim and life insurance policies by proving absence of material concealment.</p>
              </div>
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                <h3 className="font-extrabold text-slate-900 mb-2">Pre-Litigation Legal Notices</h3>
                <p className="text-sm text-slate-650">Drafting highly technical, statutory legal notices designed to trigger immediate corporate compliance without requiring protracted court battles.</p>
              </div>
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="font-black text-slate-900 mb-4">Credentials & Affiliations</h3>
            <ul className="space-y-3 text-sm text-slate-650">
              <li className="flex items-start">
                <span className="text-[#DC2626] mr-2">▪</span>
                <strong>Bar Council:</strong> Enrolled with the Bar Council of Delhi.
              </li>
              <li className="flex items-start">
                <span className="text-[#DC2626] mr-2">▪</span>
                <strong>Education:</strong> LL.B. from Faculty of Law, Delhi University.
              </li>
              <li className="flex items-start">
                <span className="text-[#DC2626] mr-2">▪</span>
                <strong>Experience:</strong> 12+ Years in Consumer Litigation.
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="font-black text-slate-900 mb-4">Authored Legal Guides</h3>
            <ul className="space-y-3 text-sm text-slate-650">
              <li>
                <Link href="/send-a-legal-notice" className="text-blue-600 hover:underline">How to Send a Legal Notice in India</Link>
              </li>
              <li>
                <Link href="/send-a-legal-notice/wrong-product-delivered" className="text-blue-600 hover:underline">Legal Notice for Wrong Product Delivered</Link>
              </li>
              <li>
                <Link href="/how-to-file-consumer-complaint-india" className="text-blue-600 hover:underline">Filing a Consumer Complaint via E-Daakhil</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
