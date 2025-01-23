import { Link, NavLink, useLocation } from "react-router-dom";
import { navLinks } from "../constants/navbarDatas";
import { LuShoppingCart } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";
import { MdOutlineNotifications } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { logo, profile01 } from "../assets/assets";
import MyProfileModal from "../modals/MyProfileModal";
import { useState } from "react";
import RegistrationModal from "../modals/RegistrationModal";
import LoginModal from "../modals/LoginModal";
import ForgotPasswordModal from "../modals/ForgotPasswordModal";

const Header = () => {
  const location = useLocation();
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [user,setUser] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isForgotModalOpen, setIsForgotModalOpen] = useState(false);

  // Handle User Login and Loout //
  const loginUser = () =>{
    setUser(true);
  }

  const logoutUser = () =>{
    setIsProfileModalOpen(false);
    setUser(false);
  }

  // For Register Modal //
  const openRegisterModal = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(true);
  };

  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };

  // For Login Modal //
  const openLoginModal = () => {
    setIsRegisterModalOpen(false);
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  // For Forgot Modal //
  const openForgotModal = () => {
    setIsLoginModalOpen(false);
    setIsForgotModalOpen(true);
  };

  const closeForgotModal = () => {
    setIsForgotModalOpen(false);
  };


  return (
    <header className="bg-secondary h-[88px] md:h-[100px] sticky flex justify-center top-0 z-40">
        <div className="container mx-auto px-3 flex justify-between items-center">
          <Link to="/" className="">
            <img className="w-32 md:w-48" src={logo} alt="Company Logo" />
          </Link>

          <div className=" " id="navbar">
            <ul className="text-lg flex items-center font-semibold tracking-wider justify-center md:gap-6 lg:gap-10 text-font03">
              {navLinks?.map((singleLink,i)=>(
                <li key={i}>
                  <NavLink to={singleLink.link} className={`font-light text-lg text-font01 hover:text-[#B47000] ${location.pathname === singleLink.link && "active"}`}>{singleLink.title}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="flex items-center gap-6">
              <div className="flex justify-center items-center gap-4">
                <button className="text-font01 font-bold"><FiSearch  size={28} /></button>
                <button className="text-font01 font-bold"><LuShoppingCart  size={28} /></button>
                {user && <button className="text-font01 font-bold"><MdOutlineNotifications  size={28} /></button>}
              </div>
              {/* ------------ Control Profile, Login, Logout -------------- */}
              <div>
                { user ? 
                (<button className="flex justify-center items-center gap-1" onClick={()=>setIsProfileModalOpen(!isProfileModalOpen)}>
                  <img className="w-12 h-12 rounded-full" src={profile01} alt="Profile Picture" />
                  <IoIosArrowDown size={16} />
                </button>) :
                (<div className="text-sm gap-5 flex">
                  <button onClick={openLoginModal}  className=" border-[1px] border-primary text-primary px-10 py-4">Log In</button>
                  <button onClick={openRegisterModal} className=" bg-primary text-gray-100 px-10 py-4">Sign Up</button>
                </div>)
                }
              </div>
            </div>

            {/* ------------ My Profile Modal -------------- */}
            {isProfileModalOpen && <MyProfileModal logoutUser={logoutUser}/>}

            {/* ------------ My Profile Modal -------------- */}
            {isRegisterModalOpen && <RegistrationModal isOpen={isRegisterModalOpen} onClose={closeRegisterModal} openLoginModal={openLoginModal}/>}

            {/* ------------ My Profile Modal -------------- */}
            {isLoginModalOpen && <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} openRegisterModal={openRegisterModal} openForgotModal={openForgotModal} loginUser={loginUser}/>}

            {/* ------------ My Profile Modal -------------- */}
            {isForgotModalOpen && <ForgotPasswordModal isOpen={isForgotModalOpen} onClose={closeForgotModal}/>}

          </div>
        </div>
      </header>
  )
}

export default Header