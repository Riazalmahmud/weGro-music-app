import React, { useState, useEffect, useContext } from 'react';
import { FaMusic } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { AuthContext } from './../../../Provider/AuthProvider';
const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {logOut, users} = useContext(AuthContext)
  // Function to toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close the mobile menu when the window size is increased
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
const handleLogOut = ()=>{
  logOut()
}
  return (
    <div>
      <nav className="bg-[#1C0357] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              {/* Logo */}
              <div>
                <a href="/" className="flex items-center py-5 px-2 text-white">
                <FaMusic />
                  <span className="font-bold ml-2 text-xl">MusicBangla</span>
                </a>
              </div>

             
            </div>
{
  console.log(users)
}
{

  users?.email ? <>  {/* Secondary nav */}
  <div className="hidden md:flex items-center space-x-1 gap-2">
    <a  className=" rounded cursor-pointer">
      <img className='w-10 rounded-full cursor-pointer' src={users.photoURL} alt="" />
       </a>
    <div onClick={handleLogOut} className="py-2 px-2 cursor-pointer bg-yellow-300 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded-lg transition duration-300">logout</div>

  </div>

  {/* Mobile button */}
  <div className="md:hidden flex items-center">
    <button className="mobile-menu-button" onClick={toggleMobileMenu}>
      <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div></>  :  <>
   {/* Secondary nav */}
   <div className="hidden md:flex items-center space-x-1">
              <a  className="py-2 px-4 border rounded"><Link to="/login">Login</Link> </a>
              <Link to="/register" className="py-2 px-3  bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded-lg transition duration-300">Register</Link>
     
            </div>

            {/* Mobile button */}
            <div className="md:hidden flex items-center">
              <button className="mobile-menu-button" onClick={toggleMobileMenu}>
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
  </>
}
           
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`mobile-menu md:hidden ${isMobileMenuOpen ? "" : "hidden"}`}>
          <a href="#" className="block py-2 px-4 text-sm   bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 ">Login</a>
          <a href="#" className="block  text-sm hover:bg-gray-200 py-2 px-4 border rounded">Registration</a>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
