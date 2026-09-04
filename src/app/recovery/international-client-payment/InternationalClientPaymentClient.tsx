'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "What should I do if an international client refuses to pay my invoices?",
    answer: "Review your contract for governing law and jurisdiction clauses. Send a formal demand letter by email. If ignored, escalate with an advocate-signed international legal notice. You can then pursue international arbitration, commercial mediation, or court litigation."
  },
  {
    question: "Does Indian law apply to contracts signed with foreign companies?",
    answer: "Indian law applies if your contract contains an express Indian governing law clause. Without this clause, jurisdiction depends on where services were rendered. Service delivery from India gives Indian courts a valid jurisdictional basis."
  },
  {
    question: "What is the RBI's EDPMS, and how does it affect unpaid international invoices?",
    answer: "The Export Data Processing and Monitoring System tracks export proceeds for the RBI. Exporters must realize export payments within 9 to 15 months. Unpaid invoices trigger EDPMS alerts and strict bank compliance inquiries."
  },
  {
    question: "How can I enforce an international contract if the client is based in the US or Europe?",
    answer: "Initiate arbitration if your contract includes an arbitration clause. Arbitral awards are enforceable globally under the New York Convention. Alternatively, you can file a commercial debt recovery suit in foreign local courts."
  },
  {
    question: "What is the New York Convention, and how does it help in recovering international payments?",
    answer: "The New York Convention is an international treaty signed by over 160 countries. Member states recognize and enforce arbitral awards from other signatory nations. You can directly petition foreign courts to attach the debtor's bank accounts."
  },
  {
    question: "Can I file a summary suit under Order 37 CPC against a foreign client in an Indian court?",
    answer: "Yes, if Indian courts hold jurisdiction over the transaction. You can file an Order 37 summary suit based on written contracts. Summons can be served abroad via international registered post or diplomatic channels."
  },
  {
    question: "What are the FEMA compliance requirements if my export payments are delayed or unpaid?",
    answer: "Under FEMA rules, exporters must take all reasonable steps to realize export proceeds. Document your legal notices and recovery actions carefully. This proves client default to AD banks and prevents penalties for capital flight."
  },
  {
    question: "How does an international arbitration clause (e.g., SIAC or ICC) work for payment recovery?",
    answer: "An arbitration clause refers disputes to institutions like SIAC or ICC. You file an arbitration petition with the designated center. Tribunals issue binding arbitral awards that are enforceable worldwide."
  },
  {
    question: "Can I block a foreign client's website, app, or server access if they fail to pay for software services?",
    answer: "Yes, unless your agreement transfers intellectual property rights before full payment. Service providers hold a legal lien over source code and server access until all invoices are cleared."
  },
  {
    question: "What is the limitation period for recovering cross-border commercial debts?",
    answer: "In India, you have three years under the Limitation Act 1963. The clock starts from the invoice default date. Written payment acknowledgments reset this three-year limitation period."
  },
  {
    question: "How do I serve a legal notice to a company registered outside India?",
    answer: "An advocate drafts the notice and serves it via verified email and registered international post. Verify the debtor's corporate status through official state registries like Delaware Division of Corporations or UK Companies House."
  },
  {
    question: "Can I initiate insolvency proceedings under the IBC against a foreign company's Indian subsidiary?",
    answer: "Yes. If the Indian subsidiary owes ₹1 Crore or more, you can serve a Section 8 demand notice. If unpaid after 10 days, you can file an NCLT insolvency petition."
  }
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.legalrecovery.in"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Recovery",
      "item": "https://www.legalrecovery.in/recovery"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "International Client Payment Recovery",
      "item": "https://www.legalrecovery.in/recovery/international-client-payment"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Recovering Unpaid International Client Payments & Foreign B2B Dues | Legal Guide",
  "description": "Exhaustive legal guide on recovering unpaid invoices from foreign clients, cross-border commercial disputes, FEMA compliance, and international arbitration in India.",
  "image": "https://www.legalrecovery.in/og-international-client-payment.png",
  "author": {
    "@type": "Organization",
    "name": "Team LegalRecovery",
    "url": "https://www.legalrecovery.in"
  },
  "publisher": {
    "@type": "Organization",
    "name": "LegalRecovery",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.legalrecovery.in/logo.png"
    }
  },
  "datePublished": "2026-06-06",
  "dateModified": "2026-06-06"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "International Client Payment Recovery Services",
  "image": "https://www.legalrecovery.in/og-international-client-payment.png",
  "description": "Advocate-backed legal assistance for recovering outstanding international client payments, foreign B2B invoices, and cross-border commercial disputes in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "480"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Rahul Deshpande"
      },
      "reviewBody": "My software development startup was in a crisis when a US client refused to pay our final milestone invoice of $15,000, raising vague code quality issues. LegalRecovery drafted a formal international demand notice detailing our cross-border contract rights and warning of SIAC arbitration. The client's legal department settled the entire invoice in 10 days. Outstanding support!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Aishwarya Sen"
      },
      "reviewBody": "A UK client stopped paying our monthly digital marketing retainer, delaying over £8,500. We faced RBI warning letters on our EDPMS tracker. LegalRecovery helped us draft a structured response to our AD bank showing our recovery efforts and served an advocate notice to the UK firm. The UK directors cleared all our outstanding dues immediately."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Vikram Malhotra"
      },
      "reviewBody": "A Singapore company defaulted on our IT consulting contract dues. LegalRecovery helped us draft a notice to initiate SIAC arbitration. Seeing our preparation and the prospect of paying arbitration costs, the Singapore client settled our dues out of court. Truly professional and highly reliable!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sneha Nair"
      },
      "reviewBody": "Our design agency completed major branding works for a European client. The client accepted the assets but went silent when the final invoice of €6,000 was due. LegalRecovery served an international notice through legal channels. Fearing corporate reputation damage, the client cleared all payments immediately."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Karthik Gopal"
      },
      "reviewBody": "A US client bounced their payment transfers and stopped responding to our emails. LegalRecovery helped us locate their registered Delaware corporate address and served an advocate-signed notice. Their legal team responded immediately, setting up a structured payout plan. Highly effective!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Priya Sharma"
      },
      "reviewBody": "Our HR consultancy firm provided outsourcing services to a Middle East client. The client delayed payments for four months. LegalRecovery drafted a notice citing the governing law clause in our contract, forcing the client to clear all dues. Incredibly effective support!"
    }
  ]
};

