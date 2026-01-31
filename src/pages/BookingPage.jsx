import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { tourPackages } from '../data/packageData';
import { Calendar, Users, Check } from 'lucide-react';

export default function BookingPage() {
  const { packageId } = useParams();
  const navigate = useNavigate();
  const pkg = tourPackages.find(p => p.id === packageId);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    travelers: 2,
    travelDate: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  if (!pkg) return null;

  const total = pkg.price * formData.travelers;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      navigate('/confirmation', { state: { booking: formData, package: pkg, total } });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-display font-bold mb-8 text-center">Complete Your Booking</h1>

        {/* Progress */}
        <div className="flex justify-between mb-12">
          {[1, 2, 3].map((num) => (
            <div key={num} className="flex items-center flex-1">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                step >= num ? 'bg-primary-600 text-white' : 'bg-gray-300 text-gray-600'
              }`}>
                {step > num ? <Check size={24} /> : num}
              </div>
              {num < 3 && <div className={`flex-1 h-1 mx-4 ${step > num ? 'bg-primary-600' : 'bg-gray-300'}`} />}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Select Date & Travelers</h2>
              <div className="space-y-6">
                <div>
                  <label className="block font-semibold mb-2">Travel Date</label>
                  <input
                    type="date"
                    required
                    value={formData.travelDate}
                    onChange={(e) => setFormData({...formData, travelDate: e.target.value})}
                    min={new Date().toISOString().split('T')[0]}
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-2">Number of Travelers</label>
                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() => setFormData({...formData, travelers: Math.max(1, formData.travelers - 1)})}
                      className="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-lg font-bold"
                    >
                      -
                    </button>
                    <span className="text-3xl font-bold">{formData.travelers}</span>
                    <button
                      type="button"
                      onClick={() => setFormData({...formData, travelers: formData.travelers + 1})}
                      className="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-lg font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Personal Details</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="input-field"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="input-field"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="input-field"
                />
                <textarea
                  placeholder="Special Requests (Optional)"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows="4"
                  className="input-field"
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Review & Confirm</h2>
              <div className="space-y-4 mb-8">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-bold mb-2">{pkg.title}</h3>
                  <p className="text-gray-600">{pkg.duration}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p><strong>Name:</strong> {formData.name}</p>
                  <p><strong>Email:</strong> {formData.email}</p>
                  <p><strong>Phone:</strong> {formData.phone}</p>
                  <p><strong>Travel Date:</strong> {formData.travelDate}</p>
                  <p><strong>Travelers:</strong> {formData.travelers}</p>
                </div>
                <div className="p-4 bg-primary-50 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span>Price per person</span>
                    <span>₹{pkg.price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Number of travelers</span>
                    <span>× {formData.travelers}</span>
                  </div>
                  <div className="border-t pt-2 mt-2 flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span className="text-primary-600">₹{total.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex gap-4">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="btn-secondary flex-1"
              >
                Back
              </button>
            )}
            <button type="submit" className="btn-primary flex-1">
              {step === 3 ? 'Confirm Booking' : 'Next'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
