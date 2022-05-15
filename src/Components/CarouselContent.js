import React from 'react'

export default function CarouselContent({image, mainText, description}) {
    return (
        <div className="md:bg-cover bg-center" style={{maxWidth:'100%',backgroundImage: `url(${image})`}}>
            <div className="flex flex-col text-center space-y-4 justify-center items-center bg-gray-400 bg-opacity-75" style={{height:'40rem'}}>
                <h3 className="text-5xl font-[poppins] font-extrabold">{mainText}</h3>    
                <p className="text-3xl font-[poppins] font-extrabold">{description}</p>
                <button className="bg-orange-400 p-4 rounded-lg font-extrabold font-[poppins] font-extrabold">View Gallery</button>
            </div>
        </div>
    )
}
