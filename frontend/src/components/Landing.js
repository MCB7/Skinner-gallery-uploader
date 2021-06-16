import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import choice from '../assets/images/choice.png';

// import { Link } from 'react-router-dom';

function Landing({ UpdateSelectedCity }) {
  //when clicking on the city this sets the city variable in the app
  const UpdateSelectedCityagain = (cityname) => {
    console.log(cityname);
    UpdateSelectedCity(cityname);
  };

  return (
    <div className='mainSite'>
      <div className='main'>
        <img src={choice} alt='choice' />
        <div className='landing__bio'>
          <h1>Local Elections Matter</h1>
          <p>
            Local Elections affect our daily lives but fewer than 15% of
            eligible citizens are turning out to vote for our community leaders.
          </p>
          <p>
            Purple Choice is here to help you! We provide all of the information
            you need to know about your local election candidates.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Landing;
