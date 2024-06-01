// src/components/Beep.jsx
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

const Beep = () => {
  const audioRef = useRef(null);
  const { timeLeft, timerLabel } = useSelector((state) => state.timer);

  useEffect(() => {
    if (timeLeft === 0 && timerLabel === 'Session') {
      audioRef.current.play();
    }
  }, [timeLeft, timerLabel]);

  return <audio id="beep" ref={audioRef} src={require('../assets/alarm-beep-audio.mp3').default} />;
};

export default Beep;
