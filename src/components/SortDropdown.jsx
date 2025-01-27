import React, { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";

const SortDropdown = () => {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [formData, setFormData] = useState({
    bike: false,
    car: false,
    boat: false,
  });

  // Handle checkbox change
  const handleChange = (event) => {
    const { name, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  const handleSort = () =>{
    setIsSortOpen(!isSortOpen);
  }

  return (
    <div className="relative inline-block text-left">
      <div>
        <button onClick={handleSort} type="button" className="flex gap-2 mdl:gap-10 items-center" >
          <span>Sort By</span>
          <MdKeyboardArrowDown  size={28} className={`${isSortOpen && 'rotate-180'} transition-all duration-300`}/>
        </button>
        {isSortOpen && <form  className="p-4 absolute top-[40px] left-0 inline-block bg-secondary w-[165px]">
          <div className="mb-4">
            <input
              type="checkbox"
              id="bike"
              name="bike"
              checked={formData.bike}
              onChange={handleChange}
              className="form-checkbox h-5 w-5 text-font02"
            />
            <label htmlFor="bike" className="ml-2 text-font01">
              Low to High
            </label>
          </div>

          <div className="mb-4">
            <input
              type="checkbox"
              id="car"
              name="car"
              checked={formData.car}
              onChange={handleChange}
              className="form-checkbox h-5 w-5 text-font02"
            />
            <label htmlFor="car" className="ml-2 text-font01">
              High to Low
            </label>
          </div>

          <div className="mb-4">
            <input
              type="checkbox"
              id="boat"
              name="boat"
              checked={formData.boat}
              onChange={handleChange}
              className="form-checkbox h-5 w-5 text-font02"
            />
            <label htmlFor="boat" className="ml-2 text-font01">
              Average
            </label>
          </div>
        </form>}
      </div>
    </div>
  );
};

export default SortDropdown;