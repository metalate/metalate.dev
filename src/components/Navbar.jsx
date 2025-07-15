// src/components/Navbar.jsx
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="font-bold text-xl">metalate.dev</Link>
        <div className="space-x-4">
          <Link to="/about">Hakkımda</Link>
          <Link to="/projects">Projeler</Link>
          <Link to="/contact">İletişim</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
