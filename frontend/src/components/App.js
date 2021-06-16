//dependencies
import React ,{useState} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// css/ sttyling
import 'bootstrap/dist/css/bootstrap.min.css';
import '../sass/style.scss';
// components
import NavBar from './NavBar';
import Landing from './Landing';
import City from './City';
import Candidate from './CandidateLanding';

const App = () => {
  const [SelectedCity, UpdateSelectedCity] = useState(null)
  console.log(UpdateSelectedCity,'inside appp')
    
  console.log(SelectedCity, 'here')
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
      <NavBar  UpdateSelectedCity={UpdateSelectedCity}/>
      {/* by putting navigation alone here it will always show on top of 
          any component rendered */}
          <Route path="/" exact={true} render={(props) => (
            <Landing {...props}
              SelectedCity={SelectedCity} 
              UpdateSelectedCity={UpdateSelectedCity} /> 
          )} />
          <Route path="/candidate" exact={true} component={Candidate} />

          <Route path={`/${SelectedCity}`} exact render={(props) => (
            <City {...props}
              SelectedCity={SelectedCity} 
              UpdateSelectedCity={UpdateSelectedCity} />)}  />
          
    </BrowserRouter>
  );
};

export default App;
