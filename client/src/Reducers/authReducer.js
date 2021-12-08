import { FETCH_USER } from "../Actions/types";


// null means we dont know if a user is logged in/ they might be logging in 
//, an id means a user is logged in 
// and lastly false means we know the user is logged in
export default function(state=null,action){
  console.log(action)
  switch(action.type){
    case FETCH_USER :
      console.log('this is inside the reducer')
      console.log(action.payload)
      return action.payload.data || false 

    default: return state;
  }
}