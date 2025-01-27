import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { FaHome } from "react-icons/fa"
import { TbSlash } from "react-icons/tb";
import { notificationDatas } from '../constants/notificationDatas';

const Notification = () => {
  const [allNotifications, setAllNotifications] = useState(notificationDatas);

  const handleSeen = (id) =>{
    const newNotifications = allNotifications?.map((notification)=>{
      if(notification?.id===id){
        return {
          ...notification,
          seen:"true",
        }
      }
      return notification;
    })
    setAllNotifications(newNotifications);
  }

  return (
    <div className='text-font01'>
      <div className='max-w-[1280px] w-full mx-auto space-y-6 py-10 px-2'>

        <div className="text-2xl text-font01 text-opacity-70 flex items-center  gap-3">
            <Link to="/" className="flex items-center  gap-2 hover:text-red-700">
                <FaHome />
            </Link>

            <TbSlash />

            <div className="">Notifictions</div>
        </div>
        
        <div className='space-y-2'>
          {allNotifications?.map((notification)=>(
            <div onClick={()=>handleSeen(notification?.id)} key={notification?.id} className={`${notification?.seen==="false" && 'bg-[#D7E6F4] cursor-pointer hover:bg-opacity-50'} w-full flex flex-col mdl:flex-row mdl:justify-between justify-center items-center py-2 md:py-7 px-2 md:px-12 rounded-lg`}>
              <div className='space-y-3 text-font01'>
                <h3>{notification?.title}</h3>
                <p className='text-sm font-light tracking-wider'>{notification?.info}</p>
              </div>
              <p className='text-[12px] md:text-sm font-light tracking-wider py-2'>{notification?.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Notification