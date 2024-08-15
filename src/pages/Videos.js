import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutFestival from '../components/AboutFestival'
import ContactLine from '../components/ContactLine'
import YouTubePlayer from '../components/YouTubePlayer'

function Festival() {
  return (
    <div >
      <Navbar />
       
        <div className='w-screen videos-container '>
      <ContactLine title="Videolar" />
        <div className='flex flex-wrap  ml-auto   gap-4 md:gap-8 lg:gap-16 videos'>
          <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex justify-center '>
            <YouTubePlayer youtubeLink='HljPmzeXcXM'  />
          </div>
          <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex justify-center'>
            <YouTubePlayer youtubeLink='PdMPUSQUExQ' 
             />
          </div>
          <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex justify-center'>
            <YouTubePlayer youtubeLink='3o62NxNVEuo' 
             />
          </div>
          <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex justify-center'>
            <YouTubePlayer youtubeLink='UiRfyR7aiNU' 
             />
          </div>
          <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex justify-center'>
            <YouTubePlayer youtubeLink='ZdmRqcXIIK0' 
             />
          </div>
          <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex justify-center'>
            <YouTubePlayer youtubeLink='Uo3IkMUTfv0' 
             />
          </div>
          <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex justify-center'>
            <YouTubePlayer youtubeLink='xVYIYXuW1l8' 
             />
          </div>
          <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex justify-center'>
            <YouTubePlayer youtubeLink='DDN1NVKl0wQ' 
             />
          </div>
          <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex justify-center'>
            <YouTubePlayer youtubeLink='xi65YiAvUH0' 
             />
          </div>
          
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Festival;
