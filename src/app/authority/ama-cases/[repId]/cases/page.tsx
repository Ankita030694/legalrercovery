"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  Building2,
  ArrowLeft,
  Search,
  Filter,
  Download,
  Plus,
  Play,
  Pause,
  Zap,
  Trash2,
  FileEdit,
  Eye,
  CheckCircle2,
  AlertTriangle,
  Clock,
  IndianRupee,
  Phone,
  Mail,
  MessageSquare,
  Smartphone,
  MapPin,
  RefreshCw,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  ShieldAlert,
  Loader2,
  X,
  FileText,
  Copy,
  Check,
  BookOpen,
  History,
  Send,
  MoreVertical,
  Landmark,
  Receipt,
  CreditCard,
  UserCheck,
  Shield,
  Layers,
  Calendar
} from "lucide-react";

export default function ScopedRepresentationCasesPage() {
  const params = useParams();
  const router = useRouter();
  const repId = String(params?.repId || "");
  const isDirect = repId === "direct";

  const [representee, setRepresentee] = useState<any>(null);
  const [cases, setCases] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Search & Filter
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [batchFilter, setBatchFilter] = useState("all");
  const [collapsedBatches, setCollapsedBatches] = useState<Record<string, boolean>>({});

  const toggleBatchCollapse = (batchKey: string) => {
    setCollapsedBatches(prev => ({
      ...prev,
      [batchKey]: !prev[batchKey]
    }));
  };

  // Per-row remarks states
  const [editedRemarks, setEditedRemarks] = useState<Record<string, string>>({});
  const [savingRemarksId, setSavingRemarksId] = useState<string | null>(null);

  // Open dropdown states for interactive pills
  const [activeStatusDropdownId, setActiveStatusDropdownId] = useState<string | null>(null);
  const [activeActionDropdownId, setActiveActionDropdownId] = useState<string | null>(null);

  // Action states
  const [isForceDispatching, setIsForceDispatching] = useState<Record<string, boolean>>({});
  const [isTogglingPauseId, setIsTogglingPauseId] = useState<string | null>(null);

  // Police Complaint toggle per case (true = PC is enabled/will be sent, false = PC skipped)
  const [pcToggles, setPcToggles] = useState<Record<string, boolean>>({});

  // Record Payment Modal
  const [recordPaymentCase, setRecordPaymentCase] = useState<any | null>(null);
  const [recordPaymentAmount, setRecordPaymentAmount] = useState<string>("");
  const [isSavingPayment, setIsSavingPayment] = useState(false);

  // Stop Notices Modal
  const [confirmStopCase, setConfirmStopCase] = useState<any | null>(null);
  const [stopRecoveredAmount, setStopRecoveredAmount] = useState<string>("");
  const [isStoppingNotices, setIsStoppingNotices] = useState(false);

  // Modals
  const [viewingCase, setViewingCase] = useState<any | null>(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Remarks History Modal
  const [activeHistoryModalCase, setActiveHistoryModalCase] = useState<any | null>(null);

  // Field Log Modal
  const [activeLogModal, setActiveLogModal] = useState<{
    caseId: string;
    caseName: string;
    type: "claimed" | "received" | "status";
    currentValue: string;
  } | null>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".dropdown-container")) {
        setActiveStatusDropdownId(null);
        setActiveActionDropdownId(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Fetch Cases and Representation data
  const fetchData = async () => {
    setIsLoading(true);
    try {
      let currentRep: any = null;
      if (!isDirect) {
        const repRes = await fetch(`/api/representees?_t=${Date.now()}`);
        if (repRes.ok) {
          const repData = await repRes.json();
          if (repData.success && repData.data) {
            currentRep = repData.data.find((r: any) => r._id === repId || r.id === repId);
            setRepresentee(currentRep || null);
          }
        }
      } else {
        currentRep = {
          _id: "direct",
          name: "Direct AMA Claims",
          state: "Delhi"
        };
        setRepresentee(currentRep);
      }

      const casesRes = await fetch(`/api/cases?workspace=ama&representeeId=${repId}&_t=${Date.now()}`);
      if (casesRes.ok) {
        const casesData = await casesRes.json();
        if (casesData.success && casesData.data) {
          setCases(casesData.data);
          const initialRemarks: Record<string, string> = {};
          const initialPcToggles: Record<string, boolean> = {};
          casesData.data.forEach((c: any) => {
            const id = c._id || c.id;
            initialRemarks[id] = c.remarks || "";
            // Police complaint toggle state:
            // 1. Explicit case-level setting has highest precedence
            // 2. Otherwise inherit from representee or user preference
            let isEnabled = true;
            if (typeof c.skipPoliceComplaint === "boolean") {
              isEnabled = !c.skipPoliceComplaint;
            } else if (currentRep && currentRep.sendPoliceComplaints === false) {
              isEnabled = false;
            } else if (typeof c.sendPoliceComplaints === "boolean") {
              isEnabled = c.sendPoliceComplaints;
            }
            initialPcToggles[id] = isEnabled;
          });
          setEditedRemarks(initialRemarks);
          setPcToggles(initialPcToggles);
        }
      }
    } catch (err) {
      console.error("Failed to load scoped cases:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (repId) {
      fetchData();
    }
  }, [repId]);

  // Copy helper
  const handleCopy = (text: string, key: string) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  // Format short date e.g. "15 Sept"
  const formatTableDate = (rawDate?: string) => {
    if (!rawDate) return "15 Sept";
    try {
      const d = new Date(rawDate);
      if (isNaN(d.getTime())) return "15 Sept";
      return d.toLocaleDateString("en-IN", { day: "numeric", month: "short" });
    } catch (e) {
      return "15 Sept";
    }
  };

  // Format currency helper (e.g. "₹1,13,000")
  const formatCurrency = (val?: number | string | null) => {
    if (val === undefined || val === null || val === "") return "₹0";
    const num = typeof val === "number" ? val : parseFloat(String(val).replace(/,/g, ""));
    if (isNaN(num)) return "₹0";
    return `₹${num.toLocaleString("en-IN")}`;
  };

  // Format dossier date helper (e.g. "29 Jun 2026")
  const formatDossierDate = (rawDate?: string | null) => {
    if (!rawDate) return "—";
    try {
      const d = new Date(rawDate);
      if (isNaN(d.getTime())) return rawDate;
      return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
    } catch {
      return rawDate;
    }
  };

  // Format full datetime helper (e.g. "13 Aug 2026, 05:09 pm")
  const formatFullDateTime = (rawDate?: string | null) => {
    if (!rawDate) return "—";
    try {
      const d = new Date(rawDate);
      if (isNaN(d.getTime())) return rawDate;
      return d.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    } catch {
      return rawDate;
    }
  };

  // Save Remarks with History Logging
  const handleSaveRemarks = async (caseItem: any) => {
    const caseId = caseItem._id || caseItem.id;
    setSavingRemarksId(caseId);
    const newText = editedRemarks[caseId] || "";

    try {
      const existingHistory = Array.isArray(caseItem.remarksHistory) ? caseItem.remarksHistory : [];
      const newEntry = {
        text: newText,
        author: "Advocate Chambers",
        date: new Date().toISOString()
      };
      const updatedHistory = [newEntry, ...existingHistory];

      const res = await fetch("/api/cases", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: caseId,
          remarks: newText,
          remarksHistory: updatedHistory
        })
      });

      if (res.ok) {
        setCases(prev => prev.map(c => {
          if (c._id === caseId || c.id === caseId) {
            return { ...c, remarks: newText, remarksHistory: updatedHistory };
          }
          return c;
        }));
      }
    } catch (err) {
      console.error("Failed to save remarks:", err);
    } finally {
      setSavingRemarksId(null);
    }
  };

  // Update Ledger Status (e.g. ON HOLD, NOT PAID, PAID, PAUSED)
  const handleUpdateStatus = async (caseItem: any, status: string) => {
    const caseId = caseItem._id || caseItem.id;
    setActiveStatusDropdownId(null);
    try {
      const res = await fetch("/api/cases", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: caseId,
          status
        })
      });
      if (res.ok) {
        setCases(prev => prev.map(c => (c._id === caseId || c.id === caseId) ? { ...c, status } : c));
      }
    } catch (err) {
      console.error("Failed to update status:", err);
    }
  };

  // Toggle Police Complaint for a loan-recovery case
  const handleTogglePCComplaint = async (caseItem: any, enabled: boolean) => {
    const caseId = caseItem._id || caseItem.id;
    // Optimistically update UI
    setPcToggles(prev => ({ ...prev, [caseId]: enabled }));
    try {
      await fetch("/api/cases", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: caseId, skipPoliceComplaint: !enabled })
      });
      // Reflect in cases state so refresh picks it up
      setCases(prev => prev.map(c =>
        (c._id === caseId || c.id === caseId)
          ? { ...c, skipPoliceComplaint: !enabled }
          : c
      ));
    } catch (err) {
      console.error("Failed to toggle PC complaint:", err);
      // Roll back on error
      setPcToggles(prev => ({ ...prev, [caseId]: !enabled }));
    }
  };

  // 1. Force Send Notice
  const handleForceSendNotice = async (caseItem: any) => {
    const caseId = caseItem._id || caseItem.id || caseItem.caseId;
    setIsForceDispatching(prev => ({ ...prev, [caseId]: true }));
    try {
      const res = await fetch("/api/cron/dispatch-queue", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ forceCaseId: caseId })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        alert("Next legal notice dispatched successfully for this case!");
        fetchData();
      } else {
        alert(`Notice dispatch response: ${data.message || data.error || "Notice queued for transmission"}`);
        fetchData();
      }
    } catch (err: any) {
      alert(`Network error triggering notice dispatch: ${err.message || err}`);
    } finally {
      setIsForceDispatching(prev => ({ ...prev, [caseId]: false }));
      setActiveActionDropdownId(null);
    }
  };

  // 2. Pause / Resume Notices
  const handleTogglePauseNotices = async (caseItem: any, isPausing: boolean) => {
    const caseId = caseItem._id || caseItem.id;
    setIsTogglingPauseId(caseId);
    try {
      const res = await fetch("/api/cases", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: caseId,
          status: isPausing ? "paused" : "active"
        })
      });
      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || `Failed to ${isPausing ? 'pause' : 'resume'} notices.`);
      }
      await fetchData();
    } catch (err: any) {
      console.error(err);
      alert(err.message || `Failed to ${isPausing ? 'pause' : 'resume'} notices.`);
    } finally {
      setIsTogglingPauseId(null);
      setActiveActionDropdownId(null);
    }
  };

  // 3. Record Payment
  const handleOpenRecordPayment = (caseItem: any) => {
    setRecordPaymentCase(caseItem);
    const claimed = caseItem.claimedAmount !== undefined ? caseItem.claimedAmount : (caseItem.stuckAmount || 0);
    const received = caseItem.receivedAmount !== undefined ? caseItem.receivedAmount : (caseItem.recoveredAmount || 0);
    const remaining = Math.max(0, claimed - received);
    setRecordPaymentAmount(remaining > 0 ? String(remaining) : String(claimed));
    setActiveActionDropdownId(null);
  };

  const handleExecuteRecordPayment = async () => {
    if (!recordPaymentCase) return;
    const caseId = recordPaymentCase._id || recordPaymentCase.id;
    const amt = parseFloat(recordPaymentAmount);
    if (isNaN(amt) || amt < 0) {
      alert("Please enter a valid payment amount.");
      return;
    }
    setIsSavingPayment(true);
    try {
      const claimed = recordPaymentCase.claimedAmount !== undefined ? recordPaymentCase.claimedAmount : (recordPaymentCase.stuckAmount || 0);
      const isFullyPaid = amt >= claimed;
      const res = await fetch("/api/cases", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: caseId,
          receivedAmount: amt,
          recoveredAmount: amt,
          status: isFullyPaid ? "recovered" : recordPaymentCase.status
        })
      });
      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Failed to record payment.");
      }
      await fetchData();
      setRecordPaymentCase(null);
    } catch (err: any) {
      alert(err.message || "Failed to record payment.");
    } finally {
      setIsSavingPayment(false);
    }
  };

  // 4. Stop Notices
  const handleOpenStopNotices = (caseItem: any) => {
    setConfirmStopCase(caseItem);
    const claimed = caseItem.claimedAmount !== undefined ? caseItem.claimedAmount : (caseItem.stuckAmount || 0);
    setStopRecoveredAmount(String(claimed));
    setActiveActionDropdownId(null);
  };

  const handleExecuteStopNotices = async () => {
    if (!confirmStopCase) return;
    const caseId = confirmStopCase._id || confirmStopCase.id;
    const amt = parseFloat(stopRecoveredAmount);
    if (isNaN(amt) || amt < 0) {
      alert("Please enter a valid recovered amount.");
      return;
    }
    setIsStoppingNotices(true);
    try {
      const res = await fetch("/api/cases", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: caseId,
          status: "recovered",
          recoveredAmount: amt
        })
      });
      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Failed to stop notices.");
      }
      await fetchData();
      setConfirmStopCase(null);
    } catch (err: any) {
      alert(err.message || "Failed to stop notices.");
    } finally {
      setIsStoppingNotices(false);
    }
  };

  // Delete Case
  const handleDeleteCase = async () => {
    if (!confirmDeleteId) return;
    setIsDeleting(true);
    try {
      const res = await fetch(`/api/cases?id=${confirmDeleteId}`, { method: "DELETE" });
      const data = await res.json();
      if (res.ok && data.success) {
        setCases(prev => prev.filter(item => item._id !== confirmDeleteId && item.id !== confirmDeleteId));
        setConfirmDeleteId(null);
      } else {
        alert(`Failed to delete case: ${data.error || "Unknown error"}`);
      }
    } catch (err: any) {
      alert(`Network error: ${err.message || err}`);
    } finally {
      setIsDeleting(false);
    }
  };

  // Helper to extract creation date key YYYY-MM-DD
  const getCaseDateKey = (c: any): string => {
    if (c.createdAt) {
      try {
        const d = new Date(c.createdAt);
        if (!isNaN(d.getTime())) {
          const year = d.getFullYear();
          const month = String(d.getMonth() + 1).padStart(2, "0");
          const day = String(d.getDate()).padStart(2, "0");
          return `${year}-${month}-${day}`;
        }
      } catch {}
    }
    const idStr = String(c._id || c.id || "");
    if (idStr.length === 24) {
      try {
        const timestamp = parseInt(idStr.substring(0, 8), 16) * 1000;
        const d = new Date(timestamp);
        if (!isNaN(d.getTime())) {
          const year = d.getFullYear();
          const month = String(d.getMonth() + 1).padStart(2, "0");
          const day = String(d.getDate()).padStart(2, "0");
          return `${year}-${month}-${day}`;
        }
      } catch {}
    }
    return "legacy";
  };

  // Helper to format batch display dates
  const formatBatchDisplayDate = (dateKey: string): { short: string; full: string } => {
    if (dateKey === "legacy" || dateKey === "unknown") {
      return { short: "Earlier Records", full: "Legacy / Historical Records" };
    }
    try {
      const [y, m, d] = dateKey.split("-").map(Number);
      const dateObj = new Date(y, m - 1, d);
      if (isNaN(dateObj.getTime())) return { short: dateKey, full: dateKey };

      const now = new Date();
      const todayKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
      const yesterday = new Date(now);
      yesterday.setDate(yesterday.getDate() - 1);
      const yestKey = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, "0")}-${String(yesterday.getDate()).padStart(2, "0")}`;

      const shortDate = dateObj.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
      let prefix = "";
      if (dateKey === todayKey) prefix = "Today, ";
      else if (dateKey === yestKey) prefix = "Yesterday, ";

      return {
        short: `${prefix}${shortDate}`,
        full: dateObj.toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric" })
      };
    } catch {
      return { short: dateKey, full: dateKey };
    }
  };

  // Derive master batches from all cases
  const allBatches = useMemo(() => {
    const map = new Map<string, any[]>();
    cases.forEach(c => {
      const key = getCaseDateKey(c);
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(c);
    });

    // Sort batch keys descending (newest dates first)
    const sortedKeys = Array.from(map.keys()).sort((a, b) => {
      if (a === "legacy") return 1;
      if (b === "legacy") return -1;
      return b.localeCompare(a);
    });

    return sortedKeys.map((key, index) => {
      const batchCases = map.get(key) || [];
      const dateInfo = formatBatchDisplayDate(key);
      const totalClaimed = batchCases.reduce((sum, c) => sum + (Number(c.claimedAmount !== undefined ? c.claimedAmount : (c.stuckAmount || 0))), 0);
      const totalRecovered = batchCases.reduce((sum, c) => sum + (Number(c.receivedAmount !== undefined ? c.receivedAmount : (c.recoveredAmount || 0))), 0);

      return {
        batchKey: key,
        batchNumber: index + 1,
        batchDate: dateInfo.short,
        fullDateStr: dateInfo.full,
        totalCount: batchCases.length,
        totalClaimed,
        totalRecovered,
        cases: batchCases
      };
    });
  }, [cases]);

  // Export CSV
  const handleExportCSV = () => {
    const listToExport = filteredCases.length > 0 ? filteredCases : cases;
    if (listToExport.length === 0) return;
    const headers = [
      "Batch Number",
      "Date Added",
      "Defaulter Name",
      "Phone",
      "Phone 2",
      "Email",
      "Case Manager",
      "Claimed Amount",
      "Received Amount",
      "Status",
      "Remarks"
    ];

    const rows = listToExport.map(c => {
      const dateKey = getCaseDateKey(c);
      const batchObj = allBatches.find(b => b.batchKey === dateKey);
      const batchLabel = batchObj ? `Batch #${batchObj.batchNumber} (${batchObj.batchDate})` : "Standard Batch";
      const claimed = c.claimedAmount !== undefined ? c.claimedAmount : (c.stuckAmount || 0);
      const received = c.receivedAmount !== undefined ? c.receivedAmount : (c.recoveredAmount || 0);
      const isPaused = (c.status || '').toLowerCase() === 'paused' || (c.status || '').toLowerCase() === 'on_hold';
      const isStopped = ['recovered', 'paid', 'completed', 'stopped', 'cancelled'].includes((c.status || '').toLowerCase());
      const noticeStatus = isPaused ? "PAUSED" : isStopped ? "STOPPED" : "ACTIVE";
      return [
        `"${batchLabel}"`,
        formatTableDate(c.createdAt),
        `"${(c.defaulterName || '').replace(/"/g, '""')}"`,
        c.phone || "",
        c.phone2 || "",
        c.email || "",
        c.caseManager || c.clientAuthRepName || "",
        claimed,
        received,
        noticeStatus,
        `"${(c.remarks || '').replace(/"/g, '""')}"`
      ];
    });

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `legal_recovery_ledger_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filtered cases
  const filteredCases = useMemo(() => {
    return cases.filter(c => {
      // 1. Batch Filter (divides records by when they were added)
      if (batchFilter !== "all") {
        if (getCaseDateKey(c) !== batchFilter) return false;
      }

      // 2. Status Filter
      if (statusFilter !== "all") {
        const s = (c.status || "active").toLowerCase();
        const isPaused = s === "paused" || s === "on_hold";
        const isStopped = s === "recovered" || s === "paid" || s === "completed" || s === "stopped" || s === "cancelled";
        const isActive = !isPaused && !isStopped;

        if (statusFilter === "active" && !isActive) return false;
        if (statusFilter === "paused" && !isPaused) return false;
        if (statusFilter === "stopped" && !isStopped) return false;
      }

      // 3. Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = (c.defaulterName || "").toLowerCase().includes(q);
        const matchesPhone = (c.phone || "").includes(q) || (c.phone2 || "").includes(q);
        const matchesEmail = (c.email || "").toLowerCase().includes(q);
        const matchesCaseId = (c.caseId || c._id || "").toLowerCase().includes(q);
        return matchesName || matchesPhone || matchesEmail || matchesCaseId;
      }
      return true;
    });
  }, [cases, batchFilter, statusFilter, searchQuery]);

  // Group filtered cases into batches for structured ledger display
  const groupedBatches = useMemo(() => {
    const map = new Map<string, any[]>();
    filteredCases.forEach(c => {
      const key = getCaseDateKey(c);
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(c);
    });

    return allBatches
      .map(b => {
        const batchFilteredCases = map.get(b.batchKey) || [];
        if (batchFilteredCases.length === 0) return null;
        const totalClaimed = batchFilteredCases.reduce((sum, c) => sum + (Number(c.claimedAmount !== undefined ? c.claimedAmount : (c.stuckAmount || 0))), 0);
        const totalRecovered = batchFilteredCases.reduce((sum, c) => sum + (Number(c.receivedAmount !== undefined ? c.receivedAmount : (c.recoveredAmount || 0))), 0);
        return {
          ...b,
          cases: batchFilteredCases,
          filteredCount: batchFilteredCases.length,
          totalClaimed,
          totalRecovered
        };
      })
      .filter(Boolean) as (typeof allBatches[0] & { filteredCount: number })[];
  }, [filteredCases, allBatches]);

  // Stage configuration for Escalation Lifecycle (4 Steps)
  // Labels are category-aware: loan-recovery vs general-recovery have different step sequences
  const LOAN_STAGES = [
    { key: "N1", label: "N1" }, // Day 0  – First Notice
    { key: "PC", label: "PC" }, // Day 3  – Police Complaint (3 days after N1)
    { key: "N3", label: "N3" }, // Day 7  – Second Notice (7 days after N1)
    { key: "N4", label: "N4" }  // Day 14 – Third Notice  (7 days after N3)
  ];
  const GENERAL_STAGES = [
    { key: "N1", label: "N1" }, // Day 0  – First Notice
    { key: "N2", label: "N2" }, // Day 7  – Second Notice
    { key: "N3", label: "N3" }, // Day 14 – Third Notice
    { key: "PC", label: "PC" }  // Day 21 – Police Complaint
  ];

  // Format a date+time for the timeline (e.g. "3 Oct, 2:30 pm")
  const formatStepDateTime = (isoOrStr?: string | null): string => {
    if (!isoOrStr) return "—";
    // Try parsing as ISO first, then fall back to the stored formatted string
    const d = new Date(isoOrStr);
    if (!isNaN(d.getTime())) {
      return d.toLocaleString("en-IN", {
        day: "numeric",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
      }).replace(",", "");
    }
    // Stored as pre-formatted date string (e.g. "3 Oct 2026") — return as-is short form
    return isoOrStr.split(" ").slice(0, 2).join(" ");
  };

  // Helper to compute progress for a case
  const getEscalationInfo = (c: any) => {
    const rawStatus = (c.status || "active").toLowerCase();
    const currentStep = c.currentStep || 1;
    const isLoanRecovery = (c.category || "") === "loan-recovery";

    // Pick the right stage labels based on category
    const STAGES = isLoanRecovery ? LOAN_STAGES : GENERAL_STAGES;

    // Category-aware fallback day offsets (used only when no timeline entry exists in DB):
    // loan-recovery:    N1=Day 0, PC=Day 3, N3=Day 7, N4=Day 14
    // general-recovery: N1=Day 0, N2=Day 7, N3=Day 14, PC=Day 21
    const fallbackOffsets = isLoanRecovery ? [0, 3, 7, 14] : [0, 7, 14, 21];

    let reachedCount = 0;
    if (rawStatus === "recovered" || rawStatus === "paid") {
      reachedCount = 4;
    } else if (c.timeline && Array.isArray(c.timeline)) {
      const completed = c.timeline.filter((t: any) => t.status === "completed").length;
      reachedCount = completed;
    } else {
      reachedCount = Math.max(0, currentStep - 1);
    }

    let statusBadgeText = "ACTIVE";
    let statusBadgeColor = "text-emerald-600";

    if (rawStatus === "paused" || rawStatus === "on_hold") {
      statusBadgeText = "PAUSED";
      statusBadgeColor = "text-[#D97706]";
    } else if (rawStatus === "stopped" || rawStatus === "cancelled") {
      statusBadgeText = "STOPPED";
      statusBadgeColor = "text-rose-600";
    } else if (rawStatus === "recovered" || rawStatus === "paid") {
      statusBadgeText = "RECOVERED";
      statusBadgeColor = "text-emerald-600";
    } else if (reachedCount > 0) {
      statusBadgeText = `STEP ${Math.min(4, reachedCount)} SENT`;
      statusBadgeColor = "text-[#DC2626]";
    } else {
      statusBadgeText = "ACTIVE";
      statusBadgeColor = "text-emerald-600";
    }

    // Build rich step info from DB timeline
    const baseDate = c.createdAt ? new Date(c.createdAt) : new Date();
    const stepInfos = STAGES.map((s, idx) => {
      const t = c.timeline && Array.isArray(c.timeline) ? c.timeline[idx] : null;
      const stepStatus: string = t?.status || "locked";

      if (t) {
        // Completed step — show actual dispatch time
        if (stepStatus === "completed" || stepStatus === "partially_delivered") {
          const dispatchTime = t.completedAt || t.date;
          return {
            label: formatStepDateTime(dispatchTime),
            sublabel: "Dispatched",
            isDispatched: true
          };
        }
        // Scheduled / pending step — show scheduled dispatch time
        if (t.scheduledAt) {
          return {
            label: formatStepDateTime(t.scheduledAt),
            sublabel: "Scheduled",
            isDispatched: false
          };
        }
        // Awaiting first dispatch
        if (stepStatus === "pending" || t.date === "Awaiting dispatch") {
          return {
            label: "Pending",
            sublabel: "Awaiting",
            isDispatched: false
          };
        }
        // Fallback: use the stored date string
        if (t.date && t.date !== "Awaiting dispatch") {
          return {
            label: formatStepDateTime(t.date),
            sublabel: stepStatus === "completed" ? "Dispatched" : "Scheduled",
            isDispatched: stepStatus === "completed"
          };
        }
      }

      // No timeline entry yet — calculate from case creation date using category-aware offset
      const offsetDate = new Date(baseDate);
      offsetDate.setDate(offsetDate.getDate() + fallbackOffsets[idx]);
      return {
        label: offsetDate.toLocaleDateString("en-IN", { day: "numeric", month: "short" }),
        sublabel: idx === 0 ? "Est." : `+${fallbackOffsets[idx]}d`,
        isDispatched: false
      };
    });

    return {
      reachedCount: Math.min(4, reachedCount),
      statusBadgeText,
      statusBadgeColor,
      stepInfos,
      stages: STAGES
    };
  };

  return (
    <div className="space-y-6 select-none text-left bg-[#F8F9FB] min-h-screen w-full p-4 sm:p-6 lg:p-8 rounded-3xl">
      
      {/* ── BREADCRUMB & HEADER CONTROLS ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link href="/authority/ama-cases" className="hover:text-slate-900 flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Representations</span>
          </Link>
          <span className="text-slate-300">/</span>
          <Link href={`/authority/ama-cases/${repId}/dashboard`} className="hover:text-slate-900">
            {representee?.name || "Representation"}
          </Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-900 font-bold">Cases Ledger</span>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={handleExportCSV}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-xs font-bold rounded-full transition-all shadow-xs cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export CSV</span>
          </button>
          <Link
            href={`/authority/ama-cases/${repId}/new-recovery`}
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold rounded-full transition-all shadow-[0_4px_16px_rgba(220,38,38,0.15)] cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>New Recovery Case</span>
          </Link>
        </div>
      </div>

      {/* ── TOP TOOLBAR & RECORDS PILL (NO TABS ABOVE TABLE) ── */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pt-1">
        {/* Search & Filter pills */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative min-w-[280px]">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search defaulter, phone, or email..."
              className="w-full pl-9 pr-3 py-1.5 bg-white border border-slate-200 rounded-full text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#DC2626] shadow-xs"
            />
          </div>

          {/* BATCH FILTER (DIVIDE/GROUP BY DATE ADDED) */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded-full shadow-xs">
            <Layers className="w-3.5 h-3.5 text-[#DC2626] shrink-0" />
            <select
              value={batchFilter}
              onChange={(e) => setBatchFilter(e.target.value)}
              className="bg-transparent text-xs font-semibold text-slate-700 focus:outline-none cursor-pointer pr-1"
            >
              <option value="all">All Batches ({allBatches.length} {allBatches.length === 1 ? "Date" : "Dates"} • {cases.length} Notices)</option>
              {allBatches.map((b) => (
                <option key={b.batchKey} value={b.batchKey}>
                  Batch #{b.batchNumber}: {b.batchDate} ({b.totalCount} {b.totalCount === 1 ? "notice" : "notices"})
                </option>
              ))}
            </select>
          </div>

          {/* STATUS FILTER */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-1.5 bg-white border border-slate-200 rounded-full text-xs font-semibold text-slate-700 focus:outline-none cursor-pointer shadow-xs"
          >
            <option value="all">All Notice Statuses</option>
            <option value="active">Active</option>
            <option value="paused">Paused</option>
            <option value="stopped">Stopped</option>
          </select>

          {/* ACTIVE BATCH FILTER PILL */}
          {batchFilter !== "all" && (
            <button
              onClick={() => setBatchFilter("all")}
              className="flex items-center gap-1.5 px-3 py-1 bg-red-50 hover:bg-red-100 border border-red-200 text-[#DC2626] rounded-full text-xs font-bold transition-all cursor-pointer shadow-xs"
              title="Click to reset to all batches"
            >
              <span>Filtered: {allBatches.find(b => b.batchKey === batchFilter)?.batchDate || batchFilter}</span>
              <X className="w-3 h-3" />
            </button>
          )}

          {/* QUICK COLLAPSE / EXPAND TOGGLE */}
          {groupedBatches.length > 1 && (
            <div className="hidden lg:flex items-center gap-1">
              <button
                type="button"
                onClick={() => {
                  const allCollapsed: Record<string, boolean> = {};
                  groupedBatches.forEach(b => { allCollapsed[b.batchKey] = true; });
                  setCollapsedBatches(allCollapsed);
                }}
                className="text-[11px] font-semibold text-slate-500 hover:text-slate-900 px-2 py-1 rounded hover:bg-slate-200/60 transition-colors cursor-pointer"
              >
                Collapse Batches
              </button>
              <span className="text-slate-300">|</span>
              <button
                type="button"
                onClick={() => setCollapsedBatches({})}
                className="text-[11px] font-semibold text-slate-500 hover:text-slate-900 px-2 py-1 rounded hover:bg-slate-200/60 transition-colors cursor-pointer"
              >
                Expand Batches
              </button>
            </div>
          )}
        </div>

        {/* RECORDS & BATCHES PILL */}
        <div className="self-end md:self-auto flex items-center gap-2">
          <div className="border border-slate-200/90 rounded-full px-4 py-1.5 font-bold text-xs text-slate-700 bg-white shadow-xs tracking-wider uppercase">
            {filteredCases.length} RECORDS {groupedBatches.length > 0 && `• ${groupedBatches.length} ${groupedBatches.length === 1 ? "BATCH" : "BATCHES"}`}
          </div>
        </div>
      </div>

      {/* ── ENTERPRISE RECOVERY LEDGER TABLE ── */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden">
        {isLoading ? (
          <div className="p-16 flex flex-col items-center justify-center gap-3">
            <Loader2 className="w-8 h-8 text-[#DC2626] animate-spin" />
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Loading Ledger Records...
            </span>
          </div>
        ) : filteredCases.length === 0 ? (
          <div className="p-16 text-center">
            <FileText className="w-10 h-10 text-slate-300 mx-auto mb-2" />
            <h4 className="text-sm font-bold text-slate-800">No records found</h4>
            <p className="text-xs text-slate-400 mt-1">Try adjusting your filters or search query.</p>
          </div>
        ) : (
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left border-collapse">
              {/* ── HEADER ROW (CLEAN LEGALRECOVERY TABLE HEADER) ── */}
              <thead>
                <tr className="bg-[#F8F9FA] border-b border-[#E5E7EB] text-[10px] font-extrabold text-[#6B7280] uppercase tracking-wider select-none">
                  <th className="py-3.5 px-4 w-[7%] whitespace-nowrap">DATE</th>
                  <th className="py-3.5 px-4 w-[25%]">CLIENT DETAILS</th>
                  <th className="py-3.5 px-4 w-[14%]">CLAIMED AMOUNT</th>
                  <th className="py-3.5 px-4 w-[24%]">ESCALATION LIFECYCLE</th>
                  <th className="py-3.5 px-4 w-[9%] text-center whitespace-nowrap">NOTICE STATUS</th>
                  <th className="py-3.5 px-4 w-[11%]">REMARKS</th>
                  <th className="py-3.5 px-4 w-[10%] text-center whitespace-nowrap">ACTIONS</th>
                </tr>
              </thead>

              {/* ── TABLE BODY ROWS (DIVIDED INTO DATE BATCHES) ── */}
              <tbody className="divide-y divide-stone-100 font-medium text-stone-700 bg-white">
                {groupedBatches.map((batch) => {
                  const isCollapsed = Boolean(collapsedBatches[batch.batchKey]);

                  return (
                    <React.Fragment key={`batch-group-${batch.batchKey}`}>
                      {/* ── BATCH DIVIDER HEADER ROW ── */}
                      <tr className="bg-slate-100/95 hover:bg-slate-100 border-y-2 border-slate-200 text-slate-800 select-none transition-colors">
                        <td colSpan={7} className="py-2.5 px-4">
                          <div className="flex flex-wrap items-center justify-between gap-3">
                            {/* Left: Batch Info & Toggle */}
                            <div className="flex items-center gap-3">
                              <button
                                type="button"
                                onClick={() => toggleBatchCollapse(batch.batchKey)}
                                className="flex items-center gap-2 text-left cursor-pointer group focus:outline-none"
                                title={isCollapsed ? "Click to expand batch" : "Click to collapse batch"}
                              >
                                <div className="w-5 h-5 rounded-md bg-white border border-slate-300 text-slate-600 flex items-center justify-center group-hover:border-[#DC2626] group-hover:text-[#DC2626] transition-colors shadow-2xs">
                                  {isCollapsed ? (
                                    <ChevronRight className="w-3.5 h-3.5" />
                                  ) : (
                                    <ChevronDown className="w-3.5 h-3.5" />
                                  )}
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#DC2626] text-white shadow-xs">
                                    Batch #{batch.batchNumber}
                                  </span>
                                  <span className="text-xs font-black text-slate-900 tracking-tight">
                                    {batch.batchDate}
                                  </span>
                                </div>
                              </button>

                              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-white text-slate-700 border border-slate-200 shadow-2xs">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                                {batch.cases.length} {batch.cases.length === 1 ? "Notice" : "Notices"}
                              </span>

                              <span className="text-[11px] font-medium text-slate-400 hidden sm:inline">
                                Added on {batch.fullDateStr}
                              </span>
                            </div>

                            {/* Right: Batch Financials & Quick Batch Filter */}
                            <div className="flex items-center gap-4 text-xs font-medium">
                              <span className="text-slate-600">
                                Batch Claimed: <strong className="font-mono text-slate-900 font-black">₹{batch.totalClaimed.toLocaleString("en-IN")}</strong>
                              </span>
                              {batch.totalRecovered > 0 && (
                                <span className="text-emerald-600">
                                  Recovered: <strong className="font-mono font-black">₹{batch.totalRecovered.toLocaleString("en-IN")}</strong>
                                </span>
                              )}
                              <button
                                type="button"
                                onClick={() => setBatchFilter(batchFilter === batch.batchKey ? "all" : batch.batchKey)}
                                className={`text-[11px] font-bold px-2 py-1 rounded-md transition-colors cursor-pointer border ${
                                  batchFilter === batch.batchKey
                                    ? "bg-red-50 text-[#DC2626] border-red-200"
                                    : "bg-white text-slate-600 border-slate-200 hover:text-[#DC2626] hover:border-red-200"
                                }`}
                              >
                                {batchFilter === batch.batchKey ? "Showing This Batch Only" : "Filter Batch"}
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>

                      {/* ── BATCH CASE ROWS (IF NOT COLLAPSED) ── */}
                      {!isCollapsed ? (
                        batch.cases.map((c) => {
                  const caseId = c._id || c.id;
                  const rawStatus = (c.status || "active").toLowerCase();
                  const escalation = getEscalationInfo(c);

                  const isPaused = rawStatus === "paused" || rawStatus === "on_hold";
                  const isStopped = ["recovered", "paid", "completed", "stopped", "cancelled"].includes(rawStatus);
                  const isActive = !isPaused && !isStopped;
                  const noticeStatusLabel = isPaused ? "PAUSED" : isStopped ? "STOPPED" : "ACTIVE";
                  const isOnHold = isPaused;

                  const hasValidManager = Boolean(c.caseManager && c.caseManager !== "Advocate Chambers" && c.caseManager.trim() !== "");
                  const isFreshNotice = isActive && escalation.reachedCount === 0;

                  const isLoanCase = (c.category || "") === "loan-recovery";
                  const pcEnabled = pcToggles[caseId] !== undefined
                    ? pcToggles[caseId]
                    : (typeof c.skipPoliceComplaint === "boolean"
                        ? !c.skipPoliceComplaint
                        : (representee?.sendPoliceComplaints !== false && c.sendPoliceComplaints !== false));

                  return (
                    <tr key={caseId} className="group hover:bg-[#F9FAFB] transition-colors">
                      
                      {/* 1. DATE */}
                      <td className="py-4 px-4 align-top">
                        <span className="text-xs font-semibold text-slate-600 whitespace-nowrap block pt-0.5">
                          {formatTableDate(c.createdAt)}
                        </span>
                      </td>

                      {/* 2. CLIENT DETAILS */}
                      <td className="py-4 px-4 align-top">
                        <div className="space-y-1">
                          <div
                            onClick={() => setViewingCase(c)}
                            className="text-xs font-black text-slate-900 uppercase tracking-wide leading-tight hover:text-[#DC2626] cursor-pointer flex items-center gap-1.5 group"
                            title="Click to view full case dossier"
                          >
                            <span className="group-hover:underline">{c.defaulterName}</span>
                            <Eye className="w-3 h-3 text-slate-400 group-hover:text-[#DC2626] shrink-0 opacity-70 group-hover:opacity-100" />
                          </div>

                          <div className="text-xs">
                            <span className="font-bold text-blue-600">{c.phone || "No Phone"}</span>
                            {c.phone2 && (
                              <>
                                <span className="text-slate-300 mx-1">/</span>
                                <span className="font-medium text-blue-400 text-[11px]">{c.phone2}</span>
                              </>
                            )}
                          </div>

                          <div className="text-[11px] font-medium text-purple-700 truncate max-w-[210px]" title={c.email}>
                            {c.email || "no-email@registered.in"}
                          </div>

                          {hasValidManager && (
                            <div>
                              <span className="bg-slate-100 text-slate-700 border border-slate-200 px-2.5 py-0.5 rounded-full text-[10px] font-bold inline-flex items-center">
                                By {c.caseManager}
                              </span>
                            </div>
                          )}
                        </div>
                      </td>

                      {/* 3. AMOUNTS (NON-EDITABLE CLAIMED AMOUNT) */}
                      <td className="py-4 px-4 align-top">
                        <div className="space-y-1">
                          <span className="text-[9px] font-black text-slate-400 uppercase tracking-wider block">
                            CLAIMED AMOUNT
                          </span>
                          <span className="text-sm font-black text-slate-900 font-mono block">
                            ₹{Number(c.claimedAmount !== undefined ? c.claimedAmount : (c.stuckAmount || 0)).toLocaleString("en-IN")}
                          </span>
                          {Number(c.receivedAmount || c.recoveredAmount || 0) > 0 && (
                            <span className="text-[10px] font-bold text-emerald-600 block">
                              Recovered: ₹{Number(c.receivedAmount || c.recoveredAmount || 0).toLocaleString("en-IN")}
                            </span>
                          )}
                        </div>
                      </td>

                      {/* 4. ESCALATION LIFECYCLE (4 STAGES) */}
                      <td className="py-4 px-4 align-top">
                        <div className="w-full min-w-[210px]">
                          <div className="flex items-center justify-between mb-1 h-5">
                            <span className={`text-[10px] font-black tracking-wider uppercase ${escalation.statusBadgeColor || "text-emerald-600"}`}>
                              {escalation.statusBadgeText}
                            </span>

                            {/* Start Dispatch Button on Row Hover for Fresh Notices */}
                            {isFreshNotice && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleForceSendNotice(c);
                                }}
                                disabled={isForceDispatching[caseId]}
                                className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-xs active:scale-95 ${
                                  isForceDispatching[caseId]
                                    ? "opacity-100 bg-[#DC2626] text-white"
                                    : "opacity-0 group-hover:opacity-100 bg-[#DC2626] hover:bg-[#B91C1C] hover:shadow-md text-white ring-2 ring-red-400/25"
                                }`}
                                title="Click to start dispatching notice 1 immediately"
                              >
                                {isForceDispatching[caseId] ? (
                                  <>
                                    <Loader2 className="w-2.5 h-2.5 animate-spin" />
                                    <span>Dispatching...</span>
                                  </>
                                ) : (
                                  <>
                                    <Send className="w-2.5 h-2.5" />
                                    <span>Start Dispatch</span>
                                  </>
                                )}
                              </button>
                            )}

                            <span className="text-xs font-bold text-slate-800">
                              {escalation.reachedCount} / 4
                            </span>
                          </div>

                          <div className="grid grid-cols-4 gap-2 items-end text-center w-full">
                            {escalation.stages.map((st: {key: string; label: string}, idx: number) => {
                              // Toggle is ONLY for general-recovery step 4 (Police Complaint)
                              const isPCStep = st.key === "PC" && !isLoanCase;
                              const pcSkipped = isPCStep && !pcEnabled;

                              // Treat the PC step as not-reached when it's toggled off
                              const isReached = idx < escalation.reachedCount && !pcSkipped;
                              const stepInfo = escalation.stepInfos[idx];

                              return (
                                <div key={st.key} className="flex flex-col items-center">
                                  {/* Icon row */}
                                  <div className="h-4 flex items-center justify-center mb-0.5">
                                    {isReached && (
                                      <FileText className="w-3.5 h-3.5 text-[#DC2626] fill-[#DC2626]/20" />
                                    )}
                                    {pcSkipped && (
                                      <X className="w-3 h-3 text-slate-300" />
                                    )}
                                  </div>

                                  {/* Progress bar */}
                                  <div className={`w-full h-1 rounded-full transition-all ${
                                    pcSkipped ? "bg-slate-100" : isReached ? "bg-[#DC2626]" : "bg-slate-200"
                                  }`} />

                                  {/* Step label */}
                                  <span className={`text-[10px] font-bold mt-1 block transition-colors ${
                                    pcSkipped ? "text-slate-300" : "text-slate-800"
                                  }`}>
                                    {st.label}
                                  </span>

                                  {/* Date/time — replaced with "PC Off" badge when skipped */}
                                  {pcSkipped ? (
                                    <span className="text-[9px] font-bold text-slate-300 block leading-tight whitespace-nowrap mt-0.5">
                                      PC Off
                                    </span>
                                  ) : (
                                    <>
                                      <span
                                        className={`text-[9px] font-semibold block whitespace-nowrap leading-tight ${
                                          isReached ? "text-[#DC2626]"
                                            : stepInfo?.sublabel === "Scheduled" ? "text-amber-600"
                                            : "text-slate-400"
                                        }`}
                                        title={stepInfo?.sublabel || ""}
                                      >
                                        {stepInfo?.label || "—"}
                                      </span>
                                      <span className="text-[8px] font-medium text-slate-300 block leading-tight">
                                        {stepInfo?.sublabel || ""}
                                      </span>
                                    </>
                                  )}

                                  {/* Dispatch channel icons */}
                                  <div className="h-3 flex items-center justify-center gap-0.5 mt-0.5">
                                    {isReached && !pcSkipped && (
                                      <>
                                        <Mail className="w-2.5 h-2.5 text-slate-400" />
                                        <MessageSquare className="w-2.5 h-2.5 text-slate-400" />
                                        <Smartphone className="w-2.5 h-2.5 text-slate-700 fill-slate-700" />
                                      </>
                                    )}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </td>

                      {/* 5. NOTICE STATUS */}
                      <td className="py-4 px-4 align-top text-center">
                        <div className="inline-flex flex-col items-center">
                          <div className="relative dropdown-container">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveStatusDropdownId(activeStatusDropdownId === caseId ? null : caseId);
                                setActiveActionDropdownId(null);
                              }}
                              className={`px-2.5 py-1 rounded-lg text-[10px] font-bold flex items-center justify-between gap-1.5 shadow-2xs cursor-pointer transition-colors ${
                                isPaused
                                  ? "bg-[#FEF9EE] text-[#B45309] border border-[#FDE68A] hover:bg-amber-100/50"
                                  : isStopped
                                  ? "bg-[#FFF1F2] text-[#E11D48] border border-[#FECDD3] hover:bg-rose-100/50"
                                  : "bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0] hover:bg-emerald-100/50"
                              }`}
                            >
                              <span className="flex items-center gap-1">
                                <span className={`w-1.5 h-1.5 rounded-full ${
                                  isPaused ? "bg-amber-500" : isStopped ? "bg-rose-500" : "bg-emerald-500"
                                }`} />
                                <span>{noticeStatusLabel}</span>
                              </span>
                              <ChevronDown className="w-2.5 h-2.5 text-current" />
                            </button>

                            {/* Dropdown Menu */}
                            {activeStatusDropdownId === caseId && (
                              <div className="absolute top-full mt-1 left-0 z-30 bg-white border border-slate-200 rounded-xl shadow-lg p-1 min-w-[105px] text-left">
                                <button
                                  onClick={() => handleUpdateStatus(c, "active")}
                                  className="w-full text-left px-2.5 py-1 rounded-lg text-[10px] font-bold text-emerald-700 hover:bg-emerald-50 cursor-pointer flex items-center gap-1.5"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                  <span>ACTIVE</span>
                                </button>
                                <button
                                  onClick={() => handleUpdateStatus(c, "paused")}
                                  className="w-full text-left px-2.5 py-1 rounded-lg text-[10px] font-bold text-amber-700 hover:bg-amber-50 cursor-pointer flex items-center gap-1.5"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                                  <span>PAUSED</span>
                                </button>
                                <button
                                  onClick={() => handleUpdateStatus(c, "recovered")}
                                  className="w-full text-left px-2.5 py-1 rounded-lg text-[10px] font-bold text-rose-700 hover:bg-rose-50 cursor-pointer flex items-center gap-1.5"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                                  <span>STOPPED</span>
                                </button>
                              </div>
                            )}
                          </div>

                          {/* LOG pill button below */}
                          <button
                            onClick={() => setActiveLogModal({
                              caseId,
                              caseName: c.defaulterName,
                              type: "status",
                              currentValue: noticeStatusLabel
                            })}
                            className="text-[9px] font-bold text-[#DC2626] bg-red-50 hover:bg-red-100 border border-red-200 px-2.5 py-0.5 rounded-full inline-block mt-1 cursor-pointer text-center transition-colors"
                          >
                            LOG
                          </button>
                        </div>
                      </td>

                      {/* 6. REMARKS */}
                      <td className="py-4 px-4 align-top">
                        <div className="space-y-1.5 w-full min-w-[150px]">
                          <textarea
                            value={editedRemarks[caseId] !== undefined ? editedRemarks[caseId] : (c.remarks || "")}
                            onChange={(e) => setEditedRemarks(prev => ({ ...prev, [caseId]: e.target.value }))}
                            placeholder="Add remark..."
                            className="w-full border border-slate-200 rounded-xl p-2 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#DC2626] resize-none h-14 bg-white shadow-xs"
                          />
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => setActiveHistoryModalCase(c)}
                              title="View History of Remarks"
                              className="text-[10px] font-bold text-[#DC2626] bg-red-50 hover:bg-red-100 border border-red-200 px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
                            >
                              HIST
                            </button>
                            <button
                              onClick={() => handleSaveRemarks(c)}
                              disabled={savingRemarksId === caseId}
                              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold px-4 py-1 rounded-lg tracking-wider transition-colors shadow-xs cursor-pointer disabled:opacity-50"
                            >
                              {savingRemarksId === caseId ? "..." : "SAVE"}
                            </button>
                          </div>
                        </div>
                      </td>

                      {/* 7. ACTIONS (FORCE SEND NOTICE, RECORD PAYMENT, STOP NOTICES, PAUSE NOTICES, DOSSIER, DELETE) */}
                      <td className="py-4 px-4 align-top text-center">
                        <div className="flex items-center justify-center gap-1.5">
                          {isFreshNotice && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleForceSendNotice(c);
                              }}
                              disabled={isForceDispatching[caseId]}
                              className={`px-2 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-2xs active:scale-95 flex items-center gap-1 shrink-0 ${
                                isForceDispatching[caseId]
                                  ? "opacity-100 bg-[#DC2626] text-white"
                                  : "opacity-0 group-hover:opacity-100 bg-[#DC2626] hover:bg-[#B91C1C] text-white"
                              }`}
                              title="Start Notice Dispatch"
                            >
                              {isForceDispatching[caseId] ? (
                                <Loader2 className="w-2.5 h-2.5 animate-spin" />
                              ) : (
                                <Send className="w-2.5 h-2.5" />
                              )}
                              <span>Send N1</span>
                            </button>
                          )}

                          <div className="relative inline-block text-left dropdown-container">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveActionDropdownId(activeActionDropdownId === caseId ? null : caseId);
                                setActiveStatusDropdownId(null);
                              }}
                              className="px-2.5 py-1 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-lg text-[11px] font-bold shadow-2xs flex items-center gap-1 cursor-pointer transition-colors"
                            >
                              <span>Actions</span>
                              <ChevronDown className="w-3 h-3 text-slate-400" />
                            </button>

                          {activeActionDropdownId === caseId && (
                            <div className="absolute right-0 top-full mt-1 z-40 bg-white border border-stone-200 rounded-2xl shadow-xl p-1.5 min-w-[195px] text-left divide-y divide-stone-100 animate-in fade-in zoom-in-95 duration-100">
                              <div className="space-y-0.5 pb-1">
                                {/* Force Send Notice */}
                                <button
                                  onClick={() => handleForceSendNotice(c)}
                                  disabled={isForceDispatching[caseId]}
                                  className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-blue-700 hover:bg-blue-50 flex items-center gap-2 cursor-pointer disabled:opacity-50"
                                  title="Dispatch next notice immediately"
                                >
                                  {isForceDispatching[caseId] ? (
                                    <Loader2 className="w-3.5 h-3.5 animate-spin text-blue-600" />
                                  ) : (
                                    <Send className="w-3.5 h-3.5 text-blue-600" />
                                  )}
                                  <span>Force Send Notice</span>
                                </button>

                                {/* Record Payment */}
                                <button
                                  onClick={() => handleOpenRecordPayment(c)}
                                  className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-emerald-700 hover:bg-emerald-50 flex items-center gap-2 cursor-pointer"
                                >
                                  <IndianRupee className="w-3.5 h-3.5 text-emerald-600" />
                                  <span>Record Payment</span>
                                </button>

                                {/* Pause / Resume Notices */}
                                {isOnHold ? (
                                  <button
                                    onClick={() => handleTogglePauseNotices(c, false)}
                                    disabled={isTogglingPauseId === caseId}
                                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 flex items-center gap-2 cursor-pointer"
                                  >
                                    {isTogglingPauseId === caseId ? (
                                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                                    ) : (
                                      <Play className="w-3.5 h-3.5 text-slate-600" />
                                    )}
                                    <span>Resume Notices</span>
                                  </button>
                                ) : (
                                  <button
                                    onClick={() => handleTogglePauseNotices(c, true)}
                                    disabled={isTogglingPauseId === caseId}
                                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 flex items-center gap-2 cursor-pointer"
                                  >
                                    {isTogglingPauseId === caseId ? (
                                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                                    ) : (
                                      <Pause className="w-3.5 h-3.5 text-slate-600" />
                                    )}
                                    <span>Pause Notices</span>
                                  </button>
                                )}

                                {/* Stop Notices */}
                                <button
                                  onClick={() => handleOpenStopNotices(c)}
                                  className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-rose-700 hover:bg-rose-50 flex items-center gap-2 cursor-pointer"
                                >
                                  <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                                  <span>Stop Notices</span>
                                </button>

                                {/* Police Complaint Toggle */}
                                {!isLoanCase && (
                                  <button
                                    onClick={() => {
                                      handleTogglePCComplaint(c, !pcEnabled);
                                      setActiveActionDropdownId(null);
                                    }}
                                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold flex items-center justify-between gap-2 cursor-pointer transition-colors ${
                                      pcEnabled ? "text-amber-700 hover:bg-amber-50" : "text-emerald-700 hover:bg-emerald-50"
                                    }`}
                                    title={pcEnabled ? "Disable Police Complaint dispatch for this case" : "Enable Police Complaint dispatch for this case"}
                                  >
                                    <div className="flex items-center gap-2">
                                      <ShieldAlert className={`w-3.5 h-3.5 ${pcEnabled ? "text-amber-600" : "text-emerald-600"}`} />
                                      <span>{pcEnabled ? "Disable Police Complaint" : "Enable Police Complaint"}</span>
                                    </div>
                                    <span className={`text-[9px] font-black px-1.5 py-0.5 rounded-full uppercase tracking-wider ${
                                      pcEnabled ? "bg-amber-100 text-amber-800" : "bg-emerald-100 text-emerald-800"
                                    }`}>
                                      {pcEnabled ? "Active" : "Disabled"}
                                    </span>
                                  </button>
                                )}
                              </div>

                              <div className="space-y-0.5 pt-1">
                                <button
                                  onClick={() => {
                                    setViewingCase(c);
                                    setActiveActionDropdownId(null);
                                  }}
                                  className="w-full text-left px-3 py-1.5 rounded-xl text-xs font-semibold text-stone-700 hover:bg-stone-50 flex items-center gap-2 cursor-pointer"
                                >
                                  <FileEdit className="w-3.5 h-3.5 text-stone-500" />
                                  <span>View Dossier</span>
                                </button>

                                <button
                                  onClick={() => {
                                    setConfirmDeleteId(caseId);
                                    setActiveActionDropdownId(null);
                                  }}
                                  className="w-full text-left px-3 py-1.5 rounded-xl text-xs font-semibold text-rose-600 hover:bg-rose-50 flex items-center gap-2 cursor-pointer"
                                >
                                  <Trash2 className="w-3.5 h-3.5 text-rose-500" />
                                  <span>Delete Case</span>
                                </button>
                              </div>
                            </div>
                          )}
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })
                      ) : (
                        <tr key={`batch-collapsed-row-${batch.batchKey}`} className="bg-white">
                          <td colSpan={7} className="py-3 px-6 text-xs text-slate-400 font-semibold italic">
                            Batch #{batch.batchNumber} collapsed ({batch.cases.length} notices hidden). Click header or chevron to expand.
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* ── RECORD PAYMENT MODAL ── */}
      {recordPaymentCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl p-6 sm:p-7 space-y-5 border border-stone-200 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center font-bold">
                  <IndianRupee className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-black text-stone-900">Record Payment Received</h3>
                  <p className="text-xs text-stone-500">{recordPaymentCase.defaulterName}</p>
                </div>
              </div>
              <button onClick={() => setRecordPaymentCase(null)} className="text-stone-400 hover:text-stone-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-3.5 bg-stone-50 rounded-2xl space-y-1.5 text-xs text-stone-600">
              <div className="flex justify-between">
                <span>Claimed Debt:</span>
                <span className="font-bold text-stone-900">
                  ₹{Number(recordPaymentCase.claimedAmount !== undefined ? recordPaymentCase.claimedAmount : (recordPaymentCase.stuckAmount || 0)).toLocaleString("en-IN")}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Currently Recorded:</span>
                <span className="font-bold text-emerald-700">
                  ₹{Number(recordPaymentCase.receivedAmount || recordPaymentCase.recoveredAmount || 0).toLocaleString("en-IN")}
                </span>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-stone-700 block">
                Total Amount Recovered / Received (₹)
              </label>
              <input
                type="number"
                value={recordPaymentAmount}
                onChange={(e) => setRecordPaymentAmount(e.target.value)}
                placeholder="Enter payment amount..."
                className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm font-bold text-stone-900 focus:outline-none focus:border-emerald-500"
              />
              <p className="text-[11px] text-stone-400">
                If amount equals or exceeds claimed amount, case status will automatically update to PAID.
              </p>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setRecordPaymentCase(null)}
                className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold rounded-xl"
              >
                Cancel
              </button>
              <button
                onClick={handleExecuteRecordPayment}
                disabled={isSavingPayment}
                className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shadow-xs"
              >
                {isSavingPayment ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Check className="w-3.5 h-3.5" />}
                <span>Save Payment</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── STOP NOTICES MODAL ── */}
      {confirmStopCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl p-6 sm:p-7 space-y-5 border border-stone-200 text-center animate-in fade-in zoom-in-95 duration-150">
            <div className="w-12 h-12 rounded-full bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-black text-stone-900">Stop Active Legal Notices?</h3>
              <p className="text-xs text-stone-500 leading-relaxed">
                This will permanently cancel scheduled dispatch notices and mark this case as settled/recovered for <span className="font-bold text-stone-800">{confirmStopCase.defaulterName}</span>.
              </p>
            </div>

            <div className="text-left space-y-1.5">
              <label className="text-xs font-bold text-stone-700 block">
                Final Recovered Amount (₹)
              </label>
              <input
                type="number"
                value={stopRecoveredAmount}
                onChange={(e) => setStopRecoveredAmount(e.target.value)}
                placeholder="Enter recovered amount..."
                className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm font-bold text-stone-900 focus:outline-none focus:border-rose-500"
              />
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setConfirmStopCase(null)}
                disabled={isStoppingNotices}
                className="flex-1 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold rounded-xl"
              >
                Go Back
              </button>
              <button
                onClick={handleExecuteStopNotices}
                disabled={isStoppingNotices}
                className="flex-1 py-2.5 bg-rose-600 hover:bg-rose-700 disabled:opacity-50 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 shadow-xs"
              >
                {isStoppingNotices ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Check className="w-3.5 h-3.5" />}
                <span>Confirm & Stop Notices</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── FLOATING VAULT PILL (EXACT BOTTOM RIGHT OF REFERENCE IMAGE) ── */}
      <div
        onClick={() => router.push(`/authority/ama-cases/${repId}/dashboard`)}
        className="fixed bottom-6 right-6 z-40 bg-white/95 backdrop-blur-sm border border-stone-200/90 rounded-full px-4 py-2 shadow-lg flex items-center gap-2 text-xs font-bold text-stone-700 hover:bg-stone-50 cursor-pointer transition-all hover:scale-105"
      >
        <BookOpen className="w-3.5 h-3.5 text-stone-600" />
        <span>Vault</span>
        <span className="text-[10px] text-stone-400 font-mono">⌘Y</span>
      </div>

      {/* ── REMARKS HISTORY MODAL ── */}
      {activeHistoryModalCase && (
        <div className="fixed inset-0 bg-stone-900/40 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 border border-stone-200 shadow-xl space-y-4 text-left">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <div>
                <span className="text-[10px] font-bold text-[#7C3AED] uppercase tracking-wider">Audit Trail</span>
                <h3 className="text-base font-black text-stone-900">Remarks History</h3>
                <span className="text-xs text-stone-500 font-semibold">{activeHistoryModalCase.defaulterName}</span>
              </div>
              <button
                onClick={() => setActiveHistoryModalCase(null)}
                className="p-1 text-stone-400 hover:text-stone-700 rounded-lg"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
              {activeHistoryModalCase.remarksHistory && activeHistoryModalCase.remarksHistory.length > 0 ? (
                activeHistoryModalCase.remarksHistory.map((h: any, i: number) => (
                  <div key={i} className="p-3 bg-stone-50 rounded-xl border border-stone-100 text-xs">
                    <p className="font-semibold text-stone-800">{h.text}</p>
                    <div className="flex items-center justify-between mt-1 text-[10px] text-stone-400">
                      <span>{h.author || "Advocate Chambers"}</span>
                      <span>{new Date(h.date || Date.now()).toLocaleDateString("en-IN", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })}</span>
                    </div>
                  </div>
                ))
              ) : activeHistoryModalCase.remarks ? (
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-100 text-xs">
                  <p className="font-semibold text-stone-800">{activeHistoryModalCase.remarks}</p>
                  <div className="flex items-center justify-between mt-1 text-[10px] text-stone-400">
                    <span>Current Active Remark</span>
                    <span>{formatTableDate(activeHistoryModalCase.updatedAt || activeHistoryModalCase.createdAt)}</span>
                  </div>
                </div>
              ) : (
                <p className="text-xs text-stone-400 italic text-center py-4">No historical remarks recorded yet.</p>
              )}
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setActiveHistoryModalCase(null)}
                className="px-4 py-2 bg-stone-900 text-white rounded-xl text-xs font-bold hover:bg-stone-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── FIELD AUDIT LOG MODAL ── */}
      {activeLogModal && (
        <div className="fixed inset-0 bg-stone-900/40 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 border border-stone-200 shadow-xl space-y-4 text-left">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <div>
                <span className="text-[10px] font-bold text-[#7C3AED] uppercase tracking-wider">Field Log Audit</span>
                <h3 className="text-base font-black text-stone-900 capitalize">{activeLogModal.type} Ledger</h3>
                <span className="text-xs text-stone-500 font-semibold">{activeLogModal.caseName}</span>
              </div>
              <button
                onClick={() => setActiveLogModal(null)}
                className="p-1 text-stone-400 hover:text-stone-700 rounded-lg"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-100 text-xs space-y-1.5">
              <div className="flex justify-between text-stone-500">
                <span>Field:</span>
                <span className="font-bold text-stone-800 uppercase">{activeLogModal.type}</span>
              </div>
              <div className="flex justify-between text-stone-500">
                <span>Current Value:</span>
                <span className="font-black text-stone-900">{activeLogModal.currentValue}</span>
              </div>
              <div className="flex justify-between text-stone-500">
                <span>Audit Status:</span>
                <span className="font-bold text-emerald-600">Verified & Intact</span>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setActiveLogModal(null)}
                className="px-4 py-2 bg-stone-900 text-white rounded-xl text-xs font-bold hover:bg-stone-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── DELETE CONFIRMATION MODAL ── */}
      {confirmDeleteId && (
        <div className="fixed inset-0 bg-stone-900/40 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 border border-stone-200 shadow-xl space-y-4 text-center">
            <div className="w-12 h-12 rounded-full bg-rose-50 border border-rose-100 text-rose-600 flex items-center justify-center mx-auto">
              <Trash2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-black text-stone-900">Delete Case Record?</h3>
              <p className="text-xs text-stone-500 mt-1">This will delete this recovery record from this representation.</p>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setConfirmDeleteId(null)}
                className="flex-1 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold rounded-xl"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteCase}
                disabled={isDeleting}
                className="flex-1 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-xl"
              >
                {isDeleting ? "Deleting..." : "Confirm Delete"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── CASE DOSSIER VIEW MODAL ── */}
      {viewingCase && (() => {
        const isLoan = viewingCase.category === "loan-recovery";
        const currentStep = viewingCase.currentStep || 1;
        const totalClaimed = Number(viewingCase.stuckAmount || 0);
        const totalRecovered = Number(viewingCase.recoveredAmount || 0);
        const outstandingBal = Math.max(0, totalClaimed - totalRecovered);

        const timelineSteps = Array.isArray(viewingCase.timeline) && viewingCase.timeline.length > 0
          ? viewingCase.timeline
          : [
              { step: 1, label: "First Notice", description: "Notice drafted & dispatched", status: "completed", date: viewingCase.createdAt },
              { step: 2, label: isLoan ? "Police Complaint" : "Second Notice", description: isLoan ? "Complaint dispatched to SHO & borrower" : "Dispatched 7 days after first notice", status: currentStep >= 2 ? "completed" : "locked", date: "—" },
              { step: 3, label: isLoan ? "Second Notice" : "Third Notice", description: "Second demand notice escalation", status: currentStep >= 3 ? "completed" : "locked", date: "—" },
              { step: 4, label: isLoan ? "Third Notice" : "Police Complaint Draft", description: "Final complaint / demand draft", status: currentStep >= 4 ? "completed" : "locked", date: "—" },
            ];

        return (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 z-50 animate-fadeIn">
            <div className="bg-white rounded-3xl max-w-4xl w-full border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[92vh] text-left">
              
              {/* Header */}
              <div className="p-5 sm:p-6 border-b border-slate-200 bg-slate-50/80 flex items-start justify-between gap-4 shrink-0">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    {/* Category badge */}
                    {isLoan ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200">
                        <Landmark className="w-3 h-3 text-blue-600" />
                        Loan Recovery
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200">
                        <Receipt className="w-3 h-3 text-[#DC2626]" />
                        General Recovery
                      </span>
                    )}

                    {/* Entity Type */}
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-200/80 text-slate-700">
                      {viewingCase.entityType || "Company"}
                    </span>

                    {/* Status Pill */}
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide border ${
                        viewingCase.status === "recovered"
                          ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                          : viewingCase.status === "paused"
                          ? "bg-amber-50 text-amber-800 border-amber-200"
                          : viewingCase.status === "stopped"
                          ? "bg-rose-50 text-rose-700 border-rose-200"
                          : "bg-emerald-50/80 text-emerald-800 border-emerald-200"
                      }`}
                    >
                      {viewingCase.status || "active"} • Step {currentStep} of 4
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    {viewingCase.defaulterName}
                  </h3>

                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-mono">
                    <span>Case ID: <strong className="text-slate-800">{viewingCase.caseId || viewingCase._id}</strong></span>
                    <button
                      onClick={() => handleCopy(viewingCase.caseId || viewingCase._id, "dossierCaseId")}
                      className="p-1 hover:bg-slate-200 rounded text-slate-400 hover:text-slate-700 transition cursor-pointer"
                      title="Copy Case ID"
                    >
                      {copiedKey === "dossierCaseId" ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                    {viewingCase.representeeName && (
                      <>
                        <span className="text-slate-300">•</span>
                        <span className="text-slate-600 font-sans font-medium">{viewingCase.representeeName}</span>
                      </>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => setViewingCase(null)}
                  className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-2xl transition cursor-pointer shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto p-5 sm:p-6 space-y-6">

                {/* 1. FINANCIAL SUMMARY METRICS */}
                <div>
                  <h4 className="text-[11px] font-black uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                    <IndianRupee className="w-3.5 h-3.5 text-slate-400" />
                    Financial Overview & Outstanding Balance
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-4 rounded-2xl bg-red-50/50 border border-red-200/70">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                        {isLoan ? "Total Loan Outstanding" : "Total Claimed Amount"}
                      </span>
                      <div className="text-2xl font-black text-slate-900">
                        {formatCurrency(totalClaimed)}
                      </div>
                      <span className="text-[10px] text-slate-500 mt-1 block">Principal Claim Registered</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200/70">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block mb-1">
                        Total Recovered
                      </span>
                      <div className="text-2xl font-black text-emerald-700">
                        {formatCurrency(totalRecovered)}
                      </div>
                      <span className="text-[10px] text-emerald-600/80 mt-1 block">Paid / Settled to Date</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-rose-50/40 border border-rose-200/70">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-rose-800 block mb-1">
                        Remaining Outstanding
                      </span>
                      <div className="text-2xl font-black text-rose-950">
                        {formatCurrency(outstandingBal)}
                      </div>
                      <span className="text-[10px] text-rose-700/80 mt-1 block">Current Recoverable Balance</span>
                    </div>
                  </div>
                </div>

                {/* 2. CASE-SPECIFIC PARTICULARS: LOAN VS GENERAL */}
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-[11px] font-black uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
                      {isLoan ? (
                        <>
                          <CreditCard className="w-3.5 h-3.5 text-blue-600" />
                          Loan Terms & Computation Schedule
                        </>
                      ) : (
                        <>
                          <Receipt className="w-3.5 h-3.5 text-[#DC2626]" />
                          Commercial Invoicing & Terms
                        </>
                      )}
                    </h4>
                    <span className="text-[10px] font-bold text-stone-400 uppercase">
                      {isLoan ? "Loan Recovery Record" : "General Recovery Record"}
                    </span>
                  </div>

                  {isLoan ? (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                      <div className="bg-white p-3 rounded-xl border border-stone-200/60">
                        <span className="text-[10px] font-bold uppercase text-stone-400 block">Disbursed Principal</span>
                        <span className="font-black text-stone-900 text-sm mt-0.5 block">
                          {viewingCase.disbursedAmount ? formatCurrency(viewingCase.disbursedAmount) : "—"}
                        </span>
                      </div>
                      <div className="bg-white p-3 rounded-xl border border-stone-200/60">
                        <span className="text-[10px] font-bold uppercase text-stone-400 block">Disbursement Date</span>
                        <span className="font-bold text-stone-800 mt-0.5 block">
                          {formatDossierDate(viewingCase.disbursementDate)}
                        </span>
                      </div>
                      <div className="bg-white p-3 rounded-xl border border-stone-200/60">
                        <span className="text-[10px] font-bold uppercase text-stone-400 block">As-On Cutoff Date</span>
                        <span className="font-bold text-stone-800 mt-0.5 block">
                          {formatDossierDate(viewingCase.asOnDate)}
                        </span>
                      </div>
                      <div className="bg-white p-3 rounded-xl border border-stone-200/60">
                        <span className="text-[10px] font-bold uppercase text-stone-400 block">Repayment / Due Date</span>
                        <span className="font-bold text-rose-700 mt-0.5 block">
                          {formatDossierDate(viewingCase.dueDate)}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                      <div className="bg-white p-3 rounded-xl border border-stone-200/60">
                        <span className="text-[10px] font-bold uppercase text-stone-400 block">Primary Invoice No</span>
                        <span className="font-bold text-stone-900 truncate mt-0.5 block" title={viewingCase.invoiceNo}>
                          {viewingCase.invoiceNo || "—"}
                        </span>
                      </div>
                      <div className="bg-white p-3 rounded-xl border border-stone-200/60">
                        <span className="text-[10px] font-bold uppercase text-stone-400 block">Invoice Date</span>
                        <span className="font-bold text-stone-800 mt-0.5 block">
                          {formatDossierDate(viewingCase.invoiceDate)}
                        </span>
                      </div>
                      <div className="bg-white p-3 rounded-xl border border-stone-200/60">
                        <span className="text-[10px] font-bold uppercase text-stone-400 block">Payment Due Date</span>
                        <span className="font-bold text-rose-700 mt-0.5 block">
                          {formatDossierDate(viewingCase.dueDate)}
                        </span>
                      </div>
                      <div className="bg-white p-3 rounded-xl border border-stone-200/60">
                        <span className="text-[10px] font-bold uppercase text-stone-400 block">Computation / As On</span>
                        <span className="font-bold text-stone-800 mt-0.5 block">
                          {formatDossierDate(viewingCase.asOnDate) || "Standard Commercial"}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Itemized Invoices / Loans Breakdown Table */}
                  {Array.isArray(viewingCase.invoices) && viewingCase.invoices.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-stone-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-black uppercase tracking-wider text-stone-500">
                          {isLoan ? "Itemized Loans / Accounts Schedule" : "Itemized Invoices Breakdown"} ({viewingCase.invoices.length})
                        </span>
                      </div>
                      <div className="rounded-xl border border-stone-200 overflow-hidden bg-white">
                        <table className="w-full text-left text-xs">
                          <thead className="bg-stone-100/70 border-b border-stone-200 text-[10px] font-bold uppercase text-stone-500">
                            <tr>
                              <th className="py-2 px-3">#</th>
                              <th className="py-2 px-3">{isLoan ? "Loan / Account ID" : "Invoice No"}</th>
                              <th className="py-2 px-3">{isLoan ? "Disbursement Date" : "Invoice Date"}</th>
                              <th className="py-2 px-3">Due Date</th>
                              <th className="py-2 px-3 text-right">Amount</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-stone-100">
                            {viewingCase.invoices.map((inv: any, idx: number) => (
                              <tr key={idx} className="hover:bg-stone-50/50">
                                <td className="py-2 px-3 font-mono text-stone-400 text-[11px]">{idx + 1}</td>
                                <td className="py-2 px-3 font-mono font-bold text-stone-800">
                                  {inv.invoiceNo || inv.loanId || inv.accountNo || `Item ${idx + 1}`}
                                </td>
                                <td className="py-2 px-3 text-stone-600">
                                  {formatDossierDate(inv.invoiceDate || inv.date)}
                                </td>
                                <td className="py-2 px-3 text-stone-600">
                                  {formatDossierDate(inv.dueDate)}
                                </td>
                                <td className="py-2 px-3 text-right font-black text-stone-900">
                                  {formatCurrency(inv.amount)}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>

                {/* 3. DEBTOR / DEFENDER COORDINATES */}
                <div>
                  <h4 className="text-[11px] font-black uppercase tracking-wider text-stone-400 mb-3 flex items-center gap-1.5">
                    <UserCheck className="w-3.5 h-3.5 text-stone-400" />
                    {isLoan ? "Borrower / Defaulter Coordinates" : "Opposing Party / Debtor Coordinates"}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {/* Primary Phone */}
                    <div className="p-3.5 bg-stone-50 rounded-2xl border border-stone-200/70 flex items-start justify-between">
                      <div>
                        <span className="text-stone-400 block text-[10px] font-bold uppercase">Primary Phone</span>
                        <div className="font-bold text-stone-900 mt-0.5 flex items-center gap-2">
                          <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{viewingCase.phone || "No Phone Registered"}</span>
                        </div>
                      </div>
                      {viewingCase.phone && (
                        <button
                          onClick={() => handleCopy(viewingCase.phone, "dossierPhone")}
                          className="p-1.5 hover:bg-white rounded-lg text-stone-400 hover:text-stone-700 transition cursor-pointer"
                          title="Copy Phone"
                        >
                          {copiedKey === "dossierPhone" ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      )}
                    </div>

                    {/* Secondary Phone */}
                    <div className="p-3.5 bg-stone-50 rounded-2xl border border-stone-200/70 flex items-start justify-between">
                      <div>
                        <span className="text-stone-400 block text-[10px] font-bold uppercase">Secondary Phone</span>
                        <div className="font-bold text-stone-900 mt-0.5 flex items-center gap-2">
                          <Smartphone className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                          <span>{viewingCase.phone2 || "—"}</span>
                        </div>
                      </div>
                      {viewingCase.phone2 && (
                        <button
                          onClick={() => handleCopy(viewingCase.phone2, "dossierPhone2")}
                          className="p-1.5 hover:bg-white rounded-lg text-stone-400 hover:text-stone-700 transition cursor-pointer"
                          title="Copy Secondary Phone"
                        >
                          {copiedKey === "dossierPhone2" ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      )}
                    </div>

                    {/* Primary Email */}
                    <div className="p-3.5 bg-stone-50 rounded-2xl border border-stone-200/70 flex items-start justify-between">
                      <div className="min-w-0 pr-2">
                        <span className="text-stone-400 block text-[10px] font-bold uppercase">Primary Email</span>
                        <div className="font-bold text-stone-900 mt-0.5 flex items-center gap-2 truncate">
                          <Mail className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                          <span className="truncate">{viewingCase.email || "No Email Registered"}</span>
                        </div>
                      </div>
                      {viewingCase.email && (
                        <button
                          onClick={() => handleCopy(viewingCase.email, "dossierEmail")}
                          className="p-1.5 hover:bg-white rounded-lg text-stone-400 hover:text-stone-700 transition shrink-0 cursor-pointer"
                          title="Copy Email"
                        >
                          {copiedKey === "dossierEmail" ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      )}
                    </div>

                    {/* Secondary Email */}
                    <div className="p-3.5 bg-stone-50 rounded-2xl border border-stone-200/70 flex items-start justify-between">
                      <div className="min-w-0 pr-2">
                        <span className="text-stone-400 block text-[10px] font-bold uppercase">Secondary Email</span>
                        <div className="font-bold text-stone-900 mt-0.5 flex items-center gap-2 truncate">
                          <Mail className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                          <span className="truncate">{viewingCase.email2 || "—"}</span>
                        </div>
                      </div>
                      {viewingCase.email2 && (
                        <button
                          onClick={() => handleCopy(viewingCase.email2, "dossierEmail2")}
                          className="p-1.5 hover:bg-white rounded-lg text-stone-400 hover:text-stone-700 transition shrink-0 cursor-pointer"
                          title="Copy Secondary Email"
                        >
                          {copiedKey === "dossierEmail2" ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      )}
                    </div>
                  </div>

                  {/* CC Emails if available */}
                  {viewingCase.ccEmails && (
                    <div className="mt-3 p-3 bg-stone-50 rounded-2xl border border-stone-200/70 text-xs flex items-center justify-between">
                      <div>
                        <span className="text-stone-400 block text-[10px] font-bold uppercase">Carbon Copy (CC) Emails</span>
                        <span className="font-mono text-stone-800 text-[11px]">{viewingCase.ccEmails}</span>
                      </div>
                      <button
                        onClick={() => handleCopy(viewingCase.ccEmails, "dossierCcEmails")}
                        className="p-1.5 hover:bg-white rounded-lg text-stone-400 hover:text-stone-700 transition cursor-pointer"
                        title="Copy CC Emails"
                      >
                        {copiedKey === "dossierCcEmails" ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  )}

                  {/* Registered Physical Address */}
                  {viewingCase.address && (
                    <div className="mt-3 p-3.5 bg-stone-50 rounded-2xl border border-stone-200/70 text-xs flex items-start justify-between gap-3">
                      <div>
                        <span className="text-stone-400 block text-[10px] font-bold uppercase mb-1">
                          Complete Registered / Physical Address
                        </span>
                        <div className="flex items-start gap-2 text-stone-800 font-medium leading-relaxed">
                          <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                          <span>{viewingCase.address}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleCopy(viewingCase.address, "dossierAddress")}
                        className="p-1.5 hover:bg-white rounded-lg text-stone-400 hover:text-stone-700 transition shrink-0 cursor-pointer"
                        title="Copy Address"
                      >
                        {copiedKey === "dossierAddress" ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  )}
                </div>

                {/* 4. ESCALATION POLICE STATION AUTHORITY */}
                {viewingCase.policeStationName && (
                  <div>
                    <h4 className="text-[11px] font-black uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5 text-[#DC2626]" />
                      Escalation Police Station & SHO Jurisdiction
                    </h4>
                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2.5 text-xs">
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                            Police Station / Authority Name
                          </span>
                          <div className="font-black text-slate-900 text-sm mt-0.5">{viewingCase.policeStationName}</div>
                        </div>
                        {viewingCase.policeStationName && (
                          <button
                            onClick={() => handleCopy(viewingCase.policeStationName, "dossierPsName")}
                            className="p-1.5 hover:bg-slate-200 rounded-lg text-slate-600 cursor-pointer"
                            title="Copy Police Station Name"
                          >
                            {copiedKey === "dossierPsName" ? (
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        )}
                      </div>

                      {viewingCase.policeStationEmail && (
                        <div className="flex items-center justify-between pt-1 border-t border-slate-200">
                          <div>
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Official SHO Email</span>
                            <span className="font-mono text-slate-800">{viewingCase.policeStationEmail}</span>
                          </div>
                          <button
                            onClick={() => handleCopy(viewingCase.policeStationEmail, "dossierPsEmail")}
                            className="p-1.5 hover:bg-slate-200 rounded-lg text-slate-600 cursor-pointer"
                            title="Copy Station Email"
                          >
                            {copiedKey === "dossierPsEmail" ? (
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      )}

                      {viewingCase.policeStationAddress && (
                        <div className="flex items-start justify-between pt-1 border-t border-slate-200">
                          <div>
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Station Physical Address</span>
                            <span className="text-slate-800">{viewingCase.policeStationAddress}</span>
                          </div>
                          <button
                            onClick={() => handleCopy(viewingCase.policeStationAddress, "dossierPsAddress")}
                            className="p-1.5 hover:bg-slate-200 rounded-lg text-slate-600 shrink-0 cursor-pointer"
                            title="Copy Station Address"
                          >
                            {copiedKey === "dossierPsAddress" ? (
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* 5. REPRESENTED CREDITOR / CLIENT DETAILS */}
                <div>
                  <h4 className="text-[11px] font-black uppercase tracking-wider text-stone-400 mb-3 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-stone-400" />
                    Represented Creditor / Client Information
                  </h4>
                  <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200/70 text-xs space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">Client / Organization</span>
                        <div className="font-black text-stone-900 text-sm mt-0.5">
                          {viewingCase.clientName || representee?.name || "Direct Client Profile"}
                        </div>
                      </div>
                      {viewingCase.clientName && (
                        <button
                          onClick={() => handleCopy(viewingCase.clientName, "dossierClientName")}
                          className="p-1.5 hover:bg-white rounded-lg text-stone-400 hover:text-stone-700 cursor-pointer"
                        >
                          {copiedKey === "dossierClientName" ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-stone-200/60">
                      <div>
                        <span className="text-[10px] font-bold text-stone-400 uppercase block">Client Email</span>
                        <span className="font-semibold text-stone-800">{viewingCase.clientEmail || representee?.email || "—"}</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-stone-400 uppercase block">Client Phone</span>
                        <span className="font-semibold text-stone-800">{viewingCase.clientPhone || representee?.phone || "—"}</span>
                      </div>
                    </div>

                    {(viewingCase.clientAuthRepName || viewingCase.clientAuthRepPhone) && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-stone-200/60">
                        <div>
                          <span className="text-[10px] font-bold text-stone-400 uppercase block">Authorized Representative</span>
                          <span className="font-semibold text-stone-800">{viewingCase.clientAuthRepName || "—"}</span>
                        </div>
                        <div>
                          <span className="text-[10px] font-bold text-stone-400 uppercase block">Rep Phone</span>
                          <span className="font-semibold text-stone-800">{viewingCase.clientAuthRepPhone || "—"}</span>
                        </div>
                      </div>
                    )}

                    {(viewingCase.clientAddress || representee?.address) && (
                      <div className="pt-2 border-t border-stone-200/60">
                        <span className="text-[10px] font-bold text-stone-400 uppercase block">Client Registered Address</span>
                        <span className="text-stone-700">{viewingCase.clientAddress || representee?.address}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* 6. TIMELINE / NOTICE DISPATCH STAGES */}
                <div>
                  <h4 className="text-[11px] font-black uppercase tracking-wider text-stone-400 mb-3 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-stone-400" />
                    Notice Dispatch Stages (4 Steps)
                  </h4>
                  <div className="space-y-2.5">
                    {timelineSteps.map((st: any, idx: number) => {
                      const isDone = st.status === "completed";
                      const isPending = st.status === "pending";
                      const isCancelled = st.status === "cancelled";

                      return (
                        <div
                          key={idx}
                          className={`p-3.5 rounded-2xl border transition-colors flex items-start justify-between gap-3 text-xs ${
                            isDone
                              ? "bg-emerald-50/40 border-emerald-200/60"
                              : isPending
                              ? "bg-amber-50/50 border-amber-200"
                              : isCancelled
                              ? "bg-rose-50/30 border-rose-200 text-stone-400"
                              : "bg-stone-50/70 border-stone-200 text-stone-500"
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div
                              className={`w-6 h-6 rounded-full flex items-center justify-center font-black text-[11px] shrink-0 mt-0.5 ${
                                isDone
                                  ? "bg-emerald-600 text-white"
                                  : isPending
                                  ? "bg-amber-500 text-white"
                                  : isCancelled
                                  ? "bg-rose-400 text-white"
                                  : "bg-stone-200 text-stone-600"
                              }`}
                            >
                              {isDone ? <Check className="w-3.5 h-3.5" /> : st.step || idx + 1}
                            </div>
                            <div>
                              <div className="font-black text-stone-900 flex items-center gap-2">
                                <span>{st.label}</span>
                                {st.date && (
                                  <span className="text-[10px] font-medium text-stone-400">({st.date})</span>
                                )}
                              </div>
                              <p className="text-[11px] text-stone-500 mt-0.5 leading-snug">
                                {st.description || "Automated notice dispatch pipeline."}
                              </p>
                              {st.completedAt && (
                                <span className="text-[10px] text-emerald-700 font-medium block mt-1">
                                  Dispatched: {formatFullDateTime(st.completedAt)}
                                </span>
                              )}
                            </div>
                          </div>

                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase shrink-0 ${
                              isDone
                                ? "bg-emerald-100 text-emerald-800"
                                : isPending
                                ? "bg-amber-100 text-amber-800"
                                : isCancelled
                                ? "bg-rose-100 text-rose-800"
                                : "bg-stone-200/80 text-stone-600"
                            }`}
                          >
                            {st.status || "locked"}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 7. REMARKS / ADVOCATE NOTES */}
                <div>
                  <h4 className="text-[11px] font-black uppercase tracking-wider text-stone-400 mb-3 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-stone-400" />
                    Internal Case Remarks & Audit Trail
                  </h4>
                  <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200/70 text-xs space-y-3">
                    <div>
                      <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mb-1">
                        Active Case Remark
                      </span>
                      <p className="text-stone-800 font-medium italic bg-white p-3 rounded-xl border border-stone-200/60">
                        {viewingCase.remarks || editedRemarks[viewingCase._id || viewingCase.id] || "No remarks currently entered for this case."}
                      </p>
                    </div>

                    {Array.isArray(viewingCase.remarksHistory) && viewingCase.remarksHistory.length > 0 && (
                      <div className="pt-2 border-t border-stone-200">
                        <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mb-2">
                          Audit History ({viewingCase.remarksHistory.length} logs)
                        </span>
                        <div className="space-y-1.5 max-h-36 overflow-y-auto">
                          {viewingCase.remarksHistory.map((item: any, hIdx: number) => (
                            <div key={hIdx} className="p-2 bg-white rounded-lg border border-stone-200/50 text-[11px]">
                              <div className="flex justify-between items-center text-stone-400 text-[10px]">
                                <span className="font-bold text-stone-600">{item.author || "Advocate"}</span>
                                <span>{formatFullDateTime(item.date)}</span>
                              </div>
                              <p className="text-stone-700 mt-0.5">{item.text}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

              </div>

              {/* Footer */}
              <div className="p-4 sm:p-5 border-t border-stone-200 bg-stone-50 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
                <div className="text-[11px] text-stone-400">
                  <span>Created: <strong className="text-stone-600">{formatFullDateTime(viewingCase.createdAt)}</strong></span>
                  {viewingCase.updatedAt && (
                    <>
                      <span className="mx-2 text-stone-300">|</span>
                      <span>Last Updated: <strong className="text-stone-600">{formatFullDateTime(viewingCase.updatedAt)}</strong></span>
                    </>
                  )}
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                  <button
                    onClick={() => setViewingCase(null)}
                    className="w-full sm:w-auto px-6 py-2.5 bg-stone-900 text-white rounded-2xl text-xs font-bold hover:bg-stone-800 transition cursor-pointer shadow-sm"
                  >
                    Close Dossier
                  </button>
                </div>
              </div>

            </div>
          </div>
        );
      })()}

    </div>
  );
}
