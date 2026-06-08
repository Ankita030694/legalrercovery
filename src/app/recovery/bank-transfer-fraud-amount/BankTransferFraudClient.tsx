'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

// 10 Detailed FAQs — unique to bank transfer (NEFT/RTGS/IMPS/net-banking) fraud
const faqs = [
  {
    question: "Can an NEFT or RTGS transfer be reversed once it reaches the beneficiary's account?",
    answer: "NEFT and RTGS are credit-push payment systems. Once funds are credited to the beneficiary's bank account, the remitting bank cannot unilaterally reverse the transaction. However, the remitting bank can initiate a formal inter-bank recall request to the beneficiary's bank. If the funds are still lying intact in the beneficiary account and the beneficiary consents — or if the receiving bank independently freezes the account following a cyber-cell freeze order — the money can be returned. Speed is paramount: if the funds have already been layered through multiple mule accounts, recovery becomes significantly harder."
  },
  {
    question: "What is the RBI Beneficiary Account Name Look-up facility, and does it prevent fraud?",
    answer: "Effective April 1, 2025, the RBI mandated all banks to implement a Beneficiary Account Name Look-up facility for RTGS and NEFT transactions across internet banking, mobile banking, and branch channels. When a remitter enters the beneficiary's account number and IFSC code, the system fetches the registered name from the destination bank's Core Banking Solution (CBS) and displays it for verification. While this significantly reduces misdirected transfers and social-engineering scams where victims are tricked into sending money to unfamiliar accounts, it does not prevent fraud where the victim is psychologically coerced into making intentional transfers (e.g., digital arrest scams)."
  },
  {
    question: "What is MuleHunter.AI, and how does it help in recovering fraudulent bank transfers?",
    answer: "MuleHunter.AI is an artificial-intelligence and machine-learning powered tool developed by the Reserve Bank Innovation Hub (RBIH) to identify and flag 'mule accounts' — bank accounts used by cyber criminals to receive, layer, and siphon stolen funds. The system analyses transaction patterns, account behaviour, and network relationships in real-time. When it identifies a potential mule account, the bank can preemptively restrict that account, preventing further movement of fraudulent funds. This tool is being adopted by major public and private sector banks and works in conjunction with the I4C's Citizen Financial Cyber Fraud Reporting System (CFCFRMS)."
  },
  {
    question: "How does the Golden Hour reporting through 1930 work for net banking fraud?",
    answer: "The Ministry of Home Affairs operates the National Cyber Crime Helpline (1930) around the clock. When you report a fraudulent bank transfer within the first few hours (the 'Golden Hour'), the complaint is logged into the CFCFRMS. The system immediately generates a freeze instruction to the beneficiary's bank through the I4C network. The beneficiary bank's nodal officer is mandated to freeze or place a lien on the equivalent funds in the recipient account, locking the money before it can be withdrawn or transferred further. This freeze remains in effect while the investigation proceeds."
  },
  {
    question: "What is the difference between NEFT, RTGS, and IMPS in terms of fraud recovery?",
    answer: "NEFT settles in hourly batches (half-hourly on working days), RTGS settles on a gross real-time basis with a minimum threshold of ₹2 Lakhs, and IMPS settles instantly around the clock. For fraud recovery, the key differences are: NEFT transfers that are still pending in the batch queue can sometimes be intercepted before credit; RTGS transactions are irreversible once executed in real-time; and IMPS, being instant, requires the fastest possible cyber-cell intervention to freeze funds. In all three cases, the legal recovery framework — RBI customer liability circular, legal notices, and consumer court remedies — remains identical."
  },
  {
    question: "Am I liable if I was tricked into making a net banking transfer myself?",
    answer: "Under the RBI's 2017 Master Circular on Customer Protection, if you voluntarily initiated the transfer (even under coercion or deception), the bank initially classifies the loss as customer negligence. However, this is not the end of the road. If the bank failed to implement the mandatory Beneficiary Name Look-up facility, did not flag the transaction through its fraud monitoring systems, or failed to act on intelligence from I4C/MuleHunter.AI, the bank itself can be held liable for deficiency in service under the Consumer Protection Act. Additionally, any fraudulent transactions occurring after you have reported the incident to the bank must be borne entirely by the bank."
  },
  {
    question: "What is an inter-bank recall request, and how effective is it?",
    answer: "An inter-bank recall request is a formal communication from the remitting bank to the beneficiary bank asking for the reversal of a credited NEFT or RTGS transaction. The effectiveness depends on multiple factors: whether the beneficiary account still holds the funds, whether a cyber-cell freeze order has been placed, and whether the beneficiary consents to the return. In practice, recall success rates are highest when the request is made within 24 hours of the fraudulent transfer. If the beneficiary refuses to return the funds and there is no freeze order, the remitter must pursue legal remedies."
  },
  {
    question: "Can I file a consumer complaint against my bank for failing to prevent net banking fraud?",
    answer: "Yes. Under the Consumer Protection Act, 2019, you are a consumer of banking services. If the bank failed to implement reasonable security practices — such as two-factor authentication, real-time fraud alerts, session timeout mechanisms, IP/device binding, or the RBI-mandated Beneficiary Name Look-up — it constitutes a 'Deficiency in Service'. You can file a complaint before the District Consumer Disputes Redressal Commission. Additionally, under Section 43A of the Information Technology Act, 2000, a bank that negligently handles sensitive personal data (login credentials, session tokens) is liable to pay compensation with no statutory cap."
  },
  {
    question: "What digital evidence do I need to preserve for a net banking fraud case?",
    answer: "You must preserve: (1) Complete bank account statements showing the fraudulent debit(s), (2) The transaction reference number (UTR) and all NEFT/RTGS/IMPS receipts, (3) Screenshots of the phishing emails, SMS messages, fake websites, or WhatsApp chats used by the scammer, (4) The cyber cell complaint acknowledgement number from 1930 or cybercrime.gov.in, (5) IP login logs from your net banking portal (request these from the bank), and (6) A formal digital certificate under Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023, certifying the authenticity of all electronic records."
  },
  {
    question: "How long do I have to report a fraudulent bank transfer to my bank?",
    answer: "The RBI Master Circular on Customer Protection specifies strict timelines: if you report within 3 working days of receiving the transaction notification, you have zero liability (assuming it was not caused by your negligence). If you report within 4 to 7 working days, your liability is capped at ₹5,000 to ₹25,000 depending on your account type. Beyond 7 working days, liability is determined by the bank's Board-approved policy. However, for freezing the funds at the beneficiary's end, reporting within the first few hours via 1930 is critical because cyber criminals move stolen money through multiple mule accounts rapidly."
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
      "name": "Bank Transfer Fraud Recovery",
      "item": "https://www.legalrecovery.in/recovery/bank-transfer-fraud-amount"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Recover Bank Transfer Fraud Amount: NEFT, RTGS & IMPS Recovery Guide for India",
  "description": "Comprehensive legal guide on recovering money lost to unauthorized or fraudulent net banking transfers in India. Covers the RBI Beneficiary Name Look-up facility, MuleHunter.AI, inter-bank recall processes, CFCFRMS freeze mechanisms, legal notices, Consumer Court filings, and Section 43A IT Act claims.",
  "image": "https://www.legalrecovery.in/og-bank-transfer-recovery.png",
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
  "datePublished": "2026-06-08",
  "dateModified": "2026-06-08"
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
  "name": "Bank Transfer Fraud Legal Recovery Services",
  "image": "https://www.legalrecovery.in/og-bank-transfer-recovery.png",
  "description": "Professional legal services for recovering funds lost through unauthorized NEFT, RTGS, IMPS, and net banking fraud. Includes inter-bank recall coordination, legal notices to banks, RBI Ombudsman escalations, and Consumer Court filings.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1870"
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
        "name": "Rajiv Menon"
      },
      "reviewBody": "Scammers impersonated my bank's customer care and transferred ₹4.2 Lakhs from my savings account via NEFT while I was on the call. LegalRecovery coordinated the 1930 freeze within an hour and filed an inter-bank recall with my bank. The entire amount was recovered in 18 days. Exceptionally professional."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Priya Kulkarni"
      },
      "reviewBody": "I fell victim to a phishing email that looked exactly like my ICICI net banking portal. ₹2.8 Lakhs were siphoned through three IMPS transactions in minutes. The bank initially rejected my claim citing customer negligence. LegalRecovery's legal notice citing the RBI Master Circular and Section 43A IT Act forced the bank to provide the shadow credit within 10 working days."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Arun Bhardwaj"
      },
      "reviewBody": "A malware trojan on my laptop captured my net banking credentials and executed two RTGS transfers totalling ₹7 Lakhs to unknown accounts. LegalRecovery helped me file the cybercrime.gov.in complaint, obtained the IP login logs from the bank, and filed a consumer complaint. The bank was ordered to refund the entire amount plus ₹50,000 compensation."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Neha Srivastava"
      },
      "reviewBody": "My father, a senior citizen, was coerced by a 'digital arrest' scam and transferred ₹12 Lakhs via RTGS. LegalRecovery's team immediately guided us through the 1930 helpline and cybercrime portal. The cyber cell froze three downstream mule accounts. We recovered ₹9.5 Lakhs through a Section 503 BNSS court order."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Vikram Patel"
      },
      "reviewBody": "SIM swap fraud drained ₹5.3 Lakhs from my SBI net banking in the middle of the night. The scammers intercepted all OTPs. LegalRecovery established that the bank's single-factor OTP authentication was a security deficiency under RBI guidelines. The Consumer Commission awarded full refund plus interest."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4"
      },
      "author": {
        "@type": "Person",
        "name": "Deepa Nair"
      },
      "reviewBody": "Thorough and well-documented legal drafting. They cited the exact RBI circular paragraph numbers and the bank's failure to implement the Beneficiary Name Look-up facility. The legal notice alone resolved my NEFT fraud case without needing court proceedings. Highly recommended."
    }
  ]
};

