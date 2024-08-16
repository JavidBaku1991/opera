import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutFestival from '../components/AboutFestival'
function Festival() {
  return (
    <div>
      <Navbar />

    <div  className='festival-container'>
        <AboutFestival />
      <Footer />

    </div>
    </div>
    
  )
}

export default Festival