// reducer.js
import {
  INCREMENT_BREAK,
  DECREMENT_BREAK,
  INCREMENT_SESSION,
  DECREMENT_SESSION,
  START_TIMER,
  STOP_TIMER,
  RESET_TIMER,
  TICK,
  SWITCH_MODE,
} from '../actions/actionTypes';

const initialState = {
  breakLength: 5,
  sessionLength: 25,
  timeLeft: 1500, // 25 minutes in seconds
  timerLabel: 'Session',
  isRunning: false,
};

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_BREAK:
      return {
        ...state,
        breakLength: state.breakLength < 60 ? state.breakLength + 1 : state.breakLength,
      };
    case DECREMENT_BREAK:
      return {
        ...state,
        breakLength: state.breakLength > 1 ? state.breakLength - 1 : state.breakLength,
      };
    case INCREMENT_SESSION:
      return {
        ...state,
        sessionLength: state.sessionLength < 60 ? state.sessionLength + 1 : state.sessionLength,
        timeLeft: (state.sessionLength + 1) * 60,
      };
    case DECREMENT_SESSION:
      return {
        ...state,
        sessionLength: state.sessionLength > 1 ? state.sessionLength - 1 : state.sessionLength,
        timeLeft: (state.sessionLength - 1) * 60,
      };
    case START_TIMER:
      return {
        ...state,
        isRunning: true,
      };
    case STOP_TIMER:
      return {
        ...state,
        isRunning: false,
      };
    case RESET_TIMER:
      return {
        ...initialState,
        timeLeft: initialState.sessionLength * 60,
      };
    case TICK:
      return {
        ...state,
        timeLeft: state.timeLeft - 1,
      };
    case SWITCH_MODE:
      return {
        ...state,
        timerLabel: state.timerLabel === 'Session' ? 'Break' : 'Session',
        timeLeft: state.timerLabel === 'Session' ? state.breakLength * 60 : state.sessionLength * 60,
      };
    default:
      return state;
  }
};

export default timerReducer;
