'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { ALL_SITEMAP_PAGES, SitemapItem } from './sitemapData';
import { ArrowUpRight, Calendar, Search, X, Target } from 'lucide-react';

const CATEGORIES = [
  'All',
  'B2B & Institutional Recovery',
  'Dispute Notices',
  'Services',
  'Recovery Claims',
  'Legal Notices',
  'Guides',
  'Locations',
  'Company',
] as const;

type CategoryType = (typeof CATEGORIES)[number];

export default function SitemapClient() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Sorted in strict reverse-chronological order (newest first, then second last, third last, etc.)
  const sortedPages = useMemo(() => {
    return [...ALL_SITEMAP_PAGES].sort((a, b) => b.timestamp - a.timestamp);
  }, []);

  // Filtered by selectedCategory and search query
  const filteredPages = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return sortedPages.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;

      const matchesSearch =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.href.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [sortedPages, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1E293B] pt-24 pb-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Header Section (styled like willdrafting.in/sitemap reference) */}
        <div className="mb-8 sm:mb-10 text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0F172A] mb-3">
            All LegalRecovery Pages, Notice Portals &amp; State Guides
          </h1>
          <h2 className="sr-only">Directory Index of Recovery Guides and Notices</h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-4xl leading-relaxed">
            Each card links straight to a statutory legal notice, debt recovery portal, city directory, or guide. Click any card to open the page.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col gap-4 mb-8">
          {/* Quick Search Input */}
          <div className="relative max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, brand, city or slug..."
              className="w-full pl-10 pr-9 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#DC2626] focus:border-transparent transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-0.5"
                title="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Filter Pills and Right Counter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
            {/* Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                      isActive
                        ? 'bg-[#0F172A] text-white shadow-xs'
                        : 'bg-white text-gray-700 hover:bg-gray-100/80 border border-gray-200/90'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Showing Count Indicator */}
            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-gray-500 shrink-0">
              <Target className="w-4 h-4 text-rose-500" />
              <span>
                Showing <strong className="text-gray-900 font-bold">{filteredPages.length}</strong> of{' '}
                <strong className="text-gray-900 font-bold">{sortedPages.length}</strong> pages
              </span>
            </div>
          </div>
        </div>

        {/* Unified 4-Column Card Grid (No separated sections, all cards directly in one grid starting with newest) */}
        {filteredPages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {filteredPages.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group bg-white rounded-2xl border border-gray-200/90 hover:border-[#DC2626] p-5 sm:p-6 flex flex-col justify-between hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                {/* Top Row: Category pill on left, diagonal arrow on right */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200/70">
                      {item.category}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#DC2626] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                  </div>

                  {/* Middle: Page Title */}
                  <p className="font-bold text-gray-900 group-hover:text-[#DC2626] transition-colors text-[14.5px] sm:text-[15px] leading-snug my-3 line-clamp-3">
                    {item.title}
                  </p>
                </div>

                {/* Bottom Row: Read Page on left, Date on right */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-xs text-gray-400 mt-2">
                  <span className="font-medium group-hover:text-gray-600 transition-colors">
                    Read Page
                  </span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-gray-400" />
                    {item.date}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-200 p-8">
            <p className="text-base font-semibold text-gray-700 mb-2">
              No pages match your current filter or search query.
            </p>
            <p className="text-xs sm:text-sm text-gray-500 mb-4">
              Try searching for something else or reset the category filter.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-[#0F172A] text-white rounded-full text-xs sm:text-sm font-semibold hover:bg-gray-800 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
