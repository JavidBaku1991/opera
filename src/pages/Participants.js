import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactLine from '../components/ContactLine'


// foto
import azer from '../images/vokalistler/azer.jpg'
import gulnaz from '../images/vokalistler/gulnaz.jpg'
import samir from '../images/vokalistler/samir.jpg'
import fidan from '../images/media2.jpg';
import ferid from '../images/vokalistler/ferid.jpg'
import ramil from '../images/vokalistler/ramil.jpg'
import inare from '../images/vokalistler/inara.jpg'
import anton from '../images/vokalistler/anton.jpg'
import feride from '../images/vokalistler/feride.jpg'
import anar from '../images/vokalistler/anar.jpg'


import ParticipantsMainItem from '../components/ParticipantsMainItem'
import { Typography } from '@mui/material'
import Email from '../components/Email'


const azerP= <p> Azər Zeynalov 1964-cü il dekabrın 13-də Naxçıvan şəhərində ziyalı ailəsində anadan olmuşdur. 1969-cu ildən Bakıda yaşayan Azər 1972-ci ildə 132 saylı orta məktəbə və 12 saylı musiqi məktəbinin fortepiano sinfinə getmişdir. 1982-ci ildə Azərbaycan Dövlət Mədəniyyət və İncəsənət Universitetinin dram rejissorluğu şöbəsinə daxil olmuş, arada 2 il hərbi xidmətə getmiş və 1989-cu ildə dram rejissoru ixtisası ilə təhsilini başa vurmuşdur. 1990-cı ildə musiqiyə olan sevgisi onu Rəşid Behbudov adına Dövlət Mahnı Teatrına gətirmiş və bir müğənni kimi o, ilk addımlarını bu teatrın səhnəsində atmışdır. Bərabər olaraq Rafiq Babayevin 'Cəngi' ansamblında da fəaliyyət göstərmiş və həmin il 'Odlar Yurdu Bakı-90' mahnı müsabiqəsinin laureatı seçilmişdir. 1992-ci ildə 2-ci təhsil almaq üçün Bakı Musiqi Akademiyasının vokal şöbəsinə daxil olmuşdur. 1994-cü ildə İtaliyada qəbul imtahanı verərək 'Aqostino Steffani' adına (Kastelfranko Veneto şəhəri) İtaliya Dövlət Konservatoriyasının vokal şöbəsinə qəbul olmuş, orada dahi italyan müğənnisi Mario del Monakonun vaxtilə tələbəsi və asistenti olmuş professor Alemanno Osvaldodan 2 il vokal dərsi almış, 1996-cı ildə 'Opera ifaçısı' ixtisası ilə oranı bitirib Azərbaycana dönmüş və Bakı Musiqi Akademiyasında yarımçıq qalmış təhsilini də başa vurmuşdur. 1996-cı ildən Azərbaycan Dövlət Akademik Opera və Balet Teatrının solistidir. 'Liriko-dramatik tenor' səs tembrinə malik olan Azər Zeynalov Avropanın və Azərbaycanın klassik operalarında baş rolların ifaçısıdır. Azər Zeynalov tək opera ifaçısı kimi yox, həm də Azərbaycan bəstəkarlarının mahnı və romanslarını, oda və oratoriyalarını da ifa edir. Buna Emin Sabitoğlunun 'Şükriyyə', 'Gəncədən gəlirəm', Tofiq Quliyevin 'Bəxtəvər oldum', 'Azərbaycan' ('Bəxtiyar' filmindəki 'Rusiya'. Bu əsərin Azərbaycana həsr edilməsi ideyası və onun ilk ifası Azər Zeynalova məxsusdur və mahnının ikinci bəndi müğənninin atası şair Zeynal Vəfa tərəfindən qələmə alınıb), Rauf Hacıyevin 'Leyla' (sözləri öncədən rus dilində olan bu mahnıya ana dilində mətnin yazılması A.Zeynalovun təşəbbüsüdür), Ramiz Mirişlinin 'Vətən harayı, Ruhəngiz Qasımovanın 'Səninləyəm, Azərbaycan', Ramiz Mustafayevin 'Məhəmməd və Leyla', Vasif Adıgözəlovun 'Qəm karvanı', 'Təntənəli kantata', 'Çanaqqala', 'Qarabağ şikəstəsi', Mobil Babayevin 'Ölüm-qara qarışqa', Azər Dadaşovun 'Ana yurdu' odası, Siyavuş Kəriminin 'Ömrümün istəyi', 'Sənsizləmişəm', Sevil Əliyevanın 'Əziz anam' və s. bu kimi əsərləri misal çəkmək olar. Onun repertuarında xalq mahnıları da xüsusi yer tutur. 'Şükriyyə' adlanan ilk CD-albomu 1997-ci ildə Türkiyənin RAQS şirkəti tərəfindən işıq üzü görmüşdür. Öz ifası ilə xarici dövlətlərin böyük konsert salonlarında, o cümlədən İtaliya, Avstriya, İngiltərə, Fransa, İsveç, Almaniya, Çexiya, Hollandiya, Çin, Türkiyə, ŞKTR, Rusiya, Belarus, Moldova, Qaqauz, Ukrayna, Dağıstan, Gürcüstan, Tacikistan, Başqırdıstan, Qırğızıstan,Qazaxıstan, Tatarstan, Türkmənistan, Özbəkistan, Macarıstan, Hindistan, Albaniya, Mərakeş, Misir, Səudiyyə Ərəbistanı, Vyetnam, ABŞ, Kanada və s. ölkələrdə dəfələrlə çıxış etmişdir. 2007-ci ildə Azərbaycan zəvvarları ilə Həcc ziyarətində olmuşdur. Azər Zeynalov bir çox mükafatlara layiq görülmüşdür. 1995-ci ildə 'Avropa Türk-İslam Kültür Cəmiyyəti' tərəfindən qızıl medalla təltif olunmuşdur. Opera səhnəsində ifa etdiyi bir çox rollara görə müxtəlif mükafatlar almışdır. 1998-ci ildə birbaşa olaraq Azərbaycan Respublikasının Xalq artisti, 2008-ci ildə isə Dağıstan Respublikasının Xalq artisti fəxri adına layiq görülmüşdür.  2016-2017-ci tədris ilindən etibarən pedaqoji fəaliyyətini yalnız Azərbaycan Milli Konservatoriyasında davam etdirərək burada Milli vokal kafedrasına rəhbərlik edir. Azərbaycan Respublikası Prezidenti yanında Ali Attestasiya Komissiyası tərəfindən 2009-cu ildə ona Vokal kafedrası üzrə Dosent, 2013-cü ildə isə Professor elmi adı verilmişdir. 2008-ci ildən vokal ifaçılığının tədrisi üçün maqistr və bakalavr təhsil pilləsi üzrə bir çox fənnlərdən proqramlar tərtib etmişdir. Onun 2012-ci ildə çapdan çıxardığı 'Vokal ifaçılığı' kitabı Ali musiqi məktəblərində klassik opera-vokal ixtisası üzrə təhsil alan tələbələr üçün ana dilimizdə ilk dərslikdir. 2001-2003-cü illərdə, 2009, 2010, 2011, 2012, 2013-cü il, 30 aprel 2014-cü ildə, 6 may 2015-ci ildə[2], 6 may 2016-cı ildə, 1 may 2017-ci ildə, 9 may 2018-ci ildə, 10 may 2019-cu ildə, 7 may 2020-ci ildə, 7 may 2021-ci ildə, 10 may 2022-ci ildə[9] və 6 may 2023-cü ildə[10] Prezident Mükafatına layiq görülmüşdür.Azərbaycanın dahi mütəfəkkiri Nəsrəddin Tusinin nəslindəndir. Ailəlidir. Dörd övladı var.Şair, publisist Zeynal Vəfanın oğludur. </p>


