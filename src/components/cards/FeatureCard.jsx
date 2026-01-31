import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

/**
 * FeatureCard Component
 * Displays a feature or benefit with icon, title, and description
 * Used in: HomePage (Why Choose Us section), About pages
 */
export default function FeatureCard({ icon: Icon, title, description, index = 0, variant = 'default' }) {
  const isGradient = variant === 'gradient';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="h-full"
    >
      <div className={`
        text-center p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col
        ${isGradient ? 'bg-gradient-to-br from-white to-gray-50' : 'bg-white'}
        group hover:-translate-y-2
      `}>
        {/* Icon Container */}
        <div className="mb-6 flex justify-center">
          <div className={`
            w-20 h-20 rounded-2xl flex items-center justify-center
            transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300
            ${isGradient 
              ? 'bg-gradient-to-br from-primary-600 to-orange-600 shadow-lg shadow-primary-200' 
              : 'bg-primary-100'
            }
          `}>
            <Icon 
              size={36} 
              className={isGradient ? 'text-white' : 'text-primary-600'}
              strokeWidth={2}
            />
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 leading-relaxed flex-grow">
          {description}
        </p>
        
        {/* Decorative Element */}
        <div className="mt-6 h-1 w-16 bg-gradient-to-r from-primary-600 to-orange-600 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </motion.div>
  );
}

FeatureCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  index: PropTypes.number,
  variant: PropTypes.oneOf(['default', 'gradient']),
};
