import type { Metadata } from 'next';
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Sparkles, ShieldCheck, Heart, Store, ShoppingBag } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us & Company Mission',
  description: 'Learn about TryStop mission: bridging the gap between local shoppers and offline fashion boutiques and restaurants in Mansarovar, Jaipur.',
  keywords: ['About TryStop', 'TryStop company mission', 'Hyperlocal retail tech Jaipur', 'Local offline market empowerment'],
};

export default function AboutPage() {
  const coreValues = [
    {
      icon: Store,
      title: 'Local First',
      description: 'We believe neighborhood stores are the heartbeat of community commerce. We build tools that help them compete and thrive in a digital era.',
      color: 'text-cyan-400 bg-cyan-950/60 border border-cyan-800/40',
    },
    {
      icon: ShieldCheck,
      title: 'Zero-Rejection Guarantee',
      description: 'Unlike generic online coupon codes that get rejected at check-out, every single TryStop voucher is pre-verified and contracted directly with store owners.',
      color: 'text-emerald-400 bg-emerald-950/60 border border-emerald-800/40',
    },
    {
      icon: Heart,
      title: 'Real Savings',
      description: 'We prioritize transparent financial gains for shoppers. The voucher fee is kept minimal to guarantee substantial net pocket savings.',
      color: 'text-rose-400 bg-rose-950/60 border border-rose-800/40',
    },
  ];

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24 pb-20 bg-slate-950 min-h-screen">
        
        {/* Background glow orb */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-tr from-cyan-600/10 to-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 relative z-10 space-y-16">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Our Mission</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
              Empowering Local Commerce, <br />
              <span className="text-gradient-primary">One Store at a Time</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              TryStop is a local discovery and instant discount network. We bridge the gap between offline neighborhood fashion &amp; dining merchants and digital-first shoppers.
            </p>
          </div>

          {/* Mission & Story Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-black text-white">Why We Started</h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Local neighborhood stores—be it your corner cafe or the boutique fashion outlet—have long served as the backbone of our economy. Yet, they lack the tools to attract digital-first customers who have grown accustomed to online discounts.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                TryStop was built to level the playing field. By offering a digital shop window, active ratings, and dual payment discount systems, we bring shoppers back into local stores while driving sales growth.
              </p>

              {/* Stats Highlights */}
              <div className="grid grid-cols-3 gap-6 pt-4 border-t border-slate-900">
                <div>
                  <p className="text-xl sm:text-2xl font-black text-white">Jaipur</p>
                  <p className="text-xs text-slate-400">Launch City</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-black text-cyan-400">Food &amp; Fashion</p>
                  <p className="text-xs text-slate-400">Core Focus</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-black text-emerald-400">Daily / 2-Day</p>
                  <p className="text-xs text-slate-400">Merchant Settlements</p>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Callout Box */}
            <div className="lg:col-span-5">
              <div className="glass-card rounded-3xl p-8 border border-slate-800 space-y-6 relative overflow-hidden bg-gradient-to-br from-slate-900 to-indigo-950/40">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-lg">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">Cashback &amp; Platform Vouchers</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Save instantly on your store bills. Transact via the TryStop app at checkout to earn instant wallet cashback rewards for subsequent checkouts. Alternatively, purchase platform vouchers to unlock exclusive store credit extensions.
                </p>
                <div className="flex items-center gap-3 p-3 bg-slate-950/80 border border-slate-850 rounded-xl">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shrink-0"></span>
                  <span className="text-[11px] font-semibold text-slate-300">Pay direct or scan QR to get instant rewards.</span>
                </div>
              </div>
            </div>

          </div>

          {/* Core Values Section */}
          <div className="space-y-8 pt-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white text-center">Our Core Pillars</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {coreValues.map((value) => {
                const Icon = value.icon;
                return (
                  <div key={value.title} className="p-8 bg-slate-900/60 border border-slate-800 rounded-3xl space-y-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${value.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-white text-lg">{value.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
