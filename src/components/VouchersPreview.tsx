'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Store, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface Voucher {
  id: string;
  storeName: string;
  category: string;
  location: string;
  rating: number;
  verified: boolean;
  tag: string;
  status: string;
  mode: string;
}

const mockVouchers: Voucher[] = [
  {
    id: 'v1',
    storeName: 'Grand Pizza & Pasta Lounge',
    category: 'Dining & Cafes',
    location: 'Thadi Market, Mansarovar',
    rating: 4.9,
    verified: true,
    tag: 'CASHBACK ACTIVE',
    status: 'Platform Voucher Accepted',
    mode: 'Counter QR Scan',
  },
  {
    id: 'v2',
    storeName: 'Urban Trendz Menswear',
    category: 'Fashion & Apparel',
    location: 'Sector 9, Mansarovar',
    rating: 4.8,
    verified: true,
    tag: 'STORE CREDIT ACTIVE',
    status: 'Direct Checkout Enabled',
    mode: 'Pay In App Direct',
  },
  {
    id: 'v3',
    storeName: 'The Burger Bistro',
    category: 'Dining & Cafes',
    location: 'Thadi Market, Mansarovar',
    rating: 4.8,
    verified: true,
    tag: 'CASHBACK ACTIVE',
    status: 'Platform Voucher Accepted',
    mode: 'Counter QR Scan',
  },
  {
    id: 'v4',
    storeName: 'Urban Style Boutique',
    category: 'Fashion & Apparel',
    location: 'Sector 11, Mansarovar',
    rating: 4.9,
    verified: true,
    tag: 'STORE CREDIT ACTIVE',
    status: 'Direct Checkout Enabled',
    mode: 'Pay In App Direct',
  },
  {
    id: 'v5',
    storeName: 'The Bean Stories Cafe',
    category: 'Dining & Cafes',
    location: 'Thadi Market, Mansarovar',
    rating: 4.9,
    verified: true,
    tag: 'CASHBACK ACTIVE',
    status: 'Platform Voucher Accepted',
    mode: 'Counter QR Scan',
  },
  {
    id: 'v6',
    storeName: 'Boutique Fashion Lab',
    category: 'Fashion & Apparel',
    location: 'Sector 12, Mansarovar',
    rating: 4.7,
    verified: true,
    tag: 'STORE CREDIT ACTIVE',
    status: 'Direct Checkout Enabled',
    mode: 'Pay In App Direct',
  },
];

const categories = ['All', 'Dining & Cafes', 'Fashion & Apparel'];

export default function VouchersPreview() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredVouchers = selectedCategory === 'All'
    ? mockVouchers
    : mockVouchers.filter((v) => v.category === selectedCategory);

  return (
    <section id="vouchers" className="py-10 md:py-14 bg-slate-900/60 border-t border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Verified Outlet Directory</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Explore Neighborhood Outlets <br className="hidden sm:inline" />
            <span className="text-gradient-primary">Supporting App Checkout</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Connect directly with verified local dining and fashion merchant partners to check collections, and pay using the app to unlock instant wallet cashbacks or dynamic store credits.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-slate-800/60 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Voucher Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVouchers.map((voucher, index) => {
            return (
              <motion.div
                key={voucher.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="glass-card glass-card-hover rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between"
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-400 text-slate-950 shadow-md">
                    {voucher.tag}
                  </span>
                  <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider">
                    {voucher.category}
                  </span>
                </div>

                {/* Store Header */}
                <div className="space-y-1 mb-4">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-lg text-white group-hover:text-cyan-400 transition-colors">
                      {voucher.storeName}
                    </h3>
                    {voucher.verified && (
                      <span title="Verified Store Partner">
                        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 flex items-center gap-1">
                    <Store className="w-3.5 h-3.5 text-slate-500" />
                    <span>{voucher.location}</span>
                  </p>
                </div>

                {/* Platform Status Highlight Box */}
                <div className="bg-slate-950/80 rounded-2xl p-4 border border-slate-800/80 my-2 space-y-3">
                  <div className="grid grid-cols-2 gap-4 text-center divide-x divide-slate-800">
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">STATUS</p>
                      <p className="text-sm font-bold text-amber-400 mt-0.5">{voucher.status}</p>
                    </div>
                    <div className="pl-4">
                      <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">REDEMPTION</p>
                      <p className="text-sm font-bold text-emerald-400 mt-0.5">{voucher.mode}</p>
                    </div>
                  </div>


                </div>

                {/* Footer Action */}
                <div className="pt-4 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-amber-400 font-semibold">
                    <span>★ {voucher.rating}</span>
                    <span className="text-slate-500 text-[10px]">(Verified)</span>
                  </div>

                  <a
                    href="#download-app"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-md shadow-blue-600/20 transition-all"
                  >
                    <span>Open in App</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
