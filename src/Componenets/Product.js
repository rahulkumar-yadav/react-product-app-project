import React from 'react'
import productImg from "../Assests/Images/productImg.png"
import fStar from "../Assests/Images/fullstar.png"
import hStar from "../Assests/Images/halfrating.png"
import { FaAngleDown } from "react-icons/fa6";
import trophy from "../Assests/Images/trophy.svg"
import diamond from "../Assests/Images/diamond.svg"
import { FaCheck } from "react-icons/fa6";

const Product = ({ product }) => {

    const fullStar = Math.floor(product.rating / 2);
    const halfStar = Math.ceil(product.rating / 2) - fullStar;

    return (
        <div className='relative flex flex-col md:flex-row bg-white rounded-md  md:px-4 md:space-x-6 '>
            <div className=' absolute rounded-[100%] bg-white border-[#E1E4E6] text-[20px] border-[1px] flex justify-center items-center top-[44px] -left-[20px] z-100  w-[44px] h-[44px]'>
                {product.id}
            </div>

            {product.tag && <div className='absolute -top-4 -left-4 md:-left-8 rounded-r-[8px] bg-[#FF7724] flex text-white py-2 px-4 text-[16px] space-x-2 items-center'  >

                <p><img src={`${product.tag === 'Best Choice' ? trophy : diamond}`} alt="tag icon" /></p><p>{product.tag}</p>

            </div>}

            {/* product img portion */}
            <div className='pt-8 md:pt-0 flex flex-col justify-center items-center space-y-2 px-6'>
                <div>
                    {
                        product.img ? <img src={product.img} alt="product img" className='' /> : <img src={productImg} alt="product img" className='w-[141px] h-[103px]' />
                    }
                </div>
                <p className='text-[13px]'>
                    {product.imgDesc}
                </p>
            </div>
            {/* product description */}
            <div className='lg:w-[700px] text-[16px] leading-[24px] px-6 md:px-0 py-4'>
                {
                    product.productDescH && <>
                        <div >
                            <span className=' font-bold'>{product.productDescH} </span>
                            {product.productDesc}
                        </div>
                    </>
                }

                {
                    product.discount && <div className='text-[#074786] rounded-[4px] flex justify-center items-center text-[13px] bg-[#F2F4F7] h-[26px] w-[61px]'>
                        {product.discount}%  Off
                    </div>
                }

                {
                    product.mainHighlight && <>
                        <h1 className='font-bold my-2 text-[#2C384A]'>Main highlights</h1>
                        {
                            product.mainHighlight.whatYouGet && <p className=' pl-4'>
                                [What You Get]: {product.mainHighlight.whatYouGet}
                            </p>
                        }

                        {
                            product.mainHighlight.highlightList && <p className='flex flex-col bg-[#FFF4ED] rounded-[12px] px-4 py-2 ml-4 space-y-2'>

                                {
                                    product.mainHighlight.highlightList.map((list) => {
                                        return <div className='flex space-x-2'>
                                            <p className='text-[16px] bg-white w-[40px] h-[28px] flex justify-center items-center text-[#1B88F4] rounded-[4px]'> {list.rating}</p>
                                            <p className='text-[16px]'> {list.desc}</p>
                                        </div>
                                    })
                                }
                            </p>
                        }

                        {
                            product.whyWeLoveIt && <p>
                                <h1 className='text-[#2C384A] my-2'>Why we love it</h1>
                                {

                                    product.whyWeLoveIt.map((list) => {
                                        return <div className='flex items-center space-x-2'>
                                            <FaCheck className='text-[#0855A1] rounded-full p-1 w-[24] h-[24] bg-[#EBF5FF]' />
                                            <p>{list}</p>

                                        </div>
                                    })
                                }

                            </p>

                        }

                    </>

                }

                <div className='text-[#1B88F4] flex items-center space-x-2 text-[16px] mt-2' >
                    <p> Show more </p> <FaAngleDown />
                </div>

            </div>
            {/* product rating  */}
            <div className='text-[#074786] flex flex-col space-y-2 md:justify-between items-center mb-6  '>
                <div className='w-[135px] h-[118px] bg-[#F3F9FF] rounded-b-[12px] py-2 flex flex-col items-center justify-between'>
                    <p className='text-[32px]'>{product.rating}</p>
                    <div className='flex flex-col items-center space-y-2 pb-2'>
                        <p>Exceptional</p>
                        <p className='flex'>
                            {[...Array(fullStar)].map(() => {
                                return <img src={fStar} alt="star" className='w-[11px] h-[11px]' />
                            })}
                            {[...Array(halfStar)].map(() => {
                                return <img src={hStar} alt="star" className='w-[11px] h-[11px]' />
                            })}

                        </p>
                    </div>

                </div>
                <a href={product.link} className='w-[232px] text-[16px] flex justify-center items-center h-[48px] bg-[#1B88F4] text-[#FFFFFF] rounded-[12px]'>
                    View
                </a>

            </div>
        </div>
    )
}

export default Product