const samirP = <p>19 noyabr 1976-cı ildə Naxçıvan MSSR, Babək rayonunun Nehrəm kəndində anadan olmuşdur. 1993–1997-ci illər ərzində Azərbaycan Dövlət Mədəniyyət və İncəsənət Universitetində teatr və kino sənəti ixtisası üzrə, 1999–2001-ci illərdə Bakı Musiqi Akademiyasında solo oxuma ixtisası üzrə təhsil almışdır. Azərbaycan Dövlət Akademik Opera və Balet Teatrın solistidir.
Ü. Hacıbəylinin "Koroğlu" operasında Koroğlu, Cüzeppe Verdinin "Traviata" operasında Alfred və "Riqoletto"da Hersoq partiyalarını ifa edir.
2001-ci ildə Almatında keçirilən Vokalçıların Beynalxalq Müsabiqəsinin laureatı olmuşdur . 2002-ci ildə Moskva şəhərində "Qalina Vişnevskayanın Opera Mərkəzi"ndə təhsil almışdır.
Repertuarında Avropa və Azərbaycan bəstəkarlarının operalarının aparici partiyaları, habelə mahnı və romanslar təmsil olunmuşdur.
Rusiya, İspaniya və s. ölkələrdə qastrol səfərlərində olmuşdur.
2007-ci ildə S. Cəfərov Azərbaycan Respublikasının Əməkdar Artisti fəxri adına layiq görülmüşdür. 30 aprel 2014-cü ildə,[2] 6 may 2015-ci ildə, 6 may 2016-cı ildə, 1 may 2017-ci ildə, 9 may 2018-ci ildə, 10 may 2019-cu ildə, 7 may 2020-ci ildə, 7 may 2021-ci ildə, 10 may 2022-ci ildə və 6 may 2023-cü ildə Prezident Mükafatına layiq görülmüşdür.
2017-ci ildə Gəncə Dövlət Filarmoniyasının direktoru təyin edilib.</p>

