import {QUERY_FOR_ELECTIONS} from '../actions/ActionTypes';


const cityReducer =(state=[], action)=>{
    switch(action.type){
        case QUERY_FOR_ELECTIONS:
          console.log(action.payload, 'the payload is there')
          if(action.payload.length === 0){
            console.log('itst working empty')
            return state
          }else{
          console.log(action.payload, 'working reducer state set, this will be the new state')
         return action.payload
        }

        default: return state
         
    }
}
export default cityReducer
