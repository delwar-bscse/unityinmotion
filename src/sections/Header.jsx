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
import SearchProductModal from "../modals/SearchProductModal";
import { AiOutlineMenuUnfold } from "react-icons/ai";

const Header = () => {
  const location = useLocation();
  const [user,setUser] = useState(true);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isForgotModalOpen, setIsForgotModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenu = () =>{
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsProfileModalOpen(false);
  }
  const handleMyProfileModal = () =>{
    setIsProfileModalOpen(!isProfileModalOpen);
    setIsMobileMenuOpen(false);
  }

  // Handle User Login and Loout //
  const openProductSearchModal = () =>{
    setIsSearchModalOpen(true);
    setIsMobileMenuOpen(false);
  }

  const closeProductSearchModal = () =>{
    setIsSearchModalOpen(false);
  }

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
    setIsMobileMenuOpen(false);
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(true);
  };

  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };

  // For Login Modal //
  const openLoginModal = () => {
    setIsMobileMenuOpen(false);
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
      {/* --------------------------- Company logo --------------------------- */}
      <div className="w-full max-w-[1280px] mx-auto px-3 flex justify-between items-center relative">
        <Link to="/" className="">
          <img className="w-32 md:w-48" src={logo} alt="Company Logo" />
        </Link>

        {/* --------------------------- nav list --------------------------- */}
        <div className="hidden xl:block" id="navbar">
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
            {/* --------------------------- Product Search, Cart, Notification --------------------------- */}
            <div className="hidden mdl:flex justify-center items-center gap-4">
              <button onClick={openProductSearchModal} className="text-font01 font-bold"><FiSearch  size={28} /></button>
              <Link to="/cart" className="text-font01 font-bold"><LuShoppingCart  size={28} /></Link>
              {user && <Link onClick={()=>setIsMobileMenuOpen(false)} to="/notifications" className="text-font01 font-bold"><MdOutlineNotifications  size={28} /></Link>}
            </div>
            {/* --------------------------- Control Profile, Login, Logout, Menu button --------------------------- */}
            <div className="flex justify-end items-center gap-2">
              { user ? 
              (<button className="flex justify-center items-center gap-1" onClick={handleMyProfileModal}>
                <img className="w-10 h-10 sml:w-12 sml:h-12 rounded-full" src={profile01} alt="Profile Picture" />
                <IoIosArrowDown size={16} className="hidden xl:block"/>
              </button>) :
              (<div className="hidden text-sm gap-5 xl:flex">
                <button onClick={openLoginModal}  className=" border-[1px] border-primary text-primary px-10 py-4">Log In</button>
                <button onClick={openRegisterModal} className=" bg-primary text-gray-100 px-10 py-4">Sign Up</button>
              </div>)
              }
              <div onClick={handleMobileMenu} className="absoulute top-0 right-0 xl:hidden"><AiOutlineMenuUnfold className={`text-font01 text-4xl ${isMobileMenuOpen && 'rotate-180'} duration-300`}/></div>
            </div>
          </div>

          {/* ------------ My Profile Modal -------------- */}
          {isProfileModalOpen && <MyProfileModal logoutUser={logoutUser} setIsMobileMenuOpen={setIsMobileMenuOpen} setIsProfileModalOpen={setIsProfileModalOpen}/>}

          {/* ------------ My Profile Modal -------------- */}
          {isRegisterModalOpen && <RegistrationModal isOpen={isRegisterModalOpen} onClose={closeRegisterModal} openLoginModal={openLoginModal}/>}

          {/* ------------ My Profile Modal -------------- */}
          {isLoginModalOpen && <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} openRegisterModal={openRegisterModal} openForgotModal={openForgotModal} loginUser={loginUser}/>}

          {/* ------------ My Profile Modal -------------- */}
          {isForgotModalOpen && <ForgotPasswordModal isOpen={isForgotModalOpen} onClose={closeForgotModal}/>}

          {/* ------------ My Profile Modal -------------- */}
          {isSearchModalOpen && <SearchProductModal isOpen={isSearchModalOpen} onClose={closeProductSearchModal}/>}

        </div>
      </div>

      {/* --------------------------- Mobile Menu --------------------------- */}
      <div className={`absolute box-border top-[87px] md:top-[99px] left-0 bg-secondary w-[260px] ${isMobileMenuOpen ? 'translate-x-[0px]' : '-translate-x-[300px]'} duration-300 px-4`} style={{ height: 'calc(100vh - 88px)' }}>
        {/* --------------------------- Product Search, Cart, Notification --------------------------- */}
        <div className="mdl:hidden flex items-center gap-4 my-6">
          <button onClick={openProductSearchModal} className="text-font01 font-bold"><FiSearch  size={28} /></button>
          <Link onClick={()=>setIsMobileMenuOpen(false)} to="/cart" className="text-font01 font-bold"><LuShoppingCart  size={28} /></Link>
          {user && <Link onClick={()=>setIsMobileMenuOpen(false)} to="/notifications" className="text-font01 font-bold"><MdOutlineNotifications  size={28} /></Link>}
        </div>
        <ul className="text-base sm:text-xl flex flex-col font-semibold tracking-wider gap-6 my-6 text-font01">
          {navLinks?.map((singleLink,i)=>(
            <li onClick={()=>{setIsMobileMenuOpen(false)}} key={i}>
              <NavLink to={singleLink.link} className={`font-light text-font01 hover:text-[#B47000] ${location.pathname === singleLink.link && "active"}`}>{singleLink.title}</NavLink>
            </li>
          ))}
        </ul>
        <div className="xl:hidden text-sm gap-5 flex flex-col">
          <button onClick={openLoginModal}  className="border-[1px] border-primary text-primary px-10 py-4">Log In</button>
          <button onClick={openRegisterModal} className="bg-primary text-gray-100 px-10 py-4">Sign Up</button>
        </div>
      </div>
    </header>
  )
}

export default Header