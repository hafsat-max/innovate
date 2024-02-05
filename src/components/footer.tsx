import { socials } from '@/utils/data'
import { ArrowRight } from 'iconsax-react'
import React from 'react'

const Footer = () => {
  return (
    <section className='bg-neutrals'>
    <footer className='flex flex-col gap-8  py-60 px-60p app-container'>

      {/* row 1 */}
      <section className='flex items-center justify-between text-white max-[800px]:flex-col max-[800px]:w-full gap-5 '>
        {/* left side */}
        <div className='flex flex-col gap-5 '>
          <h2 className=' text-21 max-w-[300px] integral leading-[25.2px] tracking-[-1%] font-bold max'>SHORT LINE ABOUT US THREE WORDS HERE</h2>
          <p className='clash text-[13px] font-medium leading-[15.99px] max-[800px]:hidden'>Short sentence here</p>
        </div>
        {/* right side */}
        <div className='flex justify-between min-w-[440px] full'>
          <h3 className='max-w-[100px] integral font-bold leading-[25.2px] tracking-[-1%] text-[21px]'>CONNECT WITH US</h3>
          <div>
            {/* social links */}
            <ul className='grid grid-cols-2 gap-y-4 justify-between min-w-[218px]'>
             {socials.map((item,index)=>(
               <li key={index}><a href="#" className='flex gap-1 items-start hover:text-primary text-white text-13 leading-15 font-medium clash '><>{item}</><ArrowRight className='transform rotate-[-45deg]' size={10}/></a></li>
             ))}
            </ul>
          </div>
        </div>
      </section>

      {/* hr line */}
      <hr className='w-full bg-hr'/>

      {/* second row */}
      <section className='flex justify-between items-center flex-wrap gap-4 self-start second w-full'>
        {/* left section */}
        <div className='flex min-w-[333px] justify-between items-center '>
          <div className='flex items-center gap-5  '>
            <h4 className='copywright'>2022</h4>
            <div className='bg-white w-1 h-1 rounded-full'/>
            <h4 className='copywright'>PLATFORM</h4>
          </div>
          <h4 className='copywright date'>2022</h4>
        </div>
        {/* right section */}
        <div className='min-w-[440px] flex justify-between items-center'>
          <h4 className='copywright'>TERMS & CONDITIONS</h4>
          <h4 className='copywright'>PRIVACY POLICY</h4>
        </div>
      </section>
    </footer>
    </section>
  )
}

export default Footer