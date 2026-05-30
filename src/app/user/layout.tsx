"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { 
  FolderClosed, 
  Plus, 
  FileText, 
  Bell, 
  Settings, 
  Menu, 
  X, 
  LogOut,
  ChevronRight,
  ShieldCheck,
  LayoutDashboard
} from "lucide-react";

const navigationItems = [
  {
    label: "Active Claims",
    href: "/user/dashboard",
    icon: FolderClosed,
    mobileLabel: "Claims"
  },
  {
    label: "New Recovery",
    href: "/user/new-recovery",
    icon: Plus,
    mobileLabel: "New"
  },
  {
    label: "Notifications",
    href: "/user/notifications",
    icon: Bell,
    mobileLabel: "Alerts"
  },
  {
    label: "Settings",
    href: "/user/settings",
    icon: Settings,
    mobileLabel: "Settings"
  }
];

export default function UserPortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCount, setActiveCount] = useState(0);

  // Sync active count from database API to display in sidebar/bottombar
  useEffect(() => {
    const updateActiveCount = async () => {
      try {
        const response = await fetch("/api/cases");
        if (response.ok) {
          const resData = await response.json();
          if (resData.success && Array.isArray(resData.data)) {
            const active = resData.data.filter((c: any) => c.status === "active").length;
            setActiveCount(active);
          }
        }
      } catch (err) {
        console.error("Failed to fetch cases for count indicator:", err);
      }
    };

    updateActiveCount();
    // Listen for custom events to keep counts perfectly in sync across pages
    window.addEventListener("lr_cases_updated", updateActiveCount);

    return () => {
      window.removeEventListener("lr_cases_updated", updateActiveCount);
    };
  }, [pathname]);

  const handleSignOut = async (e: React.MouseEvent) => {
    e.preventDefault();
    router.push("/api/auth/signout");
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB] flex flex-col lg:flex-row relative text-[#111827] font-sans antialiased overflow-x-hidden">
      
      {/* ── MOBILE TOP HEADER ── */}
      <header className="lg:hidden h-16 bg-white border-b border-[#E5E7EB]/60 flex items-center justify-between px-5 fixed top-0 left-0 right-0 z-40">
        <Link href="/" className="flex items-center">
          <img src="/lrlogo.svg" alt="LegalRecovery" className="h-7 w-auto object-contain" />
        </Link>
        <div className="flex items-center gap-3">
          {activeCount > 0 && (
            <span className="bg-red-500 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full animate-pulse">
              {activeCount} Active
            </span>
          )}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 text-slate-700 hover:bg-[#F3F4F6] rounded-xl transition-colors focus:outline-none cursor-pointer"
            aria-label="Open sidebar menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
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
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`w-full flex items-center gap-3 px-4 py-3.5 text-[13.5px] font-bold rounded-xl transition-all duration-200 text-left focus:outline-none cursor-pointer
                    ${isActive 
                      ? "bg-[#DC2626] text-white" 
                      : "text-slate-300 hover:bg-white/5 hover:text-white"}`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-white" : "text-slate-400"}`} />
                  <span>{item.label}</span>
                  {item.href === "/user/dashboard" && activeCount > 0 && (
                    <span className={`ml-auto text-[10px] font-extrabold px-2 py-0.5 rounded-full ${isActive ? "bg-red-800 text-white" : "bg-slate-800 text-slate-300"}`}>
                      {activeCount}
                    </span>
                  )}
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
              TA
            </div>
            <div className="flex flex-col text-left overflow-hidden">
              <span className="text-[12px] font-black text-white leading-tight truncate">Tech AMA</span>
              <span className="text-[10px] text-slate-400 font-semibold leading-none mt-0.5 truncate">tech.ama123@gmail.com</span>
            </div>
          </div>

          <button 
            onClick={handleSignOut}
            className="w-full flex items-center justify-center gap-2.5 px-4 py-3 text-[13.5px] font-bold text-slate-400 hover:text-[#DC2626] hover:bg-white/5 rounded-xl transition-all cursor-pointer border border-white/10"
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
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`w-full flex items-center gap-3.5 px-4 py-3.5 text-[13px] font-bold rounded-xl transition-all duration-200 text-left focus:outline-none cursor-pointer group
                    ${isActive 
                      ? "bg-[#DC2626] text-white shadow-[0_4px_12px_rgba(220,38,38,0.2)]" 
                      : "text-slate-300 hover:bg-white/5 hover:text-white"}`}
                >
                  <Icon className={`w-4 h-4 shrink-0 transition-colors duration-200
                    ${isActive ? "text-white" : "text-slate-400 group-hover:text-white"}`} 
                  />
                  <span>{item.label}</span>
                  {item.href === "/user/dashboard" && activeCount > 0 && (
                    <span className={`ml-auto text-[10px] font-black px-2 py-0.5 rounded-full ${isActive ? "bg-red-800 text-white" : "bg-slate-800 text-slate-400"}`}>
                      {activeCount}
                    </span>
                  )}
                  <ChevronRight className={`w-3.5 h-3.5 ml-auto opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200
                    ${isActive ? "text-white opacity-100!" : "text-slate-400"}`} 
                  />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Sidebar bottom footer */}
        <div className="p-4 border-t border-gray-800/40 bg-slate-900/10">
          <div className="flex items-center gap-3 px-3 py-3 mb-4 bg-white/5 border border-white/10 rounded-2xl shadow-sm">
            <div className="w-9 h-9 bg-[#DC2626]/10 rounded-full flex items-center justify-center font-extrabold text-[#DC2626] text-xs shrink-0">
              TA
            </div>
            <div className="flex flex-col text-left overflow-hidden">
              <span className="text-[12.5px] font-black text-white leading-tight truncate">Tech AMA</span>
              <span className="text-[10px] text-slate-400 font-bold leading-none mt-1 truncate">tech.ama123@gmail.com</span>
            </div>
          </div>

          <button 
            onClick={handleSignOut}
            className="w-full flex items-center justify-center gap-2.5 px-4 py-3 text-[13px] font-bold text-slate-400 hover:text-[#DC2626] hover:bg-white/5 border border-white/10 hover:border-red-500/30 rounded-xl transition-all cursor-pointer"
          >
            <LogOut className="w-4 h-4 shrink-0" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* ── MOBILE BOTTOM NAVIGATION BAR (True Mobile-First UX) ── */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-[#E5E7EB]/80 z-40 flex items-center justify-around px-2 pb-safe shadow-[0_-4px_16px_rgba(0,0,0,0.03)]">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center py-2 px-3 gap-1 cursor-pointer select-none transition-colors duration-150 relative min-w-[64px]
                ${isActive ? "text-[#DC2626]" : "text-slate-400 hover:text-slate-700"}`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 shrink-0 ${isActive ? "text-[#DC2626]" : "text-slate-400"}`} />
                {item.href === "/user/dashboard" && activeCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-red-500 text-white text-[8px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center scale-90 border border-white">
                    {activeCount}
                  </span>
                )}
              </div>
              <span className="text-[9.5px] font-extrabold leading-none">{item.mobileLabel}</span>
              {isActive && (
                <span className="absolute bottom-1 w-1.5 h-1.5 bg-[#DC2626] rounded-full" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* ── MAIN WORKSPACE CONTENT CONTAINER ── */}
      {/* 
        Spacing adjustments: 
        - Mobile: pt-16 (for top header) + pb-16 (for bottom navigation bar)
        - Desktop (lg): pt-0, pb-0, and pl-[275px] (for left-aligned sidebar)
      */}
      <main className="flex-1 lg:pl-[275px] pt-16 pb-16 lg:pt-0 lg:pb-0 min-h-screen flex flex-col overflow-y-auto">
        <div className="flex-1 px-4 sm:px-6 lg:px-12 py-8 lg:py-10 max-w-7xl w-full mx-auto">
          {children}
        </div>
      </main>

    </div>
  );
}
