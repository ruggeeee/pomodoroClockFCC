import logo from './logo.svg';
import './App.css';
import React from 'react';
import BreakControl from "./components/breakControl";
import SessionControl from './components/sessionControl';
import Timer from './components/timer';
import Controls from './components/controls';
import Beep from './components/beep';

function App() {
  return (
    <div className="App">
      <h1>25 + 5 Clock</h1>
      <BreakControl />
      <SessionControl />
      <Timer />
      <Controls />
      <Beep />
    </div>
  );
};

export default App;
