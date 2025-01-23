import React from 'react'
import SortDropdown from './SortDropdown'
import SelectCategory from './SelectCategory'

const ProductFilter = () => {
  return (
    <div className='flex gap-16'>
      <p>Filter : </p>
      <div>
        <SortDropdown />
      </div>
      <div>
        <SelectCategory />
      </div>
      <div></div>
    </div>
  )
}

export default ProductFilter