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
    answer: "You should first review your contract to identify the governing law, dispute resolution clauses, and jurisdictional provisions. Send a formal demand letter via email, and if ignored, escalate by serving a formal advocate-signed legal notice. If the debt remains unpaid, you can initiate international conciliation, cross-border arbitration, or file a commercial suit in the appropriate forum."
  },
  {
    question: "Does Indian law apply to contracts signed with foreign companies?",
    answer: "Indian law applies only if the contract explicitly contains a 'Choice of Law' or 'Governing Law' clause stating that the agreement is governed by the laws of India. If the contract is silent, jurisdiction is determined by where the services were rendered or where the contract was executed, though courts may apply international private law principles."
  },
  {
    question: "What is the RBI's EDPMS, and how does it affect unpaid international invoices?",
    answer: "The Export Data Processing and Monitoring System (EDPMS) is an RBI-monitored electronic platform that tracks all export transactions and foreign exchange realizations. Exporters must realize payments within the statutory timelines (typically 9 to 15 months). Unrealized invoices are flagged as 'outstanding entries', exposing the exporter to RBI warnings and FEMA regulatory compliance checks."
  },
  {
    question: "How can I enforce an international contract if the client is based in the US or Europe?",
    answer: "If the contract contains a mutual arbitration clause, you can initiate arbitration. Since India, the US, and most European nations are signatories to the New York Convention, any resulting arbitral award is enforceable in the client's home country. Alternatively, you can hire cross-border legal counsel to file a commercial debt recovery suit in their local courts."
  },
  {
    question: "What is the New York Convention, and how does it help in recovering international payments?",
    answer: "The New York Convention of 1958 is an international treaty signed by over 160 countries. It requires member states to recognize and enforce arbitral awards made in other signatory nations. This means that if you secure an arbitral award in India against a foreign client, you can directly petition the courts in the client's country to attach their bank accounts and assets."
  },
  {
    question: "Can I file a summary suit under Order 37 CPC against a foreign client in an Indian court?",
    answer: "Yes, provided the Indian court has territorial and pecuniary jurisdiction (for example, if the contract was signed in India, services were rendered from India, or the contract specifies Indian jurisdiction). You can serve the summons to the foreign client via international post or through diplomatic channels, although serving summons abroad can add time to the process."
  },
  {
    question: "What are the FEMA compliance requirements if my export payments are delayed or unpaid?",
    answer: "Under the Foreign Exchange Management Act (FEMA), exporters must take all reasonable steps to realize export proceeds on time. If payments are delayed or defaulted, you must document your recovery efforts (legal notices, correspondence, MSEFC filings) to show the RBI and Authorized Dealer (AD) banks that the non-realization is due to client default rather than illegal capital flight."
  },
  {
    question: "How does an international arbitration clause (e.g., SIAC or ICC) work for payment recovery?",
    answer: "An international arbitration clause specifies that disputes will be resolved by a neutral body like the Singapore International Arbitration Centre (SIAC) or the International Chamber of Commerce (ICC). If a client defaults, you file a petition with the selected center. The tribunal conducts hearings and issues an award, which can then be enforced globally under the New York Convention."
  },
  {
    question: "Can I block a foreign client's website, app, or server access if they fail to pay for software services?",
    answer: "Yes, unless the contract contains a clause that transfers intellectual property (IP) and server ownership immediately upon generation. Under the Contract Act and general commercial principles, a service provider can exercise a lien over project assets, source code, or domain control in their possession until all outstanding project invoices are cleared."
  },
  {
    question: "What is the limitation period for recovering cross-border commercial debts?",
    answer: "Under the Limitation Act, 1963, the limitation period to initiate legal action in India for B2B payment recovery is three (3) years from the date the invoice default occurred or the date of the last written acknowledgment of the debt. If you are filing in the client's home country, the limitation period is governed by their local laws."
  },
  {
    question: "How do I serve a legal notice to a company registered outside India?",
    answer: "An international legal notice is drafted by an advocate and served via Registered International Speed Post or email to the client's registered corporate address. You must verify their active corporate status through their local registry (such as Delaware Division of Corporations in the US or Companies House in the UK) to ensure the notice is legally valid."
  },
  {
    question: "Can I initiate insolvency proceedings under the IBC against a foreign company's Indian subsidiary?",
    answer: "Yes. If the outstanding debt is ₹1 crore or more, and it is owed by the Indian subsidiary of a foreign company, you can serve a Section 8 demand notice under the Insolvency and Bankruptcy Code (IBC). If they fail to pay within 10 days, you can petition the NCLT to initiate corporate insolvency proceedings against the subsidiary."
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
                      In the globalized economy, Indian IT firms, SaaS startups, digital agencies, and professional consultants increasingly export services to clients across the United States, Europe, the United Kingdom, and the Middle East. While this cross-border trade offers significant opportunities, it also exposes Indian service providers to the risk of international B2B payment defaults. Foreign client defaults represent a complex challenge due to geographical distance, different legal systems, and jurisdictional barriers. Unlike domestic B2B defaults, where you can easily file a local summary suit or approach the Labour Commissioner, international defaults involve cross-border contract enforcement. The client may stop responding to emails, raise post-facto quality complaints, or simply refuse to clear invoices, knowing that the contractor is thousands of miles away.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      For the Indian exporter, the impact of an unpaid international invoice extends beyond financial loss; it creates severe regulatory challenges. Under the <strong>Foreign Exchange Management Act (FEMA)</strong> and Reserve Bank of India (RBI) regulations, all export proceeds must be realized within a statutory period (typically 9 to 15 months from the date of service or export). The RBI tracks these transactions through the <strong>Export Data Processing and Monitoring System (EDPMS)</strong>. If an international client defaults, the invoice is flagged as an &quot;outstanding entry&quot; in the EDPMS. The exporter&apos;s Authorized Dealer (AD) bank is required to issue warning letters and show-cause notices to the exporter, demanding proof of realization. Failure to resolve these entries can lead to regulatory audits, blacklisting, and penalties for violation of exchange control laws, creating a double burden of financial loss and regulatory scrutiny.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A major issue in cross-border disputes is the contractor&apos;s hesitation to take legal action. Many Indian agencies believe that recovering money from a foreign client is impossible or too expensive, assuming they must hire foreign lawyers and file suits in foreign courts. Some international clients exploit this belief, deliberately delaying payments or demanding deep discounts on completed work. However, cross-border payment recovery is highly feasible if approached systematically. Indian contract law, international conventions, and RBI regulations provide structured pathways for recovery. A well-documented recovery trail is also essential to satisfy AD banks and protect the exporter from FEMA penalties, establishing that the delay is due to client default rather than capital flight.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, we specialize in helping Indian exporters and service providers recover their outstanding international B2B payments and manage their regulatory compliance. We analyze your cross-border contracts, Statements of Work (SOW), timesheets, and communications to build a robust evidence dossier. By serving international legal notices, leveraging global collection networks, and guiding you through FEMA compliance documentation, we help protect your business from both financial loss and regulatory penalties. We help you assert your rights across borders, ensuring that foreign clients respect their contractual commitments.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;Recovering money from international clients requires a combination of cross-border contract enforcement and FEMA regulatory compliance. A documented recovery trail protects you from RBI penalties and establishes your legal claim.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 2: Governing Law & Choice of Jurisdiction */}
                <section id="governing-law-jurisdictional-clauses" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">2. Governing Law &amp; Choice of Jurisdiction</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The foundation of any cross-border recovery action is the contract&apos;s <strong>Choice of Law</strong> and <strong>Jurisdiction</strong> clauses. Choice of law defines which country&apos;s laws govern the interpretation of the contract (e.g., &quot;This Agreement shall be governed by the laws of India&quot; or &quot;This Agreement shall be governed by the laws of the State of Delaware, USA&quot;). Jurisdiction defines which courts or arbitral tribunals have the authority to hear disputes. If the contract specifies Indian law and jurisdiction, the recovery process is governed by the <strong>Indian Contract Act, 1872</strong> and the <strong>Code of Civil Procedure, 1908 (CPC)</strong>, allowing you to file recovery actions in Indian courts or facilitation councils.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the contract is silent on governing law, jurisdiction is determined by where the services were rendered or where the contract was executed. In service exports (such as software development, design, or consulting executed from India), the services are performed in India, and the contract is often executed electronically in India. Under private international law principles, Indian courts can assume jurisdiction on the grounds that the contract was performed within their territorial limits. However, foreign clients may challenge this by raising the plea of <strong>forum non conveniens</strong>, arguing that the dispute should be heard in their home country. Having a clear, written contract with an explicit governing law and jurisdiction clause is critical to avoiding these jurisdictional challenges.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Many cross-border agreements specify international arbitration seated in a neutral third-party territory, such as the <strong>Singapore International Arbitration Centre (SIAC)</strong>, the <strong>London Court of International Arbitration (LCIA)</strong>, or the <strong>International Chamber of Commerce (ICC)</strong>. Arbitration is preferred for international B2B disputes because it is faster than civil courts and results in an arbitral award that is recognized internationally. If your contract contains an arbitration clause, civil courts in India and abroad are legally bound under Section 8 of the Arbitration Act to refer the dispute to arbitration. Our legal team reviews your contract&apos;s dispute resolution clause to identify the correct seat, venue, and rules, ensuring that your recovery action is filed in the appropriate forum.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      For contracts governed by foreign laws, our panel works with international legal networks to evaluate your options. Many foreign jurisdictions have fast-track commercial debt collection laws (such as Small Claims Courts in the US or County Court Judgments in the UK) that can be used to recover outstanding dues cost-effectively. Serving a legal notice that references these local laws and details the breach of contract under the designated governing law is a highly effective way to encourage a settlement.
                    </p>
                  </div>
                </section>

                {/* Section 3: Arbitral Enforcement & New York Convention */}
                <section id="cross-border-enforcement-new-york" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">3. Arbitral Enforcement &amp; New York Convention</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When a cross-border dispute is resolved through arbitration, the resulting arbitral award is a powerful tool for recovery. The enforcement of international arbitral awards is governed by the <strong>New York Convention on the Recognition and Enforcement of Foreign Arbitral Awards, 1958</strong>. The New York Convention is an international treaty signed by over 160 countries, including India, the United States, the United Kingdom, Canada, Singapore, and EU nations. Under the convention, signatory states are legally bound to recognize and enforce arbitral awards made in other member states, treating them as equivalent to local court decrees. This international enforceability is the main reason why arbitration is the preferred method for resolving cross-border commercial disputes.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      In India, the enforcement of foreign arbitral awards is governed by <strong>Part II of the Arbitration and Conciliation Act, 1996</strong>. Under Section 48 of the Act, an Indian court can refuse to enforce a foreign arbitral award only under very limited grounds:
                      <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li><strong>Incapacity of Parties:</strong> If the parties to the agreement were under some incapacity under the law applicable to them.</li>
                        <li><strong>Lack of Proper Notice:</strong> If the party against whom the award is invoked was not given proper notice of the appointment of the arbitrator or of the arbitral proceedings.</li>
                        <li><strong>Scope of Submission:</strong> If the award deals with a difference not contemplated by or not falling within the terms of the submission to arbitration.</li>
                        <li><strong>Public Policy:</strong> If the court finds that the enforcement of the award would be contrary to the public policy of India.</li>
                      </ul>
                      Indian courts cannot review the merits of the dispute or re-evaluate the evidence, ensuring a fast-track enforcement process.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If you secure an arbitral award in India (for instance, through a domestic arbitration clause or an MSEFC award) against a foreign client, you can enforce the award in the client&apos;s home country. Under the New York Convention, you can petition the local court in the client&apos;s jurisdiction to recognize the award. Once recognized, the court will issue execution orders, allowing you to attach the client&apos;s local bank accounts, seize their business assets, or garnish their receivables. This cross-border enforcement mechanism makes international arbitral awards a highly effective remedy against defaulting foreign clients.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Similarly, if a foreign client secures an award against you, or if you must defend against a foreign claim, understanding Part II of the Arbitration Act is critical. Our legal panel specializes in both enforcing foreign arbitral awards in India and managing international arbitration proceedings. We guide you through the process of filing enforcement petitions in commercial courts, managing challenges under Section 48, and coordinating with international legal counsel to enforce awards abroad, protecting your commercial interests.
                    </p>
                  </div>
                </section>

                {/* Section 4: Summary Suits & FEMA Compliance Dues */}
                <section id="fast-track-summary-suits-fema" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">4. Summary Suits &amp; FEMA Compliance Dues</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If your contract specifies Indian jurisdiction and the foreign client has an active presence in India (such as a subsidiary, liaison office, or bank accounts in India), you can file a <strong>Summary Suit under Order XXXVII of the Code of Civil Procedure, 1908 (CPC)</strong> in Indian courts. Order 37 is a fast-track debt recovery mechanism for liquidated claims based on written contracts or invoices. The foreign client does not have an automatic right to defend the suit; they must apply for &quot;Leave to Defend&quot; within 10 days of receiving the summons, proving they have a genuine and substantial defense. If they fail to do so, or if their defense is found to be a sham, the court passes a decree in your favor, allowing you to attach their Indian assets.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the foreign client does not have assets in India, you must manage your <strong>FEMA compliance</strong> and <strong>EDPMS tracking</strong> obligations. Under the Foreign Exchange Management Act (FEMA), Indian exporters must realize and repatriate the full value of export services within the statutory period (typically 9 to 15 months). If payments are delayed or defaulted, the invoice remains open on the RBI&apos;s EDPMS portal, exposing the exporter to regulatory penalties. Exporters must document their recovery efforts (such as legal notices, correspondence, and arbitration filings) to show the RBI and AD banks that the non-realization is due to client default rather than an illegal capital transfer:
                      <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li><strong>AD Bank Notification:</strong> Notify your Authorized Dealer (AD) bank of the default, providing copies of the invoices, service contracts, and communication logs.</li>
                        <li><strong>Extension Requests:</strong> Apply for extensions of the realization period, using the documented dispute as a valid reason.</li>
                        <li><strong>Write-Off Provisions:</strong> Under RBI guidelines, AD banks can permit write-offs of unrealized export bills up to specified limits, provided the exporter proves they have taken all reasonable legal steps to recover the debt.</li>
                      </ul>
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      To protect your business from FEMA penalties, our legal team helps you build a robust regulatory compliance dossier. We draft formal notices to your AD bank, document your recovery actions, and provide legal opinion letters certifying the default. This documented recovery trail satisfies regulatory requirements, helping you secure write-offs or extensions and protecting your business from penalties.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If you must file a recovery suit abroad, we help you prepare the documentation. Under Order 38 Rule 5 of the CPC, if you can prove that the debtor is trying to dispose of their assets in India to avoid a decree, you can seek an <strong>Attachment Before Judgment</strong> to freeze their assets before the trial begins. We coordinate with international legal networks to initiate similar asset freezing actions in the client&apos;s home country, protecting your recovery options.
                    </p>
                  </div>
                </section>

                {/* Section 5: International Legal Notices & Escalation */}
                <section id="international-advocate-notice-strategy" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">5. International Legal Notices &amp; Escalation</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The recovery of unpaid international B2B invoices should begin with a structured pre-litigation escalation strategy. This involves building a clear documentary record of your recovery efforts. You should compile all relevant records, including the service contract, Statement of Work (SOW), project timesheets, raised invoices, proof of service delivery, and client communication logs. You should send a formal final demand email to the client&apos;s finance team and senior management, attaching a detailed statement of accounts and requesting a resolution within a specific timeframe.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If internal escalation is ignored, the next step is to serve a formal <strong>Advocate-Signed International Legal Notice</strong>. An international legal notice is a structured legal document sent to the foreign client, setting out the facts of your transaction, detailing the payment default, calculating the interest due under the contract or the Interest Act, 1978, and warning of the civil, regulatory, and arbitration actions that will follow if they fail to comply. Serving a legal notice is a critical step, as it establishes your cause of action and forms part of the regulatory record for your AD bank.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, our legal panel drafts custom international notices tailored to the specific details of your cross-border dispute. We do not use generic templates. Instead, we highlight the contract terms, the governing law provisions, the applicability of international conventions, and the personal liability of the company&apos;s directors. We send the notice via Registered International Speed Post or email to the company&apos;s registered corporate address, and send copies to the personal residential addresses of the directors, ensuring they are personally aware of their legal exposure.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Approximately 85% of international payment disputes are resolved successfully at the legal notice stage. Most foreign corporate entities prefer to clear outstanding invoices rather than face public litigation, credit rating impacts, or regulatory audits that could damage their business operations. If the client responds with a settlement offer, we help you negotiate the terms and draft a binding settlement deed that covers both the payment timeline and the release of any project deliverables, helping you protect your business interests.
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
