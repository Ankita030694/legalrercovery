"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ArrowRight, BookOpen, Calendar, Clock, X, Loader2 } from "lucide-react";

interface BlogPost {
  id: string | number;
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

function inferCategory(blog: any): string {
  const text = `${blog.title || ""} ${blog.subtitle || blog.subtitleKeywords || ""} ${blog.description || blog.content || ""}`.toLowerCase();
  if (text.includes("friend") || text.includes("lend") || text.includes("recovery") || text.includes("recover money") || text.includes("debt")) {
    return "Money Recovery";
  }
  if (text.includes("consumer") || text.includes("refund") || text.includes("e-commerce") || text.includes("retail")) {
    return "Consumer Rights";
  }
  if (text.includes("salary") || text.includes("employer") || text.includes("employee") || text.includes("job") || text.includes("labour")) {
    return "Employment";
  }
  if (text.includes("tenant") || text.includes("deposit") || text.includes("rent") || text.includes("landlord") || text.includes("property")) {
    return "Property";
  }
  if (text.includes("b2b") || text.includes("invoice") || text.includes("business") || text.includes("msme") || text.includes("corporate")) {
    return "Business";
  }
  if (text.includes("flight") || text.includes("cancel") || text.includes("delay") || text.includes("travel") || text.includes("airline")) {
    return "Travel";
  }
  if (text.includes("freelance") || text.includes("contract") || text.includes("tips") || text.includes("clause") || text.includes("lawyer") || text.includes("court") || text.includes("legal")) {
    return "Legal Tips";
  }
  return "Legal Tips";
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        setIsLoading(true);
        const res = await fetch("/api/blog");
        const json = await res.json();
        if (json.success && Array.isArray(json.data)) {
          const mappedBlogs = json.data.map((item: any) => {
            const rawContent = item.description || item.content || "";
            const cleanExcerpt = rawContent
              ? rawContent.replace(/<[^>]*>/g, "").substring(0, 160) + "..."
              : item.subtitle || item.metaDescription || item.subtitleKeywords || "";

            const wordCount = rawContent.split(/\s+/).length;
            const readTimeMinutes = Math.max(1, Math.ceil(wordCount / 200));

            let imageUrl = "/blog_money_recovery.png";
            if (item.image) {
              imageUrl = item.image;
            } else if (item.coverImage?.gridFsId) {
              imageUrl = `/api/blog/image/${item.coverImage.gridFsId}`;
            }

            let formattedDate = "Recent";
            const dateStr = item.date || item.publishedAt || item.createdAt;
            if (dateStr) {
              try {
                formattedDate = new Date(dateStr).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit"
                });
              } catch (e) {
                formattedDate = dateStr.split("T")[0];
              }
            }

            return {
              id: item._id || item.id,
              category: inferCategory(item),
              title: item.title || "Untitled Article",
              date: formattedDate,
              readTime: `${readTimeMinutes} min read`,
              image: imageUrl,
              excerpt: cleanExcerpt,
              slug: item.slug || "",
              author: "Team LegalRecovery",
            };
          });
          setBlogs(mappedBlogs);
        }
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory = selectedCategory === "All" || blog.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          blog.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setVisibleCount(4);
  };

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 4, filteredBlogs.length));
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB] text-[#111827] font-sans antialiased overflow-x-hidden pt-20 lg:pt-28 pb-16">
      
      {/* ═══════════════════════════════════════
          HEADER SECTION (Stay Informed. Know Your Rights)
      ═══════════════════════════════════════ */}
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
                  setVisibleCount(4); // Reset visible count on search
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

      {/* ═══════════════════════════════════════
          MAIN CONTENT AREA
      ═══════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Category Tabs Row */}
        <div className="relative mb-8 sm:mb-12">
          {/* Scrollable container with hidden scrollbar */}
          <div className="flex items-center gap-2.5 overflow-x-auto pb-3 scrollbar-none flex-nowrap -mx-5 px-5 sm:mx-0 sm:px-0">
            {categories.map((cat) => {
              const isActive = selectedCategory.toLowerCase() === cat.toLowerCase();
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`flex-shrink-0 px-5 sm:px-6 py-2.5 text-xs sm:text-[13px] font-bold rounded-2xl border transition-all duration-200 cursor-pointer
                    ${isActive 
                      ? "bg-[#DC2626] border-[#DC2626] text-white shadow-[0_4px_16px_rgba(220,38,38,0.25)] hover:bg-[#B91C1C]" 
                      : "bg-white border-gray-200/80 text-[#4B5563] hover:text-[#DC2626] hover:border-[#DC2626]/40 hover:shadow-sm"}`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Blog Cards Grid */}
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-10 h-10 animate-spin text-[#DC2626] mb-4" />
            <p className="text-sm font-semibold text-gray-500">Loading articles from the database...</p>
          </div>
        ) : filteredBlogs.length > 0 ? (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
              {filteredBlogs.slice(0, visibleCount).map((blog) => (
                <Link key={blog.id} href={`/blog/${blog.slug}`} className="group block h-full">
                  <article
                    className="bg-white rounded-3xl border border-gray-100/80 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)] hover:border-gray-200/50 overflow-hidden transition-all duration-300 flex flex-col h-full hover:-translate-y-0.5"
                  >
                    {/* Aspect Ratio Image Container */}
                    <div className="relative w-full h-[180px] sm:h-[200px] overflow-hidden bg-gray-100">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-[1.04] transition-all duration-500"
                      />
                      {/* Dark gradient overlay on bottom of image for sleek depth */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    </div>

                    {/* Text Details Area */}
                    <div className="p-5 sm:p-6 flex flex-col flex-1">
                      
                      {/* Category */}
                      <span className="text-[10px] font-black text-[#DC2626] uppercase tracking-[0.12em] mb-2 sm:mb-2.5 block">
                        {blog.category}
                      </span>

                      {/* Title */}
                      <h3 className="text-[13.5px] sm:text-base font-extrabold text-[#111827] leading-[1.35] mb-3 group-hover:text-[#DC2626] transition-colors line-clamp-2">
                        {blog.title}
                      </h3>

                      {/* Excerpt/Snippet (visible on hover/details or screen readers, kept clean) */}
                      <p className="text-[11.5px] sm:text-[12px] text-[#6B7280] leading-relaxed mb-4 line-clamp-2">
                        {blog.excerpt}
                      </p>

                      {/* Meta info at absolute bottom of card */}
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

            {/* Load More Button Section */}
            {visibleCount < filteredBlogs.length && (
              <div className="flex justify-center mt-12 sm:mt-16">
                <button
                  onClick={handleLoadMore}
                  className="flex items-center justify-center gap-2 px-7 py-3.5 bg-[#DC2626] text-white text-xs sm:text-[13px] font-bold rounded-2xl shadow-[0_6px_20px_rgba(220,38,38,0.25)] hover:bg-[#B91C1C] hover:shadow-[0_8px_24px_rgba(220,38,38,0.35)] transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                >
                  Load More Articles
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Empty / No Results State */
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

      </div>
    </div>
  );
}
