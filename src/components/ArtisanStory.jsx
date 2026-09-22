import React from 'react';
import { Sparkles, Heart, Flower2, Shield, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/catalog';

export default function ArtisanStory({ onCustomOrderClick }) {
  return (
    <section id="about" className="py-16 sm:py-24 bg-artisan-cream/40 border-t border-artisan-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Artisan Workspace Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image */}
              <div className="rounded-3xl overflow-hidden shadow-soft border-4 border-white aspect-[4/5] bg-artisan-sand">
                <img
                  src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80"
                  alt="Artisan Yukti Handcrafting Resin Studio"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white rounded-2xl p-4 shadow-soft border border-artisan-border max-w-[220px]">
                <div className="flex items-center gap-2 text-artisan-terracotta mb-1">
                  <Flower2 className="w-4 h-4" />
                  <span className="font-serif text-xs font-bold">The Studio Promise</span>
                </div>
                <p className="text-[11px] text-artisan-muted leading-tight">
                  Hand-poured resin layers, real dehydrated flowers, and premium gold leaf accents.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Artisan Story Copy */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-artisan-terracotta">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Artisan Behind The Craft</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-artisan-charcoal leading-tight">
              Handmade With Intention. <br />
              <span className="font-serif italic font-normal text-artisan-terracotta">
                Every piece has a story.
              </span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-artisan-muted leading-relaxed font-normal">
              <p>
                What started with a passion for creative handmade artistry has grown into a cherished collection of personalized creations made specially for people's most memorable life moments.
              </p>
              <p>
                From preserving sacred wedding garlands and delicate bridal petals to hand-carving acrylic letters for family entrance name plates, every single item in our studio is individually crafted with patience, precision, and immense love.
              </p>
            </div>

            {/* Three Pillar Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-artisan-border">
                <Heart className="w-5 h-5 text-artisan-terracotta mb-2" />
                <h4 className="font-serif text-sm font-bold text-artisan-charcoal">Artisanal Dedication</h4>
                <p className="text-[11px] text-artisan-muted mt-0.5">Every creation is individually designed and handcrafted.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-artisan-border">
                <Flower2 className="w-5 h-5 text-artisan-sage mb-2" />
                <h4 className="font-serif text-sm font-bold text-artisan-charcoal">Preserved Florals</h4>
                <p className="text-[11px] text-artisan-muted mt-0.5">Carefully dehydrated botanicals encased in crystal resin.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-artisan-border">
                <Shield className="w-5 h-5 text-artisan-gold mb-2" />
                <h4 className="font-serif text-sm font-bold text-artisan-charcoal">Personalized For You</h4>
                <p className="text-[11px] text-artisan-muted mt-0.5">Tailored names, dates, quotes, and custom color themes.</p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={onCustomOrderClick}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-artisan-terracotta hover:bg-artisan-terracotta-dark text-white text-xs sm:text-sm font-medium shadow-sm transition-all"
              >
                <span>Let's Craft Your Story</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
