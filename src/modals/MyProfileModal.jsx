import React, { useState } from 'react';
import { BiUser } from "react-icons/bi";
import { RiLogoutBoxLine, RiChatHistoryLine } from "react-icons/ri";
import { MdOutlineFeedback } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import FeedbackModal from './FeedbackModal';

const MyProfileModal = ({logoutUser, setIsProfileModalOpen}) => {
  const navigate = useNavigate();
  const [isFeedbackOpen,setIsFeedbackOpen] = useState(false);

  const openFeedback = () =>{
    setIsFeedbackOpen(true);
    navigate("/myprofile");
  }
  const closeFeedback = () =>{
    setIsFeedbackOpen(false);
    setIsProfileModalOpen(false);
  }

  const handleMyProfileClick = () =>{
    setIsProfileModalOpen(false);
    navigate("/myprofile");
  }
  const handleLogOutClick = () =>{
    logoutUser();
    navigate("/")
  }
  const handleOrder = () =>{
    setIsProfileModalOpen(false);
    navigate("/order");
  }
  
  return (
    <div className="absolute top-16 right-0">
      <div className="bg-white rounded-lg p-6 w-[200px]">
        <ul className="space-y-8 text-font01">
          <li onClick={handleMyProfileClick} className="flex items-center hover:opacity-70 cursor-pointer">
            <BiUser size={24}/>
            <span className="ml-2">My Profile</span>
          </li>
          <li onClick={handleOrder} className="flex items-center hover:opacity-70 cursor-pointer">
            <RiChatHistoryLine size={24}/>
            <span className="ml-2">Order History</span>
          </li>
          <li onClick={openFeedback} className="flex items-center hover:opacity-70 cursor-pointer">
            <MdOutlineFeedback size={24}/>
            <span className="ml-2">Feedback</span>
          </li>
          <li onClick={handleLogOutClick} className="flex items-center hover:opacity-70 cursor-pointer">
            <RiLogoutBoxLine size={24}/>
            <span className="ml-2">Log Out</span>
          </li>
        </ul>
      </div>

      {/* Feedback Modal */}
      {isFeedbackOpen && <FeedbackModal isFeedbackOpen={isFeedbackOpen} closeFeedback={closeFeedback}/>}
    </div>
  );
};

export default MyProfileModal;