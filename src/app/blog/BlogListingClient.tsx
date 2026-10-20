"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, ArrowRight, BookOpen, Calendar, Clock, X } from "lucide-react";

export interface BlogPost {
  id: string;
  category: string;
  title: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  slug: string;
  author: string;
}

const categories = [
  "All",
  "Money Recovery",
  "Consumer Rights",
  "Employment",
  "Property",
  "Business",
  "Travel",
  "Legal Tips"
];

export default function BlogListingClient({ initialBlogs }: { initialBlogs: BlogPost[] }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(24);

  const filteredBlogs = initialBlogs.filter((blog) => {
    const matchesCategory =
      selectedCategory === "All" ||
      blog.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setVisibleCount(24);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 24, filteredBlogs.length));
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB] text-[#111827] font-sans antialiased overflow-x-hidden pt-20 lg:pt-28 pb-16">
      {/* HEADER SECTION (Stay Informed. Know Your Rights) */}
      <section className="bg-white border-b border-gray-100 py-10 sm:py-14 mb-8 sm:mb-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            {/* Left Content */}
            <div className="max-w-[720px]">
              <span className="text-[11px] sm:text-xs font-black text-[#DC2626] uppercase tracking-[0.15em] mb-2 sm:mb-3 block">
                OUR BLOGS
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight text-[#111827] leading-[1.15] mb-3 sm:mb-4">
                Stay Informed. <span className="text-[#DC2626]">Know Your Rights.</span>
              </h1>
              <p className="text-[13px] sm:text-[14.5px] text-[#4B5563] leading-relaxed">
                Legal tips, success stories, updates and useful information to help you protect your rights and take the right action.
              </p>
            </div>

            {/* Right Search Bar */}
            <div className="relative w-full max-w-sm lg:w-[320px] flex-shrink-0">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(24);
                }}
                className="w-full py-3.5 pl-5 pr-12 bg-[#F8F9FB] border border-gray-200/80 rounded-2xl shadow-sm text-[13px] font-semibold text-[#111827] placeholder-gray-400 focus:outline-none focus:border-[#DC2626] focus:ring-1 focus:ring-[#DC2626] focus:bg-white transition-all"
              />
              {searchQuery ? (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              ) : (
                <Search className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT AREA */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Category Tabs Row */}
        <div className="relative mb-8 sm:mb-12">
          <div className="flex items-center gap-2.5 overflow-x-auto pb-3 scrollbar-none flex-nowrap -mx-5 px-5 sm:mx-0 sm:px-0">
            {categories.map((cat) => {
              const isActive = selectedCategory.toLowerCase() === cat.toLowerCase();
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`flex-shrink-0 px-5 sm:px-6 py-2.5 text-xs sm:text-[13px] font-bold rounded-2xl border transition-all duration-200 cursor-pointer
                    ${
                      isActive
                        ? "bg-[#DC2626] border-[#DC2626] text-white shadow-[0_4px_16px_rgba(220,38,38,0.25)] hover:bg-[#B91C1C]"
                        : "bg-white border-gray-200/80 text-[#4B5563] hover:text-[#DC2626] hover:border-[#DC2626]/40 hover:shadow-sm"
                    }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Blog Cards Grid */}
        {filteredBlogs.length > 0 ? (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
              {filteredBlogs.slice(0, visibleCount).map((blog) => (
                <Link key={blog.id} href={`/blog/${blog.slug}`} className="group block h-full">
                  <article className="bg-white rounded-3xl border border-gray-100/80 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)] hover:border-gray-200/50 overflow-hidden transition-all duration-300 flex flex-col h-full hover:-translate-y-0.5">
                    <div className="relative w-full h-[180px] sm:h-[200px] overflow-hidden bg-gray-100">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-[1.04] transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    </div>

                    <div className="p-5 sm:p-6 flex flex-col flex-1">
                      <span className="text-[10px] font-black text-[#DC2626] uppercase tracking-[0.12em] mb-2 sm:mb-2.5 block">
                        {blog.category}
                      </span>

                      <h3 className="text-[13.5px] sm:text-base font-extrabold text-[#111827] leading-[1.35] mb-3 group-hover:text-[#DC2626] transition-colors line-clamp-2">
                        {blog.title}
                      </h3>

                      <p className="text-[11.5px] sm:text-[12px] text-[#6B7280] leading-relaxed mb-4 line-clamp-2">
                        {blog.excerpt}
                      </p>

                      <div className="flex items-center gap-2 mt-auto pt-4 border-t border-gray-100/80 text-[10.5px] sm:text-[11px] text-gray-400 font-bold">
                        <Calendar className="w-3.5 h-3.5 text-gray-400/80" />
                        <span>{blog.date}</span>
                        <span className="text-gray-300/80 font-normal">•</span>
                        <Clock className="w-3.5 h-3.5 text-gray-400/80" />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            {visibleCount < filteredBlogs.length && (
              <div className="flex justify-center mt-12 sm:mt-16">
                <button
                  onClick={handleLoadMore}
                  className="flex items-center justify-center gap-2 px-7 py-3.5 bg-[#DC2626] text-white text-xs sm:text-[13px] font-bold rounded-2xl shadow-[0_6px_20px_rgba(220,38,38,0.25)] hover:bg-[#B91C1C] hover:shadow-[0_8px_24px_rgba(220,38,38,0.35)] transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                >
                  Load More Articles ({filteredBlogs.length - visibleCount} more)
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.02)] p-10 sm:p-16 text-center max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-red-50 text-[#DC2626] flex items-center justify-center mx-auto mb-5 sm:mb-6">
              <BookOpen className="w-8 h-8" />
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-[#111827] mb-2 sm:mb-3">
              No Articles Found
            </h3>
            <p className="text-[12.5px] sm:text-[13.5px] text-[#6B7280] leading-relaxed mb-6">
              We couldn&apos;t find any articles matching &quot;{searchQuery}&quot; in the &quot;{selectedCategory}&quot; category.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="px-6 py-2.5 bg-[#111827] text-white text-xs sm:text-[13px] font-bold rounded-xl hover:bg-[#DC2626] transition-all duration-200 cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Complete Server-Rendered Archive Directory so Search Engines Crawl Every Single Article Link */}
        {initialBlogs.length > 0 && (
          <section className="mt-16 bg-white border border-gray-100/80 rounded-3xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.015)] text-left">
            <h2 className="text-lg sm:text-xl font-black text-[#111827] mb-4">
              Complete Legal Recovery Article Directory ({initialBlogs.length} Guides)
            </h2>
            <p className="text-xs sm:text-[13px] text-[#6B7280] mb-6 font-medium">
              Browse all published legal recovery guides, statutory notice procedures, and consumer dispute articles across India:
            </p>
            <nav aria-label="Complete Legal Articles Archive" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2.5">
              {initialBlogs.map((blog) => (
                <Link
                  key={`archive-${blog.id}`}
                  href={`/blog/${blog.slug}`}
                  className="text-xs font-semibold text-[#374151] hover:text-[#DC2626] transition-colors truncate py-1 border-b border-gray-50"
                  title={blog.title}
                >
                  • {blog.title}
                </Link>
              ))}
            </nav>
          </section>
        )}

        {/* Information-Rich SEO Content Section */}
        <section className="mt-12 bg-white border border-gray-100/80 rounded-3xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.015)] text-left select-text">
          <h2 className="text-xl sm:text-2xl font-black text-[#111827] mb-6">
            Understanding Money Recovery & Legal Protection in India
          </h2>

          <p className="text-[13px] sm:text-[14px] text-[#4B5563] leading-relaxed mb-6 font-medium">
            Welcome to the Legal Recovery Blog, your comprehensive resource for navigating consumer claims, employment dues, and debt recovery in India. Our mission is to democratize legal awareness and provide actionable tips for individuals, freelancers, and businesses looking to recover their hard-earned money.
          </p>

          <p className="text-[13px] sm:text-[14px] text-[#4B5563] leading-relaxed mb-6 font-medium">
            In India, recovering stuck money has historically been seen as a slow and expensive process. However, modern legal-tech platforms combined with robust statutory protections make it easier than ever to enforce your rights. Below, we break down the key legal frameworks and strategies covered in our articles:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-8 pt-8 border-t border-gray-100">
            <div>
              <h3 className="text-sm sm:text-base font-extrabold text-[#111827] mb-3">
                1. Recovery of Unpaid Salaries & Employment Dues
              </h3>
              <p className="text-[12.5px] text-[#6B7280] leading-relaxed font-semibold">
                Employee rights in India are protected under several key legislations, including the <strong>Payment of Wages Act, 1936</strong>, and the <strong>Industrial Disputes Act, 1947</strong>. If your employer is withholding your salary, bonuses, or full-and-final (F&F) settlement dues, you are legally entitled to send a statutory demand notice. If the employer fails to respond or pay, claims can be escalated to the local Labour Commissioner or filed as a recovery suit in a civil court.
              </p>
            </div>

            <div>
              <h3 className="text-sm sm:text-base font-extrabold text-[#111827] mb-3">
                2. Resolving Consumer Disputes & Stuck Refunds
              </h3>
              <p className="text-[12.5px] text-[#6B7280] leading-relaxed font-semibold">
                The <strong>Consumer Protection Act, 2019</strong> guarantees protection against unfair trade practices, defective products, and deficient services. Under this law, consumer forums have the authority to order refunds, product replacements, and compensation for mental agony. Platforms like <strong>e-Jagriti (e-Daakhil)</strong> allow consumers to file complaints online directly. Initiating the process with an attorney-drafted legal notice often prompts brands to settle disputes out of court.
              </p>
            </div>

            <div>
              <h3 className="text-sm sm:text-base font-extrabold text-[#111827] mb-3">
                3. B2B Invoice Recoveries & MSME Protection
              </h3>
              <p className="text-[12.5px] text-[#6B7280] leading-relaxed font-semibold">
                For registered Micro, Small, and Medium Enterprises (MSMEs), the <strong>MSMED Act, 2006</strong> provides a powerful mechanism under <strong>MSME Samadhaan</strong> to address delayed payments. Buyers who delay payments beyond 45 days are liable to pay compound interest at three times the bank rate notified by the RBI. For other businesses, filing a summary suit under <strong>Order 37 of the Civil Procedure Code (CPC)</strong> offers a fast-track litigation route for written debt recovery.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-100">
            <h3 className="text-sm sm:text-base font-extrabold text-[#111827] mb-4">
              Actionable Steps Before Taking Legal Action
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 list-none p-0 m-0">
              <li className="bg-[#F8F9FB] rounded-2xl p-4 border border-gray-100">
                <strong className="text-[13px] text-[#111827] block mb-1">Maintain a Paper Trail</strong>
                <span className="text-[12px] text-[#6B7280] leading-relaxed font-semibold">Ensure you have clear, written communication, including email threads, invoices, contracts, or chat logs.</span>
              </li>
              <li className="bg-[#F8F9FB] rounded-2xl p-4 border border-gray-100">
                <strong className="text-[13px] text-[#111827] block mb-1">Draft a Formal Notice</strong>
                <span className="text-[12px] text-[#6B7280] leading-relaxed font-semibold">A legal notice prepared and signed by a qualified advocate holds strong evidentiary value and sets clear terms.</span>
              </li>
              <li className="bg-[#F8F9FB] rounded-2xl p-4 border border-gray-100">
                <strong className="text-[13px] text-[#111827] block mb-1">Track Delivery</strong>
                <span className="text-[12px] text-[#6B7280] leading-relaxed font-semibold">Always send notices via Registered Post AD or speed post, and keep the tracking records as proof of service.</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
