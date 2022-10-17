import React from 'react'
import globe from '../DNK/globe.png'
import manequin from '../DNK/manequin.png'
import tag from '../DNK/tag.png'
import lock from '../DNK/lock.png'
function Offers() {
    return (
        <div>
            <section className='for-offers'>
                <div className='abt-offers'>

                    <div>
                        <img src={globe} alt="globe" />
                        <h3>Worldwide Shipping</h3>
                        <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>

                    <div>
                        <img src={manequin} alt="manequin" />
                        <h3>Best Quality</h3>
                        <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>

                    <div>
                        <img src={tag} alt="tag" />
                        <h3>Best Offers</h3>
                        <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>

                    <div>
                        <img src={lock} alt="lock" />
                        <h3>Secure Payments</h3>
                        <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>

                </div>

            </section>
        </div>
    )
}

export default Offers