import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import PropTypes from 'prop-types';

/**
 * ReviewCard Component
 * Displays a customer review with rating, text, and author info
 * Used in: PackageDetailsPage, HomePage testimonials
 */
export default function ReviewCard({ review, index = 0 }) {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? 'text-yellow-500' : 'text-gray-300'}
        fill={i < rating ? 'currentColor' : 'none'}
      />
    ));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="h-full"
    >
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 h-full flex flex-col border border-gray-100">
        {/* Quote Icon */}
        <div className="mb-4">
          <Quote size={32} className="text-primary-200" />
        </div>
        
        {/* Rating Stars */}
        <div className="flex gap-1 mb-4">
          {renderStars(review.rating)}
        </div>
        
        {/* Review Text */}
        <p className="text-gray-700 mb-6 flex-grow leading-relaxed">
          "{review.text}"
        </p>
        
        {/* Reviewer Info */}
        <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
          {/* Avatar */}
          <div className="flex-shrink-0">
            {review.avatar ? (
              <img 
                src={review.avatar} 
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-orange-400 flex items-center justify-center text-white font-bold text-lg">
                {review.name.charAt(0)}
              </div>
            )}
          </div>
          
          {/* Name & Date */}
          <div className="flex-grow">
            <p className="font-semibold text-gray-900">{review.name}</p>
            {review.date && (
              <p className="text-sm text-gray-500">{review.date}</p>
            )}
            {review.location && (
              <p className="text-xs text-gray-400">{review.location}</p>
            )}
          </div>
          
          {/* Verified Badge (optional) */}
          {review.verified && (
            <div className="flex-shrink-0">
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">
                ✓ Verified
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

ReviewCard.propTypes = {
  review: PropTypes.shape({
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    verified: PropTypes.bool,
  }).isRequired,
  index: PropTypes.number,
};
