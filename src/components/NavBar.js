// import React, { useState } from 'react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { SidebarData } from './SidebarData';

//this is the Bav bar and will not need to be loaded anywhere except in app.js
// because it sits above the Link tags inside the browserRouter tag it will render on top
//just the same as if you stacked it locally inside any component. the same if true for
//tthe footer at the bottom of app.js under the Link tags.

const Navigation = () => {
  // const [open, setOpen] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar, console.log(sidebar));
  return (
    <>
      <div className='navbar'>
        <Link to='#' className='menu-bars'>
          <FaBars onClick={showSidebar} />
        </Link>
        <Link to='/'>
          <div className='brand__name'>Purple Choice</div>
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className='navbar-toggle'>
            <Link to='#' className='menu-bars'>
              <AiOutlineClose />
            </Link>
          </li>
          <h1>Cities</h1>

          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
export default Navigation;
