import React from 'react'
import group from '../DNK/group.jpg'

function AboutDescrip() {
    return (
        <div>
            <section className='descrip-color'>
                <div className='discrib-border'>
                <div className='descrip-left'>
                    <hr />
                    <h3>Who We Are</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.</p>
                </div>

                <div className='descrip-right'>
                    <img src={group} alt="grouo" />
                </div>
                </div>
            </section>
        </div>
    )
}

export default AboutDescrip