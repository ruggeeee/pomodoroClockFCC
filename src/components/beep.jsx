// src/components/Beep.jsx
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import sounds from '../assets/sounds';

const Beep = () => {
  const audioRef = useRef(null);
  const { timeLeft, isRunning } = useSelector((state) => state.timer);

  useEffect(() => {
    if (timeLeft === 0 && isRunning) {
      audioRef.current.play().catch((error) => {
        console.log("Audio playback interrupted: ", error);
      });
    }
  }, [timeLeft, isRunning]);

  return (
    <audio
      id={sounds.beep.id}
      ref={audioRef}
      src={sounds.beep.src}
      preload="auto"
    />
  );
};

export default Beep;
