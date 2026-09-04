'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

const faqs = [
  {
    question: "Can a tenant send a legal notice to a landlord for not refunding a commercial or residential security deposit?",
    answer: "Yes, both commercial and residential tenants can issue an advocate-drafted statutory legal notice demanding the immediate refund of an unreturned security deposit under the Transfer of Property Act, 1882 and the Indian Contract Act, 1872. The legal demand notice grants the landlord a mandatory 15-day pre-litigation deadline to return the principal deposit along with accrued interest, failing which the tenant can initiate legal proceedings. If the landlord fails to refund the funds within this statutory window, the tenant can institute a Commercial Summary Suit under Order XXXVII of the Code of Civil Procedure or file an action before the designated Rent Authority."
  },
  {
    question: "Can a commercial landlord forfeit the entire security deposit for premature exit during a lock-in period?",
    answer: "A commercial landlord cannot automatically forfeit the entire security deposit during a lock-in period breach unless the landlord proves actual financial loss or damages suffered under Section 74 of the Indian Contract Act, 1872. As affirmed by the Supreme Court of India in Kailash Nath Associates v. DDA and Maula Bux v. Union of India, contractual forfeiture clauses operate as upper penalty ceilings rather than liquidated damages payable without proof of injury. If the landlord re-leases the commercial space or fails to substantiate genuine vacancy losses, withholding the tenant's security deposit constitutes unlawful financial enrichment."
  },
  {
    question: "Can landlords make arbitrary deductions from the security deposit for routine painting and normal wear and tear?",
    answer: "Under Indian tenancy jurisprudence and Section 108(m) of the Transfer of Property Act, 1882, tenants are not liable for routine repainting, minor wall scuffs, or normal environmental wear and tear resulting from standard occupation. Landlords can only deduct costs for tenant-inflicted structural damage, broken fixtures, or unpaid utility bills substantiated by genuine contractor invoices and photographic evidence. Serving a legal notice compels the landlord to produce itemized repair bills or refund the wrongfully withheld maintenance deductions with penal interest."
  },
  {
    question: "What legal remedies are available if a landlord ignores a security deposit legal notice?",
    answer: "If a landlord ignores a statutory legal demand notice or issues a frivolous reply, the tenant can file a fast-track Summary Suit under Order XXXVII of the Code of Civil Procedure, 1908 in the competent Civil or Commercial Court. Commercial tenants with claims exceeding three lakh rupees can also trigger mandatory pre-institution mediation under Section 12A of the Commercial Courts Act, 2015 to secure an expedited recovery decree. Furthermore, individual tenants can approach the Consumer Commission under the Consumer Protection Act, 2019 or lodge an application before the State Rent Tribunal under the Model Tenancy Act."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://legalrecovery.in/send-a-legal-notice/security-deposit-not-refunded-landlord"
      },
      "headline": "Legal Notice to Landlord for Not Giving Back Security Deposit",
      "image": [
        "https://legalrecovery.in/images/og/security-deposit-not-refunded-landlord.jpg"
      ],
      "author": {
        "@type": "Person",
        "name": "Advocate Aman Chawla",
        "url": "https://legalrecovery.in/authors/advocate-aman-chawla"
      },
      "reviewedBy": {
        "@type": "Person",
        "name": "Advocate Sneha Sharma",
        "url": "https://legalrecovery.in/authors/advocate-sneha-sharma"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Legal Recovery",
        "logo": {
          "@type": "ImageObject",
          "url": "https://legalrecovery.in/icon.png"
        }
      },
      "datePublished": "2024-06-15T08:00:00+05:30",
      "dateModified": new Date().toISOString()
    },
    {
      "@type": "Organization",
      "name": "Legal Recovery",
      "url": "https://legalrecovery.in",
      "sameAs": [
        "https://www.linkedin.com/company/legal-recovery-india",
        "https://twitter.com/legalrecoveryin"
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://legalrecovery.in/send-a-legal-notice/security-deposit-not-refunded-landlord",
      "name": "Legal Notice to Landlord for Not Giving Back Security Deposit",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "#quick-answer"]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://legalrecovery.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Send a Legal Notice",
          "item": "https://legalrecovery.in/send-a-legal-notice"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Security Deposit Recovery Notice",
          "item": "https://legalrecovery.in/send-a-legal-notice/security-deposit-not-refunded-landlord"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    },
    {
      "@type": "ItemList",
      "name": "Step-by-Step Procedure to Recover Unrefunded Security Deposit from Landlord",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Collate lease agreement, deposit transaction proofs, and move-out handover inspection records"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Reconcile final utility payments, CAM charges, and itemize disputed deductions or wear-and-tear claims"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Draft an advocate-vetted statutory legal notice under Transfer of Property Act and Indian Contract Act"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Serve the legal demand notice via Speed Post AD, Registered Post, certified email, and WhatsApp"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Initiate pre-institution commercial mediation, Order 37 Summary Suit, or Rent Authority recovery proceedings"
        }
      ]
    },
    {
      "@type": "Product",
      "name": "Legal Notice for Security Deposit Recovery",
      "description": "Advocate-drafted statutory demand notice and legal recovery service for commercial office tenants, retail businesses, and residential renters to recover withheld security deposits from refusing landlords.",
      "brand": {
        "@type": "Organization",
        "name": "Legal Recovery"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "218"
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
            "name": "Rajiv Singhania"
          },
          "reviewBody": "When our commercial landlord in Gurgaon withheld our ₹18.5 Lakh security deposit citing baseless fit-out repainting and lock-in deductions after we vacated our retail showroom, Legal Recovery drafted and served a comprehensive advocate notice under the Transfer of Property Act and Commercial Courts Act. The landlord's counsel contacted us within 11 days of receiving the notice and released 100% of our deposit with interest to avoid commercial summary suit proceedings. Exceptional speed, legal precision, and corporate client support."
        }
      ]
    }
  ]
};

export default function SecurityDepositNotRefundedLandlordClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "statutory-framework", title: "1. Statutory & Contractual Architecture for Security Deposit Recovery" },
    { id: "commercial-vs-residential", title: "2. Commercial Leases vs. Residential Tenancies: Critical Distinctions" },
    { id: "bogus-deductions", title: "3. Legitimate Deductions vs. Unlawful Forfeiture & Bogus Claims" },
    { id: "evidence-checklist", title: "4. Pre-Notice Evidentiary Checklist & Handover Dossier" },
    { id: "step-by-step", title: "5. Step-by-Step Notice Drafting & Statutory Service Protocol" },
    { id: "anatomy-of-notice", title: "6. Anatomy & Key Clauses of an Airtight Legal Demand Notice" },
    { id: "legal-escalation-matrix", title: "7. Post-Notice Judicial Escalation Pathways Matrix" },
    { id: "faqs", title: "8. Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Send a Legal Notice", href: "/send-a-legal-notice" },
    { label: "Security Deposit Recovery Notice", href: "/send-a-legal-notice/security-deposit-not-refunded-landlord" },
  ];

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <Script
        id="page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-[#F8F9FB] min-h-screen font-sans text-slate-800 text-left pt-20 md:pt-24">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#020617] text-white overflow-hidden py-24 md:py-44 border-b border-slate-900">
          <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
          {/* Ambient Red Glow */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#DC2626] opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DC2626] opacity-15 rounded-full translate-x-1/3 translate-y-1/3 z-0 blur-[100px]"></div>

          <div className="relative z-20 container mx-auto px-4 text-center">
            <span className="inline-block text-[#DC2626] text-xs md:text-sm font-black uppercase tracking-widest mb-4 bg-red-950/30 px-4 py-1.5 rounded-full border border-[#DC2626]/20">
              COMMERCIAL &amp; RESIDENTIAL RENTAL DISPUTES
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Legal Notice to Landlord for <span className="text-[#DC2626]">Not Giving Back Security Deposit</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Recover unrefunded commercial lease deposits, office rental advances, and residential tenant security funds. Enforce your statutory rights under the Transfer of Property Act, Model Tenancy Act, and Commercial Courts Act with 18% penal interest.
            </p>
            <button
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer"
            >
              Draft &amp; Send Legal Notice
            </button>
          </div>
        </div>

        {/* Achievements Strip */}
        <div className="bg-white border-b border-slate-200 py-6 relative z-30 shadow-sm">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x divide-slate-100">
              <div className="px-2">
                <div className="text-xl md:text-2xl font-black text-slate-900 mb-1">100CR+</div>
                <div className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-wider">Amount Recovered</div>
              </div>
              <div className="px-2">
                <div className="text-xl md:text-2xl font-black text-slate-900 mb-1">10,000+</div>
                <div className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-wider">Cases Handled</div>
              </div>
              <div className="px-2">
                <div className="flex justify-center items-center gap-1.5 mb-1">
                  <span className="text-xl md:text-2xl font-black text-slate-900">4.7</span>
                  <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                </div>
                <div className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-wider">Google Rating</div>
              </div>
              <div className="px-2">
                <div className="text-xl md:text-2xl font-black text-slate-900 mb-1">15,000+</div>
                <div className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-wider">Customers Counselled</div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-8xl mx-auto px-4 py-10">
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_280px] xl:grid-cols-[280px_1fr_300px] gap-8 xl:gap-10 items-start mt-6">
            
            {/* Left Sidebar - TOC (Desktop) */}
            <div className="hidden lg:block sticky top-28 max-h-[calc(100vh-140px)] overflow-y-auto pr-2 scrollbar-hide">
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
                
                {/* Meta details & Share */}
                <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-100 pb-4 gap-4">
                  <div className="flex flex-wrap items-center text-xs sm:text-sm text-slate-500 gap-3">
                    <span>Written by <Link href="/authors/advocate-aman-chawla" className="font-semibold text-[#DC2626] hover:underline">Advocate Aman Chawla</Link></span>
                    <span className="hidden sm:inline">•</span>
                    <span>Reviewed by <Link href="/authors/advocate-sneha-sharma" className="font-semibold text-[#DC2626] hover:underline">Advocate Sneha Sharma</Link></span>
                    <span className="hidden sm:inline">•</span>
                    <span>Last updated: {currentDate}</span>
                  </div>
                  
                  {/* Share Buttons */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-2">Share:</span>
                    <button
                      type="button"
                      onClick={() =>
                        window.open(
                          'https://twitter.com/intent/tweet?url=https%3A%2F%2Flegalrecovery.in%2Fsend-a-legal-notice%2Fsecurity-deposit-not-refunded-landlord&text=Recover%20unrefunded%20commercial%20and%20residential%20security%20deposits%20from%20landlords%20with%20a%20statutory%20legal%20notice!%20%23SecurityDeposit%20%23TenantRights',
                          '_blank',
                          'noopener,noreferrer,width=600,height=400'
                        )
                      }
                      className="w-8 h-8 rounded-full bg-black text-white hover:opacity-80 flex items-center justify-center transition-opacity cursor-pointer"
                      aria-label="Share on X (Twitter)"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        window.open(
                          'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Flegalrecovery.in%2Fsend-a-legal-notice%2Fsecurity-deposit-not-refunded-landlord',
                          '_blank',
                          'noopener,noreferrer,width=600,height=400'
                        )
                      }
                      className="w-8 h-8 rounded-full bg-[#1877F2] text-white hover:opacity-80 flex items-center justify-center transition-opacity cursor-pointer"
                      aria-label="Share on Facebook"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01z"/></svg>
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        window.open(
                          'https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Flegalrecovery.in%2Fsend-a-legal-notice%2Fsecurity-deposit-not-refunded-landlord&title=Legal%20Notice%20to%20Landlord%20for%20Not%20Giving%20Back%20Security%20Deposit',
                          '_blank',
                          'noopener,noreferrer,width=600,height=400'
                        )
                      }
                      className="w-8 h-8 rounded-full bg-[#0A66C2] text-white hover:opacity-80 flex items-center justify-center transition-opacity cursor-pointer"
                      aria-label="Share on LinkedIn"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                    </button>
                  </div>
                </div>

                {/* Quick Answer */}
                <div id="quick-answer" className="bg-slate-50 border-l-4 border-[#DC2626] p-6 rounded-r-2xl">
                  <h2 className="text-sm font-extrabold text-slate-900 mb-2 uppercase tracking-wide">Quick Answer</h2>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">
                    A legal notice to a landlord for not giving back the security deposit is a formal statutory demand drafted by an advocate that requires the landlord to refund the full unreturned deposit with interest within 15 days of receipt. Under Section 108 of the Transfer of Property Act, 1882, the Indian Contract Act, 1872, and the Model Tenancy Act, landlords cannot arbitrarily forfeit rental deposits or make unreasonable deductions for normal wear and tear once the tenant vacates and hands over vacant possession. Serving a verified legal notice establishes essential pre-litigation proof, entitling the commercial or residential tenant to claim 12% to 18% annual penal interest and initiate a Summary Suit under Order XXXVII of the Code of Civil Procedure or institute proceedings before the competent Rent Authority or Commercial Court.
                  </p>
                </div>

                <section id="statutory-framework" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. Statutory &amp; Contractual Architecture for Security Deposit Recovery
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In both commercial and residential leasing arrangements across India, a security deposit (or interest-free refundable security deposit - IFRSD) is furnished by the tenant to secure the faithful performance of lease covenants, timely rental payments, and the preservation of property infrastructure. Under Indian jurisprudence, a security deposit does not represent consideration or absolute property of the lessor; rather, it constitutes a trust fund held in fiduciary capacity that must be refunded simultaneously upon the surrender of vacant physical possession, subject only to contractually permissible and verifiable adjustments.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The core statutory bedrock governing rental relationships is codified under the <a href="https://www.indiacode.nic.in/handle/123456789/2338" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">Transfer of Property Act, 1882 (TPA)</a>. Under Section 108(q) of the TPA, the tenant is bound to put the lessor into possession of the property upon determination of the lease. Reciprocally, under Section 108(m), the lessee is bound to keep and restore the property in as good condition as it was at the commencement of the lease, <em>&quot;reasonable wear and tear and irresistible force excepted.&quot;</em> Therefore, any unilateral retention by the landlord claiming routine degradation violates express statutory mandates.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Contractual rights and breach remedies are anchored in the <a href="https://www.indiacode.nic.in/handle/123456789/2187" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">Indian Contract Act, 1872</a>. When a landlord refuses to return a security deposit upon valid lease determination, it constitutes an actionable breach of contract under Section 73 (compensation for loss or damage caused by breach of contract) and Section 74 (liquidated damages and penalties). Furthermore, the <a href="https://mohua.gov.in/upload/uploadfiles/files/Model_Tenancy_Act_English.pdf" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">Model Tenancy Act, 2021 (MTA)</a> formulated by the Ministry of Housing and Urban Affairs provides a clear regulatory ceiling, capping security deposits (maximum 2 months for residential and maximum 6 months for commercial properties) and requiring mandatory refund within one month of vacating after agreed deductions.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      For corporate entities, retail chains, and MSME enterprises occupying commercial real estate, high-quantum security deposits (often ranging from ₹10 Lakhs to several Crores) fall under the ambit of commercial disputes governed by the <a href="https://www.indiacode.nic.in/handle/123456789/2157" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">Commercial Courts Act, 2015</a>. Serving a formal advocate-drafted demand notice is the indispensable statutory prerequisite to trigger mandatory Pre-Institution Mediation under Section 12A or institute fast-track recovery proceedings.
                    </p>
                  </div>
                </section>

                <section id="commercial-vs-residential" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. Commercial Leases vs. Residential Tenancies: Critical Distinctions
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      While residential deposit disputes typically involve modest sums and basic wear-and-tear contentions, commercial lease deposit disputes involve complex corporate balance sheet allocations, extensive fit-out capitalization, lock-in period penalty clauses, Goods and Services Tax (GST) adjustments, and Common Area Maintenance (CAM) reconciliations.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <h4 className="font-black text-slate-900 text-base mb-3 flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]"></span>
                          Commercial Lease Architecture
                        </h4>
                        <ul className="text-xs sm:text-sm text-slate-650 space-y-2.5 list-disc list-inside">
                          <li><strong>Substantial Deposit Quantum:</strong> Deposits generally represent 3 to 12 months of rental yield, frequently tying up substantial working capital.</li>
                          <li><strong>Lock-in Periods &amp; Minimum Tenures:</strong> Leases frequently stipulate 3 to 5 year lock-in clauses with heavy penalty covenants that landlords attempt to enforce illegally upon early business exit.</li>
                          <li><strong>Fit-out &amp; Bare Shell Handover:</strong> Handover conditions require reinstatement to &quot;bare-shell&quot; or &quot;warm-shell&quot; condition, triggering extensive disputes over demolition and structural restoration costs.</li>
                          <li><strong>CAM &amp; Utility Auditing:</strong> Complex reconciliations involving chiller charges, power factor penalties, common area diesel generator (DG) fuel backups, and property taxes.</li>
                          <li><strong>GST &amp; Tax Deduction at Source (TDS):</strong> Treatment of GST on forfeited amounts and issuance of TDS credit certificates under Section 194-I of the Income Tax Act.</li>
                        </ul>
                      </div>

                      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <h4 className="font-black text-slate-900 text-base mb-3 flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]"></span>
                          Residential Tenancy Architecture
                        </h4>
                        <ul className="text-xs sm:text-sm text-slate-650 space-y-2.5 list-disc list-inside">
                          <li><strong>Fixed Deposit Caps:</strong> Typically capped at 2 to 3 months of rent in modern metropolitan leases under Model Tenancy guidelines (though Bengaluru/Mumbai historically demanded 6-10 months).</li>
                          <li><strong>Informal Move-out Protocols:</strong> Handover often conducted verbally without joint inspection reports, leaving tenants vulnerable to unproven post-vacation claims.</li>
                          <li><strong>Routine Repainting Deductions:</strong> Landlords routinely attempt automatic 1-month rent deductions for painting and deep cleaning despite zero tenant negligence.</li>
                          <li><strong>Consumer Protection Access:</strong> Residential tenants qualify as consumers under the <a href="https://consumeraffairs.nic.in/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">Consumer Protection Act, 2019</a> for deficiency in service, whereas commercial enterprises must pursue civil/commercial court remedies.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="bogus-deductions" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    3. Legitimate Deductions vs. Unlawful Forfeiture &amp; Bogus Claims
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Landlords frequently invent unjustified pretexts to retain tenant capital. Indian courts have consistently differentiated between legitimate contractual offsets and unlawful, arbitrary deductions.
                    </p>

                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#DC2626] mt-2 shrink-0"></div>
                        <div>
                          <h4 className="font-extrabold text-slate-900 text-sm">Lock-in Period Forfeiture vs. Actual Loss Proof</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed mt-1">
                            In landmark judgments including <em>Kailash Nath Associates v. Delhi Development Authority (2015) 4 SCC 136</em> and <em>Maula Bux v. Union of India (1969) 2 SCC 554</em>, the <a href="https://main.sci.gov.in/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">Supreme Court of India</a> held that under Section 74 of the Indian Contract Act, damages can only be awarded when actual loss is proved. A landlord cannot automatically forfeit the entire deposit for early exit if the premises were promptly re-let or if the landlord suffered no real financial loss.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#DC2626] mt-2 shrink-0"></div>
                        <div>
                          <h4 className="font-extrabold text-slate-900 text-sm">Routine Painting &amp; Normal Wear and Tear</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed mt-1">
                            Under Section 108(m) of the TPA, tenants are explicitly exempted from repairing natural degradation resulting from standard usage and passage of time. Repainting costs, minor floor scuffs, and aging fixtures are the owner&apos;s capital maintenance responsibility and cannot be unilaterally deducted from the security deposit without express contractual agreement and proof of abnormal damage.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#DC2626] mt-2 shrink-0"></div>
                        <div>
                          <h4 className="font-extrabold text-slate-900 text-sm">Absence of Third-Party Repair Invoices</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed mt-1">
                            Any lawful deduction requires strict documentary substantiation, including GST-compliant contractor repair invoices, material purchase vouchers, and comparative pre-and-post handover photographic proof. Unsubstantiated estimates or self-declared deduction figures are routinely rejected by civil courts and consumer commissions.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#DC2626] mt-2 shrink-0"></div>
                        <div>
                          <h4 className="font-extrabold text-slate-900 text-sm">CAM &amp; Electricity Surcharge Overbilling</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed mt-1">
                            In commercial buildings and tech parks, landlords often withhold security deposits claiming pending CAM reconciliations or power tariff escalations. The tenant has the absolute legal right to demand certified utility sub-meter logs and audited building maintenance statements before any offset is finalized.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="evidence-checklist" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. Pre-Notice Evidentiary Checklist &amp; Handover Dossier
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Prior to issuing an advocate legal demand notice, assembling a comprehensive documentary dossier is vital to establish uncontroverted proof of compliance, vacant handover, and financial disbursement.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <h4 className="font-black text-slate-900 text-sm mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#DC2626]"></span>
                          Executed Lease &amp; Deposit Proofs
                        </h4>
                        <ul className="text-xs sm:text-sm text-slate-650 space-y-2 list-disc list-inside">
                          <li>Registered or notarized Lease / Leave and License Agreement</li>
                          <li>Bank statement / NEFT / RTGS receipts showing deposit transfer</li>
                          <li>Signed deposit acknowledgment receipt from landlord</li>
                          <li>TDS certificates (Form 16A) for commercial rental payments</li>
                        </ul>
                      </div>

                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <h4 className="font-black text-slate-900 text-sm mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#DC2626]"></span>
                          Termination &amp; Handover Records
                        </h4>
                        <ul className="text-xs sm:text-sm text-slate-650 space-y-2 list-disc list-inside">
                          <li>Formal lease termination / vacation notice served by tenant</li>
                          <li>Signed Key Handover Protocol and Move-out Inspection Sheet</li>
                          <li>High-resolution date-stamped photographs/videos of vacant premises</li>
                          <li>Society / Building Management Move-out Gate Pass and NOC</li>
                        </ul>
                      </div>

                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <h4 className="font-black text-slate-900 text-sm mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#DC2626]"></span>
                          Utility &amp; CAM Clearance Proofs
                        </h4>
                        <ul className="text-xs sm:text-sm text-slate-650 space-y-2 list-disc list-inside">
                          <li>Paid electricity, water, and piped gas utility bills up to exit date</li>
                          <li>Final paid maintenance receipt from building RWA / facility management</li>
                          <li>Broadband and telecom equipment surrender receipts</li>
                          <li>Sub-meter final meter reading log signed by building engineer</li>
                        </ul>
                      </div>

                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <h4 className="font-black text-slate-900 text-sm mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#DC2626]"></span>
                          Written Refund Demands &amp; Refusals
                        </h4>
                        <ul className="text-xs sm:text-sm text-slate-650 space-y-2 list-disc list-inside">
                          <li>Email communications requesting deposit refund with bank details</li>
                          <li>WhatsApp chats acknowledging handover and promising refunds</li>
                          <li>Written records of baseless deduction claims or refusal to pay</li>
                          <li>Certificate under Section 63 Bharatiya Sakshya Adhiniyam, 2023 for digital evidence</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="step-by-step" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. Step-by-Step Notice Drafting &amp; Statutory Service Protocol
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Serving an advocate-vetted legal demand notice requires strict adherence to procedural protocols to ensure unassailable evidentiary admissibility in civil, commercial, or consumer courts.
                    </p>

                    <div className="space-y-6 my-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">1</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Contractual Audit &amp; Handover Reconciliation</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            Audit the tenancy agreement clauses regarding security deposit refund timelines, notice periods, and dispute resolution mechanisms. Compute the exact net refund amount payable after subtracting any mutually agreed and verified final utility dues.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">2</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Advocate Drafting on Formal Letterhead</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            Engage a legal counsel to draft the formal statutory notice on advocate letterhead. The notice articulates the tenancy history, proves complete compliance by the tenant, demonstrates surrender of vacant peaceful possession, refutes frivolous deduction pretexts, and asserts the legal liability of the landlord.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">3</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Inclusion of Penal Interest &amp; Damages Claims</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            Claim statutory commercial penal interest at 12% to 18% per annum from the date of physical property handover until actual realization, alongside compensation for illegal financial retention, corporate working capital disruption, and advocate legal notice expenses.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">4</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Stipulation of 15-Day Mandatory Compliance Window</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            Grant the landlord a definitive 15-day cure period from the date of notice receipt to remit the full unreturned security deposit directly into the tenant&apos;s designated corporate or personal bank account.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">5</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Multi-Channel Verifiable Dispatch &amp; Tracking</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            Serve the signed legal notice via India Post Registered Post with Acknowledgment Due (RPAD) and Speed Post to the landlord&apos;s registered and residential addresses. Concurrently dispatch digitally signed PDF copies via registered email and WhatsApp with delivery confirmation logs to establish constructive service.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="anatomy-of-notice" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    6. Anatomy &amp; Key Clauses of an Airtight Legal Demand Notice
                  </h2>
                  
                  {/* Infographic Image */}
                  <div className="my-8 rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                    <img src="/images/og/security-deposit-not-refunded-landlord.jpg" alt="Legal Notice to Landlord for Security Deposit Recovery Process Infographic" className="w-full h-auto object-cover" />
                  </div>

                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A rigorously drafted legal notice eliminates potential defense arguments in subsequent litigation. An airtight security deposit demand notice must contain the following core clauses:
                    </p>
                    <ul className="list-disc list-inside text-sm md:text-base text-slate-650 space-y-3">
                      <li><strong>Advocate Authority Recital:</strong> Express recital stating the notice is issued under the specific instructions, authorization, and retainer of the tenant.</li>
                      <li><strong>Tenancy &amp; Consideration Particulars:</strong> Exact details of the Lease / License Agreement date, premise description, monthly rental amount, security deposit amount paid, and transaction reference numbers.</li>
                      <li><strong>Lease Determination &amp; Possession Handover:</strong> Clear timeline establishing when termination notice was served, date of vacant peaceful possession handover, return of physical keys, and execution of handover protocols.</li>
                      <li><strong>Proof of Zero Arrears:</strong> Categorical declaration supported by receipts showing that all electricity, water, CAM, and ancillary maintenance bills were paid in full by the tenant up to the date of vacation.</li>
                      <li><strong>Rebuttal of Unlawful Deductions:</strong> Explicit legal rebuttal under Section 108(m) TPA rejecting unproven painting charges, routine wear-and-tear claims, or unauthorized lock-in penalty forfeitures.</li>
                      <li><strong>Specific Financial Demand with Penal Interest:</strong> Quantified financial demand specifying the exact principal deposit plus 18% p.a. commercial interest and legal drafting fees.</li>
                      <li><strong>Litigation Warning:</strong> Explicit warning of immediate institution of Summary Suits under Order 37 CPC, Commercial Court claims, or Consumer Forum complaints holding the landlord personally liable for all legal costs and damages.</li>
                    </ul>
                  </div>
                </section>

                <section id="legal-escalation-matrix" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    7. Post-Notice Judicial Escalation Pathways Matrix
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Over 70% of defaulting landlords settle security deposit dues within the 15-day notice period to avoid public litigation and legal expenses. When a landlord refuses to comply, the tenant can deploy the following targeted judicial escalation pathways:
                    </p>

                    <div className="overflow-x-auto my-6">
                      <table className="w-full text-left border-collapse text-xs md:text-sm border border-slate-200">
                        <thead>
                          <tr className="bg-slate-100 text-slate-900 font-extrabold border-b border-slate-200">
                            <th className="p-3">Legal Forum / Pathway</th>
                            <th className="p-3">Governing Law</th>
                            <th className="p-3">Target Tenant Profile</th>
                            <th className="p-3">Average Resolution Timeline</th>
                            <th className="p-3">Key Strategic Advantage</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-650">
                          <tr>
                            <td className="p-3 font-bold text-slate-900">Commercial Summary Suit</td>
                            <td className="p-3">Order 37 CPC / Commercial Courts Act, 2015</td>
                            <td className="p-3">Commercial office &amp; retail leases &ge; ₹3 Lakhs</td>
                            <td className="p-3">6 to 12 Months</td>
                            <td className="p-3">Defendant must apply for leave to defend; instant decree if defense is frivolous.</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="p-3 font-bold text-slate-900">Pre-Institution Mediation</td>
                            <td className="p-3">Section 12A, Commercial Courts Act</td>
                            <td className="p-3">Corporate tenants &amp; business entities</td>
                            <td className="p-3">1 to 3 Months</td>
                            <td className="p-3">Court-annexed fast settlement with legal enforceability equal to a court decree.</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">Consumer Commission</td>
                            <td className="p-3">Consumer Protection Act, 2019</td>
                            <td className="p-3">Residential tenants &amp; PG / coliving occupants</td>
                            <td className="p-3">6 to 14 Months</td>
                            <td className="p-3">Nominal court fee; award of mental harassment damages and litigation costs.</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="p-3 font-bold text-slate-900">Rent Authority / Tribunal</td>
                            <td className="p-3">Model Tenancy Act / State Rent Acts</td>
                            <td className="p-3">Registered tenancy agreements</td>
                            <td className="p-3">2 to 6 Months</td>
                            <td className="p-3">Fast-track administrative recovery with statutory deposit refund mandates.</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">Sole Arbitrator Proceeding</td>
                            <td className="p-3">Arbitration &amp; Conciliation Act, 1996</td>
                            <td className="p-3">Institutional &amp; tech-park commercial leases</td>
                            <td className="p-3">4 to 9 Months</td>
                            <td className="p-3">Binding arbitral award enforceable as a civil court decree under Section 36.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    8. Frequently Asked Questions
                  </h2>
                  <div className="mt-8 space-y-4">
                    {faqs.map((faq, idx) => {
                      const faqId = `faq-${idx}`;
                      const isExpanded = expandedFaqs.includes(faqId);
                      return (
                        <div
                          key={idx}
                          className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm transition-all duration-200 hover:border-slate-350"
                        >
                          <button
                            onClick={() => toggleFaq(idx)}
                            className="flex justify-between items-center w-full text-left p-4 font-bold text-sm text-slate-900 hover:bg-slate-50/50 focus:outline-none transition-colors cursor-pointer"
                          >
                            <span>{faq.question}</span>
                            <span className={`transform transition-transform duration-200 shrink-0 ml-3 text-slate-400 ${isExpanded ? 'rotate-180' : ''}`}>
                              ▼
                            </span>
                          </button>
                          {isExpanded && (
                            <div className="px-4 pb-4 pt-3 text-xs sm:text-sm text-slate-650 leading-relaxed pl-6 border-t border-slate-100 bg-[#F8F9FB]/40">
                              {faq.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>

                <div className="pt-8 border-t border-slate-100">
                  <p className="text-xs text-slate-500">
                    <span className="font-semibold text-slate-700">References:</span> [1] Transfer of Property Act, 1882 (Section 108 Rights and Liabilities of Lessor and Lessee) • [2] Indian Contract Act, 1872 (Section 73 Compensation for Loss or Damage &amp; Section 74 Penalty Clauses) • [3] Ministry of Housing and Urban Affairs Model Tenancy Act, 2021 • [4] Commercial Courts Act, 2015 (Pre-Institution Mediation and Settlement under Section 12A) • [5] Supreme Court of India (Kailash Nath Associates v. DDA &amp; Maula Bux v. Union of India) • [6] National Consumer Disputes Redressal Commission (Tenancy Security Deposit Deficiency Jurisprudence).
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column Sidebar */}
            <div className="space-y-8 sticky top-28">
              <div className="bg-[#111827] p-6 rounded-2xl shadow-sm text-white border border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-xl pointer-events-none" />
                <h3 className="text-sm font-black mb-3">Recover Landlord Security Deposit</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  Partner with senior property and commercial recovery advocates. We draft statutory demand notices, challenge illegal deductions, compute 18% penal interest, execute verifiable postal &amp; digital dispatch, and handle court recovery.
                </p>
                <button
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="block w-full bg-[#DC2626] text-white text-center py-3 rounded-xl text-xs font-bold hover:bg-[#B91C1C] transition-colors mb-3 cursor-pointer"
                >
                  Start Notice Intake
                </button>
              </div>

              {/* Client Reviews */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-sm font-black mb-1 text-slate-900">Client Reviews</h3>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-[#F59E0B] text-sm">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                  <span className="text-xs font-bold text-slate-700">4.9/5</span>
                  <span className="text-xs text-slate-500">(218 reviews)</span>
                </div>
                <div className="border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600">RS</div>
                    <span className="text-xs font-bold text-slate-800">Rajiv Singhania</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    &quot;When our commercial landlord in Gurgaon withheld our ₹18.5 Lakh security deposit citing baseless fit-out repainting and lock-in deductions after we vacated our retail showroom, Legal Recovery drafted and served a comprehensive advocate notice under the Transfer of Property Act and Commercial Courts Act. The landlord&apos;s counsel contacted us within 11 days of receiving the notice and released 100% of our deposit with interest to avoid commercial summary suit proceedings. Exceptional speed, legal precision, and corporate client support.&quot;
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Related Services / Interlinking (Topical Authority) */}
          <div className="mt-16 mb-8 max-w-5xl mx-auto">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center md:text-left">More Consumer &amp; Rental Protection Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/services/security-deposits-and-rental-recoveries" className="group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#DC2626] hover:shadow-md transition-all">
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mb-2">Security Deposits &amp; Rental Recoveries</h3>
                <p className="text-xs text-slate-500 line-clamp-2">Comprehensive legal framework to recover withheld rent advances and commercial tenancy deposits across India.</p>
              </Link>
              <Link href="/legal-notice-landlord-unreasonable-security-deposit-deductions" className="group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#DC2626] hover:shadow-md transition-all">
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mb-2">Unreasonable Landlord Deductions</h3>
                <p className="text-xs text-slate-500 line-clamp-2">How to challenge bogus repainting, maintenance, and deep cleaning deductions under Section 108 TPA.</p>
              </Link>
              <Link href="/legal-notice-to-pg-owner-for-security-deposit-refund" className="group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#DC2626] hover:shadow-md transition-all">
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mb-2">PG &amp; Hostel Deposit Refund Notice</h3>
                <p className="text-xs text-slate-500 line-clamp-2">Legal notice roadmap for students and young professionals to recover paying guest security deposits.</p>
              </Link>
            </div>
          </div>

          {/* Company Section */}
          <div className="mt-16 max-w-5xl mx-auto mb-10">
            <div className="bg-white border-2 border-slate-100 rounded-[2rem] p-8 md:p-12 shadow-sm border-[#DC2626]">
              <div className="mb-8">
                <img src="/lrlogo.svg" alt="LegalRecovery" className="h-8 sm:h-10 w-auto object-contain" />
              </div>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-10 max-w-3xl font-medium">
                Legal Recovery is India&apos;s trusted consumer protection and commercial debt resolution platform. Founded in 2022 and headquartered in New Delhi, Legal Recovery has counselled 15,000+ businesses, financial institutions, and consumers on debt recovery, commercial contract breaches, and loan defaults. Legal Recovery accelerates out-of-court settlements and connects you with top verified panel advocates.
              </p>

              <div className="border-t border-slate-100 pt-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Solutions:</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Link href="/send-a-legal-notice" className="py-4 px-4 rounded-xl border-2 border-[#DC2626] text-[#DC2626] font-bold text-sm hover:bg-[#DC2626] hover:text-white transition-colors cursor-pointer bg-white text-center flex items-center justify-center">
                    Send Legal Notice
                  </Link>
                  <Link href="/services/vendor-and-invoice-recoveries" className="py-4 px-4 rounded-xl border-2 border-[#DC2626] text-[#DC2626] font-bold text-sm hover:bg-[#DC2626] hover:text-white transition-colors cursor-pointer bg-white text-center flex items-center justify-center">
                    Vendor Invoice Recovery
                  </Link>
                  <Link href="/how-to-file-consumer-complaint-india" className="py-4 px-4 rounded-xl border-2 border-[#DC2626] text-[#DC2626] font-bold text-sm hover:bg-[#DC2626] hover:text-white transition-colors cursor-pointer bg-white text-center flex items-center justify-center">
                    Consumer Complaints
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {isPaymentModalOpen && (
        <PaymentModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} />
      )}
    </>
  );
}
