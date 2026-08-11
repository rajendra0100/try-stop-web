'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, PhoneCall, QrCode, Wallet, Sparkles, Check } from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: 'Location Suggestions & Ratings',
    description: 'Discover nearby food and fashion stores based on your location. Check top ratings, view active shop details, and find directions easily via Google Maps.',
    color: 'from-blue-600 to-cyan-500',
    highlight: 'Nearby & Top Rated',
  },
  {
    icon: PhoneCall,
    title: 'Direct Merchant Connection',
    description: 'Contact sellers directly through the app to verify current collections or stocks, check pricing, and build a trusted relationship before you visit.',
    color: 'from-purple-500 to-indigo-600',
    highlight: 'Build Direct Trust',
  },
  {
    icon: QrCode,
    title: 'QR Scan or Direct App Payments',
    description: 'Pay instantly at the counter by scanning their TryStop QR code, or pay directly on the store details page in the app without scanning.',
    color: 'from-emerald-500 to-teal-600',
    highlight: 'Flexible Pay Modes',
  },
  {
    icon: Wallet,
    title: 'Value Vouchers & Wallet Cashbacks',
    description: 'Purchase platform vouchers to unlock direct checkout counter credits, or pay directly through the app to earn instant cashback rewards in your TryStop Wallet for subsequent payments.',
    color: 'from-amber-500 to-orange-600',
    highlight: 'Ecosystem Wallet Rewards',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-10 md:py-14 bg-slate-950 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why TryStop?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Bridging the Gap Between <br className="hidden sm:inline" />
            <span className="text-gradient-primary">Shoppers & Offline Markets</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            TryStop elevates your local shopping and dining with direct merchant chat, Google Maps navigation, dual pay methods, and instant wallet cashback.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card glass-card-hover rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white shadow-lg shadow-blue-500/20`}>
                      <Icon className="w-7 h-7" />
                    </div>

                    <span className="px-3 py-1 rounded-full text-[11px] font-bold text-cyan-300 bg-cyan-950/80 border border-cyan-800/40">
                      {feature.highlight}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-white mb-3 tracking-tight">
                    {feature.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {feature.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-semibold text-cyan-400">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Integrated with TryStop Mobile User App</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
