import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { IoClose } from "react-icons/io5";

const RegistrationModal = ({ isOpen, onClose, openLoginModal }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    contact: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 text-font01">
      <div className='grid grid-cols-1 xl:grid-cols-2 w-full max-w-[600px] xl:max-w-[1200px] h-[700px] mx-auto px-4 xl:px-0'>
        {/* ------------------------ Registration Form Extra Part ------------------------ */}
        <div className='hidden xl:flex items-center justify-center bg-font02 text-white relative'>
          <div className='w-[300px] flex flex-col items-center justify-center text-center '>
            <h2 className='text-4xl text-font03 font-bold my-20'>Welcome Back!</h2>
            <p className='text-lg font-semibold my-7'>Please Sign in into your account with the given details to continue</p>
            <p className='my-12 text-sm'>New here ? create a new account</p>
            <button
              className="border-[1px] border-font03 text-white font-semibold px-8 py-3 hover:bg-opacity-70 focus:outline-none"
              onClick={openLoginModal}
          >
            Sign In
            </button>
          </div>
        </div>
        {/* ------------------------ Registration Form ------------------------ */}
        <div className="bg-font03 w-full p-8 relative">
          <h2 className="text-3xl font-bold mb-5 text-center pt-20">Register A New Account</h2>
          <p className='text-center mb-8'>Please enter your information to create account</p>
          <form onSubmit={handleSubmit}>
            {/* Username Field */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2" htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none"
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none"
              />
            </div>

            {/* Contact Field */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2" htmlFor="contact">Contact</label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none"
              />
            </div>

            {/* Password Field */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2" htmlFor="password">Password</label>
              <div className='relative'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 px-4 flex items-center text-gray-600"
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-font02 text-white font-semibold px-8 py-3 hover:bg-opacity-70 focus:outline-none"
              >
                Sign Up
              </button>
            </div>
          </form>
          {/* Close Button */}
          <div className="flex justify-center mt-4 absolute top-0 right-4">
            <button
              onClick={onClose}
              className=""
            >
              <IoClose className='text-font02 hover:text-opacity-70' size={40}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationModal;
