import React from 'react'
import Card from './contentHub/Card'
import Link from 'next/link'

const data = [
    {
        id: 1,
        img1:"https://assets-global.website-files.com/606cae0c4e05dc45295b04a7/60ede1087e04a9175d2b940c_WVh-6aEUjPc-HD-p-800.jpeg",
        img2:"https://assets-global.website-files.com/606cae0c4e05dcef785b0481/60be59f5a47e038306ebd0c7_video-white-icon.png",
        role:"video",
        desc:" An interview with Dr Amit Jotwani, founder of Onco, on the pandemic’s second wave and how we can protect ourselves"
      },
      {
        id:2,
        img1:"https://assets-global.website-files.com/606cae0c4e05dc45295b04a7/60ede10b197e539324279953_gLZhomNeQgI-HD-p-800.jpeg",
        img2:"https://assets-global.website-files.com/606cae0c4e05dcef785b0481/60be59f5a47e038306ebd0c7_video-white-icon.png",
        role:"video",
        desc:"The State of the VC Ecosystem amidst the COVID-19 Crisis"
      },
      {
        id:3,
        img1:"https://assets-global.website-files.com/606cae0c4e05dc45295b04a7/60ede10f9f9e536d2e17fabf_qG3u-PChi6U-HD-p-800.jpeg",
        img2:"https://assets-global.website-files.com/606cae0c4e05dcef785b0481/60be59f5a47e038306ebd0c7_video-white-icon.png",
        role:"video",
        desc:"How are Startups dealing with the COVID-19 situation?"
      }
]

function TopContent() {
  return (
    <>
          <div className='w-full h-full grid md:grid-cols-3 grid-cols-1  gap-0 gap-x-[24px] gap-y-[40px]'>
    {
      data.map((item,index)=>{
        return(
          <Card key={index} item={item}/>
        )
      })
    }
    </div>
    <div className=" mt-[2rem] mb-[8px] flex justify-center">
            <Link
            className="h-[52px] w-auto text-[#511e9f] flex items-center "
            href='#'
            >
                view Our Youtube channel
                <img 
                src="https://assets-global.website-files.com/606cae0c4e05dcef785b0481/606cae0c4e05dc84ec5b04be_arrow-purple.svg"
                className="w-[13px] h-[13px] ml-2"
                alt="as"
                />
            </Link>
          </div>
    </>
  )
}

export default TopContent