import React from 'react'
import RangeSlider from './RangeSlider'

function SideBar() {

    return (
        <div>
            <section className='sidebar-bg'>
                <div className='search'>
                    <input type={"text"} placeholder="Search Products..." />
                    <button className='bluebtn'>❭</button>
                </div>

                <div className='filter'>
                    <h6>Filter by Price</h6>
                    <div>
                        <RangeSlider />
                        <div className='for-filter'>
                            <button className='bluebtn'>FILTTER</button>
                            <div className='price-statement'><a>Price:</a><h4>$20-$290</h4></div>
                        </div>
                    </div>

                </div>

                <div className='categories'>
                    <h5>Categories</h5>

                    <div className='for-categories'>
                        <div className='categories-item'><h6>Accessories</h6> <h6>(7)</h6></div>
                        <div className='categories-item'><h6>Men</h6> <h6>(14)</h6></div>
                        <div className='categories-item'><h6>Women</h6> <h6>(17)</h6></div>
                    </div>
                </div>


            </section>
        </div>
    )
}

export default SideBar