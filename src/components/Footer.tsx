"use client";

import React from "react";
import { usePathname } from "next/navigation";

const serviceLinks = [
  { label: "Salary Delay Recovery", href: "/services/recovery-of-salary-and-employment-dues" },
  { label: "Freelancer Dues", href: "/services/recovery-of-freelancer-and-client-payments" },
  { label: "Rental Deposit Recovery", href: "/services/security-deposits-and-rental-recoveries" },
  { label: "Consumer Grievance", href: "/services/refunds-and-consumer-complaints" },
  { label: "Airline & Travel Recoveries", href: "/services/airline-and-travel-recoveries" },
  { label: "Friend & Personal Money", href: "/services/recovery-of-money-from-a-friend" },
  { label: "Vendor & Invoice Recovery", href: "/services/vendor-and-invoice-recoveries" },
  { label: "Property & Builder Disputes", href: "/services/property-and-builder-disputes" }
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Recovery Directory", href: "/recovery" },
  { label: "Recovery by City", href: "/legal-recovery-by-city" },
  { label: "Legal Notice Services", href: "/legal-notice-services" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" }
];


const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

const guideLinks = [
  { label: "How to Send a Legal Notice Online in India", href: "/send-legal-notice-online-india" },
  { label: "Freelancer Payment Recovery Options & Legal Actions", href: "/freelancer-payment-recovery-guide" },
  { label: "How to Recover Unpaid Salary from Employer Legally", href: "/how-to-recover-unpaid-salary-legally" },
  { label: "Legal Notice to Recover Loan Amount Given to Friend", href: "/legal-notice-to-recovery-my-loan-from-friend" },
  { label: "What are the Legal Steps to Recover Unpaid Salary?", href: "/what-are-the-legal-steps-to-recover-unpaid-salary-from-an-employer-in-india" },
  { label: "Can I Send a Legal Notice to My Employer for Salary?", href: "/can-i-send-a-legal-notice-to-my-employer-for-not-paying-my-salary-and-how-does-it-work" },
  { label: "How to Send a Legal Notice Without Hiring a Lawyer", href: "/how-can-i-send-a-legal-notice-online-to-someone-in-india-without-hiring-a-lawyer" },
  { label: "Valid Ways to Deliver a Legal Notice Online in India", href: "/what-are-the-legally-valid-ways-to-deliver-a-legal-notice-online-in-india" },
  { label: "Is WhatsApp or Email a Valid Legal Notice in Court?", href: "/is-an-email-or-whatsApp-message-considered-a-valid-legal-notice-in-indian-courts" },
  { label: "What Should a Legal Notice Include to Be Enforceable?", href: "/what-should-a-legal-notice-include-to-be-enforceable-under-indian-law" },
  { label: "Which Online Platforms Allow You to Send a Legal Notice?", href: "/which-online-platforms-or-services-allow-you-to-draft-and-send-a-legal-notice-in-india" },
  { label: "What Legal Options Does a Freelancer Have to Recover Dues?", href: "/what-legal-options-does-a-freelancer-in-india-have-to-recover-unpaid-payments-from-a-client" },
  { label: "How Can a Freelancer Send a Legal Notice to a Client?", href: "/how-can-a-freelancer-send-a-legal-notice-to-a-client-who-has-not-paid-for-completed-work-in-india" },
  { label: "Can a Freelancer File a Case in a Consumer Forum?", href: "/can-a-freelancer-file-a-case-in-a-consumer-forum-or-civil-court-to-recover-payment-in-india" },
  { label: "What Evidence Should a Freelancer Collect for Recovery?", href: "/what-evidence-should-a-freelancer-collect-to-strengthen-a-payment-recovery-case-against-a-client" },
  { label: "How Does the MSME Act Help Freelancers Recover Payments?", href: "/how-does-the-micro-small-and-medium-enterprises-act-help-freelancers-recover-overdue-payments-in-india" },
  { label: "Steps to Recover Security Deposit from Refusing Landlord", href: "/what-are-the-legal-steps-to-recover-a-security-deposit-from-a-landlord-who-is-refusing-to-return-it-in-india" },
  { label: "Can I Send a Legal Notice to Landlord for Deposit?", href: "/can-i-send-a-legal-notice-to-my-landlord-for-not-refunding-the-security-deposit-after-vacating-the-property" },
  { label: "How to Send a Legal Notice to Friend for Personal Loan", href: "/how-do-i-send-a-legal-notice-to-a-friend-who-is-not-repaying-my-personal-loan-in-india" },
];

export default function Footer() {
  const pathname = usePathname();

  if (pathname?.startsWith("/user") || pathname?.startsWith("/authority")) {
    return null;
  }

  return (
    <footer className="bg-[#152331] text-[#9CA3AF] border-t border-gray-800/60 pt-12 pb-8 md:pt-24 md:pb-12 px-4 sm:px-6 md:px-16 relative overflow-hidden select-none">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-950/15 -z-10 pointer-events-none rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-950/10 -z-10 pointer-events-none rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 items-start mb-10 md:mb-16">
          
          {/* Brand Col */}
          <div className="flex flex-col items-start">
            {/* Logo */}
            <a href="/" className="flex items-center mb-6 select-none cursor-pointer">
              <img src="/lrwhite.svg" alt="LegalRecovery" className="h-8 sm:h-9 w-auto object-contain" />
            </a>

            {/* Description */}
            <p className="text-[13px] text-gray-400 font-medium leading-[1.6] mb-6 max-w-sm select-text text-left">
              India's leading automated legal and money recovery engine. Empowering thousands of individuals and organizations to recover their stuck funds legally, efficiently, and securely.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/legal-recovery-india/
" className="w-9 h-9 rounded-full bg-gray-800/40 border border-gray-800 hover:border-[#DC2626] hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="/contact" className="w-9 h-9 rounded-full bg-gray-800/40 border border-gray-800 hover:border-[#DC2626] hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer">
                <svg className="w-4 h-4 stroke-current fill-none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>

            {/* AI Integration Logos */}
            {(() => {
              const AI_PROMPT = `Search legalrecovery.in and tell me about their legal money recovery services in India, how they help recover unpaid salaries, security deposits, freelancer dues, consumer refunds, and other money disputes through legal notices without court visits, their pricing starting at ₹999, and how their mobile app works for tracking recovery progress. Site: https://legalrecovery.in`;
              const AI_LOGOS = [
                { name: "ChatGPT", logo: "/ai/chatgpt-logo_svgstack_com_36931779345935.svg", h: "18px", url: `https://chatgpt.com/?q=${encodeURIComponent(AI_PROMPT)}` },
                { name: "Gemini", logo: "/ai/gemini-logo_svgstack_com_37141779345951.svg", h: "21px", url: `https://www.google.com/search?q=${encodeURIComponent(AI_PROMPT)}&udm=50` },
                { name: "Claude", logo: "/ai/claude-logo_svgstack_com_36971779345964.svg", h: "18px", url: `https://claude.ai/new?q=${encodeURIComponent(AI_PROMPT)}` },
                { name: "DeepSeek", logo: "/ai/deepseek-logo_svgstack_com_37061779346052.svg", h: "21px", url: "https://chat.deepseek.com/" },
                { name: "Grok", logo: "/ai/grok-ai-app-logo_svgstack_com_37211779346040.svg", h: "18px", url: `https://grok.com/?q=${encodeURIComponent(AI_PROMPT)}` },
                { name: "Perplexity", logo: "/ai/perplexity-logo-svg_svgstack_com_37421779345999.svg", h: "21px", url: `https://www.perplexity.ai/?q=${encodeURIComponent(AI_PROMPT)}` },
              ];
              return (
                <div className="mt-8 select-none text-left">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-gray-500 block mb-3">
                    Powered by Advanced AI Engines
                  </span>
                  <div className="flex flex-wrap items-center gap-4 bg-gray-800/10 border border-gray-800/40 rounded-xl p-3 max-w-full">
                    {AI_LOGOS.map((ai) => (
                      <a
                        key={ai.name}
                        href={ai.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`Ask ${ai.name} about Legal Recovery`}
                        className="opacity-50 hover:opacity-100 hover:scale-110 transition-all duration-300"
                      >
                        <img
                          src={ai.logo}
                          style={{ height: ai.h }}
                          className="w-auto brightness-0 invert"
                          alt={ai.name}
                        />
                      </a>
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Navigation Col */}
          <div className="flex flex-col text-left">
            <h4 className="text-white font-extrabold text-[13px] uppercase tracking-wider mb-5">Navigation</h4>
            <ul className="flex flex-col gap-3.5">
              {navLinks.map((link, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <a href={link.href} className="text-[12.5px] font-bold text-gray-400 hover:text-white hover:translate-x-0.5 transition-all inline-block cursor-pointer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Col */}
          <div className="flex flex-col text-left">
            <h4 className="text-white font-extrabold text-[13px] uppercase tracking-wider mb-5">Services</h4>
            <ul className="flex flex-col gap-3.5">
              {serviceLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-[12.5px] font-bold text-gray-400 hover:text-white hover:translate-x-0.5 transition-all inline-block cursor-pointer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Col */}
          <div className="flex flex-col text-left">
            <h4 className="text-white font-extrabold text-[13px] uppercase tracking-wider mb-5">Legal</h4>
            <ul className="flex flex-col gap-3.5">
              {legalLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-[12.5px] font-bold text-gray-400 hover:text-white hover:translate-x-0.5 transition-all inline-block cursor-pointer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-800/40 my-10" />

        {/* Queries Row */}
        <div className="text-left mb-10">
          <h4 className="text-white font-extrabold text-[13px] uppercase tracking-wider mb-6">Queries</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 lg:gap-16 gap-y-3.5">
            {guideLinks.map((link, idx) => (
              <div key={idx} className="flex flex-col">
                <a href={link.href} className="text-[12.5px] font-bold text-gray-400 hover:text-white hover:translate-x-0.5 transition-all inline-block cursor-pointer">
                  {link.label}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-800/40 my-10" />

        {/* Bottom Compliance bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] text-gray-500 font-bold select-text">
          {/* Left statement */}
          
          {/* Right links */}
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <a href="/contact" className="hover:text-gray-400 transition-colors cursor-pointer">Refund Policy</a>
            <span className="text-gray-800 font-normal">|</span>
            <a href="/contact" className="hover:text-gray-400 transition-colors cursor-pointer">Cookie Settings</a>
            <span className="text-gray-800 font-normal">|</span>
            <span className="text-gray-600 tracking-wider">ISO 27001 Certified</span>
          </div>
        </div>

        <p className="mt-8 text-center text-[10px] text-gray-500 max-w-4xl mx-auto leading-relaxed select-text">
          LegalRecovery is an automated drafting assistance platform. The draft is generated based on the information provided by User and is subject to advocate review. Submission of false, misleading, or incomplete information may result in rejection without liability. By proceeding, you agree to our <a href="/terms-and-conditions" className="text-gray-400 hover:text-white transition-colors underline">Terms & Conditions</a>.
        </p>

        <p className="mt-8 text-center text-[11px] text-gray-600 font-semibold tracking-wide select-text">
          Powered by AMA Legal Solutions&reg;
        </p>

      </div>
    </footer>
  );
}
