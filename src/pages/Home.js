import React from 'react'
import Banners from '../components/Banners'
import BrandSlider from '../components/BrandSlider'
import EndSection from '../components/EndSection'
import Featured from '../components/Featured'
import HomeNav from '../components/HomeNav'
import Offers from '../components/Offers'
import Special from '../components/Special'

function Home() {
  return (
    <div>
      <HomeNav/>
      <BrandSlider/>
      <Banners/>
      <Featured/>
      <Special/>
      <Offers/>
      <EndSection/>
    </div>
  )
}

export default Home