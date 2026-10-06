"use client";

import React from "react";
import Link from "next/link";
import { RefreshCcw, ShieldCheck, CheckCircle2, ArrowLeft, Mail, PhoneCall, Calendar } from "lucide-react";

export default function RefundPolicyPage() {
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
            <RefreshCcw className="w-3.5 h-3.5 text-emerald-400" />
            <span>TRANSPARENT BILLING</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Cancellation & Refund Policy
          </h1>
          <p className="text-slate-300 text-sm sm:text-base">
            Last Updated: {lastUpdated} | Applicable to all SaaS software licenses & messaging recharges.
          </p>
        </div>
      </div>

      {/* Policy Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="prose prose-slate max-w-none space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              1. Overview
            </h2>
            <p>
              At <strong>Gentro Technologies</strong>, we strive to deliver transparent, reliable, and high-performance software solutions for WhatsApp Business API and Multi-Agent CRM automation. We believe in customer satisfaction and operate under fair cancellation and refund terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              2. WhatsApp API & CRM Software Annual License (₹7,999 / Year)
            </h2>
            <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2 not-prose text-sm">
              <p className="font-bold text-slate-900">7-Day Technical Evaluation Refund Window</p>
              <p className="text-slate-700 leading-relaxed">
                If you purchase our annual software license (₹7,999/year) and encounter unresolved technical difficulties within <strong>7 calendar days</strong> of purchase that our support team is unable to resolve, you are eligible to request a <strong>100% full refund</strong> of the software fee.
              </p>
            </div>
            <p>
              After 7 calendar days from activation, the annual subscription is non-refundable as server resources, account licenses, and Meta API setups are permanently provisioned for the full 12-month period.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              3. Pay-As-You-Go Messaging Credits (@ ₹0.15 / Message)
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Zero Balance Expiry:</strong> All wallet balance recharges for message broadcasts do not expire. Your credit remains active in your dashboard indefinitely until consumed.
              </li>
              <li>
                <strong>Undelivered Message Auto-Credit:</strong> If any message fails to deliver due to carrier routing or invalid recipient numbers, the consumed message credit (₹0.15/msg) is automatically restored to your dashboard wallet.
              </li>
              <li>
                <strong>Unused Wallet Balance Refund:</strong> If you decide to close your account, any unconsumed/unused prepaid messaging balance can be refunded to your original payment method upon written request.
              </li>
              <li>
                <strong>Messages Already Sent:</strong> Once a broadcast campaign or transactional OTP has been successfully transmitted through Meta Cloud API, the cost associated with sent messages is non-refundable.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              4. Service Cancellation Process
            </h2>
            <p>
              Customers may cancel their recurring subscriptions or request account deactivation at any time by contacting us via email at <strong>gentrotechnology@gmail.com</strong> or through WhatsApp at <strong>+91 8084037252</strong>. No cancellation penalty or hidden fee is charged.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              5. Refund Processing Timeline & Method
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose my-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <span className="text-xs text-slate-500 font-semibold block uppercase">Refund Review</span>
                <span className="text-xl font-bold text-slate-900">Within 24 to 48 Hours</span>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
                <span className="text-xs text-emerald-800 font-semibold block uppercase">Bank Credit Timeline</span>
                <span className="text-xl font-bold text-emerald-700">5 to 7 Business Days</span>
              </div>
            </div>
            <p>
              All approved refunds are credited back to the <strong>original payment source</strong> (UPI, Credit Card, Debit Card, Net Banking) used during the transaction via our secure payment gateway (Razorpay).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              6. Non-Refundable Scenarios
            </h2>
            <p>Refunds will not be entertained in the following instances:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Accounts terminated due to violation of Meta WhatsApp Anti-Spam Policy or unauthorized illicit content.</li>
              <li>Failure to furnish required KYC documents or Meta Business verification documents requested by Meta.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              7. Need Help with a Refund or Billing Query?
            </h2>
            <p>
              For any billing inquiries, invoice requests, or refund assistance, please connect with our billing desk:
            </p>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-sm not-prose">
              <p className="font-bold text-slate-900">Gentro Technologies - Billing & Support</p>
              <p className="text-slate-600"><strong>Address:</strong> Laxmi Nagar, New Delhi 110092, India</p>
              <p className="text-slate-600"><strong>Email:</strong> gentrotechnology@gmail.com</p>
              <p className="text-slate-600"><strong>Phone / WhatsApp:</strong> +91 8084037252</p>
              <p className="text-slate-600"><strong>Operating Hours:</strong> Monday – Saturday: 9:30 AM to 7:30 PM IST</p>
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
            href="/terms-and-conditions"
            className="text-slate-600 hover:text-emerald-600 font-medium text-sm"
          >
            View Terms & Conditions →
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
