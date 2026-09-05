"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";

export interface CityDirectoryItem {
  slug: string;
  name: string;
  title: string;
  description?: string;
}

interface CityDirectoryExplorerProps {
  items: CityDirectoryItem[];
  basePath: string;
  searchPlaceholder?: string;
  badgeLabel?: string;
}

// Major metro & tier-1/tier-2 hubs to prioritize at the top
const FEATURED_CITY_SLUGS = [
  "new-delhi",
  "delhi",
  "mumbai",
  "bangalore",
  "hyderabad",
  "chennai",
  "kolkata",
  "pune",
  "ahmedabad",
  "jaipur",
  "surat",
  "lucknow",
  "kanpur",
  "nagpur",
  "indore",
  "thane",
  "bhopal",
  "visakhapatnam",
  "patna",
  "vadodara",
  "ghaziabad",
  "ludhiana",
  "agra",
  "nashik",
  "faridabad",
  "meerut",
  "rajkot",
  "varanasi",
  "srinagar",
  "aurangabad",
  "dhanbad",
  "ranchi",
  "howrah",
  "coimbatore",
  "jabalpur",
  "gwalior",
  "vijayawada",
  "jodhpur",
  "madurai",
  "raipur",
  "kota",
  "chandigarh",
  "guwahati",
  "noida",
  "gurgaon",
];

// Quick filter chips for top metropolitan clusters
const QUICK_FILTERS = [
  { label: "All Cities", value: "all" },
  { label: "Delhi NCR", value: "delhi-ncr", slugs: ["delhi", "new-delhi", "noida", "gurgaon", "ghaziabad", "faridabad"] },
  { label: "Mumbai MMR", value: "mumbai-mmr", slugs: ["mumbai", "mumbai-city", "mumbai-suburban", "thane", "navi-mumbai"] },
  { label: "Bengaluru", value: "bangalore" },
  { label: "Hyderabad", value: "hyderabad" },
  { label: "Pune", value: "pune" },
  { label: "Chennai", value: "chennai" },
  { label: "Kolkata", value: "kolkata" },
  { label: "Jaipur", value: "jaipur" },
  { label: "Ahmedabad", value: "ahmedabad" },
  { label: "Chandigarh", value: "chandigarh" },
  { label: "Lucknow", value: "lucknow" },
];

const INITIAL_PAGE_SIZE = 36;
const LOAD_MORE_STEP = 36;

