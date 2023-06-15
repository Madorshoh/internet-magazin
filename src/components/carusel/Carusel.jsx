import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ImgSlider1 from '../../assets/ImgSlider1.png'
import ImgSlider2 from '../../assets/ImgSlider2.png'
import './carusel.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

export default function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className='carusel__container'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://olcha.uz/image/original/sliders/oz/wfDfz3IRQajxjtkMPh8r0BTnuPTamgR8cJXX0gCoiOYRTYKUbpVhxVkP9fNh.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://olcha.uz/image/original/sliders/oz/9jVibVPeCoIX4NNj5otLURbeLVlkmedI5Ljc4CfjvP50r8mmkpbuZOiXk97T.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://olcha.uz/image/original/sliders/oz/3MppQfBpe21jpYJAGKpu5JQ4aAYTW93en84RTYXTGTmyQ8n0J0ZzgUwbJCPJ.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src={ImgSlider1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={ImgSlider2} alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://olcha.uz/image/original/sliders/oz/oINbzWFx2ZcornYKhl96rMnHVlvnfMWKd9pjPjoM0eGoq2S6N3IkSovbS1S0.png" alt="" /></SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}


        