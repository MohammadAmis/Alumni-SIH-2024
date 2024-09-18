import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaCalendarAlt, FaTrophy, FaUserCircle } from 'react-icons/fa';
import { useAuth } from './AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef(null);
  const { isLoggedIn, userRole, logout } = useAuth(); // Use isLoggedIn and userRole from context
  const navigate = useNavigate();

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setProfileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle logout
  const handleLogout = () => {
    logout();
    setProfileMenuOpen(false);
    navigate('/');
  };

  return (
    <nav className="bg-blue-950  shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">AIMHSSCE</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 ">
          {/* Public Routes */}
        {userRole !== 'government' && (
          <>
            <Link to="/" className="text-white text-xl hover:text-black hover:bg-slate-300 hover:px-5 hover:py-2 hover:rounded-lg flex items-center space-x-1">Home</Link>
            <Link to="/events" className="text-white text-xl hover:text-black hover:bg-slate-300 hover:px-5 hover:py-2 hover:rounded-lg flex items-center space-x-1">Events&Programs</Link>
            <Link to="/success-story" className="text-white text-xl hover:text-black hover:bg-slate-300 hover:px-5 hover:py-2 hover:rounded-lg flex items-center space-x-1">Success Stories</Link>
            <Link to="/about" className="text-white text-xl hover:text-black hover:bg-slate-300 hover:px-5 hover:py-2 hover:rounded-lg flex items-center space-x-1">About</Link>
            <Link to="/alumni-directory" className="text-white text-xl hover:text-black hover:bg-slate-300 hover:px-5 hover:py-2 hover:rounded-lg flex items-center space-x-1">Alumni</Link>
            <Link to="/job-portal" className="text-white text-xl hover:text-black hover:bg-slate-300 hover:px-5 hover:py-2 hover:rounded-lg flex items-center space-x-1">Jobs&Internship</Link>
            <Link to="/news" className="text-white text-xl  hover:text-black hover:bg-slate-300 hover:px-5 hover:py-2 hover:rounded-lg flex items-center space-x-1">News</Link>
            <Link to="/help" className="text-white text-xl  hover:text-black hover:bg-slate-300 hover:px-5 hover:py-2 hover:rounded-lg flex items-center space-x-1">Help</Link>
          </>
          )}
          
          {/* Conditional Routes based on userRole */}
          {isLoggedIn && userRole === 'registered' && (
            <>
              <Link to="/community" className="text-white text-xl  hover:text-black hover:bg-slate-300 hover:px-5 hover:py-2 hover:rounded-lg flex items-center space-x-1">Community</Link>
              <Link to="/engagement" className="text-white text-xl  hover:text-black hover:bg-slate-300 hover:px-5 hover:py-2 hover:rounded-lg flex items-center space-x-1">Engagement</Link>
            </>
          )}

          {isLoggedIn && userRole === 'college' && (
            <>
              <Link to="/college-dashboard" className="text-white text-xl  hover:text-black hover:bg-slate-300 hover:px-5 hover:py-2 hover:rounded-lg flex items-center space-x-1">College Dashboard</Link>
              <Link to="/about-portal" className="text-white text-xl  hover:text-black hover:bg-slate-300 hover:px-5 hover:py-2 hover:rounded-lg flex items-center space-x-1">About Portal</Link>
            </>
          )}

          {isLoggedIn && userRole === 'government' && (
            <>
              <Link to="/college-directory" className="text-white text-xl  hover:text-black hover:bg-slate-300 hover:px-5 hover:py-2 hover:rounded-lg flex items-center space-x-1">Colleges</Link>
              <Link to="/govt-dashboard" className="text-white text-xl  hover:text-black hover:bg-slate-300 hover:px-5 hover:py-2 hover:rounded-lg flex items-center space-x-1">Dashboard</Link>
              <Link to="/about-portal" className="text-white text-xl  hover:text-black hover:bg-slate-300 hover:px-5 hover:py-2 hover:rounded-lg flex items-center space-x-1">About Portal</Link>
            </>
          )}
        </div>

       {/* Profile Image and Menu */}
<div className="relative md:block" ref={profileMenuRef}>
  <button onClick={() => setProfileMenuOpen(!profileMenuOpen)} className="focus:outline-none">
    <img
      src="https://via.placeholder.com/40"
      alt="Profile"
      className="w-10 h-10 rounded-full"
    />
  </button>

  {profileMenuOpen && (
    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10">
      {!isLoggedIn ? (
        // If the user is not logged in, show the Login option
        <Link to="/login" className="px-4 py-2 text-gray-700 hover:bg-gray-200 flex items-center space-x-2">
          <FaUserCircle /> <span>Login</span>
        </Link>
      ) : (
        // If the user is logged in, show appropriate options based on userRole
        <>
          {userRole === 'registered' && (
            <>
              <Link to="/profile" className="px-4 py-2 text-gray-700 hover:bg-gray-200 flex items-center space-x-2">
                <FaUserCircle /> <span>Profile</span>
              </Link>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200 flex items-center space-x-2"
              >
                <FaUserCircle /> <span>Logout</span>
              </button>
            </>
          )}

          {userRole === 'college' && (
            <>
              <Link to="/college-profile" className="px-4 py-2 text-gray-700 hover:bg-gray-200 flex items-center space-x-2">
                <FaUserCircle /> <span>Profile</span>
              </Link>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200 flex items-center space-x-2"
              >
                <FaUserCircle /> <span>Logout</span>
              </button>
            </>
          )}

          {userRole === 'government' && (
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200 flex items-center space-x-2"
            >
              <FaUserCircle /> <span>Logout</span>
            </button>
          )}
        </>
      )}
    </div>
  )}
</div>



      </div>


          {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>


      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-background">
          <Link to="/" className="px-4 py-2 text-white hover:bg-gray-200 flex items-center space-x-1">
            Home
          </Link>
          <Link to="/events" className="px-4 py-2 text-white hover:bg-gray-200 flex items-center space-x-1">
            Events
          </Link>
          <Link to="/alumni-directory" className="px-4 py-2 text-white hover:bg-gray-200 flex items-center space-x-1">
            Alumni
          </Link>
          <Link to="/job-portal" className="px-4 py-2 text-white hover:bg-gray-200 flex items-center space-x-1">
            Jobs&Placement
          </Link>
          <Link to="/success-story" className="px-4 py-2 text-white hover:bg-gray-200 flex items-center space-x-1">
            Success Story
          </Link>
          <Link to="/news" className="px-4 py-2 text-white hover:bg-gray-200 flex items-center space-x-1">
            News&Opinion
          </Link>
          <Link to="/about" className="px-4 py-2 text-white hover:bg-gray-200 flex items-center space-x-1">
            About Us
          </Link>
          
          {/* Conditional links for mobile view based on user roles */}
          {isLoggedIn && userRole === 'registered' &&(
            <>
              <Link to="/community" className="px-4 py-2 text-white hover:bg-gray-200 flex items-center space-x-1">
                Community
              </Link>
              <Link to="/engagement" className="px-4 py-2 text-white hover:bg-gray-200 flex items-center space-x-1">
                Engagement
              </Link>
            </>
          )}
          {isLoggedIn && userRole === 'college' &&(
            <>
              <Link to="/college-dashboard" className="px-4 py-2 text-white hover:bg-gray-200 flex items-center space-x-1">
                Dashboard
              </Link>
              <Link to="/about-portal" className="px-4 py-2 text-white hover:bg-gray-200 flex items-center space-x-1">About Portal</Link>
            </>
          )}
          {isLoggedIn && userRole === 'government' &&(
            <>
              <Link to="/college-directory" className="px-4 py-2 text-white hover:bg-gray-200 flex items-center space-x-1">
                Colleges
              </Link>
              <Link to="/about-portal" className="px-4 py-2 text-white hover:bg-gray-200 flex items-center space-x-1">
                About Portal
              </Link>
              <Link to="/govt-dashboard" className="px-4 py-2 text-white hover:bg-gray-200 flex items-center space-x-1">
                Dashboard
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
