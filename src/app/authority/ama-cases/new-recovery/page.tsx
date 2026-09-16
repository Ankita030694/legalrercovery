"use client";

import React, { useState, useEffect, useMemo, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Building2,
  ArrowLeft,
  Check,
  FileText,
  Info,
  Calendar,
  IndianRupee,
  Building,
  User,
  MapPin,
  Mail,
  Phone,
  ShieldCheck,
  Lock,
  Plus,
  Search,
  ChevronDown,
  Briefcase,
  Trash2,
  Eye,
  Edit,
  Loader2,
  Layers,
  Scale,
  Sparkles,
  Bot,
  AlertCircle,
  CheckCircle2,
  HelpCircle,
  Copy
} from "lucide-react";

export default function AuthorityNewRecoveryPage() {
  return (
    <Suspense fallback={
      <div className="min-h-[400px] flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-[#DC2626] animate-spin" />
      </div>
    }>
      <NewRecoveryForm />
    </Suspense>
  );
}

export function NewRecoveryForm({ repId }: { repId?: string } = {}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialRepId = repId || searchParams.get("repId") || "direct";

  // Tab: AI ChatGPT Parser (Default) vs Manual Single Form
  const [activeTab, setActiveTab] = useState<"chatgpt" | "single">("chatgpt");

  // Category: general-recovery vs loan-recovery
  const [category, setCategory] = useState<"general-recovery" | "loan-recovery">("general-recovery");

  // Representation selection
  const [representees, setRepresentees] = useState<any[]>([]);
  const [selectedRepresenteeId, setSelectedRepresenteeId] = useState(initialRepId);

  useEffect(() => {
    if (repId) {
      setSelectedRepresenteeId(repId);
    }
  }, [repId]);

  const currentScopedRep = useMemo(() => {
    return representees.find(r => String(r._id) === String(selectedRepresenteeId) || String(r.id) === String(selectedRepresenteeId));
  }, [representees, selectedRepresenteeId]);

  // Police stations directory
  const [policeStations, setPoliceStations] = useState<any[]>([]);

  // ══════════════════════════════════════════════════════════
  // ── CHATGPT AI BULK PARSER STATE VARIABLES ──
  // ══════════════════════════════════════════════════════════
  const [bulkText, setBulkText] = useState("");
  const [parsedCases, setParsedCases] = useState<any[]>([]);
  const [isParsing, setIsParsing] = useState(false);
  const [parseError, setParseError] = useState<string | null>(null);
  const [parseSuccessCount, setParseSuccessCount] = useState<number | null>(null);
  const [isBulkSubmitting, setIsBulkSubmitting] = useState(false);

  // View / Edit Modal for Parsed Case
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);
  const [isModalEditMode, setIsModalEditMode] = useState<boolean>(false);
  const [editDefaulterName, setEditDefaulterName] = useState("");
  const [editEntityType, setEditEntityType] = useState("Company");
  const [editPhone, setEditPhone] = useState("");
  const [editPhone2, setEditPhone2] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editEmail2, setEditEmail2] = useState("");
  const [editCcEmails, setEditCcEmails] = useState("");
  const [editAddress, setEditAddress] = useState("");
  const [editState, setEditState] = useState("");
  const [editStuckAmount, setEditStuckAmount] = useState("");
  const [editDueDate, setEditDueDate] = useState("");
  const [editDisbursementDate, setEditDisbursementDate] = useState("");
  const [editDisbursedAmount, setEditDisbursedAmount] = useState("");
  const [editAsOnDate, setEditAsOnDate] = useState("");
  const [editInvoices, setEditInvoices] = useState<any[]>([]);
  const [editPoliceStationName, setEditPoliceStationName] = useState("");
  const [editPoliceStationEmail, setEditPoliceStationEmail] = useState("");
  const [editPoliceStationAddress, setEditPoliceStationAddress] = useState("");

  // ══════════════════════════════════════════════════════════
  // ── SINGLE CASE FORM STATE VARIABLES ──
  // ══════════════════════════════════════════════════════════
  const [defaulterName, setDefaulterName] = useState("");
  const [entityType, setEntityType] = useState("Company");
  const [phone, setPhone] = useState("");
  const [phone2, setPhone2] = useState("");
  const [showPhone2, setShowPhone2] = useState(false);
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");
  const [showEmail2, setShowEmail2] = useState(false);
  const [address, setAddress] = useState("");
  const [defaulterState, setDefaulterState] = useState("");
  const [stuckAmount, setStuckAmount] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [singleDisbursementDate, setSingleDisbursementDate] = useState("");
  const [singleDisbursedAmount, setSingleDisbursedAmount] = useState("");
  const [singleAsOnDate, setSingleAsOnDate] = useState("");
  const [singleLoanAccountId, setSingleLoanAccountId] = useState("");
  const [selectedPoliceState, setSelectedPoliceState] = useState("");
  const [policeStationName, setPoliceStationName] = useState("");
  const [policeStationEmail, setPoliceStationEmail] = useState("");
  const [policeStationAddress, setPoliceStationAddress] = useState("");
  const [isSubmittingSingle, setIsSubmittingSingle] = useState(false);
  const [singleFormError, setSingleFormError] = useState<string | null>(null);

  // Format date helper
  const formatDateToDisplay = (dateStr: string) => {
    if (!dateStr) return "-";
    if (/^\d{2}-\d{2}-\d{4}$/.test(dateStr)) return dateStr;
    const parts = dateStr.split("-");
    if (parts.length === 3 && parts[0].length === 4) {
      return `${parts[2]}-${parts[1]}-${parts[0]}`;
    }
    const d = new Date(dateStr);
    if (!isNaN(d.getTime())) {
      const day = String(d.getDate()).padStart(2, "0");
      const month = String(d.getMonth() + 1).padStart(2, "0");
      const year = d.getFullYear();
      return `${day}-${month}-${year}`;
    }
    return dateStr;
  };

  // Format currency helper
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(val || 0);
  };

  // Fetch representations and police stations
  useEffect(() => {
    const init = async () => {
      try {
        const [repRes, policeRes] = await Promise.all([
          fetch(`/api/representees?_t=${Date.now()}`),
          fetch("/api/police-stations")
        ]);

        if (repRes.ok) {
          const repData = await repRes.json();
          if (repData.success && repData.data) {
            setRepresentees(repData.data);
          }
        }

        if (policeRes.ok) {
          const policeData = await policeRes.json();
          if (policeData.success && policeData.data) {
            setPoliceStations(policeData.data);
          }
        }
      } catch (err) {
        console.error("Initialization error in new-recovery:", err);
      }
    };
    init();
  }, []);

  const availablePoliceStates = useMemo(() => {
    return Array.from(new Set(policeStations.map(p => p.state).filter(Boolean))).sort();
  }, [policeStations]);

  const stationsInSelectedState = useMemo(() => {
    if (!selectedPoliceState) return [];
    return policeStations.filter(p => p.state === selectedPoliceState);
  }, [policeStations, selectedPoliceState]);

  // ══════════════════════════════════════════════════════════
  // ── CHATGPT AI PARSING HANDLER ──
  // ══════════════════════════════════════════════════════════
  const handleParseWithChatGPT = async () => {
    if (!bulkText.trim()) {
      alert("Please paste some raw defaulter data, spreadsheet rows, or email text first.");
      return;
    }

    setIsParsing(true);
    setParseError(null);
    setParseSuccessCount(null);

    try {
      const response = await fetch("/api/cases/bulk-parse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          text: bulkText,
          category
        })
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to parse data via ChatGPT");
      }

      if (data.success && data.cases) {
        setParsedCases(prev => [...prev, ...data.cases]);
        setParseSuccessCount(data.cases.length);
        setBulkText("");
      } else {
        throw new Error("No cases returned from AI parser.");
      }
    } catch (err: any) {
      console.error("ChatGPT parsing error:", err);
      setParseError(err.message || "Failed to connect to the ChatGPT interpretation engine.");
    } finally {
      setIsParsing(false);
    }
  };

  // Open Edit / View Modal
  const handleOpenModal = (index: number, editMode: boolean = false) => {
    const c = parsedCases[index];
    if (!c) return;
    setActiveModalIndex(index);
    setIsModalEditMode(editMode);
    setEditDefaulterName(c.defaulterName || "");
    setEditEntityType(c.entityType || "Company");
    setEditPhone(c.phone || "");
    setEditPhone2(c.phone2 || "");
    setEditEmail(c.email || "");
    setEditEmail2(c.email2 || "");
    setEditCcEmails(c.ccEmails || "");
    setEditAddress(c.address || "");
    setEditState(c.state || "");
    setEditStuckAmount(c.stuckAmount ? String(c.stuckAmount) : "");
    setEditDueDate(c.dueDate || "");
    setEditDisbursementDate(c.disbursementDate || "");
    setEditDisbursedAmount(c.disbursedAmount ? String(c.disbursedAmount) : "");
    setEditAsOnDate(c.asOnDate || "");
    setEditInvoices(c.invoices || []);
    setEditPoliceStationName(c.policeStationName || "");
    setEditPoliceStationEmail(c.policeStationEmail || "");
    setEditPoliceStationAddress(c.policeStationAddress || "");
  };

  // Save changes from Edit Modal
  const handleSaveModalDetails = () => {
    if (activeModalIndex === null) return;
    if (!editDefaulterName.trim()) {
      alert("Defaulter legal name is required.");
      return;
    }
    if (!editPhone || editPhone.replace(/\D/g, "").length < 10) {
      alert("A valid 10-digit primary phone number is required.");
      return;
    }
    if (!editEmail.trim()) {
      alert("Primary email address is required.");
      return;
    }
    if (!editStuckAmount.trim() || isNaN(parseFloat(editStuckAmount.replace(/,/g, "")))) {
      alert("A valid outstanding dues amount is required.");
      return;
    }

    const updated = {
      ...parsedCases[activeModalIndex],
      defaulterName: editDefaulterName.trim(),
      entityType: editEntityType,
      phone: editPhone.replace(/\D/g, "").slice(0, 10),
      phone2: editPhone2.replace(/\D/g, "").slice(0, 10),
      email: editEmail.trim(),
      email2: editEmail2.trim(),
      ccEmails: editCcEmails.trim(),
      address: editAddress.trim(),
      state: editState,
      stuckAmount: parseFloat(editStuckAmount.replace(/,/g, "")) || 0,
      dueDate: editDueDate,
      disbursementDate: editDisbursementDate,
      disbursedAmount: parseFloat(editDisbursedAmount.replace(/,/g, "")) || 0,
      asOnDate: editAsOnDate,
      invoices: editInvoices,
      policeStationName: editPoliceStationName,
      policeStationEmail: editPoliceStationEmail,
      policeStationAddress: editPoliceStationAddress
    };

    setParsedCases(prev => prev.map((item, idx) => idx === activeModalIndex ? updated : item));
    setActiveModalIndex(null);
    setIsModalEditMode(false);
  };

  const handleDeleteParsedRow = (indexToRemove: number) => {
    setParsedCases(prev => prev.filter((_, idx) => idx !== indexToRemove));
    if (parsedCases.length <= 1) {
      setParseSuccessCount(null);
    }
  };

  // Submit All Parsed Cases to Database
  const handleBulkSubmit = async () => {
    if (parsedCases.length === 0) {
      alert("No cases to submit.");
      return;
    }
    setIsBulkSubmitting(true);
    try {
      const response = await fetch("/api/cases/bulk-create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          cases: parsedCases,
          representeeId: selectedRepresenteeId === "direct" ? null : selectedRepresenteeId,
          category
        })
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to submit bulk cases.");
      }

      alert(`Successfully created ${data.insertedCount || parsedCases.length} recovery cases!`);
      if (selectedRepresenteeId && selectedRepresenteeId !== "direct") {
        router.push(`/authority/ama-cases/${selectedRepresenteeId}/cases`);
      } else {
        router.push("/authority/ama-cases");
      }
    } catch (err: any) {
      console.error(err);
      alert(err.message || "Failed to create bulk cases.");
    } finally {
      setIsBulkSubmitting(false);
    }
  };

  // ══════════════════════════════════════════════════════════
  // ── SINGLE CASE MANUAL SUBMIT ──
  // ══════════════════════════════════════════════════════════
  const handleSingleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSingleFormError(null);

    if (!defaulterName.trim() || !phone.trim() || !email.trim() || !stuckAmount.trim() || !dueDate) {
      setSingleFormError("Please fill in all mandatory fields (Defaulter Name, Phone, Email, Amount, Due Date).");
      return;
    }

    setIsSubmittingSingle(true);
    try {
      const selectedRep = representees.find(r => r._id === selectedRepresenteeId || r.id === selectedRepresenteeId);

      const payload = {
        defaulterName: defaulterName.trim(),
        entityType,
        phone: phone.trim(),
        phone2: showPhone2 ? phone2.trim() : "",
        email: email.trim(),
        email2: showEmail2 ? email2.trim() : "",
        address: address.trim(),
        defaulterState,
        stuckAmount: parseFloat(stuckAmount),
        dueDate,
        category,
        representeeId: selectedRepresenteeId === "direct" ? null : selectedRepresenteeId,
        clientName: selectedRep ? selectedRep.name : "AMA Legal Solutions",
        clientPhone: selectedRep ? selectedRep.phone : "+91 8700343611",
        clientEmail: selectedRep ? selectedRep.email : "notice@amalegalsolutions.com",
        clientAddress: selectedRep ? selectedRep.address : "Chambers of AMA Legal Solutions",
        policeStationName,
        policeStationEmail,
        policeStationAddress,
        disbursementDate: category === "loan-recovery" ? singleDisbursementDate : undefined,
        disbursedAmount: category === "loan-recovery" ? parseFloat(singleDisbursedAmount || "0") : undefined,
        asOnDate: category === "loan-recovery" ? singleAsOnDate : undefined,
        loanAccountId: category === "loan-recovery" ? singleLoanAccountId : undefined
      };

      const res = await fetch("/api/cases", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        setSingleFormError(data.error || "Failed to create recovery case.");
      } else {
        alert("Recovery case registered successfully!");
        if (selectedRepresenteeId && selectedRepresenteeId !== "direct") {
          router.push(`/authority/ama-cases/${selectedRepresenteeId}/cases`);
        } else {
          router.push("/authority/ama-cases");
        }
      }
    } catch (err: any) {
      setSingleFormError(err.message || "An unexpected error occurred.");
    } finally {
      setIsSubmittingSingle(false);
    }
  };

  return (
    <div className="space-y-5 select-none text-left max-w-5xl mx-auto pb-16">
      
      {/* ── CLEAN HEADER & CONTROLS ── */}
      <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-stone-500 mb-1">
            <Link
              href={selectedRepresenteeId && selectedRepresenteeId !== "direct" ? `/authority/ama-cases/${selectedRepresenteeId}/cases` : "/authority/ama-cases"}
              className="hover:text-stone-900 flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Cases</span>
            </Link>
            {currentScopedRep && (
              <>
                <span className="text-stone-300">/</span>
                <span className="text-[#DC2626] font-bold">{currentScopedRep.name}</span>
              </>
            )}
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
            New Recovery Intake
          </h1>
        </div>

        {/* Action Controls: Category & Input Mode */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Recovery Category */}
          <div className="flex items-center p-1 bg-stone-100 rounded-xl border border-stone-200 text-xs font-bold">
            <button
              type="button"
              onClick={() => setCategory("general-recovery")}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                category === "general-recovery"
                  ? "bg-white text-stone-900 shadow-xs"
                  : "text-stone-500 hover:text-stone-800"
              }`}
            >
              Commercial
            </button>
            <button
              type="button"
              onClick={() => setCategory("loan-recovery")}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                category === "loan-recovery"
                  ? "bg-white text-stone-900 shadow-xs"
                  : "text-stone-500 hover:text-stone-800"
              }`}
            >
              Loan Default
            </button>
          </div>

          {/* Intake Mode */}
          <div className="flex items-center p-1 bg-stone-100 rounded-xl border border-stone-200 text-xs font-bold">
            <button
              type="button"
              onClick={() => setActiveTab("chatgpt")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeTab === "chatgpt"
                  ? "bg-[#DC2626] text-white shadow-xs"
                  : "text-stone-500 hover:text-stone-800"
              }`}
            >
              <Sparkles className="w-3 h-3" />
              <span>Bulk Paste</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("single")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeTab === "single"
                  ? "bg-[#DC2626] text-white shadow-xs"
                  : "text-stone-500 hover:text-stone-800"
              }`}
            >
              <User className="w-3 h-3" />
              <span>Single Entry</span>
            </button>
          </div>
        </div>
      </div>

      {/* Target Representation (only shown when not scoped to a specific representation) */}
      {(!repId || repId === "direct") && representees.length > 0 && (
        <div className="bg-white rounded-2xl p-4 border border-stone-200/80 shadow-xs flex items-center justify-between gap-4">
          <label className="text-xs font-bold text-stone-700 flex items-center gap-1.5 shrink-0">
            <Briefcase className="w-3.5 h-3.5 text-stone-400" />
            <span>Target Client:</span>
          </label>
          <select
            value={selectedRepresenteeId}
            onChange={(e) => setSelectedRepresenteeId(e.target.value)}
            className="w-full max-w-xs px-3 py-1.5 bg-stone-50 border border-stone-200 rounded-xl text-xs font-bold text-stone-900 cursor-pointer"
          >
            <option value="direct">Direct AMA Claims</option>
            {representees.map(r => (
              <option key={r._id || r.id} value={r._id || r.id}>
                {r.name} ({r.state})
              </option>
            ))}
          </select>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════
          MODE A: AI BULK DATA EXTRACTION
      ══════════════════════════════════════════════════════════ */}
      {activeTab === "chatgpt" && (
        <div className="space-y-5">
          
          {/* Raw Data Input Container */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200/80 shadow-xs space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-stone-800 flex items-center justify-between">
                <span>{category === 'loan-recovery' ? 'Paste Loan / Borrower Rows' : 'Paste Defaulter & Invoice Rows'}</span>
                <span className="text-[11px] text-stone-400 font-medium">Excel / Google Sheets / CSV / Raw text</span>
              </label>

              <textarea
                rows={9}
                placeholder="Paste tab-delimited spreadsheet rows or text here..."
                value={bulkText}
                onChange={(e) => setBulkText(e.target.value)}
                className="w-full bg-stone-50/70 hover:bg-stone-50 focus:bg-white border border-stone-200 focus:border-[#DC2626] rounded-xl px-4 py-3 text-xs font-mono outline-none resize-none transition-colors leading-relaxed text-stone-900"
              />
            </div>

            {/* Error Message */}
            {parseError && (
              <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold rounded-xl flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{parseError}</span>
              </div>
            )}

            {/* Success Feedback */}
            {parseSuccessCount !== null && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    Successfully extracted <strong>{parseSuccessCount}</strong> claims below.
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setParseSuccessCount(null)}
                  className="text-[10px] font-bold text-emerald-700 hover:underline uppercase"
                >
                  Dismiss
                </button>
              </div>
            )}

            {/* Action Trigger Button */}
            <div className="flex items-center justify-end">
              <button
                type="button"
                onClick={handleParseWithChatGPT}
                disabled={isParsing || !bulkText.trim()}
                className="px-6 py-2.5 text-xs font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] disabled:opacity-40 disabled:cursor-not-allowed rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-xs active:scale-95"
              >
                {isParsing ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Extracting Claims...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Extract Claims</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* ── STEP 2: PREVIEW EXTRACTED CLAIMS TABLE ── */}
          {parsedCases.length > 0 && (
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
              <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <h3 className="text-base font-black text-slate-900">
                    3. Preview & Review Extracted Claims ({parsedCases.length})
                  </h3>
                  <button
                    type="button"
                    onClick={() => {
                      if (confirm("Are you sure you want to clear all extracted claims?")) {
                        setParsedCases([]);
                        setParseSuccessCount(null);
                      }
                    }}
                    className="text-[10px] font-bold text-slate-500 hover:text-red-600 bg-slate-50 hover:bg-red-50 border border-slate-200 px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
                  >
                    Clear List
                  </button>
                </div>

                <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200">
                  Total: {formatCurrency(parsedCases.reduce((sum, c) => sum + (c.stuckAmount || 0), 0))}
                </span>
              </div>

              {/* Table */}
              <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-slate-50/80 border-b border-slate-200 text-[10px] font-black uppercase text-slate-500 tracking-wider">
                        <th className="px-4 py-3">Defaulter</th>
                        <th className="px-4 py-3">Claim Amount</th>
                        <th className="px-4 py-3">Contact</th>
                        <th className="px-4 py-3">State & Address</th>
                        <th className="px-4 py-3">Invoices</th>
                        <th className="px-4 py-3 text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium">
                      {parsedCases.map((c, idx) => (
                        <tr
                          key={idx}
                          onClick={() => handleOpenModal(idx, false)}
                          className="hover:bg-slate-50/60 transition-colors cursor-pointer group"
                        >
                          <td className="px-4 py-3.5 align-top">
                            <div className="font-extrabold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                              {c.defaulterName}
                            </div>
                            <div className="text-[10px] text-slate-400 font-bold uppercase mt-0.5">
                              {c.entityType || "Company"}
                            </div>
                          </td>

                          <td className="px-4 py-3.5 align-top">
                            <div className="font-extrabold text-slate-900">
                              {formatCurrency(c.stuckAmount)}
                            </div>
                            <div className="text-[10px] text-slate-400 mt-0.5">
                              Due: {formatDateToDisplay(c.dueDate)}
                            </div>
                          </td>

                          <td className="px-4 py-3.5 align-top">
                            <div className="text-slate-800 font-semibold">{c.phone}</div>
                            <div className="text-[11px] text-slate-400 truncate max-w-[180px]">{c.email}</div>
                          </td>

                          <td className="px-4 py-3.5 align-top max-w-[200px]">
                            <div className="font-bold text-slate-700">{c.state}</div>
                            <div className="text-[10px] text-slate-400 line-clamp-2 mt-0.5">
                              {c.address}
                            </div>
                          </td>

                          <td className="px-4 py-3.5 align-top">
                            <div className="font-semibold text-slate-700">
                              {c.invoices && c.invoices.length > 0 ? `${c.invoices.length} Invoices` : "-"}
                            </div>
                          </td>

                          <td className="px-4 py-3.5 align-middle text-center" onClick={(e) => e.stopPropagation()}>
                            <div className="flex items-center justify-center gap-1.5">
                              <button
                                type="button"
                                onClick={() => handleOpenModal(idx, false)}
                                className="p-2 text-slate-500 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                                title="View Details"
                              >
                                <Eye className="w-3.5 h-3.5" />
                              </button>
                              <button
                                type="button"
                                onClick={() => handleOpenModal(idx, true)}
                                className="p-2 text-[#DC2626] hover:text-white bg-red-50 hover:bg-[#DC2626] rounded-xl transition-colors cursor-pointer"
                                title="Edit Claim"
                              >
                                <Edit className="w-3.5 h-3.5" />
                              </button>
                              <button
                                type="button"
                                onClick={() => handleDeleteParsedRow(idx)}
                                className="p-2 text-red-600 hover:text-white bg-red-50 hover:bg-red-600 rounded-xl transition-colors cursor-pointer"
                                title="Delete Claim"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Submit Button */}
              <div className="p-4 bg-red-50/30 border border-red-100 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    Ready to queue {parsedCases.length} claims
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    Submitting will attach Advocate Bar Stamps and register cases in the selected representation.
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleBulkSubmit}
                  disabled={isBulkSubmitting}
                  className="w-full sm:w-auto px-7 py-3 bg-[#DC2626] hover:bg-[#B91C1C] text-white rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isBulkSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
                  <span>Submit & Launch All {parsedCases.length} Recoveries</span>
                </button>
              </div>
            </div>
          )}

        </div>
      )}

      {/* ══════════════════════════════════════════════════════════
          MODE B: MANUAL SINGLE CASE INTAKE
      ══════════════════════════════════════════════════════════ */}
      {activeTab === "single" && (
        <form onSubmit={handleSingleSubmit} className="space-y-6">
          
          {singleFormError && (
            <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-xs font-bold rounded-2xl flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{singleFormError}</span>
            </div>
          )}

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-5">
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
              <User className="w-4 h-4 text-[#DC2626]" />
              <span>2. Defaulter Identity & Coordinates</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Defaulter Legal Name *
                </label>
                <input
                  type="text"
                  value={defaulterName}
                  onChange={(e) => setDefaulterName(e.target.value)}
                  placeholder="e.g. Apex Digital Corp or Ramesh Kumar"
                  className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#DC2626]/20 focus:border-[#DC2626]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Entity Type
                </label>
                <select
                  value={entityType}
                  onChange={(e) => setEntityType(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-bold text-slate-900 focus:outline-none"
                >
                  <option value="Company">Company / Corporate</option>
                  <option value="Proprietorship">Proprietorship / Firm</option>
                  <option value="Individual">Individual / Salaried</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Primary Mobile Number *
                </label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 9876543210"
                  className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#DC2626]/20 focus:border-[#DC2626]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Primary Email *
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="accounts@defaulter.com"
                  className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#DC2626]/20 focus:border-[#DC2626]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Full Physical Address *
              </label>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Complete office or residential address"
                rows={2}
                className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#DC2626]/20 focus:border-[#DC2626]"
              />
            </div>
          </div>

          {/* Dues */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-5">
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
              <IndianRupee className="w-4 h-4 text-[#DC2626]" />
              <span>3. Outstanding Claim Details</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Total Outstanding Amount (₹) *
                </label>
                <input
                  type="number"
                  value={stuckAmount}
                  onChange={(e) => setStuckAmount(e.target.value)}
                  placeholder="e.g. 250000"
                  className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm font-black text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#DC2626]/20 focus:border-[#DC2626]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Payment Due Date *
                </label>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#DC2626]/20 focus:border-[#DC2626]"
                />
              </div>
            </div>

            {category === "loan-recovery" && (
              <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Disbursed Principal (₹)</label>
                  <input
                    type="number"
                    value={singleDisbursedAmount}
                    onChange={(e) => setSingleDisbursedAmount(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Disbursement Date</label>
                  <input
                    type="date"
                    value={singleDisbursementDate}
                    onChange={(e) => setSingleDisbursementDate(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Loan Account ID</label>
                  <input
                    type="text"
                    value={singleLoanAccountId}
                    onChange={(e) => setSingleLoanAccountId(e.target.value)}
                    placeholder="LAN-1001"
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Submit */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <Link
              href="/authority/ama-cases"
              className="px-5 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={isSubmittingSingle}
              className="px-7 py-3 bg-[#DC2626] hover:bg-[#B91C1C] text-white rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer shadow-xs disabled:opacity-50"
            >
              {isSubmittingSingle && <Loader2 className="w-4 h-4 animate-spin" />}
              <span>Register Recovery Action</span>
            </button>
          </div>
        </form>
      )}

      {/* ══════════════════════════════════════════════════════════
          VIEW / EDIT PARSED RECORD MODAL
      ══════════════════════════════════════════════════════════ */}
      {activeModalIndex !== null && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full flex flex-col shadow-2xl max-h-[90vh] overflow-hidden border border-slate-200 text-left">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-black text-slate-900">
                  {isModalEditMode ? "Edit Extracted Claim" : "Claim Details"}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  {isModalEditMode ? "Modify any fields extracted by ChatGPT." : "Review details interpreted by ChatGPT."}
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setActiveModalIndex(null);
                  setIsModalEditMode(false);
                }}
                className="text-slate-400 hover:text-slate-700 p-1 font-bold text-sm"
              >
                ✕
              </button>
            </div>

            <div className="p-6 overflow-y-auto flex-1 space-y-4 text-xs">
              {isModalEditMode ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="font-bold text-slate-700 block mb-1">Defaulter Legal Name</label>
                    <input
                      type="text"
                      value={editDefaulterName}
                      onChange={(e) => setEditDefaulterName(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-200 rounded-xl font-bold"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Phone Number</label>
                    <input
                      type="text"
                      value={editPhone}
                      onChange={(e) => setEditPhone(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-200 rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Email Address</label>
                    <input
                      type="email"
                      value={editEmail}
                      onChange={(e) => setEditEmail(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-200 rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Claim Amount (₹)</label>
                    <input
                      type="text"
                      value={editStuckAmount}
                      onChange={(e) => setEditStuckAmount(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-200 rounded-xl font-bold"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Due Date</label>
                    <input
                      type="date"
                      value={editDueDate}
                      onChange={(e) => setEditDueDate(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-200 rounded-xl"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="font-bold text-slate-700 block mb-1">Physical Address</label>
                    <textarea
                      value={editAddress}
                      onChange={(e) => setEditAddress(e.target.value)}
                      rows={2}
                      className="w-full px-3 py-2 border border-slate-200 rounded-xl"
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400">Defaulter Name</span>
                      <div className="font-extrabold text-slate-900 text-sm">{editDefaulterName}</div>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400">Claim Amount</span>
                      <div className="font-extrabold text-[#DC2626] text-sm">₹{Number(editStuckAmount || 0).toLocaleString("en-IN")}</div>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400">Contact</span>
                      <div className="text-slate-800">{editPhone}</div>
                      <div className="text-slate-400">{editEmail}</div>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400">Due Date</span>
                      <div className="text-slate-800">{formatDateToDisplay(editDueDate)}</div>
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400">Physical Address</span>
                    <div className="text-slate-800 mt-0.5">{editAddress || "Not provided"}</div>
                  </div>

                  {editInvoices && editInvoices.length > 0 && (
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                        Invoices ({editInvoices.length})
                      </span>
                      <div className="border border-slate-200 rounded-xl overflow-hidden">
                        <table className="w-full text-left text-xs">
                          <thead className="bg-slate-50 text-[10px] font-bold text-slate-500">
                            <tr>
                              <th className="p-2">Invoice No</th>
                              <th className="p-2">Date</th>
                              <th className="p-2 text-right">Amount</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100">
                            {editInvoices.map((inv: any, i: number) => (
                              <tr key={i}>
                                <td className="p-2 font-bold">{inv.invoiceNo}</td>
                                <td className="p-2 text-slate-500">{inv.invoiceDate || "-"}</td>
                                <td className="p-2 text-right font-bold">₹{Number(inv.amount || 0).toLocaleString("en-IN")}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="p-4 border-t border-slate-100 flex items-center justify-between shrink-0">
              {isModalEditMode ? (
                <>
                  <button
                    type="button"
                    onClick={() => setIsModalEditMode(false)}
                    className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl"
                  >
                    Cancel Edit
                  </button>
                  <button
                    type="button"
                    onClick={handleSaveModalDetails}
                    className="px-5 py-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold rounded-xl"
                  >
                    Save Changes
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => setIsModalEditMode(true)}
                    className="px-4 py-2 bg-red-50 hover:bg-red-100 text-[#DC2626] border border-red-200 text-xs font-bold rounded-xl"
                  >
                    Edit This Claim
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveModalIndex(null)}
                    className="px-5 py-2 bg-slate-900 text-white text-xs font-bold rounded-xl"
                  >
                    Close
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
