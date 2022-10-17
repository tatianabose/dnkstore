import React from 'react'
import BlackLogo from '../DNK/BlackLogo.png'
import './Components.css';

function EndSection() {
    return (
        <div>
            <section>
                <hr/>

                <div className='sale-ad'>
                    <h2>SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS.</h2>
                </div>

                <hr />

                <div className='end-abt'>
                    <div className='end-left'>
                        <img src={BlackLogo} alt="logo" />
                        <h3>The best look anytime, anywhere.</h3>
                    </div>

                    <div className='end-center'>
                        <h5>For Her</h5>

                        <a>Women Jeans</a>
                        <a>Tops and Shirts</a>
                        <a>Women Jackets</a>
                        <a>Heels and Flats</a>
                        <a>Women Accessories</a>
                    </div>

                    <div className='end-center'>
                        <h5>For Him</h5>

                        <a>Men Jeans</a>
                        <a>Men Shirts</a>
                        <a>Men Shoes</a>
                        <a>Men Accessories</a>
                        <a>Men Jackets</a>
                    </div>

                    <div className='end-right'>
                        <input type={'email'} placeholder="Your email address..."></input>
                        <button className='bluebtn'>SUBSCRIBE</button>
                    </div>

                   

                   
                </div>

                <div className='main-end'>
                <hr />
                        <a>Copyright © 2022 Brandstore. Powered by Brandstore.</a>

                    </div>

            </section>
        </div>
    )
}

export default EndSection