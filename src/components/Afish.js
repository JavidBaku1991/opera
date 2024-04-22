import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';

import esas from  '../images/esas.png';
import genc from  '../images/genc.png';
import gence from  '../images/gence.png';
import genceopera from  '../images/genceopera.png';
import klassik from  '../images/klassik.png';
import tedbirler from  '../images/tedbirler.png';
import varisler from  '../images/varisler.png';
import viva from  '../images/viva.png';
import viva1 from  '../images/viva1.jpg';
import { height, margin } from '@mui/system';

function Afish() {
  return (
    <div className='afish-container flex flex-col'>
     <h2 className=' mx-auto font-bold text-4xl text-white mt-8'>Afişalarımız</h2>
     <div className='flex justify-center align-center  pt-2 pb-2 '>
      
      <Splide aria-label="My Favorite Images"
        options={{
          // rewind: true,
          width: 1100,
          height:550,
          margin:'20px',
          gap: '1rem',
          type: 'loop',
          drag: 'free',
          snap: true,
          perPage: 3,
          perMove: 1,
          lazyLoad: 'nearby',
          arrows: {
            prev: '<button class="splide__arrow splide__arrow--prev">jkl</button>',
            next: '<button class="splide__arrow splide__arrow--next">Next</button>',
          },
        }}
      >
        <SplideSlide>
          <img className='slider-image' src={genc} alt="1" style={{ height: '400px',width:'300px',marginLeft:'28px'}}  />
        </SplideSlide>
        <SplideSlide>
          <img className='slider-image' src={viva1} alt="2" style={{ height: '400px',width:'300px' ,marginLeft:'28px' }} />
        </SplideSlide>
        <SplideSlide>
          <img className='slider-image' src={tedbirler} alt="3" style={{ height: '400px',width:'300px',marginLeft:'28px'  }} />
        </SplideSlide>
        <SplideSlide>
          <img className='slider-image' src={genceopera} alt="4" style={{ height: '400px',width:'300px'  ,marginLeft:'28px'}} />
        </SplideSlide>
        <SplideSlide>
          <img className='slider-image' src={klassik} alt="5" style={{ height: '400px',width:'300px' ,marginLeft:'28px' }} />
        </SplideSlide>
        <SplideSlide>
          <img className='slider-image' src={gence} alt="Image 6" style={{ height: '400px',width:'300px' ,marginLeft:'28px' }} />
        </SplideSlide>
        <SplideSlide>
          <img className='slider-image' src={varisler} alt="Image 7" style={{ height: '400px',width:'300px' ,marginLeft:'28px' }} />
        </SplideSlide>
        <SplideSlide>
          <img className='slider-image' src={viva} alt="Image 8" style={{ height: '400px',width:'300px' ,marginLeft:'28px' }} />
        </SplideSlide>
        <SplideSlide>
          <img className='slider-image' src={esas} alt="Image 8" style={{ height: '400px',width:'300px' ,marginLeft:'28px' }} />
        </SplideSlide>
        <SplideSlide>
          <img className='slider-image' src={esas} alt="Image 9" style={{ height: '400px',width:'300px' ,marginLeft:'28px' }} />
        </SplideSlide>
      </Splide>
    </div>
    </div>
   
  );
}

export default Afish;
