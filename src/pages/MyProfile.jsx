import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { FaHome } from "react-icons/fa"
import { TbSlash } from "react-icons/tb";
import { profile02 } from '../assets/assets';
import { BiEditAlt } from "react-icons/bi";
import EditProfile from '../components/EditProfile';
import ChangePassword from '../components/ChangePassword';

const MyProfile = () => {
  const [isEditProfile,setIsEditProfile] = useState(true);
  const [isChangePassword,setIsChangePassword] = useState(false);

  const handleChangePassword = () =>{
    setIsEditProfile(false);
    setIsChangePassword(true);
  }

  const handleEditProfile = () =>{
    setIsChangePassword(false);
    setIsEditProfile(true);
  }

  return (
    <div className='text-font01'>
      <div className='container mx-auto space-y-6 pt-10 pb-28'>

        <div className="text-2xl text-font01 text-opacity-70 flex items-center  gap-3">
            <Link to="/" className="flex items-center  gap-2 hover:text-red-700">
                <FaHome />
            </Link>

            <TbSlash />

            <div className="">Profile</div>
        </div>
        
        <h2 className='text-5xl'>My Profile</h2>
          
        <div className='flex justify-start items-center gap-8 p-10 bg-secondary'>
          <div className='relative'>
            <img src={profile02} alt="My Profile" className='w-[130px] h-[130px] rounded-full' />
            <span className='absolute bottom-0 right-0 bg-white p-1 rounded-full shadow-lg'>
              <BiEditAlt size={28}/>
            </span>
          </div>
          <div className='space-y-3'>
            <p className='text-font02'>Hello</p>
            <h3 className='text-2xl font-semibold text-opacity-80 text-font01'>Rudaba Jaman</h3>
          </div>
        </div>

        <div className='w-[600px] h-screen mx-auto space-y-5'>
          <div className='flex justify-start items-center gap-5'>
            <button onClick={handleEditProfile} className={`${isEditProfile && 'border-b-2 border-b-font02'} py-1`}>Edit Profile</button>
            <button onClick={handleChangePassword} className={`${isChangePassword && 'border-b-2 border-b-font02'} py-1`}>Change Password</button>
          </div>
          <div className='p-3 shadow-[2px_2px_10px_rgba(0,0,0,0.25)]'>
            {(isEditProfile && !isChangePassword) ? (<EditProfile />) : (<ChangePassword/>)}
          </div>
        </div>

      </div>
    </div>
  )
}

export default MyProfile