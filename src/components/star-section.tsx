import React from 'react'

const StarSection = () => {
  return (
    <section className='h-[608px] bg-[url("/star.png")] bg-no-repeat bg-cover bg-center pb-6 px-60p flex  items-end justify-between '>
      <div className='flex flex-col gap-[60px]'>
        <h3 className='text-white font-bold text-4xl max-w-[400px]'>WE HELP ARTISTS FIND THEIR FANS</h3>
        <p className='max-w-[410px] text-[#6F767E]'>Figma files can also be downloaded from our store. These files include the latest Figma features and are synced </p>
      </div>
    </section>
  )
}

export default StarSection