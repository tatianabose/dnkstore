import React from 'react'
import './Components.css';
import NavItems from './NavItems';






function HomeNav() {
    return (
        <div>
            <section className='home-nav'>
                <div className='for-bg'>
                    <NavItems/>
                <div className='for-intro'>
                    <h1>Raining Offers For Hot Summer!</h1>
                    <h3>25% Off On All Products</h3>

                    <div  className='for-btn'>
                        <button className='white-btn'>SHOP NOW</button>
                        <button className='trans-btn'>FIND MORE</button>
                    </div>
                </div>
                </div>
                
            </section>
        </div>
    )
}

export default HomeNav