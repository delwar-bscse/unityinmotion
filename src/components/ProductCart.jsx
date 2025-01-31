import React from 'react'
import { RiShoppingCartLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const ProductCart = ({singleProduct}) => {
  
  return (
    <Link to={`/shop/${singleProduct.id}`} className='border-2 border-gray-200 p-5 group block'>
      <span className='flex justify-end'>
        <RiShoppingCartLine className='text-font02' size={28}/>
      </span>
      <div className='flex justify-center items-center my-10 md:my-16 w-full overflow-hidden'>
        <img src={singleProduct?.productImg} alt="product image" className='w-[200px] h-[200px] scale-90  group-hover:scale-100 transition-all duration-300' />
      </div>
      <p className='text-xl py-4'>The Ball</p>
      <p className='text-3xl pb-4'>$ 34.00 CDN</p>
    </Link>
  )
}

export default ProductCart