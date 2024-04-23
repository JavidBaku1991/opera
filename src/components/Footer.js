import React from 'react'
import { Box} from '@mui/material'
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import HomeIcon from '@mui/icons-material/Home';
import { motion } from "framer-motion";
import FramerMotion from '../customHooks/FramerMotion';

// logos
import mtn from '../images/mtn.png'
import filar from '../images/filar.png'
import mugam from '../images/mugam.png'
import mekteb from '../images/01.png'
import { Link } from 'react-router-dom';


 const Footer = () => {
  return (
<footer  className='footer-container' >
    <Box className='footer pt-3'>
        <Box className='footer-up'>
         
                  <FramerMotion sx={{width:'33%'}}
            duration={{ duration: 0.5 }}
            move={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }} >
        <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'500px',marginTop:'20px'}} className='footer-info-container'>   
        <Link to='https://culture.gov.az/'> <img src={mtn}  className='w-24 mt-2 '/> </Link>   
        <Link to='http://www.philharmonichall.az/'> <img src={filar}  className='w-24 mt-2 ml-4 '/> </Link>   
        <Link to='https://icm.az/'> <img src={mugam}  className='w-16  ml-4'/> </Link>   
        <Link to='https://www.facebook.com/search/top?q=fidan%20hac%C4%B1yevan%C4%B1n%20vokal%20musiqi%20m%C9%99kt%C9%99bi'> <img src={mekteb}  className='h-24  w-24 ml-4 mt-[-4]'/> </Link>   
    
        </Box>
 </FramerMotion>
         
                  <FramerMotion sx={{width:'33%'}}
            duration={{ duration: 0.5 }}
            move={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }} >
        {/* <img  src={Logo} className='footer-logo' alt='image'/> */}
        <Box sx={{display:'flex',flexDirection:'column',marginRight:'80px'}} className='mr-14 '> 
            
              <h3 className='footer-info'><PhoneAndroidIcon  className='footer-icon' />+(994)50 510 30 20 </h3>
              <h3 className='footer-info'>  <MarkEmailReadIcon className='footer-icon'/>  example@mail.ru </h3>
              <h3 className='footer-info'>  <HomeIcon className='footer-icon'/>   Şəmsi Bədəlbəyli küçəsi , 106 </h3>
        </Box>
 </FramerMotion>
   </Box>
 
    <motion.div className='rights'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
      variants={{
        hidden: { opacity: 0, x: -150 },
        visible: { opacity: 1, x: 0 },
      }}
    >
         <h1  > Fidan Hacıyeva Vokal Musiqi Məktəbi  &copy;   Bütün hüquqlar qorunur. </h1> 
        </motion.div>
          </Box>
   
</footer>
    )
}

export default Footer;

