import { data } from 'autoprefixer'
import Link from 'next/link'
import React from 'react'



const item = [
    {
        decs:"If I ever get successful with my startup, I will give a hell lot of the credit to founder stack for helping me take the right decision in my journey",
        img:"https://assets-global.website-files.com/606cae0c4e05dc45295b04a7/60eddb598a79acfc4300e6d7_1556911493295-removebg-preview.png",
        name:"Aquibur",
        role:"CEO, Mailmodo"
    }
]


function Card({item}){
        return(
            <>
               <div className=' max-w-[370px] w-full bg-white p-[1.75rem] text-[0.75rem] font-inter'>
                    <p className=''>
                        {item.decs}
                    </p>
               </div>
            </>
        )
}



function Testimoinals() {
  return (
    <div className="w-full max-w-[1240px] mx-auto md:px-[20px] px-4 flex ">
        <div className=" w-[40%] flex flex-col items-start">
          <div className=" uppercase text-[#15948e] text-left mb-[12px] text-[0.875em] font-[700] font-inter">
            Testimonials
          </div>
          <h2 className=" text-left mb-[12px] text-[2rem] font-dm font-[400] leading-[1.5] ">
          Trusted by thousands
          <br/>
          of entrepreneurs 
          <br/>
          across the globe
          </h2>
          <p className=" text-[1em] leading-[1.7] text-[#200051] font-inter">
          Since itacross the globes launch SeedToScale has received tons of love from startup founders and entrepreneurs from around the globe looking to buy or sell a startup without any of the traditional hassles.
          </p>
          <Link
          href="#"
          className=" text-[14px] text-center mt-[1.5rem] min-w-[168px] bg-[#511e9f] text-white rounded-[8px] py-[12px] px-[29px] flex items-center justify-center"
          >
            Read all 
            <img 
            src="https://assets-global.website-files.com/606cae0c4e05dcef785b0481/606cae0c4e05dc15645b04aa_arrow-white.svg"
            alt="as"
            className="w-[13px] ml-[1rem]"
            />
          </Link>
        </div>
        {/*  */}
        <div className="w-[50%] bg-red-700  h-full absolute  top-0 bottom-0 left-auto right-0 overflow-hidden ">
            <div className='grid grid-cols-2 gap-2'>
                    {
                        item.map((item,index)=>{
                            return(
                                <Card item={item} key={index}/>
                            )
                        })
                    }
            </div>
        </div>
      </div>
  )
}

export default Testimoinals