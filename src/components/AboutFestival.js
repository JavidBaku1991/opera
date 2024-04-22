import React from 'react'
import karmen from '../images/uzunkarmen.jpg'
import FramerMotion from '../customHooks/FramerMotion'

function AboutFestival() {
  return (
    <div className='festival-container p-10'>
            <img  src={karmen} className='w-7/8  mt-10 karmen' />
 <FramerMotion  duration={{ duration: 1 }}
            move={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}>
            <h1 className='ml-10 mt-10 festival-title'>FESTiVAL HAQQINDA</h1>
           
                     <p className='m-10 mail-sol p-2 festival-text' >Aprelin 27-dən mayın 3-dək Azərbaycan Mədəniyyət Nazirliyi və Dövlət Opera və Balet Teatrının dəstəyi, Xalq Artisti Fidan Hacıyevanın Musiqili Vokal Məktəbinin təşkilatçılığı ilə Fidan Hacıyeva adına I Beynəlxalq Opera Festivalı keçiriləcək.

Genişmiqyaslı festivalın keçirilməsi klassik sənətsevərlər üçün böyük musiqi bayramı olacaq. Yeddi gün ərzində müxtəlif konsert məkanlarında Azərbaycan klassiklərinin və dünya bəstəkarlarının əsərləri təqdim olunacaq. Layihənin əsas məqsədi Azərbaycanda klassik musiqinin təbliği və inkişafı, opera sahəsində yeni istedadların üzə çıxarılması və dəstəklənməsidir.

Festivalın hörmətli qonaqları arasında dünya şöhrətli müğənnilər, dirijorlar və bəstəkarlar, o cümlədən Bavariya İmmling Opera Festivalının bədii rəhbəri və baş dirijoru Cornelia von Kerssenbrock (Almaniya), Cemal Reşit Rey konsert mərkəzinin direktoru Murat Cem Orhan (Türkiyə), görkəmli opera baritonu, italyan soprano Ripalto Bufa, gürcü bas Giorgi Çelidze və s.

Azərbaycandan - Xalq artistləri Gülnaz İsmayılova, Samir Cəfərov, Azər Zeynalov, əməkdar artistlər Ramil Qasımov, Fərid Əliyev, Anar Şuşalı, Fəridə Məmmədova, Anton Verstandt, Cahangir Qurbanov, İlahə Əfəndiyeva, İnarə Babayeva, Afaq Abbasova, Tural Ağasıyev, beynəlxalq müsabiqə laureatları Taleh Yaxyayev, Mahir Tağızadə, Atəş Qarayev, MEZZO qadın kamera orkestri və b.

Hörmətlə, Festivalın müəllifi və direktoru, Azərbaycanın xalq artisti Fidan Hacıyeva

</p>
            </FramerMotion>
     
    </div>
  )
}

export default AboutFestival