const gulnazP=<p>2001-ci ildən Azərbaycan Dövlət Akademik Opera və Balet Teatrın solistidir.1985-ci ildən Azərbaycan Dövlət Konservatoriyasında müəllim vəzifəsində çalışır. 2000-ci ildən baş müəllimdir. 2007-ci ildən dosentidir. 2012-ci ildən Bakı Musiqi Akademiyasının professorudur.Hal-hazırda BMA-da “Solo oxuma” və “fortepiano”-dan dərs deyir. 2006-cı ildə Azərbaycan Respublikasının Əməkdar Artisti, 27 may 2018-ci ildə Azərbaycanın xalq artisti fəxri adına layiq görülmüşdür.</p>

const fidanP=<p>Fidan Hacı Ağa qızı Hacıyeva-Neylor — Azərbaycan Respublikasının xalq artisti (05.03.2015), Azərbaycan Dövlət Akademik Opera və Balet Teatrının solisti, opera müğənnisi, mezzo-soprano.Professor Hüseyn Əliyevin tələbəsidir. 1996-cı ildən Azərbaycan Dövlət Akademik Opera və Balet Teatrının solistidir. 2000-ci ildə Türkiyədəki "Aspendos" antik teatrının səhnəsində açıq səma altında, 12 min tamaşaçı qarşısında çıxış etmişdir. 2002-ci ildə İtaliyanın Kidjiano Akademiyasında keçirilən Beynəlxalq müsabiqənin qalibidir. 2006-cı ildə "Azərbaycan Respublikasının Əməkdar Artisti" adına layiq görülmüş və 2006, 2007, 2008-ci illərdə Azərbaycan Respublikası Prezidentinin Fəxri mükafatı ilə təltif olunmuşdur. 2010-cu ildə İtaliyada, Roma Musiqi Akademiyasının "Peşəkar vokal ifaçılarının müsabiqəsi"qalibidir. 2012-ci ildə İtaliyanın Berqamo şəhərində yerləşən Donisetti adına teatrında təşkil edilmiş "Gran Gala" konsertində klassik italyan musiqisinin təbliğindəki xidmətinə görə "Sülhməramlı səfir" diplomu ilə təltif olunub. 2015-ci ildə Azərbaycan Respublikasında mədəniyyət sahəsində səmərəli fəaliyyətinə görə 8 Mart Beynəlxalq Qadınlar Günü münasibətilə "Xalq artisti" adına layiq görülüb. 2016-cı ildə öz adını daşıyan, Musiqi Mərkəzini yaradıb. Milli səhnəmizdə klassik dünya operalarında lirik-qəhrəman partiyalarını oxuyan ilk "Karmen" ifaçısı Fatma Muxtarovadan sonra ikinci Azərbaycan opera səhnəsinin "Karmen"i adlandırlır.</p>


