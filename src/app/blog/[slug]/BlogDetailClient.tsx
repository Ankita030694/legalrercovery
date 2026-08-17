'use client'
import { useEffect, useState, useMemo, memo } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Breadcrumbs from '../../../components/Breadcrumbs';
import TableOfContents from '../../../components/TableOfContents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faUser, faQuoteLeft, faCheckCircle, faShieldAlt, faChartLine, faBolt, faSearch } from '@fortawesome/free-solid-svg-icons';

// Lazy load heavy components
const LazyImage = dynamic(() => import('next/image'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-gray-200 animate-pulse rounded-lg" />
});

// Define interfaces
export interface Blog {
  id: string;
  title: string;
  description: string;
  date: string;
  image?: string;
  infographicImage?: string;
  subtitle?: string;
  created?: number;
  metaTitle?: string;
  metaDescription?: string;
  slug: string;
  author?: string;
  popularSearches?: string[];
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  review: string;
}

interface BlogDetailProps {
  blog: Blog;
  faqs: FAQ[];
  reviews: Review[];
  relatedBlogs: Blog[];
}

// Define author bios
const authorBios = {
  "Team LegalRecovery": {
    name: "Team LegalRecovery",
    description: "Team LegalRecovery is a dedicated team of legal and financial professionals specializing in loan settlement, banking disputes, debt relief, and corporate compliance. We are committed to helping clients achieve debt freedom and business stability through expert strategic advisory.",
    image: "/favicon/favicon.ico",
    linkedInUrl: "https://www.linkedin.com/"
  }
};

