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
  CreditCard,
  MessageSquare,
  ArrowLeft,
  FolderClosed,
  PlusCircle,
  Send,
  Building2,
  Shield,
  Layers,
  Scale
} from "lucide-react";

// ── Legal Recovery (Retail) Nav Items ──
const retailNavigationItems = [
  {
    label: "Dashboard",
    href: "/authority/dashboard",
    icon: LayoutDashboard,
    mobileLabel: "Home"
  },
  {
    label: "Inbound Replies",
    href: "/authority/replies",
    icon: MessageSquare,
    mobileLabel: "Replies"
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
  const [adminName, setAdminName] = useState("Administrator");
  const [adminEmail, setAdminEmail] = useState("admin@legalrecovery.in");
  const [representees, setRepresentees] = useState<any[]>([]);

  useEffect(() => {
    getSession().then((session) => {
      if (session && session.user) {
        setAdminName(session.user.name || "Administrator");
        setAdminEmail(session.user.email || "admin@legalrecovery.in");
      }
    });

    // Fetch representees to display active representation name in sidebar
    fetch(`/api/representees?_t=${Date.now()}`)
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data) {
          setRepresentees(data.data);
        }
      })
      .catch(() => {});
  }, []);

  const getInitials = (n: string) => {
    if (!n) return "AD";
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

  const cleanPath = (pathname || "").replace(/\/$/, "");

  // 1. Check if currently scoped inside a representation: /authority/ama-cases/[repId]/*
  const repMatch = cleanPath.match(/^\/authority\/ama-cases\/([^\/]+)(\/.*)?$/);
  const matchedSegment = repMatch ? repMatch[1] : null;
  const isExcludedStaticRoute = ["new-recovery", "representees", "dispatch", "replies"].includes(matchedSegment || "");
  const isScopedRepresentation = Boolean(matchedSegment && !isExcludedStaticRoute);
  const currentRepId = isScopedRepresentation ? matchedSegment : null;

  // 2. Root Workspace Launcher & AMA Representation Folders Selector: Full-screen view with NO sidebars
  if (
    cleanPath === "/authority" || 
    cleanPath === "/authority/ama-cases" || 
    (cleanPath.startsWith("/authority/ama-cases") && !isScopedRepresentation)
  ) {
    return <>{children}</>;
  }

  // 3. Resolve representation metadata
  let activeRepName = "Client Representation";
  let activeRepState = "Chambers";
  if (currentRepId === "direct") {
    activeRepName = "Direct AMA Claims";
    activeRepState = "Chambers";
  } else if (currentRepId) {
    const found = representees.find(r => r._id === currentRepId || r.id === currentRepId);
    if (found) {
      activeRepName = found.name;
      activeRepState = found.state || "Client";
    }
  }

  // 4. Build Navigation items dynamically
  let navigationItems = retailNavigationItems;
  let workspaceTitle = "Legal Recovery";
  let workspaceTagline = "Retail Recovery Platform";
  let backButtonHref = "/authority";
  let backButtonLabel = "Switch Workspace";

  if (isScopedRepresentation && currentRepId) {
    workspaceTitle = activeRepName;
    workspaceTagline = `${activeRepState} • Scoped Workspace`;
    backButtonHref = "/authority/ama-cases";
    backButtonLabel = "Representation Folders";

    navigationItems = [
      {
        label: "Dashboard",
        href: `/authority/ama-cases/${currentRepId}/dashboard`,
        icon: LayoutDashboard,
        mobileLabel: "Dashboard"
      },
      {
        label: "Cases",
        href: `/authority/ama-cases/${currentRepId}/cases`,
        icon: Briefcase,
        mobileLabel: "Cases"
      },
      {
        label: "Notice Dispatch",
        href: `/authority/ama-cases/${currentRepId}/dispatch`,
        icon: Send,
        mobileLabel: "Dispatch"
      },
      {
        label: "Inbound Replies",
        href: `/authority/ama-cases/${currentRepId}/replies`,
        icon: MessageSquare,
        mobileLabel: "Replies"
      },
      {
        label: "Add New Case",
        href: `/authority/ama-cases/${currentRepId}/new-recovery`,
        icon: PlusCircle,
        mobileLabel: "New Case"
      }
    ];
  }

  const isAmaContext = isScopedRepresentation;

  return (
    <div className="min-h-screen bg-[#F8F9FB] flex flex-col lg:flex-row relative text-[#111827] font-sans antialiased">
      
      {/* ── MOBILE TOP HEADER ── */}
      <header className="lg:hidden h-16 bg-white border-b border-[#E5E7EB]/60 flex items-center justify-between px-5 fixed top-0 left-0 right-0 z-40">
        <div className="flex items-center gap-3">
          <Link href={backButtonHref} className="p-1.5 -ml-1.5 text-slate-500 hover:text-slate-900 rounded-lg">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex flex-col text-left overflow-hidden">
            <span className="text-sm font-black text-slate-900 leading-tight truncate max-w-[200px]">{workspaceTitle}</span>
            <span className="text-[10px] font-semibold text-slate-400 truncate">{workspaceTagline}</span>
          </div>
        </div>

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
        className={`fixed inset-y-0 right-0 w-[290px] bg-[#152331] border-l border-gray-800/40 z-50 flex flex-col justify-between transition-transform duration-300 lg:hidden shadow-2xl
          ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div>
          {/* Back Button & Close */}
          <div className="h-16 flex items-center justify-between px-5 border-b border-gray-800/40">
            <Link 
              href={backButtonHref} 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-white px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{backButtonLabel}</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-slate-400 hover:bg-white/5 rounded-xl transition-colors focus:outline-none cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Current Workspace Header in Mobile */}
          <div className="px-5 py-4 border-b border-gray-800/30 bg-slate-900/30 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center font-bold text-xs shrink-0">
              <Shield className="w-4 h-4" />
            </div>
            <div className="flex flex-col text-left overflow-hidden">
              <span className="text-sm font-bold text-white leading-tight truncate">{workspaceTitle}</span>
              <span className="text-[10px] text-slate-400 font-medium truncate">{workspaceTagline}</span>
            </div>
          </div>

          {/* Navigation Links inside drawer */}
          <nav className="p-4 flex flex-col gap-1.5">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-bold rounded-xl transition-all duration-200 text-left focus:outline-none cursor-pointer
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
          <div className="flex items-center gap-3 px-3 py-2.5 mb-3 bg-white/5 border border-white/10 rounded-xl">
            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center font-bold text-white text-xs">
              {getInitials(adminName)}
            </div>
            <div className="flex flex-col text-left overflow-hidden">
              <span className="text-xs font-black text-white leading-tight truncate">{adminName}</span>
              <span className="text-[10px] text-slate-400 font-semibold leading-none mt-0.5 truncate">{adminEmail}</span>
            </div>
          </div>

          <button 
            onClick={handleSignOut}
            className="w-full flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-bold text-slate-400 hover:text-red-400 hover:bg-white/5 rounded-xl transition-all cursor-pointer border border-white/10"
          >
            <LogOut className="w-3.5 h-3.5 shrink-0" />
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
          {/* Top: Switch / Back Button & Header */}
          <div className="p-4 border-b border-gray-800/40 flex flex-col gap-3">
            <Link 
              href={backButtonHref}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all text-xs font-bold border border-white/10 group cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-transform group-hover:-translate-x-0.5" />
              <span>{backButtonLabel}</span>
            </Link>

            {/* Current Workspace Brand Badge */}
            <div className="flex items-center gap-3 px-2 py-1">
              <div className="w-9 h-9 rounded-xl bg-red-500/15 text-red-500 border border-red-500/30 flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div className="flex flex-col text-left overflow-hidden">
                <span className="text-sm font-black text-white leading-tight tracking-tight truncate">{workspaceTitle}</span>
                <span className="text-[10px] text-slate-400 font-semibold truncate mt-0.5">{workspaceTagline}</span>
              </div>
            </div>
          </div>

          {/* Navigation Links list */}
          <nav className="p-4 flex flex-col gap-1 mt-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              const activeClass = "bg-[#DC2626] text-white shadow-[0_4px_12px_rgba(220,38,38,0.2)]";

              return (
                <div key={item.href} className="relative w-full">
                  <Link
                    href={item.href}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-bold rounded-xl transition-all duration-200 text-left focus:outline-none cursor-pointer group
                      ${isActive ? activeClass : "text-slate-300 hover:bg-white/5 hover:text-white"}`}
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
        <div className="p-4 border-t border-gray-800/40 bg-slate-900/20">
          <div className="flex items-center gap-3 px-3 py-2.5 mb-3 bg-white/5 border border-white/10 rounded-xl">
            <div className="w-8 h-8 bg-red-500/20 text-red-300 rounded-lg flex items-center justify-center font-black text-xs shrink-0">
              {getInitials(adminName)}
            </div>
            <div className="flex flex-col text-left overflow-hidden">
              <span className="text-xs font-black text-white leading-tight truncate">{adminName}</span>
              <span className="text-[10px] text-slate-400 font-semibold leading-none mt-0.5 truncate">{adminEmail}</span>
            </div>
          </div>

          <button 
            onClick={handleSignOut}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-bold text-slate-400 hover:text-red-400 hover:bg-white/5 border border-white/10 rounded-xl transition-all cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5 shrink-0" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* ── MOBILE BOTTOM NAVIGATION BAR ── */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-[#E5E7EB]/80 z-40 flex items-center justify-around px-2 pb-safe shadow-[0_-4px_16px_rgba(0,0,0,0.03)]">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          const activeColor = "text-[#DC2626]";
          const activeBg = "bg-[#DC2626]";

          return (
            <div key={item.href} className="relative flex flex-col items-center justify-center min-w-[56px]">
              <Link
                href={item.href}
                className={`flex flex-col items-center justify-center py-2 px-2 gap-1 cursor-pointer select-none transition-colors duration-150
                  ${isActive ? activeColor : "text-slate-400 hover:text-slate-700"}`}
              >
                <Icon className={`w-4 h-4 shrink-0 ${isActive ? activeColor : "text-slate-400"}`} />
                <span className="text-[9px] font-extrabold leading-none">{item.mobileLabel}</span>
                {isActive && (
                  <span className={`absolute bottom-1 w-1.5 h-1.5 ${activeBg} rounded-full`} />
                )}
              </Link>
            </div>
          );
        })}
      </nav>

      {/* ── MAIN WORKSPACE CONTENT CONTAINER ── */}
      <main className="flex-1 lg:pl-[275px] pt-16 pb-16 lg:pt-0 lg:pb-0 min-h-screen flex flex-col w-full">
        <div className={`flex-1 py-6 lg:py-8 w-full ${
          ((typeof isScopedRepresentation !== 'undefined' ? isScopedRepresentation : false) || 
          (pathname || '').startsWith('/authority/ama-cases') || 
          ['/authority/dispatch-logs', '/authority/transactions', '/authority/contact-submissions', '/authority/conversion-funnel', '/authority/replies', '/authority/ama-cases/dispatch', '/authority/ama-cases/replies'].includes(pathname || ''))
            ? 'px-4 sm:px-6 lg:px-8' 
            : 'px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto'
        }`}>
          {children}
        </div>
      </main>

    </div>
  );
}
