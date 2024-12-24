import React from 'react';

const Container = ({children}) => {
    return (
        <div className='md:w-[70%] w-[95%] mx-auto'>
            {children}
        </div>
    );
};

export default Container;