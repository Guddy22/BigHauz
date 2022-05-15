import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import CarouselCaption from './CarouselContent';
import SectionHeader from './SectionHeader';
import CarouselContent from './CarouselContent';

import restate from "../photos/rs.jpg"
import constr from "../photos/construction.jpg"


export default function Carousel() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplat:true
      };

    return (
            <Slider {...settings}>
                 <CarouselContent image={restate} mainText="Real Estate" description="Helping you get your dream homes. A place we call home" />
                 <CarouselContent image={constr} mainText="Construction" description="We are the builders builders. Just Dream it, we'll build it"/>
            </Slider>
    )
}



