import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Award,
  Compass,
  Users,
  Heart,
  Globe2,
  HeadphonesIcon,
  MapPin,
  Building2,
  ChevronRight,
  Quote,
} from 'lucide-react';

const stats = [
  { value: '15+', label: 'Years of Experience' },
  { value: '2', label: 'Offices — Delhi-NCR & Srinagar' },
  { value: '500+', label: 'Curated Packages' },
  { value: '36', label: 'States Covered' },
];

const whyChooseUs = [
  {
    icon: Award,
    title: 'A Decade of Experience',
    text: 'Established in 2010, with over a decade of industry experience serving travelers across India and beyond.',
  },
  {
    icon: Compass,
    title: 'Trusted DMC Partner',
    text: 'A trusted Destination Management Company for travel agents and travelers alike, across India and international destinations.',
  },
  {
    icon: Building2,
    title: 'Strong On-Ground Support',
    text: 'A reliable, well-connected on-ground team that keeps every itinerary running smoothly, wherever you travel.',
  },
  {
    icon: Heart,
    title: 'Personalised Service',
    text: 'Every itinerary is crafted around you — honeymoons, family holidays, pilgrimages, group tours and adventure trips alike.',
  },
  {
    icon: Globe2,
    title: 'A Vast, Vetted Network',
    text: 'Dedicated and reliable local partners and suppliers across India and international destinations.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Support, Start to Finish',
    text: 'Dedicated customer assistance before, during and after every trip — not just until the booking is confirmed.',
  },
];

const indiaDestinations = [
  'Kashmir', 'Himachal Pradesh', 'Uttarakhand', 'Rajasthan', 'Kerala',
  'North East India', 'Odisha', 'Tamil Nadu', 'Karnataka',
];

const internationalDestinations = [
  'Dubai', 'Singapore', 'Malaysia', 'Vietnam', 'Thailand', 'Bali', 'Mauritius', 'Sri Lanka', 'Maldives',
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('india');
  const destinations = activeTab === 'india' ? indiaDestinations : internationalDestinations;

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary-600 to-orange-600 text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,white,transparent_35%),radial-gradient(circle_at_80%_60%,white,transparent_30%)]" />
        <div className="container mx-auto px-4 py-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-sm font-semibold mb-6">
              About Tour Planners
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
              My Personal Travel Agent
            </h1>
            <p className="text-lg md:text-2xl text-white/90 leading-relaxed">
              A leading travel boutique firm, tour operator and Destination Management
              Company, building personalized, hassle-free travel experiences since 2010.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 -mt-1">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-center py-10 px-4 border-r last:border-r-0 border-gray-100"
              >
                <p className="text-3xl md:text-4xl font-display font-bold bg-gradient-to-r from-primary-600 to-orange-600 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-sm md:text-base text-gray-600 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
                <p>
                  Established in 2010, Tour Planners is a leading travel boutique firm, tour
                  operator, and Destination Management Company (DMC), delivering personalized
                  travel solutions for leisure travelers, corporate organizations and travel
                  agents across India and international destinations.
                </p>
                <p>
                  With offices in Delhi-NCR (Ghaziabad) and Srinagar, we have built a strong
                  reputation for providing reliable, customized, and complete travel solutions —
                  holiday packages, air ticketing, hotel bookings, car rental, cruise vacations,
                  visa assistance and corporate travel management. Our extensive network of
                  trusted hotels, transport providers, guides, and local partners enables us to
                  deliver exceptional service and hassle-free travel experiences.
                </p>
                <p>
                  Whether it's a honeymoon, family vacation, group tour, luxury escape,
                  pilgrimage, or adventure holiday, every itinerary is carefully crafted to
                  match our clients' preferences and tastes. We believe that every journey
                  should be smooth, memorable, and hassle-free — and by combining destination
                  expertise, strong supplier partnerships and personalized service, we continue
                  to build long-term relationships with travelers, travel agents, and corporate
                  clients alike.
                </p>
              </div>
            </div>

            {/* Pull quote card */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-primary-600 to-orange-600 rounded-2xl p-8 text-white shadow-xl sticky top-24">
                <Quote className="opacity-70 mb-4" size={36} />
                <p className="text-xl font-display leading-relaxed mb-6">
                  Every traveler deserves dedicated attention, expert guidance, and
                  thoughtfully crafted travel experiences.
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/20">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center font-bold">
                    T
                  </div>
                  <div>
                    <p className="font-semibold">Tour Planners</p>
                    <p className="text-sm text-white/80">My Personal Travel Agent</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Why Choose Tour Planners?
            </h2>
            <p className="text-gray-600 text-lg">
              We don't just book hotels or holiday packages — we create seamless experiences,
              end to end.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-600 to-orange-600 flex items-center justify-center mb-4">
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Destinations tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Where We Take You
            </h2>
            <p className="text-gray-600 text-lg">
              Deep expertise across India's most-loved destinations, plus a growing list of
              international escapes.
            </p>
          </div>

          <div className="flex justify-center gap-3 mb-8">
            <button
              onClick={() => setActiveTab('india')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === 'india'
                  ? 'bg-gradient-to-r from-primary-600 to-orange-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Within India
            </button>
            <button
              onClick={() => setActiveTab('international')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === 'international'
                  ? 'bg-gradient-to-r from-primary-600 to-orange-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              International
            </button>
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
          >
            {destinations.map((place) => (
              <span
                key={place}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 text-gray-700 hover:border-primary-600 hover:text-primary-600 transition-colors"
              >
                <MapPin size={16} />
                {place}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Connect with us */}
    \
      {/* CTA */}
    </div>
  );
}