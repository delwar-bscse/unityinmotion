import React from 'react'
import { Link } from 'react-router-dom';
import { FiCalendar } from "react-icons/fi";

const SingleBlog = ({singleBlog}) => {
  const { id, image, title, date, topic, des01} = singleBlog;
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className='w-full h-[300px] overflow-hidden'>
        <img className='w-auto h-full hover:scale-105 transition-all duration-300' src={image} alt='Yoga' />
      </div>
      <div className="flex justify-start gap-5 my-2 text-lg">
        <p className="flex justify-start items-center gap-2">
          <FiCalendar size={20}/>
          <span>{date}</span>
        </p>
        <p className="">Topic: {topic}</p>
      </div>
      <h2 className="text-2xl font-bold my-5">{title}</h2>
      <p className="text-gray-700">{des01}</p>
      <Link to={`./${id}`} className="text-font02 font-semibold hover:text-opacity-60 hover:border-opacity-60 block border-[1px] border-font02 py-3 text-center mt-5">Read more</Link>
    </div>
  );
}

export default SingleBlog