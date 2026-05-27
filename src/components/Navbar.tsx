"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home",         href: "/" },
  { label: "About Us",     href: "/about" },
  { label: "Services",     href: "/services" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Blog",         href: "/blog" },
  { label: "Contact",      href: "/contact" },
];

const recoveryItems = [
  "💼 Salary Delay Recovery",
  "🛠️ Freelancer Dues",
  "🏠 Rental Deposit Recovery",
  "📦 Consumer Grievance",
  "⚖️ Other Legal Claim",
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-16 sm:h-20 z-50 bg-white/90 backdrop-blur-md border-b border-[#E5E7EB]/60 flex items-center justify-between px-4 sm:px-6 xl:px-12">

        <a href="/" className="flex items-center select-none">
          <img src="/lrlogo.svg" alt="LegalRecovery" className="h-8 sm:h-9 w-auto object-contain" />
        </a>

        {/* ── Desktop Nav Links ── */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative py-2 text-[13.5px] font-bold transition-colors flex flex-col items-center
                  ${isActive ? "text-[#111827]" : "text-[#4B5563] hover:text-[#DC2626]"}`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-[-4px] w-5 h-[2.5px] bg-[#DC2626] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* ── Desktop Right Buttons ── */}
        <div className="hidden xl:flex items-center gap-6 relative">
          <a href="/contact" className="text-[13.5px] font-bold text-[#4B5563] hover:text-[#111827] transition-colors">
            Track Recovery
          </a>
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 px-5 py-2.5 text-[13.5px] font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] rounded-[10px] shadow-[0_4px_12px_rgba(220,38,38,0.15)] transition-all duration-200 hover:-translate-y-0.5 focus:outline-none"
            >
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`}
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
              Start Recovery
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white/90 backdrop-blur-md rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-[#E5E7EB]/80 overflow-hidden z-50">
                <div className="py-1">
                  {recoveryItems.map((item) => (
                    <a
                      key={item}
                      href="/contact"
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-2.5 text-xs font-semibold text-[#4B5563] hover:text-[#DC2626] hover:bg-[#F8F9FB] transition-colors"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 rounded-lg hover:bg-[#F3F4F6] transition-colors text-[#111827]"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* ── Mobile Drawer ── */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 sm:top-20 z-40 bg-white flex flex-col px-5 py-6 xl:hidden overflow-y-auto">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-4 text-[15px] font-bold border-b border-[#F3F4F6] transition-colors
                  ${isActive ? "text-[#DC2626]" : "text-[#111827] hover:text-[#DC2626]"}`}
              >
                {link.label}
              </a>
            );
          })}
          <div className="mt-6 flex flex-col gap-3">
            <a
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-3.5 text-sm font-bold text-white bg-[#DC2626] rounded-xl shadow-md"
            >
              Start Recovery
            </a>
            <a
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-3.5 text-sm font-bold text-[#111827] border border-[#D1D5DB] rounded-xl"
            >
              Track Recovery
            </a>
          </div>
        </div>
      )}
    </>
  );
}
