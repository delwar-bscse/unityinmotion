import React from 'react'
import { about } from '../assets/assets'

const HomeAboutUs = () => {
  return (
    <>
      <div className="w-full grid grid-cols-1 lgl:grid-cols-2 gap-20 py-20 ">
        <div className='w-full h-full'>
          <img src={about} className='w-full h-full' alt="about" />
        </div>

        <div className='flex flex-col items-start gap-8 text-font01 px-4'>
          <button className='bg-font02 py-3 px-8 rounded-md text-font03'>About Us</button>
          <h2 className='text-4xl lgl:text-5xl font-semibold'>Why You Choose Us</h2>
          <p className='leading-10 tracking-wide'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here.</p>
          <div className='flex justify-between items-center w-full'>
            <div>
              <p className='text-font02 text-2xl mdl:text-4xl font-semibold'>1000+</p>
              <p>complete class</p>
            </div>
            <div className='text-4xl text-font01 text-opacity-70'>|</div>
            <div>
              <p className='text-font02 text-2xl mdl:text-4xl font-semibold'>24 Hour</p>
              <p>Unlimited Access</p>
            </div>
            <div className='text-4xl text-font01 text-opacity-70'>|</div>
            <div>
              <p className='text-font02 text-2xl mdl:text-4xl font-semibold'>500+</p>
              <p>Students</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeAboutUs