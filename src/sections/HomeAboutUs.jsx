import React from 'react'
import { aboutus01, aboutus02 } from '../assets/assets'

const HomeAboutUs = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-5 py-20 ">
        <div className='w-[500px] h-[500px] mx-auto relative'>
          <div className='overflow-hidden rounded-2xl bg-font03 h-[300px] w-[300px] absolute top-0 left-0'>
            <img src={aboutus01} alt="" className='w-[300px]'/>
          </div>
          <div className='overflow-hidden rounded-3xl bg-font03 border-[12px] border-font03 h-[300px] w-[300px] absolute bottom-0 right-0'>
            <img src={aboutus02} alt="" className='w-[300px]'/>
          </div>
          <div className='bg-font02 text-font03 inline-block p-8 rounded-2xl absolute bottom-0 left-0'>
            <p className=' text-6xl font-semibold'>16+</p>
            <p className='font-light'>Successful</p>
            <p className='font-light'>Years</p>
          </div>
        </div>

        <div className='flex flex-col items-start gap-8 text-font01'>
          <button className='bg-font02 py-3 px-8 rounded-md text-font03'>About Us</button>
          <h2 className='text-5xl font-semibold'>Why You Choose Us</h2>
          <p className='leading-10 tracking-wide'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here.</p>
          <div className='flex justify-between items-center w-full'>
            <div>
              <p className='text-font02 text-4xl font-semibold'>1000+</p>
              <p>complete class</p>
            </div>
            <div className='text-4xl text-font01 text-opacity-70'>|</div>
            <div>
              <p className='text-font02 text-4xl font-semibold'>24 Hour</p>
              <p>Unlimited Access</p>
            </div>
            <div className='text-4xl text-font01 text-opacity-70'>|</div>
            <div>
              <p className='text-font02 text-4xl font-semibold'>500+</p>
              <p>Students</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeAboutUs