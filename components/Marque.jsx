import React from 'react'

import Marquee from "react-marquee-slider";

const images = [
    "/logo/1.svg",
    "/logo/2.svg",
    "/logo/3.svg",
    "/logo/4.svg",
    "/logo/5.svg",
    "/logo/6.svg",
    "/logo/7.svg",
    "/logo/8.svg",
    "/logo/9.svg",
    "/logo/10.svg",
    "/logo/11.svg",
    "/logo/12.svg",
    "/logo/13.svg",
    "/logo/14.svg",
    "/logo/15.svg",
    "/logo/16.svg",
]

const images1 = images.slice(0,7)
const images2 = images.slice(7,images.length)

function Marque() {
  return (
   <div className='flex flex-col'>
     <div className=" flex justify-evenly items-center">
      <Marquee velocity={25}>
        {images1.map((image, i) => (
          <div key={i} className='md:w-[60px] w-[45px] h-[45px] md:h-[60px] rounded-[50%] mx-4 relative object-cover flex  bg-no-repeat items-center justify-center bg-white'>
          <img key={i} src={image} alt="logo" className=" md:w-[50%] w-[30%] absolute left-4 " />
          </div>
        ))}
      </Marquee>
    </div>
    <div className=" flex mt-4 justify-evenly items-center">
      <Marquee velocity={25}>
        {images2.map((image, i) => (
          <div key={i} className='md:w-[60px] w-[45px] h-[45px] md:h-[60px] rounded-[50%] mx-4 relative object-cover flex  bg-no-repeat items-center justify-center bg-white'>
          <img key={i} src={image} alt="logo" className=" md:w-[50%] w-[30%] absolute left-4  " />
          </div>
        ))}
      </Marquee>
    </div>
   </div>
  )
}

export default Marque