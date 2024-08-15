import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutFestival from '../components/AboutFestival'
function Festival() {
  return (
    <div  className='festival-container'>
      <Navbar />
        <AboutFestival />
      <Footer />

    </div>
  )
}

export default Festival