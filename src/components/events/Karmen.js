import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import photo1 from '../../images/1.jpeg';


import karmen1 from '../../images/karmen/karmen1.jpg'
import karmen2 from '../../images/karmen/karmen2.jpg'
import karmen3 from '../../images/karmen/karmen3.jpg'
import karmen4 from '../../images/karmen/karmen4.jpg'
import karmen5 from '../../images/karmen/karmen5.jpg'
import karmen6 from '../../images/karmen/karmen6.jpg'
import karmen7 from '../../images/karmen/karmen7.jpg'
import karmen8 from '../../images/karmen/karmen8.jpg'
import karmen9 from '../../images/karmen/karmen9.jpg'
import karmen11 from '../../images/karmen/karmen11.jpg'
import karmen12 from '../../images/karmen/karmen12.jpg'
import karmen13 from '../../images/karmen/karmen13.jpg'
import karmen14 from '../../images/karmen/karmen14.jpg'
import karmen15 from '../../images/karmen/karmen15.jpg'


import Navbar from '../Navbar';
import Email from '../Email';
import Footer from '../Footer';


  const screenWidth = window.innerWidth>900;

const Karmen =() =>{

  return (  
    <div className='photos-container'>
          <Navbar />
    <Box className='photoslist-container p-16 pt-28 ' >
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
    img: karmen1,
    title: 'Bed',
  },
  {
    img:karmen2,
    title: 'Books',
  },
  {
    img: karmen3,
    title: 'Sink',
  },

  {
    img: karmen4,
    title: 'Blinds',
  }, {
    img:karmen5,
    title: 'Storage',
  },
  {
    img: karmen6,
    title: 'Chairs',
  },
  {
    img:karmen7,
    title: 'Laptop',
  },

  {
    img:karmen8,
    title: 'Coffee',
  },
 
  {
    img: karmen9,
    title: 'Candle',
  },
  {
    img: karmen11,
    title: 'Candle',
  },
  {
    img: karmen11,
    title: 'Candle',
  },
  {
    img: karmen12,
    title: 'Candle',
  },
  {
    img: karmen13,
    title: 'Bed',
  },
  {
    img: karmen14,
    title: 'Bed',
  },
  {
    img: karmen15,
    title: 'Bed',
  },
 

  
 
];


export default Karmen;