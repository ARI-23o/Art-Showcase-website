import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OccasionExplorer from './components/OccasionExplorer';
import ProductCategories from './components/ProductCategories';
import FeaturedCreations from './components/FeaturedCreations';
import WhyChooseHandmade from './components/WhyChooseHandmade';
import ProductDetailModal from './components/ProductDetailModal';
import CustomOrderStudio from './components/CustomOrderStudio';
import CraftingProcess from './components/CraftingProcess';
import InstagramShowcase from './components/InstagramShowcase';
import CustomerReviews from './components/CustomerReviews';
import ArtisanStory from './components/ArtisanStory';
import FAQSection from './components/FAQSection';
import FinalCTA from './components/FinalCTA';
import SmartWhatsAppAssistant from './components/SmartWhatsAppAssistant';
import MobileQuickBar from './components/MobileQuickBar';
import Footer from './components/Footer';

export default function App() {
  const [activeOccasion, setActiveOccasion] = useState('all');
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [customStudioProduct, setCustomStudioProduct] = useState(null);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOccasionSelect = (occId) => {
    setActiveOccasion(occId);
    setActiveCategory(null);
    scrollToSection('creations');
  };

  const handleCategorySelect = (catId) => {
    setActiveCategory(catId);
    setActiveOccasion('all');
    scrollToSection('creations');
  };

  const handleResetFilters = () => {
    setActiveOccasion('all');
    setActiveCategory(null);
  };

  const handleOpenCustomStudio = (product = null) => {
    if (product) {
      setCustomStudioProduct(product);
    }
    scrollToSection('custom-studio');
  };

  return (
    <div className="min-h-screen flex flex-col bg-artisan-bg text-artisan-charcoal selection:bg-artisan-terracotta selection:text-white relative">
      
      {/* 1. Navbar */}
      <Navbar
        onOpenCustomStudio={() => handleOpenCustomStudio()}
        onNavigateSection={scrollToSection}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero
          onExploreClick={() => scrollToSection('occasions')}
          onCustomOrderClick={() => handleOpenCustomStudio()}
        />

        {/* 3. Occasion Explorer ("Made For Your Moments") */}
        <OccasionExplorer
          activeOccasion={activeOccasion}
          onSelectOccasion={handleOccasionSelect}
          onCustomOrderClick={() => handleOpenCustomStudio()}
        />

        {/* 4. Product Categories */}
        <ProductCategories
          onSelectCategory={handleCategorySelect}
          onCustomOrderClick={() => handleOpenCustomStudio()}
        />

        {/* 5. Featured Creations */}
        <FeaturedCreations
          activeOccasion={activeOccasion}
          activeCategory={activeCategory}
          onResetFilters={handleResetFilters}
          onViewProduct={(product) => setSelectedProduct(product)}
          onCustomStudioOpen={handleOpenCustomStudio}
        />

        {/* 6. Why Choose a Handmade Creation? */}
        <WhyChooseHandmade
          onCustomOrderClick={() => handleOpenCustomStudio()}
        />

        {/* 7. ⭐ Custom Order Studio (The Hero Sales Feature) */}
        <CustomOrderStudio
          preselectedProduct={customStudioProduct}
        />

        {/* 7. Crafting Process ("From Idea to Creation") */}
        <CraftingProcess
          onCustomOrderClick={() => handleOpenCustomStudio()}
        />

        {/* 8. Instagram Showcase */}
        <InstagramShowcase />

        {/* 9. Customer Reviews */}
        <CustomerReviews />

        {/* 10. Artisan Story / About Yukti */}
        <ArtisanStory
          onCustomOrderClick={() => handleOpenCustomStudio()}
        />

        {/* 11. FAQs */}
        <FAQSection />

        {/* 12. Final Bottom CTA */}
        <FinalCTA
          onCustomOrderClick={() => handleOpenCustomStudio()}
        />
      </main>

      {/* 13. Footer */}
      <Footer
        onNavigateSection={scrollToSection}
        onCustomOrderClick={() => handleOpenCustomStudio()}
      />

      {/* 14. Smart Floating WhatsApp Assistant */}
      <SmartWhatsAppAssistant />

      {/* 15. Mobile Sticky Quick Action Bar */}
      <MobileQuickBar
        onCustomOrderClick={() => handleOpenCustomStudio()}
      />

      {/* 16. Product Details Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={Boolean(selectedProduct)}
        onClose={() => setSelectedProduct(null)}
        onCustomStudioOpen={handleOpenCustomStudio}
      />

    </div>
  );
}
