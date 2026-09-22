import React from 'react';
import { Sparkles, ArrowRight, Heart, ShieldCheck, Truck, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../data/catalog';

export default function Hero({ onExploreClick, onCustomOrderClick }) {
  return (
    <section id="hero" className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden">
      {/* Background Decorative Ambient Blobs & Floating Resin Orbs */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] pointer-events-none -z-10 opacity-70">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-artisan-terracotta-light/60 blur-3xl animate-float-slow" />
        <div className="absolute top-20 right-10 w-80 h-80 rounded-full bg-artisan-sage-light/70 blur-3xl animate-float-reverse" />
        <div className="absolute bottom-10 left-1/3 w-64 h-64 rounded-full bg-artisan-gold-light/80 blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Artistic Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-artisan-cream border border-artisan-border text-xs sm:text-sm font-medium text-artisan-muted shadow-sm">
              <span className="w-2 h-2 rounded-full bg-artisan-gold animate-ping" />
              <span>Bespoke Handmade Resin & Floral Preservation</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-artisan-charcoal leading-[1.15] sm:leading-[1.18]">
              Made With Love. <br />
              <span className="font-serif italic font-normal text-artisan-terracotta">
                Created Just For You.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-artisan-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Handcrafted resin art, personalized gifts, wedding creations & beautiful décor — made specially for your special moments.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onCustomOrderClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-artisan-terracotta hover:bg-artisan-terracotta-dark text-white font-medium text-sm sm:text-base shadow-soft hover:shadow-card-hover transition-all transform hover:-translate-y-0.5"
              >
                <Sparkles className="w-4 h-4 text-artisan-gold-light" />
                <span>Create Something Custom</span>
                <ArrowRight className="w-4 h-4 text-white/90" />
              </button>

              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-artisan-cream text-artisan-charcoal font-medium text-sm sm:text-base border border-artisan-border shadow-sm transition-all"
              >
                <span>Explore Creations</span>
              </button>
            </div>

            {/* Trust Indicators / Social Proof */}
            <div className="pt-6 sm:pt-8 border-t border-artisan-border/60 grid grid-cols-3 gap-2 sm:gap-4 text-center lg:text-left">
              <div>
                <div className="flex items-center justify-center lg:justify-start gap-1 text-artisan-terracotta font-serif text-lg sm:text-xl font-bold">
                  <span>{BUSINESS_INFO.followerCount}</span>
                </div>
                <p className="text-[11px] sm:text-xs text-artisan-muted mt-0.5">Instagram Family</p>
              </div>

              <div>
                <div className="flex items-center justify-center lg:justify-start gap-1 text-artisan-charcoal font-serif text-lg sm:text-xl font-bold">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-400 inline" />
                  <span>{BUSINESS_INFO.rating}</span>
                </div>
                <p className="text-[11px] sm:text-xs text-artisan-muted mt-0.5">Customer Rating</p>
              </div>

              <div>
                <div className="flex items-center justify-center lg:justify-start gap-1 text-artisan-charcoal font-serif text-lg sm:text-xl font-bold">
                  <span>100%</span>
                </div>
                <p className="text-[11px] sm:text-xs text-artisan-muted mt-0.5">Handcrafted in India</p>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Card with Resin & Petal Showcase */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Frame with Gold Rim & Resin Glass Base */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 aspect-[4/5] group bg-artisan-cream">
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85"
                  alt="Handcrafted Resin & Floral Preservation Art"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

                {/* Floating Bottom Card: Featured Varmala Preservation */}
                <div className="absolute bottom-4 left-4 right-4 resin-glass rounded-2xl p-4 shadow-lg border border-white/60">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] tracking-wider uppercase font-semibold text-artisan-terracotta bg-artisan-terracotta-light/90 px-2 py-0.5 rounded-md">
                        Signature Craft
                      </span>
                      <h4 className="font-serif text-sm sm:text-base font-bold text-artisan-charcoal mt-1">
                        Wedding Varmala Preservation
                      </h4>
                      <p className="text-xs text-artisan-muted">Custom Cast in Archival Crystal Resin</p>
                    </div>
                    <button
                      onClick={onCustomOrderClick}
                      className="bg-artisan-terracotta text-white p-2.5 rounded-xl hover:bg-artisan-terracotta-dark transition-colors shrink-0 shadow-sm"
                      title="Customize this"
                    >
                      <Sparkles className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Top Right */}
              <div className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-soft border border-artisan-border hidden sm:flex items-center gap-3 animate-float-slow">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
                  <Sparkles className="w-5 h-5 text-artisan-gold" />
                </div>
                <div>
                  <p className="text-xs font-bold text-artisan-charcoal">Real Preserved Flowers</p>
                  <p className="text-[10px] text-artisan-muted">Sealed for a Lifetime</p>
                </div>
              </div>

              {/* Floating Badge 2: Bottom Left */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-soft border border-artisan-border hidden sm:flex items-center gap-3 animate-float-reverse">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-artisan-charcoal">Pan-India Safe Delivery</p>
                  <p className="text-[10px] text-artisan-muted">Custom Bubble Packaged</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
