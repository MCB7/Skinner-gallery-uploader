import React from 'react';
// import Image from 'react-bootstrap/Image'
// import Navbar from 'react-bootstrap/Navbar'
// import Facebook from '../Icons/facebook'
// import LinkedIn from '../Icons/linkedin'
// import Mail from '../Icons/mail'
// import Twitter from '../Icons/twitter'
// import Nav from 'react-bootstrap/Nav'
// import Footer from './Footer'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const CandidateLanding = (props) => {
  // idk if we're doing href tags or something else for NavBar links,
  // feel free to choose whatever approach you think is necessary

  // i assume we're pulling bio, policies, etc. from a DB or .txt file, so we can put a variable as a prop
  return (
    <div>
      <Header />
      <div className='main'>
        {/* <Image src={this.props.profileImagePath} roundedCircle /> */}
        {/* <h1>{this.props.name}</h1> */}
        <div>
          {/* <Facebook />
          <LinkedIn />
          <Mail />
          <Twitter /> */}
        </div>
        {/* <Navbar sticky="top">
          <Nav.Item>
            <Nav.Link href="">Bio</Nav.Link>
            <Nav.Link href="">Policies</Nav.Link>
            <Nav.Link href="">Contact Info</Nav.Link>
          </Nav.Item>
        </Navbar> */}
        <div>
          <h1>Bio</h1>
          {/* <p>{this.props.bio}</p> */}
        </div>
        <div>
          <h1>Policies</h1>
          {/* <p>{this.props.policies}</p> */}
        </div>
        <div>
          <h1>Contact Info</h1>
          <p>
            For questions, comments, and concerns, please contact
            {/* <a href={`mailto:${this.props.email}`}>{this.props.email}</a> */}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default CandidateLanding;
