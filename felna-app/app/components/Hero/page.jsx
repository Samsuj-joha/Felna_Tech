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
    <div className=" py-8 gap-5 2xl:flex 2xl:container 2xl:mx-auto   ">
      <div className=' mx-auto  '>
        <Swiper className='lg:max-w-screen-lg lg:h-3/4 xl:max-w-screen-lg xl:h-3/4 2xl:max-w-screen-lg 2xl:h-3/4 sm:mx-auto md:mx-auto lg:mx-auto  xl:mx-auto'
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
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
        <div className='flex flex-col justify-center items-center gap-5 py-3'>
          <div className="right-1">
            <Image className='object-cover '
                src={Slider2}
                width={400}
                height={100}
              />
          </div>
          <div className="right-2">
            <Image className='object-cover'
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