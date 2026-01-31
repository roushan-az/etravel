import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ScrollToTop from './components/layout/ScrollToTop';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import StatesPage from './pages/StatesPage';
import StatePage from './pages/StatePage';
import CityPage from './pages/CityPage';
import PackageDetailsPage from './pages/PackageDetailsPage';
import SearchPage from './pages/SearchPage';
import BookingPage from './pages/BookingPage';
import CheckoutPage from './pages/CheckoutPage';
import ConfirmationPage from './pages/ConfirmationPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageStates from './pages/admin/ManageStates';
import ManageCities from './pages/admin/ManageCities';
import ManagePackages from './pages/admin/ManagePackages';
import ManageBookings from './pages/admin/ManageBookings';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load
    setTimeout(() => setLoading(false), 500);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary-600"></div>
      </div>
    );
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/states" element={<StatesPage />} />
            <Route path="/state/:stateId" element={<StatePage />} />
            <Route path="/city/:cityId" element={<CityPage />} />
            <Route path="/package/:packageId" element={<PackageDetailsPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/booking/:packageId" element={<BookingPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/confirmation" element={<ConfirmationPage />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/states" element={<ManageStates />} />
            <Route path="/admin/cities" element={<ManageCities />} />
            <Route path="/admin/packages" element={<ManagePackages />} />
            <Route path="/admin/bookings" element={<ManageBookings />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
