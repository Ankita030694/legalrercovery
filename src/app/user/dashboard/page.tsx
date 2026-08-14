"use client";

import React, { useState, useEffect, useMemo } from "react";
import { 
  Wallet, 
  Timer, 
  ShieldCheck, 
  Plus, 
  ChevronRight, 
  Download, 
  AlertTriangle, 
  FileText, 
  Clock, 
  CheckCircle2, 
  ExternalLink,
  Info,
  Loader2,
  FolderClosed,
  X,
  Check,
  ChevronDown,
  Briefcase,
  Send
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Pre-populated high-fidelity demo cases for first-time visits
const initialCases = [
  {
    id: "case-1",
    defaulterName: "Apex Digital Solutions",
    entityType: "Company",
    stuckAmount: 45000,
    dueDate: "2026-04-10",
    phone: "+91 98765 43210",
    email: "finance@apexdigital.in",
    address: "Sector 62, Noida, Uttar Pradesh, 201301",
    status: "active",
    currentStep: 2, // Notice 2 Sent
    createdAt: "2026-05-15T10:00:00Z",
    timeline: [
      { step: 1, label: "First Notice", description: "Sent after 1 hour grace period", date: "May 15, 2026", status: "completed" },
      { step: 2, label: "Second Notice", description: "Dispatched exactly 1 week after", date: "May 22, 2026", status: "completed" },
      { step: 3, label: "Third Notice", description: "Final demand notice", date: "June 05, 2026", status: "scheduled", timeRemaining: "7 days remaining" },
      { step: 4, label: "Police Complaint Draft", description: "Drafted complaint copy shared", date: "June 12, 2026", status: "locked" }
    ]
  },
  {
    id: "case-2",
    defaulterName: "Rohan Sharma (Landlord)",
    entityType: "Individual",
    stuckAmount: 25000,
    dueDate: "2026-05-01",
    phone: "+91 88888 77777",
    email: "rohanlandlord@gmail.com",
    address: "H-45, Phase 2, Ashok Vihar, Delhi, 110052",
    status: "active",
    currentStep: 1, // Notice 1 Grace Period
    createdAt: "2026-05-29T14:45:00Z",
    timeline: [
      { step: 1, label: "First Notice", description: "Draft finalized. Dispatch queued.", date: "Today, 15:45", status: "active", timeRemaining: "54 mins grace period remaining" },
      { step: 2, label: "Second Notice", description: "Dispatched exactly 1 week after", date: "June 05, 2026", status: "locked" },
      { step: 3, label: "Third Notice", description: "Final demand notice", date: "June 12, 2026", status: "locked" },
      { step: 4, label: "Police Complaint Draft", description: "Drafted complaint copy shared", date: "June 19, 2026", status: "locked" }
    ]
  }
];

export default function UserDashboard() {
  const router = useRouter();
  const [cases, setCases] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Stopping notices modal states
  const [confirmStopCaseId, setConfirmStopCaseId] = useState<string | null>(null);
  const [isStopping, setIsStopping] = useState(false);
  const [recoveredAmountInput, setRecoveredAmountInput] = useState<string>("");
  const [isTogglingPauseId, setIsTogglingPauseId] = useState<string | null>(null);

  // Onboarding Active Tour state
  const [onboardingActive, setOnboardingActive] = useState(false);
  const [viewingCase, setViewingCase] = useState<any>(null);

  // States for advocate filtering features
  const [representees, setRepresentees] = useState<any[]>([]);
  const [selectedFilterRepId, setSelectedFilterRepId] = useState("all");
  const [hasUnlimitedCases, setHasUnlimitedCases] = useState(false);
  const [userPhone, setUserPhone] = useState<string>("");
  const [isDispatchingBatch, setIsDispatchingBatch] = useState(false);
  const [userProfile, setUserProfile] = useState<any>(null);
  const [isUpdatingToggle, setIsUpdatingToggle] = useState(false);
  const [isForceDispatching, setIsForceDispatching] = useState<Record<string, boolean>>({});

  const fetchCases = async () => {
    try {
      const response = await fetch(`/api/cases?_t=${Date.now()}`);
      if (!response.ok) {
        throw new Error("Failed to fetch cases");
      }
      const json = await response.json();
      if (json.success && json.data) {
        // Map _id to id for backwards compatibility in UI
        const mapped = json.data.map((c: any) => ({
          ...c,
          id: c._id || c.id
        }));
        setCases(mapped);
      }
    } catch (error) {
      console.error("Error loading cases from API:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchUserData = async () => {
    try {
      const profileRes = await fetch("/api/users/profile");
      if (profileRes.ok) {
        const profileData = await profileRes.json();
        if (profileData.success && profileData.profile) {
          const unlimited = profileData.profile.hasUnlimitedCases || false;
          setHasUnlimitedCases(unlimited);
          setUserPhone(profileData.profile.phone || "");
          setUserProfile(profileData.profile);
          
          if (unlimited) {
            const repRes = await fetch("/api/representees");
            if (repRes.ok) {
              const repData = await repRes.json();
              if (repData.success && repData.data) {
                setRepresentees(repData.data);
              }
            }
          }
        }
      }
    } catch (err) {
      console.error("Failed to load user data for filtering:", err);
    }
  };

  const isSpecialUser = userPhone.replace(/\D/g, '').endsWith('8700343611') || userPhone.replace(/\D/g, '').endsWith('8130104447');

  const handleTriggerSpecialDispatch = async () => {
    if (isDispatchingBatch) return;
    setIsDispatchingBatch(true);
    try {
      const res = await fetch("/api/cron/dispatch-queue", {
        method: "POST",
      });
      const data = await res.json();
      if (res.ok && data.success) {
        alert(`Batch dispatch completed! Processed ${data.processed} notices.`);
        fetchCases(); // Refresh cases on the dashboard
      } else {
        alert(`Error triggering dispatch: ${data.error || "Unknown error"}`);
      }
    } catch (err: any) {
      alert(`Network error triggering dispatch: ${err.message || err}`);
    } finally {
      setIsDispatchingBatch(false);
    }
  };

  const handleForceDispatchCase = async (caseId: string) => {
    setIsForceDispatching((prev) => ({ ...prev, [caseId]: true }));
    try {
      const res = await fetch("/api/cron/dispatch-queue", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ forceCaseId: caseId })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        alert(`Next notice dispatched successfully for this case!`);
        fetchCases();
      } else {
        alert(`Error triggering dispatch: ${data.error || "Unknown error"}`);
      }
    } catch (err: any) {
      alert(`Network error triggering dispatch: ${err.message || err}`);
    } finally {
      setIsForceDispatching((prev) => ({ ...prev, [caseId]: false }));
    }
  };

  const handleTogglePoliceComplaints = async (newValue: boolean) => {
    if (!userProfile || isUpdatingToggle) return;
    setIsUpdatingToggle(true);
    
    // Optimistic update
    setUserProfile((prev: any) => prev ? { ...prev, sendPoliceComplaints: newValue } : null);
    
    try {
      const res = await fetch("/api/users/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: userProfile.name,
          email: userProfile.email,
          address: userProfile.address,
          state: userProfile.state,
          sendPoliceComplaints: newValue,
        }),
      });
      
      const data = await res.json();
      if (!res.ok || !data.success) {
        // Revert on failure
        setUserProfile((prev: any) => prev ? { ...prev, sendPoliceComplaints: !newValue } : null);
        alert(`Failed to update settings: ${data.error || "Unknown error"}`);
      }
    } catch (err: any) {
      // Revert on error
      setUserProfile((prev: any) => prev ? { ...prev, sendPoliceComplaints: !newValue } : null);
      alert(`Network error updating settings: ${err.message || err}`);
    } finally {
      setIsUpdatingToggle(false);
    }
  };



  // Initialize and load cases from MongoDB
  useEffect(() => {
    fetchCases();
    fetchUserData();

    // Sync cases updates if updated on other dashboard subroutes
    const handleRefresh = () => {
      fetchCases();
    };

    window.addEventListener("lr_cases_updated", handleRefresh);
    
    // Check onboarding tour state
    const tour = localStorage.getItem("lr_onboarding_state");
    if (!tour) {
      localStorage.setItem("lr_onboarding_state", "welcome");
      setOnboardingActive(true);
    } else if (tour === "welcome") {
      setOnboardingActive(true);
    }

    return () => window.removeEventListener("lr_cases_updated", handleRefresh);
  }, [router]);

  useEffect(() => {
    if (viewingCase || confirmStopCaseId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [viewingCase, confirmStopCaseId]);

  const handleStartNewRecoveryClick = () => {
    const tour = localStorage.getItem("lr_onboarding_state");
    if (tour === "welcome" || !tour) {
      localStorage.setItem("lr_onboarding_state", "dashboard_new_recovery");
    }
  };

  // Filtered cases calculation
  const filteredCases = useMemo(() => {
    if (selectedFilterRepId === "all") {
      return cases;
    }
    if (selectedFilterRepId === "self") {
      return cases.filter(c => !c.representeeId);
    }
    return cases.filter(c => c.representeeId === selectedFilterRepId);
  }, [cases, selectedFilterRepId]);

  // Stats Computations
  const totalStuck = useMemo(() => filteredCases.reduce((acc, c) => acc + (c.status === "active" ? c.stuckAmount : 0), 0), [filteredCases]);
  const activeCount = useMemo(() => filteredCases.filter(c => c.status === "active").length, [filteredCases]);
  const recoveredCount = useMemo(() => filteredCases.filter(c => c.status === "recovered").length, [filteredCases]);
  const totalRecoveredAmount = useMemo(() => filteredCases.reduce((acc, c) => acc + (c.status === "recovered" ? (c.recoveredAmount !== undefined ? c.recoveredAmount : c.stuckAmount) : 0), 0), [filteredCases]);

  const handleTogglePauseCase = async (caseId: string, isPausing: boolean) => {
    setIsTogglingPauseId(caseId);
    try {
      const response = await fetch("/api/cases", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: caseId,
          status: isPausing ? "paused" : "active",
        }),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || `Failed to ${isPausing ? 'pause' : 'resume'} notices.`);
      }

      await fetchCases();
      window.dispatchEvent(new Event("lr_cases_updated"));
    } catch (err: any) {
      console.error(`Error ${isPausing ? 'pausing' : 'resuming'} notices:`, err);
      alert(err.message || `Failed to ${isPausing ? 'pause' : 'resume'} notices.`);
    } finally {
      setIsTogglingPauseId(null);
    }
  };

  const handleStopNotices = (caseId: string) => {
    setConfirmStopCaseId(caseId);
    const selectedCase = cases.find(c => c.id === caseId);
    if (selectedCase) {
      setRecoveredAmountInput(selectedCase.stuckAmount.toString());
    } else {
      setRecoveredAmountInput("");
    }
  };

  const executeStopNotices = async () => {
    if (!confirmStopCaseId) return;
    const selectedCase = cases.find(c => c.id === confirmStopCaseId);
    if (!selectedCase) return;

    const amt = parseFloat(recoveredAmountInput);
    if (isNaN(amt) || amt < 0) {
      alert("Please enter a valid recovered amount.");
      return;
    }
    if (amt > selectedCase.stuckAmount) {
      alert(`Recovered dues cannot exceed the outstanding amount of ₹${selectedCase.stuckAmount.toLocaleString("en-IN")}.`);
      return;
    }

    setIsStopping(true);

    try {
      const response = await fetch("/api/cases", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: confirmStopCaseId,
          status: "recovered",
          recoveredAmount: amt
        }),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || "Failed to stop notices.");
      }

      // Re-fetch to sync
      await fetchCases();
      
      // Notify sidebar navigation to refresh the active count badge
      window.dispatchEvent(new Event("lr_cases_updated"));
    } catch (err: any) {
      console.error("Error stopping notices:", err);
      alert(err.message || "Failed to stop notices.");
    } finally {
      setIsStopping(false);
      setConfirmStopCaseId(null);
    }
  };

  const [isDeleting, setIsDeleting] = useState<Record<string, boolean>>({});

  const handleDeleteCase = async (caseId: string) => {
    if (!confirm("Are you sure you want to completely delete this record? This action cannot be undone.")) return;
    setIsDeleting((prev) => ({ ...prev, [caseId]: true }));
    try {
      const response = await fetch("/api/cases", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: caseId }),
      });
      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || "Failed to delete case.");
      }
      await fetchCases();
      window.dispatchEvent(new Event("lr_cases_updated"));
    } catch (err: any) {
      console.error("Error deleting case:", err);
      alert(err.message || "Failed to delete case.");
    } finally {
      setIsDeleting((prev) => ({ ...prev, [caseId]: false }));
    }
  };

  // Start notice dispatch state
  const [isStarting, setIsStarting] = useState<Record<string, boolean>>({});

  const handleStartDispatch = async (caseId: string) => {
    setIsStarting((prev) => ({ ...prev, [caseId]: true }));
    try {
      const response = await fetch("/api/cases/start-dispatch", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: caseId }),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || "Failed to start notice dispatch.");
      }

      await fetchCases();
      window.dispatchEvent(new Event("lr_cases_updated"));
    } catch (err: any) {
      console.error("Error starting dispatch:", err);
      alert(err.message || "Failed to start notice dispatch.");
    } finally {
      setIsStarting((prev) => ({ ...prev, [caseId]: false }));
    }
  };


  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-3">
        <Loader2 className="w-10 h-10 animate-spin text-[#DC2626]" />
        <p className="text-sm font-semibold text-slate-500">Loading cases securely...</p>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col gap-8 animate-in fade-in duration-300">
      
      {/* Mobile-only onboarding banner */}
      {onboardingActive && (
        <div className="block md:hidden bg-slate-900 text-white rounded-2xl p-4 border border-slate-700 shadow-lg text-left select-none relative animate-in fade-in duration-300 mb-2">
          <div className="flex justify-between items-start mb-2">
            <span className="text-[9px] font-black bg-red-950/50 text-red-400 px-2 py-0.5 rounded uppercase">Onboarding Guide</span>
            <button 
              onClick={() => {
                setOnboardingActive(false);
                localStorage.setItem("lr_onboarding_state", "completed");
              }} 
              className="text-slate-400 hover:text-white text-xs font-bold cursor-pointer"
            >
              ✕
            </button>
          </div>
          <p className="text-xs font-semibold leading-relaxed text-slate-100">
            Let's start your recovery! Tap <strong>"Start New Recovery"</strong> below to enter the details of the entity or individual who owes you money.
          </p>
        </div>
      )}

      {/* ── Welcome and CTA Header ── */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E5E7EB]/50 pb-6">
        <div className="text-left">
          <h1 className="text-2xl sm:text-3xl font-black text-[#111827] tracking-tight">Recovery Dashboard</h1>
          <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-1">Monitor the status of your active recovery claims and notice dispatch queues in real time.</p>
        </div>

        {/* Filter & CTA Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
          {hasUnlimitedCases && (
            <div className="relative shrink-0">
              <select
                value={selectedFilterRepId}
                onChange={(e) => setSelectedFilterRepId(e.target.value)}
                className="appearance-none bg-white border border-[#E5E7EB] hover:bg-slate-50 rounded-xl px-4 py-3 pr-10 text-xs font-black text-slate-650 cursor-pointer focus:outline-none focus:border-[#DC2626] transition-all"
              >
                <option value="all">📁 Filter: All Representations</option>
                <option value="self">👤 Filter: Self (Advocate)</option>
                {representees.map(r => (
                  <option key={r.id || r._id} value={r.id || r._id}>
                    🏢 Filter: {r.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>
          )}

          {isSpecialUser && (
            <>
              {/* Toggle Switch */}
              <div className="flex items-center justify-between sm:justify-start gap-3 bg-white border border-[#E5E7EB]/80 px-4 py-2.5 rounded-xl shadow-sm hover:shadow-md hover:shadow-slate-100 transition-all duration-200 shrink-0">
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-none">POLICE COMPLAINTS</span>
                  <span className="text-xs font-black text-slate-700 mt-1">
                    {userProfile?.sendPoliceComplaints !== false ? "Enabled" : "Disabled"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {isUpdatingToggle && <Loader2 className="w-3.5 h-3.5 animate-spin text-[#DC2626]" />}
                  <button
                    type="button"
                    role="switch"
                    aria-checked={userProfile?.sendPoliceComplaints !== false}
                    disabled={isUpdatingToggle}
                    onClick={() => handleTogglePoliceComplaints(userProfile?.sendPoliceComplaints === false)}
                    className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-250 ease-in-out focus:outline-none ${
                      userProfile?.sendPoliceComplaints !== false ? 'bg-[#DC2626]' : 'bg-slate-300'
                    } ${isUpdatingToggle ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md ring-0 transition-transform duration-250 ease-in-out ${
                        userProfile?.sendPoliceComplaints !== false ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              </div>



              <button
                onClick={handleTriggerSpecialDispatch}
                disabled={isDispatchingBatch}
                className="w-full md:w-auto px-5 py-3 text-sm font-black text-white bg-slate-800 hover:bg-slate-900 rounded-xl shadow-md hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer focus:outline-none disabled:opacity-50"
              >
                {isDispatchingBatch ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    Dispatching...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-white" />
                    Dispatch Due Batch
                  </>
                )}
              </button>
            </>
          )}

          <div className="relative w-full md:w-auto">
            <Link
              href="/user/new-recovery"
              onClick={handleStartNewRecoveryClick}
              className={`w-full md:w-auto px-5 py-3 text-sm font-black text-white bg-[#DC2626] hover:bg-[#B91C1C] rounded-xl shadow-md shadow-red-990/10 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer focus:outline-none
                ${onboardingActive ? "ring-4 ring-red-500 ring-offset-2 animate-pulse" : ""}`}
            >
              <Plus className="w-4 h-4" />
              Start New Recovery
            </Link>

            {/* Floating Tooltip next to header button on desktop */}
            {onboardingActive && (
              <div className="hidden md:block absolute right-[calc(100%+16px)] top-1/2 -translate-y-1/2 bg-slate-900 text-white rounded-2xl p-4 shadow-2xl border border-slate-700 w-80 text-left pointer-events-auto z-50 animate-in slide-in-from-right-4 duration-300">
                <div className="flex justify-between items-start mb-1.5">
                  <span className="text-[10px] font-black uppercase tracking-wider text-red-400 bg-red-950/50 px-2 py-0.5 rounded select-none">Quick Guide</span>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      setOnboardingActive(false);
                      localStorage.setItem("lr_onboarding_state", "completed");
                    }} 
                    className="text-slate-450 hover:text-white text-xs font-bold cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
                <p className="text-xs font-semibold leading-relaxed text-slate-100">
                  Enter the details of the entity/individual you wish to recover money from.
                </p>
                <div className="text-[9px] font-extrabold text-[#DC2626] uppercase mt-2 select-none tracking-wider text-center">
                  Click this button to start!
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Quick Metrics Grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Metric 1 */}
        <div className="bg-white border border-[#E5E7EB]/70 rounded-2xl p-5 text-left flex items-center gap-4 relative overflow-hidden shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center shrink-0">
            <Wallet className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-400 font-bold">Total Dues Outstanding</span>
            <span className="text-lg sm:text-xl font-black text-[#111827] leading-none mt-1.5">₹{totalStuck.toLocaleString("en-IN")}</span>
          </div>
          <div className="absolute right-0 bottom-0 translate-y-2 translate-x-2 text-red-500/5 select-none pointer-events-none">
            <Wallet className="w-24 h-24 stroke-[1.5]" />
          </div>
        </div>

        {/* Metric 2 */}
        <div className="bg-white border border-[#E5E7EB]/70 rounded-2xl p-5 text-left flex items-center gap-4 relative overflow-hidden shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
            <Timer className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-400 font-bold">Active Recovery Claims</span>
            <span className="text-lg sm:text-xl font-black text-[#111827] leading-none mt-1.5">{activeCount} Cases</span>
          </div>
          <div className="absolute right-0 bottom-0 translate-y-2 translate-x-2 text-orange-500/5 select-none pointer-events-none">
            <Timer className="w-24 h-24 stroke-[1.5]" />
          </div>
        </div>

        {/* Metric 3 */}
        <div className="bg-white border border-[#E5E7EB]/70 rounded-2xl p-5 text-left flex items-center gap-4 relative overflow-hidden shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-green-50 text-[#10B981] flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-400 font-bold">Recovered Dues</span>
            <span className="text-lg sm:text-xl font-black text-[#111827] leading-none mt-1.5">
              ₹{totalRecoveredAmount.toLocaleString("en-IN")} <span className="text-xs font-bold text-slate-400">({recoveredCount} cases)</span>
            </span>
          </div>
          <div className="absolute right-0 bottom-0 translate-y-2 translate-x-2 text-green-500/5 select-none pointer-events-none">
            <ShieldCheck className="w-24 h-24 stroke-[1.5]" />
          </div>
        </div>
      </div>

      {/* ── Active Recoveries Timeline Track ── */}
      <div className="flex flex-col gap-6 mt-2">
        {filteredCases.length === 0 ? (
          <div className="bg-white border border-dashed border-[#E5E7EB] rounded-3xl p-12 text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center mb-4">
              <FolderClosed className="w-6 h-6 text-slate-350" />
            </div>
            <h3 className="text-sm font-black text-slate-700">No Recovery Claims Yet</h3>
            <p className="text-xs text-slate-400 font-semibold max-w-xs mt-1.5 mb-6">Create a case, secure your payment, and configure automated legal demand letters.</p>
            <div className="relative">
              <Link
                href="/user/new-recovery"
                onClick={handleStartNewRecoveryClick}
                className={`px-5 py-3 text-xs font-black text-white bg-[#DC2626] hover:bg-[#B91C1C] rounded-xl transition-all block
                  ${onboardingActive ? "ring-4 ring-red-500 ring-offset-2 animate-pulse" : ""}`}
              >
                Start Your First Claim
              </Link>

              {/* Floating Tooltip below the empty state button */}
              {onboardingActive && (
                <div className="absolute top-[calc(100%+16px)] left-1/2 -translate-x-1/2 bg-slate-900 text-white rounded-2xl p-4 shadow-2xl border border-slate-700 w-72 text-left pointer-events-auto z-50 animate-in slide-in-from-top-4 duration-300">
                  <div className="flex justify-between items-start mb-1.5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-red-400 bg-red-950/50 px-2 py-0.5 rounded select-none">Quick Guide</span>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        setOnboardingActive(false);
                        localStorage.setItem("lr_onboarding_state", "completed");
                      }} 
                      className="text-slate-400 hover:text-white text-xs font-bold cursor-pointer"
                    >
                      ✕
                    </button>
                  </div>
                  <p className="text-xs font-semibold leading-relaxed text-slate-100">
                    Enter the details of the entity or individual you wish to recover money from.
                  </p>
                  <div className="text-[9px] font-extrabold text-[#DC2626] uppercase mt-2 select-none tracking-wider text-center">
                    Click this button to start!
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          filteredCases.map((c) => (
            <div 
              key={c.id} 
              onClick={() => setViewingCase(c)}
              className={`cursor-pointer bg-white border ${c.status === "recovered" ? "border-green-200 shadow-md shadow-green-500/5" : "border-[#E5E7EB]/70"} rounded-3xl p-6 sm:p-8 flex flex-col gap-6 relative transition-all duration-300 hover:shadow-md hover:shadow-slate-200/40 text-left`}
            >
              {/* Header Case details bar */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E5E7EB]/50 pb-5">
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center flex-wrap gap-2.5">
                    <h4 className="text-base font-black text-[#111827] tracking-tight">{c.defaulterName}</h4>
                    {c.representeeName && (
                      <span className="text-[10px] font-extrabold bg-red-50 text-[#DC2626] border border-red-100 px-2 py-0.5 rounded-md flex items-center gap-1 shrink-0">
                        <Briefcase className="w-3 h-3 text-[#DC2626]" />
                        Representing: {c.representeeName}
                      </span>
                    )}
                    {isSpecialUser && c.category === "loan-recovery" && (
                      <span className="text-[10px] font-extrabold bg-purple-50 text-purple-600 border border-purple-200 px-2.5 py-0.5 rounded-full uppercase tracking-wider shrink-0">
                        Loan Recovery
                      </span>
                    )}
                    {isSpecialUser && (!c.category || c.category === "general-recovery") && (
                      <span className="text-[10px] font-extrabold bg-slate-100 text-slate-500 border border-slate-200 px-2.5 py-0.5 rounded-full uppercase tracking-wider shrink-0">
                        General Recovery
                      </span>
                    )}
                    <span className={`text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full border
                      ${c.status === "recovered" 
                        ? "bg-green-50 border-green-200 text-[#10B981]" 
                        : c.status === "completed"
                        ? "bg-blue-50 border-blue-200 text-blue-600"
                        : c.status === "paused"
                        ? "bg-amber-50 border-amber-200 text-amber-600"
                        : "bg-red-50 border-red-150 text-[#DC2626]"}`}
                    >
                      {c.status === "recovered" 
                        ? "Dues Recovered" 
                        : c.status === "completed"
                        ? "Dispatches Completed"
                        : c.status === "paused"
                        ? "Paused"
                        : "Active Dispatch"}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-slate-400 text-xs font-semibold">
                    <span>📧 {c.email}</span>
                    <span>📞 {c.phone}</span>
                    <span>📍 {c.address}</span>
                    {c.ccEmails && <span className="text-[#DC2626]" title={c.ccEmails}>CC'd: {c.ccEmails}</span>}
                  </div>
                </div>

                {/* Amount Claimed & Stop Action */}
                <div className="flex items-center md:items-end justify-between md:flex-col gap-3">
                  <div className="text-left md:text-right">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Dispatch Complete</span>
                    <p className="text-lg font-black text-[#111827] leading-none mt-1">₹{c.stuckAmount.toLocaleString("en-IN")}</p>
                    {c.status === "recovered" && c.recoveredAmount !== undefined && (
                      <span className="text-[10px] text-[#10B981] font-bold block mt-1.5">
                        Recovered: ₹{c.recoveredAmount.toLocaleString("en-IN")}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2" onClick={(e) => e.stopPropagation()}>
                    {c.status === "active" && c.timeline && c.timeline[0] && c.timeline[0].status === "pending" && (
                      <button
                        onClick={() => handleStartDispatch(c.id)}
                        disabled={isStarting[c.id]}
                        className="px-4 py-2 text-xs font-black text-white bg-[#DC2626] hover:bg-[#B91C1C] disabled:bg-slate-300 disabled:cursor-not-allowed rounded-xl transition-all cursor-pointer focus:outline-none flex items-center justify-center gap-1.5 shadow-sm shadow-red-900/10 hover:-translate-y-0.5 disabled:translate-y-0"
                      >
                        {isStarting[c.id] ? (
                          <>
                            <Loader2 className="w-3.5 h-3.5 animate-spin" />
                            Starting...
                          </>
                        ) : (
                          "Start Dispatching"
                        )}
                      </button>
                    )}

                    {c.status === "active" && (userPhone === "8700343611" || userPhone === "8130104447") && (
                      <button
                        onClick={() => handleTogglePauseCase(c.id, true)}
                        disabled={isTogglingPauseId === c.id}
                        className="px-4 py-2 text-xs font-black text-amber-700 bg-amber-50 border border-amber-200 hover:bg-amber-100 hover:border-amber-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-all cursor-pointer focus:outline-none flex items-center justify-center gap-1.5"
                      >
                        {isTogglingPauseId === c.id ? (
                           <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        ) : null}
                        Pause
                      </button>
                    )}

                    {c.status === "paused" && (userPhone === "8700343611" || userPhone === "8130104447") && (
                      <button
                        onClick={() => handleTogglePauseCase(c.id, false)}
                        disabled={isTogglingPauseId === c.id}
                        className="px-4 py-2 text-xs font-black text-emerald-700 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 hover:border-emerald-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-all cursor-pointer focus:outline-none flex items-center justify-center gap-1.5"
                      >
                        {isTogglingPauseId === c.id ? (
                           <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        ) : null}
                        Resume
                      </button>
                    )}

                    {c.status === "active" && c.timeline && c.timeline.length > 0 && c.timeline[0].status !== "pending" && (userPhone === "8700343611" || userPhone === "8130104447") && (
                      <button
                        onClick={() => handleForceDispatchCase(c.id)}
                        disabled={isForceDispatching[c.id]}
                        className="px-4 py-2 text-xs font-black text-slate-700 bg-slate-100 border border-slate-300 hover:bg-slate-200 hover:border-slate-400 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-all cursor-pointer focus:outline-none flex items-center justify-center gap-1.5 shadow-sm hover:-translate-y-0.5"
                        title="Dispatch the next notice immediately, overriding the 7-day wait period"
                      >
                        {isForceDispatching[c.id] ? (
                           <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        ) : <Send className="w-3.5 h-3.5" />}
                        Force Next Notice
                      </button>
                    )}

                    {(c.status === "active" || c.status === "paused") && (
                      <button
                        onClick={() => handleStopNotices(c.id)}
                        className="px-4 py-2 text-xs font-black text-[#991B1B] bg-[#FEF2F2] border border-[#FCA5A5] hover:bg-[#FEE2E2] hover:border-[#F87171] rounded-xl transition-all cursor-pointer focus:outline-none"
                      >
                        Stop Notices
                      </button>
                    )}

                    {c.status === "completed" && (
                      <button
                        onClick={() => handleStopNotices(c.id)}
                        className="px-4 py-2 text-xs font-black text-[#047857] bg-[#ECFDF5] border border-[#A7F3D0] hover:bg-[#D1FAE5] hover:border-[#6EE7B7] rounded-xl transition-all cursor-pointer focus:outline-none"
                      >
                        Record Recovery
                      </button>
                    )}

                    <button
                      onClick={() => handleDeleteCase(c.id)}
                      disabled={isDeleting[c.id]}
                      className="px-4 py-2 text-xs font-black text-slate-500 bg-slate-100 border border-slate-200 hover:bg-slate-200 hover:text-slate-700 hover:border-slate-300 rounded-xl transition-all cursor-pointer focus:outline-none flex items-center justify-center gap-1"
                      title="Delete Record"
                    >
                      {isDeleting[c.id] ? "..." : "Delete"}
                    </button>
                  </div>
                </div>
              </div>

              {/* Progress timelines details */}
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-1.5 border-t border-[#E5E7EB]/50 pt-4">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span className="text-[10px] sm:text-[11px] font-black uppercase text-slate-400 tracking-wider">Demand Notice Dispatch Timeline</span>
                </div>

                {/* Responsive Progress Timeline Track (Vertical on mobile, Horizontal on desktop) */}
                <div className="flex flex-col md:flex-row md:items-stretch justify-between w-full relative mt-3 pb-3 gap-6 md:gap-3 md:min-h-[110px]">
                  {c.timeline.map((t: any, idx: number) => {
                    const isActive = t.status === "active" || t.status === "processing";
                    const isCompleted = t.status === "completed";
                    const isScheduled = t.status === "scheduled";
                    const isCancelled = t.status === "cancelled";
                    const isPending = t.status === "pending";
                    const isPartiallyDelivered = t.status === "partially_delivered";
                    const isFailed = t.status === "failed";
                    const isOverdue = isScheduled && t.scheduledAt && new Date(t.scheduledAt) < new Date();
                    
                    return (
                      <div key={idx} className="flex-1 flex flex-row md:flex-col items-start md:items-center relative text-left md:text-center select-none w-full min-w-full md:min-w-[95px]">
                        
                        {/* Adaptive connector line segment centered behind the circle */}
                        {idx < 3 && (
                          <div className={`absolute top-[16px] left-[15px] md:top-[14.5px] md:left-1/2 w-[3px] md:w-full h-[calc(100%+24px)] md:h-[3.5px] z-0 transition-all duration-300
                            ${isCompleted && (c.timeline[idx + 1].status === "completed" || c.timeline[idx + 1].status === "active" || c.timeline[idx + 1].status === "processing") 
                              ? "bg-[#10B981]" 
                              : isCompleted && c.timeline[idx + 1].status === "scheduled"
                              ? "bg-gradient-to-r from-[#10B981] to-slate-200"
                              : "bg-slate-200"}`} 
                          />
                        )}

                        {/* Dot indicator circle status style */}
                        <div className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300
                          ${isCompleted 
                            ? "bg-[#10B981] text-white shadow-sm shadow-green-200/50" 
                            : isActive
                            ? "border-2 border-[#DC2626] bg-white shadow-sm shadow-red-100"
                            : isFailed
                            ? "border-2 border-red-500 bg-red-50 text-red-650"
                            : isPartiallyDelivered
                            ? "border-2 border-orange-400 bg-orange-50 text-orange-650"
                            : isPending
                            ? "border-2 border-slate-350 bg-slate-50 text-slate-400"
                            : "border-2 border-slate-200 bg-white"}`}
                        >
                          {isCompleted && <Check className="w-4 h-4 stroke-[3]" />}
                          {isActive && <div className="w-2.5 h-2.5 bg-[#DC2626] rounded-full animate-pulse" />}
                          {isFailed && <AlertTriangle className="w-4 h-4 text-red-500" />}
                          {isPartiallyDelivered && <AlertTriangle className="w-4 h-4 text-orange-550" />}
                          {isPending && <FileText className="w-4 h-4 text-slate-450" />}
                          {(isScheduled || t.status === "locked") && <div className="w-2 h-2 bg-slate-200 rounded-full" />}
                          {isCancelled && <X className="w-3.5 h-3.5 text-slate-450" />}
                        </div>

                        {/* Text labels beside (mobile) or below (desktop) circle */}
                        <div className="mt-0.5 md:mt-3 ml-4 md:ml-0 flex flex-col items-start md:items-center text-left md:text-center">
                          <span className={`text-[10px] sm:text-xs font-black tracking-tight leading-tight transition-colors duration-200
                            ${isCompleted 
                              ? "text-[#10B981]" 
                              : isActive 
                              ? "text-[#DC2626]" 
                              : isFailed
                              ? "text-red-650"
                              : isPartiallyDelivered
                              ? "text-orange-650"
                              : isPending
                              ? "text-slate-500"
                              : "text-slate-400"}`}
                          >
                            {c.category === "loan-recovery" 
                              ? (t.step === 1 ? "1st Notice" : t.step === 2 ? "Police Complaint" : t.step === 3 ? "2nd Notice" : t.step === 4 ? "3rd Notice" : t.label)
                              : t.label}
                          </span>
                          
                          <span className="text-[8px] sm:text-[9.5px] text-slate-400 font-bold mt-0.5 leading-none font-sans">
                            {t.date === "Today, Grace Active" || t.date === "Awaiting dispatch" || t.date.includes("Grace") ? "Today" : t.date}
                          </span>

                          {/* Dynamic Active details */}
                          {isActive && (
                            <span className="text-[7.5px] sm:text-[8.5px] font-extrabold text-red-650 uppercase tracking-wider mt-1 animate-pulse leading-none">
                              IN PROGRESS
                            </span>
                          )}

                          {isPending && (
                            <span className="text-[7.5px] sm:text-[8.5px] font-extrabold text-slate-450 uppercase tracking-wider mt-1 leading-none">
                              QUEUED
                            </span>
                          )}

                          {isFailed && (
                            <span className="text-[7.5px] sm:text-[8.5px] font-extrabold text-red-600 uppercase tracking-wider mt-1 leading-none">
                              FAILED
                            </span>
                          )}

                          {isPartiallyDelivered && (
                            <span className="text-[7.5px] sm:text-[8.5px] font-extrabold text-orange-550 uppercase tracking-wider mt-1 leading-none">
                              PARTIAL
                            </span>
                          )}

                          {isOverdue && (
                            <span className="text-[7px] font-bold text-orange-500 leading-none mt-0.5 max-w-[85px] text-center" title="Cron dispatch failed or delayed">
                              (Tried at {new Date(t.scheduledAt).toLocaleTimeString("en-IN", {timeZone: "Asia/Kolkata", hour: '2-digit', minute:'2-digit'})} but delayed)
                            </span>
                          )}

                          {!isOverdue && t.timeRemaining && isScheduled && (
                            <span className="text-[7px] font-bold text-slate-400 leading-none mt-0.5 text-center">
                              ({t.timeRemaining.replace(' remaining', '')} left)
                            </span>
                          )}

                          {t.error && (isFailed || isPartiallyDelivered) && (
                            <span className="text-[6.5px] text-red-500 font-semibold leading-tight mt-0.5 max-w-[85px] line-clamp-2" title={t.error}>
                              {t.error}
                            </span>
                          )}

                          {/* Speed Post tracker action removed */}
                        </div>

                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* ── CASE DETAILS MODAL ── */}
      {viewingCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm" onClick={() => setViewingCase(null)}>
          <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in fade-in zoom-in-95 duration-200 p-6 md:p-8 text-left" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
              <div>
                <h2 className="text-2xl font-black text-slate-800">Case Details</h2>
                <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-wider">{viewingCase.caseId || viewingCase.id}</p>
              </div>
              <button onClick={() => setViewingCase(null)} className="p-2 hover:bg-slate-100 rounded-full transition-colors cursor-pointer">
                <X className="w-6 h-6 text-slate-500" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
              {/* Defaulter Info */}
              <div className="flex flex-col gap-3">
                <h3 className="text-sm font-black text-slate-800 uppercase tracking-wide border-b border-slate-100 pb-2">Defaulter Info</h3>
                {viewingCase.defaulterName && (
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Name</span>
                    <span className="text-sm font-semibold text-slate-700 whitespace-pre-wrap">{viewingCase.defaulterName}</span>
                  </div>
                )}
                {viewingCase.entityType && (
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Entity Type</span>
                    <span className="text-sm font-semibold text-slate-700 whitespace-pre-wrap">{viewingCase.entityType}</span>
                  </div>
                )}
                {viewingCase.phone && (
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Phone</span>
                    <span className="text-sm font-semibold text-slate-700 whitespace-pre-wrap">{viewingCase.phone}</span>
                  </div>
                )}
                {viewingCase.phone2 && (
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Phone 2</span>
                    <span className="text-sm font-semibold text-slate-700 whitespace-pre-wrap">{viewingCase.phone2}</span>
                  </div>
                )}
                {viewingCase.email && (
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Email</span>
                    <span className="text-sm font-semibold text-slate-700 whitespace-pre-wrap">{viewingCase.email}</span>
                  </div>
                )}
                {viewingCase.email2 && (
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Email 2</span>
                    <span className="text-sm font-semibold text-slate-700 whitespace-pre-wrap">{viewingCase.email2}</span>
                  </div>
                )}
                {viewingCase.ccEmails && (
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">CC Emails</span>
                    <span className="text-sm font-semibold text-slate-700 whitespace-pre-wrap">{viewingCase.ccEmails}</span>
                  </div>
                )}
                {viewingCase.address && (
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Address</span>
                    <span className="text-sm font-semibold text-slate-700 whitespace-pre-wrap">{viewingCase.address}</span>
                  </div>
                )}
              </div>

              {/* Client Info */}
              <div className="flex flex-col gap-3">
                <h3 className="text-sm font-black text-slate-800 uppercase tracking-wide border-b border-slate-100 pb-2">Client Info</h3>
                {viewingCase.clientName && (
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Client Name</span>
                    <span className="text-sm font-semibold text-slate-700 whitespace-pre-wrap">{viewingCase.clientName}</span>
                  </div>
                )}
                {viewingCase.clientPhone && (
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Client Phone</span>
                    <span className="text-sm font-semibold text-slate-700 whitespace-pre-wrap">{viewingCase.clientPhone}</span>
                  </div>
                )}
                {viewingCase.clientEmail && (
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Client Email</span>
                    <span className="text-sm font-semibold text-slate-700 whitespace-pre-wrap">{viewingCase.clientEmail}</span>
                  </div>
                )}
                {viewingCase.clientAddress && (
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Client Address</span>
                    <span className="text-sm font-semibold text-slate-700 whitespace-pre-wrap">{viewingCase.clientAddress}</span>
                  </div>
                )}
                {viewingCase.representeeName && (
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Representing</span>
                    <span className="text-sm font-semibold text-slate-700 whitespace-pre-wrap">{viewingCase.representeeName}</span>
                  </div>
                )}
              </div>

              {/* Case Info */}
              <div className="flex flex-col gap-3">
                <h3 className="text-sm font-black text-slate-800 uppercase tracking-wide border-b border-slate-100 pb-2">Case Info</h3>
                {viewingCase.stuckAmount !== undefined && (
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Stuck Amount</span>
                    <span className="text-sm font-black text-slate-800">₹{viewingCase.stuckAmount.toLocaleString("en-IN")}</span>
                  </div>
                )}
                {viewingCase.recoveredAmount !== undefined && (
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-[#10B981] uppercase tracking-wider">Recovered Amount</span>
                    <span className="text-sm font-black text-[#10B981]">₹{viewingCase.recoveredAmount.toLocaleString("en-IN")}</span>
                  </div>
                )}
                {viewingCase.dueDate && (
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Due Date</span>
                    <span className="text-sm font-semibold text-slate-700 whitespace-pre-wrap">{new Date(viewingCase.dueDate).toLocaleDateString()}</span>
                  </div>
                )}
                {viewingCase.status && (
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Status</span>
                    <span className="text-sm font-semibold text-slate-700 whitespace-pre-wrap capitalize">{viewingCase.status}</span>
                  </div>
                )}
                {viewingCase.currentStep !== undefined && (
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Current Step</span>
                    <span className="text-sm font-semibold text-slate-700 whitespace-pre-wrap">{viewingCase.currentStep}</span>
                  </div>
                )}
                {viewingCase.createdAt && (
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Created At</span>
                    <span className="text-sm font-semibold text-slate-700 whitespace-pre-wrap">{new Date(viewingCase.createdAt).toLocaleString()}</span>
                  </div>
                )}
                {viewingCase.updatedAt && (
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Updated At</span>
                    <span className="text-sm font-semibold text-slate-700 whitespace-pre-wrap">{new Date(viewingCase.updatedAt).toLocaleString()}</span>
                  </div>
                )}
              </div>

              {/* Police Station Info */}
              {(viewingCase.policeStationName || viewingCase.policeStationEmail || viewingCase.policeStationAddress) && (
                <div className="flex flex-col gap-3">
                  <h3 className="text-sm font-black text-slate-800 uppercase tracking-wide border-b border-slate-100 pb-2">Police Station Info</h3>
                  {viewingCase.policeStationName && (
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Station Name</span>
                      <span className="text-sm font-semibold text-slate-700 whitespace-pre-wrap">{viewingCase.policeStationName}</span>
                    </div>
                  )}
                  {viewingCase.policeStationEmail && (
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Station Email</span>
                      <span className="text-sm font-semibold text-slate-700 whitespace-pre-wrap">{viewingCase.policeStationEmail}</span>
                    </div>
                  )}
                  {viewingCase.policeStationAddress && (
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Station Address</span>
                      <span className="text-sm font-semibold text-slate-700 whitespace-pre-wrap">{viewingCase.policeStationAddress}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Invoices Info */}
              {(viewingCase.invoiceNo || (viewingCase.invoices && viewingCase.invoices.length > 0)) && (
                <div className="flex flex-col gap-3 lg:col-span-2">
                  <h3 className="text-sm font-black text-slate-800 uppercase tracking-wide border-b border-slate-100 pb-2">Invoices</h3>
                  {viewingCase.invoiceNo && (
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Invoice No</span>
                      <span className="text-sm font-semibold text-slate-700 whitespace-pre-wrap">{viewingCase.invoiceNo}</span>
                    </div>
                  )}
                  {viewingCase.invoiceDate && (
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Invoice Date</span>
                      <span className="text-sm font-semibold text-slate-700 whitespace-pre-wrap">{new Date(viewingCase.invoiceDate).toLocaleDateString()}</span>
                    </div>
                  )}
                  {viewingCase.invoices && viewingCase.invoices.length > 0 && (
                     <div className="mt-2">
                       <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Multiple Invoices ({viewingCase.invoices.length})</span>
                       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
                         {viewingCase.invoices.map((inv: any, i: number) => (
                           <div key={i} className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex flex-col gap-1">
                             <div className="font-bold text-sm text-slate-700">{inv.invoiceNo}</div>
                             <div className="text-xs font-semibold text-slate-500">Date: {inv.invoiceDate ? new Date(inv.invoiceDate).toLocaleDateString() : 'N/A'}</div>
                             <div className="text-xs font-semibold text-slate-500">Amount: ₹{inv.amount}</div>
                           </div>
                         ))}
                       </div>
                     </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── STOP DUES CONFIRMATION MODAL ── */}
      {confirmStopCaseId && (() => {
        const selectedCase = cases.find(c => c.id === confirmStopCaseId);
        const parsedAmtInput = parseFloat(recoveredAmountInput);
        const isAmtInvalid = selectedCase && (isNaN(parsedAmtInput) || parsedAmtInput < 0 || parsedAmtInput > selectedCase.stuckAmount);
        const isCompletedCase = selectedCase?.status === "completed";

        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <div className="bg-white rounded-3xl w-full max-w-[420px] shadow-2xl relative overflow-hidden animate-in fade-in zoom-in-95 duration-200 p-6 text-center select-none animate-in fade-in-0 duration-300">
              <div className="mx-auto w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-[#DC2626] mb-4 border border-red-100">
                <AlertTriangle className="w-5 h-5" />
              </div>
              
              <h3 className="text-lg font-black text-[#111827] tracking-tight mb-2">
                {isCompletedCase ? "Record Dues Recovery?" : "Stop Dues Notices?"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed mb-4">
                {isCompletedCase 
                  ? "Record the amount recovered from the defaulter to mark this case as settled and update your recovery metrics."
                  : "This will permanently cancel all remaining scheduled legal notices and draft complaints for this case. This action is irreversible."}
              </p>

              {/* Recovered dues input */}
              <div className="mb-6 text-left">
                <label htmlFor="recoveredDuesInput" className="block text-[10px] font-black text-slate-405 uppercase tracking-wider mb-2">
                  Dues Recovered (₹)
                </label>
                <div className="relative">
                  <input
                    id="recoveredDuesInput"
                    type="number"
                    max={selectedCase?.stuckAmount}
                    value={recoveredAmountInput}
                    onChange={(e) => setRecoveredAmountInput(e.target.value)}
                    placeholder="Enter amount recovered..."
                    className={`w-full px-4 py-3 text-sm font-semibold border rounded-xl focus:outline-none transition-colors
                      ${isAmtInvalid ? "border-red-300 focus:border-red-500" : "border-slate-200 focus:border-red-500"}`}
                  />
                </div>
                {selectedCase && parsedAmtInput > selectedCase.stuckAmount && (
                  <p className="text-[10px] text-red-500 font-bold mt-1.5 leading-tight">
                    Recovered amount cannot exceed outstanding dues of ₹{selectedCase.stuckAmount.toLocaleString("en-IN")}.
                  </p>
                )}
                {selectedCase && (isNaN(parsedAmtInput) || parsedAmtInput < 0) && (
                  <p className="text-[10px] text-red-500 font-bold mt-1.5 leading-tight">
                    Please enter a valid positive number.
                  </p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setConfirmStopCaseId(null)}
                  disabled={isStopping}
                  className="w-full py-3 text-xs font-black text-slate-650 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer focus:outline-none"
                >
                  Go Back
                </button>

                <button
                  onClick={executeStopNotices}
                  disabled={isStopping || !!isAmtInvalid}
                  className="w-full py-3 text-xs font-black text-white bg-[#DC2626] hover:bg-[#B91C1C] disabled:bg-slate-350 disabled:cursor-not-allowed rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer focus:outline-none"
                >
                  {isStopping ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    isCompletedCase ? "Record Recovery" : "Confirm Stop"
                  )}
                </button>
              </div>
            </div>
          </div>
        );
      })()}

    </div>
  );
}
