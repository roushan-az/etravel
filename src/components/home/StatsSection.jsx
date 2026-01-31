import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

/**
 * StatsSection Component
 * Displays key statistics in a clean grid layout
 * Used in: HomePage
 */
export default function StatsSection({ stats }) {
  return (
    <section className="py-12 bg-white shadow-lg relative -mt-20 mx-4 md:mx-8 rounded-2xl z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center group"
            >
              {/* Icon (if provided) */}
              {stat.icon && (
                <div className="flex justify-center mb-3">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-100 to-orange-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <stat.icon size={28} className="text-primary-600" />
                  </div>
                </div>
              )}
              
              {/* Value */}
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              
              {/* Label */}
              <div className="text-sm md:text-base text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

StatsSection.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.elementType,
    })
  ).isRequired,
};
