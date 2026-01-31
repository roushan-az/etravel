// Complete India Travel Data - All States & Union Territories

export const indiaStates = [
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    tagline: 'Land of Kings',
    description: 'Experience royal palaces, majestic forts, and vibrant desert culture',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80',
    icon: '🏰',
    packageCount: 156,
    popular: true,
    cities: ['jaipur', 'udaipur', 'jodhpur', 'jaisalmer', 'pushkar', 'mount-abu']
  },
  {
    id: 'kerala',
    name: 'Kerala',
    tagline: "God's Own Country",
    description: 'Serene backwaters, lush greenery, and pristine beaches',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80',
    icon: '🌴',
    packageCount: 142,
    popular: true,
    cities: ['munnar', 'alleppey', 'kochi', 'thekkady', 'kovalam', 'wayanad']
  },
  {
    id: 'goa',
    name: 'Goa',
    tagline: 'Beach Paradise',
    description: 'Sun, sand, sea and vibrant nightlife',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80',
    icon: '🏖️',
    packageCount: 98,
    popular: true,
    cities: ['north-goa', 'south-goa', 'panaji', 'old-goa']
  },
  {
    id: 'himachal-pradesh',
    name: 'Himachal Pradesh',
    tagline: 'Land of Gods',
    description: 'Snow-capped mountains, adventure sports, and hill stations',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
    icon: '⛰️',
    packageCount: 178,
    popular: true,
    cities: ['shimla', 'manali', 'dharamshala', 'kasol', 'spiti-valley', 'dalhousie']
  },
  {
    id: 'uttarakhand',
    name: 'Uttarakhand',
    tagline: 'Devbhoomi',
    description: 'Spiritual journey, hill stations, and adventure',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80',
    icon: '🏔️',
    packageCount: 134,
    popular: true,
    cities: ['nainital', 'mussoorie', 'rishikesh', 'haridwar', 'jim-corbett', 'auli']
  },
  {
    id: 'kashmir',
    name: 'Jammu & Kashmir',
    tagline: 'Paradise on Earth',
    description: 'Dal Lake, Mughal gardens, and snow activities',
    image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&q=80',
    icon: '🎿',
    packageCount: 89,
    popular: true,
    cities: ['srinagar', 'gulmarg', 'pahalgam', 'sonamarg', 'jammu', 'leh-ladakh']
  },
  {
    id: 'karnataka',
    name: 'Karnataka',
    tagline: 'One State Many Worlds',
    description: 'IT hub, coffee estates, beaches, and heritage sites',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80',
    icon: '🏛️',
    packageCount: 112,
    popular: false,
    cities: ['bangalore', 'coorg', 'mysore', 'hampi', 'gokarna', 'chikmagalur']
  },
  {
    id: 'tamil-nadu',
    name: 'Tamil Nadu',
    tagline: 'Cradle of Culture',
    description: 'Ancient temples, hill stations, and cultural heritage',
    image: 'https://images.unsplash.com/photo-1588423099299-31318d291c88?w=800&q=80',
    icon: '🕉️',
    packageCount: 96,
    popular: false,
    cities: ['ooty', 'kodaikanal', 'chennai', 'mahabalipuram', 'madurai', 'rameswaram']
  },
  {
    id: 'maharashtra',
    name: 'Maharashtra',
    tagline: 'Gateway of India',
    description: 'Bustling cities, hill stations, and beaches',
    image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=800&q=80',
    icon: '🌊',
    packageCount: 124,
    popular: false,
    cities: ['mumbai', 'lonavala', 'mahabaleshwar', 'nashik', 'aurangabad', 'pune']
  },
  {
    id: 'sikkim',
    name: 'Sikkim',
    tagline: 'Land of Mystical Mountains',
    description: 'Buddhist monasteries, Kanchenjunga views, alpine beauty',
    image: 'https://images.unsplash.com/photo-1626621341291-62b67e425ae4?w=800&q=80',
    icon: '🏔️',
    packageCount: 67,
    popular: true,
    cities: ['gangtok', 'pelling', 'lachung', 'namchi', 'yuksom']
  },
  {
    id: 'andaman-nicobar',
    name: 'Andaman & Nicobar',
    tagline: 'Emerald Islands',
    description: 'Pristine beaches, coral reefs, and water sports',
    image: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?w=800&q=80',
    icon: '🏝️',
    packageCount: 54,
    popular: true,
    cities: ['port-blair', 'havelock', 'neil-island', 'ross-island']
  },
  {
    id: 'west-bengal',
    name: 'West Bengal',
    tagline: 'Cultural Capital',
    description: 'Colonial heritage, tea gardens, and hill stations',
    image: 'https://images.unsplash.com/photo-1558862107-d49ef2a04d72?w=800&q=80',
    icon: '🎭',
    packageCount: 78,
    popular: false,
    cities: ['kolkata', 'darjeeling', 'kalimpong', 'sundarbans', 'digha']
  },
  {
    id: 'ladakh',
    name: 'Ladakh',
    tagline: 'Land of High Passes',
    description: 'Stunning landscapes, monasteries, adventure biking',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    icon: '🏍️',
    packageCount: 72,
    popular: true,
    cities: ['leh', 'nubra-valley', 'pangong-lake', 'tso-moriri', 'khardung-la']
  },
  {
    id: 'gujarat',
    name: 'Gujarat',
    tagline: 'Vibrant Gujarat',
    description: 'White desert, wildlife, and cultural festivals',
    image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80',
    icon: '🦁',
    packageCount: 86,
    popular: false,
    cities: ['ahmedabad', 'kutch', 'gir', 'dwarka', 'somnath', 'saputara']
  },
  {
    id: 'madhya-pradesh',
    name: 'Madhya Pradesh',
    tagline: 'Heart of India',
    description: 'Wildlife sanctuaries, temples, and historical monuments',
    image: 'https://images.unsplash.com/photo-1591362491742-0f08c523e6c2?w=800&q=80',
    icon: '🐅',
    packageCount: 64,
    popular: false,
    cities: ['khajuraho', 'bhopal', 'indore', 'ujjain', 'kanha', 'pachmarhi']
  },
  {
    id: 'punjab',
    name: 'Punjab',
    tagline: 'Land of Five Rivers',
    description: 'Golden Temple, vibrant culture, and Punjabi hospitality',
    image: 'https://images.unsplash.com/photo-1598952116221-4c6a6d98f0b9?w=800&q=80',
    icon: '🕌',
    packageCount: 42,
    popular: false,
    cities: ['amritsar', 'chandigarh', 'ludhiana', 'patiala']
  },
  {
    id: 'andhra-pradesh',
    name: 'Andhra Pradesh',
    tagline: 'Kohinoor of India',
    description: 'Temples, beaches, and tech cities',
    image: 'https://images.unsplash.com/photo-1582639590011-f5a8416d2462?w=800&q=80',
    icon: '🛕',
    packageCount: 58,
    popular: false,
    cities: ['visakhapatnam', 'tirupati', 'vijayawada', 'araku-valley']
  },
  {
    id: 'telangana',
    name: 'Telangana',
    tagline: 'State of Art',
    description: 'Historical forts, IT hub, and Deccan culture',
    image: 'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?w=800&q=80',
    icon: '🏙️',
    packageCount: 46,
    popular: false,
    cities: ['hyderabad', 'warangal', 'ramoji-city']
  },
  {
    id: 'odisha',
    name: 'Odisha',
    tagline: 'Soul of India',
    description: 'Ancient temples, beaches, and tribal culture',
    image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80',
    icon: '🏖️',
    packageCount: 52,
    popular: false,
    cities: ['puri', 'konark', 'bhubaneswar', 'chilika']
  },
  {
    id: 'assam',
    name: 'Assam',
    tagline: 'Land of Tea',
    description: 'Tea gardens, wildlife, and river islands',
    image: 'https://images.unsplash.com/photo-1551672825-6b8f61716c8f?w=800&q=80',
    icon: '🍵',
    packageCount: 48,
    popular: false,
    cities: ['guwahati', 'kaziranga', 'majuli', 'tezpur']
  },
  {
    id: 'meghalaya',
    name: 'Meghalaya',
    tagline: 'Abode of Clouds',
    description: 'Living root bridges, waterfalls, and cleanest village',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
    icon: '☁️',
    packageCount: 38,
    popular: false,
    cities: ['shillong', 'cherrapunji', 'mawlynnong', 'dawki']
  },
  {
    id: 'arunachal-pradesh',
    name: 'Arunachal Pradesh',
    tagline: 'Land of Rising Sun',
    description: 'Monasteries, tribal culture, and pristine nature',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80',
    icon: '🌄',
    packageCount: 34,
    popular: false,
    cities: ['tawang', 'itanagar', 'ziro', 'bomdila']
  },
  {
    id: 'nagaland',
    name: 'Nagaland',
    tagline: 'Land of Festivals',
    description: 'Hornbill Festival, tribal heritage, scenic valleys',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
    icon: '🎪',
    packageCount: 28,
    popular: false,
    cities: ['kohima', 'dimapur', 'mon']
  },
  {
    id: 'manipur',
    name: 'Manipur',
    tagline: 'Jewel of India',
    description: 'Loktak Lake, cultural performances, natural beauty',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80',
    icon: '💎',
    packageCount: 26,
    popular: false,
    cities: ['imphal', 'loktak-lake', 'moreh']
  },
  {
    id: 'tripura',
    name: 'Tripura',
    tagline: 'Land of Diversity',
    description: 'Palaces, temples, and natural reserves',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80',
    icon: '🏰',
    packageCount: 22,
    popular: false,
    cities: ['agartala', 'ujjayanta-palace', 'neermahal']
  },
  {
    id: 'mizoram',
    name: 'Mizoram',
    tagline: 'Land of Blue Mountains',
    description: 'Scenic hills, bamboo forests, vibrant culture',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80',
    icon: '🏔️',
    packageCount: 20,
    popular: false,
    cities: ['aizawl', 'champhai', 'phawngpui']
  },
  {
    id: 'bihar',
    name: 'Bihar',
    tagline: 'Land of Buddha',
    description: 'Buddhist circuit, ancient universities, spiritual sites',
    image: 'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?w=800&q=80',
    icon: '☸️',
    packageCount: 36,
    popular: false,
    cities: ['bodhgaya', 'patna', 'nalanda', 'rajgir']
  },
  {
    id: 'jharkhand',
    name: 'Jharkhand',
    tagline: 'Land of Forests',
    description: 'Waterfalls, wildlife, tribal culture',
    image: 'https://images.unsplash.com/photo-1591362491742-0f08c523e6c2?w=800&q=80',
    icon: '🌲',
    packageCount: 32,
    popular: false,
    cities: ['ranchi', 'jamshedpur', 'netarhat', 'betla']
  },
  {
    id: 'chhattisgarh',
    name: 'Chhattisgarh',
    tagline: 'Soul of India',
    description: 'Waterfalls, caves, tribal heritage',
    image: 'https://images.unsplash.com/photo-1591362491742-0f08c523e6c2?w=800&q=80',
    icon: '💧',
    packageCount: 30,
    popular: false,
    cities: ['raipur', 'chitrakoot', 'bastar']
  },
  {
    id: 'haryana',
    name: 'Haryana',
    tagline: 'Land of Bhagavad Gita',
    description: 'Historical sites, religious places, modern cities',
    image: 'https://images.unsplash.com/photo-1582639590011-f5a8416d2462?w=800&q=80',
    icon: '📿',
    packageCount: 28,
    popular: false,
    cities: ['gurugram', 'kurukshetra', 'panchkula']
  },
  {
    id: 'delhi',
    name: 'Delhi',
    tagline: 'Capital of India',
    description: 'Historical monuments, diverse culture, street food',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80',
    icon: '🏛️',
    packageCount: 84,
    popular: true,
    cities: ['old-delhi', 'new-delhi', 'dwarka', 'noida']
  },
  {
    id: 'uttar-pradesh',
    name: 'Uttar Pradesh',
    tagline: 'Incredible India',
    description: 'Taj Mahal, spiritual cities, rich heritage',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80',
    icon: '🕌',
    packageCount: 118,
    popular: true,
    cities: ['agra', 'varanasi', 'lucknow', 'mathura', 'ayodhya', 'allahabad']
  },
  {
    id: 'puducherry',
    name: 'Puducherry',
    tagline: 'French Riviera of the East',
    description: 'French colonial charm, beaches, spirituality',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80',
    icon: '🥐',
    packageCount: 42,
    popular: false,
    cities: ['puducherry-city', 'auroville', 'karaikal']
  }
];

