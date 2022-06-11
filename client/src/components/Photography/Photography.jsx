import React from 'react'
import About from '../About/About'
import Contact from '../Contact/Contact'
import NavBar from '../NavBar/NavBar'
import Slider from '../Slider/Slider'

export default function Photography() {
  return (
    <div>
      <NavBar/>
      Photography
      <Slider/>
      <About/>
      <Contact/>
    </div>
  )
}
