import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Advocate Sneha Sharma - Civil Litigation & ODR | Legal Recovery',
  description: 'Advocate Sneha Sharma is an expert in civil litigation, commercial contracts, and Online Dispute Resolution (ODR) with a strong track record of debt recovery.',
  alternates: {
    canonical: 'https://legalrecovery.in/authors/advocate-sneha-sharma',
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "mainEntity": {
    "@type": "Person",
    "name": "Advocate Sneha Sharma",
    "jobTitle": "Civil Litigation & ODR Specialist",
    "worksFor": {
      "@type": "Organization",
      "name": "Legal Recovery India"
    },
    "alumniOf": "National Law School of India University (NLSIU)",
    "description": "Advocate Sneha Sharma specializes in civil litigation, commercial recovery, and Online Dispute Resolution (ODR).",
    "url": "https://legalrecovery.in/authors/advocate-sneha-sharma",
    "knowsAbout": ["Civil Procedure Code", "Online Dispute Resolution", "Negotiable Instruments Act", "Debt Recovery", "Contract Law"]
  }
};

export default function AdvocateSnehaSharmaPage() {
  return (
    <div className="bg-[#F8F9FB] min-h-screen font-sans text-slate-800">
      <Script
        id="sneha-sharma-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      
      <div className="bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#020617] text-white pt-32 pb-20 border-b border-slate-900">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="w-32 h-32 md:w-48 md:h-48 bg-slate-800 rounded-full shrink-0 flex items-center justify-center overflow-hidden border-4 border-slate-700 shadow-xl">
              <span className="text-4xl md:text-6xl font-black text-slate-500">SS</span>
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-black mb-3">Advocate Sneha Sharma</h1>
              <p className="text-[#DC2626] font-bold text-sm md:text-base tracking-widest uppercase mb-4 bg-red-950/30 inline-block px-4 py-1.5 rounded-full border border-[#DC2626]/20">Civil Litigation & ODR Specialist</p>
              <p className="text-slate-300 max-w-2xl text-lg leading-relaxed">
                Head of Legal Quality and Review. Specializing in rapid debt recovery, out-of-court settlements, and leveraging legal technology for fast-track dispute resolution.
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
                Advocate Sneha Sharma is a distinguished civil litigation expert with a relentless focus on commercial debt recovery and alternative dispute resolution (ADR). She recognizes that traditional courtroom litigation is often too slow for the fast-paced needs of modern freelancers, MSMEs, and independent contractors. Therefore, she has championed the use of Online Dispute Resolution (ODR) mechanisms to achieve results within weeks rather than years.
              </p>
              <p>
                At Legal Recovery India, Advocate Sharma heads the Legal Quality and Review division. Her primary mandate is to ensure that every pre-litigation notice dispatched through the platform—whether under Section 138 of the Negotiable Instruments Act or Section 80 of the Civil Procedure Code—is completely airtight and legally robust. Her meticulous drafting standards eliminate loopholes that opposing counsel might exploit.
              </p>
              <p>
                She has successfully overseen the recovery of crores of rupees in stuck payments. Her expertise lies in accurately assessing the evidentiary value of digital contracts, WhatsApp communications, and electronic invoices under the Bharatiya Sakshya Adhiniyam, 2023, allowing her clients to negotiate from a position of absolute strength.
              </p>
            </div>
          </section>

          <section className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-black text-slate-900 mb-6 border-b-2 border-[#DC2626] pb-2 inline-block">Key Practice Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                <h3 className="font-extrabold text-slate-900 mb-2">Commercial Debt Recovery</h3>
                <p className="text-sm text-slate-650">Representing MSMEs and freelancers against large corporations for unpaid invoices, enforcing strict compliance under the MSME Samadhaan framework.</p>
              </div>
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                <h3 className="font-extrabold text-slate-900 mb-2">Cheque Bounce (NI Act)</h3>
                <p className="text-sm text-slate-650">Managing the strict statutory timelines of Section 138 of the Negotiable Instruments Act, ensuring notices and criminal complaints are filed flawlessly.</p>
              </div>
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                <h3 className="font-extrabold text-slate-900 mb-2">Online Dispute Resolution (ODR)</h3>
                <p className="text-sm text-slate-650">Facilitating virtual mediation and drafting legally binding e-signed settlement deeds to avoid prolonged civil trials.</p>
              </div>
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                <h3 className="font-extrabold text-slate-900 mb-2">Employment & Labour Disputes</h3>
                <p className="text-sm text-slate-650">Assisting employees with withheld Full and Final (FNF) settlements, relieving letters, and wrongful termination disputes.</p>
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
                <strong>Bar Council:</strong> Enrolled with the Bar Council of Maharashtra and Goa.
              </li>
              <li className="flex items-start">
                <span className="text-[#DC2626] mr-2">▪</span>
                <strong>Education:</strong> B.A. LL.B. (Hons.) from National Law School of India University (NLSIU).
              </li>
              <li className="flex items-start">
                <span className="text-[#DC2626] mr-2">▪</span>
                <strong>Experience:</strong> 8+ Years in Commercial Litigation.
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="font-black text-slate-900 mb-4">Reviewed Legal Guides</h3>
            <ul className="space-y-3 text-sm text-slate-650">
              <li>
                <Link href="/freelancer-payment-recovery-guide" className="text-blue-600 hover:underline">Freelancer Payment Recovery Guide</Link>
              </li>
              <li>
                <Link href="/send-a-legal-notice/wrong-product-delivered" className="text-blue-600 hover:underline">Wrong Product Delivered Legal Solutions</Link>
              </li>
              <li>
                <Link href="/cheque-bounce-notice-timeline-section-138" className="text-blue-600 hover:underline">Understanding Section 138 Timelines</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
