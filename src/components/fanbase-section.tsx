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
    <section className='py-[60px] bg-[#101214] flex text-white  items-center '>
     <div className=' flex h-[440px] pl-60p gap-[54px] max-[1050px]:h-auto max-[1050px]:flex-wrap'>
    {images.map((item,idx)=>(
      <figure  key={idx}  className={ idx%2===0?` flex flex-col self-start max-w-full`:  `flex flex-col self-end max-w-full`}>
        <Image src={item.src} alt="" width={220} height={220}/>
      </figure>
    ))}
     </div>
    </section>
  )
}

export default FanbaseSection