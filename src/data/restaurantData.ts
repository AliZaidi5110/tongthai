export interface Dish {
  id: string;
  title: string;
  thaiName?: string;
  price: number;
  ingredients: string;
  category: 'starters' | 'mains' | 'noodles' | 'drinks' | 'specials';
  badge?: 'Recommended' | 'Healthy' | 'Chef Choice' | 'Popular';
  image?: string;
  description?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  source: 'Google' | 'TripAdvisor' | 'UberEats';
  content: string;
  badge?: string;
}

export interface Chef {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  socials: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export const RESTAURANT_INFO = {
  name: 'TongThai Restaurant',
  tagline: 'Authentic Thai Cuisine',
  address: '198-200 Keighley Road, Bradford, BD9 4JZ',
  phone1: '01274 499088',
  phone2: '07506 288133',
  email: 'info@tongthairestaurant.co.uk',
  website: 'https://www.tongthaionline.com/',
  googleSearchUrl: 'https://www.google.com/search?q=tong+thai+restaurant+bradford+',
  facebookUrl: 'https://www.facebook.com/tongthaibradford',
  instagramUrl: 'https://www.instagram.com/tongthaibradford',
  openingHours: 'Wednesday – Sunday: 3:00 PM – 9:00 PM (Closed Monday & Tuesday)',
  halal: '100% Halal Food Available',
  rating: 4.6,
  reviewCount: '300+',
};

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Sarah Jenkins',
    rating: 5,
    date: 'February 2026',
    source: 'Google',
    badge: 'Local Guide',
    content: 'Without doubt the best authentic Thai food in Bradford. The Volcano Duck and Pad Thai are absolutely incredible, and the warm hospitality from the family makes you feel right at home every visit.'
  },
  {
    id: 'rev-2',
    author: 'Mohammed Tariq',
    rating: 5,
    date: 'January 2026',
    source: 'Google',
    badge: 'Verified Diner',
    content: 'Fantastic 100% halal Thai food right here on Keighley Road. The chicken satay with homemade peanut sauce is top notch, and the green curry has the real, fragrant kick of fresh Thai chillies.'
  },
  {
    id: 'rev-3',
    author: 'David & Emma Watson',
    rating: 5,
    date: 'March 2026',
    source: 'Google',
    badge: 'Dine-in Customer',
    content: 'A true family-run hidden gem. The steamed sea bass with fresh lime, garlic, and birds eye chilli was fresh, aromatic, and cooked to utter perfection. Excellent service and cozy ambiance.'
  },
  {
    id: 'rev-4',
    author: 'Aisha Khan',
    rating: 5,
    date: 'December 2025',
    source: 'UberEats',
    badge: 'Regular Guest',
    content: 'Authentic Thai iced milk tea, crispy salt & pepper squid, and delicious Massaman curry. The food always arrives piping hot and full of authentic Thai flavours. Highly recommended!'
  }
];

