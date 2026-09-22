// Catalog data for HandiCrafts by Yukti Demo

export const BUSINESS_INFO = {
  name: "HandiCrafts by Yukti",
  tagline: "Personalized Art, Gifts & Handmade Creations",
  instagram: "https://www.instagram.com/handicrafts_by_yukti",
  instagramHandle: "@handicrafts_by_yukti",
  whatsappNumber: "+919969922275",
  formattedPhone: "+91 99699 22275",
  location: "New Delhi, India",
  shipping: "Pan-India Safe Delivery",
  followerCount: "15K+",
  rating: "4.9",
  reviewsCount: "250+",
};

export const OCCASIONS = [
  { id: "all", label: "All Creations", icon: "✨" },
  { id: "weddings", label: "Weddings", icon: "💍", tag: "Varmala & Keepsakes" },
  { id: "anniversaries", label: "Anniversaries", icon: "🎁", tag: "Couple Frames" },
  { id: "housewarming", label: "Housewarming", icon: "🏠", tag: "Name Plates & Clocks" },
  { id: "birthdays", label: "Birthdays", icon: "❤️", tag: "Personalized Gifts" },
  { id: "festivals", label: "Festivals", icon: "🪔", tag: "Hampers & Trays" },
  { id: "baby", label: "Baby & Family", icon: "👶", tag: "Memory Keepsakes" },
];

export const CATEGORIES = [
  {
    id: "resin-art",
    title: "Resin Art",
    description: "Resin clocks, trays, artwork & decorative pieces",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
    badge: "Most Popular",
    count: "24+ Designs",
  },
  {
    id: "name-plates",
    title: "Personalized Name Plates",
    description: "Custom names, family names & home entrance décor",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    badge: "Home Essential",
    count: "18+ Styles",
  },
  {
    id: "wedding-memories",
    title: "Wedding Memories",
    description: "Varmala preservation, wedding frames & keepsakes",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    badge: "Forever Keepsake",
    count: "Bespoke Art",
  },
  {
    id: "hampers",
    title: "Personalized Hampers",
    description: "Curated gifts for weddings, festivals & special occasions",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
    badge: "Curated Gifts",
    count: "Custom Bundles",
  },
  {
    id: "wall-decor",
    title: "Wall Décor",
    description: "Geode panels, floral art & statement pieces",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80",
    badge: "Statement Art",
    count: "Handcrafted",
  },
  {
    id: "keepsakes",
    title: "Keepsakes & Gifts",
    description: "Trays, coasters, frames & personalized creations",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800&q=80",
    badge: "Everyday Luxury",
    count: "Handmade",
  },
];

