import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Package, ChevronRight } from 'lucide-react';
import PropTypes from 'prop-types';

/**
 * CityCard Component
 * Displays a city card with image, location, and package count
 * Used in: StatePage, SearchResults
 */
export default function CityCard({ city, index = 0, showState = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="h-full"
    >
      <Link 
        to={`/city/${city.id}`} 
        className="card group overflow-hidden h-full flex flex-col hover:shadow-2xl transition-all duration-300"
      >
        {/* City Image */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={city.image}
            alt={city.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          
          {/* Package Count Badge */}
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-gray-900 px-3 py-1.5 rounded-full text-sm font-semibold shadow-lg flex items-center gap-1">
            <Package size={14} />
            {city.packageCount || 0}
          </div>
          
          {/* City Name Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
            <h3 className="text-2xl font-bold mb-1 group-hover:text-primary-300 transition-colors">
              {city.name}
            </h3>
            {showState && city.state && (
              <p className="text-sm text-white/80 flex items-center gap-1">
                <MapPin size={14} />
                {city.state}
              </p>
            )}
          </div>
        </div>
        
        {/* City Details */}
        <div className="p-5 flex-grow flex flex-col">
          {/* Short Description */}
          {city.description && (
            <p className="text-gray-600 text-sm line-clamp-2 mb-4">
              {city.description}
            </p>
          )}
          
          {/* Best Time to Visit */}
          {city.bestTime && (
            <div className="mb-4">
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Best Time</p>
              <p className="text-sm font-semibold text-gray-700">{city.bestTime}</p>
            </div>
          )}
          
          {/* Top Attractions Preview */}
          {city.attractions && city.attractions.length > 0 && (
            <div className="mb-4">
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Top Attractions</p>
              <div className="flex flex-wrap gap-2">
                {city.attractions.slice(0, 3).map((attraction, idx) => (
                  <span 
                    key={idx}
                    className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                  >
                    {attraction}
                  </span>
                ))}
                {city.attractions.length > 3 && (
                  <span className="text-xs bg-primary-50 text-primary-600 px-2 py-1 rounded-full font-semibold">
                    +{city.attractions.length - 3} more
                  </span>
                )}
              </div>
            </div>
          )}
          
          {/* Explore Button */}
          <div className="mt-auto pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between text-primary-600 font-semibold group-hover:text-primary-700 transition-colors">
              <span>Explore {city.name}</span>
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

CityCard.propTypes = {
  city: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    state: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string.isRequired,
    packageCount: PropTypes.number,
    bestTime: PropTypes.string,
    attractions: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  index: PropTypes.number,
  showState: PropTypes.bool,
};
