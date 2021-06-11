import React from 'react';
import Facebook from '../assets/icons/facebook';
import LinkedIn from '../assets/icons/linkedin';
import Twitter from '../assets/icons/twitter';
import Mail from '../assets/icons/mail';

// see Navigation for explanation of how this is set up.
const Footer = () => {
  return (
    <>
      <footer className='footer__contents'>
        <div className='footer__icons'>
          <Facebook />
          <LinkedIn />
          <Mail />
          <Twitter />
        </div>
      </footer>
      <div className='disclaimer__content'>
        <p className='disclaimer__text'>
          Purple Choice is not affiliated with any political party, candidate,
          or interest group
        </p>
      </div>
    </>
  );
};
export default Footer;
