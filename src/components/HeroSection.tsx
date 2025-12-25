import { Button } from "./ui/moving-border";
import { Spotlight } from "./ui/spotlight";
import Link from 'next/link'
import React from 'react'

function HeroSection() {
  return (
    <div className='w-full rounded-md realtive overflow-hidden mx-auto flex flex-col justify-center items-center h-auto md:h-[40rem] py-10 md:py-0'>
    <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />  
    <div className='relative z-10 w-full p-4 text-center '>
      
      <h1 className='text-4xl md:text-7xl mt-20 md:mt-0 text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 from-neutral-400 font-bold'>Master the art of Music</h1>
      <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>Discover professional music courses designed for beginners, intermediate, and advanced learners. Whether you want to play an instrument, improve your vocals, or understand music theory, our courses help you turn passion into skill.</p>
      <div className='mt-4'>
        <Link href={'/courses'}>
        <Button>Explore Courses</Button>
        </Link>
      </div>
    </div> 
    </div>
  )
}

export default HeroSection