const ramilP = <p>
  Ramil Adıgözəl oğlu Qasımov 10 dekabr 1984-cü ildə Bakı şəhərində anadan olmuşdur. Ramil Qasımov peşəkar səhnə fəaliyyətinə 1999-cu ildə Azərbaycan Dövlət Akademik Musiqili teatrında teatrın aparıcı solisti kimi başlamışdır. 2011-ci ilə qədər onlarla tamaşada baş rollarda çıxış etmişdir. Paralel olaraq, 2004-cü ildən Azərbaycan Televiziya və Radio verilişləri Qapalı Səhmdar Cəmiyyətinin Cahangir Cahangirov adına xorun solisti kimi fəaliyyətə başlamışdır. Ramil Qasımov ali təhsilini Azərbaycan Dövlət Mədəniyyət və İncəsənət Universitetini opera və kamera ifaçısı, musiqişünaslıq ixtisası üzrə bitirdikdən sonra Gürcüstan Respublikasında Musiqi Akademiyasını vokal ixtisası üzrə magistr pilləsində təhsilini davam etdirmişdir. Eyni zamanda, ikinci təhsil olaraq Azərbaycan Respublikası Prezidenti yanında Dövlət İdarəçilik Akademiyasının Politologiya fakültəsinin Siyasi idarəetmə ixtisasını bitirmişdir.

Ramil Qasımov ilk opera tamaşasında iştirakı, 2010-cu ildə Firəngiz Əlizadə və Nərgiz Paşayevanın "İntizar" operası ilə olmuşdur. O, 2011-ci ildə Azərbaycan Dövlət Akademik Opera və Balet Teatrında tamaşaya qoyulmuş Üzeyir Hacıbəyovun "Koroğlu" əsərində baş qəhrəman olan "Koroğlu" rolu ilə debüt etmişdir. Ramil Qasımov dünyanın bir çox ölkələrində keçirilən beynəlxalq musiqi festivallarında, müsabiqələrdə Azərbaycanı təmsil etmiş və beynəlxalq müsabiqələr laureatı olmuşdur. İfaçının repertuarında xalq mahnıları, romanslar, bəstəkar mahnıları ilə yanaşı Azərbaycan, italyan, ispan, fransız, ingilis, türk və rus klassiklərinin əsərləri yer alır. Ramil Qasımov eyni zamanda dirijor olaraq də fəaliyyət göstərmişdir. O, dirijor kimi 2017-ci ildə keçirilən Üzeyir Hacıbəyli Beynalxalq musiqi festivalında dünya və Azərbaycan klassik nümunələrini orkestrin müşayiəti ilə dirijorluq etmişdir.
</p>

const feridP =<p>
  Fərid Əliyev 29 mart 1975-ci ildə Bakı şəhərində anadan olmuşdur. 1994-cü ildə Ə.Əzimzadə adına Rəssamlıq məktəbini bitirmiş və həmin ildə Azərbaycan Dövlət Mədəniyyət və İncəsənət Universitetinin dizayn fakültəsinə daxil olmuşdur.

Bakı Musiqi Akademiyasıda təhsil alıb, lirik-tenor səsə malikdir.

1999-cu ildən Azərbaycan Dövlət Musiqili Komediya Teatrının solistidir.

