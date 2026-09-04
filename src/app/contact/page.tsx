"use client";

import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Building2,
  Clock,
} from "lucide-react";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import { RecoveryForm } from "@/components/RecoveryForm";

export default function ContactPage() {
  const contactFaqs: FAQItem[] = [
    {
      question: "How quickly will LegalRecovery respond to my inquiry?",
      answer: "Our legal team typically responds within 24 hours of receiving your inquiry. For urgent cases, you can call our toll-free helpline at 1800-309-8480 during business hours (Monday to Saturday, 9 AM – 7 PM IST) for immediate assistance."
    },
    {
      question: "What information should I include in my case submission?",
      answer: "Please provide as much detail as possible including the amount owed, the name of the person or entity who owes you, any supporting documents such as agreements, invoices, chat screenshots, bank transfer receipts, and the duration of the outstanding dues."
    },
    {
      question: "Can I track the status of my case after submitting?",
      answer: "Yes. Once your case is initiated, you will receive access to a live case tracking dashboard where you can monitor every stage — from notice drafting and dispatch to delivery confirmation and respondent follow-up — in real time."
    },
    {
      question: "Is the initial case consultation free?",
      answer: "Yes, the initial case analysis is completely free. Submit your details through our contact form and our legal experts will evaluate your situation, assess the merits of your case, and recommend the best course of action at no cost."
    },
    {
      question: "What are your office hours and support channels?",
      answer: "Our support team is available Monday to Saturday, 9:00 AM to 7:00 PM IST. You can reach us via our toll-free number 1800-309-8480, email at support@legalrecovery.in, or by submitting the contact form on this page. We also offer WhatsApp support for quick queries."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FB] text-[#111827] font-sans antialiased overflow-x-hidden relative">

      {/* ================= MAIN CONTENT ================= */}
      <main className="pt-32 pb-16 md:pb-24 px-4 sm:px-6 md:px-16 max-w-8xl mx-auto overflow-hidden relative">

        {/* Ambient Lights */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] red-radial-glow -z-10 pointer-events-none rounded-full blur-[100px] opacity-40" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] red-radial-glow -z-10 pointer-events-none rounded-full blur-[80px] opacity-25" />

        {/* Hero Section */}
        <div className="text-left w-full max-w-8xl mx-auto mb-12 md:mb-16 pt-6 sm:pt-8 md:pt-12">
          <h1 className="text-3xl sm:text-4xl md:text-[52px] font-black tracking-tight text-[#111827] leading-[1.1] mb-4 select-text">
            Get In Touch With <br />
            Our <span className="text-[#DC2626]">Legal Experts</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#6B7280] font-semibold leading-relaxed max-w-2xl select-text">
            Submit your details below. Our legal advocates will analyze your case and reach back to you within 24 hours.
          </p>
        </div>

        {/* Split Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative mb-12 md:mb-20">
          
          {/* Left Column: Office details & Support hubs */}
          <div className="lg:col-span-5 flex flex-col gap-6 order-2 lg:order-1">
            
            {/* Card 1: Support Hubs */}
            <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 md:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.01)] flex flex-col gap-6">
              <h2 className="text-lg md:text-xl font-black text-[#111827] border-b border-[#E5E7EB]/60 pb-3 flex items-center gap-2.5">
                <Building2 className="w-5 h-5 text-[#DC2626]" />
                Corporate Offices
              </h2>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left select-text">
                  <span className="text-sm font-black text-[#111827]">
                    Our headquarters are located in Gurugram.
                  </span>
                </div>
              </div>

            </div>

            {/* Card 2: Contact Hours */}
            <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 md:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.01)] flex flex-col gap-6">
              <h2 className="text-lg md:text-xl font-black text-[#111827] border-b border-[#E5E7EB]/60 pb-3 flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-[#DC2626]" />
                Support Operations
              </h2>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left select-text">
                  <span className="text-sm font-black text-[#111827]">Working Hours</span>
                  <span className="text-xs text-[#6B7280] font-semibold mt-1 leading-normal">
                    Monday to Saturday: 9:00 AM – 7:00 PM IST
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left select-text">
                  <span className="text-sm font-black text-[#111827]">Email Support</span>
                  <span className="text-xs text-[#6B7280] font-semibold mt-1 leading-normal">
                    support@legalrecovery.in
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left select-text">
                  <span className="text-sm font-black text-[#111827]">Toll-Free Helpline</span>
                  <span className="text-xs text-[#6B7280] font-semibold mt-1 leading-normal">
                    1800-309-8480 (Toll-Free)
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Premium Form Card */}
          <div className="lg:col-span-7 bg-white border border-[#E5E7EB] rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.015)] relative order-1 lg:order-2">
            
            {/* Ambient Background glow inside form */}
            <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-red-50/50 rounded-full blur-3xl -z-10 pointer-events-none" />

            <RecoveryForm />

          </div>

        </div>

      </main>

      <FAQSection faqs={contactFaqs} heading="Contact & Support FAQs" subheading="Find answers to common questions about reaching us and getting help." />

    </div>
  );
}
