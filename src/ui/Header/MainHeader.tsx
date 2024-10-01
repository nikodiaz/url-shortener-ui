import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"

const MainHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed left-0 right-0 top-0 py-2 px-4 lg:px-8 bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-bold text-blue-600">URL Shortener</h1>

        <button
          className="md:hidden text-blue-600"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className="hidden md:flex items-center gap-4 text-blue-600 font-semibold">
          <Link to="/signin" className="hover:text-blue-800 transition-colors">Inicia sesión</Link>
          <span className="text-gray-300">|</span>
          <Link to="/signup" className="hover:text-blue-800 transition-colors">Regístrate</Link>
        </nav>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden mt-2 py-2 bg-white border-t border-gray-200">
          <div className="container mx-auto flex flex-col items-center gap-2">
            <Link
              to="/signin"
              className="w-full text-center py-2 text-blue-600 hover:bg-blue-50 transition-colors"
              onClick={toggleMenu}
            >
              Inicia sesión
            </Link>
            <Link
              to="/signup"
              className="w-full text-center py-2 text-blue-600 hover:bg-blue-50 transition-colors"
              onClick={toggleMenu}
            >
              Regístrate
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}

export default MainHeader
