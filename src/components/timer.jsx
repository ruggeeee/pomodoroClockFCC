import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tick, switchMode } from '../redux/actions';

const Timer = () => {
  const { timerLabel, timeLeft, isRunning } = useSelector((state) => state.timer);
  const dispatch = useDispatch();

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        if (timeLeft > 0) {
          dispatch(tick());
        } else {
          dispatch(switchMode());
        }
      }, 1000);
    } else if (!isRunning && timeLeft !== 0) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft, dispatch]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div>
      <h2 id="timer-label">{timerLabel}</h2>
      <span id="time-left">{formatTime(timeLeft)}</span>
    </div>
  );
};

export default Timer;
