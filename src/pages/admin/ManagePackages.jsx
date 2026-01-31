import { Link } from 'react-router-dom';
import { ArrowLeft, Plus } from 'lucide-react';

export default function ManagePackages() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link to="/admin" className="inline-flex items-center gap-2 text-primary-600 hover:underline mb-4">
              <ArrowLeft size={20} /> Back to Dashboard
            </Link>
            <h1 className="text-4xl font-display font-bold">Manage Packages</h1>
          </div>
          <button className="btn-primary flex items-center gap-2">
            <Plus size={20} /> Add Package
          </button>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8">
          <p className="text-gray-600">Package management interface</p>
        </div>
      </div>
    </div>
  );
}
