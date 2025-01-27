import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { IoClose } from "react-icons/io5";

const LoginModal = ({ isOpen, onClose, openRegisterModal,openForgotModal,loginUser }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberPassword: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange2 = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value, // Update checkbox state
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 text-font01">
      <div className='grid grid-cols-1 xl:grid-cols-2 w-full px-4 xl:px-0 max-w-[600px] xl:max-w-[1200px] h-full xl:max-h-[700px] max-h-[560px] mx-auto relative'>
      {/* ------------------------ Login Form ------------------------ */}
        <div className="flex flex-col items-center justify-center bg-font03 w-full xl:p-8 relative">
          <h2 className="text-3xl font-bold mb-5 text-center xl:pt-10">Login to Account</h2>
          <p className='text-center mb-8'>Please enter your information to create account</p>
          <form onSubmit={handleSubmit} className='w-full px-6'>
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
                required
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
                  required
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

            <div className='flex justify-between items-start'>
              {/* Remember Password Checkbox */}
              <div className="mb-6 flex items-center">
                <input
                  type="checkbox"
                  id="rememberPassword"
                  name="rememberPassword"
                  checked={formData.rememberPassword}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                <label htmlFor="rememberPassword" className="text-sm font-semibold">Remember Password</label>
              </div>
              <span
                className="text-sm text-red-700 cursor-pointer hover:text-red-500"
                onClick={openForgotModal}
              >
                Forgot Password
              </span>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-font02 text-white font-semibold px-8 py-3 hover:bg-opacity-70 focus:outline-none"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
        {/* ------------------------ Login Form Extra Part ------------------------ */}
        <div className='hidden xl:flex items-center justify-center bg-font02 text-white relative'>
          <div className='w-[300px] flex flex-col items-center justify-center text-center '>
            <h2 className='text-4xl text-font03 font-bold my-16'>Welcome Back!</h2>
            <p className='text-lg font-semibold my-5'>Please Sign in into your account with the given details to continue</p>
            <p className='my-10 text-sm'>New here ? create a new account</p>
            <button
              className="border-[1px] border-font03 text-white font-semibold px-8 py-3 hover:bg-opacity-70 focus:outline-none"
              onClick={openRegisterModal}
            >
              Sign Up
            </button>
          </div>
        </div>
          {/* Close Button */}
          <div className="flex justify-center mt-4 absolute top-0 right-6 xl:right-4">
            <button
              onClick={onClose}
              className=""
            >
              <IoClose className='xl:text-font03 text-font02 hover:text-opacity-70' size={40}/>
            </button>
          </div>
      </div>
    </div>
  );
};

export default LoginModal;
