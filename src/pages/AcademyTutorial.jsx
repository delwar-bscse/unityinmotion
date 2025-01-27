import React, { useState } from 'react'
import { academyStudioDatas, academyStudioDatas2 } from '../constants/academyStudioDatas'
import { Link, useParams } from 'react-router-dom'
import { FaHome } from "react-icons/fa"
import { TbSlash } from "react-icons/tb";
import { RiSearch2Line } from "react-icons/ri";
import { LuCalendarDays } from "react-icons/lu";
import { FaRegFileWord } from "react-icons/fa";
import { BsFiletypePdf } from "react-icons/bs";
import ProgressPieChart from '../components/ProgressPieChart';
import { progressSeriesDatas } from '../constants/progressSeriesDatas';
import SingleProgress from '../components/SingleProgress';

const AcademyTutorial = () => {
  const {academyId} = useParams();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className='my-10'>
      <div className='w-full max-w-[1280px] px-2  mx-auto'>

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

        <div className='flex flex-col lgl:flex-row gap-8'>
          {/* ------------ Video side -------------- */}
          <div className=' basis-2/3'>
            <div className="flex flex-col items-center justify-center">
              <video
                className="w-full h-auto"
                loop
                controls
              >
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className='flex flex-wrap items-center gap-y-2 gap-x-4 md:gap-10 text-sm md:text-lg text-font01 my-5'>
              <p>Topic : Yoga</p>
              <p>Data : Mon 11/06/24</p>
              <p className='flex items-center gap-1'>
                <BsFiletypePdf className='text-font02'/>
                <span>PDF File</span>
              </p>
              <p className='flex items-center gap-1'>
                <FaRegFileWord className='text-font02'/>
                <span>DOC File</span>
              </p>
            </div>
            <div className='text-font01 space-y-3 py-3'>
              <h2 className='text-2xl font-semibold'>45-Min advance vinyasa yoga</h2>
              <p className='leading-8 tracking-wide'>Dignissim, Vestibulum nec Nunc Nullam amet, quis quis convallis. duttincidunt Nunc nec Vestibulum ultrices Sed ac lacus vel malesuada Ut nulla, varius lacus sapien luctus maximus vitae nec dolor ex. efficitur. Nullam amet, elementum amet, eget amet, eu orci sodales. sodales. odio vitae at Nam orci leo See more...</p>
            </div>
          </div>
          
          {/* ------------ Pie chart side -------------- */}
          <div className=' basis-1/3 h-full max-h-[800px] overflow-y-auto px-2'>
            <ProgressPieChart  complete="80" uncomplete="20" />
            <div className='space-y-8 my-6'>
              {progressSeriesDatas?.map((singleProgress)=>(
                <SingleProgress key={singleProgress?.id} singleProgress={singleProgress}/>
              ))}
            </div>
          </div>
        </div>
        
        
        {/* ------------ more class like this -------------- */}
        <div className='flex justify-between items-center my-10'>
          <h2 className='text-2xl md:text-4xl text-font01'>More Class Like This</h2>
          <Link to="/academytostudio" className='text-font02 underline text-lg md:text-2xl'>View All</Link>
        </div>
        <div className='grid grid-cols-1 mdl:grid-cols-2 xl:grid-cols-3 gap-8'>
          {academyStudioDatas2?.map((singleAcademy)=>(
            <div key={singleAcademy?.id}>
              <div className='w-full h-[300px] bg-font03 overflow-hidden'>
                <img src={singleAcademy?.academyImg} alt="academy to studio" className='mim-h-[320px] w-auto'/>
              </div>
              <div className='flex justify-between items-center py-7'>
                <h2 className='text-2xl font-semibold text-font01'>{singleAcademy?.title}</h2>
                <Link to={`/academytostudio/${singleAcademy?.id}`}  className='bg-font01 text-font03 py-3 px-6'>Details</Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default AcademyTutorial