İşlədiyi müddət ərzində "Vesyolaya vdova", "Maritsa", "Tsıqan premyer", "Silva", "Neistovıy Qasqonets", "Talelər qovuşanda", "Volqalı canan", "Aldın payını, çağır dayını", "O olmasın, bu olsun" kimi tamaşalarda yadda qalan obrazlar yaratmışdır.

Eyni zamanda Azərbaycan Dövlət Akademik Opera və Balet Teatrında "Natəvan" operasında Hacı Abbas Ağa, "Şah İsmayıl" operasında Vəzir, "Koroğlu" operasında Koroğlunun[1] və Həmzə bəyin partiyalarını ifa edir.

F. Əliyev Bakı Musiqi Akademiyasının Ş. Məmmədova adına Opera studiyasının solistidir. Orada "Boqema" operasında Rudolf, "Traviata" operasında Alferd, "Kənd namusu" operasında Turiddu, "Faust" operasında Faust, "Yevgeni Onegin" operasında Lenski rpartiyalarını ifa etmişdir.

2004-cü ildə Bakı Musiqi Akademiyasının magistr dərəcəsini almışdır. 2008-ci ildən Xəzər Universiteti Musiqi və İncəsənət departamentində vokal müəllimi vəzifəsində çalışır.

Bir neçə dövlət tədbir və konsertlərinin iştirakçısıdır.

Evlidir, iki övladı var.

6 may 2015-ci ildə, 6 may 2016-cı ildə, 1 may 2017-ci ildə[4] və 9 may 2018-ci ildə Prezident Mükafatına layiq görülmüşdür.

</p>


const inareP =<p>
  İnarə Əhməd qızı Babayeva 1977-ci il Aprel ayının 14 Bakı şəhərində anadan olmuşdur.[1]. 1996-2002-cü illərdə Üzeyr Hacıbəyli adına Bakı Musiqi Akademiyasının solo oxuma fakültəsində ali təhsil almış və Akademiyanı magistratura pilləsi üzrə 2005 ci ildə isə akademiyanın Asperanturasını fərqlənmə ilə bitirmişdir.Opera və  kamera ifaçısı,vokal müəllimi,ixtisası üzrə bitirmişdir.İnarə Babayeva akademiyada təhsil aldığı müddət ərzində, 1999- cu ildən Azərbaycan Akademik Musiqili teatrın aparıcı solisti kimi fəaliyyətə başlayır. İnarə Babayeva 2006 cı ildən Mədəniyyət və İncəsənət Universiteti vokal müasir estrada ifaçılığı fakültəsinin müəllimi 2013 cü ildən baş müəllimi,2019- cu ildən isə Kafedaranın dosentidir.O,vokal müasir estrada ifaçılığına aid 5 məqalənin, Azərbaycan vokal Nümunələri Soprano səsi üçün “Antaloğiya” kitabının müəllifidir. İnarə Babayeva 2ci təhsil olaraq 2014 cü ildə Mədəniyyət və İncəsənət Universitetinin rejissorluq fakültəsinə daxil olur elə həmin ildə Akademik opera və Balet Teatrının səhnəsində dünya klassik opera inciləri sırasında olan, Perqolezinin “Qulluqçu- xanım” operasına quruluş vermişdir. 2018- ci ildə müvəfəqiyyətlə 2 təhsilini başa vuran İ.Babayeva Heydər Əliyev sarayında Azərbaycanda ilk, dəfə Mədəniyyət kanalının təşkilatçılığı ilə,keçirilən uşaq müziklin “Ələddin”tamaşasına quruluş verir. Paralel olaraq, İ.Babayeva 2016 cı ildən Azərbaycan Televiziya və Radionun solistidir.Onun ifasında,dünya və Azərbaycan  klasssik musiqi inciləri Televiziyanın musiqi kollektivlərinin müşayiəti  ilə, lentə alınaraq,radionun qızıl fondunda saxlanılır.
</p>

