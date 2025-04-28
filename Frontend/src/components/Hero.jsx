import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import './ui/Hero.css'; // Don't forget to import the animation styles

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-[#0a0a0a] overflow-hidden relative">
      {/* ✨ Animated crypto background particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="crypto-bg"></div>
      </div>

      {/* Crypto-style animated background */}
      <div className="absolute inset-0 z-0">
        <div className="crypto-grid w-full h-full"></div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Welcome to <span className="text-lime-400">CryptoTrade</span>, the{' '}
              <span className="text-lime-400">people-powered</span> way to move money
              <ArrowUpRight className="inline-block ml-2 text-lime-400" size={32} />
            </h1>

            <p className="text-neutral-300 text-lg mb-8 max-w-xl">
              The secure peer-to-peer platform to buy, sell, and trade digital currencies, anytime, anywhere.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="px-8 py-3 bg-lime-400 text-black font-semibold rounded-xl hover:bg-[#A5F32F] transition-all duration-300"
              >
                Sign Up
              </button>
              <button
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-xl hover:border-lime-400 hover:text-lime-400 transition-all duration-300 flex items-center justify-center"
              >
                Create Account
              </button>
            </div>
          </div>

          {/* Right Graphics (unchanged) */}
          <div className="w-full lg:w-1/2 relative hidden sm:block">
            <div className="relative">
              {/* Orbit graphics */}
              <div className="absolute w-full h-full pointer-events-none">
                <div className="w-64 h-64 md:w-80 md:h-80 border border-neutral-700 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 animate-[spin_10s_linear_infinite] hover:animate-none"></div>
                <div className="w-48 h-48 md:w-64 md:h-64 border border-neutral-600 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 animate-[spin_15s_linear_infinite] hover:animate-none"></div>
                <div className="w-32 h-32 md:w-48 md:h-48 border border-neutral-500 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40 animate-[spin_20s_linear_infinite] hover:animate-none"></div>
                <div className="w-16 h-16 md:w-32 md:h-32 border-2 border-lime-400 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50 animate-pulse"></div>
              </div>

              {/* Phones */}
              <div className="relative pt-10 px-10">
                {/* First Phone */}
                <div className="w-48 md:w-64 h-auto bg-neutral-900 rounded-3xl p-2 shadow-2xl transform rotate-12 translate-x-4 relative z-20 hover:-translate-y-2 transition-all duration-300"
                  style={{
                    boxShadow: '0 25px 50px -12px rgba(192, 255, 71, 0.15)',
                  }}
                >
                  <div className="rounded-2xl overflow-hidden bg-neutral-800 h-full">
                    <div className="bg-gray-900 p-3">
                      <div className="flex justify-between items-center mb-2">
                        <div className="h-3 w-16 bg-lime-400 rounded-full"></div>
                        <div className="h-3 w-8 bg-neutral-600 rounded-full"></div>
                      </div>
                      <div className="flex justify-between">
                        <div className="h-6 w-20 bg-white rounded-md"></div>
                        <div className="h-6 w-10 bg-lime-400 rounded-md"></div>
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="h-3 w-full bg-neutral-700 rounded-full mb-2"></div>
                      <div className="h-3 w-3/4 bg-neutral-700 rounded-full mb-4"></div>
                      <div className="flex space-x-2 mb-4">
                        <div className="h-8 w-full bg-neutral-700 rounded-md"></div>
                        <div className="h-8 w-full bg-lime-400 rounded-md"></div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="h-16 bg-neutral-700 rounded-md"></div>
                        <div className="h-16 bg-neutral-700 rounded-md"></div>
                        <div className="h-16 bg-neutral-700 rounded-md"></div>
                        <div className="h-16 bg-neutral-700 rounded-md"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Second Phone */}
                <div className="w-48 md:w-64 h-auto bg-neutral-900 rounded-3xl p-2 shadow-2xl transform -rotate-6 -translate-x-4 translate-y-10 absolute top-0 left-0 z-10 hover:translate-y-1.5 transition-all duration-300"
                  style={{
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  <div className="rounded-2xl overflow-hidden bg-neutral-800 h-full">
                    <div className="bg-gray-900 p-3">
                      <div className="h-4 w-20 bg-lime-400 rounded-full mb-2"></div>
                      <div className="h-8 w-full bg-neutral-700 rounded-md"></div>
                    </div>
                    <div className="p-3">
                      <div className="h-32 w-full bg-neutral-700 rounded-lg mb-3 flex items-center justify-center">
                        <div className="h-16 w-16 rounded-full bg-lime-400"></div>
                      </div>
                      <div className="h-4 w-full bg-neutral-700 rounded-full mb-2"></div>
                      <div className="h-4 w-2/3 bg-neutral-700 rounded-full mb-4"></div>
                      <div className="h-10 w-full bg-lime-400 rounded-md"></div>
                    </div>
                  </div>
                </div>
                {/* End Phones */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
