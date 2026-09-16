"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut, getSession } from "next-auth/react";
import {
  Folder,
  FolderOpen,
  Building2,
  Scale,
  ArrowLeft,
  ArrowRight,
  LogOut,
  Shield,
  Plus,
  Layers,
  Phone,
  Mail,
  User,
  X,
  Loader2,
  RefreshCw
} from "lucide-react";

interface Representee {
  _id: string;
  id?: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  state: string;
  authRepName?: string;
  authRepPhone?: string;
  createdAt: string;
}

export default function AmaCasesRepresentationFoldersLauncher() {
  const router = useRouter();
  const [adminName, setAdminName] = useState("Administrator");
  const [adminEmail, setAdminEmail] = useState("admin@legalrecovery.in");
  const [representees, setRepresentees] = useState<Representee[]>([]);
  const [cases, setCases] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Add Representation Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formAddress, setFormAddress] = useState("");
  const [formState, setFormState] = useState("");
  const [formAuthRepName, setFormAuthRepName] = useState("");
  const [formAuthRepPhone, setFormAuthRepPhone] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
    "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", 
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", 
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", 
    "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", 
    "Uttarakhand", "West Bengal", "Chandigarh", "Jammu and Kashmir", "Ladakh"
  ].sort();

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const [repRes, casesRes] = await Promise.all([
        fetch(`/api/representees?_t=${Date.now()}`),
        fetch(`/api/cases?workspace=ama&_t=${Date.now()}`)
      ]);

      if (repRes.ok) {
        const repData = await repRes.json();
        if (repData.success && repData.data) {
          setRepresentees(repData.data);
        }
      }

      if (casesRes.ok) {
        const casesData = await casesRes.json();
        if (casesData.success && casesData.data) {
          setCases(casesData.data);
        }
      }
    } catch (err) {
      console.error("Failed to load representations:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getSession().then((session) => {
      if (session && session.user) {
        setAdminName(session.user.name || "Administrator");
        setAdminEmail(session.user.email || "admin@legalrecovery.in");
      }
    });
    fetchData();
  }, []);

  const handleSignOut = async (e: React.MouseEvent) => {
    e.preventDefault();
    await signOut({ callbackUrl: "/nullify" });
  };

  const handleCreateRepresentation = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!formName.trim() || !formEmail.trim() || !formPhone.trim() || !formAddress.trim() || !formState.trim()) {
      setFormError("Please fill in all required fields marked with *.");
      return;
    }

    setIsSaving(true);
    try {
      const res = await fetch("/api/representees", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formName.trim(),
          email: formEmail.trim(),
          phone: formPhone.trim(),
          address: formAddress.trim(),
          state: formState.trim(),
          authRepName: formAuthRepName.trim(),
          authRepPhone: formAuthRepPhone.trim()
        })
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        setFormError(data.error || "Failed to create client representation.");
      } else {
        setModalOpen(false);
        setFormName("");
        setFormEmail("");
        setFormPhone("");
        setFormAddress("");
        setFormState("");
        setFormAuthRepName("");
        setFormAuthRepPhone("");
        fetchData();
      }
    } catch (err: any) {
      setFormError(err.message || "An unexpected error occurred.");
    } finally {
      setIsSaving(false);
    }
  };


  return (
    <div className="min-h-screen bg-[#F8F9FB] text-[#0F172A] font-sans antialiased flex flex-col justify-between selection:bg-[#DC2626] selection:text-white">
      
      {/* ── TOP NAV HEADER ── */}
      <header className="h-20 bg-white border-b border-slate-200/80 px-6 sm:px-12 flex items-center justify-between sticky top-0 z-30 shadow-xs">
        <div className="flex items-center gap-4">
          <Link 
            href="/authority" 
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Workspaces</span>
          </Link>
          <div className="h-5 w-px bg-slate-200 hidden sm:block" />
          <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 bg-red-50 border border-red-200/60 rounded-full text-[11px] font-bold text-[#DC2626] uppercase tracking-wider">
            <Scale className="w-3.5 h-3.5 text-[#DC2626]" />
            LegalRecovery Representation Chambers
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={() => setModalOpen(true)}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] rounded-xl transition-all shadow-[0_4px_16px_rgba(220,38,38,0.15)] cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Add Representation</span>
          </button>

          <div className="flex items-center gap-2.5 px-3 py-1.5 bg-slate-50 border border-slate-200/80 rounded-xl">
            <div className="w-7 h-7 rounded-lg bg-red-50 text-[#DC2626] flex items-center justify-center font-black text-xs">
              AD
            </div>
            <div className="hidden md:flex flex-col text-left leading-tight">
              <span className="text-xs font-bold text-slate-800">{adminName}</span>
              <span className="text-[10px] font-medium text-slate-400">{adminEmail}</span>
            </div>
          </div>

          <button
            onClick={handleSignOut}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all cursor-pointer border border-slate-200/80 hover:border-red-200"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Sign Out</span>
          </button>
        </div>
      </header>

      {/* ── MAIN REPRESENTATION FOLDERS SELECTION CONTAINER ── */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-6 sm:px-10 py-12 sm:py-16 flex flex-col justify-center">
        
        {/* Header Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200/60 text-[#DC2626] text-xs font-bold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5 text-[#DC2626]" />
            Representation Chambers
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Select Representation Workspace
          </h1>
          <p className="text-slate-500 text-sm sm:text-base mt-3 leading-relaxed">
            Choose an institutional representation folder. All dashboard metrics, cases, notice dispatches, and debtor replies will be strictly scoped to that representation.
          </p>
        </div>

        {/* ── FOLDERS GRID ── */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto w-full">
            {[1, 2].map((i) => (
              <div key={i} className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-10 shadow-sm animate-pulse h-96 flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-slate-100 mb-8" />
                  <div className="h-6 w-3/4 bg-slate-100 rounded-lg mb-3" />
                  <div className="h-4 w-1/2 bg-slate-100 rounded mb-6" />
                  <div className="space-y-2">
                    <div className="h-3 w-full bg-slate-100 rounded" />
                    <div className="h-3 w-4/5 bg-slate-100 rounded" />
                  </div>
                </div>
                <div className="h-10 w-full bg-slate-100 rounded-xl" />
              </div>
            ))}
          </div>
        ) : representees.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center max-w-md mx-auto shadow-sm">
            <div className="w-16 h-16 rounded-2xl bg-red-50 text-[#DC2626] mx-auto flex items-center justify-center mb-4">
              <Folder className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">No Representations Found</h3>
            <p className="text-slate-500 text-xs mt-1 mb-6">Create your first client representation to begin managing scoped cases.</p>
            <button
              onClick={() => setModalOpen(true)}
              className="px-5 py-2.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold rounded-xl transition-all cursor-pointer shadow-[0_4px_16px_rgba(220,38,38,0.15)]"
            >
              + Add Client Representation
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto w-full">
            {representees.map((rep) => {
              const repId = String(rep._id || rep.id || "");
              const repCases = cases.filter(c => String(c.representeeId) === String(repId));
              const repStuck = repCases.reduce((acc, c) => acc + (c.stuckAmount || 0), 0);
              const isHovered = hoveredCard === repId;

              return (
                <Link
                  key={repId}
                  href={`/authority/ama-cases/${repId}/dashboard`}
                  onMouseEnter={() => setHoveredCard(repId || null)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="group relative bg-white rounded-3xl border border-slate-200/90 hover:border-[#152331] p-8 sm:p-10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
                >
                  {/* Subtle corner glow */}
                  <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-br from-[#152331]/5 to-transparent rounded-bl-full pointer-events-none transition-opacity duration-300 group-hover:from-[#152331]/10" />

                  <div>
                    {/* Folder Icon Top */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-[#152331] border border-slate-200/80 group-hover:border-[#152331] flex items-center justify-center text-slate-700 group-hover:text-white transition-colors duration-300 shadow-xs">
                        {isHovered ? (
                          <FolderOpen className="w-8 h-8 transition-transform duration-300 group-hover:scale-105" />
                        ) : (
                          <Folder className="w-8 h-8 transition-transform duration-300 group-hover:scale-105" />
                        )}
                      </div>
                      <span className="px-3 py-1 bg-slate-100 group-hover:bg-[#152331] text-slate-600 group-hover:text-white text-xs font-bold rounded-full tracking-wide transition-colors">
                        {rep.state || "Client Representation"}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <h2 className="text-2xl font-black text-slate-900 group-hover:text-[#152331] transition-colors tracking-tight line-clamp-1">
                      {rep.name}
                    </h2>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1 truncate">
                      {rep.authRepName ? `Auth: ${rep.authRepName} • ` : ""}{rep.email}
                    </p>

                    {/* Description */}
                    <p className="text-slate-600 text-sm mt-4 leading-relaxed font-normal line-clamp-2">
                      {rep.address || `Dedicated advocate representation portal for ${rep.name}.`}
                    </p>

                    {/* Features / Metrics List */}
                    <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col gap-2.5">
                      <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-[#152331] transition-colors" />
                          <span className="text-slate-500 font-medium">Enforced Claims:</span>
                        </div>
                        <span className="font-bold text-slate-900">{repCases.length} active cases</span>
                      </div>

                      <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-[#152331] transition-colors" />
                          <span className="text-slate-500 font-medium">Total Stuck Dues:</span>
                        </div>
                        <span className="font-bold text-slate-900">₹{repStuck.toLocaleString("en-IN")}</span>
                      </div>

                      <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-[#152331] transition-colors" />
                          <span className="text-slate-500 font-medium">Zoho Batch Dispatch:</span>
                        </div>
                        <span className="font-bold text-emerald-600">Active</span>
                      </div>

                      <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-[#152331] transition-colors" />
                          <span className="text-slate-500 font-medium">Advocate Bar Stamp:</span>
                        </div>
                        <span className="font-bold text-slate-900">Enforced</span>
                      </div>
                    </div>
                  </div>

                  {/* Open Button */}
                  <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-900 group-hover:text-[#152331] transition-colors">
                      Open Representation Workspace
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-[#152331] text-slate-700 group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 shadow-xs">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {/* ── OPTION TO ADD MORE REPRESENTATIONS ── */}
        <div className="mt-10 bg-white rounded-3xl border-2 border-dashed border-slate-200 hover:border-[#DC2626] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 transition-all duration-300 group shadow-xs max-w-5xl mx-auto w-full">
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="w-14 h-14 rounded-2xl bg-red-50 border border-red-200/80 text-[#DC2626] group-hover:bg-[#DC2626] group-hover:text-white group-hover:border-[#DC2626] flex items-center justify-center shrink-0 group-hover:scale-105 transition-all duration-300">
              <Plus className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                  Add More Client Representations
                </h3>
                <span className="px-2 py-0.5 bg-red-100/60 text-[#DC2626] text-[10px] font-bold rounded-full">
                  Institutional Client
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1 max-w-xl leading-relaxed">
                Register a new corporate client or institutional creditor under LegalRecovery advocate representation. Each client automatically gets its own isolated workspace, dashboard, case intake, and notice dispatch.
              </p>
            </div>
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="shrink-0 flex items-center gap-2 px-5 py-3 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-[0_4px_16px_rgba(220,38,38,0.15)] cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>+ Add Representation</span>
          </button>
        </div>

      </main>

      {/* ── FOOTER STATUS BAR ── */}
      <footer className="h-16 border-t border-slate-200/80 bg-white px-6 sm:px-12 flex items-center justify-between text-xs text-slate-400 font-semibold">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Advocate Chambers Representations Active</span>
        </div>
        <div className="flex items-center gap-6">
          <span>Advocate Bar Stamp Active</span>
          <span>LegalRecovery</span>
        </div>
      </footer>

      {/* ── ADD REPRESENTATION MODAL ── */}
      {modalOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-slate-200 shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto text-left">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-lg font-black text-slate-900">Add New Representation</h3>
              <button onClick={() => setModalOpen(false)} className="text-slate-400 hover:text-slate-700 cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            {formError && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs font-semibold">
                {formError}
              </div>
            )}

            <form onSubmit={handleCreateRepresentation} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Organization / Company Name *
                </label>
                <input
                  type="text"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder="e.g. Apex Financial Services Pvt Ltd"
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Official Email *</label>
                  <input
                    type="email"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    placeholder="legal@apex.com"
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Official Phone *</label>
                  <input
                    type="text"
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    placeholder="+91 9876543210"
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Registered Address *</label>
                <textarea
                  value={formAddress}
                  onChange={(e) => setFormAddress(e.target.value)}
                  placeholder="Complete registered corporate office address"
                  rows={2}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">State / Jurisdiction *</label>
                <select
                  value={formState}
                  onChange={(e) => setFormState(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#DC2626] cursor-pointer"
                >
                  <option value="">Select Indian State / UT</option>
                  {indianStates.map((st) => (
                    <option key={st} value={st}>{st}</option>
                  ))}
                </select>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-2">
                  Authorized Representative (Optional)
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-slate-600 mb-1">Representative Name</label>
                    <input
                      type="text"
                      value={formAuthRepName}
                      onChange={(e) => setFormAuthRepName(e.target.value)}
                      placeholder="e.g. Rajesh Sharma"
                      className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-600 mb-1">Representative Phone</label>
                    <input
                      type="text"
                      value={formAuthRepPhone}
                      onChange={(e) => setFormAuthRepPhone(e.target.value)}
                      placeholder="+91 9999988888"
                      className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSaving}
                  className="px-5 py-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer disabled:opacity-50 shadow-[0_4px_16px_rgba(220,38,38,0.15)]"
                >
                  {isSaving && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                  <span>Create Representation</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
