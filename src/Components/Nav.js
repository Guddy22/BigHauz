import React from 'react'

export default function Nav() {
    return (
        <nav className="flex justify-between md:flex justify-between p-4 w-3/4 mx-auto items-center">
            
            <div className="cursor-pointer">Logo</div>

            <div className="hidden md:block">
                <ul className="flex space-x-8">
                    <li className="cursor-pointer font-bold font-[poppins]">Home</li>
                    <li className="cursor-pointer font-bold font-[poppins]">Services</li>
                    <li className="cursor-pointer font-bold font-[poppins]">About Us</li>
                    <li className="cursor-pointer font-bold font-[poppins]">Gallery</li>
                </ul>
            </div>

            <div className="hidden md:block font-bold font-[poppins] bg-orange-400 p-2 rounded-lg cursor-pointer">
                Contact Us
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" className=" h-6 w-6 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>

        </nav>
    )
}
