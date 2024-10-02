"use client"
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { CarouselList } from '@/constants'
import Image from 'next/image'
import Autoplay from "embla-carousel-autoplay"


const Hero = () => {
  return (
    <div >
  <Carousel

    plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}

  opts={{
    align:"start",
    loop:true,
  }}


  >
  <CarouselContent>

    {
        CarouselList.map((slider,index)=>(
     <CarouselItem className='basis-1/2' key={index}>

        <Image alt='' src={slider.image} width={1920} height={1080} className='h-96 object-cover md:h-[450px]'/>
     </CarouselItem>

     

        ))
    }
   

  </CarouselContent>
  <CarouselPrevious className='left-1 bg-black text-white' />
  <CarouselNext className='right-1 bg-black text-white' />
</Carousel>
    </div>
  )
}

export default Hero
