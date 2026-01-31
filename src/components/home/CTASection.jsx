import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * CTASection Component
 * Call-to-action section with gradient background and multiple CTA buttons
 * Used in: HomePage, landing pages
 */
export default function CTASection({ 
  title, 
  description, 
  primaryCTA, 
  secondaryCTA,
  variant = 'gradient' 
}) {
  const backgroundClass = variant === 'gradient' 
    ? 'bg-gradient-to-r from-primary-600 to-orange-600'
    : variant === 'dark'
    ? 'bg-gray-900'
    : 'bg-primary-600';

  return (
    <section className={`py-20 ${backgroundClass} text-white`}>
      <div className="container mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
          {title}
        </h2>
        
        {/* Description */}
        {description && (
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Primary CTA */}
          {primaryCTA && (
            <Link 
              to={primaryCTA.link}
              className="px-8 py-4 bg-white text-primary-600 rounded-lg font-bold hover:bg-gray-100 transition-all inline-flex items-center gap-2 justify-center shadow-lg hover:shadow-xl hover:scale-105"
            >
              {primaryCTA.text}
              {primaryCTA.icon && <primaryCTA.icon size={20} />}
            </Link>
          )}
          
          {/* Secondary CTA */}
          {secondaryCTA && (
            <Link 
              to={secondaryCTA.link}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition-all inline-flex items-center gap-2 justify-center hover:scale-105"
            >
              {secondaryCTA.text}
              {secondaryCTA.icon && <secondaryCTA.icon size={20} />}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

CTASection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  primaryCTA: PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    icon: PropTypes.elementType,
  }),
  secondaryCTA: PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    icon: PropTypes.elementType,
  }),
  variant: PropTypes.oneOf(['gradient', 'dark', 'solid']),
};
