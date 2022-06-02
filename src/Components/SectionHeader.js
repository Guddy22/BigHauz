import React from 'react';
import './SectionHeader.css';

function SectionHeader({title, description}) {
  return (
        <div className=' mt-2 text-center md:mt-4 text-center mt-4' id="serviceList">
            <h1 className='mb-2 text-4xl font-bold md:text-4xl mt-8 font-bold font-[poppins]'>{title}</h1>
            <p className='p-4 md:p-4 font-[Montserrat]'>{description}</p>
        </div>
    );
}

export default SectionHeader;
