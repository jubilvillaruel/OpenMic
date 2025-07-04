'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const musicians = [
  { id: 1, name: 'John Doe', instrument: 'Guitar' },
  { id: 2, name: 'Jane Smith', instrument: 'Drums' },
  { id: 3, name: 'Alex Ray', instrument: 'Keyboard' },
];

export default function MusiciansCarousel() {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold text-white mb-4">Featured Musicians</h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {musicians.map((musician) => (
          <SwiperSlide key={musician.id}>
            <div className="bg-[#1e1e1e] text-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold">{musician.name}</h3>
              <p>{musician.instrument}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
