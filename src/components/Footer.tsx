import React from "react";

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
  { label: "How It Works", href: "/how-it-works" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" }
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

export default function Footer() {
  return (
    <footer className="bg-[#152331] text-[#9CA3AF] border-t border-gray-800/60 pt-12 pb-8 md:pt-24 md:pb-12 px-4 sm:px-6 md:px-16 relative overflow-hidden select-none">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-950/15 -z-10 pointer-events-none rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-950/10 -z-10 pointer-events-none rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto">
        {/* Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-10 md:mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 flex flex-col items-start">
            {/* Logo */}
            <div className="flex items-center mb-6">
              <img src="/lrwhite.svg" alt="LegalRecovery" className="h-8 sm:h-9 w-auto object-contain" />
            </div>

            {/* Description */}
            <p className="text-[13px] text-gray-400 font-medium leading-[1.6] mb-6 max-w-sm select-text">
              India's leading automated legal and money recovery engine. Empowering thousands of individuals and organizations to recover their stuck funds legally, efficiently, and securely.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {/* LinkedIn */}
              <a href="/contact" className="w-9 h-9 rounded-full bg-gray-800/40 border border-gray-800 hover:border-[#DC2626] hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer">
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
            <div className="mt-8 select-none">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-gray-500 block mb-3">
                Powered by Advanced AI Engines
              </span>
              <div className="flex flex-wrap items-center gap-4 bg-gray-800/10 border border-gray-800/40 rounded-xl p-3 max-w-[345px]">
                <img src="/ai/gemini-logo_svgstack_com_37141779345951.svg" className="h-[21px] w-auto opacity-50 hover:opacity-100 transition-opacity brightness-0 invert" alt="Gemini" title="Gemini" />
                <img src="/ai/claude-logo_svgstack_com_36971779345964.svg" className="h-[18px] w-auto opacity-50 hover:opacity-100 transition-opacity brightness-0 invert" alt="Claude" title="Claude" />
                <img src="/ai/chatgpt-logo_svgstack_com_36931779345935.svg" className="h-[18px] w-auto opacity-50 hover:opacity-100 transition-opacity brightness-0 invert" alt="ChatGPT" title="ChatGPT" />
                <img src="/ai/deepseek-logo_svgstack_com_37061779346052.svg" className="h-[21px] w-auto opacity-50 hover:opacity-100 transition-opacity brightness-0 invert" alt="DeepSeek" title="DeepSeek" />
                <img src="/ai/perplexity-logo-svg_svgstack_com_37421779345999.svg" className="h-[21px] w-auto opacity-50 hover:opacity-100 transition-opacity brightness-0 invert" alt="Perplexity" title="Perplexity" />
                <img src="/ai/grok-ai-app-logo_svgstack_com_37211779346040.svg" className="h-[18px] w-auto opacity-50 hover:opacity-100 transition-opacity brightness-0 invert" alt="Grok" title="Grok" />
              </div>
            </div>
          </div>

          {/* Links Cols */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Navigation Col */}
            <div className="flex flex-col">
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
            <div className="flex flex-col">
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
            <div className="flex flex-col">
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

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-800/40 my-10" />

        {/* Bottom Compliance bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] text-gray-500 font-bold select-text">
          {/* Left statement */}
          <div>
            © 2026 Legal Recovery Systems Private Limited. All rights reserved.
          </div>
          {/* Right links */}
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <a href="/contact" className="hover:text-gray-400 transition-colors cursor-pointer">Refund Policy</a>
            <span className="text-gray-800 font-normal">|</span>
            <a href="/contact" className="hover:text-gray-400 transition-colors cursor-pointer">Cookie Settings</a>
            <span className="text-gray-800 font-normal">|</span>
            <span className="text-gray-600 tracking-wider">ISO 27001 Certified</span>
          </div>
        </div>

        <p className="mt-8 text-center text-[11px] text-gray-600 font-semibold tracking-wide select-text">
          Powered by AMA Legal Solutions
        </p>

      </div>
    </footer>
  );
}
