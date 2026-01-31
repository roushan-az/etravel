import { Link } from 'react-router-dom'

export default function PackageDetail() {
  return (
    <section className="content">
      <h2>Himalayan Adventure Trek</h2>
      <p>Verified guides • Hand-crafted itinerary</p>
      <h3>₹24,999</h3>
      <Link to="/checkout" className="btn primary">
        Book Now
      </Link>
    </section>
  )
}
