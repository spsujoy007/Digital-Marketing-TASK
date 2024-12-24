import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <section className='bg-[#121212]'>
            <div className='flex'>
                <div className='w-[40%] flex items-center'>
                    <div className='md:w-[80%] p-14'>
                        <Image width={100} height={50} alt='logo' src={'/images/logo-white.png'}></Image>
                        <p className='text-gray-400 w-[310px] mt-5'>When do they work well, and when do they on us and finally, when do we actually need how can we avoid them.</p>
                    </div>

                    <div className='border-l-[1px] border-r-[1px] border-[#1f1f1f] flex flex-col'>
                        <button className='text-white border-y-[1px] border-[#1f1f1f] hover:bg-white hover:text-black hover:border-white duration-150 uppercase p-10'>Facebook</button>
                        <button className='text-white border-b-[1px] border-[#1f1f1f] hover:bg-white hover:text-black hover:border-white duration-150 uppercase p-10'>Twitter</button>
                        <button className='text-white border-b-[1px] border-[#1f1f1f] hover:bg-white hover:text-black hover:border-white duration-150 uppercase p-10'>Linkedin</button>
                        <button className='text-white  hover:bg-white hover:text-black duration-150 uppercase p-10'>Instagram</button>
                    </div>
                </div>
                <div className='w-[60%]'>
                    <h1 className='text-[8vw] text-right mt-5 mr-16 text-white uppercase'>Let's talk</h1>
                </div>
            </div>

            <div className='text-white p-14 border-t-[1px] border-[#1f1f1f] flex justify-between'>
                <h5>© 2022 - 2025 | Alrights reserved by Wealcoder</h5>

                <div>
                    <ul className='text-white flex gap-x-16 uppercase text-lg'>
                        <li>About us</li>
                        <li>Contact</li>
                        <li>Career</li>
                        <li>Faqs</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Footer;