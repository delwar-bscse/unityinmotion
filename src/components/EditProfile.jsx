import React, { useState } from 'react';

const EditProfile = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    contact: '',
    designation: '',
    address: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold mb-5 text-center pt-10">Edit Profile</h2>
      <form onSubmit={handleSubmit} className='text-font01 text-opacity-50 p-3'>
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
        {/* Designation Field */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="contact">Designation</label>
          <input
            type="text"
            id="designation"
            name="designation"
            value={formData.designation}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 focus:outline-none"
          />
        </div>
        {/* Address Field */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="contact">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
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
            Save Change
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
