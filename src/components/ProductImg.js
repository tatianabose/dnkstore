import React from 'react'
import bgimgone from '../DNK/bgimgone.jpg'
import bgimgtwo from '../DNK/bgimgtwo.jpg'
import bgimgthree from '../DNK/bgimgthree.jpg'
import bgimgfour from '../DNK/bgimgfour.jpg'
function ProductImg() {
    return (
        <div>
            <section className='bgimg'>
                <div className='bgimgcolor'>
                <img src={bgimgone} alt="logo" />
                <img src={bgimgtwo} alt="logo" />
                <div className='bgimg3'>
                    <img src={bgimgthree} alt="logo" />
                    <div className='bgimg3info'>
                        <h4>Ut enim ad minim</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>

                        <h4>Quis nostrud</h4>
                        <p>Sed do eiusmod tempor incididunt ut labore.</p>

                        <h4>Duis aute irure</h4>
                        <p>Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    </div>
                </div>

                <div className='bgimg3'>
                    <div className='bgimg4info'>
                        <h4>More about the product</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.</p>


                    </div>

                    <img src={bgimgfour} alt="logo" />
                </div>

                </div>
              
            </section>
        </div>
    )
}

export default ProductImg