// Catalog data for HandiCrafts by Yukti Demo (Verified & Curated)

export const BUSINESS_INFO = {
  name: "HandiCrafts by Yukti",
  tagline: "Personalized Art, Gifts & Handmade Creations",
  instagram: "https://www.instagram.com/handicrafts_by_yukti",
  instagramHandle: "@handicrafts_by_yukti",
  whatsappNumber: "+919969922275",
  formattedPhone: "+91 99699 22275",
  followerCount: "15K+",
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
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=800&q=80",
    badge: "Custom Made",
  },
  {
    id: "name-plates",
    title: "Personalized Name Plates",
    description: "Custom names, family names & home entrance décor",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    badge: "Personalized",
  },
  {
    id: "wedding-memories",
    title: "Wedding Memories",
    description: "Varmala preservation, wedding frames & keepsakes",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    badge: "Signature Keepsake",
  },
  {
    id: "hampers",
    title: "Personalized Hampers",
    description: "Curated gifts for weddings, festivals & special occasions",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80",
    badge: "Curated Gifts",
  },
  {
    id: "wall-decor",
    title: "Wall Décor",
    description: "Geode panels, floral art & statement pieces",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80",
    badge: "Statement Art",
  },
  {
    id: "keepsakes",
    title: "Keepsakes & Gifts",
    description: "Trays, coasters, frames & personalized creations",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800&q=80",
    badge: "Handcrafted",
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
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    dimensions: "Customizable Size",
    badge: "CUSTOM FAVORITE",
    craftTime: "Made to Order",
    shortDescription: "Handmade name plate with acrylic lettering, preserved floral accents and gold metallic leaf bordering.",
    customizations: [
      "Custom Family Name & Flat / House Number",
      "Choice of Agate edge, Oval arch, or Rectangular base",
      "Color themes: Gold & White, Emerald Green, Ocean Blue, Obsidian Black",
      "Glossy crystal resin finish for entrance doors"
    ],
    highlight: "Individually handcrafted with acrylic mirror lettering"
  },
  {
    id: "prod-2",
    title: "Wedding Varmala Preservation Frame",
    category: "wedding-memories",
    occasions: ["weddings", "anniversaries"],
    startingPrice: 2499,
    formattedPrice: "₹2,499",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    dimensions: "Custom Deep Cast",
    badge: "WEDDING KEEPSAKE",
    craftTime: "Made to Order",
    shortDescription: "Preserve your wedding garland (varmala) flowers, wedding invite & couple photo in clear cast resin.",
    customizations: [
      "Preservation of your original wedding flowers",
      "Include Couple Names, Wedding Date & Custom Hashtag",
      "LED base or wooden stand options",
      "Arch, Hexagonal or Traditional Shadow-box silhouette"
    ],
    highlight: "Preserves your special wedding flowers as a lasting keepsake"
  },
  {
    id: "prod-3",
    title: "Personalized Couple Memory Frame",
    category: "wedding-memories",
    occasions: ["anniversaries", "weddings", "birthdays"],
    startingPrice: 1499,
    formattedPrice: "₹1,499",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
    dimensions: "Tabletop / Wall Mount",
    badge: "PERSONALIZED",
    craftTime: "Made to Order",
    shortDescription: "Keepsake featuring your favorite photo paired with delicate dried botanicals and gold leaf calligraphy.",
    customizations: [
      "Custom photo embedding",
      "Personalized Anniversary Date & Song Code / Quote",
      "Warm Rose Quartz or Champagne Gold accents"
    ],
    highlight: "Ideal for anniversary and birthday gifting"
  },
  {
    id: "prod-4",
    title: "Artisanal Resin Wall Clock",
    category: "resin-art",
    occasions: ["housewarming", "anniversaries", "birthdays"],
    startingPrice: 2299,
    formattedPrice: "₹2,299",
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=800&q=80",
    dimensions: "Various Diameter Sizes",
    badge: "HANDMADE FAVORITE",
    craftTime: "Made to Order",
    shortDescription: "Ocean wave or marble geode resin wall clock with silent quartz movement and gold dial accents.",
    customizations: [
      "Ocean Beach Waves or Geode Crystal with raw stone accents",
      "Dial style: Roman numerals, minimal bar markers, or numeric dials",
      "Silent sweep mechanism"
    ],
    highlight: "High gloss resin finish with silent clock movement"
  },
  {
    id: "prod-5",
    title: "Luxury Agate Serving Tray & Coaster Set",
    category: "keepsakes",
    occasions: ["festivals", "housewarming", "anniversaries"],
    startingPrice: 1699,
    formattedPrice: "₹1,699",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800&q=80",
    dimensions: "Serving Tray + Matching Coasters",
    badge: "HANDMADE FAVORITE",
    craftTime: "Made to Order",
    shortDescription: "Resin vanity and serving tray with gold brass handles, paired with natural raw-edge geode coasters.",
    customizations: [
      "Custom initials engraved on corner",
      "Color choices: Emerald Jade, Blush Rose, Sapphire Blue & Pearl White",
      "Gilded gold or silver leaf borders"
    ],
    highlight: "Scratch-resistant finish with gilded edges"
  },
  {
    id: "prod-6",
    title: "Curated Celebration & Festive Hamper",
    category: "hampers",
    occasions: ["festivals", "weddings", "birthdays"],
    startingPrice: 1899,
    formattedPrice: "Starting ₹1,899",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80",
    dimensions: "Custom Gifting Box",
    badge: "MADE TO ORDER",
    craftTime: "Made to Order",
    shortDescription: "A curated hamper featuring handmade resin tea-light holders, scented candle, sweet treats & personalized message card.",
    customizations: [
      "Choice of resin elements (Diya plates, bookmarks, jewelry dish)",
      "Customized greeting message",
      "Bulk gifting options available"
    ],
    highlight: "Packed in a luxury ribbon box ready for gifting"
  },
  {
    id: "prod-7",
    title: "Geode Crystal Wall Art Panel",
    category: "wall-decor",
    occasions: ["housewarming", "anniversaries"],
    startingPrice: 3499,
    formattedPrice: "₹3,499",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80",
    dimensions: "Custom Panel Dimensions",
    badge: "CUSTOM COMMISSION",
    craftTime: "Made to Order",
    shortDescription: "Fluid geode resin art made with raw crystal quartz, glitter glass, and rich metallic pigments on solid wood base.",
    customizations: [
      "Custom size tailored to your room space",
      "Matching color palette (Emerald, Amethyst, Gold/White)",
      "Horizontal or vertical orientation"
    ],
    highlight: "Real quartz crystals embedded into 3D resin layers"
  },
  {
    id: "prod-8",
    title: "Sacred Devotional & Mantra Resin Plate",
    category: "keepsakes",
    occasions: ["festivals", "housewarming", "birthdays"],
    startingPrice: 1599,
    formattedPrice: "₹1,599",
    image: "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?auto=format&fit=crop&w=800&q=80",
    dimensions: "8\" to 12\" Round / Arch",
    badge: "CUSTOM FAVORITE",
    craftTime: "Made to Order",
    shortDescription: "Sacred devotional plate with Shri Krishna silhouette, Gayatri mantra or divine symbols preserved with marigold petals and gold foil.",
    customizations: [
      "Choice of sacred mantra or deity artwork",
      "Marigold / rose petal integration",
      "Includes gold display easel stand"
    ],
    highlight: "A beautiful spiritual centerpiece for home temple or gifting"
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
    description: "We discuss dimensions, flower preservation details, lettering, and resin tones to confirm everything exactly how you want it.",
    icon: "🎨"
  },
  {
    step: "03",
    title: "Handcrafted With Care",
    description: "Each piece is slowly cast, cured in layers with real florals/gold leaf, and hand-polished with artisan attention.",
    icon: "✨"
  },
  {
    step: "04",
    title: "Carefully Packed & Delivered",
    description: "Multi-layered protective packaging ensures your personalized creation reaches you in perfect condition.",
    icon: "📦"
  }
];

