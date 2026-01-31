import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';
import PropTypes from 'prop-types';

/**
 * NewsletterSection Component
 * Email subscription form with success state
 * Used in: HomePage, Footer
 */
export default function NewsletterSection({ 
  title = "Subscribe to Our Newsletter",
  description = "Get the latest travel deals and inspiration delivered to your inbox",
  variant = 'standalone'
}) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    // Simulate subscription
    setTimeout(() => {
      setSubscribed(true);
      setEmail('');
    }, 500);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setSubscribed(false);
    }, 3000);
  };

  const isStandalone = variant === 'standalone';

  return (
    <div className={isStandalone ? 'py-16 bg-gradient-to-br from-primary-50 to-orange-50' : ''}>
      <div className={isStandalone ? 'container mx-auto px-4' : ''}>
        <div className={`${isStandalone ? 'max-w-2xl mx-auto text-center bg-white rounded-2xl shadow-xl p-8 md:p-12' : ''}`}>
          {/* Icon */}
          {isStandalone && (
            <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail size={36} className="text-white" />
            </div>
          )}
          
          {/* Title */}
          <h3 className={`font-bold mb-3 ${isStandalone ? 'text-3xl text-gray-900' : 'text-xl text-white'}`}>
            {title}
          </h3>
          
          {/* Description */}
          {description && (
            <p className={`mb-6 ${isStandalone ? 'text-lg text-gray-600' : 'text-sm text-white/80'}`}>
              {description}
            </p>
          )}
          
          {/* Form */}
          {!subscribed ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`flex-1 px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors ${
                    error 
                      ? 'border-red-500 focus:border-red-600' 
                      : isStandalone
                      ? 'border-gray-300 focus:border-primary-600'
                      : 'border-white/30 bg-white/10 text-white placeholder-white/60 focus:border-white'
                  }`}
                />
                <button
                  type="submit"
                  className={`px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 ${
                    isStandalone
                      ? 'bg-gradient-to-r from-primary-600 to-orange-600 text-white hover:shadow-lg'
                      : 'bg-white text-primary-600 hover:bg-gray-100'
                  }`}
                >
                  Subscribe
                </button>
              </div>
              
              {/* Error Message */}
              {error && (
                <p className="text-red-500 text-sm text-left">{error}</p>
              )}
            </form>
          ) : (
            /* Success State */
            <div className={`flex items-center justify-center gap-3 py-3 ${isStandalone ? 'text-green-600' : 'text-white'}`}>
              <CheckCircle size={24} />
              <span className="font-semibold text-lg">Successfully subscribed!</span>
            </div>
          )}
          
          {/* Privacy Note */}
          {isStandalone && !subscribed && (
            <p className="text-sm text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

NewsletterSection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  variant: PropTypes.oneOf(['standalone', 'embedded']),
};
