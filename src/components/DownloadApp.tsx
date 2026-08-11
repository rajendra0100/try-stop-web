'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star, ShieldCheck, QrCode, Wallet } from 'lucide-react';

export default function DownloadApp() {
  return (
    <section id="download-app" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">
      
      {/* Background glow orbs */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-600/10 to-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Content Pitch */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Mobile-First Experience</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
              Get the <span className="text-gradient-primary">TryStop App</span> Today &amp; Start Saving
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Download the TryStop app to discover nearby food and fashion stores. Check top ratings, connect directly with merchants to check stock, navigate via Google Maps, and enjoy instant wallet credits or platform vouchers. Refer the app to your network to earn active rewards!
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              
              {/* Google Play Store Badge */}
              <a
                href="#download-android"
                className="w-full sm:w-auto flex items-center gap-3 px-6 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-left transition-all duration-300 shadow-lg group hover:-translate-y-0.5"
              >
                {/* SVG for Play Store logo */}
                <svg className="w-8 h-8 fill-slate-100 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M3 20.29V3.71c0-.46.3-.71.74-.71.16 0 .32.05.47.14l15.19 8.7c.39.22.6.59.6 1.01s-.21.79-.6 1.01L4.21 20.86c-.15.09-.31.14-.47.14-.44 0-.74-.25-.74-.71z" />
                </svg>
                <div>
                  <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">GET IT ON</p>
                  <p className="text-sm font-bold text-white">Google Play</p>
                </div>
              </a>

              {/* Apple App Store Badge */}
              <a
                href="#download-ios"
                className="w-full sm:w-auto flex items-center gap-3 px-6 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-left transition-all duration-300 shadow-lg group hover:-translate-y-0.5"
              >
                {/* SVG for Apple logo */}
                <svg className="w-8 h-8 fill-slate-100 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,22C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.1,16.67C20.08,16.74 19.67,18.11 18.71,19.5M15.97,4.17C16.63,3.37 17.07,2.28 16.95,1C16,1.04 14.9,1.6 14.24,2.38C13.68,3.04 13.19,4.14 13.34,5.39C14.39,5.47 15.4,4.88 15.97,4.17Z" />
                </svg>
                <div>
                  <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Download on the</p>
                  <p className="text-sm font-bold text-white">App Store</p>
                </div>
              </a>

            </div>

            {/* Ratings and Verification */}
            <div className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-bold text-white">Highly Rated by Local Shoppers</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Standard 2-Day Merchant Settlements</span>
              </div>
            </div>

          </div>

          {/* Right: Premium Mockup visual */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[320px] bg-slate-900/60 p-6 rounded-3xl border border-slate-800/80 backdrop-blur-xl shadow-2xl">
              
              {/* App Wallet & Cash Back Visual Card */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 flex items-center gap-1.5">
                    <Wallet className="w-4 h-4 text-cyan-400" />
                    <span>Instant Wallet Balance</span>
                  </span>
                  <span className="text-[9px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full font-bold">
                    ACTIVE
                  </span>
                </div>

                <div className="p-4 bg-gradient-to-r from-blue-900/60 to-indigo-950/60 rounded-2xl border border-blue-800/40">
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">TryStop Wallet Status</p>
                  <p className="text-2xl font-black text-white mt-1">Balance Active</p>
                  <div className="mt-3 text-[10px] text-slate-300 flex justify-between pt-2.5 border-t border-slate-800/60">
                    <span>Ecosystem Savings</span>
                    <span className="text-cyan-400 font-bold">Pay Merchant</span>
                  </div>
                </div>

                {/* Scan Simulator Mini-card */}
                <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800/80 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-800/40 flex items-center justify-center text-cyan-400">
                      <QrCode className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Direct QR Scanner</p>
                      <p className="text-[9px] text-slate-400">Instant counter identification</p>
                    </div>
                  </div>
                  
                  {/* Fake scanner overlay border animation */}
                  <div className="relative h-2 rounded bg-slate-900 overflow-hidden border border-slate-800">
                    <motion.div
                      animate={{ left: ['0%', '100%', '0%'] }}
                      transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
                      className="absolute top-0 bottom-0 w-1/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                    />
                  </div>
                </div>

                <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800/60 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">Direct Pay at Burger Bistro</span>
                  <span className="text-emerald-400 font-extrabold">Cashback Credited</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
