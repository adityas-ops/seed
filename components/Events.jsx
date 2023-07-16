import React from 'react'

function Events() {
  return (
    <div>
        <div className="w-full h-full md:grid flex flex-row overflow-x-scroll md:grid-cols-3 grid-cols-1  gap-0 gap-x-[24px] gap-y-[40px]">
        <div className=' box-border min-w-[320px] md:w-full relative shadow-1 mb-2 overflow-hidden font-inter rounded-[16px]'>
                <div className='flex flex-col pb-[1.5rem] relative '>
                    <img
                    src='https://assets-global.website-files.com/64a3cb16fecf28d343d6921f/64a3cb28fd3c8f9b2753504a_image19.jpeg'
                    alt='as'
                    className='w-full h-[200px] object-cover'
                    />
                    <div className=' min-h-[170px] h-full justify-between px-[1.5rem] pt-[1.5rem] flex flex-col'>
                        <div className='mb-[12px] font-[600]'>
                        Atque
                        </div>
                        <div >
                            <div className='flex items-center'>
                                {/* <img
                                src='https://assets-global.website-files.com/606cae0c4e05dc45295b04a7/606cae0c4e05dc5f935b0971_5f2e466202d66d5fabd68666_0%2520(3).jpeg'
                                className='w-[32px] h-[32px] mr-[12px] rounded-[50%]'
                                alt='as'
                                /> */}
                                <div className=' text-[.875em] text-[#200051]'>
                                By&nbsp;
                                </div>
                                <div className='text-[.875em] text-[#200051]'>
                                {/* Barath Shankar Subramanian */}
                                </div>
                            </div>
                            <div className=' mt-[1rem]'>
                                <div className='flex items-center '>
                                    <img 
                                    src='https://assets-global.website-files.com/606cae0c4e05dcef785b0481/606cae0c4e05dc59815b04f0_calendar-icon.svg'
                                    alt='as'
                                    className='p-[4px] '
                                    />
                                    <div className='ml-3'>
                                        <div className='text-[0.875em] text-[#200051]'>
                                        June 7, 2024
                                        </div>
                                        <div className=' whitespace-nowrap flex items-center text-[0.875em] text-[#828282]'>
                                            11:47pm - 06:30am
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' absolute bottom-[1.5rem] left-auto right-[1.5rem] min-w-[70px] w-[50%]  z-30 bg-[#fff] rounded-[8px] text-[#511e9f] border border-zinc-300 flex items-center justify-center py-[10px] px-[16px] '>
                        RSVP
                    </div>
                </div>
            </div>
            <div className=' box-border relative shadow-1 mb-2 overflow-hidden font-inter rounded-[16px] min-w-[320px]  md:w-full'>
                <div className='flex flex-col pb-[1.5rem] relative'>
                    <img
                    src='https://assets-global.website-files.com/64a3d53b212f505d82cad4a6/64a3d542fd3c8f9b2763abdd_image16.jpeg'
                    alt='as'
                    className='w-full h-[200px] object-cover'
                    />
                    <div className=' min-h-[170px] h-full justify-between px-[1.5rem] pt-[1.5rem] flex flex-col'>
                        <div className='mb-[12px] font-[600]'>
                        Voluptate Esse Dolor Facere
                        </div>
                        <div >
                            <div className='flex items-center'>
                                <img
                                src='https://assets-global.website-files.com/606cae0c4e05dc45295b04a7/606cae0c4e05dc5f935b0971_5f2e466202d66d5fabd68666_0%2520(3).jpeg'
                                className='w-[32px] h-[32px] mr-[12px] rounded-[50%]'
                                alt='as'
                                />
                                <div className=' text-[.875em] text-[#200051]'>
                                By&nbsp;
                                </div>
                                <div className='text-[.875em] text-[#200051]'>
                                Barath Shankar Subramanian
                                </div>
                            </div>
                            <div className=' mt-[1rem]'>
                                <div className='flex items-center '>
                                    <img 
                                    src='https://assets-global.website-files.com/606cae0c4e05dcef785b0481/606cae0c4e05dc59815b04f0_calendar-icon.svg'
                                    alt='as'
                                    className='p-[4px] '
                                    />
                                    <div className='ml-3'>
                                        <div className='text-[0.875em] text-[#200051]'>
                                        Feb 26, 2024
                                        </div>
                                        <div className=' whitespace-nowrap flex items-center text-[0.875em] text-[#828282]'>
                                            11:03am - 12:30pm
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' absolute bottom-[1.5rem] left-auto right-[1.5rem] min-w-[70px] w-[50%]  z-30 bg-[#fff] rounded-[8px] text-[#511e9f] border border-zinc-300 flex items-center justify-center py-[10px] px-[16px] '>
                        RSVP
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Events