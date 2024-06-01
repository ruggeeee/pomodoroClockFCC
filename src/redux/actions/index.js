// src/redux/actions/index.js
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
} from './actionTypes';

export const incrementBreak = () => ({
  type: INCREMENT_BREAK,
});

export const decrementBreak = () => ({
  type: DECREMENT_BREAK,
});

export const incrementSession = () => ({
  type: INCREMENT_SESSION,
});

export const decrementSession = () => ({
  type: DECREMENT_SESSION,
});

export const startTimer = () => ({
  type: START_TIMER,
});

export const stopTimer = () => ({
  type: STOP_TIMER,
});

export const resetTimer = () => ({
  type: RESET_TIMER,
});

export const tick = () => ({
  type: TICK,
});

export const switchMode = () => ({
  type: SWITCH_MODE,
});
