import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Heart, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/catalog';
import { createWhatsAppUrl } from '../utils/whatsapp';

export default function Navbar({ onOpenCustomStudio, onNavigateSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showDemoBanner, setShowDemoBanner] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    onNavigateSection(sectionId);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Concept Website / Demo Showcase Discreet Ribbon */}
      {showDemoBanner && (
        <div className="bg-artisan-cream text-artisan-muted text-xs border-b border-artisan-border/60 py-1.5 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-artisan-terracotta animate-pulse"></span>
              <span>
                <strong className="text-artisan-charcoal font-medium">CONCEPT WEBSITE</strong> — A digital experience created for HandiCrafts by Yukti
              </span>
            </div>
            <div className="flex items-center gap-3">
              <a 
                href={BUSINESS_INFO.instagram} 
                target="_blank" 
                rel="noreferrer" 
                className="text-artisan-terracotta hover:underline font-medium hidden sm:inline"
              >
                View Instagram Profile →
              </a>
              <button 
                onClick={() => setShowDemoBanner(false)}
                className="text-artisan-muted hover:text-artisan-charcoal text-xs ml-2"
                aria-label="Dismiss banner"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'resin-glass shadow-soft py-3' 
          : 'bg-artisan-bg/90 backdrop-blur-md py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <button 
            onClick={() => handleNavClick('hero')} 
            className="flex flex-col text-left group"
          >
            <div className="flex items-center gap-1.5">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-artisan-charcoal group-hover:text-artisan-terracotta transition-colors">
                HandiCrafts <span className="font-serif italic font-normal text-artisan-terracotta">by Yukti</span>
              </span>
            </div>
            <span className="text-[10px] tracking-widest uppercase font-medium text-artisan-muted">
              Personalized Art & Keepsakes
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-7 text-sm font-medium text-artisan-charcoal/80">
            <button 
              onClick={() => handleNavClick('occasions')} 
              className="hover:text-artisan-terracotta transition-colors"
            >
              Occasions
            </button>
            <button 
              onClick={() => handleNavClick('categories')} 
              className="hover:text-artisan-terracotta transition-colors"
            >
              Collections
            </button>
            <button 
              onClick={() => handleNavClick('creations')} 
              className="hover:text-artisan-terracotta transition-colors"
            >
              Featured
            </button>
            <button 
              onClick={() => handleNavClick('process')} 
              className="hover:text-artisan-terracotta transition-colors"
            >
              Craft Journey
            </button>
            <button 
              onClick={() => handleNavClick('gallery')} 
              className="hover:text-artisan-terracotta transition-colors"
            >
              Gallery
            </button>
            <button 
              onClick={() => handleNavClick('about')} 
              className="hover:text-artisan-terracotta transition-colors"
            >
              About
            </button>
          </div>

          {/* Right Action Area */}
          <div className="flex items-center gap-3">
            {/* Quick WhatsApp Connect */}
            <a
              href={createWhatsAppUrl("Hi Yukti! I am browsing your website and would like to ask a few questions about your handcrafted creations.")}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 px-3 py-2 rounded-full transition-all"
              title="Quick WhatsApp Chat"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
              <span>WhatsApp Yukti</span>
            </a>

            {/* Dominant Custom Order CTA */}
            <button
              onClick={onOpenCustomStudio}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium bg-artisan-terracotta hover:bg-artisan-terracotta-dark text-white px-4 py-2 sm:py-2.5 rounded-full shadow-sm hover:shadow-soft transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Start Custom Order</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-artisan-charcoal hover:bg-artisan-cream transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden resin-glass border-b border-artisan-border px-5 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-3 text-base font-medium">
              <button
                onClick={() => handleNavClick('occasions')}
                className="text-left text-artisan-charcoal hover:text-artisan-terracotta py-1 flex items-center justify-between"
              >
                <span>Made For Your Moments</span>
                <ArrowRight className="w-4 h-4 text-artisan-muted" />
              </button>
              <button
                onClick={() => handleNavClick('categories')}
                className="text-left text-artisan-charcoal hover:text-artisan-terracotta py-1 flex items-center justify-between"
              >
                <span>Product Categories</span>
                <ArrowRight className="w-4 h-4 text-artisan-muted" />
              </button>
              <button
                onClick={() => handleNavClick('creations')}
                className="text-left text-artisan-charcoal hover:text-artisan-terracotta py-1 flex items-center justify-between"
              >
                <span>Featured Creations</span>
                <ArrowRight className="w-4 h-4 text-artisan-muted" />
              </button>
              <button
                onClick={() => handleNavClick('process')}
                className="text-left text-artisan-charcoal hover:text-artisan-terracotta py-1 flex items-center justify-between"
              >
                <span>Craft Journey</span>
                <ArrowRight className="w-4 h-4 text-artisan-muted" />
              </button>
              <button
                onClick={() => handleNavClick('gallery')}
                className="text-left text-artisan-charcoal hover:text-artisan-terracotta py-1 flex items-center justify-between"
              >
                <span>Instagram Gallery</span>
                <ArrowRight className="w-4 h-4 text-artisan-muted" />
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className="text-left text-artisan-charcoal hover:text-artisan-terracotta py-1 flex items-center justify-between"
              >
                <span>About Yukti</span>
                <ArrowRight className="w-4 h-4 text-artisan-muted" />
              </button>
            </div>

            <div className="pt-4 border-t border-artisan-border/70 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCustomStudio();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-artisan-terracotta text-white font-medium shadow-sm"
              >
                <span>Start Custom Order Wizard</span>
              </button>
              <a
                href={createWhatsAppUrl("Hi Yukti! I am reaching out from your website.")}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 font-medium text-sm"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600" />
                <span>Direct WhatsApp Chat</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
