// src/components/Beep.jsx
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

const Beep = () => {
  const audioRef = useRef(null);
  const { timeLeft, isRunning } = useSelector((state) => state.timer);

  useEffect(() => {
    if (timeLeft === 0 && isRunning) {
      audioRef.current.play();
    }
  }, [timeLeft, isRunning]);

  return (
    <audio
      id="beep"
      ref={audioRef}
      src={require('../assets/alarm-beep-audio.mp3').default}
      preload="auto"
    />
  );
};

export default Beep;
