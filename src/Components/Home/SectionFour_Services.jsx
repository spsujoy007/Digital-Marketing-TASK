'use client'
import React, { useEffect } from 'react';
import Container from '../Common/Container';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const SectionFour_Services = () => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#sectionFour",
                start: "top 70%",
                end: "bottom 0",
                toggleActions: "play none none none",
            },
        });

        tl.from('.title', {
            y: 50,
            duration: 1,
            color: "#fff",
            rotateX: 56, rotateY: 9, rotateZ:7,
            delay: 0.5,
            stagger: 0.5,
            rotation: 360,
            opacity: 0,
        })

        tl.from('.boxtitle, .boxdetails', {
            x: -50,
            duration: 1,
            delay: 0.5,
            stagger: 0.5,
            otation: 360,
            opacity: 0
        })
    }, [])

    return (
        <div className='py-[190px]' id='sectionFour'>
            <Container>
                <div className='md:flex justify-center'>
                    <div className='text-black'>
                        <p className='text-lg uppercase text-gray-500 title'>Services</p>
                        <h1 className='text-[60px] text-wrap font-medium uppercase leading-[3.5rem] title text-black'>Our marketing <br />Services</h1>
                        <p className='md:w-[460px] md:ml-[220px] md:mt-[50px] md:py-[80px] py-5 md:px-[30px] title md:border-l-[1px] border-gray-200 text-gray-500 text-lg w-full'>Consumers today rely heavily on digital means to research products. We research a brand of bldend engaging with it, according to the meanwhile, 51% of consumers say they use Google to research products before buying.</p>
                    </div>
                </div>

                <div className='mt-[70px] border-t-[1px] border-gray-200 pt-[68px]'>
                    <div className='md:flex'>
                        <h1 className='text-4xl md:mb-0 mb-5 uppercase font-medium md:w-[430px] boxtitle'>Search Engine <br /> Optimization</h1>
                        <div className='text-lg up w-[335px] font-medium text-gray-700 boxdetails'>
                            <p>
                            We help brands stand out through aweful, elegant visual design. Our design mainly philosophy. <br />
                            </p>
                            <p className='mt-[20px]'>
                            + Logo Design <br />
                            + Advertisement <br />
                            + Promotion
                            </p>
                        </div>
                        <div></div>
                    </div>
                </div>

                {/* section 2  */}
                <div className='mt-[70px] border-t-[1px] border-gray-200 pt-[68px]'>
                    <div className='md:flex'>
                        <h1 className='text-4xl md:mb-0 mb-5 uppercase font-medium md:w-[430px] boxtitle'>Email <br />
                        Marketing</h1>
                        <div className='text-lg up w-[335px] font-medium text-gray-700 boxdetails'>
                            <p>
                            We help brands stand out through aweful, elegant visual design. Our design mainly philosophy. <br />
                            </p>
                            <p className='mt-[20px]'>
                            + Logo Design <br />
                            + Advertisement <br />
                            + Promotion
                            </p>
                        </div>
                        <div></div>
                    </div>
                </div>

                <div className='mt-[70px] border-t-[1px] border-gray-200 pt-[68px]'>
                    <div className='md:flex'>
                        <h1 className='text-4xl md:mb-0 mb-5 uppercase font-medium md:w-[430px] boxtitle'>Content <br />
                        Marketing</h1>
                        <div className='text-lg up w-[335px] font-medium text-gray-700 boxdetails'>
                            <p>
                            We help brands stand out through aweful, elegant visual design. Our design mainly philosophy. <br />
                            </p>
                            <p className='mt-[20px]'>
                            + Logo Design <br />
                            + Advertisement <br />
                            + Promotion
                            </p>
                        </div>
                        <div></div>
                    </div>
                </div>

                <div className='mt-[70px] border-y-[1px] border-gray-200 py-[68px]'>
                    <div className='md:flex'>
                        <h1 className='text-4xl md:mb-0 mb-5 uppercase font-medium md:w-[430px] boxtitle'>Social <br />
                        Marketing</h1>
                        <div className='text-lg up w-[335px] font-medium text-gray-700 boxdetails'>
                            <p>
                            We help brands stand out through aweful, elegant visual design. Our design mainly philosophy. <br />
                            </p>
                            <p className='mt-[20px]'>
                            + Logo Design <br />
                            + Advertisement <br />
                            + Promotion
                            </p>
                        </div>
                        <div></div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default SectionFour_Services;