import { Link } from 'react-router-dom';
import { Star, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

/**
 * PackageCard Component
 * Displays a tour package with image, details, pricing, and ratings
 * Used across multiple pages: HomePage, SearchPage, StatePage, CityPage
 */
export default function PackageCard({ pkg, index = 0, variant = 'default' }) {
  const isCompact = variant === 'compact';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="h-full"
    >
      <Link 
        to={`/package/${pkg.id}`} 
        className="card group h-full flex flex-col hover:shadow-2xl transition-all duration-300"
      >
        {/* Package Image */}
        <div className={`relative overflow-hidden ${isCompact ? 'h-48' : 'h-64'}`}>
          <img 
            src={pkg.image} 
            alt={pkg.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          
          {/* Discount Badge */}
          {pkg.originalPrice && pkg.originalPrice > pkg.price && (
            <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
              Save ₹{(pkg.originalPrice - pkg.price).toLocaleString()}
            </div>
          )}
          
          {/* Featured Badge */}
          {pkg.featured && (
            <div className="absolute top-4 left-4 bg-gradient-to-r from-primary-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
              ⭐ Featured
            </div>
          )}
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        {/* Package Details */}
        <div className="p-6 flex-grow flex flex-col">
          {/* State & Duration */}
          <div className="flex items-center gap-2 mb-3 text-sm">
            <span className="flex items-center gap-1 font-semibold text-primary-600 uppercase tracking-wide">
              <MapPin size={14} />
              {pkg.state}
            </span>
            <span className="text-gray-400">•</span>
            <span className="flex items-center gap-1 text-gray-600">
              <Calendar size={14} />
              {pkg.duration}
            </span>
          </div>
          
          {/* Package Title */}
          <h3 className={`font-bold mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors ${isCompact ? 'text-lg' : 'text-xl'}`}>
            {pkg.title}
          </h3>
          
          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-1">
              <Star size={16} className="text-yellow-500" fill="currentColor" />
              <span className="font-semibold text-gray-900">{pkg.rating}</span>
            </div>
            <span className="text-sm text-gray-600">
              ({pkg.reviews.toLocaleString()} reviews)
            </span>
          </div>
          
          {/* Pricing - Push to bottom */}
          <div className="mt-auto">
            <div className="flex items-baseline gap-2 mb-4">
              <span className={`font-bold text-gray-900 ${isCompact ? 'text-2xl' : 'text-3xl'}`}>
                ₹{pkg.price.toLocaleString()}
              </span>
              {pkg.originalPrice && pkg.originalPrice > pkg.price && (
                <span className={`text-gray-400 line-through ${isCompact ? 'text-base' : 'text-lg'}`}>
                  ₹{pkg.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            
            {/* CTA Button */}
            <button className="w-full btn-primary group-hover:shadow-lg transition-all">
              View Details
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

PackageCard.propTypes = {
  pkg: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    originalPrice: PropTypes.number,
    image: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
    featured: PropTypes.bool,
  }).isRequired,
  index: PropTypes.number,
  variant: PropTypes.oneOf(['default', 'compact']),
};
