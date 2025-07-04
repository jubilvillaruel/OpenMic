'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const gigs = [
  { id: 1, name: "Jazz Night at The Lounge" },
  { id: 2, name: "Open Mic @ Makati" },
  { id: 3, name: "Acoustic Thursdays" },
  { id: 4, name: "Band Battle Finals" },
  { id: 5, name: "Sunset Sessions" },
];

export default function GigsCarousel() {
  return (
    <div className="relative px-4 sm:px-8 lg:px-16">
      {/* Fading sides */}
      <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        loop={true}
        spaceBetween={20}
        slidesPerView="auto"
        speed={500}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 3 },
        }}
      >
        {gigs.map((gig) => (
          <SwiperSlide key={gig.id}>
            <div className="bg-[#1a1a1a] text-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">{gig.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
