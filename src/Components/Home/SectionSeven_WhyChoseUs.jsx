import React from 'react';
import Container from '../Common/Container';
import Image from 'next/image';

const SectionSeven_WhyChoseUs = () => {
    return (
        <div className=''>
            <section className='bg-[#fffaf0] min-h-screen flex justify-center items-center'>
                <Container>
                    <h1 className='text-[10vw] leading-none tracking-wider font-medium text-center uppercase'>why <br /> choose us</h1>
                </Container>
            </section>

            <section className='bg-[#f3ecec] min-h-screen flex justify-center items-center relative'>
                <Container>
                    <div className='w-[50%]'>
                        <p className='text-lg uppercase text-black font-semibold leading-0'>why <br />choose us</p>
                        <h1 className='text-[60px] font-medium uppercase leading-[3.5rem] mt-[70px]'>Keword,Research Strategy, Survey, & Analytics</h1>

                        <div className='ml-[75px]'>
                            <p className='w-[460px] mt-[50px] text-black text-lg'>Attention, we take out our round glasses and our sweater with elbow patches to go back to the origins of the user experience: the first mention of the user and its importance was born in the</p>

                            <div className='mt-[70px] flex gap-1'>
                                <button className='px-4 py-[2px] hover:text-white hover:bg-black font-semibold rounded-full border-[1px] border-black uppercase text-sm text-black'>Google</button>
                                <button className='px-4 py-[2px] hover:text-white hover:bg-black font-semibold rounded-full border-[1px] border-black uppercase text-sm text-black'>Pinterest</button>
                                <button className='px-4 py-[2px] hover:text-white hover:bg-black font-semibold rounded-full border-[1px] border-black uppercase text-sm text-black'>Instagram</button>
                            </div>
                        </div>
                    </div>

                    <div className='absolute top-[180px] right-[308px]'>
                        <div className='flex items-center gap-9 '>
                            <div className='h-[188px] w-[188px] border-[3px] border-black rounded-full flex justify-center items-center'>
                                <h1 className='text-black text-6xl'>60%</h1>
                            </div>
                            <div className='w-[255px]'>
                                <h2 className='text-[26px] uppercase font-medium'>Strategy</h2>
                                <p>Your marketing strategy optimizing performances doesn't have to be a guessing game.</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-9 -ml-[100px] mt-[35px]'>
                            <div className='h-[188px] w-[188px] border-[3px] border-black rounded-full flex justify-center items-center'>
                                <h1 className='text-black text-6xl'>95%</h1>
                            </div>
                            <div className='w-[255px]'>
                                <h2 className='text-[26px] uppercase font-medium'>Audience</h2>
                                <p>Your marketing strategy optimizing performances doesn't have to be a guessing game.</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-9 mt-[35px]'>
                            <div className='h-[188px] w-[188px] border-[3px] border-black rounded-full flex justify-center items-center'>
                                <h1 className='text-black text-6xl'>70%</h1>
                            </div>
                            <div className='w-[255px]'>
                                <h2 className='text-[26px] uppercase font-medium'>Keyword</h2>
                                <p>Your marketing strategy optimizing performances doesn't have to be a guessing game.</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <section className='bg-[#fffaf0] h-screen flex justify-center items-center pt-[150px] overflow-hidden'>
                <Container>
                    <p className='text-lg uppercase text-black font-medium leading-0'>why <br />choose us</p>
                    <div className='flex'>
                        <div className='mt-[100px] w-[40%] grid grid-cols-2 gap-y-[100px]'>
                            <div className=''>
                                <h1 className='text-[100px] '>25k</h1>
                                <p className='text-xl font-normal text-gray-500'>Project <br />completed</p>
                            </div>

                            <div className=''>
                                <h1 className='text-[100px] '>8k</h1>
                                <p className='text-xl font-normal text-gray-500'>Happy <br />customers </p>
                            </div>
                            
                            <div className=''>
                                <h1 className='text-[100px] '>15</h1>
                                <p className='text-xl font-normal text-gray-500'>Years <br />experiences</p>
                            </div>

                            <div className=''>
                                <h1 className='text-[100px] '>98</h1>
                                <p className='text-xl font-normal text-gray-500'>Awards <br /> achievement</p>
                            </div>
                        </div>

                        <div className='w-[60%]'>
                            <Image className='w-full h-full' width={500} height={800} alt='' src={'/images/whychoseus.png'}></Image>
                        </div>
                    </div>
                </Container>
            </section>

            <section className='bg-[#e0e3cc] h-screen pt-[100px] overflow-hidden'>
                <Container>
                    <div className='mt-[90px]'>
                        <h4 className='text-3xl text-black font-light  leading-0 text-center'>Have you project in mind?</h4>
                        <h1 className='text-[5.21vw] text-center font-light leading-0'>Let's make something <br />great together!</h1>
                    </div>
                    
                </Container>
            </section>
        </div>
    );
};

export default SectionSeven_WhyChoseUs;