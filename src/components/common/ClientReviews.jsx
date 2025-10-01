import client1 from '../../assets/client1.png';
import client2 from '../../assets/client2.png';
import client3 from '../../assets/client3.png';
import client4 from '../../assets/client4.png';
export default function  ClientReviews(){
    return(
        <>
         {/* Client Reviews - Mobile Optimized */}
                    <section className="py-8 sm:py-10 md:py-12 lg:py-10">
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
                    </section>
        </>
    )
}