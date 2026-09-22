import React from 'react';
import { MessageCircle, Palette } from 'lucide-react';
import { createWhatsAppUrl } from '../utils/whatsapp';

export default function MobileQuickBar({ onCustomOrderClick }) {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-artisan-border px-4 py-2.5 shadow-2xl flex items-center gap-3">
      {/* Start Custom Order Button */}
      <button
        onClick={onCustomOrderClick}
        className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-2xl bg-artisan-terracotta text-white font-semibold text-xs shadow-sm active:scale-95 transition-transform"
      >
        <Palette className="w-4 h-4 text-white" />
        <span>Custom Order</span>
      </button>

      {/* WhatsApp Quick Chat */}
      <a
        href={createWhatsAppUrl("Hi Yukti! I am browsing your website on mobile and would love to customize an order.")}
        target="_blank"
        rel="noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-2xl bg-emerald-600 text-white font-semibold text-xs shadow-sm active:scale-95 transition-transform"
      >
        <MessageCircle className="w-4 h-4 fill-white" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
