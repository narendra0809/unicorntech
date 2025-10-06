import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import ContactInfo from '../components/common/ContactInfo';
import Computer from '../assets/computer.png';
import arrow from '../assets/blueArrow.png';
import c1 from '../assets/design.png';
import c2 from '../assets/development.png';
import c3 from '../assets/testing.png';
import c4 from '../assets/deploy.png';
import platformIcon from '../assets/platform.png'; // Platform icon for all info sections
import api from '../api'; // Axios instance

const imgUrl = (path) => {
  if (!path) return null;
  const base = (import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000').replace('/api', '');
  return `${base}/storage/${path}`;
};

// ...existing code...
const CaseStudyPage = () => {
  const { id } = useParams();
  const [caseStudy, setCaseStudy] = useState(null);
  const [loading, setLoading] = useState(true);

  // For image slider
  const [currentSlide, setCurrentSlide] = useState(0);

  const processSteps = [
    { icon: c1, title: 'Designing', description: 'Design your product from scratch' },
    { icon: c2, title: 'Development', description: 'Developed your product with bug-free deployment' },
    { icon: c3, title: 'Testing', description: 'Our organization ensures automation testing with maintenance' },
    { icon: c4, title: 'Deployment', description: 'We deliver our product on given timeline' }
  ];

  useEffect(() => {
    api.get(`/casestudies/${id}`)
      .then(res => {
        setCaseStudy(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  // Auto-slide logic
  useEffect(() => {
    if (!caseStudy?.images || caseStudy.images.length < 2) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % caseStudy.images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [caseStudy]);

  if (loading) return <p className="text-center mt-20">Loading case study...</p>;
  if (!caseStudy) return <p className="text-center mt-20">Case study not found</p>;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-black leading-tight">
                {caseStudy.title}
              </h1>
            </div>
            <div>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                {caseStudy.description}
              </p>
            </div>
          </div>

          {/* Images Slider */}
          <div className="p-6 sm:p-8 md:p-10 lg:p-12 mb-8 sm:mb-10 md:mb-12">
            <div className="w-full bg-[#edebe6] rounded-xl p-4 sm:p-6 md:p-8 flex items-center justify-center min-h-[200px]">
              {caseStudy.images?.length > 0 && (
                <img
                  src={imgUrl(caseStudy.images[currentSlide])}
                  alt={`Slide ${currentSlide + 1}`}
                  className="w-full h-auto object-contain transition-all duration-500"
                />
              )}
            </div>
            {/* Pagination dots */}
            <div className="flex justify-center gap-2 mt-6">
              {caseStudy.images?.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-12 h-1 rounded-full ${idx === currentSlide ? 'bg-blue-500' : 'bg-gray-300'}`}
                ></div>
              ))}
            </div>
          </div>

          {/* Info Sections */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
            {[
              { title: 'Platform', value: caseStudy.platform },
              { title: 'Services', value: caseStudy.services },
              { title: 'Industry', value: caseStudy.industry },
              { title: 'Timeline', value: caseStudy.timeline },
              { title: 'Tech Stack', value: caseStudy.techstack?.join(', ') }
            ].map((section, idx) => (
              <div key={idx} className="text-center lg:text-left">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mx-auto lg:mx-0 mb-3 sm:mb-4">
                  <img src={platformIcon} alt={`${section.title} Icon`} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-black mb-2">{section.title}</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">{section.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 space-y-8">
          {[
            { title: 'Project Overview', content: caseStudy.project_overview },
            { title: 'Challenge', content: caseStudy.challenges },
            { title: 'Solution', content: caseStudy.solution }
          ].map((section, idx) => (
            <div key={idx} className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 items-start">
              <div className="lg:col-span-1">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black">{section.title} :</h2>
              </div>
              <div className="lg:col-span-2">
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">{section.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

        {/* Project Process Section */}
            <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-[#DEE8F4]  sm:m-5 md:m-5 m-2 rounded-xl">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
                    
                    {/* Header - Two Column Layout */}
                    {/* <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24 ">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16">
                           
                            <div>
                                <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">Project Name</p>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black">
                                    {caseStudy.title}
                                </h2>
                            </div>
                            
                           
                            <div>
                                <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">About</p>
                                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                                    Unicorn Tech is a trusted IT partner specializing in custom web development and CRM solutions. From startups to global enterprises, we empower industries like healthcare, retail, finance, and education with technology that drives measurable growth and efficiency.
                                </p>
                            </div>
                        </div>
                    </div> */}

                    {/* Project Process Title */}
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-black mb-10 sm:mb-12 md:mb-16 lg:mb-20">
                        Project Process
                    </h3>

                    {/* Process Steps */}
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-10 lg:gap-6 xl:gap-8">
                        {processSteps.map((step, index) => (
                            <React.Fragment key={index}>
                                <div className="text-center max-w-xs w-full px-4">
                                    {/* Icon Container */}
                                    <div className="mb-4 sm:mb-5 md:mb-6">
                                        <img 
                                            src={step.icon} 
                                            alt={step.title} 
                                            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto object-contain"
                                        />
                                    </div>
                                    {/* Title */}
                                    <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 sm:mb-3">
                                        {step.title}
                                    </h4>
                                    {/* Description */}
                                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                                
                                {/* Arrow - Hidden on mobile and after last item */}
                                {index < processSteps.length - 1 && (
                                    <div className="hidden lg:block flex-shrink-0 px-2">
                                        <img 
                                            src={arrow} 
                                            alt="Arrow" 
                                        />
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            <ContactInfo />
            <Footer />
        </div>
    );
};

export default CaseStudyPage;