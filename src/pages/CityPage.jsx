import { useParams, Link } from 'react-router-dom';
import { indiaCities } from '../data/indiaData';
import { getPackagesByCity } from '../data/packageData';
import { MapPin, Clock, ArrowLeft } from 'lucide-react';

export default function CityPage() {
  const { cityId } = useParams();
  const city = indiaCities[cityId];
  const packages = getPackagesByCity(cityId);

  if (!city) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">City Not Found</h1>
          <Link to="/states" className="btn-primary">Back to States</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="relative h-96 bg-gray-900">
        <img src={city.image} alt={city.name} className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <Link to={`/state/${city.state}`} className="inline-flex items-center gap-2 text-white mb-4 hover:underline">
              <ArrowLeft size={20} /> Back
            </Link>
            <h1 className="text-5xl font-display font-bold text-white mb-4">{city.name}</h1>
            <p className="text-2xl text-white/90">{city.tagline}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-4">About {city.name}</h2>
            <p className="text-lg text-gray-700 mb-6">{city.description}</p>
            
            <h3 className="text-2xl font-bold mb-4">Top Attractions</h3>
            <ul className="grid grid-cols-2 gap-4">
              {city.attractions?.map((attraction, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-700">
                  <MapPin size={16} className="text-primary-600" />
                  {attraction}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg h-fit">
            <h3 className="text-xl font-bold mb-4">Travel Info</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 text-primary-600 mb-2">
                  <Clock size={20} />
                  <span className="font-semibold">Best Time to Visit</span>
                </div>
                <p className="text-gray-700">{city.bestTime}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-primary-600 mb-2">
                  <MapPin size={20} />
                  <span className="font-semibold">Available Packages</span>
                </div>
                <p className="text-gray-700">{city.packages} Tour Packages</p>
              </div>
            </div>
          </div>
        </div>

        {/* Packages */}
        <h2 className="text-3xl font-bold mb-8">Available Packages</h2>
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
      </div>
    </div>
  );
}
