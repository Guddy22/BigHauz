import React from 'react'
import bighaus from '../Components/bighaus.jpg'
import {BrowserRouter, Switch, Route,Link, Routes} from "react-router-dom";




export default function Nav() {
    return (
        <nav className="flex justify-between md:flex justify-between p-4 w-full mx-auto items-center lg:bg-sky-400 w-full">
            
            <img src={bighaus} alt="Logo" className='sm:w-8 h-8 rounded-full  lg:w-32 h-16 rounded-full cursor-pointer'/>

            <div className="hidden md:block">
                <ul className="flex space-x-8">
                    <li className="cursor-pointer font-bold font-[poppins]"><Link to="/">Home</Link></li>
                    <li className="cursor-pointer font-bold font-[poppins]" href="/home#serviceList">Services</li>
                    <li className="cursor-pointer font-bold font-[poppins] "><Link to="/about">About Us</Link></li>
                    <li className="cursor-pointer font-bold font-[poppins]"><Link to="/gallery">Gallery</Link></li>
                </ul>
            </div>

            <div className="hidden md:block font-bold font-[poppins] bg-white  py-2 px-8 rounded-lg cursor-pointer hover:bg-sky-500">
            <Link to="/contact">Contact Us</Link>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" className=" h-6 w-6 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>

        </nav>
    )
}
