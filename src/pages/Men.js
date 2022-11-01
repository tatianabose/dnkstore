import React from 'react'
import ProductBar from '../components/ProductBar'
import SideBar from '../components/SideBar'
import ProductsNav from '../components/ProductsNav'
import EndSection from '../components/EndSection'

function Men() {
  return (
    <div>
      <ProductsNav/>
        <div className='product-div'>
        <SideBar/>
        <ProductBar/>
        </div>
        <EndSection/>
      
    </div>
  )
}

export default Men