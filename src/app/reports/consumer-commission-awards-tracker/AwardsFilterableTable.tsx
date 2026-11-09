"use client";

import React, { useState, useMemo } from "react";
import type { ConsumerAwardEntry } from "@/data/reports/consumerAwardsLoader";

interface AwardsFilterableTableProps {
  initialAwards: ConsumerAwardEntry[];
}

export default function AwardsFilterableTable({ initialAwards }: AwardsFilterableTableProps) {
  const [selectedSector, setSelectedSector] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<"recent" | "highest">("recent");

  const sectors = useMemo(() => {
    const set = new Set<string>();
    initialAwards.forEach((a) => set.add(a.sector));
    return ["ALL", ...Array.from(set)];
  }, [initialAwards]);

  const filteredAwards = useMemo(() => {
    return initialAwards
      .filter((award) => {
        if (selectedSector !== "ALL" && award.sector !== selectedSector) {
          return false;
        }
        if (searchQuery.trim() !== "") {
          const q = searchQuery.toLowerCase();
          const matchCompany = award.company.toLowerCase().includes(q);
          const matchForum = award.forum.toLowerCase().includes(q);
          const matchDispute = award.disputeSubject.toLowerCase().includes(q);
          const matchCase = award.caseNumber.toLowerCase().includes(q);
          if (!matchCompany && !matchForum && !matchDispute && !matchCase) {
            return false;
          }
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === "highest") {
          return b.totalRelief - a.totalRelief;
        }
        return new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime();
      });
  }, [initialAwards, selectedSector, searchQuery, sortBy]);

  return (
    <div className="space-y-4">
      {/* Controls Bar */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3 sm:space-y-4">
        <div className="flex flex-col md:flex-row gap-3 md:items-center justify-between">
          {/* Search Input */}
          <div className="relative flex-1">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by company (e.g. Amazon, IndiGo, SBI), forum, or dispute..."
              className="w-full pl-9 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all text-slate-800 placeholder:text-slate-400"
            />
            <svg
              className="w-4 h-4 text-slate-400 absolute left-3 top-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Sort By Toggle */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-bold text-slate-500">Sort by:</span>
            <div className="inline-flex rounded-xl bg-slate-100 p-0.5 border border-slate-200 text-xs">
              <button
                type="button"
                onClick={() => setSortBy("recent")}
                className={`px-3 py-1.5 rounded-lg font-bold transition-colors ${
                  sortBy === "recent"
                    ? "bg-white text-slate-900 shadow-2xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Most Recent
              </button>
              <button
                type="button"
                onClick={() => setSortBy("highest")}
                className={`px-3 py-1.5 rounded-lg font-bold transition-colors ${
                  sortBy === "highest"
                    ? "bg-white text-slate-900 shadow-2xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Highest Award (₹)
              </button>
            </div>
          </div>
        </div>

        {/* Sector Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-1 border-t border-slate-100">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1">
            Sector:
          </span>
          {sectors.map((sector) => (
            <button
              key={sector}
              type="button"
              onClick={() => setSelectedSector(sector)}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                selectedSector === sector
                  ? "bg-[#DC2626] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {sector === "ALL" ? "All Sectors" : sector}
            </button>
          ))}
          <span className="ml-auto text-xs font-medium text-slate-500">
            Showing <strong className="text-slate-900">{filteredAwards.length}</strong> orders
          </span>
        </div>
      </div>

      {/* Filterable Table */}
      <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm text-slate-700 min-w-[760px]">
            <caption className="sr-only">
              Monthly Database of Consumer Commission Awards, Refunds & Compensation
            </caption>
            <thead className="bg-slate-50 text-slate-900 font-extrabold text-[11px] uppercase tracking-wider border-b border-slate-200">
              <tr>
                <th scope="col" className="py-3.5 px-4">Month / Case</th>
                <th scope="col" className="py-3.5 px-4">Opposite Party &amp; Forum</th>
                <th scope="col" className="py-3.5 px-4">Subject Matter of Dispute</th>
                <th scope="col" className="py-3.5 px-4 text-right">Refund + Damages</th>
                <th scope="col" className="py-3.5 px-4">Key Judicial Holding</th>
                <th scope="col" className="py-3.5 px-4 text-center">Order Record</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {initialAwards.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-12 px-6 text-center">
                    <div className="max-w-md mx-auto space-y-3">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
                        <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                        <span>Dataset Ingestion in Progress (Post-May 25, 2026 Cohort)</span>
                      </div>
                      <p className="text-sm font-bold text-slate-800">
                        Consumer Court Awards Registry Awaiting Real Dataset Publication
                      </p>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Our legal research team is actively compiling verified orders from e-Jagriti and CONFONET databases for the period following our platform launch on May 25, 2026. In strict accordance with institutional verification standards, zero simulated dockets or synthetic awards are published.
                      </p>
                      <div className="pt-2 text-xs text-slate-400">
                        Advocates and litigants with certified orders may submit dockets to research@legalrecovery.in
                      </div>
                    </div>
                  </td>
                </tr>
              ) : filteredAwards.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-slate-500">
                    <p className="text-sm font-semibold">No consumer court awards found matching your filter.</p>
                    <p className="text-xs text-slate-400 mt-1">Try clearing your search query or selecting &quot;All Sectors&quot;.</p>
                  </td>
                </tr>
              ) : (
                filteredAwards.map((award) => (
                  <tr key={award.id} className="hover:bg-slate-50/70 transition-colors">
                    {/* Month & Case */}
                    <td className="py-4 px-4 align-top">
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-slate-100 text-slate-800 mb-1">
                        {award.month}
                      </span>
                      <p className="font-mono text-[11px] font-bold text-slate-900">
                        {award.caseNumber}
                      </p>
                      <p className="text-[10px] text-slate-400 mt-0.5">
                        Dated: {award.orderDate}
                      </p>
                    </td>

                    {/* Company & Forum */}
                    <td className="py-4 px-4 align-top">
                      <p className="font-bold text-slate-900 text-xs sm:text-sm">
                        {award.company}
                      </p>
                      <span className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full bg-red-50 text-[#DC2626] mt-1">
                        {award.sector}
                      </span>
                      <p className="text-[11px] text-slate-500 mt-1">
                        {award.forum}
                      </p>
                    </td>

                    {/* Dispute Subject */}
                    <td className="py-4 px-4 align-top text-xs max-w-xs">
                      <p className="font-medium text-slate-800 leading-snug">
                        {award.disputeSubject}
                      </p>
                      <p className="text-[10px] text-slate-400 mt-1">
                        Original Claim: ₹{award.claimedAmount.toLocaleString("en-IN")}
                      </p>
                    </td>

                    {/* Relief Breakdown */}
                    <td className="py-4 px-4 align-top text-right shrink-0">
                      <p className="text-sm sm:text-base font-black text-emerald-700">
                        ₹{award.totalRelief.toLocaleString("en-IN")}
                      </p>
                      <div className="text-[10px] text-slate-500 space-y-0.5 mt-0.5">
                        <p>Refund: ₹{award.refundOrdered.toLocaleString("en-IN")}</p>
                        <p>Damages: ₹{award.compensationAwarded.toLocaleString("en-IN")}</p>
                        <p className="text-amber-700 font-semibold">{award.interestRate}</p>
                      </div>
                    </td>

                    {/* Judicial Holding */}
                    <td className="py-4 px-4 align-top text-xs leading-relaxed max-w-sm">
                      <p className="text-slate-700 italic">
                        &quot;{award.keyHolding}&quot;
                      </p>
                    </td>

                    {/* Link */}
                    <td className="py-4 px-4 align-top text-center shrink-0">
                      <a
                        href={award.orderUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-2.5 py-1.5 rounded-lg text-[11px] font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 transition-colors"
                      >
                        Verify Portal ↗
                      </a>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="p-3 bg-slate-50 border-t border-slate-200 text-center text-xs text-slate-500">
          Official citations verified against e-Jagriti &amp; State Commission records • Updated on a rolling monthly cycle.
        </div>
      </div>
    </div>
  );
}
