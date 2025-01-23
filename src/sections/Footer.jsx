import React, { useState } from 'react'
import { logo02 } from '../assets/assets'
import {Link} from 'react-router-dom'
import { AiOutlineMail } from "react-icons/ai";
import { BiPhone } from "react-icons/bi";
import { RiSendPlaneFill } from "react-icons/ri";


const Footer = () => {
  const [email, setEmail] = useState('');
  return (
    <footer className='bg-primary text-font03 pt-20 pb-32'>
      <div className='container mx-auto grid grid-cols-4 gap-8'>
        <div className='space-y-6'>
          <img src={logo02} alt="Company Logo" />
          <p className='leading-10 tracking-wider'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
        </div>
        <div className='space-y-6 pl-16'>
          <h2 className="text-3xl font-semibold mb-16">Information</h2>
          <ul className='space-y-8'>
            <li><Link>Contact Us</Link></li>
            <li><Link>Privacy Policy</Link></li>
            <li><Link>Terms & Conditions</Link></li>
          </ul>
        </div>
        <div className=''>
          <h1 className="text-3xl font-semibold mb-16">Help & Support</h1>
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
        <div>
          <h2 className="text-3xl font-semibold mb-16">Newsletters Sigh Up</h2>
          <p className='mb-6'>Get Alert Directly Into Your Inbox After Each Post</p>
          <div className="bg-font03 rounded-full p-1 box-border flex items-center overflow-hidden">
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
    </footer>
  )
}

export default Footer