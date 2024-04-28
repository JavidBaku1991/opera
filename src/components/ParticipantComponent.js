import React from 'react'
import ParticipantItem from './ParticipantItem'
import azer from '../images/vokalistler/azer.jpg'
import gulnaz from '../images/vokalistler/gulnaz.jpg'
import samir from '../images/vokalistler/samir.jpg'
import ContactLine from './ContactLine'
import { Link } from 'react-router-dom'

function ParticipantComponent() {
  return (
    <div className='w-screen  bg-slate-600 p-10 bg-transparent '>
            <ContactLine title='İştirakçılar' />
            <br />
            <br />
    <ParticipantItem  src={azer} name='Azər Zeynalov' title='xalq artisti' about='Azər Zeynalov 1964-cü il dekabrın 13-də Naxçıvan şəhərində ziyalı ailəsində anadan olmuşdur. 1969-cu ildən Bakıda yaşayan Azər 1972-ci ildə 132 saylı orta məktəbə və 12 saylı musiqi məktəbinin fortepiano sinfinə getmişdir. 1982-ci ildə Azərbaycan Dövlət Mədəniyyət və İncəsənət Universitetinin dram rejissorluğu şöbəsinə daxil olmuş, arada 2 il hərbi xidmətə getmiş və 1989-cu ildə dram rejissoru ixtisası ilə təhsilini başa vurmuşdur. 1990-cı ildə musiqiyə olan sevgisi onu Rəşid Behbudov adına Dövlət Mahnı Teatrına gətirmiş və bir müğənni kimi o, ilk addımlarını bu teatrın səhnəsində atmışdır. ' />

    <ParticipantItem  src={gulnaz} name='Gülnaz İsmayılova' title='xalq artisti' about='2001-ci ildən Azərbaycan Dövlət Akademik Opera və Balet Teatrın solistidir.1985-ci ildən Azərbaycan Dövlət Konservatoriyasında müəllim vəzifəsində çalışır. 2000-ci ildən baş müəllimdir. 2007-ci ildən dosentidir. 2012-ci ildən Bakı Musiqi Akademiyasının professorudur.Hal-hazırda BMA-da “Solo oxuma” və “fortepiano”-dan dərs deyir. 2006-cı ildə Azərbaycan Respublikasının Əməkdar Artisti, 27 may 2018-ci ildə Azərbaycanın xalq artisti fəxri adına layiq görülmüşdür.'/>

    <ParticipantItem  src={samir} name='Samir Cəfərov' title='xalq artisti' about='19 noyabr 1976-cı ildə Naxçıvan MSSR, Babək rayonunun Nehrəm kəndində anadan olmuşdur. 1993–1997-ci illər ərzində Azərbaycan Dövlət Mədəniyyət və İncəsənət Universitetində teatr və kino sənəti ixtisası üzrə, 1999–2001-ci illərdə Bakı Musiqi Akademiyasında solo oxuma ixtisası üzrə təhsil almışdır. Azərbaycan Dövlət Akademik Opera və Balet Teatrın solistidir. 2001-ci ildə Almatında keçirilən Vokalçıların Beynalxalq Müsabiqəsinin laureatı olmuşdur. 2002-ci ildə Moskva şəhərində "Qalina Vişnevskayanın Opera Mərkəzi"ndə təhsil almışdır. 2017-ci ildə Gəncə Dövlət Filarmoniyasının direktoru təyin edilib.'/>
    <Link to='/participants'>
       <p className='w-40  glass h-10 flex justify-center pt-1 scaling' > <span>Digər İştirakçılar</span> </p>
 </Link>
    </div>
  )
}

export default ParticipantComponent