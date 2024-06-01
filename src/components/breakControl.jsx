// src/components/BreakControl.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementBreak, decrementBreak } from '../redux/actions';

const BreakControl = () => {
  const dispatch = useDispatch();
  const breakLength = useSelector((state) => state.timer.breakLength);

  return (
    <div>
      <h2 id="break-label">Break Length</h2>
      <button id="break-decrement" onClick={() => dispatch(decrementBreak())}>-</button>
      <span id="break-length">{breakLength}</span>
      <button id="break-increment" onClick={() => dispatch(incrementBreak())}>+</button>
    </div>
  );
};

export default BreakControl;
