import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Package, ChevronRight } from 'lucide-react';
import PropTypes from 'prop-types';

/**
 * StateCard Component
 * Displays a state/destination card with image, icon, and package count
 * Used in: HomePage, StatesPage
 */
export default function StateCard({ state, index = 0, variant = 'default' }) {
  const isCompact = variant === 'compact';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="h-full"
    >
      <Link 
        to={`/state/${state.id}`} 
        className="card group overflow-hidden h-full flex flex-col hover:shadow-2xl transition-all duration-300"
      >
        {/* State Image with Overlay */}
        <div className={`relative overflow-hidden ${isCompact ? 'h-64' : 'h-80'}`}>
          <img
            src={state.image}
            alt={state.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
          
          {/* Popular Badge */}
          {state.popular && (
            <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-1">
              <span>🔥</span> Popular
            </div>
          )}
          
          {/* Package Count Badge */}
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-gray-900 px-3 py-1.5 rounded-full text-sm font-semibold shadow-lg flex items-center gap-1">
            <Package size={14} />
            {state.packageCount} Packages
          </div>
          
          {/* State Info - Bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            {/* Emoji Icon */}
            <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
              {state.icon}
            </div>
            
            {/* State Name */}
            <h3 className="text-3xl font-display font-bold mb-2 group-hover:text-primary-300 transition-colors">
              {state.name}
            </h3>
            
            {/* Tagline */}
            <p className="text-lg mb-3 text-white/90 font-medium">
              {state.tagline}
            </p>
            
            {/* Description */}
            {!isCompact && (
              <p className="text-sm text-white/80 line-clamp-2 mb-3">
                {state.description}
              </p>
            )}
            
            {/* Explore Button */}
            <div className="flex items-center gap-2 text-primary-300 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span>Explore {state.name}</span>
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

StateCard.propTypes = {
  state: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    packageCount: PropTypes.number.isRequired,
    popular: PropTypes.bool,
  }).isRequired,
  index: PropTypes.number,
  variant: PropTypes.oneOf(['default', 'compact']),
};
