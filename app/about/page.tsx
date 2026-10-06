"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Zap,
  Users,
  Target,
  Award,
  Sparkles,
  ArrowRight,
  PhoneCall,
  Mail,
  CheckCircle2,
  TrendingUp,
  Server,
  Lock,
  HeartHandshake,
  Globe,
  Layers,
  Menu,
  X,
  Play,
  Calendar
} from "lucide-react";

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const values = [
    {
      title: "Cost-Effective Innovation",
      desc: "Hum har business ke liye messaging ko affordable banate hain — sirf ₹0.15 (15 paise) per message aur ₹7,999/yearly WhatsApp API software par enterprise-grade infrastructure provide karna hamara primary objective hai.",
      icon: TrendingUp,
      badge: "₹0.15 / Msg"
    },
    {
      title: "Zero-Downtime Reliability",
      desc: "Official Meta Cloud API ke saath 99.9% guaranteed uptime SLA. Aapka critical OTP, alert ya promotional broadcast bina delay deliver hota hai.",
      icon: Server,
      badge: "99.9% Uptime"
    },
    {
      title: "Enterprise-Grade Security",
      desc: "End-to-end data encryption aur strict privacy protocols. Hamara platform customer data security aur compliance standards ko 100% fulfill karta hai.",
      icon: Lock,
      badge: "100% Secure"
    },
    {
      title: "Dedicated Human Support",
      desc: "Automated bots ke alawa dedicated technical engineers hamesha ready rehte hain, onboarding se lekar live campaigns tak step-by-step guidance dene ke liye.",
      icon: HeartHandshake,
      badge: "24/7 Support"
    }
  ];

  const milestones = [
    { num: "1K+", label: "Active Businesses", sub: "Startups se lekar leading brands tak" },
    { num: "5M+", label: "Messages Sent", sub: "Monthly high throughput broadcasts" },
    { num: "99%", label: "Delivery Success Rate", sub: "Instant delivery with live read receipts" },
    { num: "< 2 min", label: "Instant Onboarding", sub: "Fastest API & CRM setup in India" }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-emerald-500 selection:text-white relative">
      {/* Top Banner Accent */}
      <div className="h-1 bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-600 w-full" />

      {/* ========================================================= */}
      {/* HEADER / NAVBAR */}
      {/* ========================================================= */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.04)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center group">
            <img
              src="https://ik.imagekit.io/0s0fb4b2b/Gentro/Glossy%20Gentro%20Technologies%20Logo.png"
              alt="Gentro Technologies Logo"
              className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav Links (Without Blog) */}
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-slate-600">
            <Link href="/" className="hover:text-emerald-600 transition-colors">
              Home
            </Link>
            <Link href="/services" className="hover:text-emerald-600 transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-emerald-600 font-semibold transition-colors hover:text-emerald-700 relative py-1">
              About Us
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-600 rounded-full"></span>
            </Link>
            <Link href="/contact" className="hover:text-emerald-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Action - Book Demo */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://calendar.app.google/HE3fCD4eECoADNaG8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:translate-y-[-1px] group"
            >
              <Calendar className="w-4 h-4 text-emerald-100" />
              <span>Book Demo</span>
              <ArrowRight className="w-4 h-4 text-emerald-200 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown (Without Blog) */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-6 py-5 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-4 text-base font-semibold text-slate-700">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-emerald-600"
              >
                Home
              </Link>
              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-emerald-600"
              >
                Services
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-emerald-600 hover:text-emerald-700 font-bold"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-emerald-600"
              >
                Contact
              </Link>
              <a
                href="https://calendar.app.google/HE3fCD4eECoADNaG8"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 text-center bg-emerald-600 text-white py-3 rounded-full font-bold flex items-center justify-center gap-2 shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Demo</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ========================================================= */}
      {/* HERO / STORY SECTION */}
      {/* ========================================================= */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#03151E] via-[#071d24] to-[#04282B] text-white">
        <div className="absolute top-10 left-1/3 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>About Gentro Technologies</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]">
              Democratizing Smart Messaging for <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-[#00D084] bg-clip-text text-transparent">
                Every Growing Business
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed">
              Humara mission hai har chhote aur bade business ko enterprise-grade WhatsApp Cloud API aur Smart CRM power provide karna — bina costly setups ya hidden charges ke.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 max-w-5xl mx-auto">
            {milestones.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-md hover:border-emerald-400/50 hover:bg-white/10 transition-all"
              >
                <p className="text-3xl sm:text-4xl font-black text-[#00D084]">
                  {item.num}
                </p>
                <p className="text-sm font-bold text-white mt-1">
                  {item.label}
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  {item.sub}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* MISSION & VISION */}
      {/* ========================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image / Visual Badge */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[420px] rounded-3xl overflow-hidden drop-shadow-2xl border border-slate-100 p-2 bg-gradient-to-b from-emerald-50 to-teal-50">
                <img
                  src="https://ik.imagekit.io/0s0fb4b2b/Gentro/WhatsApp%20Marketing%20Success%20Trio.webp"
                  alt="Gentro Technologies Mission"
                  className="w-full h-auto rounded-2xl object-contain"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 border border-emerald-200/60 px-3.5 py-1.5 rounded-full">
                  OUR MISSION & VISION
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
                  Bade Sapne. Chhote Kharch.
                </h2>
                <p className="text-slate-600 text-base sm:text-lg mt-2 leading-relaxed">
                  Traditional SMS aur bulk email marketing ka conversion rate lagataar gir raha hai. WhatsApp aaj 98% open rate ke sath Bharat ka number-1 communication channel hai.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-md">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Our Mission</h4>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      Bharat ke har D2C brand, retail shop, agency aur enterprise ko transparent, lowest-cost (₹0.15/msg & ₹7,999/yr software) WhatsApp marketing tools deliver karna.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-blue-50/50 border border-blue-100 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500 text-white flex items-center justify-center shrink-0 shadow-md">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Our Vision</h4>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      AI-driven automated messaging, multi-agent CRM aur developer-friendly APIs ke zariye customer interactions ko frictionless banana.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* OUR CORE VALUES */}
      {/* ========================================================= */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-100/80 border border-emerald-200 px-3.5 py-1.5 rounded-full">
              CORE PILLARS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              Values That Drive Gentro Technologies
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-2">
              Hamari engineering aur customer service in 4 fundamental principles par chalti hai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="bg-white p-7 rounded-2xl border border-slate-200/80 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-100/70 px-2.5 py-1 rounded-full">
                        {v.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                      {v.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* WHY PARTNER WITH US */}
      {/* ========================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-emerald-900 via-[#04282B] to-[#03151E] text-white p-8 sm:p-14 relative overflow-hidden shadow-2xl">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
                <span className="text-xs font-bold uppercase tracking-widest text-[#00D084] bg-emerald-500/15 border border-emerald-500/30 px-3.5 py-1.5 rounded-full">
                  TRUSTED PARTNER
                </span>
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
                  Ready to Supercharge Your Customer Reach?
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                  Gentro Technologies ke sath 2 minute me WhatsApp Cloud API activate karein aur direct ROI generate karna shuru karein.
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                  <a
                    href="https://calendar.app.google/HE3fCD4eECoADNaG8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#00D084] hover:bg-emerald-400 text-slate-950 font-bold text-base px-8 py-4 rounded-full transition-all shadow-xl hover:scale-105 group"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Book Demo Now</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <a
                    href="tel:+918084037252"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-base px-6 py-4 rounded-full border border-white/20 transition-all"
                  >
                    <PhoneCall className="w-4 h-4 text-[#00D084]" />
                    <span>Talk to Our Team</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <div className="w-full max-w-[280px] p-6 rounded-2xl bg-white/5 border border-white/10 text-center backdrop-blur-md">
                  <span className="text-4xl block mb-2">⚡</span>
                  <p className="text-2xl font-black text-[#00D084]">₹0.15</p>
                  <p className="text-xs text-slate-300 mt-1">Starting Price Per Message (15 Paisa)</p>
                  <div className="mt-3 p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center">
                    <span className="text-[11px] text-emerald-300 font-medium block">WhatsApp API & CRM Software</span>
                    <span className="text-sm font-black text-white">₹7,999 / yearly</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/10 text-left space-y-2 text-xs text-slate-300">
                    <p className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00D084]" /> 100% Meta Verified API
                    </p>
                    <p className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00D084]" /> Unlimited Contacts
                    </p>
                    <p className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00D084]" /> Multi-Agent CRM Access
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FOOTER */}
      {/* ========================================================= */}
      <footer className="bg-[#03151E] text-slate-400 pt-16 pb-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
            
            {/* Column 1: Brand & Bio */}
            <div className="lg:col-span-1 space-y-4">
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-white leading-none">
                  GENTRO
                </span>
                <span className="text-[10px] font-bold tracking-[0.22em] text-emerald-400 uppercase mt-1">
                  TECHNOLOGIES
                </span>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Smart Messaging, Bigger Opportunities.
              </p>
            </div>

            {/* Column 2: Quick Links (Without Blog) */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2 text-xs">
                <li><Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
                <li><Link href="/services" className="hover:text-emerald-400 transition-colors">Services</Link></li>
                <li><Link href="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Column 3: Legal & Compliance */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                Legal & Compliance
              </h4>
              <ul className="space-y-2 text-xs">
                <li><Link href="/privacy-policy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/refund-policy" className="hover:text-emerald-400 transition-colors">Refund & Cancellation</Link></li>
                <li><Link href="/terms-and-conditions" className="hover:text-emerald-400 transition-colors">Terms & Conditions</Link></li>
                <li><Link href="/contact" className="hover:text-emerald-400 transition-colors">Customer Support</Link></li>
              </ul>
            </div>

            {/* Column 4: Contact Us */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                Contact Us
              </h4>
              <ul className="space-y-3 text-xs">
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                  <a href="mailto:gentrotechnology@gmail.com" className="hover:text-emerald-400 transition-colors">
                    gentrotechnology@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <PhoneCall className="w-4 h-4 text-emerald-400 shrink-0" />
                  <a href="tel:+918084037252" className="hover:text-emerald-400 transition-colors">
                    +91 8084037252
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5">📍</span>
                  <span>Laxmi Nagar, New Delhi 110092</span>
                </li>
              </ul>
            </div>

            {/* Column 5: Follow Us */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                Follow Us
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <span className="font-bold text-sm">f</span>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-sky-600 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <span className="font-bold text-sm">in</span>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-red-600 hover:text-white transition-colors"
                  aria-label="YouTube"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-pink-600 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <span className="font-bold text-sm">📸</span>
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Copyright */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© 2026 Gentro Technologies. All Rights Reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-slate-300 transition-colors">Terms & Conditions</a>
              <span>|</span>
              <a href="#" className="hover:text-slate-300 transition-colors">Refund Policy</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
