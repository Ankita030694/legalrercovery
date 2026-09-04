import React from "react";
import Link from "next/link";
import { noticeLocationData } from "./locationData";

export const metadata = {
  title: "Legal Notice Services Online & by City | Legal Recovery",
  description:
    "Send a professional legal notice online from any city in India. Expert advocate-drafted notices for dues, tenancy, employment, and commercial disputes.",
  alternates: {
    canonical: "https://www.legalrecovery.in/legal-notice-services",
  },
};

export default function LegalNoticeServicesByCity() {
  return (
    <div className="min-h-screen bg-[#F8F9FB] text-[#111827] py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#111827 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1
            className="text-4xl md:text-6xl font-normal tracking-tight mb-6 mt-12 text-[#111827]"
            style={{ fontFamily: "var(--font-polysans)" }}
          >
            Send a{" "}
            <span className="text-[#DC2626]">Legal Notice</span> from Any City
          </h1>
          <p className="text-lg md:text-xl text-[#4B5563] max-w-4xl mx-auto font-light leading-relaxed">
            Browse our comprehensive directory of legal notice services across
            different cities in India. Get expert advocate-drafted legal notices
            sent on your behalf for disputes, defaults, and legal demands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {noticeLocationData.map((loc, index) => (
            <Link
              key={index}
              href={`/legal-notice-services/${loc.slug}`}
              className="bg-white/70 backdrop-blur-sm border border-black/5 hover:border-[#DC2626]/30 p-6 rounded-2xl transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] group hover:-translate-y-1 block relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#DC2626] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <p className="text-base md:text-lg font-medium text-[#111827] group-hover:text-[#DC2626] transition-colors leading-snug">
                {loc.title}
              </p>
              <div className="mt-4 flex items-center text-sm text-[#DC2626] font-medium opacity-100 transition-all duration-300">
                View Details{" "}
                <span className="ml-1 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* SEO Content Section */}
      <section className="mt-24 max-w-5xl mx-auto relative z-10 border-t border-[#111827]/5 pt-16 px-6 pb-12">
        <h2 className="text-[28px] md:text-[40px] font-semibold text-[#111827] mb-8 text-center" style={{ fontFamily: "var(--font-polysans)" }}>
          Professional Legal Notice Services Across India
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-[#4B5563] leading-relaxed text-lg">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#111827]">Why Send a Legal Notice?</h3>
            <p>
              A legal notice is a formal written communication sent by an advocate on behalf of a person or organization to another party, demanding that they fulfill a legal obligation. Under Indian law, sending a legal notice is often a mandatory prerequisite before filing a civil suit or criminal complaint. <strong>Legal Recovery</strong> provides professional legal notice drafting and dispatch services across all major Indian cities, ensuring your legal demands are communicated with authority and precision.
            </p>
            <p>
              Whether you need to demand unpaid wages from an employer, recover a security deposit from a landlord, enforce a contractual obligation, or issue a notice for deficiency of service, a well-drafted legal notice establishes your intent and creates a documented trail that strengthens your position in any subsequent legal proceedings.
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#111827]">How Our Legal Notice Service Works</h3>
            <p>
              Our platform connects you with experienced advocates who specialize in drafting and dispatching legal notices. Once you submit the details of your dispute, our advocate panel reviews the matter, drafts a professionally worded legal notice citing applicable laws and sections, and dispatches it via registered post and digital channels (email/WhatsApp) to the opposing party.
            </p>
            <p>
              Each notice is customized to the specific nature of the dispute and the jurisdiction of the city in which the opposing party operates. This localized approach ensures compliance with regional court procedures and maximizes the impact of the notice. At <strong>Legal Recovery</strong>, we make sending a legal notice as simple as filling out an online form — no office visits, no court appearances, and no hidden charges.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
