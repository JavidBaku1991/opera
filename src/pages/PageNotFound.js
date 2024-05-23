import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function PageNotFound() {
  return (
    <div>
        <Navbar />
        <div className='h-screen w-screen not-found'>
            <h1 className='not-found-title' >Səhifə mövcud deyil</h1>
        </div>
        <Footer />
    </div>
  )
}

export default PageNotFound