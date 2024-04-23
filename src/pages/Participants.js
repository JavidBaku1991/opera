import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactLine from '../components/ContactLine'


// foto
import azer from '../images/vokalistler/azer.jpg'
import gulnaz from '../images/vokalistler/gulnaz.jpg'
import samir from '../images/vokalistler/samir.jpg'



import ParticipantsMainItem from '../components/ParticipantsMainItem'
import { Typography } from '@mui/material'


const azerP=<p>Azər Zeynalov 1964-cü il dekabrın 13-də Naxçıvan şəhərində ziyalı ailəsində anadan olmuşdur. 1969-cu ildən Bakıda yaşayan Azər 1972-ci ildə 132 saylı orta məktəbə və 12 saylı musiqi məktəbinin fortepiano sinfinə getmişdir. 1982-ci ildə Azərbaycan Dövlət Mədəniyyət və İncəsənət Universitetinin dram rejissorluğu şöbəsinə daxil olmuş, arada 2 il hərbi xidmətə getmiş və 1989-cu ildə dram rejissoru ixtisası ilə təhsilini başa vurmuşdur. 1990-cı ildə musiqiyə olan sevgisi onu Rəşid Behbudov adına Dövlət Mahnı Teatrına gətirmiş və bir müğənni kimi o, ilk addımlarını bu teatrın səhnəsində atmışdır. Bərabər olaraq Rafiq Babayevin 'Cəngi' ansamblında da fəaliyyət göstərmiş və həmin il 'Odlar Yurdu Bakı-90' mahnı müsabiqəsinin laureatı seçilmişdir. 1992-ci ildə 2-ci təhsil almaq üçün Bakı Musiqi Akademiyasının vokal şöbəsinə daxil olmuşdur. 1994-cü ildə İtaliyada qəbul imtahanı verərək 'Aqostino Steffani' adına (Kastelfranko Veneto şəhəri) İtaliya Dövlət Konservatoriyasının vokal şöbəsinə qəbul olmuş, orada dahi italyan müğənnisi Mario del Monakonun vaxtilə tələbəsi və asistenti olmuş professor Alemanno Osvaldodan 2 il vokal dərsi almış, 1996-cı ildə 'Opera ifaçısı' ixtisası ilə oranı bitirib Azərbaycana dönmüş və Bakı Musiqi Akademiyasında yarımçıq qalmış təhsilini də başa vurmuşdur. 1996-cı ildən Azərbaycan Dövlət Akademik Opera və Balet Teatrının solistidir. 'Liriko-dramatik tenor' səs tembrinə malik olan Azər Zeynalov Avropanın və Azərbaycanın klassik operalarında baş rolların ifaçısıdır. Azər Zeynalov tək opera ifaçısı kimi yox, həm də Azərbaycan bəstəkarlarının mahnı və romanslarını, oda və oratoriyalarını da ifa edir. Buna Emin Sabitoğlunun 'Şükriyyə', 'Gəncədən gəlirəm', Tofiq Quliyevin 'Bəxtəvər oldum', 'Azərbaycan' ('Bəxtiyar' filmindəki 'Rusiya'. Bu əsərin Azərbaycana həsr edilməsi ideyası və onun ilk ifası Azər Zeynalova məxsusdur və mahnının ikinci bəndi müğənninin atası şair Zeynal Vəfa tərəfindən qələmə alınıb), Rauf Hacıyevin 'Leyla' (sözləri öncədən rus dilində olan bu mahnıya ana dilində mətnin yazılması A.Zeynalovun təşəbbüsüdür), Ramiz Mirişlinin 'Vətən harayı, Ruhəngiz Qasımovanın 'Səninləyəm, Azərbaycan', Ramiz Mustafayevin 'Məhəmməd və Leyla', Vasif Adıgözəlovun 'Qəm karvanı', 'Təntənəli kantata', 'Çanaqqala', 'Qarabağ şikəstəsi', Mobil Babayevin 'Ölüm-qara qarışqa', Azər Dadaşovun 'Ana yurdu' odası, Siyavuş Kəriminin 'Ömrümün istəyi', 'Sənsizləmişəm', Sevil Əliyevanın 'Əziz anam' və s. bu kimi əsərləri misal çəkmək olar. Onun repertuarında xalq mahnıları da xüsusi yer tutur. 'Şükriyyə' adlanan ilk CD-albomu 1997-ci ildə Türkiyənin RAQS şirkəti tərəfindən işıq üzü görmüşdür. Öz ifası ilə xarici dövlətlərin böyük konsert salonlarında, o cümlədən İtaliya, Avstriya, İngiltərə, Fransa, İsveç, Almaniya, Çexiya, Hollandiya, Çin, Türkiyə, ŞKTR, Rusiya, Belarus, Moldova, Qaqauz, Ukrayna, Dağıstan, Gürcüstan, Tacikistan, Başqırdıstan, Qırğızıstan,Qazaxıstan, Tatarstan, Türkmənistan, Özbəkistan, Macarıstan, Hindistan, Albaniya, Mərakeş, Misir, Səudiyyə Ərəbistanı, Vyetnam, ABŞ, Kanada və s. ölkələrdə dəfələrlə çıxış etmişdir. 2007-ci ildə Azərbaycan zəvvarları ilə Həcc ziyarətində olmuşdur. Azər Zeynalov bir çox mükafatlara layiq görülmüşdür. 1995-ci ildə 'Avropa Türk-İslam Kültür Cəmiyyəti' tərəfindən qızıl medalla təltif olunmuşdur. Opera səhnəsində ifa etdiyi bir çox rollara görə müxtəlif mükafatlar almışdır. 1998-ci ildə birbaşa olaraq Azərbaycan Respublikasının Xalq artisti, 2008-ci ildə isə Dağıstan Respublikasının Xalq artisti fəxri adına layiq görülmüşdür.  2016-2017-ci tədris ilindən etibarən pedaqoji fəaliyyətini yalnız Azərbaycan Milli Konservatoriyasında davam etdirərək burada Milli vokal kafedrasına rəhbərlik edir. Azərbaycan Respublikası Prezidenti yanında Ali Attestasiya Komissiyası tərəfindən 2009-cu ildə ona Vokal kafedrası üzrə Dosent, 2013-cü ildə isə Professor elmi adı verilmişdir. 2008-ci ildən vokal ifaçılığının tədrisi üçün maqistr və bakalavr təhsil pilləsi üzrə bir çox fənnlərdən proqramlar tərtib etmişdir. Onun 2012-ci ildə çapdan çıxardığı 'Vokal ifaçılığı' kitabı Ali musiqi məktəblərində klassik opera-vokal ixtisası üzrə təhsil alan tələbələr üçün ana dilimizdə ilk dərslikdir. 2001-2003-cü illərdə, 2009, 2010, 2011, 2012, 2013-cü il, 30 aprel 2014-cü ildə, 6 may 2015-ci ildə[2], 6 may 2016-cı ildə, 1 may 2017-ci ildə, 9 may 2018-ci ildə, 10 may 2019-cu ildə, 7 may 2020-ci ildə, 7 may 2021-ci ildə, 10 may 2022-ci ildə[9] və 6 may 2023-cü ildə[10] Prezident Mükafatına layiq görülmüşdür.Azərbaycanın dahi mütəfəkkiri Nəsrəddin Tusinin nəslindəndir. Ailəlidir. Dörd övladı var.

