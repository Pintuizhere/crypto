import React, { useState } from 'react';
import { Star, ThumbsUp, MessageCircle } from 'lucide-react';

const Reviews = () => {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    content: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Review submitted:', formData);
    // Add API call or local update logic here
    setFormData({ name: '', title: '', content: '' }); // Clear form after submission
  };

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      date: "March 15, 2024",
      title: "Best crypto trading platform!",
      content: "I've been using CryptoTrade for over a year now and I'm extremely impressed with their security features and user interface.",
      helpful: 234,
      replies: 12,
      verified: true,
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg"
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 5,
      date: "March 14, 2024",
      title: "Seamless trading experience",
      content: "The platform's speed and reliability are unmatched. I can execute trades instantly, and the mobile app is fantastic for trading on the go.",
      helpful: 189,
      replies: 8,
      verified: true,
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
    },
    {
      id: 3,
      name: "Emma Davis",
      rating: 4,
      date: "March 13, 2024",
      title: "Great for beginners",
      content: "As someone new to crypto trading, I found CryptoTrade's educational resources and intuitive interface extremely helpful.",
      helpful: 156,
      replies: 5,
      verified: true,
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
    }
  ];

  const stats = [
    { label: "Average Rating", value: "4.8" },
    { label: "Total Reviews", value: "15,234" },
    { label: "Verified Users", value: "98%" }
  ];

  return (
    <div className="pt-24 pb-20 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            What Our Users Say About <span className="text-lime-400">CryptoTrade</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. See what our community has to say.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-neutral-900 rounded-xl backdrop-blur-sm">
              <div className="text-3xl font-bold text-lime-400 mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Review Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reviews.map((review) => (
            <div key={review.id} className="bg-neutral-900 rounded-xl p-6 hover:shadow-lg hover:shadow-lime-400/10 transition-all">
              <div className="flex items-center mb-4">
                <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover mr-4" />
                <div>
                  <h3 className="font-semibold flex items-center gap-2">
                    {review.name}
                    {review.verified && <span className="text-xs bg-lime-400/10 text-lime-400 px-2 py-1 rounded-full">Verified</span>}
                  </h3>
                  <div className="flex text-lime-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
              <h4 className="font-semibold mb-2">{review.title}</h4>
              <p className="text-gray-400 text-sm mb-4">{review.content}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-1 hover:text-lime-400">
                    <ThumbsUp size={14} />
                    <span>{review.helpful}</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-lime-400">
                    <MessageCircle size={14} />
                    <span>{review.replies}</span>
                  </button>
                </div>
                <span>{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Review Form */}
        <div className="max-w-2xl mx-auto bg-neutral-900 rounded-xl p-8 backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-4">Share Your Experience</h2>
          <p className="text-gray-400 mb-6">Help others make informed decisions by sharing your story.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white focus:border-lime-400 outline-none"
              required
            />
            <input
              type="text"
              name="title"
              placeholder="Review Title"
              value={formData.title}
              onChange={handleChange}
              className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white focus:border-lime-400 outline-none"
              required
            />
            <textarea
              name="content"
              rows="4"
              placeholder="Write your review..."
              value={formData.content}
              onChange={handleChange}
              className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white focus:border-lime-400 outline-none"
              required
            ></textarea>
            <button type="submit" className="bg-lime-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-lime-300 transition">
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
