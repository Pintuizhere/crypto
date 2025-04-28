import React from 'react';
import { Twitter, Facebook, Instagram, Send, MessageSquare } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl overflow-hidden relative border border-gray-700/50 backdrop-blur-sm">
          {/* Glow effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#CCFF00]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative p-12 lg:p-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Start trading on CoinView today
            </h2>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              Join our global community of traders and start your cryptocurrency journey with just a few clicks.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-4 bg-[#CCFF00] hover:bg-bg-[#CCFF00] text-black font-semibold rounded-lg transition-all duration-300 text-lg">
                Create Account
              </button>
              <button className="px-8 py-4 border-2 border-gray-600 hover:border-green-400 text-white font-semibold rounded-lg transition-all duration-300 text-lg">
                Learn More
              </button>
            </div>
            
            <div className="mt-12 flex flex-col items-center">
{/* QR Code Section */}
<div className="mt-8 flex items-center gap-4">
                <div className="bg-white p-2 rounded-lg">
                  <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://coinview.com/download" 
                    alt="Download CoinView App QR Code" 
                    className="w-20 h-20"
                  />
                </div>
                <div className="text-top">
                  <p className="text-sm text-gray-300">Scan to download</p>
                  <p className="text-sm text-green-400 font-medium">CoinView App</p>
                </div>
              </div>

              <div className="text-sm text-gray-400 mb-4 mt-2">Follow us</div>
              <div className="flex gap-6">
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors" aria-label="Twitter">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors" aria-label="Telegram">
                  <Send className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors" aria-label="Discord">
                  <MessageSquare className="w-5 h-5" />
                </a>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;