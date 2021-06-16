import { QUERY_FOR_CANDIDATETS } from "../actions/ActionTypes"


const candidateReducer =(state=[], action)=>{
  console.log(action.type,'inside of the reducer')
    switch(action.type){
      
      case QUERY_FOR_CANDIDATETS:
      return [...state,action.payload]
      
        default: return state        
    }
}
export default candidateReducer