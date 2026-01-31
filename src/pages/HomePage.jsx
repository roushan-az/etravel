import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { indiaStates } from '../data/indiaData';
import { tourPackages, getFeaturedPackages } from '../data/packageData';
import { ChevronRight, Star, MapPin, Calendar, Users, TrendingUp, Award, Shield, HeadphonesIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredStates = indiaStates.filter(state => state.popular).slice(0, 6);
  const featuredPackages = getFeaturedPackages().slice(0, 6);

  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920&q=80',
      title: 'Discover Incredible India',
      subtitle: '36 States • 200+ Cities • 500+ Packages',
      cta: 'Explore Now'
    },
    {
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1920&q=80',
      title: 'Adventure Awaits',
      subtitle: 'From Himalayas to Beaches',
      cta: 'Find Adventures'
    },
    {
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1920&q=80',
      title: 'Heritage & Culture',
      subtitle: 'Experience Rich Indian Heritage',
      cta: 'Explore Heritage'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="animate-fade-in">
      {/* Hero Carousel */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-3xl text-white"
                >
                  <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-2xl md:text-3xl mb-8 text-white/90">{slide.subtitle}</p>
                  <Link
                    to="/states"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 rounded-lg font-semibold text-lg transition-all hover:scale-105 shadow-xl"
                  >
                    {slide.cta} <ChevronRight />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white shadow-lg relative -mt-20 mx-4 md:mx-8 rounded-2xl z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">36+</div>
              <div className="text-gray-600">States Covered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">200+</div>
              <div className="text-gray-600">Cities</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-600">Tour Packages</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">50K+</div>
              <div className="text-gray-600">Happy Travelers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Popular Destinations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore India's most sought-after travel destinations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredStates.map((state, index) => (
              <motion.div
                key={state.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/state/${state.id}`} className="card group">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={state.image}
                      alt={state.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-primary-600 text-white rounded-full text-sm font-semibold">
                        {state.packageCount} Packages
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="text-5xl mb-3">{state.icon}</div>
                      <h3 className="text-3xl font-display font-bold mb-2">{state.name}</h3>
                      <p className="text-lg mb-3 text-white/90">{state.tagline}</p>
                      <p className="text-sm text-white/80 line-clamp-2">{state.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/states" className="btn-primary inline-flex items-center gap-2">
              View All States <ChevronRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Featured Tour Packages</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handpicked tours for the best travel experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/package/${pkg.id}`} className="card">
                  <div className="relative h-64 overflow-hidden">
                    <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Save ₹{(pkg.originalPrice - pkg.price).toLocaleString()}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3 text-sm">
                      <span className="font-semibold text-primary-600 uppercase">{pkg.state}</span>
                      <span className="text-gray-400">•</span>
                      <span className="flex items-center gap-1 text-gray-600">
                        <Calendar size={14} /> {pkg.duration}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 line-clamp-2">{pkg.title}</h3>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1 text-yellow-500">
                        <Star size={16} fill="currentColor" />
                        <span className="font-semibold text-gray-900">{pkg.rating}</span>
                      </div>
                      <span className="text-sm text-gray-600">({pkg.reviews} reviews)</span>
                    </div>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-3xl font-bold text-gray-900">
                        ₹{pkg.price.toLocaleString()}
                      </span>
                      <span className="text-lg text-gray-400 line-through">
                        ₹{pkg.originalPrice.toLocaleString()}
                      </span>
                    </div>
                    <button className="w-full btn-primary">View Details</button>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/search" className="btn-primary inline-flex items-center gap-2">
              Browse All Packages <ChevronRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Why Choose eTourTravel?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: 'Expert Curated', desc: 'Handpicked tours by travel experts' },
              { icon: Shield, title: 'Safe & Secure', desc: 'Verified partners and secure booking' },
              { icon: TrendingUp, title: 'Best Prices', desc: 'Guaranteed lowest prices with deals' },
              { icon: HeadphonesIcon, title: '24/7 Support', desc: 'Round-the-clock customer assistance' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon size={36} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to Explore India?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Start your incredible journey today with our curated tour packages
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/states" className="px-8 py-4 bg-white text-primary-600 rounded-lg font-bold hover:bg-gray-100 transition-all inline-flex items-center gap-2 justify-center">
              Explore Destinations <MapPin size={20} />
            </Link>
            <Link to="/search" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition-all inline-flex items-center gap-2 justify-center">
              Find Packages <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
