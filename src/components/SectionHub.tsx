import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_URL } from "@/lib/site";
import { ALL_SITEMAP_PAGES } from "@/app/sitemap/sitemapData";

export type HubItem = { slug: string; title: string; desc: string };
export type HubGroup = { heading: string; items: HubItem[] };
export type HubLink = { href: string; label: string };

const OG_IMAGE = `${SITE_URL}/blog_money_recovery.png`;

/** Metadata for a section index page such as /tools or /law. */
export function hubMetadata({
  path,
  title,
  description,
  locale = "en_IN",
}: {
  path: string;
  title: string;
  description: string;
  locale?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: "LegalRecovery.in",
      locale,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: "@legalrecoveryin",
      creator: "@legalrecoveryin",
      images: [OG_IMAGE],
    },
    robots: { index: true, follow: true },
  };
}

type Props = {
  /** Section path without a trailing slash, e.g. "/tools". */
  path: string;
  /** Breadcrumb label. */
  crumb: string;
  /** Name used in the ItemList schema (normally the page title). */
  schemaName: string;
  heading: string;
  /** Receives the number of pages listed, so the intro never goes stale. */
  intro: (count: number) => ReactNode;
  groups: HubGroup[];
  moreHeading?: string;
  relatedHeading?: string;
  related?: HubLink[];
};

/**
 * Index page for a section whose pages live at `${path}/<slug>`.
 * The curated groups come first. Any other page of the section found in the HTML sitemap data
 * is listed under "more", so a newly published page is linked from its hub without editing it.
 */
export default function SectionHub({
  path,
  crumb,
  schemaName,
  heading,
  intro,
  groups,
  moreHeading = "More in this section",
  relatedHeading = "Related",
  related = [],
}: Props) {
  const pageUrl = `${SITE_URL}${path}`;
  const curated = groups.flatMap((g) => g.items);

  const listed = new Set(curated.map((t) => `${path}/${t.slug}`));
  const more = ALL_SITEMAP_PAGES.filter((p) => {
    if (!p.href.startsWith(`${path}/`) || listed.has(p.href)) return false;
    listed.add(p.href); // the sitemap data repeats some entries
    return true;
  }).sort((a, b) => a.title.localeCompare(b.title));

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: schemaName,
    itemListElement: [
      ...curated.map((t) => ({ name: t.title, url: `${pageUrl}/${t.slug}` })),
      ...more.map((p) => ({ name: p.title, url: `${SITE_URL}${p.href}` })),
    ].map((item, i) => ({ "@type": "ListItem", position: i + 1, ...item })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: crumb, item: pageUrl },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="w-full min-h-screen bg-slate-50 text-slate-900">
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800">
          <div className="max-w-5xl mx-auto w-full">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight leading-tight mb-4 sm:mb-6">
              {heading}
            </h1>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl">
              {intro(curated.length + more.length)}
            </p>
          </div>
        </section>

        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16 space-y-10 sm:space-y-12">
          <Breadcrumbs items={[{ label: crumb, href: path }]} />

          {groups.map((g) => (
            <section key={g.heading} className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">{g.heading}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {g.items.map((t) => (
                  <Link
                    key={t.slug}
                    href={`${path}/${t.slug}`}
                    className="block bg-white rounded-xl border border-slate-200 p-4 sm:p-5 hover:border-[#DC2626] hover:shadow-md transition-all"
                  >
                    <h3 className="font-bold text-slate-900 mb-1.5">{t.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{t.desc}</p>
                  </Link>
                ))}
              </div>
            </section>
          ))}

          {more.length > 0 && (
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">{moreHeading}</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-slate-700">
                {more.map((p) => (
                  <li key={p.href}>
                    <Link href={p.href} className="text-red-600 underline">{p.title}</Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {related.length > 0 && (
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">{relatedHeading}</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-slate-700">
                {related.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-red-600 underline">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </>
  );
}
