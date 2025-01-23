import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { FaHome } from "react-icons/fa"
import { TbSlash } from "react-icons/tb";
import { blogDatas } from '../constants/blogDatas';
import { blog01, detailImage } from '../assets/assets';

const initialBlog = { 
  image:blog01, 
  title:"", 
  date:"", 
  topic:"", 
  heading:"", 
  des01:"", 
  des02:"", 
  des03:"", 
  des04:"", 
  des05:""
}

const BlogDetails = () => {
  const {id} = useParams();
  const [blogDetails, setBlogDetails] = useState(initialBlog);
  const {  date, topic, heading,  des02, des03, des04, des05} = blogDetails;

  useEffect(()=>{
    const newBlogDetails = blogDatas.filter((blog)=>blog.id.toString()===id)[0];
    setBlogDetails(newBlogDetails);
    console.log(newBlogDetails);
  },[]);

  return (
    <div className='text-font01'>
      <div className='container mx-auto space-y-6 pt-10 pb-28'>

        <div className="text-2xl text-font01 text-opacity-70 flex items-center  gap-3">
            <Link to="/" className="flex items-center  gap-2 hover:text-red-700">
                <FaHome />
            </Link>

            <TbSlash />

            <div className="">Blog Details</div>
        </div>
        
        <h2 className='text-6xl pb-4'>Details</h2>
        <div className="text-font01">
          <h2 className="text-4xl text-font01 text-opacity-90 my-5">Blog Image Stander Post</h2>
          <div className="flex justify-start gap-5 my-2 text-lg">
            <p className="">Topic: {topic}</p>
            <p>|</p>
            <p className="flex justify-start items-center gap-2">{date}</p>
          </div>
          <div className='w-full h-[600px] overflow-hidden flex justify-center items-center mt-16'>
            <img className='w-full' src={detailImage} alt='Yoga' />
          </div>
          <div className='flex flex-col gap-5 mt-6 leading-10 text-lg text-font01 text-opacity-70'>
          {des02}
          {des03}
          <h2 className='text-font01 text-4xl mt-6'>{heading}</h2>
          {des03}
          {des04}
          {des05}
          </div>
        </div>

      </div>
    </div>
  )
}

export default BlogDetails