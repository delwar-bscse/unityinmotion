import React, { useEffect, useState } from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import { FaHome } from "react-icons/fa"
import { TbSlash } from "react-icons/tb";
import { productsDatas, productsDatas2 } from '../constants/productsDatas';
import ProductCart from '../components/ProductCart';
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { addpaymentInfo } from '../redux/slices/cartSlice';

const ProductPayment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {productId} = useParams();
  const [singleProduct, setSingleProduct] = useState(null);  
  const [paymentMethod, setPaymentMethod] = useState('Card');
  const [formData, setFormData] = useState({
    delevaryAddress: '',
    contact: ''
  });

  useEffect(()=>{
    const product = productsDatas.filter((product)=>product.id.toString()===productId)[0];
    setSingleProduct(product);
  },[]);

  const handleOptionChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value} = e.target;
    setFormData({
      ...formData,
      [name] : value, 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addpaymentInfo({...formData,paymentMethod}))
    navigate(`/shop/product-payment-details/${productId}`);
  };

  return (
    <div className='text-font01'>
      <div className='w-full max-w-[1280px] px-2 mx-auto space-y-6 pt-10 pb-28'>

        <div className="text-2xl text-font01 text-opacity-70 flex items-center  gap-3">
            <Link to="/" className="flex items-center  gap-2 hover:text-red-700">
                <FaHome />
            </Link>

            <TbSlash />

            <div className="">Product Payment</div>
        </div>
        
        <h2 className='text-6xl'>Details</h2>

        <div className='grid grid-cols-1 xl:grid-cols-2 gap-16'>
          <div className='space-y-5'>
            <div className='border-2 border-gray-200 p-5 group flex justify-center items-center w-full max-w-[500px] h-full max-h-[500px] py-20'>
              <img src={singleProduct?.productImg} alt="product image" className='w-full h-full group-hover:scale-110 transition-all duration-300' />
            </div>
          </div>
          <div className='flex flex-col items-start gap-8'>
            <form onSubmit={handleSubmit} className='w-full'>
              {/* Address Field */}
              <div className="mb-4">
                <label className="block font-semibold mb-2" htmlFor="delevaryAddress">Enter Your Address</label>
                <input
                  type="text"
                  id="delevaryAddress"
                  name="delevaryAddress"
                  placeholder='Your Address'
                  value={formData.delevaryAddress}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none"
                  required
                />
              </div>
              {/* Contact Field */}
              <div className="mb-4">
                <label className="block text-font01 font-semibold mb-2" htmlFor="contact">Contact Number</label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  placeholder='Contact Number'
                  value={formData.contact}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none"
                  required
                />
              </div>
                {/* Select payment method */}
                <div className='my-5'>
                  <p className='my-2 font-semibold text-font01'>Select Payment Method:</p>
                  <div className='flex flex-col'>
                  <label className='border-[1px] border-gray-300 p-3'>
                    <input
                      type="radio"
                      value="Card"
                      checked={paymentMethod === 'Card'}
                      onChange={handleOptionChange}
                      className='mr-2'
                    />
                    Card
                  </label>

                  <label className='border-[1px] border-t-0 border-gray-300 p-3'>
                    <input
                      type="radio"
                      value="PayPal"
                      checked={paymentMethod === 'PayPal'}
                      onChange={handleOptionChange}
                      className='mr-2'
                    />
                    PayPal
                  </label>
                  </div>
                </div>
                {/* terms and condition Checkbox */}
                <div className="mb-6 flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="termscondition"
                    name="termscondition"
                    className="m-1"
                    required
                  />
                  <label htmlFor="termscondition" className="text-sm text-font01 text-opacity-70">I have read and agree to the terms and condition <br/>of this page as follow</label>
                </div>
                <div className='max-h-[250px] overflow-y-scroll text-font01 border-[1px] border-gray-300 my-10'>
                  <div className='px-5 py-4 space-y-4'>
                    <p className='text-xl font-semibold text-gray-700'>Terms and Conditions</p>
                    <p className='leading-8 tracking-wide text-sm'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident</p>
                    <p className='leading-8 tracking-wide text-sm'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident</p>
                  </div>
                </div>
                <button type='submit' className='w-full py-5 bg-font01 text-font03 flex justify-center items-center gap-3'>
                  <span className='text-xl'>Next</span>
                  <MdOutlineArrowRightAlt size={32} />
                </button>
            </form>
          </div>
        </div>
        
        {/* ---------------------- you may also like - view all ------------------------- */}
        <div className='pt-10'>
          <div className='flex justify-between items-center my-10'>
            <h2 className='text-2xl mdl:text-4xl'>You may also like</h2>
            <Link to="/shop" className='text-font02 underline mdl:text-xl'>View All</Link>
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

export default ProductPayment