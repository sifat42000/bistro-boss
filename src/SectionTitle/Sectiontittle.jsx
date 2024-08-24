import React from 'react';

const Sectiontittle = ({heading,subHeading}) => {
    return (
        <div className='mb-16 text-center'>
            <p className='text-yellow-700 '>---{subHeading}---</p>
            <h3 className='text-3xl uppercase'>{heading}</h3>
            
        </div>
    );
};

export default Sectiontittle;