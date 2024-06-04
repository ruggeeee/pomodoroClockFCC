// src/redux/reducers/index.js
import { combineReducers } from 'redux';
import timerReducer from './timerReducers';

const rootReducer = combineReducers({
  timer: timerReducer
});

export default rootReducer;
