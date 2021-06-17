import {combineReducers} from 'redux';

import CandidateReducer from './CandidateReducer';
import ElectionRReducer from './ElectionReducer';

export default combineReducers({
candidate:CandidateReducer,
elections : ElectionRReducer
})