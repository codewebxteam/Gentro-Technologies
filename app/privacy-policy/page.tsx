"use client";

import React from "react";
import Link from "next/link";
import { Shield, Lock, FileText, ArrowLeft, Mail, PhoneCall, CheckCircle2, Calendar } from "lucide-react";

export default function PrivacyPolicyPage() {
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
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            <span>LEGAL & COMPLIANCE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-slate-300 text-sm sm:text-base">
            Last Updated: {lastUpdated} | Effective for all Gentro Technologies customers & users.
          </p>
        </div>
      </div>

      {/* Policy Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="prose prose-slate max-w-none space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              1. Introduction
            </h2>
            <p>
              Welcome to <strong>Gentro Technologies</strong> (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). We operate the website and SaaS platform providing WhatsApp Business Cloud API access, Multi-Agent CRM Inbox, automated drip campaigns, and associated marketing tools.
            </p>
            <p>
              We are committed to protecting your privacy and ensuring your personal and business data is handled in a safe, transparent, and compliant manner in accordance with the Information Technology Act, 2000 (India) and Meta Platform Terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              2. Information We Collect
            </h2>
            <p>We may collect the following types of information when you register, purchase, or use our services:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Account & Profile Information:</strong> Name, business/company name, official email address, phone/WhatsApp number, billing address, and GST number (if applicable).
              </li>
              <li>
                <strong>Meta WhatsApp Business Account (WABA) Data:</strong> Phone Number ID, WABA ID, Business Manager ID, and message templates submitted for Meta approval.
              </li>
              <li>
                <strong>Payment & Transaction Information:</strong> Payment mode, transaction reference ID, order details, and payment timestamp processed securely via authorized payment gateways (e.g., Razorpay). We do <em>not</em> store your full credit card, debit card, or banking passwords on our servers.
              </li>
              <li>
                <strong>Usage & Technical Data:</strong> Log data, IP address, browser type, device information, API request logs, message delivery status (sent, delivered, read, failed), and webhook callbacks.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              3. How We Use Your Information
            </h2>
            <p>We use the collected information for the following legitimate purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provisioning WhatsApp Cloud API and Multi-Agent CRM dashboard access.</li>
              <li>Routing broadcasts, automated notifications, OTPs, and transactional alerts.</li>
              <li>Processing subscription licenses (₹7,999/year) and messaging wallet recharges (₹0.15/msg).</li>
              <li>Providing technical assistance, onboarding guidance, and customer support via phone, WhatsApp, and email.</li>
              <li>Preventing fraud, abuse, spamming, and ensuring compliance with Meta Platform Policies.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              4. Data Sharing & Third-Party Processors
            </h2>
            <p>
              We do <strong>not</strong> sell, rent, or trade your personal data or your end-customers&apos; contact lists to third-party marketing companies. Data is only shared with trusted infrastructure providers necessary to render the services:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Meta Platforms, Inc. (WhatsApp Cloud API):</strong> To transmit messages and manage official template approvals.</li>
              <li><strong>Payment Gateways (Razorpay):</strong> To securely process payments and subscriptions under PCI-DSS compliance.</li>
              <li><strong>Cloud & Hosting Infrastructure:</strong> Secure servers with 256-bit SSL encryption.</li>
              <li><strong>Legal & Regulatory Authorities:</strong> Only when strictly required by applicable law, court order, or governmental mandate.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              5. Data Security & Storage
            </h2>
            <p>
              We implement industry-standard administrative, technical, and physical security measures to protect your information against unauthorized access, loss, alteration, or disclosure. All communication with our API endpoints and dashboard is encrypted using HTTPS/TLS 1.3.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              6. Your Rights & Data Retention
            </h2>
            <p>
              You have the right to access, rectify, or request deletion of your account information. You may export your contact lists and message logs from your dashboard at any time. Upon account termination, your data will be securely purged in accordance with our data retention policy, except where retention is required by law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              7. Grievance Officer & Contact Details
            </h2>
            <p>
              In accordance with Information Technology Act 2000 and rules made thereunder, if you have any questions, concerns, or grievances regarding this Privacy Policy, please contact our designated Grievance Officer:
            </p>
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
            href="/refund-policy"
            className="text-slate-600 hover:text-emerald-600 font-medium text-sm"
          >
            View Refund & Cancellation Policy →
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#091E28] text-white py-8 border-t border-slate-800 text-center text-xs text-slate-400">
        <p>© {new Date().getFullYear()} Gentro Technologies. All rights reserved.</p>
      </footer>
    </div>
  );
}
