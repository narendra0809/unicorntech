import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import ContactImage from '../assets/contact.png';
import Phone from '../assets/mobile.png';
import Email from '../assets/email.png';
import Location from '../assets/direction.png';
import Arrow from '../assets/warrow.png';

const ContactPage = () => {
    return (
        <>
            <Header />
            
            {/* Contact Form Section */}
            <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center">
                        
                        {/* Left - Image */}
                        <div className="order-2 lg:order-1">
                            <div className="w-full rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden">
                                <img 
                                    src={ContactImage} 
                                    alt="Contact Us" 
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>
                        
                        {/* Right - Form */}
                        <div className="order-1 lg:order-2 space-y-4 sm:space-y-6">
                            <div>
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-2 sm:mb-3">
                                    Let's Work Together
                                </h1>
                                <p className="text-sm sm:text-base md:text-lg text-[#797979]">
                                    Reach Us Directly. We'd love to hear from you.
                                </p>
                            </div>
                            
                            <form className="space-y-4 sm:space-y-5">
                                {/* Full Name */}
                                <div className="relative">
                                    <fieldset className="border border-[#BFD6E8] rounded-lg">
                                        <legend className="ml-3 px-2 text-xs sm:text-sm text-gray-500">Full name</legend>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2 sm:py-3 text-sm sm:text-base text-black bg-white focus:outline-none"
                                        />
                                    </fieldset>
                                </div>
                                
                                {/* Email Address */}
                                <div className="relative">
                                    <fieldset className="border border-[#BFD6E8] rounded-lg">
                                        <legend className="ml-3 px-2 text-xs sm:text-sm text-gray-500">Email address</legend>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-2 sm:py-3 text-sm sm:text-base text-black bg-white focus:outline-none"
                                        />
                                    </fieldset>
                                </div>
                                
                                {/* Phone Number & Subject */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                    <div className="relative">
                                        <fieldset className="border border-[#BFD6E8] rounded-lg">
                                            <legend className="ml-3 px-2 text-xs sm:text-sm text-gray-500">Phone number</legend>
                                            <input
                                                type="tel"
                                                className="w-full px-4 py-2 sm:py-3 text-sm sm:text-base text-black bg-white focus:outline-none"
                                            />
                                        </fieldset>
                                    </div>
                                    <div className="relative">
                                        <fieldset className="border border-[#BFD6E8] rounded-lg">
                                            <legend className="ml-3 px-2 text-xs sm:text-sm text-gray-500">Subject</legend>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-2 sm:py-3 text-sm sm:text-base text-black bg-white focus:outline-none"
                                            />
                                        </fieldset>
                                    </div>
                                </div>
                                
                                {/* Message */}
                                <div className="relative">
                                    <fieldset className="border border-[#BFD6E8] rounded-lg">
                                        <legend className="ml-3 px-2 text-xs sm:text-sm text-gray-500">Message</legend>
                                        <textarea
                                            rows="5"
                                            className="w-full px-4 py-2 sm:py-3 text-sm sm:text-base text-black bg-white focus:outline-none resize-none"
                                        ></textarea>
                                    </fieldset>
                                </div>
                                
                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="inline-flex items-center space-x-2 sm:space-x-3 bg-[#4587C7] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-medium text-sm sm:text-base md:text-lg hover:bg-[#3a75b5] transition-all duration-300 transform hover:scale-105"
                                >
                                    <span>Send Message</span>
                                    <img 
                                        src={Arrow} 
                                        alt="Arrow" 
                                        className="w-4 h-4 sm:w-5 sm:h-5"
                                    />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Info Section */}
            <section className="py-8 sm:py-7 md:py-8 lg:py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 ">
                    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 ">
                        
                        {/* Phone */}
                        <div className=" flex flex-col items-center text-center space-y-3 sm:space-y-4 p-4 sm:p-6 bg-[#DEE8F4] rounded-lg sm:rounded-xl ">
                            <img 
                                src={Phone} 
                                alt="Phone" 
                                className="max-h-16 sm:max-h-20 md:max-h-24 object-contain"
                            />
                            <div>
                                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-black mb-1 sm:mb-2">
                                    For More Information
                                </h3>
                                <p className="text-xs sm:text-sm md:text-base text-[#797979]">
                                    +91-958-957-2990
                                </p>
                                <p className="text-xs sm:text-sm md:text-base text-[#797979]">
                                    +91-963-008-8808
                                </p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 p-4 sm:p-6 bg-[#DEE8F4] rounded-lg sm:rounded-xl">
                            <img 
                                src={Email} 
                                alt="Email" 
                                className="max-h-16 sm:max-h-20 md:max-h-24 object-contain"
                            />
                            <div>
                                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-black mb-1 sm:mb-2">
                                    Connect With Email
                                </h3>
                                <p className="text-xs sm:text-sm md:text-base text-[#797979]">
                                    itsunicorntech@gmail.com
                                </p>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 p-4 sm:p-6 bg-[#DEE8F4] rounded-lg sm:rounded-xl">
                            <img 
                                src={Location} 
                                alt="Location" 
                                className="max-h-16 sm:max-h-20 md:max-h-24 object-contain"
                            />
                            <div>
                                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-black mb-1 sm:mb-2">
                                    Office Address
                                </h3>
                                <p className="text-xs sm:text-sm md:text-base text-[#797979]">
                                    Lig square, Indore,[M.P.]India
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default ContactPage;