const antonP=<p>
  Anton Sergeyeviç Ferştandt 1983-cü ildə Bakıda anadan olub. 2004-cü ildə Bakı Musiqi Akademiyasında təhsil alıb. Daha sonra Azərbaycan Dövlət Akademik Opera və Balet Teatrında (2001-2016), Azərbaycan Dövlət Musiqili Komediya Teatrında (2016-2018) çalışıb. Hazırda Azərbaycan Dövlət Filarmoniyasının əməkdaşıdır. Bariton səsli vokalistdir.[1] 2015-ci ildə Azərbaycan Respublikasının əməkdar artisti adına layiq görülüb
</p>

const ferideP =<p>
  Fəridə Məmmədova (soprano) Bakı şəhərində anadan olub. 1994-cü ildə Bülbül adına orta ixtisas musiqi məktəbini bitirib. 1994–2000-ci illərdə Üzeyir Hacıbəyov adına Bakı Musiqi Akademiyasının fortepiano və solo oxuma fakültələrində təhsil alıb. 1997-ci ildən Azərbaycan Dövlət Akademik Opera və Balet Teatrında solist-vokalçı vəzifəsində çalışır.

1997-ci ildə Azərbaycanda vokalçıların "İlin vokalçısı" müsabiqəsində I mükafata, 2000-ci ildə Vokalçıların Bülbül adına II Beynəlxalq müsabiqəsində III mükafata layiq görülmüşdür. 2007-ci ildə Almaniyanın Veyden şəhərində keçirilən Maks Reger adına Beynəlxalq müsabiqənin finalçısıdır.  F. Məmmədova ölkədə və onun hüdüdlarından kənarda (Almaniya, Fransa, İsveçrə, Avstriya, Hollandiya, Belçika, Çexiya, Bosniya, Serbiya, Türkiyə, Rusiya, Ukrayna, Gürcüstan, Qazaxıstan, Qırğızıstan, Monqolustan və s.) solo konsert proqramları ilə çıxış edib, tanınmış Azərbaycan və xarici dirijorların rəhbərliyi altında müxtəlif orkestrərlə (Ü. Hacıbəyli adına Azərbaycan Dövlət simfonik orkestri, Q. Qarayev adına Azərbaycan Dövlət kamera orkestri, Vyana kamera orkestri, Yerusəlim simfonik orkestri, Yohannesburq simfonik orkestri, "Raana Symphonietta", "Studio for the New Music", "Asco-Schoenberg ensemble", "Reconsil", "Georgian Sinfonietta" və s.) əməkdaşlıq və nüfuzlu beynəlxalq festival və layihələrdə (Young-euro-classic, Bethovenfest, Culturescapes, Kyiv Music Fest, Vilnius Mama jazz, Aspendos festivalı, Türksoy Opera günləri, Moskvada Musiqi alətlər teatrı, Prokofyev FEST, Həştərxanda V. Barsova və M. Maksakova adına Opera festivalı, Roaring hooves, "Sarajevo winter", International Baroque Festival Tbilisi və s., Azərbaycanda keçirilən Beynəlxaıq Qəbələ festivalında, Qara Qarayev müasir musiqi, M. Rostropoviç adına, Üzeyir Hacıbəyli adına, "Zamanla üz-üzə", "İpək yolu") iştiraki onu yüksək səviyyəli və yenilliklərə açıq bir musiqiçi kimi təsdiqləyib.


</p>