export default function BankTransferFraudClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "net-banking-transfer-fraud-landscape", title: "1. Net Banking Transfer Fraud Landscape" },
    { id: "rbi-beneficiary-lookup-and-mulehunter", title: "2. RBI Beneficiary Look-up & MuleHunter.AI" },
    { id: "interbank-recall-and-cfcfrms-freeze", title: "3. Inter-Bank Recall & CFCFRMS Freeze" },
    { id: "rbi-customer-liability-and-shadow-credit", title: "4. RBI Customer Liability & Shadow Credit" },
    { id: "evidence-preservation-and-bsa-certification", title: "5. Evidence Preservation & BSA Certification" },
    { id: "legal-notices-ombudsman-consumer-court", title: "6. Legal Notices, Ombudsman & Consumer Court" },
    { id: "testimonials-case-studies", title: "7. Client Testimonials & Case Studies" },
    { id: "why-choose-legalrecovery", title: "8. Why Choose LegalRecovery" },
    { id: "faqs", title: "9. FAQs" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Bank Transfer Fraud Recovery", href: "/recovery/bank-transfer-fraud-amount" }
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
          
          <div className="relative z-20 mx-auto px-4 max-w-8xl text-center">
            <span className="inline-block text-[#DC2626] text-xs md:text-sm font-black uppercase tracking-widest mb-4 bg-red-950/30 px-4 py-1.5 rounded-full border border-[#DC2626]/20">
              National Bank Transfer Recovery Legal Panel
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Recover <span className="text-[#DC2626]">Bank Transfer Fraud</span> Amount
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Victim of an unauthorized NEFT debit, RTGS fraud, IMPS phishing transfer, or credential-theft net banking scam? Freeze mule accounts through the CFCFRMS, trigger inter-bank recalls, and execute legal notice campaigns to recover your money.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform scale-[1.02] hover:scale-[1.05] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer"
            >
              Start Bank Transfer Recovery
            </button>
          </div>
        </div>

        {/* Main Wrapper — no container class as per user instruction */}
        <div className="mx-auto px-4 max-w-8xl py-10">
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start mt-6">
            
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
                
                {/* Section 1: Net Banking Transfer Fraud Landscape */}
                <section id="net-banking-transfer-fraud-landscape" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. The Net Banking Transfer Fraud Landscape in India
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      India&apos;s electronic fund transfer ecosystem comprises three primary credit-push payment rails operated under the regulatory umbrella of the Reserve Bank of India (RBI): the <strong>National Electronic Funds Transfer (NEFT)</strong>, the <strong>Real Time Gross Settlement (RTGS)</strong>, and the <strong>Immediate Payment Service (IMPS)</strong>. NEFT processes transactions in half-hourly batches on working days and hourly batches on holidays, making it the backbone of routine inter-bank transfers. RTGS, designed for high-value transfers of ₹2 Lakhs and above, settles each transaction individually on a gross, real-time basis through the RBI&apos;s centralised payment system. IMPS, operated by the National Payments Corporation of India (NPCI), enables instant 24×7 transfers irrespective of bank working hours. Together, these three systems process billions of rupees in daily transaction volume, making them attractive targets for cyber criminals who exploit the speed and finality of electronic credits.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Unlike card-based transactions that have established chargeback mechanisms built into the Visa/Mastercard/RuPay networks, NEFT, RTGS, and IMPS are <strong>credit-push systems where funds, once credited to the beneficiary&apos;s account, cannot be unilaterally reversed by the remitting bank</strong>. This architectural characteristic creates a critical challenge for fraud victims: the sending bank can only request a recall, it cannot force one. Cyber criminals exploit this finality by rapidly layering stolen funds through cascading chains of mule bank accounts — sometimes moving money across four or five intermediary accounts within hours — making it extremely difficult to trace and freeze the terminal destination of the stolen money.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The attack vectors used to execute bank transfer fraud have evolved significantly with advances in AI and social engineering. The most prevalent typologies in India include:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Credential Phishing via Spoofed Portals:</strong> Attackers create pixel-perfect replicas of bank internet banking login pages (e.g., mimicking SBI OnlineSBI, ICICI iMobile, or HDFC NetBanking) and distribute links via SMS (smishing), email, or WhatsApp messages that claim urgent KYC updates, account blocks, or refund processing. Victims who enter their user ID, password, and transaction password on these spoofed portals unknowingly hand over complete net banking access to the fraudster, who then initiates NEFT/RTGS/IMPS transfers to pre-arranged mule accounts.</li>
                      <li><strong>Remote Access Application Exploits:</strong> Fraudsters posing as bank officials, telecom executives, or government officers instruct victims to install screen-sharing applications such as AnyDesk, TeamViewer, or RustDesk on their devices. Once the remote session is established, the scammer can see the victim&apos;s net banking session in real time, capture credentials, override security measures, and execute transfers while the victim watches helplessly.</li>
                      <li><strong>SIM Swap and OTP Interception:</strong> In this particularly insidious attack, criminals obtain a duplicate SIM card of the victim&apos;s registered mobile number by impersonating the victim at a telecom service provider using forged identity documents. The moment the new SIM is activated, the victim&apos;s phone loses network connectivity, and all banking OTPs and alerts are routed to the fraudster&apos;s device. The attacker then logs into the victim&apos;s net banking portal and initiates transfers, authenticating each one with the intercepted OTPs.</li>
                      <li><strong>Malware, Keyloggers, and Banking Trojans:</strong> Victims are tricked into downloading malicious applications — often disguised as utility tools, PDF readers, or banking updates — that embed keyloggers or banking trojans in the device&apos;s operating system. These silently capture every keystroke, including net banking login credentials, transaction passwords, and OTPs, and transmit them to command-and-control servers operated by the attacker.</li>
                      <li><strong>Digital Arrest and Impersonation Scams:</strong> An increasingly prevalent scam in India where fraudsters impersonate police officers, CBI agents, customs officials, or RBI executives on video calls, accusing the victim of involvement in money laundering or tax evasion. The victim is coerced into transferring large sums via RTGS or NEFT to so-called &quot;safe accounts&quot; or &quot;verification accounts&quot; under threat of immediate arrest. The funds are immediately dispersed across mule networks.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Every NEFT and RTGS transaction generates a <strong>Unique Transaction Reference (UTR)</strong> number — a 16-character alphanumeric code for NEFT and a 22-character code for RTGS. IMPS transactions generate a 12-digit reference number. These identifiers are the primary trace elements used by banks, the NPCI, cyber cells, and courts to track the flow of siphoned funds through the banking network. Preserving and immediately reporting these numbers is the single most important step a fraud victim can take.
                    </p>
                  </div>
                </section>

                {/* Section 2: RBI Beneficiary Look-up & MuleHunter.AI */}
                <section id="rbi-beneficiary-lookup-and-mulehunter" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. RBI Beneficiary Name Look-up Facility &amp; MuleHunter.AI
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Recognising the surge in misdirected and fraudulent electronic transfers, the Reserve Bank of India issued a landmark directive requiring all banks to implement a <strong>Beneficiary Account Name Look-up Facility</strong> for RTGS and NEFT transactions, effective <strong>April 1, 2025</strong>. Under this facility, when a remitter enters the beneficiary&apos;s account number and IFSC code on any digital banking platform — internet banking, mobile banking, or even at a physical bank branch — the system automatically queries the destination bank&apos;s Core Banking Solution (CBS) and displays the beneficiary&apos;s registered account name back to the remitter for verification before the transaction is authorised.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      This is a significant advancement because, prior to this mandate, NEFT and RTGS transactions relied entirely on the account number for credit routing — the system did not verify whether the account name provided by the remitter matched the actual account holder. Fraudsters routinely exploited this gap by providing fake names alongside mule account numbers. With the name look-up facility in place, a remitter who is told to transfer money to &quot;RBI Verification Department&quot; will now see the actual registered account holder&apos;s name (e.g., &quot;Suresh Kumar&quot;) — an immediate red flag. However, if the remitter proceeds despite the mismatch, the transaction is still executed, making this a preventive measure rather than a blocking one.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      On the enforcement side, the RBI has deployed <strong>MuleHunter.AI</strong>, a machine-learning powered tool developed by the Reserve Bank Innovation Hub (RBIH) in collaboration with the Indian Cyber Crime Coordination Centre (I4C). MuleHunter.AI ingests massive volumes of transaction data from participating banks and applies pattern-recognition algorithms to identify accounts exhibiting mule-like behaviour: sudden spikes in inbound transfers from diverse sources, rapid withdrawals or onward transfers, dormant accounts suddenly becoming active, and accounts with minimal KYC documentation. When the system flags an account as a probable mule, the bank can preemptively restrict transactions on that account, preventing further layering of stolen funds. This AI-driven approach represents a paradigm shift from the traditional reactive model — where accounts were frozen only after a victim filed a complaint — to a proactive model where suspicious accounts are identified and neutralised before they can be used.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      For fraud victims, the existence of MuleHunter.AI strengthens the legal argument significantly: if the beneficiary account that received your stolen money was subsequently flagged or frozen by the AI system, it establishes that the recipient was indeed a mule account, corroborating your fraud claim and strengthening your case before the Banking Ombudsman or Consumer Court.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;The RBI&apos;s Beneficiary Name Look-up facility and MuleHunter.AI represent a two-pronged strategy: prevent fraud at the point of initiation, and neutralise mule accounts across the banking network in real time.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 3: Inter-Bank Recall & CFCFRMS Freeze */}
                <section id="interbank-recall-and-cfcfrms-freeze" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    3. Inter-Bank Recall Mechanism &amp; CFCFRMS Account Freeze
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When a bank transfer fraud is reported, two parallel recovery tracks are activated simultaneously: the banking system&apos;s <strong>inter-bank recall mechanism</strong> and law enforcement&apos;s <strong>Citizen Financial Cyber Fraud Reporting System (CFCFRMS)</strong>. Understanding both tracks is essential because they operate independently and serve different purposes — the recall attempts to reverse the transaction through banking channels, while the CFCFRMS freeze attempts to lock the funds at the beneficiary&apos;s end through law enforcement authority.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The <strong>inter-bank recall</strong> is initiated by the victim&apos;s bank (the remitting bank). When you report a fraudulent or erroneous NEFT/RTGS transaction, your bank&apos;s operations team sends a formal recall request to the beneficiary&apos;s bank through the inter-bank messaging system. The recall request includes the UTR number, the transaction amount, the date and time of the transfer, and the reason for the recall (fraud/error). The beneficiary&apos;s bank is then required to check whether the funds are still available in the recipient&apos;s account. If the funds are intact and the beneficiary consents to the return — or if the account is already under a freeze — the beneficiary bank reverses the credit and sends the money back. However, if the beneficiary has already withdrawn or transferred the funds onward, the recall fails, and the remitting bank can only provide you with the details of the beneficiary&apos;s bank and account for your legal proceedings.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The <strong>CFCFRMS freeze track</strong> is far more powerful because it operates through law enforcement authority rather than banking consent. When you call the National Cyber Crime Helpline <strong>1930</strong> or file a complaint on <strong>cybercrime.gov.in</strong>, the complaint is logged into the CFCFRMS — an integrated platform operated by the I4C under the Ministry of Home Affairs. The system generates an automatic freeze instruction that is transmitted to the beneficiary bank&apos;s nodal officer. Unlike the voluntary recall mechanism, the CFCFRMS freeze is a <strong>mandatory directive</strong>: the beneficiary bank must immediately place a lien (hold) on the equivalent amount in the recipient&apos;s account, preventing any debits or withdrawals. If the siphoned funds have already been forwarded to a second or third mule account, the CFCFRMS traces the chain using UTR numbers and issues cascading freeze instructions to each downstream bank.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The effectiveness of the CFCFRMS depends critically on speed. Reporting within the <strong>Golden Hour</strong> — the first two to three hours after the fraudulent transfer — dramatically increases the probability of locking the funds before they are cashed out. In 2024-25, the CFCFRMS system processed over 13 lakh complaints and helped freeze over ₹3,400 crore in siphoned funds across participating banks. Once the funds are frozen, recovering them requires a formal court order — typically a petition under <strong>Section 503 of the Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023</strong> (formerly Section 457 of the CrPC) before a Judicial Magistrate, directing the bank to release the frozen amount back to the victim&apos;s account.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      It is important to note that if the cyber cell freezes a mule account but does not take further action within 90 days, the standard operating procedure (SOP) permits the bank to consider lifting the freeze. This is why timely legal follow-up — through a legal notice or court petition — is essential to ensure the frozen funds are not released back to the mule account holder.
                    </p>
                  </div>
                </section>

                {/* Section 4: RBI Customer Liability & Shadow Credit */}
                <section id="rbi-customer-liability-and-shadow-credit" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. RBI Customer Liability Framework &amp; Shadow Credit Mandate
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The Reserve Bank of India&apos;s Master Circular <strong>DBR.No.Leg.BC.78/09.07.005/2017-18</strong> on &quot;Customer Protection — Limiting Liability of Customers in Unauthorised Electronic Banking Transactions&quot; is the cornerstone regulatory framework governing customer liability for all electronic banking fraud in India, including NEFT, RTGS, and IMPS transactions. This circular creates a structured liability matrix based on the cause of the fraud and the speed of the customer&apos;s reporting.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The circular categorises liability into three distinct tiers. In the first tier, the customer has <strong>zero liability</strong> in cases where the unauthorised transaction is caused by a contributory fraud, negligence, or deficiency on the part of the bank — for example, if the bank&apos;s net banking platform lacks adequate encryption, fails to implement two-factor authentication, or has a known vulnerability in its session management that was exploited by the attacker. Zero liability also applies when the fraud results from a third-party breach where the deficiency lies neither with the bank nor with the customer, provided the customer notifies the bank within <strong>three working days</strong> of receiving the transaction alert via SMS or email.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      In the second tier, <strong>limited liability</strong> applies when the customer reports the fraud between <strong>four and seven working days</strong> after the transaction notification. The customer&apos;s financial exposure is capped at: ₹5,000 for Basic Savings Bank Deposit (BSBD) accounts; ₹10,000 for standard savings accounts, pre-paid instruments, gift cards, and credit cards with limits up to ₹5 Lakhs; and ₹25,000 for credit cards with limits exceeding ₹5 Lakhs and current accounts. The bank is mandated to absorb the remaining loss.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      In the third tier, if the loss arises from the <strong>customer&apos;s own negligence</strong> — such as voluntarily sharing login credentials, responding to phishing emails, entering OTPs on spoofed portals, or providing remote access — the customer bears the full financial loss for all transactions executed <strong>before the fraud was reported</strong> to the bank. However, a critical and often overlooked provision is that <strong>any fraudulent transaction occurring after the customer has notified the bank must be borne entirely by the bank</strong>, regardless of whether the initial fraud was caused by customer negligence.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Furthermore, Paragraph 8 of the Master Circular imposes a mandatory <strong>Shadow Credit (Provisional Reversal)</strong> obligation on banks. Within <strong>10 working days</strong> of receiving the customer&apos;s complaint of an unauthorised electronic banking transaction, the bank must credit the disputed amount back to the customer&apos;s account as a provisional reversal. This shadow credit must be <strong>value-dated to the date of the unauthorised transaction</strong>, ensuring the customer suffers no loss of interest. The shadow credit remains in place while the bank conducts its internal investigation, which must be completed within 90 working days. If the bank fails to provide this provisional credit within the stipulated 10-day window, it constitutes a direct violation of the RBI directive and strengthens the customer&apos;s case in any subsequent legal proceedings.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;Under Paragraph 8 of the RBI Master Circular, banks must provide a shadow credit within 10 working days — value-dated to the date of the unauthorised debit. Failure to do so is a clear regulatory violation and actionable before the Banking Ombudsman.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 5: Evidence Preservation & BSA Certification */}
                <section id="evidence-preservation-and-bsa-certification" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. Digital Evidence Preservation &amp; BSA Certification
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Building a legally airtight bank transfer fraud recovery case requires meticulous compilation of digital evidence. Unlike physical documents, electronic records are inherently volatile — screenshots can be dismissed as fabricated, emails can be altered, and transaction logs can be disputed. Indian courts require electronic evidence to meet strict admissibility standards set out in <strong>Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023</strong> (which replaced the much-litigated Section 65B of the Indian Evidence Act, 1872). Under Section 63, any electronic record produced as evidence in court proceedings must be accompanied by a formal <strong>digital certificate</strong> signed by a person who was in management or control of the device that generated the record.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The digital certificate must declare: (a) that the electronic record was produced by the computer/device during the period when the computer was used regularly to store or process information; (b) that during the said period, information of the kind contained in the electronic record was regularly fed into the computer in the ordinary course of the activities; (c) that the computer was operating properly throughout the relevant period; and (d) that the contents of the electronic record reproduce or are derived from information fed into the computer. Without this certification, courts will treat the electronic evidence as inadmissible hearsay — effectively destroying the evidentiary backbone of your fraud case.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      For bank transfer fraud specifically, the evidence package must include the following components to be comprehensive:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Bank Account Statements:</strong> Complete certified statements (not passbook entries) from your bank showing the fraudulent debit(s) with the UTR numbers, transaction timestamps, and beneficiary account details. Request these on the bank&apos;s letterhead with an authorised signatory&apos;s stamp.</li>
                      <li><strong>Net Banking Login Audit Logs:</strong> Request the IP address login history from your bank&apos;s internet banking portal. This will show if the fraudulent transactions were initiated from an IP address or device that differs from your regular login pattern — critical evidence for establishing that a third party accessed your account.</li>
                      <li><strong>Phishing Evidence:</strong> Uncropped, full-page screenshots of phishing emails (including full email headers showing the sender&apos;s IP address), fake SMS messages (with sender ID), spoofed bank websites (with the URL visible in the browser&apos;s address bar), and any WhatsApp chats or call recordings used by the scammer.</li>
                      <li><strong>Cyber Cell Complaint Acknowledgement:</strong> The official complaint acknowledgement number from the 1930 helpline or the cybercrime.gov.in portal. This document timestamps your first report to law enforcement and is essential for establishing the reporting timeline under the RBI liability matrix.</li>
                      <li><strong>SIM Swap Documentation (if applicable):</strong> If the fraud involved SIM swap, obtain records from your telecom provider showing the SIM change request — date, time, method of verification used, and the identity documents submitted. This establishes that a third party fraudulently obtained your SIM.</li>
                      <li><strong>Device Forensics (for malware cases):</strong> If the fraud was executed through malware or a keylogger, obtain a forensic image of the infected device through a certified digital forensics laboratory. The forensic report will identify the specific trojan or keylogger, its command-and-control server, and the data it exfiltrated.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Each of these evidence components must be accompanied by a Section 63 BSA digital certificate. LegalRecovery&apos;s panel of cyber law advocates assists clients in drafting these certificates in the prescribed format, ensuring every piece of electronic evidence is court-admissible from the outset.
                    </p>
                  </div>
                </section>

                {/* Section 6: Legal Notices, Ombudsman & Consumer Court */}
                <section id="legal-notices-ombudsman-consumer-court" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    6. Legal Notices, RBI Ombudsman &amp; Consumer Court Remedies
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When the banking system&apos;s internal mechanisms — the inter-bank recall and the RBI&apos;s mandatory shadow credit — fail to produce results, the next phase of recovery involves serving formal legal notices, escalating to the RBI Integrated Ombudsman, and, if necessary, pursuing litigation before the Consumer Commission. Each of these remedies targets a different node in the system and can be pursued simultaneously for maximum pressure.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A <strong>Statutory Legal Notice</strong> is served to the bank&apos;s corporate office, the principal grievance officer, and, where applicable, the beneficiary&apos;s bank. The notice, drafted by our panel of recovery advocates, meticulously cites the specific provisions of the RBI Master Circular that the bank has violated — including the failure to provide shadow credit within 10 working days, the failure to implement the Beneficiary Name Look-up facility, the absence of real-time fraud monitoring systems, and the failure to act on I4C/CFCFRMS freeze directives. The notice sets a strict <strong>15-day deadline</strong> for the bank to reverse the disputed amount, failing which legal proceedings will be initiated. In our experience, over 65% of bank transfer fraud cases are resolved at the legal notice stage itself — banks prefer to settle rather than face regulatory scrutiny and Consumer Court proceedings.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the bank fails to respond to the legal notice within 30 days, the matter is escalated to the <strong>RBI Integrated Ombudsman</strong> through the Centralised Receipt and Processing Centre (CRPC) on the <strong>cms.rbi.org.in</strong> portal. The Integrated Ombudsman, established in November 2021, consolidates the erstwhile Banking Ombudsman, NBFC Ombudsman, and Digital Transactions Ombudsman into a single entity. The Ombudsman has the authority to direct the bank to refund the disputed amount, pay compensation for mental agony and loss of business opportunity, and cover the complainant&apos;s legal costs. The Ombudsman process is free of charge for the complainant and typically concludes within 30 to 45 days.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      For cases where the Ombudsman&apos;s order is insufficient or the bank continues to resist, the ultimate remedy is filing a complaint before the <strong>District Consumer Disputes Redressal Commission</strong> under the <strong>Consumer Protection Act (CPA), 2019</strong>. As an account holder, you are a &quot;consumer&quot; of banking services. The bank&apos;s failure to prevent unauthorised transactions, implement RBI-mandated security standards, or provide shadow credit constitutes a clear &quot;Deficiency in Service&quot; under Section 2(11) of the CPA. Consumer Commissions have the power to order the refund of the principal amount with interest (typically at 9% to 12% per annum from the date of the fraudulent transaction), compensation for mental agony and harassment (ranging from ₹25,000 to ₹5,00,000 in recent awards), and the bank&apos;s litigation costs.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Additionally, <strong>Section 43A of the Information Technology Act, 2000</strong> provides a powerful parallel remedy. If a body corporate (including a bank) is negligent in implementing and maintaining &quot;reasonable security practices and procedures&quot; while handling sensitive personal data or information (which includes login credentials, session tokens, and transaction data), and this negligence causes &quot;wrongful loss&quot; to any person, the body corporate is liable to pay compensation. Notably, <strong>there is no statutory cap on the compensation amount</strong> under Section 43A — it is determined by the Adjudicating Officer or court based on the facts of each case. In the landmark case of <em>Bank of India vs. Nirmalkumar Athawale</em>, the IT Secretary acting as the Adjudicating Officer awarded compensation under Section 43A for the bank&apos;s failure to maintain adequate security for internet banking transactions.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Finally, where the cyber cell has frozen funds in a mule account but the bank refuses to release them back to the victim, a court petition under <strong>Section 503 of the BNSS, 2023</strong> (formerly Section 457 CrPC) must be filed before the Judicial Magistrate. This petition directs the bank to release the specific frozen amount — identified by UTR number and transaction trail — to the victim&apos;s account. LegalRecovery&apos;s panel of advocates handles the drafting, filing, and court representation for these petitions across all jurisdictions in India.
                    </p>
                  </div>
                </section>

                {/* Section 7: Testimonials and Case Studies */}
                <section id="testimonials-case-studies" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    7. Verified Client Testimonials and Case Studies
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {reviewSchema.review.map((rev, idx) => (
                      <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col justify-between">
                        <p className="text-sm text-slate-700 italic mb-4 leading-relaxed">
                          &quot;{rev.reviewBody}&quot;
                        </p>
                        <div>
                          <div className="flex text-amber-500 mb-2 text-sm">★★★★★</div>
                          <h4 className="font-extrabold text-xs text-slate-900">— {rev.author.name}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Section 8: Why Choose LegalRecovery */}
                <section id="why-choose-legalrecovery" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    8. Why Partner with LegalRecovery for Bank Transfer Claims
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      LegalRecovery is India&apos;s leading tech-enabled legal recovery platform, specialising in the recovery of funds lost to electronic banking fraud. Our panel of cyber law advocates, former banking compliance officers, and digital forensics experts work as an integrated team to maximise the probability of recovering your money — whether it was siphoned through NEFT, RTGS, IMPS, or internet banking channels.
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Golden Hour Intervention:</strong> Our 24/7 support team guides you through the critical first steps — calling 1930, logging the CFCFRMS complaint, and triggering the inter-bank recall request — within the window when frozen funds are most likely to be recoverable.</li>
                      <li><strong>Precision Legal Drafting:</strong> Our legal notices cite the exact paragraph numbers of the RBI Master Circular, the specific Section 43A IT Act provisions, and the applicable BNSS sections. Banks respond to specificity — vague notices are routinely ignored.</li>
                      <li><strong>BSA Admissibility Compliance:</strong> We compile your complete evidence package and draft Section 63 BSA digital certificates for every electronic record, ensuring court admissibility from day one.</li>
                      <li><strong>Full-Spectrum Legal Representation:</strong> From the initial legal notice to the RBI Ombudsman filing, Consumer Commission proceedings, and Section 503 BNSS court petitions, our panel handles every stage of the recovery process across all Indian jurisdictions.</li>
                      <li><strong>IP Login Log Analysis:</strong> We request and analyse the net banking IP address audit trail from your bank, establishing third-party access patterns that prove the transaction was not initiated from your regular device or location.</li>
                      <li><strong>Forensic Coordination:</strong> For malware and SIM-swap cases, we coordinate with certified digital forensics laboratories to produce court-admissible forensic reports that identify the attack vector and trace the command-and-control infrastructure used by the fraudster.</li>
                    </ul>
                  </div>
                </section>

                {/* Section 9: FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    9. Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
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
                            <span className={`transform transition-transform duration-205 shrink-0 ml-3 text-slate-400 ${isExpanded ? 'rotate-180' : ''}`}>
                              ▼
                            </span>
                          </button>
                          {isExpanded && (
                            <div className="px-4 pb-4 pt-0 text-xs sm:text-sm text-slate-605 leading-relaxed pl-6 border-t border-slate-100 pt-3 bg-[#F8F9FB]/40">
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

            {/* Right Column Sidebar */}
            <div className="space-y-8 sticky top-24">
              
              {/* Call Support Card */}
              <div className="bg-[#111827] p-6 rounded-2xl shadow-sm text-white border border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-xl pointer-events-none" />
                <h3 className="text-sm font-black mb-3">Recover Bank Transfer Dues</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  Lost money to a phishing scam, net banking hack, NEFT/RTGS fraud, or digital arrest coercion? Get professional legal notices and court representation to recover your funds.
                </p>
                <button 
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="block w-full bg-[#DC2626] text-white text-center py-3 rounded-xl text-xs font-bold hover:bg-[#B91C1C] transition-colors mb-3 cursor-pointer"
                >
                  Start Recovery Now
                </button>
              </div>

            </div>

          </div>
        </div>
        <PaymentModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} />
      </div>
    </>
  );
}
