import React from 'react';
import { Sparkles, ArrowRight, MessageCircle } from 'lucide-react';
import { createWhatsAppUrl } from '../utils/whatsapp';

export default function FinalCTA({ onCustomOrderClick }) {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-artisan-cream/50 to-artisan-sand/60 border-t border-artisan-border relative overflow-hidden">
      {/* Decorative Shimmer & Floating Orbs */}
      <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-artisan-terracotta-light/60 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-artisan-gold-light/60 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-artisan-border text-xs font-semibold text-artisan-terracotta shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Bespoke Handcrafted Keepsakes</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-artisan-charcoal tracking-tight">
          Let's Create Something Meaningful.
        </h2>

        <p className="text-base sm:text-lg text-artisan-muted max-w-xl mx-auto font-normal">
          Have an idea? Let's turn it into something you can cherish forever.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
          <button
            onClick={onCustomOrderClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-artisan-terracotta hover:bg-artisan-terracotta-dark text-white font-semibold text-sm sm:text-base shadow-soft hover:shadow-card-hover transition-all transform hover:-translate-y-0.5"
          >
            <Sparkles className="w-4 h-4 text-artisan-gold-light" />
            <span>Start Your Custom Order</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={createWhatsAppUrl("Hi Yukti! I saw your creations on your website and want to discuss a custom design.")}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm sm:text-base shadow-sm transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        <p className="text-[11px] text-artisan-muted pt-3">
          Personalized resin & floral art • Made with love • Direct WhatsApp consultation
        </p>

      </div>
    </section>
  );
}
