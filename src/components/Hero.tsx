'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MapPin, Tag, Download, Wallet, Store } from 'lucide-react';

export default function Hero() {
  const [activeAppTab, setActiveAppTab] = useState<'vouchers' | 'shops' | 'wallet'>('vouchers');

  return (
    <section className="relative pt-28 pb-6 md:pt-36 md:pb-10 overflow-hidden bg-slate-950">
      
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-700/20 to-cyan-500/20 rounded-full blur-[140px] pointer-events-none animate-glow" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Hero Pitch */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-semibold shadow-lg shadow-cyan-500/10"
            >
              <Sparkles className="w-4 h-4 text-amber-400 animate-bounce" />
              <span>Premium Local Merchant Discoveries</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              <span className="text-slate-400 hidden sm:inline">Seamless Counter Checkout</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]"
            >
              Elevate Your Buying Power at <br className="hidden sm:inline" />
              <span className="text-gradient-primary">Neighborhood Outlets</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-200 font-hero-subtitle text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Discover premium local fashion boutiques and food spots around you. Browse details, view active collections, connect directly with merchants, and navigate via integrated Google Maps. Transact directly via the TryStop app to earn wallet credits or buy platform value vouchers. Refer TryStop to earn up to ₹100 dual referral rewards!
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <a
                href="#download-app"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-xl shadow-blue-600/35 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:-translate-y-1"
              >
                <Download className="w-5 h-5 text-cyan-200" />
                <span>Download TryStop App</span>
              </a>

              <a
                href="#calculator"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl text-base font-semibold text-slate-200 glass-card hover:bg-slate-800/80 border border-slate-700/80 transition-all duration-300"
              >
                <Tag className="w-4 h-4 text-cyan-400" />
                <span>Calculate Your Savings</span>
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-black text-white">Jaipur</p>
                <p className="text-xs text-slate-400 font-medium">Launch Location</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Boutiques &amp; Cafes</p>
                <p className="text-xs text-slate-400 font-medium">Selected Focus</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-black text-emerald-400">Wallet Credits</p>
                <p className="text-xs text-slate-400 font-medium">Earned On Checkout</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-black text-amber-400">Earn up to ₹100</p>
                <p className="text-xs text-slate-400 font-medium">Dual Referral Rewards</p>
              </div>
            </motion.div>

          </div>

          {/* Right Column - Interactive Mobile Simulator */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-[340px] sm:max-w-[370px]"
            >
              
              {/* Outer Phone Shell */}
              <div className="relative rounded-[45px] p-3 bg-slate-900 border-4 border-slate-700/80 shadow-2xl shadow-blue-900/40 backdrop-blur-2xl">
                
                {/* Speaker Notch */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-950 rounded-full z-30 flex items-center justify-center">
                  <div className="w-10 h-1 bg-slate-800 rounded-full" />
                </div>

                {/* Inner Phone Screen */}
                <div className="relative rounded-[36px] bg-slate-950 overflow-hidden pt-8 pb-4 px-4 min-h-[580px] flex flex-col justify-between border border-slate-800">
                  
                  {/* Phone Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 pt-2">
                      <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-semibold">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>Mansarovar, Jaipur</span>
                      </div>
                      <div className="flex items-center gap-1 bg-blue-950/80 border border-blue-800/60 px-2 py-0.5 rounded-full text-[10px] text-blue-300">
                        <Wallet className="w-3 h-3 text-cyan-400" />
                        <span>Active Wallet</span>
                      </div>
                    </div>

                  {/* App Screen Simulator Controls */}
                  <div className="flex bg-slate-900/90 p-1 rounded-xl gap-1 my-2 border border-slate-800">
                    <button
                      onClick={() => setActiveAppTab('vouchers')}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        activeAppTab === 'vouchers'
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Vouchers
                    </button>
                    <button
                      onClick={() => setActiveAppTab('shops')}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        activeAppTab === 'shops'
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Store Stories
                    </button>
                    <button
                      onClick={() => setActiveAppTab('wallet')}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        activeAppTab === 'wallet'
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      My Wallet
                    </button>
                  </div>

                  {/* App Screen Body Content */}
                  <div className="flex-1 py-2 space-y-3">
                    
                    {activeAppTab === 'vouchers' && (
                      <div className="space-y-3">
                        <div className="text-xs font-bold text-slate-300 flex items-center justify-between">
                          <span>Available Platform Vouchers</span>
                          <span className="text-[10px] text-cyan-400">Nearest first</span>
                        </div>

                        {/* Card 1 */}
                        <div className="bg-gradient-to-r from-slate-900 to-blue-950 p-3 rounded-2xl border border-blue-800/40 relative overflow-hidden group">
                          <div className="absolute top-0 right-0 bg-emerald-500 text-slate-950 text-[10px] font-bold px-2 py-0.5 rounded-bl-xl uppercase tracking-wider">
                            ACTIVE
                          </div>
                          <div className="text-xs font-bold text-white">Grand Pizza &amp; Pasta Cafe</div>
                          <div className="text-[10px] text-slate-400 mt-0.5">Mansarovar • Food &amp; Dining</div>
                          <div className="mt-2.5 flex items-center justify-between bg-slate-950/80 p-2 rounded-xl border border-slate-800">
                            <div>
                              <p className="text-[9px] text-slate-400">VOUCHER STATUS</p>
                              <p className="text-xs font-black text-amber-400">Credits Available</p>
                            </div>
                            <div className="text-right">
                              <p className="text-[9px] text-slate-400">REDEMPTION MODE</p>
                              <p className="text-xs font-black text-emerald-400">Counter Scan</p>
                            </div>
                          </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-gradient-to-r from-slate-900 to-indigo-950 p-3 rounded-2xl border border-indigo-800/40 relative overflow-hidden">
                          <div className="absolute top-0 right-0 bg-cyan-400 text-slate-950 text-[10px] font-bold px-2 py-0.5 rounded-bl-xl uppercase tracking-wider">
                            EXCLUSIVE
                          </div>
                          <div className="text-xs font-bold text-white">Urban Style Menswear</div>
                          <div className="text-[10px] text-slate-400 mt-0.5">Mansarovar • Fashion &amp; Apparel</div>
                          <div className="mt-2.5 flex items-center justify-between bg-slate-950/80 p-2 rounded-xl border border-slate-800">
                            <div>
                              <p className="text-[9px] text-slate-400">VOUCHER STATUS</p>
                              <p className="text-xs font-black text-amber-400">Pay ₹900, Get ₹1,000</p>
                            </div>
                            <div className="text-right">
                              <p className="text-[9px] text-slate-400">REDEMPTION MODE</p>
                              <p className="text-xs font-black text-emerald-400">Direct Checkout</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeAppTab === 'shops' && (
                      <div className="space-y-2">
                        <div className="text-xs font-bold text-slate-300">Live Video Stories Near You</div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="h-28 rounded-xl bg-slate-900 border border-slate-800 relative overflow-hidden p-2 flex flex-col justify-between">
                            <div className="bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full w-max flex items-center gap-1">
                              <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" /> LIVE STORY
                            </div>
                            <div>
                              <p className="text-[10px] font-bold text-white">The Burger Bistro</p>
                              <p className="text-[9px] text-cyan-400">4.8 Rating • Call Shop</p>
                            </div>
                          </div>
                          <div className="h-28 rounded-xl bg-slate-900 border border-slate-800 relative overflow-hidden p-2 flex flex-col justify-between">
                            <div className="bg-blue-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full w-max">
                              NEW COLLECTION
                            </div>
                            <div>
                              <p className="text-[10px] font-bold text-white">Urban Style Boutique</p>
                              <p className="text-[9px] text-emerald-400">4.9 Rating • View Map</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeAppTab === 'wallet' && (
                      <div className="space-y-3">
                        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-3.5 rounded-2xl text-white shadow-lg">
                          <p className="text-[10px] uppercase font-semibold tracking-wider text-cyan-100">TryStop Wallet Balance</p>
                          <p className="text-xl font-black mt-0.5">Wallet Balance Active</p>
                          <div className="flex items-center justify-between text-[10px] text-cyan-100 mt-2 pt-2 border-t border-white/20">
                            <span>Ecosystem Savings</span>
                            <span className="bg-white/20 px-1.5 py-0.5 rounded-md font-semibold">Active</span>
                          </div>
                        </div>
                        <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800 text-[11px] space-y-1.5">
                          <p className="font-bold text-white">Recent Activity</p>
                          <div className="flex items-center justify-between text-slate-300">
                            <span>Cashback (Burger Bistro Checkout)</span>
                            <span className="text-emerald-400 font-bold">Credited</span>
                          </div>
                          <div className="flex items-center justify-between text-slate-300">
                            <span>Ecosystem Referral Bonus</span>
                            <span className="text-emerald-400 font-bold">Credited</span>
                          </div>
                          <div className="flex items-center justify-between text-slate-300">
                            <span>Voucher Redemption (Pizza Lounge)</span>
                            <span className="text-cyan-400 font-bold">Settled</span>
                          </div>
                        </div>
                      </div>
                    )}

                  </div>

                  {/* Phone Bottom Footer Bar */}
                  <div className="pt-2 border-t border-slate-800/80 flex items-center justify-around text-slate-500 text-[10px]">
                    <div className="text-cyan-400 flex flex-col items-center">
                      <Tag className="w-4 h-4" />
                      <span>Explore</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Store className="w-4 h-4" />
                      <span>Shops</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Wallet className="w-4 h-4" />
                      <span>Wallet</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Floating Badge accent */}
              <div className="absolute -bottom-5 -left-6 bg-slate-900/90 border border-emerald-500/40 backdrop-blur-xl p-3.5 rounded-2xl shadow-xl flex items-center gap-3 z-30">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg">
                  ✓
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Instant Counter Verification</p>
                  <p className="text-[10px] text-slate-400">QR Scan & Direct Savings</p>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
