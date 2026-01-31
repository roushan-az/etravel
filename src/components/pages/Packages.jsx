import { Link } from 'react-router-dom'

export default function Packages() {
  return (
    <section className="content">
      <h2>Top-Rated Packages</h2>
      <div className="grid">
        {[1,2,3,4,5,6].map(id => (
          <div key={id} className="card">
            <h3>Premium Adventure Experience</h3>
            <p>⭐ 4.8 • 5 Days</p>
            <p className="price">₹24,999</p>
            <Link to={`/packages/${id}`} className="btn primary">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
