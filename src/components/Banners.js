import React from 'react'
import Women from '../DNK/women.jpg';
import men from '../DNK/men.jpg';
import footwear from '../DNK/footwear.jpg';


function Banners() {
    return (
        <div>
            <section>
                <div className='img-for-bg'>
                    <div className='img-bg-1'>
                        <div className='img-bg-color'>
                            <div className='bg-text'>
                            <h3>20% Off On Tank Tops</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.</p>
                            <button className='white-btn'>SHOP NOW</button>
                            </div>
                        </div>
                    </div>


                    <div className='img-bg-2'>
                        <div className='img-bg-color'>
                            <div className='bg-text'>
                            <h3>Latest Eyewear For You</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.</p>
                            <button className='white-btn'>SHOP NOW</button>
                            </div>
                        </div>
                    </div>

                    <div className='img-bg-3'>
                        <div className='img-bg-color'>
                            <div className='bg-text'>
                            <h3>Let's Lorem Suit Up!</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.</p>
                            <button className='white-btn'>CHECK OUT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Banners