export const PRODUCTS = [
  {
    id: "prod-1",
    title: "Customized Resin Name Plate",
    category: "name-plates",
    occasions: ["housewarming", "anniversaries", "weddings"],
    startingPrice: 1999,
    formattedPrice: "₹1,999",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
    dimensions: "12\" x 8\" or 16\" x 10\"",
    badge: "Bestseller",
    rating: "4.9",
    craftTime: "5–7 Days",
    shortDescription: "Handcrafted acrylic & resin name plate with gold mirror lettering, real preserved botanicals and metallic gold foil edging.",
    customizations: [
      "Custom Family Name & Flat / House Number",
      "Choice of Agate edge, Oval arch, or Rectangular base",
      "Color themes: Gold & White, Emerald Green, Ocean Blue, Obsidian Black",
      "Weatherproof UV-protective resin coat for entrance doors"
    ],
    highlight: "100% Weather-resistant, mirror finish acrylic lettering"
  },
  {
    id: "prod-2",
    title: "Wedding Varmala Preservation Frame",
    category: "wedding-memories",
    occasions: ["weddings", "anniversaries"],
    startingPrice: 2499,
    formattedPrice: "₹2,499",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
    dimensions: "10\" x 12\" / 12\" x 16\" Deep Cast",
    badge: "Emotional Keepsake",
    rating: "5.0",
    craftTime: "10–14 Days (Careful dehydration process)",
    shortDescription: "Preserve your sacred wedding garland (varmala) roses, wedding invites & couple photo sealed in crystal clear archival resin.",
    customizations: [
      "Send original fresh or semi-dried wedding flowers safely",
      "Include Couple Names, Wedding Date & Custom Vows/Hashtag",
      "LED Backlit wooden base option available",
      "Arch, Hexagonal or Traditional Deep Shadow-box Frame"
    ],
    highlight: "Preserves your special wedding flowers for a lifetime without color fading"
  },
  {
    id: "prod-3",
    title: "Personalized Couple Memory Frame",
    category: "wedding-memories",
    occasions: ["anniversaries", "weddings", "birthdays"],
    startingPrice: 1499,
    formattedPrice: "₹1,499",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1000&q=80",
    dimensions: "9\" x 9\" Acrylic / Glass Frame",
    badge: "Trending Gift",
    rating: "4.9",
    craftTime: "4–6 Days",
    shortDescription: "Stunning keepsake featuring your favorite couple photo framed with delicate dried baby's breath, rose petals, and gold leaf calligraphy.",
    customizations: [
      "High-resolution photo embedding",
      "Custom Anniversary Date & Song Spotify Code / Meaningful Quote",
      "Warm Rose Quartz or Champagne Gold floral accents"
    ],
    highlight: "Includes tabletop easel stand & wall mount hook"
  },
  {
    id: "prod-4",
    title: "Artisanal Resin Wall Clock",
    category: "resin-art",
    occasions: ["housewarming", "anniversaries", "birthdays"],
    startingPrice: 2299,
    formattedPrice: "₹2,299",
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=1000&q=80",
    dimensions: "12\" / 15\" / 18\" Diameter",
    badge: "Luxury Decor",
    rating: "4.8",
    craftTime: "6–8 Days",
    shortDescription: "Ocean wave or marble geode resin wall clock with silent quartz movement and raised Roman or numeric gold accents.",
    customizations: [
      "Ocean Beach Waves with real sand & sea shells or Geode Crystal with raw stones",
      "Numbers style: Roman numerals, minimal bar lines, or numeral gold dials",
      "Silent sweep machine (no ticking noise)"
    ],
    highlight: "High gloss glass finish with silent sweep mechanism"
  },
  {
    id: "prod-5",
    title: "Luxury Agate Serving Tray & Coaster Set",
    category: "keepsakes",
    occasions: ["festivals", "housewarming", "anniversaries"],
    startingPrice: 1699,
    formattedPrice: "₹1,699",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=1000&q=80",
    dimensions: "Tray 12\"x8\" + 4 Matching Coasters",
    badge: "Host Favorite",
    rating: "4.9",
    craftTime: "5–7 Days",
    shortDescription: "Food-safe resin vanity and serving tray with gold brass handles, paired with 4 natural raw-edge geode coasters.",
    customizations: [
      "Custom initials engraved on tray corner",
      "Available in Emerald Jade, Blush Rose Gold, Sapphire Blue & Pearl White",
      "Gilded gold or silver leaf edges"
    ],
    highlight: "Food-safe, scratch-resistant, heat-tolerant up to 80°C"
  },
  {
    id: "prod-6",
    title: "Bespoke Festive & Wedding Hamper",
    category: "hampers",
    occasions: ["festivals", "weddings", "birthdays"],
    startingPrice: 1899,
    formattedPrice: "Starting ₹1,899",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=80",
    dimensions: "Customized Hamper Box / Cane Basket",
    badge: "Gifting Special",
    rating: "4.9",
    craftTime: "4–6 Days (Bulk orders flexible)",
    shortDescription: "A thoughtfully curated festive hamper featuring customized resin tea-light holders, scented soy candle, sweet treats & personalized message card.",
    customizations: [
      "Choice of resin items (Diya plates, bookmarks, jewelry dish, coasters)",
      "Customized greeting message with wax seal",
      "Bulk corporate and wedding favors pricing available"
    ],
    highlight: "Comes in a luxury ribbon-tied box ready for gifting"
  },
  {
    id: "prod-7",
    title: "Geode Crystal Wall Art Panel",
    category: "wall-decor",
    occasions: ["housewarming", "anniversaries"],
    startingPrice: 3499,
    formattedPrice: "₹3,499",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1000&q=80",
    dimensions: "18\" x 24\" / 24\" x 36\" Panel",
    badge: "Statement Piece",
    rating: "5.0",
    craftTime: "8–12 Days",
    shortDescription: "Intricate geode resin art made with authentic raw crystal quartz, shimmering glitter glass, and rich metallic pigments on heavy wood base.",
    customizations: [
      "Custom size tailored to your living room or foyer wall",
      "Matching color palette to your room interiors (Emerald, Amethyst, Gold/White)",
      "Horizontal or vertical orientation hooks included"
    ],
    highlight: "Real quartz crystals embedded into 3D resin texture layers"
  },
  {
    id: "prod-8",
    title: "Baby Birth Stats Memory Keepsake",
    category: "keepsakes",
    occasions: ["baby", "birthdays"],
    startingPrice: 1299,
    formattedPrice: "₹1,299",
    image: "https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=1000&q=80",
    dimensions: "8\" x 10\" Arch / Circle",
    badge: "New Born Keepsake",
    rating: "4.9",
    craftTime: "4–6 Days",
    shortDescription: "Adorable personalized keepsake recording baby's name, birth date, time, weight, and first photo preserved in soft pastel resin.",
    customizations: [
      "Baby photo + Hospital tag / footprint impression embedding",
      "Pastel pink, baby blue, mint sage or cloud white tones",
      "Engraved birth details and baby name"
    ],
    highlight: "Cherish your little one's earliest milestones forever"
  }
];

export const CRAFTING_STEPS = [
  {
    step: "01",
    title: "Share Your Idea",
    description: "Tell us the occasion, product type, names, dates, or color palette you envision — or send us reference inspiration on WhatsApp.",
    icon: "💡"
  },
  {
    step: "02",
    title: "Finalize Your Design",
    description: "We discuss dimensions, flower preservation details, text fonts, and resin tones to confirm everything exactly how you want it.",
    icon: "🎨"
  },
  {
    step: "03",
    title: "Handcrafted With Care",
    description: "Each piece is slowly cast, cured, layered with gold flakes/flowers, and hand-polished over several days with artisan attention.",
    icon: "✨"
  },
  {
    step: "04",
    title: "Carefully Packed & Delivered",
    description: "Multi-layered protective bubble wrap & luxury packaging ensure your customized treasure reaches you safely anywhere in India.",
    icon: "📦"
  }
];

export const INSTAGRAM_POSTS = [
  {
    id: "post-1",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    caption: "Varmala preservation for Ananya & Rohit. Preserving their special wedding garland forever 🌸💍",
    tag: "#VarmalaPreservation"
  },
  {
    id: "post-2",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
    caption: "The Sharma Family entrance name plate with gold leaf accents and preserved hydrangeas 🌿✨",
    tag: "#ResinNamePlate"
  },
  {
    id: "post-3",
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=600&q=80",
    caption: "Ocean wave resin wall clock. That natural cell effect is pure therapy to create 🌊🕒",
    tag: "#ResinClock"
  },
  {
    id: "post-4",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=600&q=80",
    caption: "Agate edge serving tray with gilded handles for a festive housewarming gift 🥂",
    tag: "#ResinTray"
  },
  {
    id: "post-5",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80",
    caption: "Curating bespoke wedding favors & festive gift boxes with handmade resin diyas 🎁✨",
    tag: "#PersonalizedHampers"
  },
  {
    id: "post-6",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80",
    caption: "Emerald green geode wall art with raw quartz points and 24k gold shimmer paint 💎",
    tag: "#GeodeArt"
  }
];

export const REVIEWS = [
  {
    id: "rev-1",
    name: "Pooja & Rohan",
    location: "Mumbai",
    product: "Varmala Preservation Arch",
    rating: 5,
    date: "2 weeks ago",
    comment: "The varmala preservation frame turned out beyond our expectations! Yukti handled our wedding flowers with so much love and care. It is now the highlight of our living room."
  },
  {
    id: "rev-2",
    name: "Sneha Kapur",
    location: "Gurugram",
    product: "Resin Entrance Name Plate",
    rating: 5,
    date: "Last month",
    comment: "The finish and gold acrylic lettering look so rich and premium. Everyone who visits our new apartment asks where we got it made. Truly artisanal work!"
  },
  {
    id: "rev-3",
    name: "Vikram Malhotra",
    location: "Bengaluru",
    product: "Personalized Anniversary Clock",
    rating: 5,
    date: "1 month ago",
    comment: "Gifted the ocean wave resin clock for my parents' 25th anniversary with their names engraved. The packaging was top-notch and arrived safely."
  }
];

export const FAQS = [
  {
    question: "How do I send my wedding varmala/flowers for preservation?",
    answer: "Once you connect on WhatsApp, we provide step-by-step guidance on wrapping and courier instructions so your wedding flowers stay fresh and arrive safely at our studio in Delhi."
  },
  {
    question: "How long does a custom order take?",
    answer: "Since resin requires multiple slow curing layers and meticulous hand-finishing, typical orders take 5–8 business days. Varmala flower preservation takes around 10–14 days for careful moisture dehydration."
  },
  {
    question: "Do you ship all over India?",
    answer: "Yes! We ship pan-India with multi-layered protective bubble casing and wooden backing support to ensure 100% zero-damage delivery."
  },
  {
    question: "How do I care for my handmade resin art?",
    answer: "Resin is durable and moisture-resistant. Simply wipe gently with a soft dry microfiber cloth. Avoid direct harsh outdoor sunlight exposure and abrasive chemical cleaners."
  }
];

export const WHATSAPP_QUICK_ACTIONS = [
  {
    id: "wedding",
    label: "💍 Customize a Wedding Frame",
    message: "Hi Yukti! I am interested in customizing a Wedding Frame / Varmala Preservation. Could you share available sizes and pricing?"
  },
  {
    id: "nameplate",
    label: "🏠 Create a Name Plate",
    message: "Hi Yukti! I'd like to create a personalized Resin Name Plate for our home. Can you share design styles and customization options?"
  },
  {
    id: "hamper",
    label: "🎁 Design a Gift Hamper",
    message: "Hi Yukti! I am looking for personalized gift hampers for an upcoming occasion. Can we discuss ideas and budget?"
  },
  {
    id: "order-status",
    label: "📦 Ask About an Existing Order",
    message: "Hi Yukti! I would like to check the crafting/shipping status of my recent custom order."
  },
  {
    id: "chat",
    label: "💬 Talk to Yukti",
    message: "Hi Yukti! I saw your creations on the website and have a custom idea in mind. Would love to discuss!"
  }
];
