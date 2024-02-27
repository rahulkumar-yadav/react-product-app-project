import React from 'react'
import Product from './Product'
import { products } from '../Assests/text'

const Products = () => {
    return (
        <div className='w-[100%] mx-4 md:mx-0 my-4 text-[#4B5665] pb-[50px]'>
            <div className='max-w-[1024px] px-2 flex flex-col  mx-auto w-[calc(100%-16px)]  md:w-[100%] space-y-6 '>
                {
                    products.map((p)=>{
                        return <Product product={p}/>
                    })
                }                
            </div>
        </div>
    )
}

export default Products