import { motion } from "framer-motion"

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[90vh] bg-gradient-to-br from-orange-500 to-orange-400">
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .8 }}
              className="text-5xl font-extrabold leading-tight"
            >
              Expert-Led Travel Experiences Across India
            </motion.h1>

            <p className="mt-6 text-lg text-white/90">
              Curated adventures • Trusted guides • Best prices guaranteed
            </p>

            <div className="mt-10 flex gap-4">
              <button className="bg-white text-ink px-8 py-4 rounded-2xl font-semibold shadow-card hover:scale-[1.03] transition">
                Explore Packages
              </button>
              <button className="border border-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-ink transition">
                Weekend Getaways
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            "1M+ Travelers",
            "100% India",
            "Hand-Picked Guides",
            "Best Price Promise"
          ].map(item => (
            <div key={item} className="font-semibold text-sm">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* PACKAGE RAIL */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">
            Top Experiences in India
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1,2,3,4].map(i => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-card overflow-hidden hover:-translate-y-1 transition"
              >
                <div className="h-48 bg-gray-200" />
                
                <div className="p-6">
                  <h3 className="font-semibold text-lg">
                    Himalayan Adventure Trek
                  </h3>

                  <p className="text-sm text-muted mt-2">
                    5 Days • ⭐ 4.8 • 1,200 Reviews
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-bold text-brand">
                      ₹24,999
                    </span>
                    <button className="text-sm font-semibold text-brand hover:underline">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
