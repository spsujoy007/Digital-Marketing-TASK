import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <section className='bg-[#121212]'>
            <div className='flex flex-col md:flex-row'>
                <div className='md:w-[40%] flex flex-col md:flex-row items-center'>
                    <div className='md:w-[80%] p-14'>
                        <Image width={100} height={50} alt='logo' src={'/images/logo-white.png'}></Image>
                        <p className='text-gray-400 w-[310px] mt-5'>When do they work well, and when do they on us and finally, when do we actually need how can we avoid them.</p>
                    </div>

                    <div className='border-l-[1px] border-r-[1px] border-[#1f1f1f] md:flex flex-col mx-8 md:px-0'>
                        <button className='text-white border-y-[1px] w-full md:w-auto border-[#1f1f1f] hover:bg-white hover:text-black hover:border-white duration-150 uppercase p-10'>Facebook</button>
                        <button className='text-white border-b-[1px] w-full md:w-auto border-[#1f1f1f] hover:bg-white hover:text-black hover:border-white duration-150 uppercase p-10'>Twitter</button>
                        <button className='text-white border-b-[1px] w-full md:w-auto border-[#1f1f1f] hover:bg-white hover:text-black hover:border-white duration-150 uppercase p-10'>Linkedin</button>
                        <button className='text-white  hover:bg-white hover:text-black duration-150 uppercase p-10 w-full md:w-auto'>Instagram</button>
                    </div>
                </div>
                <div className='md:w-[60%]'>
                    <h1 className='text-[8vw] md:text-right text-center mt-5 md:mr-16 text-white uppercase'>Let's talk</h1>
                </div>
            </div>

            <div className='text-white md:p-14 p-2 border-t-[1px] border-[#1f1f1f] flex flex-col-reverse md:flex-row justify-between'>
                <h5 className='md:text-left text-center pb-4 md:pb-0'>© 2022 - 2025 | Alrights reserved by Wealcoder</h5>

                <div className='flex md:block justify-center mb-5 md:mb-0'>
                    <ul className='text-white flex mt-10 md:mt-0 md:gap-x-16 gap-x-3 uppercase text-lg'>
                        <Link href={'/'} className='cursor-pointer'>About us</Link>
                        <Link href={'/'} className='cursor-pointer'>Contact</Link>
                        <Link href={'/'} className='cursor-pointer'>Career</Link>
                        <Link href={'/'} className='cursor-pointer'>Faqs</Link>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Footer;