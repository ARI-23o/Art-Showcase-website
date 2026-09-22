import React from 'react';
import { REVIEWS } from '../data/catalog';
import { Star, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export default function CustomerReviews() {
  return (
    <section className="py-16 sm:py-24 bg-artisan-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-artisan-terracotta mb-2">
            <Heart className="w-3.5 h-3.5 fill-artisan-terracotta text-artisan-terracotta" />
            <span>Customer Love & Stories</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-artisan-charcoal">
            Loved by Our Customers
          </h2>
          <p className="text-sm text-artisan-muted mt-2">
            Nothing brings us more joy than seeing our handcrafted creations become centerpieces of homes and wedding memories.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-artisan-border/80 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Comment Quote */}
                <p className="text-sm text-artisan-charcoal/90 leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-5 mt-5 border-t border-artisan-border/50 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-sm font-bold text-artisan-charcoal">
                    {review.name}
                  </h4>
                  <p className="text-[11px] text-artisan-muted">
                    {review.location} • <span className="text-artisan-terracotta font-medium">{review.product}</span>
                  </p>
                </div>
                
                <div className="flex items-center gap-1 text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
