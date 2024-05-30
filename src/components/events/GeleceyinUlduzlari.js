import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';



import g1 from '../../images/geleceyinulduzlari/1.jpeg'
import g2 from '../../images/geleceyinulduzlari/2.jpeg'
import g3 from '../../images/geleceyinulduzlari/3.jpeg'
import g4 from '../../images/geleceyinulduzlari/4.jpeg'
import g5 from '../../images/geleceyinulduzlari/5.jpeg'
import g6 from '../../images/geleceyinulduzlari/6.jpeg'
import g7 from '../../images/geleceyinulduzlari/7.jpeg'
import g8 from '../../images/geleceyinulduzlari/8.jpeg'
import g9 from '../../images/geleceyinulduzlari/9.jpeg'
import g10 from '../../images/geleceyinulduzlari/10.jpeg'
import g11 from '../../images/geleceyinulduzlari/11.jpeg'
import g12 from '../../images/geleceyinulduzlari/12.jpeg'
import g13 from '../../images/geleceyinulduzlari/13.jpeg'
import g14 from '../../images/geleceyinulduzlari/14.jpeg'
import g15 from '../../images/geleceyinulduzlari/15.jpeg'
import g16 from '../../images/geleceyinulduzlari/16.jpeg'
import g18 from '../../images/geleceyinulduzlari/18.jpeg'
import g19 from '../../images/geleceyinulduzlari/19.jpeg'
import g20 from '../../images/geleceyinulduzlari/20.jpeg'
import g21 from '../../images/geleceyinulduzlari/21.jpeg'
import g22 from '../../images/geleceyinulduzlari/22.jpeg'
import g23 from '../../images/geleceyinulduzlari/23.jpeg'
import g24 from '../../images/geleceyinulduzlari/24.jpeg'
import g25 from '../../images/geleceyinulduzlari/25.jpeg'
import g26 from '../../images/geleceyinulduzlari/26.jpeg'
import g27 from '../../images/geleceyinulduzlari/27.jpeg'
import g28 from '../../images/geleceyinulduzlari/28.jpeg'
import g29 from '../../images/geleceyinulduzlari/29.jpeg'
import g30 from '../../images/geleceyinulduzlari/30.jpeg'
import g31 from '../../images/geleceyinulduzlari/31.jpeg'
import g32 from '../../images/geleceyinulduzlari/32.jpeg'
import g33 from '../../images/geleceyinulduzlari/33.jpeg'
import g34 from '../../images/geleceyinulduzlari/34.jpeg'
import g35 from '../../images/geleceyinulduzlari/35.jpeg'
import g36 from '../../images/geleceyinulduzlari/36.jpeg'
import g37 from '../../images/geleceyinulduzlari/37.jpeg'
import g38 from '../../images/geleceyinulduzlari/38.jpeg'
import g39 from '../../images/geleceyinulduzlari/39.jpeg'
import g40 from '../../images/geleceyinulduzlari/40.jpeg'
import g41 from '../../images/geleceyinulduzlari/41.jpeg'
import g42 from '../../images/geleceyinulduzlari/42.jpeg'
import g43 from '../../images/geleceyinulduzlari/43.jpeg'
import g44 from '../../images/geleceyinulduzlari/44.jpeg'
import g45 from '../../images/geleceyinulduzlari/45.jpeg'
import g46 from '../../images/geleceyinulduzlari/46.jpeg'
import g47 from '../../images/geleceyinulduzlari/47.jpeg'
import g48 from '../../images/geleceyinulduzlari/48.jpeg'
import g49 from '../../images/geleceyinulduzlari/49.jpeg'
import g50 from '../../images/geleceyinulduzlari/50.jpeg'
import g51 from '../../images/geleceyinulduzlari/51.jpeg'
import g52 from '../../images/geleceyinulduzlari/52.jpeg'
import g53 from '../../images/geleceyinulduzlari/53.jpeg'
import g54 from '../../images/geleceyinulduzlari/54.jpeg'
import g55 from '../../images/geleceyinulduzlari/55.jpeg'



import Navbar from '../Navbar';
import Email from '../Email';
import Footer from '../Footer';


  const screenWidth = window.innerWidth>900;

const Karmen =() =>{

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
    img: g55,
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
  {
    img: g50,
    title: 'Bed',
  },
  {
    img: g51,
    title: 'Bed',
  },
  {
    img: g52,
    title: 'Bed',
  },
  {
    img: g53,
    title: 'Bed',
  },
  {
    img: g54,
    title: 'Bed',
  },

 

  
 
];


export default Karmen;