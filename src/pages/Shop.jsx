import React from 'react'
import {Link} from 'react-router-dom'
import { FaHome } from "react-icons/fa"
import { TbSlash } from "react-icons/tb";
import { productsDatas } from '../constants/productsDatas';
import ProductCart from '../components/ProductCart';
import ProductFilter from '../components/ProductFilter';

const Shop = () => {
  return (
    <div className='text-font01'>
      <div className='max-w-[1280px] w-full px-2 mx-auto space-y-6 py-10'>

        <div className="text-2xl text-font01 text-opacity-70 flex items-center  gap-3">
            <Link to="/" className="flex items-center  gap-2 hover:text-red-700">
                <FaHome />
            </Link>

            <TbSlash />

            <div className="">Shop</div>
        </div>
        
        <h2 className='text-6xl'>Shop</h2>
        <div>
          <ProductFilter />
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8'>
          {productsDatas?.map((singleProduct)=>(
            <div key={singleProduct?.id}>
              <ProductCart singleProduct={singleProduct}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Shop