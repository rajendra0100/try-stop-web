import type { Metadata } from 'next';
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Scale, CheckSquare, RefreshCw, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service & Usage Agreement',
  description: 'Read TryStop Terms of Service & Usage regarding platform voucher redemptions, counter QR checkout rules, and 2-day merchant bank payouts.',
  keywords: ['TryStop terms of service', 'User agreement Jaipur', 'Voucher redemption rules'],
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24 pb-20 bg-slate-950 min-h-screen text-slate-300">
        {/* Background Ambient Glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-tr from-blue-700/10 to-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 relative z-10 space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>User Agreement</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Terms of <span className="text-gradient-primary">Service &amp; Usage</span>
            </h1>
            <p className="text-slate-400 text-xs sm:text-sm">
              Last Updated: August 11, 2026
            </p>
          </div>

          {/* Terms Content */}
          <div className="glass-card rounded-3xl p-6 sm:p-10 space-y-8 border border-slate-800/80 backdrop-blur-xl">
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Scale className="w-5 h-5 text-cyan-400" />
                1. Platform Ecosystem & Vouchers
              </h2>
              <p className="text-sm leading-relaxed">
                TryStop operates as a platform-wide voucher network rather than individual merchant-negotiated coupons. Vouchers purchased on our platform (including ₹460 for ₹500 credit, and ₹900 for ₹1,000 credit) are valid for redemptions at any verified active partner fashion store or dining cafe.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <CheckSquare className="w-5 h-5 text-cyan-400" />
                2. Redemption Rules & QR Scanning
              </h2>
              <p className="text-sm leading-relaxed">
                To claim your credit, you must scan the TryStop counter QR code at the partner shop checkout or complete a direct checkout on the outlet page within the TryStop app. Counter redemptions must be verified by the merchant on the spot.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-cyan-400" />
                3. Wallet Balances & Cashback Refunds
              </h2>
              <p className="text-sm leading-relaxed">
                Ecosystem cashbacks and referral rewards (such as dual referral incentives up to ₹100) are credited instantly to your TryStop Wallet. Wallet balances cannot be converted back into physical cash, transferred to bank accounts, or refunded. They are 100% reusable to settle future in-app voucher purchases.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">
                4. Merchant Settlements
              </h2>
              <p className="text-sm leading-relaxed">
                Merchant partners registered under TryStop receive settlements standardly within 2 business days of successfully verified user checkouts. However, settlements may be delayed, held, or adjusted due to server errors, payment gateway glitches, banking system downtime, network latency, validation review cycles, public holidays, counter reconciliation verification, or any other technical, operational, or security reasons.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">
                5. Acceptance & Modifications
              </h2>
              <p className="text-sm leading-relaxed">
                By downloading, accessing, or transacting through the TryStop platform, you agree to these Terms. TryStop reserves the right to modify voucher rates, referral bonuses, or merchant settlements dynamically to support network expansion.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
