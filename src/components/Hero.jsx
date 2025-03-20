import React from 'react'
import hero from '../assets/hero_banner.jpg'
import heroTitle from '../assets/hero_title.png'
import palyIcon from '../assets/play_icon.png'
import infoIcon from '../assets/info_icon.png'
const Hero = () => {
  return (
    <div className='relative'>
        <img src={hero} alt="" className=' w-full h-dvh banner' />
        <div className='absolute  bottom-0 left-15'>
          <img src={heroTitle} alt="" className='max-w-[420px] w-[90%] mb-3'/>
          <p className='max-w-[700px] text-[17px] mb-2'>Discovering his ties to a secret ancient order, a young man living in modern Instanbul embarks on a quest to save the city from an immortal enemy.</p>
          <div className='flex gap-4 mb-4 mt-4'>
            <button className='inline-flex gap-1 items-center bg-gray-200 rounded-[4px] text-black font-semibold border-none outline-none py-[8px] px-[20px] cursor-pointer hover:bg-[#6d6d6e66] duration-500'><img src={palyIcon} alt="" className='w-[25px]'/>Play</button>
            <button className='inline-flex gap-1 items-center bg-gray-400 rounded-[4px]  font-semibold border-none outline-none py-[8px] px-[20px] cursor-pointer hover:bg-[#6d6d6e66] duration-500'><img src={infoIcon} alt="" className='w-[25px]'/>More Info</button>
          </div>
        </div>
    </div>
  )
}

export default Hero