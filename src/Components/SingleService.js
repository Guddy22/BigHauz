import React from 'react'
import bricks from "../rIcons/brickwall.png"

export default function SingleService() {
    return (
        <div className="text-center space-y-2 md:flex space-x-2 md:w-1/3 md:text-left">
            <img src={bricks} className="w-14 h-12 mx-auto md:h-16"/>
            <div className="w-full p-2">
                <h3>Road Block</h3>
                <p>
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups
                </p>
            </div>
           
        </div>
    )
}
