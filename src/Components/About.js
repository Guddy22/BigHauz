import React from 'react';
import thommy from '../photos/thommy.jpg'
import Timothy from'../photos/Tim.JPG'
import ImGodfred from '../photos/AIMS-G.jpeg'
import ImMannoh from '../photos/Mannoh.jpg'
import TeamMember from './TeamMember';

function About() {
  return (
    <>
        <div className='mb-24 '>
                {/* <h3 className='md:text-2xl text-center text-sky-400 mt-5 font-[Poppins]  sm:text-center'>About Us</h3> */}


           <div className='w-full mb-4 md:flex grid-cols-2 w-full'>
                <div>
                    <p className="bg-slate-200 font-[Poppins] h-50 m-9 p-14 rounded-md">At Bighauz family construction we are known all over Ghana for excellence in a diverse range of markets. Our immeasurable experience in each and every realm is steered by the breadth and depth of our competent teams, all who revel in doing their utmost best possible to meet deadlines and complete jobs for our clients.</p>
                </div>


                <div>
                      <p className='bg-slate-200 font-[Poppins] h-50 m-9 p-14 rounded-md'>
                      Pertaining to construction to office spaces, we have a team adept in construction and will be able to meet your goals. We combine an in-depth knowledge in all aspect of construction with a unique sensitivity to the function and programming of your facility while minimizing cost so you are able to finance the completion of your project.
                      </p>
                </div>

           </div>


            <div  className='mb-4 md: flex grid-cols-2 w-full'>
                <div className='w-full bg-slate-200 font-[Poppins] h-50 m-9 p-14 rounded-md'>
                    <h3 className='text-sky-500  mb-4'>Experience</h3>
                      <ol type={Number}>
                        <li>1. Mixed-Use Development</li>
                       <li>2. Government Facilities</li>
                        <li>3. Fuel Stations</li>
                        <li>4. Corporate Interior Decoration</li>
                        <li>5. Multi-Family Residential Complex</li>
                        <li>6. Parking Structures</li>
                    </ol>
                </div>


            </div>

            <div  className='w-full mb-4 md: flex grid-cols-2 w-full'>
               
                  <div className='w-full bg-slate-200 font-[Poppins] h-50 m-9 p-14 rounded-md'>
                   <h3 className='text-sky-500  mb-4 '>Education</h3>
                    <p>Whether building a whole campus from the ground or a single-floor dormitory renovation, we carefully plan and execute the logistics of every task, take a rapt approach to safety and daily communications with appropriate authorities to control cost and minimize disruptions. Our responsiveness to calls from clients after completion of projects is evident all over Ghana.</p>

                  </div>
            </div>


          
        </div>


      <div className='relative w-full'>
          <h3 className='text-3xl text-center text-sky-400 font-[poppins] mb-10'>Our Team</h3>  

          <TeamMember 
            memberName="Eng. Timothy Moses Orleans" 
            memberPosition={`CEO & Co-Founder`}  
            memberQualification="Institute of Engineering and Technology Ghana (IET): PE03139" 
            memberImage={Timothy} 
            aboutMember="Timothy is a certified building and construction engineer. 
           He is credited with pioneering mordenized buildings in Accra and CapeCoast which is widely regarded as one of the most 
           prominent inventions for the past 4 years . Regarded as the Father of mordenized buildings, He is also credited with
            developing the standard apartments around East Legon."/>

          <TeamMember 
            memberName="Eng. Timothy Moses Orleans" 
            memberPosition={`CEO & Co-Founder`}  
            memberQualification="Institute of Engineering and Technology Ghana (IET): PE03139" 
            memberImage={thommy} 
            aboutMember="Timothy is a certified building and construction engineer. 
           He is credited with pioneering mordenized buildings in Accra and CapeCoast which is widely regarded as one of the most 
           prominent inventions for the past 4 years . Regarded as the Father of mordenized buildings, He is also credited with
            developing the standard apartments around East Legon."/>

          <TeamMember 
            memberName="Eng. Timothy Moses Orleans" 
            memberPosition={`CEO & Co-Founder`}  
            memberQualification="Institute of Engineering and Technology Ghana (IET): PE03139" 
            memberImage={ImGodfred} 
            aboutMember="Timothy is a certified building and construction engineer. 
           He is credited with pioneering mordenized buildings in Accra and CapeCoast which is widely regarded as one of the most 
           prominent inventions for the past 4 years . Regarded as the Father of mordenized buildings, He is also credited with
            developing the standard apartments around East Legon."/>

        <TeamMember 
            memberName="Eng. Timothy Moses Orleans" 
            memberPosition={`CEO & Co-Founder`}  
            memberQualification="Institute of Engineering and Technology Ghana (IET): PE03139" 
            memberImage={ImMannoh} 
            aboutMember="Timothy is a certified building and construction engineer. 
           He is credited with pioneering mordenized buildings in Accra and CapeCoast which is widely regarded as one of the most 
           prominent inventions for the past 4 years . Regarded as the Father of mordenized buildings, He is also credited with
            developing the standard apartments around East Legon."/>


      </div>

        

</>

  )
}

export default About