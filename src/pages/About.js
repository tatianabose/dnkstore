import React from 'react'
import AboutNav from '../components/AboutNav'
import AboutDescrip from '../components/AboutDescrip'
import Team from '../components/Team'
import Members from '../components/Members'
import FollowUs from '../components/FollowUs'
import Offers from '../components/Offers'
import EndSection from '../components/EndSection'

function About() {
  return (
    <div>
     <AboutNav/>
     <AboutDescrip/>
     <Team/>
     <Members/>
     <FollowUs/>
     <Offers/>
     <EndSection/>
    </div>
  )
}

export default About