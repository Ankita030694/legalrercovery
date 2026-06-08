'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import TableOfContents from '@/components/TableOfContents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faUser, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import {
  Check,
  Shield,
  Briefcase,
  IndianRupee,
  AlertCircle,
  Clock,
  Timer,
  Users,
  CheckCircle,
  Lightbulb,
  Upload,
  FileSearch,
  Send,
  Handshake,
  Receipt,
  FileText,
  Key
} from 'lucide-react';

// FAQs Interface
interface FAQ {
  id: string;
  question: string;
  answer: string;
}

// Review Interface
interface Review {
  id: string;
  name: string;
  rating: number;
  review: string;
}

export default function RentalRecoveryClient() {
  const [currentUrl, setCurrentUrl] = useState('');
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const toggleFaq = (faqId: string) => {
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const handleShare = (platform: string) => {
    const title = "Recover Stuck Security Deposits & File Rental Recoveries Legally in India";
    let shareUrl = '';

    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(currentUrl)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
        break;
      default:
        return;
    }
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  // Table of Contents sections
  const tocSections = useMemo(() => [
    { id: "service-overview", title: "1. Service Overview" },
    { id: "coverage-details", title: "2. What We Help You Recover" },
    { id: "notice-strategy", title: "3. Our 3+1 Notice Strategy" },
    { id: "legal-framework", title: "4. The Indian Statutory Shield" },
    { id: "why-online-templates-fail", title: "5. Why Online Templates Fail" },
    { id: "service-pricing", title: "6. Transparent Flat Pricing" },
    { id: "documentation-needed", title: "7. Evidentiary Checklist" },
    { id: "faqs", title: "8. Frequently Asked Questions" },
    { id: "reviews", title: "9. Client Testimonials" }
  ], []);

  // FAQs List (10 comprehensive, detailed Q&As)
  const faqs: FAQ[] = useMemo(() => [
    {
      id: "faq-1",
      question: "What is the limitation period to file a civil recovery suit for security deposit or unpaid rent in India?",
      answer: "Under the Limitation Act, 1963, the limitation period to file a civil recovery suit (including summary suits under Order 37 of the CPC) for recovering a security deposit or claiming unpaid rent arrears is three (3) years. This period starts counting from the exact date the cause of action arose. For a tenant, it is the day of vacating the property or when the landlord formally refused the refund. For a landlord, it is the date when the rent payment became defaulted. Claims delayed beyond three years are legally barred unless there is a written acknowledgment of debt by the opposite party under Section 18 of the Limitation Act, which resets the limitation clock."
    },
    {
      id: "faq-2",
      question: "What is the security deposit cap under the Model Tenancy Act, 2021?",
      answer: "The Model Tenancy Act (MTA), 2021, introduces standardized regulatory caps on security deposits to protect tenants from excessive upfront demands. Under Section 11 of the MTA, the security deposit to be paid by the tenant in advance cannot exceed: 1) A maximum of two (2) months' rent in case of residential premises, and 2) A maximum of six (6) months' rent in case of non-residential (commercial) premises. These limits are binding in all states that have formally adopted and notified the Model Tenancy rules, ensuring landlords cannot arbitrarily demand larger advances."
    },
    {
      id: "faq-3",
      question: "Can a landlord legally deduct painting charges or general cleaning from the security deposit?",
      answer: "Generally, no, unless it was explicitly and clearly agreed upon in the signed rent agreement. Under the Model Tenancy Act and standard rent laws, a landlord is only entitled to make deductions for actual damages that exceed 'normal wear and tear' or for outstanding rent/utility bills. Routine maintenance like wall painting, minor hinge adjustments, deep cleaning, or natural discoloration of walls due to weather conditions are classified as normal wear and tear and are the landlord's statutory maintenance responsibilities. Deducting these without a specific contractual clause constitutes an unfair practice and a breach of contract."
    },
    {
      id: "faq-4",
      question: "What legal options do landlords have if a tenant refuses to pay rent and refuses to vacate?",
      answer: "If a tenant defaults on rent and refuses to vacate, self-help measures like changing locks, cutting off electricity/water, or physical threats are strictly illegal and expose the landlord to severe criminal charges. The legal recourse is: 1) Serve a formal, advocate-backed legal notice demanding payment of rent arrears and termination of lease within 15 days, 2) If the tenant doesn't comply, file an eviction petition before the Rent Authority (in MTA states) or file a Civil Eviction Suit in the local Small Causes or Civil Court, and 3) Claim double the monthly rent as mesne profits (penalty for illegal holdover) for the period of unauthorized occupation after lease termination."
    },
    {
      id: "faq-5",
      question: "Is an unregistered lease agreement legally enforceable for recovering deposits or rent?",
      answer: "Under the Registration Act, 1908, any lease agreement of one year (12 months) or more must be compulsorily registered. An unregistered lease deed for 12 months or more is inadmissible as primary evidence in court for enforcing lease terms. However, it can still be used as 'collateral evidence' to prove the existence of a landlord-tenant relationship and the actual physical possession. If your rent agreement is for 11 months, registration is not mandatory under central law (unless specified by state amendments), making it fully enforceable in civil courts to claim deposits or rent arrears."
    },
    {
      id: "faq-6",
      question: "Can a landlord withhold the security deposit if the tenant vacates before the lock-in period ends?",
      answer: "If the rent agreement contains a mutual 'lock-in period' (e.g., 6 or 11 months) and the tenant vacates before its expiry, the landlord's right to withhold the deposit depends entirely on the agreement's terms. If the agreement explicitly states that vacating early will result in 'forfeiture of the security deposit' as liquidated damages, the landlord can withhold it. However, if there is no such forfeiture clause, the landlord cannot unilaterally keep the deposit; they must refund the deposit and can only sue the tenant to recover actual financial losses suffered due to the early termination, provided they made reasonable efforts to find a new tenant."
    },
    {
      id: "faq-7",
      question: "How do I approach the Rent Authority under the Model Tenancy Act, 2021?",
      answer: "In states that have established Rent Authorities under the MTA (such as Uttar Pradesh, Tamil Nadu, Andhra Pradesh), landlords and tenants can file disputes online or physically before the Rent Authority. The process is: 1) File an application along with a copy of the registered tenancy agreement and evidentiary documents (bank statements, notices), 2) The Rent Authority registers the case and summons the opposite party, 3) It attempts to resolve the dispute through summary inquiries. If the dispute is not settled, the authority passes a binding order. Appeals against Rent Authority orders can be filed before the Rent Court within 30 days."
    },
    {
      id: "faq-8",
      question: "What is Mesne Profits, and when can a landlord demand it?",
      answer: "Mesne Profits (pronounced 'mean') represent the compensation or damages that a landlord is legally entitled to recover from a tenant who remains in wrongful, unauthorized possession of the property after their tenancy has been legally terminated. Under Section 2(12) of the Code of Civil Procedure, 1908, when a lease is terminated via notice and the tenant fails to hand over keys, the landlord can demand mesne profits, which are computed based on the prevailing market rent of the area or as a penalty (often twice the original rent) to compensate for the loss of opportunity."
    },
    {
      id: "faq-9",
      question: "Can a tenant adjust the final months' rent against the security deposit?",
      answer: "Legally, a tenant cannot adjust the final months' rent against the security deposit unless the landlord gives written consent or it is explicitly permitted in the lease deed. The security deposit is held to secure the landlord against unpaid utilities, actual property damages, and outstanding bills discovered *after* the tenant vacates. Adjusting it unilaterally constitutes a breach of contract, and the landlord can legally demand the rent and levy late payment penalties as per the agreement terms."
    },
    {
      id: "faq-10",
      question: "What should I do if my landlord has moved out of the country or is an NRI?",
      answer: "If your landlord is an Non-Resident Indian (NRI) or has moved abroad and is unresponsive regarding your deposit refund, you can still pursue legal action: 1) Serve the advocate-backed legal notice to their registered email address, their power of attorney (POA) holder in India, and their foreign physical address, 2) Send physical notices to the property address you rented, as that is the local address of the landlord's asset, and 3) If ignored, initiate a summary suit in the civil court having jurisdiction over the property. The court can order attachment of the property or the rent from other tenants to satisfy your decree."
    }
  ], []);

  // Client Reviews List
  const reviews: Review[] = useMemo(() => [
    {
      id: "rev-1",
      name: "Rohan & Shruti Sen (Tenants, Pune)",
      rating: 5,
      review: "Our landlord withheld our security deposit of ₹75,000, claiming arbitrary painting charges of ₹45,000 and cleaning fees of ₹10,000 for normal wear and tear. We hired LegalRecovery. Their practicing advocate drafted a 3+1 notice pipeline citing the Model Tenancy Act guidelines. The landlord returned our entire deposit of ₹75,000 within 5 days of the first notice."
    },
    {
      id: "rev-2",
      name: "Abhinav Hegde (Commercial Landlord, Bengaluru)",
      rating: 5,
      review: "A commercial corporate tenant vacated my office premises in Indiranagar without clearing 3 months' rent and electricity bills amounting to ₹4.2 Lakhs. The triple-escalation notice campaign launched by LegalRecovery reached the directors and institutional partners. The company settled the entire arrears along with delay interest within 12 days."
    },
    {
      id: "rev-3",
      name: "Meera Fernandez (Homeowner, Chennai)",
      rating: 5,
      review: "Tenants damaged my residential apartment's marble flooring, broke modular kitchen fittings, and vacated quietly. The cost of actual repairs was ₹1.8 Lakhs. LegalRecovery prepared a meticulous pre-litigation warning along with a criminal police complaint draft for mischief and damage to property. The tenants immediately transferred the full repair cost."
    },
    {
      id: "rev-4",
      name: "Vikram Malhotra (IT Professional, Gurgaon)",
      rating: 5,
      review: "I paid a booking advance of ₹50,000 for a rented villa, but the deal fell through because the landlord could not clear structural repairs before move-in. The landlord went silent. LegalRecovery sent an advocate notice outlining the Indian Contract Act. The landlord refunded my ₹50,000 advance with interest within 48 hours. Phenomenal speed!"
    }
  ], []);

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Security Deposits & Rental Recoveries", href: "/services/security-deposits-and-rental-recoveries" },
  ];

  // Schema structured JSON-LD data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.legalrecovery.in/services/security-deposits-and-rental-recoveries#article",
        "isPartOf": {
          "@id": "https://www.legalrecovery.in/services/security-deposits-and-rental-recoveries"
        },
        "headline": "Recover Stuck Security Deposits & File Rental Recoveries Legally in India",
        "description": "Exhaustive legal guide on recovering unreturned rent security deposits, unpaid rent arrears, commercial lease defaults, and property damage recoveries in India under the Model Tenancy Act, 2021. 3 progressive notices, 1 police complaint draft, attorney-verified.",
        "image": "https://www.legalrecovery.in/blog_money_recovery.png",
        "datePublished": "2026-05-27T00:00:00Z",
        "dateModified": "2026-05-27T00:00:00Z",
        "author": {
          "@type": "Organization",
          "name": "Team LegalRecovery",
          "url": "https://www.legalrecovery.in/about"
        },
        "publisher": {
          "@type": "Organization",
          "name": "LegalRecovery",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.legalrecovery.in/logo.png"
          }
        },
        "mainEntityOfPage": "https://www.legalrecovery.in/services/security-deposits-and-rental-recoveries"
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.legalrecovery.in/services/security-deposits-and-rental-recoveries#faq",
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
        "@type": "BreadcrumbList",
        "@id": "https://www.legalrecovery.in/services/security-deposits-and-rental-recoveries#breadcrumbs",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.legalrecovery.in/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://www.legalrecovery.in/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Security Deposits & Rental Recoveries",
            "item": "https://www.legalrecovery.in/services/security-deposits-and-rental-recoveries"
          }
        ]
      },
      {
        "@type": "Product",
        "@id": "https://www.legalrecovery.in/services/security-deposits-and-rental-recoveries#service",
        "name": "Security Deposit & Rental Recovery Service",
        "description": "Professional money recovery for withheld security deposits, unpaid rent, commercial lease breaches, and property damage disputes using top-tier advocate-signed notice campaigns.",
        "brand": {
          "@type": "Organization",
          "name": "LegalRecovery",
          "url": "https://www.legalrecovery.in"
        },
        "areaServed": "IN",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "52"
        },
        "review": reviews.map(rev => ({
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": rev.name
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": String(rev.rating),
            "bestRating": "5"
          },
          "reviewBody": rev.review
        }))
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB] text-[#111827] font-sans antialiased">
      {/* Dynamic JSON-LD injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Ambient Lights */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] red-radial-glow -z-10 pointer-events-none rounded-full blur-[100px] opacity-40" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] red-radial-glow -z-10 pointer-events-none rounded-full blur-[80px] opacity-25" />

      {/* ================= HERO SECTION ================= */}
      <div className="pt-32 pb-12 md:pb-24 px-4 sm:px-6 md:px-16 max-w-8xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-12">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <span className="text-[13.5px] font-bold text-[#DC2626] uppercase tracking-[0.02em] mb-4 select-text">
              Professional Rental & Security Deposit Recovery
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-[50px] font-black tracking-tight text-[#111827] leading-[1.1] mb-6 select-text">
              Deposit Stuck? <br />
              Unpaid Rent? <br />
              <span className="text-[#DC2626]">Recover It Legally.</span>
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#4B5563] font-medium leading-[1.6] mb-6 max-w-xl select-text">
              Reclaim stuck rent security deposits, recover outstanding commercial lease arrears, settle painting/cleaning deduction disputes, and penalize tenants who caused structural damages. We serve 3 advocate-signed notices and provide 1 formal police complaint draft.
            </p>

            {/* High-Trust Tagline Banner */}
            <div className="flex items-center gap-2 bg-[#E6F4EA] text-[#137333] border border-[#A3E2AB]/40 rounded-lg px-3.5 py-2 mb-8 select-text">
              <Check className="w-4 h-4 text-[#137333] stroke-[3.5] shrink-0" />
              <span className="text-[12px] sm:text-[13px] font-extrabold tracking-tight">
                No Court Visits. No Commissions. We handle it for you.
              </span>
            </div>

            {/* CTA Anchor button linking to the pricing section */}
            <div className="w-full sm:w-auto mb-6 select-none">
              <Link
                href="/contact"
                className="inline-block w-full sm:w-auto text-center px-8 py-4 text-[14px] sm:text-[15px] font-black text-white bg-[#DC2626] hover:bg-[#B91C1C] rounded-[12px] shadow-[0_4px_16px_rgba(220,38,38,0.15)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                Start My Recovery - ₹999
              </Link>
            </div>
          </div>

          {/* Right Image/Dashboard Column */}
          <div className="lg:col-span-6 select-none w-full">
            <div className="w-full bg-[#FFFFFF] rounded-3xl border border-[#E5E7EB] shadow-[0_20px_50px_rgba(0,0,0,0.06)] p-4 sm:p-6 md:p-8 flex flex-col gap-6 relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/5 rounded-full blur-xl pointer-events-none" />
              
              {/* Active Tab visual header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#E5E7EB]/60">
                <div className="flex flex-col">
                  <span className="text-[12px] font-black text-[#111827]">Rental Dispute Dashboard</span>
                  <span className="text-[9.5px] text-[#9CA3AF] font-bold mt-0.5">Disputed Case: REC-RENT-2026</span>
                </div>
                <span className="px-2.5 py-1 text-[9.5px] font-black text-[#03543F] bg-[#DEF7EC] border border-emerald-200/50 rounded-full uppercase tracking-wider">
                  Active Notice Campaign
                </span>
              </div>

              {/* Recovery Status Tracker */}
              <div className="bg-[#F9FAFB] rounded-2xl border border-[#E5E7EB] p-4 flex flex-col gap-4 relative">
                
                {/* Horizontal status timeline */}
                <div className="relative pt-3 pb-2 flex items-center justify-between">
                  {/* Green progress bar */}
                  <div className="absolute left-3.5 right-3.5 top-[23px] h-[2.5px] bg-[#E5E7EB]">
                    <div className="w-[78%] h-full bg-[#10B981]"></div>
                  </div>

                  {/* Nodes */}
                  <div className="flex flex-col items-center gap-1.5 relative z-10">
                    <div className="w-6 h-6 rounded-full bg-[#10B981] text-white flex items-center justify-center shadow-sm">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-[9px] font-bold text-[#111827]">Submitted</span>
                  </div>

                  <div className="flex flex-col items-center gap-1.5 relative z-10">
                    <div className="w-6 h-6 rounded-full bg-[#10B981] text-white flex items-center justify-center shadow-sm">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-[9px] font-bold text-[#111827]">Notice 1 Sent</span>
                  </div>

                  <div className="flex flex-col items-center gap-1.5 relative z-10">
                    <div className="w-6 h-6 rounded-full bg-[#10B981] text-white flex items-center justify-center shadow-sm">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-[9px] font-bold text-[#111827]">Notice 2 Sent</span>
                  </div>

                  <div className="flex flex-col items-center gap-1.5 relative z-10">
                    <div className="w-6 h-6 rounded-full bg-white border-2 border-[#9CA3AF] text-[#9CA3AF] flex items-center justify-center shadow-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
                    </div>
                    <span className="text-[9px] font-bold text-[#4B5563]">Resolution</span>
                  </div>
                </div>

              </div>

              {/* Grid of details */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-xl p-4 flex flex-col justify-center">
                  <span className="text-[9px] font-bold text-[#9CA3AF] uppercase tracking-wider">Unpaid Dues Amount</span>
                  <span className="text-xl font-black text-[#111827] mt-1">₹1,50,000</span>
                </div>
                <div className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-xl p-4 flex flex-col justify-center">
                  <span className="text-[9px] font-bold text-[#9CA3AF] uppercase tracking-wider">Legal Strategy</span>
                  <span className="text-[12.5px] font-bold text-[#DC2626] mt-1">3 Notice + Police Complaint</span>
                </div>
              </div>

              {/* Trust Badge overlay */}
              <div className="flex items-center gap-3 bg-red-50/50 border border-red-200/50 p-4 rounded-xl">
                <Shield className="w-5 h-5 text-[#DC2626] shrink-0" />
                <p className="text-[11.5px] text-[#4B5563] font-semibold leading-relaxed">
                  Our system targets individual owners, commercial co-owners, corporate trustees, and C-level offices for maximum compliance pressure.
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* ================= BREADCRUMBS CONTAINER ================= */}
        <div className="bg-white/80 backdrop-blur-md px-6 py-4 rounded-2xl border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.01)] inline-block mb-12">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* ================= SPLIT PAGE LAYOUT (TOC, Main Content, Sidebar) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr_300px] gap-8 items-start relative">
          
          {/* Left Sidebar - Table of Contents (Sticky on Desktop) */}
          <div className="hidden lg:block" style={{ position: 'sticky', top: '96px', alignSelf: 'start' }}>
            <TableOfContents sections={tocSections} orientation="vertical" />
          </div>

          {/* Main Content Area */}
          <div className="min-w-0">
            {/* TOC (Mobile View) */}
            <div className="lg:hidden mb-8">
              <TableOfContents sections={tocSections} />
            </div>

            <div className="bg-white p-6 md:p-12 rounded-3xl border border-gray-150 shadow-[0_4px_30px_rgba(0,0,0,0.015)] space-y-12">
              
              {/* Product/Service Copywritten Content */}
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed tiptap-content">
                
                {/* 1. Service Overview */}
                <h2 id="service-overview">1. Professional Security Deposit & Rental Recovery Service</h2>
                <p>
                  Tenancy is a structured contractual and statutory relationship. Whether you are a tenant renting a residential apartment in a metropolitan hub, a startup leasing a commercial office workspace, or a landlord renting out your ancestral property, you are bound by mutual legal obligations. Unfortunately, the real estate landscape in India is heavily marked by friction, asymmetrical power dynamics, and bad faith defaults.
                </p>
                <p>
                  For <strong className="font-extrabold text-[#111827]">tenants</strong>, the biggest dispute arises at the time of vacating. Many landlords view the tenant's security deposit as free liquidity, unilaterally withholding huge sums of money under the guise of painting charges, deep cleaning, or general wear and tear that are legally the landlord's maintenance liabilities. For <strong className="font-extrabold text-[#111827]">landlords</strong>, the nightmare involves tenants who stop paying monthly rent, refuse to clear cumulative utility bills, damage structural assets, or illegally hold over the property past the lease expiration date.
                </p>
                <p>
                  The LegalRecovery <strong className="font-extrabold text-[#111827]">Security Deposit and Rental Recovery Service</strong> is a specialized pre-litigation pipeline engineered to bypass these endless stalemates. Traditional litigation through civil rent courts is notoriously slow, taking years to settle basic financial disputes. We have re-engineered this dispute cycle by deploying an aggressive, attorney-signed, multi-stage digital and physical escalation notice pipeline that targets the opposition, co-owners, and partners, compelling them to settle the outstanding dues immediately to avoid heavy penalties and Rent Court action.
                </p>
                <blockquote>
                  <strong>Our Service Promise:</strong> We provide comprehensive, flat-fee recovery support with absolutely <strong>zero commissions</strong> taken on your recovered money. We draft, validate, and launch progressive legal notices designed to reach the opposite party.
                </blockquote>
                <p>
                  No landlord can legally withhold your security deposit for routine wear and tear, and no tenant can occupy your property rent-free. Let our platform take the burden of writing, executing, and tracking your rental claims so you can reclaim your money.
                </p>

                {/* 2. What We Help You Recover */}
                <h2 id="coverage-details">2. What We Help You Recover</h2>
                <p>
                  A rental or lease dispute involves distinct components that must be legally isolated and quantified. Our advocate panel audits the rental contract and drafts structured demands customized to your specific role:
                </p>
                
                <h3 id="unreturned-security-deposits">A. Unreturned Security Deposits (For Tenants)</h3>
                <p>
                  We recover security deposits withheld by residential and commercial landlords. We contest arbitrary deductions made without proof of damage and compute interest for every day of delay past the handover of keys.
                </p>

                <h3 id="unpaid-rent-arrears">B. Unpaid Rent & Utility Arrears (For Landlords)</h3>
                <p>
                  If a tenant vacated your property overnight without clearing outstanding monthly rent, society maintenance charges, electricity, or water bills, we track down their new addresses, employment details, and serve formal recovery notices.
                </p>

                <h3 id="property-damage">C. Compensation for Property Damages (For Landlords)</h3>
                <p>
                  We recover costs for substantial, documented damages caused by tenants to your building, modular fittings, electrical systems, or wooden work. We compile repair quotes and demand direct restitution under product liability and contract rules.
                </p>

                <h3 id="commercial-lease">D. Commercial Lease defaults & Lock-in Period Claims</h3>
                <p>
                  Commercial leases are highly binding under the Indian Contract Act. If a business tenant defaults on lease rentals, breaks lock-in period commitments, or refuses to pay society dues, we launch a targeted contractual recovery notice campaign.
                </p>

                <h3 id="booking-token">E. Booking Advances & Token Money Refunds</h3>
                <p>
                  If you paid a token advance to reserve a property but the transaction fell through because the landlord/broker failed to provide clean titles or execute structural repairs, we demand a full refund of the advance under the Contract Act.
                </p>

                {/* 3. Our 3+1 Notice Strategy */}
                <h2 id="notice-strategy">3. Our 3+1 Notice Strategy: Engineered for Maximum Pressure</h2>
                <p>
                  Landlord-tenant friction is deeply personal. A single casual message or basic phone call is often met with anger or complete silence. To bypass this emotional gridlock, LegalRecovery deploys a systematic <strong className="font-extrabold text-[#111827]">3-stage progressive notice pipeline combined with a criminal police complaint draft</strong> to enforce compliance:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-[#F9FAFB] p-5 rounded-2xl border border-[#E5E7EB]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-black text-xs">1</div>
                      <h4 className="font-extrabold text-[#111827] text-sm">Stage 1: Advocate Demand Notice</h4>
                    </div>
                    <p className="text-xs text-[#4B5563] leading-relaxed">
                      We launch a highly authoritative demand notice on a practicing advocate's letterhead. This notice is served via digital pipelines (Email, WhatsApp) and physical registered post, giving the opposite party a strict 15-day window to settle outstanding claims.
                    </p>
                  </div>

                  <div className="bg-[#F9FAFB] p-5 rounded-2xl border border-[#E5E7EB]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-black text-xs">2</div>
                      <h4 className="font-extrabold text-[#111827] text-sm">Stage 2: Co-Owner & Nodal Escalation</h4>
                    </div>
                    <p className="text-xs text-[#4B5563] leading-relaxed">
                      If the first notice is ignored, we escalate directly to the property's co-owners, family members, co-signers, or corporate trustees. We attach daily interest calculations (up to 18% p.a.) and outline personal liabilities.
                    </p>
                  </div>

                  <div className="bg-[#F9FAFB] p-5 rounded-2xl border border-[#E5E7EB]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-black text-xs">3</div>
                      <h4 className="font-extrabold text-[#111827] text-sm">Stage 3: Pre-Litigation Warning</h4>
                    </div>
                    <p className="text-xs text-[#4B5563] leading-relaxed">
                      We deliver a final warning package, including finalized drafts of a Rent Court petition or a civil summary recovery suit (Order 37 CPC) compiled under state-specific laws, showing that our legal machinery is fully prepared to enter court.
                    </p>
                  </div>

                  <div className="bg-[#F9FAFB] p-5 rounded-2xl border border-[#E5E7EB]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-emerald-600 text-white flex items-center justify-center rounded-full font-black text-xs">+1</div>
                      <h4 className="font-extrabold text-[#111827] text-sm">Criminal Police Complaint Draft</h4>
                    </div>
                    <p className="text-xs text-[#4B5563] leading-relaxed">
                      Simultaneously, we provide you with a meticulously compiled criminal police complaint draft for <strong className="font-extrabold text-[#111827]">Criminal Breach of Trust (Section 405/406 IPC)</strong> or Mischief/Cheating (Section 420/425 IPC). Filing this at the local station creates immediate, non-bailable pressure.
                    </p>
                  </div>
                </div>
                <p>
                  By moving through these four distinct escalation stages week-by-week, we make it highly expensive, operationally disruptive, and legally risky for the landlord or tenant to continue withholding your money.
                </p>

                {/* 4. The Indian Statutory Shield */}
                <h2 id="legal-framework">4. The Indian Statutory Shield: Know Your Rental Rights</h2>
                <p>
                  India's legal framework provides both landlords and tenants with comprehensive statutory protections. Our advocate panel leverages these specific acts and guidelines to build a bulletproof case:
                </p>
                <ul>
                  <li><strong>The Model Tenancy Act, 2021:</strong> Introduces strict deposit caps (maximum 2 months' rent for residential, 6 months' rent for commercial properties) and outlines the role of Rent Authorities in solving landlord-tenant disputes in a fast-track manner (Section 11).</li>
                  <li><strong>The Transfer of Property Act, 1882 (Section 108):</strong> Governs the rights and liabilities of landlords and tenants, strictly defining that normal wear and tear is the landlord's responsibility and that landlords cannot evict tenants using illegal force without a court order.</li>
                  <li><strong>Normal Wear and Tear vs. Actual Damages:</strong> Under established property jurisprudence, painting, natural fading of walls, weather damage, minor pipe rust, and natural ageing of floor tiles are categorized as normal wear and tear. Actual damages cover cracked marble, broken furniture, altered walls, or torn wiring.</li>
                  <li><strong>Order 37 of the Civil Procedure Code, 1908:</strong> Empowers landlords or tenants to initiate a <strong className="font-extrabold text-[#111827]">Summary Suit</strong> in the civil court to recover a debt arising from a written contract (like a rent deed), forcing a fast-track decree within a few hearings.</li>
                  <li><strong>State Rent Control Acts:</strong> Local rent control legislations (e.g., Delhi Rent Control Act 1958, Maharashtra Rent Control Act 1999) provide additional protections against arbitrary rent hikes and specify the absolute grounds for eviction.</li>
                </ul>

                {/* Compare Wear and Tear Table */}
                <div className="my-8">
                  <h3>Normal Wear and Tear vs. Actual Property Damages</h3>
                  <table>
                    <thead>
                      <tr>
                        <th>Item Category</th>
                        <th>Normal Wear & Tear (Landlord's Expense)</th>
                        <th>Actual Damage (Tenant's Liability)</th>
                        <th>Legal Redressal Clause</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Wall Painting</strong></td>
                        <td>Minor fading, natural peeling, scuff marks near sockets</td>
                        <td>Crayon doodles, deep drywall holes, unauthorized paint colors</td>
                        <td>Section 15, Model Tenancy Act, 2021</td>
                      </tr>
                      <tr>
                        <td><strong>Floor Work</strong></td>
                        <td>Natural aging, minor scratches on tiles/wooden planks</td>
                        <td>Cracked marble, deep burns, chipped wooden flooring</td>
                        <td>Section 108, Transfer of Property Act</td>
                      </tr>
                      <tr>
                        <td><strong>Bathroom Fittings</strong></td>
                        <td>Faucets leaking due to hard water, loose washers</td>
                        <td>Broken mirrors, cracked basins, stolen sanitaryware</td>
                        <td>Contractual breach under Rental Agreement</td>
                      </tr>
                      <tr>
                        <td><strong>Electricals</strong></td>
                        <td>LED bulbs fusing, minor wiring degradation over time</td>
                        <td>Burned switchboards due to heavy appliances, missing fittings</td>
                        <td>Evidentiary move-in inventory validation required</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* 5. Why Online Templates Fail */}
                <h2 id="why-online-templates-fail">5. Why Free Online Lease Notices Fail</h2>
                <p>
                  Many tenants or landlords try to copy free legal notice templates or lease termination formats from the internet. While they seem convenient, they almost always fail to produce a resolution:
                </p>
                <ul>
                  <li><strong>No practicing Advocate letterhead:</strong> Rent disputes involve high financial stakes. A basic letter sent on plain paper by a tenant carries zero weight and is immediately thrown out by landlords. A notice carrying the stamp, seal, and signature of a practicing high-court advocate establishes real legal risk.</li>
                  <li><strong>Failure to cite State-Specific Tenancy Rules:</strong> Rent laws in India are highly state-centric. Online templates do not differentiate between the Maharashtra Rent Control Act, Delhi Rent Control Act, or states implementing the Model Tenancy Act, rendering the notice legally toothless.</li>
                  <li><strong>Lack of Systematic Escalation:</strong> A single, isolated notice does not build compounding pressure. Companies and individual landlords know that without automated follow-ups and a criminal draft escalation, the opposite party will likely not incur the cost of going to court.</li>
                </ul>
                <p>
                  LegalRecovery provides you with attorney-signed, state-customized notice campaigns. We use real-time digital read receipts to track when the HR opened the email, leaving them with absolutely no room to claim they never received the demand.
                </p>

                {/* 6. Transparent Flat Pricing */}
                <h2 id="service-pricing">6. Transparent Flat Pricing</h2>
                <p>
                  Traditional advocates charge thousands of rupees per consultation and demand additional percentages (commissions) on the recovered amount. We believe this is highly exploitative. 
                </p>
                <p>
                  LegalRecovery provides professional, attorney-verified security deposit and rental recovery notice campaigns for a single, flat fee of <strong className="font-extrabold text-[#111827]">₹999</strong>. We charge absolutely zero hidden fees and take zero commission on your recovered money.
                </p>

                {/* Pixel-perfect reproduction of the home page unified pricing container */}
                <div className="my-10 select-none">
                  <div className="bg-white rounded-[32px] border-2 border-[#E5E7EB] shadow-[0_20px_50px_rgba(0,0,0,0.03)] overflow-hidden transition-all duration-300 hover:shadow-[0_24px_60px_rgba(0,0,0,0.05)] text-left">
                    <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                      
                      {/* Left Block: Price and Scope details */}
                      <div className="lg:col-span-5 bg-gray-50/50 p-6 sm:p-8 md:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#E5E7EB]">
                        <div>
                          <span className="px-3 py-1 text-[11px] font-extrabold text-[#DC2626] bg-red-50 border border-red-200 rounded-full uppercase tracking-wider mb-6 inline-block">
                            Unified Plan
                          </span>
                          <h3 className="text-2xl font-black text-[#111827] mb-4">Complete Rental Recovery</h3>
                          <p className="text-[14px] text-[#4B5563] font-medium leading-[1.6] mb-8">
                            Get full-suite support from expert property attorneys. Standardized flat pricing with absolutely zero commission on your recovered amount.
                          </p>
                        </div>
                        
                        <div className="mt-auto">
                          <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-5xl font-black text-[#111827] tracking-tight">₹999</span>
                            <span className="text-sm text-[#6B7280] font-bold">/ flat fee</span>
                          </div>
                          <p className="text-[12.5px] text-[#DC2626] font-bold leading-[1.5] max-w-sm">
                            *This pricing is only for 1 case which includes sending to 1 opposition and covers 3 notices & 1 police complaint.
                          </p>
                        </div>
                      </div>

                      {/* Right Block: Included features & Call-to-action */}
                      <div className="lg:col-span-7 p-6 sm:p-8 md:p-12 flex flex-col justify-between">
                        <div>
                          <h4 className="text-[13.5px] font-extrabold text-[#111827] uppercase tracking-wider mb-6">What's included in this plan:</h4>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-10">
                            <div className="flex items-start gap-3">
                              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#10B981] stroke-[3.5] shrink-0 mt-0.5" />
                              <div className="flex flex-col">
                                <span className="text-[11.5px] sm:text-[13.5px] font-bold text-[#111827] leading-snug">3 Legal Notices</span>
                                <span className="text-[9.5px] sm:text-[11.5px] text-[#6B7280] font-medium leading-tight">Progressive legal escalations</span>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#10B981] stroke-[3.5] shrink-0 mt-0.5" />
                              <div className="flex flex-col">
                                <span className="text-[11.5px] sm:text-[13.5px] font-bold text-[#111827] leading-snug">1 Police Complaint</span>
                                <span className="text-[9.5px] sm:text-[11.5px] text-[#6B7280] font-medium leading-tight">Expert draft validation</span>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#10B981] stroke-[3.5] shrink-0 mt-0.5" />
                              <div className="flex flex-col">
                                <span className="text-[11.5px] sm:text-[13.5px] font-bold text-[#111827] leading-snug">Attorney Validation</span>
                                <span className="text-[9.5px] sm:text-[11.5px] text-[#6B7280] font-medium leading-tight">Verified by top legal experts</span>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#10B981] stroke-[3.5] shrink-0 mt-0.5" />
                              <div className="flex flex-col">
                                <span className="text-[11.5px] sm:text-[13.5px] font-bold text-[#111827] leading-snug">Real-time Tracking</span>
                                <span className="text-[9.5px] sm:text-[11.5px] text-[#6B7280] font-medium leading-tight">Live dashboard case updates</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-6 pt-6 border-t border-[#E5E7EB]/85">
                          <Link href="/contact" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-8 py-3.5 text-[14px] font-black text-white bg-[#DC2626] hover:bg-[#B91C1C] rounded-xl shadow-[0_4px_16px_rgba(220,38,38,0.15)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer">
                              Get Started Now
                            </button>
                          </Link>
                          <div className="flex items-center gap-2.5 text-left">
                            <Shield className="w-5 h-5 text-[#2563EB] stroke-[3.5] shrink-0" />
                            <span className="text-[12px] text-[#6B7280] font-bold leading-tight">
                              100% transparent.<br />No commissions, no hidden fees.
                            </span>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>

                {/* 7. Evidentiary Checklist */}
                <h2 id="documentation-needed">7. The Evidentiary Checklist for Rental Recovery</h2>
                <p>
                  To initiate your case on our platform, you will need to gather simple, standard tenancy records to establish your claim. Our advocates will utilize these records to compile a flawless case profile:
                </p>
                <ul>
                  <li><strong>Rent Agreement (Lease Deed):</strong> Proves the identity of landlord/tenant, property details, security deposit amount, notice period, and monthly rent.</li>
                  <li><strong>Bank Transaction Receipts:</strong> Serves as absolute proof of the initial security deposit paid in advance and shows the history of monthly rent transfers.</li>
                  <li><strong>Move-in & Move-out Photos/Videos:</strong> Proves the initial and final condition of the property, showing that no unauthorized damages were caused by the tenant.</li>
                  <li><strong>Written Correspondence:</strong> Email trails or WhatsApp screenshots showing repeated demands for deposit refunds or rent arrears notifications.</li>
                  <li><strong>Utility Bill Receipts:</strong> Copies of the final cleared electricity, water, and internet bills up to the date of handing over keys.</li>
                </ul>

              </div>

              {/* Tiptap Custom Styles matching the blog detail screen perfectly */}
              <style jsx global>{`
                .tiptap-content h1 { font-size: 2.25em; font-weight: 900; margin-top: 1.5em; margin-bottom: 0.8em; color: #111827; letter-spacing: -0.02em; }
                .tiptap-content h2 { font-size: 1.75em; font-weight: 800; margin-top: 1.5em; margin-bottom: 0.8em; color: #111827; scroll-margin-top: 100px; border-bottom: 2px solid #F3F4F6; padding-bottom: 0.5rem; }
                .tiptap-content h3 { font-size: 1.4em; font-weight: 800; margin-top: 1.2em; margin-bottom: 0.6em; color: #1f2937; scroll-margin-top: 100px; }
                .tiptap-content p { margin-bottom: 1.2em; line-height: 1.8; color: #374151; font-size: 15px; }
                .tiptap-content ul { list-style-type: disc; padding-left: 1.5em; margin-bottom: 1.2em; }
                .tiptap-content ol { list-style-type: decimal; padding-left: 1.5em; margin-bottom: 1.2em; }
                .tiptap-content li { margin-bottom: 0.5em; color: #374151; font-size: 15px; }
                .tiptap-content blockquote { border-left: 4px solid #DC2626; padding-left: 1em; font-style: italic; color: #4b5563; background: #FEF2F2; padding: 1.25rem; border-radius: 0.75rem; margin: 1.5rem 0; }
                .tiptap-content blockquote ol { padding-left: 1.2em; margin-bottom: 0; }
                .tiptap-content img { border-radius: 0.75rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); margin: 2rem 0; }
                .tiptap-content a { color: #DC2626; text-decoration: underline; font-weight: 600; }
                .tiptap-content table { width: 100%; border-collapse: collapse; margin: 2rem 0; font-size: 13px; }
                .tiptap-content th { background: #F9FAFB; padding: 0.75rem; text-align: left; font-weight: 800; border: 1px solid #E5E7EB; color: #111827; }
                .tiptap-content td { padding: 0.75rem; border: 1px solid #E5E7EB; color: #4B5563; font-weight: 500; }
              `}</style>
              
              {/* Share Section */}
              <div className="border-t border-gray-150 pt-8 mt-8">
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-gray-900 text-xs tracking-wider uppercase">Share this service page:</span>
                  <div className="flex space-x-4">
                    <button onClick={() => handleShare('facebook')} className="text-gray-400 hover:text-[#DC2626] transition-colors cursor-pointer">
                      <span className="sr-only">Facebook</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </button>
                    <button onClick={() => handleShare('twitter')} className="text-gray-400 hover:text-[#DC2626] transition-colors cursor-pointer">
                      <span className="sr-only">Twitter</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                    </button>
                    <button onClick={() => handleShare('linkedin')} className="text-gray-400 hover:text-[#DC2626] transition-colors cursor-pointer">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* FAQs Section */}
              <section id="faqs" className="scroll-mt-32 border-t border-gray-150 pt-12">
                <h2 className="text-2xl font-black text-gray-900 mb-2 tracking-tight">Frequently Asked Questions</h2>
                <p className="text-xs text-gray-500 font-semibold mb-8">Everything you need to know about landlord-tenant recovery disputes in India</p>
                <div className="space-y-4">
                  {faqs.map((faq) => (
                    <div key={faq.id} className="border border-gray-150 rounded-2xl overflow-hidden bg-white shadow-sm transition-all duration-200 hover:border-gray-300">
                      <button
                        onClick={() => toggleFaq(faq.id)}
                        className="flex justify-between items-center w-full text-left p-4 font-extrabold text-xs sm:text-[13px] tracking-tight text-gray-900 hover:bg-gray-50/30 focus:outline-none transition-colors"
                      >
                        <span className="flex items-center pr-4">
                          <span className="text-[#DC2626] mr-3 font-black">Q.</span>
                          {faq.question}
                        </span>
                        <span className={`transform transition-transform duration-200 shrink-0 ${expandedFaqs.includes(faq.id) ? 'rotate-180' : ''}`}>
                          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                        </span>
                      </button>
                      {expandedFaqs.includes(faq.id) && (
                        <div className="px-4 pb-4 pt-0 text-[11.5px] sm:text-xs text-gray-600 leading-relaxed pl-10 border-t border-gray-50 pt-3 bg-gray-50/20">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Reviews Section */}
              <section id="reviews" className="scroll-mt-32 border-t border-gray-150 pt-12">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                  <div>
                    <h2 className="text-2xl font-black text-gray-900 mb-1 tracking-tight">Client Testimonials</h2>
                    <p className="text-xs text-gray-500 font-semibold">Real experiences of homeowners and tenants who resolved disputes with us</p>
                  </div>
                  <div className="flex items-center gap-2 mt-4 md:mt-0 bg-[#FEF2F2] border border-[#FEE2E2]/60 px-4 py-2.5 rounded-xl w-fit">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <FontAwesomeIcon key={i} icon={faStar} className="w-3.5 h-3.5" />
                      ))}
                    </div>
                    <span className="font-black text-xs text-gray-900">4.9 / 5 (52 reviews)</span>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100 relative">
                      <FontAwesomeIcon icon={faQuoteLeft} className="text-4xl text-[#DC2626] opacity-10 absolute top-4 left-4" />
                      <div className="relative z-10">
                        <div className="flex items-center mb-3">
                          <div className="flex text-yellow-400 mr-2">
                            {[...Array(5)].map((_, i) => (
                              <FontAwesomeIcon 
                                key={i} 
                                icon={faStar} 
                                className={i < review.rating ? "text-yellow-400 text-[10px]" : "text-gray-300 text-[10px]"} 
                              />
                            ))}
                          </div>
                          <span className="font-extrabold text-[11px] text-gray-900">{review.rating}.0</span>
                        </div>
                        <p className="text-gray-700 italic mb-4 text-xs leading-relaxed">"{review.review}"</p>
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 mr-3 text-xs">
                            <FontAwesomeIcon icon={faUser} />
                          </div>
                          <p className="font-extrabold text-xs text-gray-900">{review.name}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

            </div>
          </div>

          {/* Right Sidebar - Author Card & Contact Box (Sticky on Desktop) */}
          <div className="space-y-8" style={{ position: 'sticky', top: '96px', alignSelf: 'start' }}>
            
            {/* Author Profile */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xs font-black text-gray-400 uppercase tracking-wider mb-4 border-b border-gray-50 pb-2">Verified Provider</h3>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3 border border-gray-100 flex-shrink-0 bg-red-50 flex items-center justify-center">
                  <img 
                    src="/favicon/favicon.ico"
                    alt="Team LegalRecovery"
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <div>
                  <h4 className="font-extrabold text-gray-900 text-xs sm:text-[13px]">Team LegalRecovery</h4>
                  <Link 
                    href="/about"
                    className="text-[10px] text-[#DC2626] font-extrabold hover:underline"
                  >
                    About Our Platform
                  </Link>
                </div>
              </div>
              <p className="text-[11px] text-gray-500 leading-relaxed mb-4">
                Team LegalRecovery is a dedicated team of legal and financial professionals specializing in statutory money recovery, employee disputes, and corporate compliance across India. We resolve cases through structured, attorney-verified legal campaigns.
              </p>
              <a 
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full border border-[#0077b5] text-[#0077b5] text-center py-2.5 rounded-xl text-xs font-bold hover:bg-[#0077b5] hover:text-white transition-colors"
              >
                Follow LegalRecovery
              </a>
            </div>

            {/* Premium CTA Contact Card */}
            <div className="bg-[#111827] p-6 rounded-2xl shadow-sm text-white border border-gray-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-xl pointer-events-none" />
              <h3 className="text-base font-extrabold mb-3 tracking-tight">Need Urgent Rental Recovery?</h3>
              <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                Get an advocate-drafted 3-stage notice pipeline and a customized police complaint draft for a flat fee of ₹999.
              </p>
              <Link 
                href="/contact" 
                className="block w-full bg-[#DC2626] text-white text-center py-3 rounded-xl text-xs font-extrabold hover:bg-[#B91C1C] transition-colors mb-3 cursor-pointer"
              >
                Start Recovery Now
              </Link>
              <Link 
                href="/contact" 
                className="block w-full border border-gray-700 text-gray-300 text-center py-3 rounded-xl text-xs font-extrabold hover:bg-white hover:text-[#111827] hover:border-white transition-colors"
              >
                Initiate Notice Now
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
