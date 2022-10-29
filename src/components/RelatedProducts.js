import React from 'react'
import Product from './Product'

function RelatedProducts() {
  return (
    <div>
      <section>
        <div className='related'>
          <h4>Related products</h4>
          <div className='related-grid'>
          <Product/>
          <Product/>
          <Product/>
          </div>
       
        </div>
      </section>
    </div>
  )
}

export default RelatedProducts