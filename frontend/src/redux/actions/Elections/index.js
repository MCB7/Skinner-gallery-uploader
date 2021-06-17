import {QUERY_FOR_ELECTIONS} from '../ActionTypes';
import axios from 'axios'

export const queryForElections= (slectedCity)=>{
  console.log(slectedCity,'inside the election actions')
// returns all of the elections from a selected city. runs in the useEffect for city page
  return async function(dispatch){
    const res =  await axios
    .get('/api/elections',{
      params:{
        ID:slectedCity
      }
    }) 
    //this responce is the object retturned from mongo its a object of arrays
    // this so you could itterate through this object
    console.log(res.data[0],'this is inside of th elecioonsnssss')
      dispatch({type:QUERY_FOR_ELECTIONS,
        payload:res.data })
    } 
}