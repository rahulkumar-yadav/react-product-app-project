import React from 'react'

import { footerCategory } from '../Assests/text'
import { footerContact } from '../Assests/text'

const Footer = () => {
    return (
        <div className='w-[100%] mt-4 bg-[#212731] h-[350px] md:h-[440px] text-[#B6BDC4] '>
            <div className='max-w-[1024px] pt-[54px] text-[13px] px-2 flex flex-wrap  md:flex-row mx-auto w-[100%]  md:space-x-[260px] '>
                {/* Categories */}
                <div className='pr-10 space-y-4'>
                    <h1 className='text-[16px] text-white'>CATEGORIES</h1>
                    {
                        footerCategory.map((c) => {
                            return <p>
                                {c}
                            </p>
                        })
                    }

                </div>

                {/* contact  */}
                <div className=' space-y-4'>
                    <h1 className=' text-[16px] text-white'>CONTACT</h1>
                    {
                        footerContact.map((c) => {
                            return <p>
                                {c}
                            </p>
                        })
                    }

                </div>

                <div className='flex my-6 items-center text-[16px]' >
                    <select name="" id="" className=' outline-none bg-transparent'  >
                        <option value="">United State</option>
                    </select>

                </div>
            </div>
        </div>
    )
}

export default Footer