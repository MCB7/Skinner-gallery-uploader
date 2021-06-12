// import React, { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

//this is the Bav bar and will not need to be loaded anywhere except in app.js
// because it sits above the Link tags inside the browserRouter tag it will render on top
//just the same as if you stacked it locally inside any component. the same if true for
//tthe footer at the bottom of app.js under the Link tags.

const Navigation = () => {
  // const [open, setOpen] = useState(false);

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
        <Link to='/'>
          <h1 className='brand__name'>Purple Choice</h1>
        </Link>
      </nav>
    </div>
  );
};
export default Navigation;
