'use client';

import React from 'react';
import Image from 'next/image';
import { UtensilsCrossed, ShoppingBag, Sparkles, MapPin, MessageSquare, Wallet, ArrowRight, ShieldCheck } from 'lucide-react';

export default function ConceptProposition() {
  return (
    <section className="py-10 md:py-14 bg-slate-950 text-slate-100 relative overflow-hidden">
      {/* Glow background accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-r from-cyan-600/10 via-blue-600/10 to-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>The TryStop Concept</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Bridging Local Shoppers With <br />
            <span className="text-gradient-primary">Fashion &amp; Dining Outlets</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            TryStop brings neighborhood boutiques and cafes straight to your fingertips. Discover fresh apparel collections, explore food menus, chat directly with store owners, and unlock instant wallet cashbacks on every checkout.
          </p>
        </div>

        {/* 2 Core Pillar Feature Cards (Fashion & Food Visual Props) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Card 1: Dining & Cafes */}
          <div className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 border border-slate-800/80 bg-slate-900/60 relative overflow-hidden flex flex-col justify-between group">
            
            {/* Visual Header Image */}
            <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden mb-6 border border-slate-800">
              <Image 
                src="/local_dining_mockup.png"
                alt="Neighborhood Dining and Cafes"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              
              {/* Category Pill Tag */}
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-800 text-xs font-bold text-amber-400">
                <UtensilsCrossed className="w-4 h-4 text-amber-400" />
                <span>Food &amp; Dining Outlets</span>
              </div>

              {/* Offer Highlight Badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-slate-950/90 backdrop-blur-md p-3 rounded-xl border border-amber-500/30">
                <div className="flex items-center gap-2 text-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-slate-300 font-medium">Platform Voucher Offer</span>
                </div>
                <span className="text-xs font-extrabold text-amber-400 bg-amber-950/80 px-2.5 py-1 rounded-md border border-amber-800/50">
                  Platform Voucher Accepted
                </span>
              </div>
            </div>

            {/* Description & Interactive Features */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified Neighborhood Lounge</span>
              </div>

              <h3 className="text-2xl font-bold text-white tracking-tight">
                Neighborhood Cafes &amp; Restaurants
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                Discover trending local food joints in Mansarovar, Jaipur. Check store ratings, view live daily specials, navigate directly via Google Maps, and scan counter QR codes to earn instant cashback rewards.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-xs px-3 py-1 rounded-full bg-slate-950/80 border border-slate-800 text-slate-300">
                  Google Maps Routing
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-slate-950/80 border border-slate-800 text-slate-300">
                  Counter QR Scanning
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-slate-950/80 border border-slate-800 text-slate-300">
                  Instant Wallet Credits
                </span>
              </div>
            </div>

          </div>

          {/* Card 2: Fashion & Apparel */}
          <div className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 border border-slate-800/80 bg-slate-900/60 relative overflow-hidden flex flex-col justify-between group">
            
            {/* Visual Header Image */}
            <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden mb-6 border border-slate-800">
              <Image 
                src="/boutique_fashion_mockup.png"
                alt="Local Boutique Fashion and Apparel"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              
              {/* Category Pill Tag */}
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-800 text-xs font-bold text-cyan-400">
                <ShoppingBag className="w-4 h-4 text-cyan-400" />
                <span>Fashion &amp; Boutiques</span>
              </div>

              {/* Offer Highlight Badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-slate-950/90 backdrop-blur-md p-3 rounded-xl border border-cyan-500/30">
                <div className="flex items-center gap-2 text-xs">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-slate-300 font-medium">Platform Voucher Offer</span>
                </div>
                <span className="text-xs font-extrabold text-cyan-300 bg-cyan-950/80 px-2.5 py-1 rounded-md border border-cyan-800/50">
                  Direct Checkout Enabled
                </span>
              </div>
            </div>

            {/* Description & Interactive Features */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-purple-400 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified Apparel Retailer</span>
              </div>

              <h3 className="text-2xl font-bold text-white tracking-tight">
                Local Fashion &amp; Boutique Stores
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                Explore local apparel, menswear, and womenswear collections near you. Chat directly with store owners via WhatsApp to inquire about stock sizes and colors before stepping into the store.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-xs px-3 py-1 rounded-full bg-slate-950/80 border border-slate-800 text-slate-300">
                  Direct WhatsApp Chat
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-slate-950/80 border border-slate-800 text-slate-300">
                  Store Collection Verification
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-slate-950/80 border border-slate-800 text-slate-300">
                  In-App Direct Pay
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Concept Proposition Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-6">
          <div className="p-6 bg-slate-900/40 border border-slate-800/80 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-cyan-400 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-white text-base">Hyperlocal Discovery</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Locate fashion boutiques and food hubs in Mansarovar, Jaipur with seamless Google Maps navigation.
            </p>
          </div>

          <div className="p-6 bg-slate-900/40 border border-slate-800/80 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-white text-base">Direct Merchant Chat</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Connect directly with store owners on WhatsApp to verify clothes stock and food menu items.
            </p>
          </div>

          <div className="p-6 bg-slate-900/40 border border-slate-800/80 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Wallet className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-white text-base">Instant Wallet Credits</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Pay via QR scan or in-app to accumulate reusable cashback credits for your next local visit.
            </p>
          </div>

          <div className="p-6 bg-slate-900/40 border border-slate-800/80 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-white text-base">Dual Referral Rewards</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Earn up to ₹100 in dual referral rewards when inviting friends or merchants to join TryStop.
            </p>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="glass-card rounded-3xl p-8 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-slate-900 via-blue-950/40 to-slate-900">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-xl font-bold text-white">Ready to explore local fashion &amp; dining near you?</h3>
            <p className="text-xs sm:text-sm text-slate-400">Download the TryStop app today and start unlocking local wallet cashbacks.</p>
          </div>
          <a
            href="#download-app"
            className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-bold shadow-lg shadow-blue-600/20 transition-all flex items-center gap-2 shrink-0"
          >
            <span>Get the App</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
