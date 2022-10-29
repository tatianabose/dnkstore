import React from 'react'
import Pagination from '@mui/material/Pagination';
import Product from './Product';
function ProductBar() {
  return (
    <div>
      <section className='product-bar-bg'>
        <div className='for-padding'>
          <div className='home'>
            <a>Home/Store</a>
          </div>

          <div className='results'>
            <a>Showing 1–12 of 31 results</a>

            <select  className='main-dropdown'>
              <option>Default Sorting </option>
            
                <option>Sort By Popularity</option>
                <option>Sort By Average Rating</option>
                <option>Sort By Rating</option>
                <option>Sort by Price Low To High</option>
                <option>Sort by Price High To Low</option>
             
            </select>

           

          </div>
          <div className='product-bar-grid'>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          </div>
          
          <div>
          <Pagination count={3} variant="outlined" shape="rounded" />
          </div>
        </div>

      </section>
    </div>
  )
}

export default ProductBar