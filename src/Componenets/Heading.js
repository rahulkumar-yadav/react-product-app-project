import React from 'react'
import { CiCircleCheck } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import { CiCircleChevDown } from "react-icons/ci";

function Heading() {
    return (
        <div className='w-[100%] '>
            <div  className='max-w-[1024px] px-2 mt-4 mx-auto w-[100%]'>
                <h1 className='text-[22px] md:text-[48px] mb-2'>
                    Best Website builders in the US
                </h1>
                <div className=' border-b-2 py-2 border-t-2 flex justify-between text-[#4B5665] text-[10px] md:text-[14px]'>
                    <div className='flex space-x-4 '>
                        <div className='flex items-center space-x-1'>
                            <CiCircleCheck className='text-[25px] md:text-[30px]'/>
                            <p>
                                Last Update - Februray 22,2020
                            </p>
                        </div>
                        <div className='flex items-center space-x-1'>
                            <CiCircleInfo className='text-[25px] md:text-[30px]'/>
                            <p>
                                Advertising Disclouser
                            </p>
                        </div>

                    </div>
                    <div className='flex items-center space-x-1'>
                        <p>Top relevant </p>
                        <CiCircleChevDown className='text-[25px] md:text-[30px]' />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Heading
