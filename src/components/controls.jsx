// src/components/Controls.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startTimer, stopTimer, resetTimer } from '../redux/actions';

const Controls = () => {
  const dispatch = useDispatch();
  const isRunning = useSelector((state) => state.timer.isRunning);
  const audioRef = document.getElementById('beep');

  const handleStartStop = () => {
    if (isRunning) {
      dispatch(stopTimer());
    } else {
      dispatch(startTimer());
    }
  };

  const handleReset = () => {
    dispatch(resetTimer());
    audioRef.pause();
    audioRef.currentTime = 0;
  };

  return (
    <div>
      <button id="start_stop" onClick={handleStartStop}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <button id="reset" onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Controls;
