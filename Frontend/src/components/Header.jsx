import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // for navigation
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // Detect scroll
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Check login state
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const handleLogout = async () => {
    try {
      // Optional: Call backend to invalidate token/session
      await fetch('http://localhost:5000/api/logout', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });

      localStorage.removeItem('token');
      setIsLoggedIn(false);
      navigate('/signin'); // redirect to login
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-900/90 backdrop-blur-md shadow-xl border-b border-gray-700'
          : 'bg-transparent border-b border-gray-800/30'
      }`}
    >
      <div className="container mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/wallet">Wallet</NavLink>
          <NavLink href="/review">Review</NavLink>

          {!isLoggedIn ? (
            <button className="ml-4 px-6 py-2 bg-lime-400 text-black rounded-xl hover:bg-lime-600 transition-all duration-300">
              <NavLink href="/signin">Sign In</NavLink>
            </button>
          ) : (
            <button
              onClick={handleLogout}
              className="ml-4 cursor-pointer px-6 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-all duration-300"
            >
              Logout
            </button>
          )}
        </nav>

        <button
          className="md:hidden text-white focus:outline-none hover:text-lime-400 transition-colors duration-300"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen
            ? 'max-h-screen py-4 bg-gray-900/90 backdrop-blur-md'
            : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <NavLink href="/" mobile>Home</NavLink>
          <NavLink href="/wallet" mobile>Wallet</NavLink>
          <NavLink href="/review" mobile>Review</NavLink>
          {!isLoggedIn ? (
            <button className="w-full px-6 py-3 bg-lime-400 text-black rounded-xl hover:bg-lime-600 transition-all duration-300">
              <NavLink href="/signin">Sign In</NavLink>
            </button>
          ) : (
            <button
              onClick={handleLogout}
              className="w-full px-6 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-all duration-300"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ href, children, mobile }) => {
  return (
    <a
      href={href}
      className={`text-white hover:text-lime-400 transition-colors duration-300 ${
        mobile ? 'block py-2 text-lg' : 'text-sm font-medium'
      }`}
    >
      {children}
    </a>
  );
};

export default Header;
