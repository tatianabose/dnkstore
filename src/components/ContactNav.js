import React from 'react'
import NavItems from './NavItems'
function contactNav() {
  return (
    <div>
         <section className='contact-bg'>
        <div className='contact-bg-color'>
          <NavItems />
          <div className='contact-head'>
            <h2>Contact Us</h2>
          </div>
        </div>
      </section>
    </div>
  )
}

export default contactNav