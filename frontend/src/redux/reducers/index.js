import {combineReducers} from 'redux';

import CandidateReducer from './CandidateReducer';
import CityReducer from './CityReducer';

export default combineReducers({
candidate:CandidateReducer,
city : CityReducer
})