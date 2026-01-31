import { useState } from 'react';
import { Link } from 'react-router-dom';
import { indiaStates } from '../data/indiaData';
import { Search, MapPin } from 'lucide-react';

export default function StatesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');

  const filteredStates = indiaStates.filter(state => {
    const matchesSearch = state.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter === 'all' || (filter === 'popular' && state.popular);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-display font-bold mb-4">Explore Indian States</h1>
          <p className="text-xl text-gray-600">Discover 36 states and union territories of India</p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search states..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:ring-2 focus:ring-primary-200 outline-none transition"
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-4 rounded-lg font-semibold transition ${
                filter === 'all' ? 'bg-primary-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              All States
            </button>
            <button
              onClick={() => setFilter('popular')}
              className={`px-6 py-4 rounded-lg font-semibold transition ${
                filter === 'popular' ? 'bg-primary-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Popular
            </button>
          </div>
        </div>

        {/* States Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStates.map((state) => (
            <Link key={state.id} to={`/state/${state.id}`} className="card group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={state.image}
                  alt={state.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                {state.popular && (
                  <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Popular
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="text-4xl mb-2">{state.icon}</div>
                  <h3 className="text-2xl font-bold mb-1">{state.name}</h3>
                  <p className="text-sm mb-2">{state.tagline}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin size={14} />
                    <span>{state.packageCount} Packages Available</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredStates.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600">No states found matching your search</p>
          </div>
        )}
      </div>
    </div>
  );
}
