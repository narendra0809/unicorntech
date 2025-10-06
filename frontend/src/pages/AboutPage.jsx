import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import ContactInfo from '../components/common/ContactInfo';
import Group from '../assets/group.png';
import Steps from '../components/common/Steps';
import ClientReviews from '../components/common/ClientReviews';
import CtaSection from '../components/common/CtaSection';
import c1 from '../assets/design.png';
import c2 from '../assets/services.png';
import c3 from '../assets/testing.png';
import c4 from '../assets/deploy.png';
import TeamSection from '../components/common/TeamSection';


const AboutPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            
            {/* About Us Section 1 */}
            <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
                    
                    {/* Top Row - Heading and Paragraph */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                        {/* Left - Heading */}
                        <div>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black">
                                About Us
                            </h1>
                        </div>
                        
                        {/* Right - Paragraph */}
                        <div>
                            <p className="text-sm sm:text-base md:text-lg text-[#797979] leading-relaxed">
                                At Unicorn Tech, we pride ourselves on offering dynamic and IT tech your business to the next level. Our dedicated team is committed to delivering top-notch services that help you accommodate your evolving needs, whether you require comprehensive IT infrastructure support, strategic consultation, software development.
                            </p>
                        </div>
                    </div>
                    
                    {/* Bottom Row - Image and Stats */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
                        {/* Left - Group Image */}
                        <div>
                            <div className="rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden">
                                <img 
                                    src={Group} 
                                    alt="Our Team at Unicorn Tech" 
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>
                        
                        {/* Right - Stats */}
                        <div className="space-y-4 sm:space-y-5 md:space-y-6">
                            {/* Stat 1 */}
                            <div className="pl-4 sm:pl-6">
                                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-[#4587C7] mb-2">
                                    2+
                                </h3>
                                <p className="text-sm sm:text-base md:text-sm text-gray-700 font-medium">
                                    Years of Experience
                                </p>
                            </div>
                            
                            {/* Stat 2 */}
                            <div className=" pl-4 sm:pl-6">
                                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-[#4587C7] mb-2">
                                    20+
                                </h3>
                                <p className="text-sm sm:text-base md:text-sm text-gray-700 font-medium">
                                    Website & CRM Developed
                                </p>
                            </div>
                            
                            {/* Stat 3 */}
                            <div className=" pl-4 sm:pl-6">
                                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-[#4587C7] mb-2">
                                    19+
                                </h3>
                                <p className="text-sm sm:text-base md:text-sm text-gray-700 font-medium">
                                    Happy Clients
                                </p>
                            </div>
                            
                            {/* Stat 4 */}
                            <div className=" pl-4 sm:pl-6">
                                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-[#4587C7] mb-2">
                                    4.9+
                                </h3>
                                <p className="text-sm sm:text-base md:text-sm text-gray-700 font-medium">
                                    Clients Rating
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our History, Mission, Vision Section */}
            <section className="py-5 sm:py-10 md:py-12 lg:py-7 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                        
                        {/* Our History */}
                        <div className="bg-[#DEE8F4] rounded-lg sm:rounded-xl md:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8">
                            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black mb-3 sm:mb-4 md:mb-5">
                                Our History
                            </h3>
                            <p className="text-xs sm:text-sm md:text-base text-[#797979] leading-relaxed">
                                Since 2022 we have been a steadfast partner in success, offering cutting-edge software engineering partner for world-class companies.
                            </p>
                        </div>
                        
                        {/* Our Mission */}
                        <div className="bg-[#DEE8F4] rounded-lg sm:rounded-xl md:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8">
                            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black mb-3 sm:mb-4 md:mb-5">
                                Our Mission
                            </h3>
                            <p className="text-xs sm:text-sm md:text-base text-[#797979] leading-relaxed">
                                A mission statement clarifies what the company wants to achieve, who they want to support, and why they want to support them. On the other hand, a vision statement.
                            </p>
                        </div>
                        
                        {/* Our Vision */}
                        <div className="bg-[#DEE8F4] rounded-lg sm:rounded-xl md:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8">
                            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black mb-3 sm:mb-4 md:mb-5">
                                Our Vision
                            </h3>
                            <p className="text-xs sm:text-sm md:text-base text-[#797979] leading-relaxed">
                                A vision statement is a company's compass, highlighting the plans potential present in the company future. It's about where the company is going ultimately.
                            </p>
                        </div>
                        
                    </div>
                </div>
            </section>
                <Steps />

            {/* Our Features Section */}
            <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 bg-[#DEE8F4] m-2 rounded-xl">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-8 sm:mb-10 md:mb-12">
                        {/* Left - Heading */}
                        <div>
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-2 sm:mb-3">
                                Our Features
                            </h2>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black">
                                What we Offer
                            </h3>
                        </div>
                        
                        {/* Right - Paragraph */}
                        <div className="flex items-center">
                            <p className="text-sm sm:text-base md:text-lg text-[#797979] leading-relaxed">
                                Unicorn Tech is a trusted IT partner specializing in custom web development and CRM solutions. From startups to global enterprises, we empower industries like healthcare, retail, finance, and education with technology that drives measurable growth and efficiency.
                            </p>
                        </div>
                    </div>
                    
                    {/* Feature Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                        {/* Card 1 */}
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-4 sm:mb-5 md:mb-6">
                                <img 
                                    src={c1} 
                                    alt="Web Development" 
                                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
                                />
                            </div>
                            <h4 className="text-base sm:text-lg md:text-xl font-bold text-black">
                                Web Development
                            </h4>
                        </div>
                        
                        {/* Card 2 */}
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-4 sm:mb-5 md:mb-6">
                                <img 
                                    src={c2} 
                                    alt="Managed IT Services" 
                                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
                                />
                            </div>
                            <h4 className="text-base sm:text-lg md:text-xl font-bold text-black">
                                Managed IT Services
                            </h4>
                        </div>
                        
                        {/* Card 3 */}
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-4 sm:mb-5 md:mb-6">
                                <img 
                                    src={c3} 
                                    alt="Software Development" 
                                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
                                />
                            </div>
                            <h4 className="text-base sm:text-lg md:text-xl font-bold text-black">
                                Software Development
                            </h4>
                        </div>
                        
                        {/* Card 4 */}
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-4 sm:mb-5 md:mb-6">
                                <img 
                                    src={c4} 
                                    alt="Graphic & UI-UX Design" 
                                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
                                />
                            </div>
                            <h4 className="text-base sm:text-lg md:text-xl font-bold text-black">
                                Graphic & UI-UX Design
                            </h4>
                        </div>
                    </div>
                </div>
            </section>
            <TeamSection />
            <ClientReviews />

            <CtaSection />
            <Footer />
        </div>
    );
};

export default AboutPage;