Şair, publisist Zeynal Vəfanın oğludur.</p>

export default function Participants() {
  return (
    <div className='participants-main-container flex flex-col'>
      <Navbar />
        <br/>
        <br/>
        <br/>
      <ContactLine title='Bütün iştirakçılar'/>
          <div className='m-20 flex flex-col '>
                    <ParticipantsMainItem  name='AZƏR ZEYNALOV' title='xalq artisti' src={azer} about={azerP} />
                    <ParticipantsMainItem  name='SAMİR CƏFƏROV' title='xalq artisti' src={samir} about={azerP} />
                    <ParticipantsMainItem  name='GÜLNAZ İSMAYILOVA' title='xalq artisti' src={gulnaz} about={azerP} />
                    <ParticipantsMainItem  name='AZƏR ZEYNALOV' title='xalq artisti' src={azer} about={azerP} />
                    <ParticipantsMainItem  name='AZƏR ZEYNALOV' title='xalq artisti' src={azer} about={azerP} />
                    <ParticipantsMainItem  name='AZƏR ZEYNALOV' title='xalq artisti' src={azer} about={azerP} />
                    <ParticipantsMainItem  name='AZƏR ZEYNALOV' title='xalq artisti' src={azer} about={azerP} />

          </div>
      <Footer />
    </div>
  )
}
