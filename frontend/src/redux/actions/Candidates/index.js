import {QUERY_FOR_CANDIDATETS} from '../ActionTypes';
import axios from 'axios'

export const queryForCandidiates= (slectedCity)=>{
  console.log(slectedCity,'inside the actions')
// returns all of the elections from a selected city. runs in the useEffect for city page
  

  return async function(dispatch){
    const res =  await axios
    .get('/api/candidates',{
      params:{
        ID:slectedCity
      }
    })
    
    //this responce is the object retturned from mongo its a object of arrays
    // this so you could itterate through this object

    console.log(res.data[0].bio,'inside of atctioinss')
      

      dispatch({type:QUERY_FOR_CANDIDATETS,
        payload:res.data })
    } 
}