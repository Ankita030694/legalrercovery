import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Our Legal Experts & Panel Advocates | Legal Recovery',
  description: 'Meet the legal experts behind Legal Recovery. Our panel of senior advocates specializes in consumer protection, debt recovery, and civil litigation.',
  alternates: {
    canonical: 'https://legalrecovery.in/authors',
  },
};

const authorListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Legal Recovery Experts",
  "description": "Directory of legal experts and panel advocates contributing to Legal Recovery.",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Person",
        "name": "Advocate Aman Chawla",
        "url": "https://legalrecovery.in/authors/advocate-aman-chawla"
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Person",
        "name": "Advocate Sneha Sharma",
        "url": "https://legalrecovery.in/authors/advocate-sneha-sharma"
      }
    }
  ]
};

export default function AuthorsIndexPage() {
  return (
    <div className="bg-[#F8F9FB] min-h-screen font-sans text-slate-800">
      <Script
        id="author-list-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorListSchema) }}
      />
      
      <div className="bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#020617] text-white pt-32 pb-20 border-b border-slate-900">
        <div className="max-w-5xl mx-auto px-4 md:px-8 text-center">
          <span className="inline-block text-[#DC2626] text-xs md:text-sm font-black uppercase tracking-widest mb-4 bg-red-950/30 px-4 py-1.5 rounded-full border border-[#DC2626]/20">
            OUR LEGAL TEAM
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-6">Expert Legal Minds</h1>
          <p className="text-slate-300 max-w-3xl mx-auto text-lg leading-relaxed">
            At Legal Recovery, we believe that access to justice begins with access to the right knowledge. Our legal content is meticulously authored, reviewed, and updated by practicing advocates with decades of combined experience in Indian civil courts.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-8 py-16 space-y-16">
        
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-slate-900 mb-4">Why Trust Our Content?</h2>
          <p className="text-slate-650 leading-relaxed mb-8">
            The intersection of digital transactions and the Indian legal system requires specialized expertise. Generalized legal advice often fails to capture the nuances of new statutes like the Consumer Protection (E-Commerce) Rules, 2020, or the Bharatiya Sakshya Adhiniyam, 2023. Our authors are not just content writers; they are active litigators who represent clients daily in the National Consumer Disputes Redressal Commission, High Courts, and District Courts. By translating complex statutory mandates into actionable guides, our experts empower you to enforce your rights pre-litigation.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Author 1: Aman Chawla */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden flex flex-col hover:border-slate-300 transition-colors">
            <div className="p-8 pb-0">
              <div className="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center mb-6 border-4 border-slate-100 shadow-md">
                <span className="text-3xl font-black text-slate-500">AC</span>
              </div>
              <h2 className="text-2xl font-black text-slate-900 mb-1">Advocate Aman Chawla</h2>
              <p className="text-[#DC2626] font-bold text-xs tracking-widest uppercase mb-4">Senior Consumer Law Expert</p>
              <p className="text-slate-650 leading-relaxed text-sm mb-6">
                With over 12 years of specialized litigation experience, Advocate Aman Chawla leads the Consumer Protection desk. He has established significant legal precedents in holding e-commerce giants and real estate developers accountable.
              </p>
            </div>
            <div className="mt-auto p-8 pt-0">
              <Link 
                href="/authors/advocate-aman-chawla" 
                className="inline-block bg-[#111827] text-white font-bold py-3 px-6 rounded-xl hover:bg-slate-800 transition-colors w-full text-center text-sm"
              >
                View Full Profile & Articles
              </Link>
            </div>
          </div>

          {/* Author 2: Sneha Sharma */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden flex flex-col hover:border-slate-300 transition-colors">
            <div className="p-8 pb-0">
              <div className="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center mb-6 border-4 border-slate-100 shadow-md">
                <span className="text-3xl font-black text-slate-500">SS</span>
              </div>
              <h2 className="text-2xl font-black text-slate-900 mb-1">Advocate Sneha Sharma</h2>
              <p className="text-[#DC2626] font-bold text-xs tracking-widest uppercase mb-4">Civil Litigation & ODR Specialist</p>
              <p className="text-slate-650 leading-relaxed text-sm mb-6">
                Head of Legal Quality and Review. Advocate Sneha Sharma specializes in fast-tracking commercial debt recovery through Online Dispute Resolution (ODR) and flawlessly drafting pre-litigation notices under the NI Act.
              </p>
            </div>
            <div className="mt-auto p-8 pt-0">
              <Link 
                href="/authors/advocate-sneha-sharma" 
                className="inline-block bg-[#111827] text-white font-bold py-3 px-6 rounded-xl hover:bg-slate-800 transition-colors w-full text-center text-sm"
              >
                View Full Profile & Articles
              </Link>
            </div>
          </div>

        </section>

        <section className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-200 text-center max-w-4xl mx-auto mt-12">
          <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-4">Our Commitment to E-E-A-T</h2>
          <p className="text-slate-650 text-sm md:text-base leading-relaxed">
            Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T) are the cornerstones of our editorial policy. Every legal guide published on Legal Recovery undergoes a rigorous dual-review process. Primary drafts are constructed based on statutory law and recent Supreme Court precedents, followed by a practical review by a senior advocate to ensure the strategies recommended actually work in real-world Indian courts. 
          </p>
        </section>

      </div>
    </div>
  );
}
