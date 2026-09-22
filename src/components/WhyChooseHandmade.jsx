import React from 'react';
import { Heart, Sparkles, MessageCircle, Palette, CheckCircle2 } from 'lucide-react';

const REASONS = [
  {
    title: "Personalized",
    description: "Designed around your story, names, and meaningful moments.",
    icon: Sparkles
  },
  {
    title: "Made to Order",
    description: "Created specifically for your occasion with tailored colors and shapes.",
    icon: Palette
  },
  {
    title: "Meaningful",
    description: "Turn wedding flowers, family titles, and memories into something lasting.",
    icon: Heart
  },
  {
    title: "Direct Communication",
    description: "Discuss your custom idea directly with Yukti through WhatsApp.",
    icon: MessageCircle
  }
];

export default function WhyChooseHandmade({ onCustomOrderClick }) {
  return (
    <section className="py-14 sm:py-18 bg-white border-y border-artisan-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-artisan-terracotta mb-2 block">
            Crafted With Care
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-artisan-charcoal">
            Why Choose a Handmade Creation?
          </h2>
          <p className="text-xs sm:text-sm text-artisan-muted mt-2">
            Every piece is more than just home décor — it is a personalized memory crafted just for you.
          </p>
        </div>

        {/* 4 Value Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REASONS.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-artisan-cream/50 border border-artisan-border/70 hover:border-artisan-terracotta/40 hover:bg-artisan-cream transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white text-artisan-terracotta flex items-center justify-center mb-4 border border-artisan-border/60 shadow-sm">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-artisan-charcoal mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-artisan-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-artisan-border/40 flex items-center gap-1.5 text-[11px] font-medium text-artisan-terracotta">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Bespoke Art</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
