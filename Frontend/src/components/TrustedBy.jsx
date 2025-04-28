import React from 'react';

const TrustedBy = () => {
  // Array of trusted company names
  const companies = [
    'Forbes',
    'Yahoo Finance',
    'Bloomberg',
    'CNBC',
    'TechCrunch',
    'Reuters'
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-gray-500 text-sm font-medium uppercase tracking-wider mb-8">
          Trusted by leading publications
        </h2>
        {/* Dark underline */}
        <div className="w-32 h-1 bg-gray-800 mx-auto mb-8 rounded-full" />
        
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {companies.map((company, index) => (
            <div key={index} className="opacity-60 hover:opacity-80 transition-opacity duration-300">
              <span className="text-gray-800 font-bold text-xl md:text-2xl">{company}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
