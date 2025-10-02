import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UnicornLogo from '../assets/UnicornLogo.png';
import Figma from '../assets/Figma.png';
import Arrow from '../assets/arrow.png';
import Girl from '../assets/girl.png';
import Person from '../assets/person.png';
import Building from '../assets/building.png';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import c1 from '../assets/c1.png';
import c2 from '../assets/c2.png';
import c3 from '../assets/c3.png';
import c4 from '../assets/c4.png';
import c5 from '../assets/c5.png';
import c6 from '../assets/c6.png';
import c7 from '../assets/c7.png';
import c8 from '../assets/c8.png';
import blueArrow from '../assets/blueArrow.png';
import portfolio1 from '../assets/portfolio1.png';
import portfolio2 from '../assets/portfolio2.png';
import portfolio3 from '../assets/portfolio3.png';
import portfolio4 from '../assets/portfolio4.png';
// import client1 from '../assets/client1.png';
// import client2 from '../assets/client2.png';
// import client3 from '../assets/client3.png';
// import client4 from '../assets/client4.png';
import code from '../assets/code.png';
import TechnologiesShowcase from '../components/common/TechnologiesShowcase';
import ClientReviews from '../components/common/ClientReviews';
import ServiceProcess from '../components/common/ServiceProcess';


const HomePage = () => {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            
            {/* Hero Section */}
            <section className="bg-white py-4 sm:py-6 md:py-8 lg:py-6">
                <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10">
                    <div className="text-center space-y-4 sm:space-y-6 md:space-y-8">
                        <div className="mx-auto px-2 sm:px-4">
                            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold leading-tight text-center mx-auto max-w-4xl 2xl:max-w-5xl">
                                <span className="text-black">We Build Smarter </span>
                                <span className="text-[#4587C7]">Web Solutions</span>
                                <span className="text-[#4587C7]"> — Experts in CRM </span>
                                <span className="text-black"> Development</span>
                                <span className="text-black"> & Customization</span>
                            </h1>
                        </div>
                        
                        {/* Subheading */}
                        <div className="max-w-3xl mx-auto">
                            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-[#797979] leading-relaxed px-2 sm:px-4">
                                At Unicorn Tech, we craft digital solutions that help businesses streamline 
                                operations, engage customers, and scale faster.
                            </p>
                        </div>
                        
                        {/* CTA Button */}
                        <div className="pt-1 sm:pt-2 md:pt-2">
                            <button className="inline-flex items-center space-x-2 sm:space-x-3 bg-[#4587C7] text-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full font-medium text-xs sm:text-sm md:text-base lg:text-lg hover:bg-[#3a75b5] transition-all duration-300 transform hover:scale-105">
                                <span>Discover Services</span>
                                <img 
                                    src={Arrow} 
                                    alt="Arrow" 
                                    className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"
                                />
                            </button>
                        </div>
                        
                        {/* Dashboard Image */}
                        <div className="pt-3 sm:pt-4 md:pt-5 lg:pt-6 max-w-5xl mx-auto">
                            <div className="relative px-3 sm:px-6">
                                <img 
                                    src={Figma} 
                                    alt="Dashboard Preview - CRM Solution" 
                                    className="w-full h-auto object-contain rounded-lg sm:rounded-xl md:rounded-2xl"
                                />
                                <div className="absolute inset-0 rounded-lg sm:rounded-xl md:rounded-2xl bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
                <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                        
                        {/* Left Column - Heading + Small Person Image */}
                        <div className="lg:col-span-1 space-y-3 sm:space-y-4 md:space-y-6">
                            <div>
                                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black mb-1 sm:mb-2">
                                    Intro:
                                </h3>
                                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black mb-3 sm:mb-4 md:mb-6">
                                    It's Unicorn Tech
                                </h2>
                            </div>
                            
                            {/* Small Person Image */}
                            <div>
                                <img 
                                    src={Person} 
                                    alt="Professional working at Unicorn Tech" 
                                    className="w-full h-auto object-contain rounded-lg sm:rounded-xl md:rounded-2xl"
                                />
                            </div>
                        </div>
                        
                        {/* Right Column - Content + Large Building Image */}
                        <div className="lg:col-span-2 space-y-3 sm:space-y-4 md:space-y-6">
                            {/* Content Text aligned with heading */}
                            <div className="pt-0">
                                <p className="text-[#797979] text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mb-3 sm:mb-4 md:mb-6">
                                    Unicorn Tech is a trusted IT partner specializing in custom web 
                                    development and CRM solutions. From startups to global enterprises, we 
                                    empower industries like healthcare, retail, finance, and education with 
                                    technology that drives measurable growth and efficiency.
                                </p>
                            </div>
                            
                            {/* Large Building Image - same top/bottom as person */}
                            <div className="relative">
                                <img 
                                    src={Building} 
                                    alt="Modern office building" 
                                    className="w-full h-auto object-contain rounded-lg sm:rounded-xl md:rounded-2xl"
                                    onError={(e) => {
                                        console.log('Building image failed to load');
                                        e.target.src = Person; // Fallback to person image
                                    }}
                                />
                                
                                {/* Stats Overlay - Mobile Optimized */}
                                <div className="absolute bottom-1 sm:bottom-2 md:bottom-4 left-1 sm:left-2 md:left-4 right-1 sm:right-2 md:right-4 z-10">
                                    <div className="bg-white/10 backdrop-blur-md rounded-md sm:rounded-lg md:rounded-xl p-2 sm:p-3 md:p-4 shadow-lg border border-white/20">
                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 sm:gap-2 md:gap-4">
                                            <div className="text-center">
                                                <div className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#4587C7] mb-0.5 sm:mb-1">2+</div>
                                                <div className="text-[10px] sm:text-xs text-black-600 font-medium leading-tight">Years of Experience</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#4587C7] mb-0.5 sm:mb-1">20+</div>
                                                <div className="text-[10px] sm:text-xs text-black-600 font-medium leading-tight">Website & CRM Developed</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#4587C7] mb-0.5 sm:mb-1">19+</div>
                                                <div className="text-[10px] sm:text-xs text-black-600 font-medium leading-tight">Happy Clients</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#4587C7] mb-0.5 sm:mb-1">4.9+</div>
                                                <div className="text-[10px] sm:text-xs text-black-600 font-medium leading-tight">Clients Rating</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="py-6 sm:py-8 md:py-8 lg:py-6 bg-white">
                <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10">
                    <div className="text-center mb-6 sm:mb-8 md:mb-12">
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black mb-4 sm:mb-6 md:mb-8 px-2 sm:px-4">
                            Technologies & Platform we work with
                        </h2>
                    </div>
                    
                    <TechnologiesShowcase />
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-8 sm:py-10 md:py-12 lg:py-15 xl:py-10">
                <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center">
                        
                        {/* Left - Image */}
                        <div className="order-2 lg:order-1">
                            <div className="relative">
                                <img 
                                    src={Girl} 
                                    alt="Professional team member" 
                                    className="w-full h-auto object-contain rounded-lg sm:rounded-xl md:rounded-2xl"
                                />
                            </div>
                        </div>
                        
                        {/* Right - Content */}
                        <div className="order-1 lg:order-2 space-y-4 sm:space-y-6 md:space-y-8">
                            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900">
                                Why Choose Us ?
                            </h2>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                                {/* Specialized CRM Expertise */}
                                <div className="space-y-2 sm:space-y-3">
                                    <img src={c1} alt="CRM Expertise" className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16" />
                                    <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-900">
                                        Specialized CRM Expertise
                                    </h3>
                                    <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 leading-relaxed">
                                       -not just plug-and-play - AI-driven solutions crafted to fit your business DNA.
                                    </p>
                                </div>

                                {/* Unicorn-Tech Mindset */}
                                <div className="space-y-2 sm:space-y-3">
                                    <img src={c2} alt="Unicorn Tech Mindset" className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16" />
                                    <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-900">
                                        Unicorn-Tech Mindset
                                    </h3>
                                    <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 leading-relaxed">
                                       -future-ready, scalable solutions built to fuel your growth.
                                    </p>
                                </div>

                                {/* Agile & Transparent Development */}
                                <div className="space-y-2 sm:space-y-3">
                                    <img src={c3} alt="Agile Development" className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16" />
                                    <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-900">
                                        Agile & Transparent Development
                                    </h3>
                                    <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 leading-relaxed">
                                        -rapid delivery, zero compromise on quality.
                                    </p>
                                </div>

                                {/* Global Impact */}
                                <div className="space-y-2 sm:space-y-3">
                                    <img src={c4} alt="Global Impact" className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16" />
                                    <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-900">
                                        Global Impact
                                    </h3>
                                    <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 leading-relaxed">
                                        -from startups to enterprises - solutions built for all.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ServiceProcess />

            {/* Portfolio Section */}
            <section className="py-8 sm:py-10 md:py-12 lg:py-15 xl:py-15">
                <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10">
                    <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-5">
                        {/* Left - Heading */}
                        <div className="lg:col-span-1">
                            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-1 sm:mb-2 md:mb-4">
                                Portfolio/
                            </h2>
                            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900">
                                Case Studies
                            </h2>
                        </div>
                        
                        {/* Right - Description */}
                        <div className="lg:col-span-2 lg:ml-100">
                            <p className="text-gray-600 max-w-2xl text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed lg:mt-5">
                               Highlighting impactful projects with measurable results and innovative solutions.
                            </p>
                        </div>
                    </div>
                    
                    {/* Portfolio Grid - Mobile Optimized */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                        {/* InnoVista - Top Left */}
                        <div>
                            <div className="p-2 sm:p-3 md:p-4 lg:p-6">
                                <img 
                                    src={portfolio1} 
                                    alt="InnoVista Dashboard" 
                                    className="w-full h-auto object-contain rounded-md sm:rounded-lg md:rounded-xl mb-2 sm:mb-3 md:mb-4"
                                />
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-black mb-1">
                                            InnoVista
                                        </h3>
                                    </div>
                                    <button className="bg-[#4587C7] text-white px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 lg:px-6 lg:py-2 rounded-full text-[10px] sm:text-xs md:text-sm hover:bg-blue-700 transition-colors">
                                        View Project →
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Sisyphus™ - Top Right */}
                        <div>
                            <div className="p-2 sm:p-3 md:p-4 lg:p-6">
                                <img 
                                    src={portfolio2} 
                                    alt="Sisyphus Dashboard" 
                                    className="w-full h-auto object-contain rounded-md sm:rounded-lg md:rounded-xl mb-2 sm:mb-3 md:mb-4"
                                />
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-black mb-1">
                                            Sisyphus™
                                        </h3>
                                    </div>
                                    <button className="bg-[#4587C7] text-white px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 lg:px-6 lg:py-2 rounded-full text-[10px] sm:text-xs md:text-sm hover:bg-blue-700 transition-colors">
                                        View Project →
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* InnoVista - Bottom Left */}
                        <div>
                            <div className="p-2 sm:p-3 md:p-4 lg:p-6">
                                <img 
                                    src={portfolio3} 
                                    alt="InnoVista Analytics" 
                                    className="w-full h-auto object-contain rounded-md sm:rounded-lg md:rounded-xl mb-2 sm:mb-3 md:mb-4"
                                />
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-black mb-1">
                                            InnoVista
                                        </h3>
                                    </div>
                                    <button className="bg-[#4587C7] text-white px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 lg:px-6 lg:py-2 rounded-full text-[10px] sm:text-xs md:text-sm hover:bg-blue-700 transition-colors">
                                        View Project →
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Sisyphus™ - Bottom Right */}
                        <div>
                            <div className="p-2 sm:p-3 md:p-4 lg:p-6">
                                <img 
                                    src={portfolio4} 
                                    alt="Sisyphus Analytics" 
                                    className="w-full h-auto object-contain rounded-md sm:rounded-lg md:rounded-xl mb-2 sm:mb-3 md:mb-4"
                                />
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-black mb-1">
                                            Sisyphus™
                                        </h3>
                                    </div>
                                    <button className="bg-[#4587C7] text-white px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 lg:px-6 lg:py-2 rounded-full text-[10px] sm:text-xs md:text-sm hover:bg-blue-700 transition-colors">
                                        View Project →
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Client Reviews - Mobile Optimized */}
            {/* <section className="py-8 sm:py-10 md:py-12 lg:py-10">
                <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8">
                        Clients Reviews
                    </h2>
                </div>
                <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 bg-[#4587C7]/10 rounded-xl sm:rounded-2xl">
                    <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8">
                        <img src={client1} alt="Client 1" className="mt-3 sm:mt-4 md:mt-6 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 rounded object-cover" />
                        <img src={client2} alt="Client 2" className="mt-3 sm:mt-4 md:mt-6 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 rounded object-cover" />
                        <img src={client3} alt="Client 3" className="mt-3 sm:mt-4 md:mt-6 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 rounded object-cover" />
                        <img src={client4} alt="Client 4" className="mt-3 sm:mt-4 md:mt-6 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 rounded object-cover" />
                    </div>
                    
                    <blockquote className="text-sm sm:text-base md:text-lg lg:text-xl text-black-700 mb-3 sm:mb-4 md:mb-6 italic max-w-4xl">
                        "Their CRM customization completely changed how we manage our clients. Efficiency and growth skyrocketed."
                    </blockquote>
                    
                    <div className="text-gray-900">
                        <p className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg">Leslie Alexander</p>
                        <p className="text-gray-600 mb-3 sm:mb-4 md:mb-5 pb-3 sm:pb-4 md:pb-5 text-[10px] sm:text-xs md:text-sm lg:text-base">New York, USA</p>
                    </div>
                </div>
            </section> */}
            <ClientReviews />

            {/* CTA Section - Mobile Optimized */}
            <section className="py-6 sm:py-8 md:py-2 lg:py-2 mb-10 ">
                <div className=" max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-4 xl:px-10 bg-[#4587C7]/10  rounded-xl sm:rounded-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
                        
                        {/* Left - Image */}
                        <div className="order-2 lg:order-1">
                            <div className="rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8">
                                <img 
                                    src={code} 
                                    alt="Development Process" 
                                    className="w-full lg:h-[300px] lg:pr-30 object-contain"
                                />
                            </div>
                        </div>
                        
                        {/* Right - Content */}
                        <div className="order-1 lg:order-2 space-y-3 sm:space-y-4 md:space-y-6">
                            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-tight">
                                Discover how <span className="text-[#4587c7] font-normal">Its Unicorn Tech</span>
                                <br />can transform your business
                            </h2>
                            
                            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                                Unicorn Tech empowers businesses with innovative solutions that 
                                drive growth and efficiency, turning challenges into lasting 
                                opportunities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default HomePage;