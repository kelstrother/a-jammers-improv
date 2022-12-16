import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>A Jammer's Improv</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Improv</Link>
      </div>
    </nav>
  )
}
