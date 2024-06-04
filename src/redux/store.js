// redux/store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import timerReducer from './reducers/timerReducer';

const rootReducer = combineReducers({
  timer: timerReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
