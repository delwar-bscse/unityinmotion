import React, { useState } from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import { FaHome } from "react-icons/fa"
import { TbSlash } from "react-icons/tb";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";
import { addpaymentInfo } from '../redux/slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const ProductPaymentDetails = () => {
  const {delevaryAddress,contact,paymentMethod} = useSelector(state => state.cart.payment);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {productId} = useParams();
  const [selectedPayment, setSelectedPayment] = useState(paymentMethod);


  const handlePayment = () => {
    dispatch(addpaymentInfo())
    navigate(`/shop/product-payment-confirm/${productId}`);
  };

  return (
    <div className='text-font01'>
      <div className='container mx-auto space-y-6 pt-10 pb-28'>

        <div className="text-2xl text-font01 text-opacity-70 flex items-center  gap-3">
            <Link to="/" className="flex items-center  gap-2 hover:text-red-700">
                <FaHome />
            </Link>

            <TbSlash />

            <div className="">Product Payment Details</div>
        </div>
        
        <h2 className='text-6xl'>Details</h2>

        <div className='w-[600px]  mx-auto'>
          <div className='flex flex-col items-start gap-8'>
            <form className='w-full'>
              {/* Delevery Address */}
              <div className="mb-4">
                <label className="block font-semibold mb-2" htmlFor="delevaryAddress">Delivery Address</label>
                <input
                  type="text"
                  id="delevaryAddress"
                  name="delevaryAddress"
                  placeholder='Your Address'
                  value={delevaryAddress}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none"
                  disabled
                />
              </div>
              {/* Date Address */}
              <div className="mb-4">
                <label className="block font-semibold mb-2" htmlFor="date">Date</label>
                <div className='w-full  flex justify-between items-center border border-gray-300 px-4'>
                  <input
                    type="text"
                    id="date"
                    name="date"
                    placeholder='3 Days'
                    value="In 3 Days"
                    className=" grow py-3 focus:outline-none bg-transparent"
                    disabled
                  />
                  <LuCalendarDays />
                </div>
              </div>
              {/* Contact Field */}
              <div className="mb-4">
                <label className="block text-font01 font-semibold mb-2" htmlFor="contact">Contact Number</label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  placeholder='Contact Number'
                  value={contact}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none"
                  disabled
                />
              </div>
              {/* Select payment method */}
              <div className="flex flex-col">
                <p className='my-2 font-semibold text-font01'>Payment Method:</p>
                <label className='border-[1px] border-gray-300 p-3'>
                  <input
                    type="radio"
                    value="Card"
                    className='mr-2'
                    checked={selectedPayment === 'Card'} // Checked if 'Card' is selected
                    disabled
                  />
                  Card
                </label>

                <label className='border-[1px] border-t-0 border-gray-300 p-3'>
                  <input
                    type="radio"
                    value="PayPal"
                    className='mr-2'
                    checked={selectedPayment === 'PayPal'} // Checked if 'PayPal' is selected
                    disabled
                  />
                  PayPal
                </label>
              </div>
            </form>
            <table className="w-full mx-auto text-font01 text-opacity-60 text-lg font-semibold">
              <tbody>
                <tr>
                  <td className="text-left p-4">Delivery Time :</td>
                  <td className="text-right p-4">In 3 Days</td>
                </tr>
                <tr>
                  <td className="text-left p-4">Sub Total :</td>
                  <td className="text-right p-4">150 CND</td>
                </tr>
                <tr>
                  <td className="text-left p-4">Delivery Fee :</td>
                  <td className="text-right p-4">05 CND</td>
                </tr>
                <tr>
                  <td className="text-left p-4">Total : </td>
                  <td className="text-right p-4">155 CND</td>
                </tr>
              </tbody>
            </table>
            <button onClick={handlePayment} className='w-full py-5 bg-font01 text-font03 flex justify-center items-center gap-3'>
              <span className='text-xl'>Payment</span>
              <MdOutlineArrowRightAlt size={32} />
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProductPaymentDetails