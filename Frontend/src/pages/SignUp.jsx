import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ArrowRight, Check } from 'lucide-react';
import axios from 'axios'; // Import axios

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(''); // State for error messages
  const navigate = useNavigate(); // For redirecting after successful signup

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("Passwords do not match.");
    }
  
    try {
      // Make the API request
      const response = await axios.post('http://localhost:5000/api/auth/signup', {
        email,
        password,
        confirmPassword
      });
  
      // Log the response to see what you're getting
      console.log(response.data);
  
      // If registration is successful, navigate to the login page
      navigate('/');
    } catch (error) {
      // Enhanced error handling
      if (error.response) {
        // If the backend responded with an error
        setError(error.response.data.message || 'Something went wrong. Please try again.');
      } else if (error.request) {
        // If the request was made but no response was received
        setError('No response from server. Please check your network connection.');
      } else {
        // Any other errors
        setError('An error occurred while processing your request.');
      }
    }
  };
  
  const requirements = [
    { label: 'At least 8 characters', met: password.length >= 8 },
    { label: 'At least one uppercase letter', met: /[A-Z]/.test(password) },
    { label: 'At least one number', met: /\d/.test(password) },
    { label: 'At least one special character', met: /[!@#$%^&*]/.test(password) },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-black flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2 text-white">Create an Account</h1>
            <p className="text-gray-400">Join millions of traders on CryptoTrade</p>
          </div>

          <div className="bg-neutral-900/50 backdrop-blur-sm p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
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

              {/* Password */}
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
                    placeholder="Create a password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>

                {/* Password Requirements */}
                <div className="mt-3 space-y-2">
                  {requirements.map((req, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <Check
                        size={16}
                        className={`mr-2 ${req.met ? 'text-lime-400' : 'text-gray-500'}`}
                      />
                      <span className={req.met ? 'text-lime-400' : 'text-gray-500'}>
                        {req.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2 text-white">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400 transition"
                    placeholder="Confirm your password"
                    required
                  />
                </div>
              </div>

              {/* Display Error */}
              {error && (
                <div className="text-red-500 text-sm mt-2">{error}</div>
              )}

              {/* Terms and Conditions */}
              <div className="flex items-start text-white text-sm">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 w-4 h-4 rounded border-neutral-700 text-lime-400 bg-neutral-800 focus:ring-lime-400"
                  required
                />
                <label htmlFor="terms" className="ml-2">
                  I agree to the{' '}
                  <Link to="/terms" className="text-lime-400 hover:text-lime-300">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="text-lime-400 hover:text-lime-300">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full cursor-pointer bg-lime-400 text-black py-3 rounded-xl font-semibold hover:bg-lime-300 transition-all duration-300 flex items-center justify-center group"
              >
                Create Account
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            {/* Sign In Link */}
            <div className="mt-6 text-center">
              <p className="text-gray-400">
                Already have an account?{' '}
                <Link to="/signin" className="text-lime-400 hover:text-lime-300 transition-colors">
                  Sign in
                </Link>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
