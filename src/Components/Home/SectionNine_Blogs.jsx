import React from 'react';
import Container from '../Common/Container';
import Image from 'next/image';
import { MdOutlineArrowOutward } from "react-icons/md";

const SectionNine_Blogs = () => {
    return (
        <div className='py-[100px] min-h-screen'>
            <Container>
                <div className='md:flex justify-center'>
                   <div>
                        <h4 className='text-lg uppercase text-gray-500'>Recent Blog</h4>
                        <h1 className='text-[60px] uppercase font-medium leading-none'>Read Updated <br />Journal</h1>
                        <p className='md:w-[350px] md:py-[80px] py-5 md:pl-[45px] md:ml-[200px] md:border-l-[1px] border-gray-300 md:mt-[40px] text-gray-600'>
                            Read our blog and try to see everything
                            from every perspective. Our passion lies
                            in making everything accessible and
                            aesthetic for everyone.
                        </p>
                   </div>
                </div>

                <div className='flex flex-col md:flex-row justify-start'>
                    <div className="md:w-1/2 w-full relative">
                        <div className='md:w-[340px] md:h-[500px]'>
                            <Image className='w-full h-full' width={400} height={800} alt='blog' src={'/images/blog1.jpg'}></Image>
                        </div>

                        <div className='bg-white p-12 absolute bottom-0 right-0 w-[400px]'>
                            <h3 className='text-sm text-gray-500'>UI Design . 02 May 2019</h3>
                            <h1 className='mt-3 text-2xl font-medium'>How to bring fold to your startup company with Axtra</h1>
                            <p className='mt-[30px] py-2 border-t-[1px] border-gray-300 text-gray-500 flex gap-2 items-center'>Read More <MdOutlineArrowOutward className='text-xl' /></p>
                        </div>
                    </div>

                    <div className="md:w-1/2 w-full relative">
                        <div className='md:w-[340px] md:h-[500px]'>
                            <Image className='w-full h-full' width={400} height={800} alt='blog' src={'/images/blog2.jpg'}></Image>
                        </div>

                        <div className='bg-white p-12 absolute bottom-0 right-0 w-[400px]'>
                            <h3 className='text-sm text-gray-500'>UI Design . 02 May 2019</h3>
                            <h1 className='mt-3 text-2xl font-medium'>How to manage a talented and successful design team</h1>
                            <p className='mt-[30px] py-2 border-t-[1px] border-gray-300 text-gray-500 flex gap-2 items-center'>Read More <MdOutlineArrowOutward className='text-xl' /></p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default SectionNine_Blogs;