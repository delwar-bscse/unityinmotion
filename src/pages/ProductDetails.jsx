import React, { useEffect, useState } from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import { FaHome } from "react-icons/fa"
import { TbSlash } from "react-icons/tb";
import { FiMinus, FiPlus } from "react-icons/fi";
import { productsDatas, productsDatas2 } from '../constants/productsDatas';
import ProductCart from '../components/ProductCart';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../redux/slices/cartSlice';

const ProductDetails = () => {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {productId} = useParams();
  const [singleProduct, setSingleProduct] = useState(null);
  const [count, setCount] = useState(1);

  const addToCartHandler = () => {
    dispatch(addItemToCart({
      id:productId,
      name:singleProduct.name,
      productImg:singleProduct.productImg,
      quantity:count,
      price:singleProduct.price
    }));
  };
  const buyNow = () => {
    dispatch(addItemToCart({
      id:productId,
      name:singleProduct.name,
      productImg:singleProduct.productImg,
      quantity:count,
      price:singleProduct.price
    }));
    navigate(`/shop/product-payment/${productId}`);
  };


  useEffect(()=>{
    const product = productsDatas.filter((product)=>product.id.toString()===productId)[0];
    setSingleProduct(product);
    setCount(1);
  },[productId])

  useEffect(()=>{
    const singleProduct = items?.find((product)=>product.id.toString()===productId);
    setCount(singleProduct?.quantity || 1);
  },[items])

  return (
    <div className='text-font01'>
      <div className='max-w-[1280px] w-full px-2 mx-auto space-y-6 pt-10 pb-28'>

        <div className="text-2xl text-font01 text-opacity-70 flex items-center  gap-3">
            <Link to="/" className="flex items-center  gap-2 hover:text-red-700">
                <FaHome />
            </Link>

            <TbSlash />

            <div className="">Product Details</div>
        </div>
        
        <h2 className='text-6xl'>Details</h2>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
          <div className='space-y-5'>
            <div className='border-2 border-gray-200 p-5 group flex justify-center items-center w-full'>
              <img src={singleProduct?.productImg} alt="product image" className='w-full max-w-[500px] h-full max-h-[500px] group-hover:scale-105 transition-all duration-300' />
            </div>
            <div className='flex justify-between gap-1'>
              <div className='border-2 border-gray-200 p-5 group flex justify-center items-center max-w-[150px] max-h-[150px]'>
                <img src={singleProduct?.productImg} alt="product image" className='w-full h-full group-hover:scale-110 transition-all duration-300' />
              </div>
              <div className='border-2 border-gray-200 p-5 group flex justify-center items-center max-w-[150px] max-h-[150px]'>
                <img src={singleProduct?.productImg} alt="product image" className='w-full h-full group-hover:scale-110 transition-all duration-300' />
              </div>
              <div className='border-2 border-gray-200 p-5 group flex justify-center items-center max-w-[150px] max-h-[150px]'>
                <img src={singleProduct?.productImg} alt="product image" className='w-full h-full group-hover:scale-110 transition-all duration-300' />
              </div>
            </div>
          </div>
          <div className='flex flex-col items-start gap-8'>
            <h3 className='text-4xl md:text-5xl text-font01'>The Dumball</h3>
            <p className='text-2xl'>Price : ${singleProduct?.price}.00 CDN</p>
            <div className='w-[260px] flex justify-around items-center text-2xl border-[1px] border-gray-300 py-3'>
              <button onClick={()=>setCount(count-1)}disabled={count <= 1}>
                <FiMinus />
              </button>
              <p>{count}</p>
              <button onClick={()=>setCount(count+1)}>
                <FiPlus />
              </button>
            </div>
            <button onClick={addToCartHandler} className='w-full py-5 border-[1px] border-gray-300 text-font01 active:bg-gray-200'>Add to Cart</button>
            <button onClick={buyNow} className='w-full py-5 bg-font01 text-font03 block text-center'>Buy Now</button>
            <p className='leading-10 tracking-wider'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident</p>
            <div className='space-y-4'>
              <p className='text-xl font-semibold'>INCLUDES : </p>
              <ul className=' list-disc pl-8 space-y-4'>
                <li>1 x The Band</li>
                <li>1 x The Ball</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* -------------------- View All Product -------------------- */}
        <div className=' border-t-[1px] border-t-gray-300'>
          <div className='flex justify-between items-center my-10'>
            <h2 className='text-2xl mdl:text-4xl'>You may also like</h2>
            <Link to="/shop" className='text-font02 underline text-lg mdl:text-2xl'>View All</Link>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-4'>
            {productsDatas2?.map((singleProduct)=>(
              <div key={singleProduct?.id}>
                <ProductCart singleProduct={singleProduct}/>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProductDetails