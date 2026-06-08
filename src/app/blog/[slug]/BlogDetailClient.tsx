'use client'
import { useEffect, useState, useMemo, memo } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Breadcrumbs from '../../../components/Breadcrumbs';
import TableOfContents from '../../../components/TableOfContents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faUser, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

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
  subtitle?: string;
  created?: number;
  metaTitle?: string;
  metaDescription?: string;
  slug: string;
  author?: string;
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

const ArticleDetail = memo(function ArticleDetail({ blog, faqs, reviews, relatedBlogs }: BlogDetailProps) {
  const [currentUrl, setCurrentUrl] = useState('');
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  
  // Process content for TOC
  const { content: processedContent, sections: tocSections } = useMemo(() => {
    return processContent(blog.description);
  }, [blog.description]);

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

    switch(platform) {
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

  return (
    <div className="min-h-screen bg-[#F8F9FB] text-gray-800">
      {/* Hero Image Section */}
      <div className="w-full h-[400px] md:h-[500px] relative bg-[#111827]">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: blog.image ? `url("${blog.image}")` : 'none' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-[#F8F9FB]/10 pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 max-w-[1600px] py-8">
        <Breadcrumbs items={breadcrumbItems} />
        
        {/* Blog Header Content */}
        <div className="text-center mb-12 max-w-4xl mx-auto mt-8">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight text-gray-900">
            {blog.title}
          </h1>
          {blog.subtitle && (
            <p className="text-lg md:text-xl mb-6 text-gray-500 font-medium">
              {blog.subtitle}
            </p>
          )}
          <div className="flex justify-center items-center space-x-4 text-sm md:text-base text-gray-400 font-bold">
            <span>{blog.date}</span>
            <span>•</span>
            <span className="text-[#DC2626]">{blog.author || 'Team LegalRecovery'}</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start relative">
          
          {/* Left Sidebar - TOC (Desktop) */}
          <div className="hidden lg:block" style={{ position: 'sticky', top: '96px', alignSelf: 'start' }}>     <TableOfContents sections={tocSections} orientation="vertical" />
          </div>

          {/* Main Content Area */}
          <div className="min-w-0">
            {/* TOC (Mobile) */}
            <div className="lg:hidden mb-8">
               <TableOfContents sections={tocSections} />
            </div>

            <div className="bg-white p-6 md:p-12 rounded-3xl border border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.015)] space-y-12">
              {/* Article Content */}
              <div 
                className="prose prose-lg max-w-none text-gray-700 tiptap-content"
                dangerouslySetInnerHTML={{ __html: processedContent }}
              />

              {/* Tiptap Styles */}
              <style jsx global>{`
                .tiptap-content h1 { font-size: 2em; font-weight: 800; margin-top: 1.5em; margin-bottom: 0.8em; color: #111827; }
                .tiptap-content h2 { font-size: 1.75em; font-weight: 800; margin-top: 1.5em; margin-bottom: 0.8em; color: #111827; scroll-margin-top: 100px; }
                .tiptap-content h3 { font-size: 1.5em; font-weight: 800; margin-top: 1.2em; margin-bottom: 0.6em; color: #1f2937; scroll-margin-top: 100px; }
                .tiptap-content p { margin-bottom: 1.2em; line-height: 1.8; color: #374151; }
                .tiptap-content ul { list-style-type: disc; padding-left: 1.5em; margin-bottom: 1.2em; }
                .tiptap-content ol { list-style-type: decimal; padding-left: 1.5em; margin-bottom: 1.2em; }
                .tiptap-content li { margin-bottom: 0.5em; color: #374151; }
                .tiptap-content blockquote { border-left: 4px solid #DC2626; padding-left: 1em; font-style: italic; color: #4b5563; background: #FEF2F2; padding: 1rem; border-radius: 0.75rem; }
                .tiptap-content img { border-radius: 0.75rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); margin: 2rem 0; }
                .tiptap-content a { color: #DC2626; text-decoration: underline; font-weight: 600; }
                .tiptap-content table { width: 100%; border-collapse: collapse; margin: 2rem 0; }
                .tiptap-content th { background: #F9FAFB; padding: 0.75rem; text-align: left; font-weight: 700; border: 1px solid #E5E7EB; color: #111827; }
                .tiptap-content td { padding: 0.75rem; border: 1px solid #E5E7EB; color: #374151; }
              `}</style>
              
              {/* Share Section */}
              <div className="border-t border-gray-150 pt-8 mt-8">
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-gray-900 text-sm tracking-tight uppercase">Share this article:</span>
                  <div className="flex space-x-4">
                    <button onClick={() => handleShare('facebook')} className="text-gray-400 hover:text-[#DC2626] transition-colors">
                      <span className="sr-only">Facebook</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </button>
                    <button onClick={() => handleShare('twitter')} className="text-gray-400 hover:text-[#DC2626] transition-colors">
                      <span className="sr-only">Twitter</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                    </button>
                    <button onClick={() => handleShare('linkedin')} className="text-gray-400 hover:text-[#DC2626] transition-colors">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Reviews Section */}
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

              {/* FAQs Section */}
              {faqs.length > 0 && (
                <section id="faqs" className="scroll-mt-32 border-t border-gray-150 pt-12">
                  <h2 className="text-2xl font-black text-gray-900 mb-8 tracking-tight">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {faqs.map((faq) => (
                      <div key={faq.id} className="border border-gray-150 rounded-2xl overflow-hidden bg-white shadow-sm">
                        <button
                          onClick={() => toggleFaq(faq.id)}
                          className="flex justify-between items-center w-full text-left p-4 font-extrabold text-xs tracking-tight text-gray-900 hover:bg-gray-50/30 focus:outline-none transition-colors"
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

              {/* Related Articles */}
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
                        src={authorBios[blog.author as keyof typeof authorBios]?.image || "/favicon/favicon.ico"}
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
                    {authorBios[blog.author as keyof typeof authorBios]?.description}
                  </p>
                  <a 
                    href={authorBios[blog.author as keyof typeof authorBios]?.linkedInUrl}
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
