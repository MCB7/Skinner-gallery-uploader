import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../Footer/Footer';

import { queringCity } from '../../redux/actions/Cities/index';
// import { Card } from 'react-bootstrap';

import Elections from '../Elections/Elections';

// import Button from 'react-bootstrap/Button'
// import Footer from './Footer'
// import Header from './Header'
// import elections from './Elections';

const City = (props) => {
  //this is how you set state in a function component the first variable is the state youre referencing
  // second varible is a function to update the variable and whatever is in useState is set to be the
  //default value
  const [cityInputString, setCityInputString] = useState('enter city here');
  const dispatch = useDispatch();
  const finishedCityQuery = useSelector((state) => state.city);

  useEffect(() => {
    console.log(finishedCityQuery, 'use selector');
  }, [finishedCityQuery]);
  //this gives access to the cities inside the array og objects like [{statename:State, cities:[city1,city2,etc]},]
  const showCities = Object.keys(finishedCityQuery).map((key, index) => {
    return Object.keys(finishedCityQuery[key].cities).map((key2, index2) => {
      return console.log(
        finishedCityQuery[key].cities[index2],
        index,
        'sdfsdfsfsfdsdfsdf'
      );
    });
  });

  // should we use a hashmap to store candidate info, then parse through it to create our buttons? just an idea
  // for example: var candidates = [{k: "name", v1: "party", v2: "eliminated?"}]
  // var candidateButtons = []

  /*
  for (var p of props.candidates){
    if (p.v2 == true){
      var button = <Button variant="primary">
                    <h1>{p.k}</h1>
                    <h2>{p.v1} - Eliminated</h2>
    } else {
      var button = <Button variant="primary">
                    <h1>{p.k}</h1>
                    <h2>{p.v1}</h2>
    }
    </Button> 
    candidateButtons.push(button)

  } */
  // *************************** City Selector query *******************************
  const cityQuery = (e) => {
    e.preventDefault();
    if (cityInputString !== ' ') {
      dispatch(queringCity(cityInputString));
    }
  };

  // this will be used to render all of the elections of a given area pushing them into an array
  //and displaying the election name as an array

  const arr1 = ['nick', 'nick2', 'nick3', 'nick4'];
  let hi = [];
  const renderElections = () => {
    for (let i = 0; i < arr1.length; i++) {
      hi.push(<Elections name={arr1[i]} />);
      console.log(hi);
    }
  };
  renderElections();

  return (
    <div>
      <main>
        {hi}
        <form
          className='ui form'
          onSubmit={(e) => {
            cityQuery(e);
          }}
        >
          <input
            value={cityInputString}
            onChange={(e) => setCityInputString(e.target.value)}
            type='text'
          />
        </form>
        <div>
          {showCities}

          {/* <h1>{showthename()}</h1> */}
          <div>{/* put candidate button array here */}</div>
        </div>
        <div>
          <h1>Election Info</h1>
          {/* <p>{this.props.info}</p> */}
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default City;
