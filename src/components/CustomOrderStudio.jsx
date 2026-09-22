import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  MessageCircle, 
  Image as ImageIcon, 
  Calendar, 
  Heart, 
  ShieldCheck, 
  HelpCircle,
  Clock
} from 'lucide-react';
import { generateCustomOrderMessage } from '../utils/whatsapp';

const PRODUCT_TYPES = [
  { id: 'Name Plate', label: 'Personalized Name Plate', icon: '🏠', desc: 'Entrance & door family names' },
  { id: 'Wedding Frame', label: 'Wedding Frame', icon: '💍', desc: 'Couple photo & vows in resin' },
  { id: 'Varmala Preservation', label: 'Varmala Preservation', icon: '🌸', desc: 'Real wedding garland keepsake' },
  { id: 'Resin Clock', label: 'Resin Wall Clock', icon: '🕒', desc: 'Ocean wave or marble geode clock' },
  { id: 'Hamper', label: 'Curated Gift Hamper', icon: '🎁', desc: 'Festive & wedding favors bundle' },
  { id: 'Something Else', label: 'Something Else / Custom Idea', icon: '✨', desc: 'Trays, coasters, tables, etc.' },
];

const OCCASIONS_LIST = [
  'Wedding',
  'Anniversary',
  'Housewarming',
  'Birthday',
  'Festival (Diwali / Rakhi / New Year)',
  'Baby & Family Keepsake',
  'Personal Treat / Home Decor'
];

const SHAPES = [
  { id: 'Arch', label: 'Elegant Arch', desc: 'Curved top aesthetic', icon: '⋂' },
  { id: 'Round', label: 'Circular / Round', desc: 'Classic balanced flow', icon: '◯' },
  { id: 'Rectangle', label: 'Modern Rectangle', desc: 'Traditional clean borders', icon: '▭' },
  { id: 'Hexagon', label: 'Hexagon', desc: 'Geometric honeycomb look', icon: '⬡' },
  { id: 'Agate Edge', label: 'Raw Agate Edge', desc: 'Organic gilded gold borders', icon: '〰' },
];

const COLOR_PALETTES = [
  { id: 'Gold & White', name: 'Gold & Pearl White', colors: ['#FFFFFF', '#D4AF37'], desc: 'Timeless luxury with 24k gold leaf' },
  { id: 'Ocean Blue', name: 'Ocean Beach Wave', colors: ['#0A84FF', '#E0F2FE'], desc: 'Deep azure water with realistic white foam' },
  { id: 'Rose Quartz', name: 'Blush Rose Quartz', colors: ['#F472B6', '#FDF2F8'], desc: 'Romantic floral pink with subtle shimmer' },
  { id: 'Emerald & Gold', name: 'Emerald Jade & Gold', colors: ['#059669', '#D4AF37'], desc: 'Royal botanical green with gold veins' },
  { id: 'Obsidian & Gold', name: 'Obsidian Black & Gold', colors: ['#1F2937', '#D4AF37'], desc: 'Modern dramatic moody geode' },
];

const BUDGET_RANGES = [
  { id: '₹1,000–₹2,000', label: '₹1,000 – ₹2,000', desc: 'Great for coasters, small frames, trays' },
  { id: '₹2,000–₹5,000', label: '₹2,000 – ₹5,000', desc: 'Ideal for Name Plates, Clocks & Standard Varmala' },
  { id: '₹5,000–₹10,000', label: '₹5,000 – ₹10,000', desc: 'Grand Varmala deep casts & Geode Wall Panels' },
  { id: '₹10,000+', label: '₹10,000+', desc: 'Bespoke large table tops & bulk festive/wedding favors' },
];

