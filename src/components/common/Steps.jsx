import React from 'react';
import c5 from '../../assets/design.png';
import c6 from '../../assets/development.png';
import c7 from '../../assets/testing.png';
import c8 from '../../assets/deploy.png';
import blueArrow from '../../assets/blueArrow.png';




export default function Steps () {
    return(
        <>
        <section className="py-6 sm:py-8 md:py-10 lg:py-8">
                <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10">
                    <div className="text-center mb-6 sm:mb-8 md:mb-12">
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-1 sm:mb-2 md:mb-4">
                            We Provide best services
                        </h2>
                        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900">
                            at unbelievable cost
                        </h3>
                    </div>
                    
                    {/* Workflow Process - Mobile Optimized */}
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-4">
                        {/* Designing */}
                        <div className="text-center max-w-xs px-2 sm:px-4">
                            <div className="mb-2 sm:mb-3 md:mb-4">
                                <img src={c5} alt="Designing" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 xl:w-20 xl:h-20 mx-auto object-contain" />
                            </div>
                            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Designing</h3>
                            <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 leading-relaxed">
                                Design your product from scratch
                            </p>
                        </div>
                        
                        {/* Arrow 1 - Mobile Hidden */}
                        <div className="hidden lg:block flex-shrink-0">
                            <img src={blueArrow} alt="Arrow" />
                        </div>
                        
                        {/* Development */}
                        <div className="text-center max-w-xs px-2 sm:px-4">
                            <div className="mb-2 sm:mb-3 md:mb-4">
                                <img src={c6} alt="Development" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 xl:w-20 xl:h-20 mx-auto object-contain" />
                            </div>
                            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Development</h3>
                            <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 leading-relaxed">
                                Developed your product with bugs free deployment.
                            </p>
                        </div>
                        
                        {/* Arrow 2 - Mobile Hidden */}
                        <div className="hidden lg:block flex-shrink-0">
                            <img src={blueArrow} alt="Arrow" />
                        </div>
                        
                        {/* Testing */}
                        <div className="text-center max-w-xs px-2 sm:px-4">
                            <div className="mb-2 sm:mb-3 md:mb-4">
                                <img src={c7} alt="Testing" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 xl:w-20 xl:h-20 mx-auto object-contain" />
                            </div>
                            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Testing</h3>
                            <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 leading-relaxed">
                                Our organisation ensures automation testing with maintence.
                            </p>
                        </div>
                        
                        {/* Arrow 3 - Mobile Hidden */}
                        <div className="hidden lg:block flex-shrink-0">
                            <img src={blueArrow} alt="Arrow" />
                        </div>
                        
                        {/* Deployment */}
                        <div className="text-center max-w-xs px-2 sm:px-4">
                            <div className="mb-2 sm:mb-3 md:mb-4">
                                <img src={c8} alt="Deployment" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 xl:w-20 xl:h-20 mx-auto object-contain" />
                            </div>
                            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Deployment</h3>
                            <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 leading-relaxed">
                                We deliver our product on given timeline
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
} 
 
 