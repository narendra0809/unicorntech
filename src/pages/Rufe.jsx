import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UnicornLogo from '../assets/UnicornLogo.png';
import Figma from '../assets/Figma.png';
import Arrow from '../assets/arrow.png';
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
import client1 from '../assets/client1.png';
import client2 from '../assets/client2.png';
import client3 from '../assets/client3.png';
import client4 from '../assets/client4.png';
import code from '../assets/code.png';

// Technologies Showcase Component
const TechnologiesShowcase = () => {
    const [activeCategory, setActiveCategory] = useState('Front End');
    
    const categories = [
        { name: 'Front End', color: 'bg-[#4587C7] text-white' },
        { name: 'Back End', color: 'bg-gray-200 text-black' },
        { name: 'Mobile', color: 'bg-gray-200 text-black' },
        { name: 'CMS', color: 'bg-gray-200 text-black' },
        { name: 'Data Base', color: 'bg-gray-200 text-black' },
        { name: 'DevOps & Cloud', color: 'bg-gray-200 text-black' },
        { name: 'Project Management', color: 'bg-gray-200 text-black' },
        { name: 'Graphic Design & UI/UX', color: 'bg-gray-200 text-black' }
    ];
    
    const technologies = {
        'Front End': [
            { name: 'Angular', icon: UnicornLogo },
            { name: 'ReactJS', icon: UnicornLogo },
            { name: 'TypeScript', icon: UnicornLogo },
            { name: 'Vue.Js', icon: UnicornLogo },
            { name: 'Next.Js', icon: UnicornLogo },
            { name: 'Bootstrap', icon: UnicornLogo },
            { name: 'HTML', icon: UnicornLogo },
            { name: 'CSS', icon: UnicornLogo }
        ],
        'Back End': [
            { name: 'Node.js', icon: UnicornLogo },
            { name: 'Python', icon: UnicornLogo },
            { name: 'PHP', icon: UnicornLogo },
            { name: 'Java', icon: UnicornLogo },
            { name: 'Express', icon: UnicornLogo },
            { name: 'Django', icon: UnicornLogo },
            { name: 'Laravel', icon: UnicornLogo },
            { name: '.NET', icon: UnicornLogo }
        ],
        'Mobile': [
            { name: 'React Native', icon: UnicornLogo },
            { name: 'Flutter', icon: UnicornLogo },
            { name: 'iOS', icon: UnicornLogo },
            { name: 'Android', icon: UnicornLogo },
            { name: 'Xamarin', icon: UnicornLogo },
            { name: 'Ionic', icon: UnicornLogo },
            { name: 'Swift', icon: UnicornLogo },
            { name: 'Kotlin', icon: UnicornLogo }
        ],
        'CMS': [
            { name: 'WordPress', icon: UnicornLogo },
            { name: 'Shopify', icon: UnicornLogo },
            { name: 'Drupal', icon: UnicornLogo },
            { name: 'Magento', icon: UnicornLogo },
            { name: 'Joomla', icon: UnicornLogo },
            { name: 'Webflow', icon: UnicornLogo },
            { name: 'Strapi', icon: UnicornLogo },
            { name: 'Contentful', icon: UnicornLogo }
        ],
        'Data Base': [
            { name: 'MongoDB', icon: UnicornLogo },
            { name: 'MySQL', icon: UnicornLogo },
            { name: 'PostgreSQL', icon: UnicornLogo },
            { name: 'Firebase', icon: UnicornLogo },
            { name: 'Redis', icon: UnicornLogo },
            { name: 'SQLite', icon: UnicornLogo },
            { name: 'Oracle', icon: UnicornLogo },
            { name: 'Cassandra', icon: UnicornLogo }
        ],
        'DevOps & Cloud': [
            { name: 'AWS', icon: UnicornLogo },
            { name: 'Docker', icon: UnicornLogo },
            { name: 'Azure', icon: UnicornLogo },
            { name: 'Google Cloud', icon: UnicornLogo },
            { name: 'Jenkins', icon: UnicornLogo },
            { name: 'Kubernetes', icon: UnicornLogo },
            { name: 'Heroku', icon: UnicornLogo },
            { name: 'Vercel', icon: UnicornLogo }
        ],
        'Project Management': [
            { name: 'Jira', icon: UnicornLogo },
            { name: 'Trello', icon: UnicornLogo },
            { name: 'Asana', icon: UnicornLogo },
            { name: 'Monday', icon: UnicornLogo },
            { name: 'Slack', icon: UnicornLogo },
            { name: 'GitLab', icon: UnicornLogo },
            { name: 'GitHub', icon: UnicornLogo },
            { name: 'Notion', icon: UnicornLogo }
        ],
        'Graphic Design & UI/UX': [
            { name: 'Figma', icon: UnicornLogo },
            { name: 'Adobe XD', icon: UnicornLogo },
            { name: 'Sketch', icon: UnicornLogo },
            { name: 'Photoshop', icon: UnicornLogo },
            { name: 'Illustrator', icon: UnicornLogo },
            { name: 'InVision', icon: UnicornLogo },
            { name: 'Canva', icon: UnicornLogo },
            { name: 'Framer', icon: UnicornLogo }
        ]
    };
    
    return (
        <div className="space-y-6 md:space-y-8">
            {/* Category Buttons */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4">
                {categories.map((category) => (
                    <button
                        key={category.name}
                        onClick={() => setActiveCategory(category.name)}
                        className={`
                            px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300
                            ${activeCategory === category.name 
                                ? 'bg-[#4587C7] text-white transform scale-105' 
                                : 'bg-gray-200 text-black hover:bg-gray-300'
                            }
                        `}
                    >
                        {category.name}
                    </button>
                ))}
            </div>
            
            {/* Technology Icons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 sm:gap-6 md:gap-8 min-h-[180px] sm:min-h-[200px] items-center px-4">
                {technologies[activeCategory]?.map((tech, index) => (
                    <div 
                        key={`${activeCategory}-${tech.name}-${index}`}
                        className="flex flex-col items-center space-y-2 sm:space-y-3 opacity-0 animate-fadeIn"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-xl shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                            <img 
                                src={tech.icon} 
                                alt={tech.name} 
                                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 object-contain"
                            />
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-gray-700 text-center leading-tight">
                            {tech.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const HomePage = () => {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            
            {/* Hero Section */}
            <section className="bg-white py-12 md:py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center space-y-6 md:space-y-8">
                        
                        {/* Main Heading */}
                        <div className="max-w-4xl mx-auto">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                                <span className="text-black">We Build Smarter </span>
                                <span className="text-[#4587C7]">Web Solutions</span>
                                <span className="text-black"> — Experts in </span>
                                <span className="text-[#4587C7]">CRM Development</span>
                                <span className="text-black"> & Customization</span>
                            </h1>
                        </div>
                        
                        {/* Subheading */}
                        <div className="max-w-3xl mx-auto">
                            <p className="text-base sm:text-lg md:text-xl text-[#797979] leading-relaxed px-4">
                                At Unicorn Tech, we craft digital solutions that help businesses streamline 
                                operations, engage customers, and scale faster.
                            </p>
                        </div>
                        
                        {/* CTA Button */}
                        <div className="pt-2 md:pt-4">
                            <button className="inline-flex items-center space-x-2 sm:space-x-3 bg-[#4587C7] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-medium text-base sm:text-lg hover:bg-[#3a75b5] transition-all duration-300 transform hover:scale-105">
                                <span>Discover Services</span>
                                <img 
                                    src={Arrow} 
                                    alt="Arrow" 
                                    className="w-4 h-4 sm:w-5 sm:h-5"
                                />
                            </button>
                        </div>
                        
                        {/* Dashboard Image */}
                        <div className="pt-8 sm:pt-12 max-w-5xl mx-auto">
                            <div className="relative px-4">
                                <img 
                                    src={Figma} 
                                    alt="Dashboard Preview - CRM Solution" 
                                    className="w-full h-auto rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl"
                                />
                                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
                        
                        {/* Left Column - Heading + Small Person Image */}
                        <div className="lg:col-span-1 space-y-4 md:space-y-6">
                            <div>
                                <h3 className="text-base sm:text-lg font-medium text-black mb-2">
                                    Intro:
                                </h3>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 md:mb-6">
                                    It's Unicorn Tech
                                </h2>
                            </div>
                            
                            {/* Small Person Image */}
                            <div>
                                <img 
                                    src={Person} 
                                    alt="Professional working at Unicorn Tech" 
                                    className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl sm:rounded-2xl"
                                />
                            </div>
                        </div>
                        
                        {/* Right Column - Content + Large Building Image */}
                        <div className="lg:col-span-2 space-y-4 md:space-y-6">
                            {/* Content Text aligned with heading */}
                            <div className="pt-0">
                                <p className="text-[#797979] text-base sm:text-lg leading-relaxed mb-4 md:mb-6">
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
                                    className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl sm:rounded-2xl"
                                />
                                
                                <div className="absolute inset-0 bg-[#F0F0F0] bg-opacity-30 rounded-xl sm:rounded-2xl"></div>
                                
                                {/* Stats Overlay */}
                                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4">
                                    <div className="bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg">
                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
                                            <div className="text-center">
                                                <div className="text-lg sm:text-xl font-bold text-[#4587C7] mb-1">2+</div>
                                                <div className="text-xs text-gray-600 font-medium leading-tight">Years of Experience</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-lg sm:text-xl font-bold text-[#4587C7] mb-1">20+</div>
                                                <div className="text-xs text-gray-600 font-medium leading-tight">Website & CRM Developed</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-lg sm:text-xl font-bold text-[#4587C7] mb-1">19+</div>
                                                <div className="text-xs text-gray-600 font-medium leading-tight">Happy Clients</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-lg sm:text-xl font-bold text-[#4587C7] mb-1">4.9+</div>
                                                <div className="text-xs text-gray-600 font-medium leading-tight">Clients Rating</div>
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
            <section className="py-12 md:py-16 lg:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 md:mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6 md:mb-8 px-4">
                            Technologies & Platform we work with
                        </h2>
                    </div>
                    
                    <TechnologiesShowcase />
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                        
                        {/* Left - Image */}
                        <div className="order-2 lg:order-1">
                            <div className="relative">
                                <img 
                                    src={Person} 
                                    alt="Professional team member" 
                                    className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl sm:rounded-2xl"
                                />
                            </div>
                        </div>
                        
                        {/* Right - Content */}
                        <div className="order-1 lg:order-2 space-y-6 md:space-y-8">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                                Why Choose Us ?
                            </h2>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                                {/* Specialized CRM Expertise */}
                                <div className="space-y-3">
                                    <img src={c1} alt="CRM Expertise" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" />
                                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                                        Specialized CRM Expertise
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Not just plug-and-play, but personalized to fit your exact business DNA.
                                    </p>
                                </div>

                                {/* Unicorn-Tech Mindset */}
                                <div className="space-y-3">
                                    <img src={c2} alt="Unicorn Tech Mindset" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" />
                                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                                        Unicorn-Tech Mindset
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Scalable solutions designed to grow with your business.
                                    </p>
                                </div>

                                {/* Agile & Transparent Development */}
                                <div className="space-y-3">
                                    <img src={c3} alt="Agile Development" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" />
                                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                                        Agile & Transparent Development
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Rapid delivery with zero compromise on quality.
                                    </p>
                                </div>

                                {/* Global Impact */}
                                <div className="space-y-3">
                                    <img src={c4} alt="Global Impact" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" />
                                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                                        Global Impact
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Serving start-ups, enterprises, and everything in between.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-12 md:py-16 lg:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 md:mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
                            We Provide best services
                        </h2>
                        <h3 className="text-xl sm:text-2xl text-gray-900">
                            at unbelievable cost
                        </h3>
                    </div>
                    
                    {/* Workflow Process */}
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-4">
                        {/* Designing */}
                        <div className="text-center max-w-xs px-4">
                            <div className="mb-3 md:mb-4">
                                <img src={c5} alt="Designing" className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 mx-auto" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Designing</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Design your product from scratch
                            </p>
                        </div>
                        
                        {/* Arrow 1 */}
                        <div className="hidden lg:block flex-shrink-0">
                            <img src={blueArrow} alt="Arrow" className="w-10 h-5 md:w-12 md:h-6" />
                        </div>
                        
                        {/* Development */}
                        <div className="text-center max-w-xs px-4">
                            <div className="mb-3 md:mb-4">
                                <img src={c6} alt="Development" className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 mx-auto" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Development</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Development your product with high-level methodology
                            </p>
                        </div>
                        
                        {/* Arrow 2 */}
                        <div className="hidden lg:block flex-shrink-0">
                            <img src={blueArrow} alt="Arrow" className="w-10 h-5 md:w-12 md:h-6" />
                        </div>
                        
                        {/* Testing */}
                        <div className="text-center max-w-xs px-4">
                            <div className="mb-3 md:mb-4">
                                <img src={c7} alt="Testing" className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 mx-auto" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Testing</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Our organization ensures automation testing with maintenance
                            </p>
                        </div>
                        
                        {/* Arrow 3 */}
                        <div className="hidden lg:block flex-shrink-0">
                            <img src={blueArrow} alt="Arrow" className="w-10 h-5 md:w-12 md:h-6" />
                        </div>
                        
                        {/* Deployment */}
                        <div className="text-center max-w-xs px-4">
                            <div className="mb-3 md:mb-4">
                                <img src={c8} alt="Deployment" className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 mx-auto" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Deployment</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                We deliver our product on given timeline
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
                        {/* Left - Heading */}
                        <div className="lg:col-span-1">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
                                Portfolio/
                            </h2>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                                Case Studies
                            </h2>
                        </div>
                        
                        {/* Right - Description */}
                        <div className="lg:col-span-2">
                            <p className="text-gray-600 max-w-2xl text-base sm:text-lg leading-relaxed">
                                A showcase of impactful projects, highlighting real-world results and creative problem-solving.
                            </p>
                        </div>
                    </div>
                    
                    {/* Portfolio Grid */}
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                        {/* InnoVista - Top Left */}
                        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="p-4 sm:p-6">
                                <img 
                                    src={portfolio1} 
                                    alt="InnoVista Dashboard" 
                                    className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg sm:rounded-xl mb-3 md:mb-4"
                                />
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                                            InnoVista
                                        </h3>
                                    </div>
                                    <button className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm hover:bg-blue-700 transition-colors">
                                        View Project →
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Sisyphus™ - Top Right */}
                        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="p-4 sm:p-6">
                                <img 
                                    src={portfolio2} 
                                    alt="Sisyphus Dashboard" 
                                    className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg sm:rounded-xl mb-3 md:mb-4"
                                />
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                                            Sisyphus™
                                        </h3>
                                    </div>
                                    <button className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm hover:bg-blue-700 transition-colors">
                                        View Project →
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* InnoVista - Bottom Left */}
                        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="p-4 sm:p-6">
                                <img 
                                    src={portfolio3} 
                                    alt="InnoVista Analytics" 
                                    className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg sm:rounded-xl mb-3 md:mb-4"
                                />
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                                            InnoVista
                                        </h3>
                                    </div>
                                    <button className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm hover:bg-blue-700 transition-colors">
                                        View Project →
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Sisyphus™ - Bottom Right */}
                        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="p-4 sm:p-6">
                                <img 
                                    src={portfolio4} 
                                    alt="Sisyphus Analytics" 
                                    className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg sm:rounded-xl mb-3 md:mb-4"
                                />
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                                            Sisyphus™
                                        </h3>
                                    </div>
                                    <button className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm hover:bg-blue-700 transition-colors">
                                        View Project →
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Client Reviews */}
            <section className="py-12 md:py-16 lg:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8">
                        Clients Reviews
                    </h2>
                    
                    <div className="flex flex-wrap gap-3 md:gap-4 mb-6 md:mb-8">
                        <img src={client1} alt="Client 1" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover" />
                        <img src={client2} alt="Client 2" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover" />
                        <img src={client3} alt="Client 3" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover" />
                        <img src={client4} alt="Client 4" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover" />
                    </div>
                    
                    <blockquote className="text-lg sm:text-xl text-gray-700 mb-4 md:mb-6 italic max-w-4xl">
                        "Their CRM customization completely changed how we manage our clients. Efficiency and growth skyrocketed."
                    </blockquote>
                    
                    <div className="text-gray-900">
                        <p className="font-semibold text-base sm:text-lg">Leslie Alexander</p>
                        <p className="text-gray-600 text-sm sm:text-base">New York, USA</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 md:py-16 lg:py-20 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                        
                        {/* Left - Image */}
                        <div className="order-2 lg:order-1">
                            <div className="bg-blue-200 rounded-xl sm:rounded-2xl p-6 sm:p-8">
                                <img 
                                    src={code} 
                                    alt="Development Process" 
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>
                        
                        {/* Right - Content */}
                        <div className="order-1 lg:order-2 space-y-4 md:space-y-6">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                                Discover how <span className="text-blue-600">Its Unicorn Tech</span>
                                <br />can transform your business
                            </h2>
                            
                            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
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