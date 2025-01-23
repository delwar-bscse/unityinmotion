import React, { useState } from 'react'
import { BsArrowDownCircle } from "react-icons/bs";

const AskedQuestion = ({singleQuestion}) => {
  const {title,des} = singleQuestion;
  const [isdesOpen, setIsdesOpen] = useState(false);

  return (
    <ul className='text-font01'>
      <li className='flex justify-between p-7 border-[1px] border-font01 border-opacity-50'>
        <span className='text-xl'>{title}</span>
        <BsArrowDownCircle size={28} className='text-font02 bg-font03 cursor-pointer' onClick={()=>setIsdesOpen(!isdesOpen)}/>
      </li>
      {isdesOpen && <li className='p-7 bg-secondary bg-opacity-20 border-[1px] border-font01 border-opacity-50 border-t-0'>{des}</li>}
    </ul>
  )
}

export default AskedQuestion