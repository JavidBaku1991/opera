import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';



import g1 from '../../images/final/1.JPG'
import g2 from '../../images/final/2.JPG'
import g3 from '../../images/final/3.JPG'
import g4 from '../../images/final/4.JPG'
import g5 from '../../images/final/5.JPG'
import g6 from '../../images/final/6.JPG'
import g7 from '../../images/final/7.JPG'
import g8 from '../../images/final/8.JPG'
import g9 from '../../images/final/9.JPG'
import g10 from '../../images/final/10.JPG'
import g11 from '../../images/final/11.JPG'
import g12 from '../../images/final/12.JPG'
import g13 from '../../images/final/13.JPG'
import g14 from '../../images/final/14.JPG'
import g15 from '../../images/final/15.JPG'
import g16 from '../../images/final/16.JPG'
import g18 from '../../images/final/18.JPG'
import g19 from '../../images/final/19.JPG'
import g20 from '../../images/final/20.JPG'
import g21 from '../../images/final/21.JPG'
import g22 from '../../images/final/22.JPG'
import g23 from '../../images/final/23.JPG'
import g24 from '../../images/final/24.JPG'
import g25 from '../../images/final/25.JPG'
import g26 from '../../images/final/26.JPG'
import g27 from '../../images/final/27.JPG'
import g28 from '../../images/final/28.JPG'
import g29 from '../../images/final/29.JPG'
import g30 from '../../images/final/30.JPG'
import g31 from '../../images/final/31.JPG'
import g32 from '../../images/final/32.JPG'
import g33 from '../../images/final/33.JPG'
import g34 from '../../images/final/34.JPG'
import g35 from '../../images/final/35.JPG'
import g36 from '../../images/final/36.JPG'
import g37 from '../../images/final/37.JPG'
import g38 from '../../images/final/38.JPG'
import g39 from '../../images/final/39.JPG'
import g40 from '../../images/final/40.JPG'
import g41 from '../../images/final/41.JPG'
import g42 from '../../images/final/42.JPG'
import g43 from '../../images/final/43.JPG'
import g44 from '../../images/final/44.JPG'
import g45 from '../../images/final/45.JPG'
import g46 from '../../images/final/46.JPG'
import g48 from '../../images/final/48.JPG'
import g49 from '../../images/final/49.JPG'
import g50 from '../../images/final/50.JPG'
import g51 from '../../images/final/51.JPG'
import g52 from '../../images/final/52.JPG'
import g53 from '../../images/final/53.JPG'
import g54 from '../../images/final/54.JPG'
import g55 from '../../images/final/55.JPG'
import g56 from '../../images/final/56.JPG'
import g57 from '../../images/final/57.JPG'
import g58 from '../../images/final/58.JPG'
import g59 from '../../images/final/59.JPG'
import g60 from '../../images/final/60.JPG'
import g61 from '../../images/final/61.JPG'
import g62 from '../../images/final/62.JPG'
import g63 from '../../images/final/63.JPG'
import g64 from '../../images/final/64.JPG'
import g65 from '../../images/final/65.JPG'
import g66 from '../../images/final/66.JPG'
import g67 from '../../images/final/67.JPG'
import g68 from '../../images/final/68.JPG'
import g69 from '../../images/final/69.JPG'
import g70 from '../../images/final/70.JPG'



import Navbar from '../Navbar';
import Email from '../Email';
import Footer from '../Footer';


  const screenWidth = window.innerWidth>900;

const Final =() =>{

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
  {
    img: g55,
    title: 'Bed',
  },
  {
    img: g56,
    title: 'Bed',
  },
  {
    img: g57,
    title: 'Bed',
  },
  {
    img: g58,
    title: 'Bed',
  },
  {
    img: g60,
    title: 'Bed',
  },
  {
    img: g61,
    title: 'Bed',
  },
  {
    img: g62,
    title: 'Bed',
  },
  {
    img: g63,
    title: 'Bed',
  },
  {
    img: g64,
    title: 'Bed',
  },
  {
    img: g65,
    title: 'Bed',
  },
  {
    img: g66,
    title: 'Bed',
  },
  {
    img: g67,
    title: 'Bed',
  },
  {
    img: g68,
    title: 'Bed',
  },
  {
    img: g59,
    title: 'Bed',
  },
  {
    img: g69,
    title: 'Bed',
  },
  {
    img: g70,
    title: 'Bed',
  },
  


  
 
];


export default Final;