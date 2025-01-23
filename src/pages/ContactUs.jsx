import React from 'react'
import {Link} from 'react-router-dom'
import { FaHome } from "react-icons/fa"
import { TbSlash } from "react-icons/tb";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhone } from "react-icons/bi";
import ContactUsForm from '../components/ContactUsForm';

const ContactUs = () => {
  return (
    <div className='text-font01'>
      <div className='container mx-auto space-y-6 py-10'>

        <div className="text-2xl text-font01 text-opacity-70 flex items-center  gap-3">
            <Link to="/" className="flex items-center  gap-2 hover:text-red-700">
                <FaHome />
            </Link>

            <TbSlash />

            <div className="">Contact Us</div>
        </div>
        
        <h2 className='text-6xl'>Contact Us</h2>

        <div className='w-[600px] mx-auto'>
          <div className='flex justify-between items-center gap-3 pt-20' >
            <div className='flex'>
              <p className='flex gap-1 items-top'><AiOutlineMail size={24}/><span>Email : </span></p>
              <p className='pl-1 tracking-wide'> youremail@gmailcom<br/>letstalk@gmail.com</p>
            </div>
            <div className='flex'>
              <p className='flex gap-1 items-top'><BiPhone size={24}/><span>Phone : </span></p>
              <p className='pl-1 tracking-wide'> (+1)(888)7506866<br/>(+1)(888)7506866</p>
            </div>
          </div>
          <ContactUsForm />
        </div>
      </div>
    </div>
  )
}

export default ContactUs