export const INSTAGRAM_POSTS = [
  {
    id: "post-1",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    caption: "Wedding flower preservation in crystal clear resin 🌸💍",
    tag: "#VarmalaPreservation"
  },
  {
    id: "post-2",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
    caption: "Personalized home entrance name plate with gold accents 🌿✨",
    tag: "#ResinNamePlate"
  },
  {
    id: "post-3",
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=600&q=80",
    caption: "Handmade ocean wave resin wall clock 🌊🕒",
    tag: "#ResinClock"
  },
  {
    id: "post-4",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=600&q=80",
    caption: "Agate edge serving tray with gilded gold handles 🥂",
    tag: "#ResinTray"
  },
  {
    id: "post-5",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80",
    caption: "Curating bespoke celebration gift hampers & favors 🎁✨",
    tag: "#PersonalizedHampers"
  },
  {
    id: "post-6",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=600&q=80",
    caption: "Fluid resin geode art with raw crystal quartz points 💎",
    tag: "#GeodeArt"
  }
];

export const FAQS = [
  {
    question: "How do I send my wedding varmala / flowers for preservation?",
    answer: "Once we connect on WhatsApp, we provide simple instructions for packing and sending your wedding flowers safely to our studio so they can be preserved in resin."
  },
  {
    question: "How does the customization process work?",
    answer: "You can share your required names, dates, preferred colors, or reference photos through WhatsApp. We will discuss the design details with you before starting the handcrafting process."
  },
  {
    question: "Can I customize the colors and size of a piece?",
    answer: "Yes! Every piece is made to order. You can request custom color combinations, base shapes (Arch, Round, Rectangle, Agate), and specific dimensions."
  },
  {
    question: "How do I care for my handmade resin art?",
    answer: "Resin creations are durable and easy to maintain. Simply wipe gently with a soft dry cloth. Avoid harsh chemical cleaners and prolonged direct outdoor sunlight."
  }
];

export const WHATSAPP_QUICK_ACTIONS = [
  {
    id: "wedding",
    label: "💍 Customize a Wedding Frame",
    message: "Hi Yukti! I am interested in customizing a Wedding Frame / Flower Preservation. Could you share available options?"
  },
  {
    id: "nameplate",
    label: "🏠 Create a Name Plate",
    message: "Hi Yukti! I'd like to create a personalized Resin Name Plate for our home. Can you share design styles?"
  },
  {
    id: "hamper",
    label: "🎁 Design a Gift Hamper",
    message: "Hi Yukti! I am looking for personalized gift hampers for an upcoming occasion. Can we discuss ideas?"
  },
  {
    id: "order-status",
    label: "📦 Ask About an Existing Order",
    message: "Hi Yukti! I would like to check the status of my custom order."
  },
  {
    id: "chat",
    label: "💬 Talk to Yukti",
    message: "Hi Yukti! I saw your creations on the website and have a custom idea in mind. Would love to discuss!"
  }
];
