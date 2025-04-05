import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import "./style.css"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)


  return (
    <nav className="nav bg-[#fff] shadow-2xl sticky top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-800">
              <a href="/" className="text-blue-600">
                [📡] TechBlog
              </a>
            </span>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center space-x-8 ">
            <li onClick={() => setIsMenuOpen(false)}>
              <a
                onClick={() => window.scrollTo(0, 0)}
                href="/"
                className="nav-link text-gray-600 hover:text-blue-500"
              >
                Home
              </a>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <a
                href="#blog"
                className="nav-link text-gray-600 hover:text-blue-500"
              >
                Blog
              </a>
            </li>

            <li onClick={() => setIsMenuOpen(false)}>
              <a
                href="#footer"
                className="nav-link text-gray-600 hover:text-blue-500"
              >
                Footer
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden  bg-white w-full">
          <ul className="flex flex-col space-y-4 px-4 pb-4 items-center">
            <li onClick={() => setIsMenuOpen(false)}>
              <a
                onClick={() => window.scrollTo(0, 0)}
                href="/"
                className="nav-link text-gray-600 hover:text-blue-500"
              >
                Home
              </a>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <a
                href="#blog"
                className="nav-link text-gray-600 hover:text-blue-500"
              >
                Blog
              </a>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <a
                href="#footer"
                className="nav-link text-gray-600 hover:text-blue-500"
              >
                Footer
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar
