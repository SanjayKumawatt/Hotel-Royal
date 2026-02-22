import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, CalendarDays } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll event listener for sticky header background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Rooms & Suites', path: '/rooms' },
    { name: 'Bar & Cocktail', path: '/bar' },
    { name: 'Contact', path: '/contact' },
  ];

  
  

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2">
            <h1 className={`text-2xl font-serif font-bold tracking-wider ${isScrolled ? 'text-gray-900' : 'text-gray-900 md:text-white'}`}>
              HOTEL ROYAL
            </h1>
          </Link>

          {/* Desktop Navigation - UPDATED WITH PILL SHAPE & GLASS EFFECT */}
          <nav className="hidden md:flex items-center gap-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wide transition-all duration-300 backdrop-blur-sm ${
                    isActive
                      ? isScrolled ? 'bg-yellow-600 text-white' : 'bg-white/30 text-white shadow-sm'
                      : isScrolled 
                        ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
                        : 'bg-white/10 text-white hover:bg-white/25'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Book Now Button (Desktop) */}
          <div className="hidden md:block">
            <Link
              to="/book"
              className="flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-colors"
            >
              <CalendarDays className="w-4 h-4" />
              BOOK NOW
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation (Framer Motion) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100"
          >
            <div className="flex flex-col px-4 py-6 gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-md text-base font-medium uppercase tracking-wide transition-colors ${
                      isActive ? 'bg-yellow-50 text-yellow-600' : 'text-gray-800 hover:bg-gray-50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <Link
                to="/book"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 mt-4 bg-yellow-600 text-white px-6 py-3 rounded-md text-sm font-semibold tracking-wide"
              >
                <CalendarDays className="w-4 h-4" />
                BOOK NOW
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
  