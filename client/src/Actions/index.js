//actions are genereally a function. there are some things they cant do like say another function
//but most other things they can, also take to make sure to use "clean" state.
import {HOLD_ON} from './types'

export const firstAction= (aPhrase) =>{
  console.log('the phrase is :', aPhrase)
  return{
    type:HOLD_ON,
    payload:"WE MADE AN ACTION DO SOMETHING"
  }
}