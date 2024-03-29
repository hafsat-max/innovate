import React from 'react'
import Navbar from '../navbar'
import Image from 'next/image'
import { ArrowRight } from 'iconsax-react'

const HeroSection = () => {
  return (
    <section className=' bg-neutrals'>
    <section className='hero flex flex-col gap-[78px] app-container pb-20'>
      <Navbar/>
      <section className='flex justify-between '>
          <div className='flex flex-col px-[clamp(20px,3.75vw,60px)] gap-4'> 
            <h1 className='max-w-[700px] font-bold text-white text-54p tracking-5% leading-76px druk'>AN INNOVATIVE PLATFORM THAT</h1>
            <div className='flex gap-5'>
              <div className='flex flex-col gap-[10px]'>
              <h1 className='max-w-[300px] font-bold text-primary text-54p tracking-5% leading-76px druk'>SUPPORTS ARTISTS.</h1>
              <p className='max-w-[500px] text-[19px] text-white'>Figma files can also be downloaded from our store. These files include the latest Figma features and are </p>
              <button className='flex items-center gap-3 self-start'>
                <span className='text-primary text-[17px]'>Try it now</span>
                <ArrowRight size={24} color='#E1F16B'/>
              </button>
              </div>

              {/* image */}
              <figure className='max-w-full max-[1000px]:hidden '>
                <Image role='img' width={376} height={476} alt='lady' src='/lady.png'/>
              </figure>
            </div>
          </div>

          <figure className='max-w-full max-[800px]:hidden'>
          <Image role='img' width={376} height={476} alt='lady' src='/man.png'/>
          </figure>
      </section>
    </section>
    </section>
  )
}

export default HeroSection