export default function CustomOrderStudio({ preselectedProduct, initialData }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [orderData, setOrderData] = useState({
    productType: preselectedProduct?.title || initialData?.productType || 'Wedding Frame',
    occasion: 'Wedding',
    shape: 'Arch',
    names: 'Aryan & Priya',
    dateOrQuote: '12 December 2026 • Forever begins here',
    palette: 'Gold & White',
    budget: '₹2,000–₹5,000',
    whatsappNumber: '',
    customerName: '',
    hasReferenceImage: false,
    referenceImageName: '',
    referenceImagePreview: null,
  });

  const totalSteps = 6;

  const handleFieldChange = (key, value) => {
    setOrderData(prev => ({ ...prev, [key]: value }));
  };

  const handleImageMockUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setOrderData(prev => ({
          ...prev,
          hasReferenceImage: true,
          referenceImageName: file.name,
          referenceImagePreview: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSendWhatsApp = () => {
    const url = generateCustomOrderMessage(orderData);
    window.open(url, '_blank');
  };

  return (
    <section id="custom-studio" className="py-16 sm:py-24 bg-artisan-sand/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-artisan-terracotta-light text-artisan-terracotta border border-artisan-terracotta/20 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Custom Order Studio</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-artisan-charcoal leading-tight">
            Have Something Special In Mind?
          </h2>
          <p className="text-sm sm:text-base text-artisan-muted mt-3 max-w-xl mx-auto">
            Tell us what you're imagining. We'll formulate your custom specs and connect you directly with Yukti to turn your idea into a handcrafted reality.
          </p>
        </div>

        {/* Wizard Container: 2-Column (Interactive Step Form + Live Studio Pass / Summary Card) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left / Main: Step Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-artisan-border shadow-soft">
            
            {/* Step Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between text-xs font-semibold text-artisan-muted mb-2">
                <span className="text-artisan-terracotta uppercase tracking-wider">
                  Step 0{currentStep} of 0{totalSteps}
                </span>
                <span>
                  {currentStep === 1 && "Choose Creation Type"}
                  {currentStep === 2 && "Select Occasion"}
                  {currentStep === 3 && "Pick Shape & Style"}
                  {currentStep === 4 && "Personalization & Palette"}
                  {currentStep === 5 && "Select Budget Range"}
                  {currentStep === 6 && "Contact & Final Review"}
                </span>
              </div>
              <div className="w-full bg-artisan-sand h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-artisan-terracotta h-full transition-all duration-300 rounded-full"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                />
              </div>
            </div>

            {/* STEP 1: What would you like to create? */}
            {currentStep === 1 && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-artisan-charcoal">
                  What would you like to create?
                </h3>
                <p className="text-xs sm:text-sm text-artisan-muted">
                  Choose the category that best matches your vision.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {PRODUCT_TYPES.map((pt) => {
                    const isSelected = orderData.productType === pt.id || orderData.productType.includes(pt.id);
                    return (
                      <button
                        key={pt.id}
                        type="button"
                        onClick={() => handleFieldChange('productType', pt.id)}
                        className={`p-4 rounded-2xl text-left border transition-all flex items-start gap-3.5 ${
                          isSelected
                            ? 'bg-artisan-terracotta-light/60 border-artisan-terracotta shadow-sm ring-2 ring-artisan-terracotta/20'
                            : 'bg-white hover:bg-artisan-cream border-artisan-border'
                        }`}
                      >
                        <span className="text-2xl shrink-0 mt-0.5">{pt.icon}</span>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <h4 className="font-serif text-sm font-bold text-artisan-charcoal">{pt.label}</h4>
                            {isSelected && <Check className="w-3.5 h-3.5 text-artisan-terracotta ml-auto shrink-0" />}
                          </div>
                          <p className="text-[11px] text-artisan-muted mt-0.5">{pt.desc}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 2: What's the occasion? */}
            {currentStep === 2 && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-artisan-charcoal">
                  What's the special occasion?
                </h3>
                <p className="text-xs sm:text-sm text-artisan-muted">
                  This helps us curate meaningful design accents and packaging.
                </p>

                <div className="space-y-2 pt-2">
                  {OCCASIONS_LIST.map((occ) => {
                    const isSelected = orderData.occasion === occ;
                    return (
                      <button
                        key={occ}
                        type="button"
                        onClick={() => handleFieldChange('occasion', occ)}
                        className={`w-full p-3.5 rounded-xl text-left border transition-all flex items-center justify-between text-sm ${
                          isSelected
                            ? 'bg-artisan-terracotta-light/60 border-artisan-terracotta font-medium text-artisan-terracotta shadow-sm'
                            : 'bg-white hover:bg-artisan-cream border-artisan-border text-artisan-charcoal'
                        }`}
                      >
                        <span>{occ}</span>
                        {isSelected && <Check className="w-4 h-4 text-artisan-terracotta" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 3: Choose your style / shape */}
            {currentStep === 3 && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-artisan-charcoal">
                  Choose your preferred style & shape
                </h3>
                <p className="text-xs sm:text-sm text-artisan-muted">
                  Select the silhouette for your custom cast.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {SHAPES.map((sh) => {
                    const isSelected = orderData.shape === sh.id;
                    return (
                      <button
                        key={sh.id}
                        type="button"
                        onClick={() => handleFieldChange('shape', sh.id)}
                        className={`p-4 rounded-2xl text-left border transition-all flex items-start gap-3 ${
                          isSelected
                            ? 'bg-artisan-terracotta-light/60 border-artisan-terracotta shadow-sm ring-2 ring-artisan-terracotta/20'
                            : 'bg-white hover:bg-artisan-cream border-artisan-border'
                        }`}
                      >
                        <span className="text-xl font-bold font-serif text-artisan-terracotta shrink-0 mt-0.5 w-6 text-center">
                          {sh.icon}
                        </span>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-serif text-sm font-bold text-artisan-charcoal">{sh.label}</h4>
                            {isSelected && <Check className="w-3.5 h-3.5 text-artisan-terracotta" />}
                          </div>
                          <p className="text-[11px] text-artisan-muted mt-0.5">{sh.desc}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 4: Personalize it */}
            {currentStep === 4 && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-artisan-charcoal">
                    Personalize your piece
                  </h3>
                  <p className="text-xs sm:text-sm text-artisan-muted mt-1">
                    Enter the names, special dates, quotes, and pick a handcrafted color palette.
                  </p>
                </div>

                {/* Text Inputs */}
                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-semibold text-artisan-charcoal block mb-1">
                      Custom Name(s) / Family Title:
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Aryan & Priya / The Sharma Residence"
                      value={orderData.names}
                      onChange={(e) => handleFieldChange('names', e.target.value)}
                      className="w-full text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-artisan-border focus:outline-none focus:border-artisan-terracotta focus:ring-1 focus:ring-artisan-terracotta bg-white"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-artisan-charcoal block mb-1">
                      Special Date, House No. or Meaningful Quote:
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 12 Dec 2026 • Forever Begins Here"
                      value={orderData.dateOrQuote}
                      onChange={(e) => handleFieldChange('dateOrQuote', e.target.value)}
                      className="w-full text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-artisan-border focus:outline-none focus:border-artisan-terracotta focus:ring-1 focus:ring-artisan-terracotta bg-white"
                    />
                  </div>
                </div>

                {/* Color Palette Selector */}
                <div className="pt-2">
                  <label className="text-xs font-semibold text-artisan-charcoal block mb-2">
                    Color Palette Theme:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {COLOR_PALETTES.map((cp) => {
                      const isSelected = orderData.palette === cp.id;
                      return (
                        <button
                          key={cp.id}
                          type="button"
                          onClick={() => handleFieldChange('palette', cp.id)}
                          className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all ${
                            isSelected
                              ? 'bg-artisan-cream border-artisan-terracotta shadow-sm ring-1 ring-artisan-terracotta'
                              : 'bg-white hover:bg-artisan-cream/50 border-artisan-border'
                          }`}
                        >
                          <div className="flex -space-x-1.5 shrink-0">
                            {cp.colors.map((c, i) => (
                              <span
                                key={i}
                                className="w-5 h-5 rounded-full border border-gray-300 shadow-sm"
                                style={{ backgroundColor: c }}
                              />
                            ))}
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-xs font-bold text-artisan-charcoal truncate">{cp.name}</p>
                            <p className="text-[10px] text-artisan-muted truncate">{cp.desc}</p>
                          </div>
                          {isSelected && <Check className="w-3.5 h-3.5 text-artisan-terracotta shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 5: Your Budget */}
            {currentStep === 5 && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-artisan-charcoal">
                  Your Budget Range
                </h3>
                <p className="text-xs sm:text-sm text-artisan-muted">
                  Yukti crafts pieces suited to various budgets with the highest level of finishing.
                </p>

                <div className="space-y-3 pt-2">
                  {BUDGET_RANGES.map((br) => {
                    const isSelected = orderData.budget === br.id;
                    return (
                      <button
                        key={br.id}
                        type="button"
                        onClick={() => handleFieldChange('budget', br.id)}
                        className={`w-full p-4 rounded-2xl text-left border transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-artisan-terracotta-light/60 border-artisan-terracotta shadow-sm ring-2 ring-artisan-terracotta/20'
                            : 'bg-white hover:bg-artisan-cream border-artisan-border'
                        }`}
                      >
                        <div>
                          <span className="font-serif text-base sm:text-lg font-bold text-artisan-charcoal block">
                            {br.label}
                          </span>
                          <span className="text-xs text-artisan-muted">{br.desc}</span>
                        </div>
                        {isSelected && <Check className="w-5 h-5 text-artisan-terracotta" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 6: Contact & Reference Image */}
            {currentStep === 6 && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-artisan-charcoal">
                    Almost Ready to Connect ✨
                  </h3>
                  <p className="text-xs sm:text-sm text-artisan-muted mt-1">
                    Enter your contact details and optionally upload an inspiration reference image.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-artisan-charcoal block mb-1">
                      Your Name:
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Priya Sharma"
                      value={orderData.customerName}
                      onChange={(e) => handleFieldChange('customerName', e.target.value)}
                      className="w-full text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-artisan-border focus:outline-none focus:border-artisan-terracotta bg-white"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-artisan-charcoal block mb-1">
                      WhatsApp Number:
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 99699 22275"
                      value={orderData.whatsappNumber}
                      onChange={(e) => handleFieldChange('whatsappNumber', e.target.value)}
                      className="w-full text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-artisan-border focus:outline-none focus:border-artisan-terracotta bg-white"
                    />
                  </div>
                </div>

                {/* Reference Photo Upload / Mock Preview */}
                <div className="pt-2">
                  <label className="text-xs font-semibold text-artisan-charcoal block mb-1.5">
                    Upload Reference / Inspiration Photo (Optional):
                  </label>
                  <div className="border-2 border-dashed border-artisan-border rounded-2xl p-4 text-center bg-artisan-cream/40 hover:bg-artisan-cream/80 transition-colors relative">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageMockUpload}
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    />
                    {orderData.referenceImagePreview ? (
                      <div className="flex items-center justify-center gap-3">
                        <img 
                          src={orderData.referenceImagePreview} 
                          alt="Reference preview" 
                          className="w-14 h-14 object-cover rounded-xl border border-artisan-border" 
                        />
                        <div className="text-left">
                          <p className="text-xs font-bold text-artisan-charcoal truncate max-w-[200px]">
                            {orderData.referenceImageName || 'Reference Image Attached'}
                          </p>
                          <p className="text-[10px] text-emerald-700 font-medium">✓ Photo ready for preview</p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center py-2">
                        <ImageIcon className="w-8 h-8 text-artisan-terracotta/70 mb-1" />
                        <p className="text-xs font-medium text-artisan-charcoal">
                          Click to browse or drop an inspiration image
                        </p>
                        <p className="text-[10px] text-artisan-muted mt-0.5">
                          PNG, JPG up to 10MB
                        </p>
                      </div>
                    )}
                  </div>
                  <p className="text-[11px] text-artisan-muted mt-1.5 flex items-center gap-1">
                    <span>💡 <em>Tip:</em> You can also directly attach your inspiration photo in the WhatsApp chat!</span>
                  </p>
                </div>

              </div>
            )}

            {/* Step Navigation Buttons */}
            <div className="flex items-center justify-between pt-8 border-t border-artisan-border/70 mt-6">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="px-4 py-2.5 rounded-xl border border-artisan-border hover:bg-artisan-cream text-artisan-charcoal text-xs sm:text-sm font-medium flex items-center gap-1.5 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
              ) : <div />}

              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-2.5 rounded-xl bg-artisan-terracotta hover:bg-artisan-terracotta-dark text-white text-xs sm:text-sm font-medium flex items-center gap-1.5 shadow-sm transition-all"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-medium flex items-center gap-2 shadow-md transition-all animate-pulse"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Send Request to WhatsApp</span>
                </button>
              )}
            </div>

          </div>

          {/* Right Column: Live Studio Pass / Order Summary Receipt */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-7 border border-artisan-border shadow-soft relative overflow-hidden">
            {/* Top decorative accent */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-artisan-terracotta via-artisan-gold to-artisan-sage" />

            <div className="flex items-center justify-between pb-4 border-b border-artisan-border">
              <div>
                <span className="text-[10px] tracking-widest uppercase font-bold text-artisan-terracotta block">
                  Live Custom Summary
                </span>
                <h4 className="font-serif text-lg font-bold text-artisan-charcoal">
                  HandiCrafts Studio Pass
                </h4>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-artisan-cream text-artisan-muted border border-artisan-border font-mono">
                DRAFT-ORDER
              </span>
            </div>

            {/* Receipt Details */}
            <div className="py-5 space-y-3 font-mono text-xs text-artisan-charcoal/90">
              <div className="flex justify-between py-1 border-b border-dashed border-artisan-border">
                <span className="text-artisan-muted font-sans font-medium">Product:</span>
                <span className="font-bold text-right text-artisan-terracotta font-sans">{orderData.productType}</span>
              </div>

              <div className="flex justify-between py-1 border-b border-dashed border-artisan-border">
                <span className="text-artisan-muted font-sans font-medium">Occasion:</span>
                <span className="font-medium text-right font-sans">{orderData.occasion}</span>
              </div>

              <div className="flex justify-between py-1 border-b border-dashed border-artisan-border">
                <span className="text-artisan-muted font-sans font-medium">Shape/Style:</span>
                <span className="font-medium text-right font-sans">{orderData.shape}</span>
              </div>

              <div className="flex justify-between py-1 border-b border-dashed border-artisan-border">
                <span className="text-artisan-muted font-sans font-medium">Personalization:</span>
                <span className="font-medium text-right max-w-[180px] truncate font-sans">{orderData.names || 'Aryan & Priya'}</span>
              </div>

              <div className="flex justify-between py-1 border-b border-dashed border-artisan-border">
                <span className="text-artisan-muted font-sans font-medium">Palette:</span>
                <span className="font-medium text-right font-sans">{orderData.palette}</span>
              </div>

              <div className="flex justify-between py-1 border-b border-dashed border-artisan-border">
                <span className="text-artisan-muted font-sans font-medium">Budget:</span>
                <span className="font-bold text-right text-emerald-700 font-sans">{orderData.budget}</span>
              </div>

              {orderData.hasReferenceImage && (
                <div className="flex justify-between py-1 border-b border-dashed border-artisan-border text-emerald-700">
                  <span className="font-sans font-medium">Reference:</span>
                  <span className="font-sans">✓ Photo Attached</span>
                </div>
              )}
            </div>

            {/* Turnaround estimate */}
            <div className="p-3.5 rounded-2xl bg-artisan-cream border border-artisan-border/70 text-xs space-y-1 mb-5">
              <div className="flex items-center gap-1.5 font-semibold text-artisan-charcoal">
                <Clock className="w-3.5 h-3.5 text-artisan-terracotta" />
                <span>Crafting Timeline:</span>
              </div>
              <p className="text-[11px] text-artisan-muted">
                Made to Order • Exact crafting & curing schedule discussed on WhatsApp.
              </p>
            </div>

            {/* Custom Request Ready status */}
            <div className="text-center pb-3">
              <span className="text-xs font-semibold text-artisan-terracotta">
                Your custom request is ready ✨
              </span>
            </div>

            {/* Big Send to WhatsApp Button */}
            <button
              onClick={handleSendWhatsApp}
              className="w-full py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base shadow-soft hover:shadow-card-hover transition-all flex items-center justify-center gap-2.5"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>SEND TO WHATSAPP</span>
            </button>

            <div className="space-y-1 text-center mt-3">
              <p className="text-[11px] text-artisan-muted">
                💡 You'll be able to attach your reference image directly in WhatsApp.
              </p>
              <div className="flex items-center justify-center gap-1 text-[10px] text-artisan-muted">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Direct WhatsApp consultation with Yukti</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
