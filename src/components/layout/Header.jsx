import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X, MapPin, Phone, User } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-primary-600 to-orange-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <Phone size={14} />
                +91 123 456 7890
              </span>
              <span className="hidden md:flex items-center gap-2">
                <MapPin size={14} />
                Bangalore, India
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/admin" className="hover:underline flex items-center gap-1">
                <User size={14} />
                Admin
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-2xl">T</span>
            </div>
            <div className="hidden md:block">
              <h1 className="text-2xl font-display font-bold text-gray-900">eTourTravel</h1>
              <p className="text-xs text-gray-600">Explore Incredible India 🇮🇳</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-primary-600 font-semibold transition">Home</Link>
            <Link to="/states" className="text-gray-700 hover:text-primary-600 font-semibold transition">States</Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary-600 font-semibold transition">
                Packages
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link to="/search?theme=adventure" className="block px-4 py-3 hover:bg-primary-50 transition">Adventure</Link>
                <Link to="/search?theme=beach" className="block px-4 py-3 hover:bg-primary-50 transition">Beach</Link>
                <Link to="/search?theme=heritage" className="block px-4 py-3 hover:bg-primary-50 transition">Heritage</Link>
                <Link to="/search?theme=spiritual" className="block px-4 py-3 hover:bg-primary-50 transition">Spiritual</Link>
              </div>
            </div>
            <Link to="/search" className="text-gray-700 hover:text-primary-600 font-semibold transition">Search</Link>
          </nav>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 w-64">
            <Search size={20} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search destinations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent outline-none w-full text-sm"
            />
          </form>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t animate-slide-down">
          <div className="container mx-auto px-4 py-6">
            <form onSubmit={handleSearch} className="mb-6">
              <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-3">
                <Search size={20} className="text-gray-500" />
                <input
                  type="text"
                  placeholder="Search destinations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent outline-none w-full"
                />
              </div>
            </form>
            <nav className="flex flex-col gap-4">
              <Link to="/" className="py-3 border-b hover:text-primary-600 font-semibold transition">Home</Link>
              <Link to="/states" className="py-3 border-b hover:text-primary-600 font-semibold transition">States</Link>
              <Link to="/search" className="py-3 border-b hover:text-primary-600 font-semibold transition">Search Packages</Link>
              <Link to="/admin" className="py-3 border-b hover:text-primary-600 font-semibold transition">Admin Panel</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
