import React from 'react'
import { RxCross2 } from 'react-icons/rx'

export default function HeaderTop() {
  return (
    <div className='bg-black w-full h-[38px] flex justify-center items-center relative'>
{/* headertop sec  */}
<div className='flex justify-center items-center'>
    <h3 className='text-white text-xs sm:text-sm'> Sign up and get 20% off your first order.</h3>
    <button className="underline text-white text-xs sm:text-sm ml-3">Sign Up Now</button>
    
</div>

<RxCross2 className="text-white absolute right-[50px] hidden sm:block" />
    </div>
  )
}
