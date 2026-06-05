import React from "react";
import Link from "next/link";
import { locationData } from "./locationData";

export const metadata = {
  title: "Legal Recovery Services by City | Legal Recovery",
  description:
    "Find the best advocate panel for legal recovery and debt collection across various cities in India. Get expert legal assistance with Legal Recovery.",
};

export default function LawyerByCity() {
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
            Find the Best{" "}
            <span className="text-[#DC2626]">Legal Recovery Services</span>
          </h1>
          <p className="text-lg md:text-xl text-[#4B5563] max-w-4xl mx-auto font-light leading-relaxed">
            Browse our comprehensive directory of top-rated advocates across
            different cities in India. We can assist you in finding the right
            professional for your legal recovery needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locationData.map((loc, index) => (
            <Link
              key={index}
              href={`/legal-recovery-by-city/${loc.slug}`}
              className="bg-white/70 backdrop-blur-sm border border-black/5 hover:border-[#DC2626]/30 p-6 rounded-2xl transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] group hover:-translate-y-1 block relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#DC2626] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="text-base md:text-lg font-medium text-[#111827] group-hover:text-[#DC2626] transition-colors leading-snug">
                {loc.title}
              </h3>
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
          Expert Legal Representation Across Major Cities in India
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-[#4B5563] leading-relaxed text-lg">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#111827]">The Importance of Local Legal Knowledge</h3>
            <p>
              Legal matters are deeply influenced by regional regulations, local court procedures, and the specific nuances of state-level laws. Finding a lawyer who is not only an expert in their field but also well-versed in the local legal environment is crucial for success. <strong>Legal Recovery</strong> provides a curated directory of top-rated advocates across major Indian cities, including New Delhi, Mumbai, Bengaluru, Chennai, Kolkata, and beyond.
            </p>
            <p>
              Each city in India has its own judicial landscape, from District Courts and High Courts to specialized tribunals like the NCLT, DRT, and Consumer Commissions. Our local legal experts understand how these institutions operate in their respective regions.
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#111827]">Navigating Local Courts and Tribunals</h3>
            <p>
              This localized approach allows us to provide more strategic and efficient legal services, as our advocates can navigate the procedural requirements of local courts with ease. Whether you need assistance with property documentation in Jaipur, a salary recovery in Delhi, or corporate compliance in Mumbai, our city-specific legal directory is here to help.
            </p>
            <p>
              We understand that finding a reliable lawyer in a new city or for a specific local matter can be daunting. Our platform is designed to simplify this process by connecting you with experienced professionals who have a proven track record in their respective cities. At <strong>Legal Recovery</strong>, we bridge the gap between clients and quality advocacy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
