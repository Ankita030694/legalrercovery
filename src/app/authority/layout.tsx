"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { signOut, getSession } from "next-auth/react";
import { 
  FileText, 
  Filter, 
  LayoutDashboard,
  Menu, 
  X, 
  LogOut,
  ChevronRight,
  History,
  Briefcase,
  CreditCard
} from "lucide-react";

const adminNavigationItems = [
  {
    label: "Dashboard",
    href: "/authority/dashboard",
    icon: LayoutDashboard,
    mobileLabel: "Home"
  },
  {
    label: "Case Inspector",
    href: "/authority/cases",
    icon: Briefcase,
    mobileLabel: "Cases"
  },
  {
    label: "Dispatch Logs",
    href: "/authority/dispatch-logs",
    icon: History,
    mobileLabel: "Dispatches"
  },
  {
    label: "Transactions",
    href: "/authority/transactions",
    icon: CreditCard,
    mobileLabel: "Billing"
  },
  {
    label: "Blog Manager",
    href: "/authority/blog",
    icon: FileText,
    mobileLabel: "Blogs"
  },
  {
    label: "Conversion Funnel",
    href: "/authority/conversion-funnel",
    icon: Filter,
    mobileLabel: "Funnel"
  }
];

export default function AuthorityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [adminName, setAdminName] = useState("");
  const [adminEmail, setAdminEmail] = useState("");

  useEffect(() => {
    getSession().then((session) => {
      if (session && session.user) {
        setAdminName(session.user.name || "Administrator");
        setAdminEmail(session.user.email || "");
      }
    });
  }, []);

  const getInitials = (n: string) => {
    if (!n) return "A";
    return n
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const handleSignOut = async (e: React.MouseEvent) => {
    e.preventDefault();
    await signOut({ callbackUrl: "/nullify" });
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB] flex flex-col lg:flex-row relative text-[#111827] font-sans antialiased">
      
      {/* ── MOBILE TOP HEADER ── */}
      <header className="lg:hidden h-16 bg-white border-b border-[#E5E7EB]/60 flex items-center justify-between px-5 fixed top-0 left-0 right-0 z-40">
        <Link href="/" className="flex items-center">
          <img src="/lrlogo.svg" alt="LegalRecovery" className="h-7 w-auto object-contain" />
        </Link>
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="p-2 text-slate-700 hover:bg-[#F3F4F6] rounded-xl transition-colors focus:outline-none cursor-pointer"
          aria-label="Open sidebar menu"
        >
          <Menu className="w-5 h-5" />
        </button>
      </header>

      {/* ── MOBILE COLLAPSIBLE DRAWER (SLIDE OVER) ── */}
      <aside 
        className={`fixed inset-y-0 right-0 w-[280px] bg-[#152331] border-l border-gray-800/40 z-50 flex flex-col justify-between transition-transform duration-300 lg:hidden shadow-2xl
          ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div>
          {/* Logo & Close Button */}
          <div className="h-16 flex items-center justify-between px-6 border-b border-gray-800/40">
            <Link href="/" className="flex items-center select-none" onClick={() => setMobileMenuOpen(false)}>
              <img src="/lrwhite.svg" alt="LegalRecovery" className="h-7 w-auto object-contain" />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-slate-400 hover:bg-white/5 rounded-xl transition-colors focus:outline-none cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links list inside drawer */}
          <nav className="p-4 flex flex-col gap-1.5">
            {adminNavigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`w-full flex items-center gap-3 px-4 py-3.5 text-base font-bold rounded-xl transition-all duration-200 text-left focus:outline-none cursor-pointer
                    ${isActive 
                      ? "bg-[#DC2626] text-white" 
                      : "text-slate-300 hover:bg-white/5 hover:text-white"}`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-white" : "text-slate-400"}`} />
                  <span>{item.label}</span>
                  <ChevronRight className={`w-3.5 h-3.5 ml-auto opacity-40 ${isActive ? "text-white" : "text-slate-400"}`} />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer inside drawer */}
        <div className="p-4 border-t border-gray-800/40">
          <div className="flex items-center gap-3 px-3 py-2.5 mb-4 bg-white/5 border border-white/10 rounded-xl">
            <div className="w-9 h-9 bg-[#DC2626]/10 rounded-full flex items-center justify-center font-bold text-[#DC2626] text-xs">
              {getInitials(adminName)}
            </div>
            <div className="flex flex-col text-left overflow-hidden">
              <span className="text-sm font-black text-white leading-tight truncate">{adminName}</span>
              <span className="text-xs text-slate-400 font-semibold leading-none mt-0.5 truncate">{adminEmail}</span>
            </div>
          </div>

          <button 
            onClick={handleSignOut}
            className="w-full flex items-center justify-center gap-2.5 px-4 py-3 text-base font-bold text-slate-400 hover:text-[#DC2626] hover:bg-white/5 rounded-xl transition-all cursor-pointer border border-white/10"
          >
            <LogOut className="w-4 h-4 shrink-0" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Background overlay for Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      {/* ── FIXED DESKTOP LEFT SIDEBAR ── */}
      <aside className="hidden lg:flex fixed inset-y-0 left-0 w-[275px] bg-[#152331] border-r border-slate-800/40 z-30 flex-col justify-between h-screen shrink-0">
        <div>
          {/* Logo brand container */}
          <div className="h-20 flex items-center px-7 border-b border-gray-800/40">
            <Link href="/" className="flex items-center select-none">
              <img src="/lrwhite.svg" alt="LegalRecovery" className="h-8 w-auto object-contain" />
            </Link>
          </div>

          {/* Navigation Links list */}
          <nav className="p-4 flex flex-col gap-1.5 mt-4">
            {adminNavigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <div key={item.href} className="relative w-full">
                  <Link
                    href={item.href}
                    className={`w-full flex items-center gap-3.5 px-4 py-3.5 text-base font-bold rounded-xl transition-all duration-200 text-left focus:outline-none cursor-pointer group
                      ${isActive 
                        ? "bg-[#DC2626] text-white shadow-[0_4px_12px_rgba(220,38,38,0.2)]" 
                        : "text-slate-300 hover:bg-white/5 hover:text-white"}`}
                  >
                    <Icon className={`w-4 h-4 shrink-0 transition-colors duration-200
                      ${isActive ? "text-white" : "text-slate-400 group-hover:text-white"}`} 
                    />
                    <span>{item.label}</span>
                    <ChevronRight className={`w-3.5 h-3.5 ml-auto opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200
                      ${isActive ? "text-white opacity-100!" : "text-slate-400"}`} 
                    />
                  </Link>
                </div>
              );
            })}
          </nav>
        </div>

        {/* Sidebar bottom footer */}
        <div className="p-4 border-t border-gray-800/40 bg-slate-900/10">
          <div className="flex items-center gap-3 px-3 py-3 mb-4 bg-white/5 border border-white/10 rounded-2xl shadow-sm">
            <div className="w-9 h-9 bg-[#DC2626]/10 rounded-full flex items-center justify-center font-extrabold text-[#DC2626] text-xs shrink-0">
              {getInitials(adminName)}
            </div>
            <div className="flex flex-col text-left overflow-hidden">
              <span className="text-sm font-black text-white leading-tight truncate">{adminName}</span>
              <span className="text-xs text-slate-400 font-bold leading-none mt-1 truncate">{adminEmail}</span>
            </div>
          </div>

          <button 
            onClick={handleSignOut}
            className="w-full flex items-center justify-center gap-2.5 px-4 py-3 text-base font-bold text-slate-400 hover:text-[#DC2626] hover:bg-white/5 border border-white/10 hover:border-red-500/30 rounded-xl transition-all cursor-pointer"
          >
            <LogOut className="w-4 h-4 shrink-0" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* ── MOBILE BOTTOM NAVIGATION BAR ── */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-[#E5E7EB]/80 z-40 flex items-center justify-around px-2 pb-safe shadow-[0_-4px_16px_rgba(0,0,0,0.03)]">
        {adminNavigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <div key={item.href} className="relative flex flex-col items-center justify-center min-w-[64px]">
              <Link
                href={item.href}
                className={`flex flex-col items-center justify-center py-2 px-3 gap-1 cursor-pointer select-none transition-colors duration-150 min-w-[64px]
                  ${isActive ? "text-[#DC2626]" : "text-slate-400 hover:text-slate-700"}`}
              >
                <Icon className={`w-5 h-5 shrink-0 ${isActive ? "text-[#DC2626]" : "text-slate-400"}`} />
                <span className="text-[9.5px] font-extrabold leading-none">{item.mobileLabel}</span>
                {isActive && (
                  <span className="absolute bottom-1 w-1.5 h-1.5 bg-[#DC2626] rounded-full" />
                )}
              </Link>
            </div>
          );
        })}
      </nav>

      {/* ── MAIN WORKSPACE CONTENT CONTAINER ── */}
      <main className="flex-1 lg:pl-[275px] pt-16 pb-16 lg:pt-0 lg:pb-0 min-h-screen flex flex-col">
        <div className={`flex-1 py-8 lg:py-10 w-full mx-auto ${['/authority/dispatch-logs', '/authority/transactions', '/authority/contact-submissions', '/authority/conversion-funnel'].includes(pathname) ? 'px-4' : 'px-4 sm:px-6 lg:px-12 max-w-7xl'}`}>
          {children}
        </div>
      </main>

    </div>
  );
}
