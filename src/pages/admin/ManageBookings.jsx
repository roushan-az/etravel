import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function ManageBookings() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link to="/admin" className="inline-flex items-center gap-2 text-primary-600 hover:underline mb-4">
            <ArrowLeft size={20} /> Back to Dashboard
          </Link>
          <h1 className="text-4xl font-display font-bold">Manage Bookings</h1>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8">
          <p className="text-gray-600">Bookings management interface</p>
        </div>
      </div>
    </div>
  );
}
