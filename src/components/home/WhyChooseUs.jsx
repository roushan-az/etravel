import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

/**
 * WhyChooseUs Component
 * Displays company benefits and features in a grid
 * Used in: HomePage
 */
export default function WhyChooseUs({ title = "Why Choose Us?", features }) {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-orange-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="section-title">{title}</h2>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
            >
              {/* Icon Container */}
              <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-primary-200">
                <feature.icon size={36} className="text-white" strokeWidth={2} />
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
              
              {/* Decorative Element */}
              <div className="mt-6 h-1 w-16 bg-gradient-to-r from-primary-600 to-orange-600 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

WhyChooseUs.propTypes = {
  title: PropTypes.string,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};
