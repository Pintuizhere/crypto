import React from 'react';
import {
  ArrowUpRight,
  Shield,
  Lock,
  Smartphone,
  Globe,
  Clock,
  Zap
} from 'lucide-react';

const Wallet = () => {
  const features = [
    {
      icon: <Shield size={24} />,
      title: "Multi-Layer Security",
      description: "Advanced encryption and multi-factor authentication protect your assets 24/7"
    },
    {
      icon: <Lock size={24} />,
      title: "Self-Custody",
      description: "You have complete control over your private keys and crypto assets"
    },
    {
      icon: <Smartphone size={24} />,
      title: "Mobile Access",
      description: "Manage your wallet on the go with our secure mobile application"
    },
    {
      icon: <Globe size={24} />,
      title: "Global Support",
      description: "Access your wallet from anywhere in the world, anytime"
    },
    {
      icon: <Clock size={24} />,
      title: "Instant Transfers",
      description: "Send and receive crypto instantly with minimal transaction fees"
    },
    {
      icon: <Zap size={24} />,
      title: "Lightning Network",
      description: "Support for Bitcoin Lightning Network for faster transactions"
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-lime-400/10 rounded-full blur-3xl animate-pulse -top-48 -left-24"></div>
        <div className="absolute w-[300px] h-[300px] bg-lime-400/5 rounded-full blur-2xl animate-[pulse_4s_ease-in-out_infinite] top-1/4 right-0"></div>
        <div className="absolute w-[400px] h-[400px] bg-lime-400/10 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_infinite] bottom-0 -left-24"></div>
        <div className="absolute w-96 h-96 border border-lime-400/20 rounded-full top-1/3 left-1/2 transform -translate-x-1/2 animate-[spin_20s_linear_infinite]"></div>
        <div className="absolute w-[500px] h-[500px] border border-lime-400/10 rounded-full top-1/3 left-1/2 transform -translate-x-1/2 animate-[spin_30s_linear_infinite]"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center gap-2">
              Get your free, secure bitcoin wallet
              <ArrowUpRight className="text-lime-400" size={24} />
            </h1>
            <p className="text-gray-400 text-lg mb-4">
              A simple and safe way to buy, sell, and store your Bitcoin.
            </p>
            <p className="text-gray-400 mb-8">
              The CryptoTrade Wallet is a secure and convenient way to manage your money. Sign up today and find out for yourself why millions of people trust us.
            </p>
            <button className="bg-lime-400 text-black px-8 py-3 rounded-full font-medium hover:bg-lime-300 transition-colors relative overflow-hidden group">
              <span className="relative z-10">Get your free bitcoin wallet</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </div>

          {/* Wallet Preview */}
          <div className="flex-1">
            <div className="bg-neutral-900 p-6 rounded-3xl max-w-[320px] mx-auto shadow-xl backdrop-blur-lg bg-opacity-80 hover:shadow-lime-400/20 transition-shadow duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#F7931A] flex items-center justify-center">
                    <span className="text-white font-bold">₿</span>
                  </div>
                  <span className="text-white">Bitcoin</span>
                </div>
                <button className="text-white opacity-60">
                  <ArrowUpRight size={20} />
                </button>
              </div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">0.107 BTC</h2>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-gray-400">≈ $4,280</span>
                  <span className="text-red-500">-3.56%</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <button className="bg-lime-400 text-black p-3 rounded-2xl flex flex-col items-center hover:bg-lime-300 transition-colors relative overflow-hidden group">
                  <ArrowUpRight size={20} />
                  <span className="text-sm mt-1">Send</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
                <button className="bg-lime-400 text-black p-3 rounded-2xl flex flex-col items-center hover:bg-lime-300 transition-colors relative overflow-hidden group">
                  <ArrowUpRight size={20} className="rotate-180" />
                  <span className="text-sm mt-1">Receive</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
                <button className="bg-lime-400 text-black p-3 rounded-2xl flex flex-col items-center hover:bg-lime-300 transition-colors relative overflow-hidden group">
                  <ArrowUpRight size={20} className="rotate-45" />
                  <span className="text-sm mt-1">Convert</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>

{/* Features */}
<div className="mb-20">
  <h2 className="text-3xl font-bold mb-12 text-center">Powerful Features for Everyone</h2>
  <div className="grid md:grid-cols-3 gap-8">
    {features.map((feature, index) => (
      <div
        key={index}
        className="bg-neutral-900/80 backdrop-blur-lg p-6 rounded-xl transition-all duration-300 group hover:shadow-lime-400/10 hover:scale-[1.02]"
      >
        <div className="w-12 h-12 mb-4 rounded-full bg-lime-400/10 flex items-center justify-center text-lime-400 text-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-lime-400/20 group-hover:text-lime-300">
          {feature.icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
        <p className="text-gray-400">{feature.description}</p>
      </div>
    ))}
  </div>
</div>

        {/* Trust Section */}
<div className="text-center mb-20 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-12 hover:shadow-lime-400/20 transition-all duration-300">
  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">A Bitcoin Wallet you can trust.</h2>
  <p className="text-gray-400 max-w-3xl mx-auto mb-12">
    The CryptoTrade wallet is a popular choice for managing Bitcoin, with over 3 million users and over 40,000 BTC sent and received.
  </p>
  <div className="flex flex-wrap justify-center gap-20 mb-12">
    <StatBox value="2.7M+" label="Active Users" />
    <StatBox value="2M+" label="BTC Transactions" />
    <StatBox value="99.9%" label="Uptime" />
  </div>
</div>


        {/* Getting Started */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Get Started in Minutes</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {["Create Account", "Verify Identity", "Start Trading"].map((step, i) => (
              <div key={i}>
                <div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center text-black font-bold text-xl mb-4 mx-auto relative group">
                  <span className="relative z-10">{i + 1}</span>
                  <div className="absolute inset-0 bg-lime-300 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">{step}</h3>
                <p className="text-gray-400">
                  {step === "Create Account"
                    ? "Sign up with your email and secure password"
                    : step === "Verify Identity"
                    ? "Complete quick verification process"
                    : "Buy, sell, and trade crypto instantly"}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Our users love us!</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Testimonial
              quote="I did submit my concern to CryptoTrade team and they did quickly survey and resolve the issue. I am impressed with their speed. I'd like to say thanks to Support team. I am extremely satisfied."
              user="Michael R."
            />
            <Testimonial
              quote="I'm so happy to be able to use the CryptoTrade wallet wherever I am. I often access using my mobile phone and it's great because I am traveling in China many times throughout the year."
              user="Sarah L."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const StatBox = ({ value, label }) => (
  <div className="bg-neutral-800/80 backdrop-blur-lg p-8 rounded-xl hover:shadow-lime-400/20 transition-shadow duration-300">
    <div className="text-4xl font-bold mb-2 text-lime-400">{value}</div>
    <div className="text-gray-400">{label}</div>
  </div>
);

const Testimonial = ({ quote, user }) => (
  <div className="bg-neutral-900/80 backdrop-blur-lg p-8 rounded-xl hover:shadow-lime-400/20 transition-shadow duration-300">
    <div className="text-lime-400 mb-4">★★★★★</div>
    <p className="text-gray-400 mb-6 text-lg">"{quote}"</p>
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 bg-neutral-800 rounded-full"></div>
      <div>
        <div className="font-bold">{user}</div>
        <div className="text-gray-400 text-sm">Verified User</div>
      </div>
    </div>
  </div>
);

export default Wallet;
