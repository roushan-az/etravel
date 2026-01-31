import { useParams, Link } from 'react-router-dom';
import { indiaStates, indiaCities } from '../data/indiaData';
import { getPackagesByState } from '../data/packageData';
import { MapPin, ArrowLeft } from 'lucide-react';

export default function StatePage() {
  const { stateId } = useParams();
  const state = indiaStates.find(s => s.id === stateId);
  const packages = getPackagesByState(stateId);

  if (!state) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">State Not Found</h1>
          <Link to="/states" className="btn-primary">Back to States</Link>
        </div>
      </div>
    );
  }

  const cities = state.cities ? state.cities.map(cityId => indiaCities[cityId]).filter(Boolean) : [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="relative h-96 bg-gray-900">
        <img src={state.image} alt={state.name} className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <Link to="/states" className="inline-flex items-center gap-2 text-white mb-4 hover:underline">
              <ArrowLeft size={20} /> Back to States
            </Link>
            <div className="text-6xl mb-4">{state.icon}</div>
            <h1 className="text-5xl font-display font-bold text-white mb-4">{state.name}</h1>
            <p className="text-2xl text-white/90 mb-2">{state.tagline}</p>
            <p className="text-white/80 max-w-2xl">{state.description}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Cities */}
        {cities.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Popular Cities in {state.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cities.map((city) => (
                <Link key={city.id} to={`/city/${city.id}`} className="card">
                  <img src={city.image} alt={city.name} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{city.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{city.tagline}</p>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin size={16} className="mr-1" />
                      {city.packages} Packages
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Packages */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Tour Packages ({packages.length})</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Link key={pkg.id} to={`/package/${pkg.id}`} className="card">
                <img src={pkg.image} alt={pkg.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 line-clamp-2">{pkg.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{pkg.duration}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold">₹{pkg.price.toLocaleString()}</span>
                    <span className="text-sm text-gray-400 line-through">₹{pkg.originalPrice.toLocaleString()}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
