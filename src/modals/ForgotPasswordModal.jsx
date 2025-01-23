import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";

const ForgotPasswordModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    email: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 text-font01">
      <div className='grid grid-cols-2 w-[1200px] h-[700px] mx-auto'>
        {/* ------------------------ Forgot Password Form ------------------------ */}
        <div className="bg-font03 flex flex-col justify-center items-center w-full relative">
          <h2 className="text-3xl font-bold mb-5 text-center pt-10">Forgot Password</h2>
          <form onSubmit={handleSubmit} className='w-full px-8'>
            {/* Email Field */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder='Enter Your Email'
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-font02 text-white font-semibold px-8 py-3 hover:bg-opacity-70 focus:outline-none"
              >
                Send Code
              </button>
            </div>
          </form>
        </div>
        {/* ------------------------ Forgot Password Extra Part ------------------------ */}
        <div className='flex items-center justify-center bg-font02 text-white relative'>
          <div className='w-[360px] flex flex-col items-center justify-center text-center '>
            <p className='text-xl font-semibold my-5 leading-10 tracking-widest'>Welcome to our forgot password page ! Provide your email for confirm 6 digit verification code.</p>
          </div>
          {/* Close Button */}
          <div className="flex justify-center mt-4 absolute top-0 right-4">
            <button
              onClick={onClose}
              className=""
            >
              <IoClose className='text-font03 hover:text-opacity-70' size={40}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
