import React from 'react'
import NavItems from './NavItems'

function AboutNav() {
  return (
    <div>
      <section className='about-bg'>
        <div className='about-bg-color'>
          <NavItems />
          <div className='about-head'>
            <h2>About Us</h2>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutNav