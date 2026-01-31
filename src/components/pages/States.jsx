import { india } from '../data/india'
import { Link } from 'react-router-dom'

export default function States() {
  return (
    <section className="content">
      <h2>Explore India by State</h2>
      <div className="grid">
        {Object.keys(india).map(state => (
          <Link key={state} to={`/cities/${state}`} className="card">
            {state}
          </Link>
        ))}
      </div>
    </section>
  )
}
