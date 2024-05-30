import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Email from './Email'
import ContactLine from './ContactLine'
import PhotoCard from './PhotoCard';
import { Link } from 'react-router-dom'

// card photos
import karmen from '../images/karmen/karmen2.jpg'
import genc from '../images/operaUlduzlari/40.jpeg'
import usaqlar from '../images/geleceyinulduzlari/51.jpeg'
import senetvarisleri from '../images/senetvarisleri/48.jpeg'
import klassik from '../images/rotunda/4.jpeg'
import final from '../images/final/65.JPG'


 

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
      <div className='flex flex-wrap justify-center align-middle gap-10 pb-10'>
        <Link to='/photos/karmen'>
            <PhotoCard title=' Jorj Bize - KARMEN'  img={karmen} place='Bakı Musiqi Akademiyası nəzdində Opera Studiyası'  time='27.04.2024 / 19:00'/>
        </Link>
        <Link to='/photos/genculduzlar'>
           <PhotoCard title='Gənc opera ulduzları' place='Müslüm Maqomayev adına Azərbaycan Dövlət Akademik Filarmoniyası'  img={genc} time='28.04.2024 / 19:00' />
        </Link>

        <Link to='/photos/geleceyinulduzlari'>
           <PhotoCard title='Gələcəyin opera ulduzları' place='Rəşid Behbudov adına Dövlət Mahnı Teatrı'  img={usaqlar} time='29.04.2024 / 19:00' />
        </Link>
        <Link to='/photos/senetvarisleri'>
           <PhotoCard title='Sənət varisləri' place='Beynəlxalq Muğam Mərkəzi'  img={senetvarisleri} time='30.04.2024 / 19:00' />
        </Link>
        <Link to='/photos/klassikmusiqiaxshami'>
           <PhotoCard title='Klassik musiqi axşamı' place='Landmark Rotunda zalı'  img={klassik} time='02.05.2024 / 19:00' />
        </Link>
        <Link to='/photos/final'>
           <PhotoCard title='"VİVA-OPERA" Festivalın bağlanış konserti' place='Müslüm Maqomayev adına Azərbaycan Dövlət Akademik Filarmoniyası'  img={final} time='03.05.2024 / 19:00' />
        </Link>


      </div>
     


       <Email />
      
        </div>
        <Footer />
         </div>
 
  )
}

export default Photos