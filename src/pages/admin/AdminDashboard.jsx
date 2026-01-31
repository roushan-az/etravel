import { Link } from 'react-router-dom';
import { Package, MapPin, Map, Users, TrendingUp, DollarSign } from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    { label: 'Total Packages', value: '500+', icon: Package, color: 'bg-blue-500' },
    { label: 'States', value: '36', icon: Map, color: 'bg-green-500' },
    { label: 'Cities', value: '200+', icon: MapPin, color: 'bg-purple-500' },
    { label: 'Bookings', value: '1,234', icon: Users, color: 'bg-orange-500' },
    { label: 'Revenue', value: '₹45L', icon: DollarSign, color: 'bg-red-500' },
    { label: 'Growth', value: '+25%', icon: TrendingUp, color: 'bg-teal-500' }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-display font-bold mb-8">Admin Dashboard</h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                </div>
                <div className={`w-16 h-16 ${stat.color} rounded-xl flex items-center justify-center`}>
                  <stat.icon size={32} className="text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link to="/admin/states" className="card p-8 text-center hover:scale-105 transition-transform">
            <Map size={48} className="mx-auto mb-4 text-primary-600" />
            <h3 className="text-xl font-bold">Manage States</h3>
          </Link>
          <Link to="/admin/cities" className="card p-8 text-center hover:scale-105 transition-transform">
            <MapPin size={48} className="mx-auto mb-4 text-primary-600" />
            <h3 className="text-xl font-bold">Manage Cities</h3>
          </Link>
          <Link to="/admin/packages" className="card p-8 text-center hover:scale-105 transition-transform">
            <Package size={48} className="mx-auto mb-4 text-primary-600" />
            <h3 className="text-xl font-bold">Manage Packages</h3>
          </Link>
          <Link to="/admin/bookings" className="card p-8 text-center hover:scale-105 transition-transform">
            <Users size={48} className="mx-auto mb-4 text-primary-600" />
            <h3 className="text-xl font-bold">View Bookings</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