// City data with packages
export const indiaCities = {
  // Rajasthan
  jaipur: {
    id: 'jaipur',
    name: 'Jaipur',
    state: 'rajasthan',
    tagline: 'The Pink City',
    description: 'Explore majestic forts, palaces, and vibrant bazaars',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80',
    attractions: ['Hawa Mahal', 'Amber Fort', 'City Palace', 'Jantar Mantar'],
    bestTime: 'October to March',
    packages: 45
  },
  udaipur: {
    id: 'udaipur',
    name: 'Udaipur',
    state: 'rajasthan',
    tagline: 'City of Lakes',
    description: 'Romantic lake city with stunning palaces',
    image: 'https://images.unsplash.com/photo-1598517505314-08b8b2e8bcbb?w=800&q=80',
    attractions: ['Lake Pichola', 'City Palace', 'Jag Mandir', 'Saheliyon Ki Bari'],
    bestTime: 'September to March',
    packages: 38
  },
  jodhpur: {
    id: 'jodhpur',
    name: 'Jodhpur',
    state: 'rajasthan',
    tagline: 'The Blue City',
    description: 'Mighty Mehrangarh Fort and blue houses',
    image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80',
    attractions: ['Mehrangarh Fort', 'Jaswant Thada', 'Umaid Bhawan', 'Clock Tower'],
    bestTime: 'October to March',
    packages: 32
  },
  jaisalmer: {
    id: 'jaisalmer',
    name: 'Jaisalmer',
    state: 'rajasthan',
    tagline: 'Golden City',
    description: 'Desert safari and golden sandstone architecture',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80',
    attractions: ['Jaisalmer Fort', 'Sam Sand Dunes', 'Patwon Ki Haveli', 'Gadisar Lake'],
    bestTime: 'November to February',
    packages: 28
  },
  pushkar: {
    id: 'pushkar',
    name: 'Pushkar',
    state: 'rajasthan',
    tagline: 'Sacred City',
    description: 'Holy lake and annual camel fair',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&q=80',
    attractions: ['Pushkar Lake', 'Brahma Temple', 'Camel Fair', 'Savitri Temple'],
    bestTime: 'October to March',
    packages: 18
  },
  'mount-abu': {
    id: 'mount-abu',
    name: 'Mount Abu',
    state: 'rajasthan',
    tagline: 'Hill Station of Rajasthan',
    description: 'Cool retreat with Dilwara temples',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
    attractions: ['Dilwara Temples', 'Nakki Lake', 'Guru Shikhar', 'Achalgarh Fort'],
    bestTime: 'April to June',
    packages: 22
  },

  // Kerala
  munnar: {
    id: 'munnar',
    name: 'Munnar',
    state: 'kerala',
    tagline: 'Tea Garden Paradise',
    description: 'Rolling hills covered with tea plantations',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80',
    attractions: ['Tea Gardens', 'Mattupetty Dam', 'Eravikulam National Park', 'Echo Point'],
    bestTime: 'September to May',
    packages: 42
  },
  alleppey: {
    id: 'alleppey',
    name: 'Alleppey',
    state: 'kerala',
    tagline: 'Venice of the East',
    description: 'Backwater cruises and houseboat stays',
    image: 'https://images.unsplash.com/photo-1591995607653-251d85e42f1d?w=800&q=80',
    attractions: ['Houseboat Cruise', 'Backwaters', 'Alleppey Beach', 'Snake Boat Races'],
    bestTime: 'November to February',
    packages: 38
  },
  kochi: {
    id: 'kochi',
    name: 'Kochi',
    state: 'kerala',
    tagline: 'Queen of Arabian Sea',
    description: 'Historic port city with colonial charm',
    image: 'https://images.unsplash.com/photo-1569318600936-d6a58ba685a1?w=800&q=80',
    attractions: ['Fort Kochi', 'Chinese Fishing Nets', 'Mattancherry Palace', 'Marine Drive'],
    bestTime: 'October to February',
    packages: 35
  },

  // Add more cities following similar pattern...
  // For brevity, I'll add key cities for major states

  // Goa
  'north-goa': {
    id: 'north-goa',
    name: 'North Goa',
    state: 'goa',
    tagline: 'Party Central',
    description: 'Beaches, nightlife, and water sports',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80',
    attractions: ['Baga Beach', 'Calangute Beach', 'Anjuna Flea Market', 'Fort Aguada'],
    bestTime: 'November to February',
    packages: 52
  },
  'south-goa': {
    id: 'south-goa',
    name: 'South Goa',
    state: 'goa',
    tagline: 'Peaceful Paradise',
    description: 'Serene beaches and luxury resorts',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
    attractions: ['Palolem Beach', 'Colva Beach', 'Dudhsagar Falls', 'Cabo de Rama Fort'],
    bestTime: 'November to February',
    packages: 46
  },

  // Himachal Pradesh
  shimla: {
    id: 'shimla',
    name: 'Shimla',
    state: 'himachal-pradesh',
    tagline: 'Queen of Hills',
    description: 'Colonial charm and scenic beauty',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
    attractions: ['Mall Road', 'Jakhoo Temple', 'Christ Church', 'Kufri'],
    bestTime: 'March to June, December to January',
    packages: 48
  },
  manali: {
    id: 'manali',
    name: 'Manali',
    state: 'himachal-pradesh',
    tagline: 'Valley of Gods',
    description: 'Adventure sports and scenic landscapes',
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&q=80',
    attractions: ['Rohtang Pass', 'Solang Valley', 'Hadimba Temple', 'Old Manali'],
    bestTime: 'October to June',
    packages: 56
  },

  // Uttarakhand  
  nainital: {
    id: 'nainital',
    name: 'Nainital',
    state: 'uttarakhand',
    tagline: 'Lake District',
    description: 'Scenic lake town surrounded by mountains',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80',
    attractions: ['Naini Lake', 'Mall Road', 'Naina Peak', 'Snow View Point'],
    bestTime: 'March to June',
    packages: 38
  },
  rishikesh: {
    id: 'rishikesh',
    name: 'Rishikesh',
    state: 'uttarakhand',
    tagline: 'Yoga Capital',
    description: 'Spiritual hub and adventure sports',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&q=80',
    attractions: ['Lakshman Jhula', 'Ram Jhula', 'Beatles Ashram', 'River Rafting'],
    bestTime: 'September to June',
    packages: 42
  },

  // Karnataka
  bangalore: {
    id: 'bangalore',
    name: 'Bangalore',
    state: 'karnataka',
    tagline: 'Garden City',
    description: 'IT hub with pleasant climate',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80',
    attractions: ['Lalbagh', 'Cubbon Park', 'Bangalore Palace', 'ISKCON Temple'],
    bestTime: 'October to February',
    packages: 32
  },
  coorg: {
    id: 'coorg',
    name: 'Coorg',
    state: 'karnataka',
    tagline: 'Scotland of India',
    description: 'Coffee plantations and misty hills',
    image: 'https://images.unsplash.com/photo-1549171574-ca1a912a5506?w=800&q=80',
    attractions: ['Abbey Falls', 'Raja Seat', 'Dubare Elephant Camp', 'Talacauvery'],
    bestTime: 'October to March',
    packages: 44
  },

  // Add more cities as needed...
};

export default { indiaStates, indiaCities };
