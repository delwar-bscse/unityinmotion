import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { FaHome } from "react-icons/fa"
import { TbSlash } from "react-icons/tb";
import { blogDatas } from '../constants/blogDatas';
import SingleBlog from '../components/SingleBlog';
import { RiSearch2Line } from "react-icons/ri";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className='text-font01'>
      <div className='container mx-auto space-y-6 pt-10 pb-28'>

        <div className="text-2xl text-font01 text-opacity-70 flex items-center  gap-3">
            <Link to="/" className="flex items-center  gap-2 hover:text-red-700">
                <FaHome />
            </Link>

            <TbSlash />

            <div className="">Blog</div>
        </div>
        
        <h2 className='text-6xl'>Blog</h2>
          
        <div className="bg-gray-100 text-font01 font-light text-xl py-3 rounded-lg p-2 flex justify-start items-center gap-3 w-[500px]">
          <RiSearch2Line className='cursor-pointer'  size={30}/>
          <input 
            type="text" 
            placeholder="Search here..." 
            className="bg-transparent outline-none flex-1" 
            value={searchTerm} 
            onChange={handleSearchChange} 
          />
        </div>

        <div className='grid grid-cols-3 gap-5'>
          {blogDatas?.map((singleBlog)=>(
            <div key={singleBlog?.id}>
              <SingleBlog singleBlog={singleBlog}/>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Blog