import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, User, Heart } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const destinations = [
    { name: 'Europe', path: '/destinations?region=europe' },
    { name: 'Asia', path: '/destinations?region=asia' },
    { name: 'Americas', path: '/destinations?region=americas' },
    { name: 'Africa', path: '/destinations?region=africa' },
    { name: 'Oceania', path: '/destinations?region=oceania' }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">✦</span>
          <span className="logo-text">Wanderluxe</span>
        </Link>

        <div className={`navbar-menu ${isMobileMenuOpen ? 'navbar-menu-active' : ''}`}>
          <Link 
            to="/" 
            className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>

          <div 
            className="navbar-dropdown"
            onMouseEnter={() => setActiveDropdown('destinations')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="navbar-link navbar-dropdown-trigger">
              Destinations <ChevronDown size={16} />
            </button>
            {activeDropdown === 'destinations' && (
              <div className="navbar-dropdown-menu">
                {destinations.map((dest) => (
                  <Link 
                    key={dest.name}
                    to={dest.path} 
                    className="navbar-dropdown-item"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {dest.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link 
            to="/destinations" 
            className={`navbar-link ${location.pathname === '/destinations' ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            All Tours
          </Link>

          <Link 
            to="/about" 
            className={`navbar-link ${location.pathname === '/about' ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>

          <Link 
            to="/contact" 
            className={`navbar-link ${location.pathname === '/contact' ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>

        <div className="navbar-actions">
          <button className="navbar-icon-btn" aria-label="Search">
            <Search size={20} />
          </button>
          <button className="navbar-icon-btn" aria-label="Wishlist">
            <Heart size={20} />
          </button>
          <button className="navbar-icon-btn" aria-label="Account">
            <User size={20} />
          </button>
          <Link to="/contact" className="btn btn-primary btn-small">
            Book Now
          </Link>
        </div>

        <button 
          className="navbar-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
