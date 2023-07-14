import React from 'react'


function Stat() {
  return (
    <div className="md:flex grid grid-cols-2 justify-between mx-auto items-stretch w-full h-full">
  
       
                <div  className=" leading-[1] font-inter text-[#200051] text-[12px] md:text-[1rem]  my-[12px] h-full">
                    <h1 className=" font-dm text-[#f0485c] md:text-[3rem] text-[1.5rem]">1000+ connections</h1>
                   <br/> made for our founder
                </div>
                <div className='w-[2px] hidden md:block h-[100px]  bg-lined'/>
                <div  className=" leading-[1] font-inter text-[#200051] text-[12px] md:text-[1rem]  my-[12px] h-full">
                    <h1 className=" font-dm text-[#f0485c] md:text-[3rem] text-[1.5rem]">$10M+ Raised</h1>
                   <br/> by SeedToScale startups
                </div>
                <div className='w-[2px] h-[100px] hidden md:block bg-lined'/>
                <div  className=" leading-[1] font-inter text-[#200051] text-[12px] md:text-[1rem]  my-[12px] h-full">
                    <h1 className=" font-dm text-[#f0485c] md:text-[3rem] text-[1.5rem]">100+ startups</h1>
                   <br/> in the community
                </div>
   
    </div>
  )
}

export default Stat