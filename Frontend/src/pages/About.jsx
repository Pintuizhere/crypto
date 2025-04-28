import React from 'react';
import { Shield, Users, Globe, Award, Zap, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { value: '2.7M+', label: 'Active Users' },
    { value: '$4.2B+', label: 'Monthly Volume' },
    { value: '180+', label: 'Countries' },
    { value: '99.99%', label: 'Uptime' }
  ];

  const values = [
    {
      icon: <Shield className="w-6 h-6 text-black" />,
      title: 'Security First',
      description: 'Your security is our top priority. We implement the most advanced encryption and security measures.'
    },
    {
      icon: <Users className="w-6 h-6 text-black" />,
      title: 'Community Driven',
      description: 'Built by the community, for the community. Your feedback shapes our platform.'
    },
    {
      icon: <Globe className="w-6 h-6 text-black" />,
      title: 'Global Access',
      description: 'Available worldwide, enabling crypto trading for everyone, everywhere.'
    },
    {
      icon: <Award className="w-6 h-6 text-black" />,
      title: 'Excellence',
      description: 'Committed to providing the best trading experience in the industry.'
    },
    {
      icon: <Zap className="w-6 h-6 text-black" />,
      title: 'Innovation',
      description: 'Constantly evolving and implementing cutting-edge technologies.'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-black" />,
      title: 'Transparency',
      description: 'Open and honest in all our operations and communications.'
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Building the Future of <span className="text-lime-400">Digital Finance</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            CryptoTrade is more than just a trading platform. We're a community of millions, united by the vision of accessible and secure digital finance for everyone.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="p-4 bg-neutral-900/50 rounded-xl backdrop-blur-md shadow-lg">
                <div className="text-2xl md:text-3xl font-bold text-lime-400 mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-400">
              To create a world where everyone has equal access to the future of finance. We're building the infrastructure to enable millions of people to trade cryptocurrencies securely and efficiently.
            </p>
          </div>
          <div className="aspect-video relative rounded-2xl overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg"
              alt="Team collaboration"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-neutral-900/50 rounded-xl backdrop-blur-md transition-all duration-300 hover:shadow-lg hover:shadow-lime-400/30 group"
              >
                <div className="mb-4 flex justify-center items-center">
                  <div className="w-12 h-12 rounded-full bg-lime-400 flex justify-center items-center shadow-lg group-hover:shadow-none transition duration-300 animate-pulse">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-12">Meet Our Leadership</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="p-6 bg-neutral-900/50 rounded-xl backdrop-blur-md">
                <div className="w-24 h-24 rounded-full bg-neutral-800 mx-auto mb-4"></div>
                <h3 className="text-xl font-bold mb-1">John Doe</h3>
                <p className="text-lime-400 mb-2">Chief Executive Officer</p>
                <p className="text-gray-400 text-sm">
                  15+ years of experience in fintech and cryptocurrency markets.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Join Us */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
          <p className="text-gray-400 mb-8">
            Be part of the financial revolution. Join millions of users who trust CryptoTrade for their cryptocurrency trading needs.
          </p>
          <button className="bg-lime-400 text-black px-8 py-3 rounded-xl font-semibold hover:bg-lime-300 transition-all duration-300 shadow-lg">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
