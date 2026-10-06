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
  Calendar
} from "lucide-react";

export default function ServicesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"api" | "crm">("api");
  const [activeCodeTab, setActiveCodeTab] = useState<"curl" | "node" | "python">("node");
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [calcMessages, setCalcMessages] = useState<number>(50000);

  const copySnippet = (codeText: string) => {
    navigator.clipboard.writeText(codeText);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const codeSnippets = {
    node: `// Gentro Technologies - WhatsApp API Node.js SDK
import axios from "axios";

async function sendWhatsAppMessage() {
  const response = await axios.post(
    "https://api.gentrotechnologies.com/v1/messages/send",
    {
      to: "+919876543210",
      type: "template",
      template: {
        name: "order_confirmation_v2",
        language: { code: "en" },
        components: [
          {
            type: "body",
            parameters: [
              { type: "text", text: "Rahul" },
              { type: "text", text: "#ORD-99824" }
            ]
          }
        ]
      }
    },
    {
      headers: {
        Authorization: "Bearer YOUR_GENTRO_API_KEY",
        "Content-Type": "application/json"
      }
    }
  );

  console.log("Message Delivered:", response.data);
}

sendWhatsAppMessage();`,
    curl: `curl -X POST "https://api.gentrotechnologies.com/v1/messages/send" \\
  -H "Authorization: Bearer YOUR_GENTRO_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "+919876543210",
    "type": "template",
    "template": {
      "name": "promo_mega_sale",
      "language": { "code": "en" },
      "components": [
        { "type": "body", "parameters": [{ "type": "text", "text": "Flat 50% OFF" }] }
      ]
    }
  }'`,
    python: `# Gentro Technologies - WhatsApp API Python Example
import requests

url = "https://api.gentrotechnologies.com/v1/messages/send"
headers = {
    "Authorization": "Bearer YOUR_GENTRO_API_KEY",
    "Content-Type": "application/json"
}

payload = {
    "to": "+919876543210",
    "type": "text",
    "text": {
        "body": "Namaste! Aapka order dispatch ho chuka hai. Track karein: gentro.tech/tr/8821"
    }
}

response = requests.post(url, json=payload, headers=headers)
print("Status Code:", response.status_code)
print("Response:", response.json())`
  };

  const faqs = [
    {
      q: "WhatsApp Business API aur Normal WhatsApp Business App mein kya farq hai?",
      a: "Normal WhatsApp Business App 1 phone tak limited hota hai aur bulk campaign bhejne par number ban ho sakta hai. Gentro WhatsApp API official Meta infrastructure par chalti hai, jisme unlimited bulk messages, multi-agent login, chatbots, aur CRM integrations bina number ban risk ke milte hain."
    },
    {
      q: "Gentro CRM se team ke multi-agents ek saath customer chat kaise handle karenge?",
      a: "Gentro WhatsApp CRM mein 'Unified Team Inbox' milta hai. Ek hi WhatsApp number par aapki poori sales aur support team login kar sakti hai, tickets assign kar sakti hai, internal notes daal sakti hai, aur customer history dekh sakti hai."
    },
    {
      q: "Per message rate kya hai aur software license cost kitna hai?",
      a: "Gentro Technologies par promotional aur utility messages sirf ₹0.15 (15 paise) per message se start hote hain. Complete WhatsApp API & Multi-Agent CRM Software ka annual license sirf ₹7,999 / yearly hai jisme unlimited agent logins aur chatbot automation included hai."
    },
    {
      q: "Kya hum Shopify, WooCommerce ya CRM jaise HubSpot/Zoho se connect kar sakte hain?",
      a: "Haan! Gentro WhatsApp API aur CRM mein readymade webhooks aur REST API support hai. Aap Shopify abandoned cart recovery, automated OTP, order dispatch updates, aur lead sync asaani se 5 minute mein automate kar sakte hain."
    },
    {
      q: "Green Tick Verified Badge ke liye eligibility kaise check karein?",
      a: "Hamari dedicated onboarding team aapke official Meta Business verification aur WhatsApp Official Business Account (Green Tick) approval process mein end-to-end assist karti hai."
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
            <Link href="/about" className="hover:text-emerald-600 transition-colors">
              About Us
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
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-emerald-600"
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
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]">
              Scale Conversions With <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-[#00D084] bg-clip-text text-transparent">
                WhatsApp API & Smart CRM
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed">
              Power your business communication with high-throughput WhatsApp Cloud API, AI Chatbots, and a unified Multi-Agent CRM Inbox designed for hyper-growth.
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

              <a
                href="#developer-api"
                className="inline-flex items-center gap-2.5 text-slate-200 hover:text-white font-semibold text-base px-7 py-4 rounded-full border border-slate-700 hover:border-emerald-400/60 bg-white/5 backdrop-blur-md transition-all"
              >
                <Code2 className="w-4 h-4 text-emerald-400" />
                <span>Explore API Docs</span>
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-slate-800/80 max-w-4xl mx-auto">
              <div className="text-center p-3 rounded-2xl bg-white/5 border border-white/5">
                <p className="text-2xl sm:text-3xl font-black text-[#00D084]">₹0.15</p>
                <p className="text-xs text-slate-400 uppercase tracking-wider mt-1">Starting Cost / Msg</p>
              </div>
              <div className="text-center p-3 rounded-2xl bg-white/5 border border-white/5">
                <p className="text-2xl sm:text-3xl font-black text-white">99.9%</p>
                <p className="text-xs text-slate-400 uppercase tracking-wider mt-1">Uptime SLA</p>
              </div>
              <div className="text-center p-3 rounded-2xl bg-white/5 border border-white/5">
                <p className="text-2xl sm:text-3xl font-black text-white">&lt; 2 Mins</p>
                <p className="text-xs text-slate-400 uppercase tracking-wider mt-1">Instant Activation</p>
              </div>
              <div className="text-center p-3 rounded-2xl bg-white/5 border border-white/5">
                <p className="text-2xl sm:text-3xl font-black text-[#00D084]">100%</p>
                <p className="text-xs text-slate-400 uppercase tracking-wider mt-1">Official Meta API</p>
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

          {/* ========================================================= */}
          {/* DEVELOPER API SNIPPET SECTION */}
          {/* ========================================================= */}
          <section id="developer-api" className="py-16 bg-[#03151E] text-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Left Info */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Developer First Architecture</span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                    Integrate in 3 Lines of Code
                  </h2>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    Our robust REST APIs let you seamlessly connect your website, ERP, CRM, mobile apps, or backend database with 99.9% uptime SLA and instant webhook alerts.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm text-slate-200">SDKs for Node.js, Python, PHP, cURL, Java</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm text-slate-200">Real-time webhook events for read receipts & replies</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm text-slate-200">Automated rate-limit throttling & automatic retry</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-2 bg-[#00D084] hover:bg-emerald-400 text-slate-950 font-bold text-sm px-6 py-3.5 rounded-full transition-all shadow-lg group"
                    >
                      <span>Get Free API Key</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Right Code Window */}
                <div className="lg:col-span-7">
                  <div className="bg-[#0b212c] border border-slate-700/80 rounded-2xl overflow-hidden shadow-2xl">
                    {/* Header */}
                    <div className="flex items-center justify-between px-4 py-3 bg-[#07171e] border-b border-slate-700/80">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                        <span className="text-xs font-mono text-slate-400 ml-2">send-message.js</span>
                      </div>

                      {/* Language Selectors */}
                      <div className="flex items-center gap-2">
                        <div className="flex p-0.5 rounded-lg bg-slate-800 border border-slate-700">
                          <button
                            onClick={() => setActiveCodeTab("node")}
                            className={`px-3 py-1 text-xs font-mono rounded-md transition-colors ${
                              activeCodeTab === "node" ? "bg-emerald-600 text-white" : "text-slate-400 hover:text-white"
                            }`}
                          >
                            Node.js
                          </button>
                          <button
                            onClick={() => setActiveCodeTab("curl")}
                            className={`px-3 py-1 text-xs font-mono rounded-md transition-colors ${
                              activeCodeTab === "curl" ? "bg-emerald-600 text-white" : "text-slate-400 hover:text-white"
                            }`}
                          >
                            cURL
                          </button>
                          <button
                            onClick={() => setActiveCodeTab("python")}
                            className={`px-3 py-1 text-xs font-mono rounded-md transition-colors ${
                              activeCodeTab === "python" ? "bg-emerald-600 text-white" : "text-slate-400 hover:text-white"
                            }`}
                          >
                            Python
                          </button>
                        </div>

                        <button
                          onClick={() => copySnippet(codeSnippets[activeCodeTab])}
                          className="flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors border border-slate-700"
                        >
                          {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{copiedCode ? "Copied" : "Copy"}</span>
                        </button>
                      </div>
                    </div>

                    {/* Code Body */}
                    <div className="p-5 font-mono text-xs sm:text-sm text-emerald-300/90 overflow-x-auto leading-relaxed max-h-[380px]">
                      <pre>
                        <code>{codeSnippets[activeCodeTab]}</code>
                      </pre>
                    </div>

                    <div className="px-5 py-3 bg-[#07171e] border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        API Status: 100% Operational (Latency ~120ms)
                      </span>
                      <span className="font-mono text-emerald-400">HTTP 200 OK</span>
                    </div>

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
      {/* HOW IT WORKS / ONBOARDING PROCESS */}
      {/* ========================================================= */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-100/80 border border-emerald-200 px-3.5 py-1.5 rounded-full">
              SIMPLE ONBOARDING
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              Go Live in Less Than 2 Minutes
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-2">
              No complicated technical delays. We handle everything from number verification to template approvals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all relative">
              <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white font-black text-xl flex items-center justify-center mb-6 shadow-md">
                1
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Register & Verify Number
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Connect your brand phone number or use a fresh virtual number through official Meta embedded signup.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all relative">
              <div className="w-12 h-12 rounded-xl bg-teal-500 text-white font-black text-xl flex items-center justify-center mb-6 shadow-md">
                2
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Choose API or CRM Inbox
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Get your instant API key for backend code or invite your sales team to our multi-agent CRM portal.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all relative">
              <div className="w-12 h-12 rounded-xl bg-[#091E28] text-emerald-400 font-black text-xl flex items-center justify-center mb-6 shadow-md">
                3
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Launch & Scale Campaigns
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Send broadcasts, trigger automated workflows, and watch your business revenue grow at ₹0.15/msg.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* TRANSPARENT PRICING PLANS */}
      {/* ========================================================= */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-100/80 border border-emerald-200 px-3.5 py-1.5 rounded-full">
              TRANSPARENT PRICING
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              Simple, Predictable & High-ROI Plans
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-2">
              Get enterprise-grade software and industry-lowest messaging rates without hidden costs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Plan 1: WhatsApp API & CRM Software */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-emerald-500 shadow-xl relative flex flex-col justify-between">
              <div className="absolute -top-4 left-8 bg-emerald-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                MOST POPULAR FOR BUSINESSES
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
                  Complete all-in-one software platform for team live chat, chatbots, automation, broadcast campaigns and API management.
                </p>

                <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-slate-100">
                  <span className="text-4xl sm:text-5xl font-black text-slate-900">₹7,999</span>
                  <span className="text-slate-500 font-semibold">/ yearly</span>
                </div>

                <ul className="space-y-3.5 text-sm text-slate-700 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span><strong>Unified Multi-Agent Inbox</strong> (Unlimited Team Logins)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span><strong>No-Code Chatbot & Flow Builder</strong></span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span><strong>Official WhatsApp Cloud API</strong> Direct Access</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span><strong>Contacts & Group Segmentation</strong> (Unlimited Contacts)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span><strong>E-commerce & Webhook Integrations</strong> (Shopify, CRM)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span><strong>Real-time Analytics & Exportable Reports</strong></span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span><strong>Dedicated Technical & Onboarding Support</strong></span>
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
                    Bulk Messaging Credits
                  </h3>
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-800 flex items-center justify-center shrink-0">
                    <Send className="w-6 h-6" />
                  </div>
                </div>

                <p className="text-slate-600 text-sm mb-6">
                  Transparent pay-as-you-go message pricing for marketing campaigns, transactional OTPs, and alerts.
                </p>

                <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-slate-100">
                  <span className="text-4xl sm:text-5xl font-black text-slate-900">₹0.15</span>
                  <span className="text-slate-500 font-semibold">(15 paise) / message</span>
                </div>

                <ul className="space-y-3.5 text-sm text-slate-700 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span><strong>High Throughput & 99% Delivery Rate</strong></span>
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
                    <span><strong>Live Read & Delivery Status Webhooks</strong></span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span><strong>No Hidden Markups or Minimum Wallet Lock-in</strong></span>
                  </li>
                </ul>
              </div>

              <Link
                href="/#contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#091E28] hover:bg-slate-900 text-white font-bold text-base py-4 rounded-xl transition-all shadow-md group"
              >
                <span>Recharge / Talk to Sales</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

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
                  Calculate Your Monthly Messaging Cost
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
                      Estimated Monthly Messages:
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
                  min="5000"
                  max="500000"
                  step="5000"
                  value={calcMessages}
                  onChange={(e) => setCalcMessages(Number(e.target.value))}
                  className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#00D084]"
                />

                <div className="flex justify-between text-xs text-slate-400 font-mono">
                  <span>5,000 msgs</span>
                  <span>1,00,000 msgs</span>
                  <span>5,00,000 msgs</span>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-emerald-300">
                    <CheckCircle2 className="w-4 h-4 text-[#00D084]" />
                    <span>Includes WhatsApp Cloud API Access + Webhooks + CRM</span>
                  </div>

                  <Link
                    href="/#contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#00D084] hover:bg-emerald-400 text-slate-950 font-bold text-sm px-6 py-3 rounded-full transition-all shadow-md group"
                  >
                    <span>Get Custom Quote</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FAQ SECTION */}
      {/* ========================================================= */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-100/80 border border-emerald-200 px-3.5 py-1.5 rounded-full">
              GOT QUESTIONS?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-base mt-2">
              Everything you need to know about our WhatsApp API and CRM integrations.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-emerald-600 shrink-0 transition-transform duration-200 ${
                      activeFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/30">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* CTA BANNER */}
      {/* ========================================================= */}
      <section className="py-16 bg-[#04282B] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Ready to Upgrade Your WhatsApp Strategy?
              </h2>
              <p className="text-emerald-200/90 text-base max-w-2xl">
                Get started today with official Meta Cloud API, automated CRM workflows, and dedicated onboarding support.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
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
                <span>Talk to Expert</span>
              </a>
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
