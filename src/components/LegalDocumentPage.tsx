import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { LegalDocument } from "@/lib/legal-content";

function renderLineWithLinks(line: string, privacyHref: string) {
  if (!line.includes("Privacy Policy")) {
    return line;
  }

  const parts = line.split(/(Privacy Policy)/g);
  return parts.map((part, index) =>
    part === "Privacy Policy" ? (
      <Link
        key={index}
        href={privacyHref}
        className="text-[#DC2626] font-semibold hover:underline"
      >
        Privacy Policy
      </Link>
    ) : (
      <span key={index}>{part}</span>
    )
  );
}

function ItemList({ items }: { items: string[] }) {
  if (items.length === 0) return null;

  return (
    <ul className="mt-3 space-y-2 list-disc pl-5 marker:text-[#DC2626]">
      {items.map((item, index) => (
        <li key={index} className="text-[15px] text-[#4B5563] leading-relaxed pl-1">
          {item}
        </li>
      ))}
    </ul>
  );
}

type LegalDocumentPageProps = {
  document: LegalDocument;
  breadcrumbLabel: string;
  breadcrumbHref: string;
  privacyPolicyHref?: string;
};

export default function LegalDocumentPage({
  document,
  breadcrumbLabel,
  breadcrumbHref,
  privacyPolicyHref = "/privacy-policy",
}: LegalDocumentPageProps) {
  return (
    <div className="bg-[#F8F9FB] min-h-screen">
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-14">
          <Breadcrumbs items={[{ label: breadcrumbLabel, href: breadcrumbHref }]} />
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#111827] tracking-tight mb-3">
            {document.title}
          </h1>
          <p className="text-sm font-semibold text-[#6B7280]">
            Legal Recovery · Effective {document.effectiveDate}
          </p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-14 pb-20">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-10 space-y-10">
          {document.intro.length > 0 && (
            <div className="space-y-4 pb-2 border-b border-gray-100">
              {document.intro.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[15px] md:text-base text-[#4B5563] leading-relaxed"
                >
                  {renderLineWithLinks(paragraph, privacyPolicyHref)}
                </p>
              ))}
            </div>
          )}

          {document.sections.map((section) => (
            <section key={section.number} id={`section-${section.number}`}>
              <h2 className="text-lg md:text-xl font-extrabold text-[#111827] mb-4">
                {section.number}. {section.title}
              </h2>

              {section.intro.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[15px] text-[#4B5563] leading-relaxed mb-3"
                >
                  {renderLineWithLinks(paragraph, privacyPolicyHref)}
                </p>
              ))}

              {section.subsections.map((subsection, index) => (
                <div key={index} className="mt-5">
                  <h3 className="text-base font-bold text-[#1E293B] mb-2">
                    {subsection.title}
                  </h3>
                  <ItemList items={subsection.items} />
                </div>
              ))}

              <ItemList items={section.items} />
            </section>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-[#6B7280]">
          Questions?{" "}
          <a
            href="mailto:support@legalrecovery.in"
            className="text-[#DC2626] font-semibold hover:underline"
          >
            support@legalrecovery.in
          </a>
        </p>
      </article>
    </div>
  );
}
