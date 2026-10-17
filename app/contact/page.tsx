"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  PhoneCall,
  Mail,
  MapPin,
  MessageSquare,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Zap,
  ArrowRight,
  Menu,
  X,
  MessageCircle,
  HelpCircle,
  ChevronDown,
  Calendar
} from "lucide-react";

export default function ContactPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    phone: "",
    email: "",
    plan: "software_and_api",
    expectedVolume: "50000",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setFormSubmitted(true);
  };

  const faqs = [
    {
      q: "API aur CRM access kitne time mein activate hota hai?",
      a: "Instant! Aap jaise hi contact form submit karte hain ya hamari team se connect karte hain, 2 minute ke andar aapka dashboard login aur WhatsApp Cloud API credentials provide kar diye jaate hain."
    },
    {
      q: "Kya WhatsApp number par verification (Green Tick) mein assistance milegi?",
      a: "Haan, bilkul. Gentro Technologies ki dedicated technical team aapke official Meta Business verification aur WhatsApp Green Tick approval process mein step-by-step free assistance provide karti hai."
    },
    {
      q: "Software license aur message cost kaise pay karna hoga?",
      a: "WhatsApp API & CRM Software ka ₹7,999 yearly subscription aap UPI, Net Banking, ya Credit/Debit card se pay kar sakte hain. Messaging credits (₹0.15/msg) ke liye aap flexibly dashboard se wallet recharge kar sakte hain."
    },
    {
      q: "Kya hum custom integrations (Shopify, ERP, Custom Database) ke liye support le sakte hain?",
      a: "Haan! Hamare engineers aapke developer team ke saath video call ya remote session par connect karke custom webhooks, REST API endpoints, aur automated abandoned cart workflows set up karwa dete hain."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-emerald-500 selection:text-white relative">
      {/* Top Banner Accent */}
      <div className="h-1 bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-600 w-full" />

      {/* ========================================================= */}
      {/* HEADER / NAVBAR */}
      {/* ========================================================= */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.04)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center group">
            <img
              src="https://ik.imagekit.io/0s0fb4b2b/Gentro/Glossy%20Gentro%20Technologies%20Logo.png"
              alt="Gentro Technologies Logo"
              className="h-9 sm:h-12 md:h-16 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-slate-600">
            <Link href="/" className="hover:text-emerald-600 transition-colors">
              Home
            </Link>
            <Link href="/services" className="hover:text-emerald-600 transition-colors">
              Services
            </Link>
            <Link href="/pricing" className="hover:text-emerald-600 transition-colors">
              Pricing
            </Link>
            <Link href="/contact" className="text-emerald-600 font-semibold relative py-1">
              Contact
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-600 rounded-full"></span>
            </Link>
          </nav>

          {/* Right Action */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://calendar.app.google/HE3fCD4eECoADNaG8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-5 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg hover:scale-105"
            >
              <Calendar className="w-4 h-4 text-emerald-100" />
              <span>Book Demo</span>
            </a>

            <a
              href="https://wa.me/918084037252?text=Hello%20Gentro%20Technologies%2C%20I%20am%20interested%20in%20WhatsApp%20API%20%26%20CRM%20Software"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-emerald-600 text-white font-bold text-sm px-4 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>

            <a
              href="tel:+918084037252"
              className="inline-flex items-center gap-2 bg-[#091E28] hover:bg-slate-900 text-white font-semibold text-sm px-4 py-2.5 rounded-full transition-all shadow-md"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>+91 8084037252</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href="tel:+918084037252"
              className="p-2 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200"
              aria-label="Call Gentro"
            >
              <PhoneCall className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors text-slate-700"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/98 backdrop-blur-lg border-b border-slate-200 px-4 pt-3 pb-5 space-y-3 shadow-xl">
            <nav className="flex flex-col space-y-1.5 text-sm font-medium text-slate-700">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-1.5 rounded-lg hover:bg-slate-50 hover:text-emerald-600 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-1.5 rounded-lg hover:bg-slate-50 hover:text-emerald-600 transition-colors"
              >
                Services
              </Link>
              <Link
                href="/pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-1.5 rounded-lg hover:bg-slate-50 hover:text-emerald-600 transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 font-semibold"
              >
                Contact
              </Link>
            </nav>
            <div className="pt-2.5 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="https://wa.me/918084037252?text=Hello%20Gentro%20Technologies%2C%20I%20am%20interested%20in%20WhatsApp%20API%20%26%20CRM%20Software"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-2.5 rounded-xl shadow-xs text-xs"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp (+91 8084037252)</span>
              </a>
              <a
                href="tel:+918084037252"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#091E28] text-white font-bold py-2.5 rounded-xl shadow-xs text-xs"
              >
                <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                <span>Call +91 8084037252</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ========================================================= */}
      {/* HERO SECTION */}
      {/* ========================================================= */}
      <section className="relative pt-8 pb-10 sm:pt-14 sm:pb-16 lg:pt-20 lg:pb-24 overflow-hidden bg-gradient-to-b from-slate-900 via-[#071d24] to-[#04282B] text-white">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto space-y-3 sm:space-y-5">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-[11px] sm:text-sm font-semibold tracking-wide backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 animate-pulse" />
            <span>24/7 Enterprise Support & Sales</span>
            <span className="text-emerald-400">✦</span>
            <span>2-Min Response</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15]">
            Let’s Grow Your Business With{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-[#00D084] bg-clip-text text-transparent">
              WhatsApp Marketing
            </span>
          </h1>

          <p className="text-slate-300 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
            WhatsApp Business API activation, Multi-Agent CRM demo, ya pricing query ke liye hamari team se direct connect karein.
          </p>

          {/* Quick Contact Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 pt-1 sm:pt-2">
            <a
              href="https://calendar.app.google/HE3fCD4eECoADNaG8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-base px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-full transition-all shadow-md hover:shadow-emerald-500/25 hover:scale-105 group"
            >
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-100" />
              <span>Book 1-on-1 Demo</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="https://wa.me/918084037252?text=Hello%20Gentro%20Technologies%2C%20I%20am%20interested%20in%20WhatsApp%20API%20%26%20CRM%20Software"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-emerald-600 text-white font-bold text-xs sm:text-base px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-full transition-all shadow-md hover:scale-105 group"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
              <span>WhatsApp (+91 8084037252)</span>
            </a>

            <a
              href="tel:+918084037252"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-base px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-full border border-white/20 backdrop-blur-md transition-all"
            >
              <PhoneCall className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#00D084]" />
              <span>Call (+91 8084037252)</span>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* MAIN CONTACT SECTION (FORM + INFO CARDS) */}
      {/* ========================================================= */}
      <section className="py-8 sm:py-14 md:py-20 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-start">
            
            {/* Left Column: Contact Cards & Support SLA */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-6">
              
              {/* Primary Direct Card */}
              <div className="bg-gradient-to-br from-[#091E28] to-[#04282B] text-white p-5 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl border border-emerald-500/20 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
                
                <h3 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">Direct Contact Channels</h3>
                <p className="text-slate-300 text-xs sm:text-sm mb-4 sm:mb-6">
                  Fastest response guaranteed. Hamari onboarding team Monday to Saturday live support deti hai.
                </p>

                <div className="space-y-2.5 sm:space-y-4">
                  {/* Google Calendar Direct Booking */}
                  <a
                    href="https://calendar.app.google/HE3fCD4eECoADNaG8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-emerald-500/20 border border-emerald-400/40 hover:bg-emerald-500/30 transition-colors group"
                  >
                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] sm:text-xs text-emerald-300 block font-medium">Google Calendar</span>
                      <span className="text-sm sm:text-lg font-bold text-white group-hover:text-[#00D084] transition-colors flex items-center gap-1.5">
                        <span>Book 1-on-1 Demo</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href="tel:+918084037252"
                    className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                  >
                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[#00D084]/20 text-[#00D084] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] sm:text-xs text-slate-400 block font-medium">Direct Call / WhatsApp</span>
                      <span className="text-sm sm:text-lg font-bold text-white group-hover:text-[#00D084] transition-colors">
                        +91 8084037252
                      </span>
                    </div>
                  </a>

                  {/* WhatsApp Quick Chat */}
                  <a
                    href="https://wa.me/918084037252?text=Hello%20Gentro%20Technologies%2C%20I%20am%20interested%20in%20WhatsApp%20API%20%26%20CRM%20Software"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#25D366]/15 border border-[#25D366]/30 hover:bg-[#25D366]/25 transition-colors group"
                  >
                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
                    </div>
                    <div>
                      <span className="text-[11px] sm:text-xs text-emerald-300 block font-medium">Official WhatsApp Chat</span>
                      <span className="text-sm sm:text-lg font-bold text-white">
                        Chat Now (Instant Reply)
                      </span>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:gentrotechnology@gmail.com"
                    className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                  >
                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] sm:text-xs text-slate-400 block font-medium">Official Email</span>
                      <span className="text-xs sm:text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                        gentrotechnology@gmail.com
                      </span>
                    </div>
                  </a>

                  {/* Office Address */}
                  <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10">
                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] sm:text-xs text-slate-400 block font-medium">Office Location</span>
                      <span className="text-xs sm:text-sm font-semibold text-white">
                        Laxmi Nagar, New Delhi 110092
                      </span>
                      <span className="text-[11px] text-slate-400 block mt-0.5">
                        India
                      </span>
                    </div>
                  </div>

                  {/* Office Hours */}
                  <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10">
                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] sm:text-xs text-slate-400 block font-medium">Support Hours</span>
                      <span className="text-xs sm:text-sm font-semibold text-white">
                        Mon – Sat: 9:30 AM – 7:30 PM IST
                      </span>
                      <span className="text-[11px] text-slate-400 block mt-0.5">
                        (Critical Server & API Support: 24/7)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/10 grid grid-cols-2 gap-2 text-xs text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#00D084] shrink-0" />
                    <span>Meta Verified API</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-[#00D084] shrink-0" />
                    <span>&lt; 2-Min Activation</span>
                  </div>
                </div>

              </div>

              {/* Pricing Overview Highlight Card */}
              <div className="bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-2xs space-y-3 sm:space-y-4">
                <h4 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <span>Transparent Pricing Reference</span>
                </h4>

                <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                  <div className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-emerald-50/70 border border-emerald-100 text-center">
                    <span className="text-[11px] sm:text-xs text-emerald-800 font-medium block">Software License</span>
                    <span className="text-lg sm:text-xl font-black text-slate-900">₹7,999</span>
                    <span className="text-[10px] sm:text-[11px] text-slate-500 block">/ yearly (All-in-One)</span>
                  </div>
                  <div className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 text-center">
                    <span className="text-[11px] sm:text-xs text-slate-600 font-medium block">Broadcast Rate</span>
                    <span className="text-lg sm:text-xl font-black text-slate-900">₹0.15</span>
                    <span className="text-[10px] sm:text-[11px] text-slate-500 block">(15 paise) / message</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Lead / Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-7 md:p-10 border border-slate-200/90 shadow-xl relative">
                
                {formSubmitted ? (
                  <div className="text-center py-8 sm:py-12 space-y-3 sm:space-y-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                      <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
                    </div>
                    <h3 className="text-xl sm:text-3xl font-bold text-slate-900">
                      Thank You! Hamari Team Jald Hi Call Karegi.
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-base max-w-md mx-auto">
                      Aapka inquiry request receive ho gaya hai. Hamare WhatsApp API specialist <strong>15 minute ke andar</strong> aapko <strong>+91 8084037252</strong> se connect karenge.
                    </p>

                    <div className="pt-2 sm:pt-4">
                      <a
                        href="https://wa.me/918084037252?text=Hello%20Gentro%20Technologies%2C%20I%20just%20submitted%20a%20form%20for%20WhatsApp%20API"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-emerald-600 text-white font-bold text-xs sm:text-base px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all shadow-md"
                      >
                        <MessageCircle className="w-4 h-4 fill-white" />
                        <span>Chat on WhatsApp Directly</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="mb-4 sm:mb-8">
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 sm:px-3 py-1 rounded-full">
                        GET IN TOUCH
                      </span>
                      <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight mt-2 sm:mt-3">
                        Request a Demo & API Access
                      </h2>
                      <p className="text-slate-600 text-xs sm:text-sm mt-0.5 sm:mt-1">
                        Fill out the details below to get instant WhatsApp API onboarding support.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-5">
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
                        {/* Full Name */}
                        <div>
                          <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 sm:mb-2">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Rahul Sharma"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-xs sm:text-sm transition-all"
                          />
                        </div>

                        {/* Business Name */}
                        <div>
                          <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 sm:mb-2">
                            Business / Company Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Sharma Fashion D2C"
                            value={formData.businessName}
                            onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                            className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-xs sm:text-sm transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
                        {/* Phone / WhatsApp */}
                        <div>
                          <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 sm:mb-2">
                            WhatsApp / Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-xs sm:text-sm transition-all"
                          />
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 sm:mb-2">
                            Email Address
                          </label>
                          <input
                            type="email"
                            placeholder="you@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-xs sm:text-sm transition-all"
                          />
                        </div>
                      </div>

                      {/* Service / Plan Interested In */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
                        <div>
                          <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 sm:mb-2">
                            Interested In:
                          </label>
                          <select
                            value={formData.plan}
                            onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                            className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-xs sm:text-sm bg-white"
                          >
                            <option value="software_and_api">WhatsApp API Software + CRM (₹7,999/yr)</option>
                            <option value="bulk_messaging">Bulk Messaging Broadcasts (@ ₹0.15/msg)</option>
                            <option value="custom_enterprise">Custom Enterprise Solution</option>
                            <option value="green_tick">WhatsApp Green Tick Verification</option>
                          </select>
                        </div>

                        {/* Estimated Monthly Volume */}
                        <div>
                          <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 sm:mb-2">
                            Estimated Monthly Messages:
                          </label>
                          <select
                            value={formData.expectedVolume}
                            onChange={(e) => setFormData({ ...formData, expectedVolume: e.target.value })}
                            className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-xs sm:text-sm bg-white"
                          >
                            <option value="10000">10,000 to 25,000 msgs</option>
                            <option value="50000">25,000 to 1,00,000 msgs</option>
                            <option value="250000">1,00,000 to 5,00,000 msgs</option>
                            <option value="1000000">5,00,000+ msgs (High Volume)</option>
                          </select>
                        </div>
                      </div>

                      {/* Message / Requirements */}
                      <div>
                        <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 sm:mb-2">
                          Specific Requirements / Questions (Optional)
                        </label>
                        <textarea
                          rows={3}
                          placeholder="Bataiye aapko kis tarah ki automation ya setup ki zaroorat hai..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-xs sm:text-sm resize-none"
                        ></textarea>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-base py-3 sm:py-4 rounded-xl transition-all shadow-md hover:shadow-emerald-500/25 group"
                      >
                        <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                        <span>Submit & Request Instant Callback</span>
                      </button>

                      <p className="text-[11px] sm:text-xs text-slate-500 text-center">
                        🔒 Ham aapke data ki 100% privacy maintain karte hain. No spam guarantee.
                      </p>

                    </form>
                  </div>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* FAQ SECTION */}
      {/* ========================================================= */}
      <section className="py-8 sm:py-14 md:py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-6 sm:mb-10 space-y-1.5 sm:space-y-2">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
              GOT QUESTIONS?
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-xs sm:text-base">
              Common questions regarding our onboarding, pricing, and technical support.
            </p>
          </div>

          <div className="space-y-2.5 sm:space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-200 overflow-hidden shadow-2xs transition-all"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full px-4 py-3.5 sm:px-6 sm:py-5 text-left flex items-center justify-between gap-3 hover:bg-slate-100/60 transition-colors"
                >
                  <span className="text-xs sm:text-base font-bold text-slate-900">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0 transition-transform duration-200 ${
                      activeFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {activeFaq === idx && (
                  <div className="px-4 pb-4 pt-1 sm:px-6 sm:pb-6 sm:pt-2 text-xs sm:text-base text-slate-600 border-t border-slate-200/60 bg-white leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* FOOTER */}
      {/* ========================================================= */}
      <footer className="bg-[#091E28] text-white pt-8 sm:pt-12 md:pt-16 pb-8 sm:pb-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-10 mb-8 sm:mb-12">
            
            {/* Col 1: Brand Info */}
            <div className="lg:col-span-2 space-y-3 sm:space-y-4">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white block">
                Gentro Technologies
              </span>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
                India's most trusted WhatsApp Business API & Smart CRM software platform. Scale customer conversations, automate sales, and broadcast at just ₹0.15/msg.
              </p>
              <div className="pt-1 sm:pt-2 flex items-center gap-2 text-xs text-emerald-400">
                <ShieldCheck className="w-4 h-4 text-[#00D084]" />
                <span>100% Meta Cloud API Compliant</span>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div className="space-y-2 sm:space-y-3">
              <p className="text-xs font-bold text-slate-300 uppercase tracking-wider">Navigation</p>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-400">
                <li><Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
                <li><Link href="/services" className="hover:text-emerald-400 transition-colors">Services</Link></li>
                <li><Link href="/pricing" className="hover:text-emerald-400 transition-colors">Pricing</Link></li>
                <li><Link href="/contact" className="hover:text-emerald-400 transition-colors text-emerald-400 font-semibold">Contact Us</Link></li>
              </ul>
            </div>

            {/* Col 3: Legal & Compliance */}
            <div className="space-y-2 sm:space-y-3">
              <p className="text-xs font-bold text-slate-300 uppercase tracking-wider">Legal & Compliance</p>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-400">
                <li><Link href="/privacy-policy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/refund-policy" className="hover:text-emerald-400 transition-colors">Refund & Cancellation</Link></li>
                <li><Link href="/terms-and-conditions" className="hover:text-emerald-400 transition-colors">Terms & Conditions</Link></li>
                <li><Link href="/contact" className="hover:text-emerald-400 transition-colors">Customer Support</Link></li>
              </ul>
            </div>

            {/* Col 4: Contact info */}
            <div className="space-y-2 sm:space-y-3">
              <p className="text-xs font-bold text-slate-300 uppercase tracking-wider">Contact & Support</p>
              <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-400">
                <p className="flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 text-emerald-400 shrink-0" />
                  <a href="tel:+918084037252" className="hover:text-emerald-400 transition-colors">
                    +91 8084037252
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                  <a
                    href="https://wa.me/918084037252?text=Hello%20Gentro%20Technologies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    WhatsApp Chat
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                  <a href="mailto:gentrotechnology@gmail.com" className="hover:text-emerald-400 transition-colors">
                    gentrotechnology@gmail.com
                  </a>
                </p>
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Laxmi Nagar, New Delhi 110092</span>
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Mon - Sat: 9:30 AM - 7:30 PM</span>
                </p>
              </div>
            </div>

          </div>

          <div className="pt-6 sm:pt-8 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <p>© {new Date().getFullYear()} Gentro Technologies. All rights reserved.</p>
            <div className="flex items-center gap-4 sm:gap-6 text-[11px] sm:text-xs">
              <Link href="/privacy-policy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link>
              <span>|</span>
              <Link href="/terms-and-conditions" className="hover:text-emerald-400 transition-colors">Terms & Conditions</Link>
              <span>|</span>
              <Link href="/refund-policy" className="hover:text-emerald-400 transition-colors">Refund Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
