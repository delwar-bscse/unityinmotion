import React from 'react'
import {Link} from 'react-router-dom'
import { FaHome } from "react-icons/fa"
import { TbSlash } from "react-icons/tb";
import { useSelector } from 'react-redux';

const OrderPage = () => {
  const {orders, payment} = useSelector(state => state.order);

  return (
    <div className='text-font01'>
      <div className='w-full max-w-[1280px] px-2 mx-auto space-y-6 py-10'>

        <div className="text-2xl text-font01 text-opacity-70 flex items-center  gap-3">
            <Link to="/" className="flex items-center  gap-2 hover:text-red-700">
                <FaHome />
            </Link>

            <TbSlash />

            <div className="">Order</div>
        </div>
        
        <h2 className='text-3xl mdl:text-5xl'>Order Page</h2>

        <div className=''>
          <div className='w-full overflow-x-auto'>
            {orders?.length===0 ? (
              <p className='text-center text-xl font-semibold py-10'>No orders placed yet.</p>
            ) : (
              <div className='space-y-6 w-full min-w-[620px] max-w-[900px] mx-auto'>
                {orders.map(item => (
                  <div key={item.uid} className='flex justify-between items-center '>
                    <div className='flex items-center gap-10 grow'>
                      <div className='bg-white p-4  shadow-[2px_2px_10px_rgba(0,0,0,0.25)]'>
                        <img src={item?.item?.productImg} alt="product" className='max-w-[150px] max-h-[150px]'/>
                      </div>
                      <table className="table-auto">
                        <tbody>
                          <tr>
                            <td className="text-left p-2">Product Name</td>
                            <td className="text-left p-2"> : {item.item.name}</td>
                          </tr>
                          <tr>
                            <td className="text-left p-2">Date</td>
                            <td className="text-left p-2"> : {item.item.date}</td>
                          </tr>
                          <tr>
                            <td className="text-left p-2">Price</td>
                            <td className="text-left p-2"> : ${item.item.totalPrice}</td>
                          </tr>
                          <tr>
                            <td className="text-left p-2">Location</td>
                            <td className="text-left p-2"> : {payment.delevaryAddress}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className='bg-gray-800 py-3 px-10 text-font03'>Record</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderPage