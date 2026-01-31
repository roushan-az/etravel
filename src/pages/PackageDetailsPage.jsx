import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { tourPackages } from '../data/packageData';
import { Star, MapPin, Calendar, Users, ArrowLeft, Check, X } from 'lucide-react';

export default function PackageDetailsPage() {
  const { packageId } = useParams();
  const navigate = useNavigate();
  const pkg = tourPackages.find(p => p.id === packageId);
  const [activeTab, setActiveTab] = useState('overview');
  const [travelers, setTravelers] = useState(2);

  if (!pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Package Not Found</h1>
          <Link to="/search" className="btn-primary">Browse Packages</Link>
        </div>
      </div>
    );
  }

  const totalPrice = pkg.price * travelers;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="relative h-96 bg-gray-900">
        <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover opacity-70" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-8">
            <Link to="/search" className="inline-flex items-center gap-2 text-white mb-4 hover:underline">
              <ArrowLeft size={20} /> Back to Packages
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-4 py-1 bg-primary-600 text-white rounded-full font-semibold uppercase text-sm">
                {pkg.category}
              </span>
              <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                <Star size={16} className="text-yellow-400" fill="currentColor" />
                <span className="text-white font-semibold">{pkg.rating}</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">{pkg.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-white/90">
              <span className="flex items-center gap-2"><Calendar size={16} /> {pkg.duration}</span>
              <span className="flex items-center gap-2"><MapPin size={16} /> {pkg.state}</span>
              <span className="flex items-center gap-2"><Users size={16} /> {pkg.bestFor}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="bg-white rounded-xl shadow-lg mb-8">
              <div className="flex border-b">
                {['overview', 'highlights', 'inclusions'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 px-6 py-4 font-semibold capitalize transition ${
                      activeTab === tab
                        ? 'border-b-4 border-primary-600 text-primary-600'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="p-8">
                {activeTab === 'overview' && (
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Package Overview</h3>
                    <p className="text-gray-700 mb-6">
                      Experience the best of {pkg.title}. This carefully curated {pkg.duration} package
                      takes you through the most iconic destinations and hidden gems.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {pkg.theme?.map((theme, index) => (
                        <div key={index} className="px-4 py-2 bg-primary-50 text-primary-700 rounded-lg font-semibold text-center">
                          {theme}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'highlights' && (
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Tour Highlights</h3>
                    <ul className="space-y-3">
                      {pkg.highlights?.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check size={20} className="text-green-600 flex-shrink-0 mt-1" />
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === 'inclusions' && (
                  <div>
                    <h3 className="text-2xl font-bold mb-4">What's Included</h3>
                    <ul className="space-y-3 mb-8">
                      {pkg.inclusions?.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check size={20} className="text-green-600 flex-shrink-0 mt-1" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Customer Reviews</h3>
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl font-bold text-primary-600">{pkg.rating}</div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} className="text-yellow-400" fill={i < Math.floor(pkg.rating) ? 'currentColor' : 'none'} />
                    ))}
                  </div>
                  <p className="text-gray-600">{pkg.reviews} reviews</p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div>
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-gray-900">₹{pkg.price.toLocaleString()}</span>
                  <span className="text-lg text-gray-400 line-through">₹{pkg.originalPrice.toLocaleString()}</span>
                </div>
                <p className="text-sm text-gray-600">per person</p>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">Number of Travelers</label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setTravelers(Math.max(1, travelers - 1))}
                    className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-lg font-bold transition"
                  >
                    -
                  </button>
                  <span className="text-2xl font-bold">{travelers}</span>
                  <button
                    onClick={() => setTravelers(travelers + 1)}
                    className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-lg font-bold transition"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">₹{pkg.price.toLocaleString()} × {travelers} travelers</span>
                  <span className="font-semibold">₹{(pkg.price * travelers).toLocaleString()}</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-primary-600">₹{totalPrice.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => navigate(`/booking/${pkg.id}`)}
                className="w-full btn-primary mb-3"
              >
                Book Now
              </button>
              <button className="w-full btn-secondary">
                Request Callback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
