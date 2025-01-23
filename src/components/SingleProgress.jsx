import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosCheckmarkCircle } from "react-icons/io";

const SingleProgress = ({singleProgress}) => {
  const [isClassOpen,setIsClassOpen] = useState(false);
  const {id, seriesNo, totalVideo, duration, classes} = singleProgress;
  return (
    <div>
      <div onClick={()=>setIsClassOpen(!isClassOpen)} className='bg-font03 py-3 px-5 cursor-pointer space-y-2'>
        <div className='flex items-center justify-between text-font01'>
          <p className='text-xl'>Series No {seriesNo} : Halth yoga, Ashtanga...</p>
          <IoIosArrowDown />
        </div>
        <p className='text-sm text-font01 text-opacity-60 space-x-3'>
          <span>Total Video: {totalVideo}</span>
          <span>{duration}</span>
        </p>
      </div>
      {isClassOpen && <ul className='space-y-7 mt-7 px-5'>
        {classes?.map((singleClass,i)=>(
          <li className='flex gap-2 items-start'>
            <p className=''>
              <IoIosCheckmarkCircle className='text-green-500' size={28}/>
            </p>
            <p className='text-font01 flex flex-col gap-2'>
              <span className='text-gray-900'>{singleClass?.classNo} : Topic yoga : {singleClass?.topic}</span>
              <span className='text-sm tracking-wider leading-6'>{singleClass?.des}</span>
            </p>
          </li>
        ))}
      </ul>}
    </div>
  )
}

export default SingleProgress