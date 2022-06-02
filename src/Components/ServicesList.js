import React from 'react';
import Services from './Services';
import SingleService from './SingleService';

import electrical from '../Components/electrical.png'
import bricks from "../rIcons/brickwall.png"
import consultation from '../Components/consultation.png'



export default function ServicesList() {
    return (
    
        <div className="testimonial-1 py-4 md:py-12">
        <div className="container mx-auto px-4">
            <div className="md:flex md:flex-wrap md:-mx-4 mb-4">

            <SingleService 
                serviceName="Construction" 
                serviceDescription="FWR Bootstrap Blocks is exactly what our business has been lacking. 
                FWR Bootstrap Blocks is both attractive and highly adaptable. 
                Man, this thing is getting better and better as I learn more about it." 
                serviceLogo={electrical}
            />

            <SingleService 
                serviceName="Repairs" 
                serviceDescription="FWR Bootstrap Blocks is exactly what our business has been lacking. 
                FWR Bootstrap Blocks is both attractive and highly adaptable. 
                Man, this thing is getting better and better as I learn more about it." 
                serviceLogo={bricks}
            />

            <SingleService 
                serviceName="Repairs" 
                serviceDescription="FWR Bootstrap Blocks is exactly what our business has been lacking. 
                FWR Bootstrap Blocks is both attractive and highly adaptable. 
                Man, this thing is getting better and better as I learn more about it." 
                serviceLogo={consultation}
            />

            <SingleService 
                serviceName="Construction" 
                serviceDescription="FWR Bootstrap Blocks is exactly what our business has been lacking. 
                FWR Bootstrap Blocks is both attractive and highly adaptable. 
                Man, this thing is getting better and better as I learn more about it." 
                serviceLogo={electrical}
            />

            <SingleService 
                serviceName="Repairs" 
                serviceDescription="FWR Bootstrap Blocks is exactly what our business has been lacking. 
                FWR Bootstrap Blocks is both attractive and highly adaptable. 
                Man, this thing is getting better and better as I learn more about it." 
                serviceLogo={bricks}
            />

            <SingleService 
                serviceName="Repairs" 
                serviceDescription="FWR Bootstrap Blocks is exactly what our business has been lacking. 
                FWR Bootstrap Blocks is both attractive and highly adaptable. 
                Man, this thing is getting better and better as I learn more about it." 
                serviceLogo={consultation}
            />

            </div>
        </div>
    </div>
    )
}
