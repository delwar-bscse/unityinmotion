import React, { useEffect, useRef, useState } from 'react'
import { productsDatas } from '../constants/productsDatas'
import { RiSearch2Line } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';


const SearchProductModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [allProducts,setAllProducts] = useState(productsDatas);
  const [allFilterProducts,setAllFilterProducts] = useState(productsDatas);
  const modalRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchButton = () =>{
    const filteredProducts = allProducts?.filter((product) =>
      product?.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setAllFilterProducts(filteredProducts);
  }

  const handleSingleProduct = (id) =>{
    onClose();
    navigate(`/shop/${id}`);
  }
  const handleAllProduct = () =>{
    onClose();
    navigate(`/shop`);
  }
  

  const handleCloseModal = () => {
    onClose();
  };
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      handleCloseModal();
    }
  };
  
  
  if (!isOpen) return null;
  return (
    <div onClick={handleClickOutside} className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 text-font01'>
      <div ref={modalRef} onClick={(e) => e.stopPropagation()} className='w-[700px] min-h-[600px] bg-font03 overflow-hidden flex flex-col justify-between '>
        <div className=" text-font02 font-light text-xl py-3 px-4 flex justify-start items-center gap-3 border-2 border-gray-400 rounded-md m-5 mb-2">
          <input 
            type="text" 
            placeholder="Search here..." 
            className="bg-transparent outline-none flex-1 text-font02 placeholder:text-font02" 
            value={searchTerm} 
            onChange={handleSearchChange}
          />
          <RiSearch2Line onClick={handleSearchButton} className='cursor-pointer text-font02' size={28}/>
        </div>
        <div className='mx-5'>
        <div className='w-full max-h-[600px] overflow-y-auto bg-font03 space-y-3'>
          {allFilterProducts?.map((singleProduct) => (
            <div  onClick={()=>handleSingleProduct(singleProduct?.id)} key={singleProduct?.id} className='flex items-center gap-8 hover:bg-gray-200 hover:duration-300 cursor-pointer'>
              <div className='bg-font03'>
                <img src={singleProduct?.productImg} alt="Product" className='w-[70px] h-[70px]' />
              </div>
              <div>
                <p>{singleProduct?.name}</p>
                <p>$ {singleProduct?.price} CDN</p>
              </div>
            </div>
          ))}
        </div>
        </div>
        <button onClick={handleAllProduct} className='bg-secondary text-xl text-center text-font02 hover:bg-opacity-70 hover:text-opacity-70 block py-4'>View All</button>
      </div>
    </div>

  )
}

export default SearchProductModal