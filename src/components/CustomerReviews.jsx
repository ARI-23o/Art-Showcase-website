import React from 'react';
import { Heart, MessageSquareHeart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/catalog';

export default function CustomerReviews() {
  return (
    <section className="py-16 sm:py-20 bg-artisan-bg border-t border-artisan-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-artisan-terracotta mb-2">
            <Heart className="w-3.5 h-3.5 fill-artisan-terracotta text-artisan-terracotta" />
            <span>Customer Stories</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-artisan-charcoal">
            What Customers Say
          </h2>
          <p className="text-sm text-artisan-muted mt-2">
            A dedicated showcase for genuine client reviews, wedding notes, and unboxing reactions.
          </p>
        </div>

        {/* Professional Placeholder / Client Reviews Demo Container */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-artisan-border/80 shadow-soft text-center max-w-3xl mx-auto relative overflow-hidden">
          <div className="w-14 h-14 rounded-2xl bg-artisan-cream text-artisan-terracotta flex items-center justify-center mx-auto mb-4">
            <MessageSquareHeart className="w-7 h-7" />
          </div>

          <h3 className="font-serif text-xl sm:text-2xl font-bold text-artisan-charcoal mb-2">
            Client Testimonials Section
          </h3>

          <p className="text-xs sm:text-sm text-artisan-muted max-w-lg mx-auto leading-relaxed">
            Real customer reviews, wedding varmala feedback, and unboxing testimonials from <strong className="text-artisan-charcoal">{BUSINESS_INFO.instagramHandle}</strong> will be featured here in the final version.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-artisan-cream border border-artisan-border text-xs text-artisan-muted">
            <span>Demo Placeholder • Ready to integrate 3–5 customer highlights</span>
          </div>
        </div>

      </div>
    </section>
  );
}
