import React, { useState } from 'react'
import { academyStudioDatas } from '../constants/academyStudioDatas'
import { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa"
import { TbSlash } from "react-icons/tb";
import { RiSearch2Line } from "react-icons/ri";
import { LuCalendarDays } from "react-icons/lu";

const AcademyToStudio = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className='my-10'>
      <div className='container mx-auto'>

        <div className="text-2xl text-font01 text-opacity-70 flex items-center  gap-3">
            <Link to="/" className="flex items-center  gap-2 hover:text-red-700">
                <FaHome />
            </Link>

            <TbSlash />

            <div className="">Demand Library</div>
        </div>

        <h2 className='text-5xl py-5 text-font01'>Academy to Studio</h2>

        <div className='bg-primary p-3 my-8 flex justify-end items-center gap-3'>
          <div className="bg-gray-100 text-font02 font-light text-xl py-3 p-2 flex justify-start items-center gap-3 w-[500px]">
            <RiSearch2Line className='cursor-pointer text-font02' size={30}/>
            <input 
              type="text" 
              placeholder="Search here..." 
              className="bg-transparent outline-none flex-1 text-font02 placeholder:text-font02" 
              value={searchTerm} 
              onChange={handleSearchChange}
            />
          </div>
          <div className='bg-font03 p-3'>
            <LuCalendarDays className='cursor-pointer text-font02' size={28}/>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-8'>
          {academyStudioDatas?.map((singleAcademy)=>(
            <div key={singleAcademy?.id}>
              <div className='w-full h-[300px] bg-font03 overflow-hidden'>
                <img src={singleAcademy?.academyImg} alt="academy to studio" className='mim-h-[320px] w-auto'/>
              </div>
              <div className='flex justify-between items-center py-7'>
                <h2 className='text-2xl font-semibold text-font01'>{singleAcademy?.title}</h2>
                <Link to={`/academytostudio/${singleAcademy?.id}`} className='bg-font01 text-font03 py-3 px-6'>Details</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AcademyToStudio