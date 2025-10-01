import React from "react";
import { Link, useLocation } from "react-router-dom";
import UnicornLogo from "../../assets/UnicornLogo.png";

const Header = () => {
  const location = useLocation();

  // Navigation items
  const navItems = [
    { name: "Home", path: "/home" },
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
    <header className="bg-white shadow-md top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/home" className="flex items-center space-x-2">
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

      {/* Dropdown Panel */}
      {isOpen && (
        <div className="absolute top-12 right-0 w-64 sm:w-72 bg-white shadow-xl rounded-lg z-50 border border-gray-200">
            <div className="flex flex-col">
              {/* Navigation Links */}
              <nav className="px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={toggleMenu}
                    className={`
                      block py-3 px-3 rounded-lg text-base font-medium transition-all duration-200
                      ${
                        isActive(item.path)
                          ? "text-black bg-gray-100 font-semibold"
                          : "text-[#797979] hover:text-black hover:bg-gray-50"
                      }
                    `}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Mobile Get an Estimate Button */}
                <div className="pt-3 border-t border-gray-100 mt-3">
                  <button
                    onClick={handleEstimateClick}
                    className="
                      w-full bg-black text-white py-3 px-4 rounded-full text-sm font-medium
                      hover:bg-gray-800 transition-colors duration-200
                      focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50
                    "
                  >
                    Get an Estimate
                  </button>
                </div>
              </nav>
            </div>
          </div>
      )}
    </div>
  );
};

export default Header;