import React from 'react';
import Icons from './Icons';

// see Navigation for explanation of how this is set up.
const Footer = () => {
  return (
    <>
      <footer className='footer__contents'>
        <div className='footer__icons'>
          <Icons />
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
