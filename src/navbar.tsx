import React from 'react'

function Navbar() {
  return (
    <nav className='px-[clamp(20px,3.75vw,60px)] py-6 flex  justify-between items-center w-full '>
      <h2 className='!text-primary text-[21px] font-bold'>LOGO</h2>

      <ul className='flex items-center justify-between text-white gap-80px max-[500px]:hidden'>
        <li className='text'>Features</li>
        <li>News</li>
      </ul>

      <div className='flex items-center gap-4 max-[600px]:hidden'>
        <button className='border border-[#E1F16B] font-medium py-[10px] px-6 leading-20px text-primary'>Sign up</button>
        <button className='bg-primary font-medium leading-20px py-[10px] px-6 
        '>Log in</button>
      </div>
      <p className='min-[600px]:hidden'>X</p>
    </nav>
  )
}

export default Navbar