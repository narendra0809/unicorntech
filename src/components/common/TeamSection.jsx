import UnicornTeam from '../../assets/UnicornTeam.png';

const TeamSection = () => {
  const experts = [
    {
      id: 1,
      name: 'Kristin Watson',
      role: 'UI/UX Designer',
    },
    {
      id: 2,
      name: 'Wade Warren',
      role: 'React Developer',
    },
    {
      id: 3,
      name: 'Jerome Bell',
      role: 'Node Developer',
    },
    {
      id: 4,
      name: 'Devon Lane',
      role: 'Python Developer',
    },
    {
      id: 5,
      name: 'Marvin McKinney',
      role: 'Full Stack Developer',
    }
  ];

  return (
    <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-8 sm:mb-10 md:mb-12 gap-4 sm:gap-6">
          <div className="text-center md:text-left">
            <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">
              Meet Our
            </p>
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black leading-tight">
              Unicorn Tech Experts
            </h1>
          </div>
          
          <div className="w-full md:w-auto">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-black leading-tight">
              The minds driving
            </h2>
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-black leading-tight">
              innovation and solutions.
            </h2>
          </div>
        </div>

        {/* Scrollable Experts Container */}
        <div className="relative">
          <div
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {experts.map((expert) => (
              <div
                key={expert.id}
                className="flex-shrink-0"
              >
                {/* Image Box */}
                <div className="bg-[#E8EEF7] rounded-2xl p-8 sm:p-10 md:p-12 mb-4 w-78 h-48 sm:w-56 sm:h-56 md:w-94 md:h-64 flex items-center justify-center">
                  <img
                    src={UnicornTeam}
                    alt="Unicorn Logo"
                    className=" object-contain"
                  />
                </div>
                
                {/* Name and Role */}
                <div className="flex justify-between items-center">
                  <h3 className="text-sm sm:text-base font-bold text-black  ">
                    {expert.name}
                  </h3>
                  <span className=" bg-black text-white px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                    {expert.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default TeamSection;
