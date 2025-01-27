import React from 'react'
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { profile01 } from '../assets/assets';

const SlideComponent = () => {
  return (
    <>
      <div className="px-4 md:px-16 lg:px-24 xl:px-40 py-4 bg-font03 text-font01 flex flex-col items-center justify-center sml:gap-3 w-full">
        <p className="flex items-start gap-1 sml:gap-3">
          <BiSolidQuoteAltLeft className="text-font01 text-opacity-50" size={64}/>
          <span className="pt-4 text-[10px] sml:text-base">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more.</span>
        </p>
        <div className="my-4">
          <img src={profile01} alt="" className="w-14 sml:w-20 h-14 sml:h-20 rounded-full"/>
        </div>
        <h2 className='sml:text-lg font-semibold'>Wade Warent</h2>
        <p className='text-[10px] sml:text-base'>Actor</p>
      </div>
    </>
  )
}

export default SlideComponent