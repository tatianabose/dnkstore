import React from 'react'
import Connect from '../components/Connect'
import ContactNav from '../components/ContactNav'
import ContactUs from '../components/ContactUs'
import EndSection from '../components/EndSection'
function Contact() {
  return (
    <div>
      <ContactNav/>
      <Connect/>
      <ContactUs/>
      <EndSection/>
    </div>
  )
}

export default Contact