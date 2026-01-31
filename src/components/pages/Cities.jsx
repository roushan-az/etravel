import { useParams, Link } from 'react-router-dom'
import { india } from '../data/india'

export default function Cities() {
  const { state } = useParams()

  return (
    <section className="content">
      <h2>{state}</h2>
      <div className="grid">
        {india[state].map(city => (
          <Link key={city} to="/packages" className="card">
            {city}
          </Link>
        ))}
      </div>
    </section>
  )
}
