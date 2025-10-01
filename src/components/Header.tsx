import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-gray-900 hover:text-blue-800 transition-colors">
            John Fashola
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-blue-800 ${
                  isActive(item.path) 
                    ? 'text-blue-800' 
                    : 'text-gray-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-blue-800 text-white px-6 py-2 rounded-xl font-medium hover:bg-blue-900 transition-colors"
            >
              Let's Connect
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 md:hidden">
              <div className="px-6 py-4 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block text-sm font-medium transition-colors hover:text-blue-800 ${
                      isActive(item.path) 
                        ? 'text-blue-800' 
                        : 'text-gray-600'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="block bg-blue-800 text-white px-6 py-2 rounded-xl font-medium hover:bg-blue-900 transition-colors text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Let's Connect
                </Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;