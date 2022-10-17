import React from 'react'
import './Components.css';
import Product from './Product';

function Featured() {
  return (
    <div>
        <section className='feature-section'>
            <div className='feature-head'>
                <h2>Featured Products</h2>
                <hr/>
            </div>
            <div className='featured-grid'>
                <Product brand="DNK" gender="men" price1="$150" price2="$120"/>
                <Product brand="DNK" />
                <Product brand="DNK"/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
        </section>
    </div>
  )
}

export default Featured