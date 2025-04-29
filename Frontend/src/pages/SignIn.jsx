import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Added useNavigate for redirection
import axios from 'axios'; // Importing axios for API requests
import { Eye, EyeOff, ArrowRight } from 'lucide-react';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Error state to display login error message
  const [loading, setLoading] = useState(false); // Loading state for button and process indication
  const navigate = useNavigate(); // For redirection after successful login

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      console.log(response.data);
  
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        navigate('/');
      }
    } catch (err) {
      console.error(err.response?.data || err.message);
      setError('Invalid email or password');
    }
  };
  

  return (
    <div className="min-h-screen pt-24 pb-20 bg-black flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2 text-white">Welcome Back</h1>
            <p className="text-gray-400">Sign in to continue to CryptoTrade</p>
          </div>

          <div className="bg-neutral-900/50 backdrop-blur-sm p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400 transition"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-2 text-white">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400 transition"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Remember Me + Forgot Password */}
              <div className="flex items-center justify-between text-sm text-white">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-neutral-700 text-lime-400 bg-neutral-800 focus:ring-lime-400"
                  />
                  <span className="ml-2">Remember me</span>
                </label>
                <Link to="/forgot-password" className="text-lime-400 hover:text-lime-300 transition-colors">
                  Forgot password?
                </Link>
              </div>

              {/* Error Message (if login fails) */}
              {error && <p className="text-red-500 text-sm">{error}</p>}

              {/* Submit Button */}
              <button
                type="submit"
                className={`w-full ${loading ? 'bg-gray-400' : 'bg-lime-400'} text-black py-3 rounded-xl font-semibold hover:bg-lime-300 transition-all duration-300 flex items-center justify-center group`}
                disabled={loading} // Disable the button when loading
              >
                {loading ? 'Signing In...' : 'Sign In'}
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            {/* Sign Up Prompt */}
            <div className="mt-6 text-center">
              <p className="text-gray-400">
                Don&apos;t have an account?{' '}
                <Link to="/signup" className="text-lime-400 hover:text-lime-300 transition-colors">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
