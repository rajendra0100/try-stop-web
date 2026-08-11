import type { Metadata } from 'next';
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Sparkles, Mail, MapPin, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Support & Help Center',
  description: 'Connect with TryStop customer and merchant support team. Direct WhatsApp chat (+91 96940 92261), support email, and office location in Mansarovar, Jaipur.',
  keywords: ['Contact TryStop', 'TryStop WhatsApp support', 'TryStop Jaipur address', 'Merchant help center Jaipur'],
};

export default function ContactPage() {


  const contactChannels = [
    {
      icon: Mail,
      title: 'Email Support',
      value: 'support@trystop.in',
      link: 'mailto:support@trystop.in',
      description: 'Send us your questions, feedback, or bugs anytime. Our support team is online to assist you.',
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp Support',
      value: '+91 96940 92261',
      link: 'https://wa.me/919694092261',
      description: 'Need help? Tap to connect with our support team directly on WhatsApp.',
    },
    {
      icon: MapPin,
      title: 'Our Headquarters',
      value: 'Mansarovar, Jaipur, RJ',
      link: 'https://maps.google.com/?q=Thadi+Market,+Mansarovar,+Jaipur,+Rajasthan',
      description: 'Thadi Market, Mansarovar, Jaipur, Rajasthan, India.',
    },
  ];

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24 pb-20 bg-slate-950 min-h-screen">
        
        {/* Background glow orb */}
        <div className="absolute top-20 left-1/4 w-[600px] h-[400px] bg-gradient-to-tr from-blue-700/10 to-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
            
            {/* Left: Contact Info */}
            <div className="lg:col-span-6 space-y-8 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Support Center</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
                  Get in Touch <br />
                  <span className="text-gradient-primary">with TryStop Team</span>
                </h1>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                  Have a question about purchasing vouchers, claiming cashback, or listing your retail shop? We are here to help you solve it.
                </p>
              </div>

              {/* Direct Channels */}
              <div className="space-y-6 pt-4 lg:pt-0">
                {contactChannels.map((channel) => {
                  const Icon = channel.icon;
                  return (
                    <a
                      key={channel.title}
                      href={channel.link}
                      target={channel.link.startsWith('http') ? '_blank' : undefined}
                      rel={channel.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex gap-4 p-5 bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 rounded-2xl transition-all group cursor-pointer"
                    >
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-bold text-white text-sm">{channel.title}</h3>
                        <p className="text-sm font-extrabold text-cyan-400 group-hover:underline">{channel.value}</p>
                        <p className="text-xs text-slate-400 leading-relaxed">{channel.description}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Right: Contact Card */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl flex flex-col justify-center space-y-6">
                
                <div className="flex items-center gap-3 pb-4 border-b border-slate-800/80">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-cyan-400 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white">Direct Email Support</h2>
                    <p className="text-xs text-slate-400">Reach out to our customer success team</p>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  We don&apos;t use complex forms. Simply click the button below to email our support team directly. We are online to answer user inquiries, merchant queries, or partnership suggestions.
                </p>

                <div className="p-4 bg-slate-950/80 border border-slate-850 rounded-2xl space-y-2 text-xs text-slate-400">
                  <p><strong>Response:</strong> Rapid email assistance.</p>
                  <p><strong>Operation Hours:</strong> Available online for email support.</p>
                  <p><strong>Merchant Queries:</strong> Money settlements, listing verification, or referral bonuses.</p>
                </div>

                <a
                  href="mailto:support@trystop.in?subject=TryStop Support Inquiry"
                  className="w-full block py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-black text-sm text-center shadow-lg shadow-blue-600/20 transition-all cursor-pointer"
                >
                  Compose Support Email
                </a>

                <div className="text-center">
                  <p className="text-xs text-slate-500">
                    Direct Email: <a href="mailto:support@trystop.in" className="text-cyan-400 font-semibold hover:underline">support@trystop.in</a>
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
