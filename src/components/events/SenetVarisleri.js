import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';



import g1 from '../../images/senetvarisleri/1.jpeg'
import g2 from '../../images/senetvarisleri/2.jpeg'
import g3 from '../../images/senetvarisleri/3.jpeg'
import g4 from '../../images/senetvarisleri/4.jpeg'
import g5 from '../../images/senetvarisleri/5.jpeg'
import g6 from '../../images/senetvarisleri/6.jpeg'
import g7 from '../../images/senetvarisleri/7.jpeg'
import g8 from '../../images/senetvarisleri/8.jpeg'
import g9 from '../../images/senetvarisleri/9.jpeg'
import g10 from '../../images/senetvarisleri/10.jpeg'
import g11 from '../../images/senetvarisleri/11.jpeg'
import g12 from '../../images/senetvarisleri/12.jpeg'
import g13 from '../../images/senetvarisleri/13.jpeg'
import g14 from '../../images/senetvarisleri/14.jpeg'
import g15 from '../../images/senetvarisleri/15.jpeg'
import g16 from '../../images/senetvarisleri/16.jpeg'
import g18 from '../../images/senetvarisleri/18.jpeg'
import g19 from '../../images/senetvarisleri/19.jpeg'
import g20 from '../../images/senetvarisleri/20.jpeg'
import g21 from '../../images/senetvarisleri/21.jpeg'
import g22 from '../../images/senetvarisleri/22.jpeg'
import g23 from '../../images/senetvarisleri/23.jpeg'
import g24 from '../../images/senetvarisleri/24.jpeg'
import g25 from '../../images/senetvarisleri/25.jpeg'
import g26 from '../../images/senetvarisleri/26.jpeg'
import g27 from '../../images/senetvarisleri/27.jpeg'
import g28 from '../../images/senetvarisleri/28.jpeg'
import g29 from '../../images/senetvarisleri/29.jpeg'
import g30 from '../../images/senetvarisleri/30.jpeg'
import g31 from '../../images/senetvarisleri/31.jpeg'
import g32 from '../../images/senetvarisleri/32.jpeg'
import g33 from '../../images/senetvarisleri/33.jpeg'
import g34 from '../../images/senetvarisleri/34.jpeg'
import g35 from '../../images/senetvarisleri/35.jpeg'
import g36 from '../../images/senetvarisleri/36.jpeg'
import g37 from '../../images/senetvarisleri/37.jpeg'
import g38 from '../../images/senetvarisleri/38.jpeg'
import g39 from '../../images/senetvarisleri/39.jpeg'
import g40 from '../../images/senetvarisleri/40.jpeg'
import g41 from '../../images/senetvarisleri/41.jpeg'
import g42 from '../../images/senetvarisleri/42.jpeg'
import g43 from '../../images/senetvarisleri/43.jpeg'
import g44 from '../../images/senetvarisleri/44.jpeg'
import g45 from '../../images/senetvarisleri/45.jpeg'
import g46 from '../../images/senetvarisleri/46.jpeg'
import g47 from '../../images/senetvarisleri/47.jpeg'
import g48 from '../../images/senetvarisleri/48.jpeg'
import g49 from '../../images/senetvarisleri/49.jpeg'



import Navbar from '../Navbar';
import Email from '../Email';
import Footer from '../Footer';


  const screenWidth = window.innerWidth>900;

const SenetVarisleri =() =>{

  return (  
    <div className='photos-container'>
          <Navbar />
    <Box 
       sx={{
        p: { xs: 2, sm: 4 }, // Responsive padding: 2 (8px) on xs screens, 16 (64px) on sm and up screens
        pt: { xs: 2, sm: 16} // Responsive padding top: 2 (8px) on xs screens, 28 (112px) on sm and up screens
    }}
    >
          <Box className='hero-photos' sx={{scrollbarWidth:'none'}}>
      <ImageList variant="masonry" cols={screenWidth?3:2} gap={20}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img className='photo box-shadow '
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
           
               <ImageListItemBar position="below" title={item.author} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
    </Box>
    <Email />
    <Footer />
    </div>
  

  );
}

const itemData = [
  {
    img: g1,
    title: 'Bed',
  },
  {
    img:g2,
    title: 'Books',
  },
  {
    img: g3,
    title: 'Sink',
  },

  {
    img: g4,
    title: 'Blinds',
  }, {
    img:g5,
    title: 'Storage',
  },
  {
    img: g6,
    title: 'Chairs',
  },
  {
    img:g15,
    title: 'Laptop',
  },

  {
    img:g7,
    title: 'Coffee',
  },
 
  {
    img: g8,
    title: 'Candle',
  },
  {
    img: g9,
    title: 'Candle',
  },
  {
    img: g10,
    title: 'Candle',
  },
  {
    img: g11,
    title: 'Candle',
  },
  {
    img: g12,
    title: 'Bed',
  },
  {
    img: g13,
    title: 'Bed',
  },
  {
    img: g14,
    title: 'Bed',
  },
  {
    img: g16,
    title: 'Bed',
  },

  {
    img: g18,
    title: 'Bed',
  },
  {
    img: g19,
    title: 'Bed',
  },
  {
    img: g20,
    title: 'Bed',
  },
  {
    img: g21,
    title: 'Bed',
  },
  {
    img: g22,
    title: 'Bed',
  },
  {
    img: g23,
    title: 'Bed',
  },
  {
    img: g24,
    title: 'Bed',
  },
  {
    img: g25,
    title: 'Bed',
  },
  {
    img: g26,
    title: 'Bed',
  },
  {
    img: g27,
    title: 'Bed',
  },
  {
    img: g28,
    title: 'Bed',
  },
  {
    img: g29,
    title: 'Bed',
  },
  {
    img: g30,
    title: 'Bed',
  },
  {
    img: g31,
    title: 'Bed',
  },
  {
    img: g32,
    title: 'Bed',
  },
  {
    img: g33,
    title: 'Bed',
  },
  {
    img: g34,
    title: 'Bed',
  },
  {
    img: g35,
    title: 'Bed',
  },
  {
    img: g36,
    title: 'Bed',
  },
  {
    img: g37,
    title: 'Bed',
  },
  {
    img: g38,
    title: 'Bed',
  },
  {
    img: g39,
    title: 'Bed',
  },
  {
    img: g40,
    title: 'Bed',
  },
  {
    img: g41,
    title: 'Bed',
  },
  {
    img: g42,
    title: 'Bed',
  },
  {
    img: g43,
    title: 'Bed',
  },
  {
    img: g44,
    title: 'Bed',
  },
  {
    img: g45,
    title: 'Bed',
  },
  {
    img: g46,
    title: 'Bed',
  },
  {
    img: g47,
    title: 'Bed',
  },

  {
    img: g48,
    title: 'Bed',
  },
  {
    img: g49,
    title: 'Bed',
  },

];


export default SenetVarisleri;