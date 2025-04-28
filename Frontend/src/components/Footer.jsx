import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1F2C] border-t border-white/20 pt-20 pb-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Brand column */}
          <div className="space-y-6">
            <Logo />
            <p className="text-gray-400">
              The secure peer-to-peer platform to buy, sell, and trade digital currencies.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full border border-[#2C2F3A] flex items-center justify-center text-gray-400 hover:border-[#CCFF00] hover:text-[#CCFF00] transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['Buy Bitcoin', 'Sell Bitcoin', 'Bitcoin Wallet', 'Trading Fees'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-[#CCFF00] transition-colors duration-300 flex items-center group">
                    {item}
                    <ArrowUpRight className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={14} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              {['About Us', 'Careers', 'Blog', 'Press', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-[#CCFF00] transition-colors duration-300 flex items-center group">
                    {item}
                    <ArrowUpRight className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={14} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-6">Stay Updated</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and exclusive offers.</p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-[#13161E] border border-[#2C2F3A] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#CCFF00] transition-colors duration-300"
              />
              <button className="w-full px-4 py-2 bg-[#CCFF00] text-[#1A1F2C] font-semibold rounded-xl hover:bg-[#A5F32F] transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#2C2F3A]">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} CryptoTrade. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {['Privacy Policy', 'Terms of Service', 'Legal Notice'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-400 hover:text-[#CCFF00] text-sm transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;