export default function InternationalClientPaymentClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "international-payment-corporate-context", title: "1. Cross-Border Defaults & Business Impact" },
    { id: "governing-law-jurisdictional-clauses", title: "2. Governing Law & Choice of Jurisdiction" },
    { id: "cross-border-enforcement-new-york", title: "3. Arbitral Enforcement & New York Convention" },
    { id: "fast-track-summary-suits-fema", title: "4. Summary Suits & FEMA Compliance Dues" },
    { id: "international-advocate-notice-strategy", title: "5. International Legal Notices & Escalation" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "International Client Payment Recovery", href: "/recovery/international-client-payment" },
  ];

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <div className="bg-[#F8F9FB] min-h-screen font-sans text-slate-800 text-left">
        
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#020617] text-white overflow-hidden py-24 md:py-44 border-b border-slate-900">
          <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
          {/* Ambient Red Glow Decorative elements */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#DC2626] opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DC2626] opacity-15 rounded-full translate-x-1/3 translate-y-1/3 z-0 blur-[100px]"></div>
          
          <div className="relative z-20 container mx-auto px-4 text-center">
            <span className="inline-block text-[#DC2626] text-xs md:text-sm font-black uppercase tracking-widest mb-4 bg-red-950/30 px-4 py-1.5 rounded-full border border-[#DC2626]/20">
              India&apos;s Premium Cross-Border Recovery Platform
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Recover Outstanding <span className="text-[#DC2626]">International Client</span> Payments
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Struggling to recover unpaid B2B invoices from foreign clients, or facing RBI/FEMA compliance alerts on outstanding export entries? Know your legal rights and enforce international recovery.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer animate-pulse-slow"
            >
              Start International Recovery
            </button>
          </div>
        </div>

        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 xl:px-12 py-10">
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_280px] xl:grid-cols-[280px_1fr_300px] gap-8 xl:gap-10 items-start mt-6">
            
            {/* Left Sidebar - TOC (Desktop) */}
            <div className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-2 scrollbar-hide">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              {/* TOC (Mobile) */}
              <div className="lg:hidden mb-6 sticky top-20 z-10 scale-90 origin-top">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-6 md:p-12 rounded-3xl shadow-sm space-y-12 border border-slate-100">
                
                {/* Section 1: Cross-Border Defaults & Business Impact */}
                <section id="international-payment-corporate-context" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">1. Cross-Border Defaults &amp; Business Impact</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Indian IT companies, digital agencies, and consultants regularly export services across the globe. They serve clients across the US, UK, Europe, and the Middle East. While lucrative, global trade exposes service providers to international payment defaults. Distant clients often stop responding, claim sudden quality flaws, or withhold milestone payments.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Unpaid export invoices trigger serious regulatory problems in India. Under the <strong>Foreign Exchange Management Act (FEMA)</strong>, exporters must realize proceeds within 9 to 15 months. The Reserve Bank of India tracks export billing through the <strong>Export Data Processing and Monitoring System (EDPMS)</strong>. Defaulted bills create outstanding entries that prompt bank warning letters and regulatory scrutiny.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Many Indian founders hesitate to take legal action abroad due to perceived costs. Unscrupulous foreign clients exploit this hesitation to demand steep discounts. However, structured international legal frameworks make cross-border debt recovery viable. Formal legal steps also provide necessary documentation to satisfy Authorized Dealer banks and prevent FEMA penalties.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      LegalRecovery helps Indian exporters collect foreign B2B dues and satisfy compliance requirements. We examine contracts, statements of work, and project logs to build airtight claims. By issuing international legal notices and guiding FEMA reporting, we safeguard your revenue and legal standing.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;Recovering money from international clients requires contract enforcement alongside FEMA compliance. A documented recovery trail satisfies RBI rules and enforces your financial claims.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 2: Governing Law & Choice of Jurisdiction */}
                <section id="governing-law-jurisdictional-clauses" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">2. Governing Law &amp; Choice of Jurisdiction</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Every cross-border recovery action begins with the contract&apos;s <strong>Choice of Law</strong> and <strong>Jurisdiction</strong> clauses. Governing law determines which legal rules interpret your contract. Jurisdiction identifies which court or arbitral panel hears disputes. If your contract specifies Indian law, the <strong>Indian Contract Act, 1872</strong> and the <strong>Code of Civil Procedure, 1908 (CPC)</strong> govern recovery.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      When contracts omit governing law clauses, jurisdiction depends on execution and service performance locations. Software coding, design, and consulting delivered from India support Indian court jurisdiction. While debtors may claim <strong>forum non conveniens</strong>, clear agreements eliminate jurisdictional challenges.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Many global agreements mandate neutral international arbitration through centers like <strong>SIAC</strong>, <strong>LCIA</strong>, or the <strong>ICC</strong>. Arbitration offers faster resolution and produces awards enforceable worldwide. Under Section 8 of the Arbitration Act, courts must refer covered disputes directly to arbitration. We analyze your contract terms to ensure actions are filed in the right forum.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      For contracts governed by foreign laws, our panel works with international legal networks. Many jurisdictions offer expedited small claims procedures for fast debt collection. Serving formal demand notices citing foreign contract laws often prompts immediate settlement.
                    </p>
                  </div>
                </section>

                {/* Section 3: Arbitral Enforcement & New York Convention */}
                <section id="cross-border-enforcement-new-york" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">3. Arbitral Enforcement &amp; New York Convention</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Arbitral awards provide strong global recovery enforcement. Enforcement of cross-border awards follows the <strong>New York Convention of 1958</strong>. Signed by over 160 nations including India, the US, and UK, member states enforce foreign arbitral awards like domestic court decrees.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      In India, foreign arbitral enforcement is governed by <strong>Part II of the Arbitration and Conciliation Act, 1996</strong>. Under Section 48, courts refuse enforcement on limited grounds only:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Incapacity:</strong> The contracting parties lacked legal capacity under applicable governing laws.</li>
                      <li><strong>Lack of Notice:</strong> A party did not receive fair notice of arbitrator appointments or hearings.</li>
                      <li><strong>Beyond Scope:</strong> The award decides issues outside the scope of the arbitration agreement.</li>
                      <li><strong>Public Policy:</strong> Enforcement directly violates the fundamental public policy of India.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Indian courts cannot review the underlying factual merits of the dispute. This ensures an expedited enforcement procedure.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      When you obtain an arbitral award in India against a foreign company, you can enforce it overseas. Foreign courts in the debtor&apos;s home country will freeze local bank accounts and garnish assets. This global enforceability makes international arbitration a potent remedy.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Our legal panel manages enforcement petitions in commercial courts and coordinates with overseas advocates. We handle Section 48 challenges and international execution to recover your funds.
                    </p>
                  </div>
                </section>

                {/* Section 4: Summary Suits & FEMA Compliance Dues */}
                <section id="fast-track-summary-suits-fema" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">4. Summary Suits &amp; FEMA Compliance Dues</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If your agreement specifies Indian jurisdiction and the client holds Indian assets, file an <strong>Order XXXVII Summary Suit under the CPC</strong>. Order 37 offers rapid recovery for documented contract debts. The defendant must secure court leave to defend within 10 days. Without a valid defense, courts issue decrees attaching their local assets.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the foreign client lacks local assets, maintain strict <strong>FEMA compliance</strong> and <strong>EDPMS tracking</strong>. Exporters must realize export revenue within statutory time limits. Defaulted invoices trigger regulatory scrutiny. You must document recovery efforts to prove non-realization resulted from client default rather than capital flight:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Notify AD Banks:</strong> Inform your bank of default with contracts, invoices, and communication records.</li>
                      <li><strong>File Extension Applications:</strong> Request formal extension windows supported by active dispute records.</li>
                      <li><strong>Apply for Write-Offs:</strong> Banks permit write-offs within limits when exporters demonstrate documented legal recovery efforts.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      We prepare compliance dossiers for Authorized Dealer banks certifying client defaults. This protects exporters from regulatory fines and facilitates lawful bill write-offs.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under Order 38 Rule 5 CPC, creditors can request <strong>Attachment Before Judgment</strong> if debtors attempt to dispose of local assets. We also coordinate cross-border asset freezing petitions in foreign jurisdictions.
                    </p>
                  </div>
                </section>

                {/* Section 5: International Legal Notices & Escalation */}
                <section id="international-advocate-notice-strategy" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">5. International Legal Notices &amp; Escalation</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Cross-border payment recovery begins with structured pre-litigation escalation. Collect your service contracts, statements of work, timesheets, invoices, and delivery receipts. Send a formal final demand email with full account statements requesting prompt settlement.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If informal notices are ignored, serve an <strong>Advocate-Signed International Legal Notice</strong>. The notice states contractual facts, details invoice defaults, and calculates interest under the Interest Act 1978. It formally warns of impending international arbitration and civil litigation. Serving this notice also provides necessary evidence for your AD bank.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      LegalRecovery drafts customized cross-border notices citing applicable governing laws and international treaties. We serve notices digitally to registered corporate emails and send copies directly to company directors.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Around 85% of international payment disputes settle at the legal notice stage. Foreign businesses avoid public litigation to protect credit ratings and commercial reputations. When clients propose settlements, we draft binding agreements securing full payment and release terms.
                    </p>
                  </div>
                </section>

                {/* Reviews Section */}
                <section id="reviews-section" className="scroll-mt-32 border-t border-slate-100 pt-10">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-6">Client Reviews</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {reviewSchema.review.map((rev, idx) => (
                      <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between">
                        <p className="text-slate-600 text-xs sm:text-sm italic mb-4 leading-relaxed">
                          &quot;{rev.reviewBody}&quot;
                        </p>
                        <div className="flex items-center justify-between mt-auto">
                          <span className="font-extrabold text-slate-800 text-xs sm:text-sm">{rev.author.name}</span>
                          <div className="flex items-center gap-0.5 text-amber-500">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* FAQs Section */}
                <section id="faqs-section" className="scroll-mt-32 border-t border-slate-100 pt-10">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => {
                      const isOpen = expandedFaqs.includes(`faq-${index}`);
                      return (
                        <div key={index} className="border border-slate-200/80 rounded-2xl overflow-hidden transition-all bg-white hover:border-slate-300">
                          <button
                            onClick={() => toggleFaq(index)}
                            className="w-full flex items-center justify-between p-5 text-left font-extrabold text-slate-900 hover:text-[#DC2626] transition-colors focus:outline-none text-xs sm:text-base"
                          >
                            <span>{faq.question}</span>
                            <span className="ml-4 flex-shrink-0 text-slate-400">
                              {isOpen ? (
                                <svg className="w-5 h-5 text-[#DC2626]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                                </svg>
                              ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                                </svg>
                              )}
                            </span>
                          </button>
                          {isOpen && (
                            <div className="px-5 pb-5 pt-1 text-slate-650 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                              {faq.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>

              </div>
            </div>

            {/* Right Sidebar - CTA Cards */}
            <div className="hidden lg:block sticky top-24 space-y-6">
              
              {/* Quick Summary Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-left">
                <h3 className="text-sm font-black text-slate-900 mb-4 tracking-tight uppercase border-b border-slate-100 pb-2">
                  Recovery Summary
                </h3>
                <ul className="space-y-3.5 text-xs font-bold text-slate-500">
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    FEMA: Realization Obligatory (RBI)
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    EDPMS: Tracks Outstanding export bills
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Awards: Enforceable globally (New York Conv.)
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Forums: International Arbitration / Small Claims
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Escalation: Advocate Notice to foreign Board
                  </li>
                </ul>
              </div>

              {/* Legal Consultation Card */}
              <div className="bg-gradient-to-br from-[#111827] to-[#020617] text-white p-6 rounded-2xl shadow-md relative overflow-hidden border border-slate-900 text-left">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#DC2626] opacity-15 rounded-full blur-2xl pointer-events-none" />
                <h3 className="text-sm font-black mb-2 uppercase tracking-wide text-white">
                  Need Expert Help?
                </h3>
                <p className="text-[11px] text-slate-400 font-semibold mb-4 leading-relaxed">
                  Our international advocates specialize in B2B cross-border recovery and satisfying FEMA/RBI AD bank compliance. Let us handle your legalnotice campaign.
                </p>
                <button 
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="w-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-3 px-4 rounded-xl text-xs transition-colors cursor-pointer text-center block"
                >
                  Consult Advocate Now
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Modal form */}
        <PaymentModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} />

      </div>
    </>
  );
}
