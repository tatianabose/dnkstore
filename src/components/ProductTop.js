import React from 'react'
import BigPic from './BigPic'
import TopDEscrip from './TopDEscrip'

function ProductTop() {
  return (
    <div>
        <section className='top-bg'>
          <div className='top-items'>
            <div className='top-grid'>
            <BigPic/>
            <TopDEscrip/>
            </div>
         
          </div>
           
        </section>
    </div>
  )
}

export default ProductTop