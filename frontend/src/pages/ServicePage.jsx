import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import ClientReviews from '../components/common/ClientReviews';
import WebDesign from '../assets/webdesign.png';
import Brand from '../assets/brand.png';
import AppDev from '../assets/appdevelopment.png';
import GraphicDesigner from '../assets/graphicdesigning.png';
import DigitalMarketing from '../assets/digital.png';
import Laptop from '../assets/laptop.png';
import WorkProcess from '../assets/workprocess.png';
import WebDev from '../assets/webdev.png';

const ServicePage = () => {
  const services = [
    {
      id: 1,
      title: 'Web Design',
      description: 'Creating visually stunning and user-friendly interfaces that engage visitors.',
      icon: WebDesign
    },
    {
      id: 2,
      title: 'Web Development',
      description: 'Building responsive, high-performance websites tailored to enhance user experience.',
      icon: WebDev
    },
    {
      id: 3,
      title: 'Brand Identity',
      description: 'Crafting a unique visual and emotional presence that resonates with your audience.',
      icon: Brand
    },
    {
      id: 4,
      title: 'App Development',
      description: 'Build powerful, mobile applications that engage your customers & their experience.',
      icon: AppDev
    },
    {
      id: 5,
      title: 'Graphic Design',
      description: 'Transform your brand\'s vision into captivating visuals that engage and inspire your audience.',
      icon: GraphicDesigner
    },
    {
      id: 6,
      title: 'Digital Marketing',
      description: 'Driving online engagement through targeted strategies and data-driven campaigns.',
      icon: DigitalMarketing
    }
  ];

  const workSteps = [
    {
      step: 'Step 1',
      title: 'Discovery & Strategy',
      description: 'We start by getting to know you and your business. During this phase, we dive deep into understanding your goals, target audience, and competitive landscape.'
    },
    {
      step: 'Step 2',
      title: 'Planning & Ideation',
      description: 'Based on our findings, we outline a clear roadmap for the project. This includes wireframes, design concepts, and content strategies to ensure we\'re the vision.'
    },
    {
      step: 'Step 3',
      title: 'Design & Development',
      description: 'Our creative team takes over, crafting visually compelling designs and intuitive user experiences our developers bring these designs to life with clean.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Enhanced Responsiveness */}
      <section className="bg-white py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center">
            {/* Left - Heading */}
            <div className="text-center lg:text-left">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-4xl font-bold text-black leading-tight mb-3 sm:mb-4 md:mb-6">
                Future-Ready <span className="text-[#4587C7]">IT Services</span>
                <br className="hidden sm:block" />
                <span className="block sm:inline"> for Your Business</span>
              </h1>
            </div>
            
            {/* Right - Paragraph */}
            <div className="text-center lg:text-left">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#797979] leading-relaxed">
                Our IT services empower businesses with innovative, tailored solutions to enhance productivity, streamline operations, and drive growth.
              </p>
            </div>
          </div>
          
          {/* Image Below - Better Mobile Handling */}
          <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12">
            <div className="w-full rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden">
              <img 
                src={Laptop} 
                alt="IT Services Laptop" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Digital Brilliance Section - Improved Grid */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center text-black mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16">
            Digital Brilliance, Achieved
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className="bg-[#4587C7]/15 rounded-lg sm:rounded-xl md:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="mb-4 sm:mb-5 md:mb-6 flex justify-center lg:justify-start">
                  <img 
                    src={service.icon} 
                    alt={service.title} 
                    className="w-14 h-14 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain"
                  />
                </div>
                
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-black mb-2 sm:mb-3 text-center lg:text-left">
                  {service.title}
                </h3>
                
                <p className="text-xs sm:text-sm md:text-base text-[#797979] leading-relaxed text-center lg:text-left">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process Section - Enhanced Mobile Layout */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-stretch">
            
            {/* Left - Image */}
            <div className="order-2 lg:order-1">
              <div className="w-full rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden">
                <img 
                  src={WorkProcess} 
                  alt="Work Process" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            
            {/* Right - Steps */}
            <div className="order-1 lg:order-2 space-y-4 sm:space-y-6 md:space-y-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-4 sm:mb-6 md:mb-8 text-center lg:text-left">
                Work Process
              </h2>
              
              {workSteps.map((item, index) => (
                <div 
                  key={index}
                  className=" py-2 sm:py-3 hover:bg-white/50 transition-colors duration-300 rounded-r-lg"
                >
                  <p className="text-xs sm:text-sm md:text-base font-semibold text-[#000000] mb-1 sm:mb-2">
                    {item.step}
                  </p>
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-black mb-2 sm:mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#797979] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Reviews */}
      <ClientReviews />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ServicePage;