// src/components/ClientReviews.jsx
import React, { useEffect, useState } from 'react';
import api from '../../api';

export default function ClientReviews() {
  const [reviews, setReviews] = useState([]);
  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const imgUrl = (path) => {
    if (!path) return null;
    const base = (import.meta.env.REACT_APP_API_URL || 'http://127.0.0.1:8000').replace('/api', '');
    return `${base}/storage/${path}`;
  };

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    api.get('/clientreviews')
      .then(res => {
        if (!mounted) return;
        const data = Array.isArray(res.data) ? res.data : [];
        setReviews(data);
        setActive(0);
        setError('');
        setLoading(false);
      })
      .catch(err => {
        if (!mounted) return;
        setError(err?.response?.data?.message || err.message || 'Failed to load reviews');
        setLoading(false);
      });
    return () => { mounted = false; };
  }, []);

  // preserve original layout -> show first review (active)
  const r = reviews[active] || null;

  return (
    <>
      <section className="py-8 sm:py-10 md:py-12 lg:py-10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8">
            Clients Reviews
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 bg-[#4587C7]/10 rounded-xl sm:rounded-2xl">
          {/* thumbnails row (keeps same spacing & sizes as original) */}
          <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8">
            {loading ? (
              // placeholders like original sizes
              <>
                <div className="mt-3 sm:mt-4 md:mt-6 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 rounded bg-slate-200" />
                <div className="mt-3 sm:mt-4 md:mt-6 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 rounded bg-slate-200" />
                <div className="mt-3 sm:mt-4 md:mt-6 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 rounded bg-slate-200" />
                <div className="mt-3 sm:mt-4 md:mt-6 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 rounded bg-slate-200" />
              </>
            ) : (
              (reviews.length ? reviews : []).map((item, idx) => (
                <button
                  key={item.id ?? idx}
                  onClick={() => setActive(idx)}
                  className={`mt-3 sm:mt-4 md:mt-6 rounded object-cover focus:outline-none transition transform ${
                    idx === active ? 'ring-2 ring-indigo-500 scale-105' : ''
                  }`}
                >
                  {item.image ? (
                    <img
                      src={imgUrl(item.image)}
                      alt={item.client_name}
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 rounded object-cover"
                    />
                  ) : (
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 rounded bg-slate-100 flex items-center justify-center text-sm text-slate-500">
                      {(item.client_name || 'C')[0]}
                    </div>
                  )}
                </button>
              ))
            )}
          </div>

          {/* main content (blockquote + name + location) - kept original classes */}
          {loading ? (
            <div className="py-6 sm:py-8 md:py-10">
              <div className="h-16 sm:h-20 md:h-24 bg-white/60 rounded animate-pulse" />
            </div>
          ) : error ? (
            <div className="py-6 sm:py-8 md:py-10 text-red-600">{error}</div>
          ) : !r ? (
            <div className="py-6 sm:py-8 md:py-10 text-slate-600">No reviews yet</div>
          ) : (
            <>
              <blockquote className="text-sm sm:text-base md:text-lg lg:text-xl text-black-700 mb-3 sm:mb-4 md:mb-6 italic max-w-4xl">
                "{r.msg}"
              </blockquote>

              <div className="text-gray-900">
                <p className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg">{r.client_name}</p>
                <p className="text-gray-600 mb-3 sm:mb-4 md:mb-5 pb-3 sm:pb-4 md:pb-5 text-[10px] sm:text-xs md:text-sm lg:text-base">{r.from}</p>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
