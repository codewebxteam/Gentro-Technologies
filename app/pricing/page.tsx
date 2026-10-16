"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  Calendar,
  PhoneCall,
  MessageCircle,
  Menu,
  X,
  Bot,
  Send,
  Sparkles,
  ShieldCheck,
  Zap,
  TrendingUp,
  DollarSign,
  ChevronRight,
  HelpCircle,
  Calculator,
  Layers,
  Check
} from "lucide-react";

export default function PricingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [calcMessages, setCalcMessages] = useState<number>(500);

  // Competitor average cost is approx 0.45/msg (accounting for 15-20% markup + base costs)
  const gentroCost = Math.round(calcMessages * 0.15);
  const competitorCost = Math.round(calcMessages * 0.45);
  const monthlySavings = competitorCost - gentroCost;
  const yearlySavings = monthlySavings * 12;

  const faqs = [
    {
      question: "What is the cost of Gentro Technologies’ WhatsApp API?",
      answer: "Our WhatsApp API plan costs ₹7,999 per year. Messaging charges are separate, starting at just ₹0.15 per message."
    },
    {
      question: "What is the minimum wallet recharge?",
      answer: "The minimum wallet recharge is ₹1,000 after API activation. Your messaging charges are deducted from your wallet balance as you send messages."
    },
    {
      question: "Do I need to pay monthly subscription fees?",
      answer: "No monthly messaging subscription is required. You pay ₹7,999 annually for the plan and recharge your wallet separately to cover messaging usage."
    },
    {
      question: "What types of messages can I send?",
      answer: "You can send supported marketing campaigns, utility notifications, OTPs, and rich media messages, including images, videos, and PDFs, subject to WhatsApp policies and template requirements."
    },
    {
      question: "Does my wallet balance expire?",
      answer: "Your wallet balance does not expire, provided this is covered by your applicable wallet terms and conditions."
    },
    {
      question: "Are there any hidden setup or Meta markup charges?",
      answer: "No hidden charges whatsoever. Gentro charges 0% markup fee on Meta WhatsApp messaging. What you see is what you pay."
    },
    {
      question: "How quickly can our account be activated?",
      answer: "Once you sign up and connect with our team, we can have your official WhatsApp Cloud API and dashboard ready within 5 to 15 minutes."
    }
  ];

  const comparisonFeatures = [
    { feature: "Official Meta WhatsApp Cloud API", gentro: "Direct Access", others: "Third-party Proxies" },
    { feature: "Annual Software Platform Fee", gentro: "₹7,999 / year", others: "₹1,00,000+ / year" },
    { feature: "Per-Message Broadcasting Rate", gentro: "₹0.15 flat", others: "₹0.40 - ₹0.75" },
    { feature: "Meta Messaging Markup", gentro: "0% Markup", others: "10% to 25% Markup" },
    { feature: "Team Members / Extra Users", gentro: "Unlimited Included", others: "₹2,500 - ₹3,500/user/mo" },
    { feature: "No-Code Chatbot & Flow Builder", gentro: "Included", others: "Higher Tier Only" },
    { feature: "Wallet Balance Expiry", gentro: "Never Expires", others: "Expires in 30-90 Days" },
    { feature: "Meta Verification & Green Tick Support", gentro: "Free 1-on-1 Assistance", others: "Paid Add-on" },
    { feature: "Shopify, CRM & Webhook Integration", gentro: "Ready-to-use APIs", others: "Limited / Restricted" },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Gentro WhatsApp Marketing API & CRM Software",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web-based, Cloud, Windows, macOS, Android, iOS",
    offers: [
      {
        "@type": "Offer",
        price: "7999",
        priceCurrency: "INR",
        name: "Annual Software License",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        price: "0.15",
        priceCurrency: "INR",
        name: "Per Message Broadcasting Credit",
        availability: "https://schema.org/InStock",
      }
    ],
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-emerald-500 selection:text-white relative">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

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

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-slate-600">
            <Link href="/" className="hover:text-emerald-600 transition-colors">
              Home
            </Link>
            <Link href="/services" className="hover:text-emerald-600 transition-colors">
              Services
            </Link>
            <Link
              href="/pricing"
              className="text-emerald-600 font-semibold transition-colors hover:text-emerald-700 relative py-1"
            >
              Pricing
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-600 rounded-full"></span>
            </Link>
            <Link href="/contact" className="hover:text-emerald-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Action - Book Demo */}
          <div className="hidden md:flex items-center gap-3">
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

        {/* Mobile Dropdown */}
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
                href="/pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="text-emerald-600 font-bold"
              >
                Pricing
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
                <span>Book Free Demo</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ========================================================= */}
      {/* HERO SECTION */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/50 via-white to-slate-50 py-12 sm:py-16 lg:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/90 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-bold tracking-wide shadow-xs mb-6">
            <span className="text-emerald-600">✦</span>
            <span>TRANSPARENT & PREDICTABLE PRICING</span>
            <span className="text-emerald-600">✦</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto">
            Powerful WhatsApp API. <br className="hidden sm:inline" />
            <span className="text-emerald-600">Lower Messaging Costs.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-600 text-base sm:text-lg lg:text-xl font-normal max-w-2xl mx-auto mt-4 leading-relaxed">
            Get the complete WhatsApp Business API platform for ₹7,999/year with broadcast messaging rates starting at just ₹0.15 per message. Zero hidden markups.
          </p>

          {/* Key Trust Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-8 text-xs sm:text-sm font-semibold text-slate-700">
            <div className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>0% Meta Markup Fee</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>99% Delivery Rate SLA</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>No Minimum Monthly Lock-in</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Instant Activation in 5 Mins</span>
            </div>
          </div>

          {/* Hero Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a
              href="https://calendar.app.google/HE3fCD4eECoADNaG8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#091E28] hover:bg-slate-900 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
            >
              <Calendar className="w-5 h-5 text-emerald-400" />
              <span>Book Free Demo</span>
              <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
                <ArrowRight className="w-3.5 h-3.5 text-emerald-400 group-hover:text-white transition-colors" />
              </div>
            </a>

            <a
              href="https://wa.me/918084037252?text=Hello%20Gentro%20Technologies%2C%20I%20want%20to%20know%20more%20about%20WhatsApp%20API%20pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-emerald-600 text-white font-semibold text-base px-7 py-4 rounded-full shadow-md hover:shadow-lg transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 2 MAIN PRICING PLANS */}
      {/* ========================================================= */}
      <section className="py-10 sm:py-16 md:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-100/80 border border-emerald-200 px-3.5 py-1.5 rounded-full">
              CORE PACKAGES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              Simple, Predictable Plans for High-ROI Growth
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-2">
              Everything your business needs to broadcast, automate, and scale with WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Plan 1: WhatsApp API & CRM Software */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-emerald-500 shadow-xl relative flex flex-col justify-between">
              <div className="absolute -top-4 left-8 bg-emerald-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                COMPLETE PLATFORM SUITE
              </div>

              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-slate-900">
                    WhatsApp API & CRM Software
                  </h3>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Bot className="w-6 h-6" />
                  </div>
                </div>
                
                <p className="text-slate-600 text-sm mb-6">
                  Team live chat, chatbots, automation, contact management, and official Meta Cloud API management in one unified platform.
                </p>

                <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-slate-100">
                  <span className="text-4xl sm:text-5xl font-black text-slate-900">₹7,999</span>
                  <span className="text-slate-500 font-semibold">/ yearly</span>
                </div>

                <ul className="space-y-3.5 text-sm text-slate-700 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span><strong>No-Code Chatbot & Flow Automation Builder</strong></span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span><strong>Official Meta WhatsApp Cloud API</strong> Direct Access</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span><strong>Contacts & Group Segmentation</strong> (Unlimited Contacts)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span><strong>Shopify, WooCommerce, CRM & Webhook Integrations</strong></span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span><strong>Real-time Analytics & Exportable Delivery Reports</strong></span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span><strong>Dedicated Technical & Onboarding Support</strong></span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span><strong>Free Meta Verification & Green Tick Guidance</strong></span>
                  </li>
                </ul>
              </div>

              <a
                href="https://calendar.app.google/HE3fCD4eECoADNaG8"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base py-4 rounded-xl transition-all shadow-md hover:shadow-lg group"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Demo & Get License</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Plan 2: Pay As You Go Messaging */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-lg relative flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-slate-900">
                    Pay-As-You-Go Messaging
                  </h3>
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-800 flex items-center justify-center shrink-0">
                    <Send className="w-6 h-6" />
                  </div>
                </div>

                <p className="text-slate-600 text-sm mb-6">
                  Transparent per-message pricing for marketing broadcasts, transactional alerts, OTPs, and customer support.
                </p>

                <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-slate-100">
                  <span className="text-4xl sm:text-5xl font-black text-slate-900">₹0.15</span>
                  <span className="text-slate-500 font-semibold">(15 paise) / message</span>
                </div>

                <ul className="space-y-3.5 text-sm text-slate-700 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span><strong>High Speed & 99% Delivery Success Rate</strong></span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span><strong>Instant OTP & Transactional Delivery</strong> (&lt; 3s)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span><strong>Rich Media Support</strong> (Images, Videos, PDFs, CTAs)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span><strong>Zero Expiry on Wallet Balance</strong></span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span><strong>Meta Template Approval Assistance</strong></span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span><strong>Live Read & Delivery Status Tracking</strong></span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span><strong>No Minimum Wallet Commitment or Lock-in</strong></span>
                  </li>
                </ul>
              </div>

              <a
                href="https://calendar.app.google/HE3fCD4eECoADNaG8"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#091E28] hover:bg-slate-900 text-white font-bold text-base py-4 rounded-xl transition-all shadow-md group"
              >
                <Calendar className="w-5 h-5 text-emerald-400" />
                <span>Book Demo & Start Messaging</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* PRICE COMPARISON SECTION */}
      {/* ========================================================= */}
      <section className="py-10 sm:py-16 md:py-20 bg-[#E8F8EE]/70 relative border-t border-emerald-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100/90 border border-emerald-200 px-3.5 py-1.5 rounded-full">
              PRICE COMPARISON
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              Stop Overpaying for WhatsApp Marketing
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-2">
              See how Gentro Technologies compares to other WhatsApp API platforms.
            </p>
          </div>

          {/* Card Comparison Container */}
          <div className="max-w-xl mx-auto">
            {/* Top Card: Gentro Technologies */}
            <div className="relative rounded-3xl bg-white border-2 border-[#FF4E4E] p-7 sm:p-9 text-center shadow-xl">
              {/* Top Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs sm:text-sm font-bold text-slate-800 shadow-xs mb-3">
                <img
                  src="https://ik.imagekit.io/0s0fb4b2b/Gentro/Glossy%20Gentro%20Technologies%20Logo.png"
                  alt="Gentro Technologies"
                  className="h-4 w-auto object-contain"
                />
                <span className="font-extrabold text-slate-900">Gentro</span>
                <span className="text-slate-400">×</span>
                <div className="flex items-center gap-1 text-[#0081FB]">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.96 5.86c-1.74 0-3.32.8-4.96 2.45-1.64-1.65-3.22-2.45-4.96-2.45-3.3 0-6.04 2.87-6.04 6.74 0 4.13 2.74 7.02 6.04 7.02 1.83 0 3.39-.85 4.96-2.5 1.57 1.65 3.13 2.5 4.96 2.5 3.3 0 6.04-2.89 6.04-7.02 0-3.87-2.74-6.74-6.04-6.74zm-9.92 11.23c-2.07 0-3.88-1.93-3.88-4.49 0-2.47 1.81-4.22 3.88-4.22 1.34 0 2.53.69 3.84 2.15-1.42 2.76-2.6 6.56-3.84 6.56zm9.92 0c-1.24 0-2.42-3.8-3.84-6.56 1.31-1.46 2.5-2.15 3.84-2.15 2.07 0 3.88 1.75 3.88 4.22 0 2.56-1.81 4.49-3.88 4.49z"/>
                  </svg>
                  <span className="font-bold">Meta</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm font-semibold text-slate-600">
                Official WhatsApp Business API
              </p>

              {/* Big Bold Price */}
              <div className="my-2.5">
                <span className="text-5xl sm:text-6xl font-black text-slate-900 tracking-tight">₹7,999</span>
                <span className="text-lg sm:text-2xl font-bold text-slate-700">/Year</span>
              </div>

              <p className="text-sm sm:text-base font-extrabold text-emerald-600">
                + 0% Markup Fee <span className="text-slate-400 font-normal">•</span> Just ₹0.15 / Message
              </p>

              {/* Red Action Button Overlapping Bottom */}
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 w-full flex justify-center px-4">
                <a
                  href="https://calendar.app.google/HE3fCD4eECoADNaG8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#FF3838] hover:bg-[#E02828] text-white font-extrabold text-sm sm:text-base px-8 sm:px-10 py-3 sm:py-3.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Free Demo & Get Access</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* 4 Competitors (2x2 Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-2">
              
              {/* 1. WATI */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 text-center shadow-2xs hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-5 h-5 rounded-md bg-[#25D366] text-white flex items-center justify-center text-xs">
                    💬
                  </div>
                  <span className="text-lg sm:text-xl font-black tracking-tight text-slate-900">wati</span>
                </div>
                <p className="text-3xl sm:text-4xl font-black text-slate-900">
                  ₹12,499<span className="text-sm font-medium text-slate-500">/Month</span>
                </p>
                <p className="text-xs text-slate-500 font-medium mt-1">Pro plan</p>
                <p className="text-xs sm:text-sm font-bold text-rose-600 mt-2">
                  + ₹3,299 per extra user
                </p>
              </div>

              {/* 2. INTERAKT */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 text-center shadow-2xs hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-5 h-5 rounded-md bg-[#00A884] text-white flex items-center justify-center text-xs">
                    🛍️
                  </div>
                  <span className="text-lg sm:text-xl font-black tracking-tight text-slate-900">interakt</span>
                </div>
                <p className="text-3xl sm:text-4xl font-black text-slate-900">
                  ₹12,499<span className="text-sm font-medium text-slate-500">/Quarter</span>
                </p>
                <p className="text-xs text-slate-500 font-medium mt-1">Growth plan</p>
                <p className="text-xs sm:text-sm font-bold text-rose-600 mt-2">
                  + 10% Markup
                </p>
              </div>

              {/* 3. AISENSY */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 text-center shadow-2xs hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-5 h-5 rounded-md bg-emerald-500 text-white flex items-center justify-center text-xs">
                    ⚡
                  </div>
                  <span className="text-lg sm:text-xl font-black tracking-tight text-slate-900">AiSensy</span>
                </div>
                <p className="text-3xl sm:text-4xl font-black text-slate-900">
                  ₹8,299<span className="text-sm font-medium text-slate-500">/Month</span>
                </p>
                <p className="text-xs text-slate-500 font-medium mt-1">Pro plan</p>
                <p className="text-xs sm:text-sm font-bold text-rose-600 mt-2">
                  + 20% Markup
                </p>
              </div>

              {/* 4. GALLABOX */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 text-center shadow-2xs hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-5 h-5 rounded-md bg-blue-600 text-white flex items-center justify-center text-xs">
                    📦
                  </div>
                  <span className="text-lg sm:text-xl font-black tracking-tight text-slate-900">gallabox</span>
                </div>
                <p className="text-3xl sm:text-4xl font-black text-slate-900">
                  ₹12,500<span className="text-sm font-medium text-slate-500">/Month</span>
                </p>
                <p className="text-xs text-slate-500 font-medium mt-1">Basic plan, billed quarterly</p>
                <p className="text-xs sm:text-sm font-bold text-rose-600 mt-2">
                  + 15% Markup
                </p>
              </div>

            </div>

            {/* Bottom Proof & Trustline */}
            <div className="text-center mt-8 space-y-1.5">
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                1-on-1 onboarding and free migration with WhatsApp experts
              </p>
              <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500">
                <span className="text-emerald-500 font-bold">★★★★★</span>
                <span className="font-semibold text-slate-700">4.8 on Trustpilot</span>
                <span>•</span>
                <span className="font-medium">Verified Meta Business Partner</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* COST CALCULATOR & ROI ESTIMATOR */}
      {/* ========================================================= */}
      <section className="py-10 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#04282B] via-[#071d24] to-[#03151E] text-white p-8 sm:p-12 rounded-3xl border border-emerald-500/20 shadow-2xl relative overflow-hidden">
            
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="text-xs font-bold uppercase tracking-widest text-[#00D084] bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1.5 rounded-full">
                  SAVINGS CALCULATOR
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mt-3">
                  Calculate How Much You Save With Gentro
                </h2>
                <p className="text-slate-300 text-sm sm:text-base mt-2">
                  Compare Gentro&apos;s flat ₹0.15/msg vs other providers charging ₹0.45+/msg with hidden markups.
                </p>
              </div>

              {/* Slider Box */}
              <div className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl backdrop-blur-md space-y-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <label htmlFor="msg-range-pricing" className="text-sm text-slate-300 font-medium">
                      Estimated Monthly Messages:
                    </label>
                    <p className="text-3xl sm:text-4xl font-black text-[#00D084] mt-1">
                      {calcMessages.toLocaleString("en-IN")}{" "}
                      <span className="text-sm font-normal text-slate-300">messages / month</span>
                    </p>
                  </div>
                  
                  <div className="text-right">
                    <span className="text-xs text-slate-400 block">Your Cost with Gentro (@ ₹0.15/msg):</span>
                    <span className="text-3xl sm:text-4xl font-black text-white">
                      ₹{gentroCost.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>

                <input
                  id="msg-range-pricing"
                  type="range"
                  min="500"
                  max="500000"
                  step="500"
                  value={calcMessages}
                  onChange={(e) => setCalcMessages(Number(e.target.value))}
                  className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#00D084]"
                />

                <div className="flex justify-between text-xs text-slate-400 font-mono">
                  <span>500 msgs</span>
                  <span>1,00,000 msgs</span>
                  <span>5,00,000 msgs</span>
                </div>

                {/* Savings Callout */}
                <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Your Estimated Savings</p>
                    <p className="text-2xl sm:text-3xl font-black text-white mt-0.5">
                      ₹{yearlySavings.toLocaleString("en-IN")}{" "}
                      <span className="text-xs font-normal text-slate-300">/ saved every year</span>
                    </p>
                  </div>

                  <a
                    href="https://calendar.app.google/HE3fCD4eECoADNaG8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#00D084] hover:bg-emerald-400 text-slate-950 font-bold text-sm px-6 py-3 rounded-full transition-all shadow-md shrink-0"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Demo to Lock This Price</span>
                  </a>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* DETAILED FEATURE COMPARISON TABLE */}
      {/* ========================================================= */}
      <section className="py-10 sm:py-16 md:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-100/80 border border-emerald-200 px-3.5 py-1.5 rounded-full">
              FEATURE-BY-FEATURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              Why Indian Businesses Switch to Gentro
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-2">
              Compare key features and see how much value Gentro delivers for your brand.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white border-b border-slate-800">
                    <th className="py-5 px-6 font-bold text-sm sm:text-base">Feature / Specification</th>
                    <th className="py-5 px-6 font-black text-sm sm:text-base text-emerald-400 bg-slate-800/80">
                      Gentro Technologies
                    </th>
                    <th className="py-5 px-6 font-semibold text-sm sm:text-base text-slate-300">
                      Other Providers
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {comparisonFeatures.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-4 px-6 font-semibold text-slate-800">
                        {row.feature}
                      </td>
                      <td className="py-4 px-6 font-bold text-emerald-700 bg-emerald-50/40">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{row.gentro}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-slate-500 font-medium">
                        <div className="flex items-center gap-2">
                          <span className="text-slate-400">×</span>
                          <span>{row.others}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Table Footer */}
            <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Want to migrate your existing number without losing contacts or history?
              </p>
              <a
                href="https://calendar.app.google/HE3fCD4eECoADNaG8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all shadow-xs"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Talk to Migration Team</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 1-ON-1 DEMO BOOKING CALLOUT BANNER */}
      {/* ========================================================= */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-100/70 border border-emerald-200/80 p-8 sm:p-12 overflow-hidden shadow-lg">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Left Content */}
              <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-white/80 border border-emerald-200 px-3.5 py-1.5 rounded-full">
                  EXPERIENCE LIVE IN ACTION
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Book a 1-on-1 Personalized Demo With Our WhatsApp Specialists
                </h2>
                <p className="text-slate-700 text-base sm:text-lg max-w-2xl leading-relaxed">
                  We will walk you through the dashboard, run a test broadcast, demonstrate chatbot automation workflows, and calculate exact messaging savings for your business.
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                  <a
                    href="https://calendar.app.google/HE3fCD4eECoADNaG8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-[#091E28] hover:bg-slate-900 text-white font-bold text-base px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
                  >
                    <Calendar className="w-5 h-5 text-emerald-400" />
                    <span>Schedule Demo on Calendar</span>
                    <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <a
                    href="tel:+918084037252"
                    className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base px-6 py-4 rounded-full border border-slate-300 shadow-xs transition-all"
                  >
                    <PhoneCall className="w-4 h-4 text-emerald-600" />
                    <span>Call Us: +91 8084037252</span>
                  </a>
                </div>
              </div>

              {/* Right Visual Badge */}
              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[340px] drop-shadow-xl hover:scale-105 transition-transform duration-300">
                  <img
                    src="https://ik.imagekit.io/0s0fb4b2b/Gentro/WhatsApp%20Per-Message%20Cost%20Badge.webp?updatedAt=1791813581811"
                    alt="Just ₹0.15 Per Message Cost Badge"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FREQUENTLY ASKED QUESTIONS */}
      {/* ========================================================= */}
      <section className="py-10 sm:py-16 md:py-20 bg-white relative border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Header Info */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 border border-emerald-200/60 px-3 py-1 rounded-full">
                PRICING FAQS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-600 text-base">
                Everything you need to know about our plans, recharge, and messaging rates.
              </p>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 mt-6">
                <p className="text-sm font-bold text-slate-800 mb-1">Still have pricing questions?</p>
                <p className="text-xs text-slate-600 mb-3">Our team is available 24/7 on WhatsApp & Phone.</p>
                <a
                  href="/contact"
                  className="text-xs font-bold text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1"
                >
                  <span>Contact support team</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Accordion List */}
            <div className="lg:col-span-7 space-y-3">
              {faqs.map((faq, i) => {
                const isOpen = activeFaq === i;
                return (
                  <div
                    key={i}
                    className="border border-slate-200 rounded-xl overflow-hidden transition-all bg-white"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : i)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-slate-800 hover:text-emerald-700 transition-colors"
                    >
                      <span>{faq.question}</span>
                      <span className={`w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform ${isOpen ? "rotate-45 bg-emerald-100 text-emerald-700" : ""}`}>
                        +
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-200">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* PRE-FOOTER BANNER */}
      {/* ========================================================= */}
      <section className="bg-[#04282B] text-white py-8 sm:py-12 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* CTA text */}
            <div className="text-center lg:text-left space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Ready to Cut Down Your WhatsApp Marketing Costs?
              </h2>
              <p className="text-emerald-200/90 text-sm sm:text-base">
                Join hundreds of brands using Gentro Technologies to maximize ROI.
              </p>
            </div>

            {/* Button & Stats */}
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <a
                href="https://calendar.app.google/HE3fCD4eECoADNaG8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#00D084] hover:bg-emerald-400 text-slate-950 font-bold text-sm sm:text-base px-7 py-3.5 rounded-full transition-all shadow-lg hover:scale-105 shrink-0 group"
              >
                <span>Book Free Demo Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="flex items-center gap-6 sm:gap-8 border-t sm:border-t-0 sm:border-l border-emerald-800/80 pt-4 sm:pt-0 sm:pl-8">
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-black text-white">₹7,999</p>
                  <p className="text-[11px] uppercase tracking-wider text-emerald-300 font-semibold">YEARLY PLAN</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-black text-white">₹0.15</p>
                  <p className="text-[11px] uppercase tracking-wider text-emerald-300 font-semibold">STARTING PRICE / MESSAGE</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FOOTER */}
      {/* ========================================================= */}
      <footer id="contact" className="bg-[#03151E] text-slate-400 pt-10 sm:pt-16 pb-8 sm:pb-12 border-t border-slate-800">
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

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2 text-xs">
                <li><Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
                <li><Link href="/services" className="hover:text-emerald-400 transition-colors">Services</Link></li>
                <li><Link href="/pricing" className="text-emerald-400 font-bold hover:text-emerald-300 transition-colors">Pricing</Link></li>
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
              <ul className="space-y-2 text-xs">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✉</span>
                  <a href="mailto:gentrotechnology@gmail.com" className="hover:text-emerald-400 transition-colors">gentrotechnology@gmail.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">📞</span>
                  <a href="tel:+918084037252" className="hover:text-emerald-400 transition-colors">+91 8084037252</a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">📍</span>
                  <span>Laxmi Nagar, New Delhi 110092</span>
                </li>
              </ul>
            </div>

            {/* Column 5: Social / Connect */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                Follow Us
              </h4>
              <div className="flex gap-2">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 transition-colors text-white text-xs">f</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 transition-colors text-white text-xs">in</a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 transition-colors text-white text-xs">▶</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 transition-colors text-white text-xs">📷</a>
              </div>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p>© {new Date().getFullYear()} Gentro Technologies. All Rights Reserved.</p>
            <div className="flex gap-4">
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
