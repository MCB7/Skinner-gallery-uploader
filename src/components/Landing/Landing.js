import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from 'react-bootstrap/Navbar'
import '../../assets/icons/all';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import { Link } from 'react-router-dom';
//link tags do not cause the page to refresh butt the dom to rerender.

function Landing() {
  return (
    <div className='mainSite'>
      <Header />
      <main>
        {/* eventually tthe city and candidate variables will be passed in 
        however for now we'll use statics until it looks correct */}
        <p>
          <Link to={'/candidate'}>Candidates</Link>
          {/* link tags are very similar to anchor */}
        </p>
        <p>
          <Link to={'/city'}>city</Link>
        </p>
        Content Here For Trial
      </main>
      <Footer />
    </div>
  );
}

export default Landing;
