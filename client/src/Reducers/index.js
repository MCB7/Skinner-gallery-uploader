import { combineReducers } from "redux";
 import reducer1 from './Reducer1';
 import authReducer from "./authReducer";

 //this exports all reducers to the index.js file where the redux store is kept
 //the word on the left is what the state gets call throughout the entire application
 // the name on the left is the reducer that is responcible for that state.
 export default combineReducers({
   auth: authReducer,
   api: reducer1
 })