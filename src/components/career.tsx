import { paragraphs } from '@/utils/data'
import Image from 'next/image'
import React from 'react'

const Career = () => {
  return (
    <section className='bg-secondary px-60p py-82p flex gap-[clamp(40px,9.2vw,147px)] items-center max-[800px]:flex-col'>
      <figure className='max-w-full'>
        <Image role='img' width={557.75} height={622.37} alt='lady' src='/guys.png' />
      </figure>

      <article className='flex flex-col gap-5'>
        <h3 className='text-neutrals font-bold text-[38px] max-w-[450px] pb-[2px]'>YOUR CAREER IS IN YOUR HANDS</h3>
        <div className='flex flex-col gap-7'>
          {paragraphs.map((item, idx) => (<p key={idx} className='max-w-[500px] text-neutrals text-[19px]'>{item}</p>))}

        </div>

        <a href="#" className=' text-neutrals text-[17px]'>Try it now</a>
      </article>
    </section>
  )
}

export default Career