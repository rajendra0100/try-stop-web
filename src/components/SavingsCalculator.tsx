'use client';

import React, { useState } from 'react';
import { Calculator, Sparkles, Wallet, Utensils, Shirt } from 'lucide-react';

export default function SavingsCalculator() {
  const [dining, setDining] = useState(4000);
  const [apparel, setApparel] = useState(6000);

  
  return (
    <section id="calculator" className="py-10 md:py-14 bg-slate-900/60 relative overflow-hidden border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Explainer */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <Calculator className="w-3.5 h-3.5" />
              <span>Interactive Calculator</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Project Your Account <span className="text-gradient-emerald">Ecosystem Rewards</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Adjust your monthly dining and apparel spend sliders below to view how your neighborhood spending profile elevates your account status.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-800/40 border border-slate-700/40 text-xs font-medium text-slate-300">
                <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Earn instant cashback rewards directly credited to your TryStop wallet upon counter checkouts.</span>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-800/40 border border-slate-700/40 text-xs font-medium text-slate-300">
                <Wallet className="w-5 h-5 text-blue-400 shrink-0" />
                <span>Unlock special discounted platform vouchers and store credit extensions directly through the app.</span>
              </div>
            </div>
          </div>

          {/* Right: Controls & Result Card */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-8">
              
              {/* Slider 1: Dining */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-semibold text-white">
                  <span className="flex items-center gap-2">
                    <Utensils className="w-4 h-4 text-orange-400" />
                    Restaurants &amp; Cafes
                  </span>
                  <span className="text-cyan-400 font-bold">₹{dining.toLocaleString('en-IN')}/mo</span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="20000"
                  step="500"
                  value={dining}
                  onChange={(e) => setDining(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>

              {/* Slider 2: Apparel */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-semibold text-white">
                  <span className="flex items-center gap-2">
                    <Shirt className="w-4 h-4 text-purple-400" />
                    Clothing &amp; Fashion
                  </span>
                  <span className="text-cyan-400 font-bold">₹{apparel.toLocaleString('en-IN')}/mo</span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="30000"
                  step="500"
                  value={apparel}
                  onChange={(e) => setApparel(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>

              {/* Summary Calculation Box */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-950/80 via-slate-900 to-emerald-950/80 border border-blue-500/30 flex flex-col sm:flex-row justify-between items-center gap-6">
                <div>
                  <p className="text-xs uppercase font-bold text-slate-400 tracking-wider">Projected account rewards status</p>
                  <p className="text-3xl sm:text-4xl font-black text-emerald-400 mt-1">
                    Eco-Maximized
                    <span className="text-xs text-slate-300 font-normal ml-2">Active</span>
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Based on your monthly neighborhood spending profile.
                  </p>
                </div>

                <a
                  href="#download-app"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-sm text-center shadow-lg shadow-emerald-500/20 transition-all"
                >
                  Start Saving Now
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
