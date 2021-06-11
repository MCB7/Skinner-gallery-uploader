import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';

//this is the Bav bar and will not need to be loaded anywhere except in app.js
// because it sits above the Link tags inside the browserRouter tag it will render on top
//just the same as if you stacked it locally inside any component. the same if true for
//tthe footer at the bottom of app.js under the Link tags.

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className='row'>
        <div className='col-md-12'>
          <Navbar style={{ backgroundColor: '#1f2f35' }} expand='lg'>
            <Link to='/'>
              <Navbar.Brand style={{ color: 'white' }}>
                Purple Choice
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='mr-auto'>
                <Nav.Link href='/about-us'>Candidates</Nav.Link>
                <NavDropdown title='Elections' id='basic-nav-dropdown'>
                  <NavDropdown.Item href='#action/3.1'>Mayor</NavDropdown.Item>
                  <NavDropdown.Item href='#action/3.2'>
                    City Council
                  </NavDropdown.Item>
                  <NavDropdown.Item href='#action/3.3'></NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href='#action/3.4'>
                    More Information
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </div>
  );
};
export default Navigation;
