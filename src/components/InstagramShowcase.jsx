import React from 'react';
import { INSTAGRAM_POSTS, BUSINESS_INFO } from '../data/catalog';
import { ArrowUpRight, Heart, Camera } from 'lucide-react';

function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

export default function InstagramShowcase() {
  return (
    <section id="gallery" className="py-16 sm:py-24 bg-artisan-cream/50 border-t border-artisan-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-artisan-terracotta mb-2">
              <InstagramIcon className="w-4 h-4" />
              <span>Instagram Visual Portfolio</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-artisan-charcoal">
              See More Of Our Creations
            </h2>
            <p className="text-sm text-artisan-muted mt-2 max-w-xl">
              Explore recent handcrafted resin designs, floral preservation, and behind-the-scenes artistry from our studio.
            </p>
          </div>

          <a
            href={BUSINESS_INFO.instagram}
            target="_blank"
            rel="noreferrer"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white text-xs sm:text-sm font-medium shadow-sm hover:opacity-95 transition-opacity self-start md:self-auto"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>Follow {BUSINESS_INFO.instagramHandle}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Pitch Banner: Your Instagram, Turned Into a Storefront */}
        <div className="mb-8 p-5 sm:p-6 rounded-3xl bg-white border border-artisan-border shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-artisan-terracotta-light flex items-center justify-center text-artisan-terracotta shrink-0 mt-0.5">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-artisan-charcoal">
                Your Instagram, Turned Into a Storefront.
              </h3>
              <p className="text-xs sm:text-sm text-artisan-muted mt-0.5 max-w-2xl leading-relaxed">
                Your customers already discover your work on Instagram. This concept shows how those visitors could explore your creations, understand your custom-order process, and send structured WhatsApp orders in just a few clicks.
              </p>
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-artisan-cream text-artisan-terracotta border border-artisan-border">
            <span>15K+ Community Concept</span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={BUSINESS_INFO.instagram}
              target="_blank"
              rel="noreferrer"
              className="group relative rounded-2xl overflow-hidden aspect-square bg-artisan-sand border border-artisan-border/60 shadow-sm block"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3 text-white">
                <span className="text-[10px] font-semibold text-artisan-gold-light truncate mb-1">
                  {post.tag}
                </span>
                <p className="text-[10px] line-clamp-2 leading-tight opacity-90">
                  {post.caption}
                </p>
                <div className="mt-2 pt-1 border-t border-white/20 flex items-center justify-between text-[9px] text-white/80">
                  <span>View Reel</span>
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
