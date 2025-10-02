import code from '../../assets/code.png';
export default function CtaSection () {
    return(
        <>
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
        </>
    )
}