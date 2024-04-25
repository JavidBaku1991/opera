import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import men1 from '../images/uzunkarmen.jpg'
import men2 from '../images/bag.jpg'
import men4 from '../images/klassik.png'
import men6 from '../images/media2.jpg'
import men7 from '../images/genc.png'
import men8 from '../images/gence.png'
import men9 from '../images/gencefilar.jpg'
import men10 from '../images/genceopera.png'
import men11 from '../images/media1.jpg'
import men12 from '../images/viva1.jpg'




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
    img: men1,
    title: 'Bed',
  },
  {
    img:men2,
    title: 'Books',
  },
  {
    img: men4,
    title: 'Sink',
  },

  {
    img: men6,
    title: 'Blinds',
  }, {
    img:men9,
    title: 'Storage',
  },
  {
    img: men7,
    title: 'Chairs',
  },
  {
    img:men8,
    title: 'Laptop',
  },

  {
    img:men10,
    title: 'Coffee',
  },
 
  {
    img: men12,
    title: 'Candle',
  },
  {
    img: men11,
    title: 'Candle',
  },
 
];


export default ImageListContainer;