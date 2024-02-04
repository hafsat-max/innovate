import React from 'react'
import Navbar from '../navbar'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className='hero flex flex-col gap-[78px]'>
      <Navbar/>
      <section className='flex justify-between'>
          <div className='flex flex-col px-[clamp(20px,3.75vw,60px)]'> 
            <h1 className='max-w-[600px] font-bold text-white text-54p tracking-5% leading-76px'>AN INNOVATIVE PLATFORM THAT</h1>
            <div className='flex'>
              <div className='flex flex-col gap-[10px]'>
              <h1 className='max-w-[300px] font-bold text-primary text-54p tracking-5% leading-76px'>SUPPORTS ARTISTS.</h1>
              <p className='max-w-[500px] text-[19px] text-white'>Figma files can also be downloaded from our store. These files include the latest Figma features and are </p>
              <button className='self-start'>
                <span className='text-primary text-[17px]'>Try it now</span>
                
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
  )
}

export default HeroSection