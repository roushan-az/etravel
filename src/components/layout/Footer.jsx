import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-primary-600 to-orange-600 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-display font-bold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-white/90 mb-6">Get exclusive deals, travel tips, and updates delivered to your inbox</p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 outline-none"
                required
              />
              <button type="submit" className="px-8 py-4 bg-gray-900 hover:bg-gray-800 rounded-lg font-semibold transition flex items-center justify-center gap-2">
                {subscribed ? '✓ Subscribed!' : <><Send size={20} /> Subscribe</>}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-orange-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">T</span>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold">eTourTravel</h3>
                <p className="text-sm text-gray-400">Explore India</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted partner for discovering the incredible diversity of India. 36 States, 200+ Cities, 500+ Curated Packages.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
              <li><Link to="/states" className="text-gray-400 hover:text-white transition">All States</Link></li>
              <li><Link to="/search" className="text-gray-400 hover:text-white transition">Search Packages</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
              <li><Link to="/admin" className="text-gray-400 hover:text-white transition">Admin Panel</Link></li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Popular Destinations</h4>
            <ul className="space-y-3">
              <li><Link to="/state/rajasthan" className="text-gray-400 hover:text-white transition">Rajasthan</Link></li>
              <li><Link to="/state/kerala" className="text-gray-400 hover:text-white transition">Kerala</Link></li>
              <li><Link to="/state/goa" className="text-gray-400 hover:text-white transition">Goa</Link></li>
              <li><Link to="/state/himachal-pradesh" className="text-gray-400 hover:text-white transition">Himachal Pradesh</Link></li>
              <li><Link to="/state/kashmir" className="text-gray-400 hover:text-white transition">Kashmir</Link></li>
              <li><Link to="/state/ladakh" className="text-gray-400 hover:text-white transition">Ladakh</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <Phone size={20} className="flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">Call Us</p>
                  <p>+91 123 456 7890</p>
                  <p>+91 098 765 4321</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Mail size={20} className="flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">Email Us</p>
                  <p>info@eTourTravel.com</p>
                  <p>support@eTourTravel.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">Office</p>
                  <p>123 Travel Street,</p>
                  <p>Bangalore, Karnataka 560001</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © 2026 eTourTravel India. All rights reserved. Built with ❤️ for Indian Tourism 🇮🇳
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition">Terms of Service</Link>
              <Link to="/refund" className="text-gray-400 hover:text-white transition">Refund Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
