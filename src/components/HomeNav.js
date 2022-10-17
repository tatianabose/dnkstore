import React from 'react'
import LogoWhite from '../DNK/LogoWhite.png'
import './Components.css';
function HomeNav() {
    return (
        <div>
            <section className='home-nav'>
                <div className='for-bg'>
                <div className='link-bar'>
                    <div className='left-link'>
                        <div>
                            <img src={LogoWhite} alt="logo" />
                        </div>

                            <div>
                                <ul>
                                    <li>EVERYTHING</li>
                                    <li>WOMEN</li>
                                    <li>MEN</li>
                                    <li>ACCESSORIES</li>
                                </ul>
                            </div>
                        
                    </div>

                    <div className='right-link'>
                        <ul>
                            <li>ABOUT</li>
                            <li>CONTACT US</li>
                            <li>$0.00</li>
                            <li>AC</li>
                        </ul>
                    </div>

                </div>
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