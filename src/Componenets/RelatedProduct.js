import React from 'react'
import img from "../Assests/Images/productImg.png"

const RelatedProduct = ({ product }) => {
    return (
        <div className='bg-white p-4 space-y-3 rounded-[12px] w-[calc(100%-36px)] md:w-[calc(33%-20px)] '  >
            {/* img  */}
            <div className='flex justify-center items-center py-4 pb-8'>
                <img src={`${product.img ? product.img : img}`} className='w-[141px] h-[103px]' alt="product img" />
            </div>
            <div className='flex space-x-4 '>
                {

                    product.discount && <span className='bg-[#F2F4F7] text-[#074786] py-1 px-2 rounded-[8px]'>
                        {product.discount}% Off
                    </span>
                }

                {product.dtime && <span className='bg-[#F2F4F7] text-[#074786] py-1 px-2 rounded-[8px]'>
                    {
                        product.dtime
                    }

                </span>
                }
            </div>
            <h1 className=' text-center font-bold text-[16px] text-[#626E79]'>
                {
                    product.providedBy
                }
            </h1>
            <p className='text-[#626E79] text-[16px] leading-[24px]'>
                {
                    product.desc
                }
            </p>

            <div className='space-x-2'>
                <span className='text-[#5C6874] text-[20px]'>
                    {
                        product.dcost
                    }
                </span>
                <span className='text-[#9FA9B3] text-[13px]'>
                    {
                        product.cost
                    }
                </span>
                <span className='text-[#EF4C5D] text-[13px]'>(
                    {
                        product.discount

                    }% Off
                    )</span>
            </div>
            <div className='bg-[#1B88F4] flex justify-center items-center leading-[24px] text-white text-[16px] h-[48px] rounded-[12px]'>
                View Deal
            </div>

        </div>
    )
}

export default RelatedProduct