import React from 'react'
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { profile01 } from '../assets/assets';

const SlideComponent = () => {
  return (
    <>
      <div className="px-40 py-4 bg-font03 text-font01 flex flex-col items-center justify-center gap-3 w-full">
        <p className="flex items-start gap-3">
          <BiSolidQuoteAltLeft className="text-font01 text-opacity-50" size={64}/>
          <span className="pt-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more.</span>
        </p>
        <div className="my-4">
          <img src={profile01} alt="" className="w-20 h-20 rounded-full"/>
        </div>
        <h2 className='text-lg font-semibold'>Wade Warent</h2>
        <p>Actor</p>
      </div>
    </>
  )
}

export default SlideComponent