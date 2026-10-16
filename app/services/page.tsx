"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MessageSquare,
  Bot,
  Cpu,
  Code2,
  Users,
  Send,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  Mail,
  Copy,
  Check,
  Sparkles,
  ChevronDown,
  Layers,
  Activity,
  BarChart3,
  Workflow,
  Terminal,
  Settings,
  Headphones,
  Sliders,
  Lock,
  Server,
  Share2,
  Menu,
  X,
  Play,
  Calendar,
  TrendingUp
} from "lucide-react";

export default function ServicesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"api" | "crm">("api");
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [calcMessages, setCalcMessages] = useState<number>(500);

  const platformSteps = [
    {
      step: "01",
      id: "step-1",
      title: "Unlock your Message limit upto 1 Lac",
      badge: "Official Meta Tier Scaling",
      tagline: "Scale from 1K to 1,00,000+ Daily Messages",
      desc: "Seamlessly upgrade your WhatsApp Business API messaging tier from 1,000 to 10,000 and up to 1,00,000+ daily messages. Gentro Technologies provides end-to-end Meta Business verification support and compliance guidance so you can scale your customer reach with zero number bans.",
      bullets: [
        "Official Meta Tier 1 (1K) to Tier 3 (100K+) progression",
        "Meta Business Manager verification and compliance assistance",
        "Zero number-ban risk with verified cloud API routing",
        "High message delivery throughput with sub-second latency"
      ],
      image: "https://ik.imagekit.io/0s0fb4b2b/Gentro/1stGentro.jpeg",
      endpoint: "gentro.tech/dashboard/meta-tier-limits",
      icon: TrendingUp,
      badgeStyle: "bg-emerald-50 text-emerald-700 border-emerald-200",
      stepNumStyle: "bg-emerald-600 text-white"
    },
    {
      step: "02",
      id: "step-2",
      title: "Engage with customers",
      badge: "Multi-Agent Shared Inbox",
      tagline: "Unify Chats, Teams & Real-Time Responses",
      desc: "Empower your sales, support, and operations teams to collaborate on a single official WhatsApp number. Route conversations to specific agents, add internal team notes, track lead stages, and send rich media or quick canned responses to close deals faster.",
      bullets: [
        "Unified multi-agent inbox for sales and customer support",
        "Intelligent ticket routing & customer chat assignment",
        "Rich media support: PDFs, images, catalogs & voice notes",
        "Custom tags and contact segmentation for rapid follow-ups"
      ],
      image: "https://ik.imagekit.io/0s0fb4b2b/Gentro/2ndGentro.jpeg",
      endpoint: "gentro.tech/dashboard/live-chat/inbox",
      icon: MessageSquare,
      badgeStyle: "bg-blue-50 text-blue-700 border-blue-200",
      stepNumStyle: "bg-blue-600 text-white"
    },
    {
      step: "03",
      id: "step-3",
      title: "Bulk Messaging",
      badge: "High-ROI Broadcast Engine",
      tagline: "Send Targeted Campaigns to Lakhs of Customers",
      desc: "Broadcast personalized marketing promotions, discount vouchers, festival offers, and transactional alerts to your opt-in contact lists in seconds. Take advantage of interactive WhatsApp CTA buttons (Visit Website, Call Now) with flat ₹0.15 per message pricing and a 98% open rate.",
      bullets: [
        "Broadcast to unlimited contacts with 98% open rate",
        "Personalized variables: customer names, order IDs, discount codes",
        "Interactive CTA buttons: Visit Website, Click to Call, Quick Reply",
        "Flat ₹0.15 (15 paise) per message with zero hidden costs"
      ],
      image: "https://ik.imagekit.io/0s0fb4b2b/Gentro/3rdGentro.jpeg",
      endpoint: "gentro.tech/dashboard/campaigns/broadcast",
      icon: Send,
      badgeStyle: "bg-purple-50 text-purple-700 border-purple-200",
      stepNumStyle: "bg-purple-600 text-white"
    },
    {
      step: "04",
      id: "step-4",
      title: "Campaign Report",
      badge: "Real-Time Analytical Dashboard",
      tagline: "Track Every Delivery, Read & Click in Real Time",
      desc: "Gain crystal-clear visibility into the ROI of every campaign with live analytical tracking. Monitor real-time sent, delivered, read, and replied counts, inspect failure error codes, monitor wallet balance deductions, and download comprehensive Excel or CSV reports in one click.",
      bullets: [
        "Real-time message status tracking (Sent, Delivered, Read, Failed)",
        "Transparent wallet ledger & per-campaign cost breakdown",
        "Granular error diagnostic codes for failed messages",
        "1-Click exportable CSV & Excel reports for management audits"
      ],
      image: "https://ik.imagekit.io/0s0fb4b2b/Gentro/4thGentro.jpeg",
      endpoint: "gentro.tech/dashboard/analytics/campaign-reports",
      icon: BarChart3,
      badgeStyle: "bg-amber-50 text-amber-700 border-amber-200",
      stepNumStyle: "bg-amber-600 text-white"
    },
    {
      step: "05",
      id: "step-5",
      title: "Chatbot automation",
      badge: "24/7 No-Code Flow Builder",
      tagline: "Automate Support, Lead Capture & FAQs On Autopilot",
      desc: "Build intelligent conversational workflows with our intuitive no-code drag-and-drop chatbot builder. Capture qualified leads around the clock, answer common customer queries, trigger automated order status lookups, and automatically transfer complex conversations to live human agents.",
      bullets: [
        "Visual drag-and-drop flow builder with no coding required",
        "24/7 instant replies for lead capture, pricing & FAQs",
        "Dynamic menu buttons, quick replies & keyword triggers",
        "Seamless live human agent handover when needed"
      ],
      image: "https://ik.imagekit.io/0s0fb4b2b/Gentro/5thGentro.jpeg",
      endpoint: "gentro.tech/dashboard/automations/chatbot-builder",
      icon: Bot,
      badgeStyle: "bg-rose-50 text-rose-700 border-rose-200",
      stepNumStyle: "bg-rose-600 text-white"
    }
  ];

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
            <Link href="/services" className="text-emerald-600 font-semibold transition-colors hover:text-emerald-700 relative py-1">
              Services
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-600 rounded-full"></span>
            </Link>
            <Link href="/pricing" className="hover:text-emerald-600 transition-colors">
              Pricing
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
                className="text-emerald-600 hover:text-emerald-700 font-bold"
              >
                Services
              </Link>
              <Link
                href="/pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-emerald-600"
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
                <span>Book Demo</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ========================================================= */}
      {/* HERO SECTION */}
      {/* ========================================================= */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden bg-gradient-to-b from-slate-900 via-[#071d24] to-[#04282B] text-white">
        {/* Glow Effects */}
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span>Enterprise WhatsApp Solutions</span>
              <span className="text-emerald-400">✦</span>
              <span>Only ₹0.15 / Msg</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.12]">
              More Reach. <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-[#00D084] bg-clip-text text-transparent">
                Less Cost.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
              Connect with millions of customers directly on WhatsApp at industry-lowest rates starting at just ₹0.15 per message. Automate broadcasts, alerts, and customer interactions with high-speed Official Meta WhatsApp API and smart CRM tools.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href="https://calendar.app.google/HE3fCD4eECoADNaG8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#00D084] hover:bg-emerald-400 text-slate-950 font-bold text-base px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-emerald-500/25 hover:scale-105 group"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Free Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CORE PILLARS: VALUES THAT DRIVE GENTRO TECHNOLOGIES */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200 relative overflow-hidden">
        {/* Decorative blur elements */}
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
              <span>CORE PILLARS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Values That Drive Gentro Technologies
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Our engineering and customer service operate on four fundamental principles designed for sustainable, high-ROI business growth.
            </p>
          </div>

          {/* 4 Colorful Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Pillar 1: Cost-Effective Innovation (Emerald Theme) */}
            <div className="relative rounded-2xl bg-white border-2 border-emerald-200/80 shadow-md hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden group">
              <div className="h-2 w-full bg-gradient-to-r from-emerald-400 via-teal-400 to-[#00D084]" />
              <div className="p-6 sm:p-7 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform">
                    <Zap className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-black text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full shadow-sm">
                    ₹0.15 / Msg
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                  Cost-Effective Innovation
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed flex-1">
                  We make business messaging truly affordable for every enterprise — delivering enterprise-grade WhatsApp API infrastructure at just <strong className="text-slate-900">₹0.15 (15 paise) per message</strong> and all-inclusive software for <strong className="text-slate-900">₹7,999/year</strong> with zero hidden markups.
                </p>
              </div>
              <div className="px-6 pb-6 pt-2 border-t border-slate-100 bg-emerald-50/30">
                <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Industry-Lowest Messaging Cost
                </span>
              </div>
            </div>

            {/* Pillar 2: Zero-Downtime Reliability (Blue Theme) */}
            <div className="relative rounded-2xl bg-white border-2 border-blue-200/80 shadow-md hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden group">
              <div className="h-2 w-full bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-500" />
              <div className="p-6 sm:p-7 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                    <Activity className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-black text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full shadow-sm">
                    99.9% Uptime
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                  Zero-Downtime Reliability
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed flex-1">
                  Powered directly by the <strong className="text-slate-900">Official Meta Cloud API</strong> with a 99.9% guaranteed uptime SLA. Your mission-critical OTPs, transactional alerts, and promotional broadcasts deliver instantly with zero latency or delays.
                </p>
              </div>
              <div className="px-6 pb-6 pt-2 border-t border-slate-100 bg-blue-50/30">
                <span className="text-xs font-semibold text-blue-700 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  Sub-second Latency SLA
                </span>
              </div>
            </div>

            {/* Pillar 3: Enterprise-Grade Security (Purple Theme) */}
            <div className="relative rounded-2xl bg-white border-2 border-purple-200/80 shadow-md hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden group">
              <div className="h-2 w-full bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500" />
              <div className="p-6 sm:p-7 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-black text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full shadow-sm">
                    100% Secure
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-purple-700 transition-colors">
                  Enterprise-Grade Security
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed flex-1">
                  Built with end-to-end data encryption and strict privacy protocols. Our platform fully complies with international data security standards, keeping your customer contacts and conversations <strong className="text-slate-900">100% protected</strong>.
                </p>
              </div>
              <div className="px-6 pb-6 pt-2 border-t border-slate-100 bg-purple-50/30">
                <span className="text-xs font-semibold text-purple-700 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-600" />
                  Bank-Grade Encryption
                </span>
              </div>
            </div>

            {/* Pillar 4: Dedicated Human Support (Amber Theme) */}
            <div className="relative rounded-2xl bg-white border-2 border-amber-200/80 shadow-md hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden group">
              <div className="h-2 w-full bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400" />
              <div className="p-6 sm:p-7 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform">
                    <Headphones className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-black text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full shadow-sm">
                    24/7 Support
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-amber-700 transition-colors">
                  Dedicated Human Support
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed flex-1">
                  Beyond automated chatbots, our dedicated technical engineers are always ready round-the-clock to provide hands-on assistance — from <strong className="text-slate-900">Meta API verification and onboarding</strong> to live campaign execution.
                </p>
              </div>
              <div className="px-6 pb-6 pt-2 border-t border-slate-100 bg-amber-50/30">
                <span className="text-xs font-semibold text-amber-700 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-600" />
                  Round-The-Clock Engineers
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SERVICE SELECTOR TABS */}
      {/* ========================================================= */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 flex justify-center">
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm gap-2">
            <button
              onClick={() => setActiveTab("api")}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm sm:text-base transition-all duration-200 ${
                activeTab === "api"
                  ? "bg-[#091E28] text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <Zap className={`w-4 h-4 ${activeTab === "api" ? "text-emerald-400" : "text-slate-500"}`} />
              <span>1. WhatsApp Business API</span>
            </button>

            <button
              onClick={() => setActiveTab("crm")}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm sm:text-base transition-all duration-200 ${
                activeTab === "crm"
                  ? "bg-[#091E28] text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <Users className={`w-4 h-4 ${activeTab === "crm" ? "text-emerald-400" : "text-slate-500"}`} />
              <span>2. WhatsApp CRM & Inbox</span>
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* TAB 1: WHATSAPP BUSINESS API DEEP DIVE */}
      {/* ========================================================= */}
      {activeTab === "api" && (
        <div className="animate-in fade-in-50 duration-300">
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 border border-emerald-200/80 px-3.5 py-1.5 rounded-full">
                  OFFICIAL META CLOUD API
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
                  High-Throughput WhatsApp API for Developers & Brands
                </h2>
                <p className="text-slate-600 text-base sm:text-lg mt-2">
                  Broadcast promotional campaigns, trigger automated OTPs, send transaction notifications, and connect your systems in minutes.
                </p>
              </div>

              {/* 6 Core API Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                
                {/* Feature 1 */}
                <div className="p-7 rounded-2xl bg-gradient-to-br from-emerald-50/50 to-white border border-emerald-100 hover:border-emerald-300 hover:shadow-xl transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-md">
                    <Send className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Bulk Promotional Messaging
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Send targeted marketing broadcasts, festival offers, catalog links, and discount codes to lakhs of opt-in customers with zero number-ban risks.
                  </p>
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-100/60 px-2.5 py-1 rounded-md w-fit">
                    <CheckCircle2 className="w-3.5 h-3.5" /> High Open Rate (98%)
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="p-7 rounded-2xl bg-gradient-to-br from-blue-50/50 to-white border border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-blue-500 text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-md">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Instant OTP & Transaction Alerts
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Trigger real-time password resets, order confirmations, invoice PDFs, shipping updates, and payment receipts with sub-second delivery latency.
                  </p>
                  <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 bg-blue-100/60 px-2.5 py-1 rounded-md w-fit">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Sub-second Delivery
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="p-7 rounded-2xl bg-gradient-to-br from-purple-50/50 to-white border border-purple-100 hover:border-purple-300 hover:shadow-xl transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-purple-500 text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-md">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    REST API & Webhook Engine
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Clean RESTful endpoints with comprehensive documentation in Node.js, Python, PHP, Java, and cURL. Real-time bi-directional webhooks for message statuses.
                  </p>
                  <div className="flex items-center gap-2 text-xs font-semibold text-purple-700 bg-purple-100/60 px-2.5 py-1 rounded-md w-fit">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Simple 5-Min Setup
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="p-7 rounded-2xl bg-gradient-to-br from-amber-50/50 to-white border border-amber-100 hover:border-amber-300 hover:shadow-xl transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-md">
                    <Sliders className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Interactive CTA & Rich Media
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Send quick-reply buttons, call-to-action website buttons, product catalog cards, images, audio, video files, and documents effortlessly.
                  </p>
                  <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 bg-amber-100/60 px-2.5 py-1 rounded-md w-fit">
                    <CheckCircle2 className="w-3.5 h-3.5" /> 3x Engagement Boost
                  </div>
                </div>

                {/* Feature 5 */}
                <div className="p-7 rounded-2xl bg-gradient-to-br from-rose-50/50 to-white border border-rose-100 hover:border-rose-300 hover:shadow-xl transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-rose-500 text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-md">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Green Tick & Verified Sender
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Get end-to-end guidance from our Meta certified team for WhatsApp Official Business Account (Green Tick) verification to build instant trust.
                  </p>
                  <div className="flex items-center gap-2 text-xs font-semibold text-rose-700 bg-rose-100/60 px-2.5 py-1 rounded-md w-fit">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Official Green Badge
                  </div>
                </div>

                {/* Feature 6 */}
                <div className="p-7 rounded-2xl bg-gradient-to-br from-teal-50/50 to-white border border-teal-100 hover:border-teal-300 hover:shadow-xl transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-teal-500 text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-md">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Live Analytics & Delivery Logs
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Track real-time delivery status (Sent, Delivered, Read, Failed) with detailed error code diagnostics and exportable Excel reports.
                  </p>
                  <div className="flex items-center gap-2 text-xs font-semibold text-teal-700 bg-teal-100/60 px-2.5 py-1 rounded-md w-fit">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Real-Time Dashboards
                  </div>
                </div>

              </div>

            </div>
          </section>

        </div>
      )}

      {/* ========================================================= */}
      {/* TAB 2: WHATSAPP CRM & MULTI-AGENT INBOX */}
      {/* ========================================================= */}
      {activeTab === "crm" && (
        <div className="animate-in fade-in-50 duration-300">
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 border border-emerald-200/80 px-3.5 py-1.5 rounded-full">
                  ALL-IN-ONE SMART CRM
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
                  Convert More Chats Into Loyal Customers
                </h2>
                <p className="text-slate-600 text-base sm:text-lg mt-2">
                  Empower your sales & customer support teams with a unified WhatsApp inbox, intelligent automated chatbots, contact tags, and pipeline tracking.
                </p>
              </div>

              {/* 6 CRM Capabilities */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                
                {/* CRM 1 */}
                <div className="p-7 rounded-2xl bg-gradient-to-br from-emerald-50/50 to-white border border-emerald-100 hover:border-emerald-300 hover:shadow-xl transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-md">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Multi-Agent Shared Inbox
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Connect multiple team members to a single official WhatsApp number. Assign conversations, add internal team notes, and prevent missed customer chats.
                  </p>
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-100/60 px-2.5 py-1 rounded-md w-fit">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Zero Chat Overlap
                  </div>
                </div>

                {/* CRM 2 */}
                <div className="p-7 rounded-2xl bg-gradient-to-br from-teal-50/50 to-white border border-teal-100 hover:border-teal-300 hover:shadow-xl transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-teal-500 text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-md">
                    <Bot className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    24/7 AI Chatbots & Auto-Replies
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Automate FAQs, qualify incoming buyer leads, share product pricing, and route complex queries to the right human agent instantly.
                  </p>
                  <div className="flex items-center gap-2 text-xs font-semibold text-teal-700 bg-teal-100/60 px-2.5 py-1 rounded-md w-fit">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Instant 24/7 Replies
                  </div>
                </div>

                {/* CRM 3 */}
                <div className="p-7 rounded-2xl bg-gradient-to-br from-blue-50/50 to-white border border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-blue-500 text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-md">
                    <Workflow className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Automated Drip Sequences
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Set up smart follow-ups: Send abandoned cart recovery messages after 1 hour, feedback survey after delivery, and re-order discounts after 30 days.
                  </p>
                  <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 bg-blue-100/60 px-2.5 py-1 rounded-md w-fit">
                    <CheckCircle2 className="w-3.5 h-3.5" /> 40% Cart Recovery
                  </div>
                </div>

                {/* CRM 4 */}
                <div className="p-7 rounded-2xl bg-gradient-to-br from-amber-50/50 to-white border border-amber-100 hover:border-amber-300 hover:shadow-xl transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-md">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Contact Segmentation & Tags
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Organize contacts with custom labels (VIP, Hot Lead, Pending Payment, Retailer). Filter and broadcast tailored messages to targeted customer groups.
                  </p>
                  <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 bg-amber-100/60 px-2.5 py-1 rounded-md w-fit">
                    <CheckCircle2 className="w-3.5 h-3.5" /> High Precision Targeting
                  </div>
                </div>

                {/* CRM 5 */}
                <div className="p-7 rounded-2xl bg-gradient-to-br from-purple-50/50 to-white border border-purple-100 hover:border-purple-300 hover:shadow-xl transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-purple-500 text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-md">
                    <Share2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Shopify & ERP Sync
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Pre-built integrations with Shopify, WooCommerce, Zoho, Google Sheets, and custom webhooks to keep customer order details synced inside the chat window.
                  </p>
                  <div className="flex items-center gap-2 text-xs font-semibold text-purple-700 bg-purple-100/60 px-2.5 py-1 rounded-md w-fit">
                    <CheckCircle2 className="w-3.5 h-3.5" /> 1-Click Sync
                  </div>
                </div>

                {/* CRM 6 */}
                <div className="p-7 rounded-2xl bg-gradient-to-br from-rose-50/50 to-white border border-rose-100 hover:border-rose-300 hover:shadow-xl transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-rose-500 text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-md">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Agent Performance Analytics
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Measure average first response time (FRT), resolution rate, total chats closed, and customer satisfaction ratings per team agent in real-time.
                  </p>
                  <div className="flex items-center gap-2 text-xs font-semibold text-rose-700 bg-rose-100/60 px-2.5 py-1 rounded-md w-fit">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Team Efficiency Metrics
                  </div>
                </div>

              </div>

            </div>
          </section>
        </div>
      )}

      {/* ========================================================= */}
      {/* 5-STEP PLATFORM WORKFLOW & VISUAL SHOWCASE */}
      {/* ========================================================= */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-200 relative overflow-hidden" id="platform-flow">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>END-TO-END WORKFLOW</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              How Gentro Powers Your WhatsApp Growth
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              A complete, step-by-step visual walkthrough of our enterprise WhatsApp API and CRM platform in action.
            </p>

            {/* Quick Step Indicator Pills */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {platformSteps.map((s, idx) => (
                <a
                  key={s.step}
                  href={`#${s.id}`}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white border border-slate-200 hover:border-emerald-500 hover:text-emerald-700 shadow-sm transition-all hover:-translate-y-0.5"
                >
                  <span className={`w-5 h-5 rounded-full ${s.stepNumStyle} text-[10px] font-bold flex items-center justify-center`}>
                    {idx + 1}
                  </span>
                  <span>{s.title}</span>
                </a>
              ))}
            </div>
          </div>

          {/* 5 Alternating Steps */}
          <div className="space-y-16 sm:space-y-24">
            {platformSteps.map((step, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={step.step}
                  id={step.id}
                  className="scroll-mt-28"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    
                    {/* Text Column */}
                    <div className={`lg:col-span-5 space-y-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                      {/* Step Badge */}
                      <div className="flex items-center gap-2.5">
                        <span className={`w-9 h-9 rounded-xl ${step.stepNumStyle} font-black text-sm flex items-center justify-center shadow-md`}>
                          {step.step}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${step.badgeStyle}`}>
                          {step.badge}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                        {step.title}
                      </h3>

                      {/* Tagline */}
                      <p className="text-sm font-bold text-emerald-700">
                        {step.tagline}
                      </p>

                      {/* Description */}
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        {step.desc}
                      </p>

                      {/* Bullets */}
                      <ul className="space-y-2.5 pt-1">
                        {step.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <div className="pt-2">
                        <a
                          href="https://calendar.app.google/HE3fCD4eECoADNaG8"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg group"
                        >
                          <Calendar className="w-4 h-4 text-emerald-100" />
                          <span>Book Demo & See Live</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>

                    {/* Screenshot Mockup Column */}
                    <div className={`lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                      <div className="rounded-2xl border-2 border-slate-200/90 bg-slate-900 shadow-2xl overflow-hidden group hover:border-emerald-500/50 transition-all duration-300 hover:shadow-emerald-500/10 hover:-translate-y-1">
                        {/* Browser Window Header */}
                        <div className="bg-slate-900 px-4 py-3 flex items-center justify-between border-b border-slate-800">
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1.5">
                              <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
                              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
                              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
                            </div>
                            <span className="text-xs text-slate-400 font-mono pl-2 truncate max-w-[180px] sm:max-w-xs">
                              {step.endpoint}
                            </span>
                          </div>
                          <span className="text-[11px] font-bold tracking-wider text-emerald-400 bg-emerald-950/70 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                            Step {step.step}
                          </span>
                        </div>

                        {/* High-Res Dashboard Screenshot */}
                        <div className="relative bg-slate-950 overflow-hidden">
                          <img
                            src={step.image}
                            alt={`${step.title} - Gentro Technologies Platform Interface`}
                            className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-[1.015]"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Connecting divider between steps */}
                  {idx < platformSteps.length - 1 && (
                    <div className="hidden lg:flex justify-center my-12">
                      <div className="h-8 w-px bg-gradient-to-b from-emerald-500/40 via-slate-300 to-transparent" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* COST CALCULATOR / VALUE SECTION */}
      {/* ========================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#04282B] via-[#071d24] to-[#03151E] text-white p-8 sm:p-12 rounded-3xl border border-emerald-500/20 shadow-2xl relative overflow-hidden">
            
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="text-xs font-bold uppercase tracking-widest text-[#00D084] bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1.5 rounded-full">
                  TRANSPARENT PRICING CALCULATOR
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mt-3">
                  Calculate Your Messaging Cost
                </h2>
                <p className="text-slate-300 text-sm sm:text-base mt-2">
                  See your messaging costs at our flat rate of ₹0.15 (15 paise) per message.
                </p>
              </div>

              {/* Slider */}
              <div className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl backdrop-blur-md space-y-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <label htmlFor="msg-range" className="text-sm text-slate-300 font-medium">
                      Estimated Messages:
                    </label>
                    <p className="text-3xl sm:text-4xl font-black text-[#00D084] mt-1">
                      {calcMessages.toLocaleString("en-IN")} <span className="text-sm font-normal text-slate-300">messages</span>
                    </p>
                  </div>
                  
                  <div className="text-right">
                    <span className="text-xs text-slate-400 block">Estimated Messaging Cost (@ ₹0.15/msg):</span>
                    <span className="text-3xl sm:text-4xl font-black text-white">
                      ₹{(calcMessages * 0.15).toLocaleString("en-IN", { maximumFractionDigits: 0 })}
                    </span>
                  </div>
                </div>

                <input
                  id="msg-range"
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

                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-emerald-300">
                    <CheckCircle2 className="w-4 h-4 text-[#00D084]" />
                    <span>Includes WhatsApp Cloud API Access + Webhooks + CRM</span>
                  </div>

                  <a
                    href="https://calendar.app.google/HE3fCD4eECoADNaG8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#00D084] hover:bg-emerald-400 text-slate-950 font-bold text-sm px-6 py-3 rounded-full transition-all shadow-md group"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Free Demo</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FAQ SECTION */}
      {/* ========================================================= */}
      <section className="py-10 sm:py-16 md:py-20 bg-white relative border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Header Info */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 border border-emerald-200/60 px-3 py-1 rounded-full">
                FAQ
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-600 text-base">
                Quick answers to common queries.
              </p>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 mt-6">
                <p className="text-sm font-bold text-slate-800 mb-1">Still have questions?</p>
                <p className="text-xs text-slate-600 mb-3">Our team is here to assist you 24/7.</p>
                <Link
                  href="/contact"
                  className="text-xs font-bold text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1"
                >
                  <span>Contact support team</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
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
                <li><Link href="/pricing" className="hover:text-emerald-400 transition-colors">Pricing</Link></li>
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
