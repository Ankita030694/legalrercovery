"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import {
  Briefcase,
  Plus,
  Mail,
  Phone,
  MapPin,
  Loader2,
  Trash2,
  Edit2,
  X,
  AlertTriangle,
  FolderClosed,
  ChevronRight,
  Check,
  User
} from "lucide-react";

interface Representee {
  id: string;
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  state: string;
  authRepName?: string;
  authRepPhone?: string;
  createdAt: string;
}

export default function RepresenteesPage() {
  const router = useRouter();
  const [representees, setRepresentees] = useState<Representee[]>([]);
  const [cases, setCases] = useState<any[]>([]);
  const [isAuthorizing, setIsAuthorizing] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  // Form states for Add / Edit modal
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formAddress, setFormAddress] = useState("");
  const [formState, setFormState] = useState("");
  const [formAuthRepName, setFormAuthRepName] = useState("");
  const [formAuthRepPhone, setFormAuthRepPhone] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  // Delete confirmation state
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Indian States & UTs for selector
  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
    "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", 
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", 
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", 
    "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", 
    "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", 
    "Dadra and Nagar Haveli and Daman and Diu", "Jammu and Kashmir", "Ladakh", 
    "Lakshadweep", "Puducherry"
  ].sort();

  // 1. Authorize user and redirect if they are not an advocate
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/users/profile");
        if (!response.ok) {
          router.push("/login");
          return;
        }
        const data = await response.json();
        if (data.success && data.profile && data.profile.hasUnlimitedCases === true) {
          setIsAuthorizing(false);
        } else {
          router.push("/user/dashboard");
        }
      } catch (err) {
        console.error("Auth check failed:", err);
        router.push("/user/dashboard");
      }
    };
    checkAuth();
  }, [router]);

  // 2. Fetch representees and cases
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const [repRes, casesRes] = await Promise.all([
        fetch("/api/representees"),
        fetch("/api/cases")
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
      console.error("Failed to load representation data:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!isAuthorizing) {
      fetchData();
    }
  }, [isAuthorizing]);

  // Compute stats per representee in memory
  const representeeStats = useMemo(() => {
    const stats: Record<string, { total: number; active: number; recovered: number }> = {};
    
    // Initialize stats
    representees.forEach(r => {
      stats[r.id] = { total: 0, active: 0, recovered: 0 };
    });

    // Count cases
    cases.forEach(c => {
      if (c.representeeId) {
        const repId = c.representeeId.toString();
        if (stats[repId]) {
          stats[repId].total += 1;
          if (c.status === "active") {
            stats[repId].active += 1;
          } else if (c.status === "recovered") {
            stats[repId].recovered += 1;
          }
        }
      }
    });

    return stats;
  }, [representees, cases]);

  // Modal Handlers
  const handleOpenAdd = () => {
    setEditingId(null);
    setFormName("");
    setFormEmail("");
    setFormPhone("");
    setFormAddress("");
    setFormState("");
    setFormAuthRepName("");
    setFormAuthRepPhone("");
    setFormError(null);
    setModalOpen(true);
  };

  const handleOpenEdit = (rep: Representee) => {
    setEditingId(rep.id);
    setFormName(rep.name);
    setFormEmail(rep.email);
    setFormPhone(rep.phone);
    setFormAddress(rep.address);
    setFormState(rep.state);
    setFormAuthRepName(rep.authRepName || "");
    setFormAuthRepPhone(rep.authRepPhone || "");
    setFormError(null);
    setModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    // Validation checks
    if (!formName.trim()) return setFormError("Organization name is required.");
    if (!formEmail.trim()) return setFormError("Email address is required.");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formEmail.trim())) return setFormError("Please enter a valid email address.");
    if (formPhone.trim().replace(/\D/g, "").length !== 10) return setFormError("Please enter a valid 10-digit mobile number.");
    if (!formAddress.trim()) return setFormError("Physical address is required.");
    if (!formState) return setFormError("State/UT region is required.");

    setIsSaving(true);

    try {
      const payload = {
        id: editingId,
        name: formName,
        email: formEmail,
        phone: formPhone,
        address: formAddress,
        state: formState,
        authRepName: formAuthRepName,
        authRepPhone: formAuthRepPhone
      };

      const response = await fetch("/api/representees", {
        method: editingId ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const resData = await response.json();
      if (!response.ok) {
        throw new Error(resData.error || "Failed to save representation.");
      }

      await fetchData();
      setModalOpen(false);
    } catch (err: any) {
      setFormError(err.message || "Something went wrong.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!confirmDeleteId) return;
    setIsDeleting(true);

    try {
      const response = await fetch(`/api/representees?id=${confirmDeleteId}`, {
        method: "DELETE"
      });

      if (!response.ok) {
        const resData = await response.json();
        throw new Error(resData.error || "Failed to delete representation.");
      }

      await fetchData();
      setConfirmDeleteId(null);
    } catch (err: any) {
      alert(err.message || "Something went wrong.");
    } finally {
      setIsDeleting(false);
    }
  };

  if (isAuthorizing) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-3">
        <Loader2 className="w-10 h-10 animate-spin text-[#DC2626]" />
        <p className="text-sm font-semibold text-slate-500">Checking credentials...</p>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col gap-8 animate-in fade-in duration-300">
      
      {/* ── Header Area ── */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E5E7EB]/50 pb-6">
        <div className="text-left">
          <h1 className="text-2xl sm:text-3xl font-black text-[#111827] tracking-tight">Represented Clients</h1>
          <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-1">
            Manage organizations and companies you represent to map bulk claims and notices to their profiles.
          </p>
        </div>

        <div>
          <button
            onClick={handleOpenAdd}
            className="w-full md:w-auto px-5 py-3 text-sm font-black text-white bg-[#DC2626] hover:bg-[#B91C1C] rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer focus:outline-none transition-all duration-200 hover:-translate-y-0.5"
          >
            <Plus className="w-4 h-4" />
            Add Representation
          </button>
        </div>
      </div>

      {/* ── Loader for fetching data ── */}
      {isLoading ? (
        <div className="flex flex-col items-center justify-center min-h-[300px] gap-3">
          <Loader2 className="w-8 h-8 animate-spin text-[#DC2626]" />
          <p className="text-xs font-semibold text-slate-400">Loading representations...</p>
        </div>
      ) : representees.length === 0 ? (
        /* ── Empty State ── */
        <div className="bg-white border border-dashed border-[#E5E7EB] rounded-3xl p-12 text-center flex flex-col items-center">
          <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center mb-4">
            <Briefcase className="w-6 h-6 text-slate-350" />
          </div>
          <h3 className="text-sm font-black text-slate-700">No Represented Organizations Yet</h3>
          <p className="text-xs text-slate-400 font-semibold max-w-sm mt-1.5 mb-6">
            Add representees to automatically populate their business info in notice documents and track their claims separately.
          </p>
          <button
            onClick={handleOpenAdd}
            className="px-5 py-3 text-xs font-black text-white bg-[#DC2626] hover:bg-[#B91C1C] rounded-xl transition-all cursor-pointer shadow-sm"
          >
            Add Your First Representation
          </button>
        </div>
      ) : (
        /* ── Representees Grid ── */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {representees.map((rep) => {
            const stat = representeeStats[rep.id] || { total: 0, active: 0, recovered: 0 };
            return (
              <div
                key={rep.id}
                className="bg-white border border-[#E5E7EB]/70 rounded-3xl p-6 flex flex-col justify-between gap-5 relative transition-all duration-300 hover:shadow-md hover:shadow-slate-200/40 text-left"
              >
                {/* Upper Section */}
                <div className="flex flex-col gap-3.5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center shrink-0">
                        <Briefcase className="w-4.5 h-4.5" />
                      </div>
                      <h3 className="text-base font-black text-[#111827] tracking-tight leading-tight line-clamp-1">
                        {rep.name}
                      </h3>
                    </div>
                    
                    {/* Cases counter badge */}
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                      {stat.total} {stat.total === 1 ? "Case" : "Cases"}
                    </span>
                  </div>

                  {/* Contact Details List */}
                  <div className="flex flex-col gap-2 border-t border-[#E5E7EB]/50 pt-3 text-xs font-semibold text-slate-500">
                    {rep.authRepName && (
                      <div className="flex items-center gap-2 text-slate-600">
                        <User className="w-3.5 h-3.5 text-[#DC2626] shrink-0" />
                        <span className="truncate">{rep.authRepName} {rep.authRepPhone ? `(+91-${rep.authRepPhone})` : ''}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{rep.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>+91-{rep.phone}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-2 leading-snug">{rep.address} ({rep.state})</span>
                    </div>
                  </div>
                </div>

                {/* Lower Metrics & Actions Footer */}
                <div className="flex items-center justify-between border-t border-[#E5E7EB]/50 pt-4 mt-1 bg-slate-50/20 -mx-6 -mb-6 px-6 pb-6 rounded-b-3xl">
                  {/* Miniature dashboard counts */}
                  <div className="flex gap-3 text-[10px] font-extrabold uppercase">
                    <div className="flex flex-col">
                      <span className="text-slate-400">Active</span>
                      <span className="text-orange-600 text-xs mt-0.5">{stat.active}</span>
                    </div>
                    <div className="w-px h-6 bg-slate-200 self-center" />
                    <div className="flex flex-col">
                      <span className="text-slate-400">Settled</span>
                      <span className="text-green-600 text-xs mt-0.5">{stat.recovered}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleOpenEdit(rep)}
                      className="p-2 text-slate-650 bg-white hover:bg-slate-100 hover:text-slate-800 border border-slate-200 rounded-xl transition-all cursor-pointer"
                      title="Edit Representation"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => setConfirmDeleteId(rep.id)}
                      className="p-2 text-red-650 bg-red-50 hover:bg-red-100 hover:text-red-700 border border-red-200 rounded-xl transition-all cursor-pointer"
                      title="Delete Representation"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      )}

      {/* ── ADD / EDIT MODAL ── */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in-0 duration-200">
          <div className="bg-white rounded-3xl w-full max-w-[500px] shadow-2xl relative overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col p-6 sm:p-8 select-none text-left">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-[#E5E7EB]/50 pb-4 mb-5">
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[#DC2626]" />
                <h3 className="text-lg font-black text-[#111827] tracking-tight">
                  {editingId ? "Edit Representation" : "Add Representation"}
                </h3>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="p-1.5 text-slate-450 hover:text-slate-700 hover:bg-slate-100 rounded-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSave} className="space-y-4 flex-1">
              
              {formError && (
                <div className="bg-red-50 border border-red-200 text-red-700 text-xs font-semibold p-3.5 rounded-xl flex items-center gap-2 leading-relaxed">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              {/* Name */}
              <div className="flex flex-col">
                <label className="text-xs font-bold text-slate-600 mb-1.5">
                  Organization / Company Legal Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Acme Corporation Pvt Ltd"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  className="bg-slate-50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-xl px-4 py-3 text-sm font-semibold outline-none focus:ring-1 focus:ring-[#DC2626]"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-xs font-bold text-slate-600 mb-1.5">
                    Authorized Representative Name (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Mr. Raman Jhakal"
                    value={formAuthRepName}
                    onChange={(e) => setFormAuthRepName(e.target.value)}
                    className="bg-slate-50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-xl px-4 py-3 text-sm font-semibold outline-none focus:ring-1 focus:ring-[#DC2626]"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs font-bold text-slate-600 mb-1.5">
                    Authorized Representative Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    maxLength={10}
                    placeholder="e.g. 9896197115"
                    value={formAuthRepPhone}
                    onChange={(e) => setFormAuthRepPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                    className="bg-slate-50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-xl px-4 py-3 text-sm font-semibold outline-none focus:ring-1 focus:ring-[#DC2626]"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs font-bold text-slate-600 mb-1.5">
                    Contact Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. recoveries@acme.com"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    className="bg-slate-50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-xl px-4 py-3 text-sm font-semibold outline-none focus:ring-1 focus:ring-[#DC2626]"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs font-bold text-slate-600 mb-1.5">
                    Contact Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    placeholder="e.g. 9876543210"
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                    className="bg-slate-50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-xl px-4 py-3 text-sm font-semibold outline-none focus:ring-1 focus:ring-[#DC2626]"
                  />
                </div>
              </div>

              {/* State Selection */}
              <div className="flex flex-col">
                <label className="text-xs font-bold text-slate-600 mb-1.5">
                  State / Union Territory <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={formState}
                  onChange={(e) => setFormState(e.target.value)}
                  className="w-full bg-slate-50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-xl px-4 py-3 text-sm font-semibold outline-none cursor-pointer focus:ring-1 focus:ring-[#DC2626]"
                >
                  <option value="">Select State / UT</option>
                  {indianStates.map((state) => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>

              {/* Address */}
              <div className="flex flex-col">
                <label className="text-xs font-bold text-slate-600 mb-1.5">
                  Registered Physical Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="e.g. 4th Floor, Tower B, Global Business Park, Gurugram"
                  value={formAddress}
                  onChange={(e) => setFormAddress(e.target.value)}
                  className="bg-slate-50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-xl px-4 py-3 text-sm font-semibold outline-none resize-none focus:ring-1 focus:ring-[#DC2626]"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  disabled={isSaving}
                  className="w-full py-3.5 text-xs font-black text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer focus:outline-none"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSaving}
                  className="w-full py-3.5 text-xs font-black text-white bg-[#DC2626] hover:bg-[#B91C1C] rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer focus:outline-none shadow-sm shadow-red-900/10"
                >
                  {isSaving ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    "Save Representation"
                  )}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* ── DELETE CONFIRMATION MODAL ── */}
      {confirmDeleteId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in-0 duration-200">
          <div className="bg-white rounded-3xl w-full max-w-[400px] shadow-2xl relative overflow-hidden animate-in zoom-in-95 duration-200 p-6 text-center select-none text-left">
            <div className="mx-auto w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-[#DC2626] mb-4 border border-red-100">
              <AlertTriangle className="w-5 h-5" />
            </div>
            
            <h3 className="text-lg font-black text-[#111827] tracking-tight mb-2 text-center">
              Delete Representation?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed mb-6 text-center">
              Are you sure you want to remove this organization representation? Outstanding notices for existing claims linked to this representation will not be affected, but you will not be able to assign new claims to it.
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => setConfirmDeleteId(null)}
                disabled={isDeleting}
                className="w-full py-3 text-xs font-black text-slate-650 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer focus:outline-none"
              >
                Go Back
              </button>

              <button
                onClick={handleDelete}
                disabled={isDeleting}
                className="w-full py-3 text-xs font-black text-white bg-red-600 hover:bg-red-700 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer focus:outline-none"
              >
                {isDeleting ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    Deleting...
                  </>
                ) : (
                  "Confirm Delete"
                )}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
