// src/redux/reducers/timerReducer.js
import {
  INCREMENT_BREAK,
  DECREMENT_BREAK,
  INCREMENT_SESSION,
  DECREMENT_SESSION,
  START_TIMER,
  STOP_TIMER,
  RESET_TIMER,
  TICK,
  SWITCH_MODE
} from '../actions/actionTypes';

const initialState = {
  breakLength: 5,
  sessionLength: 25,
  isRunning: false,
  timeLeft: 1500, // 25 minutes in seconds
  timerLabel: 'Session',
};

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_BREAK:
      return { ...state, breakLength: state.breakLength < 60 ? state.breakLength + 1 : 60 };
    case DECREMENT_BREAK:
      return { ...state, breakLength: state.breakLength > 1 ? state.breakLength - 1 : 1 };
    case INCREMENT_SESSION:
      return { ...state, sessionLength: state.sessionLength < 60 ? state.sessionLength + 1 : 60, timeLeft: (state.sessionLength + 1) * 60 };
    case DECREMENT_SESSION:
      return { ...state, sessionLength: state.sessionLength > 1 ? state.sessionLength - 1 : 1, timeLeft: (state.sessionLength - 1) * 60 };
    case START_TIMER:
      return { ...state, isRunning: true };
    case STOP_TIMER:
      return { ...state, isRunning: false };
    case RESET_TIMER:
      return { ...initialState, timeLeft: initialState.sessionLength * 60 };
    case TICK:
      if (state.timeLeft === 0) {
        return { ...state, isRunning: false, timeLeft: state.timeLeft };
      }
      return { ...state, timeLeft: state.timeLeft - 1 };
    case SWITCH_MODE:
      if (state.timerLabel === 'Session') {
        return {
          ...state,
          timerLabel: 'Break',
          timeLeft: state.breakLength * 60,
          isRunning: true,
        };
      } else {
        return {
          ...state,
          timerLabel: 'Session',
          timeLeft: state.sessionLength * 60,
          isRunning: true,
        };
      }
    default:
      return state;
  }
};

export default timerReducer;
