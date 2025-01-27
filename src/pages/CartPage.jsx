import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { FaHome } from "react-icons/fa"
import { TbSlash } from "react-icons/tb";
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart } from '../redux/slices/cartSlice';

const CartPage = () => {
  const navigate = useNavigate();
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const removeFromCartHandler = (id) => {
    dispatch(removeItemFromCart(id));
  };
  const confirmOrder = (id) => {
    navigate(`/shop/${id}`);
  };

  return (
    <div className='text-font01'>
      <div className='w-full max-w-[1280px] px-2 mx-auto space-y-6 py-10'>

        <div className="text-2xl text-font01 text-opacity-70 flex items-center  gap-3">
            <Link to="/" className="flex items-center  gap-2 hover:text-red-700">
                <FaHome />
            </Link>

            <TbSlash />

            <div className="">Cart</div>
        </div>
        
        <h2 className='text-3xl mdl:text-5xl'>Cart History</h2>

        {console.log(cart.items.length)}
        {cart.items.length === 0 ? (<div>
          <h2 className='text-center text-xl font-semibold py-10'>Your Cart is Empty. Please add product to cart.</h2>
        </div>) : (
        <ul className='w-full overflow-x-auto flex flex-col gap-10 pt-10'>
          {cart.items.map(item => (
            <li key={item.id} className='min-w-[1000px] flex justify-between items-center gap-5'>
              <div className='w-[100px] mdl:w-[200px] h-[100px] mdl:h-[200px]'>
                <img src={item.productImg} alt="product" className='w-full h-full' />
              </div>
              <div>
                <p className='text-font01 text-xl'>{item.name}</p>
                <p className='text-2xl font-semibold'>${item.price} CND</p>
              </div>
              <p className='text-font01 text-xl'>{item.date}</p>
              <p className='text-2xl font-semibold'>{item.quantity}</p>
              <p className='text-2xl font-semibold'>${item.totalPrice} CND</p>
              <button onClick={()=>confirmOrder(item?.id)} className='text-sm md:text-xl text-font03 bg-gray-800 py-2 px-6'> Confirm Order</button>
              <button onClick={()=>removeFromCartHandler(item?.id)} className='text-sm md:text-xl text-font03 bg-gray-800 py-2 px-6'>Remove</button>
            </li>
          ))}
        </ul>)
        }
      </div>
    </div>
  )
}

export default CartPage