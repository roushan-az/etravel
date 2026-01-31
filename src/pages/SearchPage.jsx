import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { tourPackages } from '../data/packageData';
import { Search, SlidersHorizontal, Star } from 'lucide-react';

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [selectedThemes, setSelectedThemes] = useState([]);
  const [sortBy, setSortBy] = useState('popular');

  let filtered = tourPackages.filter(pkg =>
    pkg.title.toLowerCase().includes(query.toLowerCase()) ||
    pkg.state.toLowerCase().includes(query.toLowerCase())
  );

  if (selectedThemes.length > 0) {
    filtered = filtered.filter(pkg =>
      pkg.theme?.some(t => selectedThemes.includes(t))
    );
  }

  filtered = filtered.filter(pkg => pkg.price >= priceRange[0] && pkg.price <= priceRange[1]);

  if (sortBy === 'price-low') filtered.sort((a, b) => a.price - b.price);
  else if (sortBy === 'price-high') filtered.sort((a, b) => b.price - a.price);
  else if (sortBy === 'rating') filtered.sort((a, b) => b.rating - a.rating);

  const themes = ['adventure', 'beach', 'heritage', 'spiritual', 'wildlife', 'trekking'];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-display font-bold mb-8">Search Packages</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="bg-white p-6 rounded-xl shadow-lg h-fit">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <SlidersHorizontal size={20} /> Filters
            </h3>

            <div className="mb-6">
              <label className="block font-semibold mb-3">Price Range</label>
              <input
                type="range"
                min="0"
                max="100000"
                step="1000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>₹{priceRange[0].toLocaleString()}</span>
                <span>₹{priceRange[1].toLocaleString()}</span>
              </div>
            </div>

            <div className="mb-6">
              <label className="block font-semibold mb-3">Themes</label>
              <div className="space-y-2">
                {themes.map((theme) => (
                  <label key={theme} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedThemes.includes(theme)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedThemes([...selectedThemes, theme]);
                        } else {
                          setSelectedThemes(selectedThemes.filter(t => t !== theme));
                        }
                      }}
                      className="w-4 h-4"
                    />
                    <span className="capitalize">{theme}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                setQuery('');
                setPriceRange([0, 100000]);
                setSelectedThemes([]);
                setSortBy('popular');
              }}
              className="w-full btn-secondary"
            >
              Reset Filters
            </button>
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search packages..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 outline-none transition"
                />
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 outline-none"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            <p className="text-gray-600 mb-6">{filtered.length} packages found</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filtered.map((pkg) => (
                <Link key={pkg.id} to={`/package/${pkg.id}`} className="card">
                  <img src={pkg.image} alt={pkg.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2 text-sm">
                      <span className="font-semibold text-primary-600 uppercase">{pkg.state}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-600">{pkg.duration}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 line-clamp-2">{pkg.title}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <Star size={16} className="text-yellow-500" fill="currentColor" />
                      <span className="font-semibold">{pkg.rating}</span>
                      <span className="text-sm text-gray-600">({pkg.reviews})</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold">₹{pkg.price.toLocaleString()}</span>
                      <span className="text-sm text-gray-400 line-through">₹{pkg.originalPrice.toLocaleString()}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
