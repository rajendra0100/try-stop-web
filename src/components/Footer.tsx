'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Mail, ShieldCheck, Heart, ArrowRight, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 to-cyan-400 p-[2px] shadow-lg shadow-blue-500/20">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <span className="font-extrabold text-xl text-cyan-400">T</span>
                </div>
              </div>
              <span className="font-black text-2xl tracking-wider text-white">
                TRY<span className="text-cyan-400">STOP</span>
              </span>
            </Link>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              TryStop is a hyper-local discovery &amp; discount platform for neighborhood fashion boutiques and dining spots. We help offline stores grow while offering shoppers verified savings and cashback.
            </p>

            <div className="flex items-center gap-3 text-xs text-slate-400 bg-slate-900/80 border border-slate-800 p-3 rounded-xl max-w-sm">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Verified Local Merchant Network • Seamless Counter Redemptions</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-base tracking-wide">Quick Navigation</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-blue-500" /> Home
                </Link>
              </li>
              <li>
                <Link href="/vouchers" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-blue-500" /> Pay-vs-Get Vouchers
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-blue-500" /> Key Features
                </Link>
              </li>
              <li>
                <Link href="/sellers" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-blue-500" /> Partner With Us (Sellers)
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-blue-500" /> About TryStop
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Categories */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-base tracking-wide">Top Voucher Deals</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/vouchers?cat=dining" className="hover:text-cyan-400 transition-colors">
                  Restaurants &amp; Cafes
                </Link>
              </li>
              <li>
                <Link href="/vouchers?cat=fashion" className="hover:text-cyan-400 transition-colors">
                  Fashion &amp; Clothing
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Legal */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-base tracking-wide">Support & Legal</h3>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-start gap-2 text-slate-400">
                <Mail className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <span>support@trystop.in</span>
              </li>
              <li className="flex items-start gap-2 text-slate-400">
                <MessageSquare className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <a href="https://wa.me/919694092261" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">+91 96940 92261 (WhatsApp)</a>
              </li>
              <li className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <span>Thadi Market, Mansarovar, Jaipur, RJ</span>
              </li>
              <li className="pt-2 border-t border-slate-900">
                <Link href="/privacy-policy" className="hover:text-cyan-400 transition-colors block text-xs">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-cyan-400 transition-colors block text-xs">
                  Terms of Service & Usage
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom divider & copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} TryStop Technologies Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1">
              Crafted with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> for Indian Local Stores
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
