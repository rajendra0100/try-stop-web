import type { Metadata } from 'next';
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, Lock, Eye, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy & Data Security',
  description: 'Read TryStop Privacy Policy regarding user location data processing, transaction security, and encrypted wallet balances.',
  keywords: ['TryStop privacy policy', 'User data protection', 'Wallet security Jaipur'],
};

export default function PrivacyPolicyPage() {
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
              <span>Legal Guidelines</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Privacy <span className="text-gradient-primary">Policy</span>
            </h1>
            <p className="text-slate-400 text-xs sm:text-sm">
              Last Updated: August 11, 2026
            </p>
          </div>

          {/* Policy Content */}
          <div className="glass-card rounded-3xl p-6 sm:p-10 space-y-8 border border-slate-800/80 backdrop-blur-xl">
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Eye className="w-5 h-5 text-cyan-400" />
                1. Data Collection & Location Services
              </h2>
              <p className="text-sm leading-relaxed">
                To suggest verified fashion and dining outlets near you, TryStop uses your device&apos;s real-time geolocation services. This data is only processed locally on your app instance to find nearby merchants and is never stored permanently on our servers.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Lock className="w-5 h-5 text-cyan-400" />
                2. Transaction Safety & Credentials
              </h2>
              <p className="text-sm leading-relaxed">
                When you make payments or purchase value vouchers via the TryStop app, all payment processing is handled securely by certified third-party UPI gateways. TryStop does not store your credit card, debit card, or UPI PIN credentials.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Shield className="w-5 h-5 text-cyan-400" />
                3. Wallet Balances & Security
              </h2>
              <p className="text-sm leading-relaxed">
                Your wallet balance (accrued through cashbacks, vouchers, or referral rewards) is linked strictly to your registered phone number and user ID. We use industry-standard encryption protocols to safeguard your balance and prevent unauthorized redemptions.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">
                4. Third-Party Integrations
              </h2>
              <p className="text-sm leading-relaxed">
                Our application integrates with Google Maps to provide driving directions to offline stores, and WhatsApp to allow direct merchant communication. These services operate under their respective privacy policies, which we encourage you to review.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">
                5. Contacting Us
              </h2>
              <p className="text-sm leading-relaxed">
                If you have questions about this Privacy Policy, your wallet credits, or merchant listings, please feel free to compose an email directly to <a href="mailto:support@trystop.in" className="text-cyan-400 font-semibold hover:underline">support@trystop.in</a> or reach out via WhatsApp at +91 96940 92261.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
