import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';

export default function CheckoutPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-4xl font-display font-bold mb-8 text-center">Secure Payment</h1>
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <Lock size={48} className="mx-auto mb-4 text-green-600" />
            <p className="text-gray-600">Your payment information is secure and encrypted</p>
          </div>
          <button onClick={() => navigate('/confirmation')} className="w-full btn-primary">
            Complete Payment
          </button>
        </div>
      </div>
    </div>
  );
}
