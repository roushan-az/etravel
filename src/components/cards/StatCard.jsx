import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

/**
 * StatCard Component
 * Displays a statistic with number and label
 * Used in: HomePage (stats section), AdminDashboard
 */
export default function StatCard({ value, label, icon: Icon, index = 0, variant = 'default' }) {
  const isCompact = variant === 'compact';
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="h-full"
    >
      <div className={`
        text-center group hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-center
        ${isCompact ? 'p-4' : 'p-6'}
      `}>
        {/* Icon (if provided) */}
        {Icon && (
          <div className="flex justify-center mb-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-100 to-orange-100 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Icon size={24} className="text-primary-600" />
            </div>
          </div>
        )}
        
        {/* Value */}
        <div className={`
          font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-orange-600 mb-2
          group-hover:scale-110 transition-transform
          ${isCompact ? 'text-3xl' : 'text-4xl md:text-5xl'}
        `}>
          {value}
        </div>
        
        {/* Label */}
        <div className={`
          text-gray-600 font-medium
          ${isCompact ? 'text-sm' : 'text-base'}
        `}>
          {label}
        </div>
      </div>
    </motion.div>
  );
}

StatCard.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
  index: PropTypes.number,
  variant: PropTypes.oneOf(['default', 'compact']),
};
