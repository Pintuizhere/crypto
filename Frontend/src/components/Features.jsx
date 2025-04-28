import React from 'react';
import { Shield, Globe, CreditCard, Clock, Zap, Users } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-[#2A2F3C] p-6 rounded-xl border border-[#CCFF00]/10 hover:border-[#CCFF00]/30 hover:shadow-[0_0_8px_#CCFF00] transition-all duration-300 group">
      {/* Circular icon wrapper */}
      <div className="w-14 h-14 flex items-center justify-center bg-[#1A1F2C] border border-[#CCFF00]/20 rounded-full mb-4 group-hover:scale-105 group-hover:shadow-[0_0_6px_#CCFF00] transition-all duration-300">
        <Icon size={28} className="text-[#CCFF00]" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>

      {/* Description */}
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "Advanced encryption and multi-factor authentication protect your assets 24/7."
    },
    {
      icon: Globe,
      title: "Global Marketplace",
      description: "Connect with traders worldwide and access diverse payment methods."
    },
    {
      icon: CreditCard,
      title: "Multiple Payment Options",
      description: "Choose from 350+ payment methods to buy and sell cryptocurrency."
    },
    {
      icon: Clock,
      title: "24/7 Trading",
      description: "Markets never close. Trade anytime from anywhere in the world."
    },
    {
      icon: Zap,
      title: "Lightning Fast Trades",
      description: "Execute trades in seconds with our optimized matching engine."
    },
    {
      icon: Users,
      title: "Community Powered",
      description: "Join millions of users building the future of finance together."
    }
  ];

  return (
    <section id="features" className="py-20 bg-[#1A1F2C]">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Why Choose <span className="text-[#CCFF00]">CryptoTrade</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our platform combines security, speed, and accessibility to create the ultimate cryptocurrency trading experience.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
