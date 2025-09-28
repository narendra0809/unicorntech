import React from "react";
import { Link } from "react-router-dom";
import UnicornLogo from "../../assets/UnicornWhiteLogo.png";
import Profile from '../../assets/profile.png';
import Location from '../../assets/location.png';
import Phone from '../../assets/phone.png';
import Facebook from '../../assets/facebook.png';
import Insta from '../../assets/instagram.png';
import Linkedin from '../../assets/linkedin.png';
import Whatsapp from '../../assets/whatsapp.png';
import Twitter from '../../assets/twitter.png';


const Footer = () => {
  return (
    <footer className="bg-[#191919] text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section - Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          
          {/* Company */}
          <div>
            <h4 className="font-semibold text-base sm:text-lg mb-3 md:mb-4">
              Company
            </h4>
            <ul className="space-y-1 md:space-y-2 text-sm text-white-400">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-white">Portfolio</Link></li>
              <li><Link to="/about" className="hover:text-white">About us</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-base sm:text-lg mb-3 md:mb-4">
              Services
            </h4>
            <ul className="space-y-1 md:space-y-2 text-sm text-white-400">
              <li><Link to="/services" className="hover:text-white">IT Management Service</Link></li>
              <li><Link to="/services" className="hover:text-white">Data Tracking Security</Link></li>
              <li><Link to="/services" className="hover:text-white">Website Development</Link></li>
              <li><Link to="/services" className="hover:text-white">CRM Solutions and Design</Link></li>
              <li><Link to="/services" className="hover:text-white">UI/UX Design Services</Link></li>
              <li><Link to="/services" className="hover:text-white">Technology Solution</Link></li>
              <li><Link to="/services" className="hover:text-white">Software Development</Link></li>
              <li><Link to="/services" className="hover:text-white">Graphic Design</Link></li>
            </ul>
          </div>

          {/* Fields */}
          <div>
            <h4 className="font-semibold text-base sm:text-xl mb-3 md:mb-4">
              Our Fields
            </h4>
            <ul className="space-y-1 md:space-y-2 text-sm text-white-400">
              <li><Link to="/fields" className="hover:text-white">Healthcare</Link></li>
              <li><Link to="/fields" className="hover:text-white">Banks</Link></li>
              <li><Link to="/fields" className="hover:text-white">Logistics</Link></li>
              <li><Link to="/fields" className="hover:text-white">Supermarkets</Link></li>
              <li><Link to="/fields" className="hover:text-white">Industries</Link></li>
              <li><Link to="/fields" className="hover:text-white">Hostels</Link></li>
              <li><Link to="/fields" className="hover:text-white">Fintech</Link></li>
              <li><Link to="/fields" className="hover:text-white">E-Commerce</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-base sm:text-lg mb-3 md:mb-4">
              INDIA (HQ)
            </h4>
            <div className="space-y-2 md:space-y-3 text-sm text-white">
  {/* Email */}
  <p className="flex items-center gap-2">
    <img src={Profile}  alt="Email Icon" />
    itsunicorntech@gmail.com
  </p>

  {/* Address */}
  <p className="flex items-center gap-2">
    <img src={Location}  alt="Location Icon" />
    Lig square, Indore, [M.P.] India
  </p>

  {/* Phone 1 */}
  <p className="flex items-center gap-2">
    <img src={Phone}  alt="Phone Icon" />
    +91-958-957-2990
  </p>

  {/* Phone 2 */}
  <p className="flex items-center gap-2">
    <img src={Phone}  alt="Phone Icon" />
    +91-963-008-8808
  </p>
</div>

          </div>
        </div>

        {/* Middle Section - Logo + Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 md:pt-8 ">
          {/* Logo */}
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <img src={UnicornLogo} alt="Unicorn Tech Logo" className=":h-[]" />
          </div>

          {/* Socials */}
          <div className="flex space-x-3 md:space-x-4">
            <a href="#" className=" flex items-center justify-center"><img src={Facebook} /></a>
            <a href="#" className=" items-center justify-center"><img src={Insta}/></a>
            <a href="#" className="items-center justify-center"><img src={Linkedin}/></a>
            <a href="#" className=" flex items-center justify-center "><img src={Whatsapp}/></a>
            <a href="#" className=" flex items-center justify-center "><img src={Twitter} /></a>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-800">
          <p className="text-sm text-white-400 mb-2 md:mb-0 text-center md:text-left">
            © UniTech Private Limited {new Date().getFullYear()}. All rights reserved
          </p>
          <div className="flex space-x-4 md:space-x-6 text-sm text-white-400">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link>|</Link>
            <Link to="/terms" className="hover:text-white">Terms & Condition</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
