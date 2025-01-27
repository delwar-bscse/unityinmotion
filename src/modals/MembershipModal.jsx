import React from 'react'
import MembershipCart from '../components/MembershipCart'
import { IoMdCloseCircle } from "react-icons/io";

const MembershipModal = ({onCloseMembershipModal}) => {
  return (
    <div className='w-full max-w-[1300px] px-4 relative'>
      <div className='w-full overflow-x-scroll'>
        <div className='min-w-[1280px] flex justify-center items-center gap-5 bg-gray-50 py-20 xl:px-8'>
          <MembershipCart title="Basic Membership" onCloseMembershipModal={onCloseMembershipModal}/>
          <MembershipCart title="Standard Membership" onCloseMembershipModal={onCloseMembershipModal}/>
          <MembershipCart title="Premium Membership" onCloseMembershipModal={onCloseMembershipModal}/>
        </div>
      </div>
      <button className='absolute top-5 right-8 text-font02' onClick={onCloseMembershipModal}>
        <IoMdCloseCircle size={40} />
      </button>
    </div>
  )
}

export default MembershipModal