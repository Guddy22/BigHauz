import React from 'react'

export default function SingleService({serviceLogo, serviceName, serviceDescription}) {
    return (
        <div className="md:w-1/3 md:px-4 mt-6">
        <div className="testimonial p-6 border-2 border-solid flex hover:border-indigo-400 hover:bg-indigo-100 transition-colors duration-300">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mr-4 md:mr-6 flex-shrink-0">
            <img src={serviceLogo} alt="profile image" className="w-full h-full object-cover"/>
        </div>
        <div>
            <h4>{serviceName}</h4>
            <p className="text-gray-600">{serviceDescription}</p>
            
        </div>
        </div>
    </div>

    )
}
