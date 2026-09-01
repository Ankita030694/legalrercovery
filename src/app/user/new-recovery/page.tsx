"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { 
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
  Building2,
  Lock,
  Plus,
  Search,
  ChevronDown,
  Briefcase,
  Trash2,
  Eye,
  Edit,
  CreditCard
} from "lucide-react";
import Link from "next/link";
import { BuyCreditsModal } from "@/components/BuyCreditsModal";

const formatDateToDisplay = (dateStr: string) => {
  if (!dateStr) return "-";
  if (/^\d{2}-\d{2}-\d{4}$/.test(dateStr)) return dateStr;
  const parts = dateStr.split("-");
  if (parts.length === 3 && parts[0].length === 4) {
    return `${parts[2]}-${parts[1]}-${parts[0]}`;
  }
  const d = new Date(dateStr);
  if (!isNaN(d.getTime())) {
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
  }
  return dateStr;
};

export default function NewRecoveryForm() {
  const router = useRouter();
  
  // ── FORM STATE: SECTION 1 (DEFAULTER & DUES) ──
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
  const [defaulterPincode, setDefaulterPincode] = useState("");
  const [stuckAmount, setStuckAmount] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("general-recovery");

  // ── FORM STATE: SECTION 2 (POLICE AUTHORITY) ──
  const [policeStationName, setPoliceStationName] = useState("");
  const [policeStationEmail, setPoliceStationEmail] = useState("");
  const [policeStationAddress, setPoliceStationAddress] = useState("");
  const [policeAutoFilled, setPoliceAutoFilled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [isValidating, setIsValidating] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState(false);
  const [email2Error, setEmail2Error] = useState(false);
  const [generatedCaseId, setGeneratedCaseId] = useState("LR-0000-000000");
  const [mobileTab, setMobileTab] = useState<"form" | "preview">("form");
  const [policeStations, setPoliceStations] = useState<any[]>([]);

  const indianStates = React.useMemo(() => {
    return Array.from(
      new Set(
        policeStations
          .map((d) => d?.state)
          .filter((state) => typeof state === "string" && state.trim() !== "")
      )
    ).sort();
  }, [policeStations]);

  // Client profile state for notice previews
  const [clientProfile, setClientProfile] = useState<{
    name: string;
    email: string;
    phone: string;
    state: string;
    address: string;
    hasUnlimitedCases?: boolean;
    amountPaid?: number;
    oppositionCount?: number;
    allowedLimit?: number;
    usedCases?: number;
    remainingCases?: number;
  } | null>(null);

  const [isBuyCreditsOpen, setIsBuyCreditsOpen] = useState(false);

  // States for advocate representation features
  const [representees, setRepresentees] = useState<any[]>([]);
  const [selectedRepresenteeId, setSelectedRepresenteeId] = useState("self");
  const [originalClientProfile, setOriginalClientProfile] = useState<any>(null);

  // Onboarding tour states
  const [onboardingState, setOnboardingState] = useState<string | null>(null);
  const [onboardingTourStep, setOnboardingTourStep] = useState(1);

  const isSpecialUser = originalClientProfile?.phone?.replace(/\D/g, '').endsWith('8700343611') || originalClientProfile?.phone?.replace(/\D/g, '').endsWith('8130104447');

  const handleRepresentationChange = (repId: string) => {
    setSelectedRepresenteeId(repId);
    if (repId === "self") {
      setClientProfile(originalClientProfile);
    } else {
      const rep = representees.find(r => r.id === repId || r._id === repId);
      if (rep) {
        setClientProfile({
          name: rep.name,
          email: rep.email,
          phone: rep.phone,
          state: rep.state,
          address: rep.address,
          hasUnlimitedCases: true // keep the flag so the selector remains visible
        });
      }
    }
  };

  // ── ADVOCATE BULK WORKFLOW STATES & HANDLERS ──
  const [bulkText, setBulkText] = useState("");
  const [parsedCases, setParsedCases] = useState<any[]>([]);
  const [isParsing, setIsParsing] = useState(false);
  const [parseError, setParseError] = useState<string | null>(null);
  const [isBulkSubmitting, setIsBulkSubmitting] = useState(false);
  const [parseSuccessCount, setParseSuccessCount] = useState<number | null>(null);

  // ── VIEW / EDIT MODAL STATE VARIABLES ──
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
  const [editInvoices, setEditInvoices] = useState<{invoiceNo: string; invoiceDate: string; dueDate?: string; amount: number}[]>([]);
  const [editPoliceStationName, setEditPoliceStationName] = useState("");
  const [editPoliceStationEmail, setEditPoliceStationEmail] = useState("");
  const [editPoliceStationAddress, setEditPoliceStationAddress] = useState("");

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

  const handleSaveModalDetails = () => {
    if (activeModalIndex === null) return;
    if (!editDefaulterName.trim()) {
      alert("Defaulter legal name is required.");
      return;
    }
    if (!editPhone || editPhone.replace(/\D/g, "").length !== 10) {
      alert("A valid 10-digit primary phone number is required.");
      return;
    }
    if (!editEmail.trim()) {
      alert("Primary email address is required.");
      return;
    }
    if (!editAddress.trim()) {
      alert("Defaulter physical address is required.");
      return;
    }
    if (!editStuckAmount.trim() || isNaN(parseFloat(editStuckAmount.replace(/,/g, "")))) {
      alert("A valid outstanding dues amount is required.");
      return;
    }
    if (!editDueDate) {
      alert("Original due date is required.");
      return;
    }

    let matchedName = editPoliceStationName;
    let matchedEmail = editPoliceStationEmail;
    let matchedAddress = editPoliceStationAddress;

    const currentState = parsedCases[activeModalIndex].state || "";
    if (editState && editState.toLowerCase() !== currentState.toLowerCase()) {
      const hq = policeStations.find(
        (d) => d.state.toLowerCase() === editState.toLowerCase()
      );
      if (hq) {
        matchedName = hq.hqName;
        matchedEmail = hq.emails[0] || "";
        matchedAddress = hq.hqAddress;
      } else {
        matchedName = "";
        matchedEmail = "";
        matchedAddress = "";
      }
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
      policeStationName: matchedName,
      policeStationEmail: matchedEmail,
      policeStationAddress: matchedAddress
    };

    setParsedCases(prev => prev.map((item, idx) => idx === activeModalIndex ? updated : item));
    setActiveModalIndex(null);
    setIsModalEditMode(false);
  };

  const handleParseBulk = async () => {
    if (!bulkText.trim()) {
      alert("Please paste some bulk claim data first.");
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
        body: JSON.stringify({ text: bulkText, category: category })
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to parse data");
      }
      if (data.success && data.cases) {
        setParsedCases(prev => [...prev, ...data.cases]);
        setParseSuccessCount(data.cases.length);
        setBulkText("");
      } else {
        throw new Error("No cases returned from parser.");
      }
    } catch (err: any) {
      console.error(err);
      setParseError(err.message || "Failed to connect to the parsing server.");
    } finally {
      setIsParsing(false);
    }
  };

  const handleDeleteParsedRow = (indexToRemove: number) => {
    setParsedCases(prev => prev.filter((_, idx) => idx !== indexToRemove));
    if (parsedCases.length <= 1) {
      setParseSuccessCount(null);
    }
  };

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
          representeeId: selectedRepresenteeId,
          category: category
        })
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to submit bulk cases.");
      }
      
      // Trigger sidebar / dashboard update
      window.dispatchEvent(new Event("lr_cases_updated"));
      alert(`Successfully created ${data.insertedCount || parsedCases.length} cases.`);
      router.push("/user/dashboard");
    } catch (err: any) {
      console.error(err);
      alert(err.message || "Failed to create bulk cases.");
    } finally {
      setIsBulkSubmitting(false);
    }
  };

  useEffect(() => {
    const fetchNextCaseId = async () => {
      try {
        const res = await fetch("/api/cases?nextId=true");
        if (res.ok) {
          const data = await res.json();
          if (data.success && data.caseId) {
            setGeneratedCaseId(data.caseId);
          }
        }
      } catch (err) {
        console.error("Failed to fetch next case ID:", err);
      }
    };

    const fetchProfile = async () => {
      try {
        const res = await fetch("/api/users/profile");
        if (res.ok) {
          const data = await res.json();
          if (data.success && data.profile) {
            setClientProfile(data.profile);
            setOriginalClientProfile(data.profile);
            if (data.profile.hasUnlimitedCases) {
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
        console.error("Failed to fetch user profile in new-recovery page:", err);
      }
    };

    const fetchPoliceStations = async () => {
      try {
        const res = await fetch("/api/police-stations", { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          if (data.success && data.data) {
            setPoliceStations(data.data);
          }
        }
      } catch (err) {
        console.error("Failed to fetch police stations:", err);
      }
    };

    fetchNextCaseId();
    fetchProfile();
    fetchPoliceStations();

    // Initialize onboarding
    const tour = localStorage.getItem("lr_onboarding_state");
    if (tour === "dashboard_new_recovery") {
      setOnboardingState("new_recovery");
      localStorage.setItem("lr_onboarding_state", "new_recovery");
    } else {
      setOnboardingState(tour);
    }
  }, []);

  // ── ON CHANGE VALIDATION AND FORMATTING HANDLERS ──
  const handleNameChange = (val: string) => {
    // Only alphabets and whitespaces allowed, no numerics or special characters
    const cleaned = val.replace(/[^A-Za-z\s]/g, "");
    setDefaulterName(cleaned);
  };

  const handlePhoneChange = (val: string) => {
    // Only numerics allowed, strictly limited to 10 digits
    const cleaned = val.replace(/\D/g, "").slice(0, 10);
    setPhone(cleaned);
  };

  const handlePhone2Change = (val: string) => {
    const cleaned = val.replace(/\D/g, "").slice(0, 10);
    setPhone2(cleaned);
  };

  const handleEmailChange = (val: string) => {
    setEmail(val);
    if (!val) {
      setEmailError(false);
      return;
    }
    // Standard robust email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(!emailRegex.test(val));
  };

  const handleEmail2Change = (val: string) => {
    setEmail2(val);
    if (!val) {
      setEmail2Error(false);
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmail2Error(!emailRegex.test(val));
  };

  const handleStuckAmountChange = (val: string) => {
    // Strip all non-numeric characters first
    const clean = val.replace(/\D/g, "");
    if (!clean) {
      setStuckAmount("");
      return;
    }
    const num = parseInt(clean, 10);
    // Format with Indian standard numbering system (Intl en-IN)
    const formatted = new Intl.NumberFormat("en-IN").format(num);
    setStuckAmount(formatted);
  };

  const handleDueDateChange = (val: string) => {
    const today = new Date().toISOString().split("T")[0];
    if (val > today) {
      alert("Original payment due date cannot be a future date.");
      setDueDate(today);
    } else {
      setDueDate(val);
    }
  };

  const handleStateChange = (state: string) => {
    setDefaulterState(state);
    if (state) {
      const hq = policeStations.find(
        (d) => d.state.toLowerCase() === state.toLowerCase()
      );
      if (hq) {
        setPoliceStationName(hq.hqName);
        setPoliceStationEmail(hq.emails[0] || "");
        setPoliceStationAddress(hq.hqAddress);
        setPoliceAutoFilled(true);
      }
    } else {
      setPoliceStationName("");
      setPoliceStationEmail("");
      setPoliceStationAddress("");
      setPoliceAutoFilled(false);
    }
  };

  const handlePincodeChange = (val: string) => {
    const cleaned = val.replace(/\D/g, "").slice(0, 6);
    setDefaulterPincode(cleaned);
  };



  // Live Preview selector: "notice1" | "notice2" | "notice3" | "police"
  const [previewTab, setPreviewTab] = useState<"notice1" | "notice2" | "notice3" | "police">("notice1");

  // Global validations
  const isFormValid = !!(
    defaulterName &&
    phone &&
    phone.length === 10 &&
    (!showPhone2 || (phone2 && phone2.length === 10 && phone2 !== phone)) &&
    email &&
    !emailError &&
    (!showEmail2 || (email2 && !email2Error && email2.toLowerCase().trim() !== email.toLowerCase().trim())) &&
    address &&
    defaulterState &&
    defaulterPincode &&
    defaulterPincode.length === 6 &&
    stuckAmount &&
    dueDate &&
    (previewTab !== "police" || (policeStationName && policeStationEmail && policeStationAddress))
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    // 1. Intercept if modal is not shown yet: Validate inputs via ChatGPT HELLO_DROP_CHOO first
    if (!showPreviewModal) {
      setIsValidating(true);
      setValidationError(null);

      try {
        const res = await fetch("/api/cases/validate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            defaulterName,
            address,
            phone,
            phone2,
            email,
            email2,
            stuckAmount: stuckAmount.replace(/,/g, ""),
            dueDate,
            policeStationName,
            policeStationAddress
          }),
        });

        if (!res.ok) {
          throw new Error("Validation service failed. Proceeding with caution.");
        }

        const data = await res.json();
        if (data.success && !data.isValid) {
          setValidationError(data.reason || "Some fields contain invalid or placeholder data.");
          return;
        }

        // Passed AI input checking: Show the prominent review/preview modal
        setShowPreviewModal(true);
      } catch (err: any) {
        console.error("AI Validation error:", err);
        // Graceful fallback to let them proceed if the API key fails
        setShowPreviewModal(true);
      } finally {
        setIsValidating(false);
      }
      return;
    }

    // 2. Perform the actual case creation in the database
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/cases", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          defaulterName,
          entityType,
          phone,
          phone2,
          email,
          email2,
          address,
          stuckAmount: stuckAmount.replace(/,/g, ""),
          dueDate,
          policeStationName,
          policeStationEmail,
          policeStationAddress,
          representeeId: selectedRepresenteeId === "self" ? undefined : selectedRepresenteeId,
          category
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create case.");
      }

      // Notify sidebar components to sync claims badge count
      window.dispatchEvent(new Event("lr_cases_updated"));

      const tour = localStorage.getItem("lr_onboarding_state");
      if (tour === "new_recovery" || tour === "new_recovery_hint_read" || !tour) {
        localStorage.setItem("lr_onboarding_state", "recovery_done");
      }

      router.push("/user/dashboard");
    } catch (err: any) {
      console.error("Failed to save claim record:", err);
      if (err.message && (err.message.includes("limit reached") || err.message.includes("purchase additional slots"))) {
        setIsBuyCreditsOpen(true);
      } else {
        alert(err.message || "Failed to save claim record.");
      }
    } finally {
      setIsSubmitting(false);
      setShowPreviewModal(false);
    }
  };

  if (clientProfile?.hasUnlimitedCases) {
    return (
      <main className="flex-1 lg:pl-[275px] pt-16 pb-16 lg:pt-0 lg:pb-0 min-h-screen flex flex-col overflow-y-auto bg-slate-50/50">
        <div className="flex-1 px-4 sm:px-6 lg:px-8 py-8 w-full max-w-5xl mx-auto">
          <div className="relative flex flex-col gap-6 text-left animate-in fade-in duration-300">
            
            {/* Back button */}
            <div>
              <Link 
                href="/user/dashboard"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#DC2626] transition-colors bg-white px-3.5 py-2 rounded-xl border border-[#E5E7EB]/80 shadow-sm"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back to Dashboard
              </Link>
            </div>

            {/* Header */}
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black bg-red-50 text-[#DC2626] border border-red-100 px-2 py-0.5 rounded uppercase select-none">Advocate Bulk Pipeline</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-[#111827] tracking-tight mt-1">Initiate Bulk Recoveries</h1>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-1">
                Dump raw data lists containing outstanding dues and defaulter info. ChatGPT will extract structured claims to queue them for automated notice dispatches.
              </p>
            </div>

            {/* Step 1: Configuration & Paste */}
            <div className="bg-white border border-[#E5E7EB]/70 rounded-3xl p-6 sm:p-8 flex flex-col gap-6 shadow-sm">
              <div className="border-b border-[#E5E7EB]/50 pb-2.5">
                <h3 className="text-base font-black text-[#111827]">
                  1. Setup Representation & Dump Data
                </h3>
              </div>

              {/* Representation Selector */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-655 flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-slate-450" /> Client Representation
                </label>
                <div className="relative w-full max-w-md">
                  <select
                    value={selectedRepresenteeId}
                    onChange={(e) => handleRepresentationChange(e.target.value)}
                    className="appearance-none w-full bg-slate-50 hover:bg-slate-100/50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-xl px-4 py-3 text-sm font-semibold outline-none transition-colors pr-10 cursor-pointer"
                  >
                    <option value="self">Representing Self (Advocate Profile)</option>
                    {representees.map((r) => (
                      <option key={r.id || r._id} value={r.id || r._id}>
                        Representing: {r.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>
                <p className="text-[10px] text-slate-400 font-bold uppercase mt-1 leading-none">
                  {selectedRepresenteeId === "self" 
                    ? "Notices will use your administrator details." 
                    : "Notices will automatically use organization details for preview and dispatch."}
                </p>
              </div>

              {/* Notice Category (Admin Only) */}
              {isSpecialUser && (
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-655 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-slate-450" /> Notice Category (Admin Only)
                  </label>
                  <div className="relative w-full max-w-md">
                    <select 
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="appearance-none w-full bg-slate-50 hover:bg-slate-100/50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-xl px-4 py-3 text-sm font-semibold outline-none transition-colors pr-10 cursor-pointer"
                    >
                      <option value="general-recovery">General Recovery</option>
                      <option value="loan-recovery">Loan Recovery</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>
              )}

              {/* Large Textarea for Bulk Paste */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-655 flex items-center justify-between">
                  <span>{category === 'loan-recovery' ? 'Borrower & Loan Bulk Data (Spreadsheet Dump)' : 'Defaulter & Dues Bulk Data (Spreadsheet Dump)'}</span>
                  <span className="text-[10px] font-extrabold text-[#DC2626] bg-red-50 border border-red-100 px-2 py-0.5 rounded">Tab-separated / Excel Paste Supported</span>
                </label>
                <textarea
                  rows={10}
                  placeholder={category === 'loan-recovery' 
                    ? "Borrower Legal Name\tOutstanding Loan Amount\tDefault/Due Date\tBorrower Contact Numbers\tBorrower Email Addresses\tBorrower State / UT\tComplete Physical Address of Borrower\tLoan ID\tDisbursement Date\nArun Kumar\t5,00,000.00\t24-Nov\t97160 30793\tarun@gmail.com\tHaryana\tMetro Pillar Number 461, Gurugram...\tLOAN-9923\t31-Jan-24"
                    : "Defaulter Legal Name\tOutstanding Dues Amount\tOriginal Payment Due Date\tDefaulter Contact Numbers\tDefaulter Email Addresses\tDefaulter State / UT\tComplete Physical Address of Defaulter\tInvoice no\tInvoice Date\nDr. Amrita Sharma\t1,461,994.00\t24-Nov\t97160 30793\tzumaxaa@ggmail.com\tHaryana\tMetro Pillar Number 461, Gurugram...\tGGN FY 23-24 Sales 5848\t31-Jan-24"
                  }
                  value={bulkText}
                  onChange={(e) => setBulkText(e.target.value)}
                  className="bg-slate-50 hover:bg-slate-100/50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-2xl px-4 py-3 text-xs font-mono outline-none resize-none transition-colors leading-relaxed"
                />
              </div>

              {/* Action Button */}
              <div className="flex flex-col gap-3">
                {parseError && (
                  <div className="bg-red-50 border border-red-200 text-red-750 text-xs font-semibold p-4 rounded-xl flex items-center gap-2 leading-relaxed animate-in fade-in">
                    <span className="font-bold">⚠️ Parsing Failed:</span>
                    <span>{parseError}</span>
                  </div>
                )}

                {parseSuccessCount !== null && (
                  <div className="bg-emerald-50 border border-emerald-250 text-emerald-805 text-xs font-semibold p-4 rounded-xl flex items-center justify-between leading-relaxed animate-in fade-in slide-in-from-top-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">✨</span>
                      <span>Successfully parsed and added <strong>{parseSuccessCount}</strong> new claims to the list below. You can enter another set of records now.</span>
                    </div>
                    <button 
                      type="button" 
                      onClick={() => setParseSuccessCount(null)}
                      className="text-[10px] font-bold text-emerald-600 hover:text-emerald-850 hover:underline uppercase tracking-wider ml-4 cursor-pointer"
                    >
                      Dismiss
                    </button>
                  </div>
                )}
                
                <button
                  type="button"
                  onClick={handleParseBulk}
                  disabled={isParsing || !bulkText.trim()}
                  className="px-6 py-3.5 text-xs font-black text-white bg-[#DC2626] hover:bg-[#B91C1C] disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer focus:outline-none shadow-md shadow-red-950/15"
                >
                  {isParsing ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      AI is Parsing Your Data List...
                    </>
                  ) : (
                    <>
                      <span>✨ Parse Claims with AI</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Step 2: Preview & Submit */}
            {parsedCases.length > 0 && (
              <div className="bg-white border border-[#E5E7EB]/70 rounded-3xl p-6 sm:p-8 flex flex-col gap-6 shadow-sm animate-in fade-in duration-300">
                <div className="border-b border-[#E5E7EB]/50 pb-2.5 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <h3 className="text-base font-black text-[#111827]">
                      2. Preview Extracted Claims
                    </h3>
                    <button
                      type="button"
                      onClick={() => {
                        if (confirm("Are you sure you want to clear all parsed cases?")) {
                          setParsedCases([]);
                          setParseSuccessCount(null);
                        }
                      }}
                      className="text-[10px] font-extrabold text-slate-500 hover:text-[#DC2626] bg-slate-50 hover:bg-red-50 border border-[#E5E7EB] hover:border-red-100 px-3 py-1 rounded-lg transition-all cursor-pointer"
                    >
                      Clear List
                    </button>
                  </div>
                  <span className="text-xs font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-red-50 text-[#DC2626] border border-red-100">
                    {parsedCases.length} Claims Found
                  </span>
                </div>

                {/* Table Preview Grid */}
                <div className="border border-slate-150 rounded-2xl overflow-hidden shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-150 text-[10px] font-black uppercase text-slate-500 tracking-wider">
                          <th className="px-4 py-3">Defaulter Info</th>
                          <th className="px-4 py-3">Dues</th>
                          <th className="px-4 py-3">Contact</th>
                          <th className="px-4 py-3">State & Address</th>
                          <th className="px-4 py-3">Invoice Details</th>
                          <th className="px-4 py-3 text-center">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {parsedCases.map((c, idx) => (
                          <tr 
                            key={idx} 
                            onClick={() => handleOpenModal(idx, false)}
                            className="hover:bg-slate-50/70 transition-colors cursor-pointer group"
                          >
                            {/* Defaulter Info */}
                            <td className="px-4 py-3.5 align-top">
                              <div className="font-extrabold text-slate-800 group-hover:text-[#DC2626] transition-colors leading-tight">{c.defaulterName}</div>
                              <div className="text-[10px] text-slate-400 font-bold uppercase mt-0.5">{c.entityType}</div>
                            </td>
                             {/* Dues */}
                            <td className="px-4 py-3.5 align-top">
                              <div className="font-black text-red-650">₹{c.stuckAmount.toLocaleString("en-IN")}</div>
                              <div className="text-[10px] text-slate-450 font-semibold mt-0.5">Due: {formatDateToDisplay(c.dueDate)}</div>
                            </td>
                            {/* Contact */}
                            <td className="px-4 py-3.5 align-top">
                              <div className="font-semibold text-slate-600">{c.phone}</div>
                              <div className="text-[10px] text-slate-450 lowercase">{c.email}</div>
                            </td>
                            {/* State & Address */}
                            <td className="px-4 py-3.5 align-top max-w-[200px]">
                              <div className="font-bold text-slate-700">{c.state}</div>
                              <div className="text-[10px] text-slate-450 mt-0.5 line-clamp-2 leading-relaxed" title={c.address}>
                                {c.address}
                              </div>
                            </td>
                            {/* Invoice Details */}
                            <td className="px-4 py-3.5 align-top">
                              <div className="font-semibold text-slate-700 truncate max-w-[150px]">{c.invoices && c.invoices.length > 0 ? `${c.invoices.length} Invoices` : "-"}</div>
                              <div className="text-[10px] text-slate-450 mt-0.5">{c.invoices && c.invoices.length > 0 ? "Clubbed Case" : "-"}</div>
                            </td>
                            {/* Actions */}
                            <td className="px-4 py-3.5 align-middle text-center" onClick={(e) => e.stopPropagation()}>
                              <div className="flex items-center justify-center gap-1.5">
                                <button
                                  type="button"
                                  onClick={() => handleOpenModal(idx, false)}
                                  className="p-2 text-slate-500 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 rounded-xl transition-all cursor-pointer"
                                  title="View Details"
                                >
                                  <Eye className="w-3.5 h-3.5" />
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleOpenModal(idx, true)}
                                  className="p-2 text-[#DC2626] hover:text-white bg-red-50 hover:bg-[#DC2626] rounded-xl transition-all cursor-pointer"
                                  title="Edit Details"
                                >
                                  <Edit className="w-3.5 h-3.5" />
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleDeleteParsedRow(idx)}
                                  className="p-2 text-red-650 hover:text-red-750 bg-red-50 hover:bg-red-100 rounded-xl transition-all cursor-pointer"
                                  title="Delete Case"
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

                {/* Metrics / Totals footer */}
                <div className="grid grid-cols-2 gap-4 bg-slate-50 border border-slate-100 p-5 rounded-2xl">
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] font-black uppercase text-slate-450 tracking-wider">Total Claims to Launch</span>
                    <span className="text-lg font-black text-slate-800 mt-0.5">{parsedCases.length}</span>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] font-black uppercase text-slate-450 tracking-wider">Total Outstanding Dues</span>
                    <span className="text-lg font-black text-[#DC2626] mt-0.5">
                      ₹{parsedCases.reduce((sum, c) => sum + c.stuckAmount, 0).toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>

                {/* Submit Panel */}
                <div className="flex flex-col gap-3">
                  <div className="bg-red-50 border border-red-200 p-4 rounded-2xl flex items-start gap-3">
                    <Lock className="w-5 h-5 text-[#DC2626] shrink-0 mt-0.5" />
                    <div className="flex flex-col gap-0.5 text-[#DC2626] leading-relaxed">
                      <span className="text-[10px] font-black uppercase tracking-wider">CRITICAL BATCH CONFIRMATION</span>
                      <span className="text-xs font-bold font-sans">
                        Confirming will immediately initiate notice schedules for all {parsedCases.length} cases.
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleBulkSubmit}
                    disabled={isBulkSubmitting}
                    className="w-full py-4 text-xs font-black text-white bg-[#DC2626] hover:bg-[#B91C1C] disabled:opacity-50 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                  >
                    {isBulkSubmitting ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        Launching Batch Pipeline...
                      </>
                    ) : (
                      <>Submit & Launch All {parsedCases.length} Recoveries</>
                    )}
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* ── DETAILED VIEW & EDIT MODAL FOR PARSED RECORD ── */}
        {activeModalIndex !== null && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl border border-slate-200 max-w-2xl w-full flex flex-col shadow-2xl animate-in zoom-in-95 duration-200 text-left max-h-[90vh] overflow-hidden">
              {/* Header */}
              <div className="p-6 border-b border-slate-100 flex items-center justify-between shrink-0">
                <div>
                  <h3 className="text-lg font-black text-slate-900 tracking-tight">
                    {isModalEditMode ? "Edit Claim Details" : "Claim Information"}
                  </h3>
                  <p className="text-xs text-slate-500 font-semibold mt-0.5">
                    {isModalEditMode ? "Modify the fields below to correct parsed claim data." : "Complete extracted database fields for this defaulter record."}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setActiveModalIndex(null);
                    setIsModalEditMode(false);
                  }}
                  className="text-slate-400 hover:text-slate-600 font-bold text-sm cursor-pointer p-1"
                >
                  ✕
                </button>
              </div>

              {/* Content (Scrollable) */}
              <div className="p-6 overflow-y-auto flex-1 flex flex-col gap-6 text-xs">
                {isModalEditMode ? (
                  // ── EDIT MODE FORM ──
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Defaulter Name */}
                    <div className="flex flex-col gap-1 sm:col-span-2">
                      <label className="font-bold text-slate-600">Defaulter Legal Name</label>
                      <input
                        type="text"
                        value={editDefaulterName}
                        onChange={(e) => setEditDefaulterName(e.target.value)}
                        className="bg-slate-50 hover:bg-slate-100/50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-xl px-3 py-2.5 font-semibold outline-none transition-colors"
                      />
                    </div>

                    {/* Constitution Type */}
                    <div className="flex flex-col gap-1">
                      <label className="font-bold text-slate-600">Constitution Type</label>
                      <select
                        value={editEntityType}
                        onChange={(e) => setEditEntityType(e.target.value)}
                        className="bg-slate-50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-xl px-3 py-2.5 font-semibold outline-none"
                      >
                        <option value="Company">Company</option>
                        <option value="Individual">Individual</option>
                        <option value="LLP / Partnership">LLP / Partnership</option>
                        <option value="Proprietorship">Proprietorship</option>
                      </select>
                    </div>

                    {/* Stuck Amount */}
                    <div className="flex flex-col gap-1">
                      <label className="font-bold text-slate-600">Dues Amount (INR)</label>
                      <input
                        type="text"
                        value={editStuckAmount}
                        onChange={(e) => setEditStuckAmount(e.target.value)}
                        className="bg-slate-50 hover:bg-slate-100/50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-xl px-3 py-2.5 font-semibold outline-none transition-colors"
                      />
                    </div>

                    {/* Due Date */}
                    <div className="flex flex-col gap-1">
                      <label className="font-bold text-slate-600">Payment Due Date</label>
                      <input
                        type="date"
                        value={editDueDate}
                        onChange={(e) => setEditDueDate(e.target.value)}
                        className="bg-slate-50 hover:bg-slate-100/50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-xl px-3 py-2.5 font-semibold outline-none transition-colors"
                      />
                    </div>

                    {category === "loan-recovery" && (
                      <>
                        {/* Disbursement Date */}
                        <div className="flex flex-col gap-1">
                          <label className="font-bold text-slate-600">Disbursement Date</label>
                          <input
                            type="date"
                            value={editDisbursementDate}
                            onChange={(e) => setEditDisbursementDate(e.target.value)}
                            className="bg-slate-50 hover:bg-slate-100/50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-xl px-3 py-2.5 font-semibold outline-none transition-colors"
                          />
                        </div>

                        {/* Disbursed Amount */}
                        <div className="flex flex-col gap-1">
                          <label className="font-bold text-slate-600">Disbursed Amount (INR)</label>
                          <input
                            type="text"
                            value={editDisbursedAmount}
                            onChange={(e) => setEditDisbursedAmount(e.target.value)}
                            className="bg-slate-50 hover:bg-slate-100/50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-xl px-3 py-2.5 font-semibold outline-none transition-colors"
                          />
                        </div>

                        {/* As On Date */}
                        <div className="flex flex-col gap-1">
                          <label className="font-bold text-slate-600">As On Date</label>
                          <input
                            type="date"
                            value={editAsOnDate}
                            onChange={(e) => setEditAsOnDate(e.target.value)}
                            className="bg-slate-50 hover:bg-slate-100/50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-xl px-3 py-2.5 font-semibold outline-none transition-colors"
                          />
                        </div>
                      </>
                    )}

                    {/* Phone 1 */}
                    <div className="flex flex-col gap-1">
                      <label className="font-bold text-slate-600">Primary Phone</label>
                      <input
                        type="tel"
                        maxLength={10}
                        value={editPhone}
                        onChange={(e) => setEditPhone(e.target.value.replace(/\D/g, ""))}
                        className="bg-slate-50 hover:bg-slate-100/50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-xl px-3 py-2.5 font-semibold outline-none transition-colors"
                      />
                    </div>

                    {/* Phone 2 */}
                    <div className="flex flex-col gap-1">
                      <label className="font-bold text-slate-600">Secondary Phone (Optional)</label>
                      <input
                        type="tel"
                        maxLength={10}
                        value={editPhone2}
                        onChange={(e) => setEditPhone2(e.target.value.replace(/\D/g, ""))}
                        className="bg-slate-50 hover:bg-slate-100/50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-xl px-3 py-2.5 font-semibold outline-none transition-colors"
                      />
                    </div>

                    {/* Email 1 */}
                    <div className="flex flex-col gap-1">
                      <label className="font-bold text-slate-600">Primary Email</label>
                      <input
                        type="email"
                        value={editEmail}
                        onChange={(e) => setEditEmail(e.target.value)}
                        className="bg-slate-50 hover:bg-slate-100/50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-xl px-3 py-2.5 font-semibold outline-none transition-colors"
                      />
                    </div>

                    {/* Email 2 */}
                    <div className="flex flex-col gap-1">
                      <label className="font-bold text-slate-600">Secondary Email (Optional)</label>
                      <input
                        type="email"
                        value={editEmail2}
                        onChange={(e) => setEditEmail2(e.target.value)}
                        className="bg-slate-50 hover:bg-slate-100/50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-xl px-3 py-2.5 font-semibold outline-none transition-colors"
                      />
                    </div>

                    {/* State */}
                    <div className="flex flex-col gap-1">
                      <label className="font-bold text-slate-600">State / UT</label>
                      <select
                        value={editState}
                        onChange={(e) => setEditState(e.target.value)}
                        className="bg-slate-50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-xl px-3 py-2.5 font-semibold outline-none"
                      >
                        <option value="">Select State</option>
                        {indianStates.map((st) => (
                          <option key={st} value={st}>{st}</option>
                        ))}
                      </select>
                    </div>

                    {/* Address */}
                    <div className="flex flex-col gap-1 sm:col-span-2">
                      <label className="font-bold text-slate-600">Complete Address</label>
                      <textarea
                        rows={3}
                        value={editAddress}
                        onChange={(e) => setEditAddress(e.target.value)}
                        className="bg-slate-50 hover:bg-slate-100/50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-2xl px-3 py-2 outline-none resize-none transition-colors font-sans"
                      />
                    </div>

                    {/* Invoices List Display */}
                    <div className="flex flex-col gap-2">
                      <label className="font-bold text-slate-600">Clubbed Invoices</label>
                      <div className="bg-slate-50 border border-[#E5E7EB] rounded-xl p-3 max-h-32 overflow-y-auto">
                        {editInvoices && editInvoices.length > 0 ? (
                          <div className="flex flex-col gap-1.5">
                            {editInvoices.map((inv, idx) => (
                              <div key={idx} className="flex justify-between items-center text-[10px] font-semibold text-slate-700 bg-white p-2 rounded-lg border border-slate-100">
                                <span>{inv.invoiceNo || "N/A"}</span>
                                {inv.dueDate && <span className="text-slate-400">Due: {formatDateToDisplay(inv.dueDate)}</span>}
                                <span className="text-[#DC2626]">₹{inv.amount.toLocaleString("en-IN")}</span>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <span className="text-[10px] text-slate-400 font-semibold italic">No invoices extracted.</span>
                        )}
                      </div>
                    </div>

                    {/* Police Station details label */}
                    <div className="sm:col-span-2 border-t border-slate-100 pt-3 mt-1">
                      <span className="font-extrabold text-[10px] text-slate-400 uppercase tracking-wider">SHO Jurisdictional Police Station</span>
                    </div>

                    {/* Police Station Name */}
                    <div className="flex flex-col gap-1">
                      <label className="font-bold text-slate-600">Station Name</label>
                      <input
                        type="text"
                        value={editPoliceStationName}
                        onChange={(e) => setEditPoliceStationName(e.target.value)}
                        className="bg-slate-50 hover:bg-slate-100/50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-xl px-3 py-2.5 font-semibold outline-none transition-colors"
                      />
                    </div>

                    {/* Police Station Email */}
                    <div className="flex flex-col gap-1">
                      <label className="font-bold text-slate-600">Station Email</label>
                      <input
                        type="email"
                        value={editPoliceStationEmail}
                        onChange={(e) => setEditPoliceStationEmail(e.target.value)}
                        className="bg-slate-50 hover:bg-slate-100/50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-xl px-3 py-2.5 font-semibold outline-none transition-colors"
                      />
                    </div>

                    {/* Police Station Address */}
                    <div className="flex flex-col gap-1 sm:col-span-2">
                      <label className="font-bold text-slate-600">Station Address</label>
                      <textarea
                        rows={2}
                        value={editPoliceStationAddress}
                        onChange={(e) => setEditPoliceStationAddress(e.target.value)}
                        className="bg-slate-50 hover:bg-slate-100/50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-2xl px-3 py-2 outline-none resize-none transition-colors font-sans"
                      />
                    </div>
                  </div>
                ) : (
                  // ── VIEW MODE DISPLAY ──
                  <div className="flex flex-col gap-6">
                    {/* Section 1: Defaulter Summary */}
                    <div className="border border-slate-100 rounded-2xl overflow-hidden">
                      <div className="bg-slate-50 border-b border-slate-100 px-4 py-2 font-black text-slate-800 uppercase tracking-wider text-[9px]">
                        Defaulter & Dues Summary
                      </div>
                      <div className="grid grid-cols-3 px-4 py-3.5 gap-y-2 gap-x-1.5 leading-relaxed">
                        <span className="font-bold text-slate-500">Legal Name:</span>
                        <span className="col-span-2 text-slate-900 font-extrabold">{editDefaulterName}</span>
                        
                        <span className="font-bold text-slate-500">Type:</span>
                        <span className="col-span-2 text-slate-700 font-semibold">{editEntityType}</span>

                        <span className="font-bold text-slate-500">Dues Amount:</span>
                        <span className="col-span-2 text-red-650 font-black">
                          ₹{editStuckAmount ? parseFloat(editStuckAmount.replace(/,/g, "")).toLocaleString("en-IN") : "0"}
                        </span>

                        <span className="font-bold text-slate-500">Due Date:</span>
                        <span className="col-span-2 text-slate-700 font-semibold">{editDueDate}</span>

                        {editDisbursementDate && (
                          <>
                            <span className="font-bold text-slate-500">Disbursed On:</span>
                            <span className="col-span-2 text-slate-700 font-semibold">{editDisbursementDate}</span>
                          </>
                        )}

                        {editDisbursedAmount && (
                          <>
                            <span className="font-bold text-slate-500">Disbursed Amt:</span>
                            <span className="col-span-2 text-slate-700 font-semibold">₹{parseFloat(editDisbursedAmount.replace(/,/g, "")).toLocaleString("en-IN")}</span>
                          </>
                        )}

                        {editAsOnDate && (
                          <>
                            <span className="font-bold text-slate-500">Amount As On:</span>
                            <span className="col-span-2 text-slate-700 font-semibold">{editAsOnDate}</span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Section 2: Contact Info */}
                    <div className="border border-slate-100 rounded-2xl overflow-hidden">
                      <div className="bg-slate-50 border-b border-slate-100 px-4 py-2 font-black text-slate-800 uppercase tracking-wider text-[9px]">
                        Contact Details
                      </div>
                      <div className="grid grid-cols-3 px-4 py-3.5 gap-y-2 gap-x-1.5 leading-relaxed">
                        <span className="font-bold text-slate-500">Primary Mobile:</span>
                        <span className="col-span-2 text-slate-700 font-semibold">{editPhone}</span>

                        {editPhone2 && (
                          <>
                            <span className="font-bold text-slate-500">Secondary Mobile:</span>
                            <span className="col-span-2 text-slate-700 font-semibold">{editPhone2}</span>
                          </>
                        )}

                        <span className="font-bold text-slate-500">Primary Email:</span>
                        <span className="col-span-2 text-slate-700 font-semibold">{editEmail}</span>

                        {editEmail2 && (
                          <>
                            <span className="font-bold text-slate-500">Secondary Email:</span>
                            <span className="col-span-2 text-slate-700 font-semibold">{editEmail2}</span>
                          </>
                        )}
                        {editCcEmails && (
                          <>
                            <span className="font-bold text-slate-500">CC Emails:</span>
                            <span className="col-span-2 text-slate-700 font-semibold">{editCcEmails}</span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Section 3: Physical Address */}
                    <div className="border border-slate-100 rounded-2xl overflow-hidden">
                      <div className="bg-slate-50 border-b border-slate-100 px-4 py-2 font-black text-slate-800 uppercase tracking-wider text-[9px]">
                        Location & Address
                      </div>
                      <div className="grid grid-cols-3 px-4 py-3.5 gap-y-2 gap-x-1.5 leading-relaxed">
                        <span className="font-bold text-slate-500">State / UT:</span>
                        <span className="col-span-2 text-slate-700 font-semibold">{editState}</span>

                        <span className="font-bold text-slate-500">Address:</span>
                        <span className="col-span-2 text-slate-700 font-semibold">{editAddress}</span>
                      </div>
                    </div>

                    {/* Section 4: Invoice Details */}
                    <div className="border border-slate-100 rounded-2xl overflow-hidden">
                      <div className="bg-slate-50 border-b border-slate-100 px-4 py-2 font-black text-slate-800 uppercase tracking-wider text-[9px]">
                        Invoice Info
                      </div>
                      <div className="grid grid-cols-3 px-4 py-3.5 gap-y-2 gap-x-1.5 leading-relaxed">
                        <div className="col-span-3 flex flex-col gap-2">
                        {editInvoices && editInvoices.length > 0 ? (
                          editInvoices.map((inv, idx) => (
                            <div key={idx} className="flex justify-between items-center text-[10px] font-semibold text-slate-700">
                              <span>{inv.invoiceNo || "N/A"}</span>
                              {inv.dueDate && <span className="text-slate-400">Due: {formatDateToDisplay(inv.dueDate)}</span>}
                              <span className="text-[#DC2626]">₹{inv.amount.toLocaleString("en-IN")}</span>
                            </div>
                          ))
                        ) : (
                          <span className="text-[10px] text-slate-400 font-semibold italic">No invoices extracted.</span>
                        )}
                        </div>
                      </div>
                    </div>

                    {/* Section 5: Jurisdictional Police Station */}
                    <div className="border border-slate-100 rounded-2xl overflow-hidden">
                      <div className="bg-slate-50 border-b border-slate-100 px-4 py-2 font-black text-slate-800 uppercase tracking-wider text-[9px]">
                        Jurisdictional Police Station
                      </div>
                      <div className="grid grid-cols-3 px-4 py-3.5 gap-y-2 gap-x-1.5 leading-relaxed">
                        <span className="font-bold text-slate-500">Station Name:</span>
                        <span className="col-span-2 text-slate-950 font-bold">{editPoliceStationName || "Not set"}</span>

                        <span className="font-bold text-slate-500">Station Email:</span>
                        <span className="col-span-2 text-slate-700 font-semibold">{editPoliceStationEmail || "-"}</span>

                        <span className="font-bold text-slate-500">Station Address:</span>
                        <span className="col-span-2 text-slate-700 font-semibold">{editPoliceStationAddress || "-"}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer (Actions) */}
              <div className="p-6 border-t border-slate-100 flex items-center justify-end gap-3 shrink-0">
                {isModalEditMode ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setIsModalEditMode(false)}
                      className="px-4 py-2 text-slate-700 hover:bg-slate-50 border border-slate-200 rounded-xl transition-all cursor-pointer font-bold text-xs"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={handleSaveModalDetails}
                      className="px-4 py-2 text-white bg-[#DC2626] hover:bg-[#B91C1C] rounded-xl transition-all cursor-pointer font-black text-xs shadow-md"
                    >
                      Save Changes
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => setIsModalEditMode(true)}
                      className="px-4 py-2 text-[#DC2626] hover:text-white bg-red-50 hover:bg-[#DC2626] border border-red-200 rounded-xl transition-all cursor-pointer font-black text-xs"
                    >
                      Edit Details
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setActiveModalIndex(null);
                        setIsModalEditMode(false);
                      }}
                      className="px-4 py-2 text-slate-700 hover:bg-slate-50 border border-slate-200 rounded-xl transition-all cursor-pointer font-bold text-xs"
                    >
                      Close
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
    );
  }

  return (
    <main className="flex-1 lg:pl-[275px] pt-16 pb-16 lg:pt-0 lg:pb-0 min-h-screen flex flex-col overflow-y-auto">
      <div className="flex-1 px-4 sm:px-6 lg:px-8 py-8 w-full max-w-8xl mx-auto">
        <div className={`relative flex flex-col gap-6 text-left animate-in fade-in duration-355`}>
      
      {/* Back button and Buy Credits */}
      <div className="flex items-center justify-between gap-3">
        <Link 
          href="/user/dashboard"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#DC2626] transition-colors bg-white px-3.5 py-2 rounded-xl border border-[#E5E7EB]/80 shadow-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Claims
        </Link>

        {clientProfile && !clientProfile.hasUnlimitedCases && (
          <button
            type="button"
            onClick={() => setIsBuyCreditsOpen(true)}
            className="inline-flex items-center gap-1.5 text-xs font-black text-slate-800 bg-white border-2 border-slate-200 hover:border-[#DC2626]/40 hover:bg-red-50/30 px-3.5 py-2 rounded-xl shadow-sm transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            <CreditCard className="w-3.5 h-3.5 text-[#DC2626]" />
            Buy Credits (₹999)
          </button>
        )}
      </div>

      {/* Quota Limit Warning Banner */}
      {clientProfile && !clientProfile.hasUnlimitedCases && clientProfile.remainingCases === 0 && (
        <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left">
          <div>
            <h4 className="text-xs font-black text-red-800 uppercase tracking-wider">Case Limit Reached (0 Slots Remaining)</h4>
            <p className="text-xs font-semibold text-red-700 mt-0.5">
              You have used all {clientProfile.allowedLimit || 1} of your case slots. Purchase additional credits to submit this claim.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsBuyCreditsOpen(true)}
            className="px-4 py-2.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-black rounded-xl shadow-md transition-all shrink-0 cursor-pointer"
          >
            Add Case Slots (₹999)
          </button>
        </div>
      )}

      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-[#111827] tracking-tight">Initiate Debt Recovery</h1>
        <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-1">
          Enter the defaulter's details and claim information to generate and schedule your automated legal demand notices.
        </p>
      </div>

      {/* Form and Preview Layout Grid */}
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
        {/* Mobile Tab Switcher */}
        <div className="flex lg:hidden bg-slate-100 border border-slate-200 rounded-2xl p-1 gap-1 select-none">
          <button
            type="button"
            onClick={() => setMobileTab("form")}
            className={`flex-1 py-3 text-xs font-black rounded-xl transition-all focus:outline-none cursor-pointer flex items-center justify-center gap-1.5
              ${mobileTab === "form" 
                ? "bg-white text-[#DC2626] shadow-[0_2px_8px_rgba(0,0,0,0.05)] border border-slate-200/30" 
                : "text-slate-500 hover:text-slate-700"}`}
          >
            📋 1. Configure Claim
          </button>
          <button
            type="button"
            onClick={() => setMobileTab("preview")}
            className={`flex-1 py-3 text-xs font-black rounded-xl transition-all focus:outline-none cursor-pointer flex items-center justify-center gap-1.5
              ${mobileTab === "preview" 
                ? "bg-white text-[#DC2626] shadow-[0_2px_8px_rgba(0,0,0,0.05)] border border-slate-200/30" 
                : "text-slate-500 hover:text-slate-700"}`}
          >
            👁️ 2. Live Preview
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in duration-300">
          
          {/* LEFT COLUMN: Defaulter details details */}
          <div className={`flex flex-col gap-6 lg:col-span-5 ${mobileTab === 'form' ? 'flex' : 'hidden lg:flex'}`}>
          
          {/* SECTION 1: DEFAULTER & CLAIM DETAILS */}
          <div className="bg-white border border-[#E5E7EB]/70 rounded-3xl p-6 sm:p-8 flex flex-col gap-5 shadow-sm">
            <h3 className="text-base font-black text-[#111827] border-b border-[#E5E7EB]/50 pb-2">
              1. Defaulter & Claim Details
            </h3>

            {/* Client Representation Selector (Only for Advocate/Unlimited Profiles) */}
            {originalClientProfile?.hasUnlimitedCases && (
              <div className="flex flex-col gap-1.5 border-b border-[#E5E7EB]/50 pb-4 mb-2">
                <label className="text-xs font-bold text-slate-650 mb-1.5 flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-slate-400" /> Client Representation
                </label>
                <div className="relative">
                  <select
                    value={selectedRepresenteeId}
                    onChange={(e) => handleRepresentationChange(e.target.value)}
                    className="appearance-none w-full bg-slate-50 hover:bg-slate-100/50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-xl px-4 py-3 text-sm font-semibold outline-none transition-colors pr-10 cursor-pointer"
                  >
                    <option value="self">Representing Self (Advocate Profile)</option>
                    {representees.map((r) => (
                      <option key={r.id || r._id} value={r.id || r._id}>
                        Representing: {r.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>
                <p className="text-[10px] text-slate-400 font-bold uppercase mt-1 leading-none">
                  {selectedRepresenteeId === "self" 
                    ? "Notices will list your administrator details as client." 
                    : "Notices will automatically use organization details for preview and dispatch."}
                </p>
              </div>
            )}
            
            {/* Notice Category (Admin Only) */}
            {isSpecialUser && (
              <div className="flex flex-col">
                <label className="text-xs font-bold text-slate-600 mb-1.5 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-slate-400" /> Notice Category (Admin Only)
                </label>
                <div className="relative">
                  <select 
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-slate-50 hover:bg-slate-100/50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-xl px-4 py-3 text-sm font-semibold outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="general-recovery">General Recovery</option>
                    <option value="loan-recovery">Loan Recovery</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>
              </div>
            )}
            
            {/* Defaulter Name */}
            <div className="flex flex-col">
              <label className="text-xs font-bold text-slate-600 mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-slate-400" /> Defaulter Legal Name
              </label>
              <input 
                type="text" 
                required
                placeholder="e.g. Apex Digital Solutions"
                value={defaulterName}
                onChange={(e) => handleNameChange(e.target.value)}
                className="bg-slate-50 hover:bg-slate-100/50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-xl px-4 py-3 text-sm font-semibold outline-none transition-colors"
              />
            </div>

            {/* Entity Type selection */}
            <div className="flex flex-col">
              <label className="text-xs font-bold text-slate-600 mb-1.5 flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-slate-400" /> Entity Constitution Type
              </label>
              <div className="grid grid-cols-2 gap-2">
                {["Company", "Individual", "LLP / Partnership", "Proprietorship"].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setEntityType(type)}
                    className={`py-2 px-3 text-xs font-bold border rounded-xl transition-all cursor-pointer text-center
                      ${entityType === type 
                        ? "bg-red-50 border-[#DC2626] text-[#DC2626]" 
                        : "bg-white border-[#E5E7EB] text-slate-500 hover:bg-slate-50 hover:text-slate-800"}`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Stuck Amount & Original Due Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-xs font-bold text-slate-600 mb-1.5 flex items-center gap-1.5">
                  <IndianRupee className="w-3.5 h-3.5 text-slate-400" /> Stuck Dues Amount (INR)
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. 45,000"
                  value={stuckAmount}
                  onChange={(e) => handleStuckAmountChange(e.target.value)}
                  className="bg-slate-50 hover:bg-slate-100/50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-xl px-4 py-3 text-sm font-semibold outline-none transition-colors"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-bold text-slate-600 mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" /> Original Payment Due Date
                </label>
                <input 
                  type="date" 
                  required
                  max={new Date().toISOString().split("T")[0]}
                  value={dueDate}
                  onChange={(e) => handleDueDateChange(e.target.value)}
                />
              </div>
            </div>

            {/* Informational Help Alert for Multiple Contacts */}
            <div className="text-[11px] font-bold text-slate-500 flex items-center gap-2 bg-slate-50 border border-[#E5E7EB]/50 px-4 py-2.5 rounded-xl w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-pulse" />
              <span>You can enter up to 2 unique phone numbers for WhatsApp broadcasts and up to 2 unique email IDs for notice dispatches.</span>
            </div>

            {/* Defaulter Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
              <div className="flex flex-col">
                <label className="text-xs font-bold text-slate-600 mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-slate-400" /> Defaulter Mobile Number 1
                </label>
                <input 
                  type="tel" 
                  required
                  placeholder="e.g. 9876543210"
                  value={phone}
                  onChange={(e) => handlePhoneChange(e.target.value)}
                  className="bg-slate-50 hover:bg-slate-100/50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-xl px-4 py-3 text-sm font-semibold outline-none transition-colors"
                />
              </div>

              {!showPhone2 ? (
                <div className="flex items-center h-[46px]">
                  <button
                    type="button"
                    onClick={() => setShowPhone2(true)}
                    className="flex items-center gap-2 text-xs font-bold text-[#DC2626] hover:text-[#DC2626]/80 bg-red-50 hover:bg-red-100/50 px-4 py-2.5 rounded-xl border border-dashed border-red-200 transition-all shadow-sm cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add Secondary Mobile Number
                  </button>
                </div>
              ) : (
                <div className="flex flex-col relative group">
                  <label className="text-xs font-bold text-slate-600 mb-1.5 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-slate-400" /> Defaulter Mobile Number 2 (Optional)
                    </span>
                    <button 
                      type="button" 
                      onClick={() => { setShowPhone2(false); setPhone2(""); }}
                      className="text-[10px] font-bold text-red-500 hover:underline cursor-pointer"
                    >
                      Remove
                    </button>
                  </label>
                  <input 
                    type="tel" 
                    placeholder="e.g. 9876543211"
                    value={phone2}
                    onChange={(e) => handlePhone2Change(e.target.value)}
                    className={`bg-slate-50 hover:bg-slate-100/50 border rounded-xl px-4 py-3 text-sm font-semibold outline-none transition-colors
                      ${phone2 && phone2 === phone ? "border-red-300 focus:border-red-500" : "border-[#E5E7EB] focus:border-[#DC2626]"}`}
                  />
                  {phone2 && phone2 === phone && (
                    <span className="text-[11px] text-red-500 font-semibold mt-1">
                      Must be unique from Mobile Number 1.
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Defaulter Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
              <div className="flex flex-col">
                <label className="text-xs font-bold text-slate-600 mb-1.5 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-400" /> Defaulter Email Address 1
                </label>
                <input 
                  type="email" 
                  required
                  placeholder="e.g. billing@company.in"
                  value={email}
                  onChange={(e) => handleEmailChange(e.target.value)}
                  className="bg-slate-50 hover:bg-slate-100/50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-xl px-4 py-3 text-sm font-semibold outline-none transition-colors"
                />
                {emailError && (
                  <span className="text-[11px] text-red-500 font-semibold mt-1">
                    Please enter a valid email address.
                  </span>
                )}
              </div>

              {!showEmail2 ? (
                <div className="flex items-center h-[46px]">
                  <button
                    type="button"
                    onClick={() => setShowEmail2(true)}
                    className="flex items-center gap-2 text-xs font-bold text-[#DC2626] hover:text-[#DC2626]/80 bg-red-50 hover:bg-red-100/50 px-4 py-2.5 rounded-xl border border-dashed border-red-200 transition-all shadow-sm cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add Secondary Email Address
                  </button>
                </div>
              ) : (
                <div className="flex flex-col relative group">
                  <label className="text-xs font-bold text-slate-600 mb-1.5 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-slate-400" /> Defaulter Email Address 2 (Optional)
                    </span>
                    <button 
                      type="button" 
                      onClick={() => { setShowEmail2(false); setEmail2(""); setEmail2Error(false); }}
                      className="text-[10px] font-bold text-red-500 hover:underline cursor-pointer"
                    >
                      Remove
                    </button>
                  </label>
                  <input 
                    type="email" 
                    placeholder="e.g. contact@company.in"
                    value={email2}
                    onChange={(e) => handleEmail2Change(e.target.value)}
                    className={`bg-slate-50 hover:bg-slate-100/50 border rounded-xl px-4 py-3 text-sm font-semibold outline-none transition-colors
                      ${email2Error || (email2 && email2.toLowerCase().trim() === email.toLowerCase().trim()) ? "border-red-300 focus:border-red-500" : "border-[#E5E7EB] focus:border-[#DC2626]"}`}
                  />
                  {email2Error && (
                    <span className="text-[11px] text-red-500 font-semibold mt-1">
                      Please enter a valid email address.
                    </span>
                  )}
                  {email2 && email2.toLowerCase().trim() === email.toLowerCase().trim() && (
                    <span className="text-[11px] text-red-500 font-semibold mt-1">
                      Must be unique from Email Address 1.
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Defaulter State & Pincode */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-xs font-bold text-slate-600 mb-1.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" /> Defaulter State / UT <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select 
                    required
                    value={defaulterState}
                    onChange={(e) => handleStateChange(e.target.value)}
                    className="appearance-none w-full bg-slate-50 hover:bg-slate-100/50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-xl px-4 py-3 text-sm font-semibold outline-none transition-colors pr-10 cursor-pointer"
                  >
                    <option value="">Select State / UT</option>
                    {indianStates.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-bold text-slate-600 mb-1.5 flex items-center gap-1.5">
                  <Search className="w-3.5 h-3.5 text-slate-400" /> Defaulter Area Pincode <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  required
                  inputMode="numeric"
                  placeholder="e.g. 201301"
                  value={defaulterPincode}
                  onChange={(e) => handlePincodeChange(e.target.value)}
                  className={`bg-slate-50 hover:bg-slate-100/50 border rounded-xl px-4 py-3 text-sm font-semibold outline-none transition-colors
                    ${defaulterPincode && defaulterPincode.length !== 6 ? "border-red-300 focus:border-red-500" : "border-[#E5E7EB] focus:border-[#DC2626]"}`}
                />
                {defaulterPincode && defaulterPincode.length !== 6 && (
                  <span className="text-[11px] text-red-500 font-semibold mt-1">
                    Pincode must be exactly 6 digits.
                  </span>
                )}
              </div>
            </div>

            {/* Defaulter Physical Address */}
            <div className="flex flex-col">
              <label className="text-xs font-bold text-slate-600 mb-1.5 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" /> Physical Defaulter Address
              </label>
              <textarea 
                required
                rows={2}
                placeholder="e.g. Sector 62, Noida, Uttar Pradesh, 201301"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="bg-slate-50 hover:bg-slate-100/50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-xl px-4 py-3 text-sm font-semibold outline-none resize-none transition-colors"
              />
            </div>

          </div>

          {/* SECTION 2: POLICE AUTHORITY DETAILS COMPLAINT CARD */}
          <div className="bg-white border border-[#E5E7EB]/70 rounded-3xl p-6 sm:p-8 flex flex-col gap-5 shadow-sm">
             <div className="border-b border-[#E5E7EB]/50 pb-2.5 flex items-center justify-between gap-3">
              <h3 className="text-base font-black text-[#111827]">
                2. Jurisdictional Police Station Details
              </h3>
              <span className="text-[9px] font-black bg-slate-100 text-[#DC2626] px-2 py-0.5 rounded uppercase shrink-0">
                Notice 4 Setup
              </span>
            </div>

            {/* Auto-fill indicator */}
            {policeAutoFilled && (
              <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200/60 rounded-xl px-4 py-2.5 animate-in fade-in slide-in-from-top-2 duration-300">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="text-[11px] font-bold text-emerald-700">
                  Auto-filled from <strong>{defaulterState}</strong> state police directory. You may override with local station details if known.
                </span>
              </div>
            )}

            {!defaulterState && (
              <div className="flex items-center gap-2 bg-amber-50 border border-amber-200/60 rounded-xl px-4 py-2.5">
                <Info className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span className="text-[11px] font-bold text-amber-700">
                  Select the defaulter&apos;s state above to auto-fill police station details.
                </span>
              </div>
            )}

            {/* Jurisdictional Police Station Name */}
            <div className="flex flex-col">
              <label className="text-xs font-bold text-slate-600 mb-1.5 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-slate-400" /> Jurisdictional Police Station Name
              </label>
              <input 
                type="text" 
                required
                placeholder="e.g. Sector 58 Police Station, Noida"
                value={policeStationName}
                onChange={(e) => { setPoliceStationName(e.target.value); setPoliceAutoFilled(false); }}
                className={`bg-slate-50 hover:bg-slate-100/50 border rounded-xl px-4 py-3 text-sm font-semibold outline-none transition-colors
                  ${policeAutoFilled ? "border-emerald-300 focus:border-[#DC2626]" : "border-[#E5E7EB] focus:border-[#DC2626]"}`}
              />
            </div>

            {/* Police Station Email ID */}
            <div className="flex flex-col">
              <label className="text-xs font-bold text-slate-600 mb-1.5 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-400" /> Police Station Email ID
              </label>
              <input 
                type="email" 
                required
                placeholder="e.g. sho.sec58.noida@uppolice.gov.in"
                value={policeStationEmail}
                onChange={(e) => { setPoliceStationEmail(e.target.value); setPoliceAutoFilled(false); }}
                className={`bg-slate-50 hover:bg-slate-100/50 border rounded-xl px-4 py-3 text-sm font-semibold outline-none transition-colors
                  ${policeAutoFilled ? "border-emerald-300 focus:border-[#DC2626]" : "border-[#E5E7EB] focus:border-[#DC2626]"}`}
              />
            </div>

            {/* Police Station Address */}
            <div className="flex flex-col">
              <label className="text-xs font-bold text-slate-600 mb-1.5 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" /> Police Station Physical Address
              </label>
              <textarea 
                required
                rows={2}
                placeholder="e.g. Sector 58 Police Station House, Noida, G.B. Nagar, UP 201301"
                value={policeStationAddress}
                onChange={(e) => { setPoliceStationAddress(e.target.value); setPoliceAutoFilled(false); }}
                className={`bg-slate-50 hover:bg-slate-100/50 border rounded-xl px-4 py-3 text-sm font-semibold outline-none resize-none transition-colors
                  ${policeAutoFilled ? "border-emerald-300 focus:border-[#DC2626]" : "border-[#E5E7EB] focus:border-[#DC2626]"}`}
              />
            </div>
          </div>

          {/* Submit Control at the bottom of form column */}
          <div className="flex flex-col gap-3 w-full">
            {validationError && (
              <div className="bg-red-50 border border-red-200 text-red-750 text-xs font-semibold p-4 rounded-xl flex flex-col gap-1 leading-normal">
                <span className="font-bold flex items-center gap-1">⚠️ AI Input Check Flagged:</span>
                <span>{validationError}</span>
                <span className="text-[10px] text-red-500 font-bold uppercase tracking-wider mt-1">Please correct the fields before submitting.</span>
              </div>
            )}
            
            <button
              type="submit"
              disabled={!isFormValid || isSubmitting || isValidating}
              className="w-full px-6 py-3 text-xs font-black text-white bg-[#DC2626] hover:bg-[#B91C1C] disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer focus:outline-none shadow-md shadow-red-950/15"
            >
              {isValidating ? (
                <>Auditing Inputs...</>
              ) : isSubmitting ? (
                <>Saving Claim Tracks...</>
              ) : (
                <>Confirm & Review Claim</>
              )}
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive live notice switcher & dynamic draft letter letterhead */}
        <div className={`flex flex-col gap-4 lg:sticky lg:top-6 lg:col-span-7 ${mobileTab === 'preview' ? 'flex' : 'hidden lg:flex'}`}>
          
          {/* Tab selector */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-black text-[#111827] uppercase tracking-wider block">Select Demand Notice to Preview</span>
            <div className="grid grid-cols-4 gap-1.5 bg-slate-150 p-1.5 rounded-xl border border-slate-200/40 shadow-inner">
              {[
                { tab: "notice1", label: "Notice 1" },
                { tab: "notice2", label: "Notice 2" },
                { tab: "notice3", label: "Notice 3" },
                { tab: "police", label: "Police SHO" }
              ].map((d) => (
                <button
                  key={d.tab}
                  type="button"
                  onClick={() => setPreviewTab(d.tab as any)}
                  className={`py-2.5 text-[10.5px] sm:text-xs font-bold rounded-lg cursor-pointer transition-all text-center
                    ${previewTab === d.tab 
                      ? "bg-white text-[#DC2626] shadow-sm font-extrabold" 
                      : "text-slate-500 hover:text-[#111827] hover:bg-slate-50"}`}
                >
                  {d.label}
                </button>
              ))}
            </div>
            
            {/* Active Schedule details status tag */}
            <span className="text-[9px] font-extrabold uppercase text-slate-400 block tracking-wider mt-0.5 leading-none">
              {previewTab === "notice1" && "⏰ Queued for immediate dispatch (1 Hour Grace)"}
              {previewTab === "notice2" && "🗓️ Queued for automated dispatch (Notice 1 + 1 Week)"}
              {previewTab === "notice3" && "🗓️ Queued for automated dispatch (Notice 2 + 1 Week)"}
              {previewTab === "police" && "👮 Queued for automatic Sho complaint draft (Notice 3 + 1 Week)"}
            </span>
          </div>

          {/* Letterhead Mock Paper */}
          <div 
            className="bg-white border border-[#E5E7EB]/70 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col gap-4 relative select-text"
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
          >
            {/* Legal letterhead graphic banner */}
            <div className="flex flex-col text-center pb-2">
              <img src="/notices/header logo AMA .png" alt="AMA Logo" width="260" height="72" className="w-[220px] sm:w-[260px] h-[61px] sm:h-[72px] block mx-auto mb-1" style={{ aspectRatio: "3.6337" }} />
              <div className="text-center text-[9px] sm:text-[10px] leading-normal text-black font-semibold">
                <div className="font-bold text-[10px] sm:text-[11px] mb-0.5">Advocate & Solicitors</div>
                <div>2493AP, Ground floor, Sector 57, Gurugram-122003 (Haryana)</div>
                <div className="font-bold text-[8.5px] sm:text-[9.5px] mt-1">
                  E: <span className="text-[#0066cc] underline">notice@amalegalsolutions.com</span>
                </div>
              </div>
              <table className="w-full border-collapse border-none mt-2.5 text-[8.5px] sm:text-[10px] text-black font-bold">
                <tbody>
                  <tr className="align-middle">
                    <td className="text-left p-0 pb-0.5 border-none">Advocate Anuj Anand Malik</td>
                    <td className="text-right p-0 pb-0.5 font-bold border-none">MEMBER - BAR COUNCIL OF DELHI</td>
                  </tr>
                  <tr className="align-middle">
                    <td className="text-left p-0 pb-0.5 border-none">Advocate Shrey Arora</td>
                    <td className="text-right p-0 pb-0.5 font-bold border-none">MEMBER - MCIA (MUMBAI)</td>
                  </tr>
                  <tr className="align-middle">
                    <td className="text-left p-0 border-none"></td>
                    <td className="text-right p-0 font-bold border-none">ASSOCIATION MEMBER - IACC</td>
                  </tr>
                </tbody>
              </table>
              <table className="w-full border-collapse border-none mt-2 text-[8.5px] sm:text-[9.5px] text-slate-500 font-bold">
                <tbody>
                  <tr className="align-middle">
                    <td className="text-left p-0 border-none">
                      Ref: {previewTab === "notice2" ? `${generatedCaseId}-N2` : previewTab === "notice3" ? `${generatedCaseId}-N3` : previewTab === "police" ? `${generatedCaseId}-POLICE` : `${generatedCaseId}-N1`}
                    </td>
                    <td className="text-right p-0 border-none">Date: {new Date().toLocaleDateString("en-IN")}</td>
                  </tr>
                </tbody>
              </table>
              <div className="border-b-2 border-black mt-1.5"></div>
            </div>

            {/* ── DYNAMIC PREVIEW PANES ── */}
            {(() => {
              const clientDisplayAddress = clientProfile?.address?.trim()
                ? clientProfile.address.trim()
                : (clientProfile?.state?.trim() ? `${clientProfile.state.trim()}, India` : "India");
              const clientDisplayName = clientProfile?.name?.trim() || "Tech AMA";

              return (
                <div className="w-full flex flex-col gap-4">
                
                {/* Notice 1 */}
                {previewTab === "notice1" && (
                  <div className="flex-1 flex flex-col gap-4">
                    <div className="text-center font-bold text-slate-900 border-y border-[#E5E7EB] py-1.5 tracking-wide text-xs uppercase leading-tight">
                      LEGAL DEMAND NOTICE
                    </div>

                    <div className="text-[9.5px] leading-relaxed text-slate-700 flex flex-col gap-3 select-text">
                      <div className="font-bold text-slate-600 flex flex-col gap-0.5">
                        <span>Date: {new Date().toLocaleDateString("en-IN")}</span>
                        <span className="mt-1">To,</span>
                        <span className="font-extrabold text-slate-900 bg-yellow-50 px-1 border border-yellow-100 rounded w-fit leading-tight mt-0.5">
                          {defaulterName || "[Name of Opposite Party / Individual / Company]"}
                        </span>
                        {phone && <span className="text-slate-550 text-[8.5px]">Mobile: {phone}{phone2 ? `, ${phone2}` : ""}</span>}
                        {email && <span className="text-slate-550 text-[8.5px]">Email: {email}{email2 ? `, ${email2}` : ""}</span>}
                        <span className="mt-0.5 bg-yellow-50 px-1 border border-yellow-100 rounded text-slate-800 font-bold max-w-[280px]">
                          {address || "[Address]"}
                        </span>
                      </div>

                      <div className="text-xs font-bold text-slate-900 border-b border-[#E5E7EB] pb-1 uppercase leading-tight">
                        Subject: Demand Notice for Immediate Clearance of Outstanding Liability of ₹<strong>{stuckAmount || "[Amount]"}</strong> Towards <strong>{clientDisplayName}</strong>
                      </div>

                      <p>Dear Sir/Madam,</p>
                      
                      <p>
                        Under instructions from and on behalf of our client <strong>{clientDisplayName}</strong>, residing at <strong className="bg-yellow-50 px-0.5">{clientDisplayAddress}</strong>, we hereby call upon you to address and resolve the pending amount/claim arising out of dealings, transactions, services, agreements, commitments, or obligations between you and our client.
                      </p>
                      
                      <p>
                        It has been informed to us that despite repeated requests, reminders, and communications made by our client, the matter remains unresolved and an amount of <strong className="bg-yellow-50 px-0.5">₹{stuckAmount || "[Amount]"}</strong> is still due/pending towards our client.
                      </p>
                      
                      <p>
                        Our client has acted in good faith and fulfilled their part of obligations; however, the pending dues/claim have not been settled by you till date.
                      </p>
                      
                      <div className="flex flex-col gap-1">
                        <span>You are therefore hereby requested to:</span>
                        <span>1. Clear/pay the outstanding amount of <strong className="bg-yellow-50 px-0.5">₹{stuckAmount || "[Amount]"}</strong>; and/or</span>
                        <span>2. Resolve the matter amicably within 7 (Seven) days from the receipt of this notice.</span>
                      </div>
                      
                      <p>
                        In the event that you dispute the claim or amount, you are requested to provide your written response along with supporting documents within the aforesaid period for appropriate consideration.
                      </p>
                      
                      <p>
                        Please take notice that failure to respond or resolve the matter within the stipulated time may compel our client to initiate appropriate legal proceedings and remedies available under applicable laws, entirely at your own risk as to costs and consequences.
                      </p>
                      
                      <p>
                        This notice is being issued without prejudice to all rights, claims, remedies, and legal actions available to our client under law.
                      </p>
                      
                      <p>
                        A copy of this Notice has been preserved in our office for record and future course of action. You are hereby advised to preserve a copy of this notice, as the same may be required to be produced before the appropriate Court of Law and/or competent authority as and when required.
                      </p>

                      <div className="mt-2 flex flex-col gap-0.5 text-left text-[8.5px] font-bold text-slate-500">
                        <span>For and on behalf of <strong>{clientDisplayName}</strong></span>
                        <span className="text-slate-900 font-extrabold uppercase mt-1">Kindly treat this matter as urgent.</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Notice 2 */}
                {previewTab === "notice2" && (
                  <div className="flex-1 flex flex-col gap-4">
                    <div className="text-[9.5px] leading-relaxed text-slate-600 flex flex-col">
                      <span className="text-[8px] text-slate-450 font-bold uppercase tracking-wider mb-0.5">TO DEFAULTER:</span>
                      <span className="font-extrabold text-slate-800 bg-yellow-50 px-1 border border-yellow-100 rounded w-fit leading-tight mt-0.5">
                        {defaulterName || "[DEFAULTER LEGAL NAME]"}
                      </span>
                      <span>Constitution: <strong>{entityType}</strong></span>
                      {phone && <span>Mobile: <strong>{phone}{phone2 ? `, ${phone2}` : ""}</strong></span>}
                      {email && <span>Email: <strong>{email}{email2 ? `, ${email2}` : ""}</strong></span>}
                      <span className="mt-0.5 bg-yellow-50 px-1 border border-yellow-100 rounded text-slate-800 font-bold max-w-[280px]">
                        {address || "[PHYSICAL STREET ADDRESS]"}
                      </span>
                    </div>

                    <div className="text-xs font-bold text-center text-slate-900 border-y border-[#E5E7EB] py-1.5 uppercase leading-tight">
                      Subject: Demand Notice for Immediate Clearance of Outstanding Liability of ₹<strong>{stuckAmount || "[Amount]"}</strong> Towards <strong>{clientDisplayName}</strong>
                    </div>

                    <div className="text-[9.5px] leading-relaxed text-slate-700 flex flex-col gap-3 select-text">
                      <p>Dear Sir/Madam,</p>
                      <p>
                        Under instructions and authority from our client <strong>{clientDisplayName}</strong>, residing/having office at <strong className="bg-yellow-50 px-0.5">{clientDisplayAddress}</strong>, we hereby issue the present Second and Final Legal Notice calling upon you to immediately clear the outstanding dues/claim amounting to <strong className="bg-yellow-50 px-0.5">₹{stuckAmount || "[Amount]"}</strong> payable towards our client arising out of transactions, services, agreements, commitments, business dealings, or financial obligations undertaken by you.
                      </p>
                      <p>
                        Despite repeated reminders, communications, and an earlier legal notice served upon you, you have failed to regularize the matter or provide any satisfactory response. Your conduct clearly reflects deliberate negligence, avoidance, and non-compliance towards lawful obligations owed to our client.
                      </p>
                      <p>
                        It is pertinent to mention that if any person dishonestly retains money, intentionally avoids payment despite liability, induces another party under false assurances, or causes wrongful financial loss, such actions may attract legal consequences under applicable provisions of the <strong>Bharatiya Nyaya Sanhita, 2023</strong>, including but not limited to provisions relating to:
                      </p>
                      <div className="flex flex-col gap-1 pl-4">
                        <span>1. Cheating and dishonest inducement;</span>
                        <span>2. Criminal breach of trust;</span>
                        <span>3. Fraudulent or dishonest conduct causing wrongful loss.</span>
                      </div>
                      <p>
                        Our client still wishes to provide you with a final opportunity to amicably resolve the matter without initiating formal legal proceedings.
                      </p>
                      <p>You are therefore finally called upon to:</p>
                      <div className="flex flex-col gap-1 pl-4">
                        <span>1. Make payment of the outstanding amount of <strong className="bg-yellow-50 px-0.5">₹{stuckAmount || "[Amount]"}</strong> within 7 (Seven) days from receipt of this notice; OR</span>
                        <span>2. Provide a written explanation along with documentary proof disputing the claim within the aforesaid period.</span>
                      </div>
                      <p>
                        Kindly take notice that upon failure to comply, our client shall be constrained to initiate appropriate civil and/or criminal proceedings before the competent authorities/courts/forum, including filing complaints before the appropriate police authorities and legal forums, entirely at your own risk as to costs, liabilities, and consequences.
                      </p>
                      <p>
                        Please further note that any continued avoidance, non-response, or intentional withholding of payment may be relied upon as adverse conduct in future legal proceedings.
                      </p>
                      <p>
                        This notice is issued without prejudice to all legal rights and remedies available to our client under applicable law.
                      </p>
                      <p>
                        A copy of this Notice has been preserved in our office for record and future course of action. You are hereby advised to preserve a copy of this notice, as the same may be required to be produced before the appropriate Court of Law and/or competent authority as and when required.
                      </p>
                    </div>
                  </div>
                )}

                {/* Notice 3 */}
                {previewTab === "notice3" && (
                  <div className="flex-1 flex flex-col gap-4">
                    <div className="text-[9.5px] leading-relaxed text-slate-650 flex flex-col">
                      <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">TO DEFAULTER:</span>
                      <span className="font-extrabold text-slate-800 bg-yellow-50 px-1 border border-yellow-100 rounded w-fit leading-tight mt-0.5">
                        {defaulterName || "[DEFAULTER LEGAL NAME]"}
                      </span>
                      <span>Constitution: <strong>{entityType}</strong></span>
                      {phone && <span>Mobile: <strong>{phone}{phone2 ? `, ${phone2}` : ""}</strong></span>}
                      {email && <span>Email: <strong>{email}{email2 ? `, ${email2}` : ""}</strong></span>}
                      <span className="mt-0.5 bg-yellow-50 px-1 border border-yellow-100 rounded text-slate-800 font-bold max-w-[280px]">
                        {address || "[PHYSICAL STREET ADDRESS]"}
                      </span>
                    </div>

                    <div className="text-xs font-bold text-center text-slate-900 border-y border-[#E5E7EB] py-1.5 uppercase leading-tight">
                      Subject: Final Pre-Litigation and Police Complaint Notice for Recovery of ₹<strong>{stuckAmount || "[Amount]"}</strong> Under Applicable Provisions of Bharatiya Nyaya Sanhita (BNS) Towards <strong>{clientDisplayName}</strong>
                    </div>

                    <div className="text-[9.5px] leading-relaxed text-slate-700 flex flex-col gap-3 select-text">
                      <p>Dear Sir/Madam,</p>
                      <p>
                        Under instructions from and on behalf of my client <strong>{clientDisplayName}</strong>, residing/having office at <strong className="bg-yellow-50 px-0.5">{clientDisplayAddress}</strong>, I hereby issue the present Final Legal Notice against you with respect to the outstanding amount/claim of <strong className="bg-yellow-50 px-0.5">INR {stuckAmount || "[Amount]"}/-</strong> arising out of dealings, transactions, services, agreements, commitments, or obligations between you and our client.
                      </p>
                      <p>
                        It is pertinent to note that despite repeated reminders, follow-ups, and opportunities extended to you for amicable resolution, you have deliberately failed and neglected to clear the outstanding liability and/or honour your commitments. Your conduct has caused substantial financial loss, harassment, mental agony, and inconvenience to my client.
                      </p>
                      <p>Your actions prima facie disclose elements of:</p>
                      <div className="flex flex-col gap-0.5 pl-3 text-slate-700 font-semibold">
                        <span>- dishonest intention,</span>
                        <span>- wrongful withholding of money/property,</span>
                        <span>- misrepresentation,</span>
                        <span>- criminal breach of trust,</span>
                        <span>- cheating, and</span>
                        <span>- intentional non-compliance despite repeated demands.</span>
                      </div>
                      <p>
                        Accordingly, your acts may attract penal consequences under the relevant provisions of the <strong>Bharatiya Nyaya Sanhita, 2023</strong> including but not limited to:
                      </p>
                      <div className="flex flex-col gap-0.5 pl-3 text-slate-700 font-semibold">
                        <span>- <strong>Section 316 BNS</strong> – Criminal Breach of Trust</span>
                        <span>- <strong>Section 318 BNS</strong> – Cheating</span>
                        <span>- <strong>Section 351 BNS</strong> – Criminal Intimidation (where applicable)</span>
                        <span>- Any other applicable civil and criminal provisions based upon the facts and documents available on record.</span>
                      </div>
                      <p>You are therefore called upon for the <strong>FINAL</strong> time to:</p>
                      <div className="flex flex-col gap-0.5 pl-3 text-slate-700 font-semibold">
                        <span>1. Clear/pay the outstanding amount of <strong className="bg-yellow-50 px-0.5">INR {stuckAmount || "[Amount]"}/-</strong>;</span>
                        <span>2. Provide written confirmation of settlement; and</span>
                        <span>3. Resolve the matter within <strong>72 HOURS</strong> from receipt of this notice.</span>
                      </div>
                      <p>
                        Please take notice that in the event of your failure to comply within the aforesaid period, my client shall be constrained to initiate appropriate legal proceedings against you, including but not limited to:
                      </p>
                      <div className="flex flex-col gap-0.5 pl-3 text-slate-700 font-semibold">
                        <span>- filing of Police Complaint/FIR before the competent Police Authorities;</span>
                        <span>- initiation of criminal proceedings under applicable provisions of BNS;</span>
                        <span>- civil recovery proceedings before appropriate courts/forums;</span>
                        <span>- recovery of interest, damages, litigation costs, and legal expenses.</span>
                      </div>
                      <p>
                        Kindly note that the entire risk as to costs and legal consequences arising therefrom shall solely be attributable to you.
                      </p>
                      <p>
                        This notice is issued without prejudice to all other legal rights and remedies available to my client under applicable law.
                      </p>
                      <p>
                        A copy of this Notice has been preserved in our office for record and future course of action. You are hereby advised to preserve a copy of this notice, as the same may be required to be produced before the appropriate Court of Law and/or competent authority as and when required.
                      </p>
                    </div>
                  </div>
                )}

                {/* SHO Police Complaint */}
                {previewTab === "police" && (
                  <div className="flex-1 flex flex-col gap-3">
                    <div className="text-[9.5px] leading-relaxed text-slate-650 flex flex-col">
                      <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">TO POLICE AUTHORITY:</span>
                      <span className="font-extrabold text-slate-800">To,</span>
                      <span className="font-extrabold text-slate-800">The Station House Officer (SHO),</span>
                      <span className="font-extrabold text-slate-800 bg-yellow-50 px-1 border border-yellow-100 rounded w-fit mt-0.5 leading-tight">
                        {policeStationName || "[POLICE STATION NAME]"}
                      </span>
                      <span className="mt-0.5 bg-yellow-50 px-1 border border-yellow-100 rounded text-slate-800 font-bold max-w-[280px]">
                        {policeStationAddress || "[POLICE STATION ADDRESS]"}
                      </span>
                    </div>
                    <div className="text-xs font-bold text-center text-slate-900 border-y border-[#E5E7EB] py-1.5 uppercase leading-tight">
                      Subject: Complaint Against {defaulterName || "[Accused Name]"} for Cheating, Criminal Breach of Trust, Dishonest Non-Payment and Other Applicable Offences Under Bharatiya Nyaya Sanhita (BNS)
                    </div>

                    <div className="text-[9.5px] leading-relaxed text-slate-700 flex flex-col gap-3 select-text">
                      <div className="text-[10px] font-black uppercase text-slate-800 border-b border-[#E5E7EB] pb-0.5">COMPLAINANT DETAILS</div>
                      <div className="grid grid-cols-3 text-[9px] font-semibold text-slate-700 gap-y-0.5 pl-1">
                        <span className="font-bold text-slate-500">Name:</span><span className="col-span-2 text-slate-950 font-bold"><strong>{clientDisplayName}</strong></span>
                        <span className="font-bold text-slate-500">Phone Number:</span><span className="col-span-2 text-slate-950 font-bold"><strong>{clientProfile?.phone ? "+91 " + clientProfile.phone : "+91 87003 43611"}</strong></span>
                        <span className="font-bold text-slate-500">Email ID:</span><span className="col-span-2 text-slate-950 font-bold"><strong>{clientProfile?.email || "notice@amalegalsolutions.com"}</strong></span>
                        <span className="font-bold text-slate-500">Address:</span><span className="col-span-2 text-slate-950 font-bold"><strong>{clientDisplayAddress}</strong></span>
                      </div>

                      <div className="text-[10px] font-black uppercase text-slate-800 border-b border-[#E5E7EB] pb-0.5 mt-1">ACCUSED DETAILS</div>
                      <div className="grid grid-cols-3 text-[9px] font-semibold text-slate-700 gap-y-0.5 pl-1">
                        <span className="font-bold text-slate-500">Name:</span><span className="col-span-2 text-slate-950 font-black bg-yellow-50 border border-yellow-100 rounded px-1 w-fit"><strong>{defaulterName || "[Accused Name]"}</strong></span>
                        <span className="font-bold text-slate-500">Phone Number(s):</span><span className="col-span-2 text-slate-950 font-bold"><strong>{phone}{phone2 ? `, ${phone2}` : ""}</strong></span>
                        <span className="font-bold text-slate-500">Email ID(s):</span><span className="col-span-2 text-slate-950 font-bold"><strong>{email}{email2 ? `, ${email2}` : ""}</strong></span>
                        <span className="font-bold text-slate-500">Address:</span><span className="col-span-2 bg-yellow-50 border border-yellow-100 rounded px-1 w-fit text-slate-950 font-bold"><strong>{address || "[Accused Address]"}</strong></span>
                      </div>

                      <p className="mt-1 font-semibold text-slate-950">Respected Sir/Madam,</p>

                      <p>
                        Under instructions from and on behalf of our client, namely <strong>{clientDisplayName}</strong>, we, AMA Legal Solutions, through our authorized legal representatives, hereby submit the present complaint against the above-mentioned accused for acts involving deliberate non-payment of legitimate dues, cheating, dishonest inducement, criminal breach of trust, and wrongful financial loss caused to our client.
                      </p>

                      <p>
                        That the accused had entered into a transaction/understanding with our client, pursuant to which an amount of <strong className="bg-yellow-50 px-1">INR {stuckAmount || "[Amount]"}/-</strong> became legally due and payable to our client.
                      </p>

                      <p>
                        Despite repeated follow-ups, calls, messages, reminders, and legal notices issued on behalf of our client, the accused has intentionally failed and neglected to clear the outstanding dues. The conduct of the accused clearly demonstrates dishonest intention from the very inception of the transaction and reflects wilful default and deliberate evasion of liability.
                      </p>

                      <p>
                        It is pertinent to mention that the accused has continuously avoided communication and has failed to provide any lawful justification for withholding the legitimate dues of our client. Such conduct has caused severe financial loss, mental harassment, business disruption, and unnecessary hardship to our client.
                      </p>

                      <p>
                        The actions of the accused prima facie attract offences punishable under the applicable provisions of the <strong>Bharatiya Nyaya Sanhita (BNS)</strong>, including but not limited to offences relating to:
                      </p>
                      <div className="flex flex-col gap-0.5 pl-3 font-semibold text-slate-700">
                        <span>1. Cheating;</span>
                        <span>2. Criminal Breach of Trust;</span>
                        <span>3. Dishonest Misappropriation;</span>
                        <span>4. Fraudulent and dishonest inducement; and</span>
                        <span>5. Other allied offences as may be made out during investigation.</span>
                      </div>

                      <p>In view of the foregoing, we respectfully request your good office to:</p>
                      <div className="flex flex-col gap-0.5 pl-3 font-semibold text-slate-700">
                        <span>1. Take cognizance of the present complaint;</span>
                        <span>2. Initiate appropriate inquiry/investigation against the accused;</span>
                        <span>3. Summon/call the accused for questioning;</span>
                        <span>4. Take necessary legal action in accordance with law; and</span>
                        <span>5. Protect the rights and interests of our client.</span>
                      </div>

                      <p className="font-bold text-slate-900 mt-1">
                        Kindly treat this matter as urgent and take appropriate action at the earliest.
                      </p>
                    </div>
                  </div>
                )}
                </div>
              );
            })()}

            {/* Signature & High Fidelity Repeating Footer */}
            <div className="mt-auto pt-2 flex flex-col gap-2">
              <div className="text-left px-1">
                <div style={{ marginBottom: "4px", whiteSpace: "nowrap", width: "fit-content", textAlign: "left" }}>
                  <img src="/notices/Signature.png" alt="Signature" className="h-[35px] sm:h-[45px] w-auto inline-block" style={{ verticalAlign: "bottom", marginRight: "12px" }} />
                  <img src={previewTab === "police" ? "/notices/AMA stamp logo.png" : ((clientProfile?.phone?.replace(/\D/g, '').endsWith('8700343611') || clientProfile?.phone?.replace(/\D/g, '').endsWith('8130104447')) ? "/notices/bar_stamp.png" : "/notices/AMA stamp logo.png")} alt="Stamp" className="h-[45px] sm:h-[55px] w-auto object-contain opacity-90 inline-block" style={{ verticalAlign: "bottom" }} />
                </div>
                <span className="font-bold text-slate-800 text-[10px] sm:text-[11px] block">For AMA Legal Solutions<sup>®</sup></span>
                <span className="text-slate-500 text-[9px] block mt-0.5">Through Authorized Signatory</span>
              </div>
              <div className="border-t border-b border-black py-1 flex items-center justify-between text-[6.5px] sm:text-[7.5px] font-bold text-black uppercase px-1">
                <div className="w-[30px]"></div>
                <div className="text-center tracking-wide whitespace-nowrap flex-1">
                  GURUGRAM - DELHI - NOIDA - BENGALURU - MUMBAI
                </div>
                <div className="w-[30px] flex justify-end">
                  <img src="/notices/AMA stamp logo.png" alt="Stamp" className="h-[20px] sm:h-[26px] w-auto object-contain opacity-90 block" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </form>

    {/* ── PREVIEW & FINAL CONFIRMATION MODAL ── */}
    {showPreviewModal && (
      <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
        <div className="bg-white rounded-3xl border border-slate-200 max-w-xl w-full p-6 sm:p-8 flex flex-col gap-6 shadow-2xl animate-in zoom-in-95 duration-200 text-left">
          <div>
            <h3 className="text-lg font-black text-slate-900 tracking-tight">Review Claim Details & Confirm</h3>
            <p className="text-xs text-slate-500 font-semibold mt-1">
              Verify that all information is completely accurate before beginning automated dispatch.
            </p>
          </div>

          {/* Structured Details Preview */}
          <div className="border border-slate-100 rounded-2xl overflow-hidden text-xs">
            <div className="bg-slate-50 border-b border-slate-100 px-4 py-2 font-black text-slate-800 uppercase tracking-wider text-[9px]">
              Defaulter & Dues Summary
            </div>
            <div className="grid grid-cols-3 border-b border-slate-100 px-4 py-2.5 gap-y-2 gap-x-1.5">
              <span className="font-bold text-slate-500">Legal Name:</span>
              <span className="col-span-2 text-slate-900 font-extrabold">{defaulterName}</span>
              <span className="font-bold text-slate-500">Type:</span>
              <span className="col-span-2 text-slate-700 font-semibold">{entityType}</span>
              <span className="font-bold text-slate-500">Mobile Phone 1:</span>
              <span className="col-span-2 text-slate-700 font-semibold">{phone}</span>
              {phone2 && (
                <>
                  <span className="font-bold text-slate-500">Mobile Phone 2:</span>
                  <span className="col-span-2 text-slate-700 font-semibold">{phone2}</span>
                </>
              )}
              <span className="font-bold text-slate-500">Email Address 1:</span>
              <span className="col-span-2 text-slate-700 font-semibold">{email}</span>
              {email2 && (
                <>
                  <span className="font-bold text-slate-500">Email Address 2:</span>
                  <span className="col-span-2 text-slate-700 font-semibold">{email2}</span>
                </>
              )}
              <span className="font-bold text-slate-500">Physical Address:</span>
              <span className="col-span-2 text-slate-700 font-semibold">{address}</span>
              <span className="font-bold text-slate-500">Stuck Amount:</span>
              <span className="col-span-2 text-indigo-700 font-extrabold">₹{stuckAmount || ""}</span>
              <span className="font-bold text-slate-500">Due Date:</span>
              <span className="col-span-2 text-slate-700 font-semibold">{dueDate}</span>
            </div>

            <div className="bg-slate-50 border-b border-slate-100 px-4 py-2 font-black text-slate-800 uppercase tracking-wider text-[9px]">
              Jurisdictional Police Station
            </div>
            <div className="grid grid-cols-3 px-4 py-2.5 gap-y-2 gap-x-1.5">
              <span className="font-bold text-slate-500">Station Name:</span>
              <span className="col-span-2 text-slate-900 font-bold">{policeStationName}</span>
              <span className="font-bold text-slate-500">Station Email:</span>
              <span className="col-span-2 text-slate-700 font-semibold">{policeStationEmail}</span>
              <span className="font-bold text-slate-500">Station Address:</span>
              <span className="col-span-2 text-slate-700 font-semibold">{policeStationAddress}</span>
            </div>
          </div>

          {/* Prominent Legal Warning notice */}
          <div className="bg-red-50 border border-red-200 p-4 rounded-2xl flex items-start gap-3">
            <Lock className="w-5 h-5 text-[#DC2626] shrink-0 mt-0.5" />
            <div className="flex flex-col gap-0.5 text-[#DC2626] leading-relaxed">
              <span className="text-[10px] font-black uppercase tracking-wider">CRITICAL LEGAL NOTICE</span>
              <span className="text-xs font-bold font-sans">
                These details will not be edited or changed in future. Confirm them correctly.
              </span>
            </div>
          </div>

          {/* Modal Actions */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setShowPreviewModal(false)}
              className="flex-1 px-4 py-3 text-xs font-bold text-slate-700 hover:text-slate-900 hover:bg-slate-50 border border-slate-200 rounded-xl transition-all cursor-pointer text-center"
            >
              No, Edit Details
            </button>
            <button
              type="button"
              onClick={(e) => {
                handleSubmit(e);
              }}
              disabled={isSubmitting}
              className="flex-1 px-4 py-3 text-xs font-black text-white bg-[#DC2626] hover:bg-[#B91C1C] disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer focus:outline-none shadow-md shadow-red-950/15"
            >
              {isSubmitting ? "Launching Claim..." : "Yes, Confirm & Submit"}
            </button>
          </div>
        </div>
      </div>
    )}

    {/* ── DETAILED VIEW & EDIT MODAL FOR PARSED RECORD ── */}
    {activeModalIndex !== null && (
      <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
        <div className="bg-white rounded-3xl border border-slate-200 max-w-2xl w-full flex flex-col shadow-2xl animate-in zoom-in-95 duration-200 text-left max-h-[90vh] overflow-hidden">
          {/* Header */}
          <div className="p-6 border-b border-slate-100 flex items-center justify-between shrink-0">
            <div>
              <h3 className="text-lg font-black text-slate-900 tracking-tight">
                {isModalEditMode ? "Edit Claim Details" : "Claim Information"}
              </h3>
              <p className="text-xs text-slate-500 font-semibold mt-0.5">
                {isModalEditMode ? "Modify the fields below to correct parsed claim data." : "Complete extracted database fields for this defaulter record."}
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setActiveModalIndex(null);
                setIsModalEditMode(false);
              }}
              className="text-slate-400 hover:text-slate-600 font-bold text-sm cursor-pointer p-1"
            >
              ✕
            </button>
          </div>

          {/* Content (Scrollable) */}
          <div className="p-6 overflow-y-auto flex-1 flex flex-col gap-6 text-xs">
            {isModalEditMode ? (
              // ── EDIT MODE FORM ──
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Defaulter Name */}
                <div className="flex flex-col gap-1 sm:col-span-2">
                  <label className="font-bold text-slate-600">Defaulter Legal Name</label>
                  <input
                    type="text"
                    value={editDefaulterName}
                    onChange={(e) => setEditDefaulterName(e.target.value)}
                    className="bg-slate-50 hover:bg-slate-100/50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-xl px-3 py-2.5 font-semibold outline-none transition-colors"
                  />
                </div>

                {/* Constitution Type */}
                <div className="flex flex-col gap-1">
                  <label className="font-bold text-slate-600">Constitution Type</label>
                  <select
                    value={editEntityType}
                    onChange={(e) => setEditEntityType(e.target.value)}
                    className="bg-slate-50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-xl px-3 py-2.5 font-semibold outline-none"
                  >
                    <option value="Company">Company</option>
                    <option value="Individual">Individual</option>
                    <option value="LLP / Partnership">LLP / Partnership</option>
                    <option value="Proprietorship">Proprietorship</option>
                  </select>
                </div>

                {/* Stuck Amount */}
                <div className="flex flex-col gap-1">
                  <label className="font-bold text-slate-600">Dues Amount (INR)</label>
                  <input
                    type="text"
                    value={editStuckAmount}
                    onChange={(e) => setEditStuckAmount(e.target.value)}
                    className="bg-slate-50 hover:bg-slate-100/50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-xl px-3 py-2.5 font-semibold outline-none transition-colors"
                  />
                </div>

                {/* Due Date */}
                <div className="flex flex-col gap-1">
                  <label className="font-bold text-slate-600">Payment Due Date</label>
                  <input
                    type="date"
                    value={editDueDate}
                    onChange={(e) => setEditDueDate(e.target.value)}
                    className="bg-slate-50 hover:bg-slate-100/50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-xl px-3 py-2.5 font-semibold outline-none transition-colors"
                  />
                </div>

                {/* Phone 1 */}
                <div className="flex flex-col gap-1">
                  <label className="font-bold text-slate-600">Primary Phone</label>
                  <input
                    type="tel"
                    maxLength={10}
                    value={editPhone}
                    onChange={(e) => setEditPhone(e.target.value.replace(/\D/g, ""))}
                    className="bg-slate-50 hover:bg-slate-100/50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-xl px-3 py-2.5 font-semibold outline-none transition-colors"
                  />
                </div>

                {/* Phone 2 */}
                <div className="flex flex-col gap-1">
                  <label className="font-bold text-slate-600">Secondary Phone (Optional)</label>
                  <input
                    type="tel"
                    maxLength={10}
                    value={editPhone2}
                    onChange={(e) => setEditPhone2(e.target.value.replace(/\D/g, ""))}
                    className="bg-slate-50 hover:bg-slate-100/50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-xl px-3 py-2.5 font-semibold outline-none transition-colors"
                  />
                </div>

                {/* Email 1 */}
                <div className="flex flex-col gap-1">
                  <label className="font-bold text-slate-600">Primary Email</label>
                  <input
                    type="email"
                    value={editEmail}
                    onChange={(e) => setEditEmail(e.target.value)}
                    className="bg-slate-50 hover:bg-slate-100/50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-xl px-3 py-2.5 font-semibold outline-none transition-colors"
                  />
                </div>

                {/* Email 2 */}
                <div className="flex flex-col gap-1">
                  <label className="font-bold text-slate-600">Secondary Email (Optional)</label>
                  <input
                    type="email"
                    value={editEmail2}
                    onChange={(e) => setEditEmail2(e.target.value)}
                    className="bg-slate-50 hover:bg-slate-100/50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-xl px-3 py-2.5 font-semibold outline-none transition-colors"
                  />
                </div>

                {/* State */}
                <div className="flex flex-col gap-1">
                  <label className="font-bold text-slate-600">State / UT</label>
                  <select
                    value={editState}
                    onChange={(e) => setEditState(e.target.value)}
                    className="bg-slate-50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-xl px-3 py-2.5 font-semibold outline-none"
                  >
                    <option value="">Select State</option>
                    {indianStates.map((st) => (
                      <option key={st} value={st}>{st}</option>
                    ))}
                  </select>
                </div>

                {/* Address */}
                <div className="flex flex-col gap-1 sm:col-span-2">
                  <label className="font-bold text-slate-600">Complete Address</label>
                  <textarea
                    rows={3}
                    value={editAddress}
                    onChange={(e) => setEditAddress(e.target.value)}
                    className="bg-slate-50 hover:bg-slate-100/50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-2xl px-3 py-2 outline-none resize-none transition-colors font-sans"
                  />
                </div>

                {/* Invoices List Display */}
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label className="font-bold text-slate-600">Clubbed Invoices</label>
                  <div className="bg-slate-50 border border-[#E5E7EB] rounded-xl p-3 max-h-32 overflow-y-auto">
                    {editInvoices && editInvoices.length > 0 ? (
                      <div className="flex flex-col gap-1.5">
                        {editInvoices.map((inv, idx) => (
                          <div key={idx} className="flex justify-between items-center text-xs font-semibold text-slate-700 bg-white p-2 rounded-lg border border-slate-100">
                            <span>{inv.invoiceNo || "N/A"}</span>
                            <div className="flex flex-col text-[10px] text-slate-400">
                              <span>Inv: {formatDateToDisplay(inv.invoiceDate)}</span>
                              {inv.dueDate && <span>Due: {formatDateToDisplay(inv.dueDate)}</span>}
                            </div>
                            <span className="text-[#DC2626]">₹{inv.amount.toLocaleString("en-IN")}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <span className="text-xs text-slate-400 font-semibold italic">No invoices extracted.</span>
                    )}
                  </div>
                </div>

                {/* Police Station details label */}
                <div className="sm:col-span-2 border-t border-slate-100 pt-3 mt-1">
                  <span className="font-extrabold text-[10px] text-slate-400 uppercase tracking-wider">SHO Jurisdictional Police Station</span>
                </div>

                {/* Police Station Name */}
                <div className="flex flex-col gap-1">
                  <label className="font-bold text-slate-600">Station Name</label>
                  <input
                    type="text"
                    value={editPoliceStationName}
                    onChange={(e) => setEditPoliceStationName(e.target.value)}
                    className="bg-slate-50 hover:bg-slate-100/50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-xl px-3 py-2.5 font-semibold outline-none transition-colors"
                  />
                </div>

                {/* Police Station Email */}
                <div className="flex flex-col gap-1">
                  <label className="font-bold text-slate-600">Station Email</label>
                  <input
                    type="email"
                    value={editPoliceStationEmail}
                    onChange={(e) => setEditPoliceStationEmail(e.target.value)}
                    className="bg-slate-50 hover:bg-slate-100/50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-xl px-3 py-2.5 font-semibold outline-none transition-colors"
                  />
                </div>

                {/* Police Station Address */}
                <div className="flex flex-col gap-1 sm:col-span-2">
                  <label className="font-bold text-slate-600">Station Address</label>
                  <textarea
                    rows={2}
                    value={editPoliceStationAddress}
                    onChange={(e) => setEditPoliceStationAddress(e.target.value)}
                    className="bg-slate-50 hover:bg-slate-100/50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-2xl px-3 py-2 outline-none resize-none transition-colors font-sans"
                  />
                </div>
              </div>
            ) : (
              // ── VIEW MODE DISPLAY ──
              <div className="flex flex-col gap-6">
                {/* Section 1: Defaulter Summary */}
                <div className="border border-slate-100 rounded-2xl overflow-hidden">
                  <div className="bg-slate-50 border-b border-slate-100 px-4 py-2 font-black text-slate-800 uppercase tracking-wider text-[9px]">
                    Defaulter & Dues Summary
                  </div>
                  <div className="grid grid-cols-3 px-4 py-3.5 gap-y-2 gap-x-1.5 leading-relaxed">
                    <span className="font-bold text-slate-500">Legal Name:</span>
                    <span className="col-span-2 text-slate-900 font-extrabold">{editDefaulterName}</span>
                    
                    <span className="font-bold text-slate-500">Type:</span>
                    <span className="col-span-2 text-slate-700 font-semibold">{editEntityType}</span>

                    <span className="font-bold text-slate-500">Dues Amount:</span>
                    <span className="col-span-2 text-red-650 font-black">
                      ₹{editStuckAmount ? parseFloat(editStuckAmount.replace(/,/g, "")).toLocaleString("en-IN") : "0"}
                    </span>

                    <span className="font-bold text-slate-500">Due Date:</span>
                    <span className="col-span-2 text-slate-700 font-semibold">{editDueDate}</span>
                  </div>
                </div>

                {/* Section 2: Contact Info */}
                <div className="border border-slate-100 rounded-2xl overflow-hidden">
                  <div className="bg-slate-50 border-b border-slate-100 px-4 py-2 font-black text-slate-800 uppercase tracking-wider text-[9px]">
                    Contact Details
                  </div>
                  <div className="grid grid-cols-3 px-4 py-3.5 gap-y-2 gap-x-1.5 leading-relaxed">
                    <span className="font-bold text-slate-500">Primary Mobile:</span>
                    <span className="col-span-2 text-slate-700 font-semibold">{editPhone}</span>

                    {editPhone2 && (
                      <>
                        <span className="font-bold text-slate-500">Secondary Mobile:</span>
                        <span className="col-span-2 text-slate-700 font-semibold">{editPhone2}</span>
                      </>
                    )}

                    <span className="font-bold text-slate-500">Primary Email:</span>
                    <span className="col-span-2 text-slate-700 font-semibold">{editEmail}</span>

                    {editEmail2 && (
                      <>
                        <span className="font-bold text-slate-500">Secondary Email:</span>
                        <span className="col-span-2 text-slate-700 font-semibold">{editEmail2}</span>
                      </>
                    )}
                    {editCcEmails && (
                      <>
                        <span className="font-bold text-slate-500">CC Emails:</span>
                        <span className="col-span-2 text-slate-700 font-semibold">{editCcEmails}</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Section 3: Physical Address */}
                <div className="border border-slate-100 rounded-2xl overflow-hidden">
                  <div className="bg-slate-50 border-b border-slate-100 px-4 py-2 font-black text-slate-800 uppercase tracking-wider text-[9px]">
                    Location & Address
                  </div>
                  <div className="grid grid-cols-3 px-4 py-3.5 gap-y-2 gap-x-1.5 leading-relaxed">
                    <span className="font-bold text-slate-500">State / UT:</span>
                    <span className="col-span-2 text-slate-700 font-semibold">{editState}</span>

                    <span className="font-bold text-slate-500">Address:</span>
                    <span className="col-span-2 text-slate-700 font-semibold">{editAddress}</span>
                  </div>
                </div>

                {/* Section 4: Invoice Details */}
                <div className="border border-slate-100 rounded-2xl overflow-hidden">
                  <div className="bg-slate-50 border-b border-slate-100 px-4 py-2 font-black text-slate-800 uppercase tracking-wider text-[9px]">
                    Invoice Info
                  </div>
                  <div className="grid grid-cols-1 px-4 py-3.5 gap-y-2 gap-x-1.5 leading-relaxed">
                    <div className="col-span-1 flex flex-col gap-2">
                      {editInvoices && editInvoices.length > 0 ? (
                        editInvoices.map((inv, idx) => (
                          <div key={idx} className="flex justify-between items-center text-sm font-semibold text-slate-700">
                            <span>{inv.invoiceNo || "N/A"}</span>
                            <div className="flex flex-col text-xs text-slate-400 text-center">
                              <span>Inv: {formatDateToDisplay(inv.invoiceDate)}</span>
                              {inv.dueDate && <span>Due: {formatDateToDisplay(inv.dueDate)}</span>}
                            </div>
                            <span className="text-[#DC2626]">₹{inv.amount.toLocaleString("en-IN")}</span>
                          </div>
                        ))
                      ) : (
                        <span className="text-sm text-slate-400 font-semibold italic">No invoices extracted.</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Section 5: Jurisdictional Police Station */}
                <div className="border border-slate-100 rounded-2xl overflow-hidden">
                  <div className="bg-slate-50 border-b border-slate-100 px-4 py-2 font-black text-slate-800 uppercase tracking-wider text-[9px]">
                    Jurisdictional Police Station
                  </div>
                  <div className="grid grid-cols-3 px-4 py-3.5 gap-y-2 gap-x-1.5 leading-relaxed">
                    <span className="font-bold text-slate-500">Station Name:</span>
                    <span className="col-span-2 text-slate-950 font-bold">{editPoliceStationName || "Not set"}</span>

                    <span className="font-bold text-slate-500">Station Email:</span>
                    <span className="col-span-2 text-slate-700 font-semibold">{editPoliceStationEmail || "-"}</span>

                    <span className="font-bold text-slate-500">Station Address:</span>
                    <span className="col-span-2 text-slate-700 font-semibold">{editPoliceStationAddress || "-"}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer (Actions) */}
          <div className="p-6 border-t border-slate-100 flex items-center justify-end gap-3 shrink-0">
            {isModalEditMode ? (
              <>
                <button
                  type="button"
                  onClick={() => setIsModalEditMode(false)}
                  className="px-4 py-2 text-slate-700 hover:bg-slate-50 border border-slate-200 rounded-xl transition-all cursor-pointer font-bold text-xs"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSaveModalDetails}
                  className="px-4 py-2 text-white bg-[#DC2626] hover:bg-[#B91C1C] rounded-xl transition-all cursor-pointer font-black text-xs shadow-md"
                >
                  Save Changes
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => setIsModalEditMode(true)}
                  className="px-4 py-2 text-[#DC2626] hover:text-white bg-red-50 hover:bg-[#DC2626] border border-red-200 rounded-xl transition-all cursor-pointer font-black text-xs"
                >
                  Edit Details
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActiveModalIndex(null);
                    setIsModalEditMode(false);
                  }}
                  className="px-4 py-2 text-slate-700 hover:bg-slate-50 border border-slate-200 rounded-xl transition-all cursor-pointer font-bold text-xs"
                >
                  Close
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    )}

      {/* Onboarding Tour Tooltips */}
      {onboardingState === "new_recovery" && (
        <div className="absolute inset-0 z-50 pointer-events-none">
          {onboardingTourStep === 1 ? (
            <div className="fixed sm:absolute top-[280px] left-4 right-4 sm:left-[20px] sm:top-[300px] bg-slate-900 text-white rounded-2xl p-5 shadow-2xl border border-slate-700 max-w-sm flex flex-col gap-3 animate-in slide-in-from-top-4 duration-300 pointer-events-auto">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-black uppercase tracking-wider text-red-400 bg-red-950/50 px-2 py-0.5 rounded select-none">Claim Setup (1/2)</span>
                <button onClick={() => setOnboardingState(null)} className="text-slate-400 hover:text-white text-xs font-bold cursor-pointer">✕</button>
              </div>
              <p className="text-xs font-semibold leading-relaxed">
                Enter the details of the entity or individual you wish to recover money from. Fill in their legal name, outstanding amount, and local police station.
              </p>
              <div className="flex justify-end gap-2 mt-1">
                <button
                  type="button"
                  onClick={() => setOnboardingState(null)}
                  className="px-3 py-1.5 text-[10px] font-bold text-slate-350 hover:text-white cursor-pointer bg-transparent"
                >
                  Skip
                </button>
                <button
                  type="button"
                  onClick={() => setOnboardingTourStep(2)}
                  className="px-3.5 py-1.5 text-[10px] font-black bg-[#DC2626] hover:bg-[#B91C1C] text-white rounded-lg cursor-pointer"
                >
                  Next Hint →
                </button>
              </div>
            </div>
          ) : (
            <div className="fixed sm:absolute top-[200px] right-4 left-4 sm:left-auto sm:right-[20px] sm:top-[280px] bg-slate-900 text-white rounded-2xl p-5 shadow-2xl border border-slate-700 max-w-sm flex flex-col gap-3 animate-in slide-in-from-right-4 duration-300 pointer-events-auto">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-black uppercase tracking-wider text-red-400 bg-red-950/50 px-2 py-0.5 rounded select-none">Live Previews (2/2)</span>
                <button onClick={() => setOnboardingState(null)} className="text-slate-400 hover:text-white text-xs font-bold cursor-pointer">✕</button>
              </div>
              <p className="text-xs font-semibold leading-relaxed">
                Your legal demand notice drafts compile in real time on this letterhead! Use these tabs to toggle between Notice 1, Notice 2, Notice 3, and the Police SHO Complaint.
              </p>
              <div className="flex justify-end gap-2 mt-1">
                <button
                  type="button"
                  onClick={() => {
                    setOnboardingState(null);
                    localStorage.setItem("lr_onboarding_state", "new_recovery_hint_read");
                  }}
                  className="px-4 py-2 text-[10px] font-black bg-[#DC2626] hover:bg-[#B91C1C] text-white rounded-lg cursor-pointer"
                >
                  Got It!
                </button>
              </div>
            </div>
          )}
        </div>
      )}

        </div>
      </div>

      {/* ── Buy Credits Modal ── */}
      <BuyCreditsModal
        isOpen={isBuyCreditsOpen}
        onClose={() => {
          setIsBuyCreditsOpen(false);
          const fetchProfile = async () => {
            try {
              const res = await fetch("/api/users/profile");
              if (res.ok) {
                const data = await res.json();
                if (data.success && data.profile) {
                  setClientProfile(data.profile);
                  setOriginalClientProfile(data.profile);
                }
              }
            } catch {}
          };
          fetchProfile();
        }}
        currentUsed={clientProfile?.usedCases}
        currentTotal={clientProfile?.allowedLimit}
        remainingCredits={clientProfile?.remainingCases}
      />

    </main>
  );
}
