import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const ChangePassword = ({ isOpen, onClose, openRegisterModal,openForgotModal,loginUser }) => {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleCurrentPasswordVisibility = () => {
    setShowCurrentPassword((prevShowPassword) => !prevShowPassword);
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword((prevShowPassword) => !prevShowPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevShowPassword) => !prevShowPassword);
  };


  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    loginUser();
    onClose();
  };

  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold mb-5 text-center pt-10">Change Password</h2>
      <form onSubmit={handleSubmit} className='text-font01 text-opacity-50 p-3'>
        
        {/* Current Password Field */}
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-2" htmlFor="currentPassword">Current Password</label>
          <div className='relative'>
            <input
              type={showCurrentPassword ? 'text' : 'password'}
              id="currentPassword"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none"
            />
            <button
              type="button"
              onClick={toggleCurrentPasswordVisibility}
              className="absolute inset-y-0 right-0 px-4 flex items-center text-gray-600"
            >
              {showCurrentPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
        </div>
        
        {/* New Password Field */}
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-2" htmlFor="newPassword">New Password</label>
          <div className='relative'>
            <input
              type={showNewPassword ? 'text' : 'password'}
              id="newPassword"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none"
            />
            <button
              type="button"
              onClick={toggleNewPasswordVisibility}
              className="absolute inset-y-0 right-0 px-4 flex items-center text-gray-600"
            >
              {showNewPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
        </div>
        
        {/* Confirm Password Field */}
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-2" htmlFor="confirmPassword">Confirm Password</label>
          <div className='relative'>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none"
            />
            <button
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className="absolute inset-y-0 right-0 px-4 flex items-center text-gray-600"
            >
              {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-font02 text-white font-semibold px-8 py-3 hover:bg-opacity-70 focus:outline-none"
          >
            Save Change
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
