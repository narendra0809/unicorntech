import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import ContactInfo from '../components/common/ContactInfo';
import Phone from '../assets/mobile.png';
import Email from '../assets/email.png';
import Location from '../assets/direction.png';


const ContactPage = () => {
    return (
        <>
            <Header />
            <ContactInfo/>

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