import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

//this is the Bav bar and will not need to be loaded anywhere except in app.js
// because it sits above the Link tags inside the browserRouter tag it will render on top
//just the same as if you stacked it locally inside any component. the same if true for
//tthe footer at the bottom of app.js under the Link tags.
const handleClick = () => {};

const Navigation = () => {
  return (
    <div className='pos-f-t'>
      <div className='collapse' id='navbarToggleExternalContent'>
        <div className='bg-dark p-4'>
          <h4 className='text-white'>Collapsed content</h4>
          <span className='text-muted'>Toggleable via the navbar brand.</span>
        </div>
      </div>
      <nav className='navbar navbar-dark '>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarToggleExternalContent'
          aria-controls='navbarToggleExternalContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <NavLink to='/'>
          <h1 className='purple__choice'>Purple Choice</h1>
        </NavLink>
      </nav>
    </div>
  );
};
export default Navigation;
