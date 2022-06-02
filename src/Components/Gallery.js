import React from 'react'

function Gallery() {
    return (
<div id="carouselExampleCaptions" className="carousel slide relative" dataBsRide="carousel">
  <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      dataBsTarget="#carouselExampleCaptions"
      dataBsSlideTo="0"
      className="active"
      ariaCurrent="true"
      ariaLabel="Slide 1"
    ></button>
    <button
      type="button"
      dataBsTarget="#carouselExampleCaptions"
      dataBsSlideTo="1"
      ariaLabel="Slide 2"
    ></button>
    <button
      type="button"
      dataBsTarget="#carouselExampleCaptions"
      dataBsSlideTo="2"
      ariaLabel="Slide 3"
    ></button>
  </div>
  <div className="carousel-inner relative w-full overflow-hidden">
    <div className="carousel-item active relative float-left w-full">
      <div className="relative overflow-hidden bg-no-repeat bg-cover" style={{backgroundPosition: '50%'}}>
        <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(123).jpg" className="block w-full" />
        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-50"></div>
      </div>
      <div className="carousel-caption hidden md:block absolute text-center">
        <h5 className="text-xl">First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item relative float-left w-full">
      <div className="relative overflow-hidden bg-no-repeat bg-cover" style={{backgroundPosition: '50%'}}>
        <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(124).jpg" className="block w-full" />
        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-50"></div>
      </div>
      <div className="carousel-caption hidden md:block absolute text-center">
        <h5 className="text-xl">Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item relative float-left w-full">
      <div className="relative overflow-hidden bg-no-repeat bg-cover" style={{backgroundPosition: '50%'}}>
        <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(125).jpg" className="block w-full" />
        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-50"></div>
      </div>
      <div className="carousel-caption hidden md:block absolute text-center">
        <h5 className="text-xl">Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button
    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    dataBsTarget="#carouselExampleCaptions"
    dataBsSlide="prev"
  >
    <span className="carousel-control-prev-icon inline-block bg-no-repeat" ariaHidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    dataBsTarget="#carouselExampleCaptions"
    dataBsSlide="next"
  >
    <span className="carousel-control-next-icon inline-block bg-no-repeat" ariaHidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    )
}

export default Gallery
