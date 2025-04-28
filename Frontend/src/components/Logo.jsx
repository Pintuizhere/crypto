import React from 'react';
import { CircleDot } from 'lucide-react';

const Logo = () => {
  return (

    
    <div
      className="flex items-center"
      role="img"
      aria-label="CryptoTrade Logo"
    >
      <span className="text-white font-bold text-xl mr-1">Crypto</span>
      <span className="text-lime-400 font-bold text-xl">Trade</span>
      <CircleDot className="ml-1 text-lime-400" size={12} />
    </div>
    
  );
};

export default Logo;
