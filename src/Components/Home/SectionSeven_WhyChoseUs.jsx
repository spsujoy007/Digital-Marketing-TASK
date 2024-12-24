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
                    <div className='md:w-[50%] w-full'>
                        <p className='text-lg uppercase text-black font-semibold leading-0 mt-12 md:mt-0'>why <br />choose us</p>
                        <h1 className='md:text-[60px] text-4xl text-wrap font-medium uppercase leading-[3.5rem] mt-[70px]'>Keword,Research Strategy, Survey, & Analytics</h1>

                        <div className='md:ml-[75px]'>
                            <p className='md:w-[460px] md:mt-[50px] mt-5 text-black text-lg'>Attention, we take out our round glasses and our sweater with elbow patches to go back to the origins of the user experience: the first mention of the user and its importance was born in the</p>

                            <div className='mt-[70px] flex gap-1'>
                                <button className='px-4 py-[2px] hover:text-white hover:bg-black font-semibold rounded-full border-[1px] border-black uppercase text-sm text-black'>Google</button>
                                <button className='px-4 py-[2px] hover:text-white hover:bg-black font-semibold rounded-full border-[1px] border-black uppercase text-sm text-black'>Pinterest</button>
                                <button className='px-4 py-[2px] hover:text-white hover:bg-black font-semibold rounded-full border-[1px] border-black uppercase text-sm text-black'>Instagram</button>
                            </div>
                        </div>
                    </div>

                    <div className='md:absolute md:top-[180px] md:mt-0 mt-12 md:right-[308px] pb-12 md:pb-0'>
                        <div className='flex items-center gap-9 '>
                            <div className='md:h-[188px] md:w-[188px] h-[100px] w-[100px] border-[3px] border-black rounded-full flex justify-center items-center'>
                                <h1 className='text-black md:text-6xl md:inline-block w-[100px] md:w-[188px] text-center text-2xl'>60%</h1>
                            </div>
                            <div className='w-[255px]'>
                                <h2 className='text-[26px] uppercase font-medium'>Strategy</h2>
                                <p>Your marketing strategy optimizing performances doesn't have to be a guessing game.</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-9 md:-ml-[100px] mt-[35px]'>
                            <div className='md:h-[188px] md:w-[188px] h-[100px] w-[100px] border-[3px] border-black rounded-full flex justify-center items-center'>
                                <h1 className='text-black md:text-6xl md:inline-block w-[100px] md:w-[188px] text-center text-2xl'>95%</h1>
                            </div>
                            <div className='w-[255px]'>
                                <h2 className='text-[26px] uppercase font-medium'>Audience</h2>
                                <p>Your marketing strategy optimizing performances doesn't have to be a guessing game.</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-9 mt-[35px]'>
                            <div className='md:h-[188px] md:w-[188px] h-[100px] w-[100px] border-[3px] border-black rounded-full flex justify-center items-center'>
                                <h1 className='text-black md:text-6xl md:inline-block w-[100px] md:w-[188px] text-center text-2xl'>70%</h1>
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
                    <div className='flex md:flex-row flex-col'>
                        <div className='md:mt-[100px] mt-10 md:w-[40%] w-full grid grid-cols-2 gap-y-[100px]'>
                            <div className=''>
                                <h1 className='md:text-[100px] text-6xl '>25k</h1>
                                <p className='text-xl font-normal text-gray-500'>Project <br />completed</p>
                            </div>

                            <div className=''>
                                <h1 className='md:text-[100px] text-6xl '>8k</h1>
                                <p className='text-xl font-normal text-gray-500'>Happy <br />customers </p>
                            </div>
                            
                            <div className=''>
                                <h1 className='md:text-[100px] text-6xl '>15</h1>
                                <p className='text-xl font-normal text-gray-500'>Years <br />experiences</p>
                            </div>

                            <div className=''>
                                <h1 className='md:text-[100px] text-6xl '>98</h1>
                                <p className='text-xl font-normal text-gray-500'>Awards <br /> achievement</p>
                            </div>
                        </div>

                        <div className='md:w-[60%] w-full mt-16 md:mt-0'>
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