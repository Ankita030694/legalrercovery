"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Building2,
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
  User,
  ArrowLeft,
  ExternalLink,
  Search,
  Shield,
  RefreshCw
} from "lucide-react";

interface Representee {
  id?: string;
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

export default function AuthorityRepresenteesPage() {
  const router = useRouter();
  const [representees, setRepresentees] = useState<Representee[]>([]);
  const [cases, setCases] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

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
    fetchData();
  }, []);

  const openAddModal = () => {
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

  const openEditModal = (rep: Representee) => {
    setEditingId(rep._id || rep.id || null);
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

    if (!formName.trim() || !formEmail.trim() || !formPhone.trim() || !formAddress.trim() || !formState.trim()) {
      setFormError("Please fill in all required fields marked with *.");
      return;
    }

    setIsSaving(true);
    try {
      const payload = {
        name: formName.trim(),
        email: formEmail.trim(),
        phone: formPhone.trim(),
        address: formAddress.trim(),
        state: formState.trim(),
        authRepName: formAuthRepName.trim(),
        authRepPhone: formAuthRepPhone.trim()
      };

      const url = "/api/representees";
      const method = editingId ? "PUT" : "POST";
      const body = editingId ? JSON.stringify({ id: editingId, ...payload }) : JSON.stringify(payload);

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        setFormError(data.error || "Failed to save representation.");
      } else {
        setModalOpen(false);
        fetchData();
      }
    } catch (err: any) {
      setFormError(err.message || "An unexpected error occurred.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!confirmDeleteId) return;
    setIsDeleting(true);
    try {
      const res = await fetch(`/api/representees?id=${confirmDeleteId}`, {
        method: "DELETE"
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        alert(data.error || "Failed to delete representation.");
      } else {
        setConfirmDeleteId(null);
        fetchData();
      }
    } catch (err: any) {
      alert("Error deleting representation.");
    } finally {
      setIsDeleting(false);
    }
  };

  const filteredRepresentees = useMemo(() => {
    if (!searchQuery.trim()) return representees;
    const q = searchQuery.toLowerCase();
    return representees.filter(r =>
      r.name.toLowerCase().includes(q) ||
      (r.authRepName && r.authRepName.toLowerCase().includes(q)) ||
      (r.email && r.email.toLowerCase().includes(q)) ||
      (r.phone && r.phone.includes(q)) ||
      (r.state && r.state.toLowerCase().includes(q))
    );
  }, [representees, searchQuery]);

  return (
    <div className="space-y-8 select-none text-left">
      
      {/* ── BREADCRUMB ── */}
      <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
        <Link href="/authority/ama-cases" className="hover:text-slate-900 flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>AMA Legal Cases</span>
        </Link>
        <span className="text-slate-300">/</span>
        <span className="text-slate-900 font-bold">Client Representations</span>
      </div>

      {/* ── HEADER ── */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 bg-red-50 text-[#DC2626] text-[10px] font-bold rounded-full border border-red-200 uppercase tracking-wider">
              Representation Chambers
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Client Representations
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
            Manage institutional client organizations represented by LegalRecovery advocates.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={openAddModal}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white rounded-xl text-xs sm:text-sm font-bold transition-all shadow-[0_4px_16px_rgba(220,38,38,0.15)] cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Add Representation</span>
          </button>

          <button
            onClick={fetchData}
            className="p-2.5 bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200 rounded-xl transition-colors cursor-pointer"
            title="Refresh"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ── SEARCH BAR ── */}
      <div className="relative max-w-md">
        <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search client organizations..."
          className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#DC2626]/20 focus:border-[#DC2626]"
        />
      </div>

      {/* ── REPRESENTATIONS TABLE ── */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden">
        {isLoading ? (
          <div className="p-16 flex flex-col items-center justify-center gap-3">
            <Loader2 className="w-8 h-8 text-[#DC2626] animate-spin" />
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Loading Representations...
            </span>
          </div>
        ) : filteredRepresentees.length === 0 ? (
          <div className="p-16 text-center">
            <Building2 className="w-10 h-10 text-slate-300 mx-auto mb-2" />
            <h4 className="text-sm font-bold text-slate-800">No client representations found</h4>
            <p className="text-xs text-slate-400 mt-1">Add a new client organization to create scoped folders.</p>
            <button
              onClick={openAddModal}
              className="inline-flex items-center gap-1.5 px-4 py-2 mt-4 bg-[#DC2626] text-white rounded-xl text-xs font-bold hover:bg-[#B91C1C] shadow-[0_4px_16px_rgba(220,38,38,0.15)]"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Client Organization</span>
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#F8F9FA] border-b border-[#E5E7EB] text-[10px] font-extrabold uppercase tracking-wider text-[#6B7280]">
                  <th className="py-3.5 px-5">Organization Name</th>
                  <th className="py-3.5 px-5">Contact Details</th>
                  <th className="py-3.5 px-5">Authorized Rep</th>
                  <th className="py-3.5 px-5">Jurisdiction</th>
                  <th className="py-3.5 px-5">Cases</th>
                  <th className="py-3.5 px-5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                {filteredRepresentees.map((rep) => {
                  const repId = rep._id || rep.id;
                  const repCases = cases.filter(c => String(c.representeeId) === String(repId));

                  return (
                    <tr key={repId} className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-3.5 px-5">
                        <div className="font-bold text-slate-900 text-sm">{rep.name}</div>
                        <div className="text-[11px] text-slate-400 truncate max-w-[240px]">{rep.address}</div>
                      </td>

                      <td className="py-3.5 px-5">
                        <div className="text-slate-800 font-semibold">{rep.phone}</div>
                        <div className="text-slate-400 text-[11px]">{rep.email}</div>
                      </td>

                      <td className="py-3.5 px-5">
                        {rep.authRepName ? (
                          <div>
                            <div className="font-bold text-slate-900">{rep.authRepName}</div>
                            {rep.authRepPhone && (
                              <div className="text-[11px] text-slate-400">{rep.authRepPhone}</div>
                            )}
                          </div>
                        ) : (
                          <span className="text-slate-400 italic">Direct representation</span>
                        )}
                      </td>

                      <td className="py-3.5 px-5">
                        <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-bold">
                          {rep.state}
                        </span>
                      </td>

                      <td className="py-3.5 px-5">
                        <span className="font-bold text-slate-900 text-sm">{repCases.length}</span>
                        <span className="text-slate-400 text-xs ml-1">cases</span>
                      </td>

                      <td className="py-3.5 px-5 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <Link
                            href={`/authority/ama-cases/${repId}/dashboard`}
                            title="Open Scoped Dashboard"
                            className="p-1.5 hover:bg-red-50 text-[#DC2626] rounded-lg transition-colors"
                          >
                            <FolderClosed className="w-4 h-4" />
                          </Link>

                          <button
                            onClick={() => openEditModal(rep)}
                            title="Edit Representation"
                            className="p-1.5 hover:bg-slate-100 text-slate-600 rounded-lg transition-colors cursor-pointer"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>

                          <button
                            onClick={() => setConfirmDeleteId(repId || null)}
                            title="Delete Representation"
                            className="p-1.5 hover:bg-red-50 text-red-600 rounded-lg transition-colors cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* ── ADD / EDIT MODAL ── */}
      {modalOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-slate-200 shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-lg font-black text-slate-900">
                {editingId ? "Edit Client Organization" : "Add Client Organization"}
              </h3>
              <button onClick={() => setModalOpen(false)} className="text-slate-400 hover:text-slate-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            {formError && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs font-semibold">
                {formError}
              </div>
            )}

            <form onSubmit={handleSave} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Organization / Company Name *
                </label>
                <input
                  type="text"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder="e.g. Acme Credit Recovery Pvt Ltd"
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
                    placeholder="legal@acme.com"
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
                  placeholder="Full office or registered corporate address"
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
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-600 mb-1">Representative Phone</label>
                    <input
                      type="text"
                      value={formAuthRepPhone}
                      onChange={(e) => setFormAuthRepPhone(e.target.value)}
                      placeholder="+91 9999988888"
                      className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
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
                  <span>{editingId ? "Save Changes" : "Create Representation"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── DELETE MODAL ── */}
      {confirmDeleteId && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 border border-slate-200 shadow-xl space-y-4">
            <h3 className="text-base font-bold text-slate-900">Delete Client Representation</h3>
            <p className="text-xs text-slate-500">
              Are you sure you want to delete this representation? Existing cases linked to this organization will remain in the database.
            </p>
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setConfirmDeleteId(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                disabled={isDeleting}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                {isDeleting && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                <span>Delete</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
