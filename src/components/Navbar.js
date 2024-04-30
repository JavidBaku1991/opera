import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Button } from '@mui/material';
import logo from '../images/logo.png';


import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);



 const Upbar=()=>{
  return (
    <div className={`navbar  glass w-screen`}>
      <div className='flex items-center '>
        <div className='flex justify-center items-center w-20 h-20 -mt-1'>
          <Link to='/opera'>
            <img src={logo} alt='Logo' className='logo'/>
          </Link>
        </div>
        <div className='navbar-links flex flex-row justify-around w-2/3'>
        
          <Link to='/opera' className='navbar-link'>
            Ana səhifə
          </Link>
            <Link to='/festival' className='navbar-link'>
            Festival
          </Link>
          <Link to='/photos' className='navbar-link'>
            Fotolar
          </Link>
          <Link to='/participants' className='navbar-link'>
            İştirakçılar
          </Link>
        </div>
    


      </div>
      <div className='social-icons flex '>
        <Link to='/contacts' className='navlink'></Link>
        <Link to='https://www.instagram.com/operafestival.az/' className='navlink' target='_blank'>
          <InstagramIcon className='icon' />
        </Link>
        <Link to='https://wa.me/+994505103020' className='navlink' target='_blank'>
          <WhatsAppIcon className='icon' />
        </Link>
        <Link to='https://www.facebook.com/fh.vokalmusiqimektebi' className='navlink' target='_blank'>
          <FacebookIcon className='icon' />
        </Link>
        <Link to='https://www.youtube.com/@fidanhacyevavokalmusiqimkt2631' className='navlink' target='_blank'>
          <YouTubeIcon className='icon' />
        </Link>
      </div>
    </div>
  );
 }

 const SidebarMenu=()=>{
  return(
    <div className='sidebar  flex flex-col justify-center text-3xl glass'>

      <img src={logo} className='w-24'/>
    <Link to='/opera' className='upbar-link' onClick={() => setOpenMenu(false)} >
      Ana səhifə
    </Link>
    <Link to='/festival' className='upbar-link' onClick={() => setOpenMenu(false)} >
      Festival
    </Link>
    
    <Link to='/photos' className='upbar-link' onClick={() => setOpenMenu(false)} >
      Fotolar
    </Link>
    <Link to='/participants' className='upbar-link' onClick={() => setOpenMenu(false)} >
      İştirakçılar
    </Link>
  </div>
  )
 }
    function toggleMenu() {
        setOpenMenu(currentState => !currentState);
    }

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 1060);
    };

    const handleScroll = () => {
        setOpenMenu(false); // Close menu on scroll
    };


    useEffect(() => {
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll); // Add scroll listener
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll); // Remove scroll listener
        };
    }, []);
    const SidebarButton = () => {
        return (
            <div className='menu-open-icon-div' >
                <Button onClick={toggleMenu} className='menu-open-icon'>
                    {openMenu ? <CloseIcon /> : <MenuIcon />}
                </Button>
            </div>
        )
    }

    return (
        <div>
            {!isMobile && <Upbar />}
            {isMobile && <SidebarButton />}
            {openMenu && <SidebarMenu />}
        </div>
    );
}

export default Navbar;
