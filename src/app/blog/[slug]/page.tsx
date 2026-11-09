import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { ObjectId } from "mongodb";
import { getDbAndBucket } from "@/lib/mongodb";
import { SITE_URL } from "@/lib/site";
import BlogDetailClient, { Blog, FAQ, Review } from "./BlogDetailClient";

function cleanBlogContent(raw: string): string {
  if (!raw) return "";
  return raw
    .replace(/href=["']\/services\/legal-strategy["']/gi, 'href="/services"')
    .replace(/href=["']\/legal-notice-to-bank-format["']/gi, 'href="/online-legal-notice"')
    .replace(/href=["']\/how-can-i-send-legal-notice["']/gi, 'href="/online-legal-notice"')
    .replace(/href=["']\/resources["']/gi, 'href="/blog"')
    .replace(/href=["'](?:https?:\/\/(?:www\.)?legalrecovery\.in)?\/delayed-payment-interest-calculator\/?["']/gi, 'href="/tools/msme-delayed-payment-interest-calculator"')
    .replace(/href=["'](?:https?:\/\/(?:www\.)?legalrecovery\.in)?\/amazon-refund-not-received-legal-notice\/?["']/gi, 'href="/legal-notice-to/amazon"')
    .replace(/href=["'](?:https?:\/\/(?:www\.)?legalrecovery\.in)?\/consumer-court-complaint-drafting-services\/?["']/gi, 'href="/services/refunds-and-consumer-complaints"')
    .replace(/href=["'](?:https?:\/\/(?:www\.)?legalrecovery\.in)?\/unpaid-invoices-recovery-guide-for-indian-businesses\/?["']/gi, 'href="/recovery/unpaid-invoices"')
    .replace(/href=["'](?:https?:\/\/(?:www\.)?legalrecovery\.in)?\/commercial-court-summary-suit-recovery-delhi-mumbai-bangalore\/?["']/gi, 'href="/law/order-37-summary-suit-money-recovery"')
    .replace(/href=["'](?:https?:\/\/(?:www\.)?legalrecovery\.in)?\/msme-delayed-payment-interest-recovery-guide\/?["']/gi, 'href="/msme-delayed-payment-recovery-samadhan-vs-legal-notice"');
}

function mapDatabaseBlog(item: any): Blog {
  const rawContent = cleanBlogContent(item.description || item.content || "");
  
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

  let infographicUrl = "";
  if (typeof item.infographicImage === "string") {
    infographicUrl = item.infographicImage;
  } else if (item.infographicImage?.gridFsId) {
    infographicUrl = `/api/blog/image/${item.infographicImage.gridFsId}`;
  }

  return {
    id: String(item._id || item.id),
    title: item.title || "Untitled Article",
    subtitle: item.subtitle || item.subtitleKeywords || "",
    description: rawContent,
    date: formattedDate,
    image: imageUrl,
    infographicImage: infographicUrl,
    slug: item.slug || "",
    author: "Anuj Anand Malik",
    created: item.created || (item.createdAt ? new Date(item.createdAt).getTime() : Date.now()),
    metaTitle: item.metaTitle || item.title || "",
    metaDescription: item.metaDescription || item.subtitle || item.subtitleKeywords || "",
    popularSearches: Array.isArray(item.popularSearches) ? item.popularSearches : []
  };
}

function mapFaqs(item: any): FAQ[] {
  const rawFaqs = item.faqs || [];
  return rawFaqs.map((f: any, idx: number) => ({
    id: String(f._id || f.id || idx),
    question: f.question || "",
    answer: f.answer || ""
  }));
}

function mapReviews(item: any): Review[] {
  const rawReviews = item.reviews || item.reviewSnippets || [];
  return rawReviews.map((r: any, idx: number) => ({
    id: String(r._id || r.id || idx),
    name: r.name || r.reviewerName || "Anonymous",
    rating: typeof r.rating === "number" ? r.rating : 5,
    review: r.review || r.reviewText || ""
  }));
}

const BLOG_TITLE_OVERRIDES: Record<string, string> = {
  "flipkart-amazon-open-box-delivery-otp-defective-refund-denied-recovery":
    "Flipkart/Amazon Open Box Delivery Refund Denied: Fix",
  "subcontractor-retention-money-recovery-pay-when-paid-clause-india":
    "Subcontractor Retention Money Recovery Guide India",
  "amazon-flipkart-refund-initiated-not-credited-bank-arn-rrn-rbi-compensation":
    "Refund Initiated (ARN/RRN) Not in Bank? Recovery Steps",
  "msme-odr-portal-vs-order-37-summary-suit-unpaid-invoice-recovery":
    "MSME ODR vs Order 37 Summary Suit: Invoice Recovery",
  "amazon-flipkart-meesho-seller-payment-hold-account-deactivation-recovery":
    "Amazon & Flipkart Seller Payment Hold Payout Recovery",
  "section-43bh-income-tax-msme-45-day-payment-recovery-legal-notice":
    "Section 43B(h) & MSME 45-Day Invoice Recovery Playbook",
  "recover-split-rent-deposit-bills-from-ex-flatmate-roommate-india":
    "Recover Rent, Bills & Deposit from Flatmate in India",
  "client-withholding-final-milestone-invoice-fake-quality-dispute-recovery":
    "Client Holding Invoice Citing Quality Issues: Recovery",
  "borrower-blocked-on-whatsapp-changed-address-money-recovery":
    "Borrower Blocked You or Moved? Legal Notice & Recovery",
  "recover-unpaid-salary-fnf-insolvent-shutting-down-startup-directors":
    "Recover Unpaid Startup Salary & FNF: Legal Action",
};

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const { db } = await getDbAndBucket("fs");
  
  let blog = await db.collection("blogs").findOne({ slug: slug.toLowerCase() });

  if (!blog && ObjectId.isValid(slug)) {
    blog = await db.collection("blogs").findOne({ _id: new ObjectId(slug) });
  }

  if (!blog) {
    return {
      title: "Article Not Found | LegalRecovery",
      description: "The requested legal article could not be found."
    };
  }

  const slugKey = (blog.slug || slug || "").toLowerCase();
  const overrideTitle = BLOG_TITLE_OVERRIDES[slugKey];
  let pageTitle: string;
  if (overrideTitle) {
    pageTitle = overrideTitle;
  } else {
    const rawTitle = blog.metaTitle || blog.title || "Legal Article";
    if (rawTitle.toLowerCase().includes("legalrecovery") || rawTitle.length > 42) {
      pageTitle = rawTitle;
    } else {
      pageTitle = `${rawTitle} | LegalRecovery`;
    }
  }

  const metaDescription = blog.metaDescription || blog.subtitle || blog.subtitleKeywords || "";

  let imageUrl = "/blog_money_recovery.png";
  if (blog.image) {
    imageUrl = blog.image;
  } else if (blog.coverImage?.gridFsId) {
    imageUrl = `/api/blog/image/${blog.coverImage.gridFsId}`;
  }
  const absoluteImageUrl = imageUrl.startsWith("http") ? imageUrl : `${SITE_URL}${imageUrl}`;

  return {
    title: pageTitle,
    description: metaDescription,
    alternates: {
      canonical: `/blog/${blog.slug}`,
      ...(blog.slug === "koi-paisa-na-de-to-kya-kare"
        ? {
            languages: {
              "en-IN": `${SITE_URL}/blog/koi-paisa-na-de-to-kya-kare`,
              "hi-IN": `${SITE_URL}/hi/udhar-paisa-wapas-kaise-le`,
            },
          }
        : blog.slug === "legal-notice-kaise-bheje-step-by-step-guide"
        ? {
            languages: {
              "en-IN": `${SITE_URL}/blog/legal-notice-kaise-bheje-step-by-step-guide`,
              "hi-IN": `${SITE_URL}/hi/legal-notice-kaise-bheje`,
            },
          }
        : {}),
    },
    openGraph: {
      title: pageTitle,
      description: metaDescription,
      type: "article",
      images: [
        {
          url: absoluteImageUrl
        }
      ]
    }
  };
}

export default async function BlogDetailPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const { db } = await getDbAndBucket("fs");

  let blogDoc = await db.collection("blogs").findOne({ slug: slug.toLowerCase() });

  // If not found by slug, check if the parameter is a valid MongoDB ObjectId
  if (!blogDoc && ObjectId.isValid(slug)) {
    blogDoc = await db.collection("blogs").findOne({ _id: new ObjectId(slug) });
    if (blogDoc && blogDoc.slug) {
      redirect(`/blog/${blogDoc.slug}`);
    }
  }

  if (!blogDoc) {
    notFound();
  }

  const blog = mapDatabaseBlog(blogDoc);
  const faqs = mapFaqs(blogDoc);
  const reviews = mapReviews(blogDoc);

  // Fetch candidate blogs and pick the 4 most topically relevant articles
  const candidateDocs = await db
    .collection("blogs")
    .find(
      { slug: { $ne: blogDoc.slug } },
      {
        projection: {
          title: 1,
          subtitle: 1,
          subtitleKeywords: 1,
          metaDescription: 1,
          image: 1,
          coverImage: 1,
          date: 1,
          publishedAt: 1,
          createdAt: 1,
          slug: 1,
        },
      }
    )
    .sort({ createdAt: -1, _id: -1 })
    .limit(60)
    .toArray();

  const stopWords = new Set([
    "the", "and", "for", "with", "from", "how", "what", "when", "where", "why",
    "can", "you", "your", "india", "indian", "legal", "recovery", "guide", "steps",
    "complete", "online", "action", "after", "without", "under", "into", "over",
  ]);
  const currentTokens = new Set(
    `${blog.title} ${blog.subtitle} ${blog.metaDescription}`
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, " ")
      .split(/\s+/)
      .filter((w) => w.length > 3 && !stopWords.has(w))
  );

  const scoredDocs = candidateDocs
    .map((doc, idx) => {
      const text = `${doc.title || ""} ${doc.subtitle || doc.subtitleKeywords || ""} ${doc.metaDescription || ""}`.toLowerCase();
      let score = 0;
      for (const token of currentTokens) {
        if (text.includes(token)) score += 2;
      }
      // Slight boost for newer posts to ensure fresh crawl discovery
      score += Math.max(0, (30 - idx) * 0.05);
      return { doc, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map((item) => item.doc);

  const relatedBlogs = scoredDocs.map(mapDatabaseBlog);

  const postUrl = `${SITE_URL}/blog/${blog.slug}`;
  const absoluteImageUrl = blog.image
    ? (blog.image.startsWith("http") ? blog.image : `${SITE_URL}${blog.image}`)
    : `${SITE_URL}/blog_money_recovery.png`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": postUrl,
    },
    "headline": blog.title,
    "description": blog.metaDescription || blog.subtitle || "",
    "image": absoluteImageUrl,
    "datePublished": blogDoc.publishedAt || blogDoc.createdAt || new Date().toISOString(),
    "dateModified": blogDoc.updatedAt || blogDoc.publishedAt || blogDoc.createdAt || new Date().toISOString(),
    "author": {
      "@type": "Person",
      "name": "Anuj Anand Malik",
      "url": "https://www.linkedin.com/in/iamanujmalik/",
    },
    "publisher": {
      "@type": "Organization",
      "name": "LegalRecovery",
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/lrlogo.svg`,
      },
    },
  };

  const faqSchema = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  } : null;

  // Reviews must live on a Google-supported type (LegalService / LocalBusiness),
  // NOT on BlogPosting, otherwise the validator rejects them.
  const ratingSum = reviews.reduce((sum, r) => sum + r.rating, 0);
  const avgRating = reviews.length > 0 ? Number((ratingSum / reviews.length).toFixed(1)) : 5;

  const reviewSchema = reviews.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "LegalRecovery",
    "image": `${SITE_URL}/lrlogo.svg`,
    "url": SITE_URL,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": avgRating,
      "reviewCount": reviews.length,
      "bestRating": "5",
      "worstRating": "1",
    },
    "review": reviews.map((r) => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": r.rating,
        "bestRating": "5",
        "worstRating": "1",
      },
      "author": {
        "@type": "Person",
        "name": r.name,
      },
      "reviewBody": r.review,
    })),
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {reviewSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
        />
      )}
      <BlogDetailClient
        blog={blog}
        faqs={faqs}
        reviews={reviews}
        relatedBlogs={relatedBlogs}
      />
    </>
  );
}

