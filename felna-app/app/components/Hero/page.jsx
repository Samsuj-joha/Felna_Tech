"use client"
// import Swiper core and required modules
import { Pagination, A11y,Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
import Slider1 from './../../../Images/slider-1.jpg'
import Slider2 from './../../../Images/slide-2.jpg'
import Slider3 from './../../../Images/slide-3.jpg'
import Slide1 from './../../../Images/slide-one.jpg'
import Slide2 from './../../../Images/slide-two.jpg'
// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'

const Hero= () => {
  return (
   <>
    <div className=" lg:grid lg:grid-cols-2 lg:container lg:mx-auto lg:pt-14 lg:pb-10">
      <div className=' '>
        <Swiper className='w-[120%] lg:h-96 z-0'
          // install Swiper modules
          modules={[ Pagination, A11y,Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          autoplay = {true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide className='w-full'>
            <Image className='object-cover'
              src={Slider1}
              width={1100}
              height={500}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image className='object-cover'
              src={Slide2}
              width={1100}
              height={500}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image className='object-cover'
              src={Slider1}
              width={1100}
              height={500}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image className='object-cover'
              src={Slide2}
              width={1100}
              height={500}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image className='object-cover'
              src={Slider1}
              width={1100}
              height={500}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image className='object-cover'
              src={Slide2}
              width={1100}
              height={500}
            />
          </SwiperSlide>
          
        </Swiper>
      </div>
      <div className='lg:grid-cols-2 lg:ml-10 '>
        <div className='flex flex-col justify-center items-center gap-7 '>
          <div className="right-1">
            <Image className='object-cover h-44'
                src={Slider2}
                width={400}
                height={500}
              />
          </div>
          <div className="right-2">
            <Image className='object-cover  h-44'
                src={Slider3}
                width={400}
                height={500}
            />
          </div>
        </div>
      </div>
    </div>
      
   </>
  );
};
export default Hero