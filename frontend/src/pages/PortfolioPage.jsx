import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import portfolio1 from '../assets/portfolio1.png';
import portfolio2 from '../assets/portfolio2.png';
import portfolio3 from '../assets/portfolio3.png';
import portfolio4 from '../assets/portfolio4.png';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Project from '../assets/project.png';

const PortfolioPage = () => {
    const navigate = useNavigate();
    const [activeFilter, setActiveFilter] = useState('All Projects');
    
    const filters = ['All Projects', 'Branding', 'Web Design', 'App Design', 'CRM', 'Graphic Design'];
    
    const projects = {
        'All Projects': [
            { id: 1, name: 'InnoVista', image: portfolio1 },
            { id: 2, name: 'Sisyphus™', image: portfolio2 },
            { id: 3, name: 'InnoVista', image: portfolio3 },
            { id: 4, name: 'Sisyphus™', image: portfolio4 }
        ],
        'Branding': [
            { id: 1, name: 'InnoVista', image: portfolio1 },
            { id: 2, name: 'Sisyphus™', image: portfolio2 }
        ],
        'Web Design': [
            { id: 3, name: 'InnoVista', image: portfolio3 },
            { id: 4, name: 'Sisyphus™', image: portfolio4 }
        ],
        'App Design': [
            { id: 1, name: 'InnoVista', image: portfolio1 },
            { id: 3, name: 'InnoVista', image: portfolio3 }
        ],
        'CRM': [
            { id: 2, name: 'Sisyphus™', image: portfolio2 },
            { id: 4, name: 'Sisyphus™', image: portfolio4 }
        ],
        'Graphic Design': [
            { id: 1, name: 'InnoVista', image: portfolio1 },
            { id: 4, name: 'Sisyphus™', image: portfolio4 }
        ]
    };
    
    return(
        <>
        <Header />
        
        {/* Projects Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
                {/* Heading */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center text-black mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                    Projects
                </h1>
                
                {/* Project Image */}
                <div className="w-full rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden">
                    <img 
                        src={Project} 
                        alt="Projects Overview" 
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>
        </section>
        
        {/* Filter & Projects Grid Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
                
                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12 px-4">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 rounded-full text-xs sm:text-sm md:text-base font-medium transition-all duration-300 whitespace-nowrap ${
                                activeFilter === filter
                                    ? 'bg-[#4587C7] text-white shadow-lg'
                                    : 'bg-white text-gray-700 border border-gray-300 hover:border-[#4587C7] hover:text-[#4587C7]'
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
                
                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
                    {projects[activeFilter].map((project) => (
                        <div key={project.id} className="group">
                            <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 transition-all duration-300 hover:shadow-xl shadow-md">
                                <img 
                                    src={project.image} 
                                    alt={project.name}
                                    className="w-full h-auto object-contain rounded-lg sm:rounded-xl mb-4 sm:mb-5 md:mb-6"
                                />
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-2">
                                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-black">
                                        {project.name}
                                    </h3>
                                    <div className="flex flex-row gap-2 sm:gap-3 w-full sm:w-auto">
                                        <button 
                                            onClick={() => navigate('/case-studies')}
                                            className="bg-white text-[#4587C7] px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2 rounded-full text-xs sm:text-sm md:text-base font-medium hover:bg-[#4587C7] hover:text-white transition-colors border border-[#4587C7] whitespace-nowrap text-center flex-1 sm:flex-none"
                                        >
                                            View Case Study
                                        </button>
                                        <button className="bg-[#4587C7] text-white px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2 rounded-full text-xs sm:text-sm md:text-base font-medium hover:bg-[#3a75b5] transition-colors whitespace-nowrap text-center flex-1 sm:flex-none">
                                            View Project →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
       
        <Footer />
        </>
    )
}
export default PortfolioPage;