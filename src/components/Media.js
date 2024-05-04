import React, { useEffect, useState } from 'react';
import ContactLine from './ContactLine';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import MediaItem from './MediaItem';
import media1 from '../images/media1.jpg';
import esas from '../images/esas.png';
import media2 from '../images/media2.jpg';
import media4 from '../images/viva.png';
import inara from '../images/inara.jpg';
import { Link } from 'react-router-dom';

function Media() {

 
  return (
    <div className='h-screen w-screen flex flex-col justify-center align-middle  '>
      <ContactLine title='MEDİA XƏBƏRLƏRİ' />
      <div className='mt-6 flex justify-center align-middle'>
        <Splide
          aria-label='My Favorite Images'
          options={{
            width: '90%',
            height: 500,
            gap: '1rem',
            type: 'loop',
            drag: 'free',
            snap: true,
            perPage: 3,
            autoplay: true, 
            perMove: 1,
            lazyLoad: 'nearby',
            arrows: {
              prev: '<button class="splide__arrow splide__arrow--prev">jkl</button>',
              next: '<button class="splide__arrow splide__arrow--next">Next</button>',
            },
            breakpoints: {
              480:{
                perPage: 1,
  
              },
              730: {
                perPage: 2,
              },
              1200: {
                perPage: 3,
              },
            },
          }}
        >
          <SplideSlide>
            <Link to='https://www.azernews.az/culture/221321.html'>
              <MediaItem img={media1} title="People's Artist Fidan Hajiyeva: Baku to become one of world opera centers" date='6 February 2024 17:30 (UTC+04:00)' site='azernews' />
            </Link>
          </SplideSlide>
          <SplideSlide>
            <Link to='https://news.milli.az/culture/1195868.html'>
              <MediaItem img={inara} title="İnara Babayeva: 'Məhz, bu postulatlara diqqət yetirən ulduzumuz Fidan Hacıyeva festival keçirir'" date='9 Aprel 2024 17:27' site='news.milli.az' />
            </Link>
          </SplideSlide>
          <SplideSlide>
            <Link to='https://www.azernews.az/culture/220924.html'>
              <MediaItem img={esas} title="Baku to host Fidan Hajiyeva's First International  Opera Festival" date='28 January 2024 13:38 (UTC+04:00)' site='azernews' />
            </Link>
          </SplideSlide>
          <SplideSlide>
            <Link to='https://news.milli.az/culture/1197384.html'>
              <MediaItem img={media2} title="Fidan Hacıyeva Beynəlxalq Opera Festivalının proqramı təqdim olunub" date='17 Aprel 2024 13:09' site='news.milli.az' />
            </Link>
          </SplideSlide>
          <SplideSlide>
            <Link to='https://news.milli.az/culture/1178358.html'>
              <MediaItem img={media4} title="Azərbaycanda Fidan Hacıyevanın birincı Beynəlxalq Opera Festivalı keçiriləcək." date='26 Yanvar 2024 18:23' site='news.milli.az' />
            </Link>
          </SplideSlide>
          <SplideSlide>
            <Link to='https://azertag.az/xeber/fidan_haciyeva_beynelxalq_vokal_festivali_opera_musiqisi_dinlemek_isteyen_her_kesi_ehate_edecek-2796325'>
              <MediaItem img={media2} title="Fidan Hacıyeva: Beynəlxalq Vokal Festivalı opera musiqisi dinləmək istəyən hər kəsi əhatə edəcək." date='21.10.2023 [12:30]' site='news.milli.az' />
            </Link>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}

export default Media;
