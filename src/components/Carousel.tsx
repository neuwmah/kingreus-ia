'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

interface CarouselProps {
  images?: string[];
}

const defaultImages = [
  'https://i.imgur.com/rCJfIEu.png',
  'https://i.imgur.com/rCJfIEu.png',
  'https://i.imgur.com/rCJfIEu.png',
  'https://i.imgur.com/rCJfIEu.png',
  'https://i.imgur.com/rCJfIEu.png',
];

export default function Carousel({ images = defaultImages }: CarouselProps) {
  return (
    <div className="flex-1 min-w-0 flex justify-center px-4 w-full mt-12 md:w-auto md:mt-0 md:mr-12">
      <div className="w-full h-full max-w-2xl min-w-[calc(300%-560px)]">
        <Swiper
          modules={[Navigation, EffectCoverflow]}
          effect="coverflow"
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          spaceBetween={-240}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: false,
          }}
          navigation={true}
          className="h-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center rounded-lg overflow-hidden">
              <figure className="w-full flex relative pb-[216.74%]">
                <img 
                  className="absolute top-0 left-0 w-full h-full object-contain" 
                  src={image} 
                  alt={`Slide ${index + 1}`} 
                />
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}