import React, { useState } from 'react';
import MembershipOptionModal from '../modals/MembershipOptionModal';

const MembershipOptionCart = ({title,cdn}) => {
  const [isMembershipOptionModalOpen,setIsMembershipOptionModalOpen] = useState(false);

  const handleMembershipOptionModal = () =>{
    setIsMembershipOptionModalOpen(!isMembershipOptionModalOpen)
  }
  
  return (
    <div className="bg-secondary p-6 flex flex-col items-center gap-5">
      <h2 className="text-3xl my-6 font-light text-font01 text-opacity-80 text-center">{title}</h2>
      <p className="text-center text-4xl font-semibold text-font02">
        {cdn}
      </p>
      <button onClick={handleMembershipOptionModal} className="bg-gray-800 hover:bg-opacity-90 text-font03 font-bold py-3 px-10 mt-10">
        Buy Now
      </button>
      {isMembershipOptionModalOpen && <MembershipOptionModal title={title} cdn={cdn} onCloseMembershipModal={handleMembershipOptionModal}/>}
    </div>
  );
};

export default MembershipOptionCart