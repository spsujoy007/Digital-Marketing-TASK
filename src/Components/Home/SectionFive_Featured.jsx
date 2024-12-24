"use client";
import Container from '../Common/Container';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './featured.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const SectionFive_Featured = () => {

    const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    // Accessing the Swiper instance after the component mounts
    const swiperInstance = document.querySelector('.swiper-container').swiper;
    if (swiperInstance) {
      setTotalItems(swiperInstance.slides.length); 
    }
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

    return (
        <div className='min-h-screen bg-[#121212]'>
            <Container>
                    <div className='main'>
                    <p className='font-medium text-white uppercase pt-[107px]'>Featured <br />Work</p>
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
                        modules={[Autoplay, Navigation]}
                        className="swiper-container"
                        onSlideChange={handleSlideChange}  
                    >
                        <SwiperSlide>
                            <div className='flex'>
                                <div className='w-[50%]'>
                                    <div className='flex justify-end '>
                                        <h1 className='text-5xl text-white font-medium  w-[200px]'>{activeIndex+1}  /  <sup>4</sup></h1>
                                    </div>
                                    <h1 className='text-[10vw] font-medium leading-none z-100 text-white'>BENJON <br />
                                    <span className='pl-40'>WEBSITE</span> <br />
                                    2012</h1>
                                </div>
                                <div className='w-[50%] -z-10'>
                                    <Image className='' width={550} height={800} src={'/images/fea1.jpg'} alt='featured'></Image>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='flex'>
                                <div className='w-[50%]'>
                                    <div className='flex justify-end '>
                                        <h1 className='text-5xl text-white font-medium  w-[200px]'>{activeIndex+1}  /  <sup>4</sup></h1>
                                    </div>
                                    <h1 className='text-[10vw] font-medium leading-none z-100 text-white'>BENJON <br />
                                    <span className='pl-40'>WEBSITE</span> <br />
                                    2012</h1>
                                </div>
                                <div className='w-[50%] -z-10'>
                                    <Image className='' width={550} height={800} src={'/images/fea2.jpg'} alt='featured'></Image>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='flex'>
                                <div className='w-[50%]'>
                                    <div className='flex justify-end '>
                                        <h1 className='text-5xl text-white font-medium  w-[200px]'>{activeIndex+1}  /  <sup>4</sup></h1>
                                    </div>
                                    <h1 className='text-[10vw] font-medium leading-none z-100 text-white'>BENJON <br />
                                    <span className='pl-40'>WEBSITE</span> <br />
                                    2012</h1>
                                </div>
                                <div className='w-[50%] -z-10'>
                                    <Image className='' width={550} height={800} src={'/images/fea3.jpg'} alt='featured'></Image>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='flex'>
                                <div className='w-[50%]'>
                                    <div className='flex justify-end '>
                                        <h1 className='text-5xl text-white font-medium  w-[200px]'>{activeIndex+1}  /  <sup>4</sup></h1>
                                    </div>
                                    <h1 className='text-[10vw] font-medium leading-none z-100 text-white'>BENJON <br />
                                    <span className='pl-40'>WEBSITE</span> <br />
                                    2012</h1>
                                </div>
                                <div className='w-[50%] -z-10'>
                                    <Image className='' width={550} height={800} src={'/images/fea4.jpg'} alt='featured'></Image>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    </div>
            </Container>
        </div>
    );
};

export default SectionFive_Featured;