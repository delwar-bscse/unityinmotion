import React, { useState } from 'react';
import {Link, useParams} from 'react-router-dom'
import { FaHome } from "react-icons/fa"
import { TbSlash } from "react-icons/tb";
import PaymentSuccessModal from '../modals/PaymentSuccessModal';
import { useDispatch, useSelector } from 'react-redux';
import { placeOrder } from '../redux/slices/orderSlice';
import {  removeItemFromCart } from '../redux/slices/cartSlice';

const ProductPaymentConfirm = () => {
  const {productId} = useParams();
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const [isOpenSuccessModal,setIsOpenSuccessModal] = useState(false);
  const [cardholder, setCardholder] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(placeOrder({ 
      item: cart.items.find((item)=>item.id===productId),
      payment: {...cart.payment,name:cardholder}
    }));
    dispatch(removeItemFromCart(productId));
    setIsOpenSuccessModal(!isOpenSuccessModal)
  };

  return (
    <div className='text-font01'>
      <div className='container mx-auto space-y-6 pt-10 pb-28'>
        <div className="text-2xl text-font01 text-opacity-70 flex items-center  gap-3">
            <Link to="/" className="flex items-center  gap-2 hover:text-red-700">
                <FaHome />
            </Link>

            <TbSlash />

            <div className="">confirm Payment</div>
        </div>
        
        <h2 className='text-6xl py-5'>Details</h2>
        <div className='flex flex-col justify-center items-center pt-20 pb-32'>
          <form onSubmit={handleSubmit} className="w-[700px] mx-auto space-y-10 text-font01 text-opacity-80">
            <div className="mt-4">
              <label htmlFor="cardholder" className="block text-sm font-medium">
                Cardholder Name
              </label>
              <input
                type="text"
                id="cardholder"
                value={cardholder}
                onChange={(e) => setCardholder(e.target.value)}
                className=" p-1 w-full border-b border-gray-300 focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="mt-4">
              <label htmlFor="cardNumber" className="block text-sm font-medium">
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className=" p-1 w-full border-b border-gray-300 focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="expiryDate" className="block text-sm font-medium">
                  MM/YY
                </label>
                <input
                  type="text"
                  id="expiryDate"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  className=" p-1 w-full border-b border-gray-300 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="cvc" className="block text-sm font-medium">
                  CVC
                </label>
                <input
                  type="text"
                  id="cvc"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                  className=" p-1 w-full border-b border-gray-300 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
            </div>

            <div className="mt-4 flex justify-between items-center border-b border-gray-300 pb-3">
              <label htmlFor="totalAmount" className="block text-sm font-medium">
                Total Amount
              </label>
              <span className="ml-2">$155.00</span>
            </div>

            <button
              type="submit"
              className="mt-6 w-full bg-font01 text-white py-5 hover:bg-opacity-90"
            >
              Confirm Pay
            </button>
          </form>
        </div>
        {isOpenSuccessModal && <div>
          <PaymentSuccessModal setIsOpenSuccessModal={setIsOpenSuccessModal} />
        </div>}
      </div>
    </div>
  );
};

export default ProductPaymentConfirm;