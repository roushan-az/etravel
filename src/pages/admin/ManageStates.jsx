import { useState } from 'react';
import { Link } from 'react-router-dom';
import { indiaStates } from '../../data/indiaData';
import { ArrowLeft, Plus, Edit, Trash2 } from 'lucide-react';

export default function ManageStates() {
  const [states, setStates] = useState(indiaStates);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link to="/admin" className="inline-flex items-center gap-2 text-primary-600 hover:underline mb-4">
              <ArrowLeft size={20} /> Back to Dashboard
            </Link>
            <h1 className="text-4xl font-display font-bold">Manage States</h1>
          </div>
          <button className="btn-primary flex items-center gap-2">
            <Plus size={20} /> Add State
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">State</th>
                <th className="px-6 py-4 text-left font-semibold">Packages</th>
                <th className="px-6 py-4 text-left font-semibold">Popular</th>
                <th className="px-6 py-4 text-left font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {states.map((state) => (
                <tr key={state.id} className="border-t hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{state.icon}</span>
                      <div>
                        <p className="font-semibold">{state.name}</p>
                        <p className="text-sm text-gray-600">{state.tagline}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">{state.packageCount}</td>
                  <td className="px-6 py-4">
                    {state.popular ? (
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Yes</span>
                    ) : (
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">No</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-blue-50 rounded-lg transition">
                        <Edit size={18} className="text-blue-600" />
                      </button>
                      <button className="p-2 hover:bg-red-50 rounded-lg transition">
                        <Trash2 size={18} className="text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
