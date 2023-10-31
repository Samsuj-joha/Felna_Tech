"use client"
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
import Slider1 from './../../../Images/slider-1.jpg'
import Slider2 from './../../../Images/slide-2.jpg'
import Slider3 from './../../../Images/slide-3.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Hero= () => {
  return (
   <>
    <div className=" lg:grid lg:grid-cols-2 lg:container lg:mx-auto lg:pt-20">
      <div className=' '>
        <Swiper className=' lg:h-3/4'
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide className='w-96'>
            <Image className='object-cover'
              src={Slider1}
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
              src={Slider1}
              width={1100}
              height={500}
            />
          </SwiperSlide>
          
        </Swiper>
      </div>
      <div className='grid-cols-2 '>
        <div className='flex flex-col justify-center items-center gap-6 '>
          <div className="right-1">
            <Image className='object-cover h-56'
                src={Slider2}
                width={400}
                height={100}
              />
          </div>
          <div className="right-2">
            <Image className='object-cover  h-56'
                src={Slider3}
                width={400}
                height={400}
            />
          </div>
        </div>
      </div>
    </div>
      
   </>
  );
};
export default Hero