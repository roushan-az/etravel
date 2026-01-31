import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Star, MapPin, Clock, Users, Calendar, Check, X, ChevronLeft, ChevronRight,
  Wifi, Coffee, Camera, Utensils, Bed, Shield
} from 'lucide-react';
import './TourDetails.css';

const TourDetails = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState('');

  const tourData = {
    id: 1,
    title: 'European Grand Tour',
    location: 'Paris, Rome, Barcelona',
    rating: 4.9,
    reviews: 328,
    price: 3499,
    duration: '12 Days / 11 Nights',
    groupSize: '12-16 People',
    images: [
      'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200&q=80',
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80',
      'https://images.unsplash.com/photo-1525874684015-58379d421a52?w=1200&q=80',
      'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1200&q=80'
    ],
    description: 'Experience the epitome of European elegance on this comprehensive 12-day journey through three of the continent\'s most iconic cities. From the romantic streets of Paris to the ancient wonders of Rome and the vibrant culture of Barcelona, this tour offers an unforgettable adventure through history, art, and cuisine.',
    highlights: [
      'Visit the Eiffel Tower and enjoy a Seine River cruise',
      'Explore the Colosseum and Vatican Museums with skip-the-line access',
      'Discover Gaudí\'s architectural masterpieces in Barcelona',
      'Enjoy authentic French, Italian, and Spanish cuisine',
      'Stay in 4-star centrally located hotels',
      'Expert local guides in each city'
    ],
    included: [
      '11 nights accommodation in 4-star hotels',
      'Daily breakfast and 8 dinners',
      'All entrance fees to mentioned attractions',
      'Professional English-speaking guide',
      'Airport transfers',
      'High-speed train tickets between cities',
      'Travel insurance'
    ],
    notIncluded: [
      'International flights',
      'Lunches and drinks',
      'Personal expenses',
      'Tips and gratuities',
      'Additional activities not mentioned'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Paris',
        description: 'Welcome to Paris! Transfer to your hotel and enjoy a welcome dinner at a traditional French bistro.'
      },
      {
        day: 2,
        title: 'Paris City Tour',
        description: 'Visit the Eiffel Tower, Louvre Museum, and take a romantic Seine River cruise. Evening at leisure.'
      },
      {
        day: 3,
        title: 'Versailles & Free Time',
        description: 'Day trip to the magnificent Palace of Versailles. Afternoon free to explore Paris at your own pace.'
      },
      {
        day: 4,
        title: 'Paris to Rome',
        description: 'Morning high-speed train to Rome. Afternoon walking tour of the historic city center including Trevi Fountain.'
      },
      {
        day: 5,
        title: 'Ancient Rome',
        description: 'Guided tour of the Colosseum, Roman Forum, and Palatine Hill. Afternoon visit to the Pantheon.'
      },
      {
        day: 6,
        title: 'Vatican & Trastevere',
        description: 'Skip-the-line tour of Vatican Museums and Sistine Chapel. Evening in charming Trastevere district.'
      },
      {
        day: 7,
        title: 'Free Day in Rome',
        description: 'Day at leisure to explore Rome\'s hidden gems or join optional tours.'
      },
      {
        day: 8,
        title: 'Rome to Barcelona',
        description: 'Fly to Barcelona. Afternoon walking tour of Gothic Quarter and La Rambla.'
      },
      {
        day: 9,
        title: 'Gaudí\'s Barcelona',
        description: 'Visit Sagrada Familia, Park Güell, and Casa Batlló. Evening tapas tour.'
      },
      {
        day: 10,
        title: 'Montserrat Day Trip',
        description: 'Excursion to the stunning Montserrat monastery and mountain. Return for farewell dinner.'
      },
      {
        day: 11,
        title: 'Barcelona Beaches & Markets',
        description: 'Visit La Boqueria market and relax at Barceloneta beach. Final evening at leisure.'
      },
      {
        day: 12,
        title: 'Departure',
        description: 'Transfer to the airport for your departure flight. End of an unforgettable journey.'
      }
    ],
    amenities: [
      { icon: Wifi, name: 'Free WiFi' },
      { icon: Coffee, name: 'Daily Breakfast' },
      { icon: Camera, name: 'Photo Opportunities' },
      { icon: Utensils, name: 'Authentic Cuisine' },
      { icon: Bed, name: '4-Star Hotels' },
      { icon: Shield, name: 'Travel Insurance' }
    ],
    availableDates: [
      '2026-04-15',
      '2026-05-10',
      '2026-06-20',
      '2026-07-15',
      '2026-08-10',
      '2026-09-15'
    ]
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % tourData.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + tourData.images.length) % tourData.images.length);
  };

  return (
    <div className="tour-details-page">
      <div className="tour-details-gallery">
        <div className="gallery-main">
          <img src={tourData.images[currentImageIndex]} alt={tourData.title} />
          <button className="gallery-nav gallery-prev" onClick={prevImage}>
            <ChevronLeft size={24} />
          </button>
          <button className="gallery-nav gallery-next" onClick={nextImage}>
            <ChevronRight size={24} />
          </button>
        </div>
        <div className="gallery-thumbnails">
          {tourData.images.map((img, index) => (
            <button
              key={index}
              className={`gallery-thumbnail ${index === currentImageIndex ? 'active' : ''}`}
              onClick={() => setCurrentImageIndex(index)}
            >
              <img src={img} alt={`View ${index + 1}`} />
            </button>
          ))}
        </div>
      </div>

      <div className="container py-80">
        <div className="tour-details-layout">
          <div className="tour-details-main">
            <div className="tour-details-header">
              <div>
                <h1 className="tour-details-title">{tourData.title}</h1>
                <div className="tour-details-meta">
                  <div className="tour-meta-item">
                    <MapPin size={18} />
                    <span>{tourData.location}</span>
                  </div>
                  <div className="tour-meta-item">
                    <Star size={18} fill="currentColor" />
                    <span>{tourData.rating} ({tourData.reviews} reviews)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="tour-quick-info">
              <div className="quick-info-item">
                <Clock size={24} />
                <div>
                  <span className="quick-info-label">Duration</span>
                  <span className="quick-info-value">{tourData.duration}</span>
                </div>
              </div>
              <div className="quick-info-item">
                <Users size={24} />
                <div>
                  <span className="quick-info-label">Group Size</span>
                  <span className="quick-info-value">{tourData.groupSize}</span>
                </div>
              </div>
              <div className="quick-info-item">
                <Calendar size={24} />
                <div>
                  <span className="quick-info-label">Next Departure</span>
                  <span className="quick-info-value">April 15, 2026</span>
                </div>
              </div>
            </div>

            <div className="tour-section">
              <h2 className="tour-section-title">Overview</h2>
              <p className="tour-description">{tourData.description}</p>
            </div>

            <div className="tour-section">
              <h2 className="tour-section-title">Tour Highlights</h2>
              <ul className="tour-highlights-list">
                {tourData.highlights.map((highlight, index) => (
                  <li key={index}>
                    <Check size={20} />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="tour-section">
              <h2 className="tour-section-title">Amenities</h2>
              <div className="tour-amenities">
                {tourData.amenities.map((amenity, index) => (
                  <div key={index} className="amenity-item">
                    <amenity.icon size={28} />
                    <span>{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="tour-section">
              <h2 className="tour-section-title">Detailed Itinerary</h2>
              <div className="tour-itinerary">
                {tourData.itinerary.map((day) => (
                  <div key={day.day} className="itinerary-item">
                    <div className="itinerary-day">Day {day.day}</div>
                    <div className="itinerary-content">
                      <h3 className="itinerary-title">{day.title}</h3>
                      <p className="itinerary-description">{day.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="tour-section">
              <div className="inclusion-grid">
                <div className="inclusion-box">
                  <h3 className="inclusion-title">
                    <Check className="inclusion-icon included" />
                    What's Included
                  </h3>
                  <ul className="inclusion-list">
                    {tourData.included.map((item, index) => (
                      <li key={index}>
                        <Check size={16} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="inclusion-box">
                  <h3 className="inclusion-title">
                    <X className="inclusion-icon not-included" />
                    What's Not Included
                  </h3>
                  <ul className="inclusion-list not-included-list">
                    {tourData.notIncluded.map((item, index) => (
                      <li key={index}>
                        <X size={16} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="tour-details-sidebar">
            <div className="booking-card">
              <div className="booking-price">
                <span className="booking-price-label">From</span>
                <span className="booking-price-amount">${tourData.price.toLocaleString()}</span>
                <span className="booking-price-per">per person</span>
              </div>

              <div className="booking-form">
                <div className="form-group">
                  <label>Select Date</label>
                  <select
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="form-select"
                  >
                    <option value="">Choose a date</option>
                    {tourData.availableDates.map((date) => (
                      <option key={date} value={date}>
                        {new Date(date).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>Number of Travelers</label>
                  <input
                    type="number"
                    min="1"
                    max="16"
                    defaultValue="2"
                    className="form-input"
                  />
                </div>

                <Link to="/contact" className="btn btn-primary btn-full">
                  Book Now
                </Link>
                <button className="btn btn-secondary btn-full">
                  Add to Wishlist
                </button>
              </div>

              <div className="booking-contact">
                <p>Need help planning?</p>
                <Link to="/contact">Contact our travel experts</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetails;