import React, { useState } from 'react';
import { FAQS } from '../data/catalog';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { createWhatsAppUrl } from '../utils/whatsapp';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-16 sm:py-24 bg-artisan-bg border-t border-artisan-border/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-artisan-terracotta mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-artisan-charcoal">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-artisan-muted mt-2">
            Everything you need to know about custom ordering, flower preservation, and resin care.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-artisan-border overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 group"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-serif text-base sm:text-lg font-bold text-artisan-charcoal group-hover:text-artisan-terracotta transition-colors">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-artisan-muted group-hover:text-artisan-terracotta transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-artisan-terracotta' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 text-xs sm:text-sm text-artisan-muted leading-relaxed border-t border-artisan-border/30 animate-in fade-in duration-200">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional help prompt */}
        <div className="mt-8 text-center bg-artisan-cream rounded-2xl p-4 border border-artisan-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span className="text-artisan-charcoal font-medium">Have a different question regarding your customized piece?</span>
          <a
            href={createWhatsAppUrl("Hi Yukti! I had a quick question regarding custom orders and resin care.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-colors shadow-sm shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white" />
            <span>Ask Yukti on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
