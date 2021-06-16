import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from './Footer';

import {queryForCandidiates} from '../redux/actions/Candidates';


import Elections from './Elections';


const City = ({SelectedCity, UpdateSelectedCity}) => {
  
  const [cityInputString, setCityInputString] = useState("enter city here");
  const dispatch = useDispatch();
  const candidiatesAll = useSelector(state => state.candidate)
  console.log(SelectedCity,'herererere')
  console.log(candidiatesAll,'again lets try tthis')


  useEffect(() => {
    //for now this will stop query for cities we dont have in the db
    if(SelectedCity !== 'Seattle'){
      return
    }else
    //  dispatch(queryForElections(SelectedCity))
    dispatch(queryForCandidiates(SelectedCity))
  }, [])
 
  // this will be used to render all of the elections of a given area pushing them into an array
  //and displaying the election name as an array

  const arr1 = ['nick', 'nick2', 'nick3', 'nick4'];
  let renderTheElectionsArr = [];
  const renderElections = () => {
    for (let i = 0; i < arr1.length; i++) {
      renderTheElectionsArr.push(<Elections name={arr1[i]} />);
      console.log(renderTheElectionsArr);
    }
  };
  renderElections();

  return (
    <div className='mainsite'>
      <div className='main'>
      {renderTheElectionsArr}
      </div>
      
    hi there
   
  
      <Footer />
    </div>
  );
};
export default City;
