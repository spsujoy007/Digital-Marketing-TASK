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
import Image from 'next/image';

const SectionSix_Testimonial = () => {

    // useEffect(() => {
    //     let tl = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: "#sectionThree",
    //             start: "top 70%",
    //             end: "bottom 0",
    //             toggleActions: "play none none none",
    //         },
    //     });

    //     tl.from('.textOne, .textTwo, .textThree', {
    //         y: 50,
    //         color: "#fff",
    //         duration: 1,
    //         rotateX: 56, rotateY: 9, rotateZ:7,
    //         delay: 1,
    //         stagger: 0.5,
    //         otation: 360,
    //         opacity: 0
    //     })
    // }, [])
    
    return (
        <div className='min-h-screen relative md:pb-[250px]'>
            <Container>
                <div className='flex justify-center items-center h-screen'>
                    <div className='md:w-[635px] w-full'>
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


            <Image className='md:absolute hidden md:block top-[10%] left-[20%]' width={160} height={400} alt='testimonial' src={'/images/testi1.jpg'}></Image>
            <Image className='md:absolute hidden md:block top-[15%] right-[30%]' width={100} height={400} alt='testimonial' src={'/images/testi2.jpg'}></Image>
            <Image className='md:absolute hidden md:block top-[40%] left-[5%]' width={100} height={400} alt='testimonial' src={'/images/testi3.jpg'}></Image>
            <Image className='md:absolute hidden md:block top-[55%] left-[8%]' width={250} height={400} alt='testimonial' src={'/images/testi5.jpg'}></Image>
            <Image className='md:absolute hidden md:block top-[40%] right-[8%]' width={250} height={400} alt='testimonial' src={'/images/testi6.jpg'}></Image>
            <Image className='md:absolute hidden md:block top-[60%] right-[18%]' width={120} height={400} alt='testimonial' src={'/images/testi7.jpg'}></Image>
        </div>
    );
};

export default SectionSix_Testimonial;