"use client"
import React, { useEffect } from 'react';
import Container from '../Common/Container';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const com1  = '/images/com1.png';

const SectionTwo_workWith = () => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#sectionTwo",
                start: "top 80%",
                end: "bottom 0",
                toggleActions: "play none none none",
            },
        });

        tl.from('.compLogos #logo', {
            y: 50,
            color: "#fff",
            duration: 1,
            delay: 0.2,
            stagger: 0.2,
            opacity: 0,
        })
    }, [])

    return (
        <div className='my-[150px]' id='sectionTwo'>
            <Container>
                <p className='md:text-xl text-2xl uppercase text-center text-black'>We worked with global largest brands</p>
                
                <div className='grid lg:grid-cols-6 grid-cols-2 px-5 md:px-0 items-center mt-[75px] gap-[150px] w-full compLogos'>
                    <Image id='logo' className='' width={150} height={40} alt='company logo' src={'https://res.cloudinary.com/cloudinarybysp/image/upload/v1735022985/JOB%20TASK/k0fz8ifph2zis0gbdecp.png'}></Image>
                    <Image id='logo' className='' width={150} height={40} alt='company logo' src={'https://res.cloudinary.com/cloudinarybysp/image/upload/v1735022985/JOB%20TASK/vtgfrhbbtxnz83ex09ba.png'}></Image>
                    <Image id='logo' className='' width={150} height={40} alt='company logo' src={'https://res.cloudinary.com/cloudinarybysp/image/upload/v1735022985/JOB%20TASK/nrhi6e9fsvxufxdnvkio.png'}></Image>
                    <Image id='logo' className='' width={150} height={40} alt='company logo' src={'https://res.cloudinary.com/cloudinarybysp/image/upload/v1735022985/JOB%20TASK/lvsawr8qk8lbpcggncwa.png'}></Image>
                    <Image id='logo' className='' width={150} height={40} alt='company logo' src={'https://res.cloudinary.com/cloudinarybysp/image/upload/v1735022986/JOB%20TASK/yyxlphjcoivonql5fnh3.png'}></Image>
                    <Image id='logo' className='' width={150} height={40} alt='company logo' src={'https://res.cloudinary.com/cloudinarybysp/image/upload/v1735022986/JOB%20TASK/xpztnyi0ehibflls7nh3.png'}></Image>
                </div>
            </Container>
        </div>
    );
};

export default SectionTwo_workWith;