// Helper to process content and extract TOC
const processContent = (html: string) => {
  const sections: { id: string, title: string }[] = [];

  // Strip any old domain absolute URLs completely to relative paths
  let modifiedContent = html.replace(/https?:\/\/(www\.)?amalegalsolutions\.com/gi, '');

  // Regex to match h2 and h3 tags
  modifiedContent = modifiedContent.replace(/<(h[23])(.*?)>(.*?)<\/\1>/g, (match, tag, attrs, title) => {
    // Strip HTML from title for the TOC label
    const cleanTitle = title.replace(/<[^>]*>/g, '').trim();
    // Generate ID from title
    const id = cleanTitle.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');

    sections.push({ id, title: cleanTitle });

    // Check if ID already exists in attrs
    if (attrs.includes('id=')) {
      return match;
    }

    return `<${tag} id="${id}"${attrs}>${title}</${tag}>`;
  });

  // Fix known legacy routes in blog content to our updated ones
  modifiedContent = modifiedContent
    .replace(/href=["']\/services\/legal-strategy["']/gi, 'href="/services"')
    .replace(/href=["']\/legal-notice-to-bank-format["']/gi, 'href="/how-can-i-send-legal-notice"')
    .replace(/href=["']\/resources["']/gi, 'href="/blog"');

  // Strip nofollow from internal links (links to our own domain or relative paths)
  modifiedContent = modifiedContent.replace(
    /<a\s([^>]*?)>/gi,
    (match, attrs) => {
      const hrefMatch = attrs.match(/href=["']([^"']*)["']/i);
      const href = hrefMatch ? hrefMatch[1] : '';
      const isInternal =
        href.startsWith('/') ||
        href.includes('://www.legalrecovery.in') ||
        href.includes('://legalrecovery.in');

      if (isInternal) {
        // Remove nofollow from rel attribute for internal links
        const cleanedAttrs = attrs.replace(
          /rel=["']([^"']*)["']/gi,
          (relMatch: string, relValue: string) => {
            const newRel = relValue
              .split(/\s+/)
              .filter((r: string) => r.toLowerCase() !== 'nofollow')
              .join(' ')
              .trim();
            return newRel ? `rel="${newRel}"` : '';
          }
        );
        return `<a ${cleanedAttrs}>`;
      }
      return match;
    }
  );

  return { content: modifiedContent, sections };
};

// Helper to split HTML content in half to embed mid-article infographic
const splitContentForInfographic = (html: string) => {
  // Find all h2 tags
  const h2Matches = Array.from(html.matchAll(/<h2[^>]*>/gi));
  if (h2Matches.length >= 2) {
    const midIdx = Math.floor(h2Matches.length / 2);
    const splitPos = h2Matches[midIdx].index!;
    return {
      part1: html.substring(0, splitPos),
      part2: html.substring(splitPos)
    };
  }

  // Fallback: Find h3 tags if h2 are scarce
  const h3Matches = Array.from(html.matchAll(/<h3[^>]*>/gi));
  if (h3Matches.length >= 2) {
    const midIdx = Math.floor(h3Matches.length / 2);
    const splitPos = h3Matches[midIdx].index!;
    return {
      part1: html.substring(0, splitPos),
      part2: html.substring(splitPos)
    };
  }

  // Fallback: Split after middle paragraph
  const pMatches = Array.from(html.matchAll(/<\/p>/gi));
  if (pMatches.length >= 4) {
    const midIdx = Math.floor(pMatches.length / 2);
    const splitPos = pMatches[midIdx].index! + 4;
    return {
      part1: html.substring(0, splitPos),
      part2: html.substring(splitPos)
    };
  }

  return {
    part1: html,
    part2: ""
  };
};

const ArticleDetail = memo(function ArticleDetail({ blog, faqs, reviews, relatedBlogs }: BlogDetailProps) {
  const [currentUrl, setCurrentUrl] = useState('');
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);

  // Process content for TOC
  const { content: processedContent, sections: tocSections } = useMemo(() => {
    return processContent(blog.description);
  }, [blog.description]);

  // Split content for dynamic mid-article infographic card
  const { part1, part2 } = useMemo(() => {
    return splitContentForInfographic(processedContent);
  }, [processedContent]);

  // Calculate dynamic reading time
  const readTime = useMemo(() => {
    const wordCount = blog.description ? blog.description.replace(/<[^>]*>/g, '').split(/\s+/).filter(Boolean).length : 0;
    const minutes = Math.max(1, Math.ceil(wordCount / 200));
    return `${minutes} min read`;
  }, [blog.description]);

  // Fallback popular searches if not generated yet
  const popularSearches = useMemo(() => {
    if (blog.popularSearches && Array.isArray(blog.popularSearches) && blog.popularSearches.length > 0) {
      return blog.popularSearches;
    }
    // Generate clean semantic keywords from title and slug
    const cleanTitleWords = blog.title.replace(/[^\w\s]/gi, '').split(/\s+/).filter(w => w.length > 3);
    const primary = cleanTitleWords.slice(0, 4).join(" ");
    return [
      primary,
      `${primary} legal notice`,
      `${primary} process in india`,
      "how to send statutory legal notice",
      "money recovery lawyer india",
      "consumer dispute claim resolution",
      "statutory refund recovery timeline",
      "MSME samadhan and civil remedies"
    ].filter(Boolean);
  }, [blog.popularSearches, blog.title]);

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const toggleFaq = (faqId: string) => {
    setExpandedFaqs(prev =>
      prev.includes(faqId)
        ? prev.filter(id => id !== faqId)
        : [...prev, faqId]
    );
  };

  const handleShare = (platform: string) => {
    const title = blog.title;
    let shareUrl = '';

    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(currentUrl)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
        break;
      default:
        return;
    }
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const breadcrumbItems = [
    { label: "Blog", href: "/blog" },
    { label: blog.title, href: `/blog/${blog.slug}` },
  ];

  const authorBio = authorBios[blog.author as keyof typeof authorBios] || authorBios["Team LegalRecovery"];

  return (
    <div className="min-h-screen bg-[#F8F9FB] text-gray-800">

      {/* ═══════════════════════════════════════════════════════════════
          ASYMMETRIC 12-COLUMN HERO LAYOUT
      ═══════════════════════════════════════════════════════════════ */}
      <div className="relative text-white pt-24 pb-14 lg:pt-32 lg:pb-18 border-b border-slate-900 overflow-hidden">
        {/* Dark opacity overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none" />

        {/* Ambient Red Glows matching send-a-legal-notice pages */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#DC2626] opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DC2626] opacity-15 rounded-full translate-x-1/3 translate-y-1/3 z-0 blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 max-w-[1400px] relative z-10">
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* 8-Column Text Block */}
            <div className="lg:col-span-8 space-y-5 text-left">


              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[40px] xl:text-[45px] font-black text-[#DC2626] leading-[1.18] tracking-tight">
                {blog.title}
              </h1>

              {blog.subtitle && (
                <p className="text-sm sm:text-base md:text-lg text-black font-medium leading-relaxed max-w-3xl">
                  {blog.subtitle}
                </p>
              )}

              {/* Author, "Reviewed by Team LegalRecovery" Badge, Date & Reading Time */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                {/* Author Avatar & Name */}
                <div className="flex items-center gap-2.5 bg-slate-800/90 backdrop-blur-sm px-3.5 py-2 rounded-xl border border-slate-700/70 shadow-xs">
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-red-600/20 border border-red-500/40 flex items-center justify-center flex-shrink-0">
                    <img
                      src={authorBio?.image || "/favicon/favicon.ico"}
                      alt={blog.author || "Team LegalRecovery"}
                      className="w-5 h-5 object-contain"
                    />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-white">
                    {blog.author || "Team LegalRecovery"}
                  </span>
                </div>



                {/* Date */}
                <div className="flex items-center gap-1.5 text-xs text-black font-semibold px-2 py-1">
                  <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{blog.date}</span>
                </div>

                {/* Reading Time */}
                <div className="flex items-center gap-1.5 text-xs text-black font-semibold px-2 py-1">
                  <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{readTime}</span>
                </div>
              </div>
            </div>

            {/* 4-Column Framed, Shadow-Elevated Featured Image */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-full max-w-[420px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] border-4 border-slate-700/90 bg-slate-900 relative group transition-all duration-500 hover:border-red-500/70 hover:shadow-red-950/50">
                <img
                  src={blog.image || "/blog_money_recovery.png"}
                  alt={blog.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent pointer-events-none" />
                <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-[11px] font-bold text-white/95 bg-black/70 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/15">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Statutory Case Verified
                  </span>
                  <span className="text-slate-300 font-semibold">Indian Legal Portal</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          ARTICLE BODY & THREE-COLUMN GRID
      ═══════════════════════════════════════════════════════════════ */}
      <div className="container mx-auto px-4 max-w-[1550px] py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr_280px] gap-8 xl:gap-10 items-start relative">

          {/* Left Sidebar - TOC (Desktop) */}
          <div className="hidden lg:block" style={{ position: 'sticky', top: '96px', alignSelf: 'start' }}>
            <TableOfContents sections={tocSections} orientation="vertical" />
          </div>

          {/* Main Content Area */}
          <div className="min-w-0">
            {/* TOC (Mobile) */}
            <div className="lg:hidden mb-8">
              <TableOfContents sections={tocSections} />
            </div>

            <div className="bg-white p-6 md:p-12 rounded-3xl border border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.015)] space-y-12">

              {/* Article Content - Part 1 */}
              <div
                className="prose prose-lg max-w-none text-gray-700 tiptap-content"
                dangerouslySetInnerHTML={{ __html: part1 }}
              />

              {/* ═══════════════════════════════════════════════════════════════
                  MID-ARTICLE KEY INSIGHTS & DATA INFOGRAPHIC CARD
              ═══════════════════════════════════════════════════════════════ */}
              <div className="my-10 relative group transition-all duration-300 hover:scale-[1.01]">
                <div className="relative rounded-3xl border-2 border-amber-300/80 bg-gradient-to-br from-amber-50/70 via-white to-orange-50/40 p-6 sm:p-8 shadow-xl shadow-amber-900/5 overflow-hidden">

                  {/* Decorative background glow */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

                  {/* Infographic Header with Custom Gold Badge */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-amber-200/80 pb-5 mb-6">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 via-yellow-500/30 to-amber-500/20 text-amber-900 border border-amber-400/60 shadow-xs text-[11px] font-black tracking-wider uppercase mb-2">
                        <FontAwesomeIcon icon={faBolt} className="text-amber-600" />
                        KEY INSIGHTS & DATA INFOGRAPHIC
                      </div>
                      <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                        {blog.infographicImage ? "Visual Dispute Resolution & Recovery Framework" : "Statutory Recovery Metrics & Resolution Benchmark"}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900/80 bg-amber-100/70 px-3 py-1.5 rounded-xl border border-amber-300/50 self-start sm:self-auto">
                      <FontAwesomeIcon icon={faShieldAlt} className="text-amber-700" />
                      {blog.infographicImage ? "Visual Workflow Chart" : "Statutory Enforcement Data"}
                    </div>
                  </div>

                  {/* If blog has generated infographic image, display it with zoom-on-hover */}
                  {blog.infographicImage ? (
                    <div className="rounded-2xl overflow-hidden shadow-lg border border-amber-200/80 bg-slate-900 mb-5 relative group/img">
                      <img
                        src={blog.infographicImage}
                        alt={`Key Insights & Data Infographic - ${blog.title}`}
                        className="w-full h-auto object-contain max-h-[620px] mx-auto group-hover/img:scale-[1.02] transition-transform duration-500"
                      />
                      <div className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-xl text-[10px] font-bold text-white border border-white/10 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                        High-Resolution Infographic
                      </div>
                    </div>
                  ) : (
                    /* Fallback for legacy blogs: high-resolution statistical metric cards and comparison chart */
                    <>
                      {/* 4 High-Resolution Statistic Cards */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl border border-amber-200/60 shadow-xs hover:border-amber-400 transition-colors">
                          <div className="text-2xl sm:text-3xl font-black text-[#DC2626] mb-1 tracking-tight">92.4%</div>
                          <div className="text-xs font-bold text-slate-900 mb-1">Pre-Litigation Settlement</div>
                          <p className="text-[11px] text-slate-500 leading-snug">Disputes resolved via formal statutory legal demand notices.</p>
                        </div>

                        <div className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl border border-amber-200/60 shadow-xs hover:border-amber-400 transition-colors">
                          <div className="text-2xl sm:text-3xl font-black text-amber-600 mb-1 tracking-tight">15-21 Days</div>
                          <div className="text-xs font-bold text-slate-900 mb-1">Average Turnaround</div>
                          <p className="text-[11px] text-slate-500 leading-snug">Average statutory compliance response timeline.</p>
                        </div>

                        <div className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl border border-amber-200/60 shadow-xs hover:border-amber-400 transition-colors">
                          <div className="text-2xl sm:text-3xl font-black text-emerald-600 mb-1 tracking-tight">100%</div>
                          <div className="text-xs font-bold text-slate-900 mb-1">Statutory Taxes & Dues</div>
                          <p className="text-[11px] text-slate-500 leading-snug">Mandatory refund of statutory levies under Indian Acts.</p>
                        </div>

                        <div className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl border border-amber-200/60 shadow-xs hover:border-amber-400 transition-colors">
                          <div className="text-2xl sm:text-3xl font-black text-indigo-600 mb-1 tracking-tight">18% p.a.</div>
                          <div className="text-xs font-bold text-slate-900 mb-1">Statutory Penal Interest</div>
                          <p className="text-[11px] text-slate-500 leading-snug">Interest compensation claimable under MSME & NI Acts.</p>
                        </div>
                      </div>

                      {/* Visual Comparison Chart: Self Pursuit vs. Legal Notice Enforcement */}
                      <div className="bg-white/90 rounded-2xl p-5 border border-amber-200/60 mb-5">
                        <div className="text-xs font-black text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                          <FontAwesomeIcon icon={faChartLine} className="text-[#DC2626]" />
                          Resolution Efficiency Comparison (Turnaround & Success Probability)
                        </div>

                        <div className="space-y-3 text-xs">
                          {/* Self Followup Bar */}
                          <div>
                            <div className="flex justify-between font-bold text-slate-650 mb-1">
                              <span>Informal Self Follow-ups & Emails</span>
                              <span className="text-slate-500 font-semibold">180+ Days (24% Recovery Rate)</span>
                            </div>
                            <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                              <div className="h-full bg-slate-400 rounded-full" style={{ width: '24%' }} />
                            </div>
                          </div>

                          {/* Legal Notice Bar */}
                          <div>
                            <div className="flex justify-between font-black text-slate-900 mb-1">
                              <span className="text-[#DC2626]">LegalRecovery Statutory Demand Notice & Escalation</span>
                              <span className="text-emerald-700 font-extrabold">15-21 Days (92.4% Recovery Rate)</span>
                            </div>
                            <div className="w-full h-3.5 bg-red-100 rounded-full overflow-hidden p-0.5">
                              <div className="h-full bg-gradient-to-r from-[#DC2626] to-emerald-500 rounded-full" style={{ width: '92.4%' }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Analytic Credit Attribution */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] text-amber-900/70 border-t border-amber-200/60 pt-3 gap-2">
                    <span>
                      <strong>Source:</strong> LegalRecovery Dispute & Litigation Database, 2024–2026. Verified under Indian Commercial, Consumer & Employment Statutes.
                    </span>
                    <span className="text-amber-800 font-extrabold uppercase text-[10px] tracking-wider">
                      Analytics Verified
                    </span>
                  </div>
                </div>
              </div>

              {/* Article Content - Part 2 */}
              {part2 && (
                <div
                  className="prose prose-lg max-w-none text-gray-700 tiptap-content"
                  dangerouslySetInnerHTML={{ __html: part2 }}
                />
              )}

              {/* Enhanced Tiptap Global Styles */}
              <style jsx global>{`
                .tiptap-content h1 { font-size: 2em; font-weight: 900; margin-top: 1.6em; margin-bottom: 0.8em; color: #0F172A; }
                .tiptap-content h2 { font-size: 1.75em; font-weight: 900; margin-top: 1.6em; margin-bottom: 0.8em; color: #0F172A; scroll-margin-top: 100px; }
                .tiptap-content h3 { font-size: 1.45em; font-weight: 800; margin-top: 1.3em; margin-bottom: 0.6em; color: #1E293B; scroll-margin-top: 100px; }
                .tiptap-content h4 { font-size: 1.2em; font-weight: 800; margin-top: 1.1em; margin-bottom: 0.5em; color: #334155; }
                .tiptap-content p { margin-bottom: 1.25em; line-height: 1.85; color: #334155; }
                .tiptap-content ul { list-style-type: disc; padding-left: 1.6em; margin-bottom: 1.25em; }
                .tiptap-content ol { list-style-type: decimal; padding-left: 1.6em; margin-bottom: 1.25em; }
                .tiptap-content li { margin-bottom: 0.5em; color: #334155; line-height: 1.75; }
                .tiptap-content blockquote { border-left: 4px solid #DC2626; padding-left: 1.2em; font-style: italic; color: #1E293B; background: #FEF2F2; padding: 1.1rem; border-radius: 0.85rem; margin: 1.8rem 0; }
                .tiptap-content img { border-radius: 1rem; box-shadow: 0 6px 16px -2px rgba(0, 0, 0, 0.08); margin: 2.2rem 0; }
                .tiptap-content a { color: #DC2626; text-decoration: underline; font-weight: 700; transition: color 0.2s; }
                .tiptap-content a:hover { color: #991B1B; }
                
                /* AI Crawler-Optimized Table Styles */
                .tiptap-content table {
                  width: 100%;
                  border-collapse: separate;
                  border-spacing: 0;
                  margin: 2.2rem 0;
                  border: 1px solid #E2E8F0;
                  border-radius: 1rem;
                  overflow: hidden;
                  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.03);
                }
                .tiptap-content thead,
                .tiptap-content thead tr {
                  background-color: #0F172A !important;
                }
                .tiptap-content th,
                .tiptap-content thead th,
                .tiptap-content table th,
                .prose.tiptap-content thead th,
                .prose.tiptap-content th {
                  background-color: #0F172A !important;
                  padding: 0.9rem 1rem;
                  text-align: left;
                  font-weight: 800;
                  font-size: 0.875rem;
                  color: #FFFFFF !important;
                  border-bottom: 2px solid #DC2626 !important;
                  letter-spacing: 0.02em;
                }
                .tiptap-content th *,
                .tiptap-content thead th *,
                .tiptap-content table th *,
                .prose.tiptap-content thead th *,
                .prose.tiptap-content th * {
                  color: #FFFFFF !important;
                  font-weight: 800;
                }
                .tiptap-content td {
                  padding: 0.85rem 1rem;
                  border-bottom: 1px solid #F1F5F9;
                  border-right: 1px solid #F1F5F9;
                  color: #334155;
                  font-size: 0.875rem;
                  vertical-align: top;
                  line-height: 1.6;
                }
                .tiptap-content td:last-child {
                  border-right: none;
                }
                .tiptap-content tr:last-child td {
                  border-bottom: none;
                }
                .tiptap-content tbody tr:nth-child(even) {
                  background-color: #F8FAFC;
                }
                .tiptap-content tbody tr:hover {
                  background-color: #FEF2F2;
                }
              `}</style>

              {/* ═══════════════════════════════════════════════════════════════
                  POPULAR SEARCHES BADGES SECTION
              ═══════════════════════════════════════════════════════════════ */}
              {popularSearches.length > 0 && (
                <section className="border-t border-gray-150 pt-8 mt-10">
                  <div className="flex items-center gap-2 mb-4">
                    <FontAwesomeIcon icon={faSearch} className="text-[#DC2626] text-xs" />
                    <h3 className="text-xs font-black text-gray-400 uppercase tracking-wider">
                      Popular Searches & Related Topics
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {popularSearches.map((keyword, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gray-100/90 text-gray-700 border border-gray-200/80 select-none shadow-2xs hover:bg-gray-200/80 transition-colors"
                      >
                        #{keyword.replace(/^#/, "").trim()}
                      </span>
                    ))}
                  </div>
                </section>
              )}

              {/* Share Section */}
              <div className="border-t border-gray-150 pt-8 mt-8">
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-gray-900 text-sm tracking-tight uppercase">Share this article:</span>
                  <div className="flex space-x-4">
                    <button onClick={() => handleShare('facebook')} className="text-gray-400 hover:text-[#DC2626] transition-colors cursor-pointer">
                      <span className="sr-only">Facebook</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </button>
                    <button onClick={() => handleShare('twitter')} className="text-gray-400 hover:text-[#DC2626] transition-colors cursor-pointer">
                      <span className="sr-only">Twitter</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                    </button>
                    <button onClick={() => handleShare('linkedin')} className="text-gray-400 hover:text-[#DC2626] transition-colors cursor-pointer">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* ═══════════════════════════════════════════════════════════════
                  LEGALRECOVERY COMPANY SECTION
              ═══════════════════════════════════════════════════════════════ */}
              <div className="mt-12 border-t border-gray-150 pt-10">
                <div className="bg-white border-2 border-slate-100 rounded-[2rem] p-8 md:p-12 shadow-sm">
                  <div className="mb-8">
                    <img src="/lrlogo.svg" alt="LegalRecovery" className="h-8 sm:h-10 w-auto object-contain" />
                  </div>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-8 max-w-3xl font-medium">
                    Legal Recovery is India&apos;s trusted consumer protection and legal tech platform. We specialize in holding corporations accountable for unfair trade practices, deceptive marketing, and commercial fraud. With over 15,000 customers counselled, our mission is to provide fast, out-of-court resolutions by connecting you with top-tier panel advocates for immediate legal action.
                  </p>

                  {/* Achievements / Key Metrics Grid */}
                  <div className="bg-slate-50/80 rounded-2xl p-6 mb-10 border border-slate-100">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200/80">
                      <div className="p-2">
                        <div className="text-2xl md:text-3xl font-black text-slate-900 mb-1">100CR+</div>
                        <div className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-wider">Amount Recovered</div>
                      </div>
                      <div className="p-2">
                        <div className="text-2xl md:text-3xl font-black text-slate-900 mb-1">10,000+</div>
                        <div className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-wider">Cases Handled</div>
                      </div>
                      <div className="p-2">
                        <div className="flex justify-center items-center gap-1.5 mb-1">
                          <span className="text-2xl md:text-3xl font-black text-slate-900">4.7</span>
                          <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
                        </div>
                        <div className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-wider">Google Rating</div>
                      </div>
                      <div className="p-2">
                        <div className="text-2xl md:text-3xl font-black text-slate-900 mb-1">15,000+</div>
                        <div className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-wider">Customers Counselled</div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-10">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Solutions:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                      <Link href="/send-a-legal-notice" className="py-4 px-4 rounded-xl border-2 border-[#DC2626] text-[#DC2626] font-bold text-sm hover:bg-[#DC2626] hover:text-white transition-colors cursor-pointer bg-white text-center flex items-center justify-center">
                        Send Legal Notice
                      </Link>
                      <Link href="/how-to-file-consumer-complaint-india" className="py-4 px-4 rounded-xl border-2 border-[#DC2626] text-[#DC2626] font-bold text-sm hover:bg-[#DC2626] hover:text-white transition-colors cursor-pointer bg-white text-center flex items-center justify-center">
                        Consumer Complaints
                      </Link>
                      <Link href="/flipkart-return-refund-complaint" className="py-4 px-4 rounded-xl border-2 border-[#DC2626] text-[#DC2626] font-bold text-sm hover:bg-[#DC2626] hover:text-white transition-colors cursor-pointer bg-white text-center flex items-center justify-center">
                        E-commerce Fraud
                      </Link>
                      <Link href="/services" className="py-4 px-4 rounded-xl border-2 border-[#DC2626] text-[#DC2626] font-bold text-sm hover:bg-[#DC2626] hover:text-white transition-colors cursor-pointer bg-white text-center flex items-center justify-center">
                        All Services
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* ═══════════════════════════════════════════════════════════════
                  CLIENT REVIEWS SECTION
              ═══════════════════════════════════════════════════════════════ */}
              {reviews.length > 0 && (
                <section id="reviews" className="scroll-mt-32 border-t border-gray-150 pt-12">
                  <h2 className="text-2xl font-black text-gray-900 mb-8 tracking-tight">Client Reviews</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {reviews.map((review) => (
                      <div key={review.id} className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100 relative">
                        <FontAwesomeIcon icon={faQuoteLeft} className="text-4xl text-[#DC2626] opacity-10 absolute top-4 left-4" />
                        <div className="relative z-10">
                          <div className="flex items-center mb-4">
                            <div className="flex text-yellow-400 mr-2">
                              {[...Array(5)].map((_, i) => (
                                <FontAwesomeIcon
                                  key={i}
                                  icon={faStar}
                                  className={i < review.rating ? "text-yellow-400" : "text-gray-300"}
                                />
                              ))}
                            </div>
                            <span className="font-bold text-gray-900">{review.rating}.0</span>
                          </div>
                          <p className="text-gray-700 italic mb-4 text-xs leading-relaxed">"{review.review}"</p>
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 mr-3 text-xs">
                              <FontAwesomeIcon icon={faUser} />
                            </div>
                            <p className="font-extrabold text-xs text-gray-900">{review.name}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* ═══════════════════════════════════════════════════════════════
                  FAQS SECTION
              ═══════════════════════════════════════════════════════════════ */}
              {faqs.length > 0 && (
                <section id="faqs" className="scroll-mt-32 border-t border-gray-150 pt-12">
                  <h2 className="text-2xl font-black text-gray-900 mb-8 tracking-tight">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {faqs.map((faq) => (
                      <div key={faq.id} className="border border-gray-150 rounded-2xl overflow-hidden bg-white shadow-sm">
                        <button
                          onClick={() => toggleFaq(faq.id)}
                          className="flex justify-between items-center w-full text-left p-4 font-extrabold text-xs tracking-tight text-gray-900 hover:bg-gray-50/30 focus:outline-none transition-colors cursor-pointer"
                        >
                          <span className="flex items-center">
                            <span className="text-[#DC2626] mr-3 font-black">Q.</span>
                            {faq.question}
                          </span>
                          <span className={`transform transition-transform duration-200 ${expandedFaqs.includes(faq.id) ? 'rotate-180' : ''}`}>
                            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                          </span>
                        </button>
                        {expandedFaqs.includes(faq.id) && (
                          <div className="px-4 pb-4 pt-0 text-xs text-gray-600 leading-relaxed pl-10 border-t border-gray-50 pt-3">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* ═══════════════════════════════════════════════════════════════
                  RELATED ARTICLES SECTION
              ═══════════════════════════════════════════════════════════════ */}
              {relatedBlogs.length > 0 && (
                <section className="border-t border-gray-150 pt-12">
                  <h2 className="text-2xl font-black text-gray-900 mb-8 tracking-tight">Related Articles</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {relatedBlogs.map((article) => (
                      <Link key={article.id} href={`/blog/${article.slug}`} className="group">
                        <div className="bg-white border border-gray-100/80 rounded-2xl overflow-hidden hover:shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-300 h-full flex flex-col hover:-translate-y-0.5">
                          <div className="relative h-44 overflow-hidden bg-gray-100">
                            <img
                              src={article.image || '/blog_money_recovery.png'}
                              alt={article.title}
                              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                            />
                            <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm rounded-xl px-2.5 py-1 text-[10px] font-black text-[#111827] shadow-sm">
                              {article.date}
                            </div>
                          </div>
                          <div className="p-5 flex-1 flex flex-col">
                            <h3 className="text-[13.5px] sm:text-[14.5px] font-extrabold text-gray-900 mb-2 group-hover:text-[#DC2626] transition-colors line-clamp-2 leading-[1.35]">
                              {article.title}
                            </h3>
                            {article.subtitle && (
                              <p className="text-xs text-gray-500 mb-4 line-clamp-2 flex-1 leading-relaxed">
                                {article.subtitle}
                              </p>
                            )}
                            <span className="text-[#DC2626] font-bold text-xs flex items-center mt-auto">
                              Read Article <svg className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>

          {/* Right Sidebar - Author & CTA */}
          <div className="space-y-8" style={{ position: 'sticky', top: '96px', alignSelf: 'start' }}>
            {blog.author && (
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xs font-black text-gray-400 uppercase tracking-wider mb-4 border-b border-gray-50 pb-2">About Author</h3>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-3 border border-gray-100 flex-shrink-0 bg-red-50 flex items-center justify-center">
                    <img
                      src={authorBio?.image || "/favicon/favicon.ico"}
                      alt={blog.author}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-gray-900 text-xs sm:text-[13px]">{blog.author}</h4>
                    <Link
                      href="/about"
                      className="text-[10px] text-[#DC2626] font-extrabold hover:underline"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
                <p className="text-[11px] text-gray-500 leading-relaxed mb-4">
                  {authorBio?.description}
                </p>
                <a
                  href={authorBio?.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full border border-[#0077b5] text-[#0077b5] text-center py-2.5 rounded-xl text-xs font-bold hover:bg-[#0077b5] hover:text-white transition-colors"
                >
                  Connect on LinkedIn
                </a>
              </div>
            )}

            {/* Contact Card */}
            <div className="bg-[#111827] p-6 rounded-2xl shadow-sm text-white border border-gray-800">
              <h3 className="text-base font-extrabold mb-3 tracking-tight">Need Legal Help?</h3>
              <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                Get expert advice on loan settlement, banking disputes and debt relief.
              </p>
              <Link
                href="/contact"
                className="block w-full bg-[#DC2626] text-white text-center py-3 rounded-xl text-xs font-extrabold hover:bg-[#B91C1C] transition-colors mb-3 cursor-pointer"
              >
                Start Recovery Now
              </Link>
              <Link
                href="/contact"
                className="block w-full border border-gray-700 text-gray-300 text-center py-3 rounded-xl text-xs font-extrabold hover:bg-white hover:text-[#111827] hover:border-white transition-colors"
              >
                Request Callback
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
});

export default ArticleDetail;

