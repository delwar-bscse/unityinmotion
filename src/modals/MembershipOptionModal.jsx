import React from 'react'
import { IoMdCloseCircle } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { FaCircleCheck } from "react-icons/fa6";

const MembershipOptionModal = ({title,cdn,onCloseMembershipModal}) => {
  const navigate = useNavigate();

  const handleClick = () =>{
    onCloseMembershipModal();
    navigate("./payment");
  }
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='flex items-center justify-center py-8 mdl:p-16 bg-gray-100 relative'>
        <div className="p-4 rounded-lg shadow-md">
          <h2 className="text-3xl my-6 font-light text-font01 text-opacity-80 text-center">{title}</h2>
          <div className="py-4 flex items-end justify-center gap-3 mb-4 text-font02">
            <span className="text-4xl font-bold">{cdn}</span>
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
        <button className='absolute top-5 right-5 text-font02' onClick={onCloseMembershipModal}>
          <IoMdCloseCircle size={40} />
        </button>
      </div>
   </div>
  )
}

export default MembershipOptionModal