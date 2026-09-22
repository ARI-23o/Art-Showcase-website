import React from 'react';
import { MessageCircle, Heart, MapPin, Truck, Mail, ArrowRight, Flower2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/catalog';
import { createWhatsAppUrl } from '../utils/whatsapp';

function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

export default function Footer({ onNavigateSection, onCustomOrderClick }) {
  return (
    <footer className="bg-artisan-charcoal text-white pt-16 pb-24 sm:pb-12 border-t border-artisan-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                HandiCrafts <span className="font-serif italic font-normal text-artisan-terracotta-light">by Yukti</span>
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-gray-300 max-w-sm leading-relaxed font-light">
              Personalized Art, Gifts & Handmade Creations. From wedding memories and preserved florals to entrance name plates — made with love for your special moments.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={BUSINESS_INFO.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-artisan-terracotta text-white flex items-center justify-center transition-colors"
                title="Instagram Profile"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={createWhatsAppUrl("Hi Yukti! Reaching out from your website footer.")}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-emerald-600 text-white flex items-center justify-center transition-colors"
                title="WhatsApp Direct"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Quick Collections */}
          <div className="space-y-3 text-xs sm:text-sm">
            <h4 className="font-serif text-base font-bold text-white">
              Collections
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button onClick={() => onNavigateSection('categories')} className="hover:text-artisan-terracotta-light transition-colors">
                  Resin Art & Clocks
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('categories')} className="hover:text-artisan-terracotta-light transition-colors">
                  Personalized Name Plates
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('categories')} className="hover:text-artisan-terracotta-light transition-colors">
                  Wedding Varmala Keepsakes
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('categories')} className="hover:text-artisan-terracotta-light transition-colors">
                  Festive & Gifting Hampers
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('categories')} className="hover:text-artisan-terracotta-light transition-colors">
                  Geode Wall Décor
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Occasions */}
          <div className="space-y-3 text-xs sm:text-sm">
            <h4 className="font-serif text-base font-bold text-white">
              Moments
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button onClick={() => onNavigateSection('occasions')} className="hover:text-artisan-terracotta-light transition-colors">
                  Wedding Memories
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('occasions')} className="hover:text-artisan-terracotta-light transition-colors">
                  Housewarming Entrance
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('occasions')} className="hover:text-artisan-terracotta-light transition-colors">
                  Anniversary Keepsakes
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('occasions')} className="hover:text-artisan-terracotta-light transition-colors">
                  Festivals & Celebrations
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('occasions')} className="hover:text-artisan-terracotta-light transition-colors">
                  Baby Milestones
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Studio & Inquiries */}
          <div className="space-y-3 text-xs sm:text-sm">
            <h4 className="font-serif text-base font-bold text-white">
              Studio & Care
            </h4>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center gap-2">
                <Flower2 className="w-4 h-4 text-artisan-terracotta shrink-0" />
                <span>Personalized Custom Art</span>
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-artisan-sage shrink-0" />
                <span>Direct WhatsApp Consultation</span>
              </p>
              <p className="flex items-center gap-2">
                <InstagramIcon className="w-4 h-4 text-artisan-gold shrink-0" />
                <span>{BUSINESS_INFO.instagramHandle}</span>
              </p>
            </div>

            <button
              onClick={onCustomOrderClick}
              className="mt-2 w-full py-2.5 px-4 rounded-xl bg-artisan-terracotta hover:bg-artisan-terracotta-dark text-white font-medium text-xs shadow-sm transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Custom Studio Wizard</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom copyright & Demo notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-2 text-[11px] bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Concept Website & Sales Demo crafted for HandiCrafts by Yukti</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
