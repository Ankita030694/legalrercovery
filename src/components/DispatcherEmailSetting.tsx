"use client";

import React, { useEffect, useState } from "react";
import { CheckCircle2, Loader2, Mail, Pencil } from "lucide-react";

interface DispatcherEmailSettingProps {
  onChange?: (email: string) => void;
}

export const DispatcherEmailSetting: React.FC<DispatcherEmailSettingProps> = ({ onChange }) => {
  const [savedEmail, setSavedEmail] = useState("");
  const [draftEmail, setDraftEmail] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");
  const [justSaved, setJustSaved] = useState(false);

  useEffect(() => {
    let active = true;
    fetch(`/api/notice-dispatch/settings?_t=${Date.now()}`)
      .then(res => res.json())
      .then(data => {
        if (!active) return;
        if (data.success) {
          setSavedEmail(data.dispatcherEmail);
          onChange?.(data.dispatcherEmail);
        } else {
          setError(data.error || "Could not load the dispatcher email.");
        }
      })
      .catch(() => active && setError("Could not load the dispatcher email."));
    return () => {
      active = false;
    };
    // Load once on mount; onChange is an inline state setter from the parent
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    setError("");
    setJustSaved(false);
    try {
      const res = await fetch("/api/notice-dispatch/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dispatcherEmail: draftEmail }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        setError(data.error || "Could not save the dispatcher email.");
        return;
      }
      setSavedEmail(data.dispatcherEmail);
      onChange?.(data.dispatcherEmail);
      setIsEditing(false);
      setJustSaved(true);
    } catch {
      setError("Could not save the dispatcher email.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-1.5 text-xs font-black text-slate-900">
            <Mail className="w-3.5 h-3.5 text-[#DC2626]" /> Dispatcher Email
          </div>
          <p className="text-[11px] text-slate-500 font-medium mt-0.5">
            Each notice is emailed here with a PDF download link as soon as it is sent to the party.
          </p>
        </div>

        {isEditing ? (
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 shrink-0">
            <label htmlFor="dispatcher-email-setting" className="sr-only">Dispatcher email</label>
            <input
              id="dispatcher-email-setting"
              type="email"
              value={draftEmail}
              onChange={e => setDraftEmail(e.target.value)}
              className="w-full sm:w-64 px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:border-[#DC2626]"
            />
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleSave}
                disabled={isSaving}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-black text-white bg-[#DC2626] hover:bg-[#B91C1C] rounded-xl cursor-pointer disabled:opacity-50"
              >
                {isSaving && <Loader2 className="w-3.5 h-3.5 animate-spin" />} Save
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsEditing(false);
                  setError("");
                }}
                className="px-3 py-2 text-xs font-bold text-slate-600 hover:bg-slate-200 rounded-xl cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2.5 shrink-0">
            {justSaved && <CheckCircle2 className="w-4 h-4 text-emerald-600" aria-label="Saved" />}
            <span className="text-xs sm:text-sm font-extrabold text-slate-900 break-all">{savedEmail || "Loading..."}</span>
            <button
              type="button"
              onClick={() => {
                setDraftEmail(savedEmail);
                setJustSaved(false);
                setIsEditing(true);
              }}
              disabled={!savedEmail}
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 rounded-lg cursor-pointer disabled:opacity-50"
            >
              <Pencil className="w-3 h-3" /> Change
            </button>
          </div>
        )}
      </div>
      {error && <p className="text-[11px] text-[#DC2626] font-semibold mt-2">{error}</p>}
    </div>
  );
};
