import { useState } from 'react';
import { Star, MapPin, Calendar, DollarSign, Filter, Search, Link } from 'lucide-react';
import './Destinations.css';

const Destinations = () => {
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedDuration, setSelectedDuration] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const allTours = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80',
      title: 'European Grand Tour',
      location: 'Paris, Rome, Barcelona',
      region: 'europe',
      duration: '12 Days',
      durationDays: 12,
      price: 3499,
      rating: 4.9,
      reviews: 328,
      highlights: ['Eiffel Tower', 'Colosseum', 'Sagrada Familia']
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80',
      title: 'Mystical Thailand',
      location: 'Bangkok, Phuket, Chiang Mai',
      region: 'asia',
      duration: '10 Days',
      durationDays: 10,
      price: 2799,
      rating: 4.8,
      reviews: 256,
      highlights: ['Grand Palace', 'Phi Phi Islands', 'Night Markets']
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&q=80',
      title: 'Iceland Aurora',
      location: 'Reykjavik, Golden Circle',
      region: 'europe',
      duration: '7 Days',
      durationDays: 7,
      price: 4299,
      rating: 5.0,
      reviews: 412,
      highlights: ['Northern Lights', 'Blue Lagoon', 'Geysers']
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80',
      title: 'Santorini Dreams',
      location: 'Santorini, Mykonos',
      region: 'europe',
      duration: '8 Days',
      durationDays: 8,
      price: 3899,
      rating: 4.9,
      reviews: 389,
      highlights: ['Sunset Views', 'White Villages', 'Beach Clubs']
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800&q=80',
      title: 'Machu Picchu Explorer',
      location: 'Cusco, Sacred Valley, Lima',
      region: 'americas',
      duration: '9 Days',
      durationDays: 9,
      price: 3299,
      rating: 4.9,
      reviews: 445,
      highlights: ['Machu Picchu', 'Rainbow Mountain', 'Lake Titicaca']
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80',
      title: 'Dubai Luxury',
      location: 'Dubai, Abu Dhabi',
      region: 'asia',
      duration: '6 Days',
      durationDays: 6,
      price: 4599,
      rating: 4.8,
      reviews: 298,
      highlights: ['Burj Khalifa', 'Desert Safari', 'Palm Jumeirah']
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
      title: 'Safari Adventure',
      location: 'Kenya & Tanzania',
      region: 'africa',
      duration: '11 Days',
      durationDays: 11,
      price: 5299,
      rating: 5.0,
      reviews: 567,
      highlights: ['Masai Mara', 'Serengeti', 'Ngorongoro Crater']
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      title: 'Norwegian Fjords',
      location: 'Oslo, Bergen, Flam',
      region: 'europe',
      duration: '10 Days',
      durationDays: 10,
      price: 4799,
      rating: 4.9,
      reviews: 334,
      highlights: ['Fjord Cruise', 'Viking Museums', 'Mountain Railway']
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1506260408121-e353d10b87c7?w=800&q=80',
      title: 'Japan Cherry Blossom',
      location: 'Tokyo, Kyoto, Osaka',
      region: 'asia',
      duration: '14 Days',
      durationDays: 14,
      price: 5899,
      rating: 5.0,
      reviews: 623,
      highlights: ['Cherry Blossoms', 'Temples', 'Mount Fuji']
    },
    {
      id: 10,
      image: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&q=80',
      title: 'Australian Wonders',
      location: 'Sydney, Melbourne, Cairns',
      region: 'oceania',
      duration: '15 Days',
      durationDays: 15,
      price: 6299,
      rating: 4.9,
      reviews: 412,
      highlights: ['Great Barrier Reef', 'Sydney Opera House', 'Uluru']
    },
    {
      id: 11,
      image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80',
      title: 'Hawaiian Paradise',
      location: 'Oahu, Maui, Big Island',
      region: 'americas',
      duration: '10 Days',
      durationDays: 10,
      price: 4499,
      rating: 4.8,
      reviews: 389,
      highlights: ['Volcanoes', 'Pearl Harbor', 'Beach Resorts']
    },
    {
      id: 12,
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
      title: 'Ancient Egypt',
      location: 'Cairo, Luxor, Aswan',
      region: 'africa',
      duration: '9 Days',
      durationDays: 9,
      price: 3799,
      rating: 4.9,
      reviews: 456,
      highlights: ['Pyramids', 'Nile Cruise', 'Valley of Kings']
    }
  ];

  const filteredTours = allTours.filter(tour => {
    const matchesRegion = selectedRegion === 'all' || tour.region === selectedRegion;
    const matchesDuration = selectedDuration === 'all' ||
      (selectedDuration === 'short' && tour.durationDays <= 7) ||
      (selectedDuration === 'medium' && tour.durationDays > 7 && tour.durationDays <= 12) ||
      (selectedDuration === 'long' && tour.durationDays > 12);
    const matchesPrice = priceRange === 'all' ||
      (priceRange === 'budget' && tour.price < 3000) ||
      (priceRange === 'mid' && tour.price >= 3000 && tour.price <= 5000) ||
      (priceRange === 'luxury' && tour.price > 5000);
    const matchesSearch = tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.location.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesRegion && matchesDuration && matchesPrice && matchesSearch;
  });

  return (
    <div className="destinations-page">
      <div className="destinations-hero">
        <div className="destinations-hero-overlay"></div>
        <div className="container">
          <h1 className="destinations-hero-title">Explore Destinations</h1>
          <p className="destinations-hero-subtitle">
            Discover extraordinary tours to the world's most captivating destinations
          </p>
        </div>
      </div>

      <div className="container py-80">
        <div className="destinations-layout">
          <aside className="destinations-sidebar">
            <div className="filter-section">
              <div className="filter-header">
                <Filter size={20} />
                <h3>Filter Tours</h3>
              </div>

              <div className="filter-group">
                <label className="filter-label">Search</label>
                <div className="search-box">
                  <Search size={18} />
                  <input
                    type="text"
                    placeholder="Search destinations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                  />
                </div>
              </div>

              <div className="filter-group">
                <label className="filter-label">Region</label>
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="filter-select"
                >
                  <option value="all">All Regions</option>
                  <option value="europe">Europe</option>
                  <option value="asia">Asia</option>
                  <option value="americas">Americas</option>
                  <option value="africa">Africa</option>
                  <option value="oceania">Oceania</option>
                </select>
              </div>

              <div className="filter-group">
                <label className="filter-label">Duration</label>
                <select
                  value={selectedDuration}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                  className="filter-select"
                >
                  <option value="all">All Durations</option>
                  <option value="short">Short (≤ 7 days)</option>
                  <option value="medium">Medium (8-12 days)</option>
                  <option value="long">Long (13+ days)</option>
                </select>
              </div>

              <div className="filter-group">
                <label className="filter-label">Price Range</label>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="filter-select"
                >
                  <option value="all">All Prices</option>
                  <option value="budget">Budget (&lt; $3000)</option>
                  <option value="mid">Mid-range ($3000-$5000)</option>
                  <option value="luxury">Luxury (&gt; $5000)</option>
                </select>
              </div>

              <button
                className="filter-reset"
                onClick={() => {
                  setSelectedRegion('all');
                  setSelectedDuration('all');
                  setPriceRange('all');
                  setSearchQuery('');
                }}
              >
                Reset Filters
              </button>
            </div>
          </aside>

          <div className="destinations-content">
            <div className="destinations-header">
              <p className="destinations-count">
                Showing {filteredTours.length} {filteredTours.length === 1 ? 'tour' : 'tours'}
              </p>
            </div>

            <div className="destinations-grid">
              {filteredTours.map((tour, index) => (
                <Link
                  to={`/tour/${tour.id}`}
                  key={tour.id}
                  className="destination-tour-card"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="destination-tour-image-wrapper">
                    <img src={tour.image} alt={tour.title} className="destination-tour-image" />
                    <div className="destination-tour-overlay">
                      <span className="destination-tour-badge">{tour.duration}</span>
                    </div>
                  </div>
                  <div className="destination-tour-content">
                    <div className="destination-tour-header">
                      <h3 className="destination-tour-title">{tour.title}</h3>
                      <div className="destination-tour-rating">
                        <Star size={14} fill="currentColor" />
                        <span>{tour.rating}</span>
                      </div>
                    </div>
                    <div className="destination-tour-location">
                      <MapPin size={14} />
                      <span>{tour.location}</span>
                    </div>
                    <div className="destination-tour-highlights">
                      {tour.highlights.slice(0, 3).map((highlight, idx) => (
                        <span key={idx} className="highlight-tag">{highlight}</span>
                      ))}
                    </div>
                    <div className="destination-tour-footer">
                      <div className="destination-tour-price">
                        <span className="price-from">From</span>
                        <span className="price-amount">${tour.price.toLocaleString()}</span>
                      </div>
                      <span className="destination-tour-link">View Details →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredTours.length === 0 && (
              <div className="no-results">
                <h3>No tours found</h3>
                <p>Try adjusting your filters or search query</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;