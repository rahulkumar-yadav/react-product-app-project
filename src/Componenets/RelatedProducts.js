import React from 'react'
import RelatedProduct from './RelatedProduct'
import { relatedRouducts } from '../Assests/text'

const RelatedProducts = () => {
    return (
        <div className='w-[100%] my-4  text-[#2C384A] '>
            <div className='max-w-[1024px] px-2 py-3 flex flex-col mx-auto w-[100%] space-y-6 '>
                <h1 className='text-[22px] md:text-[32px] leading-[44px]'>
                    Related deals you might like for
                </h1>
                <div className='flex flex-col space-y-4 md:space-y-0 md:flex-row items-center md:justify-between flex-wrap'>
                    {
                        relatedRouducts.map((p) => {
                            return <RelatedProduct product={p} />
                        })

                    }
                </div>
            </div>
        </div>
    )
}

export default RelatedProducts