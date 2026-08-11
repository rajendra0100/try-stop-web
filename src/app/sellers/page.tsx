import type { Metadata } from 'next';
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Sparkles, TrendingUp, Coins, QrCode, Store } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Partner Stores & Merchant Onboarding | List Your Shop',
  description: 'List your fashion boutique or restaurant on TryStop in Mansarovar, Jaipur. Enjoy accelerated bank settlements, direct WhatsApp customer leads, and increased local footfall.',
  keywords: ['TryStop seller registration', 'List shop Mansarovar Jaipur', 'Local merchant store listing', 'Retail merchant onboarding Jaipur'],
};

export default function SellersPage() {


  const merchantBenefits = [
    {
      icon: TrendingUp,
      title: 'Targeted Local Visibility',
      description: 'Get discovered by neighborhood shoppers actively looking for verified boutiques and restaurants in your area.',
      color: 'text-cyan-400 bg-cyan-950/60 border border-cyan-800/40',
    },
    {
      icon: Coins,
      title: 'Accelerated Settlements',
      description: 'Enjoy fast bank settlements. All transactions settled smoothly directly to your bank account.',
      color: 'text-emerald-400 bg-emerald-950/60 border border-emerald-800/40',
    },
    {
      icon: Store,
      title: 'Ratings & Rank Optimization',
      description: 'Accept app checkouts to build reviews automatically and improve your rank on the neighborhood store lists.',
      color: 'text-purple-400 bg-purple-950/60 border border-purple-800/40',
    },
    {
      icon: QrCode,
      title: 'Zero Integration Overhead',
      description: 'No expensive POS setup or complex coding. Simply use your counter QR or accept direct details-page payments.',
      color: 'text-amber-400 bg-amber-950/60 border border-amber-800/40',
    },
  ];

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24 pb-20 bg-slate-950 min-h-screen">
        
        {/* Background Ambient Glow */}
        <div className="absolute top-20 left-1/4 w-[600px] h-[400px] bg-gradient-to-tr from-blue-700/10 to-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left: Info Pitch & Benefits */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Merchant Partnership Program</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] text-center lg:text-left">
                Boost Your Offline Sales. <br />
                <span className="text-gradient-primary">List Your Store on TryStop!</span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed text-center lg:text-left max-w-2xl">
                Partner with India&apos;s fastest-growing local store discovery network. Show off your store via videos, offer guaranteed vouchers, and drive massive counter traffic.
              </p>

              {/* Benefits Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {merchantBenefits.map((benefit) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={benefit.title} className="p-6 bg-slate-900/60 border border-slate-800 rounded-3xl space-y-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${benefit.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-white text-base">{benefit.title}</h3>
                      <p className="text-xs text-slate-400 leading-relaxed">{benefit.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Registration Inquiry Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
                
                <div className="flex items-center gap-3 pb-4 border-b border-slate-800/80">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-cyan-400 flex items-center justify-center">
                    <Store className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white">Partner Listing</h2>
                    <p className="text-xs text-slate-400">Add your outlet to TryStop</p>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  We are launching selectively in Jaipur (covering Mansarovar) for neighborhood food &amp; fashion outlets.
                </p>

                <div className="p-4 bg-slate-950/80 border border-slate-850 rounded-2xl space-y-3 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    <span><strong>Standard 2-day bank settlements</strong> (subject to bank working cycles &amp; validation).</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    <span><strong>Increase store visibility</strong> as shoppers leave ratings.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    <span><strong>Refer &amp; Earn active rewards</strong> for subsequent merchant listings.</span>
                  </div>
                </div>

                <a
                  href="mailto:partners@trystop.in?subject=Merchant Partner Listing Inquiry"
                  className="w-full block py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-black text-sm text-center shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
                >
                  Contact Partners Team
                </a>

                <div className="text-center">
                  <p className="text-xs text-slate-500">
                    Direct Email: <a href="mailto:partners@trystop.in" className="text-cyan-400 font-semibold hover:underline">partners@trystop.in</a>
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
