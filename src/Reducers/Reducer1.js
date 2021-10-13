
//reducers use typically switch statments to determine which state will be returned,
//this generally isnt a place for logic, thats usually the actions
//you have to have dumby data in the reducer to set up redux or it wont work and will just
//error out.
import { HOLD_ON } from "../Actions/types"

 const reducer1 = (state=['hey'],action) => {
  console.log('the action type is :',action.type)
  switch(action.type){
   
    
    case HOLD_ON:
      console.log("in the reducer the state will be :", action.payload)
      return[state, action.payload]
    

      default:
        return state
  }
}
export default reducer1