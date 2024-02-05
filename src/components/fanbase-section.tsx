import React from 'react'
import one from '../../public/image-one.png'
import two from '../../public/image-two.png'
import three from '../../public/image-three.png'
import four from '../../public/image-four.png'
import five from '../../public/image-five.png'
import Image from 'next/image'

const images= [one,two,three,four,five]
const FanbaseSection = () => {
  return (
    <section className='bg-dark-grey py-[60px]'>
    <section className='app-container py-[60px] bg-dark-grey flex flex-col gap-[18px] text-white  items-center '>
      <h2 className='text-center font-bold druk max-w-[660px] text-[38px] tracking-3% '>JOIN TOP ARTISTS, BUILD YOUR <span className='text-primary druk'>FANBASE</span></h2>
      <p className='text-19p text-center max-w-[500px]'>Figma files can also be downloaded from our store. These files include the latest Figma features and are synced</p>
     <div className=' flex h-[440px] pl-60p gap-[54px] max-[1050px]:h-auto max-[1050px]:flex-wrap justify-center'>
    {images.map((item,idx)=>(
      <figure  key={idx}  className={ idx%2===0?` flex flex-col self-start max-w-full`:  `flex flex-col self-end max-w-full`}>
        <Image src={item} alt="" width={220} height={220}/>
      </figure>
    ))}
     </div>
    </section>
    </section>
  )
}

export default FanbaseSection