import React from 'react'
import Carousel from './Carousel'
import ServicesList from './ServicesList'
import Nav from './Nav';
import SectionHeader from './SectionHeader';

export default function Home() {
  return (
    <div>
        <Carousel />
        <SectionHeader title="Our Services" />
        <ServicesList />
    </div>
  )
}
