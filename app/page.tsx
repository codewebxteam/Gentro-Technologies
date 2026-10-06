"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Play,
  CheckCircle2,
  ShieldCheck,
  Zap,
  TrendingUp,
  DollarSign,
  Megaphone,
  Headphones,
  ShoppingCart,
  Users,
  Settings2,
  Copy,
  Check,
  Star,
  ChevronDown,
  PhoneCall,
  Mail,
  MapPin,
  Menu,
  X,
  MessageCircle,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Shield,
  Activity,
  Layers,
  Sparkles,
  Smartphone,
  Globe,
  Database,
  Bot,
  Send,
  Calendar
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedKey, setCopiedKey] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const handleCopy = () => {
    navigator.clipboard.writeText("sk_live_98a72b14e590c8842");
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  const services = [
    {
      title: "Promotional Messaging",
      description: "Boost sales with targeted offers & updates.",
      icon: Megaphone,
      bg: "bg-emerald-50",
      border: "border-emerald-100",
      accent: "bg-emerald-500",
      textAccent: "text-emerald-600",
      tag: "High ROI"
    },
    {
      title: "Customer Support",
      description: "Solve queries faster and build trust.",
      icon: Headphones,
      bg: "bg-blue-50",
      border: "border-blue-100",
      accent: "bg-blue-500",
      textAccent: "text-blue-600",
      tag: "24/7 Bot"
    },
    {
      title: "Order & Payment Notifications",
      description: "Keep customers updated automatically.",
      icon: ShoppingCart,
      bg: "bg-amber-50",
      border: "border-amber-100",
      accent: "bg-amber-500",
      textAccent: "text-amber-600",
      tag: "Instant Alerts"
    },
    {
      title: "Bulk Campaigns",
      description: "Reach thousands instantly at low cost.",
      icon: Users,
      bg: "bg-rose-50",
      border: "border-rose-100",
      accent: "bg-rose-500",
      textAccent: "text-rose-600",
      tag: "Unlimited"
    },
    {
      title: "API Integration",
      description: "Easy integration with your website, CRM or app.",
      icon: Settings2,
      bg: "bg-purple-50",
      border: "border-purple-100",
      accent: "bg-purple-500",
      textAccent: "text-purple-600",
      tag: "REST API"
    }
  ];

  const whyChooseUsFeatures = [
    {
      title: "Lowest Cost",
      desc: "Just ₹0.15 per message",
      icon: DollarSign,
      color: "text-emerald-600",
      bgColor: "bg-emerald-100/70",
    },
    {
      title: "High Delivery Rate",
      desc: "Upto 99% success rate",
      icon: TrendingUp,
      color: "text-emerald-600",
      bgColor: "bg-emerald-100/70",
    },
    {
      title: "Easy Integration",
      desc: "Developer-friendly API",
      icon: Layers,
      color: "text-emerald-600",
      bgColor: "bg-emerald-100/70",
    },
    {
      title: "Real-Time Reports",
      desc: "Track performance live",
      icon: Activity,
      color: "text-emerald-600",
      bgColor: "bg-emerald-100/70",
    },
    {
      title: "Secure & Compliant",
      desc: "100% data security",
      icon: ShieldCheck,
      color: "text-emerald-600",
      bgColor: "bg-emerald-100/70",
    },
    {
      title: "Dedicated Support",
      desc: "Always here to help",
      icon: Headphones,
      color: "text-emerald-600",
      bgColor: "bg-emerald-100/70",
    }
  ];

  const steps = [
    {
      num: 1,
      title: "Sign Up",
      desc: "Create your account in seconds.",
      icon: Users,
      color: "bg-emerald-500",
      lightColor: "bg-emerald-50 border-emerald-200"
    },
    {
      num: 2,
      title: "Connect & Integrate",
      desc: "Get API key and integrate with your system.",
      icon: Settings2,
      color: "bg-blue-500",
      lightColor: "bg-blue-50 border-blue-200"
    },
    {
      num: 3,
      title: "Start Messaging",
      desc: "Send bulk messages and grow your business.",
      icon: Sparkles,
      color: "bg-amber-500",
      lightColor: "bg-amber-50 border-amber-200"
    }
  ];

  const testimonials = [
    {
      quote: "Gentro Technologies ne hamare business ke liye game changer sabit hua. Low cost aur high delivery rate, dono milna mushkil tha. Highly recommended!",
      name: "Rahul Sharma",
      role: "E-commerce Business Owner",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
    },
    {
      quote: "API integration bahut easy tha aur support team hamesha available rehti hai. Ab hum apne offers directly customers tak pahuncha pa rahe hain.",
      name: "Priya Verma",
      role: "Retail Store Owner",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80"
    },
    {
      quote: "Sirf 15 paise per message mein itna powerful platform milna amazing hai. Hamari sales clearly badhi hai aur customer repeat rate bhi.",
      name: "Amit Kumar",
      role: "Digital Marketing Agency",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
    }
  ];

  const faqs = [
    {
      question: "What is the cost per message and software license?",
      answer: "Hamara flat messaging rate sirf ₹0.15 (15 paise) per message hai bina kisi hidden charges ke. Complete WhatsApp API & Multi-Agent CRM Software ka annual license sirf ₹7,999 / yearly hai jisme unlimited agent logins aur automation features included hain."
    },
    {
      question: "How can I integrate the API?",
      answer: "Aapko dashboard se instant API key mil jati hai. Hamare REST APIs, Node.js, Python, PHP, Java aur webhook documentation ke saath 5 minute me integrate kar sakte hain."
    },
    {
      question: "Is there any monthly minimum?",
      answer: "Nahi, koi bhi monthly minimum commitment ya lock-in period nahi hai. Aap flexibly wallet recharge karke use kar sakte hain."
    },
    {
      question: "Do you provide customer support?",
      answer: "Ji haan! Hamari dedicated technical support team 24/7 WhatsApp, Email aur Phone par available rehti hai."
    }
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

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-emerald-500 selection:text-white relative">
      {/* FAQ Schema for Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Top Banner Accent */}
      <div className="h-1 bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-600 w-full" />

      {/* ========================================================= */}
      {/* HEADER / NAVBAR */}
      {/* ========================================================= */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.04)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo - larger without duplicate text */}
          <a href="#" className="flex items-center group">
            <img
              src="https://ik.imagekit.io/0s0fb4b2b/Gentro/Glossy%20Gentro%20Technologies%20Logo.png"
              alt="Gentro Technologies Logo"
              className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>

          {/* Desktop Nav Links (Without Blog) */}
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-slate-600">
            <a href="#" className="text-emerald-600 font-semibold transition-colors hover:text-emerald-700 relative py-1">
              Home
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-600 rounded-full"></span>
            </a>
            <a href="/services" className="hover:text-emerald-600 transition-colors">
              Services
            </a>
            <a href="/about" className="hover:text-emerald-600 transition-colors">
              About Us
            </a>
            <a href="/contact" className="hover:text-emerald-600 transition-colors">
              Contact
            </a>
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
              <a
                href="#"
                onClick={() => setMobileMenuOpen(false)}
                className="text-emerald-600 hover:text-emerald-700"
              >
                Home
              </a>
              <a
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-emerald-600"
              >
                Services
              </a>
              <a
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-emerald-600"
              >
                About Us
              </a>
              <a
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-emerald-600"
              >
                Contact
              </a>
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
      {/* HERO SECTION WITH FULL IMAGES (ZERO CROPPING) */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden bg-white">
        {/* Mobile / Phone Hero View - 100% Full Uncropped Image */}
        <div className="block md:hidden relative w-full">
          <img
            src="https://ik.imagekit.io/0s0fb4b2b/Gentro/WhatsApp%20Marketing,%20More%20Growth.webp"
            alt="WhatsApp Marketing Mobile"
            className="w-full h-auto object-contain block"
          />
          {/* Mobile Text Overlay - Positioned Top 100px */}
          <div className="absolute inset-x-0 top-[100px] px-4 text-center z-10 space-y-2.5">
            {/* Handwritten Tagline Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-100/90 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-bold tracking-wide shadow-sm backdrop-blur-sm">
              <span className="text-emerald-600">✦</span>
              <span className="italic font-serif text-sm">Bade Sapne. Chhote Kharch.</span>
              <span className="text-emerald-600">✦</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[28px] sm:text-[34px] font-black text-slate-900 tracking-tight leading-tight">
              Har Message Ab <br />
              Sirf{" "}
              <span className="relative inline-block px-2.5 py-0.5 mx-0.5 text-slate-900 bg-[#FFB800] rounded-lg shadow-sm">
                15 Paisa
                <span className="absolute -top-1.5 -right-1.5 text-amber-500 text-xs">✨</span>
              </span>{" "}
              Mein! 😃
            </h1>

            {/* Hindi / Hinglish Description */}
            <p className="text-slate-700 text-sm sm:text-base font-medium max-w-sm sm:max-w-md mx-auto leading-relaxed bg-white/70 backdrop-blur-xs rounded-xl p-2 shadow-sm">
              Smart messaging ka naya tareeka — jahan har message sirf kharch nahi, balki ek nayi opportunity ban jata hai.
            </p>
          </div>
        </div>

        {/* Desktop / Laptop Hero View */}
        <div className="hidden md:flex relative min-h-[580px] lg:min-h-[640px] items-center pt-12 pb-20 lg:pt-20 lg:pb-28">
          {/* Desktop Background Image - Full Edge-to-Edge Cover */}
          <img
            src="https://ik.imagekit.io/0s0fb4b2b/Gentro/WhatsApp%20Marketing%20Made%20Simple.webp"
            alt="WhatsApp Marketing Hero Background"
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
          />

          {/* Soft Left Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/50 to-transparent pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
            <div className="max-w-3xl space-y-6 sm:space-y-8 text-left">
              
              {/* Handwritten Tagline Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/90 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-bold tracking-wide shadow-sm backdrop-blur-sm">
                <span className="text-emerald-600">✦</span>
                <span className="italic font-serif text-base">Bade Sapne. Chhote Kharch.</span>
                <span className="text-emerald-600">✦</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-black text-slate-900 tracking-tight leading-[1.12]">
                Har Message Ab <br className="hidden sm:inline" />
                Sirf{" "}
                <span className="relative inline-block px-3 py-1 mx-1 text-slate-900 bg-[#FFB800] rounded-xl shadow-md transform -rotate-1 hover:rotate-0 transition-transform">
                  15 Paisa
                  {/* Decorative sketch lines */}
                  <span className="absolute -top-2 -right-2 text-amber-500 text-xs">✨</span>
                </span>{" "}
                <br className="hidden sm:inline" />
                Mein! <span className="inline-block hover:scale-125 transition-transform cursor-default">😃</span>
              </h1>

              {/* Hindi / Hinglish Description */}
              <p className="text-slate-700 text-base sm:text-lg lg:text-xl font-normal max-w-xl leading-relaxed">
                Smart messaging ka naya tareeka — jahan har message sirf kharch nahi, balki ek nayi opportunity ban jata hai.
              </p>

              {/* 4 Feature Badges Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 max-w-xl">
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/95 backdrop-blur-sm border border-slate-200/80 shadow-sm hover:border-emerald-300 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0 font-bold text-sm">
                    ₹
                  </div>
                  <div className="text-left">
                    <p className="text-[13px] font-bold text-slate-900 leading-tight">Behtar</p>
                    <p className="text-[11px] text-slate-500">Reach</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/95 backdrop-blur-sm border border-slate-200/80 shadow-sm hover:border-emerald-300 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-[13px] font-bold text-slate-900 leading-tight">Zyada</p>
                    <p className="text-[11px] text-slate-500">Engagement</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/95 backdrop-blur-sm border border-slate-200/80 shadow-sm hover:border-emerald-300 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-[13px] font-bold text-slate-900 leading-tight">Secure</p>
                    <p className="text-[11px] text-slate-500">& Reliable</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/95 backdrop-blur-sm border border-slate-200/80 shadow-sm hover:border-emerald-300 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-[13px] font-bold text-slate-900 leading-tight">High</p>
                    <p className="text-[11px] text-slate-500">Delivery Rate</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
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

                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="inline-flex items-center gap-3 text-slate-800 hover:text-emerald-700 font-semibold text-sm sm:text-base px-5 py-3.5 rounded-full border border-slate-300 bg-white/80 backdrop-blur-sm hover:border-emerald-300 hover:bg-white transition-all group cursor-pointer shadow-sm"
                >
                  <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                    <Play className="w-3.5 h-3.5 fill-white translate-x-0.5" />
                  </div>
                  <span>Watch How It Works <span className="text-xs text-slate-500 font-normal">(1 min)</span></span>
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* OUR SERVICES SECTION */}
      {/* ========================================================= */}
      <section id="services" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header & View All */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 border border-emerald-200/60 px-3 py-1 rounded-full">
                OUR SERVICES
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
                Powerful WhatsApp Solutions <br className="hidden sm:inline" />
                for Every Business
              </h2>
              <p className="text-slate-600 text-base sm:text-lg mt-3 max-w-2xl">
                From promotions to customer support — we help businesses connect, engage and grow with WhatsApp.
              </p>
            </div>

            <a
              href="/services"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm px-6 py-3 rounded-full transition-all shadow-sm hover:shadow-md self-start md:self-auto group"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* 5 Service Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {services.map((srv, idx) => {
              const IconComp = srv.icon;
              return (
                <div
                  key={idx}
                  className={`${srv.bg} ${srv.border} border rounded-2xl p-6 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group`}
                >
                  <div>
                    {/* Icon Badge */}
                    <div className={`w-12 h-12 rounded-xl ${srv.accent} text-white flex items-center justify-center shadow-md mb-6 group-hover:scale-110 transition-transform`}>
                      <IconComp className="w-6 h-6" />
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 leading-snug mb-2">
                      {srv.title}
                    </h3>
                    
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {srv.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${srv.textAccent} bg-white/80`}>
                      {srv.tag}
                    </span>
                    <button
                      aria-label={srv.title}
                      className={`w-8 h-8 rounded-full ${srv.accent} text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform`}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* WHY BUSINESSES CHOOSE US SECTION */}
      {/* ========================================================= */}
      <section id="why-us" className="py-20 bg-slate-50/60 relative overflow-hidden border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image: WhatsApp Marketing Success Trio */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <div className="relative w-full max-w-[420px] rounded-2xl overflow-hidden drop-shadow-xl hover:scale-[1.02] transition-transform duration-300">
                <img
                  src="https://ik.imagekit.io/0s0fb4b2b/Gentro/WhatsApp%20Marketing%20Success%20Trio.webp"
                  alt="Why Businesses Choose Gentro Technologies"
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </div>
            </div>

            {/* Right Features Grid */}
            <div className="lg:col-span-7 space-y-3.5">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 border border-emerald-200/60 px-3 py-1 rounded-full">
                  WHY GENTRO TECHNOLOGIES
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
                  Why Businesses Choose Us?
                </h2>
                <p className="text-slate-600 text-sm sm:text-base font-medium mt-0.5">
                  Affordable. Reliable. Powerful.
                </p>
              </div>

              {/* 6 Features Grid - Compact Area Matching Left Image */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {whyChooseUsFeatures.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="bg-white border border-slate-200/80 rounded-xl p-3 sm:p-3.5 flex items-start gap-3 hover:shadow-md hover:border-emerald-200 transition-all group"
                    >
                      <div className={`w-9 h-9 rounded-lg ${item.bgColor} ${item.color} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Assurance */}
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-emerald-950">
                  Instant activation in less than 2 minutes with 99.9% guaranteed uptime SLA.
                </span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* HOW IT WORKS SECTION */}
      {/* ========================================================= */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 border border-emerald-200/60 px-3 py-1 rounded-full">
              HOW IT WORKS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              Get Started in 3 Simple Steps
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-2">
              Start sending messages in minutes — no technical hassle.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* 3 Step Cards */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all relative flex flex-col items-start"
                  >
                    {/* Step Number & Icon */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className={`w-8 h-8 rounded-full ${step.color} text-white font-bold text-sm flex items-center justify-center shadow`}>
                        {step.num}
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Right API Key Interactive Mockup Card */}
            <div className="lg:col-span-4 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-6 shadow-xl border border-slate-700">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-700">
                <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                  API Key
                </span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono">
                  ACTIVE
                </span>
              </div>

              {/* API Key Box */}
              <div className="bg-slate-950/80 rounded-xl p-3 border border-slate-700 flex items-center justify-between gap-2 mb-5">
                <span className="font-mono text-xs text-slate-300 truncate">
                  sk_live_98a72b14e590c8842...
                </span>
                <button
                  onClick={handleCopy}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors shrink-0"
                >
                  {copiedKey ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey ? "Copied" : "Copy"}</span>
                </button>
              </div>

              <div className="space-y-2">
                <p className="text-xs text-slate-400 font-medium">Integrate with:</p>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 bg-slate-800 text-slate-200 text-xs px-2.5 py-1 rounded-md border border-slate-700">
                    <Globe className="w-3.5 h-3.5 text-blue-400" />
                    <span>Website</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-800 text-slate-200 text-xs px-2.5 py-1 rounded-md border border-slate-700">
                    <Database className="w-3.5 h-3.5 text-rose-400" />
                    <span>CRM</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-800 text-slate-200 text-xs px-2.5 py-1 rounded-md border border-slate-700">
                    <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Mobile Apps</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* CAMPAIGN BANNER / CTA WITH BADGE */}
      {/* ========================================================= */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-100/70 border border-emerald-200/80 p-6 sm:p-10 overflow-hidden shadow-lg">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-3 text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Start Your WhatsApp Campaign Today!
                </h2>
                <p className="text-slate-700 text-sm sm:text-base max-w-xl mx-auto lg:mx-0">
                  Revolutionize your customer communication with the lowest cost messaging.
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3">
                  <a
                    href="https://calendar.app.google/HE3fCD4eECoADNaG8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-full transition-all shadow-md hover:shadow-lg group"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Book Demo Now</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <a
                    href="tel:+918084037252"
                    className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm sm:text-base px-6 py-3.5 rounded-full border border-slate-300 shadow-sm transition-all"
                  >
                    <PhoneCall className="w-4 h-4 text-emerald-600" />
                    <span>Talk to Our Expert</span>
                  </a>
                </div>
              </div>

              {/* Right Image Badge - Larger size matching text height */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[360px] sm:max-w-[420px] drop-shadow-xl hover:scale-105 transition-transform duration-300">
                  <img
                    src="https://ik.imagekit.io/0s0fb4b2b/Gentro/WhatsApp%20Per-Message%20Cost%20Badge.webp"
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
      {/* TRANSPARENT PRICING PLANS */}
      {/* ========================================================= */}
      <section id="pricing" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-100/80 border border-emerald-200 px-3.5 py-1.5 rounded-full">
              TRANSPARENT PRICING
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              Simple, Predictable & High-ROI Plans
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-2">
              Complete software solution aur industry-lowest messaging rate ek saath.
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
                  Team live chat, chatbots, automation, contact management aur official Meta Cloud API management ke liye all-in-one software.
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
                    <span><strong>Shopify, CRM & Webhook Integrations</strong></span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span><strong>Real-time Analytics & Exportable Delivery Reports</strong></span>
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
                    Pay-As-You-Go Messaging
                  </h3>
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-800 flex items-center justify-center shrink-0">
                    <Send className="w-6 h-6" />
                  </div>
                </div>

                <p className="text-slate-600 text-sm mb-6">
                  Transparent per-message pricing marketing broadcasts, transactional OTPs, aur customer alerts ke liye.
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
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#091E28] hover:bg-slate-900 text-white font-bold text-base py-4 rounded-xl transition-all shadow-md group"
              >
                <span>Recharge / Talk to Sales</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* TESTIMONIALS SECTION */}
      {/* ========================================================= */}
      <section id="testimonials" className="py-20 bg-slate-50/50 relative border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 border border-emerald-200/60 px-3 py-1 rounded-full">
                TESTIMONIALS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
                What Our Clients Say
              </h2>
              <p className="text-slate-600 text-base mt-1">
                Real businesses. Real growth. Real results.
              </p>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setTestimonialIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-100 transition-colors shadow-sm"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setTestimonialIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-100 transition-colors shadow-sm"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200/80 rounded-2xl p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-all relative group"
              >
                <div>
                  {/* Quote Icon */}
                  <span className="text-4xl font-serif text-emerald-500 leading-none select-none">
                    “
                  </span>
                  
                  <p className="text-sm sm:text-base text-slate-700 mt-2 mb-6 leading-relaxed">
                    &quot;{t.quote}&quot;
                  </p>
                </div>

                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-4 text-amber-400">
                    {[...Array(t.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-11 h-11 rounded-full object-cover border border-emerald-300"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{t.name}</h4>
                      <p className="text-xs text-slate-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* FAQ SECTION */}
      {/* ========================================================= */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
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
                <a
                  href="#contact"
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
      {/* PRE-FOOTER BANNER (STATS & CTA) */}
      {/* ========================================================= */}
      <section className="bg-[#04282B] text-white py-12 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* CTA text */}
            <div className="text-center lg:text-left space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Let&apos;s Build Something Bigger Together
              </h2>
              <p className="text-emerald-200/90 text-sm sm:text-base">
                Join thousands of businesses already growing with Gentro Technologies.
              </p>
            </div>

            {/* Button & Stats */}
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#00D084] hover:bg-emerald-400 text-slate-950 font-bold text-sm sm:text-base px-7 py-3.5 rounded-full transition-all shadow-lg hover:scale-105 shrink-0 group"
              >
                <span>Get Started Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="flex items-center gap-6 sm:gap-8 border-t sm:border-t-0 sm:border-l border-emerald-800/80 pt-4 sm:pt-0 sm:pl-8">
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-black text-white">1K+</p>
                  <p className="text-[11px] uppercase tracking-wider text-emerald-300">Businesses</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-black text-white">5M+</p>
                  <p className="text-[11px] uppercase tracking-wider text-emerald-300">Messages Sent</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-black text-white">99%</p>
                  <p className="text-[11px] uppercase tracking-wider text-emerald-300">Success Rate</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FOOTER */}
      {/* ========================================================= */}
      <footer id="contact" className="bg-[#03151E] text-slate-400 pt-16 pb-12 border-t border-slate-800">
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
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Home</a></li>
                <li><a href="/services" className="hover:text-emerald-400 transition-colors">Services</a></li>
                <li><a href="/about" className="hover:text-emerald-400 transition-colors">About Us</a></li>
                <li><a href="/contact" className="hover:text-emerald-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Column 3: Legal & Compliance */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                Legal & Compliance
              </h4>
              <ul className="space-y-2 text-xs">
                <li><a href="/privacy-policy" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
                <li><a href="/refund-policy" className="hover:text-emerald-400 transition-colors">Refund & Cancellation</a></li>
                <li><a href="/terms-and-conditions" className="hover:text-emerald-400 transition-colors">Terms & Conditions</a></li>
                <li><a href="/contact" className="hover:text-emerald-400 transition-colors">Customer Support</a></li>
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
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
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

      {/* ========================================================= */}
      {/* VIDEO MODAL POPUP */}
      {/* ========================================================= */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-200">
            <div className="p-4 flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Play className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                <span className="text-sm font-bold text-white">How Gentro Technologies Works (1 min Demo)</span>
              </div>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 text-center space-y-4">
              <div className="aspect-video bg-slate-950 rounded-xl flex flex-col items-center justify-center border border-slate-800 relative p-8">
                <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg mb-4 animate-bounce">
                  <Play className="w-7 h-7 fill-white translate-x-0.5" />
                </div>
                <h4 className="text-lg font-bold text-white">Smart WhatsApp Marketing in 3 Minutes</h4>
                <p className="text-xs text-slate-400 max-w-md mt-1">
                  Send bulk campaigns, connect REST API, set up webhooks, and automate customer support effortlessly.
                </p>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={() => setIsVideoModalOpen(false)}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-5 py-2.5 rounded-lg"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
