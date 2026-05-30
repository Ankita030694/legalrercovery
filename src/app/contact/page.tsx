"use client";

import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import {
  User,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Building2,
  Clock,
  Send,
  Loader2
} from "lucide-react";
import FAQSection, { FAQItem } from "@/components/FAQSection";

export default function ContactPage() {
  const router = useRouter();


  // Form Field States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceCategory, setServiceCategory] = useState("");
  const [state, setState] = useState("");
  const [message, setMessage] = useState("");

  // Validation UI Feedback States
  const [formTouched, setFormTouched] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Recovery Service Categories
  const serviceCategories = useMemo(() => [
    "Salary Delay Recovery",
    "Unpaid Freelancer Dues",
    "Rental Security Deposit",
    "Defective Consumer Grievance",
    "Other Legal Services"
  ], []);

  // Indian States & Union Territories
  const indianStates = useMemo(() => [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Jammu and Kashmir",
    "Ladakh",
    "Lakshadweep",
    "Puducherry"
  ], []);

  // Validation Handlers
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Allows ONLY alphabets and whitespaces
    const filteredValue = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    setName(filteredValue);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Allows ONLY numeric characters and max 10 digits
    const filteredValue = e.target.value.replace(/\D/g, "").slice(0, 10);
    setPhone(filteredValue);
  };

  // Real-time Email Validity Checker
  const isEmailValid = useMemo(() => {
    if (!email) return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }, [email]);

  const isPhoneValid = useMemo(() => {
    return phone.length === 10;
  }, [phone]);

  const isFormValid = useMemo(() => {
    return name.trim().length > 0 && isEmailValid && isPhoneValid && serviceCategory !== "" && state !== "" && message.trim().length > 0;
  }, [name, isEmailValid, isPhoneValid, serviceCategory, state, message]);

  // Form Submission Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormTouched(true);
    setSubmitError(null);

    if (!isFormValid) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          serviceCategory,
          state,
          message,
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setSubmitError(data?.error || "Failed to submit. Please try again.");
        setIsSubmitting(false);
        return;
      }

      setIsSubmitting(false);
      router.push("/contact/thank-you");
    } catch {
      setIsSubmitting(false);
      setSubmitError("Network error. Please try again.");
    }
  };

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
              <h3 className="text-lg md:text-xl font-black text-[#111827] border-b border-[#E5E7EB]/60 pb-3 flex items-center gap-2.5">
                <Building2 className="w-5 h-5 text-[#DC2626]" />
                Corporate Offices
              </h3>

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
              <h3 className="text-lg md:text-xl font-black text-[#111827] border-b border-[#E5E7EB]/60 pb-3 flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-[#DC2626]" />
                Support Operations
              </h3>

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

            <form onSubmit={handleSubmit} className="flex flex-col gap-6 select-none relative">
              <h2 className="text-xl sm:text-2xl font-black text-[#111827] border-b border-[#E5E7EB]/60 pb-3 text-left">
                Free Case Analysis Form
              </h2>

              {submitError && (
                <div className="rounded-xl border border-[#FCA5A5] bg-[#FEF2F2] px-4 py-3 text-xs sm:text-sm font-semibold text-[#991B1B]">
                  {submitError}
                </div>
              )}

              {/* Name Field */}
              <div className="flex flex-col text-left">
                <label htmlFor="form-name" className="text-xs sm:text-[13px] font-black text-[#111827] mb-2 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#DC2626]" />
                  Full Name <span className="text-[#DC2626] font-bold">*</span>
                </label>
                <div className="relative">
                  <input
                    id="form-name"
                    type="text"
                    required
                    value={name}
                    onChange={handleNameChange}
                    placeholder="Enter your name (alphabets only)"
                    className={`w-full bg-[#F9FAFB]/90 border ${formTouched && name.trim().length === 0 ? "border-[#DC2626] focus:ring-[#DC2626]/20 focus:border-[#DC2626]" : "border-[#E5E7EB] focus:ring-[#DC2626]/10 focus:border-[#DC2626]"} rounded-xl px-4 py-3 sm:py-3.5 text-xs sm:text-sm text-[#111827] placeholder-gray-400 focus:outline-none focus:ring-4 transition-all font-semibold`}
                  />
                  {name.trim().length > 0 && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-600">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                  )}
                </div>
                {formTouched && name.trim().length === 0 && (
                  <span className="text-[10px] text-[#DC2626] font-black mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    Name is required
                  </span>
                )}
              </div>

              {/* Grid 2 Columns for Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Phone Field */}
                <div className="flex flex-col text-left">
                  <label htmlFor="form-phone" className="text-xs sm:text-[13px] font-black text-[#111827] mb-2 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#DC2626]" />
                    Phone Number <span className="text-[#DC2626] font-bold">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="form-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={handlePhoneChange}
                      placeholder="10-digit mobile number"
                      className={`w-full bg-[#F9FAFB]/90 border ${formTouched && !isPhoneValid ? "border-[#DC2626] focus:ring-[#DC2626]/20 focus:border-[#DC2626]" : "border-[#E5E7EB] focus:ring-[#DC2626]/10 focus:border-[#DC2626]"} rounded-xl px-4 py-3 sm:py-3.5 text-xs sm:text-sm text-[#111827] placeholder-gray-400 focus:outline-none focus:ring-4 transition-all font-semibold`}
                    />
                    {isPhoneValid && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-600">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                  {formTouched && !isPhoneValid && (
                    <span className="text-[10px] text-[#DC2626] font-black mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {phone.length === 0 ? "Phone number is required" : "Must be exactly 10 numeric digits"}
                    </span>
                  )}
                </div>

                {/* Email Field */}
                <div className="flex flex-col text-left">
                  <label htmlFor="form-email" className="text-xs sm:text-[13px] font-black text-[#111827] mb-2 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#DC2626]" />
                    Email Address <span className="text-[#DC2626] font-bold">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="form-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className={`w-full bg-[#F9FAFB]/90 border ${formTouched && !isEmailValid ? "border-[#DC2626] focus:ring-[#DC2626]/20 focus:border-[#DC2626]" : "border-[#E5E7EB] focus:ring-[#DC2626]/10 focus:border-[#DC2626]"} rounded-xl px-4 py-3 sm:py-3.5 text-xs sm:text-sm text-[#111827] placeholder-gray-400 focus:outline-none focus:ring-4 transition-all font-semibold`}
                    />
                    {isEmailValid && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-600">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                  {formTouched && !isEmailValid && (
                    <span className="text-[10px] text-[#DC2626] font-black mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {email.length === 0 ? "Email address is required" : "Please enter a valid email address"}
                    </span>
                  )}
                </div>

              </div>

              {/* Grid 2 Columns for Service Category & State */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Service Category Dropdown */}
                <div className="flex flex-col text-left">
                  <label htmlFor="form-service" className="text-xs sm:text-[13px] font-black text-[#111827] mb-2 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-[#DC2626]" />
                    Service Category <span className="text-[#DC2626] font-bold">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="form-service"
                      required
                      value={serviceCategory}
                      onChange={(e) => setServiceCategory(e.target.value)}
                      className={`w-full bg-[#F9FAFB]/90 border ${formTouched && serviceCategory === "" ? "border-[#DC2626] focus:ring-[#DC2626]/20 focus:border-[#DC2626]" : "border-[#E5E7EB] focus:ring-[#DC2626]/10 focus:border-[#DC2626]"} rounded-xl px-4 py-3 sm:py-3.5 text-xs sm:text-sm text-[#111827] placeholder-gray-400 focus:outline-none focus:ring-4 transition-all font-semibold appearance-none cursor-pointer`}
                    >
                      <option value="" disabled hidden>Select recovery service</option>
                      {serviceCategories.map((cat, idx) => (
                        <option key={idx} value={cat}>{cat}</option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    {serviceCategory !== "" && (
                      <div className="absolute right-10 top-1/2 -translate-y-1/2 text-emerald-600">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                  {formTouched && serviceCategory === "" && (
                    <span className="text-[10px] text-[#DC2626] font-black mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      Please select a service category
                    </span>
                  )}
                </div>

                {/* State Dropdown */}
                <div className="flex flex-col text-left">
                  <label htmlFor="form-state" className="text-xs sm:text-[13px] font-black text-[#111827] mb-2 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#DC2626]" />
                    State / Union Territory <span className="text-[#DC2626] font-bold">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="form-state"
                      required
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      className={`w-full bg-[#F9FAFB]/90 border ${formTouched && state === "" ? "border-[#DC2626] focus:ring-[#DC2626]/20 focus:border-[#DC2626]" : "border-[#E5E7EB] focus:ring-[#DC2626]/10 focus:border-[#DC2626]"} rounded-xl px-4 py-3 sm:py-3.5 text-xs sm:text-sm text-[#111827] placeholder-gray-400 focus:outline-none focus:ring-4 transition-all font-semibold appearance-none cursor-pointer`}
                    >
                      <option value="" disabled hidden>Select your state</option>
                      {indianStates.map((st, idx) => (
                        <option key={idx} value={st}>{st}</option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    {state !== "" && (
                      <div className="absolute right-10 top-1/2 -translate-y-1/2 text-emerald-600">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                  {formTouched && state === "" && (
                    <span className="text-[10px] text-[#DC2626] font-black mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      Please select your state
                    </span>
                  )}
                </div>

              </div>

              {/* Message Field */}
              <div className="flex flex-col text-left">
                <label htmlFor="form-message" className="text-xs sm:text-[13px] font-black text-[#111827] mb-2 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-[#DC2626]" />
                  Your Message / Case Details <span className="text-[#DC2626] font-bold">*</span>
                </label>
                <textarea
                  id="form-message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Explain your situation in detail. E.g., delayed outstanding balance, duration of pending salary, employer or tenant details..."
                  className={`w-full bg-[#F9FAFB]/90 border ${formTouched && message.trim().length === 0 ? "border-[#DC2626] focus:ring-[#DC2626]/20 focus:border-[#DC2626]" : "border-[#E5E7EB] focus:ring-[#DC2626]/10 focus:border-[#DC2626]"} rounded-xl px-4 py-3 sm:py-3.5 text-xs sm:text-sm text-[#111827] placeholder-gray-400 focus:outline-none focus:ring-4 transition-all font-semibold resize-none`}
                />
                {formTouched && message.trim().length === 0 && (
                  <span className="text-[10px] text-[#DC2626] font-black mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    Message details are required
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 sm:py-4 text-xs sm:text-[13.5px] font-black text-white bg-[#DC2626] hover:bg-[#B91C1C] disabled:bg-[#DC2626]/80 rounded-xl transition-all duration-200 shadow-md shadow-red-950/30 cursor-pointer flex items-center justify-center gap-2 hover:-translate-y-0.5"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Analyzing Case Details...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit For Analysis
                  </>
                )}
              </button>

            </form>

          </div>

        </div>

      </main>

      <FAQSection faqs={contactFaqs} heading="Contact & Support FAQs" subheading="Find answers to common questions about reaching us and getting help." />

    </div>
  );
}
