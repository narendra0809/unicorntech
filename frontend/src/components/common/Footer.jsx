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
    <footer className="bg-[#191919] text-white py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Mobile Layout - Top 3 Sections */}
        <div className="block md:hidden">
          <div className="grid grid-cols-3 gap-4 mb-6">
            {/* Company */}
            <div>
              <h4 className="font-bold text-lg mb-2">Company</h4>
              <ul className="space-y-1.5 text-[9.5px] text-white leading-relaxed">
                <li><Link to="/" className="hover:text-white">Home</Link></li>
                <li><Link to="/services" className="hover:text-white">Services</Link></li>
                <li><Link to="/portfolio" className="hover:text-white">Portfolio</Link></li>
                <li><Link to="/about" className="hover:text-white">About us</Link></li>
                {/* <li><Link to="/blog" className="hover:text-white">Blog</Link></li> */}
                <li><Link className="hover:text-white">Blog</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact us</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div >
              <h4 className="font-bold text-lg mb-2 ">Services</h4>
              <ul className="space-y-1.5 text-[9.5px] text-white leading-relaxed">
                <li><Link to="/services" className="hover:text-white">IT Management Services</Link></li>
                <li><Link to="/services" className="hover:text-white">Data Tracking Security</Link></li>
                <li><Link to="/services" className="hover:text-white">Website Development</Link></li>
                <li><Link to="/services" className="hover:text-white">CRM Solutions and Design</Link></li>
                <li><Link to="/services" className="hover:text-white">UI/UX Design Services</Link></li>
                <li><Link to="/services" className="hover:text-white">Technology Solution</Link></li>
                <li><Link to="/services" className="hover:text-white">Software Development</Link></li>
                <li><Link to="/services" className="hover:text-white">Graphic Design</Link></li>
              </ul>
            </div>

            {/* Our Fields */}
            <div className ="ml-3">
              <h4 className="font-bold text-lg mb-2">Our Fields</h4>
              <ul className="space-y-1.5 text-[9.5px] text-white leading-relaxed">
                {/* <li><Link to="/fields" className="hover:text-white">Healthcare</Link></li>
                <li><Link to="/fields" className="hover:text-white">Banks</Link></li>
                <li><Link to="/fields" className="hover:text-white">Logistics</Link></li>
                <li><Link to="/fields" className="hover:text-white">Supermarkets</Link></li>
                <li><Link to="/fields" className="hover:text-white">Industries</Link></li>
                <li><Link to="/fields" className="hover:text-white">Hostels</Link></li>
                <li><Link to="/fields" className="hover:text-white">Fintech</Link></li>
                <li><Link to="/fields" className="hover:text-white">E-Commerce</Link></li> */}
                <li>Healthcare</li>
                <li>Banks</li>
                <li>Logistics</li>
                <li>Supermarkets</li>
                <li>Industries</li>
                <li>Hostels</li>
                <li>Fintech</li>
                <li>E-Commerce</li>
              </ul>
            </div>
          </div>

          {/* Mobile Layout - Logo & Contact Section */}
          <div className="flex justify-between items-start mb-6">
            {/* Left - Logo */}
            <div>
              <img src={UnicornLogo} alt="Unicorn Tech Logo" className=" h-[50px] mb-4" />
              
              {/* Social Icons */}
              <div className="flex space-x-2.5 mt-10">
                <a href="#" aria-label="Facebook"><img src={Facebook} alt="Facebook"  className = "h-8 w-7"/></a>
                <a href="#" aria-label="Instagram"><img src={Insta} alt="Instagram" className = "h-8 w-7" /></a>
                <a href="#" aria-label="LinkedIn"><img src={Linkedin} alt="LinkedIn" className = "h-8 w-7" /></a>
                <a href="#" aria-label="WhatsApp"><img src={Whatsapp} alt="WhatsApp"  className = "h-8 w-7"/></a>
                <a href="#" aria-label="Twitter"><img src={Twitter} alt="Twitter" className = "h-8 w-7" /></a>
              </div>
            </div>

            {/* Right - Contact Info */}
            <div>
              <h4 className="font-bold text-lg  mb-2">INDIA (HQ)</h4>
              <div className="space-y-1.5 text-[10px] text-white">
                <p className="flex items-start gap-1">
                  <img src={Profile} alt="Email" className=" flex-shrink-0" />
                  <span className="break-all">itsunicorntech@gmail.com</span>
                </p>
                <p className="flex items-start gap-1">
                  <img src={Location} alt="Location" className=" flex-shrink-0" />
                  <span>Lig square, Indore, [M.P.] India</span>
                </p>
                <p className="flex items-start gap-1 ml-4">
                  {/* <img src={Phone} alt="Phone" className="mt-0.5 flex-shrink-0" /> */}
                  <span>+91-958-957-2990</span>
                </p>
                <p>
                 
                </p>
                <p className="flex items-start gap-1">
                  <img src={Phone} alt="Phone" className="flex-shrink-0" />
                  <span>+91-963-008-8808</span>
                </p>
              </div>
            </div>
          </div>

          {/* Mobile - Divider Line */}
          <div className="border-t border-gray-800 my-4"></div>

          {/* Mobile - Copyright */}
          <div className="space-y-2">
            <p className="text-[12px] text-white">
              © UniTech Private Limited {new Date().getFullYear()}. All rights reserved
            </p>
            <div className="flex items-center space-x-2 text-[12px] text-white">
              <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
              <span>|</span>
              <Link to="/terms" className="hover:text-white">Terms & Condition</Link>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          {/* Desktop - 4 Columns */}
          <div className="grid grid-cols-4 gap-8 mb-12">
          {/* Company */}
          <div>
              <h4 className="font-semibold text-lg mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-300 leading-relaxed">
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
              <h4 className="font-semibold text-lg mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-300 leading-relaxed">
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
              <h4 className="font-semibold text-lg mb-4">Our Fields</h4>
              <ul className="space-y-2 text-sm text-gray-300 leading-relaxed">
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
              <h4 className="font-semibold text-lg mb-4">INDIA (HQ)</h4>
              <div className="space-y-3 text-sm text-gray-300">
                <p className="flex items-start gap-2">
                  <img src={Profile} alt="Email" className="mt-0.5 flex-shrink-0" />
                  <span className="break-all">itsunicorntech@gmail.com</span>
                </p>
                <p className="flex items-start gap-2">
                  <img src={Location} alt="Location" className="mt-0.5 flex-shrink-0" />
                  <span>Lig square, Indore, [M.P.] India</span>
                </p>
  <p className="flex items-center gap-2">
                  <img src={Phone} alt="Phone" className="flex-shrink-0" />
                  <span>+91-958-957-2990</span>
  </p>
  <p className="flex items-center gap-2">
                  <img src={Phone} alt="Phone" className="flex-shrink-0" />
                  <span>+91-963-008-8808</span>
  </p>
</div>
          </div>
        </div>

          {/* Desktop - Logo + Socials */}
          <div className="flex justify-between items-center py-8 border-t border-gray-800">
            <div className="flex items-center">
              <img src={UnicornLogo} alt="Unicorn Tech Logo" className="h-12" />
          </div>
            <div className="flex space-x-5">
              <a href="#" aria-label="Facebook"><img src={Facebook} alt="Facebook" className="w-7 h-7" /></a>
              <a href="#" aria-label="Instagram"><img src={Insta} alt="Instagram" className="w-7 h-7" /></a>
              <a href="#" aria-label="LinkedIn"><img src={Linkedin} alt="LinkedIn" className="w-7 h-7" /></a>
              <a href="#" aria-label="WhatsApp"><img src={Whatsapp} alt="WhatsApp" className="w-7 h-7" /></a>
              <a href="#" aria-label="Twitter"><img src={Twitter} alt="Twitter" className="w-7 h-7" /></a>
          </div>
        </div>

          {/* Desktop - Copyright */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-800">
            <p className="text-sm text-gray-400">
            © UniTech Private Limited {new Date().getFullYear()}. All rights reserved
          </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
              <span className="text-gray-600">|</span>
            <Link to="/terms" className="hover:text-white">Terms & Condition</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
