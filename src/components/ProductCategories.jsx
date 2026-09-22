import React from 'react';
import { CATEGORIES } from '../data/catalog';
import { ArrowUpRight } from 'lucide-react';

export default function ProductCategories({ onSelectCategory, onCustomOrderClick }) {
  return (
    <section id="categories" className="py-16 sm:py-24 bg-artisan-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-artisan-terracotta mb-2 block">
              Handcrafted Portfolios
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-artisan-charcoal">
              Explore By Category
            </h2>
            <p className="text-sm text-artisan-muted mt-2 max-w-xl">
              From statement geode panels and crystal clocks to meaningful floral wedding keepsakes, every piece is individually handcrafted.
            </p>
          </div>

          <button
            onClick={onCustomOrderClick}
            className="mt-4 md:mt-0 text-sm font-medium text-artisan-terracotta hover:text-artisan-terracotta-dark inline-flex items-center gap-1 group self-start md:self-auto"
          >
            <span>Custom commission request</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* 6 Category Visual Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-artisan-border/70 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image with zoom and badge */}
              <div className="relative aspect-[16/11] overflow-hidden bg-artisan-sand">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                {/* Badge */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="text-[10px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-artisan-charcoal shadow-sm">
                    {cat.badge}
                  </span>
                </div>

                {/* Arrow Button */}
                <div className="absolute bottom-3.5 right-3.5 w-9 h-9 rounded-full bg-white/90 group-hover:bg-artisan-terracotta text-artisan-charcoal group-hover:text-white flex items-center justify-center shadow-md transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Text content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-artisan-charcoal group-hover:text-artisan-terracotta transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-artisan-muted mt-1.5 leading-relaxed">
                    {cat.description}
                  </p>
                </div>
                
                <div className="pt-4 mt-2 border-t border-artisan-border/40 flex items-center justify-between text-xs font-medium text-artisan-terracotta">
                  <span>View Creations</span>
                  <span className="text-[11px] text-artisan-muted">Customized to order</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
