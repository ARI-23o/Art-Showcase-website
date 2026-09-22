import React from 'react';
import { PRODUCTS, OCCASIONS } from '../data/catalog';
import { MessageCircle, Eye, ArrowRight, FilterX } from 'lucide-react';
import { generateProductInquiry } from '../utils/whatsapp';

export default function FeaturedCreations({
  activeOccasion,
  activeCategory,
  onResetFilters,
  onViewProduct,
  onCustomStudioOpen
}) {
  // Filter products based on active occasion or category
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesOccasion = activeOccasion === 'all' || product.occasions.includes(activeOccasion);
    const matchesCategory = !activeCategory || product.category === activeCategory;
    return matchesOccasion && matchesCategory;
  });

  const activeOccasionObj = OCCASIONS.find(o => o.id === activeOccasion);

  return (
    <section id="creations" className="py-16 sm:py-24 bg-artisan-cream/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-artisan-terracotta mb-2">
              <span>Handcrafted Portfolio</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-artisan-charcoal">
              Featured Creations
            </h2>
            <p className="text-sm text-artisan-muted mt-2 max-w-xl">
              Each piece is individually handcrafted to order with real botanicals, gold leaf accents, and crystal clear resin.
            </p>
          </div>

          {/* Active Filter Indicators */}
          {(activeOccasion !== 'all' || activeCategory) && (
            <div className="mt-4 md:mt-0 flex items-center gap-2">
              <span className="text-xs text-artisan-muted">Showing:</span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-artisan-terracotta-light text-artisan-terracotta border border-artisan-terracotta/30">
                {activeOccasion !== 'all' ? `${activeOccasionObj?.icon} ${activeOccasionObj?.label}` : ''}
                {activeOccasion !== 'all' && activeCategory ? ' • ' : ''}
                {activeCategory ? activeCategory.replace('-', ' ').toUpperCase() : ''}
              </span>
              <button
                onClick={onResetFilters}
                className="text-xs text-artisan-muted hover:text-artisan-terracotta flex items-center gap-1 underline ml-1"
              >
                <FilterX className="w-3 h-3" />
                <span>Reset</span>
              </button>
            </div>
          )}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-artisan-border p-8">
            <p className="text-base text-artisan-charcoal font-medium">No standard pieces matching this specific filter.</p>
            <p className="text-xs text-artisan-muted mt-1">Yukti can create a 100% custom piece for your occasion!</p>
            <button
              onClick={() => onCustomStudioOpen()}
              className="mt-4 px-6 py-2.5 rounded-full bg-artisan-terracotta text-white text-xs font-medium"
            >
              Start Custom Order →
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-3xl overflow-hidden border border-artisan-border/80 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image & Badges */}
                <div className="relative aspect-square overflow-hidden bg-artisan-sand cursor-pointer" onClick={() => onViewProduct(product)}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 rounded-full bg-white/95 text-artisan-charcoal text-xs font-medium shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Creation</span>
                    </span>
                  </div>

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-artisan-charcoal shadow-sm">
                      {product.badge}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 
                      onClick={() => onViewProduct(product)}
                      className="font-serif text-base font-bold text-artisan-charcoal group-hover:text-artisan-terracotta transition-colors line-clamp-1 cursor-pointer"
                    >
                      {product.title}
                    </h3>
                    <p className="text-xs text-artisan-muted mt-1 line-clamp-2 leading-relaxed">
                      {product.shortDescription}
                    </p>
                  </div>

                  {/* Pricing & Dimensions */}
                  <div className="pt-2 border-t border-artisan-border/50 flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-semibold text-artisan-muted block">
                        Starting At
                      </span>
                      <span className="font-serif text-lg font-bold text-artisan-terracotta">
                        {product.formattedPrice}
                      </span>
                    </div>
                    <span className="text-[11px] text-artisan-muted font-medium">
                      {product.dimensions}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <button
                      onClick={() => onViewProduct(product)}
                      className="py-2.5 px-2 rounded-xl bg-artisan-cream hover:bg-artisan-sand text-artisan-charcoal text-xs font-medium transition-colors flex items-center justify-center gap-1"
                    >
                      <span>View Details</span>
                    </button>

                    <a
                      href={generateProductInquiry(product)}
                      target="_blank"
                      rel="noreferrer"
                      className="py-2.5 px-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium transition-colors flex items-center justify-center gap-1 shadow-sm"
                      title="Direct WhatsApp Inquiry"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
