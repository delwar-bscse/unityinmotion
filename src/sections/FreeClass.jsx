import React from "react";


const FreeClass = () => {

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-20 ">
        <div className='flex flex-col items-start justify-center gap-8 text-font01'>
          <h2 className='text-5xl font-semibold'>Why You Choose Us</h2>
          <p className='leading-10 tracking-wide'>This class is a demo class, you get all the exercises, guidelines and tips related to fitness in our fitness course. So don't delay and join our community now.</p>
          <button className='bg-font02 py-3 px-8 rounded-md text-font03'>Join Our Community</button>
        </div>

        <div className="flex flex-col items-center justify-center">
          <video
            className="w-full max-w-3xl h-auto rounded-lg shadow-lg"
            autoPlay
            loop
            controls
            muted
          >
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  )
}

export default FreeClass