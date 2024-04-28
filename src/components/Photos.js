import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Email from './Email'
import PhotoList from './PhotoList'
import ContactLine from './ContactLine'

function Photos() {
  return (
    <div className='photos-container'>
     <Navbar />
   
    <div className='ml-3 mr-3 '> 
     
      
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <ContactLine  title='Şəkillər' />
    <br/>
    <br/>
      <PhotoList />
       <Email />
      
        </div>
        <Footer />
         </div>
 
  )
}

export default Photos