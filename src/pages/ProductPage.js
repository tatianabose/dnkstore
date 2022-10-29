import React from 'react'
import Additional from '../components/Additional'
import DescriptionNav from '../components/DescriptionNav'
import EndSection from '../components/EndSection'

import ProductsNav from '../components/ProductsNav'
import ProductTop from '../components/ProductTop'
import RelatedProducts from '../components/RelatedProducts'
import Reviews from '../components/Reviews'
function ProductPage() {
  return (
    <div>
        <ProductsNav/>
        <ProductTop/>
        <Reviews/>

        <RelatedProducts/>
        <EndSection/>
      
    </div>
  )
}

export default ProductPage