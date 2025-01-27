import React, { useState } from 'react'
import { logo02 } from '../assets/assets'
import {Link} from 'react-router-dom'
import { AiOutlineMail } from "react-icons/ai";
import { BiPhone } from "react-icons/bi";
import { RiSendPlaneFill } from "react-icons/ri";
import { LiaFacebook } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaRegCopyright } from "react-icons/fa6";


const Footer = () => {
  const [email, setEmail] = useState('');
  return (
    <footer>
      <div className='w-full bg-primary text-font03 py-10 xl:pt-20 xl:pb-32'>
      {/* --------------------------- Footer Up --------------------------- */}
        <div className='w-full max-w-[1280px] px-4 xl:px-0 mx-auto grid grid-cols-1 mdl:grid-cols-2 lgl:grid-cols-4 gap-12 md:gap-8'>
          {/* --------------------------- Column 01 --------------------------- */}
          <div className='space-y-6'>
            <img src={logo02} alt="Company Logo" />
            <p className='leading-10 tracking-wider'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
          </div>
          {/* --------------------------- Column 02 --------------------------- */}
          <div className='space-y-6 xl:pl-10'>
            <h2 className="text-2xl font-semibold md:mb-16  mb-6">Information</h2>
            <ul className='space-y-8'>
              <li><Link to="/contactus">Contact Us</Link></li>
              <li><Link to="/privacypolicy">Privacy Policy</Link></li>
              <li><Link to="/termscondition">Terms & Conditions</Link></li>
            </ul>
          </div>
          {/* --------------------------- Column 013--------------------------- */}
          <div className=''>
            <h1 className="text-2xl font-semibold md:mb-16  mb-6">Help & Support</h1>
            <div className='space-y-6'>
              <div className='flex'>
                <p className='flex gap-1 items-top'><AiOutlineMail size={24}/><span>Email : </span></p>
                <p className='pl-1 tracking-wider'> youremail@gmailcom<br/>letstalk@gmail.com</p>
              </div>
              <div className='flex'>
                <p className='flex gap-1 items-top'><BiPhone size={24}/><span>Phone : </span></p>
                <p className='pl-1 tracking-wider'> (+1)(888)7506866<br/>(+1)(888)7506866</p>
              </div>
            </div>            
          </div>
          {/* --------------------------- Column 04 --------------------------- */}
          <div>
            <h2 className="text-2xl font-semibold md:mb-16 mb-6">Newsletters Sigh Up</h2>
            <p className='mb-6'>Get Alert Directly Into Your Inbox After Each Post</p>
            <div className="max-w-[500px] bg-font03 rounded-full p-1 box-border flex items-center overflow-hidden">
              <div className=" text-font01 flex-grow">
                <input 
                  type="email" 
                  className="bg-font03 pl-5 w-full focus:outline-none" 
                  placeholder="Enter Your Email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                />
              </div>
              <div className="bg-[#E8D3B0] rounded-full p-2 overflow-hidden cursor-pointer">
                <RiSendPlaneFill className='text-primary' size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --------------------------- Footer bottom --------------------------- */}
      <div className='bg-black'>
        <div className='w-full max-w-[1280px] mx-auto text-font03 text-lg flex flex-col mdl:flex-row justify-between items-center gap-2 py-4 mdl:px-4'>
          <p className='flex items-center text-sm sml:text-lg'>
            <FaRegCopyright />
            <span>2024Spaktech.Agency | All right Reserved</span>
          </p>
          <p className='text-2xl hidden mdl:block'>|</p>
          <ul className='flex items-center gap-10'>
            <li><Link to="https://www.facebook.com/" target='_blank'><LiaFacebook size={36}/></Link></li>
            <li><Link to="https://www.instagram.com/" target='_blank'><FaInstagram  size={28}/></Link></li>
            <li><Link to="https://x.com/" target='_blank'><BsTwitterX  size={24}/></Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer