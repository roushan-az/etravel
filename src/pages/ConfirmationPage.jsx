import { Link } from 'react-router-dom';
import { CheckCircle, Download, Mail } from 'lucide-react';

export default function ConfirmationPage() {
  const bookingId = 'TRP' + Math.random().toString(36).substr(2, 9).toUpperCase();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <CheckCircle size={80} className="mx-auto mb-6 text-green-600" />
          <h1 className="text-4xl font-display font-bold mb-4">Booking Confirmed!</h1>
          <p className="text-xl text-gray-600 mb-8">Your adventure awaits</p>
          
          <div className="bg-primary-50 rounded-lg p-6 mb-8">
            <p className="text-sm text-gray-600 mb-2">Booking ID</p>
            <p className="text-3xl font-bold text-primary-600">{bookingId}</p>
          </div>

          <p className="text-gray-600 mb-8">
            A confirmation email has been sent to your email address with all the booking details.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-secondary flex items-center gap-2 justify-center">
              <Download size={20} /> Download Receipt
            </button>
            <Link to="/" className="btn-primary flex items-center gap-2 justify-center">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
