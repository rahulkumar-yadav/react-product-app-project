import React from 'react'

const Signup = () => {
  return (
    <div className='w-[100%] my-4 text-[#4B5665] '>
      <div className='max-w-[1024px] px-2 flex flex-col md:flex-row justify-between mx-auto w-[100%] py-4 '>
        <div className='text-[#5C6874] text-[22px] md:text-[32px] w-[100%] md:w-[calc(50%-50px)] space-y-2' >

          Sign up and get exclusive special deals
        </div>
        <form className='flex items-center ' >
          <input id="signup" placeholder='Signup' className='h-[52px] rounded-l-[12px] w-[348px] outline-none px-2 ' />
          <label for="signup" className='w-[97px]  h-[52px] rounded-r-[12px] flex justify-center items-center text-[14px] text-white bg-[#1B88F4]'>Signup</label>
        </form>
      </div>
    </div>
  )
}

export default Signup