import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from './Footer';

import {queryForCandidiates} from '../redux/actions/Candidates';
import {queryForElections} from '../redux/actions/Elections'


import Elections from './Elections';
import elections from './Elections';


const City = ({SelectedCity, UpdateSelectedCity}) => {
  
  const [cityInputString, setCityInputString] = useState("enter city here");
  const dispatch = useDispatch();
  const candidiatesAll = useSelector(state => state.candidate)
  console.log(SelectedCity,'herererere')
  console.log(candidiatesAll,'again lets try tthis')
  const electionsAll = useSelector(state => state.elections)
    // this is log would return true for seattle
    // console.log(electionsAll[1].States[0].Wa[0].Seattle,'dslkfjslfkjsdlkfjslkfjslkdfjslj')
    console.log(electionsAll)
  



  useEffect(() => {
    //for now this will stop query for cities we dont have in the db
  
     dispatch(queryForElections(SelectedCity))
    dispatch(queryForCandidiates(SelectedCity))
  }, [])
 
  const queryingElectionsAndCandidates = () =>{
    
  }
  // this will be used to render all of the elections of a given area pushing them into an array
  //and displaying the election name as an array
let testData = electionsAll
  const arr1 = ['nick', 'nick2', 'nick3', 'nick4'];

  let renderTheElectionsArr = [];
  const renderElections = () => {
    for (let i = 0; i < testData.length; i++) {
      renderTheElectionsArr.push(<Elections name={electionsAll[i].type.replace('_',' ')} />);
      console.log(renderTheElectionsArr);
    }
  };
  renderElections();

  return (
    <div className='mainsite'>
      <div className='main'>
      <div style={{paddingTop:'10px'}}>
      {renderTheElectionsArr}
      </div>
      </div>
      <Footer />
    </div>
  );
};
export default City;
