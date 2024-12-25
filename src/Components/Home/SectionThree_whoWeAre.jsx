"use client"
import React, { useEffect } from 'react';
import Container from '../Common/Container';
import Image from 'next/image';
import gsap from 'gsap';
import { useRouter } from 'next/navigation';
import _ScrollTrigger, { ScrollTrigger } from 'gsap/ScrollTrigger';

const SectionThree_whoWeAre = () => {
    gsap.registerPlugin(_ScrollTrigger);

    
    
    useEffect(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#sectionThree",
                start: "top 80%",
                end: "bottom 0",
                toggleActions: "play none none none",
            },
        });

        tl.from('.textOne, .textTwo, .textThree', {
            y: 50,
            color: "#fff",
            duration: 1,
            rotateX: 56, rotateY: 9, rotateZ:7,
            delay: 1,
            stagger: 0.5,
            otation: 360,
            opacity: 0
        })
    }, [])

    return (
        <div className='py-[142px] bg-[#121212]' id="sectionThree">
            <Container>
                <div className='flex flex-col md:flex-row gap-x-[114px] gap-y-10 '>
                    <div className='md:w-[50%]'>
                        <div className='h-[772px] w-full md:w-[500px]'>
                            <div style={{
                                backgroundImage: "url('/images/whowe.jpg')",
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'top center',
                                height: '100%',
                                width: '100%',
                                objectFit: 'cover',
                            }} className='backat md:bg-fixed'>
                            </div>
                        </div>
                    </div>
                    <div className='text-white md:w-[50%] md:pt-[50px] '>
                        <p className='textOne'>Who We Are</p>
                        <h1 className='text-[55px] leading-[60px] uppercase font-medium textTwo'>We are leading <br /> digital marketing <br /> agency.</h1>
                        <p className='mt-[60px] md:ml-[155px] md:w-[380px] text-gray-400 textThree'>We're a team of strategic mdigital marketing working globally with largest brands, We believe that progress only happens when you refused to play things safe. We combine ideas and behaviors, and insights with design, technological data to produce brand experiences that customers love our services.</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default SectionThree_whoWeAre;