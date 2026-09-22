import React from 'react';
import { OCCASIONS } from '../data/catalog';
import { Sparkles } from 'lucide-react';

export default function OccasionExplorer({ activeOccasion, onSelectOccasion, onCustomOrderClick }) {
  return (
    <section id="occasions" className="py-12 sm:py-16 bg-artisan-cream/60 border-y border-artisan-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-artisan-terracotta mb-2">
            <span>Organized By Moment</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-artisan-charcoal">
            Made For Your Moments
          </h2>
          <p className="text-xs sm:text-sm text-artisan-muted mt-2">
            Instead of thinking about products first, find the ideal personalized creation for your special celebration.
          </p>
        </div>

        {/* Occasions Interactive Carousel / Chip Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-4">
          {OCCASIONS.map((occ) => {
            const isActive = activeOccasion === occ.id;
            return (
              <button
                key={occ.id}
                onClick={() => onSelectOccasion(occ.id)}
                className={`relative group p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 flex flex-col justify-between border ${
                  isActive
                    ? 'bg-white border-artisan-terracotta shadow-soft scale-[1.02] ring-2 ring-artisan-terracotta/20'
                    : 'bg-white/80 hover:bg-white border-artisan-border hover:border-artisan-terracotta/40 shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-artisan-muted group-hover:text-artisan-terracotta transition-colors">
                      Curated
                    </span>
                    {isActive ? (
                      <span className="w-2 h-2 rounded-full bg-artisan-terracotta" />
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-artisan-border group-hover:bg-artisan-terracotta/40 transition-colors" />
                    )}
                  </div>
                  <h3 className={`font-serif text-sm sm:text-base font-bold ${
                    isActive ? 'text-artisan-terracotta' : 'text-artisan-charcoal'
                  }`}>
                    {occ.label}
                  </h3>
                </div>

                {occ.tag && (
                  <span className="text-[10px] text-artisan-muted font-medium mt-3 block truncate">
                    {occ.tag}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Subtle helper text & custom CTA prompt */}
        <div className="mt-8 text-center flex flex-col sm:flex-row items-center justify-center gap-2 text-xs text-artisan-muted">
          <span>Looking for a bespoke theme not listed here?</span>
          <button
            onClick={onCustomOrderClick}
            className="text-artisan-terracotta font-medium hover:underline inline-flex items-center gap-1"
          >
            <span>Tell Yukti your custom theme</span>
            <Sparkles className="w-3 h-3" />
          </button>
        </div>

      </div>
    </section>
  );
}
