import React from 'react'
import SingleService from './SingleService'

export default function ServicesList() {
    return (
        <div className="md:flex justify-between w-3/4 mx-auto">
            <SingleService />
            <SingleService />
            <SingleService />
        </div>
    )
}
