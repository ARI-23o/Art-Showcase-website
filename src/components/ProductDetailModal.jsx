import React, { useState } from 'react';
import { X, MessageCircle, Clock, CheckCircle2, ShieldCheck, Heart, Share2 } from 'lucide-react';
import { generateProductInquiry } from '../utils/whatsapp';

export default function ProductDetailModal({ product, isOpen, onClose, onCustomStudioOpen }) {
  const [customNote, setCustomNote] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen || !product) return null;

  const handleWhatsAppClick = () => {
    const url = generateProductInquiry(product, customNote);
    window.open(url, '_blank');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.title,
        text: `Check out ${product.title} from HandiCrafts by Yukti!`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-artisan-border my-auto animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-artisan-charcoal hover:text-artisan-terracotta flex items-center justify-center shadow-md transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          
          {/* Left Column: Image & Badges */}
          <div className="md:col-span-6 relative bg-artisan-sand min-h-[260px] sm:min-h-[340px]">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-artisan-charcoal shadow-sm">
                {product.badge}
              </span>
            </div>
          </div>

          {/* Right Column: Details & Customization */}
          <div className="md:col-span-6 p-6 sm:p-7 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-artisan-terracotta">
                  Handcrafted Creation
                </span>
                <h3 className="font-serif text-2xl font-bold text-artisan-charcoal mt-1">
                  {product.title}
                </h3>
              </div>

              {/* Price & Dimensions */}
              <div className="flex items-baseline justify-between p-3.5 rounded-2xl bg-artisan-cream border border-artisan-border/70">
                <div>
                  <span className="text-[10px] uppercase font-semibold text-artisan-muted block">
                    Starting Price
                  </span>
                  <span className="font-serif text-2xl font-bold text-artisan-terracotta">
                    {product.formattedPrice}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase font-semibold text-artisan-muted block">
                    Dimensions
                  </span>
                  <span className="text-xs font-semibold text-artisan-charcoal">
                    {product.dimensions}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-artisan-muted leading-relaxed">
                {product.shortDescription}
              </p>

              {/* Customization Possibilities */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-artisan-charcoal">
                  Personalization Options:
                </h4>
                <ul className="space-y-1.5 text-xs text-artisan-muted">
                  {product.customizations.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Turnaround Time */}
              <div className="flex items-center gap-2 text-xs text-artisan-muted pt-1">
                <Clock className="w-3.5 h-3.5 text-artisan-terracotta" />
                <span>Production: <strong>{product.craftTime}</strong></span>
              </div>

              {/* Custom Request Note Input */}
              <div className="space-y-1.5 pt-2">
                <label className="text-xs font-medium text-artisan-charcoal block">
                  Add Your Custom Names / Color Preferences (Optional):
                </label>
                <input
                  type="text"
                  placeholder="e.g. Names: Rohit & Pooja | Theme: Gold & White"
                  value={customNote}
                  onChange={(e) => setCustomNote(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-artisan-border focus:outline-none focus:border-artisan-terracotta focus:ring-1 focus:ring-artisan-terracotta bg-white"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2.5 pt-4 border-t border-artisan-border/70">
              <button
                onClick={handleWhatsAppClick}
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Customize on WhatsApp</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    onClose();
                    onCustomStudioOpen(product);
                  }}
                  className="flex-1 py-2.5 px-3 rounded-xl border border-artisan-border hover:bg-artisan-cream text-xs font-medium text-artisan-charcoal flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Custom Studio Wizard</span>
                </button>

                <button
                  onClick={handleShare}
                  className="py-2.5 px-3 rounded-xl border border-artisan-border hover:bg-artisan-cream text-xs font-medium text-artisan-muted hover:text-artisan-charcoal transition-colors flex items-center gap-1"
                  title="Share creation"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{copied ? 'Copied!' : 'Share'}</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-artisan-muted text-center pt-1">
                <ShieldCheck className="w-3 h-3 text-emerald-600" />
                <span>100% Secure chat with artisan Yukti</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
