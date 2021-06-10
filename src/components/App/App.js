//dependencies
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// css/ sttyling
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/icons/all';
import '../../sass/style.scss';
// components
import NavBar from '../NavBar/NavBar';
import Landing from '../Landing/Landing';
import City from '../City/City';
import Candidate from '../CandidateLanding/CandidateLanding';

const App = () => {
  // this is going to be how we call state first assign it to a variable and then
  //query for the state we need. the name state comes from readux, candidate comes from
  // the reducers index.js youll see in the combine reducers call
  // const candidateName = useSelector(state => state.candidiate.name)
  return (
    // you wrap the routes in the browser router typical setup
    // the route needs a pathname/ what the / extension is exact is important to be true
    // then what component you want to show you can stack routes with the same path
    // but show differernt components to stack them up.
    <BrowserRouter>
      <NavBar />
      {/* by putting navigation alone here it will always show on top of 
          any component rendered */}
      <Route path='/' exact={true} component={Landing} />
      <Route path='/candidate' exact={true} component={Candidate} />
      {/* this is gonna be how we have to pass in candidates through state */}
      {/* <Route path="{`/candidaite/${candidateName}`}" exact={true} component={Candidate} /> */}

      <Route path='/city' exact={true} component={City} />
    </BrowserRouter>
  );
};

export default App;
