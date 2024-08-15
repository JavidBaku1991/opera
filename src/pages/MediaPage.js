import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import * as React from 'react';
import { Link } from 'react-router-dom';
import MediaPageItem from '../components/MediaİtemPage';
import ContactLine from '../components/ContactLine';

import xeber1 from '../images/karmen/karmen12.jpg'
import xeber2 from '../images/xeberler/xeber2.jpg'
import xeber3 from '../images/karmen/karmen1.jpg'
import xeber4 from '../images/final/66.JPG'
import xeber5 from '../images/xeberler/xeber5.jpg'
import xeber6 from '../images/xeberler/xeber6.jpg'
import xeber7 from '../images/xeberler/xeber7.png'

function MadiaPage() {
  return (
    <div>
      <Navbar />
      <div className="media-page w-screen overflow-y-scroll">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          <Link to="https://azertag.az/xeber/fidan_haciyeva_beynelxalq_vokal_festivali_opera_musiqisi_dinlemek_isteyen_her_kesi_ehate_edecek-2796325" className="flex">
            <MediaPageItem src={xeber1} title="Fidan Hacıyeva: Beynəlxalq Vokal Festivalı opera musiqisi dinləmək istəyən hər kəsi əhatə edəcək." date="21.10.2023 [12:30]" site="news.milli.az" />
          </Link>
          <Link to="https://www.azernews.az/culture/225837.html" className="flex">
            <MediaPageItem src={xeber2} title="Foreign opera stars hail Fidan Hajiyeva's First Int'l Opera Festival" date="10 May 2024 13:33" site="azernews" />
          </Link>
          <Link to="https://news.day.az/culture/1659011.html" className="flex">
            <MediaPageItem src={xeber3} title="Международном оперном фестивале Фидан Гаджиевой." date=" 9 мая 2024 19:43 " site="news.day.az" />
          </Link>
          <Link to="https://www.trend.az/life/culture/3897409.html" className="flex">
            <MediaPageItem src={xeber2} title="Зарубежные звезды поделились впечатлениями о первом Международном оперном фестивале Фидан Гаджиевой" date="9 мая 2024 19:18" site="trend.az" />
          </Link>
          <Link to="https://turkic.world/ru/articles/culture/236774" className="flex">
            <MediaPageItem src={xeber4} title="Феерическое завершение Международного оперного фестиваля Фидан Гаджиевой! Гала-вечер с участием звезд Viva-Opera" date="6 мая 12:25" site="turkic.world" />
          </Link>
          <Link to="https://www.azernews.az/culture/225604.html" className="flex">
            <MediaPageItem src={xeber1} title="Fidan Hajiyeva's First Int'l Opera Festival wraps up" date="21.10.2023 [12:30]" site="azrnews.az" />
          </Link>
          <Link to="https://news.milli.az/culture/1201860.html" className="flex">
            <MediaPageItem src={xeber4} title="Fidan Hacıyevanın Beynəlxalq Opera Festivalı möhtəşəm başa çatdı! Viva-Opera ulduzlarının iştirakı ilə qala gecəsi" date="5 May 2024 18:25" site="news.milli.az" />
          </Link>
          <Link to="https://turkic.world/az/articles/culture/236277" className="flex">
            <MediaPageItem src={xeber5} title="Fidan Hacıyevanın Gəncə Dövlət Filarmonıyasında konsert baş tutub" date="4 May 14:32" site="turkic.world" />
          </Link>
          <Link to="https://www.azernews.az/culture/225512.html" className="flex">
            <MediaPageItem src={xeber6} title="Classical music concert in Baku gathers world opera stars" date="3 May 2024 15:50" site="azernews.az" />
          </Link>
          <Link to="https://news.day.az/culture/1657368.html" className="flex">
            <MediaPageItem src={xeber7} title="Вечер классической музыки в Баку с зарубежными звездами оперного искусства" date="23 мая 2024 14:09" site="news.day.az" />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MadiaPage;
