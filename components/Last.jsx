import Link from 'next/link'
import React from 'react'

function Last() {
  return (
    <div className='py-[40px]'>
        <div className='grid-1'>
            <div className='banner'>
                <h2 className=' text-[#35087a] text-[1.5em] leading-[1.5] font-dm '>A close-knit super-active community of over 500+ founders.</h2>
                <div>
                    <div className='tick-2'>
                    Access to closed door roundtables and discussions
                    </div>
                    <div className='tick-2'>
                    Office hours with Accel & its network
                    </div>
                    <div className='tick-2'>
                    Quarterly demo days to angels & micro-vc&apos;s
                    </div>
                </div>
            </div>
            <img 
            src='https://assets-global.website-files.com/606cae0c4e05dcef785b0481/606cae0c4e05dc58775b0621_community-banner-image%20(1).png'
            alt='as'
            className=' max-h-[307px] self-end img-1'
            >
            </img>
            <Link
            href="#"
            className=' min-w-[168px] text-center flex items-center justify-center py-[12px] px-[29px] bg-[#511e9f] text-white rounded-[8px]'
            >
                Apply for access here
            </Link>
        </div>
    </div>
  )
}

export default Last