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
  Building2,
  AlertTriangle,
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

export default function SalaryRecoveryClient() {
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
    const title = "Recover Unpaid Salary & Employment Dues Legally in India";
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
    { id: "why-online-templates-fail", title: "5. Why Online Notices Fail" },
    { id: "service-pricing", title: "6. Transparent Flat Pricing" },
    { id: "documentation-needed", title: "7. Evidentiary Checklist" },
    { id: "faqs", title: "8. Frequently Asked Questions" },
    { id: "reviews", title: "9. Client Testimonials" }
  ], []);

  // FAQs List (10 comprehensive, detailed Q&As)
  const faqs: FAQ[] = useMemo(() => [
    {
      id: "faq-1",
      question: "What is the time limit or limitation period to file a legal suit for salary recovery in India?",
      answer: "Under the Limitation Act, 1963, the limitation period to file a civil suit for the recovery of unpaid salary or wages is three (3) years from the date the wages became due and payable. For labour-specific forums under the Payment of Wages Act or the Industrial Disputes Act, complaints are ideally filed within 12 months, although delayed filings may be accepted if 'sufficient cause' is shown to explain the delay under Section 5 of the Limitation Act."
    },
    {
      id: "faq-2",
      question: "Can an employer legally withhold my salary during a notice period?",
      answer: "No. An employer cannot legally withhold salary during the notice period, provided you are fulfilling your duties as per the employment agreement. Notice pay and regular salary are statutory and contractual entitlements. Withholding them constitutes a breach of contract and a violation of the local Shops and Establishments Act. If there is a dispute regarding handovers, the employer must still pay the wages and resolve the dispute separately rather than unilaterally withholding your livelihood."
    },
    {
      id: "faq-3",
      question: "What is the distinction between a 'Workman' and a 'Non-Workman' under Indian labor laws?",
      answer: "Under Section 2(s) of the Industrial Disputes Act, 1947, a 'workman' is defined as any person employed in an industry to do manual, unskilled, skilled, technical, operational, clerical, or supervisory work. It explicitly excludes individuals employed in a primarily managerial or administrative capacity, or those in a supervisory role earning above ₹10,000 per month (though new labor codes proposed raising this threshold). Non-workmen (such as senior executives, managers, and directors) must seek dues recovery via civil courts rather than labour courts."
    },
    {
      id: "faq-4",
      question: "What are the legal consequences for an employer who refuses to pay Full and Final (F&F) dues?",
      answer: "Refusing to pay F&F dues exposes the employer to civil litigation, labour department investigations, and statutory penalties. Under the Payment of Wages Act and Shops and Establishments Acts, employers are liable to pay the outstanding amount along with interest (often ranging from 12% to 18% per annum) and potentially additional penalties or fines for non-compliance. Directors and partners can also be held personally liable for wilful default of employee wages in summary civil suits."
    },
    {
      id: "faq-5",
      question: "Can I approach the NCLT (Insolvency Court) for unpaid salary recovery?",
      answer: "Yes. Employees are recognized as 'Operational Creditors' under the Insolvency and Bankruptcy Code, 2016 (IBC). If a corporate employer defaults on salaries, employees (either individually or jointly) can file an insolvency petition under Section 9 of the IBC. However, the default threshold for initiating corporate insolvency is ₹1 crore (increased from ₹1 lakh). To meet this, multiple employees with pending salaries from the same corporate debtor can join together to file a joint petition."
    },
    {
      id: "faq-6",
      question: "How long does it take for a legal notice to show results for unpaid salaries?",
      answer: "In approximately 70% to 80% of salary dispute cases, a formal, advocate-backed legal notice yields results within the specified notice window - usually 15 days. Companies prefer to avoid public litigation, labour commissioner summons, or corporate insolvency filings. If the employer is professional, they typically initiate conciliation or release the undisputed portion of F&F dues immediately upon receiving the notice."
    },
    {
      id: "faq-7",
      question: "Are startup employees protected under the Payment of Wages Act?",
      answer: "Yes, startup employees are fully protected. All registered commercial enterprises, including tech startups, LLPs, and private limited companies, are governed by the respective state's Shops and Establishments Act. These acts strictly mandate the timely payment of salaries (usually by the 7th or 10th of the following month) and cover provisions for termination, leave encashment, and notice pay. Startups cannot use funding delays or financial distress as a legal justification to withhold earned salaries."
    },
    {
      id: "faq-8",
      question: "What is wrongful termination, and can I recover damages for it?",
      answer: "Wrongful termination occurs when an employee is dismissed in violation of their employment contract, statutory laws, or the principles of natural justice (e.g., terminated without notice, without being given a fair hearing, or without proving misconduct). In such cases, you can legally demand: 1) Back wages for the period of wrongful dismissal, 2) Severance pay as per the contract or law, and 3) General damages for mental harassment and reputational harm."
    },
    {
      id: "faq-9",
      question: "Can an employer adjust my pending salary against training bonds or non-compete clauses?",
      answer: "Generally, no. Unilateral deductions from salaries are highly restricted under Section 7 of the Payment of Wages Act. Training bonds are only enforceable if the employer has spent actual, documented resources on specialized training (not general onboarding) and the bond amount is reasonable. Employers cannot hold your earned salary hostage to enforce non-compete or training bond terms; they must pay the salary and file a separate civil claim to enforce a valid bond."
    },
    {
      id: "faq-10",
      question: "What should I do if my employer has closed the office or is absconding?",
      answer: "If the company has shut down its physical offices or the management is absconding, you should: 1) Send the legal notice to the registered office address (available on the MCA portal) and the personal residential addresses of the directors, 2) File a criminal complaint for criminal breach of trust (Section 405/406 IPC) and cheating (Section 420 IPC) at the local police station, and 3) Initiate joint recovery action before the Labour Commissioner or file an operational creditor petition under the IBC."
    }
  ], []);

  // Client Reviews List
  const reviews: Review[] = useMemo(() => [
    {
      id: "rev-1",
      name: "Aditya R. Sharma (Senior Software Engineer)",
      rating: 5,
      review: "My former employer withheld my F&F dues of ₹1.8 Lakhs for six months citing 'client payment delays'. Team LegalRecovery deployed their triple-escalation legal notice pipeline. The company released my entire pending amount along with written apology letters within just 10 days of the first notice. Absolutely outstanding service!"
    },
    {
      id: "rev-2",
      name: "Meenakshi Krishnan (Marketing Manager)",
      rating: 5,
      review: "After being wrongfully terminated overnight without notice or salary, I felt completely helpless. LegalRecovery guided me through the workman classification and sent structured notices detailing the Shops & Establishments Act violations. The management immediately agreed to a settlement, paying my 2 months' notice pay and pending salary. Highly recommended!"
    },
    {
      id: "rev-3",
      name: "Rohit Deshmukh (Freelance UI/UX Designer)",
      rating: 5,
      review: "A corporate client refused to clear my final milestone payments of ₹95,000 for a completed website design, claiming minor revisions were pending. The notice sent by LegalRecovery outlined the breach of contract under the Indian Contract Act. The client cleared the full payment within 48 hours. Incredible speed and legal efficiency."
    },
    {
      id: "rev-4",
      name: "Karan Johar (Operations Specialist)",
      rating: 5,
      review: "I had outstanding salary and gratuity dues of ₹3.4 Lakhs from a logistics firm that went silent. LegalRecovery prepared a systematic draft including the Payment of Gratuity Act provisions. The Controlling Authority application and notice process forced the company to settle. I received my full gratuity plus interest!"
    }
  ], []);

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Salary & Employment Dues Recovery", href: "/services/recovery-of-salary-and-employment-dues" },
  ];

  // Schema structured JSON-LD data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.legalrecovery.in/services/recovery-of-salary-and-employment-dues#article",
        "isPartOf": {
          "@id": "https://www.legalrecovery.in/services/recovery-of-salary-and-employment-dues"
        },
        "headline": "Professional Salary and Employment Dues Recovery Service in India",
        "description": "Reclaim unpaid wages, delayed salaries, Full & Final (F&F) settlements, gratuity, and wrongful termination dues legally in India. 3 progressive notices, 1 police complaint draft, attorney-verified.",
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
        "mainEntityOfPage": "https://www.legalrecovery.in/services/recovery-of-salary-and-employment-dues"
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.legalrecovery.in/services/recovery-of-salary-and-employment-dues#faq",
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
        "@id": "https://www.legalrecovery.in/services/recovery-of-salary-and-employment-dues#breadcrumbs",
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
            "name": "Salary & Employment Dues Recovery",
            "item": "https://www.legalrecovery.in/services/recovery-of-salary-and-employment-dues"
          }
        ]
      },
      {
        "@type": "Product",
        "@id": "https://www.legalrecovery.in/services/recovery-of-salary-and-employment-dues#service",
        "name": "Salary and Employment Dues Recovery Service",
        "description": "Professional money recovery for unpaid salaries, F&F settlements, commissions, bonuses, and wrongful termination dues using top-tier legal notice pipelines and police complaint drafting.",
        "brand": {
          "@type": "Organization",
          "name": "LegalRecovery",
          "url": "https://www.legalrecovery.in"
        },
        "areaServed": "IN",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "48"
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
              Professional Salary & Employment Dues Recovery
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-[50px] font-black tracking-tight text-[#111827] leading-[1.1] mb-6 select-text">
              Salary Stuck? <br />
              Recover Your Employment <br />
              <span className="text-[#DC2626]">Dues Legally.</span>
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#4B5563] font-medium leading-[1.6] mb-6 max-w-xl select-text">
              Reclaim unpaid Full & Final (F&F) dues, delayed salaries, performance incentives, statutory gratuity, and wrongful termination payouts in India. We launch 3 highly authoritative legal notices and provide 1 formal police complaint draft week-by-week.
            </p>

            {/* High-Trust Tagline Banner */}
            <div className="flex items-center gap-2 bg-[#E6F4EA] text-[#137333] border border-[#A3E2AB]/40 rounded-lg px-3.5 py-2 mb-8 select-text">
              <Check className="w-4 h-4 text-[#137333] stroke-[3.5] shrink-0" />
              <span className="text-[12px] sm:text-[13px] font-extrabold tracking-tight">
                No Court Visits. No Stress. We handle it for you.
              </span>
            </div>

            {/* CTA Anchor button linking to the pricing section */}
            <div className="w-full sm:w-auto mb-6 select-none">
              <a
                href="/contact"
                className="inline-block w-full sm:w-auto text-center px-8 py-4 text-[14px] sm:text-[15px] font-black text-white bg-[#DC2626] hover:bg-[#B91C1C] rounded-[12px] shadow-[0_4px_16px_rgba(220,38,38,0.15)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                Start My Recovery - ₹999
              </a>
            </div>
          </div>

          {/* Right Image/Dashboard Column */}
          <div className="lg:col-span-6 select-none w-full">
            <div className="w-full bg-[#FFFFFF] rounded-3xl border border-[#E5E7EB] shadow-[0_20px_50px_rgba(0,0,0,0.06)] p-4 sm:p-6 md:p-8 flex flex-col gap-6 relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/5 rounded-full blur-xl pointer-events-none" />
              
              {/* Active Tab visual header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#E5E7EB]/60">
                <div className="flex flex-col">
                  <span className="text-[12px] font-black text-[#111827]">Salary Recovery Dashboard</span>
                  <span className="text-[9.5px] text-[#9CA3AF] font-bold mt-0.5">Disputed Case: REC-SAL-2026</span>
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
                  <span className="text-xl font-black text-[#111827] mt-1">₹1,85,000</span>
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
                  Our system targets HR, corporate email addresses, and the personal mailboxes of directors for maximum escalation.
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

            <div className="bg-white p-6 md:p-12 rounded-3xl border border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.015)] space-y-12">
              
              {/* Product/Service Copywritten Content */}
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed tiptap-content">
                
                {/* 1. Service Overview */}
                <h2 id="service-overview">1. Professional Salary & Employment Dues Recovery Service</h2>
                <p>
                  Employment is a mutually binding legal contract. When an employer refuses to credit your monthly salaries, delays payments indefinitely, or withholds your Full and Final (F&F) settlement, they are committing a direct breach of contract and violating the statutory labor laws of India. 
                </p>
                <p>
                  The Legal Recovery <strong className="font-extrabold text-[#111827]">Salary and Employment Dues Recovery Service</strong> is a specialized, end-to-end legal tech solution designed to dismantle corporate asymmetry. We understand that well-funded companies count on employees quietly moving on because of the prohibitive cost and time of traditional litigation. We have restructured the entire recovery lifecycle into an aggressive, automated, and attorney-verified pre-litigation pipeline to force employers to settle your dues quickly.
                </p>
                <blockquote>
                  <strong>Our Service Promise:</strong> We provide comprehensive, flat-fee recovery support with absolutely <strong>zero commissions</strong> taken on your recovered money. We draft, validate, and launch progressive legal notices designed to reach the top decision-makers at your former company.
                </blockquote>
                <p>
                  No company - regardless of its scale, startup status, or institutional backing - can legally withhold your earned salary. Let our platform take the burden of writing, executing, and tracking your legal claims so you can reclaim your hard-earned earnings.
                </p>

                {/* 2. What We Help You Recover */}
                <h2 id="coverage-details">2. What We Help You Recover</h2>
                <p>
                  An outstanding employment claim is rarely limited to basic salary alone. Our legal panel compiles and details every single component of your outstanding remuneration to maximize the impact of your claim.
                </p>
                
                <h3 id="unpaid-salaries">A. Unpaid Salaries & Cumulative Delayed Wages</h3>
                <p>
                  We recover unpaid base salaries, Special Allowances, House Rent Allowance (HRA), and other standard monthly pay structures detailed in your appointment letter. Under state Shops and Establishments laws, withholding these payments is a severe statutory default.
                </p>

                <h3 id="ff-settlements">B. Unpaid Full & Final (F&F) Settlement Dues</h3>
                <p>
                  Upon your resignation or termination, companies are legally mandated to clear your outstanding account. Our notice pipeline targets the delay in F&F dues, enforcing the strict payment timelines outlined under state laws and the Code on Wages.
                </p>

                <h3 id="incentives">C. Performance Bonuses, Commissions & Incentives</h3>
                <p>
                  Employers often label bonuses and sales incentives as "discretionary" to justify withholding them. If your appointment letter outlines target criteria and you have written proof (emails or scorecards) of achieving them, we treat these components as enforceable contractual debts in our legal notices.
                </p>

                <h3 id="notice-severance">D. Notice Period Salaries & Severance Pay</h3>
                <p>
                  If you were terminated without the contractually stipulated notice period, you are legally entitled to receive notice pay. We recover the notice period salary in lieu of notice and contractual severance amounts.
                </p>

                <h3 id="withheld-gratuity">E. Withheld Gratuity & Leave Encashment</h3>
                <p>
                  Under the <strong className="font-extrabold text-[#111827]">Payment of Gratuity Act, 1972</strong>, employees completing continuous service are entitled to gratuity. We compute and claim your outstanding gratuity - demanding statutory interest for every day of delay - along with the financial value of your accumulated privilege leaves.
                </p>

                {/* 3. Our 3+1 Notice Strategy */}
                <h2 id="notice-strategy">3. Our 3+1 Notice Strategy: Engineered for Maximum Pressure</h2>
                <p>
                  Traditional court cases are painfully slow. Most companies ignore a single legal letter, assuming the employee will not pursue the matter further. To counter this, LegalRecovery utilizes an aggressive <strong className="font-extrabold text-[#111827]">3-stage progressive notice pipeline combined with a criminal police complaint draft</strong> to systematically escalate pressure.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-[#F9FAFB] p-5 rounded-2xl border border-[#E5E7EB]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-black text-xs">1</div>
                      <h4 className="font-extrabold text-[#111827] text-sm">Stage 1: Advocate Demand Notice</h4>
                    </div>
                    <p className="text-xs text-[#4B5563] leading-relaxed">
                      We launch a highly authoritative demand notice on a practicing advocate's letterhead. This notice is served via digital pipelines (Email, WhatsApp) and physical registered post, giving the employer a strict 15-day window to clear undisputed dues.
                    </p>
                  </div>

                  <div className="bg-[#F9FAFB] p-5 rounded-2xl border border-[#E5E7EB]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-black text-xs">2</div>
                      <h4 className="font-extrabold text-[#111827] text-sm">Stage 2: Board & Investor Escalation</h4>
                    </div>
                    <p className="text-xs text-[#4B5563] leading-relaxed">
                      If ignored, we serve Notice 2 directly to the company's Board of Directors, key institutional investors, and startup partners. We attach daily interest calculations (18% p.a.) and outline personal director liabilities.
                    </p>
                  </div>

                  <div className="bg-[#F9FAFB] p-5 rounded-2xl border border-[#E5E7EB]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-black text-xs">3</div>
                      <h4 className="font-extrabold text-[#111827] text-sm">Stage 3: Pre-Litigation Warning</h4>
                    </div>
                    <p className="text-xs text-[#4B5563] leading-relaxed">
                      We deliver a final pre-litigation warning package, including finalized drafts of a civil recovery suit (Order 37 CPC) and an operational creditor demand under the IBC. This signals that our legal machinery is fully prepared to approach the courts.
                    </p>
                  </div>

                  <div className="bg-[#F9FAFB] p-5 rounded-2xl border border-[#E5E7EB]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-emerald-600 text-white flex items-center justify-center rounded-full font-black text-xs">+1</div>
                      <h4 className="font-extrabold text-[#111827] text-sm">Criminal Police Complaint Draft</h4>
                    </div>
                    <p className="text-xs text-[#4B5563] leading-relaxed">
                      Simultaneously, we provide you with a meticulously compiled criminal police complaint draft for <strong className="font-extrabold text-[#111827]">Criminal Breach of Trust (Section 405/406 IPC)</strong> and Cheating (Section 420 IPC). Filing this at your local station creates immediate, non-bailable pressure on directors.
                    </p>
                  </div>
                </div>
                <p>
                  By moving through these four distinct escalation stages week-by-week, we make it highly expensive, legally risky, and operationally disruptive for the employer to continue withholding your money.
                </p>

                {/* 4. The Indian Statutory Shield */}
                <h2 id="legal-framework">4. The Indian Statutory Shield: Know Your Rights</h2>
                <p>
                  India's legal framework provides employees with robust statutory protections. Our advocate panel leverages these specific acts and sections to build a bulletproof case against defaulting employers:
                </p>
                <ul>
                  <li><strong>The Payment of Wages Act, 1936:</strong> Dictates that salaries must be paid on time without unauthorized deductions (Section 7). In case of defaults, employees can demand the principal amount along with interest and damages (Section 15).</li>
                  <li><strong>The Industrial Disputes Act, 1947 (Section 33C):</strong> Empowers individuals classified as 'Workmen' (non-managerial staff) to directly approach the Labour Court for recovery of outstanding monies due from an employer.</li>
                  <li><strong>Respective State Shops and Establishments Acts:</strong> Every commercial establishment must register under these state acts (e.g., Delhi, Maharashtra, Karnataka). They strictly govern working hours, leave policies, and provide local Inspectors who have summary powers to investigate salary disputes.</li>
                  <li><strong>Payment of Gratuity Act, 1972:</strong> Restricts employers from withholding gratuity past 30 days of separation (Section 7). Delays attract mandatory simple interest from the date the gratuity became due.</li>
                  <li><strong>Insolvency & Bankruptcy Code, 2016 (IBC):</strong> Recognizes employees as <strong className="font-extrabold text-[#111827]">Operational Creditors</strong>. Serving a Section 8 demand notice often forces companies to pay up immediately to prevent the NCLT from taking over their corporate management.</li>
                </ul>

                {/* 5. Why Online Templates Fail */}
                <h2 id="why-online-templates-fail">5. Why Free Online Notice Templates Fail</h2>
                <p>
                  Many professionals try to copy free legal notice formats from online blogs. While this seems cost-effective, it almost always fails to produce results:
                </p>
                <ul>
                  <li><strong>Lack of Attorney Verification:</strong> Free templates do not carry the seal, signature, and letterhead of a registered, practicing advocate. Corporate legal teams immediately recognize these as amateur attempts and file them away.</li>
                  <li><strong>Incorrect Legal Citing:</strong> Online formats rarely match your specific state’s Shops & Establishments Act, your exact workman classification under Section 2(s) of the Industrial Disputes Act, or correct CPC summary suit clauses.</li>
                  <li><strong>No Systematic Escalation:</strong> A single, isolated letter sent via standard post does not build compounding pressure. Companies know that without automated digital tracking and week-by-week follow-up notices, the employee will likely lose momentum.</li>
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
                  LegalRecovery provides professional, attorney-verified salary recovery campaigns for a single, flat fee of <strong className="font-extrabold text-[#111827]">₹999</strong>. We charge absolutely zero hidden fees and take zero commission on your recovered money.
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
                          <h3 className="text-2xl font-black text-[#111827] mb-4">Complete Legal Recovery</h3>
                          <p className="text-[14px] text-[#4B5563] font-medium leading-[1.6] mb-8">
                            Get full-suite support from expert attorneys. Standardized flat pricing with absolutely zero commission on your recovered amount.
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
                            <Shield className="w-5 h-5 text-[#2563EB] shrink-0" />
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
                <h2 id="documentation-needed">7. The Evidentiary Checklist for Salary Recovery</h2>
                <p>
                  To initiate your case on our platform, you will need to gather simple, standard work records to prove your claim. Our advocates will utilize these records to compile a flawless case profile:
                </p>
                <ul>
                  <li><strong>Appointment Letter / Work Contract:</strong> Documents your design, agreed monthly salary, notice period conditions, and work location.</li>
                  <li><strong>Salary Slips:</strong> Validates your monthly structural payscales and demonstrates any sudden, unilateral deductions.</li>
                  <li><strong>Bank Account Statement:</strong> Serves as absolute proof of non-payment by demonstrating the sudden cessation of incoming salary credits.</li>
                  <li><strong>Resignation Email / Separation Letter:</strong> Establishes the date your employment concluded and the F&F terms.</li>
                  <li><strong>Written Correspondence:</strong> Slack screenshots, HR emails, or WhatsApp chats showing your repeated requests for pending wages.</li>
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
                <p className="text-xs text-gray-500 font-semibold mb-8">Everything you need to know about the legal recovery of salary dues in India</p>
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
                    <p className="text-xs text-gray-500 font-semibold">Real experiences of professionals who recovered their salaries with us</p>
                  </div>
                  <div className="flex items-center gap-2 mt-4 md:mt-0 bg-[#FEF2F2] border border-[#FEE2E2]/60 px-4 py-2.5 rounded-xl w-fit">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <FontAwesomeIcon key={i} icon={faStar} className="w-3.5 h-3.5" />
                      ))}
                    </div>
                    <span className="font-black text-xs text-gray-900">4.9 / 5 (48 reviews)</span>
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
              <h3 className="text-base font-extrabold mb-3 tracking-tight">Need Urgent Salary Recovery?</h3>
              <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                Get an advocate-drafted 3-stage notice pipeline and a customized police complaint draft for a flat fee of ₹999.
              </p>
              <a 
                href="tel:+918700343611" 
                className="block w-full bg-[#DC2626] text-white text-center py-3 rounded-xl text-xs font-extrabold hover:bg-[#B91C1C] transition-colors mb-3 cursor-pointer"
              >
                Call Support: +91-8700343611
              </a>
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
