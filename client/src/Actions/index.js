//actions are genereally a function. there are some things they cant do like say another function
//but most other things they can, also take to make sure to use "clean" state.
import {HOLD_ON} from './types'
import {FETCH_USER} from './types';
import axios from 'axios';

export const firstAction= (aPhrase) =>{
  console.log('the phrase is :', aPhrase)
  return{
    type:HOLD_ON,
    payload:"WE MADE AN ACTION DO SOMETHING"
  }
}
//used to find if a user is logged in or not.
export const fetchUser = ()=>{
  console.log('asdfkjsahfkjsahf inside fetch user')
  return function(dispatch){
    axios
    .get('/api/currentuser')
    .then(res => dispatch({type:FETCH_USER, payload:res}))
  }


  
};

