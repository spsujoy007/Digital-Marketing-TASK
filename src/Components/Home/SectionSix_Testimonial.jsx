'use client';
import Container from '../Common/Container';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './featured.css';
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const SectionSix_Testimonial = () => {
    
    return (
        <div className='min-h-screen'>
            <Container>
                <div className='flex justify-center items-center h-screen'>
                    <div className='w-[635px] '>
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
                            loop={true}
                            navigation={{
                                prevEl: ".custom-prev",
                                nextEl: ".custom-next",
                              }}
                            modules={[Autoplay, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className='text-center select-none'>
                                    <div className=' w-full'><BiSolidQuoteAltLeft className='text-6xl mx-auto' /></div>
                                    <p className='text-2xl italic mt-[75px]'>When we talk about Alts, we do not mean a typical business partner, but rather a team that collaborates with us daily, always there for us when we encounter difficulties and celebrate achievements. We see in Alts our best ally for success!</p>

                                    <div className='mt-[70px]'>
                                        <h1 className='uppercase text-3xl font-medium my-0 py-0'>Maria D. Halk</h1>
                                        <h3 className='uppercase font-light text-sm text-gray-500 py-0 mt-[15px]'>Management Director</h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                            
                            <SwiperSlide>
                                <div className='text-center select-none'>
                                    <div className=' w-full'><BiSolidQuoteAltLeft className='text-6xl mx-auto' /></div>
                                    <p className='text-2xl italic mt-[75px]'>When we talk about Alts, we do not mean a typical business partner, but rather a team that collaborates with us daily, always there for us when we encounter difficulties and celebrate achievements. We see in Alts our best ally for success!</p>

                                    <div className='mt-[70px]'>
                                        <h1 className='uppercase text-3xl font-medium my-0 py-0'>Maria D. Halk</h1>
                                        <h3 className='uppercase font-light text-sm text-gray-500 py-0 mt-[15px]'>Management Director</h3>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='text-center select-none'>
                                    <div className=' w-full'><BiSolidQuoteAltLeft className='text-6xl mx-auto' /></div>
                                    <p className='text-2xl italic mt-[75px]'>When we talk about Alts, we do not mean a typical business partner, but rather a team that collaborates with us daily, always there for us when we encounter difficulties and celebrate achievements. We see in Alts our best ally for success!</p>

                                    <div className='mt-[70px]'>
                                        <h1 className='uppercase text-3xl font-medium my-0 py-0'>Maria D. Halk</h1>
                                        <h3 className='uppercase font-light text-sm text-gray-500 py-0 mt-[15px]'>Management Director</h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                        <div className='flex justify-center gap-4 mt-10'>
                            <button className="custom-prev text-black border-[1px] border-gray-700 rounded-full text-xl p-3">
                                <FaArrowLeft />
                            </button>
                            <button className="custom-next  text-black border-[1px] border-gray-700 rounded-full text-xl p-3">
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default SectionSix_Testimonial;