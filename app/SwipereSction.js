"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function MyProductSwiper() {
  // افترض إن دي روابط الصور اللي أنت حملتها
  const slides = ["img/banner9.png", "img/banner5.png", "img/banner7.webp"];

  return (
    // استخدام max-w-5xl عشان ما ياخدش عرض الشاشة كامل، و mx-auto عشان يتسنتر
    <div className="w-full max-w-5xl mx-auto py-10 px-4">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        // تحديد ارتفاع ثابت ومتناسب مع الصور اللي اخترناها
        className="h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
      >
        {slides.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="h-full w-full relative">
              <img 
                src={src} 
                alt={`Slide ${index + 1}`} 
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}