export default function CityDirectoryExplorer({
  items,
  basePath,
  searchPlaceholder = "Search your city, district or locality (e.g. Pune, Noida, Jaipur)...",
  badgeLabel = "1,500+ Indian Cities Covered",
}: CityDirectoryExplorerProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(INITIAL_PAGE_SIZE);

  // Pre-sort items so that featured major cities appear first, followed by alphabetical order
  const prioritizedItems = useMemo(() => {
    const featuredSet = new Set(FEATURED_CITY_SLUGS);
    const featuredList: CityDirectoryItem[] = [];
    const remainingList: CityDirectoryItem[] = [];

    // First collect featured in explicit priority order
    for (const slug of FEATURED_CITY_SLUGS) {
      const match = items.find((item) => item.slug === slug);
      if (match) {
        featuredList.push(match);
      }
    }

    // Collect the rest
    for (const item of items) {
      if (!featuredSet.has(item.slug)) {
        remainingList.push(item);
      }
    }

    // Sort remaining items alphabetically by name
    remainingList.sort((a, b) => a.name.localeCompare(b.name));

    return [...featuredList, ...remainingList];
  }, [items]);

  // Filter based on search query and quick filter selection
  const filteredItems = useMemo(() => {
    let result = prioritizedItems;

    // Apply quick filter chip
    if (selectedFilter !== "all") {
      const activeFilterObj = QUICK_FILTERS.find((f) => f.value === selectedFilter);
      if (activeFilterObj?.slugs) {
        const slugSet = new Set(activeFilterObj.slugs);
        result = result.filter(
          (item) =>
            slugSet.has(item.slug) ||
            activeFilterObj.slugs.some((s) => item.slug.includes(s) || item.name.toLowerCase().includes(s))
        );
      } else if (activeFilterObj?.value) {
        result = result.filter(
          (item) =>
            item.slug === activeFilterObj.value ||
            item.slug.includes(activeFilterObj.value) ||
            item.name.toLowerCase().includes(activeFilterObj.label.toLowerCase())
        );
      }
    }

    // Apply text search query
    const query = searchQuery.trim().toLowerCase();
    if (query) {
      result = result.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.title.toLowerCase().includes(query) ||
          item.slug.toLowerCase().includes(query)
      );
    }

    return result;
  }, [prioritizedItems, selectedFilter, searchQuery]);

  // Slice for progressive display
  const displayedItems = useMemo(() => {
    // If active search query, show all matches up to 120 so user sees full matching results
    if (searchQuery.trim()) {
      return filteredItems.slice(0, 120);
    }
    return filteredItems.slice(0, visibleCount);
  }, [filteredItems, searchQuery, visibleCount]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + LOAD_MORE_STEP, filteredItems.length));
  };

  const handleShowAll = () => {
    setVisibleCount(filteredItems.length);
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedFilter("all");
    setVisibleCount(INITIAL_PAGE_SIZE);
  };

  return (
    <div className="space-y-8">
      {/* Search & Filter Header Bar */}
      <div className="bg-white rounded-3xl p-5 md:p-8 shadow-sm border border-slate-100 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-[#DC2626] border border-red-100">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]"></span>
              {badgeLabel}
            </span>
            <p className="text-sm text-slate-500 mt-1">
              Find advocate services in your city or district across India
            </p>
          </div>

          {/* Result Count Indicator */}
          <div className="text-xs md:text-sm font-medium text-slate-600 bg-slate-50 px-3.5 py-1.5 rounded-full border border-slate-200/70 self-start md:self-auto">
            {searchQuery ? (
              <span>
                Found <strong className="text-[#DC2626]">{filteredItems.length}</strong> matching location{filteredItems.length === 1 ? "" : "s"}
              </span>
            ) : (
              <span>
                Showing <strong className="text-slate-900">{displayedItems.length}</strong> of <strong className="text-slate-900">{items.length}</strong> cities
              </span>
            )}
          </div>
        </div>

        {/* Live Search Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={searchPlaceholder}
            className="w-full pl-11 pr-10 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 text-sm md:text-base placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#DC2626]/20 focus:border-[#DC2626] transition-all"
            aria-label="Search city or locality"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-700"
              title="Clear search"
              aria-label="Clear search"
            >
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </button>
          )}
        </div>

        {/* Quick Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
          <span className="text-slate-400 font-medium whitespace-nowrap pl-1">Popular:</span>
          {QUICK_FILTERS.map((filter) => {
            const isSelected = selectedFilter === filter.value;
            return (
              <button
                key={filter.value}
                onClick={() => {
                  setSelectedFilter(filter.value);
                  setVisibleCount(INITIAL_PAGE_SIZE);
                }}
                className={`px-3 py-1.5 rounded-full font-medium whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#DC2626] text-white shadow-sm"
                    : "bg-slate-100 text-slate-650 hover:bg-slate-200/80 hover:text-slate-900"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of City Links */}
      {displayedItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedItems.map((loc) => (
            <Link
              key={loc.slug}
              href={`${basePath}/${loc.slug}`}
              className="bg-white/80 backdrop-blur-sm border border-slate-200/70 hover:border-[#DC2626]/40 p-6 rounded-2xl transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] group hover:-translate-y-1 block relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#DC2626] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex items-start justify-between gap-3">
                <span className="text-base md:text-lg font-semibold text-[#111827] group-hover:text-[#DC2626] transition-colors leading-snug block">
                  {loc.title}
                </span>
                <span className="text-slate-300 group-hover:text-[#DC2626] transition-colors pt-0.5 shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
              </div>
              <div className="mt-4 flex items-center text-sm text-[#DC2626] font-medium opacity-100 transition-all duration-300">
                View Details{" "}
                <span className="ml-1 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        /* Empty Search State */
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 max-w-xl mx-auto space-y-4">
          <div className="w-12 h-12 rounded-full bg-red-50 text-[#DC2626] flex items-center justify-center mx-auto">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-slate-900">No matching locations found</h3>
          <p className="text-sm text-slate-500">
            We couldn&apos;t find any city or district matching &quot;{searchQuery}&quot;. Please try checking your spelling or clear the search filters.
          </p>
          <button
            onClick={handleClearFilters}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#DC2626] text-white text-sm font-semibold hover:bg-[#b91c1c] transition-colors cursor-pointer"
          >
            Clear Filters &amp; View All
          </button>
        </div>
      )}

      {/* Progressive Load More Bar (when not searching and more items remain) */}
      {!searchQuery && displayedItems.length < filteredItems.length && (
        <div className="text-center pt-8 pb-4 space-y-4">
          {/* Visual Progress Bar */}
          <div className="max-w-md mx-auto space-y-1.5">
            <div className="flex justify-between text-xs text-slate-500 font-medium">
              <span>Showing {displayedItems.length} locations</span>
              <span>{filteredItems.length} total</span>
            </div>
            <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#DC2626] rounded-full transition-all duration-300"
                style={{ width: `${Math.round((displayedItems.length / filteredItems.length) * 100)}%` }}
              ></div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={handleLoadMore}
              className="w-full sm:w-auto px-6 py-3 bg-[#DC2626] hover:bg-[#b91c1c] text-white font-semibold rounded-xl text-sm transition-all duration-200 shadow-sm hover:shadow cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Load More Cities (+{Math.min(LOAD_MORE_STEP, filteredItems.length - displayedItems.length)})</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <button
              onClick={handleShowAll}
              className="w-full sm:w-auto px-5 py-3 border border-slate-300 hover:border-slate-400 bg-white text-slate-700 hover:text-slate-900 font-medium rounded-xl text-sm transition-all duration-200 cursor-pointer"
            >
              Show All {filteredItems.length} Locations
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
