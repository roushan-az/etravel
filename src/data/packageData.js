// Tour Package Data - Realistic Indian Tours

export const tourPackages = [
  // Rajasthan Packages
  {
    id: 'raj-001',
    title: 'Royal Rajasthan Heritage Tour',
    state: 'rajasthan',
    cities: ['jaipur', 'udaipur', 'jodhpur'],
    duration: '7 days & 6 nights',
    price: 28500,
    originalPrice: 35000,
    rating: 4.8,
    reviews: 342,
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80',
    category: 'heritage',
    theme: ['culture', 'photography', 'luxury'],
    inclusions: ['Hotels', 'Meals', 'Transport', 'Guide'],
    highlights: ['Amber Fort', 'City Palace Udaipur', 'Mehrangarh Fort', 'Cultural Shows'],
    bestFor: 'Families, Couples',
    difficulty: 'Easy',
    featured: true
  },
  {
    id: 'raj-002',
    title: 'Desert Safari Adventure Jaisalmer',
    state: 'rajasthan',
    cities: ['jaisalmer', 'jodhpur'],
    duration: '4 days & 3 nights',
    price: 15800,
    originalPrice: 19000,
    rating: 4.6,
    reviews: 218,
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80',
    category: 'adventure',
    theme: ['desert', 'camping', 'cultural'],
    inclusions: ['Desert Camp', 'Camel Safari', 'Meals', 'Transport'],
    highlights: ['Sam Sand Dunes', 'Camel Safari', 'Desert Camping', 'Cultural Evening'],
    bestFor: 'Adventure Seekers',
    difficulty: 'Moderate',
    featured: true
  },
  {
    id: 'raj-003',
    title: 'Spiritual Pushkar & Ajmer Tour',
    state: 'rajasthan',
    cities: ['pushkar', 'ajmer', 'jaipur'],
    duration: '3 days & 2 nights',
    price: 9500,
    originalPrice: 12000,
    rating: 4.5,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&q=80',
    category: 'spiritual',
    theme: ['pilgrimage', 'culture', 'photography'],
    inclusions: ['Hotels', 'Breakfast', 'Transport', 'Guide'],
    highlights: ['Brahma Temple', 'Pushkar Lake', 'Ajmer Dargah', 'Camel Fair (seasonal)'],
    bestFor: 'Spiritual Seekers',
    difficulty: 'Easy',
    featured: false
  },

  // Kerala Packages
  {
    id: 'ker-001',
    title: 'Kerala Backwater Houseboat Experience',
    state: 'kerala',
    cities: ['alleppey', 'kochi', 'munnar'],
    duration: '5 days & 4 nights',
    price: 22000,
    originalPrice: 27500,
    rating: 4.9,
    reviews: 498,
    image: 'https://images.unsplash.com/photo-1591995607653-251d85e42f1d?w=800&q=80',
    category: 'nature',
    theme: ['backwaters', 'relaxation', 'nature'],
    inclusions: ['Houseboat Stay', 'Hotels', 'All Meals', 'Transport'],
    highlights: ['Houseboat Cruise', 'Tea Plantations', 'Backwater Villages', 'Kathakali Show'],
    bestFor: 'Honeymoon, Families',
    difficulty: 'Easy',
    featured: true
  },
  {
    id: 'ker-002',
    title: 'Munnar Hill Station Escape',
    state: 'kerala',
    cities: ['munnar', 'thekkady'],
    duration: '4 days & 3 nights',
    price: 16500,
    originalPrice: 20000,
    rating: 4.7,
    reviews: 287,
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80',
    category: 'nature',
    theme: ['hills', 'tea gardens', 'wildlife'],
    inclusions: ['Hotels', 'Breakfast', 'Sightseeing', 'Transport'],
    highlights: ['Tea Gardens', 'Eravikulam Park', 'Mattupetty Dam', 'Spice Plantations'],
    bestFor: 'Nature Lovers',
    difficulty: 'Easy',
    featured: true
  },
  {
    id: 'ker-003',
    title: 'Complete Kerala Grand Tour',
    state: 'kerala',
    cities: ['kochi', 'munnar', 'thekkady', 'alleppey', 'kovalam'],
    duration: '8 days & 7 nights',
    price: 35000,
    originalPrice: 42000,
    rating: 4.8,
    reviews: 423,
    image: 'https://images.unsplash.com/photo-1569318600936-d6a58ba685a1?w=800&q=80',
    category: 'complete',
    theme: ['backwaters', 'hills', 'beaches', 'culture'],
    inclusions: ['Hotels', 'Houseboat', 'All Meals', 'Transport', 'Guide'],
    highlights: ['Fort Kochi', 'Tea Gardens', 'Houseboat', 'Periyar Wildlife', 'Beaches'],
    bestFor: 'First-time Visitors',
    difficulty: 'Easy',
    featured: true
  },

  // Goa Packages
  {
    id: 'goa-001',
    title: 'Goa Beach Paradise Getaway',
    state: 'goa',
    cities: ['north-goa', 'south-goa'],
    duration: '5 days & 4 nights',
    price: 18500,
    originalPrice: 23000,
    rating: 4.6,
    reviews: 564,
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80',
    category: 'beach',
    theme: ['beach', 'party', 'water sports'],
    inclusions: ['Beach Resort', 'Breakfast', 'Water Sports', 'Transport'],
    highlights: ['Beach Hopping', 'Water Sports', 'Night Market', 'Dudhsagar Falls'],
    bestFor: 'Young Travelers, Groups',
    difficulty: 'Easy',
    featured: true
  },
  {
    id: 'goa-002',
    title: 'Goa Heritage & Beaches',
    state: 'goa',
    cities: ['panaji', 'old-goa', 'south-goa'],
    duration: '4 days & 3 nights',
    price: 14500,
    originalPrice: 18000,
    rating: 4.5,
    reviews: 298,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
    category: 'heritage',
    theme: ['culture', 'beach', 'food'],
    inclusions: ['Hotels', 'Breakfast', 'Sightseeing', 'Transport'],
    highlights: ['Churches', 'Portuguese Architecture', 'Spice Plantation', 'Beach Shacks'],
    bestFor: 'Culture Enthusiasts',
    difficulty: 'Easy',
    featured: false
  },

  // Himachal Pradesh Packages
  {
    id: 'hp-001',
    title: 'Shimla Manali Honeymoon Special',
    state: 'himachal-pradesh',
    cities: ['shimla', 'manali'],
    duration: '6 days & 5 nights',
    price: 24000,
    originalPrice: 30000,
    rating: 4.8,
    reviews: 876,
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&q=80',
    category: 'honeymoon',
    theme: ['romantic', 'snow', 'adventure'],
    inclusions: ['Hotels', 'Meals', 'Rohtang Pass', 'Transport', 'Honeymoon Decor'],
    highlights: ['Mall Road', 'Solang Valley', 'Rohtang Pass', 'Hadimba Temple'],
    bestFor: 'Honeymooners',
    difficulty: 'Easy',
    featured: true
  },
  {
    id: 'hp-002',
    title: 'Manali Adventure & Kasol Trek',
    state: 'himachal-pradesh',
    cities: ['manali', 'kasol'],
    duration: '5 days & 4 nights',
    price: 19500,
    originalPrice: 24000,
    rating: 4.7,
    reviews: 432,
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
    category: 'adventure',
    theme: ['trekking', 'camping', 'nature'],
    inclusions: ['Hotels/Camps', 'Meals', 'Trek Guide', 'Transport', 'Equipment'],
    highlights: ['Kheerganga Trek', 'Kasol Village', 'Tosh Valley', 'Solang Valley'],
    bestFor: 'Adventure Seekers, Backpackers',
    difficulty: 'Moderate',
    featured: true
  },
  {
    id: 'hp-003',
    title: 'Dharamshala McLeodganj Spiritual Retreat',
    state: 'himachal-pradesh',
    cities: ['dharamshala', 'mcleodganj'],
    duration: '4 days & 3 nights',
    price: 13500,
    originalPrice: 17000,
    rating: 4.6,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
    category: 'spiritual',
    theme: ['spirituality', 'monasteries', 'trekking'],
    inclusions: ['Hotels', 'Breakfast', 'Monastery Visits', 'Transport'],
    highlights: ['Dalai Lama Temple', 'Bhagsunag Falls', 'Triund Trek', 'Tibetan Culture'],
    bestFor: 'Spiritual Seekers',
    difficulty: 'Moderate',
    featured: false
  },

  // Uttarakhand Packages
  {
    id: 'uk-001',
    title: 'Nainital Mussoorie Hill Station Tour',
    state: 'uttarakhand',
    cities: ['nainital', 'mussoorie'],
    duration: '5 days & 4 nights',
    price: 17500,
    originalPrice: 22000,
    rating: 4.5,
    reviews: 387,
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80',
    category: 'nature',
    theme: ['hills', 'lakes', 'scenic'],
    inclusions: ['Hotels', 'Breakfast', 'Lake Activities', 'Transport'],
    highlights: ['Naini Lake Boating', 'Mall Road', 'Kempty Falls', 'Gun Hill'],
    bestFor: 'Families, Couples',
    difficulty: 'Easy',
    featured: true
  },
  {
    id: 'uk-002',
    title: 'Rishikesh Haridwar Spiritual Tour',
    state: 'uttarakhand',
    cities: ['rishikesh', 'haridwar'],
    duration: '3 days & 2 nights',
    price: 9800,
    originalPrice: 12500,
    rating: 4.7,
    reviews: 542,
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&q=80',
    category: 'spiritual',
    theme: ['pilgrimage', 'yoga', 'adventure'],
    inclusions: ['Hotels', 'Meals', 'River Rafting', 'Ganga Aarti', 'Transport'],
    highlights: ['River Rafting', 'Ganga Aarti', 'Beatles Ashram', 'Lakshman Jhula'],
    bestFor: 'Spiritual Seekers, Adventure',
    difficulty: 'Moderate',
    featured: true
  },
  {
    id: 'uk-003',
    title: 'Jim Corbett Wildlife Safari',
    state: 'uttarakhand',
    cities: ['jim-corbett'],
    duration: '3 days & 2 nights',
    price: 14000,
    originalPrice: 18000,
    rating: 4.6,
    reviews: 276,
    image: 'https://images.unsplash.com/photo-1591362491742-0f08c523e6c2?w=800&q=80',
    category: 'wildlife',
    theme: ['safari', 'nature', 'photography'],
    inclusions: ['Resort', 'Meals', 'Safari (2)', 'Naturalist', 'Transport'],
    highlights: ['Jeep Safari', 'Tiger Spotting', 'Bird Watching', 'Nature Walks'],
    bestFor: 'Wildlife Enthusiasts',
    difficulty: 'Easy',
    featured: false
  },

  // Kashmir Packages
  {
    id: 'jk-001',
    title: 'Srinagar Gulmarg Paradise Tour',
    state: 'kashmir',
    cities: ['srinagar', 'gulmarg', 'pahalgam'],
    duration: '6 days & 5 nights',
    price: 28000,
    originalPrice: 35000,
    rating: 4.9,
    reviews: 634,
    image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&q=80',
    category: 'nature',
    theme: ['snow', 'lakes', 'adventure', 'romantic'],
    inclusions: ['Houseboat', 'Hotels', 'Meals', 'Shikara Ride', 'Gondola', 'Transport'],
    highlights: ['Dal Lake Stay', 'Gulmarg Gondola', 'Pahalgam Valley', 'Mughal Gardens'],
    bestFor: 'Honeymooners, Families',
    difficulty: 'Easy',
    featured: true
  },
  {
    id: 'jk-002',
    title: 'Leh Ladakh Bike Expedition',
    state: 'ladakh',
    cities: ['leh', 'nubra-valley', 'pangong-lake'],
    duration: '8 days & 7 nights',
    price: 42000,
    originalPrice: 52000,
    rating: 4.8,
    reviews: 892,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    category: 'adventure',
    theme: ['biking', 'mountains', 'photography', 'camping'],
    inclusions: ['Hotels/Camps', 'Meals', 'Bike Rental', 'Permits', 'Support Vehicle'],
    highlights: ['Khardung La Pass', 'Pangong Lake', 'Nubra Valley', 'Monasteries'],
    bestFor: 'Adventure Bikers',
    difficulty: 'Challenging',
    featured: true
  },

  // Karnataka Packages
  {
    id: 'kar-001',
    title: 'Coorg Coffee Plantation Retreat',
    state: 'karnataka',
    cities: ['coorg', 'chikmagalur'],
    duration: '4 days & 3 nights',
    price: 16000,
    originalPrice: 20000,
    rating: 4.7,
    reviews: 342,
    image: 'https://images.unsplash.com/photo-1549171574-ca1a912a5506?w=800&q=80',
    category: 'nature',
    theme: ['coffee', 'hills', 'relaxation'],
    inclusions: ['Homestay', 'Meals', 'Coffee Tour', 'Transport'],
    highlights: ['Coffee Plantations', 'Abbey Falls', 'Dubare Camp', 'Raja Seat'],
    bestFor: 'Couples, Nature Lovers',
    difficulty: 'Easy',
    featured: true
  },
  {
    id: 'kar-002',
    title: 'Hampi Heritage Exploration',
    state: 'karnataka',
    cities: ['hampi', 'hospet'],
    duration: '3 days & 2 nights',
    price: 11500,
    originalPrice: 15000,
    rating: 4.6,
    reviews: 218,
    image: 'https://images.unsplash.com/photo-1604421857143-d0f5e0dd6f8f?w=800&q=80',
    category: 'heritage',
    theme: ['history', 'photography', 'culture'],
    inclusions: ['Hotels', 'Breakfast', 'Guide', 'Transport'],
    highlights: ['Virupaksha Temple', 'Vittala Temple', 'Stone Chariot', 'Ruins Tour'],
    bestFor: 'History Buffs',
    difficulty: 'Moderate',
    featured: false
  },

  // Sikkim Packages
  {
    id: 'sik-001',
    title: 'Gangtok Pelling Sikkim Adventure',
    state: 'sikkim',
    cities: ['gangtok', 'pelling', 'lachung'],
    duration: '7 days & 6 nights',
    price: 26500,
    originalPrice: 33000,
    rating: 4.8,
    reviews: 467,
    image: 'https://images.unsplash.com/photo-1626621341291-62b67e425ae4?w=800&q=80',
    category: 'nature',
    theme: ['mountains', 'monasteries', 'lakes'],
    inclusions: ['Hotels', 'Meals', 'Permits', 'Transport', 'Guide'],
    highlights: ['Tsomgo Lake', 'Nathula Pass', 'Kanchenjunga Views', 'Monasteries'],
    bestFor: 'Nature Lovers',
    difficulty: 'Moderate',
    featured: true
  },

  // Andaman Packages
  {
    id: 'and-001',
    title: 'Andaman Beach & Scuba Diving',
    state: 'andaman-nicobar',
    cities: ['port-blair', 'havelock', 'neil-island'],
    duration: '6 days & 5 nights',
    price: 32000,
    originalPrice: 40000,
    rating: 4.9,
    reviews: 723,
    image: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?w=800&q=80',
    category: 'beach',
    theme: ['beach', 'diving', 'water sports'],
    inclusions: ['Hotels', 'Meals', 'Ferry', 'Scuba Diving', 'Snorkeling'],
    highlights: ['Radhanagar Beach', 'Scuba Diving', 'Cellular Jail', 'Glass Bottom Boat'],
    bestFor: 'Honeymooners, Beach Lovers',
    difficulty: 'Easy',
    featured: true
  },

  // Uttar Pradesh Packages
  {
    id: 'up-001',
    title: 'Agra Taj Mahal Day Tour',
    state: 'uttar-pradesh',
    cities: ['agra'],
    duration: '1 day',
    price: 3500,
    originalPrice: 4500,
    rating: 4.5,
    reviews: 1243,
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80',
    category: 'heritage',
    theme: ['monuments', 'photography', 'history'],
    inclusions: ['Transport', 'Guide', 'Monument Tickets'],
    highlights: ['Taj Mahal', 'Agra Fort', 'Mehtab Bagh', 'Local Crafts'],
    bestFor: 'Day Trippers',
    difficulty: 'Easy',
    featured: true
  },
  {
    id: 'up-002',
    title: 'Varanasi Spiritual Experience',
    state: 'uttar-pradesh',
    cities: ['varanasi'],
    duration: '3 days & 2 nights',
    price: 9800,
    originalPrice: 12500,
    rating: 4.7,
    reviews: 876,
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&q=80',
    category: 'spiritual',
    theme: ['pilgrimage', 'culture', 'photography'],
    inclusions: ['Hotels', 'Breakfast', 'Boat Ride', 'Temple Tours', 'Transport'],
    highlights: ['Ganga Aarti', 'Boat Ride', 'Sarnath', 'Kashi Vishwanath'],
    bestFor: 'Spiritual Seekers',
    difficulty: 'Easy',
    featured: true
  }
];

// Filter helpers
export const getPackagesByState = (stateId) => {
  return tourPackages.filter(pkg => pkg.state === stateId);
};

export const getPackagesByCity = (cityId) => {
  return tourPackages.filter(pkg => pkg.cities.includes(cityId));
};

export const getPackagesByCategory = (category) => {
  return tourPackages.filter(pkg => pkg.category === category);
};

export const getFeaturedPackages = () => {
  return tourPackages.filter(pkg => pkg.featured);
};

export const searchPackages = (query) => {
  const lowerQuery = query.toLowerCase();
  return tourPackages.filter(pkg => 
    pkg.title.toLowerCase().includes(lowerQuery) ||
    pkg.cities.some(city => city.toLowerCase().includes(lowerQuery)) ||
    pkg.theme.some(theme => theme.toLowerCase().includes(lowerQuery))
  );
};

export default tourPackages;
