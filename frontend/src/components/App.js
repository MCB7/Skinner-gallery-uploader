//dependencies
import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../sass/style.scss';

import NavBar from './NavBar';
import Landing from './Landing';
import City from './City';
import Candidate from './CandidateLanding';

const App = () => {
  const [SelectedCity, UpdateSelectedCity] = useState(null);
  console.log(UpdateSelectedCity, 'inside appp');
  console.log(SelectedCity, 'here');
  return (
    <BrowserRouter>
      <NavBar UpdateSelectedCity={UpdateSelectedCity} />
      <Route
        path='/'
        exact={true}
        render={(props) => (
          <Landing
            {...props}
            SelectedCity={SelectedCity}
            UpdateSelectedCity={UpdateSelectedCity}
          />
        )}
      />
      <Route path='/candidate' exact={true} component={Candidate} />
      <Route
        path={`/${SelectedCity}`}
        exact
        render={(props) => (
          <City
            {...props}
            SelectedCity={SelectedCity}
            UpdateSelectedCity={UpdateSelectedCity}
          />
        )}
      />
    </BrowserRouter>
  );
};

export default App;
