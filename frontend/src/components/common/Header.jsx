import React from "react";
import { Link, useLocation } from "react-router-dom";
import UnicornLogo from "../../assets/UnicornLogo.png";
import Facebook from '../../assets/fcbk.png';
import Instagram from '../../assets/insta.png';
import LinkedIn from '../../assets/linked.png';
import Whatsapp from '../../assets/wtsp.png';
import Twitter from '../../assets/twit.png';

const Header = () => {
  const location = useLocation();

  // Navigation items
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  // Check if current path is active
  const isActive = (path) => location.pathname === path;

  // Handle Get an Estimate button click
  const handleEstimateClick = () => {
    window.location.href = "/contact";
  };

  return (
    <header className="bg-white shadow-md w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src={UnicornLogo}
                alt="Unicorn Tech Logo"
                className="h-[36px] sm:h-[45px] lg:h-[50px] w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation - Show only on large screens and above */}
          <nav className="hidden xl:flex items-center space-x-6 2xl:space-x-8 flex-shrink-0">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`
                  text-sm font-medium transition-colors duration-200 hover:text-black whitespace-nowrap
                  ${
                    isActive(item.path)
                      ? "text-black font-semibold"
                      : "text-[#797979]"
                  }
                `}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Get an Estimate Button (Desktop) - Show only on large screens */}
          <div className="hidden xl:block flex-shrink-0">
            <button
              onClick={handleEstimateClick}
              className="
                bg-black text-white px-4 lg:px-6 py-2 rounded-full text-sm font-medium
                hover:bg-gray-800 transition-all duration-300 transform hover:scale-105
                focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50
                whitespace-nowrap
              "
            >
              Get an Estimate
            </button>
          </div>

          {/* Mobile Menu Button - Show on screens smaller than xl */}
          <div className="xl:hidden flex-shrink-0">
            <MobileMenu navItems={navItems} isActive={isActive} />
          </div>
        </div>
      </div>
    </header>
  );
};

// Mobile Menu Component
const MobileMenu = ({ navItems, isActive }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleEstimateClick = () => {
    window.location.href = "/contact";
    setIsOpen(false);
  };

  // Close menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.mobile-menu-container')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Prevent body scroll when menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div className="relative mobile-menu-container">
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="p-2 rounded-md text-black hover:bg-gray-100 focus:outline-none transition-colors"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Full Screen Overlay with Blur */}
      {isOpen && (
        <>
          {/* Blur Background Overlay */}
          <div 
            className="fixed top-0 left-0 right-0 h-16  backdrop-blur-md z-40"
            onClick={toggleMenu}
          ></div>

          {/* Dropdown Mobile Menu */}
          <div className="fixed rounded-xl top-3 left-2 right-2 bg-[#2f2f2f]/96 shadow-xl z-50">
            {/* Header with Logo and Close */}
            <div className="flex items-center justify-between p-4 border-b border-gray-600">
              <div className="flex items-center space-x-2">
                <img
                  src={UnicornLogo}
                  alt="Unicorn Tech Logo"
                  className="w-auto h-[50px] object-contain"
                />
              </div>
              <button
                onClick={toggleMenu}
                className=" bg-black text-white  px-5 py-1 rounded-full"
                aria-label="Close menu"
              >
                <span className="text-lg  font-medium ">Close</span>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="px-6 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={toggleMenu}
                  className={`
                    block py-3 px-3 text-base font-medium transition-all duration-200 rounded-md
                    ${
                      isActive(item.path)
                        ? "text-[#4587C7] font-semibold "
                        : "text-white hover:text-[#4587C7] hover:bg-gray-700"
                    }
                  `}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Additional Menu Items */}
              <Link
                to="/privacy"
                onClick={toggleMenu}
                className="block py-3 px-3 text-base font-medium text-white hover:text-[#4587C7] hover:bg-gray-700 transition-colors rounded-md"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                onClick={toggleMenu}
                className="block py-3 px-3 text-base font-medium text-white hover:text-[#4587C7] hover:bg-gray-700 transition-colors rounded-md"
              >
                Terms & Condition
              </Link>
            </nav>

            {/* Bottom Section */}
            <div className="p-6 border-t border-gray-600">
              <div className="flex justify-between items-center">
                {/* Get an Estimate Button */}
                <button
                  onClick={handleEstimateClick}
                  className="bg-black text-white py-1.5 px-3 rounded-full text-sm font-arial hover:bg-gray-200 transition-colors"
                >
                  Get an Estimate
                </button>
                
                {/* Social Icons */}
                <div className="flex space-x-2">
                  <a href="#" aria-label="Facebook" className="hover:opacity-80 transition-opacity">
                    <img src={Facebook} className="w-7 h-7" alt="Facebook" />
                  </a>
                  <a href="#" aria-label="Instagram" className="hover:opacity-80 transition-opacity">
                    <img src={Instagram} className="w-7 h-7" alt="Instagram" />
                  </a>
                  <a href="#" aria-label="LinkedIn" className="hover:opacity-80 transition-opacity">
                    <img src={LinkedIn} className="w-7 h-7" alt="LinkedIn" />
                  </a>
                  <a href="#" aria-label="WhatsApp" className="hover:opacity-80 transition-opacity">
                    <img src={Whatsapp} className="w-7 h-7" alt="WhatsApp" />
                  </a>
                  <a href="#" aria-label="Twitter" className="hover:opacity-80 transition-opacity">
                    <img src={Twitter} className="w-7 h-7" alt="Twitter" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;