"use client";

import React from "react";
import Link from "next/link";
import { FileText, ShieldCheck, ArrowLeft, Mail, PhoneCall, Calendar } from "lucide-react";

export default function TermsAndConditionsPage() {
  const lastUpdated = "October 6, 2026";

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-emerald-500 selection:text-white">
      {/* Top Banner Accent */}
      <div className="h-1 bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-600 w-full" />

      {/* Header / Nav */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.04)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <img
              src="https://ik.imagekit.io/0s0fb4b2b/Gentro/Glossy%20Gentro%20Technologies%20Logo.png"
              alt="Gentro Technologies Logo"
              className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-slate-600">
            <Link href="/" className="hover:text-emerald-600 transition-colors">
              Home
            </Link>
            <Link href="/services" className="hover:text-emerald-600 transition-colors">
              Services
            </Link>
            <Link href="/about" className="hover:text-emerald-600 transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-emerald-600 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://calendar.app.google/HE3fCD4eECoADNaG8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-5 py-2.5 rounded-full transition-all shadow-md"
            >
              <Calendar className="w-4 h-4 text-emerald-100" />
              <span>Book Demo</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Header */}
      <div className="bg-gradient-to-b from-slate-900 via-[#071d24] to-[#04282B] text-white py-14 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-xs font-semibold">
            <FileText className="w-3.5 h-3.5 text-emerald-400" />
            <span>TERMS OF SERVICE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-slate-300 text-sm sm:text-base">
            Last Updated: {lastUpdated} | Please read these terms carefully before accessing our SaaS platform.
          </p>
        </div>
      </div>

      {/* Terms Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="prose prose-slate max-w-none space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing, browsing, registering for an account, or purchasing any services from <strong>Gentro Technologies</strong> (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;), you agree to be legally bound by these Terms &amp; Conditions and all applicable laws and regulations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              2. Description of Services & Digital Delivery SLA
            </h2>
            <p>
              Gentro Technologies provides cloud-based WhatsApp Business API solutions, Multi-Agent CRM dashboard access, automation chatbots, and message broadcasting services.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Instant Digital Delivery:</strong> Upon successful payment (₹7,999/yr software license or messaging wallet recharge), your account credentials and dashboard access are provisioned electronically within <strong>2 to 15 minutes</strong>.
              </li>
              <li>
                No physical goods are shipped. All products, API keys, software licenses, and reports are delivered digitally via dashboard login and email confirmation.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              3. User Responsibilities & Acceptable Use Policy
            </h2>
            <p>You agree to use our platform strictly in accordance with Meta WhatsApp Business Policies and Indian cyber laws. You must NOT:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Send unsolicited bulk spam, fraudulent schemes, or deceptive promotional messages without prior customer opt-in.</li>
              <li>Distribute copyrighted, harassing, defamatory, or unlawful materials.</li>
              <li>Attempt to reverse-engineer, decompile, or compromise the security of our API or server infrastructure.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              4. Pricing, Payments & Invoicing
            </h2>
            <p>
              All prices are listed in Indian Rupees (INR ₹). WhatsApp API Software is priced at <strong>₹7,999 / yearly</strong>, and messaging credits are charged at <strong>₹0.15 (15 paise) / message</strong>. Applicable GST will be itemized on the final tax invoice. Payments are processed securely via PCI-DSS compliant payment gateways (Razorpay).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              5. Service Availability & 99.9% Uptime SLA
            </h2>
            <p>
              We commit to maintaining a 99.9% uptime SLA for our core API endpoints and CRM routing. Scheduled maintenance windows will be notified in advance. Gentro Technologies is not liable for temporary service interruptions originating from Meta WhatsApp server outages or third-party telecom disruptions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              6. Governing Law & Jurisdiction
            </h2>
            <p>
              These Terms and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the laws of India, subject to the exclusive jurisdiction of the competent courts in New Delhi, India.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              7. Contact Information
            </h2>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-sm not-prose">
              <p className="font-bold text-slate-900">Gentro Technologies</p>
              <p className="text-slate-600"><strong>Address:</strong> Laxmi Nagar, New Delhi 110092, India</p>
              <p className="text-slate-600"><strong>Phone / WhatsApp:</strong> +91 8084037252</p>
              <p className="text-slate-600"><strong>Email:</strong> gentrotechnology@gmail.com</p>
            </div>
          </section>

        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <Link
            href="/privacy-policy"
            className="text-slate-600 hover:text-emerald-600 font-medium text-sm"
          >
            View Privacy Policy →
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#091E28] text-white py-8 border-t border-slate-800 text-center text-xs text-slate-400">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Gentro Technologies. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <Link href="/privacy-policy" className="hover:text-emerald-400">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms-and-conditions" className="hover:text-emerald-400">Terms & Conditions</Link>
            <span>|</span>
            <Link href="/refund-policy" className="hover:text-emerald-400">Refund Policy</Link>
            <span>|</span>
            <Link href="/contact" className="hover:text-emerald-400">Contact Us</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