export const CHEF_RECOMMENDED_DISHES: Dish[] = [
  {
    id: 'rec-1',
    title: 'Volcano Duck',
    thaiName: 'Ped Volcano',
    price: 16.95,
    ingredients: 'Roasted Duck Breast / Sizzling Thai Spices / Sweet Tamarind Chilli Glaze',
    category: 'specials',
    badge: 'Chef Choice',
    image: '/images/photodune-5087439-chicken-tagine-m.jpg',
    description: 'Signature crispy roasted duck breast served on a sizzling hot plate, smothered in our secret sweet and sour chilli tamarind reduction with crispy shallots and wok vegetables.'
  },
  {
    id: 'rec-2',
    title: 'Steamed Sea Bass with Lime & Chilli',
    thaiName: 'Pla Nueng Manao',
    price: 18.95,
    ingredients: 'Fresh Sea Bass Fillet / Fresh Lime / Crushed Garlic / Birds Eye Chilli',
    category: 'specials',
    badge: 'Recommended',
    image: '/images/shutterstock_179643251-490x314.jpg',
    description: 'Succulent fresh sea bass fillet gently steamed with hand-squeezed Thai lime juice, crushed garlic cloves, fresh coriander, and fiery birds eye chillies.'
  },
  {
    id: 'rec-3',
    title: 'Chicken Satay (4 Skewers)',
    thaiName: 'Gai Satay',
    price: 8.50,
    ingredients: 'Marinated Chicken Skewers / Lemongrass / Warm Peanut Sauce / Cucumber Relish',
    category: 'starters',
    badge: 'Popular',
    image: '/images/5732555949_4ec706dd58_o-490x314.jpg',
    description: 'Tender chicken skewers marinated in rich coconut cream, turmeric, and lemongrass, grilled to perfection and served with our famous house-made peanut satay sauce.'
  },
  {
    id: 'rec-4',
    title: 'Thai Green Curry with Chicken',
    thaiName: 'Gaeng Keow Wan Gai',
    price: 12.95,
    ingredients: 'Chicken / Coconut Milk / Thai Pea Aubergines / Bamboo / Sweet Basil',
    category: 'mains',
    badge: 'Recommended',
    image: '/images/3825404172_7eceffa9c1_o-490x314.jpg',
    description: 'The national pride of Thailand. Fragrant green curry simmered with rich coconut milk, Thai pea aubergines, crisp bamboo shoots, and fresh sweet Thai basil leaves.'
  },
  {
    id: 'rec-5',
    title: 'King Prawn Pad Thai',
    thaiName: 'Pad Thai Goong',
    price: 12.95,
    ingredients: 'Jumbo King Prawns / Rice Ribbon Noodles / Tamarind / Crushed Peanuts',
    category: 'noodles',
    badge: 'Popular',
    image: '/images/5638487457_ce6335f841_o-490x314.jpg',
    description: 'Classic wok-tossed rice noodles with succulent king prawns, sweet and sour palm sugar tamarind glaze, egg, spring onions, fresh bean sprouts, and roasted crushed peanuts.'
  },
  {
    id: 'rec-6',
    title: 'Slow-Cooked Massaman Curry',
    thaiName: 'Massaman Gai / Neua',
    price: 13.50,
    ingredients: 'Tender Beef or Chicken / Cinnamon / Baby Potatoes / Roasted Peanuts',
    category: 'mains',
    badge: 'Chef Choice',
    image: '/images/Loaded-Baked-Potato-Pizza-Recipe-490x314.jpg',
    description: 'Rich, mildly spiced southern Thai curry slowly braised with whole star anise, cinnamon quills, baby potatoes, sweet shallots, and roasted cashew nuts.'
  }
];

