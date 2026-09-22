import React from 'react';
import { CRAFTING_STEPS } from '../data/catalog';
import { ArrowRight, MessageSquare, Palette, HeartHandshake, Package } from 'lucide-react';

const STEP_ICONS = [
  MessageSquare,
  Palette,
  HeartHandshake,
  Package
];

export default function CraftingProcess({ onCustomOrderClick }) {
  return (
    <section id="process" className="py-16 sm:py-24 bg-artisan-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-artisan-terracotta mb-2">
            <span>The Handcrafted Journey</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-artisan-charcoal">
            From Idea to Creation
          </h2>
          <p className="text-sm text-artisan-muted mt-2">
            A transparent 4-step artisan process ensuring your personalized creation is crafted with perfection and care.
          </p>
        </div>

        {/* 4 Step Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {CRAFTING_STEPS.map((stepItem, index) => {
            const IconComp = STEP_ICONS[index] || MessageSquare;
            return (
              <div
                key={stepItem.step}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-artisan-border/80 shadow-sm hover:shadow-card-hover transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-serif text-2xl font-bold text-artisan-terracotta/70 group-hover:text-artisan-terracotta transition-colors">
                      {stepItem.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-artisan-cream group-hover:bg-artisan-terracotta-light text-artisan-terracotta flex items-center justify-center transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3 className="font-serif text-lg font-bold text-artisan-charcoal mb-2 group-hover:text-artisan-terracotta transition-colors">
                    {stepItem.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-xs sm:text-sm text-artisan-muted leading-relaxed">
                    {stepItem.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-artisan-border/40 text-[11px] text-artisan-muted flex items-center justify-between">
                  <span>Phase 0{index + 1}</span>
                  <span className="text-emerald-700 font-medium">Dedicated Craft</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom prompt */}
        <div className="mt-12 text-center">
          <button
            onClick={onCustomOrderClick}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-artisan-cream hover:bg-artisan-sand text-artisan-charcoal border border-artisan-border text-xs sm:text-sm font-medium transition-all"
          >
            <span>Ready to start step 01? Click here to share your idea</span>
            <ArrowRight className="w-4 h-4 text-artisan-terracotta" />
          </button>
        </div>

      </div>
    </section>
  );
}
