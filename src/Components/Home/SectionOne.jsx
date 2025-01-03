"use client"
import React, { useEffect } from 'react';
import Container from '../Common/Container';
import Image from 'next/image';
import gsap from 'gsap';

const SectionOne = () => {
    let tl = gsap.timeline()

    let title = "MARK"
    let titleTwo = "Eting"
    let charArray = title.split('')
    let charArrayTwo = titleTwo.split('')

    useEffect(() => {
        tl.from('.titleone span', {
            x: 120,
            color: "#fff",
            duration: 1,
            delay: 0.2,
            stagger: 0.2,
            opacity: 0,
        })

        tl.from('.titleTwo span', {
            x: 120,
            color: "#fff",
            duration: 1,
            delay: 0,
            stagger: 0.2,
            opacity: 0,
        })
    } ,[])

    return (
        <div className='pt-[150px]   min-h-screen'>
            <div className='absolute w-full'>
                <Container>
                    <div className='flex items-center gap-[20px]'>
                        <p className='uppercase text-2xl font-semibold'>Digital</p>
                        <div className='bg-black w-[92px] h-[1px] rounded-full'></div>
                    </div>

                    <div>
                        <h1 className='font-bold titleone uppercase md:text-[14vw] text-[22vw] p-0 m-0 leading-none text-[#131313]'>
                            {charArray.map((char, index) => (
                                <span key={index} className='inline-block'>{char}</span>
                            ))}
                        </h1>
                    </div>

                    <div className='flex items-start justify-between lg:flex-row flex-col-reverse w-full '>
                        <p className='text-gray-600 lg:w-[312px]  text-lg'>Static and dynamic secure code review can prevent a day before your product is even released. We can integrate with your dev environment</p>

                        <div className=' flex justify-end w-full'>
                            <p className='font-bold uppercase md:text-[14vw] text-[22vw] p-0 m-0  text-[#131313] text-right leading-none lg:-mt-10 titleTwo'>
                                {charArrayTwo.map((char, index) => (
                                    <span key={index} className='inline-block'>{char}</span>
                                ))}
                            </p>

                        </div>
                    </div>
                </Container>
                
                <div className='md:relative flex justify-end bottom-20 md:h-auto h-[400px] w-full'>
                    <Image className=' object-cover md:object-none md:-z-10' width={1000} height={500} alt='meeting_image' src={'/images/heroImg.jpg'}></Image>
                </div>
            </div>
        </div>
    );
};

export default SectionOne;