export const POPULAR_DISHES: Dish[] = [
  // Starters & Soups
  {
    id: 'pop-1',
    title: 'Traditional Tom Yum Soup (Prawn or Chicken)',
    thaiName: 'Tom Yum Goong',
    price: 7.95,
    ingredients: 'Galangal / Lemongrass / Kaffir Lime / Oyster Mushrooms / Fresh Chilli',
    category: 'starters',
    badge: 'Recommended'
  },
  {
    id: 'pop-2',
    title: 'Coconut Tom Kha Soup',
    thaiName: 'Tom Kha Gai',
    price: 7.95,
    ingredients: 'Silky Coconut Milk / Galangal / Lemongrass / Lime Leaves / Coriander',
    category: 'starters',
    badge: 'Healthy'
  },
  {
    id: 'pop-3',
    title: 'Thai Fish Cakes with Sweet Chilli Dip',
    thaiName: 'Tod Mun Pla',
    price: 8.50,
    ingredients: 'Featherback Fish / Red Curry Paste / Lime Leaves / Green Beans',
    category: 'starters'
  },
  {
    id: 'pop-4',
    title: 'Crispy Salt & Pepper Squid',
    thaiName: 'Pla Muek Tod',
    price: 8.95,
    ingredients: 'Calamari / Spring Onion / Garlic Flakes / Sweet Plum Chilli Dip',
    category: 'starters',
    badge: 'Popular'
  },
  {
    id: 'pop-5',
    title: 'Crispy Golden Vegetable Spring Rolls',
    thaiName: 'Poh Pia Tod',
    price: 7.50,
    ingredients: 'Glass Noodles / Shredded Carrot / Wood Ear Mushroom / Plum Sauce',
    category: 'starters',
    badge: 'Healthy'
  },

  // Curries & Wok Stir-Fries
  {
    id: 'pop-6',
    title: 'Holy Basil & Chilli Stir-Fry',
    thaiName: 'Pad Kra Pao',
    price: 12.95,
    ingredients: 'Minced Chicken or Beef / Thai Holy Basil / Garlic / Birds Eye Chilli',
    category: 'mains',
    badge: 'Recommended'
  },
  {
    id: 'pop-7',
    title: 'Cashew Nut & Roasted Chilli Stir-Fry',
    thaiName: 'Pad Med Mamuang',
    price: 12.95,
    ingredients: 'Crispy Chicken / Roasted Cashews / Bell Peppers / Onions / Dried Chilli',
    category: 'mains'
  },
  {
    id: 'pop-8',
    title: 'Fragrant Thai Red Curry',
    thaiName: 'Gaeng Dang',
    price: 12.95,
    ingredients: 'Red Curry Paste / Coconut Milk / Bamboo Shoots / Thai Sweet Basil',
    category: 'mains'
  },
  {
    id: 'pop-9',
    title: 'Rich Panang Curry with Kaffir Lime',
    thaiName: 'Gaeng Panang',
    price: 13.50,
    ingredients: 'Thick Coconut Cream / Kaffir Lime Leaves / Ground Peanuts',
    category: 'mains',
    badge: 'Recommended'
  },
  {
    id: 'pop-10',
    title: 'Crispy Sea Bass with Garlic & Cracked Pepper',
    thaiName: 'Pla Tod Kratiem',
    price: 18.95,
    ingredients: 'Crispy Fillet / Golden Garlic Crisp / Coriander / White Pepper',
    category: 'mains',
    badge: 'Chef Choice'
  },

  // Noodles & Rice
  {
    id: 'pop-11',
    title: 'Drunken Spicy Noodles',
    thaiName: 'Pad Kee Mao',
    price: 12.50,
    ingredients: 'Flat Thick Rice Noodles / Fresh Chilli / Holy Basil / Young Peppercorns',
    category: 'noodles',
    badge: 'Popular'
  },
  {
    id: 'pop-12',
    title: 'Soy Sauce Stir-Fried Flat Noodles',
    thaiName: 'Pad See Ew',
    price: 11.95,
    ingredients: 'Flat Rice Noodles / Sweet Dark Soy / Chinese Broccoli / Egg',
    category: 'noodles'
  },
  {
    id: 'pop-13',
    title: 'Steamed Fragrant Jasmine Rice',
    thaiName: 'Khao Hom Mali',
    price: 3.50,
    ingredients: 'Royal Thai Jasmine Fragrant Rice',
    category: 'noodles'
  },
  {
    id: 'pop-14',
    title: 'Coconut Infused Rice',
    thaiName: 'Khao Man Kati',
    price: 4.00,
    ingredients: 'Jasmine Rice Steamed in Coconut Cream & Sesame Seeds',
    category: 'noodles'
  },

  // Drinks from User's Drinks Menu PDF
  {
    id: 'pop-15',
    title: 'Traditional Thai Milk Tea (Chilled)',
    thaiName: 'Cha Yen',
    price: 4.50,
    ingredients: 'Brewed Thai Ceylon Black Tea / Condensed Milk / Crushed Ice',
    category: 'drinks',
    badge: 'Recommended'
  },
  {
    id: 'pop-16',
    title: 'Milky Pink Sky (Thai Speciality)',
    thaiName: 'Nom Yen',
    price: 4.50,
    ingredients: 'Sala Flavoured Sweet Rose Cream / Cold Fresh Milk',
    category: 'drinks'
  },
  {
    id: 'pop-17',
    title: 'Honey Lemon Tea / Red Honey Soda',
    thaiName: 'Nam Manao Nam Peung',
    price: 4.50,
    ingredients: 'Wildflower Honey / Fresh Lime Juice / Sparkling Soda',
    category: 'drinks',
    badge: 'Healthy'
  },
  {
    id: 'pop-18',
    title: 'Thai Herbal Tea (Hot Pot)',
    thaiName: 'Cha Samunprai',
    price: 4.50,
    ingredients: 'Ginger / Fingerroot / Lemongrass / Bael Fruit / Stevia',
    category: 'drinks',
    badge: 'Healthy'
  },
  {
    id: 'pop-19',
    title: 'Singha Thai Lager Beer (330ml / 660ml)',
    thaiName: 'Bia Singha',
    price: 4.75,
    ingredients: 'Original Royal Thai Premium Lager / 5% ABV',
    category: 'drinks'
  },
  {
    id: 'pop-20',
    title: 'Chang Thai Classic Beer (330ml / 660ml)',
    thaiName: 'Bia Chang',
    price: 4.75,
    ingredients: 'Natural Mineral Water Brewed / Crisp Refreshing Finish',
    category: 'drinks'
  },
  {
    id: 'pop-21',
    title: 'House Pinot Grigio (175ml Glass / Bottle)',
    thaiName: 'Vino Bianco',
    price: 6.50,
    ingredients: 'Italy / Light, Crisp & Easy-Drinking / Bottle £19.95',
    category: 'drinks'
  },
  {
    id: 'pop-22',
    title: 'Prosecco DOC Sparkling Wine (Bottle)',
    thaiName: 'Prosecco Superiore',
    price: 23.95,
    ingredients: 'Italy / Classic Crisp Sparkling / Mini Bottle £7.50',
    category: 'drinks'
  }
];

