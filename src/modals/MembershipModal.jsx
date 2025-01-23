import React from 'react'
import MembershipCart from '../components/MembershipCart'
import { IoMdCloseCircle } from "react-icons/io";

const MembershipModal = ({onCloseMembershipModal}) => {
  return (
    <div className='flex justify-center items-center gap-5 bg-gray-50 py-20 px-24 relative'>
      <MembershipCart title="Basic Membership" onCloseMembershipModal={onCloseMembershipModal}/>
      <MembershipCart title="Standard Membership" onCloseMembershipModal={onCloseMembershipModal}/>
      <MembershipCart title="Premium Membership" onCloseMembershipModal={onCloseMembershipModal}/>
      <button className='absolute top-5 right-5 text-font02' onClick={onCloseMembershipModal}>
        <IoMdCloseCircle size={40} />
      </button>
    </div>
  )
}

export default MembershipModal