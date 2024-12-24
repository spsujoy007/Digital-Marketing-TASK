import React from 'react';
import Container from '../Common/Container';
import Image from 'next/image';
const com1  = '/images/com1.png';

const SectionTwo_workWith = () => {
    return (
        <div className='my-[150px]'>
            <Container>
                <p className='text-xl uppercase text-center text-black'>We worked with global largest brands</p>
                
                <div className='md:flex flex-wrap lg:grid grid-cols-6 items-center mt-[75px] gap-[150px] w-full '>
                    <Image className='' width={150} height={40} alt='company logo' src={'https://res.cloudinary.com/cloudinarybysp/image/upload/v1735022985/JOB%20TASK/k0fz8ifph2zis0gbdecp.png'}></Image>
                    <Image className='' width={150} height={40} alt='company logo' src={'https://res.cloudinary.com/cloudinarybysp/image/upload/v1735022985/JOB%20TASK/vtgfrhbbtxnz83ex09ba.png'}></Image>
                    <Image className='' width={150} height={40} alt='company logo' src={'https://res.cloudinary.com/cloudinarybysp/image/upload/v1735022985/JOB%20TASK/nrhi6e9fsvxufxdnvkio.png'}></Image>
                    <Image className='' width={150} height={40} alt='company logo' src={'https://res.cloudinary.com/cloudinarybysp/image/upload/v1735022985/JOB%20TASK/lvsawr8qk8lbpcggncwa.png'}></Image>
                    <Image className='' width={150} height={40} alt='company logo' src={'https://res.cloudinary.com/cloudinarybysp/image/upload/v1735022986/JOB%20TASK/yyxlphjcoivonql5fnh3.png'}></Image>
                    <Image className='' width={150} height={40} alt='company logo' src={'https://res.cloudinary.com/cloudinarybysp/image/upload/v1735022986/JOB%20TASK/xpztnyi0ehibflls7nh3.png'}></Image>
                </div>
            </Container>
        </div>
    );
};

export default SectionTwo_workWith;