export const CHEFS: Chef[] = [
  {
    id: 'chef-1',
    name: 'Chef Somchai Prasert',
    role: 'Executive Head Chef & Founder',
    image: '/images/chief-456x456.jpg',
    bio: 'Born in Chiang Mai with over 20 years of authentic heritage cooking, Chef Somchai brings traditional wok techniques, hand-pounded curry pastes, and royal Thai recipes to Bradford.',
    socials: {
      facebook: 'https://www.facebook.com/tongthaibradford',
      instagram: 'https://www.instagram.com/tongthaibradford'
    }
  },
  {
    id: 'chef-2',
    name: 'Chef Malee Vongsuvan',
    role: 'Curry & Spice Master',
    image: '/images/Depositphotos_3233253_original-400x400.jpg',
    bio: 'Renowned for crafting our signature green, red, and massaman curry pastes from raw galangal, lemongrass, fingerroot, and kaffir leaves ground fresh daily.',
    socials: {
      facebook: 'https://www.facebook.com/tongthaibradford',
      instagram: 'https://www.instagram.com/tongthaibradford'
    }
  },
  {
    id: 'chef-3',
    name: 'Chef Anan Siriporn',
    role: 'Seafood & Wok Specialist',
    image: '/images/shutterstock_116468653-456x456.jpg',
    bio: 'Specializing in high-heat wok artistry and southern Thai coastal seafood, Anan curates our famous steamed lime seabass, king prawn pad thai, and volcano duck.',
    socials: {
      facebook: 'https://www.facebook.com/tongthaibradford',
      instagram: 'https://www.instagram.com/tongthaibradford'
    }
  }
];

export const GALLERY_IMAGES = [
  {
    src: '/images/restaurant-front.jpg',
    full: '/images/restaurant-front.jpg',
    alt: 'TongThai Restaurant Storefront, 198–200 Keighley Road, Bradford BD9 4JZ',
    caption: 'TongThai Restaurant Front — 198–200 Keighley Road, Bradford BD9'
  },
  {
    src: '/images/9569414693_33895ce768_o-685x1024-220x220.jpg',
    full: '/images/9569414693_33895ce768_o-685x1024-220x220.jpg',
    alt: 'Authentic Thai herbal drinks and traditional refreshments at TongThai Bradford',
    caption: 'Authentic Thai Specialities & Herbal Teas'
  },
  {
    src: '/images/5403403550_7e0f08aed6_o-1024x681-220x220.jpg',
    full: '/images/5403403550_7e0f08aed6_o-1024x681-220x220.jpg',
    alt: 'TongThai elegant Thai restaurant dining room interior and table setting in Bradford',
    caption: 'Warm Thai Hospitality on Keighley Road, Bradford'
  },
  {
    src: '/images/photodune-2201397-chef-with-dish-m-1024x682-220x220.jpg',
    full: '/images/photodune-2201397-chef-with-dish-m-1024x682-220x220.jpg',
    alt: 'TongThai head chef preparing fresh wok-tossed authentic Thai Pad Thai noodles',
    caption: 'Sizzling Wok Flamed Pad Thai & Noodles'
  }
];
