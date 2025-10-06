import { useEffect, useRef, useState } from 'react';
import UnicornTeam from '../../assets/UnicornTeam.png';
import api from '../../api'; // adjust path if your api.js is elsewhere

const TeamSection = () => {
  const [experts, setExperts] = useState([]);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);
  const isPausedRef = useRef(false);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await api.get('/ourteam'); // Laravel route: /api/ourteam
        const data = Array.isArray(res.data) ? res.data : res.data?.data ?? [];
        setExperts(data);
      } catch (err) {
        console.error('Error fetching team data:', err);
      }
    };
    fetchTeam();
  }, []);

  const imgUrl = (path) => {
    if (!path) return null;
    const base = (import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000').replace('/api', '');
    return `${base}/storage/${path}`;
  };

  // auto-scroll logic
  useEffect(() => {
    const container = containerRef.current;
    if (!container || experts.length === 0) return;

    const getGap = () => {
      const cs = getComputedStyle(container);
      // gap may be returned as single value or two values; try columnGap then gap
      const gapVal = cs.columnGap || cs.gap || cs.getPropertyValue('gap');
      const px = parseFloat(gapVal) || 0;
      return px;
    };

    const scrollStep = () => {
      const children = container.children;
      if (!children || children.length === 0) return 0;
      const first = children[0];
      const childW = first.getBoundingClientRect().width;
      const gap = getGap();
      return Math.round(childW + gap);
    };

    const step = scrollStep();
    if (step === 0) return;

    const scrollOnce = () => {
      if (isPausedRef.current) return;
      const maxScroll = container.scrollWidth - container.clientWidth;
      // if we're at (or near) end, go back to start
      if (Math.ceil(container.scrollLeft + container.clientWidth) >= Math.ceil(container.scrollWidth) - 1) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: step, behavior: 'smooth' });
      }
    };

    // start interval
    intervalRef.current = setInterval(scrollOnce, 5000);

    // cleanup
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [experts]);

  // pause/resume handlers for hover
  const handleMouseEnter = () => {
    isPausedRef.current = true;
  };
  const handleMouseLeave = () => {
    isPausedRef.current = false;
  };

  return (
    <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-8 sm:mb-10 md:mb-12 gap-4 sm:gap-6">
          <div className="text-center md:text-left">
            <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">Meet Our</p>
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black leading-tight">
              Unicorn Tech Experts
            </h1>
          </div>
          <div className="w-full md:w-auto text-center md:text-right">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-black leading-tight">
              The minds driving
            </h2>
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-black leading-tight">
              innovation and solutions.
            </h2>
          </div>
        </div>

        {/* Dynamic Team Members */}
        <div className="relative">
          <div
            ref={containerRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {experts.map((expert) => (
              <div key={expert.id} className="flex-shrink-0">
                {/* Image */}
                <div className="bg-[#E8EEF7] rounded-2xl p-8 sm:p-10 md:p-12 mb-4 w-78 h-48 sm:w-56 sm:h-56 md:w-94 md:h-64 flex items-center justify-center">
                  <img
                    src={imgUrl(expert.image) || UnicornTeam}
                    alt={expert.name}
                    className="object-contain max-h-full max-w-full"
                    onError={(e) => (e.currentTarget.src = UnicornTeam)}
                  />
                </div>

                {/* Name + Designation */}
                <div className="flex justify-between items-center min-w-[200px]">
                  <h3 className="text-sm sm:text-base font-bold text-black">{expert.name}</h3>
                  <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                    {expert.designation}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hide Scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default TeamSection;
