import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import photo1 from '../images/1.jpeg';
import photo2 from '../images/2.jpeg'
import photo3 from '../images/3.jpeg'
import photo4 from '../images/4.jpeg'
import photo5 from '../images/5.jpeg'
import photo6 from '../images/6.jpeg'
import photo7 from '../images/7.jpeg'
import photo8 from '../images/8.jpeg'
import photo9 from '../images/9.jpeg'
import photo10 from '../images/10.jpeg'
import photo11 from '../images/11.jpeg'
import photo12 from '../images/12.jpeg'




  const screenWidth = window.innerWidth>900;

const ImageListContainer =() =>{
  return (
    <Box className='photoslist-container ' >
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

  );
}

const itemData = [
  {
    img: photo1,
    title: 'Bed',
  },
  {
    img:photo2,
    title: 'Books',
  },
  {
    img: photo3,
    title: 'Sink',
  },

  {
    img: photo4,
    title: 'Blinds',
  }, {
    img:photo5,
    title: 'Storage',
  },
  {
    img: photo6,
    title: 'Chairs',
  },
  {
    img:photo7,
    title: 'Laptop',
  },

  {
    img:photo8,
    title: 'Coffee',
  },
 
  {
    img: photo9,
    title: 'Candle',
  },
  {
    img: photo10,
    title: 'Candle',
  },
  {
    img: photo11,
    title: 'Candle',
  },
  {
    img: photo12,
    title: 'Candle',
  },
 
];


export default ImageListContainer;