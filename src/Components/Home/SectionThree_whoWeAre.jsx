import React from 'react';
import Container from '../Common/Container';
import Image from 'next/image';

const SectionThree_whoWeAre = () => {
    return (
        <div className='py-[142px] bg-[#121212]'>
            <Container>
                <div className='flex gap-[114px] '>
                    <div className='w-[50%]'>
                        <div style={{
                            backgroundImage: "url('/images/whowe.jpg')",
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'top center',
                            height: '772px',
                            width: '500px',
                            objectFit: 'cover',
                            marginLeft: '50px',
                            backgroundAttachment: 'fixed',
                        }} className=''>
                        </div>
                    </div>
                    <div className='text-white w-[50%] pt-[50px]'>
                        <p>Who We Are</p>
                        <h1 className='text-[55px] leading-[60px] uppercase font-medium'>We are leading <br /> digital marketing <br /> agency.</h1>
                        <p className='mt-[60px] ml-[155px] w-[380px] text-gray-400'>We're a team of strategic mdigital marketing working globally with largest brands, We believe that progress only happens when you refused to play things safe. We combine ideas and behaviors, and insights with design, technological data to produce brand experiences that customers love our services.</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default SectionThree_whoWeAre;