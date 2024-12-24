"use client";
import React, { useState } from 'react';
import Container from '../Common/Container';
import { FaCheck, FaMinus, FaPlus } from 'react-icons/fa6';

const SectionEight_pricingTable = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const faqlist = [
        {
            id: 1,
            title: 'Design should enrich our day',
            description: 'Our design services starts and ends with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping design interfaces that bring joy to people'
        },
        {
            id: 2,
            title: 'Bring their individual experience and creative',
            description: 'This is the second `$items` accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes.'
        },
        {
            id: 3,
            title: 'Human centred design to challenges',
            description: 'Our design services starts and ends with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping design interfaces that bring joy to people'
        },
        {
            id: 4,
            title: 'Developing core web applications',
            description: 'Our design services starts and ends with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping design interfaces that bring joy to people'
        }
    ]

    return (
        <div className='py-[100px] min-h-screen bg-[#f3ecec]'>
            <Container>
                <div className='mt-[100px]'>
                    <h5 className='text-lg uppercase font-medium text-gray-600'>Pricing Table</h5>
                    <div className='flex'>
                        <div className='md:w-[50%]'>
                            <h1 className='uppercase text-[60px] font-medium leading-none mt-5'>Be kind to your <br />mind</h1>
                            <div className='mt-16 mr-[150px]'>
                                {
                                    faqlist.map(faq => (
                                        <div onClick={() => setActiveIndex(faq.id === activeIndex ? 0 : faq.id)} key={faq.id} className={`py-4 select-none cursor-pointer ${faq.id === 1 ? "border-y-[1px]" : "border-b-[1px]"} border-black `}>
                                            <div className='flex justify-between items-center'>
                                                <h1 className='text-lg font-medium'>{faq.title}</h1>
                                                {
                                                    activeIndex === faq.id ? <FaMinus /> : <FaPlus />
                                                }
                                            </div>
                                            <div className={`duration-500 ${activeIndex === faq.id ? "h-full" : "h-0 "} overflow-hidden`}>
                                                {
                                                    activeIndex === faq.id && <p className={`text-gray-600 mt-4`}>{faq.description}</p>
                                                }
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className='md:w-[50%] mt-20'>
                            <div className='bg-[#121212] h-[223px] rounded-lg flex items-center gap-12 px-8 relative'>
                                <div className='p-3 bg-[#ff9776] inline-block rounded-md'>
                                    <FaCheck className='text-black' />
                                </div>
                                <div className=''>
                                    <p className='px-3 py-1 rounded-full border-[1px] border-gray-400 text-gray-400 inline-block mb-5 font-normal uppercase text-sm'>Yearly</p>
                                    <h2 className='text-2xl text-white font-medium uppercase'>14 days free</h2>
                                    <p className='text-gray-300 mt-3'>Subscription fee is $129.99 USD and automatically <br />renews each year.</p>
                                </div>

                                <div className='absolute -top-3 uppercase right-8 bg-[#ff9776] text-white px-3 py-[2px] rounded-md'>
                                    <span className='text-sm'>Best Value</span>
                                </div>

                                <div className='absolute top-10 uppercase right-8 text-white'>
                                    <span className='text-4xl'>$129<sub className='text-lg'>.99</sub></span>
                                </div>
                            </div>

                            <div className='bg-white h-[223px] rounded-lg flex items-center gap-12 px-8 relative mt-5'>
                                <div className='p-3 border-[2px] border-gray-400 inline-block rounded-md'>
                                    <FaCheck className='text-gray-400 ' />
                                </div>
                                <div className=''>
                                    <p className='px-3 py-1 rounded-full border-[1px] border-gray-400 text-gray-400 inline-block mb-5 font-normal uppercase text-sm'>Monthly</p>
                                    <h2 className='text-2xl text-black font-medium uppercase'>7 days free</h2>
                                    <p className='text-black mt-3'>Subscription fee is $129.99 USD and automatically <br />renews each year.</p>
                                </div>

                                <div className='absolute top-10 uppercase right-8 text-black'>
                                    <span className='text-4xl'>$12<sub className='text-lg'>.99</sub></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default SectionEight_pricingTable;