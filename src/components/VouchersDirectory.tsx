'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Search, Store, ShieldCheck, ArrowRight, SlidersHorizontal, Sparkles } from 'lucide-react';

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

const allVouchers: Voucher[] = [
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
  {
    id: 'v7',
    storeName: 'Royal Biryani Palace',
    category: 'Dining & Cafes',
    location: 'Sector 9, Mansarovar',
    rating: 4.8,
    verified: true,
    tag: 'STORE CREDIT ACTIVE',
    status: 'Direct Checkout Enabled',
    mode: 'Pay In App Direct',
  },
  {
    id: 'v8',
    storeName: 'Trends Footwear & Bags',
    category: 'Fashion & Apparel',
    location: 'Sector 10, Mansarovar',
    rating: 4.7,
    verified: true,
    tag: 'CASHBACK ACTIVE',
    status: 'Platform Voucher Accepted',
    mode: 'Counter QR Scan',
  },
  {
    id: 'v9',
    storeName: 'Glamour Fashion Studio',
    category: 'Fashion & Apparel',
    location: 'Sector 11, Mansarovar',
    rating: 4.9,
    verified: true,
    tag: 'STORE CREDIT ACTIVE',
    status: 'Direct Checkout Enabled',
    mode: 'Pay In App Direct',
  },
  {
    id: 'v10',
    storeName: 'Brew & Bake Dessert Cafe',
    category: 'Dining & Cafes',
    location: 'Sector 12, Mansarovar',
    rating: 4.9,
    verified: true,
    tag: 'CASHBACK ACTIVE',
    status: 'Platform Voucher Accepted',
    mode: 'Counter QR Scan',
  },
];

const categories = ['All', 'Dining & Cafes', 'Fashion & Apparel'];

export default function VouchersDirectory() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('rating');

  const filteredVouchers = allVouchers.filter((voucher) => {
    const matchesCategory = selectedCategory === 'All' || voucher.category === selectedCategory;
    const matchesSearch = 
      voucher.storeName.toLowerCase().includes(searchQuery.toLowerCase()) || 
      voucher.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedVouchers = [...filteredVouchers].sort((a, b) => {
    if (sortBy === 'rating') {
      return b.rating - a.rating;
    }
    if (sortBy === 'storeName') {
      return a.storeName.localeCompare(b.storeName);
    }
    return 0;
  });

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24 pb-20 bg-slate-950 min-h-screen">
        
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-tr from-cyan-600/10 to-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 relative z-10 space-y-10">
          
          <div className="text-center lg:text-left space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Verified Store Offers</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Explore Neighborhood <span className="text-gradient-primary">Outlets</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Discover verified dining and fashion merchant partners. Connect with store owners directly and transact via the TryStop app to unlock credits and cashbacks.
            </p>
          </div>

          <div className="glass-card rounded-3xl p-6 space-y-6">
            
            <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
              
              <div className="relative flex-grow max-w-xl">
                <Search className="w-5 h-5 text-slate-400 absolute left-4.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search stores, locations (e.g. Mansarovar, pizza)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-900/80 border border-slate-800 rounded-2xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                />
              </div>

              <div className="flex items-center gap-3 self-end md:self-auto">
                <SlidersHorizontal className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-semibold text-slate-400">Sort By:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-slate-900 border border-slate-800 text-xs text-white py-2.5 px-4 rounded-xl focus:outline-none focus:border-cyan-500/50"
                >
                  <option value="rating">Highest Rating</option>
                  <option value="storeName">Store Name (A-Z)</option>
                </select>
              </div>

            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-t border-slate-800/80 pt-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4.5 py-2.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
                    selectedCategory === cat
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-slate-900/60 text-slate-400 hover:bg-slate-850 hover:text-white border border-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>

          {sortedVouchers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedVouchers.map((voucher) => {
                return (
                  <div
                    key={voucher.id}
                    className="glass-card glass-card-hover rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-400 text-slate-950 shadow-md">
                        {voucher.tag}
                      </span>
                      <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider">
                        {voucher.category}
                      </span>
                    </div>

                    <div className="space-y-1 mb-4">
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-lg text-white">
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

                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20 bg-slate-900/40 border border-slate-800/80 rounded-3xl space-y-3">
              <p className="text-lg text-slate-300 font-bold">No vouchers found</p>
              <p className="text-sm text-slate-500">Try adjusting your filters or search terms.</p>
            </div>
          )}

        </div>
      </main>
      <Footer />
    </>
  );
}
