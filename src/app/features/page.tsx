import type { Metadata } from 'next';
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Sparkles, MapPin, PhoneCall, QrCode, Wallet, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Platform Features & App Capabilities',
  description: 'Explore TryStop app features: Google Maps location navigation, direct WhatsApp seller connection, instant counter QR payments, and reusable wallet cashbacks.',
  keywords: ['TryStop app features', 'Counter QR scan discount', 'Direct merchant WhatsApp chat', 'Local store wallet cashback'],
};

export default function FeaturesPage() {
  const featureTours = [
    {
      icon: MapPin,
      title: 'Location Suggestions & Map Navigation',
      subtitle: 'Find shops near you',
      description: 'Discover neighborhood food & fashion outlets tailored to your current location. Check top ratings, review detail cards, and navigate directly using integrated Google Maps.',
      bullets: [
        'Hyperlocal store listings sorted by distance',
        'Top-rated and verified local merchant recommendations',
        'One-click Google Maps navigation routing',
      ],
      color: 'text-cyan-400 border-cyan-800/40 bg-cyan-950/20',
      badge: 'Location Discovery',
      illustrationLabel: 'Nearby Outlets',
      illustrationTitle: 'Grand Pizza & Pasta Lounge',
      illustrationSubtitle: 'Thadi Market, Mansarovar, Jaipur',
      illustrationExtra: 'Google Maps Directions Active',
      illustrationFooterText: 'Tap "Navigate" in the app to open Google Maps directions directly.',
    },
    {
      icon: PhoneCall,
      title: 'Direct Merchant Connection',
      subtitle: 'Build shopping trust',
      description: 'Check what types of collections, stocks, and daily specials store owners keep. Tap to contact the merchant directly via WhatsApp to verify stock before visiting.',
      bullets: [
        'Review store details and live collection listings',
        'Direct shopper-to-merchant WhatsApp chat channels',
        'Promote mutual trust in neighborhood business listings',
      ],
      color: 'text-purple-400 border-purple-800/40 bg-purple-950/20',
      badge: 'Merchant Connect',
      illustrationLabel: 'Merchant Contact & Support',
      illustrationTitle: 'Urban Style Boutique',
      illustrationSubtitle: 'WhatsApp: +91 96940 92261',
      illustrationExtra: 'Live Stock & Collection Queries',
      illustrationFooterText: 'Message the seller directly on WhatsApp to ask about stock availability.',
    },
    {
      icon: QrCode,
      title: 'QR Scan & Direct App Payments',
      subtitle: 'Instant billing flexibility',
      description: 'Pay store checkout bills smoothly. Scan their TryStop counter QR code, or process payments directly on the shop details page in the user app without scanning.',
      bullets: [
        'Fast counter checkout via QR code scanning',
        'Pay directly from store details page without scanner',
        'Instant payment validation screens',
      ],
      color: 'text-emerald-400 border-emerald-800/40 bg-emerald-950/20',
      badge: 'Seamless Checkout',
      illustrationLabel: 'Counter Checkout',
      illustrationTitle: 'The Burger Bistro',
      illustrationSubtitle: 'Direct Checkout Enabled',
      illustrationExtra: 'Counter QR Scan or In-App Payment',
      illustrationFooterText: 'Proceed to checkout counter, scan the store QR, or complete payment on the shop page.',
    },
    {
      icon: Wallet,
      title: 'Wallet Cashbacks & Platform Vouchers',
      subtitle: 'Maximize ecosystem savings',
      description: 'Earn instant cashback rewards in your TryStop Wallet on direct checkouts, or purchase platform vouchers to unlock store credit extensions at partner outlets. Spend your wallet credits to pay for subsequent transactions.',
      bullets: [
        'Instant cashbacks credited to wallet immediately',
        'Dynamic platform vouchers and store credit upgrades',
        'Reusable wallet balance for future checkout settlements',
      ],
      color: 'text-amber-400 border-amber-800/40 bg-amber-950/20',
      badge: 'Wallet Cashback',
      illustrationLabel: 'TryStop Wallet Status',
      illustrationTitle: 'Refer & Earn Active',
      illustrationSubtitle: 'Dual Referral Rewards',
      illustrationExtra: 'Earn up to ₹100 rewards',
      illustrationFooterText: 'Accrued balance is 100% reusable to purchase future platform credit vouchers.',
    },
  ];

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24 pb-20 bg-slate-950 min-h-screen">
        
        {/* Background ambient light */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-tr from-blue-700/10 to-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 relative z-10 space-y-16">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Technology Tour</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
              Everything You Need to <br />
              <span className="text-gradient-primary">Save Big in Local Outlets</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore TryStop&apos;s features designed specifically to streamline offline food &amp; fashion shopping, verify merchant listings, navigate via maps, and save instantly via direct payments or vouchers.
            </p>
          </div>

          {/* Feature Tours Grid */}
          <div className="space-y-12">
            {featureTours.map((tour, index) => {
              const Icon = tour.icon;
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={tour.title}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-10 border-b border-slate-900 last:border-b-0`}
                >
                  {/* Text Details (spans 7 cols) */}
                  <div className={`lg:col-span-7 space-y-6 ${!isEven ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${tour.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-400">{tour.subtitle}</span>
                        <h2 className="text-2xl font-black text-white tracking-tight mt-0.5">{tour.title}</h2>
                      </div>
                    </div>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {tour.description}
                    </p>

                    <ul className="space-y-2.5">
                      {tour.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Feature Visual/Mock (spans 5 cols) */}
                  <div className={`lg:col-span-5 flex justify-center ${!isEven ? 'lg:order-1' : ''}`}>
                    <div className="w-full max-w-sm p-6 bg-slate-900/60 border border-slate-800 rounded-3xl relative overflow-hidden backdrop-blur-xl">
                      
                      {/* Floating Badge */}
                      <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-bold text-cyan-300 bg-cyan-950/80 border border-cyan-800/40">
                        {tour.badge}
                      </span>

                      {/* Content illustration */}
                      <div className="space-y-4 pt-4">
                        <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                          {tour.illustrationLabel}
                        </span>
                        <h4 className="text-sm font-bold text-white leading-tight">
                          {tour.illustrationTitle}
                        </h4>
                        
                        <div className="p-4 rounded-2xl bg-slate-950/85 border border-slate-850 flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${tour.color}`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-bold text-white truncate">{tour.illustrationSubtitle}</p>
                            <p className="text-[10px] text-slate-400 truncate">{tour.illustrationExtra}</p>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-950/40 rounded-xl border border-slate-900 text-[11px] text-slate-400">
                          {tour.illustrationFooterText}
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
