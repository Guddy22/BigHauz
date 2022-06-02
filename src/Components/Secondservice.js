import React from 'react';
import consultation from '../Components/consultation.png'

function Secondservice() {
  return (
    <div className="text-center space-y-2 md:flex space-x-2 md:w-full  mt-5 md:text-left">
            <img src={consultation} className="w-14 h-12 mx-auto md:h-16"/>
            <div className="w-full rounded-md bg-slate-300  p-6">
                <h3 className='text-3xl font-semibold'>Consulting Services</h3>
                <p className='text-center'>
                BigHauz® is an engineering firm serving public and private clients Ghana. BigHauz® offer professional guidance to planning, design and construction administration services for potable Real Estate and Housing and water reclamation facilities, water and sanitary sewer mains, water system hydraulic modeling, elevated water storage tanks, and ground clear well water storage.
                </p>
            </div>

            <img src={consultation} className="w-14 h-12 mx-auto md:h-16"/>
            <div className="w-full rounded-md bg-slate-300  p-6">
                <h3 className='text-3xl font-semibold'>Drone Services</h3>
                <p className='text-center'>
                BigHauz® is an engineering firm serving public and private clients Ghana. BigHauz® offer professional guidance to planning, design and construction administration services for potable Real Estate and Housing and water reclamation facilities, water and sanitary sewer mains, water system hydraulic modeling, elevated water storage tanks, and ground clear well water storage.
                </p>
            </div>

            <img src={consultation} className="w-14 h-12 mx-auto md:h-16"/>
            <div className="w-full rounded-md bg-slate-300  p-6">
                <h3 className='text-3xl font-semibold'>Plumbing Works</h3>
                <p className='text-center'>
                BigHauz® is an engineering firm serving public and private clients Ghana. BigHauz® offer professional guidance to planning, design and construction administration services for potable Real Estate and Housing and water reclamation facilities, water and sanitary sewer mains, water system hydraulic modeling, elevated water storage tanks, and ground clear well water storage.
                </p>
            </div>
           
        </div>
  )
}

export default Secondservice