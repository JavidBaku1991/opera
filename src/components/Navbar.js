import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';


import logo from '../images/logo.png';
function Navbar
() {





  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 50) {
        setScrolling(true);
      } 
      else {
        setScrolling(false);
      } 


    };



    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




  return (
    <div className={scrolling ? 'navbar scrolled' : 'navbar'}>
        <div className='flex'>
         
                    <div className='flex  justify-center align-middle w-20 h-20 -mt-1'>
                  <Link to='/opera'>   <img src={logo} className='mainlogo'/> </Link>
                  </div>
         
                  
                <div className='navbar-link '>
                    <Link  to='/festival'> Festival</Link>
                </div>
                <div className='navbar-link'>
                    <Link  to='/festival'> Mediada Biz</Link>
                </div>
                <div className='navbar-link'>
                    <Link  to='/participants'> İştirakçılar</Link>
                </div>
                

        </div>
        <div className='social-icons'>
        
              <Link to='/contacts' className='navlink'>
                <LocalPostOfficeIcon  className='icon'/>
                </Link>
                <Link to='https://www.instagram.com/operafestival.az/'  className='navlink' target='_blank'>

                <InstagramIcon className='icon' />
                </Link>

                <Link to="https://wa.me/+994505103020"  className='navlink' target='_blank'>
                <WhatsAppIcon  className='icon' />
                </Link>

                <Link to='https://www.facebook.com/fh.vokalmusiqimektebi'  className='navlink' target='_blank' >
                <FacebookIcon  className='icon' />
                </Link>
                <Link to='https://www.youtube.com/@fidanhacyevavokalmusiqimkt2631'  className='navlink' target='_blank' >
                <YouTubeIcon  className='icon' />
                </Link>                
        </div>
        
        


    </div>
  )
}

export default Navbar
