import React from 'react'
import SortDropdown from './SortDropdown'
import SelectCategory from './SelectCategory'

const ProductFilter = () => {
  return (
    <div className='flex  flex-col mdl:flex-row gap-3 mdl:gap-16'>
      <p>Filter : </p>
      <div className='flex items-center gap-3 mdl:gap-16'>
      <div>
        <SortDropdown />
      </div>
      <div>
        <SelectCategory />
      </div>
      </div>
    </div>
  )
}

export default ProductFilter