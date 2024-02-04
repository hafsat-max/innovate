import { paragraphs } from '@/utils/data'
import Image from 'next/image'
import React from 'react'

const StatsSection = () => {
  return (
    <section className='flex max-[800px]:flex-col-reverse' >
      <div className='flex-1 pt-[96px] pl-60p bg-[url("/move-bg.png")] bg-cover bg-no-repeat bg-center flex flex-col gap-8 max-[800px]:items-center'>
        <h3 className='text-neutrals text-[38px] font-bold max-w-[350px]'>USE YOUR STATS TO MAKE MOVES</h3>
        <div className='flex flex-col gap-7'>
          {paragraphs.map((item, idx) => (<p key={idx} className='max-w-[500px] text-neutrals text-[19px]'>{item}</p>))}
        </div>

        <button className='self-start'>
                <span className='text-neutrals text-[17px]'>Try it now</span>
              </button>
      </div>

        <div className='flex-1 bg-[#111315] flex justify-center items-center max-[800px]:py-[80px]'>
        <figure className='shadow-stat-shadow bg-[#1a1d1f] w-[clamp(300px,34.9vw,558px)] h-[clamp(270px,32vw,512px)]  max-w-full flex justify-center items-center'>
          <Image width={454} height={379} src='/stat-chart.png' alt=''/>
        </figure>
      </div>
    </section>
  )
}

export default StatsSection