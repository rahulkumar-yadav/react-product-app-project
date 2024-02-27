import React from 'react'
import { NavigationBarLink } from '../Assests/text'
import { path } from "../Assests/text"

const NavigationBar = () => {
    return (
        <div className='w-[100%] my-4 text-[#4B5665]'>
            <div className='max-w-[1024px] p-2 flex overflow-x-auto   mx-auto w-[100%] space-x-2'>
                {
                    NavigationBarLink.map((nav) => {
                        return <a key={nav.id} href={nav.link} className=' px-2 py-1 flex justify-start items-center h-[36px]   min-w-[105px]  bg-white rounded-[12px] '>{nav.buttonName} </a>
                    })
                }

            </div>
            <div className='text-[8px] md:text-[14px] max-w-[1024px] px-2 flex  mx-auto w-[100%] space-x-2 pb-4 my-4 text-[#727D87]'>
                {
                    path.map((p) => {
                        return <div className='flex space-x-4'>
                            <p>{p.name}</p>
                            {
                                p.id !== path.length && <p>{">"}</p>
                            }

                        </div>
                    })
                }

            </div>
        </div>
    )
}

export default NavigationBar