import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Button } from '@mui/material';
import logo from '../images/logo.png';
import { useLocation } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const location = useLocation();
  
  useEffect(() => {
    setOpenMenu(false); 
  }, [location]);

  const Upbar = () => {
    return (
      <div className='navbar flex flex-row'>
        <div className='flex flex-row'>
          <div className='flex justify-center items-center w-20 h-20 -mt-1'>
            <Link to='/'>
              <img src={logo} alt='Logo' className='logo' />
            </Link>
          </div>
          <ul className='navbar-links flex flex-row justify-around'>
            <li><Link to='/' className='navbar-link'>Ana səhifə</Link></li>
            <li><Link to='/festival' className='navbar-link'>Festival</Link></li>
            <li><Link to='/photos' className='navbar-link'>Fotolar</Link></li>
            <li><Link to='/participants' className='navbar-link'>İştirakçılar</Link></li>
            <li><Link to='/media' className='navbar-link'>Media xəbərləri</Link></li>
            <li><Link to='/videos' className='navbar-link'>Videolar</Link></li>
          </ul>
        </div>
        <div className='social-icons flex'>
          <ul className='flex'>
            <li><Link to='https://www.instagram.com/operafestival.az/' className='navlink' target='_blank'><InstagramIcon className='icon' /></Link></li>
            <li><Link to='https://wa.me/+994505103020' className='navlink' target='_blank'><WhatsAppIcon className='icon' /></Link></li>
            <li><Link to='https://www.facebook.com/fh.vokalmusiqimektebi' className='navlink' target='_blank'><FacebookIcon className='icon' /></Link></li>
            <li><Link to='https://www.youtube.com/@fidanhacyevavokalmusiqimkt2631' className='navlink' target='_blank'><YouTubeIcon className='icon' /></Link></li>
          </ul>
        </div>
      </div>
    );
  };

  const SidebarMenu = () => {
    return (
      <div className='sidebar  justify-center text-3xl glass'>
        <CloseIcon className='close-button' onClick={toggleMenu} />
        <img src={logo} className='w-24' alt="Logo" />
        <ul className='flex flex-col gap-8' >
          <li><Link to='/' className='upbar-link' onClick={() => setOpenMenu(false)}>Ana səhifə</Link></li>
          <li><Link to='/festival' className='upbar-link' onClick={() => setOpenMenu(false)}>Festival</Link></li>
          <li><Link to='/photos' className='upbar-link' onClick={() => setOpenMenu(false)}>Fotolar</Link></li>
          <li><Link to='/participants' className='upbar-link' onClick={() => setOpenMenu(false)}>İştirakçılar</Link></li>
          <li><Link to='/media' className='upbar-link' onClick={() => setOpenMenu(false)}>Media Xəbərləri</Link></li>
          <li><Link to='/videos' className='upbar-link' onClick={() => setOpenMenu(false)}>Videolar</Link></li>
        </ul>
      </div>
    );
  };

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
      <div className='menu-open-icon-div'>
        <Button onClick={toggleMenu} className='menu-open-icon'>
          {openMenu ? <CloseIcon  /> : <MenuIcon />}
        </Button>
      </div>
    );
  };

  return (
    <div>
      {!isMobile && <Upbar />}
      {isMobile && <SidebarButton />}
      {openMenu && <SidebarMenu />}
    </div>
  );
}

export default Navbar;
