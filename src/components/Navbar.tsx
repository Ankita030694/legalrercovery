"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { getSession } from "next-auth/react";
import { PaymentModal } from "@/components/PaymentModal";

const navLinks = [
  { label: "Home",         href: "/" },
  { label: "About Us",     href: "/about" },
  { label: "Services",     href: "/services" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Blog",         href: "/blog" },
  { label: "Contact",      href: "/contact" },
];



export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const pathname = usePathname();
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSession().then((session) => {
      setSession(session);
      setLoading(false);
    });
  }, []);

  if (pathname?.startsWith("/user") || pathname?.startsWith("/authority")) {
    return null;
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-20 z-50 bg-white/72 backdrop-blur-md border-b border-[#E5E7EB]/60 flex items-center justify-between px-6 xl:px-12 transition-all gpu-accelerated">

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
        <div className="hidden xl:flex items-center gap-4 relative">
          {loading ? (
            <div className="w-[80px] h-[38px] bg-[#E5E7EB]/50 rounded-[10px] animate-pulse" />
          ) : session ? (
            <a
              href={session?.user?.role === "admin" ? "/authority/dashboard" : "/user/dashboard"}
              className="px-5 py-2.5 text-[13.5px] font-bold text-[#4B5563] hover:text-[#DC2626] border border-[#E5E7EB] hover:border-[#DC2626]/30 rounded-[10px] transition-all duration-200 select-none text-center"
            >
              Dashboard
            </a>
          ) : (
            <a
              href="/login"
              className="px-5 py-2.5 text-[13.5px] font-bold text-[#4B5563] hover:text-[#DC2626] border border-[#E5E7EB] hover:border-[#DC2626]/30 rounded-[10px] transition-all duration-200 select-none text-center"
            >
              Login
            </a>
          )}
          <button
            onClick={() => setIsPaymentModalOpen(true)}
            className="px-5 py-2.5 text-[13.5px] font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] rounded-[10px] shadow-[0_4px_12px_rgba(220,38,38,0.15)] transition-all duration-200 hover:-translate-y-0.5 focus:outline-none select-none cursor-pointer"
          >
            Recover My Money
          </button>
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 rounded-lg hover:bg-[#F3F4F6] transition-colors text-[#111827] focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* ── Mobile Drawer ── */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-white flex flex-col px-5 py-6 xl:hidden overflow-y-auto gpu-accelerated">
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
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsPaymentModalOpen(true);
              }}
              className="flex items-center justify-center gap-2 py-3.5 text-sm font-bold text-white bg-[#DC2626] rounded-xl shadow-md cursor-pointer focus:outline-none"
            >
              Recover My Money
            </button>
            {loading ? (
              <div className="w-full h-[46px] bg-[#E5E7EB]/50 rounded-xl animate-pulse" />
            ) : session ? (
              <a
                href={session?.user?.role === "admin" ? "/authority/dashboard" : "/user/dashboard"}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3.5 text-sm font-bold text-[#4B5563] border border-[#E5E7EB] rounded-xl text-center"
              >
                Dashboard
              </a>
            ) : (
              <a
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3.5 text-sm font-bold text-[#4B5563] border border-[#E5E7EB] rounded-xl text-center"
              >
                Login
              </a>
            )}
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
      <PaymentModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} />
    </>
  );
}
