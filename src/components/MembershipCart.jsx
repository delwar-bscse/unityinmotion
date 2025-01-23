import React from 'react';
import { FaCircleCheck } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';

const MembershipCart = ({title,onCloseMembershipModal}) => {
  const navigate = useNavigate();

  const handleClick = () =>{
    onCloseMembershipModal();
    navigate("./payment");
  }
  
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-3xl my-6 font-light text-font01 text-opacity-80 text-center">{title}</h2>
      <div className="py-4 flex items-end justify-center gap-3 mb-4 text-font02">
        <span className="text-4xl font-bold">48 CND</span>
        <span className="font-semibold">3Monthly</span>
      </div>
      <ul className="text-font01 space-y-5">
        <li className='flex items-center gap-4'><FaCircleCheck size={28}/><span>On-demand Access to our workout library</span></li>
        <li className='flex items-center gap-4'><FaCircleCheck size={28}/><span>3 New Classes Every Week</span></li>
        <li className='flex items-center gap-4'><FaCircleCheck size={28}/><span>Join a Global Community</span></li>
        <li className='flex items-center gap-4'><FaCircleCheck size={28}/><span>Fitness Fusion Hub</span></li>
        <li className='flex items-center gap-4'><FaCircleCheck size={28}/><span>The Vitality Oasis Gym</span></li>
        <li className='flex items-center gap-4'><FaCircleCheck size={28}/><span>Active Lifestyle Emporium</span></li>
        <li className='flex items-center gap-4'><FaCircleCheck size={28}/><span>The Vitality Oasis Gym</span></li>
      </ul>
      <button onClick={handleClick} className="bg-gray-800 hover:bg-opacity-90 text-font03 font-bold py-3 px-4 mt-10 w-full block text-center">
        Buy Now
      </button>
    </div>
  );
};

export default MembershipCart;