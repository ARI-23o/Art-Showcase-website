import React, { useState } from 'react';
import { MessageCircle, X, ChevronRight, Heart } from 'lucide-react';
import { WHATSAPP_QUICK_ACTIONS, BUSINESS_INFO } from '../data/catalog';
import { createWhatsAppUrl } from '../utils/whatsapp';

export default function SmartWhatsAppAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  const handleActionClick = (messageText) => {
    const url = createWhatsAppUrl(messageText);
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end">
      {/* Expandable Assistant Drawer */}
      {isOpen && (
        <div className="mb-3 w-[300px] sm:w-[340px] bg-white rounded-3xl shadow-2xl border border-artisan-border overflow-hidden animate-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-700 to-emerald-800 p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-sm font-serif font-bold">
                    Y
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-emerald-800" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-white leading-tight">
                    Chat with Yukti
                  </h4>
                  <p className="text-[10px] text-emerald-200">Usually replies within an hour</p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white p-1 rounded-lg transition-colors"
                aria-label="Close assistant"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-emerald-100 mt-2.5 leading-relaxed bg-white/10 rounded-xl p-2.5">
              Hi there! Looking for something special? Choose an option below to start your WhatsApp inquiry:
            </p>
          </div>

          {/* Quick Action List */}
          <div className="p-3 space-y-2 max-h-[300px] overflow-y-auto">
            {WHATSAPP_QUICK_ACTIONS.map((action) => (
              <button
                key={action.id}
                onClick={() => handleActionClick(action.message)}
                className="w-full p-2.5 rounded-xl border border-artisan-border/70 hover:border-emerald-500 hover:bg-emerald-50/50 text-left text-xs font-medium text-artisan-charcoal transition-all flex items-center justify-between group"
              >
                <span className="truncate">{action.label}</span>
                <ChevronRight className="w-3.5 h-3.5 text-artisan-muted group-hover:text-emerald-700 group-hover:translate-x-0.5 transition-all shrink-0" />
              </button>
            ))}
          </div>

          {/* Footer note */}
          <div className="p-2.5 bg-artisan-cream/60 border-t border-artisan-border/40 text-center text-[10px] text-artisan-muted">
            Directly connected to {BUSINESS_INFO.formattedPhone}
          </div>

        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 sm:py-3.5 rounded-full shadow-2xl transition-all transform hover:scale-105 active:scale-95"
        aria-label="Open WhatsApp Assistant"
      >
        <MessageCircle className="w-5 h-5 fill-white" />
        <span className="text-xs sm:text-sm font-semibold tracking-wide hidden sm:inline">
          {isOpen ? 'Close' : 'Chat on WhatsApp'}
        </span>
        
        {/* Subtle Online Pulse Indicator */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white"></span>
          </span>
        )}
      </button>
    </div>
  );
}