const anarP = <p>
    Anar Şuşalı (Hüseynli) 12 iyul 1978-ci ildə Şuşa şəhərində anadan olmuşdur. 1984-cü ildə Şuşa şəhər 1 saylı orta məktəbə, 1989-cu ildə isə Şuşa musiqi məktəbinin tar sinfinə daxil olmuşdur. 1992-ci ilin may ayında Şuşa şəhərinin ermənilər tərəfindən işğalı ilə əlaqədar məcburi köçkün kimi Bakı şəhərində məskunlaşmışdır. 1994-cü ildə Bakı şəhərindəki 36 saylı musiqi məktəbinin tar sinfini, 1995-ci ildə isə Bakı şəhərindəki 13 saylı Şuşa orta məktəbini bitirmişdir. Həmin ildə Üzeyir Hacıbəyov adına Bakı Musiqi Akademiyasının solo oxuma fakültəsinə daxil olmuşdur. 1999-cu ildə Bakı Musiqi Akademiyasını solo oxuma ixtisası üzrə bakalavr dərəcəsini, 2001-ci ildə vokal ixtisası üzrə magistr dərəcəsini, 2003-cü ildə isə həmin ixtisas üzrə aspirantura dərəcəsini bitirmişdir. Bu müddət ərzində bir çox incəsənət xadimlərinin yubiley konsertlərində, Heydər Əliyev Fondu və Azərbaycan Respublikası Mədəniyyət Nazirliyi tərəfindən təşkil olunmuş konsertlərdə və müxtəlif dövlət tədbirlərində dəfələrlə çıxışlar etmişdir. Bir sıra xarici ölkədə — Yaponiya, Fransa, Norveç, İtaliya, Almaniya, Özbəkistan, Türkiyə, Rusiya, İran, Ukrayna, Koreya, Çin, Pakistan, Misir, Türkmənistan, Tacikistan, Qırğızıstan və Küveytdə Azərbaycan mədəniyyətini uğurla təmsil etmişdir. 2008-ci ilin sentyabr ayında vokal sahəsində yaradıcılığını və xidmətlərini yüksək qiymətləndirən Azərbaycan prezidenti İlham Əliyevin sərəncamı ilə Azərbaycan Respublikasının əməkdar artisti fəxri adına layiq görülmüşdür. 2009-cu ildə Azərbaycan bəstəkarı, Azərbaycan peşəkar musiqisinin banisi Üzeyir bəy Hacıbəyovun yeni quruluşda səhnələşdirilmiş "Arşın mal alan" operettasında baş rol olan Əsgər rolunu ilk dəfə rus və Azərbaycan dillərində böyük uğurla ifa etmişdir. Tamaşanın rus dilində ilk premyerası 11 oktyabr 2009-cu ildə olmuşdur. 2010-cu ilin may ayında isə Prezident mükafatçısı adına layiq görülmüşdür.

Azərbaycan Milli Konservatoriyasının "milli vokal" kafedrasının baş müəllimi — dosentidir.

Hərbi xidmətdə olub, ailəlidir, 3 övladı var
</p>

export default function Participants() {
  return (
    <div className='participants-main-container flex flex-col'>
      <Navbar />
        <br/>
        <br/>
        <br/>
      <ContactLine title='Bütün iştirakçılar'/>
          <div className='m-2 flex flex-col '>
                    <ParticipantsMainItem  name='AZƏR ZEYNALOV' title='xalq artisti' src={azer} about={azerP} />
                    <ParticipantsMainItem  name='SAMİR CƏFƏROV' title='xalq artisti' src={samir} about={samirP} />
                    <ParticipantsMainItem  name='GÜLNAZ İSMAYILOVA' title='xalq artisti' src={gulnaz} about={gulnazP} />
                    <ParticipantsMainItem  name='Fidan Hacıyeva' title='xalq artisti' src={fidan} about={fidanP} />
                    <ParticipantsMainItem  name='Ramil Qasımov' title='əməkdar artist' src={ramil} about={ramilP} />
                    <ParticipantsMainItem  name='Fərid Əliyev' title='əməkdar artist' src={ferid} about={feridP} />
                    <ParticipantsMainItem  name='İnare babayeva' title='əməkdar artist' src={inare} about={inareP} />
                    <ParticipantsMainItem  name='Anton ferştandt' title='əməkdar artist' src={anton} about={antonP} />
                    <ParticipantsMainItem  name='Fəridə məmmədova' title='əməkdar artist' src={feride} about={ferideP} />
                    <ParticipantsMainItem  name='Anar Şuşalı' title='əməkdar artist' src={anar} about={anarP} />



          </div>
          <Email />
      <Footer />
    </div>
  )
}
